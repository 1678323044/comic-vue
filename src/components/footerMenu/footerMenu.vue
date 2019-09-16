<template>
  <mt-tabbar>
    <mt-tab-item id="tab1" v-bind:class="{'is-selected': '/home' === $route.path}" v-on:click.native="goto('/home')">
      <i v-if="'/home' === $route.path" class="iconfont iconiconfontzhizuobiaozhun023101"></i>
      <i v-else class="iconfont iconshouye"></i>
      首页
    </mt-tab-item>
    <mt-tab-item id="tab2" v-bind:class="{'is-selected': '/ranking' === $route.path}" v-on:click.native="goto('/ranking')">
      <i v-if="'/ranking' === $route.path" class="iconfont icontubiao-paihang"></i>
      <i v-else class="iconfont iconpaihang"></i>
      排行
    </mt-tab-item>
    <mt-tab-item id="tab3" v-bind:class="{'is-selected': '/classify' === $route.path}" v-on:click.native="goto('/classify')">
      <i v-if="'/classify' === $route.path" class="iconfont iconfenlei2"></i>
      <i v-else class="iconfont iconfenlei"></i>
      分类
    </mt-tab-item>
    <mt-tab-item id="tab4" v-bind:class="{'is-selected': '/bookshelf' === $route.path}" v-on:click.native="goto('/bookshelf')">
      <i v-if="'/bookshelf' === $route.path" class="iconfont iconshujia"></i>
      <i v-else class="iconfont iconshujia1"></i>
      书架
    </mt-tab-item>
    <mt-tab-item id="tab5" v-bind:class="{'is-selected': '/mine' === $route.path}" v-on:click.native="goto('/mine')">
      <i v-if="'/mine' === $route.path" class="iconfont icongerenzhongxinwoderenwubiaozhuntoumianxing"></i>
      <i v-else class="iconfont iconjingjirenjinglikehuxianxingcopy"></i>
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
    font-size: 22px;
    margin: 0 0 5px 0;
  }
  .mint-tab-item{
    color: #999999;
  }
  .mint-tabbar{
    position: fixed;
    z-index: 9999;
  }
  .mint-tabbar > .mint-tab-item.is-selected{
    background: transparent;
    color: #FC5F45;
  }
</style>
