<template>
    <div class="condition">
        <ul id="myTab" class="nav nav-tabs">
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    选择课程<span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <li><a data-toggle="tab" :href="'#'+item.name" v-for="(item,index) in classes"
                            :key="index">{{item.name}}</a></li>
                </ul>
            </li>
        </ul>
        <div id="myTabContent" class="tab-content">
            <div :class="index==0?'tab-pane fade in active':'tab-pane fade'" v-for="(item,index) in classes"
                :key="index" :id="item.name">
                <situation :content="item.content"></situation>
            </div>
        </div>
    </div>
</template>
<script>
    import situation from "../utils/situation.vue";
    export default {
        components: {
            situation
        },
        data() {
            return {
                classes: [
                    {
                        name: "Vue",
                        content: [
                            {
                                chapter: "第一章",
                                name: "课程介绍",
                                score: "是",
                                test: "200/200"
                            },
                            {
                                chapter: "1.1",
                                name: "主流框架对比",
                                time: "07分44秒",
                                view: "已观看",
                            },
                            {
                                chapter: "1.2",
                                name: "Flutter超高性能",
                                time: "06分44秒",
                                view: "已观看",
                            },
                            {
                                chapter: "第二章",
                                name: "Flutter开发环境",
                                score: "是",
                                test: "150/200"
                            },
                            {
                                chapter: "2.1",
                                name: "Flutter环境安装",
                                time: "13分05秒",
                                view: "已观看",
                            },
                            {
                                chapter: "2.2",
                                name: "AVD虚拟机的建立",
                                time: "08分35秒",
                                view: "已观看",
                            },
                            {
                                chapter: "2.3",
                                name: "教写HelloWorld程序",
                                time: "12分45秒",
                                view: "已观看",
                            },
                            {
                                chapter: "第三章",
                                name: "Flutter常用组件",
                                score: "/",
                                test: "/"
                            },
                            {
                                chapter: "3.1",
                                name: "TextWidget讲解",
                                time: "11分44秒",
                                view: "/",
                            },
                            {
                                chapter: "3.2",
                                name: "ContainerWidget讲解",
                                time: "16分29秒",
                                view: "/",
                            },
                            {
                                chapter: "3.3",
                                name: "ImageWidget讲解",
                                time: "14分16秒",
                                view: "/",
                            },
                            {
                                chapter: "3.4",
                                name: "ListViewWidget讲解",
                                time: "11分41秒",
                                view: "/",
                            },
                            {
                                chapter: "3.5",
                                name: "横向列表和自定义组件讲解",
                                time: "08分01秒",
                                view: "/",
                            },
                            {
                                chapter: "3.6",
                                name: "动态列表的使用",
                                time: "10分16秒",
                                view: "/",
                            },
                        ]
                    },
                    {
                        name: "Flutter",
                        content: []
                    }
                ]
            }
        }

    }
</script>