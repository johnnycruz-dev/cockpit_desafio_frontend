import styled, { css, keyframes } from 'styled-components';

interface ContainerProps {
  type: 'error' | 'success';
}

const apperFromTop = keyframes`
  from {
    opacity: 0;
    top: 0;
    right: 0;
    transform: translate(0px, 20px);
  }
  to {
    opacity: 1;
    top: 0;
    right: 0;
    transform: translate(-20px, 20px);
  }
`;

export const Container = styled.div<ContainerProps>`
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 0.5rem;
  overflow: hidden;
  width: 250px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #FFF;
  border: 1px solid #FFF;
  animation: ${apperFromTop} 2s;

  > span {
    font-size: 1rem;
  }

  > p {
    font-size: 0.75rem;
    margin-top: 0.75rem;
    color: #949494;
    max-width: 220px;
  }

  ${props => props.type === 'error' ? css`
    border-color:  #cd4042;

    span {
      color: #cd4042
    }
  ` : css`
    border-color: #68d77e;

    span {
      color: #68d77e
    }
  `}
`