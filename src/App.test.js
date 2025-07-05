import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Learn React link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); // matches "Learn React" (case-insensitive)
  expect(linkElement).toBeInTheDocument(); // check if element exists in DOM
});
