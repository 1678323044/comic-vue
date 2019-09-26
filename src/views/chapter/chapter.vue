<template>
  <section :class="{'public-main': popupVisible}" :style="[{'overflow': val.v},{'height': val.h}]">
    <head-title v-show="isShow" class="float-bar top" :title="comicContents.title+comicContents.name">
      <span @click="returnFunc" slot="return"><i class="mui-icon mui-icon-back" style="color: white"></i></span>
      <span slot="right"></span>
    </head-title>
    <div @click="handleShow(isShow)" class="chapter">
      <ul>
        <li><img src="./image/800.jpg" alt=""></li>
        <li><img src="./image/801.jpg" alt=""></li>
        <li><img src="./image/802.jpg" alt=""></li>
      </ul>
    </div>
    <div v-show="isShow" class="float-bar bottom">
      <div class="turning-page">
        <ul>
          <li @click="handleFlip(comicContents.id - 1)">
            <i class="mui-icon mui-icon-arrowleft"></i>
            上一话
          </li>
          <li @click="backTop">
            <i class="mui-icon mui-icon-arrowup"></i>
            顶部TOP
          </li>
          <li @click="handleFlip(comicContents.id + 1)">
            <i class="mui-icon mui-icon-arrowright"></i>
            下一话
          </li>
        </ul>
      </div>
      <mt-tabbar>
        <mt-tab-item id="tab1" @click.native="handleCatalog">
          <i class="iconfont iconshouye"></i>
          目录
        </mt-tab-item>
        <mt-tab-item id="tab2">
          <i class="iconfont iconjindusvg"></i>
          加入书架
        </mt-tab-item>
        <mt-tab-item id="tab3"></mt-tab-item>
        <mt-tab-item id="tab4"></mt-tab-item>
      </mt-tabbar>
    </div>
    <!-- 遮罩层 -->
    <div class="mask" v-show="maskIsShow">
      <p>{{comicContents.title}}</p>
      <p>立即阅读需要支付<span>{{comicContents.readingCoin}}</span>金币</p>
      <button @click="handleBuy">购买本话</button>
      <p>金币余额：缺少该字段</p>
    </div>
    <!-- 侧边目录栏 -->
    <mt-popup
      v-model="popupVisible"
      modal="true"
      closeOnClickModal="true"
      position="right">
      <h6>{{comicContents.name}}</h6>
      <div class="neck">
        <span>共{{directoryNumber}}话</span>
        <span>{{serialState | filterSerialState}}</span>
      </div>
      <ul>
        <li v-for="(chapter,index) in chapters" :key="index">
          <p>{{chapter.title}}&nbsp;{{chapter.name}}</p>
        </li>
      </ul>
    </mt-popup>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import storageUtil from "../../util/storageUtil/storageUtil";
  import {reqAddBookshelf,reqBuyChapter} from '../../api/index'
  import {mapState} from 'vuex'
  import {Toast,MessageBox} from 'mint-ui'
  export default {
      data(){
        return{
            popupVisible: false,   // 显示章节列表,并禁止漫画内容上下滚动
            pageIndex: {},
            bookId: 0,
            isShow: false,
            maskIsShow: false,    // 遮罩层隐藏
            val: {"v": 'visible',"h": "auto"},       // 默认允许漫画内容上下滚动
            directoryNumber: storageUtil.readStorage().chapterTotalQuantity, // 总目录数
            serialState: storageUtil.readStorage().endState,                 // 漫画连载状态
            collectState: storageUtil.readStorage().collectState,            // 漫画收藏状态
            readPermission: 0                                                // 阅读权限 0 免费 1 VIP/阅读币
        }
      },
      components: {
          headTitle
      },
      created() {
          //发送获取漫画内容的请求
          this.bookId = this.$route.query.bookId
          this.pageIndex = {"bookId": this.bookId,"chapterId": this.$route.query.chapterId}
          this.$store.dispatch('getComicContent',this.pageIndex)

          //判断该章节是否需要付费
          this.readPermission = this.$route.query.readPermission
          if (this.readPermission === '1'){ // 1 需要付费
              this.maskIsShow = true                 // 开启遮罩层
              this.val = {"v": 'hidden',"h": "100%"} // 禁止漫画内容上下滚动
              this.isShow = true                     // 显示头部标题和返回键
          }
      },
      methods: {
        returnFunc(){
            this.$router.go(-1)
        },
        handleCatalog(){
            this.popupVisible = true
            let setPage = {"bookId": this.bookId}
            this.$store.dispatch('getChapters',setPage)
        },
        backTop(){
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        },
        handleFlip(pageIndex){
          if (pageIndex === 0){
              Toast('没有上一章了');
              return
          }if (pageIndex === 2){
              Toast('没有下一章了');
              return
          }
          let url = `/reading.do?bookId=${this.bookId}&chapterId=${pageIndex}`
          this.$router.replace(url)
        },
        handleShow(isShow){
            this.isShow = !isShow
        },
        async handleBuy(){
            let result = await reqBuyChapter(this.pageIndex);
            if (result.state === 'ok'){
                this.val = {"v": 'visible',"h": "auto"} //允许漫画内容上下滚动
                this.isShow = false                     //隐藏头部标题
                this.maskIsShow = false                 // 关闭遮罩层
                Toast({
                    message: result.message,            // 提示购买金币成功
                });
                return
            }
            Toast({
                message: result.message,            // 提示购买金币失败
            });
        },
        refresh(){
            this.reload()
        }
      },
      computed: {
          ...mapState(['chapters']),
          ...mapState(['comicContents'])
      },
      inject: ['reload'],
      destroyed(){
          if (this.collectState === 0){
              MessageBox.confirm('是否将该漫画加入书架？').then(async action => {
                  let param = {'bookId': this.bookId};
                  let result = await reqAddBookshelf(param);
                  if (result.state === 'ok'){
                      Toast({
                          message: result.message,
                          iconClass: 'iconfont iconic_check'
                      });
                      this.refresh()
                  }
              }).catch(hide => {
              })
          }
      }
  }
