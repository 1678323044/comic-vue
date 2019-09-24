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
    height: 8%;
    background: #ffffff;
    display:flex;
  }
  header h4{
    font-weight: normal;
    width: 72%;
    font-size: 2.3rem;
    margin: 0;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  header span,header a{
    width: 14%;
    color: #FC5F45;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  header span i.iconfont,
  header a i.iconfont{
    font-size: 22px;
  }
</style>
