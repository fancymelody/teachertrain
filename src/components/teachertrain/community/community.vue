<template>
    <div class="community">
        <div class="communitycontent">
            <div class="left">
                <div class="inputbox">
                    <div class="word">
                        <span class="txt">有什么事想分享给大家</span>
                    </div>
                    <div class="messageinput">
                        <textarea class="input" title="输入框" name="input" v-model="msgInput">
                        </textarea>
                    </div>
                    <div class="btn">
                        <div class="uploadpic">
                            <label for="fileinp">
                                <input type="button" id="btn" value="点我上传">
                                <span id="text">请上传图片</span>
                                <input class="inputpic" type="file" name="inputpic" id="inputpic"
                                    accept="image/gif,image/jpeg,image/jpg,image/png" @change="uploadImage($event)">
                            </label>
                        </div>
                        <div class="submitbtn">
                            <button class="btnSubmit" type="submit" @click="submit">发布</button>
                        </div>
                    </div>
                </div>
                <div class="messagebox">
                    <div class="messageitem" v-for="(item,index) in msgs" :key="item.id">
                        <div class="msgboxdetail">
                            <div class="headimagebox">
                                <img :src="item.headimage" class="headimage">
                            </div>
                            <div class="infobox">
                                <div class="personname">{{item.name}}</div>
                                <div class="time">于{{item.time}}发布</div>
                                <div class="msgcontent">{{item.msg}}</div>
                                <div class="picbox">
                                    <img :src="item.image" class="msgimage">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="recommend">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'community',
        data() {
            return {
                msgInput: '',
                msgs: [
                    {
                        id: 1,
                        name: "陕西师范大学",
                        headimage: this.$store.state.url + 'teachertrain/community/headimage1.jpg',
                        time: "2019-1-1 00:00:00",
                        msg: "师大的夏天就应该有师大夏天的亚子！你说说，夏天该有什么亚子____ ​​​​",
                        image: this.$store.state.url + 'teachertrain/community/pic1.jpg',
                    },
                    {
                        id: 2,
                        name: "读者",
                        headimage: this.$store.state.url + 'teachertrain/community/headimage2.jpg',
                        time: "2019-1-1 00:00:00",
                        msg: "奋斗真的只是因为，好吃的很贵，远方很远，喜欢的人很优秀。",
                        image: this.$store.state.url + 'teachertrain/community/pic2.jpg',
                    },
                    {
                        id: 3,
                        name: "共青团中央",
                        headimage: this.$store.state.url + 'teachertrain/community/headimage3.jpg',
                        time: "2019-1-1 00:00:00",
                        msg: "跟爸妈同读一个专业是一种怎样的体验？晚安",

                    },
                    {
                        id: 4,
                        name: "意林杂志",
                        headimage: this.$store.state.url + 'teachertrain/community/headimage4.jpg',
                        time: "2019-1-1 00:00:00",
                        msg: "愿你有高跟鞋也有跑鞋，喝茶也能喝点小酒。愿你有勇敢的朋友，有牛逼的对手。愿你对过往的一切情深意重，但从不回头。愿你特别美丽，特别平静，特别凶狠，也特别温柔。 ​​​​",
                        image: this.$store.state.url + 'teachertrain/community/pic4.gif',
                    }
                ],

            }
        },
        created(){
            
        },
        methods: {
            uploadImage(e) {
                var file = event.target.files;
                console.log(file);
                document.getElementById("text").innerHTML = file[0].name; //显示文件名
                //var x = document.getElementById("inputpic").value;
                //document.getElementById("text").innerHTML = x;
            },

            submit() {
                console.log(this.msgInput)
                var newMessage={}
                newMessage.id=this.msgs.length+1
                newMessage.msg=this.msgInput
                newMessage.name="老王"
                newMessage.time=new Date()
                this.msgs.unshift(newMessage)
            },   
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    * {
        box-sizing: border-box;
        font-family: "Arial", "Hiragino Sans GB", 微软雅黑, "Helvetica", "sans-serif";
    }

    .community {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background: rgb(221, 236, 230);
        border: 1px solid #000;
    }

    .communitycontent {
        width: 100%;
        height: 100%;
    }

    .left {
        float: left;
        width: 70%;
        height: 100%;
        border: 1px solid red;
    }

    .right {
        float: right;
        width: 30%;
        height: 100%;
        /* border: 1px solid blue; */
    }

    .inputbox {
        background-color: #fff;
        margin: 5px 50px 10px 50px;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
        border-radius: 2px;
        padding: 5px 30px 5px 30px;
        border: 1px solid #000;
    }

    .txt {
        font-size: 18px;
    }

    .input {
        min-height: 100px;
        width: 90%;
        /* width: 850px; */
        resize: vertical;
        padding: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: #cccccc;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.15) inset;
        font-size: 16px;
        border: 1px solid #000;
        overflow: hidden;
    }

    .word {
        margin: 5px 0;
    }

    .btn {
        width: 100%;
    }

    .uploadpic {
        float: left;
        width: 35%;
    }

    .submitbtn {
        float: right;
        width: 20%;
    }

    /*将inputfile看起来像是在一个button中*/
    label {
        position: relative;
    }

    #inputpic {
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    }

    #btn {
        margin-right: 5px;
    }

    #text {
        color: red;
    }

    #btn {
        width: 100px;
        height: 40px;
        background: #00b0f0;
        text-align: center;
        color: #FFF;
        border: none;
        border-radius: 4px;
    }

    .btnSubmit {
        display: block;
        width: 100px;
        height: 40px;
        background-color: #51c79f;
        color: #fff;
        text-decoration: none;
        text-align: center;
        font: normal normal normal 16px/40px 'Microsoft YaHei';
        cursor: pointer;
        border-radius: 4px;
    }

    .messagebox {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border: 1px solid #000;
    }

    .messageitem {
        margin: 5px 50px 10px 50px;
        padding: 5px 20px 5px 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
        border-radius: 2px;
        border: 1px solid green;
    }

    .headimage {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
        overflow: hidden;
    }

    .headimagebox {
        float: left;
        width: 10%;
        text-align: center;
        height: 100%;
        border: 1px solid red;
    }

    .infobox {
        float: right;
        width: 90%;
        height: 100%;
        border: 1px solid blue;
        padding-left: 10px;
    }

    .personname {
        margin-top: 5px;
        margin-bottom: 8px;
        font-size: 18px;
        font-weight: bold;
    }

    .time {
        font-size: 16px;
        color: #808080;
    }

    .msgcontent {
        margin-top: 10px;
        line-height: 150%;
        font-size: 18px;
        margin-bottom: 10px;
    }

    .msgimage {
        width: 60%;
        margin-bottom: 10px;
    }

    .recommend {
        color: red;
    }
</style>