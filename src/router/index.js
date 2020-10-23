import Vue from 'vue'
import VueRouter from 'vue-router'

//导入响应的路由状态
const discovery = () => import('../views/discovery.vue')
const playlist = () => import('../views/playlist.vue')

Vue.use(VueRouter)
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this,to).catch(err => err)
}

const routes = [
    { path: '/', component: discovery},
    { path: '/discovery', component: discovery},
    { path: '/playlist/detail', component: playlist}
]

const router = new VueRouter({
    routes
})

export default router
