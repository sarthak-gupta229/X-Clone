import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api/news": {
        target: "https://gnews.io",
        changeOrigin: true,
        rewrite: (path) => {
          const url = new URL(path, "http://localhost");
          url.pathname = "/api/v4/top-headlines";
          url.searchParams.set("apikey", "49e99235ed39451e974188ce2cd24953");
          return url.pathname + url.search;
        },
      },
    },
  },
});
