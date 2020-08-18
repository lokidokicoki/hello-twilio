import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hello wilio message', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello Twilio/i);
  expect(linkElement).toBeInTheDocument();
});
