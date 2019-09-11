<template>
  <section class="ending">
    <head-title title="完结佳作">
      <span @click="returnFunc" slot="return"><i class="mui-icon mui-icon-back"></i></span>
    </head-title>
    <section class="ending-list">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ul>
              <li>
                <div>
                  <span><i class="mui-icon mui-icon-star"></i>9.0</span>
                </div>
                <div>
                  <p>铁姬钢兵</p>
                </div>
                <div>
                  <span>
                    <a>完结</a>
                    <a>VIP</a>
                    <a>推荐</a>
                  </span>
                  <p>去阅读 ></p>
                </div>
              </li>
              <li>
                <div>
                  <span><i class="mui-icon mui-icon-star"></i>9.0</span>
                </div>
                <div>
                  <p>铁姬钢兵</p>
                </div>
                <div>
                  <span>
                    <a>完结</a>
                    <a>VIP</a>
                    <a>推荐</a>
                  </span>
                  <p>去阅读 ></p>
                </div>
              </li>
              <li>
                <div>
                  <span><i class="mui-icon mui-icon-star"></i>9.0</span>
                </div>
                <div>
                  <p>铁姬钢兵</p>
                </div>
                <div>
                  <span>
                    <a>完结</a>
                    <a>VIP</a>
                    <a>推荐</a>
                  </span>
                  <p>去阅读 ></p>
                </div>
              </li>
              <li>
                <div>
                  <span><i class="mui-icon mui-icon-star"></i>9.0</span>
                </div>
                <div>
                  <p>铁姬钢兵</p>
                </div>
                <div>
                  <span>
                    <a>完结</a>
                    <a>VIP</a>
                    <a>推荐</a>
                  </span>
                  <p>去阅读 ></p>
                </div>
              </li>
            </ul>
          </div>
          <div class="swiper-slide">
            <ul>
              <li></li>
            </ul>
          </div>
          <div class="swiper-slide">
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import Swiper from 'swiper'
  export default {
      components: {
          headTitle
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

<style>
  .ending{
    padding-top: 50px;
  }
  .ending-list{
    padding: 0 16px;
  }
  .ending-list .swiper-slide li{
    height: 220px;
    background: url("./image/1.jpg") no-repeat;
    background-size: 100%;
    border-radius: 8px;
    padding: 10px 8px 0 8px;
    margin: 0 0 10px 0;
  }
  .ending-list .swiper-slide li div:nth-child(1){
    text-align: right;
  }
  .ending-list .swiper-slide li div:nth-child(1) span{
    padding: 4px 12px;
    color: #ffffff;
    background: rgba(0,0,0,0.6);
    border-radius: 20px;
    font-size: 14px;
  }
  .ending-list .swiper-slide li div:nth-child(1) span i{
    font-size: 12px;
    vertical-align:text-top;
    margin: 0 3px 0 0;
  }
  .ending-list .swiper-slide li div:nth-child(2){
    margin: 130px 0 0 0;
  }
  .ending-list .swiper-slide li div:nth-child(2) p{
    color: #ffffff;
    font-size: 16px;
  }
  .ending-list .swiper-slide li div:nth-child(3){
    overflow: hidden;
  }
  .ending-list .swiper-slide li div:nth-child(3) span{
    float: left;
  }
  .ending-list .swiper-slide li div:nth-child(3) p{
    float: right;
    color: #ffffff;
    margin-bottom: 0;
  }
  .ending-list .swiper-slide li div:nth-child(3) a{
    padding: 3px 5px;
    background: lightcoral;
    border-radius: 4px;
    margin: 0 4px 0 0;
  }
  .ending-list .swiper-slide li div:nth-child(3) a:nth-child(1){
    background: #FEC2C0;
    color: #910000;
  }
  .ending-list .swiper-slide li div:nth-child(3) a:nth-child(2){
    background: #FEE7C4;
    color: #FB7623;
  }
  .ending-list .swiper-slide li div:nth-child(3) a:nth-child(3){
    background: #C4DFFD;
    color: #3C6CAD;
  }
</style>
