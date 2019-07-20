<template>
    <div class="sidebartrain">
      <div class="sidebar">
        <div class="image">
            <div class="headimage">
                <img class="headsculpture" :src="headsculpture">
            </div>
        </div>
        <ul class="menu">
          <li v-for="item in sidebar" class="bg-hover">
            <div class="item-name" @click="dropDownListListener(item)">
              <i><img :alt="item.name" :src="item.iconSrc"></i>
              <span class="menuname">{{item.name}}</span>
              <span
                class="menuPosition"
                :class="{'glyphicon glyphicon-menu-down':item.close,
                  'glyphicon glyphicon-menu-up':!item.close}"
                v-show="item.children.length !== 0">
                </span>
            </div>
            <div :class="{'collapse': item.close}">
              <ul class="menu nav">
                <li v-for="child in item.children"
                    class="children"
                    @click="$router.push(child.route)">
                  {{child.name}}
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="sonContainer">
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  
    export default {
      name: "sidebartrain",
      data() {
        return {
          headsculpture:this.$store.state.url + 'teachertrain/sidebar/headsculpture.jpg',
          sidebar: [
            {
              name: "我的学习",
              iconSrc:this.$store.state.url + "teachertrain/sidebar/study.png",
              children: [
                {name:"我的视频", route: "/teachertrain/videostudying"},
                {name:"我的文章",route:"/teachertrain/acticlestudying"}
              ],
              close: true
            },
            {
              name: "作业考试",
              iconSrc:this.$store.state.url + "teachertrain/sidebar/homework.png",
              children: [],
              close: true
            },
            {
              name: "学习情况",
              iconSrc:this.$store.state.url + "teachertrain/sidebar/studysituation.png",
              children: [],
              close: true
            },
            {
              name: "直播",
              iconSrc:this.$store.state.url + "teachertrain/sidebar/live.png",
              children: [],
              close: true
            },
          ],
          height: 0,
          style: ''
        }
      },
      methods: {
        dropDownListListener(item) {
          if (item.children.length === 0) {
            this.$router.push(item.route);
          } else {
            item.close = !item.close;
          }
        }
      }
    }
  </script>
  
  <style scoped>
  
    .sidebartrain {
      height: 100%;
      margin: 0 !important;
    }
  
    .sidebar {
      color: #FFF;
      background-color: #3766A6;
      /* width: 220px; */
      width: 250px;
      min-width: 180px;
      height: 100%;
    }

    .image{
      width: 220px;
      height: 220px;
      border: 1px solid #3766A6;
    }

    .headimage{
      margin: 15px auto;
      width: 180px;
      height:180px;
      position: relative;
      border: 1px solid #3766A6;
    }
    
    .headsculpture{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    .menu {
      list-style: none;
      padding-inline-start: 0;
      margin-block-start: 0;
      margin-block-end: 0;
    }
    
    .menuname{
      margin-left: 10px;
    }

    .menuPosition {
      float: right;
      padding: 20px 20px 0 0;
    }
  
    .item-name {
      height: 50px;
      line-height: 50px;
      padding-left: 28px;
    }
    
    .item-name:hover {
      background-color: #2C5285;
    }
  
    .children {
      height: 50px;
      line-height: 50px;
      padding-left: 49px;
    }
  
    .children:hover {
      background-color: #2C5285;
    }
  
    .sonContainer {
      position: fixed;
      right: 0;
      left: 250px;
      bottom: 0;
      top: 56px;
      overflow-y: scroll;
      overflow-x: hidden;
    }
  
  </style>
  