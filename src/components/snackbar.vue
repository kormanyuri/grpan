<template>
    <div class="snackbar-container">
      <transition name="snackbar">
        <div class="snackbar" v-if="show">
          <div class="md-layout" style="width: 100%">
            <div class="md-layout-item md-medium-size-95 md-large-size-80 md-xlarge-size-80">
              <div class="snackbar-text">
                <span v-html="$t('message.Cookie_Policy_Text')"></span>
                <router-link :to="'/' + locale.code + '/legal/privacy_policy'">{{$t("message.Cookie_Policy")}}</router-link>
              </div>
            </div>
            <div class="md-layout-item md-medium-size-100 md-large-size-20 md-xlarge-size-20 wrap-btn">
              <md-button class="md-primary btn-1" v-on:click="accept">{{$t("message.Accept")}}</md-button>
            </div>
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
    import Parser from '../tools/Parser';

    export default {
        name: 'snackbar',

        data() {
            return {
                show: !window.localStorage.getItem('accept_cookie_police'),
                locale: {code: 'en', label: 'English'}
            };
        },
        mounted: function(){
          const parser = new Parser();
          this.locale = {code: parser.locale, label: parser.localeLabel};
        },
        methods: {
            toggleSnackbar () {
                this.showSnackbar = !this.showSnackbar;
            },
            accept(){
              console.log('test');
              window.localStorage.setItem('accept_cookie_police', true);
              this.show = false;
            }
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

    .btn-1 {
        height: 50px;
        min-width: 150px;
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
        /*align-items: center;*/
        width: 100%;
        min-height: 48px;
        padding: 16px 24px;
        border-radius: 2px;
        /*opacity: 0.81;*/
        background-color: rgba(0,0,0,0.81);
    }

    .snackbar-text {
        font-size: 14px;
        color: white;
        text-align: center;
        margin: 0 auto;
        padding-top: 10px;
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

    @media(min-width: 1280px) {
        .snackbar {
            /*display: flex;*/
            align-items: center;
        }
        .wrap-btn {
            text-align: left;
            /*padding-top: 15px;*/
        }
    }
    @media(max-width: 1281px) {
        .wrap-btn {
            text-align: center;
            padding-top: 15px;
        }
        .snackbar-action {
            padding-left: 0px;
        }
    }


</style>
