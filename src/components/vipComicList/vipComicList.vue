<template>
  <section>
    <dl v-for="sellWellComic in sellWellComics">
      <dt><img :src="sellWellComic.coverImagePath" alt=""></dt>
      <dd>
        <h6>{{sellWellComic.name}}</h6>
        <p>{{sellWellComic.tags}}</p>
      </dd>
    </dl>
    <dl v-for="serialComic in serialComics">
      <dt><img :src="serialComic.coverImagePath" alt=""></dt>
      <dd>
        <h6>{{serialComic.name}}</h6>
        <p>{{serialComic.tags}}</p>
      </dd>
    </dl>
    <dl v-for="memberEndComic in memberEndComics">
      <dt><img :src="memberEndComic.coverImagePath" alt=""></dt>
      <dd>
        <h6>{{memberEndComic.name}}</h6>
        <p>{{memberEndComic.tags}}</p>
      </dd>
    </dl>
    <dl v-for="memberComic in memberComics">
      <dt><img :src="memberComic.coverImagePath" alt=""></dt>
      <dd>
        <h6>{{memberComic.name}}</h6>
        <p>{{memberComic.tags}}</p>
      </dd>
    </dl>
  </section>
</template>

<script>
  export default {
    props: ['sellWellComics','serialComics','memberEndComics','memberComics']
  }
</script>

<style scoped>
  dl{
    float: left;
    width: 33.33%;
    padding: 0 10px 0 0;

  }
  dl img{
    width: 100%;
    border-radius: 10px;
  }
  dd h6{
    color: #ffffff;
    font-size: 14px;
  }
</style>
