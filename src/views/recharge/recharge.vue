<template>
  <section class="head-Padding">
    <head-title title="金币充值">
      <span @click="returnFunc" slot="return"><i class="mui-icon mui-icon-back"></i></span>
    </head-title>
    <section class="main">
      <div class="box">
        <p>漫币余额：222</p>
      </div>
      <div class="coin-list">
        <golds :rechargeList="rechargeList"></golds>
      </div>
      <problem></problem>
    </section>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import problem from '../../components/problem/problem'
  import golds from '../../components/golds/golds'
  import {mapState} from 'vuex'
  export default {
    components: {
      headTitle,
      problem,
      golds
    },
    methods: {
        returnFunc(){
            this.$router.go(-1)
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
</style>
