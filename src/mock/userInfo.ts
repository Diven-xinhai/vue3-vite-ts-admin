/*
 * @Description: 用户信息
 * @Author: yeke
 * @Date: 2023-01-08 18:46:10
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-08 21:44:55
 */
import { responseType } from "./types";
export default [
  {
    type: "get",
    url: "/api/userInfo",
    response: (data: any): responseType => {
      return {
        code: 200,
        msg: "操作成功",
        data: {
          roles: ["admin"],
          permissions: [
            "system:user:add",
            "system:user:edit",
            "system:user:remove",
          ],
          user: {
            userName: "admin",
            nickName: "野克",
          },
        },
      };
    },
  },
];
