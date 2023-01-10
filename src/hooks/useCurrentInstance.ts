/*
 * @Description: 
 * @Date: 2023-01-10 12:43:28
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-10 12:45:51
 * @FilePath: \vue3-vite-ts-admin\src\hooks\useCurrentInstance.ts
 */
import { ComponentInternalInstance, getCurrentInstance } from 'vue'
export default function useCurrentInstance() {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance
  const proxy = appContext.config.globalProperties
  return {
    proxy
  }
}