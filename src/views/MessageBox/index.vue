<template>
  <div class="message-box">
    <div class="title">
      <span>zhangsan</span>
    </div>
    <el-scrollbar style="width: 100%" ref="scrollbarRef" always>
      <div class="message-view">
        <div class="otherMessage" v-for="(item, index) in 10" :key="index">
          <div class="acatar">
            <el-avatar :size="40" icon="UserFilled" src="">user</el-avatar>
          </div>
          <div class="message">
            消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息
          </div>
        </div>
        <div class="myMessage">
          <div class="avatar">
            <el-avatar :size="40" icon="UserFilled" src="">user</el-avatar>
          </div>
          <div class="message">哈哈哈哈</div>
        </div>
      </div>
      <div class="bottombox"></div>
    </el-scrollbar>

    <div class="ipt">
      <el-input
        v-model="userMessage"
        type="textarea"
        :rows="1"
        placeholder="发送消息..."
        resize="none"
      ></el-input>
      <el-button type="primary">
        <span>
          发送&nbsp;
        </span>
        <span><el-icon size="15"><Position /></el-icon></span>
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, nextTick, onMounted } from "vue";
const { proxy } = getCurrentInstance();

const scrollbarRef = ref();
const userMessage = ref("");
const scrollToBottom = () => {
  const bottombox = document.querySelector(".bottombox");
  scrollbarRef.value.scrollTo({
    top: bottombox.offsetTop,
    behavior: "instant",
  });
};
onMounted(() => {
  scrollToBottom();
});
</script>

<style lang="scss" scoped>
.message-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    height: 50px;
    width: 100%;
    // background-color: #000000;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    span {
      height: 100%;
      line-height: 50px;
      margin-left: 30px;
      font-size: 20px;
      font-weight: 300;
    }
  }
  .message-view {
    flex: 1;
    width: 100%;
    padding: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .avatar {
      height: 40px;
      width: 40px;
    }
    .message {
      max-width: 65%;
      height: fit-content;
      min-height: 40px;
      background-color: #eadddd;
      margin: 0 10px;
      padding: 5px 10px;
      font-size: 15px;
      color: #080808;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .otherMessage {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 10px 0;
    }
    .myMessage {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-start;
      align-items: flex-start;
      .message {
        background-color: rgb(75, 126, 244);
      }
    }
  }
  .ipt {
    height: 80px;
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 5px;
    :deep(.el-textarea) {
      height: 100%;
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: none;
      margin-right: 10px;
      .el-textarea__inner {
        box-shadow: none;
        background: none;
        color: #fff;
        font-size: 15px;
        &:focus {
          box-shadow: 0px 0px 10px 1px #ccc;
        }
      }
    }
    ::-webkit-scrollbar {
      display: none;
    }
    .el-button {
      width: 10%;
      font-size: 15px;
      border-radius: 15px;
    }
  }
}
</style>
