function rI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function g1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function iI(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var s=Function.bind.apply(e,i);return new s}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var h={},sI={get exports(){return h},set exports(t){h=t}},Tc={},_={},oI={get exports(){return _},set exports(t){_=t}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),aI=Symbol.for("react.portal"),lI=Symbol.for("react.fragment"),uI=Symbol.for("react.strict_mode"),cI=Symbol.for("react.profiler"),fI=Symbol.for("react.provider"),dI=Symbol.for("react.context"),hI=Symbol.for("react.forward_ref"),pI=Symbol.for("react.suspense"),mI=Symbol.for("react.memo"),gI=Symbol.for("react.lazy"),Av=Symbol.iterator;function vI(t){return t===null||typeof t!="object"?null:(t=Av&&t[Av]||t["@@iterator"],typeof t=="function"?t:null)}var v1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y1=Object.assign,w1={};function Ts(t,e,n){this.props=t,this.context=e,this.refs=w1,this.updater=n||v1}Ts.prototype.isReactComponent={};Ts.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ts.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function S1(){}S1.prototype=Ts.prototype;function tm(t,e,n){this.props=t,this.context=e,this.refs=w1,this.updater=n||v1}var nm=tm.prototype=new S1;nm.constructor=tm;y1(nm,Ts.prototype);nm.isPureReactComponent=!0;var Nv=Array.isArray,E1=Object.prototype.hasOwnProperty,rm={current:null},_1={key:!0,ref:!0,__self:!0,__source:!0};function k1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)E1.call(e,r)&&!_1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ca,type:t,key:s,ref:o,props:i,_owner:rm.current}}function yI(t,e){return{$$typeof:ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function im(t){return typeof t=="object"&&t!==null&&t.$$typeof===ca}function wI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dv=/\/+/g;function $f(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wI(""+t.key):e.toString(36)}function jl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ca:case aI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+$f(o,0):r,Nv(i)?(n="",t!=null&&(n=t.replace(Dv,"$&/")+"/"),jl(i,e,n,"",function(u){return u})):i!=null&&(im(i)&&(i=yI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Dv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Nv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+$f(s,a);o+=jl(s,e,n,l,i)}else if(l=vI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+$f(s,a++),o+=jl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qa(t,e,n){if(t==null)return t;var r=[],i=0;return jl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function SI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mt={current:null},Fl={transition:null},EI={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:Fl,ReactCurrentOwner:rm};ne.Children={map:Qa,forEach:function(t,e,n){Qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qa(t,function(){e++}),e},toArray:function(t){return Qa(t,function(e){return e})||[]},only:function(t){if(!im(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Ts;ne.Fragment=lI;ne.Profiler=cI;ne.PureComponent=tm;ne.StrictMode=uI;ne.Suspense=pI;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EI;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=y1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)E1.call(e,l)&&!_1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ca,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:dI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fI,_context:t},t.Consumer=t};ne.createElement=k1;ne.createFactory=function(t){var e=k1.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:hI,render:t}};ne.isValidElement=im;ne.lazy=function(t){return{$$typeof:gI,_payload:{_status:-1,_result:t},_init:SI}};ne.memo=function(t,e){return{$$typeof:mI,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Fl.transition;Fl.transition={};try{t()}finally{Fl.transition=e}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(t,e){return mt.current.useCallback(t,e)};ne.useContext=function(t){return mt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return mt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return mt.current.useEffect(t,e)};ne.useId=function(){return mt.current.useId()};ne.useImperativeHandle=function(t,e,n){return mt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return mt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return mt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return mt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return mt.current.useReducer(t,e,n)};ne.useRef=function(t){return mt.current.useRef(t)};ne.useState=function(t){return mt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return mt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return mt.current.useTransition()};ne.version="18.2.0";(function(t){t.exports=ne})(oI);const Ic=g1(_),Kd=rI({__proto__:null,default:Ic},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _I=_,kI=Symbol.for("react.element"),bI=Symbol.for("react.fragment"),TI=Object.prototype.hasOwnProperty,II=_I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xI={key:!0,ref:!0,__self:!0,__source:!0};function b1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)TI.call(e,r)&&!xI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:kI,type:t,key:s,ref:o,props:i,_owner:II.current}}Tc.Fragment=bI;Tc.jsx=b1;Tc.jsxs=b1;(function(t){t.exports=Tc})(sI);var Yd={},Qd={},CI={get exports(){return Qd},set exports(t){Qd=t}},Lt={},Xd={},OI={get exports(){return Xd},set exports(t){Xd=t}},T1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,W){var K=A.length;A.push(W);e:for(;0<K;){var ge=K-1>>>1,le=A[ge];if(0<i(le,W))A[ge]=W,A[K]=le,K=ge;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var W=A[0],K=A.pop();if(K!==W){A[0]=K;e:for(var ge=0,le=A.length,Ii=le>>>1;ge<Ii;){var It=2*(ge+1)-1,Mf=A[It],Fr=It+1,Ka=A[Fr];if(0>i(Mf,K))Fr<le&&0>i(Ka,Mf)?(A[ge]=Ka,A[Fr]=K,ge=Fr):(A[ge]=Mf,A[It]=K,ge=It);else if(Fr<le&&0>i(Ka,K))A[ge]=Ka,A[Fr]=K,ge=Fr;else break e}}return W}function i(A,W){var K=A.sortIndex-W.sortIndex;return K!==0?K:A.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,g=!1,w=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=A)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function E(A){if(y=!1,v(A),!w)if(n(l)!==null)w=!0,vt(k);else{var W=n(u);W!==null&&Ft(E,W.startTime-A)}}function k(A,W){w=!1,y&&(y=!1,m(b),b=-1),g=!0;var K=d;try{for(v(W),f=n(l);f!==null&&(!(f.expirationTime>W)||A&&!B());){var ge=f.callback;if(typeof ge=="function"){f.callback=null,d=f.priorityLevel;var le=ge(f.expirationTime<=W);W=t.unstable_now(),typeof le=="function"?f.callback=le:f===n(l)&&r(l),v(W)}else r(l);f=n(l)}if(f!==null)var Ii=!0;else{var It=n(u);It!==null&&Ft(E,It.startTime-W),Ii=!1}return Ii}finally{f=null,d=K,g=!1}}var T=!1,x=null,b=-1,C=5,P=-1;function B(){return!(t.unstable_now()-P<C)}function U(){if(x!==null){var A=t.unstable_now();P=A;var W=!0;try{W=x(!0,A)}finally{W?z():(T=!1,x=null)}}else T=!1}var z;if(typeof p=="function")z=function(){p(U)};else if(typeof MessageChannel<"u"){var jt=new MessageChannel,Oe=jt.port2;jt.port1.onmessage=U,z=function(){Oe.postMessage(null)}}else z=function(){S(U,0)};function vt(A){x=A,T||(T=!0,z())}function Ft(A,W){b=S(function(){A(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){w||g||(w=!0,vt(k))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var K=d;d=W;try{return A()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,W){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var K=d;d=A;try{return W()}finally{d=K}},t.unstable_scheduleCallback=function(A,W,K){var ge=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ge+K:ge):K=ge,A){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=K+le,A={id:c++,callback:W,priorityLevel:A,startTime:K,expirationTime:le,sortIndex:-1},K>ge?(A.sortIndex=K,e(u,A),n(l)===null&&A===n(u)&&(y?(m(b),b=-1):y=!0,Ft(E,K-ge))):(A.sortIndex=le,e(l,A),w||g||(w=!0,vt(k))),A},t.unstable_shouldYield=B,t.unstable_wrapCallback=function(A){var W=d;return function(){var K=d;d=W;try{return A.apply(this,arguments)}finally{d=K}}}})(T1);(function(t){t.exports=T1})(OI);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I1=_,Nt=Xd;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var x1=new Set,To={};function vi(t,e){ss(t,e),ss(t+"Capture",e)}function ss(t,e){for(To[t]=e,t=0;t<e.length;t++)x1.add(e[t])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jd=Object.prototype.hasOwnProperty,RI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lv={},Mv={};function PI(t){return Jd.call(Mv,t)?!0:Jd.call(Lv,t)?!1:RI.test(t)?Mv[t]=!0:(Lv[t]=!0,!1)}function AI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function NI(t,e,n,r){if(e===null||typeof e>"u"||AI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ye[t]=new gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ye[e]=new gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ye[t]=new gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ye[t]=new gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ye[t]=new gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ye[t]=new gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ye[t]=new gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ye[t]=new gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ye[t]=new gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var sm=/[\-:]([a-z])/g;function om(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sm,om);Ye[e]=new gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sm,om);Ye[e]=new gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sm,om);Ye[e]=new gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ye[t]=new gt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ye[t]=new gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function am(t,e,n,r){var i=Ye.hasOwnProperty(e)?Ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(NI(e,n,i,r)&&(n=null),r||i===null?PI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gn=I1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xa=Symbol.for("react.element"),Ri=Symbol.for("react.portal"),Pi=Symbol.for("react.fragment"),lm=Symbol.for("react.strict_mode"),Zd=Symbol.for("react.profiler"),C1=Symbol.for("react.provider"),O1=Symbol.for("react.context"),um=Symbol.for("react.forward_ref"),eh=Symbol.for("react.suspense"),th=Symbol.for("react.suspense_list"),cm=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),R1=Symbol.for("react.offscreen"),$v=Symbol.iterator;function Fs(t){return t===null||typeof t!="object"?null:(t=$v&&t[$v]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,jf;function Ys(t){if(jf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);jf=e&&e[1]||""}return`
`+jf+t}var Ff=!1;function Uf(t,e){if(!t||Ff)return"";Ff=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ff=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ys(t):""}function DI(t){switch(t.tag){case 5:return Ys(t.type);case 16:return Ys("Lazy");case 13:return Ys("Suspense");case 19:return Ys("SuspenseList");case 0:case 2:case 15:return t=Uf(t.type,!1),t;case 11:return t=Uf(t.type.render,!1),t;case 1:return t=Uf(t.type,!0),t;default:return""}}function nh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Pi:return"Fragment";case Ri:return"Portal";case Zd:return"Profiler";case lm:return"StrictMode";case eh:return"Suspense";case th:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case O1:return(t.displayName||"Context")+".Consumer";case C1:return(t._context.displayName||"Context")+".Provider";case um:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case cm:return e=t.displayName||null,e!==null?e:nh(t.type)||"Memo";case Jn:e=t._payload,t=t._init;try{return nh(t(e))}catch{}}return null}function LI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nh(e);case 8:return e===lm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function P1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function MI(t){var e=P1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=MI(t))}function A1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=P1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function lu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rh(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function N1(t,e){e=e.checked,e!=null&&am(t,"checked",e,!1)}function ih(t,e){N1(t,e);var n=kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sh(t,e.type,n):e.hasOwnProperty("defaultValue")&&sh(t,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sh(t,e,n){(e!=="number"||lu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qs=Array.isArray;function Gi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function oh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Uv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(O(92));if(Qs(n)){if(1<n.length)throw Error(O(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kr(n)}}function D1(t,e){var n=kr(e.value),r=kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function L1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ah(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?L1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,M1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Io(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$I=["Webkit","ms","Moz","O"];Object.keys(oo).forEach(function(t){$I.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oo[e]=oo[t]})});function $1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oo.hasOwnProperty(t)&&oo[t]?(""+e).trim():e+"px"}function j1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var jI=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lh(t,e){if(e){if(jI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function uh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ch=null;function fm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fh=null,Ki=null,Yi=null;function Vv(t){if(t=ha(t)){if(typeof fh!="function")throw Error(O(280));var e=t.stateNode;e&&(e=Pc(e),fh(t.stateNode,t.type,e))}}function F1(t){Ki?Yi?Yi.push(t):Yi=[t]:Ki=t}function U1(){if(Ki){var t=Ki,e=Yi;if(Yi=Ki=null,Vv(t),e)for(t=0;t<e.length;t++)Vv(e[t])}}function z1(t,e){return t(e)}function V1(){}var zf=!1;function B1(t,e,n){if(zf)return t(e,n);zf=!0;try{return z1(t,e,n)}finally{zf=!1,(Ki!==null||Yi!==null)&&(V1(),U1())}}function xo(t,e){var n=t.stateNode;if(n===null)return null;var r=Pc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(O(231,e,typeof n));return n}var dh=!1;if(Ln)try{var Us={};Object.defineProperty(Us,"passive",{get:function(){dh=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{dh=!1}function FI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ao=!1,uu=null,cu=!1,hh=null,UI={onError:function(t){ao=!0,uu=t}};function zI(t,e,n,r,i,s,o,a,l){ao=!1,uu=null,FI.apply(UI,arguments)}function VI(t,e,n,r,i,s,o,a,l){if(zI.apply(this,arguments),ao){if(ao){var u=uu;ao=!1,uu=null}else throw Error(O(198));cu||(cu=!0,hh=u)}}function yi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function H1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bv(t){if(yi(t)!==t)throw Error(O(188))}function BI(t){var e=t.alternate;if(!e){if(e=yi(t),e===null)throw Error(O(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bv(i),t;if(s===r)return Bv(i),e;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?t:e}function W1(t){return t=BI(t),t!==null?q1(t):null}function q1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=q1(t);if(e!==null)return e;t=t.sibling}return null}var G1=Nt.unstable_scheduleCallback,Hv=Nt.unstable_cancelCallback,HI=Nt.unstable_shouldYield,WI=Nt.unstable_requestPaint,xe=Nt.unstable_now,qI=Nt.unstable_getCurrentPriorityLevel,dm=Nt.unstable_ImmediatePriority,K1=Nt.unstable_UserBlockingPriority,fu=Nt.unstable_NormalPriority,GI=Nt.unstable_LowPriority,Y1=Nt.unstable_IdlePriority,xc=null,pn=null;function KI(t){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(xc,t,void 0,(t.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:XI,YI=Math.log,QI=Math.LN2;function XI(t){return t>>>=0,t===0?32:31-(YI(t)/QI|0)|0}var el=64,tl=4194304;function Xs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function du(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Xs(a):(s&=o,s!==0&&(r=Xs(s)))}else o=n&~i,o!==0?r=Xs(o):s!==0&&(r=Xs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-en(e),i=1<<n,r|=t[n],e&=~i;return r}function JI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-en(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=JI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ph(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Q1(){var t=el;return el<<=1,!(el&4194240)&&(el=64),t}function Vf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-en(e),t[e]=n}function ex(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-en(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function hm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-en(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function X1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var J1,pm,Z1,eS,tS,mh=!1,nl=[],fr=null,dr=null,hr=null,Co=new Map,Oo=new Map,tr=[],tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wv(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(e.pointerId)}}function zs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ha(e),e!==null&&pm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nx(t,e,n,r,i){switch(e){case"focusin":return fr=zs(fr,t,e,n,r,i),!0;case"dragenter":return dr=zs(dr,t,e,n,r,i),!0;case"mouseover":return hr=zs(hr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Co.set(s,zs(Co.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Oo.set(s,zs(Oo.get(s)||null,t,e,n,r,i)),!0}return!1}function nS(t){var e=Br(t.target);if(e!==null){var n=yi(e);if(n!==null){if(e=n.tag,e===13){if(e=H1(n),e!==null){t.blockedOn=e,tS(t.priority,function(){Z1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ch=r,n.target.dispatchEvent(r),ch=null}else return e=ha(n),e!==null&&pm(e),t.blockedOn=n,!1;e.shift()}return!0}function qv(t,e,n){Ul(t)&&n.delete(e)}function rx(){mh=!1,fr!==null&&Ul(fr)&&(fr=null),dr!==null&&Ul(dr)&&(dr=null),hr!==null&&Ul(hr)&&(hr=null),Co.forEach(qv),Oo.forEach(qv)}function Vs(t,e){t.blockedOn===e&&(t.blockedOn=null,mh||(mh=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,rx)))}function Ro(t){function e(i){return Vs(i,t)}if(0<nl.length){Vs(nl[0],t);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fr!==null&&Vs(fr,t),dr!==null&&Vs(dr,t),hr!==null&&Vs(hr,t),Co.forEach(e),Oo.forEach(e),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)nS(n),n.blockedOn===null&&tr.shift()}var Qi=Gn.ReactCurrentBatchConfig,hu=!0;function ix(t,e,n,r){var i=ae,s=Qi.transition;Qi.transition=null;try{ae=1,mm(t,e,n,r)}finally{ae=i,Qi.transition=s}}function sx(t,e,n,r){var i=ae,s=Qi.transition;Qi.transition=null;try{ae=4,mm(t,e,n,r)}finally{ae=i,Qi.transition=s}}function mm(t,e,n,r){if(hu){var i=gh(t,e,n,r);if(i===null)Jf(t,e,r,pu,n),Wv(t,r);else if(nx(i,t,e,n,r))r.stopPropagation();else if(Wv(t,r),e&4&&-1<tx.indexOf(t)){for(;i!==null;){var s=ha(i);if(s!==null&&J1(s),s=gh(t,e,n,r),s===null&&Jf(t,e,r,pu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Jf(t,e,r,null,n)}}var pu=null;function gh(t,e,n,r){if(pu=null,t=fm(r),t=Br(t),t!==null)if(e=yi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=H1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pu=t,null}function rS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qI()){case dm:return 1;case K1:return 4;case fu:case GI:return 16;case Y1:return 536870912;default:return 16}default:return 16}}var ar=null,gm=null,zl=null;function iS(){if(zl)return zl;var t,e=gm,n=e.length,r,i="value"in ar?ar.value:ar.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return zl=i.slice(t,1<r?1-r:void 0)}function Vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function Gv(){return!1}function Mt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rl:Gv,this.isPropagationStopped=Gv,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),e}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vm=Mt(Is),da=ke({},Is,{view:0,detail:0}),ox=Mt(da),Bf,Hf,Bs,Cc=ke({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ym,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bs&&(Bs&&t.type==="mousemove"?(Bf=t.screenX-Bs.screenX,Hf=t.screenY-Bs.screenY):Hf=Bf=0,Bs=t),Bf)},movementY:function(t){return"movementY"in t?t.movementY:Hf}}),Kv=Mt(Cc),ax=ke({},Cc,{dataTransfer:0}),lx=Mt(ax),ux=ke({},da,{relatedTarget:0}),Wf=Mt(ux),cx=ke({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),fx=Mt(cx),dx=ke({},Is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hx=Mt(dx),px=ke({},Is,{data:0}),Yv=Mt(px),mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vx[t])?!!e[t]:!1}function ym(){return yx}var wx=ke({},da,{key:function(t){if(t.key){var e=mx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ym,charCode:function(t){return t.type==="keypress"?Vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sx=Mt(wx),Ex=ke({},Cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qv=Mt(Ex),_x=ke({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ym}),kx=Mt(_x),bx=ke({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tx=Mt(bx),Ix=ke({},Cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xx=Mt(Ix),Cx=[9,13,27,32],wm=Ln&&"CompositionEvent"in window,lo=null;Ln&&"documentMode"in document&&(lo=document.documentMode);var Ox=Ln&&"TextEvent"in window&&!lo,sS=Ln&&(!wm||lo&&8<lo&&11>=lo),Xv=String.fromCharCode(32),Jv=!1;function oS(t,e){switch(t){case"keyup":return Cx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function aS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ai=!1;function Rx(t,e){switch(t){case"compositionend":return aS(e);case"keypress":return e.which!==32?null:(Jv=!0,Xv);case"textInput":return t=e.data,t===Xv&&Jv?null:t;default:return null}}function Px(t,e){if(Ai)return t==="compositionend"||!wm&&oS(t,e)?(t=iS(),zl=gm=ar=null,Ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sS&&e.locale!=="ko"?null:e.data;default:return null}}var Ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ax[t.type]:e==="textarea"}function lS(t,e,n,r){F1(r),e=mu(e,"onChange"),0<e.length&&(n=new vm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var uo=null,Po=null;function Nx(t){wS(t,0)}function Oc(t){var e=Li(t);if(A1(e))return t}function Dx(t,e){if(t==="change")return e}var uS=!1;if(Ln){var qf;if(Ln){var Gf="oninput"in document;if(!Gf){var ey=document.createElement("div");ey.setAttribute("oninput","return;"),Gf=typeof ey.oninput=="function"}qf=Gf}else qf=!1;uS=qf&&(!document.documentMode||9<document.documentMode)}function ty(){uo&&(uo.detachEvent("onpropertychange",cS),Po=uo=null)}function cS(t){if(t.propertyName==="value"&&Oc(Po)){var e=[];lS(e,Po,t,fm(t)),B1(Nx,e)}}function Lx(t,e,n){t==="focusin"?(ty(),uo=e,Po=n,uo.attachEvent("onpropertychange",cS)):t==="focusout"&&ty()}function Mx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Oc(Po)}function $x(t,e){if(t==="click")return Oc(e)}function jx(t,e){if(t==="input"||t==="change")return Oc(e)}function Fx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var rn=typeof Object.is=="function"?Object.is:Fx;function Ao(t,e){if(rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jd.call(e,i)||!rn(t[i],e[i]))return!1}return!0}function ny(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ry(t,e){var n=ny(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ny(n)}}function fS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dS(){for(var t=window,e=lu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=lu(t.document)}return e}function Sm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ux(t){var e=dS(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&fS(n.ownerDocument.documentElement,n)){if(r!==null&&Sm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ry(n,s);var o=ry(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zx=Ln&&"documentMode"in document&&11>=document.documentMode,Ni=null,vh=null,co=null,yh=!1;function iy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yh||Ni==null||Ni!==lu(r)||(r=Ni,"selectionStart"in r&&Sm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),co&&Ao(co,r)||(co=r,r=mu(vh,"onSelect"),0<r.length&&(e=new vm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ni)))}function il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Di={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},Kf={},hS={};Ln&&(hS=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function Rc(t){if(Kf[t])return Kf[t];if(!Di[t])return t;var e=Di[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hS)return Kf[t]=e[n];return t}var pS=Rc("animationend"),mS=Rc("animationiteration"),gS=Rc("animationstart"),vS=Rc("transitionend"),yS=new Map,sy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(t,e){yS.set(t,e),vi(e,[t])}for(var Yf=0;Yf<sy.length;Yf++){var Qf=sy[Yf],Vx=Qf.toLowerCase(),Bx=Qf[0].toUpperCase()+Qf.slice(1);Nr(Vx,"on"+Bx)}Nr(pS,"onAnimationEnd");Nr(mS,"onAnimationIteration");Nr(gS,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(vS,"onTransitionEnd");ss("onMouseEnter",["mouseout","mouseover"]);ss("onMouseLeave",["mouseout","mouseover"]);ss("onPointerEnter",["pointerout","pointerover"]);ss("onPointerLeave",["pointerout","pointerover"]);vi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vi("onBeforeInput",["compositionend","keypress","textInput","paste"]);vi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Js));function oy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,VI(r,e,void 0,t),t.currentTarget=null}function wS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;oy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;oy(i,a,u),s=l}}}if(cu)throw t=hh,cu=!1,hh=null,t}function ce(t,e){var n=e[kh];n===void 0&&(n=e[kh]=new Set);var r=t+"__bubble";n.has(r)||(SS(e,t,2,!1),n.add(r))}function Xf(t,e,n){var r=0;e&&(r|=4),SS(n,t,r,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function No(t){if(!t[sl]){t[sl]=!0,x1.forEach(function(n){n!=="selectionchange"&&(Hx.has(n)||Xf(n,!1,t),Xf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,Xf("selectionchange",!1,e))}}function SS(t,e,n,r){switch(rS(e)){case 1:var i=ix;break;case 4:i=sx;break;default:i=mm}n=i.bind(null,e,n,t),i=void 0,!dh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Jf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Br(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}B1(function(){var u=s,c=fm(n),f=[];e:{var d=yS.get(t);if(d!==void 0){var g=vm,w=t;switch(t){case"keypress":if(Vl(n)===0)break e;case"keydown":case"keyup":g=Sx;break;case"focusin":w="focus",g=Wf;break;case"focusout":w="blur",g=Wf;break;case"beforeblur":case"afterblur":g=Wf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Kv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=kx;break;case pS:case mS:case gS:g=fx;break;case vS:g=Tx;break;case"scroll":g=ox;break;case"wheel":g=xx;break;case"copy":case"cut":case"paste":g=hx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Qv}var y=(e&4)!==0,S=!y&&t==="scroll",m=y?d!==null?d+"Capture":null:d;y=[];for(var p=u,v;p!==null;){v=p;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,m!==null&&(E=xo(p,m),E!=null&&y.push(Do(p,E,v)))),S)break;p=p.return}0<y.length&&(d=new g(d,w,null,n,c),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==ch&&(w=n.relatedTarget||n.fromElement)&&(Br(w)||w[Mn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?Br(w):null,w!==null&&(S=yi(w),w!==S||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(y=Kv,E="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=Qv,E="onPointerLeave",m="onPointerEnter",p="pointer"),S=g==null?d:Li(g),v=w==null?d:Li(w),d=new y(E,p+"leave",g,n,c),d.target=S,d.relatedTarget=v,E=null,Br(c)===u&&(y=new y(m,p+"enter",w,n,c),y.target=v,y.relatedTarget=S,E=y),S=E,g&&w)t:{for(y=g,m=w,p=0,v=y;v;v=xi(v))p++;for(v=0,E=m;E;E=xi(E))v++;for(;0<p-v;)y=xi(y),p--;for(;0<v-p;)m=xi(m),v--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=xi(y),m=xi(m)}y=null}else y=null;g!==null&&ay(f,d,g,y,!1),w!==null&&S!==null&&ay(f,S,w,y,!0)}}e:{if(d=u?Li(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var k=Dx;else if(Zv(d))if(uS)k=jx;else{k=Mx;var T=Lx}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=$x);if(k&&(k=k(t,u))){lS(f,k,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&sh(d,"number",d.value)}switch(T=u?Li(u):window,t){case"focusin":(Zv(T)||T.contentEditable==="true")&&(Ni=T,vh=u,co=null);break;case"focusout":co=vh=Ni=null;break;case"mousedown":yh=!0;break;case"contextmenu":case"mouseup":case"dragend":yh=!1,iy(f,n,c);break;case"selectionchange":if(zx)break;case"keydown":case"keyup":iy(f,n,c)}var x;if(wm)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ai?oS(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(sS&&n.locale!=="ko"&&(Ai||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ai&&(x=iS()):(ar=c,gm="value"in ar?ar.value:ar.textContent,Ai=!0)),T=mu(u,b),0<T.length&&(b=new Yv(b,t,null,n,c),f.push({event:b,listeners:T}),x?b.data=x:(x=aS(n),x!==null&&(b.data=x)))),(x=Ox?Rx(t,n):Px(t,n))&&(u=mu(u,"onBeforeInput"),0<u.length&&(c=new Yv("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=x))}wS(f,e)})}function Do(t,e,n){return{instance:t,listener:e,currentTarget:n}}function mu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=xo(t,n),s!=null&&r.unshift(Do(t,s,i)),s=xo(t,e),s!=null&&r.push(Do(t,s,i))),t=t.return}return r}function xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ay(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=xo(n,s),l!=null&&o.unshift(Do(n,l,a))):i||(l=xo(n,s),l!=null&&o.push(Do(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Wx=/\r\n?/g,qx=/\u0000|\uFFFD/g;function ly(t){return(typeof t=="string"?t:""+t).replace(Wx,`
`).replace(qx,"")}function ol(t,e,n){if(e=ly(e),ly(t)!==e&&n)throw Error(O(425))}function gu(){}var wh=null,Sh=null;function Eh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _h=typeof setTimeout=="function"?setTimeout:void 0,Gx=typeof clearTimeout=="function"?clearTimeout:void 0,uy=typeof Promise=="function"?Promise:void 0,Kx=typeof queueMicrotask=="function"?queueMicrotask:typeof uy<"u"?function(t){return uy.resolve(null).then(t).catch(Yx)}:_h;function Yx(t){setTimeout(function(){throw t})}function Zf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ro(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ro(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xs=Math.random().toString(36).slice(2),fn="__reactFiber$"+xs,Lo="__reactProps$"+xs,Mn="__reactContainer$"+xs,kh="__reactEvents$"+xs,Qx="__reactListeners$"+xs,Xx="__reactHandles$"+xs;function Br(t){var e=t[fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mn]||n[fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cy(t);t!==null;){if(n=t[fn])return n;t=cy(t)}return e}t=n,n=t.parentNode}return null}function ha(t){return t=t[fn]||t[Mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Li(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function Pc(t){return t[Lo]||null}var bh=[],Mi=-1;function Dr(t){return{current:t}}function he(t){0>Mi||(t.current=bh[Mi],bh[Mi]=null,Mi--)}function ue(t,e){Mi++,bh[Mi]=t.current,t.current=e}var br={},lt=Dr(br),_t=Dr(!1),ri=br;function os(t,e){var n=t.type.contextTypes;if(!n)return br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function vu(){he(_t),he(lt)}function fy(t,e,n){if(lt.current!==br)throw Error(O(168));ue(lt,e),ue(_t,n)}function ES(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(O(108,LI(t)||"Unknown",i));return ke({},n,r)}function yu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,ri=lt.current,ue(lt,t),ue(_t,_t.current),!0}function dy(t,e,n){var r=t.stateNode;if(!r)throw Error(O(169));n?(t=ES(t,e,ri),r.__reactInternalMemoizedMergedChildContext=t,he(_t),he(lt),ue(lt,t)):he(_t),ue(_t,n)}var In=null,Ac=!1,ed=!1;function _S(t){In===null?In=[t]:In.push(t)}function Jx(t){Ac=!0,_S(t)}function Lr(){if(!ed&&In!==null){ed=!0;var t=0,e=ae;try{var n=In;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}In=null,Ac=!1}catch(i){throw In!==null&&(In=In.slice(t+1)),G1(dm,Lr),i}finally{ae=e,ed=!1}}return null}var $i=[],ji=0,wu=null,Su=0,Ut=[],zt=0,ii=null,xn=1,Cn="";function Ur(t,e){$i[ji++]=Su,$i[ji++]=wu,wu=t,Su=e}function kS(t,e,n){Ut[zt++]=xn,Ut[zt++]=Cn,Ut[zt++]=ii,ii=t;var r=xn;t=Cn;var i=32-en(r)-1;r&=~(1<<i),n+=1;var s=32-en(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xn=1<<32-en(e)+i|n<<i|r,Cn=s+t}else xn=1<<s|n<<i|r,Cn=t}function Em(t){t.return!==null&&(Ur(t,1),kS(t,1,0))}function _m(t){for(;t===wu;)wu=$i[--ji],$i[ji]=null,Su=$i[--ji],$i[ji]=null;for(;t===ii;)ii=Ut[--zt],Ut[zt]=null,Cn=Ut[--zt],Ut[zt]=null,xn=Ut[--zt],Ut[zt]=null}var Pt=null,Ot=null,ye=!1,Xt=null;function bS(t,e){var n=Vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,Ot=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,Ot=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ii!==null?{id:xn,overflow:Cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,Ot=null,!0):!1;default:return!1}}function Th(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ih(t){if(ye){var e=Ot;if(e){var n=e;if(!hy(t,e)){if(Th(t))throw Error(O(418));e=pr(n.nextSibling);var r=Pt;e&&hy(t,e)?bS(r,n):(t.flags=t.flags&-4097|2,ye=!1,Pt=t)}}else{if(Th(t))throw Error(O(418));t.flags=t.flags&-4097|2,ye=!1,Pt=t}}}function py(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function al(t){if(t!==Pt)return!1;if(!ye)return py(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Eh(t.type,t.memoizedProps)),e&&(e=Ot)){if(Th(t))throw TS(),Error(O(418));for(;e;)bS(t,e),e=pr(e.nextSibling)}if(py(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ot=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ot=null}}else Ot=Pt?pr(t.stateNode.nextSibling):null;return!0}function TS(){for(var t=Ot;t;)t=pr(t.nextSibling)}function as(){Ot=Pt=null,ye=!1}function km(t){Xt===null?Xt=[t]:Xt.push(t)}var Zx=Gn.ReactCurrentBatchConfig;function Yt(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Eu=Dr(null),_u=null,Fi=null,bm=null;function Tm(){bm=Fi=_u=null}function Im(t){var e=Eu.current;he(Eu),t._currentValue=e}function xh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Xi(t,e){_u=t,bm=Fi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Et=!0),t.firstContext=null)}function Ht(t){var e=t._currentValue;if(bm!==t)if(t={context:t,memoizedValue:e,next:null},Fi===null){if(_u===null)throw Error(O(308));Fi=t,_u.dependencies={lanes:0,firstContext:t}}else Fi=Fi.next=t;return e}var Hr=null;function xm(t){Hr===null?Hr=[t]:Hr.push(t)}function IS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,xm(e)):(n.next=i.next,i.next=n),e.interleaved=n,$n(t,r)}function $n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zn=!1;function Cm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function An(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$n(t,n)}return i=r.interleaved,i===null?(e.next=e,xm(r)):(e.next=i.next,i.next=e),r.interleaved=e,$n(t,n)}function Bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hm(t,n)}}function my(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ku(t,e,n,r){var i=t.updateQueue;Zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,y=a;switch(d=e,g=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){f=w.call(g,f,d);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,d=typeof w=="function"?w.call(g,f,d):w,d==null)break e;f=ke({},f,d);break e;case 2:Zn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);oi|=o,t.lanes=o,t.memoizedState=f}}function gy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var CS=new I1.Component().refs;function Ch(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nc={isMounted:function(t){return(t=t._reactInternals)?yi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=pt(),i=vr(t),s=An(r,i);s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,i),e!==null&&(tn(e,t,i,r),Bl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=pt(),i=vr(t),s=An(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,i),e!==null&&(tn(e,t,i,r),Bl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pt(),r=vr(t),i=An(n,r);i.tag=2,e!=null&&(i.callback=e),e=mr(t,i,r),e!==null&&(tn(e,t,r,n),Bl(e,t,r))}};function vy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ao(n,r)||!Ao(i,s):!0}function OS(t,e,n){var r=!1,i=br,s=e.contextType;return typeof s=="object"&&s!==null?s=Ht(s):(i=kt(e)?ri:lt.current,r=e.contextTypes,s=(r=r!=null)?os(t,i):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function yy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Nc.enqueueReplaceState(e,e.state,null)}function Oh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=CS,Cm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ht(s):(s=kt(e)?ri:lt.current,i.context=os(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ch(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Nc.enqueueReplaceState(i,i.state,null),ku(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===CS&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,t))}return t}function ll(t,e){throw t=Object.prototype.toString.call(e),Error(O(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wy(t){var e=t._init;return e(t._payload)}function RS(t){function e(m,p){if(t){var v=m.deletions;v===null?(m.deletions=[p],m.flags|=16):v.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=yr(m,p),m.index=0,m.sibling=null,m}function s(m,p,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<p?(m.flags|=2,p):v):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,v,E){return p===null||p.tag!==6?(p=ad(v,m.mode,E),p.return=m,p):(p=i(p,v),p.return=m,p)}function l(m,p,v,E){var k=v.type;return k===Pi?c(m,p,v.props.children,E,v.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Jn&&wy(k)===p.type)?(E=i(p,v.props),E.ref=Hs(m,p,v),E.return=m,E):(E=Yl(v.type,v.key,v.props,null,m.mode,E),E.ref=Hs(m,p,v),E.return=m,E)}function u(m,p,v,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=ld(v,m.mode,E),p.return=m,p):(p=i(p,v.children||[]),p.return=m,p)}function c(m,p,v,E,k){return p===null||p.tag!==7?(p=Jr(v,m.mode,E,k),p.return=m,p):(p=i(p,v),p.return=m,p)}function f(m,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ad(""+p,m.mode,v),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Xa:return v=Yl(p.type,p.key,p.props,null,m.mode,v),v.ref=Hs(m,null,p),v.return=m,v;case Ri:return p=ld(p,m.mode,v),p.return=m,p;case Jn:var E=p._init;return f(m,E(p._payload),v)}if(Qs(p)||Fs(p))return p=Jr(p,m.mode,v,null),p.return=m,p;ll(m,p)}return null}function d(m,p,v,E){var k=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:a(m,p,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Xa:return v.key===k?l(m,p,v,E):null;case Ri:return v.key===k?u(m,p,v,E):null;case Jn:return k=v._init,d(m,p,k(v._payload),E)}if(Qs(v)||Fs(v))return k!==null?null:c(m,p,v,E,null);ll(m,v)}return null}function g(m,p,v,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(v)||null,a(p,m,""+E,k);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Xa:return m=m.get(E.key===null?v:E.key)||null,l(p,m,E,k);case Ri:return m=m.get(E.key===null?v:E.key)||null,u(p,m,E,k);case Jn:var T=E._init;return g(m,p,v,T(E._payload),k)}if(Qs(E)||Fs(E))return m=m.get(v)||null,c(p,m,E,k,null);ll(p,E)}return null}function w(m,p,v,E){for(var k=null,T=null,x=p,b=p=0,C=null;x!==null&&b<v.length;b++){x.index>b?(C=x,x=null):C=x.sibling;var P=d(m,x,v[b],E);if(P===null){x===null&&(x=C);break}t&&x&&P.alternate===null&&e(m,x),p=s(P,p,b),T===null?k=P:T.sibling=P,T=P,x=C}if(b===v.length)return n(m,x),ye&&Ur(m,b),k;if(x===null){for(;b<v.length;b++)x=f(m,v[b],E),x!==null&&(p=s(x,p,b),T===null?k=x:T.sibling=x,T=x);return ye&&Ur(m,b),k}for(x=r(m,x);b<v.length;b++)C=g(x,m,b,v[b],E),C!==null&&(t&&C.alternate!==null&&x.delete(C.key===null?b:C.key),p=s(C,p,b),T===null?k=C:T.sibling=C,T=C);return t&&x.forEach(function(B){return e(m,B)}),ye&&Ur(m,b),k}function y(m,p,v,E){var k=Fs(v);if(typeof k!="function")throw Error(O(150));if(v=k.call(v),v==null)throw Error(O(151));for(var T=k=null,x=p,b=p=0,C=null,P=v.next();x!==null&&!P.done;b++,P=v.next()){x.index>b?(C=x,x=null):C=x.sibling;var B=d(m,x,P.value,E);if(B===null){x===null&&(x=C);break}t&&x&&B.alternate===null&&e(m,x),p=s(B,p,b),T===null?k=B:T.sibling=B,T=B,x=C}if(P.done)return n(m,x),ye&&Ur(m,b),k;if(x===null){for(;!P.done;b++,P=v.next())P=f(m,P.value,E),P!==null&&(p=s(P,p,b),T===null?k=P:T.sibling=P,T=P);return ye&&Ur(m,b),k}for(x=r(m,x);!P.done;b++,P=v.next())P=g(x,m,b,P.value,E),P!==null&&(t&&P.alternate!==null&&x.delete(P.key===null?b:P.key),p=s(P,p,b),T===null?k=P:T.sibling=P,T=P);return t&&x.forEach(function(U){return e(m,U)}),ye&&Ur(m,b),k}function S(m,p,v,E){if(typeof v=="object"&&v!==null&&v.type===Pi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Xa:e:{for(var k=v.key,T=p;T!==null;){if(T.key===k){if(k=v.type,k===Pi){if(T.tag===7){n(m,T.sibling),p=i(T,v.props.children),p.return=m,m=p;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Jn&&wy(k)===T.type){n(m,T.sibling),p=i(T,v.props),p.ref=Hs(m,T,v),p.return=m,m=p;break e}n(m,T);break}else e(m,T);T=T.sibling}v.type===Pi?(p=Jr(v.props.children,m.mode,E,v.key),p.return=m,m=p):(E=Yl(v.type,v.key,v.props,null,m.mode,E),E.ref=Hs(m,p,v),E.return=m,m=E)}return o(m);case Ri:e:{for(T=v.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(m,p.sibling),p=i(p,v.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=ld(v,m.mode,E),p.return=m,m=p}return o(m);case Jn:return T=v._init,S(m,p,T(v._payload),E)}if(Qs(v))return w(m,p,v,E);if(Fs(v))return y(m,p,v,E);ll(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,v),p.return=m,m=p):(n(m,p),p=ad(v,m.mode,E),p.return=m,m=p),o(m)):n(m,p)}return S}var ls=RS(!0),PS=RS(!1),pa={},mn=Dr(pa),Mo=Dr(pa),$o=Dr(pa);function Wr(t){if(t===pa)throw Error(O(174));return t}function Om(t,e){switch(ue($o,e),ue(Mo,t),ue(mn,pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ah(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ah(e,t)}he(mn),ue(mn,e)}function us(){he(mn),he(Mo),he($o)}function AS(t){Wr($o.current);var e=Wr(mn.current),n=ah(e,t.type);e!==n&&(ue(Mo,t),ue(mn,n))}function Rm(t){Mo.current===t&&(he(mn),he(Mo))}var Ee=Dr(0);function bu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var td=[];function Pm(){for(var t=0;t<td.length;t++)td[t]._workInProgressVersionPrimary=null;td.length=0}var Hl=Gn.ReactCurrentDispatcher,nd=Gn.ReactCurrentBatchConfig,si=0,_e=null,Le=null,Ve=null,Tu=!1,fo=!1,jo=0,eC=0;function Xe(){throw Error(O(321))}function Am(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!rn(t[n],e[n]))return!1;return!0}function Nm(t,e,n,r,i,s){if(si=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hl.current=t===null||t.memoizedState===null?iC:sC,t=n(r,i),fo){s=0;do{if(fo=!1,jo=0,25<=s)throw Error(O(301));s+=1,Ve=Le=null,e.updateQueue=null,Hl.current=oC,t=n(r,i)}while(fo)}if(Hl.current=Iu,e=Le!==null&&Le.next!==null,si=0,Ve=Le=_e=null,Tu=!1,e)throw Error(O(300));return t}function Dm(){var t=jo!==0;return jo=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?_e.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function Wt(){if(Le===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=Ve===null?_e.memoizedState:Ve.next;if(e!==null)Ve=e,Le=t;else{if(t===null)throw Error(O(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ve===null?_e.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function Fo(t,e){return typeof e=="function"?e(t):e}function rd(t){var e=Wt(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=Le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((si&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,_e.lanes|=c,oi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,rn(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,oi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function id(t){var e=Wt(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);rn(s,e.memoizedState)||(Et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function NS(){}function DS(t,e){var n=_e,r=Wt(),i=e(),s=!rn(r.memoizedState,i);if(s&&(r.memoizedState=i,Et=!0),r=r.queue,Lm($S.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,Uo(9,MS.bind(null,n,r,i,e),void 0,null),Be===null)throw Error(O(349));si&30||LS(n,e,i)}return i}function LS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function MS(t,e,n,r){e.value=n,e.getSnapshot=r,jS(e)&&FS(t)}function $S(t,e,n){return n(function(){jS(e)&&FS(t)})}function jS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!rn(t,n)}catch{return!0}}function FS(t){var e=$n(t,1);e!==null&&tn(e,t,1,-1)}function Sy(t){var e=cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:t},e.queue=t,t=t.dispatch=rC.bind(null,_e,t),[e.memoizedState,t]}function Uo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function US(){return Wt().memoizedState}function Wl(t,e,n,r){var i=cn();_e.flags|=t,i.memoizedState=Uo(1|e,n,void 0,r===void 0?null:r)}function Dc(t,e,n,r){var i=Wt();r=r===void 0?null:r;var s=void 0;if(Le!==null){var o=Le.memoizedState;if(s=o.destroy,r!==null&&Am(r,o.deps)){i.memoizedState=Uo(e,n,s,r);return}}_e.flags|=t,i.memoizedState=Uo(1|e,n,s,r)}function Ey(t,e){return Wl(8390656,8,t,e)}function Lm(t,e){return Dc(2048,8,t,e)}function zS(t,e){return Dc(4,2,t,e)}function VS(t,e){return Dc(4,4,t,e)}function BS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function HS(t,e,n){return n=n!=null?n.concat([t]):null,Dc(4,4,BS.bind(null,e,t),n)}function Mm(){}function WS(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Am(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function qS(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Am(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function GS(t,e,n){return si&21?(rn(n,e)||(n=Q1(),_e.lanes|=n,oi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n)}function tC(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=nd.transition;nd.transition={};try{t(!1),e()}finally{ae=n,nd.transition=r}}function KS(){return Wt().memoizedState}function nC(t,e,n){var r=vr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},YS(t))QS(e,n);else if(n=IS(t,e,n,r),n!==null){var i=pt();tn(n,t,r,i),XS(n,e,r)}}function rC(t,e,n){var r=vr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(YS(t))QS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,rn(a,o)){var l=e.interleaved;l===null?(i.next=i,xm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=IS(t,e,i,r),n!==null&&(i=pt(),tn(n,t,r,i),XS(n,e,r))}}function YS(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function QS(t,e){fo=Tu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function XS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hm(t,n)}}var Iu={readContext:Ht,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},iC={readContext:Ht,useCallback:function(t,e){return cn().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:Ey,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4194308,4,BS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wl(4,2,t,e)},useMemo:function(t,e){var n=cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nC.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=cn();return t={current:t},e.memoizedState=t},useState:Sy,useDebugValue:Mm,useDeferredValue:function(t){return cn().memoizedState=t},useTransition:function(){var t=Sy(!1),e=t[0];return t=tC.bind(null,t[1]),cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=cn();if(ye){if(n===void 0)throw Error(O(407));n=n()}else{if(n=e(),Be===null)throw Error(O(349));si&30||LS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ey($S.bind(null,r,s,t),[t]),r.flags|=2048,Uo(9,MS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=cn(),e=Be.identifierPrefix;if(ye){var n=Cn,r=xn;n=(r&~(1<<32-en(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sC={readContext:Ht,useCallback:WS,useContext:Ht,useEffect:Lm,useImperativeHandle:HS,useInsertionEffect:zS,useLayoutEffect:VS,useMemo:qS,useReducer:rd,useRef:US,useState:function(){return rd(Fo)},useDebugValue:Mm,useDeferredValue:function(t){var e=Wt();return GS(e,Le.memoizedState,t)},useTransition:function(){var t=rd(Fo)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:NS,useSyncExternalStore:DS,useId:KS,unstable_isNewReconciler:!1},oC={readContext:Ht,useCallback:WS,useContext:Ht,useEffect:Lm,useImperativeHandle:HS,useInsertionEffect:zS,useLayoutEffect:VS,useMemo:qS,useReducer:id,useRef:US,useState:function(){return id(Fo)},useDebugValue:Mm,useDeferredValue:function(t){var e=Wt();return Le===null?e.memoizedState=t:GS(e,Le.memoizedState,t)},useTransition:function(){var t=id(Fo)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:NS,useSyncExternalStore:DS,useId:KS,unstable_isNewReconciler:!1};function cs(t,e){try{var n="",r=e;do n+=DI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function sd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aC=typeof WeakMap=="function"?WeakMap:Map;function JS(t,e,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Cu||(Cu=!0,Uh=r),Rh(t,e)},n}function ZS(t,e,n){n=An(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Rh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rh(t,e),typeof r!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _y(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=EC.bind(null,t,e,n),e.then(t,t))}function ky(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function by(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=An(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var lC=Gn.ReactCurrentOwner,Et=!1;function dt(t,e,n,r){e.child=t===null?PS(e,null,n,r):ls(e,t.child,n,r)}function Ty(t,e,n,r,i){n=n.render;var s=e.ref;return Xi(e,i),r=Nm(t,e,n,r,s,i),n=Dm(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(ye&&n&&Em(e),e.flags|=1,dt(t,e,r,i),e.child)}function Iy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Hm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,eE(t,e,s,r,i)):(t=Yl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ao,n(o,r)&&t.ref===e.ref)return jn(t,e,i)}return e.flags|=1,t=yr(s,r),t.ref=e.ref,t.return=e,e.child=t}function eE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ao(s,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,jn(t,e,i)}return Ph(t,e,n,r,i)}function tE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(zi,Ct),Ct|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ue(zi,Ct),Ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ue(zi,Ct),Ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ue(zi,Ct),Ct|=r;return dt(t,e,i,n),e.child}function nE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ph(t,e,n,r,i){var s=kt(n)?ri:lt.current;return s=os(e,s),Xi(e,i),n=Nm(t,e,n,r,s,i),r=Dm(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(ye&&r&&Em(e),e.flags|=1,dt(t,e,n,i),e.child)}function xy(t,e,n,r,i){if(kt(n)){var s=!0;yu(e)}else s=!1;if(Xi(e,i),e.stateNode===null)ql(t,e),OS(e,n,r),Oh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ht(u):(u=kt(n)?ri:lt.current,u=os(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&yy(e,o,r,u),Zn=!1;var d=e.memoizedState;o.state=d,ku(e,r,o,i),l=e.memoizedState,a!==r||d!==l||_t.current||Zn?(typeof c=="function"&&(Ch(e,n,c,r),l=e.memoizedState),(a=Zn||vy(e,n,a,r,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,xS(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Yt(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ht(l):(l=kt(n)?ri:lt.current,l=os(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&yy(e,o,r,l),Zn=!1,d=e.memoizedState,o.state=d,ku(e,r,o,i);var w=e.memoizedState;a!==f||d!==w||_t.current||Zn?(typeof g=="function"&&(Ch(e,n,g,r),w=e.memoizedState),(u=Zn||vy(e,n,u,r,d,w,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Ah(t,e,n,r,s,i)}function Ah(t,e,n,r,i,s){nE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&dy(e,n,!1),jn(t,e,s);r=e.stateNode,lC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ls(e,t.child,null,s),e.child=ls(e,null,a,s)):dt(t,e,a,s),e.memoizedState=r.state,i&&dy(e,n,!0),e.child}function rE(t){var e=t.stateNode;e.pendingContext?fy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fy(t,e.context,!1),Om(t,e.containerInfo)}function Cy(t,e,n,r,i){return as(),km(i),e.flags|=256,dt(t,e,n,r),e.child}var Nh={dehydrated:null,treeContext:null,retryLane:0};function Dh(t){return{baseLanes:t,cachePool:null,transitions:null}}function iE(t,e,n){var r=e.pendingProps,i=Ee.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ue(Ee,i&1),t===null)return Ih(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$c(o,r,0,null),t=Jr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Dh(n),e.memoizedState=Nh,t):$m(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return uC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=yr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=yr(a,s):(s=Jr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Dh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nh,r}return s=t.child,t=s.sibling,r=yr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function $m(t,e){return e=$c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ul(t,e,n,r){return r!==null&&km(r),ls(e,t.child,null,n),t=$m(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=sd(Error(O(422))),ul(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=$c({mode:"visible",children:r.children},i,0,null),s=Jr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ls(e,t.child,null,o),e.child.memoizedState=Dh(o),e.memoizedState=Nh,s);if(!(e.mode&1))return ul(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(O(419)),r=sd(s,r,void 0),ul(t,e,o,r)}if(a=(o&t.childLanes)!==0,Et||a){if(r=Be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$n(t,i),tn(r,t,i,-1))}return Bm(),r=sd(Error(O(421))),ul(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=_C.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ot=pr(i.nextSibling),Pt=e,ye=!0,Xt=null,t!==null&&(Ut[zt++]=xn,Ut[zt++]=Cn,Ut[zt++]=ii,xn=t.id,Cn=t.overflow,ii=e),e=$m(e,r.children),e.flags|=4096,e)}function Oy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xh(t.return,e,n)}function od(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function sE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(dt(t,e,r.children,n),r=Ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Oy(t,n,e);else if(t.tag===19)Oy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(Ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&bu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),od(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&bu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}od(e,!0,n,null,s);break;case"together":od(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ql(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),oi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,n=yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cC(t,e,n){switch(e.tag){case 3:rE(e),as();break;case 5:AS(e);break;case 1:kt(e.type)&&yu(e);break;case 4:Om(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ue(Eu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ue(Ee,Ee.current&1),e.flags|=128,null):n&e.child.childLanes?iE(t,e,n):(ue(Ee,Ee.current&1),t=jn(t,e,n),t!==null?t.sibling:null);ue(Ee,Ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return sE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(Ee,Ee.current),r)break;return null;case 22:case 23:return e.lanes=0,tE(t,e,n)}return jn(t,e,n)}var oE,Lh,aE,lE;oE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lh=function(){};aE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Wr(mn.current);var s=null;switch(n){case"input":i=rh(t,i),r=rh(t,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=oh(t,i),r=oh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=gu)}lh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(To.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(To.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ce("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};lE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ws(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fC(t,e,n){var r=e.pendingProps;switch(_m(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return kt(e.type)&&vu(),Je(e),null;case 3:return r=e.stateNode,us(),he(_t),he(lt),Pm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xt!==null&&(Bh(Xt),Xt=null))),Lh(t,e),Je(e),null;case 5:Rm(e);var i=Wr($o.current);if(n=e.type,t!==null&&e.stateNode!=null)aE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(O(166));return Je(e),null}if(t=Wr(mn.current),al(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[fn]=e,r[Lo]=s,t=(e.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<Js.length;i++)ce(Js[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":jv(r,s),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ce("invalid",r);break;case"textarea":Uv(r,s),ce("invalid",r)}lh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,a,t),i=["children",""+a]):To.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":Ja(r),Fv(r,s,!0);break;case"textarea":Ja(r),zv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=gu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=L1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fn]=e,t[Lo]=r,oE(t,e,!1,!1),e.stateNode=t;e:{switch(o=uh(n,r),n){case"dialog":ce("cancel",t),ce("close",t),i=r;break;case"iframe":case"object":case"embed":ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<Js.length;i++)ce(Js[i],t);i=r;break;case"source":ce("error",t),i=r;break;case"img":case"image":case"link":ce("error",t),ce("load",t),i=r;break;case"details":ce("toggle",t),i=r;break;case"input":jv(t,r),i=rh(t,r),ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),ce("invalid",t);break;case"textarea":Uv(t,r),i=oh(t,r),ce("invalid",t);break;default:i=r}lh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?j1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&M1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Io(t,l):typeof l=="number"&&Io(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(To.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ce("scroll",t):l!=null&&am(t,s,l,o))}switch(n){case"input":Ja(t),Fv(t,r,!1);break;case"textarea":Ja(t),zv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Gi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Gi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=gu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)lE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(O(166));if(n=Wr($o.current),Wr(mn.current),al(e)){if(r=e.stateNode,n=e.memoizedProps,r[fn]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:ol(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ol(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=e,e.stateNode=r}return Je(e),null;case 13:if(he(Ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&Ot!==null&&e.mode&1&&!(e.flags&128))TS(),as(),e.flags|=98560,s=!1;else if(s=al(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(O(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(O(317));s[fn]=e}else as(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else Xt!==null&&(Bh(Xt),Xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ee.current&1?Me===0&&(Me=3):Bm())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return us(),Lh(t,e),t===null&&No(e.stateNode.containerInfo),Je(e),null;case 10:return Im(e.type._context),Je(e),null;case 17:return kt(e.type)&&vu(),Je(e),null;case 19:if(he(Ee),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ws(s,!1);else{if(Me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bu(t),o!==null){for(e.flags|=128,Ws(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ue(Ee,Ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&xe()>fs&&(e.flags|=128,r=!0,Ws(s,!1),e.lanes=4194304)}else{if(!r)if(t=bu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return Je(e),null}else 2*xe()-s.renderingStartTime>fs&&n!==1073741824&&(e.flags|=128,r=!0,Ws(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xe(),e.sibling=null,n=Ee.current,ue(Ee,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return Vm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ct&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(O(156,e.tag))}function dC(t,e){switch(_m(e),e.tag){case 1:return kt(e.type)&&vu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return us(),he(_t),he(lt),Pm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rm(e),null;case 13:if(he(Ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(O(340));as()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return he(Ee),null;case 4:return us(),null;case 10:return Im(e.type._context),null;case 22:case 23:return Vm(),null;case 24:return null;default:return null}}var cl=!1,nt=!1,hC=typeof WeakSet=="function"?WeakSet:Set,L=null;function Ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function Mh(t,e,n){try{n()}catch(r){be(t,e,r)}}var Ry=!1;function pC(t,e){if(wh=hu,t=dS(),Sm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sh={focusedElem:t,selectionRange:n},hu=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,S=w.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:Yt(e.type,y),S);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(E){be(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return w=Ry,Ry=!1,w}function ho(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Mh(e,n,s)}i=i.next}while(i!==r)}}function Lc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $h(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function uE(t){var e=t.alternate;e!==null&&(t.alternate=null,uE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fn],delete e[Lo],delete e[kh],delete e[Qx],delete e[Xx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cE(t){return t.tag===5||t.tag===3||t.tag===4}function Py(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gu));else if(r!==4&&(t=t.child,t!==null))for(jh(t,e,n),t=t.sibling;t!==null;)jh(t,e,n),t=t.sibling}function Fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fh(t,e,n),t=t.sibling;t!==null;)Fh(t,e,n),t=t.sibling}var We=null,Qt=!1;function Yn(t,e,n){for(n=n.child;n!==null;)fE(t,e,n),n=n.sibling}function fE(t,e,n){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(xc,n)}catch{}switch(n.tag){case 5:nt||Ui(n,e);case 6:var r=We,i=Qt;We=null,Yn(t,e,n),We=r,Qt=i,We!==null&&(Qt?(t=We,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Qt?(t=We,n=n.stateNode,t.nodeType===8?Zf(t.parentNode,n):t.nodeType===1&&Zf(t,n),Ro(t)):Zf(We,n.stateNode));break;case 4:r=We,i=Qt,We=n.stateNode.containerInfo,Qt=!0,Yn(t,e,n),We=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Mh(n,e,o),i=i.next}while(i!==r)}Yn(t,e,n);break;case 1:if(!nt&&(Ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){be(n,e,a)}Yn(t,e,n);break;case 21:Yn(t,e,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,Yn(t,e,n),nt=r):Yn(t,e,n);break;default:Yn(t,e,n)}}function Ay(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hC),e.forEach(function(r){var i=kC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:We=a.stateNode,Qt=!1;break e;case 3:We=a.stateNode.containerInfo,Qt=!0;break e;case 4:We=a.stateNode.containerInfo,Qt=!0;break e}a=a.return}if(We===null)throw Error(O(160));fE(s,o,i),We=null,Qt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){be(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dE(e,t),e=e.sibling}function dE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gt(e,t),an(t),r&4){try{ho(3,t,t.return),Lc(3,t)}catch(y){be(t,t.return,y)}try{ho(5,t,t.return)}catch(y){be(t,t.return,y)}}break;case 1:Gt(e,t),an(t),r&512&&n!==null&&Ui(n,n.return);break;case 5:if(Gt(e,t),an(t),r&512&&n!==null&&Ui(n,n.return),t.flags&32){var i=t.stateNode;try{Io(i,"")}catch(y){be(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&N1(i,s),uh(a,o);var u=uh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?j1(i,f):c==="dangerouslySetInnerHTML"?M1(i,f):c==="children"?Io(i,f):am(i,c,f,u)}switch(a){case"input":ih(i,s);break;case"textarea":D1(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Gi(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Gi(i,!!s.multiple,s.defaultValue,!0):Gi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Lo]=s}catch(y){be(t,t.return,y)}}break;case 6:if(Gt(e,t),an(t),r&4){if(t.stateNode===null)throw Error(O(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){be(t,t.return,y)}}break;case 3:if(Gt(e,t),an(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ro(e.containerInfo)}catch(y){be(t,t.return,y)}break;case 4:Gt(e,t),an(t);break;case 13:Gt(e,t),an(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Um=xe())),r&4&&Ay(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(nt=(u=nt)||c,Gt(e,t),nt=u):Gt(e,t),an(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(L=t,c=t.child;c!==null;){for(f=L=c;L!==null;){switch(d=L,g=d.child,d.tag){case 0:case 11:case 14:case 15:ho(4,d,d.return);break;case 1:Ui(d,d.return);var w=d.stateNode;if(typeof w.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(y){be(r,n,y)}}break;case 5:Ui(d,d.return);break;case 22:if(d.memoizedState!==null){Dy(f);continue}}g!==null?(g.return=d,L=g):Dy(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$1("display",o))}catch(y){be(t,t.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){be(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Gt(e,t),an(t),r&4&&Ay(t);break;case 21:break;default:Gt(e,t),an(t)}}function an(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cE(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Io(i,""),r.flags&=-33);var s=Py(t);Fh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Py(t);jh(t,a,o);break;default:throw Error(O(161))}}catch(l){be(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mC(t,e,n){L=t,hE(t)}function hE(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||nt;a=cl;var u=nt;if(cl=o,(nt=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?Ly(i):l!==null?(l.return=o,L=l):Ly(i);for(;s!==null;)L=s,hE(s),s=s.sibling;L=i,cl=a,nt=u}Ny(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):Ny(t)}}function Ny(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nt||Lc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ro(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}nt||e.flags&512&&$h(e)}catch(d){be(e,e.return,d)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function Dy(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function Ly(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lc(4,e)}catch(l){be(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){be(e,i,l)}}var s=e.return;try{$h(e)}catch(l){be(e,s,l)}break;case 5:var o=e.return;try{$h(e)}catch(l){be(e,o,l)}}}catch(l){be(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var gC=Math.ceil,xu=Gn.ReactCurrentDispatcher,jm=Gn.ReactCurrentOwner,Bt=Gn.ReactCurrentBatchConfig,ie=0,Be=null,Ae=null,Ge=0,Ct=0,zi=Dr(0),Me=0,zo=null,oi=0,Mc=0,Fm=0,po=null,wt=null,Um=0,fs=1/0,Tn=null,Cu=!1,Uh=null,gr=null,fl=!1,lr=null,Ou=0,mo=0,zh=null,Gl=-1,Kl=0;function pt(){return ie&6?xe():Gl!==-1?Gl:Gl=xe()}function vr(t){return t.mode&1?ie&2&&Ge!==0?Ge&-Ge:Zx.transition!==null?(Kl===0&&(Kl=Q1()),Kl):(t=ae,t!==0||(t=window.event,t=t===void 0?16:rS(t.type)),t):1}function tn(t,e,n,r){if(50<mo)throw mo=0,zh=null,Error(O(185));fa(t,n,r),(!(ie&2)||t!==Be)&&(t===Be&&(!(ie&2)&&(Mc|=n),Me===4&&nr(t,Ge)),bt(t,r),n===1&&ie===0&&!(e.mode&1)&&(fs=xe()+500,Ac&&Lr()))}function bt(t,e){var n=t.callbackNode;ZI(t,e);var r=du(t,t===Be?Ge:0);if(r===0)n!==null&&Hv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hv(n),e===1)t.tag===0?Jx(My.bind(null,t)):_S(My.bind(null,t)),Kx(function(){!(ie&6)&&Lr()}),n=null;else{switch(X1(r)){case 1:n=dm;break;case 4:n=K1;break;case 16:n=fu;break;case 536870912:n=Y1;break;default:n=fu}n=EE(n,pE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function pE(t,e){if(Gl=-1,Kl=0,ie&6)throw Error(O(327));var n=t.callbackNode;if(Ji()&&t.callbackNode!==n)return null;var r=du(t,t===Be?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ru(t,r);else{e=r;var i=ie;ie|=2;var s=gE();(Be!==t||Ge!==e)&&(Tn=null,fs=xe()+500,Xr(t,e));do try{wC();break}catch(a){mE(t,a)}while(1);Tm(),xu.current=s,ie=i,Ae!==null?e=0:(Be=null,Ge=0,e=Me)}if(e!==0){if(e===2&&(i=ph(t),i!==0&&(r=i,e=Vh(t,i))),e===1)throw n=zo,Xr(t,0),nr(t,r),bt(t,xe()),n;if(e===6)nr(t,r);else{if(i=t.current.alternate,!(r&30)&&!vC(i)&&(e=Ru(t,r),e===2&&(s=ph(t),s!==0&&(r=s,e=Vh(t,s))),e===1))throw n=zo,Xr(t,0),nr(t,r),bt(t,xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(O(345));case 2:zr(t,wt,Tn);break;case 3:if(nr(t,r),(r&130023424)===r&&(e=Um+500-xe(),10<e)){if(du(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=_h(zr.bind(null,t,wt,Tn),e);break}zr(t,wt,Tn);break;case 4:if(nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-en(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gC(r/1960))-r,10<r){t.timeoutHandle=_h(zr.bind(null,t,wt,Tn),r);break}zr(t,wt,Tn);break;case 5:zr(t,wt,Tn);break;default:throw Error(O(329))}}}return bt(t,xe()),t.callbackNode===n?pE.bind(null,t):null}function Vh(t,e){var n=po;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=Ru(t,e),t!==2&&(e=wt,wt=n,e!==null&&Bh(e)),t}function Bh(t){wt===null?wt=t:wt.push.apply(wt,t)}function vC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!rn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~Fm,e&=~Mc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-en(e),r=1<<n;t[n]=-1,e&=~r}}function My(t){if(ie&6)throw Error(O(327));Ji();var e=du(t,0);if(!(e&1))return bt(t,xe()),null;var n=Ru(t,e);if(t.tag!==0&&n===2){var r=ph(t);r!==0&&(e=r,n=Vh(t,r))}if(n===1)throw n=zo,Xr(t,0),nr(t,e),bt(t,xe()),n;if(n===6)throw Error(O(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,wt,Tn),bt(t,xe()),null}function zm(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(fs=xe()+500,Ac&&Lr())}}function ai(t){lr!==null&&lr.tag===0&&!(ie&6)&&Ji();var e=ie;ie|=1;var n=Bt.transition,r=ae;try{if(Bt.transition=null,ae=1,t)return t()}finally{ae=r,Bt.transition=n,ie=e,!(ie&6)&&Lr()}}function Vm(){Ct=zi.current,he(zi)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Gx(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(_m(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vu();break;case 3:us(),he(_t),he(lt),Pm();break;case 5:Rm(r);break;case 4:us();break;case 13:he(Ee);break;case 19:he(Ee);break;case 10:Im(r.type._context);break;case 22:case 23:Vm()}n=n.return}if(Be=t,Ae=t=yr(t.current,null),Ge=Ct=e,Me=0,zo=null,Fm=Mc=oi=0,wt=po=null,Hr!==null){for(e=0;e<Hr.length;e++)if(n=Hr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Hr=null}return t}function mE(t,e){do{var n=Ae;try{if(Tm(),Hl.current=Iu,Tu){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Tu=!1}if(si=0,Ve=Le=_e=null,fo=!1,jo=0,jm.current=null,n===null||n.return===null){Me=1,zo=e,Ae=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ge,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=ky(o);if(g!==null){g.flags&=-257,by(g,o,a,s,e),g.mode&1&&_y(s,u,e),e=g,l=u;var w=e.updateQueue;if(w===null){var y=new Set;y.add(l),e.updateQueue=y}else w.add(l);break e}else{if(!(e&1)){_y(s,u,e),Bm();break e}l=Error(O(426))}}else if(ye&&a.mode&1){var S=ky(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),by(S,o,a,s,e),km(cs(l,a));break e}}s=l=cs(l,a),Me!==4&&(Me=2),po===null?po=[s]:po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=JS(s,l,e);my(s,m);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(gr===null||!gr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=ZS(s,a,e);my(s,E);break e}}s=s.return}while(s!==null)}yE(n)}catch(k){e=k,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function gE(){var t=xu.current;return xu.current=Iu,t===null?Iu:t}function Bm(){(Me===0||Me===3||Me===2)&&(Me=4),Be===null||!(oi&268435455)&&!(Mc&268435455)||nr(Be,Ge)}function Ru(t,e){var n=ie;ie|=2;var r=gE();(Be!==t||Ge!==e)&&(Tn=null,Xr(t,e));do try{yC();break}catch(i){mE(t,i)}while(1);if(Tm(),ie=n,xu.current=r,Ae!==null)throw Error(O(261));return Be=null,Ge=0,Me}function yC(){for(;Ae!==null;)vE(Ae)}function wC(){for(;Ae!==null&&!HI();)vE(Ae)}function vE(t){var e=SE(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,e===null?yE(t):Ae=e,jm.current=null}function yE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dC(n,e),n!==null){n.flags&=32767,Ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Me=6,Ae=null;return}}else if(n=fC(n,e,Ct),n!==null){Ae=n;return}if(e=e.sibling,e!==null){Ae=e;return}Ae=e=t}while(e!==null);Me===0&&(Me=5)}function zr(t,e,n){var r=ae,i=Bt.transition;try{Bt.transition=null,ae=1,SC(t,e,n,r)}finally{Bt.transition=i,ae=r}return null}function SC(t,e,n,r){do Ji();while(lr!==null);if(ie&6)throw Error(O(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(O(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ex(t,s),t===Be&&(Ae=Be=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fl||(fl=!0,EE(fu,function(){return Ji(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bt.transition,Bt.transition=null;var o=ae;ae=1;var a=ie;ie|=4,jm.current=null,pC(t,n),dE(n,t),Ux(Sh),hu=!!wh,Sh=wh=null,t.current=n,mC(n),WI(),ie=a,ae=o,Bt.transition=s}else t.current=n;if(fl&&(fl=!1,lr=t,Ou=i),s=t.pendingLanes,s===0&&(gr=null),KI(n.stateNode),bt(t,xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Cu)throw Cu=!1,t=Uh,Uh=null,t;return Ou&1&&t.tag!==0&&Ji(),s=t.pendingLanes,s&1?t===zh?mo++:(mo=0,zh=t):mo=0,Lr(),null}function Ji(){if(lr!==null){var t=X1(Ou),e=Bt.transition,n=ae;try{if(Bt.transition=null,ae=16>t?16:t,lr===null)var r=!1;else{if(t=lr,lr=null,Ou=0,ie&6)throw Error(O(331));var i=ie;for(ie|=4,L=t.current;L!==null;){var s=L,o=s.child;if(L.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:ho(8,c,s)}var f=c.child;if(f!==null)f.return=c,L=f;else for(;L!==null;){c=L;var d=c.sibling,g=c.return;if(uE(c),c===u){L=null;break}if(d!==null){d.return=g,L=d;break}L=g}}}var w=s.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}L=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ho(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,L=m;break e}L=s.return}}var p=t.current;for(L=p;L!==null;){o=L;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,L=v;else e:for(o=p;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Lc(9,a)}}catch(k){be(a,a.return,k)}if(a===o){L=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,L=E;break e}L=a.return}}if(ie=i,Lr(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(xc,t)}catch{}r=!0}return r}finally{ae=n,Bt.transition=e}}return!1}function $y(t,e,n){e=cs(n,e),e=JS(t,e,1),t=mr(t,e,1),e=pt(),t!==null&&(fa(t,1,e),bt(t,e))}function be(t,e,n){if(t.tag===3)$y(t,t,n);else for(;e!==null;){if(e.tag===3){$y(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gr===null||!gr.has(r))){t=cs(n,t),t=ZS(e,t,1),e=mr(e,t,1),t=pt(),e!==null&&(fa(e,1,t),bt(e,t));break}}e=e.return}}function EC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=pt(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(Ge&n)===n&&(Me===4||Me===3&&(Ge&130023424)===Ge&&500>xe()-Um?Xr(t,0):Fm|=n),bt(t,e)}function wE(t,e){e===0&&(t.mode&1?(e=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):e=1);var n=pt();t=$n(t,e),t!==null&&(fa(t,e,n),bt(t,n))}function _C(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),wE(t,n)}function kC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(e),wE(t,n)}var SE;SE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)Et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Et=!1,cC(t,e,n);Et=!!(t.flags&131072)}else Et=!1,ye&&e.flags&1048576&&kS(e,Su,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ql(t,e),t=e.pendingProps;var i=os(e,lt.current);Xi(e,n),i=Nm(null,e,r,t,i,n);var s=Dm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(s=!0,yu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cm(e),i.updater=Nc,e.stateNode=i,i._reactInternals=e,Oh(e,r,t,n),e=Ah(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&Em(e),dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ql(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=TC(r),t=Yt(r,t),i){case 0:e=Ph(null,e,r,t,n);break e;case 1:e=xy(null,e,r,t,n);break e;case 11:e=Ty(null,e,r,t,n);break e;case 14:e=Iy(null,e,r,Yt(r.type,t),n);break e}throw Error(O(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Ph(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),xy(t,e,r,i,n);case 3:e:{if(rE(e),t===null)throw Error(O(387));r=e.pendingProps,s=e.memoizedState,i=s.element,xS(t,e),ku(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=cs(Error(O(423)),e),e=Cy(t,e,r,n,i);break e}else if(r!==i){i=cs(Error(O(424)),e),e=Cy(t,e,r,n,i);break e}else for(Ot=pr(e.stateNode.containerInfo.firstChild),Pt=e,ye=!0,Xt=null,n=PS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(as(),r===i){e=jn(t,e,n);break e}dt(t,e,r,n)}e=e.child}return e;case 5:return AS(e),t===null&&Ih(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Eh(r,i)?o=null:s!==null&&Eh(r,s)&&(e.flags|=32),nE(t,e),dt(t,e,o,n),e.child;case 6:return t===null&&Ih(e),null;case 13:return iE(t,e,n);case 4:return Om(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ls(e,null,r,n):dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Ty(t,e,r,i,n);case 7:return dt(t,e,e.pendingProps,n),e.child;case 8:return dt(t,e,e.pendingProps.children,n),e.child;case 12:return dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ue(Eu,r._currentValue),r._currentValue=o,s!==null)if(rn(s.value,o)){if(s.children===i.children&&!_t.current){e=jn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=An(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(O(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Xi(e,n),i=Ht(i),r=r(i),e.flags|=1,dt(t,e,r,n),e.child;case 14:return r=e.type,i=Yt(r,e.pendingProps),i=Yt(r.type,i),Iy(t,e,r,i,n);case 15:return eE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),ql(t,e),e.tag=1,kt(r)?(t=!0,yu(e)):t=!1,Xi(e,n),OS(e,r,i),Oh(e,r,i,n),Ah(null,e,r,!0,t,n);case 19:return sE(t,e,n);case 22:return tE(t,e,n)}throw Error(O(156,e.tag))};function EE(t,e){return G1(t,e)}function bC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(t,e,n,r){return new bC(t,e,n,r)}function Hm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TC(t){if(typeof t=="function")return Hm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===um)return 11;if(t===cm)return 14}return 2}function yr(t,e){var n=t.alternate;return n===null?(n=Vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Hm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Pi:return Jr(n.children,i,s,e);case lm:o=8,i|=8;break;case Zd:return t=Vt(12,n,e,i|2),t.elementType=Zd,t.lanes=s,t;case eh:return t=Vt(13,n,e,i),t.elementType=eh,t.lanes=s,t;case th:return t=Vt(19,n,e,i),t.elementType=th,t.lanes=s,t;case R1:return $c(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C1:o=10;break e;case O1:o=9;break e;case um:o=11;break e;case cm:o=14;break e;case Jn:o=16,r=null;break e}throw Error(O(130,t==null?t:typeof t,""))}return e=Vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Jr(t,e,n,r){return t=Vt(7,t,r,e),t.lanes=n,t}function $c(t,e,n,r){return t=Vt(22,t,r,e),t.elementType=R1,t.lanes=n,t.stateNode={isHidden:!1},t}function ad(t,e,n){return t=Vt(6,t,null,e),t.lanes=n,t}function ld(t,e,n){return e=Vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function IC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vf(0),this.expirationTimes=Vf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wm(t,e,n,r,i,s,o,a,l){return t=new IC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cm(s),t}function xC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ri,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _E(t){if(!t)return br;t=t._reactInternals;e:{if(yi(t)!==t||t.tag!==1)throw Error(O(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(O(171))}if(t.tag===1){var n=t.type;if(kt(n))return ES(t,n,e)}return e}function kE(t,e,n,r,i,s,o,a,l){return t=Wm(n,r,!0,t,i,s,o,a,l),t.context=_E(null),n=t.current,r=pt(),i=vr(n),s=An(r,i),s.callback=e??null,mr(n,s,i),t.current.lanes=i,fa(t,i,r),bt(t,r),t}function jc(t,e,n,r){var i=e.current,s=pt(),o=vr(i);return n=_E(n),e.context===null?e.context=n:e.pendingContext=n,e=An(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mr(i,e,o),t!==null&&(tn(t,i,o,s),Bl(t,i,o)),o}function Pu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qm(t,e){jy(t,e),(t=t.alternate)&&jy(t,e)}function CC(){return null}var bE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gm(t){this._internalRoot=t}Fc.prototype.render=Gm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(O(409));jc(t,e,null,null)};Fc.prototype.unmount=Gm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ai(function(){jc(null,t,null,null)}),e[Mn]=null}};function Fc(t){this._internalRoot=t}Fc.prototype.unstable_scheduleHydration=function(t){if(t){var e=eS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&nS(t)}};function Km(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fy(){}function OC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Pu(o);s.call(u)}}var o=kE(e,r,t,0,null,!1,!1,"",Fy);return t._reactRootContainer=o,t[Mn]=o.current,No(t.nodeType===8?t.parentNode:t),ai(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Pu(l);a.call(u)}}var l=Wm(t,0,!1,null,null,!1,!1,"",Fy);return t._reactRootContainer=l,t[Mn]=l.current,No(t.nodeType===8?t.parentNode:t),ai(function(){jc(e,l,n,r)}),l}function zc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Pu(o);a.call(l)}}jc(e,o,t,i)}else o=OC(n,e,t,i,r);return Pu(o)}J1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xs(e.pendingLanes);n!==0&&(hm(e,n|1),bt(e,xe()),!(ie&6)&&(fs=xe()+500,Lr()))}break;case 13:ai(function(){var r=$n(t,1);if(r!==null){var i=pt();tn(r,t,1,i)}}),qm(t,1)}};pm=function(t){if(t.tag===13){var e=$n(t,134217728);if(e!==null){var n=pt();tn(e,t,134217728,n)}qm(t,134217728)}};Z1=function(t){if(t.tag===13){var e=vr(t),n=$n(t,e);if(n!==null){var r=pt();tn(n,t,e,r)}qm(t,e)}};eS=function(){return ae};tS=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};fh=function(t,e,n){switch(e){case"input":if(ih(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Pc(r);if(!i)throw Error(O(90));A1(r),ih(r,i)}}}break;case"textarea":D1(t,n);break;case"select":e=n.value,e!=null&&Gi(t,!!n.multiple,e,!1)}};z1=zm;V1=ai;var RC={usingClientEntryPoint:!1,Events:[ha,Li,Pc,F1,U1,zm]},qs={findFiberByHostInstance:Br,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},PC={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=W1(t),t===null?null:t.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||CC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{xc=dl.inject(PC),pn=dl}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RC;Lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Km(e))throw Error(O(200));return xC(t,e,null,n)};Lt.createRoot=function(t,e){if(!Km(t))throw Error(O(299));var n=!1,r="",i=bE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Wm(t,1,!1,null,null,n,!1,r,i),t[Mn]=e.current,No(t.nodeType===8?t.parentNode:t),new Gm(e)};Lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):(t=Object.keys(t).join(","),Error(O(268,t)));return t=W1(e),t=t===null?null:t.stateNode,t};Lt.flushSync=function(t){return ai(t)};Lt.hydrate=function(t,e,n){if(!Uc(e))throw Error(O(200));return zc(null,t,e,!0,n)};Lt.hydrateRoot=function(t,e,n){if(!Km(t))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=bE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=kE(e,null,t,1,n??null,i,!1,s,o),t[Mn]=e.current,No(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Fc(e)};Lt.render=function(t,e,n){if(!Uc(e))throw Error(O(200));return zc(null,t,e,!1,n)};Lt.unmountComponentAtNode=function(t){if(!Uc(t))throw Error(O(40));return t._reactRootContainer?(ai(function(){zc(null,null,t,!1,function(){t._reactRootContainer=null,t[Mn]=null})}),!0):!1};Lt.unstable_batchedUpdates=zm;Lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Uc(n))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return zc(t,e,n,!1,r)};Lt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Lt})(CI);var Uy=Qd;Yd.createRoot=Uy.createRoot,Yd.hydrateRoot=Uy.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vo(){return Vo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vo.apply(this,arguments)}var ur;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ur||(ur={}));const zy="popstate";function AC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Hh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Au(i)}return DC(e,n,null,t)}function De(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ym(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function NC(){return Math.random().toString(36).substr(2,8)}function Vy(t,e){return{usr:t.state,key:t.key,idx:e}}function Hh(t,e,n,r){return n===void 0&&(n=null),Vo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Cs(e):e,{state:n,key:e&&e.key||r||NC()})}function Au(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Cs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function DC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ur.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Vo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=ur.Pop;let S=c(),m=S==null?null:S-u;u=S,l&&l({action:a,location:y.location,delta:m})}function d(S,m){a=ur.Push;let p=Hh(y.location,S,m);n&&n(p,S),u=c()+1;let v=Vy(p,u),E=y.createHref(p);try{o.pushState(v,"",E)}catch{i.location.assign(E)}s&&l&&l({action:a,location:y.location,delta:1})}function g(S,m){a=ur.Replace;let p=Hh(y.location,S,m);n&&n(p,S),u=c();let v=Vy(p,u),E=y.createHref(p);o.replaceState(v,"",E),s&&l&&l({action:a,location:y.location,delta:0})}function w(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof S=="string"?S:Au(S);return De(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let y={get action(){return a},get location(){return t(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(zy,f),l=S,()=>{i.removeEventListener(zy,f),l=null}},createHref(S){return e(i,S)},createURL:w,encodeLocation(S){let m=w(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:g,go(S){return o.go(S)}};return y}var By;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(By||(By={}));function LC(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Cs(e):e,i=Qm(r.pathname||"/",n);if(i==null)return null;let s=TE(t);MC(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=WC(s[a],KC(i));return o}function TE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(De(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=wr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(De(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),TE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:BC(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of IE(s.path))i(s,o,l)}),e}function IE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=IE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function MC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:HC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $C=/^:\w+$/,jC=3,FC=2,UC=1,zC=10,VC=-2,Hy=t=>t==="*";function BC(t,e){let n=t.split("/"),r=n.length;return n.some(Hy)&&(r+=VC),e&&(r+=FC),n.filter(i=>!Hy(i)).reduce((i,s)=>i+($C.test(s)?jC:s===""?UC:zC),r)}function HC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function WC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=qC({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:wr([i,c.pathname]),pathnameBase:JC(wr([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=wr([i,c.pathnameBase]))}return s}function qC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=GC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let d=a[f]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=YC(a[f]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function GC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ym(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function KC(t){try{return decodeURI(t)}catch(e){return Ym(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function YC(t,e){try{return decodeURIComponent(t)}catch(n){return Ym(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Qm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function QC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Cs(t):t;return{pathname:n?n.startsWith("/")?n:XC(n,e):e,search:ZC(r),hash:eO(i)}}function XC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ud(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function CE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Cs(t):(i=Vo({},t),De(!i.pathname||!i.pathname.includes("?"),ud("?","pathname","search",i)),De(!i.pathname||!i.pathname.includes("#"),ud("#","pathname","hash",i)),De(!i.search||!i.search.includes("#"),ud("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let f=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}a=f>=0?e[f]:"/"}let l=QC(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const wr=t=>t.join("/").replace(/\/\/+/g,"/"),JC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ZC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,eO=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function tO(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nO(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const rO=typeof Object.is=="function"?Object.is:nO,{useState:iO,useEffect:sO,useLayoutEffect:oO,useDebugValue:aO}=Kd;function lO(t,e,n){const r=e(),[{inst:i},s]=iO({inst:{value:r,getSnapshot:e}});return oO(()=>{i.value=r,i.getSnapshot=e,cd(i)&&s({inst:i})},[t,r,e]),sO(()=>(cd(i)&&s({inst:i}),t(()=>{cd(i)&&s({inst:i})})),[t]),aO(r),r}function cd(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!rO(n,r)}catch{return!0}}function uO(t,e,n){return e()}const cO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fO=!cO,dO=fO?uO:lO;"useSyncExternalStore"in Kd&&(t=>t.useSyncExternalStore)(Kd);const OE=_.createContext(null),Xm=_.createContext(null),ma=_.createContext(null),Vc=_.createContext(null),wi=_.createContext({outlet:null,matches:[]}),RE=_.createContext(null);function Wh(){return Wh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wh.apply(this,arguments)}function hO(t,e){let{relative:n}=e===void 0?{}:e;Os()||De(!1);let{basename:r,navigator:i}=_.useContext(ma),{hash:s,pathname:o,search:a}=AE(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:wr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Os(){return _.useContext(Vc)!=null}function Bc(){return Os()||De(!1),_.useContext(Vc).location}function ga(){Os()||De(!1);let{basename:t,navigator:e}=_.useContext(ma),{matches:n}=_.useContext(wi),{pathname:r}=Bc(),i=JSON.stringify(xE(n).map(a=>a.pathnameBase)),s=_.useRef(!1);return _.useEffect(()=>{s.current=!0}),_.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=CE(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:wr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function PE(){let{matches:t}=_.useContext(wi),e=t[t.length-1];return e?e.params:{}}function AE(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=_.useContext(wi),{pathname:i}=Bc(),s=JSON.stringify(xE(r).map(o=>o.pathnameBase));return _.useMemo(()=>CE(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function pO(t,e){Os()||De(!1);let{navigator:n}=_.useContext(ma),r=_.useContext(Xm),{matches:i}=_.useContext(wi),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Bc(),u;if(e){var c;let y=typeof e=="string"?Cs(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||De(!1),u=y}else u=l;let f=u.pathname||"/",d=a==="/"?f:f.slice(a.length)||"/",g=LC(t,{pathname:d}),w=yO(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:wr([a,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:wr([a,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return e&&w?_.createElement(Vc.Provider,{value:{location:Wh({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ur.Pop}},w):w}function mO(){let t=_O(),e=tO(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},e),n?_.createElement("pre",{style:i},n):null,s)}class gO extends _.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?_.createElement(wi.Provider,{value:this.props.routeContext},_.createElement(RE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vO(t){let{routeContext:e,match:n,children:r}=t,i=_.useContext(OE);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(wi.Provider,{value:e},r)}function yO(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||De(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=_.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=_.createElement(mO,null));let c=e.concat(r.slice(0,a+1)),f=()=>{let d=s;return l?d=u:o.route.Component?d=_.createElement(o.route.Component,null):o.route.element&&(d=o.route.element),_.createElement(vO,{match:o,routeContext:{outlet:s,matches:c},children:d})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?_.createElement(gO,{location:n.location,component:u,error:l,children:f(),routeContext:{outlet:null,matches:c}}):f()},null)}var Wy;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(Wy||(Wy={}));var Nu;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Nu||(Nu={}));function wO(t){let e=_.useContext(Xm);return e||De(!1),e}function SO(t){let e=_.useContext(wi);return e||De(!1),e}function EO(t){let e=SO(),n=e.matches[e.matches.length-1];return n.route.id||De(!1),n.route.id}function _O(){var t;let e=_.useContext(RE),n=wO(Nu.UseRouteError),r=EO(Nu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function kO(t){let{to:e,replace:n,state:r,relative:i}=t;Os()||De(!1);let s=_.useContext(Xm),o=ga();return _.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function xt(t){De(!1)}function bO(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ur.Pop,navigator:s,static:o=!1}=t;Os()&&De(!1);let a=e.replace(/^\/*/,"/"),l=_.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Cs(r));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:g="default"}=r,w=_.useMemo(()=>{let y=Qm(u,a);return y==null?null:{location:{pathname:y,search:c,hash:f,state:d,key:g},navigationType:i}},[a,u,c,f,d,g,i]);return w==null?null:_.createElement(ma.Provider,{value:l},_.createElement(Vc.Provider,{children:n,value:w}))}function TO(t){let{children:e,location:n}=t,r=_.useContext(OE),i=r&&!e?r.router.routes:qh(e);return pO(i,n)}var qy;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(qy||(qy={}));new Promise(()=>{});function qh(t,e){e===void 0&&(e=[]);let n=[];return _.Children.forEach(t,(r,i)=>{if(!_.isValidElement(r))return;let s=[...e,i];if(r.type===_.Fragment){n.push.apply(n,qh(r.props.children,s));return}r.type!==xt&&De(!1),!r.props.index||!r.props.children||De(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=qh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gh(){return Gh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gh.apply(this,arguments)}function IO(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function xO(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function CO(t,e){return t.button===0&&(!e||e==="_self")&&!xO(t)}const OO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function RO(t){let{basename:e,children:n,window:r}=t,i=_.useRef();i.current==null&&(i.current=AC({window:r,v5Compat:!0}));let s=i.current,[o,a]=_.useState({action:s.action,location:s.location});return _.useLayoutEffect(()=>s.listen(a),[s]),_.createElement(bO,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const PO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",AO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tt=_.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,f=IO(e,OO),{basename:d}=_.useContext(ma),g,w=!1;if(typeof u=="string"&&AO.test(u)&&(g=u,PO)){let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),E=Qm(v.pathname,d);v.origin===p.origin&&E!=null?u=E+v.search+v.hash:w=!0}let y=hO(u,{relative:i}),S=NO(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(p){r&&r(p),p.defaultPrevented||S(p)}return _.createElement("a",Gh({},f,{href:g||y,onClick:w||s?r:m,ref:n,target:l}))});var Gy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Gy||(Gy={}));var Ky;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ky||(Ky={}));function NO(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=ga(),l=Bc(),u=AE(t,{relative:o});return _.useCallback(c=>{if(CO(c,n)){c.preventDefault();let f=r!==void 0?r:Au(l)===Au(u);a(t,{replace:f,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},DO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},DE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[f],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(NE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):DO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new LO;const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const w=u<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MO=function(t){const e=NE(t);return DE.encodeByteArray(e,!0)},Du=function(t){return MO(t).replace(/\./g,"")},LE=function(t){try{return DE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO=()=>$O().__FIREBASE_DEFAULTS__,FO=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},UO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&LE(t[1]);return e&&JSON.parse(e)},Jm=()=>{try{return jO()||FO()||UO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ME=t=>{var e,n;return(n=(e=Jm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$E=t=>{const e=ME(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},zO=()=>{var t;return(t=Jm())===null||t===void 0?void 0:t.config},jE=t=>{var e;return(e=Jm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Du(JSON.stringify(n)),Du(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function HO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function WO(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qO(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function GO(){try{return typeof indexedDB=="object"}catch{return!1}}function KO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=YO,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,va.prototype.create)}}class va{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?QO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new kn(i,a,r)}}function QO(t,e){return t.replace(XO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const XO=/\{\$([^}]+)}/g;function JO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Yy(s)&&Yy(o)){if(!Lu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function eo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ZO(t,e){const n=new eR(t,e);return n.subscribe.bind(n)}class eR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=fd),i.error===void 0&&(i.error=fd),i.complete===void 0&&(i.complete=fd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(t){return t&&t._delegate?t._delegate:t}class Tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new VO;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iR(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rR(t){return t===Vr?void 0:t}function iR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const oR={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},aR=se.INFO,lR={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},uR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=lR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zm{constructor(e){this.name=e,this._logLevel=aR,this._logHandler=uR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const cR=(t,e)=>e.some(n=>t instanceof n);let Qy,Xy;function fR(){return Qy||(Qy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dR(){return Xy||(Xy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const UE=new WeakMap,Kh=new WeakMap,zE=new WeakMap,dd=new WeakMap,eg=new WeakMap;function hR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&UE.set(n,t)}).catch(()=>{}),eg.set(e,t),e}function pR(t){if(Kh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Kh.set(t,e)}let Yh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mR(t){Yh=t(Yh)}function gR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hd(this),e,...n);return zE.set(r,e.sort?e.sort():[e]),Sr(r)}:dR().includes(t)?function(...e){return t.apply(hd(this),e),Sr(UE.get(this))}:function(...e){return Sr(t.apply(hd(this),e))}}function vR(t){return typeof t=="function"?gR(t):(t instanceof IDBTransaction&&pR(t),cR(t,fR())?new Proxy(t,Yh):t)}function Sr(t){if(t instanceof IDBRequest)return hR(t);if(dd.has(t))return dd.get(t);const e=vR(t);return e!==t&&(dd.set(t,e),eg.set(e,t)),e}const hd=t=>eg.get(t);function yR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Sr(o.result),l.oldVersion,l.newVersion,Sr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const wR=["get","getKey","getAll","getAllKeys","count"],SR=["put","add","delete","clear"],pd=new Map;function Jy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pd.get(e))return pd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=SR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return pd.set(e,s),s}mR(t=>({...t,get:(e,n,r)=>Jy(e,n)||t.get(e,n,r),has:(e,n)=>!!Jy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_R(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _R(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qh="@firebase/app",Zy="0.9.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new Zm("@firebase/app"),kR="@firebase/app-compat",bR="@firebase/analytics-compat",TR="@firebase/analytics",IR="@firebase/app-check-compat",xR="@firebase/app-check",CR="@firebase/auth",OR="@firebase/auth-compat",RR="@firebase/database",PR="@firebase/database-compat",AR="@firebase/functions",NR="@firebase/functions-compat",DR="@firebase/installations",LR="@firebase/installations-compat",MR="@firebase/messaging",$R="@firebase/messaging-compat",jR="@firebase/performance",FR="@firebase/performance-compat",UR="@firebase/remote-config",zR="@firebase/remote-config-compat",VR="@firebase/storage",BR="@firebase/storage-compat",HR="@firebase/firestore",WR="@firebase/firestore-compat",qR="firebase",GR="9.20.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="[DEFAULT]",KR={[Qh]:"fire-core",[kR]:"fire-core-compat",[TR]:"fire-analytics",[bR]:"fire-analytics-compat",[xR]:"fire-app-check",[IR]:"fire-app-check-compat",[CR]:"fire-auth",[OR]:"fire-auth-compat",[RR]:"fire-rtdb",[PR]:"fire-rtdb-compat",[AR]:"fire-fn",[NR]:"fire-fn-compat",[DR]:"fire-iid",[LR]:"fire-iid-compat",[MR]:"fire-fcm",[$R]:"fire-fcm-compat",[jR]:"fire-perf",[FR]:"fire-perf-compat",[UR]:"fire-rc",[zR]:"fire-rc-compat",[VR]:"fire-gcs",[BR]:"fire-gcs-compat",[HR]:"fire-fst",[WR]:"fire-fst-compat","fire-js":"fire-js",[qR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=new Map,Jh=new Map;function YR(t,e){try{t.container.addComponent(e)}catch(n){li.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ui(t){const e=t.name;if(Jh.has(e))return li.debug(`There were multiple attempts to register component ${e}.`),!1;Jh.set(e,t);for(const n of Mu.values())YR(n,t);return!0}function Hc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Er=new va("app","Firebase",QR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Er.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=GR;function VE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Er.create("bad-app-name",{appName:String(i)});if(n||(n=zO()),!n)throw Er.create("no-options");const s=Mu.get(i);if(s){if(Lu(n,s.options)&&Lu(r,s.config))return s;throw Er.create("duplicate-app",{appName:i})}const o=new sR(i);for(const l of Jh.values())o.addComponent(l);const a=new XR(n,r,o);return Mu.set(i,a),a}function tg(t=Xh){const e=Mu.get(t);if(!e&&t===Xh)return VE();if(!e)throw Er.create("no-app",{appName:t});return e}function gn(t,e,n){var r;let i=(r=KR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),li.warn(a.join(" "));return}ui(new Tr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR="firebase-heartbeat-database",ZR=1,Bo="firebase-heartbeat-store";let md=null;function BE(){return md||(md=yR(JR,ZR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bo)}}}).catch(t=>{throw Er.create("idb-open",{originalErrorMessage:t.message})})),md}async function eP(t){try{return(await BE()).transaction(Bo).objectStore(Bo).get(HE(t))}catch(e){if(e instanceof kn)li.warn(e.message);else{const n=Er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});li.warn(n.message)}}}async function e0(t,e){try{const r=(await BE()).transaction(Bo,"readwrite");return await r.objectStore(Bo).put(e,HE(t)),r.done}catch(n){if(n instanceof kn)li.warn(n.message);else{const r=Er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});li.warn(r.message)}}}function HE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=1024,nP=30*24*60*60*1e3;class rP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=t0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=nP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=t0(),{heartbeatsToSend:n,unsentEntries:r}=iP(this._heartbeatsCache.heartbeats),i=Du(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function t0(){return new Date().toISOString().substring(0,10)}function iP(t,e=tP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),n0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),n0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GO()?KO().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await eP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return e0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return e0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function n0(t){return Du(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(t){ui(new Tr("platform-logger",e=>new ER(e),"PRIVATE")),ui(new Tr("heartbeat",e=>new rP(e),"PRIVATE")),gn(Qh,Zy,t),gn(Qh,Zy,"esm2017"),gn("fire-js","")}oP("");function ng(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function WE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aP=WE,qE=new va("auth","Firebase",WE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=new Zm("@firebase/auth");function lP(t,...e){$u.logLevel<=se.WARN&&$u.warn(`Auth (${Si}): ${t}`,...e)}function Ql(t,...e){$u.logLevel<=se.ERROR&&$u.error(`Auth (${Si}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t,...e){throw rg(t,...e)}function vn(t,...e){return rg(t,...e)}function uP(t,e,n){const r=Object.assign(Object.assign({},aP()),{[e]:n});return new va("auth","Firebase",r).create(e,{appName:t.name})}function rg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qE.create(t,...e)}function q(t,e,...n){if(!t)throw rg(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ql(e),new Error(e)}function Fn(t,e){t||On(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cP(){return r0()==="http:"||r0()==="https:"}function r0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cP()||HO()||"connection"in navigator)?navigator.onLine:!0}function dP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=BO()||WO()}get(){return fP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=new wa(3e4,6e4);function Rs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ei(t,e,n,r,i={}){return KE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ya(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),GE.fetch()(YE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function KE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},hP),e);try{const i=new mP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw hl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw uP(t,c,u);sn(t,c)}}catch(i){if(i instanceof kn)throw i;sn(t,"network-request-failed",{message:String(i)})}}async function Sa(t,e,n,r,i={}){const s=await Ei(t,e,n,r,i);return"mfaPendingCredential"in s&&sn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function YE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ig(t.config,i):`${t.config.apiScheme}://${i}`}class mP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),pP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gP(t,e){return Ei(t,"POST","/v1/accounts:delete",e)}async function vP(t,e){return Ei(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yP(t,e=!1){const n=Ce(t),r=await n.getIdToken(e),i=sg(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:go(gd(i.auth_time)),issuedAtTime:go(gd(i.iat)),expirationTime:go(gd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function gd(t){return Number(t)*1e3}function sg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ql("JWT malformed, contained fewer than 3 sections"),null;try{const i=LE(n);return i?JSON.parse(i):(Ql("Failed to decode base64 JWT payload"),null)}catch(i){return Ql("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wP(t){const e=sg(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&SP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function SP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=go(this.lastLoginAt),this.creationTime=go(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ju(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ds(t,vP(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?bP(s.providerUserInfo):[],a=kP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new QE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function _P(t){const e=Ce(t);await ju(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function bP(t){return t.map(e=>{var{providerId:n}=e,r=ng(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(t,e){const n=await KE(t,{},async()=>{const r=ya({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=YE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",GE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await TP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ho;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ho,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ng(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new EP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new QE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ds(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yP(this,e)}reload(){return _P(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ju(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ds(this,gP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:E,isAnonymous:k,providerData:T,stsTokenManager:x}=n;q(v&&x,e,"internal-error");const b=Ho.fromJSON(this.name,x);q(typeof v=="string",e,"internal-error"),Qn(f,e.name),Qn(d,e.name),q(typeof E=="boolean",e,"internal-error"),q(typeof k=="boolean",e,"internal-error"),Qn(g,e.name),Qn(w,e.name),Qn(y,e.name),Qn(S,e.name),Qn(m,e.name),Qn(p,e.name);const C=new Zr({uid:v,auth:e,email:d,emailVerified:E,displayName:f,isAnonymous:k,photoURL:w,phoneNumber:g,tenantId:y,stsTokenManager:b,createdAt:m,lastLoginAt:p});return T&&Array.isArray(T)&&(C.providerData=T.map(P=>Object.assign({},P))),S&&(C._redirectEventId=S),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ho;i.updateFromServerResponse(n);const s=new Zr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ju(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=new Map;function Rn(t){Fn(t instanceof Function,"Expected a class definition");let e=i0.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,i0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}XE.type="NONE";const s0=XE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t,e,n){return`firebase:${t}:${e}:${n}`}class Zi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Xl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zi(Rn(s0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Rn(s0);const o=Xl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=Zr._fromJSON(e,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Zi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Zi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(e_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(JE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(n_(e))return"Blackberry";if(r_(e))return"Webos";if(og(e))return"Safari";if((e.includes("chrome/")||ZE(e))&&!e.includes("edge/"))return"Chrome";if(t_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function JE(t=ut()){return/firefox\//i.test(t)}function og(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ZE(t=ut()){return/crios\//i.test(t)}function e_(t=ut()){return/iemobile/i.test(t)}function t_(t=ut()){return/android/i.test(t)}function n_(t=ut()){return/blackberry/i.test(t)}function r_(t=ut()){return/webos/i.test(t)}function Wc(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IP(t=ut()){var e;return Wc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xP(){return qO()&&document.documentMode===10}function i_(t=ut()){return Wc(t)||t_(t)||r_(t)||n_(t)||/windows phone/i.test(t)||e_(t)}function CP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(t,e=[]){let n;switch(t){case"Browser":n=o0(ut());break;case"Worker":n=`${o0(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Si}/${r}`}async function o_(t,e){return Ei(t,"GET","/v2/recaptchaConfig",Rs(t,e))}function a0(t){return t!==void 0&&t.enterprise!==void 0}class a_{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function l_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",OP().appendChild(r)})}function RP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const PP="https://www.google.com/recaptcha/enterprise.js?render=",AP="recaptcha-enterprise";class u_{constructor(e){this.type=AP,this.auth=Ps(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{o_(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new a_(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;a0(l)?l.enterprise.ready(()=>{try{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(u=>{a(u)})}catch(u){a(u)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&a0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}l_(PP+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Fu(t,e,n,r=!1){const i=new u_(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new l0(this),this.idTokenSubscription=new l0(this),this.beforeStateQueue=new NP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Zi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ju(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ce(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}async initializeRecaptchaConfig(){const e=await o_(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new a_(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new u_(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new va("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Zi.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=s_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ps(t){return Ce(t)}class l0{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZO(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t,e){const n=Hc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Lu(s,e??{}))return i;sn(i,"already-initialized")}return n.initialize({options:e})}function MP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $P(t,e,n){const r=Ps(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=c_(e),{host:o,port:a}=jP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||FP()}function c_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jP(t){const e=c_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:u0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:u0(o)}}}function u0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function UP(t,e){return Ei(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vd(t,e){return Sa(t,"POST","/v1/accounts:signInWithPassword",Rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zP(t,e){return Sa(t,"POST","/v1/accounts:signInWithEmailLink",Rs(t,e))}async function VP(t,e){return Sa(t,"POST","/v1/accounts:signInWithEmailLink",Rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends ag{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Wo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Fu(e,r,"signInWithPassword");return vd(e,i)}else return vd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Fu(e,r,"signInWithPassword");return vd(e,s)}else return Promise.reject(i)});case"emailLink":return zP(e,{email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return UP(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return VP(e,{idToken:n,email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(t,e){return Sa(t,"POST","/v1/accounts:signInWithIdp",Rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP="http://localhost";class ci extends ag{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ng(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ci(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return es(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,es(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,es(e,n)}buildRequest(){const e={requestUri:BP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ya(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WP(t){const e=Zs(eo(t)).link,n=e?Zs(eo(e)).deep_link_id:null,r=Zs(eo(t)).deep_link_id;return(r?Zs(eo(r)).link:null)||r||n||e||t}class lg{constructor(e){var n,r,i,s,o,a;const l=Zs(eo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=HP((i=l.mode)!==null&&i!==void 0?i:null);q(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=WP(e);try{return new lg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.providerId=As.PROVIDER_ID}static credential(e,n){return Wo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=lg.parseLink(n);return q(r,"argument-error"),Wo._fromEmailAndCode(e,r.code,r.tenantId)}}As.PROVIDER_ID="password";As.EMAIL_PASSWORD_SIGN_IN_METHOD="password";As.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends f_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends Ea{constructor(){super("facebook.com")}static credential(e){return ci._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ci._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.GOOGLE_SIGN_IN_METHOD="google.com";ir.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Ea{constructor(){super("github.com")}static credential(e){return ci._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Ea{constructor(){super("twitter.com")}static credential(e,n){return ci._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yd(t,e){return Sa(t,"POST","/v1/accounts:signUp",Rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Zr._fromIdTokenResponse(e,r,i),o=c0(r);return new fi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=c0(r);return new fi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function c0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu extends kn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Uu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Uu(e,n,r,i)}}function d_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Uu._fromErrorAndOperation(t,s,e,r):s})}async function qP(t,e,n=!1){const r=await ds(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ds(t,d_(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=sg(s.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(t.uid===a,r,"user-mismatch"),fi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&sn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h_(t,e,n=!1){const r="signIn",i=await d_(t,r,e),s=await fi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function KP(t,e){return h_(Ps(t),e)}async function YP(t,e,n){var r;const i=Ps(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Fu(i,s,"signUpPassword");o=yd(i,u)}else o=yd(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Fu(i,s,"signUpPassword");return yd(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await fi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function QP(t,e,n){return KP(Ce(t),As.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XP(t,e){return Ei(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ce(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ds(r,XP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function JP(t,e,n,r){return Ce(t).onIdTokenChanged(e,n,r)}function ZP(t,e,n){return Ce(t).beforeAuthStateChanged(e,n)}function eA(t,e,n,r){return Ce(t).onAuthStateChanged(e,n,r)}function tA(t){return Ce(t).signOut()}const zu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zu,"1"),this.storage.removeItem(zu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(){const t=ut();return og(t)||Wc(t)}const rA=1e3,iA=10;class m_ extends p_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=nA()&&CP(),this.fallbackToPolling=i_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);xP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,iA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}m_.type="LOCAL";const sA=m_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_ extends p_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}g_.type="SESSION";const v_=g_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new qc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await oA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=ug("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return window}function lA(t){yn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(){return typeof yn().WorkerGlobalScope<"u"&&typeof yn().importScripts=="function"}async function uA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fA(){return y_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_="firebaseLocalStorageDb",dA=1,Vu="firebaseLocalStorage",S_="fbase_key";class _a{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gc(t,e){return t.transaction([Vu],e?"readwrite":"readonly").objectStore(Vu)}function hA(){const t=indexedDB.deleteDatabase(w_);return new _a(t).toPromise()}function tp(){const t=indexedDB.open(w_,dA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vu,{keyPath:S_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vu)?e(r):(r.close(),await hA(),e(await tp()))})})}async function f0(t,e,n){const r=Gc(t,!0).put({[S_]:e,value:n});return new _a(r).toPromise()}async function pA(t,e){const n=Gc(t,!1).get(e),r=await new _a(n).toPromise();return r===void 0?null:r.value}function d0(t,e){const n=Gc(t,!0).delete(e);return new _a(n).toPromise()}const mA=800,gA=3;class E_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return y_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qc._getInstance(fA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uA(),!this.activeServiceWorker)return;this.sender=new aA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tp();return await f0(e,zu,"1"),await d0(e,zu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>f0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>d0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Gc(i,!1).getAll();return new _a(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}E_.type="LOCAL";const vA=E_;new wa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(t,e){return e?Rn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg extends ag{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wA(t){return h_(t.auth,new cg(t),t.bypassAuthState)}function SA(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),GP(n,new cg(t),t.bypassAuthState)}async function EA(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),qP(n,new cg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wA;case"linkViaPopup":case"linkViaRedirect":return EA;case"reauthViaPopup":case"reauthViaRedirect":return SA;default:sn(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=new wa(2e3,1e4);class Vi extends __{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Vi.currentPopupAction&&Vi.currentPopupAction.cancel(),Vi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=ug();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,_A.get())};e()}}Vi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA="pendingRedirect",Jl=new Map;class bA extends __{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jl.get(this.auth._key());if(!e){try{const r=await TA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jl.set(this.auth._key(),e)}return this.bypassAuthState||Jl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TA(t,e){const n=CA(e),r=xA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function IA(t,e){Jl.set(t._key(),e)}function xA(t){return Rn(t._redirectPersistence)}function CA(t){return Xl(kA,t.config.apiKey,t.name)}async function OA(t,e,n=!1){const r=Ps(t),i=yA(r,e),o=await new bA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=10*60*1e3;class PA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!k_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RA&&this.cachedEventUids.clear(),this.cachedEventUids.has(h0(e))}saveEventToCache(e){this.cachedEventUids.add(h0(e)),this.lastProcessedEventTime=Date.now()}}function h0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function k_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return k_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NA(t,e={}){return Ei(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LA=/^https?/;async function MA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await NA(t);for(const n of e)try{if($A(n))return}catch{}sn(t,"unauthorized-domain")}function $A(t){const e=Zh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!LA.test(n))return!1;if(DA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=new wa(3e4,6e4);function p0(){const t=yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FA(t){return new Promise((e,n)=>{var r,i,s;function o(){p0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{p0(),n(vn(t,"network-request-failed"))},timeout:jA.get()})}if(!((i=(r=yn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=yn().gapi)===null||s===void 0)&&s.load)o();else{const a=RP("iframefcb");return yn()[a]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},l_(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Zl=null,e})}let Zl=null;function UA(t){return Zl=Zl||FA(t),Zl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=new wa(5e3,15e3),VA="__/auth/iframe",BA="emulator/auth/iframe",HA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qA(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ig(e,BA):`https://${t.config.authDomain}/${VA}`,r={apiKey:e.apiKey,appName:t.name,v:Si},i=WA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ya(r).slice(1)}`}async function GA(t){const e=await UA(t),n=yn().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:qA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),a=yn().setTimeout(()=>{s(o)},zA.get());function l(){yn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YA=500,QA=600,XA="_blank",JA="http://localhost";class m0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZA(t,e,n,r=YA,i=QA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},KA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ut().toLowerCase();n&&(a=ZE(u)?XA:n),JE(u)&&(e=e||JA,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,w])=>`${d}${g}=${w},`,"");if(IP(u)&&a!=="_self")return eN(e||"",a),new m0(null);const f=window.open(e||"",a,c);q(f,t,"popup-blocked");try{f.focus()}catch{}return new m0(f)}function eN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN="__/auth/handler",nN="emulator/auth/handler",rN=encodeURIComponent("fac");async function g0(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Si,eventId:i};if(e instanceof f_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",JO(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(s||{}))o[c]=f}if(e instanceof Ea){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${rN}=${encodeURIComponent(l)}`:"";return`${iN(t)}?${ya(a).slice(1)}${u}`}function iN({config:t}){return t.emulator?ig(t,nN):`https://${t.authDomain}/${tN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="webStorageSupport";class sN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=v_,this._completeRedirectFn=OA,this._overrideRedirectResult=IA}async _openPopup(e,n,r,i){var s;Fn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await g0(e,n,r,Zh(),i);return ZA(e,o,ug())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await g0(e,n,r,Zh(),i);return lA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Fn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await GA(e),r=new PA(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wd,{type:wd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[wd];o!==void 0&&n(!!o),sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=MA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return i_()||og()||Wc()}}const oN=sN;var v0="@firebase/auth",y0="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function uN(t){ui(new Tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),q(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:s_(t)},u=new DP(r,i,s,l);return MP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ui(new Tr("auth-internal",e=>{const n=Ps(e.getProvider("auth").getImmediate());return(r=>new aN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(v0,y0,lN(t)),gn(v0,y0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN=5*60,fN=jE("authIdTokenMaxAge")||cN;let w0=null;const dN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fN)return;const i=n==null?void 0:n.token;w0!==i&&(w0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hN(t=tg()){const e=Hc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LP(t,{popupRedirectResolver:oN,persistence:[vA,sA,v_]}),r=jE("authTokenSyncURL");if(r){const s=dN(r);ZP(n,s,()=>s(n.currentUser)),JP(n,o=>s(o))}const i=ME("auth");return i&&$P(n,`http://${i}`),n}uN("Browser");var pN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j,fg=fg||{},Y=pN||self;function Bu(){}function Kc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ka(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function mN(t){return Object.prototype.hasOwnProperty.call(t,Sd)&&t[Sd]||(t[Sd]=++gN)}var Sd="closure_uid_"+(1e9*Math.random()>>>0),gN=0;function vN(t,e,n){return t.call.apply(t.bind,arguments)}function yN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function st(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=vN:st=yN,st.apply(null,arguments)}function pl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Qe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Mr(){this.s=this.s,this.o=this.o}var wN=0;Mr.prototype.s=!1;Mr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),wN!=0)&&mN(this)};Mr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function dg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function S0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Kc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var SN=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",Bu,e),Y.removeEventListener("test",Bu,e)}catch{}return t}();function Hu(t){return/^[\s\xa0]*$/.test(t)}var E0=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ed(t,e){return t<e?-1:t>e?1:0}function Yc(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function dn(t){return Yc().indexOf(t)!=-1}function hg(t){return hg[" "](t),t}hg[" "]=Bu;function EN(t){var e=bN;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var _N=dn("Opera"),hs=dn("Trident")||dn("MSIE"),T_=dn("Edge"),np=T_||hs,I_=dn("Gecko")&&!(Yc().toLowerCase().indexOf("webkit")!=-1&&!dn("Edge"))&&!(dn("Trident")||dn("MSIE"))&&!dn("Edge"),kN=Yc().toLowerCase().indexOf("webkit")!=-1&&!dn("Edge");function x_(){var t=Y.document;return t?t.documentMode:void 0}var Wu;e:{var _d="",kd=function(){var t=Yc();if(I_)return/rv:([^\);]+)(\)|;)/.exec(t);if(T_)return/Edge\/([\d\.]+)/.exec(t);if(hs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(kN)return/WebKit\/(\S+)/.exec(t);if(_N)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(kd&&(_d=kd?kd[1]:""),hs){var bd=x_();if(bd!=null&&bd>parseFloat(_d)){Wu=String(bd);break e}}Wu=_d}var bN={};function TN(){return EN(function(){let t=0;const e=E0(String(Wu)).split("."),n=E0("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Ed(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Ed(i[2].length==0,s[2].length==0)||Ed(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var rp;if(Y.document&&hs){var _0=x_();rp=_0||parseInt(Wu,10)||void 0}else rp=void 0;var IN=rp;function qo(t,e){if(ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(I_){e:{try{hg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:xN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&qo.X.h.call(this)}}Qe(qo,ot);var xN={2:"touch",3:"pen",4:"mouse"};qo.prototype.h=function(){qo.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ba="closure_listenable_"+(1e6*Math.random()|0),CN=0;function ON(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++CN,this.ba=this.ea=!1}function Qc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function pg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function C_(t){const e={};for(const n in t)e[n]=t[n];return e}const k0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O_(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<k0.length;s++)n=k0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Xc(t){this.src=t,this.g={},this.h=0}Xc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=sp(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new ON(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function ip(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=b_(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Qc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function sp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var mg="closure_lm_"+(1e6*Math.random()|0),Td={};function R_(t,e,n,r,i){if(r&&r.once)return A_(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)R_(t,e[s],n,r,i);return null}return n=yg(n),t&&t[ba]?t.N(e,n,ka(r)?!!r.capture:!!r,i):P_(t,e,n,!1,r,i)}function P_(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ka(i)?!!i.capture:!!i,a=vg(t);if(a||(t[mg]=a=new Xc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=RN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)SN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(D_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function RN(){function t(n){return e.call(t.src,t.listener,n)}const e=PN;return t}function A_(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)A_(t,e[s],n,r,i);return null}return n=yg(n),t&&t[ba]?t.O(e,n,ka(r)?!!r.capture:!!r,i):P_(t,e,n,!0,r,i)}function N_(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)N_(t,e[s],n,r,i);else r=ka(r)?!!r.capture:!!r,n=yg(n),t&&t[ba]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=sp(s,n,r,i),-1<n&&(Qc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=vg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=sp(e,n,r,i)),(n=-1<t?e[t]:null)&&gg(n))}function gg(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ba])ip(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(D_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=vg(e))?(ip(n,t),n.h==0&&(n.src=null,e[mg]=null)):Qc(t)}}}function D_(t){return t in Td?Td[t]:Td[t]="on"+t}function PN(t,e){if(t.ba)t=!0;else{e=new qo(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&gg(t),t=n.call(r,e)}return t}function vg(t){return t=t[mg],t instanceof Xc?t:null}var Id="__closure_events_fn_"+(1e9*Math.random()>>>0);function yg(t){return typeof t=="function"?t:(t[Id]||(t[Id]=function(e){return t.handleEvent(e)}),t[Id])}function He(){Mr.call(this),this.i=new Xc(this),this.P=this,this.I=null}Qe(He,Mr);He.prototype[ba]=!0;He.prototype.removeEventListener=function(t,e,n,r){N_(this,t,e,n,r)};function Ke(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ot(e,t);else if(e instanceof ot)e.target=e.target||t;else{var i=e;e=new ot(r,t),O_(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ml(o,r,!0,e)&&i}if(o=e.g=t,i=ml(o,r,!0,e)&&i,i=ml(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ml(o,r,!1,e)&&i}He.prototype.M=function(){if(He.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Qc(n[r]);delete t.g[e],t.h--}}this.I=null};He.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};He.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ml(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&ip(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var wg=Y.JSON.stringify;function AN(){var t=$_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class NN{constructor(){this.h=this.g=null}add(e,n){const r=L_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var L_=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new DN,t=>t.reset());class DN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function LN(t){Y.setTimeout(()=>{throw t},0)}function M_(t,e){op||MN(),ap||(op(),ap=!0),$_.add(t,e)}var op;function MN(){var t=Y.Promise.resolve(void 0);op=function(){t.then($N)}}var ap=!1,$_=new NN;function $N(){for(var t;t=AN();){try{t.h.call(t.g)}catch(n){LN(n)}var e=L_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ap=!1}function Jc(t,e){He.call(this),this.h=t||1,this.g=e||Y,this.j=st(this.lb,this),this.l=Date.now()}Qe(Jc,He);j=Jc.prototype;j.ca=!1;j.R=null;j.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ke(this,"tick"),this.ca&&(Sg(this),this.start()))}};j.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Sg(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}j.M=function(){Jc.X.M.call(this),Sg(this),delete this.g};function Eg(t,e,n){if(typeof t=="function")n&&(t=st(t,n));else if(t&&typeof t.handleEvent=="function")t=st(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function j_(t){t.g=Eg(()=>{t.g=null,t.i&&(t.i=!1,j_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class jN extends Mr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:j_(this)}M(){super.M(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Go(t){Mr.call(this),this.h=t,this.g={}}Qe(Go,Mr);var b0=[];function F_(t,e,n,r){Array.isArray(n)||(n&&(b0[0]=n.toString()),n=b0);for(var i=0;i<n.length;i++){var s=R_(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function U_(t){pg(t.g,function(e,n){this.g.hasOwnProperty(n)&&gg(e)},t),t.g={}}Go.prototype.M=function(){Go.X.M.call(this),U_(this)};Go.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Zc(){this.g=!0}Zc.prototype.Aa=function(){this.g=!1};function FN(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function UN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Bi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+VN(t,n)+(r?" "+r:"")})}function zN(t,e){t.info(function(){return"TIMEOUT: "+e})}Zc.prototype.info=function(){};function VN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return wg(n)}catch{return e}}var _i={},T0=null;function ef(){return T0=T0||new He}_i.Pa="serverreachability";function z_(t){ot.call(this,_i.Pa,t)}Qe(z_,ot);function Ko(t){const e=ef();Ke(e,new z_(e))}_i.STAT_EVENT="statevent";function V_(t,e){ot.call(this,_i.STAT_EVENT,t),this.stat=e}Qe(V_,ot);function ht(t){const e=ef();Ke(e,new V_(e,t))}_i.Qa="timingevent";function B_(t,e){ot.call(this,_i.Qa,t),this.size=e}Qe(B_,ot);function Ta(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var tf={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},H_={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function _g(){}_g.prototype.h=null;function I0(t){return t.h||(t.h=t.i())}function W_(){}var Ia={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function kg(){ot.call(this,"d")}Qe(kg,ot);function bg(){ot.call(this,"c")}Qe(bg,ot);var lp;function nf(){}Qe(nf,_g);nf.prototype.g=function(){return new XMLHttpRequest};nf.prototype.i=function(){return{}};lp=new nf;function xa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Go(this),this.O=BN,t=np?125:void 0,this.T=new Jc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new q_}function q_(){this.i=null,this.g="",this.h=!1}var BN=45e3,up={},qu={};j=xa.prototype;j.setTimeout=function(t){this.O=t};function cp(t,e,n){t.K=1,t.v=sf(Un(e)),t.s=n,t.P=!0,G_(t,null)}function G_(t,e){t.F=Date.now(),Ca(t),t.A=Un(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),tk(n.i,"t",r),t.C=0,n=t.l.H,t.h=new q_,t.g=_k(t.l,n?e:null,!t.s),0<t.N&&(t.L=new jN(st(t.La,t,t.g),t.N)),F_(t.S,t.g,"readystatechange",t.ib),e=t.H?C_(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ko(),FN(t.j,t.u,t.A,t.m,t.U,t.s)}j.ib=function(t){t=t.target;const e=this.L;e&&Pn(t)==3?e.l():this.La(t)};j.La=function(t){try{if(t==this.g)e:{const c=Pn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>c)&&(c!=3||np||this.g&&(this.h.h||this.g.fa()||R0(this.g)))){this.I||c!=4||e==7||(e==8||0>=f?Ko(3):Ko(2)),rf(this);var n=this.g.aa();this.Y=n;t:if(K_(this)){var r=R0(this.g);t="";var i=r.length,s=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qr(this),vo(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,UN(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Hu(a)){var u=a;break t}}u=null}if(n=u)Bi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,fp(this,n);else{this.i=!1,this.o=3,ht(12),qr(this),vo(this);break e}}this.P?(Y_(this,c,o),np&&this.i&&c==3&&(F_(this.S,this.T,"tick",this.hb),this.T.start())):(Bi(this.j,this.m,o,null),fp(this,o)),c==4&&qr(this),this.i&&!this.I&&(c==4?yk(this.l,this):(this.i=!1,Ca(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ht(12)):(this.o=0,ht(13)),qr(this),vo(this)}}}catch{}finally{}};function K_(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Y_(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=HN(t,n),i==qu){e==4&&(t.o=4,ht(14),r=!1),Bi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==up){t.o=4,ht(15),Bi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Bi(t.j,t.m,i,null),fp(t,i);K_(t)&&i!=qu&&i!=up&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ht(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pg(e),e.K=!0,ht(11))):(Bi(t.j,t.m,n,"[Invalid Chunked Response]"),qr(t),vo(t))}j.hb=function(){if(this.g){var t=Pn(this.g),e=this.g.fa();this.C<e.length&&(rf(this),Y_(this,t,e),this.i&&t!=4&&Ca(this))}};function HN(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?qu:(n=Number(e.substring(n,r)),isNaN(n)?up:(r+=1,r+n>e.length?qu:(e=e.substr(r,n),t.C=r+n,e)))}j.cancel=function(){this.I=!0,qr(this)};function Ca(t){t.V=Date.now()+t.O,Q_(t,t.O)}function Q_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ta(st(t.gb,t),e)}function rf(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}j.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(zN(this.j,this.A),this.K!=2&&(Ko(),ht(17)),qr(this),this.o=2,vo(this)):Q_(this,this.V-t)};function vo(t){t.l.G==0||t.I||yk(t.l,t)}function qr(t){rf(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Sg(t.T),U_(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function fp(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||dp(n.h,t))){if(!t.J&&dp(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Yu(n),lf(n);else break e;Rg(n),ht(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ta(st(n.cb,n),6e3));if(1>=ik(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Gr(n,11)}else if((t.J||n.g==t)&&Yu(n),!Hu(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const f=u[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const w=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.h;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Tg(s,s.h),s.h=null))}if(r.D){const y=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,we(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=Ek(r,r.H?r.ka:null,r.V),o.J){sk(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(rf(a),Ca(a)),r.g=o}else gk(r);0<n.i.length&&uf(n)}else u[0]!="stop"&&u[0]!="close"||Gr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Gr(n,7):Og(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ko(4)}catch{}}function WN(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Kc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function qN(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Kc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function X_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Kc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=qN(t),r=WN(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var J_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ei(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ei){this.h=e!==void 0?e:t.h,Gu(this,t.j),this.s=t.s,this.g=t.g,Ku(this,t.m),this.l=t.l,e=t.i;var n=new Yo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),x0(this,n),this.o=t.o}else t&&(n=String(t).match(J_))?(this.h=!!e,Gu(this,n[1]||"",!0),this.s=to(n[2]||""),this.g=to(n[3]||"",!0),Ku(this,n[4]),this.l=to(n[5]||"",!0),x0(this,n[6]||"",!0),this.o=to(n[7]||"")):(this.h=!!e,this.i=new Yo(null,this.h))}ei.prototype.toString=function(){var t=[],e=this.j;e&&t.push(no(e,C0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(no(e,C0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(no(n,n.charAt(0)=="/"?QN:YN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",no(n,JN)),t.join("")};function Un(t){return new ei(t)}function Gu(t,e,n){t.j=n?to(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ku(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function x0(t,e,n){e instanceof Yo?(t.i=e,ZN(t.i,t.h)):(n||(e=no(e,XN)),t.i=new Yo(e,t.h))}function we(t,e,n){t.i.set(e,n)}function sf(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function to(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function no(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,KN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function KN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var C0=/[#\/\?@]/g,YN=/[#\?:]/g,QN=/[#\?]/g,XN=/[#\?@]/g,JN=/#/g;function Yo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function $r(t){t.g||(t.g=new Map,t.h=0,t.i&&GN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}j=Yo.prototype;j.add=function(t,e){$r(this),this.i=null,t=Ns(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Z_(t,e){$r(t),e=Ns(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ek(t,e){return $r(t),e=Ns(t,e),t.g.has(e)}j.forEach=function(t,e){$r(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};j.oa=function(){$r(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};j.W=function(t){$r(this);let e=[];if(typeof t=="string")ek(this,t)&&(e=e.concat(this.g.get(Ns(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};j.set=function(t,e){return $r(this),this.i=null,t=Ns(this,t),ek(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};j.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function tk(t,e,n){Z_(t,e),0<n.length&&(t.i=null,t.g.set(Ns(t,e),dg(n)),t.h+=n.length)}j.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ns(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ZN(t,e){e&&!t.j&&($r(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Z_(this,r),tk(this,i,n))},t)),t.j=e}var eD=class{constructor(e,n){this.h=e,this.g=n}};function nk(t){this.l=t||tD,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ga&&Y.g.Ga()&&Y.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tD=10;function rk(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ik(t){return t.h?1:t.g?t.g.size:0}function dp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Tg(t,e){t.g?t.g.add(e):t.h=e}function sk(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}nk.prototype.cancel=function(){if(this.i=ok(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ok(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return dg(t.i)}function Ig(){}Ig.prototype.stringify=function(t){return Y.JSON.stringify(t,void 0)};Ig.prototype.parse=function(t){return Y.JSON.parse(t,void 0)};function nD(){this.g=new Ig}function rD(t,e,n){const r=n||"";try{X_(t,function(i,s){let o=i;ka(i)&&(o=wg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function iD(t,e){const n=new Zc;if(Y.Image){const r=new Image;r.onload=pl(gl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=pl(gl,n,r,"TestLoadImage: error",!1,e),r.onabort=pl(gl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=pl(gl,n,r,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function gl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Oa(t){this.l=t.ac||null,this.j=t.jb||!1}Qe(Oa,_g);Oa.prototype.g=function(){return new of(this.l,this.j)};Oa.prototype.i=function(t){return function(){return t}}({});function of(t,e){He.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=xg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Qe(of,He);var xg=0;j=of.prototype;j.open=function(t,e){if(this.readyState!=xg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Qo(this)};j.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Y).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};j.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ra(this)),this.readyState=xg};j.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qo(this)),this.g&&(this.readyState=3,Qo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ak(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function ak(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}j.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ra(this):Qo(this),this.readyState==3&&ak(this)}};j.Va=function(t){this.g&&(this.response=this.responseText=t,Ra(this))};j.Ua=function(t){this.g&&(this.response=t,Ra(this))};j.ga=function(){this.g&&Ra(this)};function Ra(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Qo(t)}j.setRequestHeader=function(t,e){this.v.append(t,e)};j.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};j.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Qo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(of.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var sD=Y.JSON.parse;function Ie(t){He.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=lk,this.K=this.L=!1}Qe(Ie,He);var lk="",oD=/^https?$/i,aD=["POST","PUT"];j=Ie.prototype;j.Ka=function(t){this.L=t};j.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():lp.g(),this.C=this.u?I0(this.u):I0(lp),this.g.onreadystatechange=st(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){O0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Y.FormData&&t instanceof Y.FormData,!(0<=b_(aD,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{fk(this),0<this.B&&((this.K=lD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.qa,this)):this.A=Eg(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){O0(this,s)}};function lD(t){return hs&&TN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}j.qa=function(){typeof fg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ke(this,"timeout"),this.abort(8))};function O0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,uk(t),af(t)}function uk(t){t.D||(t.D=!0,Ke(t,"complete"),Ke(t,"error"))}j.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ke(this,"complete"),Ke(this,"abort"),af(this))};j.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),af(this,!0)),Ie.X.M.call(this)};j.Ha=function(){this.s||(this.F||this.v||this.l?ck(this):this.fb())};j.fb=function(){ck(this)};function ck(t){if(t.h&&typeof fg<"u"&&(!t.C[1]||Pn(t)!=4||t.aa()!=2)){if(t.v&&Pn(t)==4)Eg(t.Ha,0,t);else if(Ke(t,"readystatechange"),Pn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(J_)[1]||null;if(!i&&Y.self&&Y.self.location){var s=Y.self.location.protocol;i=s.substr(0,s.length-1)}r=!oD.test(i?i.toLowerCase():"")}n=r}if(n)Ke(t,"complete"),Ke(t,"success");else{t.m=6;try{var o=2<Pn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",uk(t)}}finally{af(t)}}}}function af(t,e){if(t.g){fk(t);const n=t.g,r=t.C[0]?Bu:null;t.g=null,t.C=null,e||Ke(t,"ready");try{n.onreadystatechange=r}catch{}}}function fk(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}function Pn(t){return t.g?t.g.readyState:0}j.aa=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}};j.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};j.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),sD(e)}};function R0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case lk:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}j.Ea=function(){return this.m};j.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function dk(t){let e="";return pg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Cg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=dk(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):we(t,e,n))}function Gs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function hk(t){this.Ca=0,this.i=[],this.j=new Zc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Gs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Gs("baseRetryDelayMs",5e3,t),this.bb=Gs("retryDelaySeedMs",1e4,t),this.$a=Gs("forwardChannelMaxRetries",2,t),this.ta=Gs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new nk(t&&t.concurrentRequestLimit),this.Fa=new nD,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}j=hk.prototype;j.ma=8;j.G=1;function Og(t){if(pk(t),t.G==3){var e=t.U++,n=Un(t.F);we(n,"SID",t.I),we(n,"RID",e),we(n,"TYPE","terminate"),Pa(t,n),e=new xa(t,t.j,e,void 0),e.K=2,e.v=sf(Un(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon&&(n=Y.navigator.sendBeacon(e.v.toString(),"")),!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=_k(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ca(e)}Sk(t)}function lf(t){t.g&&(Pg(t),t.g.cancel(),t.g=null)}function pk(t){lf(t),t.u&&(Y.clearTimeout(t.u),t.u=null),Yu(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function uf(t){rk(t.h)||t.m||(t.m=!0,M_(t.Ja,t),t.C=0)}function uD(t,e){return ik(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ta(st(t.Ja,t,e),wk(t,t.C)),t.C++,!0)}j.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new xa(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=C_(s),O_(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=mk(this,i,e),n=Un(this.F),we(n,"RID",t),we(n,"CVER",22),this.D&&we(n,"X-HTTP-Session-Id",this.D),Pa(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(dk(s)))+"&"+e:this.o&&Cg(n,this.o,s)),Tg(this.h,i),this.Ya&&we(n,"TYPE","init"),this.O?(we(n,"$req",e),we(n,"SID","null"),i.Z=!0,cp(i,n,null)):cp(i,n,e),this.G=2}}else this.G==3&&(t?P0(this,t):this.i.length==0||rk(this.h)||P0(this))};function P0(t,e){var n;e?n=e.m:n=t.U++;const r=Un(t.F);we(r,"SID",t.I),we(r,"RID",n),we(r,"AID",t.T),Pa(t,r),t.o&&t.s&&Cg(r,t.o,t.s),n=new xa(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=mk(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Tg(t.h,n),cp(n,r,e)}function Pa(t,e){t.ia&&pg(t.ia,function(n,r){we(e,r,n)}),t.l&&X_({},function(n,r){we(e,r,n)})}function mk(t,e,n){n=Math.min(t.i.length,n);var r=t.l?st(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{rD(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function gk(t){t.g||t.u||(t.Z=1,M_(t.Ia,t),t.A=0)}function Rg(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ta(st(t.Ia,t),wk(t,t.A)),t.A++,!0)}j.Ia=function(){if(this.u=null,vk(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ta(st(this.eb,this),t)}};j.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ht(10),lf(this),vk(this))};function Pg(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function vk(t){t.g=new xa(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Un(t.sa);we(e,"RID","rpc"),we(e,"SID",t.I),we(e,"CI",t.L?"0":"1"),we(e,"AID",t.T),we(e,"TYPE","xmlhttp"),Pa(t,e),t.o&&t.s&&Cg(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=sf(Un(e)),n.s=null,n.P=!0,G_(n,t)}j.cb=function(){this.v!=null&&(this.v=null,lf(this),Rg(this),ht(19))};function Yu(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function yk(t,e){var n=null;if(t.g==e){Yu(t),Pg(t),t.g=null;var r=2}else if(dp(t.h,e))n=e.D,sk(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ef(),Ke(r,new B_(r,n)),uf(t)}else gk(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&uD(t,e)||r==2&&Rg(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Gr(t,5);break;case 4:Gr(t,10);break;case 3:Gr(t,6);break;default:Gr(t,2)}}}function wk(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Gr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=st(t.kb,t);n||(n=new ei("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||Gu(n,"https"),sf(n)),iD(n.toString(),r)}else ht(2);t.G=0,t.l&&t.l.va(e),Sk(t),pk(t)}j.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function Sk(t){if(t.G=0,t.la=[],t.l){const e=ok(t.h);(e.length!=0||t.i.length!=0)&&(S0(t.la,e),S0(t.la,t.i),t.h.i.length=0,dg(t.i),t.i.length=0),t.l.ua()}}function Ek(t,e,n){var r=n instanceof ei?Un(n):new ei(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Ku(r,r.m);else{var i=Y.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ei(null,void 0);r&&Gu(s,r),e&&(s.g=e),i&&Ku(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&we(r,n,e),we(r,"VER",t.ma),Pa(t,r),r}function _k(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ie(new Oa({jb:!0})):new Ie(t.ra),e.Ka(t.H),e}function kk(){}j=kk.prototype;j.xa=function(){};j.wa=function(){};j.va=function(){};j.ua=function(){};j.Ra=function(){};function Qu(){if(hs&&!(10<=Number(IN)))throw Error("Environmental error: no available transport.")}Qu.prototype.g=function(t,e){return new Dt(t,e)};function Dt(t,e){He.call(this),this.g=new hk(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Hu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Hu(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ds(this)}Qe(Dt,He);Dt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ht(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ek(t,null,t.V),uf(t)};Dt.prototype.close=function(){Og(this.g)};Dt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=wg(t),t=n);e.i.push(new eD(e.ab++,t)),e.G==3&&uf(e)};Dt.prototype.M=function(){this.g.l=null,delete this.j,Og(this.g),delete this.g,Dt.X.M.call(this)};function bk(t){kg.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Qe(bk,kg);function Tk(){bg.call(this),this.status=1}Qe(Tk,bg);function Ds(t){this.g=t}Qe(Ds,kk);Ds.prototype.xa=function(){Ke(this.g,"a")};Ds.prototype.wa=function(t){Ke(this.g,new bk(t))};Ds.prototype.va=function(t){Ke(this.g,new Tk)};Ds.prototype.ua=function(){Ke(this.g,"b")};Qu.prototype.createWebChannel=Qu.prototype.g;Dt.prototype.send=Dt.prototype.u;Dt.prototype.open=Dt.prototype.m;Dt.prototype.close=Dt.prototype.close;tf.NO_ERROR=0;tf.TIMEOUT=8;tf.HTTP_ERROR=6;H_.COMPLETE="complete";W_.EventType=Ia;Ia.OPEN="a";Ia.CLOSE="b";Ia.ERROR="c";Ia.MESSAGE="d";He.prototype.listen=He.prototype.N;Ie.prototype.listenOnce=Ie.prototype.O;Ie.prototype.getLastError=Ie.prototype.Oa;Ie.prototype.getLastErrorCode=Ie.prototype.Ea;Ie.prototype.getStatus=Ie.prototype.aa;Ie.prototype.getResponseJson=Ie.prototype.Sa;Ie.prototype.getResponseText=Ie.prototype.fa;Ie.prototype.send=Ie.prototype.da;Ie.prototype.setWithCredentials=Ie.prototype.Ka;var cD=function(){return new Qu},fD=function(){return ef()},xd=tf,dD=H_,hD=_i,A0={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},pD=Oa,vl=W_,mD=Ie;const N0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new Zm("@firebase/firestore");function D0(){return di.logLevel}function F(t,...e){if(di.logLevel<=se.DEBUG){const n=e.map(Ag);di.debug(`Firestore (${Ls}): ${t}`,...n)}}function zn(t,...e){if(di.logLevel<=se.ERROR){const n=e.map(Ag);di.error(`Firestore (${Ls}): ${t}`,...n)}}function Xu(t,...e){if(di.logLevel<=se.WARN){const n=e.map(Ag);di.warn(`Firestore (${Ls}): ${t}`,...n)}}function Ag(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Ls}) INTERNAL ASSERTION FAILED: `+t;throw zn(e),new Error(e)}function me(t,e){t||G()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class vD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yD{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Nn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new Ik(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new tt(e)}}class wD{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class SD{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new wD(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ED{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _D{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.T=n.token,new ED(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=kD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function ps(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new $e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new $e(0,0))}static max(){return new Q(new $e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Xo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class de extends Xo{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new de(n)}static emptyPath(){return new de([])}}const bD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Xo{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return bD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new M(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new M(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(de.fromString(e))}static fromName(e){return new V(de.fromString(e).popFirst(5))}static empty(){return new V(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new de(e.slice()))}}function TD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new Ir(i,V.empty(),e)}function ID(t){return new Ir(t.readTime,t.key,-1)}class Ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ir(Q.min(),V.empty(),-1)}static max(){return new Ir(Q.max(),V.empty(),-1)}}function xD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==CD)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new R((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new R((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Na(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ng.ct=-1;function cf(t){return t==null}function Ju(t){return t===0&&1/t==-1/0}function RD(t){return typeof t=="number"&&Number.isInteger(t)&&!Ju(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ck(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yl(this.root,e,this.comparator,!1)}getReverseIterator(){return new yl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yl(this.root,e,this.comparator,!0)}}class yl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??qe.RED,this.left=i??qe.EMPTY,this.right=s??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,r,i){return this}insert(t,e,n){return new qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new M0(this.data.getIterator())}getIteratorFrom(e){return new M0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class M0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Rt([])}unionWith(e){let n=new je(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ps(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new PD("Invalid base64 string: "+i):i}}(e);return new ct(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const AD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xr(t){if(me(!!t),typeof t=="string"){let e=0;const n=AD.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ms(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Rk(t){const e=t.mapValue.fields.__previous_value__;return Ok(e)?Rk(e):e}function Jo(t){const e=xr(t.mapValue.fields.__local_write_time__.timestampValue);return new $e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Zo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Zo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Zo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ok(t)?4:DD(t)?9007199254740991:10:G()}function En(t,e){if(t===e)return!0;const n=hi(t);if(n!==hi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Jo(t).isEqual(Jo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=xr(r.timestampValue),o=xr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ms(r.bytesValue).isEqual(ms(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Pe(r.geoPointValue.latitude)===Pe(i.geoPointValue.latitude)&&Pe(r.geoPointValue.longitude)===Pe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Pe(r.integerValue)===Pe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Pe(r.doubleValue),o=Pe(i.doubleValue);return s===o?Ju(s)===Ju(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ps(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(L0(s)!==L0(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!En(s[a],o[a])))return!1;return!0}(t,e);default:return G()}}function ea(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function gs(t,e){if(t===e)return 0;const n=hi(t),r=hi(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Pe(i.integerValue||i.doubleValue),a=Pe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return $0(t.timestampValue,e.timestampValue);case 4:return $0(Jo(t),Jo(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ms(i),a=ms(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=oe(o[l],a[l]);if(u!==0)return u}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=oe(Pe(i.latitude),Pe(s.latitude));return o!==0?o:oe(Pe(i.longitude),Pe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=gs(o[l],a[l]);if(u)return u}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===wl.mapValue&&s===wl.mapValue)return 0;if(i===wl.mapValue)return 1;if(s===wl.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const f=oe(a[c],u[c]);if(f!==0)return f;const d=gs(o[a[c]],l[u[c]]);if(d!==0)return d}return oe(a.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function $0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=xr(t),r=xr(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function vs(t){return hp(t)}function hp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=xr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ms(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,V.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=hp(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${hp(r.fields[a])}`;return s+"}"}(t.mapValue):G();var e,n}function j0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function pp(t){return!!t&&"integerValue"in t}function Dg(t){return!!t&&"arrayValue"in t}function F0(t){return!!t&&"nullValue"in t}function U0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function eu(t){return!!t&&"mapValue"in t}function yo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ki(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function DD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!eu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yo(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=yo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());eu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];eu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ki(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new St(yo(this.value))}}function Pk(t){const e=[];return ki(t.fields,(n,r)=>{const i=new it([n]);if(eu(r)){const s=Pk(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Rt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new rt(e,0,Q.min(),Q.min(),Q.min(),St.empty(),0)}static newFoundDocument(e,n,r,i){return new rt(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new rt(e,2,n,Q.min(),Q.min(),St.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,Q.min(),Q.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,n){this.position=e,this.inclusive=n}}function z0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=gs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function V0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n="asc"){this.field=e,this.dir=n}}function LD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{}class Ne extends Ak{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $D(e,n,r):n==="array-contains"?new UD(e,r):n==="in"?new zD(e,r):n==="not-in"?new VD(e,r):n==="array-contains-any"?new BD(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new jD(e,r):new FD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(gs(n,this.value)):n!==null&&hi(this.value)===hi(n)&&this.matchesComparison(gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class on extends Ak{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new on(e,n)}matches(e){return Nk(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Nk(t){return t.op==="and"}function Dk(t){return MD(t)&&Nk(t)}function MD(t){for(const e of t.filters)if(e instanceof on)return!1;return!0}function mp(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+vs(t.value);if(Dk(t))return t.filters.map(e=>mp(e)).join(",");{const e=t.filters.map(n=>mp(n)).join(",");return`${t.op}(${e})`}}function Lk(t,e){return t instanceof Ne?function(n,r){return r instanceof Ne&&n.op===r.op&&n.field.isEqual(r.field)&&En(n.value,r.value)}(t,e):t instanceof on?function(n,r){return r instanceof on&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&Lk(s,r.filters[o]),!0):!1}(t,e):void G()}function Mk(t){return t instanceof Ne?function(e){return`${e.field.canonicalString()} ${e.op} ${vs(e.value)}`}(t):t instanceof on?function(e){return e.op.toString()+" {"+e.getFilters().map(Mk).join(" ,")+"}"}(t):"Filter"}class $D extends Ne{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class jD extends Ne{constructor(e,n){super(e,"in",n),this.keys=$k("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FD extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=$k("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $k(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class UD extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dg(n)&&ea(n.arrayValue,this.value)}}class zD extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ea(this.value.arrayValue,n)}}class VD extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(ea(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ea(this.value.arrayValue,n)}}class BD extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ea(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function B0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new HD(t,e,n,r,i,s,o)}function Lg(t){const e=X(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>mp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),cf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vs(r)).join(",")),e.ft=n}return e.ft}function Mg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Lk(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!V0(t.startAt,e.startAt)&&V0(t.endAt,e.endAt)}function gp(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function WD(t,e,n,r,i,s,o,a){return new Da(t,e,n,r,i,s,o,a)}function ff(t){return new Da(t)}function H0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jk(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $g(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Fk(t){return t.collectionGroup!==null}function ts(t){const e=X(t);if(e.dt===null){e.dt=[];const n=$g(e),r=jk(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new wo(n)),e.dt.push(new wo(it.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new wo(it.keyField(),s))}}}return e.dt}function Vn(t){const e=X(t);if(!e.wt)if(e.limitType==="F")e.wt=B0(e.path,e.collectionGroup,ts(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ts(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new wo(s.field,o))}const r=e.endAt?new Zu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Zu(e.startAt.position,e.startAt.inclusive):null;e.wt=B0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function vp(t,e){e.getFirstInequalityField(),$g(t);const n=t.filters.concat([e]);return new Da(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function yp(t,e,n){return new Da(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function df(t,e){return Mg(Vn(t),Vn(e))&&t.limitType===e.limitType}function Uk(t){return`${Lg(Vn(t))}|lt:${t.limitType}`}function wp(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Mk(r)).join(", ")}]`),cf(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vs(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vs(r)).join(",")),`Target(${n})`}(Vn(t))}; limitType=${t.limitType})`}function hf(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):V.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of ts(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=z0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ts(n),r)||n.endAt&&!function(i,s,o){const a=z0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ts(n),r))}(t,e)}function qD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zk(t){return(e,n)=>{let r=!1;for(const i of ts(t)){const s=GD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function GD(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?gs(a,l):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ki(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Ck(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD=new Fe(V.comparator);function Bn(){return KD}const Vk=new Fe(V.comparator);function ro(...t){let e=Vk;for(const n of t)e=e.insert(n.key,n);return e}function Bk(t){let e=Vk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Kr(){return So()}function Hk(){return So()}function So(){return new Ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const YD=new Fe(V.comparator),QD=new je(V.comparator);function te(...t){let e=QD;for(const n of t)e=e.add(n);return e}const XD=new je(oe);function Wk(){return XD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ju(e)?"-0":e}}function Gk(t){return{integerValue:""+t}}function JD(t,e){return RD(e)?Gk(e):qk(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this._=void 0}}function ZD(t,e,n){return t instanceof ec?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ta?Yk(t,e):t instanceof na?Qk(t,e):function(r,i){const s=Kk(r,i),o=W0(s)+W0(r._t);return pp(s)&&pp(r._t)?Gk(o):qk(r.serializer,o)}(t,e)}function e2(t,e,n){return t instanceof ta?Yk(t,e):t instanceof na?Qk(t,e):n}function Kk(t,e){return t instanceof tc?pp(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ec extends pf{}class ta extends pf{constructor(e){super(),this.elements=e}}function Yk(t,e){const n=Xk(e);for(const r of t.elements)n.some(i=>En(i,r))||n.push(r);return{arrayValue:{values:n}}}class na extends pf{constructor(e){super(),this.elements=e}}function Qk(t,e){let n=Xk(e);for(const r of t.elements)n=n.filter(i=>!En(i,r));return{arrayValue:{values:n}}}class tc extends pf{constructor(e,n){super(),this.serializer=e,this._t=n}}function W0(t){return Pe(t.integerValue||t.doubleValue)}function Xk(t){return Dg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function t2(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ta&&r instanceof ta||n instanceof na&&r instanceof na?ps(n.elements,r.elements,En):n instanceof tc&&r instanceof tc?En(n._t,r._t):n instanceof ec&&r instanceof ec}(t.transform,e.transform)}class n2{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mf{}function Jk(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new eb(t.key,nn.none()):new La(t.key,t.data,nn.none());{const n=t.data,r=St.empty();let i=new je(it.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new jr(t.key,r,new Rt(i.toArray()),nn.none())}}function r2(t,e,n){t instanceof La?function(r,i,s){const o=r.value.clone(),a=G0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof jr?function(r,i,s){if(!tu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=G0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Zk(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Eo(t,e,n,r){return t instanceof La?function(i,s,o,a){if(!tu(i.precondition,s))return o;const l=i.value.clone(),u=K0(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof jr?function(i,s,o,a){if(!tu(i.precondition,s))return o;const l=K0(i.fieldTransforms,a,s),u=s.data;return u.setAll(Zk(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return tu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function i2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Kk(r.transform,i||null);s!=null&&(n===null&&(n=St.empty()),n.set(r.field,s))}return n||null}function q0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ps(n,r,(i,s)=>t2(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class La extends mf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class jr extends mf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Zk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function G0(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,e2(o,a,n[i]))}return r}function K0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ZD(s,o,e))}return r}class eb extends mf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class s2 extends mf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&r2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Eo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Eo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Hk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Jk(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&ps(this.mutations,e.mutations,(n,r)=>q0(n,r))&&ps(this.baseMutations,e.baseMutations,(n,r)=>q0(n,r))}}class jg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=YD;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new jg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,re;function u2(t){switch(t){default:return G();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function tb(t){if(t===void 0)return zn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Re.OK:return I.OK;case Re.CANCELLED:return I.CANCELLED;case Re.UNKNOWN:return I.UNKNOWN;case Re.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Re.INTERNAL:return I.INTERNAL;case Re.UNAVAILABLE:return I.UNAVAILABLE;case Re.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Re.NOT_FOUND:return I.NOT_FOUND;case Re.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Re.ABORTED:return I.ABORTED;case Re.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Re.DATA_LOSS:return I.DATA_LOSS;default:return G()}}(re=Re||(Re={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Sl}static getOrCreateInstance(){return Sl===null&&(Sl=new Fg),Sl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Sl=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ma.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new gf(Q.min(),i,Wk(),Bn(),te())}}class Ma{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ma(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class nb{constructor(e,n){this.targetId=e,this.Et=n}}class rb{constructor(e,n,r=ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Y0{constructor(){this.At=0,this.Rt=X0(),this.vt=ct.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=te(),n=te(),r=te();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Ma(this.vt,this.bt,e,n,r)}xt(){this.Pt=!1,this.Rt=X0()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class c2{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Bn(),this.qt=Q0(),this.Ut=new je(oe)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const r=this.jt(n);switch(e.state){case 0:this.Wt(n)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const r=e.targetId,i=e.Et.count,s=this.Yt(r);if(s){const o=s.target;if(gp(o))if(i===0){const a=new V(o.path);this.Qt(r,a,rt.newNoDocument(a,Q.min()))}else me(i===1);else{const a=this.Zt(r);a!==i&&(this.Ht(r),this.Ut=this.Ut.add(r),(n=Fg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&gp(a.target)){const l=new V(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,rt.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=te();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new gf(e,n,this.Ut,this.Lt,r);return this.Lt=Bn(),this.qt=Q0(),this.Ut=new je(oe),i}Gt(e,n){if(!this.Wt(e))return;const r=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Y0,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new je(oe),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Y0),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Q0(){return new Fe(V.comparator)}function X0(){return new Fe(V.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),d2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),h2=(()=>({and:"AND",or:"OR"}))();class p2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function nc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ib(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function m2(t,e){return nc(t,e.toTimestamp())}function wn(t){return me(!!t),Q.fromTimestamp(function(e){const n=xr(e);return new $e(n.seconds,n.nanos)}(t))}function Ug(t,e){return function(n){return new de(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function sb(t){const e=de.fromString(t);return me(ub(e)),e}function Sp(t,e){return Ug(t.databaseId,e.path)}function Cd(t,e){const n=sb(e);if(n.get(1)!==t.databaseId.projectId)throw new M(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(ob(n))}function Ep(t,e){return Ug(t.databaseId,e)}function g2(t){const e=sb(t);return e.length===4?de.emptyPath():ob(e)}function _p(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ob(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function J0(t,e,n){return{name:Sp(t,e),fields:n.value.mapValue.fields}}function v2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(me(u===void 0||typeof u=="string"),ct.fromBase64String(u||"")):(me(u===void 0||u instanceof Uint8Array),ct.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:tb(l.code);return new M(u,l.message||"")}(o);n=new rb(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cd(t,r.document.name),s=wn(r.document.updateTime),o=r.document.createTime?wn(r.document.createTime):Q.min(),a=new St({mapValue:{fields:r.document.fields}}),l=rt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new nu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Cd(t,r.document),s=r.readTime?wn(r.readTime):Q.min(),o=rt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new nu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Cd(t,r.document),s=r.removedTargetIds||[];n=new nu([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new l2(i),o=r.targetId;n=new nb(o,s)}}return n}function y2(t,e){let n;if(e instanceof La)n={update:J0(t,e.key,e.value)};else if(e instanceof eb)n={delete:Sp(t,e.key)};else if(e instanceof jr)n={update:J0(t,e.key,e.data),updateMask:x2(e.fieldMask)};else{if(!(e instanceof s2))return G();n={verify:Sp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ec)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ta)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof na)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof tc)return{fieldPath:s.field.canonicalString(),increment:o._t};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:m2(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function w2(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?wn(r.updateTime):wn(i);return s.isEqual(Q.min())&&(s=wn(i)),new n2(s,r.transformResults||[])}(n,e))):[]}function S2(t,e){return{documents:[Ep(t,e.path)]}}function E2(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ep(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ep(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return lb(on.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Ci(c.field),direction:b2(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.useProto3Json||cf(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function _2(t){let e=g2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const f=ab(c);return f instanceof on&&Dk(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(f){return new wo(Oi(f.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(c)));let a=null;n.limit&&(a=function(c){let f;return f=typeof c=="object"?c.value:c,cf(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(c){const f=!!c.before,d=c.values||[];return new Zu(d,f)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const f=!c.before,d=c.values||[];return new Zu(d,f)}(n.endAt)),WD(e,i,o,s,a,"F",l,u)}function k2(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ab(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Oi(e.unaryFilter.field);return Ne.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Oi(e.unaryFilter.field);return Ne.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Oi(e.unaryFilter.field);return Ne.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Oi(e.unaryFilter.field);return Ne.create(s,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return Ne.create(Oi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return on.create(e.compositeFilter.filters.map(n=>ab(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function b2(t){return f2[t]}function T2(t){return d2[t]}function I2(t){return h2[t]}function Ci(t){return{fieldPath:t.canonicalString()}}function Oi(t){return it.fromServerFormat(t.fieldPath)}function lb(t){return t instanceof Ne?function(e){if(e.op==="=="){if(U0(e.value))return{unaryFilter:{field:Ci(e.field),op:"IS_NAN"}};if(F0(e.value))return{unaryFilter:{field:Ci(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(U0(e.value))return{unaryFilter:{field:Ci(e.field),op:"IS_NOT_NAN"}};if(F0(e.value))return{unaryFilter:{field:Ci(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ci(e.field),op:T2(e.op),value:e.value}}}(t):t instanceof on?function(e){const n=e.getFilters().map(r=>lb(r));return n.length===1?n[0]:{compositeFilter:{op:I2(e.op),filters:n}}}(t):G()}function x2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ub(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,r,i,s=Q.min(),o=Q.min(),a=ct.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ti(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e){this.se=e}}function O2(t){const e=_2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(){this.He=new P2}addToCollectionParentIndex(e,n){return this.He.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Ir.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Ir.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class P2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(de.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(de.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new ys(0)}static bn(){return new ys(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(){this.changes=new Ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Eo(r.mutation,i,Rt.empty(),$e.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Kr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ro();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Bn();const o=So(),a=So();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof jr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Eo(c.mutation,u,c.mutation.getFieldMask(),$e.now())):o.set(u.key,Rt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new N2(c,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=So();let i=new Fe((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Rt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=Hk();c.forEach(d=>{if(!s.has(d)){const g=Jk(n.get(d),r.get(d));g!==null&&f.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return V.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Fk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):R.resolve(Kr());let a=-1,l=s;return o.next(u=>R.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(c)?R.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,te())).next(c=>({batchId:a,changes:Bk(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let i=ro();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ro();return this.indexManager.getCollectionParents(e,i).next(o=>R.forEach(o,a=>{const l=function(u,c){return new Da(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,f)=>{s=s.insert(c,f)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,rt.newInvalidDocument(u)))});let o=ro();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Eo(u.mutation,l,Rt.empty(),$e.now()),hf(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:wn(r.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:O2(r.bundledQuery),readTime:wn(r.readTime)}}(n)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(){this.overlays=new Fe(V.comparator),this.ts=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Kr();return R.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.re(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const i=Kr(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Fe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Kr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Kr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return R.resolve(a)}re(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new a2(n,r));let s=this.ts.get(n);s===void 0&&(s=te(),this.ts.set(n,s)),this.ts.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.es=new je(ze.ns),this.ss=new je(ze.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const r=new ze(e,n);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.us(new ze(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}hs(e){const n=new V(new de([])),r=new ze(n,e),i=new ze(n,e+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new V(new de([])),r=new ze(n,e),i=new ze(n,e+1);let s=te();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ze(e,0),r=this.es.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return V.comparator(e.key,n.key)||oe(e.ds,n.ds)}static rs(e,n){return oe(e.ds,n.ds)||V.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new je(ze.ns)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new o2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ys(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(oe);return n.forEach(i=>{const s=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),R.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new ze(new V(s),0);let a=new je(oe);return this._s.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.ds)),!0)},o),R.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(r=>{const i=this.gs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return R.forEach(n.mutations,i=>{const s=new ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,n){const r=new ze(n,0),i=this._s.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e){this.Ts=e,this.docs=new Fe(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():rt.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Bn();const o=n.path,a=new V(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||xD(ID(c),r)<=0||(i.has(c.key)||hf(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Es(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new F2(this)}getSize(e){return R.resolve(this.size)}}class F2 extends A2{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e){this.persistence=e,this.As=new Ms(n=>Lg(n),Mg),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Rs=0,this.vs=new zg,this.targetCount=0,this.bs=ys.vn()}forEachTarget(e,n){return this.As.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Rs&&(this.Rs=n),R.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new ys(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Sn(n),R.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.As.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.vs.os(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.vs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.vs.fs(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Ng(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new U2(this),this.indexManager=new R2,this.remoteDocumentCache=function(r){return new j2(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new C2(n),this.xs=new L2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new M2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ps[e.toKey()];return r||(r=new $2(n,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new V2(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return R.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class V2 extends OD{constructor(e){super(),this.currentSequenceNumber=e}}class Vg{constructor(e){this.persistence=e,this.$s=new zg,this.Ms=null}static Fs(e){return new Vg(e)}get Bs(){if(this.Ms)return this.Ms;throw G()}addReference(e,n,r){return this.$s.addReference(r,n),this.Bs.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.$s.removeReference(r,n),this.Bs.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),R.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Bs,r=>{const i=V.fromPath(r);return this.Ls(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(r=>{r?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return R.or([()=>R.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Vi=r,this.Si=i}static Di(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Bg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ni(e,n).next(s=>s||this.ki(e,n,i,r)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(H0(n))return R.resolve(null);let r=Vn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=yp(n,null,"F"),r=Vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.$i(n,a);return this.Mi(n,u,o,l.readTime)?this.Ni(e,yp(n,null,"F")):this.Fi(e,u,n,l)}))})))}ki(e,n,r,i){return H0(n)||i.isEqual(Q.min())?this.Oi(e,n):this.xi.getDocuments(e,r).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,r,i)?this.Oi(e,n):(D0()<=se.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),wp(n)),this.Fi(e,o,n,TD(i,-1)))})}$i(e,n){let r=new je(zk(e));return n.forEach((i,s)=>{hf(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return D0()<=se.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",wp(n)),this.xi.getDocumentsMatchingQuery(e,n,Ir.min())}Fi(e,n,r,i){return this.xi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,n,r,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new Fe(oe),this.qi=new Ms(s=>Lg(s),Mg),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new D2(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function W2(t,e,n,r){return new H2(t,e,n,r)}async function cb(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=te();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function q2(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,f=c.keys();let d=R.resolve();return f.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(w=>{const y=l.docVersions.get(g);me(y!==null),w.version.compareTo(y)<0&&(c.applyToRemoteDocument(w,l),w.isValidDocument()&&(w.setReadTime(l.commitVersion),u.addEntry(w)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=te();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function fb(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function G2(t,e){const n=X(t),r=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((c,f)=>{const d=i.get(f);if(!d)return;a.push(n.Ds.removeMatchingKeys(s,c.removedDocuments,f).next(()=>n.Ds.addMatchingKeys(s,c.addedDocuments,f)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(f)?g=g.withResumeToken(ct.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(f,g),function(w,y,S){return w.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,g,c)&&a.push(n.Ds.updateTargetData(s,g))});let l=Bn(),u=te();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(K2(s,o,e.documentUpdates).next(c=>{l=c.zi,u=c.ji})),!r.isEqual(Q.min())){const c=n.Ds.getLastRemoteSnapshotVersion(s).next(f=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Li=i,s))}function K2(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Bn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{zi:o,ji:i}})}function Y2(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Q2(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ds.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):n.Ds.allocateTargetId(r).next(o=>(i=new ti(e,o,0,r.currentSequenceNumber),n.Ds.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Li.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function kp(t,e,n){const r=X(t),i=r.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Na(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(i.target)}function Z0(t,e,n){const r=X(t);let i=Q.min(),s=te();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=X(a),f=c.qi.get(u);return f!==void 0?R.resolve(c.Li.get(f)):c.Ds.getTargetData(l,u)}(r,o,Vn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:te())).next(a=>(X2(r,qD(e),a),{documents:a,Wi:s})))}function X2(t,e,n){let r=t.Ui.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ui.set(e,r)}class ew{constructor(){this.activeTargetIds=Wk()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class J2{constructor(){this.Br=new ew,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,r){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new ew,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El=null;function Od(){return El===null?El=268435456+Math.round(2147483648*Math.random()):El++,"0x"+El.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection";class nL extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,r,i,s){const o=Od(),a=this.ao(e,n);F("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.ho(l,i,s),this.lo(e,a,l,r).then(u=>(F("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Xu("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ls,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=eL[e];return`${this.ro}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){const s=Od();return new Promise((o,a)=>{const l=new mD;l.setWithCredentials(!0),l.listenOnce(dD.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case xd.NO_ERROR:const c=l.getResponseJson();F(Ze,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case xd.TIMEOUT:F(Ze,`RPC '${e}' ${s} timed out`),a(new M(I.DEADLINE_EXCEEDED,"Request time out"));break;case xd.HTTP_ERROR:const f=l.getStatus();if(F(Ze,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const w=function(y){const S=y.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(S)>=0?S:I.UNKNOWN}(g.status);a(new M(w,g.message))}else a(new M(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new M(I.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{F(Ze,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);F(Ze,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=Od(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cD(),a=fD(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new pD({})),this.ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");F(Ze,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let f=!1,d=!1;const g=new tL({Wr:y=>{d?F(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(f||(F(Ze,`Opening RPC '${e}' stream ${i} transport.`),c.open(),f=!0),F(Ze,`RPC '${e}' stream ${i} sending:`,y),c.send(y))},Hr:()=>c.close()}),w=(y,S,m)=>{y.listen(S,p=>{try{m(p)}catch(v){setTimeout(()=>{throw v},0)}})};return w(c,vl.EventType.OPEN,()=>{d||F(Ze,`RPC '${e}' stream ${i} transport opened.`)}),w(c,vl.EventType.CLOSE,()=>{d||(d=!0,F(Ze,`RPC '${e}' stream ${i} transport closed`),g.so())}),w(c,vl.EventType.ERROR,y=>{d||(d=!0,Xu(Ze,`RPC '${e}' stream ${i} transport errored:`,y),g.so(new M(I.UNAVAILABLE,"The operation could not be completed")))}),w(c,vl.EventType.MESSAGE,y=>{var S;if(!d){const m=y.data[0];me(!!m);const p=m,v=p.error||((S=p[0])===null||S===void 0?void 0:S.error);if(v){F(Ze,`RPC '${e}' stream ${i} received error:`,v);const E=v.status;let k=function(x){const b=Re[x];if(b!==void 0)return tb(b)}(E),T=v.message;k===void 0&&(k=I.INTERNAL,T="Unknown error status: "+E+" with message "+v.message),d=!0,g.so(new M(k,T)),c.close()}else F(Ze,`RPC '${e}' stream ${i} received:`,m),g.io(m)}}),w(a,hD.STAT_EVENT,y=>{y.stat===A0.PROXY?F(Ze,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===A0.NOPROXY&&F(Ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.no()},0),g}}function Rd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(t){return new p2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,n,r,i,s,o,a,l){this.Ws=e,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new db(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(zn(n.toString()),zn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.Ko(r,i)},r=>{e(()=>{const i=new M(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(e,n){const r=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rL extends hb{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=v2(this.serializer,e),r=function(i){if(!("targetChange"in i))return Q.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Q.min():s.readTime?wn(s.readTime):Q.min()}(e);return this.listener.zo(n,r)}jo(e){const n={};n.database=_p(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;return o=gp(a)?{documents:S2(i,a)}:{query:E2(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=ib(i,s.resumeToken):s.snapshotVersion.compareTo(Q.min())>0&&(o.readTime=nc(i,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=k2(this.serializer,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=_p(this.serializer),n.removeTarget=e,this.Fo(n)}}class iL extends hb{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=w2(e.writeResults,e.commitTime),r=wn(e.commitTime);return this.listener.Zo(r,n)}return me(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=_p(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>y2(this.serializer,r))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new M(I.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(I.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(I.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class oL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(zn(n),this.ru=!1):F("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{bi(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=X(a);l.du.add(4),await $a(l),l.mu.set("Unknown"),l.du.delete(4),await yf(l)}(this))})}),this.mu=new oL(r,i)}}async function yf(t){if(bi(t))for(const e of t.wu)await e(!0)}async function $a(t){for(const e of t.wu)await e(!1)}function pb(t,e){const n=X(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),qg(n)?Wg(n):$s(n).No()&&Hg(n,e))}function mb(t,e){const n=X(t),r=$s(n);n.fu.delete(e),r.No()&&gb(n,e),n.fu.size===0&&(r.No()?r.$o():bi(n)&&n.mu.set("Unknown"))}function Hg(t,e){t.gu.Ot(e.targetId),$s(t).jo(e)}function gb(t,e){t.gu.Ot(e),$s(t).Wo(e)}function Wg(t){t.gu=new c2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),$s(t).start(),t.mu.ou()}function qg(t){return bi(t)&&!$s(t).xo()&&t.fu.size>0}function bi(t){return X(t).du.size===0}function vb(t){t.gu=void 0}async function lL(t){t.fu.forEach((e,n)=>{Hg(t,e)})}async function uL(t,e){vb(t),qg(t)?(t.mu.au(e),Wg(t)):t.mu.set("Unknown")}async function cL(t,e,n){if(t.mu.set("Online"),e instanceof rb&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.fu.delete(o),r.gu.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await rc(t,r)}else if(e instanceof nu?t.gu.Kt(e):e instanceof nb?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(Q.min()))try{const r=await fb(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.gu.Xt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.fu.get(l);u&&i.fu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.fu.get(a);if(!l)return;i.fu.set(a,l.withResumeToken(ct.EMPTY_BYTE_STRING,l.snapshotVersion)),gb(i,a);const u=new ti(l.target,a,1,l.sequenceNumber);Hg(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await rc(t,r)}}async function rc(t,e,n){if(!Na(e))throw e;t.du.add(1),await $a(t),t.mu.set("Offline"),n||(n=()=>fb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await yf(t)})}function yb(t,e){return e().catch(n=>rc(t,n,e))}async function wf(t){const e=X(t),n=Cr(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;fL(e);)try{const i=await Y2(e.localStore,r);if(i===null){e.lu.length===0&&n.$o();break}r=i.batchId,dL(e,i)}catch(i){await rc(e,i)}wb(e)&&Sb(e)}function fL(t){return bi(t)&&t.lu.length<10}function dL(t,e){t.lu.push(e);const n=Cr(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function wb(t){return bi(t)&&!Cr(t).xo()&&t.lu.length>0}function Sb(t){Cr(t).start()}async function hL(t){Cr(t).tu()}async function pL(t){const e=Cr(t);for(const n of t.lu)e.Yo(n.mutations)}async function mL(t,e,n){const r=t.lu.shift(),i=jg.from(r,e,n);await yb(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await wf(t)}async function gL(t,e){e&&Cr(t).Jo&&await async function(n,r){if(i=r.code,u2(i)&&i!==I.ABORTED){const s=n.lu.shift();Cr(n).Oo(),await yb(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await wf(n)}var i}(t,e),wb(t)&&Sb(t)}async function nw(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=bi(n);n.du.add(3),await $a(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await yf(n)}async function vL(t,e){const n=X(t);e?(n.du.delete(2),await yf(n)):e||(n.du.add(2),await $a(n),n.mu.set("Unknown"))}function $s(t){return t.yu||(t.yu=function(e,n,r){const i=X(e);return i.nu(),new rL(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:lL.bind(null,t),Zr:uL.bind(null,t),zo:cL.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),qg(t)?Wg(t):t.mu.set("Unknown")):(await t.yu.stop(),vb(t))})),t.yu}function Cr(t){return t.pu||(t.pu=function(e,n,r){const i=X(e);return i.nu(),new iL(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:hL.bind(null,t),Zr:gL.bind(null,t),Xo:pL.bind(null,t),Zo:mL.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await wf(t)):(await t.pu.stop(),t.lu.length>0&&(F("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Gg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kg(t,e){if(zn("AsyncQueue",`${e}: ${t}`),Na(t))return new M(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=ro(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new ns(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ns)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(){this.Iu=new Fe(V.comparator)}track(e){const n=e.doc.key,r=this.Iu.get(n);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(n):e.type===1&&r.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):G():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ws{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ws(e,n,ns.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&df(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(){this.Eu=void 0,this.listeners=[]}}class wL{constructor(){this.queries=new Ms(e=>Uk(e),df),this.onlineState="Unknown",this.Au=new Set}}async function Yg(t,e){const n=X(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new yL),i)try{s.Eu=await n.onListen(r)}catch(o){const a=Kg(o,`Initialization of query '${wp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&Xg(n)}async function Qg(t,e){const n=X(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function SL(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Eu=i}}r&&Xg(n)}function EL(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Xg(t){t.Au.forEach(e=>{e.next()})}class Jg{constructor(e,n,r){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ws(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=ws.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.key=e}}class _b{constructor(e){this.key=e}}class _L{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=te(),this.mutatedKeys=te(),this.Ku=zk(e),this.Gu=new ns(this.Ku)}get Qu(){return this.Lu}zu(e,n){const r=n?n.ju:new rw,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,f)=>{const d=i.get(c),g=hf(this.query,f)?f:null,w=!!d&&this.mutatedKeys.has(d.key),y=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;d&&g?d.data.isEqual(g.data)?w!==y&&(r.track({type:3,doc:g}),S=!0):this.Wu(d,g)||(r.track({type:2,doc:g}),S=!0,(l&&this.Ku(g,l)>0||u&&this.Ku(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),S=!0):d&&!g&&(r.track({type:1,doc:d}),S=!0,(l||u)&&(a=!0)),S&&(g?(o=o.add(g),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,ju:r,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((u,c)=>function(f,d){const g=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return g(f)-g(d)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new ws(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new rw,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=te(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const n=[];return e.forEach(r=>{this.Uu.has(r)||n.push(new _b(r))}),this.Uu.forEach(r=>{e.has(r)||n.push(new Eb(r))}),n}Xu(e){this.Lu=e.Wi,this.Uu=te();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return ws.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class kL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bL{constructor(e){this.key=e,this.ec=!1}}class TL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Ms(a=>Uk(a),df),this.ic=new Map,this.rc=new Set,this.oc=new Fe(V.comparator),this.uc=new Map,this.cc=new zg,this.ac={},this.hc=new Map,this.lc=ys.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function IL(t,e){const n=ML(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await Q2(n.localStore,Vn(e));n.isPrimaryClient&&pb(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await xL(n,e,r,a==="current",o.resumeToken)}return i}async function xL(t,e,n,r,i){t.dc=(f,d,g)=>async function(w,y,S,m){let p=y.view.zu(S);p.Mi&&(p=await Z0(w.localStore,y.query,!1).then(({documents:k})=>y.view.zu(k,p)));const v=m&&m.targetChanges.get(y.targetId),E=y.view.applyChanges(p,w.isPrimaryClient,v);return sw(w,y.targetId,E.Yu),E.snapshot}(t,f,d,g);const s=await Z0(t.localStore,e,!0),o=new _L(e,s.Wi),a=o.zu(s.documents),l=Ma.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);sw(t,n,u.Yu);const c=new kL(e,n,o);return t.sc.set(e,c),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function CL(t,e){const n=X(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!df(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await kp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),mb(n.remoteStore,r.targetId),bp(n,r.targetId)}).catch(Aa)):(bp(n,r.targetId),await kp(n.localStore,r.targetId,!0))}async function OL(t,e,n){const r=$L(t);try{const i=await function(s,o){const a=X(s),l=$e.now(),u=o.reduce((d,g)=>d.add(g.key),te());let c,f;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Bn(),w=te();return a.Ki.getEntries(d,u).next(y=>{g=y,g.forEach((S,m)=>{m.isValidDocument()||(w=w.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(y=>{c=y;const S=[];for(const m of o){const p=i2(m,c.get(m.key).overlayedDocument);p!=null&&S.push(new jr(m.key,p,Pk(p.value.mapValue),nn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,S,o)}).next(y=>{f=y;const S=y.applyToLocalDocumentSet(c,w);return a.documentOverlayCache.saveOverlays(d,y.batchId,S)})}).then(()=>({batchId:f.batchId,changes:Bk(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new Fe(oe)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await ja(r,i.changes),await wf(r.remoteStore)}catch(i){const s=Kg(i,"Failed to persist write");n.reject(s)}}async function kb(t,e){const n=X(t);try{const r=await G2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?me(o.ec):i.removedDocuments.size>0&&(me(o.ec),o.ec=!1))}),await ja(n,r,e)}catch(r){await Aa(r)}}function iw(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=X(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const f of c.listeners)f.Ru(o)&&(l=!0)}),l&&Xg(a)}(r.eventManager,e),i.length&&r.nc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function RL(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new Fe(V.comparator);o=o.insert(s,rt.newNoDocument(s,Q.min()));const a=te().add(s),l=new gf(Q.min(),new Map,new je(oe),o,a);await kb(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),Zg(r)}else await kp(r.localStore,e,!1).then(()=>bp(r,e,n)).catch(Aa)}async function PL(t,e){const n=X(t),r=e.batch.batchId;try{const i=await q2(n.localStore,e);Tb(n,r,null),bb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ja(n,i)}catch(i){await Aa(i)}}async function AL(t,e,n){const r=X(t);try{const i=await function(s,o){const a=X(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(me(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);Tb(r,e,n),bb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ja(r,i)}catch(i){await Aa(i)}}function bb(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Tb(t,e,n){const r=X(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function bp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc.wc(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(r=>{t.cc.containsKey(r)||Ib(t,r)})}function Ib(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(mb(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Zg(t))}function sw(t,e,n){for(const r of n)r instanceof Eb?(t.cc.addReference(r.key,e),NL(t,r)):r instanceof _b?(F("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||Ib(t,r.key)):G()}function NL(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(F("SyncEngine","New document in limbo: "+n),t.rc.add(r),Zg(t))}function Zg(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new V(de.fromString(e)),r=t.lc.next();t.uc.set(r,new bL(n)),t.oc=t.oc.insert(n,r),pb(t.remoteStore,new ti(Vn(ff(n.path)),r,2,Ng.ct))}}async function ja(t,e,n){const r=X(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Bg.Di(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,l){const u=X(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>R.forEach(l,f=>R.forEach(f.Vi,d=>u.persistence.referenceDelegate.addReference(c,f.targetId,d)).next(()=>R.forEach(f.Si,d=>u.persistence.referenceDelegate.removeReference(c,f.targetId,d)))))}catch(c){if(!Na(c))throw c;F("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const f=c.targetId;if(!c.fromCache){const d=u.Li.get(f),g=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(g);u.Li=u.Li.insert(f,w)}}}(r.localStore,s))}async function DL(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await cb(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new M(I.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ja(n,r.Qi)}}function LL(t,e){const n=X(t),r=n.uc.get(e);if(r&&r.ec)return te().add(r.key);{let i=te();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function ML(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=kb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RL.bind(null,e),e.nc.zo=SL.bind(null,e.eventManager),e.nc.wc=EL.bind(null,e.eventManager),e}function $L(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AL.bind(null,e),e}class ow{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=vf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return W2(this.persistence,new B2,e.initialUser,this.serializer)}createPersistence(e){return new z2(Vg.Fs,this.serializer)}createSharedClientState(e){return new J2}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>iw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DL.bind(null,this.syncEngine),await vL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new wL}createDatastore(e){const n=vf(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new nL(i));var i;return function(s,o,a,l){return new sL(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>iw(this.syncEngine,a,0),o=tw.D()?new tw:new Z2,new aL(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new TL(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=X(e);F("RemoteStore","RemoteStore shutting down."),n.du.add(5),await $a(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):zn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=xk.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(F("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Kg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Pd(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cb(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function aw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zL(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>nw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>nw(e.remoteStore,s)),t._onlineComponents=e}function UL(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function zL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!UL(n))throw n;Xu("Error using user provided cache. Falling back to memory cache: "+n),await Pd(t,new ow)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await Pd(t,new ow);return t._offlineComponents}async function xb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await aw(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await aw(t,new jL))),t._onlineComponents}function VL(t){return xb(t).then(e=>e.syncEngine)}async function ic(t){const e=await xb(t),n=e.eventManager;return n.onListen=IL.bind(null,e.syncEngine),n.onUnlisten=CL.bind(null,e.syncEngine),n}function BL(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new ev({next:f=>{s.enqueueAndForget(()=>Qg(i,c));const d=f.docs.has(o);!d&&f.fromCache?l.reject(new M(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&a&&a.source==="server"?l.reject(new M(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),c=new Jg(ff(o.path),u,{includeMetadataChanges:!0,xu:!0});return Yg(i,c)}(await ic(t),t.asyncQueue,e,n,r)),r.promise}function HL(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new ev({next:f=>{s.enqueueAndForget(()=>Qg(i,c)),f.fromCache&&a.source==="server"?l.reject(new M(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),c=new Jg(o,u,{includeMetadataChanges:!0,xu:!0});return Yg(i,c)}(await ic(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(t,e,n){if(!n)throw new M(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function WL(t,e,n,r){if(e===!0&&r===!0)throw new M(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function uw(t){if(!V.isDocumentKey(t))throw new M(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cw(t){if(V.isDocumentKey(t))throw new M(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Sf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function At(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sf(t);throw new M(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,WL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fw(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new gD;switch(n.type){case"firstParty":return new SD(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=lw.get(e);n&&(F("ComponentProvider","Removing Datastore"),lw.delete(e),n.terminate())}(this),Promise.resolve()}}function qL(t,e,n,r={}){var i;const s=(t=At(t,Ef))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Xu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=tt.MOCK_USER;else{o=FE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new M(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new tt(l)}t._authCredentials=new vD(new Ik(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}}class Ti{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ti(this.firestore,e,this._query)}}class _r extends Ti{constructor(e,n,r){super(e,n,ff(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new V(e))}withConverter(e){return new _r(this.firestore,e,this._path)}}function dw(t,e,...n){if(t=Ce(t),Cb("collection","path",e),t instanceof Ef){const r=de.fromString(e,...n);return cw(r),new _r(t,null,r)}{if(!(t instanceof at||t instanceof _r))throw new M(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return cw(r),new _r(t.firestore,null,r)}}function Dn(t,e,...n){if(t=Ce(t),arguments.length===1&&(e=xk.A()),Cb("doc","path",e),t instanceof Ef){const r=de.fromString(e,...n);return uw(r),new at(t,null,new V(r))}{if(!(t instanceof at||t instanceof _r))throw new M(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return uw(r),new at(t.firestore,t instanceof _r?t.converter:null,new V(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new db(this,"async_queue_retry"),this.qc=()=>{const n=Rd();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Rd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Rd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Nn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Na(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw zn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=n,n}enqueueAfterDelay(e,n,r){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=Gg.createAndSchedule(this,e,n,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&G()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function hw(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Or extends Ef{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new GL,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ob(this),this._firestoreClient.terminate()}}function KL(t,e){const n=typeof t=="object"?t:tg(),r=typeof t=="string"?t:e||"(default)",i=Hc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=$E("firestore");s&&qL(i,...s)}return i}function _f(t){return t._firestoreClient||Ob(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ob(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new ND(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new FL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ss(ct.fromBase64String(e))}catch(n){throw new M(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ss(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YL=/^__.*__$/;class QL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new La(e,this.data,n,this.fieldTransforms)}}class Rb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new jr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Pb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class rv{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new rv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.ea(e),i}na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return sc(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Pb(this.Yc)&&YL.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class XL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||vf(e)}ua(e,n,r,i=!1){return new rv({Yc:e,methodName:n,oa:r,path:it.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bf(t){const e=t._freezeSettings(),n=vf(t._databaseId);return new XL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ab(t,e,n,r,i,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,i);iv("Data must be an object, but it was:",o,r);const a=Nb(r,o);let l,u;if(s.merge)l=new Rt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const f of s.mergeFields){const d=Tp(e,f,n);if(!o.contains(d))throw new M(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Lb(c,d)||c.push(d)}l=new Rt(c),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new QL(new St(a),l,u)}class Tf extends tv{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Tf}}function JL(t,e,n,r){const i=t.ua(1,e,n);iv("Data must be an object, but it was:",i,r);const s=[],o=St.empty();ki(r,(l,u)=>{const c=sv(e,l,n);u=Ce(u);const f=i.na(c);if(u instanceof Tf)s.push(c);else{const d=Fa(u,f);d!=null&&(s.push(c),o.set(c,d))}});const a=new Rt(s);return new Rb(o,a,i.fieldTransforms)}function ZL(t,e,n,r,i,s){const o=t.ua(1,e,n),a=[Tp(e,r,n)],l=[i];if(s.length%2!=0)throw new M(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Tp(e,s[d])),l.push(s[d+1]);const u=[],c=St.empty();for(let d=a.length-1;d>=0;--d)if(!Lb(u,a[d])){const g=a[d];let w=l[d];w=Ce(w);const y=o.na(g);if(w instanceof Tf)u.push(g);else{const S=Fa(w,y);S!=null&&(u.push(g),c.set(g,S))}}const f=new Rt(u);return new Rb(c,f,o.fieldTransforms)}function eM(t,e,n,r=!1){return Fa(n,t.ua(r?4:3,e))}function Fa(t,e){if(Db(t=Ce(t)))return iv("Unsupported field value:",e,t),Nb(t,e);if(t instanceof tv)return function(n,r){if(!Pb(r.Yc))throw r.ia(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Fa(o,r.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ce(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return JD(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=$e.fromDate(n);return{timestampValue:nc(r.serializer,i)}}if(n instanceof $e){const i=new $e(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:nc(r.serializer,i)}}if(n instanceof nv)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ss)return{bytesValue:ib(r.serializer,n._byteString)};if(n instanceof at){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ug(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ia(`Unsupported field value: ${Sf(n)}`)}(t,e)}function Nb(t,e){const n={};return Ck(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ki(t,(r,i)=>{const s=Fa(i,e.Xc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Db(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof nv||t instanceof Ss||t instanceof at||t instanceof tv)}function iv(t,e,n){if(!Db(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Sf(n);throw r==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+r)}}function Tp(t,e,n){if((e=Ce(e))instanceof kf)return e._internalPath;if(typeof e=="string")return sv(t,e);throw sc("Field path arguments must be of type string or ",t,!1,void 0,n)}const tM=new RegExp("[~\\*/\\[\\]]");function sv(t,e,n){if(e.search(tM)>=0)throw sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kf(...e.split("."))._internalPath}catch{throw sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function sc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new M(I.INVALID_ARGUMENT,a+t+l)}function Lb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ov("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nM extends Mb{data(){return super.data()}}function ov(t,e){return typeof e=="string"?sv(t,e):e instanceof kf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class av{}class rM extends av{}function iM(t,e,...n){let r=[];e instanceof av&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof lv).length,o=i.filter(a=>a instanceof If).length;if(s>1||s>0&&o>0)throw new M(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class If extends rM{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new If(e,n,r)}_apply(e){const n=this._parse(e);return jb(e._query,n),new Ti(e.firestore,e.converter,vp(e._query,n))}_parse(e){const n=bf(e.firestore);return function(i,s,o,a,l,u,c){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new M(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){mw(c,u);const d=[];for(const g of c)d.push(pw(a,i,g));f={arrayValue:{values:d}}}else f=pw(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||mw(c,u),f=eM(o,s,c,u==="in"||u==="not-in");return Ne.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function sM(t,e,n){const r=e,i=ov("where",t);return If._create(i,r,n)}class lv extends av{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new lv(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:on.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)jb(s,a),s=vp(s,a)}(e._query,n),new Ti(e.firestore,e.converter,vp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function pw(t,e,n){if(typeof(n=Ce(n))=="string"){if(n==="")throw new M(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fk(e)&&n.indexOf("/")!==-1)throw new M(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(de.fromString(n));if(!V.isDocumentKey(r))throw new M(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return j0(t,new V(r))}if(n instanceof at)return j0(t,n._key);throw new M(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sf(n)}.`)}function mw(t,e){if(!Array.isArray(t)||t.length===0)throw new M(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jb(t,e){if(e.isInequality()){const r=$g(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new M(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=jk(t);s!==null&&oM(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function oM(t,e,n){if(!n.isEqual(e))throw new M(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class aM{convertValue(e,n="none"){switch(hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ms(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const r={};return ki(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new nv(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Rk(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Jo(e));default:return null}}convertTimestamp(e){const n=xr(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);me(ub(r));const i=new Zo(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||zn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ub extends Mb{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ru(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ov("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ru extends Ub{data(e={}){return super.data(e)}}class zb{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new io(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ru(this._firestore,this._userDataWriter,r.key,r,new io(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new ru(r._firestore,r._userDataWriter,o.doc.key,o.doc,new io(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ru(r._firestore,r._userDataWriter,o.doc.key,o.doc,new io(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:lM(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uM(t){t=At(t,at);const e=At(t.firestore,Or);return BL(_f(e),t._key).then(n=>Hb(e,t,n))}class uv extends aM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ss(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,n)}}function cM(t){t=At(t,Ti);const e=At(t.firestore,Or),n=_f(e),r=new uv(e);return $b(t._query),HL(n,t._query).then(i=>new zb(e,r,t,i))}function Vb(t,e,n){t=At(t,at);const r=At(t.firestore,Or),i=Fb(t.converter,e,n);return cv(r,[Ab(bf(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,nn.none())])}function oc(t,e,n,...r){t=At(t,at);const i=At(t.firestore,Or),s=bf(i);let o;return o=typeof(e=Ce(e))=="string"||e instanceof kf?ZL(s,"updateDoc",t._key,e,n,r):JL(s,"updateDoc",t._key,e),cv(i,[o.toMutation(t._key,nn.exists(!0))])}function fM(t,e){const n=At(t.firestore,Or),r=Dn(t),i=Fb(t.converter,e);return cv(n,[Ab(bf(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,nn.exists(!1))]).then(()=>r)}function Bb(t,...e){var n,r,i;t=Ce(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||hw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(hw(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,u,c;if(t instanceof at)u=At(t.firestore,Or),c=ff(t._key.path),l={next:f=>{e[o]&&e[o](Hb(u,t,f))},error:e[o+1],complete:e[o+2]};else{const f=At(t,Ti);u=At(f.firestore,Or),c=f._query;const d=new uv(u);l={next:g=>{e[o]&&e[o](new zb(u,d,f,g))},error:e[o+1],complete:e[o+2]},$b(t._query)}return function(f,d,g,w){const y=new ev(w),S=new Jg(d,y,g);return f.asyncQueue.enqueueAndForget(async()=>Yg(await ic(f),S)),()=>{y.yc(),f.asyncQueue.enqueueAndForget(async()=>Qg(await ic(f),S))}}(_f(u),c,a,l)}function cv(t,e){return function(n,r){const i=new Nn;return n.asyncQueue.enqueueAndForget(async()=>OL(await VL(n),r,i)),i.promise}(_f(t),e)}function Hb(t,e,n){const r=n.docs.get(e._key),i=new uv(t);return new Ub(t,i,e._key,r,new io(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ls=n})(Si),ui(new Tr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Or(new yD(n.getProvider("auth-internal")),new _D(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zo(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),gn(N0,"3.10.1",t),gn(N0,"3.10.1","esm2017")})();var dM="firebase",hM="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn(dM,hM,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="firebasestorage.googleapis.com",pM="storageBucket",mM=2*60*1e3,gM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends kn{constructor(e,n,r=0){super(Ad(e),`Firebase Storage: ${n} (${Ad(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,bn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ad(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _n;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_n||(_n={}));function Ad(t){return"storage/"+t}function vM(){const t="An unknown error occurred, please check the error payload for server response.";return new bn(_n.UNKNOWN,t)}function yM(){return new bn(_n.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wM(){return new bn(_n.CANCELED,"User canceled the upload/download.")}function SM(t){return new bn(_n.INVALID_URL,"Invalid URL '"+t+"'.")}function EM(t){return new bn(_n.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function gw(t){return new bn(_n.INVALID_ARGUMENT,t)}function qb(){return new bn(_n.APP_DELETED,"The Firebase app was deleted.")}function _M(t){return new bn(_n.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Jt.makeFromUrl(e,n)}catch{return new Jt(e,"")}if(r.path==="")return r;throw EM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${c}/b/${i}/o${d}`,"i"),w={bucket:1,path:3},y=n===Wb?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",m=new RegExp(`^https?://${y}/${i}/${S}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:g,indices:w,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<v.length;E++){const k=v[E],T=k.regex.exec(e);if(T){const x=T[k.indices.bucket];let b=T[k.indices.path];b||(b=""),r=new Jt(x,b),k.postModify(r);break}}if(r==null)throw SM(e);return r}}class kM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...S){u||(u=!0,e.apply(null,S))}function f(S){i=setTimeout(()=>{i=null,t(g,l())},S)}function d(){s&&clearTimeout(s)}function g(S,...m){if(u){d();return}if(S){d(),c.call(null,S,...m);return}if(l()||o){d(),c.call(null,S,...m);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,f(v)}let w=!1;function y(S){w||(w=!0,d(),!u&&(i!==null?(S||(a=2),clearTimeout(i),f(0)):S||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function TM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IM(t){return t!==void 0}function vw(t,e,n,r){if(r<e)throw gw(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw gw(`Invalid value for '${t}'. Expected ${n} or less.`)}function xM(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ac;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ac||(ac={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(e,n,r,i,s,o,a,l,u,c,f,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=f,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,w)=>{this.resolve_=g,this.reject_=w,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new _l(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ac.NO_ERROR,l=s.getStatus();if(!a||CM(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===ac.ABORT;r(!1,new _l(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new _l(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());IM(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=vM();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?qb():wM();o(l)}else{const l=yM();o(l)}};this.canceled_?n(!1,new _l(!1,null,!0)):this.backoffId_=bM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&TM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _l{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function RM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function PM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function AM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function NM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function DM(t,e,n,r,i,s,o=!0){const a=xM(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return AM(u,e),RM(u,n),PM(u,s),NM(u,r),new OM(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function MM(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n){this._service=e,n instanceof Jt?this._location=n:this._location=Jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new lc(e,n)}get root(){const e=new Jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return MM(this._location.path)}get storage(){return this._service}get parent(){const e=LM(this._location.path);if(e===null)return null;const n=new Jt(this._location.bucket,e);return new lc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw _M(e)}}function yw(t,e){const n=e==null?void 0:e[pM];return n==null?null:Jt.makeFromBucketSpec(n,t)}function $M(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:FE(i,t.app.options.projectId))}class jM{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Wb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mM,this._maxUploadRetryTime=gM,this._requests=new Set,i!=null?this._bucket=Jt.makeFromBucketSpec(i,this._host):this._bucket=yw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jt.makeFromBucketSpec(this._url,e):this._bucket=yw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){vw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){vw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new lc(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new kM(qb());{const o=DM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const ww="@firebase/storage",Sw="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb="storage";function FM(t=tg(),e){t=Ce(t);const r=Hc(t,Gb).getImmediate({identifier:e}),i=$E("storage");return i&&UM(r,...i),r}function UM(t,e,n,r={}){$M(t,e,n,r)}function zM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new jM(n,r,i,e,Si)}function VM(){ui(new Tr(Gb,zM,"PUBLIC").setMultipleInstances(!0)),gn(ww,Sw,""),gn(ww,Sw,"esm2017")}VM();const BM={apiKey:"AIzaSyCyuDzfZyKIXRht6p_s-nNErVhnzBl9nZ8",authDomain:"juegosflix2.firebaseapp.com",projectId:"juegosflix2",storageBucket:"juegosflix2.firebasestorage.app",messagingSenderId:"725945655755",appId:"1:725945655755:web:cdf9a12066f6037a6cd64e",measurementId:"G-LFXF0WMRL5"},fv=VE(BM),Ks=hN(fv),Sn=KL(fv);FM(fv);const Kb=_.createContext({});function HM({children:t}){const[e,n]=_.useState(null),[r,i]=_.useState(!0),s=async(d,g,w)=>{const S=(await YP(Ks,d,g)).user;await Vb(Dn(Sn,"users",S.uid),{username:w,description:"",profilePicture:"https://picsum.photos/150",email:d}),await ep(S,{displayName:w,photoURL:"https://picsum.photos/150"}),n({...S,displayName:w,photoURL:"https://picsum.photos/150"})},o=(d,g)=>QP(Ks,d,g),a=()=>tA(Ks),l=async d=>{const g="https://api.cloudinary.com/v1_1/dhyg8srva/upload",w=new FormData;w.append("file",d),w.append("upload_preset","precioso");try{const y=await fetch(g,{method:"POST",body:w});if(!y.ok)throw new Error("Error uploading image");const S=await y.json();if(console.log("Cloudinary response data:",S),S&&S.secure_url)return console.log("Image uploaded successfully, URL:",S.secure_url),S.secure_url;throw new Error("Cloudinary did not return a valid URL")}catch(y){throw console.error("Cloudinary upload error:",y),y}},u=async d=>{if(e)try{await oc(Dn(Sn,"users",e.uid),{profilePicture:d}),await ep(Ks.currentUser,{photoURL:d}),n(g=>({...g,photoURL:d}))}catch(g){console.error("Error updating profile image:",g)}},c=async d=>{if(e)try{await oc(Dn(Sn,"users",e.uid),{description:d}),n(g=>({...g,description:d}))}catch(g){console.error("Error updating user description:",g)}};_.useEffect(()=>{const d=eA(Ks,g=>{n(g),i(!1)});return()=>d()},[]);const f=_.useMemo(()=>({signup:s,login:o,logout:a,user:e,loading:r,updateProfileImage:u,updateUserDescription:c,uploadImageToCloudinary:l}),[e,r]);return h.jsx(Kb.Provider,{value:f,children:t})}const qt=()=>_.useContext(Kb);const Kt=()=>{const t=new Date().getFullYear();return h.jsxs("footer",{style:kl.footer,children:[h.jsxs("p",{children:["© ",t," JuegosFlix. All rights reserved."]}),h.jsxs("div",{style:kl.links,children:[h.jsx(Tt,{to:"/PrivacyNotice",style:kl.link,children:"Privacy Notice"}),h.jsx("br",{}),h.jsx(Tt,{to:"/LegalNotice",style:kl.link,children:"Legal Notice"})]})]})},kl={footer:{textAlign:"center",padding:"1rem",color:"#fff",marginTop:"2rem",width:"100%"},links:{marginTop:"0.5rem"},link:{color:"#61dafb",textDecoration:"none"}};function WM(){const{login:t,user:e}=qt(),n=ga(),r=_.useRef(),i=_.useRef(),[s,o]=_.useState(""),[a,l]=_.useState(""),[u,c]=_.useState(""),[f,d]=_.useState(!1);_.useEffect(()=>{r.current.focus()},[]),_.useEffect(()=>{c("")},[s,a]);const g=async w=>{w.preventDefault();try{await t(s,a),d(!0),o(""),l("")}catch(y){c(y.message),i.current.focus()}};return h.jsx(h.Fragment,{children:f&&setTimeout(()=>n("/"),2e3)?h.jsxs("section",{className:"login-section",children:[h.jsx("h1",{children:"You logeed in"}),h.jsx("br",{}),h.jsxs("p",{children:["Welcome ",e.displayName]})]}):h.jsxs("section",{className:"login-section",children:[h.jsx("p",{ref:i,className:u?"errmsg":"offscreen","aria-live":"assertive",children:u}),h.jsx("h1",{children:"Log in"}),h.jsxs("form",{onSubmit:g,children:[h.jsx("label",{htmlFor:"username",children:"Email:"}),h.jsx("input",{type:"text",id:"username",ref:r,autoComplete:"off",onChange:w=>o(w.target.value),value:s,required:!0}),h.jsx("label",{htmlFor:"password",children:"Password:"}),h.jsx("input",{type:"password",id:"password",onChange:w=>l(w.target.value),value:a,required:!0}),h.jsx("button",{className:"inibtn",children:"Log in"})]}),h.jsxs("p",{children:["Need to Register?",h.jsx("br",{}),h.jsx("span",{className:"line",children:h.jsx(Tt,{to:"/register",children:"Register"})})]}),h.jsx(Kt,{})]})})}function Ua({onClick:t,isActive:e}){return h.jsx("button",{onClick:t,children:h.jsx("svg",{width:"24px",height:"24px",strokeWidth:"1.5",viewBox:"0 0 24 24",fill:e?"#FFFF00":"none",xmlns:"http://www.w3.org/2000/svg",color:"#000000",children:h.jsx("path",{d:"M8.587 8.236l2.598-5.232a.911.911 0 011.63 0l2.598 5.232 5.808.844a.902.902 0 01.503 1.542l-4.202 4.07.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75-4.202-4.07a.902.902 0 01.503-1.54l5.808-.845z",stroke:"#FFFF00",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}function za(){const[t,e]=_.useState([]),{user:n}=qt(),r=()=>{if(n){const i=Dn(Sn,"users",n.uid),s=Bb(i,o=>{if(o.exists()){const l=o.data().videogameIds||[];e(l)}});return()=>{s()}}};return _.useEffect(()=>{const i=r();return()=>{i&&i()}},[n]),{favoritesIds:t,getFavoritesFromDDBB:r}}const Va=async({selectedVideogame:t,user:e,handleFavoriteUpdate:n})=>{if(e)try{const r=Dn(Sn,"users",e.uid),i=await uM(r),s=i.exists()?i.data():{},o=(s==null?void 0:s.videogameIds)||[],a=o.indexOf(t);o.includes(t)?o.splice(a,1):o.push(t),await Vb(r,{videogameIds:o},{merge:!0}),n(null)}catch{throw new Error("Ha ocurrido un error al añadir el videojuego a tus favoritos. Inténtalo de nuevo más tarde.")}};function Ip({videogame:t}){const[e,n]=_.useState(null),{favoritesIds:r}=za(),{user:i}=qt();function s(o){n(o)}return h.jsxs("li",{className:"videogames-element",children:[h.jsxs("h3",{children:[t.title," ",h.jsx("br",{}),h.jsx("small",{children:t.year})]}),h.jsx(Tt,{to:"/videogames/"+t.id,children:h.jsxs("figure",{className:"image-container",children:[h.jsx("img",{src:t.poster||"https://live.staticflickr.com/2886/34427545586_37151702ce_z.jpg",alt:`${t.Title} poster`}),h.jsx(Ua,{onClick:o=>{o.preventDefault(),n(t.id),Va({selectedVideogame:t.id,user:i,handleFavoriteUpdate:s})},isActive:e===t.id||r.includes(t.id)})]})})]},t.id)}const iu="90a1de72514b4eec96ab758896c2f57b",Ba="https://api.rawg.io/api/games?key=90a1de72514b4eec96ab758896c2f57b",su="https://api.rawg.io/api/games",qM=async({search:t})=>{if(t!=="")try{const r=(await(await fetch(`${Ba}&search=${t}&search_precise=true&ordering=-metacritic&page_size=25`)).json()).results;return r==null?void 0:r.map(i=>({id:i.id,title:i.name,year:i.released?new Date(i.released).getFullYear():i.released,poster:i.background_image}))}catch{throw new Error("Error searching videogames")}},GM=async({favoriteIds:t})=>{const e=t.map(n=>fetch(`${su}/${n}?key=${iu}&language=es`).then(r=>r.json()));try{const n=await Promise.all(e);return console.log(n),n==null?void 0:n.map(r=>({id:r.id,title:r.name,year:r.released?new Date(r.released).getFullYear():r.released,poster:r.background_image}))}catch{throw new Error("Error getting favorite games")}},KM=async({id:t})=>{try{const e=fetch(`${su}/${t}?key=${iu}&language=es`).then(u=>u.json()),n=fetch(`${su}/${t}/movies?key=${iu}&language=es`).then(u=>u.json()),r=fetch(`${su}/${t}/screenshots?key=${iu}&language=es`).then(u=>u.json()),[i,s,o]=await Promise.all([e,n,r]);console.log(i),console.log(s),console.log(o);const a=s.results&&s.results.length>0?s.results[0].data.max:null,l=o&&o.results&&o.results.length>0?o.results.map(u=>u.image):[];return{id:i.id,title:i.name,year:i.released?new Date(i.released).getFullYear():i.released,poster:i.background_image,description:i.description_raw,trailer:a,rating:i.metacritic,screenshots:l}}catch{throw new Error("Error getting selected game")}},YM=async()=>{try{const n=(await(await fetch(`${Ba}&ordering=-metacritic&page_size=25`)).json()).results;return n==null?void 0:n.map(r=>({id:r.id,title:r.name,year:r.released?new Date(r.released).getFullYear():r.released,poster:r.background_image}))}catch{throw new Error("Error searching videogames")}},QM=async t=>{try{const r=(await(await fetch(`${Ba}&genres=${t}&ordering=-metacritic&page_size=25`)).json()).results;return r==null?void 0:r.map(i=>({id:i.id,title:i.name,year:i.released?new Date(i.released).getFullYear():i.released,poster:i.background_image}))}catch{throw new Error("Error searching games by genre")}},XM=async()=>{try{const n=(await(await fetch(`${Ba}&dates=2025-01-01,2025-12-31&ordering=-added&page_size=10`)).json()).results;return n==null?void 0:n.map(r=>({id:r.id,title:r.name,year:r.released?new Date(r.released).getFullYear():r.released,poster:r.background_image}))}catch{throw new Error("Error searching most anticipated games for 2025")}},JM=async()=>{try{const n=(await(await fetch(`${Ba}&dates=2024-01-01,2024-12-31&ordering=-metacritic&page_size=10`)).json()).results;return n==null?void 0:n.map(r=>({id:r.id,title:r.name,year:r.released?new Date(r.released).getFullYear():r.released,poster:r.background_image}))}catch{throw new Error("Error searching best games of 2024")}};function ZM(){const[t,e]=_.useState([]),[n,r]=_.useState(!0),[i,s]=_.useState();return{fetchMostAnticipatedGames:async()=>{r(!0),s("");try{const a=await XM();a.length===0?s("No se han encontrado resultados"):e(a)}catch{s("Error obteniendo videojuegos")}finally{r(!1)}},isLoading:n,isError:i,mostAnticipatedGames:t}}function e$(){const[t,e]=_.useState([]),[n,r]=_.useState(!0),[i,s]=_.useState();return{fetchBestGames:()=>{s(""),r(!0),JM().then(a=>{a.length===0?s("No se han encontrado resultados"):e(a)}).catch(a=>{console.error("Error fetching best games:",a)}).finally(()=>r(!1))},bestGames:t,isErrorBestGames:i,isLoadingBestGames:n}}function uc(t){return uc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},uc(t)}function bl(t,e,n,r){if(uc(n)!==r)throw new TypeError("Invalid prop '".concat(e,"' of type '").concat(uc(n),"' supplied to '").concat(t,"', expected '").concat(r,"'."))}function t$(t,e){e===void 0&&(e={});var n=e.insertAt;if(t&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}var n$="RaceBy-module_container__pu79P";function pi(t){var e=t.size,n=e===void 0?80:e,r=t.color,i=r===void 0?"black":r,s=t.lineWeight,o=s===void 0?5:s,a=t.speed,l=a===void 0?1.4:a;return bl("RaceBy","size",n,"number"),bl("RaceBy","color",i,"string"),bl("RaceBy","speed",l,"number"),bl("RaceBy","lineWeight",o,"number"),Ic.createElement("div",{className:n$,style:{"--uib-size":n+"px","--uib-color":i,"--uib-line-weight":o+"px","--uib-speed":l+"s"}})}t$('.RaceBy-module_container__pu79P{align-items:center;border-radius:calc(var(--uib-line-weight)/2);display:flex;height:var(--uib-line-weight);justify-content:center;overflow:hidden;position:relative;transform:translateZ(0);width:var(--uib-size)}.RaceBy-module_container__pu79P:before{background-color:var(--uib-color);content:"";height:100%;left:0;opacity:.1;position:absolute;top:0;width:100%}.RaceBy-module_container__pu79P:after{animation:RaceBy-module_raceBy__g-TGB var(--uib-speed) ease-in-out infinite;background-color:var(--uib-color);border-radius:calc(var(--uib-line-weight)/2);content:"";height:100%;transform:translateX(-100%);width:100%}@keyframes RaceBy-module_raceBy__g-TGB{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}');function r$(){const{isError:t,isLoading:e,fetchMostAnticipatedGames:n,mostAnticipatedGames:r}=ZM(),{fetchBestGames:i,bestGames:s,isErrorBestGames:o,isLoadingBestGames:a}=e$();return _.useEffect(()=>{n()},[]),_.useEffect(()=>{i()},[]),h.jsxs(h.Fragment,{children:[h.jsx("h2",{children:"The most anticipated games of 2025"}),h.jsx("div",{className:"separator",children:h.jsx("hr",{})}),e?h.jsx(pi,{size:280,lineWeight:7,speed:1.4,color:"white"}):h.jsx("ul",{className:"videogames-list",children:r.length>0?r.map(l=>h.jsx(Ip,{videogame:l},l.id)):h.jsx("p",{children:t})}),h.jsx("h2",{children:"The best video games of 2024"}),h.jsx("div",{className:"separator",children:h.jsx("hr",{})}),a?h.jsx(pi,{size:280,lineWeight:7,speed:1.4,color:"white"}):h.jsx("ul",{className:"videogames-list",children:s.length>0?s.map(l=>h.jsx(Ip,{videogame:l},l.id)):h.jsx("p",{children:o})})]})}var i$={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Tl=i$,s$={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Il=s$,xl={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};function Ew(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ew(Object(n),!0).forEach(function(r){Ue(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ew(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function cc(t){return cc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},cc(t)}function o$(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a$(t,e,n){return e&&_w(t.prototype,e),n&&_w(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ue(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function dv(t,e){return u$(t)||f$(t,e)||Yb(t,e)||h$()}function Ha(t){return l$(t)||c$(t)||Yb(t)||d$()}function l$(t){if(Array.isArray(t))return xp(t)}function u$(t){if(Array.isArray(t))return t}function c$(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function f$(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function Yb(t,e){if(t){if(typeof t=="string")return xp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xp(t,e)}}function xp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d$(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var kw=function(){},hv={},Qb={},Xb=null,Jb={mark:kw,measure:kw};try{typeof window<"u"&&(hv=window),typeof document<"u"&&(Qb=document),typeof MutationObserver<"u"&&(Xb=MutationObserver),typeof performance<"u"&&(Jb=performance)}catch{}var p$=hv.navigator||{},bw=p$.userAgent,Tw=bw===void 0?"":bw,Rr=hv,pe=Qb,Iw=Xb,Cl=Jb;Rr.document;var Kn=!!pe.documentElement&&!!pe.head&&typeof pe.addEventListener=="function"&&typeof pe.createElement=="function",Zb=~Tw.indexOf("MSIE")||~Tw.indexOf("Trident/"),Ol,Rl,Pl,Al,Nl,Hn="___FONT_AWESOME___",Cp=16,eT="fa",tT="svg-inline--fa",mi="data-fa-i2svg",Op="data-fa-pseudo-element",m$="data-fa-pseudo-element-pending",pv="data-prefix",mv="data-icon",xw="fontawesome-i2svg",g$="async",v$=["HTML","HEAD","STYLE","SCRIPT"],nT=function(){try{return!0}catch{return!1}}(),fe="classic",Te="sharp",gv=[fe,Te];function Wa(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[fe]}})}var ra=Wa((Ol={},Ue(Ol,fe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ue(Ol,Te,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ol)),ia=Wa((Rl={},Ue(Rl,fe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ue(Rl,Te,{solid:"fass",regular:"fasr",light:"fasl"}),Rl)),sa=Wa((Pl={},Ue(Pl,fe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ue(Pl,Te,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Pl)),y$=Wa((Al={},Ue(Al,fe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ue(Al,Te,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Al)),w$=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,rT="fa-layers-text",S$=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,E$=Wa((Nl={},Ue(Nl,fe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ue(Nl,Te,{900:"fass",400:"fasr",300:"fasl"}),Nl)),iT=[1,2,3,4,5,6,7,8,9,10],_$=iT.concat([11,12,13,14,15,16,17,18,19,20]),k$=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Yr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},oa=new Set;Object.keys(ia[fe]).map(oa.add.bind(oa));Object.keys(ia[Te]).map(oa.add.bind(oa));var b$=[].concat(gv,Ha(oa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Yr.GROUP,Yr.SWAP_OPACITY,Yr.PRIMARY,Yr.SECONDARY]).concat(iT.map(function(t){return"".concat(t,"x")})).concat(_$.map(function(t){return"w-".concat(t)})),_o=Rr.FontAwesomeConfig||{};function T$(t){var e=pe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function I$(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(pe&&typeof pe.querySelector=="function"){var x$=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];x$.forEach(function(t){var e=dv(t,2),n=e[0],r=e[1],i=I$(T$(n));i!=null&&(_o[r]=i)})}var sT={styleDefault:"solid",familyDefault:"classic",cssPrefix:eT,replacementClass:tT,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};_o.familyPrefix&&(_o.cssPrefix=_o.familyPrefix);var Es=D(D({},sT),_o);Es.autoReplaceSvg||(Es.observeMutations=!1);var $={};Object.keys(sT).forEach(function(t){Object.defineProperty($,t,{enumerable:!0,set:function(n){Es[t]=n,ko.forEach(function(r){return r($)})},get:function(){return Es[t]}})});Object.defineProperty($,"familyPrefix",{enumerable:!0,set:function(e){Es.cssPrefix=e,ko.forEach(function(n){return n($)})},get:function(){return Es.cssPrefix}});Rr.FontAwesomeConfig=$;var ko=[];function C$(t){return ko.push(t),function(){ko.splice(ko.indexOf(t),1)}}var Xn=Cp,hn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function O$(t){if(!(!t||!Kn)){var e=pe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=pe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return pe.head.insertBefore(e,r),t}}var R$="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function aa(){for(var t=12,e="";t-- >0;)e+=R$[Math.random()*62|0];return e}function js(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function vv(t){return t.classList?js(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function oT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function P$(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(oT(t[n]),'" ')},"").trim()}function xf(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function yv(t){return t.size!==hn.size||t.x!==hn.x||t.y!==hn.y||t.rotate!==hn.rotate||t.flipX||t.flipY}function A$(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function N$(t){var e=t.transform,n=t.width,r=n===void 0?Cp:n,i=t.height,s=i===void 0?Cp:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&Zb?l+="translate(".concat(e.x/Xn-r/2,"em, ").concat(e.y/Xn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Xn,"em), calc(-50% + ").concat(e.y/Xn,"em)) "):l+="translate(".concat(e.x/Xn,"em, ").concat(e.y/Xn,"em) "),l+="scale(".concat(e.size/Xn*(e.flipX?-1:1),", ").concat(e.size/Xn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var D$=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
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
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
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
}`;function aT(){var t=eT,e=tT,n=$.cssPrefix,r=$.replacementClass,i=D$;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Cw=!1;function Nd(){$.autoAddCss&&!Cw&&(O$(aT()),Cw=!0)}var L$={mixout:function(){return{dom:{css:aT,insertCss:Nd}}},hooks:function(){return{beforeDOMElementCreation:function(){Nd()},beforeI2svg:function(){Nd()}}}},Wn=Rr||{};Wn[Hn]||(Wn[Hn]={});Wn[Hn].styles||(Wn[Hn].styles={});Wn[Hn].hooks||(Wn[Hn].hooks={});Wn[Hn].shims||(Wn[Hn].shims=[]);var Zt=Wn[Hn],lT=[],M$=function t(){pe.removeEventListener("DOMContentLoaded",t),fc=1,lT.map(function(e){return e()})},fc=!1;Kn&&(fc=(pe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(pe.readyState),fc||pe.addEventListener("DOMContentLoaded",M$));function $$(t){Kn&&(fc?setTimeout(t,0):lT.push(t))}function qa(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?oT(t):"<".concat(e," ").concat(P$(r),">").concat(s.map(qa).join(""),"</").concat(e,">")}function Ow(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var j$=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Dd=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?j$(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function F$(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Rp(t){var e=F$(t);return e.length===1?e[0].toString(16):null}function U$(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Rw(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Pp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Rw(e);typeof Zt.hooks.addPack=="function"&&!i?Zt.hooks.addPack(t,Rw(e)):Zt.styles[t]=D(D({},Zt.styles[t]||{}),s),t==="fas"&&Pp("fa",e)}var Dl,Ll,Ml,Hi=Zt.styles,z$=Zt.shims,V$=(Dl={},Ue(Dl,fe,Object.values(sa[fe])),Ue(Dl,Te,Object.values(sa[Te])),Dl),wv=null,uT={},cT={},fT={},dT={},hT={},B$=(Ll={},Ue(Ll,fe,Object.keys(ra[fe])),Ue(Ll,Te,Object.keys(ra[Te])),Ll);function H$(t){return~b$.indexOf(t)}function W$(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!H$(i)?i:null}var pT=function(){var e=function(s){return Dd(Hi,function(o,a,l){return o[l]=Dd(a,s,{}),o},{})};uT=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),cT=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),hT=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Hi||$.autoFetchSvg,r=Dd(z$,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});fT=r.names,dT=r.unicodes,wv=Cf($.styleDefault,{family:$.familyDefault})};C$(function(t){wv=Cf(t.styleDefault,{family:$.familyDefault})});pT();function Sv(t,e){return(uT[t]||{})[e]}function q$(t,e){return(cT[t]||{})[e]}function Qr(t,e){return(hT[t]||{})[e]}function mT(t){return fT[t]||{prefix:null,iconName:null}}function G$(t){var e=dT[t],n=Sv("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Pr(){return wv}var Ev=function(){return{prefix:null,iconName:null,rest:[]}};function Cf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?fe:n,i=ra[r][t],s=ia[r][t]||ia[r][i],o=t in Zt.styles?t:null;return s||o||null}var Pw=(Ml={},Ue(Ml,fe,Object.keys(sa[fe])),Ue(Ml,Te,Object.keys(sa[Te])),Ml);function Of(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ue(e,fe,"".concat($.cssPrefix,"-").concat(fe)),Ue(e,Te,"".concat($.cssPrefix,"-").concat(Te)),e),o=null,a=fe;(t.includes(s[fe])||t.some(function(u){return Pw[fe].includes(u)}))&&(a=fe),(t.includes(s[Te])||t.some(function(u){return Pw[Te].includes(u)}))&&(a=Te);var l=t.reduce(function(u,c){var f=W$($.cssPrefix,c);if(Hi[c]?(c=V$[a].includes(c)?y$[a][c]:c,o=c,u.prefix=c):B$[a].indexOf(c)>-1?(o=c,u.prefix=Cf(c,{family:a})):f?u.iconName=f:c!==$.replacementClass&&c!==s[fe]&&c!==s[Te]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=o==="fa"?mT(u.iconName):{},g=Qr(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||g||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Hi.far&&Hi.fas&&!$.autoFetchSvg&&(u.prefix="fas")}return u},Ev());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Te&&(Hi.fass||$.autoFetchSvg)&&(l.prefix="fass",l.iconName=Qr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Pr()||"fas"),l}var K$=function(){function t(){o$(this,t),this.definitions={}}return a$(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=D(D({},n.definitions[a]||{}),o[a]),Pp(a,o[a]);var l=sa[fe][a];l&&Pp(l,o[a]),pT()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),t}(),Aw=[],Wi={},rs={},Y$=Object.keys(rs);function Q$(t,e){var n=e.mixoutsTo;return Aw=t,Wi={},Object.keys(rs).forEach(function(r){Y$.indexOf(r)===-1&&delete rs[r]}),Aw.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),cc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Wi[o]||(Wi[o]=[]),Wi[o].push(s[o])})}r.provides&&r.provides(rs)}),n}function Ap(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Wi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function gi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Wi[t]||[];i.forEach(function(s){s.apply(null,n)})}function qn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return rs[t]?rs[t].apply(null,e):void 0}function Np(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Pr();if(e)return e=Qr(n,e)||e,Ow(gT.definitions,n,e)||Ow(Zt.styles,n,e)}var gT=new K$,X$=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,gi("noAuto")},J$={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Kn?(gi("beforeI2svg",e),qn("pseudoElements2svg",e),qn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,$$(function(){ej({autoReplaceSvgRoot:n}),gi("watch",e)})}},Z$={icon:function(e){if(e===null)return null;if(cc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Qr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Cf(e[0]);return{prefix:r,iconName:Qr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat($.cssPrefix,"-"))>-1||e.match(w$))){var i=Of(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Pr(),iconName:Qr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Pr();return{prefix:s,iconName:Qr(s,e)||e}}}},$t={noAuto:X$,config:$,dom:J$,parse:Z$,library:gT,findIconDefinition:Np,toHtml:qa},ej=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?pe:n;(Object.keys(Zt.styles).length>0||$.autoFetchSvg)&&Kn&&$.autoReplaceSvg&&$t.dom.i2svg({node:r})};function Rf(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return qa(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Kn){var r=pe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function tj(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(yv(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=xf(D(D({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function nj(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat($.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D(D({},i),{},{id:o}),children:r}]}]}function _v(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,f=t.extra,d=t.watchable,g=d===void 0?!1:d,w=r.found?r:n,y=w.width,S=w.height,m=i==="fak",p=[$.replacementClass,s?"".concat($.cssPrefix,"-").concat(s):""].filter(function(C){return f.classes.indexOf(C)===-1}).filter(function(C){return C!==""||!!C}).concat(f.classes).join(" "),v={children:[],attributes:D(D({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:p,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(S)})},E=m&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/S*16*.0625,"em")}:{};g&&(v.attributes[mi]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||aa())},children:[l]}),delete v.attributes.title);var k=D(D({},v),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:D(D({},E),f.styles)}),T=r.found&&n.found?qn("generateAbstractMask",k)||{children:[],attributes:{}}:qn("generateAbstractIcon",k)||{children:[],attributes:{}},x=T.children,b=T.attributes;return k.children=x,k.attributes=b,a?nj(k):tj(k)}function Nw(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=D(D(D({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[mi]="");var c=D({},o.styles);yv(i)&&(c.transform=N$({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=xf(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function rj(t){var e=t.content,n=t.title,r=t.extra,i=D(D(D({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=xf(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ld=Zt.styles;function Dp(t){var e=t[0],n=t[1],r=t.slice(4),i=dv(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat($.cssPrefix,"-").concat(Yr.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(Yr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(Yr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var ij={found:!1,width:512,height:512};function sj(t,e){!nT&&!$.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Lp(t,e){var n=e;return e==="fa"&&$.styleDefault!==null&&(e=Pr()),new Promise(function(r,i){if(qn("missingIconAbstract"),n==="fa"){var s=mT(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Ld[e]&&Ld[e][t]){var o=Ld[e][t];return r(Dp(o))}sj(t,e),r(D(D({},ij),{},{icon:$.showMissingIcons&&t?qn("missingIconAbstract")||{}:{}}))})}var Dw=function(){},Mp=$.measurePerformance&&Cl&&Cl.mark&&Cl.measure?Cl:{mark:Dw,measure:Dw},so='FA "6.4.0"',oj=function(e){return Mp.mark("".concat(so," ").concat(e," begins")),function(){return vT(e)}},vT=function(e){Mp.mark("".concat(so," ").concat(e," ends")),Mp.measure("".concat(so," ").concat(e),"".concat(so," ").concat(e," begins"),"".concat(so," ").concat(e," ends"))},kv={begin:oj,end:vT},ou=function(){};function Lw(t){var e=t.getAttribute?t.getAttribute(mi):null;return typeof e=="string"}function aj(t){var e=t.getAttribute?t.getAttribute(pv):null,n=t.getAttribute?t.getAttribute(mv):null;return e&&n}function lj(t){return t&&t.classList&&t.classList.contains&&t.classList.contains($.replacementClass)}function uj(){if($.autoReplaceSvg===!0)return au.replace;var t=au[$.autoReplaceSvg];return t||au.replace}function cj(t){return pe.createElementNS("http://www.w3.org/2000/svg",t)}function fj(t){return pe.createElement(t)}function yT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?cj:fj:n;if(typeof t=="string")return pe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(yT(o,{ceFn:r}))}),i}function dj(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var au={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(yT(i),n)}),n.getAttribute(mi)===null&&$.keepOriginalSource){var r=pe.createComment(dj(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~vv(n).indexOf($.replacementClass))return au.replace(e);var i=new RegExp("".concat($.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===$.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return qa(a)}).join(`
`);n.setAttribute(mi,""),n.innerHTML=o}};function Mw(t){t()}function wT(t,e){var n=typeof e=="function"?e:ou;if(t.length===0)n();else{var r=Mw;$.mutateApproach===g$&&(r=Rr.requestAnimationFrame||Mw),r(function(){var i=uj(),s=kv.begin("mutate");t.map(i),s(),n()})}}var bv=!1;function ST(){bv=!0}function $p(){bv=!1}var dc=null;function $w(t){if(Iw&&$.observeMutations){var e=t.treeCallback,n=e===void 0?ou:e,r=t.nodeCallback,i=r===void 0?ou:r,s=t.pseudoElementsCallback,o=s===void 0?ou:s,a=t.observeMutationsRoot,l=a===void 0?pe:a;dc=new Iw(function(u){if(!bv){var c=Pr();js(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Lw(f.addedNodes[0])&&($.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&$.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Lw(f.target)&&~k$.indexOf(f.attributeName))if(f.attributeName==="class"&&aj(f.target)){var d=Of(vv(f.target)),g=d.prefix,w=d.iconName;f.target.setAttribute(pv,g||c),w&&f.target.setAttribute(mv,w)}else lj(f.target)&&i(f.target)})}}),Kn&&dc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function hj(){dc&&dc.disconnect()}function pj(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function mj(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Of(vv(t));return i.prefix||(i.prefix=Pr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=q$(i.prefix,t.innerText)||Sv(i.prefix,Rp(t.innerText))),!i.iconName&&$.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function gj(t){var e=js(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return $.autoA11y&&(n?e["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(r||aa()):(e["aria-hidden"]="true",e.focusable="false")),e}function vj(){return{iconName:null,title:null,titleId:null,prefix:null,transform:hn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=mj(t),r=n.iconName,i=n.prefix,s=n.rest,o=gj(t),a=Ap("parseNodeAttributes",{},t),l=e.styleParser?pj(t):[];return D({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:hn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var yj=Zt.styles;function ET(t){var e=$.autoReplaceSvg==="nest"?jw(t,{styleParser:!1}):jw(t);return~e.extra.classes.indexOf(rT)?qn("generateLayersText",t,e):qn("generateSvgReplacementMutation",t,e)}var Ar=new Set;gv.map(function(t){Ar.add("fa-".concat(t))});Object.keys(ra[fe]).map(Ar.add.bind(Ar));Object.keys(ra[Te]).map(Ar.add.bind(Ar));Ar=Ha(Ar);function Fw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Kn)return Promise.resolve();var n=pe.documentElement.classList,r=function(f){return n.add("".concat(xw,"-").concat(f))},i=function(f){return n.remove("".concat(xw,"-").concat(f))},s=$.autoFetchSvg?Ar:gv.map(function(c){return"fa-".concat(c)}).concat(Object.keys(yj));s.includes("fa")||s.push("fa");var o=[".".concat(rT,":not([").concat(mi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(mi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=js(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=kv.begin("onTree"),u=a.reduce(function(c,f){try{var d=ET(f);d&&c.push(d)}catch(g){nT||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){wT(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(d){l(),f(d)})})}function wj(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ET(t).then(function(n){n&&wT([n],e)})}function Sj(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Np(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Np(i||{})),t(r,D(D({},n),{},{mask:i}))}}var Ej=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?hn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,g=n.titleId,w=g===void 0?null:g,y=n.classes,S=y===void 0?[]:y,m=n.attributes,p=m===void 0?{}:m,v=n.styles,E=v===void 0?{}:v;if(e){var k=e.prefix,T=e.iconName,x=e.icon;return Rf(D({type:"icon"},e),function(){return gi("beforeDOMElementCreation",{iconDefinition:e,params:n}),$.autoA11y&&(d?p["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(w||aa()):(p["aria-hidden"]="true",p.focusable="false")),_v({icons:{main:Dp(x),mask:l?Dp(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:T,transform:D(D({},hn),i),symbol:o,title:d,maskId:c,titleId:w,extra:{attributes:p,styles:E,classes:S}})})}},_j={mixout:function(){return{icon:Sj(Ej)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Fw,n.nodeCallback=wj,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?pe:r,s=n.callback,o=s===void 0?function(){}:s;return Fw(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(g,w){Promise.all([Lp(i,a),c.iconName?Lp(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var S=dv(y,2),m=S[0],p=S[1];g([n,_v({icons:{main:m,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:s,titleId:o,extra:d,watchable:!0})])}).catch(w)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=xf(a);l.length>0&&(i.style=l);var u;return yv(o)&&(u=qn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},kj={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Rf({type:"layer"},function(){gi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat($.cssPrefix,"-layers")].concat(Ha(s)).join(" ")},children:o}]})}}}},bj={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Rf({type:"counter",content:n},function(){return gi("beforeDOMElementCreation",{content:n,params:r}),rj({content:n.toString(),title:s,extra:{attributes:u,styles:f,classes:["".concat($.cssPrefix,"-layers-counter")].concat(Ha(a))}})})}}}},Tj={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?hn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,g=d===void 0?{}:d;return Rf({type:"text",content:n},function(){return gi("beforeDOMElementCreation",{content:n,params:r}),Nw({content:n,transform:D(D({},hn),s),title:a,extra:{attributes:f,styles:g,classes:["".concat($.cssPrefix,"-layers-text")].concat(Ha(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(Zb){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return $.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Nw({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},Ij=new RegExp('"',"ug"),Uw=[1105920,1112319];function xj(t){var e=t.replace(Ij,""),n=U$(e,0),r=n>=Uw[0]&&n<=Uw[1],i=e.length===2?e[0]===e[1]:!1;return{value:Rp(i?e[0]:e),isSecondary:r||i}}function zw(t,e){var n="".concat(m$).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=js(t.children),o=s.filter(function(x){return x.getAttribute(Op)===e})[0],a=Rr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(S$),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?Te:fe,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ia[d][l[2].toLowerCase()]:E$[d][u],w=xj(f),y=w.value,S=w.isSecondary,m=l[0].startsWith("FontAwesome"),p=Sv(g,y),v=p;if(m){var E=G$(y);E.iconName&&E.prefix&&(p=E.iconName,g=E.prefix)}if(p&&!S&&(!o||o.getAttribute(pv)!==g||o.getAttribute(mv)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);var k=vj(),T=k.extra;T.attributes[Op]=e,Lp(p,g).then(function(x){var b=_v(D(D({},k),{},{icons:{main:x,mask:Ev()},prefix:g,iconName:v,extra:T,watchable:!0})),C=pe.createElement("svg");e==="::before"?t.insertBefore(C,t.firstChild):t.appendChild(C),C.outerHTML=b.map(function(P){return qa(P)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Cj(t){return Promise.all([zw(t,"::before"),zw(t,"::after")])}function Oj(t){return t.parentNode!==document.head&&!~v$.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Op)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Vw(t){if(Kn)return new Promise(function(e,n){var r=js(t.querySelectorAll("*")).filter(Oj).map(Cj),i=kv.begin("searchPseudoElements");ST(),Promise.all(r).then(function(){i(),$p(),e()}).catch(function(){i(),$p(),n()})})}var Rj={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Vw,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?pe:r;$.searchPseudoElements&&Vw(i)}}},Bw=!1,Pj={mixout:function(){return{dom:{unwatch:function(){ST(),Bw=!0}}}},hooks:function(){return{bootstrap:function(){$w(Ap("mutationObserverCallbacks",{}))},noAuto:function(){hj()},watch:function(n){var r=n.observeMutationsRoot;Bw?$p():$w(Ap("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Hw=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},Aj={mixout:function(){return{parse:{transform:function(n){return Hw(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Hw(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:f,path:d};return{tag:"g",attributes:D({},g.outer),children:[{tag:"g",attributes:D({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:D(D({},r.icon.attributes),g.path)}]}]}}}},Md={x:0,y:0,width:"100%",height:"100%"};function Ww(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Nj(t){return t.tag==="g"?t.children:[t]}var Dj={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Of(i.split(" ").map(function(o){return o.trim()})):Ev();return s.prefix||(s.prefix=Pr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,f=o.width,d=o.icon,g=A$({transform:l,containerWidth:f,iconWidth:u}),w={tag:"rect",attributes:D(D({},Md),{},{fill:"white"})},y=c.children?{children:c.children.map(Ww)}:{},S={tag:"g",attributes:D({},g.inner),children:[Ww(D({tag:c.tag,attributes:D(D({},c.attributes),g.path)},y))]},m={tag:"g",attributes:D({},g.outer),children:[S]},p="mask-".concat(a||aa()),v="clip-".concat(a||aa()),E={tag:"mask",attributes:D(D({},Md),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,m]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:Nj(d)},E]};return r.push(k,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(p,")")},Md)}),{children:r,attributes:i}}}},Lj={provides:function(e){var n=!1;Rr.matchMedia&&(n=Rr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:D(D({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=D(D({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:D(D({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:D(D({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:D(D({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:D(D({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:D(D({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:D(D({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:D(D({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Mj={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},$j=[L$,_j,kj,bj,Tj,Rj,Pj,Aj,Dj,Lj,Mj];Q$($j,{mixoutsTo:$t});$t.noAuto;$t.config;$t.library;$t.dom;var jp=$t.parse;$t.findIconDefinition;$t.toHtml;var jj=$t.icon;$t.layer;$t.text;$t.counter;var J={},Fj={get exports(){return J},set exports(t){J=t}},Uj="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",zj=Uj,Vj=zj;function _T(){}function kT(){}kT.resetWarningCache=_T;var Bj=function(){function t(r,i,s,o,a,l){if(l!==Vj){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:kT,resetWarningCache:_T};return n.PropTypes=n,n};Fj.exports=Bj();function qw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function cr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qw(Object(n),!0).forEach(function(r){qi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function hc(t){return hc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},hc(t)}function qi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Hj(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Wj(t,e){if(t==null)return{};var n=Hj(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Fp(t){return qj(t)||Gj(t)||Kj(t)||Yj()}function qj(t){if(Array.isArray(t))return Up(t)}function Gj(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Kj(t,e){if(t){if(typeof t=="string")return Up(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Up(t,e)}}function Up(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Yj(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qj(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,d=t.fixedWidth,g=t.inverse,w=t.border,y=t.listItem,S=t.flip,m=t.size,p=t.rotation,v=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":g,"fa-border":w,"fa-li":y,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},qi(e,"fa-".concat(m),typeof m<"u"&&m!==null),qi(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),qi(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),qi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(k){return E[k]?k:null}).filter(function(k){return k})}function Xj(t){return t=t-0,t===t}function bT(t){return Xj(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Jj=["style"];function Zj(t){return t.charAt(0).toUpperCase()+t.slice(1)}function eF(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=bT(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[Zj(i)]=s:e[i]=s,e},{})}function TT(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return TT(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=eF(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[bT(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=Wj(n,Jj);return i.attrs.style=cr(cr({},i.attrs.style),o),t.apply(void 0,[e.tag,cr(cr({},i.attrs),a)].concat(Fp(r)))}var IT=!1;try{IT=!0}catch{}function tF(){if(!IT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Gw(t){if(t&&hc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(jp.icon)return jp.icon(t);if(t===null)return null;if(t&&hc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function $d(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?qi({},t,e):{}}var et=Ic.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=Gw(n),c=$d("classes",[].concat(Fp(Qj(t)),Fp(s.split(" ")))),f=$d("transform",typeof t.transform=="string"?jp.transform(t.transform):t.transform),d=$d("mask",Gw(r)),g=jj(u,cr(cr(cr(cr({},c),f),d),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!g)return tF("Could not find icon",u),null;var w=g.abstract,y={ref:e};return Object.keys(t).forEach(function(S){et.defaultProps.hasOwnProperty(S)||(y[S]=t[S])}),nF(w[0],y)});et.displayName="FontAwesomeIcon";et.propTypes={beat:J.bool,border:J.bool,beatFade:J.bool,bounce:J.bool,className:J.string,fade:J.bool,flash:J.bool,mask:J.oneOfType([J.object,J.array,J.string]),maskId:J.string,fixedWidth:J.bool,inverse:J.bool,flip:J.oneOf([!0,!1,"horizontal","vertical","both"]),icon:J.oneOfType([J.object,J.array,J.string]),listItem:J.bool,pull:J.oneOf(["right","left"]),pulse:J.bool,rotation:J.oneOf([0,90,180,270]),shake:J.bool,size:J.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:J.bool,spinPulse:J.bool,spinReverse:J.bool,symbol:J.oneOfType([J.bool,J.string]),title:J.string,titleId:J.string,transform:J.oneOfType([J.string,J.object]),swapOpacity:J.bool};et.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var nF=TT.bind(null,Ic.createElement);const rF=/^[A-z][A-z0-9-_]{3,23}$/,Kw=/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,Yw=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;function iF(){const t=_.useRef(),e=_.useRef(),n=_.useRef(),[r,i]=_.useState(""),[s,o]=_.useState(!1),[a,l]=_.useState(!1),[u,c]=_.useState(""),[f,d]=_.useState(!1),[g,w]=_.useState(!1),[y,S]=_.useState(""),[m,p]=_.useState(!1),[v,E]=_.useState(!1),[k,T]=_.useState(""),[x,b]=_.useState(!1),[C,P]=_.useState(!1),[B,U]=_.useState(""),[z,jt]=_.useState(!1),{signup:Oe,currentUser:vt}=qt();_.useEffect(()=>{e.current.focus()},[]),_.useEffect(()=>{o(rF.test(r))},[r]),_.useEffect(()=>{d(Kw.test(u))},[u]),_.useEffect(()=>{p(Yw.test(y)),b(y===k)},[y,k]),_.useEffect(()=>{U("")},[u,y,k]);const Ft=async A=>{if(A.preventDefault(),!Kw.test(u)||!Yw.test(y)){U("Invalid input");return}try{await Oe(u,y,r),jt(!0),i(""),c(""),S(""),T("")}catch(W){console.error("Signup error:",W),U(W.message),n.current.focus()}};return h.jsx(h.Fragment,{children:z?h.jsxs("section",{className:"login-section",children:[h.jsx("h1",{children:"Thank you for Registering!"}),h.jsx("p",{children:h.jsx(Tt,{to:"/login",children:"Log In"})})]}):h.jsxs("section",{className:"login-section",children:[h.jsx("p",{ref:n,className:B?"errmsg":"offscreen","aria-live":"assertive",children:B}),h.jsx("h1",{children:"Register"}),h.jsxs("form",{onSubmit:Ft,children:[h.jsxs("label",{htmlFor:"username",children:["User:",h.jsx(et,{icon:xl,className:s?"valid":"hide"}),h.jsx(et,{icon:Il,className:s||!r?"hide":"invalid"})]}),h.jsx("input",{type:"text",id:"username",ref:t,autoComplete:"off",onChange:A=>i(A.target.value),value:r,required:!0,"aria-invalid":!s,onFocus:()=>l(!0),onBlur:()=>l(!1)}),h.jsxs("p",{className:a&&r&&!s?"instructions":"offscreen",children:[h.jsx(et,{icon:Tl})," From 4 to 24 characters. Must start with a letter. Letters, numbers, hyphens and underscores allowed."]}),h.jsxs("label",{htmlFor:"email",children:["Email:",h.jsx(et,{icon:xl,className:f?"valid":"hide"}),h.jsx(et,{icon:Il,className:f||!u?"hide":"invalid"})]}),h.jsx("input",{type:"email",id:"email",ref:e,autoComplete:"off",onChange:A=>c(A.target.value),value:u,required:!0,"aria-invalid":!f,onFocus:()=>w(!0),onBlur:()=>w(!1)}),h.jsxs("p",{className:g&&u&&!f?"instructions":"offscreen",children:[h.jsx(et,{icon:Tl})," Must be a valid email."]}),h.jsxs("label",{htmlFor:"password",children:["Password:",h.jsx(et,{icon:xl,className:m?"valid":"hide"}),h.jsx(et,{icon:Il,className:m||!y?"hide":"invalid"})]}),h.jsx("input",{type:"password",id:"password",onChange:A=>S(A.target.value),value:y,required:!0,"aria-invalid":!m,onFocus:()=>E(!0),onBlur:()=>E(!1)}),h.jsxs("p",{className:v&&!m?"instructions":"offscreen",children:[h.jsx(et,{icon:Tl})," 8-24 characters. Must include upper/lowercase, number, special character (!@#$%)."]}),h.jsxs("label",{htmlFor:"confirm_pwd",children:["Confirm Password:",h.jsx(et,{icon:xl,className:x&&k?"valid":"hide"}),h.jsx(et,{icon:Il,className:x||!k?"hide":"invalid"})]}),h.jsx("input",{type:"password",id:"confirm_pwd",onChange:A=>T(A.target.value),value:k,required:!0,"aria-invalid":!x,onFocus:()=>P(!0),onBlur:()=>P(!1)}),h.jsxs("p",{className:C&&!x?"instructions":"offscreen",children:[h.jsx(et,{icon:Tl})," Must match the password field."]}),h.jsx("button",{disabled:!f||!m||!x,children:"Register"})]}),h.jsxs("p",{children:["Already registered?",h.jsx("br",{}),h.jsx("span",{className:"line",children:h.jsx(Tt,{to:"/login",children:"Log In"})})]})]})})}function sF({id:t}){const[e,n]=_.useState([]),[r,i]=_.useState(!0);return{selected:e,getSelected:async()=>{const o=await KM({id:t});n(o),i(!1)},isLoading:r}}function oF({videogameId:t}){const[e,n]=_.useState([]),[r,i]=_.useState(""),{user:s}=qt();_.useEffect(()=>{async function a(){const l=iM(dw(Sn,"comments"),sM("videogameId","==",t)),c=(await cM(l)).docs.map(f=>({id:f.id,...f.data()}));n(c),console.log(c)}a()},[t]);async function o(){if(r.trim()==="")return;const a=await fM(dw(Sn,"comments"),{videogameId:t,text:r,createdAt:new Date,username:s.displayName,profileImage:s.photoURL});n([...e,{id:a.id,videogameId:t,text:r,createdAt:new Date,username:s.displayName,profileImage:s.photoURL}]),i("")}return h.jsxs("div",{className:"comment-box",children:[h.jsx("h4",{children:"Comments:"}),h.jsx("ul",{className:"comment-list",children:e.map((a,l)=>h.jsxs("li",{className:`comment-container ${l%2===0?"blue":"white"} ${l%2===1?"right":""}`,children:[h.jsx("img",{className:"userprofile-img",src:a.profileImage,alt:`${a.username} profile image`}),h.jsxs("span",{children:[a.username,": ",a.text]})]},a.id))}),h.jsx("input",{type:"text",className:"comment-input",value:r,onChange:a=>i(a.target.value),placeholder:"Write a comment..."}),h.jsx("button",{className:"comment-btn",onClick:o,children:"Send"})]})}var xT={},CT={},Pf={},OT={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=e;t.default=n})(OT);var aF="Expected a function",Qw=0/0,lF="[object Symbol]",uF=/^\s+|\s+$/g,cF=/^[-+]0x[0-9a-f]+$/i,fF=/^0b[01]+$/i,dF=/^0o[0-7]+$/i,hF=parseInt,pF=typeof Ya=="object"&&Ya&&Ya.Object===Object&&Ya,mF=typeof self=="object"&&self&&self.Object===Object&&self,gF=pF||mF||Function("return this")(),vF=Object.prototype,yF=vF.toString,wF=Math.max,SF=Math.min,jd=function(){return gF.Date.now()};function EF(t,e,n){var r,i,s,o,a,l,u=0,c=!1,f=!1,d=!0;if(typeof t!="function")throw new TypeError(aF);e=Xw(e)||0,zp(n)&&(c=!!n.leading,f="maxWait"in n,s=f?wF(Xw(n.maxWait)||0,e):s,d="trailing"in n?!!n.trailing:d);function g(T){var x=r,b=i;return r=i=void 0,u=T,o=t.apply(b,x),o}function w(T){return u=T,a=setTimeout(m,e),c?g(T):o}function y(T){var x=T-l,b=T-u,C=e-x;return f?SF(C,s-b):C}function S(T){var x=T-l,b=T-u;return l===void 0||x>=e||x<0||f&&b>=s}function m(){var T=jd();if(S(T))return p(T);a=setTimeout(m,y(T))}function p(T){return a=void 0,d&&r?g(T):(r=i=void 0,o)}function v(){a!==void 0&&clearTimeout(a),u=0,r=l=i=a=void 0}function E(){return a===void 0?o:p(jd())}function k(){var T=jd(),x=S(T);if(r=arguments,i=this,l=T,x){if(a===void 0)return w(l);if(f)return a=setTimeout(m,e),g(l)}return a===void 0&&(a=setTimeout(m,e)),o}return k.cancel=v,k.flush=E,k}function zp(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function _F(t){return!!t&&typeof t=="object"}function kF(t){return typeof t=="symbol"||_F(t)&&yF.call(t)==lF}function Xw(t){if(typeof t=="number")return t;if(kF(t))return Qw;if(zp(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=zp(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(uF,"");var n=fF.test(t);return n||dF.test(t)?hF(t.slice(2),n?2:8):cF.test(t)?Qw:+t}var bF=EF,_s={},TF={get exports(){return _s},set exports(t){_s=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(TF);var N={};Object.defineProperty(N,"__esModule",{value:!0});N.checkSpecKeys=N.checkNavigable=N.changeSlide=N.canUseDOM=N.canGoNext=void 0;N.clamp=RT;N.swipeStart=N.swipeMove=N.swipeEnd=N.slidesOnRight=N.slidesOnLeft=N.slideHandler=N.siblingDirection=N.safePreventDefault=N.lazyStartIndex=N.lazySlidesOnRight=N.lazySlidesOnLeft=N.lazyEndIndex=N.keyHandler=N.initializedState=N.getWidth=N.getTrackLeft=N.getTrackCSS=N.getTrackAnimateCSS=N.getTotalSlides=N.getSwipeDirection=N.getSlideCount=N.getRequiredLazySlides=N.getPreClones=N.getPostClones=N.getOnDemandLazySlides=N.getNavigableIndexes=N.getHeight=N.extractObject=void 0;var IF=xF(_);function xF(t){return t&&t.__esModule?t:{default:t}}function Jw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ve(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Jw(Object(n),!0).forEach(function(r){CF(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Jw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function CF(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function RT(t,e,n){return Math.max(e,Math.min(t,n))}var ni=function(e){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(e._reactName)||e.preventDefault()};N.safePreventDefault=ni;var Tv=function(e){for(var n=[],r=Iv(e),i=xv(e),s=r;s<i;s++)e.lazyLoadedList.indexOf(s)<0&&n.push(s);return n};N.getOnDemandLazySlides=Tv;var OF=function(e){for(var n=[],r=Iv(e),i=xv(e),s=r;s<i;s++)n.push(s);return n};N.getRequiredLazySlides=OF;var Iv=function(e){return e.currentSlide-PT(e)};N.lazyStartIndex=Iv;var xv=function(e){return e.currentSlide+AT(e)};N.lazyEndIndex=xv;var PT=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0};N.lazySlidesOnLeft=PT;var AT=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow};N.lazySlidesOnRight=AT;var pc=function(e){return e&&e.offsetWidth||0};N.getWidth=pc;var Cv=function(e){return e&&e.offsetHeight||0};N.getHeight=Cv;var Ov=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,s,o;return r=e.startX-e.curX,i=e.startY-e.curY,s=Math.atan2(i,r),o=Math.round(s*180/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?"left":o>=135&&o<=225?"right":n===!0?o>=35&&o<=135?"up":"down":"vertical"};N.getSwipeDirection=Ov;var Rv=function(e){var n=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(n=!1),n};N.canGoNext=Rv;var RF=function(e,n){var r={};return n.forEach(function(i){return r[i]=e[i]}),r};N.extractObject=RF;var PF=function(e){var n=IF.default.Children.count(e.children),r=e.listRef,i=Math.ceil(pc(r)),s=e.trackRef&&e.trackRef.node,o=Math.ceil(pc(s)),a;if(e.vertical)a=i;else{var l=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(l*=i/100),a=Math.ceil((i-l)/e.slidesToShow)}var u=r&&Cv(r.querySelector('[data-index="0"]')),c=u*e.slidesToShow,f=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(f=n-1-e.initialSlide);var d=e.lazyLoadedList||[],g=Tv(ve(ve({},e),{},{currentSlide:f,lazyLoadedList:d}));d=d.concat(g);var w={slideCount:n,slideWidth:a,listWidth:i,trackWidth:o,currentSlide:f,slideHeight:u,listHeight:c,lazyLoadedList:d};return e.autoplaying===null&&e.autoplay&&(w.autoplaying="playing"),w};N.initializedState=PF;var AF=function(e){var n=e.waitForAnimate,r=e.animating,i=e.fade,s=e.infinite,o=e.index,a=e.slideCount,l=e.lazyLoad,u=e.currentSlide,c=e.centerMode,f=e.slidesToScroll,d=e.slidesToShow,g=e.useCSS,w=e.lazyLoadedList;if(n&&r)return{};var y=o,S,m,p,v={},E={},k=s?o:RT(o,0,a-1);if(i){if(!s&&(o<0||o>=a))return{};o<0?y=o+a:o>=a&&(y=o-a),l&&w.indexOf(y)<0&&(w=w.concat(y)),v={animating:!0,currentSlide:y,lazyLoadedList:w,targetSlide:y},E={animating:!1,targetSlide:y}}else S=y,y<0?(S=y+a,s?a%f!==0&&(S=a-a%f):S=0):!Rv(e)&&y>u?y=S=u:c&&y>=a?(y=s?a:a-1,S=s?0:a-1):y>=a&&(S=y-a,s?a%f!==0&&(S=0):S=a-d),!s&&y+d>=a&&(S=a-d),m=ua(ve(ve({},e),{},{slideIndex:y})),p=ua(ve(ve({},e),{},{slideIndex:S})),s||(m===p&&(y=S),m=p),l&&(w=w.concat(Tv(ve(ve({},e),{},{currentSlide:y})))),g?(v={animating:!0,currentSlide:S,trackStyle:Pv(ve(ve({},e),{},{left:m})),lazyLoadedList:w,targetSlide:k},E={animating:!1,currentSlide:S,trackStyle:la(ve(ve({},e),{},{left:p})),swipeLeft:null,targetSlide:k}):v={currentSlide:S,trackStyle:la(ve(ve({},e),{},{left:p})),lazyLoadedList:w,targetSlide:k};return{state:v,nextState:E}};N.slideHandler=AF;var NF=function(e,n){var r,i,s,o,a,l=e.slidesToScroll,u=e.slidesToShow,c=e.slideCount,f=e.currentSlide,d=e.targetSlide,g=e.lazyLoad,w=e.infinite;if(o=c%l!==0,r=o?0:(c-f)%l,n.message==="previous")s=r===0?l:u-r,a=f-s,g&&!w&&(i=f-s,a=i===-1?c-1:i),w||(a=d-l);else if(n.message==="next")s=r===0?l:r,a=f+s,g&&!w&&(a=(f+l)%c+r),w||(a=d+l);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,w){var y=MT(ve(ve({},e),{},{targetSlide:a}));a>n.currentSlide&&y==="left"?a=a-c:a<n.currentSlide&&y==="right"&&(a=a+c)}}else n.message==="index"&&(a=Number(n.index));return a};N.changeSlide=NF;var DF=function(e,n,r){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":e.keyCode===37?r?"next":"previous":e.keyCode===39?r?"previous":"next":""};N.keyHandler=DF;var LF=function(e,n,r){return e.target.tagName==="IMG"&&ni(e),!n||!r&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}};N.swipeStart=LF;var MF=function(e,n){var r=n.scrolling,i=n.animating,s=n.vertical,o=n.swipeToSlide,a=n.verticalSwiping,l=n.rtl,u=n.currentSlide,c=n.edgeFriction,f=n.edgeDragged,d=n.onEdge,g=n.swiped,w=n.swiping,y=n.slideCount,S=n.slidesToScroll,m=n.infinite,p=n.touchObject,v=n.swipeEvent,E=n.listHeight,k=n.listWidth;if(!r){if(i)return ni(e);s&&o&&a&&ni(e);var T,x={},b=ua(n);p.curX=e.touches?e.touches[0].pageX:e.clientX,p.curY=e.touches?e.touches[0].pageY:e.clientY,p.swipeLength=Math.round(Math.sqrt(Math.pow(p.curX-p.startX,2)));var C=Math.round(Math.sqrt(Math.pow(p.curY-p.startY,2)));if(!a&&!w&&C>10)return{scrolling:!0};a&&(p.swipeLength=C);var P=(l?-1:1)*(p.curX>p.startX?1:-1);a&&(P=p.curY>p.startY?1:-1);var B=Math.ceil(y/S),U=Ov(n.touchObject,a),z=p.swipeLength;return m||(u===0&&(U==="right"||U==="down")||u+1>=B&&(U==="left"||U==="up")||!Rv(n)&&(U==="left"||U==="up"))&&(z=p.swipeLength*c,f===!1&&d&&(d(U),x.edgeDragged=!0)),!g&&v&&(v(U),x.swiped=!0),s?T=b+z*(E/k)*P:l?T=b-z*P:T=b+z*P,a&&(T=b+z*P),x=ve(ve({},x),{},{touchObject:p,swipeLeft:T,trackStyle:la(ve(ve({},n),{},{left:T}))}),Math.abs(p.curX-p.startX)<Math.abs(p.curY-p.startY)*.8||p.swipeLength>10&&(x.swiping=!0,ni(e)),x}};N.swipeMove=MF;var $F=function(e,n){var r=n.dragging,i=n.swipe,s=n.touchObject,o=n.listWidth,a=n.touchThreshold,l=n.verticalSwiping,u=n.listHeight,c=n.swipeToSlide,f=n.scrolling,d=n.onSwipe,g=n.targetSlide,w=n.currentSlide,y=n.infinite;if(!r)return i&&ni(e),{};var S=l?u/a:o/a,m=Ov(s,l),p={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(f||!s.swipeLength)return p;if(s.swipeLength>S){ni(e),d&&d(m);var v,E,k=y?w:g;switch(m){case"left":case"up":E=k+Bp(n),v=c?Vp(n,E):E,p.currentDirection=0;break;case"right":case"down":E=k-Bp(n),v=c?Vp(n,E):E,p.currentDirection=1;break;default:v=k}p.triggerSlideHandler=v}else{var T=ua(n);p.trackStyle=Pv(ve(ve({},n),{},{left:T}))}return p};N.swipeEnd=$F;var NT=function(e){for(var n=e.infinite?e.slideCount*2:e.slideCount,r=e.infinite?e.slidesToShow*-1:0,i=e.infinite?e.slidesToShow*-1:0,s=[];r<n;)s.push(r),r=i+e.slidesToScroll,i+=Math.min(e.slidesToScroll,e.slidesToShow);return s};N.getNavigableIndexes=NT;var Vp=function(e,n){var r=NT(e),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var s in r){if(n<r[s]){n=i;break}i=r[s]}return n};N.checkNavigable=Vp;var Bp=function(e){var n=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var r,i=e.listRef,s=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(s).every(function(l){if(e.vertical){if(l.offsetTop+Cv(l)/2>e.swipeLeft*-1)return r=l,!1}else if(l.offsetLeft-n+pc(l)/2>e.swipeLeft*-1)return r=l,!1;return!0}),!r)return 0;var o=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,a=Math.abs(r.dataset.index-o)||1;return a}else return e.slidesToScroll};N.getSlideCount=Bp;var Af=function(e,n){return n.reduce(function(r,i){return r&&e.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",e)};N.checkSpecKeys=Af;var la=function(e){Af(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=e.slideCount+2*e.slidesToShow;e.vertical?r=i*e.slideHeight:n=LT(e)*e.slideWidth;var s={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";s=ve(ve({},s),{},{WebkitTransform:o,transform:a,msTransform:l})}else e.vertical?s.top=e.left:s.left=e.left;return e.fade&&(s={opacity:1}),n&&(s.width=n),r&&(s.height=r),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?s.marginTop=e.left+"px":s.marginLeft=e.left+"px"),s};N.getTrackCSS=la;var Pv=function(e){Af(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=la(e);return e.useTransform?(n.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,n.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?n.transition="top "+e.speed+"ms "+e.cssEase:n.transition="left "+e.speed+"ms "+e.cssEase,n};N.getTrackAnimateCSS=Pv;var ua=function(e){if(e.unslick)return 0;Af(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=e.slideIndex,r=e.trackRef,i=e.infinite,s=e.centerMode,o=e.slideCount,a=e.slidesToShow,l=e.slidesToScroll,u=e.slideWidth,c=e.listWidth,f=e.variableWidth,d=e.slideHeight,g=e.fade,w=e.vertical,y=0,S,m,p=0;if(g||e.slideCount===1)return 0;var v=0;if(i?(v=-bo(e),o%l!==0&&n+l>o&&(v=-(n>o?a-(n-o):o%l)),s&&(v+=parseInt(a/2))):(o%l!==0&&n+l>o&&(v=a-o%l),s&&(v=parseInt(a/2))),y=v*u,p=v*d,w?S=n*d*-1+p:S=n*u*-1+y,f===!0){var E,k=r&&r.node;if(E=n+bo(e),m=k&&k.childNodes[E],S=m?m.offsetLeft*-1:0,s===!0){E=i?n+bo(e):n,m=k&&k.children[E],S=0;for(var T=0;T<E;T++)S-=k&&k.children[T]&&k.children[T].offsetWidth;S-=parseInt(e.centerPadding),S+=m&&(c-m.offsetWidth)/2}}return S};N.getTrackLeft=ua;var bo=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)};N.getPreClones=bo;var DT=function(e){return e.unslick||!e.infinite?0:e.slideCount};N.getPostClones=DT;var LT=function(e){return e.slideCount===1?1:bo(e)+e.slideCount+DT(e)};N.getTotalSlides=LT;var MT=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+$T(e)?"left":"right":e.targetSlide<e.currentSlide-jT(e)?"right":"left"};N.siblingDirection=MT;var $T=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,s=e.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),i&&n%2===0&&(o+=1),o}return i?0:n-1};N.slidesOnRight=$T;var jT=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,s=e.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),!i&&n%2===0&&(o+=1),o}return i?n-1:0};N.slidesOnLeft=jT;var jF=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};N.canUseDOM=jF;var Nf={};function Hp(t){return Hp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hp(t)}Object.defineProperty(Nf,"__esModule",{value:!0});Nf.Track=void 0;var er=FT(_),Fd=FT(_s),Ud=N;function FT(t){return t&&t.__esModule?t:{default:t}}function Wp(){return Wp=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wp.apply(this,arguments)}function FF(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Zw(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function UF(t,e,n){return e&&Zw(t.prototype,e),n&&Zw(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function zF(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&qp(t,e)}function qp(t,e){return qp=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},qp(t,e)}function VF(t){var e=HF();return function(){var r=mc(t),i;if(e){var s=mc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return BF(this,i)}}function BF(t,e){if(e&&(Hp(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Gp(t)}function Gp(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function HF(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function mc(t){return mc=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},mc(t)}function e1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function yt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?e1(Object(n),!0).forEach(function(r){Kp(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Kp(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var zd=function(e){var n,r,i,s,o;e.rtl?o=e.slideCount-1-e.index:o=e.index,i=o<0||o>=e.slideCount,e.centerMode?(s=Math.floor(e.slidesToShow/2),r=(o-e.currentSlide)%e.slideCount===0,o>e.currentSlide-s-1&&o<=e.currentSlide+s&&(n=!0)):n=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow;var a;e.targetSlide<0?a=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?a=e.targetSlide-e.slideCount:a=e.targetSlide;var l=o===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":l}},WF=function(e){var n={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(n.width=e.slideWidth),e.fade&&(n.position="relative",e.vertical?n.top=-e.index*parseInt(e.slideHeight):n.left=-e.index*parseInt(e.slideWidth),n.opacity=e.currentSlide===e.index?1:0,e.useCSS&&(n.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),n},Vd=function(e,n){return e.key||n},qF=function(e){var n,r=[],i=[],s=[],o=er.default.Children.count(e.children),a=(0,Ud.lazyStartIndex)(e),l=(0,Ud.lazyEndIndex)(e);return er.default.Children.forEach(e.children,function(u,c){var f,d={message:"children",index:c,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(c)>=0?f=u:f=er.default.createElement("div",null);var g=WF(yt(yt({},e),{},{index:c})),w=f.props.className||"",y=zd(yt(yt({},e),{},{index:c}));if(r.push(er.default.cloneElement(f,{key:"original"+Vd(f,c),"data-index":c,className:(0,Fd.default)(y,w),tabIndex:"-1","aria-hidden":!y["slick-active"],style:yt(yt({outline:"none"},f.props.style||{}),g),onClick:function(p){f.props&&f.props.onClick&&f.props.onClick(p),e.focusOnSelect&&e.focusOnSelect(d)}})),e.infinite&&e.fade===!1){var S=o-c;S<=(0,Ud.getPreClones)(e)&&o!==e.slidesToShow&&(n=-S,n>=a&&(f=u),y=zd(yt(yt({},e),{},{index:n})),i.push(er.default.cloneElement(f,{key:"precloned"+Vd(f,n),"data-index":n,tabIndex:"-1",className:(0,Fd.default)(y,w),"aria-hidden":!y["slick-active"],style:yt(yt({},f.props.style||{}),g),onClick:function(p){f.props&&f.props.onClick&&f.props.onClick(p),e.focusOnSelect&&e.focusOnSelect(d)}}))),o!==e.slidesToShow&&(n=o+c,n<l&&(f=u),y=zd(yt(yt({},e),{},{index:n})),s.push(er.default.cloneElement(f,{key:"postcloned"+Vd(f,n),"data-index":n,tabIndex:"-1",className:(0,Fd.default)(y,w),"aria-hidden":!y["slick-active"],style:yt(yt({},f.props.style||{}),g),onClick:function(p){f.props&&f.props.onClick&&f.props.onClick(p),e.focusOnSelect&&e.focusOnSelect(d)}})))}}),e.rtl?i.concat(r,s).reverse():i.concat(r,s)},GF=function(t){zF(n,t);var e=VF(n);function n(){var r;FF(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Kp(Gp(r),"node",null),Kp(Gp(r),"handleRef",function(a){r.node=a}),r}return UF(n,[{key:"render",value:function(){var i=qF(this.props),s=this.props,o=s.onMouseEnter,a=s.onMouseOver,l=s.onMouseLeave,u={onMouseEnter:o,onMouseOver:a,onMouseLeave:l};return er.default.createElement("div",Wp({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(er.default.PureComponent);Nf.Track=GF;var Df={};function Yp(t){return Yp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yp(t)}Object.defineProperty(Df,"__esModule",{value:!0});Df.Dots=void 0;var $l=UT(_),KF=UT(_s),t1=N;function UT(t){return t&&t.__esModule?t:{default:t}}function n1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function YF(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?n1(Object(n),!0).forEach(function(r){QF(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):n1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function QF(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function XF(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r1(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function JF(t,e,n){return e&&r1(t.prototype,e),n&&r1(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function ZF(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Qp(t,e)}function Qp(t,e){return Qp=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Qp(t,e)}function eU(t){var e=rU();return function(){var r=gc(t),i;if(e){var s=gc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return tU(this,i)}}function tU(t,e){if(e&&(Yp(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return nU(t)}function nU(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function rU(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function gc(t){return gc=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},gc(t)}var iU=function(e){var n;return e.infinite?n=Math.ceil(e.slideCount/e.slidesToScroll):n=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,n},sU=function(t){ZF(n,t);var e=eU(n);function n(){return XF(this,n),e.apply(this,arguments)}return JF(n,[{key:"clickHandler",value:function(i,s){s.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,s=i.onMouseEnter,o=i.onMouseOver,a=i.onMouseLeave,l=i.infinite,u=i.slidesToScroll,c=i.slidesToShow,f=i.slideCount,d=i.currentSlide,g=iU({slideCount:f,slidesToScroll:u,slidesToShow:c,infinite:l}),w={onMouseEnter:s,onMouseOver:o,onMouseLeave:a},y=[],S=0;S<g;S++){var m=(S+1)*u-1,p=l?m:(0,t1.clamp)(m,0,f-1),v=p-(u-1),E=l?v:(0,t1.clamp)(v,0,f-1),k=(0,KF.default)({"slick-active":l?d>=E&&d<=p:d===E}),T={message:"dots",index:S,slidesToScroll:u,currentSlide:d},x=this.clickHandler.bind(this,T);y=y.concat($l.default.createElement("li",{key:S,className:k},$l.default.cloneElement(this.props.customPaging(S),{onClick:x})))}return $l.default.cloneElement(this.props.appendDots(y),YF({className:this.props.dotsClass},w))}}]),n}($l.default.PureComponent);Df.Dots=sU;var ks={};function Xp(t){return Xp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xp(t)}Object.defineProperty(ks,"__esModule",{value:!0});ks.PrevArrow=ks.NextArrow=void 0;var is=VT(_),zT=VT(_s),oU=N;function VT(t){return t&&t.__esModule?t:{default:t}}function vc(){return vc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vc.apply(this,arguments)}function i1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function yc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?i1(Object(n),!0).forEach(function(r){aU(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function aU(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function BT(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s1(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function HT(t,e,n){return e&&s1(t.prototype,e),n&&s1(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function WT(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Jp(t,e)}function Jp(t,e){return Jp=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Jp(t,e)}function qT(t){var e=cU();return function(){var r=wc(t),i;if(e){var s=wc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return lU(this,i)}}function lU(t,e){if(e&&(Xp(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return uU(t)}function uU(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function cU(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function wc(t){return wc=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},wc(t)}var fU=function(t){WT(n,t);var e=qT(n);function n(){return BT(this,n),e.apply(this,arguments)}return HT(n,[{key:"clickHandler",value:function(i,s){s&&s.preventDefault(),this.props.clickHandler(i,s)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},s=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,s=null);var o={key:"0","data-role":"none",className:(0,zT.default)(i),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=is.default.cloneElement(this.props.prevArrow,yc(yc({},o),a)):l=is.default.createElement("button",vc({key:"0",type:"button"},o)," ","Previous"),l}}]),n}(is.default.PureComponent);ks.PrevArrow=fU;var dU=function(t){WT(n,t);var e=qT(n);function n(){return BT(this,n),e.apply(this,arguments)}return HT(n,[{key:"clickHandler",value:function(i,s){s&&s.preventDefault(),this.props.clickHandler(i,s)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},s=this.clickHandler.bind(this,{message:"next"});(0,oU.canGoNext)(this.props)||(i["slick-disabled"]=!0,s=null);var o={key:"1","data-role":"none",className:(0,zT.default)(i),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=is.default.cloneElement(this.props.nextArrow,yc(yc({},o),a)):l=is.default.createElement("button",vc({key:"1",type:"button"},o)," ","Next"),l}}]),n}(is.default.PureComponent);ks.NextArrow=dU;var GT=function(){if(typeof Map<"u")return Map;function t(e,n){var r=-1;return e.some(function(i,s){return i[0]===n?(r=s,!0):!1}),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var r=t(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},e.prototype.set=function(n,r){var i=t(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},e.prototype.delete=function(n){var r=this.__entries__,i=t(r,n);~i&&r.splice(i,1)},e.prototype.has=function(n){return!!~t(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,s=this.__entries__;i<s.length;i++){var o=s[i];n.call(r,o[1],o[0])}},e}()}(),Zp=typeof window<"u"&&typeof document<"u"&&window.document===document,Sc=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),hU=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Sc):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),pU=2;function mU(t,e){var n=!1,r=!1,i=0;function s(){n&&(n=!1,t()),r&&a()}function o(){hU(s)}function a(){var l=Date.now();if(n){if(l-i<pU)return;r=!0}else n=!0,r=!1,setTimeout(o,e);i=l}return a}var gU=20,vU=["top","right","bottom","left","width","height","size","weight"],yU=typeof MutationObserver<"u",wU=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=mU(this.refresh.bind(this),gU)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var n=this.observers_,r=n.indexOf(e);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!Zp||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),yU?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!Zp||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var n=e.propertyName,r=n===void 0?"":n,i=vU.some(function(s){return!!~r.indexOf(s)});i&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),KT=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},bs=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||Sc},YT=Lf(0,0,0,0);function Ec(t){return parseFloat(t)||0}function o1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(r,i){var s=t["border-"+i+"-width"];return r+Ec(s)},0)}function SU(t){for(var e=["top","right","bottom","left"],n={},r=0,i=e;r<i.length;r++){var s=i[r],o=t["padding-"+s];n[s]=Ec(o)}return n}function EU(t){var e=t.getBBox();return Lf(0,0,e.width,e.height)}function _U(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return YT;var r=bs(t).getComputedStyle(t),i=SU(r),s=i.left+i.right,o=i.top+i.bottom,a=Ec(r.width),l=Ec(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+s)!==e&&(a-=o1(r,"left","right")+s),Math.round(l+o)!==n&&(l-=o1(r,"top","bottom")+o)),!bU(t)){var u=Math.round(a+s)-e,c=Math.round(l+o)-n;Math.abs(u)!==1&&(a-=u),Math.abs(c)!==1&&(l-=c)}return Lf(i.left,i.top,a,l)}var kU=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof bs(t).SVGGraphicsElement}:function(t){return t instanceof bs(t).SVGElement&&typeof t.getBBox=="function"}}();function bU(t){return t===bs(t).document.documentElement}function TU(t){return Zp?kU(t)?EU(t):_U(t):YT}function IU(t){var e=t.x,n=t.y,r=t.width,i=t.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(s.prototype);return KT(o,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),o}function Lf(t,e,n,r){return{x:t,y:e,width:n,height:r}}var xU=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Lf(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=TU(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),CU=function(){function t(e,n){var r=IU(n);KT(this,{target:e,contentRect:r})}return t}(),OU=function(){function t(e,n,r){if(this.activeObservations_=[],this.observations_=new GT,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=r}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof bs(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new xU(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof bs(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new CU(r.target,r.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),QT=typeof WeakMap<"u"?new WeakMap:new GT,XT=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=wU.getInstance(),r=new OU(e,n,this);QT.set(this,r)}return t}();["observe","unobserve","disconnect"].forEach(function(t){XT.prototype[t]=function(){var e;return(e=QT.get(this))[t].apply(e,arguments)}});var RU=function(){return typeof Sc.ResizeObserver<"u"?Sc.ResizeObserver:XT}();const PU=Object.freeze(Object.defineProperty({__proto__:null,default:RU},Symbol.toStringTag,{value:"Module"})),AU=iI(PU);Object.defineProperty(Pf,"__esModule",{value:!0});Pf.InnerSlider=void 0;var ft=Ga(_),NU=Ga(OT),DU=Ga(bF),LU=Ga(_s),Se=N,MU=Nf,$U=Df,a1=ks,jU=Ga(AU);function Ga(t){return t&&t.__esModule?t:{default:t}}function _c(t){return _c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_c(t)}function kc(){return kc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},kc.apply(this,arguments)}function FU(t,e){if(t==null)return{};var n=UU(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function UU(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function l1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?l1(Object(n),!0).forEach(function(r){ee(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function zU(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u1(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function VU(t,e,n){return e&&u1(t.prototype,e),n&&u1(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function BU(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&em(t,e)}function em(t,e){return em=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},em(t,e)}function HU(t){var e=qU();return function(){var r=bc(t),i;if(e){var s=bc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return WU(this,i)}}function WU(t,e){if(e&&(_c(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Z(t)}function Z(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function qU(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function bc(t){return bc=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},bc(t)}function ee(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var GU=function(t){BU(n,t);var e=HU(n);function n(r){var i;zU(this,n),i=e.call(this,r),ee(Z(i),"listRefHandler",function(o){return i.list=o}),ee(Z(i),"trackRefHandler",function(o){return i.track=o}),ee(Z(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var o=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,Se.getHeight)(o)+"px"}}),ee(Z(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var o=(0,Se.getOnDemandLazySlides)(H(H({},i.props),i.state));o.length>0&&(i.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o))}var a=H({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new jU.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,l.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),ee(Z(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(o){return clearTimeout(o)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),ee(Z(i),"componentDidUpdate",function(o){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,Se.getOnDemandLazySlides)(H(H({},i.props),i.state));a.length>0&&(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var l=H(H({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(o);u&&i.updateState(l,u,function(){i.state.currentSlide>=ft.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:ft.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),ee(Z(i),"onWindowResized",function(o){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,DU.default)(function(){return i.resizeWindow(o)},50),i.debouncedResize()}),ee(Z(i),"resizeWindow",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(i.track&&i.track.node);if(a){var l=H(H({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(l,o,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),ee(Z(i),"updateState",function(o,a,l){var u=(0,Se.initializedState)(o);o=H(H(H({},o),u),{},{slideIndex:u.currentSlide});var c=(0,Se.getTrackLeft)(o);o=H(H({},o),{},{left:c});var f=(0,Se.getTrackCSS)(o);(a||ft.default.Children.count(i.props.children)!==ft.default.Children.count(o.children))&&(u.trackStyle=f),i.setState(u,l)}),ee(Z(i),"ssrInit",function(){if(i.props.variableWidth){var o=0,a=0,l=[],u=(0,Se.getPreClones)(H(H(H({},i.props),i.state),{},{slideCount:i.props.children.length})),c=(0,Se.getPostClones)(H(H(H({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(x){l.push(x.props.style.width),o+=x.props.style.width});for(var f=0;f<u;f++)a+=l[l.length-1-f],o+=l[l.length-1-f];for(var d=0;d<c;d++)o+=l[d];for(var g=0;g<i.state.currentSlide;g++)a+=l[g];var w={width:o+"px",left:-a+"px"};if(i.props.centerMode){var y="".concat(l[i.state.currentSlide],"px");w.left="calc(".concat(w.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:w}}var S=ft.default.Children.count(i.props.children),m=H(H(H({},i.props),i.state),{},{slideCount:S}),p=(0,Se.getPreClones)(m)+(0,Se.getPostClones)(m)+S,v=100/i.props.slidesToShow*p,E=100/p,k=-E*((0,Se.getPreClones)(m)+i.state.currentSlide)*v/100;i.props.centerMode&&(k+=(100-E*v/100)/2);var T={width:v+"%",left:k+"%"};return{slideWidth:E+"%",trackStyle:T}}),ee(Z(i),"checkImagesLoad",function(){var o=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=o.length,l=0;Array.prototype.forEach.call(o,function(u){var c=function(){return++l&&l>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var f=u.onclick;u.onclick=function(){f(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=c,u.onerror=function(){c(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),ee(Z(i),"progressiveLazyLoad",function(){for(var o=[],a=H(H({},i.props),i.state),l=i.state.currentSlide;l<i.state.slideCount+(0,Se.getPostClones)(a);l++)if(i.state.lazyLoadedList.indexOf(l)<0){o.push(l);break}for(var u=i.state.currentSlide-1;u>=-(0,Se.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){o.push(u);break}o.length>0?(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),ee(Z(i),"slideHandler",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=i.props,u=l.asNavFor,c=l.beforeChange,f=l.onLazyLoad,d=l.speed,g=l.afterChange,w=i.state.currentSlide,y=(0,Se.slideHandler)(H(H(H({index:o},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),S=y.state,m=y.nextState;if(S){c&&c(w,S.currentSlide);var p=S.lazyLoadedList.filter(function(v){return i.state.lazyLoadedList.indexOf(v)<0});f&&p.length>0&&f(p),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),g&&g(w),delete i.animationEndCallback),i.setState(S,function(){u&&i.asNavForIndex!==o&&(i.asNavForIndex=o,u.innerSlider.slideHandler(o)),m&&(i.animationEndCallback=setTimeout(function(){var v=m.animating,E=FU(m,["animating"]);i.setState(E,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:v})},10)),g&&g(S.currentSlide),delete i.animationEndCallback})},d))})}}),ee(Z(i),"changeSlide",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=H(H({},i.props),i.state),u=(0,Se.changeSlide)(l,o);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var c=i.list.querySelectorAll(".slick-current");c[0]&&c[0].focus()}}),ee(Z(i),"clickHandler",function(o){i.clickable===!1&&(o.stopPropagation(),o.preventDefault()),i.clickable=!0}),ee(Z(i),"keyHandler",function(o){var a=(0,Se.keyHandler)(o,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),ee(Z(i),"selectHandler",function(o){i.changeSlide(o)}),ee(Z(i),"disableBodyScroll",function(){var o=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=o}),ee(Z(i),"enableBodyScroll",function(){window.ontouchmove=null}),ee(Z(i),"swipeStart",function(o){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,Se.swipeStart)(o,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),ee(Z(i),"swipeMove",function(o){var a=(0,Se.swipeMove)(o,H(H(H({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),ee(Z(i),"swipeEnd",function(o){var a=(0,Se.swipeEnd)(o,H(H(H({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var l=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),l!==void 0&&(i.slideHandler(l),i.props.verticalSwiping&&i.enableBodyScroll())}}),ee(Z(i),"touchEnd",function(o){i.swipeEnd(o),i.clickable=!0}),ee(Z(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),ee(Z(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),ee(Z(i),"slickGoTo",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(o=Number(o),isNaN(o))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:o,currentSlide:i.state.currentSlide},a)},0))}),ee(Z(i),"play",function(){var o;if(i.props.rtl)o=i.state.currentSlide-i.props.slidesToScroll;else if((0,Se.canGoNext)(H(H({},i.props),i.state)))o=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(o)}),ee(Z(i),"autoPlay",function(o){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(o==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(o==="leave"){if(a==="paused"||a==="focused")return}else if(o==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),ee(Z(i),"pause",function(o){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;o==="paused"?i.setState({autoplaying:"paused"}):o==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),ee(Z(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),ee(Z(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),ee(Z(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),ee(Z(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),ee(Z(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),ee(Z(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),ee(Z(i),"render",function(){var o=(0,LU.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=H(H({},i.props),i.state),l=(0,Se.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;l=H(H({},l),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var c;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var f=(0,Se.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),d=i.props.pauseOnDotsHover;f=H(H({},f),{},{clickHandler:i.changeSlide,onMouseEnter:d?i.onDotsLeave:null,onMouseOver:d?i.onDotsOver:null,onMouseLeave:d?i.onDotsLeave:null}),c=ft.default.createElement($U.Dots,f)}var g,w,y=(0,Se.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(g=ft.default.createElement(a1.PrevArrow,y),w=ft.default.createElement(a1.NextArrow,y));var S=null;i.props.vertical&&(S={height:i.state.listHeight});var m=null;i.props.vertical===!1?i.props.centerMode===!0&&(m={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(m={padding:i.props.centerPadding+" 0px"});var p=H(H({},S),m),v=i.props.touchMove,E={className:"slick-list",style:p,onClick:i.clickHandler,onMouseDown:v?i.swipeStart:null,onMouseMove:i.state.dragging&&v?i.swipeMove:null,onMouseUp:v?i.swipeEnd:null,onMouseLeave:i.state.dragging&&v?i.swipeEnd:null,onTouchStart:v?i.swipeStart:null,onTouchMove:i.state.dragging&&v?i.swipeMove:null,onTouchEnd:v?i.touchEnd:null,onTouchCancel:i.state.dragging&&v?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},k={className:o,dir:"ltr",style:i.props.style};return i.props.unslick&&(E={className:"slick-list"},k={className:o}),ft.default.createElement("div",k,i.props.unslick?"":g,ft.default.createElement("div",kc({ref:i.listRefHandler},E),ft.default.createElement(MU.Track,kc({ref:i.trackRefHandler},l),i.props.children)),i.props.unslick?"":w,i.props.unslick?"":c)}),i.list=null,i.track=null,i.state=H(H({},NU.default),{},{currentSlide:i.props.initialSlide,slideCount:ft.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var s=i.ssrInit();return i.state=H(H({},i.state),s),i}return VU(n,[{key:"didPropsChange",value:function(i){for(var s=!1,o=0,a=Object.keys(this.props);o<a.length;o++){var l=a[o];if(!i.hasOwnProperty(l)){s=!0;break}if(!(_c(i[l])==="object"||typeof i[l]=="function")&&i[l]!==this.props[l]){s=!0;break}}return s||ft.default.Children.count(this.props.children)!==ft.default.Children.count(i.children)}}]),n}(ft.default.Component);Pf.InnerSlider=GU;var KU=function(t){return t.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},YU=KU,QU=YU,XU=function(t){var e=/[height|width]$/;return e.test(t)},c1=function(t){var e="",n=Object.keys(t);return n.forEach(function(r,i){var s=t[r];r=QU(r),XU(r)&&typeof s=="number"&&(s=s+"px"),s===!0?e+=r:s===!1?e+="not "+r:e+="("+r+": "+s+")",i<n.length-1&&(e+=" and ")}),e},JU=function(t){var e="";return typeof t=="string"?t:t instanceof Array?(t.forEach(function(n,r){e+=c1(n),r<t.length-1&&(e+=", ")}),e):c1(t)},ZU=JU,JT={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(_);function n(s){return s&&s.__esModule?s:{default:s}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(o){return e.default.createElement("ul",{style:{display:"block"}},o)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(o){return e.default.createElement("button",null,o+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;t.default=i})(JT);var Bd,f1;function ez(){if(f1)return Bd;f1=1;function t(e){this.options=e,!e.deferSetup&&this.setup()}return t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},Bd=t,Bd}var Hd,d1;function ZT(){if(d1)return Hd;d1=1;function t(r,i){var s=0,o=r.length,a;for(s;s<o&&(a=i(r[s],s),a!==!1);s++);}function e(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return Hd={isFunction:n,isArray:e,each:t},Hd}var Wd,h1;function tz(){if(h1)return Wd;h1=1;var t=ez(),e=ZT().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var s=this;this.listener=function(o){s.mql=o.currentTarget||o,s.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new t(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;e(i,function(s,o){if(s.equals(r))return s.destroy(),!i.splice(o,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";e(this.handlers,function(i){i[r]()})}},Wd=n,Wd}var qd,p1;function nz(){if(p1)return qd;p1=1;var t=tz(),e=ZT(),n=e.each,r=e.isFunction,i=e.isArray;function s(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return s.prototype={constructor:s,register:function(o,a,l){var u=this.queries,c=l&&this.browserIsIncapable;return u[o]||(u[o]=new t(o,c)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(f){r(f)&&(f={match:f}),u[o].addHandler(f)}),this},unregister:function(o,a){var l=this.queries[o];return l&&(a?l.removeHandler(a):(l.clear(),delete this.queries[o])),this}},qd=s,qd}var Gd,m1;function rz(){if(m1)return Gd;m1=1;var t=nz();return Gd=new t,Gd}(function(t){function e(b){return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},e(b)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(_),r=Pf,i=a(ZU),s=a(JT),o=N;function a(b){return b&&b.__esModule?b:{default:b}}function l(){return l=Object.assign||function(b){for(var C=1;C<arguments.length;C++){var P=arguments[C];for(var B in P)Object.prototype.hasOwnProperty.call(P,B)&&(b[B]=P[B])}return b},l.apply(this,arguments)}function u(b,C){var P=Object.keys(b);if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(b);C&&(B=B.filter(function(U){return Object.getOwnPropertyDescriptor(b,U).enumerable})),P.push.apply(P,B)}return P}function c(b){for(var C=1;C<arguments.length;C++){var P=arguments[C]!=null?arguments[C]:{};C%2?u(Object(P),!0).forEach(function(B){k(b,B,P[B])}):Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(P)):u(Object(P)).forEach(function(B){Object.defineProperty(b,B,Object.getOwnPropertyDescriptor(P,B))})}return b}function f(b,C){if(!(b instanceof C))throw new TypeError("Cannot call a class as a function")}function d(b,C){for(var P=0;P<C.length;P++){var B=C[P];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(b,B.key,B)}}function g(b,C,P){return C&&d(b.prototype,C),P&&d(b,P),Object.defineProperty(b,"prototype",{writable:!1}),b}function w(b,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(C&&C.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),Object.defineProperty(b,"prototype",{writable:!1}),C&&y(b,C)}function y(b,C){return y=Object.setPrototypeOf||function(B,U){return B.__proto__=U,B},y(b,C)}function S(b){var C=v();return function(){var B=E(b),U;if(C){var z=E(this).constructor;U=Reflect.construct(B,arguments,z)}else U=B.apply(this,arguments);return m(this,U)}}function m(b,C){if(C&&(e(C)==="object"||typeof C=="function"))return C;if(C!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(b)}function p(b){if(b===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b}function v(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function E(b){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(P){return P.__proto__||Object.getPrototypeOf(P)},E(b)}function k(b,C,P){return C in b?Object.defineProperty(b,C,{value:P,enumerable:!0,configurable:!0,writable:!0}):b[C]=P,b}var T=(0,o.canUseDOM)()&&rz(),x=function(b){w(P,b);var C=S(P);function P(B){var U;return f(this,P),U=C.call(this,B),k(p(U),"innerSliderRefHandler",function(z){return U.innerSlider=z}),k(p(U),"slickPrev",function(){return U.innerSlider.slickPrev()}),k(p(U),"slickNext",function(){return U.innerSlider.slickNext()}),k(p(U),"slickGoTo",function(z){var jt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return U.innerSlider.slickGoTo(z,jt)}),k(p(U),"slickPause",function(){return U.innerSlider.pause("paused")}),k(p(U),"slickPlay",function(){return U.innerSlider.autoPlay("play")}),U.state={breakpoint:null},U._responsiveMediaHandlers=[],U}return g(P,[{key:"media",value:function(U,z){T.register(U,z),this._responsiveMediaHandlers.push({query:U,handler:z})}},{key:"componentDidMount",value:function(){var U=this;if(this.props.responsive){var z=this.props.responsive.map(function(Oe){return Oe.breakpoint});z.sort(function(Oe,vt){return Oe-vt}),z.forEach(function(Oe,vt){var Ft;vt===0?Ft=(0,i.default)({minWidth:0,maxWidth:Oe}):Ft=(0,i.default)({minWidth:z[vt-1]+1,maxWidth:Oe}),(0,o.canUseDOM)()&&U.media(Ft,function(){U.setState({breakpoint:Oe})})});var jt=(0,i.default)({minWidth:z.slice(-1)[0]});(0,o.canUseDOM)()&&this.media(jt,function(){U.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(U){T.unregister(U.query,U.handler)})}},{key:"render",value:function(){var U=this,z,jt;this.state.breakpoint?(jt=this.props.responsive.filter(function(It){return It.breakpoint===U.state.breakpoint}),z=jt[0].settings==="unslick"?"unslick":c(c(c({},s.default),this.props),jt[0].settings)):z=c(c({},s.default),this.props),z.centerMode&&(z.slidesToScroll>1,z.slidesToScroll=1),z.fade&&(z.slidesToShow>1,z.slidesToScroll>1,z.slidesToShow=1,z.slidesToScroll=1);var Oe=n.default.Children.toArray(this.props.children);Oe=Oe.filter(function(It){return typeof It=="string"?!!It.trim():!!It}),z.variableWidth&&(z.rows>1||z.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),z.variableWidth=!1);for(var vt=[],Ft=null,A=0;A<Oe.length;A+=z.rows*z.slidesPerRow){for(var W=[],K=A;K<A+z.rows*z.slidesPerRow;K+=z.slidesPerRow){for(var ge=[],le=K;le<K+z.slidesPerRow&&(z.variableWidth&&Oe[le].props.style&&(Ft=Oe[le].props.style.width),!(le>=Oe.length));le+=1)ge.push(n.default.cloneElement(Oe[le],{key:100*A+10*K+le,tabIndex:-1,style:{width:"".concat(100/z.slidesPerRow,"%"),display:"inline-block"}}));W.push(n.default.createElement("div",{key:10*A+K},ge))}z.variableWidth?vt.push(n.default.createElement("div",{key:A,style:{width:Ft}},W)):vt.push(n.default.createElement("div",{key:A},W))}if(z==="unslick"){var Ii="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:Ii},Oe)}else vt.length<=z.slidesToShow&&(z.unslick=!0);return n.default.createElement(r.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},z),vt)}}]),P}(n.default.Component);t.default=x})(CT);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(CT);function n(i){return i&&i.__esModule?i:{default:i}}var r=e.default;t.default=r})(xT);const iz=g1(xT);function sz({screenshots:t,trailer:e}){const n={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0};return h.jsx("div",{className:"slider-container",children:h.jsxs(iz,{...n,children:[e&&h.jsx("div",{className:"slider-image-container",children:h.jsx("video",{src:e,controls:!0,className:"slider-image"})}),t.map((r,i)=>h.jsx("div",{className:"slider-image-container",children:h.jsx("img",{src:r,alt:`Screenshot ${i+1}`,className:"slider-image"})},i))]})})}function oz(){var u;const{videogameId:t}=PE(),{selected:e,getSelected:n,isLoading:r}=sF({id:[t]}),{favoritesIds:i}=za(),[s,o]=_.useState(null),{user:a}=qt();_.useEffect(()=>{n()},[t]);function l(c){o(c)}return h.jsx(h.Fragment,{children:r?h.jsx(pi,{size:280,lineWeight:7,speed:1.4,color:"white"}):h.jsxs("section",{children:[h.jsxs("h3",{children:[e.title," ",h.jsx("br",{}),h.jsx("small",{children:e.year})]}),h.jsxs("figure",{className:"image-container",children:[h.jsx("img",{src:e.poster||"https://live.staticflickr.com/2886/34427545586_37151702ce_z.jpg",alt:`${e.Title} poster`}),h.jsx(Ua,{onClick:c=>{c.preventDefault(),o(e.id),Va({selectedVideogame:e.id,user:a,handleFavoriteUpdate:l})},isActive:s===e.id||i.includes(e.id)})]}),h.jsx("small",{children:e.rating}),((u=e.screenshots)==null?void 0:u.length)>0&&h.jsxs("div",{children:[h.jsx("h4",{children:"Screenshots"}),h.jsx(sz,{screenshots:e.screenshots,trailer:e.trailer})]}),h.jsx("p",{children:e.description}),h.jsx(oF,{videogameId:t})]},e.id)})}function az(){const[t,e]=_.useState([]),[n,r]=_.useState(!0);return{videogames:t,getVideogames:async()=>{const s=await YM();e(s),r(!1)},isLoading:n}}function lz(){const{videogames:t,getVideogames:e,isLoading:n}=az(),[r,i]=_.useState(null),{favoritesIds:s}=za(),{user:o}=qt();_.useEffect(()=>{e()},[]);function a(l){i(l)}return h.jsx(h.Fragment,{children:n?h.jsx(pi,{size:280,lineWeight:7,speed:1.4,color:"white"}):h.jsx("section",{children:h.jsx("ul",{children:t.map(l=>h.jsxs("li",{className:"videogames-element",children:[h.jsxs("h3",{children:[l.title," ",h.jsx("br",{}),h.jsx("small",{children:l.year})]}),h.jsx(Tt,{to:"/videogames/"+l.id,children:h.jsxs("figure",{className:"image-container",children:[h.jsx("img",{src:l.poster||"https://live.staticflickr.com/2886/34427545586_37151702ce_z.jpg",alt:""}),h.jsx(Ua,{onClick:u=>{u.preventDefault(),i(l.id),Va({selectedVideogame:l.id,user:o,handleFavoriteUpdate:a})},isActive:r===l.id||s.includes(l.id)})]})})]},l.id))})})})}function ln({children:t}){const{user:e,loading:n}=qt();return n?h.jsxs("h1",{children:["Cargando ",h.jsx(pi,{size:280,lineWeight:7,speed:1.4,color:"white"})]}):e?h.jsx(h.Fragment,{children:t}):h.jsx(kO,{to:"/login",replace:!0})}const eI=_.createContext();function tI(){return _.useContext(eI)}function uz({children:t}){const[e,n]=_.useState([]),r=i=>{n(i)};return h.jsx(eI.Provider,{value:{searchResults:e,updateSearchResults:r},children:t})}function nI(){const{user:t}=qt(),[e,n]=_.useState(null),[r,i]=_.useState(!0);return _.useEffect(()=>{if(!(t!=null&&t.uid)){n(null),i(!1);return}const s=Dn(Sn,"users",t.uid),o=Bb(s,a=>{a.exists()?n({id:a.id,...a.data()}):n(null),i(!1)},a=>{console.error("Error listening user profile:",a),i(!1)});return()=>o()},[t==null?void 0:t.uid]),{userData:e,loadingUserData:r}}function cz(){const{userData:t,loading:e}=nI();return e?h.jsx("div",{children:"Loading..."}):t?(console.log("profilePicture URL:",t.profilePicture),h.jsxs("figure",{className:"userprofile-container",children:[h.jsx(Tt,{to:"/userprofile",children:h.jsx("img",{className:"userprofile-img",src:t.profilePicture||"https://via.placeholder.com/150",alt:`Image profile of ${t.username}`,width:"150",height:"150"})}),h.jsx("h5",{children:t.username})]})):h.jsxs("div",{children:[" ",h.jsx("img",{src:"https://via.placeholder.com/150"})]})}function fz(){return h.jsx(Tt,{to:"/top25",children:"Top 25"})}function dz(){const t=ga(),e=n=>{const r=n.target.value;r!==""&&t(`/genre/${r}`)};return h.jsxs("select",{className:"filtro",onChange:e,name:"genderFilter",children:[h.jsx("option",{value:"",children:"Choose Gender"}),h.jsx("option",{value:"action",children:"Action"}),h.jsx("option",{value:"arcade",children:"Arcade"}),h.jsx("option",{value:"role-playing-games-rpg",children:"RPG"}),h.jsx("option",{value:"indie",children:"Indie"}),h.jsx("option",{value:"adventure",children:"Adventure"}),h.jsx("option",{value:"strategy",children:"Strategy"}),h.jsx("option",{value:"shooter",children:"Shooter"}),h.jsx("option",{value:"casual",children:"Casual"}),h.jsx("option",{value:"simulation",children:"Simulation"}),h.jsx("option",{value:"indie",children:"Puzzle"}),h.jsx("option",{value:"platformer",children:"Platform"}),h.jsx("option",{value:"racing",children:"Racing"}),h.jsx("option",{value:"massively-multiplayer",children:"Massive multiplayer"}),h.jsx("option",{value:"sports",children:"Sports"}),h.jsx("option",{value:"family",children:"Family"}),h.jsx("option",{value:"fighting",children:"Fighting"}),h.jsx("option",{value:"board-games",children:"Board Games"}),h.jsx("option",{value:"educational",children:"Educational"}),h.jsx("option",{value:"card",children:"Card"})]})}function hz(){return h.jsx(Tt,{to:"/",children:"Home"})}function pz(){const[t,e]=_.useState(!1),n=()=>{e(!t)};return h.jsxs("nav",{className:`menu ${t?"open":""}`,children:[h.jsx("div",{className:"menu-toggle",onClick:n,children:h.jsx("span",{className:`toggle-icon ${t?"open":""}`})}),h.jsxs("ul",{className:"nav",children:[h.jsx("li",{className:"nav-item",children:h.jsx(hz,{})}),h.jsx("li",{className:"nav-item",children:h.jsx(fz,{})}),h.jsx("li",{id:"filtro",className:"nav-item",children:h.jsx(dz,{})}),h.jsx("li",{className:"nav-item",children:h.jsx(Tt,{to:"/favorites",className:"nav-link",children:"Favorites"})}),h.jsx("li",{className:"nav-item",children:h.jsx(Tt,{to:"/SobreNosotros",className:"nav-link",children:"About Us"})})]})]})}function mz({showSearch:t}){const{updateSearchResults:e}=tI(),{logout:n}=qt(),r=ga(),i=async()=>{try{await n()}catch(o){console.log(o.message)}},s=async o=>{o.preventDefault();const l=new FormData(o.target).get("query");e(await qM({search:l})),r("/videogames")};return h.jsxs("header",{className:"header",children:[h.jsx(pz,{}),t&&h.jsx(h.Fragment,{children:h.jsxs("form",{action:"",className:"form",onSubmit:s,children:[h.jsx("input",{type:"text",name:"query",placeholder:"Search",className:"busqueda"}),h.jsx("button",{className:"btn",children:"Search"})]})}),h.jsx(cz,{}),h.jsx("button",{className:"logout",onClick:i,children:"Log out"})]})}function un({children:t}){return h.jsxs(h.Fragment,{children:[h.jsx(mz,{showSearch:!0}),t]})}function gz({favoritesIds:t}){const[e,n]=_.useState([]),[r,i]=_.useState(!0),[s,o]=_.useState();return{favorites:e,getFavorites:async()=>{i(!0),o("");try{const l=await GM({favoriteIds:t});l.length===0?o("No se han encontrado favoritos"):n(l)}catch{o("Error obteniendo videojuegos")}finally{i(!1)}},isLoading:r,isError:s}}function vz(){const{favoritesIds:t}=za(),{favorites:e,getFavorites:n,isLoading:r,isError:i}=gz({favoritesIds:t}),[s,o]=_.useState(null),{user:a}=qt();_.useEffect(()=>{n()},[t]);function l(u){o(u)}return h.jsx(h.Fragment,{children:r?h.jsx(pi,{size:280,lineWeight:7,speed:1.4,color:"white"}):h.jsxs("section",{children:[console.log(i),i?h.jsx("p",{children:i}):h.jsx("ul",{children:e.map(u=>h.jsxs("li",{className:"videogames-element",children:[h.jsxs("h3",{children:[u.title," ",h.jsx("br",{}),h.jsx("small",{children:u.year})]}),h.jsx(Tt,{to:"/videogames/"+u.id,children:h.jsxs("figure",{className:"image-container",children:[h.jsx("img",{src:u.poster||"https://live.staticflickr.com/2886/34427545586_37151702ce_z.jpg",alt:`${u.Title} poster`}),h.jsx(Ua,{onClick:c=>{c.preventDefault(),o(u.id),Va({selectedVideogame:u.id,user:a,handleFavoriteUpdate:l})},isActive:s===u.id||t.includes(u.id)})]})})]},u.id))})]})})}function yz(){const[t,e]=_.useState(null),[n,r]=_.useState(""),{user:i,uploadImageToCloudinary:s}=qt(),{userData:o}=nI(),a=_.useRef(null);_.useEffect(()=>{o!=null&&o.description&&r(o.description)},[o==null?void 0:o.description]);const l=()=>{a.current&&a.current.click()},u=y=>{const S=y.target.files[0];if(!S)return;const m=["image/jpeg","image/png","image/webp","image/jpg"],p=4*1024*1024;if(!m.includes(S.type)){alert("Only JPG, PNG, JPG or WEBP files are allowed.");return}if(S.size>p){alert("File size should be less than 4MB.");return}e(S)},c=y=>{r(y.target.value)},f=async y=>{if(!i)throw new Error("No authenticated user");const S=Dn(Sn,"users",i.uid);await oc(S,{description:y})},d=async y=>{if(!i)throw new Error("No authenticated user");const S=await s(y);await ep(i,{photoURL:S});const m=Dn(Sn,"users",i.uid);return await oc(m,{profilePicture:S}),S},g=y=>{const S=document.createElement("div");return S.textContent=y,S.innerHTML},w=async y=>{y.preventDefault(),console.group("Profile Update Process");try{if(n){if(n.length>300){alert("Description is too long (max 300 characters).");return}const S=g(n);await f(S),console.log("User description updated successfully."),r("")}else console.log("No new description to update.");if(t){const S=await d(t);console.log("Profile image uploaded successfully:",S),e(null)}}catch(S){console.error("Error during profile update:",S),alert("Error updating profile: "+S.message)}finally{console.groupEnd()}};return h.jsxs(h.Fragment,{children:[h.jsxs("section",{children:[h.jsx("h4",{children:"User Information"}),h.jsxs("p",{children:["Profile Picture:",h.jsx("img",{className:"userprofile-img",src:(i==null?void 0:i.photoURL)||"https://picsum.photos/150",alt:`Imagen de perfil de ${(i==null?void 0:i.displayName)||"user"}`,width:150,height:150})]}),h.jsxs("p",{children:["Email: ",i==null?void 0:i.email]}),h.jsxs("p",{children:["User Name: ",i==null?void 0:i.displayName]}),h.jsxs("p",{children:["Description: ",(o==null?void 0:o.description)||"No description yet"]})]}),h.jsx("section",{children:h.jsxs("form",{className:"form2",onSubmit:w,children:[h.jsx("label",{htmlFor:"file",children:"New Profile Picture:"}),h.jsx("input",{id:"file",ref:a,type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:u,style:{display:"none"}}),h.jsx("button",{type:"button",onClick:l,className:"file-button",children:"Select Image"}),h.jsx("p",{children:"File size should be less than 4MB(JPG,JPEG,PNG,WEBP)"}),h.jsx("label",{htmlFor:"user-description",children:"New Description: "}),h.jsx("textarea",{value:n,id:"user-description",maxLength:300,onChange:c}),h.jsx("button",{className:"actperfil",type:"submit",children:"Update Profile"})]})})]})}function wz(){return h.jsx(yz,{})}function Sz({genre:t}){const[e,n]=_.useState(!0),[r,i]=_.useState([]);return{games:r,isLoading:e,getGamesByGenre:async()=>{const o=await QM(t);i(o),n(!1)}}}function Ez(){const{favoritesIds:t}=za(),{genre:e}=PE(),[n,r]=_.useState(null),{isLoading:i,games:s,getGamesByGenre:o}=Sz({genre:e});return _.useEffect(()=>{o()},[e]),h.jsx(h.Fragment,{children:i?h.jsx(pi,{size:280,lineWeight:7,speed:1.4,color:"white"}):h.jsx("section",{children:h.jsx("ul",{children:s.map(a=>h.jsxs("li",{className:"videogames-element",children:[h.jsxs("h3",{children:[a.title," ",h.jsx("br",{}),h.jsx("small",{children:a.year})]}),h.jsx(Tt,{to:"/videogames/"+a.id,children:h.jsxs("figure",{className:"image-container",children:[h.jsx("img",{src:a.poster||"https://live.staticflickr.com/2886/34427545586_37151702ce_z.jpg",alt:`${a.Title} poster`}),h.jsx(Ua,{onClick:l=>{l.preventDefault(),r(a.id),Va({selectedVideogame:a.id,user,handleFavoriteUpdate})},isActive:n===a.id||t.includes(a.id)})]})})]},a.id))})})})}function _z(){return h.jsx("p",{children:"No se han obtenido resultados"})}function kz(){const{searchResults:t}=tI(),e=(t==null?void 0:t.length)>0;return h.jsx(h.Fragment,{children:h.jsx("ul",{className:"videogames-list",children:e?t.map(n=>h.jsx(Ip,{videogame:n},n.id)):h.jsx(_z,{})})})}function bz(){return h.jsx(h.Fragment,{children:h.jsx("section",{children:h.jsx(kz,{})})})}function Tz(){return h.jsxs("section",{children:[h.jsx("h1",{children:"About US"}),h.jsxs("main",{children:[h.jsxs("section",{className:"no-box",children:[h.jsx("h2",{children:"My History"}),h.jsx("p",{children:" I'm a passionate video game enthusiast with the mission of providing the best online video game search experience. What started as a small personal project has grown into a platform I hope becomes your go-to site for discovering games. "})]}),h.jsxs("section",{className:"no-box",children:[h.jsx("h2",{children:"My Vision"}),h.jsx("p",{children:"At JuegosFlix, I believe that discovering your next favorite video game should be exciting and effortless. As a developer, designer, and gamer, I created an intuitive platform for finding games across genres and platforms. Whether you're a casual player or a hardcore gamer, JuegosFlix is designed to enhance your search and discovery journey.          "})]}),h.jsxs("section",{className:"no-box",children:[h.jsx("h2",{children:"Contact us"}),h.jsx("p",{children:"Feel free to get in touch with us if you have any questions or suggestions. You can reach us at JuegosFlix@gmail.com. ¡We are here to help you!"})]})]})]})}function Iz(){return h.jsx("section",{children:h.jsxs("main",{children:[h.jsx("h1",{children:"Privacy Notice"}),h.jsx("p",{children:"Protection of personal data according to the LOPD JuegosFlix, in compliance with current legislation on the protection of personal data, informs that the personal data collected through the forms on the website: www.JuegosFlix.com, are included in specific automated files of JuegosFlix service users."}),h.jsx("p",{children:"The collection and automated processing of personal data is intended for maintaining the commercial relationship and performing tasks of information, training, advice, and other activities related to JuegosFlix."}),h.jsx("p",{children:"These data will only be transferred to entities that are necessary for the sole purpose of fulfilling the aforementioned purpose."}),h.jsx("p",{children:"JuegosFlix takes necessary measures to ensure the security, integrity, and confidentiality of the data in accordance with the provisions of Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such data."}),h.jsx("p",{children:"The user may exercise the rights of access, opposition, rectification, and cancellation recognized in the aforementioned Regulation (EU) at any time. These rights can be exercised by the user through email to: info@JuegosFlix.com"}),h.jsx("p",{children:"The user declares that all data provided by him/her are true and correct, and undertakes to keep them updated by communicating any changes to JuegosFlix."}),h.jsx("p",{children:"Purpose of processing personal data:"}),h.jsx("p",{children:"What is the purpose of processing your personal data?"}),h.jsx("p",{children:"At JuegosFlix, we will process your personal data collected through the website for the following purposes:"}),h.jsx("p",{children:"In the event of contracting the goods and services offered through www.JuegosFlix.com, for maintaining the contractual relationship, as well as the management, administration, information, provision, and improvement of the service. Sending requested information through the forms available on www.JuegosFlix.com. Sending newsletters, as well as commercial communications regarding promotions and/or advertising from JuegosFlix and the sector. We remind you that you can oppose the sending of commercial communications through any means and at any time by sending an email to the address indicated above."}),h.jsx("p",{children:"The fields in these records must be filled out, as it is impossible to fulfill the stated purposes without providing this data."})]})})}function xz(){return h.jsx("section",{children:h.jsxs("main",{children:[h.jsx("h1",{children:"Legal Notice"}),h.jsx("p",{children:"Address C/Radio Peninsular, 14 - 28660 - Madrid, cannot assume any responsibility derived from the incorrect, inappropriate, or unlawful use of the information appearing on the web pages of www.JuegosFlix.com"}),h.jsx("p",{children:"Within the limits established by law, www.JuegosFlix.com does not assume any responsibility for the lack of truthfulness, integrity, updating, and accuracy of the data or information contained on its web pages."}),h.jsx("p",{children:"The content and information do not bind www.JuegosFlix.com or constitute any kind of legal opinion, advice, or guidance, as they are merely a service offered for informational and educational purposes."}),h.jsx("p",{children:"The web pages of www.JuegosFlix.com may contain links to other third-party pages that www.JuegosFlix.com cannot control. Therefore, www.JuegosFlix.com cannot assume responsibility for the content that may appear on third-party pages."}),h.jsx("p",{children:"The texts, images, sounds, animations, software, and other content included on this website are the exclusive property of www.JuegosFlix.com or its licensors. Any act of transmission, distribution, transfer, reproduction, storage, or total or partial public communication must have the express consent of www.JuegosFlix.com."}),h.jsx("p",{children:"Likewise, to access some of the services offered by www.JuegosFlix.com through the website, you may need to provide certain personal data. In compliance with the provisions of Organic Law 15/1999, of December 13, on the Protection of Personal Data, we inform you that, by completing the forms, your personal data will be incorporated and processed in the files of Ana María Bamba Bardavío in order to provide and offer our services, as well as to inform you of website improvements. We also inform you of the possibility to exercise your rights of access, rectification, cancellation, and opposition to your personal data, free of charge, by email to info@JuegosFlix.com or at the address C/Radio Peninsular, 14 - 28660 - Madrid."})]})})}function Cz(){return h.jsx(uz,{children:h.jsx("main",{className:"App",children:h.jsxs(TO,{children:[h.jsx(xt,{path:"/login",element:h.jsx(WM,{})}),h.jsx(xt,{path:"/",element:h.jsx(ln,{children:h.jsxs(un,{children:[h.jsx(r$,{}),h.jsx(Kt,{})]})})}),h.jsx(xt,{path:"/videogames",element:h.jsx(ln,{children:h.jsxs(un,{children:[h.jsx(bz,{}),h.jsx(Kt,{})]})})}),h.jsx(xt,{path:"/videogames/:videogameId",element:h.jsx(ln,{children:h.jsxs(un,{children:[h.jsx(oz,{}),h.jsx(Kt,{})]})})}),h.jsx(xt,{path:"/top25",element:h.jsx(ln,{children:h.jsxs(un,{children:[h.jsx(lz,{}),h.jsx(Kt,{})]})})}),h.jsx(xt,{path:"/favorites",element:h.jsx(ln,{children:h.jsxs(un,{children:[h.jsx(vz,{}),h.jsx(Kt,{})]})})}),h.jsx(xt,{path:"/userprofile",element:h.jsx(ln,{children:h.jsxs(un,{children:[h.jsx(wz,{}),h.jsx(Kt,{})]})})}),h.jsx(xt,{path:"/genre/:genre",element:h.jsx(ln,{children:h.jsxs(un,{children:[h.jsx(Ez,{}),h.jsx(Kt,{})]})})}),h.jsx(xt,{path:"/register",element:h.jsx(iF,{})}),h.jsx(xt,{path:"/sobrenosotros",element:h.jsx(ln,{children:h.jsxs(un,{children:[h.jsx(Tz,{}),h.jsx(Kt,{})]})})}),h.jsx(xt,{path:"/PrivacyNotice",element:h.jsx(ln,{children:h.jsxs(un,{children:[h.jsx(Iz,{}),h.jsx(Kt,{})]})})}),h.jsx(xt,{path:"/LegalNotice",element:h.jsx(ln,{children:h.jsxs(un,{children:[h.jsx(xz,{}),h.jsx(Kt,{})]})})})]})})})}Yd.createRoot(document.getElementById("root")).render(h.jsx(RO,{children:h.jsx(HM,{children:h.jsx(Cz,{})})}));
