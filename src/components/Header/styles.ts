import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 100%;
    max-width: 150px;
    object-fit: cover;
    margin-right: 1.5rem;
  }

  > svg {
    margin-left: auto;
    margin-right: 1.5rem;
    background-color: var(--blue-light);
    color: var(--blue);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    padding: 0.4rem;
  }

  @media screen and (min-width: 769px) {
    > img {
      max-width: 200px;
    }
  }
`