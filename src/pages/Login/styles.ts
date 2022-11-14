import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: var(--blue-light);
  padding: 0 1.5rem;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-top: 4rem;

    > div {
      width: 100%;
    }

    > button {
      width: 100%;
      margin-top: 1.5rem;
    }

  }
  
  h2 {
    font-size : 2rem;
    color: var(--white);
    margin-top: 2rem;
    font-weight: 400;
  }

  @media screen and (min-width: 769px) {
    flex-direction: row;
    padding: 0;
    background-color: var(--white);

    form {
      margin-top: 0;
      max-width: 500px;

      > button {
        width: auto;
        margin-left: auto;
      }
    }
  }
`;

export const LeftContent = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 0 2rem;
`;

const apperFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  animation: ${apperFromRight} 2s;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const RightContent = styled.section`
  width: 100%;
  height: 100vh;
  background-color: var(--blue-light);
  border: 2px solid var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 3rem;
`

export const Logo = styled.img`
  width: 100%;
  max-width: 200px;
  margin-top: 3rem;
  object-fit: cover;

  @media screen and (min-width: 769px) {
    max-width: 400px;
    margin-top: 0;
  }
`

export const MicrosoftButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  height: 3rem;
  background-color: var(--gray-dark);
  border: none;
  padding: 0 1rem;

  &:hover {
    background-color: ${shade(0.1, '#4b5c6b')};
  }

  p {
    color: var(--white);
    font-size: 1rem;
  }

  > img {
    margin-right: 0.5rem;
    width: 100%;
    max-width: 30px;
    object-fit: cover;
  }

  @media screen and (min-width: 769px) {
    max-width: 500px;
  }
`

export const LoginBackgroundImage = styled.img`
  width: 100%;
  object-fit: cover;
`

export const GoodViewImage = styled.img`
  width: 100%;
  max-width: 150px;
  object-fit: cover;
`