<template>
  <header>
    <slot name="return"></slot>
    <h4>{{title}}</h4>
    <slot name="right"></slot>
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
  header span i.iconfont{
    font-size: 22px;
  }
</style>
