<!--
 * @Description: 标签
 * @Date: 2023-01-05 15:30:57
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-06 15:55:46
 * @FilePath: \vue3-vite-ts-admin\src\layout\components\TagsView\index.vue
-->
<template>
  <div class="tags-view">
    <div
      :class="['item', isActive(item) ? 'active' : '']"
      v-for="(item, i) in visitedViews"
      @click="toPath(item)"
    >
      <span class="title">{{ item.title }}</span>
      <svg-icon
        v-if="item.path !== '/index'"
        className="close-tags"
        name="close"
        @click.stop="closeTags(item)"
      ></svg-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { AddRoute } from "@/store/types";
import { useTagsViewStore } from "@/store/tagsView";
const route = useRoute();
const router = useRouter();
const tagsViewStore = useTagsViewStore();

const visitedViews = computed(() => tagsViewStore.visitedViews);
watch(route, (n, o) => {
  addView();
});

onMounted(() => {
  addView();
});

const addView = () => {
  // 如果路由里没有符合条件的就不进行添加
  let mached = route.matched.filter((item) => item.meta && item.meta.title);
  if (!mached.length) return;
  tagsViewStore.addViews(route);
};

const closeTags = (data: AddRoute) => {
  tagsViewStore.delView(data);
  const lastRoute = visitedViews.value[visitedViews.value.length - 1];
  router.push(lastRoute.path);
};

const toPath = (data: AddRoute) => {
  router.push(data.path);
};

const isActive = (data: AddRoute) => {
  return data.path === route.path;
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.module.scss";
.tags-view {
  box-shadow: 0 0 5px #eee;
  padding: 5px 15px;
  background-color: #fff;
  display: flex;
  align-items: center;
  .item {
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 2px;
    border: 1px solid #eee;
    margin: 0 2px 0 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    .title {
      font-size: 12px;
      margin-right: 5px;
    }
    .close-tags {
      width: 18px;
      height: 18px;
      padding: 5px;
      &:hover {
        background-color: #eee;
      }
    }
  }
  .active {
    color: #fff;
    border: 1px solid $theme-color;
    background-color: $theme-color;
    & .close-tags:hover {
      background-color: rgba($color: #fff, $alpha: 0.2);
    }
  }
}
</style>
