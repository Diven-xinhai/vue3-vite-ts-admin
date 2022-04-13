/*
 * @Date: 2022-04-13 15:22:44
 * @LastEditors: YeKe
 * @LastEditTime: 2022-04-13 15:24:56
 * @FilePath: \vue3-vite-ts-admin\src\validate.ts
 */
/**
 * @description: 是否是外部链接
 * @param {string} path
 * @returns {boolean}
 */
export function isExternal(path: string): boolean {
    return /^(https?:|mailto:|tel:)/.test(path)
}