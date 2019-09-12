<template>
  <section>
    <head-title>
      <span @click="returnFunc" slot="return"><i class="mui-icon mui-icon-back"></i></span>
    </head-title>
    <div class="head-pic">
      <img src="./image/0.jpg" width="100%" alt="">
      <div class="head-title">
        {{comicInfo.name}}
        <p>
          <span class="iconfont iconxingxing"></span>
          <span class="iconfont iconxingxing"></span>
          <span class="iconfont iconxingxing"></span>
        </p>
      </div>
    </div>
    <div class="btn">
      <ul>
        <li><button @click="addBookshelf" class="addBookshelf">加入书架</button></li>
        <li><button class="reading">开始阅读</button></li>
      </ul>
    </div>
    <div class="content">
      <p>作者：{{comicInfo.author}} &nbsp;&nbsp;&nbsp;<span>{{comicInfo.endState | endState}}</span></p>
      <p>{{comicInfo.introduction}}</p>
    </div>
    <div class="list">
      <div class="title">
        <h6>章节列表（47）</h6>
        <span></span>
      </div>
      <div class="chapter">
        <dl v-for="chapter in chapters">
          <router-link to="/chapter">
            <dt><img src="" width="100%" alt=""></dt>
            <dd>
              <h6>{{chapter.title}}&nbsp;{{chapter.name}}</h6>
              <span>免费</span>
              <p>{{chapter.publishTime}}</p>
            </dd>
          </router-link>
        </dl>
      </div>
    </div>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import {mapState} from 'vuex'
  export default {
      data(){
          return{
            bookId: 0,
            comicId: {}
          }
      },
      components: {
          headTitle
      },
      methods: {
          returnFunc(){
              this.$router.go(-1)
          },
          addBookshelf(){
            this.$store.dispatch('addBookshelf',this.comicId)
          }
      },
      created() {
          this.bookId = this.$route.query.bookId
          this.comicId = {"bookId": this.bookId}
          this.$store.dispatch('getComicInfo',this.comicId)
          let setPage = {"bookId": this.bookId,"page": 1,"pageSize": 3}
          this.$store.dispatch('getChapters',setPage)
      },
      computed: {
          ...mapState(['comicInfo']),
          ...mapState(['chapters']),
          ...mapState(['message'])
      }
  }
</script>

<style scoped>
  header{
    background: transparent;
  }
  .head-pic{
    position: relative;
  }
  .head-title{
    top: 60%;
    left: 5%;
    color: #ffffff;
    font-size: 20px;
    position: absolute;
  }
  .head-title p{
    margin: 6px 0 0 0;
  }
  .head-title p span{
    color: #FC5F45;
    margin: 0 0 0 4px;
    font-size: 14px;
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
