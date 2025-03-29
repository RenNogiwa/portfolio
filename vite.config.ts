import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
  server: {
    proxy: {
      '/functions': {
        target: 'http://localhost:56943',
        changeOrigin: true,
      }
    }
  }
});
