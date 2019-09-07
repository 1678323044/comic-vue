<template>
  <section class="one-level-page">
    <head-title title="书架"></head-title>
    <neck-tab></neck-tab>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img alt="" class="mui-media-object mui-pull-left" src="./image/210.jpg">
          <div class="mui-media-body">
            永恒至尊
            <p class="mui-ellipsis">作者：风人动漫</p>
            <p class="mui-ellipsis">上次看到：第2话</p>
            <p class="update">更新至：第29话</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img alt="" class="mui-media-object mui-pull-left" src="./image/210.jpg">
          <div class="mui-media-body">
            永恒至尊
            <p class="mui-ellipsis">作者：风人动漫</p>
            <p class="mui-ellipsis">上次看到：第2话</p>
            <p class="update">更新至：第29话</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img alt="" class="mui-media-object mui-pull-left" src="./image/210.jpg">
          <div class="mui-media-body">
            永恒至尊
            <p class="mui-ellipsis">作者：风人动漫</p>
            <p class="mui-ellipsis">上次看到：第2话</p>
            <p class="update">更新至：第29话</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img alt="" class="mui-media-object mui-pull-left" src="./image/210.jpg">
          <div class="mui-media-body">
            永恒至尊
            <p class="mui-ellipsis">作者：风人动漫</p>
            <p class="mui-ellipsis">上次看到：第2话</p>
            <p class="update">更新至：第29话</p>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import neckTab from '../../components/neckTab/neckTab'
  export default {
      components: {
          headTitle,
          neckTab
      }
  }
</script>

<style scoped>
  .mui-table-view .mui-media-object{
    height: auto;
    max-width: 120px;
  }
  .mui-table-view .mui-media-object.mui-pull-left{
    border-radius: 10px;
  }
  .mui-ellipsis{
    line-height: 34px;
  }
  .update{
    margin-top: 50px;
    color: orange;
  }
</style>
