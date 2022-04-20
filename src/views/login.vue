<template>
  <div class="flex flex-main-center flex-cross-center login-wrap">
    <el-form ref="loginRef" :model="loginForm" :rules="loginRules" class="login-form">
      <p class="title">登录</p>
      <el-form-item label="账号" prop="username">
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model.number="loginForm.password" type="password" show-password />
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button
          type="primary"
          style="width: 100%"
          :loading="loading"
          @click.prevent="handleLogin"
          >登录</el-button
        >
        <div style="width: 100%">
          <router-link class="link-type" :to="'/register'">立即注册</router-link>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts" name="Login">
import { getRouters } from "@/api/menu.ts";
import { ref, getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();

const loginForm = ref({
  username: "admin",
  password: "admin123",
  rememberMe: false,
  code: "",
  uuid: "",
});

const loginRules = {
  username: [{ required: true, trigger: "blur", message: "请输入您的账号" }],
  password: [{ required: true, trigger: "blur", message: "请输入您的密码" }],
  code: [{ required: true, trigger: "change", message: "请输入验证码" }],
};

const loading = ref(false);

const handleLogin = () => {
  proxy.$refs.loginRef.validate((valid) => {
    if (valid) {
        console.log(111);
        
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
