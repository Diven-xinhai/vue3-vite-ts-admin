/*
 * @Description: 权限处理
 * @Author: yeke
 * @Date: 2022-12-31 19:40:21
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-08 19:14:56
 */
import router from "./router/index";
import { ElMessage } from "element-plus";
import { useUserStore } from "./store/user";
import { usePermissionStore } from "./store/permission";

const whiteList = ["/login", "/register", "404"];

router.beforeEach(async (to, from) => {
  const userStore = useUserStore();
  const permissionStore = usePermissionStore();
  const isToken = userStore.token;
  const asyncRouters = permissionStore.asyncRouters;
  if (isToken) {
    // 判断是否动态加载完毕
    if (whiteList.includes(to.path)) {
      return { path: "/" };
    } else {
      if (asyncRouters.length) {
        return true;
      } else {
        await userStore
          .getUserInfo()
          .then((res) => {
            permissionStore.generateRoutes().then(() => {
              console.log(to);
              router.push(to.fullPath);
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
              router.push("/login");
            });
          });
      }
    }
  } else {
    if (!whiteList.includes(to.path)) {
      return `/login?redirect=${to.fullPath}`;
    }
  }
});
