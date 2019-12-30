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
    <van-swipe :autoplay="3000000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" style="width: 100%; height: 100%" />
      </van-swipe-item>
    </van-swipe>
    <!--classification:分类-->
    <div class="classification">
      <router-link to="" class="common">
        <img src="../assets/images/home/main/Small-graph.png" />
        <p>有声漫画</p>
      </router-link>
      <router-link to="" class="small-graph common">
        <img src="../assets/images/home/main/Small-graph2.png" />
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
      <div class="wrap-box clearfix">
        <div class="box">
          <img src="../assets/images/home/main/item.png" alt="" />
          <h4>小目标游戏</h4>
          <p>人生富豪游戏</p>
        </div>
        <div class="box">
          <img src="../assets/images/home/main/item.png" alt="" />
          <h4>小目标游戏</h4>
          <p>人生富豪游戏</p>
        </div>
        <div class="box">
          <img src="../assets/images/home/main/item.png" alt="" />
          <h4>小目标游戏</h4>
          <p>人生富豪游戏</p>
        </div>
        <div class="box">
          <img src="../assets/images/home/main/item.png" alt="" />
          <h4>小目标游戏</h4>
          <p>人生富豪游戏</p>
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
        <router-link to="">
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
          <p class="Small-doudou">小豆豆</p>
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
          <p class="Small-doudou">落落</p>
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
          <p class="Small-doudou">落落</p>
          <div class="give-a-like">
            <van-icon name="like-o" />
            <span>4532</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

<style lang="scss">
button {
  border: none;
}
a {
  color: #333333;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
  zoom: 1;
}
.home {
  height: 3.52rem;
  .van-swipe {
    width: 100%;
    height: 100%;
    margin-bottom: 0.3rem;
  }
  .search {
    position: absolute;
    z-index: 1000;
    left: 0.3rem;
    top: 0.21rem;
    display: flex;
    .van-icon-search {
      position: absolute;
      left: 5.4rem;
      top: 0.15rem;
    }
    input {
      width: 5.77rem;
      opacity: 0.5;
      height: 0.58rem;
      border: none;
      border-radius: 0.29rem;
      padding-left: 0.2rem;
    }
    .star {
      width: 0.83rem;
      height: 0.58rem;
      background: #fff;
      opacity: 0.5;
      border-radius: 0.16rem;
      position: absolute;
      left: 6.2rem;
      .van-icon-star-o {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
    }
  }
  .classification {
    margin-left: 1.82rem;
    margin-bottom: 0.64rem;
    display: flex;
    .small-graph {
      margin-left: 1.82rem;
    }
    .common {
      text-align: center;
      p {
        margin-top: 0.1rem;
        color: #333333;
      }
    }
  }
  .Boutique-comic {
    margin-bottom: 0.6rem;
    .title {
      display: flex;
      justify-content: space-between;
    }
    .television {
      width: 0.32rem;
      margin-right: 0.13rem;
    }
    .wrap-box {
      margin-bottom: 0.42rem;
      .box {
        float: left;
        margin: 0.3rem 0.15rem 0.3rem 0.3rem;
        img {
          width: 3.27rem;
          margin-bottom: 0.3rem;
        }
      }
    }

    .change {
      width: 2.5rem;
      margin: 0 auto;
      text-align: center;
      position: relative;
      button {
        width: 2.5rem;
        height: 0.6rem;
        background: #ed4343;
        border-radius: 0.1rem;
        color: #fff;
      }
      img {
        position: absolute;
        top: 40%;
        left: 0.45rem;
        width: 0.2rem;
      }
    }
  }
  .popularity {
    background: #dbdbdb;
    height: 7.72rem;
    .title {
      display: flex;
      justify-content: space-between;
      margin: 0 0.3rem 0.4rem 0;
      padding-top: 0.48rem;
      img {
        width: 0.31rem;
        margin-right: 0.15rem;
      }
    }
    .list-item {
      display: flex;
      margin-bottom: 0.4rem;
      .ranking {
        width: 0.3rem;
        height: 0.3rem;
        margin: 0.65rem 0.3rem 0 0.27rem;
      }
      .ranking-list {
        width: 2.93rem;
        margin-right: 0.3rem;
      }
      .give-a-like {
        text-align: right;
        display: flex;
        justify-content: flex-end;
      }
      .maid {
        margin: 0.21rem 0 0.37rem 0;
      }
      .Small-doudou {
        padding-left: 0.1rem;
      }
      .van-icon-like-o {
        margin-right: 0.06rem;
      }
    }
  }
}
</style>
