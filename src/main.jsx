import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterContext from './Contexts/CounterContext.jsx'; 
import { BrowserRouter } from 'react-router-dom';
import LoginContexts from './Contexts/LoginContexts.jsx';

createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
    <CounterContext>
      <LoginContexts>
        <App />
     </LoginContexts>
     </CounterContext>
  // </BrowserRouter>
);
