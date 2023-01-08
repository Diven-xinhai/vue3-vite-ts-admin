/*
 * @Date: 2022-04-08 16:39:36
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-08 22:41:11
 * @FilePath: \vue3-vite-ts-admin\src\main.ts
 */
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router/index";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
// import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/assets/styles/index.scss"; // global css
// svg图标
import "virtual:svg-icons-register";
import SvgIcon from "@/components/SvgIcon/index.vue";

import directive from "@/directive";
import "./permission";

const app = createApp(App);
directive(app);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.component("svg-icon", SvgIcon);
// app.use(ElementPlus);
app.use(router);
app.use(pinia);
app.mount("#app");
