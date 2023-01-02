/*
 * @Description: 权限处理
 * @Author: yeke
 * @Date: 2022-12-31 19:40:21
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-01 20:13:40
 */
import router from "./router/index";
import { useUserStore } from "./store/user";
import { usePermissionStore } from "./store/permission";

const whiteList = ["/login", "/register"];
const isToken = true;
let routeFlag = false;
router.beforeEach((to, from, next) => {
  if (isToken) {
    // next();
    const store = useUserStore();
    console.log(store.userInfo);
    // 判断是否动态加载完毕
    if (routeFlag) {
      next();
    } else {
      if (store.userInfo) {
        usePermissionStore()
          .generateRoutes()
          .then((asyncRoutes: any) => {
            // asyncRoutes.forEach((route: any) => {
            //   router.addRoute(route);
            // });
            routeFlag = true;
            next({ ...to, replace: true });
          });
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next(`/login?redirect=${to.fullPath}`);
    }
  }
});
