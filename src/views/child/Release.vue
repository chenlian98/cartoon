<template>
  <!--发布-->
  <div class="release">
    <header>
      <router-link :to="{ name: 'home' }">
        <van-icon name="arrow" />
      </router-link>
      <span>我的发布</span>
      <span>发布</span>
    </header>
  </div>
</template>

<script>
export default {
  name: "release"
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 0.88rem;
  background: url("../../assets/images/my/about/background.png") no-repeat
    center/cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 0.88rem;
  .van-icon {
    margin-left: 0.36rem;
  }
  span {
    font-size: 0.4rem;
    text-align: center;
  }
  span:nth-child(3) {
    color: #5092c6;
    margin-right: 0.28rem;
  }
}
</style>
