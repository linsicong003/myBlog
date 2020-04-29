---
title: Vue原理天天问
date: 2020-04-29
sidebar: auto
sidebarDepth: 2
tags: 
  - Front
  - 前端
  - Vue知识
categories:
  - Front
---

![开篇图](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200429-1.jpg)

## 前言 :cat:

现今的前端世界俨然由 `Vue`、`React` 和 `Angular` 三分天下

但究其本质，`MVVM` 的驱动思想让他们有很多相通的设计，三者熟其一则剩下的只要了解好特性便能很快上手

于这三者而言 `Vue` 我更为熟悉，所以这里以 `Vue` 为引子

为读者开启探索之旅 :smile:

<!-- more -->

## Vue 原理相关 :cat:

这一部分内容虽然平时工作中不会用到，但却是体现开发能力的重中之重。

### Vue 响应式数据的原理是什么

开篇第一个问题，直抵 `MVVM` 设计的核心，探索从样式驱动到数据驱动应用内部的奥秘

我们这里以 `Vue 2.3` 版本的实现为例，

::: tip
在 `Vue2` 中响应式由 `Object.defineProperty` 实现，即将在 `Vue3` 中改为使用 `Proxy` 实现 
:::

![响应式数据过程](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200429-2.jpg)

上面的图我们可以很清楚的看出整个数据更新的流程如下：

- :star: 初始化阶段为视图更新收集好依赖
- :star: 数据更新时触发监听事件
- :star: 监听处理对应更新位置，更新视图

知道了这么一个大概的流程，我们就可以来看看具体的实现了，

在 `Vue2` 中主要使用的是 `Object.defineProperty` 这一个 API 来实现的，

那么我们先来看看文档里的介绍：

![Object.defineProperty](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200429-3.jpg)

具体是这么使用的：

``` javascript
const obj = {};

Object.defineProperty(obj, "key", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static"
});

obj.key  // static
```

清楚了基本使用之后我们来看看一个数据劫持的小栗子：

``` javascript
const defineReactive = (obj, key, val) => {
    Object.defineProperty(obj, key, {
        enumerable: true, // 可枚举
        configurable: true, // 可写
        get: function(val) {
            console.log('get', val);
            return val;
        },
        set: function(val) {
            // 设置时，可以添加相应的操作
            console.log('set', val);
            val += newVal;
        }
    });
}

let obj = { name: '罗小猪', say: '我是时间刺客'}

Object.keys(obj).forEach(item => {
    defineReactive(obj, item, obj[item])
})

console.log(obj.say) // get 我是时间刺客

obj.say = '我要做多人运动'  // set 我要做多人运动

```
结合经典的 `观察-监听者模式` 就实现整个 `Vue` 框架最重要的基石 ———— `响应式数据` 了

这里不对相关设计模式做进一步展开，有兴趣的读者可结合下面的链接中的源码解读体会源码中巧妙的实现

更多内部实现原理推荐看这篇文章 [传送门](https://www.njleonzhang.com/2018/09/26/vue-reactive.html)

### Vue 中是如何检测数组变化的

书接上文，我们提到 `Vue` 是使用 `Object.defineProperty` 进行数据监听实现响应式数据的

但是 ES5 中提供给我们的 `Object.defineProperty` API 本身有一个致命的问题

其无法监听一些数组变化的情况，同时这也是 `Vue3` 中使用 `Proxy` API 对响应式进行重构的根本原因

问题的关键点在于数组操作无法触发数据变化的监听，

那么我们覆盖重写数组的原生方法在操作后手动触发更新不就可以了吗 :smirk:

::: tip
`Vue` 暴露 `Vue.$set` 方法让我们手动修改和触发更新
:::

事实上 `Vue` 内部的实现就是这么干的！

具体重写的方法有 `push`、`pop`、`shift`、`unshift`、`splice`、`sort`、`reverse`

我们这里以 `push` 方法简单实现一下覆盖：

``` javascript
// 存储数组相关原型链
const arrayProto = Array.prototype
const arrayMethods = Object.create(arrayProto)

const methodsToPatch = [
  'push',
]

// 为这些方法加上监听特性
methodsToPatch.forEach(method => {
  const oldMethod = Array.prototype[method]
  const newMethod = function(...args) {
    oldMethod.apply(this, args)
    console.log(`${method}方法被执行了`)
  }
  arrayMethods[method] = newMethod
})

export default {
  arrayMethods
}
```
相比于我们实现的简单版，实际源码中还解决了一大筐兼容性的问题（主要是因为 ES5 以前的版本无法完美继承数组）

完整源码可参考[源码相关位置](https://github.com/vuejs/vue/blob/706c67d1d013577fdbfab258bca78557419cba7c/src/observe/array-augmentations.js)

需要注意的是， `Vue2` 中的响应式数据仍然无法监听如下情况：

- :star: `vm.items[indexOfItem] = newValue`
- :star: `vm.items.length = newLength`

### Vue 中的 $nextTick

## 参考资料 :cat:

- https://zhuanlan.zhihu.com/p/61915640
- https://juejin.im/post/5ade0e3df265da0b8e7f050b
- https://segmentfault.com/a/1190000015783546