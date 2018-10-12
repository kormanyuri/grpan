<template>

    <footer>
        <div class="site-map">
            <div class="container">
                <div class="site-map-mobile">
                    <accordion>
                        <div slot="header" class="block-heading">MENU</div>
                        <ul>
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="/publishing">Publishing</router-link></li>
                            <li><router-link to="/games">Games</router-link></li>
                            <li><router-link to="/publishing#success-story">Our story</router-link></li>
                            <li><router-link to="/jobs">Career</router-link></li>
                            <li><router-link to="/support">Contact us</router-link></li>
                        </ul>
                    </accordion>
                    <accordion>
                        <div slot="header" class="block-heading">JOBS</div>
                        <ul>
                            <li><a href="">Advertising analyst</a></li>
                            <li><a href="">Marketing analys</a></li>
                            <li><a href="">HTML5 Devloper</a></li>
                            <li><a href="">Marketing Manager</a></li>
                            <li><a href="" class="bold">+ See more</a></li>
                        </ul>
                    </accordion>
                    <accordion>
                        <div slot="header" class="block-heading">PRESS</div>
                        <ul>
                            <li><a href="">Press kit</a></li>
                        </ul>
                    </accordion>
                    <accordion>
                        <div slot="header" class="block-heading">LEGAL</div>
                        <ul>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms of Use</a></li>
                        </ul>
                    </accordion>
                    <accordion>
                        <div slot="header" class="block-heading">CONTACT</div>
                        <ul>
                            <li><router-link to="/support">Support</router-link></li>
                        </ul>
                    </accordion>
                </div>
                <div class="wrap-soc-link">
                    <div class="soc-link">
                        <a href="https://www.facebook.com/GreenPandaGames/"><img src="/src/assets/img/icn-facebook-grey.svg" alt=""></a>
                        <a href="https://www.instagram.com/greenpandagame"><img src="/src/assets/img/icn-instagram-grey.svg" alt=""></a>
                        <a href="https://www.linkedin.com/company/green-panda-games/"><img src="/src/assets/img/icn-linkedin-grey.svg" alt=""></a>
                        <a href="https://www.vk.com/green_panda_games/"><img src="/src/assets/img/icn-vk-grey.svg" alt=""></a>
                    </div>
                    <div style="text-align: center">
                        <form class="select-lang-mobile">
                            <locale-switcher class="select-lang"></locale-switcher>
                            <!--<v-select v-model="selected" :options="options" class="select-lang"></v-select>-->
                        </form>
                    </div>
                </div>
                <div class="md-layout md-gutter md-small-hide">
                    <div class="md-layout-item md-small-size-100 md-size-15">
                        <div class="block-heading">PRESS</div>
                        <ul class="list">
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="/publishing">Publishing</router-link></li>
                            <li><router-link to="/games">Games</router-link></li>
                            <li><router-link to="/publishing#success-story">Our story</router-link></li>
                            <li><router-link to="/jobs">Career</router-link></li>
                            <li><router-link to="/support">Contact us</router-link></li>
                        </ul>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-15">
                        <div class="block-heading">JOBS</div>
                        <ul>
                            <li><a href="">Advertising analyst</a></li>
                            <li><a href="">Marketing analys</a></li>
                            <li><a href="">HTML5 Devloper</a></li>
                            <li><a href="">Marketing Manager</a></li>
                            <li><a href="" class="bold">+ See more</a></li>
                        </ul>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-15">
                        <div class="block-heading">PRESS</div>
                        <ul>
                            <li><a href="">Press kit</a></li>
                        </ul>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-15">
                        <div class="block-heading">LEGAL</div>
                        <ul>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms of Use</a></li>
                        </ul>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-small-size-100 md-size-15">
                        <div class="block-heading">CONTACT</div>
                        <ul>
                            <li><router-link to="/support">Support</router-link></li>
                        </ul>
                    </div>
                    <div class="md-layout-item md-size-25 soc-link">
                        <a href="https://www.facebook.com/GreenPandaGames/"><img src="/src/assets/img/icn-facebook-grey.svg" alt=""></a>
                        <a href="https://www.instagram.com/greenpandagame"><img src="/src/assets/img/icn-instagram-grey.svg" alt=""></a>
                        <a href="https://www.linkedin.com/company/green-panda-games/"><img src="/src/assets/img/icn-linkedin-grey.svg" alt=""></a>
                        <a href="https://www.vk.com/green_panda_games/"><img src="/src/assets/img/icn-vk-grey.svg" alt=""></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright">
            <div class="container">
                <span>© 2018 GREEN PANDA GAMES. ALL RIGHTS RESERVED.</span>
                <form class="md-small-hide">
                    <locale-switcher></locale-switcher>
                    <!--<v-select v-model="locale" :options="options" class="select-lang"></v-select>-->
                </form>
            </div>
        </div>
        <snackbar class="snackbar-my"></snackbar>
    </footer>

