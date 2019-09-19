<template>
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="(collect,index) in collections" :key="index">
      <label>
        <input type="checkbox" v-show="isShow" :value="collect.bookId" v-model="collectId">
        <router-link :to="url+collect.bookId">
          <img alt="" class="mui-media-object mui-pull-left" :src="collect.coverImagePath">
          <div class="mui-media-body">
            {{collect.name}}
            <p>作者：{{collect.author}}</p>
            <p>上次看到：{{collect.provChapterTitle}}</p>
            <p>更新至：{{collect.lastUpdateChapterTitle}}</p>
          </div>
        </router-link>
      </label>
    </li>
    <li class="mui-table-view-cell mui-media" v-for="(readHistory,index) in readHistories" :key="index">
      <label>
        <input type="checkbox" v-show="isShow" :value="readHistory.bookId" v-model="recordId">
        <router-link :to="url+readHistory.bookId">
          <img alt="" class="mui-media-object mui-pull-left" :src="readHistory.coverImagePath">
          <div class="mui-media-body">
            {{readHistory.name}}
            <p>作者：{{readHistory.author}}</p>
            <p>上次看到：{{readHistory.provChapterTitle}}</p>
            <p>更新至：{{readHistory.lastUpdateChapterTitle}}</p>
          </div>
        </router-link>
      </label>
    </li>
  </ul>
</template>

<script>
  export default {
      props: ['collections','readHistories','isShow','collectId','recordId'],
      data(){
          return{
              url: '/chapterList?bookId='
          }
      }
  }
</script>

<style scoped>
  .mui-table-view label{
    display: flex;
  }
  .mui-table-view label input{
    width: 20px;
    height: 20px;
    align-self: center;
    margin: 0 15px 0 0;
  }
  .mui-table-view .mui-media-object{
    height: auto;
    max-width: 120px;
  }
  .mui-table-view .mui-media-object.mui-pull-left{
    border-radius: 10px;
  }
</style>
