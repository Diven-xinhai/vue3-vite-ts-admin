/*
 * @Description: 公共状态
 * @Date: 2023-01-04 15:36:33
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-04 15:57:07
 * @FilePath: \vue3-vite-ts-admin\src\store\app.ts
 */
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      sidebar: false,
    };
  },
  actions: {
    setSidebar() {
      this.sidebar = !this.sidebar;
    },
  },
  persist: {
    key: "my-custom-key",
  },
});
