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
            <Media 
            :autoplay="false"
            :kind="'video'"
            :controls="true"
            :src = 'videosrc'
            style="width: 75%; margin-left: 10%"
            @pause='handle()'
            @ended='handleEnded()'       
          >
          </Media>
          </div>
          <div class="bottom">
              <div class="left">
                  <!-- <button @click="previous">上一节</button>
                  <button @click="next">下一节</button> -->
              </div>
              <div class="right">
                  <router-link v-for="item in right" :to="{path:item.path}" :key="item.id" tag="button">{{item.name}}</router-link>
              </div>
          </div>
      </div>
      <div class="col-md-3 catalog">
          <div class="message">
              <div class="topic">
                  <span class="title"><b>{{this.$route.query.title}}</b></span>
                  <span class="author">胖子</span>
              </div>
              <img :src="this.$route.query.image" alt="">
          </div>
          <div class="tabbar">
              <div class="toptitle">
                  <span>目录</span>
              </div>
          </div>
          <div class="list" style="position:absolute; height:600px; overflow-y:auto">
              <ul>
                <li v-for="(item,index) in list" @click="handleClick(item,index)" :class="activeClass==index?'active':''">
                      <span class="title1 t1" :title="item.chapter"><b>{{item.chapter}}</b></span>
                          <span class="time_icon" :title="name" :style=item.view v-if="item.time"></span>
                          <span v-else="" style="width: 16px;height:16px">&nbsp</span>
                      <span class="title2 t2" :title="item.name">{{item.name}}</span>
                      <span class="time" :title="name">{{item.time}}</span>
                </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
  import Media from '@dongido/vue-viaudio'
  import {mapState} from 'vuex'
  export default {
      components: {
        Media
      },

      data() {
          return {
              end:0,
              t1: "",
              t2:"",
              videosrc:"",
              activeClass:1,            
              list: "",
              right:[
                  {name:"作业考试",path:'/teachertrain/homeworkwriting'},
                  {name:"学习情况",path:'/teachertrain/condition'},
              ],
              time_icon: {
                  background: "url(" + require("../../../../static/images/teachertrain/video/img_all.png") + ") no-repeat scroll -139px -127px transparent",
              },
              right_icon: {
                  background: "url(" + require("../../../../static/images/teachertrain/video/right_icon.png") + ")",
              },
              name: "点击播放",

          }

      },
      created(){
        console.log(this.$route.query.title);
          console.log(JSON.parse(this.$route.query.contents));
          this.list=JSON.parse(this.$route.query.contents)
          for(var i=0;i<this.list.length;i++){
              this.list[i].view=this.time_icon
          }
          
      },
      methods: {
          getRouterData(){
              this.title=this.$route.title
          },
          handleClick(item,index){
              this.end=index,
              this.t1= item.chapter;
              this.t2 = item.name;
              this.activeClass=index;
              if(item.src){
                this.videosrc=item.src;
              }
              else{
                  this.videosrc=this.list[index+1].src;
                }                    
            },
          handle() {
                console.log('Video paused!, playing in 2 sec...')
                setTimeout( () => {
                this.$refs.coursevideo.play() 
                }, 2000)
            },
           handleEnded(){
            console.log("观看已完成");
            this.list[this.end].view=this.right_icon;
            this.$store.commit('setView',{id:this.$route.query.id,index:this.end})
                                     
           }
        },

  }
</script>


<style scoped>
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
          max-width: 23%;
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
      height: 28px;
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
      color: 	#FFFAFA;   
      
  }

  .main {
    margin-left: 20px;
      height: 70%;
      background: #000;
      
      
  }
  /* Media{
      margin-left: 12%;
      width: 75%;
      padding-top:2px;
      border:solid;
      border-color: #FFF;
  } */

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
      color:	#EEE9E9;
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
  .list::-webkit-scrollbar{
      width: 2px;
  }

  ul {
      padding-left: 0px;
  }

  li:hover {
      background-color: gainsboro;
  }
  li.active{
      background-color:#008573;
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