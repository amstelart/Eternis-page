
; /* Start:"a:4:{s:4:"full";s:59:"/bitrix/templates/eternis/js/vendors/badIe.js?1568018955862";s:6:"source";s:45:"/bitrix/templates/eternis/js/vendors/badIe.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * Created by Abaddon on 17.05.2016.
 */
"use strict";
(function (w, d) {
    var ieCheck = function () {
        var ie = ( !!window.ActiveXObject && +( /msie\s(\d+)/i.exec(navigator.userAgent)[1] ) ) || NaN;
        var bad = false;
        if (ie === 6) {
            bad = true;
        } else if (ie === 7) {
            bad = true;
        } else if (ie === 8) {
            bad = true;
        } else if (ie === 9) {
            bad = true;
        }

        if (bad) {
            var body = d.getElementsByTagName("body");
            body[0].innerHTML = '<div id="badIE"><h1>У вас установлена устаревшая версия браузера!<br /> Для корректного просмотра сайта необходимо обновить браузер!</h1></div>';
        }
    };

    ieCheck();
}(window, document));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:73:"/bitrix/templates/eternis/js/vendors/jquery/jquery.min.js?156801895586659";s:6:"source";s:57:"/bitrix/templates/eternis/js/vendors/jquery/jquery.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:57:"/bitrix/templates/eternis/js/popup_form.js?15774461592132";s:6:"source";s:42:"/bitrix/templates/eternis/js/popup_form.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/

//document.addEventListener('DOMContentLoaded', function() {
// var pop = document.getElementsByClassName('popups');
// console.log('33');
// $('.fancybox-inner').css('height','auto');
//if (pop != null) {
// 		pop.onclick = function() {
//			console.log("1");
// 			//if (form_pop != null  && inp != null && name != null) {
// 				console.log("1");
// 				var inp = document.getElementById('t_name');
// 				var form_pop = document.getElementById('popup_form_zakaz');
// 				var name = this.getAttribute('data-name');
// 				form_pop.style.display = 'block';
// 				$('.tovar_form').text(name);
// 			    inp.setAttribute('value', name);
// 			    $('.fancybox-wrap').css('opacity','1');
// 				}
 //				}
