<template>
  <section class="mine-page">
    <mine-info></mine-info>
    <nav class="mui-bar mui-bar-tab ">
      <a class="mui-tab-item" href="#">
        <span><i>0.00</i>元</span>
        我的余额
      </a>
      <a class="mui-tab-item" href="#">
        <span><i>0</i>个</span>
        我的优惠
      </a>
      <a class="mui-tab-item" href="#">
        <span><i>0</i>个</span>
        我的积分
      </a>
    </nav>
    <ul class="mui-table-view mui-table-view-chevron mine-list">
      <li class="mui-table-view-cell">
        <router-link class="mui-navigate-right" to="/memberCenter">
          <i class="iconfont iconhuiyuan1" style="color: #ff5729;"></i>
          会员中心
        </router-link>
      </li>
      <li class="mui-table-view-cell">
        <router-link class="mui-navigate-right" to="/recharge">
          <i class="iconfont iconjinbi" style="color: #5c8dff;"></i>
          金币充值
        </router-link>
      </li>
      <li class="mui-table-view-cell">
        <a href="#" class="mui-navigate-right">
          <i class="iconfont iconfenxiang" style="color: #8f64ff;"></i>
          推荐好友领会员
        </a>
      </li>
    </ul>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        <a href="#" class="mui-navigate-right">
          <i class="iconfont icondianhua2" style="color: #40e37e;"></i>
          在线客服
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
  import mineInfo from "../../components/mineInfo/mineInfo"
  export default {
      components: {
          mineInfo
      }
  }
</script>

<style scoped>
  .mine-page{
    height: 100%;
    background: #f6f6f6;
  }
  .mine-info{
    padding: 48px 20px;
    background: -webkit-linear-gradient(left,#e60817,#ff801a);
  }
  .mui-table-view{
    margin: 10px 0 0 0;
  }
  .mui-table-view .mui-media-object{
    height: 55px;
    max-width: 55px;
    border-radius: 50%;
  }
  .mui-table-view .mui-media-body{
    color: #ffffff;
    font-size: 24px;
  }
  .mui-ellipsis{
    color: #ffffff;
    margin: 10px 0 0 0;
  }
  .mui-bar{
    position: static;
    box-shadow: 0 0 1px #cccccc;
    font-size: 14px;
    padding: 7px 0;
    background-color: #ffffff;
  }
  .mui-table-view-cell{
    padding: 1.4rem 0 1.4rem 3%;
  }
  .mui-table-view:before{
    background: transparent;
  }
  .mui-table-view:after{
    background: transparent;
  }
  .mui-table-view-cell:after{
    background: #eeeeee;
  }
  .mui-table-view-chevron .mui-table-view-cell>a{
    margin-right: 0;
  }
  .mui-tab-item{
    position: relative;
  }
  .mui-tab-item:before{
    content: '';
    position: absolute;
    top: 10px;
    right: 0;
    width: 1px;
    height: 30px;
    background-color: #cccccc;
  }
  .mui-bar span{
    display: block;
  }
  .mui-bar span i{
    font-size: 20px;
    color: orange;
  }
  .iconfont{
    font-size: 26px;
    color: orange;
    vertical-align: middle;
    margin: 0 5px 0 0;
  }
</style>
