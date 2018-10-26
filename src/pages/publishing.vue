<template v-if="staticContent">
    <div class="page-container">

        <main-menu></main-menu>

        <div id="publishing">

            <header-my v-if="staticContent" v-bind:title="staticContent.header.title" v-bind:subtitle="staticContent.header.text" class="header-my"></header-my>

            <section class="section-1 container">
                <div v-if="gpgPerks.length > 0" class="md-layout md-gutter group-card">
                    <div v-for="item in gpgPerks" class="md-layout-item md-xsmall-size-100 md-medium-size-50 md-small-size-50 md-xlarge-size-50">
                      <!--<img v-bind:srcset="'http://greenpanda.ceant.net/admin/storage/' + item.image + ' 1x,' +-->
                                          <!--'http://greenpanda.ceant.net/admin/storage/' + item.image +' 2x'"-->
                           <!--v-bind:src="'http://greenpanda.ceant.net/admin/storage/' + item.image" v-bind:alt="item.name">-->
                      <img v-bind:src="'http://greenpanda.ceant.net/admin/storage/' + item.image" v-bind:alt="item.name">

                      <div class="text">
                          <div v-html="item.name"></div>
                          <div>{{item.description}}</div>
                      </div>
                    </div>

                </div>
            </section>

            <section class="section-2" id="success-story">

                <div class="container">
                    <div class="section-head">
                        Success story
                    </div>

                    <div class="group-card-1 md-small-hide">
                        <div v-bind:class="key % 2 ?'align-right':''" v-for="(item, key) in testimonials" v-bind:data="key%2">
                            <card-right-img v-if="key % 2 === 0" class="max-w" v-bind:picture="'http://greenpanda.ceant.net/admin/storage/' + item.image" v-bind:title="item.name" v-bind:msg="item.description" v-bind:position="item.signature" project="Golf orbit, Fish Orbit"></card-right-img>
                            <card-left-img v-if="key % 2 === 1"  class="max-w" v-bind:picture="'http://greenpanda.ceant.net/admin/storage/' + item.image"  v-bind:title="item.name" v-bind:msg="item.description" position="item.signature" project="Golf orbit, Fish Orbit"></card-left-img>
                        </div>
                    </div>

                    <div class="carousel-wrap">
                        <owl-carousel v-if="testimonials.length > 0" :items="1" :nav="false" :responsive="false" class="carousel-1">
                            <div class="carousel-item" v-for="item in testimonials">
                                <card-right-img v-bind:picture="'http://greenpanda.ceant.net/admin/storage/' + item.image" v-bind:title="item.name" v-bind:msg="item.description" v-bind:position="item.signature" project="Golf orbit, Fish Orbit" style="box-shadow: none"></card-right-img>
                            </div>
                        </owl-carousel>
                    </div>
                </div>

            </section>

            <section id="want-to-work-with-us-form" class="section-3 container">
                <div class="form">
                    <div class="form-head">Want to work with us?</div>
                    <form action="">
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-small-size-100 md-large-size-50 md-xlarge-size-50">
                                <md-field v-bind:class="name.error.show ? 'md-invalid' : ''">
                                    <label>NAME</label>
                                    <md-input required placeholder="John Doe" v-model="name.value"></md-input>
                                    <span class="md-error">{{name.error.message}}</span>
                                </md-field>
                            </div>
                            <div class="md-layout-item md-size-50 md-small-hide">

                            </div>
                            <div class="md-layout-item md-small-size-100 md-large-size-50 md-xlarge-size-50">
                                <md-field>
                                    <label>COMPANY</label>
                                    <md-input placeholder="Company name" v-model="company"></md-input>
                                </md-field>
                            </div>
                            <div class="md-layout-item md-small-size-100 md-large-size-50 md-xlarge-size-50">
                                <md-field>
                                    <label>GAME URL</label>
                                    <md-input placeholder="Store link" v-model="game_url"></md-input>
                                </md-field>
                            </div>
                            <div class="md-layout-item md-small-size-100 md-large-size-50 md-xlarge-size-50">
                                <md-field v-bind:class="email.error.show ? 'md-invalid' : ''">
                                    <label>EMAIL</label>
                                    <md-input type="email" required placeholder="name@societe.com" v-model="email.value"></md-input>
                                    <span class="md-error">There is an error</span>
                                </md-field>
                            </div>
                            <div class="md-layout-item md-small-size-100 md-large-size-50 md-xlarge-size-50">
                                <md-field>
                                    <label>SKYPE</label>
                                    <md-input placeholder="name@societe.com" v-model="skype"></md-input>
                                </md-field>
                            </div>
                            <div class="md-layout-item md-size-100">
                                <md-field>
                                    <label>MESSAGE</label>
                                    <md-textarea required placeholder="Tell us more about your game…" v-model="message"></md-textarea>
                                    <span class="md-error">There is an error</span>
                                </md-field>
                            </div>
                        </div>

                        <div class="form-footer">
                            <div class="md-layout">
                                <div class="md-layout-item recaptcha-wrap">
                                    <vue-recaptcha sitekey="6LcVgnUUAAAAANuF4NzYi8nWKhzsrbp59SrIgDaV" class="recaptcha"></vue-recaptcha>
                                </div>
                                <div class="md-layout-item">
                                    <button-rectangle v-on:click="send">Submit</button-rectangle>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </section>

            <section class="learn-more">
                <div class="container">
                    <div v-if="staticContent" class="title">
                        {{ staticContent.bottom.title }}
                    </div>
                    <router-link v-bind:to="'/' + locale+'/games'">
                        <button-arrow>{{$t("message.OUR_GAMES")}}</button-arrow>
                    </router-link>
                </div>
            </section>

            <footer-my></footer-my>

        </div>

        <md-dialog-alert
          v-bind:md-active.sync="showDialog"
          md-content="Your request has been sent"
          md-confirm-text="Cool!" />
    </div>
