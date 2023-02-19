import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

export default global.matchMedia =
  global.matchMedia ||
  function (query) {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
  };

test('renders app', () => {
  render(<App />);
  const container = screen.getByTestId('my-app');
  expect(container).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
