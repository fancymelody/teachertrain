<template>
    <div class="homeworkwriting">
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
                <div class="homeworkitem" v-for="(item,index) in writingList">
                    <div class="chapter">
                        <span>第{{item.chapternum}}章&nbsp;&nbsp;{{item.chaptername}}</span>
                    </div>
                    <div class="detail">
                        <div class="homeworktitle" @click="dropdown(index)">
                            <img :src="item.select_flag==true?img_lower:img_upper" class="imgtri">
                            <span class="titleword">{{item.homeworktitle}}</span>
                            <button class="btn" @click="onClick"><span>前往测验</span></button>
                        </div>
                        <!-- <div class="infodetail" :style="{'display' : flag ? 'block' : 'none'}" v-if="flag"> -->
                        <div class="infodetail" v-if="item.select_flag">
                            <div class="detailitem">
                                <div class="leftinfo deadline">
                                    截止时间
                                </div>
                                <div class="rightinfo">
                                    <div class="rightnum">{{item.deadline}}</div>
                                    <div class="intro">请务必在截止时间之前提交，截止时间后的提交不再计分</div>
                                </div>
                            </div>
                            <div class="detailitem">
                                <div class="leftinfo deadline">
                                    总分数
                                </div>
                                <div class="rightinfo">
                                    <div class="rightnum">{{item.totalscore}}</div>
                                    <div class="intro">您只有一次机会，请认真作答</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <pagination :num="writingData.length" :limit="limit" @getNew="getNew"></pagination>
            </div>
        </div>
        
    </div>
</template>

<script>
    import pagination from "../utils/pagination.vue";
    export default {
        name: 'homeworkwriting',
        components:{
                pagination
            },
        data() {
            return {
                    limit:6,
                    writingList:[],
                    writingData:[],
                img_upper: this.$store.state.url + 'teachertrain/homework/uppertri.png',
                img_lower: this.$store.state.url + 'teachertrain/homework/lowertri.png',

                homeworklist:this.$store.getters.getContent,

                homework: [
                    {
                        chapternum: "一",
                        chaptername: "各流派的大神和他们的故事",
                        homeworktitle: "第一章小测验",
                        deadline: "2018-06-11 23:59:59",
                        totalscore: 8.00,
                        select_flag: false,//下拉框默认关闭
                    },
                    {
                        chapternum: "二",
                        chaptername: "行为背后的目的",
                        homeworktitle: "第二章小测验",
                        deadline: "2018-06-11 23:59:59",
                        totalscore: 10.00,
                        select_flag: false,//默认关闭
                    },
                    {
                        chapternum: "三",
                        chaptername: "人的感知和思维",
                        homeworktitle: "第三章小测验",
                        deadline: "2018-06-11 23:59:59",
                        totalscore: 10.00,
                        select_flag: false,//默认关闭
                    },
                    {
                        chapternum: "四",
                        chaptername: "情绪体验和压力调节",
                        homeworktitle: "第四章小测验",
                        deadline: "2018-06-11 23:59:59",
                        totalscore: 20.00,
                        select_flag: false,//默认关闭
                    },
                    {
                        chapternum: "五",
                        chaptername: "催眠的真相",
                        homeworktitle: "第五章小测验",
                        deadline: "2018-06-11 23:59:59",
                        totalscore: 15.00,
                        select_flag: false,//默认关闭
                    },
                    {
                        chapternum: "六",
                        chaptername: "你到底能有多聪明",
                        homeworktitle: "第六章小测验",
                        deadline: "2018-06-11 23:59:59",
                        totalscore: 5.00,
                        select_flag: false,//默认关闭
                    },
                    {
                        chapternum: "七",
                        chaptername: "什么样的性格最受欢迎",
                        homeworktitle: "第七章小测验",
                        deadline: "2018-06-11 23:59:59",
                        totalscore: 10.00,
                        select_flag: false,//默认关闭
                    },
                ],
            }
        },
        mounted() {
                    this.writingData = this.homework;
                    this.getNew(0);
                },
        methods: {
            dropdown(index) {
                this.homework[index].select_flag = !this.homework[index].select_flag;
            },

            onClick() {
                this.$router.push('/homework');
            },
            getNew(value) {
                    this.writingList = this.writingData.slice(value, value + this.limit);
                },
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    * {
        box-sizing: border-box;
        font-family: "Arial", "Hiragino Sans GB", 微软雅黑, "Helvetica", "sans-serif";
    }

    .homeworkwriting {
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