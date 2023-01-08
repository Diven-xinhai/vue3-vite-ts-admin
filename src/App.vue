<!--
 * @Date: 2022-04-08 16:39:36
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-08 22:13:52
 * @FilePath: \vue3-vite-ts-admin\src\App.vue
-->
<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useAppStore } from "@/store/app";
import { colorChange } from "@/utils/color";
onMounted(() => {
  const color = useAppStore().theme.color ? useAppStore().theme.color : "";
  colorChange(color);
});
</script>
