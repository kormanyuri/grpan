<template>

    <div class="page-container">

        <main-menu></main-menu>

        <div class="wrap-content" v-bind:class="{ 'mv-left': showRightMenu }">

            <section id="section-1">
                <video id="head-video" width="100%" height="auto" autoplay="autoplay" muted loop="loop" preload="auto">
                    <source src="/src/assets/video/header_video_2.mp4" type="video/mp4" />
                </video>
                <div class="content">
                    <div class="slogan">
                        {{staticContent ? staticContent.header.title : ''}}
                    </div>
                    <div class="md-layout btns-wrap">
                        <div class="md-layout-item md-xsmall-size-100 md-small-size-50">
                            <a href="#" v-scroll-to="{el: '#section-2', offset: -194}">
                                <md-button class="md-primary btn-0" style="margin-right: 18px">{{$t("message.learn_more")}}</md-button>
                            </a>
                        </div>
                        <div class="md-layout-item md-xsmall-size-100 md-small-size-50">
                            <router-link v-bind:to="'/' + locale + '/publishing#want-to-work-with-us-form'">
                                <md-button class="md-primary btn-1">{{$t("message.Submit_your_game")}}</md-button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <a class="md-small-hide md-medium-hide mouse" href="#" v-scroll-to="{el: '#section-2', offset: -194}">
                    <img srcset="/src/assets/img/mouse.png 1x,
                                 /src/assets/img/mouse@2x.png 2x,
                                 /src/assets/img/mouse@3x.png 3x"
                         src="/src/assets/img/mouse.png" alt="Golf Orbit">
                </a>

            </section>

            <section id="section-2">
                <div class="md-layout statistics container">
                    <div class="md-layout-item md-small-size-33">
                        <span>50M+</span><br>
                        <span>{{$t("message.users")}}</span>
                    </div>
                    <div class="md-layout-item md-small-size-33">
                        <span>500K+</span><br>
                        <span>5 {{$t("message.stars_reviews")}}</span>
                    </div>
                    <div class="md-layout-item md-small-size-33">
                        <span>30</span><br>
                        <span>{{$t("message.mobile_experts")}}</span>
                    </div>
                </div>
            </section>

            <section id="section-3" class="container">
                <div class="md-layout grid-card-games" >
                    <div v-for="item in games" v-if="item.category.id == 1" class="md-layout-item md-xsmall-size-50 md-small-size-25 md-medium-size-25 md-large-size-25 md-xlarge-size-25">
                        <card-game v-bind:title="item.name" v-bind:link="item.url">
                            <img v-bind:srcset="'http://greenpanda.ceant.net/admin/storage/' + item.image + ' 1x, http://greenpanda.ceant.net/admin/storage/'+item.image + ' 2x'"
                                 v-bind:src="'http://greenpanda.ceant.net/admin/storage/' + item.image" v-bind:alt="item.name">
                        </card-game>
                    </div>
                    <div class="md-layout-item md-xsmall-size-50 md-small-size-25 md-large-size-25 md-xlarge-size-25">
                        <card-game-all title="All games" v-bind:link="'/'+ locale + '/games'">
                            <img srcset="/src/assets/img/games/preview_appstore.png 1x,
                                         /src/assets/img/games/preview_appstore@2x.png 2x"
                                 src="/src/assets/img/games/preview_appstore.png" v-bind:alt="$t('message.All_games')">
                        </card-game-all>
                    </div>
                </div>
            </section>

            <section id="section-4">
                <div id="our_story_anchor" class="container">
                    <div class="content">
                        <div class="title">{{staticContent ? staticContent.our_story.title : ''}}</div><br>
                        <div class="text">
                            {{staticContent ? staticContent.our_story.text : ''}}
                            <!--Green Panda Games began in 2013 as a mobile gaming studio developing various hit classical games such as Solitaire, Blackjack, Logo Quiz and Sudoku. After much success in this field, we pivoted to a much bigger genre of games.<br>-->
                            <!--<b>We are now a leading mobile games publisher dedicated to making your hyper-casual game a HIT.</b>-->
                        </div>
                        <router-link v-bind:to="locale + '/publishing'">
                            <button-arrow style="background-color: rgba(32,48,87,0.53); margin-left: 0">{{$t("message.Publishing")}}</button-arrow>
                        </router-link>
                    </div>
                </div>
                <img src="/src/assets/img/illu_our_story.png" class="mountains md-small-hide">
                <img src="/src/assets/img/illu_our_story_copter.png" class="copter md-small-hide">
            </section>

            <section id="section-5" class="container">
                <div class="carousel-wrap">
                    <owl-carousel  v-if="staticContent" :items="1" :nav="false" :responsive="false" class="carousel-1">
                        <div v-if="staticContent" v-for="item in staticContent.success_story.slides" class="carousel-item">
                            <card-right-img picture="/src/assets/img/story_pinpin_team.png" v-bind:title="item.title" v-bind:msg="item.text" position="CEO OF PINPIN TEAM" project="Golf orbit, Fish Orbit" style="box-shadow: none"></card-right-img>
                        </div>
                    </owl-carousel>
                </div>
            </section>
            <section id="section-6">
                <div v-if="jobs.length > 0" class="container">
                    <div class="section-head">
                      {{$t("message.JOBS")}}
                    </div>

                    <owl-carousel :autoWidth="true" :items="4" :nav="false" :dots="false" :responsive="false" class="carousel-2">
                        <div class="carousel-item" style="margin-left: 24px">
                            <div class="join-our-team">
                                <img src="/src/assets/img/illu_join_team.png" alt="join team">
                                <div v-html="$t('message.Want_to_join_our_team')"></div>
                            </div>
                        </div>
                        <div v-for="item in jobs" class="carousel-item">
                            <card-vacancy v-bind:vacancy="item.name" v-bind:location="item.city" v-bind:link="locale+'/jobs'" ></card-vacancy>
                        </div>
                        <!--<div class="carousel-item">-->
                            <!--<card-vacancy vacancy="Digital advertising analyst H/F CDI" location="Paris, CDI" link="#" ></card-vacancy>-->
                        <!--</div>-->
                        <!--<div class="carousel-item">-->
                            <!--<card-vacancy vacancy="Digital advertising analyst H/F CDI" location="Paris, CDI" link="#" ></card-vacancy>-->
                        <!--</div>-->
                    </owl-carousel>

                    <div style="text-align: center">
                        <router-link v-bind:to="locale+'/jobs'">
                            <button-arrow>{{$t("message.Check_all_offers")}}</button-arrow>
                        </router-link>
                    </div>
                </div>
            </section>
            <section id="section-7" class="container">
                <div class="section-body">
                    <h1>{{staticContent ? staticContent.news.title : ''}}</h1>
                    <div class="subtitle">{{staticContent ? staticContent.news.text : ''}}</div>
                    <div class="md-layout md-gutter wrap-soc-link">
                        <div v-bind:class="locale != 'ru'? 'md-layout-item md-size-33': 'md-layout-item md-size-25'">
                            <soc-link icon="/src/assets/img/icn-facebook.svg" link="https://www.facebook.com/GreenPandaGames1/"></soc-link>
                        </div>
                        <div v-bind:class="locale != 'ru'? 'md-layout-item md-size-33': 'md-layout-item md-size-25'">
                            <soc-link icon="/src/assets/img/icn-instagram.svg" link="https://www.instagram.com/greenpandagame"></soc-link>
                        </div>
                        <div v-if="locale == 'ru'" class="md-layout-item md-size-25">
                            <soc-link icon="/src/assets/img/icn-vk.svg" link="https://vk.com/green_panda_games"></soc-link>
                        </div>
                        <div v-bind:class="locale != 'ru'? 'md-layout-item md-size-33': 'md-layout-item md-size-25'">
                            <soc-link icon="/src/assets/img/icn-linkedin.svg" link="https://www.linkedin.com/company/green-panda-games/"></soc-link>
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
    import cardRightImg from '../components/cardRightImg.vue'
    import owlCarousel from 'v-owl-carousel'
    import Game from '../tools/Game';
    import Parser from '../tools/Parser';
    import StaticContent from '../tools/StaticContent';
    import Job from '../tools/Job';

    function getPosition(element) {
        var xPosition = 0;
        var yPosition = 0;

        while(element) {
            xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }

        return { x: xPosition, y: yPosition };
    }


    export default {
        name: 'home',
        data: () => ({
            locale: '',
            games: [],
            jobs: [],
            staticContent: null,
            showRightMenu: false,
            posCopter: 120, //start Y position copter
            PosMountains: -100 //start Y position mountains
        }),
        mounted: function () {
            this.$nextTick(function () {

                let posSection = getPosition(document.getElementById('section-4')).y;
                let posCopter = this.posCopter;
                let PosMountains = this.PosMountains;

                document.getElementsByClassName('copter')[0].style.bottom = posCopter + "px";
                document.getElementsByClassName('mountains')[0].style.bottom = PosMountains + "px";

                window.document.body.onscroll = function() {

                    let currScrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    let delta = 0;

                    if(currScrollTop >= posSection){
                        delta = currScrollTop - posSection;

                        if (typeof document.getElementsByClassName('mountains')[0] !== 'undefined') {
                          document.getElementsByClassName('mountains')[0].style.bottom = delta * 0.1 + PosMountains + "px";
                        }

                        document.getElementsByClassName('copter')[0].style.bottom = (delta * 0.35) +  "px";
                    }

                }
            })

            const parser = new Parser();

            this.locale = parser.locale;
        },
        created: function () {
            const parser = new Parser();

            const game = new Game(parser.locale);
            const job = new Job(parser.locale);
            const staticContent = new StaticContent(parser.route, parser.locale);

            game.update(json => {
              for (let i = 0; i < json.length; i++ ) {
                this.games.push({
                  name: json[i].name,
                  image: json[i].image,
                  url: json[i].url,
                  category: json[i].category
                });
              }
            });

            staticContent.update(json => {
              this.staticContent = json.data;
            });

            job.update(json => {
              this.jobs = json;
            });

        },
        components: {
            mainMenu,
            cardVacancy,
            socLink,
            cardRightImg,
            owlCarousel
        }
    }
