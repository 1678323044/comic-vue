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
    height: 50px;
    background: #ffffff;
    display:flex;
  }
  header h4{
    font-weight: normal;
    line-height: 50px;
    width: 80%;
    margin: 0;
    font-size: 20px;
  }
  header span{
    width: 10%;
    height: 50px;
    line-height: 40px;
    color: orange;
  }
  header span i.iconfont{
    font-size: 22px;
  }
</style>
