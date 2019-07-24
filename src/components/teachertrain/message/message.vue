<template>
    <div class="message">
        <ul id="myTab" class="nav nav-tabs">
            <li class="active">
                <a href="#unread" data-toggle="tab" @click="change('message_unread', 1)">未读</a>
            </li>
            <li>
                <a href="#read" data-toggle="tab" @click="change('message_read', 1)">已读</a>
            </li>
        </ul>
        <div id="myTabContent" class="tab-content">
                <div class="tab-pane fade in active" id="unread">
                    <ul class="list-group">
                        <li class="list-group-item" v-for="item in message_unread">
                            <p>{{item.content}}</p>
                            <p>{{item.time}}</p>
                        </li>
                    </ul>
                    <ul class="pagination">
                        <li><a href="#">&laquo;</a></li>
                        <li  v-for="item in pagination" @click="change(currentType, item.num)">
                            <a href="#" :class="item.cls">{{item.num}}</a>
                        </li>
                        <li><a href="#">&raquo;</a></li>
                    </ul>
                </div>
                    
                <div class="tab-pane fade" id="read">
                    <ul class="list-group">
                        <li class="list-group-item" v-for="item in message_read">
                            <p>{{item.content}}</p>
                            <p>{{item.time}}</p>
                        </li>
                    </ul>
                    <ul class="pagination">
                            <li><a href="#">&laquo;</a></li>
                            <li  v-for="item in pagination" @click="change(currentType, item.num)">
                                <a href="#" :class="item.cls">{{item.num}}</a>
                            </li>
                            <li><a href="#">&raquo;</a></li>
                        </ul>
                </div>
            </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                message_unread:[
                    {content:"消息1",time:"2019年7月24日10:53"},
                    {content:"消息1",time:"2019年7月24日10:53"},
                    {content:"消息1",time:"2019年7月24日10:53"},
                    {content:"消息1",time:"2019年7月24日10:53"},
                    {content:"消息1",time:"2019年7月24日10:53"},
                    {content:"消息1",time:"2019年7月24日10:53"},
                    {content:"消息1",time:"2019年7月24日10:53"},
                    {content:"消息1",time:"2019年7月24日10:53"},
                    {content:"消息1",time:"2019年7月24日10:53"},
                    {content:"消息1",time:"2019年7月24日10:53"},
                    {content:"消息1",time:"2019年7月24日10:53"},
                ] ,
                message_read:[
                    {content:"消息1",time:"2019年7月24日10:53"},
                    {content:"消息1",time:"2019年7月24日10:53"},
                    {content:"消息1",time:"2019年7月24日10:53"},
                ],
                currentData: [],
                pagination: [],
                currentType: "message_unread"               
            }
        },
        methods:{
            change(message_type,currentPage){
                this.currentType=message_type;
                let mes_unread_len=this.message_unread.length;
                let mes_read_len=this.message_read.length;
                let per_page=6;
                if(message_type==="message_unread"){
                    if(mes_unread_len===0){
                        console.log("您还没有未读消息！");
                    }else{
                        this.pagination=new Array(Math.ceil(mes_unread_len/per_page));
                        for(let i=0;i<this.pagination.length;i+=1){
                            this.pagination[i]=(i+1)===currentPage?{cls:"active",num:i+1}:{cls:"better",num:i+1};
                        }
                        this.currentData=this.message_unread.slice((currentPage-1)*per_page,currentPage*per_page);
                    }
                }else if(message_type==="message_read"){
                    if(mes_unread_len===0){
                        console.log("您还没有已读消息！");
                    }else{
                        this.pagination=new Array(Math.ceil(mes_read_len/per_page));
                        for(let i=0;i<this.pagination.length;i+=1){
                            this.pagination[i]=(i+1)===currentPage?{cls:"active",num:i+1}:{cls:"better",num:i+1};
                        }
                        this.currentData=this.message_unread.slice((currentPage-1)*per_page,currentPage*per_page);
                    }
                }
            },
            created() {
            this.change('message_system', 2);
            }   
        }

    }
</script>

<style>
    .message{
        margin-left: 250px;
        margin-top:56px;
        height: 700px;
        border:solid;
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
    .pagination{
        float: right;
        float: bottom;
        margin:10 10 10 0;
    }
</style>
