import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // імпорт компоненту App
import '@fontsource/varela-round';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));  // створюємо root елемент
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
