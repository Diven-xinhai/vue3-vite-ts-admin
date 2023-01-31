<template>
  <div class="low-code">
    <Editor v-model="state"></Editor>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import data from "./data.json";
import Editor from "./packages/editor";
import { editorConfig } from "@/views/ability/lowCode/utils/keys";
import { registerConfig as config } from "./utils/editor-config";

const state = ref(data);

provide(editorConfig, config);
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
