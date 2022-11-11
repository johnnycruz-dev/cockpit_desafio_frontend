import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0 2rem;

  > h2 {
    margin-top: 3rem;
    text-align: center;
    color: var(--text-body);
    font-size: 2rem;
    font-weight: 500;
  }

  > img {
    width: 100%;
    max-width: 800px;
    object-fit: cover;
  }
`

export const Content = styled.main`
  width: 100%;

  h3 {
    color: var(--blue);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 769px) {
    max-width: 1280px;
  }
`

export const Tribes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  @media screen and (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(5, 1fr);
  }
`