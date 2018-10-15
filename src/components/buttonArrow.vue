<template>

    <md-button class="md-primary btn-arrow">
        <slot></slot>
        <img src="/src/assets/img/arrow-1.svg" alt="">
    </md-button>

</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

    .btn-arrow {
        height: 50px;
        padding: 0 12px;
        background-color: #367cff;
        color: #ffffff !important;
        border-radius: 25px;
        font-size: 16px;
        text-transform: none;
        /*padding: 0 8px;*/
        font-family: 'Open Sans', sans-serif;
        font-weight: normal;
        letter-spacing: 0.7px;
        img {
            padding-left: 8px;
        }
    }
	
</style>