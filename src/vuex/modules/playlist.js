/**
 *  歌单详情模块
 */

const modulePlaylist = {
    state: ()=>(
        {
            details:[],
            songindex: -1
        }
    ),
    mutations:{
        parseStateDetails(state,{details,songindex}){
            state.details = details
            state.songindex = songindex;
        }
    },
    namespaced: true
}

export default modulePlaylist;