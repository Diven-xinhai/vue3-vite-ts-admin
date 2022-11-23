/*
 * @Date: 2022-04-11 10:00:44
 * @LastEditors: YeKe
 * @LastEditTime: 2022-11-23 17:05:21
 * @FilePath: \vue3-vite-ts-admin\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

// 2. 配置路由
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/redirect",
    component: Layout,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/register.vue"),
  },
  {
    path: "/",
    component: Layout,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "Index",
        component: () => import("@/views/index.vue"),
        meta: { title: "首页", icon: "dashboard", affix: true },
      },
    ],
  },
  {
    path: "/drag",
    component: Layout,
    redirect: "/drag",
    children: [
      {
        path: "/drag",
        name: "Drag",
        component: () => import("@/views/drag/index.vue"),
        meta: { title: "拖拽", icon: "dashboard", affix: true },
      },
    ],
  },
];
// 1.返回一个 router 实列，为函数，里面有配置项（对象） history
const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
});

// 3导出路由   然后去 main.ts 注册 router.ts
export default router;
