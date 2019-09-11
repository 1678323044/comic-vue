<template>
  <nav class="mui-bar mui-bar-tab">
    <a v-for="rankSort in rankSorts" class="mui-tab-item" href="#Popover_0">
      {{rankSort.name}}
    </a>
  </nav>
</template>

<script>
  export default {
    props: ['rankSorts']
  }
</script>

<style scoped>
  .mui-bar-tab{
    background: #ffffff;
    box-shadow: 0 0 0 transparent;
    font-size: 14px;
    position: fixed;
    top: 40px;
  }
  .mui-bar-tab .mui-tab-item{
    color: #333333;
  }
</style>
