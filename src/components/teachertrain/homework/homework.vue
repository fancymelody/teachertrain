<template>
    <div class="test">
        <div class="tabbar">
            <ul class="breadcrumb">
                <li v-for="item in crumb" :key="item.id"><a href="#" >{{item}}</a></li>
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
                                    <tr v-for="item in titles" :key="item.id">
                                        <th>{{item.name}}</th>
                                        <td>{{item.content}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <form action="" @submit.prevent="submit">
                            <div class="question">
                                <div class="que" v-for="(q,index) in question" :key="q.id">
                                    <div class="topic">
                                        <h4><strong>题目{{++index}}</strong>&nbsp({{q.score}}分)</h4>
                                        <h4>{{q.problem}}</h4>
                                    </div>
                                    <div class="select">
                                        <div class="option"  v-for="(value,key) in q.select" :key="value.id">
                                                <input :name="q.name" type="radio" value="key" v-model="checkedValue[index]" @compare="get_radio_value(index)"><label>{{key}}.{{value}}</label>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <button type="submit" class="btn btn-info" value="提交">提交</button>
                        </form>
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
                            <span class="num" v-for="num in 5">{{num}}</span>
                        </div>
                        <button type="submit" class="btn btn-info" @click="submit">提交</button>
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
                titles:[
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
                        name:'t1',
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
                        name:'t2',
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
                        name:'t3',
                        score:"20",
                        problem:"E-R图是数据库设计的工具之一，它适用于建立数据库的().",
                        select:{
                            A:"结构模型",
                            B:"物理模型",
                            C:"逻辑模型",
                            D:"概念模型"
                        }
                    }
                ],
                all_list: [], //答案数组
                checkedValue: [],
                num:[1,2,3,4,5],
                
            };
        },
        methods:{
            submit:function(){
                for(var i=0;i<this.all_list.length;i++){
                    if (this.all_list[i] == "" || typeof this.all_list[i] === "undefined") {
                    this.all_list.splice(i, 1);
                    }
                }
                if(this.all_list.length != this.question.length){
                    alert("还有"+this.question.length-this.all_list.length+"未做，确认提交？");
                }else{
                    alert("已做完，确认提交？");
                    this.$emit('',this.all_list)
                }
            },
            get_radio_value:function(index){
                this.all_list[index]==this.checkedValue[index];
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
        height: auto;
        margin-top:20px;
        margin-left: 10%;
        margin-bottom: 20px;
        
    }
    .content{
        height: auto;
        background:#FFF;
        width: 73%;
        border: 2px solid rgba(236,237,240,1);
        border-radius: 5px;
        box-shadow: 0 5px 10px rgba(0,0,0,0.2);
        
    }
    .sidebar{
        height: auto;
        background:#FFF;
        float: right;
        border: 2px solid rgba(236,237,240,1);
        border-radius: 5px;
        box-shadow: 0 5px 10px rgba(0,0,0,0.2);
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
    margin: 0 0 20px 0;
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
    .number span{
        display:inline-block;
        border:solid;
        border: 1px solid rgba(236,237,240,1);
        color: #024891;
        background:#d9edf7;
        border-radius: 4px;
        margin-left: 20px;
        width: 30px;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        box-shadow: 0 5px 10px rgba(204, 199, 199, 0.2);

    }
    .btn{
        margin-top:40px;
        margin-bottom: 20px;
        float: right;
    }
</style>