(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{116:function(t,e,n){"use strict";n(97),n(138),n(110),n(257);var i=n(98),a={props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:i.f,isMailto:i.g,isTel:i.h}},s=n(2),r=Object(s.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[n("i",{class:"iconfont "+t.item.icon}),t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[n("i",{class:"iconfont "+t.item.icon}),t._v("\n  "+t._s(t.item.text)+"\n")])},[],!1,null,null,null);e.a=r.exports},128:function(t,e,n){},140:function(t,e,n){},141:function(t,e,n){},142:function(t,e,n){},143:function(t,e,n){},144:function(t,e,n){},145:function(t,e,n){},146:function(t,e,n){},147:function(t,e,n){},148:function(t,e,n){},149:function(t,e,n){},150:function(t,e,n){},151:function(t,e,n){},153:function(t,e,n){},154:function(t,e,n){},155:function(t,e,n){},156:function(t,e,n){},168:function(t,e,n){"use strict";n(105),n(97);var i=n(298),a=(n(217),n(2)),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null).exports,r=(n(218),n(126),n(184),n(201)),o=(n(110),n(115),n(103),n(138),n(116)),c=n(199),l={components:{NavLink:o.a,DropdownTransition:c.a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},u=(n(260),Object(a.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[n("i",{class:"iconfont "+t.item.icon}),t._v("\n      "+t._s(t.item.text)+"\n    ")]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null).exports),h=n(98),d={components:{NavLink:o.a,DropdownLink:u},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,a=this.$themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(function(s){var r,o=e[s],c=a[s]&&a[s].label||o.lang;return o.lang===t.$lang?r=n:(r=n.replace(t.$localeConfig.path,s),i.some(function(t){return t.path===r})||(r=s)),{text:c,link:r}})};return[].concat(Object(r.a)(this.userNav),[s])}var o=this.$themeConfig.blogConfig||{},c=this.userNav.some(function(t){return!o.category||t.text===(o.category.text||"分类")}),l=this.userNav.some(function(t){return!o.tag||t.text===(o.tag.text||"标签")});if(!c&&o.hasOwnProperty("category")){var u=o.category,h=this.$categories;this.userNav.splice(parseInt(u.location||2)-1,0,{items:h.list.map(function(t){return t.link=t.path,t.text=t.name,t}),text:u.text||"分类",type:"links",icon:"reco-category"})}if(!l&&o.hasOwnProperty("tag")){var d=o.tag;this.userNav.splice(parseInt(d.location||3)-1,0,{link:"/tag/",text:d.text||"标签",type:"links",icon:"reco-tag"})}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return Object.assign(Object(h.j)(t),{items:(t.items||[]).map(h.j)})})},repoLink:function(){var t=this.$themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$themeConfig.repoLabel)return this.$themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},m=(n(261),Object(a.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null).exports),p=n(262),f=n.n(p),v=(n(35),n(139),{data:function(){return{reco:{},colors:{blue:"#2196f3",red:"#f26d6d",green:"#3eaf7c",orange:"#fb9b5f"}}},mounted:function(){this.reco={themes:["blue","red","green","orange"],disableDarkTheme:!1},this.reco.hasThemes=this.$themeConfig.themePicker||!0}}),g={name:"ThemeOptions",mixins:[v],data:function(){return{darkTheme:"false"}},mounted:function(){var t=localStorage.getItem("reco-theme"),e=localStorage.getItem("reco-night"),n=document.body.classList;this.darkTheme="true"===e,"true"===e&&n.add("reco-theme-night"),t&&this.setTheme(t)},methods:{toggleDarkTheme:function(){localStorage.setItem("reco-night",this.darkTheme);var t=document.body.classList;if(this.darkTheme){var e=Object(r.a)(t);t.value="",t.add("reco-theme-night"),e.forEach(function(e){t.add(e)})}else t.remove("reco-theme-night")},setTheme:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.reco.themes,i=document.body.classList,a=n.map(function(t){return"reco-theme-".concat(t)});if(!t)return e&&localStorage.removeItem("reco-theme"),void i.remove.apply(i,Object(r.a)(a));i.remove.apply(i,Object(r.a)(a.filter(function(e){return e!=="reco-theme-".concat(t)}))),e?(i.add("reco-theme-".concat(t)),localStorage.setItem("reco-theme",t)):(localStorage.removeItem("reco-theme"),i.remove("reco-theme-".concat(t)))}}},b=(n(263),Object(a.a)(g,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-options"},[t.reco.hasThemes?n("ul",{staticClass:"color-theme-options"},[n("li",[n("a",{staticClass:"default-theme",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.setTheme()}}})]),t._v(" "),t._l(t.reco.themes,function(e){return n("li",{key:e},[n("a",{class:e+"-theme",style:{background:t.colors[e]},attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.setTheme(e)}}})])})],2):t._e(),t._v(" "),t.reco.disableDarkTheme?t._e():n("div",{staticClass:"dark-theme-options toggle-option"},[n("label",{attrs:{for:"dark-theme-toggle"}},[t._v("Enable Dark Theme?")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.darkTheme,expression:"darkTheme"}],attrs:{id:"dark-theme-toggle",type:"checkbox"},domProps:{checked:Array.isArray(t.darkTheme)?t._i(t.darkTheme,null)>-1:t.darkTheme},on:{change:[function(e){var n=t.darkTheme,i=e.target,a=!!i.checked;if(Array.isArray(n)){var s=t._i(n,null);i.checked?s<0&&(t.darkTheme=n.concat([null])):s>-1&&(t.darkTheme=n.slice(0,s).concat(n.slice(s+1)))}else t.darkTheme=a},t.toggleDarkTheme]}})])])},[],!1,null,null,null).exports),k={name:"UserSettings",directives:{"click-outside":f.a},components:{ThemeOptions:b},mixins:[v],data:function(){return{showMenu:!1}},computed:{showSettings:function(){var t=this.reco;return t.hasThemes||!0!==t.disableDarkTheme||!0!==t.disableThemeIgnore}},methods:{hideMenu:function(){this.showMenu=!1}}},_=(n(264),Object(a.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showSettings?n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideMenu,expression:"hideMenu"}],staticClass:"color-picker"},[n("a",{staticClass:"color-button",on:{click:function(e){e.preventDefault(),t.showMenu=!t.showMenu}}},[n("i",{staticClass:"iconfont reco-color"})]),t._v(" "),n("transition",{attrs:{name:"menu-transition",mode:"out-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],staticClass:"color-picker-menu"},[n("ThemeOptions")],1)])],1):t._e()},[],!1,null,null,null).exports);function y(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var w={components:{SidebarButton:s,NavLinks:m,SearchBox:i.a,AlgoliaSearchBox:{},Theme:_},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(y(this.$el,"paddingLeft"))+parseInt(y(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},C=(n(265),Object(a.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$themeConfig.logo,alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name"},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("NavLinks",{staticClass:"can-hide"}),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$themeConfig.search&&!1!==t.$frontmatter.search?n("SearchBox"):t._e()],1)],1)},[],!1,null,null,null).exports),$=n(198),x=n(19),S={name:"Sidebar",mixins:[{data:function(){return{common:null}},mounted:function(){this.common=document.getElementById("common"),this.common.addEventListener("scroll",this.onScroll)},methods:{onScroll:n.n(x)()(function(){this.setActiveHash()},300),setActiveHash:function(){for(var t=this,e=[].slice.call(document.querySelectorAll(".sidebar-link")),n=[].slice.call(document.querySelectorAll(".header-anchor")).filter(function(t){return e.some(function(e){return e.hash===t.hash})}),i=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop,this.common.scrollTop),a=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight,this.common.scrollHeight),s=this.common.innerHeight+i,r=0;r<n.length;r++){var o=n[r],c=n[r+1],l=0===r&&0===i||i>=o.parentElement.offsetTop+10&&(!c||i<c.parentElement.offsetTop-10),u=decodeURIComponent(this.$route.hash);if(l&&u!==decodeURIComponent(o.hash)){var h=o;if(s===a)for(var d=r+1;d<n.length;d++)if(u===decodeURIComponent(n[d].hash))return;return this.$vuepress.$set("disableScrollBehavior",!0),void this.$router.replace(decodeURIComponent(h.hash),function(){t.$nextTick(function(){t.$vuepress.$set("disableScrollBehavior",!1)})})}}}},beforeDestroy:function(){this.common.removeEventListener("scroll",this.onScroll)}}],components:{SidebarLinks:$.default,NavLinks:m},props:["items"]},T=(n(268),Object(a.a)(S,function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)},[],!1,null,null,null).exports),O=(n(181),{mounted:function(){var t=this.$themeConfig.keyPage,e="#424242",n="#424242";t&&(e=t.color||e,n=t.lineColor||n);var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js",document.body.append(i),i.onload=function(){particlesJS("particles-oli-wrapper",{particles:{number:{value:40,density:{enable:!0,value_area:800}},color:{value:e},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5}},opacity:{value:.3,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:20,random:!0,anim:{enable:!1,speed:30,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:250,color:n,opacity:.2,width:1},move:{enable:!0,speed:3,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!0,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:.5}}}},retina_detect:!0})}}}),I=(n(269),{components:{Background:Object(a.a)(O,function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"particles-oli-wrapper"}})},[],!1,null,"0c526482",null).exports},props:{isPage:{type:Boolean,default:!1}},name:"Password",data:function(){return{warningText:"Konck! Knock!",key:""}},computed:{year:function(){return(new Date).getFullYear()}},methods:{inter:function(){var t=this.key.trim(),e=this.isPage?"pageKey":"key";if(sessionStorage.setItem(e,t),this.isPage?this.isHasPageKey():this.isHasKey()){var n=this.$refs.passwordBtn,i=document.getElementById("box").getClientRects()[0].width;n.style.width="".concat(i-2,"px"),n.style.opacity=1,setTimeout(function(){window.location.reload()},800)}else this.warningText="Key Error"},isHasKey:function(){var t=this.$themeConfig.keyPage.keys;return t&&t.indexOf(sessionStorage.getItem("key"))>-1},isHasPageKey:function(){var t=this.$frontmatter.keys;return t&&t.indexOf(sessionStorage.getItem("pageKey"))>-1},inputFocus:function(){this.warningText="Input Your Key"},inputBlur:function(){this.warningText="Konck! Knock!"}}}),j=(n(270),Object(a.a)(I,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"password-shadow",class:{"is-home":!t.isPage}},[n("Background"),t._v(" "),n("h3",{staticClass:"title"},[t._v(t._s(t.isPage?t.$frontmatter.title:t.$site.title))]),t._v(" "),t.isPage?t._e():n("p",{staticClass:"description"},[t._v(t._s(t.$site.description))]),t._v(" "),n("label",{staticClass:"inputBox",attrs:{id:"box"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],attrs:{type:"password"},domProps:{value:t.key},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.inter(e)},focus:t.inputFocus,blur:t.inputBlur,input:function(e){e.target.composing||(t.key=e.target.value)}}}),t._v(" "),n("span",[t._v(t._s(t.warningText))]),t._v(" "),n("button",{ref:"passwordBtn",on:{click:t.inter}},[t._v("OK")])]),t._v(" "),n("div",{staticClass:"footer"},[t._m(0),t._v(" "),n("span",[n("i",{staticClass:"iconfont reco-other"}),t._v(" "),n("a",[t._v(t._s(t.$themeConfig.author||t.$site.title))])]),t._v(" "),n("span",[n("i",{staticClass:"iconfont reco-copyright"}),t._v(" "),n("a",[t._v(t._s(t.year))])])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"iconfont reco-theme"}),this._v(" "),e("a",{attrs:{target:"blank",href:"https://www.npmjs.com/package/vuepress-theme-reco"}},[this._v("vuePress-theme-reco")])])}],!1,null,"b18c39ac",null).exports),L={props:["isComment"],computed:{isShowComment:function(){var t=this.$frontmatter;return 0!=this.isComment&&0!=t.isComment&&1!=t.home}},mounted:function(){this.createValine()},methods:{createValine:function(){var t=this.$themeConfig.valineConfig;if(t){var e=n(271),i=n(272);"undefined"!=typeof window&&(this.window=window,window.AV=i),new e({el:"#valine",appId:t.appId,appKey:t.appKey,placeholder:t.placeholder||"just go go",notify:t.notify||!1,verify:t.verify||!1,avatar:t.avatar||"retro",visitor:t.visitor||!0,recordIP:t.recordIP||!1,path:window.location.pathname})}}},watch:{$route:function(t,e){var n=this;t.path!==e.path&&setTimeout(function(){n.createValine()},300)}}},P=(n(273),Object(a.a)(L,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.isShowComment,expression:"isShowComment"}],staticClass:"valine-wrapper"},[e("div",{attrs:{id:"valine"}})])},[],!1,null,"2f6076e6",null).exports),E=(n(152),{name:"BackToTop",props:{visibilityHeight:{type:Number,default:400},backPosition:{type:Number,default:0},customStyle:{type:Object,default:function(){return{right:"1rem",bottom:"6rem",width:"2.5rem",height:"2.5rem","border-radius":".25rem","line-height":"2.5rem",backgroundColor:"rgba(231, 234, 241,.5)"}}},transitionName:{type:String,default:"fade"}},data:function(){return{visible:!1,interval:null,isMoving:!1,common:null}},mounted:function(){this.common=document.getElementById("common"),this.common.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){this.common.removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)},methods:{handleScroll:function(){this.visible=this.common.scrollTop>this.visibilityHeight},backToTop:function(){var t=this;if(!this.isMoving){var e=this.common.scrollTop,n=0;this.isMoving=!0,this.interval=setInterval(function(){var i=Math.floor(t.easeInOutQuad(10*n,e,-e,500));i<=t.backPosition?(t.common.scrollTo(0,t.backPosition),clearInterval(t.interval),t.isMoving=!1):t.common.scrollTo(0,i),n++},16.7)}},easeInOutQuad:function(t,e,n,i){return(t/=i/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}}}),N=(n(274),{components:{Sidebar:T,Navbar:C,Password:j,Valine:P,BackToTop:Object(a.a)(E,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:this.transitionName}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"back-to-ceiling",style:this.customStyle,on:{click:this.backToTop}},[e("i",{staticClass:"iconfont reco-up"})])])},[],!1,null,"9fea163a",null).exports},props:["sidebar","isComment"],data:function(){return{isSidebarOpen:!1,isHasKey:!0,isHasPageKey:!0,nightMode:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!1!==this.sidebar&&!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(h.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar,"night-mode":this.nightMode},t]}},mounted:function(){var t=this;this.$router.afterEach(function(){t.isSidebarOpen=!1}),localStorage.getItem("nightMode")&&(document.documentElement.style.background="#000",this.nightMode=!0),this.hasKey(),this.hasPageKey()},methods:{hasKey:function(){var t=this.$themeConfig.keyPage;if(t){var e=t.keys;this.isHasKey=e&&e.indexOf(sessionStorage.getItem("key"))>-1}else this.isHasKey=!0},hasPageKey:function(){var t=this.$frontmatter.keys;this.isHasPageKey=!t||t&&t.indexOf(sessionStorage.getItem("pageKey"))>-1},toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}},watch:{$frontmatter:function(t,e){t.home&&(this.hasKey(),this.hasPageKey())}}}),H=Object(a.a)(N,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,attrs:{id:"common"},on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.isHasKey?n("div",[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.isHasPageKey?n("div",[t._t("default"),t._v(" "),n("Valine",{attrs:{isComment:t.isComment}})],2):n("Password",{attrs:{isPage:!0}}),t._v(" "),n("BackToTop")],1):n("Password")],1)},[],!1,null,null,null);e.a=H.exports},169:function(t,e,n){"use strict";var i={props:["idVal","numStyle"],methods:{getIdVal:function(t){var e=this.$site.base;return e.slice(0,e.length-1)+t}}},a=(n(275),n(2)),s=Object(a.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return this.$themeConfig.valineConfig&&0!=this.$themeConfig.valineConfig.visitor?e("span",{staticClass:"leancloud-visitors",attrs:{id:this.getIdVal(this.idVal),"data-flag-title":"Your Article Title"}},[e("i",{staticClass:"iconfont reco-eye",staticStyle:{"margin-right":".5rem"}}),this._v(" "),e("a",{staticClass:"leancloud-visitors-count",style:this.numStyle})]):this._e()},[],!1,null,"9574fdc4",null);e.a=s.exports},170:function(t,e,n){"use strict";var i={components:{PageInfo:n(200).a},props:["data","currentPage","currentTag","isHome"]},a=(n(277),n(2)),s=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"abstract-wrapper"},t._l(t.data,function(e,i){return n("div",{directives:[{name:"show",rawName:"v-show",value:i>=10*t.currentPage-10&&i<10*t.currentPage,expression:"index >= (currentPage * 10 - 10) && index < currentPage * 10"}],key:e.path,staticClass:"abstract-item"},[n("div",{staticClass:"title"},[n("router-link",{attrs:{to:e.path}},[t._v(t._s(e.title))])],1),t._v(" "),n("div",{staticClass:"abstract",domProps:{innerHTML:t._s(e.excerpt)}}),t._v(" "),n("hr"),t._v(" "),n("PageInfo",{attrs:{pageInfo:e,isHome:!(!0!==t.isHome),currentTag:t.currentTag}})],1)}),0)},[],!1,null,"4f9aaf34",null);e.a=s.exports},198:function(t,e,n){"use strict";n.r(e);n(110);var i=n(98),a={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(199).a},beforeCreate:function(){console.log(1111),this.$options.components.SidebarLinks=n(198).default},methods:{isActive:i.e}},s=(n(266),n(2)),r=Object(s.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)},[],!1,null,null,null).exports;n(103);function o(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function c(t,e,n,a,s){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||r>s?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var l=Object(i.e)(a,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,l),c(t,e.children,n,a,s,r+1)])}))}var l={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,a=n.$page,s=(n.$site,n.$route),r=n.$themeConfig,l=n.$themeLocaleConfig,u=e.props,h=u.item,d=u.sidebarDepth,m=Object(i.e)(s,h.path),p="auto"===h.type?m||h.children.some(function(t){return Object(i.e)(s,h.basePath+"#"+t.slug)}):m,f=o(t,h.path,h.title||h.path,p),v=a.frontmatter.sidebarDepth||d||l.sidebarDepth||r.sidebarDepth,g=null==v?1:v,b=l.displayAllHeaders||r.displayAllHeaders;return"auto"===h.type?[f,c(t,h.children,h.basePath,s,g)]:(p||b)&&h.headers&&!i.d.test(h.path)?[f,c(t,Object(i.c)(h.headers),h.path,s,g)]:f}};n(267);var u={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(s.a)(l,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{handleClick:function(){window.location=window.location},refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var a=e[n];if("group"===a.type&&a.children.some(function(e){return"page"===e.type&&Object(i.e)(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},h=Object(s.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links",on:{click:t.handleClick}},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)}),0):t._e()},[],!1,null,null,null);e.default=h.exports},199:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},a=(n(259),n(2)),s=Object(a.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null);e.a=s.exports},200:function(t,e,n){"use strict";var i={components:{AccessNumber:n(169).a},props:{pageInfo:{type:Object,default:{}},currentTag:{type:String,default:""},isHome:{type:Boolean,default:!1}},data:function(){return{numStyle:{fontSize:".9rem",fontWeight:"normal",color:"#999"}}},methods:{goTags:function(t){var e=this.$site.base;window.location.href="".concat(e,"tag/#?tag=").concat(t)}}},a=(n(276),n(2)),s=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.pageInfo.frontmatter.author||t.$themeConfig.author||t.$site.title?n("i",{staticClass:"iconfont reco-account"},[n("span",[t._v(t._s(t.pageInfo.frontmatter.author||t.$themeConfig.author||t.$site.title))])]):t._e(),t._v(" "),t.pageInfo.frontmatter.date?n("i",{staticClass:"iconfont reco-date"},[n("span",[t._v(t._s(new Date(t.pageInfo.frontmatter.date).toLocaleDateString()))])]):t._e(),t._v(" "),!0!==t.isHome?n("AccessNumber",{attrs:{idVal:t.pageInfo.path,numStyle:t.numStyle}}):t._e(),t._v(" "),t.pageInfo.frontmatter.tags?n("i",{staticClass:"iconfont reco-tag tags"},t._l(t.pageInfo.frontmatter.tags,function(e,i){return n("span",{key:i,staticClass:"tag-item",class:{active:t.currentTag==e},on:{click:function(n){return t.goTags(e)}}},[t._v("\n      "+t._s(e)+"\n    ")])}),0):t._e()],1)},[],!1,null,"1f98ca14",null);e.a=s.exports},217:function(t,e,n){"use strict";var i=n(128);n.n(i).a},259:function(t,e,n){"use strict";var i=n(140);n.n(i).a},260:function(t,e,n){"use strict";var i=n(141);n.n(i).a},261:function(t,e,n){"use strict";var i=n(142);n.n(i).a},263:function(t,e,n){"use strict";var i=n(143);n.n(i).a},264:function(t,e,n){"use strict";var i=n(144);n.n(i).a},265:function(t,e,n){"use strict";var i=n(145);n.n(i).a},266:function(t,e,n){"use strict";var i=n(146);n.n(i).a},267:function(t,e,n){"use strict";var i=n(147);n.n(i).a},268:function(t,e,n){"use strict";var i=n(148);n.n(i).a},269:function(t,e,n){"use strict";var i=n(149);n.n(i).a},270:function(t,e,n){"use strict";var i=n(150);n.n(i).a},273:function(t,e,n){"use strict";var i=n(151);n.n(i).a},274:function(t,e,n){"use strict";var i=n(153);n.n(i).a},275:function(t,e,n){"use strict";var i=n(154);n.n(i).a},276:function(t,e,n){"use strict";var i=n(155);n.n(i).a},277:function(t,e,n){"use strict";var i=n(156);n.n(i).a},98:function(t,e,n){"use strict";n.d(e,"d",function(){return i}),n.d(e,"a",function(){return s}),n.d(e,"i",function(){return r}),n.d(e,"f",function(){return c}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return u}),n.d(e,"b",function(){return h}),n.d(e,"e",function(){return d}),n.d(e,"k",function(){return m}),n.d(e,"l",function(){return p}),n.d(e,"c",function(){return f}),n.d(e,"j",function(){return v});n(105),n(180),n(35),n(97),n(139),n(103),n(172),n(126),n(115);var i=/#.*$/,a=/\.(md|html)$/,s=/\/$/,r=/^(https?:|mailto:|tel:)/;function o(t){return decodeURI(t).replace(i,"").replace(a,"")}function c(t){return r.test(t)}function l(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function h(t){if(c(t))return t;var e=t.match(i),n=e?e[0]:"",a=o(t);return s.test(a)?t:a+".html"+n}function d(t,e){var n=t.hash,a=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!a||n===a)&&o(t.path)===o(e)}function m(t,e,n){n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var a=e.split("/");n&&a[a.length-1]||a.pop();for(var s=t.replace(/^\//,"").split("/"),r=0;r<s.length;r++){var o=s[r];".."===o?a.pop():"."!==o&&a.push(o)}""!==a[0]&&a.unshift("");return a.join("/")}(e,n));for(var i=o(e),a=0;a<t.length;a++)if(o(t[a].regularPath)===i)return Object.assign({},t[a],{type:"page",path:h(t[a].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function p(t,e,n,i){var a=n.pages,s=n.themeConfig,r=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||r.sidebar||s.sidebar))return function(t){var e=f(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}})}]}(t);var o=r.sidebar||s.sidebar;if(o){var c=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),l=c.base,u=c.config;return u?u.map(function(t){return function t(e,n,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return m(n,e,i);if(Array.isArray(e))return Object.assign(m(n,e[0],i),{title:e[1]});a>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var s=e.children||[];return 0===s.length&&e.path?Object.assign(m(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map(function(e){return t(e,n,i,a+1)}),collapsable:!1!==e.collapsable}}(t,a,l)}):[]}return[]}function f(t){var e;return(t=t.map(function(t){return Object.assign({},t)})).forEach(function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(function(t){return 2===t.level})}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}}}]);