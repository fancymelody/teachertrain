<template>
    <div class="articlestudying">
        <div class="title">
            <h1>{{title}}</h1>
        </div>
        <div class="btnbox">
            <img :src="imgSrc" class="headimage">
            <span>{{label}}|{{time}}</span>
        </div>
        <div class="content">
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'articlestudying',
        data() {
            return {
                title: "浅谈青少年的心理特征与心理健康教育",
                imgSrc: this.$store.state.url + 'teachertrain/article/headimage.jpg',
                label: "青少年心理学",
                time: "2019-1-1",
            }
        },
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>