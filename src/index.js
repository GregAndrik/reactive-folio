import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

/**
 * npm install react-router-dom --save
 * npm install react-icons --save
 * npm install emailjs-com --save
 * npm install @babel/core @babel/preset-react @babel/plugin-proposal-private-property-in-object --save-dev
 */