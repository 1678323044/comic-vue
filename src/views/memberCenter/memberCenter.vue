<template>
  <section class="public-main">
    <head-title title="会员中心">
      <router-link to="" slot="return" @click.native="returnFunc">
        <i class="mui-icon mui-icon-back" style="color: #ffffff"></i>
      </router-link>
    </head-title>
    <section class="member-con">
      <div class="mine">
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
        <set-meals :setMeals="setMeals" @setMeal="parentFn"></set-meals>
      </div>
      <problem :problems="problems"></problem>
    </section>
    <div class="opening-btn">
      <button @click="handlePay">立即开通</button>
    </div>
    <pay-popup v-show="isShow" :setMeal="setMeal" @isShow="handleClose"></pay-popup>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import problem from '../../components/problem/problem'
  import setMeals from '../../components/setMeals/setMeals'
  import payPopup from '../../components/payPopup/payPopup'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
          isBg: false,
          isShow: false,
          setMeal: {},
          problems: [
              {
                  "state": false,
                  "doubt": "1、什么是付费VIP",
                  "answer": "付费VIP是本漫画平台推出的会员服务。在本平台内享有的二次元超级用户福利，VIP专享漫画免费看，福利不断更新中"
              },
              {
                  "state": false,
                  "doubt": "2、支付成功了，但是没有显示会员",
                  "answer": "付费VIP是本漫画平台推出的会员服务。在本平台内享有的二次元超级用户福利，VIP专享漫画免费看，福利不断更新中"
              },
              {
                  "state": false,
                  "doubt": "3、通常会有哪些原因造成支付失败",
                  "answer": "付费VIP是本漫画平台推出的会员服务。在本平台内享有的二次元超级用户福利，VIP专享漫画免费看，福利不断更新中"
              },
              {
                  "state": false,
                  "doubt": "4、我不小心开通了两次会员怎么办？",
                  "answer": "付费VIP是本漫画平台推出的会员服务。在本平台内享有的二次元超级用户福利，VIP专享漫画免费看，福利不断更新中"
              }
          ],
      }
    },
    components: {
      headTitle,
      problem,
      setMeals,
      payPopup
    },
    created() {
      this.$store.dispatch('getSetMeals');
    },
    methods: {
      returnFunc(){
        this.$router.go(-1)
      },
      handlePay(){
          this.isShow = true
      },
      parentFn(item){
          this.setMeal = item
      },
      handleClose(hide){
          this.isShow = hide
      }
    },
    computed: {
      ...mapState(['setMeals'])
    }
  }
</script>

<style scoped>
  .public-main{
    background: linear-gradient(#3550c3,#23378f,#0b0a2b);
  }
  header{
    color: #ffffff;
    background: transparent;
  }
  .member-con{
    overflow: auto;
    height: 83%;
    padding: 0 4%;
  }
  .member-con > div{
    margin: 0 0 36px 0;
  }
  .member-con .mine{
    color: #ffffff;
    padding: 3% 0 2% 0;
    border-radius: 8px;
    background: linear-gradient(90deg,#5D8EFB, #91DCFD);
  }
  .member-con .mine .mine-info{
    padding: 25px 16px;
  }
  .member-con .mine .btm{
    display: flex;
    padding: 6px 0;
  }
  .member-con .mine .btm li{
    width: 33.33%;
    font-size: 14px;
    text-align: center;
  }
  .member-con .mine .btm li span{
    display: block;
    font-size: 32px;
    margin: 0 0 10px 0;
  }
  .member-con .set-meal h5{
    line-height: 60px;
    font-size: 18px;
    color: #333333;
  }
  .member-con .set-meal{
    background: #ffffff;
    text-align: center;
    border-radius: 8px;
  }
  .opening-btn{
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    margin: 0!important;
    background: #ffffff;
    text-align: center;
    border-top: solid 1px #eeeeee;
    height: 8%;
  }
  .opening-btn button{
    width: 95%;
    padding: 3% 0;
    display: block;
    margin: 2% auto 0;
    border-radius: 50px;
    background: #FA6653;
    color: #ffffff;
    font-size: 18px;
    border: none;
  }
</style>
