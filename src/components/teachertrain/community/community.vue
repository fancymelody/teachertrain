<template>
    <div class="community">
        <div class="left">
            <!-- 输入信息框 -->
            <div class="inputbox">
                <div class="word">
                    <span class="txt" style="font-size: 18px;">有什么事想分享给大家</span>
                </div>
                <div id="wangeditor">
                    <div ref="editor" class="editor" style="height:400px;">

                    </div>
                </div>
                <div class="btn">
                    <button class="btnSubmit" type="submit" @click="submit">发布</button>
                </div>
            </div>
            <!-- 具体信息框 -->
            <div class="messagebox">
                <div class="messageitem" v-for="(item,index) in msgs" :key="index">
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
                    <!-- 三个icon转发、评论、点赞 -->
                    <div class="likebox">
                        <div class="iconitem" @click="share(index)">
                            <span>
                                <img :src="img_share" class="icon">
                                转发
                            </span>
                        </div>
                        <div class="iconitem" @click="dropdown(index)">
                            <span>
                                <img :src="img_comment" class="icon">
                                评论
                            </span>
                        </div>
                        <div class="iconitem" @click="giveThumbs(index)">
                            <span>
                                <img :src="item.like_flag==true?img_like:img_dislike" class="icon">
                                点赞{{item.likes}}
                            </span>
                        </div>
                    </div>
                    <!--整个评论框-->
                    <div class="commentbox" v-if="item.comment_flag">
                        <!-- 评论框输入框 -->
                        <div class="comment_box">
                            <div class="commentheadimagebox">
                                <img :src="item.headimage" class="commentheadimage">
                            </div>
                            <div class="commentinputbox">
                                <textarea class="commentinput" title="输入框" name="commentinput" v-model="commentInput">
                                            </textarea>
                            </div>
                        </div>
                        <div class="commentbtnbox">
                            <button class="btnSubmit" type="submit" @click="commentSubmit(index)">发布</button>
                        </div>
                        <!-- 显示评论框 -->
                        <div class="commentmsgbox">
                            <div class="commentmsgboxitem" v-for="comment_item in item.comment_list">
                                <div class="commentmsg_box">
                                    <div class="commentheadimagebox">
                                        <img :src="comment_item.comment_headimage" class="commentheadimage">
                                    </div>
                                    <div class="msgcommentbox">
                                        <span style="color: darkorange;">{{comment_item.comment_name}}</span>
                                        {{comment_item.comment}}
                                        <br>
                                        <span style="float:right;color: #8a8a8a;">{{comment_item.time}}</span>
                                        <br>
                                    </div>
                                </div>
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
</template>

