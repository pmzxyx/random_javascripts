/*
 * Copyright (C) 2010 Gregor Richards
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function() {
    var gameNames = ["imagecollect"];
    var games = {"imagecollect": "Image collection"};
    var head;

    // debugging output
    var wpMsgOut = window.wpMsgOut = document.createElement("div");
    wpMsgOut.style.position = "fixed";
    wpMsgOut.style.left = "0px";
    wpMsgOut.style.top = "0px";
    wpMsgOut.style.width = "100%";
    wpMsgOut.style.zIndex = "100000000000000000000000000000000000000000000000000000000000000000000000696969696969696969696969696420420420420420";
    wpMsgOut.style.visibility = "hidden";
    wpMsgOut.style.backgroundColor = "white";
    wpMsgOut.style.color = "black";
    wpMsgOut.style.textAlign = "center";
    wpMsgOut.wpIgnore = true;
    document.body.appendChild(wpMsgOut);

    function displayMessage(str) {
        if (typeof(str) === "undefined") str = "";
        if (typeof(str) === "string") {
            if (str === "") {
                wpMsgOut.style.visibility = "hidden";
            } else {
                wpMsgOut.style.visibility = "visible";
            }
            wpMsgOut.innerHTML = str;
        } else {
            wpMsgOut.style.visibility = "visible";
            wpMsgOut.innerHTML = "";
            wpMsgOut.appendChild(str);
        }
    }
    window.wpDisplayMessage = displayMessage;

    function scriptChain(srcs) {
        srcs = srcs.slice(0);
        var src = srcs.shift();

        var script = document.createElement("script");
        script.src = "http://codu.org/websplat/" + src;
        head.appendChild(script);

        if (srcs.length > 0) {
            var loaded = false;
            script.onload = function() {
                if (!loaded) {
                    loaded = true;
                    scriptChain(srcs);
                }
            };
            script.onreadystatechange = function() {
                if (this.readyState === "loaded" ||
                    this.readyState === "complete") {
                    this.onload();
                }
            };
        }
    }

    // make a frame to offer selections in
    var selector = document.createElement("div");
    selector.style = "text-align:center;padding:20px;background:#6b77b3;"
    displayMessage(selector);

    // a header to say what's going on
    var hdr = document.createElement("div");
    hdr.innerHTML = "<b>Which game would you like to play?</b> <a href='https://susstuff.repl.co' style='font-family:Verdana;margin-bottom:20px;color:white;'>New external JS made by Gerland.</a><br>Note: May not work well on every website. Original by <a style='font-family:Verdana;margin-bottom:20px;color:white;' href='http://codu.org/websplat/'>Gregor Richards.</a>";
    hdr.style = "font-family:Verdana;margin-bottom:20px;color:white;"
    selector.appendChild(hdr);

    // then offer the selections!
    for (var i = 0; i < gameNames.length; i++) {
        var game = gameNames[i];
        var gameDisp = games[game];

        var but = document.createElement("button");
        but.innerHTML = gameDisp;
        but.style = "all:unset;background:black;font-family:Verdana;color:white;padding:10px;transition:0.5s;border-radius:5px;cursor: pointer"
        but.onmouseover = function() {
          but.style.background = "#b3bdff"
          but.style.color = "black"
        }
        but.onmouseout = function () {
          but.style.background = "black"
          but.style.color = "white"
        }
        but.onclick = function() {
            head = document.getElementsByTagName("head")[0];
            selector.style.display = "none";

            displayMessage("Loading...");
            scriptChain([
                "jquery.js",
            ]);
          
          /*!
 * jQuery JavaScript Library v1.4.3
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Oct 14 23:10:06 2010 -0400
 */
