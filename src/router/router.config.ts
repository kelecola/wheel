import { RouteRecordRaw } from 'vue-router'

export const constantRouterMap: Array<RouteRecordRaw> = [
  // 主要信息页面
  {
    path: '/',
    name: 'info',
    component: () => import('@/views/lutou/index.vue')
  }
]
