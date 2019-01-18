import Vue from 'vue'

import VueRouter from 'vue-router'

//导入bootstrap样式表
import 'bootstrap/dist/css/bootstrap.css'

//导入  mint-ui 组件
import { Button } from 'mint-ui';
//导入mint-ui样式表
import 'mint-ui/lib/style.css'
Vue.component(Button.name, Button);

Vue.use(VueRouter)

//使用 mui 
//导入mui样式表
import './lib/mui/css/mui.min.css'

import router from './router.js'

import app from './App.vue'

var vm = new Vue({
	el : "#app",
	render : c => c(app),
	router
})
