/*
 * @Date: 2022-04-15 17:32:23
 * @LastEditors: YeKe
 * @LastEditTime: 2022-04-15 17:34:07
 * @FilePath: \vue3-vite-ts-admin\src\utils\auth.ts
 */
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token: string) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}