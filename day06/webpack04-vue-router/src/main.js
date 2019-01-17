import Vue from 'vue'
//1.导入vue-router包
import VueRouter from 'vue-router'
//2.手动安装VueRouter
Vue.use(VueRouter)

import app from './App.vue'

import router from './router.js'

//3.创建路由对象（router.js）

var vm = new Vue({
	el : "#app",
	data : {},
	methods : {},
	render : c => c(app),
	router//4.将路由对象挂载到vm上
})
