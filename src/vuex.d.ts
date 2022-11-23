/*
 * @Date: 2022-11-23 19:13:47
 * @LastEditors: YeKe
 * @LastEditTime: 2022-11-23 19:15:09
 * @FilePath: \vue3-vite-ts-admin\src\vuex.d.ts
 */
// vuex.d.ts
import { Store } from "vuex";
import { RouteRecordRaw } from "vue-router";

declare module "@vue/runtime-core" {
  // 声明自己的 store state
  interface State {
    routers: Array<RouteRecordRaw>;
    allRouters: [];
  }

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
