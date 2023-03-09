<!--
 * @Description: 权限演示
 * @Author: yeke
 * @Date: 2023-03-09 18:08:29
 * @LastEditors: yeke
 * @LastEditTime: 2023-03-09 20:42:28
-->
<template>
  <div class="permission-wrap">
    <h2 class="title">权限标识</h2>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
        <div class="item">
          <p class="title">按钮权限</p>
          <p class="content">v-hasPermissions="['system:user:edit']"</p>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
        <div class="item">
          <p class="title">角色权限</p>
          <p class="content">v-hasRole="['admin']"</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.module.scss";
.permission-wrap {
  text-align: center;
  padding: 10px;
  .item {
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
    margin-top: 20px;
    padding: 15px;
    .title {
    }
    .content {
      margin-top: 10px;
    }
  }
}
</style>
