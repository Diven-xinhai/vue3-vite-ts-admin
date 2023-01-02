/*
 * @Description: 动态路由mock数据
 * @Author: yeke
 * @Date: 2023-01-01 20:26:22
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-02 22:21:16
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
    name: "Index",
    path: "/index",
    hidden: false,
    component: "index",
    meta: {
      title: "首页",
      icon: "index",
      noCache: false,
      link: null,
    },
  },
  {
    name: "Drag",
    path: "/drag",
    component: "drag/index",
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
