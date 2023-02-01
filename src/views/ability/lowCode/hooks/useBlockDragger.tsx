/*
 * @Description:
 * @Date: 2023-02-01 16:53:48
 * @LastEditors: YeKe
 * @LastEditTime: 2023-02-01 17:20:44
 * @FilePath: \vue3-vite-ts-admin\src\views\ability\lowCode\hooks\useBlockDragger.tsx
 */
import { Ref } from "vue";
import { FocuseData } from "../hooks/useFocus";
export const useBlockDragger = (focusData: Ref<FocuseData>) => {
  /**
   * @description: 当前选中组件拖拽的状态
   * @param startX 鼠标按下的 X 轴
   * @param startY 鼠标按下的 Y 轴
   * @param startPos 鼠标按下时，所有选中组件的初始位置
   */
  const dragState = {
    startX: 0,
    startY: 0,
    startPos: [] as { top: number; left: number }[],
  };

  /**
   * @description: 鼠标按下
   * @description: 增加监听事件；赋初始值；
   */
  const mousedown = (e: MouseEvent) => {
    dragState.startX = e.clientX;
    dragState.startY = e.clientY;
    dragState.startPos = focusData.value.focus.map(({ top, left }) => ({
      top,
      left,
    }));
    document.addEventListener("mousemove", mousemove);
    document.addEventListener("mouseup", mouseup);
  };

  /**
   * @description: 鼠标移动
   * @description: 比较：移动后与初始值的差值
   */
  const mousemove = (e: MouseEvent) => {
    const { clientX: moveX, clientY: moveY } = e;
    const durX = moveX - dragState.startX;
    const durY = moveY - dragState.startY;
    focusData.value.focus.forEach((block, index) => {
      block.top = dragState.startPos[index].top + durY;
      block.left = dragState.startPos[index].left + durX;
    });
  };

  /**
   * @description: 鼠标松开
   */
  const mouseup = (e: MouseEvent) => {
    document.removeEventListener("mousemove", mousemove);
    document.removeEventListener("mouseup", mouseup);
  };

  return {
    mousedown,
  };
};
