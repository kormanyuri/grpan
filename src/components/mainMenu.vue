<template>

    <div>

        <md-toolbar md-elevation="0" class="topbar"  v-bind:class="{ 'topbar-white': scrolled, 'mv-left': showRightMenu }">
            <a v-bind:href="'/' + locale.code"><img v-bind:src='logo' alt="logo" class="logo"></a>
            <div class="md-toolbar-section-end">
                <ul class="top-menu md-small-hide">
                    <li><router-link :to="{name: 'publishing'}" exact>{{ $t("message.PUBLISHING") }}</router-link></li>
                    <li><router-link :to="{name: 'games'}" exact>{{ $t("message.OUR_GAMES") }}</router-link></li>
                    <li><router-link :to="{name: 'jobs'}" exact>{{ $t("message.JOBS") }}</router-link></li>
                    <li><router-link :to="{name: 'support'}" exact>{{ $t("message.Support") }}</router-link></li>
                </ul>
                <router-link v-bind:to="'/' + locale.code + '/publishing#want-to-work-with-us-form'">
                    <md-button class="md-primary md-small-hide btn-1">{{$t("message.Submit_your_game")}}</md-button>
                </router-link>
                <md-button class="md-icon-button hide-small-up" @click="toggleMenu" v-bind:class="{ 'md-hide': showRightMenu }">
                    <img v-bind:src='showMenuIco' alt="menu"/>
                </md-button>
            </div>
        </md-toolbar>

        <div class="rihgt-menu hide-small-up" v-bind:class="{ 'show-right-menu': showRightMenu }">
            <md-button class="md-icon-button close-menu-btn" @click="toggleMenu" v-bind:class="{ 'md-hide': !showRightMenu }">
                <img v-bind:src='closeMenuIco' alt="Close menu">
            </md-button>
            <ul>
                <li><router-link :to="{name: 'home'}" exact>{{$t("message.Home")}}</router-link></li>
                <li><router-link :to="{name: 'publishing'}" exact>{{$t("message.Publishing")}}</router-link></li>
                <li><router-link :to="{name: 'games'}" exact>{{$t("message.OUR_GAMES")}}</router-link></li>
                <li><router-link :to="{name: 'jobs'}" exact>{{$t("message.JOBS")}}</router-link></li>
                <li><router-link :to="{name: 'support'}" exact>{{$t("message.SUPPORT")}}</router-link></li>
            </ul>
            <div class="wrap-btn">
                <router-link v-bind:to="'/' + locale.code + '/publishing#want-to-work-with-us-form'">
                    <md-button class="md-primary btn-1">{{$t("message.Submit_your_game")}}</md-button>
                </router-link>
            </div>
        </div>

        <div class="overlay" v-bind:class="{ 'show-overlay': showRightMenu }"></div>

    </div>

</template>

<script>
    import Parser from '../tools/Parser';

    export default {
        data: function(){
            return {
                scrolled: false,
                showRightMenu: false,
                showOverlay: false,
                logo: '/src/assets/img/logo-gp-white.svg',
                showMenuIco: '/src/assets/img/menu-ico-white.svg',
                closeMenuIco: '/src/assets/img/close-ico-white.svg',
                locale: {code: 'en', label: 'English'},
            }
        },
        methods: {
            toggleMenu () {
                this.showRightMenu = !this.showRightMenu;
            },
            handleScroll () {
                this.scrolled = (window.scrollY > 94) ? true : false;
                if(this.scrolled){
                    this.logo = '/src/assets/img/logo-gp-black.svg'
                    this.showMenuIco = '/src/assets/img/menu-ico-black.svg'
                    this.closeMenuIco = '/src/assets/img/close-ico-black.svg'
                } else {
                    this.logo = '/src/assets/img/logo-gp-white.svg'
                    this.showMenuIco = '/src/assets/img/menu-ico-white.svg'
                    this.closeMenuIco = '/src/assets/img/close-ico-white.svg'
                }
            }
        },


        mounted: function(){
          const parser = new Parser();
          this.locale = {code: parser.locale, label: parser.localeLabel};
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        },
        components: {

        }
    }

