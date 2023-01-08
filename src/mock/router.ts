/*
 * @Description: 动态路由mock数据
 * @Author: yeke
 * @Date: 2023-01-01 20:26:22
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-08 18:48:35
 */
import { responseType } from "./types";
export default [
  {
    type: "get",
    url: "/api/getRouters",
    response: (data: any): responseType => {
      return {
        code: 200,
        msg: "获取成功",
        data: adminRouter,
      };
    },
  },
];

const adminRouter = [
  {
    name: "System",
    path: "/system",
    component: "Layout",
    redirect: "/system/user",
    hidden: false,
    meta: {
      title: "系统管理",
      icon: "system",
      noCache: false,
      link: null,
    },
    children: [
      {
        name: "User",
        path: "user",
        component: "system/user/index",
        hidden: false,
        meta: {
          title: "用户管理",
          icon: "user",
          noCache: false,
          link: null,
        },
      },
      {
        name: "Color",
        path: "color",
        component: "system/color/index",
        hidden: false,
        meta: {
          title: "设置主题色",
          icon: "color",
          noCache: false,
          link: null,
        },
      },
    ],
  },
  {
    name: "Drag",
    path: "/drag",
    component: "Layout",
    redirect: "/drag/test1",
    hidden: false,
    meta: {
      title: "拖拽",
      icon: "drag",
      noCache: false,
      link: null,
    },
    children: [
      {
        name: "Test1",
        path: "test1",
        component: "drag/test1/index",
        hidden: false,
        meta: {
          title: "test1",
          icon: "drag",
          noCache: false,
          link: null,
        },
      },
      {
        name: "Test2",
        path: "test2",
        component: "drag/test2/index",
        hidden: false,
        meta: {
          title: "test2",
          icon: "drag",
          noCache: false,
          link: null,
        },
      },
    ],
  },
];

const commonRouter = [
  {
    name: "Drag",
    path: "/drag",
    component: "Layout",
    redirect: "/drag/test1",
    hidden: false,
    meta: {
      title: "拖拽",
      icon: "drag",
      noCache: false,
      link: null,
    },
    children: [
      {
        name: "Test1",
        path: "test1",
        component: "drag/test1/index",
        hidden: false,
        meta: {
          title: "普通用户权限1",
          icon: "drag",
          noCache: false,
          link: null,
        },
      },
    ],
  },
];
