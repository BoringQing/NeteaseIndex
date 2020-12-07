<template>
  <div class="g-btmbar">
        <div class="m-playbar m-playbar-lock" style="top: -53px; visibility: visible;">
            <!-- 右侧控制按钮 -->
            <div class="updn">
                <div class="left f-fl">
                    <a href="javascript:;" class="btn"></a>
                </div>
                <div class="right f-fl"></div>
            </div>
            <!-- 背景 -->
            <div class="bg"></div>
            <!-- 展开播放条 -->
            <div class="hand" title="展开播放条" style="display:none;"></div>
            <!-- 播放器内容 -->
            <div class="wrap" style="margin-left: -498.5px;">
                <!-- 播放控制按钮-->
                <div class="btns" id ="btns">
                    <a href="javascript:;" title="上一首ctrl+⬅" class="prv" @click="leftPlay()">上一首</a>
                    <a href="javascript:;" title="播放/暂停" class="ply j-flag" data-action="play" id="play" @click="playMusic()" ref="playAudio">播放</a>
                    <a href="javascript:;" title="下一首ctrl+➡" class="nxt" @click="rightPlay()">下一首</a>
                </div>
                <!-- 封面 -->
                <div class="head j-flag">
                    <img  :src="this.songCover" alt="">
                    <a href="" class="mask"></a>
                </div>
                <!-- 播放 -->
                <div class="play">
                    <div class="j-flag words">
                        <a href="" class="f-thide name fc1 f-fl">{{this.songName}}</a>
                        <a href="" class="mv f-fl"></a>
                        <span class="by f-thide f-fl">
                            <span :title="this.songAuthor">
                                <a href="">{{this.songAuthor}}</a>
                            </span>
                        </span>
                        <a href="" title="来自歌单" class="src"></a>
                    </div>
                    <!-- 播放条 -->
                    <div class="m-pbar">
                        <div class="barbg j-flag" ref="dialogAudioProgress" @mousedown="controlProgess($event)">
                            <div class="rdy" :style="cacheBuffer"></div>
                            <div class="cur" :style="dotStyle" >
                                <span :style="iconLeft" class="btn f-tdn f-alpha" ref="progressBtn" @mousedown="iconDown($event)" ><i></i></span>
                            </div>
                        </div>
                        <span class="j-flag time">
                            <em>{{time}}</em> / <em v-if="duration != 'NaN:NaN'">{{duration}}</em><em v-if="duration == 'NaN:NaN'">00:00</em>
                        </span>
                    </div>
                </div>
                <!-- 收藏与分享 -->
                <div class="oper f-fl">
                    <a href="javascript:;" class="icn icn-add j-flag" title="收藏">收藏</a>
                    <a href="javascript:;" class="icn icn-share" title="分享">分享</a>
                </div>
                <!-- 调整播放方式 -->
                <div class="ctrl f-fl f-pr j-flag">
                    <div class="m-vol" style="visibility: hidden;"></div>
                    <a href="javascript:;" class="icn icn-vol"></a>
                    <a href="javascript:;" class="icn icn-loop" :title="modeTitle[modeIndex]" id="mode" @click="changeMode()"></a>
                    <span class="add f-pr">
                        <span class="tip" style="display:none;">已添加到播放列表</span>
                        <a href="javascript:;" title="播放列表" class="icn icn-list s-fc3"  @click="setIds()">{{this.listLength}}</a>
                    </span>
                </div>
            </div>
            <div class="list" id="g-playlist" style="display:none;" data-action='hidden'>
                <div class="listhd">
                    <div class="listhdc">
                        <h4>播放列表(<span class="j-flag" v-if="songdetails.songs !== undefined">{{songdetails.songs.length}})</span>
                        </h4>
                        <a href="" class="addall">
                            <span class="ico ico-add"></span>收藏全部
                        </a>
                        <span class="line"></span>
                        <a href="" class="clear">
                            <span class="ico icn-del"></span>清除
                        </a>
                        <p class="lytit f-ff0 f-thide j-flag">Part two: God Complex</p>
                        <span class="close" @click="closePlaylistShow()">关闭</span>
                    </div>
                </div>
                <div class="listbd">
                    <img src="" alt="" class="imgbg j-flag" style="top: -360px;">
                    <div class="msk"></div>
                    <div class="listbdc j-flag" id="listbdc" ref="listbdc">
                        <ul class="f-cb" id="listUL" @mousewheel="mouseSlide()" ref="listUL">
                            <li v-for="(item,index) in songdetails.songs" :key="index" @click="playlistPlaySong(index)">
                                <div class="col col-1"><div class="playicn"></div></div>
                                <div class="col col-2">{{item.name}}</div>
                                <div class="col col-3">
                                    <div class="icns">
                                        <i class="ico icn-del" title="删除"></i>
                                        <i class="ico ico-dl" title="下载"></i>
                                        <i class="ico ico-share" title="分享"></i>
                                        <i class="ico ico-add" title="收藏"></i>
                                    </div>
                                </div>
                                <div class="col col-4">
                                    <span :title="item.ar[0].name">
                                        <a href="">{{item.ar[0].name}}</a>
                                    </span>
                                </div>
                                <div class="col col-5">{{item.dt | playTimeFormat}}</div>
                                <div class="col col-6">
                                    <a href="" class="ico ico-src" title="来自歌单">来源</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="bline j-flag" id="wrap-scrollerbar">
                        <span ref="scroll" id="scrollerbar" class="scrol" style="height:0px; display:block; top : 0px;" @mousedown="scrollerBar()"></span>
                    </div>
                    <div class="ask j-flag"></div>
                    <div class="upload j-flag"></div>
                    <div class="msk2"></div>
                    <div class="listlyric j-flag"></div>
                    <!-- <div class="bline bline-1 j-flag"></div> -->
                </div>
            </div>
        </div>
        <audio id='audio' ref="recordAudio"  @timeupdate="timeUpdate()"  @canplay="canplay()"></audio>
    </div>
    
