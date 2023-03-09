/*
 * @Description: roles 用户角色权限处理
 * @Author: yeke
 * @Date: 2023-03-09 20:13:35
 * @LastEditors: yeke
 * @LastEditTime: 2023-03-09 20:40:15
 */
import { useUserStore } from "@/store/user";
import type { DirectiveBinding } from "vue";

export default function mounted(el: HTMLElement, binding: DirectiveBinding) {
  const { value } = binding;
  const roles = useUserStore().roles;

  //   const super_role = "admin";
  if (value && value instanceof Array && value.length > 0) {
    const hasRoles = roles.some((roles) => {
      return value.includes(roles);
    });

    if (!hasRoles) {
      el.parentNode && el.parentNode.removeChild(el);
    }
  } else {
    throw new Error("请设置操作权限值");
  }
}
