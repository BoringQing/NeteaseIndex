<template>
  <div class="m-playlist f-cb">
    <div class="g-mn4">
      <div class="g-mn4c">
        <div class="g-wrap6">
          <div class="cover-info flx">
            <img :src="this.details.coverImgUrl" />
            <div class="main-info">
              <div class="playlist-title flx">
                <span class="play-title">歌单</span>
                <h2>{{details.name}}</h2>
              </div>
              <div class="playlist-author flx">
                <a href class="face">
                  <img :src="avatarUrl" />
                </a>
                <a href>{{nickname}}</a>
                <span class="desc">{{details.createTime | dateFormat}}</span>
              </div>
              <div class="playlists-btns">
                <a href>
                  <i class="fa fa-play-circle-o" aria-hidden="true">
                    <span class="span-size">播放</span>
                  </i>
                </a>
                <a href>
                  <i class="fa fa-folder-o" aria-hidden="true">
                    <span class="span-size">{{details.subscribedCount}}</span>
                  </i>
                </a>
                <a href>
                  <i class="fa fa-share" aria-hidden="true">
                    <span class="span-size">{{details.shareCount}}</span>
                  </i>
                </a>
                <a href>
                  <i class="fa fa-download" aria-hidden="true">
                    <span class="span-size">下载</span>
                  </i>
                </a>
                <a href>
                  <i class="fa fa-pencil-square-o" aria-hidden="true">
                    <span class="span-size">{{details.commentCount}}</span>
                  </i>
                </a>
              </div>
              <div class="tags flx">
                <span class="grey">标签:</span>
                <a href v-for="(item,index) in details.tags" :key="index">{{item}}</a>
              </div>
              <div class="intro grey">
                <span>介绍:</span>
                <span class="simple-desc">{{ details.description}}</span>
                <span class="full-desc f-hide">{{details.description}}</span>
              </div>
            </div>
          </div>
          <div class="songlist-ct">
            <div class="song-title f-cb">
              <h3 class="grey">歌曲列表</h3>
              <span class="sub grey">{{details.trackCount}}首歌</span>
              <div class="more grey">
                播放:
                <strong class="red">{{details.playCount}}</strong>
                次
              </div>
              <div class="waiVideo">
                <i class="u-icn-95 fa fa-music blue"></i>
                <a class="blue" href>生成外链播放器</a>
              </div>
            </div>
            <!---歌曲列表-->
            <div class="playsonglist">
              <table class="m-table">
                <thead>
                  <tr>
                    <th class="first w1">
                      <div class="wp">&nbsp;</div>
                    </th>
                    <th>
                      <div class="wp af0"></div>
                    </th>
                    <th class="w2">
                      <div class="wp af1"></div>
                    </th>
                    <th class="w3">
                      <div class="wp af2"></div>
                    </th>
                    <th class="w4">
                      <div class="wp af3"></div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in details.tracks" :key="index">
                    <td class="left">
                      <div class="hd">
                        <span class="fr ply" >
                          <i class="fa fa-play-circle-o" @click="playMusic(item.id)"></i>
                        </span>
                        <span class="num">{{index + 1}}</span>
                      </div>
                    </td>
                    <!--歌曲标题-->
                    <td>
                      <div class="f-cb">
                        <div class="tt">
                          <div class="ttc">
                            <span class="txt">
                              <a href>{{item.name}}</a>
                              <span class="mv" v-if="item.mv !== 0">
                                <i class="fa fa-television"></i>
                              </span>
                              <span class="grey" v-if="item.alia.length != 0">-({{item.alia[0]}})</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <!--时长-->
                    <td>
                      <div class="s-fc3">
                        <span class>{{item.dt | playTimeFormat}}</span>
                        <div class="opt-show" style="display: none;">
                          <a class="u-icn" href>
                            <i class="fa fa-plus" aria-hidden="true"></i>
                          </a>
                          <a class="icn" href>
                            <i class="fa fa-folder-open-o" aria-hidden="true"></i>
                          </a>
                          <a class="icn" href>
                            <i class="fa fa-share-square-o" aria-hidden="true"></i>
                          </a>
                          <a class="icn" href>
                            <i class="fa fa-download" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </td>
                    <!--歌手-->
                    <td>
                      <div class="text" title>
                        <span>
                          <a href>{{item.ar[0].name}}</a>
                        </span>
                      </div>
                    </td>
                    <td>
                      <div class="text">
                        <a href>{{item.al.name}}</a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="seemore">
              <div class="g-wrap7"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="g-sd4"></div>
  </div>
</template>

<script>
import { getPlaylistDetail,getMusicUrl } from "@/plugins/axios.js";
export default {
  name: "playlist",
  data() {
    return {
      id: "",
      details: [],
      description: "",
      avatarUrl: '',
      nickname: '',
    };
  },
  watch:{
    '$route.query.id'(){
      this._getPlaylistDetail();
    }
  },
  created() {
    this.id = this.$route.query.id;
    console.log(this.id);
      this._getPlaylistDetail();
  },
  mounted(){
    
  },
  beforeUpdate: function () {
    let  that=this
    this.$nextTick(function () {
        that.getDesc();
    });
  },
  methods: {
    async _getPlaylistDetail() {
      const { data: resp0 } = await getPlaylistDetail({
        params:{
          id: this.id,
        }
      });
      this.details = resp0.playlist;
      this.description = resp0.playlist.description;
      this.avatarUrl = resp0.playlist.creator.avatarUrl;
      this.nickname = resp0.playlist.creator.nickname;
    },
    async playMusic(songId){
      const {data: resp} = await getMusicUrl({
        id: songId}
      );
      if(!resp.data[0].url){
        return this.$message.error('此资源为VIP共享，暂时无法播放');
      }
      this.$parent.musicUrl = resp.data[0].url;
    },
    getDesc() {
      var len = 40;
      var intro = document.getElementsByClassName("intro")[0];
    //   console.log(intro);
      var simple = document.getElementsByClassName('simple-desc')[0];
      var full = document.getElementsByClassName('full-desc')[0];
    //   console.log(simple);
    //   console.log(full);
      var div = document.createElement("div");
      var a = document.createElement("a");
      var i = document.createElement("i");
      var up = document.createElement("i");
      i.classList.add("fa-chevron-down");
      i.classList.add("fa");
      i.classList.add("u-icn");
      up.classList.add("fa-chevron-up");
      up.classList.add("fa");
      up.classList.add("u-icn");
      a.href = "javascript:void(0)";
      a.innerHTML = this.description.length > len ? "展开" : "";
      div.classList.add('f-cb');
      a.classList.add('fr');
      a.appendChild(i);
      a.addEventListener('click',() => {
          if(a.innerHTML.indexOf("展开") != -1){
              simple.classList.add('f-hide');
              full.classList.remove('f-hide');
              a.innerHTML = "收起";
              a.appendChild(up);
          }else{
              simple.classList.remove('f-hide');
              full.classList.add('f-hide');
              a.innerHTML = "展开";
              a.appendChild(i);
          }
      })
      div.appendChild(a);
      intro.appendChild(div);
    }
  },
};
</script>

<style>
</style>