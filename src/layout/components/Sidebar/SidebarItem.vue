<!--
 * @Date: 2022-04-11 17:20:13
 * @LastEditors: YeKe
 * @LastEditTime: 2022-04-12 18:01:50
 * @FilePath: \vue3-vite-ts-admin\src\layout\components\Sidebar\SidebarItem.vue
-->
<template>
  <div v-if="!item.hidden">
    <!-- 没有子级 -->
    <!-- <template v-if="hasOneShowingChild(item.children, item)"> -->
    <template v-if="!item.children[0].children">
      <el-menu-item v-for="child in item.children" :index="child.path">{{child.meta.title}}</el-menu-item>
    </template>

    <el-sub-menu v-else :index="item.path">
      <template #title>
        <!-- <i :class="`iconfont ${item.meta && item.meta.icon}`"></i> -->
        <span>{{ item.children[0].meta && item.children[0].meta.title }}</span>
      </template>
      <SidebarItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
      />
    </el-sub-menu>

    <!-- 有子级 -->
    <!-- <el-sub-menu v-else :index="resolvePath(item.path)">
      <template>
        <i :class="`iconfont ${item.meta && item.meta.icon}`"></i>
        <span>{{ item.meta && item.meta.title }}</span>
      </template>
      <SidebarItem
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        class="nest-menu"
      />
    </el-sub-menu> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  item: Object,
});

let onlyOneChild = ref({});

const hasOneShowingChild = (children, parent) => {
  if (!children) {
    children = [];
  }

  const showingChildren = children.filter((item) => {
    // 递归子级时进行的判断，有的话赋给onlyOneChild
    if (item.hidden) {
      return false;
    } else {
      onlyOneChild = item;
      return true;
    }
  });

  console.log(showingChildren);

  if (showingChildren.length === 1) {
  }

  if (showingChildren.length === 0) {
    onlyOneChild = { ...parent, path: "", noShowingChildren: true };
  }
  // console.log(onlyOneChild);
  
};

const resolvePath = (routePath, routeQuery) => {
  console.log(routePath, routeQuery);
  
}
// console.log(props.item);
</script>

<style lang="scss" scoped></style>
