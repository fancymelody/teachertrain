<template>
    <information :message="message"></information>
</template>
<script>
    import information from "../utils/information.vue";
    export default{
        components:{
            information
        },
        data(){
            return{
                message:[
                        {content:"请1月1日",time:"2019年7月24日10:53"},
                        {content:"消息1",time:"2019年7月24日10:54"},
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
            }
        }
    }
</script>