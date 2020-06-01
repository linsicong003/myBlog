---
title: 使用 Node 写一个爬虫（爬SPA）
date: 2020-06-01
sidebar: auto
sidebarDepth: 2
tags: 
  - Front
  - 前端
  - 爬虫
categories:
  - Front
---

![封面图](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200601-1.jpg)

上一篇我们聊过了常规的爬虫思路，也即直接下载网页的 `HTML` 文件进行解析，

但是在 `Vue`、`React` 等框架当道的今天，这种简单的爬网页方式已经没有办法满足我们需求了！

<!-- more -->

## SPA 时代已经来临

SPA（Single Page Application）意为单页面应用，他与传统的 SSR（Server Side Render）应用不同的地方在于它的内容是在前端进行渲染的，所以我们对其抓取以后只能分析到他的容器内容

举个栗子

我们新建一个 `Vue` 页面，然后在这个页面的效果页上右键选择查看源代码，结果如下：

![标准SPA页面](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200601-2.jpg)

可以看到源代码里的 `HTML` 内容空空如也，只有一个 id 为 `app` 的根节点容器存在

这说明页面实际看到的内容都是通过 `js` 进行渲染的

分析到这里

聪明的你可能已经意识到了，我们完全没有办法使用传统的方法对这类页面进行爬取了

因为页面的内容都是后渲染的，所以我们没有办法获取到具体的内容

那么是不是没有办法了呢？ :smirk:

我们不妨换一个思路考虑这个问题

## 无头浏览器

做过 `Python` 爬虫的同学应该听说过 `Selenium` 和 `Phantomjs` 两个鼎鼎大名的库

这就是最早的无头浏览器的使用范例，实现思路是打开一个浏览器进程实际渲染出这一个网页，然后再对网页进行内容的爬取操作

因为这是一个真实的浏览器实例，所以渲染出的实例就是我们能看到的真实的网站

但是这两个库都已经比较老了

所以用起来总感觉有不顺手的地方

这时候我发现，浏览器领域的大哥大 `Google` 基于 `Chromium` 开源了一个的操作框架 `Puppeteer`

寻寻觅觅，却在灯火阑珊处

仔细阅读文档之后，这就是我们想找的趁手好工具了

## Puppeteer 基本使用

