<!--
 * @Description: 用户管理
 * @Date: 2023-01-05 15:30:57
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-06 17:50:55
 * @FilePath: \vue3-vite-ts-admin\src\views\system\user\index.vue
-->
<template>
  <div class="query-box">
    <el-form :model="queryForm" label-width="120px">
      <el-form-item label="用户名称">
        <el-input v-model="queryForm.userName" placeholder="请输入用户名称" />
      </el-form-item>
      
    </el-form>
  </div>
</template>

<script setup lang="ts" name="User">
import { onMounted, onActivated, reactive } from "vue";
import variables from "@/assets/styles/variables.module.scss";

onMounted(() => {
  console.log('onMounted：执行');
});

onActivated(() => {
  console.log("onActivated：页面被缓存了！");
});

const queryForm = reactive({
  userName: "",
});

console.log(variables);
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.module.scss";
.query-box {
  width: 100%;
  padding: 15px;
}
</style>
