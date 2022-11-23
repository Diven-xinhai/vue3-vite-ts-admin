/*
 * @Date: 2022-04-15 16:39:12
 * @LastEditors: YeKe
 * @LastEditTime: 2022-11-23 22:32:45
 * @FilePath: \vue3-vite-ts-admin\src\store\index.ts
 */
import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import permissionModule from "./modules/permission/index";

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

// 新建store 实例
export const store = createStore<Store>({
  modules: {
    permissionModule,
  },
});
