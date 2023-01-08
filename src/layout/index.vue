<!--
 * @Date: 2022-04-11 09:54:14
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-08 22:32:46
 * @FilePath: \vue3-vite-ts-admin\src\layout\index.vue
-->
<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div :class="['main-container', isCollapse ? 'width-style' : '']">
      <navbar></navbar>
      <tags-view></tags-view>
      <app-main />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { AppMain } from "./components";
import Sidebar from "./components/Sidebar/index.vue";
import Navbar from "./components/Navbar.vue";
import TagsView from "./components/TagsView/index.vue";
import { useAppStore } from "@/store/app";
const isCollapse = computed(() => useAppStore().sidebar);

const envTitle = import.meta.env;
console.log(envTitle);
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  .main-container {
    width: 100%;
    width: calc(100% - 200px);
    margin-left: 200px;
    transition: width,margin-left 0.28s;
  }
  .width-style {
    width: calc(100% - 64px);
    margin-left: 64px;
  }
}
</style>
