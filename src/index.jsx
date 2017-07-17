import 'reset-css/reset.css';
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import App from './App';
import reducer from './reducer';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('react-root'),
);

