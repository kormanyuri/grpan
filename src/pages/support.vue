<template>
    <div class="page-container">

        <main-menu></main-menu>

        <div id="support">

            <header-my v-if="staticContent" v-bind:title="staticContent.header.title" v-bind:subtitle="staticContent.header.text" class="header-my"></header-my>

            <section class="section-3 container">
                <div class="form">
                    <div class="form-head">Contact us</div>
                    <form action="">
                        <div class="md-layout">
                            <div class="md-layout-item md-small-size-100 md-large-size-50">
                                <md-field v-if="games.length > 0">
                                    <label>GAME</label>
                                    <md-select md-dense required placeholder="Choose a game" v-model="game">
                                      <md-option v-for="item in games" v-bind:value="item.name">{{item.name}}</md-option>
                                    </md-select>
                                </md-field>
                            </div>
                            <div class="md-layout-item md-size-50 md-small-hide"></div>
                            <div class="md-layout-item md-small-size-100 md-large-size-50">
                                <md-field v-bind:class="name.error.show ? 'md-invalid' : ''">
                                    <label>NAME</label>
                                    <md-input required placeholder="John Doe" v-model="name.value"></md-input>
                                    <span class="md-error">{{name.error.message}}</span>
                                </md-field>
                            </div>
                            <div class="md-layout-item md-small-size-100 md-large-size-50 mrgn-b">
                                <md-field v-bind:class="email.error.show ? 'md-invalid' : ''">
                                    <label>EMAIL</label>
                                    <md-input type="email" required placeholder="name@societe.com" v-model="email.value"></md-input>
                                    <span class="md-error">{{email.error.message}}</span>
                                </md-field>
                            </div>
                            <div class="md-layout-item md-size-100 mssg">
                                <md-field>
                                    <label>MESSAGE</label>
                                    <md-textarea required placeholder="Tell us more about your game…" v-model="message"></md-textarea>

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
    import buttonRectangle from '../components/buttonRectangle.vue'
    import VueRecaptcha from 'vue-recaptcha'
    import Game from '../tools/Game';
    import ContactUsForm from '../tools/ContactUsForm'

    export default {
        name: 'support',
        components: {
            headerMy,
            mainMenu,
            buttonRectangle,
            VueRecaptcha
        },
        data: () => ({
          game: '',
          name: {
            value: '',
            error: {
              message: '',
              show: false
            }
          },
          email: {
            value: '',
            error: {
              message: '',
              show: false
            }
          },
          message: '',
          staticContent: null,
          games: [],
          locale: '',
          showDialog: false
        }),
        created: function(){

          const parser = new Parser();
          const staticContent = new StaticContent(parser.route, parser.locale);
          this.locale = parser.locale;



          staticContent.update(json => {
            this.staticContent = json.data;
          });
        },
        beforeCreate(){
          const parser = new Parser();
          const game = new Game(parser.locale);
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
        },
        mounted(){

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
              const contactUsForm = new ContactUsForm({
                game: this.game,
                name: this.name.value,
                email: this.email.value,
                message: this.message
              });

              contactUsForm.send(json => {
                this.showDialog = true;
                this.name.value = '';
                this.email.value = '';
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
        background-image: url('/src/assets/img/header_support.png');
        background-image: -webkit-image-set(url('/src/assets/img/header_support.png') 1x,
                url('/src/assets/img/header_support@2x.png') 2x);
        background-image: -moz-image-set(url('/src/assets/img/header_support.png') 1x,
                url('/src/assets/img/header_support@2x.png') 2x);
        background-image: -o-image-set(url('/src/assets/img/header_support.png') 1x,
                url('/src/assets/img/header_support@2x.png') 2x);
        background-image: -ms-image-set(url('/src/assets/img/header_support.png') 1x,
                url('/src/assets/img/header_support@2x.png') 2x);
        background-size: cover;
    }

    .section-3 {
        padding: 95px 112px 95px;
    }

    .form {
        /*max-width: 976px;*/
        padding: 63px 48px 58px 75px;
        /*margin: 0 auto;*/
        border-radius: 8px;
        background-color: #ffffff;
        box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.25);
        font-family: 'Poppins', sans-serif;
        .md-layout-item {
            padding-right: 13px;
        }
        .mrgn-b {
            margin-bottom: 10px;
        }
        .mssg {
            margin-bottom: 15px;
        }
    .form-head {
        margin-bottom: 41px;
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
        margin-bottom: 36px;
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
        text-transform: uppercase;
    }
    .md-select {
        border: solid 1px #d9d9d9;
        border-radius: 4px;
        height: 50px;
        padding-top: 9px;
        padding-left: 16px;
    }
    .md-list.md-dense .md-list-item-text {}
    .form-footer {
        text-align: right;
    }
    }

    @media (max-width: 960px) {
        .header-my {
            padding-top: 97px;
        }
        .section-3 {
            padding: 0;
            .form {
                box-shadow: none;
                border-radius: 0;
                padding: 21px 21px 48px;
                .form-head {
                    font-size: 26px;
                    letter-spacing: 0.4px;
                    margin-bottom: 33px;
                }
                .md-layout-item {
                    padding-right: 0;
                }
                .md-field.md-has-placeholder .md-input,
                .md-field .md-textarea,
                .md-select {
                    height: 40px;
                }
                .md-select {
                    padding-top: 3px;
                }
                .md-field {
                    margin-bottom: 20px;
                }
                .form-footer {
                    text-align: center;
                }
            }
        }
        .recaptcha-wrap {
            .recaptcha {
                display: inline-block;
            }
            margin-bottom: 30px;
        }
    }

</style>