</template>

<script>
    import accordion from '../components/accordion.vue'
    import snackbar from '../components/snackbar.vue'
    import LocaleSwitcher from '../components/LocaleSwitcher.vue'

    export default {
        props: ['icon', 'link'],

//        data: function(){
//            return {
//                show: false,
//                options: [
//                    {id: 'en', label: 'English'},
//                    {id: 'fr', label: 'Français'},
//                    {id: 'ru', label: 'Русский'},
//                ],
//                locale: {id: 'en', label: 'English'},
//            }
//        },
//        watch: {
//            locale (val) {
//                this.$i18n.locale = val.id
//            }
//        },
        methods: {
        },
        computed: {
            currentLocale() {
                return this.$route.params.locale
            },
        },
        components: {
            accordion,
            snackbar,
            LocaleSwitcher
        }
    }
</script>

<style lang="scss" scoped>
    
	footer {
        font-family: 'Open Sans', sans-serif;

        .block-heading {
            font-size: 0.875rem;
            font-weight: bold;
            line-height: normal;
            letter-spacing: 0.9px;
            color: #ffffff;
            margin-bottom: 9px;
        }
        .site-map {
            min-height: 270px;
            padding: 44px 0 40px;
            background-color: #4d4d4d;
            ul {
                margin: 0;
                padding: 0;
                li {
                    list-style-type: none;
                    a {

                        font-size: 0.875rem;
                        font-weight: normal;
                        line-height: 2.14;
                        letter-spacing: 0.9px;
                        color: #acacac;
                        text-decoration: none;
                    }
                    a:hover {
                        color: #d9d9d9;
                    }
                    .bold {
                        font-weight: bold;
                        color: #d9d9d9;
                    }
                    .bold:hover {
                        color: #acacac;
                    }
                }
            }
         }
        .soc-link {
            text-align: right;
            a {
                display: block;
                margin-bottom: 10px;
            }
        }
        .copyright {
            background-color: #343434;
            span {
                margin-right: 33px;
                font-size: 0.875rem;;
                font-weight: normal;
                line-height: normal;
                letter-spacing: 0.9px;
                color: #acacac;
            }
            .container {
                height: 58px;
                display: flex;
                align-items: center;
            }
        }

        .site-map-mobile {
            display: none;
            .block-heading {
                margin-bottom: 0;
            }
            >div {
                border-bottom: 1px solid #6f6f6f;
             }
            >div:last-child {
                border-bottom: none;
             }
        }
        .wrap-soc-link {
            display: none;
        }
        snackbar-my.md-snackbar {
            max-width: 100% !important;
        }
    }

    @media (max-width: 960px) {
        footer {
            .site-map {
                padding: 10px 22px;
                .soc-link {
                    padding-top: 25px;
                    padding-bottom: 8px;
                    text-align: center;
                    a {
                        display: inline-block;
                        padding: 10px;
                    }
                }
            }
            .site-map-mobile {
                display: block;
            }
            .select-lang-mobile {
                text-align: center;
                .select-lang {
                    margin: 0 auto 8px;
                }
            }
            .copyright {
                padding: 0;

                span {
                    font-size: 0.5625rem;
                    letter-spacing: 0.6px;
                    margin-right: 0;
                }
                .container {
                    justify-content: center;
                }
            }
            .wrap-soc-link {
                display: block;
            }
        }
    }
	
</style>