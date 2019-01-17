export default{
    name:"张三"
}
export let person = {
    name:"李四"
}
/**
 export default 在一个模块中，只能暴露一个对象；
 export 可以暴露多次，必须严格按照导出时候的名称，来使用  {}  按需接收 import {person} from './js/demo'
 */