(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{302:function(t,a,v){"use strict";v.r(a);var _=v(0),s=Object(_.a)({},function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("欢迎回来！ 😄")]),t._v(" "),v("p",[t._v("这里是每日练题系列。")]),t._v(" "),v("p",[t._v("这个系列会先分享昨天问题的答案并提出新的问题。")]),t._v(" "),v("h2",{attrs:{id:"回顾上期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回顾上期","aria-hidden":"true"}},[t._v("#")]),t._v(" 回顾上期")]),t._v(" "),v("p",[t._v("上期我们提出的问题是：")]),t._v(" "),v("p",[t._v("⭐️ "),v("strong",[t._v("请你谈谈 JavaScript 中 V8 引擎的垃圾回收机制")])]),t._v(" "),v("h2",{attrs:{id:"答案公布"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#答案公布","aria-hidden":"true"}},[t._v("#")]),t._v(" 答案公布")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20191206-1.jpg",alt:"JS垃圾回收"}})]),t._v(" "),v("p",[t._v("要了解清楚 JS 中的垃圾回收机制，")]),t._v(" "),v("p",[t._v("首先我们需要明确为什么需要垃圾回收机制。")]),t._v(" "),v("h3",{attrs:{id:"为什么需要"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么需要 🎏")]),t._v(" "),v("p",[t._v("垃圾回收的原因很明确，")]),t._v(" "),v("p",[t._v("就是内存不够用了，")]),t._v(" "),v("p",[t._v("需要释放一些无用的占用来进行新的工作。")]),t._v(" "),v("p",[v("code",[t._v("V8")]),t._v(" 只能使用系统的一部分内存，")]),t._v(" "),v("blockquote",[v("p",[t._v("具体来说在 64 位系统下是 1.4G，在 32 位系统下是 0.7G。")])]),t._v(" "),v("p",[t._v("对于管理内存的方面我们后面继续讲解，")]),t._v(" "),v("p",[t._v("接着我们先聊聊 "),v("code",[t._v("垃圾")]),t._v(" 这个概念是怎么被判断出来的，")]),t._v(" "),v("p",[t._v("也即是如何判断可以回收。")]),t._v(" "),v("h3",{attrs:{id:"回收判断"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回收判断","aria-hidden":"true"}},[t._v("#")]),t._v(" 回收判断 🎏")]),t._v(" "),v("p",[t._v("一般而言，我们的判断是否可回收的算法主要分为 "),v("code",[t._v("标记清除法")]),t._v(" 和 "),v("code",[t._v("引用计数法")]),t._v(" 两种。")]),t._v(" "),v("p",[v("strong",[t._v("⭐️ 标记清除法")])]),t._v(" "),v("p",[t._v("这个方法的基本思路是，")]),t._v(" "),v("ul",[v("li",[t._v("1️⃣ 变量进入环境时将这个变量标记为 '进入环境'")]),t._v(" "),v("li",[t._v("2️⃣ 当变量离开环境时，将其标记为 '离开环境'")])]),t._v(" "),v("p",[t._v("一般我们不应该清除运行中的变量的内存，")]),t._v(" "),v("p",[t._v("这可能会影响到应用的正常执行。")]),t._v(" "),v("p",[t._v("这里的 "),v("code",[t._v("标记清除法")]),t._v(" 只是一个基本思路，")]),t._v(" "),v("p",[t._v("具体的实现方法各个 WEB 引擎的实现策略各有千秋，")]),t._v(" "),v("p",[t._v("我们这里展示使用比较广泛的策略：")]),t._v(" "),v("ul",[v("li",[t._v("1️⃣ 垃圾收集器在运行的时候给存储在内存中的所有变量都加上标记")]),t._v(" "),v("li",[t._v("2️⃣ 去掉环境中的变量以及被环境中变量所引用的变量的标记")]),t._v(" "),v("li",[t._v("3️⃣ 取出依然拥有标记的变量")]),t._v(" "),v("li",[t._v("4️⃣ 销毁带标记的值并释放对应的内存空间")])]),t._v(" "),v("p",[t._v("目前使用该策略的有 IE、Firefox、Opera、Chrome 和 Safari，")]),t._v(" "),v("p",[t._v("但它们的具体实现仍然有很大的不同，")]),t._v(" "),v("p",[t._v("感兴趣的话可以继续深入研究。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20191206-2.jpg",alt:"标记清除法"}})]),t._v(" "),v("p",[v("strong",[t._v("⭐️ 引用计数法")])]),t._v(" "),v("p",[v("code",[t._v("引用计数法")]),t._v(" 是一种古老的思路，")]),t._v(" "),v("p",[t._v("曾是 IE 等一众浏览器使用的主流思路，")]),t._v(" "),v("p",[t._v("虽然这种方法已过时，")]),t._v(" "),v("p",[t._v("但它的思路仍有值得我们借鉴的地方。")]),t._v(" "),v("p",[t._v("这个方法的思路是：")]),t._v(" "),v("p",[t._v("跟踪记录每个值被引用的次数，")]),t._v(" "),v("p",[t._v("并以此为根据作为是否清除的依据。")]),t._v(" "),v("p",[t._v("举个栗子：")]),t._v(" "),v("p",[t._v("我们声明了一个变量 "),v("code",[t._v("a")]),t._v(" 并将一个函数 "),v("code",[t._v("f()")]),t._v(" 赋值给它，")]),t._v(" "),v("p",[t._v("此时 "),v("code",[t._v("f()")]),t._v(" 的引用次数就是 1，")]),t._v(" "),v("p",[t._v("假如我们再把 "),v("code",[t._v("f()")]),t._v(" 赋值给另一个变量 "),v("code",[t._v("b")]),t._v("，")]),t._v(" "),v("p",[t._v("这样 "),v("code",[t._v("f()")]),t._v(" 的引用次数就变为 2 了。")]),t._v(" "),v("p",[t._v("直到 f() 的引用次数变为 0 时，")]),t._v(" "),v("p",[t._v("说明没有办法访问这个值了，")]),t._v(" "),v("p",[t._v("可以将其占用的内存空间回收回来。")]),t._v(" "),v("p",[t._v("早期使用这一方法的浏览器很快遇到了一个大问题： "),v("code",[t._v("循环引用")]),t._v("。")]),t._v(" "),v("p",[t._v("假设我们将 "),v("code",[t._v("f()")]),t._v(" 赋值成如下这般：")]),t._v(" "),v("div",{staticClass:"language-javascript line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-javascript"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    a"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hello "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    b"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hello "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br")])]),v("p",[t._v("这种情况下因为 "),v("code",[t._v("a")]),t._v(" 跟 "),v("code",[t._v("b")]),t._v(" 同时有各自属性的引用，")]),t._v(" "),v("p",[t._v("所以即便函数执行完毕依旧不会被清除。")]),t._v(" "),v("p",[t._v("别以为这种代码离我们有多远，")]),t._v(" "),v("p",[t._v("我们时刻都在写着这种代码，")]),t._v(" "),v("p",[t._v("来看下面一个例子：")]),t._v(" "),v("div",{staticClass:"language-javascript line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-javascript"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 循环引用例子")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" el "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nel"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onClick")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//... };")]),t._v("\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以通过手动置空避免")]),t._v("\nwindow"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onbeforeunload")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br"),v("span",{staticClass:"line-number"},[t._v("8")]),v("br")])]),v("p",[v("img",{attrs:{src:"https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20191206-3.jpg",alt:"引用计数法"}})]),t._v(" "),v("h3",{attrs:{id:"v8-回收策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#v8-回收策略","aria-hidden":"true"}},[t._v("#")]),t._v(" V8 回收策略 🎏")]),t._v(" "),v("p",[v("code",[t._v("V8")]),t._v(" 作为现代 WEB 内核之大成者，")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20191206-4.jpg",alt:"分代内存分配法"}})]),t._v(" "),v("p",[t._v("使用的是一种博取众家所长的方法： "),v("code",[t._v("分代内存分配法")])]),t._v(" "),v("p",[t._v("顾名思义我们可以这么理解：")]),t._v(" "),v("ul",[v("li",[t._v("⭐️ 新生代内存： 临时分配的内存，存活时间短。（64 位： 32 MB，32 位： 16 MB）")]),t._v(" "),v("li",[t._v("⭐️ 老生代内存： 常驻的内存，存活时间长。")])]),t._v(" "),v("p",[t._v("分好内存种类之后，")]),t._v(" "),v("p",[t._v("V8 对于这两种内存有着不同的回收策略，")]),t._v(" "),v("p",[t._v("以进行针对性的优化。")]),t._v(" "),v("h3",{attrs:{id:"新生代内存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#新生代内存","aria-hidden":"true"}},[t._v("#")]),t._v(" 新生代内存 🎏")]),t._v(" "),v("p",[v("strong",[t._v("新生代内存")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20191206-5.jpg",alt:"新生代内存"}})]),t._v(" "),v("p",[t._v("对于新生代内存，")]),t._v(" "),v("p",[t._v("首先将其一分为二。")]),t._v(" "),v("p",[t._v("然后进行垃圾回收过程：")]),t._v(" "),v("ul",[v("li",[t._v("1️⃣ 将 "),v("code",[t._v("From")]),t._v(" 对象检查一遍，如果对象存活则复制到 "),v("code",[t._v("To")]),t._v(" 中（按顺序从头放置），如果对象非存活则直接回收。")]),t._v(" "),v("li",[t._v("2️⃣ "),v("code",[t._v("From")]),t._v(" 循环一遍过后，原 "),v("code",[t._v("From")]),t._v(" 和 "),v("code",[t._v("To")]),t._v(" 两者 "),v("code",[t._v("角色对调")]),t._v("，并重复上述过程。")])]),t._v(" "),v("p",[t._v("这么处理的很大的原因是为了处理如下的内存分布场景：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20191206-6.jpg",alt:"内存零散"}})]),t._v(" "),v("p",[t._v("橙色方块代表存活对象，白色代表待分配内存，")]),t._v(" "),v("p",[t._v("其实指的就是我们在 "),v("code",[t._v("操作系统")]),t._v(" 一门课中学过的 "),v("code",[t._v("内存碎片")]),t._v("。")]),t._v(" "),v("p",[v("code",[t._v("V8")]),t._v(" 使用 "),v("code",[t._v("Scavenge算法")]),t._v(" 解决内存碎片问题，")]),t._v(" "),v("p",[t._v("解决后的空间分布就是下面这个样子的：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20191206-7.jpg",alt:"内存分配完成情况"}})]),t._v(" "),v("p",[t._v("有关于 "),v("code",[t._v("Scavenge算法")]),t._v(" 更详细可以参考这里 "),v("a",{attrs:{href:"https://juejin.im/post/5b1f7e62e51d45068a6cb98f",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),v("OutboundLink")],1)]),t._v(" "),v("h3",{attrs:{id:"老生代内存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#老生代内存","aria-hidden":"true"}},[t._v("#")]),t._v(" 老生代内存 🎏")]),t._v(" "),v("p",[v("strong",[t._v("老生代内存")])]),t._v(" "),v("p",[t._v("如果 "),v("code",[t._v("新生代内存")]),t._v(" 中的变量经过 "),v("code",[t._v("多次回收")]),t._v(" 后仍然存在，")]),t._v(" "),v("p",[t._v("那么就会被放到 "),v("code",[t._v("老生代内存")]),t._v(" 中，")]),t._v(" "),v("p",[t._v("这种情况被称为 "),v("code",[t._v("晋升")]),t._v("。")]),t._v(" "),v("div",{staticClass:"tip custom-block"},[v("p",[t._v("其他发生 "),v("code",[t._v("晋升")]),t._v(" 的条件还有1️⃣已经经历过一次 "),v("code",[t._v("Scavenge")]),t._v(" 回收。2️⃣ To 空间的内存占用超过 25%。")])]),t._v(" "),v("p",[t._v("对于 "),v("code",[t._v("老生代内存")]),t._v(" 而言，")]),t._v(" "),v("p",[t._v("一般占用的内存要比 "),v("code",[t._v("新生代内存")]),t._v(" 要大得多，")]),t._v(" "),v("p",[t._v("继续使用 "),v("code",[t._v("Scavenge算法")]),t._v(" 显然是不现实的。")]),t._v(" "),v("p",[t._v("所以对于 "),v("code",[t._v("老生代内存")]),t._v(" 而言使用的是两步走的算法：")]),t._v(" "),v("ul",[v("li",[t._v("⭐️ 先使用 "),v("code",[t._v("标记清除法")]),t._v("。")]),t._v(" "),v("li",[t._v("⭐️ 整理内存碎片，将存活对象全部往一端靠拢。（极其耗时）")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20191206-8.jpg",alt:"老生代内存"}})]),t._v(" "),v("h3",{attrs:{id:"运行优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运行优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 运行优化 🎏")]),t._v(" "),v("p",[t._v("上面我们提到 "),v("code",[t._v("老生代内存")]),t._v(" 管理的最后一步极其耗时，")]),t._v(" "),v("p",[t._v("由于 "),v("code",[t._v("JavaScript")]),t._v(" 使用的是单线程机制，")]),t._v(" "),v("p",[t._v("垃圾回收难免会影响到正常业务逻辑的执行，")]),t._v(" "),v("p",[v("code",[t._v("V8")]),t._v(" 在此处采用增量标记的方法，")]),t._v(" "),v("p",[t._v("通俗点说就是把所有要执行的任务 "),v("code",[t._v("分成很多的小块间歇执行")]),t._v("。")]),t._v(" "),v("p",[t._v("想要详细了解的童鞋可以看这篇文章 "),v("a",{attrs:{href:"https://malcolmyu.github.io/2019/07/07/Tri-Color-Marking/",target:"_blank",rel:"noopener noreferrer"}},[t._v("V8增量回收三色标记法"),v("OutboundLink")],1)]),t._v(" "),v("h3",{attrs:{id:"参考资料"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料 🎏")]),t._v(" "),v("ul",[v("li",[t._v("https://juejin.im/post/5ad3f1156fb9a028b86e78be")]),t._v(" "),v("li",[t._v("https://juejin.im/post/5dd8b3a851882572f56b578f?utm_source=gold_browser_extension#heading-1")]),t._v(" "),v("li",[t._v("https://juejin.im/post/5b1f7e62e51d45068a6cb98f")]),t._v(" "),v("li",[t._v("https://malcolmyu.github.io/2019/07/07/Tri-Color-Marking/")])]),t._v(" "),v("h2",{attrs:{id:"提问"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#提问","aria-hidden":"true"}},[t._v("#")]),t._v(" 提问")]),t._v(" "),v("p",[t._v("讲解完了昨天的问题，又到了今天的提问环节啦~")]),t._v(" "),v("h3",{attrs:{id:"背景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#背景","aria-hidden":"true"}},[t._v("#")]),t._v(" 背景 🎏")]),t._v(" "),v("p",[t._v("上面我们介绍了 "),v("code",[t._v("V8")]),t._v(" 的垃圾回收原理，")]),t._v(" "),v("p",[t._v("既然已经进入了这个话题了，")]),t._v(" "),v("p",[t._v("那我们就继续深入下去吧！")]),t._v(" "),v("h3",{attrs:{id:"今日提问"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#今日提问","aria-hidden":"true"}},[t._v("#")]),t._v(" 今日提问 🎏")]),t._v(" "),v("p",[t._v("“缥缈危楼紫翠间，良辰乐事古难全。”")]),t._v(" "),v("hr"),t._v(" "),v("p",[v("strong",[t._v("今天的问题是：")])]),t._v(" "),v("p",[t._v("⭐️ "),v("strong",[t._v("请你谈谈 V8 执行 JavaScript 代码的流程")])])])},[],!1,null,null,null);a.default=s.exports}}]);