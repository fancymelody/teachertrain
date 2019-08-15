<template>
    <div class="Homework">
        <div class="container">
            <!--时间倒计时-->
            <div class="timecountdown">
                <span>{{minutes}}:{{seconds}}</span>
            </div>
            <!-- 进度条 -->
            <div class="progress">
                <div class="progress-bar bg-success" role="progressbar"
                    v-bind:style="{width:((quizProgress)*100/quiz.length)+'%'}" aria-valuenow="25" aria-valuemin="0"
                    aria-valuemax="100">
                    进行中
                </div>
            </div>
            <!-- 单选题 -->
            <div class="radiochoice" v-if="quizProgress<quiz.length">
                <h1 style="font-weight: bold;">第{{quiz[quizProgress].quizId}}题</h1>
                <div class="title">
                    <span class="subject">
                        {{quiz[quizProgress].subject}}
                    </span>
                </div>
                <!-- 选项 -->
                <div class="options" v-for="(item,index) in quiz[quizProgress].items">
                    <label class="radio">
                        <input name="radioOption" type="radio" class="original" v-model="ans"
                            v-bind:value="itemsValue[index]">
                        <span class="new">
                            {{itemsValue[index]}}&nbsp;&nbsp;{{item}}
                        </span>
                    </label>
                </div>
                <!-- <div class="options" v-for="(item,index) in quiz[quizProgress].items">
            <label class="radiolabel" id="dark">
              <input class="radio" type="radio" name="radio" v-model="ans" v-bind:value="itemsValue[index]">
              <span class="txt">{{itemsValue[index]}}&nbsp;&nbsp;{{item}}</span>
            </label>
          </div> -->
                <!-- 按钮 -->
                <div class="btnbox">
                    <button class="btn" @click="preview()"><span>上一题</span></button>
                    <button class="btn" @click="next()"><span>下一题</span></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Homework',
        data() {
            return {
                quiz: [
                    {
                        quizId: 1,
                        subject: 'E-R图是数据库设计的工具之一，它适用于建立数据库的().',
                        items: ['结构模型', '物理模型', '逻辑模型', '概念模型'],
                        answer: 'D',
                    },
                    {
                        quizId: 2,
                        subject: '最长的河？',
                        items: ['亚马逊', '尼罗河', '黄河', '莱茵河'],
                        answer: 'A',
                    },
                    {
                        quizId: 3,
                        subject: '市值最高的公司？',
                        items: ['中国移动', '阿里巴巴', '可口可乐', '苹果'],
                        answer: 'D',
                    }
                ],
                //完成的题
                quizProgress: 0,
                itemsValue: ['A', 'B', 'C', 'D'],
                ans: '', //选择的答案
                answers: new Map(),
                score: 0,
                minutes: 0,
                seconds: 10,
                // size: quiz.length,
            }
        },
        methods: {
            preview() {
                if (this.quizProgress > 0 && this.quizProgress <= this.quiz.length) {
                    this.quizProgress--;
                    this.ans = this.answers.get(this.quizProgress);
                }
            },
            next() {
                console.log(this.quizProgress < this.quiz.length)
                console.log(this.quizProgress)
                console.log(this.quiz.length)

                if (this.quizProgress < this.quiz.length - 1) {
                    this.answers.set(this.quizProgress, this.ans);
                    this.quizProgress++;
                    console.log(this.answers);
                    this.ans = '';
                } else if (this.quizProgress == this.quiz.length - 1) {
                    console.log("结束");
                    if (confirm("你确定提交吗？")) {
                        // alert("点击了确定");
                        this.$router.push('/result');
                    }
                    else {
                        alert("点击了取消");
                    }
                }
                console.log("----");
            },
            // 倒计时
            num(n) {
                return n < 10 ? '0' + n : '' + n
            },
            timer() {
                var _this = this
                var time = window.setInterval(function () {
                    if (_this.seconds === 0 && _this.minutes !== 0) {
                        _this.seconds = 59
                        _this.minutes -= 1
                    } else if (_this.minutes === 0 && _this.seconds === 0) {
                        _this.seconds = 0
                        window.clearInterval(time)

                        console.log("时间超时");
                        //弹出一个对话框
                        alert("时间超时");

                         //this.$router.push('/result');
                        //  window.location.href="#/result"
                        window.location.href="/result"

                    } else {
                        _this.seconds -= 1
                    }
                }, 1000)
            },
        },
        mounted() {
            this.timer()
            // this.isFinish()
        },
        watch: {
            second: {
                handler(newVal) {
                    this.num(newVal)
                }
            },
            minute: {
                handler(newVal) {
                    this.num(newVal)
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container {
        width: 80%;
        margin: 10px auto;
        border: 1px solid #000;
        text-align: center;
    }

    .title {
        margin: 20px 0px;
    }

    .subject {
        font-size: 22px;
        font-family: Arial, Helvetica, sans-serif;
    }

    .txt {
        font-size: 20px;
    }

    .btn {
        border-radius: 5px;
        width: 150px;
        margin: 10px 0px;
        background-color: #51c79f;
        color: #fff;
    }

    .options {
        margin: 5px auto;
    }

    .timecountdown {
        font-size: 18px;
        margin: 10px 0;
    }

    /* 优化单选按钮 */
    /*给原始的复选框和单选按钮设置样式*/
    input[type=radio].original {
        opacity: 0;
        z-index: 1;
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    /*给新的复选框和单选按钮设置同样的大小*/
    input[type=radio].original+.new {
        display: inline-block;
        margin: 0;
        line-height: 22px;
        min-height: 20px;
        min-width: 20px;
        font-weight: normal;
        cursor: pointer;
    }

    /*把原始的复选框和单选按钮彻底隐藏起来*/
    label input[type=radio].original {
        z-index: -100 !important;
        width: 0 !important;
        height: 0 !important;
    }

    /*彻底去掉原始的复选框和单选按钮选中时的边框轮廓*/
    input[type=radio].original:checked,
    input[type=radio].original:focus {
        outline: none !important;
    }


    /*新的复选框和单选按钮公共样式*/
    input[type=radio].original+.new::before {
        cursor: pointer;
        font-family: fontAwesome;
        font-weight: normal;
        font-size: 18px;
        color: #32a3ce;
        content: "\a0";
        background-color: #FAFAFA;
        border: 1px solid #c8c8c8;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 0;
        display: inline-block;
        text-align: center;
        height: 18px;
        line-height: 18px;
        min-width: 18px;
        margin-right: 1px;
    }

    /*新的单选按钮单独样式*/
    input[type=radio].original+.new::before {
        border-radius: 100%;
        font-size: 18px;
        text-shadow: 0 0 1px #32a3ce;
        line-height: 16px;
        height: 17px;
        min-width: 17px;
    }

    /*新的复选框和单选按钮hover时边框的样式*/
    input[type=radio].original:hover+.new::before,
    input[type=radio].original+.new:hover::before {
        border-color: #ff893c;
    }

    /*新的复选框选中的样式*/
    input[type=radio].original:checked+.new::before {
        display: inline-block;
        content: '\f00c';
        background-color: #f9a021;
        border-color: #f9a021;
        color: #FFF;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0 -15px 10px -12px rgba(0, 0, 0, 0.05), inset 15px 10px -12px rgba(255, 255, 255, 0.1);
    }

    /*新的单选按钮选中的样式*/
    input[type=radio].original:checked+.new::before {
        content: "\f111";
        color: #32a3ce;
        background-color: #FAFAFA;
    }

    .new {
        font-size: 20px;
    }
</style>