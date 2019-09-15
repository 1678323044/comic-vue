<template>
  <ul>
    <li v-for="setMeal in setMeals">
      <h6>{{setMeal.name}}</h6>
      <p class="now">{{setMeal.payPrice}}</p>
      <p class="original">{{setMeal.price}}</p>
      <span>{{setMeal.recommendState}}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['setMeals']
  }
</script>

<style scoped>
  .set-meal ul{
    display: flex;
    flex-wrap: wrap;
  }
  .set-meal li{
    border: solid #FFEA55 2px;
    width: 46%;
    text-align: center;
    border-radius: 6px;
    margin: 2%;
    padding: 0 0 8px 0;
  }
  .set-meal li h6{
    line-height: 30px;
    color: #333333;
    font-size: 16px;
  }
  .set-meal li .now{
    font-size: 34px;
    color: #333333;
    font-weight: bold;
    line-height: 40px;
  }
  .set-meal li .original{
    color: #333333;
  }
  .set-meal li span{
    padding: 6px;
    background: #FA6653;
    border-radius: 4px;
    color: #ffffff;
  }
</style>
