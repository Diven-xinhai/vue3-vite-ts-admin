/*
 * @Description: 用户信息状态
 * @Author: yeke
 * @Date: 2022-12-31 16:13:58
 * @LastEditors: yeke
 * @LastEditTime: 2022-12-31 21:11:56
 */
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      userInfo: null as UserInfo | null,
    };
  },
  actions: {
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
