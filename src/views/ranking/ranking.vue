<template>
  <section class="one-level-page">
    <head-title title="排行">
      <span slot="return"></span>
      <span slot="search"><i class="mui-icon mui-icon-search"></i></span>
    </head-title>
    <neck-tab :rankSorts="rankSorts"></neck-tab>
    <div class="swiper-scrollbar"></div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <comic-list></comic-list>
        </div>
        <div class="swiper-slide">
        </div>
        <div class="swiper-slide">
        </div>
        <div class="swiper-slide">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import neckTab from '../../components/neckTab/neckTab'
  import comicList from '../../components/comicList/comicList'
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
      components: {
          headTitle,
          neckTab,
          comicList
      },
      mounted() {
          this.$store.dispatch('getRankSort')
          new Swiper('.swiper-container',{
              // 如果需要滚动条
              scrollbar: {
                  el: '.swiper-scrollbar',
              },
          })
      },
      computed: {
        ...mapState(['rankSorts'])
      }
  }
</script>

<style scoped>
  .swiper-scrollbar{
    height: 2px;
    position: fixed;
    top: 102px;
  }
</style>
