<template>
  <div class="logo">
    <img class="img-small" v-if="isCollapse" :src="imgSmall" alt="" />
    <img class="img" v-else :src="img" alt="" />
  </div>
</template>

<script lang="ts" setup>
import img from "@/assets/images/logo1.png";
import imgSmall from "@/assets/logo.png";
const props = defineProps<{
  isCollapse: boolean;
}>();
</script>
<style lang="scss" scoped>
.logo {
  width: 100%;
  padding: 20px;
  .img {
    height: 36px;
  }
  .img-small {
    width: 20px;
  }
}
</style>
