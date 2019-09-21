<template>
  <section>
    <div class="head-pic">
      <head-title>
        <router-link to="" slot="return" @click.native="returnFunc">
          <i class="mui-icon mui-icon-back"></i>
        </router-link>
      </head-title>
      <img :src="comicInfo.bannerImagePath" width="100%" alt="">
      <div class="head-title">
        {{comicInfo.name}} <br>
        <span @click="handleScoring">
          <i v-for="item in 5" class="iconfont iconshoucangxingxing-xianxing"></i>
          去评分
        </span>
      </div>
    </div>
    <div class="btn">
      <ul>
        <li><button @click="addBookshelf" class="addBookshelf">加入书架</button></li>
        <li>
          <router-link class="reading" :to="url+this.bookId+param+this.$store.getters.handleRead">
            {{comicInfo.provChapterTitle | filterReading}}
          </router-link>
        </li>
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
          <router-link :to="url+chapter.bookId+param+chapter.chapterId">
            <dt><img :src="chapter.coverImagePath" width="100%" alt=""></dt>
            <dd>
              <h6>{{chapter.title}}&nbsp;{{chapter.name}}</h6>
              <span v-if="chapter.readPermission === 0">免费</span>
              <span v-else>{{chapter.readingCoin}}金币</span>
              <p>{{chapter.publishTime}}</p>
            </dd>
          </router-link>
        </dl>
      </div>
    </div>
    <score-popup v-show="isShow" @closePopup="closePopup"></score-popup>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import scorePopup from "../../components/scorePopup/scorePopup";
  import {Toast} from 'mint-ui';
  import {reqAddBookshelf} from "../../api";
  import {mapState} from 'vuex'
  export default {
      data(){
          return{
            bookId: 0,
            comicId: {},
            url: '/chapter?bookId=',
            param: '&chapterId=',
            tipsText: '',
            isShow: false
          }
      },
      components: {
          headTitle,
          scorePopup
      },
      methods: {
          returnFunc(){
              this.$router.go(-1)
          },
          async addBookshelf(){
             let result = await reqAddBookshelf(this.comicId);
             if (result.state === 'ok'){
                 console.log(result.state)
                 Toast({
                     message: result.message,
                     iconClass: 'iconfont iconic_check'
                 });
             }
              Toast({
                  message: result.message,
                  iconClass: 'iconfont iconcuowu'
              });
          },
          handleScoring(){
            this.isShow = true
          },
          closePopup(hide){
              this.isShow = hide
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
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: transparent;
  }
  .head-pic{
    position: relative;
  }
  .head-title{
    bottom: 0;
    left: 0;
    width: 100%;
    color: #ffffff;
    font-size: 20px;
    position: absolute;
    background: linear-gradient(transparent,#333333);
    padding: 7% 0 5% 5%;
    box-sizing: border-box;
  }
  .head-title span{
    font-size: 1.4rem;
    line-height: 2.6rem;
  }
  .head-title span i{
    color: #FC5F45;
    margin-right: 1%;
    font-size: 1.6rem;
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
    text-align: center;
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
    display: block;
    width: 60%;
    padding: 6%;
    margin: 0 auto;
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
    border-radius: 8px;
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
    font-size: 1.8rem;
    line-height: 38px;
    color: #333333;
  }
  .list .chapter dd p{
    clear: right;
  }
</style>
