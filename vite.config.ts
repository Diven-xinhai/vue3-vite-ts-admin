/*
 * @Date: 2022-04-08 16:39:36
 * @LastEditors: YeKe
 * @LastEditTime: 2022-04-11 16:33:24
 * @FilePath: \vue3-vite-ts-admin\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': join(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/index.scss";',
      }
    }
  },
})
