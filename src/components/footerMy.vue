<template>

    <footer>
        <div class="site-map">
            <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-15">
                    <div class="block-heading">MENU</div>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Publishing</a></li>
                        <li><a href="">Games</a></li>
                        <li><a href="">Our story</a></li>
                        <li><a href="">Career</a></li>
                        <li><a href="">Contact us</a></li>
                    </ul>
                </div>
                <div class="md-layout-item md-size-15">
                    <div class="block-heading">JOBS</div>
                    <ul>
                        <li><a href="">Advertising analyst</a></li>
                        <li><a href="">Marketing analys</a></li>
                        <li><a href="">HTML5 Devloper</a></li>
                        <li><a href="">Marketing Manager</a></li>
                        <li><a href="" class="bold">+ See more</a></li>
                    </ul>
                </div>
                <div class="md-layout-item md-size-15">
                    <div class="block-heading">PRESS</div>
                    <ul>
                        <li><a href="">Press kit</a></li>
                    </ul>
                </div>
                <div class="md-layout-item md-size-15">
                    <div class="block-heading">LEGAL</div>
                    <ul>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Use</a></li>
                    </ul>
                </div>
                <div class="md-layout-item md-size-15">
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
        <div class="copyright">
            <span>© 2018 GREEN PANDA GAMES. ALL RIGHTS RESERVED.</span>
            <form novalidate class="select-lang">
                <md-field class="field">
                    <label for="language">English</label>
                    <md-select name="language" id="language" >
                        <md-option value="English">English</md-option>
                        <md-option value="French">Français</md-option>
                        <md-option value="Russian">Русский</md-option>
                    </md-select>
                </md-field>
            </form>

        </div>
    </footer>

</template>

<script>

    export default {
        props: ['icon', 'link'],
    }
</script>

<style lang="scss" scoped>
    footer {
        font-family: 'Open Sans', sans-serif;

        .block-heading {
            font-size: 14px;
            font-weight: bold;
            line-height: normal;
            letter-spacing: 0.9px;
            color: #ffffff;
            margin-bottom: 9px;
        }
        .site-map {
            height: 270px;
            padding: 44px 120px 0;
            background-color: #4d4d4d;
            ul {
                margin: 0;
                padding: 0;
                li {
                    list-style-type: none;
                    a {

                        font-size: 14px;
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
            height: 58px;
            padding: 0 120px;
            background-color: #343434;
            display: flex;
            align-items: center;
            span {
                margin-right: 60px;
                font-size: 14px;
                font-weight: normal;
                line-height: normal;
                letter-spacing: 0.9px;
                color: #acacac;
            }
        }
        .select-lang {
            width: 120px;
            height: 42px;
            margin: 0;
            border-radius: 100px;
            border: solid 1px #ffffff;
            display: flex;
            align-items: center;
            .field {
                margin: 0;
            }
            .field::after {
                display: none;
            }
        }

    }
</style>