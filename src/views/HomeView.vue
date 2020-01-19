<template>
    <div class="container">
        <div class="topbar">
            <h1>topbar</h1>
        </div>
        <div class="content">
            <h1>content</h1>
            <property-card></property-card>
        </div>
    </div>
</template>

<script>
    import PropertyCard from '../components/PropertyCard';
    export default {
        name: "HomeView",
        components:{
            PropertyCard
        }
    }
</script>

<style scoped>

</style>