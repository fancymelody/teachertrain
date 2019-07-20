<template>
    <div class="row play">
        <div class="col-md-10 video">
            <div class="top">
                <div class="headline" :style="headline">
                    <span class="t1">{{t11}}</span>
                    <span class="t2">{{t21}}</span>
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
        <div class="col-md-2 catalog">
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
                        <template v-if="item.time">
                            <span class="time_icon" :title="name" :style=time_icon></span>
                        </template>
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
                t11: "",
                t21: "",
                classpic:this.$store.state.url + 'teachertrain/video/flutter.jpg',
                headline: {
                    background:"url(" + require("../../../../static/images/teachertrain/video/lesson.png") + ") no-repeat",
                },
                playerOptions: {
                    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    controls: true, //控制条
                    preload: 'auto', //视频预加载
                    muted: false, //默认情况下将会消除任何音频。
                    loop: false, //导致视频一结束就重新开始。
                    language: 'zh-CN',
                    // aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: 'application/x-mpegURL',
                        src: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8'
                    }],
                    poster: "", //你的封面地址
                    width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试' //允许覆盖Video.js无法播放媒体源时显示的默认信息。
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
        method: {
            handleClick: function (e) {
                this.t11 = item.t1;
                this.t21 = item.t2;
            }
        }

    }
</script>


<style>
    .play {
        width: 1550px;
        height: 685px;
        margin-top: 56px;
        background: gray;
    }

    @media (min-width: 64em) {
        .video {
            max-width: 78%;
        }
    }

    @media (min-width: 64em) {
        .catalog {
            max-width: 20%;
        }

        .video {
            margin-left: 20px;
            height: 100%;
        }
    }

    .headline {
        margin-top: 50px;
        margin-bottom: 15px;
        margin-left: 50px;
        width: 220px;
        height: 32px;
    }

    .headline .t1 {
        width: 73px;
        height: 25px;
        line-height: 32px;
        text-align: center;
        display: inline-block;

    }

    .headline .t2 {
        color: #FFF;
    }

    .main {
        width: 100%;
        height: 480px;
        background: #000;
    }

    .video-player.vjs-custom-skin {
        margin-left: 180px;
        width: 800px;
        height: 150px;
    }

    .bottom {
        height: 50px;
        margin-top: 20px;
    }

    .bottom .left {
        float: left;
        margin-left: 40px;
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
        background: #FFF;
        margin-right: 0px;
        float: right;
        width: 500px;
        height: 675px;
        top: 10px;
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
        width: 310px;
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
        margin-left: 16px;
        text-align: left;
        width: 133px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 20px;
    }

    li .t4 {
        font-size: 13px;
    }

    li .time {
        color: #999;
        height: 20px;
    }
</style>