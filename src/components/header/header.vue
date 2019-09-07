<template>
  <header>
    <span></span>
    <h4>{{title}}</h4>
    <span><i class="mui-icon mui-icon-search"></i></span>
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
  }
  header h4{
    float: left;
    font-weight: normal;
    line-height: 40px;
    width: 80%;
    margin: 0;
  }
  header span{
    float: left;
    width: 10%;
    height: 40px;
    line-height: 40px;
    color: orange;
  }
</style>
