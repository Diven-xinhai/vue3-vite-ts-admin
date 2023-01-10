/*
 * @Description: 登录mock数据
 * @Author: yeke
 * @Date: 2023-01-01 20:26:22
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-10 15:43:12
 */
import { responseType } from "./types";
export default [
  {
    type: "post",
    url: "/api/login",
    timeout: 1500,
    response: (data: any): responseType => {
      console.log(data.body);
      const { username, password } = data.body;
      if (
        (username !== "admin" || username !== "common") &&
        password !== "1234qwer"
      ) {
        return {
          code: 500,
          msg: "账号密码错误",
          data: null,
        };
      } else {
        return {
          code: 200,
          msg: "登录成功",
          data: data.body,
        };
      }
    },
  },
];
