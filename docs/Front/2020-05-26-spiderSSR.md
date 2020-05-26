---
title: 使用 Node 写一个爬虫-后端渲染网页
date: 2020-05-26
sidebar: auto
sidebarDepth: 2
tags: 
  - Front
  - 前端
  - 爬虫
categories:
  - Front
---

![封面图](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200526-1.jpg)

一起开黑的同学L在某公考培训机构工作，最近他开始频繁缺席车队开黑，一问原来是等公告所以公司安排了值班

我一想这不简单吗，写个小爬虫脚本监听变化，有新通知了邮件通知一下自己不就行了 :smile:

省下的时间精力用来看书岂不美滋滋

说干就干，马上开搞

<!-- more -->

## 开始前准备 

天下武功，唯快不破

作为一个前端CV工程师，快速开发首选熟悉的 Node

先做一下需求分析，想要熟悉的功能其实只有两个

- :star: 监听页面公告的变化
- :star: 发邮件通知

需求确定的，后面要做的就是 `百度/谷歌` 了

一番查找下来，最后确定了要用的工具库如下：

- (axios)[https://github.com/axios/axios]：请求库，这里用来请求页面代码
- (cheerio)[https://github.com/cheeriojs/cheerio]：操作库，使用jq的方式来操作字符串
- (nodemailer)[https://github.com/nodemailer/nodemailer]：发送邮件

准备好了要用的工具之后，就可以愉快的开始爬虫之旅啦~

## 开始

首先我们还是要重复一遍需求，在官网有公告更新的时候自动发送一封邮件提醒自己

接着我们打开某省公考招考网站信息发布的网站

可以看到页面如下

![公考招考网站示意图](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200526-2.jpg)

右键查看源代码之后发现是一个后端渲染的网站

那我们不需要另外的处理了，简单粗暴直接爬就行了

## 页面分析

对于一个爬虫软件来说，爬下页面代码后，最重要的就是对页面的结构进行分析了

所以开始按下 `F12` 开启别样的 web 旅程~ :smirk:

我们先来分析一下每一条消息的 DOM 结构

![公考DOM分析](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200526-3.jpg)

把它复制出来，可以看到对应的 HTML 代码如下

``` javascript
<a href="/gwykl/20190312/15109.html" target="_blank" title="广东省2019年考试录用公务员公告">
    广东省2019年考试录用公务员公告
    <i>2019-03-12</i>
</a>
```
同时可以看出来

整体的列表 DOM 是通过时间排好序的，分析到这里我们的思路已经非常明确了

只需要监听列表中的第一个 DOM 元素，跟上次监听的不一样且包含 2020 字样就可以了~

## 代码撸起来

在开始写爬虫逻辑之前，我们先写一个发送邮件的工具函数方便调用

### 发邮件的工具函数

我们给这个函数定义两个入参，`text` 是邮件发送的内容，`subject` 是邮件发送的主题

``` javascript
const nodemailer = require('nodemailer');
// 想要发送的邮箱列表
const mailList = ['xxxxx@163.com']

module.exports = (text, subject) => {
    if (!text) {
        text = '<b>Hello world?</b>'
    }

    // 创建一个 nodemailer 实例
    let transporter = nodemailer.createTransport({
        service: '163', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
        port: 465, // SMTP 端口
        secureConnection: true, // 使用了 SSL
        auth: {
            user: 'xxxx',
            // 这里密码不是邮箱密码，是你设置的smtp授权码
            pass: 'xxxx',
        }
    });
        
    let mailOptions = {
        from:  '"xxx" <xxxx@163.com>', // sender address
        // to: 'xxx@163.com', // list of receivers
        subject: subject, // Subject line
        // 发送text或者html格式
        // text: 'Hello world?', // plain text body
        html: text // html body
    };
        
    // send mail with defined transport object
    mailList.forEach(item => {
        mailOptions.to = item
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
        });
    })
}
```

到这里一个简单好用的邮件发送函数已经编写完成了，试试手动触发给自己发送一封邮件吧~

### 编写爬虫

上面分析了这么多，终于可以开干了，其实逻辑也比价简单，一个主函数就可以搞定了

``` javascript
const axios = require('axios');
const cheerio = require('cheerio');
const moment = require('moment');
const mail = require('./mail')

// 准备爬取的网页
const url = `http://www.gdhrss.gov.cn/gwykl/index.html`
const baseUrl = `http://www.gdhrss.gov.cn`
// 记录上一次爬取时第一条消息
// 防止反复发送
let lastFirst = null
// 记录爬取时间
let lastCheck = new Date().getTime()

const getPage = async () => {
    let res = await axios.get(url)

    if (!res) console.error(moment().format('MMMM Do YYYY, h:mm:ss a'), '无数据')
    const $ = cheerio.load(res.data)

    // 获取当前列表首条信息的节点
    let nowFirst = $('.leftlist').find('a')[0].attribs || null
    // 如果当前无值
    if (!nowFirst) return
    // 初始值无值
    if (!lastFirst && !nowFirst.title.includes('2020')) {
        lastFirst = nowFirst
        mail(`${moment().format('MMMM Do YYYY, h:mm:ss a')}服务开始启动啦~`, '监听服务启动')
        return
    }
    // 没有更新
    if (nowFirst.href === lastFirst.href && nowFirst.title === lastFirst.title) return
    // 发现更新
    lastFirst = nowFirst
    const mailText = `<center>有新通知啦~</center><p>通知 <b>${nowFirst.title}</b> 更新啦</p><p>通知地址是：${baseUrl + nowFirst.href}</p><p>${moment().format('MMMM Do YYYY, h:mm:ss a')}</p>`
    
    // 发送邮件
    mail(mailText, nowFirst.title)
}
```
到这里我们爬虫的主函数已经大功告成了，接下来只要循环调用 `getPage` 函数即可

这里的循环调用有非常多的实现方法，我这里给出我的实现：

``` javascript
const sleep = require('system-sleep');

while(true) {
    getPage()
    sleep(5 * 1000)
}
```
### 小优化

细心的同学肯定会发现，我们这个爬虫要挂在服务器上，小水管毕竟不太稳定，保不定啥时候就挂了（其实是怕我自己写的代码有bug~:smile:）

监听程序存活状态有两种方式：

- 通过进程管理工具，服务挂了的时候自动重启或者发邮件通知（还要再开发，麻烦）
- 定时给自己发心跳邮件，超过时间没收到就是服务挂了（方便~但是时长不能设的太短，不然自己会烦死hhh）

我这里选用第二种方式，设成一天检测一次服务状态

``` javascript
const timestamp = new Date().getTime()

// 检查是否存活
if (timestamp - lastCheck > 24 * 60 * 60 * 1000) {
    lastCheck = timestamp
    mail(`${moment().format('MMMM Do YYYY, h:mm:ss a')}服务状态检查`, `服务还活着`)
}
```
把它传到服务器上直接跑，发现已经在监听啦~

## 小结

这里是单页面的爬虫，如果有多页面的需求还需要爬到页面上的导航页顺序爬取~

这个小 demo 也可以看出爬虫其实没那么难

下一篇我们来讨论一下 SPA 页面的爬取 :smile:

