import $ from 'jquery'

import './css/index.css'

/*webpack 只能默认打包处理JS文件
	!、要打包处理css : cnpm i style-loader css-loader -D
	2、webpack.config.js中配置mudule节点
*/
import './css/index.less'
import './css/index.scss'

$(function () {
    $("li:odd").css("backgroundColor","yellow");
    $("li:even").css("backgroundColor",function () {
        return "pink"
    })
})

