<script src="../../store/actions.js"></script>
<template>
  <section class="ending">
    <head-title title="完结佳作">
      <span @click="returnFunc" slot="return"><i class="mui-icon mui-icon-back"></i></span>
    </head-title>
    <neck-tab :endComicsTab="endComicsTab"></neck-tab>
    <section class="ending-list">
      <div class="swiper-container">
        <div class="swiper-scrollbar"></div>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <end-comics :endEasySell="endEasySell"></end-comics>
          </div>
          <div class="swiper-slide">
            <end-comics :endComics="endComics"></end-comics>
          </div>
          <div class="swiper-slide">
            <end-comics :recentEnds="recentEnds"></end-comics>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import endComics from '../../components/endComics/endComics'
  import neckTab from '../../components/neckTab/neckTab'
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  export default {
      data(){
        return{
          endComicsTab: ['完结人气畅销','完结全本','最新完结']
        }
      },
      mounted() {
        this.$store.dispatch('getEndEasySell');
        this.$store.dispatch('getEndComics');
        this.$store.dispatch('getRecentEnd')
        new Swiper('.swiper-container',{
          // 如果需要滚动条
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        })
      },
      components: {
          headTitle,
          endComics,
          neckTab
      },
      methods: {
          returnFunc(){
              this.$router.go(-1)
          }
      },
    computed: {
        ...mapState(['endEasySell']),
        ...mapState(['endComics']),
        ...mapState(['recentEnds'])
    }
  }
</script>

<style scoped>
  .ending{
    padding-top: 102px;
  }
  .ending-list{
    padding: 0 16px;
  }
  .swiper-scrollbar{
    position: fixed;
    top: 100px;
    height: 2px;
  }
</style>
