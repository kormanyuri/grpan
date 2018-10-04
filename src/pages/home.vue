<template>

    <div class="page-container">

        <main-menu></main-menu>

        <div class="wrap-content" v-bind:class="{ 'mv-left': showRightMenu }">

            <section id="section-1">
                <!--<img src="/src/assets/img/bg-1.png" alt="" class="header-video">-->
                <div class="slogan">
                    We make your game a hit
                </div>
                <div class="md-layout btns-wrap">
                    <div class="md-layout-item md-small-size-100">
                        <md-button class="md-primary btn-0" style="margin-right: 18px">Learn more</md-button>
                    </div>
                    <div class="md-layout-item md-small-size-100">
                        <md-button class="md-primary btn-1">Submit your game</md-button>
                    </div>
                </div>
            </section>

            <section id="section-2">
                <div class="md-layout statistics">
                    <div class="md-layout-item md-small-size-33">
                        <span>50M+</span><br>
                        <span>users</span>
                    </div>
                    <div class="md-layout-item md-small-size-33">
                        <span>500K+</span><br>
                        <span>5 stars reviews</span>
                    </div>
                    <div class="md-layout-item md-small-size-33">
                        <span>30</span><br>
                        <span>mobile experts</span>
                    </div>
                </div>
            </section>

            <section id="section-3">
                <div class="md-layout grid-card-games" >
                    <div class="md-layout-item md-large-size-25 md-small-size-50">
                        <card-game title="Golf orbit" link="#">
                            <img src="/src/assets/img/games/preview_golf_orbit.png" alt="Golf Orbit">
                        </card-game>
                    </div>
                    <div class="md-layout-item md-large-size-25 md-small-size-50">
                        <card-game title="Bee factory" link="#">
                            <img src="/src/assets/img/games/preview_bee_factory.png" alt="Bee factory">
                        </card-game>
                    </div>
                    <div class="md-layout-item md-large-size-25 md-small-size-50">
                        <card-game title="Emoji craft!" link="#">
                            <img src="/src/assets/img/games/preview_emoji_craft.png" alt="Emoji craft!">
                        </card-game>
                    </div>
                    <div class="md-layout-item md-large-size-25 md-small-size-50">
                        <card-game title="Axe climber" link="#">
                            <img src="/src/assets/img/games/preview_axe_climber.png" alt="Axe climber">
                        </card-game>
                    </div>
                    <div class="md-layout-item md-large-size-25 md-small-size-50">
                        <card-game title="Terrarium" link="#">
                            <img src="/src/assets/img/games/preview_terrarium.png" alt="Terrarium">
                        </card-game>
                    </div>
                    <div class="md-layout-item md-large-size-25 md-small-size-50">
                        <card-game title="Golf boy" link="#">
                            <img src="/src/assets/img/games/preview_golf_boy.png" alt="Golf boy">
                        </card-game>
                    </div>
                    <div class="md-layout-item md-large-size-25 md-small-size-50">
                        <card-game title="Fish orbit" link="#">
                            <img src="/src/assets/img/games/preview_fish_orbit.png" alt="Fish orbit">
                        </card-game>
                    </div>
                    <div class="md-layout-item md-large-size-25 md-small-size-50">
                        <card-game-all title="All games" link="#">
                            <img src="/src/assets/img/games/preview_appstore.png" alt="All games">
                        </card-game-all>
                    </div>
                </div>
            </section>

            <section id="section-4">
                <div class="content">
                    <div class="title">Our story</div><br>
                    <div class="text">
                        Green Panda Games began in 2013 as a mobile gaming studio developing various hit classical games such as Solitaire, Blackjack, Logo Quiz and Sudoku. After much success in this field, we pivoted to a much bigger genre of games.<br>
                        <b>We are now a leading mobile games publisher dedicated to making your hyper-casual game a HIT.</b>
                    </div>
                    <button-arrow style="background-color: rgba(32,48,87,0.53); margin-left: 0">Publishing</button-arrow>
                </div>
                <img src="/src/assets/img/illu_our_story.png" class="mountains md-small-hide">
                <img src="/src/assets/img/illu_our_story_copter.png" class="copter md-small-hide">
            </section>

            <section id="section-5">
                <div class="carousel-wrap carousel-1">
                    <carousel paginationColor="#d8d8d8" paginationActiveColor="#4d4d4d" :perPage="1" :paginationSize="12">
                        <slide class="slide">
                            <card-right-img picture="/src/assets/img/story_pinpin_team.png" title="Success story" msg="« The Green Panda team impressed us at every stage with their expertise, professionalism and dedication. (…) They were with us every step of the way to create Golf Orbit and together we&apos;ve made it a success !  We found a genuine partner in Green Panda and will continue to work closely with them to create hit games.» " position="CEO OF PINPIN TEAM" project="Golf orbit, Fish Orbit" style="box-shadow: none"></card-right-img>
                        </slide>
                        <slide class="slide">
                            <card-right-img picture="/src/assets/img/story_pinpin_team.png" title="Success story" msg="« The Green Panda team impressed us at every stage with their expertise, professionalism and dedication. (…) They were with us every step of the way to create Golf Orbit and together we&apos;ve made it a success !  We found a genuine partner in Green Panda and will continue to work closely with them to create hit games.» " position="CEO OF PINPIN TEAM" project="Golf orbit, Fish Orbit" style="box-shadow: none"></card-right-img>
                        </slide>
                        <slide class="slide">
                            <card-right-img picture="/src/assets/img/story_pinpin_team.png" title="Success story" msg="« The Green Panda team impressed us at every stage with their expertise, professionalism and dedication. (…) They were with us every step of the way to create Golf Orbit and together we&apos;ve made it a success !  We found a genuine partner in Green Panda and will continue to work closely with them to create hit games.» " position="CEO OF PINPIN TEAM" project="Golf orbit, Fish Orbit" style="box-shadow: none"></card-right-img>
                        </slide>
                    </carousel>
                </div>
            </section>

            <section id="section-6">
                <div class="section-head">
                    Jobs
                </div>
                <div class="md-layout wrap-join-our-team">
                    <div class="md-layout-item md-size-25 md-small-hide">
                        <div class="join-our-team">
                            <img src="/src/assets/img/illu_join_team.png" alt="join team">
                            <div>Want to join<br>our team?</div>
                        </div>
                    </div>
                    <div class="md-layout-item md-size-25">
                        <card-vacancy vacancy="Designer mobile CDI H/F" location="Paris, CDI" link="#"></card-vacancy>
                    </div>
                    <div class="md-layout-item md-size-25">
                        <card-vacancy vacancy="HTM5 developer" location="Paris, CDI" link="#"></card-vacancy>
                    </div>
                    <div class="md-layout-item md-size-25">
                        <card-vacancy vacancy="Digital advertising analyst H/F CDI" location="Paris, CDI" link="#"></card-vacancy>
                    </div>
                </div>
                <div style="text-align: center">
                    <button-arrow>Check all offers</button-arrow>
                </div>
            </section>

            <section id="section-7">
                <div class="section-body">
                    <h1>Green Panda News</h1>
                    <div class="subtitle">Stay in touch and get fresh updates about Green Panda Games!</div>
                    <div class="md-layout md-gutter wrap-soc-link">
                        <div class="md-layout-item md-size-25">
                            <soc-link icon="/src/assets/img/icn-facebook.png" link="https://www.facebook.com/GreenPandaGames/"></soc-link>
                        </div>
                        <div class="md-layout-item md-size-25">
                            <soc-link icon="/src/assets/img/icn-instagram.png" link="https://www.instagram.com/greenpandagame"></soc-link>
                        </div>
                        <div class="md-layout-item md-size-25">
                            <soc-link icon="/src/assets/img/icn-vk.png" link="https://www.vk.com/green_panda_games/"></soc-link>
                        </div>
                        <div class="md-layout-item md-size-25">
                            <soc-link icon="/src/assets/img/icn-linkedin.png" link="https://www.linkedin.com/company/green-panda-games/"></soc-link>
                        </div>
                    </div>
                </div>
            </section>

        </div>

        <footer-my></footer-my>

    </div>

