<template>
  <section class="public-main">
    <section class="recharge-head">
      <head-title title="金币充值">
        <router-link to="" slot="return" @click.native="returnFunc">
          <i class="mui-icon mui-icon-back" style="color: #ffffff"></i>
        </router-link>
      </head-title>
      <img class="bg-img" src="./image/bg.jpg" width="100%" alt="">
      <div class="title">
        <h6>0</h6>
        <p>金币余额</p>
        <p>开通VIP，享多重特权</p>
      </div>
    </section>
    <section class="main">
      <golds :rechargeList="rechargeList" @golds="parentFn"></golds>
      <problem :problems="problems"></problem>
    </section>
    <pay-popup v-show="isShow" :setMeal="setMeal" @isShow="handleClose"></pay-popup>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import problem from '../../components/problem/problem'
  import golds from '../../components/golds/golds'
  import payPopup from "../../components/payPopup/payPopup";
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
          problems: [
              {
                  "state": false,
                  "doubt": "1、什么是金币",
                  "answer": "付费VIP是本漫画平台推出的会员服务。在本平台内享有的二次元超级用户福利，VIP专享漫画免费看，福利不断更新中"
              },
              {
                  "state": false,
                  "doubt": "2、支付成功了，但是金币没有到账怎么办？",
                  "answer": "付费VIP是本漫画平台推出的会员服务。在本平台内享有的二次元超级用户福利，VIP专享漫画免费看，福利不断更新中"
              },
              {
                  "state": false,
                  "doubt": "3、通常会有哪些原因造成支付失败",
                  "answer": "付费VIP是本漫画平台推出的会员服务。在本平台内享有的二次元超级用户福利，VIP专享漫画免费看，福利不断更新中"
              },
              {
                  "state": false,
                  "doubt": "4、我卸载应用再下载，购买的金币没了？",
                  "answer": "付费VIP是本漫画平台推出的会员服务。在本平台内享有的二次元超级用户福利，VIP专享漫画免费看，福利不断更新中"
              }
          ],
          setMeal: {},
          isShow: false
      }
    },
    components: {
      headTitle,
      problem,
      golds,
      payPopup
    },
    methods: {
        returnFunc(){
            this.$router.go(-1)
        },
        parentFn(item){
            this.setMeal = item
            this.isShow = true
        },
        handleClose(hide){
            this.isShow = hide
        },
        /*handleScroll(){
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(scrollTop)
        }*/
    },
    created() {
      this.$store.dispatch('getRechargeList')
    },
    mounted(){
      //添加一个滚动监听事件
      /*window.addEventListener("scroll", this.handleScroll, true)*/
    },
    computed: {
      ...mapState(['rechargeList'])
    }
  }
</script>

<style scoped>
  .public-main{
    position: relative;
    overflow: auto;
  }
  .recharge-head{
    position: relative;
  }
  .recharge-head header{
    background: transparent;
    color: #ffffff;
    position: fixed;
    top: 0;
    width: 100%;
  }
  .recharge-head .title{
    position: absolute;
    bottom: 20%;
    width: 100%;
    text-align: center;
  }
  .recharge-head .title h6{
    font-size: 4.8rem;
    color: #ffffff;
  }
  .recharge-head .title p{
    font-size: 1.4rem;
    color: #dddddd;
  }
  .main{
    padding: 0 3%;
  }
  .main .box p{
    font-size: 16px;
  }
  .main .coin-list{
    display: flex;
    flex-wrap: wrap;
  }
</style>
