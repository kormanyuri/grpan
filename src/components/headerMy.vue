<template>

    <header class="header" :title="title" :subtitle="subtitle">
        <div class="title">{{title}}</div>
        <div class="subtitle">{{subtitle}}</div>
    </header>

</template>

<script>
    import Parser from '../tools/Parser';

    export default {
        props: ['title', 'subtitle'],


    }
</script>

<style lang="scss" scoped>
    
	header {
        height: 450px;
        position: relative;
        font-family: 'Poppins', sans-serif;
        padding-top: 173px;
        .title {
            font-size: 54px;
            font-weight: bold;
            line-height: 1.68;
            letter-spacing: 0.9px;
            text-align: center;
            color: #ffffff;
            margin-bottom: 30px;
            padding-left: 20px;
            padding-right: 20px;
        }
        .subtitle {
            max-width: 58%;
            font-size: 20px;
            font-weight: 300;
            line-height: normal;
            letter-spacing: 1.3px;
            text-align: center;
            color: #ffffff;
            margin: 0 auto;
        }
    }
    @media (max-width: 960px) {
        header {
            height: 270px;
            position: relative;
            font-family: 'Poppins', sans-serif;
            padding-top: 115px;
            .title {
                font-size: 27px;
                line-height: normal;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
            }
            .subtitle {
                max-width: 80%;
                font-size: 14px;
                letter-spacing: 0.9px;
            }
        }
        .section-1 {
            padding: 0 20px;
        }
    }
	
</style>
