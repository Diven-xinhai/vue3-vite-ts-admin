/*
 * @Description:
 * @Date: 2023-01-10 15:12:17
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-10 15:27:23
 * @FilePath: \vue3-vite-ts-admin\src\api\echart.ts
 */
import request from "@/utils/request/index";

// 获取echarts
export const chartData = () => {
  return request.get<any>("/api/chartData");
};
