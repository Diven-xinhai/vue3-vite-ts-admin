<!--
 * @Description: 顶部导航条
 * @Author: yeke
 * @Date: 2022-12-31 14:44:46
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-04 15:56:51
-->
<template>
  <div class="navbar">
    <svg-icon
      className="sidebar-icon"
      color="#333"
      :name="sidebarIcon"
      @click="toggleSidebar"
    ></svg-icon>
    <breadcrumb></breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAppStore } from "@/store/app";
import Breadcrumb from "@/components/Creadcrumb/index.vue";
const sidebarIcon = ref("packUp");
const appStore = useAppStore();
const toggleSidebar = () => {
  appStore.setSidebar();
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 15px;
  display: flex;
  align-items: center;
  background-color: #fff;
  .sidebar-icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-right: 15px;
  }
}
</style>
