/*
 * @Date: 2022-09-15 11:48:40
 * @LastEditors: YeKe
 * @LastEditTime: 2022-09-15 16:54:54
 * @FilePath: \vue3-vite-ts-admin\src\hooks\useMousePosition.ts
 */
import { ref, onMounted, onUnmounted, Ref, reactive } from "vue";

interface MousePosition {
  x: Ref<number>;
  y: Ref<number>;
}

const useMousePosition = (): MousePosition => {
  const x = ref(0);
  const y = ref(0);

  const updateMouse = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };

  onMounted(() => {
    document.addEventListener("click", updateMouse);
  });

  onUnmounted(() => {
    document.removeEventListener("click", updateMouse);
  });

  return { x, y };
};

export default useMousePosition
