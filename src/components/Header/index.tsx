import { Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import { Button } from '../Button';

import LogoImg from '../../assets/cockpit_logo.svg';

import { Container } from "./styles";

export function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <img src={LogoImg} alt="Logo" />
      <Person width={24} />
      <Button type='button' onClick={() => navigate('/')}>Sair</Button>
    </Container>
  )
}