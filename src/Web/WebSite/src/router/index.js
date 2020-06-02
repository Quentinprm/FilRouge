//Nicolas Lardier
import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Main from '../components/Main'


Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '',
      name: 'Main',
      component: Main
    }
  ]
})
