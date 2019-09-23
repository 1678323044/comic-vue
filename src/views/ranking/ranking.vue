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
          <comic-list :comicList="comicList"></comic-list>
        </div>
        <div class="swiper-slide">
          <comic-list :comicList="comicList"></comic-list>
        </div>
        <div class="swiper-slide">
          <comic-list :comicList="comicList"></comic-list>
        </div>
        <div class="swiper-slide">
          <comic-list :comicList="comicList"></comic-list>
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
      data(){
        return{
            currentPage: 0
        }
      },
      components: {
          headTitle,
          neckTab,
          comicList
      },
      mounted() {
          this.$store.dispatch('getRankSort');
          let pageNumber = {"rankcategoryid": 1}
          this.$store.dispatch('getRankingList',pageNumber);
          let mySwiper = new Swiper('.swiper-container',{
              // 如果需要滚动条
              scrollbar: {
                  el: '.swiper-scrollbar',
              },
          });
          mySwiper.on('slideChangeTransitionEnd',() => {
              this.currentPage = mySwiper.activeIndex
              if (this.currentPage === 0){
                  let pageNumber = {"rankcategoryid": 1}
                  this.$store.dispatch('getRankingList',pageNumber);
              }
              if (this.currentPage === 1){
                  let pageNumber = {"rankcategoryid": 2}
                  this.$store.dispatch('getRankingList',pageNumber);
              }if (this.currentPage === 2){
                  let pageNumber = {"rankcategoryid": 3}
                  this.$store.dispatch('getRankingList',pageNumber);
              }if (this.currentPage === 3){
                  let pageNumber = {"rankcategoryid": 4}
                  this.$store.dispatch('getRankingList',pageNumber);
              }
          })
      },
      methods: {

      },
      computed: {
          ...mapState(['rankSorts']),
          ...mapState(['comicList'])
      }
  }
</script>

