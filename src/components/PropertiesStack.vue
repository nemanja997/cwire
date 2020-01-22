<template>
    <div style="height:700px; user-select: none;">
        <div v-if="isVisible" class="absolute" style="z-index: 3;margin-right:15px;">
            <Vue2InteractDraggable
                    :interact-out-of-sight-x-coordinate="500"
                    :interact-max-rotation="20"
                    :interact-x-threshold="200"
                    :interact-y-threshold="200"
                    @draggedRight="liked(current.data.id)"
                    @draggedLeft="disliked(current.data.id)"
                    class=" card card-one">

                <property-content :title="current.data.title"
                                  :id="current.data.id"
                                  :floor="current.data.properties.floor"
                                  :rooms="current.data.properties.rooms"
                                  :rent="current.data.gross_rent"
                                  :image-url="current.images[0]"
                                  :street="current.data.location.street"
                                  :city="current.data.location.city"
                                  :type="current.data.property_type"
                                  :surface="current.data.properties.surface"
                                  @goToDetails="goToDetails(current.data.id)">
                </property-content>

            </Vue2InteractDraggable>
        </div>
        <div v-if="next"
             class="card card-two absolute"
             :class="{'on-top': onTop}"
             style="z-index: 2;margin-right:15px;">
            <property-content :title="next.data.title"
                              :id="next.data.id"
                              :floor="next.data.properties.floor"
                              :rooms="next.data.properties.rooms"
                              :rent="next.data.gross_rent"
                              :image-url="next.images[0]"
                              :street="next.data.location.street"
                              :city="next.data.location.city"
                              :type="next.data.property_type"
                              :surface="next.data.properties.surface"
                              disabledButton>
            </property-content>
        </div>
        <transition name="fade">
            <div v-if="index + 2 < properties.length"
                 :class="{'second': onTop}"
                 class="card card-three absolute"
                 style="z-index: 1;margin-right:15px;">
                <property-content :title="next.data.title"
                                  :id="next.data.id"
                                  :floor="next.data.properties.floor"
                                  :rooms="next.data.properties.rooms"
                                  :rent="next.data.gross_rent"
                                  :image-url="next.images[0]"
                                  :street="next.data.location.street"
                                  :city="next.data.location.city"
                                  :type="next.data.property_type"
                                  :surface="next.data.properties.surface"
                                  disabledButton>
                </property-content>
            </div>
        </transition>
    </div>
</template>

<script>
    import {Vue2InteractDraggable} from 'vue2-interact';
    import PropertyContent from './PropertyContent';
    import {mapState} from 'vuex';
    import {addPropertyToLocalStorage} from '../helpers/localStorage';
    import axios from 'axios';

    export default {
        name: "PropertiesStack",
        components: {
            Vue2InteractDraggable,
            PropertyContent
        },
        data() {
            return {
                isVisible: false,
                onTop: false,
                index: 0,
                showCard: false,
                properties: []
            }
        },
        mounted() {
            this.properties = this.stateProperties;
            this.index = this.stateIndex;

            //prevent error on initial load, wait a little so that data is all set before displaying first Card
            setTimeout(() => {
                this.isVisible = true;
            }, 100);

        },
        computed: {
            ...mapState({
                stateProperties: 'detailedProperties',
                stateIndex: 'currentIndex'
            }),
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
                this.sendFeedback(propertyId, 'like');
            },
            disliked(propertyId) {
                this.removeFirstCard();
                this.sendFeedback(propertyId,'dislike');
            },
            goToDetails(propertyId){
                this.sendFeedback(propertyId,'interested');
            },
            removeFirstCard() {
                addPropertyToLocalStorage(this.current.data.id);
                this.onTop = true;

                setTimeout(() => {
                    this.isVisible = false;
                    this.showCard = false;
                }, 200);

                setTimeout(() => {
                    this.onTop = false;
                    this.showCard = true;
                    this.isVisible = true;
                    this.index++;
                    this.$store.commit('changeIndex',this.index);
                }, 1000);
            },
            sendFeedback(id,value){
                let feedback = {
                    id: id,
                    reaction: value
                };
                axios.post('logs.iapi.ch/myproject/feedback.json', feedback);
                console.log('feedback sent');
                console.log(feedback);
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

        &-two {
            transform: scale(0.9, 0.9) translateY(50px);
        }
        &-three {
            transform: scale(0.8, 0.8) translateY(110px);
        }
    }

    .on-top {
        transition: all 1s;
        transform: scale(1, 1) translateY(0px);
    }

    .second {
        transition: all 1s;
        transform: scale(0.9, 0.9) translateY(50px);
    }

    //transition
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>