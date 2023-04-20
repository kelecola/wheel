import request from '@/utils/request'

/**
 * 获取用户信息
 */
export const getWinIndex = (data: any) => {
  return request({
    url: '/api/win_index',
    data,
    method: 'post',
    loading: true
  })
}

export const updateUser = (sKey: any, updateData: any) => {
  return request({
    url: '/api/updateUser',
    method: 'post',
    data: {
      sKey,
      updateData
    },
    loading: true
  })
}

export const checkAnsed = (data: any) => {
  return request({
    // 是不是回答过初级问题
    url: '/api/checkAnsed',
    method: 'post',
    data,
    loading: true
  })
}

export const getRestTime = (data: any) => {
  return request({
    // 是不是回答过初级问题
    url: '/api/get_rest_time',
    method: 'post',
    data,
    loading: true
  })
}
