<!--
 * @Date: 2022-04-08 16:39:36
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-09 17:56:31
 * @FilePath: \vue3-vite-ts-admin\src\App.vue
-->
<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted, provide } from "vue";
import { useAppStore } from "@/store/app";
import { colorChange } from "@/utils/color";
// import * as echarts from "echarts";
// provide("echarts", echarts);
onMounted(() => {
  const color = useAppStore().theme.color ? useAppStore().theme.color : "";
  colorChange(color);
});
</script>
