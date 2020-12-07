import Vue from 'vue'

import Vuex from 'vuex'
import moduleIndex from './modules/index'
import modulePlaylist from './modules/playlist'
import moduleAudio from './modules/audio'
import moduleLogin from './modules/login'
import moduleUser from './modules/userInfo'
Vue.use(Vuex)

/**
 * Vuex 状态管理 配置
 */
const store = new Vuex.Store({
    modules:{
        moduleIndex,
        modulePlaylist,
        moduleAudio,
        moduleLogin,
        moduleUser
    },
})
export default store
