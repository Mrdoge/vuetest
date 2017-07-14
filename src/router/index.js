import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Resource from 'vue-resource'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
