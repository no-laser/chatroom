<template>
  <div class="searchbox">
    <el-form-item prop="search">
      <el-input placeholder="搜索" v-model="search">
        <template #prefix>
          <el-icon size="15"><Search /></el-icon>
        </template>
        <template #suffix>
          <el-icon size="15"><CirclePlus /></el-icon>
        </template>
      </el-input>
    </el-form-item>
  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, nextTick } from "vue";
const { proxy } = getCurrentInstance();

const search = ref("");
</script>

<style lang="scss" scoped>
.searchbox {
  width: 300px;
  height: 60px;
  display: flex;
  justify-content: center;
  .el-form-item {
    margin: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    :deep(.el-input__wrapper) {
      box-shadow: none;
      border: 1px solid #fff;
      border-radius: 10px;
      background: none;
      color: #fff;
      .el-input__inner {
        color: #fff;
      }
    }
    .el-input {
      width: 100%;
    }
  }
}
</style>
