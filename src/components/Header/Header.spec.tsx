import { render, screen } from '@testing-library/react';
import { Header } from '.';

jest.mock('react-router-dom', () => {
  return {
    useNavigate() {
      return {
        navigate: '/'
      }
    }
  }
})

describe('Header component', () => {
  it('renders correctly', () => {
    render(
      <Header />
    );
  
    expect(screen.getByText('Sair')).toBeInTheDocument
    expect(screen.getByTestId('PersonIcon')).toBeInTheDocument
    expect(screen.getByTestId('PersonIcon')).toBeInTheDocument
    expect(screen.getByAltText('Logo')).toBeInTheDocument
  })
})
