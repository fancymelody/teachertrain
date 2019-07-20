<template>
    <div class="articlestudying">
        <div class="tab">
            <ul class="tabitemlist">
                <li class="item coursestudying" id="coursestudying">
                    <a class="tabword">
                        <router-link to="/teachertrain/acticlestudying">待阅读</router-link>
                    </a>
                </li>
                <li class="item coursestudied" id="coursestudied">
                    <a class="tabword">
                        <router-link to="/teachertrain/acticlestudied">已阅读</router-link>
                    </a>
                </li>
            </ul>
        </div>
        <div class="articlemain">
            <div class="articleitem">

            </div>
            <div class="articleitem">

            </div>
            <div class="articleitem">

            </div>
        </div>
        <div class="recommend">
            ffff  ddddddddddddddddddddddddddddddddddddddddddddddd
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
                        progressvalue: 82.4,
                        imgSrc: this.$store.state.url + 'teachertrain/video/class.jpg',
                        name: "人文科技艺术专题",
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
        border: 1px solid #000;
    }

    .tabitemlist {
        float: left;
        border: 1px solid #000;
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
        border: 1px solid #000;
    }

    a {
        color: #fff;
        text-decoration: none;
    }

    .item:hover {
        background: #958ba8;
    }

    .articlemain {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border: 1px solid #000;
    }

    .articleitem {
        /* width: 80%;
        height: 150px;
        display: flex; */
        display:inline;
        /* width:80%; */
        /* flex-direction: column;
        align-items: center;
        background: #fff; */
        border: 1px solid #000;
    }

    .recommend {
        display:inline;
        /* width: 20%;
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff; */
        border: 1px solid red;
    }
</style>
