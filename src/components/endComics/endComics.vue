<template>
  <ul>
    <li v-for="item in endEasySell">
      <div>
        <span><i class="mui-icon mui-icon-star"></i>{{item.avgscore}}</span>
      </div>
      <div>
        <p>{{item.name}}</p>
      </div>
      <div>
        <span>
          <a>{{item.tags}}</a>
        </span>
        <p>去阅读 ></p>
      </div>
    </li>
    <li v-for="item in endComics">
      <div>
        <span><i class="mui-icon mui-icon-star"></i>{{item.avgscore}}</span>
      </div>
      <div>
        <p>{{item.name}}</p>
      </div>
      <div>
        <span>
          <a>{{item.tags}}</a>
        </span>
        <p>去阅读 ></p>
      </div>
    </li>
    <li v-for="item in recentEnds">
      <div>
        <span><i class="mui-icon mui-icon-star"></i>{{item.avgscore}}</span>
      </div>
      <div>
        <p>{{item.name}}</p>
      </div>
      <div>
        <span>
          <a>{{item.tags}}</a>
        </span>
        <p>去阅读 ></p>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['endEasySell','endComics','recentEnds']
  }
</script>

<style scoped>
  .ending-list .swiper-slide li{
    height: 220px;
    background: url("./image/1.jpg") no-repeat;
    background-size: 100%;
    border-radius: 8px;
    padding: 10px 8px 0 8px;
    margin: 0 0 10px 0;
  }
  .ending-list .swiper-slide li div:nth-child(1){
    text-align: right;
  }
  .ending-list .swiper-slide li div:nth-child(1) span{
    padding: 4px 12px;
    color: #ffffff;
    background: rgba(0,0,0,0.6);
    border-radius: 20px;
    font-size: 14px;
  }
  .ending-list .swiper-slide li div:nth-child(1) span i{
    font-size: 12px;
    vertical-align:text-top;
    margin: 0 3px 0 0;
  }
  .ending-list .swiper-slide li div:nth-child(2){
    margin: 130px 0 0 0;
  }
  .ending-list .swiper-slide li div:nth-child(2) p{
    color: #ffffff;
    font-size: 16px;
  }
  .ending-list .swiper-slide li div:nth-child(3){
    overflow: hidden;
  }
  .ending-list .swiper-slide li div:nth-child(3) span{
    float: left;
  }
  .ending-list .swiper-slide li div:nth-child(3) p{
    float: right;
    color: #ffffff;
    margin-bottom: 0;
  }
  .ending-list .swiper-slide li div:nth-child(3) a{
    padding: 3px 5px;
    background: lightcoral;
    border-radius: 4px;
    margin: 0 4px 0 0;
  }
  .ending-list .swiper-slide li div:nth-child(3) a:nth-child(1){
    background: #FEC2C0;
    color: #910000;
  }
  .ending-list .swiper-slide li div:nth-child(3) a:nth-child(2){
    background: #FEE7C4;
    color: #FB7623;
  }
  .ending-list .swiper-slide li div:nth-child(3) a:nth-child(3){
    background: #C4DFFD;
    color: #3C6CAD;
  }
</style>
