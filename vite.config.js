import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api/reddit": {
        target: "https://www.reddit.com",
        changeOrigin: true,
        rewrite: (path) => {
          // Convert /api/reddit?path=r/all/hot.json&limit=10
          // to /r/all/hot.json?limit=10
          const url = new URL(path, "http://localhost");
          const redditPath = url.searchParams.get("path") || "";
          url.searchParams.delete("path");
          const remainingQuery = url.searchParams.toString();
          return `/${redditPath}${remainingQuery ? "?" + remainingQuery : ""}`;
        },
        headers: {
          "User-Agent": "XClone/1.0.0 (Personal Project)",
        },
      },
    },
  },
});
