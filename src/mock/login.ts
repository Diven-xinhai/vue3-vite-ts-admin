/*
 * @Description: 登录mock数据
 * @Author: yeke
 * @Date: 2023-01-01 20:26:22
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-01 21:24:46
 */
import { responseType } from "./types";
export default [
  {
    type: "post",
    url: "/api/login",
    response: (data: any): responseType => {
      console.log(data.body);
      return {
        code: 200,
        msg: "登录成功",
        data: data.body,
      };
    },
  },
];
