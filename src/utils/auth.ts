/*
 * @Date: 2022-04-15 17:32:23
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-09 15:38:11
 * @FilePath: \vue3-vite-ts-admin\src\utils\auth.ts
 */
import { useUserStore } from "@/store/user";
const authPermission = (permission: string) => {
  const allPermissions = "*:*:*";
  const permissions = useUserStore().permissions;
  if (permission && permission.length > 0) {
    return permissions.some((item) => {
      return item === allPermissions || item === permission;
    });
  } else {
    return false;
  }
};

/**
 * @description: 验证用户是否含有指定权限，只需包含其中一个即可
 */
export const hasPermiOr = (permissions: string[]): boolean => {
  return permissions.some((item) => {
    return authPermission(item);
  });
};
