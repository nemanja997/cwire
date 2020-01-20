<template>
    <div>
        <div style="min-height:200px;" class="background-image">
            <img class="card-img-top img-fluid" :src="imageUrl" alt="Card image cap">
        </div>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">{{description}}</p>
            <ul>
                <li class="text-weight-bold">Floor: {{floor}}</li>
                <li class="text-weight-bold">Surface: {{surface}}</li>
                <li class="text-weight-bold">Rooms: {{rooms}}</li>
                <li class="">Price: <span class="price">$ {{rent}}</span></li>
            </ul>

            <a href="#" class="btn btn-block btn-primary">Details</a>
        </div>
    </div>
</template>

<script>

    export default {
        name: "PropertyCard",
        props: {
            floor: Number,
            surface: Number,
            rooms: Number,
            description: String,
            rent: Number,
            imageUrl: {
                type: String,
                default: './1.jpg'
            },
        }
    }
</script>

<style scoped>
.price{
    font-size: 1.3em;
    font-weight:bold;
    color: #28dd4f;
}
</style>