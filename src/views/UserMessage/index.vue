<template>
  <div class="usermessage">
    <el-scrollbar class="scrollbar">
      <SearchBox></SearchBox>

      <router-link
        class="routerlink itembox"
        to="/usermessage/id"
        v-for="(item, index) in 20"
        :key="index"
      >
        <div class="left">
          <el-avatar :size="45" icon="UserFilled" src="">user</el-avatar>
        </div>
        <div class="right">
          <div class="username">张三</div>
          <div class="msg">
            消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息
          </div>
        </div>
      </router-link>
    </el-scrollbar>
    <div class="messagebox">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import SearchBox from "@/components/searchbox.vue";
</script>

<style lang="scss" scoped>
.usermessage {
  // margin-top: 20px;
  width: 100%;
  // height: calc(100% - 80px);
  height: 100%;
  overflow: auto;
  display: flex;
  .scrollbar {
    width: 300px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);

    .itembox {
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: rgba(255, 255, 255, 0.5);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      cursor: default;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
      }
      .left {
        height: 100%;
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 10px;
      }
      .right {
        height: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        overflow: hidden;
        .username {
          width: 90%;
          font-size: 20px;
          font-weight: 400;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .msg {
          width: 90%;
          font-size: 14px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
  .messagebox {
    flex: 1;
    height: 100%;
  }
}
</style>
