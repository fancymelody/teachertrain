<template>
    <div class="articlestudying">
        <div class="tab">
            <ul class="tabitemlist">
                <li class="item coursestudying">
                    <a class="tabword">
                        <router-link to="/teachertrain/acticletudying">待阅读</router-link>
                    </a>
                </li>
                <li class="item coursestudied">
                    <a class="tabword">
                        <router-link to="/teachertrain/acticlestudied">已阅读</router-link>
                    </a>
                </li>
            </ul>
        </div>
        <div class="acticlecontent">
            <div class="left">
                <div class="articlemain">
                    <div class="articleitem">
                        <div class="articleitemdetail">
                            <div class="title">
                                <h2>
                                    <a href="" target="_blank" style="color:#000;" class="titleword">
                                        <span>{{title}}</span>
                                    </a>
                                </h2>
                            </div>
                            <div class="abstract">
                                青少年的心理特点有别于成年人,其心理发展中存在着几对矛盾:自我意识与社会角色的矛盾,理想我与现实我的矛盾
                            </div>
                            <div class="btnbox">
                                <img <button class="btn"><span>开始阅读</span></button>
                            </div>
                        </div>
                    </div>
                    <div class="articleitem">
                        <div class="articleitemdetail">

                        </div>
                    </div>
                    <div class="articleitem">
                        <div class="articleitemdetail">

                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="recommend">
                    ffff ddddddddddddddddddddddddddddddddddddddddddddddd
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
                title: "浅谈青少年的心理特征与心理健康教育",
                abstract: "青少年的心理特点有别于成年人,其心理发展中存在着几对矛盾:自我意识与社会角色的矛盾,理想我与现实我的矛盾",
                imgSrc: this.$store.state.url + 'teachertrain/video/class.jpg',
                articles: [
                    {
                        title: "浅谈青少年的心理特征与心理健康教育",
                        abstract: "青少年的心理特点有别于成年人,其心理发展中存在着几对矛盾:自我意识与社会角色的矛盾,理想我与现实我的矛盾",
                    },
                    {
                        progressvalue: 82.4,
                        imgSrc: this.$store.state.url + 'teachertrain/video/class.jpg',
                        // imgSrc:this.$store.state.url + 'teachertrain/sidebar/headsculpture.jpg',
                        name: "人文科技艺术专题",
                    },
                    {
                        progressvalue: 82.4,
                        imgSrc: this.$store.state.url + 'teachertrain/video/class.jpg',
                        name: "人文科技艺术专题",
                    },
                    {
                        progressvalue: 82.4,
                        imgSrc: this.$store.state.url + 'teachertrain/video/class.jpg',
                        name: "人文科技艺术专题",
                    },
                    {
                        progressvalue: 82.4,
                        imgSrc: this.$store.state.url + 'teachertrain/video/class.jpg',
                        name: "人文科技艺术专题",
                    }
                ],
            }
        },
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
        background: rgb(133, 207, 133);
    }

    .articlemain {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border: 1px solid #000;
    }

    .articleitem {
        padding: 10px 10px;
        width: 100%;
        height: 150px;
        display: flex;
        flex-direction: column;
        margin: 0px 5px;
        border: 1px solid rgb(241, 6, 6);
        background: #fff;
        /* border-bottom: 1px solid #f4f4f4; */
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.04);
    }

    .articleitemdetail {
        border: 1px solid slateblue;
    }

    h2 {
        font-size: 24px;
        font-weight: bold;
        line-height: 24px;
        height: 24px;
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
    }
</style>