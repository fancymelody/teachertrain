import Vue from 'vue'
import Router from 'vue-router'

//新教师培训
import sidebartrain from "../components/teachertrain/sidebartrain";
import videostudying from "../components/teachertrain/mystudy/videostudying";
import videostudied from "../components/teachertrain/mystudy/videostudied";
import videoplay from "../components/teachertrain/mystudy/videoplay";
import articlestudying from "../components/teachertrain/mystudy/articlestudying";
import articlestudied from "../components/teachertrain/mystudy/articlestudied";
import articlereading from "../components/teachertrain/mystudy/articlereading";
import condition from "../components/teachertrain/studycondition/condition";
import homeworkwriting from "../components/teachertrain/homework/homeworkwriting";
import homeworkwrote from "../components/teachertrain/homework/homeworkwrote";
import homework from "../components/teachertrain/homework/homework";
import result from "../components/teachertrain/homework/result";
import message from '../components/teachertrain/message/message';
import community from '../components/teachertrain/community/community';


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/teachertrain/videostudying' },
    {
      path: '/teachertrain',
      component: sidebartrain,
      children: [
        { path: '/teachertrain/videostudying', component: videostudying },
        { path: '/teachertrain/videostudied', component: videostudied },
        { path: '/teachertrain/articlestudying', component: articlestudying },
        { path: '/teachertrain/articlestudied', component: articlestudied },
        { path: '/teachertrain/condition', component: condition },
        { path: '/teachertrain/homeworkwriting', component: homeworkwriting },
        { path: '/teachertrain/homeworkwrote', component: homeworkwrote },
        { path: '/teachertrain/message', component: message },
        { path: '/teachertrain/community', component: community },        
      ]
    },
    { path: '/videoplay/:title/:image',name:"videoplay", component: videoplay },
    { path: '/articlereading', component: articlereading },
    { path: '/homework', component:homework },
    { path: '/result', component:result },
  ]
})
