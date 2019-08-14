import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store =new Vuex.Store({
    state:{
        url:'../../../static/images/',
        src:"https://onlineprograme.s3.us-east-2.amazonaws.com/course/video/%E7%AC%AC1%E8%AF%BE.mp4",
        
    },
    mutations:{
    },
    getters:{},
    actions:{},
})

// export default store