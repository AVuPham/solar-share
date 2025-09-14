import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // ⚡ Quan trọng: tên repo của bạn (solar-share)
  base: "/solar-share/",
});
