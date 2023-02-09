/*
 * @Description: 
 * @Date: 2023-01-31 17:42:55
 * @LastEditors: YeKe
 * @LastEditTime: 2023-02-09 10:45:06
 * @FilePath: \vue3-vite-ts-admin\src\views\ability\lowCode\hooks\useMenuDragger.tsx
 */
import { JsonSchema } from "../types";
import { Component } from "../utils/editor-config";
import { Ref } from "vue";
import { events } from "../utils/event";

export const useMenuDragger = (
  contarnerRef: Ref<HTMLInputElement | null>,
  data: Ref<JsonSchema>
) => {
  let cuttentComponent: Component | null = null;
  const dragenter = (e: DragEvent) => {
    e.dataTransfer!.dropEffect = "move";
  };
  const dragover = (e: DragEvent) => {
    e.preventDefault();
  };
  const dragleave = (e: DragEvent) => {
    e.dataTransfer!.dropEffect = "none";
  };
  const drop = (e: DragEvent) => {
    data.value.blocks.push({
      top: e.offsetY,
      left: e.offsetX,
      zIndex: 1,
      key: cuttentComponent!.key,
      alignCenter: true, // 松手的时候可以居中
    });

    cuttentComponent = null;
  };
  const dragstart = (e: DragEvent, component: Component) => {
    // dragenter 进入元素中 添加一个移动的标识
    // dragover 在元素经过 必须要组织默认行为 否则不能触发drop
    // dragleave 离开元素的时候 需要增加一个禁用标识
    // drop 松手的时候 根据拖拽的组件 添加一个组件
    // dragend 拖拉结束时（释放鼠标键或按下 ESC 键）
    console.log(contarnerRef.value);
    contarnerRef.value?.addEventListener("dragenter", dragenter);
    contarnerRef.value?.addEventListener("dragover", dragover);
    contarnerRef.value?.addEventListener("dragleave", dragleave);
    contarnerRef.value?.addEventListener("drop", drop);
    cuttentComponent = component;
    events.emit('start') // 发布start
  };
  const dragend = (e: DragEvent) => {
    contarnerRef.value?.removeEventListener("dragenter", dragenter);
    contarnerRef.value?.removeEventListener("dragover", dragover);
    contarnerRef.value?.removeEventListener("dragleave", dragleave);
    contarnerRef.value?.removeEventListener("drop", drop);
    events.emit('end') // 发布end
  };

  return {
    dragstart,
    dragend,
  };
};
