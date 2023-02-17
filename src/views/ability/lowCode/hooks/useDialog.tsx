import { ElDialog } from "element-plus";
import { defineComponent, createVNode, render } from "vue";

const DialogComponent = defineComponent({
  props: {
    option: {
      type: Object,
    },
  },
  setup() {
    return () => {
      return <ElDialog></ElDialog>;
    };
  },
});
let vm;
export function $dialog(option: any) {
  const el = document.createElement("div");
  vm = createVNode(DialogComponent, { option }); // 将组件渲染成虚拟节点
  document.body.appendChild((render(vm, el), el)); // 渲染成真实节点扔到页面中
}
