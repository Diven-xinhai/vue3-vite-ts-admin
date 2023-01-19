<!--
 * @Description: 设置系统颜色
 * @Author: yeke
 * @Date: 2023-01-08 13:15:12
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-19 14:01:03
-->
<template>
  <div class="color-wrap">
    <div class="color-item">
      <p class="title">设置系统主题色：</p>
      <div>
        <el-color-picker
          style="margin-top: 20px"
          v-model="systeamColor"
          @change="onColorChange"
        />
      </div>
    </div>
    <div class="color-item">
      <p class="title">悼念主题：</p>
      <div>
        <el-button type="primary" @click="setMourn">
          {{ systeamMourn ? "点击恢复" : "点击使用" }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useAppStore } from "@/store/app";
import { colorChange } from "@/utils/color";
const appStore = useAppStore();

const systeamColor = computed(() => {
  return appStore.theme.color ? appStore.theme.color : "";
});
const systeamMourn = computed(() => {
  return appStore.mourn ? appStore.mourn : false;
});

const onColorChange = (e: string | null) => {
  if (e) {
    colorChange(e);
    appStore.setTheme(e);
  }
};

const setMourn = () => {
  if (systeamMourn.value) {
    let appBox = document.getElementById("app");
    if (appBox) {
      appBox.style.filter = "grayscale(0%)";
    }
  } else {
    let appBox = document.getElementById("app");
    if (appBox) {
      appBox.style.filter = "grayscale(100%)";
    }
  }
  appStore.setMourn(!systeamMourn.value);
};
</script>

<style lang="scss" scoped>
.color-wrap {
  .color-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
  }
}
</style>
