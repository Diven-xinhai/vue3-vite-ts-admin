/*
 * @Date: 2022-04-14 09:30:39
 * @LastEditors: YeKe
 * @LastEditTime: 2022-04-14 18:46:14
 * @FilePath: \vue3-vite-ts-admin\src\utils\request.ts
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

})

export default server 