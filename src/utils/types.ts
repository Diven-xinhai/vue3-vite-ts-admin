/*
 * @Date: 2022-11-23 10:40:05
 * @LastEditors: YeKe
 * @LastEditTime: 2022-11-23 17:11:25
 * @FilePath: \vue3-vite-ts-admin\src\utils\types.ts
 */


/**
 * @description: 侧边栏类型声明
 */
export interface SidebarRoutersItem {
    hidden: boolean,
    children?: SidebarRoutersItem[],
    path: string,
    meta: any,
}
