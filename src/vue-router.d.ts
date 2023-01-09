/*
 * @Description: router 类型补充
 * @Author: yeke
 * @Date: 2023-01-02 21:47:30
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-09 15:40:33
 */
import { _RouteRecordBase } from "vue-router";

declare module "vue-router" {
  interface _RouteRecordBase {
    hidden?: boolean | string | number;
    permissions?: string[];
  }
  interface RouteMeta {
    title: string;
    icon: string;
    noCache: boolean;
    link?: string | null;
  }
}
