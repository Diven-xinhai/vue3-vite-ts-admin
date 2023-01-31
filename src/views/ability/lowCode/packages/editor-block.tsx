/*
 * @Description: 具体内容渲染
 * @Date: 2023-01-30 16:24:56
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-31 17:14:59
 * @FilePath: \vue3-vite-ts-admin\src\views\ability\lowCode\packages\editor-block.tsx
 */
import { computed, defineComponent, inject, onMounted, ref } from "vue";
import type { PropType } from "vue";
import { Blocks } from "../types";
import { editorConfig } from "../utils/keys";
export default defineComponent({
  props: {
    block: {
      type: Object as PropType<Blocks>,
      required: true,
    },
  },
  setup(props) {
    const config = inject(editorConfig);
    console.log(config);
    const blockStyles = computed(() => ({
      top: `${props.block.top}px`,
      left: `${props.block.left}px`,
      zIndex: props.block.zIndex,
    }));

    const blockRef = ref<HTMLInputElement | null>(null);
    onMounted(() => {
      const { offsetWidth, offsetHeight } = blockRef.value as HTMLInputElement;
      if (props.block.alignCenter) {
        props.block.top = props.block.top - offsetHeight / 2;
        props.block.left = props.block.left - offsetWidth / 2;
        props.block.alignCenter = false;
      }
    });

    // 通过block的key属性直接获取对应的组件
    const component = config?.componentMap[props.block.key];
    // 获取render函数
    const RenderComponent = component?.render();

    return () => {
      return (
        <div class="editor-block" style={blockStyles.value} ref={blockRef}>
          {RenderComponent}
        </div>
      );
    };
  },
});
