import axios from 'axios'
import { errorInterceptor, responseInterceptor } from './interceptors'

const Api = axios.create({
  baseURL: 'http://ficha.ddns.net:81/',
  headers: {
    'content-type':'application/json;charset=utf-8',
  }
})

export default Api

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
)

export { Api }