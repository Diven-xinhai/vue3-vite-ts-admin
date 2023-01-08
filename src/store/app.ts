/*
 * @Description: 公共状态
 * @Date: 2023-01-04 15:36:33
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-08 22:53:50
 * @FilePath: \vue3-vite-ts-admin\src\store\app.ts
 */
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      sidebar: false,
      theme: {
        color: "",
      },
    };
  },
  actions: {
    setSidebar() {
      this.sidebar = !this.sidebar;
    },
    setTheme(color: string) {
      this.theme.color = color;
    },
  },
  persist: {
    key: "app",
    storage: sessionStorage,
  },
});
