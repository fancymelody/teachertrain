<template>
    <div class="homeworkwrote">
        <div class="tab">
            <ul class="tabitemlist">
                <li class="item">
                    <a class="tabword">
                        <router-link to="/teachertrain/homeworkwriting">待完成</router-link>
                    </a>
                </li>
                <li class="item">
                    <a class="tabword">
                        <router-link to="/teachertrain/homeworkwrote">已完成</router-link>
                    </a>
                </li>
            </ul>
        </div>
        <div class="homeworkcontent">
            <div class="introduction">
                <span class="classname">flutter</span>
            </div>
            <div class="homework">
                <div class="homeworkitem" v-for="(item,index) in homework">
                    <div class="chapter">
                        <span>第{{item.chapternum}}章&nbsp;&nbsp;{{item.chaptername}}</span>
                    </div>
                    <div class="detail">
                        <div class="homeworktitle" @click="dropdown(index)">
                            <img :src="item.flag==true?img_lower:img_upper" class="imgtri">
                            <span class="titleword">{{item.homeworktitle}}</span>
                            <button class="btn" @click="onClick"><span>查看详情</span></button>
                        </div>
                        <!-- <div class="infodetail" :style="{'display' : flag ? 'block' : 'none'}" v-if="flag"> -->
                        <div class="infodetail" v-if="item.flag">
                            <div class="detailitem">
                                <div class="leftinfo finishtime">
                                    完成时间
                                </div>
                                <div class="rightinfo">
                                    <div class="rightnum">{{item.finishtime}}</div>
                                    <div class="intro">您已完成作业,点击右方按钮查看详情</div>
                                </div>
                            </div>
                            <div class="detailitem">
                                <div class="leftinfo deadline">
                                    总分数
                                </div>
                                <div class="rightinfo">
                                    <div class="rightnum">{{item.score}}/{{item.totalscore}}</div>
                                    <div class="intro">您已完成作业,点击右方按钮查看详情</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'homeworkwriting',
        data() {
            return {
                img_upper: this.$store.state.url + 'teachertrain/homework/uppertri.png',
                img_lower: this.$store.state.url + 'teachertrain/homework/lowertri.png',

                homework: [
                    {
                        chapternum: "一",
                        chaptername: "各流派的大神和他们的故事",
                        homeworktitle: "第一章小测验",
                        finishtime: "2018-06-11 23:59:59",
                        score:6.00,
                        totalscore: 8.00,
                        flag: false,//默认关闭
                    },
                    {
                        chapternum: "二",
                        chaptername: "行为背后的目的",
                        homeworktitle: "第二章小测验",
                        finishtime: "2018-06-11 23:59:59",
                        score:5.00,
                        totalscore: 10.00,
                        flag: false,//默认关闭
                    },
                    {
                        chapternum: "三",
                        chaptername: "人的感知和思维",
                        homeworktitle: "第三章小测验",
                        finishtime: "2018-06-11 23:59:59",
                        score:7.00,
                        totalscore: 10.00,
                        flag: false,//默认关闭
                    },
                ],
            }
        },
        methods: {
            dropdown(index) {
                this.homework[index].flag = !this.homework[index].flag;
            },

            onClick() {
                this.$router.push('/homework');
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

    .homeworkwrote {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 0;
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

    .homeworkcontent {
        margin-left: 30px;
        height: 100%;
        width: 80%;
        /* border: 1px solid #000; */
    }

    .introduction {
        border-bottom: 1px solid #e7e4e4;
        padding-bottom: 5px;
    }

    .classname {
        font-size: 24px;
    }

    .homework {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .homeworkitem {
        width: 100%;
        display: flex;
        flex-direction: column;
        background: #fff;
        border-bottom: 1px solid #f5f3f3;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.04);
    }

    .titleword:hover {
        color: #09b820;
    }

    .chapter {
        margin: 10px 0;
        font-size: 20px;
    }

    .btn {
        border-radius: 5px;
        width: 150px;
        margin-left: 700px;
        background-color: #51c79f;
        color: #fff;
    }

    .homeworktitle {
        padding: 10px 10px;
        background-color: #f8f8f8;
        font-size: 18px;
    }

    .imgtri {
        width: 12px;
        margin-right: 5px;
    }

    .infodetail {
        margin-top: 5px;
        /* border: #000 1px solid; */
        margin-left: 26px;
        font-size: 16px;
    }

    .leftinfo {
        float: left;
    }

    .rightinfo {
        margin-left: 100px;
    }

    .detailitem {
        margin-top: 10px;
    }

    .rightnum {
        margin-bottom: 10px;
    }

    .intro {
        color: #999;
    }
</style>