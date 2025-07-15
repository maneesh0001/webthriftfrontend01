import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './router/AppRouter.jsx';
import AuthProvider from './auth/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);