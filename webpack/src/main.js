import $ from 'jquery'

import './css/index.css'

/*
import Vue from '../node_modules/vue/dist/vue.js'
*/

import Vue from 'vue'

/*import demo from './js/demo'
import {person} from './js/demo'*/

$(function () {
    $("li:odd").css("backgroundColor","cyan");
    $("li:even").css("backgroundColor",function () {
        return "yellow"
    })
})

import demo from './template/demo.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import account from './template/Account.vue'
import info from './template/Info.vue'
import login from './template/Login.vue'
import register from './template/Register.vue'


/*console.log(demo)
console.log(person)*/

let router = new VueRouter({
    routes:[
        {path :"/account"
            ,component:account,
            children:[
                {path:'login',component:login},
                {path:'register',component:register}
            ]
        },
        {path :"/info",component:info}
    ]
})

let vm = new Vue({
    el:"#app",
    data:{
        msg:"这是一条消息"
    },
    render:function (c) {
        return c(demo);
    },
    router
})
