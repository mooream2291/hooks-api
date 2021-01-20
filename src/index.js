import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

require('dotenv').config();
const server = require('./src/server');

server.start(process.env.PORT)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);