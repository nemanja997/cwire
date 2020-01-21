<template>
    <div>
        <div class="card-img-container">
            <img class="card-img-top img-fluid" :src="imageUrl" alt="Card image cap">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{street}}</h5>
            <h6>{{city}}</h6>
            <p class="card-text">{{description}}</p>
            <ul>
                <li class="text-weight-bold">Floor: {{floor}}</li>
                <li class="text-weight-bold">Surface: {{surface}}</li>
                <li class="text-weight-bold">Rooms: {{rooms}}</li>
                <li class="">Price: <span class="price">$ {{rent}}</span></li>
            </ul>

            <button @click="goToDetails" class="btn btn-block btn-primary">Details</button>
        </div>
    </div>
</template>

<script>

    export default {
        name: "PropertyCard",
        props: {
            id: String,
            street: String,
            city: String,
            floor: Number,
            surface: Number,
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
    .price {
        font-size: 1.3em;
        font-weight: bold;
        color: #28dd4f;
    }

    .card-img-container {
        max-width: 500px;
        max-height: 333px;
        overflow: hidden;
    }
</style>