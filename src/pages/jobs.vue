<template>
    <div class="page-container">

        <main-menu></main-menu>

        <div id="publishing">

            <header-my title="Jobs" subtitle="Join & help us to build next hit games" class="header-my"></header-my>

            <section class="section-1">
                <card-group-jobs title="Marketing" ico="/src/assets/img/icn-marketing.svg">
                    <div class="md-layout md-gutter wrap-join-our-team">
                        <div class="md-layout-item md-size-25">
                            <card-vacancy vacancy="Business developper STAGE)" location="Paris, Stage" link="#"></card-vacancy>
                        </div>
                        <div class="md-layout-item md-size-25">
                            <card-vacancy vacancy="Business developper H/F CDI" location="Paris, CDI" link="#"></card-vacancy>
                        </div>
                    </div>
                </card-group-jobs>
                <card-group-jobs title="Business" ico="/src/assets/img/icn-business.svg">
                    <div class="md-layout md-gutter wrap-join-our-team">
                        <div class="md-layout-item md-size-25">
                            <card-vacancy vacancy="Digital marketing analyst H/F (STAGE FIN D’ETUDE)" location="Paris, Stage" link="#"></card-vacancy>
                        </div>
                        <div class="md-layout-item md-size-25">
                            <card-vacancy vacancy="Digital marketing manager H/F (CDI)" location="Paris, CDI" link="#"></card-vacancy>
                        </div>
                        <div class="md-layout-item md-size-25">
                            <card-vacancy vacancy="Digital advertising analyst H/F (STAGE)" location="Paris, CDI" link="#"></card-vacancy>
                        </div>
                        <div class="md-layout-item md-size-25">
                            <card-vacancy vacancy="Digital advertising analyst H/F CDI" location="Paris, CDI" link="#"></card-vacancy>
                        </div>
                    </div>
                </card-group-jobs>
                <card-group-jobs title="Product" ico="/src/assets/img/icn-product.svg">
                    <div class="md-layout md-gutter wrap-join-our-team">
                        <div class="md-layout-item md-size-25">
                            <card-vacancy vacancy="Designer mobile CDI H/F" location="Paris, Stage" link="#"></card-vacancy>
                        </div>
                        <div class="md-layout-item md-size-25">
                            <card-vacancy vacancy="HTML5 developer (STAGE FIN D’ETUDE)" location="Paris, CDI" link="#"></card-vacancy>
                        </div>
                        <div class="md-layout-item md-size-25">
                            <card-vacancy vacancy="HTML5 developer" location="Paris, CDI" link="#"></card-vacancy>
                        </div>
                    </div>
                </card-group-jobs>
                <card-group-jobs title="Human resources" ico="/src/assets/img/icn-human-resources.svg">
                    <div class="md-layout md-gutter wrap-join-our-team">
                        <div class="md-layout-item md-size-25">
                            <card-vacancy vacancy="HR recruiter CDI H/F" location="Paris, CDI"" link="#"></card-vacancy>
                        </div>
                    </div>
                </card-group-jobs>
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
    import cardGroupJobs from '../components/cardGroupJobs.vue'
    import cardVacancy from '../components/cardVacancy.vue'


    export default {
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
        background-image: linear-gradient(107deg, #1e57ac, #2f3f6e);
    }

    .section-1 {
        padding: 73px 120px 10px;
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