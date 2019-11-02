(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{287:function(t,v,_){"use strict";_.r(v);var e=_(0),r=Object(e.a)({},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("欢迎回来！ 😄")]),t._v(" "),_("p",[t._v("这里是每日练题系列。")]),t._v(" "),_("p",[t._v("这个系列会先分享昨天问题的答案并提出新的问题。")]),t._v(" "),_("h2",{attrs:{id:"回顾上期"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#回顾上期","aria-hidden":"true"}},[t._v("#")]),t._v(" 回顾上期")]),t._v(" "),_("p",[t._v("上期我们提出的问题是：")]),t._v(" "),_("p",[t._v("⭐️ "),_("strong",[t._v("请简述 "),_("code",[t._v("HTTP")]),t._v(" 的通信过程以及比较 "),_("code",[t._v("HTTP/1")]),t._v(" 和 "),_("code",[t._v("HTTP/2")]),t._v(" 的区别")])]),t._v(" "),_("h2",{attrs:{id:"答案公布"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#答案公布","aria-hidden":"true"}},[t._v("#")]),t._v(" 答案公布")]),t._v(" "),_("p",[_("code",[t._v("HTTP")]),t._v(" 是整个 "),_("code",[t._v("WEB")]),t._v(" 生态的重要基础之一，了解他是十分重要的。")]),t._v(" "),_("p",[t._v("可能平时我们用的比较多，但是对于协议本身还不甚了解，只是了解其有 "),_("code",[t._v("请求")]),t._v(" 和 "),_("code",[t._v("响应")]),t._v(" 两个阶段。")]),t._v(" "),_("p",[t._v("在学习 "),_("code",[t._v("HTTP")]),t._v(" 之前，我想先请大家回忆一下 "),_("code",[t._v("TCP/IP")]),t._v(" 协议中 "),_("code",[t._v("三次握手四次挥手")]),t._v(" 的过程，同样的因为这是整个 "),_("code",[t._v("HTTP")]),t._v(" 的基础。")]),t._v(" "),_("p",[t._v("回忆不出来的童鞋戳 "),_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/53374516",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),_("OutboundLink")],1)]),t._v(" "),_("h3",{attrs:{id:"http-工作流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-工作流程","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 工作流程 🎏")]),t._v(" "),_("p",[_("code",[t._v("HTTP")]),t._v(" 协议的整个工作流程可以分成下面七个部分：")]),t._v(" "),_("ul",[_("li",[t._v("🌊 建立 "),_("code",[t._v("TCP")]),t._v(" 连接")]),t._v(" "),_("li",[t._v("🌊 客户端向服务端发起 "),_("code",[t._v("连接请求")])]),t._v(" "),_("li",[t._v("🌊 客户端发送 "),_("code",[t._v("请求头")]),t._v(" 信息")]),t._v(" "),_("li",[t._v("🌊 服务端 "),_("code",[t._v("响应")])]),t._v(" "),_("li",[t._v("🌊 服务端发送 "),_("code",[t._v("响应头")]),t._v(" 信息")]),t._v(" "),_("li",[t._v("🌊 服务端向客户端发送相应数据")]),t._v(" "),_("li",[t._v("🌊 服务端关闭 "),_("code",[t._v("TCP")]),t._v(" 连接")])]),t._v(" "),_("h2",{attrs:{id:"http-头信息探秘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-头信息探秘","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 头信息探秘")]),t._v(" "),_("p",[t._v("在很多英文文档中这部分的内容直接以 "),_("code",[t._v("Headers")]),t._v(" 出现。")]),t._v(" "),_("p",[t._v("在请求阶段（request）的过程中 "),_("code",[t._v("Headers")]),t._v(" 指的是请求头，在响应阶段（response）的过程中 "),_("code",[t._v("Headers")]),t._v(" 指的是响应头。")]),t._v(" "),_("p",[t._v("其实这么说也是不准确的，准确的说 "),_("code",[t._v("HTTP")]),t._v(" 中的头我们可以把它分为四个类型：")]),t._v(" "),_("ul",[_("li",[t._v("通用头")]),t._v(" "),_("li",[t._v("请求头")]),t._v(" "),_("li",[t._v("响应头")]),t._v(" "),_("li",[t._v("实体头")])]),t._v(" "),_("p",[t._v("从字面意思我们就可以理解到具体这些头信息是实现什么功能的：")]),t._v(" "),_("h3",{attrs:{id:"通用头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#通用头","aria-hidden":"true"}},[t._v("#")]),t._v(" 通用头 🎏")]),t._v(" "),_("p",[t._v("⭐️ "),_("strong",[t._v("Cache-Control")])]),t._v(" "),_("div",{staticClass:"tip custom-block"},[_("p",[_("code",[t._v("Cache-Control")]),t._v(" 指定请求和响应遵循的缓存机制，每次指定都是为单次请求特异性指定。")])]),t._v(" "),_("p",[t._v("支持的配置指令：🚀")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Options")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("no-cache")]),t._v(" "),_("td",[t._v("请求或响应信息不能缓存（可缓存在本地缓存区，新鲜度验证之前不提供给客户端）")])]),t._v(" "),_("tr",[_("td",[t._v("no-store")]),t._v(" "),_("td",[t._v("尽快删除文档的所有痕迹")])]),t._v(" "),_("tr",[_("td",[t._v("max-age")]),t._v(" "),_("td",[t._v("缓存存在时间，在此期间都不请求服务端，由缓存返回")])]),t._v(" "),_("tr",[_("td",[t._v("min-fresh")]),t._v(" "),_("td",[t._v("文档保持新鲜度的时间")])]),t._v(" "),_("tr",[_("td",[t._v("only-if-cached")]),t._v(" "),_("td",[t._v("只有缓存有副本才能获取副本")])]),t._v(" "),_("tr",[_("td",[t._v("Public")]),t._v(" "),_("td",[t._v("用户范围和存储范围为所有")])]),t._v(" "),_("tr",[_("td",[t._v("Private")]),t._v(" "),_("td",[t._v("指定用户该用户使用和存储")])])])]),t._v(" "),_("p",[t._v("⭐️ "),_("strong",[t._v("Pragma")])]),t._v(" "),_("div",{staticClass:"tip custom-block"},[_("p",[_("code",[t._v("Pragma")]),t._v(" 用来包含实现特定的指令，最常用的是 Pragma: no-cache")])]),t._v(" "),_("p",[t._v("⭐️ "),_("strong",[t._v("Connection")])]),t._v(" "),_("div",{staticClass:"tip custom-block"},[_("p",[_("code",[t._v("Connection")]),t._v(" 表示是否需要持久连接。")])]),t._v(" "),_("p",[t._v("支持的配置指令：🚀")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Options")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Close")]),t._v(" "),_("td",[t._v("本次请求响应后断开连接")])]),t._v(" "),_("tr",[_("td",[t._v("Keepalive")]),t._v(" "),_("td",[t._v("本次请求响应后保持连接")])]),t._v(" "),_("tr",[_("td",[t._v("Keep-Alive")]),t._v(" "),_("td",[t._v("表明希望服务端保持连接多长时间（s）")])])])]),t._v(" "),_("p",[t._v("⭐️ "),_("strong",[t._v("Date")])]),t._v(" "),_("div",{staticClass:"tip custom-block"},[_("p",[_("code",[t._v("Date")]),t._v(" 表示消息发送的时间，用于新鲜度检测。")])]),t._v(" "),_("p",[t._v("⭐️ "),_("strong",[t._v("Upgrade")])]),t._v(" "),_("div",{staticClass:"tip custom-block"},[_("p",[_("code",[t._v("Upgrade")]),t._v(" 指定另一种协议进行连接。")])]),t._v(" "),_("p",[t._v("⭐️ "),_("strong",[t._v("Via")])]),t._v(" "),_("div",{staticClass:"tip custom-block"},[_("p",[_("code",[t._v("Via")]),t._v(" 列出从客户端到 OCS 或者相反方向的响应经过了哪些代理服务器，他们用什么协议（和版本）发送的请求。")])]),t._v(" "),_("h3",{attrs:{id:"请求头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#请求头","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求头 🎏")]),t._v(" "),_("p",[_("code",[t._v("请求头")]),t._v(" 包含以下字段名：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Attributes")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Accept")]),t._v(" "),_("td",[t._v("客户端能接收的介质类型，，"),_("em",[t._v("/")]),t._v(" 表示任何类型，type/* 表示该类型下的所有子类型")])]),t._v(" "),_("tr",[_("td",[t._v("Accept-Charset")]),t._v(" "),_("td",[t._v("客户端能接收的字符集")])]),t._v(" "),_("tr",[_("td",[t._v("Accept-Encoding")]),t._v(" "),_("td",[t._v("客户端声明接收的编码方法")])]),t._v(" "),_("tr",[_("td",[t._v("Accept-Language")]),t._v(" "),_("td",[t._v("客户端声明接收的语言")])]),t._v(" "),_("tr",[_("td",[t._v("Authorization")]),t._v(" "),_("td",[t._v("身份验证信息")])]),t._v(" "),_("tr",[_("td",[t._v("If-Match")]),t._v(" "),_("td",[t._v("对象 "),_("code",[t._v("Etag")]),t._v(" 没有改变时执行请求")])]),t._v(" "),_("tr",[_("td",[t._v("If-None-Match")]),t._v(" "),_("td",[t._v("对象 "),_("code",[t._v("Etag")]),t._v(" 改变时执行请求")])]),t._v(" "),_("tr",[_("td",[t._v("If-Modified-Since")]),t._v(" "),_("td",[t._v("在指定时间之后修改了才执行请求，否则返回304")])]),t._v(" "),_("tr",[_("td",[t._v("If-Unmodified-Since")]),t._v(" "),_("td",[t._v("在指定时间之后没修改才执行请求")])]),t._v(" "),_("tr",[_("td",[t._v("If-Range")]),t._v(" "),_("td",[t._v("对象没改变补充缺失部分，否则返回整个对象")])]),t._v(" "),_("tr",[_("td",[t._v("Range")]),t._v(" "),_("td",[t._v("指定取对象的哪个部分")])]),t._v(" "),_("tr",[_("td",[t._v("Proxy-Authenticate")]),t._v(" "),_("td",[t._v("代理服务器响应时要求其提供身份验证信息")])]),t._v(" "),_("tr",[_("td",[t._v("Proxy-Authorization")]),t._v(" "),_("td",[t._v("响应身份验证请求，提供自己的身份信息")])]),t._v(" "),_("tr",[_("td",[t._v("Host")]),t._v(" "),_("td",[t._v("指定访问域名和端口号")])]),t._v(" "),_("tr",[_("td",[t._v("Referer")]),t._v(" "),_("td",[t._v("表明从哪个 "),_("code",[t._v("URL")]),t._v(" 获取到当前请求中的 "),_("code",[t._v("URL")])])]),t._v(" "),_("tr",[_("td",[t._v("User-Agent")]),t._v(" "),_("td",[t._v("表明自己的浏览器类型信息")])])])]),t._v(" "),_("h3",{attrs:{id:"请求方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#请求方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求方法 🎏")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Methods")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("GET")]),t._v(" "),_("td",[t._v("请求一个指定资源的表示形式，应该只被用于获取数据。")])]),t._v(" "),_("tr",[_("td",[t._v("POST")]),t._v(" "),_("td",[t._v("将实体提交到指定资源，通常导致服务端状态变化")])]),t._v(" "),_("tr",[_("td",[t._v("HEAD")]),t._v(" "),_("td",[t._v("请求同 "),_("code",[t._v("GET")]),t._v("，但是没有响应体返回")])]),t._v(" "),_("tr",[_("td",[t._v("PUT")]),t._v(" "),_("td",[t._v("使用有效载荷替换目标资源")])]),t._v(" "),_("tr",[_("td",[t._v("DELETE")]),t._v(" "),_("td",[t._v("删除指定资源")])]),t._v(" "),_("tr",[_("td",[t._v("CONNECT")]),t._v(" "),_("td",[t._v("建立一个到目标资源标识的隧道")])]),t._v(" "),_("tr",[_("td",[t._v("OPTIONS")]),t._v(" "),_("td",[t._v("用于描述目标资源的通信选项")])]),t._v(" "),_("tr",[_("td",[t._v("TRACE")]),t._v(" "),_("td",[t._v("沿着到目标资源的路径执行一个消息环回测试")])]),t._v(" "),_("tr",[_("td",[t._v("PATCH")]),t._v(" "),_("td",[t._v("对资源应用部分修改")])])])]),t._v(" "),_("h3",{attrs:{id:"响应状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#响应状态","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应状态 🎏")]),t._v(" "),_("p",[t._v("在学习 "),_("code",[t._v("响应头")]),t._v(" 之前我们先来了解一下 "),_("code",[t._v("HTTP")]),t._v(" 中规定的响应状态")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Status")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1xx")]),t._v(" "),_("td",[t._v("服务器收到请求，需要请求者继续执行操作")])]),t._v(" "),_("tr",[_("td",[t._v("2xx")]),t._v(" "),_("td",[t._v("成功，操作被成功接收并处理")])]),t._v(" "),_("tr",[_("td",[t._v("3xx")]),t._v(" "),_("td",[t._v("重定向，需要进一步的操作以完成请求")])]),t._v(" "),_("tr",[_("td",[t._v("4xx")]),t._v(" "),_("td",[t._v("客户端错误，请求包含语法错误或无法完成请求")])]),t._v(" "),_("tr",[_("td",[t._v("5xx")]),t._v(" "),_("td",[t._v("服务器错误，服务器在处理请求的过程中发生了错误")])])])]),t._v(" "),_("h3",{attrs:{id:"响应头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#响应头","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应头 🎏")]),t._v(" "),_("p",[_("code",[t._v("响应头")]),t._v(" 是在前述基础上再增加的项：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Attributes")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Age")]),t._v(" "),_("td",[t._v("表明从产生到现在经过多少时间")])]),t._v(" "),_("tr",[_("td",[t._v("Server")]),t._v(" "),_("td",[t._v("服务器软件和版本信息")])]),t._v(" "),_("tr",[_("td",[t._v("Accept-Ranges")]),t._v(" "),_("td",[t._v("表明自己是否接受获取其某个实体的一部分（比如文件的一部分）的请求。bytes：表示接受，none：表示不接受")])]),t._v(" "),_("tr",[_("td",[t._v("Vary")]),t._v(" "),_("td",[t._v("告诉 Cache 服务器，在什么条件下才能用本响应所返回的对象响应后续的请求。值可为 Content-Encoding / Accept-Encoding")])])])]),t._v(" "),_("h3",{attrs:{id:"实体头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实体头","aria-hidden":"true"}},[t._v("#")]),t._v(" 实体头 🎏")]),t._v(" "),_("p",[t._v("最后是 "),_("code",[t._v("实体头")]),t._v(" 的部分，包含了有关实体及其内容的大量信息，也是服务端返回给客户端的特异性标识。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Attributes")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Allow")]),t._v(" "),_("td",[t._v("支持哪些请求方法")])]),t._v(" "),_("tr",[_("td",[t._v("Location")]),t._v(" "),_("td",[t._v("客户端应当到哪里去提取文档，用于将接收端定位到资源的位置（URL）上。Location通常不是直接设置的，而是通过HttpServletResponse的sendRedirect方法，该方法同时设置状态代码为302。")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Base")]),t._v(" "),_("td",[t._v("相对 URL 使用的基础 URL。")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Encoding")]),t._v(" "),_("td",[t._v("表明自己使用的压缩方法")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Language")]),t._v(" "),_("td",[t._v("指定适合使用的语言")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Length")]),t._v(" "),_("td",[t._v("响应对象的长度")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Location")]),t._v(" "),_("td",[t._v("资源实际所处位置")])]),t._v(" "),_("tr",[_("td",[t._v("Content-MD5")]),t._v(" "),_("td",[t._v("MD5 校验和")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Range")]),t._v(" "),_("td",[t._v("在服务器向客户返回一个部分响应，它必须描述响应覆盖的范围和整个实体长度。一般格式： Content-Range:bytes-unitSPfirst-byte-pos-last-byte-pos/entity-legth。")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Type")]),t._v(" "),_("td",[t._v("服务端告诉客户端响应对象的类型，具体类型参考 "),_("a",{attrs:{href:"https://www.runoob.com/http/http-content-type.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Content-Type类型"),_("OutboundLink")],1)])]),t._v(" "),_("tr",[_("td",[t._v("Etag")]),t._v(" "),_("td",[t._v("对象标志值")])]),t._v(" "),_("tr",[_("td",[t._v("Expires")]),t._v(" "),_("td",[t._v("表明该对象将在什么时候过期")])]),t._v(" "),_("tr",[_("td",[t._v("Last-Modified")]),t._v(" "),_("td",[t._v("最后修改时间")])])])]),t._v(" "),_("p",[t._v("以上便是 "),_("code",[t._v("HTTP")]),t._v(" 协议中我们所必须知道的一些内容了。")]),t._v(" "),_("h2",{attrs:{id:"http-各种版本差异"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-各种版本差异","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 各种版本差异")]),t._v(" "),_("p",[t._v("HTTP 现在主要在使用的版本主要有三种： "),_("code",[t._v("HTTP/1.0")]),t._v("、"),_("code",[t._v("HTTP/1.1")]),t._v(" 和 "),_("code",[t._v("HTTP/2")])]),t._v(" "),_("h3",{attrs:{id:"http-1-0-和-http-1-1-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-0-和-http-1-1-的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP/1.0 和 HTTP/1.1 的区别 🎏")]),t._v(" "),_("p",[t._v("其主要区别如下：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("缓存处理")]),t._v("：在HTTP1.0中主要使用header里的If-Modified-Since,Expires来做为缓存判断的标准，HTTP1.1则引入了更多的缓存控制策略例如Entity tag，If-Unmodified-Since, If-Match, If-None-Match等更多可供选择的缓存头来控制缓存策略。")]),t._v(" "),_("li",[_("strong",[t._v("网络连接和带宽优化")]),t._v("：HTTP1.1则在请求头引入了range头域，它允许只请求资源的某个部分。")]),t._v(" "),_("li",[_("strong",[t._v("错误通知的管理")]),t._v("：新增了24个错误状态响应码。")]),t._v(" "),_("li",[_("strong",[t._v("Host头的管理")]),t._v("：兼容虚拟主机。")]),t._v(" "),_("li",[_("strong",[t._v("长连接")]),t._v("： HTTP 1.1支持长连接（PersistentConnection）和请求的流水线（Pipelining）处理。")])]),t._v(" "),_("h3",{attrs:{id:"http-2-相比-http-1-的新特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-2-相比-http-1-的新特性","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP/2 相比 HTTP/1 的新特性 🎏")]),t._v(" "),_("ul",[_("li",[t._v("性能强劲")]),t._v(" "),_("li",[_("strong",[t._v("新的二进制格式(Binary Format)")]),t._v("，HTTP2.0的协议解析决定采用二进制格式，实现方便且健壮。")]),t._v(" "),_("li",[_("strong",[t._v("多路复用(MultiPlexing)")]),t._v("，每一个request都有连接共享机制。")]),t._v(" "),_("li",[_("strong",[t._v("Header压缩")]),t._v("，HTTP2.0使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表，既避免了重复header的传输，又减小了需要传输的大小。")]),t._v(" "),_("li",[_("strong",[t._v("服务端推送(Server Push)")])])]),t._v(" "),_("p",[t._v("想要了解更详细的细节戳这 "),_("a",{attrs:{href:"https://juejin.im/entry/5981c5df518825359a2b9476",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP各版本详解"),_("OutboundLink")],1)]),t._v(" "),_("h3",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料 🎏")]),t._v(" "),_("ul",[_("li",[t._v("http://tao.he.cn/2018/03/07/%E4%B8%80%E6%AC%A1Http%E8%AF%B7%E6%B1%82%E7%BB%8F%E5%8E%86%E7%9A%84%E8%BF%87%E7%A8%8B/")]),t._v(" "),_("li",[t._v("https://www.jb51.net/article/51951.htm")]),t._v(" "),_("li",[t._v("https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods")]),t._v(" "),_("li",[t._v("https://juejin.im/entry/5981c5df518825359a2b9476")])]),t._v(" "),_("h2",{attrs:{id:"提问"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问","aria-hidden":"true"}},[t._v("#")]),t._v(" 提问")]),t._v(" "),_("p",[t._v("讲解完了昨天的问题，又到了今天的提问环节啦~")]),t._v(" "),_("h3",{attrs:{id:"背景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#背景","aria-hidden":"true"}},[t._v("#")]),t._v(" 背景 🎏")]),t._v(" "),_("p",[t._v("网络安全是一个老生常谈的问题，但是真正落在实践中我们能注意防范的究竟有多少呢？")]),t._v(" "),_("p",[t._v("今天我们就从一些基础的网络攻击开始着手！ 😏")]),t._v(" "),_("h3",{attrs:{id:"今日提问"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#今日提问","aria-hidden":"true"}},[t._v("#")]),t._v(" 今日提问 🎏")]),t._v(" "),_("p",[t._v("注入攻击是 WEB 领域最常见的攻击之一，关于他们的攻击原理和防范形式你真的了解吗？")]),t._v(" "),_("p",[t._v("今天的问题是：")]),t._v(" "),_("p",[t._v("⭐️ "),_("strong",[t._v("请简述 "),_("code",[t._v("XSS攻击")]),t._v(" 和 "),_("code",[t._v("CSRF攻击")]),t._v(" 的原理并谈谈在 WEB 领域的一些主要防范手段")])])])},[],!1,null,null,null);v.default=r.exports}}]);