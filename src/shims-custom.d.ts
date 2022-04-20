/*
 * @Date: 2022-04-18 15:26:20
 * @LastEditors: YeKe
 * @LastEditTime: 2022-04-18 16:25:29
 * @FilePath: \vue3-vite-ts-admin\src\shims-custom.d.ts
 */
import axios from "axios";

declare module "axios" {
    export interface CustomSuccessData<T> {
        token?: string,
        data?: T
    }
}