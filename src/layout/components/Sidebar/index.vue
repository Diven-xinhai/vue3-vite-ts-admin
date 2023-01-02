<!--
 * @Date: 2022-04-11 17:20:13
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-01 23:04:56
 * @FilePath: \vue3-vite-ts-admin\src\layout\components\Sidebar\index.vue
-->
<template>
  <div class="">
    <el-menu
      active-text-color="#46A0FC"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#333"
      @select="selectPath"
      @open="handleOpen"
      @close="handleClose"
    >
      <SidebarItem v-for="route in sidebarRouters" :item="route" />
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import SidebarItem from "./SidebarItem.vue";
import { isExternal } from "@/utils/validate";
import { usePermissionStore } from "@/store/permission";
import { permissionRouters } from "@/assets/json/routers.json";
const router = useRouter();
const permissionStore = usePermissionStore();
const sidebarRouters = computed(() => permissionStore.sidebarRouters);
// const sidebarRouters = permissionRouters;

const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};

const selectPath = (path: string) => {
  console.log(path);
  if (isExternal(path)) {
    window.open(path, "_blank");
  } else {
    router.push({ path: path });
  }
};
</script>

<style lang="scss" scoped></style>
