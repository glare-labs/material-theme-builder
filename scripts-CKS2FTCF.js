/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(h,S){typeof exports=="object"&&typeof module=="object"?module.exports=S():typeof define=="function"&&define.amd?define([],S):typeof exports=="object"?exports.ClipboardJS=S():h.ClipboardJS=S()})(this,function(){return S={686:function(b,i,o){"use strict";o.d(i,{default:function(){return d}});var i=o(279),s=o.n(i),i=o(370),x=o.n(i),i=o(817),f=o.n(i);function y(l){try{return document.execCommand(l)}catch{return}}var w=function(l){return l=f()(l),y("cut"),l};function v(T,c){var p,E,T=(p=T,E=document.documentElement.getAttribute("dir")==="rtl",(T=document.createElement("textarea")).style.fontSize="12pt",T.style.border="0",T.style.padding="0",T.style.margin="0",T.style.position="absolute",T.style[E?"right":"left"]="-9999px",E=window.pageYOffset||document.documentElement.scrollTop,T.style.top="".concat(E,"px"),T.setAttribute("readonly",""),T.value=p,T);return c.container.appendChild(T),c=f()(T),y("copy"),T.remove(),c}var m=function(l){var c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body},p="";return typeof l=="string"?p=v(l,c):l instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(l?.type)?p=v(l.value,c):(p=f()(l),y("copy")),p};function k(l){return(k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c})(l)}var t=function(){var E=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},p=E.action,l=p===void 0?"copy":p,c=E.container,p=E.target,E=E.text;if(l!=="copy"&&l!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(p!==void 0){if(!p||k(p)!=="object"||p.nodeType!==1)throw new Error('Invalid "target" value, use a valid Element');if(l==="copy"&&p.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(l==="cut"&&(p.hasAttribute("readonly")||p.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}return E?m(E,{container:c}):p?l==="cut"?w(p):m(p,{container:c}):void 0};function e(l){return(e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c})(l)}function r(l,c){for(var p=0;p<c.length;p++){var E=c[p];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(l,E.key,E)}}function a(l,c){return(a=Object.setPrototypeOf||function(p,E){return p.__proto__=E,p})(l,c)}function u(l){var c=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var p,E=g(l);return p=c?(p=g(this).constructor,Reflect.construct(E,arguments,p)):E.apply(this,arguments),E=this,!(p=p)||e(p)!=="object"&&typeof p!="function"?function(T){if(T!==void 0)return T;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(E):p}}function g(l){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(c){return c.__proto__||Object.getPrototypeOf(c)})(l)}function A(l,c){if(l="data-clipboard-".concat(l),c.hasAttribute(l))return c.getAttribute(l)}var d=function(){(function(F,$){if(typeof $!="function"&&$!==null)throw new TypeError("Super expression must either be null or a function");F.prototype=Object.create($&&$.prototype,{constructor:{value:F,writable:!0,configurable:!0}}),$&&a(F,$)})(T,s());var l,c,p,E=u(T);function T(F,$){var _;return function(L){if(!(L instanceof T))throw new TypeError("Cannot call a class as a function")}(this),(_=E.call(this)).resolveOptions($),_.listenClick(F),_}return l=T,p=[{key:"copy",value:function(F){var $=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body};return m(F,$)}},{key:"cut",value:function(F){return w(F)}},{key:"isSupported",value:function(){var F=0<arguments.length&&arguments[0]!==void 0?arguments[0]:["copy","cut"],F=typeof F=="string"?[F]:F,$=!!document.queryCommandSupported;return F.forEach(function(_){$=$&&!!document.queryCommandSupported(_)}),$}}],(c=[{key:"resolveOptions",value:function(){var F=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof F.action=="function"?F.action:this.defaultAction,this.target=typeof F.target=="function"?F.target:this.defaultTarget,this.text=typeof F.text=="function"?F.text:this.defaultText,this.container=e(F.container)==="object"?F.container:document.body}},{key:"listenClick",value:function(F){var $=this;this.listener=x()(F,"click",function(_){return $.onClick(_)})}},{key:"onClick",value:function(L){var $=L.delegateTarget||L.currentTarget,_=this.action($)||"copy",L=t({action:_,container:this.container,target:this.target($),text:this.text($)});this.emit(L?"success":"error",{action:_,text:L,trigger:$,clearSelection:function(){$&&$.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(F){return A("action",F)}},{key:"defaultTarget",value:function(F){if(F=A("target",F),F)return document.querySelector(F)}},{key:"defaultText",value:function(F){return A("text",F)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&r(l.prototype,c),p&&r(l,p),T}()},828:function(b){var n;typeof Element>"u"||Element.prototype.matches||((n=Element.prototype).matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector),b.exports=function(o,s){for(;o&&o.nodeType!==9;){if(typeof o.matches=="function"&&o.matches(s))return o;o=o.parentNode}}},438:function(b,n,o){var s=o(828);function x(i,f,y,w,v){var m=function(k,t,e,r){return function(a){a.delegateTarget=s(a.target,t),a.delegateTarget&&r.call(k,a)}}.apply(this,arguments);return i.addEventListener(y,m,v),{destroy:function(){i.removeEventListener(y,m,v)}}}b.exports=function(i,f,y,w,v){return typeof i.addEventListener=="function"?x.apply(null,arguments):typeof y=="function"?x.bind(null,document).apply(null,arguments):(typeof i=="string"&&(i=document.querySelectorAll(i)),Array.prototype.map.call(i,function(m){return x(m,f,y,w,v)}))}},879:function(b,n){n.node=function(o){return o!==void 0&&o instanceof HTMLElement&&o.nodeType===1},n.nodeList=function(o){var s=Object.prototype.toString.call(o);return o!==void 0&&(s==="[object NodeList]"||s==="[object HTMLCollection]")&&"length"in o&&(o.length===0||n.node(o[0]))},n.string=function(o){return typeof o=="string"||o instanceof String},n.fn=function(o){return Object.prototype.toString.call(o)==="[object Function]"}},370:function(b,n,o){var s=o(879),x=o(438);b.exports=function(i,f,y){if(!i&&!f&&!y)throw new Error("Missing required arguments");if(!s.string(f))throw new TypeError("Second argument must be a String");if(!s.fn(y))throw new TypeError("Third argument must be a Function");if(s.node(i))return t=f,e=y,(k=i).addEventListener(t,e),{destroy:function(){k.removeEventListener(t,e)}};if(s.nodeList(i))return w=i,v=f,m=y,Array.prototype.forEach.call(w,function(r){r.addEventListener(v,m)}),{destroy:function(){Array.prototype.forEach.call(w,function(r){r.removeEventListener(v,m)})}};if(s.string(i))return i=i,f=f,y=y,x(document.body,i,f,y);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var w,v,m,k,t,e}},817:function(b){b.exports=function(n){var o,s=n.nodeName==="SELECT"?(n.focus(),n.value):n.nodeName==="INPUT"||n.nodeName==="TEXTAREA"?((o=n.hasAttribute("readonly"))||n.setAttribute("readonly",""),n.select(),n.setSelectionRange(0,n.value.length),o||n.removeAttribute("readonly"),n.value):(n.hasAttribute("contenteditable")&&n.focus(),s=window.getSelection(),(o=document.createRange()).selectNodeContents(n),s.removeAllRanges(),s.addRange(o),s.toString());return s}},279:function(b){function n(){}n.prototype={on:function(o,s,x){var i=this.e||(this.e={});return(i[o]||(i[o]=[])).push({fn:s,ctx:x}),this},once:function(o,s,x){var i=this;function f(){i.off(o,f),s.apply(x,arguments)}return f._=s,this.on(o,f,x)},emit:function(o){for(var s=[].slice.call(arguments,1),x=((this.e||(this.e={}))[o]||[]).slice(),i=0,f=x.length;i<f;i++)x[i].fn.apply(x[i].ctx,s);return this},off:function(o,s){var x=this.e||(this.e={}),i=x[o],f=[];if(i&&s)for(var y=0,w=i.length;y<w;y++)i[y].fn!==s&&i[y].fn._!==s&&f.push(i[y]);return f.length?x[o]=f:delete x[o],this}},b.exports=n,b.exports.TinyEmitter=n}},C={},h.n=function(b){var n=b&&b.__esModule?function(){return b.default}:function(){return b};return h.d(n,{a:n}),n},h.d=function(b,n){for(var o in n)h.o(n,o)&&!h.o(b,o)&&Object.defineProperty(b,o,{enumerable:!0,get:n[o]})},h.o=function(b,n){return Object.prototype.hasOwnProperty.call(b,n)},h(686).default;function h(b){if(C[b])return C[b].exports;var n=C[b]={exports:{}};return S[b](n,n.exports,h),n.exports}var S,C});var _self=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var Prism=function(h){var S=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,C=0,b={},n={manual:h.Prism&&h.Prism.manual,disableWorkerMessageHandler:h.Prism&&h.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof o?new o(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++C}),t.__id},clone:function t(e,r){r=r||{};var a,u;switch(n.util.type(e)){case"Object":if(u=n.util.objId(e),r[u])return r[u];a={},r[u]=a;for(var g in e)e.hasOwnProperty(g)&&(a[g]=t(e[g],r));return a;case"Array":return u=n.util.objId(e),r[u]?r[u]:(a=[],r[u]=a,e.forEach(function(A,d){a[d]=t(A,r)}),a);default:return e}},getLanguage:function(t){for(;t;){var e=S.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(S,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var r in e)if(e[r].src==t)return e[r]}return null}},isActive:function(t,e,r){for(var a="no-"+e;t;){var u=t.classList;if(u.contains(e))return!0;if(u.contains(a))return!1;t=t.parentElement}return!!r}},languages:{plain:b,plaintext:b,text:b,txt:b,extend:function(t,e){var r=n.util.clone(n.languages[t]);for(var a in e)r[a]=e[a];return r},insertBefore:function(t,e,r,a){a=a||n.languages;var u=a[t],g={};for(var A in u)if(u.hasOwnProperty(A)){if(A==e)for(var d in r)r.hasOwnProperty(d)&&(g[d]=r[d]);r.hasOwnProperty(A)||(g[A]=u[A])}var l=a[t];return a[t]=g,n.languages.DFS(n.languages,function(c,p){p===l&&c!=t&&(this[c]=g)}),g},DFS:function t(e,r,a,u){u=u||{};var g=n.util.objId;for(var A in e)if(e.hasOwnProperty(A)){r.call(e,A,e[A],a||A);var d=e[A],l=n.util.type(d);l==="Object"&&!u[g(d)]?(u[g(d)]=!0,t(d,r,null,u)):l==="Array"&&!u[g(d)]&&(u[g(d)]=!0,t(d,r,A,u))}}},plugins:{},highlightAll:function(t,e){n.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,r){var a={callback:r,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),n.hooks.run("before-all-elements-highlight",a);for(var u=0,g;g=a.elements[u++];)n.highlightElement(g,e===!0,a.callback)},highlightElement:function(t,e,r){var a=n.util.getLanguage(t),u=n.languages[a];n.util.setLanguage(t,a);var g=t.parentElement;g&&g.nodeName.toLowerCase()==="pre"&&n.util.setLanguage(g,a);var A=t.textContent,d={element:t,language:a,grammar:u,code:A};function l(p){d.highlightedCode=p,n.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,n.hooks.run("after-highlight",d),n.hooks.run("complete",d),r&&r.call(d.element)}if(n.hooks.run("before-sanity-check",d),g=d.element.parentElement,g&&g.nodeName.toLowerCase()==="pre"&&!g.hasAttribute("tabindex")&&g.setAttribute("tabindex","0"),!d.code){n.hooks.run("complete",d),r&&r.call(d.element);return}if(n.hooks.run("before-highlight",d),!d.grammar){l(n.util.encode(d.code));return}if(e&&h.Worker){var c=new Worker(n.filename);c.onmessage=function(p){l(p.data)},c.postMessage(JSON.stringify({language:d.language,code:d.code,immediateClose:!0}))}else l(n.highlight(d.code,d.grammar,d.language))},highlight:function(t,e,r){var a={code:t,grammar:e,language:r};if(n.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=n.tokenize(a.code,a.grammar),n.hooks.run("after-tokenize",a),o.stringify(n.util.encode(a.tokens),a.language)},tokenize:function(t,e){var r=e.rest;if(r){for(var a in r)e[a]=r[a];delete e.rest}var u=new i;return f(u,u.head,t),x(t,u,e,u.head,0),w(u)},hooks:{all:{},add:function(t,e){var r=n.hooks.all;r[t]=r[t]||[],r[t].push(e)},run:function(t,e){var r=n.hooks.all[t];if(!(!r||!r.length))for(var a=0,u;u=r[a++];)u(e)}},Token:o};h.Prism=n;function o(t,e,r,a){this.type=t,this.content=e,this.alias=r,this.length=(a||"").length|0}o.stringify=function t(e,r){if(typeof e=="string")return e;if(Array.isArray(e)){var a="";return e.forEach(function(l){a+=t(l,r)}),a}var u={type:e.type,content:t(e.content,r),tag:"span",classes:["token",e.type],attributes:{},language:r},g=e.alias;g&&(Array.isArray(g)?Array.prototype.push.apply(u.classes,g):u.classes.push(g)),n.hooks.run("wrap",u);var A="";for(var d in u.attributes)A+=" "+d+'="'+(u.attributes[d]||"").replace(/"/g,"&quot;")+'"';return"<"+u.tag+' class="'+u.classes.join(" ")+'"'+A+">"+u.content+"</"+u.tag+">"};function s(t,e,r,a){t.lastIndex=e;var u=t.exec(r);if(u&&a&&u[1]){var g=u[1].length;u.index+=g,u[0]=u[0].slice(g)}return u}function x(t,e,r,a,u,g){for(var A in r)if(!(!r.hasOwnProperty(A)||!r[A])){var d=r[A];d=Array.isArray(d)?d:[d];for(var l=0;l<d.length;++l){if(g&&g.cause==A+","+l)return;var c=d[l],p=c.inside,E=!!c.lookbehind,T=!!c.greedy,F=c.alias;if(T&&!c.pattern.global){var $=c.pattern.toString().match(/[imsuy]*$/)[0];c.pattern=RegExp(c.pattern.source,$+"g")}for(var _=c.pattern||c,L=a.next,R=u;L!==e.tail&&!(g&&R>=g.reach);R+=L.value.length,L=L.next){var I=L.value;if(e.length>t.length)return;if(!(I instanceof o)){var O=1,z;if(T){if(z=s(_,R,t,E),!z||z.index>=t.length)break;var P=z.index,G=z.index+z[0].length,j=R;for(j+=L.value.length;P>=j;)L=L.next,j+=L.value.length;if(j-=L.value.length,R=j,L.value instanceof o)continue;for(var M=L;M!==e.tail&&(j<G||typeof M.value=="string");M=M.next)O++,j+=M.value.length;O--,I=t.slice(R,j),z.index-=R}else if(z=s(_,0,I,E),!z)continue;var P=z.index,H=z[0],q=I.slice(0,P),B=I.slice(P+H.length),D=R+I.length;g&&D>g.reach&&(g.reach=D);var N=L.prev;q&&(N=f(e,N,q),R+=q.length),y(e,N,O);var U=new o(A,p?n.tokenize(H,p):H,F,H);if(L=f(e,N,U),B&&f(e,L,B),O>1){var W={cause:A+","+l,reach:D};x(t,e,r,L.prev,R,W),g&&W.reach>g.reach&&(g.reach=W.reach)}}}}}}function i(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function f(t,e,r){var a=e.next,u={value:r,prev:e,next:a};return e.next=u,a.prev=u,t.length++,u}function y(t,e,r){for(var a=e.next,u=0;u<r&&a!==t.tail;u++)a=a.next;e.next=a,a.prev=e,t.length-=u}function w(t){for(var e=[],r=t.head.next;r!==t.tail;)e.push(r.value),r=r.next;return e}if(!h.document)return h.addEventListener&&(n.disableWorkerMessageHandler||h.addEventListener("message",function(t){var e=JSON.parse(t.data),r=e.language,a=e.code,u=e.immediateClose;h.postMessage(n.highlight(a,n.languages[r],r)),u&&h.close()},!1)),n;var v=n.util.currentScript();v&&(n.filename=v.src,v.hasAttribute("data-manual")&&(n.manual=!0));function m(){n.manual||n.highlightAll()}if(!n.manual){var k=document.readyState;k==="loading"||k==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",m):window.requestAnimationFrame?window.requestAnimationFrame(m):window.setTimeout(m,16)}return n}(_self);typeof module<"u"&&module.exports&&(module.exports=Prism),typeof global<"u"&&(global.Prism=Prism),Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(h){h.type==="entity"&&(h.attributes.title=h.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(S,C){var b={};b["language-"+C]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[C]},b.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:b}};n["language-"+C]={pattern:/[\s\S]+/,inside:Prism.languages[C]};var o={};o[S]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return S}),"i"),lookbehind:!0,greedy:!0,inside:n},Prism.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(h,S){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+h+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[S,"language-"+S],inside:Prism.languages[S]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,function(h){var S=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;h.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+S.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+S.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+S.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+S.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:S,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},h.languages.css.atrule.inside.rest=h.languages.css;var C=h.languages.markup;C&&(C.tag.addInlined("style","css"),C.tag.addAttribute("style","css"))}(Prism),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript,function(){if(typeof Prism>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var h="Loading\u2026",S=function(v,m){return"\u2716 Error "+v+" while fetching file: "+m},C="\u2716 Error: File does not exist or is empty",b={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",o="loading",s="loaded",x="failed",i="pre[data-src]:not(["+n+'="'+s+'"]):not(['+n+'="'+o+'"])';function f(v,m,k){var t=new XMLHttpRequest;t.open("GET",v,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?m(t.responseText):t.status>=400?k(S(t.status,t.statusText)):k(C))},t.send(null)}function y(v){var m=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(m){var k=Number(m[1]),t=m[2],e=m[3];return t?e?[k,Number(e)]:[k,void 0]:[k,k]}}Prism.hooks.add("before-highlightall",function(v){v.selector+=", "+i}),Prism.hooks.add("before-sanity-check",function(v){var m=v.element;if(m.matches(i)){v.code="",m.setAttribute(n,o);var k=m.appendChild(document.createElement("CODE"));k.textContent=h;var t=m.getAttribute("data-src"),e=v.language;if(e==="none"){var r=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=b[r]||r}Prism.util.setLanguage(k,e),Prism.util.setLanguage(m,e);var a=Prism.plugins.autoloader;a&&a.loadLanguages(e),f(t,function(u){m.setAttribute(n,s);var g=y(m.getAttribute("data-range"));if(g){var A=u.split(/\r\n?|\n/g),d=g[0],l=g[1]==null?A.length:g[1];d<0&&(d+=A.length),d=Math.max(0,Math.min(d-1,A.length)),l<0&&(l+=A.length),l=Math.max(0,Math.min(l,A.length)),u=A.slice(d,l).join(`
`),m.hasAttribute("data-start")||m.setAttribute("data-start",String(d+1))}k.textContent=u,Prism.highlightElement(k)},function(u){m.setAttribute(n,x),k.textContent=u})}}),Prism.plugins.fileHighlight={highlight:function(m){for(var k=(m||document).querySelectorAll(i),t=0,e;e=k[t++];)Prism.highlightElement(e)}};var w=!1;Prism.fileHighlight=function(){w||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),w=!0),Prism.plugins.fileHighlight.highlight.apply(this,arguments)}}(),function(h){var S=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;h.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+S.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+S.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+S.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+S.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:S,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},h.languages.css.atrule.inside.rest=h.languages.css;var C=h.languages.markup;C&&(C.tag.addInlined("style","css"),C.tag.addAttribute("style","css"))}(Prism),function(){if(typeof Prism>"u"||typeof document>"u")return;var h="line-numbers",S=/\n(?!$)/g,C=Prism.plugins.lineNumbers={getLine:function(s,x){if(!(s.tagName!=="PRE"||!s.classList.contains(h))){var i=s.querySelector(".line-numbers-rows");if(i){var f=parseInt(s.getAttribute("data-start"),10)||1,y=f+(i.children.length-1);x<f&&(x=f),x>y&&(x=y);var w=x-f;return i.children[w]}}},resize:function(s){b([s])},assumeViewportIndependence:!0};function b(s){if(s=s.filter(function(i){var f=n(i),y=f["white-space"];return y==="pre-wrap"||y==="pre-line"}),s.length!=0){var x=s.map(function(i){var f=i.querySelector("code"),y=i.querySelector(".line-numbers-rows");if(!(!f||!y)){var w=i.querySelector(".line-numbers-sizer"),v=f.textContent.split(S);w||(w=document.createElement("span"),w.className="line-numbers-sizer",f.appendChild(w)),w.innerHTML="0",w.style.display="block";var m=w.getBoundingClientRect().height;return w.innerHTML="",{element:i,lines:v,lineHeights:[],oneLinerHeight:m,sizer:w}}}).filter(Boolean);x.forEach(function(i){var f=i.sizer,y=i.lines,w=i.lineHeights,v=i.oneLinerHeight;w[y.length-1]=void 0,y.forEach(function(m,k){if(m&&m.length>1){var t=f.appendChild(document.createElement("span"));t.style.display="block",t.textContent=m}else w[k]=v})}),x.forEach(function(i){for(var f=i.sizer,y=i.lineHeights,w=0,v=0;v<y.length;v++)y[v]===void 0&&(y[v]=f.children[w++].getBoundingClientRect().height)}),x.forEach(function(i){var f=i.sizer,y=i.element.querySelector(".line-numbers-rows");f.style.display="none",f.innerHTML="",i.lineHeights.forEach(function(w,v){y.children[v].style.height=w+"px"})})}}function n(s){return s?window.getComputedStyle?getComputedStyle(s):s.currentStyle||null:null}var o=void 0;window.addEventListener("resize",function(){C.assumeViewportIndependence&&o===window.innerWidth||(o=window.innerWidth,b(Array.prototype.slice.call(document.querySelectorAll("pre."+h))))}),Prism.hooks.add("complete",function(s){if(s.code){var x=s.element,i=x.parentNode;if(!(!i||!/pre/i.test(i.nodeName))&&!x.querySelector(".line-numbers-rows")&&Prism.util.isActive(x,h)){x.classList.remove(h),i.classList.add(h);var f=s.code.match(S),y=f?f.length+1:1,w,v=new Array(y+1).join("<span></span>");w=document.createElement("span"),w.setAttribute("aria-hidden","true"),w.className="line-numbers-rows",w.innerHTML=v,i.hasAttribute("data-start")&&(i.style.counterReset="linenumber "+(parseInt(i.getAttribute("data-start"),10)-1)),s.element.appendChild(w),b([i]),Prism.hooks.run("line-numbers",s)}}}),Prism.hooks.add("line-numbers",function(s){s.plugins=s.plugins||{},s.plugins.lineNumbers=!0})}();
