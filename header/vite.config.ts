import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "header",
      filename: "remoteEntry.js", // 🔥 Assure-toi que c'est bien défini ici
      exposes: {
        "./Header": "./src/components/Header.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    assetsDir: "", 
    rollupOptions: {
      output: {
        entryFileNames: "[name].js", 
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
        format: "esm",
      },
    },
  },
});
