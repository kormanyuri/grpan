<template>

    <a v-bind:href="link" class="card-game">
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
            top: 25px;
            width: 100%;
            text-align: center;
            font-family: 'Poppins', sans-serif;
            font-size: 1.5rem;
            font-weight: bold;
            letter-spacing: 0.4px;
            color: #fff;
         }
    }
    @media (max-width: 991px) {
        .card-game {
            border-radius: 7px;
            border-width: 5px;
            >div:first-child {
                font-size: 0.75rem;
                 letter-spacing: 0.2px;
                 top: 8px;
             }
        }
    }
	
</style>
