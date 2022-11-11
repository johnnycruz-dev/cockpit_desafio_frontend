import { render, screen } from '@testing-library/react';
import { Toast } from '.';

describe('Toast component', () => {
  it('renders correctly', () => {
    render(
      <Toast
        type="error"
        title='Título do erro'
        message='Descrição do erro'
      />
    );
  
    expect(screen.getByText('Título do erro')).toBeInTheDocument;
    expect(screen.getByText('Descrição do erro')).toBeInTheDocument;
  })
})
