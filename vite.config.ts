import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vercel from 'vite-plugin-vercel';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vercel({
    prerender: {
      crawl: true,
      routes: ['/', '/about', '/portfolio', '/contact']
    }
  })],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
