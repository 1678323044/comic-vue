<template>
  <nav class="mui-bar mui-bar-tab">
    <a class="mui-tab-item selected" href="#Popover_0">上升榜</a>
    <a class="mui-tab-item" href="#Popover_1">周排行</a>
    <a class="mui-tab-item" href="#Popover_2">收藏榜</a>
  </nav>
</template>

<script>

</script>

<style scoped>
  .mui-bar-tab{
    position: static;
    background: #ffffff;
    box-shadow: 0 0 0 transparent;
    font-size: 14px;
  }
  .mui-bar-tab .mui-tab-item{
    color: #333333;
  }
  .mui-bar-tab .selected{
    position: relative;
  }
  .mui-bar-tab .selected:before{
    content: '';
    width: 30px;
    height: 4px;
    border-radius: 5px;
    background: red;
    position: absolute;
    bottom: 6px;
    left: 50%;
    margin: 0 0 0 -15px;
  }
</style>
