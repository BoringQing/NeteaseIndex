<template>
    <div class="discovery_container">
        <!-- 轮播图 -->
        <div class="carousel-box">
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
                            <li v-for="(item,index) in recommend" :key="index" @mouseenter="getPlaylistId(item.id)" @click="toPlaylist()">
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
                                        <li v-for="(item,index) in albumNewest.slice(0,5)" :key="index">
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
                                        <li v-for="(item,index) in albumNewest.slice(5,10)" :key="index">
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
                                        <li v-for="(item,index) in albumNewest.slice(0,5)" :key="index">
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
                                        <li v-for="(item,index) in albumNewest.slice(5,10)" :key="index">
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
            <div class="rightBox"></div>
        </div>
    </div>
    
  
</template>
<script>

import {getBanner,getRecommend,getPlaylistDetail,getMusicUrl,getAlbumNewest} from '@/plugins/axios.js'

export default {
    name: 'banner',
    data(){
        return {
            banners: [],
            recommend: [],
            auto: null,
            Realindex: 0,
            playlistId:0,
            details: [],
            songId: 0,
            musicUrl: '',
            songIds: [] ,
            songdetails:[],
            albumNewest: []
        }
    },
    methods:{
        //自动切换背景
        autoChangeBackground:function(){
             //自动切换背景
            var carouselBox = document.getElementsByClassName('carousel-box');
            carouselBox[0].style.backgroundImage = "url("+this.banners[this.Realindex].imageUrl+"?imageView&blur=40x20)";
            setTimeout(() => {
                
            }, 5000);
            var auto = setInterval(()=>{
                this.Realindex++;
                if(this.Realindex==this.banners.length){
                    this.Realindex=0;
                }
                carouselBox[0].style.backgroundImage = "url("+this.banners[this.Realindex].imageUrl+"?imageView&blur=40x20)";
            },5000);
            return auto;
        },
        //停止切换背景
        stopChangeBackground: function() {
            clearInterval(this.auto);
        },
        //开始自动切换背景
        startChangeBackground: function(){
            //获取当前位置的index 展示图片
            this.auto = this.autoChangeBackground();
        },
        //路由跳转到歌单页面
        toPlaylist(){
            this.$router.push(`/playlist/detail?id=${this.playlistId}`);
        },
        //鼠标点击改变背景
        mouseSlide(index){
            this.Realindex = index;
            var carouselBox = document.getElementsByClassName('carousel-box');
            carouselBox[0].style.backgroundImage = "url("+this.banners[this.Realindex].imageUrl+"?imageView&blur=40x20)";
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
        const {data : resp1} = await getRecommend({limit: 8});
        this.recommend = resp1.result;
        const {data: newest} = await getAlbumNewest();
        this.albumNewest = newest.albums;
        console.log(this.albumNewest);
        // const {data : resp2} = await getPlaylist({});
        this.auto = this.autoChangeBackground();

    },
    mounted(){
    }
}
</script>

<style>

</style>