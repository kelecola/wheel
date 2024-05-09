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
  // 问卷
  {
    path: '/askQuestion/:phone/:name',
    name: 'askQuestion',
    component: () => import('@/views/askQuestion/index.vue'),
  },
  // 抽奖
  {
    path: '/wheel/:id/:phone/:name',
    name: 'wheel',
    component: () => import('@/views/wheel/index.vue'),
  },
]
