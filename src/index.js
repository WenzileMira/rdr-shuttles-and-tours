import React from 'react';
import { HashRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './css/dist/css/bootstrap.css';
import './css/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      <App />
    </HashRouter>
);
