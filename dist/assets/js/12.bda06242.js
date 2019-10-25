(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{285:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("欢迎回来！ 😄")]),t._v(" "),a("p",[t._v("这里是每日练题系列。")]),t._v(" "),a("p",[t._v("这个系列会先分享昨天问题的答案并提出新的问题。")]),t._v(" "),a("h2",{attrs:{id:"回顾上期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回顾上期","aria-hidden":"true"}},[t._v("#")]),t._v(" 回顾上期")]),t._v(" "),a("p",[t._v("上期我们提出的问题是：")]),t._v(" "),a("p",[t._v("⭐️ "),a("strong",[a("code",[t._v("JavaScript")]),t._v(" 的类型系统和相等判断你都熟悉吗？")])]),t._v(" "),a("h2",{attrs:{id:"答案公布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#答案公布","aria-hidden":"true"}},[t._v("#")]),t._v(" 答案公布")]),t._v(" "),a("p",[t._v("要搞清楚这个问题我们要从 "),a("code",[t._v("JavaScript")]),t._v(" 底层的设计说起。")]),t._v(" "),a("h2",{attrs:{id:"javascript-类型系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-类型系统","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript 类型系统")]),t._v(" "),a("p",[a("code",[t._v("JavaScript")]),t._v(" 中的类型系统大概有如下那么几类：")]),t._v(" "),a("ul",[a("li",[t._v("⭐️ Boolean")]),t._v(" "),a("li",[t._v("⭐️ Number")]),t._v(" "),a("li",[t._v("⭐️ String")]),t._v(" "),a("li",[t._v("⭐️ Undefined")]),t._v(" "),a("li",[t._v("⭐️ Null")]),t._v(" "),a("li",[t._v("⭐️ Symbol")]),t._v(" "),a("li",[t._v("⚡️ Object")]),t._v(" "),a("li",[t._v("⚡️ Function")]),t._v(" "),a("li",[t._v("⚡️ Array")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("⭐️ 的项代表基本类型\n⚡️ 的项代表引用类型")])]),t._v(" "),a("p",[a("strong",[t._v("基本类型和引用类型的区别也是一个值得深究的点。")])]),t._v(" "),a("h3",{attrs:{id:"boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boolean","aria-hidden":"true"}},[t._v("#")]),t._v(" Boolean 🎏")]),t._v(" "),a("p",[t._v("🔎 出现场景：")]),t._v(" "),a("ul",[a("li",[t._v("条件语句隐式转换")]),t._v(" "),a("li",[t._v("定义")])]),t._v(" "),a("p",[t._v("🔎 可能值： "),a("code",[t._v("true")]),t._v(" 和 "),a("code",[t._v("false")])]),t._v(" "),a("p",[t._v("🔎 类型转换：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),t._v(" "),a("th",[t._v("Boolean")]),t._v(" "),a("th",[t._v("Number")]),t._v(" "),a("th",[t._v("String")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("true")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v('"true"')])]),t._v(" "),a("tr",[a("td",[t._v("false")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v('"false"')])])])]),t._v(" "),a("h3",{attrs:{id:"number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#number","aria-hidden":"true"}},[t._v("#")]),t._v(" Number 🎏")]),t._v(" "),a("p",[t._v("🔎 出现场景：")]),t._v(" "),a("ul",[a("li",[t._v("定义")])]),t._v(" "),a("p",[t._v("🔎 可能值： 整数和浮点数。")]),t._v(" "),a("p",[t._v("🔎 类型转换：")]),t._v(" "),a("p",[t._v("可使用 "),a("code",[t._v("Number()")]),t._v(" 、 "),a("code",[t._v("parseInt")]),t._v(" 和 "),a("code",[t._v("parseFloat")]),t._v(" 进行转换。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),t._v(" "),a("th",[t._v("Boolean")]),t._v(" "),a("th",[t._v("Number")]),t._v(" "),a("th",[t._v("String")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v('"1"')])]),t._v(" "),a("tr",[a("td",[t._v("0")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v('"0"')])]),t._v(" "),a("tr",[a("td",[t._v("Infinity")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v('"Infinity"')])]),t._v(" "),a("tr",[a("td",[t._v("NaN")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v('"NaN"')])])])]),t._v(" "),a("h3",{attrs:{id:"string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string","aria-hidden":"true"}},[t._v("#")]),t._v(" String 🎏")]),t._v(" "),a("p",[t._v("🔎 出现场景：")]),t._v(" "),a("ul",[a("li",[t._v("定义")])]),t._v(" "),a("p",[t._v("🔎 可能值： 单引号或双引号括起来的字符序列。")]),t._v(" "),a("p",[t._v("🔎 类型转换：")]),t._v(" "),a("p",[t._v("可使用 "),a("code",[t._v("String()")]),t._v(" 和 "),a("code",[t._v("toString()")]),t._v(" 进行转换。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),t._v(" "),a("th",[t._v("Boolean")]),t._v(" "),a("th",[t._v("Number")]),t._v(" "),a("th",[t._v("String")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("'1'")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v('"1"')])]),t._v(" "),a("tr",[a("td",[t._v("'0'")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v('"0"')])]),t._v(" "),a("tr",[a("td",[t._v("'666'")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("666")]),t._v(" "),a("td",[t._v('"666"')])]),t._v(" "),a("tr",[a("td",[t._v("'abc123'")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("NaN")]),t._v(" "),a("td",[t._v('"abc123"')])])])]),t._v(" "),a("h3",{attrs:{id:"undefined"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#undefined","aria-hidden":"true"}},[t._v("#")]),t._v(" Undefined 🎏")]),t._v(" "),a("p",[t._v("🔎 出现场景：")]),t._v(" "),a("ul",[a("li",[t._v("声明未赋值")]),t._v(" "),a("li",[t._v("使用的对象属性不存在")]),t._v(" "),a("li",[t._v("无返回值的函数执行结果")]),t._v(" "),a("li",[t._v("函数的缺失传入参数")]),t._v(" "),a("li",[t._v("void（expression）")])]),t._v(" "),a("p",[t._v("🔎 可能值： "),a("code",[t._v("undefined")])]),t._v(" "),a("p",[t._v("🔎 类型转换：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),t._v(" "),a("th",[t._v("Boolean")]),t._v(" "),a("th",[t._v("Number")]),t._v(" "),a("th",[t._v("String")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("undefined")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("NaN")]),t._v(" "),a("td",[t._v('"undefined。"')])])])]),t._v(" "),a("h3",{attrs:{id:"null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#null","aria-hidden":"true"}},[t._v("#")]),t._v(" Null 🎏")]),t._v(" "),a("p",[t._v("🔎 出现场景：")]),t._v(" "),a("ul",[a("li",[t._v("定义（空指针）")]),t._v(" "),a("li",[t._v("表示调用的对象不存在")])]),t._v(" "),a("p",[t._v("🔎 可能值： "),a("code",[t._v("null")])]),t._v(" "),a("p",[t._v("🔎 类型转换：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),t._v(" "),a("th",[t._v("Boolean")]),t._v(" "),a("th",[t._v("Number")]),t._v(" "),a("th",[t._v("String")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("null")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v('"null"')])])])]),t._v(" "),a("p",[a("strong",[t._v("注意区别 "),a("code",[t._v("null")]),t._v(" 和 "),a("code",[t._v("undefined")])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("null == undefined // true\nnull ===  undefined // false")])]),t._v(" "),a("h3",{attrs:{id:"symbol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symbol","aria-hidden":"true"}},[t._v("#")]),t._v(" Symbol 🎏")]),t._v(" "),a("p",[t._v("🔎 出现场景：")]),t._v(" "),a("ul",[a("li",[t._v("定义")])]),t._v(" "),a("p",[t._v("🔎 可能值： 一个永远不重复的值")]),t._v(" "),a("h2",{attrs:{id:"类型判断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型判断","aria-hidden":"true"}},[t._v("#")]),t._v(" 类型判断")]),t._v(" "),a("p",[t._v("类型判断的需求也是一个常见需求，那么我们来看看我们有哪些工具吧。")]),t._v(" "),a("h3",{attrs:{id:"typeof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typeof","aria-hidden":"true"}},[t._v("#")]),t._v(" typeof 🎏")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("typeof")]),t._v(" 是一个操作符，并不是一个函数")])]),t._v(" "),a("ul",[a("li",[t._v("可以识别除 "),a("code",[t._v("null")]),t._v(" 外的简单类型")]),t._v(" "),a("li",[t._v("不能识别除 "),a("code",[t._v("Function")]),t._v(" 外的对象类型")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"darko"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"string"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"number"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"boolean"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"undefined"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"object"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"darko"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"object"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "function"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "object"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"object"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h3",{attrs:{id:"instanceof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instanceof","aria-hidden":"true"}},[t._v("#")]),t._v(" instanceof 🎏")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("这个操作符的返回值为 "),a("code",[t._v("Boolean")])])]),t._v(" "),a("ul",[a("li",[t._v("可以识别内置对象的类型")]),t._v(" "),a("li",[t._v("不可以识别简单类型")]),t._v(" "),a("li",[t._v("识别自定义对象类型")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructor","aria-hidden":"true"}},[t._v("#")]),t._v(" constructor 🎏")]),t._v(" "),a("ul",[a("li",[t._v("识别除 "),a("code",[t._v("undefined")]),t._v(" 和 "),a("code",[t._v("null")]),t._v(" 外的简单类型")]),t._v(" "),a("li",[t._v("识别内置对象类型")]),t._v(" "),a("li",[t._v("识别自定义对象类型")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"object-prototype-tostring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-prototype-tostring","aria-hidden":"true"}},[t._v("#")]),t._v(" Object.prototype.toString")]),t._v(" "),a("ul",[a("li",[t._v("可以识别简单类型和内置对象")]),t._v(" "),a("li",[t._v("不能识别自定义类型")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[t._v("https://segmentfault.com/a/1190000004733689")]),t._v(" "),a("li",[t._v("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object")]),t._v(" "),a("li")]),t._v(" "),a("h2",{attrs:{id:"提问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提问","aria-hidden":"true"}},[t._v("#")]),t._v(" 提问")]),t._v(" "),a("p",[t._v("讲解完了昨天的问题，又到了今天的提问环节啦~")]),t._v(" "),a("h3",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景","aria-hidden":"true"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),a("p",[a("code",[t._v("柯里化（Curry化）")]),t._v(" 是一个经典的计算机概念，被广泛用于工具函数的设计中。")]),t._v(" "),a("p",[t._v("有人曾这么评价它："),a("code",[t._v("柯里化函数式编程实现的高铁方法。")])]),t._v(" "),a("p",[a("code",[t._v("柯里化")]),t._v(" 这一计算机科学的概念是想要解决什么问题呢？")]),t._v(" "),a("p",[t._v("维基百科对于 "),a("code",[t._v("柯里化")]),t._v(" 的定义是")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("柯里化是把接受多个参数的函数变换成接受一个单一参数的函数，并且返回接受余下的参数而且返回结果的新函数的技术")])]),t._v(" "),a("p",[t._v("有点拗口是不是 😏")]),t._v(" "),a("p",[t._v("我们来看一个例子：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 普通函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 柯里化调用形式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("可以看出我们原生的函数是不支持这么调用的，对应的函数应为下面这样：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//符合柯里化的函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("functin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//检查是否为柯里化")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//5")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h3",{attrs:{id:"今日提问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#今日提问","aria-hidden":"true"}},[t._v("#")]),t._v(" 今日提问 🎏")]),t._v(" "),a("p",[t._v("我们今天的问题是：")]),t._v(" "),a("p",[t._v("⭐️ "),a("strong",[t._v("如何书写一个转换函数将普通的 "),a("code",[t._v("JavaScript")]),t._v(" 函数转化为 "),a("code",[t._v("柯里化")]),t._v(" 形式的函数")])])])},[],!1,null,null,null);s.default=e.exports}}]);