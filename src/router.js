import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import goodlist from './views/goodlist'
import car from './views/car'
import user from './views/user'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/goodlist'
      ,component:goodlist
    },
    {
      path:'/car'
      , component:car
    },
    {
      path:'/user',
      component:user
    }
  ]
})
