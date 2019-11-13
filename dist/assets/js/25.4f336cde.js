(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{307:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("欢迎回来！ 😄")]),t._v(" "),a("p",[t._v("这里是每日练题系列。")]),t._v(" "),a("p",[t._v("这个系列会先分享昨天问题的答案并提出新的问题。")]),t._v(" "),a("h2",{attrs:{id:"回顾上期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回顾上期","aria-hidden":"true"}},[t._v("#")]),t._v(" 回顾上期")]),t._v(" "),a("p",[t._v("上期我们提出的问题是：")]),t._v(" "),a("p",[t._v("⭐️ "),a("strong",[t._v("请使用JS实现相加函数 "),a("code",[t._v("add(a, b)")]),t._v(" 并为其设计测试用例")])]),t._v(" "),a("h2",{attrs:{id:"答案公布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#答案公布","aria-hidden":"true"}},[t._v("#")]),t._v(" 答案公布")]),t._v(" "),a("p",[t._v("世界上从来没有简单的问题，如果有那就是想的还不够多。")]),t._v(" "),a("p",[t._v("今天我们来实现 "),a("code",[t._v("JavaScript")]),t._v(" 中的加法函数。")]),t._v(" "),a("h3",{attrs:{id:"简单实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 简单实现 🎏")]),t._v(" "),a("p",[t._v("很多人的 "),a("code",[t._v("JavaScript")]),t._v(" 入门，学的都是这么一个函数：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("这就是一个我们最简单的加法器的实现了！")]),t._v(" "),a("h3",{attrs:{id:"再考虑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再考虑","aria-hidden":"true"}},[t._v("#")]),t._v(" 再考虑 🎏")]),t._v(" "),a("p",[t._v("上面的实现虽然简单，但是已经完成了我们做 "),a("code",[t._v("加法")]),t._v(" 的目的了，但是这样的实现真的没有问题吗？")]),t._v(" "),a("p",[t._v("众所周知，"),a("code",[t._v("JavaScript")]),t._v(" 的数值计算会有很多的异常情况。")]),t._v(" "),a("p",[t._v("我们来看个例子：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20191105-1.png",alt:"例子1"}})]),t._v(" "),a("p",[t._v("好像出现了什么奇怪的东西。")]),t._v(" "),a("p",[t._v("我们想象的 "),a("code",[t._v("1 - 0.7")]),t._v(" 不就单纯的等于 "),a("code",[t._v("0.3")]),t._v(" 吗？")]),t._v(" "),a("p",[t._v("后面的这一长串是什么鬼 😏")]),t._v(" "),a("p",[t._v("先来看看计算机科学中的一些基本概念：")]),t._v(" "),a("h3",{attrs:{id:"概念剖析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念剖析","aria-hidden":"true"}},[t._v("#")]),t._v(" 概念剖析 🎏")]),t._v(" "),a("p",[t._v("要想解答这个问题，我们要先来看看 "),a("code",[t._v("JavaScript")]),t._v(" 是怎么处理小数的。")]),t._v(" "),a("p",[a("code",[t._v("JavaScript")]),t._v(" 中无论是整数还是小数，都是 "),a("code",[t._v("Number")]),t._v(" 的实例，它的实现遵循 "),a("a",{attrs:{href:"https://zh.wikipedia.org/zh-hans/IEEE_754",target:"_blank",rel:"noopener noreferrer"}},[t._v("IEEE754"),a("OutboundLink")],1),t._v(" 标准。")]),t._v(" "),a("p",[a("code",[t._v("Number")]),t._v(" 使用 64 位固定长度表示，实现的是双精度浮点型的标准。")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("概念不清晰的参考计算机组成原理数值部分~")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20191105-4.png",alt:"IEEE754 双精度"}})]),t._v(" "),a("p",[t._v("这 64 位被分为了那么三个部分：")]),t._v(" "),a("ul",[a("li",[t._v("⭐️ 符号位S。使用第一位表示，0 正 1 负。")]),t._v(" "),a("li",[t._v("⭐️ 指数位E。第一位后十一位表示，用于表示次方数。")]),t._v(" "),a("li",[t._v("⭐️ 尾数位M。后面剩下的五十二位表示，超出部分自动进一舍零。")])]),t._v(" "),a("p",[t._v("所以综上，实际表示什么数字理想情况下可以使用下面公式进行换算：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20191105-5.png",alt:"实际数字换算"}})]),t._v(" "),a("p",[t._v("需要注意的是以上公式遵循科学计数法规范，")]),t._v(" "),a("p",[t._v("在十进制位是 "),a("code",[t._v("0 < M < 10")]),t._v("，那么到了二进制位就是 "),a("code",[t._v("0 < M < 2")]),t._v("，也就是说整数部分只能是 1，可以被舍去只保留后面的小数部分。")]),t._v(" "),a("p",[t._v("如 "),a("code",[t._v("4.5")]),t._v(" 转换成二进制就是 "),a("code",[t._v("100.1")]),t._v("，科学计数法表示是 "),a("code",[t._v("1.001*2^2")]),t._v("。")]),t._v(" "),a("p",[t._v("1 舍去后就有 "),a("code",[t._v("M = 001")]),t._v("。")]),t._v(" "),a("p",[t._v("E 是一个无符号整数，长度为 11 位，取值范围为 "),a("code",[t._v("0-2047")]),t._v("，")]),t._v(" "),a("p",[t._v("但是考虑到这个范围包含正负")]),t._v(" "),a("p",[t._v("所以有 "),a("code",[t._v("[0, 1022]")]),t._v(" 为负，"),a("code",[t._v("[1024, 2047]")]),t._v(" 表示正。")]),t._v(" "),a("p",[t._v("所以我们最后的公式转换成了：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20191105-6.png",alt:"二进制数字换算"}})]),t._v(" "),a("p",[t._v("所以 "),a("code",[t._v("4.5")]),t._v(" 最终表示为 "),a("code",[t._v("M=001")]),t._v(" 和 "),a("code",[t._v("E=1025")]),t._v(" 的数：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20191105-7.png",alt:"4.5二进制转换"}})]),t._v(" "),a("p",[t._v("下面我们以 "),a("code",[t._v("0.7")]),t._v(" 为例子来看一下：")]),t._v(" "),a("p",[a("code",[t._v("0.7")]),t._v(" 转成二进制表示为 "),a("code",[t._v("0.10110011001100110011001100110011001100110011001100111")]),t._v(" (1100循环)")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("浮点数用二进制表示时是无穷的，误差即是由截断产生。")])]),t._v(" "),a("p",[t._v("也就是 "),a("code",[t._v("1.011001100110011 X 2^-1")]),t._v("， 所以 "),a("code",[t._v("E=-1+1023=1022")])]),t._v(" "),a("p",[t._v("除去首位的 1，得到 "),a("code",[t._v("01100...")])]),t._v(" "),a("p",[t._v("最后我们再把计算得到的 "),a("code",[t._v("0110011001100110011001100110011001100110011001100110")]),t._v(" 这一串转回十进制")]),t._v(" "),a("p",[t._v("得到 "),a("code",[t._v("6.99999999999999955591079014994")])]),t._v(" "),a("p",[t._v("相关计算网站可以看这 -> "),a("a",{attrs:{href:"http://www.binaryconvert.com/result_double.html?decimal=048046055",target:"_blank",rel:"noopener noreferrer"}},[t._v("转换分析"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20191105-8.png",alt:"0.7二进制转换"}})]),t._v(" "),a("p",[t._v("更为详细的浮点数讲解可参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/camsong/blog/issues/9",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门1"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2010/06/ieee_floating-point_representation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门2"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("后面我们直接到大数加法的部分~")]),t._v(" "),a("h3",{attrs:{id:"大数加法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大数加法","aria-hidden":"true"}},[t._v("#")]),t._v(" 大数加法 🎏")]),t._v(" "),a("p",[t._v("这里我们使用字符串的解决思路进行大数加法的实现：")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("这里偷个懒，代码是从网上搬过来的~")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行加法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若有小数获取最高位数")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decimalLen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decimalLen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理传参")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" aTo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bTo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回结果")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doAdd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aTo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bTo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doAdd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aTo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bTo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算小数位数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decimalLen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" aTmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" aTmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" aTmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 整数相加")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doAdd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 看看两个字符串长度相差多少，小的在前面补0， ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如 10000 和 1， 补0后为 10000 和 00001")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" leng "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leng"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leng"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将字符串转化为数组并且倒装，如同小学加法从个位开始算起")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" textArrA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        textArrB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        resultArr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对数组进行循环")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 求和，和小于10，则将和放进目标数组，若大于10，将除以10将余数放进目标数组，然后textArrA数组的下一位 + 1（textArrB数组也可以，选一个即可）")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("textArrA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("textArrB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里判断是否是最高位数值相加，即i === a.length - 1， 如果是不用取余直接放进去")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            resultArr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            resultArr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            textArrA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("textArrA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后将目标数组倒装一下，再转成字符串")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" resultArr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1045747'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1045757")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br")])]),a("h3",{attrs:{id:"推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐","aria-hidden":"true"}},[t._v("#")]),t._v(" 推荐 🎏")]),t._v(" "),a("p",[t._v("推荐一个大数加法库 "),a("a",{attrs:{href:"https://github.com/MikeMcl/bignumber.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("bignumber.js"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料 🎏")]),t._v(" "),a("ul",[a("li",[t._v("https://github.com/camsong/blog/issues/9")]),t._v(" "),a("li",[t._v("https://juejin.im/post/5dbacec0f265da4d365f28d3")])]),t._v(" "),a("h2",{attrs:{id:"提问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提问","aria-hidden":"true"}},[t._v("#")]),t._v(" 提问")]),t._v(" "),a("p",[t._v("讲解完了昨天的问题，又到了今天的提问环节啦~")]),t._v(" "),a("h3",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景","aria-hidden":"true"}},[t._v("#")]),t._v(" 背景 🎏")]),t._v(" "),a("p",[t._v("互联网我们每天都在用，可是我们对网络的 "),a("code",[t._v("实现模型")]),t._v(" 有了解吗？")]),t._v(" "),a("p",[t._v("Web 开发中绕不过的 "),a("code",[t._v("HTTP")]),t._v(" 协议在整个网络体系中处于什么样的位置你知道吗？")]),t._v(" "),a("p",[t._v("只有 "),a("code",[t._v("0101")]),t._v(" 数据包的计算机世界究竟是怎么样保证稳定的通信的呢？")]),t._v(" "),a("h3",{attrs:{id:"今日提问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#今日提问","aria-hidden":"true"}},[t._v("#")]),t._v(" 今日提问 🎏")]),t._v(" "),a("p",[t._v("了解东西要由浅入深，从表象揭露本质。")]),t._v(" "),a("p",[t._v("那我们了解网络世界，就从最基本我们能见到的模样开始吧！")]),t._v(" "),a("p",[t._v("今天的问题是：")]),t._v(" "),a("p",[t._v("⭐️ "),a("strong",[t._v("请简述网络 "),a("code",[t._v("OSI七层模型")]),t._v(" 和 "),a("code",[t._v("TCP/IP四层模型")]),t._v("，对比分析异同并举出每个层级的代表性协议")])])])},[],!1,null,null,null);s.default=r.exports}}]);