import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/solar-share/', // IMPORTANT when deploying to GitHub Pages
  server: { port: 5173, open: true },
  build: { outDir: 'dist' }
})
