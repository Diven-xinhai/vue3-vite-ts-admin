/*
 * @Description: router 类型补充
 * @Author: yeke
 * @Date: 2023-01-02 21:47:30
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-02 21:47:45
 */
import { _RouteRecordBase } from 'vue-router';

declare module 'vue-router'{
    interface _RouteRecordBase{
        hidden?: boolean | string | number
    }
}
