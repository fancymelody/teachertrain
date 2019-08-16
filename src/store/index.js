import Vue from 'vue';
import Vuex from 'vuex';
import { stat } from 'fs';

Vue.use(Vuex);


export const store =new Vuex.Store({
    state:{
        Id:0,      
        url:'../../../static/images/',
        classes: [
            {
                progressvalue:"",
                imgSrc: '../../../static/images/teachertrain/video/flutter.jpg',
                name: "Vue",
                count:0,
                content:[
                    {
                        chapter: "第一章",
                        name: "课程介绍",
                        score: "是",
                        test: "200/200",
                    },
                    {
                        chapter: "1.1",
                        name: "主流框架对比",
                        time: "07分44秒",
                        view: "/",
                        src:"../../../static/images/teachertrain/video/shudu.mp4",
                    },
                    {
                        chapter: "1.2",
                        name: "Flutter超高性能",
                        time: "06分44秒",
                        view: "/",
                        src:"../../../static/images/teachertrain/video/Origen.mp3",
                    },
                    {
                        chapter: "第二章",
                        name: "Flutter开发环境",
                        score: "是",
                        test: "150/200",
                        
                    },
                    {
                        chapter: "2.1",
                        name: "Flutter环境安装",
                        time: "13分05秒",
                        view: "/",
                        src:"../../../static/images/teachertrain/video/shudu.mp4",
                    },
                    {
                        chapter: "2.2",
                        name: "AVD虚拟机的建立",
                        time: "08分35秒",
                        view: "/",
                    },
                    {
                        chapter: "2.3",
                        name: "教写HelloWorld程序",
                        time: "12分45秒",
                        view: "/",
                    },
                    {
                        chapter: "第三章",
                        name: "Flutter常用组件",
                        score: "/",
                        test: "/"
                    },
                    {
                        chapter: "3.1",
                        name: "TextWidget讲解",
                        time: "11分44秒",
                        view: "/",
                    },
                    {
                        chapter: "3.2",
                        name: "ContainerWidget讲解",
                        time: "16分29秒",
                        view: "/",
                    },
                    {
                        chapter: "3.3",
                        name: "ImageWidget讲解",
                        time: "14分16秒",
                        view: "/",
                    },
                    {
                        chapter: "3.4",
                        name: "ListViewWidget讲解",
                        time: "11分41秒",
                        view: "/",
                    },
                    {
                        chapter: "3.5",
                        name: "横向列表和自定义组件讲解",
                        time: "08分01秒",
                        view: "/",
                    },
                    {
                        chapter: "3.6",
                        name: "动态列表的使用",
                        time: "10分16秒",
                        view: "/",
                    },
                ],
            },
            {
                count:0,
                progressvalue:"",
                imgSrc: '../../../static/images/teachertrain/video/flutter.jpg', 
                name: "人文科技艺术专题",
                content:[
                    {
                        chapter: "第一章",
                        name: "课程介绍",
                        score: "是",
                        test: "200/200",
                    },
                    {
                        chapter: "1.1",
                        name: "主流框架对比",
                        time: "07分44秒",
                        view: "/",
                        src:"../../../static/images/teachertrain/video/shudu.mp4",
                    },
                    {
                        chapter: "1.2",
                        name: "Flutter超高性能",
                        time: "06分44秒",
                        view: "/",
                        src:"../../../static/images/teachertrain/video/Origen.mp3",
                    },
                    {
                        chapter: "第二章",
                        name: "Flutter开发环境",
                        score: "是",
                        test: "150/200",
                        
                    },
                    {
                        chapter: "2.1",
                        name: "Flutter环境安装",
                        time: "13分05秒",
                        view: "/",
                        src:"../../../static/images/teachertrain/video/shudu.mp4",
                    },
                    {
                        chapter: "2.2",
                        name: "AVD虚拟机的建立",
                        time: "08分35秒",
                        view: "/",
                    },
                    {
                        chapter: "2.3",
                        name: "教写HelloWorld程序",
                        time: "12分45秒",
                        view: "/",
                    },
                    {
                        chapter: "第三章",
                        name: "Flutter常用组件",
                        score: "/",
                        test: "/"
                    },
                    {
                        chapter: "3.1",
                        name: "TextWidget讲解",
                        time: "11分44秒",
                        view: "/",
                    },
                    {
                        chapter: "3.2",
                        name: "ContainerWidget讲解",
                        time: "16分29秒",
                        view: "/",
                    },
                    {
                        chapter: "3.3",
                        name: "ImageWidget讲解",
                        time: "14分16秒",
                        view: "/",
                    },
                    {
                        chapter: "3.4",
                        name: "ListViewWidget讲解",
                        time: "11分41秒",
                        view: "/",
                    },
                    {
                        chapter: "3.5",
                        name: "横向列表和自定义组件讲解",
                        time: "08分01秒",
                        view: "/",
                    },
                    {
                        chapter: "3.6",
                        name: "动态列表的使用",
                        time: "10分16秒",
                        view: "/",
                    },
                ],
            },
            {
                count:0,
                progressvalue: 82.4,
                imgSrc: '../../../static/images/teachertrain/video/flutter.jpg',                name: "人文科技艺术专题",
            },
            {
                progressvalue: 82.4,
                imgSrc: '../../../static/images/teachertrain/video/flutter.jpg',                name: "人文科技艺术专题",
            },
            {
                progressvalue: 82.4,
                imgSrc: '../../../static/images/teachertrain/video/flutter.jpg',                name: "人文科技艺术专题",
            }
        ],
    },
    mutations:{
        setView(state,playload){
            var id=playload.id
            var index=playload.index
            state.Id=id
            //学习情况的视频观看程度
            console.log(id)
            state.classes[id].content[index].view="../../../static/images/teachertrain/video/right_icon.png",
            //课程总进度
            state.classes[id].count++;  //视频观看总数
            state.classes[id].progressvalue=(state.classes[id].count/(state.classes[id].content.length+1)*100).toFixed(1)
        }
    },
    getters:{
        //videoplaying
        getContent(state){
            for(var i=0;i<state.classes.length;i++){
                state.classes[i].id=i
            }
            console.log("id:"+state.Id)
            console.log("已完成："+state.count)
            return state.classes
        },
        //condition
        getView(state){
            console.log('获取',state.classes[state.Id].content)
            return state.classes[state.Id].content
        },
    },
    actions:{},
})

// export default store