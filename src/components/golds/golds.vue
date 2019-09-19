<template>
  <div class="coin-list">
    <dl v-for="recharge in rechargeList">
      <dt><img src="./image/coin0000.png" alt=""></dt>
      <dd>
        <p>{{recharge.coinQuantity}}</p>
        <p>+送{{recharge.giveCoinQuantity}}金币</p>
        <span>￥{{recharge.price}}.00</span>
      </dd>
    </dl>
  </div>
</template>

<script>
  export default {
    props: ['rechargeList']
  }
</script>

<style scoped>
  .main .coin-list dl{
    width: 32%;
    text-align: center;
    margin: 0 2% 2% 0;
    border-radius: 6px;
    border: solid 1px #f6f6f6;
  }
  .main .coin-list dl:nth-child(3n){
    margin-right: 0;
  }
  .main .coin-list dt{
    padding: 10px;
  }
  .main .coin-list dl img{
    width: 60%;
    margin: 0 auto;
  }
  .main .coin-list dd{
    padding: 0 0 8%;
  }
  .main .coin-list dd p:nth-child(1){
    color: #333333;
    font-size: 16px;
    margin-bottom: 0;
    font-weight: 600;
  }
  .main .coin-list dd p:nth-child(2){
    color: #FB6249;
    margin-bottom: 6px;
  }
  .main .coin-list dd span{
    background: #FA6E5C;
    border-radius: 20px;
    color: #ffffff;
    font-size: 14px;
    padding: 6% 12%;
  }
</style>
