import React from 'react';
import ReactDOM from 'react-dom/client';  // Змінили на react-dom/client
import './index.css';
import App from './App';

// Використовуємо createRoot замість render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
