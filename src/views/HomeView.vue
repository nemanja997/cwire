<template>
    <section class="container position-relative">


        <properties-stack></properties-stack>
    </section>
</template>

<script>

    import PropertiesStack from '../components/PropertiesStack';
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: 'SwipeableCards',
        components: {
            PropertiesStack
        },

    }
</script>
<style lang="scss" scoped>

</style>