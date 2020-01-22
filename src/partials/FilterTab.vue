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
                            <input type="checkbox"
                                   id="house"
                                   value="HOUSE"
                                   v-model="filters.type"
                                   checked="checked">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="col-6">
                        <label class="radio-container">Apartment
                            <input type="checkbox"
                                   id="apartment"
                                   value="APARTMENT"
                                   v-model="filters.type"
                            checked="checked">
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
                        <vue-slider v-model="filters.price"
                                    :min="0"
                                    :max="1000000"
                                    :interval="1000"
                                    :enable-cross="false">
                        </vue-slider>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12 mb-3">
                        Number of rooms:
                    </div>
                    <div class="col-12">
                        <vue-slider v-model="filters.rooms"
                                    :min="1"
                                    :max="10"
                                    :interval="0.5"
                                    :enable-cross="false">
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
    import { getLastFilters, setLastFilters } from "../helpers/localStorage";

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
        created(){
            if(getLastFilters()){
                this.filters = getLastFilters();
            }
        },
        data() {
            return {
                currentlyExpanded: this.expanded,
                filters: {
                    type: ['HOUSE', 'APARTMENT'],
                    price: [0,1000000],
                    rooms:[1,10]
                }
            }
        },
        methods: {
            toggle() {
                this.currentlyExpanded = !this.currentlyExpanded;
            },
            filterProperties(){
                let queryUrl = 'https://veza.iapi.ch/esearch/vezarent3/_search?q=';
                queryUrl += `${this.getPriceString()}%20AND%20${this.getRoomsString()}`;
                if(this.getTypeString() !== ''){
                    queryUrl +=  `%20AND%20${this.getTypeString()}`;
                }
                setLastFilters(this.filters);
                console.log(queryUrl);


            },
            getPriceString(){
                return `gross_rent:>${this.filters.price[0]}%20AND%20gross_rent:<${this.filters.price[1]}`;
            },
            getTypeString(){
                if(this.filters.type.length === 1){
                    return `property_type:${this.filters.type[0]}`;
                }
                return '';
            },
            getRoomsString(){
                return `properties.rooms:>${this.filters.rooms[0]}%20AND%20properties.rooms:<${this.filters.rooms[1]}`;
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>