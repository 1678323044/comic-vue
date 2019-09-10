<template>
  <section class="head-Padding">
    <head-title title="金币充值"></head-title>
    <section class="main">
      <div class="box">
        <p>漫币余额：222</p>
      </div>
      <div class="coin-list">
        <dl>
          <dt><img src="./image/coin0000.png" alt=""></dt>
          <dd>
            <p>3000金币</p>
            <p>+500金币</p>
            <span>￥30.00</span>
          </dd>
        </dl>
        <dl>
          <dt><img src="./image/coin0000.png" alt=""></dt>
          <dd>
            <p>5000金币</p>
            <p>+送1000金币</p>
            <span>￥50.00</span>
          </dd>
        </dl>
        <dl>
          <dt><img src="./image/coin0000.png" alt=""></dt>
          <dd>
            <p>9800金币</p>
            <p>+送3000金币</p>
            <span>￥98.00</span>
          </dd>
        </dl>
        <dl>
          <dt><img src="./image/coin0000.png" alt=""></dt>
          <dd>
            <p>12800金币</p>
            <p>+送4500金币</p>
            <span>￥128.00</span>
          </dd>
        </dl>
        <dl>
          <dt><img src="./image/coin0000.png" alt=""></dt>
          <dd>
            <p>16800金币</p>
            <p>+送7000金币</p>
            <span>￥168.00</span>
          </dd>
        </dl>
        <dl>
          <dt><img src="./image/coin0000.png" alt=""></dt>
          <dd>
            <p>19800金币</p>
            <p>+送9900金币</p>
            <span>￥198.00</span>
          </dd>
        </dl>
      </div>
      <problem></problem>
    </section>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import problem from '../../components/problem/problem'
  export default {
    components: {
      headTitle,
      problem
    }
  }
</script>

<style scoped>
  header{
    background: #475363;
    color: #ffffff;
  }
  .main{
    padding: 0 16px;
  }
  .main .box{
    line-height: 70px;
    border-radius: 10px;
    box-shadow: 2px 2px 4px #333333;
    text-indent: 40px;
    margin: 0 0 20px 0;
  }
  .main .box p{
    font-size: 16px;
  }
  .main .coin-list{
    display: flex;
    flex-wrap: wrap;
  }
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
