<template>
    <div>
        <div style="min-height:375px;">
            <img class="card-img-top" src="https://img1.iapi.ch/processor-imgdl-prod/medium/06c88072ff704688.jpeg" alt="Card image cap">
        </div>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            <ul>
                <li class="text-weight-bold">Floor: {{floor}}</li>
                <li class="text-weight-bold">Surface: {{surface}}</li>
                <li class="text-weight-bold">Rooms: {{rooms}}</li>
                <li class="">Price: <span class="price">$54000</span></li>
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