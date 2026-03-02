import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "https://www.reddit.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        headers: {
          "User-Agent": "XClone/1.0.0 (Personal Project)",
        },
      },
    },
  },
});
