<!--
 * @Description: 暗黑模式切换
 * @Author: yeke
 * @Date: 2023-01-08 12:43:55
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-08 13:13:07
-->
<template>
  <el-switch
    v-model="isDark"
    style="margin-left: 24px"
    inline-prompt
    :active-icon="Moon"
    :inactive-icon="Sunny"
    @change="changeDark"
  />
</template>

<script setup lang="ts">
import { Sunny, Moon } from "@element-plus/icons-vue";
import { useDark, useToggle } from "@vueuse/core";
import { colorMix } from "@/utils/color";
const isDark = useDark();
const changeDark = () => {
  useToggle(isDark);
  const el = document.documentElement;
//   el.style.setProperty("--theme-color", colorMix('#626aef', '#000000', 0.1));
};
</script>

<style lang="scss" scoped></style>
