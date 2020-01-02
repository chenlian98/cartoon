<template>
  <div class="home">
    <!--搜索-->
    <div class="search">
      <input type="text" />
      <van-icon name="search" size=".3rem" />
      <div class="star">
        <van-icon name="star-o" />
      </div>
    </div>
    <!--轮播图-->
    <van-swipe :autoplay="5000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" style="width: 100%; height: 100%" />
      </van-swipe-item>
    </van-swipe>
    <!--menu:菜单-->
    <div class="menu">
      <router-link to="" class="common">
        <img src="../assets/images/home/main/small-graph.png" />
        <p>有声漫画</p>
      </router-link>
      <router-link to="" class="small-graph common">
        <img src="../assets/images/home/main/small-graph2.png" />
        <p>漫课堂</p>
      </router-link>
    </div>
    <!--Boutique-comic:精品漫画-->
    <div class="Boutique-comic">
      <div class="title">
        <div style="margin-left: .3rem;">
          <img src="../assets/images/icons/television.svg" class="television" />
          <h3 style="display: inline">精品漫画</h3>
        </div>
        <router-link to="" style="margin-right: .3rem">更多</router-link>
      </div>
      <div class="wrap-box">
        <div class="box">
          <img src="../assets/images/home/main/item.png" alt="" />
          <h3>小目标游戏</h3>
          <p class="ellipsis">人生富豪游戏</p>
        </div>
        <div class="box">
          <img src="../assets/images/home/main/item2.png" alt="" />
          <h3>跑得了和尚跑不了庙</h3>
          <p class="ellipsis">暴力少女与禁欲和尚</p>
        </div>
        <div class="box">
          <img src="../assets/images/home/main/item3.png" alt="" />
          <h3>期客客栈</h3>
          <p class="ellipsis">流量女星误认为自己穿越</p>
        </div>
        <div class="box">
          <img src="../assets/images/home/main/item4.png" alt="" />
          <h3>前任战争</h3>
          <p class="ellipsis">游戏cp线下面基？原来我的</p>
        </div>
      </div>
      <div class="change">
        <img src="../assets/images/icons/change.svg" alt="" />
        <button>换一换</button>
      </div>
    </div>
    <!-- popularity:人气 -->
    <div class="popularity">
      <div class="title">
        <router-link to="" class="">
          <img src="../assets/images/home/main/trophy.png" alt="" />
          <span>人气榜</span>
        </router-link>
        <span>更多</span>
      </div>
      <div class="list-item">
        <img src="../assets/images/home/main/one.png" class="ranking" />
        <img
          src="../assets/images/home/main/popularity.png"
          class="ranking-list"
        />
        <div>
          <p class="maid">【少女们的追爱日记】</p>
          <p class="small-doudou">小豆豆</p>
          <div class="give-a-like">
            <van-icon name="like-o" />
            <span>4532</span>
          </div>
        </div>
      </div>
      <div class="list-item">
        <img src="../assets/images/home/main/two.png" class="ranking" />
        <img
          src="../assets/images/home/main/popularity2.png"
          class="ranking-list"
        />
        <div>
          <p class="maid">【天与空，我与你】</p>
          <p class="small-doudou">落落</p>
          <div class="give-a-like">
            <van-icon name="like-o" />
            <span>4523</span>
          </div>
        </div>
      </div>
      <div class="list-item">
        <img src="../assets/images/home/main/three.png" class="ranking" />
        <img
          src="../assets/images/home/main/popularity3.png"
          class="ranking-list"
        />
        <div>
          <p class="maid">【魔鬼小姐如是说】</p>
          <p class="small-doudou">落落</p>
          <div class="give-a-like">
            <van-icon name="like-o" />
            <span>4532</span>
          </div>
        </div>
      </div>
    </div>
    <!--freehand:手绘-->
    <div class="freehand">
      <div class="title">
        <router-link to="" class="">
          <img src="../assets/images/home/main/trophy.png" alt="" />
          <span>人气榜</span>
        </router-link>
        <span>更多</span>
      </div>
      <div class="wrap-box">
        <router-link to="">
          <img src="../assets/images/home/main/one.png" alt="" class="one" />
          <img src="../assets/images/home/main/freehand.png" class="video" />
        </router-link>
        <div class="author">
          <div class="box">
            <img src="../assets/images/home/main/small-graph.png" alt="" />
            <span>作者</span>
          </div>
          <div class="box2">
            <img
              src="../assets/images/home/main/comment-on.png"
              alt=""
              class="comment-on"
            />
            <img
              src="../assets/images/home/main/give-a-like.png"
              alt=""
              class="give-a-like"
            />
            <img
              src="../assets/images/home/main/share.png"
              alt=""
              class="share"
            />
          </div>
        </div>
      </div>
      <div class="wrap-box">
        <router-link to="">
          <img src="../assets/images/home/main/two.png" alt="" class="one" />
          <img src="../assets/images/home/main/freehand2.png" class="video" />
        </router-link>
        <div class="author">
          <div class="box">
            <img src="../assets/images/home/main/small-graph2.png" alt="" />
            <span>作者</span>
          </div>
          <div class="box2">
            <img
              src="../assets/images/home/main/comment-on.png"
              alt=""
              class="comment-on"
            />
            <img
              src="../assets/images/home/main/give-a-like.png"
              alt=""
              class="give-a-like"
            />
            <img
              src="../assets/images/home/main/share.png"
              alt=""
              class="share"
            />
          </div>
        </div>
      </div>
      <div class="wrap-box">
        <router-link to="">
          <img src="../assets/images/home/main/three.png" alt="" class="one" />
          <img src="../assets/images/home/main/carousel2.png" class="video" />
        </router-link>
        <div class="author">
          <div class="box">
            <img src="../assets/images/home/main/small-graph.png" alt="" />
            <span>作者</span>
          </div>
          <div class="box2">
            <img
              src="../assets/images/home/main/comment-on.png"
              alt=""
              class="comment-on"
            />
            <img
              src="../assets/images/home/main/give-a-like.png"
              alt=""
              class="give-a-like"
            />
            <img
              src="../assets/images/home/main/share.png"
              alt=""
              class="share"
            />
          </div>
        </div>
      </div>
    </div>
    <!--底部选项卡-->
    <tab-bar />
  </div>
</template>

<script>
import tabBar from "../components/tabBar";
export default {
  components: { tabBar },
  data() {
    return {
      images: [
        require("../assets/images/home/main/carousel.png"),
        require("../assets/images/home/main/carousel2.png")
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/home";
</style>
