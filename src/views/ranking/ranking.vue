<template>
  <section class="public-main">
    <head-title title="排行">
      <span slot="return"></span>
      <router-link slot="right" to="/search"><i data-v-94cd00f6="" class="iconfont iconsousuo"></i></router-link>
    </head-title>
    <neck-tab :rankSorts="rankSorts"></neck-tab>
    <div class="swiper-scrollbar"></div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <comic-list :popularityList="popularityList"></comic-list>
        </div>
        <div class="swiper-slide">
          <comic-list :newList="newList"></comic-list>
        </div>
        <div class="swiper-slide">
          <comic-list :weeklyRanking="weeklyRanking"></comic-list>
        </div>
        <div class="swiper-slide">
          <comic-list :monthlyRanking="monthlyRanking"></comic-list>
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
          //发送获取排行榜分类请求
          this.$store.dispatch('getRankSort');
          //发送获取排行榜数据请求
          this.$store.dispatch('getPopularityList',{"rankcategoryid": 1});
          this.$store.dispatch('getNewList',{"rankcategoryid": 2});
          this.$store.dispatch('getWeeklyRanking',{"rankcategoryid": 3});
          this.$store.dispatch('getMonthlyRanking',{"rankcategoryid": 4});
          new Swiper('.swiper-container',{
              // 如果需要滚动条
              scrollbar: {
                  el: '.swiper-scrollbar',
              },
              resistanceRatio : 0,
              iOSEdgeSwipeDetection : true,
              touchAngle : 80, //滑动角度
              /*on:{
                  touchMoveOpposite(event){
                      this.is = false
                  },
              },*/
          })
          /*mySwiper.scrollbar.$el.css('height','4px');
          mySwiper.scrollbar.$dragEl.css('background','#ff6600');*/
      },
      computed: {
          ...mapState(['rankSorts']),
          ...mapState(['popularityList']),
          ...mapState(['newList']),
          ...mapState(['weeklyRanking']),
          ...mapState(['monthlyRanking'])
      }
  }
</script>
