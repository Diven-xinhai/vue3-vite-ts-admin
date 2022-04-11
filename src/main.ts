/*
 * @Date: 2022-04-08 16:39:36
 * @LastEditors: YeKe
 * @LastEditTime: 2022-04-11 17:08:35
 * @FilePath: \vue3-vite-ts-admin\src\main.ts
 */
import { createApp } from 'vue'
import router from "./router/index"
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import '@/assets/styles/index.scss' // global css

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
