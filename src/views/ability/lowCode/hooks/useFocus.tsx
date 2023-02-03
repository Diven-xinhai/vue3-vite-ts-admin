import { Ref, computed } from "vue";
import { Blocks, JsonSchema } from "../types";

export interface FocuseData {
  focus: Blocks[];
  unfocus: Blocks[];
}

export const useFocus = (data: Ref<JsonSchema>, callback: Function) => {
  /**
   * @description: 清空选中状态
   */
  const clearBlockFocus = () => {
    data.value.blocks.forEach((block) => (block.focus = false));
  };

  /**
   * @description: 组件元素被按下
   */
  const blockMousedown = (e: MouseEvent, block: Blocks) => {
    e.preventDefault();
    e.stopPropagation();
    // block上我们定义一个属性 focus 获取焦点后就将 focus 变为 true
    if (e.shiftKey) {
      if (focusData.value.focus.length <= 1) {
        block.focus = true; // 当前只有一个节点被选中时，按住shift键也不会切换focus状态
      } else {
        block.focus = !block.focus;
      }
    } else {
      if (!block.focus) {
        clearBlockFocus();
        block.focus = true;
      }
    }
    callback(e);
  };

  /**
   * @description: 画布被按下
   */
  const containerMousedown = () => {
    clearBlockFocus();
  };

  /**
   * @description: 记录选中/未选中的元素（计算属性）
   */
  const focusData = computed<FocuseData>(() => {
    const focus: Blocks[] = [];
    const unfocus: Blocks[] = [];
    data.value.blocks.forEach((block) =>
      (block.focus ? focus : unfocus).push(block)
    );
    return { focus, unfocus };
  });

  return {
    blockMousedown,
    containerMousedown,
    focusData,
  };
};
