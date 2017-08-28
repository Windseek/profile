import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/Register'
import profile from '@/components/Profile'
import mine from '@/components/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: register
    },
    {
      path: '/profile',
      component: profile
    },
    {
      path: '/mine',
      component: mine
    }
  ]
})
