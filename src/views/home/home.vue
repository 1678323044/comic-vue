<template>
  <section class="home">
    <banner></banner>
    <div class="neck-nav">
      <ul>
        <li>
          <router-link to="/memberArea">
            <img src="./image/icon0002.jpg" width="100%" alt="">
            <p>VIP专区</p>
          </router-link>
        </li>
        <li>
          <img src="./image/icon0001.jpg" width="100%" alt="">
          <p>充值优惠</p>
        </li>
        <li>
          <router-link to="/endingWorks">
            <img src="./image/icon0000.jpg" width="100%" alt="">
            <p>完美佳作</p>
          </router-link>
        </li>
      </ul>
    </div>
    <recommend :recommends="recommends" :changeRecommends="changeRecommends"></recommend>
  </section>
</template>

<script>
  import banner from '../../components/banner/banner'
  import recommend from '../../components/recommend/recommend'
  import {mapState} from 'vuex'
  export default {
      name: 'home',
      components: {
          banner,
          recommend
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
    margin: 2.5% 0 0;
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
    width: 33%;
    margin: 0 auto 5%;
  }
  .neck-nav ul li p{
    font-size: 1.6rem;
  }
</style>
