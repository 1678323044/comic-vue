<template>
  <nav class="neck-tab">
    <a :style="{'color': color}" :class="{'active': index === currentPage}" @click="handleSwitch(index)" v-for="(rankSort,index) in rankSorts" :key="index">
      {{rankSort.name}}
    </a>
  </nav>
</template>

<script>
  export default {
    props: ['rankSorts','color','currentPage'],
    data(){
        return{
            num: 0
        }
    },
    methods: {
        handleSwitch(index){
            this.$emit('num',index)
        }
    }
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
    color: #FC5F45!important;
  }
</style>
