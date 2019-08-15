<template>
    <div class="situation">
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th v-for="item in thead">{{item.title}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in currentList">
                    <td>{{item.chapter}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.time}}</td>
                    <td v-if="(item.view=='/')">{{item.view}}</td>
                    <td  v-else="(item.view!='/')"><img class="picView" :src="item.view"></img></td>
                    <td>{{item.score}}</td>
                    <td style="color:#008573">{{item.test}}</td>
                </tr>
                <pagination :num="tableList.length" :limit="limit" @getNew="getNew"></pagination>
            </tbody>
        </table>
    </div>
</template>
<script>
    import pagination from './pagination';
    export default {
        name: "situation",
        components: {
            pagination
        },
        props: {
            content: Array
        },
        data() {
            return {
                limit: 15,
                currentList: [],
                tableList: [],
                course: [
                    { name: "Flutter" },
                    { name: "Bootstrap" },
                    { name: "Vue" }
                ],
                thead: [
                    { title: "章节" },
                    { title: "名称" },
                    { title: "视频时长" },
                    { title: "视频观看程度" },
                    { title: "记录总成绩" },
                    { title: "测试情况" },
                ],
                body: this.content
            }
        },
        methods: {
            getNew(value) {
                this.currentList = this.tableList.slice(value, value + this.limit);
            },
        },
        mounted() {
            this.tableList = this.body;
            this.getNew(0);
        },
    }

</script>
<style scoped>
    .tabbar {
        background: #008573;
        height: 50px;
        margin-bottom: 20px;
        box-shadow: 0px 15px 10px -15px #9e9d9d;
    }

    .course {
        float: right;
        margin-right: 40px;
        width: 200px;
        height: 40px;
        margin-top: 10px;
        background: #037263;
        color: #FFF;
        border: none;
        font-size: 18px;
    }

    th {
        text-align: center;
    }

    td {
        text-align: center;
    }
</style>