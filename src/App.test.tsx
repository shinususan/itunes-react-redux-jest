import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders app title', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>);
  const titleElement = screen.getByText(/iTunes Search/i);
  expect(titleElement).toBeInTheDocument();
});
