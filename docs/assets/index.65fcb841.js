function Nd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function zd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var z={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _r=Symbol.for("react.element"),Td=Symbol.for("react.portal"),Od=Symbol.for("react.fragment"),Rd=Symbol.for("react.strict_mode"),Ld=Symbol.for("react.profiler"),Md=Symbol.for("react.provider"),Id=Symbol.for("react.context"),Fd=Symbol.for("react.forward_ref"),jd=Symbol.for("react.suspense"),Dd=Symbol.for("react.memo"),Ad=Symbol.for("react.lazy"),fs=Symbol.iterator;function Vd(e){return e===null||typeof e!="object"?null:(e=fs&&e[fs]||e["@@iterator"],typeof e=="function"?e:null)}var Ou={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ru=Object.assign,Lu={};function Tn(e,t,n){this.props=e,this.context=t,this.refs=Lu,this.updater=n||Ou}Tn.prototype.isReactComponent={};Tn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mu(){}Mu.prototype=Tn.prototype;function oa(e,t,n){this.props=e,this.context=t,this.refs=Lu,this.updater=n||Ou}var ia=oa.prototype=new Mu;ia.constructor=oa;Ru(ia,Tn.prototype);ia.isPureReactComponent=!0;var ds=Array.isArray,Iu=Object.prototype.hasOwnProperty,la={current:null},Fu={key:!0,ref:!0,__self:!0,__source:!0};function ju(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Iu.call(t,r)&&!Fu.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:_r,type:e,key:i,ref:l,props:o,_owner:la.current}}function Ud(e,t){return{$$typeof:_r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function aa(e){return typeof e=="object"&&e!==null&&e.$$typeof===_r}function Wd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ps=/\/+/g;function Oi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wd(""+e.key):t.toString(36)}function qr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case _r:case Td:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Oi(l,0):r,ds(o)?(n="",e!=null&&(n=e.replace(ps,"$&/")+"/"),qr(o,t,n,"",function(c){return c})):o!=null&&(aa(o)&&(o=Ud(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ps,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",ds(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Oi(i,a);l+=qr(i,t,n,s,o)}else if(s=Vd(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Oi(i,a++),l+=qr(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Mr(e,t,n){if(e==null)return e;var r=[],o=0;return qr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Bd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},eo={transition:null},Hd={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:eo,ReactCurrentOwner:la};L.Children={map:Mr,forEach:function(e,t,n){Mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Mr(e,function(){t++}),t},toArray:function(e){return Mr(e,function(t){return t})||[]},only:function(e){if(!aa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Tn;L.Fragment=Od;L.Profiler=Ld;L.PureComponent=oa;L.StrictMode=Rd;L.Suspense=jd;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hd;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ru({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=la.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Iu.call(t,s)&&!Fu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:_r,type:e.type,key:o,ref:i,props:r,_owner:l}};L.createContext=function(e){return e={$$typeof:Id,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Md,_context:e},e.Consumer=e};L.createElement=ju;L.createFactory=function(e){var t=ju.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Fd,render:e}};L.isValidElement=aa;L.lazy=function(e){return{$$typeof:Ad,_payload:{_status:-1,_result:e},_init:Bd}};L.memo=function(e,t){return{$$typeof:Dd,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=eo.transition;eo.transition={};try{e()}finally{eo.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return ve.current.useCallback(e,t)};L.useContext=function(e){return ve.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};L.useEffect=function(e,t){return ve.current.useEffect(e,t)};L.useId=function(){return ve.current.useId()};L.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ve.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};L.useRef=function(e){return ve.current.useRef(e)};L.useState=function(e){return ve.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ve.current.useTransition()};L.version="18.2.0";(function(e){e.exports=L})(z);const Du=zd(z.exports),ms=Nd({__proto__:null,default:Du},[z.exports]);var il={},Au={exports:{}},Re={},Vu={exports:{}},Uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,O){var R=_.length;_.push(O);e:for(;0<R;){var J=R-1>>>1,re=_[J];if(0<o(re,O))_[J]=O,_[R]=re,R=J;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var O=_[0],R=_.pop();if(R!==O){_[0]=R;e:for(var J=0,re=_.length,Rr=re>>>1;J<Rr;){var At=2*(J+1)-1,Ti=_[At],Vt=At+1,Lr=_[Vt];if(0>o(Ti,R))Vt<re&&0>o(Lr,Ti)?(_[J]=Lr,_[Vt]=R,J=Vt):(_[J]=Ti,_[At]=R,J=At);else if(Vt<re&&0>o(Lr,R))_[J]=Lr,_[Vt]=R,J=Vt;else break e}}return O}function o(_,O){var R=_.sortIndex-O.sortIndex;return R!==0?R:_.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],p=1,m=null,h=3,w=!1,g=!1,v=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(_){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=_)r(c),O.sortIndex=O.expirationTime,t(s,O);else break;O=n(c)}}function y(_){if(v=!1,d(_),!g)if(n(s)!==null)g=!0,Ni(k);else{var O=n(c);O!==null&&zi(y,O.startTime-_)}}function k(_,O){g=!1,v&&(v=!1,f(N),N=-1),w=!0;var R=h;try{for(d(O),m=n(s);m!==null&&(!(m.expirationTime>O)||_&&!Be());){var J=m.callback;if(typeof J=="function"){m.callback=null,h=m.priorityLevel;var re=J(m.expirationTime<=O);O=e.unstable_now(),typeof re=="function"?m.callback=re:m===n(s)&&r(s),d(O)}else r(s);m=n(s)}if(m!==null)var Rr=!0;else{var At=n(c);At!==null&&zi(y,At.startTime-O),Rr=!1}return Rr}finally{m=null,h=R,w=!1}}var E=!1,$=null,N=-1,Z=5,M=-1;function Be(){return!(e.unstable_now()-M<Z)}function In(){if($!==null){var _=e.unstable_now();M=_;var O=!0;try{O=$(!0,_)}finally{O?Fn():(E=!1,$=null)}}else E=!1}var Fn;if(typeof u=="function")Fn=function(){u(In)};else if(typeof MessageChannel<"u"){var cs=new MessageChannel,Pd=cs.port2;cs.port1.onmessage=In,Fn=function(){Pd.postMessage(null)}}else Fn=function(){P(In,0)};function Ni(_){$=_,E||(E=!0,Fn())}function zi(_,O){N=P(function(){_(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){g||w||(g=!0,Ni(k))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var R=h;h=O;try{return _()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,O){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var R=h;h=_;try{return O()}finally{h=R}},e.unstable_scheduleCallback=function(_,O,R){var J=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?J+R:J):R=J,_){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=R+re,_={id:p++,callback:O,priorityLevel:_,startTime:R,expirationTime:re,sortIndex:-1},R>J?(_.sortIndex=R,t(c,_),n(s)===null&&_===n(c)&&(v?(f(N),N=-1):v=!0,zi(y,R-J))):(_.sortIndex=re,t(s,_),g||w||(g=!0,Ni(k))),_},e.unstable_shouldYield=Be,e.unstable_wrapCallback=function(_){var O=h;return function(){var R=h;h=O;try{return _.apply(this,arguments)}finally{h=R}}}})(Uu);(function(e){e.exports=Uu})(Vu);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wu=z.exports,Oe=Vu.exports;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bu=new Set,lr={};function qt(e,t){kn(e,t),kn(e+"Capture",t)}function kn(e,t){for(lr[e]=t,e=0;e<t.length;e++)Bu.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ll=Object.prototype.hasOwnProperty,Qd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hs={},ys={};function Yd(e){return ll.call(ys,e)?!0:ll.call(hs,e)?!1:Qd.test(e)?ys[e]=!0:(hs[e]=!0,!1)}function Xd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kd(e,t,n,r){if(t===null||typeof t>"u"||Xd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var sa=/[\-:]([a-z])/g;function ua(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sa,ua);ue[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sa,ua);ue[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sa,ua);ue[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function ca(e,t,n,r){var o=ue.hasOwnProperty(t)?ue[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kd(t,n,o,r)&&(n=null),r||o===null?Yd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gt=Wu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ir=Symbol.for("react.element"),nn=Symbol.for("react.portal"),rn=Symbol.for("react.fragment"),fa=Symbol.for("react.strict_mode"),al=Symbol.for("react.profiler"),Hu=Symbol.for("react.provider"),Qu=Symbol.for("react.context"),da=Symbol.for("react.forward_ref"),sl=Symbol.for("react.suspense"),ul=Symbol.for("react.suspense_list"),pa=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Yu=Symbol.for("react.offscreen"),vs=Symbol.iterator;function jn(e){return e===null||typeof e!="object"?null:(e=vs&&e[vs]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Ri;function Yn(e){if(Ri===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ri=t&&t[1]||""}return`
`+Ri+e}var Li=!1;function Mi(e,t){if(!e||Li)return"";Li=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Li=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yn(e):""}function Gd(e){switch(e.tag){case 5:return Yn(e.type);case 16:return Yn("Lazy");case 13:return Yn("Suspense");case 19:return Yn("SuspenseList");case 0:case 2:case 15:return e=Mi(e.type,!1),e;case 11:return e=Mi(e.type.render,!1),e;case 1:return e=Mi(e.type,!0),e;default:return""}}function cl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rn:return"Fragment";case nn:return"Portal";case al:return"Profiler";case fa:return"StrictMode";case sl:return"Suspense";case ul:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qu:return(e.displayName||"Context")+".Consumer";case Hu:return(e._context.displayName||"Context")+".Provider";case da:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pa:return t=e.displayName||null,t!==null?t:cl(e.type)||"Memo";case xt:t=e._payload,e=e._init;try{return cl(e(t))}catch{}}return null}function Zd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cl(t);case 8:return t===fa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jd(e){var t=Xu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fr(e){e._valueTracker||(e._valueTracker=Jd(e))}function Ku(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Xu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ho(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fl(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function gs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gu(e,t){t=t.checked,t!=null&&ca(e,"checked",t,!1)}function dl(e,t){Gu(e,t);var n=Mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pl(e,t.type,n):t.hasOwnProperty("defaultValue")&&pl(e,t.type,Mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ws(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pl(e,t,n){(t!=="number"||ho(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xn=Array.isArray;function hn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Mt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ml(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Xn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Mt(n)}}function Zu(e,t){var n=Mt(t.value),r=Mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ss(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ju(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ju(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jr,bu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jr=jr||document.createElement("div"),jr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ar(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bd=["Webkit","ms","Moz","O"];Object.keys(Zn).forEach(function(e){bd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zn[t]=Zn[e]})});function qu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Zn.hasOwnProperty(e)&&Zn[e]?(""+t).trim():t+"px"}function ec(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=qu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var qd=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yl(e,t){if(t){if(qd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gl=null;function ma(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wl=null,yn=null,vn=null;function ks(e){if(e=zr(e)){if(typeof wl!="function")throw Error(x(280));var t=e.stateNode;t&&(t=Qo(t),wl(e.stateNode,e.type,t))}}function tc(e){yn?vn?vn.push(e):vn=[e]:yn=e}function nc(){if(yn){var e=yn,t=vn;if(vn=yn=null,ks(e),t)for(e=0;e<t.length;e++)ks(t[e])}}function rc(e,t){return e(t)}function oc(){}var Ii=!1;function ic(e,t,n){if(Ii)return e(t,n);Ii=!0;try{return rc(e,t,n)}finally{Ii=!1,(yn!==null||vn!==null)&&(oc(),nc())}}function sr(e,t){var n=e.stateNode;if(n===null)return null;var r=Qo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var xl=!1;if(mt)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){xl=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{xl=!1}function e0(e,t,n,r,o,i,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var Jn=!1,yo=null,vo=!1,Sl=null,t0={onError:function(e){Jn=!0,yo=e}};function n0(e,t,n,r,o,i,l,a,s){Jn=!1,yo=null,e0.apply(t0,arguments)}function r0(e,t,n,r,o,i,l,a,s){if(n0.apply(this,arguments),Jn){if(Jn){var c=yo;Jn=!1,yo=null}else throw Error(x(198));vo||(vo=!0,Sl=c)}}function en(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $s(e){if(en(e)!==e)throw Error(x(188))}function o0(e){var t=e.alternate;if(!t){if(t=en(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return $s(o),e;if(i===r)return $s(o),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function ac(e){return e=o0(e),e!==null?sc(e):null}function sc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sc(e);if(t!==null)return t;e=e.sibling}return null}var uc=Oe.unstable_scheduleCallback,Es=Oe.unstable_cancelCallback,i0=Oe.unstable_shouldYield,l0=Oe.unstable_requestPaint,b=Oe.unstable_now,a0=Oe.unstable_getCurrentPriorityLevel,ha=Oe.unstable_ImmediatePriority,cc=Oe.unstable_UserBlockingPriority,go=Oe.unstable_NormalPriority,s0=Oe.unstable_LowPriority,fc=Oe.unstable_IdlePriority,Uo=null,rt=null;function u0(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Uo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:d0,c0=Math.log,f0=Math.LN2;function d0(e){return e>>>=0,e===0?32:31-(c0(e)/f0|0)|0}var Dr=64,Ar=4194304;function Kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Kn(a):(i&=l,i!==0&&(r=Kn(i)))}else l=n&~o,l!==0?r=Kn(l):i!==0&&(r=Kn(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),o=1<<n,r|=e[n],t&=~o;return r}function p0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ke(i),a=1<<l,s=o[l];s===-1?((a&n)===0||(a&r)!==0)&&(o[l]=p0(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function dc(){var e=Dr;return Dr<<=1,(Dr&4194240)===0&&(Dr=64),e}function Fi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function h0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ke(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ya(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var D=0;function pc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var mc,va,hc,yc,vc,$l=!1,Vr=[],_t=null,Pt=null,Nt=null,ur=new Map,cr=new Map,kt=[],y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cs(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(t.pointerId)}}function An(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=zr(t),t!==null&&va(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function v0(e,t,n,r,o){switch(t){case"focusin":return _t=An(_t,e,t,n,r,o),!0;case"dragenter":return Pt=An(Pt,e,t,n,r,o),!0;case"mouseover":return Nt=An(Nt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return ur.set(i,An(ur.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,cr.set(i,An(cr.get(i)||null,e,t,n,r,o)),!0}return!1}function gc(e){var t=Bt(e.target);if(t!==null){var n=en(t);if(n!==null){if(t=n.tag,t===13){if(t=lc(n),t!==null){e.blockedOn=t,vc(e.priority,function(){hc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function to(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=El(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gl=r,n.target.dispatchEvent(r),gl=null}else return t=zr(n),t!==null&&va(t),e.blockedOn=n,!1;t.shift()}return!0}function _s(e,t,n){to(e)&&n.delete(t)}function g0(){$l=!1,_t!==null&&to(_t)&&(_t=null),Pt!==null&&to(Pt)&&(Pt=null),Nt!==null&&to(Nt)&&(Nt=null),ur.forEach(_s),cr.forEach(_s)}function Vn(e,t){e.blockedOn===t&&(e.blockedOn=null,$l||($l=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,g0)))}function fr(e){function t(o){return Vn(o,e)}if(0<Vr.length){Vn(Vr[0],e);for(var n=1;n<Vr.length;n++){var r=Vr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&Vn(_t,e),Pt!==null&&Vn(Pt,e),Nt!==null&&Vn(Nt,e),ur.forEach(t),cr.forEach(t),n=0;n<kt.length;n++)r=kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kt.length&&(n=kt[0],n.blockedOn===null);)gc(n),n.blockedOn===null&&kt.shift()}var gn=gt.ReactCurrentBatchConfig,xo=!0;function w0(e,t,n,r){var o=D,i=gn.transition;gn.transition=null;try{D=1,ga(e,t,n,r)}finally{D=o,gn.transition=i}}function x0(e,t,n,r){var o=D,i=gn.transition;gn.transition=null;try{D=4,ga(e,t,n,r)}finally{D=o,gn.transition=i}}function ga(e,t,n,r){if(xo){var o=El(e,t,n,r);if(o===null)Yi(e,t,r,So,n),Cs(e,r);else if(v0(o,e,t,n,r))r.stopPropagation();else if(Cs(e,r),t&4&&-1<y0.indexOf(e)){for(;o!==null;){var i=zr(o);if(i!==null&&mc(i),i=El(e,t,n,r),i===null&&Yi(e,t,r,So,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Yi(e,t,r,null,n)}}var So=null;function El(e,t,n,r){if(So=null,e=ma(r),e=Bt(e),e!==null)if(t=en(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return So=e,null}function wc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a0()){case ha:return 1;case cc:return 4;case go:case s0:return 16;case fc:return 536870912;default:return 16}default:return 16}}var Et=null,wa=null,no=null;function xc(){if(no)return no;var e,t=wa,n=t.length,r,o="value"in Et?Et.value:Et.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return no=o.slice(e,1<r?1-r:void 0)}function ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ur(){return!0}function Ps(){return!1}function Le(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ur:Ps,this.isPropagationStopped=Ps,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ur)},persist:function(){},isPersistent:Ur}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xa=Le(On),Nr=K({},On,{view:0,detail:0}),S0=Le(Nr),ji,Di,Un,Wo=K({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Un&&(Un&&e.type==="mousemove"?(ji=e.screenX-Un.screenX,Di=e.screenY-Un.screenY):Di=ji=0,Un=e),ji)},movementY:function(e){return"movementY"in e?e.movementY:Di}}),Ns=Le(Wo),k0=K({},Wo,{dataTransfer:0}),$0=Le(k0),E0=K({},Nr,{relatedTarget:0}),Ai=Le(E0),C0=K({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),_0=Le(C0),P0=K({},On,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),N0=Le(P0),z0=K({},On,{data:0}),zs=Le(z0),T0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=R0[e])?!!t[e]:!1}function Sa(){return L0}var M0=K({},Nr,{key:function(e){if(e.key){var t=T0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?O0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sa,charCode:function(e){return e.type==="keypress"?ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),I0=Le(M0),F0=K({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ts=Le(F0),j0=K({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sa}),D0=Le(j0),A0=K({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),V0=Le(A0),U0=K({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),W0=Le(U0),B0=[9,13,27,32],ka=mt&&"CompositionEvent"in window,bn=null;mt&&"documentMode"in document&&(bn=document.documentMode);var H0=mt&&"TextEvent"in window&&!bn,Sc=mt&&(!ka||bn&&8<bn&&11>=bn),Os=String.fromCharCode(32),Rs=!1;function kc(e,t){switch(e){case"keyup":return B0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $c(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var on=!1;function Q0(e,t){switch(e){case"compositionend":return $c(t);case"keypress":return t.which!==32?null:(Rs=!0,Os);case"textInput":return e=t.data,e===Os&&Rs?null:e;default:return null}}function Y0(e,t){if(on)return e==="compositionend"||!ka&&kc(e,t)?(e=xc(),no=wa=Et=null,on=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sc&&t.locale!=="ko"?null:t.data;default:return null}}var X0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!X0[e.type]:t==="textarea"}function Ec(e,t,n,r){tc(r),t=ko(t,"onChange"),0<t.length&&(n=new xa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,dr=null;function K0(e){Ic(e,0)}function Bo(e){var t=sn(e);if(Ku(t))return e}function G0(e,t){if(e==="change")return t}var Cc=!1;if(mt){var Vi;if(mt){var Ui="oninput"in document;if(!Ui){var Ms=document.createElement("div");Ms.setAttribute("oninput","return;"),Ui=typeof Ms.oninput=="function"}Vi=Ui}else Vi=!1;Cc=Vi&&(!document.documentMode||9<document.documentMode)}function Is(){qn&&(qn.detachEvent("onpropertychange",_c),dr=qn=null)}function _c(e){if(e.propertyName==="value"&&Bo(dr)){var t=[];Ec(t,dr,e,ma(e)),ic(K0,t)}}function Z0(e,t,n){e==="focusin"?(Is(),qn=t,dr=n,qn.attachEvent("onpropertychange",_c)):e==="focusout"&&Is()}function J0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bo(dr)}function b0(e,t){if(e==="click")return Bo(t)}function q0(e,t){if(e==="input"||e==="change")return Bo(t)}function ep(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:ep;function pr(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ll.call(t,o)||!Ze(e[o],t[o]))return!1}return!0}function Fs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function js(e,t){var n=Fs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fs(n)}}function Pc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nc(){for(var e=window,t=ho();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ho(e.document)}return t}function $a(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tp(e){var t=Nc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Pc(n.ownerDocument.documentElement,n)){if(r!==null&&$a(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=js(n,i);var l=js(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var np=mt&&"documentMode"in document&&11>=document.documentMode,ln=null,Cl=null,er=null,_l=!1;function Ds(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_l||ln==null||ln!==ho(r)||(r=ln,"selectionStart"in r&&$a(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),er&&pr(er,r)||(er=r,r=ko(Cl,"onSelect"),0<r.length&&(t=new xa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ln)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var an={animationend:Wr("Animation","AnimationEnd"),animationiteration:Wr("Animation","AnimationIteration"),animationstart:Wr("Animation","AnimationStart"),transitionend:Wr("Transition","TransitionEnd")},Wi={},zc={};mt&&(zc=document.createElement("div").style,"AnimationEvent"in window||(delete an.animationend.animation,delete an.animationiteration.animation,delete an.animationstart.animation),"TransitionEvent"in window||delete an.transitionend.transition);function Ho(e){if(Wi[e])return Wi[e];if(!an[e])return e;var t=an[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zc)return Wi[e]=t[n];return e}var Tc=Ho("animationend"),Oc=Ho("animationiteration"),Rc=Ho("animationstart"),Lc=Ho("transitionend"),Mc=new Map,As="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ft(e,t){Mc.set(e,t),qt(t,[e])}for(var Bi=0;Bi<As.length;Bi++){var Hi=As[Bi],rp=Hi.toLowerCase(),op=Hi[0].toUpperCase()+Hi.slice(1);Ft(rp,"on"+op)}Ft(Tc,"onAnimationEnd");Ft(Oc,"onAnimationIteration");Ft(Rc,"onAnimationStart");Ft("dblclick","onDoubleClick");Ft("focusin","onFocus");Ft("focusout","onBlur");Ft(Lc,"onTransitionEnd");kn("onMouseEnter",["mouseout","mouseover"]);kn("onMouseLeave",["mouseout","mouseover"]);kn("onPointerEnter",["pointerout","pointerover"]);kn("onPointerLeave",["pointerout","pointerover"]);qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ip=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gn));function Vs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,r0(r,t,void 0,e),e.currentTarget=null}function Ic(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Vs(o,a,c),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Vs(o,a,c),i=s}}}if(vo)throw e=Sl,vo=!1,Sl=null,e}function B(e,t){var n=t[Ol];n===void 0&&(n=t[Ol]=new Set);var r=e+"__bubble";n.has(r)||(Fc(t,e,2,!1),n.add(r))}function Qi(e,t,n){var r=0;t&&(r|=4),Fc(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function mr(e){if(!e[Br]){e[Br]=!0,Bu.forEach(function(n){n!=="selectionchange"&&(ip.has(n)||Qi(n,!1,e),Qi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Br]||(t[Br]=!0,Qi("selectionchange",!1,t))}}function Fc(e,t,n,r){switch(wc(t)){case 1:var o=w0;break;case 4:o=x0;break;default:o=ga}n=o.bind(null,t,n,e),o=void 0,!xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Yi(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Bt(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}ic(function(){var c=i,p=ma(n),m=[];e:{var h=Mc.get(e);if(h!==void 0){var w=xa,g=e;switch(e){case"keypress":if(ro(n)===0)break e;case"keydown":case"keyup":w=I0;break;case"focusin":g="focus",w=Ai;break;case"focusout":g="blur",w=Ai;break;case"beforeblur":case"afterblur":w=Ai;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=D0;break;case Tc:case Oc:case Rc:w=_0;break;case Lc:w=V0;break;case"scroll":w=S0;break;case"wheel":w=W0;break;case"copy":case"cut":case"paste":w=N0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ts}var v=(t&4)!==0,P=!v&&e==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var u=c,d;u!==null;){d=u;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,f!==null&&(y=sr(u,f),y!=null&&v.push(hr(u,y,d)))),P)break;u=u.return}0<v.length&&(h=new w(h,g,null,n,p),m.push({event:h,listeners:v}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==gl&&(g=n.relatedTarget||n.fromElement)&&(Bt(g)||g[ht]))break e;if((w||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,w?(g=n.relatedTarget||n.toElement,w=c,g=g?Bt(g):null,g!==null&&(P=en(g),g!==P||g.tag!==5&&g.tag!==6)&&(g=null)):(w=null,g=c),w!==g)){if(v=Ns,y="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ts,y="onPointerLeave",f="onPointerEnter",u="pointer"),P=w==null?h:sn(w),d=g==null?h:sn(g),h=new v(y,u+"leave",w,n,p),h.target=P,h.relatedTarget=d,y=null,Bt(p)===c&&(v=new v(f,u+"enter",g,n,p),v.target=d,v.relatedTarget=P,y=v),P=y,w&&g)t:{for(v=w,f=g,u=0,d=v;d;d=tn(d))u++;for(d=0,y=f;y;y=tn(y))d++;for(;0<u-d;)v=tn(v),u--;for(;0<d-u;)f=tn(f),d--;for(;u--;){if(v===f||f!==null&&v===f.alternate)break t;v=tn(v),f=tn(f)}v=null}else v=null;w!==null&&Us(m,h,w,v,!1),g!==null&&P!==null&&Us(m,P,g,v,!0)}}e:{if(h=c?sn(c):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var k=G0;else if(Ls(h))if(Cc)k=q0;else{k=J0;var E=Z0}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=b0);if(k&&(k=k(e,c))){Ec(m,k,n,p);break e}E&&E(e,h,c),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&pl(h,"number",h.value)}switch(E=c?sn(c):window,e){case"focusin":(Ls(E)||E.contentEditable==="true")&&(ln=E,Cl=c,er=null);break;case"focusout":er=Cl=ln=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,Ds(m,n,p);break;case"selectionchange":if(np)break;case"keydown":case"keyup":Ds(m,n,p)}var $;if(ka)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else on?kc(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Sc&&n.locale!=="ko"&&(on||N!=="onCompositionStart"?N==="onCompositionEnd"&&on&&($=xc()):(Et=p,wa="value"in Et?Et.value:Et.textContent,on=!0)),E=ko(c,N),0<E.length&&(N=new zs(N,e,null,n,p),m.push({event:N,listeners:E}),$?N.data=$:($=$c(n),$!==null&&(N.data=$)))),($=H0?Q0(e,n):Y0(e,n))&&(c=ko(c,"onBeforeInput"),0<c.length&&(p=new zs("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=$))}Ic(m,t)})}function hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=sr(e,n),i!=null&&r.unshift(hr(e,i,o)),i=sr(e,t),i!=null&&r.push(hr(e,i,o))),e=e.return}return r}function tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Us(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=sr(n,i),s!=null&&l.unshift(hr(n,s,a))):o||(s=sr(n,i),s!=null&&l.push(hr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var lp=/\r\n?/g,ap=/\u0000|\uFFFD/g;function Ws(e){return(typeof e=="string"?e:""+e).replace(lp,`
`).replace(ap,"")}function Hr(e,t,n){if(t=Ws(t),Ws(e)!==t&&n)throw Error(x(425))}function $o(){}var Pl=null,Nl=null;function zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Tl=typeof setTimeout=="function"?setTimeout:void 0,sp=typeof clearTimeout=="function"?clearTimeout:void 0,Bs=typeof Promise=="function"?Promise:void 0,up=typeof queueMicrotask=="function"?queueMicrotask:typeof Bs<"u"?function(e){return Bs.resolve(null).then(e).catch(cp)}:Tl;function cp(e){setTimeout(function(){throw e})}function Xi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),fr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);fr(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rn=Math.random().toString(36).slice(2),nt="__reactFiber$"+Rn,yr="__reactProps$"+Rn,ht="__reactContainer$"+Rn,Ol="__reactEvents$"+Rn,fp="__reactListeners$"+Rn,dp="__reactHandles$"+Rn;function Bt(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hs(e);e!==null;){if(n=e[nt])return n;e=Hs(e)}return t}e=n,n=e.parentNode}return null}function zr(e){return e=e[nt]||e[ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function Qo(e){return e[yr]||null}var Rl=[],un=-1;function jt(e){return{current:e}}function H(e){0>un||(e.current=Rl[un],Rl[un]=null,un--)}function W(e,t){un++,Rl[un]=e.current,e.current=t}var It={},me=jt(It),ke=jt(!1),Kt=It;function $n(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function $e(e){return e=e.childContextTypes,e!=null}function Eo(){H(ke),H(me)}function Qs(e,t,n){if(me.current!==It)throw Error(x(168));W(me,t),W(ke,n)}function jc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(x(108,Zd(e)||"Unknown",o));return K({},n,r)}function Co(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,Kt=me.current,W(me,e),W(ke,ke.current),!0}function Ys(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=jc(e,t,Kt),r.__reactInternalMemoizedMergedChildContext=e,H(ke),H(me),W(me,e)):H(ke),W(ke,n)}var ct=null,Yo=!1,Ki=!1;function Dc(e){ct===null?ct=[e]:ct.push(e)}function pp(e){Yo=!0,Dc(e)}function Dt(){if(!Ki&&ct!==null){Ki=!0;var e=0,t=D;try{var n=ct;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ct=null,Yo=!1}catch(o){throw ct!==null&&(ct=ct.slice(e+1)),uc(ha,Dt),o}finally{D=t,Ki=!1}}return null}var cn=[],fn=0,_o=null,Po=0,Ie=[],Fe=0,Gt=null,ft=1,dt="";function Ut(e,t){cn[fn++]=Po,cn[fn++]=_o,_o=e,Po=t}function Ac(e,t,n){Ie[Fe++]=ft,Ie[Fe++]=dt,Ie[Fe++]=Gt,Gt=e;var r=ft;e=dt;var o=32-Ke(r)-1;r&=~(1<<o),n+=1;var i=32-Ke(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ft=1<<32-Ke(t)+o|n<<o|r,dt=i+e}else ft=1<<i|n<<o|r,dt=e}function Ea(e){e.return!==null&&(Ut(e,1),Ac(e,1,0))}function Ca(e){for(;e===_o;)_o=cn[--fn],cn[fn]=null,Po=cn[--fn],cn[fn]=null;for(;e===Gt;)Gt=Ie[--Fe],Ie[Fe]=null,dt=Ie[--Fe],Ie[Fe]=null,ft=Ie[--Fe],Ie[Fe]=null}var ze=null,Ne=null,Q=!1,Xe=null;function Vc(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Ne=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gt!==null?{id:ft,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Ne=null,!0):!1;default:return!1}}function Ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ml(e){if(Q){var t=Ne;if(t){var n=t;if(!Xs(e,t)){if(Ll(e))throw Error(x(418));t=zt(n.nextSibling);var r=ze;t&&Xs(e,t)?Vc(r,n):(e.flags=e.flags&-4097|2,Q=!1,ze=e)}}else{if(Ll(e))throw Error(x(418));e.flags=e.flags&-4097|2,Q=!1,ze=e}}}function Ks(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Qr(e){if(e!==ze)return!1;if(!Q)return Ks(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zl(e.type,e.memoizedProps)),t&&(t=Ne)){if(Ll(e))throw Uc(),Error(x(418));for(;t;)Vc(e,t),t=zt(t.nextSibling)}if(Ks(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=ze?zt(e.stateNode.nextSibling):null;return!0}function Uc(){for(var e=Ne;e;)e=zt(e.nextSibling)}function En(){Ne=ze=null,Q=!1}function _a(e){Xe===null?Xe=[e]:Xe.push(e)}var mp=gt.ReactCurrentBatchConfig;function Qe(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var No=jt(null),zo=null,dn=null,Pa=null;function Na(){Pa=dn=zo=null}function za(e){var t=No.current;H(No),e._currentValue=t}function Il(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function wn(e,t){zo=e,Pa=dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Se=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(Pa!==e)if(e={context:e,memoizedValue:t,next:null},dn===null){if(zo===null)throw Error(x(308));dn=e,zo.dependencies={lanes:0,firstContext:e}}else dn=dn.next=e;return t}var Ht=null;function Ta(e){Ht===null?Ht=[e]:Ht.push(e)}function Wc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ta(t)):(n.next=o.next,o.next=n),t.interleaved=n,yt(e,r)}function yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var St=!1;function Oa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(I&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,yt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ta(r)):(t.next=o.next,o.next=t),r.interleaved=t,yt(e,n)}function oo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ya(e,n)}}function Gs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function To(e,t,n,r){var o=e.updateQueue;St=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?i=c:l.next=c,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=c:a.next=c,p.lastBaseUpdate=s))}if(i!==null){var m=o.baseState;l=0,p=c=s=null,a=i;do{var h=a.lane,w=a.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,v=a;switch(h=t,w=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){m=g.call(w,m,h);break e}m=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(w,m,h):g,h==null)break e;m=K({},m,h);break e;case 2:St=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else w={eventTime:w,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(c=p=w,s=m):p=p.next=w,l|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(p===null&&(s=m),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Jt|=l,e.lanes=l,e.memoizedState=m}}function Zs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(x(191,o));o.call(r)}}}var Hc=new Wu.Component().refs;function Fl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xo={isMounted:function(e){return(e=e._reactInternals)?en(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Rt(e),i=pt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Tt(e,i,o),t!==null&&(Ge(t,e,o,r),oo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Rt(e),i=pt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Tt(e,i,o),t!==null&&(Ge(t,e,o,r),oo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Rt(e),o=pt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Tt(e,o,r),t!==null&&(Ge(t,e,r,n),oo(t,e,r))}};function Js(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!pr(n,r)||!pr(o,i):!0}function Qc(e,t,n){var r=!1,o=It,i=t.contextType;return typeof i=="object"&&i!==null?i=Ae(i):(o=$e(t)?Kt:me.current,r=t.contextTypes,i=(r=r!=null)?$n(e,o):It),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function bs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xo.enqueueReplaceState(t,t.state,null)}function jl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Hc,Oa(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ae(i):(i=$e(t)?Kt:me.current,o.context=$n(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Fl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Xo.enqueueReplaceState(o,o.state,null),To(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Wn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===Hc&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function Yr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qs(e){var t=e._init;return t(e._payload)}function Yc(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=Lt(f,u),f.index=0,f.sibling=null,f}function i(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,d,y){return u===null||u.tag!==6?(u=tl(d,f.mode,y),u.return=f,u):(u=o(u,d),u.return=f,u)}function s(f,u,d,y){var k=d.type;return k===rn?p(f,u,d.props.children,y,d.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===xt&&qs(k)===u.type)?(y=o(u,d.props),y.ref=Wn(f,u,d),y.return=f,y):(y=co(d.type,d.key,d.props,null,f.mode,y),y.ref=Wn(f,u,d),y.return=f,y)}function c(f,u,d,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=nl(d,f.mode,y),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function p(f,u,d,y,k){return u===null||u.tag!==7?(u=Xt(d,f.mode,y,k),u.return=f,u):(u=o(u,d),u.return=f,u)}function m(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=tl(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ir:return d=co(u.type,u.key,u.props,null,f.mode,d),d.ref=Wn(f,null,u),d.return=f,d;case nn:return u=nl(u,f.mode,d),u.return=f,u;case xt:var y=u._init;return m(f,y(u._payload),d)}if(Xn(u)||jn(u))return u=Xt(u,f.mode,d,null),u.return=f,u;Yr(f,u)}return null}function h(f,u,d,y){var k=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return k!==null?null:a(f,u,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ir:return d.key===k?s(f,u,d,y):null;case nn:return d.key===k?c(f,u,d,y):null;case xt:return k=d._init,h(f,u,k(d._payload),y)}if(Xn(d)||jn(d))return k!==null?null:p(f,u,d,y,null);Yr(f,d)}return null}function w(f,u,d,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(d)||null,a(u,f,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ir:return f=f.get(y.key===null?d:y.key)||null,s(u,f,y,k);case nn:return f=f.get(y.key===null?d:y.key)||null,c(u,f,y,k);case xt:var E=y._init;return w(f,u,d,E(y._payload),k)}if(Xn(y)||jn(y))return f=f.get(d)||null,p(u,f,y,k,null);Yr(u,y)}return null}function g(f,u,d,y){for(var k=null,E=null,$=u,N=u=0,Z=null;$!==null&&N<d.length;N++){$.index>N?(Z=$,$=null):Z=$.sibling;var M=h(f,$,d[N],y);if(M===null){$===null&&($=Z);break}e&&$&&M.alternate===null&&t(f,$),u=i(M,u,N),E===null?k=M:E.sibling=M,E=M,$=Z}if(N===d.length)return n(f,$),Q&&Ut(f,N),k;if($===null){for(;N<d.length;N++)$=m(f,d[N],y),$!==null&&(u=i($,u,N),E===null?k=$:E.sibling=$,E=$);return Q&&Ut(f,N),k}for($=r(f,$);N<d.length;N++)Z=w($,f,N,d[N],y),Z!==null&&(e&&Z.alternate!==null&&$.delete(Z.key===null?N:Z.key),u=i(Z,u,N),E===null?k=Z:E.sibling=Z,E=Z);return e&&$.forEach(function(Be){return t(f,Be)}),Q&&Ut(f,N),k}function v(f,u,d,y){var k=jn(d);if(typeof k!="function")throw Error(x(150));if(d=k.call(d),d==null)throw Error(x(151));for(var E=k=null,$=u,N=u=0,Z=null,M=d.next();$!==null&&!M.done;N++,M=d.next()){$.index>N?(Z=$,$=null):Z=$.sibling;var Be=h(f,$,M.value,y);if(Be===null){$===null&&($=Z);break}e&&$&&Be.alternate===null&&t(f,$),u=i(Be,u,N),E===null?k=Be:E.sibling=Be,E=Be,$=Z}if(M.done)return n(f,$),Q&&Ut(f,N),k;if($===null){for(;!M.done;N++,M=d.next())M=m(f,M.value,y),M!==null&&(u=i(M,u,N),E===null?k=M:E.sibling=M,E=M);return Q&&Ut(f,N),k}for($=r(f,$);!M.done;N++,M=d.next())M=w($,f,N,M.value,y),M!==null&&(e&&M.alternate!==null&&$.delete(M.key===null?N:M.key),u=i(M,u,N),E===null?k=M:E.sibling=M,E=M);return e&&$.forEach(function(In){return t(f,In)}),Q&&Ut(f,N),k}function P(f,u,d,y){if(typeof d=="object"&&d!==null&&d.type===rn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Ir:e:{for(var k=d.key,E=u;E!==null;){if(E.key===k){if(k=d.type,k===rn){if(E.tag===7){n(f,E.sibling),u=o(E,d.props.children),u.return=f,f=u;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===xt&&qs(k)===E.type){n(f,E.sibling),u=o(E,d.props),u.ref=Wn(f,E,d),u.return=f,f=u;break e}n(f,E);break}else t(f,E);E=E.sibling}d.type===rn?(u=Xt(d.props.children,f.mode,y,d.key),u.return=f,f=u):(y=co(d.type,d.key,d.props,null,f.mode,y),y.ref=Wn(f,u,d),y.return=f,f=y)}return l(f);case nn:e:{for(E=d.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=nl(d,f.mode,y),u.return=f,f=u}return l(f);case xt:return E=d._init,P(f,u,E(d._payload),y)}if(Xn(d))return g(f,u,d,y);if(jn(d))return v(f,u,d,y);Yr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,d),u.return=f,f=u):(n(f,u),u=tl(d,f.mode,y),u.return=f,f=u),l(f)):n(f,u)}return P}var Cn=Yc(!0),Xc=Yc(!1),Tr={},ot=jt(Tr),vr=jt(Tr),gr=jt(Tr);function Qt(e){if(e===Tr)throw Error(x(174));return e}function Ra(e,t){switch(W(gr,t),W(vr,e),W(ot,Tr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hl(t,e)}H(ot),W(ot,t)}function _n(){H(ot),H(vr),H(gr)}function Kc(e){Qt(gr.current);var t=Qt(ot.current),n=hl(t,e.type);t!==n&&(W(vr,e),W(ot,n))}function La(e){vr.current===e&&(H(ot),H(vr))}var Y=jt(0);function Oo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gi=[];function Ma(){for(var e=0;e<Gi.length;e++)Gi[e]._workInProgressVersionPrimary=null;Gi.length=0}var io=gt.ReactCurrentDispatcher,Zi=gt.ReactCurrentBatchConfig,Zt=0,X=null,te=null,oe=null,Ro=!1,tr=!1,wr=0,hp=0;function ce(){throw Error(x(321))}function Ia(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function Fa(e,t,n,r,o,i){if(Zt=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,io.current=e===null||e.memoizedState===null?wp:xp,e=n(r,o),tr){i=0;do{if(tr=!1,wr=0,25<=i)throw Error(x(301));i+=1,oe=te=null,t.updateQueue=null,io.current=Sp,e=n(r,o)}while(tr)}if(io.current=Lo,t=te!==null&&te.next!==null,Zt=0,oe=te=X=null,Ro=!1,t)throw Error(x(300));return e}function ja(){var e=wr!==0;return wr=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?X.memoizedState=oe=e:oe=oe.next=e,oe}function Ve(){if(te===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=oe===null?X.memoizedState:oe.next;if(t!==null)oe=t,te=e;else{if(e===null)throw Error(x(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},oe===null?X.memoizedState=oe=e:oe=oe.next=e}return oe}function xr(e,t){return typeof t=="function"?t(e):t}function Ji(e){var t=Ve(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=te,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,c=i;do{var p=c.lane;if((Zt&p)===p)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=m,l=r):s=s.next=m,X.lanes|=p,Jt|=p}c=c.next}while(c!==null&&c!==i);s===null?l=r:s.next=a,Ze(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,X.lanes|=i,Jt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bi(e){var t=Ve(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ze(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Gc(){}function Zc(e,t){var n=X,r=Ve(),o=t(),i=!Ze(r.memoizedState,o);if(i&&(r.memoizedState=o,Se=!0),r=r.queue,Da(qc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,Sr(9,bc.bind(null,n,r,o,t),void 0,null),ie===null)throw Error(x(349));(Zt&30)!==0||Jc(n,t,o)}return o}function Jc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bc(e,t,n,r){t.value=n,t.getSnapshot=r,ef(t)&&tf(e)}function qc(e,t,n){return n(function(){ef(t)&&tf(e)})}function ef(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function tf(e){var t=yt(e,1);t!==null&&Ge(t,e,1,-1)}function eu(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xr,lastRenderedState:e},t.queue=e,e=e.dispatch=gp.bind(null,X,e),[t.memoizedState,e]}function Sr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nf(){return Ve().memoizedState}function lo(e,t,n,r){var o=qe();X.flags|=e,o.memoizedState=Sr(1|t,n,void 0,r===void 0?null:r)}function Ko(e,t,n,r){var o=Ve();r=r===void 0?null:r;var i=void 0;if(te!==null){var l=te.memoizedState;if(i=l.destroy,r!==null&&Ia(r,l.deps)){o.memoizedState=Sr(t,n,i,r);return}}X.flags|=e,o.memoizedState=Sr(1|t,n,i,r)}function tu(e,t){return lo(8390656,8,e,t)}function Da(e,t){return Ko(2048,8,e,t)}function rf(e,t){return Ko(4,2,e,t)}function of(e,t){return Ko(4,4,e,t)}function lf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function af(e,t,n){return n=n!=null?n.concat([e]):null,Ko(4,4,lf.bind(null,t,e),n)}function Aa(){}function sf(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ia(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function uf(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ia(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cf(e,t,n){return(Zt&21)===0?(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n):(Ze(n,t)||(n=dc(),X.lanes|=n,Jt|=n,e.baseState=!0),t)}function yp(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Zi.transition;Zi.transition={};try{e(!1),t()}finally{D=n,Zi.transition=r}}function ff(){return Ve().memoizedState}function vp(e,t,n){var r=Rt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},df(e))pf(t,n);else if(n=Wc(e,t,n,r),n!==null){var o=ye();Ge(n,e,r,o),mf(n,t,r)}}function gp(e,t,n){var r=Rt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(df(e))pf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Ze(a,l)){var s=t.interleaved;s===null?(o.next=o,Ta(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Wc(e,t,o,r),n!==null&&(o=ye(),Ge(n,e,r,o),mf(n,t,r))}}function df(e){var t=e.alternate;return e===X||t!==null&&t===X}function pf(e,t){tr=Ro=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mf(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ya(e,n)}}var Lo={readContext:Ae,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},wp={readContext:Ae,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:tu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,lo(4194308,4,lf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return lo(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vp.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:eu,useDebugValue:Aa,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=eu(!1),t=e[0];return e=yp.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,o=qe();if(Q){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),ie===null)throw Error(x(349));(Zt&30)!==0||Jc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,tu(qc.bind(null,r,i,e),[e]),r.flags|=2048,Sr(9,bc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=qe(),t=ie.identifierPrefix;if(Q){var n=dt,r=ft;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=hp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xp={readContext:Ae,useCallback:sf,useContext:Ae,useEffect:Da,useImperativeHandle:af,useInsertionEffect:rf,useLayoutEffect:of,useMemo:uf,useReducer:Ji,useRef:nf,useState:function(){return Ji(xr)},useDebugValue:Aa,useDeferredValue:function(e){var t=Ve();return cf(t,te.memoizedState,e)},useTransition:function(){var e=Ji(xr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Gc,useSyncExternalStore:Zc,useId:ff,unstable_isNewReconciler:!1},Sp={readContext:Ae,useCallback:sf,useContext:Ae,useEffect:Da,useImperativeHandle:af,useInsertionEffect:rf,useLayoutEffect:of,useMemo:uf,useReducer:bi,useRef:nf,useState:function(){return bi(xr)},useDebugValue:Aa,useDeferredValue:function(e){var t=Ve();return te===null?t.memoizedState=e:cf(t,te.memoizedState,e)},useTransition:function(){var e=bi(xr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Gc,useSyncExternalStore:Zc,useId:ff,unstable_isNewReconciler:!1};function Pn(e,t){try{var n="",r=t;do n+=Gd(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function qi(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Dl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var kp=typeof WeakMap=="function"?WeakMap:Map;function hf(e,t,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Io||(Io=!0,Kl=r),Dl(e,t)},n}function yf(e,t,n){n=pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Dl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Dl(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function nu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new kp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Fp.bind(null,e,t,n),t.then(e,e))}function ru(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ou(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pt(-1,1),t.tag=2,Tt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var $p=gt.ReactCurrentOwner,Se=!1;function he(e,t,n,r){t.child=e===null?Xc(t,null,n,r):Cn(t,e.child,n,r)}function iu(e,t,n,r,o){n=n.render;var i=t.ref;return wn(t,o),r=Fa(e,t,n,r,i,o),n=ja(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(Q&&n&&Ea(t),t.flags|=1,he(e,t,r,o),t.child)}function lu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Xa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,vf(e,t,i,r,o)):(e=co(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:pr,n(l,r)&&e.ref===t.ref)return vt(e,t,o)}return t.flags|=1,e=Lt(i,r),e.ref=t.ref,e.return=t,t.child=e}function vf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(pr(i,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Se=!0);else return t.lanes=e.lanes,vt(e,t,o)}return Al(e,t,n,r,o)}function gf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(mn,_e),_e|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(mn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(mn,_e),_e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(mn,_e),_e|=r;return he(e,t,o,n),t.child}function wf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Al(e,t,n,r,o){var i=$e(n)?Kt:me.current;return i=$n(t,i),wn(t,o),n=Fa(e,t,n,r,i,o),r=ja(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(Q&&r&&Ea(t),t.flags|=1,he(e,t,n,o),t.child)}function au(e,t,n,r,o){if($e(n)){var i=!0;Co(t)}else i=!1;if(wn(t,o),t.stateNode===null)ao(e,t),Qc(t,n,r),jl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ae(c):(c=$e(n)?Kt:me.current,c=$n(t,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&bs(t,l,r,c),St=!1;var h=t.memoizedState;l.state=h,To(t,r,l,o),s=t.memoizedState,a!==r||h!==s||ke.current||St?(typeof p=="function"&&(Fl(t,n,p,r),s=t.memoizedState),(a=St||Js(t,n,a,r,h,s,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Bc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Qe(t.type,a),l.props=c,m=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ae(s):(s=$e(n)?Kt:me.current,s=$n(t,s));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||h!==s)&&bs(t,l,r,s),St=!1,h=t.memoizedState,l.state=h,To(t,r,l,o);var g=t.memoizedState;a!==m||h!==g||ke.current||St?(typeof w=="function"&&(Fl(t,n,w,r),g=t.memoizedState),(c=St||Js(t,n,c,r,h,g,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Vl(e,t,n,r,i,o)}function Vl(e,t,n,r,o,i){wf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Ys(t,n,!1),vt(e,t,i);r=t.stateNode,$p.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Cn(t,e.child,null,i),t.child=Cn(t,null,a,i)):he(e,t,a,i),t.memoizedState=r.state,o&&Ys(t,n,!0),t.child}function xf(e){var t=e.stateNode;t.pendingContext?Qs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qs(e,t.context,!1),Ra(e,t.containerInfo)}function su(e,t,n,r,o){return En(),_a(o),t.flags|=256,he(e,t,n,r),t.child}var Ul={dehydrated:null,treeContext:null,retryLane:0};function Wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sf(e,t,n){var r=t.pendingProps,o=Y.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(Y,o&1),e===null)return Ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Jo(l,r,0,null),e=Xt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Wl(n),t.memoizedState=Ul,e):Va(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Ep(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Lt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Lt(a,i):(i=Xt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Wl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ul,r}return i=e.child,e=i.sibling,r=Lt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Va(e,t){return t=Jo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xr(e,t,n,r){return r!==null&&_a(r),Cn(t,e.child,null,n),e=Va(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ep(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=qi(Error(x(422))),Xr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Jo({mode:"visible",children:r.children},o,0,null),i=Xt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Cn(t,e.child,null,l),t.child.memoizedState=Wl(l),t.memoizedState=Ul,i);if((t.mode&1)===0)return Xr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(x(419)),r=qi(i,r,void 0),Xr(e,t,l,r)}if(a=(l&e.childLanes)!==0,Se||a){if(r=ie,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,yt(e,o),Ge(r,e,o,-1))}return Ya(),r=qi(Error(x(421))),Xr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=jp.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ne=zt(o.nextSibling),ze=t,Q=!0,Xe=null,e!==null&&(Ie[Fe++]=ft,Ie[Fe++]=dt,Ie[Fe++]=Gt,ft=e.id,dt=e.overflow,Gt=t),t=Va(t,r.children),t.flags|=4096,t)}function uu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Il(e.return,t,n)}function el(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function kf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(he(e,t,r.children,n),r=Y.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uu(e,n,t);else if(e.tag===19)uu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Y,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Oo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),el(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Oo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}el(t,!0,n,null,i);break;case"together":el(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ao(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jt|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=Lt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Lt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cp(e,t,n){switch(t.tag){case 3:xf(t),En();break;case 5:Kc(t);break;case 1:$e(t.type)&&Co(t);break;case 4:Ra(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(No,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Y,Y.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Sf(e,t,n):(W(Y,Y.current&1),e=vt(e,t,n),e!==null?e.sibling:null);W(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return kf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,gf(e,t,n)}return vt(e,t,n)}var $f,Bl,Ef,Cf;$f=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bl=function(){};Ef=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Qt(ot.current);var i=null;switch(n){case"input":o=fl(e,o),r=fl(e,r),i=[];break;case"select":o=K({},o,{value:void 0}),r=K({},r,{value:void 0}),i=[];break;case"textarea":o=ml(e,o),r=ml(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$o)}yl(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(lr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(lr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&B("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Cf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Bn(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _p(e,t,n){var r=t.pendingProps;switch(Ca(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return $e(t.type)&&Eo(),fe(t),null;case 3:return r=t.stateNode,_n(),H(ke),H(me),Ma(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Xe!==null&&(Jl(Xe),Xe=null))),Bl(e,t),fe(t),null;case 5:La(t);var o=Qt(gr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ef(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return fe(t),null}if(e=Qt(ot.current),Qr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[nt]=t,r[yr]=i,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<Gn.length;o++)B(Gn[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":gs(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":xs(r,i),B("invalid",r)}yl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,a,e),o=["children",""+a]):lr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&B("scroll",r)}switch(n){case"input":Fr(r),ws(r,i,!0);break;case"textarea":Fr(r),Ss(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$o)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ju(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[nt]=t,e[yr]=r,$f(e,t,!1,!1),t.stateNode=e;e:{switch(l=vl(n,r),n){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<Gn.length;o++)B(Gn[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":gs(e,r),o=fl(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=K({},r,{value:void 0}),B("invalid",e);break;case"textarea":xs(e,r),o=ml(e,r),B("invalid",e);break;default:o=r}yl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?ec(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&bu(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ar(e,s):typeof s=="number"&&ar(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(lr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&B("scroll",e):s!=null&&ca(e,i,s,l))}switch(n){case"input":Fr(e),ws(e,r,!1);break;case"textarea":Fr(e),Ss(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Mt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?hn(e,!!r.multiple,i,!1):r.defaultValue!=null&&hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=$o)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)Cf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Qt(gr.current),Qt(ot.current),Qr(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(i=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:Hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return fe(t),null;case 13:if(H(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Ne!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Uc(),En(),t.flags|=98560,i=!1;else if(i=Qr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[nt]=t}else En(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fe(t),i=!1}else Xe!==null&&(Jl(Xe),Xe=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Y.current&1)!==0?ne===0&&(ne=3):Ya())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return _n(),Bl(e,t),e===null&&mr(t.stateNode.containerInfo),fe(t),null;case 10:return za(t.type._context),fe(t),null;case 17:return $e(t.type)&&Eo(),fe(t),null;case 19:if(H(Y),i=t.memoizedState,i===null)return fe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Bn(i,!1);else{if(ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Oo(e),l!==null){for(t.flags|=128,Bn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&b()>Nn&&(t.flags|=128,r=!0,Bn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Oo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Bn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Q)return fe(t),null}else 2*b()-i.renderingStartTime>Nn&&n!==1073741824&&(t.flags|=128,r=!0,Bn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=b(),t.sibling=null,n=Y.current,W(Y,r?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return Qa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(_e&1073741824)!==0&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Pp(e,t){switch(Ca(t),t.tag){case 1:return $e(t.type)&&Eo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _n(),H(ke),H(me),Ma(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return La(t),null;case 13:if(H(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Y),null;case 4:return _n(),null;case 10:return za(t.type._context),null;case 22:case 23:return Qa(),null;case 24:return null;default:return null}}var Kr=!1,pe=!1,Np=typeof WeakSet=="function"?WeakSet:Set,C=null;function pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Hl(e,t,n){try{n()}catch(r){G(e,t,r)}}var cu=!1;function zp(e,t){if(Pl=xo,e=Nc(),$a(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,c=0,p=0,m=e,h=null;t:for(;;){for(var w;m!==n||o!==0&&m.nodeType!==3||(a=l+o),m!==i||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(w=m.firstChild)!==null;)h=m,m=w;for(;;){if(m===e)break t;if(h===n&&++c===o&&(a=l),h===i&&++p===r&&(s=l),(w=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nl={focusedElem:e,selectionRange:n},xo=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var g=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,P=g.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Qe(t.type,v),P);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(y){G(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return g=cu,cu=!1,g}function nr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Hl(t,n,i)}o=o.next}while(o!==r)}}function Go(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ql(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _f(e){var t=e.alternate;t!==null&&(e.alternate=null,_f(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[yr],delete t[Ol],delete t[fp],delete t[dp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pf(e){return e.tag===5||e.tag===3||e.tag===4}function fu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$o));else if(r!==4&&(e=e.child,e!==null))for(Yl(e,t,n),e=e.sibling;e!==null;)Yl(e,t,n),e=e.sibling}function Xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}var ae=null,Ye=!1;function wt(e,t,n){for(n=n.child;n!==null;)Nf(e,t,n),n=n.sibling}function Nf(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Uo,n)}catch{}switch(n.tag){case 5:pe||pn(n,t);case 6:var r=ae,o=Ye;ae=null,wt(e,t,n),ae=r,Ye=o,ae!==null&&(Ye?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Ye?(e=ae,n=n.stateNode,e.nodeType===8?Xi(e.parentNode,n):e.nodeType===1&&Xi(e,n),fr(e)):Xi(ae,n.stateNode));break;case 4:r=ae,o=Ye,ae=n.stateNode.containerInfo,Ye=!0,wt(e,t,n),ae=r,Ye=o;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&Hl(n,t,l),o=o.next}while(o!==r)}wt(e,t,n);break;case 1:if(!pe&&(pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,t,a)}wt(e,t,n);break;case 21:wt(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,wt(e,t,n),pe=r):wt(e,t,n);break;default:wt(e,t,n)}}function du(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Np),t.forEach(function(r){var o=Dp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ae=a.stateNode,Ye=!1;break e;case 3:ae=a.stateNode.containerInfo,Ye=!0;break e;case 4:ae=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(ae===null)throw Error(x(160));Nf(i,l,o),ae=null,Ye=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){G(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zf(t,e),t=t.sibling}function zf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),be(e),r&4){try{nr(3,e,e.return),Go(3,e)}catch(v){G(e,e.return,v)}try{nr(5,e,e.return)}catch(v){G(e,e.return,v)}}break;case 1:He(t,e),be(e),r&512&&n!==null&&pn(n,n.return);break;case 5:if(He(t,e),be(e),r&512&&n!==null&&pn(n,n.return),e.flags&32){var o=e.stateNode;try{ar(o,"")}catch(v){G(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Gu(o,i),vl(a,l);var c=vl(a,i);for(l=0;l<s.length;l+=2){var p=s[l],m=s[l+1];p==="style"?ec(o,m):p==="dangerouslySetInnerHTML"?bu(o,m):p==="children"?ar(o,m):ca(o,p,m,c)}switch(a){case"input":dl(o,i);break;case"textarea":Zu(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?hn(o,!!i.multiple,w,!1):h!==!!i.multiple&&(i.defaultValue!=null?hn(o,!!i.multiple,i.defaultValue,!0):hn(o,!!i.multiple,i.multiple?[]:"",!1))}o[yr]=i}catch(v){G(e,e.return,v)}}break;case 6:if(He(t,e),be(e),r&4){if(e.stateNode===null)throw Error(x(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){G(e,e.return,v)}}break;case 3:if(He(t,e),be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fr(t.containerInfo)}catch(v){G(e,e.return,v)}break;case 4:He(t,e),be(e);break;case 13:He(t,e),be(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ba=b())),r&4&&du(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(c=pe)||p,He(t,e),pe=c):He(t,e),be(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&(e.mode&1)!==0)for(C=e,p=e.child;p!==null;){for(m=C=p;C!==null;){switch(h=C,w=h.child,h.tag){case 0:case 11:case 14:case 15:nr(4,h,h.return);break;case 1:pn(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){G(r,n,v)}}break;case 5:pn(h,h.return);break;case 22:if(h.memoizedState!==null){mu(m);continue}}w!==null?(w.return=h,C=w):mu(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{o=m.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=qu("display",l))}catch(v){G(e,e.return,v)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(v){G(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:He(t,e),be(e),r&4&&du(e);break;case 21:break;default:He(t,e),be(e)}}function be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Pf(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ar(o,""),r.flags&=-33);var i=fu(e);Xl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=fu(e);Yl(e,a,l);break;default:throw Error(x(161))}}catch(s){G(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tp(e,t,n){C=e,Tf(e)}function Tf(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var o=C,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Kr;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||pe;a=Kr;var c=pe;if(Kr=l,(pe=s)&&!c)for(C=o;C!==null;)l=C,s=l.child,l.tag===22&&l.memoizedState!==null?hu(o):s!==null?(s.return=l,C=s):hu(o);for(;i!==null;)C=i,Tf(i),i=i.sibling;C=o,Kr=a,pe=c}pu(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,C=i):pu(e)}}function pu(e){for(;C!==null;){var t=C;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:pe||Go(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Zs(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zs(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&fr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}pe||t.flags&512&&Ql(t)}catch(h){G(t,t.return,h)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function mu(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function hu(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Go(4,t)}catch(s){G(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){G(t,o,s)}}var i=t.return;try{Ql(t)}catch(s){G(t,i,s)}break;case 5:var l=t.return;try{Ql(t)}catch(s){G(t,l,s)}}}catch(s){G(t,t.return,s)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var Op=Math.ceil,Mo=gt.ReactCurrentDispatcher,Ua=gt.ReactCurrentOwner,De=gt.ReactCurrentBatchConfig,I=0,ie=null,ee=null,se=0,_e=0,mn=jt(0),ne=0,kr=null,Jt=0,Zo=0,Wa=0,rr=null,xe=null,Ba=0,Nn=1/0,ut=null,Io=!1,Kl=null,Ot=null,Gr=!1,Ct=null,Fo=0,or=0,Gl=null,so=-1,uo=0;function ye(){return(I&6)!==0?b():so!==-1?so:so=b()}function Rt(e){return(e.mode&1)===0?1:(I&2)!==0&&se!==0?se&-se:mp.transition!==null?(uo===0&&(uo=dc()),uo):(e=D,e!==0||(e=window.event,e=e===void 0?16:wc(e.type)),e)}function Ge(e,t,n,r){if(50<or)throw or=0,Gl=null,Error(x(185));Pr(e,n,r),((I&2)===0||e!==ie)&&(e===ie&&((I&2)===0&&(Zo|=n),ne===4&&$t(e,se)),Ee(e,r),n===1&&I===0&&(t.mode&1)===0&&(Nn=b()+500,Yo&&Dt()))}function Ee(e,t){var n=e.callbackNode;m0(e,t);var r=wo(e,e===ie?se:0);if(r===0)n!==null&&Es(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Es(n),t===1)e.tag===0?pp(yu.bind(null,e)):Dc(yu.bind(null,e)),up(function(){(I&6)===0&&Dt()}),n=null;else{switch(pc(r)){case 1:n=ha;break;case 4:n=cc;break;case 16:n=go;break;case 536870912:n=fc;break;default:n=go}n=Df(n,Of.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Of(e,t){if(so=-1,uo=0,(I&6)!==0)throw Error(x(327));var n=e.callbackNode;if(xn()&&e.callbackNode!==n)return null;var r=wo(e,e===ie?se:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=jo(e,r);else{t=r;var o=I;I|=2;var i=Lf();(ie!==e||se!==t)&&(ut=null,Nn=b()+500,Yt(e,t));do try{Mp();break}catch(a){Rf(e,a)}while(1);Na(),Mo.current=i,I=o,ee!==null?t=0:(ie=null,se=0,t=ne)}if(t!==0){if(t===2&&(o=kl(e),o!==0&&(r=o,t=Zl(e,o))),t===1)throw n=kr,Yt(e,0),$t(e,r),Ee(e,b()),n;if(t===6)$t(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Rp(o)&&(t=jo(e,r),t===2&&(i=kl(e),i!==0&&(r=i,t=Zl(e,i))),t===1))throw n=kr,Yt(e,0),$t(e,r),Ee(e,b()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:Wt(e,xe,ut);break;case 3:if($t(e,r),(r&130023424)===r&&(t=Ba+500-b(),10<t)){if(wo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Tl(Wt.bind(null,e,xe,ut),t);break}Wt(e,xe,ut);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Ke(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=b()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Op(r/1960))-r,10<r){e.timeoutHandle=Tl(Wt.bind(null,e,xe,ut),r);break}Wt(e,xe,ut);break;case 5:Wt(e,xe,ut);break;default:throw Error(x(329))}}}return Ee(e,b()),e.callbackNode===n?Of.bind(null,e):null}function Zl(e,t){var n=rr;return e.current.memoizedState.isDehydrated&&(Yt(e,t).flags|=256),e=jo(e,t),e!==2&&(t=xe,xe=n,t!==null&&Jl(t)),e}function Jl(e){xe===null?xe=e:xe.push.apply(xe,e)}function Rp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ze(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~Wa,t&=~Zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function yu(e){if((I&6)!==0)throw Error(x(327));xn();var t=wo(e,0);if((t&1)===0)return Ee(e,b()),null;var n=jo(e,t);if(e.tag!==0&&n===2){var r=kl(e);r!==0&&(t=r,n=Zl(e,r))}if(n===1)throw n=kr,Yt(e,0),$t(e,t),Ee(e,b()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wt(e,xe,ut),Ee(e,b()),null}function Ha(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Nn=b()+500,Yo&&Dt())}}function bt(e){Ct!==null&&Ct.tag===0&&(I&6)===0&&xn();var t=I;I|=1;var n=De.transition,r=D;try{if(De.transition=null,D=1,e)return e()}finally{D=r,De.transition=n,I=t,(I&6)===0&&Dt()}}function Qa(){_e=mn.current,H(mn)}function Yt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sp(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Ca(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Eo();break;case 3:_n(),H(ke),H(me),Ma();break;case 5:La(r);break;case 4:_n();break;case 13:H(Y);break;case 19:H(Y);break;case 10:za(r.type._context);break;case 22:case 23:Qa()}n=n.return}if(ie=e,ee=e=Lt(e.current,null),se=_e=t,ne=0,kr=null,Wa=Zo=Jt=0,xe=rr=null,Ht!==null){for(t=0;t<Ht.length;t++)if(n=Ht[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Ht=null}return e}function Rf(e,t){do{var n=ee;try{if(Na(),io.current=Lo,Ro){for(var r=X.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ro=!1}if(Zt=0,oe=te=X=null,tr=!1,wr=0,Ua.current=null,n===null||n.return===null){ne=1,kr=t,ee=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=se,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,p=a,m=p.tag;if((p.mode&1)===0&&(m===0||m===11||m===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=ru(l);if(w!==null){w.flags&=-257,ou(w,l,a,i,t),w.mode&1&&nu(i,c,t),t=w,s=c;var g=t.updateQueue;if(g===null){var v=new Set;v.add(s),t.updateQueue=v}else g.add(s);break e}else{if((t&1)===0){nu(i,c,t),Ya();break e}s=Error(x(426))}}else if(Q&&a.mode&1){var P=ru(l);if(P!==null){(P.flags&65536)===0&&(P.flags|=256),ou(P,l,a,i,t),_a(Pn(s,a));break e}}i=s=Pn(s,a),ne!==4&&(ne=2),rr===null?rr=[i]:rr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=hf(i,s,t);Gs(i,f);break e;case 1:a=s;var u=i.type,d=i.stateNode;if((i.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ot===null||!Ot.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=yf(i,a,t);Gs(i,y);break e}}i=i.return}while(i!==null)}If(n)}catch(k){t=k,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function Lf(){var e=Mo.current;return Mo.current=Lo,e===null?Lo:e}function Ya(){(ne===0||ne===3||ne===2)&&(ne=4),ie===null||(Jt&268435455)===0&&(Zo&268435455)===0||$t(ie,se)}function jo(e,t){var n=I;I|=2;var r=Lf();(ie!==e||se!==t)&&(ut=null,Yt(e,t));do try{Lp();break}catch(o){Rf(e,o)}while(1);if(Na(),I=n,Mo.current=r,ee!==null)throw Error(x(261));return ie=null,se=0,ne}function Lp(){for(;ee!==null;)Mf(ee)}function Mp(){for(;ee!==null&&!i0();)Mf(ee)}function Mf(e){var t=jf(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?If(e):ee=t,Ua.current=null}function If(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=_p(n,t,_e),n!==null){ee=n;return}}else{if(n=Pp(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function Wt(e,t,n){var r=D,o=De.transition;try{De.transition=null,D=1,Ip(e,t,n,r)}finally{De.transition=o,D=r}return null}function Ip(e,t,n,r){do xn();while(Ct!==null);if((I&6)!==0)throw Error(x(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(h0(e,i),e===ie&&(ee=ie=null,se=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Gr||(Gr=!0,Df(go,function(){return xn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=De.transition,De.transition=null;var l=D;D=1;var a=I;I|=4,Ua.current=null,zp(e,n),zf(n,e),tp(Nl),xo=!!Pl,Nl=Pl=null,e.current=n,Tp(n),l0(),I=a,D=l,De.transition=i}else e.current=n;if(Gr&&(Gr=!1,Ct=e,Fo=o),i=e.pendingLanes,i===0&&(Ot=null),u0(n.stateNode),Ee(e,b()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Io)throw Io=!1,e=Kl,Kl=null,e;return(Fo&1)!==0&&e.tag!==0&&xn(),i=e.pendingLanes,(i&1)!==0?e===Gl?or++:(or=0,Gl=e):or=0,Dt(),null}function xn(){if(Ct!==null){var e=pc(Fo),t=De.transition,n=D;try{if(De.transition=null,D=16>e?16:e,Ct===null)var r=!1;else{if(e=Ct,Ct=null,Fo=0,(I&6)!==0)throw Error(x(331));var o=I;for(I|=4,C=e.current;C!==null;){var i=C,l=i.child;if((C.flags&16)!==0){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(C=c;C!==null;){var p=C;switch(p.tag){case 0:case 11:case 15:nr(8,p,i)}var m=p.child;if(m!==null)m.return=p,C=m;else for(;C!==null;){p=C;var h=p.sibling,w=p.return;if(_f(p),p===c){C=null;break}if(h!==null){h.return=w,C=h;break}C=w}}}var g=i.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var P=v.sibling;v.sibling=null,v=P}while(v!==null)}}C=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,C=l;else e:for(;C!==null;){if(i=C,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:nr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,C=f;break e}C=i.return}}var u=e.current;for(C=u;C!==null;){l=C;var d=l.child;if((l.subtreeFlags&2064)!==0&&d!==null)d.return=l,C=d;else e:for(l=u;C!==null;){if(a=C,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Go(9,a)}}catch(k){G(a,a.return,k)}if(a===l){C=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,C=y;break e}C=a.return}}if(I=o,Dt(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Uo,e)}catch{}r=!0}return r}finally{D=n,De.transition=t}}return!1}function vu(e,t,n){t=Pn(n,t),t=hf(e,t,1),e=Tt(e,t,1),t=ye(),e!==null&&(Pr(e,1,t),Ee(e,t))}function G(e,t,n){if(e.tag===3)vu(e,e,n);else for(;t!==null;){if(t.tag===3){vu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=Pn(n,e),e=yf(t,e,1),t=Tt(t,e,1),e=ye(),t!==null&&(Pr(t,1,e),Ee(t,e));break}}t=t.return}}function Fp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(se&n)===n&&(ne===4||ne===3&&(se&130023424)===se&&500>b()-Ba?Yt(e,0):Wa|=n),Ee(e,t)}function Ff(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ar,Ar<<=1,(Ar&130023424)===0&&(Ar=4194304)));var n=ye();e=yt(e,t),e!==null&&(Pr(e,t,n),Ee(e,n))}function jp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ff(e,n)}function Dp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),Ff(e,n)}var jf;jf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Se=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Se=!1,Cp(e,t,n);Se=(e.flags&131072)!==0}else Se=!1,Q&&(t.flags&1048576)!==0&&Ac(t,Po,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ao(e,t),e=t.pendingProps;var o=$n(t,me.current);wn(t,n),o=Fa(null,t,r,e,o,n);var i=ja();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(i=!0,Co(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Oa(t),o.updater=Xo,t.stateNode=o,o._reactInternals=t,jl(t,r,e,n),t=Vl(null,t,r,!0,i,n)):(t.tag=0,Q&&i&&Ea(t),he(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ao(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Vp(r),e=Qe(r,e),o){case 0:t=Al(null,t,r,e,n);break e;case 1:t=au(null,t,r,e,n);break e;case 11:t=iu(null,t,r,e,n);break e;case 14:t=lu(null,t,r,Qe(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Al(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),au(e,t,r,o,n);case 3:e:{if(xf(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Bc(e,t),To(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Pn(Error(x(423)),t),t=su(e,t,r,n,o);break e}else if(r!==o){o=Pn(Error(x(424)),t),t=su(e,t,r,n,o);break e}else for(Ne=zt(t.stateNode.containerInfo.firstChild),ze=t,Q=!0,Xe=null,n=Xc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(En(),r===o){t=vt(e,t,n);break e}he(e,t,r,n)}t=t.child}return t;case 5:return Kc(t),e===null&&Ml(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,zl(r,o)?l=null:i!==null&&zl(r,i)&&(t.flags|=32),wf(e,t),he(e,t,l,n),t.child;case 6:return e===null&&Ml(t),null;case 13:return Sf(e,t,n);case 4:return Ra(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cn(t,null,r,n):he(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),iu(e,t,r,o,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,W(No,r._currentValue),r._currentValue=l,i!==null)if(Ze(i.value,l)){if(i.children===o.children&&!ke.current){t=vt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=pt(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Il(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(x(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Il(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}he(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,wn(t,n),o=Ae(o),r=r(o),t.flags|=1,he(e,t,r,n),t.child;case 14:return r=t.type,o=Qe(r,t.pendingProps),o=Qe(r.type,o),lu(e,t,r,o,n);case 15:return vf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),ao(e,t),t.tag=1,$e(r)?(e=!0,Co(t)):e=!1,wn(t,n),Qc(t,r,o),jl(t,r,o,n),Vl(null,t,r,!0,e,n);case 19:return kf(e,t,n);case 22:return gf(e,t,n)}throw Error(x(156,t.tag))};function Df(e,t){return uc(e,t)}function Ap(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new Ap(e,t,n,r)}function Xa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vp(e){if(typeof e=="function")return Xa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===da)return 11;if(e===pa)return 14}return 2}function Lt(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function co(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Xa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case rn:return Xt(n.children,o,i,t);case fa:l=8,o|=8;break;case al:return e=je(12,n,t,o|2),e.elementType=al,e.lanes=i,e;case sl:return e=je(13,n,t,o),e.elementType=sl,e.lanes=i,e;case ul:return e=je(19,n,t,o),e.elementType=ul,e.lanes=i,e;case Yu:return Jo(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hu:l=10;break e;case Qu:l=9;break e;case da:l=11;break e;case pa:l=14;break e;case xt:l=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=je(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Xt(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function Jo(e,t,n,r){return e=je(22,e,r,t),e.elementType=Yu,e.lanes=n,e.stateNode={isHidden:!1},e}function tl(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function nl(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Up(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ka(e,t,n,r,o,i,l,a,s){return e=new Up(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=je(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oa(i),e}function Wp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Af(e){if(!e)return It;e=e._reactInternals;e:{if(en(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if($e(n))return jc(e,n,t)}return t}function Vf(e,t,n,r,o,i,l,a,s){return e=Ka(n,r,!0,e,o,i,l,a,s),e.context=Af(null),n=e.current,r=ye(),o=Rt(n),i=pt(r,o),i.callback=t!=null?t:null,Tt(n,i,o),e.current.lanes=o,Pr(e,o,r),Ee(e,r),e}function bo(e,t,n,r){var o=t.current,i=ye(),l=Rt(o);return n=Af(n),t.context===null?t.context=n:t.pendingContext=n,t=pt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Tt(o,t,l),e!==null&&(Ge(e,o,l,i),oo(e,o,l)),l}function Do(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ga(e,t){gu(e,t),(e=e.alternate)&&gu(e,t)}function Bp(){return null}var Uf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Za(e){this._internalRoot=e}qo.prototype.render=Za.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));bo(e,t,null,null)};qo.prototype.unmount=Za.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bt(function(){bo(null,e,null,null)}),t[ht]=null}};function qo(e){this._internalRoot=e}qo.prototype.unstable_scheduleHydration=function(e){if(e){var t=yc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kt.length&&t!==0&&t<kt[n].priority;n++);kt.splice(n,0,e),n===0&&gc(e)}};function Ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wu(){}function Hp(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Do(l);i.call(c)}}var l=Vf(t,r,e,0,null,!1,!1,"",wu);return e._reactRootContainer=l,e[ht]=l.current,mr(e.nodeType===8?e.parentNode:e),bt(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Do(s);a.call(c)}}var s=Ka(e,0,!1,null,null,!1,!1,"",wu);return e._reactRootContainer=s,e[ht]=s.current,mr(e.nodeType===8?e.parentNode:e),bt(function(){bo(t,s,n,r)}),s}function ti(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Do(l);a.call(s)}}bo(t,l,e,o)}else l=Hp(n,t,e,o,r);return Do(l)}mc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Kn(t.pendingLanes);n!==0&&(ya(t,n|1),Ee(t,b()),(I&6)===0&&(Nn=b()+500,Dt()))}break;case 13:bt(function(){var r=yt(e,1);if(r!==null){var o=ye();Ge(r,e,1,o)}}),Ga(e,1)}};va=function(e){if(e.tag===13){var t=yt(e,134217728);if(t!==null){var n=ye();Ge(t,e,134217728,n)}Ga(e,134217728)}};hc=function(e){if(e.tag===13){var t=Rt(e),n=yt(e,t);if(n!==null){var r=ye();Ge(n,e,t,r)}Ga(e,t)}};yc=function(){return D};vc=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};wl=function(e,t,n){switch(t){case"input":if(dl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Qo(r);if(!o)throw Error(x(90));Ku(r),dl(r,o)}}}break;case"textarea":Zu(e,n);break;case"select":t=n.value,t!=null&&hn(e,!!n.multiple,t,!1)}};rc=Ha;oc=bt;var Qp={usingClientEntryPoint:!1,Events:[zr,sn,Qo,tc,nc,Ha]},Hn={findFiberByHostInstance:Bt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Yp={bundleType:Hn.bundleType,version:Hn.version,rendererPackageName:Hn.rendererPackageName,rendererConfig:Hn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ac(e),e===null?null:e.stateNode},findFiberByHostInstance:Hn.findFiberByHostInstance||Bp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zr.isDisabled&&Zr.supportsFiber)try{Uo=Zr.inject(Yp),rt=Zr}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qp;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ja(t))throw Error(x(200));return Wp(e,t,null,n)};Re.createRoot=function(e,t){if(!Ja(e))throw Error(x(299));var n=!1,r="",o=Uf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ka(e,1,!1,null,null,n,!1,r,o),e[ht]=t.current,mr(e.nodeType===8?e.parentNode:e),new Za(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=ac(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return bt(e)};Re.hydrate=function(e,t,n){if(!ei(t))throw Error(x(200));return ti(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!Ja(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Uf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Vf(t,null,e,1,n!=null?n:null,o,!1,i,l),e[ht]=t.current,mr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new qo(t)};Re.render=function(e,t,n){if(!ei(t))throw Error(x(200));return ti(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!ei(e))throw Error(x(40));return e._reactRootContainer?(bt(function(){ti(null,null,e,!1,function(){e._reactRootContainer=null,e[ht]=null})}),!0):!1};Re.unstable_batchedUpdates=Ha;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ei(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return ti(e,t,n,!1,r)};Re.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Re})(Au);var xu=Au.exports;il.createRoot=xu.createRoot,il.hydrateRoot=xu.hydrateRoot;function Xp(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Kp(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Gp=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Kp(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Xp(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),de="-ms-",Ao="-moz-",F="-webkit-",Wf="comm",ba="rule",qa="decl",Zp="@import",Bf="@keyframes",Jp=Math.abs,ni=String.fromCharCode,bp=Object.assign;function qp(e,t){return(((t<<2^we(e,0))<<2^we(e,1))<<2^we(e,2))<<2^we(e,3)}function Hf(e){return e.trim()}function em(e,t){return(e=t.exec(e))?e[0]:e}function j(e,t,n){return e.replace(t,n)}function bl(e,t){return e.indexOf(t)}function we(e,t){return e.charCodeAt(t)|0}function $r(e,t,n){return e.slice(t,n)}function et(e){return e.length}function es(e){return e.length}function Jr(e,t){return t.push(e),e}function tm(e,t){return e.map(t).join("")}var ri=1,zn=1,Qf=0,Ce=0,q=0,Ln="";function oi(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ri,column:zn,length:l,return:""}}function Qn(e,t){return bp(oi("",null,null,"",null,null,0),e,{length:-e.length},t)}function nm(){return q}function rm(){return q=Ce>0?we(Ln,--Ce):0,zn--,q===10&&(zn=1,ri--),q}function Te(){return q=Ce<Qf?we(Ln,Ce++):0,zn++,q===10&&(zn=1,ri++),q}function it(){return we(Ln,Ce)}function fo(){return Ce}function Or(e,t){return $r(Ln,e,t)}function Er(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Yf(e){return ri=zn=1,Qf=et(Ln=e),Ce=0,[]}function Xf(e){return Ln="",e}function po(e){return Hf(Or(Ce-1,ql(e===91?e+2:e===40?e+1:e)))}function om(e){for(;(q=it())&&q<33;)Te();return Er(e)>2||Er(q)>3?"":" "}function im(e,t){for(;--t&&Te()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return Or(e,fo()+(t<6&&it()==32&&Te()==32))}function ql(e){for(;Te();)switch(q){case e:return Ce;case 34:case 39:e!==34&&e!==39&&ql(q);break;case 40:e===41&&ql(e);break;case 92:Te();break}return Ce}function lm(e,t){for(;Te()&&e+q!==47+10;)if(e+q===42+42&&it()===47)break;return"/*"+Or(t,Ce-1)+"*"+ni(e===47?e:Te())}function am(e){for(;!Er(it());)Te();return Or(e,Ce)}function sm(e){return Xf(mo("",null,null,null,[""],e=Yf(e),0,[0],e))}function mo(e,t,n,r,o,i,l,a,s){for(var c=0,p=0,m=l,h=0,w=0,g=0,v=1,P=1,f=1,u=0,d="",y=o,k=i,E=r,$=d;P;)switch(g=u,u=Te()){case 40:if(g!=108&&$.charCodeAt(m-1)==58){bl($+=j(po(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:$+=po(u);break;case 9:case 10:case 13:case 32:$+=om(g);break;case 92:$+=im(fo()-1,7);continue;case 47:switch(it()){case 42:case 47:Jr(um(lm(Te(),fo()),t,n),s);break;default:$+="/"}break;case 123*v:a[c++]=et($)*f;case 125*v:case 59:case 0:switch(u){case 0:case 125:P=0;case 59+p:w>0&&et($)-m&&Jr(w>32?ku($+";",r,n,m-1):ku(j($," ","")+";",r,n,m-2),s);break;case 59:$+=";";default:if(Jr(E=Su($,t,n,c,p,o,a,d,y=[],k=[],m),i),u===123)if(p===0)mo($,t,E,E,y,i,m,a,k);else switch(h){case 100:case 109:case 115:mo(e,E,E,r&&Jr(Su(e,E,E,0,0,o,a,d,o,y=[],m),k),o,k,m,a,r?y:k);break;default:mo($,E,E,E,[""],k,0,a,k)}}c=p=w=0,v=f=1,d=$="",m=l;break;case 58:m=1+et($),w=g;default:if(v<1){if(u==123)--v;else if(u==125&&v++==0&&rm()==125)continue}switch($+=ni(u),u*v){case 38:f=p>0?1:($+="\f",-1);break;case 44:a[c++]=(et($)-1)*f,f=1;break;case 64:it()===45&&($+=po(Te())),h=it(),p=m=et(d=$+=am(fo())),u++;break;case 45:g===45&&et($)==2&&(v=0)}}return i}function Su(e,t,n,r,o,i,l,a,s,c,p){for(var m=o-1,h=o===0?i:[""],w=es(h),g=0,v=0,P=0;g<r;++g)for(var f=0,u=$r(e,m+1,m=Jp(v=l[g])),d=e;f<w;++f)(d=Hf(v>0?h[f]+" "+u:j(u,/&\f/g,h[f])))&&(s[P++]=d);return oi(e,t,n,o===0?ba:a,s,c,p)}function um(e,t,n){return oi(e,t,n,Wf,ni(nm()),$r(e,2,-2),0)}function ku(e,t,n,r){return oi(e,t,n,qa,$r(e,0,r),$r(e,r+1,-1),r)}function Kf(e,t){switch(qp(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+Ao+e+de+e+e;case 6828:case 4268:return F+e+de+e+e;case 6165:return F+e+de+"flex-"+e+e;case 5187:return F+e+j(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+de+"flex-$1$2")+e;case 5443:return F+e+de+"flex-item-"+j(e,/flex-|-self/,"")+e;case 4675:return F+e+de+"flex-line-pack"+j(e,/align-content|flex-|-self/,"")+e;case 5548:return F+e+de+j(e,"shrink","negative")+e;case 5292:return F+e+de+j(e,"basis","preferred-size")+e;case 6060:return F+"box-"+j(e,"-grow","")+F+e+de+j(e,"grow","positive")+e;case 4554:return F+j(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return j(j(j(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return j(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return j(j(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+de+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4095:case 3583:case 4068:case 2532:return j(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(et(e)-1-t>6)switch(we(e,t+1)){case 109:if(we(e,t+4)!==45)break;case 102:return j(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Ao+(we(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~bl(e,"stretch")?Kf(j(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(we(e,t+1)!==115)break;case 6444:switch(we(e,et(e)-3-(~bl(e,"!important")&&10))){case 107:return j(e,":",":"+F)+e;case 101:return j(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+F+(we(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+de+"$2box$3")+e}break;case 5936:switch(we(e,t+11)){case 114:return F+e+de+j(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+de+j(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+de+j(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return F+e+de+e+e}return e}function Sn(e,t){for(var n="",r=es(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function cm(e,t,n,r){switch(e.type){case Zp:case qa:return e.return=e.return||e.value;case Wf:return"";case Bf:return e.return=e.value+"{"+Sn(e.children,r)+"}";case ba:e.value=e.props.join(",")}return et(n=Sn(e.children,r))?e.return=e.value+"{"+n+"}":""}function fm(e){var t=es(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function dm(e){return function(t){t.root||(t=t.return)&&e(t)}}function pm(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case qa:e.return=Kf(e.value,e.length);break;case Bf:return Sn([Qn(e,{value:j(e.value,"@","@"+F)})],r);case ba:if(e.length)return tm(e.props,function(o){switch(em(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Sn([Qn(e,{props:[j(o,/:(read-\w+)/,":"+Ao+"$1")]})],r);case"::placeholder":return Sn([Qn(e,{props:[j(o,/:(plac\w+)/,":"+F+"input-$1")]}),Qn(e,{props:[j(o,/:(plac\w+)/,":"+Ao+"$1")]}),Qn(e,{props:[j(o,/:(plac\w+)/,de+"input-$1")]})],r)}return""})}}function mm(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var hm=function(t,n,r){for(var o=0,i=0;o=i,i=it(),o===38&&i===12&&(n[r]=1),!Er(i);)Te();return Or(t,Ce)},ym=function(t,n){var r=-1,o=44;do switch(Er(o)){case 0:o===38&&it()===12&&(n[r]=1),t[r]+=hm(Ce-1,n,r);break;case 2:t[r]+=po(o);break;case 4:if(o===44){t[++r]=it()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ni(o)}while(o=Te());return t},vm=function(t,n){return Xf(ym(Yf(t),n))},$u=new WeakMap,gm=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!$u.get(r))&&!o){$u.set(t,!0);for(var i=[],l=vm(n,i),a=r.props,s=0,c=0;s<l.length;s++)for(var p=0;p<a.length;p++,c++)t.props[c]=i[s]?l[s].replace(/&\f/g,a[p]):a[p]+" "+l[s]}}},wm=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}},xm=[pm],Sm=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var P=v.getAttribute("data-emotion");P.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=t.stylisPlugins||xm,i={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var P=v.getAttribute("data-emotion").split(" "),f=1;f<P.length;f++)i[P[f]]=!0;a.push(v)});var s,c=[gm,wm];{var p,m=[cm,dm(function(v){p.insert(v)})],h=fm(c.concat(o,m)),w=function(P){return Sn(sm(P),h)};s=function(P,f,u,d){p=u,w(P?P+"{"+f.styles+"}":f.styles),d&&(g.inserted[f.name]=!0)}}var g={key:n,sheet:new Gp({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return g.sheet.hydrate(a),g},Gf={exports:{}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var le=typeof Symbol=="function"&&Symbol.for,ts=le?Symbol.for("react.element"):60103,ns=le?Symbol.for("react.portal"):60106,ii=le?Symbol.for("react.fragment"):60107,li=le?Symbol.for("react.strict_mode"):60108,ai=le?Symbol.for("react.profiler"):60114,si=le?Symbol.for("react.provider"):60109,ui=le?Symbol.for("react.context"):60110,rs=le?Symbol.for("react.async_mode"):60111,ci=le?Symbol.for("react.concurrent_mode"):60111,fi=le?Symbol.for("react.forward_ref"):60112,di=le?Symbol.for("react.suspense"):60113,km=le?Symbol.for("react.suspense_list"):60120,pi=le?Symbol.for("react.memo"):60115,mi=le?Symbol.for("react.lazy"):60116,$m=le?Symbol.for("react.block"):60121,Em=le?Symbol.for("react.fundamental"):60117,Cm=le?Symbol.for("react.responder"):60118,_m=le?Symbol.for("react.scope"):60119;function Me(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ts:switch(e=e.type,e){case rs:case ci:case ii:case ai:case li:case di:return e;default:switch(e=e&&e.$$typeof,e){case ui:case fi:case mi:case pi:case si:return e;default:return t}}case ns:return t}}}function Zf(e){return Me(e)===ci}A.AsyncMode=rs;A.ConcurrentMode=ci;A.ContextConsumer=ui;A.ContextProvider=si;A.Element=ts;A.ForwardRef=fi;A.Fragment=ii;A.Lazy=mi;A.Memo=pi;A.Portal=ns;A.Profiler=ai;A.StrictMode=li;A.Suspense=di;A.isAsyncMode=function(e){return Zf(e)||Me(e)===rs};A.isConcurrentMode=Zf;A.isContextConsumer=function(e){return Me(e)===ui};A.isContextProvider=function(e){return Me(e)===si};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ts};A.isForwardRef=function(e){return Me(e)===fi};A.isFragment=function(e){return Me(e)===ii};A.isLazy=function(e){return Me(e)===mi};A.isMemo=function(e){return Me(e)===pi};A.isPortal=function(e){return Me(e)===ns};A.isProfiler=function(e){return Me(e)===ai};A.isStrictMode=function(e){return Me(e)===li};A.isSuspense=function(e){return Me(e)===di};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ii||e===ci||e===ai||e===li||e===di||e===km||typeof e=="object"&&e!==null&&(e.$$typeof===mi||e.$$typeof===pi||e.$$typeof===si||e.$$typeof===ui||e.$$typeof===fi||e.$$typeof===Em||e.$$typeof===Cm||e.$$typeof===_m||e.$$typeof===$m)};A.typeOf=Me;(function(e){e.exports=A})(Gf);var Jf=Gf.exports,Pm={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},bf={};bf[Jf.ForwardRef]=Pm;bf[Jf.Memo]=Nm;var zm=!0;function qf(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var os=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||zm===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},ed=function(t,n,r){os(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Tm(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Om={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rm=/[A-Z]|^ms/g,Lm=/_EMO_([^_]+?)_([^]*?)_EMO_/g,td=function(t){return t.charCodeAt(1)===45},Eu=function(t){return t!=null&&typeof t!="boolean"},rl=mm(function(e){return td(e)?e:e.replace(Rm,"-$&").toLowerCase()}),Cu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Lm,function(r,o,i){return tt={name:o,styles:i,next:tt},o})}return Om[t]!==1&&!td(t)&&typeof n=="number"&&n!==0?n+"px":n};function Cr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return tt={name:n.name,styles:n.styles,next:tt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)tt={name:r.name,styles:r.styles,next:tt},r=r.next;var o=n.styles+";";return o}return Mm(e,t,n)}case"function":{if(e!==void 0){var i=tt,l=n(e);return tt=i,Cr(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function Mm(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Cr(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":Eu(l)&&(r+=rl(i)+":"+Cu(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)Eu(l[a])&&(r+=rl(i)+":"+Cu(i,l[a])+";");else{var s=Cr(e,t,l);switch(i){case"animation":case"animationName":{r+=rl(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var _u=/label:\s*([^\s;\n{]+)\s*(;|$)/g,tt,is=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";tt=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=Cr(r,n,l)):i+=l[0];for(var a=1;a<t.length;a++)i+=Cr(r,n,t[a]),o&&(i+=l[a]);_u.lastIndex=0;for(var s="",c;(c=_u.exec(i))!==null;)s+="-"+c[1];var p=Tm(i)+s;return{name:p,styles:i,next:tt}},Im=function(t){return t()},Fm=ms["useInsertionEffect"]?ms["useInsertionEffect"]:!1,nd=Fm||Im,ls={}.hasOwnProperty,rd=z.exports.createContext(typeof HTMLElement<"u"?Sm({key:"css"}):null);rd.Provider;var od=function(t){return z.exports.forwardRef(function(n,r){var o=z.exports.useContext(rd);return t(n,o,r)})},id=z.exports.createContext({}),ea="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",jm=function(t,n){var r={};for(var o in n)ls.call(n,o)&&(r[o]=n[o]);return r[ea]=t,r},Dm=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return os(n,r,o),nd(function(){return ed(n,r,o)}),null},Am=od(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[ea],i=[r],l="";typeof e.className=="string"?l=qf(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var a=is(i,void 0,z.exports.useContext(id));l+=t.key+"-"+a.name;var s={};for(var c in e)ls.call(e,c)&&c!=="css"&&c!==ea&&(s[c]=e[c]);return s.ref=n,s.className=l,z.exports.createElement(z.exports.Fragment,null,z.exports.createElement(Dm,{cache:t,serialized:a,isStringTag:typeof o=="string"}),z.exports.createElement(o,s))}),hi={exports:{}},yi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm=z.exports,Um=Symbol.for("react.element"),Wm=Symbol.for("react.fragment"),Bm=Object.prototype.hasOwnProperty,Hm=Vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qm={key:!0,ref:!0,__self:!0,__source:!0};function ld(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Bm.call(t,r)&&!Qm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Um,type:e,key:i,ref:l,props:o,_owner:Hm.current}}yi.Fragment=Wm;yi.jsx=ld;yi.jsxs=ld;(function(e){e.exports=yi})(hi);const lt=hi.exports.Fragment,T=hi.exports.jsx,Pe=hi.exports.jsxs;var Ym=lt;function U(e,t,n){return ls.call(t,"css")?T(Am,jm(e,t),n):T(e,t,n)}function Mn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return is(t)}var S=function(){var t=Mn.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Xm=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var a in i)i[a]&&a&&(l&&(l+=" "),l+=a)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function Km(e,t,n){var r=[],o=qf(e,r,n);return r.length<2?n:o+t(r)}var Gm=function(t){var n=t.cache,r=t.serializedArr;return nd(function(){for(var o=0;o<r.length;o++)ed(n,r[o],!1)}),null},ol=od(function(e,t){var n=!1,r=[],o=function(){for(var c=arguments.length,p=new Array(c),m=0;m<c;m++)p[m]=arguments[m];var h=is(p,t.registered);return r.push(h),os(t,h,!1),t.key+"-"+h.name},i=function(){for(var c=arguments.length,p=new Array(c),m=0;m<c;m++)p[m]=arguments[m];return Km(t.registered,o,Xm(p))},l={css:o,cx:i,theme:z.exports.useContext(id)},a=e.children(l);return n=!0,z.exports.createElement(z.exports.Fragment,null,z.exports.createElement(Gm,{cache:t,serializedArr:r}),a)});function ta(){return ta=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ta.apply(this,arguments)}function Zm(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,na(e,t)}function na(e,t){return na=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},na(e,t)}function Jm(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var ra=new Map,br=new WeakMap,Pu=0,bm=void 0;function qm(e){return e?(br.has(e)||(Pu+=1,br.set(e,Pu.toString())),br.get(e)):"0"}function e1(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?qm(e.root):e[t])}).toString()}function t1(e){var t=e1(e),n=ra.get(t);if(!n){var r=new Map,o,i=new IntersectionObserver(function(l){l.forEach(function(a){var s,c=a.isIntersecting&&o.some(function(p){return a.intersectionRatio>=p});e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(s=r.get(a.target))==null||s.forEach(function(p){p(c,a)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},ra.set(t,n)}return n}function ad(e,t,n,r){if(n===void 0&&(n={}),r===void 0&&(r=bm),typeof window.IntersectionObserver>"u"&&r!==void 0){var o=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),function(){}}var i=t1(n),l=i.id,a=i.observer,s=i.elements,c=s.get(e)||[];return s.has(e)||s.set(e,c),c.push(t),a.observe(e),function(){c.splice(c.indexOf(t),1),c.length===0&&(s.delete(e),a.unobserve(e)),s.size===0&&(a.disconnect(),ra.delete(l))}}var n1=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function Nu(e){return typeof e.children!="function"}var zu=function(e){Zm(t,e);function t(r){var o;return o=e.call(this,r)||this,o.node=null,o._unobserveCb=null,o.handleNode=function(i){o.node&&(o.unobserve(),!i&&!o.props.triggerOnce&&!o.props.skip&&o.setState({inView:!!o.props.initialInView,entry:void 0})),o.node=i||null,o.observeNode()},o.handleChange=function(i,l){i&&o.props.triggerOnce&&o.unobserve(),Nu(o.props)||o.setState({inView:i,entry:l}),o.props.onChange&&o.props.onChange(i,l)},o.state={inView:!!r.initialInView,entry:void 0},o}var n=t.prototype;return n.componentDidUpdate=function(o){(o.rootMargin!==this.props.rootMargin||o.root!==this.props.root||o.threshold!==this.props.threshold||o.skip!==this.props.skip||o.trackVisibility!==this.props.trackVisibility||o.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},n.componentWillUnmount=function(){this.unobserve(),this.node=null},n.observeNode=function(){if(!(!this.node||this.props.skip)){var o=this.props,i=o.threshold,l=o.root,a=o.rootMargin,s=o.trackVisibility,c=o.delay,p=o.fallbackInView;this._unobserveCb=ad(this.node,this.handleChange,{threshold:i,root:l,rootMargin:a,trackVisibility:s,delay:c},p)}},n.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},n.render=function(){if(!Nu(this.props)){var o=this.state,i=o.inView,l=o.entry;return this.props.children({inView:i,entry:l,ref:this.handleNode})}var a=this.props,s=a.children,c=a.as,p=Jm(a,n1);return z.exports.createElement(c||"div",ta({ref:this.handleNode},p),s)},t}(z.exports.Component);function sd(e){var t,n=e===void 0?{}:e,r=n.threshold,o=n.delay,i=n.trackVisibility,l=n.rootMargin,a=n.root,s=n.triggerOnce,c=n.skip,p=n.initialInView,m=n.fallbackInView,h=n.onChange,w=z.exports.useState(null),g=w[0],v=w[1],P=z.exports.useRef(),f=z.exports.useState({inView:!!p,entry:void 0}),u=f[0],d=f[1];P.current=h,z.exports.useEffect(function(){if(!(c||!g)){var E=ad(g,function($,N){d({inView:$,entry:N}),P.current&&P.current($,N),N.isIntersecting&&s&&E&&(E(),E=void 0)},{root:a,rootMargin:l,threshold:r,trackVisibility:i,delay:o},m);return function(){E&&E()}}},[Array.isArray(r)?r.toString():r,g,a,l,s,c,i,m,o]);var y=(t=u.entry)==null?void 0:t.target;z.exports.useEffect(function(){!g&&y&&!s&&!c&&d({inView:!!p,entry:void 0})},[g,y,s,c,p]);var k=[v,u.inView,u.entry];return k.ref=k[0],k.inView=k[1],k.entry=k[2],k}var ud={exports:{}},V={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var as=Symbol.for("react.element"),ss=Symbol.for("react.portal"),vi=Symbol.for("react.fragment"),gi=Symbol.for("react.strict_mode"),wi=Symbol.for("react.profiler"),xi=Symbol.for("react.provider"),Si=Symbol.for("react.context"),r1=Symbol.for("react.server_context"),ki=Symbol.for("react.forward_ref"),$i=Symbol.for("react.suspense"),Ei=Symbol.for("react.suspense_list"),Ci=Symbol.for("react.memo"),_i=Symbol.for("react.lazy"),o1=Symbol.for("react.offscreen"),cd;cd=Symbol.for("react.module.reference");function Ue(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case as:switch(e=e.type,e){case vi:case wi:case gi:case $i:case Ei:return e;default:switch(e=e&&e.$$typeof,e){case r1:case Si:case ki:case _i:case Ci:case xi:return e;default:return t}}case ss:return t}}}V.ContextConsumer=Si;V.ContextProvider=xi;V.Element=as;V.ForwardRef=ki;V.Fragment=vi;V.Lazy=_i;V.Memo=Ci;V.Portal=ss;V.Profiler=wi;V.StrictMode=gi;V.Suspense=$i;V.SuspenseList=Ei;V.isAsyncMode=function(){return!1};V.isConcurrentMode=function(){return!1};V.isContextConsumer=function(e){return Ue(e)===Si};V.isContextProvider=function(e){return Ue(e)===xi};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===as};V.isForwardRef=function(e){return Ue(e)===ki};V.isFragment=function(e){return Ue(e)===vi};V.isLazy=function(e){return Ue(e)===_i};V.isMemo=function(e){return Ue(e)===Ci};V.isPortal=function(e){return Ue(e)===ss};V.isProfiler=function(e){return Ue(e)===wi};V.isStrictMode=function(e){return Ue(e)===gi};V.isSuspense=function(e){return Ue(e)===$i};V.isSuspenseList=function(e){return Ue(e)===Ei};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===vi||e===wi||e===gi||e===$i||e===Ei||e===o1||typeof e=="object"&&e!==null&&(e.$$typeof===_i||e.$$typeof===Ci||e.$$typeof===xi||e.$$typeof===Si||e.$$typeof===ki||e.$$typeof===cd||e.getModuleId!==void 0)};V.typeOf=Ue;(function(e){e.exports=V})(ud);function at(e,t){return Object.keys(t).forEach(function(n){n==="default"||n==="__esModule"||e.hasOwnProperty(n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})}),e}function Je(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var st={},fd={};Je(fd,"AttentionSeeker",()=>j1);const i1=S`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,l1=S`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,a1=S`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,s1=S`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,u1=S`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,c1=S`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,f1=S`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,d1=S`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,p1=S`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,m1=S`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,h1=S`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,y1=S`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,v1=S`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var g1={};Je(g1,"Reveal",()=>We);const w1=S`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,x1=S`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,S1=S`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,k1=S`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$1=S`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,us=S`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,E1=S`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,C1=S`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_1=S`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,P1=S`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,N1=S`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,z1=S`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,T1=S`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function O1({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=us,iterationCount:o=1}){return Mn`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};
  `}function R1(e){return e==null}function L1(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}const Vo=Mn`
  opacity: 0;
`,M1=Mn`
  display: inline-block;
  white-space: pre;
`,We=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=us,triggerOnce:a=!1,css:s,className:c,style:p,childClassName:m,childStyle:h,children:w,onVisibilityChange:g}=e,v=z.exports.useMemo(()=>O1({keyframes:l,duration:o}),[o,l]);return R1(w)?null:L1(w)?U(I1,{...e,animationStyles:v,children:String(w)}):ud.exports.isFragment(w)?U(dd,{...e,animationStyles:v}):U(Ym,{children:z.exports.Children.map(w,(P,f)=>{if(!z.exports.isValidElement(P))return null;const u=[s,v],d=r+(t?f*o*n:0);switch(P.type){case"ol":case"ul":return U(ol,{children:({cx:y})=>U(P.type,{...P.props,className:y(c,P.props.className),style:{...p,...P.props.style},children:U(We,{...e,children:P.props.children})})});case"li":return U(zu,{threshold:i,triggerOnce:a,onChange:g,children:({inView:y,ref:k})=>U(ol,{children:({cx:E})=>U(P.type,{...P.props,ref:k,className:E(m,P.props.className),css:y?u:Vo,style:{...h,...P.props.style,animationDelay:d+"ms"}})})});default:return U(zu,{threshold:i,triggerOnce:a,onChange:g,children:({inView:y,ref:k})=>U("div",{ref:k,className:c,css:y?u:Vo,style:{...p,animationDelay:d+"ms"},children:U(ol,{children:({cx:E})=>U(P.type,{...P.props,className:E(m,P.props.className),style:{...h,...P.props.style}})})})})}})})},I1=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:a=!1,css:s,className:c,style:p,children:m,onVisibilityChange:h}=e,{ref:w,inView:g}=sd({triggerOnce:a,threshold:l,onChange:h});return n?U("div",{ref:w,className:c,css:[s,M1],style:p,children:m.split("").map((v,P)=>U("span",{css:g?t:Vo,style:{animationDelay:o+P*i*r+"ms"},children:v},P))}):U(dd,{...e,children:m})},dd=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,css:o,className:i,style:l,children:a,onVisibilityChange:s}=e,{ref:c,inView:p}=sd({triggerOnce:r,threshold:n,onChange:s});return U("div",{ref:c,className:i,css:p?[o,t]:Vo,style:l,children:a})};function F1(e){switch(e){case"flash":return[l1];case"headShake":return[a1,{animationTimingFunction:"ease-in-out"}];case"heartBeat":return[s1,{animationTimingFunction:"ease-in-out"}];case"jello":return[u1,{transformOrigin:"center"}];case"pulse":return[c1,{animationTimingFunction:"ease-in-out"}];case"rubberBand":return[f1];case"shake":return[d1];case"shakeX":return[p1];case"shakeY":return[m1];case"swing":return[h1,{transformOrigin:"top center"}];case"tada":return[y1];case"wobble":return[v1];case"bounce":default:return[i1,{transformOrigin:"center bottom"}]}}const j1=e=>{const{effect:t="bounce",...n}=e,[r,o]=z.exports.useMemo(()=>F1(t),[t]);return U(We,{keyframes:r,css:o,...n})};var pd={};Je(pd,"Bounce",()=>G1);const D1=S`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,A1=S`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,V1=S`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,U1=S`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,W1=S`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,B1=S`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,H1=S`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,Q1=S`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,Y1=S`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,X1=S`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;function K1(e,t){switch(t){case"down":return e?H1:A1;case"left":return e?Q1:V1;case"right":return e?Y1:U1;case"up":return e?X1:W1;default:return e?B1:D1}}const G1=e=>{const{direction:t,reverse:n=!1,...r}=e,o=z.exports.useMemo(()=>K1(n,t),[t,n]);return U(We,{keyframes:o,...r})};var md={};Je(md,"Fade",()=>hd);const Z1=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,J1=S`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,b1=S`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,q1=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,eh=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,th=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,nh=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,rh=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,oh=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,ih=S`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,lh=S`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,ah=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,sh=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function uh(e,t,n){switch(n){case"bottom-left":return t?J1:x1;case"bottom-right":return t?b1:S1;case"down":return e?t?eh:$1:t?q1:k1;case"left":return e?t?nh:E1:t?th:us;case"right":return e?t?oh:_1:t?rh:C1;case"top-left":return t?ih:P1;case"top-right":return t?lh:N1;case"up":return e?t?sh:T1:t?ah:z1;default:return t?Z1:w1}}const hd=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=z.exports.useMemo(()=>uh(t,r,n),[t,n,r]);return U(We,{keyframes:i,...o})};var yd={};Je(yd,"Flip",()=>vh);const ch=S`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,fh=S`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,dh=S`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,ph=S`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,mh=S`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;function hh(e,t){switch(t){case"horizontal":return e?ph:fh;case"vertical":return e?mh:dh;default:return ch}}const yh=Mn`
  backface-visibility: visible;
`,vh=e=>{const{direction:t,reverse:n=!1,...r}=e,o=z.exports.useMemo(()=>hh(n,t),[t,n]);return U(We,{css:yh,keyframes:o,...r})};var vd={};Je(vd,"Hinge",()=>$h);const gh=S`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,wh=S`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,xh=S`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Sh=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,kh=Mn`
  transform-origin: top left;
`,$h=e=>U(We,{css:kh,keyframes:gh,...e});var gd={};Je(gd,"JackInTheBox",()=>wd);const wd=e=>U(We,{keyframes:wh,...e});var xd={};Je(xd,"Roll",()=>Ch);function Eh(e){return e?Sh:xh}const Ch=e=>{const{reverse:t=!1,...n}=e,r=z.exports.useMemo(()=>Eh(t),[t]);return U(We,{keyframes:r,...n})};var Sd={};Je(Sd,"Rotate",()=>jh);const _h=S`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Ph=S`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Nh=S`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,zh=S`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Th=S`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Oh=S`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,Rh=S`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,Lh=S`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Mh=S`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Ih=S`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;function Fh(e,t){switch(t){case"bottom-left":return e?[Rh,{transformOrigin:"left bottom"}]:[Ph,{transformOrigin:"left bottom"}];case"bottom-right":return e?[Lh,{transformOrigin:"right bottom"}]:[Nh,{transformOrigin:"right bottom"}];case"top-left":return e?[Mh,{transformOrigin:"left bottom"}]:[zh,{transformOrigin:"left bottom"}];case"top-right":return e?[Ih,{transformOrigin:"right bottom"}]:[Th,{transformOrigin:"right bottom"}];default:return e?[Oh,{transformOrigin:"center"}]:[_h,{transformOrigin:"center"}]}}const jh=e=>{const{direction:t,reverse:n=!1,...r}=e,[o,i]=z.exports.useMemo(()=>Fh(n,t),[t,n]);return U(We,{css:i,keyframes:o,...r})};var kd={};Je(kd,"Slide",()=>Xh);const Dh=S`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Ah=S`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Vh=S`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Uh=S`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Wh=S`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Bh=S`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,Hh=S`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,Qh=S`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function Yh(e,t){switch(t){case"down":return e?Wh:Dh;case"right":return e?Hh:Vh;case"up":return e?Qh:Uh;case"left":default:return e?Bh:Ah}}const Xh=e=>{const{direction:t,reverse:n=!1,...r}=e,o=z.exports.useMemo(()=>Yh(n,t),[t,n]);return U(We,{keyframes:o,...r})};var $d={};Je($d,"Zoom",()=>iy);const Kh=S`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Gh=S`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Zh=S`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Jh=S`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,bh=S`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,qh=S`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,ey=S`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,ty=S`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,ny=S`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,ry=S`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function oy(e,t){switch(t){case"down":return e?ey:Gh;case"left":return e?ty:Zh;case"right":return e?ny:Jh;case"up":return e?ry:bh;default:return e?qh:Kh}}const iy=e=>{const{direction:t,reverse:n=!1,...r}=e,o=z.exports.useMemo(()=>oy(n,t),[t,n]);return U(We,{keyframes:o,...r})};at(st,fd);at(st,pd);at(st,md);at(st,yd);at(st,vd);at(st,gd);at(st,xd);at(st,Sd);at(st,kd);at(st,$d);const Ed=z.exports.createContext({}),Pi=()=>{const{pieceState:e,handlerPickPiece:t,handlerPlayAgain:n}=z.exports.useContext(Ed);return{pieceState:e,handlerPickPiece:t,handlerPlayAgain:n}},ly=()=>Math.floor(Math.random()*3),ir=({piece:{src:e,alt:t,piece:n},selected:r})=>{const{pieceState:o,handlerPickPiece:i}=Pi(),l=()=>{r&&i({you:{src:e,piece:n,alt:t},pc:o.pieces[ly()]})};return T(lt,{children:T("div",{className:`piece__container ${n}_gradient ${r&&" cursor-pointer"}`,onClick:l,children:T("img",{src:e,alt:t,className:"piece__img"})})})},ay=()=>{const{pieceState:{pieces:e,pieceSelected:t}}=Pi(),[n,r,o]=e;return T(lt,{children:Pe("section",{className:"w-full pick__pieces-container max-w-2xl",children:[Pe("div",{className:"pool__up",children:[T(ir,{piece:n,selected:!0}),T(ir,{piece:r,selected:!0})]}),T("div",{className:"pool__down",children:T(ir,{piece:o,selected:!0})})]})})},sy=[{pick:"rock",winner:"scissors"},{pick:"scissors",winner:"paper"},{pick:"paper",winner:"rock"}],uy=({you:e,pc:t})=>{if(e.piece===t.piece)return"TIE";const n=sy.find(({pick:r})=>r===e.piece);return n&&n.winner===t.piece?"YOU WIN":"YOU LOSE"},Cd=z.exports.createContext({}),_d=()=>{const{gameState:e,handlerYouWin:t,handlerResetScore:n}=z.exports.useContext(Cd);return{gameState:e,handlerYouWin:t,handlerResetScore:n}},cy=()=>{const[e,t]=z.exports.useState(""),{pieceState:{pieceSelected:n},handlerPlayAgain:r}=Pi(),{handlerYouWin:o}=_d(),i=()=>{const l=uy(n);l==="YOU WIN"&&o(),console.log(l),t(l)};return z.exports.useEffect(()=>{i()},[n]),Pe(lt,{children:[Pe("div",{className:"flex  justify-between items-center relative",children:[Pe("div",{className:"flex flex-col-reverse md:flex-col items-center",children:[T("h4",{className:"my-5 text-2xl text-center",children:"You Picked"}),n&&T(ir,{piece:n.you})]}),Pe("div",{className:"flex flex-col-reverse md:flex-col items-center",children:[T("h4",{className:"my-5 text-2xl text-center",children:"The House Picked"}),n&&T(ir,{piece:n.pc})]})]}),Pe("div",{className:"flex flex-col justify-center items-center play-again__container",children:[T("h2",{className:"text-5xl",children:e}),T("button",{onClick:r,className:"bg-white py-3 my-2 px-16 text-slate-900 rounded hover:text-red-500",children:"PLAY AGAIN"})]})]})},fy=()=>{const[e,t]=z.exports.useState(!1);return{showModal:e,handlerToggleModal:()=>t(!e)}},dy=""+new URL("icon-close.55b786af.svg",import.meta.url).href,py=""+new URL("image-rules.1a7bc2cb.svg",import.meta.url).href,my=({closeModal:e})=>T(lt,{children:T("section",{className:"modal",children:Pe("div",{className:"modal__content",children:[T("img",{src:py,alt:"Rules Game",className:"modal__img-rules"}),Pe("div",{className:"modal__close text-2xl flex my-5 justify-center md:justify-between",children:[T("p",{className:"modal__close-title text-4xl",children:"Rules"}),T("img",{src:dy,alt:"btn close",className:"modal__close-icon cursor-pointer",onClick:e})]})]})})}),hy=()=>{const{showModal:e,handlerToggleModal:t}=fy();return Pe(lt,{children:[T("div",{className:"btn__container flex  md:self-end",children:T("button",{className:"btn",onClick:t,children:"Rules"})}),e&&T(my,{closeModal:t})]})},yy=""+new URL("logo.1ea8253d.svg",import.meta.url).href,vy=()=>{const{gameState:e}=_d();return T(lt,{children:Pe("section",{className:"score__panel w-full ",children:[T("img",{className:"score__panel-img",src:yy,alt:"Logo App"}),Pe("div",{className:"score__panel-points",children:[T("p",{className:"score__panel-points-p",children:"Score"}),T("span",{className:"score__panel-points-span",children:e.score})]})]})})};const gy=()=>{const{pieceState:{pieceSelected:e}}=Pi();return T(lt,{children:Pe("div",{id:"wrapper",className:"flex flex-col justify-between items-center",children:[T(vy,{}),T("section",{className:"max-w-3xl container flex-col justify-between gap-2",children:e?T(hd,{children:T(cy,{})}):T(wd,{children:T(ay,{})})}),T(hy,{})]})})},wy=(e,{type:t,payload:n})=>{switch(t){case"[Game] SET_SCORE":return{...e,score:n};case"[Game] RESET_SCORE":return{...e,score:0};default:return e}},xy={score:0},Sy=({children:e})=>{const[t,n]=z.exports.useReducer(wy,xy),r=()=>{const i=t.score+1;n({type:"[Game] SET_SCORE",payload:i})},o=()=>{n({type:"[Game] RESET_SCORE",payload:0})};return T(lt,{children:T(Cd.Provider,{value:{gameState:t,handlerYouWin:r,handlerResetScore:o},children:e})})},ky=(e,{type:t,payload:n})=>{switch(t){case"[Piece] Pick":return{...e,pieceSelected:{...n}};case"[Piece] Game Play Again":return{...n};default:return e}},$y=""+new URL("icon-rock.e16feca1.svg",import.meta.url).href,Ey=""+new URL("icon-paper.90d57903.svg",import.meta.url).href,Cy=""+new URL("icon-scissors.f778df73.svg",import.meta.url).href,Tu={pieces:[{src:Ey,alt:"Paper Piece",piece:"paper"},{src:Cy,alt:"Scissors Piece",piece:"scissors"},{src:$y,alt:"Rock Piece",piece:"rock"}],pieceSelected:null},_y=({children:e})=>{const[t,n]=z.exports.useReducer(ky,Tu),r=i=>n({type:"[Piece] Pick",payload:i}),o=()=>{n({type:"[Piece] Game Play Again",payload:Tu})};return T(lt,{children:T(Ed.Provider,{value:{pieceState:t,handlerPickPiece:r,handlerPlayAgain:o},children:e})})};il.createRoot(document.getElementById("root")).render(T(Du.StrictMode,{children:T(Sy,{children:T(_y,{children:T(gy,{})})})}));
