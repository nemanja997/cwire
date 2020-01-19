<template>
    <section class="container position-relative">
        <div class="absolute" style="z-index: 3">
            <Vue2InteractDraggable
                    v-if="isVisible"
                    :interact-out-of-sight-x-coordinate="500"
                    :interact-max-rotation="15"
                    :interact-x-threshold="200"
                    :interact-y-threshold="200"
                    @draggedRight="right"
                    class="rounded-borders card card--one">
                <img class="card-img-top" src="1.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                        content.</p>
                    <ul>
                        <li class="text-weight-bold">Floor: {{current.floor}}</li>
                        <li class="text-weight-bold">Surface: {{current.surface}}</li>
                        <li class="text-weight-bold">Rooms: {{current.rooms}}</li>
                    </ul>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </Vue2InteractDraggable>
        </div>
        <div
                v-if="next"
                class="rounded-borders card card--two absolute"
                :class="{'on-top': onTop}"
                style="z-index: 2">
            <img class="card-img-top" src="1.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <ul>
                    <li class="text-weight-bold">Floor: {{next.floor}}</li>
                    <li class="text-weight-bold">Surface: {{next.surface}}</li>
                    <li class="text-weight-bold">Rooms: {{next.rooms}}</li>
                </ul>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div
                v-if="index + 2 < properties.length"
                class="rounded-borders card card--three absolute"
                style="z-index: 1">
            <img class="card-img-top" src="1.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <ul>
                    <li class="text-weight-bold">Floor: {{current.floor}}</li>
                    <li class="text-weight-bold">Surface: {{current.surface}}</li>
                    <li class="text-weight-bold">Rooms: {{current.rooms}}</li>
                </ul>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </section>
</template>
<script>
    import {Vue2InteractDraggable} from 'vue2-interact';

    export default {
        name: 'SwipeableCards',
        components: {Vue2InteractDraggable},
        data() {
            return {
                isVisible: true,
                onTop:false,
                index: 0,
                properties: [
                    {
                        id: 'one',
                        floor: 1,
                        surface: 56,
                        rooms: 2,
                    },
                    {
                        id: 'two',
                        floor: 0,
                        surface: 120,
                        rooms: 4,
                    },
                    {
                        id: 'three',
                        floor: 2,
                        surface: 340,
                        rooms: 6,
                    },
                ]
            }
        },
        computed: {
            current() {
                return this.properties[this.index]
            },
            next() {
                return this.properties[this.index + 1]
            }
        },
        methods: {
            right() {
                this.onTop = true;
                setTimeout(() => {

                    this.isVisible = false
                }, 200)
                setTimeout(() => {
                    this.onTop = false;
                    this.index++
                    this.isVisible = true
                }, 1200)

            },
            liked(){

            },
            disliked(){

            }
        }
    }
</script>
<style lang="scss" scoped>


    .absolute {
        position: absolute;
    }

    .rounded-borders {
        border-radius: 12px;
    }

    .card {
        transition:all 1s;
        &--two {
            transform:scale(0.9,0.9) translateY(50px);
        }
        &--three {
            transform:scale(0.8,0.8) translateY(100px);
        }
    }
    .on-top{
        transform:scale(1,1) translateY(0px);
    }
</style>