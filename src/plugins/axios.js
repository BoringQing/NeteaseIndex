import axios from 'axios';
import qs from 'qs';


axios.defaults.withCredentials = true// 允许跨域设置，不然可能因为拿不到cookie而报错

axios.defaults.baseURL = 'http://localhost:3000/'   /*这里的地址就是刚刚启起来的服务器地址  */
/*请求拦截*/
axios.interceptors.request.use(
  config => {
    if (config.method === 'post' && !(config.data instanceof FormData)) {
      config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
      config.data = qs.stringify(config.data, { arrayFormat: 'repeat' }) /*这里是，后端要求传数组的时候做的设置，以前出过错*/
    }
    return config
  }, error => {
    return Promise.reject(error)
  }
)
/* 响应拦截 */
axios.interceptors.response.use(
  res => {
   /*可在这里根据返回的状态码做一些拦截操作*/
    return res
  }, err => {
    return Promise.resolve(err)
  }
)

export function getBanner(param){
  return axios.post('banner',param);
}

export function getRecommend(param){
  return axios.post('personalized',param);
}

export function getPlaylistDetail(param){
  return axios.get('playlist/detail',param);
}

export function getMusicUrl(param){
  console.log(param);
  return axios.get('song/url',param);
}
export function getSongDetails(param){
  return axios.get('song/detail',param);
}
export function getAlbumNewest(param){
  return axios.post('album/newest',param);
}
export function cellphoneLogin(param){
  return axios.post('login/cellphone',param);
}
export function loginRefresh(param){
  return axios.post('login/refresh',param);
}
export function loginStatus(){
  return axios.post('login/status');
}
export function logout(){
  return axios.post('logout');
}
//用户id
export function getUserInfo(param){
  return axios.post('/user/detail',param);
}
export function getUserSubCount(){
  return axios.post('/user/subcount');
}
// params : 用户id
export function getUserPlaylist(param){
  return axios.get('/user/playlist',param);
}
//params : 用户id
export function getUserAudio(param){
  return axios.get('/user/audio',param)
}
//params *用户id type = 1 weekdata , type = 0 alldata 
export function getUserRecord(param){
  return axios.get('/user/record',param)
}