/*
 * @Description: 用户
 * @Author: yeke
 * @Date: 2023-01-08 15:12:46
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-09 10:18:27
 */
import request from "@/utils/request/index";

// 获取用户列表
export const getUserList = () => {
  return request.get<any>("/api/userList");
};

// 获取用户信息
export const userInfo = (params: object) => {
  return request.get<any>("/api/userInfo", {params});
};
