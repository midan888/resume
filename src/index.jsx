import 'reset-css/reset.css';
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(<App />, document.getElementById('react-root'));
