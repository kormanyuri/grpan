<template>

    <footer>
        <div class="site-map">
            <div class="container">
                <div class="site-map-mobile">
                    <accordion>
                        <div slot="header" class="block-heading">MENU</div>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Publishing</a></li>
                            <li><a href="">Games</a></li>
                            <li><a href="">Our story</a></li>
                            <li><a href="">Career</a></li>
                            <li><a href="">Contact us</a></li>
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
                            <li><a href="">Support</a></li>
                        </ul>
                    </accordion>
                </div>
                <div class="wrap-soc-link">
                    <div class="soc-link">
                        <a href="https://www.facebook.com/GreenPandaGames/"><img src="/src/assets/img/icn-facebook-grey.png" alt=""></a>
                        <a href="https://www.instagram.com/greenpandagame"><img src="/src/assets/img/icn-instagram-grey.png" alt=""></a>
                        <a href="https://www.linkedin.com/company/green-panda-games/"><img src="/src/assets/img/icn-linkedin-grey.png" alt=""></a>
                        <a href="https://www.vk.com/green_panda_games/"><img src="/src/assets/img/icn-vk-grey.png" alt=""></a>
                    </div>
                    <div style="text-align: center">
                        <form class="select-lang-mobile">
                            <v-select v-model="selected" :options="options" class="select-lang"></v-select>
                        </form>
                    </div>
                </div>
                <div class="md-layout md-gutter md-small-hide">
                    <div class="md-layout-item md-small-size-100 md-size-15">
                        <div class="block-heading">PRESS</div>
                        <ul class="list">
                            <li><a href="">Home</a></li>
                            <li><a href="">Publishing</a></li>
                            <li><a href="">Games</a></li>
                            <li><a href="">Our story</a></li>
                            <li><a href="">Career</a></li>
                            <li><a href="">Contact us</a></li>
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
                            <li><a href="">Support</a></li>
                        </ul>
                    </div>
                    <div class="md-layout-item md-size-25 soc-link">
                        <a href="https://www.facebook.com/GreenPandaGames/"><img src="/src/assets/img/icn-facebook-grey.png" alt=""></a>
                        <a href="https://www.instagram.com/greenpandagame"><img src="/src/assets/img/icn-instagram-grey.png" alt=""></a>
                        <a href="https://www.linkedin.com/company/green-panda-games/"><img src="/src/assets/img/icn-linkedin-grey.png" alt=""></a>
                        <a href="https://www.vk.com/green_panda_games/"><img src="/src/assets/img/icn-vk-grey.png" alt=""></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright">
            <div class="container">
                <span>© 2018 GREEN PANDA GAMES. ALL RIGHTS RESERVED.</span>
                <form class="md-small-hide">
                    <v-select v-model="selected" :options="options" class="select-lang"></v-select>
                </form>
            </div>
        </div>
        <snackbar class="snackbar-my"></snackbar>
    </footer>

</template>

<script>
    import accordion from '../components/accordion.vue'
    import snackbar from '../components/snackbar.vue'

    export default {
        props: ['icon', 'link'],
        data: () => ({
            show: false,
            options: [
                {id: 1, label: 'English'},
                {id: 2, label: 'Français'},
                {id: 3, label: 'Русский'},
            ],
            selected: {id: 1, label: 'English'},
        }),
        methods: {
        },
        components: {
            accordion,
            snackbar
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