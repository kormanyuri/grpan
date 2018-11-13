<template>

    <footer>
        <div class="site-map">
            <div class="container">
                <div class="site-map-mobile">
                    <accordion>
                        <div slot="header" class="block-heading">{{$t("message.MENU")}}</div>
                        <ul>
                          <li><router-link v-bind:to="'/' + locale.code">{{$t("message.Home")}}</router-link></li>
                          <li><router-link v-bind:to="'/' + locale.code + '/publishing'">{{$t("message.Publishing")}}</router-link></li>
                          <li><router-link v-bind:to="'/' + locale.code + '/games'">{{$t("message.Games")}}</router-link></li>
                          <li><router-link v-bind:to="'/' + locale.code + '/publishing#success-story'">{{$t("message.our_story")}}</router-link></li>
                          <li><router-link v-bind:to="'/' + locale.code + '/jobs'">{{$t("message.Career")}}</router-link></li>
                          <li><router-link v-bind:to="'/' + locale.code + '/support'">{{$t("message.contact_us")}}</router-link></li>
                        </ul>
                    </accordion>
                    <accordion>
                        <div slot="header" class="block-heading">{{$t("message.JOBS")}}</div>
                        <ul>
                            <li><a v-bind:href="'/' + locale.code + '/jobs#business'">{{$t("message.Business")}}</a></li>
                            <li><a v-bind:href="'/' + locale.code + '/jobs#marketing'">{{$t("message.Marketing")}}</a></li>
                            <li><a v-bind:href="'/' + locale.code + '/jobs#product'">{{$t("message.Product")}}</a></li>
                            <li><a v-bind:href="'/' + locale.code + '/jobs#human-resources'">{{$t("message.Human_resources")}}</a></li>
                            <li><a v-bind:href="'/' + locale.code + '/jobs'"  class="bold">+ {{$t("message.see_more")}}</a></li>
                        </ul>
                    </accordion>
                    <accordion>
                        <div slot="header" class="block-heading">{{$t("message.LEGAL")}}</div>
                        <ul>
                            <li v-for="item in legalPages">
                              <a v-if="item.url==='' || item.url === null" v-bind:href="'/' + locale.code + '/' + item.slug">{{item.title}}</a>
                              <a v-if="item.url!=='' && item.url !== null" v-bind:href="item.url">{{item.title}}</a>
                            </li>
                        </ul>
                    </accordion>
                    <accordion>
                        <div slot="header" class="block-heading">{{$t("message.CONTACT")}}</div>
                        <ul>
                            <li><router-link v-bind:to="'/' + locale + '/support'">{{$t("message.Support")}}</router-link></li>
                        </ul>
                    </accordion>
                </div>
                <div class="wrap-soc-link">
                    <div class="soc-link">
                        <a href="https://www.facebook.com/GreenPandaGames1/" target="_blank"><img src="/src/assets/img/icn-facebook-grey.svg" alt=""></a>
                        <a href="https://www.instagram.com/greenpandagame" target="_blank"><img src="/src/assets/img/icn-instagram-grey.svg" alt=""></a>
                        <a href="https://www.linkedin.com/company/green-panda-games/" target="_blank"><img src="/src/assets/img/icn-linkedin-grey.svg" alt=""></a>
                        <a v-if="locale.code == 'ru'" href="https://www.vk.com/green_panda_games/" target="_blank"><img src="/src/assets/img/icn-vk-grey.svg" alt=""></a>
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
                        <div class="block-heading">{{$t("message.MENU")}}</div>
                        <ul class="list">
                            <li><router-link v-bind:to="'/' + locale.code">{{$t("message.Home")}}</router-link></li>
                            <li><router-link v-bind:to="'/' + locale.code + '/publishing'">{{$t("message.Publishing")}}</router-link></li>
                            <li><router-link v-bind:to="'/' + locale.code + '/games'">{{$t("message.Games")}}</router-link></li>
                            <li>
                              <!--<router-link v-bind:to="'/' + locale.code + '/#our_story_anchor'">{{$t("message.our_story")}}</router-link>-->
                              <a v-bind:href="'/' + locale.code + '#our_story_anchor'">
                                {{$t("message.our_story")}}
                              </a>
                            </li>
                            <li><router-link v-bind:to="'/' + locale.code + '/jobs'">{{$t("message.Career")}}</router-link></li>
                            <li><router-link v-bind:to="'/' + locale.code + '/support'">{{$t("message.contact_us")}}</router-link></li>
                        </ul>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-15">
                        <div class="block-heading">{{$t("message.JOBS")}}</div>
                        <ul v-if="this.$router.currentRoute.name !== 'jobs'">
                            <li><a v-bind:href="'/' + locale.code + '/jobs#business'">{{$t("message.Business")}}</a></li>
                            <li><a v-bind:href="'/' + locale.code + '/jobs#marketing'">{{$t("message.Marketing")}}</a></li>
                            <li><a v-bind:href="'/' + locale.code + '/jobs#product'">{{$t("message.Product")}}</a></li>
                            <li><a v-bind:href="'/' + locale.code + '/jobs#human-resources'">{{$t("message.Human_resources")}}</a></li>
                            <li><a v-bind:href="'/' + locale.code + '/jobs'" class="bold">+ {{$t("message.see_more")}}</a></li>
                        </ul>
                        <ul v-if="this.$router.currentRoute.name === 'jobs'">
                          <li><a href="#" v-scroll-to="{el: '#business', offset: -100}">{{$t("message.Business")}}</a></li>
                          <li><a href="#" v-scroll-to="{el: '#marketing', offset: -100}">{{$t("message.Marketing")}}</a></li>
                          <li><a href="#" v-scroll-to="{el: '#product', offset: -100}">{{$t("message.Product")}}</a></li>
                          <li><a href="#" v-scroll-to="{el: '#human-resources', offset: -100}">{{$t("message.Human_resources")}}</a></li>
                          <li><a v-bind:href="'/' + locale.code + '/jobs'" class="bold">+ {{$t("message.see_more")}}</a></li>
                        </ul>
                    </div>
                    <!--<div class="md-layout-item md-small-size-100 md-size-15">-->
                        <!--<div class="block-heading">{{$t("message.PRESS")}}</div>-->
                        <!--<ul>-->
                            <!--<li><a href="">{{$t("message.press_kit")}}</a></li>-->
                        <!--</ul>-->
                    <!--</div>-->
                    <div class="md-layout-item md-small-size-100 md-size-15">
                        <div class="block-heading">{{$t("message.LEGAL")}}</div>
                        <ul>
                            <li v-for="item in legalPages">
                              <a v-if="item.url==='' || item.url === null" v-bind:href="'/' + locale.code + '/' + item.slug">{{item.title}}</a>
                              <a v-if="item.url!=='' && item.url !== null" v-bind:href="item.url">{{item.title}}</a>
                            </li>

                        </ul>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-small-size-100 md-size-15">
                        <div class="block-heading">{{$t("message.CONTACT")}}</div>
                        <ul>
                            <li><router-link v-bind:to="'/' + locale.code+'/support'">{{$t("message.Support")}}</router-link></li>
                        </ul>
                    </div>
                    <div class="md-layout-item md-size-25 soc-link">
                        <a href="https://www.facebook.com/GreenPandaGames1/" target="_blank"><img src="/src/assets/img/icn-facebook-grey.svg" alt=""></a>
                        <a href="https://www.instagram.com/greenpandagame" target="_blank"><img src="/src/assets/img/icn-instagram-grey.svg" alt=""></a>
                        <a href="https://www.linkedin.com/company/green-panda-games/" target="_blank"><img src="/src/assets/img/icn-linkedin-grey.svg" alt=""></a>
                        <a v-if="locale.code == 'ru'" href="https://vk.com/green_panda_games" target="_blank"><img src="/src/assets/img/icn-vk-grey.svg" alt=""></a>
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
    import Parser from '../tools/Parser';
    import Job from '../tools/Job';
    import LegalPage from '../tools/LegalPage';

    export default {
        props: ['icon', 'link'],

        data: function(){
           return {
               show: false,
               jobs: null,
               legalPages: null,
               departments: [],
               locale: {code: 'en', label: 'English'},
           }
        },
//        watch: {
//            locale (val) {
//                this.$i18n.locale = val.id
//            }
//        },
        created: function(){
          // if (this.$router.currentRoute.hash !== "") {
          //   setTimeout(() => {
          //     console.log(this.$router.currentRoute);
          //     // const scrollTo = scroller();
          //     this.$scrollTo(this.$router.currentRoute.hash, 1000, {offset: -100});
          //     // scrollTo(this.$router.currentRoute.hash);
          //   }, 500);
          //
          // }
        },
        updated(){
          if (this.$router.currentRoute.hash !== "") {
            setTimeout(() => {
              this.$scrollTo(this.$router.currentRoute.hash, 500, {offset: -120});
            }, 500);

          }
        },
        mounted: function(){

          const parser = new Parser();
          const job = new Job(parser.locale);
          const legalPage = new LegalPage(null, parser.locale);

          legalPage.loadItems(json => {
              this.legalPages = [];
              for(let i = 0; i < json.length; i++) {
                if (json[i].status === 1) {
                  this.legalPages.push(json[i]);
                }
              }
          });

          this.locale = {code: parser.locale, label: parser.localeLabel};

          job.update(json => {
            this.jobs = [];
            for(let i = 0; i < json.length; i++) {
              this.jobs.push(json[i]);
            }
          });

          // job.updateJoongle(json => {
          //   console.log(json);
          //   this.jobs = json.jobs;
          //
          //   for(let i = 0; i < this.jobs.length; i++) {
          //     //item.department.name
          //     if (!this.departments.includes(this.jobs[i].department.name)) {
          //       this.departments.push(this.jobs[i].department.name);
          //     }
          //
          //     console.log(this.departments);
          //   }
          //
          // });
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

  @media (max-width: 1280px) {
    .md-layout.md-gutter {
      margin-right: 20px;
      margin-left: 20px;
    }
  }
</style>
