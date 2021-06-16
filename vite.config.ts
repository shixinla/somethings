import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        promise: resolve(__dirname, 'examples/promise/index.html'),
        taskScheduler: resolve(__dirname, 'examples/task-scheduler/index.html'),
        test: resolve(__dirname, 'src/index.html')
      }
    }
  },
  plugins: [vue()]
})
