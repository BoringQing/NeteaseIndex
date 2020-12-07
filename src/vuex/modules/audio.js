const moduleAudio = {
    state:()=>(
        {
            songindex: 0
        }
    ),
    mutations:{
        parseAudio(state,{songindex}){
            state.songindex = songindex;
        }
    },
    namespaced: true
}
export default moduleAudio;