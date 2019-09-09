<template>
  <section class="head-Padding">
    <head-title title="VIP专区"></head-title>
    <section class="main">
      <mine-info></mine-info>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <dl>
              <dt><img src="./image/210.jpg" alt=""></dt>
              <dd>
                <h6>子沐物语</h6>
                <p>校园 恋爱</p>
              </dd>
            </dl>
            <dl>
              <dt><img src="./image/210.jpg" alt=""></dt>
              <dd>
                <h6>子沐物语</h6>
                <p>校园 恋爱</p>
              </dd>
            </dl>
            <dl>
              <dt><img src="./image/210.jpg" alt=""></dt>
              <dd>
                <h6>子沐物语</h6>
                <p>校园 恋爱</p>
              </dd>
            </dl>
            <dl>
              <dt><img src="./image/210.jpg" alt=""></dt>
              <dd>
                <h6>子沐物语</h6>
                <p>校园 恋爱</p>
              </dd>
            </dl>
          </div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import mineInfo from '../../components/mineInfo/mineInfo'
  export default {
      components: {
          headTitle,
        mineInfo
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
  .main .swiper-slide dl{
    float: left;
    width: 33.33%;
    padding: 0 10px;
  }
  .main .swiper-slide dl img{
    width: 100%;
  }
</style>
