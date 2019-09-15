<template>
  <div id="app">
    <router-view/>
    <footer-menu v-show="$route.meta.showFooter"></footer-menu>
  </div>
</template>

<script>
  import footerMenu from './components/footerMenu/footerMenu'
  export default {
    name: 'App',
    components: {
        footerMenu
    }
  }
</script>
