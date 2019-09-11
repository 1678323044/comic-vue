<template>
  <section class="head-Padding">
    <head-title title="VIP专区">
      <span @click="returnFunc" slot="return"><i class="mui-icon mui-icon-back"></i></span>
    </head-title>
    <section class="bg-img"></section>
    <section class="main">
      <mine-info></mine-info>
      <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item" href="#Popover_0">VIP畅销</a>
        <a class="mui-tab-item" href="#Popover_1">VIP连载</a>
        <a class="mui-tab-item" href="#Popover_2">VIP完结</a>
        <a class="mui-tab-item" href="#Popover_2">全部</a>
      </nav>
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
          <div class="swiper-slide">
            <dl>
              <dt><img src="./image/211.jpg" alt=""></dt>
              <dd>
                <h6>我的反派女友</h6>
                <p>校园 恋爱</p>
              </dd>
            </dl>
            <dl>
              <dt><img src="./image/211.jpg" alt=""></dt>
              <dd>
                <h6>我的反派女友</h6>
                <p>校园 恋爱</p>
              </dd>
            </dl>
            <dl>
              <dt><img src="./image/211.jpg" alt=""></dt>
              <dd>
                <h6>我的反派女友</h6>
                <p>校园 恋爱</p>
              </dd>
            </dl>
            <dl>
              <dt><img src="./image/211.jpg" alt=""></dt>
              <dd>
                <h6>子沐物语</h6>
                <p>校园 恋爱</p>
              </dd>
            </dl>
          </div>
          <div class="swiper-slide">
            <dl>
              <dt><img src="./image/212.jpg" alt=""></dt>
              <dd>
                <h6>妖怪名单</h6>
                <p>古风 恋爱</p>
              </dd>
            </dl>
            <dl>
              <dt><img src="./image/212.jpg" alt=""></dt>
              <dd>
                <h6>妖怪名单</h6>
                <p>古风 恋爱</p>
              </dd>
            </dl>
            <dl>
              <dt><img src="./image/212.jpg" alt=""></dt>
              <dd>
                <h6>妖怪名单</h6>
                <p>古风 恋爱</p>
              </dd>
            </dl>
            <dl>
              <dt><img src="./image/212.jpg" alt=""></dt>
              <dd>
                <h6>妖怪名单</h6>
                <p>古风 恋爱</p>
              </dd>
            </dl>
          </div>
          <div class="swiper-slide">
            <dl>
              <dt><img src="./image/213.jpg" alt=""></dt>
              <dd>
                <h6>元尊</h6>
                <p>玄幻 冒险</p>
              </dd>
            </dl>
            <dl>
              <dt><img src="./image/213.jpg" alt=""></dt>
              <dd>
                <h6>元尊</h6>
                <p>玄幻 冒险</p>
              </dd>
            </dl>
            <dl>
              <dt><img src="./image/213.jpg" alt=""></dt>
              <dd>
                <h6>元尊</h6>
                <p>玄幻 冒险</p>
              </dd>
            </dl>
            <dl>
              <dt><img src="./image/213.jpg" alt=""></dt>
              <dd>
                <h6>元尊</h6>
                <p>玄幻 冒险</p>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import mineInfo from '../../components/mineInfo/mineInfo'
  import Swiper from 'swiper'
  export default {
      components: {
          headTitle,
          mineInfo
      },
      mounted() {
          new Swiper('.swiper-container',{
          })
      },
      methods: {
          returnFunc(){
              this.$router.go(-1)
          }
      }
  }
</script>

<style scoped>
  .mui-bar-tab{
    box-shadow: 0 0 0 transparent;
    font-size: 14px;
    position: static;
    top: 40px;
    background: transparent;
  }
  .mui-bar-tab .mui-tab-item{
    color: #ffffff;
  }

  .bg-img{
    background: url("./image/bg0000.png") no-repeat;
    background-size: 100%;
    height: 152px;
  }
  .main{
    padding: 0 16px;
    background: #333333;
  }
  .main .mine-info{
    background: #ffffff;
    margin: 0 0 30px 0;
  }
  .main .swiper-slide dl{
    float: left;
    width: 33.33%;
    padding: 0 10px 0 0;

  }
  .main .swiper-slide dl img{
    width: 100%;
    border-radius: 10px;
  }
  .main .swiper-slide dd h6{
    color: #ffffff;
    font-size: 14px;
  }
</style>
