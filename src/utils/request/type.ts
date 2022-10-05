/*
 * @Date: 2022-04-18 15:28:54
 * @LastEditors: YeKe
 * @LastEditTime: 2022-09-29 15:48:51
 * @FilePath: \vue3-vite-ts-admin\src\utils\request\type.ts
 */
import { AxiosResponse, AxiosRequestConfig, CustomSuccessData1 } from "axios";

// 泛型接口
export interface Get {
    <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<CustomSuccessData1<T>>;
}

export interface IAxiosPostOrPutOrDelete {
    <T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<CustomSuccessData1<T>>
}