可以说 `Puppeteer` 对开发者十分友好了，提供了 [中文版的文档](https://zhaoqize.github.io/puppeteer-api-zh_CN/#/)

基本的安装过程文档里都有，我们下面只说说我们在应用过程中使用到的 API

- :star: browser.newPage()：  获取新打开的页面
- :star: browser.close()：  关闭当前浏览器实例
- :star: page.goto()：  控制页面跳转到某个链接
- :star: page.waitFor()：  页面等待一定时长 
- :star: page.waitForSelector()：  页面等待选择器选中的元素渲染完
- :star: page.$()： 获取对应的 DOM 节点，对应原生方法 `querySelector`
- :star: page.$$()：  获取对应的所有 DOM 节点，对应原生方法 `querySelectAll`
- :star: page.$eval()：  获取对应 DOM 节点并操作
- :star: page.$$eval()：  获取对应所有的 DOM 节点并操作

::: tip
这里有个奇怪的 API 是 `page.$()` 能取到 DOM 节点但并不支持原生的 DOM 操作，要用 `page.$eval()` 代替
:::

## 开始爬取

因为有个朋友托我爬取 [这个网页](https://www.icourse163.org/learn/scnu-1207440802#/learn/forumindex) 下的内容

所以我们这里就以爬取这个网页为例了

为了简化操作，先提前登陆好

::: tip
当然，自动化登陆也是可以做到的，详见后记
:::

按照惯例，我们先对网站的结构进行分析，网站结构如下图

![网站结构分析](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200601-3.jpg)

这里的流程就回到我们之前抓取的过程了

因为要爬完这里的所有数据

所以我们的思路是这样的：

循环遍历所有的列表主题  -->  通过主题进入帖子页循环遍历所有帖子  -->  将帖子数据和主题数据结合

## 循环遍历所有的列表主题

思路清楚了我们就可以开始撸代码了~ :smile:

这里先新建一个页面实例，并跳到对应的链接

``` javascript
(async () => {
  // 创建一个浏览器实例
  const browser = await (puppeteer.launch({
    //设置超时时间
    timeout: 50000,
    //如果是访问https页面 此属性会忽略https错误
    ignoreHTTPSErrors: true,
    // 打开开发者工具, 当此值为true时, headless总为false
    devtools: false,
    // 关闭headless模式, 不会打开浏览器
    headless: false,
    // 设置默认窗口大小
    defaultViewport: {
      width: 1366,
      height: 768
    }
  }));

  // 新建页面实例
  const page = await browser.newPage();

  // 跳转到指定页
  await page.goto('https://www.icourse163.org/learn/scnu-1207440802#/learn/forumindex');
})()
```

然后写一个获取所有主题的函数

因为这里还涉及到数据分页，所有我们写一个获取所有话题的函数和一个获取当前页所有话题的函数

``` javascript
// 获取所有话题数据
const getAllTopic = async (page) => { 
    //...
}

// 获取当前页所有话题
const getNowPageTopic = async (page, list) => { 
    // 爬取逻辑 
}
```
首先我们先来编写抓取当页所有页所有主题的方法

通过分析可以发现，我们想要的数据出现在这个地方：

![DOM节点分析1](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200601-4.jpg)

可以看出来我们想要的数据都出现在下面几个类名下：

- 标题：.j-link
- 名字：.f-fcgreen
- 日期：.j-txt .f-fc9

分析完成之后我们就可以开始写代码了 :smirk:

``` javascript
// 爬取当页所有标题
const getNowPageTopic = async (page, list) => {
  // 公共主题
  let txt = await page.$$eval('.u-forumlistwrap .u-forumli', list => {
    return list.map( one => {
      const title = one.querySelector('.j-link')
      const name = one.querySelector('.f-fcgreen')
      const date = one.querySelector('.j-txt .f-fc9')
      return {
        title: title.innerText, // 主题标题
        url: `https://www.icourse163.org/learn/scnu-1207440802${title.getAttribute('href')}`, // 主题对应地址
        owner: name.getAttribute('title'), // 主题发起者
        createTime: date.innerText.split(' ')[0] // 主题创建时间
      }
    })
  });

  return list.concat(txt)
}
```
写完了爬一页的代码我们接着继续分析

有很多网页设计是通过在 url 上带参来控制页数的，这时我们可以注意一下 url 的样子

![url分析](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200601-5.jpg)

可以看到在这个 url 上是不带任何参数的，而且切换页面 url 也不会有变化

看起来只能另寻出路了

这时候注意到，页面本身是自带下一页按钮的

而且在到达最后一页的时候会多一个类名进行隐藏

![下一页标签](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200601-6.jpg)

那么我们好好利用这一个特性就可以爬出所有主题了~

下面直接上代码

``` javascript
// 获取所有话题数据
const getAllTopic = async (page) => {
  console.log('开始爬取主题');
  // 爬取话题总列表
  let titleList = []
  // 总页数
  let pageCount = 1

  // 读取该页获取话题信息
  // 第一页直接读取
  titleList = await getNowPageTopic(page, titleList)

  // 下一页按钮
  const nextBtn = await page.$('.znxt')
  let nextBtnClass = await page.$eval('.znxt', btn => btn.className.split(' '))

  // 如果下一页还可以按的话就按下一页
  while(!nextBtnClass.includes('js-disabled')) {
    await nextBtn.click()
    await page.waitForSelector('.u-forumlistwrap .u-forumli')
    titleList = await getNowPageTopic(page, titleList)
    pageCount++
    nextBtnClass = await page.$eval('.znxt', btn => btn.className.split(' '))
  }
  
  // 将话题总列表写入文件
  fs.unlinkSync('titleList.json')
  await page.waitFor(1000)
  fs.writeFileSync('titleList.json', JSON.stringify(titleList))
  console.log(`讨论主题爬取完成，总共${pageCount}页！共有数据${titleList.length}条！`)

  // 返回数据
  return {
    topicList: titleList,
    totalPage: pageCount,
    totalPost: titleList.length
  }
}
```
到这里我们已经可以爬出所有的标题了

后面爬取帖子代码的思路其实跟爬主题大同小异，如果你能爬主题那么相信帖子也不在话下

完整代码在 [这里](https://github.com/linsicong003/robot-MOOC/blob/master/index.js)

## 后记

经过了前面爬虫的过程，相信对于自动登录应该也没有问题了吧

主要是 `puppeteer` 给提供了键盘输入的 API

- :star: page.frames()  获取页面所有的 iframe
- :star: page.type()  输入值

## 小结

爬虫其实也是找规律的过程，定向爬内容的关键在于寻找爬取内容的规律性，同样这也是反爬工作的着力点

远古时期的 jq 在 DOM 操作频繁的场景还是可以发光发热的

这篇文章只是个引子，希望可以帮助你敲开程序世界的新大门~ :smirk: