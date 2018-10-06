<template>
    <div class="accordion">
    <div class="header" v-on:click="toggle">
        <slot name="header">HINT</slot>
        <span class="header-icon" v-bind:class="{ rotate: show }">›</span>
    </div>
    <transition name="accordion"
                v-on:before-enter="beforeEnter" v-on:enter="enter"
                v-on:before-leave="beforeLeave" v-on:leave="leave">
        <div class="body" v-show="show">
            <div class="body-inner">
                <slot></slot>
            </div>
        </div>
    </transition>
</div>

</template>

<script>
    export default {
        name: 'accordion',
        data() {
            return {
                show: false
            };
        },

        methods: {
            toggle: function() {
                this.show = !this.show;
            },
            // enter: function(el, done) {
            //   $(el).slideDown(150, done);
            // },
            // leave: function(el, done) {
            //   $(el).slideUp(150, done);
            // },
            beforeEnter: function(el) {
                el.style.height = '0';
            },
            enter: function(el) {
                el.style.height = el.scrollHeight + 'px';
            },
            beforeLeave: function(el) {
                el.style.height = el.scrollHeight + 'px';
            },
            leave: function(el) {
                el.style.height = '0';
            }
        }
    }
</script>

<style lang="css" scoped>

    .accordion {
        /*max-width: 400px;*/
        font-family: 'Open Sans', sans-serif;
    }

    .accordion .header {
        display: flex;
        align-items: center;
        height: 44px;
        padding: 0 40px 0 0;
        position: relative;
        color: #fff;
        cursor: pointer;
    }

    .accordion .header-icon {
        position: absolute;
        top: 13px;
        right: 0;
        /*margin-top: -10px;*/
        transform-origin: center center;
        transform: rotate(90deg);
        transition-duration: 0.3s;
        font-size: 20px;
    }

    .accordion .body {
        /*   display: none; */
        overflow: hidden;
        border-top: 0;
        transition: 150ms ease-out;
    }

    .accordion .body-inner {
        padding: 8px;
        overflow-wrap: break-word;
        /*   white-space: pre-wrap; */
    }

    .accordion .header-icon.rotate {
        transform: rotate(270deg);
        transition-duration: 0.3s;
    }
</style>