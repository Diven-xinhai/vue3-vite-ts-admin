/*
 * @Description: json schema 类型声明
 * @Date: 2023-01-30 18:25:41
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-30 18:33:18
 * @FilePath: \vue3-vite-ts-admin\src\views\ability\lowCode\types.ts
 */
export interface Container {
  width: number;
  height: number;
}
export interface Blocks {
  width?: number,
  height?: number,
  top: number;
  left: number;
  zIndex: number;
  key: string;
  alignCenter?: boolean;
  focus?: boolean;
}
export interface JsonSchema {
  container: Container;
  blocks: Blocks[];
}
