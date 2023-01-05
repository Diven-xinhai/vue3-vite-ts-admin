<!--
 * @Description: 标签
 * @Date: 2023-01-05 15:30:57
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-05 23:01:19
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
        className="close-tags"
        name="close"
        @click="closeTags(item, i)"
      ></svg-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, computed, onMounted, getCurrentInstance } from "vue";
import { useRoute, useRouter } from "vue-router";
import { AddRoute } from "@/store/types";
import { useTagsViewStore } from "@/store/tagsView";
const route = useRoute();
const router = useRouter();
const tagsViewStore = useTagsViewStore();

const visitedViews = computed(() => tagsViewStore.visitedViews);
watch(route, (n, o) => {
  console.log(n);
  addView();
});

onMounted(() => {
  addView();
});

const addView = () => {
  tagsViewStore.addViews(route);
};

const closeTags = (data: AddRoute, index: number) => {
  tagsViewStore.delView(data);
  // const lastRoute = visitedViews.value[visitedViews.value.length - 1];
  // console.log(lastRoute);
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
