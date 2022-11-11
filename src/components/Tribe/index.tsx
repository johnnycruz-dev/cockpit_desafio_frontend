import { BarChart, BusinessCenter, Gavel, Handshake, ViewQuilt } from '@mui/icons-material';

import { IconsTypes } from "../../pages/Dashboard";

import { Container } from "./styles";

const IconsObj = {
  "chart-bar": <BarChart />,
  "briefcase-24": <BusinessCenter />,
  "handshake": <Handshake />,
  "hammer": <Gavel />,
  "layout-11": <ViewQuilt />,
}

interface TribeProps extends IconsTypes {
  name: string;
}

export function Tribe({ name, icon }: TribeProps) {
  return (
    <Container type='button'>
      {IconsObj[icon]}
      <p>{name}</p>
    </Container>
  )
}