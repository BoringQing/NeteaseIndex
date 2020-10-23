<template>
  <div class="m-layer f-hide" style="top: 142.5px; left: 418px;"  id="m-layer" ref="m_layer">
      <div class="zbar" @mousedown="move()">
          <div class="zttl f-thide">登录</div>
      </div>
      <div class="zcnt">
          <div class="lyct lyct-1 f-pr" style="padding:0px;">
              <div class="login-list f-hide" style="min-height:332px;" id="loginList" ref="loginList">
                  <div class="n-log2 n-log2-1 f-cb">
                      <div class="u-main">
                          <div class="u-plt"></div>
                          <div class="f-mgt10">
                              <a href="javascript:;" data-action='login' data-type='mobile' class="u-btn2 u-btn2-2" @click="phoneLogin()"><i>手机号登录</i></a>
                          </div>
                          <div class="f-mgt10">
                              <a href="" data-action='reg' class="u-btn2 u-btn2-1"><i>注册</i></a>
                          </div>
                      </div>
                      <div class="u-alt">
                            <ul>
                                <li><a href=""><i class="u-mlg2 u-mlg2-wx"></i>微信登录</a></li>
                                <li><a href=""><i class="u-mlg2 u-mlg2-qq"></i>QQ登录</a></li>
                                <li><a href=""><i class="u-mlg2 u-mlg2-sn"></i>微博登录</a></li>
                                <li><a href=""><i class="u-mlg2 u-mlg2-wy"></i>网易邮箱登录</a></li>
                            </ul>
                      </div>
                      <div class="u-official-terms">
                          <input type="checkbox" id="j-official-term">
                          <label for="j-official-term" style="margin-left:2px;">同意</label>
                          <a href="" style="color:#507DAF">《服务条款》</a>
                          <a href="" style="color:#507DAF">《隐私政策》</a>
                          <a href="" style="color:#507DAF">《儿童隐私政策》</a>
                      </div>
                  </div>
                  <div class="n-scan" data-action='scan'></div>
              </div>
              <div class="lg n-login-scan f-hide" style="min-height:332px;">
                  <div class="cnt">
                      <div class="main j-flag">
                          <div class="f-cb">
                              <div class="phone"></div>
                              <div class="right">
                                  <div class="title">扫码登录</div>
                                  <div class="qr">
                                      <div class="tip f-dn f-link j-flag">
                                          <p>二维码已失效</p>
                                          <a href="javascript:;" data-action='refresh'>点击刷新</a>
                                      </div>
                                      <div class="canvas f-pen j-flag">
                                          <canvas width="130" height="130"></canvas>
                                          <img style="display:none" alt="Scan me!">
                                      </div>
                                  </div>
                                  <p class="txt j-flag">
                                      使用&nbsp;
                                      <a href="" class="download-link">网易云APP</a>
                                      &nbsp;扫码登录
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div class="suc j-flag f-hide">
                          <div class="suc-icon"></div>
                          <p class="suc-txt">扫描成功</p>
                      </div>
                      <p class="confirm j-flag f-hide">请在手机上登录</p>
                      <div class="otherbtn">
                          <a href="" class="u-btn2 other" data-action='switch'>选择其他登录方式</a>
                      </div>
                  </div>
              </div>
              <div class="n-log2 n-log2-2" id="phoneLogin" ref="phoneLogin">
                  <div class="j-mob">
                      <div class="u-phonewrap">
                          <a href="javascript:;" class="current">
                              <span class="j-code">+86</span>
                              <span class="icn u-icn2 u-icn2-17"></span>
                          </a>
                          <div class="txtwrap">
                               <input type="text" style="box-sizing: content-box;" name="p" id="p" class="j-phone txt u-txt" 
                              placeholder="请输入手机号" v-model="phoneNum">
                          </div>
                          <ul class="j-list options f-hide">
                              <li class="itm f-cb" data-action="select" data-index=0>
                                  <span class="lt">中国</span>
                                  <span class="rt">+86</span>
                              </li>
                              <li class="itm f-cb" data-action="select" data-index=1>
                                  <span class="lt">中国香港</span>
                                  <span class="rt">+852</span>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div class="f-mgt10">
                      <input type="password" name="pw" id="pw" class="j-pwd u-txt" placeholder="请输入密码" v-model="phonepw">
                  </div>
                  <div class="j-err u-err" style="display:none;">
                      <i class="u-icn u-icn-25"></i>
                      <span></span>
                  </div>
                  <div class="f-mgt10">
                      <label class="s-fc3">
                          <input type="checkbox" checked='checked' class="j-auto u-auto">自动登录
                      </label>
                      <a href="#" class="f-fr s-fc3">忘记密码？</a>
                  </div>
                  <div class="f-mgt20">
                      <a href="javasciprt:;" class="j-primary u-btn2 u-btn2-2" hidefocus='true' @click="login()"><i>登录</i></a>
                  </div>
              </div>
              <div class="js-btmbar n-loglink2 f-cb" id="loglink" ref="loglink">
                  <a href="javascript:;" class="f-fl s-primary" @click="otherLogin()">&lt;&nbsp;&nbsp;其他登录方式</a>
                  <a href="" class="f-fr">没有账号？免费注册&nbsp;&nbsp;&gt;</a>
              </div>

          </div>
      </div>
      <span class="zcls" title="关闭窗体" @click="closeLoginPage()"></span>
  </div>
