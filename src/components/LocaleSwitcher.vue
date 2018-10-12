<template>
    <div>
        <v-select v-model="locale" :options="options" class="select-lang">
            <!--<template slot="option" slot-scope="option">-->
                <!--<div class="d-center" style="background: #000000">-->
                    <!--<router-link :to="`/${locale.code}`">-->
                        <!--{{ option.label }}-->
                    <!--</router-link>-->
                <!--</div>-->
            <!--</template>-->

            <!--<template slot="option" slot-scope="option" v-for="locale in locales">-->
                <!--<router-link :to="`/${locale.code}`">-->
                    <!--{{locale.code}}-->
                <!--</router-link>-->
            <!--</template>-->
        </v-select>
        <!--<router-link-->
                <!--v-for="locale in locales"-->
                <!--:key="locale.code"-->
                <!--:to="`/${locale.code}`"-->
                <!--class="dropdown-item"-->
        <!--&gt;<span class="locale-name">{{locale.name}}</span></router-link>-->
    </div>

</template>

<script>

    import { locales } from '../config/i18n'

    export default {
        name: 'LocaleSwitcher',
        data: function(){
            return {
                show: false,
                options: [
                    {code: 'en', label: 'English'},
                    {code: 'fr', label: 'Français'},
                    {code: 'ru', label: 'Русский'},
                ],
                locale: {code: 'en', label: 'English'},
                locales
            }
        },
//        watch: {
//            locale (val) {
//                this.$i18n.locale = val.id
//            }
//        },
//        computed: {
//            currentLocale() {
//                return this.$route.params.locale
//            },
//        },
    }
</script>

<style lang="scss" scoped>
    .select-lang {
        /*margin: 0 auto 8px;*/
    }
</style>