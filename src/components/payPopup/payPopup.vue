<template>
  <section>
    <div class="pay-bg" @click="handleClose"></div>
    <div class="pay-popup">
      <div class="top">
        <h6>充值{{setMeal.name}}</h6>
        <p>￥{{setMeal.payPrice || setMeal.price}}.00</p>
      </div>
      <form class="list" action="">
        <label><i class="iconfont iconzhifubao1"></i>支付宝 <input type="radio" checked v-model="payId" value="1"></label>
        <label><i class="iconfont iconweixin1"></i>微信 <input type="radio" v-model="payId" value="2"></label>
      </form>
      <button @click="handlePay">确定支付</button>
      <div class="close" @click="handleClose"><i class="iconfont iconcuowu"></i></div>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
      props: ['setMeal'],
      data(){
        return{
            payId: 1
        }
      },
      methods: {
          handlePay(){
              //根据是否存在字段giveCoinQuantity判断当前是金币充值还是vip
              //如果后台修改字段 就会出现错误！！
              if (this.setMeal.giveCoinQuantity == null){
                  let param = {"vipComboId": this.setMeal.id,"PayType": this.payId};
                  this.$store.dispatch('handlePay',param);
                  return
              }
              let param = {"coincomboid": this.setMeal.id,"PayType": this.payId};
              this.$store.dispatch('handleRecharge',param);
          },
          handleClose(){
              this.$emit('isShow',false)
          }
      },
      computed: {
          ...mapState(['payInfo'])
      }
  }
</script>

<style scoped>
  .pay-bg{
    height: 100%;
    width: 100%;
    background: #333333;
    opacity: 0.6;
    position: fixed;
    left: 0;
    top: 0;
  }
  .pay-popup{
    width: 70%;
    height: 50%;
    border-radius: 12px;
    background: #ffffff;
    position: fixed;
    z-index: 99999;
    top: 50%;
    left: 50%;
    margin: -45% 0 0 -35%;
    overflow: hidden;
  }
  .pay-popup .top{
    background: #FA6653;
    text-align: center;
  }
  .pay-popup .top h6{
    padding: 7% 0 0 0;
    margin: 0;
    font-size: 1.8rem;
    color: #ffffff;
    line-height: 3.2rem;
  }
  .pay-popup .top p{
    font-size: 3.2rem;
    margin-bottom: 0;
    color: #ffffff;
    line-height: 4.6rem;
  }
  .pay-popup .list label{
    padding: 7% 7%;
    display: block;
  }
  .pay-popup .list label i{
    margin: 0 3% 0 0;
    font-size: 2.8rem;
    color: #5da6ff;
  }
  .pay-popup .list label input{
    float: right;
  }
  .pay-popup button{
    width: 80%;
    display: block;
    margin: 10% auto 0;
    line-height: 3.8rem;
    text-align: center;
    background: #FA6653;
    border-radius: 40px;
    color: #ffffff;
    border: none;
    font-size: 1.8rem;
  }
  .pay-popup .close{
    position: absolute;
    top: 4%;
    right: 4%;
    color: #ffffff;
  }
  .pay-popup .close i{
    font-size: 2.4rem;
  }
</style>
