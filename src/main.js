import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './pages/home.vue'
import publishing from './pages/publishing.vue'
import games from './pages/games.vue'
import jobs from './pages/jobs.vue'
import support from './pages/support.vue'
import { MdToolbar, MdLayout, MdApp, MdDrawer, MdContent, MdButton, MdList, MdField, MdMenu, MdDivider, MdSnackbar } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import cardGame from './components/cardGame.vue'
import cardGameAll from './components/cardGameAll.vue'
import buttonArrow from './components/buttonArrow.vue'
import footerMy from './components/footerMy.vue'
import VueScrollTo from 'vue-scrollto'
import VueSelect from 'vue-select'


Vue.use(MdLayout)
Vue.use(MdApp)
Vue.use(MdToolbar)
Vue.use(MdDrawer)
Vue.use(MdContent)
Vue.use(MdButton)
Vue.use(MdList)
Vue.use(MdMenu)
Vue.use(MdField)
Vue.use(MdDivider)
Vue.use(VueRouter)



Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -80,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

//new Vue({
//  el: '#app',
//  render: h => h(App)
//})

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}

    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
      position.offset = { y: 80 }
      // specify offset of the element
      //if (to.hash === '#anchor2') {
      //  position.offset = { y: 100 }
      //}

      if (document.querySelector(to.hash)) {
        return position
      }

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return false
    } else {
      return { x: 0, y: 0 }
    }
  }
}

const routes = [
  { path: '/', name: 'home', component: home },
  { path: '/publishing', name: 'publishing', component: publishing },
  { path: '/games', name: 'games', component: games },
  { path: '/jobs', name: 'jobs', component: jobs },
  { path: '/support', name: 'support', component: support },
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  scrollBehavior,
  routes
})

Vue.component('v-select', VueSelect);
Vue.component('card-game', cardGame);
Vue.component('card-game-all', cardGameAll);
Vue.component('button-arrow', buttonArrow);
Vue.component('footer-my', footerMy);

const vm = new Vue({
  el: '#app',
  router,
  methods: {
    afterLeave () {
      this.$root.$emit('triggerScroll')
    }
  }
}).$mount('#app')

