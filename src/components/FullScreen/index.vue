<!--
 * @Description: 全屏
 * @Author: yeke
 * @Date: 2023-01-19 11:32:17
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-19 11:42:43
-->
<template>
  <el-tooltip
    class="box-item"
    effect="dark"
    :content="isFullscreen ? '退出全屏' : '全屏'"
  >
    <svg-icon
      className="sidebar-icon"
      color="#333"
      :name="isFullscreen ? 'fullscreen-out' : 'fullscreen'"
      @click="toggle"
    ></svg-icon>
  </el-tooltip>
</template>

<script setup lang="ts">
import { useFullscreen } from "@vueuse/core";
const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>

<style lang="scss" scoped>
.sidebar-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 15px;
}
</style>
