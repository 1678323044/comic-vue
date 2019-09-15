<script src="../../store/state.js"></script>
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
        <set-meals :setMeals="setMeals"></set-meals>
      </div>
      <problem></problem>
    </section>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import mineInfo from '../../components/mineInfo/mineInfo'
  import problem from '../../components/problem/problem'
  import setMeals from '../../components/setMeals/setMeals'
  import {mapState} from 'vuex'
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
      problem,
      setMeals
    },
    created() {
      this.$store.dispatch('getSetMeals');
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
    },
    computed: {
      ...mapState(['setMeals'])
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
</style>
