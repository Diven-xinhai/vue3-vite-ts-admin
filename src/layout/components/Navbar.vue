<!--
 * @Description: 顶部导航条
 * @Author: yeke
 * @Date: 2022-12-31 14:44:46
 * @LastEditors: yeke
 * @LastEditTime: 2022-12-31 19:23:18
-->
<template>
  <div class="navbar">
    <svg-icon className="sidebar-icon" color="#333" :name="sidebarIcon"></svg-icon>
    <breadcrumb></breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Breadcrumb from "@/components/Creadcrumb/index.vue";
const sidebarIcon = ref("packUp");
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