</template>

<script>

    import Parser from '../tools/Parser'
    import StaticContent from '../tools/StaticContent'
    import mainMenu from '../components/mainMenu.vue'
    import headerMy from '../components/headerMy.vue'

    import cardRightImg from '../components/cardRightImg.vue'
    import cardLeftImg from '../components/cardLeftImg.vue'
    import buttonRectangle from '../components/buttonRectangle.vue'
    import owlCarousel from 'v-owl-carousel'
    import PublicForm from '../tools/PublicForm'
    import Testimonial from '../tools/Testimonial'
    import GPGPerk from '../tools/GPGPerk'

    import VueRecaptcha from 'vue-recaptcha'

    export default {
        name: 'publishing',
        components: {
            headerMy,
            mainMenu,
            cardRightImg,
            cardLeftImg,
            buttonRectangle,
            owlCarousel,
            VueRecaptcha
        },
        data: () => ({
          name: {
            value: '',
            error: {
              message: '',
              show: false
            }
          },
          company: '',
          game_url: '',
          email: {
            value: '',
            error: {
              message: '',
              show: false
            }
          },
          testimonials: [],
          gpgPerks: [],
          skype: '',
          message: '',
          staticContent: null,
          showDialog: false,
          locale: ''
        }),
        created: function(){
          const parser = new Parser();
          const staticContent = new StaticContent(parser.route, parser.locale);
          const testimonial = new Testimonial(parser.locale);
          const gpgPerk = new GPGPerk(parser.locale);
          this.locale = parser.locale;

          staticContent.update(json => {
            this.staticContent = json.data;
          });

          testimonial.update(json => {
            //console.log(json);
            this.testimonials = json;
          });

          gpgPerk.update(json => {
            console.log(json);
            this.gpgPerks = json;
          })
        },
        methods: {
          send: function(){
            //alert(this.name);
            let isValid = true;

            if (this.name.value === '') {
              this.name.error.message = 'Please enter your name';
              this.name.error.show = true;
              isValid = false;
            }

            if (this.email.value === '') {
              this.email.error.message = 'Please enter your email';
              this.email.error.show = true;
              isValid = false;
            }

            if (isValid) {
              const publicForm = new PublicForm({
                name: this.name.value,
                company: this.company,
                game_url: this.game_url,
                email: this.email.value,
                skype: this.skype,
                message: this.message
              });

              publicForm.send(json => {
                this.showDialog = true;
                this.name.value = '';
                this.company = '';
                this.game_url = '';
                this.email.value = '';
                this.skype = '';
                this.message = '';
                console.log(json);
              });
            }
          }
        }


    }
