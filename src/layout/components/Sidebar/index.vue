<!--
 * @Date: 2022-04-11 17:20:13
 * @LastEditors: YeKe
 * @LastEditTime: 2022-11-23 18:35:50
 * @FilePath: \vue3-vite-ts-admin\src\layout\components\Sidebar\index.vue
-->
<template>
  <div class="">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @select="selectPath"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="route in sidebarRouters">
        <SidebarItem v-for="item in route.children" :item="item" />
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import SidebarItem from "./SidebarItem.vue";
import { SidebarRoutersItem } from "@/utils/types";
import { isExternal } from "@/utils/validate";
import {permissionRouters} from "@/assets/json/routers.json";
const router = useRouter();

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const selectPath = (path: string) => {
  console.log(path);
  if (isExternal(path)) {
    window.open(path, "_blank");
  } else {
    router.push({ path: path });
  }
};

const sidebarRouters = permissionRouters;
</script>

<style lang="scss" scoped></style>
