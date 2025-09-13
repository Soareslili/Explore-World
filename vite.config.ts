// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),        // garante suporte a JSX/HMR do React
    tailwindcss(),  // tailwind integrado
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // opcional: facilita imports com "@/..."
    },
    dedupe: ["react", "react-dom"], // força usar uma única cópia
  },
});
