<!--
 * @Date: 2022-04-11 09:54:14
 * @LastEditors: YeKe
 * @LastEditTime: 2022-04-13 16:40:01
 * @FilePath: \vue3-vite-ts-admin\src\layout\index.vue
-->
<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <AppMain />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppMain } from "./components";
import Sidebar from "./components/Sidebar/index.vue";
const envTitle = import.meta.env;
console.log(envTitle);
</script>

<style scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
