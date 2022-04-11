<!--
 * @Date: 2022-04-11 09:54:14
 * @LastEditors: YeKe
 * @LastEditTime: 2022-04-11 17:45:30
 * @FilePath: \vue3-vite-ts-admin\src\layout\index.vue
-->
<template>
  <div>
    <Sidebar />
    <AppMain />
  </div>
</template>

<script setup lang="ts">
import { AppMain } from "./components";
import Sidebar from "./components/Sidebar/index.vue";
const envTitle = import.meta.env;
console.log(envTitle);
</script>

<style scoped></style>
