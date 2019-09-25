<template>
  <section class="mine-page">
    <mine-info></mine-info>
    <nav class="mui-bar mui-bar-tab ">
      <a class="mui-tab-item" href="#">
        <span>0</span>
        会员到期时间
      </a>
      <a class="mui-tab-item" href="#">
        <span>0</span>
        我的阅读币
      </a>
    </nav>
    <ul class="mui-table-view mui-table-view-chevron mine-list">
      <li class="mui-table-view-cell">
        <router-link class="mui-navigate-right" to="/memberCenter">
          <i class="iconfont iconhuiyuan1" style="color: #ff5729;"></i>
          开通VIP包月
        </router-link>
      </li>
      <li class="mui-table-view-cell">
        <router-link class="mui-navigate-right" to="/recharge">
          <i class="iconfont iconjinbi" style="color: #5c8dff;"></i>
          充值阅读币
        </router-link>
      </li>
      <li class="mui-table-view-cell">
        <router-link class="mui-navigate-right" to="">
          <i class="iconfont iconfenxiang" style="color: #5c8dff;"></i>
          推荐一个好友领10000个阅读币
        </router-link>
      </li>
    </ul>
    <ul class="mui-table-view mui-table-view-chevron mine-list">
      <li class="mui-table-view-cell">
        <a href="#" class="mui-navigate-right">
          <i class="iconfont icondianhua2" style="color: #8f64ff;"></i>
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
    color: #FC5F45;
    font-size: 1.9rem;
  }
  .iconfont{
    font-size: 26px;
    color: orange;
    vertical-align: middle;
    margin: 0 5px 0 0;
  }
</style>
