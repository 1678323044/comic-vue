<template>
  <ul>
    <li :class="{'selected': index == ins}" v-for="(setMeal,index) in setMeals" @click="handlePay(index)">
      <h6>{{setMeal.name}}</h6>
      <p><i>￥</i>{{setMeal.payPrice | filterPrice}}</p>
      <s>{{setMeal.price | filterPrice}}</s>
      <span :class="{'isShow': setMeal.recommendState === 0}">{{setMeal.recommendState | filterRecommend}}</span>
    </li>
  </ul>
</template>

<script>
  export default {
      props: ['setMeals'],
      data(){
          return{
              ins: 0
          }
      },
      methods: {
          handlePay(index){
              this.ins = index
          }
      }
  }
</script>

<style scoped>
  .set-meal ul{
    display: flex;
    flex-wrap: wrap;
  }
  .set-meal li{
    width: 46%;
    text-align: center;
    border-radius: 6px;
    margin: 2%;
    padding: 0 0 8px 0;
    color: #333333;
    background: #f8f8f8;
    box-sizing: border-box;
    border: 2px solid transparent;
  }
  .set-meal li.selected{
    border: solid 2px #ffea55;
  }
  .set-meal li h6{
    line-height: 30px;
    color: #333333;
    font-size: 18px;
    margin: 10px 0 10px 0;
  }
  .set-meal li p{
    margin: 0;
    font-size: 38px;
    color: #333333;
    line-height: 40px;
  }
  .set-meal li p i{
    font-size: 20px;
    font-style: normal;
  }
  .set-meal li s{
    display: block;
    margin: 0 0 4px 0;
  }
  .set-meal li span{
    padding: 3px 6px;
    background: #FA6653;
    border-radius: 4px;
    color: #ffffff;
    font-size: 10px;
  }
  .set-meal li span.isShow{
    visibility: hidden;
  }
</style>
