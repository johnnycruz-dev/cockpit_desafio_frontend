import { render, screen } from '@testing-library/react';
import { Input } from '.';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'email', 
        defaultValue: '', 
        error: '', 
        registerField: () => {
          return {
            name: 'email',
            ref: '',
            path: 'value',
          }
        }
      }
    }
  }
})

describe('Input component', () => {
  it('renders correctly', () => {
    render(
      <Input
        labelText="Entre com o seu email"
        name="email"
        placeholder="Email"
      />
    );
  
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument;
  })
})
