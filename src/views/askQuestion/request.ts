import request from '@/utils/request'


export const getQuestions = () => {
  return request({
    url: '/api/questions',
    method: 'get',
    loading: true
  })
}

export const getMulQuestions = () => {
  return request({
    url: '/api/mul_questions',
    method: 'get',
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