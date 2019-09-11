<template>
  <section>
    <head-title>
      <span @click="returnFunc" slot="return"><i class="mui-icon mui-icon-back"></i></span>
    </head-title>
    <div class="headImg"></div>
    <div class="btn">
      <ul>
        <li><button class="addBookshelf">加入书架</button></li>
        <li><button class="reading">开始阅读</button></li>
      </ul>
    </div>
    <div class="content">
      <p>作者：正宗刀&nbsp;&nbsp;&nbsp;<span>连载中</span></p>
      <p>她是现代赫赫有名的毒药神医，一朝穿越成丞相府大小姐，撞破庶妹和未婚夫的奸情被灭口？
        还要被下人奸尸？老虎不发威当她是猫啊！一把毒粉撒过去，让你怎么死的都不知道！柳心月玩的不亦乐乎，
        岂料，一切都被一名面具男子看在眼里。“够劲，够毒，够狠，本宫看上你了。”“你个废柴，看上你妹，毒死你！”</p>
    </div>
    <div class="list">
      <div class="title">
        <h6>章节列表（47）</h6>
        <span></span>
      </div>
      <div class="chapter">
        <dl>
          <router-link to="/chapter">
            <dt><img src="./image/1553848797-1.jpeg" width="100%" alt=""></dt>
            <dd>
              <h6>1话 第一小分队</h6>
              <span>免费</span>
              <p>12-11</p>
            </dd>
          </router-link>
        </dl>
        <dl>
          <router-link to="/chapter">
            <dt><img src="./image/1553848797-1.jpeg" width="100%" alt=""></dt>
            <dd>
              <h6>1话 第一小分队</h6>
              <span>免费</span>
              <p>12-11</p>
            </dd>
          </router-link>
        </dl>
        <dl>
          <router-link to="/chapter">
            <dt><img src="./image/1553848797-1.jpeg" width="100%" alt=""></dt>
            <dd>
              <h6>1话 第一小分队</h6>
              <span>免费</span>
              <p>12-11</p>
            </dd>
          </router-link>
        </dl>
      </div>
    </div>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  export default {
      components: {
          headTitle
      },
      methods: {
          returnFunc(){
              this.$router.go(-1)
          }
      }
  }
</script>

<style scoped>
  header{
    background: transparent;
  }
  .headImg{
    height: 218px;
    background: url("./image/0.jpg") no-repeat;
    background-size: 100%;
  }
  .btn{
    padding: 10px 0;
    margin: 0 0 20px 0;
  }
  .btn ul{
    overflow: hidden;
  }
  .btn li{
    width: 50%;
    float: left;
  }
  .btn button{
    line-height: 44px;
    padding: 0 34px;
    border: 1px solid transparent;
  }
  .btn .addBookshelf{
    padding: 0 0 0 44px;
    background: url("./image/icon111.png") no-repeat;
    background-size: 36%;
    margin: 0 0 0 60px;
  }
  .btn .reading{
    border-radius: 40px;
    background: #FA6F5E;
    color: #ffffff;
    margin: 0 0 0 10px;
  }
  .content{
    padding: 0 16px;
  }
  .content p span{
    color: #FA6F5E;
  }
  .content p:first-of-type{
    font-size: 16px;
    color: #333333;
  }
  .list{
    border-top: 10px solid #F6F6F6;
    padding: 0 16px;
  }
  .list .title h6{
    padding: 10px 0;
    font-size: 18px;
    color: #333333;
  }
  .list dl{
    overflow: hidden;
  }
  .list .chapter dt{
    width: 45%;
    border-radius: 20px;
    overflow: hidden;
    float: left;
  }
  .list .chapter dd{
    width: 55%;
    float: left;
    padding: 0 0 0 14px;
  }
  .list .chapter dd h6{
    font-size: 16px;
    color: #333333;
  }
  .list .chapter dd span{
    float: right;
    font-size: 16px;
    line-height: 38px;
  }
  .list .chapter dd p{
    clear: right;
  }
</style>