</script>

<style lang="scss" scoped>

    $k: 768/375;


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
        background-size: cover;
        position: relative;
        > video {
              position: absolute;
              top: 0;
              left: 0;
              min-width: 100%;
              min-height: 100%;
              width: auto;
              height: auto;
              z-index: 1;
          }
        .content {
            position: absolute;
            z-index: 1;
            top: 34%;
            /*text-align: center;*/
            width: 100%;
        }
        .slogan {
            width: 100%;
            font-family: 'Poppins', sans-serif;
            font-size: 3.375rem;
            font-weight: bold;
            color: #fff;
            letter-spacing: 0.9px;
            text-align: center;
            line-height: 50px;
            /*margin-top: 19.5%;*/
            margin-bottom: 100px;
        }
        .mouse {
            position: absolute;
            left: 50%;
            bottom: 30px;
            margin-left: -16px;
            z-index: 1;
        }
    }
    @supports (object-fit: cover) {
        #section-1 > video {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    #section-3 {
        padding-bottom: 152px;
    }
    #section-4 {
        height: 556px;
        background-image: linear-gradient(1deg, #2a548f, #303d6a);
        font-family: 'Poppins', sans-serif;
        position: relative;
        overflow: hidden;
        .content {
            width: 660px;
            color: #fff;
            padding-top: 110px;
            /*padding-left: 120px;*/
            .title {
                font-size: 2.25rem;
                font-weight: normal;
                letter-spacing: 0.6px;
                margin-bottom: 24px;
            }
            .text {
                font-size: 0.875rem;
                font-weight: 300;
                line-height: 1.79;
                letter-spacing: 0.9px;
                margin-bottom: 35px;
                position: relative;
                z-index: 3;
            }
        }
        .mountains {
            position: absolute;
            right: 0;
            bottom: 0;
            height: 120%;
        }
        .copter {
            position: absolute;
            right: 90px;
            bottom: 120px;
        }
    }

    #section-5 {
        padding: 0 50px;
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
            font-size: 1.626rem;
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
                  font-size: 3rem;
                  font-weight: bold;
                  line-height: 1;
                  letter-spacing: 0.8px;
                  text-align: center;
                  color: #030303;
                  margin: 0 auto 20px;
              }
            .subtitle {
                font-size: 0.875rem;
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
        font-size: 1rem;
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
        font-size: 1rem;
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
            font-size: 2.875rem;
            font-weight: bold;
            letter-spacing: 0.8px;
            line-height: 59px;
        }
        > div span:last-child {
            opacity: 0.66;
            font-size: 1.25rem;
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
    .carousel-2 {
        /*width: 1200px;*/
        margin: 0 auto 40px;
       .carousel-item {
            width: 282px;
           margin-left: 24px;
            margin-bottom: 18px;
          }
    }
    .join-our-team {
        border-radius: 8px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.12);
        background-image: linear-gradient(to top, #38cc7f, #24bb83);
        border: solid 8px #ffffff;
        position: relative;
        padding: 8px 0 4px 8px;
        height: 134px;
        > img {
            height: auto;
            width: auto;
            position: absolute;
            left: 9px;
            top: 9px;
            bottom: 9px;
        }
        > div {
            margin-left: 110px;
            font-size: 1.25rem;
            font-weight: bold;
            letter-spacing: 0.3px;
            line-height: normal;
            color: #ffffff;
            padding-top: 37px;
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
            .content {
                top: 28%;
            }
            .slogan {
                margin-bottom: 10%;
                font-size: 1.6875rem;
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
                    font-size: 1.625rem;
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
            padding: 10px 0 55px 20px;
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
                      font-size: 1.6875rem;
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
        .carousel-2 {
            width: 100vw;
            /*padding-left: 20px;*/
            margin: 0 auto 30px;
            .carousel-item {
                width: 282px;
                margin-bottom: 18px;
                margin-left: 24px;
            }
        }
        .grid-card-games {
            .md-layout-item {
                padding: 5px 17px;
            }
        }
        .statistics {
            height: 50px;
            width: 360px;
            margin: (40px * $k) auto (40px * $k);
            line-height: 20px;
            > div span:first-child {
                  font-size: 1.5rem;
                  font-weight: bold;
                  letter-spacing: 0.4px;
                  line-height: 10px;
              }
            > div span:last-child {
                  font-size: 0.75rem;
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
        /*.carousel-wrap {*/
            /*height: 418px;*/
        /*}*/
        .carousel-1 {
            margin-top: -80px;
        }
    }

    @media (min-width: 600px) and (max-width: 1290px) {

        #section-1 {
            .content {
                top: 0;
            }
        }

    }
    @media (max-width: 376px) {
        .carousel-wrap {
            height: 418px;
        }
    }
    @media (min-width: 376px) and (max-width: 415px) {
        .carousel-wrap {
            height: 408px;
        }
    }

    @media (min-width: 416px) and (max-width: 768px) {
        .carousel-wrap {
            /*height: 240px;*/
        }
        .owl-theme .owl-nav.disabled + .owl-dots {
            margin-top: 100px !important;
        }
        .card-right-img {
            /*min-height: 0 !important;*/
        }
    }

    @media (min-width: 600px) and (max-width: 960px){
        #section-1 {
            .slogan {
                margin-top: 19.5%;
            }
        }
        .btns-wrap {
            > div:first-child {
                text-align: right;
              }
            > div:last-child {
                text-align: left;
              }
        }

    }

    @media (min-width: 600px) and (max-width: 960px){
        .statistics {
            width: 600px;
            > div:nth-child(1),
            > div:nth-child(2) {
                  border-right: 1px solid #d2d8e2;
              }
        }
    }

    @media (min-width: 768px) and (max-width: 992px) {
        .carousel-wrap {
            /*height: 0;*/
            /*margin-bottom: 200px;*/
        }
    }

    @media (min-width: 960px) and (max-width: 1280px){
        #section-1 {
            height: 586px;
            .slogan {
                margin-top: 19.5%;
            }
        }
        .btns-wrap {
            > div:first-child {
                text-align: right;
            }
            > div:last-child {
                text-align: left;
            }
        }
        .statistics {
            margin: (40px * $k) auto (40px * $k);
        }
    }

    @media (min-width: 1280px) {
        #section-6 {
            .container {
                max-width: 1224px !important;
            }
        }
    }

</style>
