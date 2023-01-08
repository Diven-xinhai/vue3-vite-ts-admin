<!--
 * @Date: 2022-04-11 11:46:06
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-08 22:38:01
 * @FilePath: \vue3-vite-ts-admin\src\views\index.vue
-->
<template>
  <div class="title">我是首页 <el-button type="primary">按钮</el-button></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
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
  text-align: center;
}
</style>
