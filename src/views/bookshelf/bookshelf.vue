<template>
  <section class="one-level-page">
    <head-title title="书架">
      <span slot="return"></span>
    </head-title>
    <neck-tab :bookshelfTab="bookshelfTab"></neck-tab>
    <div class="swiper-container">
      <div class="swiper-scrollbar"></div>
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <ul class="mui-table-view">
          </ul>
        </div>
        <div class="swiper-slide">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="collect in collections">
              <a href="javascript:;">
                <img alt="" class="mui-media-object mui-pull-left" :src="collect.coverImagePath">
                <div class="mui-media-body">
                  {{collect.name}}
                  <p class="mui-ellipsis">作者：{{collect.author}}</p>
                  <p class="mui-ellipsis">上次看到：{{collect.provChapterTitle}}</p>
                  <p class="update">更新至：{{collect.lastUpdateChapterTitle}}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="swiper-slide">
          <ul class="mui-table-view">
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import neckTab from '../../components/neckTab/neckTab'
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
      data(){
        return{
            bookshelfTab: ['我的购买','兴趣收藏','历史记录']
        }
      },
      components: {
          headTitle,
          neckTab
      },
      mounted(){
        new Swiper('.swiper-container',{
            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
      },
      created() {
          this.$store.dispatch('getCollect');
          this.$store.dispatch('getReadHistory');
          this.$store.dispatch('getBuyHistory');
      },
      computed: {
          ...mapState(['collections'])
      }
  }
</script>

<style scoped>
  .one-level-page{
    margin-bottom: 50px;
  }
  .swiper-scrollbar{
    height: 2px;
    position: fixed;
    top: 100px;
  }
  .mui-table-view .mui-media-object{
    height: auto;
    max-width: 120px;
  }
  .mui-table-view .mui-media-object.mui-pull-left{
    border-radius: 10px;
  }
  .mui-ellipsis{
    line-height: 34px;
  }
  .update{
    margin-top: 50px;
    color: orange;
  }
</style>
