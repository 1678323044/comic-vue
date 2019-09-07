<template>
  <section>
    <head-title title="储值"></head-title>
    <div class="pic">
      <img src="./image/1111.jpg" width="100%" alt="">
    </div>
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item" href="#">
        <span>20</span>
        书币
      </a>
      <a class="mui-tab-item" href="#">
        <span><i>0</i>个</span>
        剩余数量
      </a>
      <a class="mui-tab-item" href="#">
        <span>111</span>
        VIP
      </a>
      <a class="mui-tab-item" href="#">
        <span>未开通</span>
        剩余：0
      </a>
    </nav>
    <div class="con con01">
      <h6>漫币充值（可购买所有付费章节）</h6>
      <ul>
        <li>
          <span>30 元</span>
          <p>3000+600 送600书币</p>
        </li>
        <li>
          <span>30 元</span>
          <p>3000+600 送600书币</p>
        </li>
        <li>
          <span>30 元</span>
          <p>3000+600 送600书币</p>
        </li>
        <li>
          <span>30 元</span>
          <p>3000+600 送600书币</p>
        </li>
      </ul>
    </div>
    <div class="con con01">
      <h6>VIP充值（免费阅读VIP所有作品）</h6>
      <ul>
        <li>
          <span>月卡100元</span>
          <p>月卡 开通VIP30天！</p>
        </li>
        <li>
          <span>季卡200元</span>
          <p>季卡 开通VIP91天！</p>
        </li>
      </ul>
    </div>
    <div class="con con02">
      <h6>选择支付方式（1元=100书币）</h6>
      <ul>
        <li>
          <span>月卡100元</span>
          <p>月卡 开通VIP30天！</p>
        </li>
        <li>
          <span>季卡200元</span>
          <p>季卡 开通VIP91天！</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  export default {
      components: {
          headTitle
      }
  }
</script>

<style scoped>
  .con{
    padding: 20px 16px 0;
  }
  .con h6{
    margin: 0 0 15px 0;
  }
  .con01 ul{
    overflow: hidden;
    padding: 10px;
    box-sizing: border-box;
  }
  .con01 ul li{
    width: 46%;
    float: left;
    box-shadow: 0 0 6px #cccccc;
    text-align: center;
    margin: 0 4% 4% 0;
    padding: 20px 0;
  }
  .con01 ul li p{
    margin: 10px 0 0 0;
    color: red;
  }
  .pic{
    padding: 20px 16px;
  }
  .mui-bar{
    position: static;
    box-shadow: 0 0 1px #cccccc;
    font-size: 12px;
    padding: 7px 0;
    background-color: #ffffff;
    border-bottom: solid 1px #f6f6f6;
  }
  .mui-tab-item{
    position: relative;
  }
  .mui-tab-item:nth-child(2):before{
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
</style>
