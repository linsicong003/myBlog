---
title: TypeScript 介绍
# display: home
image: /image/background/1.jpg
date: 2019-08-03
sidebar: auto
sidebarDepth: 2
tags: 
  - TypeScript
  - 前端
categories:
  - TS
--- 
![TS](/image/2019-8-3/logo.png)
## 是什么

TypeScript 脱胎于 Microsoft 的开源项目。

它的诞生带着两个主要的使命：

<br/>

- 为 JavaScript 提供**类型系统**

- 为现有版本 JavaScript 提供**未来标准**的支持

<!-- more -->

<br/>

整个 TypeScript 项目最终都是服务于这两个目标的。

## 类型系统

对于学习过强类型语言的同学来说，类型系统并不陌生。

<br/>

这是所有强类型语言中基础中的基础。

<br/>

但对于 JavaScript 而言强类型一开始并不是必选项，因为这项语言最开始只是被设计于控制简单交互，并不需要那么强的细节控制能力。

<br/>

一段我们常见的 JavaScript 代码是这样的：

```javascript
// 使用 var 声明变量
// 没有块级作用域
// 也没有类型

var str = 'apple'
```

这么一看在简单的使用中并不会出现问题，他能完美完成我们交于它的任务，并且语法也足够简洁。

<br/>

大家可以想象一个这样的场景：

有一天小花的三姑要给小花介绍工作，于是乎提前打了招呼。

但之后便再透露更多信息了。

<br/>
这可让小花又忧又喜。

喜的是家里蹲专业户小花终于有了工作的机会了。

忧的是不知道工作环境如何。

<br/>

翻译成代码我们可以这样来描述：

```javascript
// 小花求职记
var work = function() {
    return null
}

var hua = work()
```

<br/>

生活就是这么的无常，期盼常常会落空。

正如小花经历的这样，

几天后收到了公司打来的电话，

他们所要的岗位已经满人了，

约好的面试不用去了。

<br/>

锅当然在介绍人三姑身上

假传了消息,

假如能对消息做一下校验，

那么就能在小花采取行动之前得到阻止。

这时醒悟过来的三姑赶紧拿出了 Typescript 工具

```javascript
// 小花求职记
// 校验版
// TypeScript 同时也不允许使用 var 声明变量
const work = function(): string {
    return null
}

// 得到报错，停止行动
const hua = work()
```
<br/>

恍然大悟的三姑马上开始了新一轮的介绍之旅...

下面我们来总结一下。

<br/>

使用类型系统的好处就在于：

- 检索出低级错误

- 开发时我们真的知道我们在干什么

<br/>

关于类型系统的好处还有很多，

将在下一章类型系统中进行详细讲解。

## 对于未来标准的支持

### 为什么需要兼容
由于 JavaScript 的历史原因，几个割裂版本同时存在。

某些用户设备仍然无法支持 ES2015 相关标准。

现在我们讨论的更多的是 ES2016+（ES6+）的支持。

<br/>

### 兼容方式

一个常用的解决方案是使用 Babel 进行兼容。

TypeScript 站在 Babel 的肩膀上，也对未来的标准提供了完整的支持。

从上面的例子可以看到，

在 TypeScript 中编写 var 代码都是非法的，

其实是从编写习惯开始阻止晦涩难懂代码的产出。

## 为什么需要 TypeScript

目前前端开发的三大阵营 Vue/React/Angular 中，

React 和 Angular 早已是 TypeScript 的天下。

在 Vue 的 3.0 版本中也马上会带来 TypeScript 的完整支持，

即便你对 TypeScript 的理念嗤之以鼻，

你仍然需要学习 TypeScript 来融入整个开发的大环境。

<br/>

### 与旧代码的兼容性

可能会有人担心这么个问题：

迁移到 TypeScript 后，我以前积累的以 .js 结尾的库就全废弃了吗？

这正是 TypeScript 迁移的核心问题，

问题的答案是：

All your JavaScript is TypeScript

<br/>

所有原有的 js 代码都将通过新增声明文件的方式得到复用。

这正是 TypeScript 能流行的如此之快的关键原因。


### TypeScript 生态

![TypeScript下载量](/image/2019-8-3/count.png)

> 图片来源： npm 下载量

目前 TypeScript 生态已非常成熟，适合上车。

基于 TypeScript 生态的软件已如雨后春笋般涌现。


## 最后

本文是 TypeScript 系列文章的第一篇。

后面更新为不定期进行。（懒~）

由于本人水平所限，

若在文中出现了错误请于评论区或者邮件指出！

同时也欢迎来信进行技术/非技术的交流~

## 参考资料
[TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/content/docs/why-typescript.html)

[深入理解TypeScript](https://jkchao.github.io/typescript-book-chinese/)


