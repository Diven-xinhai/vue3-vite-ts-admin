<!--
 * @Date: 2022-04-11 17:20:13
 * @LastEditors: YeKe
 * @LastEditTime: 2022-04-13 11:55:42
 * @FilePath: \vue3-vite-ts-admin\src\layout\components\Sidebar\SidebarItem.vue
-->
<template>
  <div v-if="!item.hidden">
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
  </div>
</template>

<script setup lang="ts">
import { defineComponent, PropType } from "vue";
import { RouteRecordRaw } from "vue-router";
import Item from "./Item.vue";
interface treeListInterface {
  name: string;
  hidden: any;
  path: any;
  meta: any;
  component: string;
  children?: treeListInterface[];
}
defineProps<{
  item: treeListInterface;
}>();
</script>

<style lang="scss" scoped></style>
