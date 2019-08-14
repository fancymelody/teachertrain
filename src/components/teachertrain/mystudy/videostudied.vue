<template>
    <div class="videostudied">
        <div class="tab">
            <ul class="tabitemlist">
                <li class="item coursestudying" id="coursestudying">
                    <a class="tabword" @click="gotoStudying">
                        学习中
                        <!-- <router-link to="/teachertrain/videostudying">学习中</router-link> -->
                    </a>
                </li>
                <li class="item coursestudied" id="coursestudied">
                    <a class="tabword" @click="gotoStudied">
                        已完成
                        <!-- <router-link to="/teachertrain/videostudied">已完成</router-link> -->
                    </a>
                </li>
            </ul>
        </div>
        <div class="videomain">
            <div class="videoitem" v-for="(item,index) in studiedList">
                <div class="videodetail">
                    <div class="imgbox">
                        <img :src="item.imgSrc">
                    </div>
                    <div class="btnbox">
                        <div class="btndetail">
                            <div class="classname">
                                <span>{{item.name}}</span>
                            </div>
                            <div class="finishword">
                                <span>完成时间:{{item.finishtime}}</span>
                            </div>
                            <button class="btn"><span>查看详情</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <pagination :num="studiedData.length" :limit="limit" @getNew="getNew" style="width: 100%"></pagination>
        </div>
    </div>
</template>

<script>
    import pagination from "../utils/pagination.vue";
    export default {
        components:{
                pagination
            },
        name: 'videostudied',
        data() {
            return {
                limit:3,
                studiedList:[],
                studiedData:[],
                classes: [
                    {
                        finishtime: "2019-1-1",
                        imgSrc: this.$store.state.url + 'teachertrain/video/class.jpg',
                        name: "人文科技艺术专题",
                    },
                    {
                        finishtime: "2019-1-1",
                        imgSrc: this.$store.state.url + 'teachertrain/video/class.jpg',
                        // imgSrc:this.$store.state.url + 'teachertrain/sidebar/headsculpture.jpg',
                        name: "人文科技艺术专题",
                    },
                    {
                        finishtime: "2019-1-1",
                        imgSrc: this.$store.state.url + 'teachertrain/video/class.jpg',
                        name: "人文科技艺术专题",
                    },
                    {
                        finishtime: "2019-1-1",
                        imgSrc: this.$store.state.url + 'teachertrain/video/class.jpg',
                        name: "人文科技艺术专题",
                    },
                    {
                        finishtime: "2019-1-1",
                        imgSrc: this.$store.state.url + 'teachertrain/video/class.jpg',
                        name: "人文科技艺术专题",
                    }
                ],
            }
        },
        mounted() {
                    this.studiedData = this.classes;
                    this.getNew(0);
                },
        methods: {
            getNew(value) {
                    this.studiedList = this.studiedData.slice(value, value + this.limit);
                },
            gotoStudying() {
                this.$router.push('/teachertrain/videostudying');
            },
            gotoStudied() {
                this.$router.push('/teachertrain/videostudied');
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

    .videostudying {
        display: flex;
        flex-direction: column;
        /* width: 100%;
            height: 100%; */
        padding: 0;
    }

    /* .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }
        .clearfix:after {
            clear: both;
        } */
    /*清除浮动*/
    /* .clear {
            *zoom: 1;
        } */
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

    .videomain {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        /* border: 1px solid #000; */
    }

    .videoitem {
        width: 33.3%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
        /* border: 1px solid #000; */
    }

    .videodetail {
        width: 90%;
        position: relative;
        border: 1px solid #d2d2d2;
        margin: 15px;
        /* border: 1px solid #000; */
    }

    .imgbox {
        margin: 5px auto;
        text-align: center;
        margin-right: 10px;
    }

    img {
        display: block;
        padding: 10px 10px;
        width: 100%;
        max-height: 190px;
    }

    .finishword {
        text-align: center;
        margin: 5px auto;
        font-size: 14px;
    }

    .classname {
        margin: 10px auto;
        font-size: 16px;
        font-weight: bold;
        width: 150px;
    }

    .btnbox {
        width: 100%;
        margin: 0 auto;
        margin-right: 5px;
        text-align: center;
    }

    .btndetail {
        margin: 0px auto;
        margin-top: 5px;
        font-size: 50px;
    }

    .btn {
        border-radius: 5px;
        width: 150px;
        margin: 10px 0px;
        background-color: #51c79f;
        color: #fff;
    }
</style>