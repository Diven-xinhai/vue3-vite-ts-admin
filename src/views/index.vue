<!--
 * @Date: 2022-04-11 11:46:06
 * @LastEditors: yeke
 * @LastEditTime: 2023-03-06 17:15:03
 * @FilePath: \vue3-vite-ts-admin\src\views\index.vue
-->
<template>
  <div class="title">
    <h1>介绍</h1>
    <p>这是一个简洁、干净的后台管理系统的前端模板，参考了若依的部分代码。</p>
    <p>几乎涵盖了一个中小型管理系统的功能项。</p>
    <p>可登录 admin 或者 common 两个账户来体验。</p>
    <h1>技术栈</h1>
    <p>Vue3、Typescript、Vite、Pinia、ElementPlus</p>
    <h1>功能</h1>
    <p>路由权限、菜单权限、按钮权限</p>
    <p>Echarts图表展示</p>
    <p>富文本</p>
    <p>换肤</p>
    <p>表单生成器：抽空开发中...</p>
    <h1>补充</h1>
    <p>项目基本都是用的按需引入</p>
    <p>比如：Element、Echarts</p>
    <h1>开源项目地址</h1>
    <p>https://gitee.com/Divenl/vue3-vite-ts-admin</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import useMousePosition from "@/hooks/useMousePosition";
onMounted(() => {});

const { x, y } = useMousePosition();
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  h1 {
    margin: 15px 0 10px 0;
  }
  p {
    line-height: 25px;
  }
}
</style>
