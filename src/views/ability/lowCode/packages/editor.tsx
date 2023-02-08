/*
 * @Description: 编辑器
 * @Date: 2023-01-30 16:24:56
 * @LastEditors: YeKe
 * @LastEditTime: 2023-02-08 17:55:07
 * @FilePath: \vue3-vite-ts-admin\src\views\ability\lowCode\packages\editor.tsx
 */
import { ref, computed, defineComponent, inject } from "vue";
import "./editor.scss";
import { JsonSchema, Blocks } from "../types";
import EditorBlock from "./editor-block";
import { editorConfig } from "../utils/keys";
import { useMenuDragger } from "../hooks/useMenuDragger";
import { useFocus } from "../hooks/useFocus";
import { useBlockDragger } from "../hooks/useBlockDragger";
export default defineComponent({
  props: {
    modelValue: {
      type: Object,
    },
  },
  //   emits: ["update:modelValue"],
  setup(props, ctx) {
    console.log(props.modelValue);

    let data = computed<JsonSchema>({
      get: () => props.modelValue as JsonSchema,
      set: (val) => {
        // ctx.emit("update:modelValue");
      },
    });

    const containerStyles = computed(() => ({
      width: data.value.container.width + "px",
      height: data.value.container.height + "px",
    }));

    const config = inject(editorConfig);

    const contarnerRef = ref<HTMLInputElement | null>(null);

    // 1. 实现菜单的拖拽功能
    const { dragstart, dragend } = useMenuDragger(contarnerRef, data);

    // 2. 实现编辑区 获取焦点,选中后有可能就直接拖拽了
    const { blockMousedown, containerMousedown, focusData, lastSelectBlock } =
      useFocus(data, (e: MouseEvent) => {
        console.log(focusData.value);
        mousedown(e);
      });

    // 3. 实现编辑区 拖拽多个元素的功能
    const { mousedown, markLine } = useBlockDragger(
      focusData,
      lastSelectBlock,
      data
    );

    const buttons = [
      { label: "撤销", icon: "revocation", handler: () => console.log("撤销") },
      { label: "重做", icon: "renewal", handler: () => console.log("重做") },
    ];

    return () => (
      <div class="editor">
        {/* 左侧物料区 */}
        <div class="editor-left">
          {/* 根据注册列表，渲染对的内容 */}
          {config?.componentList.map((component) => (
            <div
              class="editor-left-item"
              draggable
              onDragstart={(e) => dragstart(e, component)}
              onDragend={(e) => dragend(e)}
            >
              <span>{component.label}</span>
              <div>{component.preview()}</div>
            </div>
          ))}
        </div>
        {/* 菜单栏 */}
        <div class="editor-top">
          {buttons.map((btn) => {
            return (
              <div class='editor-top-button' onClick={btn.handler}>
                <svg-icon className="icon" name={btn.icon}></svg-icon>
                <span>{btn.label}</span>
              </div>
            );
          })}
        </div>
        {/* 属性控制栏 */}
        <div class="editor-right">属性控制栏</div>
        {/* 内容区 */}
        <div class="editor-container">
          {/* 负责产生滚动条 */}
          <div class="editor-container-canvas">
            {/* 产生内容区域 */}
            <div
              class="editor-container-canvas_content"
              style={containerStyles.value}
              ref={contarnerRef}
              onMousedown={containerMousedown}
            >
              {data.value.blocks.map((block, index) => (
                <EditorBlock
                  class={block.focus ? "editor-block-focus" : ""}
                  block={block}
                  onMousedown={(e: MouseEvent) =>
                    blockMousedown(e, block, index)
                  }
                ></EditorBlock>
              ))}
              {markLine.x !== null && (
                <div class="line-x" style={{ left: markLine.x + "px" }}></div>
              )}
              {markLine.y !== null && (
                <div class="line-y" style={{ top: markLine.y + "px" }}></div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
});
