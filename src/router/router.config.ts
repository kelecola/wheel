import { RouteRecordRaw } from 'vue-router'

export const constantRouterMap: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    redirect: '/info',
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('@/views/info/index.vue'),
  },
  {
    path: '/askQuestion/:id/:phone/:name',
    name: 'askQuestion',
    component: () => import('@/views/askQuestion/index.vue'),
  },
  {
    path: '/question/:id/:phone/:name',
    name: 'question',
    component: () => import('@/views/question/index.vue'),
  },
  {
    path: '/wheel/:id/:phone/:name',
    name: 'wheel',
    component: () => import('@/views/wheel/index.vue'),
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import('@/views/layouts/index.vue'),
  //   redirect: '/home',
  //   meta: {
  //     title: '首页',
  //     keepAlive: false
  //   },
  //   children: [
  //     {
  //       path: '/home',
  //       name: 'Home',
  //       component: () => import(/* webpackChunkName: "tabbar" */ '@/views/tabBar/home/index.vue'),
  //       meta: { title: '首页', keepAlive: false, showTab: true }
  //     },
  //     {
  //       path: '/demo',
  //       name: 'Dome',
  //       component: () => import(/* webpackChunkName: "tabbar" */ '@/views/tabBar/dome/index.vue'),
  //       meta: { title: '案例', keepAlive: false, showTab: true }
  //     },
  //     {
  //       path: '/about',
  //       name: 'About',
  //       component: () => import(/* webpackChunkName: "tabbar" */ '@/views/tabBar/about/index.vue'),
  //       meta: { title: '关于我', keepAlive: false, showTab: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/rem',
  //   name: 'Rem',
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/Rem.vue'),
  //   meta: { title: 'Rem', keepAlive: false, showTab: true }
  // },
  // {
  //   path: '/scssConfig',
  //   name: 'ScssConfig',
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/ScssConfig.vue'),
  //   meta: { title: 'ScssConfig', keepAlive: false, showTab: true }
  // },
  // {
  //   path: '/storage',
  //   name: 'Storage',
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/Storage/index.vue'),
  //   meta: { title: 'Storage使用', keepAlive: false, showTab: true }
  // }
]