</script>

<style lang="scss" scoped>

    .header-my {
        background-image: url('/src/assets/img/header_publishing.png');
        background-image: -webkit-image-set(url('/src/assets/img/header_publishing.png') 1x,
                url('/src/assets/img/header_publishing@2x.png') 2x);
        background-image: -moz-image-set(url('/src/assets/img/header_publishing.png') 1x,
                url('/src/assets/img/header_publishing@2x.png') 2x);
        background-image: -o-image-set(url('/src/assets/img/header_publishing.png') 1x,
                url('/src/assets/img/header_publishing@2x.png') 2x);
        background-image: -ms-image-set(url('/src/assets/img/header_publishing.png') 1x,
                url('/src/assets/img/header_publishing@2x.png') 2x);
        background-size: cover;
    }

    .section-1 {
        .group-card {
            font-family: 'Poppins', sans-serif;
            position: relative;
            padding-top: 85px;
            > div {
                margin-bottom: 131px;
            }
            img {
                position: absolute;
            }
            .text {
                margin-left: 208px;
                > div:nth-child(1) {
                    display: flex;
                    align-items: flex-end;
                    height: 90px;
                    font-size: 32px;
                    font-weight: 600;
                    line-height: normal;
                    letter-spacing: 0.5px;
                    color: #131313;
                    margin-top: 25px;
                    margin-bottom: 10px;
                }
                > div:nth-child(2) {
                      font-size: 14px;
                      font-weight: 300;
                      line-height: 1.64;
                      letter-spacing: 0.8px;
                      color: #4a4a4a;
                }
            }
        }
    }

    .section-2 {
        font-family: 'Poppins', sans-serif;
        background-color: #f5f4f9;
        padding: 74px 120px 50px;
        .section-head {
            font-size: 36px;
            line-height: normal;
            letter-spacing: 0.6px;
            color: #848c9a;
            text-align: center;
            margin-bottom: 63px;
        }
        .group-card-1 {
            > div {
                margin-bottom: 60px;
              }
            > div:nth-child(even) {
                  padding-left: 102px;

              }
            > div:nth-child(odd) {
                  padding-right: 102px;
              }
        }
        .carousel-wrap {
            display: none;
            height: 357px;
            border-radius: 6px;
            background-color: #ffffff;
            box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.2);
        }
    }

    .section-3 {
        padding: 132px 112px 193px;
    }

    .form {
        padding: 63px 48px 31px 75px;
        border-radius: 8px;
        background-color: #ffffff;
        box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.25);
        font-family: 'Poppins', sans-serif;
        .form-head {
            margin-bottom: 26px;
            font-size: 36px;
            font-weight: 600;
            line-height: normal;
            letter-spacing: 0.6px;
            color: #030303;
        }
        input[type=text],
        input[type=text]::placeholder,
        input[type=email],
        input[type=email]::placeholder,
        textarea,
        textarea::placeholder{
            font-size: 14px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            /*line-height: normal;*/
            letter-spacing: 0.9px;
            color: #cccccc;
        }
        textarea {
            min-height: 201px !important;
            padding-top: 15px !important;
        }
        .md-field {
            margin-bottom: 45px;
        }
        .md-field .md-input, .md-field .md-textarea {
            flex: none;
            width: 100%;
        }
        .md-field.md-has-placeholder .md-input,
        .md-field .md-textarea {
            height: 50px;
            padding-left: 16px;
            padding-right: 16px;
            border-radius: 4px;
            background-color: #ffffff;
            border: solid 1px #d9d9d9;
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            line-height: normal;
            letter-spacing: 0.9px;
            color: #cccccc;
        }
        .md-field.md-theme-default:after,
        .md-field.md-theme-default:before {
            display: none;
        }
        .md-field.md-has-placeholder label,
        .md-field.md-has-placeholder label{
            opacity: 1;
            top: -8px;
        }
        .md-focused label {
            color: #4a4a4a;
        }
        .md-focused textarea {
            padding-top: 15px;
        }
        .md-field label:after {
            content: ' (optional)';
            font-weight: 300;
        }
        .md-field.md-required label:after {
            display: none;
        }
        .md-field.md-has-textarea:not(.md-autogrow) label {
            left: 0;
        }
        label {
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            font-weight: bold;
            line-height: normal;
            letter-spacing: 0.9px;
            color: #4a4a4a;
            top: -10px !important;
        }
        .form-footer {
            text-align: right;
        }
    }

    .learn-more {
        height: 440px;
        background-color: #f5f4f9;
        font-family: 'Poppins', sans-serif;
        padding-top: 145px;
        padding-bottom: 89px;
        text-align: center;
        .title {
            margin-bottom: 73px;
            font-size: 48px;
            font-weight: bold;
            line-height: 1.89;
            letter-spacing: 0.8px;
            text-align: center;
            color: #030303;
        }
    }

    @media (max-width: 960px) {
        .header-my {
            padding-top: 80px;
        }
        .section-2 {
            padding: 28px 20px 72px;
            .section-head {
                margin-bottom: 35px;
                font-size: 26px;
                letter-spacing: 0.4px;
            }
            .carousel-wrap {
                height: 418px;
                display: block;
            }

        }
        .section-3 {
            padding: 0;
        }
        .form {
            padding: 38px 21px 43px;
            box-shadow: none;
            border-radius: 0;
            .form-head {
                font-size: 26px;
                letter-spacing: 0.4px;
                margin-bottom: 30px;
            }
            .md-field.md-has-placeholder .md-input,
            .md-field .md-textarea {
                height: 40px;
            }
            .md-field {
                margin-bottom: 20px;
            }
            .form-footer {
                text-align: center;
            }
            .md-layout {
                > div:last-child {
                    margin-bottom: 10px;
                  }
            }
        }
        .learn-more {
            height: 270px;
            background-color: #f5f4f9;
            font-family: 'Poppins', sans-serif;
            padding-top: 50px;
            padding-bottom: 89px;
            text-align: center;
            .title {
                margin-bottom: 33px;
                font-size: 27px;
                line-height: normal;
                letter-spacing: 0.5px;
                color: #030303;
            }
        }
        .recaptcha-wrap {
            .recaptcha {
                display: inline-block;
            }
            margin-bottom: 30px;
        }

    }

    @media (min-width: 414px) and (max-width: 960px){
        .header-my {
            padding-top: 120px;
        }
        .section-1 {
            .group-card {
                .text {
                    > div:nth-child(1) {
                          height: 90px;
                      }
                }
            }
        }
    }

    @media (min-width: 960px) and (max-width: 1280px){
        .section-2 {
            padding-left: 20px;
            padding-right: 20px;
            .group-card-1 {
                > div {
                      margin-bottom: 60px;
                  }
                > div:nth-child(even) {
                      padding-left: 50px;
                  }
                > div:nth-child(odd) {
                      padding-right: 50px;
                  }
                }
        }
        .learn-more {
            padding-top: 40px;
            padding-left: 200px;
            padding-right: 200px;
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
            height: 0px;
        }
        .owl-theme .owl-nav.disabled + .owl-dots {
            margin-top: 100px !important;
        }
        .card-right-img {
            min-height: 0 !important;
        }
    }
    @media (min-width: 768px) {
        .section-2 .carousel-wrap {
            height: 270px !important;
        }
    }
    @media (max-width:1280px) {
        .section-1 {
            padding: 0 20px 55px;
            .group-card {
                padding-top: 21px;
                text-align: center;
                img {
                    position: relative;
                }
                > div {
                      margin-bottom: 20px;
                  }
                .text {
                    margin-left: 0;
                    text-align: center;
                    > div:nth-child(1) {
                          height: auto;
                          margin-top: -16px;
                          margin-bottom: 13px;
                          font-size: 20px;
                          letter-spacing: 0.3px;
                          justify-content: center;
                      }
                }
            }
        }
    }

</style>
