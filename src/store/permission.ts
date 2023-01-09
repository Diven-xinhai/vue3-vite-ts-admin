/*
 * @Description: 路由权限状态
 * @Author: yeke
 * @Date: 2022-12-31 16:13:58
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-09 17:11:46
 */
import { defineStore } from "pinia";
import router, { constantRoutes, dynamicRoutes } from "@/router/index";
import { RouteRecordRaw } from "vue-router";
import { useUserStore } from "./user";
import { getRouters } from "@/api/menu";
import { hasPermiOr } from "@/utils/auth";
import Layout from "@/layout/index.vue";

// 匹配views里面所有的.vue文件
const modules = import.meta.glob("../views/**/*.vue");

export const usePermissionStore = defineStore("permission", {
  state: () => {
    return {
      sidebarRouters: [] as RouteRecordRaw[],
      resRouters: [] as RouteRecordRaw[],
      asyncRouters: [] as RouteRecordRaw[],
    };
  },
  actions: {
    setSidebarRouters(sidebarRouters: RouteRecordRaw[]) {
      this.sidebarRouters = sidebarRouters;
    },
    setResRouters(resRouters: RouteRecordRaw[]) {
      this.resRouters = resRouters;
    },
    setAsyncRouters(asyncRouters: RouteRecordRaw[]) {
      this.asyncRouters = asyncRouters;
    },
    generateRoutes() {
      return new Promise((resolve, reject) => {
        // 后端返回的路由是根据角色动态生成的(根据角色返回对应路由)
        // 所以这里不需要做路由权限处理
        const useStore = useUserStore();
        // 为了模拟不同用户登录，这里传了参数，实际业务可以去掉
        getRouters({ username: useStore.userInfo?.userName }).then((res) => {
          const defaultData = JSON.parse(JSON.stringify(res.data));
          const sidebarData = JSON.parse(JSON.stringify(res.data));
          const resData = JSON.parse(JSON.stringify(res.data));

          // 侧边栏路由
          const sidebarRouters = filterPath(sidebarData);
          // 接口返回的路由
          const resRouters = componentConvertAsync(resData);
          // 页面动态路由
          const asyncRouters = filterDynamicRoutes(dynamicRoutes);

          this.setSidebarRouters(
            filterRouterName(constantRoutes).concat(sidebarRouters)
          );
          this.setResRouters(
            filterRouterName(constantRoutes).concat(resRouters)
          );
          this.setAsyncRouters(this.resRouters.concat(asyncRouters));
          [...resRouters, ...asyncRouters].forEach((route) => {
            router.addRoute(route);
          });
          resolve(resRouters);
        });
      });
    },
  },
});

/**
 * @description: 判断动态路由是否有页面权限
 */
const filterDynamicRoutes = (
  routers: RouteRecordRaw[]
): RouteRecordRaw[] | [] => {
  const res: RouteRecordRaw[] = [];
  routers.forEach((route) => {
    if (route.permissions && hasPermiOr(route.permissions)) {
      res.push(route);
    }
  });
  return res;
};

/**
 * @description: 从静态路由表中找出name为Layout的数组，方便将动态路由表插入，因为本项目所有的动态路由都在一个name为Layout的路由下
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
const componentConvertAsync = (
  resRouter: RouteRecordRaw[]
): RouteRecordRaw[] => {
  return resRouter.filter((route: any) => {
    if (route.component) {
      if (route.component === "Layout") {
        route.component = Layout;
      } else {
        route.component = loadView(route.component);
      }
    }

    if (route.children && route.children.length) {
      route.children = componentConvertAsync(route.children);
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
        if (!c.meta?.link) {
          c.path = item.path + "/" + c.path;
        }
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
