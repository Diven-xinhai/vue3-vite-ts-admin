/*
 * @Date: 2022-04-14 09:30:39
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-09 09:13:15
 * @FilePath: \vue3-vite-ts-admin\src\utils\request\request.ts
 */
import axios from "axios";
import { ElMessage } from "element-plus";
const envData = import.meta.env;

const server = axios.create({
  baseURL: envData.VITE_API_URL,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  timeout: 10000,
});

server.interceptors.request.use((config) => {
  // 是否需要设置 token
  config.headers!["token"] = localStorage.getItem("token") as string; // 让每个请求携带自定义token 请根据实际情况自行修改
  return config;
});

server.interceptors.response.use(
  (response) => {
    if (response.status !== 200 || response.data.code != 200) {
      ElMessage.error(response.data.msg ? response.data.msg : "接口调用失败");
    }
    return response.data;
  },
  (error) => {
    ElMessage.error("网络错误");
  }
);

export default server;
