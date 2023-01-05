/*
 * @Description: 路由权限状态
 * @Author: yeke
 * @Date: 2022-12-31 16:13:58
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-05 21:22:30
 */
import { defineStore } from "pinia";
import router, { constantRoutes } from "@/router/index";
import { RouteRecordRaw } from "vue-router";
import { getRouters } from "@/api/menu";
import Layout from "@/layout/index.vue";

// 匹配views里面所有的.vue文件
const modules = import.meta.glob("../views/**/*.vue");

export const usePermissionStore = defineStore("permission", {
  state: () => {
    return {
      sidebarRouters: [] as RouteRecordRaw[],
    };
  },
  actions: {
    setSidebarRouters(sidebarRouters: RouteRecordRaw[]) {
      this.sidebarRouters = sidebarRouters;
    },
    generateRoutes() {
      return new Promise((resolve, reject) => {
        // 后端返回的路由是根据角色动态生成的
        // 所以这里不需要做路由权限处理
        getRouters().then((res) => {
          const defaultData = JSON.parse(JSON.stringify(res.data));
          const sidebarData = JSON.parse(JSON.stringify(res.data));
          const asyncData = JSON.parse(JSON.stringify(res.data));

          // 侧边栏路由
          const sidebarRouters = filterPath(sidebarData);
          // 异步路由
          const asyncRouters = filterAsyncRouter(asyncData);

          this.setSidebarRouters(
            filterRouterName(constantRoutes).concat(sidebarRouters)
          );
          asyncRouters.forEach((route) => {
            router.addRoute(route);
          });

          resolve(asyncRouters);
        });
      });
    },
    // delStore() {
    //   this.$reset();
    // },
  },
  persist: {
    key: "my-custom-key",
  },
});

/**
 * @description: 从静态路由表中找出name为Layout的数组，方便将动态路由表插入
 * @param {RouteRecordRaw} routers
 */
const filterRouterName = (routers: RouteRecordRaw[]): RouteRecordRaw[] => {
  const arr = routers.filter((item) => item.name === "Layout");
  if (arr[0].children) {
    return arr[0].children;
  } else {
    return [];
  }
};

/**
 * @description: 将component字符串转为路由的异步加载
 * @return {*}
 */
const filterAsyncRouter = (asyncRouter: RouteRecordRaw[]): RouteRecordRaw[] => {
  return asyncRouter.filter((route: any) => {
    if (route.component) {
      if (route.component === "Layout") {
        route.component = Layout;
      } else {
        route.component = loadView(route.component);
      }
    }

    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children);
    }
    return true;
  });
};

/**
 * @description: 拼接path路径
 * @param {RouteRecordRaw} routers
 */
const filterPath = (routers: RouteRecordRaw[] = []): RouteRecordRaw[] => {
  return routers.filter((item) => {
    if (item.children && item.children.length) {
      item.children.forEach((c) => {
        c.path = item.path + "/" + c.path;
        if (c.children && c.children.length) {
          filterPath(item.children);
        }
      });
    }
    return true;
  });
};

/**
 * @description: 将字符串转为实际文件指向
 * @param {string} view
 */
const loadView = (view: string) => {
  let res;
  for (const path in modules) {
    const dir = path.split("views/")[1].split(".vue")[0];
    if (dir === view) {
      res = () => modules[path]();
    }
  }

  return res;
};
