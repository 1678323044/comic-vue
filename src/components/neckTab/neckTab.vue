<template>
  <nav class="mui-bar mui-bar-tab">
    <a v-for="rankSort in rankSorts" class="mui-tab-item">
      {{rankSort.name}}
    </a>
    <a v-for="item in bookshelfTab" class="mui-tab-item">
      {{item}}
    </a>
    <a v-for="item in endComicsTab" class="mui-tab-item">
      {{item}}
    </a>
  </nav>
</template>

<script>
  export default {
    props: ['rankSorts','bookshelfTab','endComicsTab']
  }
</script>

<style scoped>
  .mui-bar-tab{
    background: #ffffff;
    box-shadow: 0 0 0 transparent;
    font-size: 14px;
    position: fixed;
    top: 50px;
  }
  .mui-bar-tab .mui-tab-item{
    color: #333333;
  }
</style>
