/*
 * @Description: 事件总线
 * @Date: 2023-02-09 09:45:20
 * @LastEditors: YeKe
 * @LastEditTime: 2023-02-09 09:52:50
 * @FilePath: \vue3-vite-ts-admin\src\views\ability\lowCode\utils\event.ts
 */
import mitt from "mitt";

export const events = mitt(); // 导出一个发布订阅的对象
