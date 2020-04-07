---
title: 一道有关作用域的题目
date: 2020-4-7
sidebar: auto
sidebarDepth: 2
tags: 
  - 前端基础
categories:
  - Front
---

## 前言

又是春暖花开的季节，

今年因为疫情的影响各行各业都进入了寒冬期，

但对于个人而言学习是一刻也不能松懈的。

近日朋友向我推荐了一道经典的作用域题目，

的确让我思绪良多，

这里跟大家分享一下这道题目以及思考过程。

<!-- more -->
![封面图](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200407-1.jpg)

## 题目初识

这道题目是这样的：

``` javascript
function Foo () {
    getName = function () {
        console.log(1)
    }
    return this
}

Foo.getName = function () {
    console.log(2)
}

Foo.prototype.getName = function () {
    console.log(3)
}

var getName = function () {
    console.log(4)
}

function getName () {
    console.log(5)
}

Foo.getName()  // 2
getName()  // 4
Foo().getName()  // 1
getName()  // 1
new Foo.getName()  // 2
new Foo().getName()  // 3 
new new Foo().getName()  // 3
```

## 解题分析 

看到这里，

小朋友，你是否有很多问号。

![疑问](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200407-2.jpg)

别急，

我们一起来学习解决。 :smile:
 
### Foo.getName() :flags:

这个答案是 `2`，

梳理出关键代码其实形似这样：

``` javascript
var Foo

Foo.getName = function () {
    console.log(2)
}

Foo.getName() // 2
```

### getName() :flags:

到了这里就会有很多迷糊的同学会毫不犹豫的打出 `5` 的答案了，

按照我们平时认为的 JS 按顺序执行的确是这样子的。

但是 JS 中有独特的变量提升机制，

跟上面一样我们来梳理一下关键代码：

``` javascript
function getName () {
    console.log(5)
}

var getName = function () {
    console.log(4)
}

getName()
```
实际执行的时候代码会先被预编译成这个样子，

接着才是按照我们认为的顺序执行。

### Foo().getName() :flags:

照例我们先按照题目梳理出关键代码：

``` javascript
function Foo () {
    getName = function () {
        console.log(1)
    }
    return this
}

Foo().getName()
```
所以很明显这里的 `Foo()` 返回了一个 `this`

而又因为这里的 `this` 没有被强制绑定，

这里的 `this` 就指向了 `window`。

而 JS 中定义时若没加 `var`、`let` 和 `const`，

则该定义会默认提升到全局，

最后因为 `Foo()` 的执行在最后所以覆盖了全局的 `getName` 。

::: tip
这里的讲解使用浏览器运行环境，使用 Node 环境时没有 window 对象，此时 this 指向 global 对象，会出现报错。
:::

### getName() :flags:

由于上题中的操作覆盖了全局的 `getName`，

所以这里的输出与上题相同。

### new Foo.getName() :flags:

我们这里先梳理出关键代码：

``` javascript
Foo.getName = function () {
    console.log(2)
}

new Foo.getName()
```
在开始做题前我们现在复习一下 `new` 操作符会进行的操作：

- 创建一个新的空对象
- 将这个空对象的 `this` 指向这个实例

所以我们这里的 `new Foo` 部分就先新建了一个 `this` 指向 `Foo` 的新对象 

这里我们最后的答案就指向了 `2`

### new Foo().getName() :flags:

分析之前我们一样提取出关键代码：

``` javascript
Foo.prototype.getName = function () {
    console.log(3)
}

new Foo().getName()
```
由上一题的 `new` 的操作过程，

这里创建了一个空对象，`this` 指向 `Foo()`，调用 `getName()` 函数。

`Foo()` 在这里指向了名为 `Foo` 的函数，

![Foo()指向](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200407-3.png)

可以看出函数是不存在内置变量的，

所以就会走到 `Foo()` 的原型链上查找命中 `3`

### new new Foo().getName() :flags:

说实话我第一次看到这里也是有点懵逼，

毕竟两个 `new` 的情况就有点为了面试故意搞出来的情况了。

但是仔细一想，

其实也是跟上两题的原理类似，

是上面两题的综合应用。

如果你还是觉得不好理解，

可以把它拆成这样：

``` javascript
new (new Foo()).getName()
```
这样是不是就是，

回到了我们上一题的情况了，

实际生成了一个指向我们上一题对象的对象，

所以答案依然指向 `3`

## 小结

不积跬步无以至千里，

这是一道初看感觉很简单，

细细一想包罗万象的题目，

同时在这基础上，

稍稍变换一下就可以化身考察其他知识点的题目，

让你无不感慨语言设计的精妙之处。

## 参考资料

- https://github.com/mqyqingfeng/Blog
