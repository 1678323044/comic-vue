<template>
  <section>
    <div class="float-bar top">
      <span class="mui-icon mui-icon-back"></span>
      <h6>第0话 烧火山</h6>
    </div>
    <div class="chapter">
      <ul>
        <li><img src="./image/800.jpg" alt=""></li>
        <li><img src="./image/801.jpg" alt=""></li>
        <li><img src="./image/802.jpg" alt=""></li>
      </ul>
    </div>
    <div class="float-bar bottom">
      <div class="turning-page">
        <ul>
          <li>
            <i class="mui-icon mui-icon-arrowleft"></i>
            上一话
          </li>
          <li>
            <i class="mui-icon mui-icon-arrowup"></i>
            顶部TOP
          </li>
          <li>
            <i class="mui-icon mui-icon-arrowright"></i>
            下一话
          </li>
        </ul>
      </div>
      <mt-tabbar>
        <mt-tab-item id="tab1">
          <i class="iconfont iconshouye"></i>
          目录
        </mt-tab-item>
        <mt-tab-item id="tab2">
          <i class="iconfont iconjindusvg"></i>
          加入书架
        </mt-tab-item>
        <mt-tab-item id="tab3">
          <i class="iconfont iconfenlei"></i>
          亮度
        </mt-tab-item>
        <mt-tab-item id="tab4">
          <i class="iconfont iconicon_shujianor"></i>
          评分
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </section>
</template>

<script>

</script>

<style scoped>
  .iconfont{
    display: block;
    font-size: 19px;
    margin: 0 0 5px 0;
  }
  .mint-tab-item{
    color: #999999;
  }
  .mint-tabbar{
    box-shadow: 6px 0px 3px #aaaaaa;
    position: static;
    background: transparent;
    padding: 5px 0;
    font-size: 14px;

  }
  .mint-tabbar .mint-tab-item{
    color: #ffffff;
  }
  .chapter li img{
    width: 100%;
  }
  .float-bar{
    position: fixed;
    width: 100%;
    background: rgba(40, 40, 40, 0.95);
    color: #ffffff;
  }
  .float-bar.top{
    top: 0;
    line-height: 60px;
    text-align: center;
    font-size: 16px;
  }
  .float-bar.top span{
    float: left;
    line-height: 60px;
    width: 10%;
  }
  .float-bar.top h6{
    float: left;
    width: 90%;
    line-height: 60px;
    text-indent: -37px;
    font-size: 16px;
    margin: 0;
    color: #ffffff;
  }
  .float-bar.bottom{
    bottom: 0;
  }
  .float-bar.bottom .turning-page ul{
    overflow: hidden;
    line-height: 60px;
    font-size: 16px;
  }
  .float-bar.bottom .turning-page li{
    float: left;
    width: 33.33%;
    text-align: center;
  }
  .float-bar.bottom .turning-page li i{
    font-size: 20px;
  }
</style>
