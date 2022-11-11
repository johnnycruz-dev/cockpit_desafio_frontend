import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  & + & {
    margin-top: 1.5rem;
  }

  label {
    margin-bottom: 0.25rem;
    color: var(--white);
    font-size: 1rem;
  }

  input {
    background: var(--white);
    border-radius: 0.5rem;
    padding: 1rem;
    width: 100%;
    height: 2.5rem;
    border: 2px solid var(--gray);
    color: var(--gray-dark);

    ${props =>
      props.isErrored &&
      css`
        border-color: var(--red);
    `}

    ${props =>
      props.isFocused &&
      css`
        border-color: var(---blue);
      `}

    ${props =>
      props.isFilled &&
      css`
        color: var(--blue);
    `}


    &::placeholder {
      color: var(--gray);
    }
  }
`

export const Error = styled.span`
  color: var(--red);
  font-size: 1rem;
  margin: 0 auto;
`;