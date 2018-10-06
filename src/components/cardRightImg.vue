<template>

    <div class="card-right-img">
        <div>
            <div class="c-r-img-head">{{title}}</div>
            <div class="c-r-img-body">
                {{msg}}
            </div>
            <div class="c-r-img-footer">
                <div class="blue">{{position}}</div>
                <div>{{project}}</div>
                <div class="circle-picture md-medium-hide md-xlarge-hide">
                    <img :src="picture" alt="">
                </div>
            </div>
        </div>
        <img :src="picture" alt="" class="md-small-hide">
    </div>

</template>

<script>
    export default {
        props: ['picture', 'title', 'msg', 'position', 'project' ],
        data: () => ({
        }),
    }
</script>

<style lang="scss" scoped>
    .card-right-img {
        /*max-width: 1098px;*/
        min-height: 358px;
        border-radius: 8px;
        background-color: #ffffff;
        box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.2);
        font-family: 'Poppins', sans-serif;
        position: relative;
        overflow: hidden;
        > img {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
        }
        >div {
             padding: 30px 75px 20px 78px;
             margin-right: 37%;
             font-size: 14px;
         }
        .c-r-img-head {
            font-size: 36px;
            font-weight: 600;
            line-height: 2.52;
            letter-spacing: 0.6px;
        }
        .c-r-img-body {
            font-weight: 300;
            line-height: 1.79;
            letter-spacing: 0.9px;
            color: #7a7a7a;
            margin-bottom: 25px;
        }
        .c-r-img-footer {
            font-size: 14px;
            div:nth-child(1) {
                font-weight: bold;
                color: #367cff;
                line-height: 1.79;
                letter-spacing: 0.9px;
            }
            div:nth-child(2) {
                letter-spacing: 0.9px;
                color: #000000;
            }
            .circle-picture {
                margin-top: -10px;
                width: 72px;
                height: 72px;
                border-radius: 36px;
                overflow: hidden;
                display: none;
                position: absolute;
                top: 0;
                img {
                    height: 100%;
                }
            }
        }
    }
    .shadow {
        box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.2);
    }
    @media (max-width: 960px) {
        .card-right-img {
            >div {
                 padding: 20px 25px;
                 margin-right: 0;
                .c-r-img-head {
                    font-size: 26px;
                    font-weight: 600;
                    line-height: normal;
                    letter-spacing: 0.4px;
                    margin-bottom: 11px;
                }
             }
            .c-r-img-footer {
                position: relative;
                div:nth-child(1),
                div:nth-child(2){
                    margin-left: 82px;
                }
                div:nth-child(1) {
                    margin-bottom: 4px;
                }
                div:nth-child(2) {
                    letter-spacing: 0.9px;
                }
                .circle-picture {
                    display: inline-block;
                }
            }
        }
    }
</style>