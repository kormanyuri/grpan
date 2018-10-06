<template>

    <div class="soc-link">
        <div>
            <a :href="link">
                <img :src="icon" alt="" class="ico">
            </a>
        </div>
        <div class="md-small-hide">
            <md-button class="md-primary btn" :href="link">Follow us</md-button>
        </div>
    </div>

</template>

<script>
    export default {
        props: ['icon', 'link'],
    }
</script>

<style lang="scss" scoped>
    .soc-link {
        >div {
            text-align: center;
        }
        a {
            display: inline-block;
            text-align: center;
            margin-bottom: 12px;
        }
        .btn {
            width: 188px;
            height: 50px;
            border-radius: 100px;
            border: solid 1px #4d4d4d;
            font-family: 'Open Sans', sans-serif;
            font-size: 16px;
            font-weight: normal;
            line-height: normal;
            letter-spacing: 0.7px;
            text-align: center;
            text-transform: none;
            color: #4d4d4d;
        }
        .ico {
            width: 40px;
            height: auto;
        }
    }
</style>