import 'reset-css/reset.css';
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { setLocale } from './content';
import Layout from './Layout/index';

setLocale('en');

render(
  (
    <Layout />
  ),
  document.getElementById('react-root'),
);

