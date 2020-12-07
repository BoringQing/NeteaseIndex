import Vue from 'vue'
import VueRouter from 'vue-router'
//导入响应的路由状态

Vue.use(VueRouter)

/**
 * 路由配置
 */
const discovery = () => import('../views/discovery.vue')
const playlist = () => import('../views/playlist.vue')
const user = () => import('../views/user.vue')

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this,to).catch(err => err)
}

const routes = [
    { path: '/', component: discovery,props: (route) => ({query: route.params.songIndex})},
    { path: '/discovery', component: discovery,
        props: (route) => ({query: route.params.songIndex})
    },
    { path: '/playlist/detail', component: playlist , name:"playlist",meta:{keepAlive:true}},
    { path: '/user/home',component: user}
]

const router = new VueRouter({
    routes
})


export default router