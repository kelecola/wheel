import request from '@/utils/request'


export const getDetailById = (params: any) => {
  console.log('params', params);

  return request({
    url: '/api/hel/index',
    method: 'post',
    data: params,
    loading: true
  })
}


export const apiScan = (params: any) => {
  console.log('params', params);

  return request({
    url: '/api/hel/scan',
    method: 'post',
    data: params,
    loading: true
  })
}

