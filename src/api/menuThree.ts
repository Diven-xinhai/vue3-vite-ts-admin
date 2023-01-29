/*
 * @Description: 菜单树
 * @Author: yeke
 * @Date: 2023-01-23 10:20:11
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-23 10:24:01
 */

import request from "@/utils/request/index";

// 获取路由
export const menuThree = (params: object) => {
  return request.get("/api/getMenuThree", { params });
};
