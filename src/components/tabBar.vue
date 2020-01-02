<template>
  <div class="box">
    <router-link :to="{ name: 'home' }">
      <img v-if="$route.name === 'home'" :src="icon.homeBlue" />
      <img v-else :src="icon.home" />
      <p>首页</p>
    </router-link>
    <router-link :to="{ name: 'community' }">
      <img v-if="$route.name === 'community'" :src="icon.coffeeBlue" />
      <img v-else :src="icon.coffee" />
      <p>社区</p>
    </router-link>
    <router-link :to="{ name: 'audioDiffuse' }">
      <img v-if="$route.name === 'audioDiffuse'" :src="icon.circleBlue" />
      <img v-else :src="icon.circle" />
      <p>有声漫</p>
    </router-link>
    <router-link :to="{ name: 'my' }">
      <img v-if="$route.name === 'my'" :src="icon.heartBlue" />
      <img v-else :src="icon.heart" />
      <p>我的</p>
    </router-link>
  </div>
</template>

<script>
import home from "../assets/images/icons/home.svg";
import homeBlue from "../assets/images/icons/home-blue.svg";
import coffee from "../assets/images/icons/coffee.svg";
import coffeeBlue from "../assets/images/icons/coffee-blue.svg";
import circle from "../assets/images/icons/circle.svg";
import circleBlue from "../assets/images/icons/circle-blue.svg";
import heart from "../assets/images/icons/heart.svg";
import heartBlue from "../assets/images/icons/heart-blue.svg";
export default {
  name: "tabBar",
  data() {
    return {
      icon: {
        home,
        homeBlue,
        coffee,
        coffeeBlue,
        circle,
        circleBlue,
        heart,
        heartBlue
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.box {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 0.98rem;
  background: #ffffff;
  display: flex;
  a {
    width: 25%;
    text-align: center;
    img {
      width: 0.4rem;
      margin-top: 0.14rem;
    }
    &.blue-active,
    img {
      color: #8db7f0;
      transform: scale(1.2);
      transition: 1.5ms;
    }
  }
}
</style>
