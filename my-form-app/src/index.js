import React from 'react';
import ReactDOM from 'react-dom/client';  // Імпортуйте з 'react-dom/client'
import './index.css';
import App from './App';

// Створіть корінь для рендерингу
const root = ReactDOM.createRoot(document.getElementById('root'));

// Використовуйте createRoot замість render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
