<template>
    <div class="container" style="margin-top:15px;">
        <div class="card text-center">
            <h1>{{property.data.id}}</h1>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "PropertyView",
        created(){
            this.property = this.properties.find( (property) => {
                return property.data.id === this.$route.params.id;
            });
        },
        data(){
            return {
                currentProperty: {}
            }
        },
        computed:{
            ...mapState({
                properties: 'detailedProperties'
            })
        }
    }
</script>

<style scoped>

</style>