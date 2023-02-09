/*
 * @Description:
 * @Date: 2023-02-01 16:53:48
 * @LastEditors: YeKe
 * @LastEditTime: 2023-02-09 16:59:33
 * @FilePath: \vue3-vite-ts-admin\src\views\ability\lowCode\hooks\useBlockDragger.tsx
 */
import { Ref, reactive } from "vue";
import { JsonSchema } from "../types";
import { FocuseData } from "../hooks/useFocus";
import { Blocks } from "../types";
import { events } from "../utils/event";

export interface LinesY {
  showTop: number;
  top: number;
}
export interface LinesX {
  showLeft: number;
  left: number;
}
export interface Lines {
  x: LinesX[];
  y: LinesY[];
}
export const useBlockDragger = (
  focusData: Ref<FocuseData>,
  lastSelectBlock: Ref<Blocks>,
  data: Ref<JsonSchema>
) => {
  /**
   * @description: 当前选中组件拖拽的状态
   * @param startX 鼠标按下的 X 轴
   * @param startY 鼠标按下的 Y 轴
   * @param startPos 鼠标按下时，所有选中组件的初始位置
   * @param lines 鼠标按下时，所有未选中元素辅助线的位置
   */
  const dragState = {
    startX: 0,
    startY: 0,
    startPos: [] as { top: number; left: number }[],
    lines: {} as Lines,
    startLeft: 0,
    startTop: 0,
    dragging: false, // 默认没有正在拖拽
  };

  // 辅助线位置
  const markLine = reactive({
    x: null as number | null,
    y: null as number | null,
  });

  /**
   * @description: 鼠标按下
   * @description: 增加监听事件；赋初始值；
   */
  const mousedown = (e: MouseEvent) => {
    // 选中的最后一个元素的属性用 B 表示
    const { width: BWidth, height: BHeight } = lastSelectBlock.value;

    // 记录每个选中的位置
    dragState.startX = e.clientX;
    dragState.startY = e.clientY;
    dragState.startPos = focusData.value.focus.map(({ top, left }) => ({
      top,
      left,
    }));

    // 记录拖拽前的位置
    dragState.startLeft = lastSelectBlock.value.left;
    dragState.startTop = lastSelectBlock.value.top;
    dragState.dragging = false;

    dragState.lines = (() => {
      const { unfocus } = focusData.value; // 获取其他未选中的小组件，以他们的位置做辅助线
      const lines: Lines = { x: [], y: [] }; // 计算横着的位置用 y 来存放，x 存放的是纵向的
      [
        ...unfocus,
        {
          top: 0,
          left: 0,
          width: data.value.container.width,
          height: data.value.container.height,
        },
      ].forEach((block) => {
        // 未选中的小组件元素用 A 表示
        const {
          top: ATop,
          left: ALeft,
          width: AWidth,
          height: AHeight,
        } = block;
        // 添加 当拖拽元素中最后选中的元素 与 未选中的元素其中一个边重合的可能，每个未选中的元素x,y的可能性各5种
        // showTop: 辅助线的位置
        // top: 拖拽小组件元素的位置
        // 未选中元素 相对 选中的最后一个元素 的位置
        if (AWidth && AHeight && BWidth && BHeight) {
          lines.y.push({ showTop: ATop, top: ATop }); // 顶对顶
          lines.y.push({ showTop: ATop, top: ATop - BHeight }); // 顶对底
          lines.y.push({
            showTop: ATop + AHeight / 2,
            top: ATop + AHeight / 2 - BHeight / 2,
          }); // 中对中
          lines.y.push({ showTop: ATop + AHeight, top: ATop + AHeight }); // 底对顶
          lines.y.push({
            showTop: ATop + AHeight,
            top: ATop + AHeight - BHeight,
          }); // 底对底

          lines.x.push({ showLeft: ALeft, left: ALeft }); // 左对左
          lines.x.push({ showLeft: ALeft + AWidth, left: ALeft + AWidth }); // 右对左
          lines.x.push({
            showLeft: ALeft + AWidth / 2,
            left: ALeft + AWidth / 2 - BWidth / 2,
          }); // 中对中
          lines.x.push({
            showLeft: ALeft + AWidth,
            left: ALeft + AWidth - BWidth,
          }); // 右对右
          lines.x.push({ showLeft: ALeft, left: ALeft - BWidth }); // 左对右
        }
      });
      console.log(lines);

      return lines;
    })();
    document.addEventListener("mousemove", mousemove);
    document.addEventListener("mouseup", mouseup);
  };

  /**
   * @description: 鼠标移动
   */
  const mousemove = (e: MouseEvent) => {
    let { clientX: moveX, clientY: moveY } = e;
    if (!dragState.dragging) {
      dragState.dragging = true;
      events.emit("start");
    }

    // 计算当前元素最新的left和top，去线里面找，找到显示的线
    // 鼠标移动后- 鼠标移动前 + left
    let left = moveX - dragState.startX + dragState.startLeft;
    let top = moveY - dragState.startY + dragState.startTop;

    // 先计算横线  距离参照物元素还有5像素的时候  就显示辅助线
    for (let i = 0; i < dragState.lines.y.length; i++) {
      const { top: t, showTop: sT } = dragState.lines.y[i]; // 获取每一根线
      // 如果小于5 说明接近了
      if (Math.abs(t - top) < 5) {
        markLine.y = sT; // 线要显示的位置
        moveY = dragState.startY - dragState.startTop + t; // 距离浏览器顶部的距离 - 距离容器的距离 + 目标的高度 = 最新的moveY
        break;
      }
    }
    for (let i = 0; i < dragState.lines.x.length; i++) {
      const { left: l, showLeft: sL } = dragState.lines.x[i]; // 获取每一根线
      // 如果小于5 说明接近了
      if (Math.abs(l - left) < 5) {
        markLine.x = sL; // 线要显示的位置
        moveX = dragState.startX - dragState.startLeft + l; // 距离浏览器左侧的距离 - 距离容器的距离 + 目标的宽度 = 最新的moveX
        break;
      }
    }

    // 比较：移动后与移动前的差值
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
    markLine.x = null;
    markLine.y = null;
    if (dragState.dragging) {
      events.emit("end");
    }
  };

  return {
    mousedown,
    markLine,
  };
};
