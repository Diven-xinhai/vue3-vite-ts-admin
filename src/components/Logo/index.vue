<!--
 * @Description: 
 * @Author: yeke
 * @Date: 2023-01-05 20:10:38
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-29 12:30:45
-->
<template>
  <div class="logo">
    <svg-icon v-if="isCollapse" name="vite"></svg-icon>
    <div v-else class="img-box">
      <svg-icon className="icon" name="vite"></svg-icon>
      <span class="title">野克Admin</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  isCollapse: boolean;
}>();
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.module.scss";
.logo {
  width: 100%;
  padding: 20px;
  .img-box {
    height: 36px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      width: 30px !important;
      height: 30px !important;
      margin-right: 10px;
    }
    .title {
      color: $theme-color;
      font-weight: bold;
      white-space: nowrap;
    }
  }
}
</style>
