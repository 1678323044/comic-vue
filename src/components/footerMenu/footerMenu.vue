<template>
  <mt-tabbar>
    <mt-tab-item id="tab1" v-bind:class="{'is-selected': '/home' === $route.path}" v-on:click.native="goto('/home')">
      <i class="iconfont iconshouye"></i>
      首页
    </mt-tab-item>
    <mt-tab-item id="tab2" v-bind:class="{'is-selected': '/ranking' === $route.path}" v-on:click.native="goto('/ranking')">
      <i class="iconfont iconjindusvg"></i>
      排行
    </mt-tab-item>
    <mt-tab-item id="tab3" v-bind:class="{'is-selected': '/classify' === $route.path}" v-on:click.native="goto('/classify')">
      <i class="iconfont iconfenlei"></i>
      分类
    </mt-tab-item>
    <mt-tab-item id="tab4" v-bind:class="{'is-selected': '/bookshelf' === $route.path}" v-on:click.native="goto('/bookshelf')">
      <i class="iconfont iconicon_shujianor"></i>
      书架
    </mt-tab-item>
    <mt-tab-item id="tab5" v-bind:class="{'is-selected': '/mine' === $route.path}" v-on:click.native="goto('/mine')">
      <i class="iconfont iconwode"></i>
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  export default {
      methods: {
          goto(path){
              this.$router.replace(path)
          }
      }
  }
</script>

<style scoped>
  .iconfont{
    display: block;
    font-size: 19px;
    margin: 0 0 3px 0;
  }
  .mint-tab-item{
    color: #999999;
  }
  .mint-tabbar{
    box-shadow: 6px 0px 3px #aaaaaa;
  }
  .mint-tabbar{
    position: fixed;
    z-index: 99999;
  }
</style>
