<template>
  <section class="head-Padding">
    <head-title title="VIP专区">
      <span @click="returnFunc" slot="return"><i class="mui-icon mui-icon-back"></i></span>
    </head-title>
    <section class="bg-img"></section>
    <section class="main">
      <mine-info></mine-info>
      <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item" href="#Popover_0">VIP畅销</a>
        <a class="mui-tab-item" href="#Popover_1">VIP连载</a>
        <a class="mui-tab-item" href="#Popover_2">VIP完结</a>
        <a class="mui-tab-item" href="#Popover_2">全部</a>
      </nav>
      <div class="swiper-scrollbar"></div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <vip-comic-list :sellWellComics="sellWellComics"></vip-comic-list>
          </div>
          <div class="swiper-slide">
            <vip-comic-list :serialComics="serialComics"></vip-comic-list>
          </div>
          <div class="swiper-slide">
            <vip-comic-list :memberEndComics="memberEndComics"></vip-comic-list>
          </div>
          <div class="swiper-slide">
            <vip-comic-list :memberComics="memberComics"></vip-comic-list>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import mineInfo from '../../components/mineInfo/mineInfo'
  import vipComicList from '../../components/vipComicList/vipComicList'
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
      components: {
          headTitle,
          mineInfo,
          vipComicList
      },
      mounted() {
          new Swiper('.swiper-container',{
              //滚动条
              scrollbar: {
                  el: '.swiper-scrollbar',
              }
          });
          this.$store.dispatch('getSellWellComics');
          this.$store.dispatch('getSerialComics');
          this.$store.dispatch('getMemberEndComics');
          this.$store.dispatch('getMemberComics')
      },
      methods: {
          returnFunc(){
              this.$router.go(-1)
          }
      },
      computed: {
        ...mapState(['sellWellComics']),
        ...mapState(['serialComics']),
        ...mapState(['memberEndComics']),
        ...mapState(['memberComics'])
      }
  }
</script>

<style scoped>
  .mine-info{
    display: flex;
    padding: 16px 20px;
    border-radius: 6px;
  }
  .swiper-container{
    padding: 6px 0 0 0;
  }
  .mui-bar-tab{
    box-shadow: 0 0 0 transparent;
    font-size: 14px;
    position: static;
    top: 40px;
    background: transparent;
  }
  .mui-bar-tab .mui-tab-item{
    color: #ffffff;
  }
  .bg-img{
    background: url("./image/bg0000.png") no-repeat;
    background-size: 100%;
    height: 152px;
  }
  .main{
    padding: 0 16px;
    background: #333333;
  }
  .main .mine-info{
    background: #ffffff;
    margin: 0 0 30px 0;
  }
</style>
