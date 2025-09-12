import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/solar-share/', // 👈 Quan trọng: trỏ đúng tên repo trên GitHub
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
  },
})
