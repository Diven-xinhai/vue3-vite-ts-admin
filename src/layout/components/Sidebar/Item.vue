<!--
 * @Date: 2022-04-11 11:54:16
 * @LastEditors: yeke
 * @LastEditTime: 2022-12-31 15:32:56
 * @FilePath: \vue3-vite-ts-admin\src\layout\components\Sidebar\item.vue
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
