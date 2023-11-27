import request from '@/utils/request'


export const genDetailByBatchNum = (params: any) => {
  return request({
    url: '/api/hel/genDetailByBatchNum',
    method: 'post',
    data: params,
    loading: true
  })
}


export const genBatchUpdateAndAdd = (params: any) => {
  return request({
    url: '/api/hel/genBatchUpdateAndAdd',
    method: 'post',
    data: params,
    loading: true
  })
}

// export const genBatchIdToCodeExcel = (params: any) => {
//   return request({
//     url: '/api/hel/idToCodeExcel',
//     method: 'post',
//     data: params,
//     loading: true
//   })
// }