</template>

<script>

    import mainMenu from '../components/mainMenu.vue'
    import cardVacancy from '../components/cardVacancy.vue'
    import socLink from '../components/socLink.vue'
    import { Carousel, Slide } from 'vue-carousel'
    import cardRightImg from '../components/cardRightImg.vue'

//    var el = document.getElementById('section-4');
//
//    function getPosition(element) {
//        var xPosition = 0;
//        var yPosition = 0;
//
//        while(element) {
//            xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
//            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
//            element = element.offsetParent;
//        }
//
//        return { x: xPosition, y: yPosition };
//    }
//
//    var posEl = getPosition(el);
//
//    window.document.body.onscroll = function() {
//        console.log(123);
//    }
    export default {
        name: 'Temporary',
        data: () => ({
            showRightMenu: false,
        }),
        methods: {

            handleScroll() {
//                console.log(posEl);
//                if(window.scollY === posEl ){
//                    console.log(posEl);
//                }

            }

        },

//        created () {
//            window.addEventListener('scroll', this.handleScroll);
//        },
//        destroyed () {
//            window.removeEventListener('scroll', this.handleScroll);
//        },

        components: {
            mainMenu,
            Carousel,
            Slide,
            cardVacancy,
            socLink,
            cardRightImg
        }
    }
