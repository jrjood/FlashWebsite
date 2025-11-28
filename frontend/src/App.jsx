// src/App.jsx
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default function App() {
  // ---- Your old loader logic with hero video ----
  useEffect(() => {
    const waitForVideo = async () => {
      const MIN_DURATION = 3000; // Minimum 3 seconds
      const start = Date.now();

      const video = document.getElementById('hero-video');
      if (video) {
        await new Promise((resolve) => {
          if (video.readyState >= 3) return resolve();
          video.addEventListener('canplaythrough', resolve, { once: true });
        });
      }

      const elapsed = Date.now() - start;
      const remaining = Math.max(MIN_DURATION - elapsed, 0);

      setTimeout(() => {
        const loader = document.getElementById('initial-loader');
        if (loader) {
          loader.style.opacity = '0';
          loader.style.pointerEvents = 'none';
          loader.style.transition = 'opacity 0.4s ease';

          setTimeout(() => {
            loader.remove();
          }, 500);
        }
      }, remaining);
    };

    waitForVideo();
  }, []);

  // This is the place where the current route will render
  return <Outlet />;
}
