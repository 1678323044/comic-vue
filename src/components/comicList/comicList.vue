<template>
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="queryComic in queryComics">
      <a href="javascript:;">
        <div class="pic">
          <span>NO.1</span>
          <img alt="" class="mui-media-object mui-pull-left" :src="queryComic.coverImagePath">
        </div>
        <div class="mui-media-body">
          {{queryComic.name}}
          <p class="mui-ellipsis">{{queryComic.author}}</p>
          <p class="text">{{queryComic.introduction}}</p>
          <p class="tag"><span>{{queryComic.tags}}</span></p>
          <p class="update">{{queryComic.lastUpdateTime}}</p>
        </div>
      </a>
    </li>
    <li class="mui-table-view-cell mui-media" v-for="ranking in rankingList">
      <a href="javascript:;">
        <div class="pic">
          <span>NO.1</span>
          <img alt="" class="mui-media-object mui-pull-left" :src="ranking.coverImagePath">
        </div>
        <div class="mui-media-body">
          {{ranking.name}}
          <p class="mui-ellipsis">{{ranking.author}}</p>
          <p class="text">{{ranking.introduction}}</p>
          <p class="tag"><span>{{ranking.tags}}</span></p>
          <p class="update">{{ranking.lastUpdateTime}}</p>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
      props: ['queryComics','rankingList']
  }
</script>

<style scoped>
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
  .mui-table-view .pic span{
    width: 60px;
    line-height: 36px;
    background: #DB383C;
    position: absolute;
    left: 0;
    top: 10px;
    border-bottom-right-radius: 40px;
    border-top-right-radius: 40px;
    text-align: center;
    font-size: 14px;
    color: #ffffff;
  }
  .mui-table-view .pic .two{
    background: #FD7746;
  }
  .mui-table-view .pic .three{
    background: #6AE867;
  }
  .mui-ellipsis{
    line-height: 34px;
  }
  .update{
    margin-top: 50px;
    color: orange;
  }
</style>
