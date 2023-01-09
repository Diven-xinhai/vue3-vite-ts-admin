<!--
 * @Description: 设置系统颜色
 * @Author: yeke
 * @Date: 2023-01-08 13:15:12
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-08 22:13:17
-->
<template>
  <div class="color-wrap">
    <h2 class="title">设置系统主题色</h2>
    <el-color-picker
      style="margin-top: 20px"
      v-model="systeamColor"
      @change="onColorChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAppStore } from "@/store/app";
import { colorChange } from "@/utils/color";
const appStore = useAppStore();

const systeamColor = ref(appStore.theme.color ? appStore.theme.color : "");

const onColorChange = (e: string | null) => {
  if (e) {
    colorChange(e);
    appStore.setTheme(e);
  }
};
</script>

<style lang="scss" scoped>
.color-wrap {
  text-align: center;
}
</style>
