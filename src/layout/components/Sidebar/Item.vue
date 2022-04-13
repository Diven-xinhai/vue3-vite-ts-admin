<!--
 * @Date: 2022-04-11 11:54:16
 * @LastEditors: YeKe
 * @LastEditTime: 2022-04-13 14:40:39
 * @FilePath: \vue3-vite-ts-admin\src\layout\components\Sidebar\item.vue
-->
<template>
  <svg-icon :name="icon"></svg-icon>
  <span>{{ title }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon?: string;
  title: string;
}>();
</script>
