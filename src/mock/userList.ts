/*
 * @Description: 用户列表
 * @Author: yeke
 * @Date: 2023-01-08 15:11:19
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-10 17:25:57
 */
import { responseType } from "./types";
export default [
  {
    type: "get",
    url: "/api/userList",
    timeout: 1000,
    response: (data: any): responseType => {
      return {
        code: 200,
        msg: "获取成功",
        data: [
          {
            id: "0",
            phone: "13100000000",
            name: "Tom",
            status: "0",
          },
          {
            id: "1",
            phone: "13100000001",
            name: "Tom",
            status: "0",
          },
          {
            id: "2",
            phone: "13100000002",
            name: "Tom",
            status: "0",
          },
          {
            id: "3",
            phone: "13100000003",
            name: "Tom",
            status: "0",
          },
        ],
      };
    },
  },
];
