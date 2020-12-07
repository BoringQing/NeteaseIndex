<template>
    <div class="discovery_container">
        <!-- 轮播图 -->
        <div class="carousel-box" ref='carousel_Box'>
            <div class="carousel-wrap">
                <div class="carousel" @mouseover="stopChangeBackground()" @mouseleave="startChangeBackground()">
                    <el-carousel :interval="5000" arrow="always" trigger="click" >
                    <el-carousel-item v-for="(item,index) in banners" :key="index" @mouseover.native="mouseSlide(index)">
                        <img :src="item.imageUrl" alt="">
                    </el-carousel-item>
                </el-carousel>
                </div>
                <div class="download">
                    <a href="" id="side-download" hidefocus="true" class="btn">下载客户端</a>
                    <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                    <span class="shadow"></span>
                    <span class="shadow"></span>
                </div>
            </div>
        </div>
        <div class="discover-module g-bd1">
            <div class="leftBox">
                <div class="g-wrap3">
                    <!--推荐歌单-->
                    <div class="n-rcmd">
                        <div class="v-hd2">
                            <div class="tab clflex">
                                <a href="" class="a-rcmd">热门推荐</a>
                                <div class="rcmd-list">
                                    <a href="">华语</a>
                                    <span>|</span>
                                    <a href="">流行</a>
                                    <span>|</span>
                                    <a href="">摇滚</a>
                                    <span>|</span>
                                    <a href="">民谣</a>
                                    <span>|</span>
                                    <a href="">电子</a>
                                </div>
                               
                            </div>
                            <span class="more">
                                <a href="">更多</a>
                                <i class="el-icon-right"></i>
                            </span>
                        </div>
                        <ul class="m-cvrlst">
                            <li v-for="(item,index) in Statusrecommend" :key="index" @mouseenter="getPlaylistId(item.id)" @click="toPlaylist()">
                                <div class="u-cover u-cover1">
                                    <img :src="item.picUrl" alt="">
                                    <a href="#" :title="item.name" class="msk" ></a>
                                    <div class="bottom">
                                        <a @click="parsePlaylistId()" class="icon-play f-fr"></a>
                                        <i class="el-icon-service"></i>
                                        <span class="nb">{{item.trackCount}}万</span>
                                    </div>
                                    <p class="dec">
                                        <a href="#" :title="item.name">{{item.name}}</a>
                                    </p>
                                </div> 
                            </li>
                        </ul>
                    </div>
                    <div class="n-clmnad"></div>
                    <!-- 新碟上架 -->
                    <div class="n-new">
                        <div class="v-hd2">
                            <div class="tab clflex">
                                <a href="" class="a-rcmd">新碟上架</a>
                            </div>
                            <span class="more">
                                <a href="">更多</a>
                                <i class="el-icon-right"></i>
                            </span>
                        </div>
                        <div class="n-disk">
                            <div class="inner">
                                <a href="javascript:;" hidefocus="true" class="pre"><i class="el-icon-arrow-left" @click="turnLeft()"></i></a>
                                <div class="roll f-pr">
                                    <ul class="f-cb" style="left: -645px;transition: none 0s ease 0s;" id="ul-1">
                                        <li v-for="(item,index) in StatusalbumNewest.slice(0,5)" :key="index">
                                            <div class="u-cover u-cover-alb1">
                                                <img :src="item.blurPicUrl" alt="" class="j-img">
                                                <a href="" class="msk"></a>
                                                <a href="" class="icon-play f-alpha f-fr"></a>
                                            </div>
                                            <p class="f-thide"><a href="" class="s-fc0 tit">{{item.name}}</a></p>
                                            <p class="tit f-thide"><a href="" class="s-fc3">{{item.artist.name}}</a></p>
                                        </li>
                                    </ul>
                                    <ul class="f-cb" style="left: 0px;transition: none 0s ease 0s;" id="ul-2">
                                        <li v-for="(item,index) in StatusalbumNewest.slice(5,10)" :key="index">
                                            <div class="u-cover u-cover-alb1">
                                                <img :src="item.blurPicUrl" alt="" class="j-img">
                                                <a href="" class="msk"></a>
                                                <a href="" class="icon-play f-alpha f-fr"></a>
                                            </div>
                                            <p class="f-thide"><a href="" class="s-fc0 tit">{{item.name}}</a></p>
                                            <p class="tit f-thide"><a href="" class="s-fc3">{{item.artist.name}}</a></p>
                                        </li>
                                    </ul>
                                    <ul class="f-cb" style="left: 645px;transition: none 0s ease 0s;" id="ul-3">
                                        <li v-for="(item,index) in StatusalbumNewest.slice(0,5)" :key="index">
                                            <div class="u-cover u-cover-alb1">
                                                <img :src="item.blurPicUrl" alt="" class="j-img">
                                                <a href="" class="msk"></a>
                                                <a href="" class="icon-play f-alpha f-fr"></a>
                                            </div>
                                            <p class="f-thide"><a href="" class="s-fc0 tit">{{item.name}}</a></p>
                                            <p class="tit f-thide"><a href="" class="s-fc3">{{item.artist.name}}</a></p>
                                        </li>
                                    </ul>
                                    <ul class="f-cb" style="left: 1290px;transition: none 0s ease 0s;" id="ul-4">
                                        <li v-for="(item,index) in StatusalbumNewest.slice(5,10)" :key="index">
                                            <div class="u-cover u-cover-alb1">
                                                <img :src="item.blurPicUrl" alt="" class="j-img">
                                                <a href="" class="msk"></a>
                                                <a href="" class="icon-play f-alpha f-fr"></a>
                                            </div>
                                            <p class="f-thide"><a href="" class="s-fc0 tit">{{item.name}}</a></p>
                                            <p class="tit f-thide"><a href="" class="s-fc3">{{item.artist.name}}</a></p>
                                        </li>
                                    </ul>
                                </div>
                                <a href="javascript:;" hidefocus="true" class="nxt"><i class="el-icon-arrow-right" @click="turnRight()"></i></a>
                            </div>

                        </div>
                    </div>
                    <div class="n-bill"></div>
                </div>
            </div>
            <div class="rightBox">
                <div class="user-profile s-bg s-bg5" style="display:none;" id="user_profile">
                    <div class="f-cb">
                        <a href="javascript:;" @click="toUserHome()" class="head f-pr">
                            <img :src="StatususeravatarUrl" alt="">
                        </a>
                        <div class="user-info">
                            <h4 style="overflow: hidden;">
                                <a href="" class="f-thide nm-icn vip-80">{{Statusnickname}}</a>
                                <span class="vip-code-230-1"></span>
                            </h4>
                            <p>
                                <a href="" class="u-lv u-icn2 u-icn2-lv">{{Statususerlevel}}
                                    <i class="right u-icn2 u-icn2-lvright"></i>
                                </a>
                            </p>
                            <div class="btnwrap f-pr">
                                <a href="javascript:;" hidefocus="true" class="sign u-btn2 u-btn2-2">
                                    <i>签到</i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <ul class="dny s-fc3 f-cb">
                        <li class="fst">
                            <a href="">
                                <strong>{{StatuseventCount}}</strong>
                                <span>动态</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <strong>{{Statusfollows}}</strong>
                                <span>关注</span>
                            </a>
                        </li>
                        <li class="lst">
                            <a href="">
                                <strong>{{Statusfolloweds}}</strong>
                                <span>粉丝</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
  
