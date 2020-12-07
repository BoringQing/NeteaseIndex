const moduleUser = {
    state:()=>({
        subscribedIndex: 0,
        playlist: [],
        djRadios: [],
        userWeekRecord: []
    }),
    mutations:{
        commitUserInfo(state,{playlist,subscribedIndex,djRadios,userWeekRecord}){
            state.playlist = playlist;
            state.subscribedIndex = subscribedIndex
            state.djRadios = djRadios
            state.userWeekRecord = userWeekRecord
        }
    },
    namespaced: true
}
export default moduleUser;