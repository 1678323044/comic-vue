<template>
  <div class="mine-info">
    <div>
      <img src="./image/IMG_2475.jpg" width="100%" alt="">
    </div>
    <div>
      <h6 class="">zheng04190</h6>
      <p>开通VIP，享多重特权</p>
    </div>
    <div>
      <span>成为VIP</span>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .mine-info div:nth-child(1){
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
  }
  .mine-info div:nth-child(2){
    margin: 0 10px 0 10px;
  }
  .mine-info div:nth-child(2) h6{
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    margin: 0 0 10px 0;
  }
  .mine-info div:nth-child(2) p{
    color: #ffffff;
  }
  .mine-info div:nth-child(3){
    padding-top: 6px;
  }
  .mine-info div:nth-child(3) span{
    padding: 8px 20px;
    border-radius: 20px;
    background: orange;
    color: #ffffff;
  }
</style>