</template>

<script>
import {cellphoneLogin,loginStatus} from '@/plugins/axios.js'
export default {
    name: 'login',
    data(){
        return{
            phoneNum: '',
            phonepw: ''
        }
    },
    methods:{
        // 拖动登录界面
        move(){
            let loginPage = document.getElementById('m-layer');
            let dragStatus = true;
            // diffX  表示  按下的位置  与该内容边框 的距离 
            let diffX = window.event.clientX - loginPage.offsetLeft;
            let diffY = window.event.clientY - loginPage.offsetTop;
            document.onmousemove = this.throttle(function(e){
                if(!dragStatus){
                    return;
                }
                let moveX = e.clientX - diffX;
                let moveY = e.clientY - diffY;
                //边界条件判定
                if(moveX < 0){
                    moveX = 0;
                }else if(moveX > window.innerWidth - loginPage.offsetWidth){
                    moveX = window.innerWidth - loginPage.offsetWidth;
                }
                if(moveY < 0){
                    moveY = 0;
                }else if(moveY > window.innerHeight - loginPage.offsetHeight){
                    moveY = window.innerHeight - loginPage.offsetHeight;
                }
                loginPage.style.left = moveX + 'px';
                loginPage.style.top = moveY + 'px';
            },10) 
            document.onmouseup = function(){
                dragStatus = false;
                this.onmousemove = null;
                this.onmouseup = null;
            }
        },
        //  节流
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
        //其他登录方式
        otherLogin(){
            this.$refs.loginList.classList.remove('f-hide');
            this.$refs.phoneLogin.classList.add('f-hide');
            this.$refs.loglink.classList.add('f-hide');
            
        },
        //手机号登录
        phoneLogin(){
            this.$refs.loginList.classList.add('f-hide');
            this.$refs.phoneLogin.classList.remove('f-hide');
            this.$refs.loglink.classList.remove('f-hide');
        },
        //关闭窗体
        closeLoginPage(){
            this.$refs.m_layer.classList.add('f-hide');
        },
        //登录
        async login(){
            const {data: resp} = await cellphoneLogin({
                phone: this.phoneNum,
                password: this.phonepw
            })
            const {data:resp1} = await loginStatus();
            this.$bus.$emit('parseLoginStatus',resp1);
            this.closeLoginPage();
            console.log(resp);
        }
    },
    created(){
        
    },
    async mounted(){
        const {data:resp1} = await loginStatus();
        this.$bus.$emit('parseLoginStatus',resp1);
        console.log(resp1);
    }
}
</script>

<style>

</style>