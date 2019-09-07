<template>
  <section>
    <ul class="mui-table-view mui-table-view-chevron top-mine">
      <li class="mui-table-view-cell mui-media">
        <router-link class="mui-navigate-right" to="/login">
          <img class="mui-media-object mui-pull-left head-img" id="head-img" src="./image/IMG_2475.jpg">
          <div class="mui-media-body">
            <p class="mui-ellipsis">暂未绑定手机号</p>
          </div>
        </router-link>
      </li>
    </ul>
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
    <ul class="mui-table-view mui-table-view-chevron list-menu">
      <li class="mui-table-view-cell">
        <router-link class="mui-navigate-right" to="/recharge">
          <i class="iconfont iconchongzhi2"></i>
          充值中心
        </router-link>
      </li>
      <li class="mui-table-view-cell">
        <a href="#" class="mui-navigate-right">
          <i class="iconfont iconjilu"></i>
          推荐好友领会员
        </a>
      </li>
      <li class="mui-table-view-cell">
        <a href="#" class="mui-navigate-right">
          <i class="iconfont iconqianbi"></i>
          在线客服
        </a>
      </li>
    </ul>
    <button class="btn">切换账号</button>
  </section>
</template>

<script>

</script>

<style scoped>
  .top-mine{
    background: lightcoral;
    padding: 20px 0;
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
    font-size: 12px;
    padding: 7px 0;
    background-color: #ffffff;
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
  .list-menu{
    margin: 10px 0 0 0;
  }
  .iconfont{
    font-size: 22px;
    color: orange;
    vertical-align: middle;
  }
  .list-menu .mui-table-view-cell{
    padding-top: 20px;
    padding-bottom: 15px;
  }
  .btn{
    width: 100%;
    margin: 30px 0 0 0;
    color: red;
    background: pink;
    border: solid 1px red;
  }
</style>
