<template>
  <section class="one-level-page">
    <head-title title="分类">
      <span slot="return"></span>
      <span slot="search"><i class="mui-icon mui-icon-search"></i></span>
    </head-title>
    <nav>
      <div>
        <a v-for="classItem in classes" href="#">{{classItem.name}}</a>
      </div>
      <div v-show="isShow">
        <a href="#" :class="{active: item.isSelected}" @click="handleComicState(item)" v-for="item in comicState">{{item.state}}</a>
      </div>
      <div>
        <a href="#">最新更新</a>
        <a href="#">总点击</a>
        <span v-on:click="showClassify(isShow)"><i class="mui-icon mui-icon-arrowup"></i>筛选</span>
      </div>
    </nav>
    <comic-list></comic-list>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import comicList from '../../components/comicList/comicList'
  import {mapState} from 'vuex'
  export default {
      data(){
          return{
              isShow: false,
              comicState: [
                {state:'全部', isSelected: true},
                {state:'连载', isSelected: false},
                {state:'完结', isSelected: false}
              ]
          }
      },
      components: {
          headTitle,
          comicList
      },
      created(){
        this.$store.dispatch('getClassify')
      },
      computed: {
          ...mapState(['classes'])
      }
      ,
      methods: {
          showClassify(i){
            if (i === true){
                this.isShow = false
            }else if (i === false) {
                this.isShow = true
            }
          },
          handleComicState(item){
            this.comicState.forEach(function (obj) {
              obj.isSelected = false
            });
            item.isSelected = true
          }
      }
  }
</script>

<style scoped>
  .one-level-page{
    margin-top: 50px;
  }
  .mui-icon-search{
    color: #FC5F45;
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
    border: solid 1px #FC5F45;
    color: #FC5F45;
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
