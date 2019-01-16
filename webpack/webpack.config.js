const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules:
            [
                {test: /\.css$/, use: ['style-loader', 'css-loader']},
                {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader'},
                {test: /\.vue$/, use: 'vue-loader'},
                {test: /.js$/, use: 'babel-loader', exclude: /node_modules/}
            ]
    },
    /*配置vue*/
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    mode: 'development'
}