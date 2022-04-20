/*
 * @Date: 2022-04-14 09:30:39
 * @LastEditors: YeKe
 * @LastEditTime: 2022-04-18 16:56:50
 * @FilePath: \vue3-vite-ts-admin\src\utils\request\request.ts
 */
import axios from "axios";
const envData = import.meta.env;

const server = axios.create({
    baseURL: envData.VITE_API_URL,
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    },
    timeout: 10000,
})


server.interceptors.request.use(config => {
    console.log(config);
    // 是否需要设置 token
    config.headers!['token'] = localStorage.getItem("token") as string // 让每个请求携带自定义token 请根据实际情况自行修改
    return config
})

export default server 