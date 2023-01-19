/*
 * @Description: 动态路由mock数据
 * @Author: yeke
 * @Date: 2023-01-01 20:26:22
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-19 12:26:06
 */
import { responseType } from "./types";
export default [
  {
    type: "get",
    url: "/api/getRouters",
    // timeout: 1500,
    response: (data: any): responseType => {
      const { username } = data.body;
      return {
        code: 200,
        msg: "获取成功",
        data: username === "admin" ? adminRouter : commonRouter,
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
      link: false,
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
          link: false,
        },
      },
      {
        name: "Role",
        path: "role",
        component: "system/role/index",
        hidden: false,
        meta: {
          title: "角色管理",
          icon: "role",
          noCache: false,
          link: false,
        },
      },
    ],
  },
  {
    name: "Ability",
    path: "/ability",
    component: "Layout",
    redirect: "/ability/test1",
    hidden: false,
    meta: {
      title: "其他功能",
      icon: "ability",
      noCache: false,
      link: false,
    },
    children: [
      {
        name: "Color",
        path: "color",
        component: "ability/color/index",
        hidden: false,
        meta: {
          title: "设置主题色",
          icon: "color",
          noCache: false,
          link: false,
        },
      },
      {
        name: "Echarts",
        path: "echarts",
        component: "ability/echarts/index",
        hidden: false,
        meta: {
          title: "图表展示",
          icon: "echarts",
          noCache: false,
          link: false,
        },
      },
      {
        name: "Test1",
        path: "test1",
        component: "ability/test1/index",
        hidden: false,
        meta: {
          title: "test1",
          icon: "drag",
          noCache: false,
          link: false,
        },
      },
      {
        name: "Test2",
        path: "test2",
        component: "ability/test2/index",
        hidden: false,
        meta: {
          title: "test2",
          icon: "drag",
          noCache: false,
          link: false,
        },
      },
      {
        name: "跳转百度",
        path: "https://www.baidu.com/",
        component: "",
        hidden: false,
        meta: {
          title: "百度",
          icon: "drag",
          noCache: false,
          link: true,
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
      link: false,
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
          link: false,
        },
      },
    ],
  },
];
