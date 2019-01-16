# vue基础

## 指令

- v-text和{{}}的区别:
  1. v-text没有插值闪烁的问题,会覆盖标签里的内容
  2. {{}}只会替换自己的位置，相当于占位符，有插值闪烁的问题，解决v-cloak

```html
[v-cloak] {
  /* display: none; */
}
    
<p v-cloak>{{msg}}</p>    
```

- v-text和v-html的区别

  > v-text会把字符串原样输出，而v-html会解析html标签

- v-bind

  > v-bind是属性绑定，单向绑定,从 M 自动绑定到 V。可以绑定class、value等，标签必须要有属性才能用，绑定的是标签的属性。

- v-model

  > 数据的双向绑定，但是只能用在表单标签中。



## 事件修饰符

- stop:阻止事件冒泡

  ```html
  <div id="app" :class="['innerDiv']" @click="div">
  		<!-- 阻止事件冒泡 -->
  		<input type="button" value="点击" name="btn" @click.stop="btn">
  </div>
  ```

  ​

- self：只有点击当前元素时候，才会触发事件处理函数，可以阻止自己的事件冒泡

- once 只触发一次事件处理函数

  ```html
  <a href="http://www.baidu.com" @click.once="linkClick">有问题，先去百度</a>
  ```

  > 上面的linkClick函数只会在第一次点击的时候触发一次

- prevent 阻止默认行为

  ```html
  <a href="http://www.baidu.com" @click.prevent ="linkClick">有问题，先去百度</a>
  ```

  > 点击上面的超链接，只会出发linkClick函数，而不会跳转页面

- ## capture添加事件侦听器时使用事件捕获模式

  > 给元素添加一个监听器，当元素发生冒泡时，先触发带有该修饰符的元素。若有多个该修饰符，则由外而内触发。

  ```html
  <div id="app" :class="['innerDiv']" @click.capture="div">
  		<!-- 阻止事件冒泡 -->
  		<input type="button" value="点击" name="btn" @click="btn">
  	</div>
  ```

  > 不加capture时，触发函数的顺序是 btn -> innerDiv；如果给div加了.capture，那么触发函数的顺序会变成 innerDiv->btn；如果都加，由外而内innerDiv->btn；如果只给btn加，那么函数的触发顺序是 btn -> innerDiv。


## 组件

- 父组件的代码

  ```
  <template>
      <div>
          <h3>
              {{msg}}
          </h3>
          
      </div>
  </template>

  <script>
     
  </script>

  ```

- 子组件中的代码

  ```vue
  <template>
      <div>
          <h3>
              登录组件++++
          </h3>
      </div>
  </template>

  <script>
  export default {
  }
  </script>

  ```

  ​

### 父组件向子组件传递消息

1. 父组件中的配置

   ```vue

   <login :info="msg1"></login>

   <script>
     import login from './Login.vue'
       export default {
           data:function(){
               return{
                   msg:"这是account组件，父组件",
                   msg1:'传递的消息'
               }
           },
           components:{
               login#注册组件
           }
       }
   </script>
   ```

2. 子组件中接收消息

   ```vue
   <template>
       <div>
           <h3>
               登录组件++++
           </h3>
           <p>{{info}}</p>
       </div>
   </template>

   <script>
   export default {
       data(){
           return {
               mes:"子组件中的消息"
           }
       },
       props:['info']#定义属性接收父组件中的消息
   }
   </script>

   ```

### 子组件向父组件传递消息

1. 父组件中的配置

```vue
<template>
    <div>
      <!-- 通过事件绑定机制传递消息，在父组件中定义的方法，子组件可以通过特殊的方式调用 -->
        <login @func="show"></login>
    </div>
</template>

<script>
    import login from './Login.vue'

    export default {
        data:function(){
            return{
                sonMsg:""#定义一个属性，接收子组件的消息
            }
        },
        methods:{
          show(data){
              this.sonMsg = data;
              console.log(this.sonMsg);
              this.msg = data;
          }
        },
        components:{
            login
        }
    }
</script>

<style>

</style>
```

2. 子组件中的配置

```vue
<template>
    <div>
      <!-- 点击按钮调用myshow方法 -->
         <input type="button" value="弹弹" @click="myshow">
    </div>
</template>

<script>
export default {
    data(){
        return {
            mes:"子组件中的消息"
        }
    },
    methods:{
        myshow(){
            console.log("子组件的方法");
          # 通过这个方法传递给父组件消息，实际调用了父组件的show方法
          # func要和父组件中绑定的事件名称相同  
          this.$emit("func",this.mes);
        }
    }
}
</script>

<style>

</style>
```

# webpack

## 第三方loader的使用

### 处理css、less、scss

