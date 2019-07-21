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
                    <tr v-for="item in body">
                        <td>{{item.chapter}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.time}}</td>
                        <td>{{item.view}}</td>
                        <td>{{item.score}}</td>
                        <td style="color:#008573">{{item.test}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
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
                     time:"",
                     view:"",
                     score:"",
                     test:""
                    },
                    {
                    chapter:"1.1",
                     name:"",
                     time:"",
                     view:"",
                     score:"",
                     test:""
                    },
                    {chapter:"1.2",
                     name:"",
                     time:"",
                     view:"",
                     score:"",
                     test:""
                     }
                ]
            }
        }
    }

</script>
<style>
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