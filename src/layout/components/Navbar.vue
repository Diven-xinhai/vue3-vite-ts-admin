<!--
 * @Description: 顶部导航条
 * @Author: yeke
 * @Date: 2022-12-31 14:44:46
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-06 15:13:54
-->
<template>
  <div class="navbar">
    <div class="left">
      <svg-icon
        className="sidebar-icon"
        color="#333"
        :name="sidebarIcon"
        @click="toggleSidebar"
      ></svg-icon>
      <breadcrumb></breadcrumb>
    </div>
    <div class="right">
      <div class="avatar-wrap">
        <el-dropdown @command="handleCommand">
          <div class="avatar-img">
            <img src="@/assets/images/portrait.jpg" alt="" />
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="logOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAppStore } from "@/store/app";
import { useUserStore } from "@/store/user";
import Breadcrumb from "@/components/Creadcrumb/index.vue";
import { ElMessage } from "element-plus";
const sidebarIcon = ref("packUp");
const router = useRouter();
const appStore = useAppStore();
const userStore = useUserStore();
const toggleSidebar = () => {
  appStore.setSidebar();
};

const handleCommand = (command: string | number | object) => {
  switch (command) {
    case "logOut":
      logOut();
      break;
    default:
      break;
  }
};

const logOut = () => {
  userStore.logOut().then(() => {
    ElMessage({
      message: "退出成功",
      type: "success",
    });
    router.push("/login");
  });
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 5px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  .left {
    display: flex;
    align-items: center;
    .sidebar-icon {
      width: 20px;
      height: 20px;
      cursor: pointer;
      margin-right: 15px;
    }
  }
  .right {
    .avatar-wrap {
      .avatar-img {
        width: 40px;
        height: 40px;
        border-radius: 5px;
        overflow: hidden;
        cursor: pointer;
        img {
          width: 100%;
          display: block;
        }
      }
    }
  }
}
</style>
