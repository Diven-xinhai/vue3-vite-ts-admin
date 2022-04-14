<!--
 * @Date: 2022-04-11 11:46:06
 * @LastEditors: YeKe
 * @LastEditTime: 2022-04-14 18:39:31
 * @FilePath: \vue3-vite-ts-admin\src\views\index.vue
-->
<template>
  <div class="title">我是首页</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { getRouters } from "@/api/menu.js";

onMounted(() => {
  getRoutersList();
});
const getRoutersList = () => {
  console.log(123);

  getRouters().then((res) => {
    console.log(res);
  });
};
</script>

<style lang="scss" scoped>
.title {
  color: $red;
}
</style>
