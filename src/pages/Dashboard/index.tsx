import { useEffect, useState } from "react";
import { Header } from "../../components/Header";

import WelcomeBackground from '../../assets/Welcome.jpg';

import { Tribe } from "../../components/Tribe";

import { api } from "../../services/api";
import { Container, Content, Tribes } from "./styles";

interface TribeData extends IconsTypes {
  id: number;
  name: string;
}

export type IconsTypes = {
  icon: "chart-bar" | 
  "briefcase-24" | 
  "handshake" | 
  "hammer" | 
  "layout-11";
}

export function Dashboard() {
  const [tribes, setTribes] = useState<TribeData[]>([]);

  useEffect(() => {
    async function loadTribes() {
      const response = await api.get<TribeData[]>('/tribes');

      setTribes(response.data);
    }

    loadTribes();
  }, [])

  return (
    <>
      <Header />
      <Container>
        <h2>Bem vindo ao Cockpit, você no controle de tudo!</h2>
        <img src={WelcomeBackground} alt="Bem-vindo" />
        <Content>
          <h3>Selecione uma tribo</h3>
          <Tribes>
            {tribes.map(tribe => (
              <Tribe key={tribe.id} name={tribe.name} icon={tribe.icon} />
            ))}
          </Tribes>
        </Content>
      </Container>
    </>
  )
}