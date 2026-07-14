import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Create the root element for React to render into.
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* BrowserRouter enables React Router for the whole app. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
