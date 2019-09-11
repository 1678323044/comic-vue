<template>
  <section class="member">
    <head-title :class="{'head-bg': isBg}" title="会员中心">
      <span @click="returnFunc" slot="return"><i class="mui-icon mui-icon-back"></i></span>
    </head-title>
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
            <p class="now">￥98.00</p>
            <p class="original">246</p>
            <span>推荐</span>
          </li>
          <li>
            <h6>VIP季度</h6>
            <p class="now">￥98.00</p>
            <p class="original">246</p>
          </li>
          <li>
            <h6>VIP月度</h6>
            <p class="now">￥98.00</p>
            <p class="original">246</p>
          </li>
          <li>
            <h6>VIP半年</h6>
            <p class="now">￥98.00</p>
            <p class="original">246</p>
          </li>
          <li>
            <h6>VIP年度</h6>
            <p class="now">￥98.00</p>
            <p class="original">246</p>
          </li>
          <li>
            <h6>VIP终身</h6>
            <p class="now">￥98.00</p>
            <p class="original">246</p>
          </li>
        </ul>
      </div>
      <problem></problem>
    </section>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import mineInfo from '../../components/mineInfo/mineInfo'
  import problem from '../../components/problem/problem'
  export default {
      data(){
          return{
              scrollHei: 0,
              isBg: false
          }
      },
      components: {
        headTitle,
        mineInfo,
        problem
      },
      created() {
          addEventListener('scroll',this.scrollFunc,true)
      },
      methods: {
          scrollFunc(){
              this.scrollHei = document.documentElement.scrollTop || document.body.scrollTop
              if (this.scrollHei === 0){
                  this.isBg = false
                  return
              }
              this.isBg = true
          },
          returnFunc(){
              this.$router.go(-1)
          }
      }
  }
</script>

<style scoped>
  header{
    background: transparent;
    color: #ffffff;
  }
  .head-bg{
    background: #13124e;
  }
  .member{
    padding-top: 50px;
    background: url("./image/true1111.png") no-repeat;
    background-size: 100%;
  }
  .main{
    padding: 0 16px 40px 16px;
  }
  .main .mine{
    color: #ffffff;
    border-radius: 8px;
    background: linear-gradient(90deg,#5D8EFB, #91DCFD);
  }
  .main .btm{
    display: flex;
  }
  .main .btm li{
    margin: 0 29px;
    text-align: center;
  }
  .main .btm li span{
    display: block;
    font-size: 32px;
    margin: 0 0 10px 0;
  }
  .main .set-meal{
    margin: 30px 0 20px 0;
    background: #ffffff;
    text-align: center;
    border-radius: 8px;
  }
  .main .set-meal h5{
    line-height: 60px;
    font-size: 16px;
    color: #333333;
    font-weight: bold;
  }
  .main .set-meal ul{
    display: flex;
    flex-wrap: wrap;
  }
  .main .set-meal li{
    border: solid #FFEA55 2px;
    width: 46%;
    text-align: center;
    border-radius: 6px;
    margin: 2%;
    padding: 0 0 8px 0;
  }
  .main .set-meal li h6{
    line-height: 30px;
    color: #333333;
    font-size: 16px;
  }
  .main .set-meal li .now{
    font-size: 34px;
    color: #333333;
    font-weight: bold;
    line-height: 40px;
  }
  .main .set-meal li .original{
    color: #333333;
  }
  .main .set-meal li span{
    padding: 6px;
    background: #FA6653;
    border-radius: 4px;
    color: #ffffff;
  }
</style>
