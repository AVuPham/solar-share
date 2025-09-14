import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/solar-share/",  // quan trọng cho GitHub Pages
});
