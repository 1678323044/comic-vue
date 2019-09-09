<template>
  <section class="one-level-page">
    <head-title title="分类"></head-title>
    <nav>
      <div>
        <a class="active" href="#">全部</a>
        <a href="#">韩漫</a>
        <a href="#">日漫</a>
        <a href="#">国产</a>
        <a href="#">伦理</a>
        <a href="#">都市</a>
        <a href="#">校园</a>
        <a href="#">养成</a>
        <a href="#">恋爱</a>
        <a href="#">恐怖</a>
        <a href="#">魔幻</a>
        <a href="#">古风</a>
        <a href="#">异能</a>
        <a href="#">总裁</a>
      </div>
      <div>
        <a class="active" href="#">全部</a>
        <a href="#">连载</a>
        <a href="#">完结</a>
      </div>
      <div>
        <a class="active" href="#">全部</a>
        <a href="#">免费</a>
        <a href="#">付费</a>
      </div>
      <div>
        <a class="active" href="#">最新更新</a>
        <a href="#">总点击</a>
        <a href="#">收藏</a>
        <span><i class="mui-icon mui-icon-arrowup"></i>筛选</span>
      </div>
    </nav>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <div class="pic">
            <span>NO.1</span>
            <img alt="" class="mui-media-object mui-pull-left" src="../../common/image/210.jpg">
          </div>
          <div class="mui-media-body">
            永恒至尊
            <p class="mui-ellipsis">作者：风人动漫</p>
            <p class="text">以蛊入道，亘古未有，蛊龙仙尊叶尊遭遇问情天劫，兵解重修，夺舍到了废柴富二代叶尊
              的身上，要想再次渡劫，必须勘误情之一字。刚一醒来，绝色女总裁带着女儿驾到，且看叶尊如何红尘炼心，宠娃护妻，
              一路逆袭，重回人生巅峰。</p>
            <p class="tag"><span>新作</span><span>推荐</span></p>
            <p class="update">2019-09-06 更新至第25话</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <div class="pic">
            <span class="two">NO.2</span>
            <img alt="" class="mui-media-object mui-pull-left" src="../../common/image/210.jpg">
          </div>
          <div class="mui-media-body">
            永恒至尊
            <p class="mui-ellipsis">作者：风人动漫</p>
            <p class="text">以蛊入道，亘古未有，蛊龙仙尊叶尊遭遇问情天劫，兵解重修，夺舍到了废柴富二代叶尊
              的身上，要想再次渡劫，必须勘误情之一字。刚一醒来，绝色女总裁带着女儿驾到，且看叶尊如何红尘炼心，宠娃护妻，
              一路逆袭，重回人生巅峰。</p>
            <p class="tag"><span>新作</span><span>推荐</span></p>
            <p class="update">2019-09-06 更新至第25话</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <div class="pic">
            <span class="three">NO.3</span>
            <img alt="" class="mui-media-object mui-pull-left" src="../../common/image/210.jpg">
          </div>
          <div class="mui-media-body">
            永恒至尊
            <p class="mui-ellipsis">作者：风人动漫</p>
            <p class="text">以蛊入道，亘古未有，蛊龙仙尊叶尊遭遇问情天劫，兵解重修，夺舍到了废柴富二代叶尊
              的身上，要想再次渡劫，必须勘误情之一字。刚一醒来，绝色女总裁带着女儿驾到，且看叶尊如何红尘炼心，宠娃护妻，
              一路逆袭，重回人生巅峰。</p>
            <p class="tag"><span>新作</span><span>推荐</span></p>
            <p class="update">2019-09-06 更新至第25话</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <div class="pic">
            <img alt="" class="mui-media-object mui-pull-left" src="../../common/image/210.jpg">
          </div>
          <div class="mui-media-body">
            永恒至尊
            <p class="mui-ellipsis">作者：风人动漫</p>
            <p class="text">以蛊入道，亘古未有，蛊龙仙尊叶尊遭遇问情天劫，兵解重修，夺舍到了废柴富二代叶尊
              的身上，要想再次渡劫，必须勘误情之一字。刚一醒来，绝色女总裁带着女儿驾到，且看叶尊如何红尘炼心，宠娃护妻，
              一路逆袭，重回人生巅峰。</p>
            <p class="tag"><span>新作</span><span>推荐</span></p>
            <p class="update">2019-09-06 更新至第25话</p>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'

  export default {
      data(){
          return{
          }
      },
      components: {
          headTitle,

      }
  }
</script>

<style scoped>
  .one-level-page{
    margin-top: 50px;
  }
  nav{
    padding: 0 16px;
  }
  nav a{
    padding: 0 13px;
    text-align: center;
    display: inline-block;
    font-size: 12px;
    color: #333333;
    margin: 0 0 8px 0;
  }
  nav a.active{
    border: solid 1px red;
    color: red;
    border-radius: 20px;
  }
  nav span{
    float: right;
  }
  nav span i{
    font-size: 20px;
  }
  .mui-media-body{
    font-size: 18px;
  }
  .mui-table-view .mui-media-object{
    height: auto;
    max-width: 120px;
  }
  .mui-table-view .mui-media-object.mui-pull-left{
    border-radius: 10px;
  }
  .mui-table-view .pic{
    position: relative;
  }
  .mui-table-view .pic span{
    width: 60px;
    line-height: 36px;
    background: #DB383C;
    position: absolute;
    left: 0;
    top: 10px;
    border-bottom-right-radius: 40px;
    border-top-right-radius: 40px;
    text-align: center;
    font-size: 14px;
    color: #ffffff;
  }
  .mui-table-view .pic .two{
    background: #FD7746;
  }
  .mui-table-view .pic .three{
    background: #6AE867;
  }
  .mui-ellipsis{
    line-height: 34px;
  }
  .update{
    margin-top: 50px;
    color: orange;
  }
</style>
