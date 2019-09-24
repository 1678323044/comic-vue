<template>
  <section>
    <div class="search">
      <i class="mui-icon mui-icon-search"></i>
      <input type="text" v-model="comicName" placeholder="搜索漫画名">
      <span @click="returnFunc">取消</span>
    </div>
    <ul class="search-list" v-show="listState">
      <li @click="lookComic(item.id)" v-for="(item,index) in searchList" :key="index">{{item.name}}</li>
    </ul>
    <ul class="mui-table-view" v-show="resultState" @click="goTo('/chapterList?bookId='+searchResult.bookId)">
      <li style="font-size: 1.3rem;margin-bottom: 2%">搜索结果</li>
      <li class="mui-table-view-cell mui-media">
      <div class="pic">
        <span class="rank">NO.1</span>
        <img alt="" class="mui-media-object mui-pull-left" :src="searchResult.coverImagePath">
        <span class="score"><i class="iconfont iconxingxing"></i>{{searchResult.score}}</span>
      </div>
      <div class="mui-media-body">
        <div class="top-text">
          {{searchResult.name}}
          <p>作者：{{searchResult.author}}</p>
          <p>{{searchResult.introduction}}</p>
        </div>
        <div class="btm-text">
          <p><span>{{searchResult.tags}}</span></p>
          <p>{{searchResult.lastUpdateTime}}</p>
        </div>
      </div>

    </li>
    </ul>
  </section>
</template>

<script>
  import comicList from "../../components/comicList/comicList";
  import {mapState} from 'vuex'
  export default {
      data(){
          return{
              comicName: '',
              comicKey: {},
              comicIndex: {},
              resultState: false,
              listState: false
          }
      },
      components: {
          comicList
      },
      methods: {
          returnFunc(){
              this.$router.go(-1)
          },
          lookComic(index){
              this.resultState = true
              this.listState = false
              this.comicIndex = {"bookId": index}
              this.$store.dispatch('getSearchResult',this.comicIndex)
          },
          goTo(path){
              this.$router.replace(path)
          }
      },
      watch: {
          comicName(){
              this.$nextTick(() => {
                  console.log(this.comicName)
                  this.comicKey = {"nameKeyword": this.comicName}
                  this.$store.dispatch('getSearchList',this.comicKey)
                  this.resultState = false
                  this.listState = true
              })
          },
      },
      computed: {
          ...mapState(['searchList']),
          ...mapState(['searchResult'])
      }
  }
</script>

<style scoped>
  .search{
    display: flex;
    padding: 8px;
    position: relative;
  }
  .search input{
    width: 90%;
    border-radius: 40px;
    padding: 0 0 0 34px;
    height: 36px;
    font-size: 14px;
    border: 1px solid transparent;
    background: #f6f6f6;
    margin-bottom: 0;
  }
  .search span{
    width: 10%;
    font-size: 1.6rem;
    margin: 6px 0 0 4px;
  }
  .search i{
    position: absolute;
    top: 12px;
    left: 16px;
    color: #999999;
  }
  .search-list{
    padding: 0 16px;
  }
  .search-list li{
    line-height: 40px;
    font-size: 16px;
    border-bottom: solid 1px #f6f6f6;
  }

  /* 这里的样式 重复使用了 */
  .mui-table-view{
    padding: 2% 3% 0;
  }
  .mui-table-view-cell{
    margin: 0 0 3% 0;
    padding: 0;
  }
  .mui-table-view-cell:after{
    background: transparent;
  }
  .mui-table-view-cell a{
    display: flex;
    margin: 0;
  }
  .mui-table-view .pic{
    position: relative;
    width: 30%;
  }
  .mui-table-view .mui-media-object{
    max-width: 90%;
    height: auto;
    display: block;
    border-radius: 10px;
  }
  .mui-media-body{
    font-size: 18px;
    width: 67%;
  }
  .mui-media-body .top-text{
    height: 70%;
  }
  .mui-media-body .top-text p:nth-child(1){
    margin: 2% 0 0 0;
  }
  .mui-media-body .btm-text{
    height: 30%;
  }
  .mui-media-body .btm-text p{
    height: 50%;
  }
  .mui-media-body .btm-text p:nth-child(1) span{
    padding: 1% 2%;
    background: orange;
    color: #ffffff;
    border-radius: 4px;
    font-size: 12px;
  }
  .mui-media-body .btm-text p:nth-child(2){
    color: #FC5F45;
  }
  .mui-table-view .pic{
    position: relative;
  }
  .mui-table-view .pic .rank{
    width: 35%;
    line-height: 2.6rem;
    background: #DB383C;
    position: absolute;
    left: 0;
    top: 7%;
    border-bottom-right-radius: 40px;
    border-top-right-radius: 40px;
    text-align: center;
    font-size: 1.4rem;
    color: #ffffff;
  }
  .mui-table-view .pic .score{
    position: absolute;
    top: 0;
    right: 10%;
    color: #ffffff;
    font-size: 1.3rem;
    padding: 1% 4%;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    background: #333333;
    opacity: 0.85;
  }
  .mui-table-view .pic .score i{
    font-size: 1rem;
    margin: 0 4% 0 0;
  }

  .mui-table-view:before,.mui-table-view:after{
    background: transparent;
  }
</style>
