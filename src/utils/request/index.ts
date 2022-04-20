/*
 * @Date: 2022-04-18 15:54:24
 * @LastEditors: YeKe
 * @LastEditTime: 2022-04-18 16:05:57
 * @FilePath: \vue3-vite-ts-admin\src\utils\request\index.ts
 */
import server from "./request"
import { Get, IAxiosPostOrPutOrDelete } from "./type"

const get: Get = (url, data, config) => {
    return server.post(url, data, config)
}

const post: IAxiosPostOrPutOrDelete = (url, data, config) => {
    return server.post(url, data, config)
}

export default {
    get,
    post
}