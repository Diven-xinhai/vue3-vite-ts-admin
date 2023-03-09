/*
 * @Description: 用户信息状态
 * @Author: yeke
 * @Date: 2022-12-31 16:13:58
 * @LastEditors: yeke
 * @LastEditTime: 2023-03-09 20:36:37
 */
import { defineStore } from "pinia";
import { useTagsViewStore } from "./tagsView";
import { usePermissionStore } from "./permission";
import { userInfo } from "@/api/user";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: "",
      userInfo: null as UserInfo | null,
      roles: [] as string[],
      permissions: [] as string[],
    };
  },
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo;
    },
    getUserInfo() {
      return new Promise((resolve, reject) => {
        // 为了模拟不同用户登录，这里传了参数，实际业务可以去掉
        userInfo({ username: this.userInfo?.userName })
          .then((res: any) => {
            this.userInfo = res.data.user;
            // 判断是否有角色
            if (res.data.roles && res.data.roles.length > 0) {
              this.roles = res.data.roles;
              this.permissions = res.data.permissions;
            } else {
              this.roles = ["ROLE_DEFAULT"];
            }
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    logOut() {
      const tagsViewStore = useTagsViewStore();
      const permissionStore = usePermissionStore();
      return new Promise<void>((resolve, reject) => {
        tagsViewStore.$reset();
        permissionStore.$reset();
        this.$reset();
        sessionStorage.clear();
        resolve();
      });
    },
  },
  persist: {
    key: "user",
    storage: sessionStorage,
  },
});

interface UserInfo {
  userName: string;
}
