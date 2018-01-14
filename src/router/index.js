import Vue from 'vue'
import Router from 'vue-router'
import App from '../pages/view.vue'
import List from '../pages/list/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../pages/home')), 'home')
      }, {
        path: 'item',
        component: r => require.ensure([], () => r(require('../pages/item')), 'item')
      }, {
        path: 'score',
        component: r => require.ensure([], () => r(require('../pages/score')), 'score')
      }]
    }, {
      path: '/list',
      component: List
    }
  ]
})
