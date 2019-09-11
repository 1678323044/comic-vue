<template>
    <div class="banner">
      <router-link to="./search"></router-link>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="./image/0000.jpg" width="100%" alt=""></div>
          <div class="swiper-slide"><img src="./image/1111.jpg" width="100%" alt=""></div>
          <div class="swiper-slide"><img src="./image/2222.jpg" width="100%" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
      mounted() {
          new Swiper('.swiper-container',{
              autoplay:true, // 自动轮播
              pagination: {
                  el: '.swiper-pagination', //分页器
              },
          })
      }
  }
</script>

<style scoped>
  .banner{
    position: relative;
  }
  .banner a{
    padding: 4%;
    background: #333333;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 99999;
    background: url("../../common/image/search.png") no-repeat;
    background-size: 100%;
  }
</style>
