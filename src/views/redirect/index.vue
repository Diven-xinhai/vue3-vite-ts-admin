<!--
 * @Date: 2022-04-11 10:41:13
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-06 15:58:20
 * @FilePath: \vue3-vite-ts-admin\src\views\redirect\index.vue
-->
<template>
  <div>
    <h2>404</h2>
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
