/*
 * @Description: 编辑器
 * @Date: 2023-01-30 16:24:56
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-30 18:44:48
 * @FilePath: \vue3-vite-ts-admin\src\views\ability\lowCode\packages\editor.tsx
 */
import { computed, defineComponent } from "vue";
import "./editor.scss";
import { JsonSchema } from "../types";
import EditorBlock from "./editor-block";
export default defineComponent({
  props: {
    modelValue: {
      type: Object,
    },
  },
  setup(props) {
    console.log(props.modelValue);

    const data = computed<JsonSchema>(() => {
      return props.modelValue as JsonSchema;
    });

    const containerStyles = computed(() => ({
      width: data.value.container.width + "px",
      height: data.value.container.height + "px",
    }));

    return () => (
      <div class="editor">
        <div class="editor-left">左侧物料区</div>
        <div class="editor-top">菜单栏</div>
        <div class="editor-right">属性控制栏</div>
        <div class="editor-container">
          {/* 负责产生滚动条 */}
          <div class="editor-container-canvas">
            {/* 产生内容区域 */}
            <div
              class="editor-container-canvas_content"
              style={containerStyles.value}
            >
              {data.value.blocks.map((block) => (
                <EditorBlock block={block}></EditorBlock>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  },
});
