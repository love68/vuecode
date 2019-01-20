import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

/*
   vuex 使用
   
   1.安装  cnpm i vuex -S
   2.导入包
   3.注册vuex到vue中
   4.new Vuex.Store() 实例，得到一个 数据仓储对象
   5.将 store 挂载到vm实例上
 * */
import Vuex from 'vuex'
Vue.use(Vuex)

var store = new Vuex.Store({
	//  state : 就像组件中的 data ,专门用来存储数据的
    // 组件中，想要访问，store 中的数据，只能通过 this.$store.state.*** 来访问
	state : {
		count : 0
	},
	mutations : {
		// 注意： 如果要操作 store 中的 state 值，只能通过 调用 mutations 提供的方法，才能操作对应的数据
		// 不推荐直接操作 state 中的数据，因为 万一导致了数据的紊乱，不能快速定位到错误的原因，因为，每个组件都可能有操作数据的方法；
		add() {
			this.state.count++
		},
		// 注意： 如果组件想要调用 mutations 中的方法，只能使用 this.$store.commit('方法名')
		 // 注意： mutations 的 函数参数列表中，最多支持两个参数，其中，参数1： 是 state 状态； 参数2： 通过 commit 提交过来的参数；
		sub(state,num) {
			state.count -= num
		}
	},
	 // 注意：这里的 getters， 只负责 对外提供数据，不负责 修改数据，
	getters : {
		objCount : function(state) {
			return "这是最新的数据：" + state.count;
		}
	}
})

import App from './App.vue'

var vm = new Vue({
	el : "#app",
	data : {},
	methods : {},
	render : c => c(App),
	store
})
