import { RouteRecordRaw } from 'vue-router'

export const constantRouterMap: Array<RouteRecordRaw> = [
  // 主要信息页面
  {
    path: '/',
    name: 'info',
    component: () => import('@/views/mainInfo/index.vue'),
  },
  {
    path: '/d',
    name: 'detail',
    component: () => import('@/views/detail/index.vue'),
  },
  {
    path: '/v',
    name: 'verify',
    component: () => import('@/views/verify/index.vue'),
  }
]
