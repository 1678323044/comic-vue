<template>
  <nav class="neck-tab">
    <a v-for="rankSort in rankSorts">
      {{rankSort.name}}
    </a>
    <a v-for="item in bookshelfTab">
      {{item}}
    </a>
    <a v-for="item in endComicsTab">
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
  .neck-tab{
    display: flex;
    height: 4.5%;
    text-align: center;
  }
  .neck-tab a{
    width: 33.33%;
    color: #333333;
    font-size: 1.7rem;
  }
  .neck-tab a.active{
    color: #FC5F45;
  }
</style>
