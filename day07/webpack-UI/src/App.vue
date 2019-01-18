<template>
	<div>
		<h1>这是  App 组件</h1>
		
		<router-link to="/account">account</router-link>
		<router-link to="/goodslist">goodslist</router-link>
		
		<!-- mint-ui -->
		<mt-button type="primary" @click="func">primary</mt-button>
		
		<router-view></router-view>
	</div>
</template>

<script>
import { Toast } from 'mint-ui';
	export default {
		data() {
			return {
				toastInstance : null
			};
		},
		methods : {
			func() {
				this.toastInstance = Toast({
				  message: '提示消息',
				  position: 'top',
				  duration: -1,//持续时间，若为-1，则不会关闭
				  iconClass: 'glyphicon glyphicon-ok'//指定图标类
				});
				setTimeout(() => {
				  this.toastInstance.close();
				}, 4000);
			}
		}
	}
</script>

<style>
</style>