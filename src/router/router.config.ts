import { RouteRecordRaw } from 'vue-router'

export const constantRouterMap: Array<RouteRecordRaw> = [
  // 主要信息页面
  {
    path: '/',
    name: 'info',
    component: () => import('@/views/mainInfo/index.vue'),
  },
  {
    path: '/t/:id',
    name: 'trans',
    component: () => import('@/views/trans/index.vue'),
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
  },
  {
    path: '/s',
    name: 'scan',
    component: () => import('@/views/scan/index.vue'),
  },
  {
    path: '/c',
    name: 'config',
    component: () => import('@/views/sys/index.vue'),
  }
]
