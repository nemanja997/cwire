<template>
    <div class="container-fluid" style="margin-top:15px;">

        <!--arrow for going back-->
        <div @click="goBack" class="arrow-back-container">
            <i class="fas fa-chevron-left"></i>
        </div>

        <div class="card text-center">
            <h1>{{property.data.id}}</h1>
            <div class="img-slider">
                <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
                    <!-- slides -->
                    <swiper-slide v-for="image in property.images" :key="image">
                        <img :src="image" class="img-fluid" alt="">
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "PropertyView",
        components: {
            swiper,
            swiperSlide
        },
        created() {
            this.property = this.properties.find((property) => {
                return property.data.id === this.$route.params.id;
            });
        },
        data() {
            return {
                currentProperty: {}
            }
        },
        computed: {
            ...mapState({
                properties: 'detailedProperties'
            })
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>

</style>