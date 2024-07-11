import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Ganti dengan port yang kamu inginkan
    host: '0.0.0.0', // Mengikat pada semua antarmuka jaringan
    watch: {
      usePolling: false, // Disable polling to avoid unnecessary file watching
    },
  },
})
