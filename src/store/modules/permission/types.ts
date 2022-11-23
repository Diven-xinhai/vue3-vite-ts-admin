/*
 * @Date: 2022-11-23 17:11:08
 * @LastEditors: YeKe
 * @LastEditTime: 2022-11-23 19:14:38
 * @FilePath: \vue3-vite-ts-admin\src\store\modules\permission\types.ts
 */
import { RouteRecordRaw } from "vue-router";

/**
 * @description: 路由权限说明
 */
export default interface permissionStateTypes {
  routers: Array<RouteRecordRaw>;
  allRouters: [];
}
