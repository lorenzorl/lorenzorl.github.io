var ce=Object.defineProperty;var ue=(t,n,e)=>n in t?ce(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var C=(t,n,e)=>(ue(t,typeof n!="symbol"?n+"":n,e),e);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();function ln(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function m(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?ln(Object(e),!0).forEach(function(a){y(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ln(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function wt(t){return wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},wt(t)}function me(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function fn(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function de(t,n,e){return n&&fn(t.prototype,n),e&&fn(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function y(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Xt(t,n){return pe(t)||be(t,n)||Fn(t,n)||ye()}function lt(t){return ve(t)||ge(t)||Fn(t)||he()}function ve(t){if(Array.isArray(t))return Dt(t)}function pe(t){if(Array.isArray(t))return t}function ge(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function be(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function Fn(t,n){if(!!t){if(typeof t=="string")return Dt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Dt(t,n)}}function Dt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function he(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ye(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var cn=function(){},Gt={},Dn={},jn=null,zn={mark:cn,measure:cn};try{typeof window<"u"&&(Gt=window),typeof document<"u"&&(Dn=document),typeof MutationObserver<"u"&&(jn=MutationObserver),typeof performance<"u"&&(zn=performance)}catch{}var ke=Gt.navigator||{},un=ke.userAgent,mn=un===void 0?"":un,j=Gt,b=Dn,dn=jn,ut=zn;j.document;var R=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",Yn=~mn.indexOf("MSIE")||~mn.indexOf("Trident/"),mt,dt,vt,pt,gt,T="___FONT_AWESOME___",jt=16,$n="fa",Un="svg-inline--fa",V="data-fa-i2svg",zt="data-fa-pseudo-element",xe="data-fa-pseudo-element-pending",Kt="data-prefix",Jt="data-icon",vn="fontawesome-i2svg",we="async",_e=["HTML","HEAD","STYLE","SCRIPT"],Hn=function(){try{return!0}catch{return!1}}(),g="classic",h="sharp",Qt=[g,h];function ft(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[g]}})}var at=ft((mt={},y(mt,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),y(mt,h,{fa:"solid",fass:"solid","fa-solid":"solid"}),mt)),rt=ft((dt={},y(dt,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),y(dt,h,{solid:"fass"}),dt)),it=ft((vt={},y(vt,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),y(vt,h,{fass:"fa-solid"}),vt)),Ae=ft((pt={},y(pt,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),y(pt,h,{"fa-solid":"fass"}),pt)),Ee=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Wn="fa-layers-text",Se=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ce=ft((gt={},y(gt,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),y(gt,h,{900:"fass"}),gt)),Vn=[1,2,3,4,5,6,7,8,9,10],Pe=Vn.concat([11,12,13,14,15,16,17,18,19,20]),Oe=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],H={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ot=new Set;Object.keys(rt[g]).map(ot.add.bind(ot));Object.keys(rt[h]).map(ot.add.bind(ot));var Ne=[].concat(Qt,lt(ot),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",H.GROUP,H.SWAP_OPACITY,H.PRIMARY,H.SECONDARY]).concat(Vn.map(function(t){return"".concat(t,"x")})).concat(Pe.map(function(t){return"w-".concat(t)})),tt=j.FontAwesomeConfig||{};function Ie(t){var n=b.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function Te(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(b&&typeof b.querySelector=="function"){var Le=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Le.forEach(function(t){var n=Xt(t,2),e=n[0],a=n[1],r=Te(Ie(e));r!=null&&(tt[a]=r)})}var qn={styleDefault:"solid",familyDefault:"classic",cssPrefix:$n,replacementClass:Un,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};tt.familyPrefix&&(tt.cssPrefix=tt.familyPrefix);var K=m(m({},qn),tt);K.autoReplaceSvg||(K.observeMutations=!1);var d={};Object.keys(qn).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(e){K[t]=e,nt.forEach(function(a){return a(d)})},get:function(){return K[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(n){K.cssPrefix=n,nt.forEach(function(e){return e(d)})},get:function(){return K.cssPrefix}});j.FontAwesomeConfig=d;var nt=[];function Me(t){return nt.push(t),function(){nt.splice(nt.indexOf(t),1)}}var D=jt,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Re(t){if(!(!t||!R)){var n=b.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=b.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return b.head.insertBefore(n,a),t}}var Fe="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function st(){for(var t=12,n="";t-- >0;)n+=Fe[Math.random()*62|0];return n}function J(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function Zt(t){return t.classList?J(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Bn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function De(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(Bn(t[e]),'" ')},"").trim()}function St(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function tn(t){return t.size!==I.size||t.x!==I.x||t.y!==I.y||t.rotate!==I.rotate||t.flipX||t.flipY}function je(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:c}}function ze(t){var n=t.transform,e=t.width,a=e===void 0?jt:e,r=t.height,i=r===void 0?jt:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Yn?l+="translate(".concat(n.x/D-a/2,"em, ").concat(n.y/D-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(n.x/D,"em), calc(-50% + ").concat(n.y/D,"em)) "):l+="translate(".concat(n.x/D,"em, ").concat(n.y/D,"em) "),l+="scale(".concat(n.size/D*(n.flipX?-1:1),", ").concat(n.size/D*(n.flipY?-1:1),") "),l+="rotate(".concat(n.rotate,"deg) "),l}var Ye=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Xn(){var t=$n,n=Un,e=d.cssPrefix,a=d.replacementClass,r=Ye;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var pn=!1;function It(){d.autoAddCss&&!pn&&(Re(Xn()),pn=!0)}var $e={mixout:function(){return{dom:{css:Xn,insertCss:It}}},hooks:function(){return{beforeDOMElementCreation:function(){It()},beforeI2svg:function(){It()}}}},L=j||{};L[T]||(L[T]={});L[T].styles||(L[T].styles={});L[T].hooks||(L[T].hooks={});L[T].shims||(L[T].shims=[]);var P=L[T],Gn=[],Ue=function t(){b.removeEventListener("DOMContentLoaded",t),_t=1,Gn.map(function(n){return n()})},_t=!1;R&&(_t=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),_t||b.addEventListener("DOMContentLoaded",Ue));function He(t){!R||(_t?setTimeout(t,0):Gn.push(t))}function ct(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Bn(t):"<".concat(n," ").concat(De(a),">").concat(i.map(ct).join(""),"</").concat(n,">")}function gn(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var We=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},Tt=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?We(e,r):e,l,c,f;for(a===void 0?(l=1,f=n[i[0]]):(l=0,f=a);l<o;l++)c=i[l],f=s(f,n[c],c,n);return f};function Ve(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function Yt(t){var n=Ve(t);return n.length===1?n[0].toString(16):null}function qe(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function bn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function $t(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=bn(n);typeof P.hooks.addPack=="function"&&!r?P.hooks.addPack(t,bn(n)):P.styles[t]=m(m({},P.styles[t]||{}),i),t==="fas"&&$t("fa",n)}var bt,ht,yt,B=P.styles,Be=P.shims,Xe=(bt={},y(bt,g,Object.values(it[g])),y(bt,h,Object.values(it[h])),bt),nn=null,Kn={},Jn={},Qn={},Zn={},te={},Ge=(ht={},y(ht,g,Object.keys(at[g])),y(ht,h,Object.keys(at[h])),ht);function Ke(t){return~Ne.indexOf(t)}function Je(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!Ke(r)?r:null}var ne=function(){var n=function(i){return Tt(B,function(o,s,l){return o[l]=Tt(s,i,{}),o},{})};Kn=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),Jn=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),te=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var e="far"in B||d.autoFetchSvg,a=Tt(Be,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Qn=a.names,Zn=a.unicodes,nn=Ct(d.styleDefault,{family:d.familyDefault})};Me(function(t){nn=Ct(t.styleDefault,{family:d.familyDefault})});ne();function en(t,n){return(Kn[t]||{})[n]}function Qe(t,n){return(Jn[t]||{})[n]}function W(t,n){return(te[t]||{})[n]}function ee(t){return Qn[t]||{prefix:null,iconName:null}}function Ze(t){var n=Zn[t],e=en("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function z(){return nn}var an=function(){return{prefix:null,iconName:null,rest:[]}};function Ct(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?g:e,r=at[a][t],i=rt[a][t]||rt[a][r],o=t in P.styles?t:null;return i||o||null}var hn=(yt={},y(yt,g,Object.keys(it[g])),y(yt,h,Object.keys(it[h])),yt);function Pt(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(n={},y(n,g,"".concat(d.cssPrefix,"-").concat(g)),y(n,h,"".concat(d.cssPrefix,"-").concat(h)),n),o=null,s=g;(t.includes(i[g])||t.some(function(c){return hn[g].includes(c)}))&&(s=g),(t.includes(i[h])||t.some(function(c){return hn[h].includes(c)}))&&(s=h);var l=t.reduce(function(c,f){var u=Je(d.cssPrefix,f);if(B[f]?(f=Xe[s].includes(f)?Ae[s][f]:f,o=f,c.prefix=f):Ge[s].indexOf(f)>-1?(o=f,c.prefix=Ct(f,{family:s})):u?c.iconName=u:f!==d.replacementClass&&f!==i[g]&&f!==i[h]&&c.rest.push(f),!r&&c.prefix&&c.iconName){var v=o==="fa"?ee(c.iconName):{},p=W(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||p||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!B.far&&B.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},an());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===h&&(B.fass||d.autoFetchSvg)&&(l.prefix="fass",l.iconName=W(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=z()||"fas"),l}var ta=function(){function t(){me(this,t),this.definitions={}}return de(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=m(m({},e.definitions[s]||{}),o[s]),$t(s,o[s]);var l=it[g][s];l&&$t(l,o[s]),ne()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];e[s]||(e[s]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(e[s][u]=c)}),e[s][l]=c}),e}}]),t}(),yn=[],X={},G={},na=Object.keys(G);function ea(t,n){var e=n.mixoutsTo;return yn=t,X={},Object.keys(G).forEach(function(a){na.indexOf(a)===-1&&delete G[a]}),yn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),wt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){X[o]||(X[o]=[]),X[o].push(i[o])})}a.provides&&a.provides(G)}),e}function Ut(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=X[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function q(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=X[t]||[];r.forEach(function(i){i.apply(null,e)})}function M(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return G[t]?G[t].apply(null,n):void 0}function Ht(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||z();if(!!n)return n=W(e,n)||n,gn(ae.definitions,e,n)||gn(P.styles,e,n)}var ae=new ta,aa=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,q("noAuto")},ra={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(q("beforeI2svg",n),M("pseudoElements2svg",n),M("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,He(function(){oa({autoReplaceSvgRoot:e}),q("watch",n)})}},ia={icon:function(n){if(n===null)return null;if(wt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:W(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Ct(n[0]);return{prefix:a,iconName:W(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(d.cssPrefix,"-"))>-1||n.match(Ee))){var r=Pt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||z(),iconName:W(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=z();return{prefix:i,iconName:W(i,n)||n}}}},A={noAuto:aa,config:d,dom:ra,parse:ia,library:ae,findIconDefinition:Ht,toHtml:ct},oa=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?b:e;(Object.keys(P.styles).length>0||d.autoFetchSvg)&&R&&d.autoReplaceSvg&&A.dom.i2svg({node:a})};function Ot(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return ct(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!R){var a=b.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function sa(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(tn(o)&&e.found&&!a.found){var s=e.width,l=e.height,c={x:s/l/2,y:.5};r.style=St(m(m({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function la(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(d.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:a}]}]}function rn(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,f=t.titleId,u=t.extra,v=t.watchable,p=v===void 0?!1:v,x=a.found?a:e,E=x.width,S=x.height,O=r==="fak",k=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(F){return u.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(u.classes).join(" "),w={children:[],attributes:m(m({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(S)})},N=O&&!~u.classes.indexOf("fa-fw")?{width:"".concat(E/S*16*.0625,"em")}:{};p&&(w.attributes[V]=""),l&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(f||st())},children:[l]}),delete w.attributes.title);var _=m(m({},w),{},{prefix:r,iconName:i,main:e,mask:a,maskId:c,transform:o,symbol:s,styles:m(m({},N),u.styles)}),$=a.found&&e.found?M("generateAbstractMask",_)||{children:[],attributes:{}}:M("generateAbstractIcon",_)||{children:[],attributes:{}},U=$.children,Nt=$.attributes;return _.children=U,_.attributes=Nt,s?la(_):sa(_)}function kn(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[V]="");var f=m({},o.styles);tn(r)&&(f.transform=ze({transform:r,startCentered:!0,width:e,height:a}),f["-webkit-transform"]=f.transform);var u=St(f);u.length>0&&(c.style=u);var v=[];return v.push({tag:"span",attributes:c,children:[n]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function fa(t){var n=t.content,e=t.title,a=t.extra,r=m(m(m({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=St(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Lt=P.styles;function Wt(t){var n=t[0],e=t[1],a=t.slice(4),r=Xt(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(H.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(H.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(H.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var ca={found:!1,width:512,height:512};function ua(t,n){!Hn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Vt(t,n){var e=n;return n==="fa"&&d.styleDefault!==null&&(n=z()),new Promise(function(a,r){if(M("missingIconAbstract"),e==="fa"){var i=ee(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Lt[n]&&Lt[n][t]){var o=Lt[n][t];return a(Wt(o))}ua(t,n),a(m(m({},ca),{},{icon:d.showMissingIcons&&t?M("missingIconAbstract")||{}:{}}))})}var xn=function(){},qt=d.measurePerformance&&ut&&ut.mark&&ut.measure?ut:{mark:xn,measure:xn},Z='FA "6.2.0"',ma=function(n){return qt.mark("".concat(Z," ").concat(n," begins")),function(){return re(n)}},re=function(n){qt.mark("".concat(Z," ").concat(n," ends")),qt.measure("".concat(Z," ").concat(n),"".concat(Z," ").concat(n," begins"),"".concat(Z," ").concat(n," ends"))},on={begin:ma,end:re},kt=function(){};function wn(t){var n=t.getAttribute?t.getAttribute(V):null;return typeof n=="string"}function da(t){var n=t.getAttribute?t.getAttribute(Kt):null,e=t.getAttribute?t.getAttribute(Jt):null;return n&&e}function va(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function pa(){if(d.autoReplaceSvg===!0)return xt.replace;var t=xt[d.autoReplaceSvg];return t||xt.replace}function ga(t){return b.createElementNS("http://www.w3.org/2000/svg",t)}function ba(t){return b.createElement(t)}function ie(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?ga:ba:e;if(typeof t=="string")return b.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(ie(o,{ceFn:a}))}),r}function ha(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var xt={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(ie(r),e)}),e.getAttribute(V)===null&&d.keepOriginalSource){var a=b.createComment(ha(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~Zt(e).indexOf(d.replacementClass))return xt.replace(n);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return ct(s)}).join(`
`);e.setAttribute(V,""),e.innerHTML=o}};function _n(t){t()}function oe(t,n){var e=typeof n=="function"?n:kt;if(t.length===0)e();else{var a=_n;d.mutateApproach===we&&(a=j.requestAnimationFrame||_n),a(function(){var r=pa(),i=on.begin("mutate");t.map(r),i(),e()})}}var sn=!1;function se(){sn=!0}function Bt(){sn=!1}var At=null;function An(t){if(!!dn&&!!d.observeMutations){var n=t.treeCallback,e=n===void 0?kt:n,a=t.nodeCallback,r=a===void 0?kt:a,i=t.pseudoElementsCallback,o=i===void 0?kt:i,s=t.observeMutationsRoot,l=s===void 0?b:s;At=new dn(function(c){if(!sn){var f=z();J(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!wn(u.addedNodes[0])&&(d.searchPseudoElements&&o(u.target),e(u.target)),u.type==="attributes"&&u.target.parentNode&&d.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&wn(u.target)&&~Oe.indexOf(u.attributeName))if(u.attributeName==="class"&&da(u.target)){var v=Pt(Zt(u.target)),p=v.prefix,x=v.iconName;u.target.setAttribute(Kt,p||f),x&&u.target.setAttribute(Jt,x)}else va(u.target)&&r(u.target)})}}),R&&At.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ya(){!At||At.disconnect()}function ka(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function xa(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Pt(Zt(t));return r.prefix||(r.prefix=z()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Qe(r.prefix,t.innerText)||en(r.prefix,Yt(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function wa(t){var n=J(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(e?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||st()):(n["aria-hidden"]="true",n.focusable="false")),n}function _a(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function En(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=xa(t),a=e.iconName,r=e.prefix,i=e.rest,o=wa(t),s=Ut("parseNodeAttributes",{},t),l=n.styleParser?ka(t):[];return m({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Aa=P.styles;function le(t){var n=d.autoReplaceSvg==="nest"?En(t,{styleParser:!1}):En(t);return~n.extra.classes.indexOf(Wn)?M("generateLayersText",t,n):M("generateSvgReplacementMutation",t,n)}var Y=new Set;Qt.map(function(t){Y.add("fa-".concat(t))});Object.keys(at[g]).map(Y.add.bind(Y));Object.keys(at[h]).map(Y.add.bind(Y));Y=lt(Y);function Sn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();var e=b.documentElement.classList,a=function(u){return e.add("".concat(vn,"-").concat(u))},r=function(u){return e.remove("".concat(vn,"-").concat(u))},i=d.autoFetchSvg?Y:Qt.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Aa));i.includes("fa")||i.push("fa");var o=[".".concat(Wn,":not([").concat(V,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(V,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=J(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=on.begin("onTree"),c=s.reduce(function(f,u){try{var v=le(u);v&&f.push(v)}catch(p){Hn||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise(function(f,u){Promise.all(c).then(function(v){oe(v,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),l(),f()})}).catch(function(v){l(),u(v)})})}function Ea(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;le(t).then(function(e){e&&oe([e],n)})}function Sa(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Ht(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Ht(r||{})),t(a,m(m({},e),{},{mask:r}))}}var Ca=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?I:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,l=s===void 0?null:s,c=e.maskId,f=c===void 0?null:c,u=e.title,v=u===void 0?null:u,p=e.titleId,x=p===void 0?null:p,E=e.classes,S=E===void 0?[]:E,O=e.attributes,k=O===void 0?{}:O,w=e.styles,N=w===void 0?{}:w;if(!!n){var _=n.prefix,$=n.iconName,U=n.icon;return Ot(m({type:"icon"},n),function(){return q("beforeDOMElementCreation",{iconDefinition:n,params:e}),d.autoA11y&&(v?k["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(x||st()):(k["aria-hidden"]="true",k.focusable="false")),rn({icons:{main:Wt(U),mask:l?Wt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:$,transform:m(m({},I),r),symbol:o,title:v,maskId:f,titleId:x,extra:{attributes:k,styles:N,classes:S}})})}},Pa={mixout:function(){return{icon:Sa(Ca)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Sn,e.nodeCallback=Ea,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?b:a,i=e.callback,o=i===void 0?function(){}:i;return Sn(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,c=a.symbol,f=a.mask,u=a.maskId,v=a.extra;return new Promise(function(p,x){Promise.all([Vt(r,s),f.iconName?Vt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var S=Xt(E,2),O=S[0],k=S[1];p([e,rn({icons:{main:O,mask:k},prefix:s,iconName:r,transform:l,symbol:c,maskId:u,title:i,titleId:o,extra:v,watchable:!0})])}).catch(x)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,l=St(s);l.length>0&&(r.style=l);var c;return tn(o)&&(c=M("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},Oa={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Ot({type:"layer"},function(){q("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(lt(i)).join(" ")},children:o}]})}}}},Na={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,c=l===void 0?{}:l,f=a.styles,u=f===void 0?{}:f;return Ot({type:"counter",content:e},function(){return q("beforeDOMElementCreation",{content:e,params:a}),fa({content:e.toString(),title:i,extra:{attributes:c,styles:u,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(lt(s))}})})}}}},Ia={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?I:r,o=a.title,s=o===void 0?null:o,l=a.classes,c=l===void 0?[]:l,f=a.attributes,u=f===void 0?{}:f,v=a.styles,p=v===void 0?{}:v;return Ot({type:"text",content:e},function(){return q("beforeDOMElementCreation",{content:e,params:a}),kn({content:e,transform:m(m({},I),i),title:s,extra:{attributes:u,styles:p,classes:["".concat(d.cssPrefix,"-layers-text")].concat(lt(c))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(Yn){var c=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();s=f.width/c,l=f.height/c}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,kn({content:e.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},Ta=new RegExp('"',"ug"),Cn=[1105920,1112319];function La(t){var n=t.replace(Ta,""),e=qe(n,0),a=e>=Cn[0]&&e<=Cn[1],r=n.length===2?n[0]===n[1]:!1;return{value:Yt(r?n[0]:n),isSecondary:a||r}}function Pn(t,n){var e="".concat(xe).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=J(t.children),o=i.filter(function(U){return U.getAttribute(zt)===n})[0],s=j.getComputedStyle(t,n),l=s.getPropertyValue("font-family").match(Se),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),a();if(l&&f!=="none"&&f!==""){var u=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?h:g,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?rt[v][l[2].toLowerCase()]:Ce[v][c],x=La(u),E=x.value,S=x.isSecondary,O=l[0].startsWith("FontAwesome"),k=en(p,E),w=k;if(O){var N=Ze(E);N.iconName&&N.prefix&&(k=N.iconName,p=N.prefix)}if(k&&!S&&(!o||o.getAttribute(Kt)!==p||o.getAttribute(Jt)!==w)){t.setAttribute(e,w),o&&t.removeChild(o);var _=_a(),$=_.extra;$.attributes[zt]=n,Vt(k,p).then(function(U){var Nt=rn(m(m({},_),{},{icons:{main:U,mask:an()},prefix:p,iconName:w,extra:$,watchable:!0})),F=b.createElement("svg");n==="::before"?t.insertBefore(F,t.firstChild):t.appendChild(F),F.outerHTML=Nt.map(function(fe){return ct(fe)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function Ma(t){return Promise.all([Pn(t,"::before"),Pn(t,"::after")])}function Ra(t){return t.parentNode!==document.head&&!~_e.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(zt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function On(t){if(!!R)return new Promise(function(n,e){var a=J(t.querySelectorAll("*")).filter(Ra).map(Ma),r=on.begin("searchPseudoElements");se(),Promise.all(a).then(function(){r(),Bt(),n()}).catch(function(){r(),Bt(),e()})})}var Fa={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=On,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?b:a;d.searchPseudoElements&&On(r)}}},Nn=!1,Da={mixout:function(){return{dom:{unwatch:function(){se(),Nn=!0}}}},hooks:function(){return{bootstrap:function(){An(Ut("mutationObserverCallbacks",{}))},noAuto:function(){ya()},watch:function(e){var a=e.observeMutationsRoot;Nn?Bt():An(Ut("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},In=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},ja={mixout:function(){return{parse:{transform:function(e){return In(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=In(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(f)},v={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:u,path:v};return{tag:"g",attributes:m({},p.outer),children:[{tag:"g",attributes:m({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),p.path)}]}]}}}},Mt={x:0,y:0,width:"100%",height:"100%"};function Tn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function za(t){return t.tag==="g"?t.children:[t]}var Ya={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?Pt(r.split(" ").map(function(o){return o.trim()})):an();return i.prefix||(i.prefix=z()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,l=e.transform,c=i.width,f=i.icon,u=o.width,v=o.icon,p=je({transform:l,containerWidth:u,iconWidth:c}),x={tag:"rect",attributes:m(m({},Mt),{},{fill:"white"})},E=f.children?{children:f.children.map(Tn)}:{},S={tag:"g",attributes:m({},p.inner),children:[Tn(m({tag:f.tag,attributes:m(m({},f.attributes),p.path)},E))]},O={tag:"g",attributes:m({},p.outer),children:[S]},k="mask-".concat(s||st()),w="clip-".concat(s||st()),N={tag:"mask",attributes:m(m({},Mt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,O]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:za(v)},N]};return a.push(_,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(k,")")},Mt)}),{children:a,attributes:r}}}},$a={provides:function(n){var e=!1;j.matchMedia&&(e=j.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Ua={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},Ha=[$e,Pa,Oa,Na,Ia,Fa,Da,ja,Ya,$a,Ua];ea(Ha,{mixoutsTo:A});A.noAuto;A.config;var Wa=A.library,Va=A.dom;A.parse;A.findIconDefinition;A.toHtml;A.icon;A.layer;A.text;A.counter;var qa={prefix:"fas",iconName:"up-right-from-square",icon:[448,512,["external-link-alt"],"f35d","M288 32c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L306.7 128 169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L352 173.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},Ba=qa,Xa={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},Ga=Xa,Ka={prefix:"fas",iconName:"chevron-right",icon:[384,512,[9002],"f054","M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};Wa.add(Ka,Ga,Ba);Va.i2svg();class Ja{constructor(n,e){C(this,"_modalElement");C(this,"_maskElement");C(this,"_isVisible");this._modalElement=n,this._maskElement=e,this._isVisible=!1,this.addEventListenerToClose()}addEventListenerToClose(){var e;const n=(e=this._modalElement.parentElement)==null?void 0:e.querySelector(".modal__close");n==null||n.addEventListener("click",()=>this.closeModal())}openModal(n){const{imageSrc:e,name:a,description:r,link:i}=n,o=this._modalElement,s=o.querySelector(".modal__title"),l=o.querySelector(".modal__img > img"),c=o.querySelector(".modal__description"),f=o.querySelector(".modal__button");s!=null&&(s.innerText=a),c!=null&&(c.innerText=r),typeof e=="object"&&(l==null||l.setAttribute("src",e.href)),f==null||f.setAttribute("target","_blank"),f==null||f.setAttribute("href",i),this.show()}show(){var n;this._isVisible=!0,this._maskElement.classList.add("mask--show"),(n=this._modalElement.parentElement)==null||n.classList.add("modal--show")}hide(){var n;this._isVisible=!1,this._maskElement.classList.remove("mask--show"),(n=this._modalElement.parentElement)==null||n.classList.remove("modal--show")}closeModal(){this.hide()}}const Qa=[{name:"Cartas de Axie Infinity.",img:"axie-cards.png",description:"Pagina que muestra todas las cartas de Axie Infinity.",link:"https://axiecards.web.app"},{name:"Calculadora de SLP",img:"calculadora-slp.png",description:"Pagina para calcular el precio del SLP en varias monedas del mundo.",link:"https://lorenzorl.github.io/slpconvert/"},{name:"Multibet",img:"multibet.png",description:"Pagina para administrar script y referidos de freebitcoin.",link:"https://multibetbtc.web.app/"}],Za=[{name:"HTML",percent:100},{name:"CSS",percent:90},{name:"SCSS",percent:70},{name:"VueJS",percent:90},{name:"NuxtJS",percent:80},{name:"Javascript",percent:80},{name:"Firebase",percent:50}],tr="modulepreload",nr=function(t){return"/"+t},Ln={},Q=function(n,e,a){return!e||e.length===0?n():Promise.all(e.map(r=>{if(r=nr(r),r in Ln)return;Ln[r]=!0;const i=r.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":tr,i||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),i)return new Promise((l,c)=>{s.addEventListener("load",l),s.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())},er=async()=>{const t=Object.assign({"../assets/axie-cards.png":()=>Q(()=>import("./axie-cards.89863824.js"),[]),"../assets/calculadora-slp.png":()=>Q(()=>import("./calculadora-slp.62b6b3ad.js"),[]),"../assets/min.png":()=>Q(()=>import("./min.9ff43447.js"),[]),"../assets/multibet.png":()=>Q(()=>import("./multibet.9085c986.js"),[]),"../assets/yo.jpg":()=>Q(()=>import("./yo.9657fb2b.js"),[])}),n={};for(const e in t){await t[e]();const a=new URL(e,import.meta.url),r=e.split("/")[e.split("/").length-1];n[r]=a}return n},ar=(t,n,e)=>{const a=document.createElement("div");a.classList.add("project");const r=document.createElement("img");r.setAttribute("src",n[t.img].href),a.appendChild(r);const i=document.createElement("div");i.classList.add("project__info"),a.appendChild(i);const o=document.createElement("div");o.classList.add("project__title"),o.innerText=t.name,i.appendChild(o);const s=document.createElement("div");s.classList.add("project__description"),s.innerText=t.description,i.appendChild(s);const l=document.createElement("button");return l.classList.add("project__button"),l.innerText="Ver mas.",l.addEventListener("click",()=>{e.openModal({...t,imageSrc:n[t.img]})}),i.appendChild(l),a},rr=t=>{const n=document.createElement("li");n.classList.add("skill");const e=document.createElement("div");e.classList.add("skill__name"),e.innerText=t.name,n.appendChild(e);const a=document.createElement("div");a.classList.add("skill__bg"),n.appendChild(a);const r=document.createElement("div");return r.classList.add("skill__percent"),r.innerText=`${t.percent}%`,r.style.width=`${t.percent}%`,a.appendChild(r),n};class ir{constructor(n,e,a,r,i,o){C(this,"_cx");C(this,"_cy");C(this,"_fill");C(this,"_radio");C(this,"_colors");C(this,"_element");C(this,"_animate");this._cx=n,this._cy=e,this._fill=r,this._radio=a,this._colors=o;const s="http://www.w3.org/2000/svg";this._element=document.createElementNS(s,"circle"),this._element.setAttributeNS(null,"cx",this._cx.toString()),this._element.setAttributeNS(null,"cy",this._cy.toString()),this._element.setAttributeNS(null,"r",this._radio.toString()),this._element.setAttributeNS(null,"fill",this._fill),this._animate=document.createElementNS(s,"animate"),this._animate.setAttributeNS(null,"attributeName","fill"),this._animate.setAttributeNS(null,"attributeType","CSS");const l=this.getColorsForAnimation();this._animate.setAttributeNS(null,"values",l),this._animate.setAttributeNS(null,"dur",this._colors.length*10+"s"),this._animate.setAttributeNS(null,"repeatCount","indefinite"),this._element.appendChild(this._animate),i.appendChild(this._element)}get cx(){return this._cx}set cx(n){this._cx=n,this._element.setAttributeNS(null,"cx",this._cx.toString())}get cy(){return this._cy}set cy(n){this._cy=n,this._element.setAttributeNS(null,"cy",this._cy.toString())}get radio(){return this._radio}set radio(n){this._radio=n,this._element.setAttributeNS(null,"r",this._radio.toString())}get fill(){return this._fill}set fill(n){this._fill=n,this._element.setAttributeNS(null,"fill",this._fill)}getColorsForAnimation(){const n=this._colors;let e=this._fill+";";if(n.indexOf(this._fill)===-1)return"";let a=n.indexOf(this._fill)+1;for(let r=0;r<n.length-1;r++,a++)a>=n.length&&(a=0),e+=n[a]+";";return e+=this._fill+";",e}}const Mn=["#1efdff","#2bb2ff","#ff5efd"];function or(){var s;console.log("starting circles");const t=document.querySelector("#circlesBackground"),n=t==null?void 0:t.querySelector("g");if(n==null)return;const e=(s=t==null?void 0:t.parentElement)==null?void 0:s.getBoundingClientRect();if(e==null)return;const a=i(e),r=[];for(let l=0;l<a.length;l++){const{x:c,y:f}=a[l],u=o(100,150);let v=new ir(c,f,u,Mn[l],n,Mn);r.push(v)}window.addEventListener("resize",()=>{var f;const l=(f=t==null?void 0:t.parentElement)==null?void 0:f.getBoundingClientRect();if(l==null)return;const c=i(l);for(let u=0;u<c.length;u++){const{x:v,y:p}=c[u];r[u].cx=v,r[u].cy=p}});function i(l){const{width:c,height:f}=l,u=[];return u.push({x:c,y:0}),u.push({x:0,y:f/2}),u.push({x:c,y:f}),u}function o(l,c){return Math.floor(Math.random()*(c-l+1)+l)}}or();const Rn=document.querySelector(".modal"),et=document.querySelector(".mask"),Rt=document.querySelector("#about"),Ft=document.querySelector(".home__button");let Et;Rn!=null&&et!=null&&(Et=new Ja(Rn,et));Ft==null||Ft.addEventListener("click",()=>{const t=Rt==null?void 0:Rt.getBoundingClientRect();t!=null&&window.scrollTo({top:t.y+scrollY,behavior:"smooth"})});et==null||et.addEventListener("click",()=>{Et._isVisible&&Et.closeModal()});Za.forEach(t=>lr(t));er().then(t=>{const n=t;Qa.forEach(e=>sr(e,n))});function sr(t,n){var r;const e=(r=document.querySelector(".projects"))==null?void 0:r.lastElementChild,a=ar(t,n,Et);e==null||e.appendChild(a)}function lr(t){const n=document.querySelector(".skills__list"),e=rr(t);n==null||n.appendChild(e)}
