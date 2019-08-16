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
    import {mapGetters} from 'vuex'
    export default {
        components: {
            situation
        },
        data() {
            return {
                classes: [
                    {
                        name: "Vue",
                        content: this.$store.getters.getView
                    },
                    {
                        name: "Flutter",
                        content: this.$store.getters.getView
                    }
                ]
            }
        },
        

    }
</script>