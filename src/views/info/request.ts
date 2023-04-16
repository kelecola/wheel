import request from '@/utils/request'


export const checkAnsed = (data: any) => {
  return request({
    // 是不是回答过初级问题
    url: '/api/checkAnsed',
    method: 'post',
    data,
    loading: true
  })
}

export const addUser = (data: any) => {
  return request({
    // 是不是回答过初级问题
    url: '/api/addUser',
    method: 'post',
    data,
    loading: true
  })
}