<!--
 * @Date: 2022-04-11 17:20:13
 * @LastEditors: YeKe
 * @LastEditTime: 2022-04-14 15:11:56
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
      @select="selectPath"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="route in sidebarRouters">
        <SidebarItem v-for="item in route.children" :item="item" />
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import SidebarItem from "./SidebarItem.vue";
import { isExternal } from "@/utils/validate";
const router = useRouter();

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const selectPath = (path:any) => {
  console.log(path);
  if (isExternal(path)) {
    window.open(path, "_blank");
  } else {
    router.push({ path: path });
  }
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
          icon: "404",
          noCache: true,
          link: null,
        },
        children: [
          {
            name: "project1",
            path: "https://www.baidu.com/",
            hidden: false,
            component: "coordinate/index",
            meta: {
              title: "项目管理1",
              icon: "404",
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
          icon: "404",
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
              icon: "404",
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
          icon: "404",
          noCache: false,
          link: null,
        },
      },
    ],
  },
]);
</script>

<style lang="scss" scoped></style>
