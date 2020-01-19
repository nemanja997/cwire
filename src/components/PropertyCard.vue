<template>
    <Vue2InteractDraggable
            :interact-out-of-sight-x-coordinate="500"
            :interact-max-rotation="15"
            interact-lock-y-axis="true"
            :interact-x-threshold="100"
            class="rounded-borders shadow-10 card">
        <img class="card-img-top" src="https://veza.iapi.ch/img/noimage.feb41bd2.png" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            <ul>
                <li class="text-weight-bold">Floor: {{floor}}</li>
                <li class="text-weight-bold">Surface: {{surface}}</li>
                <li class="text-weight-bold">Rooms: {{rooms}}</li>
            </ul>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </Vue2InteractDraggable>
</template>

<script>
    import { Vue2InteractDraggable } from 'vue2-interact';

    export default {
        name: "PropertyCard",
        props: {
            floor: Number,
            surface: Number,
            rooms: Number,
        },
        components: {
            Vue2InteractDraggable
        }
    }
</script>

<style scoped>

</style>