<template>
  <div class="my">
    <div class="overspread">
      <div class="user">
        <span></span>
        <ul class="message">
          <img src="../assets/images/my/user/head-portrait.png" alt="" />
          <li>
            <h3>一团小金金</h3>
            <p>已认证</p>
            <p>汤圆圆漫画人气画家</p>
          </li>
        </ul>
        <div class="fans">
          <router-link to="">
            <li>5654</li>
            <li>粉丝</li>
          </router-link>
          <router-link to="">
            <li>30</li>
            <li>发帖</li>
          </router-link>
          <router-link to="">
            <li>6021</li>
            <li>获奖</li>
          </router-link>
        </div>
      </div>
    </div>
    <div class="bj"></div>
    <router-link :to="{ name: 'about' }">
      <div class="list">
        <li>
          <img src="../assets/images/my/user/release.png" alt="" />
          <span class="text">我的发布</span>
        </li>
        <van-icon name="arrow" class="arrow" />
      </div>
    </router-link>
    <router-link :to="{ name: 'message' }">
      <div class="list">
        <li>
          <img src="../assets/images/my/user/voice.png" alt="" />
          <span class="text">我的消息</span>
        </li>
        <van-icon name="arrow" class="arrow" />
      </div>
    </router-link>
    <router-link :to="{ name: 'setting' }">
      <div class="list">
        <li>
          <img src="../assets/images/my/user/setting.png" alt="" />
          <span class="text">我的设置</span>
        </li>
        <van-icon name="arrow" class="arrow" />
      </div>
    </router-link>
    <router-link :to="{ name: 'release' }">
      <div class="list">
        <li>
          <img src="../assets/images/my/user/about.png" alt="" />
          <span class="text">关于我们</span>
        </li>
        <van-icon name="arrow" class="arrow" />
      </div>
    </router-link>
    <tab-bar />
  </div>
</template>

<script>
import tabBar from "../components/tabBar";
export default {
  components: { tabBar },
  name: "My"
};
</script>

<style scoped lang="scss">
.my {
  .bj {
    height: 3rem;
    visibility: hidden;
  }

  .overspread {
    height: 2.48rem;
    background: #8cc3ee;
    position: relative;
    .user {
      width: 6.87rem;
      height: 3.53rem;
      background: url("../assets/images/my/user/background.png") no-repeat
        center/cover;
      position: absolute;
      top: 1rem;
      left: 50%;
      transform: translateX(-50%);
      span {
        display: block;
        width: 0.88rem;
        height: 0.62rem;
        background: url("../assets/images/my/user/smile.png") no-repeat
          center/cover;
        position: absolute;
        z-index: 1;
        top: -0.3rem;
        left: 0.18rem;
      }
      .message {
        display: flex;
        align-items: center;
        margin: 0.72rem 0 0.43rem 0.53rem;
        img {
          width: 1.18rem;
          margin-right: 0.25rem;
        }
        li {
          line-height: 0.4rem;
          h3 {
            font-size: 0.26rem;
          }
          p {
            font-size: 0.22rem;
          }
        }
      }
      .fans {
        height: 1.09rem;
        border-top: 0.01rem dashed #999999;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
          width: 33.6%;
          text-align: center;
          & > li:nth-child(1) {
            font-size: 0.217rem;
            font-weight: bold;
            padding-bottom: 0.08rem;
          }
          & > li:nth-child(2) {
            font-size: 0.2rem;
            font-weight: 300;
          }
        }
      }
    }
  }
  .list {
    height: 1rem;
    border-bottom: 0.01rem solid #999999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 0.4rem;
      vertical-align: text-bottom;
      margin-right: 0.15rem;
    }
    li {
      margin-left: 0.27rem;
    }
    .van-icon-arrow {
      margin-right: 0.33rem;
    }
  }
}
</style>
