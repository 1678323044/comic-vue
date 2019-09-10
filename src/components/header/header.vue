<template>
  <header>
    <!--<span><i class="mui-icon mui-icon-back"></i></span>-->
    <slot name=""></slot>
    <h4>{{title}}</h4>
    <slot name=""></slot>
    <!--<span><i class="mui-icon mui-icon-search"></i></span>-->
  </header>
</template>

<script>
  export default {
      props: ['title']
  }
</script>

<style>
  header{
    text-align: center;
    font-size: 23px;
    overflow: hidden;
    position: fixed;
    height: 50px;
    width: 100%;
    top: 0;
    background: #ffffff;
    z-index: 99999;
  }
  header h4{
    float: left;
    font-weight: normal;
    line-height: 50px;
    width: 80%;
    margin: 0;
  }
  header span{
    float: left;
    width: 10%;
    height: 50px;
    line-height: 40px;
    color: orange;
  }
</style>
