import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // default port is 5173. I like to use 3000 for frontend
  server: {
    port: 3000,
  }
})
