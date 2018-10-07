import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './pages/home.vue'
import publishing from './pages/publishing.vue'
import games from './pages/games.vue'
import jobs from './pages/jobs.vue'
import support from './pages/support.vue'
import { MdToolbar, MdLayout, MdApp, MdDrawer, MdContent, MdButton, MdList, MdField, MdMenu, MdDivider } from 'vue-material/dist/components'
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

const routes = [
  { path: '/', name: 'home', component: home },
  { path: '/publishing', name: 'publishing', component: publishing },
  { path: '/games', name: 'games', component: games },
  { path: '/jobs', name: 'jobs', component: jobs },
  { path: '/support', name: 'support', component: support },
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

Vue.component('v-select', VueSelect);
Vue.component('card-game', cardGame);
Vue.component('card-game-all', cardGameAll);
Vue.component('button-arrow', buttonArrow);
Vue.component('footer-my', footerMy);

const vm = new Vue({
  el: '#app',
  router,
}).$mount('#app')