</template>

<script>
import {getSongDetails,getMusicUrl} from "@/plugins/axios.js";
export default {
    name: 'myVideo',
    data(){
        return {
            details: [],
            musicUrl: '',
            playlistId: 0,
            songId: 0,
            strSongIds: [],
            songdetails: [],
            songIds: [],
            songCover: '',
            songName: '',
            songAuthor: '',
            dotStyle: {width: ""},
            duration: '00:00',
            time: '00:00',
            cacheBuffer: {width: ""},
            iconLeft: {left:''},
            updateStatus: 'update',
            timeNum: 0,
            listLength: 0,
            endY: 0,
            mode: 'loop',
            modeIndex: 0,
            modeTitle: ['循环播放','随机播放','单曲循环'],
            playlistStatus: 'hidden',
            lastPlayIndex: 0,
            // 存放 随机播放 的上一首 索引 如果用户切换模式 清除此数组 仅为随机播放模式下生效
            lastShuffle: [],
            lastPlayStatus: '',
            scrollbarHeight: 0
        }
    },
    computed:{
      songindex:{
          get(){
            return this.$store.state.moduleAudio.songindex;    
          },
          set(val){
            this.$store.state.moduleAudio.songindex = val;  
          }
      }  
    },
    methods: {
        //播放
        async playMusic(){
            let audio = document.getElementById('audio');
            let play = document.getElementById('play');
            let status = play.getAttribute('data-action');
            if(status == 'play'){
                audio.play();
                play.setAttribute('data-action','paused');
                play.classList.add('pas');
            }else if(status == 'paused'){
                audio.pause();
                play.setAttribute('data-action','play');
                play.classList.remove('pas');
            }
        },
        //时间转换
        transTime(value) {
            let time = "";
            let h = parseInt(value / 3600);
            value %= 3600;
            let m = parseInt(value / 60);
            let s = parseInt(value % 60);
            if (h > 0) {
                time = this.formatTime(h + ":" + m + ":" + s);
            } else {
                time = this.formatTime(m + ":" + s);
            }
            return time;
        },
        //上一首
        async leftPlay(){
            let audio = document.getElementById('audio');
            let playlist = document.getElementById('g-playlist');
            let playlistStatus = playlist.getAttribute('data-action');
            let nowUL = document.getElementById('listUL').children;
            this.modeJudge('left');
            if(this.lastShuffle.length != 0){
                this.songindex = this.lastShuffle.pop();
            }
            await this.changeMusic();
            this.songId = this.songIds[this.songindex];
            if(playlistStatus == 'show'){
                // 也许会有潜在 错误 注意 songIds.length
                for(let i = 0;i < this.songIds.length;i++){
                    if(this.songIds[i] == this.songId){
                        //添加播放按钮
                        nowUL[i].classList.add('z-sel');
                        //  上次播放 的索引 与当前播放不同  则移除 上次的 z-sel class 
                        if(this.lastPlayIndex != i){
                            nowUL[this.lastPlayIndex].classList.remove('z-sel');
                        }
                        this.lastPlayIndex = i;
                    }
                }
            }
            audio.load();
            audio.setAttribute('src',this.musicUrl);
            audio.play();

        },
        //下一首
        async rightPlay(){
            let playlist = document.getElementById('g-playlist');
            let playlistStatus = playlist.getAttribute('data-action');
            let nowUL = document.getElementById('listUL').children;
            this.modeJudge('right');
            //此处可以优化， 根据模式  顺序播放 循环播放等  
            await this.changeMusic();
            this.songId = this.songIds[this.songindex];
            // 同步更新列表展示
            if(playlistStatus == 'show'){
                for(let i = 0;i < this.listLength;i++){
                    if(this.songIds[i] == this.songId){
                        //添加播放按钮
                        nowUL[i].classList.add('z-sel');
                        //  上次播放 的索引 与当前播放不同  则移除 上次的 z-sel class 
                        if(this.lastPlayIndex != i){
                            nowUL[this.lastPlayIndex].classList.remove('z-sel');
                        }
                        this.lastPlayIndex = i;
                    }
                }
            }
            this.$refs.recordAudio.load();
            this.$refs.recordAudio.setAttribute('src',this.musicUrl);
            this.$refs.recordAudio.play();
            
        },
        // 改变音乐参数
        async changeMusic(){
            const {data: {data:curUrl}} = await getMusicUrl({
                params:{
                    id: this.songIds[this.songindex]
                }
            })
            this.musicUrl = curUrl[0].url;
            this.songCover = this.details.playlist.tracks[this.songindex].al.picUrl;
            this.songName = this.details.playlist.tracks[this.songindex].name;
            this.songAuthor = this.details.playlist.tracks[this.songindex].ar[0].name;
        },
        //时间格式化
        formatTime(value) {
            let time = "";
            let s = value.split(':');
            let i = 0;
            for (; i < s.length - 1; i++) {
                time += s[i].length == 1 ? ("0" + s[i]) : s[i];
                time += ":";
            }
            time += s[i].length == 1 ? ("0" + s[i]) : s[i];
            return time;
        },
        // 播放列表展示
        async playlistShow(){
            let playlist = document.getElementById('g-playlist');
            let status = playlist.getAttribute('data-action');
            if(status == 'hidden'){
                this.playlistStatus = 'show';
                playlist.style.display = 'block';
                playlist.setAttribute('data-action','show');
            }else{
                this.playlistStatus = 'hidden';
                playlist.style.display = 'none';
                playlist.setAttribute('data-action','hidden');
            }
            const {data: resp} = await getSongDetails({
                params:{
                    ids:this.strSongIds
                }
            })
            this.songdetails = resp;
            this.$nextTick(()=> {
                let rate = this.$refs.listbdc.clientHeight / this.$refs.listbdc.scrollHeight;
                if(rate < 1){
                    this.$refs.scroll.style.height = rate * this.$refs.listbdc.clientHeight + 'px';
                }else{
                    this.$refs.scroll.style.display = 'none';
                }
                console.log(rate)
            })
            
        },
        // 设置 li 的 data属性
        async setIds(){
            await this.playlistShow();
            let nowUL = document.getElementById('listUL').children;
            for(let i = 0;i<nowUL.length;i++){
                nowUL[i].setAttribute('data-id',this.songIds[i]);
                nowUL[i].setAttribute('data-action','play');
                // 找到当前播放的音乐
                if(this.songIds[i] == this.songId){
                    //添加播放按钮
                    nowUL[i].classList.add('z-sel');
                    //  上次播放 的索引 与当前播放不同  则移除 上次的 z-sel class 
                    if(this.lastPlayIndex != i){
                        nowUL[this.lastPlayIndex].classList.remove('z-sel');
                    }
                    this.lastPlayIndex = i;
                }
            }
        },
        // 时间更新  同时判定播放是否结束了
        timeUpdate(){
            if(this.updateStatus == 'update'){
                this.duration = this.transTime(this.$refs.recordAudio.duration);
                let timeStr = parseInt(this.$refs.recordAudio.currentTime);
                this.time = this.transTime(timeStr);
                if(this.$refs.recordAudio.buffered.length != 0){
                    let timeRanges = this.$refs.recordAudio.buffered;
                    let cacheTime = parseFloat(timeRanges.end(timeRanges.length - 1) / this.$refs.recordAudio.duration);
                    this.cacheBuffer.width = cacheTime * 100 + '%';
                }
                let scales = this.$refs.recordAudio.currentTime / this.$refs.recordAudio.duration;
                this.dotStyle.width = scales * 100 + '%';
                this.iconLeft.left = scales * 493 + 'px';
            }else{
                let scalesDrag = this.timeNum / this.$refs.recordAudio.duration;
                this.dotStyle.width = scalesDrag * 100 + '%';
                this.iconLeft.left = scalesDrag * 493 + 'px';
            }
            //如果播放结束
            if(this.$refs.recordAudio.ended){
                this.rightPlay();
            }
        },
        // 当前是否可以播放
        canplay(){
            this.duration = this.transTime(this.$refs.recordAudio.duration)
        },
        // 进度条更新
        controlProgess(event){
            let audio = this.$refs.recordAudio;
            let dialogAudioProgress = this.$refs.dialogAudioProgress;
            if (!audio.paused || audio.currentTime != 0) {
                // window.getComputedStyle   返回CSSStyleDeclaration  取数据可以直接按照属性的方法去取
                // 第二个参数不是必须的，当不查询伪类元素的时候可以忽略或者传入 null。
                let pgsWidth = parseFloat(window.getComputedStyle(dialogAudioProgress, null).width.replace('px', ''));
                let rate = event.offsetX / pgsWidth;
                audio.currentTime = audio.duration * rate;
                this.timeUpdate();
            }
        },
        // 拖拽图标 自定义播放功能
        iconDown(event){
            event.cancelBubble = true;
            let btn = this.$refs.progressBtn;
            let offsetX = parseInt(window.getComputedStyle(btn,null).left);
            let curX = event.clientX - offsetX;
            let that = this;
            this.updateStatus = 'updatePaused';
            document.onmousemove = function (event) {
                btn.style.left = event.clientX - curX + 'px';
                if(parseInt(window.getComputedStyle(btn,null).left) <= 0){
                    btn.style.left = '0px';
                }
                if(parseInt(window.getComputedStyle(btn,null).left) >= 493 ){
                    btn.style.left = '493px';
                }
                let mgleft = parseFloat(window.getComputedStyle(btn,null).left.replace('px',''))
                let rate = mgleft / 493;
                that.time = that.transTime(that.$refs.recordAudio.duration * rate); 
                that.timeNum = that.$refs.recordAudio.duration * rate;
                that.timeUpdate();
            }
            document.onmouseup = function () {
                that.$refs.recordAudio.currentTime = that.timeNum;
                that.updateStatus = 'update';
                document.onmousemove = null;
                document.onmouseup = null;
            }
        },
        // 点击播放列表滚动条
        scrollerBar(){
            // let listbd = document.querySelector('listbd');
            //保存endY 的意义 在于 使每次函数触发的时候 能有上一次的endY值
            let bool = true;
            let listbdc = document.getElementById('listbdc');
            let wrapScrollBar = document.getElementById('wrap-scrollerbar');
            let scrollBar = document.getElementById('scrollerbar');
            let startY,barY;
            let that = this;
            let rate = listbdc.clientHeight / listbdc.scrollHeight;
            if(rate < 1){
                scrollBar.style.height = rate * listbdc.clientHeight + 'px';
            }else{
                scrollBar.style.display = 'none';
            }
            startY = window.event.pageY;
            scrollBar.onmousemove = this.throttle(function(e){
                e = window.event || e;
                //barY 实际上表示 移动的距离  涉及边界问题 小于0  则 为0  大于最大值 则为 最大值
                if(!bool){
                    return;
                }
                barY = e.pageY - startY + that.endY;
                if(barY < 0){
                    barY = 0;
                }else if(barY > wrapScrollBar.offsetHeight - scrollBar.clientHeight){
                    barY = wrapScrollBar.offsetHeight - scrollBar.clientHeight;
                }
                //滚动条移动的距离
                scrollBar.style.top = barY + 'px';
                //如滚动条往下拉   滚动内容应该往上 走 
                //具体算法 为  滚动的距离 乘 (滚动条的总高度 / 当前滚动条的高度)
                listbdc.style.top = -barY * (wrapScrollBar.offsetHeight / scrollBar.clientHeight) + 'px';
                //不选择文本
                window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
            },10)
            document.onmouseup = function(){
                bool = false;
                that.endY = scrollBar.offsetTop;
            }
        },
        // 点击播放列表 进行播放
        async playlistPlaySong(index){
            if(this.songindex != index){
                let liList = document.getElementById('listUL').children;
                this.songindex =  index;
                await this.changeMusic();
                this.$refs.recordAudio.load();
                this.$refs.recordAudio.setAttribute('data-action','paused');
                this.$refs.recordAudio.setAttribute('src',this.musicUrl);
                this.$refs.recordAudio.classList.add('pas');
                this.$refs.recordAudio.play();
                //点击 添加 播放图标    同时移除 之前的图标。
                liList[index].classList.add('z-sel');
                liList[this.lastPlayIndex].classList.remove('z-sel');
                this.lastPlayIndex = index;
                //发送一个歌曲索引的通知
            }
            
        },
        //防抖
        debounce(fn,wait) {
            //定义一个计时器
            var timeout = null;
            return function () {
                if(timeout !== null){
                    clearTimeout(timeout);
                }
                timeout = setTimeout(fn,wait);
            }
        },
        //用于滚动条节流
        throttle(func, wait) {
            let previous = 0;
            return function() {
                let now = Date.now();
                let context = this;
                let args = arguments;
                if (now - previous > wait) {
                    func.apply(context, args);
                    previous = now;
                }
            }
        },
        // 关闭播放列表窗口
        closePlaylistShow(){
            let playlist = document.getElementById('g-playlist');
            playlist.setAttribute('data-action','hidden');
            playlist.style.display = 'none';
        },
        // 滚动条 鼠标 在内容里  滚动事件
        mouseSlide(){
            let listbdc = document.getElementById('listbdc');
            let listUL = document.getElementById('listUL');
            let wrapScrollBar = document.getElementById('wrap-scrollerbar');
            let scrollBar = document.getElementById('scrollerbar');
            let event = window.event;
            event.preventDefault();
            let delta = 0;
            let speed = 8;//滑动速度
            if(event.wheelDelta){
                //wheelDelta   向下滚动 为 负120  向上滚动为正120  IE 与Chrome 为wheelDelta
                delta = event.wheelDelta;
            }
            //如果 滚轮事件向上  说明 内容应该往下吊
            if(delta < 0){
                //注意边界条件 如果到 底部
                if(scrollBar.offsetTop >= wrapScrollBar.clientHeight - scrollBar.offsetHeight){
                    // 滑动条距离wrapScrollBar顶部的距离
                    scrollBar.style.top = wrapScrollBar.clientHeight - scrollBar.offsetHeight + 'px';
                    listbdc.style.top =  - (listUL.offsetHeight - listbdc.offsetHeight);
                }else{
                    scrollBar.style.top = scrollBar.offsetTop + speed + 'px';
                    // 这次换了个写法  主要算法 如下：
                    //    本次滑动的距离 / (能滑动的距离)     =   本次移动的距离 / (能移动的距离)
                    listbdc.style.top = -scrollBar.offsetTop / (wrapScrollBar.offsetHeight - scrollBar.offsetHeight) * (listUL.offsetHeight - listbdc.offsetHeight) + 'px';
                }
            }else{
                if(scrollBar.offsetTop <= 0){
                    scrollBar.style.top = 0 + 'px';
                    listbdc.style.top = 0 + 'px';
                }else{
                    scrollBar.style.top = scrollBar.offsetTop - speed + 'px';
                    listbdc.style.top = -scrollBar.offsetTop / (wrapScrollBar.offsetHeight - scrollBar.offsetHeight) * (listUL.offsetHeight - listbdc.offsetHeight) + 'px';
                }
            }
        },
        // 播放模式判定 改变音乐索引
        modeJudge(arrow){
            //  依次为  循环 随机 单曲循环
            if(this.mode == 'loop'){
                if(arrow == 'left'){
                    this.songindex = --this.songindex;
                    if(this.songindex < 0){
                        this.songindex = this.listLength - 1;
                    }
                }else{
                    this.songindex = (this.songindex + 1) % this.listLength;  
                }
            }else if(this.mode == 'shuffle'){
                if(arrow == 'left' && this.lastShuffle.length != 0){
                    if(this.lastPlayStatus == 'right'){
                        this.lastShuffle.pop();
                    }
                    this.lastPlayStatus = 'left';
                    return;
                }
                this.songindex = parseInt(Math.random() * this.listLength);
                if(arrow == 'right'){
                    this.lastPlayStatus = 'right';
                    this.lastShuffle.push(this.songindex);
                }
            }else if(this.mode == 'one'){
                console.log('dont change');
            }
            this.$bus.$emit('parseSongIndex',this.songindex)
            let parseindex = this.songindex
            function Audio(songindex){
                this.songindex = songindex
            }
            let audio = new Audio(parseindex)
            this.$store.commit('moduleAudio/parseAudio', audio)
        },
        // 更改播放模式
        changeMode(){
            let icon = document.getElementById('mode');
            let modeList = ['loop','shuffle','one'];
            let lastMode = this.mode;
            this.modeIndex = (this.modeIndex + 1) % 3;
            this.mode = modeList[this.modeIndex];
            icon.classList.replace('icn-'+lastMode,'icn-'+this.mode);
            if(this.lastShuffle.length != 0){
                this.lastShuffle = [];
            }
        }
    },
    async created(){
        console.log(this.$store)
    },
    async mounted(){
        this.$bus.$on('parseDetails',(rs)=>{
            this.details = rs;
        });
        this.$bus.$on('parseId',(id)=>{
            this.playlistId = id;
        });
        this.$bus.$on('parseIds',(ids)=>{
            this.strSongIds = ids;
            this.strSongIds = this.strSongIds.toString();
            this.songIds = ids;
            this.listLength = this.songIds.length;
            this.songId = this.songIds[0];
            if(this.playlistStatus != 'hidden'){
                this.closePlaylistShow();
            }
            
        });
        this.$bus.$on('parseUrl',(url)=>{
            this.musicUrl = url;
            this.changeMusic();
            this.$refs.recordAudio.load();
            let play = document.getElementsByClassName('ply');
            play[0].setAttribute('data-action','paused');
            this.$refs.recordAudio.setAttribute('src',this.musicUrl);
            play[0].classList.add('pas');
            this.$refs.recordAudio.play();
            
        });
        this.$bus.$on('parseCurId',async (id) => {
            //首先判断点击的是否是同一个歌单 ，
            for(let i = 0;i < this.listLength;i++){
                if(id == this.songIds[i]){
                    this.songindex = i;
                    await this.changeMusic();
                    this.$refs.recordAudio.load();
                    this.$refs.recordAudio.setAttribute('src',this.musicUrl);
                    this.$refs.recordAudio.play();
                }
            }
        });
    },
    updated(){
        
    }
    
}
</script>

<style>

</style>