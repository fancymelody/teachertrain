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
}
export default getters