/*
 * @Description:
 * @Author: yeke
 * @Date: 2023-01-08 19:22:54
 * @LastEditors: yeke
 * @LastEditTime: 2023-03-09 20:16:10
 */
import { App } from "vue";
import hasPermissions from "./permission/hasPermissions";
import hasRole from "./permission/hasRole";

export default function directive(app: App<Element>) {
  app.directive("hasPermissions", hasPermissions);
  app.directive("hasRole", hasRole);
}
