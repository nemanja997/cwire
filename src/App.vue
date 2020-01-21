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
            <filter-tab title="Filters" :expanded="false">

            </filter-tab>
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
    import Loading from 'vue-loading-overlay';
    import FilterTab from './partials/FilterTab';

    export default {
        name: 'app',
        components: {
            Loading,
            FilterTab
        },
        data() {
            return {
                isLoading: true,
            }
        },
        mounted() {
            this.$store.dispatch('addSearchedProperties').then(() => {
                this.isLoading = false;
            });
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "./assets/scss/style";
</style>
