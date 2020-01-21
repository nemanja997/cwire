<template>
    <section class="container position-relative">

        <filter-tab title="Filters" :expanded="false">

        </filter-tab>
        <properties-stack></properties-stack>
    </section>
</template>

<script>
    import FilterTab from '../partials/FilterTab';
    import PropertiesStack from '../components/PropertiesStack';
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: 'SwipeableCards',
        components: {
            FilterTab,
            PropertiesStack
        },

    }
</script>
<style lang="scss" scoped>

</style>