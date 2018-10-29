<template>
    <div class="page-container">

        <main-menu></main-menu>

        <div id="games">

            <header-my v-bind:title="staticContent ? staticContent.header.title : ''" v-bind:subtitle="staticContent ? staticContent.header.text : ''" class="header-my"></header-my>

            <section class="group-games container">
                <div class="group-games-head">
                  {{ $t("message.Published_Games") }}
                </div>
                <div class="group-games-body">
                    <div class="md-layout grid-card-games" >
                        <div v-for="item in games" v-if="item.category.id == 1" class="md-layout-item md-xsmall-size-50 md-small-size-25 md-medium-size-25 md-large-size-25 md-xlarge-size-25">
                            <card-game v-bind:title="item.name" v-bind:link="item.url">
                                <img v-bind:srcset="backendUrl + 'admin/storage/' + item.image + ' 1x,'+
                                             backendUrl + 'admin/storage/' + item.image +' 2x'"
                                     v-bind:src="backendUrl + 'admin/storage/' + item.image" v-bind:alt="item.name">
                            </card-game>
                        </div>
                        <div class="md-layout-item md-xsmall-size-50 md-small-size-25 md-medium-size-25 md-large-size-25 md-xlarge-size-25">
                            <card-game-all title="See on the Appstore" v-bind:link="settings.app_store_url" target="_blank">
                                <img srcset="/src/assets/img/games/preview_appstore.png 1x,
                                             /src/assets/img/games/preview_appstore@2x.png 2x"
                                     src="/src/assets/img/games/preview_appstore.png" v-bind:alt="$t('message.All_games')"/>
                            </card-game-all>
                        </div>
                    </div>
                </div>
            </section>

            <md-divider class="divider"></md-divider>

            <section class="group-games mrgn-b container">
                <div class="group-games-head">
                  {{$t("message.Classic_Games")}}
                </div>
                <div class="group-games-body">
                    <div class="md-layout grid-card-games" >
                        <div v-for="item in games" v-if="item.category.id == 2" class="md-layout-item md-xsmall-size-50 md-small-size-25 md-medium-size-25 md-large-size-25 md-xlarge-size-25">
                            <card-game v-bind:title="item.name" v-bind:link="item.url">
                              <img v-bind:srcset="backendUrl + 'admin/storage/' + item.image + ' 1x,'+
                                             backendUrl + 'admin/storage/' + item.image +' 2x'"
                                   v-bind:src="backendUrl + 'admin/storage/' + item.image" v-bind:alt="item.name">                            </card-game>
                        </div>

                        <div class="md-layout-item md-xsmall-size-50 md-small-size-25 md-medium-size-25 md-large-size-25 md-xlarge-size-25">
                            <card-game-all title="See on the Appstore"  v-bind:link="settings.app_store_url" target="_blank">
                                <img srcset="/src/assets/img/games/preview_appstore.png 1x,
                                             /src/assets/img/games/preview_appstore@2x.png 2x"
                                     src="/src/assets/img/games/preview_appstore.png" v-bind:alt="$t('message.All_games')"/>
                            </card-game-all>
                        </div>
                    </div>
                </div>
            </section>

            <section class="learn-more">
                <div class="title">
                    {{staticContent ? staticContent.bottom.title : ''}}
                </div>
                <div class="subtitle md-small-hide">
                    {{staticContent ? staticContent.bottom.text : ''}}
                    <!--Please contact our team if you need more information or if you have a<br>game you want to publish with us. We will reply to you as soon as possible !-->
                </div>
                <router-link v-bind:to="'/' + locale + '/publishing'">
                    <button-arrow>{{$t("message.Publishing")}}</button-arrow>
                </router-link>
            </section>

            <footer-my></footer-my>

        </div>

    </div>
</template>

