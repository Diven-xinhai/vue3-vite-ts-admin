/*
 * @Date: 2022-11-23 10:40:05
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-01 13:34:00
 * @FilePath: \vue3-vite-ts-admin\src\utils\types.ts
 */

/**
 * @description: 侧边栏类型声明
 */
export interface SidebarRoutersItem {
  hidden?: boolean;
  children?: SidebarRoutersItem[];
  path: string;
  meta: any;
  name: string;
  component: any;
}
