<!--
 * @Date: 2022-04-11 11:54:16
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-04 17:37:48
 * @FilePath: \vue3-vite-ts-admin\src\layout\components\Sidebar\Item.vue
-->
<template>
  <svg-icon className="icon" :name="icon"></svg-icon>
  <span>{{ title }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon?: string;
  title: string;
}>();
</script>

<style lang="scss" scoped>
.icon {
  width: 20px;
  height: 20px;
}
</style>