//}else{console.log('11');}
$(function() {
  $(".popups").click(function() {
  	
  				//var inp = $('#t_name');
				//var form_pop = $('#popup_form_zakaz');
				var name = $(this).attr('data-name');
				$('#popup_form_zakaz').css('display','block')
				$('.tovar_form').text(name);
			    $('#t_name').attr('value', name);
			    $('.fancybox-wrap').css('opacity','1');
			console.log(name);
  });
    $(".popups_zvonok").click(function() {
  	
  				//var inp = $('#t_name');
				//var form_pop = $('#popup_form_zakaz');
				//var name = $(this).attr('data-name');
				$('#popup_form_zvonok').css('display','block');
				$('.tovar_form').text("");
				//$('.tovar_form').text(name);
			    //$('#t_name').attr('value', name);
			    $('.fancybox-wrap').css('opacity','1');
			//console.log(name);
  });
    $(".js-fancy-popup").click(function () {
    	$("#callPopup").css('display','block');
    	$('.fancybox-wrap').css('opacity','1');
    });
	$(".transport-feedback-fancy-popup").click(function () {
		$("#transportFeedBackForm").css('display','block');
		$('.fancybox-wrap').css('opacity','1');
	});
	$(".consultServ-fancy-popup").click(function () {
		$("#consultServ").css('display','block');
		$('.fancybox-wrap').css('opacity','1');
	});
	$(".main-page-feedback-fancy-popup").click(function () {
		$("#mainPageFeedBackForm").css('display','block');
		$('.fancybox-wrap').css('opacity','1');
	});
});
//	}, false);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:68:"/bitrix/templates/eternis/js/jquery.fancybox.pack.js?156801895523216";s:6:"source";s:52:"/bitrix/templates/eternis/js/jquery.fancybox.pack.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! fancyBox v2.1.7 fancyapps.com | fancyapps.com/fancybox/#license */
(function(t,J,f,x){var L=f("html"),q=f(t),p=f(J),b=f.fancybox=function(){b.open.apply(this,arguments)},K=navigator.userAgent.match(/msie/i),D=null,u=J.createTouch!==x,v=function(a){return a&&a.hasOwnProperty&&a instanceof f},r=function(a){return a&&"string"===f.type(a)},G=function(a){return r(a)&&0<a.indexOf("%")},m=function(a,c){var d=parseInt(a,10)||0;c&&G(a)&&(d*=b.getViewport()[c]/100);return Math.ceil(d)},y=function(a,b){return m(a,b)+"px"};f.extend(b,{version:"2.1.7",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!1,autoHeight:!0,autoWidth:!0,autoResize:!0,autoCenter:!u,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(K?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',loading:'<div id="fancybox-loading"><div></div></div>'},openEffect:"fade",
openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},
previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,c){if(a&&(f.isPlainObject(c)||(c={}),!1!==b.close(!0)))return f.isArray(a)||(a=v(a)?f(a).get():[a]),f.each(a,function(d,e){var k={},g,l,h,n,m;"object"===f.type(e)&&(e.nodeType&&(e=f(e)),v(e)?(k={href:e.data("fancybox-href")||e.attr("href"),title:f("<div/>").text(e.data("fancybox-title")||
e.attr("title")||"").html(),isDom:!0,element:e},f.metadata&&f.extend(!0,k,e.metadata())):k=e);g=c.href||k.href||(r(e)?e:null);l=c.title!==x?c.title:k.title||"";n=(h=c.content||k.content)?"html":c.type||k.type;!n&&k.isDom&&(n=e.data("fancybox-type"),n||(n=(n=e.prop("class").match(/fancybox\.(\w+)/))?n[1]:null));r(g)&&(n||(b.isImage(g)?n="image":b.isSWF(g)?n="swf":"#"===g.charAt(0)?n="inline":r(e)&&(n="html",h=e)),"ajax"===n&&(m=g.split(/\s+/,2),g=m.shift(),m=m.shift()));h||("inline"===n?g?h=f(r(g)?
g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(h=e):"html"===n?h=g:n||g||!k.isDom||(n="inline",h=e));f.extend(k,{href:g,type:n,content:h,title:l,selector:m});a[d]=k}),b.opts=f.extend(!0,{},b.defaults,c),c.keys!==x&&(b.opts.keys=c.keys?f.extend({},b.defaults.keys,c.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1===b.trigger("onCancel")||(b.hideLoading(),a&&(b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&
a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||b._afterZoomOut(a)))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(b.isOpen&&!0!==a?(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]()):(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut())))},play:function(a){var c=function(){clearTimeout(b.player.timer)},
d=function(){c();b.current&&b.player.isActive&&(b.player.timer=setTimeout(b.next,b.current.playSpeed))},e=function(){c();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};!0===a||!b.player.isActive&&!1!==a?b.current&&(b.current.loop||b.current.index<b.group.length-1)&&(b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":e,"onUpdate.player":d,"beforeLoad.player":c}),d(),b.trigger("onPlayStart")):e()},next:function(a){var c=b.current;c&&(r(a)||(a=c.direction.next),b.jumpto(c.index+
1,a,"next"))},prev:function(a){var c=b.current;c&&(r(a)||(a=c.direction.prev),b.jumpto(c.index-1,a,"prev"))},jumpto:function(a,c,d){var e=b.current;e&&(a=m(a),b.direction=c||e.direction[a>=e.index?"next":"prev"],b.router=d||"jumpto",e.loop&&(0>a&&(a=e.group.length+a%e.group.length),a%=e.group.length),e.group[a]!==x&&(b.cancel(),b._start(a)))},reposition:function(a,c){var d=b.current,e=d?d.wrap:null,k;e&&(k=b._getPosition(c),a&&"scroll"===a.type?(delete k.position,e.stop(!0,!0).animate(k,200)):(e.css(k),
d.pos=f.extend({},d.dim,k)))},update:function(a){var c=a&&a.originalEvent&&a.originalEvent.type,d=!c||"orientationchange"===c;d&&(clearTimeout(D),D=null);b.isOpen&&!D&&(D=setTimeout(function(){var e=b.current;e&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(d||"load"===c||"resize"===c&&e.autoResize)&&b._setDimension(),"scroll"===c&&e.canShrink||b.reposition(a),b.trigger("onUpdate"),D=null)},d&&!u?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,
u&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,c;b.hideLoading();a=f(b.opts.tpl.loading).click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){27===(a.which||a.keyCode)&&(a.preventDefault(),b.cancel())});b.defaults.fixed||(c=b.getViewport(),a.css({position:"absolute",top:.5*c.h+c.y,left:.5*c.w+c.x}));b.trigger("onLoading")},getViewport:function(){var a=
b.current&&b.current.locked||!1,c={x:q.scrollLeft(),y:q.scrollTop()};a&&a.length?(c.w=a[0].clientWidth,c.h=a[0].clientHeight):(c.w=u&&t.innerWidth?t.innerWidth:q.width(),c.h=u&&t.innerHeight?t.innerHeight:q.height());return c},unbindEvents:function(){b.wrap&&v(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");q.unbind(".fb")},bindEvents:function(){var a=b.current,c;a&&(q.bind("orientationchange.fb"+(u?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(c=a.keys)&&p.bind("keydown.fb",
function(d){var e=d.which||d.keyCode,k=d.target||d.srcElement;if(27===e&&b.coming)return!1;d.ctrlKey||d.altKey||d.shiftKey||d.metaKey||k&&(k.type||f(k).is("[contenteditable]"))||f.each(c,function(c,k){if(1<a.group.length&&k[e]!==x)return b[c](k[e]),d.preventDefault(),!1;if(-1<f.inArray(e,k))return b[c](),d.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(c,e,k,g){for(var d=f(c.target||null),h=!1;d.length&&!(h||d.is(".fancybox-skin")||d.is(".fancybox-wrap"));)h=
(h=d[0])&&!(h.style.overflow&&"hidden"===h.style.overflow)&&(h.clientWidth&&h.scrollWidth>h.clientWidth||h.clientHeight&&h.scrollHeight>h.clientHeight),d=f(d).parent();0!==e&&!h&&1<b.group.length&&!a.canShrink&&(0<g||0<k?b.prev(0<g?"down":"left"):(0>g||0>k)&&b.next(0>g?"up":"right"),c.preventDefault())}))},trigger:function(a,c){var d,e=c||b.coming||b.current;if(e){f.isFunction(e[a])&&(d=e[a].apply(e,Array.prototype.slice.call(arguments,1)));if(!1===d)return!1;e.helpers&&f.each(e.helpers,function(c,
d){if(d&&b.helpers[c]&&f.isFunction(b.helpers[c][a]))b.helpers[c][a](f.extend(!0,{},b.helpers[c].defaults,d),e)})}p.trigger(a)},isImage:function(a){return r(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return r(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var c={},d,e;a=m(a);d=b.group[a]||null;if(!d)return!1;c=f.extend(!0,{},b.opts,d);d=c.margin;e=c.padding;"number"===f.type(d)&&(c.margin=[d,d,d,d]);"number"===f.type(e)&&(c.padding=
[e,e,e,e]);c.modal&&f.extend(!0,c,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});c.autoSize&&(c.autoWidth=c.autoHeight=!0);"auto"===c.width&&(c.autoWidth=!0);"auto"===c.height&&(c.autoHeight=!0);c.group=b.group;c.index=a;b.coming=c;if(!1===b.trigger("beforeLoad"))b.coming=null;else{e=c.type;d=c.href;if(!e)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===
e||"swf"===e)c.autoHeight=c.autoWidth=!1,c.scrolling="visible";"image"===e&&(c.aspectRatio=!0);"iframe"===e&&u&&(c.scrolling="scroll");c.wrap=f(c.tpl.wrap).addClass("fancybox-"+(u?"mobile":"desktop")+" fancybox-type-"+e+" fancybox-tmp "+c.wrapCSS).appendTo(c.parent||"body");f.extend(c,{skin:f(".fancybox-skin",c.wrap),outer:f(".fancybox-outer",c.wrap),inner:f(".fancybox-inner",c.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){c.skin.css("padding"+b,y(c.padding[a]))});b.trigger("onReady");
if("inline"===e||"html"===e){if(!c.content||!c.content.length)return b._error("content")}else if(!d)return b._error("href");"image"===e?b._loadImage():"ajax"===e?b._loadAjax():"iframe"===e?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=
this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,d){b.coming&&"abort"!==d?b._error("ajax",a):b.hideLoading()},success:function(c,d){"success"===d&&(a.content=c,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,
c=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",u?"auto":a.iframe.scrolling).attr("src",a.href);f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(d){}});a.iframe.preload&&(b.showLoading(),c.one("load",function(){f(this).data("ready",1);u||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=c.appendTo(a.inner);a.iframe.preload||
b._afterLoad()},_preloadImages:function(){var a=b.group,c=b.current,d=a.length,e=c.preload?Math.min(c.preload,d-1):0,f,g;for(g=1;g<=e;g+=1)f=a[(c.index+g)%d],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,c=b.current,d,e,k,g,l;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,c))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{c&&(b.trigger("beforeChange",c),c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
b.unbindEvents();d=a.content;e=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:c});g=a.href;switch(e){case "inline":case "ajax":case "html":a.selector?d=f("<div>").html(d).find(a.selector):v(d)&&(d.data("fancybox-placeholder")||d.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(d).hide()),d=d.show().detach(),a.wrap.bind("onReset",function(){f(this).find(d).length&&d.hide().replaceAll(d.data("fancybox-placeholder")).data("fancybox-placeholder",
!1)}));break;case "image":d=a.tpl.image.replace(/\{href\}/g,g);break;case "swf":d='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',l="",f.each(a.swf,function(a,b){d+='<param name="'+a+'" value="'+b+'"></param>';l+=" "+a+'="'+b+'"'}),d+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+l+"></embed></object>"}v(d)&&d.parent().is(a.inner)||a.inner.append(d);b.trigger("beforeShow");
a.inner.css("overflow","yes"===k?"scroll":"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(!b.isOpened)f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();else if(c.prevMethod)b.transitions[c.prevMethod]();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),c=0,d,e=b.wrap,k=b.skin,g=b.inner,l=b.current;d=l.width;var h=l.height,n=l.minWidth,w=l.minHeight,p=l.maxWidth,
q=l.maxHeight,u=l.scrolling,r=l.scrollOutside?l.scrollbarWidth:0,z=l.margin,A=m(z[1]+z[3]),t=m(z[0]+z[2]),x,B,v,E,C,H,D,F,I;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");z=m(k.outerWidth(!0)-k.width());x=m(k.outerHeight(!0)-k.height());B=A+z;v=t+x;E=G(d)?(a.w-B)*m(d)/100:d;C=G(h)?(a.h-v)*m(h)/100:h;if("iframe"===l.type){if(I=l.content,l.autoHeight&&I&&1===I.data("ready"))try{I[0].contentWindow.document.location&&(g.width(E).height(9999),H=I.contents().find("body"),r&&H.css("overflow-x",
"hidden"),C=H.outerHeight(!0))}catch(M){}}else if(l.autoWidth||l.autoHeight)g.addClass("fancybox-tmp"),l.autoWidth||g.width(E),l.autoHeight||g.height(C),l.autoWidth&&(E=g.width()),l.autoHeight&&(C=g.height()),g.removeClass("fancybox-tmp");d=m(E);h=m(C);F=E/C;n=m(G(n)?m(n,"w")-B:n);p=m(G(p)?m(p,"w")-B:p);w=m(G(w)?m(w,"h")-v:w);q=m(G(q)?m(q,"h")-v:q);H=p;D=q;l.fitToView&&(p=Math.min(a.w-B,p),q=Math.min(a.h-v,q));B=a.w-A;t=a.h-t;l.aspectRatio?(d>p&&(d=p,h=m(d/F)),h>q&&(h=q,d=m(h*F)),d<n&&(d=n,h=m(d/
F)),h<w&&(h=w,d=m(h*F))):(d=Math.max(n,Math.min(d,p)),l.autoHeight&&"iframe"!==l.type&&(g.width(d),h=g.height()),h=Math.max(w,Math.min(h,q)));if(l.fitToView)if(g.width(d).height(h),e.width(d+z),a=e.width(),A=e.height(),l.aspectRatio)for(;(a>B||A>t)&&d>n&&h>w&&!(19<c++);)h=Math.max(w,Math.min(q,h-10)),d=m(h*F),d<n&&(d=n,h=m(d/F)),d>p&&(d=p,h=m(d/F)),g.width(d).height(h),e.width(d+z),a=e.width(),A=e.height();else d=Math.max(n,Math.min(d,d-(a-B))),h=Math.max(w,Math.min(h,h-(A-t)));r&&"auto"===u&&h<C&&
d+z+r<B&&(d+=r);g.width(d).height(h);e.width(d+z);a=e.width();A=e.height();c=(a>B||A>t)&&d>n&&h>w;d=l.aspectRatio?d<H&&h<D&&d<E&&h<C:(d<H||h<D)&&(d<E||h<C);f.extend(l,{dim:{width:y(a),height:y(A)},origWidth:E,origHeight:C,canShrink:c,canExpand:d,wPadding:z,hPadding:x,wrapSpace:A-k.outerHeight(!0),skinSpace:k.height()-h});!I&&l.autoHeight&&h>w&&h<q&&!d&&g.height("auto")},_getPosition:function(a){var c=b.current,d=b.getViewport(),e=c.margin,f=b.wrap.width()+e[1]+e[3],g=b.wrap.height()+e[0]+e[2],e={position:"absolute",
top:e[0],left:e[3]};c.autoCenter&&c.fixed&&!a&&g<=d.h&&f<=d.w?e.position="fixed":c.locked||(e.top+=d.y,e.left+=d.x);e.top=y(Math.max(e.top,e.top+(d.h-g)*c.topRatio));e.left=y(Math.max(e.left,e.left+(d.w-f)*c.leftRatio));return e},_afterZoomIn:function(){var a=b.current;a&&((b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened").hide().show(0),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(c){f(c.target).is("a")||
f(c.target).parent().is("a")||(c.preventDefault(),b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),a.loop||a.index!==a.group.length-1)?b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=
!1,b.play(!0)):b.play(!1))},_afterZoomOut:function(a){a=a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,c=a.element,d=a.orig,e={},f=50,g=50,l=a.hPadding,h=a.wPadding,n=b.getViewport();!d&&a.isDom&&c.is(":visible")&&(d=c.find("img:first"),d.length||(d=c));v(d)?
(e=d.offset(),d.is("img")&&(f=d.outerWidth(),g=d.outerHeight())):(e.top=n.y+(n.h-g)*a.topRatio,e.left=n.x+(n.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)e.top-=n.y,e.left-=n.x;return e={top:y(e.top-l*a.topRatio),left:y(e.left-h*a.leftRatio),width:y(f+h),height:y(g+l)}},step:function(a,c){var d,e,f=c.prop;e=b.current;var g=e.wrapSpace,l=e.skinSpace;if("width"===f||"height"===f)d=c.end===c.start?1:(a-c.start)/(c.end-c.start),b.isClosing&&(d=1-d),e="width"===f?e.wPadding:e.hPadding,
e=a-e,b.skin[f](m("width"===f?e:e-g*d)),b.inner[f](m("width"===f?e:e-g*d-l*d))},zoomIn:function(){var a=b.current,c=a.pos,d=a.openEffect,e="elastic"===d,k=f.extend({opacity:1},c);delete k.position;e?(c=this.getOrigPosition(),a.openOpacity&&(c.opacity=.1)):"fade"===d&&(c.opacity=.1);b.wrap.css(c).animate(k,{duration:"none"===d?0:a.openSpeed,easing:a.openEasing,step:e?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,c=a.closeEffect,d="elastic"===c,e={opacity:.1};d&&(e=this.getOrigPosition(),
a.closeOpacity&&(e.opacity=.1));b.wrap.animate(e,{duration:"none"===c?0:a.closeSpeed,easing:a.closeEasing,step:d?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,c=a.nextEffect,d=a.pos,e={opacity:1},f=b.direction,g;d.opacity=.1;"elastic"===c&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(d[g]=y(m(d[g])-200),e[g]="+=200px"):(d[g]=y(m(d[g])+200),e[g]="-=200px"));"none"===c?b._afterZoomIn():b.wrap.css(d).animate(e,{duration:a.nextSpeed,easing:a.nextEasing,
complete:b._afterZoomIn})},changeOut:function(){var a=b.previous,c=a.prevEffect,d={opacity:.1},e=b.direction;"elastic"===c&&(d["down"===e||"up"===e?"top":"left"]=("up"===e||"left"===e?"-":"+")+"=200px");a.wrap.animate(d,{duration:"none"===c?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!u,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){var c;a=f.extend({},
this.defaults,a);this.overlay&&this.close();c=b.coming?b.coming.parent:a.parent;this.overlay=f('<div class="fancybox-overlay"></div>').appendTo(c&&c.length?c:"body");this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var c=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(q.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&
this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?b.close():c.close(),!1});this.overlay.css(a.css).show()},close:function(){q.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),this.el.removeClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");
K?(b=Math.max(J.documentElement.offsetWidth,J.body.offsetWidth),p.width()>b&&(a=p.width())):p.width()>q.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var d=this.overlay;f(".fancybox-overlay").stop(!0,!0);d||this.create(a);a.locked&&this.fixed&&b.fixed&&(b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){b.locked&&!this.el.hasClass("fancybox-lock")&&(!1!==this.fixPosition&&f("*:not(object)").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin"),this.scrollV=q.scrollTop(),this.scrollH=q.scrollLeft(),this.el.addClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",
position:"bottom"},beforeShow:function(a){var c=b.current,d=c.title,e=a.type;f.isFunction(d)&&(d=d.call(c.element,c));if(r(d)&&""!==f.trim(d)){c=f('<div class="fancybox-title fancybox-title-'+e+'-wrap">'+d+"</div>");switch(e){case "inside":e=b.skin;break;case "outside":e=b.wrap;break;case "over":e=b.inner;break;default:e=b.skin,c.appendTo("body"),K&&c.width(c.width()),c.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(m(c.css("margin-bottom")))}c["top"===a.position?"prependTo":
"appendTo"](e)}}};f.fn.fancybox=function(a){var c,d=f(this),e=this.selector||"",k=function(g){var l=f(this).blur(),h=c,k,m;g.ctrlKey||g.altKey||g.shiftKey||g.metaKey||l.is(".fancybox-wrap")||(k=a.groupAttr||"data-fancybox-group",m=l.attr(k),m||(k="rel",m=l.get(0)[k]),m&&""!==m&&"nofollow"!==m&&(l=e.length?f(e):d,l=l.filter("["+k+'="'+m+'"]'),h=l.index(this)),a.index=h,!1!==b.open(l,a)&&g.preventDefault())};a=a||{};c=a.index||0;e&&!1!==a.live?p.undelegate(e,"click.fb-start").delegate(e+":not('.fancybox-item, .fancybox-nav')",
"click.fb-start",k):d.unbind("click.fb-start").bind("click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,c;f.scrollbarWidth===x&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});f.support.fixedPosition===x&&(f.support.fixedPosition=function(){var a=f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
b=20===a[0].offsetTop||15===a[0].offsetTop;a.remove();return b}());f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(t).width();L.addClass("fancybox-lock-test");c=f(t).width();L.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(c-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:64:"/bitrix/templates/eternis/js/jquery.easing.1.3.js?15680189558097";s:6:"source";s:49:"/bitrix/templates/eternis/js/jquery.easing.1.3.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/* End */
;
; /* Start:"a:4:{s:4:"full";s:82:"/bitrix/templates/eternis/js/vendors/selectric/jquery.selectric.js?156801895536422";s:6:"source";s:66:"/bitrix/templates/eternis/js/vendors/selectric/jquery.selectric.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 *         ,/
 *       ,'/
 *     ,' /
 *   ,'  /_____,
 * .'____    ,'
 *      /  ,'
 *     / ,'
 *    /,'
 *   /'
 *
 * Selectric ϟ v1.13.0 (Aug 22 2017) - http://lcdsantos.github.io/jQuery-Selectric/
 *
 * Copyright (c) 2017 Leonardo Santos; MIT License
 *
 */

(function(factory) {
  /* global define */
  /* istanbul ignore next */
  if ( typeof define === 'function' && define.amd ) {
    define(['jquery'], factory);
  } else if ( typeof module === 'object' && module.exports ) {
    // Node/CommonJS
    module.exports = function( root, jQuery ) {
      if ( jQuery === undefined ) {
        if ( typeof window !== 'undefined' ) {
          jQuery = require('jquery');
        } else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {
  'use strict';

  var $doc = $(document);
  var $win = $(window);

  var pluginName = 'selectric';
  var classList = 'Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Below Scroll Group GroupLabel';
  var eventNamespaceSuffix = '.sl';

  var chars = ['a', 'e', 'i', 'o', 'u', 'n', 'c', 'y'];
  var diacritics = [
    /[\xE0-\xE5]/g, // a
    /[\xE8-\xEB]/g, // e
    /[\xEC-\xEF]/g, // i
    /[\xF2-\xF6]/g, // o
    /[\xF9-\xFC]/g, // u
    /[\xF1]/g,      // n
    /[\xE7]/g,      // c
    /[\xFD-\xFF]/g  // y
  ];

  /**
   * Create an instance of Selectric
   *
   * @constructor
   * @param {Node} element - The &lt;select&gt; element
   * @param {object}  opts - Options
   */
  var Selectric = function(element, opts) {
    var _this = this;

    _this.element = element;
    _this.$element = $(element);

    _this.state = {
      multiple       : !!_this.$element.attr('multiple'),
      enabled        : false,
      opened         : false,
      currValue      : -1,
      selectedIdx    : -1,
      highlightedIdx : -1
    };

    _this.eventTriggers = {
      open    : _this.open,
      close   : _this.close,
      destroy : _this.destroy,
      refresh : _this.refresh,
      init    : _this.init
    };

    _this.init(opts);
  };

  Selectric.prototype = {
    utils: {
      /**
       * Detect mobile browser
       *
       * @return {boolean}
       */
      isMobile: function() {
        return /android|ip(hone|od|ad)/i.test(navigator.userAgent);
      },

      /**
       * Escape especial characters in string (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
       *
       * @param  {string} str - The string to be escaped
       * @return {string}       The string with the special characters escaped
       */
      escapeRegExp: function(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
      },

      /**
       * Replace diacritics
       *
       * @param  {string} str - The string to replace the diacritics
       * @return {string}       The string with diacritics replaced with ascii characters
       */
      replaceDiacritics: function(str) {
        var k = diacritics.length;

        while (k--) {
          str = str.toLowerCase().replace(diacritics[k], chars[k]);
        }

        return str;
      },

      /**
       * Format string
       * https://gist.github.com/atesgoral/984375
       *
       * @param  {string} f - String to be formated
       * @return {string}     String formated
       */
      format: function(f) {
        var a = arguments; // store outer arguments
        return ('' + f) // force format specifier to String
          .replace( // replace tokens in format specifier
            /\{(?:(\d+)|(\w+))\}/g, // match {token} references
            function(
              s, // the matched string (ignored)
              i, // an argument index
              p // a property name
            ) {
              return p && a[1] // if property name and first argument exist
                ? a[1][p] // return property from first argument
                : a[i]; // assume argument index and return i-th argument
            });
      },

      /**
       * Get the next enabled item in the options list.
       *
       * @param  {object} selectItems - The options object.
       * @param  {number}    selected - Index of the currently selected option.
       * @return {object}               The next enabled item.
       */
      nextEnabledItem: function(selectItems, selected) {
        while ( selectItems[ selected = (selected + 1) % selectItems.length ].disabled ) {
          // empty
        }
        return selected;
      },

      /**
       * Get the previous enabled item in the options list.
       *
       * @param  {object} selectItems - The options object.
       * @param  {number}    selected - Index of the currently selected option.
       * @return {object}               The previous enabled item.
       */
      previousEnabledItem: function(selectItems, selected) {
        while ( selectItems[ selected = (selected > 0 ? selected : selectItems.length) - 1 ].disabled ) {
          // empty
        }
        return selected;
      },

      /**
       * Transform camelCase string to dash-case.
       *
       * @param  {string} str - The camelCased string.
       * @return {string}       The string transformed to dash-case.
       */
      toDash: function(str) {
        return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
      },

      /**
       * Calls the events registered with function name.
       *
       * @param {string}    fn - The name of the function.
       * @param {number} scope - Scope that should be set on the function.
       */
      triggerCallback: function(fn, scope) {
        var elm = scope.element;
        var func = scope.options['on' + fn];
        var args = [elm].concat([].slice.call(arguments).slice(1));

        if ( $.isFunction(func) ) {
          func.apply(elm, args);
        }

        $(elm).trigger(pluginName + '-' + this.toDash(fn), args);
      },

      /**
       * Transform array list to concatenated string and remove empty values
       * @param  {array} arr - Class list
       * @return {string}      Concatenated string
       */
      arrayToClassname: function(arr) {
        var newArr = $.grep(arr, function(item) {
          return !!item;
        });

        return $.trim(newArr.join(' '));
      }
    },

    /** Initializes */
    init: function(opts) {
      var _this = this;

      // Set options
      _this.options = $.extend(true, {}, $.fn[pluginName].defaults, _this.options, opts);

      _this.utils.triggerCallback('BeforeInit', _this);

      // Preserve data
      _this.destroy(true);

      // Disable on mobile browsers
      if ( _this.options.disableOnMobile && _this.utils.isMobile() ) {
        _this.disableOnMobile = true;
        return;
      }

      // Get classes
      _this.classes = _this.getClassNames();

      // Create elements
      var input              = $('<input/>', { 'class': _this.classes.input, 'readonly': _this.utils.isMobile() });
      var items              = $('<div/>',   { 'class': _this.classes.items, 'tabindex': -1 });
      var itemsScroll        = $('<div/>',   { 'class': _this.classes.scroll });
      var wrapper            = $('<div/>',   { 'class': _this.classes.prefix, 'html': _this.options.arrowButtonMarkup });
      var label              = $('<span/>',  { 'class': 'label' });
      var outerWrapper       = _this.$element.wrap('<div/>').parent().append(wrapper.prepend(label), items, input);
      var hideSelectWrapper  = $('<div/>',   { 'class': _this.classes.hideselect });

      _this.elements = {
        input        : input,
        items        : items,
        itemsScroll  : itemsScroll,
        wrapper      : wrapper,
        label        : label,
        outerWrapper : outerWrapper
      };

      if ( _this.options.nativeOnMobile && _this.utils.isMobile() ) {
        _this.elements.input = undefined;
        hideSelectWrapper.addClass(_this.classes.prefix + '-is-native');

        _this.$element.on('change', function() {
          _this.refresh();
        });
      }

      _this.$element
        .on(_this.eventTriggers)
        .wrap(hideSelectWrapper);

      _this.originalTabindex = _this.$element.prop('tabindex');
      _this.$element.prop('tabindex', -1);

      _this.populate();
      _this.activate();

      _this.utils.triggerCallback('Init', _this);
    },

    /** Activates the plugin */
    activate: function() {
      var _this = this;
      var hiddenChildren = _this.elements.items.closest(':visible').children(':hidden').addClass(_this.classes.tempshow);
      var originalWidth = _this.$element.width();

      hiddenChildren.removeClass(_this.classes.tempshow);

      _this.utils.triggerCallback('BeforeActivate', _this);

      _this.elements.outerWrapper.prop('class',
        _this.utils.arrayToClassname([
          _this.classes.wrapper,
          _this.$element.prop('class').replace(/\S+/g, _this.classes.prefix + '-$&'),
          _this.options.responsive ? _this.classes.responsive : ''
        ])
      );

      if ( _this.options.inheritOriginalWidth && originalWidth > 0 ) {
        _this.elements.outerWrapper.width(originalWidth);
      }

      _this.unbindEvents();

      if ( !_this.$element.prop('disabled') ) {
        _this.state.enabled = true;

        // Not disabled, so... Removing disabled class
        _this.elements.outerWrapper.removeClass(_this.classes.disabled);

        // Remove styles from items box
        // Fix incorrect height when refreshed is triggered with fewer options
        _this.$li = _this.elements.items.removeAttr('style').find('li');

        _this.bindEvents();
      } else {
        _this.elements.outerWrapper.addClass(_this.classes.disabled);

        if ( _this.elements.input ) {
          _this.elements.input.prop('disabled', true);
        }
      }

      _this.utils.triggerCallback('Activate', _this);
    },

    /**
     * Generate classNames for elements
     *
     * @return {object} Classes object
     */
    getClassNames: function() {
      var _this = this;
      var customClass = _this.options.customClass;
      var classesObj = {};

      $.each(classList.split(' '), function(i, currClass) {
        var c = customClass.prefix + currClass;
        classesObj[currClass.toLowerCase()] = customClass.camelCase ? c : _this.utils.toDash(c);
      });

      classesObj.prefix = customClass.prefix;

      return classesObj;
    },

    /** Set the label text */
    setLabel: function() {
      var _this = this;
      var labelBuilder = _this.options.labelBuilder;

      if ( _this.state.multiple ) {
        // Make sure currentValues is an array
        var currentValues = $.isArray(_this.state.currValue) ? _this.state.currValue : [_this.state.currValue];
        // I'm not happy with this, but currentValues can be an empty
        // array and we need to fallback to the default option.
        currentValues = currentValues.length === 0 ? [0] : currentValues;

        var labelMarkup = $.map(currentValues, function(value) {
          return $.grep(_this.lookupItems, function(item) {
            return item.index === value;
          })[0]; // we don't want nested arrays here
        });

        labelMarkup = $.grep(labelMarkup, function(item) {
          // Hide default (please choose) if more then one element were selected.
          // If no option value were given value is set to option text by default
          if ( labelMarkup.length > 1 || labelMarkup.length === 0 ) {
            return $.trim(item.value) !== '';
          }
          return item;
        });

        labelMarkup = $.map(labelMarkup, function(item) {
          return $.isFunction(labelBuilder)
            ? labelBuilder(item)
            : _this.utils.format(labelBuilder, item);
        });

        // Limit the amount of selected values shown in label
        if ( _this.options.multiple.maxLabelEntries ) {
          if ( labelMarkup.length >= _this.options.multiple.maxLabelEntries + 1 ) {
            labelMarkup = labelMarkup.slice(0, _this.options.multiple.maxLabelEntries);
            labelMarkup.push(
              $.isFunction(labelBuilder)
                ? labelBuilder({ text: '...' })
                : _this.utils.format(labelBuilder, { text: '...' }));
          } else {
            labelMarkup.slice(labelMarkup.length - 1);
          }
        }
        _this.elements.label.html(labelMarkup.join(_this.options.multiple.separator));

      } else {
        var currItem = _this.lookupItems[_this.state.currValue];

        _this.elements.label.html(
          $.isFunction(labelBuilder)
            ? labelBuilder(currItem)
            : _this.utils.format(labelBuilder, currItem)
        );
      }
    },

    /** Get and save the available options */
    populate: function() {
      var _this = this;
      var $options = _this.$element.children();
      var $justOptions = _this.$element.find('option');
      var $selected = $justOptions.filter(':selected');
      var selectedIndex = $justOptions.index($selected);
      var currIndex = 0;
      var emptyValue = (_this.state.multiple ? [] : 0);

      if ( $selected.length > 1 && _this.state.multiple ) {
        selectedIndex = [];
        $selected.each(function() {
          selectedIndex.push($(this).index());
        });
      }

      _this.state.currValue = (~selectedIndex ? selectedIndex : emptyValue);
      _this.state.selectedIdx = _this.state.currValue;
      _this.state.highlightedIdx = _this.state.currValue;
      _this.items = [];
      _this.lookupItems = [];

      if ( $options.length ) {
        // Build options markup
        $options.each(function(i) {
          var $elm = $(this);

          if ( $elm.is('optgroup') ) {

            var optionsGroup = {
              element       : $elm,
              label         : $elm.prop('label'),
              groupDisabled : $elm.prop('disabled'),
              items         : []
            };

            $elm.children().each(function(i) {
              var $elm = $(this);

              optionsGroup.items[i] = _this.getItemData(currIndex, $elm, optionsGroup.groupDisabled || $elm.prop('disabled'));

              _this.lookupItems[currIndex] = optionsGroup.items[i];

              currIndex++;
            });

            _this.items[i] = optionsGroup;

          } else {

            _this.items[i] = _this.getItemData(currIndex, $elm, $elm.prop('disabled'));

            _this.lookupItems[currIndex] = _this.items[i];

            currIndex++;

          }
        });

        _this.setLabel();
        _this.elements.items.append( _this.elements.itemsScroll.html( _this.getItemsMarkup(_this.items) ) );
      }
    },

    /**
     * Generate items object data
     * @param  {integer} index      - Current item index
     * @param  {node}    $elm       - Current element node
     * @param  {boolean} isDisabled - Current element disabled state
     * @return {object}               Item object
     */
    getItemData: function(index, $elm, isDisabled) {
      var _this = this;

      return {
        index     : index,
        element   : $elm,
        value     : $elm.val(),
        className : $elm.prop('class'),
        text      : $elm.html(),
        slug      : $.trim(_this.utils.replaceDiacritics($elm.html())),
        alt       : $elm.attr('data-alt'),
        selected  : $elm.prop('selected'),
        disabled  : isDisabled
      };
    },

    /**
     * Generate options markup
     *
     * @param  {object} items - Object containing all available options
     * @return {string}         HTML for the options box
     */
    getItemsMarkup: function(items) {
      var _this = this;
      var markup = '<ul>';

      if ( $.isFunction(_this.options.listBuilder) && _this.options.listBuilder ) {
        items = _this.options.listBuilder(items);
      }

      $.each(items, function(i, elm) {
        if ( elm.label !== undefined ) {

          markup += _this.utils.format('<ul class="{1}"><li class="{2}">{3}</li>',
            _this.utils.arrayToClassname([
              _this.classes.group,
              elm.groupDisabled ? 'disabled' : '',
              elm.element.prop('class')
            ]),
            _this.classes.grouplabel,
            elm.element.prop('label')
          );

          $.each(elm.items, function(i, elm) {
            markup += _this.getItemMarkup(elm.index, elm);
          });

          markup += '</ul>';

        } else {

          markup += _this.getItemMarkup(elm.index, elm);

        }
      });

      return markup + '</ul>';
    },

    /**
     * Generate every option markup
     *
     * @param  {number} index    - Index of current item
     * @param  {object} itemData - Current item
     * @return {string}            HTML for the option
     */
    getItemMarkup: function(index, itemData) {
      var _this = this;
      var itemBuilder = _this.options.optionsItemBuilder;
      // limit access to item data to provide a simple interface
      // to most relevant options.
      var filteredItemData = {
        value: itemData.value,
        text : itemData.text,
        slug : itemData.slug,
        index: itemData.index
      };

      return _this.utils.format('<li data-index="{1}" class="{2}">{3}</li>',
        index,
        _this.utils.arrayToClassname([
          itemData.className,
          index === _this.items.length - 1  ? 'last'     : '',
          itemData.disabled                 ? 'disabled' : '',
          itemData.selected                 ? 'selected' : ''
        ]),
        $.isFunction(itemBuilder)
          ? _this.utils.format(itemBuilder(itemData, this.$element, index), itemData)
          : _this.utils.format(itemBuilder, filteredItemData)
      );
    },

    /** Remove events on the elements */
    unbindEvents: function() {
      var _this = this;

      _this.elements.wrapper
        .add(_this.$element)
        .add(_this.elements.outerWrapper)
        .add(_this.elements.input)
        .off(eventNamespaceSuffix);
    },

    /** Bind events on the elements */
    bindEvents: function() {
      var _this = this;

      _this.elements.outerWrapper.on('mouseenter' + eventNamespaceSuffix + ' mouseleave' + eventNamespaceSuffix, function(e) {
        $(this).toggleClass(_this.classes.hover, e.type === 'mouseenter');

        // Delay close effect when openOnHover is true
        if ( _this.options.openOnHover ) {
          clearTimeout(_this.closeTimer);

          if ( e.type === 'mouseleave' ) {
            _this.closeTimer = setTimeout($.proxy(_this.close, _this), _this.options.hoverIntentTimeout);
          } else {
            _this.open();
          }
        }
      });

      // Toggle open/close
      _this.elements.wrapper.on('click' + eventNamespaceSuffix, function(e) {
        _this.state.opened ? _this.close() : _this.open(e);
      });

      // Translate original element focus event to dummy input.
      // Disabled on mobile devices because the default option list isn't
      // shown due the fact that hidden input gets focused
      if ( !(_this.options.nativeOnMobile && _this.utils.isMobile()) ) {
        _this.$element.on('focus' + eventNamespaceSuffix, function() {
          _this.elements.input.focus();
        });

        _this.elements.input
          .prop({ tabindex: _this.originalTabindex, disabled: false })
          .on('keydown' + eventNamespaceSuffix, $.proxy(_this.handleKeys, _this))
          .on('focusin' + eventNamespaceSuffix, function(e) {
            _this.elements.outerWrapper.addClass(_this.classes.focus);

            // Prevent the flicker when focusing out and back again in the browser window
            _this.elements.input.one('blur', function() {
              _this.elements.input.blur();
            });

            if ( _this.options.openOnFocus && !_this.state.opened ) {
              _this.open(e);
            }
          })
          .on('focusout' + eventNamespaceSuffix, function() {
            _this.elements.outerWrapper.removeClass(_this.classes.focus);
          })
          .on('input propertychange', function() {
            var val = _this.elements.input.val();
            var searchRegExp = new RegExp('^' + _this.utils.escapeRegExp(val), 'i');

            // Clear search
            clearTimeout(_this.resetStr);
            _this.resetStr = setTimeout(function() {
              _this.elements.input.val('');
            }, _this.options.keySearchTimeout);

            if ( val.length ) {
              // Search in select options
              $.each(_this.items, function(i, elm) {
                if (elm.disabled) {
                  return;
                }
                if (searchRegExp.test(elm.text) || searchRegExp.test(elm.slug)) {
                  _this.highlight(i);
                  return;
                }
                if (!elm.alt) {
                  return;
                }
                var altItems = elm.alt.split('|');
                for (var ai = 0; ai < altItems.length; ai++) {
                  if (!altItems[ai]) {
                    break;
                  }
                  if (searchRegExp.test(altItems[ai].trim())) {
                    _this.highlight(i);
                    return;
                  }
                }
              });
            }
          });
      }

      _this.$li.on({
        // Prevent <input> blur on Chrome
        mousedown: function(e) {
          e.preventDefault();
          e.stopPropagation();
        },
        click: function() {
          _this.select($(this).data('index'));

          // Chrome doesn't close options box if select is wrapped with a label
          // We need to 'return false' to avoid that
          return false;
        }
      });
    },

    /**
     * Behavior when keyboard keys is pressed
     *
     * @param {object} e - Event object
     */
    handleKeys: function(e) {
      var _this = this;
      var key = e.which;
      var keys = _this.options.keys;

      var isPrevKey = $.inArray(key, keys.previous) > -1;
      var isNextKey = $.inArray(key, keys.next) > -1;
      var isSelectKey = $.inArray(key, keys.select) > -1;
      var isOpenKey = $.inArray(key, keys.open) > -1;
      var idx = _this.state.highlightedIdx;
      var isFirstOrLastItem = (isPrevKey && idx === 0) || (isNextKey && (idx + 1) === _this.items.length);
      var goToItem = 0;

      // Enter / Space
      if ( key === 13 || key === 32 ) {
        e.preventDefault();
      }

      // If it's a directional key
      if ( isPrevKey || isNextKey ) {
        if ( !_this.options.allowWrap && isFirstOrLastItem ) {
          return;
        }

        if ( isPrevKey ) {
          goToItem = _this.utils.previousEnabledItem(_this.lookupItems, idx);
        }

        if ( isNextKey ) {
          goToItem = _this.utils.nextEnabledItem(_this.lookupItems, idx);
        }

        _this.highlight(goToItem);
      }

      // Tab / Enter / ESC
      if ( isSelectKey && _this.state.opened ) {
        _this.select(idx);

        if ( !_this.state.multiple || !_this.options.multiple.keepMenuOpen ) {
          _this.close();
        }

        return;
      }

      // Space / Enter / Left / Up / Right / Down
      if ( isOpenKey && !_this.state.opened ) {
        _this.open();
      }
    },

    /** Update the items object */
    refresh: function() {
      var _this = this;

      _this.populate();
      _this.activate();
      _this.utils.triggerCallback('Refresh', _this);
    },

    /** Set options box width/height */
    setOptionsDimensions: function() {
      var _this = this;

      // Calculate options box height
      // Set a temporary class on the hidden parent of the element
      var hiddenChildren = _this.elements.items.closest(':visible').children(':hidden').addClass(_this.classes.tempshow);
      var maxHeight = _this.options.maxHeight;
      var itemsWidth = _this.elements.items.outerWidth();
      var wrapperWidth = _this.elements.wrapper.outerWidth() - (itemsWidth - _this.elements.items.width());

      // Set the dimensions, minimum is wrapper width, expand for long items if option is true
      if ( !_this.options.expandToItemText || wrapperWidth > itemsWidth ) {
        _this.finalWidth = wrapperWidth;
      } else {
        // Make sure the scrollbar width is included
        _this.elements.items.css('overflow', 'scroll');

        // Set a really long width for _this.elements.outerWrapper
        _this.elements.outerWrapper.width(9e4);
        _this.finalWidth = _this.elements.items.width();
        // Set scroll bar to auto
        _this.elements.items.css('overflow', '');
        _this.elements.outerWrapper.width('');
      }

      _this.elements.items.width(_this.finalWidth).height() > maxHeight && _this.elements.items.height(maxHeight);

      // Remove the temporary class
      hiddenChildren.removeClass(_this.classes.tempshow);
    },

    /** Detect if the options box is inside the window */
    isInViewport: function() {
      var _this = this;

      if (_this.options.forceRenderAbove === true) {
        _this.elements.outerWrapper.addClass(_this.classes.above);
      } else if (_this.options.forceRenderBelow === true) {
        _this.elements.outerWrapper.addClass(_this.classes.below);
      } else {
        var scrollTop = $win.scrollTop();
        var winHeight = $win.height();
        var uiPosX = _this.elements.outerWrapper.offset().top;
        var uiHeight = _this.elements.outerWrapper.outerHeight();

        var fitsDown = (uiPosX + uiHeight + _this.itemsHeight) <= (scrollTop + winHeight);
        var fitsAbove = (uiPosX - _this.itemsHeight) > scrollTop;

        // If it does not fit below, only render it
        // above it fit's there.
        // It's acceptable that the user needs to
        // scroll the viewport to see the cut off UI
        var renderAbove = !fitsDown && fitsAbove;
        var renderBelow = !renderAbove;

        _this.elements.outerWrapper.toggleClass(_this.classes.above, renderAbove);
        _this.elements.outerWrapper.toggleClass(_this.classes.below, renderBelow);
      }
    },

    /**
     * Detect if currently selected option is visible and scroll the options box to show it
     *
     * @param {Number|Array} index - Index of the selected items
     */
    detectItemVisibility: function(index) {
      var _this = this;
      var $filteredLi = _this.$li.filter('[data-index]');

      if ( _this.state.multiple ) {
        // If index is an array, we can assume a multiple select and we
        // want to scroll to the uppermost selected item!
        // Math.min.apply(Math, index) returns the lowest entry in an Array.
        index = ($.isArray(index) && index.length === 0) ? 0 : index;
        index = $.isArray(index) ? Math.min.apply(Math, index) : index;
      }

      var liHeight = $filteredLi.eq(index).outerHeight();
      var liTop = $filteredLi[index].offsetTop;
      var itemsScrollTop = _this.elements.itemsScroll.scrollTop();
      var scrollT = liTop + liHeight * 2;

      _this.elements.itemsScroll.scrollTop(
        scrollT > itemsScrollTop + _this.itemsHeight ? scrollT - _this.itemsHeight :
          liTop - liHeight < itemsScrollTop ? liTop - liHeight :
            itemsScrollTop
      );
    },

    /**
     * Open the select options box
     *
     * @param {Event} e - Event
     */
    open: function(e) {
      var _this = this;

      if ( _this.options.nativeOnMobile && _this.utils.isMobile()) {
        return false;
      }

      _this.utils.triggerCallback('BeforeOpen', _this);

      if ( e ) {
        e.preventDefault();
        if (_this.options.stopPropagation) {
          e.stopPropagation();
        }
      }

      if ( _this.state.enabled ) {
        _this.setOptionsDimensions();

        // Find any other opened instances of select and close it
        $('.' + _this.classes.hideselect, '.' + _this.classes.open).children()[pluginName]('close');

        _this.state.opened = true;
        _this.itemsHeight = _this.elements.items.outerHeight();
        _this.itemsInnerHeight = _this.elements.items.height();

        // Toggle options box visibility
        _this.elements.outerWrapper.addClass(_this.classes.open);

        // Give dummy input focus
        _this.elements.input.val('');
        if ( e && e.type !== 'focusin' ) {
          _this.elements.input.focus();
        }

        // Delayed binds events on Document to make label clicks work
        setTimeout(function() {
          $doc
            .on('click' + eventNamespaceSuffix, $.proxy(_this.close, _this))
            .on('scroll' + eventNamespaceSuffix, $.proxy(_this.isInViewport, _this));
        }, 1);

        _this.isInViewport();

        // Prevent window scroll when using mouse wheel inside items box
        if ( _this.options.preventWindowScroll ) {
          /* istanbul ignore next */
          $doc.on('mousewheel' + eventNamespaceSuffix + ' DOMMouseScroll' + eventNamespaceSuffix, '.' + _this.classes.scroll, function(e) {
            var orgEvent = e.originalEvent;
            var scrollTop = $(this).scrollTop();
            var deltaY = 0;

            if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1; }
            if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;  }
            if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY; }
            if ( 'deltaY'      in orgEvent ) { deltaY = orgEvent.deltaY * -1; }

            if ( scrollTop === (this.scrollHeight - _this.itemsInnerHeight) && deltaY < 0 || scrollTop === 0 && deltaY > 0 ) {
              e.preventDefault();
            }
          });
        }

        _this.detectItemVisibility(_this.state.selectedIdx);

        _this.highlight(_this.state.multiple ? -1 : _this.state.selectedIdx);

        _this.utils.triggerCallback('Open', _this);
      }
    },

    /** Close the select options box */
    close: function() {
      var _this = this;

      _this.utils.triggerCallback('BeforeClose', _this);

      // Remove custom events on document
      $doc.off(eventNamespaceSuffix);

      // Remove visible class to hide options box
      _this.elements.outerWrapper.removeClass(_this.classes.open);

      _this.state.opened = false;

      _this.utils.triggerCallback('Close', _this);
    },

    /** Select current option and change the label */
    change: function() {
      var _this = this;

      _this.utils.triggerCallback('BeforeChange', _this);

      if ( _this.state.multiple ) {
        // Reset old selected
        $.each(_this.lookupItems, function(idx) {
          _this.lookupItems[idx].selected = false;
          _this.$element.find('option').prop('selected', false);
        });

        // Set new selected
        $.each(_this.state.selectedIdx, function(idx, value) {
          _this.lookupItems[value].selected = true;
          _this.$element.find('option').eq(value).prop('selected', true);
        });

        _this.state.currValue = _this.state.selectedIdx;

        _this.setLabel();

        _this.utils.triggerCallback('Change', _this);
      } else if ( _this.state.currValue !== _this.state.selectedIdx ) {
        // Apply changed value to original select
        _this.$element
          .prop('selectedIndex', _this.state.currValue = _this.state.selectedIdx)
          .data('value', _this.lookupItems[_this.state.selectedIdx].text);

        // Change label text
        _this.setLabel();

        _this.utils.triggerCallback('Change', _this);
      }
    },

    /**
     * Highlight option
     * @param {number} index - Index of the options that will be highlighted
     */
    highlight: function(index) {
      var _this = this;
      var $filteredLi = _this.$li.filter('[data-index]').removeClass('highlighted');

      _this.utils.triggerCallback('BeforeHighlight', _this);

      // Parameter index is required and should not be a disabled item
      if ( index === undefined || index === -1 || _this.lookupItems[index].disabled ) {
        return;
      }

      $filteredLi
        .eq(_this.state.highlightedIdx = index)
        .addClass('highlighted');

      _this.detectItemVisibility(index);

      _this.utils.triggerCallback('Highlight', _this);
    },

    /**
     * Select option
     *
     * @param {number} index - Index of the option that will be selected
     */
    select: function(index) {
      var _this = this;
      var $filteredLi = _this.$li.filter('[data-index]');

      _this.utils.triggerCallback('BeforeSelect', _this, index);

      // Parameter index is required and should not be a disabled item
      if ( index === undefined || index === -1 || _this.lookupItems[index].disabled ) {
        return;
      }

      if ( _this.state.multiple ) {
        // Make sure selectedIdx is an array
        _this.state.selectedIdx = $.isArray(_this.state.selectedIdx) ? _this.state.selectedIdx : [_this.state.selectedIdx];

        var hasSelectedIndex = $.inArray(index, _this.state.selectedIdx);
        if ( hasSelectedIndex !== -1 ) {
          _this.state.selectedIdx.splice(hasSelectedIndex, 1);
        } else {
          _this.state.selectedIdx.push(index);
        }

        $filteredLi
          .removeClass('selected')
          .filter(function(index) {
            return $.inArray(index, _this.state.selectedIdx) !== -1;
          })
          .addClass('selected');
      } else {
        $filteredLi
          .removeClass('selected')
          .eq(_this.state.selectedIdx = index)
          .addClass('selected');
      }

      if ( !_this.state.multiple || !_this.options.multiple.keepMenuOpen ) {
        _this.close();
      }

      _this.change();

      _this.utils.triggerCallback('Select', _this, index);
    },

    /**
     * Unbind and remove
     *
     * @param {boolean} preserveData - Check if the data on the element should be removed too
     */
    destroy: function(preserveData) {
      var _this = this;

      if ( _this.state && _this.state.enabled ) {
        _this.elements.items.add(_this.elements.wrapper).add(_this.elements.input).remove();

        if ( !preserveData ) {
          _this.$element.removeData(pluginName).removeData('value');
        }

        _this.$element.prop('tabindex', _this.originalTabindex).off(eventNamespaceSuffix).off(_this.eventTriggers).unwrap().unwrap();

        _this.state.enabled = false;
      }
    }
  };

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function(args) {
    return this.each(function() {
      var data = $.data(this, pluginName);

      if ( data && !data.disableOnMobile ) {
        (typeof args === 'string' && data[args]) ? data[args]() : data.init(args);
      } else {
        $.data(this, pluginName, new Selectric(this, args));
      }
    });
  };

  /**
   * Default plugin options
   *
   * @type {object}
   */
  $.fn[pluginName].defaults = {
    onChange             : function(elm) { $(elm).change(); },
    maxHeight            : 300,
    keySearchTimeout     : 500,
    arrowButtonMarkup    : '<b class="button">&#x25be;</b>',
    disableOnMobile      : false,
    nativeOnMobile       : true,
    openOnFocus          : true,
    openOnHover          : false,
    hoverIntentTimeout   : 500,
    expandToItemText     : false,
    responsive           : false,
    preventWindowScroll  : true,
    inheritOriginalWidth : false,
    allowWrap            : true,
    forceRenderAbove     : false,
    forceRenderBelow     : false,
    stopPropagation      : true,
    optionsItemBuilder   : '{text}', // function(itemData, element, index)
    labelBuilder         : '{text}', // function(currItem)
    listBuilder          : false,    // function(items)
    keys                 : {
      previous : [37, 38],                 // Left / Up
      next     : [39, 40],                 // Right / Down
      select   : [9, 13, 27],              // Tab / Enter / Escape
      open     : [13, 32, 37, 38, 39, 40], // Enter / Space / Left / Up / Right / Down
      close    : [9, 27]                   // Tab / Escape
    },
    customClass          : {
      prefix: pluginName,
      camelCase: false
    },
    multiple              : {
      separator: ', ',
      keepMenuOpen: true,
      maxLabelEntries: false
    }
  };
}));

/* End */
;
; /* Start:"a:4:{s:4:"full";s:65:"/bitrix/templates/eternis/js/jquery.maskedinput.js?15680189557207";s:6:"source";s:50:"/bitrix/templates/eternis/js/jquery.maskedinput.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function getPasteEvent() {
    var el = document.createElement('input'),
        name = 'onpaste';
    el.setAttribute(name, '');
    return (typeof el[name] === 'function')?'paste':'input';             
}

var pasteEventName = getPasteEvent() + ".mask",
	ua = navigator.userAgent,
	iPhone = /iphone/i.test(ua),
	android=/android/i.test(ua),
	caretTimeoutId;

$.mask = {
	//Predefined character definitions
	definitions: {
		'9': "[0-9]",
		'a': "[A-Za-z]",
		'*': "[A-Za-z0-9]"
	},
	dataName: "rawMaskFn",
	placeholder: '_',
};

$.fn.extend({
	//Helper Function for Caret positioning
	caret: function(begin, end) {
		var range;

		if (this.length === 0 || this.is(":hidden")) {
			return;
		}

		if (typeof begin == 'number') {
			end = (typeof end === 'number') ? end : begin;
			return this.each(function() {
				if (this.setSelectionRange) {
					this.setSelectionRange(begin, end);
				} else if (this.createTextRange) {
					range = this.createTextRange();
					range.collapse(true);
					range.moveEnd('character', end);
					range.moveStart('character', begin);
					range.select();
				}
			});
		} else {
			if (this[0].setSelectionRange) {
				begin = this[0].selectionStart;
				end = this[0].selectionEnd;
			} else if (document.selection && document.selection.createRange) {
				range = document.selection.createRange();
				begin = 0 - range.duplicate().moveStart('character', -100000);
				end = begin + range.text.length;
			}
			return { begin: begin, end: end };
		}
	},
	unmask: function() {
		return this.trigger("unmask");
	},
	mask: function(mask, settings) {
		var input,
			defs,
			tests,
			partialPosition,
			firstNonMaskPos,
			len;

		if (!mask && this.length > 0) {
			input = $(this[0]);
			return input.data($.mask.dataName)();
		}
		settings = $.extend({
			placeholder: $.mask.placeholder, // Load default placeholder
			completed: null
		}, settings);


		defs = $.mask.definitions;
		tests = [];
		partialPosition = len = mask.length;
		firstNonMaskPos = null;

		$.each(mask.split(""), function(i, c) {
			if (c == '?') {
				len--;
				partialPosition = i;
			} else if (defs[c]) {
				tests.push(new RegExp(defs[c]));
				if (firstNonMaskPos === null) {
					firstNonMaskPos = tests.length - 1;
				}
			} else {
				tests.push(null);
			}
		});

		return this.trigger("unmask").each(function() {
			var input = $(this),
				buffer = $.map(
				mask.split(""),
				function(c, i) {
					if (c != '?') {
						return defs[c] ? settings.placeholder : c;
					}
				}),
				focusText = input.val();

			function seekNext(pos) {
				while (++pos < len && !tests[pos]);
				return pos;
			}

			function seekPrev(pos) {
				while (--pos >= 0 && !tests[pos]);
				return pos;
			}

			function shiftL(begin,end) {
				var i,
					j;

				if (begin<0) {
					return;
				}

				for (i = begin, j = seekNext(end); i < len; i++) {
					if (tests[i]) {
						if (j < len && tests[i].test(buffer[j])) {
							buffer[i] = buffer[j];
							buffer[j] = settings.placeholder;
						} else {
							break;
						}

						j = seekNext(j);
					}
				}
				writeBuffer();
				input.caret(Math.max(firstNonMaskPos, begin));
			}

			function shiftR(pos) {
				var i,
					c,
					j,
					t;

				for (i = pos, c = settings.placeholder; i < len; i++) {
					if (tests[i]) {
						j = seekNext(i);
						t = buffer[i];
						buffer[i] = c;
						if (j < len && tests[j].test(t)) {
							c = t;
						} else {
							break;
						}
					}
				}
			}

			function keydownEvent(e) {
				var k = e.which,
					pos,
					begin,
					end;

				//backspace, delete, and escape get special treatment
				if (k === 8 || k === 46 || (iPhone && k === 127)) {
					pos = input.caret();
					begin = pos.begin;
					end = pos.end;

					if (end - begin === 0) {
						begin=k!==46?seekPrev(begin):(end=seekNext(begin-1));
						end=k===46?seekNext(end):end;
					}
					clearBuffer(begin, end);
					shiftL(begin, end - 1);

					e.preventDefault();
				} else if (k == 27) {//escape
					input.val(focusText);
					input.caret(0, checkVal());
					e.preventDefault();
				}
			}

			function keypressEvent(e) {
				var k = e.which,
					pos = input.caret(),
					p,
					c,
					next;

				if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {//Ignore
					return;
				} else if (k) {
					if (pos.end - pos.begin !== 0){
						clearBuffer(pos.begin, pos.end);
						shiftL(pos.begin, pos.end-1);
					}

					p = seekNext(pos.begin - 1);
					if (p < len) {
						c = String.fromCharCode(k);
						if (tests[p].test(c)) {
							shiftR(p);

							buffer[p] = c;
							writeBuffer();
							next = seekNext(p);

							if(android){
								setTimeout($.proxy($.fn.caret,input,next),0);
							}else{
								input.caret(next);
							}

							if (settings.completed && next >= len) {
								settings.completed.call(input);
							}
						}
					}
					e.preventDefault();
				}
			}

			function clearBuffer(start, end) {
				var i;
				for (i = start; i < end && i < len; i++) {
					if (tests[i]) {
						buffer[i] = settings.placeholder;
					}
				}
			}

			function writeBuffer() { input.val(buffer.join('')); }

			function checkVal(allow) {
				//try to place characters where they belong
				var test = input.val(),
					lastMatch = -1,
					i,
					c;

				for (i = 0, pos = 0; i < len; i++) {
					if (tests[i]) {
						buffer[i] = settings.placeholder;
						while (pos++ < test.length) {
							c = test.charAt(pos - 1);
							if (tests[i].test(c)) {
								buffer[i] = c;
								lastMatch = i;
								break;
							}
						}
						if (pos > test.length) {
							break;
						}
					} else if (buffer[i] === test.charAt(pos) && i !== partialPosition) {
						pos++;
						lastMatch = i;
					}
				}
				if (allow) {
					writeBuffer();
				} else if (lastMatch + 1 < partialPosition) {
					input.val("");
					clearBuffer(0, len);
				} else {
					writeBuffer();
					input.val(input.val().substring(0, lastMatch + 1));
				}
				return (partialPosition ? i : firstNonMaskPos);
			}

			input.data($.mask.dataName,function(){
				return $.map(buffer, function(c, i) {
					return tests[i]&&c!=settings.placeholder ? c : null;
				}).join('');
			});

			if (!input.attr("readonly"))
				input
				.one("unmask", function() {
					input
						.unbind(".mask")
						.removeData($.mask.dataName);
				})
				.bind("focus.mask", function() {
					clearTimeout(caretTimeoutId);
					var pos,
						moveCaret;

					focusText = input.val();
					pos = checkVal();
					
					caretTimeoutId = setTimeout(function(){
						writeBuffer();
						if (pos == mask.length) {
							input.caret(0, pos);
						} else {
							input.caret(pos);
						}
					}, 10);
				})
				.bind("blur.mask", function() {
					checkVal();
					if (input.val() != focusText)
						input.change();
				})
				.bind("keydown.mask", keydownEvent)
				.bind("keypress.mask", keypressEvent)
				.bind(pasteEventName, function() {
					setTimeout(function() { 
						var pos=checkVal(true);
						input.caret(pos); 
						if (settings.completed && pos == input.val().length)
							settings.completed.call(input);
					}, 0);
				});
			checkVal(); //Perform initial check for existing values
		});
	}
});


/* End */
;
; /* Start:"a:4:{s:4:"full";s:54:"/bitrix/templates/eternis/js/custom.js?158143098421093";s:6:"source";s:38:"/bitrix/templates/eternis/js/custom.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function initCitySelect() {
    $('.c-buy_citys.d-f.a-i-c').find('a').on('click', function (e) {
        e.preventDefault();
        $('.c-buy_citys.d-f.a-i-c').find('a.is-active').removeClass('is-active');
        $(this).addClass('is-active')
        initCityData($(this).attr('data-id'));
    });
}

function getCityByID(cityId) {
    var city;
    if (typeof (window.cityData) === 'object') {

        for (var k in window.cityData) {
            if (window.cityData.hasOwnProperty(k)) {
                if (window.cityData[k].id == cityId) {
                    city = window.cityData[k];
                    break;
                }
            }
        }
    }
    return city;
}

function showPartners(cityId) {
    // var city = getCityByID(cityId);
    // if (city == undefined) return;
    $('.c-subtitle').text('Наши партнеры');
    $('.js-dealer-table').hide();
    $('.js-partner-table').show();

    /*
    $('.c-buy_table tbody').empty();
    $('.c-buy_table tbody').append('<tr class="head-mod"><td colspan="4">'+city.name+'</td></tr>');
    if (city.partners != false)
    {
        for (var k in city.partners)
        {
            var partner = city.partners[k],
                tr = '<tr>'+
                '<td>'+partner.TITLE+'</td>'+
                '<td>'+partner.PHONE+'</td>'+
                '<td>'+partner.EMAIL+'</td>'+
                '<td>'+partner.SITE+'</td>'+
                '<tr>';
            $('.c-buy_table tbody').append(tr);

        }
    }*/
}

function showDillers(cityId) {
    // var city = getCityByID(cityId);
    // if (city == undefined) return;
    $('.c-subtitle').text('Наши дилеры');
    $('.js-dealer-table').show();
    $('.js-partner-table').hide();

    /*
    $('.c-buy_table tbody').empty();
    $('.c-buy_table tbody').append('<tr class="head-mod"><td colspan="4">'+city.name+'</td></tr>');
    if (city.dealers != false)
    {
        for (var k in city.dealers)
        {
            var dealer = city.dealers[k],
                tr = '<tr>'+
                '<td>'+dealer.TITLE+'</td>'+
                '<td>'+dealer.PHONE+'</td>'+
                '<td>'+dealer.EMAIL+'</td>'+
                '<td>'+dealer.SITE+'</td>'+
                '<tr>';
            $('.c-buy_table tbody').append(tr);

        }
    }	*/
}

function addCityRepres(repres) {
    if (typeof (repres) === 'object') {
        var htmlRow = "<br>" +
            "<div class='row'>" +
            "<div class='col-sm-6'>" +
            "<div class='with-icon a-i-s'>" +
            "<i><svg class='icon icon-map'><use xlink:href='/images/sprite.svg#map'></use></svg></i>" +
            "<span class='s-16 office-info'>" +

            "<div class='title-color'>" + repres.TYPE + "</div>" +
            repres.TITLE + "<br>" +
            repres.ADDRESS + "</span>" +

            "</div>" +
            "</div>" +
            "<div class='col-sm-6'>" +
            "<div class='title-color s-16'>Отдел продаж:</div>" +
            "<br>" +
            "<div class='row s-18'>";

        if (repres.PHONE)
            htmlRow += "<div class='col-xs-6'>" +
                "<div class='with-icon title-color js-curcity-phone'><i><svg class='icon icon-call-small'><use xlink:href='/images/sprite.svg#call-small'></use></svg></i>" + repres.PHONE + "</div>" +
                "</div>";

        if (repres.EMAIL)
            htmlRow += "<div class='col-xs-6'>" +
                "<div class='with-icon title-color js-curcity-email'>" +
                "<i><svg class='icon icon-message'><use xlink:href='/images/sprite.svg#message'></use></svg></i>" + repres.EMAIL +
                "</div>" +
                "</div>";

        htmlRow += "</div>" +
            "</div>" +
            "</div>";

        $(".js-city-wrapper").append(htmlRow);
    }
}

function initCityData(cityId) {
    var svg = '<svg class="icon icon-marker "><use xlink:href="/images/sprite.svg#marker"></use></svg>';
    if (typeof (window.cityData) === 'object') {

        var city = getCityByID(cityId);

        if (typeof (city) === 'object') {
            $(".js-city-wrapper").empty().append('<div class="c-buy_city"><div class="c-title s-30 d-f a-i-c"></div></div>');
            $('.c-buy_city').find('.c-title').html(svg + city.name);

            if (city.repres) {
                if (typeof (city.repres) === 'object') {
                    for (var k in city.repres) {
                        if (city.repres.hasOwnProperty(k)) {
                            addCityRepres(city.repres[k]);
                        }
                    }
                }

                $(".js-city-wrapper").append('<br>');
            }

            /*if (city.phone != '')
            {
                $('.js-curcity-phone').fadeIn();
                $('.js-curcity-phone').find('span').html(city.phone);
            }
            else
                $('.js-curcity-phone').fadeOut();

            if (city.email != '')
            {
                $('.js-curcity-email').fadeIn();
                $('.js-curcity-email').find('span').html(city.email);
            }
            else
                $('.js-curcity-email').fadeOut();
            */

            showPartners(cityId);

            // $('.office-info').html('<div class="title-color">'+city.officeType+'</div>'+city.officeName+'<br>'+city.officeAdr);
        }
    }
}

$(document).ready(function () {
    let forum_list_link = $(".forum-list__link");

    $('.c-btn.shadow-mod.js-fancy-popup.t-t-u').on('click', function () {
        $('#alx_feed_back_FID1 .c-popup_title span').remove();
        var item_name = $('.c-pagetitle').text();
        $('#alx_feed_back_FID1 .c-popup_title').append('<span>' + item_name + '</span>');
    });

    $('.c-btn.h-33.shadow-mod.t-t-u.js-fancy-popup').on('click', function () {
        $('#alx_feed_back_FID1 .c-popup_title span').remove();
        var item_name = $(this).parents('.c-item').find('.c-item_title').text();
        $('#alx_feed_back_FID1 .c-popup_title').append('<span>' + item_name + '</span>');
    });

    $('.c-catalog_view a').on('click', function () {
        var vid = $(this).attr('data-prev');
        $('.c-catalog_view a').removeClass('is-active');
        $(this).addClass('is-active');
        $('.c-catalog').removeClass('table-mod');
        $('.c-catalog').removeClass('two-mod');
        $(this).parents('.c-catalog').addClass(vid);
    });

    $('#YOUR_PHONE_FID31').mask('+7 (999) 999-99-99');
    $('#YOUR_PHONE_FID41').mask('+7 (999) 999-99-99');


    $('.c-buy_links').find('a').on('click', function (e) {
        // var cityId = $('.c-buy_citys.d-f.a-i-c').find('a.is-active').attr('data-id');
        var cityId;
        e.preventDefault();

        if ($(this).hasClass('js-show-partners')) {
            showPartners(cityId);
        } else {
            showDillers(cityId);
        }
    });

    $('.js-area').on('click', function () {
        const cl = this.className.baseVal;
        const classes = cl.split(' ');
        const id = classes[0].split('_')[1];
        $('.js-area').removeClass('is-active');
        this.classList.add('is-active');

        $('.c-buy_citys.d-f.a-i-c').find('a').off('click');

        $.ajax({
            type: 'POST',
            url: '/gde-kupit/modif.php',
            data: {FO_ID: id},
            success: function (data) {
                $('.c-buy_citys.d-f.a-i-c a').remove();
                res = JSON.parse(data);
                window.cityData = res;
                $.each(res, function (index, city) {
                    if (index == 0) {
                        $('.c-buy_citys.d-f.a-i-c').append('<a href="javascript:void(0)" class="is-active" data-id="' + city.id + '">' + city.name + '</a>');
                        initCityData(city.id);

                    } else {
                        $('.c-buy_citys.d-f.a-i-c').append('<a href="javascript:void(0)" data-id="' + city.id + '">' + city.name + '</a>');
                    }
                });

                initCitySelect();
            }
        });
        //return false;
    });

    $('.c-select_head').on('click', function () {
        $('.c-phones_list').toggle();
        return false;
    });

    // $('.js-fancybox').fancybox();
    $('.js-select').selectric();


    $('.c-service_service-item__icon').click(function () {

        var tabID = $(this).attr('data-tab-target');
        $('.c-service_service-item').addClass('c-service_service-item--hidden');
        $('.c-service_service-item[data-tab-id="' + tabID + '"]').removeClass('c-service_service-item--hidden');
    });

    $(".certification--carousel").owlCarousel({
        items: 1,
        margin: 75,
        responsive: {
            769: {
                items: 3,
            },
            500: {
                items: 2,
            },
        }
    });

    $(".letters--carousel").owlCarousel({
        items: 1,
        margin: 75,
        responsive: {
            769: {
                items: 3,
            },
            500: {
                items: 2,
            },
        }
    });

    $('[data-fancybox="certification"]').fancybox();

    $('[data-fancybox="production"]').fancybox();

    $('[data-fancybox="letters"]').fancybox();

    $(".transport-feedback-fancy-popup").fancybox({padding: 0});

    $(".consultServ-fancy-popup").fancybox({padding: 0});

    $(".main-page-feedback-fancy-popup").fancybox({padding: 0});

    $(".top-menu__arrow ").on("click", function (e) {
        e.preventDefault();
        var cur_arrow = $(this);

        $(".top-menu__arrow ").removeClass("d-none");
        cur_arrow.addClass("d-none");

        $(".top-menu__item").find(".p-a").removeClass("p-a--active");
        cur_arrow.closest(".top-menu__item").find(".p-a").addClass("p-a--active");

        $(".top-menu__item").removeClass("is-open is-active");
        cur_arrow.closest(".top-menu__item").addClass("is-open is-active");
    });

    if (forum_list_link.length > 0) {
        forum_list_link.attr("href", $(".forum-list option:selected").val());
    }

    $(".forum-list").on("change", function () {
        let href = $(this).val();

        forum_list_link.attr("href", href);
    });

    /* Dealer products list */
    $(".dealers-products__quantity-input").on("keyup", function (e) {
        e.preventDefault();

        let input = $(this);
        let inputQuantity = Number($(this).val());
        let item = $(".dealers-products__list-item:selected");
        let item_id = item.attr("data-id");
        let productList = $(".dealers-products__list-field");
        let messageText = $(".dealers-products__message-text");
        let message = "";

        if (item.length <= 0) {
            productList.addClass("dealers-products__error");
            input.val("");
            messageText.html(message);

            return;
        }

        $.ajax({
            type: "POST",
            url: "/ajax/get_dealers_products.php",
            data: "item_id=" + item_id,
            success: function (data) {
                data = JSON.parse(data);

                if (inputQuantity > 0) {
                    if (inputQuantity <= data.QUANTITY) {
                        message = "<span class='dealers-products__text-success'>Есть в наличии</span>";
                    } else {
                        if (data.OUT_OF_STOCK_TEXT.length > 0) {
                            message = $.parseHTML(data.OUT_OF_STOCK_TEXT)[0].data;
                        } else {
                            message = "Уточнить у менеджера <a class='dealers-products__text-error' href='mailto:market@eternis.ru'>market@eternis.ru</a>";
                        }
                    }
                }

                messageText.html("");
                messageText.html(message);
            }
        });
    });

    $(".dealers-products__list-select").on("change", function () {
        let input = $(".dealers-products__quantity-input");
        let inputQuantity = Number($(".dealers-products__quantity-input").val());
        let item = $(this);
        let item_id = item.find(".dealers-products__list-item:selected").attr("data-id");
        let productList = $(".dealers-products__list-field");
        let messageText = $(".dealers-products__message-text");
        let message = "";

        if (productList.hasClass("dealers-products__error")) {
            productList.removeClass("dealers-products__error");
        }

        $.ajax({
            type: "POST",
            url: "/ajax/get_dealers_products.php",
            data: "item_id=" + item_id,
            success: function (data) {
                data = JSON.parse(data);

                if (inputQuantity > 0) {
                    if (inputQuantity <= data.QUANTITY) {
                        message = "<span class='dealers-products__text-success'>Есть в наличии</span>";
                    } else {
                        if (data.OUT_OF_STOCK_TEXT.length > 0) {
                            message = $.parseHTML(data.OUT_OF_STOCK_TEXT)[0].data;
                        } else {
                            message = "Уточнить у менеджера <a class='dealers-products__text-error' href='mailto:market@eternis.ru'>market@eternis.ru</a>";
                        }
                    }
                }

                messageText.html("");
                messageText.html(message);
            }
        });
    });
    /* End Dealer products list */
});

//Активация модульного окна на странице techical-support
$(document).ready(function () {
    $(".fancybox_button").fancybox({
        closeBtn: false,
        wrapCSS: 'fancy-manual',
        opts: {
            afterShow: function (instance, current) {
            }
        }
    });

    $('.btn-close').on('click', function (e) {
        e.preventDefault();
        $.fancybox.close()
    });

    $(".comment").focus(function () {
        if ($(this).height() == 45) {
            $(this).height($(this).height() + 95);
            $(".inputs-block").height($(".inputs-block").height() + 60);
        }
    });

    $(document).find('.input_files').each(function () { // на случай, если таких групп файлов будет больше одной
        var attach = $(this),
            fieldClass = 'block_input_files', // класс поля
            attachedClass = 'files_input', // класс поля с файлом
            fields = attach.find('.' + fieldClass).length, // начальное кол-во полей
            fieldsAttached = 0; // начальное кол-во полей с файлами
        counter = 1; // начальное кол-во полей с файлами


        // При изменении инпута
        $(document).on('change', '.files_input', function (e) {
            var newItem = '<div class="block_input_files"><input type="hidden" name="PROPERTY[133][' + counter + ']" value=""/><i class="ico ico_compose ico_compose_attach"></i><label class="file_name" for="files_' + counter + '">Прикрепить файл</label><input type="file" id="files_' + counter + '" class="files_input" multiple="multiple" size="30" name="PROPERTY_FILE_133_' + counter + '"></div>'; // разметка нового поля
            var item = $(this).closest('.' + fieldClass),
                fileName = '';
            if (e.target.value) { // если value инпута не пустое
                fileName = e.target.value.split('\\').pop(); // оставляем только имя файла и записываем в переменную
            }

            if (fileName) { // если имя файла не пустое
                item.find('.file_name').text(fileName); // подставляем в поле имя файла
                if (!item.hasClass(attachedClass)) { // если в поле до этого не было файла
                    item.addClass(attachedClass); // отмечаем поле классом
                    fieldsAttached++;
                    counter++;
                }

                if (fields < 4 && fields == fieldsAttached) { // если полей меньше 10 и кол-во полей равно
                    item.after($(newItem)); // добавляем новое поле
                    fields++;
                    if ($('.inputs-block').height() != 'auto') {
                        $('.inputs-block').height($('.inputs-block').height() + 28);
                    }
                }

            } else { // если имя файла пустое
                if (fields == fieldsAttached + 1) {
                    item.remove(); // удаляем поле
                    fields--;
                } else {
                    item.replaceWith($(newItem)); // заменяем поле на "чистое"
                }
                fieldsAttached--;
                counter--;

                if (fields == 1) { // если поле осталось одно
                    attach.find('.attach__up').text('Загрузить файл'); // меняем текст
                }
            }
        });

        // При нажатии на "Изменить"
        attach.on('click', '.attach__edit', function () {
            $(this).closest('.attach__item').find('.attach__input').trigger('click'); // имитируем клик на инпут
        });

        // При нажатии на "Удалить"
        attach.on('click', '.attach__delete', function () {
            var item = $(this).closest('.' + fieldClass);
            if (fields > fieldsAttached) { // если полей больше, чем загруженных файлов
                item.remove(); // удаляем поле
                fields--;
            } else { // если равно
                item.after($(newItem)); // добавляем новое поле
                item.remove(); // удаляем старое
            }
            fieldsAttached--;
            if (fields == 1) { // если поле осталось одно
                attach.find('.attach__up').text('Загрузить файл'); // меняем текст
            }
        });
    });
});
// Для страницы "Наши объекты"
$(document).ready(function () {
    $('.gal').fancybox({
        type: 'iframe'
    });

    // $(".click-class").click(function () {
    //     $('click-class').removeClass('active');
    //     $(this).toggleClass('active');
    //     if ($(this).hasClass('active')) {
    //         $(this).find('.block_body').toggle(200);
    //     }
    //     else {
    //         $(this).find('.block_body').toggle(200);
    //     }
    //
    // });

    $(".block_title").click(function () {
        $(this).closest('.click-class').removeClass('active');
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).addClass('change_bg');
            $(this).css('color', '#005dac');
            $(this).siblings('.block_body').toggle(200);
        } else {
            $(this).siblings('.block_body').toggle(200);
            $(this).removeClass('change_bg');
            $(this).css('color', '#676b73');
        }
    });

    $(".block_body ul li a.open_block").click(function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).siblings('.block_modules_in_project').addClass('active');
        } else {
            $(this).siblings('.block_modules_in_project').removeClass('active');
        }
    });

    $(function () {
        var tab = $('.tabs .tab-section > div');
        tab.hide().filter(':first').show();

        // Клики по вкладкам.
        $('.tabs .nav-tabs a').click(function () {
            tab.hide();
            tab.filter(this.hash).show();
            $('.tabs .nav-tabs a').removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();
    });
});

$(window).scroll(function () { /* фиксированное меню в хедере*/
    if ($(this).scrollTop() > 150) {
        $(".c-header_foot").addClass("f-nav");
    } else {
        $(".c-header_foot").removeClass("f-nav");
    }

    if ($(window).scrollTop() > 133 && $(window).width() < 769) { /* фиксированное меню в хедере для мобильных*/
        $(".c-toggle").addClass("burger-nav");
        $(".c-header_foot").removeClass("f-nav");

        if ($(".js-toggle").hasClass("is-open")) {
            $(".top-menu").addClass("sub_burger");
            $(".top-menu li").addClass("sub-item");
        } else {
            $(".top-menu").removeClass("sub_burger");
            $(".top-menu li").removeClass("sub-item");
        }
    } else {
        $(".c-toggle").removeClass("burger-nav");
        $(".top-menu").removeClass("sub_burger");
    }
});


/* End */
;
; /* Start:"a:4:{s:4:"full";s:63:"/bitrix/components/bitrix/search.title/script.js?15711293509674";s:6:"source";s:48:"/bitrix/components/bitrix/search.title/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function JCTitleSearch(arParams)
{
	var _this = this;

	this.arParams = {
		'AJAX_PAGE': arParams.AJAX_PAGE,
		'CONTAINER_ID': arParams.CONTAINER_ID,
		'INPUT_ID': arParams.INPUT_ID,
		'MIN_QUERY_LEN': parseInt(arParams.MIN_QUERY_LEN)
	};
	if(arParams.WAIT_IMAGE)
		this.arParams.WAIT_IMAGE = arParams.WAIT_IMAGE;
	if(arParams.MIN_QUERY_LEN <= 0)
		arParams.MIN_QUERY_LEN = 1;

	this.cache = [];
	this.cache_key = null;

	this.startText = '';
	this.running = false;
	this.currentRow = -1;
	this.RESULT = null;
	this.CONTAINER = null;
	this.INPUT = null;
	this.WAIT = null;

	this.ShowResult = function(result)
	{
		if(BX.type.isString(result))
		{
			_this.RESULT.innerHTML = result;
		}

		_this.RESULT.style.display = _this.RESULT.innerHTML !== '' ? 'block' : 'none';
		var pos = _this.adjustResultNode();

		//adjust left column to be an outline
		var res_pos;
		var th;
		var tbl = BX.findChild(_this.RESULT, {'tag':'table','class':'title-search-result'}, true);
		if(tbl)
		{
			th = BX.findChild(tbl, {'tag':'th'}, true);
		}

		if(th)
		{
			var tbl_pos = BX.pos(tbl);
			tbl_pos.width = tbl_pos.right - tbl_pos.left;

			var th_pos = BX.pos(th);
			th_pos.width = th_pos.right - th_pos.left;
			th.style.width = th_pos.width + 'px';

			_this.RESULT.style.width = (pos.width + th_pos.width) + 'px';

			//Move table to left by width of the first column
			_this.RESULT.style.left = (pos.left - th_pos.width - 1)+ 'px';

			//Shrink table when it's too wide
			if((tbl_pos.width - th_pos.width) > pos.width)
				_this.RESULT.style.width = (pos.width + th_pos.width -1) + 'px';

			//Check if table is too wide and shrink result div to it's width
			tbl_pos = BX.pos(tbl);
			res_pos = BX.pos(_this.RESULT);
			if(res_pos.right > tbl_pos.right)
			{
				_this.RESULT.style.width = (tbl_pos.right - tbl_pos.left) + 'px';
			}
		}

		var fade;
		if(tbl) fade = BX.findChild(_this.RESULT, {'class':'title-search-fader'}, true);
		if(fade && th)
		{
			res_pos = BX.pos(_this.RESULT);
			fade.style.left = (res_pos.right - res_pos.left - 18) + 'px';
			fade.style.width = 18 + 'px';
			fade.style.top = 0 + 'px';
			fade.style.height = (res_pos.bottom - res_pos.top) + 'px';
			fade.style.display = 'block';
		}
	};

	this.onKeyPress = function(keyCode)
	{
		var tbl = BX.findChild(_this.RESULT, {'tag':'table','class':'title-search-result'}, true);
		if(!tbl)
			return false;

		var i;
		var cnt = tbl.rows.length;

		switch (keyCode)
		{
		case 27: // escape key - close search div
			_this.RESULT.style.display = 'none';
			_this.currentRow = -1;
			_this.UnSelectAll();
		return true;

		case 40: // down key - navigate down on search results
			if(_this.RESULT.style.display == 'none')
				_this.RESULT.style.display = 'block';

			var first = -1;
			for(i = 0; i < cnt; i++)
			{
				if(!BX.findChild(tbl.rows[i], {'class':'title-search-separator'}, true))
				{
					if(first == -1)
						first = i;

					if(_this.currentRow < i)
					{
						_this.currentRow = i;
						break;
					}
					else if(tbl.rows[i].className == 'title-search-selected')
					{
						tbl.rows[i].className = '';
					}
				}
			}

			if(i == cnt && _this.currentRow != i)
				_this.currentRow = first;

			tbl.rows[_this.currentRow].className = 'title-search-selected';
		return true;

		case 38: // up key - navigate up on search results
			if(_this.RESULT.style.display == 'none')
				_this.RESULT.style.display = 'block';

			var last = -1;
			for(i = cnt-1; i >= 0; i--)
			{
				if(!BX.findChild(tbl.rows[i], {'class':'title-search-separator'}, true))
				{
					if(last == -1)
						last = i;

					if(_this.currentRow > i)
					{
						_this.currentRow = i;
						break;
					}
					else if(tbl.rows[i].className == 'title-search-selected')
					{
						tbl.rows[i].className = '';
					}
				}
			}

			if(i < 0 && _this.currentRow != i)
				_this.currentRow = last;

			tbl.rows[_this.currentRow].className = 'title-search-selected';
		return true;

		case 13: // enter key - choose current search result
			if(_this.RESULT.style.display == 'block')
			{
				for(i = 0; i < cnt; i++)
				{
					if(_this.currentRow == i)
					{
						if(!BX.findChild(tbl.rows[i], {'class':'title-search-separator'}, true))
						{
							var a = BX.findChild(tbl.rows[i], {'tag':'a'}, true);
							if(a)
							{
								window.location = a.href;
								return true;
							}
						}
					}
				}
			}
		return false;
		}

		return false;
	};

	this.onTimeout = function()
	{
		_this.onChange(function(){
			setTimeout(_this.onTimeout, 500);
		});
	};

	this.onChange = function(callback)
	{
		if (_this.running)
			return;
		_this.running = true;

		if(_this.INPUT.value != _this.oldValue && _this.INPUT.value != _this.startText)
		{
			_this.oldValue = _this.INPUT.value;
			if(_this.INPUT.value.length >= _this.arParams.MIN_QUERY_LEN)
			{
				_this.cache_key = _this.arParams.INPUT_ID + '|' + _this.INPUT.value;
				if(_this.cache[_this.cache_key] == null)
				{
					if(_this.WAIT)
					{
						var pos = BX.pos(_this.INPUT);
						var height = (pos.bottom - pos.top)-2;
						_this.WAIT.style.top = (pos.top+1) + 'px';
						_this.WAIT.style.height = height + 'px';
						_this.WAIT.style.width = height + 'px';
						_this.WAIT.style.left = (pos.right - height + 2) + 'px';
						_this.WAIT.style.display = 'block';
					}

					BX.ajax.post(
						_this.arParams.AJAX_PAGE,
						{
							'ajax_call':'y',
							'INPUT_ID':_this.arParams.INPUT_ID,
							'q':_this.INPUT.value,
							'l':_this.arParams.MIN_QUERY_LEN
						},
						function(result)
						{
							_this.cache[_this.cache_key] = result;
							_this.ShowResult(result);
							_this.currentRow = -1;
							_this.EnableMouseEvents();
							if(_this.WAIT)
								_this.WAIT.style.display = 'none';
							if (!!callback)
								callback();
							_this.running = false;
						}
					);
					return;
				}
				else
				{
					_this.ShowResult(_this.cache[_this.cache_key]);
					_this.currentRow = -1;
					_this.EnableMouseEvents();
				}
			}
			else
			{
				_this.RESULT.style.display = 'none';
				_this.currentRow = -1;
				_this.UnSelectAll();
			}
		}
		if (!!callback)
			callback();
		_this.running = false;
	};

	this.onScroll = function ()
	{
		if(BX.type.isElementNode(_this.RESULT)
			&& _this.RESULT.style.display !== "none"
			&& _this.RESULT.innerHTML !== ''
		)
		{
			_this.adjustResultNode();
		}
	};

	this.UnSelectAll = function()
	{
		var tbl = BX.findChild(_this.RESULT, {'tag':'table','class':'title-search-result'}, true);
		if(tbl)
		{
			var cnt = tbl.rows.length;
			for(var i = 0; i < cnt; i++)
				tbl.rows[i].className = '';
		}
	};

	this.EnableMouseEvents = function()
	{
		var tbl = BX.findChild(_this.RESULT, {'tag':'table','class':'title-search-result'}, true);
		if(tbl)
		{
			var cnt = tbl.rows.length;
			for(var i = 0; i < cnt; i++)
				if(!BX.findChild(tbl.rows[i], {'class':'title-search-separator'}, true))
				{
					tbl.rows[i].id = 'row_' + i;
					tbl.rows[i].onmouseover = function (e) {
						if(_this.currentRow != this.id.substr(4))
						{
							_this.UnSelectAll();
							this.className = 'title-search-selected';
							_this.currentRow = this.id.substr(4);
						}
					};
					tbl.rows[i].onmouseout = function (e) {
						this.className = '';
						_this.currentRow = -1;
					};
				}
		}
	};

	this.onFocusLost = function(hide)
	{
		setTimeout(function(){_this.RESULT.style.display = 'none';}, 250);
	};

	this.onFocusGain = function()
	{
		if(_this.RESULT.innerHTML.length)
			_this.ShowResult();
	};

	this.onKeyDown = function(e)
	{
		if(!e)
			e = window.event;

		if (_this.RESULT.style.display == 'block')
		{
			if(_this.onKeyPress(e.keyCode))
				return BX.PreventDefault(e);
		}
	};

	this.adjustResultNode = function()
	{
		if(!(BX.type.isElementNode(_this.RESULT)
			&& BX.type.isElementNode(_this.CONTAINER))
		)
		{
			return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
		}

		var pos = BX.pos(_this.CONTAINER);

		_this.RESULT.style.position = 'absolute';
		_this.RESULT.style.top = (pos.bottom + 2) + 'px';
		_this.RESULT.style.left = pos.left + 'px';
		_this.RESULT.style.width = pos.width + 'px';

		return pos;
	};

	this._onContainerLayoutChange = function()
	{
		if(BX.type.isElementNode(_this.RESULT)
			&& _this.RESULT.style.display !== "none"
			&& _this.RESULT.innerHTML !== ''
		)
		{
			_this.adjustResultNode();
		}
	};
	this.Init = function()
	{
		this.CONTAINER = document.getElementById(this.arParams.CONTAINER_ID);
		BX.addCustomEvent(this.CONTAINER, "OnNodeLayoutChange", this._onContainerLayoutChange);

		this.RESULT = document.body.appendChild(document.createElement("DIV"));
		this.RESULT.className = 'title-search-result';
		this.INPUT = document.getElementById(this.arParams.INPUT_ID);
		this.startText = this.oldValue = this.INPUT.value;
		BX.bind(this.INPUT, 'focus', function() {_this.onFocusGain()});
		BX.bind(this.INPUT, 'blur', function() {_this.onFocusLost()});
		this.INPUT.onkeydown = this.onKeyDown;

		if(this.arParams.WAIT_IMAGE)
		{
			this.WAIT = document.body.appendChild(document.createElement("DIV"));
			this.WAIT.style.backgroundImage = "url('" + this.arParams.WAIT_IMAGE + "')";
			if(!BX.browser.IsIE())
				this.WAIT.style.backgroundRepeat = 'none';
			this.WAIT.style.display = 'none';
			this.WAIT.style.position = 'absolute';
			this.WAIT.style.zIndex = '1100';
		}

		BX.bind(this.INPUT, 'bxchange', function() {_this.onChange()});

		var fixedParent = BX.findParent(this.CONTAINER, BX.is_fixed);
		if(BX.type.isElementNode(fixedParent))
		{
			BX.bind(window, 'scroll', BX.throttle(this.onScroll, 100, this));
		}
	};
	BX.ready(function (){_this.Init(arParams)});
}

/* End */
;
; /* Start:"a:4:{s:4:"full";s:60:"/bitrix/templates/eternis/js/app.compile.js?1568018955122855";s:6:"source";s:43:"/bitrix/templates/eternis/js/app.compile.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function o(r,a,l){function c(t,e){if(!a[t]){if(!r[t]){var i="function"==typeof require&&require;if(!e&&i)return i(t,!0);if(d)return d(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var s=a[t]={exports:{}};r[t][0].call(s.exports,function(e){return c(r[t][1][e]||e)},s,s.exports,o,r,a,l)}return a[t].exports}for(var d="function"==typeof require&&require,e=0;e<l.length;e++)c(l[e]);return c}({1:[function(e,t,i){var n,s;n=this,s=function(){return function(i){function n(e){if(s[e])return s[e].exports;var t=s[e]={exports:{},id:e,loaded:!1};return i[e].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}var s={};return n.m=i,n.c=s,n.p="dist/",n(0)}([function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},o=n((n(i(1)),i(6))),r=n(i(7)),a=n(i(8)),l=n(i(9)),c=n(i(10)),d=n(i(11)),u=n(i(14)),h=[],p=!1,f=document.all&&!window.atob,m={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},v=function(){if(0<arguments.length&&void 0!==arguments[0]&&arguments[0]&&(p=!0),p)return h=(0,d.default)(h,m),(0,c.default)(h,m.once),h},g=function(){h=(0,u.default)(),v()};e.exports={init:function(e){return m=s(m,e),h=(0,u.default)(),!0===(t=m.disable)||"mobile"===t&&l.default.mobile()||"phone"===t&&l.default.phone()||"tablet"===t&&l.default.tablet()||"function"==typeof t&&!0===t()||f?void h.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}):(document.querySelector("body").setAttribute("data-aos-easing",m.easing),document.querySelector("body").setAttribute("data-aos-duration",m.duration),document.querySelector("body").setAttribute("data-aos-delay",m.delay),"DOMContentLoaded"===m.startEvent&&-1<["complete","interactive"].indexOf(document.readyState)?v(!0):"load"===m.startEvent?window.addEventListener(m.startEvent,function(){v(!0)}):document.addEventListener(m.startEvent,function(){v(!0)}),window.addEventListener("resize",(0,r.default)(v,50,!0)),window.addEventListener("orientationchange",(0,r.default)(v,50,!0)),window.addEventListener("scroll",(0,o.default)(function(){(0,c.default)(h,m.once)},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,r.default)(g,50,!0)}),(0,a.default)("[data-aos]",g),h);var t},refresh:v,refreshHard:g}},function(e,t){},,,,,function(m,e){(function(e){"use strict";function o(n,s,e){function o(e){var t=c,i=d;return c=d=void 0,m=e,h=n.apply(i,t)}function r(e){var t=e-f;return void 0===f||s<=t||t<0||g&&u<=e-m}function a(){var e,t,i=S();return r(i)?l(i):void(p=setTimeout(a,(t=s-((e=i)-f),g?x(t,u-(e-m)):t)))}function l(e){return p=void 0,i&&c?o(e):(c=d=void 0,h)}function t(){var e,t=S(),i=r(t);if(c=arguments,d=this,f=t,i){if(void 0===p)return m=e=f,p=setTimeout(a,s),v?o(e):h;if(g)return p=setTimeout(a,s),o(f)}return void 0===p&&(p=setTimeout(a,s)),h}var c,d,u,h,p,f,m=0,v=!1,g=!1,i=!0;if("function"!=typeof n)throw new TypeError(b);return s=w(s)||0,y(e)&&(v=!!e.leading,u=(g="maxWait"in e)?_(w(e.maxWait)||0,s):u,i="trailing"in e?!!e.trailing:i),t.cancel=function(){void 0!==p&&clearTimeout(p),c=f=d=p=void(m=0)},t.flush=function(){return void 0===p?h:l(S())},t}function y(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function n(e){return"symbol"==(void 0===e?"undefined":i(e))||!!(t=e)&&"object"==(void 0===t?"undefined":i(t))&&f.call(e)==r;var t}function w(e){if("number"==typeof e)return e;if(n(e))return s;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var i=c.test(e);return i||d.test(e)?u(e.slice(2),i?2:8):l.test(e)?s:+e}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b="Expected a function",s=NaN,r="[object Symbol]",a=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,u=parseInt,t="object"==(void 0===e?"undefined":i(e))&&e&&e.Object===Object&&e,h="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,p=t||h||Function("return this")(),f=Object.prototype.toString,_=Math.max,x=Math.min,S=function(){return p.Date.now()};m.exports=function(e,t,i){var n=!0,s=!0;if("function"!=typeof e)throw new TypeError(b);return y(i)&&(n="leading"in i?!!i.leading:n,s="trailing"in i?!!i.trailing:s),o(e,t,{leading:n,maxWait:t,trailing:s})}}).call(e,function(){return this}())},function(f,e){(function(e){"use strict";function y(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function n(e){return"symbol"==(void 0===e?"undefined":i(e))||!!(t=e)&&"object"==(void 0===t?"undefined":i(t))&&p.call(e)==o;var t}function w(e){if("number"==typeof e)return e;if(n(e))return s;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var i=l.test(e);return i||c.test(e)?d(e.slice(2),i?2:8):a.test(e)?s:+e}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=NaN,o="[object Symbol]",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt,t="object"==(void 0===e?"undefined":i(e))&&e&&e.Object===Object&&e,u="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,h=t||u||Function("return this")(),p=Object.prototype.toString,b=Math.max,_=Math.min,x=function(){return h.Date.now()};f.exports=function(n,s,e){function o(e){var t=c,i=d;return c=d=void 0,m=e,h=n.apply(i,t)}function r(e){var t=e-f;return void 0===f||s<=t||t<0||g&&u<=e-m}function a(){var e,t,i=x();return r(i)?l(i):void(p=setTimeout(a,(t=s-((e=i)-f),g?_(t,u-(e-m)):t)))}function l(e){return p=void 0,i&&c?o(e):(c=d=void 0,h)}function t(){var e,t=x(),i=r(t);if(c=arguments,d=this,f=t,i){if(void 0===p)return m=e=f,p=setTimeout(a,s),v?o(e):h;if(g)return p=setTimeout(a,s),o(f)}return void 0===p&&(p=setTimeout(a,s)),h}var c,d,u,h,p,f,m=0,v=!1,g=!1,i=!0;if("function"!=typeof n)throw new TypeError("Expected a function");return s=w(s)||0,y(e)&&(v=!!e.leading,u=(g="maxWait"in e)?b(w(e.maxWait)||0,s):u,i="trailing"in e?!!e.trailing:i),t.cancel=function(){void 0!==p&&clearTimeout(p),c=f=d=p=void(m=0)},t.flush=function(){return void 0===p?h:l(x())},t}}).call(e,function(){return this}())},function(e,t){"use strict";function i(){for(var e,t,i=0,n=l.length;i<n;i++){e=l[i];for(var s,o=0,r=(t=a.querySelectorAll(e.selector)).length;o<r;o++)(s=t[o]).ready||(s.ready=!0,e.fn.call(s,s))}}Object.defineProperty(t,"__esModule",{value:!0});var a=window.document,n=window.MutationObserver||window.WebKitMutationObserver,l=[],s=void 0;t.default=function(e,t){l.push({selector:e,fn:t}),!s&&n&&(s=new n(i)).observe(a.documentElement,{childList:!0,subtree:!0,removedNodes:!0}),i()}},function(e,t){"use strict";function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,o=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"phone",value:function(){var e=i();return!(!s.test(e)&&!o.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=i();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,r){var a=window.pageYOffset,l=window.innerHeight;e.forEach(function(e,t){var i,n,s,o;n=l+a,s=r,o=(i=e).node.getAttribute("data-aos-once"),n>i.position?i.node.classList.add("aos-animate"):void 0!==o&&("false"===o||!s&&"true"!==o)&&i.node.classList.remove("aos-animate")})}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=i(12),o=(n=s)&&n.__esModule?n:{default:n};t.default=function(e,i){return e.forEach(function(e,t){e.node.classList.add("aos-init"),e.position=(0,o.default)(e.node,i.offset)}),e}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=i(13),r=(n=s)&&n.__esModule?n:{default:n};t.default=function(e,t){var i=0,n=0,s=window.innerHeight,o={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(o.offset&&!isNaN(o.offset)&&(n=parseInt(o.offset)),o.anchor&&document.querySelectorAll(o.anchor)&&(e=document.querySelectorAll(o.anchor)[0]),i=(0,r.default)(e).top,o.anchorPlacement){case"top-bottom":break;case"center-bottom":i+=e.offsetHeight/2;break;case"bottom-bottom":i+=e.offsetHeight;break;case"top-center":i+=s/2;break;case"bottom-center":i+=s/2+e.offsetHeight;break;case"center-center":i+=s/2+e.offsetHeight/2;break;case"top-top":i+=s;break;case"bottom-top":i+=e.offsetHeight+s;break;case"center-top":i+=e.offsetHeight/2+s}return o.anchorPlacement||o.offset||isNaN(t)||(n=t),i+n}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){for(var t=0,i=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),i+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:i,left:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){e=e||document.querySelectorAll("[data-aos]");var i=[];return[].forEach.call(e,function(e,t){i.push({node:e})}),i}}])},"object"==typeof i&&"object"==typeof t?t.exports=s():"function"==typeof define&&define.amd?define([],s):"object"==typeof i?i.AOS=s():n.AOS=s()},{}],2:[function(e,t,i){"use strict";var n=e("./raw"),s=[],o=[],r=n.makeRequestCallFromTimer(function(){if(o.length)throw o.shift()});function a(e){var t;(t=s.length?s.pop():new l).task=e,n(t)}function l(){this.task=null}t.exports=a,l.prototype.call=function(){try{this.task.call()}catch(e){a.onerror?a.onerror(e):(o.push(e),r())}finally{this.task=null,s[s.length]=this}}},{"./raw":3}],3:[function(e,h,t){(function(e){"use strict";function t(e){n.length||(i(),!0),n[n.length]=e}h.exports=t;var i,n=[],s=0;function o(){for(;s<n.length;){var e=s;if(s+=1,n[e].call(),1024<s){for(var t=0,i=n.length-s;t<i;t++)n[t]=n[t+s];n.length-=s,s=0}}n.length=0,s=0,!1}var r,a,l,c=void 0!==e?e:self,d=c.MutationObserver||c.WebKitMutationObserver;function u(n){return function(){var e=setTimeout(i,0),t=setInterval(i,50);function i(){clearTimeout(e),clearInterval(t),n()}}}"function"==typeof d?(r=1,a=new d(o),l=document.createTextNode(""),a.observe(l,{characterData:!0}),i=function(){r=-r,l.data=r}):i=u(o),t.requestFlush=i,t.makeRequestCallFromTimer=u}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],4:[function(e,t,i){var n,s,o=t.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(t){if(n===setTimeout)return setTimeout(t,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{s="function"==typeof clearTimeout?clearTimeout:a}catch(e){s=a}}();var c,d=[],u=!1,h=-1;function p(){u&&c&&(u=!1,c.length?d=c.concat(d):h=-1,d.length&&f())}function f(){if(!u){var e=l(p);u=!0;for(var t=d.length;t;){for(c=d,d=[];++h<t;)c&&c[h].run();h=-1,t=d.length}c=null,u=!1,function(t){if(s===clearTimeout)return clearTimeout(t);if((s===a||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(t);try{s(t)}catch(e){try{return s.call(null,t)}catch(e){return s.call(this,t)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];d.push(new m(e,t)),1!==d.length||u||l(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],5:[function(e,t,i){"use strict";t.exports=e("./lib")},{"./lib":10}],6:[function(e,t,i){"use strict";var s=e("asap/raw");function r(){}var o=null,a={};function l(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("Promise constructor's argument is not a function");this._75=0,this._83=0,this._18=null,this._38=null,e!==r&&p(e,this)}function c(e,t){for(;3===e._83;)e=e._18;if(l._47&&l._47(e),0===e._83)return 0===e._75?(e._75=1,void(e._38=t)):1===e._75?(e._75=2,void(e._38=[e._38,t])):void e._38.push(t);var i,n;i=e,n=t,s(function(){var e=1===i._83?n.onFulfilled:n.onRejected;if(null!==e){var t=function(e,t){try{return e(t)}catch(e){return o=e,a}}(e,i._18);t===a?u(n.promise,o):d(n.promise,t)}else 1===i._83?d(n.promise,i._18):u(n.promise,i._18)})}function d(e,t){if(t===e)return u(e,new TypeError("A promise cannot be resolved with itself."));if(t&&("object"==typeof t||"function"==typeof t)){var i=function(e){try{return e.then}catch(e){return o=e,a}}(t);if(i===a)return u(e,o);if(i===e.then&&t instanceof l)return e._83=3,e._18=t,void n(e);if("function"==typeof i)return void p(i.bind(t),e)}e._83=1,e._18=t,n(e)}function u(e,t){e._83=2,e._18=t,l._71&&l._71(e,t),n(e)}function n(e){if(1===e._75&&(c(e,e._38),e._38=null),2===e._75){for(var t=0;t<e._38.length;t++)c(e,e._38[t]);e._38=null}}function h(e,t,i){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=i}function p(e,t){var i=!1,n=function(e,t,i){try{e(t,i)}catch(e){return o=e,a}}(e,function(e){i||(i=!0,d(t,e))},function(e){i||(i=!0,u(t,e))});i||n!==a||(i=!0,u(t,o))}(t.exports=l)._47=null,l._71=null,l._44=r,l.prototype.then=function(e,t){if(this.constructor!==l)return s=e,o=t,new(n=this).constructor(function(e,t){var i=new l(r);i.then(e,t),c(n,new h(s,o,i))});var n,s,o,i=new l(r);return c(this,new h(e,t,i)),i}},{"asap/raw":3}],7:[function(e,t,i){"use strict";var n=e("./core.js");(t.exports=n).prototype.done=function(e,t){(arguments.length?this.then.apply(this,arguments):this).then(null,function(e){setTimeout(function(){throw e},0)})}},{"./core.js":6}],8:[function(e,t,i){"use strict";var l=e("./core.js");t.exports=l;var n=d(!0),s=d(!1),o=d(null),r=d(void 0),a=d(0),c=d("");function d(e){var t=new l(l._44);return t._83=1,t._18=e,t}l.resolve=function(e){if(e instanceof l)return e;if(null===e)return o;if(void 0===e)return r;if(!0===e)return n;if(!1===e)return s;if(0===e)return a;if(""===e)return c;if("object"==typeof e||"function"==typeof e)try{var t=e.then;if("function"==typeof t)return new l(t.bind(e))}catch(i){return new l(function(e,t){t(i)})}return d(e)},l.all=function(e){var a=Array.prototype.slice.call(e);return new l(function(n,s){if(0===a.length)return n([]);var o=a.length;function r(t,e){if(e&&("object"==typeof e||"function"==typeof e)){if(e instanceof l&&e.then===l.prototype.then){for(;3===e._83;)e=e._18;return 1===e._83?r(t,e._18):(2===e._83&&s(e._18),void e.then(function(e){r(t,e)},s))}var i=e.then;if("function"==typeof i)return void new l(i.bind(e)).then(function(e){r(t,e)},s)}a[t]=e,0==--o&&n(a)}for(var e=0;e<a.length;e++)r(e,a[e])})},l.reject=function(i){return new l(function(e,t){t(i)})},l.race=function(e){return new l(function(t,i){e.forEach(function(e){l.resolve(e).then(t,i)})})},l.prototype.catch=function(e){return this.then(null,e)}},{"./core.js":6}],9:[function(e,t,i){"use strict";var n=e("./core.js");(t.exports=n).prototype.finally=function(t){return this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})})}},{"./core.js":6}],10:[function(e,t,i){"use strict";t.exports=e("./core.js"),e("./done.js"),e("./finally.js"),e("./es6-extensions.js"),e("./node-extensions.js"),e("./synchronous.js")},{"./core.js":6,"./done.js":7,"./es6-extensions.js":8,"./finally.js":9,"./node-extensions.js":11,"./synchronous.js":12}],11:[function(e,t,i){"use strict";var o=e("./core.js"),s=e("asap");(t.exports=o).denodeify=function(e,t){return"number"==typeof t&&t!==1/0?function(e,t){for(var i=[],n=0;n<t;n++)i.push("a"+n);var s=["return function ("+i.join(",")+") {","var self = this;","return new Promise(function (rs, rj) {","var res = fn.call(",["self"].concat(i).concat([r]).join(","),");","if (res &&",'(typeof res === "object" || typeof res === "function") &&','typeof res.then === "function"',") {rs(res);}","});","};"].join("");return Function(["Promise","fn"],s)(o,e)}(e,t):function(e){for(var t=Math.max(e.length-1,3),i=[],n=0;n<t;n++)i.push("a"+n);var s=["return function ("+i.join(",")+") {","var self = this;","var args;","var argLength = arguments.length;","if (arguments.length > "+t+") {","args = new Array(arguments.length + 1);","for (var i = 0; i < arguments.length; i++) {","args[i] = arguments[i];","}","}","return new Promise(function (rs, rj) {","var cb = "+r+";","var res;","switch (argLength) {",i.concat(["extra"]).map(function(e,t){return"case "+t+":res = fn.call("+["self"].concat(i.slice(0,t)).concat("cb").join(",")+");break;"}).join(""),"default:","args[argLength] = cb;","res = fn.apply(self, args);","}","if (res &&",'(typeof res === "object" || typeof res === "function") &&','typeof res.then === "function"',") {rs(res);}","});","};"].join("");return Function(["Promise","fn"],s)(o,e)}(e)};var r="function (err, res) {if (err) { rj(err); } else { rs(res); }}";o.nodeify=function(i){return function(){var e=Array.prototype.slice.call(arguments),t="function"==typeof e[e.length-1]?e.pop():null,n=this;try{return i.apply(this,arguments).nodeify(t,n)}catch(i){if(null==t)return new o(function(e,t){t(i)});s(function(){t.call(n,i)})}}},o.prototype.nodeify=function(t,i){if("function"!=typeof t)return this;this.then(function(e){s(function(){t.call(i,null,e)})},function(e){s(function(){t.call(i,e)})})}},{"./core.js":6,asap:2}],12:[function(e,t,i){"use strict";var n=e("./core.js");(t.exports=n).enableSynchronous=function(){n.prototype.isPending=function(){return 0==this.getState()},n.prototype.isFulfilled=function(){return 1==this.getState()},n.prototype.isRejected=function(){return 2==this.getState()},n.prototype.getValue=function(){if(3===this._83)return this._18.getValue();if(!this.isFulfilled())throw new Error("Cannot get a value of an unfulfilled promise.");return this._18},n.prototype.getReason=function(){if(3===this._83)return this._18.getReason();if(!this.isRejected())throw new Error("Cannot get a rejection reason of a non-rejected promise.");return this._18},n.prototype.getState=function(){return 3===this._83?this._18.getState():-1===this._83||-2===this._83?0:this._83}},n.disableSynchronous=function(){n.prototype.isPending=void 0,n.prototype.isFulfilled=void 0,n.prototype.isRejected=void 0,n.prototype.getValue=void 0,n.prototype.getReason=void 0,n.prototype.getState=void 0}},{"./core.js":6}],13:[function(e,t,i){var n,s;n=this,s=function(){function v(e,t,i){if(i){var n=document.createDocumentFragment(),s=!t.hasAttribute("viewBox")&&i.getAttribute("viewBox");s&&t.setAttribute("viewBox",s);for(var o=i.cloneNode(!0);o.childNodes.length;)n.appendChild(o.firstChild);e.appendChild(n)}}function g(n){n.onreadystatechange=function(){if(4===n.readyState){var i=n._cachedDocument;i||((i=n._cachedDocument=document.implementation.createHTMLDocument("")).body.innerHTML=n.responseText,n._cachedTarget={}),n._embeds.splice(0).map(function(e){var t=n._cachedTarget[e.id];t||(t=n._cachedTarget[e.id]=i.getElementById(e.id)),v(e.parent,e.svg,t)})}},n.onreadystatechange()}function y(e){for(var t=e;"svg"!==t.nodeName.toLowerCase()&&(t=t.parentNode););return t}return function(e){var d,u=Object(e),t=window.top!==window.self;d="polyfill"in u?u.polyfill:/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537||/\bEdge\/.(\d+)\b/.test(navigator.userAgent)&&t;var h={},p=window.requestAnimationFrame||setTimeout,f=document.getElementsByTagName("use"),m=0;d&&function e(){for(var t=0;t<f.length;){var i=f[t],n=i.parentNode,s=y(n),o=i.getAttribute("xlink:href")||i.getAttribute("href");if(!o&&u.attributeName&&(o=i.getAttribute(u.attributeName)),s&&o){if(d)if(!u.validate||u.validate(o,s,i)){n.removeChild(i);var r=o.split("#"),a=r.shift(),l=r.join("#");if(a.length){var c=h[a];c||((c=h[a]=new XMLHttpRequest).open("GET",a),c.send(),c._embeds=[]),c._embeds.push({parent:n,svg:s,id:l}),g(c)}else v(n,s,document.getElementById(l))}else++t,++m}else++t}(!f.length||0<f.length-m)&&p(e,67)}()}},"function"==typeof define&&define.amd?define([],function(){return n.svg4everybody=s()}):"object"==typeof t&&t.exports?t.exports=s():n.svg4everybody=s()},{}],14:[function(l,e,c){(function(e,t){var n=l("process/browser.js").nextTick,i=Function.prototype.apply,s=Array.prototype.slice,o={},r=0;function a(e,t){this._id=e,this._clearFn=t}c.setTimeout=function(){return new a(i.call(setTimeout,window,arguments),clearTimeout)},c.setInterval=function(){return new a(i.call(setInterval,window,arguments),clearInterval)},c.clearTimeout=c.clearInterval=function(e){e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(window,this._id)},c.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},c.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},c._unrefActive=c.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;0<=t&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},c.setImmediate="function"==typeof e?e:function(e){var t=r++,i=!(arguments.length<2)&&s.call(arguments,1);return o[t]=!0,n(function(){o[t]&&(i?e.apply(null,i):e.call(null),c.clearImmediate(t))}),t},c.clearImmediate="function"==typeof t?t:function(e){delete o[e]}}).call(this,l("timers").setImmediate,l("timers").clearImmediate)},{"process/browser.js":4,timers:14}],15:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n,s=function(){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),o=t("./UsesFunctions"),r=t("./components/Slider"),a=(n=r)&&n.__esModule?n:{default:n};t("./vendors/owl/owl.carousel.min"),t("./vendors/light/js/lightslider.min");var l=t("svg4everybody"),c=(t("aos"),function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.body=$("body")}return s(e,[{key:"run",value:function(){((0,o.isMobile)()&&this.body.addClass("is-mobile"),document.querySelector(".has-anim"))&&t("aos").init({disable:"mobile",offset:200,duration:600,easing:"ease-in-sine",delay:100});$(".js-fancy").fancybox({}),$(".js-media-fancy").on("click",function(){var e=$(this).attr("href").match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/),t="";return e&&11===e[2].length?(t=e[2],$.fancybox({type:"iframe",href:"https://www.youtube.com/embed/"+t+"?autoplay=1"}),!1):"error"}),$(".js-fancy-popup").fancybox({padding:0}),l(),$(".js-search").on("click",function(e){var t=$(e.currentTarget);t.parents("form");return!!t.hasClass("is-open")||(t.addClass("is-open"),!1)}),$(".js-toggle").on("click",function(e){if($(".js-toggle").hasClass("is-open")){$('.c-menu').hide();}else{$('.c-menu').show();$('.icon-home').hide();}$(e.currentTarget).toggleClass("is-open")}),$(".js-level").find("a").on("click",function(e){var t=$(e.currentTarget);if(window.matchMedia("(max-width: 768px)").matches&&t.next("ul")[0])return t.parent().toggleClass("is-open"),!1}),$(".js-phones").on("click",function(){return $(this).parents(".c-phones").toggleClass("is-open"),!1}),$(".js-event-owl").owlCarousel({items:3,nav:!0,margin:0,responsive:{0:{items:1},768:{items:2},992:{items:3}}}),$(".js-owl-client").owlCarousel({items:5,nav:!0,margin:0,responsive:{0:{items:1},768:{items:3},992:{items:5}}}),$(".js-carusel").owlCarousel({items:4,loop:!1,nav:!0,margin:0,responsive:{0:{items:1},768:{items:2},992:{items:4}}}),$(".js-review-carusel").owlCarousel({items:1,loop:!0,nav:!1,margin:0,autoplay:!0}),$(".js-gallery").lightSlider({gallery:!0,item:1,loop:!0,thumbItem:3,slideMargin:0,enableDrag:!1,currentPagerPosition:"left",vThumbWidth:100,thumbMargin:20}),$(document).on("click",".js-counter button",function(){var e=$(this),t=e.parent().find("input"),i=+t.val();return e.hasClass("up-mod")?t.val(i+1):t.val(1<i?i-1:1),!1}),$(document).on("click",".js-tab",function(){var e=$(this),t=e.attr("href"),i=e.parents(".c-tabs");return i.find(".js-tab").removeClass("is-active"),e.addClass("is-active"),i.find(".js-tab-content").removeClass("is-active"),$(t).addClass("is-active"),!1}),a.default.init()}}]),e}());i.default=new c},{"./UsesFunctions":16,"./components/Slider":17,"./vendors/light/js/lightslider.min":21,"./vendors/owl/owl.carousel.min":23,aos:1,svg4everybody:13}],16:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.afterLoadCSS=i.onloadCSS=i.linkSupportsPreload=i.random=i.autoHeight=i.isMobile=void 0,e("./vendors/device");i.isMobile=function(){return device.mobile()},i.autoHeight=function(e){var t=document.querySelectorAll(e),i=t.length;if(!i)return!1;for(var n=0,s=0;s<i;s+=1){var o=t[s];o.style.cssText+="height: auto;";var r=$(o).innerHeight();n<r&&(n=r)}for(var a=0;a<i;a+=1){t[a].style.cssText+="height: "+n+" px;"}return!0},i.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},i.linkSupportsPreload=function(e,t){if(!e||!e.supports)return!1;try{return e.supports(t)}catch(e){return!1}},i.onloadCSS=function(e,t){var i=void 0;function n(){!i&&t&&(i=!0,t.call(e))}e.addEventListener&&e.addEventListener("load",n),e.attachEvent&&e.attachEvent("onload",n),"isApplicationInstalled"in navigator&&"onloadcssdefined"in e&&e.onloadcssdefined(n)},i.afterLoadCSS=function(){var e=".loader {\n    display: none;\n  }",t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e)),setTimeout(function(){t.appendChild(i),i=e=null},300)}},{"./vendors/device":19}],17:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}();e("../vendors/flex/jquery.flexslider-min.js");var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.slider=document.querySelector(".js-slider")}return n(e,[{key:"init",value:function(){this.slider&&$(this.slider).flexslider({animation:"slide"})}}]),e}();i.default=new s},{"../vendors/flex/jquery.flexslider-min.js":20}],18:[function(e,t,i){"use strict";e("./vendors/migrate");var n,s=e("./App"),o=(n=s)&&n.__esModule?n:{default:n};e("promise");$(document).ready(o.default.run())},{"./App":15,"./vendors/migrate":22,promise:5}],19:[function(e,t,i){"use strict";(function(){var e,t,i,n,s,o,r,a,l;e=window.device,window.device={},i=window.document.documentElement,l=window.navigator.userAgent.toLowerCase(),device.ios=function(){return device.iphone()||device.ipod()||device.ipad()},device.iphone=function(){return n("iphone")},device.ipod=function(){return n("ipod")},device.ipad=function(){return n("ipad")},device.android=function(){return n("android")},device.androidPhone=function(){return device.android()&&n("mobile")},device.androidTablet=function(){return device.android()&&!n("mobile")},device.blackberry=function(){return n("blackberry")||n("bb10")||n("rim")},device.blackberryPhone=function(){return device.blackberry()&&!n("tablet")},device.blackberryTablet=function(){return device.blackberry()&&n("tablet")},device.windows=function(){return n("windows")},device.windowsPhone=function(){return device.windows()&&n("phone")},device.windowsTablet=function(){return device.windows()&&n("touch")},device.fxos=function(){return(n("(mobile;")||n("(tablet;"))&&n("; rv:")},device.fxosPhone=function(){return device.fxos()&&n("mobile")},device.fxosTablet=function(){return device.fxos()&&n("tablet")},device.meego=function(){return n("meego")},device.mobile=function(){return device.androidPhone()||device.iphone()||device.ipod()||device.windowsPhone()||device.blackberryPhone()||device.fxosPhone()||device.meego()},device.tablet=function(){return device.ipad()||device.androidTablet()||device.blackberryTablet()||device.windowsTablet()||device.fxosTablet()},device.portrait=function(){return 90!==Math.abs(window.orientation)},device.landscape=function(){return 90===Math.abs(window.orientation)},device.noConflict=function(){return window.device=e,this},n=function(e){return-1!==l.indexOf(e)},o=function(e){var t;return t=new RegExp(e,"i"),i.className.match(t)},t=function(e){return o(e)?void 0:i.className+=" "+e},a=function(e){return o(e)?i.className=i.className.replace(e,""):void 0},device.ios()?device.ipad()?t("ios ipad tablet"):device.iphone()?t("ios iphone mobile"):device.ipod()&&t("ios ipod mobile"):device.android()?device.androidTablet()?t("android tablet"):t("android mobile"):device.blackberry()?device.blackberryTablet()?t("blackberry tablet"):t("blackberry mobile"):device.windows()?device.windowsTablet()?t("windows tablet"):device.windowsPhone()?t("windows mobile"):t("desktop"):device.fxos()?device.fxosTablet()?t("fxos tablet"):t("fxos mobile"):device.meego()?t("meego mobile"):t("desktop"),s=function(){return device.landscape()?(a("portrait"),t("landscape")):(a("landscape"),t("portrait"))},r="onorientationchange"in window?"orientationchange":"resize",window.addEventListener?window.addEventListener(r,s,!1):window.attachEvent?window.attachEvent(r,s):window[r]=s,s()}).call(void 0)},{}],20:[function(e,t,i){(function(_){"use strict";var x,i,t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};x=jQuery,i=!0,x.flexslider=function(p,e){var f=x(p);f.vars=x.extend({},x.flexslider.defaults,e);var t,d=f.vars.namespace,m=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,u=("ontouchstart"in window||m||window.DocumentTouch&&document instanceof DocumentTouch)&&f.vars.touch,a="click touchend MSPointerUp keyup",l="",v="vertical"===f.vars.direction,g=f.vars.reverse,y=0<f.vars.itemWidth,w="fade"===f.vars.animation,h=""!==f.vars.asNavFor,b={};x.data(p,"flexslider",f),b={init:function(){f.animating=!1,f.currentSlide=parseInt(f.vars.startAt?f.vars.startAt:0,10),isNaN(f.currentSlide)&&(f.currentSlide=0),f.animatingTo=f.currentSlide,f.atEnd=0===f.currentSlide||f.currentSlide===f.last,f.containerSelector=f.vars.selector.substr(0,f.vars.selector.search(" ")),f.slides=x(f.vars.selector,f),f.container=x(f.containerSelector,f),f.count=f.slides.length,f.syncExists=0<x(f.vars.sync).length,"slide"===f.vars.animation&&(f.vars.animation="swing"),f.prop=v?"top":"marginLeft",f.args={},f.manualPause=!1,f.stopped=!1,f.started=!1,f.startTimeout=null,f.transitions=!f.vars.video&&!w&&f.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in t)if(void 0!==e.style[t[i]])return f.pfx=t[i].replace("Perspective","").toLowerCase(),f.prop="-"+f.pfx+"-transform",!0;return!1}(),(f.ensureAnimationEnd="")!==f.vars.controlsContainer&&(f.controlsContainer=0<x(f.vars.controlsContainer).length&&x(f.vars.controlsContainer)),""!==f.vars.manualControls&&(f.manualControls=0<x(f.vars.manualControls).length&&x(f.vars.manualControls)),""!==f.vars.customDirectionNav&&(f.customDirectionNav=2===x(f.vars.customDirectionNav).length&&x(f.vars.customDirectionNav)),f.vars.randomize&&(f.slides.sort(function(){return Math.round(Math.random())-.5}),f.container.empty().append(f.slides)),f.doMath(),f.setup("init"),f.vars.controlNav&&b.controlNav.setup(),f.vars.directionNav&&b.directionNav.setup(),f.vars.keyboard&&(1===x(f.containerSelector).length||f.vars.multipleKeyboard)&&x(document).bind("keyup",function(e){var t=e.keyCode;if(!f.animating&&(39===t||37===t)){var i=39===t?f.getTarget("next"):37===t&&f.getTarget("prev");f.flexAnimate(i,f.vars.pauseOnAction)}}),f.vars.mousewheel&&f.bind("mousewheel",function(e,t,i,n){e.preventDefault();var s=t<0?f.getTarget("next"):f.getTarget("prev");f.flexAnimate(s,f.vars.pauseOnAction)}),f.vars.pausePlay&&b.pausePlay.setup(),f.vars.slideshow&&f.vars.pauseInvisible&&b.pauseInvisible.init(),f.vars.slideshow&&(f.vars.pauseOnHover&&f.hover(function(){f.manualPlay||f.manualPause||f.pause()},function(){f.manualPause||f.manualPlay||f.stopped||f.play()}),f.vars.pauseInvisible&&b.pauseInvisible.isHidden()||(0<f.vars.initDelay?f.startTimeout=setTimeout(f.play,f.vars.initDelay):f.play())),h&&b.asNav.setup(),u&&f.vars.touch&&b.touch(),(!w||w&&f.vars.smoothHeight)&&x(window).bind("resize orientationchange focus",b.resize()),f.find("img").attr("draggable","false"),setTimeout(function(){f.vars.start(f)},200)},asNav:{setup:function(){f.asNav=!0,f.animatingTo=Math.floor(f.currentSlide/f.move),f.currentItem=f.currentSlide,f.slides.removeClass(d+"active-slide").eq(f.currentItem).addClass(d+"active-slide"),m?(p._slider=f).slides.each(function(){var e=this;e._gesture=new MSGesture,(e._gesture.target=e).addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=x(this),i=t.index();x(f.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(f.direction=f.currentItem<i?"next":"prev",f.flexAnimate(i,f.vars.pauseOnAction,!1,!0,!0))})}):f.slides.on(a,function(e){e.preventDefault();var t=x(this),i=t.index();t.offset().left-x(f).scrollLeft()<=0&&t.hasClass(d+"active-slide")?f.flexAnimate(f.getTarget("prev"),!0):x(f.vars.asNavFor).data("flexslider").animating||t.hasClass(d+"active-slide")||(f.direction=f.currentItem<i?"next":"prev",f.flexAnimate(i,f.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){f.manualControls?b.controlNav.setupManual():b.controlNav.setupPaging()},setupPaging:function(){var e,t,i="thumbnails"===f.vars.controlNav?"control-thumbs":"control-paging",n=1;if(f.controlNavScaffold=x('<ol class="'+d+"control-nav "+d+i+'"></ol>'),1<f.pagingCount)for(var s=0;s<f.pagingCount;s++){void 0===(t=f.slides.eq(s)).attr("data-thumb-alt")&&t.attr("data-thumb-alt","");var o=""!==t.attr("data-thumb-alt")?o=' alt="'+t.attr("data-thumb-alt")+'"':"";if(e="thumbnails"===f.vars.controlNav?'<img src="'+t.attr("data-thumb")+'"'+o+"/>":'<a href="#">'+n+"</a>","thumbnails"===f.vars.controlNav&&!0===f.vars.thumbCaptions){var r=t.attr("data-thumbcaption");""!==r&&void 0!==r&&(e+='<span class="'+d+'caption">'+r+"</span>")}f.controlNavScaffold.append("<li>"+e+"</li>"),n++}f.controlsContainer?x(f.controlsContainer).append(f.controlNavScaffold):f.append(f.controlNavScaffold),b.controlNav.set(),b.controlNav.active(),f.controlNavScaffold.delegate("a, img",a,function(e){if(e.preventDefault(),""===l||l===e.type){var t=x(this),i=f.controlNav.index(t);t.hasClass(d+"active")||(f.direction=i>f.currentSlide?"next":"prev",f.flexAnimate(i,f.vars.pauseOnAction))}""===l&&(l=e.type),b.setToClearWatchedEvent()})},setupManual:function(){f.controlNav=f.manualControls,b.controlNav.active(),f.controlNav.bind(a,function(e){if(e.preventDefault(),""===l||l===e.type){var t=x(this),i=f.controlNav.index(t);t.hasClass(d+"active")||(i>f.currentSlide?f.direction="next":f.direction="prev",f.flexAnimate(i,f.vars.pauseOnAction))}""===l&&(l=e.type),b.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===f.vars.controlNav?"img":"a";f.controlNav=x("."+d+"control-nav li "+e,f.controlsContainer?f.controlsContainer:f)},active:function(){f.controlNav.removeClass(d+"active").eq(f.animatingTo).addClass(d+"active")},update:function(e,t){1<f.pagingCount&&"add"===e?f.controlNavScaffold.append(x('<li><a href="#">'+f.count+"</a></li>")):1===f.pagingCount?f.controlNavScaffold.find("li").remove():f.controlNav.eq(t).closest("li").remove(),b.controlNav.set(),1<f.pagingCount&&f.pagingCount!==f.controlNav.length?f.update(t,e):b.controlNav.active()}},directionNav:{setup:function(){var e=x('<ul class="'+d+'direction-nav"><li class="'+d+'nav-prev"><a class="'+d+'prev" href="#">'+f.vars.prevText+'</a></li><li class="'+d+'nav-next"><a class="'+d+'next" href="#">'+f.vars.nextText+"</a></li></ul>");f.customDirectionNav?f.directionNav=f.customDirectionNav:f.controlsContainer?(x(f.controlsContainer).append(e),f.directionNav=x("."+d+"direction-nav li a",f.controlsContainer)):(f.append(e),f.directionNav=x("."+d+"direction-nav li a",f)),b.directionNav.update(),f.directionNav.bind(a,function(e){var t;e.preventDefault(),""!==l&&l!==e.type||(t=x(this).hasClass(d+"next")?f.getTarget("next"):f.getTarget("prev"),f.flexAnimate(t,f.vars.pauseOnAction)),""===l&&(l=e.type),b.setToClearWatchedEvent()})},update:function(){var e=d+"disabled";1===f.pagingCount?f.directionNav.addClass(e).attr("tabindex","-1"):f.vars.animationLoop?f.directionNav.removeClass(e).removeAttr("tabindex"):0===f.animatingTo?f.directionNav.removeClass(e).filter("."+d+"prev").addClass(e).attr("tabindex","-1"):f.animatingTo===f.last?f.directionNav.removeClass(e).filter("."+d+"next").addClass(e).attr("tabindex","-1"):f.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=x('<div class="'+d+'pauseplay"><a href="#"></a></div>');f.controlsContainer?(f.controlsContainer.append(e),f.pausePlay=x("."+d+"pauseplay a",f.controlsContainer)):(f.append(e),f.pausePlay=x("."+d+"pauseplay a",f)),b.pausePlay.update(f.vars.slideshow?d+"pause":d+"play"),f.pausePlay.bind(a,function(e){e.preventDefault(),""!==l&&l!==e.type||(x(this).hasClass(d+"pause")?(f.manualPause=!0,f.manualPlay=!1,f.pause()):(f.manualPause=!1,f.manualPlay=!0,f.play())),""===l&&(l=e.type),b.setToClearWatchedEvent()})},update:function(e){"play"===e?f.pausePlay.removeClass(d+"pause").addClass(d+"play").html(f.vars.playText):f.pausePlay.removeClass(d+"play").addClass(d+"pause").html(f.vars.pauseText)}},touch:function(){var s,o,r,a,l,c,e,n,d,u=!1,t=0,i=0,h=0;m?(p.style.msTouchAction="none",p._gesture=new MSGesture,(p._gesture.target=p).addEventListener("MSPointerDown",function(e){e.stopPropagation(),f.animating?e.preventDefault():(f.pause(),p._gesture.addPointer(e.pointerId),h=0,a=v?f.h:f.w,c=Number(new Date),r=y&&g&&f.animatingTo===f.last?0:y&&g?f.limit-(f.itemW+f.vars.itemMargin)*f.move*f.animatingTo:y&&f.currentSlide===f.last?f.limit:y?(f.itemW+f.vars.itemMargin)*f.move*f.currentSlide:g?(f.last-f.currentSlide+f.cloneOffset)*a:(f.currentSlide+f.cloneOffset)*a)},!1),p._slider=f,p.addEventListener("MSGestureChange",function(e){e.stopPropagation();var t=e.target._slider;if(t){var i=-e.translationX,n=-e.translationY;if(l=h+=v?n:i,u=v?Math.abs(h)<Math.abs(-i):Math.abs(h)<Math.abs(-n),e.detail===e.MSGESTURE_FLAG_INERTIA)return void _(function(){p._gesture.stop()});(!u||500<Number(new Date)-c)&&(e.preventDefault(),!w&&t.transitions&&(t.vars.animationLoop||(l=h/(0===t.currentSlide&&h<0||t.currentSlide===t.last&&0<h?Math.abs(h)/a+2:1)),t.setProps(r+l,"setTouch")))}},!1),p.addEventListener("MSGestureEnd",function(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!u&&null!==l){var i=g?-l:l,n=0<i?t.getTarget("next"):t.getTarget("prev");t.canAdvance(n)&&(Number(new Date)-c<550&&50<Math.abs(i)||Math.abs(i)>a/2)?t.flexAnimate(n,t.vars.pauseOnAction):w||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}r=l=o=s=null,h=0}},!1)):(e=function(e){f.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(f.pause(),a=v?f.h:f.w,c=Number(new Date),t=e.touches[0].pageX,i=e.touches[0].pageY,r=y&&g&&f.animatingTo===f.last?0:y&&g?f.limit-(f.itemW+f.vars.itemMargin)*f.move*f.animatingTo:y&&f.currentSlide===f.last?f.limit:y?(f.itemW+f.vars.itemMargin)*f.move*f.currentSlide:g?(f.last-f.currentSlide+f.cloneOffset)*a:(f.currentSlide+f.cloneOffset)*a,s=v?i:t,o=v?t:i,p.addEventListener("touchmove",n,!1),p.addEventListener("touchend",d,!1))},n=function(e){t=e.touches[0].pageX,i=e.touches[0].pageY,l=v?s-i:s-t,(!(u=v?Math.abs(l)<Math.abs(t-o):Math.abs(l)<Math.abs(i-o))||500<Number(new Date)-c)&&(e.preventDefault(),!w&&f.transitions&&(f.vars.animationLoop||(l/=0===f.currentSlide&&l<0||f.currentSlide===f.last&&0<l?Math.abs(l)/a+2:1),f.setProps(r+l,"setTouch")))},d=function(e){if(p.removeEventListener("touchmove",n,!1),f.animatingTo===f.currentSlide&&!u&&null!==l){var t=g?-l:l,i=0<t?f.getTarget("next"):f.getTarget("prev");f.canAdvance(i)&&(Number(new Date)-c<550&&50<Math.abs(t)||Math.abs(t)>a/2)?f.flexAnimate(i,f.vars.pauseOnAction):w||f.flexAnimate(f.currentSlide,f.vars.pauseOnAction,!0)}p.removeEventListener("touchend",d,!1),r=l=o=s=null},p.addEventListener("touchstart",e,!1))},resize:function(){!f.animating&&f.is(":visible")&&(y||f.doMath(),w?b.smoothHeight():y?(f.slides.width(f.computedW),f.update(f.pagingCount),f.setProps()):v?(f.viewport.height(f.h),f.setProps(f.h,"setTotal")):(f.vars.smoothHeight&&b.smoothHeight(),f.newSlides.width(f.computedW),f.setProps(f.computedW,"setTotal")))},smoothHeight:function(e){if(!v||w){var t=w?f:f.viewport;e?t.animate({height:f.slides.eq(f.animatingTo).innerHeight()},e):t.innerHeight(f.slides.eq(f.animatingTo).innerHeight())}},sync:function(e){var t=x(f.vars.sync).data("flexslider"),i=f.animatingTo;switch(e){case"animate":t.flexAnimate(i,f.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=x(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=b.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){b.pauseInvisible.isHidden()?f.startTimeout?clearTimeout(f.startTimeout):f.pause():f.started?f.play():0<f.vars.initDelay?setTimeout(f.play,f.vars.initDelay):f.play()})}},isHidden:function(){var e=b.pauseInvisible.getHiddenProp();return!!e&&document[e]},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(t),t=setTimeout(function(){l=""},3e3)}},f.flexAnimate=function(e,t,i,n,s){if(f.vars.animationLoop||e===f.currentSlide||(f.direction=e>f.currentSlide?"next":"prev"),h&&1===f.pagingCount&&(f.direction=f.currentItem<e?"next":"prev"),!f.animating&&(f.canAdvance(e,s)||i)&&f.is(":visible")){if(h&&n){var o=x(f.vars.asNavFor).data("flexslider");if(f.atEnd=0===e||e===f.count-1,o.flexAnimate(e,!0,!1,!0,s),f.direction=f.currentItem<e?"next":"prev",o.direction=f.direction,Math.ceil((e+1)/f.visible)-1===f.currentSlide||0===e)return f.currentItem=e,f.slides.removeClass(d+"active-slide").eq(e).addClass(d+"active-slide"),!1;f.currentItem=e,f.slides.removeClass(d+"active-slide").eq(e).addClass(d+"active-slide"),e=Math.floor(e/f.visible)}if(f.animating=!0,f.animatingTo=e,t&&f.pause(),f.vars.before(f),f.syncExists&&!s&&b.sync("animate"),f.vars.controlNav&&b.controlNav.active(),y||f.slides.removeClass(d+"active-slide").eq(e).addClass(d+"active-slide"),f.atEnd=0===e||e===f.last,f.vars.directionNav&&b.directionNav.update(),e===f.last&&(f.vars.end(f),f.vars.animationLoop||f.pause()),w)u?(f.slides.eq(f.currentSlide).css({opacity:0,zIndex:1}),f.slides.eq(e).css({opacity:1,zIndex:2}),f.wrapup(c)):(f.slides.eq(f.currentSlide).css({zIndex:1}).animate({opacity:0},f.vars.animationSpeed,f.vars.easing),f.slides.eq(e).css({zIndex:2}).animate({opacity:1},f.vars.animationSpeed,f.vars.easing,f.wrapup));else{var r,a,l,c=v?f.slides.filter(":first").height():f.computedW;y?(r=f.vars.itemMargin,a=(l=(f.itemW+r)*f.move*f.animatingTo)>f.limit&&1!==f.visible?f.limit:l):a=0===f.currentSlide&&e===f.count-1&&f.vars.animationLoop&&"next"!==f.direction?g?(f.count+f.cloneOffset)*c:0:f.currentSlide===f.last&&0===e&&f.vars.animationLoop&&"prev"!==f.direction?g?0:(f.count+1)*c:g?(f.count-1-e+f.cloneOffset)*c:(e+f.cloneOffset)*c,f.setProps(a,"",f.vars.animationSpeed),f.transitions?(f.vars.animationLoop&&f.atEnd||(f.animating=!1,f.currentSlide=f.animatingTo),f.container.unbind("webkitTransitionEnd transitionend"),f.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(f.ensureAnimationEnd),f.wrapup(c)}),clearTimeout(f.ensureAnimationEnd),f.ensureAnimationEnd=setTimeout(function(){f.wrapup(c)},f.vars.animationSpeed+100)):f.container.animate(f.args,f.vars.animationSpeed,f.vars.easing,function(){f.wrapup(c)})}f.vars.smoothHeight&&b.smoothHeight(f.vars.animationSpeed)}},f.wrapup=function(e){w||y||(0===f.currentSlide&&f.animatingTo===f.last&&f.vars.animationLoop?f.setProps(e,"jumpEnd"):f.currentSlide===f.last&&0===f.animatingTo&&f.vars.animationLoop&&f.setProps(e,"jumpStart")),f.animating=!1,f.currentSlide=f.animatingTo,f.vars.after(f)},f.animateSlides=function(){!f.animating&&i&&f.flexAnimate(f.getTarget("next"))},f.pause=function(){clearInterval(f.animatedSlides),f.animatedSlides=null,f.playing=!1,f.vars.pausePlay&&b.pausePlay.update("play"),f.syncExists&&b.sync("pause")},f.play=function(){f.playing&&clearInterval(f.animatedSlides),f.animatedSlides=f.animatedSlides||setInterval(f.animateSlides,f.vars.slideshowSpeed),f.started=f.playing=!0,f.vars.pausePlay&&b.pausePlay.update("pause"),f.syncExists&&b.sync("play")},f.stop=function(){f.pause(),f.stopped=!0},f.canAdvance=function(e,t){var i=h?f.pagingCount-1:f.last;return!(!t&&(!h||f.currentItem!==f.count-1||0!==e||"prev"!==f.direction)&&(h&&0===f.currentItem&&e===f.pagingCount-1&&"next"!==f.direction||e===f.currentSlide&&!h||!f.vars.animationLoop&&(f.atEnd&&0===f.currentSlide&&e===i&&"next"!==f.direction||f.atEnd&&f.currentSlide===i&&0===e&&"next"===f.direction)))},f.getTarget=function(e){return"next"===(f.direction=e)?f.currentSlide===f.last?0:f.currentSlide+1:0===f.currentSlide?f.last:f.currentSlide-1},f.setProps=function(e,t,i){var n,s=(n=e||(f.itemW+f.vars.itemMargin)*f.move*f.animatingTo,-1*function(){if(y)return"setTouch"===t?e:g&&f.animatingTo===f.last?0:g?f.limit-(f.itemW+f.vars.itemMargin)*f.move*f.animatingTo:f.animatingTo===f.last?f.limit:n;switch(t){case"setTotal":return g?(f.count-1-f.currentSlide+f.cloneOffset)*e:(f.currentSlide+f.cloneOffset)*e;case"setTouch":return e;case"jumpEnd":return g?e:f.count*e;case"jumpStart":return g?f.count*e:e;default:return e}}()+"px");f.transitions&&(s=v?"translate3d(0,"+s+",0)":"translate3d("+s+",0,0)",i=void 0!==i?i/1e3+"s":"0s",f.container.css("-"+f.pfx+"-transition-duration",i),f.container.css("transition-duration",i)),f.args[f.prop]=s,(f.transitions||void 0===i)&&f.container.css(f.args),f.container.css("transform",s)},f.setup=function(e){var t,i;w?(f.slides.css({width:"100%",float:"left",marginRight:"-100%",position:"relative"}),"init"===e&&(u?f.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+f.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(f.currentSlide).css({opacity:1,zIndex:2}):0==f.vars.fadeFirstSlide?f.slides.css({opacity:0,display:"block",zIndex:1}).eq(f.currentSlide).css({zIndex:2}).css({opacity:1}):f.slides.css({opacity:0,display:"block",zIndex:1}).eq(f.currentSlide).css({zIndex:2}).animate({opacity:1},f.vars.animationSpeed,f.vars.easing)),f.vars.smoothHeight&&b.smoothHeight()):("init"===e&&(f.viewport=x('<div class="'+d+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(f).append(f.container),f.cloneCount=0,f.cloneOffset=0,g&&(i=x.makeArray(f.slides).reverse(),f.slides=x(i),f.container.empty().append(f.slides))),f.vars.animationLoop&&!y&&(f.cloneCount=2,f.cloneOffset=1,"init"!==e&&f.container.find(".clone").remove(),f.container.append(b.uniqueID(f.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(b.uniqueID(f.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),f.newSlides=x(f.vars.selector,f),t=g?f.count-1-f.currentSlide+f.cloneOffset:f.currentSlide+f.cloneOffset,v&&!y?(f.container.height(200*(f.count+f.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){f.newSlides.css({display:"block"}),f.doMath(),f.viewport.height(f.h),f.setProps(t*f.h,"init")},"init"===e?100:0)):(f.container.width(200*(f.count+f.cloneCount)+"%"),f.setProps(t*f.computedW,"init"),setTimeout(function(){f.doMath(),f.newSlides.css({width:f.computedW,marginRight:f.computedM,float:"left",display:"block"}),f.vars.smoothHeight&&b.smoothHeight()},"init"===e?100:0))),y||f.slides.removeClass(d+"active-slide").eq(f.currentSlide).addClass(d+"active-slide"),f.vars.init(f)},f.doMath=function(){var e=f.slides.first(),t=f.vars.itemMargin,i=f.vars.minItems,n=f.vars.maxItems;f.w=void 0===f.viewport?f.width():f.viewport.width(),f.h=e.height(),f.boxPadding=e.outerWidth()-e.width(),y?(f.itemT=f.vars.itemWidth+t,f.itemM=t,f.minW=i?i*f.itemT:f.w,f.maxW=n?n*f.itemT-t:f.w,f.itemW=f.minW>f.w?(f.w-t*(i-1))/i:f.maxW<f.w?(f.w-t*(n-1))/n:f.vars.itemWidth>f.w?f.w:f.vars.itemWidth,f.visible=Math.floor(f.w/f.itemW),f.move=0<f.vars.move&&f.vars.move<f.visible?f.vars.move:f.visible,f.pagingCount=Math.ceil((f.count-f.visible)/f.move+1),f.last=f.pagingCount-1,f.limit=1===f.pagingCount?0:f.vars.itemWidth>f.w?f.itemW*(f.count-1)+t*(f.count-1):(f.itemW+t)*f.count-f.w-t):(f.itemW=f.w,f.itemM=t,f.pagingCount=f.count,f.last=f.count-1),f.computedW=f.itemW-f.boxPadding,f.computedM=f.itemM},f.update=function(e,t){f.doMath(),y||(e<f.currentSlide?f.currentSlide+=1:e<=f.currentSlide&&0!==e&&(f.currentSlide-=1),f.animatingTo=f.currentSlide),f.vars.controlNav&&!f.manualControls&&("add"===t&&!y||f.pagingCount>f.controlNav.length?b.controlNav.update("add"):("remove"===t&&!y||f.pagingCount<f.controlNav.length)&&(y&&f.currentSlide>f.last&&(f.currentSlide-=1,f.animatingTo-=1),b.controlNav.update("remove",f.last))),f.vars.directionNav&&b.directionNav.update()},f.addSlide=function(e,t){var i=x(e);f.count+=1,f.last=f.count-1,v&&g?void 0!==t?f.slides.eq(f.count-t).after(i):f.container.prepend(i):void 0!==t?f.slides.eq(t).before(i):f.container.append(i),f.update(t,"add"),f.slides=x(f.vars.selector+":not(.clone)",f),f.setup(),f.vars.added(f)},f.removeSlide=function(e){var t=isNaN(e)?f.slides.index(x(e)):e;f.count-=1,f.last=f.count-1,isNaN(e)?x(e,f.slides).remove():v&&g?f.slides.eq(f.last).remove():f.slides.eq(e).remove(),f.doMath(),f.update(t,"remove"),f.slides=x(f.vars.selector+":not(.clone)",f),f.setup(),f.vars.removed(f)},b.init()},x(window).blur(function(e){i=!1}).focus(function(e){i=!0}),x.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},x.fn.flexslider=function(n){if(void 0===n&&(n={}),"object"==(void 0===n?"undefined":t(n)))return this.each(function(){var e=x(this),t=n.selector?n.selector:".slides > li",i=e.find(t);1===i.length&&!1===n.allowOneSlide||0===i.length?(i.fadeIn(400),n.start&&n.start(e)):void 0===e.data("flexslider")&&new x.flexslider(this,n)});var e=x(this).data("flexslider");switch(n){case"play":e.play();break;case"pause":e.pause();break;case"stop":e.stop();break;case"next":e.flexAnimate(e.getTarget("next"),!0);break;case"prev":case"previous":e.flexAnimate(e.getTarget("prev"),!0);break;default:"number"==typeof n&&e.flexAnimate(n,!0)}}}).call(this,e("timers").setImmediate)},{timers:14}],21:[function(e,t,i){"use strict";var C,n;C=jQuery,n={item:3,autoWidth:!1,slideMove:1,slideMargin:10,addClass:"",mode:"slide",useCSS:!0,cssEasing:"ease",easing:"linear",speed:400,auto:!1,pauseOnHover:!1,loop:!1,slideEndAnimation:!0,pause:2e3,keyPress:!1,controls:!0,prevHtml:"",nextHtml:"",rtl:!1,adaptiveHeight:!1,vertical:!1,verticalHeight:500,vThumbWidth:100,thumbItem:10,pager:!0,gallery:!1,galleryMargin:5,thumbMargin:5,currentPagerPosition:"middle",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40,responsive:[],onBeforeStart:function(e){},onSliderLoad:function(e){},onBeforeSlide:function(e,t){},onAfterSlide:function(e,t){},onBeforeNextSlide:function(e,t){},onBeforePrevSlide:function(e,t){}},C.fn.lightSlider=function(e){if(0===this.length)return this;if(1<this.length)return this.each(function(){C(this).lightSlider(e)}),this;var i={},d=C.extend(!0,{},n,e),s={},u=this;i.$el=this,"fade"===d.mode&&(d.vertical=!1);var c=u.children(),o=C(window).width(),r=null,a=0,h=0,t=!1,p=0,f="",m=0,v=!0===d.vertical?"height":"width",g=!0===d.vertical?"margin-bottom":"margin-right",y=0,w=0,b=0,_=0,l=null,x="ontouchstart"in document.documentElement,S={chbreakpoint:function(){if(o=C(window).width(),d.responsive.length){var e;if(!1===d.autoWidth&&(e=d.item),o<d.responsive[0].breakpoint)for(var t=0;t<d.responsive.length;t++)o<d.responsive[t].breakpoint&&(d.responsive[t].breakpoint,r=d.responsive[t]);if(null!=r)for(var i in r.settings)r.settings.hasOwnProperty(i)&&((void 0===s[i]||null===s[i])&&(s[i]=d[i]),d[i]=r.settings[i]);if(!C.isEmptyObject(s)&&o>d.responsive[0].breakpoint)for(var n in s)s.hasOwnProperty(n)&&(d[n]=s[n]);!1===d.autoWidth&&0<y&&0<b&&e!==d.item&&(m=Math.round(y/((b+d.slideMargin)*d.slideMove)))}},calSW:function(){!1===d.autoWidth&&(b=(p-(d.item*d.slideMargin-d.slideMargin))/d.item)},calWidth:function(e){var t=!0===e?f.find(".lslide").length:c.length;if(!1===d.autoWidth)h=t*(b+d.slideMargin);else for(var i=h=0;i<t;i++)h+=parseInt(c.eq(i).width())+d.slideMargin;return h}};return(i={doCss:function(){return!(!d.useCSS||!function(){for(var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],t=document.documentElement,i=0;i<e.length;i++)if(e[i]in t.style)return!0}())},keyPress:function(){d.keyPress&&C(document).on("keyup.lightslider",function(e){C(":focus").is("input, textarea")||(e.preventDefault?e.preventDefault():e.returnValue=!1,37===e.keyCode?u.goToPrevSlide():39===e.keyCode&&u.goToNextSlide())})},controls:function(){d.controls&&(u.after('<div class="lSAction"><a class="lSPrev">'+d.prevHtml+'</a><a class="lSNext">'+d.nextHtml+"</a></div>"),d.autoWidth?S.calWidth(!1)<p&&f.find(".lSAction").hide():a<=d.item&&f.find(".lSAction").hide(),f.find(".lSAction a").on("click",function(e){return e.preventDefault?e.preventDefault():e.returnValue=!1,"lSPrev"===C(this).attr("class")?u.goToPrevSlide():u.goToNextSlide(),!1}))},initialStyle:function(){var l=this;"fade"===d.mode&&(d.autoWidth=!1,d.slideEndAnimation=!1),d.auto&&(d.slideEndAnimation=!1),d.autoWidth&&(d.slideMove=1,d.item=1),d.loop&&(d.slideMove=1,d.freeMove=!1),d.onBeforeStart.call(this,u),S.chbreakpoint(),u.addClass("lightSlider").wrap('<div class="lSSlideOuter '+d.addClass+'"><div class="lSSlideWrapper"></div></div>'),f=u.parent(".lSSlideWrapper"),!0===d.rtl&&f.parent().addClass("lSrtl"),d.vertical?(f.parent().addClass("vertical"),p=d.verticalHeight,f.css("height",p+"px")):p=u.outerWidth(),c.addClass("lslide"),!0===d.loop&&"slide"===d.mode&&(S.calSW(),S.clone=function(){if(S.calWidth(!0)>p){for(var e=0,t=0,i=0;i<c.length&&(t++,!((e+=parseInt(u.find(".lslide").eq(i).width())+d.slideMargin)>=p+d.slideMargin));i++);var n=!0===d.autoWidth?t:d.item;if(n<u.find(".clone.left").length)for(var s=0;s<u.find(".clone.left").length-n;s++)c.eq(s).remove();if(n<u.find(".clone.right").length)for(var o=c.length-1;o>c.length-1-u.find(".clone.right").length;o--)m--,c.eq(o).remove();for(var r=u.find(".clone.right").length;r<n;r++)u.find(".lslide").eq(r).clone().removeClass("lslide").addClass("clone right").appendTo(u),m++;for(var a=u.find(".lslide").length-u.find(".clone.left").length;a>u.find(".lslide").length-n;a--)u.find(".lslide").eq(a-1).clone().removeClass("lslide").addClass("clone left").prependTo(u);c=u.children()}else c.hasClass("clone")&&(u.find(".clone").remove(),l.move(u,0))},S.clone()),S.sSW=function(){a=c.length,!0===d.rtl&&!1===d.vertical&&(g="margin-left"),!1===d.autoWidth&&c.css(v,b+"px"),c.css(g,d.slideMargin+"px"),h=S.calWidth(!1),u.css(v,h+"px"),!0===d.loop&&"slide"===d.mode&&!1===t&&(m=u.find(".clone.left").length)},S.calL=function(){c=u.children(),a=c.length},this.doCss()&&f.addClass("usingCss"),S.calL(),"slide"===d.mode?(S.calSW(),S.sSW(),!0===d.loop&&(y=l.slideValue(),this.move(u,y)),!1===d.vertical&&this.setHeight(u,!1)):(this.setHeight(u,!0),u.addClass("lSFade"),this.doCss()||(c.fadeOut(0),c.eq(m).fadeIn(0))),!0===d.loop&&"slide"===d.mode?c.eq(m).addClass("active"):c.first().addClass("active")},pager:function(){var c=this;if(S.createPager=function(){_=(p-(d.thumbItem*d.thumbMargin-d.thumbMargin))/d.thumbItem;var e=f.find(".lslide"),t=f.find(".lslide").length,i=0,n="",s=0;for(i=0;i<t;i++){"slide"===d.mode&&(d.autoWidth?s+=(parseInt(e.eq(i).width())+d.slideMargin)*d.slideMove:s=i*(b+d.slideMargin)*d.slideMove);var o=e.eq(i*d.slideMove).attr("data-thumb");if(n+=!0===d.gallery?'<li style="width:100%;'+v+":"+_+"px;"+g+":"+d.thumbMargin+'px"><a href="#"><img src="'+o+'" /></a></li>':'<li><a href="#">'+(i+1)+"</a></li>","slide"===d.mode&&s>=h-p-d.slideMargin){i+=1;var r=2;d.autoWidth&&(n+='<li><a href="#">'+(i+1)+"</a></li>",r=1),i<r?(n=null,f.parent().addClass("noPager")):f.parent().removeClass("noPager");break}}var a=f.parent();a.find(".lSPager").html(n),!0===d.gallery&&(!0===d.vertical&&a.find(".lSPager").css("width",d.vThumbWidth+"px"),w=i*(d.thumbMargin+_)+.5,a.find(".lSPager").css({property:w+"px","transition-duration":d.speed+"ms"}),!0===d.vertical&&f.parent().css("padding-right",d.vThumbWidth+d.galleryMargin+"px"),a.find(".lSPager").css(v,w+"px"));var l=a.find(".lSPager").find("li");l.first().addClass("active"),l.on("click",function(){return!0===d.loop&&"slide"===d.mode?m+=l.index(this)-a.find(".lSPager").find("li.active").index():m=l.index(this),u.mode(!1),!0===d.gallery&&c.slideThumb(),!1})},d.pager){var e="lSpg";d.gallery&&(e="lSGallery"),f.after('<ul class="lSPager '+e+'"></ul>');var t=d.vertical?"margin-left":"margin-top";f.parent().find(".lSPager").css(t,d.galleryMargin+"px"),S.createPager()}setTimeout(function(){S.init()},0)},setHeight:function(n,s){var o=null,e=this;o=d.loop?n.children(".lslide ").first():n.children().first();var t=function(){var e=o.outerHeight(),t=0,i=e;s&&(e=0,t=100*i/p),n.css({height:e+"px","padding-bottom":t+"%"})};t(),o.find("img").length?o.find("img")[0].complete?(t(),l||e.auto()):o.find("img").on("load",function(){setTimeout(function(){t(),l||e.auto()},100)}):l||e.auto()},active:function(e,t){this.doCss()&&"fade"===d.mode&&f.addClass("on");var i,n,s=0;m*d.slideMove<a?(e.removeClass("active"),this.doCss()||"fade"!==d.mode||!1!==t||e.fadeOut(d.speed),s=!0===t?m:m*d.slideMove,!0===t&&(n=(i=e.length)-1,i<=s+1&&(s=n)),!0===d.loop&&"slide"===d.mode&&(s=!0===t?m-u.find(".clone.left").length:m*d.slideMove,!0===t&&(n=(i=e.length)-1,s+1===i?s=n:i<s+1&&(s=0))),this.doCss()||"fade"!==d.mode||!1!==t||e.eq(s).fadeIn(d.speed),e.eq(s).addClass("active")):(e.removeClass("active"),e.eq(e.length-1).addClass("active"),this.doCss()||"fade"!==d.mode||!1!==t||(e.fadeOut(d.speed),e.eq(s).fadeIn(d.speed)))},move:function(e,t){!0===d.rtl&&(t=-t),this.doCss()?e.css(!0===d.vertical?{transform:"translate3d(0px, "+-t+"px, 0px)","-webkit-transform":"translate3d(0px, "+-t+"px, 0px)"}:{transform:"translate3d("+-t+"px, 0px, 0px)","-webkit-transform":"translate3d("+-t+"px, 0px, 0px)"}):!0===d.vertical?e.css("position","relative").animate({top:-t+"px"},d.speed,d.easing):e.css("position","relative").animate({left:-t+"px"},d.speed,d.easing);var i=f.parent().find(".lSPager").find("li");this.active(i,!0)},fade:function(){this.active(c,!1);var e=f.parent().find(".lSPager").find("li");this.active(e,!0)},slide:function(){var e=this;S.calSlide=function(){p<h&&(y=e.slideValue(),e.active(c,!1),y>h-p-d.slideMargin?y=h-p-d.slideMargin:y<0&&(y=0),e.move(u,y),!0===d.loop&&"slide"===d.mode&&(m>=a-u.find(".clone.left").length/d.slideMove&&e.resetSlide(u.find(".clone.left").length),0===m&&e.resetSlide(f.find(".lslide").length)))},S.calSlide()},resetSlide:function(e){var t=this;f.find(".lSAction a").addClass("disabled"),setTimeout(function(){m=e,f.css("transition-duration","0ms"),y=t.slideValue(),t.active(c,!1),i.move(u,y),setTimeout(function(){f.css("transition-duration",d.speed+"ms"),f.find(".lSAction a").removeClass("disabled")},50)},d.speed+100)},slideValue:function(){var e=0;if(!1===d.autoWidth)e=m*(b+d.slideMargin)*d.slideMove;else for(var t=e=0;t<m;t++)e+=parseInt(c.eq(t).width())+d.slideMargin;return e},slideThumb:function(){var e;switch(d.currentPagerPosition){case"left":e=0;break;case"middle":e=p/2-_/2;break;case"right":e=p-_}var t=m-u.find(".clone.left").length,i=f.parent().find(".lSPager");"slide"===d.mode&&!0===d.loop&&(t>=i.children().length?t=0:t<0&&(t=i.children().length));var n=t*(_+d.thumbMargin)-e;w<n+p&&(n=w-p-d.thumbMargin),n<0&&(n=0),this.move(i,n)},auto:function(){d.auto&&(clearInterval(l),l=setInterval(function(){u.goToNextSlide()},d.pause))},pauseOnHover:function(){var e=this;d.auto&&d.pauseOnHover&&(f.on("mouseenter",function(){C(this).addClass("ls-hover"),u.pause(),d.auto=!0}),f.on("mouseleave",function(){C(this).removeClass("ls-hover"),f.find(".lightSlider").hasClass("lsGrabbing")||e.auto()}))},touchMove:function(e,t){if(f.css("transition-duration","0ms"),"slide"===d.mode){var i=y-(e-t);if(i>=h-p-d.slideMargin)if(!1===d.freeMove)i=h-p-d.slideMargin;else{var n=h-p-d.slideMargin;i=n+(i-n)/5}else i<0&&(!1===d.freeMove?i=0:i/=5);this.move(u,i)}},touchEnd:function(e){if(f.css("transition-duration",d.speed+"ms"),"slide"===d.mode){var o=!1,t=!0;(y-=e)>h-p-d.slideMargin?(y=h-p-d.slideMargin,!1===d.autoWidth&&(o=!0)):y<0&&(y=0);var i=function(e){var t=0;if(o||e&&(t=1),d.autoWidth)for(var i=0,n=0;n<c.length&&(i+=parseInt(c.eq(n).width())+d.slideMargin,m=n+t,!(y<=i));n++);else{var s=y/((b+d.slideMargin)*d.slideMove);m=parseInt(s)+t,y>=h-p-d.slideMargin&&s%1!=0&&m++}};e>=d.swipeThreshold?(i(!1),t=!1):e<=-d.swipeThreshold&&(i(!0),t=!1),u.mode(t),this.slideThumb()}else e>=d.swipeThreshold?u.goToPrevSlide():e<=-d.swipeThreshold&&u.goToNextSlide()},enableDrag:function(){var i=this;if(!x){var n=0,s=0,o=!1;f.find(".lightSlider").addClass("lsGrab"),f.on("mousedown",function(e){return!(h<p&&0!==h)&&void("lSPrev"!==C(e.target).attr("class")&&"lSNext"!==C(e.target).attr("class")&&(n=!0===d.vertical?e.pageY:e.pageX,o=!0,e.preventDefault?e.preventDefault():e.returnValue=!1,f.scrollLeft+=1,f.scrollLeft-=1,f.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"),clearInterval(l)))}),C(window).on("mousemove",function(e){o&&(s=!0===d.vertical?e.pageY:e.pageX,i.touchMove(s,n))}),C(window).on("mouseup",function(e){if(o){f.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab");var t=(s=!(o=!1)===d.vertical?e.pageY:e.pageX)-n;Math.abs(t)>=d.swipeThreshold&&C(window).on("click.ls",function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopImmediatePropagation(),e.stopPropagation(),C(window).off("click.ls")}),i.touchEnd(t)}})}},enableTouch:function(){var s=this;if(x){var o={},r={};f.on("touchstart",function(e){r=e.originalEvent.targetTouches[0],o.pageX=e.originalEvent.targetTouches[0].pageX,o.pageY=e.originalEvent.targetTouches[0].pageY,clearInterval(l)}),f.on("touchmove",function(e){if(h<p&&0!==h)return!1;var t=e.originalEvent;r=t.targetTouches[0];var i=Math.abs(r.pageX-o.pageX),n=Math.abs(r.pageY-o.pageY);!0===d.vertical?(i<3*n&&e.preventDefault(),s.touchMove(r.pageY,o.pageY)):(n<3*i&&e.preventDefault(),s.touchMove(r.pageX,o.pageX))}),f.on("touchend",function(){if(h<p&&0!==h)return!1;var e;e=!0===d.vertical?r.pageY-o.pageY:r.pageX-o.pageX,s.touchEnd(e)})}},build:function(){var e=this;e.initialStyle(),this.doCss()&&(!0===d.enableTouch&&e.enableTouch(),!0===d.enableDrag&&e.enableDrag()),C(window).on("focus",function(){e.auto()}),C(window).on("blur",function(){clearInterval(l)}),e.pager(),e.pauseOnHover(),e.controls(),e.keyPress()}}).build(),S.init=function(){S.chbreakpoint(),!0===d.vertical?(p=1<d.item?d.verticalHeight:c.outerHeight(),f.css("height",p+"px")):p=f.outerWidth(),!0===d.loop&&"slide"===d.mode&&S.clone(),S.calL(),"slide"===d.mode&&u.removeClass("lSSlide"),"slide"===d.mode&&(S.calSW(),S.sSW()),setTimeout(function(){"slide"===d.mode&&u.addClass("lSSlide")},1e3),d.pager&&S.createPager(),!0===d.adaptiveHeight&&!1===d.vertical&&u.css("height",c.eq(m).outerHeight(!0)),!1===d.adaptiveHeight&&("slide"===d.mode?!1===d.vertical?i.setHeight(u,!1):i.auto():i.setHeight(u,!0)),!0===d.gallery&&i.slideThumb(),"slide"===d.mode&&i.slide(),!1===d.autoWidth?c.length<=d.item?f.find(".lSAction").hide():f.find(".lSAction").show():S.calWidth(!1)<p&&0!==h?f.find(".lSAction").hide():f.find(".lSAction").show()},u.goToPrevSlide=function(){0<m?(d.onBeforePrevSlide.call(this,u,m),m--,u.mode(!1),!0===d.gallery&&i.slideThumb()):!0===d.loop?(d.onBeforePrevSlide.call(this,u,m),"fade"===d.mode&&(m=parseInt((a-1)/d.slideMove)),u.mode(!1),!0===d.gallery&&i.slideThumb()):!0===d.slideEndAnimation&&(u.addClass("leftEnd"),setTimeout(function(){u.removeClass("leftEnd")},400))},u.goToNextSlide=function(){var e=!0;"slide"===d.mode&&(e=i.slideValue()<h-p-d.slideMargin),m*d.slideMove<a-d.slideMove&&e?(d.onBeforeNextSlide.call(this,u,m),m++,u.mode(!1),!0===d.gallery&&i.slideThumb()):!0===d.loop?(d.onBeforeNextSlide.call(this,u,m),m=0,u.mode(!1),!0===d.gallery&&i.slideThumb()):!0===d.slideEndAnimation&&(u.addClass("rightEnd"),setTimeout(function(){u.removeClass("rightEnd")},400))},u.mode=function(e){!0===d.adaptiveHeight&&!1===d.vertical&&u.css("height",c.eq(m).outerHeight(!0)),!1===t&&("slide"===d.mode?i.doCss()&&(u.addClass("lSSlide"),""!==d.speed&&f.css("transition-duration",d.speed+"ms"),""!==d.cssEasing&&f.css("transition-timing-function",d.cssEasing)):i.doCss()&&(""!==d.speed&&u.css("transition-duration",d.speed+"ms"),""!==d.cssEasing&&u.css("transition-timing-function",d.cssEasing))),e||d.onBeforeSlide.call(this,u,m),"slide"===d.mode?i.slide():i.fade(),f.hasClass("ls-hover")||i.auto(),setTimeout(function(){e||d.onAfterSlide.call(this,u,m)},d.speed),t=!0},u.play=function(){u.goToNextSlide(),d.auto=!0,i.auto()},u.pause=function(){d.auto=!1,clearInterval(l)},u.refresh=function(){S.init()},u.getCurrentSlideCount=function(){var e=m;if(d.loop){var t=f.find(".lslide").length,i=u.find(".clone.left").length;e=m<=i-1?t+(m-i):t+i<=m?m-t-i:m-i}return e+1},u.getTotalSlideCount=function(){return f.find(".lslide").length},u.goToSlide=function(e){m=d.loop?e+u.find(".clone.left").length-1:e,u.mode(!1),!0===d.gallery&&i.slideThumb()},u.destroy=function(){u.lightSlider&&(u.goToPrevSlide=function(){},u.goToNextSlide=function(){},u.mode=function(){},u.play=function(){},u.pause=function(){},u.refresh=function(){},u.getCurrentSlideCount=function(){},u.getTotalSlideCount=function(){},u.goToSlide=function(){},u.lightSlider=null,S={init:function(){}},u.parent().parent().find(".lSAction, .lSPager").remove(),u.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(),u.children().removeAttr("style"),c.removeClass("lslide active"),u.find(".clone").remove(),l=c=null,t=!1,m=0)},setTimeout(function(){d.onSliderLoad.call(this,u)},10),C(window).on("resize orientationchange",function(e){setTimeout(function(){e.preventDefault?e.preventDefault():e.returnValue=!1,S.init()},200)}),this}},{}],22:[function(e,t,i){"use strict";!function(a,i){var e;a.migrateVersion="3.0.0",(e=i.console&&i.console.log&&function(){i.console.log.apply(i.console,arguments)})&&(a&&!/^[12]\./.test(a.fn.jquery)||e("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),a.migrateWarnings&&e("JQMIGRATE: Migrate plugin loaded multiple times"),e("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion));var n={};function l(e){var t=i.console;n[e]||(n[e]=!0,a.migrateWarnings.push(e),t&&t.warn&&!a.migrateMute&&(t.warn("JQMIGRATE: "+e),a.migrateTrace&&t.trace&&t.trace()))}function t(e,t,i,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return l(n),i}})}a.migrateWarnings=[],void 0===a.migrateTrace&&(a.migrateTrace=!0),a.migrateReset=function(){n={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&l("jQuery is not compatible with Quirks Mode");var s,o=a.fn.init,r=a.isNumeric,c=a.find,d=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;for(s in a.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(l("jQuery( '#' ) is not a valid selector"),t[0]=[]),o.apply(this,t)},a.fn.init.prototype=a.fn,a.find=function(t){var i=Array.prototype.slice.call(arguments);if("string"==typeof t&&d.test(t))try{document.querySelector(t)}catch(e){t=t.replace(u,function(e,t,i,n){return"["+t+i+'"'+n+'"]'});try{document.querySelector(t),l("Attribute selector with '#' must be quoted: "+i[0]),i[0]=t}catch(e){l("Attribute selector with '#' was not fixed: "+i[0])}}return c.apply(this,i)},c)Object.prototype.hasOwnProperty.call(c,s)&&(a.find[s]=c[s]);a.fn.size=function(){return l("jQuery.fn.size() is deprecated; use the .length property"),this.length},a.parseJSON=function(){return l("jQuery.parseJSON is deprecated; use JSON.parse"),JSON.parse.apply(null,arguments)},a.isNumeric=function(e){var t,i,n=r(e),s=(i=(t=e)&&t.toString(),!a.isArray(t)&&0<=i-parseFloat(i)+1);return n!==s&&l("jQuery.isNumeric() should not be called on constructed objects"),s},t(a,"unique",a.uniqueSort,"jQuery.unique is deprecated, use jQuery.uniqueSort"),t(a.expr,"filters",a.expr.pseudos,"jQuery.expr.filters is now jQuery.expr.pseudos"),t(a.expr,":",a.expr.pseudos,'jQuery.expr[":"] is now jQuery.expr.pseudos');var h=a.ajax;a.ajax=function(){var e=h.apply(this,arguments);return e.promise&&(t(e,"success",e.done,"jQXHR.success is deprecated and removed"),t(e,"error",e.fail,"jQXHR.error is deprecated and removed"),t(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e};var p=a.fn.removeAttr,f=a.fn.toggleClass,m=/\S+/g;a.fn.removeAttr=function(e){var i=this;return a.each(e.match(m),function(e,t){a.expr.match.bool.test(t)&&(l("jQuery.fn.removeAttr no longer sets boolean properties: "+t),i.prop(t,!1))}),p.apply(this,arguments)};var v=!(a.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?f.apply(this,arguments):(l("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&a.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":a.data(this,"__className__")||"")}))});a.swap&&a.each(["height","width","reliableMarginRight"],function(e,t){var i=a.cssHooks[t]&&a.cssHooks[t].get;i&&(a.cssHooks[t].get=function(){var e;return v=!0,e=i.apply(this,arguments),v=!1,e})}),a.swap=function(e,t,i,n){var s,o,r={};for(o in v||l("jQuery.swap() is undocumented and deprecated"),t)r[o]=e.style[o],e.style[o]=t[o];for(o in s=i.apply(e,n||[]),t)e.style[o]=r[o];return s};var g=a.data;a.data=function(e,t,i){var n;return t&&t!==a.camelCase(t)&&(n=a.hasData(e)&&g.call(this,e))&&t in n?(l("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=i),n[t]):g.apply(this,arguments)};var y=a.Tween.prototype.run;a.Tween.prototype.run=function(e){1<a.easing[this.easing].length&&(l('easing function "jQuery.easing.'+this.easing.toString()+'" should use only first argument'),a.easing[this.easing]=a.easing[this.easing].bind(a.easing,e,this.options.duration*e,0,1,this.options.duration)),y.apply(this,arguments)};var w=a.fn.load,b=a.event.fix;a.event.props=[],a.event.fixHooks={},a.event.fix=function(e){var t,i=e.type,n=this.fixHooks[i],s=a.event.props;if(s.length)for(l("jQuery.event.props are deprecated and removed: "+s.join());s.length;)a.event.addProp(s.pop());if(n&&!n._migrated_&&(n._migrated_=!0,l("jQuery.event.fixHooks are deprecated and removed: "+i),(s=n.props)&&s.length))for(;s.length;)a.event.addProp(s.pop());return t=b.call(this,e),n&&n.filter?n.filter(t,e):t},a.each(["load","unload","error"],function(e,t){a.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?w.apply(this,e):(l("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),a(function(){a(document).triggerHandler("ready")}),a.event.special.ready={setup:function(){this===document&&l("'ready' event is deprecated")}},a.fn.extend({bind:function(e,t,i){return l("jQuery.fn.bind() is deprecated"),this.on(e,null,t,i)},unbind:function(e,t){return l("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,i,n){return l("jQuery.fn.delegate() is deprecated"),this.on(t,e,i,n)},undelegate:function(e,t,i){return l("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",i)}});var _=a.fn.offset;a.fn.offset=function(){var e,t=this[0],i={top:0,left:0};return t&&t.nodeType?(e=(t.ownerDocument||document).documentElement,a.contains(e,t)?_.apply(this,arguments):(l("jQuery.fn.offset() requires an element connected to a document"),i)):(l("jQuery.fn.offset() requires a valid DOM element"),i)};var x=a.param;a.param=function(e,t){var i=a.ajaxSettings&&a.ajaxSettings.traditional;return void 0===t&&i&&(l("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=i),x.call(this,e,t)};var S=a.fn.andSelf||a.fn.addBack;a.fn.andSelf=function(){return l("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),S.apply(this,arguments)};var C=a.Deferred,T=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(e){var o=C(),r=o.promise();return o.pipe=r.pipe=function(){var s=arguments;return l("deferred.pipe() is deprecated"),a.Deferred(function(n){a.each(T,function(e,t){var i=a.isFunction(s[e])&&s[e];o[t[1]](function(){var e=i&&i.apply(this,arguments);e&&a.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===r?n.promise():this,i?[e]:arguments)})}),s=null}).promise()},e&&e.call(o,o),o}}(jQuery,window)},{}],23:[function(e,t,i){"use strict";var n,s,o,r,a,l,c,d,u,h,p,f,m,v,g,y,w,b,_,x,S,C,T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(l,i,s,o){function c(e,t){this.settings=null,this.options=l.extend({},c.Defaults,t),this.$element=l(e),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},l.each(["onResize","onThrottledResize"],l.proxy(function(e,t){this._handlers[t]=l.proxy(this[t],this)},this)),l.each(c.Plugins,l.proxy(function(e,t){this._plugins[e.charAt(0).toLowerCase()+e.slice(1)]=new t(this)},this)),l.each(c.Workers,l.proxy(function(e,t){this._pipe.push({filter:t.filter,run:l.proxy(t.run,this)})},this)),this.setup(),this.initialize()}c.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:i,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},c.Width={Default:"default",Inner:"inner",Outer:"outer"},c.Type={Event:"event",State:"state"},c.Plugins={},c.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(e){e.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(e){var t=this.settings.margin||"",i=!this.settings.autoWidth,n=this.settings.rtl,s={width:"auto","margin-left":n?t:"","margin-right":n?"":t};!i&&this.$stage.children().css(s),e.css=s}},{filter:["width","items","settings"],run:function(e){var t=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,i=null,n=this._items.length,s=!this.settings.autoWidth,o=[];for(e.items={merge:!1,width:t};n--;)i=this._mergers[n],i=this.settings.mergeFit&&Math.min(i,this.settings.items)||i,e.items.merge=1<i||e.items.merge,o[n]=s?t*i:this._items[n].width();this._widths=o}},{filter:["items","settings"],run:function(){var e=[],t=this._items,i=this.settings,n=Math.max(2*i.items,4),s=2*Math.ceil(t.length/2),o=i.loop&&t.length?i.rewind?n:Math.max(n,s):0,r="",a="";for(o/=2;o--;)e.push(this.normalize(e.length/2,!0)),r+=t[e[e.length-1]][0].outerHTML,e.push(this.normalize(t.length-1-(e.length-1)/2,!0)),a=t[e[e.length-1]][0].outerHTML+a;this._clones=e,l(r).addClass("cloned").appendTo(this.$stage),l(a).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var e=this.settings.rtl?1:-1,t=this._clones.length+this._items.length,i=-1,n=0,s=0,o=[];++i<t;)n=o[i-1]||0,s=this._widths[this.relative(i)]+this.settings.margin,o.push(n+s*e);this._coordinates=o}},{filter:["width","items","settings"],run:function(){var e=this.settings.stagePadding,t=this._coordinates,i={width:Math.ceil(Math.abs(t[t.length-1]))+2*e,"padding-left":e||"","padding-right":e||""};this.$stage.css(i)}},{filter:["width","items","settings"],run:function(e){var t=this._coordinates.length,i=!this.settings.autoWidth,n=this.$stage.children();if(i&&e.items.merge)for(;t--;)e.css.width=this._widths[this.relative(t)],n.eq(t).css(e.css);else i&&(e.css.width=e.items.width,n.css(e.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(e){e.current=e.current?this.$stage.children().index(e.current):0,e.current=Math.max(this.minimum(),Math.min(this.maximum(),e.current)),this.reset(e.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var e,t,i,n,s=this.settings.rtl?1:-1,o=2*this.settings.stagePadding,r=this.coordinates(this.current())+o,a=r+this.width()*s,l=[];for(i=0,n=this._coordinates.length;i<n;i++)e=this._coordinates[i-1]||0,t=Math.abs(this._coordinates[i])+o*s,(this.op(e,"<=",r)&&this.op(e,">",a)||this.op(t,"<",r)&&this.op(t,">",a))&&l.push(i);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+l.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],c.prototype.initialize=function(){var e,t,i;(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading"))&&(e=this.$element.find("img"),t=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:o,i=this.$element.children(t).width(),e.length&&i<=0&&this.preloadAutoWidthImages(e));this.$element.addClass(this.options.loadingClass),this.$stage=l("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},c.prototype.setup=function(){var t=this.viewport(),e=this.options.responsive,i=-1,n=null;e?(l.each(e,function(e){e<=t&&i<e&&(i=Number(e))}),"function"==typeof(n=l.extend({},this.options,e[i])).stagePadding&&(n.stagePadding=n.stagePadding()),delete n.responsive,n.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+i))):n=l.extend({},this.options),this.trigger("change",{property:{name:"settings",value:n}}),this._breakpoint=i,this.settings=n,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},c.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},c.prototype.prepare=function(e){var t=this.trigger("prepare",{content:e});return t.data||(t.data=l("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(e)),this.trigger("prepared",{content:t.data}),t.data},c.prototype.update=function(){for(var e=0,t=this._pipe.length,i=l.proxy(function(e){return this[e]},this._invalidated),n={};e<t;)(this._invalidated.all||0<l.grep(this._pipe[e].filter,i).length)&&this._pipe[e].run(n),e++;this._invalidated={},!this.is("valid")&&this.enter("valid")},c.prototype.width=function(e){switch(e=e||c.Width.Default){case c.Width.Inner:case c.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},c.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},c.prototype.onThrottledResize=function(){i.clearTimeout(this.resizeTimer),this.resizeTimer=i.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},c.prototype.onResize=function(){return!!this._items.length&&this._width!==this.$element.width()&&!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))},c.prototype.registerEventHandlers=function(){l.support.transition&&this.$stage.on(l.support.transition.end+".owl.core",l.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(i,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",l.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",l.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",l.proxy(this.onDragEnd,this)))},c.prototype.onDragStart=function(e){var t=null;3!==e.which&&(l.support.transform?t={x:(t=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","))[16===t.length?12:4],y:t[16===t.length?13:5]}:(t=this.$stage.position(),t={x:this.settings.rtl?t.left+this.$stage.width()-this.width()+this.settings.margin:t.left,y:t.top}),this.is("animating")&&(l.support.transform?this.animate(t.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===e.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=l(e.target),this._drag.stage.start=t,this._drag.stage.current=t,this._drag.pointer=this.pointer(e),l(s).on("mouseup.owl.core touchend.owl.core",l.proxy(this.onDragEnd,this)),l(s).one("mousemove.owl.core touchmove.owl.core",l.proxy(function(e){var t=this.difference(this._drag.pointer,this.pointer(e));l(s).on("mousemove.owl.core touchmove.owl.core",l.proxy(this.onDragMove,this)),Math.abs(t.x)<Math.abs(t.y)&&this.is("valid")||(e.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},c.prototype.onDragMove=function(e){var t=null,i=null,n=null,s=this.difference(this._drag.pointer,this.pointer(e)),o=this.difference(this._drag.stage.start,s);this.is("dragging")&&(e.preventDefault(),this.settings.loop?(t=this.coordinates(this.minimum()),i=this.coordinates(this.maximum()+1)-t,o.x=((o.x-t)%i+i)%i+t):(t=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),i=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),n=this.settings.pullDrag?-1*s.x/5:0,o.x=Math.max(Math.min(o.x,t+n),i+n)),this._drag.stage.current=o,this.animate(o.x))},c.prototype.onDragEnd=function(e){var t=this.difference(this._drag.pointer,this.pointer(e)),i=this._drag.stage.current,n=0<t.x^this.settings.rtl?"left":"right";l(s).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==t.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(i.x,0!==t.x?n:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=n,(3<Math.abs(t.x)||300<(new Date).getTime()-this._drag.time)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},c.prototype.closest=function(i,n){var s=-1,o=this.width(),r=this.coordinates();return this.settings.freeDrag||l.each(r,l.proxy(function(e,t){return"left"===n&&t-30<i&&i<t+30?s=e:"right"===n&&t-o-30<i&&i<t-o+30?s=e+1:this.op(i,"<",t)&&this.op(i,">",r[e+1]||t-o)&&(s="left"===n?e+1:e),-1===s},this)),this.settings.loop||(this.op(i,">",r[this.minimum()])?s=i=this.minimum():this.op(i,"<",r[this.maximum()])&&(s=i=this.maximum())),s},c.prototype.animate=function(e){var t=0<this.speed();this.is("animating")&&this.onTransitionEnd(),t&&(this.enter("animating"),this.trigger("translate")),l.support.transform3d&&l.support.transition?this.$stage.css({transform:"translate3d("+e+"px,0px,0px)",transition:this.speed()/1e3+"s"}):t?this.$stage.animate({left:e+"px"},this.speed(),this.settings.fallbackEasing,l.proxy(this.onTransitionEnd,this)):this.$stage.css({left:e+"px"})},c.prototype.is=function(e){return this._states.current[e]&&0<this._states.current[e]},c.prototype.current=function(e){if(e===o)return this._current;if(0===this._items.length)return o;if(e=this.normalize(e),this._current!==e){var t=this.trigger("change",{property:{name:"position",value:e}});t.data!==o&&(e=this.normalize(t.data)),this._current=e,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},c.prototype.invalidate=function(e){return"string"===l.type(e)&&(this._invalidated[e]=!0,this.is("valid")&&this.leave("valid")),l.map(this._invalidated,function(e,t){return t})},c.prototype.reset=function(e){(e=this.normalize(e))!==o&&(this._speed=0,this._current=e,this.suppress(["translate","translated"]),this.animate(this.coordinates(e)),this.release(["translate","translated"]))},c.prototype.normalize=function(e,t){var i=this._items.length,n=t?0:this._clones.length;return!this.isNumeric(e)||i<1?e=o:(e<0||i+n<=e)&&(e=((e-n/2)%i+i)%i+n/2),e},c.prototype.relative=function(e){return e-=this._clones.length/2,this.normalize(e,!0)},c.prototype.maximum=function(e){var t,i,n,s=this.settings,o=this._coordinates.length;if(s.loop)o=this._clones.length/2+this._items.length-1;else if(s.autoWidth||s.merge){for(t=this._items.length,i=this._items[--t].width(),n=this.$element.width();t--&&!(n<(i+=this._items[t].width()+this.settings.margin)););o=t+1}else o=s.center?this._items.length-1:this._items.length-s.items;return e&&(o-=this._clones.length/2),Math.max(o,0)},c.prototype.minimum=function(e){return e?0:this._clones.length/2},c.prototype.items=function(e){return e===o?this._items.slice():(e=this.normalize(e,!0),this._items[e])},c.prototype.mergers=function(e){return e===o?this._mergers.slice():(e=this.normalize(e,!0),this._mergers[e])},c.prototype.clones=function(i){var t=this._clones.length/2,n=t+this._items.length,s=function(e){return e%2==0?n+e/2:t-(e+1)/2};return i===o?l.map(this._clones,function(e,t){return s(t)}):l.map(this._clones,function(e,t){return e===i?s(t):null})},c.prototype.speed=function(e){return e!==o&&(this._speed=e),this._speed},c.prototype.coordinates=function(e){var t,i=1,n=e-1;return e===o?l.map(this._coordinates,l.proxy(function(e,t){return this.coordinates(t)},this)):(this.settings.center?(this.settings.rtl&&(i=-1,n=e+1),t=this._coordinates[e],t+=(this.width()-t+(this._coordinates[n]||0))/2*i):t=this._coordinates[n]||0,t=Math.ceil(t))},c.prototype.duration=function(e,t,i){return 0===i?0:Math.min(Math.max(Math.abs(t-e),1),6)*Math.abs(i||this.settings.smartSpeed)},c.prototype.to=function(e,t){var i=this.current(),n=null,s=e-this.relative(i),o=(0<s)-(s<0),r=this._items.length,a=this.minimum(),l=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(s)>r/2&&(s+=-1*o*r),(n=(((e=i+s)-a)%r+r)%r+a)!==e&&n-s<=l&&0<n-s&&(i=n-s,e=n,this.reset(i))):this.settings.rewind?e=(e%(l+=1)+l)%l:e=Math.max(a,Math.min(l,e)),this.speed(this.duration(i,e,t)),this.current(e),this.$element.is(":visible")&&this.update()},c.prototype.next=function(e){e=e||!1,this.to(this.relative(this.current())+1,e)},c.prototype.prev=function(e){e=e||!1,this.to(this.relative(this.current())-1,e)},c.prototype.onTransitionEnd=function(e){if(e!==o&&(e.stopPropagation(),(e.target||e.srcElement||e.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},c.prototype.viewport=function(){var e;return this.options.responsiveBaseElement!==i?e=l(this.options.responsiveBaseElement).width():i.innerWidth?e=i.innerWidth:s.documentElement&&s.documentElement.clientWidth?e=s.documentElement.clientWidth:console.warn("Can not detect viewport width."),e},c.prototype.replace=function(e){this.$stage.empty(),this._items=[],e&&(e=e instanceof jQuery?e:l(e)),this.settings.nestedItemSelector&&(e=e.find("."+this.settings.nestedItemSelector)),e.filter(function(){return 1===this.nodeType}).each(l.proxy(function(e,t){t=this.prepare(t),this.$stage.append(t),this._items.push(t),this._mergers.push(1*t.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},c.prototype.add=function(e,t){var i=this.relative(this._current);t=t===o?this._items.length:this.normalize(t,!0),e=e instanceof jQuery?e:l(e),this.trigger("add",{content:e,position:t}),e=this.prepare(e),0===this._items.length||t===this._items.length?(0===this._items.length&&this.$stage.append(e),0!==this._items.length&&this._items[t-1].after(e),this._items.push(e),this._mergers.push(1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[t].before(e),this._items.splice(t,0,e),this._mergers.splice(t,0,1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[i]&&this.reset(this._items[i].index()),this.invalidate("items"),this.trigger("added",{content:e,position:t})},c.prototype.remove=function(e){(e=this.normalize(e,!0))!==o&&(this.trigger("remove",{content:this._items[e],position:e}),this._items[e].remove(),this._items.splice(e,1),this._mergers.splice(e,1),this.invalidate("items"),this.trigger("removed",{content:null,position:e}))},c.prototype.preloadAutoWidthImages=function(e){e.each(l.proxy(function(e,t){this.enter("pre-loading"),t=l(t),l(new Image).one("load",l.proxy(function(e){t.attr("src",e.target.src),t.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",t.attr("src")||t.attr("data-src")||t.attr("data-src-retina"))},this))},c.prototype.destroy=function(){for(var e in this.$element.off(".owl.core"),this.$stage.off(".owl.core"),l(s).off(".owl.core"),!1!==this.settings.responsive&&(i.clearTimeout(this.resizeTimer),this.off(i,"resize",this._handlers.onThrottledResize)),this._plugins)this._plugins[e].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},c.prototype.op=function(e,t,i){var n=this.settings.rtl;switch(t){case"<":return n?i<e:e<i;case">":return n?e<i:i<e;case">=":return n?e<=i:i<=e;case"<=":return n?i<=e:e<=i}},c.prototype.on=function(e,t,i,n){e.addEventListener?e.addEventListener(t,i,n):e.attachEvent&&e.attachEvent("on"+t,i)},c.prototype.off=function(e,t,i,n){e.removeEventListener?e.removeEventListener(t,i,n):e.detachEvent&&e.detachEvent("on"+t,i)},c.prototype.trigger=function(e,t,i,n,s){var o={item:{count:this._items.length,index:this.current()}},r=l.camelCase(l.grep(["on",e,i],function(e){return e}).join("-").toLowerCase()),a=l.Event([e,"owl",i||"carousel"].join(".").toLowerCase(),l.extend({relatedTarget:this},o,t));return this._supress[e]||(l.each(this._plugins,function(e,t){t.onTrigger&&t.onTrigger(a)}),this.register({type:c.Type.Event,name:e}),this.$element.trigger(a),this.settings&&"function"==typeof this.settings[r]&&this.settings[r].call(this,a)),a},c.prototype.enter=function(e){l.each([e].concat(this._states.tags[e]||[]),l.proxy(function(e,t){this._states.current[t]===o&&(this._states.current[t]=0),this._states.current[t]++},this))},c.prototype.leave=function(e){l.each([e].concat(this._states.tags[e]||[]),l.proxy(function(e,t){this._states.current[t]--},this))},c.prototype.register=function(i){if(i.type===c.Type.Event){if(l.event.special[i.name]||(l.event.special[i.name]={}),!l.event.special[i.name].owl){var t=l.event.special[i.name]._default;l.event.special[i.name]._default=function(e){return!t||!t.apply||e.namespace&&-1!==e.namespace.indexOf("owl")?e.namespace&&-1<e.namespace.indexOf("owl"):t.apply(this,arguments)},l.event.special[i.name].owl=!0}}else i.type===c.Type.State&&(this._states.tags[i.name]?this._states.tags[i.name]=this._states.tags[i.name].concat(i.tags):this._states.tags[i.name]=i.tags,this._states.tags[i.name]=l.grep(this._states.tags[i.name],l.proxy(function(e,t){return l.inArray(e,this._states.tags[i.name])===t},this)))},c.prototype.suppress=function(e){l.each(e,l.proxy(function(e,t){this._supress[t]=!0},this))},c.prototype.release=function(e){l.each(e,l.proxy(function(e,t){delete this._supress[t]},this))},c.prototype.pointer=function(e){var t={x:null,y:null};return(e=(e=e.originalEvent||e||i.event).touches&&e.touches.length?e.touches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e).pageX?(t.x=e.pageX,t.y=e.pageY):(t.x=e.clientX,t.y=e.clientY),t},c.prototype.isNumeric=function(e){return!isNaN(parseFloat(e))},c.prototype.difference=function(e,t){return{x:e.x-t.x,y:e.y-t.y}},l.fn.owlCarousel=function(t){var n=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=l(this),i=e.data("owl.carousel");i||(i=new c(this,"object"==(void 0===t?"undefined":T(t))&&t),e.data("owl.carousel",i),l.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(e,t){i.register({type:c.Type.Event,name:t}),i.$element.on(t+".owl.carousel.core",l.proxy(function(e){e.namespace&&e.relatedTarget!==this&&(this.suppress([t]),i[t].apply(this,[].slice.call(arguments,1)),this.release([t]))},i))})),"string"==typeof t&&"_"!==t.charAt(0)&&i[t].apply(i,n)})},l.fn.owlCarousel.Constructor=c}(window.Zepto||window.jQuery,window,document),x=window.Zepto||window.jQuery,S=window,document,(C=function e(t){this._core=t,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":x.proxy(function(e){e.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=x.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)}).Defaults={autoRefresh:!0,autoRefreshInterval:500},C.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=S.setInterval(x.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},C.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},C.prototype.destroy=function(){var e,t;for(e in S.clearInterval(this._interval),this._handlers)this._core.$element.off(e,this._handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},x.fn.owlCarousel.Constructor.Plugins.AutoRefresh=C,w=window.Zepto||window.jQuery,b=window,document,(_=function e(t){this._core=t,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":w.proxy(function(e){if(e.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(e.property&&"position"==e.property.name||"initialized"==e.type))for(var t=this._core.settings,i=t.center&&Math.ceil(t.items/2)||t.items,n=t.center&&-1*i||0,s=(e.property&&void 0!==e.property.value?e.property.value:this._core.current())+n,o=this._core.clones().length,r=w.proxy(function(e,t){this.load(t)},this);n++<i;)this.load(o/2+this._core.relative(s)),o&&w.each(this._core.clones(this._core.relative(s)),r),s++},this)},this._core.options=w.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)}).Defaults={lazyLoad:!1},_.prototype.load=function(e){var t=this._core.$stage.children().eq(e),i=t&&t.find(".owl-lazy");!i||-1<w.inArray(t.get(0),this._loaded)||(i.each(w.proxy(function(e,t){var i,n=w(t),s=1<b.devicePixelRatio&&n.attr("data-src-retina")||n.attr("data-src");this._core.trigger("load",{element:n,url:s},"lazy"),n.is("img")?n.one("load.owl.lazy",w.proxy(function(){n.css("opacity",1),this._core.trigger("loaded",{element:n,url:s},"lazy")},this)).attr("src",s):((i=new Image).onload=w.proxy(function(){n.css({"background-image":'url("'+s+'")',opacity:"1"}),this._core.trigger("loaded",{element:n,url:s},"lazy")},this),i.src=s)},this)),this._loaded.push(t.get(0)))},_.prototype.destroy=function(){var e,t;for(e in this.handlers)this._core.$element.off(e,this.handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},w.fn.owlCarousel.Constructor.Plugins.Lazy=_,g=window.Zepto||window.jQuery,window,document,(y=function e(t){this._core=t,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":g.proxy(function(e){e.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":g.proxy(function(e){e.namespace&&this._core.settings.autoHeight&&"position"==e.property.name&&this.update()},this),"loaded.owl.lazy":g.proxy(function(e){e.namespace&&this._core.settings.autoHeight&&e.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=g.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)}).Defaults={autoHeight:!1,autoHeightClass:"owl-height"},y.prototype.update=function(){var e,t=this._core._current,i=t+this._core.settings.items,n=this._core.$stage.children().toArray().slice(t,i),s=[];g.each(n,function(e,t){s.push(g(t).height())}),e=Math.max.apply(null,s),this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass)},y.prototype.destroy=function(){var e,t;for(e in this._handlers)this._core.$element.off(e,this._handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},g.fn.owlCarousel.Constructor.Plugins.AutoHeight=y,f=window.Zepto||window.jQuery,window,m=document,(v=function e(t){this._core=t,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":f.proxy(function(e){e.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":f.proxy(function(e){e.namespace&&this._core.settings.video&&this.isInFullScreen()&&e.preventDefault()},this),"refreshed.owl.carousel":f.proxy(function(e){e.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":f.proxy(function(e){e.namespace&&"position"===e.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":f.proxy(function(e){if(e.namespace){var t=f(e.content).find(".owl-video");t.length&&(t.css("display","none"),this.fetch(t,f(e.content)))}},this)},this._core.options=f.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",f.proxy(function(e){this.play(e)},this))}).Defaults={video:!1,videoHeight:!1,videoWidth:!1},v.prototype.fetch=function(e,t){var i=e.attr("data-vimeo-id")?"vimeo":e.attr("data-vzaar-id")?"vzaar":"youtube",n=e.attr("data-vimeo-id")||e.attr("data-youtube-id")||e.attr("data-vzaar-id"),s=e.attr("data-width")||this._core.settings.videoWidth,o=e.attr("data-height")||this._core.settings.videoHeight,r=e.attr("href");if(!r)throw new Error("Missing video URL.");if(-1<(n=r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu"))i="youtube";else if(-1<n[3].indexOf("vimeo"))i="vimeo";else{if(!(-1<n[3].indexOf("vzaar")))throw new Error("Video URL not supported.");i="vzaar"}n=n[6],this._videos[r]={type:i,id:n,width:s,height:o},t.attr("data-video",r),this.thumbnail(e,this._videos[r])},v.prototype.thumbnail=function(t,e){var i,n,s=e.width&&e.height?'style="width:'+e.width+"px;height:"+e.height+'px;"':"",o=t.find("img"),r="src",a="",l=this._core.settings,c=function(e){i=l.lazyLoad?'<div class="owl-video-tn '+a+'" '+r+'="'+e+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+e+')"></div>',t.after(i),t.after('<div class="owl-video-play-icon"></div>')};if(t.wrap('<div class="owl-video-wrapper"'+s+"></div>"),this._core.settings.lazyLoad&&(r="data-src",a="owl-lazy"),o.length)return c(o.attr(r)),o.remove(),!1;"youtube"===e.type?(n="//img.youtube.com/vi/"+e.id+"/hqdefault.jpg",c(n)):"vimeo"===e.type?f.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+e.id+".json",jsonp:"callback",dataType:"jsonp",success:function(e){n=e[0].thumbnail_large,c(n)}}):"vzaar"===e.type&&f.ajax({type:"GET",url:"//vzaar.com/api/videos/"+e.id+".json",jsonp:"callback",dataType:"jsonp",success:function(e){n=e.framegrab_url,c(n)}})},v.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},v.prototype.play=function(e){var t,i=f(e.target).closest("."+this._core.settings.itemClass),n=this._videos[i.attr("data-video")],s=n.width||"100%",o=n.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),i=this._core.items(this._core.relative(i.index())),this._core.reset(i.index()),"youtube"===n.type?t='<iframe width="'+s+'" height="'+o+'" src="//www.youtube.com/embed/'+n.id+"?autoplay=1&rel=0&v="+n.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===n.type?t='<iframe src="//player.vimeo.com/video/'+n.id+'?autoplay=1" width="'+s+'" height="'+o+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===n.type&&(t='<iframe frameborder="0"height="'+o+'"width="'+s+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+n.id+'/player?autoplay=true"></iframe>'),f('<div class="owl-video-frame">'+t+"</div>").insertAfter(i.find(".owl-video")),this._playing=i.addClass("owl-video-playing"))},v.prototype.isInFullScreen=function(){var e=m.fullscreenElement||m.mozFullScreenElement||m.webkitFullscreenElement;return e&&f(e).parent().hasClass("owl-video-frame")},v.prototype.destroy=function(){var e,t;for(e in this._core.$element.off("click.owl.video"),this._handlers)this._core.$element.off(e,this._handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},f.fn.owlCarousel.Constructor.Plugins.Video=v,h=window.Zepto||window.jQuery,window,document,(p=function e(t){this.core=t,this.core.options=h.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=void 0,this.next=void 0,this.handlers={"change.owl.carousel":h.proxy(function(e){e.namespace&&"position"==e.property.name&&(this.previous=this.core.current(),this.next=e.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":h.proxy(function(e){e.namespace&&(this.swapping="translated"==e.type)},this),"translate.owl.carousel":h.proxy(function(e){e.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)}).Defaults={animateOut:!1,animateIn:!1},p.prototype.swap=function(){if(1===this.core.settings.items&&h.support.animation&&h.support.transition){this.core.speed(0);var e,t=h.proxy(this.clear,this),i=this.core.$stage.children().eq(this.previous),n=this.core.$stage.children().eq(this.next),s=this.core.settings.animateIn,o=this.core.settings.animateOut;this.core.current()!==this.previous&&(o&&(e=this.core.coordinates(this.previous)-this.core.coordinates(this.next),i.one(h.support.animation.end,t).css({left:e+"px"}).addClass("animated owl-animated-out").addClass(o)),s&&n.one(h.support.animation.end,t).addClass("animated owl-animated-in").addClass(s))}},p.prototype.clear=function(e){h(e.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},p.prototype.destroy=function(){var e,t;for(e in this.handlers)this.core.$element.off(e,this.handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},h.fn.owlCarousel.Constructor.Plugins.Animate=p,l=window.Zepto||window.jQuery,c=window,d=document,(u=function e(t){this._core=t,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":l.proxy(function(e){e.namespace&&"settings"===e.property.name?this._core.settings.autoplay?this.play():this.stop():e.namespace&&"position"===e.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":l.proxy(function(e){e.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":l.proxy(function(e,t,i){e.namespace&&this.play(t,i)},this),"stop.owl.autoplay":l.proxy(function(e){e.namespace&&this.stop()},this),"mouseover.owl.autoplay":l.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":l.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":l.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":l.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=l.extend({},e.Defaults,this._core.options)}).Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},u.prototype.play=function(e,t){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},u.prototype._getNextTimeout=function(e,t){return this._timeout&&c.clearTimeout(this._timeout),c.setTimeout(l.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||d.hidden||this._core.next(t||this._core.settings.autoplaySpeed)},this),e||this._core.settings.autoplayTimeout)},u.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},u.prototype.stop=function(){this._core.is("rotating")&&(c.clearTimeout(this._timeout),this._core.leave("rotating"))},u.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},u.prototype.destroy=function(){var e,t;for(e in this.stop(),this._handlers)this._core.$element.off(e,this._handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},l.fn.owlCarousel.Constructor.Plugins.autoplay=u,r=window.Zepto||window.jQuery,window,document,(a=function e(t){this._core=t,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":r.proxy(function(e){e.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+r(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":r.proxy(function(e){e.namespace&&this._core.settings.dotsData&&this._templates.splice(e.position,0,this._templates.pop())},this),"remove.owl.carousel":r.proxy(function(e){e.namespace&&this._core.settings.dotsData&&this._templates.splice(e.position,1)},this),"changed.owl.carousel":r.proxy(function(e){e.namespace&&"position"==e.property.name&&this.draw()},this),"initialized.owl.carousel":r.proxy(function(e){e.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":r.proxy(function(e){e.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=r.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)}).Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},a.prototype.initialize=function(){var e,i=this._core.settings;for(e in this._controls.$relative=(i.navContainer?r(i.navContainer):r("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=r("<"+i.navElement+">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click",r.proxy(function(e){this.prev(i.navSpeed)},this)),this._controls.$next=r("<"+i.navElement+">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click",r.proxy(function(e){this.next(i.navSpeed)},this)),i.dotsData||(this._templates=[r("<div>").addClass(i.dotClass).append(r("<span>")).prop("outerHTML")]),this._controls.$absolute=(i.dotsContainer?r(i.dotsContainer):r("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",r.proxy(function(e){var t=r(e.target).parent().is(this._controls.$absolute)?r(e.target).index():r(e.target).parent().index();e.preventDefault(),this.to(t,i.dotsSpeed)},this)),this._overrides)this._core[e]=r.proxy(this[e],this)},a.prototype.destroy=function(){var e,t,i,n;for(e in this._handlers)this.$element.off(e,this._handlers[e]);for(t in this._controls)this._controls[t].remove();for(n in this.overides)this._core[n]=this._overrides[n];for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},a.prototype.update=function(){var e,t,i=this._core.clones().length/2,n=i+this._core.items().length,s=this._core.maximum(!0),o=this._core.settings,r=o.center||o.autoWidth||o.dotsData?1:o.dotsEach||o.items;if("page"!==o.slideBy&&(o.slideBy=Math.min(o.slideBy,o.items)),o.dots||"page"==o.slideBy)for(this._pages=[],e=i,t=0;e<n;e++){if(r<=t||0===t){if(this._pages.push({start:Math.min(s,e-i),end:e-i+r-1}),Math.min(s,e-i)===s)break;t=0}t+=this._core.mergers(this._core.relative(e))}},a.prototype.draw=function(){var e,t=this._core.settings,i=this._core.items().length<=t.items,n=this._core.relative(this._core.current()),s=t.loop||t.rewind;this._controls.$relative.toggleClass("disabled",!t.nav||i),t.nav&&(this._controls.$previous.toggleClass("disabled",!s&&n<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!s&&n>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!t.dots||i),t.dots&&(e=this._pages.length-this._controls.$absolute.children().length,t.dotsData&&0!==e?this._controls.$absolute.html(this._templates.join("")):0<e?this._controls.$absolute.append(new Array(e+1).join(this._templates[0])):e<0&&this._controls.$absolute.children().slice(e).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(r.inArray(this.current(),this._pages)).addClass("active"))},a.prototype.onTrigger=function(e){var t=this._core.settings;e.page={index:r.inArray(this.current(),this._pages),count:this._pages.length,size:t&&(t.center||t.autoWidth||t.dotsData?1:t.dotsEach||t.items)}},a.prototype.current=function(){var i=this._core.relative(this._core.current());return r.grep(this._pages,r.proxy(function(e,t){return e.start<=i&&e.end>=i},this)).pop()},a.prototype.getPosition=function(e){var t,i,n=this._core.settings;return"page"==n.slideBy?(t=r.inArray(this.current(),this._pages),i=this._pages.length,e?++t:--t,t=this._pages[(t%i+i)%i].start):(t=this._core.relative(this._core.current()),i=this._core.items().length,e?t+=n.slideBy:t-=n.slideBy),t},a.prototype.next=function(e){r.proxy(this._overrides.to,this._core)(this.getPosition(!0),e)},a.prototype.prev=function(e){r.proxy(this._overrides.to,this._core)(this.getPosition(!1),e)},a.prototype.to=function(e,t,i){var n;!i&&this._pages.length?(n=this._pages.length,r.proxy(this._overrides.to,this._core)(this._pages[(e%n+n)%n].start,t)):r.proxy(this._overrides.to,this._core)(e,t)},r.fn.owlCarousel.Constructor.Plugins.Navigation=a,n=window.Zepto||window.jQuery,s=window,document,(o=function e(t){this._core=t,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":n.proxy(function(e){e.namespace&&"URLHash"===this._core.settings.startPosition&&n(s).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":n.proxy(function(e){if(e.namespace){var t=n(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!t)return;this._hashes[t]=e.content}},this),"changed.owl.carousel":n.proxy(function(e){if(e.namespace&&"position"===e.property.name){var i=this._core.items(this._core.relative(this._core.current())),t=n.map(this._hashes,function(e,t){return e===i?t:null}).join();if(!t||s.location.hash.slice(1)===t)return;s.location.hash=t}},this)},this._core.options=n.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),n(s).on("hashchange.owl.navigation",n.proxy(function(e){var t=s.location.hash.substring(1),i=this._core.$stage.children(),n=this._hashes[t]&&i.index(this._hashes[t]);void 0!==n&&n!==this._core.current()&&this._core.to(this._core.relative(n),!1,!0)},this))}).Defaults={URLhashListener:!1},o.prototype.destroy=function(){var e,t;for(e in n(s).off("hashchange.owl.navigation"),this._handlers)this._core.$element.off(e,this._handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},n.fn.owlCarousel.Constructor.Plugins.Hash=o,function(s,e,t,o){function i(e,i){var n=!1,t=e.charAt(0).toUpperCase()+e.slice(1);return s.each((e+" "+a.join(t+" ")+t).split(" "),function(e,t){if(r[t]!==o)return n=!i||t,!1}),n}function n(e){return i(e,!0)}var r=s("<support>").get(0).style,a="Webkit Moz O ms".split(" "),l={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},c=function(){return!!i("transform")},d=function(){return!!i("perspective")},u=function(){return!!i("animation")};(function(){return!!i("transition")})()&&(s.support.transition=new String(n("transition")),s.support.transition.end=l.transition.end[s.support.transition]),u()&&(s.support.animation=new String(n("animation")),s.support.animation.end=l.animation.end[s.support.animation]),c()&&(s.support.transform=new String(n("transform")),s.support.transform3d=d())}(window.Zepto||window.jQuery,window,document)},{}]},{},[18]);
/* End */
;; /* /bitrix/templates/eternis/js/vendors/badIe.js?1568018955862*/
; /* /bitrix/templates/eternis/js/vendors/jquery/jquery.min.js?156801895586659*/
; /* /bitrix/templates/eternis/js/popup_form.js?15774461592132*/
; /* /bitrix/templates/eternis/js/jquery.fancybox.pack.js?156801895523216*/
; /* /bitrix/templates/eternis/js/jquery.easing.1.3.js?15680189558097*/
; /* /bitrix/templates/eternis/js/vendors/selectric/jquery.selectric.js?156801895536422*/
; /* /bitrix/templates/eternis/js/jquery.maskedinput.js?15680189557207*/
; /* /bitrix/templates/eternis/js/custom.js?158143098421093*/
; /* /bitrix/components/bitrix/search.title/script.js?15711293509674*/
; /* /bitrix/templates/eternis/js/app.compile.js?1568018955122855*/
