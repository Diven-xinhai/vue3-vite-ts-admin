/*
 * @Description: Symbol 命名
 * @Date: 2023-01-31 11:07:41
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-31 11:25:56
 * @FilePath: \vue3-vite-ts-admin\src\views\ability\lowCode\utils\keys.ts
 */

import { InjectionKey } from "vue";
import { CreateEditorConfig } from "./editor-config";

export const editorConfig: InjectionKey<CreateEditorConfig> = Symbol();