(function(E,A){function U(){return false}function ba(){return true}function ja(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function Ga(a){var b,d,e=[],f=[],h,k,l,n,s,v,B,D;k=c.data(this,this.nodeType?"events":"__events__");if(typeof k==="function")k=k.events;if(!(a.liveFired===this||!k||!k.live||a.button&&a.type==="click")){if(a.namespace)D=RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)");a.liveFired=this;var H=k.live.slice(0);for(n=0;n<H.length;n++){k=H[n];k.origType.replace(X,
"")===a.type?f.push(k.selector):H.splice(n--,1)}f=c(a.target).closest(f,a.currentTarget);s=0;for(v=f.length;s<v;s++){B=f[s];for(n=0;n<H.length;n++){k=H[n];if(B.selector===k.selector&&(!D||D.test(k.namespace))){l=B.elem;h=null;if(k.preType==="mouseenter"||k.preType==="mouseleave"){a.type=k.preType;h=c(a.relatedTarget).closest(k.selector)[0]}if(!h||h!==l)e.push({elem:l,handleObj:k,level:B.level})}}}s=0;for(v=e.length;s<v;s++){f=e[s];if(d&&f.level>d)break;a.currentTarget=f.elem;a.data=f.handleObj.data;
a.handleObj=f.handleObj;D=f.handleObj.origHandler.apply(f.elem,arguments);if(D===false||a.isPropagationStopped()){d=f.level;if(D===false)b=false}}return b}}function Y(a,b){return(a&&a!=="*"?a+".":"")+b.replace(Ha,"`").replace(Ia,"&")}function ka(a,b,d){if(c.isFunction(b))return c.grep(a,function(f,h){return!!b.call(f,h,f)===d});else if(b.nodeType)return c.grep(a,function(f){return f===b===d});else if(typeof b==="string"){var e=c.grep(a,function(f){return f.nodeType===1});if(Ja.test(b))return c.filter(b,
e,!d);else b=c.filter(b,e)}return c.grep(a,function(f){return c.inArray(f,b)>=0===d})}function la(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var e=c.data(a[d++]),f=c.data(this,e);if(e=e&&e.events){delete f.handle;f.events={};for(var h in e)for(var k in e[h])c.event.add(this,h,e[h][k],e[h][k].data)}}})}function Ka(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}
function ma(a,b,d){var e=b==="width"?a.offsetWidth:a.offsetHeight;if(d==="border")return e;c.each(b==="width"?La:Ma,function(){d||(e-=parseFloat(c.css(a,"padding"+this))||0);if(d==="margin")e+=parseFloat(c.css(a,"margin"+this))||0;else e-=parseFloat(c.css(a,"border"+this+"Width"))||0});return e}function ca(a,b,d,e){if(c.isArray(b)&&b.length)c.each(b,function(f,h){d||Na.test(a)?e(a,h):ca(a+"["+(typeof h==="object"||c.isArray(h)?f:"")+"]",h,d,e)});else if(!d&&b!=null&&typeof b==="object")c.isEmptyObject(b)?
e(a,""):c.each(b,function(f,h){ca(a+"["+f+"]",h,d,e)});else e(a,b)}function S(a,b){var d={};c.each(na.concat.apply([],na.slice(0,b)),function(){d[this]=a});return d}function oa(a){if(!da[a]){var b=c("<"+a+">").appendTo("body"),d=b.css("display");b.remove();if(d==="none"||d==="")d="block";da[a]=d}return da[a]}function ea(a){return c.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var u=E.document,c=function(){function a(){if(!b.isReady){try{u.documentElement.doScroll("left")}catch(i){setTimeout(a,
1);return}b.ready()}}var b=function(i,r){return new b.fn.init(i,r)},d=E.jQuery,e=E.$,f,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,k=/\S/,l=/^\s+/,n=/\s+$/,s=/\W/,v=/\d/,B=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,D=/^[\],:{}\s]*$/,H=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,w=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,G=/(?:^|:|,)(?:\s*\[)+/g,M=/(webkit)[ \/]([\w.]+)/,g=/(opera)(?:.*version)?[ \/]([\w.]+)/,j=/(msie) ([\w.]+)/,o=/(mozilla)(?:.*? rv:([\w.]+))?/,m=navigator.userAgent,p=false,
q=[],t,x=Object.prototype.toString,C=Object.prototype.hasOwnProperty,P=Array.prototype.push,N=Array.prototype.slice,R=String.prototype.trim,Q=Array.prototype.indexOf,L={};b.fn=b.prototype={init:function(i,r){var y,z,F;if(!i)return this;if(i.nodeType){this.context=this[0]=i;this.length=1;return this}if(i==="body"&&!r&&u.body){this.context=u;this[0]=u.body;this.selector="body";this.length=1;return this}if(typeof i==="string")if((y=h.exec(i))&&(y[1]||!r))if(y[1]){F=r?r.ownerDocument||r:u;if(z=B.exec(i))if(b.isPlainObject(r)){i=
[u.createElement(z[1])];b.fn.attr.call(i,r,true)}else i=[F.createElement(z[1])];else{z=b.buildFragment([y[1]],[F]);i=(z.cacheable?z.fragment.cloneNode(true):z.fragment).childNodes}return b.merge(this,i)}else{if((z=u.getElementById(y[2]))&&z.parentNode){if(z.id!==y[2])return f.find(i);this.length=1;this[0]=z}this.context=u;this.selector=i;return this}else if(!r&&!s.test(i)){this.selector=i;this.context=u;i=u.getElementsByTagName(i);return b.merge(this,i)}else return!r||r.jquery?(r||f).find(i):b(r).find(i);
else if(b.isFunction(i))return f.ready(i);if(i.selector!==A){this.selector=i.selector;this.context=i.context}return b.makeArray(i,this)},selector:"",jquery:"1.4.3",length:0,size:function(){return this.length},toArray:function(){return N.call(this,0)},get:function(i){return i==null?this.toArray():i<0?this.slice(i)[0]:this[i]},pushStack:function(i,r,y){var z=b();b.isArray(i)?P.apply(z,i):b.merge(z,i);z.prevObject=this;z.context=this.context;if(r==="find")z.selector=this.selector+(this.selector?" ":
"")+y;else if(r)z.selector=this.selector+"."+r+"("+y+")";return z},each:function(i,r){return b.each(this,i,r)},ready:function(i){b.bindReady();if(b.isReady)i.call(u,b);else q&&q.push(i);return this},eq:function(i){return i===-1?this.slice(i):this.slice(i,+i+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(N.apply(this,arguments),"slice",N.call(arguments).join(","))},map:function(i){return this.pushStack(b.map(this,function(r,y){return i.call(r,
y,r)}))},end:function(){return this.prevObject||b(null)},push:P,sort:[].sort,splice:[].splice};b.fn.init.prototype=b.fn;b.extend=b.fn.extend=function(){var i=arguments[0]||{},r=1,y=arguments.length,z=false,F,I,K,J,fa;if(typeof i==="boolean"){z=i;i=arguments[1]||{};r=2}if(typeof i!=="object"&&!b.isFunction(i))i={};if(y===r){i=this;--r}for(;r<y;r++)if((F=arguments[r])!=null)for(I in F){K=i[I];J=F[I];if(i!==J)if(z&&J&&(b.isPlainObject(J)||(fa=b.isArray(J)))){if(fa){fa=false;clone=K&&b.isArray(K)?K:[]}else clone=
K&&b.isPlainObject(K)?K:{};i[I]=b.extend(z,clone,J)}else if(J!==A)i[I]=J}return i};b.extend({noConflict:function(i){E.$=e;if(i)E.jQuery=d;return b},isReady:false,readyWait:1,ready:function(i){i===true&&b.readyWait--;if(!b.readyWait||i!==true&&!b.isReady){if(!u.body)return setTimeout(b.ready,1);b.isReady=true;if(!(i!==true&&--b.readyWait>0)){if(q){for(var r=0;i=q[r++];)i.call(u,b);q=null}b.fn.triggerHandler&&b(u).triggerHandler("ready")}}},bindReady:function(){if(!p){p=true;if(u.readyState==="complete")return setTimeout(b.ready,
1);if(u.addEventListener){u.addEventListener("DOMContentLoaded",t,false);E.addEventListener("load",b.ready,false)}else if(u.attachEvent){u.attachEvent("onreadystatechange",t);E.attachEvent("onload",b.ready);var i=false;try{i=E.frameElement==null}catch(r){}u.documentElement.doScroll&&i&&a()}}},isFunction:function(i){return b.type(i)==="function"},isArray:Array.isArray||function(i){return b.type(i)==="array"},isWindow:function(i){return i&&typeof i==="object"&&"setInterval"in i},isNaN:function(i){return i==
null||!v.test(i)||isNaN(i)},type:function(i){return i==null?String(i):L[x.call(i)]||"object"},isPlainObject:function(i){if(!i||b.type(i)!=="object"||i.nodeType||b.isWindow(i))return false;if(i.constructor&&!C.call(i,"constructor")&&!C.call(i.constructor.prototype,"isPrototypeOf"))return false;for(var r in i);return r===A||C.call(i,r)},isEmptyObject:function(i){for(var r in i)return false;return true},error:function(i){throw i;},parseJSON:function(i){if(typeof i!=="string"||!i)return null;i=b.trim(i);
if(D.test(i.replace(H,"@").replace(w,"]").replace(G,"")))return E.JSON&&E.JSON.parse?E.JSON.parse(i):(new Function("return "+i))();else b.error("Invalid JSON: "+i)},noop:function(){},globalEval:function(i){if(i&&k.test(i)){var r=u.getElementsByTagName("head")[0]||u.documentElement,y=u.createElement("script");y.type="text/javascript";if(b.support.scriptEval)y.appendChild(u.createTextNode(i));else y.text=i;r.insertBefore(y,r.firstChild);r.removeChild(y)}},nodeName:function(i,r){return i.nodeName&&i.nodeName.toUpperCase()===
r.toUpperCase()},each:function(i,r,y){var z,F=0,I=i.length,K=I===A||b.isFunction(i);if(y)if(K)for(z in i){if(r.apply(i[z],y)===false)break}else for(;F<I;){if(r.apply(i[F++],y)===false)break}else if(K)for(z in i){if(r.call(i[z],z,i[z])===false)break}else for(y=i[0];F<I&&r.call(y,F,y)!==false;y=i[++F]);return i},trim:R?function(i){return i==null?"":R.call(i)}:function(i){return i==null?"":i.toString().replace(l,"").replace(n,"")},makeArray:function(i,r){var y=r||[];if(i!=null){var z=b.type(i);i.length==
null||z==="string"||z==="function"||z==="regexp"||b.isWindow(i)?P.call(y,i):b.merge(y,i)}return y},inArray:function(i,r){if(r.indexOf)return r.indexOf(i);for(var y=0,z=r.length;y<z;y++)if(r[y]===i)return y;return-1},merge:function(i,r){var y=i.length,z=0;if(typeof r.length==="number")for(var F=r.length;z<F;z++)i[y++]=r[z];else for(;r[z]!==A;)i[y++]=r[z++];i.length=y;return i},grep:function(i,r,y){var z=[],F;y=!!y;for(var I=0,K=i.length;I<K;I++){F=!!r(i[I],I);y!==F&&z.push(i[I])}return z},map:function(i,
r,y){for(var z=[],F,I=0,K=i.length;I<K;I++){F=r(i[I],I,y);if(F!=null)z[z.length]=F}return z.concat.apply([],z)},guid:1,proxy:function(i,r,y){if(arguments.length===2)if(typeof r==="string"){y=i;i=y[r];r=A}else if(r&&!b.isFunction(r)){y=r;r=A}if(!r&&i)r=function(){return i.apply(y||this,arguments)};if(i)r.guid=i.guid=i.guid||r.guid||b.guid++;return r},access:function(i,r,y,z,F,I){var K=i.length;if(typeof r==="object"){for(var J in r)b.access(i,J,r[J],z,F,y);return i}if(y!==A){z=!I&&z&&b.isFunction(y);
for(J=0;J<K;J++)F(i[J],r,z?y.call(i[J],J,F(i[J],r)):y,I);return i}return K?F(i[0],r):A},now:function(){return(new Date).getTime()},uaMatch:function(i){i=i.toLowerCase();i=M.exec(i)||g.exec(i)||j.exec(i)||i.indexOf("compatible")<0&&o.exec(i)||[];return{browser:i[1]||"",version:i[2]||"0"}},browser:{}});b.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(i,r){L["[object "+r+"]"]=r.toLowerCase()});m=b.uaMatch(m);if(m.browser){b.browser[m.browser]=true;b.browser.version=
m.version}if(b.browser.webkit)b.browser.safari=true;if(Q)b.inArray=function(i,r){return Q.call(r,i)};if(!/\s/.test("\u00a0")){l=/^[\s\xA0]+/;n=/[\s\xA0]+$/}f=b(u);if(u.addEventListener)t=function(){u.removeEventListener("DOMContentLoaded",t,false);b.ready()};else if(u.attachEvent)t=function(){if(u.readyState==="complete"){u.detachEvent("onreadystatechange",t);b.ready()}};return E.jQuery=E.$=b}();(function(){c.support={};var a=u.documentElement,b=u.createElement("script"),d=u.createElement("div"),
e="script"+c.now();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var f=d.getElementsByTagName("*"),h=d.getElementsByTagName("a")[0],k=u.createElement("select"),l=k.appendChild(u.createElement("option"));if(!(!f||!f.length||!h)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(h.getAttribute("style")),
hrefNormalized:h.getAttribute("href")==="/a",opacity:/^0.55$/.test(h.style.opacity),cssFloat:!!h.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:l.selected,optDisabled:false,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableHiddenOffsets:true};k.disabled=true;c.support.optDisabled=!l.disabled;b.type="text/javascript";try{b.appendChild(u.createTextNode("window."+e+"=1;"))}catch(n){}a.insertBefore(b,
a.firstChild);if(E[e]){c.support.scriptEval=true;delete E[e]}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function s(){c.support.noCloneEvent=false;d.detachEvent("onclick",s)});d.cloneNode(true).fireEvent("onclick")}d=u.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=u.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var s=u.createElement("div");
s.style.width=s.style.paddingLeft="1px";u.body.appendChild(s);c.boxModel=c.support.boxModel=s.offsetWidth===2;if("zoom"in s.style){s.style.display="inline";s.style.zoom=1;c.support.inlineBlockNeedsLayout=s.offsetWidth===2;s.style.display="";s.innerHTML="<div style='width:4px;'></div>";c.support.shrinkWrapBlocks=s.offsetWidth!==2}s.innerHTML="<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";var v=s.getElementsByTagName("td");c.support.reliableHiddenOffsets=v[0].offsetHeight===
0;v[0].style.display="";v[1].style.display="none";c.support.reliableHiddenOffsets=c.support.reliableHiddenOffsets&&v[0].offsetHeight===0;s.innerHTML="";u.body.removeChild(s).style.display="none"});a=function(s){var v=u.createElement("div");s="on"+s;var B=s in v;if(!B){v.setAttribute(s,"return;");B=typeof v[s]==="function"}return B};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=f=h=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",
cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var pa={},Oa=/^(?:\{.*\}|\[.*\])$/;c.extend({cache:{},uuid:0,expando:"jQuery"+c.now(),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},data:function(a,b,d){if(c.acceptData(a)){a=a==E?pa:a;var e=a.nodeType,f=e?a[c.expando]:null,h=c.cache;if(!(e&&!f&&typeof b==="string"&&d===A)){if(e)f||(a[c.expando]=f=++c.uuid);else h=a;if(typeof b==="object")if(e)h[f]=
c.extend(h[f],b);else c.extend(h,b);else if(e&&!h[f])h[f]={};a=e?h[f]:h;if(d!==A)a[b]=d;return typeof b==="string"?a[b]:a}}},removeData:function(a,b){if(c.acceptData(a)){a=a==E?pa:a;var d=a.nodeType,e=d?a[c.expando]:a,f=c.cache,h=d?f[e]:e;if(b){if(h){delete h[b];d&&c.isEmptyObject(h)&&c.removeData(a)}}else if(d&&c.support.deleteExpando)delete a[c.expando];else if(a.removeAttribute)a.removeAttribute(c.expando);else if(d)delete f[e];else for(var k in a)delete a[k]}},acceptData:function(a){if(a.nodeName){var b=
c.noData[a.nodeName.toLowerCase()];if(b)return!(b===true||a.getAttribute("classid")!==b)}return true}});c.fn.extend({data:function(a,b){if(typeof a==="undefined")return this.length?c.data(this[0]):null;else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===A){var e=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(e===A&&this.length){e=c.data(this[0],a);if(e===A&&this[0].nodeType===1){e=this[0].getAttribute("data-"+a);if(typeof e===
"string")try{e=e==="true"?true:e==="false"?false:e==="null"?null:!c.isNaN(e)?parseFloat(e):Oa.test(e)?c.parseJSON(e):e}catch(f){}else e=A}}return e===A&&d[1]?this.data(d[0]):e}else return this.each(function(){var h=c(this),k=[d[0],b];h.triggerHandler("setData"+d[1]+"!",k);c.data(this,a,b);h.triggerHandler("changeData"+d[1]+"!",k)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var e=c.data(a,b);if(!d)return e||
[];if(!e||c.isArray(d))e=c.data(a,b,c.makeArray(d));else e.push(d);return e}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),e=d.shift();if(e==="inprogress")e=d.shift();if(e){b==="fx"&&d.unshift("inprogress");e.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===A)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,
a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var qa=/[\n\t]/g,ga=/\s+/,Pa=/\r/g,Qa=/^(?:href|src|style)$/,Ra=/^(?:button|input)$/i,Sa=/^(?:button|input|object|select|textarea)$/i,Ta=/^a(?:rea)?$/i,ra=/^(?:radio|checkbox)$/i;c.fn.extend({attr:function(a,b){return c.access(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,
a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(s){var v=c(this);v.addClass(a.call(this,s,v.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ga),d=0,e=this.length;d<e;d++){var f=this[d];if(f.nodeType===1)if(f.className){for(var h=" "+f.className+" ",k=f.className,l=0,n=b.length;l<n;l++)if(h.indexOf(" "+b[l]+" ")<0)k+=" "+b[l];f.className=c.trim(k)}else f.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(n){var s=
c(this);s.removeClass(a.call(this,n,s.attr("class")))});if(a&&typeof a==="string"||a===A)for(var b=(a||"").split(ga),d=0,e=this.length;d<e;d++){var f=this[d];if(f.nodeType===1&&f.className)if(a){for(var h=(" "+f.className+" ").replace(qa," "),k=0,l=b.length;k<l;k++)h=h.replace(" "+b[k]+" "," ");f.className=c.trim(h)}else f.className=""}return this},toggleClass:function(a,b){var d=typeof a,e=typeof b==="boolean";if(c.isFunction(a))return this.each(function(f){var h=c(this);h.toggleClass(a.call(this,
f,h.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var f,h=0,k=c(this),l=b,n=a.split(ga);f=n[h++];){l=e?l:!k.hasClass(f);k[l?"addClass":"removeClass"](f)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(qa," ").indexOf(a)>-1)return true;return false},
val:function(a){if(!arguments.length){var b=this[0];if(b){if(c.nodeName(b,"option")){var d=b.attributes.value;return!d||d.specified?b.value:b.text}if(c.nodeName(b,"select")){var e=b.selectedIndex;d=[];var f=b.options;b=b.type==="select-one";if(e<0)return null;var h=b?e:0;for(e=b?e+1:f.length;h<e;h++){var k=f[h];if(k.selected&&(c.support.optDisabled?!k.disabled:k.getAttribute("disabled")===null)&&(!k.parentNode.disabled||!c.nodeName(k.parentNode,"optgroup"))){a=c(k).val();if(b)return a;d.push(a)}}return d}if(ra.test(b.type)&&
!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Pa,"")}return A}var l=c.isFunction(a);return this.each(function(n){var s=c(this),v=a;if(this.nodeType===1){if(l)v=a.call(this,n,s.val());if(v==null)v="";else if(typeof v==="number")v+="";else if(c.isArray(v))v=c.map(v,function(D){return D==null?"":D+""});if(c.isArray(v)&&ra.test(this.type))this.checked=c.inArray(s.val(),v)>=0;else if(c.nodeName(this,"select")){var B=c.makeArray(v);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),B)>=0});if(!B.length)this.selectedIndex=-1}else this.value=v}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,e){if(!a||a.nodeType===3||a.nodeType===8)return A;if(e&&b in c.attrFn)return c(a)[b](d);e=a.nodeType!==1||!c.isXMLDoc(a);var f=d!==A;b=e&&c.props[b]||b;if(a.nodeType===1){var h=Qa.test(b);if((b in a||a[b]!==A)&&e&&!h){if(f){b==="type"&&Ra.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
if(d===null)a.nodeType===1&&a.removeAttribute(b);else a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:Sa.test(a.nodeName)||Ta.test(a.nodeName)&&a.href?0:A;return a[b]}if(!c.support.style&&e&&b==="style"){if(f)a.style.cssText=""+d;return a.style.cssText}f&&a.setAttribute(b,""+d);if(!a.attributes[b]&&a.hasAttribute&&!a.hasAttribute(b))return A;a=!c.support.hrefNormalized&&e&&
h?a.getAttribute(b,2):a.getAttribute(b);return a===null?A:a}}});var X=/\.(.*)$/,ha=/^(?:textarea|input|select)$/i,Ha=/\./g,Ia=/ /g,Ua=/[^\w\s.|`]/g,Va=function(a){return a.replace(Ua,"\\$&")},sa={focusin:0,focusout:0};c.event={add:function(a,b,d,e){if(!(a.nodeType===3||a.nodeType===8)){if(c.isWindow(a)&&a!==E&&!a.frameElement)a=E;if(d===false)d=U;var f,h;if(d.handler){f=d;d=f.handler}if(!d.guid)d.guid=c.guid++;if(h=c.data(a)){var k=a.nodeType?"events":"__events__",l=h[k],n=h.handle;if(typeof l===
"function"){n=l.handle;l=l.events}else if(!l){a.nodeType||(h[k]=h=function(){});h.events=l={}}if(!n)h.handle=n=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(n.elem,arguments):A};n.elem=a;b=b.split(" ");for(var s=0,v;k=b[s++];){h=f?c.extend({},f):{handler:d,data:e};if(k.indexOf(".")>-1){v=k.split(".");k=v.shift();h.namespace=v.slice(0).sort().join(".")}else{v=[];h.namespace=""}h.type=k;if(!h.guid)h.guid=d.guid;var B=l[k],D=c.event.special[k]||{};if(!B){B=l[k]=[];
if(!D.setup||D.setup.call(a,e,v,n)===false)if(a.addEventListener)a.addEventListener(k,n,false);else a.attachEvent&&a.attachEvent("on"+k,n)}if(D.add){D.add.call(a,h);if(!h.handler.guid)h.handler.guid=d.guid}B.push(h);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,e){if(!(a.nodeType===3||a.nodeType===8)){if(d===false)d=U;var f,h,k=0,l,n,s,v,B,D,H=a.nodeType?"events":"__events__",w=c.data(a),G=w&&w[H];if(w&&G){if(typeof G==="function"){w=G;G=G.events}if(b&&b.type){d=b.handler;b=b.type}if(!b||
typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(f in G)c.event.remove(a,f+b)}else{for(b=b.split(" ");f=b[k++];){v=f;l=f.indexOf(".")<0;n=[];if(!l){n=f.split(".");f=n.shift();s=RegExp("(^|\\.)"+c.map(n.slice(0).sort(),Va).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(B=G[f])if(d){v=c.event.special[f]||{};for(h=e||0;h<B.length;h++){D=B[h];if(d.guid===D.guid){if(l||s.test(D.namespace)){e==null&&B.splice(h--,1);v.remove&&v.remove.call(a,D)}if(e!=null)break}}if(B.length===0||e!=null&&B.length===1){if(!v.teardown||
v.teardown.call(a,n)===false)c.removeEvent(a,f,w.handle);delete G[f]}}else for(h=0;h<B.length;h++){D=B[h];if(l||s.test(D.namespace)){c.event.remove(a,v,D.handler,h);B.splice(h--,1)}}}if(c.isEmptyObject(G)){if(b=w.handle)b.elem=null;delete w.events;delete w.handle;if(typeof w==="function")c.removeData(a,H);else c.isEmptyObject(w)&&c.removeData(a)}}}}},trigger:function(a,b,d,e){var f=a.type||a;if(!e){a=typeof a==="object"?a[c.expando]?a:c.extend(c.Event(f),a):c.Event(f);if(f.indexOf("!")>=0){a.type=
f=f.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[f]&&c.each(c.cache,function(){this.events&&this.events[f]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return A;a.result=A;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(e=d.nodeType?c.data(d,"handle"):(c.data(d,"__events__")||{}).handle)&&e.apply(d,b);e=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+f]&&d["on"+f].apply(d,b)===
false){a.result=false;a.preventDefault()}}catch(h){}if(!a.isPropagationStopped()&&e)c.event.trigger(a,b,e,true);else if(!a.isDefaultPrevented()){e=a.target;var k,l=f.replace(X,""),n=c.nodeName(e,"a")&&l==="click",s=c.event.special[l]||{};if((!s._default||s._default.call(d,a)===false)&&!n&&!(e&&e.nodeName&&c.noData[e.nodeName.toLowerCase()])){try{if(e[l]){if(k=e["on"+l])e["on"+l]=null;c.event.triggered=true;e[l]()}}catch(v){}if(k)e["on"+l]=k;c.event.triggered=false}}},handle:function(a){var b,d,e;
d=[];var f,h=c.makeArray(arguments);a=h[0]=c.event.fix(a||E.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;if(!b){e=a.type.split(".");a.type=e.shift();d=e.slice(0).sort();e=RegExp("(^|\\.)"+d.join("\\.(?:.*\\.)?")+"(\\.|$)")}a.namespace=a.namespace||d.join(".");f=c.data(this,this.nodeType?"events":"__events__");if(typeof f==="function")f=f.events;d=(f||{})[a.type];if(f&&d){d=d.slice(0);f=0;for(var k=d.length;f<k;f++){var l=d[f];if(b||e.test(l.namespace)){a.handler=l.handler;a.data=
l.data;a.handleObj=l;l=l.handler.apply(this,h);if(l!==A){a.result=l;if(l===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[c.expando])return a;var b=a;a=c.Event(b);for(var d=this.props.length,e;d;){e=this.props[--d];a[e]=b[e]}if(!a.target)a.target=a.srcElement||u;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=u.documentElement;d=u.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(a.which==null&&(a.charCode!=null||a.keyCode!=null))a.which=a.charCode!=null?a.charCode:a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==A)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,Y(a.origType,a.selector),c.extend({},a,{handler:Ga,guid:a.handler.guid}))},remove:function(a){c.event.remove(this,
Y(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,d){if(c.isWindow(this))this.onbeforeunload=d},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};c.removeEvent=u.removeEventListener?function(a,b,d){a.removeEventListener&&a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent&&a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=a;this.type=a.type}else this.type=a;this.timeStamp=
c.now();this[c.expando]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=ba;var a=this.originalEvent;if(a)if(a.preventDefault)a.preventDefault();else a.returnValue=false},stopPropagation:function(){this.isPropagationStopped=ba;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=ba;this.stopPropagation()},isDefaultPrevented:U,isPropagationStopped:U,isImmediatePropagationStopped:U};
var ta=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},ua=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?ua:ta,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?ua:ta)}}});if(!c.support.submitBubbles)c.event.special.submit={setup:function(){if(this.nodeName.toLowerCase()!==
"form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length){a.liveFired=A;return ja("submit",this,arguments)}});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13){a.liveFired=A;return ja("submit",this,arguments)}})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};if(!c.support.changeBubbles){var V,
va=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(e){return e.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},Z=function(a,b){var d=a.target,e,f;if(!(!ha.test(d.nodeName)||d.readOnly)){e=c.data(d,"_change_data");f=va(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",f);if(!(e===A||f===e))if(e!=null||f){a.type="change";a.liveFired=
A;return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:Z,beforedeactivate:Z,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return Z.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return Z.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,"_change_data",va(a))}},setup:function(){if(this.type===
"file")return false;for(var a in V)c.event.add(this,a+".specialChange",V[a]);return ha.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return ha.test(this.nodeName)}};V=c.event.special.change.filters;V.focus=V.beforeactivate}u.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(e){e=c.event.fix(e);e.type=b;return c.event.trigger(e,null,e.target)}c.event.special[b]={setup:function(){sa[b]++===0&&u.addEventListener(a,d,true)},teardown:function(){--sa[b]===
0&&u.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,e,f){if(typeof d==="object"){for(var h in d)this[b](h,e,d[h],f);return this}if(c.isFunction(e)||e===false){f=e;e=A}var k=b==="one"?c.proxy(f,function(n){c(this).unbind(n,k);return f.apply(this,arguments)}):f;if(d==="unload"&&b!=="one")this.one(d,e,f);else{h=0;for(var l=this.length;h<l;h++)c.event.add(this[h],d,k,e)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&!a.preventDefault)for(var d in a)this.unbind(d,
a[d]);else{d=0;for(var e=this.length;d<e;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,e){return this.live(b,d,e,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var d=c.Event(a);d.preventDefault();d.stopPropagation();c.event.trigger(d,b,this[0]);return d.result}},toggle:function(a){for(var b=arguments,d=
1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(e){var f=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,f+1);e.preventDefault();return b[f].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var wa={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,e,f,h){var k,l=0,n,s,v=h||this.selector;h=h?this:c(this.context);if(typeof d===
"object"&&!d.preventDefault){for(k in d)h[b](k,e,d[k],v);return this}if(c.isFunction(e)){f=e;e=A}for(d=(d||"").split(" ");(k=d[l++])!=null;){n=X.exec(k);s="";if(n){s=n[0];k=k.replace(X,"")}if(k==="hover")d.push("mouseenter"+s,"mouseleave"+s);else{n=k;if(k==="focus"||k==="blur"){d.push(wa[k]+s);k+=s}else k=(wa[k]||k)+s;if(b==="live"){s=0;for(var B=h.length;s<B;s++)c.event.add(h[s],"live."+Y(k,v),{data:e,selector:v,handler:f,origType:k,origHandler:f,preType:n})}else h.unbind("live."+Y(k,v),f)}}return this}});
c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){c.fn[b]=function(d,e){if(e==null){e=d;d=null}return arguments.length>0?this.bind(b,d,e):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});E.attachEvent&&!E.addEventListener&&c(E).bind("unload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});
(function(){function a(g,j,o,m,p,q){p=0;for(var t=m.length;p<t;p++){var x=m[p];if(x){x=x[g];for(var C=false;x;){if(x.sizcache===o){C=m[x.sizset];break}if(x.nodeType===1&&!q){x.sizcache=o;x.sizset=p}if(x.nodeName.toLowerCase()===j){C=x;break}x=x[g]}m[p]=C}}}function b(g,j,o,m,p,q){p=0;for(var t=m.length;p<t;p++){var x=m[p];if(x){x=x[g];for(var C=false;x;){if(x.sizcache===o){C=m[x.sizset];break}if(x.nodeType===1){if(!q){x.sizcache=o;x.sizset=p}if(typeof j!=="string"){if(x===j){C=true;break}}else if(l.filter(j,
[x]).length>0){C=x;break}}x=x[g]}m[p]=C}}}var d=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,h=false,k=true;[0,0].sort(function(){k=false;return 0});var l=function(g,j,o,m){o=o||[];var p=j=j||u;if(j.nodeType!==1&&j.nodeType!==9)return[];if(!g||typeof g!=="string")return o;var q=[],t,x,C,P,N=true,R=l.isXML(j),Q=g,L;do{d.exec("");if(t=d.exec(Q)){Q=t[3];q.push(t[1]);if(t[2]){P=t[3];
break}}}while(t);if(q.length>1&&s.exec(g))if(q.length===2&&n.relative[q[0]])x=M(q[0]+q[1],j);else for(x=n.relative[q[0]]?[j]:l(q.shift(),j);q.length;){g=q.shift();if(n.relative[g])g+=q.shift();x=M(g,x)}else{if(!m&&q.length>1&&j.nodeType===9&&!R&&n.match.ID.test(q[0])&&!n.match.ID.test(q[q.length-1])){t=l.find(q.shift(),j,R);j=t.expr?l.filter(t.expr,t.set)[0]:t.set[0]}if(j){t=m?{expr:q.pop(),set:D(m)}:l.find(q.pop(),q.length===1&&(q[0]==="~"||q[0]==="+")&&j.parentNode?j.parentNode:j,R);x=t.expr?l.filter(t.expr,
t.set):t.set;if(q.length>0)C=D(x);else N=false;for(;q.length;){t=L=q.pop();if(n.relative[L])t=q.pop();else L="";if(t==null)t=j;n.relative[L](C,t,R)}}else C=[]}C||(C=x);C||l.error(L||g);if(f.call(C)==="[object Array]")if(N)if(j&&j.nodeType===1)for(g=0;C[g]!=null;g++){if(C[g]&&(C[g]===true||C[g].nodeType===1&&l.contains(j,C[g])))o.push(x[g])}else for(g=0;C[g]!=null;g++)C[g]&&C[g].nodeType===1&&o.push(x[g]);else o.push.apply(o,C);else D(C,o);if(P){l(P,p,o,m);l.uniqueSort(o)}return o};l.uniqueSort=function(g){if(w){h=
k;g.sort(w);if(h)for(var j=1;j<g.length;j++)g[j]===g[j-1]&&g.splice(j--,1)}return g};l.matches=function(g,j){return l(g,null,null,j)};l.matchesSelector=function(g,j){return l(j,null,null,[g]).length>0};l.find=function(g,j,o){var m;if(!g)return[];for(var p=0,q=n.order.length;p<q;p++){var t=n.order[p],x;if(x=n.leftMatch[t].exec(g)){var C=x[1];x.splice(1,1);if(C.substr(C.length-1)!=="\\"){x[1]=(x[1]||"").replace(/\\/g,"");m=n.find[t](x,j,o);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=j.getElementsByTagName("*"));
return{set:m,expr:g}};l.filter=function(g,j,o,m){for(var p=g,q=[],t=j,x,C,P=j&&j[0]&&l.isXML(j[0]);g&&j.length;){for(var N in n.filter)if((x=n.leftMatch[N].exec(g))!=null&&x[2]){var R=n.filter[N],Q,L;L=x[1];C=false;x.splice(1,1);if(L.substr(L.length-1)!=="\\"){if(t===q)q=[];if(n.preFilter[N])if(x=n.preFilter[N](x,t,o,q,m,P)){if(x===true)continue}else C=Q=true;if(x)for(var i=0;(L=t[i])!=null;i++)if(L){Q=R(L,x,i,t);var r=m^!!Q;if(o&&Q!=null)if(r)C=true;else t[i]=false;else if(r){q.push(L);C=true}}if(Q!==
A){o||(t=q);g=g.replace(n.match[N],"");if(!C)return[];break}}}if(g===p)if(C==null)l.error(g);else break;p=g}return t};l.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=l.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},relative:{"+":function(g,j){var o=typeof j==="string",m=o&&!/\W/.test(j);o=o&&!m;if(m)j=j.toLowerCase();m=0;for(var p=g.length,q;m<p;m++)if(q=g[m]){for(;(q=q.previousSibling)&&q.nodeType!==1;);g[m]=o||q&&q.nodeName.toLowerCase()===
j?q||false:q===j}o&&l.filter(j,g,true)},">":function(g,j){var o=typeof j==="string",m,p=0,q=g.length;if(o&&!/\W/.test(j))for(j=j.toLowerCase();p<q;p++){if(m=g[p]){o=m.parentNode;g[p]=o.nodeName.toLowerCase()===j?o:false}}else{for(;p<q;p++)if(m=g[p])g[p]=o?m.parentNode:m.parentNode===j;o&&l.filter(j,g,true)}},"":function(g,j,o){var m=e++,p=b,q;if(typeof j==="string"&&!/\W/.test(j)){q=j=j.toLowerCase();p=a}p("parentNode",j,m,g,q,o)},"~":function(g,j,o){var m=e++,p=b,q;if(typeof j==="string"&&!/\W/.test(j)){q=
j=j.toLowerCase();p=a}p("previousSibling",j,m,g,q,o)}},find:{ID:function(g,j,o){if(typeof j.getElementById!=="undefined"&&!o)return(g=j.getElementById(g[1]))&&g.parentNode?[g]:[]},NAME:function(g,j){if(typeof j.getElementsByName!=="undefined"){for(var o=[],m=j.getElementsByName(g[1]),p=0,q=m.length;p<q;p++)m[p].getAttribute("name")===g[1]&&o.push(m[p]);return o.length===0?null:o}},TAG:function(g,j){return j.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,j,o,m,p,q){g=" "+g[1].replace(/\\/g,
"")+" ";if(q)return g;q=0;for(var t;(t=j[q])!=null;q++)if(t)if(p^(t.className&&(" "+t.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))o||m.push(t);else if(o)j[q]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},CHILD:function(g){if(g[1]==="nth"){var j=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=j[1]+(j[2]||1)-0;g[3]=j[3]-0}g[0]=e++;return g},ATTR:function(g,j,o,
m,p,q){j=g[1].replace(/\\/g,"");if(!q&&n.attrMap[j])g[1]=n.attrMap[j];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,j,o,m,p){if(g[1]==="not")if((d.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=l(g[3],null,null,j);else{g=l.filter(g[3],j,o,true^p);o||m.push.apply(m,g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===
true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,j,o){return!!l(o[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===
g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},setFilters:{first:function(g,j){return j===0},last:function(g,j,o,m){return j===m.length-1},even:function(g,j){return j%2===0},odd:function(g,j){return j%2===1},lt:function(g,j,o){return j<o[3]-0},gt:function(g,j,o){return j>o[3]-0},nth:function(g,j,o){return o[3]-
0===j},eq:function(g,j,o){return o[3]-0===j}},filter:{PSEUDO:function(g,j,o,m){var p=j[1],q=n.filters[p];if(q)return q(g,o,j,m);else if(p==="contains")return(g.textContent||g.innerText||l.getText([g])||"").indexOf(j[3])>=0;else if(p==="not"){j=j[3];o=0;for(m=j.length;o<m;o++)if(j[o]===g)return false;return true}else l.error("Syntax error, unrecognized expression: "+p)},CHILD:function(g,j){var o=j[1],m=g;switch(o){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(o===
"first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":o=j[2];var p=j[3];if(o===1&&p===0)return true;var q=j[0],t=g.parentNode;if(t&&(t.sizcache!==q||!g.nodeIndex)){var x=0;for(m=t.firstChild;m;m=m.nextSibling)if(m.nodeType===1)m.nodeIndex=++x;t.sizcache=q}m=g.nodeIndex-p;return o===0?m===0:m%o===0&&m/o>=0}},ID:function(g,j){return g.nodeType===1&&g.getAttribute("id")===j},TAG:function(g,j){return j==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===
j},CLASS:function(g,j){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(j)>-1},ATTR:function(g,j){var o=j[1];o=n.attrHandle[o]?n.attrHandle[o](g):g[o]!=null?g[o]:g.getAttribute(o);var m=o+"",p=j[2],q=j[4];return o==null?p==="!=":p==="="?m===q:p==="*="?m.indexOf(q)>=0:p==="~="?(" "+m+" ").indexOf(q)>=0:!q?m&&o!==false:p==="!="?m!==q:p==="^="?m.indexOf(q)===0:p==="$="?m.substr(m.length-q.length)===q:p==="|="?m===q||m.substr(0,q.length+1)===q+"-":false},POS:function(g,j,o,m){var p=n.setFilters[j[2]];
if(p)return p(g,o,j,m)}}},s=n.match.POS,v=function(g,j){return"\\"+(j-0+1)},B;for(B in n.match){n.match[B]=RegExp(n.match[B].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[B]=RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[B].source.replace(/\\(\d+)/g,v))}var D=function(g,j){g=Array.prototype.slice.call(g,0);if(j){j.push.apply(j,g);return j}return g};try{Array.prototype.slice.call(u.documentElement.childNodes,0)}catch(H){D=function(g,j){var o=j||[],m=0;if(f.call(g)==="[object Array]")Array.prototype.push.apply(o,
g);else if(typeof g.length==="number")for(var p=g.length;m<p;m++)o.push(g[m]);else for(;g[m];m++)o.push(g[m]);return o}}var w,G;if(u.documentElement.compareDocumentPosition)w=function(g,j){if(g===j){h=true;return 0}if(!g.compareDocumentPosition||!j.compareDocumentPosition)return g.compareDocumentPosition?-1:1;return g.compareDocumentPosition(j)&4?-1:1};else{w=function(g,j){var o=[],m=[],p=g.parentNode,q=j.parentNode,t=p;if(g===j){h=true;return 0}else if(p===q)return G(g,j);else if(p){if(!q)return 1}else return-1;
for(;t;){o.unshift(t);t=t.parentNode}for(t=q;t;){m.unshift(t);t=t.parentNode}p=o.length;q=m.length;for(t=0;t<p&&t<q;t++)if(o[t]!==m[t])return G(o[t],m[t]);return t===p?G(g,m[t],-1):G(o[t],j,1)};G=function(g,j,o){if(g===j)return o;for(g=g.nextSibling;g;){if(g===j)return-1;g=g.nextSibling}return 1}}l.getText=function(g){for(var j="",o,m=0;g[m];m++){o=g[m];if(o.nodeType===3||o.nodeType===4)j+=o.nodeValue;else if(o.nodeType!==8)j+=l.getText(o.childNodes)}return j};(function(){var g=u.createElement("div"),
j="script"+(new Date).getTime();g.innerHTML="<a name='"+j+"'/>";var o=u.documentElement;o.insertBefore(g,o.firstChild);if(u.getElementById(j)){n.find.ID=function(m,p,q){if(typeof p.getElementById!=="undefined"&&!q)return(p=p.getElementById(m[1]))?p.id===m[1]||typeof p.getAttributeNode!=="undefined"&&p.getAttributeNode("id").nodeValue===m[1]?[p]:A:[]};n.filter.ID=function(m,p){var q=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&q&&q.nodeValue===p}}o.removeChild(g);
o=g=null})();(function(){var g=u.createElement("div");g.appendChild(u.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(j,o){var m=o.getElementsByTagName(j[1]);if(j[1]==="*"){for(var p=[],q=0;m[q];q++)m[q].nodeType===1&&p.push(m[q]);m=p}return m};g.innerHTML="<a href='#'></a>";if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(j){return j.getAttribute("href",2)};g=null})();u.querySelectorAll&&
function(){var g=l,j=u.createElement("div");j.innerHTML="<p class='TEST'></p>";if(!(j.querySelectorAll&&j.querySelectorAll(".TEST").length===0)){l=function(m,p,q,t){p=p||u;if(!t&&!l.isXML(p))if(p.nodeType===9)try{return D(p.querySelectorAll(m),q)}catch(x){}else if(p.nodeType===1&&p.nodeName.toLowerCase()!=="object"){var C=p.id,P=p.id="__sizzle__";try{return D(p.querySelectorAll("#"+P+" "+m),q)}catch(N){}finally{if(C)p.id=C;else p.removeAttribute("id")}}return g(m,p,q,t)};for(var o in g)l[o]=g[o];
j=null}}();(function(){var g=u.documentElement,j=g.matchesSelector||g.mozMatchesSelector||g.webkitMatchesSelector||g.msMatchesSelector,o=false;try{j.call(u.documentElement,":sizzle")}catch(m){o=true}if(j)l.matchesSelector=function(p,q){try{if(o||!n.match.PSEUDO.test(q))return j.call(p,q)}catch(t){}return l(q,null,null,[p]).length>0}})();(function(){var g=u.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===
0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(j,o,m){if(typeof o.getElementsByClassName!=="undefined"&&!m)return o.getElementsByClassName(j[1])};g=null}}})();l.contains=u.documentElement.contains?function(g,j){return g!==j&&(g.contains?g.contains(j):true)}:function(g,j){return!!(g.compareDocumentPosition(j)&16)};l.isXML=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false};var M=function(g,
j){for(var o=[],m="",p,q=j.nodeType?[j]:j;p=n.match.PSEUDO.exec(g);){m+=p[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;p=0;for(var t=q.length;p<t;p++)l(g,q[p],o);return l.filter(m,o)};c.find=l;c.expr=l.selectors;c.expr[":"]=c.expr.filters;c.unique=l.uniqueSort;c.text=l.getText;c.isXMLDoc=l.isXML;c.contains=l.contains})();var Wa=/Until$/,Xa=/^(?:parents|prevUntil|prevAll)/,Ya=/,/,Ja=/^.[^:#\[\.,]*$/,Za=Array.prototype.slice,$a=c.expr.match.POS;c.fn.extend({find:function(a){for(var b=this.pushStack("",
"find",a),d=0,e=0,f=this.length;e<f;e++){d=b.length;c.find(a,this[e],b);if(e>0)for(var h=d;h<b.length;h++)for(var k=0;k<d;k++)if(b[k]===b[h]){b.splice(h--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,e=b.length;d<e;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(ka(this,a,false),"not",a)},filter:function(a){return this.pushStack(ka(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,
b){var d=[],e,f,h=this[0];if(c.isArray(a)){var k={},l,n=1;if(h&&a.length){e=0;for(f=a.length;e<f;e++){l=a[e];k[l]||(k[l]=c.expr.match.POS.test(l)?c(l,b||this.context):l)}for(;h&&h.ownerDocument&&h!==b;){for(l in k){e=k[l];if(e.jquery?e.index(h)>-1:c(h).is(e))d.push({selector:l,elem:h,level:n})}h=h.parentNode;n++}}return d}k=$a.test(a)?c(a,b||this.context):null;e=0;for(f=this.length;e<f;e++)for(h=this[e];h;)if(k?k.index(h)>-1:c.find.matchesSelector(h,a)){d.push(h);break}else{h=h.parentNode;if(!h||
!h.ownerDocument||h===b)break}d=d.length>1?c.unique(d):d;return this.pushStack(d,"closest",a)},index:function(a){if(!a||typeof a==="string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var d=typeof a==="string"?c(a,b||this.context):c.makeArray(a),e=c.merge(this.get(),d);return this.pushStack(!d[0]||!d[0].parentNode||d[0].parentNode.nodeType===11||!e[0]||!e[0].parentNode||e[0].parentNode.nodeType===11?e:c.unique(e))},andSelf:function(){return this.add(this.prevObject)}});
c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",
d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,e){var f=c.map(this,b,d);Wa.test(a)||(e=d);if(e&&typeof e==="string")f=c.filter(e,f);f=this.length>1?c.unique(f):f;if((this.length>1||Ya.test(e))&&Xa.test(a))f=f.reverse();return this.pushStack(f,a,Za.call(arguments).join(","))}});
c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return b.length===1?c.find.matchesSelector(b[0],a)?[b[0]]:[]:c.find.matches(a,b)},dir:function(a,b,d){var e=[];for(a=a[b];a&&a.nodeType!==9&&(d===A||a.nodeType!==1||!c(a).is(d));){a.nodeType===1&&e.push(a);a=a[b]}return e},nth:function(a,b,d){b=b||1;for(var e=0;a;a=a[d])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var xa=/ jQuery\d+="(?:\d+|null)"/g,
$=/^\s+/,ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,za=/<([\w:]+)/,ab=/<tbody/i,bb=/<|&#?\w+;/,Aa=/<(?:script|object|embed|option|style)/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,cb=/\=([^="'>\s]+\/)>/g,O={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],
area:[1,"<map>","</map>"],_default:[0,"",""]};O.optgroup=O.option;O.tbody=O.tfoot=O.colgroup=O.caption=O.thead;O.th=O.td;if(!c.support.htmlSerialize)O._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==A)return this.empty().append((this[0]&&this[0].ownerDocument||u).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,
d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},
unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=
c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,e;(e=this[d])!=null;d++)if(!a||c.filter(a,[e]).length){if(!b&&e.nodeType===1){c.cleanData(e.getElementsByTagName("*"));
c.cleanData([e])}e.parentNode&&e.parentNode.removeChild(e)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,e=this.ownerDocument;if(!d){d=e.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(xa,"").replace(cb,'="$1">').replace($,
"")],e)[0]}else return this.cloneNode(true)});if(a===true){la(this,b);la(this.find("*"),b.find("*"))}return b},html:function(a){if(a===A)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(xa,""):null;else if(typeof a==="string"&&!Aa.test(a)&&(c.support.leadingWhitespace||!$.test(a))&&!O[(za.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ya,"<$1></$2>");try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(e){this.empty().append(a)}}else c.isFunction(a)?
this.each(function(f){var h=c(this);h.html(a.call(this,f,h.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),e=d.html();d.replaceWith(a.call(this,b,e))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,
true)},domManip:function(a,b,d){var e,f,h=a[0],k=[],l;if(!c.support.checkClone&&arguments.length===3&&typeof h==="string"&&Ba.test(h))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(h))return this.each(function(s){var v=c(this);a[0]=h.call(this,s,b?v.html():A);v.domManip(a,b,d)});if(this[0]){e=h&&h.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:c.buildFragment(a,this,k);l=e.fragment;if(f=l.childNodes.length===1?l=l.firstChild:
l.firstChild){b=b&&c.nodeName(f,"tr");f=0;for(var n=this.length;f<n;f++)d.call(b?c.nodeName(this[f],"table")?this[f].getElementsByTagName("tbody")[0]||this[f].appendChild(this[f].ownerDocument.createElement("tbody")):this[f]:this[f],f>0||e.cacheable||this.length>1?l.cloneNode(true):l)}k.length&&c.each(k,Ka)}return this}});c.buildFragment=function(a,b,d){var e,f,h;b=b&&b[0]?b[0].ownerDocument||b[0]:u;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===u&&!Aa.test(a[0])&&(c.support.checkClone||
!Ba.test(a[0]))){f=true;if(h=c.fragments[a[0]])if(h!==1)e=h}if(!e){e=b.createDocumentFragment();c.clean(a,b,e,d)}if(f)c.fragments[a[0]]=h?e:1;return{fragment:e,cacheable:f}};c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var e=[];d=c(d);var f=this.length===1&&this[0].parentNode;if(f&&f.nodeType===11&&f.childNodes.length===1&&d.length===1){d[b](this[0]);return this}else{f=0;for(var h=
d.length;f<h;f++){var k=(f>0?this.clone(true):this).get();c(d[f])[b](k);e=e.concat(k)}return this.pushStack(e,a,d.selector)}}});c.extend({clean:function(a,b,d,e){b=b||u;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||u;for(var f=[],h=0,k;(k=a[h])!=null;h++){if(typeof k==="number")k+="";if(k){if(typeof k==="string"&&!bb.test(k))k=b.createTextNode(k);else if(typeof k==="string"){k=k.replace(ya,"<$1></$2>");var l=(za.exec(k)||["",""])[1].toLowerCase(),n=O[l]||O._default,
s=n[0],v=b.createElement("div");for(v.innerHTML=n[1]+k+n[2];s--;)v=v.lastChild;if(!c.support.tbody){s=ab.test(k);l=l==="table"&&!s?v.firstChild&&v.firstChild.childNodes:n[1]==="<table>"&&!s?v.childNodes:[];for(n=l.length-1;n>=0;--n)c.nodeName(l[n],"tbody")&&!l[n].childNodes.length&&l[n].parentNode.removeChild(l[n])}!c.support.leadingWhitespace&&$.test(k)&&v.insertBefore(b.createTextNode($.exec(k)[0]),v.firstChild);k=v.childNodes}if(k.nodeType)f.push(k);else f=c.merge(f,k)}}if(d)for(h=0;f[h];h++)if(e&&
c.nodeName(f[h],"script")&&(!f[h].type||f[h].type.toLowerCase()==="text/javascript"))e.push(f[h].parentNode?f[h].parentNode.removeChild(f[h]):f[h]);else{f[h].nodeType===1&&f.splice.apply(f,[h+1,0].concat(c.makeArray(f[h].getElementsByTagName("script"))));d.appendChild(f[h])}return f},cleanData:function(a){for(var b,d,e=c.cache,f=c.event.special,h=c.support.deleteExpando,k=0,l;(l=a[k])!=null;k++)if(!(l.nodeName&&c.noData[l.nodeName.toLowerCase()]))if(d=l[c.expando]){if((b=e[d])&&b.events)for(var n in b.events)f[n]?
c.event.remove(l,n):c.removeEvent(l,n,b.handle);if(h)delete l[c.expando];else l.removeAttribute&&l.removeAttribute(c.expando);delete e[d]}}});var Ca=/alpha\([^)]*\)/i,db=/opacity=([^)]*)/,eb=/-([a-z])/ig,fb=/([A-Z])/g,Da=/^-?\d+(?:px)?$/i,gb=/^-?\d/,hb={position:"absolute",visibility:"hidden",display:"block"},La=["Left","Right"],Ma=["Top","Bottom"],W,ib=u.defaultView&&u.defaultView.getComputedStyle,jb=function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){if(arguments.length===2&&b===A)return this;
return c.access(this,a,b,true,function(d,e,f){return f!==A?c.style(d,e,f):c.css(d,e)})};c.extend({cssHooks:{opacity:{get:function(a,b){if(b){var d=W(a,"opacity","opacity");return d===""?"1":d}else return a.style.opacity}}},cssNumber:{zIndex:true,fontWeight:true,opacity:true,zoom:true,lineHeight:true},cssProps:{"float":c.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,d,e){if(!(!a||a.nodeType===3||a.nodeType===8||!a.style)){var f,h=c.camelCase(b),k=a.style,l=c.cssHooks[h];b=c.cssProps[h]||
h;if(d!==A){if(!(typeof d==="number"&&isNaN(d)||d==null)){if(typeof d==="number"&&!c.cssNumber[h])d+="px";if(!l||!("set"in l)||(d=l.set(a,d))!==A)try{k[b]=d}catch(n){}}}else{if(l&&"get"in l&&(f=l.get(a,false,e))!==A)return f;return k[b]}}},css:function(a,b,d){var e,f=c.camelCase(b),h=c.cssHooks[f];b=c.cssProps[f]||f;if(h&&"get"in h&&(e=h.get(a,true,d))!==A)return e;else if(W)return W(a,b,f)},swap:function(a,b,d){var e={},f;for(f in b){e[f]=a.style[f];a.style[f]=b[f]}d.call(a);for(f in b)a.style[f]=
e[f]},camelCase:function(a){return a.replace(eb,jb)}});c.curCSS=c.css;c.each(["height","width"],function(a,b){c.cssHooks[b]={get:function(d,e,f){var h;if(e){if(d.offsetWidth!==0)h=ma(d,b,f);else c.swap(d,hb,function(){h=ma(d,b,f)});return h+"px"}},set:function(d,e){if(Da.test(e)){e=parseFloat(e);if(e>=0)return e+"px"}else return e}}});if(!c.support.opacity)c.cssHooks.opacity={get:function(a,b){return db.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":
b?"1":""},set:function(a,b){var d=a.style;d.zoom=1;var e=c.isNaN(b)?"":"alpha(opacity="+b*100+")",f=d.filter||"";d.filter=Ca.test(f)?f.replace(Ca,e):d.filter+" "+e}};if(ib)W=function(a,b,d){var e;d=d.replace(fb,"-$1").toLowerCase();if(!(b=a.ownerDocument.defaultView))return A;if(b=b.getComputedStyle(a,null)){e=b.getPropertyValue(d);if(e===""&&!c.contains(a.ownerDocument.documentElement,a))e=c.style(a,d)}return e};else if(u.documentElement.currentStyle)W=function(a,b){var d,e,f=a.currentStyle&&a.currentStyle[b],
h=a.style;if(!Da.test(f)&&gb.test(f)){d=h.left;e=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;h.left=b==="fontSize"?"1em":f||0;f=h.pixelLeft+"px";h.left=d;a.runtimeStyle.left=e}return f};if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=a.offsetHeight;return a.offsetWidth===0&&b===0||!c.support.reliableHiddenOffsets&&(a.style.display||c.css(a,"display"))==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var kb=c.now(),lb=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
mb=/^(?:select|textarea)/i,nb=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ob=/^(?:GET|HEAD|DELETE)$/,Na=/\[\]$/,T=/\=\?(&|$)/,ia=/\?/,pb=/([?&])_=[^&]*/,qb=/^(\w+:)?\/\/([^\/?#]+)/,rb=/%20/g,sb=/#.*$/,Ea=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!=="string"&&Ea)return Ea.apply(this,arguments);else if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var f=a.slice(e,a.length);a=a.slice(0,e)}e="GET";if(b)if(c.isFunction(b)){d=
b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);e="POST"}var h=this;c.ajax({url:a,type:e,dataType:"html",data:b,complete:function(k,l){if(l==="success"||l==="notmodified")h.html(f?c("<div>").append(k.responseText.replace(lb,"")).find(f):k.responseText);d&&h.each(d,[k.responseText,l,k])}});return this},serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&
!this.disabled&&(this.checked||mb.test(this.nodeName)||nb.test(this.type))}).map(function(a,b){var d=c(this).val();return d==null?null:c.isArray(d)?c.map(d,function(e){return{name:b.name,value:e}}):{name:b.name,value:d}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,e){if(c.isFunction(b)){e=e||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:e})},
getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,e){if(c.isFunction(b)){e=e||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:e})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return new E.XMLHttpRequest},accepts:{xml:"application/xml, text/xml",html:"text/html",
script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},ajax:function(a){var b=c.extend(true,{},c.ajaxSettings,a),d,e,f,h=b.type.toUpperCase(),k=ob.test(h);b.url=b.url.replace(sb,"");b.context=a&&a.context!=null?a.context:b;if(b.data&&b.processData&&typeof b.data!=="string")b.data=c.param(b.data,b.traditional);if(b.dataType==="jsonp"){if(h==="GET")T.test(b.url)||(b.url+=(ia.test(b.url)?"&":"?")+(b.jsonp||"callback")+"=?");else if(!b.data||
!T.test(b.data))b.data=(b.data?b.data+"&":"")+(b.jsonp||"callback")+"=?";b.dataType="json"}if(b.dataType==="json"&&(b.data&&T.test(b.data)||T.test(b.url))){d=b.jsonpCallback||"jsonp"+kb++;if(b.data)b.data=(b.data+"").replace(T,"="+d+"$1");b.url=b.url.replace(T,"="+d+"$1");b.dataType="script";var l=E[d];E[d]=function(m){f=m;c.handleSuccess(b,w,e,f);c.handleComplete(b,w,e,f);if(c.isFunction(l))l(m);else{E[d]=A;try{delete E[d]}catch(p){}}v&&v.removeChild(B)}}if(b.dataType==="script"&&b.cache===null)b.cache=
false;if(b.cache===false&&h==="GET"){var n=c.now(),s=b.url.replace(pb,"$1_="+n);b.url=s+(s===b.url?(ia.test(b.url)?"&":"?")+"_="+n:"")}if(b.data&&h==="GET")b.url+=(ia.test(b.url)?"&":"?")+b.data;b.global&&c.active++===0&&c.event.trigger("ajaxStart");n=(n=qb.exec(b.url))&&(n[1]&&n[1]!==location.protocol||n[2]!==location.host);if(b.dataType==="script"&&h==="GET"&&n){var v=u.getElementsByTagName("head")[0]||u.documentElement,B=u.createElement("script");if(b.scriptCharset)B.charset=b.scriptCharset;B.src=
b.url;if(!d){var D=false;B.onload=B.onreadystatechange=function(){if(!D&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){D=true;c.handleSuccess(b,w,e,f);c.handleComplete(b,w,e,f);B.onload=B.onreadystatechange=null;v&&B.parentNode&&v.removeChild(B)}}}v.insertBefore(B,v.firstChild);return A}var H=false,w=b.xhr();if(w){b.username?w.open(h,b.url,b.async,b.username,b.password):w.open(h,b.url,b.async);try{if(b.data!=null&&!k||a&&a.contentType)w.setRequestHeader("Content-Type",
b.contentType);if(b.ifModified){c.lastModified[b.url]&&w.setRequestHeader("If-Modified-Since",c.lastModified[b.url]);c.etag[b.url]&&w.setRequestHeader("If-None-Match",c.etag[b.url])}n||w.setRequestHeader("X-Requested-With","XMLHttpRequest");w.setRequestHeader("Accept",b.dataType&&b.accepts[b.dataType]?b.accepts[b.dataType]+", */*; q=0.01":b.accepts._default)}catch(G){}if(b.beforeSend&&b.beforeSend.call(b.context,w,b)===false){b.global&&c.active--===1&&c.event.trigger("ajaxStop");w.abort();return false}b.global&&
c.triggerGlobal(b,"ajaxSend",[w,b]);var M=w.onreadystatechange=function(m){if(!w||w.readyState===0||m==="abort"){H||c.handleComplete(b,w,e,f);H=true;if(w)w.onreadystatechange=c.noop}else if(!H&&w&&(w.readyState===4||m==="timeout")){H=true;w.onreadystatechange=c.noop;e=m==="timeout"?"timeout":!c.httpSuccess(w)?"error":b.ifModified&&c.httpNotModified(w,b.url)?"notmodified":"success";var p;if(e==="success")try{f=c.httpData(w,b.dataType,b)}catch(q){e="parsererror";p=q}if(e==="success"||e==="notmodified")d||
c.handleSuccess(b,w,e,f);else c.handleError(b,w,e,p);d||c.handleComplete(b,w,e,f);m==="timeout"&&w.abort();if(b.async)w=null}};try{var g=w.abort;w.abort=function(){w&&g.call&&g.call(w);M("abort")}}catch(j){}b.async&&b.timeout>0&&setTimeout(function(){w&&!H&&M("timeout")},b.timeout);try{w.send(k||b.data==null?null:b.data)}catch(o){c.handleError(b,w,null,o);c.handleComplete(b,w,e,f)}b.async||M();return w}},param:function(a,b){var d=[],e=function(h,k){k=c.isFunction(k)?k():k;d[d.length]=encodeURIComponent(h)+
"="+encodeURIComponent(k)};if(b===A)b=c.ajaxSettings.traditional;if(c.isArray(a)||a.jquery)c.each(a,function(){e(this.name,this.value)});else for(var f in a)ca(f,a[f],b,e);return d.join("&").replace(rb,"+")}});c.extend({active:0,lastModified:{},etag:{},handleError:function(a,b,d,e){a.error&&a.error.call(a.context,b,d,e);a.global&&c.triggerGlobal(a,"ajaxError",[b,a,e])},handleSuccess:function(a,b,d,e){a.success&&a.success.call(a.context,e,d,b);a.global&&c.triggerGlobal(a,"ajaxSuccess",[b,a])},handleComplete:function(a,
b,d){a.complete&&a.complete.call(a.context,b,d);a.global&&c.triggerGlobal(a,"ajaxComplete",[b,a]);a.global&&c.active--===1&&c.event.trigger("ajaxStop")},triggerGlobal:function(a,b,d){(a.context&&a.context.url==null?c(a.context):c.event).trigger(b,d)},httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===1223}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),e=a.getResponseHeader("Etag");
if(d)c.lastModified[b]=d;if(e)c.etag[b]=e;return a.status===304},httpData:function(a,b,d){var e=a.getResponseHeader("content-type")||"",f=b==="xml"||!b&&e.indexOf("xml")>=0;a=f?a.responseXML:a.responseText;f&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b==="json"||!b&&e.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&e.indexOf("javascript")>=0)c.globalEval(a);return a}});if(E.ActiveXObject)c.ajaxSettings.xhr=
function(){if(E.location.protocol!=="file:")try{return new E.XMLHttpRequest}catch(a){}try{return new E.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}};c.support.ajax=!!c.ajaxSettings.xhr();var da={},tb=/^(?:toggle|show|hide)$/,ub=/^([+\-]=)?([\d+.\-]+)(.*)$/,aa,na=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b,d){if(a||a===0)return this.animate(S("show",3),a,b,d);else{a=
0;for(b=this.length;a<b;a++){if(!c.data(this[a],"olddisplay")&&this[a].style.display==="none")this[a].style.display="";this[a].style.display===""&&c.css(this[a],"display")==="none"&&c.data(this[a],"olddisplay",oa(this[a].nodeName))}for(a=0;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b,d){if(a||a===0)return this.animate(S("hide",3),a,b,d);else{a=0;for(b=this.length;a<b;a++){d=c.css(this[a],"display");d!=="none"&&c.data(this[a],"olddisplay",d)}for(a=
0;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b,d){var e=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||e?this.each(function(){var f=e?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(S("toggle",3),a,b,d);return this},fadeTo:function(a,b,d,e){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d,e)},animate:function(a,b,d,e){var f=c.speed(b,d,e);if(c.isEmptyObject(a))return this.each(f.complete);
return this[f.queue===false?"each":"queue"](function(){var h=c.extend({},f),k,l=this.nodeType===1,n=l&&c(this).is(":hidden"),s=this;for(k in a){var v=c.camelCase(k);if(k!==v){a[v]=a[k];delete a[k];k=v}if(a[k]==="hide"&&n||a[k]==="show"&&!n)return h.complete.call(this);if(l&&(k==="height"||k==="width")){h.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(c.css(this,"display")==="inline"&&c.css(this,"float")==="none")if(c.support.inlineBlockNeedsLayout)if(oa(this.nodeName)===
"inline")this.style.display="inline-block";else{this.style.display="inline";this.style.zoom=1}else this.style.display="inline-block"}if(c.isArray(a[k])){(h.specialEasing=h.specialEasing||{})[k]=a[k][1];a[k]=a[k][0]}}if(h.overflow!=null)this.style.overflow="hidden";h.curAnim=c.extend({},a);c.each(a,function(B,D){var H=new c.fx(s,h,B);if(tb.test(D))H[D==="toggle"?n?"show":"hide":D](a);else{var w=ub.exec(D),G=H.cur(true)||0;if(w){var M=parseFloat(w[2]),g=w[3]||"px";if(g!=="px"){c.style(s,B,(M||1)+g);
G=(M||1)/H.cur(true)*G;c.style(s,B,G+g)}if(w[1])M=(w[1]==="-="?-1:1)*M+G;H.custom(G,M,g)}else H.custom(G,D,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);this.each(function(){for(var e=d.length-1;e>=0;e--)if(d[e].elem===this){b&&d[e](true);d.splice(e,1)}});b||this.dequeue();return this}});c.each({slideDown:S("show",1),slideUp:S("hide",1),slideToggle:S("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,e,f){return this.animate(b,
d,e,f)}});c.extend({speed:function(a,b,d){var e=a&&typeof a==="object"?c.extend({},a):{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};e.duration=c.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in c.fx.speeds?c.fx.speeds[e.duration]:c.fx.speeds._default;e.old=e.complete;e.complete=function(){e.queue!==false&&c(this).dequeue();c.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,d,e){return d+e*a},swing:function(a,b,d,e){return(-Math.cos(a*
Math.PI)/2+0.5)*e+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||c.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a=parseFloat(c.css(this.elem,this.prop));return a&&a>-1E4?a:0},custom:function(a,b,d){function e(h){return f.step(h)}
this.startTime=c.now();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;this.pos=this.state=0;var f=this;a=c.fx;e.elem=this.elem;if(e()&&c.timers.push(e)&&!aa)aa=setInterval(a.tick,a.interval)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;
this.custom(this.cur(),0)},step:function(a){var b=c.now(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var e in this.options.curAnim)if(this.options.curAnim[e]!==true)d=false;if(d){if(this.options.overflow!=null&&!c.support.shrinkWrapBlocks){var f=this.elem,h=this.options;c.each(["","X","Y"],function(l,n){f.style["overflow"+n]=h.overflow[l]})}this.options.hide&&c(this.elem).hide();if(this.options.hide||
this.options.show)for(var k in this.options.curAnim)c.style(this.elem,k,this.options.orig[k]);this.options.complete.call(this.elem)}return false}else{a=b-this.startTime;this.state=a/this.options.duration;b=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||b](this.state,a,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=
c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||c.fx.stop()},interval:13,stop:function(){clearInterval(aa);aa=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===
b.elem}).length};var vb=/^t(?:able|d|h)$/i,Fa=/^(?:body|html)$/i;c.fn.offset="getBoundingClientRect"in u.documentElement?function(a){var b=this[0],d;if(a)return this.each(function(k){c.offset.setOffset(this,a,k)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);try{d=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,h=f.documentElement;if(!d||!c.contains(h,b))return d||{top:0,left:0};b=f.body;f=ea(f);return{top:d.top+(f.pageYOffset||c.support.boxModel&&
h.scrollTop||b.scrollTop)-(h.clientTop||b.clientTop||0),left:d.left+(f.pageXOffset||c.support.boxModel&&h.scrollLeft||b.scrollLeft)-(h.clientLeft||b.clientLeft||0)}}:function(a){var b=this[0];if(a)return this.each(function(s){c.offset.setOffset(this,a,s)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,e=b.ownerDocument,f,h=e.documentElement,k=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;
for(var l=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==k&&b!==h;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;f=e?e.getComputedStyle(b,null):b.currentStyle;l-=b.scrollTop;n-=b.scrollLeft;if(b===d){l+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&vb.test(b.nodeName))){l+=parseFloat(f.borderTopWidth)||0;n+=parseFloat(f.borderLeftWidth)||0}d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&f.overflow!=="visible"){l+=
parseFloat(f.borderTopWidth)||0;n+=parseFloat(f.borderLeftWidth)||0}f=f}if(f.position==="relative"||f.position==="static"){l+=k.offsetTop;n+=k.offsetLeft}if(c.offset.supportsFixedPosition&&f.position==="fixed"){l+=Math.max(h.scrollTop,k.scrollTop);n+=Math.max(h.scrollLeft,k.scrollLeft)}return{top:l,left:n}};c.offset={initialize:function(){var a=u.body,b=u.createElement("div"),d,e,f,h=parseFloat(c.css(a,"marginTop"))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",
height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";a.insertBefore(b,a.firstChild);d=b.firstChild;e=d.firstChild;f=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=e.offsetTop!==5;this.doesAddBorderForTableAndCells=
f.offsetTop===5;e.style.position="fixed";e.style.top="20px";this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15;e.style.position=e.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==h;a.removeChild(b);c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.css(a,
"marginTop"))||0;d+=parseFloat(c.css(a,"marginLeft"))||0}return{top:b,left:d}},setOffset:function(a,b,d){var e=c.css(a,"position");if(e==="static")a.style.position="relative";var f=c(a),h=f.offset(),k=c.css(a,"top"),l=c.css(a,"left"),n=e==="absolute"&&c.inArray("auto",[k,l])>-1;e={};var s={};if(n)s=f.position();k=n?s.top:parseInt(k,10)||0;l=n?s.left:parseInt(l,10)||0;if(c.isFunction(b))b=b.call(a,d,h);if(b.top!=null)e.top=b.top-h.top+k;if(b.left!=null)e.left=b.left-h.left+l;"using"in b?b.using.call(a,
e):f.css(e)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),e=Fa.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.css(a,"marginTop"))||0;d.left-=parseFloat(c.css(a,"marginLeft"))||0;e.top+=parseFloat(c.css(b[0],"borderTopWidth"))||0;e.left+=parseFloat(c.css(b[0],"borderLeftWidth"))||0;return{top:d.top-e.top,left:d.left-e.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||u.body;a&&!Fa.test(a.nodeName)&&
c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(e){var f=this[0],h;if(!f)return null;if(e!==A)return this.each(function(){if(h=ea(this))h.scrollTo(!a?e:c(h).scrollLeft(),a?e:c(h).scrollTop());else this[d]=e});else return(h=ea(f))?"pageXOffset"in h?h[a?"pageYOffset":"pageXOffset"]:c.support.boxModel&&h.document.documentElement[d]||h.document.body[d]:f[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();
c.fn["inner"+b]=function(){return this[0]?parseFloat(c.css(this[0],d,"padding")):null};c.fn["outer"+b]=function(e){return this[0]?parseFloat(c.css(this[0],d,e?"margin":"border")):null};c.fn[d]=function(e){var f=this[0];if(!f)return e==null?null:this;if(c.isFunction(e))return this.each(function(h){var k=c(this);k[d](e.call(this,h,k[d]()))});return c.isWindow(f)?f.document.compatMode==="CSS1Compat"&&f.document.documentElement["client"+b]||f.document.body["client"+b]:f.nodeType===9?Math.max(f.documentElement["client"+
b],f.body["scroll"+b],f.documentElement["scroll"+b],f.body["offset"+b],f.documentElement["offset"+b]):e===A?parseFloat(c.css(f,d)):this.css(d,typeof e==="string"?e:e+"px")}})})(window);
          /*
 * Copyright (C) 2010 Gregor Richards
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var WebSplat = new (function() {
    var wpthis = this;

    // configuration:
    var wpConf = this.conf = {
        // what level should we divide up the grid (as a power of 2)?
        gridDensity: 6,

        // how long is a tick?
        msPerTick: 30,

        gravity: 1,
        runAcc: 1.5, // acceleration while running (on normal ground)
        runSlowAcc: 1.5, // slowdown while trying to stop running
        jumpAcc: 1.5, // acceleration mid-jump (magic)
        jumpSlowAcc: 0, // slowdown while trying to stop mid-jump
        moveSpeed: 10,
        jumpSpeed: 15,
        crouchThru: 10,
        hopAbove: 5, // how many pixels we can jump up without actually jumping

        // time to be invincible for
        invTime: 1000,

        imageBase: "http://codu.org/websplat/imgs/",

        playerImageSets: {
            s: { // still
                frames: 1,
                frameRate: 3,
                width: 10,
                height: 40,
                bb: [1, 2, 5, 8]
            },
            c: { // crouching
                frames: 1,
                frameRate: 3,
                width: 20,
                height: 40,
                bb: [2, 4, 8, 11]
            },
            k: { // kneeling
                frames: 1,
                frameRate: 3,
                width: 50,
                height: 49
            },
            cr: { // crawling
                frames: 1,
                frameRate: 3,
                width: 50,
                height: 49
            },
            r: { // running
                frames: 4,
                frameRate: 3,
                width: 20,
                height: 40,
                bb: [6, 12, 5, 8]
            },
            rs: { // sliding
                frames: 1,
                frameRate: 3,
                width: 20,
                height: 40,
                bb: [6, 12, 5, 8]

            },
            rt: { // turning
                frames: 1,
                frameRate: 3,
                width: 20,
                height: 40,
                bb: [6, 12, 5, 8]

            },
            ja: { // jumping (fast)
                frames: 1,
                frameRate: 3,
                width: 20,
                height: 49,
                bb: [6, 12, 14, 17]

            },
            jb: { // jumping (slow)
                frames: 1,
                frameRate: 3,
                width: 20,
                height: 49,
                bb: [6, 12, 14, 17]

            },
            fa: { // falling (fast)
                frames: 2,
                frameRate: 3,
                width: 20,
                height: 49,
                bb: [6, 12, 14, 17]

            },
            fb: { // falling (slow)
                frames: 1,
                frameRate: 3,
                width: 20,
                height: 49,
                bb: [6, 12, 14, 17]

            },
            da: { // dying (a)
                frames: 1,
                frameRate: 3,
                width: 50,
                height: 49
            },
            db: { // dying (b)
                frames: 1,
                frameRate: 3,
                width: 50,
                height: 49
            },
            dc: { // dead
                frames: 1,
                frameRate: 3,
                width: 50,
                height: 49
            }
        },


        // auto-filled
        maxX: 0,
        maxY: 0
    };

    // handlers:
    var wpHandlers = this.handlers = {
        "preload": [],
        "postload": [],
        "onelement": [],
        "onplatform": [],
        "onnonplatform": [],
        "ontick": [],
        "oncollide": [],
        "onpassthru": [],
        "onpause": [],
        "onresume": []
    };

    function addHandler(type, func) {
        wpHandlers[type].push(func);
    }
    this.addHandler = addHandler;

    function callHandlers(type, args) {
        var harr = wpHandlers[type];
        var ret = true;
        for (var i = 0; i < harr.length; i++) {
            var func = harr[i];
            var fret = func.apply(this, args);
            if (typeof(fret) !== "undefined") {
                ret = ret && fret;
            }
        }
        return ret;
    }

    // globals
    var maxX = 0;
    var maxY = 0;
    var curWPID = 0;

    // yield
    function yield(func) {
        setTimeout(func, 0);
    }
    
    // the hash of all element positions bucketed by player size * 4
    var elementPositions = {};
    
    // initialize element positions
    function initElementPositions(then) {
        var plats = [];
        initElementPlatforms(plats, [document.body], function() {
            // then add all the elements
            addElementPositions(plats, function() {
                if (maxX < $(window).width()-20) maxX = $(window).width()-20;
                wpConf.maxX = maxX;
                wpConf.maxY = maxY;

                // make a platform for the bottom
                var bspan = document.createElement("span");
                bspan.style.position = "absolute";
                bspan.style.left = "0px";
                bspan.style.top = (maxY + 100) + "px";
                bspan.style.width = maxX + "px";
                bspan.style.height = "10px";
                document.body.appendChild(bspan);
                addElementPositions([bspan], then);
            });
        });
    }

    function addElementPositions(plats, then) {
        var i = 0;
        function steps() {
            var end = i + 100;
            for (; i < plats.length && i < end; i++) {
                var el = plats[i];
                if (!("wpIsPlatform" in el)) {
                    el.wpIsPlatform = true;
                    addElementPosition(el);
                    callHandlers("onplatform", [el]);
                }
            }
            if (i == plats.length) {
                then();
            } else {
                yield(steps);
            }
        }
        steps();
    }

    // initialize platform elements
    function initElementPlatforms(plats, els, then) {
        var stTime = new Date().getTime();

        while (els.length) {
            if (new Date().getTime() - stTime >= 100) {
                // yield for now, do more later
                yield(function() {
                    initElementPlatforms(plats, els, then);
                });
                return;
            }

            // specific to this element
            var el = els.shift();
            var jqel = $(el);
            var hasText = false;
            var hasChildren = false;
            var isBoring = false;
            var isPlatform = true;
    
            if ("wpIgnore" in el) continue;
    
            callHandlers("onelement", [el]);

            /* if it's position:fixed, we don't want it at all (can't platform
             * on something that moves with the scrollbar) */
            if (jqel.css("position") === "fixed") continue;
        
            // recurse to sub-elements first
            //$(el).contents().each(function() { // jQuery is just too slow here :(
            var cns = el.childNodes;
            var cnsl = cns.length;
            for (var i = 0; i < cnsl; i++) {
                var cnode = cns[i];
                if (cnode.nodeType === 3) { // Node.TEXT_NODE
                    if (!/^[ \r\n\t\u00A0]*$/i.test(cnode.data)) // if it's just whitespace, ignore it
                        hasText = true;
                } else if (cnode.nodeType === 1) { // Node.ELEMENT_NODE
                    hasChildren = true;
                    els.push(cnode);
                }
            }
            //});
        
            // there are certain types which we'll never want to handle, and some which are boring when content-free
            switch (el.tagName.toUpperCase()) {
                case "BODY":
                case "SCRIPT":
                case "NOSCRIPT":
                case "NOEMBED":
                case "OPTION":
                    isPlatform = false;
                    break;

                case "TD":
                case "BR":
                    isBoring = true;
                    break;
            }
        
            // if we don't have text and do have children, we don't want this node to be a platform or obstacle
            //player.debug.innerHTML += el.tagName + " " + hasText + " " + hasChildren + " \\ ";
            if (!hasText && (hasChildren || isBoring)) isPlatform = false;
        
            // if it's invisible, don't want it
            if (jqel.css("display") === "none" || jqel.css("visibility") === "hidden")
                isPlatform = false;
    
            // if it's not a platform, we're done
            if (!isPlatform) {
                callHandlers("onnonplatform", [el]);
                continue;
            }

            var csposition = jqel.css("position");
            var csdisplay = jqel.css("display");
        
            // OK, definitely a platform, so block it right
            if (!("wpSpan" in el) &&
                (csposition === "static" || csposition === "relative") &&
                (csdisplay === "block" || csdisplay === "list-item" ||
                 csdisplay === "table-cell" || csdisplay === "table-caption")) {
                // change how these are displayed to not be full-width
                if (csdisplay !== "table-cell" && csdisplay !== "table-caption")
                    el.style.display = "table";

                // text align becomes weird
                var ta = jqel.css("textAlign");
                if (el.tagName.toUpperCase() == "CENTER") {
                    el.style.textAlign = "center";
                    ta = "center";
                }
                switch (ta) {
                    case "center":
                        el.style.margin = "auto";
                        break;

                    case "right":
                        el.style.marginLeft = "auto";
                        break;
                }

                if (hasText || hasChildren) {
                    /* need to put everything in spans and make /those/ the
                     * platform for us to stand on the right parts of text */
                    var subels = [];
                    var spanel = document.createElement("span");
                    spanel.wpSpan = true;
                    spanel.style.display = "inline";
                    while (el.firstChild !== null) {
                        if (el.firstChild.nodeType === 3) { // Node.TEXT_NODE
                            spanel.appendChild(el.removeChild(el.firstChild));
                        } else {
                            if (el.firstChild.nodeType === 1 && // Node.ELEMENT_NODE
                                $(el.firstChild).css("display") === "inline") {
                                // we can just keep this in the span
                                spanel.appendChild(el.removeChild(el.firstChild));
                            } else {
                                // need to switch to a new span
                                subels.push(spanel);
                                subels.push(el.removeChild(el.firstChild));
                                spanel = document.createElement("span");
                                spanel.wpSpan = true;
                                spanel.style.display = "inline";
                            }
                        }
                    }
                    subels.push(spanel);

                    // then put those spans in this
                    for (var i = 0; i < subels.length; i++) {
                        el.appendChild(subels[i]);
                    }

                    // and handle them instead
                    for (var i = 0; i < subels.length; i++) {
                        if (subels[i].nodeType === 1) { // Node.ELEMENT_NODE
                            els.push(subels[i]);
                        }
                    }

                } else {
                    plats.push(el);
                }

            } else {
                // add its position to elementPositions
                plats.push(el);
            }
        }

        then();
    }
    
    // add an element at a position
    function addElementPosition(el) {
        el.wpID = curWPID++;

        var scrollTop = document.documentElement.scrollTop ||
            document.body.scrollTop;
        var scrollLeft = document.documentElement.scrollLeft ||
            document.body.scrollLeft;
        var rects = el.getClientRects();

        // save for later removal if necessary
        el.wpSavedScrollTop = scrollTop;
        el.wpSavedScrollLeft = scrollLeft;
        el.wpSavedRects = rects;

        var rectl = rects.length;
        for (var recti = 0; recti < rectl; recti++) {
            var rect = rects[recti];
            var ell = rect.left + scrollLeft;
            var elt = rect.top + scrollTop;
            var elr = rect.right + scrollLeft;
            var elb = rect.bottom + scrollTop;
            if (ell == elr || elt == elb) continue;

            if (elr > maxX) maxX = elr;
            if (elb > maxY) maxY = elb;

            // adjust the info
            ell = Math.floor(ell>>wpConf.gridDensity);
            elt = Math.floor(elt>>wpConf.gridDensity);
            elr = Math.ceil(elr>>wpConf.gridDensity);
            elb = Math.ceil(elb>>wpConf.gridDensity);
        
            // put it in the hash
            for (var y = elt; y <= elb; y++) {
                if (!(y in elementPositions)) {
                    elementPositions[y] = {};
                }
                var epy = elementPositions[y];
        
                for (var x = ell; x <= elr; x++) {
                    if (!(x in epy)) {
                        epy[x] = [];
                    }
                    epy[x].push(el);
                }
            }
        }
    }
    this.addElementPosition = addElementPosition;

    // remove this paltform
    function remElementPosition(el) {
        if (!("wpSavedRects" in el)) return;

        var scrollTop = el.wpSavedScrollTop;
        var scrollLeft = el.wpSavedScrollLeft;
        var rects = el.wpSavedRects;

        var rectl = rects.length;
        for (var recti = 0; recti < rectl; recti++) {
            var rect = rects[recti];
            var ell = rect.left + scrollLeft;
            var elt = rect.top + scrollTop;
            var elr = rect.right + scrollLeft;
            var elb = rect.bottom + scrollTop;
            if (ell == elr || elt == elb) continue;

            if (elr > maxX) maxX = elr;
            if (elb > maxY) maxY = elb;

            // adjust the info
            ell = Math.floor(ell>>wpConf.gridDensity);
            elt = Math.floor(elt>>wpConf.gridDensity);
            elr = Math.ceil(elr>>wpConf.gridDensity);
            elb = Math.ceil(elb>>wpConf.gridDensity);
        
            // take it from the hash
            for (var y = elt; y <= elb; y++) {
                if (!(y in elementPositions)) continue;
                var epy = elementPositions[y];
        
                for (var x = ell; x <= elr; x++) {
                    if (!(x in epy)) continue;
                    var els = epy[x];
                    var outels = [];

                    for (var i = 0; i < els.length; i++) {
                        if (els[i] !== el) outels.push(els[i]);
                    }

                    epy[x] = outels;
                }
            }
        }

        try {
            delete el.wpSavedScrollTop;
            delete el.wpSavedScrollLeft;
            delete el.wpSavedRects;
        } catch (ex) {}
    }
    this.remElementPosition = remElementPosition;

    // move this element to its new location
    function movElementPosition(el) {
        remElementPosition(el);
        addElementPosition(el);
    }
    this.movElementPosition = movElementPosition;

    // the sprite list
    var sprites = this.sprites = [];

    // add a sprite to the sprite list
    function addSprite(sprite) {
        sprites.push(sprite);
    }
    this.addSprite = addSprite;

    // remove a sprite from the sprite list
    function remSprite(sprite) {
        // if it's a platform, remove that first
        if (sprite.isPlatform) {
            remElementPosition(sprite.el);
        }

        // then remove it from the list
        var osprites = [];
        for (var i = 0; i < sprites.length; i++) {
            if (sprites[i] !== sprite) osprites.push(sprites[i]);
        }
        sprites = this.sprites = osprites;
    }
    this.remSprite = remSprite;

    // the main timer
    var gameTimer = null;

    // stuff for keeping framerate right
    var refTime = null;
    var nextTime = null;
    var tickNo = null;

    // perform a tick for every sprite
    function spritesTick() {
        if (refTime === null) {
            refTime = new Date().getTime();
            tickNo = 1;
        } else {
            tickNo++;

            // see if we're too early
            while (new Date().getTime() < nextTime) {}
        }

        callHandlers("ontick", [this]);

        if (sprites.length == 0) {
            // time to stop!
            if (gameTimer !== null) {
                clearTimeout(gameTimer);
                gameTimer = refTime = null;
            }

        } else {
            // tick every sprite
            for (var i = 0; i < sprites.length; i++) {
                sprites[i].tick();
            }

        }

        var cur = new Date().getTime();
        var next = nextTime = refTime + tickNo*wpConf.msPerTick;
        var ms = 0;
        if (cur <= next) {
            ms = next - cur;
        } else if (cur > next + 200) {
            // bleh
            refTime = null;
        }
        gameTimer = setTimeout(spritesTick, ms);
    }

    // start the sprite timer
    function spritesGo() {
        gameTimer = setTimeout(spritesTick, wpConf.msPerTick);

        $(window).focus(function() {
            if (gameTimer === null) {
                callHandlers("onresume", []);
                gameTimer = setTimeout(spritesTick, wpConf.msPerTick);
            }
        });

        $(window).blur(function() {
            if (gameTimer !== null) {
                callHandlers("onpause", []);
                clearTimeout(gameTimer);
                gameTimer = refTime = null;
            }
        });
    }

    // the Sprite "class", which represents an object with accelerative movement and displayed as an image
    function Sprite(imageBase, imageSets, hasGravity, isPlatform) {
        this.imageBase = imageBase;
        this.imageSets = imageSets;
        this.hasGravity = hasGravity;
        this.isPlatform = isPlatform;

        // default to the mode and state "s"
        if (typeof(this.mode) === "undefined")
            this.mode = "s";
        if (typeof(this.state) === "undefined")
            this.state = "s";
        this.dir = "r";
        this.frame = 0;

        // useless default location and size
        this.x = 0;
        this.y = 0;
        this.xioff = 0;
        this.yioff = 0;
        try {
            this.w = imageSets["s"].width;
            this.h = imageSets["s"].height;
        } catch (ex) {
            this.w = 0;
            this.h = 0;
        }

        // useless default speed and acceleration
        this.xvel = 0;
        this.xacc = false; // false means "stop"
        this.xaccmax = false; // the maximum velocity we can get to by acceleration
        this.yvel = 0;
        this.yacc = false; // less meaningful here
        this.yaccmax = false;

        // what elements are left of us?
        this.leftOf = null

        // what elements are right of us?
        this.rightOf = null;

        // what elements are above us?
        this.above = null;

        // what elements are we standing on?
        this.on = null;
    
        // what elements are we clipping through?
        this.thru = {};

        // load all the images
        if (typeof(this.images) === "undefined") {
            var images = this.images = {};
            for (var state in imageSets) {
                var imgSet = imageSets[state];
                for (var dir in {"r":0,"l":0}) {
                    for (var i = 0; i < imgSet.frames; i++) {
                        if ("frameAliases" in imgSet && imgSet.frameAliases[i] != i) continue;
                        var img = new Image();
                        img.src = wpConf.imageBase + imageBase + state + i + dir + ".png";
                        images[state + i + dir] = img;
                    }
                }
            }
        }

        // create the img element that is the actual display of the sprite
        this.el = document.createElement("img");
        this.el.wpSprite = this;

        this.el.src = this.getImage(this.state, "r", 0);

        this.el.style.color = "black";
        this.el.style.position = "absolute";
        this.el.style.zIndex = "1000000";
        this.el.style.fontSize = "20px";
        document.body.appendChild(this.el);

        // if it's a sprite platform, we want a faster getClientRects than the builtin one
        if (isPlatform) {
            this.el.getClientRects = function() {
                var scrollTop = document.documentElement.scrollTop ||
                    document.body.scrollTop;
                var scrollLeft = document.documentElement.scrollLeft ||
                    document.body.scrollLeft;

                return [{
                    left: this.wpSprite.x - scrollLeft,
                    top: this.wpSprite.y - scrollTop,
                    right: this.wpSprite.x + this.wpSprite.w - scrollLeft,
                    bottom: this.wpSprite.y + this.wpSprite.h - scrollTop
                }];
            }
        }

        this.setXY(0, 0);
    }
    this.Sprite = Sprite;
    function SpriteChild() {}
    this.SpriteChild = SpriteChild;
    SpriteChild.prototype = Sprite.prototype;

    // (private) get one of the images
    Sprite.prototype.getImage = function(state, dir, num) {
        return this.images[state + num + dir].src;
    }

    // usually part of tick, update the image
    Sprite.prototype.updateImage = function() {
        // image change
        this.frame++;
        if (this.frame > 1024) this.frame = 0;

        // choose our direction
        if (this.xvel > 0) {
            this.dir = "r";
        } else if (this.xvel < 0) {
            this.dir = "l";
        } else if (this.xacc > 0) {
            this.dir = "r";
        } else if (this.xacc < 0) {
            this.dir = "l";
        }

        this.updateImagePrime();

        // get the image and frame
        var imgSet = this.imageSets[this.state];
        var frame = Math.floor(this.frame/imgSet.frameRate) % imgSet.frames;

        // frames can be aliased
        if ("frameAliases" in imgSet) {
            frame = imgSet.frameAliases[frame];
        }

        // and bounding boxes can be reduced
        var bb = [1, 2, 1, 2];
        if ("bb" in imgSet) {
            bb = imgSet.bb;
        }
        this.xioff = bb[0];
        this.yioff = bb[2];

        var newi = this.getImage(this.state, this.dir, frame);
        if (this.el.src != newi) {
            this.el.src = newi;
        }

        // and check for width/height changes
        if (this.w != imgSet.width - bb[1]) {
            // adjust left by half the difference (or right for shrinking)
            this.x -= Math.floor((imgSet.width - bb[1] - this.w)/2);
        }
        if (this.h != imgSet.height - bb[3]) {
            // adjust up by the full difference
            this.y -= imgSet.height - bb[3] - this.h;
        }

        this.w = imgSet.width - bb[1];
        this.h = imgSet.height - bb[3];
    }

    // override this for sprites that actually change
    Sprite.prototype.updateImagePrime = function() {}

    // set the X and Y (usually used internally by tick)
    Sprite.prototype.setXY = function(x, y) {
        this.x = x;
        this.y = y;
    
        this.el.style.left = Math.floor(this.x-this.xioff) + "px";
        this.el.style.top = Math.floor(this.y-this.yioff) + "px";

        // make sure it remains a platform
        if (this.isPlatform) {
            movElementPosition(this.el);
            this.thru[this.el.wpID] = true;
        }
    }

    // perform a tick of this sprite
    Sprite.prototype.tick = function() {
        this.updateImage();

        // get the acceleration from our platform
        var realxacc = this.xacc;
        if (this.xacc === false) realxacc = 0;
        var slowxacc = 1;
        if (this.on === null) {
            realxacc *= wpConf.jumpAcc;
            slowxacc *= wpConf.jumpSlowAcc;
        } else {
            realxacc *= wpConf.runAcc;
            slowxacc *= wpConf.runSlowAcc;
        }
        var realyacc = this.hasGravity ? wpConf.gravity : 0;
        if (this.yacc !== false) realyacc += this.yacc;
 

        // acceleration
        var yas = (this.yacc >= 0) ? 1 : -1;
        var xas = (this.xacc >= 0) ? 1 : -1;
        if (this.yaccmax === false || this.yvel*yas < this.yaccmax*yas) {
            this.yvel += realyacc;
            if (this.yaccmax !== false && this.yvel*yas >= this.yaccmax*yas) {
                this.yvel = this.yaccmax;
            }
        }
        if (this.xacc === false) {
            // slow down!
            if (this.xvel > 0) {
                this.xvel -= slowxacc;
                if (this.xvel < 0) this.xvel = 0;
            } else if (this.xvel < 0) {
                this.xvel += slowxacc;
                if (this.xvel > 0) this.xvel = 0;
            }
        } else if (this.xaccmax === false || this.xvel*xas < this.xaccmax*xas) {
            this.xvel += realxacc;
            if (this.xaccmax !== false && this.xvel*xas >= this.xaccmax*xas) {
                this.xvel = this.xaccmax;
            }
        }
  
        this.postAcc();
    

        // then velocity
        // signs we need
        var xs = (this.xvel >= 0) ? 1 : -1;
        var ys = (this.yvel >= 0) ? 1 : -1;

        // x first
        var x = this.x;
        var xe = x + this.xvel;
        this.rightOf = this.leftOf = null;
        for (; x*xs <= xe*xs; x += xs) {
            var els = wpGetElementsByBoxThru(this, this.thru, false, x, this.w, this.y, this.h-wpConf.hopAbove);
            if (els !== null) {
                els = this.collision(els, xs, 0);
                if (els === null) continue;

                if (xs >= 0) {
                    this.rightOf = els;
                } else {
                    this.leftOf = els;
                }

                this.xvel = x - this.x;
                break;
            }
        }
        if (x != this.x) x -= xs;
        if ("forcexvel" in this) {
            this.xvel = this.forcexvel;
            delete this.forcexvel;
        }

        // if we need to hop, do so
        while (x != this.x &&
            wpGetElementsByBoxThru(this, this.thru, false, x, this.w, this.y+this.h-wpConf.hopAbove, wpConf.hopAbove) !== null) {
            this.y--;
        }
    
        // then y
        var y = this.y;
        var ye = y + this.yvel;
        var leading = (ys>=0) ? this.h : 0;
        this.above = this.on = null; // default to not being on anything
        for (; y*ys <= ye*ys; y += ys) {
            var els = wpGetElementsByBoxThru(this, this.thru, false, x, this.w, y+leading, 0);
            if (els !== null) {
                els = this.collision(els, 0, ys);
                if (els === null) continue;

                // get more elements to drop through if we duck
                var morels = wpGetElementsByBoxThru(this, this.thru, false, x, this.w, y + this.crouchThru*ys, this.h);
                if (morels != null) els.push.apply(els, morels);

                // then fail
                if (ys >= 0) {
                    this.on = els;
                } else {
                    this.above = els;
                }
                this.yvel = y - this.y;
                break;
            }
        }
        if (y != this.y) y -= ys;
        if ("forceyvel" in this) {
            this.yvel = this.forceyvel;
            delete this.forceyvel;
        }

        // get our thrulist correct by getting around our location
        wpGetElementsByBoxThru(this, this.thru, true, x-1, this.w+2, y-1, this.h+2);

        // bounds
        if (x < 0) {
            if (this.leftOf === null) this.leftOf = [];
            x = 0;
        }
        if (x + this.w > maxX) {
            if (this.rightOf === null) this.rightOf = [];
            x = maxX - this.w;
        }
        if (y + this.h > maxY + 100) {
            if (this.on === null) this.on = [];
            y = maxY - this.h + 100;
            this.hitBottom();
        }

        // now set the location
        this.setXY(x, y);
    }

    // override if you need it
    Sprite.prototype.postAcc = function() {}
    Sprite.prototype.collision = function(els, xs, ys) {}
    Sprite.prototype.hitBottom = function() {}
    Sprite.prototype.takeDamage = function(from, pts) {return false;} // returns true if killed
    Sprite.prototype.doDamage = function(to, pts) {}

    // make this a starting position by figuring out what we're clipping through
    Sprite.prototype.startingPosition = function() {
        var thru = {};
        var gothru = wpGetElementsByBox(this.x, this.w, this.y, this.h);
        if (gothru !== null) {
            for (var i = 0; i < gothru.length; i++) {
                thru[gothru[i].wpID] = true;
            }
        }
        this.thru = thru;
    }

    // is this sprite onscreen?
    Sprite.prototype.onScreen = function() {
        var scrollTop = document.documentElement.scrollTop ||
            document.body.scrollTop;
        if (this.y+this.h >= scrollTop &&
            this.y <= scrollTop+$(window).height())
            return true;
        return false;
    }


    // the player (sprite)
    Sprite.prototype.isPlayer = false;
    function Player() {
        Sprite.call(this, "g", wpConf.playerImageSets, true, false);

        // we're still alive!
        this.dead = false;
        this.deathSpeed = 1;
        this.hp = 1;
        this.maxHP = 1;
        this.invincible = false;
        this.invTimer = null;
    
        // what jump are we on?
        this.jump = 0;
    
        // are we power-jumping?
        this.powerJump = false;

        // players are players!
        this.isPlayer = true;
    }
    Player.prototype = new SpriteChild();
    this.Player = Player;

    // when we change the XY of a player, need to assert the viewport follows them
    Player.prototype.setXY = function(x, y) {
        Sprite.prototype.setXY.call(this, x, y);
        assertViewport(this.x, this.x+this.w, this.y, this.y+this.h);
    }

    Player.prototype.updateImagePrime = function() {
        // choose our state
        if (this.dead) {
            if (this.frame < this.deathSpeed) return;

            // ? -> c -> k -> cr -> da -> db -> dc
            if (this.state == "c") {
                // FIXME: Should have this shift be configurable
                if (this.dir == "r") {
                    this.x += 30;
                } else {
                    this.x -= 30;
                }
                this.state = "k";
                this.frame = 0;
            } else if (this.state == "k") {
                this.state = "cr";
                this.frame = 0;
            } else if (this.state == "cr") {
                this.state = "da";
                this.frame = 0;
            } else if (this.state == "da") {
                this.state = "db";
                this.frame = 0;
            } else if (this.state == "db") {
                this.state = "dc";
                this.frame = 0;
            } else if (this.state != "dc") {
                this.state = "c";
                this.frame = 0;
            }
        } else if (this.on === null) {
            if (this.mode == "jfc") {
                // crouching step of the fallthrough, crouch for 5 frames
                if (this.frame >= 10) {
                    this.mode = "jf";
                    this.frame = 0;
                }
                this.state = "c";
            } else {
                this.mode = "jf";

                // flying or falling, take your pick
                if (this.xvel == 0) {
                    // if we're not moving horizontally, all the frames look weird
                    this.state = "fb";
                } else if (this.yvel > 5) {
                    this.state = "fa";
                } else if (this.yvel > 0) {
                    this.state = "fb";
                } else if (this.yvel < -10) {
                    this.state = "ja";
                } else if (this.yvel < -0) {
                    this.state = "jb";
                }
            }
        } else if (this.xacc != 0 || this.xvel != 0) {
            if ((this.xacc >= 0 && this.xvel < 0) ||
                (this.xacc <= 0 && this.xvel > 0)) {
                if (this.xacc == 0) {
                    // stopping, slide
                    this.mode = "rs";
                    this.state = "rs";
                } else {
                    this.mode = "rt";
                    this.state = "rt";
                }
            } else {
                this.mode = "r";
                this.state = "r";
            }
        } else {
            this.mode = "s";
            this.state = "s";
        }
    }

    Player.prototype.postAcc = function() {
        // if we're falling, we shouldn't be powerjumping
        if (this.yvel > 0) this.powerJump = false;

        // and when a player dies, he stops x-moving
        if (this.dead) this.xacc = false;
    }

    Player.prototype.collision = function(els, xs, ys) {
        var rels = [];
        for (var i = 0; i < els.length; i++) {
            var el = els[i];
            if (callHandlers("oncollide", [this, el, (ys<0)?this.powerJump:false, xs, ys])) {
                rels.push(el);
            }
        }
        if (rels.length == 0) return null;
        els = rels;

        // now see if we're going to powerjump through them
        if (ys < 0 && this.powerJump) {
            for (var i = 0; i < els.length; i++) {
                this.thru[els[i].wpID] = true;
            }
            return null;
        }

        // if we got here, we're stuck
        if (ys > 0) {
            this.jump = 0;
            this.powerJump = false;
        }

        return els;
    }

    Player.prototype.hitBottom = function() {
        // if a player hits the bottom of the playing area, they die
        this.dead = true;
    }

    Player.prototype.takeDamage = function(from, pts) {
        if (this.dead) return false;

        if (!this.invincible) {
            this.hp -= pts;
            if (this.hp <= 0) {
                // you killed him! :(
                this.hp = 0;
                this.dead = true;
                this.onChangeHP();
                return true;
            }
            this.onChangeHP();

            // become temporarily invincible
            this.invincible = true;
            if (this.invTimer !== null) {
                clearTimeout(this.invTimer);
            }
            var plthis = this;
            this.invTimer = setTimeout(function() {
                plthis.invincible = false;
                plthis.invTimer = null;
            }, wpConf.invTime);

            // and go flying
            if (from.x < this.x) {
                this.forcexvel = wpConf.moveSpeed; // FIXME, should be a different configurable
            } else {
                this.forcexvel = -wpConf.moveSpeed;
            }
            this.forceyvel = -wpConf.moveSpeed;
        }

        return false;
    }

    Player.prototype.doDamage = function(to, pts) {
        if (Math.random()*3 < 1) {
            this.hp++;
            if (this.hp > this.maxHP) this.hp = this.maxHP;
        }
        this.onChangeHP();
    }

    Player.prototype.onChangeHP = function() {}


    // do these two boxes intersect?
    function boxIntersection(l1, r1, t1, b1, l2, r2, t2, b2) {
        var xInt = r1 >= l2 && l1 <= r2;
        var yInt = b1 >= t2 && t1 <= b2;
        return xInt && yInt;
    }

    // get any element at this location
    function wpGetElementsByBox(l, w, t, h) {
        // get the bins
        var ls = Math.floor(l>>wpConf.gridDensity);
        var r = l+w;
        var rs = Math.floor(r>>wpConf.gridDensity);
        var ts = Math.floor(t>>wpConf.gridDensity);
        var b = t+h;
        var bs = Math.floor(b>>wpConf.gridDensity);
    
        var els = [];
        var checked = {};
   
        for (var ys = ts; ys <= bs; ys++) {
            for (var xs = ls; xs <= rs; xs++) {
                // get the values
                var epy = elementPositions[ys];
                if (typeof(epy) === "undefined") continue;
    
                var elbox = epy[xs];
                if (typeof(elbox) === "undefined") continue;
    
                // now check for an actual overlap
                for (var eli = 0; eli < elbox.length; eli++) {
                    var el = elbox[eli];
                    if (el.wpID in checked) continue;
                    checked[el.wpID] = true;
                    if (typeof(el.wpAllowClip) !== "undefined") continue;

                    // check each rect
                    var scrollLeft = el.wpSavedScrollLeft;
                    var scrollTop = el.wpSavedScrollTop;
                    var rects = el.wpSavedRects;
                    var rectl = rects.length;
                    for (var recti = 0; recti < rectl; recti++) {
                        var rect = rects[recti];
                        var ell = rect.left + scrollLeft;
                        var elt = rect.top + scrollTop;
                        var elr = rect.right + scrollLeft;
                        var elb = rect.bottom + scrollTop;
    
                        if (boxIntersection(l, r, t, b, ell, elr, elt, elb)) {
                            els.push(el);
                        }
                    }
                }
            }
        }
    
        if (els.length == 0) return null;
        return els;
    }
    this.getElementsByBox = wpGetElementsByBox;

    // get any element at this location we're not currently falling through
    function wpGetElementsByBoxThru(player, thru, upd, l, w, t, h) {
        var inels = wpGetElementsByBox(l, w, t, h);
        var outels = [];
        var outthru = {};
    
        if (inels === null) inels = [];
    
        // first get rid of anything we're going through now
        for (var i = 0; i < inels.length; i++) {
            var inel = inels[i];
            outthru[inel.wpID] = true;
            if (inel.wpID in thru) {
                callHandlers("onpassthru", [player, inel]);
            } else {
                outels.push(inel);
            }
        }
    
        // then remove from the thru list anything we've already gone through
        if (upd) {
            for (var tid in thru) {
                if (!(tid in outthru)) {
                    delete thru[tid];
                }
            }
        }
    
        if (outels.length == 0) return null;
        return outels;
    }
    this.getElementsByBoxThru = wpGetElementsByBoxThru;

    var viewportAsserted = false;
    function assertViewport(left, right, top, bottom) {
        // should we scroll?
        var mustScroll = false;
    
        // get the viewport location
        var vx = $(document).scrollLeft();
        var vy = $(document).scrollTop();
        var vw = $(window).width();
        var vr = vx + vw;
        var vh = $(window).height();
        var vb = vy + vh;
    
        // check if we're in bounds
        if (right < vw - 200) {
            if (vx > 0) {
                mustScroll = true;
                vx = 0;
            }
        } else {
            var nvx = right - vw + 200;
            if (nvx + vw > maxX) nvx = maxX - vw;
            if (nvx < 0) nvx = 0;
            if (vx != nvx) {
                mustScroll = true;
                vx = nvx;
            }
        }
        if (top < vy + 200) {
            mustScroll = true;
            vy = top - 200;
        }
        if (bottom > vb - 200) {
            mustScroll = true;
            vy = bottom - vh + 200;
        }
    
        // set it
        if (mustScroll) {
            viewportAsserted = false;
            window.scroll(Math.floor(vx), Math.floor(vy));
            viewportAsserted = true;
        }
    }

    // and if they try to scroll themselves, take it back!
    $(window).scroll(function() {
        if (viewportAsserted && "Player" in wpthis)
            assertViewport(wpthis.player.x, wpthis.player.x+wpthis.player.w,
                           wpthis.player.y, wpthis.player.y+wpthis.player.h);
    });

    function go() {
        callHandlers("preload", []);

        var player;
    
        initElementPositions(function() {
            player = wpthis.player = new Player();
            addSprite(player);

            var keydown = function(ev) {
                if (player.dead) return;
                switch (ev.which) {
                    case 37: // left
                    case 65: // a
                        player.xacc = -1;
                        player.xaccmax = wpConf.moveSpeed * -1;
                        break;
            
                    case 39: // right
                    case 68: // d
                        player.xacc = 1;
                        player.xaccmax = wpConf.moveSpeed;
                        break;
            
                    case 38: // up
                    case 87: // w
                    case 32: // space
                        if ("pressingUp" in player) break;
                        player.pressingUp = true;
                        if (player.on !== null) {
                            player.jump++;
                            player.on = null;
                            player.yvel = -wpConf.jumpSpeed;
                        } else if (player.jump <= 1) {
                            player.jump = 2;
                            player.powerJump = true;
                            player.yvel = -wpConf.jumpSpeed;
                        }
                        break;
            
                    case 40: // down
                    case 83: // s
                        if (player.on !== null) {
                            player.mode = "jfc";
                            player.frame = 0;
                            for (var i = 0; i < player.on.length; i++) {
                                player.thru[player.on[i].wpID] = true;
                            }
                            player.on = null;
                        }
                        break;
            
                    default:
                        return true;
                }
            
                ev.stopPropagation();
                return false;
            }
            $(document.body).keydown(keydown);
            $(window).keydown(keydown);
            
            var keyup = function(ev) {
                switch (ev.which) {
                    case 37: // left
                    case 65: // a
                        if (player.xacc < 0) {
                            player.xacc = false;
                            player.xaccmax = false;
                        }
                        break;
            
                    case 39: // right
                    case 68: // d
                        if (player.xacc > 0) {
                            player.xacc = false;
                            player.xaccmax = false;
                        }
                        break;
            
                    case 38: // up
                    case 87: // w
                    case 32: // space
                        delete player.pressingUp;
                        break;
            
                    case 40: // down
                    case 83: // s
                        break;
            
                    default:
                        return true;
                }
            
                ev.stopPropagation();
                return false;
            }
            $(document.body).keyup(keyup);
            $(window).keyup(keyup);

            // prevent resizing (it's cheating!)
            var origW = $(window).width();
            var origH = $(window).height();
            $(window).resize(function(event) {
                if ($(window).width() == origW && $(window).height() == origH) {
                    // spurious
                    return;
                }

                // no resizing!
                player.dead = true;
            });

            // put the player in the starting position
            player.setXY(Math.floor($(window).width()/2), player.h*2);
            player.startingPosition();

            // finish loading
            callHandlers("postload", [player]);
            wpDisplayMessage();

            // and go
            spritesGo();
        });
    };
    this.go = go;
})();
          /*
 * Copyright (C) 2010 Gregor Richards
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function() {
    var skulldogConf = {
        moveSpeed: 3,
        edgeDetectDist: 5,
        edgeDetectSize: 10 /* hopAbove*2 */
    }

    var skulldogImageSets = {
        r: {
            frames: 2,
            frameRate: 3,
            width: 26,
            height: 22
        },
        d: {
            frames: 1,
            frameRate: 3,
            width: 30,
            height: 14
        }
    }

    WebSplat.Sprite.prototype.isBaddy = false;

    function Skulldog() {
        this.mode = this.state = "r";
        WebSplat.Sprite.call(this, "skulldog-", skulldogImageSets, true, true);
        this.munching = false;
        this.xacc = 0;
        this.yacc = 0;
        this.isBaddy = true;
        this.updateImage();
    }
    Skulldog.prototype = new WebSplat.SpriteChild();

    // every tick, change the acceleration inexplicably
    Skulldog.prototype.tick = function() {
        if (!this.onScreen()) return;

        // do a normal round
        WebSplat.Sprite.prototype.tick.call(this);

        // only do anything if we're on a platform
        if (!this.munching && this.on !== null) {
            // if we bumped into something left or there is nothing to the left ...
            if (this.leftOf !== null || this.noPlatform(this.x-skulldogConf.edgeDetectDist-skulldogConf.edgeDetectSize)) {
                this.xacc = 1;
                this.xaccmax = skulldogConf.moveSpeed;
            } else if (this.rightOf !== null || this.noPlatform(this.x+this.w+skulldogConf.edgeDetectDist)) {
                this.xacc = -1;
                this.xaccmax = -skulldogConf.moveSpeed;
            } else if (this.xacc === false || this.xacc == 0) {
                this.xacc = 1;
                this.xaccmax = skulldogConf.moveSpeed;
            }
        } else {
            this.xacc = false;
        }

        if (this.y<0) {
            // don't let them go above the screen
            this.setXY(this.x, 0);
        }
    }

    // is their no platform at this X?
    Skulldog.prototype.noPlatform = function(x) {
        var els = WebSplat.getElementsByBoxThru(this, this.thru, false, x, skulldogConf.edgeDetectSize, this.y+this.h, skulldogConf.edgeDetectSize);
        if (els === null) return true;
        return false;
    }

    // take damage
    Skulldog.prototype.takeDamage = function(from, pts) {
        // make it dead
        this.mode = this.state = "d";
        this.updateImage();
        this.setXY(this.x, this.y);

        // then remove it
        WebSplat.remSprite(this);
        var spthis = this;
        setTimeout(function() {
            spthis.el.style.display = "none";
        }, 5000);
    }

    // by default, stick a single skulldog in the game
    WebSplat.addHandler("postload", function() {
        var minY = 240;
        var maxY = WebSplat.conf.maxY-minY;
        // create some skulldogs!
        var sdc = Math.ceil((WebSplat.conf.maxX*maxY)/(640*960));
        for (var i = 0; i < sdc; i++) {
            var b = new Skulldog();
            b.setXY(Math.random()*WebSplat.conf.maxX, Math.random()*maxY+minY);
            b.startingPosition();
            WebSplat.addSprite(b);
        }
    });

    // collisions with baddies
    WebSplat.addHandler("oncollide", function(player, el, pj, xs, ys) {
        if (!("wpSprite" in el)) return;
        var sprite = el.wpSprite;
        if (!sprite.isBaddy) return;
        if (player.dead) return;

        // OK, this is a player-baddy collision!
        if (ys > 0) {
            // not only that, it's a stomp!
            player.doDamage(sprite, 1);
            player.forceyvel = -10;
            sprite.takeDamage(player, 1);
        } else {
            // muahahahaha, KILL, KILL!!!
            if (player.takeDamage(sprite, 1)) {
                sprite.xacc = false;
                sprite.munching = true;
                player.deathSpeed = 2;
            } else {
                // get out of the way
                if (sprite.x < player.x) {
                    sprite.x = player.x - sprite.w - 1;
                } else {
                    sprite.x = player.x + player.w + 1;
                }
                sprite.startingPosition();
            }
            player.thru[sprite.el.wpID] = true;
        }
    });
})();
          /*
 * Copyright (C) 2010 Gregor Richards
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function() {
    var faviconConf = {
        moveSpeed: 1.5
    }

    var faviconImageSets = {
        s: {
            frames: 16,
            frameRate: 6,
            frameAliases: [
                0, 1, 2, 3, 4, 5, 6, 7,
                0, 7, 6, 5, 4, 3, 2, 1
            ],
            iconOffset: [ // these are the offsets in the /left/ image
                [5, 5], // 0
                [5, 4],
                [3, 5],
                [2, 5],
                [3, 5],
                [5, 4], // 5
                [6, 4],
                [6, 5]
            ],
            width: 25,
            height: 32
        }
    }

    WebSplat.Sprite.prototype.isBaddy = false;

    function Favicon() {
        // first, look for a link tag
        WebSplat.Sprite.call(this, "favicongoomba.php?domain=" + escape(document.domain) + "&frame=", faviconImageSets, true, true);
        this.munching = false;
        this.xacc = 0;
        this.yacc = 0;
        this.isBaddy = true;
        this.updateImage();
    }
    Favicon.prototype = new WebSplat.SpriteChild();

    // every tick, change the acceleration inexplicably
    Favicon.prototype.tick = function() {
        if (!this.onScreen()) return;

        // do a normal round
        WebSplat.Sprite.prototype.tick.call(this);

        // only do anything if we're on a platform
        if (!this.munching && this.on !== null) {
            // if we bumped into something left or there is nothing to the left ...
            if (this.leftOf !== null) {
                this.xacc = 1;
                this.xaccmax = faviconConf.moveSpeed;
            } else if (this.rightOf !== null) {
                this.xacc = -1;
                this.xaccmax = -faviconConf.moveSpeed;
            } else if (this.xacc === false || this.xacc == 0) {
                this.xacc = 1;
                this.xaccmax = faviconConf.moveSpeed;
            }
        } else {
            this.xacc = false;
        }

        if (this.y<0) {
            // don't let them go above the screen
            this.setXY(this.x, 0);
        }
    }

    // take damage
    Favicon.prototype.takeDamage = function(from, pts) {
        WebSplat.remSprite(this);
        this.el.style.display = "none";
    }

    // by default, stick a single favicon in the game
    WebSplat.addHandler("postload", function() {
        var minY = 240;
        var maxY = WebSplat.conf.maxY-minY;
        // create some favicons!
        var sdc = Math.ceil((WebSplat.conf.maxX*maxY)/(640*960));
        for (var i = 0; i < sdc; i++) {
            var b = new Favicon();
            b.setXY(Math.random()*WebSplat.conf.maxX, Math.random()*maxY+minY);
            b.startingPosition();
            WebSplat.addSprite(b);
        }
    });
})();
          /*
 * Copyright (C) 2010 Gregor Richards
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function() {
    // need a style for the box
    var statStyle = document.createElement("style");
    var cssOK = true;
    try {
        statStyle.innerHTML = ".statBox {\n" +
            "position: fixed;\n" +
            "background: rgba(0,0,0,0.65) !important;\n" +
            "}\n" +
            ".statTable {\n" +
            "background: transparent !important;\n" +
            "}\n" +
            ".statTd {\n" +
            "color: white !important;\n" +
            "}\n";
    } catch (ex) {
        cssOK = false;
    }
    document.getElementsByTagName("head")[0].appendChild(statStyle);

    WebSplat.Player.prototype.onChangeHP = function() {
        this.stats.HP = this.hp + "/" + this.maxHP;
        this.updateStats();
    }

    // update the stats element
    WebSplat.Player.prototype.updateStats = function() {
        retry: while (true) {
            // first try to just update each stat
            for (var i = 0; i < this.statNames.length; i++) {
                var st = this.statNames[i];
                if (!(st in this.statTable)) {
                    this.generateStatTable();
                    continue retry;
                }

                // OK, it exists, update it
                this.statTable[st].innerHTML = this.stats[st];
            }

            break;
        }
    }

    // generate the stats table
    WebSplat.Player.prototype.generateStatTable = function() {
        if (this.statTableEl !== null) {
            // get rid of this one first
            this.statEl.removeChild(this.statTableEl);
        }
        this.statTable = {};

        // now build a new one
        var table = this.statTableEl = document.createElement("table");
        $(table).addClass("statTable");
        var tbody = document.createElement("tbody");
        table.border = "0";

        // create all the stats
        for (var i = 0; i < this.statNames.length; i++) {
            var st = this.statNames[i];
            var row = document.createElement("tr");

            var td = document.createElement("td");
            $(td).addClass("statTd");
            if (!cssOK) td.style.color = "white";
            if (st in this.statDisplay) {
                td.innerHTML = this.statDisplay[st];
            } else {
                td.innerHTML = "<emph>" + st + ":</emph>";
            }
            row.appendChild(td);

            this.statTable[st] = td = document.createElement("td");
            $(td).addClass("statTd");
            if (!cssOK) td.style.color = "white";
            td.innerHTML = this.stats[st];
            row.appendChild(td);

            tbody.appendChild(row);
        }

        // then put it in the box
        table.appendChild(tbody);
        this.statEl.appendChild(table);
    }

    WebSplat.addHandler("postload", function(player) {
        player.statNames = [];
        player.stats = {};
        player.statTableEl = null;
        player.statTable = {};
        player.statDisplay = {};
        player.statText = "";

        // only show HP if it's interesting
        if (player.maxHP > 1) {
            player.statNames.push("HP");
            player.stats.HP = player.hp;
        }

        // put the stats element in the upper-left corner
        player.statEl = document.createElement("span");
        $(player.statEl).addClass("statBox");

        if (!cssOK) {
            // probably IE (yukk), make it scroll through stupidity
            player.statEl.style.position = "absolute";
            player.statEl.style.backgroundColor = "black";
            player.statEl.style.color = "white";
            $(window).scroll(function() {
                $(player.statEl).css("top", $(window).scrollTop() + "px");
            });
        }
        player.statEl.style.right = "0px";
        player.statEl.style.top = "0px";
        player.statEl.style.paddingRight = "15px";
        player.statEl.style.zIndex = "1000000";
        player.statEl.style.borderLeft = "1px solid black";
        player.statEl.style.borderBottom = "1px solid black";
        player.statEl.wpIgnore = true;
        player.updateStats();
        document.body.appendChild(player.statEl);
    });
})();
          /*
 * Copyright (C) 2010 Gregor Richards
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function() {
    // images are "coins" (mainly just to avoid name-conflicts with actual images)
    WebSplat.coins = 0;

    // we have a game timer, just for giggles
    var gameTimer = null;
    var gameTime = 0;
    var pauseTimer = null;
    var pauseTime = 0;
    var won = false;

    // we need our borders to be important
    var coinStyle = document.createElement("style");
    try {
        coinStyle.innerHTML = ".wpCoinBorder { float: left;border: 5px solid red; border-image-source: linear-gradient(60deg, rgba(255,248,0,1) 0%, rgba(255,188,0,1) 100%); border-image-slice: 1; };";
    } catch (ex) {}
    document.getElementsByTagName("head")[0].appendChild(coinStyle);

    WebSplat.addHandler("ontick", function() {
        if (!won && !WebSplat.player.dead) {
            var time = Math.floor((new Date().getTime() - gameTimer - pauseTime) / 500);
            if (gameTime != time) {
                gameTime = time;
                WebSplat.player.stats["gameTime"] = time;
                WebSplat.player.updateStats();
            }
        }
    });

    WebSplat.addHandler("onpause", function() {
        pauseTimer = new Date().getTime();
    });

    WebSplat.addHandler("onresume", function() {
        pauseTime += new Date().getTime() - pauseTimer;
    });

    WebSplat.addHandler("onplatform", function(el) {
        // if this is a small image, make it a coin
        if (el.tagName.toUpperCase() == "IMG" && el.width >= 5 && el.height >= 5) {
            var pos = $(el).offset();

            // otherwise, make it a coin
            var c = el.wpCoin = document.createElement("div");

            $(c).addClass("wpCoinBorder");
            c.style.position = "absolute";
            c.style.left = pos.left-2 + "px";
            c.style.top = pos.top-2 + "px";
            c.style.width = $(el).innerWidth() + "px";
            c.style.height = $(el).innerHeight() + "px";
            try {
                c.style.zIndex = parseInt($(el).css("zIndex")) + 1;
            } catch (ex) {}
            c.wpIgnore = true;
            document.body.appendChild(c);

            el.style.backgrondColor = "gold";
            WebSplat.coins++;
        }
    });

    WebSplat.addHandler("postload", function(player) {
        gameTimer = new Date().getTime();

        // set up the collected/remaining stats
        player.statNames.push("coinsCollected");
        player.statNames.push("coinsLeft");
        player.statNames.push("gameTime");

        player.stats["coinsCollected"] = 0;
        player.stats["coinsLeft"] = WebSplat.coins;
        player.stats["gameTime"] = 0;

        player.statDisplay["coinsCollected"] = "<emph>Images collected:</emph>";
        player.statDisplay["coinsLeft"] = "<emph>Images remaining:</emph>";
        player.statDisplay["gameTime"] = "<emph>Time:</emph>";

        player.updateStats();
    });

    WebSplat.addHandler("oncollide", function(player, el, xs, ys) {
        if ("wpCoin" in el) {
            // remove the coin
            el.wpCoin.style.visibility = "hidden";
            try {
                delete el.wpCoin;
            } catch (ex) {}
            el.wpAllowClip = true;
            el.style.visibility = "hidden";

            // then mark the stats
            WebSplat.coins--;
            player.stats["coinsCollected"]++;
            player.stats["coinsLeft"]--;
            player.updateStats();

            // win?
            if (WebSplat.coins <= 0) {
                // hooray!
                var winnerImg = document.createElement("img");
                winnerImg.src = WebSplat.conf.imageBase + "winner" +
                    ((Math.random()>0.5)?"2":"") +
                    ".png";
                winnerImg.style.position = "fixed";
                winnerImg.style.left = "0px";
                winnerImg.style.top = "0px";
                document.body.appendChild(winnerImg);

                $(winnerImg).click(function() {
                    document.body.removeChild(winnerImg);
                });

                won = true;
            }

            return false;
        }
    });
})();
          WebSplat.go();
        }
        selector.appendChild(but);
        if (i == 0) but.focus();
    }
})();
