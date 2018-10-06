<template>

    <div class="card-group-jobs">
        <div class="card-group-head">
            <div class="circle">
                <img :src="ico" alt="">
            </div>
            <div class="title">{{title}}</div>
        </div>
        <slot></slot>

    </div>

</template>

<script>
    export default {
        props: ['title', 'ico'],
    }
</script>

<style lang="scss" scoped>
    .card-group-jobs {
        margin-bottom: 56px;
        font-family: 'Poppins', sans-serif;
        .card-group-head {
            margin-bottom: 18px;
            padding-left: 12px;
        }
        .circle {
            display: inline-flex;
            height: 52px;
            width: 52px;
            background-color: #f5f4f9;
            border-radius: 26px;
            justify-content: center;
            align-items: center;
            margin-right: 21px;
        }
        .title {
            display: inline-flex;
            align-items: center;
            font-size: 32px;
            line-height: normal;
            letter-spacing: 0.5px;
            color: #848c9a;
        }
    }

    @media (max-width: 960px){
        .card-group-jobs {
            margin-bottom: 27px;
            .card-group-head {
                margin-bottom: 18px;
                padding-left: 0;
                text-align: center;
            }
            .circle {
                height: 40px;
                width: 40px;
                border-radius: 20px;
                margin-right: 5px;
                img {
                    width: 20px;
                }
            }
            .title {
                display: inline-flex;
                align-items: center;
                font-size: 20px;
                line-height: normal;
                letter-spacing: 0.3px;
                color: #848c9a;
            }
        }
    }
</style>