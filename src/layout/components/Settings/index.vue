<!--
 * @Description: 布局设置
 * @Author: yeke
 * @Date: 2023-03-09 20:46:09
 * @LastEditors: yeke
 * @LastEditTime: 2023-03-09 21:08:02
-->
<template>
  <el-drawer v-model="drawer" title="I am the title" :with-header="false">
    <span>Hi there!</span>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";
const drawer = ref(false);

const openSetting = () => {
  drawer.value = true;
};

defineExpose({
  openSetting,
});
</script>

<style lang="scss" scoped>
.edit-wrap {
  text-align: center;
}
</style>
