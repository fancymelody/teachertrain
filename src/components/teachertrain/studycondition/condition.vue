<template>
    <div class="condition">
        <div class="tabbar">
            <select name="" id="" class="course">
                <option value="" v-for="item in course">{{item.name}}</option>
            </select>
        </div>
        <div class="main table-responsive">
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
                        <td>{{item.view}}</td>
                        <td>{{item.score}}</td>
                        <td style="color:#008573">{{item.test}}</td>
                    </tr>
                    <pagination :num="tableList.length" :limit="limit" @getNew="getNew"></pagination>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import pagination from '../utils/pagination';
    export default{
        name:"condition",
        components:{
            pagination
        },
        data(){
            return{
                limit:15,
                currentList:[],
                tableList:[],
                course:[
                    {name:"Flutter"},
                    {name:"Bootstrap"},
                    {name:"Vue"}
                ],
                thead:[
                    {title:"章节"},
                    {title:"名称"},
                    {title:"视频时长"},
                    {title:"视频观看程度"},
                    {title:"记录总成绩"},
                    {title:"测试情况"},
                ],
                body:[
                    {chapter:"第一章",
                     name:"课程介绍",
                     score:"是",
                     test:"200/200"
                    },
                    {
                    chapter:"1.1",
                     name:"主流框架对比",
                     time:"07分44秒",
                     view:"已观看",
                    },
                    {chapter:"1.2",
                     name:"Flutter超高性能",
                     time:"06分44秒",
                     view:"已观看",
                     },
                     {chapter:"第二章",
                     name:"Flutter开发环境",
                     score:"是",
                     test:"150/200"
                     },
                     {chapter:"2.1",
                     name:"Flutter环境安装",
                     time:"13分05秒",
                     view:"已观看",
                     },
                     {chapter:"2.2",
                     name:"AVD虚拟机的建立",
                     time:"08分35秒",
                     view:"已观看",
                     },
                     {chapter:"2.3",
                     name:"教写HelloWorld程序",
                     time:"12分45秒",
                     view:"已观看",
                     },
                     {chapter:"第三章",
                     name:"Flutter常用组件",
                     score:"/",
                     test:"/"
                     },
                     {chapter:"3.1",
                     name:"TextWidget讲解",
                     time:"11分44秒",
                     view:"/",
                     },
                     {chapter:"3.2",
                     name:"ContainerWidget讲解",
                     time:"16分29秒",
                     view:"/",
                     },
                     {chapter:"3.3",
                     name:"ImageWidget讲解",
                     time:"14分16秒",
                     view:"/",
                     },
                     {chapter:"3.4",
                     name:"ListViewWidget讲解",
                     time:"11分41秒",
                     view:"/",
                     },
                     {chapter:"3.5",
                     name:"横向列表和自定义组件讲解",
                     time:"08分01秒",
                     view:"/",
                     },
                     {chapter:"3.6",
                     name:"动态列表的使用",
                     time:"10分16秒",
                     view:"/",
                     },

                ]
            }
        },
       methods:{
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
.tabbar{
    background:#008573;
    height: 50px;
    margin-bottom: 20px;
    box-shadow:0px 15px 10px -15px #9e9d9d;
}
.course{
    float: right;
    margin-right:40px;
    width: 200px;
    height: 40px;
    margin-top:10px;
    background:#037263;
    color: #FFF;
    border: none;
    font-size: 18px;
}
th{
    text-align: center;
}
td{
    text-align: center;
}
</style>