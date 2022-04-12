<!--
 * @Date: 2022-04-11 17:20:13
 * @LastEditors: YeKe
 * @LastEditTime: 2022-04-12 18:01:36
 * @FilePath: \vue3-vite-ts-admin\src\layout\components\Sidebar\index.vue
-->
<template>
  <div class="">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <SidebarItem v-for="route in sidebarRouters" :item="route" />
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import SidebarItem from "./SidebarItem.vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const sidebarRouters = reactive([
  {
    path: "/",
    hidden: false,
    component: "Layout",
    children: [
      {
        name: "Index",
        path: "index",
        hidden: false,
        component: "project/index",
        meta: {
          title: "项目管理",
          icon: "project",
          noCache: true,
          link: null,
        },
        children: [
          {
            name: "project1",
            path: "project/1",
            hidden: false,
            component: "coordinate/index",
            meta: {
              title: "项目管理1",
              icon: "项目管理",
              noCache: false,
              link: null,
            },
          },
          {
            name: "Log",
            path: "log",
            hidden: false,
            redirect: "noRedirect",
            component: "ParentView",
            alwaysShow: true,
            meta: {
              title: "日志管理",
              icon: "log",
              noCache: false,
              link: null,
            },
            children: [
              {
                name: "Operlog",
                path: "operlog",
                hidden: false,
                component: "monitor/operlog/index",
                meta: {
                  title: "操作日志",
                  icon: "form",
                  noCache: false,
                  link: null,
                },
              },
              {
                name: "Logininfor",
                path: "logininfor",
                hidden: false,
                component: "monitor/logininfor/index",
                meta: {
                  title: "登录日志",
                  icon: "logininfor",
                  noCache: false,
                  link: null,
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/",
    hidden: false,
    component: "Layout",
    children: [
      {
        name: "Coordinate",
        path: "coordinate",
        hidden: false,
        component: "coordinate/index",
        meta: {
          title: "项目协调",
          icon: "项目协调",
          noCache: false,
          link: null,
        },
        children: [
          {
            name: "coordinate1",
            path: "coordinate/1",
            hidden: false,
            component: "coordinate/index",
            meta: {
              title: "项目协调1",
              icon: "项目协调",
              noCache: false,
              link: null,
            },
          },
        ],
      },
    ],
  },
  {
    path: "/",
    hidden: false,
    component: "Layout",
    children: [
      {
        name: "Warning",
        path: "warning",
        hidden: false,
        component: "warning/index",
        meta: {
          title: "监控预警",
          icon: "项目预警",
          noCache: false,
          link: null,
        },
      },
    ],
  },
]);
</script>

<style lang="scss" scoped></style>
