<template>
  <section>
    <div class="search">
      <i class="mui-icon mui-icon-search"></i>
      <input type="text" placeholder="搜索漫画名">
      <span @click="returnFunc">取消</span>
    </div>
  </section>
</template>

<script>
  export default {
      methods: {
          returnFunc(){
              this.$router.go(-1)
          }
      }
  }
</script>

<style>
  .search{
    display: flex;
    padding: 8px;
    position: relative;
  }
  .search input{
    width: 80%;
    border-radius: 40px;
    padding: 0 0 0 34px;
    height: 36px;
    font-size: 14px;
    border: 1px solid transparent;
    background: #f6f6f6;
  }
  .search span{
    width: 20%;
    font-size: 16px;
    margin: 6px 0 0 4px;
  }
  .search i{
    position: absolute;
    top: 12px;
    left: 16px;
    color: #999999;
  }
</style>
