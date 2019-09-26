<template>
  <section class="public-main">
    <head-title title="书架">
      <router-link to="" slot="return"></router-link>
      <router-link to="" slot="right" @click.native="showEdit(isShow)"><i class="iconfont iconbianji"></i></router-link>
    </head-title>
    <neck-tab :rankSorts="rankSorts" @num="parentFn" :currentPage="currentPage"></neck-tab>
    <div class="swiper-scrollbar"></div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <my-books></my-books>
        </div>
        <div class="swiper-slide">
          <my-books :collections="collections" :isShow="isShow" :collectionsId="collectionsId" @emitCollectionsId="reqCollectionsId"></my-books>
        </div>
        <div class="swiper-slide">
          <my-books :readHistories="readHistories" :isShow="isShow" :readHistoriesId="readHistoriesId" @emitReadHistoriesId="reqReadHistoriesId"></my-books>
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
  import {Toast} from 'mint-ui'
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
      data(){
        return{
            rankSorts: [
                {"name": '我的购买'},
                {"name": "兴趣收藏"},
                {"name": '历史记录'}
            ],
            isShow: false,
            collectionsId: [],
            readHistoriesId: [],
            currentPage: 0,
            mySwiper: new function () {}
        }
      },
      components: {
          headTitle,
          neckTab,
          myBooks
      },
      inject: ['reload'],
      methods:{
          refresh () {
              this.reload() // 操作完成后，刷新当前页面
          },
          showEdit(isShow){
            this.isShow = !isShow;
          },
          // 处理全选功能
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
          // 处理单次选择功能
          reqCollectionsId(indexes){
              this.collectionsId = indexes
          },
          reqReadHistoriesId(indexes){
            this.readHistoriesId = indexes
          },
          //处理删除功能
          async handleDelete(){
              //当前页0 我的购买
              if (this.currentPage === 0){
                  let param = {"bookId": this.collectionsId.join('$')};
                  let result = await reqCancelCollection(param);
                  if (result.state === 'ok'){
                      Toast({
                          message: '操作'+result.message,
                      });
                      this.refresh()
                  }
              }
              //当前页1 兴趣收藏
              if (this.currentPage === 1){
                  let param = {"bookId": this.collectionsId.join('$')};
                  let result = await reqCancelCollection(param);
                  if (result.state === 'ok'){
                      Toast({
                          message: '操作'+result.message,
                      });
                      this.refresh()
                  }
              }
              //当前页2 历史记录
              if (this.currentPage === 2){
                  let param = {"bookIds": this.readHistoriesId.join('$')};
                  let result = await reqDelHistory(param);
                  if (result.state === 'ok'){
                      Toast({
                          message: '操作'+ result.message,
                      });
                      this.refresh()
                  }
              }
          },
          parentFn(index){
              this.currentPage = index
              this.mySwiper.slideTo(index, 200, false); //点击切换到第n页
          }
      },
      mounted(){
          this.$store.dispatch('getCollect');
          this.$store.dispatch('getReadHistory');
          this.$store.dispatch('getBuyHistory');
          this.mySwiper = new Swiper('.swiper-container',{
              //滚动条
              scrollbar: {
                  el: '.swiper-scrollbar',
              },
              touchAngle : 80, //滑动角度
          })
          this.mySwiper.on('slideChangeTransitionEnd', () => {
              this.currentPage = this.mySwiper.activeIndex
              this.isShow = false // 当页面滚动，关闭多选框
          })
      },
      computed: {
          ...mapState(['collections']),
          ...mapState(['readHistories']),
          ...mapState(['buyHistory'])
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
