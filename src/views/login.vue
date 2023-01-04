<!--
 * @Description: 登录
 * @Author: yeke
 * @Date: 2022-12-31 14:38:16
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-04 15:39:54
-->
<template>
  <div class="flex flex-main-center flex-cross-center login-wrap">
    <el-form
      ref="loginRef"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
    >
      <p class="title">登录</p>
      <el-form-item label="账号" prop="username">
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model.number="loginForm.password"
          type="password"
          show-password
        />
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button
          type="primary"
          style="width: 100%"
          :loading="loading"
          @click.prevent="handleLogin(loginRef)"
        >
          登录
        </el-button>
        <div style="width: 100%">
          <router-link class="link-type" :to="'/register'">
            立即注册
          </router-link>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts" name="Login">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user";
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage } from "element-plus";
import { login } from "@/api/login";

const router = useRouter();
const store = useUserStore();
const loginRef = ref<FormInstance>();
const loginForm = reactive({
  username: "admin",
  password: "admin123",
  rememberMe: false,
  code: "",
  uuid: "",
});

const loginRules = reactive<FormRules>({
  username: [{ required: true, trigger: "blur", message: "请输入您的账号" }],
  password: [{ required: true, trigger: "blur", message: "请输入您的密码" }],
  code: [{ required: true, trigger: "change", message: "请输入验证码" }],
});

const loading = ref(false);

const handleLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      const userInfo = {
        userName: loginForm.username,
      };
      login(userInfo).then((res: any) => {
        if (res.code == 200) {
          ElMessage({
            message: res.msg,
            type: "success",
          });
          store.setToken('123123');
          store.setUserInfo(userInfo);
          router.push("/");
        }
      });
    }
  });
};
</script>

<style lang="scss" scoped>
.login-wrap {
  height: 100%;
  background-image: url("../assets/images/login-background.jpg");
  background-size: cover;
  .login-form {
    width: 400px;
    padding: 25px 25px 5px 25px;
    border-radius: 6px;
    background-color: #fff;
    .el-input {
      height: 40px;
      input {
        height: 40px;
      }
    }
    .title {
      margin: 0 auto 30px auto;
    }
  }
}
</style>
