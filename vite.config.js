import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// PURE ESM CONFIG FIX for Windows + Vite 5
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5178,
  },
  optimizeDeps: {
    include: ['monaco-editor'],
  },
});
