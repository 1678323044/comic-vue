<template>
  <section>
    <div class="search">
      <i class="mui-icon mui-icon-search"></i>
      <input type="text" v-model="comicName" placeholder="搜索漫画名">
      <span @click="returnFunc">取消</span>
    </div>
    <ul class="search-list" v-show="listState">
      <li @click="lookComic(item.bookId)" v-for="item in searchList">{{item.bookName}}</li>
    </ul>
    <ul class="mui-table-view" v-show="resultState">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <div class="pic">
            <img alt="" class="mui-media-object mui-pull-left" src="../../common/image/210.jpg">
          </div>
          <div class="mui-media-body">
            {{searchResult.name}}
            <p class="mui-ellipsis">作者：{{searchResult.author}}</p>
            <p class="text">{{searchResult.introduction}}</p>
            <p class="update">更新至{{searchResult.lastUpdateChapterTitle}}</p>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
      data(){
          return{
              comicName: '',
              comicKey: {},
              comicIndex: {},
              resultState: false,
              listState: true
          }
      },
      methods: {
          returnFunc(){
              this.$router.go(-1)
          },
          lookComic(index){
              this.comicIndex = {"bookId": index}
              this.$store.dispatch('getSearchResult',this.comicIndex)
          }
      },
      watch: {
          comicName(){
              this.$nextTick(() => {
                  this.comicKey = {"nameKeyword": this.comicName}
                  this.$store.dispatch('getSearchList',this.comicKey)
              })
          },
          searchResult(){
              this.$nextTick(() => {
                  this.resultState = true
                  this.listState= false
              })
          }
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
    width: 80%;
    border-radius: 40px;
    padding: 0 0 0 34px;
    height: 36px;
    font-size: 14px;
    border: 1px solid transparent;
    background: #f6f6f6;
    margin-bottom: 0;
  }
  .search span{
    width: 20%;
    font-size: 16px;
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
  .mui-media-body{
    font-size: 18px;
  }
  .mui-table-view .mui-media-object{
    height: auto;
    max-width: 120px;
  }
  .mui-table-view .mui-media-object.mui-pull-left{
    border-radius: 10px;
  }
  .mui-table-view .pic{
    position: relative;
  }
  .mui-ellipsis{
    line-height: 34px;
  }
  .update{
    margin-top: 50px;
    color: orange;
  }
</style>
