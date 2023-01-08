/*
 * @Date: 2022-04-11 10:00:44
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-08 21:46:31
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
    breadcrumb: false               // 如果设置为false，则不会在breadcrumb面包屑中显示
    activeMenu: '/system/user'      // 当路由设置了该属性，则会高亮相对应的侧边栏。
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
          link: null,
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

// export const dynamicRoutes: Array<RouteRecordRaw> = [
//   {
//     name: "Index",
//     path: "/",
//     component: Layout,
//     redirect: "/index",
//     children: [
//       {
//         name: "Index",
//         path: "index",
//         component: () => import("@/views/index.vue"),
//         meta: { title: "首页", icon: "dashboard", affix: true },
//       },
//       {
//         name: "Drag",
//         path: "drag",
//         component: () => import("@/views/drag/index.vue"),
//         meta: { title: "拖拽", icon: "dashboard", affix: true },
//         redirect: "/drag/test1",
//         children: [
//           {
//             name: "Test1",
//             path: "test1",
//             component: () => import("@/views/drag/test1/index.vue"),
//             meta: { title: "test1", icon: "dashboard", affix: true },
//           },
//           {
//             name: "Test2",
//             path: "test2",
//             component: () => import("@/views/drag/test2/index.vue"),
//             meta: { title: "test2", icon: "dashboard", affix: true },
//           },
//         ],
//       },
//     ],
//   },
// ];

// 1.返回一个 router 实列，为函数，里面有配置项（对象） history
const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
});

// 3导出路由   然后去 main.ts 注册 router.ts
export default router;
