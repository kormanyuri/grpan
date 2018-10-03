<template>

    <a href="link" class="card-game">
        <div>{{title}}</div>
        <slot></slot>
    </a>

</template>

<script>
    export default {
        props: ['title', 'link'],
    }
</script>

<style lang="scss" scoped>
    .card-game {
        display: block;
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
            top: 19px;
            width: 100%;
            text-align: center;
            font-family: 'Poppins', sans-serif;
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 0.4px;
            color: #fff;
         }
    }
</style>