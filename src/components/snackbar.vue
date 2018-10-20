<template>
    <div class="snackbar-container">
        <transition name="snackbar">
            <div class="snackbar" v-if="show">
                <div class="snackbar-text">
                    We use cookies to give you the best experience on our website. By continuing to use our website without changing
                    <br> your cookie settings, you agree to our use of cookies in accordance with our updated
                    <router-link :to="{}">Cookie Policy</router-link>
                </div>
                <div class="snackbar-action">
                    <md-button class="md-icon-button close-menu-btn" @click="show = false" >
                        <img src='/src/assets/img/close-ico-white.svg' alt="Close snackbar">
                    </md-button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'snackbar',

        data() {
            return {
                show: true
            };
        },

        methods: {
            toggleSnackbar () {
                this.showSnackbar = !this.showSnackbar;
            },
        },
        transitions: {
            'ui-snackbar-toggle': {
                afterEnter() {
                    console.log('entered');
                },

                afterLeave() {
                    console.log('left');
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

    .snackbar-container {
        position: fixed;
        overflow: hidden;
        width: 100%;
        bottom: 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        letter-spacing: 0.8px;
        color: #ffffff;
        Z-index: 10;
        a {
            color: #ffb825;
            text-decoration: none;
        }
        a:hover {
            color: #ffb825;
            opacity: 1;
        }
    }

    .snackbar {
        display: flex;
        align-items: center;
        width: 100%;
        min-height: 48px;
        padding: 16px 24px;
        border-radius: 2px;
        opacity: 0.81;
        background-color: #000000;
    }

    .snackbar-text {
        font-size: 14px;
        color: white;
        text-align: center;
        margin: 0 auto;
    }

    .snackbar-action {
        padding-left: 48px;
    }

    .snackbar-enter-active {
        transition: transform 0.3s ease;
    }
    .snackbar-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .snackbar-enter, .snackbar-leave-to {
        transform: translateY(60px);
        opacity: 0;
    }

</style>
