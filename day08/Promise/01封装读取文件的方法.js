const fs = require('fs')
const path = require('path')

/*方式二：提高版
*/
function getFileByPath(fpath,succCb,errBc){
	//可以规定：callback 中 第一个参数，失败的结果 第二个参数，成功的结果
	fs.readFile(fpath,'utf-8',(err,dataStr) => {
		if(err) return errBc(err)//如果报错，就返回
		succCb(dataStr)
	})
}

getFileByPath(path.join(__dirname,'./files/2.txt'),function(data) {
	console.log(data)
},function(err){
	console.log(err.message)
})

//先读1.txt 再读2.txt 再读3.txt
//出现问题：回调地狱
//如何解决：ES6 Promise
getFileByPath(path.join(__dirname,'./files/1.txt'),function(data){
	console.log(data)
		getFileByPath(path.join(__dirname,'./files/2.txt'),function(data){
			console.log(data)
		})
			getFileByPath(path.join(__dirname,'./files/3.txt'),function(data){
				console.log(data)
			})
})


/*方式一：

function getFileByPath(fpath,callback){
	//可以规定：callback 中 第一个参数，失败的结果 第二个参数，成功的结果
	fs.readFile(fpath,'utf-8',(err,dataStr) => {
		if(err) return callback(err)//如果报错，就返回
		callback(null,dataStr)
	})
}

getFileByPath(path.join(__dirname,'./files/12.txt'),(err,dataStr) => {
	if(err) return console.log(err.message)
	console.log(dataStr)
})

*/