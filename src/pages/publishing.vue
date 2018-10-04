<template>
    <div class="page-container">

        <main-menu></main-menu>

        <div id="publishing">

            <header-my title="Let’s create a successful story together" subtitle="A team of mobile experts dedicated to your success " class="header-my"></header-my>

            <section class="section-1">
                <div class="md-layout md-gutter group-card">
                    <div class="md-layout-item md-size-50">
                        <img src="/src/assets/img/illu_UA.png" alt="UA">
                        <div class="text">
                            <div>Large Scale<br>
                                User Acquisition
                            </div>
                            <div>We’ve acquired more than 50M active users in the last 6 months for our hyper-casual games. We have the know-how and cross promotion to scale your game to the top rankings without sacrificing ROI.</div>
                        </div>
                    </div>
                    <div class="md-layout-item md-size-50">
                        <img src="/src/assets/img/illu_monetization.png" alt="monetization">
                        <div class="text">
                            <div>Smart Monetization</div>
                            <div>We’re always working to find the right balance of user experience and revenue generation across all our games. We have special advertising deals with all top networks to achieve the best LTV.</div>
                        </div>
                    </div>
                    <div class="md-layout-item md-size-50">
                        <img src="/src/assets/img/illu_project.png" alt="project">
                        <div class="text">
                            <div>Project Management</div>
                            <div>Marketing and advertising is half the battle.
                                We have a dedicated game design and project management team to support game development. Our best practices and A/B testing framework guarantee continuous improvement in your game metrics.</div>
                        </div>
                    </div>
                    <div class="md-layout-item md-size-50">
                        <img src="/src/assets/img/illu_terms.png" alt="project">
                        <div class="text">
                            <div>Clear terms</div>
                            <div>We aim for long term partnerships. Our terms are simple, transparent and attractive.</div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-2">

                <div class="section-head">
                    Success story
                </div>

                <div class="group-card-1">
                    <div>
                        <card-right-img class="max-w" picture="/src/assets/img/story_pinpin_team.png" title="Pinpin Team" msg="« The Green Panda team impressed us at every stage with their expertise, professionalism and dedication. (…) They were with us every step of the way to create Golf Orbit and together we&apos;ve made it a success !  We found a genuine partner in Green Panda and will continue to work closely with them to create hit games.» " position="CEO OF PINPIN TEAM" project="Golf orbit, Fish Orbit"></card-right-img>
                    </div>
                    <div class="align-right">
                        <card-left-img class="max-w" picture="/src/assets/img/story_bee.png" title="Vitaliy Sidirov" msg="« The Green Panda team impressed us at every stage with their expertise, professionalism and dedication. (…) They were with us every step of the way to create Golf Orbit and together we&apos;ve made it a success !  We found a genuine partner in Green Panda and will continue to work closely with them to create hit games.» " position="CEO OF PINPIN TEAM" project="Golf orbit, Fish Orbit"></card-left-img>
                    </div>
                    <div>
                        <card-right-img class="max-w" picture="/src/assets/img/story_pinpin_team.png" title="Pinpin Team" msg="« The Green Panda team impressed us at every stage with their expertise, professionalism and dedication. (…) They were with us every step of the way to create Golf Orbit and together we&apos;ve made it a success !  We found a genuine partner in Green Panda and will continue to work closely with them to create hit games.» " position="CEO OF PINPIN TEAM" project="Golf orbit, Fish Orbit"></card-right-img>
                    </div>
                </div>

            </section>

            <section class="section-3">
                <div class="form">
                    <div class="form-head">Want to work with us?</div>
                    <form action="">
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-size-50">
                                <md-field>
                                    <label>NAME</label>
                                    <md-input required placeholder="John Doe"></md-input>
                                    <span class="md-error">There is an error</span>
                                </md-field>
                            </div>
                            <div class="md-layout-item md-size-50">

                            </div>
                            <div class="md-layout-item md-size-50">
                                <md-field>
                                    <label>COMPANY</label>
                                    <md-input placeholder="Company name"></md-input>
                                </md-field>
                            </div>
                            <div class="md-layout-item md-size-50">
                                <md-field>
                                    <label>GAME URL</label>
                                    <md-input placeholder="Store link"></md-input>
                                </md-field>
                            </div>
                            <div class="md-layout-item md-size-50">
                                <md-field>
                                    <label>EMAIL</label>
                                    <md-input type="email" required placeholder="name@societe.com"></md-input>
                                </md-field>
                            </div>
                            <div class="md-layout-item md-size-50">
                                <md-field>
                                    <label>SKYPE</label>
                                    <md-input placeholder="name@societe.com"></md-input>
                                </md-field>
                            </div>
                            <div class="md-layout-item md-size-100">
                                <md-field>
                                    <label>MESSAGE</label>
                                    <md-textarea required placeholder="Tell us more about your game…"></md-textarea>
                                    <span class="md-error">There is an error</span>
                                </md-field>
                            </div>
                        </div>
                        <div class="form-footer">
                            <button-rectangle>Submit</button-rectangle>
                        </div>
                    </form>
                </div>
            </section>

            <section class="learn-more">
                <div class="title">
                    Learn more about our published games ?
                </div>
                <button-arrow>Our games</button-arrow>
            </section>

            <footer-my></footer-my>

        </div>

    </div>
</template>

<script>
    import mainMenu from '../components/mainMenu.vue'
    import headerMy from '../components/headerMy.vue'
    import cardRightImg from '../components/cardRightImg.vue'
    import cardLeftImg from '../components/cardLeftImg.vue'
    import buttonRectangle from '../components/buttonRectangle.vue'

    export default {
        components: {
            headerMy,
            mainMenu,
            cardRightImg,
            cardLeftImg,
            buttonRectangle
        },
    }
</script>

<style lang="scss" scoped>

    .header-my {
        background-image: linear-gradient(107deg, #4553ff, #4553ff 97%, #767fee);
    }

    .section-1 {
        padding: 0 116px;
        .group-card {
            font-family: 'Poppins', sans-serif;
            position: relative;
            padding-top: 85px;
            > div {
                margin-bottom: 125px;
            }
            img {
                position: absolute;
            }
            .text {
                margin-left: 208px;
                > div:nth-child(1) {
                    font-size: 32px;
                    font-weight: 600;
                    line-height: normal;
                    letter-spacing: 0.5px;
                    color: #131313;
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
        padding: 74px 120px;
        .section-head {
            font-family: Poppins;
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
              .max-w {
                  max-width: 1098px;
              }
            .align-right {
                padding-left: 102px;
            }
        }
    }

    .section-3 {
        padding: 132px 0 193px;
    }

    .form {
        max-width: 976px;
        padding: 63px 48px 31px 75px;
        margin: 0 auto;
        border-radius: 8px;
        background-color: #ffffff;
        box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.25);
        font-family: 'Poppins', sans-serif;
        .form-head {
            margin-bottom: 20px;
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
            line-height: normal;
            letter-spacing: 0.9px;
            color: #cccccc;
        }
        textarea {
            min-height: 201px !important;
            padding-top: 15px !important;
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
        .form-footer {
            text-align: right;
        }
    }

    .learn-more {
        height: 440px;
        background-color: #f5f4f9;
        font-family: 'Poppins', sans-serif;
        padding-top: 120px;
        padding-bottom: 89px;
        text-align: center;
        .title {
            margin-bottom: 100px;
            font-size: 48px;
            font-weight: bold;
            line-height: 1.89;
            letter-spacing: 0.8px;
            text-align: center;
            color: #030303;
        }
    }
</style>