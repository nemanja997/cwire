<template>
    <div>
        <filter-tab title="Filters" :expanded="false">

        </filter-tab>
        <section class="container position-relative">


            <properties-stack></properties-stack>
        </section>
    </div>

</template>

<script>
    import FilterTab from '../partials/FilterTab';
    import PropertiesStack from '../components/PropertiesStack';
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: 'SwipeableCards',
        components: {
            PropertiesStack,
            FilterTab
        },

    }
</script>
<style lang="scss" scoped>

</style>