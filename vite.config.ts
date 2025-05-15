import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // This is where Azure expects your static files
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // Optional: useful if you're using path aliases
    },
  },
})
