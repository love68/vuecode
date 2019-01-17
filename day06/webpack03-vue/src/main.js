
//引入vue包： 方式一  
//1.1:import Vue from 'vue'
//1.2：webpack.config.js 中配置  resolve : { alias : { "vue$": "vue/dist/vue.js"} }
import Vue from 'vue'

//：方式二 import Vue from '../node_modules/vue/dist/vue.js'
//：方式三 略

//1.导入 login 组件
import login from './login.vue'

var vm = new Vue({
	el : "#app",
	data : {
		msg : "我是一条小数据，我在main.js里面"
	},
	methods : {},
	//2.render函数 将组件 显示到页面中
	/*render : function(createElements){
		return createElements(login)
	}*/
	render: c => c(login)//简写
})

//as 取别名
import info,{title as title123,content} from './test.js'
console.log(info.name+ "-----------"+info.age)
console.log(title123+"-----------"+content)







