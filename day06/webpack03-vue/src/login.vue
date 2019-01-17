<template>
	<div>
		<h1>登录组件---------{{msg}}</h1>
		<input type="button" @click="show" value="登录按钮" />
	</div>
</template>

<script>
	// 在 ES6 中，使用 export default 和 export 向外暴露成员：
	export default{
		data(){
			return {
				msg : "123"
			};
		},
		methods : {
			show(){
				console.log("这是调用了组件中的show方法")
			}
		}
	}
</script>

<style>
	h1 {
		color: orangered;
	}
</style>