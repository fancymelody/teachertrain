<template>
    <div class="articlestudying" :style="bg">
        <div class="title">
            <h1 class="content_title">{{title}}</h1>
        </div>
        <div class="introduction">
            <img :src="imgSrc" class="headimage">
            <span>{{label}}|{{time}}</span>
        </div>
        <div class="content">
            <div class="paragraph" v-for="item in paragraphs">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{{item}}</p>
            </div>
        </div>
        <div class="btnbox">
            <button class="btn"><span>完成阅读</span></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'articlestudying',
        data() {
            return {
                bg:{
                    backgroundImage: "url(" + require("../../../../static/images/teachertrain/article/bg3.jpg") + ")",
                    backgroundRepeat: "repeat",
                },
                title: "浅谈青少年的心理特征与心理健康教育",
                imgSrc: this.$store.state.url + 'teachertrain/article/headimage.jpg',
                label: "青少年心理学",
                time: "2019-1-1",
                paragraph: "中小学心理健康教育是根据中小学生生理、心理发展特点，运用有关心理教育方法和手段，培养学生良好的心理素质，促进学生身心全面和谐发展和素质全面提高的教育活动，是素质教育的重要组成部分，是实施《面向21世纪教育振兴行动计划》，落实跨世纪素质教育工程，培养跨世纪高质量人才的重要环节。",
                paragraphs: [
                    '中小学心理健康教育是根据中小学生生理、心理发展特点，运用有关心理教育方法和手段，培养学生良好的心理素质，促进学生身心全面和谐发展和素质全面提高的教育活动，是素质教育的重要组成部分，是实施《面向21世纪教育振兴行动计划》，落实"跨世纪素质教育工程"，培养跨世纪高质量人才的重要环节。',
                    '《中共中央国务院关于深化教育改革全面推进素质教育的决定》中明确指出，要“加强学生的心理健康教育，培养学生坚韧不拔的意志、艰苦奋斗的精神，增强青少年适应社会生活的能力。”中小学开展心理健康教育，既是学生自身健康成长的需要，也是社会发展对人的素质要求的需要。',
                    '近年来，由于社会发展带来的种种变化，我国学校教育和儿童发展事业受到了冲击和挑战。调查表明，在我国中小学生中间，约1/5左右的儿童青少年都存在着不同程度的心理行为问题，如厌学、逃学、偷窃、说谎、作弊、自私、任性、耐挫力差、攻击、退缩、焦虑、抑郁等等种种外显的和内隐的心理行为问题。这些心理行为问题不但严重地影响着儿童青少年自身的健康发展，而且也给正常的教育教学工作带来巨大的困扰，直接影响学校教育任务的完成与教育目标的实现。',
                ],
            }
        },
        methods: {
            onClick() {
                this.$router.push('/teachertrain/articlestudying');
            }
        },
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .articlestudying {
        width: 60%;
        margin: 1px auto;
    }

    .headimage {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        overflow: hidden;
    }

    .title {
        margin-top: 10px;
        margin-bottom: 20px;
        /* border: 1px solid #000; */
    }

    .content_title {
        font-size: 26px;
        font-weight: bold;
        line-height: 26px;
        height: 26px;
        max-height: 26px;
        overflow: hidden;
        white-space: nowrap;
    }

    .introduction {
        font-size: 16px;
        margin-bottom: 10px;
    }

    p {
        font-size: 20px;
    }

    .btnbox {
        margin: 10px auto;
        text-align: center;
    }

    .btn {
        border-radius: 5px;
        background-color: #51c79f;
        color: #fff;
    }
</style>