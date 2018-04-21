import 'reset-css/reset.css';
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

import Layout from './Layout/index';

render(
  (
    <Layout />
  ),
  document.getElementById('react-root'),
);

