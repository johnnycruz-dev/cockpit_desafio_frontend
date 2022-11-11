import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid var(--blue);
  padding: 2rem 1rem;
  background-color: var(--white);

  &:hover {
    background-color: ${shade(0.1, '#FFF')};
  }

  svg {
    color: var(--blue);
    width: 40px;
    height: 40px;
  }

  p {
    color: var(--blue);
    font-size: 1rem;
  }
`