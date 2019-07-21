<template>
  <div class="row play">
      <div class="col-md-9 video">
          <div class="top">
              <div class="headline">
                  <span class="t1">{{t1}}</span>
                  <span class="t2">{{t2}}</span>
              </div>
          </div>
          <div class="main">
              <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true"
                  :options="playerOptions"></video-player>
          </div>
          <div class="bottom">
              <div class="left">
                  <button>上一节</button>
                  <button>下一节</button>
              </div>
              <div class="right">
                  <button>作业考试</button>
              </div>
          </div>
      </div>
      <div class="col-md-3 catalog">
          <div class="message">
              <div class="topic">
                  <span class="title"><b>Flutter</b></span>
                  <span class="author">胖子</span>
              </div>
              <img :src="classpic" alt="">
          </div>
          <div class="tabbar">
              <div class="toptitle">
                  <span>目录</span>
              </div>
          </div>
          <div class="list" style="position:absolute; height:400px; overflow-y:auto">
              <ul>
                  <li v-for="item in list" @click="handleClick(item)">
                      <span class="title1 t1" :title="item.t1"><b>{{item.t1}}</b></span>
                          <span class="time_icon" :title="name" :style=time_icon v-if="item.time"></span>
                          <span v-else="" style="width: 16px;height:16px">&nbsp</span>
                      <span class="title2 t2" :title="item.t2">{{item.t2}}</span>
                      <span class="time" :title="name">{{item.time}}</span>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
  import { videoPlayer } from 'vue-video-player'
  import 'video.js/dist/video-js.css'
  import 'vue-video-player/src/custom-theme.css'
  export default {
      components: {
          videoPlayer
      },
      data() {
          return {
              t1: "",
              t2: "",
              classpic:this.$store.state.url + 'teachertrain/video/flutter.jpg',
              playerOptions: {
                  playbackRates: [0.7, 1.0, 1.5, 2.0],
                  autoplay: false, 
                  controls: true, 
                  preload: 'auto', 
                  muted: false,
                  loop: false,
                  language: 'zh-CN',
                  aspectRatio: '16:9', 
                  fluid: true, 
                  sources: [{
                      type: 'video/mp4',
                      src: 'https://onlineprograme.s3.us-east-2.amazonaws.com/course/video/%E7%AC%AC1%E8%AF%BE.mp4'
                  }],
                  poster: "", 
                  width: document.documentElement.clientWidth,
                  notSupportedMessage: '此视频暂无法播放，请稍后再试' 
              },
              list: [
                  {
                      t1: "第一章",
                      t2: "课程介绍",
                  },
                  {
                      t1: "1.1",
                      t2: "Flutter介绍和主流框架对比",
                      time: "00:07:44",
                  },
                  {
                      t1: "1.1",
                      t2: "Flutter介绍和主流框架对比",
                      time: "00:07:44",
                  },

              ],
              time_icon: {
                  background: "url(" + require("../../../../static/images/teachertrain/video/img_all.png") + ") no-repeat scroll -139px -127px transparent",
              },
              name: "点击播放",

          }

      },
      methods: {
          handleClick(item){
              this.t1= item.t1;
              this.t2 = item.t2;
          }
      }

  }
</script>


<style>
  .play {
      width: 100%;
      height: 94%;
      margin-left:0px;
      background: gray;
  }

  @media screen {
      .video {
          max-width: 75%;
      }
  }

  @media screen {
      .catalog {
          max-width: 22%;
      }

      .video {
          height: 100%;
      }
  }
  .top{
      height: 6%;
  }
  .headline {
      margin-top: 50px;
      margin-bottom: 15px;
      margin-left: 70px;
      width: 340px;
      height: 32px;
      border:solid;
      border-radius: 15px;
      background:#696969;
  }

  .headline .t1 {
      width: 73px;
      height: 27px;
      /* line-height: 32px; */
      text-align: center;
      display: inline-block;
      border:solid;
      border-radius: 15px;
      background:#008573;

  }

  .headline .t2 {
      width: auto;
      height: 25px;
      display: inline-block;
      color: #FFF;   
      
  }

  .main {
    margin-left: 20px;
      height: 70%;
      background: #000;
  }

  .video-player.vjs-custom-skin {
      margin-left: 12%;
      width: 75%;
      padding-top:2px;
  }

  .bottom {
      height: 10%;
      margin-top: 30px;
  }

  .bottom .left {
      float: left;
      margin-left: 50px;
  }

  button {
      background: #000;
      color: #FFF;
      margin-left: 20px;
      width: 100px;
      height: 30px;
      border-radius: 15px;
      border: none;
  }

  .bottom .right {
      float: right;
      margin-right: 50px;
  }

  .catalog {
    float: right;
      background: #FFF;
      margin-right: 0px;
      height: 99%;
      top: 1%;
      padding: 0;
  }

  .message {
      height: 100px;
  }

  .topic {
      float: left;
      margin-left: 10px;
      margin-top: 10px;
      width: 155px;
  }

  .topic .title {
      float: left;
      width: 100%;
      height: 35px;
      font-size: 18px;
  }

  .topic .author {
      color: #999;
      font-size: 14px;
  }

  .message img {
      float: right;
      margin-top: 10px;
      margin-right: 10px;
      width: 125px;
      height: 75px;
  }

  .tabbar {
      background: #008573;
      height: 40px;
      box-shadow: 0px 15px 10px -15px #9e9d9d;
      margin-top: 9px;
  }

  .tabbar .toptitle {
      display: inline-block;
      font-size: 18px;
      width: 60px;
      height: 30px;
      background: #FFF;
      margin-left: 10px;
      margin-top: 10px;
      text-align: center;
  }

  .list {
      margin-top: 25px;
      width: 100%;
  }

  ul {
      padding-left: 0px;
  }

  ul :hover {
      background-color: gainsboro;
  }

  li {
      height: 30px;
      margin-bottom: 3px;
      line-height: 30px;
      width: 100%;
      list-style: none;
  }

  li .title1 {
      display: block;
      text-align: right;
      width: 46px;
      height: 20px;
      float: left;
      margin-left: 20px;

  }

  .time_icon {
      display: block;
      height: 16px;
      margin-top: 5px;
      margin-left: 4px;
      width: 16px;
      float: left;
  }

  li .title2 {
      display: inline-block;
      margin-left: 25px;
      text-align: left;
      width: 140px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 22px;
  }

  li .t4 {
      font-size: 13px;
  }

  li .time {
    margin-left: 10px;
      color: #999;
      height: 22px;
  }
</style>