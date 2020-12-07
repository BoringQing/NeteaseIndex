
// 首页 模块 
const moduleIndex = {
    state: ()=> (
        {
            recommend: [],
            albumNewest: [],
            audioIds: []
        }
    ),
    mutations: {
        parseStateIndexRecommendAndAlbumNewest(state,{recommend,albumNewest}){
            state.recommend = recommend;
            state.albumNewest = albumNewest;
        },
        parseStateIndexAudioIds(state,{audioIds}){
            state.audioIds = audioIds  
        }
    },
    namespaced: true

}

export default moduleIndex