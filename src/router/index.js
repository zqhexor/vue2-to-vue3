import { createRouter, createWebHistory } from 'vue-router'
import setup from '../views/setup'

const routes = [
  {
    path: '/',
    name: 'setup',
    component: setup,
    meta: {
      title: 'setup'
    }
  },
  {
    path: '/data',
    name: 'data',
    component: () => import(/* webpackChunkName: "setup" */ '../views/data'),
    meta: {
      title: 'data'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
