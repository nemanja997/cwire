<template>
  <div id="app">
    <home-view></home-view>
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
