(function(t){function s(s){for(var a,i,r=s[0],c=s[1],l=s[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);m&&m(s);while(d.length)d.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,s=0;s<o.length;s++){for(var e=o[s],a=!0,i=1;i<e.length;i++){var r=e[i];0!==n[r]&&(a=!1)}a&&(o.splice(s--,1),t=c(c.s=e[0]))}return t}var a={},i={app:0},n={app:0},o=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7a10602e"}[t]+".js"}function c(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(t){var s=[],e={about:1};i[t]?s.push(i[t]):0!==i[t]&&e[t]&&s.push(i[t]=new Promise((function(s,e){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"47c69e81"}[t]+".css",n=c.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var l=o[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===n))return s()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===a||u===n)return s()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=s,m.onerror=function(s){var a=s&&s.target&&s.target.src||n,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[t],m.parentNode.removeChild(m),e(o)},m.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[t]=0})));var a=n[t];if(0!==a)if(a)s.push(a[2]);else{var o=new Promise((function(s,e){a=n[t]=[s,e]}));s.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(t);var d=new Error;l=function(s){u.onerror=u.onload=null,clearTimeout(m);var e=n[t];if(0!==e){if(e){var a=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,e[1](d)}n[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(s)},c.m=t,c.c=a,c.d=function(t,s,e){c.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,s){if(1&s&&(t=c(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)c.d(e,a,function(s){return t[s]}.bind(null,a));return e},c.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(s,"a",s),s},c.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=s,l=l.slice();for(var d=0;d<l.length;d++)s(l[d]);var m=u;o.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"0098":function(t,s,e){t.exports=e.p+"img/Group 3.021b3fde.svg"},"034f":function(t,s,e){"use strict";var a=e("85ec"),i=e.n(a);i.a},"03b2":function(t,s,e){"use strict";var a=e("e75b"),i=e.n(a);i.a},"0418":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("b-container",{staticClass:"header",attrs:{fluid:""}},[a("b-row",[a("b-col",{attrs:{cols:"2",lg:"2",md:"2"}},[t.logo?a("div",{staticClass:"logo"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:e("bf78"),alt:""}})])],1):a("div",{staticClass:"logo"})]),a("b-col",{attrs:{cols:"8",lg:"9",md:"9"}}),a("b-col",{attrs:{cols:"2",lg:"1",md:"1"}},[a("div",{staticClass:"ham",on:{click:t.showmenu}},[a("div",{style:{backgroundColor:t.color}}),a("div",{style:{backgroundColor:t.color}}),a("div",{style:{backgroundColor:t.color}})])])],1)],1)},i=[],n={props:["logo","color"],data:function(){return{}},methods:{showmenu:function(){this.$emit("showMenu")}}},o=n,r=(e("d41f"),e("2877")),c=Object(r["a"])(o,a,i,!1,null,"42e3ad23",null);s["a"]=c.exports},"0848":function(t,s,e){"use strict";var a=e("f9ac"),i=e.n(a);i.a},"0961":function(t,s,e){},"2c2d":function(t,s,e){},"2de8":function(t,s,e){},"44a1":function(t,s,e){"use strict";var a=e("68dd"),i=e.n(a);i.a},"49da":function(t,s,e){},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],o=(e("034f"),e("2877")),r={},c=Object(o["a"])(r,i,n,!1,null,null,null),l=c.exports,u=(e("d3b7"),e("8c4f")),d=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home",on:{mousemove:function(s){return t.cursorchange()}}},[t._m(0),e("HEADER",{attrs:{logo:t.logo,color:"white"},on:{showMenu:t.show}}),t._m(1),t._m(2),e("div",{staticClass:"logo"},[e("Logo")],1),t._m(3),t._m(4),e("div",{staticClass:"hidemenu"},[e("Hidemenu",{on:{closeMenu:t.close}})],1)],1)},m=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cursor"},[e("div")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"yehjimwork"},[e("span",[t._v("YEHJIM WORK")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"top"},[e("div",{staticClass:"none"},[e("span",[t._v("NONE")])]),e("div",{staticClass:"nocircle"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bottom"},[e("div",{staticClass:"circle"}),e("div",{staticClass:"one"},[e("span",[t._v("ONE")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"made"},[e("span",[t._v("MADE BY MINE")])])}],p=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hello"},[a("img",{attrs:{src:e("0098"),alt:""}})])}],g={name:"HelloWorld",data:function(){return{}}},v=g,b=(e("b373"),Object(o["a"])(v,p,f,!1,null,"673ef84a",null)),h=b.exports,C=e("0418"),_=e("a83a"),w=e("cffa"),x={name:"Home",data:function(){return{logo:!1}},mounted:function(){var t=w["a"].timeline();t.from(".none",{opacity:0,duration:1}),t.from(".nocircle",{opacity:0,duration:.5}),t.from(".logo",{opacity:0,duration:1}),t.from(".circle",{opacity:0,duration:.5}),t.from(".one",{opacity:0,duration:.5})},methods:{show:function(){w["a"].to(".hidemenu",{left:0,opacity:1,duration:.5})},close:function(){w["a"].to(".hidemenu",{left:"100%",opacity:0,duration:.5})},cursorchange:function(){var t=document.querySelector(".cursor");t.setAttribute("style","top: "+(event.pageY-10)+"px; left: "+(event.pageX-10)+"px;")}},components:{Logo:h,HEADER:C["a"],Hidemenu:_["a"]}},y=x,E=(e("583e"),Object(o["a"])(y,d,m,!1,null,"506a6a18",null)),j=E.exports,k=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"visual"},[e("HEADER",{attrs:{logo:"true",color:"black"},on:{showMenu:t.show}}),e("div",{staticClass:"headwrap"},[e("div",{staticClass:"breadmenu"},[e("ul",[e("router-link",{attrs:{to:"/visual/graphicdesign","active-class":"active"}},[e("span",{staticClass:"breaditem"},[t._v("GRAPHIC DESIGN ")])]),e("span",[t._v(" / ")]),e("router-link",{attrs:{to:"/visual/uiux","active-class":"active"}},[e("span",{staticClass:"breaditem"},[t._v(" UIUX ")])]),e("span",[t._v(" / ")]),e("router-link",{attrs:{to:"/visual/fontdesign","active-class":"active"}},[e("span",{staticClass:"breaditem"},[t._v("FONT DESIGN")])])],1)])]),e("router-view"),e("router-view",{attrs:{name:"uiux"}}),e("div",{staticClass:"hide"},[e("hidemenu",{staticClass:"hidemenu",on:{closeMenu:t.close}})],1),t.isloading?e("div",[e("loadingpage")],1):t._e()],1)},O=[],$=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"wrap"},[a("div",{staticClass:"one"}),a("div",{staticClass:"two"},[a("img",{staticClass:"spare1",attrs:{src:e("bd88"),alt:""}}),a("img",{staticClass:"spare2",attrs:{src:e("a255"),alt:""}})]),a("div",{staticClass:"three"})])}],T={mounted:function(){w["a"].to(".spare1",{rotate:"360deg",duration:4,opacity:0,repeat:-1,ease:"Power2.easeOut"}),w["a"].to(".spare2",{rotate:"360deg",duration:4,opacity:0,repeat:-1,ease:"Power2.easeOut"})}},M=T,H=(e("9c0a"),Object(o["a"])(M,$,A,!1,null,"16888214",null)),D=H.exports,S={data:function(){return{isloading:!0}},mounted:function(){setTimeout(this.closeloading,4e3)},methods:{show:function(){w["a"].to(".hidemenu",{left:0,opacity:1,duration:.5})},close:function(){w["a"].to(".hidemenu",{left:"100%",opacity:0,duration:.5})},closeloading:function(){this.isloading=!1},setloading:function(){this.isloading=!0},log:function(){console.log("emit成功")}},components:{HEADER:C["a"],hidemenu:_["a"],loadingpage:D}},P=S,R=(e("d774"),Object(o["a"])(P,k,O,!1,null,"d76d49ac",null)),I=R.exports,N=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"code"},[e("HEADER",{attrs:{logo:"true",color:"black"},on:{showMenu:t.show}}),e("codepage"),e("div",{staticClass:"hidemenu"},[e("hidemenu",{on:{closeMenu:t.close}})],1),t.isloading?e("div",[e("loadingpage")],1):t._e()],1)},G=[],F=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("b-container",{staticClass:"code"},[e("b-row",{staticClass:"poster"},[e("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"6"}},[e("item",{attrs:{name:"PRIMER STUDIO WEB DESIGN",date:"2020/05 - 2020/06",pic:"https://i.imgur.com/Li55t3y.jpg",bgc:"rgb(208, 208, 208)",link:"https://yehjim.github.io/PRIMERSTUDIO/#/"}})],1),e("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"6"}},[e("item",{attrs:{name:"Migratory Birds web design",date:"2020/04 - 2020/09",pic:"https://i.imgur.com/J9HprWt.jpg",bgc:"#F4F1EB"}})],1),e("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"6"}},[e("item",{attrs:{name:"CodePen collection",date:"2020/05 - NOW",pic:"https://i.imgur.com/J9HprWt.jpg",bgc:"rgb(208, 208, 208)",link:"https://codepen.io/your-work/"}})],1)],1)],1)},L=[],J=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"posteritem",style:{"background-image":"url("+t.pic+")"}},[e("div",{staticClass:"itemfont",style:{"background-color":t.bgc}},[e("a",{attrs:{href:t.link,target:"_blank"}},[e("div",{staticClass:"font"},[e("span",[t._v(t._s(t.name))]),e("span",[t._v(t._s(t.date))])])])])]),e("div",{staticClass:"wrap"},[e("div",{staticClass:"posteritem1",style:{"background-image":"url("+t.pic+")"}}),e("a",{attrs:{href:t.link,target:"_blank"}},[e("div",{staticClass:"font"},[e("span",[t._v(t._s(t.name))]),e("span",[t._v(t._s(t.date))])])])])])},W=[],B={props:["name","date","pic","bgc","link"]},U=B,q=(e("44a1"),Object(o["a"])(U,J,W,!1,null,"a7d22efe",null)),V=q.exports,X={data:function(){return{pic1:""}},components:{item:V}},K=X,Y=(e("5b8c"),Object(o["a"])(K,F,L,!1,null,"02e997e4",null)),z=Y.exports,Z={data:function(){return{isloading:!0}},mounted:function(){setTimeout(this.closeloading,4e3)},methods:{show:function(){w["a"].to(".hidemenu",{left:0,opacity:1,duration:.5})},close:function(){w["a"].to(".hidemenu",{left:"100%",opacity:0,duration:.5})},closeloading:function(){this.isloading=!1}},components:{HEADER:C["a"],hidemenu:_["a"],codepage:z,loadingpage:D}},Q=Z,tt=(e("03b2"),Object(o["a"])(Q,N,G,!1,null,"7c337280",null)),st=tt.exports,et=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("b-container",{staticClass:"graphic"},[e("b-row",{staticClass:"poster"},[e("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"6"}},[e("img",{staticClass:"posteritem",attrs:{src:"https://i.imgur.com/XTbyn1v.jpg",alt:""}}),e("h5",{staticClass:"info"},[t._v("shinny")])]),e("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"6"}},[e("img",{staticClass:"posteritem",attrs:{src:"https://i.imgur.com/Xgomzqg.jpg",alt:""}}),e("h5",{staticClass:"info"},[t._v("mess")])])],1),e("b-row",{staticClass:"poster"},[e("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"6"}},[e("img",{staticClass:"posteritem",attrs:{src:"https://i.imgur.com/CiUsVGT.jpg",alt:""}}),e("h5",{staticClass:"info"},[t._v("失敗實驗室")])]),e("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"6"}},[e("img",{staticClass:"posteritem",attrs:{src:"https://i.imgur.com/qSPKAED.jpg",alt:""}}),e("h5",{staticClass:"info"},[t._v("Ripple effect")])])],1),e("b-row",{staticClass:"poster"},[e("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"6"}},[e("img",{staticClass:"posteritem",attrs:{src:"https://i.imgur.com/0pTnDhE.jpg",alt:""}}),e("h5",{staticClass:"info"},[t._v("城市")])]),e("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"6"}},[e("img",{staticClass:"posteritem",attrs:{src:"https://i.imgur.com/1JUUXpe.jpg",alt:""}}),e("h5",{staticClass:"info"},[t._v("正常人")])])],1),e("b-row",{staticClass:"poster"},[e("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"6"}},[e("img",{staticClass:"posteritem",attrs:{src:"https://i.imgur.com/IdGYjh7.jpg",alt:""}}),e("h5",{staticClass:"info"},[t._v("LOVEMaintainer")])]),e("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"6"}},[e("img",{staticClass:"posteritem",attrs:{src:"https://i.imgur.com/BT6woAe.jpg",alt:""}}),e("h5",{staticClass:"info"},[t._v("日出東方")])])],1),e("b-row",{staticClass:"poster"},[e("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"6"}},[e("img",{staticClass:"posteritem",attrs:{src:"https://i.imgur.com/oMaOgIE.jpg",alt:""}}),e("h5",{staticClass:"info"},[t._v("STACK")])]),e("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"6"}},[e("img",{staticClass:"posteritem",attrs:{src:"https://i.imgur.com/FyFJsnn.jpg",alt:""}}),e("h5",{staticClass:"info"},[t._v("The Pool")])])],1)],1)},at=[],it={methods:{}},nt=it,ot=(e("722a"),Object(o["a"])(nt,et,at,!1,null,"c9f73572",null)),rt=ot.exports,ct=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("b-container",{staticClass:"fontdesign"},[a("b-row",{staticClass:"poster"},[a("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"6"}},[a("img",{staticClass:"posteritem",attrs:{src:e("e9e6"),alt:""}}),a("h5",[t._v("Font collection-1")])]),a("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"6"}})],1)],1)},lt=[],ut={},dt=ut,mt=(e("ff76"),Object(o["a"])(dt,ct,lt,!1,null,"93bb0f16",null)),pt=mt.exports,ft=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("b-container",{staticClass:"uiux"},[e("b-row",{staticClass:"poster"},[e("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"5"}},[e("div",{staticClass:"uiuxitem"},[e("img",{attrs:{src:"https://i.imgur.com/zVFVZyr.png",alt:""}})])]),e("b-col",{attrs:{lg:"1"}}),e("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"6"}},[e("div",{staticClass:"uiuxitem"},[e("iframe",{staticClass:"video",attrs:{src:"https://www.youtube.com/embed/LMTFK5uvHSI",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])],1),e("b-row",{staticClass:"poster"},[e("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"5"}},[e("div",{staticClass:"uiuxitem"},[e("img",{attrs:{src:"https://i.imgur.com/qI9O8pN.png",alt:""}})])]),e("b-col",{attrs:{lg:"1"}}),e("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"6"}},[e("div",{staticClass:"uiuxitem"},[e("iframe",{staticClass:"video",attrs:{src:"https://www.youtube.com/embed/a7EtDVd9RO4",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])],1),e("b-row",{staticClass:"poster"},[e("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"5"}},[e("div",{staticClass:"uiuxitem"},[e("img",{attrs:{src:"https://i.imgur.com/cC3g7ZX.png",alt:""}})])]),e("b-col",{attrs:{lg:"1"}}),e("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"6"}},[e("div",{staticClass:"uiuxitem"},[e("img",{attrs:{src:" https://i.imgur.com/WAoVj4a.png",alt:""}})])])],1),e("b-row",{staticClass:"poster"},[e("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"6"}},[e("div",{staticClass:"uiuxitem"},[e("img",{attrs:{src:"https://i.imgur.com/thrJWRJ.jpg",alt:""}})])]),e("b-col",{staticClass:"item",attrs:{xs:"12",md:"12",lg:"6"}},[e("div",{staticClass:"uiuxitem"},[e("iframe",{staticClass:"video",attrs:{src:"https://www.youtube.com/embed/rY8m4huyKwQ",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])],1)],1)},gt=[],vt={data:function(){return{}}},bt=vt,ht=(e("0848"),Object(o["a"])(bt,ft,gt,!1,null,"1035b906",null)),Ct=ht.exports,_t=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"code"},[e("HEADER",{attrs:{logo:"true",color:"black"},on:{showMenu:t.show}}),e("exppage"),e("div",{staticClass:"hidemenu"},[e("hidemenu",{on:{closeMenu:t.close}})],1),t.isloading?e("div",[e("loadingpage")],1):t._e()],1)},wt=[],xt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("b-container",{staticClass:"exppage"},[e("b-row",[e("b-col",{staticClass:"expwrap",attrs:{xs:"12",md:"12",lg:"6"}},[e("expitem",{attrs:{title:"How coder程勢知道競賽",time:"2018/4 - 2018/5",info:"HowCoder程式教育公司所舉辦利用程式\n                結合科技做出教育性質之App或是軟體",link:"https://www.facebook.com/howcoder/posts/984023985098287/"}})],1),e("b-col",{staticClass:"expwrap",attrs:{xs:"12",md:"12",lg:"6"}},[e("expitem",{attrs:{title:"2018⻘年迴響計畫",time:"2018/9 - 2018/12 全國前30組",info:"此⽐賽為教育部⻘年發展署所舉辦的競賽，邀請30歲以下的⻘年一\n    同解決現在台灣的社會問題。",link:"https://www.facebook.com/RethinkTaiwan2027/photos/a.767749783560803/767749930227455"}})],1)],1),e("b-row",[e("b-col",{staticClass:"expwrap",attrs:{xs:"12",md:"12",lg:"6"}},[e("expitem",{attrs:{title:"ATCC 全國大專院校商業",time:"2019/4 - 2019/6 全國入選",info:"ATCC為全國性質的商業個案競賽，針對每年參賽的企\n業想出可行的計畫",link:""}})],1),e("b-col",{staticClass:"expwrap",attrs:{xs:"12",md:"12",lg:"6"}})],1)],1)},yt=[],Et=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"expitem"},[e("div",{staticClass:"titlewrap"},[e("span",{staticClass:"title"},[t._v(t._s(t.title))])]),e("div",{staticClass:"timewrap"},[e("span",{staticClass:"time"},[t._v(t._s(t.time))])]),e("div",{staticClass:"infowrap"},[e("span",{staticClass:"info"},[t._v(t._s(t.info))])]),e("div",{staticClass:"morebtn"},[e("a",{attrs:{href:t.link,target:"_blank"}},[e("span",[t._v("INFO")])])])])},jt=[],kt={props:["title","time","info","link"],data:function(){return{}}},Ot=kt,$t=(e("85eb"),Object(o["a"])(Ot,Et,jt,!1,null,"f62817f4",null)),At=$t.exports,Tt={data:function(){return{}},components:{expitem:At}},Mt=Tt,Ht=(e("c11e"),Object(o["a"])(Mt,xt,yt,!1,null,"06cbbf75",null)),Dt=Ht.exports,St={data:function(){return{isloading:!0}},mounted:function(){setTimeout(this.closeloading,4e3)},methods:{show:function(){w["a"].to(".hidemenu",{left:0,opacity:1,duration:.5})},close:function(){w["a"].to(".hidemenu",{left:"100%",opacity:0,duration:.5})},closeloading:function(){this.isloading=!1}},components:{HEADER:C["a"],hidemenu:_["a"],loadingpage:D,exppage:Dt}},Pt=St,Rt=(e("b5a3"),Object(o["a"])(Pt,_t,wt,!1,null,"61bc6f15",null)),It=Rt.exports;a["default"].use(u["a"]);var Nt=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}},{path:"/visual",name:"Visual",component:I,children:[{path:"graphicdesign",name:rt,component:rt},{path:"fontdesign",name:"fontdesign",component:pt},{path:"uiux",name:"uiux",component:Ct}]},{path:"/code",name:"Code",component:st},{path:"/experience",name:It,component:It}],Gt=new u["a"]({base:"",routes:Nt}),Ft=Gt,Lt=e("5f5b");e("f9e3"),e("2dd8");a["default"].use(Lt["a"]),a["default"].config.productionTip=!1,new a["default"]({router:Ft,render:function(t){return t(l)}}).$mount("#app")},"583e":function(t,s,e){"use strict";var a=e("2c2d"),i=e.n(a);i.a},"5b8c":function(t,s,e){"use strict";var a=e("2de8"),i=e.n(a);i.a},"667b":function(t,s,e){},"68dd":function(t,s,e){},"6ddb":function(t,s,e){},"722a":function(t,s,e){"use strict";var a=e("667b"),i=e.n(a);i.a},"7a74":function(t,s,e){},"7b23":function(t,s,e){},"85eb":function(t,s,e){"use strict";var a=e("49da"),i=e.n(a);i.a},"85ec":function(t,s,e){},8849:function(t,s,e){},"9c0a":function(t,s,e){"use strict";var a=e("dbc9"),i=e.n(a);i.a},a255:function(t,s,e){t.exports=e.p+"img/Group 69.67c5a007.svg"},a83a:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"menumodal",on:{mousemove:function(s){return t.cursorchange()}}},[t._m(0),a("b-row",[a("b-col",{attrs:{cols:"2",lg:"2",md:"2"}}),a("b-col",{attrs:{cols:"8",lg:"9",md:"9"}}),a("b-col",{attrs:{cols:"2",lg:"1",md:"1"}},[a("div",{staticClass:"ham",on:{click:t.closemenu}},[a("div",{staticClass:"div1"}),a("div",{staticClass:"div2"}),a("div")])])],1),a("b-row",{staticClass:"menu"},[a("b-col",{attrs:{xs:"12",sm:"12",lg:"3",md:"3"}},[a("div",{staticClass:"left"},[a("img",{staticClass:"pic1",attrs:{src:e("d57c"),alt:""}})])]),a("b-col",{attrs:{xs:"12",sm:"12",lg:"6",md:"6"}},[a("div",{staticClass:"mid"},[a("router-link",{attrs:{to:"/experience"}},[a("div",{staticClass:"contest"},[a("span",{staticClass:"number"},[t._v("01")]),a("span",{staticClass:"describe"},[t._v("比賽與經歷")]),a("div",{staticClass:"line"})])]),a("router-link",{attrs:{to:"/code"}},[a("div",{staticClass:"contest"},[a("span",{staticClass:"number"},[t._v("02")]),a("span",{staticClass:"describe"},[t._v("程式")]),a("div",{staticClass:"line"})])]),a("router-link",{attrs:{to:"/visual/graphicdesign"}},[a("div",{staticClass:"contest"},[a("span",{staticClass:"number"},[t._v("03")]),a("span",{staticClass:"describe"},[t._v("視覺")]),a("div",{staticClass:"line"})])]),a("router-link",{attrs:{to:"/about"}},[a("div",{staticClass:"contest"},[a("span",{staticClass:"number"},[t._v("04")]),a("span",{staticClass:"describe"},[t._v("WHO")]),a("div",{staticClass:"line"})])])],1)]),a("b-col",{attrs:{xs:"12",sm:"12",lg:"3",md:"3"}},[a("div",{staticClass:"right"},[a("img",{staticClass:"pic2",attrs:{src:e("bbd7"),alt:""}})])])],1)],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cursor1"},[e("div")])}],n={methods:{closemenu:function(){this.$emit("closeMenu")},cursorchange:function(){var t=document.querySelector(".cursor1");t.setAttribute("style","top: "+(event.pageY-10)+"px; left: "+(event.pageX-10)+"px;")}}},o=n,r=(e("d2b8"),e("2877")),c=Object(r["a"])(o,a,i,!1,null,"b9b33758",null);s["a"]=c.exports},b113:function(t,s,e){},b373:function(t,s,e){"use strict";var a=e("7a74"),i=e.n(a);i.a},b5a3:function(t,s,e){"use strict";var a=e("6ddb"),i=e.n(a);i.a},bbd7:function(t,s,e){t.exports=e.p+"img/Group 25.b6511676.svg"},bd88:function(t,s,e){t.exports=e.p+"img/Group 30.7c0dbb3d.svg"},bf78:function(t,s,e){t.exports=e.p+"img/Group 2.865469f8.svg"},c11e:function(t,s,e){"use strict";var a=e("0961"),i=e.n(a);i.a},d2b8:function(t,s,e){"use strict";var a=e("8849"),i=e.n(a);i.a},d41f:function(t,s,e){"use strict";var a=e("d69a"),i=e.n(a);i.a},d57c:function(t,s,e){t.exports=e.p+"img/Group 24.11bc8e02.svg"},d69a:function(t,s,e){},d774:function(t,s,e){"use strict";var a=e("7b23"),i=e.n(a);i.a},dbc9:function(t,s,e){},e75b:function(t,s,e){},e9e6:function(t,s,e){t.exports=e.p+"img/font.be3ff01c.jpg"},f9ac:function(t,s,e){},ff76:function(t,s,e){"use strict";var a=e("b113"),i=e.n(a);i.a}});
//# sourceMappingURL=app.97f8170b.js.map