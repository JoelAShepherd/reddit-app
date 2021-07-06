import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';


test('renders the main div', () => {
  const root = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const parentDiv = root.getByTestId("parent-div")

  expect(parentDiv).toBeInTheDocument();
  
});
