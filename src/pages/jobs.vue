<template>
    <div class="page-container">

        <main-menu></main-menu>

        <div id="jobs">

            <header-my title="Jobs" subtitle="Join & help us to build next hit games" class="header-my"></header-my>

            <section class="nav-in-page">
                <a href="#" v-scroll-to="'#business'">
                    <img src="/src/assets/img/icn-business.svg" alt="">Business
                </a>
                <a href="#" v-scroll-to="'#marketing'">
                    <img src="/src/assets/img/icn-marketing.svg" alt="">Marketing
                </a>
                <a href="#" v-scroll-to="'#product'">
                    <img src="/src/assets/img/icn-product.svg" alt="">Product
                </a>
                <a href="#" v-scroll-to="'#human-resources'">
                    <img src="/src/assets/img/icn-human-resources.svg" alt="">Human resources
                </a>
            </section>

            <section class="section-1 container">
                <card-group-jobs id="business" title="Business" ico="/src/assets/img/icn-business.svg">
                    <div class="md-layout wrap-join-our-team">
                        <div class="md-layout-item md-small-size-100 md-medium-size-25 md-large-size-25 md-xlarge-size-25">
                            <card-vacancy vacancy="Business developper STAGE)" location="Paris, Stage" link="#"></card-vacancy>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-medium-size-25 md-large-size-25 md-xlarge-size-25">
                            <card-vacancy vacancy="Business developper H/F CDI" location="Paris, CDI" link="#"></card-vacancy>
                        </div>
                    </div>
                </card-group-jobs>
                <card-group-jobs id="marketing" title="Marketing" ico="/src/assets/img/icn-marketing.svg">
                    <div class="md-layout wrap-join-our-team">
                        <div class="md-layout-item md-small-size-100 md-medium-size-25 md-large-size-25 md-xlarge-size-25">
                            <card-vacancy vacancy="Digital marketing analyst H/F (STAGE FIN D’ETUDE)" location="Paris, Stage" link="#"></card-vacancy>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-medium-size-25 md-large-size-25 md-xlarge-size-25">
                            <card-vacancy vacancy="Digital marketing manager H/F (CDI)" location="Paris, CDI" link="#"></card-vacancy>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-medium-size-25 md-large-size-25 md-xlarge-size-25">
                            <card-vacancy vacancy="Digital advertising analyst H/F (STAGE)" location="Paris, CDI" link="#"></card-vacancy>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-medium-size-25 md-large-size-25 md-xlarge-size-25">
                            <card-vacancy vacancy="Digital advertising analyst H/F CDI" location="Paris, CDI" link="#"></card-vacancy>
                        </div>
                    </div>
                </card-group-jobs>
                <card-group-jobs id="product" title="Product" ico="/src/assets/img/icn-product.svg">
                    <div class="md-layout wrap-join-our-team">
                        <div class="md-layout-item md-small-size-100 md-medium-size-25 md-large-size-25 md-xlarge-size-25">
                            <card-vacancy vacancy="Designer mobile CDI H/F" location="Paris, Stage" link="#"></card-vacancy>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-medium-size-25 md-large-size-25 md-xlarge-size-25">
                            <card-vacancy vacancy="HTML5 developer (STAGE FIN D’ETUDE)" location="Paris, CDI" link="#"></card-vacancy>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-medium-size-25 md-large-size-25 md-xlarge-size-25">
                            <card-vacancy vacancy="HTML5 developer" location="Paris, CDI" link="#"></card-vacancy>
                        </div>
                    </div>
                </card-group-jobs>
                <card-group-jobs id="human-resources" title="Human resources" ico="/src/assets/img/icn-human-resources.svg">
                    <div class="md-layout wrap-join-our-team">
                        <div class="md-layout-item md-small-size-100 md-medium-size-25 md-large-size-25 md-xlarge-size-25">
                            <card-vacancy vacancy="HR recruiter CDI H/F" location="Paris, CDI"" link="#"></card-vacancy>
                        </div>
                    </div>
                </card-group-jobs>
            </section>

            <section class="learn-more">
                <div class="container">
                    <div class="title">
                        Learn more about our published games ?
                    </div>
                    <router-link to="/games">
                        <button-arrow>Our games</button-arrow>
                    </router-link>
                </div>
            </section>

            <footer-my></footer-my>

        </div>

    </div>
</template>

<script>
    import mainMenu from '../components/mainMenu.vue'
    import headerMy from '../components/headerMy.vue'
    import cardGroupJobs from '../components/cardGroupJobs.vue'
    import cardVacancy from '../components/cardVacancy.vue'


    export default {
        name: 'jobs',
        components: {
            headerMy,
            mainMenu,
            cardGroupJobs,
            cardVacancy,
        },
    }
</script>

<style lang="scss" scoped>

    .header-my {
        background-image: url('/src/assets/img/header_jobs.png');
        background-image: -webkit-image-set(url('/src/assets/img/header_jobs.png') 1x,
                url('/src/assets/img/header_jobs@2x.png') 2x);
        background-image: -moz-image-set(url('/src/assets/img/header_jobs.png') 1x,
                url('/src/assets/img/header_jobs@2x.png') 2x);
        background-image: -o-image-set(url('/src/assets/img/header_jobs.png') 1x,
                url('/src/assets/img/header_jobs@2x.png') 2x);
        background-image: -ms-image-set(url('/src/assets/img/header_jobs.png') 1x,
                url('/src/assets/img/header_jobs@2x.png') 2x);
        background-size: cover;
    }

    .nav-in-page {
        display: none;
        padding-left: 41px;
        padding-right: 41px;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            border-radius: 100px;
            background-color: #f5f4f9;
            padding-left: 13px;
            padding-right: 19px;
            margin: 7px 4px;
            text-decoration: none;
            font-size: 12px;
            line-height: normal;
            letter-spacing: 0.2px;
            color: #848c9a;
            img {
                width: 14px;
                margin-right: 10px;
            }
        }
    }

    .section-1 {
        padding: 73px 0 85px;
        .md-layout-item {
            padding: 0 12px;
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
            padding-top: 125px;
            margin-bottom: 7px;
        }
        .nav-in-page {
            display: block;
        }
        .section-1 {
            padding: 30px 34px 53px;
            .md-layout-item {
                padding: 0 12px;
            }
        }
        .md-layout-item {
            margin-bottom: 10px;
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
    }

    @media (min-width: 414px) and (max-width: 960px){
        .header-my {
            margin-bottom: 30px;
        }
    }

    @media (min-width: 960px) and (max-width: 1280px){
        .learn-more {
            padding-top: 60px;
            padding-left: 200px;
            padding-right: 200px;
        }
    }
    @media (min-width: 767px) and (max-width: 992px) {
        .section-1.container {
            max-width: 720px +24px;
        }
    }
    @media (min-width: 992px) and (max-width: 1200px) {
        .section-1.container {
            max-width: 960px + 24px;
        }
    }
    @media (min-width: 1280px) {
        .section-1.container {
            max-width: 1200px + 24px;
        }
    }

</style>