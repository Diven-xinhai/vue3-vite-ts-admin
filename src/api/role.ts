/*
 * @Description: 用户
 * @Author: yeke
 * @Date: 2023-01-08 15:12:46
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-19 12:30:45
 */
import request from "@/utils/request/index";

// 获取角色列表
export const getRoleList = () => {
  return request.get<any>("/api/roleList");
};
