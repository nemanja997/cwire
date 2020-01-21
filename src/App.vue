<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>
import HomeView from './views/HomeView';
export default {
  name: 'app',
  components: {
      HomeView
  }
}
</script>

<style lang="scss"  rel="stylesheet/scss">
  @import "./assets/scss/style";
</style>
