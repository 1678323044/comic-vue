<template>
  <section class="public-main">
    <head-title title="分类">
      <router-link to="" slot="return"></router-link>
      <router-link to="/search" slot="right"><i class="iconfont iconsousuo"></i></router-link>
    </head-title>
    <section class="classify-list">
      <nav>
        <form action="" method="">
          <label :class="{'active': item.state}" v-for="(item,index) in classes" :key="index">
            <input @change="handleClassify(item,'category')" v-model="categoryId" type="radio" :value="item.id">{{item.name}}
          </label>
        </form>
        <form action="" method="" v-show="isShow">
          <label :class="{'active': item.isSelected}" v-for="item in comicState">
            <input @change="handleClassify(item,'state')" v-model="endState" type="radio" :value="item.id">{{item.name}}
          </label>
        </form>
        <form action="" method="">
          <label :class="{'active': item.isSelected}" v-for="item in comicHot">
            <input @change="handleClassify(item,'hot')" v-model="orderItem" type="radio" :value="item.id">{{item.name}}
          </label>
          <span v-on:click="showClassify(isShow)"><i class="mui-icon mui-icon-arrowup"></i>筛选</span>
        </form>
      </nav>
      <comic-list :comicList="comicList"></comic-list>
    </section>
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
                {name:'全部', id: 0, isSelected: true},
                {name:'连载', id: 1, isSelected: false},
                {name:'完结', id: 2, isSelected: false}
              ],
              comicHot: [
                  {name: '最新更新',id: 1,isSelected: true},
                  {name: '总点击',id: 2,isSelected: false}
              ],
              categoryId: 0,
              endState: 0,
              orderItem: 1
          }
      },
      components: {
          headTitle,
          comicList
      },
      created(){
        this.$store.dispatch('getClassify');
        this.$store.dispatch('getQueryComics')
      },
      computed: {
          ...mapState(['classes']),
          ...mapState(['comicList'])
      },
      methods: {
          showClassify(i){
            if (i === true){
                this.isShow = false
            }else if (i === false) {
                this.isShow = true
            }
          },
          handleClassify(item,param){
            //处理选中状态
            if (param === 'category'){
                this.classes.forEach(function (obj) {
                    obj.state = false
                });
                item.state = true
            }
            if (param === 'state'){
                this.comicState.forEach(function (obj) {
                    obj.isSelected = false
                });
                item.isSelected = true
            }
            if (param === 'hot'){
                this.comicHot.forEach(function (obj) {
                  obj.isSelected = false
                });
                item.isSelected = true
            }
            //发送条件请求
            let query = {"categoryId": this.categoryId,"endState": this.endState,"orderItem": this.orderItem}
            this.$store.dispatch('getQueryComics',query)
          }
      }
  }
</script>

<style scoped>
  .mui-icon-search{
    color: #FC5F45;
  }
  .classify-list{
    height: 84%;
    overflow: auto!important;
  }
  nav{
    padding: 0 16px;
  }
  nav form{
    margin: 0 0 4% 0;
  }
  nav label{
    padding: 3px 13px;
    text-align: center;
    display: inline-block;
    font-size: 14px;
    color: #333333;
    margin: 0 10px 0 0;
  }
  nav label.active{
    border: solid 1px #FC5F45;
    color: #FC5F45;
    border-radius: 20px;
  }
  nav label input{
    display: none;
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
