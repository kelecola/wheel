import request from '@/utils/request'


export const getVerDetailById = (params: any) => {
  return request({
    url: '/api/hel/verDetail',
    method: 'post',
    data: params,
    loading: true
  })
}

