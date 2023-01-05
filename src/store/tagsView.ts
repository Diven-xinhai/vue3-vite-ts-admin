/*
 * @Description: 标签状态
 * @Author: yeke
 * @Date: 2023-01-05 21:40:53
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-05 22:28:02
 */
import { defineStore } from "pinia";
import { AddRoute } from "./types";

export const useTagsViewStore = defineStore("tags-view", {
  state: () => {
    return {
      visitedViews: [] as AddRoute[],
    };
  },
  actions: {
    addViews(view: AddRoute) {
      if (this.visitedViews.some((item) => item.path === view.path)) return;
      this.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta.title || "no-name",
        })
      );
    },
    delView(view: AddRoute) {
      this.visitedViews = this.visitedViews.filter(
        (item) => item.path !== view.path
      );
    },
  },
  persist: {
    key: "my-custom-key",
  },
});
