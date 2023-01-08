/*
 * @Date: 2022-04-18 15:28:54
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-08 15:21:06
 * @FilePath: \vue3-vite-ts-admin\src\utils\request\type.ts
 */
import { AxiosResponse, AxiosRequestConfig, CustomSuccessData } from "axios";

// 泛型接口
export interface Get {
    <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<CustomSuccessData<T>>;
}

export interface IAxiosPostOrPutOrDelete {
    <T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<CustomSuccessData<T>>
}