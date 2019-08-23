<template>
    <div class="result">
        <div class="left col-lg-5">
            <div class="table">
                <div class="grade" style="font-size: 18px;">得分：{{score}}</div>
                <div class="link"></div>
                <div class="list">
                    <div class="tag" v-for="index in num" @click="checkDetails(index)"
                        :style="{'background-color':quiz[index-1].answer==quiz[index-1].pickAnswer?'green':'red'}">{{index}}
                    </div>
                </div>
            </div>
        </div>
        <div class="right col-lg-6">
            <div class="question">
                <div class="topic">
                    <h4>{{content}}</h4>
                </div>
            </div>
            <div class="display">
                <span class="rights col-lg-6">正确答案:&nbsp;&nbsp;{{answer}}</span>
                <span class="wrong col-lg-6" :style="{'color':color}">您的答案：&nbsp;&nbsp;{{pickAnswer}}</span>
            </div>
            <div class="analyze"></div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                content: "",
                answer: '',//正确答案
                pickAnswer: '',//所选答案
                score:'',
                color: '',
                num:'',
                // answerList: ['A', 'B', 'C'],
                quiz:'',
                // currentList: ['A', 'B', 'A'],
                // question: [
                //     {
                //         problem: "-R图是数据库设计的工具之一，它适用于建立数据库的().",
                //     },
                //     {
                //         problem: "R图是数据库设计的工具之一，它适用于建立数据库的().",
                //     },
                //     {
                //         problem: "E-R图是数据库设计的工具之一，它适用于建立数据库的().",
                //     }
                // ],

            }
        },
        methods: {
            // checkDetails(index) {
            //     var i = index - 1;
            //     if (this.question[i]) { this.content = this.question[i].problem }
            //     else {
            //         this.content = ""
            //     };
            //     this.answer = this.answerList[i];
            //     this.current = this.currentList[i];
            //     if (this.answerList[i] == this.currentList[i]) {
            //         this.color = "green";
            //     } else {
            //         this.color = "red";
            //     }

            // }
            checkDetails(index){
                var i = index - 1;
                if (this.quiz[i]) { this.content = this.quiz[i].subject }
                else {
                    this.content = ""
                };
                this.answer = this.quiz[i].answer;
                this.pickAnswer = this.quiz[i].pickAnswer;
                if (this.quiz[i].answer == this.quiz[i].pickAnswer) {
                    this.color = "green";
                } else {
                    this.color = "red";
                }

            }
        },
        created: function () {
            this.quiz=this.$route.query.quiz
            this.score=this.$route.query.score
            this.num=this.quiz.length
            console.log(this.score)
            console.log(this.quiz)
        }
    };
</script>
<style>
    .left {
        height: auto;
        border: solid;
        border-width: 1px;
        border-color: #858784;
        border-radius: 5px;
        padding-bottom: 20px;
        padding-top: 10px;
        box-shadow: 7px 2px 14px #858784;
    }

    .grade {
        margin-left: 20px;
    }

    .link {
        width: 100%;
        height: 1px;
        border-top: solid #ACC0D8 1px;
    }

    .tag {
        display: inline-block;
        border: solid;
        border-width: 1px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        text-align: center;
        padding-top: 10px;
        margin-left: 40px;
        margin-top: 20px;
    }

    .right {
        height: 100%;
        border: solid;
        border-color: #858784;
        border-radius: 5px;
        border-width: 1px;
        margin-left: 10px;
        padding-bottom: 20px;
        box-shadow: -2px -1px 14px #858784;
    }

    .question {
        /* height: 200px; */
        padding-left: 20px;
        margin-bottom: 50px;
    }

    .display {
        border-width: 1px;
        border: solid;
        border-color: #000;
        height: 45px;
        font-size: 18px;
    }

    .rights {
        border-right: solid;
        border-color: #000;
        height: 100%;
        color: green;
        padding-top: 5px;
        padding-left: 20px;
    }

    .wrong {
        padding-top: 5px;
        padding-left: 20px;
    }
</style>