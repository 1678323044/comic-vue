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
    <comic-list></comic-list>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import comicList from '../../components/comicList/comicList'
  export default {
      data(){
          return{
          }
      },
      components: {
          headTitle,
          comicList
      }
  }
</script>

<style scoped>
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
  /*
  .mui-table-view .mui-media-object{
    height: auto;
    max-width: 120px;
  }
  .mui-table-view:before{
    background-color: transparent;
  }
  .text{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .tag{
    margin: 20px 0 0 0;
    color: #ffffff;
    line-height: 35px;
    font-size: 10px;
  }
  .tag span{
    padding: 6px;
    background: #2ac845;
    margin: 0 5px 0 0;
    border-radius: 4px;
  }
  .mui-table-view .mui-media-body{
    white-space: initial;
  }
  .update{
    color: orange;
  }*/
</style>
