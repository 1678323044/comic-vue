<template>
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="comicItem in comicList">
      <router-link :to="url+comicItem.id">
        <div class="pic">
          <span class="rank">NO.1</span>
          <img alt="" class="mui-media-object mui-pull-left" :src="comicItem.coverImagePath">
          <span class="score"><i class="iconfont iconshoucangxingxing-xianxing"></i>{{comicItem.avgscore}}</span>
        </div>
        <div class="mui-media-body">
          <div class="top-text">
            {{comicItem.name}}
            <p>作者：{{comicItem.author}}</p>
            <p>{{comicItem.introduction}}</p>
          </div>
          <div class="btm-text">
            <p><span v-for="(tag,index) in (comicItem.tags || '').split('$')" :key="index">{{tag}}</span></p>
            <p>{{comicItem.lastUpdateTime}}</p>
          </div>
        </div>
      </router-link>
    </li>
    <li class="mui-table-view-cell mui-media" v-for="item in popularityList">
      <router-link :to="url+item.id">
        <div class="pic">
          <span class="rank">NO.1</span>
          <img alt="" class="mui-media-object mui-pull-left" :src="item.coverImagePath">
          <span class="score"><i class="iconfont iconshoucangxingxing-xianxing"></i>{{item.avgscore}}</span>
        </div>
        <div class="mui-media-body">
          <div class="top-text">
            {{item.name}}
            <p>作者：{{item.author}}</p>
            <p>{{item.introduction}}</p>
          </div>
          <div class="btm-text">
            <p><span v-for="(tag,index) in (item.tags || '').split('$')" :key="index">{{tag}}</span></p>
            <p>{{item.lastUpdateTime}}</p>
          </div>
        </div>
      </router-link>
    </li>
    <li class="mui-table-view-cell mui-media" v-for="item in newList">
      <router-link :to="url+item.id">
        <div class="pic">
          <span class="rank">NO.1</span>
          <img alt="" class="mui-media-object mui-pull-left" :src="item.coverImagePath">
          <span class="score"><i class="iconfont iconshoucangxingxing-xianxing"></i>{{item.avgscore}}</span>
        </div>
        <div class="mui-media-body">
          <div class="top-text">
            {{item.name}}
            <p>作者：{{item.author}}</p>
            <p>{{item.introduction}}</p>
          </div>
          <div class="btm-text">
            <p><span v-for="(tag,index) in (item.tags || '').split('$')" :key="index">{{tag}}</span></p>
            <p>{{item.lastUpdateTime}}</p>
          </div>
        </div>
      </router-link>
    </li>
    <li class="mui-table-view-cell mui-media" v-for="item in weeklyRanking">
      <router-link :to="url+item.id">
        <div class="pic">
          <span class="rank">NO.1</span>
          <img alt="" class="mui-media-object mui-pull-left" :src="item.coverImagePath">
          <span class="score"><i class="iconfont iconshoucangxingxing-xianxing"></i>{{item.avgscore}}</span>
        </div>
        <div class="mui-media-body">
          <div class="top-text">
            {{item.name}}
            <p>作者：{{item.author}}</p>
            <p>{{item.introduction}}</p>
          </div>
          <div class="btm-text">
            <p><span v-for="(tag,index) in (item.tags || '').split('$')">{{tag}}</span></p>
            <p>{{item.lastUpdateTime}}</p>
          </div>
        </div>
      </router-link>
    </li>
    <li class="mui-table-view-cell mui-media" v-for="item in monthlyRanking">
      <router-link :to="url+item.id">
        <div class="pic">
          <span class="rank">NO.1</span>
          <img alt="" class="mui-media-object mui-pull-left" :src="item.coverImagePath">
          <span class="score"><i class="iconfont iconshoucangxingxing-xianxing"></i>{{item.avgscore}}</span>
        </div>
        <div class="mui-media-body">
          <div class="top-text">
            {{item.name}}
            <p>作者：{{item.author}}</p>
            <p>{{item.introduction}}</p>
          </div>
          <div class="btm-text">
            <p><span v-for="(tag,index) in (item.tags || '').split('$')" :key="index">{{tag}}</span></p>
            <p>{{item.lastUpdateTime}}</p>
          </div>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
      props: ['comicList','popularityList','newList','weeklyRanking','monthlyRanking'],
      data(){
          return{
              url: '/chapterList?bookId=',
          }
      }
  }
</script>

<style scoped>
  .mui-table-view{
    padding: 4% 3% 0;
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
    font-size: 1.6rem;
    width: 67%;
  }
  .mui-media-body .top-text{
    height: 70%;
  }
  .mui-media-body .top-text p{
    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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
    margin: 0 2% 0 0;
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
  .mui-table-view:after{
    background: transparent;
  }
</style>
