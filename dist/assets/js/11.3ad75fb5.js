(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{291:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("欢迎回来！ 😄")]),s._v(" "),t("p",[s._v("这里是每日练题系列。")]),s._v(" "),t("p",[s._v("这个系列会先分享昨天问题的答案并提出新的问题。")]),s._v(" "),t("h2",{attrs:{id:"回顾上期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回顾上期","aria-hidden":"true"}},[s._v("#")]),s._v(" 回顾上期")]),s._v(" "),t("p",[s._v("上期我们提出的问题是：")]),s._v(" "),t("p",[s._v("⭐️ "),t("strong",[s._v("词法作用域、语法作用域你能分清吗")])]),s._v(" "),t("p",[s._v("要想解答这个问题我们要先分清楚这两个到底有什么区别。")]),s._v(" "),t("h3",{attrs:{id:"答案公布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#答案公布","aria-hidden":"true"}},[s._v("#")]),s._v(" 答案公布")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("b")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// undefined")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("b")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h3",{attrs:{id:"概念剖析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念剖析","aria-hidden":"true"}},[s._v("#")]),s._v(" 概念剖析")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",[s._v("作用域是指源代码中定义变量的区域，确定当前代码查找变量的作用范围。")])]),s._v(" "),t("p",[s._v("先说结论， "),t("code",[s._v("JavaScript")]),s._v(" 采用的是 "),t("code",[s._v("词法作用域（静态作用域）")])]),s._v(" "),t("p",[s._v("在计算机科学范围内对这两个词下了定义：")]),s._v(" "),t("ul",[t("li",[s._v("词法作用域： "),t("code",[s._v("变量")]),s._v(" 和 "),t("code",[s._v("块作用域")]),s._v(" 由代码书写位置决定。")]),s._v(" "),t("li",[s._v("动态作用域： 函数的作用域是在 "),t("code",[s._v("函数调用")]),s._v(" 的时候决定。")])]),s._v(" "),t("h3",{attrs:{id:"实例讲解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例讲解","aria-hidden":"true"}},[s._v("#")]),s._v(" 实例讲解")]),s._v(" "),t("p",[s._v("这里我们引用一个 "),t("code",[s._v("JavaScript权威指南")]),s._v(" 的例子")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" scope "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"global scope"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("checkscope")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" scope "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local scope"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" scope"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("checkscope")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("按照上面的定义我们做出两种假设")]),s._v(" "),t("ul",[t("li",[s._v("如果是词法作用域，那么 "),t("code",[s._v("f函数")]),s._v(" 输出的内容将从函数定义作用域中提取，也即 "),t("code",[s._v("local scope")]),s._v("。")]),s._v(" "),t("li",[s._v("如果是动态作用域，那么 "),t("code",[s._v("f函数")]),s._v(" 输出的内容将从 "),t("code",[s._v("checkscope函数作用域")]),s._v(" 中提取，也即 "),t("code",[s._v("global scope")]),s._v("。")])]),s._v(" "),t("p",[s._v("上面我们已经提到了 "),t("code",[s._v("JavaScript")]),s._v(" 中使用的是 "),t("code",[s._v("词法作用域")]),s._v("。")]),s._v(" "),t("p",[s._v("所以结果输出的就是 "),t("code",[s._v("local scope")]),s._v("。")]),s._v(" "),t("p",[s._v("你学会了吗？ 😛")]),s._v(" "),t("h3",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("ul",[t("li",[s._v("https://github.com/mqyqingfeng/Blog/issues/3")])]),s._v(" "),t("h2",{attrs:{id:"提问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提问","aria-hidden":"true"}},[s._v("#")]),s._v(" 提问")]),s._v(" "),t("p",[s._v("讲解完了昨天的问题，又到了今天的提问环节啦~")]),s._v(" "),t("h3",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景","aria-hidden":"true"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),t("p",[s._v("判断条件是我们在进行编程中一个很基础的部分，相信很多童鞋都对 "),t("code",[s._v("JavaScript")]),s._v(" 中的各种判断有过疑惑：")]),s._v(" "),t("p",[s._v("具体表现为：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("===")]),s._v(" 和 "),t("code",[s._v("==")]),s._v(" 有什么区别")]),s._v(" "),t("li",[s._v("类型系统与强制类型转换")]),s._v(" "),t("li",[s._v("判断数组相等")]),s._v(" "),t("li",[s._v("判断对象相等")]),s._v(" "),t("li",[s._v("特殊保留字的判断问题，如 "),t("code",[s._v("undefined")]),s._v(" 、 "),t("code",[s._v("NaN")]),s._v(" 和 "),t("code",[s._v("null")])])]),s._v(" "),t("h3",{attrs:{id:"今日提问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#今日提问","aria-hidden":"true"}},[s._v("#")]),s._v(" 今日提问")]),s._v(" "),t("p",[s._v("由此，我们今天的问题是：")]),s._v(" "),t("p",[s._v("⭐️ "),t("strong",[t("code",[s._v("JavaScript")]),s._v(" 的类型系统和相等判断你都熟悉吗？")])])])},[],!1,null,null,null);a.default=e.exports}}]);