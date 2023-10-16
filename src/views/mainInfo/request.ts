import request from '@/utils/request'


export const getProductById = (data: any) => {
  return request({
    // 是不是回答过初级问题
    url: '/api/getProductById',
    method: 'post',
    data,
    loading: true
  })
}