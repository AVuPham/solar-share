import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/solar-share/',  // ⚡ bắt buộc khi deploy GitHub Pages
})

build: {
  rollupOptions: {
    external: ["@tensorflow/tfjs", "react-chartjs-2", "chart.js"],
  },
}
