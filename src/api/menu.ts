/*
 * @Date: 2022-04-18 14:12:17
 * @LastEditors: YeKe
 * @LastEditTime: 2022-04-18 16:02:56
 * @FilePath: \vue3-vite-ts-admin\src\api\menu.ts
 */
import request from '@/utils/request/index'

// 获取路由
export const getRouters = () => {
  return request.post(
    '/getRouters',
  )
}