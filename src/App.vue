<template>
    <div id="app">
        <!--loader-->
        <loading :active.sync="isLoading"
                 :can-cancel="false"
                 color="#27348b"
                 :height="150"
                 :width="200"
                 :is-full-page="true"></loading>
        <div  v-if="!isLoading">

            <router-view></router-view>
        </div>
    </div>

</template>

<script>
    import Loading from 'vue-loading-overlay';
    import Footer from './partials/Footer';
    export default {
        name: 'app',
        components: {
            Loading,
            Footer
        },
        data() {
            return {
                isLoading: true,
            }
        },
        mounted() {
            this.$store.dispatch('addRandomProperties').then(() => {
                this.isLoading = false;
            });
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "./assets/scss/style";
</style>
