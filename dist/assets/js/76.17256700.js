(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{331:function(v,_,t){"use strict";t.r(_);var a=t(0),r=Object(a.a)({},function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),t("p",[v._v("贪心算法是平时常用的基础算法思想之一，")]),v._v(" "),t("p",[v._v("即便你不知道它的定义是什么，")]),v._v(" "),t("p",[v._v("在你编程的路上也一定有用过这么一种思想去解决问题。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200303-2.jpg",alt:"封面图"}})]),v._v(" "),t("h2",{attrs:{id:"贪心算法简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#贪心算法简介","aria-hidden":"true"}},[v._v("#")]),v._v(" 贪心算法简介")]),v._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",[v._v("常用基础算法思想分别有：")]),v._v(" "),t("ul",[t("li",[v._v("⭐️ 贪心算法")]),v._v(" "),t("li",[v._v("⭐️ 穷举算法")]),v._v(" "),t("li",[v._v("⭐️ 递归算法")]),v._v(" "),t("li",[v._v("⭐️ 递推算法")]),v._v(" "),t("li",[v._v("⭐️ 分治算法")]),v._v(" "),t("li",[v._v("⭐️ 概率求解")]),v._v(" "),t("li",[v._v("⭐️ 动态规划")])])]),v._v(" "),t("p",[v._v("按照惯例我们先来贴一段百科上的解释：")]),v._v(" "),t("p",[t("strong",[v._v("贪心算法（英语：greedy algorithm），又称贪婪算法，是一种在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是最好或最优的算法。")])]),v._v(" "),t("p",[v._v("看完了之后可能很多同学都还有点懵，")]),v._v(" "),t("p",[v._v("明明每个字都认识，")]),v._v(" "),t("p",[v._v("为什么组合在一起之后就不知道所云何物了呢。😏")]),v._v(" "),t("p",[v._v("别急，")]),v._v(" "),t("p",[v._v("我们来对贪心算法的概念做个一一拆解。")]),v._v(" "),t("h3",{attrs:{id:"贪心算法内涵"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#贪心算法内涵","aria-hidden":"true"}},[v._v("#")]),v._v(" 贪心算法内涵 🎏")]),v._v(" "),t("p",[v._v("要理解这个算法本身，")]),v._v(" "),t("p",[v._v("我们自然是要从其名字出发。")]),v._v(" "),t("p",[v._v("这种思想的名字描述简直可以说是惟妙惟肖了，")]),v._v(" "),t("p",[t("strong",[v._v("greedy(贪心/贪婪)")]),v._v(" 这个词本意就是用来指代个体利益最大化的人群，")]),v._v(" "),t("p",[v._v("应用在程序中也是如此，")]),v._v(" "),t("p",[t("code",[v._v("贪婪算法")]),v._v(" 也就是在每一步中都达到子问题最优化，以求达到整体最优化的一种思考问题的方式。")]),v._v(" "),t("h3",{attrs:{id:"贪心算法基本步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#贪心算法基本步骤","aria-hidden":"true"}},[v._v("#")]),v._v(" 贪心算法基本步骤 🎏")]),v._v(" "),t("p",[v._v("一般而言，")]),v._v(" "),t("p",[v._v("使用贪心算法求解问题有如下几个比较固定的步骤：")]),v._v(" "),t("ul",[t("li",[v._v("⭐️ 使用数字模型来描述问题")]),v._v(" "),t("li",[v._v("⭐️ 把想要求解的问题划分为若干个子问题")]),v._v(" "),t("li",[v._v("⭐️ 针对每个子问题的求解使用最优策略")]),v._v(" "),t("li",[v._v("⭐️ 合并子解为一个整体解")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200303-4.jpg",alt:"贪心算法介绍完结图"}})]),v._v(" "),t("h2",{attrs:{id:"贪心算法的应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#贪心算法的应用","aria-hidden":"true"}},[v._v("#")]),v._v(" 贪心算法的应用")]),v._v(" "),t("p",[v._v("在搞明白了贪心算法究竟是什么之后，")]),v._v(" "),t("p",[v._v("这时候会有同学开始喃喃自语了，")]),v._v(" "),t("p",[v._v("是可以有这么种算法没错，")]),v._v(" "),t("p",[v._v("那么我们究竟在什么情况下能用到它呢？")]),v._v(" "),t("h3",{attrs:{id:"贪心算法的兑零钱应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#贪心算法的兑零钱应用","aria-hidden":"true"}},[v._v("#")]),v._v(" 贪心算法的兑零钱应用 🎏")]),v._v(" "),t("p",[v._v("想象一下有这么一个场景，")]),v._v(" "),t("p",[v._v("你拿着一张红色毛爷爷买了价值 74 软妹币的皮卡丘玩偶，")]),v._v(" "),t("p",[v._v("这时店员要给你找钱的话，")]),v._v(" "),t("p",[v._v("你最期望的零钱组合会是怎么样的呢？")]),v._v(" "),t("p",[v._v("相信精明的你一定是下面这么想的：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200303-3.png",alt:"36软妹币零钱组合"}})]),v._v(" "),t("p",[v._v("通过这么组合可以实现拿在手上的零钱数量是最少的。 😏")]),v._v(" "),t("p",[v._v("这么一个例子或许你还没看出跟贪心算法有什么关系，")]),v._v(" "),t("p",[v._v("那我们按照上面的思考步骤来重新梳理一下整个过程吧：")]),v._v(" "),t("ul",[t("li",[v._v("⭐️ 需要使用 20、10、5、1 元的面值进行总共 36 元的找零")]),v._v(" "),t("li",[v._v("⭐️ 子问题为每次需要使用什么面额的零钱")]),v._v(" "),t("li",[v._v("⭐️ 每次使用能使用的最高面值")]),v._v(" "),t("li",[v._v("⭐️ 合并每次使用的面值即为解")])]),v._v(" "),t("p",[v._v("通过这么一个步骤，")]),v._v(" "),t("p",[v._v("不知道你对贪心算法有没有了自己的理解呢？")]),v._v(" "),t("p",[v._v("下面我们马上来一道题检验一下吧！")]),v._v(" "),t("h3",{attrs:{id:"贪心算法例题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#贪心算法例题","aria-hidden":"true"}},[v._v("#")]),v._v(" 贪心算法例题 🎏")]),v._v(" "),t("p",[v._v("此题为 "),t("code",[v._v("leetcode")]),v._v(" 平台 55 号题目：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200303-5.png",alt:"leetcode #55"}})]),v._v(" "),t("p",[v._v("虽然这个题目不一定要使用贪心算法，")]),v._v(" "),t("p",[v._v("使用动态规划甚至于枚举一样可以解决问题，")]),v._v(" "),t("p",[v._v("但是使用贪心算法能达到最简代码和最高效率。")]),v._v(" "),t("p",[v._v("下面是使用贪心算法通过的用时：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200303-1.png",alt:"贪心算法解决#55用时"}})]),v._v(" "),t("p",[v._v("聪明的你能写出这个算法吗？")]),v._v(" "),t("p",[v._v("请在下方评论分享你的答案吧！")]),v._v(" "),t("p",[v._v("这里也提供我自己版本的答案：")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://linsicong.com/DailyTest/2020-03-03-44.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("#55 跳跃游戏"),t("OutboundLink")],1)])]),v._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[v._v("#")]),v._v(" 参考资料")]),v._v(" "),t("ul",[t("li",[v._v("https://zh.wikipedia.org/wiki/%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95")]),v._v(" "),t("li",[v._v("https://leetcode-cn.com/problems/jump-game/")])])])},[],!1,null,null,null);_.default=r.exports}}]);