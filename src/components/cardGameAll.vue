<template>
    <!--<router-link :to="link" class="card-game-all">-->
        <!--<div>{{title}}</div>-->
        <!--<slot></slot>-->
        <!--<img src="/src/assets/img/arrow.svg" alt="arrow" class="arrow">-->
    <!--</router-link>-->
    <a :href="link" class="card-game-all" :target="target">
      <div>{{title}}</div>
      <slot></slot>
      <img src="/src/assets/img/arrow.svg" alt="arrow" class="arrow">
    </a>
</template>

<script>
    export default {
        props: ['title', 'link', 'target'],
    }
</script>

<style lang="scss" scoped>
    .card-game-all {
        display: flex;
        align-items: center;
        border-radius: 15px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.25);
        border: 10px solid #ffffff;
        overflow: hidden;
        position: relative;
        img {
            width: 100%;
            height: auto;
        }
        >div:first-child {
            position: absolute;
            top: 50%;
            bottom: 50%;
            margin-top: -18px;
            width: 100%;
            text-align: center;
            font-family: 'Poppins', sans-serif;
            font-size: 2.25rem;
            font-weight: bold;
            line-height: 1.08;
            letter-spacing: 0.6px;
            color: #fff;
         }
         .arrow {
             position: absolute;
             bottom: 26px;
             right: 26px;
             width: 37px;
             height: auto;
         }
    }

    @media (max-width: 991px) {
        .card-game-all {
            border-radius: 7px;
            border-width: 5px;
            >div:first-child {
                 font-size: 18px;
             }
             .arrow {
                 width: 20px;
                 right: 12px;
                 bottom: 10px;
             }
        }
    }

    @media (min-width: 991px) and (max-width: 1280px){
        .card-game-all > div:first-child {
            font-size: 1.7rem;
        }
    }
</style>
