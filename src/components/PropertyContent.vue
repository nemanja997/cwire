<template>
    <div>
        <div class="card-img-container">

            <img class="card-img-top img-fluid" :src="imageUrl" alt="Card image cap">
            <span class="price-ribbon">
                    Slobodnih mesta: 1                </span>
        </div>
        <div class="card-body">
            <h5 class="font-weight-lighter">{{title}}</h5>
            <p class="font-weight-lighter mb-1">{{street}}, {{city}}</p>
            <hr>
            <div class="row">
                <div class="col-6">
                    Type:
                </div>
                <div class="col-6 font-weight-bold text-lowercase">
                    {{type}}
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    Floor:
                </div>
                <div class="col-6 font-weight-bold">
                    {{floor}}
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    Surface:
                </div>
                <div class="col-6 font-weight-bold">
                    {{surface}}
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    Rooms:
                </div>
                <div class="col-6 font-weight-bold">
                    {{rooms}}
                </div>
            </div>
            <div class="row my-2">
                <div class="col">
                    <span class="price ">{{rent}} CHF</span> /year
                </div>
            </div>


            <button @click="goToDetails"
                    class="btn btn-block btn-primary"
                    :disabled="disabledButton"
                    style="transition: all 0.5s;">Details</button>
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
                type: [ Number, String],
                default: 'N/A'
            },
            rooms: Number,
            description: String,
            rent: Number,
            imageUrl: {
                type: String,
                default: './1.jpg'
            },
        },
        methods:{
           goToDetails(){
               console.log('otisao');
               this.$router.push({ name: 'property', params: { id: this.id } })
           }
        }
    }
</script>

<style scoped>
    .card-img-container {
        max-width: 500px;
        max-height: 333px;
        overflow: hidden;
    }
</style>