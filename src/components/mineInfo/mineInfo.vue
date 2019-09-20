<template>
  <div class="mine-info">
    <div>
      <img src="./image/IMG_2475.jpg" width="100%" alt="">
    </div>
    <div>
      <h6 :style="{'color': color}">zheng04190</h6>
      <p :style="{'color': color}">开通VIP，享多重特权</p>
    </div>
    <div>
      <span>成为VIP</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['color']
  }
</script>

<style scoped>
  .mine-info{
    display: flex;
  }
  .mine-info div:nth-child(1){
    width: 20%;
    border-radius: 50%;
    overflow: hidden;
  }
  .mine-info div:nth-child(2){
    width: 46%;
    margin: 0 0 0 4%;
  }
  .mine-info div:nth-child(2) h6{
    font-size: 20px;
    color: #ffffff;
    margin: 0 0 10px 0;
  }
  .mine-info div:nth-child(2) p{
    color: #ffffff;
  }
  .mine-info div:nth-child(3){
    width: 30%;
  }
  .mine-info div:nth-child(3) span{
    padding: 6% 10%;
    border-radius: 20px;
    background: orange;
    color: #ffffff;
    font-size: 1.4rem;
  }
</style>
