<template>
<div class="main">
    <router-view></router-view>
    <diy-video></diy-video>
</div>
</template>

<script>
import diyVideo from "./myVideo.vue";
export default {
    name: 'content',
    data(){
        return{
            musicUrl: ''
        }
    },
    components:{
        diyVideo
    }
}
</script>

<style>

</style>