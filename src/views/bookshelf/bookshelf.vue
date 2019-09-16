<template>
  <section class="one-level-page">
    <head-title title="书架">
      <span slot="return"></span>
      <span slot="right" @click="showEdit(isShow)"><i class="iconfont iconbianji"></i></span>
    </head-title>
    <neck-tab :bookshelfTab="bookshelfTab"></neck-tab>
    <div class="swiper-container">
      <div class="swiper-scrollbar"></div>
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <my-books></my-books>
        </div>
        <div class="swiper-slide">
          <my-books :collections="collections" :isShow="isShow" :comicId="comicId"></my-books>
        </div>
        <div class="swiper-slide">
          <my-books :readHistories="readHistories" :isShow="isShow" :comicId="comicId"></my-books>
        </div>
      </div>
    </div>
    <div class="pop-up-btn" v-show="isShow">
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
            comicId: [],
            currentPage: []
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
                  this.comicId = [];
                  this.collections.forEach((item) => {
                      this.comicId.push(item.bookId)
                  })
              }else if(this.currentPage === 2){
                  this.comicId = [];
                  this.readHistories.forEach((item) => {
                      this.comicId.push(item.bookId)
                  })
              }
          },
          async handleDelete(){
              if (this.currentPage === 1){
                  let param = {"bookId": this.comicId.join('$')};
                  let result = await reqCancelCollection(param);
                  if (result.state === 'ok'){
                      alert(result.message)
                  }
              }
              if (this.currentPage === 2){
                  let param = {"bookId": this.comicId.join('$')};
                  let result = await reqDelHistory(param);
                  if (result.state === 'ok'){
                      alert(result.message)
                  }
              }
          }
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
          mySwiper.on('slideChangeTransitionEnd',function () {
          })

      },
      computed: {
          ...mapState(['collections']),
          ...mapState(['readHistories'])
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
