/*
 * @Date: 2022-04-08 16:39:36
 * @LastEditors: YeKe
 * @LastEditTime: 2022-09-16 09:39:43
 * @FilePath: \vue3-vite-ts-admin\src\main.ts
 */
import { createApp } from 'vue'
import router from "./router/index"
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import '@/assets/styles/index.scss' // global css
// svg图标
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'

const app = createApp(App)

app.component('svg-icon', SvgIcon)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
console.log(app.config);
