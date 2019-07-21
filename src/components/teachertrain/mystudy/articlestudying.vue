<template>
    <div class="articlestudying">
        <div class="tab">
            <ul class="tabitemlist">
                <li class="item coursestudying">
                    <a class="tabword">
                        <router-link to="/teachertrain/articlestudying">待阅读</router-link>
                    </a>
                </li>
                <li class="item coursestudied">
                    <a class="tabword">
                        <router-link to="/teachertrain/articlestudied">已阅读</router-link>
                    </a>
                </li>
            </ul>
        </div>
        <div class="acticlecontent">
            <div class="left">
                <div class="articlemain">
                    <div class="articleitem" v-for="(item,index) in articles">
                        <div class="articleitemdetail">
                            <div class="title">
                                <h2>
                                    <a target="_blank" style="color:#000;" class="titleword" @click="gotoArticlereading">
                                        <span>{{item.title}}</span>
                                    </a>
                                </h2>
                            </div>
                            <div class="abstract">
                                {{item.abstract}}
                            </div>
                            <div class="btnbox">
                                <img :src="item.imgSrc" class="headimage">
                                <span>{{item.label}}|{{item.time}}</span>
                                <button class="btn" @click="gotoArticlereading"><span>开始阅读</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="recommend">
                    <h3>
                        <span class="line"></span>
                        <span class="txt">今日推荐</span>
                    </h3>
                    <div class="recommendmain">
                        <div class="recommenditem" v-for="(item,index) in articles">
                            <div class="recommend_title">
                                <a target="_blank" style="color:#000;" class="recommendword">
                                    <span @click="gotoArticlereading">{{item.title}}</span>
                                </a>
                            </div>
                            <span class="recommendtime">{{item.label}}|{{item.time}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'articlestudying',
        data() {
            return {
                articles: [
                    {
                        title: "浅谈青少年的心理特征与心理健康教育",
                        abstract: "青少年的心理特点有别于成年人 ,其心理发展中存在着几对矛盾 :自我意识与社会角色的矛盾 ,理想我与现实我的矛盾 ,情感波动性与内隐性的矛盾 ,性机能成熟与性心理相对幼稚的矛盾等。针对青少年的心理特点 ,青少年心理健康教育的主要内容应包括 :环境适应教育 ,培养良好性情 ,正确认识自己等。",
                        imgSrc: this.$store.state.url + 'teachertrain/article/headimage.jpg',
                        label: "青少年心理学",
                        time: "2019-1-1",
                    },
                    {
                        title: "浅谈青少年的心理特征与心理健康教育",
                        abstract: "青少年的心理特点有别于成年人 ,其心理发展中存在着几对矛盾 :自我意识与社会角色的矛盾 ,理想我与现实我的矛盾 ,情感波动性与内隐性的矛盾 ,性机能成熟与性心理相对幼稚的矛盾等。针对青少年的心理特点 ,青少年心理健康教育的主要内容应包括 :环境适应教育 ,培养良好性情 ,正确认识自己等。",
                        imgSrc: this.$store.state.url + 'teachertrain/article/headimage.jpg',
                        label: "青少年心理学",
                        time: "2019-1-1",
                    },
                    {
                        title: "浅谈青少年的心理特征与心理健康教育",
                        abstract: "青少年的心理特点有别于成年人 ,其心理发展中存在着几对矛盾 :自我意识与社会角色的矛盾 ,理想我与现实我的矛盾 ,情感波动性与内隐性的矛盾 ,性机能成熟与性心理相对幼稚的矛盾等。针对青少年的心理特点 ,青少年心理健康教育的主要内容应包括 :环境适应教育 ,培养良好性情 ,正确认识自己等。",
                        imgSrc: this.$store.state.url + 'teachertrain/article/headimage.jpg',
                        label: "青少年心理学",
                        time: "2019-1-1",
                    },
                    {
                        title: "浅谈青少年的心理特征与心理健康教育",
                        abstract: "青少年的心理特点有别于成年人 ,其心理发展中存在着几对矛盾 :自我意识与社会角色的矛盾 ,理想我与现实我的矛盾 ,情感波动性与内隐性的矛盾 ,性机能成熟与性心理相对幼稚的矛盾等。针对青少年的心理特点 ,青少年心理健康教育的主要内容应包括 :环境适应教育 ,培养良好性情 ,正确认识自己等。",
                        imgSrc: this.$store.state.url + 'teachertrain/article/headimage.jpg',
                        label: "青少年心理学",
                        time: "2019-1-1",
                    },
                    {
                        title: "浅谈青少年的心理特征与心理健康教育",
                        abstract: "青少年的心理特点有别于成年人 ,其心理发展中存在着几对矛盾 :自我意识与社会角色的矛盾 ,理想我与现实我的矛盾 ,情感波动性与内隐性的矛盾 ,性机能成熟与性心理相对幼稚的矛盾等。针对青少年的心理特点 ,青少年心理健康教育的主要内容应包括 :环境适应教育 ,培养良好性情 ,正确认识自己等。",
                        imgSrc: this.$store.state.url + 'teachertrain/article/headimage.jpg',
                        label: "青少年心理学",
                        time: "2019-1-1",
                    }
                ],
            }
        },
        methods:{
            gotoArticlereading(){
                this.$router.push('/articlereading');
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    * {
        box-sizing: border-box;
        font-family: "Arial", "Hiragino Sans GB", 微软雅黑, "Helvetica", "sans-serif";
    }

    .articlestudying {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 0;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both;
    }

    /*清除浮动*/
    .clear {
        *zoom: 1;
    }

    .tab {
        width: 100%;
        background-color: #7188bb;
        padding: 8px 25px 0;
        margin-bottom: 10px;
        height: 52px;
        /* border: 1px solid #000; */
    }

    .tabitemlist {
        float: left;
        /* border: 1px solid #000; */
    }

    .item {
        float: left;
        padding: 0 20px;
        margin-left: 10px;
        background: #67c9df;
        cursor: pointer;
        line-height: 32px;
        font-weight: bold;
        list-style: none;
        /* border: 1px solid #000; */
    }

    a {
        color: #fff;
        text-decoration: none;
    }

    .item:hover {
        background: #958ba8;
    }

    .acticlecontent {
        height: 100%;
        width: 100%;
    }

    .left {
        float: left;
        width: 80%;
        height: 100%;
        /* background: rgb(238, 134, 134); */
    }

    .right {
        float: right;
        width: 20%;
        height: 100%;
        border: 1px solid #000;
        /* background: rgb(133, 207, 133); */
    }

    .articlemain {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        /* border: 1px solid #000; */
    }

    .articleitem {
        padding: 10px 10px;
        width: 100%;
        height: 150px;
        display: flex;
        flex-direction: column;
        margin: 0px 5px;
        /* border: 1px solid rgb(241, 6, 6); */
        background: #fff;
        border-bottom: 1px solid #f5f3f3;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.04);
    }

    .articleitem:hover {
        background: #f5f6f7;
    }

    /* .articleitemdetail {
        border: 1px solid slateblue;
    } */

    h2 {
        font-size: 24px;
        font-weight: bold;
        line-height: 24px;
        height: 24px;
        max-height: 24px;
        overflow: hidden;
        white-space: nowrap;
    }

    .titleword span:hover {
        color: red;
    }

    .abstract {
        margin-bottom: 4px;
        color: #8a8a8a;
        font-size: 18px;
        line-height: 24px;
        max-height: 24px;
        overflow: hidden;
    }

    .headimage {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        overflow: hidden;
    }

    .btn {
        float: right;
        margin-top: 10px;
        margin-right: 10px;
        border-radius: 5px;
        background-color: #51c79f;
        color: #fff;
    }

    .line {
        display: block;
        float: left;
        width: 3px;
        height: 25px;
        background: #cf2730;
        overflow: hidden;
        margin-left: 15px;
    }

    .txt {
        margin-left: 5px;
        font-size: 20px;
        font-weight: bold;
    }

    .recommendmain {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border: 1px solid #000;
    }

    .recommenditem {
        padding: 10px 10px;
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: column;
        margin: 0px 5px;
        background: #fff;
        border-bottom: 1px solid #f5f3f3;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.04);
    }

    .recommend_title {
        font-size: 16px;
        line-height: 24px;
        height: 24px;
        max-height: 24px;
        overflow: hidden;
    }

    .recommendword span:hover {
        color: red;
    }

    .recommendtime {
        color: #858585;
        margin-top: 10px;
    }
</style>