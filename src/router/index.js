import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  //community： 社区
  {
    path: "/Community",
    name: "community",
    component: () => import("../views/Community.vue")
  },
  //AudioDiffuse:有声漫
  {
    path: "/AudioDiffuse",
    name: "audioDiffuse",
    component: () => import("../views/AudioDiffuse.vue")
  },
  //my:我的
  {
    path: "/My",
    name: "my",
    component: () => import("../views/My.vue")
  },
  //我的发布
  {
    path: "/child/Release",
    name: "release",
    component: () => import("../views/child/Release.vue")
  },
  //我的消息
  {
    path: "/child/Message",
    name: "message",
    component: () => import("../views/child/Message.vue")
  },
  //设置
  {
    path: "/child/Setting",
    name: "setting",
    component: () => import("../views/child/Setting.vue")
  },
  //关于我们
  {
    path: "/child/About",
    name: "about",
    component: () => import("../views/child/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  linkExactActiveClass: "blue-active"
});

export default router;
