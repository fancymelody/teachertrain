<template>
    <div class="community">
        <div class="communitycontent">
            <div class="left">
                <div class="inputbox">
                    <div class="word">
                        <span class="txt">有什么事想分享给大家</span>
                    </div>
                    <div class="messageinput">
                        <textarea class="input" title="输入框" name="input">
                        </textarea>
                    </div>
                    <div class="btn">
                        <div class="uploadpic">
                            <label for="fileinp">
                                <input type="button" id="btn" value="点我上传"><span id="text">请上传图片</span>
                                <input class="inputpic" type="file" name="inputpic" id="inputpic"
                                    accept="image/gif,image/jpeg,image/jpg,image/png" @change="changeImage($event)">
                                <!-- <input type="file" id="fileinp"> -->
                            </label>
                            <!-- <input class="inputpic" type="file" name="inputpic" id="inputpic"
                                accept="image/gif,image/jpeg,image/jpg,image/png" @change="changeImage($event)"> -->
                        </div>
                        <div class="submitbtn">
                            <button class="btnSubmit" type="submit">发布</button>
                        </div>
                    </div>
                </div>
                <div class="messagebox">
                    <div class="messageitem">
                        1
                    </div>
                    <div class="messageitem">
                        2
                    </div>
                    <div class="messageitem">
                        3
                    </div>
                </div>
            </div>
            <div class="right">
                推荐的人
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'community',
        data() {
            return {


            }
        },
        methods: {

            onClick() {
                this.$router.push('/homework');
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
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background: rgb(221, 236, 230);
        border: 1px solid #000;
    }

    .communitycontent {
        width: 100%;
        height: 100;
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

    .inputbox {
        background-color: #fff;
        margin: 5px 50px 10px 50px;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
        border-radius: 2px;
        padding: 5px 30px 5px 30px;
    }

    .txt {
        font-size: 18px;
    }

    .input {
        min-height: 100px;
        width: 850px;
        resize: vertical;
        padding: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: #cccccc;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.15) inset;
        font-size: 16px;
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
        width: 80%;
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
    }

    .messageitem {
        margin: 5px 50px 10px 50px;
        padding: 5px 30px 5px 30px;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
        border-radius: 2px;
    }
</style>