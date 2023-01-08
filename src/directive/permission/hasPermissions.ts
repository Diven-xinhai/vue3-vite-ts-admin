/*
 * @Description: permission 操作权限处理
 * @Author: yeke
 * @Date: 2023-01-08 19:23:08
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-08 21:44:19
 */
import { useUserStore } from "@/store/user";
import type { DirectiveBinding } from "vue";

export default function mounted(el: HTMLElement, binding: DirectiveBinding) {
  const { value } = binding;
  const permissions = useUserStore().permissions;
  const all_permission = "*:*:*";
  if (value && value instanceof Array && value.length > 0) {
    const hasPermissions = permissions.some((permission) => {
      return all_permission === permission || value.includes(permission);
    });

    if (!hasPermissions) {
      el.parentNode && el.parentNode.removeChild(el);
    }
  } else {
    throw new Error("请设置操作权限值");
  }
}
