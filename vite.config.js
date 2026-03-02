import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Local dev plugin: mimics the Vercel serverless /api/reddit function
function localApiPlugin() {
  return {
    name: "local-api",
    configureServer(server) {
      server.middlewares.use("/api/reddit", async (req, res) => {
        try {
          const response = await fetch(
            "https://www.reddit.com/r/all/hot.json?limit=10",
            {
              headers: {
                "User-Agent": "XClone/1.0 (Personal Project)",
              },
            },
          );
          const data = await response.json();
          res.setHeader("Content-Type", "application/json");
          res.statusCode = 200;
          res.end(JSON.stringify(data));
        } catch (error) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: "Failed to fetch Reddit data" }));
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), localApiPlugin()],
});
