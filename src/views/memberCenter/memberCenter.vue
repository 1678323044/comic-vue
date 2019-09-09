<template>
  <section class="recharge">
    <head-title title="会员中心"></head-title>
    <section class="main">
      <div class="mine">
        <mine-info></mine-info>
        <ul class="btm">
          <li>
            <span class="iconfont iconjiaoshi_shujia"></span>
            VIP漫画免费
          </li>
          <li>
            <span class="iconfont iconjiaoshi_shujia"></span>
            VIP尊贵标识
          </li>
          <li>
            <span class="iconfont iconjiaoshi_shujia"></span>
            精品漫画折扣
          </li>
        </ul>
      </div>
      <div class="set-meal">
        <h5>付费VIP套餐</h5>
        <ul>
          <li>
            <h6>夏日特惠</h6>
            <p>￥98.00</p>
            <p>246</p>
            <span>推荐</span>
          </li>
          <li>
            <h6>VIP季度</h6>
            <p>￥98.00</p>
            <p>246</p>
          </li>
          <li>
            <h6>VIP月度</h6>
            <p>￥98.00</p>
            <p>246</p>
          </li>
          <li>
            <h6>VIP半年</h6>
            <p>￥98.00</p>
            <p>246</p>
          </li>
          <li>
            <h6>VIP年度</h6>
            <p>￥98.00</p>
            <p>246</p>
          </li>
          <li>
            <h6>VIP终身</h6>
            <p>￥98.00</p>
            <p>246</p>
          </li>
        </ul>
      </div>
      <div>
        <h6>关于付费VIP常见问题</h6>
        <ul>
          <li>
            <div>1、什么是付费VIP</div>
            <div>付费VIP是本漫画平台推出的会员服务。在本平台内享有的二次元超级用户福利，VIP专享漫画免费看，福利不断更新中</div>
          </li>
          <li>
            <div>2、支付成功了，但是没有显示会员</div>
            <div>付费VIP是本漫画平台推出的会员服务。在本平台内享有的二次元超级用户福利，VIP专享漫画免费看，福利不断更新中</div>
          </li>
          <li>
            <div>3、通常会有哪些原因造成支付失败</div>
            <div>付费VIP是本漫画平台推出的会员服务。在本平台内享有的二次元超级用户福利，VIP专享漫画免费看，福利不断更新中</div>
          </li>
          <li>
            <div>4、我不小心开通了两次会员怎么办？</div>
            <div>付费VIP是本漫画平台推出的会员服务。在本平台内享有的二次元超级用户福利，VIP专享漫画免费看，福利不断更新中</div>
          </li>
        </ul>
      </div>
    </section>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import mineInfo from '../../components/mineInfo/mineInfo'
  export default {
      components: {
        headTitle,
        mineInfo
      }
  }
</script>

<style scoped>
  .recharge{
    margin-top: 50px;
  }
  .main{
    padding: 0 16px;
  }
  .main .btm{
    display: flex;
  }
  .main .btm li span{
    display: block;
    font-size: 32px;
  }

  .main .set-meal{
    margin: 30px 0 0 0;
  }
  .main .set-meal ul{
    display: flex;
    flex-wrap: wrap;
  }
  .main .set-meal li{
    border: solid orange 1px;
    width: 50%;
    text-align: center;
    border-radius: 6px;
  }
</style>
