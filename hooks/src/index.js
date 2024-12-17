import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Імпортуємо BrowserRouter

// Створюємо корінь для рендерингу
const root = ReactDOM.createRoot(document.getElementById('root'));

// Обгортаємо додаток у BrowserRouter
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
