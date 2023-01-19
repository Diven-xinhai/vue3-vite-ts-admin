/*
 * @Description: 公共状态
 * @Date: 2023-01-04 15:36:33
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-19 12:13:34
 * @FilePath: \vue3-vite-ts-admin\src\store\app.ts
 */
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      sidebar: false,
      mourn: false, // 悼念主题
      theme: {
        color: "",
      },
    };
  },
  actions: {
    setSidebar() {
      this.sidebar = !this.sidebar;
    },
    setMourn(mourn: boolean) {
      this.mourn = mourn;
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
