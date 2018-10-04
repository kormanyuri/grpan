<template>

    <a :href="link" class="card-game-all">
        <div>{{title}}</div>
        <slot></slot>
        <img src="/src/assets/img/arrow.svg" alt="arrow" class="arrow">
    </a>
</template>

<script>
    export default {
        props: ['title', 'link'],
    }
</script>

<style lang="scss" scoped>
    .card-game-all {
        display: flex;
        align-items: center;
        border-radius: 7px;
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
            font-size: 36px;
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
</style>