/*
 * @Author: your name
 * @Date: 2022-04-08 16:39:36
 * @LastEditTime: 2022-04-11 11:18:35
 * @LastEditors: YeKe
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-vite-ts-admin\src\env.d.ts
 */

/*
 ts引入模块方式
 使用三斜线 reference 引入，有常用两种方式 path和types
 他们区别就是 types 一般引入外部依赖的声明，path 一般引入自己写的声明
*/

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TITLE: string
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
