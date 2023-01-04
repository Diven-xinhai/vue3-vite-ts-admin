<!--
 * @Date: 2022-04-11 09:54:14
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-04 16:20:33
 * @FilePath: \vue3-vite-ts-admin\src\layout\index.vue
-->
<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <navbar></navbar>
      <app-main />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppMain } from "./components";
import Sidebar from "./components/Sidebar/index.vue";
import Navbar from "./components/Navbar.vue";
const envTitle = import.meta.env;
console.log(envTitle);
</script>

<style scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
}
</style>
