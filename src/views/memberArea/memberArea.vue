<template>
  <section class="public-main">
    <head-title title="VIP专区">
      <router-link to="" slot="return" @click.native="returnFunc">
        <i class="mui-icon mui-icon-back"></i>
      </router-link>
    </head-title>
    <section class="main">
      <div class="bg-img"><img src="./image/bg0000.png" width="100%" alt=""></div>
      <div class="con">
        <neck-tab :rankSorts="rankSorts" :color="color" @num="parentFn" :currentPage="currentPage"></neck-tab>
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
      </div>
    </section>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import vipComicList from '../../components/vipComicList/vipComicList'
  import neckTab from "../../components/neckTab/neckTab";
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
      data(){
        return{
            color: '#ffffff',
            rankSorts: [
                {"name": 'VIP畅销'},
                {"name": 'VIP连载'},
                {"name": 'VIP完结'},
                {"name": '全部'}
            ],
            mySwiper: new function () {},
            currentPage: 0
        }
      },
      components: {
          headTitle,
          vipComicList,
          neckTab
      },
      mounted() {
          this.mySwiper = new Swiper('.swiper-container',{
              scrollbar: {
                  el: '.swiper-scrollbar', //滚动条
              }
          });
          this.mySwiper.on('slideChangeTransitionEnd',() => {
              this.currentPage = this.mySwiper.activeIndex
          })

          this.$store.dispatch('getSellWellComics');
          this.$store.dispatch('getSerialComics');
          this.$store.dispatch('getMemberEndComics');
          this.$store.dispatch('getMemberComics')
      },
      methods: {
          returnFunc(){
              this.$router.go(-1)
          },
          parentFn(index){
              this.currentPage = index
              this.mySwiper.slideTo(index, 200, false); //点击切换到第n页
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
  .main{
    height: 91%;
    overflow-y: auto;
    background: #333333;
  }
  .main .con{
    padding: 0 3%;
  }
  .main .mine-info{
    background: #ffffff;
    margin: 0 0 30px 0;
  }
  .mine-info{
    display: flex;
    padding: 16px 20px;
    border-radius: 6px;
  }
  .swiper-container{
    padding: 6px 0 0 0;
  }
  .neck-tab{
    padding: 3% 0;
  }
</style>
