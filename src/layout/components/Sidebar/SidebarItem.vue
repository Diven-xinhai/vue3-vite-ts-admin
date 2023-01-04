<!--
 * @Date: 2022-04-11 17:20:13
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-04 17:31:33
 * @FilePath: \vue3-vite-ts-admin\src\layout\components\Sidebar\SidebarItem.vue
-->
<template>
  <template v-if="!item.hidden && item.meta">
    <!-- 无子级 -->
    <template v-if="!item.children">
      <el-menu-item :index="item.path">
        <Item :icon="item.meta.icon" :title="item.meta.title" />
      </el-menu-item>
    </template>

    <!-- 有子级 -->
    <el-sub-menu v-else :index="item.path">
      <template #title>
        <Item :icon="item.meta.icon" :title="item.meta.title" />
      </template>
      <SidebarItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
      />
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import Item from "./Item.vue";
import { RouteRecordRaw } from "vue-router";
const props = defineProps<{
  item: RouteRecordRaw;
}>();
</script>

<style lang="scss" scoped></style>
