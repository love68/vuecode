const path = require('path')

var VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	entry : path.join(__dirname,'./src/main.js'),
	output : {
		path : path.join(__dirname,'./dist'),
		filename : 'bundle.js'
	},
	mode : 'development',
	plugins : [
		new VueLoaderPlugin()
	],
	module : {
		rules : [
			{test : /\.css$/, use : ['style-loader','css-loader']},
			{test : /\.vue$/, use : 'vue-loader'},
			{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
		]
	},
	resolve : {
		alias : {
			"vue$" : "vue/dist/vue.js"
		}
	}
}
