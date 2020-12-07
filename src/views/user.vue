<template>
  <div class="g-bd">
    <div class="g-wrap p-prf">
      <!-- 用户信息 -->
      <dl class="m-proifo f-cb" id="head-box">
        <dt class="f-pr" id="ava">
          <img
            :src="StatususeravatarUrl"
          />
          <div class="btm" style="display: none">
            <a href="/user/update?id=573774208&amp;sub=ava" class="upload"
              >更换头像</a
            >
          </div>
        </dt>
        <dd>
          <div class="name f-cb">
            <div class="f-cb">
              <div class="edit">
                <a
                  hidefocus="true"
                  class="u-btn2 u-btn2-1"
                  id="edit-self-profile"
                  ><i>编辑个人资料</i></a
                >
              </div>
              <div class="rect" id="newmusician"></div>
              <h2 id="j-name-wrap" class="wrap f-fl f-cb">
                <span class="tit f-ff2 s-fc0 f-thide">{{Statusnickname}}</span>
                <span id="j-vip-code" class="vip-code-230-1"></span>
                <span class="lev u-lev u-icn2 u-icn2-lev"
                  >{{Statususerlevel}}<i class="right u-icn2 u-icn2-levr"></i
                ></span>
                <i class="icn u-icn u-icn-00"></i>
              </h2>
            </div>
          </div>
          <ul class="data s-fc3 f-cb" id="tab-box">
            <li class="fst">
              <a href="/user/event?id=573774208"
                ><strong id="event_count">{{StatuseventCount}}</strong><span>动态</span></a
              >
            </li>
            <li>
              <a href="/user/follows?id=573774208"
                ><strong id="follow_count">{{Statusfollows}}</strong><span>关注</span></a
              >
            </li>
            <li>
              <a href="/user/fans?id=573774208">
                <strong id="fan_count">{{Statusfolloweds}}</strong>
                <span>粉丝</span>
                <i
                  class="u-icn u-icn-68 f-alpha"
                  id="newCount"
                  style="display: none"
                ></i>
              </a>
            </li>
          </ul>
          <div class="inf s-fc3">
            <span>所在地区：{{Statuscity}}</span>
          </div>
          <div class="inf s-fc3 f-cb">
            <span class="tit">社交网络：</span>
            <ul class="u-logo u-logo-s f-cb">
              <li><i class="u-slg u-slg-sn-gray" title="新浪微博"></i></li>
            </ul>
          </div>
        </dd>
      </dl>
      <div class="u-title u-title-1 f-cb">
        <h3><span class="f-ff2 s-fc3">我创建的电台</span></h3>
      </div>
      <ul class="m-plylist m-create f-cb">
        <li v-for="(item,index) in StatusdjRadios" :key="index" class="itm">
          <a href="/djradio?id=527375660" class="col cvr u-cover-3"
            ><img
              src="http://p1.music.126.net/lpPWj1DzOi5aQ6gg3Txtsw==/109951164616545095.jpg?param=50y50"
              class=""
          /></a>
          <div class="col cnt f-pr f-thide">
            <a href="/djradio?id=527375660" class="s-fc1"
              >{{item.name}}</a
            >
            <div class="opt hshow">
              <span
                data-res-action="share"
                data-res-id="527375660"
                data-res-type="70"
                data-res-name="欢粉和幼杀粉的爱听歌曲"
                data-res-author="幼稚园杀手歌迷"
                data-res-pic="http://p1.music.126.net/lpPWj1DzOi5aQ6gg3Txtsw==/109951164616545095.jpg"
                class="icn u-icn2 u-icn2-share"
                >分享</span
              >
            </div>
          </div>
          <div class="col col-3 s-fc3">订阅{{item.subCount}}次</div>
          <div class="col col-4 s-fc4">{{item.programCount}}期</div>
        </li>
      </ul>
      <!--  听歌记录 -->
      <div class="u-title u-title-1 f-cb m-record-title" id="rHeader">
        <h3><span class="f-ff2 s-fc3">听歌排行</span></h3>
        <h4>累积听歌3486首</h4>
        <span class="n-iconpoint">
          <a href="javascript:void(0)" class="icon u-icn2 u-icn2-5 j-flag"></a>
          <div class="tip">
            <!-- icon在hover的时候显示tip -->
            <p>实际播放时间过短的歌曲将不纳入计算。</p>
            <i class="t"></i><i class="b"></i>
          </div>
        </span>
        <div class="nav f-cb">
          <span data-action="songsall" id="songsall">所有时间</span>
          <i></i>
          <span data-action="songsweek" id="songsweek" class="z-sel"
            >最近一周</span
          >
        </div>
      </div>
     
      <div class="m-record">
        <div>
          <div class="j-flag">
            <ul>
              <li id="13845274261606959426372">
                <div class="hd">
                  <span
                    data-res-id="1384527426"
                    data-res-type="18"
                    data-res-action="play"
                    data-res-from="50"
                    data-res-data="573774208|1"
                    class="ply"
                    >&nbsp;</span
                  ><span class="num">1.</span>
                </div>
                <div class="song">
                  <div class="tt">
                    <div class="ttc">
                      <span class="txt"
                        ><a href="/song?id=1384527426"
                          ><b title="不得不爱">不得不爱</b></a
                        ><span class="ar s-fc8">
                          <em>-</em
                          ><span title="Lambert"
                            ><a
                              class="s-fc8"
                              href="/artist?id=31668975"
                              hidefocus="true"
                              >Lambert</a
                            ></span
                          ></span
                        ></span
                      >
                    </div>
                  </div>
                  <div class="opt">
                    <a
                      class="u-icn u-icn-81 icn-add"
                      href="javascript:;"
                      title="添加到播放列表"
                      hidefocus="true"
                      data-res-type="18"
                      data-res-id="1384527426"
                      data-res-action="addto"
                      data-res-from="50"
                      data-res-data="573774208|1"
                    ></a
                    ><span
                      data-res-id="1384527426"
                      data-res-type="18"
                      data-res-action="subscribe"
                      class="icn icn-fav"
                      title="收藏"
                    ></span
                    ><span
                      data-res-id="1384527426"
                      data-res-type="18"
                      data-res-action="share"
                      data-res-name="不得不爱"
                      data-res-author="Lambert"
                      class="icn icn-share"
                      title="分享"
                      >分享</span
                    ><span
                      data-res-id="1384527426"
                      data-res-type="18"
                      data-res-action="download"
                      class="icn icn-dl"
                      title="下载"
                      >下载</span
                    >
                  </div>
                </div>
                <div class="tops">
                  <span class="bg" style="width: 100%"></span
                  ><span class="times f-ff2">53次</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="more"><a href="#">查看更多&gt;</a></div>
        </div>
      </div>
      <!-- 我创建的歌单 -->
      <div class="u-title u-title-1 f-cb" id="cHeader" style="">
        <h3>
          <span class="f-ff2 f-pr"
            >我创建的歌单<span
              class="f-pa f-r-black-icon"
              style="
                display: inline-block;
                width: 8px;
                height: 8px;
                top: 1px;
                background-size: cover;
              "
            ></span
            >（{{createdPlaylistCount}}）</span
          >
        </h3>
      </div>
      <ul class="m-cvrlst f-cb" id="cBox">
        <li v-for="(item,index) in playlist.slice(0,subscribedIndex)" :key="index" id="auto-id-ucIgu0e8N5W5Flpl">
          <div class="u-cover u-cover-1">
            <img :src="item.coverImgUrl">
            <a
              href="/playlist?id=891600555"
              class="msk" :title="item.name"
            ></a>
            <div class="bottom">
              <a
                class="icon-play f-fr"
                href="javascript:;"
                title="播放"
                data-res-action="play"
                data-res-type="13"
                data-res-id="891600555"
              ></a
              ><span class="icon-headset"></span><span class="nb">{{item.playCount | playNumFormat}}</span>
            </div>
          </div>
          <p class="dec">
            <a
              class="tit f-thide s-fc0"
              href="/playlist?id=891600555"
              :title="item.name"
              >{{item.name}}</a
            >
          </p>
        </li>
       
      </ul>
      <!-- 我收藏的歌单 -->
      <div class="u-title u-title-1 f-cb" id="sHeader" style="">
        <h3>
          <span class="f-ff2 f-pr"
            >我收藏的歌单<span
              class="f-pa f-r-black-icon"
              style="
                display: inline-block;
                width: 8px;
                height: 8px;
                background-size: cover;
                top: 1px;
              "
            ></span
            >（{{subPlaylistCount}}）</span
          >
        </h3>
      </div>
      <ul class="m-cvrlst f-cb" id="sBox">
        <li v-for="(item,index) in playlist.slice(subscribedIndex,)" :key="index" id="auto-id-n5mbuql5NOiuGw0b">
          <div class="u-cover u-cover-1">
            <img
              :src="item.coverImgUrl"
            /><a
              href="/playlist?id=330395524"
              class="msk"
              :title="item.name"
            ></a>
            <div class="bottom">
              <a
                class="icon-play f-fr"
                href="javascript:;"
                title="播放"
                data-res-action="play"
                data-res-type="13"
                data-res-id="330395524"
              ></a
              ><span class="icon-headset"></span><span class="nb">{{item.playCount | playNumFormat}}</span>
            </div>
          </div>
          <p class="dec">
            <a
              class="tit f-thide s-fc0"
              href="/playlist?id=330395524"
              :title="item.name"
              >{{item.name}}</a
            >
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { getUserPlaylist,getUserSubCount,getUserAudio,getUserRecord } from "@/plugins/axios.js";
export default {
  name: "user",
  data() {
    return {
      createdPlaylistCount: 0,
      subPlaylistCount: 0,
      mvCount: 0,
      playlistLoop: [],
    };
  },
  computed:{
    ...mapState('moduleLogin',{
      Statususerlevel: state => state.userlevel,
      StatususeravatarUrl: state => state.useravatarUrl,
      Statusfolloweds: state => state.followeds,
      Statusfollows: state => state.follows,
      Statusnickname: state => state.nickname,
      StatuseventCount: state => state.eventCount,
      Statuscity: state=> state.city
  }),
    playlist(){
      return this.$store.state.moduleUser.playlist;
    },
    subscribedIndex(){
      return this.$store.state.moduleUser.subscribedIndex;
    },
    StatusdjRadios(){
      return this.$store.state.moduleUser.djRadios
    },
    StatusdjSubCount(){
      return this.$store.state.moduleUser.djSubCount
    }
  },
  methods: {},
  async created() {
    let userId = this.$store.state.moduleLogin.userId
    //请求数据 包含：电台信息，用户歌单，用户播放记录，用户信息
    const{data: usersubcount} = await getUserSubCount();
    const {data: userplaylist} = await getUserPlaylist({
      params:{
        uid: userId
      }
    });
    const {data: userAudio} = await getUserAudio({
      params:{
        uid: userId
      }
    })
    const {data: userRecord} = await getUserRecord({
      params:{
        uid:userId,
        type: 1
      }
    })
    console.log(userRecord)

    this.createdPlaylistCount = usersubcount.createdPlaylistCount;
    this.subPlaylistCount = usersubcount.subPlaylistCount;
    this.mvCount = usersubcount.mvCount;

    function userPlaylist(userplaylist,subscribedIndex,djRadios,userWeekRecord) {
      this.playlist = userplaylist
      this.subscribedIndex = subscribedIndex
      this.djRadios = djRadios
      this.userWeekRecord = userWeekRecord
    }

    //获取 第一次 判断到subscribed 的索引
    let playlistlen = userplaylist.playlist.length;
    let subscribedIndex = 0;
    if(playlistlen > 0){
      for(let i = 0; i < playlistlen;i++){
        if(userplaylist.playlist[i].subscribed == true && subscribedIndex == 0){
          subscribedIndex = i;
        }
      }
    }
    let userinfo  = userplaylist.playlist; 
    let djRadios = userAudio.djRadios
    let userWeekRecord = []
    if(userRecord.code == 200){
      userWeekRecord = userRecord.weekData.length >= 10? userRecord.weekData.slice(0,10):userRecord.weekData.slice(0,);
    }
    let user_PLAYLISTINFO = new userPlaylist(userinfo,subscribedIndex,djRadios,userWeekRecord)
    this.$store.commit('moduleUser/commitUserInfo',user_PLAYLISTINFO)
  },
  mounted() {
    
  
  },
};
</script>

<style scoped>

</style>