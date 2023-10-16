import { RouteRecordRaw } from 'vue-router'

export const constantRouterMap: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    redirect: '/info',
  },
  // 主要信息页面
  {
    path: '/info',
    name: 'info',
    component: () => import('@/views/mainInfo/index.vue'),
  },
  // {
  //   path: '/askQuestion/:id/:phone/:name',
  //   name: 'askQuestion',
  //   component: () => import('@/views/askQuestion/index.vue'),
  // },
  // {
  //   path: '/question/:id/:phone/:name',
  //   name: 'question',
  //   component: () => import('@/views/question/index.vue'),
  // },
  // {
  //   path: '/wheel/:id/:phone/:name',
  //   name: 'wheel',
  //   component: () => import('@/views/wheel/index.vue'),
  // }
]
