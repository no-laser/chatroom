<template>
  <div class="layoutbox">
    <div class="left">
      <div class="avatorbox">
        <div class="avator">
          <el-avatar :size="50" icon="UserFilled" src="">user</el-avatar>
        </div>
      </div>
      <div class="navbox">
        <router-link to="/usermessage" class="routerlink" exact active-class="active">
          <el-icon size="30"><Message /></el-icon>
        </router-link>
        <router-link to="/userlist" class="routerlink" exact active-class="active">
          <el-icon size="30"><User /></el-icon>
        </router-link>

      </div>
    </div>
    <div class="right">
      <!-- <SearchBox></SearchBox> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.layoutbox {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  .left {
    width: 80px;
    height: 100%;
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    .avatorbox {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
    }
    .navbox{
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      color: #fff;
      margin-top: 10px;
      .routerlink{
        color: rgba(255, 255, 255, 0.5);
        text-decoration: none;
        outline: none;
        width: 100%;
        height: 80px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease-in-out;
      }
      .routerlink:hover{
        background: rgba(0,0,0,0.5);
        color: #fff;
      }
      .active {
        background: rgba(0,0,0,0.5);
        color: #fff;
      }
    }
  }
  .right {
    height: 100%;
    border-right: 1px solid rgba(0,0,0,0.5);
    flex: 1;
  }
}
</style>
