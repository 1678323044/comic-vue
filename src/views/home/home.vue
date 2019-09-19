<template>
  <section class="home">
    <banner></banner>
    <div class="neck-nav">
      <ul>
        <li>
          <router-link to="/memberArea">
            <img src="./image/icon111.png" width="100%" alt="">
            <p>VIP专区</p>
          </router-link>
        </li>
        <li>
          <img src="./image/icon111.png" width="100%" alt="">
          <p>充值优惠</p>
        </li>
        <li>
          <router-link to="/endingWorks">
            <img src="./image/icon111.png" width="100%" alt="">
            <p>完美佳作</p>
          </router-link>
        </li>
      </ul>
    </div>
    <main>
      <div class="con" v-for="recommend in recommends">
        <h5>{{recommend.name}}
          <span @click="changeContents(recommend.id)">
            <i v-show="recommend.changeState ? 1 : false" class="mui-icon mui-icon-loop"></i>
            {{recommend.changeState | filterReplace}}
          </span>
        </h5>
        <div class="con-list"><dl v-for="dataItem in changeRecommends.datalist || recommend.datalist">
          <router-link :to="url+dataItem.id">
            <dt><img :src="dataItem.coverImagePath" width="100%" alt=""></dt>
            <dd>
              <h6>{{dataItem.name}}</h6>
              <p>{{dataItem.author}}</p>
            </dd>
          </router-link>
        </dl></div>
        <router-link to="/classify"><button class="btn">查看更多 >></button></router-link>
      </div>
    </main>
  </section>
</template>

<script>
  import banner from '../../components/banner/banner'
  import {mapState} from 'vuex'
  export default {
      data(){
          return{
            url: '/chapterList?bookId='
          }
      },
      components: {
          banner
      },
      created() {
          this.$store.dispatch('getRecommends')
      },
      methods: {
        changeContents(id){
          let recommendId = {"id": id};

          this.$store.dispatch('getRecommendChange',recommendId)
        }
      },
      computed: {
          ...mapState(['recommends']),
          ...mapState(['changeRecommends'])
      }
  }
</script>

<style scoped>
  .home{
    padding: 0 0 50px 0;
  }
  .neck-nav{
    margin: 5% 0;
  }
  main{
    padding: 0 10px;
  }
  .neck-nav ul{
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: -webkit-flex;
    display: flex;
  }
  .neck-nav ul li{
    width: 33.33%;
    text-align: center;
  }
  .neck-nav ul li img{
    width: 40px;
    margin: 0 auto 5%;
  }
  .neck-nav ul li p{
    font-size: 1.6rem;
  }
  .con{
    overflow: hidden;
    margin: 0 0 30px 0;
  }
  .con h5{
    position: relative;
    padding: 0 0 0 10px;
    font-size: 2.0rem;
    font-weight: 600;
    color: #333333;
    line-height: 40px;
  }
  .con h5:before{
    content: '';
    width: 6px;
    height: 18px;
    background: #FC5F45;
    position: absolute;
    border-radius: 10px;
    left: 0;
    top: 10px;
  }
  .con h5 span{
    font-size: 1.4rem;
    float: right;
    color: #999999;
  }
  .con h5 span i{
    margin: 0 2px 0 0;
    font-size: 2.2rem;
    color: #666666;
    font-weight: bold;
  }
  .con .con-list{
    display: flex;
    flex-wrap: wrap;
  }
  .con .con-list dl{
    width: 31.66%;
    margin: 0 2.5% 2% 0;
    box-sizing: border-box;
  }
  .con .con-list dl:nth-child(3n){
    margin-right: 0;
  }
  .con .con-list dl dt{
    border-radius: 12px;
    overflow: hidden;
  }
  .con .con-list dl dt img{
    display: block;
  }
  .con .con-list dd h6{
    margin: 6% 0 5% 0;
    font-size: 1.6rem;
    color: #333333;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .con .con-list dd p{
    font-size: 1.5rem;
    color: #666666;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .con .btn{
    width: 100%;
    background: #f1f1f1;
    border-radius: 40px;
    border: none;
    padding: 4% 0;
    color: #999999;
    font-size: 1.6rem;
    margin: 4% 0 0 0;
  }
</style>
