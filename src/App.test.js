import { render, screen } from '@testing-library/react';
import AppSocialNetwork from './App';

test('renders learn react link', () => {
  render(<AppSocialNetwork />)
  const div = screen.getByRole(/main/i)
  expect(div).toBeInTheDocument()
});
