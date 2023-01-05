/*
 * @Description: 状态管理中用到且补充的类型声明
 * @Author: yeke
 * @Date: 2023-01-05 22:12:54
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-05 22:13:12
 */
import type { RouteLocationNormalizedLoaded } from "vue-router";

export interface AddRoute extends RouteLocationNormalizedLoaded {
  title?: string;
}
