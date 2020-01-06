<template>
  <div class="setting">
    <header>
      <router-link :to="{ name: 'home' }">
        <van-icon name="arrow" />
      </router-link>
      <span>设置</span>
    </header>
  </div>
</template>

<script>
export default {
  name: "setting"
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
    flex-grow: 1;
    text-align: center;
  }
}
</style>
