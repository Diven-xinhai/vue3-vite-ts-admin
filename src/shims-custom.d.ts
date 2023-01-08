/*
 * @Date: 2022-04-18 15:26:20
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-08 15:21:00
 * @FilePath: \vue3-vite-ts-admin\src\shims-custom.d.ts
 */
import axios from "axios";

declare module "axios" {
  export interface CustomSuccessData<T> {
    code: string | number;
    token?: string;
    data?: T;
  }
}
