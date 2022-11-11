import { render, screen } from '@testing-library/react';
import { Tribe } from '.';

describe('Tribe component', () => {
  it('renders correctly', () => {
    render(
      <Tribe
        name='Título da tribo'
        icon='hammer'
      />
    );
      
    expect(screen.getByText('Título da tribo')).toBeInTheDocument;
    expect(screen.getByTestId('GavelIcon')).toBeInTheDocument;
  })
})