- cnpm i style-loader css-loader --save-dev
- cnpm i less-loader less -D
- cnpm i sass-loader node-sass --save-dev
- 修改webpack.config.js文件

```javascript
module: { 
    rules: [ 
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 处理 CSS 文件的 loader
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 处理 less 文件的 loader
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 处理 scss 文件的 loader
    ]
  }
```

### 处理图片、字体文件

- cnpm i url-loader file-loader --save-dev

- 配置处理图片

  ```javascript
  module:{
    rules:[
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' }, // 处理 图片路径的 loader
    ]
  }
  ```

  > 后面的参数limit限制图片大小，单位是字节；
  >
  > name配置是否按原文件名显示，默认会用文件名的hash值，如上配置是取hash值得前8位
  >
  > [.ext]  源文件的扩展名

- 配置处理字体

  ```javascript
  { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }
  ```

## 使用bebel处理js的高级语法

1. 运行`cnpm i babel-core babel-loader@7 babel-plugin-transform-runtime --save-dev`安装babel的相关loader包

2. 运行`cnpm i babel-preset-env babel-preset-stage-0 --save-dev`安装babel转换的语法

3. 在`webpack.config.js`中添加相关loader模块，其中需要注意的是，一定要把`node_modules`文件夹添加到排除项：

   > { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }

4. 在项目根目录中添加`.babelrc`文件，并修改这个配置文件如下

   ```javascript
   {
       "presets":["env", "stage-0"],
       "plugins":["transform-runtime"]
   }
   ```

## 在webpack中使用vue

### 安装

> npm i vue -S

### 导入

```
第一种方式：
import Vue from '../node_modules/vue/dist/vue.js'
第二种方式
	import Vue from 'vue'
	在webpack.config.js文件中配置
	resolve:{
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    }
```

### 使用.vue的方式创建模板

```
需要安装第三方loader
cnpm i vue-loader vue-template-compiler -D
还需安装bebel、css和style的loader
在webpack.config.js文件中配置
const VueLoaderPlugin = require('vue-loader/lib/plugin');
plugins: [
        new VueLoaderPlugin()
]
```

## 使用vue-router

### 安装

> npm i install vue-router -S

### 使用

```javascript
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import account from './template/Account.vue'
import info from './template/Info.vue'
import login from './template/Login.vue'
import register from './template/Register.vue'

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

```



# 安装命令

- ### npm install moduleName

  ```
  1. 安装模块到项目node_modules目录下。
  2. 不会将模块依赖写入devDependencies或dependencies 节点。
  3. 运行 npm install 初始化项目时不会下载模块
  ```

- npm install -g moduleName 命令

  ```
  1. 安装模块到全局，不会在项目node_modules目录中保存模块包。
  2. 不会将模块依赖写入devDependencies或dependencies 节点。
  3. 运行 npm install 初始化项目时不会下载模块。
  ```

- ### npm install -save moduleName 命令 -S

  ```
  1. 安装模块到项目node_modules目录下。
  2. 会将模块依赖写入dependencies 节点。
  3. 运行 npm install 初始化项目时，会将模块下载到项目目录下。
  4. 运行npm install --production或者注明NODE_ENV变量值为production时，会自动下载模块到node_modules目录中
  ```

- ### npm install -save-dev moduleName 命令 -D

  ```
  1. 安装模块到项目node_modules目录下。
  2. 会将模块依赖写入devDependencies 节点。
  3. 运行 npm install 初始化项目时，会将模块下载到项目目录下。
  4. 运行npm install --production或者注明NODE_ENV变量值为production时，不会自动下载模块到node_modules目录中。
  ```

`总结`

> devDependencies 节点下的模块是我们在开发时需要用的，比如项目中使用的 gulp ，压缩css、js的模块。这些模块在我们的项目部署后是不需要的，所以我们可以使用 -save-dev 的形式安装。像 express 这些模块是项目运行必备的，应该安装在 dependencies 节点下，所以我们应该使用 -save 的形式安装。

# js相关

## export和export default

```
export default 在一个模块中，只能暴露一个对象；
export 可以暴露多次，必须严格按照导出时候的名称，来使用  {}  按需接收 import {person} from './js/demo'
```

`补充`

> 在Node中 使用 var 名称 = require('模块标识符')
>  module.exports 和 exports 来暴露成员

# nrm的安装使用

作用：提供了一些最常用的NPM包镜像地址，能够让我们快速的切换安装包时候的服务器地址；

命令：

1. 运行`npm i nrm -g`全局安装`nrm`包；
2. 使用`nrm ls`查看当前所有可用的镜像源地址以及当前所使用的镜像源地址；
3. 使用`nrm use npm`或`nrm use taobao`切换不同的镜像源地址；