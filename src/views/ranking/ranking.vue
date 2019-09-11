<template>
  <section class="one-level-page">
    <head-title title="排行">
      <span slot="return"></span>
      <span slot="search"><i class="mui-icon mui-icon-search"></i></span>
    </head-title>
    <neck-tab></neck-tab>
    <comic-list></comic-list>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  import neckTab from '../../components/neckTab/neckTab'
  import comicList from '../../components/comicList/comicList'
  export default {
      components: {
          headTitle,
          neckTab,
          comicList
      }
  }
</script>

<style>

</style>
