<template>
  <section class="public-main">
    <head-title title="金币充值">
      <router-link to="" slot="return" @click.native="returnFunc">
        <i class="mui-icon mui-icon-back" style="color: #ffffff"></i>
      </router-link>
    </head-title>
    <section class="main">
      <div class="box">
        <p>漫币余额：222</p>
      </div>
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
        }
    },
    created() {
      this.$store.dispatch('getRechargeList')
    },
    computed: {
      ...mapState(['rechargeList'])
    }
  }
</script>

<style scoped>
  header{
    background: #475363;
    color: #ffffff;
  }
  .main{
    padding: 0 3%;
    height: 91%;
    overflow: auto!important;
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
</style>
