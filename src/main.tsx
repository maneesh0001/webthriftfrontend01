// src/main.tsx or src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Correct path if it's TS
import './index.css'; // Ensure Tailwind is properly configured

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
