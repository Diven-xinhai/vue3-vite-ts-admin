<!--
 * @Description: 标签
 * @Date: 2023-01-05 15:30:57
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-05 18:00:16
 * @FilePath: \vue3-vite-ts-admin\src\layout\components\TagsView\index.vue
-->
<template>
  <p>我是标签</p>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
watch(route, (n, o) => {
  console.log(n);
});
</script>

<style lang="scss" scoped></style>
