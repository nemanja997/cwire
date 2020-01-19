<template>

    <div class="filter-tab">
        <div class="tab-heading"
             :class="{'tab-active': currentlyExpanded}"
             @click="toggle"
        >
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
    .tab-heading {
        border-radius: 3px;
        background-color: #ebf8ff;
        padding: 10px;
        color: #27348B;
        font-size: 16px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    .tab-active {
        background-color: #27348B;
        color: #fff;
    }

    //transition
    .fadeHeight-enter-active,
    .fadeHeight-leave-active {
        transition: all 0.5s;
        max-height: 1000px;
    }
    .fadeHeight-enter,
    .fadeHeight-leave-to
    {
        opacity: 0;
        max-height: 0px;
    }
</style>