/*
 * @Date: 2022-04-18 15:54:24
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-09 10:33:30
 * @FilePath: \vue3-vite-ts-admin\src\utils\request\index.ts
 */
import server from "./request";
import { Get, IAxiosPostOrPutOrDelete } from "./type";

const get: Get = (url, config) => {
  // 这里axios.get的数据类型没有定义params，所以要在config中传
  return server.get(url, config);
};

const post: IAxiosPostOrPutOrDelete = (url, data, config) => {
  return server.post(url, data, config);
};

export default {
  get,
  post,
};
