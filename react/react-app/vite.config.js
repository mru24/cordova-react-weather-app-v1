import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
  },
  build: {
    // This moves the output to your specific folder
    outDir: '../../www/',
    // Optional: Empty the directory before building
    emptyOutDir: true,
  }
})