</script>

<style lang="scss" scoped>
    .page-container {
        position: relative;
    }
    .mv-left {
        left: -282px !important;

    }
    .wrap-content {
        position: relative;
        /*top: 94px;*/
        left: 0px;
        width: 100%;
        transition: 0.5s cubic-bezier(.25,.8,.25,1);
        transition-property: left;
    }
    #section-1 {
        height: 100vh;
        overflow: hidden;
        background: url('/src/assets/img/bg-1.png') no-repeat;
        background-size: cover;
        .slogan {
            width: 100%;
            font-family: 'Poppins', sans-serif;
            font-size: 54px;
            font-weight: bold;
            color: #fff;
            letter-spacing: 0.9px;
            text-align: center;
            line-height: 50px;
            margin-top: 19.5%;
            margin-bottom: 100px;
        }
    }
    #section-3,
    #section-6{
        padding: 0 110px;
    }
    #section-3 {
        padding-bottom: 152px;
    }
    #section-4 {
        height: 556px;
        background-image: linear-gradient(1deg, #2a548f, #303d6a);
        font-family: 'Poppins', sans-serif;
        position: relative;

        .content {
            width: 660px;
            color: #fff;
            padding-top: 110px;
            padding-left: 120px;
            .title {
                font-size: 36px;
                font-weight: normal;
                letter-spacing: 0.6px;
                margin-bottom: 24px;
            }
            .text {
                font-size: 14px;
                font-weight: 300;
                line-height: 1.79;
                letter-spacing: 0.9px;
                margin-bottom: 35px;
            }
        }
        .mountains {
            position: absolute;
            right: 0;
            bottom: 0;
        }
        .copter {
            position: absolute;
            right: 90px;
            bottom: 120px;
        }
    }

    #section-5 {
        padding: 0 170px;
        margin-bottom: 128px;
    }
    #section-6 {
        font-family: 'Poppins', sans-serif;
        background-color: #f5f4f9;
        padding-top: 104px;
        padding-bottom: 105px;
        overflow: hidden;
        .section-head {
            display: none;
            text-align: center;
            font-size: 26px;
            line-height: normal;
            letter-spacing: 0.4px;
            color: #848c9a;
        }
    }
    #section-7 {
        font-family: 'Poppins', sans-serif;
        padding-top: 120px;
        padding-bottom: 128px;
        .section-body {
            max-width: 940px;
            margin: 0 auto;
            > h1 {
                  font-size: 48px;
                  font-weight: bold;
                  line-height: 1;
                  letter-spacing: 0.8px;
                  text-align: center;
                  color: #030303;
                  margin: 0 auto 20px;
              }
            .subtitle {
                font-size: 14px;
                font-weight: 300;
                line-height: normal;
                letter-spacing: 0.9px;
                text-align: center;
                color: #4a4a4a;
                margin-bottom: 70px;
            }
            .wrap-soc-link {
                text-align: center;
            }
        }
    }
    .grid-card-games {
        .md-layout-item {
            padding: 21px 12px;
        }
    }
    .btns-wrap {
        >div:first-child {
            text-align: right;
         }
    }
    .btn-0 {
        height: 50px;
        min-width: 184px;
        background-color: rgba(255, 184, 37, 0);
        color: #ffffff !important;
        border: 1px solid #ffffff;
        border-radius: 4px;
        font-size: 16px;
        text-transform: none;
        padding: 0 8px;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        letter-spacing: 0.7px;
    }
    .btn-1 {
        height: 50px;
        min-width: 184px;
        background-color: #ffb825;
        color: #ffffff !important;
        border-radius: 4px;
        font-size: 16px;
        text-transform: none;
        padding: 0 8px;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        letter-spacing: 0.7px;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.24);
    }
    .statistics {
        font-family: 'Poppins', sans-serif;
        color: #828a98;
        height: 109px;
        text-align: center;
        width: 927px;
        margin: 100px auto 60px;
        > div {
            height: 100%;
            padding-top: 10px;
          }
        > div span:first-child {
            font-size: 46px;
            font-weight: bold;
            letter-spacing: 0.8px;
            line-height: 59px;
        }
        > div span:last-child {
            opacity: 0.66;
            font-size: 20px;
            font-weight: 300;
            letter-spacing: 1.3px;
        }
        > div:nth-child(1),
        > div:nth-child(2) {
            border-right: 1px solid #d2d8e2;
        }
    }
    .carousel-wrap {
        height: 357px;
        border-radius: 6px;
        background-color: #ffffff;
        box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.2);
    }
    .carousel-1 {
        margin-top: -20px;
        position: relative;
    }
    .wrap-join-our-team {
        width: 1224px;
        margin: 0 auto;
        margin-bottom: 40px;
        .md-layout-item {
            padding: 12px;
        }
    }
    .join-our-team {
        border-radius: 8px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.12);
        background-image: linear-gradient(to top, #38cc7f, #24bb83);
        border: solid 8px #ffffff;
        position: relative;
        padding: 8px 0 4px 8px;
        > div {
            position: absolute;
            right: 30px;
            bottom: 22px;
            font-size: 20px;
            font-weight: bold;
            letter-spacing: 0.3px;
            line-height: normal;
            color: #ffffff;
         }
    }
    @media (min-width: 960px) {
        .hide-small-up {
            display: none;
        }
    }
    @media (max-width: 960px) {
        #section-1 {
            height: 386px;
            .slogan {
                margin-top: 28%;
                margin-bottom: 10%;
                font-size: 27px;
                letter-spacing: 0.5px;
                padding: 0 80px;
                line-height: 37px;
            }
        }
        #section-3 {
            padding: 0 11px 55px;
        }
        #section-4 {
            height: auto;
            padding-bottom: 110px;
            .content {
                width: auto;
                padding: 40px 21px 0;
                .title {
                    font-size: 26px;
                    font-weight: normal;
                    letter-spacing: 0.6px;
                    margin-bottom: 5px;
                }
                .text {
                    margin-bottom: 27px;
                }
            }
        }
        #section-5 {
            padding: 0 12px;
            margin-bottom: 60px;
        }
        #section-6 {
            padding: 10px 10px 55px 10px;
            .section-head {
                display: block;
                margin-bottom: 5px;
            }
        }
        #section-7 {
            padding-top: 50px;
            padding-bottom: 40px;
            .section-body {
                > h1 {
                      font-size: 27px;
                      font-weight: bold;
                      letter-spacing: 0.5px;
                        margin-bottom: 25px;
                  }
                  .subtitle {
                      margin-bottom: 35px;
                  }
                .wrap-soc-link {
                    padding: 0 70px;
                }
            }
        }
        .wrap-join-our-team {
            margin-bottom: 30px;
        }
        .grid-card-games {
            .md-layout-item {
                padding: 5px 17px;
            }
        }
        .statistics {
            height: 50px;
            width: 360px;
            margin: 40px auto 40px;
            line-height: 20px;
            > div span:first-child {
                  font-size: 24px;
                  font-weight: bold;
                  letter-spacing: 0.4px;
                  line-height: 10px;
              }
            > div span:last-child {
                  font-size: 12px;
                  letter-spacing: 0.8px;
              }
            > div:nth-child(1),
            > div:nth-child(2) {
                  border-right: none;
              }
        }
        .btns-wrap {
            .btn-0 {
                margin-right: 8px !important;
                margin-bottom: 12px;
            }
            > div:first-child {
                 text-align: center;
            }
            > div:last-child {
                    text-align: center;
            }
        }
        .carousel-wrap {
            height: 418px;
        }
        .carousel-1 {
            margin-top: -80px;
        }
    }
</style>