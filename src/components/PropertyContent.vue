<template>
    <div>
        <div class="card-img-container">

            <img class="card-img-top img-fluid" :src="imageUrl" alt="Card image cap">
            <span class="price-ribbon">
                    {{rent}} <span style="font-size:14px;">CHF</span>
            </span>
        </div>
        <div class="card-body">
            <h5 class="mb-0">{{title}}</h5>
            <p class="font-weight-lighter mb-1">
                {{street}}
                <!--if there is no street leave comma-->
                <span v-if="street">,</span>
                {{city}}</p>
            <hr>
            <div class="row my-1">
                <div class="col-6 property-data-text">
                    Type
                </div>
                <div class="col-6 font-weight-bold text-lowercase">
                    {{type}}
                </div>
            </div>
            <div class="row my-1">
                <div class="col-6 property-data-text">
                    Floor
                </div>
                <div class="col-6 font-weight-bold">
                    {{floor}}
                </div>
            </div>
            <div class="row my-1">
                <div class="col-6 property-data-text">
                    Surface
                </div>
                <div class="col-6 font-weight-bold">
                    {{surface}}  m²
                </div>
            </div>
            <div class="row my-1 mb-3">
                <div class="col-6 property-data-text">
                    Rooms
                </div>
                <div class="col-6 font-weight-bold">
                    {{rooms}}
                </div>
            </div>
            <button @click="goToDetails"
                    class="btn btn-block btn-primary"
                    :disabled="disabledButton"
                    style="transition: all 0.5s;">Details
            </button>
        </div>
    </div>
</template>

<script>

    export default {
        name: "PropertyCard",
        props: {
            type: String,
            title: String,
            disabledButton: Boolean,
            id: String,
            street: String,
            city: String,
            floor: Number,
            surface: {
                type: [Number, String],
                default: 'N/A'
            },
            rooms: Number,
            description: String,
            rent: Number,
            imageUrl: {
                type: String,
                default: 'https://veza.iapi.ch/img/noimage.feb41bd2.png'
            },
        },
        methods: {
            goToDetails() {
                this.$emit('goToDetails');
                this.$router.push({name: 'property', params: {id: this.id}})
            }
        }
    }
</script>

<style scoped>

</style>