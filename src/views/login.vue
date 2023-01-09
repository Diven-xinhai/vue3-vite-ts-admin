<!--
 * @Description: 登录
 * @Author: yeke
 * @Date: 2022-12-31 14:38:16
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-09 10:31:33
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
        <el-input v-model="loginForm.username" placeholder="admin/common" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="loginForm.password"
          placeholder="1234qwer"
          type="password"
          show-password
          @keyup.enter="handleLogin(loginRef)"
        />
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-checkbox
          v-model="loginForm.rememberMe"
          label="记住密码"
          size="large"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          style="width: 100%"
          :loading="loading"
          @click.prevent="handleLogin(loginRef)"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts" name="Login">
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user";
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage } from "element-plus";
import { encrypt, decrypt } from "@/utils/crypto";
import Cookies from "js-cookie";
import { login } from "@/api/login";
onMounted(() => {
  getCookie();
});
const router = useRouter();
const store = useUserStore();
const loginRef = ref<FormInstance>();
const loginForm = reactive({
  username: "",
  password: "",
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
      if (loginForm.rememberMe) {
        Cookies.set("username", encrypt(loginForm.username), { expires: 7 });
        Cookies.set("password", encrypt(loginForm.password), { expires: 7 });
        Cookies.set("rememberMe", String(loginForm.rememberMe), {
          expires: 7,
        });
      } else {
        Cookies.remove("username");
        Cookies.remove("password");
        Cookies.remove("rememberMe");
      }

      const userInfo = {
        userName: loginForm.username,
        password: loginForm.password,
      };
      login(userInfo).then((res: any) => {
        if (res.code == 200) {
          ElMessage({
            message: res.msg,
            type: "success",
          });
          store.setToken("123123");
           // 为了模拟不同用户登录，暂时传了登录用户名，实际根据业务调整
          store.setUserInfo(userInfo)
          router.push("/");
        }
      });
    }
  });
};

const getCookie = () => {
  const username = Cookies.get("username");
  const password = Cookies.get("password");
  const rememberMe = Cookies.get("rememberMe");
  loginForm.username =
    username === undefined ? loginForm.username : decrypt(username);
  loginForm.password =
    password === undefined ? loginForm.password : decrypt(password);
  loginForm.rememberMe =
    rememberMe === undefined ? loginForm.rememberMe : Boolean(rememberMe);
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
    .title {
      margin: 0 auto 30px auto;
    }
  }
}
</style>
<style lang="scss">
.login-form {
  .el-form-item__label {
    line-height: 40px;
  }
  .el-input {
    height: 40px;
    .el-input__inner {
      height: 40px;
    }
    input {
      height: 40px;
    }
  }
}
</style>
