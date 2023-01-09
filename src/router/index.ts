/*
 * @Date: 2022-04-11 10:00:44
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-09 17:13:09
 * @FilePath: \vue3-vite-ts-admin\src\router\index.ts
 */
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw,
} from "vue-router";
import Layout from "@/layout/index.vue";

/**
 * Note: 路由配置项
 *
 * hidden: true                     // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1 控制显示隐藏
 * redirect: noRedirect             // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'               // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * query: '{"id": 1, "name": "ry"}' // 访问路由的默认传递参数
 * roles: ['admin', 'common']       // 访问路由的角色权限
 * permissions: ['a:a:a', 'b:b:b']  // 这个是用作操作权限（如：按钮）
 * meta : {
    noCache: true                   // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    title: 'title'                  // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'                // 设置该路由的图标，对应路径src/assets/icons/svg
    link: false                     // 如果设置为true，则会跳转外部链接，path是外部链接地址
  }
 */

// 2. 配置路由
// 注意：如果路由中没有meta&&meta.title，那么标签页跟面包屑将不会增加
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    hidden: true,
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    hidden: true,
    component: () => import("@/views/register.vue"),
  },
  {
    name: "Layout",
    path: "/",
    hidden: false,
    component: Layout,
    redirect: "/index",
    // 动态路由主要插入到这个children里
    children: [
      {
        name: "Index",
        path: "/index",
        hidden: false,
        component: () => import("@/views/index.vue"),
        meta: {
          title: "首页",
          icon: "index",
          noCache: false,
        },
      },
    ],
  },

  {
    path: "/:pathMatch(.*)",
    name: "404",
    hidden: true,
    component: () => import("@/views/redirect/index.vue"),
  },
];

// 页面权限路由，需要动态匹配，在菜单管理里面增加按钮权限，按钮权限跳转的页面对应页面（因为只有按钮点击了才能跳转除菜单外的子页面）
export const dynamicRoutes: Array<RouteRecordRaw> = [
  {
    path: "/system/user-auth",
    permissions: ["system:user:edit"],
    component: Layout,
    hidden: true,
    children: [
      {
        name: "Edit",
        path: ":userId(\\d+)",
        component: () => import("@/views/system/user/edit.vue"),
        meta: { title: "页面权限", icon: "index", noCache: false, link: null },
      },
    ],
  },
  {
    path: "/system/user-test",
    permissions: ["system:user:test"],
    component: Layout,
    hidden: true,
    children: [
      {
        name: "Test",
        path: ":userId(\\d+)",
        component: () => import("@/views/system/user/test.vue"),
        meta: { title: "测试页面权限", icon: "index", noCache: false, link: null },
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
