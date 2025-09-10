import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/solar-share/',   // 👈 Quan trọng để GitHub Pages không bị 404
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 để import gọn: import x from '@/components/X'
    },
  },
  server: {
    port: 3000,
    open: true, // tự động mở trình duyệt khi chạy `npm run dev`
  },
  build: {
    outDir: 'dist',
    sourcemap: true, // build kèm source map để dễ debug
  },
})
