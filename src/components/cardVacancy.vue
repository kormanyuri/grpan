<template>

    <div class="vacancy-card">
        <div>{{vacancy}}</div>
        <div>{{location}}</div>
        <div><a :href="link">Learn more</a></div>
    </div>

</template>

<script>
    export default {
        props: ['vacancy', 'location', 'link'],
    }
</script>

<style lang="scss" scoped>
    .vacancy-card {
        border-radius: 8px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.12);
        background-color: #ffffff;
        padding: 18px 17px 17px;
        font-family: 'Poppins', sans-serif;
        position: relative;
        height: 134px;
        div:nth-child(1){
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 0.3px;
            color: #000000;
            margin-bottom: 6px;
            line-height: normal;
        }
        div:nth-child(2){
            font-size: 18px;
            font-weight: normal;
            letter-spacing: 0.3px;
            color: #929292;
            margin-bottom: 4px;
        }
        div:nth-child(3){
            font-size: 14px;
            font-weight: normal;
            letter-spacing: 0.3px;
            color: #929292;
        }
    }
</style>