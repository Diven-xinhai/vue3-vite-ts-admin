/*
 * @Description: 用户信息状态
 * @Author: yeke
 * @Date: 2022-12-31 16:13:58
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-06 15:20:56
 */
import { defineStore } from "pinia";
import { useTagsViewStore } from "./tagsView";
import { usePermissionStore } from "./permission";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: "",
      userInfo: null as UserInfo | null,
    };
  },
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo;
    },
    logOut() {
      const tagsViewStore = useTagsViewStore();
      const permissionStore = usePermissionStore();
      return new Promise<void>((resolve, reject) => {
        tagsViewStore.$reset();
        permissionStore.$reset();
        this.$reset();
        resolve();
      });
    },
  },
  persist: {
    key: "my-custom-key",
  },
});

interface UserInfo {
  userName: string;
}
