import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('<App />', () => {
  it('renders a list of rick and morty characters', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await screen.findByAltText('An image of Rick Sanchez');

    const link = await screen.findByText('Morty Smith');
    userEvent.click(link);

    await screen.findByAltText('An image of Morty Smith');
  });

  it('renders a character detail page directly using initialEntries', async () => {
    render(
      <MemoryRouter initialEntries={['/characters/4']}>
        <App />
      </MemoryRouter>
    );

    const beth = await screen.findByAltText('An image of Beth Smith');
    expect(beth).toBeInTheDocument();
  });
});
