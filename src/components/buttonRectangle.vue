<template>

    <md-button class="md-primary btn-rectangle" v-on:click="send">
        <slot></slot>
    </md-button>

</template>

<script>
    export default {
      methods: {
        send(){
          this.$emit('click');
        }
      }
    }
</script>

<style lang="scss" scoped>

    .btn-rectangle {
        height: 50px;
        min-width: 180px;
        margin: 0;
        background-color: #367cff;
        color: #f8f8f8 !important;
        border-radius: 2px;
        font-size: 16px;
        text-transform: none;
        font-family: 'Open Sans', sans-serif;
        font-weight: normal;
        letter-spacing: 0.7px;
    }

</style>
