<template>

    <header class="header" :title="title" :subtitle="subtitle">
        <div class="title">{{title}}</div>
        <div class="subtitle">{{subtitle}}</div>
    </header>

</template>

<script>
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
        }
        .subtitle {
            font-size: 20px;
            font-weight: 300;
            line-height: normal;
            letter-spacing: 1.3px;
            text-align: center;
            color: #ffffff;
            padding: 0 300px;
        }
    }
</style>