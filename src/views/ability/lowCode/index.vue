<template>
  <div class="low-code">
    <Editor v-model="state"></Editor>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import data from "./data.json";
import Editor from "./packages/editor";

const state = ref(data);
</script>

<style lang="scss" scoped>
.low-code {
  position: absolute;
  top: 20px;
  right: 20px;
  bottom: 20px;
  left: 20px;
}
</style>
