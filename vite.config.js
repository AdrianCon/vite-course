import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // Alias the @ to /src
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    assetsInlineLimit: 4096,
    cssCodeSplit: true, // Make sure css is extracted into a separate file,
    sourcemap: "hidden", // Useful for application monitoring, but not shown to the user
  },
});