</script>

<style lang="scss" scoped>

    .top-menu {
        li {
            font-size: 0.875rem;
        }
    }

    .top-menu .router-link-active {
        border-bottom: 1px solid #fff;
        padding-bottom: 5px;
    }

    .rihgt-menu .router-link-active {
        font-weight: 800 !important;
        color: #131313 !important;
    }

    .topbar {
        padding: 0 50px 0 40px;
        height: 94px;
        width: 100%;
        position: fixed;
        left: 0px;
        top: 0px;
        background: none;
        z-index: 8;
        transition: 0.5s cubic-bezier(.25,.8,.25,1);
        transition-property: left;
        color: #fff;
    }
    .topbar-white {
        background-color: #fff !important;
        color: #000;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        .router-link-active{
            border-bottom-color: #000000;
        }
    }
    .rihgt-menu {
        height: 100vh;
        width: 282px;
        position: fixed;
        top:0;
        right: -282px;
        background-color: #ffffff;
        box-shadow: -10px 0 20px 0 rgba(0, 0, 0, 0.5);
        z-index: 11;
        padding: 27px 22px 0 28px;
        visibility: hidden;
        transition: .5s cubic-bezier(.25,.8,.25,1);
        transition-property: right, visibility;
        ul {
            margin: 0;
            padding: 0;
            li {
                list-style-type: none;
                border-bottom: 1px solid #f2f2f2;
                padding-bottom: 27px;
                margin-bottom: 25px;
                a {
                    font-family: 'Open Sans', sans-serif;
                    letter-spacing: 0.2px;
                    font-weight: bold;
                    text-decoration: none;
                    color: #848c9a;
                    text-transform: uppercase;
                }
                a:hover {
                    color: inherit;
                    border-bottom: 1px solid #fff;
                    padding-bottom: 5px;
                }
            }
            li:last-child {
                border-bottom: none;
            }
        }
        .close-menu-btn {
            position: absolute;
            top: 10px;
            left: -55px;
        }
        .wrap-btn {
            position: absolute;
            left: 0;
            bottom: 127px;
            width: 100%;
            text-align: center;
        }
    }
    .show-right-menu {
        right: 0px;
        visibility: visible;
    }
    .mv-left {
        left: -282px !important;
    }
    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 0;
        background-color: #000000;
        z-index: 9;
        display: none;
        transition: 0.5s cubic-bezier(.25,.8,.25,1);
        transition-property: display;
    }
    .show-overlay {
        display: block;
        opacity: 0.34;
    }
    ul.top-menu {
        margin: 0 20px 0;
        padding: 0;
        li {
            list-style-type: none;
            display: inline-block;
            margin-right: 20px;
            a {
                font-family: 'Open Sans', sans-serif;
                letter-spacing: 0.9px;
                font-weight: 600;
                text-decoration: none;
                color: inherit;
                text-transform: uppercase;
            }
            a:hover {
                color: inherit;
                border-bottom: 1px solid #fff;
                padding-bottom: 5px;
            }
        }
    }
    .btn-1 {
        height: 50px;
        background-color: #ffb825;
        color: #ffffff !important;
        border-radius: 4px;
        font-size: 1rem;
        text-transform: none;
        margin: 0;
        padding: 0 8px;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        letter-spacing: 0.7px;
    }
    @media (min-width: 961px) {
        .hide-small-up {
            display: none;
        }
    }
    @media (max-width: 960px) {
        .topbar {
            height: 64px;
            padding-left: 20px;
            padding-right: 12px;
            background-color: rgba(0, 0, 0, 0.1);

            .logo {
                width: 146px;
            }
        }
    }

</style>
