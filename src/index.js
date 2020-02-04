import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.scss';
import App from './App';

ReactDOM.render(
  <BrowserRouter basename="/https://be-welcome.netlify.com">
    <App />
  </BrowserRouter>,
    document.getElementById('root')
)
