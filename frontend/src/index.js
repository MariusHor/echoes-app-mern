import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // This is going to keep track of the store/global state and this allowes us to access that store from anywhere inside of the app.
import { configureStore } from '@reduxjs/toolkit';

import reducers from './reducers'; // Importing the reducers that we've created so that we can set up the store

import App from './App.js';
import './index.css';

const store = configureStore({ reducer: reducers }); // Setting up the Redux store

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
