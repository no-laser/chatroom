<template>
  <div class="loginbox">
    <div class="centerbox">
      <div class="title">
        <span>{{ isLogin ? "登录" : "注册" }}</span>
      </div>
      <el-form
        :model="formData"
        :rules="rules"
        ref="formDataRef"
        @submit.prevent
      >
        <!--input输入-->
        <el-form-item prop="username">
          <el-input
            clearable
            placeholder="请输入用户名"
            v-model.trim="formData.username"
          >
            <template #prefix>
              <el-icon><UserFilled /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="email" v-if="!isLogin">
          <el-input
            clearable
            placeholder="请输入邮箱"
            v-model.trim="formData.email"
          >
            <template #prefix>
              <el-icon><Message /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            clearable
            show-password
            placeholder="请输入密码"
            v-model.trim="formData.password"
          >
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="rePassword" v-if="!isLogin">
          <el-input
            clearable
            show-password
            placeholder="请再次输入密码"
            v-model.trim="formData.rePassword"
          >
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <!--按钮-->
        <el-form-item>
          <el-button type="primary" @click="submitForm">{{
            isLogin ? "登录" : "注册"
          }}</el-button>
        </el-form-item>
      </el-form>
      <div class="a-link" @click="handelChangeLogin">
        <span>{{ isLogin ? "没有账号？" : "已有账号？" }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, nextTick } from "vue";
const { proxy } = getCurrentInstance();

const formData = ref({});
const formDataRef = ref();
const rules = {
  username: [{ required: true, message: "请输入用户名" }],
  email: [{ required: true, message: "请输入邮箱" }],
  password: [{ required: true, message: "请输入密码" }],
  rePassword: [{ required: true, message: "请再次输入密码" }],
};

const isLogin = ref(true);
const submitForm = () => {
  formDataRef.value.validate((valid) => {
    if (valid) {
      proxy.$message.success("验证成功");
    } else {
      return false;
    }
  });
};
const handelChangeLogin = () => {
  isLogin.value = !isLogin.value;
  nextTick(() => {
    formDataRef.value.resetFields();
  });
};
</script>

<style lang="scss" scoped>
.loginbox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .centerbox {
    width: 400px;
    max-width: 100%;
    height: fit-content;
    max-height: 80%;
    max-width: 80%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #fff;
    background: rgba(16, 29, 46, 0.5);
    padding: 0 30px;
    .title {
      width: 100%;
      padding: 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      font-weight: 600;
      color: #ffffff;
    }
    .el-form {
      width: 100%;
      :deep(.el-input__wrapper) {
        box-shadow: none;
        border-bottom: 1px solid #fff;
        background: none;
        color: #fff;
      }
      :deep(.el-input__inner) {
        color: #fff;
      }
      .el-button {
        width: 100%;
        margin-top: 15px;
      }
    }
    .a-link {
      width: 100%;
      height: 30px;
      color: #ffffffb6;
      display: flex;
      justify-content: flex-end;
      font-size: 14px;
      span {
        cursor: pointer;
      }
    }
  }
}
</style>
