import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 开启本地局域网服务 host
  server: {
    host: '0.0.0.0',
    open: true
  },
  // 配置@符号
  resolve: {
    alias: {
      '@': '/src'
    }
  }


})
