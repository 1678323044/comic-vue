<template>
  <section>

  </section>
</template>

<script>
  export default {
      name: 'app',
      data () {
          return {
              checkVal: []
          }
      }
  }
</script>

<style scoped>
  section input[type='checkbox']{
    -webkit-appearance:none;
    appearance:none;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    border: 2px #999999 solid;
    color: #999999;
    outline: none;
  }
  section input[type='checkbox']:checked{
    border: solid 2px orange;
    color: orange;
  }
</style>
