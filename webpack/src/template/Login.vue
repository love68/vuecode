<template>
    <div>
        <h3>
            登录组件++++
        </h3>
        <p>{{info}}</p>

        <input type="button" value="弹弹" @click="myshow">

    </div>
</template>

<script>
export default {
    data(){
        return {
            mes:"子组件中的消息"
        }
    },
    methods:{
        myshow(){
            console.log("子组件的方法");
            this.$emit("func",this.mes);
        }
    },
    props:['info']
}
</script>

<style>

</style>