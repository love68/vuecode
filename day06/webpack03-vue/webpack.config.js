var path = require('path')

var htmlWebpackPlugin = require('html-webpack-plugin')
var VueLoaderPlugin = require('vue-loader/lib/plugin')//3.配置插件

module.exports = {
	entry: path.join(__dirname,'./src/main.js'),
	output: {
		path: path.join(__dirname,'./dist'),
		filename: 'bundle.js'
	},
	mode: 'development',
	plugins: [
		new htmlWebpackPlugin({
			template:path.join(__dirname,'./src/index.html'),
			filename:'index.html'
		}),
		new VueLoaderPlugin()
	],
	module : {
		rules : [
			{test: /\.css$/,use: ['style-loader','css-loader']},
			{test: /\.vue$/,use: ['vue-loader']}
		]
	},
	resolve: {
	    alias: { // 修改 Vue 被导入时候的包的路径
	       "vue$": "vue/dist/vue.js"
	    }
	}
}
