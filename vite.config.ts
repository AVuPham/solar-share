import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/solar-share/",
  build: {
    rollupOptions: {
      external: ["@tensorflow/tfjs", "react-chartjs-2", "chart.js"],
    },
  },
});
