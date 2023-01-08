/*
 * @Description: 标签状态
 * @Author: yeke
 * @Date: 2023-01-05 21:40:53
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-08 22:53:31
 */
import { defineStore } from "pinia";
import { AddRoute } from "./types";

export const useTagsViewStore = defineStore("tags-view", {
  state: () => {
    return {
      visitedViews: [] as AddRoute[],
      cachedViews: [] as string[],
    };
  },
  actions: {
    addViews(view: AddRoute) {
      this.addVisitedViews(view);
      this.addCachedViews(view);
    },
    delView(view: AddRoute) {
      this.visitedViews = this.visitedViews.filter(
        (item) => item.path !== view.path
      );
      this.cachedViews = this.cachedViews.filter((item) => item !== view.name);
    },
    addVisitedViews(view: AddRoute) {
      if (this.visitedViews.some((item) => item.path === view.path)) return;
      this.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta.title || "no-name",
        })
      );
    },
    addCachedViews(view: AddRoute) {
      if (this.cachedViews.some((item) => item === view.name)) return;
      if (view.meta.noCache) return;
      if (typeof view.name == "string") {
        this.cachedViews.push(view.name);
      }
    },
  },
  persist: {
    key: "tagsView",
    storage: sessionStorage,
  },
});
