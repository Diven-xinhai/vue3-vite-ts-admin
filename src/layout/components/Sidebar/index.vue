<!--
 * @Date: 2022-04-11 17:20:13
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-04 17:35:51
 * @FilePath: \vue3-vite-ts-admin\src\layout\components\Sidebar\index.vue
-->
<template>
  <el-menu
    active-text-color="#46A0FC"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#333"
    :collapse="isCollapse"
    @select="selectPath"
    @open="handleOpen"
    @close="handleClose"
  >
    <SidebarItem v-for="route in sidebarRouters" :item="route" />
  </el-menu>
</template>

<script setup lang="ts">
import { ref,computed } from "vue";
import { useRouter } from "vue-router";
import SidebarItem from "./SidebarItem.vue";
import { isExternal } from "@/utils/validate";
import { usePermissionStore } from "@/store/permission";
import { useAppStore } from "@/store/app";

const router = useRouter();
const permissionStore = usePermissionStore();
const appStore = useAppStore();

const sidebarRouters = computed(() => permissionStore.sidebarRouters);
const isCollapse = computed(() => appStore.sidebar);

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

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
