<template>
  <section>
    <div class="head-pic">
      <head-title>
        <span @click="returnFunc" slot="return"><i class="mui-icon mui-icon-back"></i></span>
        <span slot="right"></span>
      </head-title>
      <img :src="comicInfo.bannerImagePath" width="100%" alt="">
      <div class="head-title">
        {{comicInfo.name}} <br>
        <p class="tags">
          <span>{{comicInfo.tags}}</span>
        </p>
        <!--评分功能-->
        <!--<span @click="handleScoring">
          <i v-for="item in 5" class="iconfont iconshoucangxingxing-xianxing"></i>
          去评分
        </span>-->
      </div>
    </div>
    <div class="btn">
      <ul>
        <li><button @click="addBookshelf" :class="['addBookshelf',{addColor: comicInfo.collectState === 1}]">{{comicInfo.collectState | filterCollect}}</button></li>
        <li>
          <router-link class="reading" :to="url+this.bookId+'\&chapterId='+this.$store.getters.handleRead">
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
        <span @click="handleSort(isSelected)">
          <a :class="{'active': isSelected}">正序</a>
          <a :class="{'active': !isSelected}">倒序</a>
        </span>
      </div>
      <div class="chapter">
        <dl v-for="chapter in chapters">
          <router-link :to="url+chapter.bookId+'\&chapterId='+chapter.serialNumber+'\&readPermission='+chapter.readPermission">
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
  import {Toast,Switch} from 'mint-ui';
  import {reqAddBookshelf} from "../../api";
  import {mapState} from 'vuex'
  import storageUtil from "../../util/storageUtil/storageUtil";
  export default {
      data(){
          return{
            bookId: 0,
            comicId: {},
            url: '/chapter?bookId=',
            tipsText: '',
            isShow: false,     //评星窗口
            isSelected: true,  //排序选中
            sortType: 1        //排序方式 1正序 2倒序
          }
      },
      components: {
          headTitle,
          scorePopup
      },
      inject: ['reload'],
      methods: {
          refresh(){
              this.reload()
          },
          returnFunc(){
              this.$router.go(-1)
          },
          async addBookshelf(){
             let result = await reqAddBookshelf(this.comicId);
             if (result.state === 'ok'){
                 Toast({
                     message: result.message,
                     iconClass: 'iconfont iconic_check'
                 });
                 this.refresh()
                 return
             }
             Toast({
                  message: result.message,
                  iconClass: 'iconfont iconcuowu'
             });
          },
          /* 显示评分窗口 */
          /*handleScoring(){
            this.isShow = true
          },*/
          closePopup(hide){
              this.isShow = hide
          },
          getChapters(sortType){
              let setPage = {"bookId": this.bookId,"sortType": sortType}
              this.$store.dispatch('getChapters',setPage)
          },
          handleSort(isSelected){
            this.isSelected = !isSelected
            if (this.isSelected === true){
                this.getChapters(this.sortType = 1)
                return
            }
            this.getChapters(this.sortType = 2)
          }
      },
      created() {
          this.bookId = this.$route.query.bookId
          this.comicId = {"bookId": this.bookId}
          this.$store.dispatch('getComicInfo',this.comicId)
          this.getChapters(this.sortType)
      },
      computed: {
          ...mapState(['comicInfo']),
          ...mapState(['chapters']),
          ...mapState(['message'])
      },
      watch: {
          comicInfo: {
              deep: true, // 深度监视,将最新的值保存到localStorage
              handler: storageUtil.saveStorage
          }
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
  .head-title p{
    margin: 2% 0 0 0;
  }
  .head-title p span{
    padding: 1% 2%;
    background: orange;
    color: #ffffff;
    font-size: 1.2rem;
    border-radius: 4px;
  }
  /* 评星样式 */
  /*.head-title span{
    font-size: 1.4rem;
    line-height: 2.6rem;
  }
  .head-title span i{
    color: #FC5F45;
    margin-right: 1%;
    font-size: 1.6rem;
  }*/

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
  .btn .addColor{
    color: #FA6F5E;
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
  .list .title{
    display: flex;
    margin: 4% 0;
    justify-content: space-between;
  }
  .list .title h6{
    font-size: 18px;
    color: #333333;
    margin: 0;
  }
  .list .title span{
    background: #FA6F5E;
    border-radius: 40px;
    padding: 1px;
    overflow: hidden;
  }
  .list .title span a{
    color: #ffffff;
    font-size: 1.2rem;
    border-radius: 40px;
    display: inline-block;
    padding: 0 4px;
    float: left;
  }
  .list .title span a.active{
    background: #ffffff;
    color: #FA6F5E;
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
