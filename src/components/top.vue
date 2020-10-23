<template>
  <div class="top-container">
      <div class="m-top">
          <div class="wrap">
              <h1 class="logo"><a higefocus="true" href="">网易云音乐</a></h1>
              <ul class="top-nav" id="top-nav">
                  <li class="z-slt"><a href="javascript:;" @click="showTriangle('discovery')" data-module="discovery"><em>发现音乐</em><sub class="cor">&nbsp;</sub> </a></li>
                  <li><a href="javascript:;" @click="showTriangle('mysong')" data-module="mysong"><em>我的音乐</em><sub class="cor">&nbsp;</sub> </a></li>
                  <li><a href="javascript:;" @click="showTriangle('frined')" data-module="friend"><em>朋友</em><sub class="cor">&nbsp;</sub> </a></li>
                  <li><a href="javascript:;" @click="showTriangle('mall')" data-module="mall"><em>商城</em><sub class="cor">&nbsp;</sub> </a></li>
                  <li><a href="javascript:;" @click="showTriangle('artist')" data-module="artist"><em>音乐人</em><sub class="cor">&nbsp;</sub> </a></li>
                  <li><a href="javascript:;" @click="showTriangle('download')" data-module="download"><em>下载客户端</em><sub class="cor">&nbsp;</sub> </a></li>
              </ul>
              <div class="search-box">
                  <span class="parent">
                      <i class="el-icon-search"></i>
                      <input type="text" name="srch" placeholder="音乐/视频/电台/用户" hidefocus="true">
                  </span>
              </div>
              <a href="">创作者中心</a>
              <div class="login" ref="login" @mouseenter="showm_tlist()" @mouseleave="hidem_tlist()">
                  <a hidefocus="true" href="javascript:;" @click="showLoginPage()" ref="loginText">登录</a>
              </div>
              <div class="m-tlist m-tlist-lged j-uflag" style="display:none;" ref="m_tlist" @mouseenter="activeShow()">
                  <ul class="f-cb lt">
                      <li>
                          <a href="#" class="itm-3"><i class="icn icn-ex" @click="logOut()"></i><em>退出</em></a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import {logout} from '@/plugins/axios.js'
export default {
    name: 'top',
    data(){
        return{
            lastindex: 0,
            routeIndex: 0,
            loginStatus: '',
            showStatus: false
        }
    },
    methods:{
        showTriangle(path){
            let module = document.getElementById('top-nav').children;
            let moduleArr = ['discovery','mysong','frined','mall','artist','download']; 
            for(let i = 0;i < moduleArr.length;i++){
                if(moduleArr[i] == path){
                    this.lastindex = this.routeIndex;
                    this.routeIndex = i;
                    module[i].classList.add('z-slt');
                    break;
                }
            }
            if(this.routeIndex != this.lastindex){
                module[this.lastindex].classList.remove('z-slt');
            }
        },
        showLoginPage(){
            let loginPage = document.getElementById('m-layer');
            loginPage.classList.remove('f-hide');
        },
        async logOut(){
            await logout();
            let userIcon = document.getElementById('user-icon');
            this.$refs.login.removeChild(userIcon);
            this.$refs.loginText.style.display = 'block';
            this.$refs.m_tlist.classList.add('f-hide');
            console.log('退出登录');
        },
        showm_tlist(){
            if(this.loginStatus.code == 200){
                this.$refs.m_tlist.style.display = 'block';      
            }
        },
        hidem_tlist(){
            if(!this.showStatus){
                this.$refs.m_tlist.style.display = 'none';
            }
            this.showStatus = false;
        },
        activeShow(){
            this.showStatus = true;
        }
    },
    mounted(){
        this.$bus.$on('parseLoginStatus',(status)=>{
            this.loginStatus = status;
            //登录状态下
            if(this.loginStatus.code == 200){
                let userIcon = document.createElement('img');
                userIcon.setAttribute('src',this.loginStatus.profile.avatarUrl);
                userIcon.setAttribute('id','user-icon');
                this.$refs.login.appendChild(userIcon);
                this.$refs.loginText.style.display = 'none';
            }
            console.log(this.loginStatus);
        });
        
    }
}
</script>

<style>

</style>