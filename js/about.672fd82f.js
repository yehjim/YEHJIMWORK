(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"05a1":function(t,a,e){"use strict";e("a3f7")},1252:function(t,a,e){"use strict";e("44a4")},"44a4":function(t,a,e){},"4d7f":function(t,a,e){t.exports=e.p+"img/Group 174.ecd6a186.svg"},"5ecb":function(t,a,e){t.exports=e.p+"img/葉俊甫.59689770.jpg"},"802b":function(t,a,e){t.exports=e.p+"img/contactme.ff40a4a6.svg"},"9f2d":function(t,a,e){"use strict";e("e8a4")},a3f7:function(t,a,e){},a662:function(t,a,e){t.exports=e.p+"img/cell.794010e3.svg"},cdf6:function(t,a,e){t.exports=e.p+"img/up.d71e6f6f.svg"},d7f3:function(t,a,e){t.exports=e.p+"img/free.b4b3a442.svg"},db20:function(t,a,e){},e8a4:function(t,a,e){},f458:function(t,a,e){"use strict";e("db20")},f820:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about"},[e("div",{staticClass:"transitionblock"}),e("headerbar"),e("contactblock"),e("drawblock"),e("aboutblock")],1)},s=[],i=e("2251"),c=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"contact"},[n("div",{staticClass:"inputline"}),n("img",{staticClass:"bgpic",attrs:{src:e("4d7f"),alt:""}}),n("div",{staticClass:"contactcard",on:{click:t.inputcard}},[t._m(0),n("div",{staticClass:"content"})])])},o=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"title"},[n("img",{attrs:{src:e("802b"),alt:""}}),n("div",{staticClass:"right"},[n("img",{attrs:{src:e("cdf6"),alt:""}}),n("img",{attrs:{src:e("a662"),alt:""}})])])}],r=e("1209"),u={data:function(){return{}},methods:{inputcard:function(){Object(r["a"])({targets:".inputline",width:"315px",opacity:1,duration:1e3}),Object(r["a"])({targets:".contactcard",top:"-250px",delay:800,duration:250,easing:"linear"}),setTimeout((function(){window.open("mailto:test@example.com")}),1500)}}},l=u,d=(e("1252"),e("2877")),f=Object(d["a"])(l,c,o,!1,null,"7186f2a4",null),m=f.exports,b=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"drawpad"},[n("div",{staticClass:"title"},[n("img",{attrs:{src:e("d7f3"),alt:""}})]),n("div",{staticClass:"drawarea"},[n("h3",[t._v("use labtop")]),n("canvas",{attrs:{id:"myPics",width:"400",height:"400"}})])])}],v={data:function(){return{}},mounted:function(){var t=this,a=!1,e=0,n=0,s=document.getElementById("myPics"),i=s.getContext("2d");s.addEventListener("mousedown",(function(t){e=t.offsetX,n=t.offsetY,a=!0})),s.addEventListener("mousemove",(function(s){!0===a&&(t.drawLine(i,e,n,s.offsetX,s.offsetY),e=s.offsetX,n=s.offsetY)})),window.addEventListener("mouseup",(function(s){!0===a&&(t.drawLine(i,e,n,s.offsetX,s.offsetY),e=0,n=0,a=!1)})),this.drawLine()},methods:{drawLine:function(t,a,e,n,s){t.beginPath(),t.strokeStyle="green",t.lineWidth=1,t.moveTo(a,e),t.lineTo(n,s),t.stroke(),t.closePath()}}},g=v,h=(e("9f2d"),Object(d["a"])(g,b,p,!1,null,"4df3df35",null)),w=h.exports,_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aboutme"},[e("div",{staticClass:"top"},[e("marquee",{attrs:{scrollamount:"20"}},[e("span",[t._v("aboutme aboutme aboutme aboutme")])])],1),t._m(0),e("div",{staticClass:"top"},[e("marquee",{attrs:{scrollamount:"20"}},[e("span",[t._v("aboutme aboutme aboutme aboutme")])])],1),e("div",{staticClass:"decrorationcircle"})])},C=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"describe"},[n("div",{staticClass:"pic"},[n("img",{attrs:{src:e("5ecb"),alt:""}})])])}],k={data:function(){return{}}},x=k,E=(e("05a1"),Object(d["a"])(x,_,C,!1,null,"42c88438",null)),y=E.exports,j={data:function(){return{moveable:{draggable:!0}}},mounted:function(){var t=r["a"].timeline({easing:"easeOutExpo",duration:750});t.add({targets:".transitionblock",width:"100%",translateX:"0%"}).add({targets:".transitionblock",width:"100%",translateX:"100%",opacity:"0"}).add({targets:".transitionblock",width:"0%",translateX:"0%",opacity:"0"})},methods:{handleDrag:function(t){var a=t.target,e=t.transform;a.style.transform=e}},components:{headerbar:i["a"],contactblock:m,drawblock:w,aboutblock:y}},L=j,O=(e("f458"),Object(d["a"])(L,n,s,!1,null,"30e77c52",null));a["default"]=O.exports}}]);
//# sourceMappingURL=about.672fd82f.js.map