<template>
  <main>
    <div class="con" v-for="recommend in recommends">
      <h5>{{recommend.name}}
        <span @click="changeContents(recommend.id)">
            <i v-show="recommend.changeState ? 1 : false" class="mui-icon mui-icon-loop"></i>
            {{recommend.changeState | filterReplace}}
          </span>
      </h5>
      <div class="con-list">
        <dl v-for="dataItem in changeRecommends.datalist || recommend.datalist">
          <router-link :to="url+dataItem.id">
            <dt>
              <img :src="dataItem.coverImagePath" width="100%" alt="">
              <span><i class="iconfont iconshoucangxingxing-xianxing"></i>{{dataItem.avgscore}}</span>
            </dt>
            <dd>
              <h6>{{dataItem.name}}</h6>
              <p>{{dataItem.author}}</p>
            </dd>
          </router-link>
        </dl>
      </div>
      <router-link to="/classify"><button class="btn">查看更多 >></button></router-link>
    </div>
  </main>
</template>

<script>
  export default {
      props: ['recommends','changeRecommends'],
      data(){
          return{
              url: '/chapterList?bookId='
          }
      },
  }
</script>

<style scoped>
  main{
    padding: 0 10px;
  }
  .con{
    overflow: hidden;
    margin: 0 0 10px 0;
  }
  .con h5{
    position: relative;
    padding: 0 0 0 10px;
    font-size: 2.0rem;
    font-weight: 600;
    color: #333333;
    line-height: 40px;
  }
  .con h5:before{
    content: '';
    width: 6px;
    height: 18px;
    background: #FC5F45;
    position: absolute;
    border-radius: 10px;
    left: 0;
    top: 10px;
  }
  .con h5 span{
    font-size: 1.4rem;
    float: right;
    color: #999999;
  }
  .con h5 span i{
    margin: 0 2px 0 0;
    font-size: 2.2rem;
    color: #666666;
    font-weight: bold;
  }
  .con .con-list{
    display: flex;
    flex-wrap: wrap;
  }
  .con .con-list dl{
    width: 31.66%;
    margin: 0 2.5% 0.5% 0;
    box-sizing: border-box;
  }
  .con .con-list dl:nth-child(3n){
    margin-right: 0;
  }
  .con .con-list dl dt{
    border-radius: 8px;
    overflow: hidden;
    position: relative;
  }
  .con .con-list dl dt img{
    display: block;
  }
  .con .con-list dl dt span{
    position: absolute;
    top: 0;
    right: 0;
    color: #ffffff;
    font-size: 1.3rem;
    padding: 1% 7%;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    background: #333333;
    opacity: 0.60;
  }
  .con .con-list dl dt span i{
    font-size: 1rem;
    margin: 0 4% 0 0;
  }
  .con .con-list dd h6{
    margin: 6% 0 2% 0;
    font-size: 1.5rem;
    color: #333333;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .con .con-list dd p{
    font-size: 1.4rem;
    color: #666666;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .con .btn{
    width: 100%;
    background: #f1f1f1;
    border-radius: 40px;
    border: none;
    padding: 3% 0;
    color: #999999;
    font-size: 1.6rem;
  }
</style>
