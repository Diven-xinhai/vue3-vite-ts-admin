/*
 * @Description: 权限处理
 * @Author: yeke
 * @Date: 2022-12-31 19:40:21
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-10 17:24:02
 */
import router from "./router/index";
import { ElMessage } from "element-plus";
import { useUserStore } from "./store/user";
import { usePermissionStore } from "./store/permission";

const whiteList = ["/login", "/register", "404"];

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const permissionStore = usePermissionStore();
  const isToken = userStore.token;
  const asyncRouters = permissionStore.asyncRouters;
  if (isToken) {
    if (whiteList.includes(to.path)) {
      next({ path: "/" });
    } else {
      // 判断是否动态加载完毕
      if (asyncRouters.length != 0) {
        next();
      } else {
        userStore
          .getUserInfo()
          .then((res) => {
            permissionStore.generateRoutes().then(() => {
              router.push(to.fullPath);
              // return { ...to, replace: true };
              // }
              // router.push(to.fullPath);
              // return true
              // return { ...to, replace: true };
              // return to.fullPath
            });
          })
          .catch((err) => {
            userStore.logOut().then(() => {
              ElMessage({
                message: err,
                type: "error",
              });
              next({ path: "/" });
            });
          });
      }
    }
  } else {
    if (!whiteList.includes(to.path)) {
      next(`/login?redirect=${to.fullPath}`);
    } else {
      next();
    }
  }
});
