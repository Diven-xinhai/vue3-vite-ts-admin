/*
 * @Description:
 * @Author: yeke
 * @Date: 2023-01-08 19:22:54
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-08 19:35:28
 */
import { App } from "vue";
import hasPermissions from "./permission/hasPermissions";

export default function directive(app: App<Element>) {
  app.directive("hasPermissions", hasPermissions);
}
