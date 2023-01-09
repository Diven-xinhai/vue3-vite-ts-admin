<!--
 * @Date: 2022-04-11 17:20:13
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-09 17:13:19
 * @FilePath: \vue3-vite-ts-admin\src\layout\components\Sidebar\index.vue
-->
<template>
  <div class="sidebar-wrap" :style="{ width: !isCollapse ? '200px' : '64px' }">
    <logo :isCollapse="isCollapse"></logo>
    <el-scrollbar wrap-class="scrollbar-wrap">
      <el-menu
        :active-text-color="variables.themeColor"
        :default-active="activeMenu"
        text-color="#333"
        :unique-opened="true"
        :collapse="isCollapse"
        :collapse-transition="false"
        @select="selectPath"
        @open="handleOpen"
        @close="handleClose"
      >
        <SidebarItem v-for="route in sidebarRouters" :item="route" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Logo from "@/components/Logo/index.vue";
import SidebarItem from "./SidebarItem.vue";
import { isExternal } from "@/utils/validate";
import { usePermissionStore } from "@/store/permission";
import { useAppStore } from "@/store/app";
import variables from "@/assets/styles/variables.module.scss";

const route = useRoute();
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
  if (isExternal(path)) {
    window.open(path, "_blank");
  } else {
    router.push({ path: path });
  }
};

const activeMenu = computed(() => {
  const { path } = route;
  return path;
});
</script>

<style lang="scss">
.scrollbar-wrap {
  padding-bottom: 100px;
}
</style>
