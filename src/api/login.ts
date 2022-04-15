/*
 * @Date: 2022-04-15 17:49:49
 * @LastEditors: YeKe
 * @LastEditTime: 2022-04-15 18:00:46
 * @FilePath: \vue3-vite-ts-admin\src\api\login.ts
 */
import request from '@/utils/request'
// 登录方法
export function login(data: object) {
    return request({
        url: '/login',
        headers: {
            isToken: false
        },
        method: 'post',
        data: data
    })
}
// 获取用户详细信息
export function getInfo() {
    return request({
        url: '/getInfo',
        method: 'get'
    })
}

// 退出方法
export function logout() {
    return request({
        url: '/logout',
        method: 'post'
    })
}