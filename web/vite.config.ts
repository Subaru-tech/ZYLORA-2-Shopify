import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        entryFileNames: "react-app.js",
        chunkFileNames: "react-app-[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "react-app.css";
          }
          return "react-app-[name].[ext]";
        },
      },
    },
  },
}));
