const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry:path.join(__dirname,'./src/main.js'),
	output:{
		path:path.join(__dirname,'./dist'),
		filename:'bundle.js'
	},
	mode:'development',
	plugins:[
		new htmlWebpackPlugin({
			template: path.join(__dirname,'./src/index.html'),
			filename: 'index.html'
		})
	],
	module:{
		rules: [
			{test: /\.css$/,use: ['style-loader','css-loader']},
			{test: /\.(jpg|jpeg|png|gif|bmp)/,use: ['url-loader']},//处理图片
			{test: /\.(ttf|eot|svg|woff|woff2)/,use: ['url-loader']},//处理字体文件
		]
	}
}
