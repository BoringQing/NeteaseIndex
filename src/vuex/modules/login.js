const moduleLogin = {
    state:()=>({
        
        loginStatus: false,
        useravatarUrl: '',
        userlevel: -1,
        followeds: -1,
        follows: -1,
        nickname: '',
        eventCount: -1,
        userId: -1,
        city: ''

    }),
    mutations:{
        parseStateIndexUserInfo(state,{loginStatus,useravatarUrl,userlevel,follows,followeds,nickname,eventCount,userId,city}){
            state.loginStatus = loginStatus
            state.useravatarUrl = useravatarUrl
            state.userlevel = userlevel
            state.followeds = followeds
            state.follows = follows
            state.nickname = nickname
            state.eventCount = eventCount
            state.userId = userId
            state.city = city
        },
    },
    namespaced:true
}
export default moduleLogin;