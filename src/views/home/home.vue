<template>
  <section class="home">
    <banner></banner>
    <div class="neck-nav">
      <ul>
        <li>
          <router-link to="/memberArea">
            <img src="./image/icon111.png" alt="">
            <p>VIP专区</p>
          </router-link>
        </li>
        <li>
          <img src="./image/icon111.png" alt="">
          <p>充值优惠</p>
        </li>
        <li>
          <router-link to="/endingWorks">
            <img src="./image/icon111.png" alt="">
            <p>完美佳作</p>
          </router-link>
        </li>
      </ul>
    </div>
    <main>
      <div class="con">
        <h5>小编推荐 <span><i class="mui-icon mui-icon-loop"></i>换一批</span></h5>
        <dl>
          <router-link to="/chapterList">
            <dt><img src="./image/0000.jpg" width="100%" alt=""></dt>
            <dd>
              <h6>我的守护女友</h6>
              <p>Amber漫研社</p>
            </dd>
          </router-link>
        </dl>
        <dl>
          <router-link to="/chapterList">
            <dt><img src="./image/0000.jpg" width="100%" alt=""></dt>
            <dd>
              <h6>我的守护女友</h6>
              <p>Amber漫研社</p>
            </dd>
          </router-link>
        </dl>
        <dl>
          <router-link to="/chapterList">
            <dt><img src="./image/0000.jpg" width="100%" alt=""></dt>
            <dd>
              <h6>我的守护女友</h6>
              <p>Amber漫研社</p>
            </dd>
          </router-link>
        </dl>
        <dl>
          <router-link to="/chapterList">
            <dt><img src="./image/0000.jpg" width="100%" alt=""></dt>
            <dd>
              <h6>我的守护女友</h6>
              <p>Amber漫研社</p>
            </dd>
          </router-link>
        </dl>
        <dl>
          <router-link to="/chapterList">
            <dt><img src="./image/0000.jpg" width="100%" alt=""></dt>
            <dd>
              <h6>我的守护女友</h6>
              <p>Amber漫研社</p>
            </dd>
          </router-link>
        </dl>
        <dl>
          <router-link to="/chapterList">
            <dt><img src="./image/0000.jpg" width="100%" alt=""></dt>
            <dd>
              <h6>我的守护女友</h6>
              <p>Amber漫研社</p>
            </dd>
          </router-link>
        </dl>
        <button class="btn">查看更多 >></button>
      </div>
      <div class="con">
        <h5>今日更新 <span><i class="mui-icon mui-icon-loop"></i>换一批</span></h5>
        <dl>
          <dt><img src="./image/0000.jpg" width="100%" alt=""></dt>
          <dd>
            <h6>我的守护女友</h6>
            <p>Amber漫研社</p>
          </dd>
        </dl>
        <dl>
          <dt><img src="./image/0000.jpg" width="100%" alt=""></dt>
          <dd>
            <h6>我的守护女友</h6>
            <p>Amber漫研社</p>
          </dd>
        </dl>
        <dl>
          <dt><img src="./image/0000.jpg" width="100%" alt=""></dt>
          <dd>
            <h6>我的守护女友</h6>
            <p>Amber漫研社</p>
          </dd>
        </dl>
        <dl>
          <dt><img src="./image/0000.jpg" width="100%" alt=""></dt>
          <dd>
            <h6>我的守护女友</h6>
            <p>Amber漫研社</p>
          </dd>
        </dl>
        <dl>
          <dt><img src="./image/0000.jpg" width="100%" alt=""></dt>
          <dd>
            <h6>我的守护女友</h6>
            <p>Amber漫研社</p>
          </dd>
        </dl>
        <dl>
          <dt><img src="./image/0000.jpg" width="100%" alt=""></dt>
          <dd>
            <h6>我的守护女友</h6>
            <p>Amber漫研社</p>
          </dd>
        </dl>
        <button class="btn">查看更多 >></button>
      </div>
    </main>
  </section>
</template>

<script>
  import banner from '../../components/banner/banner'
  export default {
      components: {
          banner,
      }
  }
</script>

<style scoped>
  .home{
    padding-bottom: 50px;
  }
  main{
    margin: 10px 0 0 0;
    padding: 0 10px;
  }
  .neck-nav ul{
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: -webkit-flex;
    display: flex;
  }
  .neck-nav ul li{
    width: 33.33%;
    text-align: center;
  }
  .neck-nav ul li img{
    width: 40px;
  }
  .con{
    overflow: hidden;
    margin: 0 0 30px 0;
  }
  .con h5{
    position: relative;
    padding: 0 0 0 10px;
    margin: 0 0 10px 0;
    font-size: 16px;
    font-weight: 600;
    color: #333333;
    line-height: 40px;
  }
  .con h5:before{
    content: '';
    width: 5px;
    height: 18px;
    background: orange;
    position: absolute;
    border-radius: 10px;
    left: 0;
    top: 0;
  }
  .con h5 span{
    font-size: 12px;
    float: right;
    color: #999999;
  }
  .con h5 span i{
    margin: 0 4px 0 0;
    font-size: 15px;
  }
  .con dl{
    width: 33.33%;
    float: left;
    padding: 0 8px 4px 8px;
    box-sizing: border-box;
  }
  .con dl dt{
    border-radius: 12px;
    overflow: hidden;
  }
  .con dd h6{
    margin: 3px 0;
  }
  .con .btn{
    width: 100%;
    background: #f1f1f1;
    border-radius: 20px;
    border: none;
  }
</style>
