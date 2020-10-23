<template>
  <div id="app">
    <top></top>
    <topbar> </topbar>
    <main-content></main-content>
    <login></login>
    <!-- <diy-video></diy-video> -->
  </div>
</template>

<script>
import top from './components/top.vue';
import topbar from './components/discovery-nav-bar.vue';
import mainContent from './components/mainContent.vue';
import login from './components/login.vue';
// import diyVideo from './components/video.vue';
import "./assets/index.css";

export default {
  name: 'App',
  components: {
    top,
    topbar,
    mainContent,
    login
    // diyVideo
  }
}
</script>

<style>

</style>
