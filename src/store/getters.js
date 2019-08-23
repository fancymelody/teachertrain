const getters = {
    //videoplaying
    getContent(state) {
        for (var i = 0; i < state.classes.length; i++) {
            state.classes[i].id = i
        }
        console.log("id:" + state.Id)
        console.log("已完成：" + state.count)
        return state.classes
    },
    //condition
    getView(state) {
        console.log('获取', state.classes[state.Id].content)
        return state.classes[state.Id].content
    },

    //homework
    getHomework(state){
       console.log('------作业-------')
       var homeworkList=[]
       for(var i=0;i<state.classes[0].content.length;i++){
           if(state.classes[0].content[i].quiz!=null){
               homeworkList.push(state.classes[0].content[i])
           }
       }
       console.log(homeworkList)
       return homeworkList
    }
}
export default getters