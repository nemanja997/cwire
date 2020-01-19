<template>

    <div class="filter-tab"
         :class="{'tab-active': currentlyExpanded}">
        <div class=" tab-heading"
             @click="toggle">
            <span>{{title}}</span>

            <!--must use v-show instead of class binding because icon will not render-->
            <span v-show="currentlyExpanded">
                <i class="fas fa-chevron-up"></i>
            </span>
            <span v-show="!currentlyExpanded">
                <i class="fas fa-chevron-down"></i>
            </span>

        </div>
        <transition name="fadeHeight" mode="out-in">

            <slot v-if="currentlyExpanded"></slot>

        </transition>
    </div>

</template>

<script>
    export default {
        name: "Tab",
        props: {
            expanded: {
                type: Boolean,
                default: false
            },
            title: {
                type: String
            }
        },
        data() {
            return {
                currentlyExpanded: this.expanded
            }
        },
        methods: {
            toggle() {
                this.currentlyExpanded = !this.currentlyExpanded;
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .filter-tab {
        background-color: #27348B;
        color:white;
        border-radius: 3px;
    }

    .tab-heading {

        padding: 10px;

        font-size: 16px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    .tab-active {
        background-color: #ebf8ff;
        color: #27348B;
    }

    //transition
    .fadeHeight-enter-active,
    .fadeHeight-leave-active {
        transition: all 0.5s;
        max-height: 1000px;
    }

    .fadeHeight-enter,
    .fadeHeight-leave-to {
        opacity: 0;
        max-height: 0px;
    }
</style>