<!--
 * @Date: 2022-04-11 10:41:13
 * @LastEditors: YeKe
 * @LastEditTime: 2022-04-11 10:42:41
 * @FilePath: \vue3-vite-ts-admin\src\views\redirect\index.vue
-->
<template>
  <div></div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const { params, query } = route;
const { path } = params;
router.replace({ path: "/" + path, query });
</script>
