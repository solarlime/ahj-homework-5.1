!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=46)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(20))},function(t,n,e){var r=e(3);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(1),o=e(7),i=e(10);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(22),o=e(24);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(1),o=e(12),i=e(13),u=e(11),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(0),o=e(5);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(1),o=e(21),i=e(10),u=e(6),c=e(11),f=e(2),a=e(12),p=Object.getOwnPropertyDescriptor;n.f=r?p:function(t,n){if(t=u(t),n=c(n,!0),a)try{return p(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(1),o=e(3),i=e(25);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(15),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(0),o=e(8),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n){t.exports={}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(19),o=e(1);r({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:e(7).f})},function(t,n,e){var r=e(0),o=e(9).f,i=e(5),u=e(26),c=e(8),f=e(33),a=e(44);t.exports=function(t,n){var e,p,s,l,v,y=t.target,h=t.global,d=t.stat;if(e=h?r:d?r[y]||c(y,{}):(r[y]||{}).prototype)for(p in n){if(l=n[p],s=t.noTargetGet?(v=o(e,p))&&v.value:e[p],!a(h?p:y+(d?".":"#")+p,t.forced)&&void 0!==s){if(typeof l==typeof s)continue;f(l,s)}(t.sham||s&&s.sham)&&i(l,"sham",!0),u(e,p,l,t)}}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(3),o=e(23),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(0),o=e(4),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,e){var r=e(0),o=e(5),i=e(2),u=e(8),c=e(14),f=e(27),a=f.get,p=f.enforce,s=String(String).split("String");(t.exports=function(t,n,e,c){var f=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,l=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),p(e).source=s.join("string"==typeof n?n:"")),t!==r?(f?!l&&t[n]&&(a=!0):delete t[n],a?t[n]=e:o(t,n,e)):a?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},function(t,n,e){var r,o,i,u=e(28),c=e(0),f=e(4),a=e(5),p=e(2),s=e(29),l=e(16),v=c.WeakMap;if(u){var y=new v,h=y.get,d=y.has,b=y.set;r=function(t,n){return b.call(y,t,n),n},o=function(t){return h.call(y,t)||{}},i=function(t){return d.call(y,t)}}else{var g=s("state");l[g]=!0,r=function(t,n){return a(t,g,n),n},o=function(t){return p(t,g)?t[g]:{}},i=function(t){return p(t,g)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(0),o=e(14),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(30),o=e(32),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(31),o=e(15);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!1},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(2),o=e(34),i=e(9),u=e(7);t.exports=function(t,n){for(var e=o(n),c=u.f,f=i.f,a=0;a<e.length;a++){var p=e[a];r(t,p)||c(t,p,f(n,p))}}},function(t,n,e){var r=e(35),o=e(37),i=e(43),u=e(13);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(36),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(38),o=e(42).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(2),o=e(6),i=e(39).indexOf,u=e(16);t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)!r(u,e)&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(6),o=e(40),i=e(41),u=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),p=i(u,a);if(t&&e!=e){for(;a>p;)if((c=f[p++])!=c)return!0}else for(;a>p;p++)if((t||p in f)&&f[p]===e)return t||p||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,e){var r=e(17),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(17),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(3),o=/#|\.prototype\./,i=function(t,n){var e=c[u(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,n,e){},function(t,n,e){"use strict";e.r(n);e(18);function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.page=document.body,this.container=this.page.querySelector("div.container"),this.button=this.page.querySelector("button.button"),this.init()}var n,e,o;return n=t,(e=[{key:"init",value:function(){var t=this;this.button.addEventListener("click",(function(){var n=t.page.querySelector("div.popup");n?(n.remove(),t.button.style.marginTop=""):t.popup()}))}},{key:"popup",value:function(){var t=document.createElement("div");t.setAttribute("class","popup"),t.innerHTML='<h4 class="popup-title">Tip!</h4><p class="popup-description">This is a tip. It should appear on a button click. And disappear after the next one. Change the window width. The tip should be flexible.</p><div class="popup-tail"></div>\n',this.container.append(t);var n=window.getComputedStyle(t).width;t.style.position="absolute",t.style.bottom="calc(32px)",t.style.left="calc(50% - ".concat(n,"/2)"),this.page.querySelector(".popup-tail").style.left="calc(50% - 10px)",window.addEventListener("resize",(function(){t.style.left="calc(50% - ".concat(t.offsetWidth/2,"px)")}))}}])&&r(n.prototype,e),o&&r(n,o),t}();e(45),new o;console.log("Works!")}]);