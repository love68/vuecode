const path = require('path')

//2.1
// 导入在内存中生成 HTML 页面的 插件
// 只要是插件，都一定要 放到 plugins 节点中去
// 这个插件的两个作用：
//  1. 自动在内存中根据指定页面生成一个内存的页面
//  2. 自动，把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry:path.join(__dirname,'./src/main.js'),
	output:{
		path:path.join(__dirname,'./dist'),
		filename:'bundle.js'
	},
	mode:'development',
	module: {
		rules: [
			{test: /\.css$/, use: ['style-loader','css-loader']},//配置处理 .css 文件的第三方loader规则
			{test: /\.less$/, use: ['style-loader','css-loader','less-loader']},
			{test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']},
		]
	},
	plugins:[
		//2.2
		new htmlWebpackPlugin({//创建一个在内存中生成html页面的插件
			template: path.join(__dirname,'./src/index.html'),//指定模板页面
			filename: 'index.html'//指定生成的页面名称
		})
	]
}
