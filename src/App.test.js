import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';


describe('App', () => {
  test('renders app component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    screen.debug();
  })
})


