<template>
    <div class="test">
        <div class="tabbar">
            <ul class="breadcrumb">
                <li v-for="item in crumb"><a href="#" >{{item}}</a></li>
                <li class="active">{{title}}</li>
            </ul>
        </div>
        <div class="subject">
            <div class="page row">
                <div class="content col-lg-9">
                    <div class="back">
                        <a href="#">
                            <img :src="back">
                            <span>返回上一级</span>
                        </a>
                    </div>
                    <div class="main">
                        <div class="top">
                            <table class="table table-striped table-bordered table-hover">
                                <tbody>
                                    <tr v-for="item in title">
                                        <th>{{item.name}}</th>
                                        <td>{{item.content}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="question">
                            <div class="que" v-for="(q,n) in question">
                                <div class="topic">
                                    <h4><strong>题目{{++n}}</strong>&nbsp({{q.score}}分)</h4>
                                    <h4>{{q.problem}}</h4>
                                </div>
                                <div class="select">
                                    <div class="option"  v-for="(value,key) in q.select">
                                            <label><input name="radio" type="radio">{{key}}.{{value}}</label>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="sidebar col-lg-3">
                    <div class="block">
                        <div class="header">
                            <h3>
                                测验导航
                            </h3>
                        </div>
                        <div class="number">
                            <span v-for="num in n">1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                crumb:['我的作业','FLutter',],
                title:'第一章综合测试',
                back:this.$store.state.url+"homework/back.png",
                title:[
                    {
                        name:"名称",
                        content:"Flutter"
                    },
                    {
                        name:"对应章节",
                        content:"第一章"
                    },
                    {
                        name:"总分数",
                        content:"100"
                    }
                ],
                question:[
                    {
                        score:"20",
                        problem:"E-R图是数据库设计的工具之一，它适用于建立数据库的().",
                        select:{
                            A:"结构模型",
                            B:"物理模型",
                            C:"逻辑模型",
                            D:"概念模型"
                        }
                    },
                    {
                        score:"20",
                        problem:"E-R图是数据库设计的工具之一，它适用于建立数据库的().",
                        select:{
                            A:"结构模型",
                            B:"物理模型",
                            C:"逻辑模型",
                            D:"概念模型"
                        }
                    },
                    {
                        score:"20",
                        problem:"E-R图是数据库设计的工具之一，它适用于建立数据库的().",
                        select:{
                            A:"结构模型",
                            B:"物理模型",
                            C:"逻辑模型",
                            D:"概念模型"
                        }
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    .tabbar{
        box-shadow: 0 5px 10px rgba(0,0,0,0.2);
        height: 60px;
    }
    .breadcrumb{
        background:#d9edf7;
        height: 100%;
        width: 100%;
        padding-top:20px;
        padding-left: 200px;
    }
    .subject{
        width:100%;
        height:auto;
        background:	#f1f1f3;
    }
    .page{
        width:80%;
        height: 1024px;
        margin-top:20px;
        margin-left: 10%;
    }
    .content{
        height: 100%;
        background:#FFF;
        width: 73%;
        border: 2px solid rgba(236,237,240,1);
        border-radius: 5px;
    }
    .sidebar{
        height: 100%;
        background:#FFF;
        float: right;
        border: 2px solid rgba(236,237,240,1);
        border-radius: 5px;
    }
    .back{
        margin-top:20px;
        border: 1px solid #DDD;
        margin-bottom: 10px;
        padding: 5px 10px;
    }
    .back span{
        color: #024891;
        font-size:16px;
        font-weight: 600;
    }
    .top{
        height:20%;
    }
    .table th{
        width: 150px;
        text-align: right;
    }
    .que{
        background-color: #d9edf7;
        border-color: #bce8f1;
        padding:10px 20px;
        margin-bottom: 10px;
        border-radius: 5px;
    }
    .topic h4:last-child{
        margin-left: 35px;
    }
    .select{
        margin-left: 35px;
    }
    .select label{
        margin-left:5px;
    }
    .block .header{
    font-weight: 300;
    border-bottom: 3px solid #ddd;
    margin: 0 0 10px 0;
    }
    .header ::before{
        margin-right:2px;
        color: #999;
        content: "\f0c9";
    }
    .header ::after{
        background-color: #024891;
        content: "";
        display: block;
        height: 3px;
        width: 150px;
        position: relative;
        top:13px;
    }
</style>