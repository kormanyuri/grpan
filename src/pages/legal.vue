<template>
    <div class="page-container">

        <main-menu class="main-menu"></main-menu>

        <div id="jobs">

            <header-legal class="header-my"></header-legal>


            <section v-if="staticContent" v-html="staticContent.content" class="section-1 container">

            </section>


            <footer-my></footer-my>

        </div>

    </div>
</template>

<script>

    import Parser from '../tools/Parser'
    import StaticContent from '../tools/StaticContent'
    import LegalPage from '../tools/LegalPage'
    import mainMenu from '../components/mainMenu.vue'
    import headerLegal from '../components/headerLegal.vue'
    import cardGroupJobs from '../components/cardGroupJobs.vue'
    import cardVacancy from '../components/cardVacancy.vue'
    import Job from "../tools/Job";

    export default {
        name: 'legal',
        components: {
            headerLegal,
            mainMenu,
            cardGroupJobs,
            cardVacancy,
        },
        data: () => ({
          staticContent: null,
          jobs: [],
          locale: ''
        }),
        created: function(){
          const parser = new Parser();
          const legelPage = new LegalPage(this.$route.params.slug, parser.locale);

          //const staticContent = new StaticContent(parser.route, parser.locale);
          //const job = new Job(parser.locale);

          // job.update(json => {
          //   for (let i = 0; i < json.length; i++) {
          //     this.jobs.push(json[i]);
          //   }
          // });
          //
          // this.locale = parser.locale;
          //
          legelPage.update(json => {
            console.log(json);
            this.staticContent = json;
          });
        }
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
        .main-menu {
            visibility: hidden;
        }
        .header-my {
            visibility: hidden;
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
