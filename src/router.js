// @ts-nocheck
import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import Services from './views/Services.vue'
import Videos from './views/Videos.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
