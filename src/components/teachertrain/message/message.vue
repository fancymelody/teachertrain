<template>
    <div class="message">
        <nav class="navbar navbar-default" role="navigation">
        <ul class="nav navbar-nav">
            <router-link class="active" :to="{name:'inform'}" exact tag="li" >
                <a>通知</a>
            </router-link>
            <router-link  :to="{name:'news'}" tag="li">
                <a>消息</a>
            </router-link>
        </ul>
        </nav>
            <transition class="content">
                <router-view></router-view>
            </transition>
    </div>
</template>
<script>

</script>
<style>
    .nav.navbar-nav{
        margin-left: 500px;
        font-size: 20px;
    }

.v-enter{
  opacity: 0;
}
.v-enter-to{
  opacity: 1;
}
.v-enter-active{
  transition: 1s;
}
</style>