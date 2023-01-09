/*
 * @Description: 用户信息
 * @Author: yeke
 * @Date: 2023-01-08 18:46:10
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-09 10:29:34
 */
import { responseType } from "./types";
export default [
  {
    type: "get",
    url: "/api/userInfo",
    response: (data: any): responseType => {
      const { username } = data.query;
      return {
        code: 200,
        msg: "操作成功",
        data: {
          roles: [username ? username : "admin"],
          permissions: [
            "system:user:add",
            "system:user:edit",
            "system:user:remove",
          ],
          user: {
            userName: username ? username : "admin",
            nickName: "野克",
          },
        },
      };
    },
  },
];
