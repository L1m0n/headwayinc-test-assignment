import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText(/Who wants to be/i)).toBeInTheDocument();
  });

  it('displays thumbs up image', () => {
    render(<Home />);
    const image = screen.getByAltText('Hand giving thumbs up');
    expect(image).toBeInTheDocument();
  });

  it('has start button', () => {
    render(<Home />);
    expect(screen.getByText('Start')).toBeInTheDocument();
  });

  it('has correct title', () => {
    render(<Home />);
    expect(screen.getByText(/Who wants to be a millionaire\?/i)).toBeInTheDocument();
  });
});
