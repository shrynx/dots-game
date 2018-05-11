// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global';

const container = document.querySelector('#root');

if (!container) {
  throw new Error(`couldn't find element with id root`);
}

ReactDOM.render(<App />, container);
