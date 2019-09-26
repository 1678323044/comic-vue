<template>
  <div id="app">
    <router-view v-if="isRefresh"/>
    <footer-menu v-show="$route.meta.showFooter"></footer-menu>
  </div>
</template>

<script>
  import footerMenu from './components/footerMenu/footerMenu'
  export default {
    name: 'App',
    data(){
      return{
          isRefresh: true
      }
    },
    components: {
        footerMenu
    },
    methods: {
        reload(){
          this.isRefresh = false
          this.$nextTick(function () {
              this.isRefresh = true
          })
        }
    },
    provide(){
        return{
            reload: this.reload
        }
    }
  }
</script>
