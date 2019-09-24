<template>
  <section class="public-main">
    <head-title title="完结佳作">
      <router-link to="" slot="return" @click.native="returnFunc">
        <i class="mui-icon mui-icon-back"></i>
      </router-link>
    </head-title>
    <section class="ending-list">
      <end-comics :endEasySell="endEasySell"></end-comics>
    </section>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import endComics from '../../components/endComics/endComics'
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
    height: 86%;
    overflow-y: auto;
    padding: 3% 3% 0;
  }
  .swiper-scrollbar{
    position: fixed;
    top: 100px;
    height: 2px;
  }
</style>
