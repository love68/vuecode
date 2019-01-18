import VueRouter from 'vue-router'

import account from './main/Account.vue'
import goodslist from './main/Goodslist.vue'

import login from './subcom/Login.vue'
import register from './subcom/Register.vue'

var router = new VueRouter({
	routes : [
		{path: '/', redirect : account},
		{path: '/account', 
		component: account,
		children : [
			{path: 'login', component: login},
			{path: 'register', component: register}
		]
		},
		{path: '/goodslist', component: goodslist}
	]
})

export default router
