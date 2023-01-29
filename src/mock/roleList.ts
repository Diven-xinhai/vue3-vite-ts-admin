/*
 * @Description: 角色列表
 * @Author: yeke
 * @Date: 2023-01-19 12:26:35
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-23 17:29:46
 */
import { responseType } from "./types";
export default [
  {
    type: "get",
    url: "/api/roleList",
    timeout: 1000,
    response: (data: any): responseType => {
      return {
        code: 200,
        msg: "获取成功",
        data: [
          {
            id: "0",
            roleKey: "admin",
            roleName: "超级管理员",
            status: "0",
            roleSort: 0,
          },
          {
            id: "1",
            roleKey: "common",
            roleName: "普通角色",
            status: "0",
            roleSort: 1,
          },
        ],
      };
    },
  },
];