</template>
<script>

import {getBanner,getRecommend,getPlaylistDetail,getMusicUrl,getAlbumNewest} from '@/plugins/axios.js'
import {mapState} from 'vuex'
export default {
    name: 'banner',
    data(){
        return {
            banners: [],
            auto: null,
            Realindex: 0,
            playlistId:0,
            details: [],
            songId: 0,
            musicUrl: '',
            songIds: [] ,
            songdetails:[],
            userId: 0,
            lastTime: 0,
            imageUrl: [],
            songIndex: 0
        }
    },
    computed: {...mapState('moduleLogin',{
        Statususerlevel: state => state.userlevel,
        StatususeravatarUrl: state => state.useravatarUrl,
        Statusfolloweds: state => state.followeds,
        Statusfollows: state => state.follows,
        Statusnickname: state => state.nickname,
        StatuseventCount: state => state.eventCount
       
    }),
        StatusAudioIds(){
            return this.$store.state.moduleIndex.audioIds
        },
        Statusrecommend(){
            return this.$store.state.moduleIndex.recommend
        },
        StatusalbumNewest(){
            return this.$store.state.moduleIndex.albumNewest
        }
    },
    
    methods:{
        //自动切换背景
         autoChangeBackground: function(){
             //自动切换背景
            this.$refs.carousel_Box.style.backgroundImage = "url("+this.imageUrl[this.Realindex]+"?imageView&blur=40x20)";
            window.timeoutCount = setTimeout(()=>{
                this.$refs.carousel_Box.style.transition = 'opacity 1s ease-in 0s'
                this.$refs.carousel_Box.style.setProperty('--opacity_val',0.2)
            },4000)
            window.auto = setInterval(()=>{
                this.Realindex++;
                this.$refs.carousel_Box.style.setProperty('--opacity_val',1)
                this.$refs.carousel_Box.style.transition = 'none 0s ease 0s'
                this.$refs.carousel_Box.style.backgroundImage = "url("+this.imageUrl[this.Realindex]+"?imageView&blur=40x20)";
                if(this.Realindex==this.banners.length){
                    this.Realindex=0;
                }
                setTimeout(()=>{
                this.$refs.carousel_Box.style.transition = 'opacity 1s ease-in 0s'
                this.$refs.carousel_Box.style.setProperty('--opacity_val',0.2)
            },4000)
            },5000);
        },
        //停止切换背景
        stopChangeBackground:function() {
            this.$refs.carousel_Box.style.setProperty('--opacity_val',1)
            this.$refs.carousel_Box.style.transition = 'none 0s ease 0s'
            clearTimeout(window.timeoutCount)
            clearInterval(window.auto);
        },
        //开始自动切换背景
        startChangeBackground:function(){
            //获取当前位置的index 展示图片
            this.autoChangeBackground();
        },
        //路由跳转到歌单页面
        toPlaylist(){
            this.$router.push({name:`playlist`,
                               params: {songIndex: this.songIndex,id: this.playlistId,AudioIds:this.StatusAudioIds}});
                               console.log(this.$route) 
        },
        //路由跳转到用户页面
        toUserHome(){
          this.$router.push(`/user/home?id=${this.userId}`);  
        },
        //鼠标点击改变背景
        async mouseSlide(index){
            this.Realindex = index;
            this.$refs.carousel_Box.style.backgroundImage = "url("+this.banners[this.Realindex].imageUrl+"?imageView&blur=40x20)";
        },
        //获取歌单ID
        getPlaylistId(id){
            this.playlistId=id;
        },
        //传递信息给 播放器 组件
        async parsePlaylistId(){
            var ev = event;
            ev.cancelBubble = true;  
            const {data:rs} = await getPlaylistDetail({
                params:{
                    id: this.playlistId
                }
            });
            this.songId = rs.privileges[0].id;
            for(let i = 0;i<rs.privileges.length;i++){
                this.songIds[i] = rs.privileges[i].id;
            }
            const {data: url} = await getMusicUrl({
                params:{
                    id: this.songId
                }
            });
            this.$bus.$emit('parseDetails',rs);
            var parseId = this.playlistId;
            this.musicUrl = url.data[0].url;
            var parseUrl = this.musicUrl;
            var parseIds = this.songIds;
            function Audio(audioIds){
                this.audioIds = audioIds;
            }
            let audio = new Audio(parseIds)
            this.$store.commit('moduleIndex/parseStateIndexAudioIds',audio);

            this.$bus.$emit('parseId',parseId);
            // this.$bus.$emit('parseUrl',parseUrl);
            this.$bus.$emit('parseIds',parseIds);
            this.$bus.$emit('parseUrl',parseUrl);
            // console.log('send');
        },
        //新碟上架 向右显示
        turnRight(){
            let ul_1 = document.getElementById('ul-1');
            let ul_2 = document.getElementById('ul-2');
            let ul_3 = document.getElementById('ul-3');
            let ul_4 = document.getElementById('ul-4');
            let Left1 = parseInt(ul_1.style.left.replace('px',''));
            let Left2 = parseInt(ul_2.style.left.replace('px',''));
            let Left3 = parseInt(ul_3.style.left.replace('px',''));
            console.log(ul_4);
            if(Left1 == 0){
                ul_1.style.left = '-645px';
                ul_2.style.left = '0px';
                ul_3.style.left = '645px';
                ul_4.style.transition = 'none 0s ease 0s';
                ul_1.style.transition = 'none 0s ease 0s';
                ul_1.style.transition = 'left 2s ease 0s';
                ul_2.style.transition = 'left 2s ease 0s';
            }else if(Left2 == 0){
                ul_2.style.left = '-645px';
                ul_3.style.left = '0px';
                ul_4.style.left = '645px';
                ul_1.style.transition = 'none 0s ease 0s';
                ul_2.style.transition = 'none 0s ease 0s';
                ul_2.style.transition = 'left 2s ease 0s';
                ul_3.style.transition = 'left 2s ease 0s';
            }else if(Left3 == 0){
                ul_3.style.left = '-645px';
                ul_4.style.left = '0px';
                ul_1.style.left = '645px';
                ul_2.style.transition = 'none 0s ease 0s';
                ul_3.style.transition = 'none 0s ease 0s';
                ul_3.style.transition = 'left 2s ease 0s';
                ul_4.style.transition = 'left 2s ease 0s';
            }else{
                ul_2.style.left = '645px';
                ul_4.style.left = '-645px'
                ul_1.style.left = '0px';
                ul_3.style.transition = 'none 0s ease 0s';
                ul_4.style.transition = 'none 0s ease 0s';
                ul_1.style.transition = 'left 2s ease 0s';
                ul_4.style.transition = 'left 2s ease 0s';
            }
        },
        turnLeft(){
            let ul_1 = document.getElementById('ul-1');
            let ul_2 = document.getElementById('ul-2');
            let ul_3 = document.getElementById('ul-3');
            let ul_4 = document.getElementById('ul-4');
            let Left1 = parseInt(ul_1.style.left.replace('px',''));
            let Left2 = parseInt(ul_2.style.left.replace('px',''));
            let Left3 = parseInt(ul_3.style.left.replace('px',''));
            let Left4 = parseInt(ul_4.style.left.replace('px',''));
            if(Left1 == 0){
                ul_1.style.left = '645px';
                ul_4.style.left = '0px';
                ul_3.style.left = '-645px';
                ul_3.style.transition = 'none 0s ease 0s';
                ul_4.style.transition = 'none 0s ease 0s';
                ul_4.style.transition = 'left 2s ease 0s';
                ul_1.style.transition = 'left 2s ease 0s';
            }else if(Left2 == 0){
                ul_2.style.left = '645px';
                ul_1.style.left = '0px';
                ul_4.style.left = '-645px';
                ul_1.style.transition = 'none 0s ease 0s';
                ul_4.style.transition = 'none 0s ease 0s';
                ul_2.style.transition = 'left 2s ease 0s';
                ul_1.style.transition = 'left 2s ease 0s';
            }else if(Left3 == 0){
                ul_3.style.left = '645px';
                ul_2.style.left = '0px';
                ul_1.style.left = '-645px';
                ul_2.style.transition = 'none 0s ease 0s';
                ul_1.style.transition = 'none 0s ease 0s';
                ul_2.style.transition = 'left 2s ease 0s';
                ul_3.style.transition = 'left 2s ease 0s';
            }else if(Left4 == 0){
                ul_4.style.left = '645px';
                ul_3.style.left = '0px';
                ul_2.style.left = '-645px';
                ul_2.style.transition = 'none 0s ease 0s';
                ul_3.style.transition = 'none 0s ease 0s';
                ul_4.style.transition = 'left 2s ease 0s';
                ul_3.style.transition = 'left 2s ease 0s';
            }
        }
    },
    async created(){
        //解构赋值
        const {data : resp0} =  await getBanner();
        this.banners = resp0.banners;
        for(let i = 0;i < this.banners.length;i++){
            this.imageUrl[i] = this.banners[i].imageUrl;
        }
        const {data : resp1} = await getRecommend({limit: 8});
        const {data: newest} = await getAlbumNewest();
        let recommend = resp1.result;
        let albumNewest = newest.albums;
        //RAA  recommend and albumNewest
        function RAA(recommend,albumNewest) {
            this.recommend = recommend;
            this.albumNewest = albumNewest;
        }
        let raa = new RAA(recommend,albumNewest)
        this.$store.commit('moduleIndex/parseStateIndexRecommendAndAlbumNewest',raa)
        // const {data : resp2} = await getPlaylist({});

    },
    async mounted(){
        this.autoChangeBackground();
        this.$bus.$on('parseSongIndex',(songindex)=>{
            this.songIndex = songindex;
            console.log(this.songIndex)
        })
    },
    updated(){
        
        //如果处于登录状态
        this.$nextTick(()=>{
            if(this.$store.state.moduleLogin.loginStatus){
                let user = document.getElementById('user_profile')
                user.style.display = 'block'
            }
        })
    },
    beforeDestroy(){
    },
    destroyed(){
        clearTimeout(window.timeoutCount)
        clearInterval(window.auto);
    }
}
</script>

<style>

</style>