const mutations={
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
}
export default mutations