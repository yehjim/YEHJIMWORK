(function(t){function e(e){for(var s,a,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},o={app:0},r=[];function a(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"6f7295bf"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,s){n=o[t]=[e,s]}));e.push(n[2]=s);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=a(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",l.name="ChunkLoadError",l.type=s,l.request=r,n[1](l)}o[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0098":function(t,e,n){t.exports=n.p+"img/Group 3.021b3fde.svg"},"034f":function(t,e,n){"use strict";var s=n("85ec"),o=n.n(s);o.a},"357f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a=(n("034f"),n("2877")),i={},c=Object(a["a"])(i,o,r,!1,null,null,null),l=c.exports,u=(n("d3b7"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home",on:{mousemove:function(e){return t.cursorchange()}}},[t._m(0),n("HEADER",{attrs:{logo:t.logo},on:{showMenu:t.show}}),t._m(1),t._m(2),n("div",{staticClass:"logo"},[n("Logo")],1),t._m(3),t._m(4),n("div",{staticClass:"hidemenu"},[n("Hidemenu",{on:{closeMenu:t.close}})],1)],1)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cursor"},[n("div")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yehjimwork"},[n("span",[t._v("YEHJIM WORK")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top"},[n("div",{staticClass:"none"},[n("span",[t._v("NONE")])]),n("div",{staticClass:"nocircle"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom"},[n("div",{staticClass:"circle"}),n("div",{staticClass:"one"},[n("span",[t._v("ONE")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"made"},[n("span",[t._v("MADE BY MINE")])])}],m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("img",{attrs:{src:n("0098"),alt:""}})])}],v={name:"HelloWorld",data:function(){return{}}},b=v,h=(n("b373"),Object(a["a"])(b,m,p,!1,null,"673ef84a",null)),g=h.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"header",attrs:{fluid:""}},[s("b-row",[s("b-col",{attrs:{cols:"2",lg:"2",md:"2"}},[t.logo?s("div",{staticClass:"logo"},[s("img",{attrs:{src:n("bf78"),alt:""}})]):s("div",{staticClass:"logo"})]),s("b-col",{attrs:{cols:"8",lg:"9",md:"9"}}),s("b-col",{attrs:{cols:"2",lg:"1",md:"1"}},[s("div",{staticClass:"ham",on:{click:t.showmenu}},[s("div"),s("div"),s("div")])])],1)],1)},C=[],y={props:["logo"],data:function(){return{}},methods:{showmenu:function(){this.$emit("showMenu")}}},w=y,E=(n("7127"),Object(a["a"])(w,_,C,!1,null,"021098d4",null)),x=E.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menumodal",on:{mousemove:function(e){return t.cursorchange()}}},[t._m(0),s("b-row",[s("b-col",{attrs:{cols:"2",lg:"2",md:"2"}}),s("b-col",{attrs:{cols:"8",lg:"9",md:"9"}}),s("b-col",{attrs:{cols:"2",lg:"1",md:"1"}},[s("div",{staticClass:"ham",on:{click:t.closemenu}},[s("div",{staticClass:"one"}),s("div",{staticClass:"two"}),s("div")])])],1),s("b-row",{staticClass:"menu"},[s("b-col",{attrs:{xs:"12",sm:"12",lg:"3",md:"3"}},[s("div",{staticClass:"left"},[s("img",{staticClass:"one",attrs:{src:n("d57c"),alt:""}})])]),s("b-col",{attrs:{xs:"12",sm:"12",lg:"6",md:"6"}},[s("div",{staticClass:"mid"},[s("router-link",{attrs:{to:""}},[s("div",{staticClass:"contest"},[s("span",{staticClass:"number"},[t._v("01")]),s("span",{staticClass:"describe"},[t._v("比賽與經歷")]),s("div",{staticClass:"line"})])]),s("div",{staticClass:"contest"},[s("span",{staticClass:"number"},[t._v("02")]),s("span",{staticClass:"describe"},[t._v("程式")]),s("div",{staticClass:"line"})]),s("div",{staticClass:"contest"},[s("span",{staticClass:"number"},[t._v("03")]),s("span",{staticClass:"describe"},[t._v("視覺")]),s("div",{staticClass:"line"})])],1)]),s("b-col",{attrs:{xs:"12",sm:"12",lg:"3",md:"3"}},[s("div",{staticClass:"right"},[s("img",{staticClass:"two",attrs:{src:n("bbd7"),alt:""}})])])],1)],1)},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cursor1"},[n("div")])}],$={methods:{closemenu:function(){this.$emit("closeMenu")},cursorchange:function(){var t=document.querySelector(".cursor1");t.setAttribute("style","top: "+(event.pageY-10)+"px; left: "+(event.pageX-10)+"px;")}}},M=$,k=(n("d5f7"),Object(a["a"])(M,O,j,!1,null,"b22115a8",null)),P=k.exports,H=n("cffa"),A={name:"Home",data:function(){return{logo:!1}},mounted:function(){var t=H["a"].timeline();t.from(".none",{opacity:0,duration:2}),t.from(".nocircle",{opacity:0,duration:.5}),t.from(".logo",{opacity:0,duration:1}),t.from(".circle",{opacity:0,duration:.5}),t.from(".one",{opacity:0,duration:.5})},methods:{show:function(){H["a"].to(".hidemenu",{left:0,opacity:1,duration:.5})},close:function(){H["a"].to(".hidemenu",{left:"100%",opacity:0,duration:.5})},cursorchange:function(){var t=document.querySelector(".cursor");t.setAttribute("style","top: "+(event.pageY-10)+"px; left: "+(event.pageX-10)+"px;")}},components:{Logo:g,HEADER:x,Hidemenu:P}},S=A,T=(n("f882"),Object(a["a"])(S,f,d,!1,null,"53196640",null)),G=T.exports;s["default"].use(u["a"]);var L=[{path:"/",name:"Home",component:G},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],N=new u["a"]({base:"",routes:L}),Y=N,q=n("5f5b");n("f9e3"),n("2dd8");s["default"].use(q["a"]),s["default"].config.productionTip=!1,new s["default"]({router:Y,render:function(t){return t(l)}}).$mount("#app")},7127:function(t,e,n){"use strict";var s=n("c2d1"),o=n.n(s);o.a},"7a74":function(t,e,n){},"85ec":function(t,e,n){},b373:function(t,e,n){"use strict";var s=n("7a74"),o=n.n(s);o.a},bbd7:function(t,e,n){t.exports=n.p+"img/Group 25.b6511676.svg"},bf78:function(t,e,n){t.exports=n.p+"img/Group 2.865469f8.svg"},c2d1:function(t,e,n){},d57c:function(t,e,n){t.exports=n.p+"img/Group 24.11bc8e02.svg"},d5f7:function(t,e,n){"use strict";var s=n("dd5b"),o=n.n(s);o.a},dd5b:function(t,e,n){},f882:function(t,e,n){"use strict";var s=n("357f"),o=n.n(s);o.a}});
//# sourceMappingURL=app.31152f1e.js.map