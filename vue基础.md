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

