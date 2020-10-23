<template>
  <div class="discovery-bar">
      <div class="bar-wrap">
          <ul class="nav">
              <li><router-link to="/discovery" class="z-slt"><em>推荐</em></router-link></li>
              <li><a hidefocus="true" href=""><em>排行榜</em></a></li>
              <li><router-link to="/playlists"><em>歌单</em></router-link></li>
              <li><a hidefocus="true" href=""><em>主播电台</em></a></li>
              <li><a hidefocus="true" href=""><em>歌手</em></a></li>
              <li><a hidefocus="true" href=""><em>新碟上架</em></a></li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
    name: 'discoveryBar',
    data(){
        return{
            
        }
    }
}
</script>

<style>
    .discovery-bar{
        z-index: 90;
        height: 35px;
        box-sizing: border-box;
        background-color: #C20C0C;
        border-bottom: 1px solid #a40011;
    }
    .bar-wrap{
        width: 1100px;   
        height: 34px;
        margin: 0 auto;
    }
    .bar-wrap .nav{
        display: flex;
        padding-left: 180px;
    }
    .bar-wrap .nav>li>a{
        display: block;
        font-size: 12px;
        text-align: center;
        color: #fff;
        height: 34px;
    }
    .bar-wrap .nav>li>a>em{
        display: inline-block;
        height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0;
        border-radius: 20px;
        line-height: 21px;

    }
    .bar-wrap .nav>li>a>em:hover{
        background: #9B0909;
    }
    em,i{
        font-style: normal;
        text-align: left;
        font-size: inherit;
    }
</style>