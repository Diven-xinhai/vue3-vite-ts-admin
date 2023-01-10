/*
 * @Description:
 * @Date: 2023-01-10 11:28:33
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-10 11:35:25
 * @FilePath: \vue3-vite-ts-admin\src\shims-vue.d.ts
 */
export {};

declare module "vue" {
  interface ComponentCustomProperties {
    $echarts: any;
  }
}
