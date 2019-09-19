<template>
  <section class="list">
    <dl v-for="sellWellComic in sellWellComics">
      <router-link :to="url+sellWellComic.id">
        <dt><img :src="sellWellComic.coverImagePath" alt=""></dt>
        <dd>
          <h6>{{sellWellComic.name}}</h6>
          <p>{{sellWellComic.tags}}</p>
        </dd>
      </router-link>
    </dl>
    <dl v-for="serialComic in serialComics">
      <router-link :to="url+serialComic.id">
        <dt><img :src="serialComic.coverImagePath" alt=""></dt>
        <dd>
          <h6>{{serialComic.name}}</h6>
          <p>{{serialComic.tags}}</p>
        </dd>
      </router-link>
    </dl>
    <dl v-for="memberEndComic in memberEndComics">
      <router-link :to="url+memberEndComic.id">
        <dt><img :src="memberEndComic.coverImagePath" alt=""></dt>
        <dd>
          <h6>{{memberEndComic.name}}</h6>
          <p>{{memberEndComic.tags}}</p>
        </dd>
      </router-link>
    </dl>
    <dl v-for="memberComic in memberComics">
      <router-link :to="url+memberComic.id">
        <dt><img :src="memberComic.coverImagePath" alt=""></dt>
        <dd>
          <h6>{{memberComic.name}}</h6>
          <p>{{memberComic.tags}}</p>
        </dd>
      </router-link>
    </dl>
  </section>
</template>

<script>
  export default {
    props: ['sellWellComics','serialComics','memberEndComics','memberComics'],
    data(){
        return{
            url: '/chapterList?bookId='
        }
    }
  }
</script>

<style scoped>
  .con .list{
    display: flex;
    flex-wrap: wrap;
  }
  .con .list dl{
    width: 32%;
    margin: 0 2% 0 0;
  }
  .con .list dl:nth-child(3n){
    margin-right: 0;
  }
  .con .list dl img{
    width: 100%;
    border-radius: 10px;
  }
  .con .list dd h6{
    color: #ffffff;
    font-size: 14px;
  }
</style>
