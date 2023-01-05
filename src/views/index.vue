<!--
 * @Date: 2022-04-11 11:46:06
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-05 16:11:52
 * @FilePath: \vue3-vite-ts-admin\src\views\index.vue
-->
<template>
  <div class="title">
    我是首页
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { getRouters } from "@/api/menu";
import useMousePosition from "@/hooks/useMousePosition";
onMounted(() => {
  // getRoutersList();
});

const { x, y } = useMousePosition();
const getRoutersList = () => {
  console.log(123);


};
</script>

<style lang="scss" scoped>
.title {
  // color: $red;
}
</style>
