<template>
    <!--<div class="container-fluid" style="margin-top:15px;">-->



        <div class="card">
            <!--arrow for going back-->
            <div @click="goBack" class="arrow-back-container">
                <i class="fas fa-chevron-left"></i>
            </div>
            <div class="img-slider">
                <agile :mobileFirst="true">
                    <img v-for="image in property.images" :key="image" :src="image" class="img-fluid" alt="">
                </agile>
            </div>
            <div class="card-body">
                <h4 class="font-weight-lighter">{{property.data.title}}</h4>
                <h5 class="font-weight-lighter">{{property.data.location.street}}, {{property.data.location.city}}</h5>
                <span class="price">{{property.data.gross_rent}} CHF </span> /year<br>
                (<span class="font-weight-bold">{{monthlyRent}} CHF</span> /month)
                <hr>
                <h5 class="font-weight-bold">Description</h5>
                <p class="">{{property.data.description}}</p>
                <hr>
                <h5 class="font-weight-bold">Basic information</h5>
                <ul>
                    <li>
                        Floor:
                    </li>
                </ul>
            </div>

        </div>

    <!--</div>-->
</template>

<script>
    import {mapState} from 'vuex';
    import { VueAgile } from 'vue-agile'
    export default {
        name: "PropertyView",
        components: {
            agile: VueAgile
        },
        created() {
            this.property = this.properties.find((property) => {
                return property.data.id === this.$route.params.id;
            });
        },
        data() {
            return {
                property: {}
            }
        },
        computed: {
            ...mapState({
                properties: 'detailedProperties'
            }),
            monthlyRent(){
                return Math.floor(this.property.data.net_rent /12);
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>


</style>