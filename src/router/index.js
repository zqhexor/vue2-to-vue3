import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import(/* webpackChunkName: "DefineComponent" */ '../views/Home')

const routes = [
  {
    path: '/setup',
    name: 'setup',
    component: Home,
    meta: {
      title: 'setup'
    },
    children: [
      {
        path: 'defineComponent',
        name: 'DefineComponent',
        alias: ['/', '/home'],
        component: () => import(/* webpackChunkName: "DefineComponent" */ '../views/setup/DefineComponent'),
        meta: {
          title: 'defineComponent'
        }
      },
      {
        path: 'scriptSetup',
        name: 'ScriptSetup',
        component: () => import(/* webpackChunkName: "ScriptSetup" */ '../views/setup/ScriptSetup'),
        meta: {
          title: 'script-setup'
        }
      }
    ]
  },
  {
    path: '/data',
    name: 'data',
    component: Home,
    meta: {
      title: 'data'
    },
    children: [
      {
        path: 'ref',
        name: 'Ref',
        component: () => import(/* webpackChunkName: "Ref" */ '../views/data/Ref'),
        meta: {
          title: 'ref'
        }
      },
      {
        path: 'reactive',
        name: 'Reactive',
        component: () => import(/* webpackChunkName: "Reactive" */ '../views/data/Reactive'),
        meta: {
          title: 'reactive'
        }
      },
      {
        path: 'toRefs',
        name: 'ToRefs',
        component: () => import(/* webpackChunkName: "ToRefs" */ '../views/data/ToRefs'),
        meta: {
          title: 'toRefs'
        }
      },
      {
        path: 'toRef',
        name: 'ToRef',
        component: () => import(/* webpackChunkName: "ToRef" */ '../views/data/ToRef'),
        meta: {
          title: 'toRef'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
