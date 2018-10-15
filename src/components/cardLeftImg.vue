<template>

    <div class="card-left-img">
        <div>
            <div class="title">{{title}}</div>
            <div class="content">
                {{msg}}
                <br><br>
                <span class="blue">{{position}}</span>
            </div>
            <div>{{project}}</div>
        </div>
        <img :src="picture" alt="">
    </div>

</template>

<script>
    export default {
        props: ['picture', 'title', 'msg', 'position', 'project', 'shadow' ],
        data: function () {
            return {
                boxShadow: this.shadow
            }
        }
    }
</script>

<style lang="scss" scoped>
    
	.card-left-img {
        /*max-width: 1098px;*/
        min-height: 358px;
        border-radius: 8px;
        background-color: #ffffff;
        box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.2);
        font-family: 'Poppins', sans-serif;
        position: relative;
        overflow: hidden;
        img {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
        }
        >div {
            padding: 30px 100px 20px 53px;
             margin-left: 453px;
            div:nth-child(1) {
                font-size: 2.25rem;
                font-weight: 600;
                line-height: 2.52;
                letter-spacing: 0.6px;
            }
            div:nth-child(2) {
                font-size: 14px;
                font-weight: 300;
                line-height: 1.79;
                letter-spacing: 0.9px;
                color: #7a7a7a;
                span {
                    font-weight: bold;
                    color: #367cff;
                }
            }
            div:nth-child(3) {
                font-size: 0.875rem;
                font-weight: normal;
                letter-spacing: 0.9px;
                color: #000000;
            }
        }
    }

    @media (min-width: 960px) and (max-width: 1280px){
        .card-left-img {
            >div {
                padding: 20px 40px;
                margin-left: 400px;
             }
        }
    }
	
</style>