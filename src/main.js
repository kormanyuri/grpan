import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/home.vue'
import Publishing from './pages/publishing.vue'
import Games from './pages/games.vue'
import Jobs from './pages/jobs.vue'
import Support from './pages/support.vue'
import { MdToolbar, MdLayout, MdApp, MdDrawer, MdContent, MdButton, MdList, MdField, MdMenu, MdDivider } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import cardGame from './components/cardGame.vue'
import cardGameAll from './components/cardGameAll.vue'
import buttonArrow from './components/buttonArrow.vue'
import footerMy from './components/footerMy.vue'


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

//new Vue({
//  el: '#app',
//  render: h => h(App)
//})

const routes = [
  { path: '/', component: Home },
  { path: '/publishing', component: Publishing },
  { path: '/games', component: Games },
  { path: '/jobs', component: Jobs },
  { path: '/support', component: Support },
]

const router = new VueRouter({
  routes
})

Vue.component('card-game', cardGame);
Vue.component('card-game-all', cardGameAll);
Vue.component('button-arrow', buttonArrow);
Vue.component('footer-my', footerMy);

const vm = new Vue({
  el: '#app',
  router,
}).$mount('#app')

