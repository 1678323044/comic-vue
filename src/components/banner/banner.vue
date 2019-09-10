<template>
    <div class="banner">
      <span></span>
      <router-link to="./search"></router-link>
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="./image/0000.jpg" width="100%" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="./image/1111.jpg" width="100%" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="./image/2222.jpg" width="100%" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>

</script>

<style scoped>
  .banner{
    position: relative;
    margin: 0 0 20px 0;
  }
  .banner a{
    width: 40px;
    height: 40px;
    background: #333333;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 99999;
    background: url("../../common/image/search.png") no-repeat;
    background-size: 100%;
  }
  .mint-swipe{
    height: 240px;
  }
</style>
