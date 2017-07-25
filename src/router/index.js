import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AudioPlay from '@/components/AudioPlay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail/:mid',
      name: 'AudioPlay',
      component: AudioPlay
    }
  ]
})
