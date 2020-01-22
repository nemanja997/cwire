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
            <span class="price">{{property.data.gross_rent}} <span style="font-size:18px;">CHF</span> </span> /year
            <div class="mb-3">
                (<span class="font-weight-bold">{{monthlyRent}} <span style="font-size:14px;">CHF</span></span> /month)
            </div>


            <hr>
            <h5 class="font-weight-bold">Basic information</h5>
            <div class="row my-1">
                <div class="col-6 property-data-text">
                    Type
                </div>
                <div class="col-6 font-weight-bold text-lowercase">
                    {{property.data.property_type}}
                </div>
            </div>
            <div class="row my-1">
                <div class="col-6 property-data-text">
                    Floor
                </div>
                <div class="col-6 font-weight-bold">
                    {{property.data.properties.floor}}
                </div>
            </div>
            <div class="row my-1">
                <div class="col-6 property-data-text">
                    Surface
                </div>
                <div class="col-6 font-weight-bold">
                    {{surface}} m²
                </div>
            </div>
            <div class="row my-1 mb-3">
                <div class="col-6 property-data-text">
                    Rooms
                </div>
                <div class="col-6 font-weight-bold">
                    {{property.data.properties.rooms}}
                </div>
            </div>
            <hr>
            <h5 class="font-weight-bold">Price</h5>
            <div class="row my-1">
                <div class="col-6 property-data-text">
                    Net rent
                </div>
                <div class="col-6 font-weight-bold">
                    {{property.data.net_rent}} <span style="font-size:0.8em;">CHF</span>
                </div>
            </div>
            <div class="row my-1">
                <div class="col-6 property-data-text">
                    Extra costs
                </div>
                <div class="col-6 font-weight-bold">
                    {{property.data.extra_costs}} <span style="font-size:0.8em;">CHF</span>
                </div>
            </div>
            <div class="row my-1">
                <div class="col-6 property-data-text">
                    Gross rent
                </div>
                <div class="col-6 font-weight-bold">
                    {{property.data.gross_rent}} <span style="font-size:0.8em;">CHF</span>
                </div>
            </div>
            <hr>
            <h5 class="font-weight-bold">Location</h5>
            <div class="row my-1">
                <div class="col-6 property-data-text">
                    Country
                </div>
                <div class="col-6 font-weight-bold">
                    {{property.data.location.country}}
                </div>
            </div>
            <div class="row my-1">
                <div class="col-6 property-data-text">
                    City
                </div>
                <div class="col-6 font-weight-bold">
                    {{property.data.location.city}}
                </div>
            </div>
            <div class="row my-1">
                <div class="col-6 property-data-text">
                    Street
                </div>
                <div class="col-6 font-weight-bold">
                    {{property.data.location.street}}
                </div>
            </div>
            <div class="row my-1">
                <div class="col-6 property-data-text">
                    ZIP Code
                </div>
                <div class="col-6 font-weight-bold">
                    {{property.data.location.zip}}
                </div>
            </div>
            <hr>
            <h5 class="font-weight-bold">Description</h5>
            <!--TODO: if too long show portion and give some way to expand.-->
            <p class="">{{property.data.description}}</p>
        </div>

    </div>

    <!--</div>-->
</template>

<script>
    import {mapState} from 'vuex';
    import {VueAgile} from 'vue-agile'

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
            monthlyRent() {
                return Math.floor(this.property.data.net_rent / 12);
            },
            surface() {
                return (this.property.data.properties.surface ? this.property.data.properties.surface : 'N/A')
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>


</style>