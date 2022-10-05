/*
 * @Date: 2022-04-18 15:26:20
 * @LastEditors: YeKe
 * @LastEditTime: 2022-09-29 16:27:39
 * @FilePath: \vue3-vite-ts-admin\src\shims-custom.d.ts
 */
import axios from "axios";

declare module "axios" {
    export interface CustomSuccessData1<T> {
        token?: string,
        data?: T
    }
}