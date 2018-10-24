<template>
    <div class="page-container" v-on:scroll="handleScroll">
        <div class="content-wrap" v-bind:class="{ 'show-right-menu': showRightMenu }">
            <div>
                <md-toolbar md-elevation="0" md-fixed="true" class="topbar" v-bind:class="{ 'topbar-white': topBarWhite }">
                    <a href="/#/"><img v-bind:src='logo' alt="logo" class="logo"></a>
                    <div class="md-toolbar-section-end">
                        <ul class="top-menu md-small-hide">
                            <li><a href="/#/publishing">Publishing</a></li>
                            <li><a href="/#/games">Our games</a></li>
                            <li><a href="/#/jobs">Jobs</a></li>
                            <li><a href="/#/support">Support</a></li>
                        </ul>
                        <md-button class="md-primary md-small-hide btn-1">Submit your game</md-button>
                        <md-button class="md-icon-button hide-small-up" @click="toggleMenu" v-bind:class="{ 'md-hide': showRightMenu }">
                            <img v-bind:src='menuIco' alt="menu">
                        </md-button>
                    </div>
                </md-toolbar>
                <div class="overlay" v-bind:class="{ 'overlay-show': overlayShow }"></div>
                <md-content>
                    <section id="section-1">
                        <img src="/src/assets/img/bg-1.png" alt="" class="header-video">
                        <!--                        <div class="slogan">
                                                    We make your game a hit
                                                </div>-->
                    </section>
                    <section id="section-2">

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                        <test></test>
                    </section>
                </md-content>

            </div>
            <div class="right-menu hide-small-up">
                <md-button class="md-icon-button close-menu-btn" @click="toggleMenu" v-bind:class="{ 'md-hide': !showRightMenu }">
                    <img v-bind:src='closeMenuIco' alt="Close menu">
                </md-button>
                <ul>
                    <li><a href="/#/">Home</a></li>
                    <li><a href="/#/publishing">Publishing</a></li>
                    <li><a href="/#/games">Our games</a></li>
                    <li><a href="/#/jobs">Jobs</a></li>
                    <li><a href="/#/support">Support</a></li>
                </ul>
                <div class="wrap-btn">
                    <md-button class="md-primary btn-1">Submit your game</md-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Test from '../components/mainMenu.vue'
    export default {
        name: 'Temporary',
        data: () => ({
        showRightMenu: false,
        overlayShow: false,
        scrolled: false,
        topBarWhite: false,
        logo: '/src/assets/img/logo-gp-white.svg',
        menuIco: '/src/assets/img/menu-ico-white.svg',
        closeMenuIco: '/src/assets/img/close-ico-white.svg',
        }),
    methods: {
        toggleMenu () {
            this.showRightMenu = !this.showRightMenu
            this.overlayShow = !this.overlayShow
        },
        handleScroll () {
            this.topBarWhite = (document.getElementsByClassName('page-container')[0].scrollTop > 94) ? true : false
            if(this.topBarWhite){
                this.logo = '/src/assets/img/logo-gp-black.svg'
                this.menuIco = '/src/assets/img/menu-ico-black.svg'
                this.closeMenuIco = '/src/assets/img/close-ico-black.svg'
            } else {
                this.logo = '/src/assets/img/logo-gp-white.svg'
                this.menuIco = '/src/assets/img/menu-ico-white.svg'
                this.closeMenuIco = '/src/assets/img/close-ico-white.svg'
            }
        }
    },
    components: {
        Test
    }

    }
</script>

<style lang="scss" scoped>
    #section-2 {
        margin-top: calc(100vh - 94px);
    }
    .page-container {
        min-height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
        position: relative;
    }
    .content-wrap {
        display: flex;
        width: calc(100vw + 282px);
        position: absolute;
        left: 0;
        transition: .5s cubic-bezier(.25,.8,.25,1);
        will-change: transform;
    > div:nth-child(1) {
          width: 100vw
      }
    > div:nth-child(2) {
          width: 282px;
          height: 100vh;
          position: sticky;
          right: -282px;
          top: 0;
          background-color: #ffffff;
          box-shadow: -10px 0 20px 0 rgba(0, 0, 0, 0.5);
          z-index: 9;
          visibility: hidden;
          transition: .15s cubic-bezier(.25,.8,.25,1);
          transition-property: visibility;
      }
    }
    .topbar {
        height: 94px;
        position: sticky;
        top: 0;
        width: 100vw;
        background: none;
        color: #fff;
        padding-left: 41px;
        padding-right: 40px;
    }
    .topbar-white {
        background-color: #ffffff !important;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        color: #000;
    }
    ul.top-menu {
        margin: 0;
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
    .right-menu {
        position: relative;
        padding: 27px 22px 0 28px;
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
        bottom: 27px;
        width: 100%;
        text-align: center;
    }
    }
    .header-video {
        width: auto;
        height: 100vh;
        position: absolute;
        top: 0;
    }
    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 0;
        background-color: #000000;
        z-index: 8;
        display: none;
    }
    .show-right-menu {
        left: -282px;
    > div:nth-child(2) {
          visibility: visible;
      }
    }
    .overlay-show {
        display: block;
        opacity: 0.34;
    }
    .btn-1 {
        height: 50px;
        background-color: #ffb825;
        color: #ffffff !important;
        border-radius: 4px;
        font-size: 16px;
        text-transform: none;
        padding: 0 8px;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        letter-spacing: 0.7px;
    }
    #section-1 {
    .slogan {
        font-family: 'Poppins', sans-serif;
        font-size: 54px;
        letter-spacing: 0.9px;
        color: #fff;
        position: absolute;
        top: 10px;
        z-index: 100;
        text-align: center;
        width: 100%;
    }
    }
    @media (min-width: 960px) {
        .hide-small-up {
            display: none;
        }
    }
    @media (max-width: 960px) {
        .topbar {
            height: 64px;
            padding-left: 20px;
            padding-right: 12px;
            background-color: #479a85;
        .logo {
            width: 146px;
        }
    }
    }
</style>