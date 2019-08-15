<template>
        <div class="inform">
            <ul id="myTab" class="nav nav-tabs">
                <li class="active">
                    <a href="#unread" data-toggle="tab">未读</a>
                </li>
                <li>
                    <a href="#read" data-toggle="tab">已读</a>
                </li>
            </ul>
            <div id="myTabContent" class="tab-content">
                    <div class="tab-pane fade in active" id="unread">
                        <ul class="list-group">
                            <li class="list-group-item" v-for="(item,index) in unreadList" :key="index">
                                <button class="btn btn-success sigin" @click="SiginRead(index)" type="button">标记为已读</button>
                                <p>{{item.content}}</p>                       
                                <p>{{item.time}}</p>
                                
                            </li>
                        </ul>
                        <pagination :num="unreadData.length" :limit="limit" @getNew="getNew"></pagination>
                    </div>
                        
                    <div class="tab-pane fade" id="read">
                        <ul class="list-group">
                            <li class="list-group-item" v-for="item in readList">
                                <p>{{item.content}}</p>
                                <p>{{item.time}}</p>
                            </li>
                        </ul>
                        <pagination :num="readData.length" :limit="limit" @setNew="setNew"></pagination>
                    </div>
                </div>
        </div>
    </template>
    
    <script>
        import pagination from "./pagination.vue";
        export default{
            name:"information",
            props:{
                message:Array
            },
            components:{
                pagination
            },
            data(){
                return{
                    limit:6,
                    unreadList: [],
                    readList:[],
                    unreadData: [],
                    readData:[],
                    message_unread:this.message,         
                }
            },
            methods:{
                getNew(value) {
                    this.unreadList = this.unreadData.slice(value, value + this.limit);
                },
                setNew(value) {
                    this.readList = this.readData.slice(value, value + this.limit);
                },
                SiginRead(index){
                    this.readData.splice(0,0,this.unreadList[index]); 
                    this.setNew(0);
                    this.unreadData.splice(index,1);
                    this.getNew(0);
                }
            },
            mounted() {
                    this.unreadData = this.message_unread;
                    this.getNew(0);
                },
    
        }
    </script>
    <style>
    .nav-tabs{
    background-color: #B0C4DE !important;
}
.tab-content{
    margin-top:20px;
}
.list-group-item{
    border-left: none;
    border-right: none;
    background-color:#f5f6f7;
}
.list-group-item:hover{
    background-color: 	#B0C4DE !important;
}
.list-group-item p{
    word-wrap:break-word;
}
.btn.btn-success{
    float: right;
    margin-right: 20px;
    margin-top:20px;
}</style>

    