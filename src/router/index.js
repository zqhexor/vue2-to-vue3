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
  },
  {
    path: '/computed',
    name: 'computed',
    component: Home,
    meta: {
      title: 'computed'
    },
    children: [
      {
        path: 'getter',
        name: 'Getter',
        component: () => import(/* webpackChunkName: "Getter" */ '../views/computed/Getter'),
        meta: {
          title: 'getter函数（只读）'
        }
      },
      {
        path: 'getAndSet',
        name: 'GetAndSet',
        component: () => import(/* webpackChunkName: "GetAndSet" */ '../views/computed/GetAndSet'),
        meta: {
          title: 'getAndSet（可写）'
        }
      }
    ]
  },
  {
    path: '/watch',
    name: 'watch',
    component: Home,
    meta: {
      title: 'watch'
    },
    children: [
      {
        path: 'watchSingle',
        name: 'WatchSingle',
        component: () => import(/* webpackChunkName: "WatchSingle" */ '../views/watch/WatchSingle'),
        meta: {
          title: '侦听单个数据源及停止侦听'
        }
      },
      {
        path: 'watchMultiple',
        name: 'watchMultiple',
        component: () => import(/* webpackChunkName: "WatchMultiple" */ '../views/watch/WatchMultiple'),
        meta: {
          title: '侦听多个数据源'
        }
      },
      {
        path: 'watchObject',
        name: 'watchObject',
        component: () => import(/* webpackChunkName: "WatchObject" */ '../views/watch/WatchObject'),
        meta: {
          title: '侦听引用对象'
        }
      }
    ]
  },
  {
    path: '/watchEffect',
    name: 'watchEffect',
    component: Home,
    meta: {
      title: 'watchEffect'
    },
    children: [
      {
        path: 'sideEffect',
        name: 'sideEffect',
        component: () => import(/* webpackChunkName: "SideEffect" */ '../views/watchEffect/SideEffect'),
        meta: {
          title: '副作用'
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
