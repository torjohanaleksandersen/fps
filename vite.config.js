import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public',
  server: {
    proxy: {
      '/socket.io': {
        target: 'http://localhost:5000' || process.env.PORT, // your backend server port
        ws: true,
      },
    },
  },
});
