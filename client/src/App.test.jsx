import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/header/i);
  expect(linkElement).toBeInTheDocument();
});
