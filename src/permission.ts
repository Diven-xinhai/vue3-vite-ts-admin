/*
 * @Description: 权限处理
 * @Author: yeke
 * @Date: 2022-12-31 19:40:21
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-06 17:49:26
 */
import router, { errorRouter } from "./router/index";
import { RouteRecordRaw } from "vue-router";
import { useUserStore } from "./store/user";
import { usePermissionStore } from "./store/permission";

const whiteList = ["/login", "/register", "404"];

let pageRefresh = true;
router.beforeEach(async (to, from) => {
  const isToken = useUserStore().token;
  if (isToken) {
    // 判断是否动态加载完毕
    if (whiteList.includes(to.path)) {
      return { path: "/" };
    } else {
      if (!pageRefresh) {
        return true;
      } else {
        await usePermissionStore()
          .generateRoutes()
          .then(() => {
            console.log(to);
            router.push(to.fullPath)
            // return { ...to, replace: true };
          });
        pageRefresh = false;
      }
    }
  } else {
    if (!whiteList.includes(to.path)) {
      return `/login?redirect=${to.fullPath}`;
    }
  }
});
