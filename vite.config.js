import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  console.log("vite configuration for mode", mode);
  return {
    server: {
      host: '0.0.0.0'
    },
    plugins: [react()],
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode),
    },
    build: {
      mode: JSON.stringify(mode),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
