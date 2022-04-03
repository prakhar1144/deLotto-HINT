import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ParticipateProvider from './Context/Participate';

ReactDOM.render(
  <ParticipateProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ParticipateProvider>,
  document.getElementById('root')
);

