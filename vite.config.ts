import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "historyMicrofront",
      filename: "remoteEntry.js",
      exposes: {
        "./PokemonHistory": "./src/components/PokemonHistory.tsx", // 📌 Exponiendo desde la estructura correcta
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    modulePreload: false,
    rollupOptions: {
      output: {
        format: "esm",
      },
    },
  },
  server: {
    port: 3002,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/javascript",
    },
  },
});
