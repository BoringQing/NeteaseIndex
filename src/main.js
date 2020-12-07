import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'vue-axios';
import qs from 'qs';
import router from './router'
import './assets/index.css'
import '../font-awesome-4.7.0/css/font-awesome.min.css'
import Bus from './bus/eventBus.js';
import Vuex from './vuex/vuex'

Bus(Vue)
//全局注册,使用方法为 this.$axios
Vue.prototype.$axios = axios;
Vue.prototype.qs = qs;
Vue.prototype.$store = Vuex;
Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.filter('playTimeFormat', function (originVal) {
  let duration = originVal
  let min = parseInt(duration / 1000 / 60)
  if (min < 10) {
    min = '0' + min
  }
  let sec = parseInt((duration / 1000) % 60)
  if (sec < 10) {
    sec = '0' + sec
  }
  return `${min}:${sec}`
})

Vue.filter('playNumFormat', function (playCount) {
  if (playCount > 10000) {
    return parseInt(playCount / 10000) + '万'
  }
  return playCount
})

Vue.filter('dateFormat', function (originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})


new Vue({
  render: h => h(App),
  router,
  Vuex
}).$mount('#app')

