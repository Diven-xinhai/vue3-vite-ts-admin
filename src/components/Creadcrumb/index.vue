<!--
 * @Description: 面包屑导航
 * @Author: yeke
 * @Date: 2022-12-31 14:44:46
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-06 15:12:32
-->
<template>
  <div class="breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <TransitionGroup name="breadcrumb">
        <el-breadcrumb-item
          v-for="(item, i) in levelList"
          :key="i"
          :to="toPath(item)"
        >
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </TransitionGroup>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, watch, onMounted } from "vue";
import { useRoute, RouteLocationMatched } from "vue-router";
import { ArrowRight } from "@element-plus/icons-vue";
const route = useRoute();
watch(route, () => {
  getBreadcrumb();
});
onMounted(() => {
  getBreadcrumb();
});

const levelList: Ref<RouteLocationMatched[]> = ref([]);

const getBreadcrumb = () => {
  let mached = route.matched.filter((item) => item.meta && item.meta.title);
  if (!mached.length) return;

  // 第一个路径如果不是首页，需要在匹配路径前面拼接一个首页
  const first = mached[0];
  if (first.path != "/index") {
    mached = [{ path: "/", meta: { title: "首页" } } as any].concat(mached);
  }
  levelList.value = mached.filter((item) => item.meta && item.meta.title);
};

const toPath = (item: RouteLocationMatched): object | string => {
  // 判断是否是目录
  if (item.redirect) {
    return "";
  } else {
    return { path: item.path };
  }
};
</script>

<style scoped>
.breadcrumb-move,
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s ease;
}
.breadcrumb-enter-from,
.breadcrumb-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
