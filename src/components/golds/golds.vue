<template>
  <section>
    <dl v-for="recharge in rechargeList">
      <dt><img src="./image/coin0000.png" alt=""></dt>
      <dd>
        <p>{{recharge.coinQuantity}}</p>
        <p>{{recharge.giveCoinQuantity}}</p>
        <span>{{recharge.price}}</span>
      </dd>
    </dl>
  </section>
</template>

<script>
  export default {
    props: ['rechargeList']
  }
</script>

<style scoped>
  .main .coin-list dl{
    width: 33.33%;
    padding: 20px;
    border: solid 1px #f6f6f6;
    text-align: center;
  }
  .main .coin-list dt{
    padding: 10px;
  }
  .main .coin-list dl img{
    width: 100%;
  }
  .main .coin-list dd p:nth-child(1){
    color: #333333;
    font-size: 16px;
    margin: 0 0 6px 0;
    font-weight: 600;
  }
  .main .coin-list dd p:nth-child(2){
    color: #FB6249;
  }
  .main .coin-list dd span{
    padding: 10px 20px;
    background: #FA6E5C;
    border-radius: 20px;
    color: #ffffff;
    font-size: 14px;
  }
</style>
