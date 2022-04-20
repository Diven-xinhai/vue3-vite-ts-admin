/*
 * @Date: 2022-04-15 17:49:49
 * @LastEditors: YeKe
 * @LastEditTime: 2022-04-18 16:06:06
 * @FilePath: \vue3-vite-ts-admin\src\api\login.ts
 */
import request from '@/utils/request/index'

// 获取路由
export const login = (data: object) => {
  return request.post(
    '/login',
    data
  )
}

// 获取用户详细信息
export const getInfo = () => {
  return request.get(
    '/getInfo',
  )
}

// 退出方法
export const logout = () => {
  return request.post(
    '/logout',
  )
}
