import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import Contact from './components/Contact.vue'
// @ts-ignore
import Services from './components/Services.vue'
// @ts-ignore
import Videos from './components/Videos.vue'
// @ts-ignore
import About from './components/About.vue'

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
    },

  ]
})
