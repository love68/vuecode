const fs = require('fs')
const path = require('path')

//1.Promise 是一个构造函数，那么可以 new Promise() 得到一个promise实例
//2.函数：resolve(成功之后的回调函数) reject(失败之后的回调函数)
//3.Promise构造函数的 Prototype 属性上，有一个 .then() 方法
//4.Promise表示一个异步操作
// 4.1异步操作结果只有两种状态：成功，失败（由于是异步操作，内部拿到操作结果后，无法使用return返回给调用者，只能使用回调函数） 

/*var promise = new Promise(function(){
	//这个function内，写具体的异步操作
})*/


/* Promise 解决 回调地狱
*/
function getFileByPath(fpath){
	return new Promise(function(resolve,reject){
		fs.readFile(fpath,'utf-8',(err,dataStr) => {

			if(err) return reject(err)//如果报错，就返回
			resolve(dataStr)

		})
	})
}

/*2.如果前面的 Promise 执行失败，不让后续的 Promise 继续执行(.catch)
*/
getFileByPath('./files/3.txt')
	.then(function(data) {
		console.log(data)
		return getFileByPath('./files/21.txt')
	})
	.then(function(data){
		console.log(data)
		return getFileByPath('./files/1.txt')
	})
	.then(function(data){
		console.log(data)
	})
	.catch(function(err){ // catch 的作用： 如果前面有任何的 Promise 执行失败，则立即终止所有 promise 的执行，并 马上进入 catch 去处理 Promise中 抛出的异常；
		console.log(err.message)
	})

/*
1.如果前面的 Promise 执行失败，让后续的 Promise 继续执行,指定一个失败的回调

getFileByPath('./files/13.txt')
	.then(function(data) {
		console.log(data)
		return getFileByPath('./files/3.txt')
	},function(err){
		console.log(err.message)
		// return 一个 新的 Promise
		return getFileByPath('./files/3.txt')
	})
	.then(function(data){
		console.log(data)
		return getFileByPath('./files/2.txt')
	})
	.then(function(data){
		console.log(data)
		return getFileByPath('./files/1.txt')
	})
	.then(function(data){
		console.log(data)
	})

*/

/* Promise 使用

function getFileByPath(fpath){
	return new Promise(function(resolve,reject){
		fs.readFile(fpath,'utf-8',(err,dataStr) => {

			if(err) return reject(err)//如果报错，就返回
			resolve(dataStr)

		})
	})
}

getFileByPath('./files/3.txt')
	.then(function(data) {
		console.log(data)
	},function(err) {
		console.log(err.message)
	})

*/