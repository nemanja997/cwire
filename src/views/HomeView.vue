<template>
    <section class="container position-relative">
        <loading :active.sync="isLoading"
                 :can-cancel="false"
                 color="#27348b"
                 :height="150"
                 :width="200"
                 :is-full-page="true"></loading>
        <filter-tab title="Filters" :expanded="false">
            <div>
                <h1>Filters</h1>
            </div>
        </filter-tab>
        <properties-stack v-if="!isLoading"></properties-stack>
    </section>
</template>

<script>
    import FilterTab from '../partials/FilterTab';
    import PropertiesStack from '../components/PropertiesStack';
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: 'SwipeableCards',
        components: {
            FilterTab,
            Loading,
            PropertiesStack
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
<style lang="scss" scoped>

</style>