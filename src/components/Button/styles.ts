import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 1rem;
  border: 2px solid var(--blue);
  border-radius: 0.5rem;
  color: var(--blue);
  background-color: var(--white);
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background-color: ${shade(0.1, '#FFF')};
  }
`