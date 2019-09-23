<template>
  <ul>
    <li :class="{'selected': index === ins}" v-for="(setMeal,index) in setMeals" @click="handleSelect(index,setMeal)">
      <h6>{{setMeal.name}}</h6>
      <p><i>￥</i>{{setMeal.payPrice | filterPrice}}</p>
      <s>{{setMeal.price | filterPrice}}</s>
      <span :class="{'isShow': setMeal.recommendState === 0}">{{setMeal.recommendState | filterRecommend}}</span>
      <div class="bg">
        <div class="t">{{setMeal.discount}}折</div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
      props: ['setMeals'],
      data(){
          return{
              ins: 0,
              setMeal: {}
          }
      },
      beforeUpdate(){
        this.$emit('setMeal',this.setMeals[0])
      },
      methods: {
          handleSelect(index,item){
              this.ins = index;
              this.setMeal = item
              this.$emit('setMeal',this.setMeal)
          }
      }
  }
</script>

<style scoped>
  .set-meal ul{
    display: flex;
    flex-wrap: wrap;
    padding: 0 2% 0;
  }
  .set-meal li{
    width: 49%;
    text-align: center;
    border-radius: 6px;
    padding: 0 0 8px 0;
    color: #333333;
    background: #f8f8f8;
    box-sizing: border-box;
    border: 2px solid transparent;
    margin: 0 2% 0 0;
    position: relative;
  }
  .set-meal li:nth-child(2n){
    margin-right: 0;
  }
  .set-meal li.selected{
    border: solid 2px #ffea55;
    background: #ffffff;
  }
  .set-meal li h6{
    line-height: 30px;
    color: #333333;
    font-size: 18px;
    margin: 10px 0 0 0;
  }
  .set-meal li p{
    margin: 0;
    font-size: 36px;
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
  .set-meal li .bg{
    position: absolute;
    top: 0;
    background: url("./image/tag.png") no-repeat;
    background-size: 100% 100%;
    width: 25%;
    height: 30%;
    font-size: 1.4rem;
  }
  .set-meal li .t{
    transform: rotate(-45deg);
    margin: 9px 0 0 -6px;
  }
</style>
