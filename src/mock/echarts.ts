/*
 * @Description: echarts数据
 * @Date: 2023-01-10 15:07:17
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-10 17:26:10
 * @FilePath: \vue3-vite-ts-admin\src\mock\echarts.ts
 */
import { responseType } from "./types";
export default [
  {
    type: "get",
    url: "/api/chartData",
    timeout: 1000,
    response: (data: any): responseType => {
      return {
        code: 200,
        msg: "登录成功",
        data: [
          { label: "山东", value: "200" },
          { label: "北京", value: "800" },
          { label: "上海", value: "800" },
          { label: "四川", value: "300" },
          { label: "黑龙江", value: "180" },
        ],
      };
    },
  },
];
