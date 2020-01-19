<template>
    <div style="height:700px; user-select: none;">
        <div class="absolute" style="z-index: 3;margin-right:15px;">
            <Vue2InteractDraggable
                    v-if="isVisible"
                    :interact-out-of-sight-x-coordinate="500"
                    :interact-max-rotation="20"
                    :interact-x-threshold="200"
                    :interact-y-threshold="200"
                    @draggedRight="liked(current.id)"
                    @draggedLeft="disliked(current.id)"
                    class="rounded-borders card card--one">

                <property-content :floor="current.floor"
                                  :surface="current.surface"
                                  :rooms="current.rooms">
                </property-content>

            </Vue2InteractDraggable>
        </div>
        <div v-if="next"
             class="rounded-borders card card--two absolute"
             :class="{'on-top': onTop}"
             style="z-index: 2;margin-right:15px;">
            <property-content :floor="next.floor"
                              :surface="next.surface"
                              :rooms="next.rooms">
            </property-content>
        </div>
        <div v-if="index + 2 < properties.length"
             :class="{'second': onTop}"
             class="rounded-borders card card--three absolute"
             style="z-index: 1;margin-right:15px;">
            <property-content :floor="next.floor"
                              :surface="next.surface"
                              :rooms="next.rooms">
            </property-content>
        </div>
    </div>
</template>

<script>
    import {Vue2InteractDraggable} from 'vue2-interact';
    import PropertyContent from './PropertyContent';

    export default {
        name: "PropertiesStack",
        components: {
            Vue2InteractDraggable,
            PropertyContent
        },
        data() {
            return {
                isVisible: true,
                onTop: false,
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
                    {
                        id: 'four',
                        floor: 2,
                        surface: 340,
                        rooms: 6,
                    },
                    {
                        id: 'five',
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
            liked(propertyId) {
                this.removeFirstCard();
                console.log(`liked ${propertyId}`);
            },
            disliked(propertyId) {
                this.removeFirstCard();
                console.log(`disliked ${propertyId}`);
            },
            removeFirstCard() {
                this.onTop = true;
                setTimeout(() => {
                    this.isVisible = false
                }, 200)
                setTimeout(() => {
                    this.onTop = false;
                    this.isVisible = true;
                    this.index++;
                }, 1000)
                setTimeout(() => {

                }, 1100)
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

        &--two {
            transform: scale(0.9, 0.9) translateY(50px);
        }
        &--three {
            transform: scale(0.8, 0.8) translateY(110px);
        }
    }

    .on-top {
        transition: all 1s;
        transform: scale(1, 1) translateY(0px);
    }
    .second{
        transition: all 1s;
        transform: scale(0.9, 0.9) translateY(50px);
    }
</style>