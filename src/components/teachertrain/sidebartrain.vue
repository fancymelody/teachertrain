<template>
    <div class="row">
      <div class="asidebg">
        <div class="image">
          <div class="headimage">
            <img class="headsculpture" :src="headsculpture">
          </div>
        </div>
        <div class="aside">
          <ul class="menu">
            <li v-for="item in aside" class="bg-hover">
              <div class="item-name" @click="dropDownListListener(item)">
                <i><img :alt="item.name" :src="item.iconSrc"></i>
                <span>{{item.name}}</span>
                <span class="menuPosition" :class="{'glyphicon glyphicon-menu-down':item.close,
                    'glyphicon glyphicon-menu-up':!item.close}" v-show="item.children.length !== 0">
                </span>
              </div>
              <div :class="{'collapse': item.close}">
                <ul class="menu nav">
                  <li v-for="child in item.children" class="children" @click="$router.push(child.route)">
                    {{child.name}}
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="sonContainer">
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name: "asider",
      data() {
        return {
          headsculpture: this.$store.state.url + 'teachertrain/sidebar/headsculpture.jpg',
          aside: [
            {
              name: "我的学习",
              iconSrc: this.$store.state.url + "teachertrain/sidebar/study.png",
              children: [{
                name: "我的视频",
                route: "/teachertrain/videostudying"
              },
              {
                name: "我的文章",
                route: "/teachertrain/articlestudying"
              },
              ],
              close: true
            },
            {
              name: "作业考试",
              iconSrc: this.$store.state.url + "teachertrain/sidebar/homework.png",
              children: [],
              close: true,
              route: ""
            },
            {
              name: "学习情况",
              iconSrc: this.$store.state.url + "teachertrain/sidebar/studysituation.png",
              children: [],
              close: true,
              route: "/teachertrain/condition",
            },
            {
              name: "直播",
              iconSrc: this.$store.state.url + "teachertrain/sidebar/studysituation.png",
              children: [],
              close: true,
              route: "",
            }
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
    .row {
      /* height: 100%; */
      margin: 0 !important;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }
  
    .menu {
      list-style: none;
      padding-inline-start: 0;
      margin-block-start: 0;
      margin-block-end: 0;
    }
  
    .menuPosition {
      float: right;
      padding: 20px 20px 0 0;
    }
  
    .aside {
      color: #FFF;
      background-color: #3766A6;
      width: 250px;
      /* position: fixed; */
      top: 0;
      bottom: 0;
      /* height: 100%; */
      float: left;
      display: table;
      height: auto;
    }
  
    .asidebg {
      background-color: #3766A6;
      width: 250px;
    }
  
    .image {
      width: 220px;
      height: 220px;
      border: 1px solid #3766A6;
    }
  
    .headimage {
      margin: 15px auto;
      width: 180px;
      height: 180px;
      position: relative;
      border: 1px solid #3766A6;
    }
  
    .headsculpture {
      width: 100%;
      height: 100%;
      border-radius: 50%;
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
      /* margin-left: 20px; */
      padding: 0;
      width: 100%;
    }
  </style>