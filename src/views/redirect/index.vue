<!--
 * @Date: 2022-04-11 10:41:13
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-10 16:59:20
 * @FilePath: \vue3-vite-ts-admin\src\views\redirect\index.vue
-->
<template>
  <div>
    <h1 class="title">404</h1>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const { params, query } = route;
const { path } = params;
router.replace({ path: "/" + path, query });
</script>
<style lang="scss" scoped>
.title {
  text-align: center;
  margin: 50px auto;
}
</style>
