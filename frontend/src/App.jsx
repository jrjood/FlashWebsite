// src/App.jsx
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default function App() {
  useEffect(() => {
    const hideInitialLoader = () => {
      const MIN_DURATION = 1000; // Minimum 1 second
      const start = Date.now();

      // Wait for initial page load
      const onLoad = () => {
        const elapsed = Date.now() - start;
        const remaining = Math.max(MIN_DURATION - elapsed, 0);

        setTimeout(() => {
          const loader = document.getElementById('initial-loader');
          if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
              loader.remove();
            }, 500);
          }
        }, remaining);
      };

      // Check if page is already loaded
      if (document.readyState === 'complete') {
        onLoad();
      } else {
        window.addEventListener('load', onLoad);
        return () => window.removeEventListener('load', onLoad);
      }
    };

    hideInitialLoader();
  }, []);

  // This is the place where the current route will render
  return <Outlet />;
}
