<template>
  <section class="public-main">
    <head-title title="书架">
      <router-link to="" slot="return"></router-link>
      <router-link to="" slot="right" @click.native="showEdit(isShow)"><i class="iconfont iconbianji"></i></router-link>
    </head-title>
    <neck-tab :bookshelfTab="bookshelfTab"></neck-tab>
    <div class="swiper-scrollbar"></div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <my-books></my-books>
        </div>
        <div class="swiper-slide">
          <my-books :collections="collections" :isShow="isShow" :collectionsId="collectionsId"></my-books>
        </div>
        <div class="swiper-slide">
          <my-books :readHistories="readHistories" :isShow="isShow" :readHistoriesId="readHistoriesId"></my-books>
        </div>
      </div>
    </div>
    <div class="pop-up-btn buy-btn" v-show="isShow">
      <span @click="handleSelectAll">全选</span>
      <span @click="handleDelete">删除</span>
    </div>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import neckTab from '../../components/neckTab/neckTab'
  import myBooks from '../../components/myBooks/myBooks'
  import {reqCancelCollection,reqDelHistory} from '../../api/index'
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
      data(){
        return{
            bookshelfTab: ['我的购买','兴趣收藏','历史记录'],
            isShow: false,
            collectionsId: [],
            readHistoriesId: [],
            currentPage: 0
        }
      },
      components: {
          headTitle,
          neckTab,
          myBooks
      },
      methods:{
          showEdit(isShow){
            this.isShow = !isShow;
          },
          handleSelectAll(){
              if (this.currentPage === 1){
                  this.collectionsId = [];
                  this.collections.forEach((item) => {
                      this.collectionsId.push(item.bookId)
                  })
              }else if (this.currentPage === 2){
                  this.readHistoriesId = [];
                  this.readHistories.forEach((item) => {
                      this.readHistoriesId.push(item.bookId)
                  })
              }else if (this.currentPage === 0){

              }
          },
          async handleDelete(){
              if (this.currentPage === 1){
                  let param = {"bookId": this.collectionsId.join('$')};
                  let result = await reqCancelCollection(param);
                  if (result.state === 'ok'){
                      alert(result.message)
                  }
              }else if (this.currentPage === 2){
                  let param = {"bookId": this.readHistoriesId.join('$')};
                  let result = await reqCancelCollection(param);
                  if (result.state === 'ok'){
                      alert(result.message)
                  }
              }
          },
      },
      mounted(){
          this.$store.dispatch('getCollect');
          this.$store.dispatch('getReadHistory');
          this.$store.dispatch('getBuyHistory');
          let mySwiper = new Swiper('.swiper-container',{
              //滚动条
              scrollbar: {
                  el: '.swiper-scrollbar',
              }
          })
          mySwiper.on('slideChangeTransitionEnd', () => {
              this.currentPage = mySwiper.activeIndex
              this.isShow = false
          })
      },
      computed: {
          ...mapState(['collections']),
          ...mapState(['readHistories'])
      }
  }
</script>

<style scoped>
  .pop-up-btn{
    position: fixed;
    bottom: 0;
    left: 0;
    background: #333333;
    z-index: 99999;
    line-height: 53px;
    width: 100%;
    display: flex;
    text-align: center;
    color: #ffffff;
    font-size: 16px;
  }
  .pop-up-btn span{
    width: 50%;
    display: block;
    position: relative;
  }
  .pop-up-btn span:nth-child(2){
    color: #FC5F45;
  }
  .pop-up-btn span:nth-child(2):before{
    content: '';
    width: 1px;
    height: 38px;
    background: #aaaaaa;
    position: absolute;
    left: 0;
    top: 8px;
  }
</style>
