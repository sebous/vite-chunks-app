import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import reactLazyPlugin from "vite-plugin-react-lazy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer()],
  build: {
    rollupOptions: {
      // plugins: [node()],
    },
  },
});