</script>

<style scoped>
  .iconfont{
    display: block;
    font-size: 19px;
    margin: 0 0 5px 0;
  }
  .mint-tab-item{
    color: #999999;
  }
  .mint-tabbar{
    box-shadow: 6px 0px 3px #aaaaaa;
    position: static;
    background: transparent;
    padding: 5px 0;
    font-size: 14px;

  }
  .mint-tabbar .mint-tab-item{
    color: #ffffff;
  }
  .chapter li img{
    width: 100%;
  }
  .float-bar{
    position: fixed;
    width: 100%;
    background: rgba(40, 40, 40, 0.95);
    color: #ffffff;
  }
  .float-bar.top{
    top: 0;
    line-height: 60px;
    text-align: center;
    font-size: 16px;
    z-index: 99999;
  }
  .float-bar.top span{
    float: left;
    line-height: 60px;
    width: 10%;
  }
  .float-bar.top h6{
    float: left;
    width: 90%;
    line-height: 60px;
    text-indent: -37px;
    font-size: 16px;
    margin: 0;
    color: #ffffff;
  }
  .float-bar.bottom{
    bottom: 0;
  }
  .float-bar.bottom .turning-page ul{
    overflow: hidden;
    line-height: 60px;
    font-size: 16px;
  }
  .float-bar.bottom .turning-page li{
    float: left;
    width: 33.33%;
    text-align: center;
  }
  .float-bar.bottom .turning-page li i{
    font-size: 20px;
  }
  /* 侧边目录栏 */
  .mint-popup{
    height: 100%;
    width: 70%;
    overflow-y: auto;
    background: rgb(51,51,51);
  }
  .mint-popup h6{
    font-size: 2.1rem;
    text-align: center;
    margin: 8% 0;
    color: #ffffff;
  }
  .mint-popup .neck{
    background: #000;
    line-height: 2.2rem;
    padding: 5% 0 5% 6%;
    font-size: 1.6rem;
    color: #ffffff;
  }
  .mint-popup .neck span{
    margin: 0 4% 0 0;
  }
  .mint-popup ul li{
    line-height: 3.4rem;
    color: #ffffff;
    padding: 0 0 0 6%;
  }
  .mint-popup ul li p{
    margin: 0;
    padding: 2% 0;
    color: #ffffff;
    font-size: 1.6rem;
    border-bottom: solid 1px #444444;
  }
  /* 遮罩层 */
  .mask{
    position: fixed;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    padding: 90% 0 0 0;
    text-align: center;
    background: linear-gradient(transparent,#000000,#000000);
  }
  .mask p{
    color: #ffffff;
    font-size: 1.6rem;
  }
  .mask p:nth-child(1){
    margin: 0 0 6% 0;
  }
  .mask p:nth-child(2){
    margin: 0 0 4% 0;
  }
  .mask p span{
    font-size: 2.4rem;
    color: orange;
  }
  .mask button{
    width: 80%;
    border-radius: 40px;
    background: #FA6F5E;
    border: none;
    padding: 3% 0;
    color: #ffffff;
    font-size: 1.6rem;
    margin: 0 0 10% 0;
  }
</style>
