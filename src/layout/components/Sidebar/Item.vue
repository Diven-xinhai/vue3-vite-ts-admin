<!--
 * @Date: 2022-04-11 11:54:16
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-05 12:59:08
 * @FilePath: \vue3-vite-ts-admin\src\layout\components\Sidebar\Item.vue
-->
<template>
  <el-icon>
    <svg-icon v-if="icon" className="icon" :name="icon"></svg-icon>
  </el-icon>
  <span class="title">{{ title }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon?: string;
  title: string;
}>();
</script>
<style></style>
