import { useCallback, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { api } from '../../services/api';

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import GoodViewImg from '../../assets/boavista.png';
import LogoImg from '../../assets/cockpit_logo.svg';
import MicrosoftImg from '../../assets/Microsoft_logo.png';
import LoginBackground from '../../assets/security_4x.png';

import { Toast } from '../../components/Toast';
import getValidationErrors from '../../utils/getValidationErrors';
import { AnimationContainer, Container, GoodViewImage, LeftContent, LoginBackgroundImage, Logo, MicrosoftButton, RightContent } from "./styles";

interface SignInFormData {
  email: string;
  password: string;
}

interface UserData {
  email: string;
  password: string;
}

export function Login() {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const renderLogo = <Logo src={LogoImg} alt="Logo" />
  const [isError, setIsError] = useState(false);

  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Este campo é requirido!')
            .email('Digite um e-mail válido!'),
          password: Yup.string().required('Este campo é requirido!'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.get<UserData[]>('/users');

        const user = response.data.find(user => user.email === data.email);

        if (user?.password === data.password) { 
          navigate('/dashboard');
        }

        throw new Error();       
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 5000);
      }
    },
    [navigate],
  );

  const renderForm = () => {
    return (
      <>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input 
            labelText="Entre com o seu email"
            name="email"
            placeholder="Email"
          />
          <Input 
            labelText="e a sua senha"
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">
            Entrar
          </Button>
        </Form>
        <h2>ou</h2>
        <MicrosoftButton>
          <img src={MicrosoftImg} alt="Logo Microsoft" />
          <p>Sign in with Microsoft</p>
        </MicrosoftButton>
      </>
    )
  }

  const renderMobile = () => {
    return (
      <>
        {renderLogo}
        {renderForm()}
      </>
    )
  }

  const renderDesktop = () => {
    return (
      <>
        <LeftContent>
          {renderLogo}
          <LoginBackgroundImage src={LoginBackground} alt="Imagem" />
          <GoodViewImage src={GoodViewImg} alt="Boa Vista" />
        </LeftContent>
        <RightContent>
          <AnimationContainer>
            {renderForm()}
          </AnimationContainer>
        </RightContent>
      </>
    )
  }

  return (
    <Container>
      {isError && <Toast 
        type='error' 
        title='Erro na autenticação' 
        message='Ocorreu um erro ao fazer login, cheque as credenciais' 
      />}
      {isMobile ? renderMobile() : renderDesktop()}
    </Container>
  )
}