<template>
    <div>
        <h3>
            {{msg}}
        </h3>

        <!--<router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>

        <router-view></router-view>-->

        <login :info="msg1" @func="show"></login>

    </div>
</template>

<script>
    import login from './Login.vue'

    export default {
        data:function(){
            return{
                msg:"这是account组件，父组件",
                msg1:'传递的消息',
                sonMsg:""
            }
        },
        methods:{
            show(data){
                this.sonMsg = data;
                console.log(this.sonMsg);
                this.msg = data;
            }
        },
        components:{
            login
        }
    }
</script>

<style>

</style>