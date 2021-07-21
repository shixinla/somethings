import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
const src = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        promise: resolve(__dirname, "examples/promise/index.html"),
        taskScheduler: resolve(__dirname, "examples/task-scheduler/index.html"),
        vue: resolve(__dirname, "examples/vue/index.html"),
        ts: resolve(__dirname, "examples/typescript/index.html"),
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": src,
      "components": resolve(src, "components"),
      "views": resolve(src, "views"),
      "utils": resolve(src, "utils"),
      "pages": resolve(src, "pages"),
    },
  },
});
