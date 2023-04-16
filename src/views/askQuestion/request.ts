import request from '@/utils/request'


export const getQuestions = () => {
  return request({
    url: '/api/ask_questions',
    method: 'get',
    loading: true
  })
}

export const updateUser = (sKey: any, key: any, value: any) => {
  return request({
    url: '/api/updateUser',
    method: 'post',
    data: {
      sKey,
      key,
      value
    },
    loading: true
  })
}