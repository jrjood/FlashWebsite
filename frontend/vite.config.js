import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['styled-components', 'swiper'],
          'i18n-vendor': ['i18next', 'react-i18next', 'i18next-http-backend'],
        },
      },
    },
  },
});