<script>

    import {config} from '../config/config'
    import Parser from '../tools/Parser'
    import StaticContent from '../tools/StaticContent'
    import Game from '../tools/Game'
    import GameCategory from '../tools/GameCategory'
    import Setting from '../tools/Setting'
    import mainMenu from '../components/mainMenu.vue'
    import headerMy from '../components/headerMy.vue'

    export default {
        name: 'games',
        components: {
            headerMy,
            mainMenu
        },
        data: () => ({
          staticContent: null,
          games: [],
          gameCategories: [],
          settings: [],
          locale: '',
          backendUrl: config.backendUrl
        }),
        created: function(){
          const parser = new Parser();
          const staticContent = new StaticContent(parser.route, parser.locale);
          const game = new Game(parser.locale);
          const gameCategory = new GameCategory();
          const setting = new Setting();

          this.locale = parser.locale;

          staticContent.update(json => {
            this.staticContent = json.data;
          });

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

          gameCategory.update(json => {
            for (let i = 0; i < json.length; i++ ) {
              this.gameCategories.push({
                id: json[i].id,
                name: json[i].name
              });
            }
          });

          setting.update(json => {
            this.settings = json[0].data;
          });
        }
    }
</script>

<style lang="scss" scoped>
    
	.header-my {
        background-image: url('/src/assets/img/header_games.png');
        background-image: -webkit-image-set(url('/src/assets/img/header_games.png') 1x,
                url('/src/assets/img/header_games@2x.png') 2x);
        background-image: -moz-image-set(url('/src/assets/img/header_games.png') 1x,
                url('/src/assets/img/header_games@2x.png') 2x);
        background-image: -o-image-set(url('/src/assets/img/header_games.png') 1x,
                url('/src/assets/img/header_games@2x.png') 2x);
        background-image: -ms-image-set(url('/src/assets/img/header_games.png') 1x,
                url('/src/assets/img/header_games@2x.png') 2x);
        background-size: cover;
    }
    .grid-card-games {
        .md-layout-item {
            padding: 21px 12px;
        }
    }
    .group-games {
        padding-top: 53px;
        margin-bottom: 70px;
    }
    .group-games.mrgn-b {
        margin-bottom: 143px;
    }
    .group-games-head {
        font-family: 'Poppins', sans-serif;
        font-size: 36px;
        line-height: normal;
        letter-spacing: 0.6px;
        color: #848c9a;
        text-align: center;
        margin-bottom: 55px;
    }
    .group-games-body {
        margin: 0 auto;
    }
    .divider {
        opacity: 0.5;
        background-color: #d8d8d8;
    }
    .learn-more {
        height: 440px;
        background-color: #f5f4f9;
        font-family: 'Poppins', sans-serif;
        padding-top: 100px;
        padding-bottom: 89px;
        margin-top: 30px;
        text-align: center;
        .title {
            font-size: 48px;
            font-weight: bold;
            line-height: 1.89;
            letter-spacing: 0.8px;
            text-align: center;
            color: #030303;
        }
        .subtitle {
            font-size: 14px;
            font-weight: 300;
            line-height: normal;
            letter-spacing: 0.9px;
            text-align: center;
            color: #4a4a4a;
            margin-bottom: 65px;
        }
    }

    @media (max-width: 960px) {
        .group-games {
            padding-top: 43px;
            margin-bottom: 20px;
        }
        .group-games.mrgn-b {
            margin-bottom: 33px;
        }
        .group-games-head {
            font-size: 20px;
            letter-spacing: 0.3px;
            margin-bottom: 18px;
        }
        .grid-card-games {
            .md-layout-item {
                padding: 5px 17px;
            }
        }
        .group-games-body {
            width: 100%;
            padding: 16px;
            margin: 0;
        }
        .learn-more {
            height: 270px;
            margin-top: 30px;
            text-align: center;
            padding: 50px 16px 0;
            .title {
                font-size: 27px;
                line-height: normal;
                letter-spacing: 0.5px;
                margin-bottom: 32px;
            }
        }
    }

    @media (min-width: 767px) and (max-width: 992px) {
        .group-games.container {
            max-width: 720px +24px;
        }
    }
    @media (min-width: 992px) and (max-width: 1200px) {
        .group-games.container {
            max-width: 960px + 24px;
        }
    }
    @media (min-width: 1280px) {
        .group-games.container {
            max-width: 1200px + 24px;
        }
    }
	
</style>
