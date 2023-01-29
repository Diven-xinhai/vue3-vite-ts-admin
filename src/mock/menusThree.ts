/*
 * @Description: 
 * @Author: yeke
 * @Date: 2023-01-21 23:57:31
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-23 17:37:58
 */
import Mock from "mockjs";
import { responseType } from "./types";
import { adminRouter, commonRouter } from "./router";
export default [
  {
    type: "get",
    url: "/api/getMenuThree",
    // timeout: 1500,
    response: (data: any): responseType => {
      return {
        code: 200,
        msg: "获取成功",
        data: filterArr(adminRouter),
      };
    },
  },
];

const filterArr = (menus: any[]): any[] => {
  return menus.map((item, i) => {
    if (item.children) {
      return Mock.mock({
        id: "@increment()",
        label: item.meta.title,
        children: filterArr(item.children),
      });
    } else {
      return Mock.mock({
        id: "@increment()",
        label: item.meta.title,
      });
    }
  });
};
