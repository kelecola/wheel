import request from '@/utils/request'


export const apiScan = (params: any) => {
  console.log('params', params);

  return request({
    url: '/api/scan',
    method: 'post',
    data: params,
    loading: true
  })
}

