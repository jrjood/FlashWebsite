import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          styled: ['styled-components'],
          swiper: ['swiper'],
          icons: ['react-icons'],
          i18n: ['i18next', 'react-i18next', 'i18next-http-backend'],
          utils: ['axios', 'marked'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
