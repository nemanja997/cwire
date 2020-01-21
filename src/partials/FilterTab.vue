<template>

    <div class="filter-tab"
         :class="{'tab-active': currentlyExpanded}">
        <div class=" tab-heading"
             @click="toggle">
            <span><span><i class="fas fa-sliders-h"></i></span> <span class="ml-2">{{title}}</span></span>

            <!--must use v-show instead of class binding because icon will not render-->
            <span v-show="currentlyExpanded">
                <i class="fas fa-chevron-up"></i>
            </span>
            <span v-show="!currentlyExpanded">
                <i class="fas fa-chevron-down"></i>
            </span>

        </div>

        <transition name="fadeHeight" mode="out-in">

            <div v-if="currentlyExpanded" class="p-3">
                <hr class="mt-0">
                <div class="row">
                    <div class="col-12 mb-3">
                        Property type:
                    </div>
                    <div class="col-6">
                        <label class="radio-container">House
                            <input type="checkbox" id="house" value="HOUSE" v-model="propertyType">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="col-6">
                        <label class="radio-container">Apartment
                            <input type="checkbox" id="apartment" value="APARTMENT" v-model="propertyType">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12 mb-3">
                        Price:
                    </div>
                    <div class="col-12">
                        <vue-slider v-model="price"
                                    :min="0"
                                    :max="1000000"
                                    :interval="1000">
                        </vue-slider>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12 mb-3">
                        Number of rooms:
                    </div>
                    <div class="col-12">
                        <vue-slider v-model="rooms"
                                    :min="1"
                                    :max="10"
                                    :interval="0.5">
                        </vue-slider>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col text-right">
                        <button @click="filterProperties" class="btn btn-primary mt-3"> Filter </button>
                    </div>
                </div>
            </div>

        </transition>
    </div>

</template>

<script>
    import VueSlider from 'vue-slider-component';
    import 'vue-slider-component/theme/default.css';

    export default {
        name: "Tab",
        components: {
            VueSlider
        },
        props: {
            expanded: {
                type: Boolean,
                default: false,
            },
            title: {
                type: String
            }
        },
        data() {
            return {
                currentlyExpanded: this.expanded,
                type: ['HOUSE', 'APARTMENT'],
                price: [0,1000000],
                rooms:[0,10]

            }
        },
        methods: {
            toggle() {
                this.currentlyExpanded = !this.currentlyExpanded;
            },
            filterProperties(){

            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>