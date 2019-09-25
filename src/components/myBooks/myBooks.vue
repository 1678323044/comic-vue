<template>
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="(collect,index) in collections" :key="index">
      <label>
        <input type="checkbox" v-show="isShow" :value="collect.bookId" v-model="collectId" @change="handleChoice('collect')">
        <router-link :to="url+collect.bookId">
          <div class="pic">
            <img alt="" class="mui-media-object mui-pull-left" :src="collect.coverImagePath">
            <span class="score"><i class="iconfont iconxingxing"></i>{{collect.score}}</span>
          </div>
          <div class="mui-media-body">
            <div class="top">
              {{collect.name}}
              <p>作者：{{collect.author}}</p>
              <p>上次看到：{{collect.provChapterTitle}}</p>
            </div>
            <div class="btm">
              <p>更新至：{{collect.lastUpdateChapterTitle}}</p>
            </div>
          </div>
        </router-link>
      </label>
    </li>
    <li class="mui-table-view-cell mui-media" v-for="(readHistory,index) in readHistories" :key="index" @change="handleChoice('readHistories')">
      <label>
        <input type="checkbox" v-show="isShow" :value="readHistory.bookId" v-model="HistoryId">
        <router-link :to="url+readHistory.bookId">
          <div class="pic">
            <img alt="" class="mui-media-object mui-pull-left" :src="readHistory.coverImagePath">
            <span class="score"><i class="iconfont iconxingxing"></i>{{readHistory.score}}</span>
          </div>
          <div class="mui-media-body">
            <div class="top">
              {{readHistory.name}}
              <p>作者：{{readHistory.author}}</p>
              <p>上次看到：{{readHistory.provChapterTitle}}</p>
            </div>
            <div class="btm">
              <p>更新至：{{readHistory.lastUpdateChapterTitle}}</p>
            </div>
          </div>
        </router-link>
      </label>
    </li>
  </ul>
</template>

<script>
  export default {
      props: ['collections','readHistories','isShow','collectionsId','readHistoriesId'],
      data(){
          return{
              url: '/chapterList?bookId=',
              collectId: [],
              HistoryId: []
          }
      },
      methods: {
          handleChoice(param){
              if (param === 'collect'){
                  this.$emit('emitCollectionsId',this.collectId)
              }
              if (param === 'readHistories'){
                  this.$emit('emitReadHistoriesId',this.HistoryId)
              }
          }
      },
      watch: {
          collectionsId(){
              this.collectId = this.collectionsId
          },
          readHistoriesId(){
              this.HistoryId = this.readHistoriesId
          }
      }
  }
</script>

<style scoped>
  .mui-table-view{
    padding: 4% 3% 0;
  }
  .mui-table-view li.mui-table-view-cell{
    padding: 0;
    margin: 0 0 3% 0;
  }
  .mui-table-view li.mui-table-view-cell a{
    display: flex;
  }
  .mui-table-view li.mui-table-view-cell .pic{
    position: relative;
    width: 30%;
  }
  .mui-table-view li.mui-table-view-cell .pic .score{
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
  .mui-table-view li.mui-table-view-cell .pic .score i{
    font-size: 1rem;
    margin: 0 4% 0 0;
  }
  .mui-table-view li.mui-table-view-cell .mui-media-body{
    color: #333333;
    width: 70%;
  }

  .mui-table-view .mui-media-object.mui-pull-left{
    border-radius: 10px;
    height: auto;
    max-width: 90%;
    margin: 0;
  }


  .mui-table-view label{
    display: flex;
  }
  .mui-table-view label input{
    width: 20px;
    height: 20px;
    align-self: center;
    margin: 0 15px 0 0;
  }


  .mui-table-view:before,
  .mui-table-view-cell:after{
    background: transparent;
  }

  .mui-table-view:after{
    background: transparent;
  }

  .mui-table-view .mui-media-body .top{
    height: 85%;
    font-size: 1.6rem;
  }
  .mui-table-view .mui-media-body .top p{
    margin: 3% 0 0 0;
    font-size: 1.4rem;
  }
  .mui-table-view .mui-media-body .btm{
    height: 15%;
  }
  .mui-table-view .mui-media-body .btm p{
    color: #FC5F45;
    font-size: 1.4rem;
  }
</style>
