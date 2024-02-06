// // 封装数据请求
// import axios from 'axios'
// function httpForList () {
//   return axios({
//     url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=7284377',
//     // url: '/wuhu.json',
//     headers: {
//       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16999531191913360685727745"}',
//       'X-Host': 'mall.film-ticket.film.list'
//     }
//   })
// }
// function httpForDetail (params) {
//   return axios({
//     url: `https://m.maizuo.com/gateway?filmId=${params}&k=7284377`,
//     // url: '/wuhu.json',
//     headers: {
//       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16999531191913360685727745"}',
//       'X-Host': 'mall.film-ticket.film.list'
//     }
//   })
// }
// export default {
//   httpForDetail,
//   httpForList
// }

// 2 对于数据请求的封装
import axios from 'axios'
const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000,
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16999531191913360685727745"}'
  }
})
// 在发送请求之前拦截 --showLoading

// 成功后拦截 --hideLoading
export default http
