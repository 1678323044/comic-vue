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
        <h5>{{recommends[0].name}} <span><i class="mui-icon mui-icon-loop"></i>换一批</span></h5>
        <dl v-for="dataItem in recommend.datalist">
          <router-link :to="url+dataItem.id">
            <dt><img :src="dataItem.coverImagePath" width="100%" alt=""></dt>
            <dd>
              <h6>{{dataItem.name}}</h6>
              <p>{{dataItem.author}}</p>
            </dd>
          </router-link>
        </dl>
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
      computed: {
          ...mapState(['recommends'])
      }
  }
</script>

<style scoped>
  .home{
    padding-bottom: 50px;
  }
  .neck-nav{
    margin: 10px 0 0 0;
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
  }
  .con{
    overflow: hidden;
    margin: 0 0 30px 0;
  }
  .con h5{
    position: relative;
    padding: 0 0 0 10px;
    font-size: 18px;
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
    font-size: 12px;
    float: right;
    color: #999999;
  }
  .con h5 span i{
    margin: 0 4px 0 0;
    font-size: 17px;
    color: #666666;
    font-weight: bold;
  }
  .con dl{
    width: 33.33%;
    float: left;
    padding: 0 5px 4px;
    box-sizing: border-box;
  }
  .con dl dt{
    border-radius: 12px;
    overflow: hidden;
  }
  .con dd h6{
    margin: 3px 0;
    font-size: 14px;
    color: #333333;
    font-weight: bold;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .con dd p{
    font-size: 12px;
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
    line-height: 32px;
    color: #999999;
  }
</style>
