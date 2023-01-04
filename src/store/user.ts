/*
 * @Description: 用户信息状态
 * @Author: yeke
 * @Date: 2022-12-31 16:13:58
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-04 11:36:57
 */
import { defineStore } from "pinia";

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
    delStore() {
      this.$reset();
    },
  },
  persist: {
    key: "my-custom-key",
  },
});

interface UserInfo {
  userName: string;
}
