<template>
  <section class="head-Padding">
    <head-title title="VIP专区"></head-title>
    <section class="main">
      <div class="mine"></div>
    </section>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  export default {
      components: {
          headTitle
      }
  }
</script>

<style scoped>
  body{
    background: #333333;
  }
  .main{
    padding: 0 16px;
  }
  .mine{
    background: #ffffff;
  }
</style>
