import request from '@/utils/request'


export const getId2code = (params: any) => {
  return request({
    url: '/api/hel/id2code',
    method: 'post',
    data: params,
    loading: true
  })
}

