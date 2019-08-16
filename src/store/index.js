import Vue from 'vue';
import Vuex from 'vuex';
import { stat } from 'fs';

Vue.use(Vuex);


export const store =new Vuex.Store({
    state:{
        count:0,
        url:'../../../static/images/',
        Vue:[
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
    mutations:{
        setView(state,index){
            state.Vue[index].view="../../../static/images/teachertrain/video/right_icon.png",
            state.count++;
            console.log('保存',state.count+state.Vue[index].view)
        }
    },
    getters:{
        getView(state){
            console.log('获取',state.Vue)
            return state.Vue
        },
        getProgressvalue(state){
            var value=state.count/(state.Vue.length+1)*100
            return value.toFixed(1)
        }
    },
    actions:{},
})

// export default store