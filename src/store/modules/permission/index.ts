/*
 * @Date: 2022-11-23 16:43:34
 * @LastEditors: YeKe
 * @LastEditTime: 2022-11-23 19:04:56
 * @FilePath: \vue3-vite-ts-admin\src\store\modules\permission\index.ts
 */
import { RouteRecordRaw } from "vue-router";
import router, { constantRoutes } from "@/router";
import permissionStateTypes from "./types";
import permissionRouters from "@/assets/json/routers.json";
import Layout from "@/layout/index.vue";
const permission = {
  state: {
    routers: constantRoutes,
    allRouters: [],
  },
  mutations: {
    SET_ROUTERS: (state: permissionStateTypes, routers: []) => {
      state.allRouters = routers;
      state.routers = routers;
    },
  },
  actions: {
    getPermissonRoutes({ commit }) {
      const rData = filterRouter(permissionRouters.routers);
      rData.forEach((item) => {
        router.addRoute(item);
      });
      commit("SET_ROUTERS", rData);
    },
  },
  getters: {
    getAllRouters(state: permissionStateTypes) {
      return state.allRouters;
    },
  },
};

/**
 * @description: 遍历修改json路由，改为真路由
 * @param {any} arr
 * @return {*}
 */
const filterRouter = (arr: any[]): RouteRecordRaw[] => {
  return arr.filter((route) => {
    if (route.component === "Layout") {
      route.component = Layout;
    } else {
      route.component = loadView(route.component);
    }

    if (route.children) {
      route.children = filterChildren(route.children);
    }
  });
};

/**
 * @description: 递归子元素
 * @param {*} arr
 * @param {boolean} isLastRouter
 * @param {any} lastRouter
 * @return {*}
 */
const filterChildren = (arr: [], isLastRouter?: boolean, lastRouter?: any) => {
  let children: any[] = [];
  arr.forEach((item: any, i) => {
    if (item.children && item.children.length) {
      item.forEach((c: any) => {
        c.path = item.path + "/" + c.path;
        if (c.children && c.children.length) {
          children = children.concat(filterChildren(c.children), true, c);
          return;
        }
        children.push(c);
      });
      return;
    }
    if (isLastRouter) {
      item.path = lastRouter.path + "/" + item.path;
    }
    children = children.concat(item);
  });
  return children;
};

const loadView = (view: string) => {
  return () => import(`@/views/${view}`);
};

export default permission;
