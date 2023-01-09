/*
 * @Date: 2022-04-18 15:28:54
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-09 10:32:16
 * @FilePath: \vue3-vite-ts-admin\src\utils\request\type.ts
 */
import { AxiosResponse, AxiosRequestConfig, CustomSuccessData } from "axios";

// 泛型接口
export interface Get {
    <T>(url: string, config?: AxiosRequestConfig): Promise<CustomSuccessData<T>>;
}

export interface IAxiosPostOrPutOrDelete {
    <T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<CustomSuccessData<T>>
}