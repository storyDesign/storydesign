(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96478c8a"],{"095a":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"wrapper"},[r("div",{staticClass:"story_content animate__animated animate__fadeIn"},[r("h1",{staticClass:"title"},[t._v(t._s(t.story.title))]),t.story.image01?[r("img",{staticClass:"img-fluid",attrs:{src:"/storyDesign/images/story/"+t.story.image01}})]:t._e(),t.story.image02?[r("img",{staticClass:"img-fluid",attrs:{src:"/storyDesign/images/story/"+t.story.image02}})]:t._e(),t.story.image03?[r("img",{staticClass:"img-fluid",attrs:{src:"/storyDesign/images/story/"+t.story.image03}})]:t._e()],2)])},i=[],a=(r("4160"),r("a9e3"),r("159b"),{data:function(){return{story:[]}},created:function(){this.getStories()},methods:{getStories:function(){var t=this;this.$http.get("/storyDesign/data/db.json").then((function(e){e.data.stories.forEach((function(e){e.id===Number(t.$route.params.id)&&(t.story=e)}))})).catch((function(t){console.log(t)}))}}}),o=a,s=(r("217f"),r("2877")),c=Object(s["a"])(o,n,i,!1,null,null,null);e["default"]=c.exports},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),a=r("17c2"),o=r("9112");for(var s in i){var c=n[s],f=c&&c.prototype;if(f&&f.forEach!==a)try{o(f,"forEach",a)}catch(u){f.forEach=a}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),a=r("ae40"),o=i("forEach"),s=a("forEach");t.exports=o&&s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"217f":function(t,e,r){"use strict";r("703d")},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),i=r("5899"),a="["+i+"]",o=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(s,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),a=r("b622"),o=a("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[o],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"703d":function(t,e,r){},7156:function(t,e,r){var n=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var a,o;return i&&"function"==typeof(a=e.constructor)&&a!==r&&n(o=a.prototype)&&o!==r.prototype&&i(t,o),t}},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,r){"use strict";var n=r("83ab"),i=r("da84"),a=r("94ca"),o=r("6eeb"),s=r("5135"),c=r("c6b6"),f=r("7156"),u=r("c04e"),l=r("d039"),d=r("7c73"),p=r("241c").f,g=r("06cf").f,h=r("9bf2").f,y=r("58a8").trim,v="Number",m=i[v],S=m.prototype,b=c(d(S))==v,E=function(t){var e,r,n,i,a,o,s,c,f=u(t,!1);if("string"==typeof f&&f.length>2)if(f=y(f),e=f.charCodeAt(0),43===e||45===e){if(r=f.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+f}for(a=f.slice(2),o=a.length,s=0;s<o;s++)if(c=a.charCodeAt(s),c<48||c>i)return NaN;return parseInt(a,n)}return+f};if(a(v,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var L,N=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof N&&(b?l((function(){S.valueOf.call(r)})):c(r)!=v)?f(new m(E(e)),r,N):E(e)},A=n?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;A.length>I;I++)s(m,L=A[I])&&!s(N,L)&&h(N,L,g(m,L));N.prototype=S,S.constructor=N,o(i,v,N)}},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),a=r("5135"),o=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(a(s,t))return s[t];e||(e={});var r=[][t],f=!!a(e,"ACCESSORS")&&e.ACCESSORS,u=a(e,0)?e[0]:c,l=a(e,1)?e[1]:void 0;return s[t]=!!r&&!i((function(){if(f&&!n)return!0;var t={length:-1};f?o(t,1,{enumerable:!0,get:c}):t[1]=1,r.call(t,u,l)}))}},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),a=r("7b0b"),o=r("50c4"),s=r("65f0"),c=[].push,f=function(t){var e=1==t,r=2==t,f=3==t,u=4==t,l=6==t,d=5==t||l;return function(p,g,h,y){for(var v,m,S=a(p),b=i(S),E=n(g,h,3),L=o(b.length),N=0,A=y||s,I=e?A(p,L):r?A(p,0):void 0;L>N;N++)if((d||N in b)&&(v=b[N],m=E(v,N,S),t))if(e)I[N]=m;else if(m)switch(t){case 3:return!0;case 5:return v;case 6:return N;case 2:c.call(I,v)}else if(u)return!1;return l?-1:f||u?u:I}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-96478c8a.1faf91ff.js.map