<script>
    import E from 'wangeditor';
    export default {
        name: 'community',
        data() {
            return {
                editor: null,
                editorContent: '',

                commentInput: '',

                img_share: this.$store.state.url + 'teachertrain/community/share.png',
                img_dislike: this.$store.state.url + 'teachertrain/community/like.png',
                img_like: this.$store.state.url + 'teachertrain/community/likeafter.png',
                img_comment: this.$store.state.url + 'teachertrain/community/comment.png',

                msgs: [
                    {
                        id: 1,
                        name: "陕西师范大学",
                        headimage: this.$store.state.url + 'teachertrain/community/headimage1.jpg',
                        time: "2019-1-1 00:00:00",
                        msg: "师大的夏天就应该有师大夏天的亚子！你说说，夏天该有什么亚子____ ​​​​",
                        image: this.$store.state.url + 'teachertrain/community/pic1.jpg',
                        comment_flag: false,//评论下拉框默认关闭
                        like_flag: false,//点赞
                        likes: 0,
                        comment_list: [
                            {
                                comment_headimage: this.$store.state.url + 'teachertrain/community/headimage1.jpg',
                                comment_name: "陕西师范大学",
                                comment: "开心法则： 1.与自己无关的事情少管 2.相信糟糕的状态一定会过去 3.变有钱 ​​​​",
                                time: "2019-8-15 00:00:00",
                            },
                            {
                                comment_headimage: this.$store.state.url + 'teachertrain/community/headimage2.jpg',
                                comment_name: "读者",
                                comment: "开心法则： 1.与自己无关的事情少管 2.相信糟糕的状态一定会过去 3.变有钱 开心法则： 1.与自己无关的事情少管 2.相信糟糕的状态一定会过去 3.变有钱 ​​​​",
                                time: "2019-8-15 00:00:00",
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "读者",
                        headimage: this.$store.state.url + 'teachertrain/community/headimage2.jpg',
                        time: "2019-1-1 00:00:00",
                        msg: "奋斗真的只是因为，好吃的很贵，远方很远，喜欢的人很优秀。",
                        image: this.$store.state.url + 'teachertrain/community/pic2.jpg',
                        comment_flag: false,//评论下拉框默认关闭
                        like_flag: false,//点赞
                        likes: 0,
                        comment_list: []
                    },
                    {
                        id: 3,
                        name: "共青团中央",
                        headimage: this.$store.state.url + 'teachertrain/community/headimage3.jpg',
                        time: "2019-1-1 00:00:00",
                        msg: "跟爸妈同读一个专业是一种怎样的体验？晚安",
                        comment_flag: false,//评论下拉框默认关闭   
                        like_flag: false,//点赞
                        likes: 0,
                        comment_list: []
                    },
                    {
                        id: 4,
                        name: "意林杂志",
                        headimage: this.$store.state.url + 'teachertrain/community/headimage4.jpg',
                        time: "2019-1-1 00:00:00",
                        msg: "愿你有高跟鞋也有跑鞋，喝茶也能喝点小酒。愿你有勇敢的朋友，有牛逼的对手。愿你对过往的一切情深意重，但从不回头。愿你特别美丽，特别平静，特别凶狠，也特别温柔。 ​​​​",
                        image: this.$store.state.url + 'teachertrain/community/pic4.gif',
                        comment_flag: false,//评论下拉框默认关闭
                        like_flag: false,//点赞
                        likes: 0,
                        comment_list: []
                    }
                ],

            }
        },
        created() {

        },
        watch: {
            // editorContent() {
            //     console.log(editor.txt.text())
            // }
        },
        mounted() {
            this.editor = new E(this.$refs.editor);
            // 下面两个配置，使用其中一个即可显示“上传图片”的tab。但是两者不要同时使用！！！
            this.editor.customConfig.uploadImgShowBase64 = true   // 使用 base64 保存图片
            // this.editor.customConfig.uploadImgServer = '/upload'  // 上传图片到服务器
            // 隐藏“网络图片”tab
            this.editor.customConfig.showLinkImg = false;
            // 将图片大小限制为 1M
            this.editor.customConfig.uploadImgMaxSize = 1 * 1024 * 1024;
            // 限制一次最多上传 1 张图片
            this.editor.customConfig.uploadImgMaxLength = 1;
            //上传图片
            this.editor.customConfig.uploadImgHooks = {
                customInsert: function (insertImg, result, editor) {
                    // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
                    // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果

                    // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
                    var url = result.data;
                    insertImg(url);

                    // result 必须是一个 JSON 格式字符串！！！否则报错
                }
            }
            this.editor.customConfig.onchange = (html) => {
                this.editorContent = html
            };
            //配置菜单
            this.editor.customConfig.menus = [
                'head', // 标题
                'bold', // 粗体
                'fontSize', // 字号
                'fontName', // 字体
                'italic', // 斜体
                'underline', // 下划线
                'strikeThrough', // 删除线
                'foreColor', // 文字颜色
                'backColor', // 背景颜色
                'link', // 插入链接
                'list', // 列表
                'justify', // 对齐方式
                'quote', // 引用
                'emoticon', // 表情
                'image', // 插入图片
                'table', // 表格
                'video', // 插入视频
                'code', // 插入代码
                'undo', // 撤销
                'redo' // 重复
            ],
                //配置表情包
                // 表情面板可以有多个 tab ，因此要配置成一个数组。数组每个元素代表一个 tab 的配置
                this.editor.customConfig.emotions = [
                    {
                        // tab 的标题
                        title: '默认',
                        // type -> 'emoji' / 'image'
                        type: 'image',
                        // content -> 数组
                        content: [
                            {
                                alt: '[喵喵]',
                                src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/7b/2018new_miaomiao_org.png'
                            },
                            {
                                alt: '[doge]',
                                src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a1/2018new_doge02_org.png'
                            },
                            {
                                alt: '[爱你]',
                                src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f6/2018new_aini_org.png'
                            },
                            {
                                alt: '[允悲]',
                                src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/83/2018new_kuxiao_org.png'
                            }
                        ]
                    },
                ]
            this.editor.create();
            // console.log(this.editor.txt.text())
            // this.editor.txt.html('<p>请输入内容</p>');
        },
        methods: {
            //消息发布
            submit() {
                //获取输入框的内容
                var msgInput = this.editor.txt.text()
                console.log(msgInput)
                var newMessage = {}
                newMessage.id = this.msgs.length + 1
                newMessage.msg = msgInput
                newMessage.name = "老王"
                newMessage.comment_flag = false//评论下拉框默认关闭
                newMessage.comment_list = []
                newMessage.likes = 0   //点赞数
                newMessage.like_flag = false //默认点赞
                console.log(this.getAllDateTime(new Date()))
                newMessage.time = this.getAllDateTime(new Date())
                this.msgs.unshift(newMessage)
                //输入框的内容置空
                this.editor.txt.text('')
            },
            //评论发布
            commentSubmit(index) {
                console.log(index)
                console.log(this.commentInput)
                var newMessage = {}
                newMessage.comment = this.commentInput
                newMessage.comment_name = "老王"
                newMessage.time = this.getAllDateTime(new Date())

                if (this.msgs[index].comment_list.length === 0) {
                    //this.msgs[index].comment_list.push(newMessage)
                    //this.msgs[index].comment_list.splice(0,0,newMessage);
                    this.msgs[index].comment_list.splice(newMessage);
                    console.log("splice")
                } else if (this.msgs[index].comment_list.length > 0) {
                    console.log("unshift")
                    this.msgs[index].comment_list.unshift(newMessage)
                }
                this.commentInput = ''
            },
            //格式化日期
            getAllDateTime(date) {
                var str = date.getFullYear() + "-" + this.repairZero(date.getMonth() + 1) + "-" + this.repairZero(date.getDate()) + " " + this.repairZero(date.getHours()) + ":" + this.repairZero(date.getMinutes()) + ":" + this.repairZero(date.getSeconds());
                return str;
            },
            repairZero(num) {
                if (num < 10) {
                    num = "0" + num;
                }
                return num;
            },
            //展开发表评论
            dropdown(index) {
                this.msgs[index].comment_flag = !this.msgs[index].comment_flag;
            },
            //点赞
            giveThumbs(index) {
                this.msgs[index].like_flag = !this.msgs[index].like_flag;
                if (this.msgs[index].like_flag == true) {
                    this.msgs[index].likes += 1
                } else if (this.msgs[index].like_flag == false) {
                    this.msgs[index].likes -= 1
                }
            },
            //转发
            share(index){
                
            }
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
        width: 100%;
        height: 100%;
        /* background: rgb(221, 236, 230); */
        background: #f6f6f6;
        border: 1px solid #000;
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
        border: 1px solid blue;
    }

    .inputbox,
    .messagebox {
        background-color: #fff;
        margin: 5px 50px 10px 50px;
        /* box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
        border-radius: 2px; */
        padding: 5px 30px 5px 30px;
        border: 1px solid #000;
    }

    .word,
    #wangeditor {
        margin-top: 5px;
    }

    .btn {
        margin-top: -60px;
        float: right;
    }

    .btnSubmit {
        width: 100px;
        height: 40px;
        background-color: #51c79f;
        color: #fff;
        text-align: center;
    }

    .messageitem {
        padding: 5px 0px 5px 0px;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
        border-radius: 2px;
        border: 1px solid green;
    }

    .headimage {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        object-fit: cover;
        overflow: hidden;
    }

    .headimagebox {
        float: left;
        width: 12%;
        text-align: center;
        height: 100%;
        border: 1px solid red;
    }

    .infobox {
        float: right;
        width: 88%;
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

    .likebox {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .iconitem {
        width: 33.3%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .icon {
        width: 32px;
    }

    .commentbox {
        width: 100%;
        background: #f5f6f7;
        margin-top: 5px;
    }

    .comment_box {
        width: 100%;
        padding-top: 5px;
    }

    .commentheadimage {
        width: 50px;
        height: 50px;
        /* border-radius: 50%; */
        overflow: hidden;
    }

    .commentheadimagebox {
        float: left;
        width: 12%;
        position: relative;
        /* border: 1px solid red; */
        text-align: right;
        padding-right: 12px;
    }

    .commentinputbox {
        float: right;
        width: 88%;
        /* border: 1px solid blue; */
    }

    .commentinput {
        min-height: 40px;
        width: 100%;
        resize: vertical;
        padding: 5px;
        border-width: 1px;
        border-style: solid;
        font-size: 14px;
        overflow: hidden;
    }

    .commentbtnbox {
        width: 100%;
        text-align: right;
        float: right;
        margin-top: 10px;
        margin-bottom: 5px;
    }

    .commentmsgbox {
        width: 100%;
    }

    .commentmsgboxitem {
        width: 100%;
        margin-bottom: 5px;
        display: flex;
        flex-direction: column;
    }

    .commentmsg_box {
        width: 100%;
        /* display: flex;
        flex-direction: column; */
    }

    .commentheadimagebox {
        float: left;
        width: 12%;
        text-align: right;
        padding-right: 12px;
    }

    .msgcommentbox {
        float: right;
        padding-top: 5px;
        padding-right: 10px;
        width: 88%;
        font-size: 16px;
        border-bottom: 1px solid #ada5a5;
    }
</style>