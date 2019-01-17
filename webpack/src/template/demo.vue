<template>
    <div>
        <h1>{{msg}}</h1>
        <router-link to="/account">账户</router-link>
        <router-link to="/info">个人信息</router-link>
        <router-view></router-view>
    </div>

</template>

<script>
   export default {
       data (){
            return {
                msg:'这是通过vue文件方式创建的'
            }
        }
   };
</script>

<style>

</style>