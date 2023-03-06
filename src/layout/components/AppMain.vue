<!--
 * @Date: 2022-04-11 11:54:16
 * @LastEditors: yeke
 * @LastEditTime: 2023-03-06 17:11:24
 * @FilePath: \vue3-vite-ts-admin\src\layout\components\AppMain.vue
-->
<template>
  <section class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform">
        <KeepAlive :include="cachedViews">
          <component :is="Component" :key="route.path" />
        </KeepAlive>
      </transition>
    </router-view>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useTagsViewStore } from "@/store/tagsView";
const route = useRoute();
const tagsViewStore = useTagsViewStore();
const cachedViews = computed(() => tagsViewStore.cachedViews);
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  // min-height: calc(100vh - 50px);
  width: 100%;
  height: calc(100% - 40px - 50px);
  padding: 15px;
  position: relative;
  overflow: auto;
}

.fade-transform-enter-active {
  transition: all 0.3s ease-out;
}

.fade-transform-leave-active {
  transition: all .0s cubic-bezier(0, 0.5, 0.8, 1);
}

.fade-transform-enter-from,
.fade-transform-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
