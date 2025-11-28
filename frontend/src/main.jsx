// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/AppRoutes';
import { AuthProvider } from './hooks/useAuth';

// import './styles/globals.css';
import './index.css';
import './i18n.js';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
