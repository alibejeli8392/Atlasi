(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Yf={exports:{}},Ta={},qf={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0;function OM(){if(v0)return _t;v0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function y(U,Q,Fe){this.props=U,this.context=Q,this.refs=w,this.updater=Fe||x}y.prototype.isReactComponent={},y.prototype.setState=function(U,Q){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Q,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function S(){}S.prototype=y.prototype;function R(U,Q,Fe){this.props=U,this.context=Q,this.refs=w,this.updater=Fe||x}var b=R.prototype=new S;b.constructor=R,M(b,y.prototype),b.isPureReactComponent=!0;var P=Array.isArray,F=Object.prototype.hasOwnProperty,L={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function T(U,Q,Fe){var He,Ne={},ae=null,ye=null;if(Q!=null)for(He in Q.ref!==void 0&&(ye=Q.ref),Q.key!==void 0&&(ae=""+Q.key),Q)F.call(Q,He)&&!B.hasOwnProperty(He)&&(Ne[He]=Q[He]);var me=arguments.length-2;if(me===1)Ne.children=Fe;else if(1<me){for(var Ie=Array(me),Qe=0;Qe<me;Qe++)Ie[Qe]=arguments[Qe+2];Ne.children=Ie}if(U&&U.defaultProps)for(He in me=U.defaultProps,me)Ne[He]===void 0&&(Ne[He]=me[He]);return{$$typeof:n,type:U,key:ae,ref:ye,props:Ne,_owner:L.current}}function N(U,Q){return{$$typeof:n,type:U.type,key:Q,ref:U.ref,props:U.props,_owner:U._owner}}function k(U){return typeof U=="object"&&U!==null&&U.$$typeof===n}function O(U){var Q={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Fe){return Q[Fe]})}var q=/\/+/g;function le(U,Q){return typeof U=="object"&&U!==null&&U.key!=null?O(""+U.key):Q.toString(36)}function ce(U,Q,Fe,He,Ne){var ae=typeof U;(ae==="undefined"||ae==="boolean")&&(U=null);var ye=!1;if(U===null)ye=!0;else switch(ae){case"string":case"number":ye=!0;break;case"object":switch(U.$$typeof){case n:case e:ye=!0}}if(ye)return ye=U,Ne=Ne(ye),U=He===""?"."+le(ye,0):He,P(Ne)?(Fe="",U!=null&&(Fe=U.replace(q,"$&/")+"/"),ce(Ne,Q,Fe,"",function(Qe){return Qe})):Ne!=null&&(k(Ne)&&(Ne=N(Ne,Fe+(!Ne.key||ye&&ye.key===Ne.key?"":(""+Ne.key).replace(q,"$&/")+"/")+U)),Q.push(Ne)),1;if(ye=0,He=He===""?".":He+":",P(U))for(var me=0;me<U.length;me++){ae=U[me];var Ie=He+le(ae,me);ye+=ce(ae,Q,Fe,Ie,Ne)}else if(Ie=g(U),typeof Ie=="function")for(U=Ie.call(U),me=0;!(ae=U.next()).done;)ae=ae.value,Ie=He+le(ae,me++),ye+=ce(ae,Q,Fe,Ie,Ne);else if(ae==="object")throw Q=String(U),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return ye}function H(U,Q,Fe){if(U==null)return U;var He=[],Ne=0;return ce(U,He,"","",function(ae){return Q.call(Fe,ae,Ne++)}),He}function Z(U){if(U._status===-1){var Q=U._result;Q=Q(),Q.then(function(Fe){(U._status===0||U._status===-1)&&(U._status=1,U._result=Fe)},function(Fe){(U._status===0||U._status===-1)&&(U._status=2,U._result=Fe)}),U._status===-1&&(U._status=0,U._result=Q)}if(U._status===1)return U._result.default;throw U._result}var Y={current:null},X={transition:null},ne={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:X,ReactCurrentOwner:L};function re(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:H,forEach:function(U,Q,Fe){H(U,function(){Q.apply(this,arguments)},Fe)},count:function(U){var Q=0;return H(U,function(){Q++}),Q},toArray:function(U){return H(U,function(Q){return Q})||[]},only:function(U){if(!k(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},_t.Component=y,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=R,_t.StrictMode=r,_t.Suspense=d,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,_t.act=re,_t.cloneElement=function(U,Q,Fe){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var He=M({},U.props),Ne=U.key,ae=U.ref,ye=U._owner;if(Q!=null){if(Q.ref!==void 0&&(ae=Q.ref,ye=L.current),Q.key!==void 0&&(Ne=""+Q.key),U.type&&U.type.defaultProps)var me=U.type.defaultProps;for(Ie in Q)F.call(Q,Ie)&&!B.hasOwnProperty(Ie)&&(He[Ie]=Q[Ie]===void 0&&me!==void 0?me[Ie]:Q[Ie])}var Ie=arguments.length-2;if(Ie===1)He.children=Fe;else if(1<Ie){me=Array(Ie);for(var Qe=0;Qe<Ie;Qe++)me[Qe]=arguments[Qe+2];He.children=me}return{$$typeof:n,type:U.type,key:Ne,ref:ae,props:He,_owner:ye}},_t.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},_t.createElement=T,_t.createFactory=function(U){var Q=T.bind(null,U);return Q.type=U,Q},_t.createRef=function(){return{current:null}},_t.forwardRef=function(U){return{$$typeof:f,render:U}},_t.isValidElement=k,_t.lazy=function(U){return{$$typeof:m,_payload:{_status:-1,_result:U},_init:Z}},_t.memo=function(U,Q){return{$$typeof:h,type:U,compare:Q===void 0?null:Q}},_t.startTransition=function(U){var Q=X.transition;X.transition={};try{U()}finally{X.transition=Q}},_t.unstable_act=re,_t.useCallback=function(U,Q){return Y.current.useCallback(U,Q)},_t.useContext=function(U){return Y.current.useContext(U)},_t.useDebugValue=function(){},_t.useDeferredValue=function(U){return Y.current.useDeferredValue(U)},_t.useEffect=function(U,Q){return Y.current.useEffect(U,Q)},_t.useId=function(){return Y.current.useId()},_t.useImperativeHandle=function(U,Q,Fe){return Y.current.useImperativeHandle(U,Q,Fe)},_t.useInsertionEffect=function(U,Q){return Y.current.useInsertionEffect(U,Q)},_t.useLayoutEffect=function(U,Q){return Y.current.useLayoutEffect(U,Q)},_t.useMemo=function(U,Q){return Y.current.useMemo(U,Q)},_t.useReducer=function(U,Q,Fe){return Y.current.useReducer(U,Q,Fe)},_t.useRef=function(U){return Y.current.useRef(U)},_t.useState=function(U){return Y.current.useState(U)},_t.useSyncExternalStore=function(U,Q,Fe){return Y.current.useSyncExternalStore(U,Q,Fe)},_t.useTransition=function(){return Y.current.useTransition()},_t.version="18.3.1",_t}var _0;function lp(){return _0||(_0=1,qf.exports=OM()),qf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x0;function BM(){if(x0)return Ta;x0=1;var n=lp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,d,h){var m,v={},g=null,x=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(x=d.ref);for(m in d)r.call(d,m)&&!l.hasOwnProperty(m)&&(v[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)v[m]===void 0&&(v[m]=d[m]);return{$$typeof:e,type:f,key:g,ref:x,props:v,_owner:o.current}}return Ta.Fragment=t,Ta.jsx=u,Ta.jsxs=u,Ta}var y0;function kM(){return y0||(y0=1,Yf.exports=BM()),Yf.exports}var ue=kM(),ru={},Kf={exports:{}},qn={},$f={exports:{}},Zf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0;function VM(){return S0||(S0=1,(function(n){function e(X,ne){var re=X.length;X.push(ne);e:for(;0<re;){var U=re-1>>>1,Q=X[U];if(0<o(Q,ne))X[U]=ne,X[re]=Q,re=U;else break e}}function t(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var ne=X[0],re=X.pop();if(re!==ne){X[0]=re;e:for(var U=0,Q=X.length,Fe=Q>>>1;U<Fe;){var He=2*(U+1)-1,Ne=X[He],ae=He+1,ye=X[ae];if(0>o(Ne,re))ae<Q&&0>o(ye,Ne)?(X[U]=ye,X[ae]=re,U=ae):(X[U]=Ne,X[He]=re,U=He);else if(ae<Q&&0>o(ye,re))X[U]=ye,X[ae]=re,U=ae;else break e}}return ne}function o(X,ne){var re=X.sortIndex-ne.sortIndex;return re!==0?re:X.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();n.unstable_now=function(){return u.now()-f}}var d=[],h=[],m=1,v=null,g=3,x=!1,M=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(X){for(var ne=t(h);ne!==null;){if(ne.callback===null)r(h);else if(ne.startTime<=X)r(h),ne.sortIndex=ne.expirationTime,e(d,ne);else break;ne=t(h)}}function P(X){if(w=!1,b(X),!M)if(t(d)!==null)M=!0,Z(F);else{var ne=t(h);ne!==null&&Y(P,ne.startTime-X)}}function F(X,ne){M=!1,w&&(w=!1,S(T),T=-1),x=!0;var re=g;try{for(b(ne),v=t(d);v!==null&&(!(v.expirationTime>ne)||X&&!O());){var U=v.callback;if(typeof U=="function"){v.callback=null,g=v.priorityLevel;var Q=U(v.expirationTime<=ne);ne=n.unstable_now(),typeof Q=="function"?v.callback=Q:v===t(d)&&r(d),b(ne)}else r(d);v=t(d)}if(v!==null)var Fe=!0;else{var He=t(h);He!==null&&Y(P,He.startTime-ne),Fe=!1}return Fe}finally{v=null,g=re,x=!1}}var L=!1,B=null,T=-1,N=5,k=-1;function O(){return!(n.unstable_now()-k<N)}function q(){if(B!==null){var X=n.unstable_now();k=X;var ne=!0;try{ne=B(!0,X)}finally{ne?le():(L=!1,B=null)}}else L=!1}var le;if(typeof R=="function")le=function(){R(q)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,H=ce.port2;ce.port1.onmessage=q,le=function(){H.postMessage(null)}}else le=function(){y(q,0)};function Z(X){B=X,L||(L=!0,le())}function Y(X,ne){T=y(function(){X(n.unstable_now())},ne)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(X){X.callback=null},n.unstable_continueExecution=function(){M||x||(M=!0,Z(F))},n.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<X?Math.floor(1e3/X):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(X){switch(g){case 1:case 2:case 3:var ne=3;break;default:ne=g}var re=g;g=ne;try{return X()}finally{g=re}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(X,ne){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var re=g;g=X;try{return ne()}finally{g=re}},n.unstable_scheduleCallback=function(X,ne,re){var U=n.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,X){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=re+Q,X={id:m++,callback:ne,priorityLevel:X,startTime:re,expirationTime:Q,sortIndex:-1},re>U?(X.sortIndex=re,e(h,X),t(d)===null&&X===t(h)&&(w?(S(T),T=-1):w=!0,Y(P,re-U))):(X.sortIndex=Q,e(d,X),M||x||(M=!0,Z(F))),X},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(X){var ne=g;return function(){var re=g;g=ne;try{return X.apply(this,arguments)}finally{g=re}}}})(Zf)),Zf}var M0;function zM(){return M0||(M0=1,$f.exports=VM()),$f.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0;function HM(){if(E0)return qn;E0=1;var n=lp(),e=zM();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function g(i){return d.call(v,i)?!0:d.call(m,i)?!1:h.test(i)?v[i]=!0:(m[i]=!0,!1)}function x(i,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,a,c){if(s===null||typeof s>"u"||x(i,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function w(i,s,a,c,p,_,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new w(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];y[s]=new w(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new w(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new w(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new w(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new w(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new w(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new w(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new w(i,5,!1,i.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(S,R);y[s]=new w(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(S,R);y[s]=new w(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(S,R);y[s]=new w(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new w(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new w(i,1,!1,i.toLowerCase(),null,!0,!0)});function b(i,s,a,c){var p=y.hasOwnProperty(s)?y[s]:null;(p!==null?p.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,a,p,c)&&(a=null),c||p===null?g(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):p.mustUseProperty?i[p.propertyName]=a===null?p.type===3?!1:"":a:(s=p.attributeName,c=p.attributeNamespace,a===null?i.removeAttribute(s):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,c?i.setAttributeNS(c,s,a):i.setAttribute(s,a))))}var P=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),L=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),O=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),X=Symbol.iterator;function ne(i){return i===null||typeof i!="object"?null:(i=X&&i[X]||i["@@iterator"],typeof i=="function"?i:null)}var re=Object.assign,U;function Q(i){if(U===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);U=s&&s[1]||""}return`
`+U+i}var Fe=!1;function He(i,s){if(!i||Fe)return"";Fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(oe){var c=oe}Reflect.construct(i,[],s)}else{try{s.call()}catch(oe){c=oe}i.call(s.prototype)}else{try{throw Error()}catch(oe){c=oe}i()}}catch(oe){if(oe&&c&&typeof oe.stack=="string"){for(var p=oe.stack.split(`
`),_=c.stack.split(`
`),A=p.length-1,I=_.length-1;1<=A&&0<=I&&p[A]!==_[I];)I--;for(;1<=A&&0<=I;A--,I--)if(p[A]!==_[I]){if(A!==1||I!==1)do if(A--,I--,0>I||p[A]!==_[I]){var V=`
`+p[A].replace(" at new "," at ");return i.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",i.displayName)),V}while(1<=A&&0<=I);break}}}finally{Fe=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?Q(i):""}function Ne(i){switch(i.tag){case 5:return Q(i.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return i=He(i.type,!1),i;case 11:return i=He(i.type.render,!1),i;case 1:return i=He(i.type,!0),i;default:return""}}function ae(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case B:return"Fragment";case L:return"Portal";case N:return"Profiler";case T:return"StrictMode";case le:return"Suspense";case ce:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case O:return(i.displayName||"Context")+".Consumer";case k:return(i._context.displayName||"Context")+".Provider";case q:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case H:return s=i.displayName||null,s!==null?s:ae(i.type)||"Memo";case Z:s=i._payload,i=i._init;try{return ae(i(s))}catch{}}return null}function ye(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(s);case 8:return s===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function me(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ie(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Qe(i){var s=Ie(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,_=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(A){c=""+A,_.call(this,A)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function et(i){i._valueTracker||(i._valueTracker=Qe(i))}function kt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return i&&(c=Ie(i)?i.checked?"true":"false":i.value),i=c,i!==a?(s.setValue(i),!0):!1}function ft(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Tt(i,s){var a=s.checked;return re({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function It(i,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=me(s.value!=null?s.value:a),i._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function dt(i,s){s=s.checked,s!=null&&b(i,"checked",s,!1)}function Zt(i,s){dt(i,s);var a=me(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(c==="submit"||c==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?yn(i,s.type,a):s.hasOwnProperty("defaultValue")&&yn(i,s.type,me(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Vt(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function yn(i,s,a){(s!=="number"||ft(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var G=Array.isArray;function zt(i,s,a,c){if(i=i.options,s){s={};for(var p=0;p<a.length;p++)s["$"+a[p]]=!0;for(a=0;a<i.length;a++)p=s.hasOwnProperty("$"+i[a].value),i[a].selected!==p&&(i[a].selected=p),p&&c&&(i[a].defaultSelected=!0)}else{for(a=""+me(a),s=null,p=0;p<i.length;p++){if(i[p].value===a){i[p].selected=!0,c&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function ht(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Rt(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(G(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:me(a)}}function De(i,s){var a=me(s.value),c=me(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),c!=null&&(i.defaultValue=""+c)}function Wt(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function D(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?D(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var K,he=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,p){MSApp.execUnsafeLocalFunction(function(){return i(s,a,c,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=K.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function ge(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(i){Pe.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Me[s]=Me[i]})});function fe(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Me.hasOwnProperty(i)&&Me[i]?(""+s).trim():s+"px"}function pe(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,p=fe(a,s[a],c);a==="float"&&(a="cssFloat"),c?i.setProperty(a,p):i[a]=p}}var Ue=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Be(i,s){if(s){if(Ue[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function we(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ee=null;function it(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ot=null,mt=null,z=null;function Ae(i){if(i=ua(i)){if(typeof ot!="function")throw Error(t(280));var s=i.stateNode;s&&(s=xl(s),ot(i.stateNode,i.type,s))}}function de(i){mt?z?z.push(i):z=[i]:mt=i}function Oe(){if(mt){var i=mt,s=z;if(z=mt=null,Ae(i),s)for(i=0;i<s.length;i++)Ae(s[i])}}function Re(i,s){return i(s)}function ve(){}var je=!1;function at(i,s,a){if(je)return i(s,a);je=!0;try{return Re(i,s,a)}finally{je=!1,(mt!==null||z!==null)&&(ve(),Oe())}}function Ot(i,s){var a=i.stateNode;if(a===null)return null;var c=xl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var At=!1;if(f)try{var In={};Object.defineProperty(In,"passive",{get:function(){At=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{At=!1}function si(i,s,a,c,p,_,A,I,V){var oe=Array.prototype.slice.call(arguments,3);try{s.apply(a,oe)}catch(xe){this.onError(xe)}}var tr=!1,ks=null,ss=!1,Vs=null,nr={onError:function(i){tr=!0,ks=i}};function Ho(i,s,a,c,p,_,A,I,V){tr=!1,ks=null,si.apply(nr,arguments)}function nl(i,s,a,c,p,_,A,I,V){if(Ho.apply(this,arguments),tr){if(tr){var oe=ks;tr=!1,ks=null}else throw Error(t(198));ss||(ss=!0,Vs=oe)}}function Ui(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function os(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Go(i){if(Ui(i)!==i)throw Error(t(188))}function zs(i){var s=i.alternate;if(!s){if(s=Ui(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,c=s;;){var p=a.return;if(p===null)break;var _=p.alternate;if(_===null){if(c=p.return,c!==null){a=c;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===a)return Go(p),i;if(_===c)return Go(p),s;_=_.sibling}throw Error(t(188))}if(a.return!==c.return)a=p,c=_;else{for(var A=!1,I=p.child;I;){if(I===a){A=!0,a=p,c=_;break}if(I===c){A=!0,c=p,a=_;break}I=I.sibling}if(!A){for(I=_.child;I;){if(I===a){A=!0,a=_,c=p;break}if(I===c){A=!0,c=_,a=p;break}I=I.sibling}if(!A)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function Wo(i){return i=zs(i),i!==null?Xo(i):null}function Xo(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Xo(i);if(s!==null)return s;i=i.sibling}return null}var il=e.unstable_scheduleCallback,rl=e.unstable_cancelCallback,mc=e.unstable_shouldYield,gc=e.unstable_requestPaint,Qt=e.unstable_now,vc=e.unstable_getCurrentPriorityLevel,jo=e.unstable_ImmediatePriority,C=e.unstable_UserBlockingPriority,j=e.unstable_NormalPriority,se=e.unstable_LowPriority,ee=e.unstable_IdlePriority,J=null,be=null;function ze(i){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(J,i,void 0,(i.current.flags&128)===128)}catch{}}var Ce=Math.clz32?Math.clz32:lt,Ye=Math.log,Ze=Math.LN2;function lt(i){return i>>>=0,i===0?32:31-(Ye(i)/Ze|0)|0}var ut=64,Ke=4194304;function St(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Ht(i,s){var a=i.pendingLanes;if(a===0)return 0;var c=0,p=i.suspendedLanes,_=i.pingedLanes,A=a&268435455;if(A!==0){var I=A&~p;I!==0?c=St(I):(_&=A,_!==0&&(c=St(_)))}else A=a&~p,A!==0?c=St(A):_!==0&&(c=St(_));if(c===0)return 0;if(s!==0&&s!==c&&(s&p)===0&&(p=c&-c,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=c;0<s;)a=31-Ce(s),p=1<<a,c|=i[a],s&=~p;return c}function Kt(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(i,s){for(var a=i.suspendedLanes,c=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var A=31-Ce(_),I=1<<A,V=p[A];V===-1?((I&a)===0||(I&c)!==0)&&(p[A]=Kt(I,s)):V<=s&&(i.expiredLanes|=I),_&=~I}}function on(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function ke(){var i=ut;return ut<<=1,(ut&4194240)===0&&(ut=64),i}function Sn(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function gt(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Ce(s),i[s]=a}function zn(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var c=i.eventTimes;for(i=i.expirationTimes;0<a;){var p=31-Ce(a),_=1<<p;s[p]=0,c[p]=-1,i[p]=-1,a&=~_}}function Hn(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var c=31-Ce(a),p=1<<c;p&s|i[c]&s&&(i[c]|=s),a&=~p}}var vt=0;function ir(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Ct,Xt,vi,Pt,_i,Fi=!1,as=[],Ar=null,wr=null,Cr=null,Yo=new Map,qo=new Map,Rr=[],sS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function em(i,s){switch(i){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":Yo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(s.pointerId)}}function Ko(i,s,a,c,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:_,targetContainers:[p]},s!==null&&(s=ua(s),s!==null&&Xt(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function oS(i,s,a,c,p){switch(s){case"focusin":return Ar=Ko(Ar,i,s,a,c,p),!0;case"dragenter":return wr=Ko(wr,i,s,a,c,p),!0;case"mouseover":return Cr=Ko(Cr,i,s,a,c,p),!0;case"pointerover":var _=p.pointerId;return Yo.set(_,Ko(Yo.get(_)||null,i,s,a,c,p)),!0;case"gotpointercapture":return _=p.pointerId,qo.set(_,Ko(qo.get(_)||null,i,s,a,c,p)),!0}return!1}function tm(i){var s=ls(i.target);if(s!==null){var a=Ui(s);if(a!==null){if(s=a.tag,s===13){if(s=os(a),s!==null){i.blockedOn=s,_i(i.priority,function(){vi(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function sl(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=xc(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var c=new a.constructor(a.type,a);Ee=c,a.target.dispatchEvent(c),Ee=null}else return s=ua(a),s!==null&&Xt(s),i.blockedOn=a,!1;s.shift()}return!0}function nm(i,s,a){sl(i)&&a.delete(s)}function aS(){Fi=!1,Ar!==null&&sl(Ar)&&(Ar=null),wr!==null&&sl(wr)&&(wr=null),Cr!==null&&sl(Cr)&&(Cr=null),Yo.forEach(nm),qo.forEach(nm)}function $o(i,s){i.blockedOn===s&&(i.blockedOn=null,Fi||(Fi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,aS)))}function Zo(i){function s(p){return $o(p,i)}if(0<as.length){$o(as[0],i);for(var a=1;a<as.length;a++){var c=as[a];c.blockedOn===i&&(c.blockedOn=null)}}for(Ar!==null&&$o(Ar,i),wr!==null&&$o(wr,i),Cr!==null&&$o(Cr,i),Yo.forEach(s),qo.forEach(s),a=0;a<Rr.length;a++)c=Rr[a],c.blockedOn===i&&(c.blockedOn=null);for(;0<Rr.length&&(a=Rr[0],a.blockedOn===null);)tm(a),a.blockedOn===null&&Rr.shift()}var Hs=P.ReactCurrentBatchConfig,ol=!0;function lS(i,s,a,c){var p=vt,_=Hs.transition;Hs.transition=null;try{vt=1,_c(i,s,a,c)}finally{vt=p,Hs.transition=_}}function uS(i,s,a,c){var p=vt,_=Hs.transition;Hs.transition=null;try{vt=4,_c(i,s,a,c)}finally{vt=p,Hs.transition=_}}function _c(i,s,a,c){if(ol){var p=xc(i,s,a,c);if(p===null)Fc(i,s,c,al,a),em(i,c);else if(oS(p,i,s,a,c))c.stopPropagation();else if(em(i,c),s&4&&-1<sS.indexOf(i)){for(;p!==null;){var _=ua(p);if(_!==null&&Ct(_),_=xc(i,s,a,c),_===null&&Fc(i,s,c,al,a),_===p)break;p=_}p!==null&&c.stopPropagation()}else Fc(i,s,c,null,a)}}var al=null;function xc(i,s,a,c){if(al=null,i=it(c),i=ls(i),i!==null)if(s=Ui(i),s===null)i=null;else if(a=s.tag,a===13){if(i=os(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return al=i,null}function im(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vc()){case jo:return 1;case C:return 4;case j:case se:return 16;case ee:return 536870912;default:return 16}default:return 16}}var br=null,yc=null,ll=null;function rm(){if(ll)return ll;var i,s=yc,a=s.length,c,p="value"in br?br.value:br.textContent,_=p.length;for(i=0;i<a&&s[i]===p[i];i++);var A=a-i;for(c=1;c<=A&&s[a-c]===p[_-c];c++);return ll=p.slice(i,1<c?1-c:void 0)}function ul(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function cl(){return!0}function sm(){return!1}function Zn(i){function s(a,c,p,_,A){this._reactName=a,this._targetInst=p,this.type=c,this.nativeEvent=_,this.target=A,this.currentTarget=null;for(var I in i)i.hasOwnProperty(I)&&(a=i[I],this[I]=a?a(_):_[I]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?cl:sm,this.isPropagationStopped=sm,this}return re(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),s}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sc=Zn(Gs),Qo=re({},Gs,{view:0,detail:0}),cS=Zn(Qo),Mc,Ec,Jo,fl=re({},Qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ac,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Jo&&(Jo&&i.type==="mousemove"?(Mc=i.screenX-Jo.screenX,Ec=i.screenY-Jo.screenY):Ec=Mc=0,Jo=i),Mc)},movementY:function(i){return"movementY"in i?i.movementY:Ec}}),om=Zn(fl),fS=re({},fl,{dataTransfer:0}),dS=Zn(fS),hS=re({},Qo,{relatedTarget:0}),Tc=Zn(hS),pS=re({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),mS=Zn(pS),gS=re({},Gs,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),vS=Zn(gS),_S=re({},Gs,{data:0}),am=Zn(_S),xS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function MS(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=SS[i])?!!s[i]:!1}function Ac(){return MS}var ES=re({},Qo,{key:function(i){if(i.key){var s=xS[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=ul(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?yS[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ac,charCode:function(i){return i.type==="keypress"?ul(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ul(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),TS=Zn(ES),AS=re({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lm=Zn(AS),wS=re({},Qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ac}),CS=Zn(wS),RS=re({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),bS=Zn(RS),PS=re({},fl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),DS=Zn(PS),LS=[9,13,27,32],wc=f&&"CompositionEvent"in window,ea=null;f&&"documentMode"in document&&(ea=document.documentMode);var NS=f&&"TextEvent"in window&&!ea,um=f&&(!wc||ea&&8<ea&&11>=ea),cm=" ",fm=!1;function dm(i,s){switch(i){case"keyup":return LS.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ws=!1;function IS(i,s){switch(i){case"compositionend":return hm(s);case"keypress":return s.which!==32?null:(fm=!0,cm);case"textInput":return i=s.data,i===cm&&fm?null:i;default:return null}}function US(i,s){if(Ws)return i==="compositionend"||!wc&&dm(i,s)?(i=rm(),ll=yc=br=null,Ws=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return um&&s.locale!=="ko"?null:s.data;default:return null}}var FS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!FS[i.type]:s==="textarea"}function mm(i,s,a,c){de(c),s=gl(s,"onChange"),0<s.length&&(a=new Sc("onChange","change",null,a,c),i.push({event:a,listeners:s}))}var ta=null,na=null;function OS(i){Nm(i,0)}function dl(i){var s=Ks(i);if(kt(s))return i}function BS(i,s){if(i==="change")return s}var gm=!1;if(f){var Cc;if(f){var Rc="oninput"in document;if(!Rc){var vm=document.createElement("div");vm.setAttribute("oninput","return;"),Rc=typeof vm.oninput=="function"}Cc=Rc}else Cc=!1;gm=Cc&&(!document.documentMode||9<document.documentMode)}function _m(){ta&&(ta.detachEvent("onpropertychange",xm),na=ta=null)}function xm(i){if(i.propertyName==="value"&&dl(na)){var s=[];mm(s,na,i,it(i)),at(OS,s)}}function kS(i,s,a){i==="focusin"?(_m(),ta=s,na=a,ta.attachEvent("onpropertychange",xm)):i==="focusout"&&_m()}function VS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return dl(na)}function zS(i,s){if(i==="click")return dl(s)}function HS(i,s){if(i==="input"||i==="change")return dl(s)}function GS(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var xi=typeof Object.is=="function"?Object.is:GS;function ia(i,s){if(xi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var p=a[c];if(!d.call(s,p)||!xi(i[p],s[p]))return!1}return!0}function ym(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Sm(i,s){var a=ym(i);i=0;for(var c;a;){if(a.nodeType===3){if(c=i+a.textContent.length,i<=s&&c>=s)return{node:a,offset:s-i};i=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ym(a)}}function Mm(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Mm(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Em(){for(var i=window,s=ft();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=ft(i.document)}return s}function bc(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function WS(i){var s=Em(),a=i.focusedElem,c=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&Mm(a.ownerDocument.documentElement,a)){if(c!==null&&bc(a)){if(s=c.start,i=c.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=a.textContent.length,_=Math.min(c.start,p);c=c.end===void 0?_:Math.min(c.end,p),!i.extend&&_>c&&(p=c,c=_,_=p),p=Sm(a,_);var A=Sm(a,c);p&&A&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==A.node||i.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),_>c?(i.addRange(s),i.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var XS=f&&"documentMode"in document&&11>=document.documentMode,Xs=null,Pc=null,ra=null,Dc=!1;function Tm(i,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Dc||Xs==null||Xs!==ft(c)||(c=Xs,"selectionStart"in c&&bc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ra&&ia(ra,c)||(ra=c,c=gl(Pc,"onSelect"),0<c.length&&(s=new Sc("onSelect","select",null,s,a),i.push({event:s,listeners:c}),s.target=Xs)))}function hl(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var js={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},Lc={},Am={};f&&(Am=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function pl(i){if(Lc[i])return Lc[i];if(!js[i])return i;var s=js[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in Am)return Lc[i]=s[a];return i}var wm=pl("animationend"),Cm=pl("animationiteration"),Rm=pl("animationstart"),bm=pl("transitionend"),Pm=new Map,Dm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(i,s){Pm.set(i,s),l(s,[i])}for(var Nc=0;Nc<Dm.length;Nc++){var Ic=Dm[Nc],jS=Ic.toLowerCase(),YS=Ic[0].toUpperCase()+Ic.slice(1);Pr(jS,"on"+YS)}Pr(wm,"onAnimationEnd"),Pr(Cm,"onAnimationIteration"),Pr(Rm,"onAnimationStart"),Pr("dblclick","onDoubleClick"),Pr("focusin","onFocus"),Pr("focusout","onBlur"),Pr(bm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qS=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Lm(i,s,a){var c=i.type||"unknown-event";i.currentTarget=a,nl(c,s,void 0,i),i.currentTarget=null}function Nm(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var c=i[a],p=c.event;c=c.listeners;e:{var _=void 0;if(s)for(var A=c.length-1;0<=A;A--){var I=c[A],V=I.instance,oe=I.currentTarget;if(I=I.listener,V!==_&&p.isPropagationStopped())break e;Lm(p,I,oe),_=V}else for(A=0;A<c.length;A++){if(I=c[A],V=I.instance,oe=I.currentTarget,I=I.listener,V!==_&&p.isPropagationStopped())break e;Lm(p,I,oe),_=V}}}if(ss)throw i=Vs,ss=!1,Vs=null,i}function jt(i,s){var a=s[Hc];a===void 0&&(a=s[Hc]=new Set);var c=i+"__bubble";a.has(c)||(Im(s,i,2,!1),a.add(c))}function Uc(i,s,a){var c=0;s&&(c|=4),Im(a,i,c,s)}var ml="_reactListening"+Math.random().toString(36).slice(2);function oa(i){if(!i[ml]){i[ml]=!0,r.forEach(function(a){a!=="selectionchange"&&(qS.has(a)||Uc(a,!1,i),Uc(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[ml]||(s[ml]=!0,Uc("selectionchange",!1,s))}}function Im(i,s,a,c){switch(im(s)){case 1:var p=lS;break;case 4:p=uS;break;default:p=_c}a=p.bind(null,s,a,i),p=void 0,!At||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),c?p!==void 0?i.addEventListener(s,a,{capture:!0,passive:p}):i.addEventListener(s,a,!0):p!==void 0?i.addEventListener(s,a,{passive:p}):i.addEventListener(s,a,!1)}function Fc(i,s,a,c,p){var _=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var I=c.stateNode.containerInfo;if(I===p||I.nodeType===8&&I.parentNode===p)break;if(A===4)for(A=c.return;A!==null;){var V=A.tag;if((V===3||V===4)&&(V=A.stateNode.containerInfo,V===p||V.nodeType===8&&V.parentNode===p))return;A=A.return}for(;I!==null;){if(A=ls(I),A===null)return;if(V=A.tag,V===5||V===6){c=_=A;continue e}I=I.parentNode}}c=c.return}at(function(){var oe=_,xe=it(a),Se=[];e:{var _e=Pm.get(i);if(_e!==void 0){var Ve=Sc,We=i;switch(i){case"keypress":if(ul(a)===0)break e;case"keydown":case"keyup":Ve=TS;break;case"focusin":We="focus",Ve=Tc;break;case"focusout":We="blur",Ve=Tc;break;case"beforeblur":case"afterblur":Ve=Tc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=dS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=CS;break;case wm:case Cm:case Rm:Ve=mS;break;case bm:Ve=bS;break;case"scroll":Ve=cS;break;case"wheel":Ve=DS;break;case"copy":case"cut":case"paste":Ve=vS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=lm}var qe=(s&4)!==0,rn=!qe&&i==="scroll",$=qe?_e!==null?_e+"Capture":null:_e;qe=[];for(var W=oe,te;W!==null;){te=W;var Te=te.stateNode;if(te.tag===5&&Te!==null&&(te=Te,$!==null&&(Te=Ot(W,$),Te!=null&&qe.push(aa(W,Te,te)))),rn)break;W=W.return}0<qe.length&&(_e=new Ve(_e,We,null,a,xe),Se.push({event:_e,listeners:qe}))}}if((s&7)===0){e:{if(_e=i==="mouseover"||i==="pointerover",Ve=i==="mouseout"||i==="pointerout",_e&&a!==Ee&&(We=a.relatedTarget||a.fromElement)&&(ls(We)||We[rr]))break e;if((Ve||_e)&&(_e=xe.window===xe?xe:(_e=xe.ownerDocument)?_e.defaultView||_e.parentWindow:window,Ve?(We=a.relatedTarget||a.toElement,Ve=oe,We=We?ls(We):null,We!==null&&(rn=Ui(We),We!==rn||We.tag!==5&&We.tag!==6)&&(We=null)):(Ve=null,We=oe),Ve!==We)){if(qe=om,Te="onMouseLeave",$="onMouseEnter",W="mouse",(i==="pointerout"||i==="pointerover")&&(qe=lm,Te="onPointerLeave",$="onPointerEnter",W="pointer"),rn=Ve==null?_e:Ks(Ve),te=We==null?_e:Ks(We),_e=new qe(Te,W+"leave",Ve,a,xe),_e.target=rn,_e.relatedTarget=te,Te=null,ls(xe)===oe&&(qe=new qe($,W+"enter",We,a,xe),qe.target=te,qe.relatedTarget=rn,Te=qe),rn=Te,Ve&&We)t:{for(qe=Ve,$=We,W=0,te=qe;te;te=Ys(te))W++;for(te=0,Te=$;Te;Te=Ys(Te))te++;for(;0<W-te;)qe=Ys(qe),W--;for(;0<te-W;)$=Ys($),te--;for(;W--;){if(qe===$||$!==null&&qe===$.alternate)break t;qe=Ys(qe),$=Ys($)}qe=null}else qe=null;Ve!==null&&Um(Se,_e,Ve,qe,!1),We!==null&&rn!==null&&Um(Se,rn,We,qe,!0)}}e:{if(_e=oe?Ks(oe):window,Ve=_e.nodeName&&_e.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&_e.type==="file")var $e=BS;else if(pm(_e))if(gm)$e=HS;else{$e=VS;var tt=kS}else(Ve=_e.nodeName)&&Ve.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&($e=zS);if($e&&($e=$e(i,oe))){mm(Se,$e,a,xe);break e}tt&&tt(i,_e,oe),i==="focusout"&&(tt=_e._wrapperState)&&tt.controlled&&_e.type==="number"&&yn(_e,"number",_e.value)}switch(tt=oe?Ks(oe):window,i){case"focusin":(pm(tt)||tt.contentEditable==="true")&&(Xs=tt,Pc=oe,ra=null);break;case"focusout":ra=Pc=Xs=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,Tm(Se,a,xe);break;case"selectionchange":if(XS)break;case"keydown":case"keyup":Tm(Se,a,xe)}var nt;if(wc)e:{switch(i){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else Ws?dm(i,a)&&(rt="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(um&&a.locale!=="ko"&&(Ws||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Ws&&(nt=rm()):(br=xe,yc="value"in br?br.value:br.textContent,Ws=!0)),tt=gl(oe,rt),0<tt.length&&(rt=new am(rt,i,null,a,xe),Se.push({event:rt,listeners:tt}),nt?rt.data=nt:(nt=hm(a),nt!==null&&(rt.data=nt)))),(nt=NS?IS(i,a):US(i,a))&&(oe=gl(oe,"onBeforeInput"),0<oe.length&&(xe=new am("onBeforeInput","beforeinput",null,a,xe),Se.push({event:xe,listeners:oe}),xe.data=nt))}Nm(Se,s)})}function aa(i,s,a){return{instance:i,listener:s,currentTarget:a}}function gl(i,s){for(var a=s+"Capture",c=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Ot(i,a),_!=null&&c.unshift(aa(i,_,p)),_=Ot(i,s),_!=null&&c.push(aa(i,_,p))),i=i.return}return c}function Ys(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Um(i,s,a,c,p){for(var _=s._reactName,A=[];a!==null&&a!==c;){var I=a,V=I.alternate,oe=I.stateNode;if(V!==null&&V===c)break;I.tag===5&&oe!==null&&(I=oe,p?(V=Ot(a,_),V!=null&&A.unshift(aa(a,V,I))):p||(V=Ot(a,_),V!=null&&A.push(aa(a,V,I)))),a=a.return}A.length!==0&&i.push({event:s,listeners:A})}var KS=/\r\n?/g,$S=/\u0000|\uFFFD/g;function Fm(i){return(typeof i=="string"?i:""+i).replace(KS,`
`).replace($S,"")}function vl(i,s,a){if(s=Fm(s),Fm(i)!==s&&a)throw Error(t(425))}function _l(){}var Oc=null,Bc=null;function kc(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Vc=typeof setTimeout=="function"?setTimeout:void 0,ZS=typeof clearTimeout=="function"?clearTimeout:void 0,Om=typeof Promise=="function"?Promise:void 0,QS=typeof queueMicrotask=="function"?queueMicrotask:typeof Om<"u"?function(i){return Om.resolve(null).then(i).catch(JS)}:Vc;function JS(i){setTimeout(function(){throw i})}function zc(i,s){var a=s,c=0;do{var p=a.nextSibling;if(i.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(c===0){i.removeChild(p),Zo(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=p}while(a);Zo(s)}function Dr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Bm(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var qs=Math.random().toString(36).slice(2),Oi="__reactFiber$"+qs,la="__reactProps$"+qs,rr="__reactContainer$"+qs,Hc="__reactEvents$"+qs,eM="__reactListeners$"+qs,tM="__reactHandles$"+qs;function ls(i){var s=i[Oi];if(s)return s;for(var a=i.parentNode;a;){if(s=a[rr]||a[Oi]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=Bm(i);i!==null;){if(a=i[Oi])return a;i=Bm(i)}return s}i=a,a=i.parentNode}return null}function ua(i){return i=i[Oi]||i[rr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Ks(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function xl(i){return i[la]||null}var Gc=[],$s=-1;function Lr(i){return{current:i}}function Yt(i){0>$s||(i.current=Gc[$s],Gc[$s]=null,$s--)}function Gt(i,s){$s++,Gc[$s]=i.current,i.current=s}var Nr={},Cn=Lr(Nr),Gn=Lr(!1),us=Nr;function Zs(i,s){var a=i.type.contextTypes;if(!a)return Nr;var c=i.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in a)p[_]=s[_];return c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function Wn(i){return i=i.childContextTypes,i!=null}function yl(){Yt(Gn),Yt(Cn)}function km(i,s,a){if(Cn.current!==Nr)throw Error(t(168));Gt(Cn,s),Gt(Gn,a)}function Vm(i,s,a){var c=i.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var p in c)if(!(p in s))throw Error(t(108,ye(i)||"Unknown",p));return re({},a,c)}function Sl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Nr,us=Cn.current,Gt(Cn,i),Gt(Gn,Gn.current),!0}function zm(i,s,a){var c=i.stateNode;if(!c)throw Error(t(169));a?(i=Vm(i,s,us),c.__reactInternalMemoizedMergedChildContext=i,Yt(Gn),Yt(Cn),Gt(Cn,i)):Yt(Gn),Gt(Gn,a)}var sr=null,Ml=!1,Wc=!1;function Hm(i){sr===null?sr=[i]:sr.push(i)}function nM(i){Ml=!0,Hm(i)}function Ir(){if(!Wc&&sr!==null){Wc=!0;var i=0,s=vt;try{var a=sr;for(vt=1;i<a.length;i++){var c=a[i];do c=c(!0);while(c!==null)}sr=null,Ml=!1}catch(p){throw sr!==null&&(sr=sr.slice(i+1)),il(jo,Ir),p}finally{vt=s,Wc=!1}}return null}var Qs=[],Js=0,El=null,Tl=0,oi=[],ai=0,cs=null,or=1,ar="";function fs(i,s){Qs[Js++]=Tl,Qs[Js++]=El,El=i,Tl=s}function Gm(i,s,a){oi[ai++]=or,oi[ai++]=ar,oi[ai++]=cs,cs=i;var c=or;i=ar;var p=32-Ce(c)-1;c&=~(1<<p),a+=1;var _=32-Ce(s)+p;if(30<_){var A=p-p%5;_=(c&(1<<A)-1).toString(32),c>>=A,p-=A,or=1<<32-Ce(s)+p|a<<p|c,ar=_+i}else or=1<<_|a<<p|c,ar=i}function Xc(i){i.return!==null&&(fs(i,1),Gm(i,1,0))}function jc(i){for(;i===El;)El=Qs[--Js],Qs[Js]=null,Tl=Qs[--Js],Qs[Js]=null;for(;i===cs;)cs=oi[--ai],oi[ai]=null,ar=oi[--ai],oi[ai]=null,or=oi[--ai],oi[ai]=null}var Qn=null,Jn=null,$t=!1,yi=null;function Wm(i,s){var a=fi(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function Xm(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Qn=i,Jn=Dr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Qn=i,Jn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=cs!==null?{id:or,overflow:ar}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=fi(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,Qn=i,Jn=null,!0):!1;default:return!1}}function Yc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function qc(i){if($t){var s=Jn;if(s){var a=s;if(!Xm(i,s)){if(Yc(i))throw Error(t(418));s=Dr(a.nextSibling);var c=Qn;s&&Xm(i,s)?Wm(c,a):(i.flags=i.flags&-4097|2,$t=!1,Qn=i)}}else{if(Yc(i))throw Error(t(418));i.flags=i.flags&-4097|2,$t=!1,Qn=i}}}function jm(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Qn=i}function Al(i){if(i!==Qn)return!1;if(!$t)return jm(i),$t=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!kc(i.type,i.memoizedProps)),s&&(s=Jn)){if(Yc(i))throw Ym(),Error(t(418));for(;s;)Wm(i,s),s=Dr(s.nextSibling)}if(jm(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){Jn=Dr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}Jn=null}}else Jn=Qn?Dr(i.stateNode.nextSibling):null;return!0}function Ym(){for(var i=Jn;i;)i=Dr(i.nextSibling)}function eo(){Jn=Qn=null,$t=!1}function Kc(i){yi===null?yi=[i]:yi.push(i)}var iM=P.ReactCurrentBatchConfig;function ca(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,i));var p=c,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(A){var I=p.refs;A===null?delete I[_]:I[_]=A},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function wl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function qm(i){var s=i._init;return s(i._payload)}function Km(i){function s($,W){if(i){var te=$.deletions;te===null?($.deletions=[W],$.flags|=16):te.push(W)}}function a($,W){if(!i)return null;for(;W!==null;)s($,W),W=W.sibling;return null}function c($,W){for($=new Map;W!==null;)W.key!==null?$.set(W.key,W):$.set(W.index,W),W=W.sibling;return $}function p($,W){return $=Hr($,W),$.index=0,$.sibling=null,$}function _($,W,te){return $.index=te,i?(te=$.alternate,te!==null?(te=te.index,te<W?($.flags|=2,W):te):($.flags|=2,W)):($.flags|=1048576,W)}function A($){return i&&$.alternate===null&&($.flags|=2),$}function I($,W,te,Te){return W===null||W.tag!==6?(W=zf(te,$.mode,Te),W.return=$,W):(W=p(W,te),W.return=$,W)}function V($,W,te,Te){var $e=te.type;return $e===B?xe($,W,te.props.children,Te,te.key):W!==null&&(W.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===Z&&qm($e)===W.type)?(Te=p(W,te.props),Te.ref=ca($,W,te),Te.return=$,Te):(Te=$l(te.type,te.key,te.props,null,$.mode,Te),Te.ref=ca($,W,te),Te.return=$,Te)}function oe($,W,te,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=Hf(te,$.mode,Te),W.return=$,W):(W=p(W,te.children||[]),W.return=$,W)}function xe($,W,te,Te,$e){return W===null||W.tag!==7?(W=xs(te,$.mode,Te,$e),W.return=$,W):(W=p(W,te),W.return=$,W)}function Se($,W,te){if(typeof W=="string"&&W!==""||typeof W=="number")return W=zf(""+W,$.mode,te),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case F:return te=$l(W.type,W.key,W.props,null,$.mode,te),te.ref=ca($,null,W),te.return=$,te;case L:return W=Hf(W,$.mode,te),W.return=$,W;case Z:var Te=W._init;return Se($,Te(W._payload),te)}if(G(W)||ne(W))return W=xs(W,$.mode,te,null),W.return=$,W;wl($,W)}return null}function _e($,W,te,Te){var $e=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return $e!==null?null:I($,W,""+te,Te);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case F:return te.key===$e?V($,W,te,Te):null;case L:return te.key===$e?oe($,W,te,Te):null;case Z:return $e=te._init,_e($,W,$e(te._payload),Te)}if(G(te)||ne(te))return $e!==null?null:xe($,W,te,Te,null);wl($,te)}return null}function Ve($,W,te,Te,$e){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return $=$.get(te)||null,I(W,$,""+Te,$e);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case F:return $=$.get(Te.key===null?te:Te.key)||null,V(W,$,Te,$e);case L:return $=$.get(Te.key===null?te:Te.key)||null,oe(W,$,Te,$e);case Z:var tt=Te._init;return Ve($,W,te,tt(Te._payload),$e)}if(G(Te)||ne(Te))return $=$.get(te)||null,xe(W,$,Te,$e,null);wl(W,Te)}return null}function We($,W,te,Te){for(var $e=null,tt=null,nt=W,rt=W=0,_n=null;nt!==null&&rt<te.length;rt++){nt.index>rt?(_n=nt,nt=null):_n=nt.sibling;var wt=_e($,nt,te[rt],Te);if(wt===null){nt===null&&(nt=_n);break}i&&nt&&wt.alternate===null&&s($,nt),W=_(wt,W,rt),tt===null?$e=wt:tt.sibling=wt,tt=wt,nt=_n}if(rt===te.length)return a($,nt),$t&&fs($,rt),$e;if(nt===null){for(;rt<te.length;rt++)nt=Se($,te[rt],Te),nt!==null&&(W=_(nt,W,rt),tt===null?$e=nt:tt.sibling=nt,tt=nt);return $t&&fs($,rt),$e}for(nt=c($,nt);rt<te.length;rt++)_n=Ve(nt,$,rt,te[rt],Te),_n!==null&&(i&&_n.alternate!==null&&nt.delete(_n.key===null?rt:_n.key),W=_(_n,W,rt),tt===null?$e=_n:tt.sibling=_n,tt=_n);return i&&nt.forEach(function(Gr){return s($,Gr)}),$t&&fs($,rt),$e}function qe($,W,te,Te){var $e=ne(te);if(typeof $e!="function")throw Error(t(150));if(te=$e.call(te),te==null)throw Error(t(151));for(var tt=$e=null,nt=W,rt=W=0,_n=null,wt=te.next();nt!==null&&!wt.done;rt++,wt=te.next()){nt.index>rt?(_n=nt,nt=null):_n=nt.sibling;var Gr=_e($,nt,wt.value,Te);if(Gr===null){nt===null&&(nt=_n);break}i&&nt&&Gr.alternate===null&&s($,nt),W=_(Gr,W,rt),tt===null?$e=Gr:tt.sibling=Gr,tt=Gr,nt=_n}if(wt.done)return a($,nt),$t&&fs($,rt),$e;if(nt===null){for(;!wt.done;rt++,wt=te.next())wt=Se($,wt.value,Te),wt!==null&&(W=_(wt,W,rt),tt===null?$e=wt:tt.sibling=wt,tt=wt);return $t&&fs($,rt),$e}for(nt=c($,nt);!wt.done;rt++,wt=te.next())wt=Ve(nt,$,rt,wt.value,Te),wt!==null&&(i&&wt.alternate!==null&&nt.delete(wt.key===null?rt:wt.key),W=_(wt,W,rt),tt===null?$e=wt:tt.sibling=wt,tt=wt);return i&&nt.forEach(function(FM){return s($,FM)}),$t&&fs($,rt),$e}function rn($,W,te,Te){if(typeof te=="object"&&te!==null&&te.type===B&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case F:e:{for(var $e=te.key,tt=W;tt!==null;){if(tt.key===$e){if($e=te.type,$e===B){if(tt.tag===7){a($,tt.sibling),W=p(tt,te.props.children),W.return=$,$=W;break e}}else if(tt.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===Z&&qm($e)===tt.type){a($,tt.sibling),W=p(tt,te.props),W.ref=ca($,tt,te),W.return=$,$=W;break e}a($,tt);break}else s($,tt);tt=tt.sibling}te.type===B?(W=xs(te.props.children,$.mode,Te,te.key),W.return=$,$=W):(Te=$l(te.type,te.key,te.props,null,$.mode,Te),Te.ref=ca($,W,te),Te.return=$,$=Te)}return A($);case L:e:{for(tt=te.key;W!==null;){if(W.key===tt)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){a($,W.sibling),W=p(W,te.children||[]),W.return=$,$=W;break e}else{a($,W);break}else s($,W);W=W.sibling}W=Hf(te,$.mode,Te),W.return=$,$=W}return A($);case Z:return tt=te._init,rn($,W,tt(te._payload),Te)}if(G(te))return We($,W,te,Te);if(ne(te))return qe($,W,te,Te);wl($,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,W!==null&&W.tag===6?(a($,W.sibling),W=p(W,te),W.return=$,$=W):(a($,W),W=zf(te,$.mode,Te),W.return=$,$=W),A($)):a($,W)}return rn}var to=Km(!0),$m=Km(!1),Cl=Lr(null),Rl=null,no=null,$c=null;function Zc(){$c=no=Rl=null}function Qc(i){var s=Cl.current;Yt(Cl),i._currentValue=s}function Jc(i,s,a){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===a)break;i=i.return}}function io(i,s){Rl=i,$c=no=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Xn=!0),i.firstContext=null)}function li(i){var s=i._currentValue;if($c!==i)if(i={context:i,memoizedValue:s,next:null},no===null){if(Rl===null)throw Error(t(308));no=i,Rl.dependencies={lanes:0,firstContext:i}}else no=no.next=i;return s}var ds=null;function ef(i){ds===null?ds=[i]:ds.push(i)}function Zm(i,s,a,c){var p=s.interleaved;return p===null?(a.next=a,ef(s)):(a.next=p.next,p.next=a),s.interleaved=a,lr(i,c)}function lr(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var Ur=!1;function tf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qm(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ur(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Fr(i,s,a){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(Mt&2)!==0){var p=c.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s,lr(i,a)}return p=c.interleaved,p===null?(s.next=s,ef(c)):(s.next=p.next,p.next=s),c.interleaved=s,lr(i,a)}function bl(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=i.pendingLanes,a|=c,s.lanes=a,Hn(i,a)}}function Jm(i,s){var a=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var p=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var A={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?p=_=A:_=_.next=A,a=a.next}while(a!==null);_===null?p=_=s:_=_.next=s}else p=_=s;a={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:c.shared,effects:c.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function Pl(i,s,a,c){var p=i.updateQueue;Ur=!1;var _=p.firstBaseUpdate,A=p.lastBaseUpdate,I=p.shared.pending;if(I!==null){p.shared.pending=null;var V=I,oe=V.next;V.next=null,A===null?_=oe:A.next=oe,A=V;var xe=i.alternate;xe!==null&&(xe=xe.updateQueue,I=xe.lastBaseUpdate,I!==A&&(I===null?xe.firstBaseUpdate=oe:I.next=oe,xe.lastBaseUpdate=V))}if(_!==null){var Se=p.baseState;A=0,xe=oe=V=null,I=_;do{var _e=I.lane,Ve=I.eventTime;if((c&_e)===_e){xe!==null&&(xe=xe.next={eventTime:Ve,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var We=i,qe=I;switch(_e=s,Ve=a,qe.tag){case 1:if(We=qe.payload,typeof We=="function"){Se=We.call(Ve,Se,_e);break e}Se=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=qe.payload,_e=typeof We=="function"?We.call(Ve,Se,_e):We,_e==null)break e;Se=re({},Se,_e);break e;case 2:Ur=!0}}I.callback!==null&&I.lane!==0&&(i.flags|=64,_e=p.effects,_e===null?p.effects=[I]:_e.push(I))}else Ve={eventTime:Ve,lane:_e,tag:I.tag,payload:I.payload,callback:I.callback,next:null},xe===null?(oe=xe=Ve,V=Se):xe=xe.next=Ve,A|=_e;if(I=I.next,I===null){if(I=p.shared.pending,I===null)break;_e=I,I=_e.next,_e.next=null,p.lastBaseUpdate=_e,p.shared.pending=null}}while(!0);if(xe===null&&(V=Se),p.baseState=V,p.firstBaseUpdate=oe,p.lastBaseUpdate=xe,s=p.shared.interleaved,s!==null){p=s;do A|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);ms|=A,i.lanes=A,i.memoizedState=Se}}function eg(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var c=i[s],p=c.callback;if(p!==null){if(c.callback=null,c=a,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var fa={},Bi=Lr(fa),da=Lr(fa),ha=Lr(fa);function hs(i){if(i===fa)throw Error(t(174));return i}function nf(i,s){switch(Gt(ha,s),Gt(da,i),Gt(Bi,fa),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:E(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=E(s,i)}Yt(Bi),Gt(Bi,s)}function ro(){Yt(Bi),Yt(da),Yt(ha)}function tg(i){hs(ha.current);var s=hs(Bi.current),a=E(s,i.type);s!==a&&(Gt(da,i),Gt(Bi,a))}function rf(i){da.current===i&&(Yt(Bi),Yt(da))}var Jt=Lr(0);function Dl(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var sf=[];function of(){for(var i=0;i<sf.length;i++)sf[i]._workInProgressVersionPrimary=null;sf.length=0}var Ll=P.ReactCurrentDispatcher,af=P.ReactCurrentBatchConfig,ps=0,en=null,cn=null,gn=null,Nl=!1,pa=!1,ma=0,rM=0;function Rn(){throw Error(t(321))}function lf(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!xi(i[a],s[a]))return!1;return!0}function uf(i,s,a,c,p,_){if(ps=_,en=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Ll.current=i===null||i.memoizedState===null?lM:uM,i=a(c,p),pa){_=0;do{if(pa=!1,ma=0,25<=_)throw Error(t(301));_+=1,gn=cn=null,s.updateQueue=null,Ll.current=cM,i=a(c,p)}while(pa)}if(Ll.current=Fl,s=cn!==null&&cn.next!==null,ps=0,gn=cn=en=null,Nl=!1,s)throw Error(t(300));return i}function cf(){var i=ma!==0;return ma=0,i}function ki(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?en.memoizedState=gn=i:gn=gn.next=i,gn}function ui(){if(cn===null){var i=en.alternate;i=i!==null?i.memoizedState:null}else i=cn.next;var s=gn===null?en.memoizedState:gn.next;if(s!==null)gn=s,cn=i;else{if(i===null)throw Error(t(310));cn=i,i={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},gn===null?en.memoizedState=gn=i:gn=gn.next=i}return gn}function ga(i,s){return typeof s=="function"?s(i):s}function ff(i){var s=ui(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var c=cn,p=c.baseQueue,_=a.pending;if(_!==null){if(p!==null){var A=p.next;p.next=_.next,_.next=A}c.baseQueue=p=_,a.pending=null}if(p!==null){_=p.next,c=c.baseState;var I=A=null,V=null,oe=_;do{var xe=oe.lane;if((ps&xe)===xe)V!==null&&(V=V.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),c=oe.hasEagerState?oe.eagerState:i(c,oe.action);else{var Se={lane:xe,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};V===null?(I=V=Se,A=c):V=V.next=Se,en.lanes|=xe,ms|=xe}oe=oe.next}while(oe!==null&&oe!==_);V===null?A=c:V.next=I,xi(c,s.memoizedState)||(Xn=!0),s.memoizedState=c,s.baseState=A,s.baseQueue=V,a.lastRenderedState=c}if(i=a.interleaved,i!==null){p=i;do _=p.lane,en.lanes|=_,ms|=_,p=p.next;while(p!==i)}else p===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function df(i){var s=ui(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var c=a.dispatch,p=a.pending,_=s.memoizedState;if(p!==null){a.pending=null;var A=p=p.next;do _=i(_,A.action),A=A.next;while(A!==p);xi(_,s.memoizedState)||(Xn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),a.lastRenderedState=_}return[_,c]}function ng(){}function ig(i,s){var a=en,c=ui(),p=s(),_=!xi(c.memoizedState,p);if(_&&(c.memoizedState=p,Xn=!0),c=c.queue,hf(og.bind(null,a,c,i),[i]),c.getSnapshot!==s||_||gn!==null&&gn.memoizedState.tag&1){if(a.flags|=2048,va(9,sg.bind(null,a,c,p,s),void 0,null),vn===null)throw Error(t(349));(ps&30)!==0||rg(a,s,p)}return p}function rg(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=en.updateQueue,s===null?(s={lastEffect:null,stores:null},en.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function sg(i,s,a,c){s.value=a,s.getSnapshot=c,ag(s)&&lg(i)}function og(i,s,a){return a(function(){ag(s)&&lg(i)})}function ag(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!xi(i,a)}catch{return!0}}function lg(i){var s=lr(i,1);s!==null&&Ti(s,i,1,-1)}function ug(i){var s=ki();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:i},s.queue=i,i=i.dispatch=aM.bind(null,en,i),[s.memoizedState,i]}function va(i,s,a,c){return i={tag:i,create:s,destroy:a,deps:c,next:null},s=en.updateQueue,s===null?(s={lastEffect:null,stores:null},en.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(c=a.next,a.next=i,i.next=c,s.lastEffect=i)),i}function cg(){return ui().memoizedState}function Il(i,s,a,c){var p=ki();en.flags|=i,p.memoizedState=va(1|s,a,void 0,c===void 0?null:c)}function Ul(i,s,a,c){var p=ui();c=c===void 0?null:c;var _=void 0;if(cn!==null){var A=cn.memoizedState;if(_=A.destroy,c!==null&&lf(c,A.deps)){p.memoizedState=va(s,a,_,c);return}}en.flags|=i,p.memoizedState=va(1|s,a,_,c)}function fg(i,s){return Il(8390656,8,i,s)}function hf(i,s){return Ul(2048,8,i,s)}function dg(i,s){return Ul(4,2,i,s)}function hg(i,s){return Ul(4,4,i,s)}function pg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function mg(i,s,a){return a=a!=null?a.concat([i]):null,Ul(4,4,pg.bind(null,s,i),a)}function pf(){}function gg(i,s){var a=ui();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&lf(s,c[1])?c[0]:(a.memoizedState=[i,s],i)}function vg(i,s){var a=ui();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&lf(s,c[1])?c[0]:(i=i(),a.memoizedState=[i,s],i)}function _g(i,s,a){return(ps&21)===0?(i.baseState&&(i.baseState=!1,Xn=!0),i.memoizedState=a):(xi(a,s)||(a=ke(),en.lanes|=a,ms|=a,i.baseState=!0),s)}function sM(i,s){var a=vt;vt=a!==0&&4>a?a:4,i(!0);var c=af.transition;af.transition={};try{i(!1),s()}finally{vt=a,af.transition=c}}function xg(){return ui().memoizedState}function oM(i,s,a){var c=Vr(i);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},yg(i))Sg(s,a);else if(a=Zm(i,s,a,c),a!==null){var p=Fn();Ti(a,i,c,p),Mg(a,s,c)}}function aM(i,s,a){var c=Vr(i),p={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(yg(i))Sg(s,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var A=s.lastRenderedState,I=_(A,a);if(p.hasEagerState=!0,p.eagerState=I,xi(I,A)){var V=s.interleaved;V===null?(p.next=p,ef(s)):(p.next=V.next,V.next=p),s.interleaved=p;return}}catch{}finally{}a=Zm(i,s,p,c),a!==null&&(p=Fn(),Ti(a,i,c,p),Mg(a,s,c))}}function yg(i){var s=i.alternate;return i===en||s!==null&&s===en}function Sg(i,s){pa=Nl=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function Mg(i,s,a){if((a&4194240)!==0){var c=s.lanes;c&=i.pendingLanes,a|=c,s.lanes=a,Hn(i,a)}}var Fl={readContext:li,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},lM={readContext:li,useCallback:function(i,s){return ki().memoizedState=[i,s===void 0?null:s],i},useContext:li,useEffect:fg,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,Il(4194308,4,pg.bind(null,s,i),a)},useLayoutEffect:function(i,s){return Il(4194308,4,i,s)},useInsertionEffect:function(i,s){return Il(4,2,i,s)},useMemo:function(i,s){var a=ki();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var c=ki();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},c.queue=i,i=i.dispatch=oM.bind(null,en,i),[c.memoizedState,i]},useRef:function(i){var s=ki();return i={current:i},s.memoizedState=i},useState:ug,useDebugValue:pf,useDeferredValue:function(i){return ki().memoizedState=i},useTransition:function(){var i=ug(!1),s=i[0];return i=sM.bind(null,i[1]),ki().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var c=en,p=ki();if($t){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),vn===null)throw Error(t(349));(ps&30)!==0||rg(c,s,a)}p.memoizedState=a;var _={value:a,getSnapshot:s};return p.queue=_,fg(og.bind(null,c,_,i),[i]),c.flags|=2048,va(9,sg.bind(null,c,_,a,s),void 0,null),a},useId:function(){var i=ki(),s=vn.identifierPrefix;if($t){var a=ar,c=or;a=(c&~(1<<32-Ce(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=ma++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=rM++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},uM={readContext:li,useCallback:gg,useContext:li,useEffect:hf,useImperativeHandle:mg,useInsertionEffect:dg,useLayoutEffect:hg,useMemo:vg,useReducer:ff,useRef:cg,useState:function(){return ff(ga)},useDebugValue:pf,useDeferredValue:function(i){var s=ui();return _g(s,cn.memoizedState,i)},useTransition:function(){var i=ff(ga)[0],s=ui().memoizedState;return[i,s]},useMutableSource:ng,useSyncExternalStore:ig,useId:xg,unstable_isNewReconciler:!1},cM={readContext:li,useCallback:gg,useContext:li,useEffect:hf,useImperativeHandle:mg,useInsertionEffect:dg,useLayoutEffect:hg,useMemo:vg,useReducer:df,useRef:cg,useState:function(){return df(ga)},useDebugValue:pf,useDeferredValue:function(i){var s=ui();return cn===null?s.memoizedState=i:_g(s,cn.memoizedState,i)},useTransition:function(){var i=df(ga)[0],s=ui().memoizedState;return[i,s]},useMutableSource:ng,useSyncExternalStore:ig,useId:xg,unstable_isNewReconciler:!1};function Si(i,s){if(i&&i.defaultProps){s=re({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function mf(i,s,a,c){s=i.memoizedState,a=a(c,s),a=a==null?s:re({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Ol={isMounted:function(i){return(i=i._reactInternals)?Ui(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var c=Fn(),p=Vr(i),_=ur(c,p);_.payload=s,a!=null&&(_.callback=a),s=Fr(i,_,p),s!==null&&(Ti(s,i,p,c),bl(s,i,p))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var c=Fn(),p=Vr(i),_=ur(c,p);_.tag=1,_.payload=s,a!=null&&(_.callback=a),s=Fr(i,_,p),s!==null&&(Ti(s,i,p,c),bl(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=Fn(),c=Vr(i),p=ur(a,c);p.tag=2,s!=null&&(p.callback=s),s=Fr(i,p,c),s!==null&&(Ti(s,i,c,a),bl(s,i,c))}};function Eg(i,s,a,c,p,_,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,_,A):s.prototype&&s.prototype.isPureReactComponent?!ia(a,c)||!ia(p,_):!0}function Tg(i,s,a){var c=!1,p=Nr,_=s.contextType;return typeof _=="object"&&_!==null?_=li(_):(p=Wn(s)?us:Cn.current,c=s.contextTypes,_=(c=c!=null)?Zs(i,p):Nr),s=new s(a,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ol,i.stateNode=s,s._reactInternals=i,c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),s}function Ag(i,s,a,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==i&&Ol.enqueueReplaceState(s,s.state,null)}function gf(i,s,a,c){var p=i.stateNode;p.props=a,p.state=i.memoizedState,p.refs={},tf(i);var _=s.contextType;typeof _=="object"&&_!==null?p.context=li(_):(_=Wn(s)?us:Cn.current,p.context=Zs(i,_)),p.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(mf(i,s,_,a),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Ol.enqueueReplaceState(p,p.state,null),Pl(i,a,p,c),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function so(i,s){try{var a="",c=s;do a+=Ne(c),c=c.return;while(c);var p=a}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:p,digest:null}}function vf(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function _f(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var fM=typeof WeakMap=="function"?WeakMap:Map;function wg(i,s,a){a=ur(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Wl||(Wl=!0,Nf=c),_f(i,s)},a}function Cg(i,s,a){a=ur(-1,a),a.tag=3;var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var p=s.value;a.payload=function(){return c(p)},a.callback=function(){_f(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){_f(i,s),typeof c!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),a}function Rg(i,s,a){var c=i.pingCache;if(c===null){c=i.pingCache=new fM;var p=new Set;c.set(s,p)}else p=c.get(s),p===void 0&&(p=new Set,c.set(s,p));p.has(a)||(p.add(a),i=AM.bind(null,i,s,a),s.then(i,i))}function bg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function Pg(i,s,a,c,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=ur(-1,1),s.tag=2,Fr(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var dM=P.ReactCurrentOwner,Xn=!1;function Un(i,s,a,c){s.child=i===null?$m(s,null,a,c):to(s,i.child,a,c)}function Dg(i,s,a,c,p){a=a.render;var _=s.ref;return io(s,p),c=uf(i,s,a,c,_,p),a=cf(),i!==null&&!Xn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,cr(i,s,p)):($t&&a&&Xc(s),s.flags|=1,Un(i,s,c,p),s.child)}function Lg(i,s,a,c,p){if(i===null){var _=a.type;return typeof _=="function"&&!Vf(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=_,Ng(i,s,_,c,p)):(i=$l(a.type,null,c,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&p)===0){var A=_.memoizedProps;if(a=a.compare,a=a!==null?a:ia,a(A,c)&&i.ref===s.ref)return cr(i,s,p)}return s.flags|=1,i=Hr(_,c),i.ref=s.ref,i.return=s,s.child=i}function Ng(i,s,a,c,p){if(i!==null){var _=i.memoizedProps;if(ia(_,c)&&i.ref===s.ref)if(Xn=!1,s.pendingProps=c=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Xn=!0);else return s.lanes=i.lanes,cr(i,s,p)}return xf(i,s,a,c,p)}function Ig(i,s,a){var c=s.pendingProps,p=c.children,_=i!==null?i.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(ao,ei),ei|=a;else{if((a&1073741824)===0)return i=_!==null?_.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Gt(ao,ei),ei|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=_!==null?_.baseLanes:a,Gt(ao,ei),ei|=c}else _!==null?(c=_.baseLanes|a,s.memoizedState=null):c=a,Gt(ao,ei),ei|=c;return Un(i,s,p,a),s.child}function Ug(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function xf(i,s,a,c,p){var _=Wn(a)?us:Cn.current;return _=Zs(s,_),io(s,p),a=uf(i,s,a,c,_,p),c=cf(),i!==null&&!Xn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,cr(i,s,p)):($t&&c&&Xc(s),s.flags|=1,Un(i,s,a,p),s.child)}function Fg(i,s,a,c,p){if(Wn(a)){var _=!0;Sl(s)}else _=!1;if(io(s,p),s.stateNode===null)kl(i,s),Tg(s,a,c),gf(s,a,c,p),c=!0;else if(i===null){var A=s.stateNode,I=s.memoizedProps;A.props=I;var V=A.context,oe=a.contextType;typeof oe=="object"&&oe!==null?oe=li(oe):(oe=Wn(a)?us:Cn.current,oe=Zs(s,oe));var xe=a.getDerivedStateFromProps,Se=typeof xe=="function"||typeof A.getSnapshotBeforeUpdate=="function";Se||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(I!==c||V!==oe)&&Ag(s,A,c,oe),Ur=!1;var _e=s.memoizedState;A.state=_e,Pl(s,c,A,p),V=s.memoizedState,I!==c||_e!==V||Gn.current||Ur?(typeof xe=="function"&&(mf(s,a,xe,c),V=s.memoizedState),(I=Ur||Eg(s,a,I,c,_e,V,oe))?(Se||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=V),A.props=c,A.state=V,A.context=oe,c=I):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{A=s.stateNode,Qm(i,s),I=s.memoizedProps,oe=s.type===s.elementType?I:Si(s.type,I),A.props=oe,Se=s.pendingProps,_e=A.context,V=a.contextType,typeof V=="object"&&V!==null?V=li(V):(V=Wn(a)?us:Cn.current,V=Zs(s,V));var Ve=a.getDerivedStateFromProps;(xe=typeof Ve=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(I!==Se||_e!==V)&&Ag(s,A,c,V),Ur=!1,_e=s.memoizedState,A.state=_e,Pl(s,c,A,p);var We=s.memoizedState;I!==Se||_e!==We||Gn.current||Ur?(typeof Ve=="function"&&(mf(s,a,Ve,c),We=s.memoizedState),(oe=Ur||Eg(s,a,oe,c,_e,We,V)||!1)?(xe||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,We,V),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,We,V)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||I===i.memoizedProps&&_e===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&_e===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=We),A.props=c,A.state=We,A.context=V,c=oe):(typeof A.componentDidUpdate!="function"||I===i.memoizedProps&&_e===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&_e===i.memoizedState||(s.flags|=1024),c=!1)}return yf(i,s,a,c,_,p)}function yf(i,s,a,c,p,_){Ug(i,s);var A=(s.flags&128)!==0;if(!c&&!A)return p&&zm(s,a,!1),cr(i,s,_);c=s.stateNode,dM.current=s;var I=A&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,i!==null&&A?(s.child=to(s,i.child,null,_),s.child=to(s,null,I,_)):Un(i,s,I,_),s.memoizedState=c.state,p&&zm(s,a,!0),s.child}function Og(i){var s=i.stateNode;s.pendingContext?km(i,s.pendingContext,s.pendingContext!==s.context):s.context&&km(i,s.context,!1),nf(i,s.containerInfo)}function Bg(i,s,a,c,p){return eo(),Kc(p),s.flags|=256,Un(i,s,a,c),s.child}var Sf={dehydrated:null,treeContext:null,retryLane:0};function Mf(i){return{baseLanes:i,cachePool:null,transitions:null}}function kg(i,s,a){var c=s.pendingProps,p=Jt.current,_=!1,A=(s.flags&128)!==0,I;if((I=A)||(I=i!==null&&i.memoizedState===null?!1:(p&2)!==0),I?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Gt(Jt,p&1),i===null)return qc(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=c.children,i=c.fallback,_?(c=s.mode,_=s.child,A={mode:"hidden",children:A},(c&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=A):_=Zl(A,c,0,null),i=xs(i,c,a,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=Mf(a),s.memoizedState=Sf,i):Ef(s,A));if(p=i.memoizedState,p!==null&&(I=p.dehydrated,I!==null))return hM(i,s,A,c,I,p,a);if(_){_=c.fallback,A=s.mode,p=i.child,I=p.sibling;var V={mode:"hidden",children:c.children};return(A&1)===0&&s.child!==p?(c=s.child,c.childLanes=0,c.pendingProps=V,s.deletions=null):(c=Hr(p,V),c.subtreeFlags=p.subtreeFlags&14680064),I!==null?_=Hr(I,_):(_=xs(_,A,a,null),_.flags|=2),_.return=s,c.return=s,c.sibling=_,s.child=c,c=_,_=s.child,A=i.child.memoizedState,A=A===null?Mf(a):{baseLanes:A.baseLanes|a,cachePool:null,transitions:A.transitions},_.memoizedState=A,_.childLanes=i.childLanes&~a,s.memoizedState=Sf,c}return _=i.child,i=_.sibling,c=Hr(_,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=c,s.memoizedState=null,c}function Ef(i,s){return s=Zl({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Bl(i,s,a,c){return c!==null&&Kc(c),to(s,i.child,null,a),i=Ef(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function hM(i,s,a,c,p,_,A){if(a)return s.flags&256?(s.flags&=-257,c=vf(Error(t(422))),Bl(i,s,A,c)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=c.fallback,p=s.mode,c=Zl({mode:"visible",children:c.children},p,0,null),_=xs(_,p,A,null),_.flags|=2,c.return=s,_.return=s,c.sibling=_,s.child=c,(s.mode&1)!==0&&to(s,i.child,null,A),s.child.memoizedState=Mf(A),s.memoizedState=Sf,_);if((s.mode&1)===0)return Bl(i,s,A,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var I=c.dgst;return c=I,_=Error(t(419)),c=vf(_,c,void 0),Bl(i,s,A,c)}if(I=(A&i.childLanes)!==0,Xn||I){if(c=vn,c!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|A))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,lr(i,p),Ti(c,i,p,-1))}return kf(),c=vf(Error(t(421))),Bl(i,s,A,c)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=wM.bind(null,i),p._reactRetry=s,null):(i=_.treeContext,Jn=Dr(p.nextSibling),Qn=s,$t=!0,yi=null,i!==null&&(oi[ai++]=or,oi[ai++]=ar,oi[ai++]=cs,or=i.id,ar=i.overflow,cs=s),s=Ef(s,c.children),s.flags|=4096,s)}function Vg(i,s,a){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),Jc(i.return,s,a)}function Tf(i,s,a,c,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=a,_.tailMode=p)}function zg(i,s,a){var c=s.pendingProps,p=c.revealOrder,_=c.tail;if(Un(i,s,c.children,a),c=Jt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Vg(i,a,s);else if(i.tag===19)Vg(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}if(Gt(Jt,c),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(a=s.child,p=null;a!==null;)i=a.alternate,i!==null&&Dl(i)===null&&(p=a),a=a.sibling;a=p,a===null?(p=s.child,s.child=null):(p=a.sibling,a.sibling=null),Tf(s,!1,p,a,_);break;case"backwards":for(a=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Dl(i)===null){s.child=p;break}i=p.sibling,p.sibling=a,a=p,p=i}Tf(s,!0,a,null,_);break;case"together":Tf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function kl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function cr(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),ms|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=Hr(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=Hr(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function pM(i,s,a){switch(s.tag){case 3:Og(s),eo();break;case 5:tg(s);break;case 1:Wn(s.type)&&Sl(s);break;case 4:nf(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,p=s.memoizedProps.value;Gt(Cl,c._currentValue),c._currentValue=p;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Gt(Jt,Jt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?kg(i,s,a):(Gt(Jt,Jt.current&1),i=cr(i,s,a),i!==null?i.sibling:null);Gt(Jt,Jt.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(i.flags&128)!==0){if(c)return zg(i,s,a);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Gt(Jt,Jt.current),c)break;return null;case 22:case 23:return s.lanes=0,Ig(i,s,a)}return cr(i,s,a)}var Hg,Af,Gg,Wg;Hg=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Af=function(){},Gg=function(i,s,a,c){var p=i.memoizedProps;if(p!==c){i=s.stateNode,hs(Bi.current);var _=null;switch(a){case"input":p=Tt(i,p),c=Tt(i,c),_=[];break;case"select":p=re({},p,{value:void 0}),c=re({},c,{value:void 0}),_=[];break;case"textarea":p=ht(i,p),c=ht(i,c),_=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(i.onclick=_l)}Be(a,c);var A;a=null;for(oe in p)if(!c.hasOwnProperty(oe)&&p.hasOwnProperty(oe)&&p[oe]!=null)if(oe==="style"){var I=p[oe];for(A in I)I.hasOwnProperty(A)&&(a||(a={}),a[A]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(o.hasOwnProperty(oe)?_||(_=[]):(_=_||[]).push(oe,null));for(oe in c){var V=c[oe];if(I=p!=null?p[oe]:void 0,c.hasOwnProperty(oe)&&V!==I&&(V!=null||I!=null))if(oe==="style")if(I){for(A in I)!I.hasOwnProperty(A)||V&&V.hasOwnProperty(A)||(a||(a={}),a[A]="");for(A in V)V.hasOwnProperty(A)&&I[A]!==V[A]&&(a||(a={}),a[A]=V[A])}else a||(_||(_=[]),_.push(oe,a)),a=V;else oe==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,I=I?I.__html:void 0,V!=null&&I!==V&&(_=_||[]).push(oe,V)):oe==="children"?typeof V!="string"&&typeof V!="number"||(_=_||[]).push(oe,""+V):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(o.hasOwnProperty(oe)?(V!=null&&oe==="onScroll"&&jt("scroll",i),_||I===V||(_=[])):(_=_||[]).push(oe,V))}a&&(_=_||[]).push("style",a);var oe=_;(s.updateQueue=oe)&&(s.flags|=4)}},Wg=function(i,s,a,c){a!==c&&(s.flags|=4)};function _a(i,s){if(!$t)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function bn(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,c=0;if(s)for(var p=i.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=c,i.childLanes=a,s}function mM(i,s,a){var c=s.pendingProps;switch(jc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(s),null;case 1:return Wn(s.type)&&yl(),bn(s),null;case 3:return c=s.stateNode,ro(),Yt(Gn),Yt(Cn),of(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(i===null||i.child===null)&&(Al(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,yi!==null&&(Ff(yi),yi=null))),Af(i,s),bn(s),null;case 5:rf(s);var p=hs(ha.current);if(a=s.type,i!==null&&s.stateNode!=null)Gg(i,s,a,c,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return bn(s),null}if(i=hs(Bi.current),Al(s)){c=s.stateNode,a=s.type;var _=s.memoizedProps;switch(c[Oi]=s,c[la]=_,i=(s.mode&1)!==0,a){case"dialog":jt("cancel",c),jt("close",c);break;case"iframe":case"object":case"embed":jt("load",c);break;case"video":case"audio":for(p=0;p<sa.length;p++)jt(sa[p],c);break;case"source":jt("error",c);break;case"img":case"image":case"link":jt("error",c),jt("load",c);break;case"details":jt("toggle",c);break;case"input":It(c,_),jt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!_.multiple},jt("invalid",c);break;case"textarea":Rt(c,_),jt("invalid",c)}Be(a,_),p=null;for(var A in _)if(_.hasOwnProperty(A)){var I=_[A];A==="children"?typeof I=="string"?c.textContent!==I&&(_.suppressHydrationWarning!==!0&&vl(c.textContent,I,i),p=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(_.suppressHydrationWarning!==!0&&vl(c.textContent,I,i),p=["children",""+I]):o.hasOwnProperty(A)&&I!=null&&A==="onScroll"&&jt("scroll",c)}switch(a){case"input":et(c),Vt(c,_,!0);break;case"textarea":et(c),Wt(c);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(c.onclick=_l)}c=p,s.updateQueue=c,c!==null&&(s.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=D(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=A.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof c.is=="string"?i=A.createElement(a,{is:c.is}):(i=A.createElement(a),a==="select"&&(A=i,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):i=A.createElementNS(i,a),i[Oi]=s,i[la]=c,Hg(i,s,!1,!1),s.stateNode=i;e:{switch(A=we(a,c),a){case"dialog":jt("cancel",i),jt("close",i),p=c;break;case"iframe":case"object":case"embed":jt("load",i),p=c;break;case"video":case"audio":for(p=0;p<sa.length;p++)jt(sa[p],i);p=c;break;case"source":jt("error",i),p=c;break;case"img":case"image":case"link":jt("error",i),jt("load",i),p=c;break;case"details":jt("toggle",i),p=c;break;case"input":It(i,c),p=Tt(i,c),jt("invalid",i);break;case"option":p=c;break;case"select":i._wrapperState={wasMultiple:!!c.multiple},p=re({},c,{value:void 0}),jt("invalid",i);break;case"textarea":Rt(i,c),p=ht(i,c),jt("invalid",i);break;default:p=c}Be(a,p),I=p;for(_ in I)if(I.hasOwnProperty(_)){var V=I[_];_==="style"?pe(i,V):_==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&he(i,V)):_==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&ge(i,V):typeof V=="number"&&ge(i,""+V):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?V!=null&&_==="onScroll"&&jt("scroll",i):V!=null&&b(i,_,V,A))}switch(a){case"input":et(i),Vt(i,c,!1);break;case"textarea":et(i),Wt(i);break;case"option":c.value!=null&&i.setAttribute("value",""+me(c.value));break;case"select":i.multiple=!!c.multiple,_=c.value,_!=null?zt(i,!!c.multiple,_,!1):c.defaultValue!=null&&zt(i,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=_l)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return bn(s),null;case 6:if(i&&s.stateNode!=null)Wg(i,s,i.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=hs(ha.current),hs(Bi.current),Al(s)){if(c=s.stateNode,a=s.memoizedProps,c[Oi]=s,(_=c.nodeValue!==a)&&(i=Qn,i!==null))switch(i.tag){case 3:vl(c.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&vl(c.nodeValue,a,(i.mode&1)!==0)}_&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Oi]=s,s.stateNode=c}return bn(s),null;case 13:if(Yt(Jt),c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if($t&&Jn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Ym(),eo(),s.flags|=98560,_=!1;else if(_=Al(s),c!==null&&c.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Oi]=s}else eo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;bn(s),_=!1}else yi!==null&&(Ff(yi),yi=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(i!==null&&i.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Jt.current&1)!==0?fn===0&&(fn=3):kf())),s.updateQueue!==null&&(s.flags|=4),bn(s),null);case 4:return ro(),Af(i,s),i===null&&oa(s.stateNode.containerInfo),bn(s),null;case 10:return Qc(s.type._context),bn(s),null;case 17:return Wn(s.type)&&yl(),bn(s),null;case 19:if(Yt(Jt),_=s.memoizedState,_===null)return bn(s),null;if(c=(s.flags&128)!==0,A=_.rendering,A===null)if(c)_a(_,!1);else{if(fn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(A=Dl(i),A!==null){for(s.flags|=128,_a(_,!1),c=A.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)_=a,i=c,_.flags&=14680066,A=_.alternate,A===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=A.childLanes,_.lanes=A.lanes,_.child=A.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=A.memoizedProps,_.memoizedState=A.memoizedState,_.updateQueue=A.updateQueue,_.type=A.type,i=A.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Gt(Jt,Jt.current&1|2),s.child}i=i.sibling}_.tail!==null&&Qt()>lo&&(s.flags|=128,c=!0,_a(_,!1),s.lanes=4194304)}else{if(!c)if(i=Dl(A),i!==null){if(s.flags|=128,c=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),_a(_,!0),_.tail===null&&_.tailMode==="hidden"&&!A.alternate&&!$t)return bn(s),null}else 2*Qt()-_.renderingStartTime>lo&&a!==1073741824&&(s.flags|=128,c=!0,_a(_,!1),s.lanes=4194304);_.isBackwards?(A.sibling=s.child,s.child=A):(a=_.last,a!==null?a.sibling=A:s.child=A,_.last=A)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=Qt(),s.sibling=null,a=Jt.current,Gt(Jt,c?a&1|2:a&1),s):(bn(s),null);case 22:case 23:return Bf(),c=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(ei&1073741824)!==0&&(bn(s),s.subtreeFlags&6&&(s.flags|=8192)):bn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function gM(i,s){switch(jc(s),s.tag){case 1:return Wn(s.type)&&yl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return ro(),Yt(Gn),Yt(Cn),of(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return rf(s),null;case 13:if(Yt(Jt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));eo()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Yt(Jt),null;case 4:return ro(),null;case 10:return Qc(s.type._context),null;case 22:case 23:return Bf(),null;case 24:return null;default:return null}}var Vl=!1,Pn=!1,vM=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function oo(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tn(i,s,c)}else a.current=null}function wf(i,s,a){try{a()}catch(c){tn(i,s,c)}}var Xg=!1;function _M(i,s){if(Oc=ol,i=Em(),bc(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var p=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var A=0,I=-1,V=-1,oe=0,xe=0,Se=i,_e=null;t:for(;;){for(var Ve;Se!==a||p!==0&&Se.nodeType!==3||(I=A+p),Se!==_||c!==0&&Se.nodeType!==3||(V=A+c),Se.nodeType===3&&(A+=Se.nodeValue.length),(Ve=Se.firstChild)!==null;)_e=Se,Se=Ve;for(;;){if(Se===i)break t;if(_e===a&&++oe===p&&(I=A),_e===_&&++xe===c&&(V=A),(Ve=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=Ve}a=I===-1||V===-1?null:{start:I,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bc={focusedElem:i,selectionRange:a},ol=!1,Ge=s;Ge!==null;)if(s=Ge,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Ge=i;else for(;Ge!==null;){s=Ge;try{var We=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var qe=We.memoizedProps,rn=We.memoizedState,$=s.stateNode,W=$.getSnapshotBeforeUpdate(s.elementType===s.type?qe:Si(s.type,qe),rn);$.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var te=s.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){tn(s,s.return,Te)}if(i=s.sibling,i!==null){i.return=s.return,Ge=i;break}Ge=s.return}return We=Xg,Xg=!1,We}function xa(i,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&wf(s,a,_)}p=p.next}while(p!==c)}}function zl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function Cf(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function jg(i){var s=i.alternate;s!==null&&(i.alternate=null,jg(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Oi],delete s[la],delete s[Hc],delete s[eM],delete s[tM])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Yg(i){return i.tag===5||i.tag===3||i.tag===4}function qg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Yg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Rf(i,s,a){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=_l));else if(c!==4&&(i=i.child,i!==null))for(Rf(i,s,a),i=i.sibling;i!==null;)Rf(i,s,a),i=i.sibling}function bf(i,s,a){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(c!==4&&(i=i.child,i!==null))for(bf(i,s,a),i=i.sibling;i!==null;)bf(i,s,a),i=i.sibling}var Mn=null,Mi=!1;function Or(i,s,a){for(a=a.child;a!==null;)Kg(i,s,a),a=a.sibling}function Kg(i,s,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(J,a)}catch{}switch(a.tag){case 5:Pn||oo(a,s);case 6:var c=Mn,p=Mi;Mn=null,Or(i,s,a),Mn=c,Mi=p,Mn!==null&&(Mi?(i=Mn,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):Mn.removeChild(a.stateNode));break;case 18:Mn!==null&&(Mi?(i=Mn,a=a.stateNode,i.nodeType===8?zc(i.parentNode,a):i.nodeType===1&&zc(i,a),Zo(i)):zc(Mn,a.stateNode));break;case 4:c=Mn,p=Mi,Mn=a.stateNode.containerInfo,Mi=!0,Or(i,s,a),Mn=c,Mi=p;break;case 0:case 11:case 14:case 15:if(!Pn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var _=p,A=_.destroy;_=_.tag,A!==void 0&&((_&2)!==0||(_&4)!==0)&&wf(a,s,A),p=p.next}while(p!==c)}Or(i,s,a);break;case 1:if(!Pn&&(oo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){tn(a,s,I)}Or(i,s,a);break;case 21:Or(i,s,a);break;case 22:a.mode&1?(Pn=(c=Pn)||a.memoizedState!==null,Or(i,s,a),Pn=c):Or(i,s,a);break;default:Or(i,s,a)}}function $g(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new vM),s.forEach(function(c){var p=CM.bind(null,i,c);a.has(c)||(a.add(c),c.then(p,p))})}}function Ei(i,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var p=a[c];try{var _=i,A=s,I=A;e:for(;I!==null;){switch(I.tag){case 5:Mn=I.stateNode,Mi=!1;break e;case 3:Mn=I.stateNode.containerInfo,Mi=!0;break e;case 4:Mn=I.stateNode.containerInfo,Mi=!0;break e}I=I.return}if(Mn===null)throw Error(t(160));Kg(_,A,p),Mn=null,Mi=!1;var V=p.alternate;V!==null&&(V.return=null),p.return=null}catch(oe){tn(p,s,oe)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Zg(s,i),s=s.sibling}function Zg(i,s){var a=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ei(s,i),Vi(i),c&4){try{xa(3,i,i.return),zl(3,i)}catch(qe){tn(i,i.return,qe)}try{xa(5,i,i.return)}catch(qe){tn(i,i.return,qe)}}break;case 1:Ei(s,i),Vi(i),c&512&&a!==null&&oo(a,a.return);break;case 5:if(Ei(s,i),Vi(i),c&512&&a!==null&&oo(a,a.return),i.flags&32){var p=i.stateNode;try{ge(p,"")}catch(qe){tn(i,i.return,qe)}}if(c&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,A=a!==null?a.memoizedProps:_,I=i.type,V=i.updateQueue;if(i.updateQueue=null,V!==null)try{I==="input"&&_.type==="radio"&&_.name!=null&&dt(p,_),we(I,A);var oe=we(I,_);for(A=0;A<V.length;A+=2){var xe=V[A],Se=V[A+1];xe==="style"?pe(p,Se):xe==="dangerouslySetInnerHTML"?he(p,Se):xe==="children"?ge(p,Se):b(p,xe,Se,oe)}switch(I){case"input":Zt(p,_);break;case"textarea":De(p,_);break;case"select":var _e=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Ve=_.value;Ve!=null?zt(p,!!_.multiple,Ve,!1):_e!==!!_.multiple&&(_.defaultValue!=null?zt(p,!!_.multiple,_.defaultValue,!0):zt(p,!!_.multiple,_.multiple?[]:"",!1))}p[la]=_}catch(qe){tn(i,i.return,qe)}}break;case 6:if(Ei(s,i),Vi(i),c&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(qe){tn(i,i.return,qe)}}break;case 3:if(Ei(s,i),Vi(i),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Zo(s.containerInfo)}catch(qe){tn(i,i.return,qe)}break;case 4:Ei(s,i),Vi(i);break;case 13:Ei(s,i),Vi(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Lf=Qt())),c&4&&$g(i);break;case 22:if(xe=a!==null&&a.memoizedState!==null,i.mode&1?(Pn=(oe=Pn)||xe,Ei(s,i),Pn=oe):Ei(s,i),Vi(i),c&8192){if(oe=i.memoizedState!==null,(i.stateNode.isHidden=oe)&&!xe&&(i.mode&1)!==0)for(Ge=i,xe=i.child;xe!==null;){for(Se=Ge=xe;Ge!==null;){switch(_e=Ge,Ve=_e.child,_e.tag){case 0:case 11:case 14:case 15:xa(4,_e,_e.return);break;case 1:oo(_e,_e.return);var We=_e.stateNode;if(typeof We.componentWillUnmount=="function"){c=_e,a=_e.return;try{s=c,We.props=s.memoizedProps,We.state=s.memoizedState,We.componentWillUnmount()}catch(qe){tn(c,a,qe)}}break;case 5:oo(_e,_e.return);break;case 22:if(_e.memoizedState!==null){e0(Se);continue}}Ve!==null?(Ve.return=_e,Ge=Ve):e0(Se)}xe=xe.sibling}e:for(xe=null,Se=i;;){if(Se.tag===5){if(xe===null){xe=Se;try{p=Se.stateNode,oe?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(I=Se.stateNode,V=Se.memoizedProps.style,A=V!=null&&V.hasOwnProperty("display")?V.display:null,I.style.display=fe("display",A))}catch(qe){tn(i,i.return,qe)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=oe?"":Se.memoizedProps}catch(qe){tn(i,i.return,qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===i)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===i)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===i)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Ei(s,i),Vi(i),c&4&&$g(i);break;case 21:break;default:Ei(s,i),Vi(i)}}function Vi(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(Yg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(ge(p,""),c.flags&=-33);var _=qg(i);bf(i,_,p);break;case 3:case 4:var A=c.stateNode.containerInfo,I=qg(i);Rf(i,I,A);break;default:throw Error(t(161))}}catch(V){tn(i,i.return,V)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function xM(i,s,a){Ge=i,Qg(i)}function Qg(i,s,a){for(var c=(i.mode&1)!==0;Ge!==null;){var p=Ge,_=p.child;if(p.tag===22&&c){var A=p.memoizedState!==null||Vl;if(!A){var I=p.alternate,V=I!==null&&I.memoizedState!==null||Pn;I=Vl;var oe=Pn;if(Vl=A,(Pn=V)&&!oe)for(Ge=p;Ge!==null;)A=Ge,V=A.child,A.tag===22&&A.memoizedState!==null?t0(p):V!==null?(V.return=A,Ge=V):t0(p);for(;_!==null;)Ge=_,Qg(_),_=_.sibling;Ge=p,Vl=I,Pn=oe}Jg(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,Ge=_):Jg(i)}}function Jg(i){for(;Ge!==null;){var s=Ge;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Pn||zl(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Pn)if(a===null)c.componentDidMount();else{var p=s.elementType===s.type?a.memoizedProps:Si(s.type,a.memoizedProps);c.componentDidUpdate(p,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&eg(s,_,c);break;case 3:var A=s.updateQueue;if(A!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}eg(s,A,a)}break;case 5:var I=s.stateNode;if(a===null&&s.flags&4){a=I;var V=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var oe=s.alternate;if(oe!==null){var xe=oe.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&Zo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||s.flags&512&&Cf(s)}catch(_e){tn(s,s.return,_e)}}if(s===i){Ge=null;break}if(a=s.sibling,a!==null){a.return=s.return,Ge=a;break}Ge=s.return}}function e0(i){for(;Ge!==null;){var s=Ge;if(s===i){Ge=null;break}var a=s.sibling;if(a!==null){a.return=s.return,Ge=a;break}Ge=s.return}}function t0(i){for(;Ge!==null;){var s=Ge;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{zl(4,s)}catch(V){tn(s,a,V)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var p=s.return;try{c.componentDidMount()}catch(V){tn(s,p,V)}}var _=s.return;try{Cf(s)}catch(V){tn(s,_,V)}break;case 5:var A=s.return;try{Cf(s)}catch(V){tn(s,A,V)}}}catch(V){tn(s,s.return,V)}if(s===i){Ge=null;break}var I=s.sibling;if(I!==null){I.return=s.return,Ge=I;break}Ge=s.return}}var yM=Math.ceil,Hl=P.ReactCurrentDispatcher,Pf=P.ReactCurrentOwner,ci=P.ReactCurrentBatchConfig,Mt=0,vn=null,an=null,En=0,ei=0,ao=Lr(0),fn=0,ya=null,ms=0,Gl=0,Df=0,Sa=null,jn=null,Lf=0,lo=1/0,fr=null,Wl=!1,Nf=null,Br=null,Xl=!1,kr=null,jl=0,Ma=0,If=null,Yl=-1,ql=0;function Fn(){return(Mt&6)!==0?Qt():Yl!==-1?Yl:Yl=Qt()}function Vr(i){return(i.mode&1)===0?1:(Mt&2)!==0&&En!==0?En&-En:iM.transition!==null?(ql===0&&(ql=ke()),ql):(i=vt,i!==0||(i=window.event,i=i===void 0?16:im(i.type)),i)}function Ti(i,s,a,c){if(50<Ma)throw Ma=0,If=null,Error(t(185));gt(i,a,c),((Mt&2)===0||i!==vn)&&(i===vn&&((Mt&2)===0&&(Gl|=a),fn===4&&zr(i,En)),Yn(i,c),a===1&&Mt===0&&(s.mode&1)===0&&(lo=Qt()+500,Ml&&Ir()))}function Yn(i,s){var a=i.callbackNode;bt(i,s);var c=Ht(i,i===vn?En:0);if(c===0)a!==null&&rl(a),i.callbackNode=null,i.callbackPriority=0;else if(s=c&-c,i.callbackPriority!==s){if(a!=null&&rl(a),s===1)i.tag===0?nM(i0.bind(null,i)):Hm(i0.bind(null,i)),QS(function(){(Mt&6)===0&&Ir()}),a=null;else{switch(ir(c)){case 1:a=jo;break;case 4:a=C;break;case 16:a=j;break;case 536870912:a=ee;break;default:a=j}a=f0(a,n0.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function n0(i,s){if(Yl=-1,ql=0,(Mt&6)!==0)throw Error(t(327));var a=i.callbackNode;if(uo()&&i.callbackNode!==a)return null;var c=Ht(i,i===vn?En:0);if(c===0)return null;if((c&30)!==0||(c&i.expiredLanes)!==0||s)s=Kl(i,c);else{s=c;var p=Mt;Mt|=2;var _=s0();(vn!==i||En!==s)&&(fr=null,lo=Qt()+500,vs(i,s));do try{EM();break}catch(I){r0(i,I)}while(!0);Zc(),Hl.current=_,Mt=p,an!==null?s=0:(vn=null,En=0,s=fn)}if(s!==0){if(s===2&&(p=on(i),p!==0&&(c=p,s=Uf(i,p))),s===1)throw a=ya,vs(i,0),zr(i,c),Yn(i,Qt()),a;if(s===6)zr(i,c);else{if(p=i.current.alternate,(c&30)===0&&!SM(p)&&(s=Kl(i,c),s===2&&(_=on(i),_!==0&&(c=_,s=Uf(i,_))),s===1))throw a=ya,vs(i,0),zr(i,c),Yn(i,Qt()),a;switch(i.finishedWork=p,i.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:_s(i,jn,fr);break;case 3:if(zr(i,c),(c&130023424)===c&&(s=Lf+500-Qt(),10<s)){if(Ht(i,0)!==0)break;if(p=i.suspendedLanes,(p&c)!==c){Fn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Vc(_s.bind(null,i,jn,fr),s);break}_s(i,jn,fr);break;case 4:if(zr(i,c),(c&4194240)===c)break;for(s=i.eventTimes,p=-1;0<c;){var A=31-Ce(c);_=1<<A,A=s[A],A>p&&(p=A),c&=~_}if(c=p,c=Qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*yM(c/1960))-c,10<c){i.timeoutHandle=Vc(_s.bind(null,i,jn,fr),c);break}_s(i,jn,fr);break;case 5:_s(i,jn,fr);break;default:throw Error(t(329))}}}return Yn(i,Qt()),i.callbackNode===a?n0.bind(null,i):null}function Uf(i,s){var a=Sa;return i.current.memoizedState.isDehydrated&&(vs(i,s).flags|=256),i=Kl(i,s),i!==2&&(s=jn,jn=a,s!==null&&Ff(s)),i}function Ff(i){jn===null?jn=i:jn.push.apply(jn,i)}function SM(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var p=a[c],_=p.getSnapshot;p=p.value;try{if(!xi(_(),p))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function zr(i,s){for(s&=~Df,s&=~Gl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-Ce(s),c=1<<a;i[a]=-1,s&=~c}}function i0(i){if((Mt&6)!==0)throw Error(t(327));uo();var s=Ht(i,0);if((s&1)===0)return Yn(i,Qt()),null;var a=Kl(i,s);if(i.tag!==0&&a===2){var c=on(i);c!==0&&(s=c,a=Uf(i,c))}if(a===1)throw a=ya,vs(i,0),zr(i,s),Yn(i,Qt()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,_s(i,jn,fr),Yn(i,Qt()),null}function Of(i,s){var a=Mt;Mt|=1;try{return i(s)}finally{Mt=a,Mt===0&&(lo=Qt()+500,Ml&&Ir())}}function gs(i){kr!==null&&kr.tag===0&&(Mt&6)===0&&uo();var s=Mt;Mt|=1;var a=ci.transition,c=vt;try{if(ci.transition=null,vt=1,i)return i()}finally{vt=c,ci.transition=a,Mt=s,(Mt&6)===0&&Ir()}}function Bf(){ei=ao.current,Yt(ao)}function vs(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,ZS(a)),an!==null)for(a=an.return;a!==null;){var c=a;switch(jc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&yl();break;case 3:ro(),Yt(Gn),Yt(Cn),of();break;case 5:rf(c);break;case 4:ro();break;case 13:Yt(Jt);break;case 19:Yt(Jt);break;case 10:Qc(c.type._context);break;case 22:case 23:Bf()}a=a.return}if(vn=i,an=i=Hr(i.current,null),En=ei=s,fn=0,ya=null,Df=Gl=ms=0,jn=Sa=null,ds!==null){for(s=0;s<ds.length;s++)if(a=ds[s],c=a.interleaved,c!==null){a.interleaved=null;var p=c.next,_=a.pending;if(_!==null){var A=_.next;_.next=p,c.next=A}a.pending=c}ds=null}return i}function r0(i,s){do{var a=an;try{if(Zc(),Ll.current=Fl,Nl){for(var c=en.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}Nl=!1}if(ps=0,gn=cn=en=null,pa=!1,ma=0,Pf.current=null,a===null||a.return===null){fn=1,ya=s,an=null;break}e:{var _=i,A=a.return,I=a,V=s;if(s=En,I.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var oe=V,xe=I,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=xe.alternate;_e?(xe.updateQueue=_e.updateQueue,xe.memoizedState=_e.memoizedState,xe.lanes=_e.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ve=bg(A);if(Ve!==null){Ve.flags&=-257,Pg(Ve,A,I,_,s),Ve.mode&1&&Rg(_,oe,s),s=Ve,V=oe;var We=s.updateQueue;if(We===null){var qe=new Set;qe.add(V),s.updateQueue=qe}else We.add(V);break e}else{if((s&1)===0){Rg(_,oe,s),kf();break e}V=Error(t(426))}}else if($t&&I.mode&1){var rn=bg(A);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),Pg(rn,A,I,_,s),Kc(so(V,I));break e}}_=V=so(V,I),fn!==4&&(fn=2),Sa===null?Sa=[_]:Sa.push(_),_=A;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var $=wg(_,V,s);Jm(_,$);break e;case 1:I=V;var W=_.type,te=_.stateNode;if((_.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Br===null||!Br.has(te)))){_.flags|=65536,s&=-s,_.lanes|=s;var Te=Cg(_,I,s);Jm(_,Te);break e}}_=_.return}while(_!==null)}a0(a)}catch($e){s=$e,an===a&&a!==null&&(an=a=a.return);continue}break}while(!0)}function s0(){var i=Hl.current;return Hl.current=Fl,i===null?Fl:i}function kf(){(fn===0||fn===3||fn===2)&&(fn=4),vn===null||(ms&268435455)===0&&(Gl&268435455)===0||zr(vn,En)}function Kl(i,s){var a=Mt;Mt|=2;var c=s0();(vn!==i||En!==s)&&(fr=null,vs(i,s));do try{MM();break}catch(p){r0(i,p)}while(!0);if(Zc(),Mt=a,Hl.current=c,an!==null)throw Error(t(261));return vn=null,En=0,fn}function MM(){for(;an!==null;)o0(an)}function EM(){for(;an!==null&&!mc();)o0(an)}function o0(i){var s=c0(i.alternate,i,ei);i.memoizedProps=i.pendingProps,s===null?a0(i):an=s,Pf.current=null}function a0(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=mM(a,s,ei),a!==null){an=a;return}}else{if(a=gM(a,s),a!==null){a.flags&=32767,an=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{fn=6,an=null;return}}if(s=s.sibling,s!==null){an=s;return}an=s=i}while(s!==null);fn===0&&(fn=5)}function _s(i,s,a){var c=vt,p=ci.transition;try{ci.transition=null,vt=1,TM(i,s,a,c)}finally{ci.transition=p,vt=c}return null}function TM(i,s,a,c){do uo();while(kr!==null);if((Mt&6)!==0)throw Error(t(327));a=i.finishedWork;var p=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=a.lanes|a.childLanes;if(zn(i,_),i===vn&&(an=vn=null,En=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Xl||(Xl=!0,f0(j,function(){return uo(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=ci.transition,ci.transition=null;var A=vt;vt=1;var I=Mt;Mt|=4,Pf.current=null,_M(i,a),Zg(a,i),WS(Bc),ol=!!Oc,Bc=Oc=null,i.current=a,xM(a),gc(),Mt=I,vt=A,ci.transition=_}else i.current=a;if(Xl&&(Xl=!1,kr=i,jl=p),_=i.pendingLanes,_===0&&(Br=null),ze(a.stateNode),Yn(i,Qt()),s!==null)for(c=i.onRecoverableError,a=0;a<s.length;a++)p=s[a],c(p.value,{componentStack:p.stack,digest:p.digest});if(Wl)throw Wl=!1,i=Nf,Nf=null,i;return(jl&1)!==0&&i.tag!==0&&uo(),_=i.pendingLanes,(_&1)!==0?i===If?Ma++:(Ma=0,If=i):Ma=0,Ir(),null}function uo(){if(kr!==null){var i=ir(jl),s=ci.transition,a=vt;try{if(ci.transition=null,vt=16>i?16:i,kr===null)var c=!1;else{if(i=kr,kr=null,jl=0,(Mt&6)!==0)throw Error(t(331));var p=Mt;for(Mt|=4,Ge=i.current;Ge!==null;){var _=Ge,A=_.child;if((Ge.flags&16)!==0){var I=_.deletions;if(I!==null){for(var V=0;V<I.length;V++){var oe=I[V];for(Ge=oe;Ge!==null;){var xe=Ge;switch(xe.tag){case 0:case 11:case 15:xa(8,xe,_)}var Se=xe.child;if(Se!==null)Se.return=xe,Ge=Se;else for(;Ge!==null;){xe=Ge;var _e=xe.sibling,Ve=xe.return;if(jg(xe),xe===oe){Ge=null;break}if(_e!==null){_e.return=Ve,Ge=_e;break}Ge=Ve}}}var We=_.alternate;if(We!==null){var qe=We.child;if(qe!==null){We.child=null;do{var rn=qe.sibling;qe.sibling=null,qe=rn}while(qe!==null)}}Ge=_}}if((_.subtreeFlags&2064)!==0&&A!==null)A.return=_,Ge=A;else e:for(;Ge!==null;){if(_=Ge,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:xa(9,_,_.return)}var $=_.sibling;if($!==null){$.return=_.return,Ge=$;break e}Ge=_.return}}var W=i.current;for(Ge=W;Ge!==null;){A=Ge;var te=A.child;if((A.subtreeFlags&2064)!==0&&te!==null)te.return=A,Ge=te;else e:for(A=W;Ge!==null;){if(I=Ge,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:zl(9,I)}}catch($e){tn(I,I.return,$e)}if(I===A){Ge=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,Ge=Te;break e}Ge=I.return}}if(Mt=p,Ir(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(J,i)}catch{}c=!0}return c}finally{vt=a,ci.transition=s}}return!1}function l0(i,s,a){s=so(a,s),s=wg(i,s,1),i=Fr(i,s,1),s=Fn(),i!==null&&(gt(i,1,s),Yn(i,s))}function tn(i,s,a){if(i.tag===3)l0(i,i,a);else for(;s!==null;){if(s.tag===3){l0(s,i,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Br===null||!Br.has(c))){i=so(a,i),i=Cg(s,i,1),s=Fr(s,i,1),i=Fn(),s!==null&&(gt(s,1,i),Yn(s,i));break}}s=s.return}}function AM(i,s,a){var c=i.pingCache;c!==null&&c.delete(s),s=Fn(),i.pingedLanes|=i.suspendedLanes&a,vn===i&&(En&a)===a&&(fn===4||fn===3&&(En&130023424)===En&&500>Qt()-Lf?vs(i,0):Df|=a),Yn(i,s)}function u0(i,s){s===0&&((i.mode&1)===0?s=1:(s=Ke,Ke<<=1,(Ke&130023424)===0&&(Ke=4194304)));var a=Fn();i=lr(i,s),i!==null&&(gt(i,s,a),Yn(i,a))}function wM(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),u0(i,a)}function CM(i,s){var a=0;switch(i.tag){case 13:var c=i.stateNode,p=i.memoizedState;p!==null&&(a=p.retryLane);break;case 19:c=i.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),u0(i,a)}var c0;c0=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||Gn.current)Xn=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return Xn=!1,pM(i,s,a);Xn=(i.flags&131072)!==0}else Xn=!1,$t&&(s.flags&1048576)!==0&&Gm(s,Tl,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;kl(i,s),i=s.pendingProps;var p=Zs(s,Cn.current);io(s,a),p=uf(null,s,c,i,p,a);var _=cf();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Wn(c)?(_=!0,Sl(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,tf(s),p.updater=Ol,s.stateNode=p,p._reactInternals=s,gf(s,c,i,a),s=yf(null,s,c,!0,_,a)):(s.tag=0,$t&&_&&Xc(s),Un(null,s,p,a),s=s.child),s;case 16:c=s.elementType;e:{switch(kl(i,s),i=s.pendingProps,p=c._init,c=p(c._payload),s.type=c,p=s.tag=bM(c),i=Si(c,i),p){case 0:s=xf(null,s,c,i,a);break e;case 1:s=Fg(null,s,c,i,a);break e;case 11:s=Dg(null,s,c,i,a);break e;case 14:s=Lg(null,s,c,Si(c.type,i),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:Si(c,p),xf(i,s,c,p,a);case 1:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:Si(c,p),Fg(i,s,c,p,a);case 3:e:{if(Og(s),i===null)throw Error(t(387));c=s.pendingProps,_=s.memoizedState,p=_.element,Qm(i,s),Pl(s,c,null,a);var A=s.memoizedState;if(c=A.element,_.isDehydrated)if(_={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=so(Error(t(423)),s),s=Bg(i,s,c,a,p);break e}else if(c!==p){p=so(Error(t(424)),s),s=Bg(i,s,c,a,p);break e}else for(Jn=Dr(s.stateNode.containerInfo.firstChild),Qn=s,$t=!0,yi=null,a=$m(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(eo(),c===p){s=cr(i,s,a);break e}Un(i,s,c,a)}s=s.child}return s;case 5:return tg(s),i===null&&qc(s),c=s.type,p=s.pendingProps,_=i!==null?i.memoizedProps:null,A=p.children,kc(c,p)?A=null:_!==null&&kc(c,_)&&(s.flags|=32),Ug(i,s),Un(i,s,A,a),s.child;case 6:return i===null&&qc(s),null;case 13:return kg(i,s,a);case 4:return nf(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=to(s,null,c,a):Un(i,s,c,a),s.child;case 11:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:Si(c,p),Dg(i,s,c,p,a);case 7:return Un(i,s,s.pendingProps,a),s.child;case 8:return Un(i,s,s.pendingProps.children,a),s.child;case 12:return Un(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,p=s.pendingProps,_=s.memoizedProps,A=p.value,Gt(Cl,c._currentValue),c._currentValue=A,_!==null)if(xi(_.value,A)){if(_.children===p.children&&!Gn.current){s=cr(i,s,a);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var I=_.dependencies;if(I!==null){A=_.child;for(var V=I.firstContext;V!==null;){if(V.context===c){if(_.tag===1){V=ur(-1,a&-a),V.tag=2;var oe=_.updateQueue;if(oe!==null){oe=oe.shared;var xe=oe.pending;xe===null?V.next=V:(V.next=xe.next,xe.next=V),oe.pending=V}}_.lanes|=a,V=_.alternate,V!==null&&(V.lanes|=a),Jc(_.return,a,s),I.lanes|=a;break}V=V.next}}else if(_.tag===10)A=_.type===s.type?null:_.child;else if(_.tag===18){if(A=_.return,A===null)throw Error(t(341));A.lanes|=a,I=A.alternate,I!==null&&(I.lanes|=a),Jc(A,a,s),A=_.sibling}else A=_.child;if(A!==null)A.return=_;else for(A=_;A!==null;){if(A===s){A=null;break}if(_=A.sibling,_!==null){_.return=A.return,A=_;break}A=A.return}_=A}Un(i,s,p.children,a),s=s.child}return s;case 9:return p=s.type,c=s.pendingProps.children,io(s,a),p=li(p),c=c(p),s.flags|=1,Un(i,s,c,a),s.child;case 14:return c=s.type,p=Si(c,s.pendingProps),p=Si(c.type,p),Lg(i,s,c,p,a);case 15:return Ng(i,s,s.type,s.pendingProps,a);case 17:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:Si(c,p),kl(i,s),s.tag=1,Wn(c)?(i=!0,Sl(s)):i=!1,io(s,a),Tg(s,c,p),gf(s,c,p,a),yf(null,s,c,!0,i,a);case 19:return zg(i,s,a);case 22:return Ig(i,s,a)}throw Error(t(156,s.tag))};function f0(i,s){return il(i,s)}function RM(i,s,a,c){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(i,s,a,c){return new RM(i,s,a,c)}function Vf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function bM(i){if(typeof i=="function")return Vf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===q)return 11;if(i===H)return 14}return 2}function Hr(i,s){var a=i.alternate;return a===null?(a=fi(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function $l(i,s,a,c,p,_){var A=2;if(c=i,typeof i=="function")Vf(i)&&(A=1);else if(typeof i=="string")A=5;else e:switch(i){case B:return xs(a.children,p,_,s);case T:A=8,p|=8;break;case N:return i=fi(12,a,s,p|2),i.elementType=N,i.lanes=_,i;case le:return i=fi(13,a,s,p),i.elementType=le,i.lanes=_,i;case ce:return i=fi(19,a,s,p),i.elementType=ce,i.lanes=_,i;case Y:return Zl(a,p,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case k:A=10;break e;case O:A=9;break e;case q:A=11;break e;case H:A=14;break e;case Z:A=16,c=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=fi(A,a,s,p),s.elementType=i,s.type=c,s.lanes=_,s}function xs(i,s,a,c){return i=fi(7,i,c,s),i.lanes=a,i}function Zl(i,s,a,c){return i=fi(22,i,c,s),i.elementType=Y,i.lanes=a,i.stateNode={isHidden:!1},i}function zf(i,s,a){return i=fi(6,i,null,s),i.lanes=a,i}function Hf(i,s,a){return s=fi(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function PM(i,s,a,c,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sn(0),this.expirationTimes=Sn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sn(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Gf(i,s,a,c,p,_,A,I,V){return i=new PM(i,s,a,I,V),s===1?(s=1,_===!0&&(s|=8)):s=0,_=fi(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},tf(_),i}function DM(i,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:i,containerInfo:s,implementation:a}}function d0(i){if(!i)return Nr;i=i._reactInternals;e:{if(Ui(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Wn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(Wn(a))return Vm(i,a,s)}return s}function h0(i,s,a,c,p,_,A,I,V){return i=Gf(a,c,!0,i,p,_,A,I,V),i.context=d0(null),a=i.current,c=Fn(),p=Vr(a),_=ur(c,p),_.callback=s??null,Fr(a,_,p),i.current.lanes=p,gt(i,p,c),Yn(i,c),i}function Ql(i,s,a,c){var p=s.current,_=Fn(),A=Vr(p);return a=d0(a),s.context===null?s.context=a:s.pendingContext=a,s=ur(_,A),s.payload={element:i},c=c===void 0?null:c,c!==null&&(s.callback=c),i=Fr(p,s,A),i!==null&&(Ti(i,p,A,_),bl(i,p,A)),A}function Jl(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function p0(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function Wf(i,s){p0(i,s),(i=i.alternate)&&p0(i,s)}function LM(){return null}var m0=typeof reportError=="function"?reportError:function(i){console.error(i)};function Xf(i){this._internalRoot=i}eu.prototype.render=Xf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Ql(i,s,null,null)},eu.prototype.unmount=Xf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;gs(function(){Ql(null,i,null,null)}),s[rr]=null}};function eu(i){this._internalRoot=i}eu.prototype.unstable_scheduleHydration=function(i){if(i){var s=Pt();i={blockedOn:null,target:i,priority:s};for(var a=0;a<Rr.length&&s!==0&&s<Rr[a].priority;a++);Rr.splice(a,0,i),a===0&&tm(i)}};function jf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function tu(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function g0(){}function NM(i,s,a,c,p){if(p){if(typeof c=="function"){var _=c;c=function(){var oe=Jl(A);_.call(oe)}}var A=h0(s,c,i,0,null,!1,!1,"",g0);return i._reactRootContainer=A,i[rr]=A.current,oa(i.nodeType===8?i.parentNode:i),gs(),A}for(;p=i.lastChild;)i.removeChild(p);if(typeof c=="function"){var I=c;c=function(){var oe=Jl(V);I.call(oe)}}var V=Gf(i,0,!1,null,null,!1,!1,"",g0);return i._reactRootContainer=V,i[rr]=V.current,oa(i.nodeType===8?i.parentNode:i),gs(function(){Ql(s,V,a,c)}),V}function nu(i,s,a,c,p){var _=a._reactRootContainer;if(_){var A=_;if(typeof p=="function"){var I=p;p=function(){var V=Jl(A);I.call(V)}}Ql(s,A,i,p)}else A=NM(a,s,i,p,c);return Jl(A)}Ct=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=St(s.pendingLanes);a!==0&&(Hn(s,a|1),Yn(s,Qt()),(Mt&6)===0&&(lo=Qt()+500,Ir()))}break;case 13:gs(function(){var c=lr(i,1);if(c!==null){var p=Fn();Ti(c,i,1,p)}}),Wf(i,1)}},Xt=function(i){if(i.tag===13){var s=lr(i,134217728);if(s!==null){var a=Fn();Ti(s,i,134217728,a)}Wf(i,134217728)}},vi=function(i){if(i.tag===13){var s=Vr(i),a=lr(i,s);if(a!==null){var c=Fn();Ti(a,i,s,c)}Wf(i,s)}},Pt=function(){return vt},_i=function(i,s){var a=vt;try{return vt=i,s()}finally{vt=a}},ot=function(i,s,a){switch(s){case"input":if(Zt(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==i&&c.form===i.form){var p=xl(c);if(!p)throw Error(t(90));kt(c),Zt(c,p)}}}break;case"textarea":De(i,a);break;case"select":s=a.value,s!=null&&zt(i,!!a.multiple,s,!1)}},Re=Of,ve=gs;var IM={usingClientEntryPoint:!1,Events:[ua,Ks,xl,de,Oe,Of]},Ea={findFiberByHostInstance:ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},UM={bundleType:Ea.bundleType,version:Ea.version,rendererPackageName:Ea.rendererPackageName,rendererConfig:Ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Wo(i),i===null?null:i.stateNode},findFiberByHostInstance:Ea.findFiberByHostInstance||LM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{J=iu.inject(UM),be=iu}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IM,qn.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jf(s))throw Error(t(200));return DM(i,s,null,a)},qn.createRoot=function(i,s){if(!jf(i))throw Error(t(299));var a=!1,c="",p=m0;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Gf(i,1,!1,null,null,a,!1,c,p),i[rr]=s.current,oa(i.nodeType===8?i.parentNode:i),new Xf(s)},qn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Wo(s),i=i===null?null:i.stateNode,i},qn.flushSync=function(i){return gs(i)},qn.hydrate=function(i,s,a){if(!tu(s))throw Error(t(200));return nu(null,i,s,!0,a)},qn.hydrateRoot=function(i,s,a){if(!jf(i))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,p=!1,_="",A=m0;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(A=a.onRecoverableError)),s=h0(s,null,i,1,a??null,p,!1,_,A),i[rr]=s.current,oa(i),c)for(i=0;i<c.length;i++)a=c[i],p=a._getVersion,p=p(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,p]:s.mutableSourceEagerHydrationData.push(a,p);return new eu(s)},qn.render=function(i,s,a){if(!tu(s))throw Error(t(200));return nu(null,i,s,!1,a)},qn.unmountComponentAtNode=function(i){if(!tu(i))throw Error(t(40));return i._reactRootContainer?(gs(function(){nu(null,null,i,!1,function(){i._reactRootContainer=null,i[rr]=null})}),!0):!1},qn.unstable_batchedUpdates=Of,qn.unstable_renderSubtreeIntoContainer=function(i,s,a,c){if(!tu(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return nu(i,s,a,!1,c)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var T0;function GM(){if(T0)return Kf.exports;T0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Kf.exports=HM(),Kf.exports}var A0;function WM(){if(A0)return ru;A0=1;var n=GM();return ru.createRoot=n.createRoot,ru.hydrateRoot=n.hydrateRoot,ru}var XM=WM(),Je=lp();const B_=Je.createContext({});function jM(n){const e=Je.useRef(null);return e.current===null&&(e.current=n()),e.current}const YM=typeof window<"u",qM=YM?Je.useLayoutEffect:Je.useEffect,up=Je.createContext(null);function cp(n,e){n.indexOf(e)===-1&&n.push(e)}function Xu(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const Qi=(n,e,t)=>t>e?e:t<n?n:t;let fp=()=>{};const ts={},k_=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),V_=n=>typeof n=="object"&&n!==null,z_=n=>/^0[^.\s]+$/u.test(n);function H_(n){let e;return()=>(e===void 0&&(e=n()),e)}const gi=n=>n,qa=(...n)=>n.reduce((e,t)=>r=>t(e(r))),Ha=(n,e,t)=>{const r=e-n;return r?(t-n)/r:1};class dp{constructor(){this.subscriptions=[]}add(e){return cp(this.subscriptions,e),()=>Xu(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ii=n=>n*1e3,mi=n=>n/1e3,G_=(n,e)=>e?n*(1e3/e):0,W_=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,KM=1e-7,$M=12;function ZM(n,e,t,r,o){let l,u,f=0;do u=e+(t-e)/2,l=W_(u,r,o)-n,l>0?t=u:e=u;while(Math.abs(l)>KM&&++f<$M);return u}function Ka(n,e,t,r){if(n===e&&t===r)return gi;const o=l=>ZM(l,0,1,n,t);return l=>l===0||l===1?l:W_(o(l),e,r)}const X_=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,j_=n=>e=>1-n(1-e),Y_=Ka(.33,1.53,.69,.99),hp=j_(Y_),q_=X_(hp),K_=n=>n>=1?1:(n*=2)<1?.5*hp(n):.5*(2-Math.pow(2,-10*(n-1))),pp=n=>1-Math.sin(Math.acos(n)),$_=j_(pp),Z_=X_(pp),QM=Ka(.42,0,1,1),JM=Ka(0,0,.58,1),Q_=Ka(.42,0,.58,1),eE=n=>Array.isArray(n)&&typeof n[0]!="number",J_=n=>Array.isArray(n)&&typeof n[0]=="number",tE={linear:gi,easeIn:QM,easeInOut:Q_,easeOut:JM,circIn:pp,circInOut:Z_,circOut:$_,backIn:hp,backInOut:q_,backOut:Y_,anticipate:K_},nE=n=>typeof n=="string",w0=n=>{if(J_(n)){fp(n.length===4);const[e,t,r,o]=n;return Ka(e,t,r,o)}else if(nE(n))return tE[n];return n},su=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function iE(n,e){let t=new Set,r=new Set,o=!1,l=!1;const u=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function d(m){u.has(m)&&(h.schedule(m),n()),m(f)}const h={schedule:(m,v=!1,g=!1)=>{const M=g&&o?t:r;return v&&u.add(m),M.add(m),m},cancel:m=>{r.delete(m),u.delete(m)},process:m=>{if(f=m,o){l=!0;return}o=!0;const v=t;t=r,r=v,t.forEach(d),t.clear(),o=!1,l&&(l=!1,h.process(m))}};return h}const rE=40;function ex(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,u=su.reduce((b,P)=>(b[P]=iE(l),b),{}),{setup:f,read:d,resolveKeyframes:h,preUpdate:m,update:v,preRender:g,render:x,postRender:M}=u,w=()=>{const b=ts.useManualTiming,P=b?o.timestamp:performance.now();t=!1,b||(o.delta=r?1e3/60:Math.max(Math.min(P-o.timestamp,rE),1)),o.timestamp=P,o.isProcessing=!0,f.process(o),d.process(o),h.process(o),m.process(o),v.process(o),g.process(o),x.process(o),M.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(w))},y=()=>{t=!0,r=!0,o.isProcessing||n(w)};return{schedule:su.reduce((b,P)=>{const F=u[P];return b[P]=(L,B=!1,T=!1)=>(t||y(),F.schedule(L,B,T)),b},{}),cancel:b=>{for(let P=0;P<su.length;P++)u[su[P]].cancel(b)},state:o,steps:u}}const{schedule:Bt,cancel:ns,state:Tn,steps:Qf}=ex(typeof requestAnimationFrame<"u"?requestAnimationFrame:gi,!0);let Lu;function sE(){Lu=void 0}const Bn={now:()=>(Lu===void 0&&Bn.set(Tn.isProcessing||ts.useManualTiming?Tn.timestamp:performance.now()),Lu),set:n=>{Lu=n,queueMicrotask(sE)}},tx=n=>e=>typeof e=="string"&&e.startsWith(n),nx=tx("--"),oE=tx("var(--"),mp=n=>oE(n)?aE.test(n.split("/*")[0].trim()):!1,aE=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function C0(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Oo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ga={...Oo,transform:n=>Qi(0,1,n)},ou={...Oo,default:1},Ba=n=>Math.round(n*1e5)/1e5,gp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function lE(n){return n==null}const uE=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,vp=(n,e)=>t=>!!(typeof t=="string"&&uE.test(t)&&t.startsWith(n)||e&&!lE(t)&&Object.prototype.hasOwnProperty.call(t,e)),ix=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,l,u,f]=r.match(gp);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},cE=n=>Qi(0,255,n),Jf={...Oo,transform:n=>Math.round(cE(n))},bs={test:vp("rgb","red"),parse:ix("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+Jf.transform(n)+", "+Jf.transform(e)+", "+Jf.transform(t)+", "+Ba(Ga.transform(r))+")"};function fE(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Yd={test:vp("#"),parse:fE,transform:bs.transform},$a=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),$r=$a("deg"),qi=$a("%"),Xe=$a("px"),dE=$a("vh"),hE=$a("vw"),R0={...qi,parse:n=>qi.parse(n)/100,transform:n=>qi.transform(n*100)},wo={test:vp("hsl","hue"),parse:ix("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+qi.transform(Ba(e))+", "+qi.transform(Ba(t))+", "+Ba(Ga.transform(r))+")"},un={test:n=>bs.test(n)||Yd.test(n)||wo.test(n),parse:n=>bs.test(n)?bs.parse(n):wo.test(n)?wo.parse(n):Yd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?bs.transform(n):wo.transform(n),getAnimatableNone:n=>{const e=un.parse(n);return e.alpha=0,un.transform(e)}},pE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function mE(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(gp))==null?void 0:e.length)||0)+(((t=n.match(pE))==null?void 0:t.length)||0)>0}const rx="number",sx="color",gE="var",vE="var(",b0="${}",_E=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Do(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let l=0;const f=e.replace(_E,d=>(un.test(d)?(r.color.push(l),o.push(sx),t.push(un.parse(d))):d.startsWith(vE)?(r.var.push(l),o.push(gE),t.push(d)):(r.number.push(l),o.push(rx),t.push(parseFloat(d))),++l,b0)).split(b0);return{values:t,split:f,indexes:r,types:o}}function xE(n){return Do(n).values}function ox({split:n,types:e}){const t=n.length;return r=>{let o="";for(let l=0;l<t;l++)if(o+=n[l],r[l]!==void 0){const u=e[l];u===rx?o+=Ba(r[l]):u===sx?o+=un.transform(r[l]):o+=r[l]}return o}}function yE(n){return ox(Do(n))}const SE=n=>typeof n=="number"?0:un.test(n)?un.getAnimatableNone(n):n,ME=(n,e)=>typeof n=="number"?e!=null&&e.trim().endsWith("/")?n:0:SE(n);function EE(n){const e=Do(n);return ox(e)(e.values.map((r,o)=>ME(r,e.split[o])))}const Ni={test:mE,parse:xE,createTransformer:yE,getAnimatableNone:EE};function ed(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function TE({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,l=0,u=0;if(!e)o=l=u=t;else{const f=t<.5?t*(1+e):t+e-t*e,d=2*t-f;o=ed(d,f,n+1/3),l=ed(d,f,n),u=ed(d,f,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function ju(n,e){return t=>t>0?e:n}const qt=(n,e,t)=>n+(e-n)*t,td=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},AE=[Yd,bs,wo],wE=n=>AE.find(e=>e.test(n));function P0(n){const e=wE(n);if(!e)return!1;let t=e.parse(n);return e===wo&&(t=TE(t)),t}const D0=(n,e)=>{const t=P0(n),r=P0(e);if(!t||!r)return ju(n,e);const o={...t};return l=>(o.red=td(t.red,r.red,l),o.green=td(t.green,r.green,l),o.blue=td(t.blue,r.blue,l),o.alpha=qt(t.alpha,r.alpha,l),bs.transform(o))},qd=new Set(["none","hidden"]);function CE(n,e){return qd.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function RE(n,e){return t=>qt(n,e,t)}function _p(n){return typeof n=="number"?RE:typeof n=="string"?mp(n)?ju:un.test(n)?D0:DE:Array.isArray(n)?ax:typeof n=="object"?un.test(n)?D0:bE:ju}function ax(n,e){const t=[...n],r=t.length,o=n.map((l,u)=>_p(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)t[u]=o[u](l);return t}}function bE(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=_p(n[o])(n[o],e[o]));return o=>{for(const l in r)t[l]=r[l](o);return t}}function PE(n,e){const t=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const l=e.types[o],u=n.indexes[l][r[l]],f=n.values[u]??0;t[o]=f,r[l]++}return t}const DE=(n,e)=>{const t=Ni.createTransformer(e),r=Do(n),o=Do(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?qd.has(n)&&!o.values.length||qd.has(e)&&!r.values.length?CE(n,e):qa(ax(PE(r,o),o.values),t):ju(n,e)};function lx(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?qt(n,e,t):_p(n)(n,e)}const LE=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>Bt.update(e,t),stop:()=>ns(e),now:()=>Tn.isProcessing?Tn.timestamp:Bn.now()}},ux=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)r+=Math.round(n(l/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Yu=2e4;function xp(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Yu;)e+=t,r=n.next(e);return e>=Yu?1/0:e}function NE(n,e=100,t){const r=t({...n,keyframes:[0,e]}),o=Math.min(xp(r),Yu);return{type:"keyframes",ease:l=>r.next(o*l).value/e,duration:mi(o)}}const nn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Kd(n,e){return n*Math.sqrt(1-e*e)}const IE=12;function UE(n,e,t){let r=t;for(let o=1;o<IE;o++)r=r-n(r)/e(r);return r}const nd=.001;function FE({duration:n=nn.duration,bounce:e=nn.bounce,velocity:t=nn.velocity,mass:r=nn.mass}){let o,l,u=1-e;u=Qi(nn.minDamping,nn.maxDamping,u),n=Qi(nn.minDuration,nn.maxDuration,mi(n)),u<1?(o=h=>{const m=h*u,v=m*n,g=m-t,x=Kd(h,u),M=Math.exp(-v);return nd-g/x*M},l=h=>{const v=h*u*n,g=v*t+t,x=Math.pow(u,2)*Math.pow(h,2)*n,M=Math.exp(-v),w=Kd(Math.pow(h,2),u);return(-o(h)+nd>0?-1:1)*((g-x)*M)/w}):(o=h=>{const m=Math.exp(-h*n),v=(h-t)*n+1;return-nd+m*v},l=h=>{const m=Math.exp(-h*n),v=(t-h)*(n*n);return m*v});const f=5/n,d=UE(o,l,f);if(n=ii(n),isNaN(d))return{stiffness:nn.stiffness,damping:nn.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const OE=["duration","bounce"],BE=["stiffness","damping","mass"];function L0(n,e){return e.some(t=>n[t]!==void 0)}function kE(n){let e={velocity:nn.velocity,stiffness:nn.stiffness,damping:nn.damping,mass:nn.mass,isResolvedFromDuration:!1,...n};if(!L0(n,BE)&&L0(n,OE))if(e.velocity=0,n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,l=2*Qi(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:nn.mass,stiffness:o,damping:l}}else{const t=FE({...n,velocity:0});e={...e,...t,mass:nn.mass},e.isResolvedFromDuration=!0}return e}function qu(n=nn.visualDuration,e=nn.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const l=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],f={done:!1,value:l},{stiffness:d,damping:h,mass:m,duration:v,velocity:g,isResolvedFromDuration:x}=kE({...t,velocity:-mi(t.velocity||0)}),M=g||0,w=h/(2*Math.sqrt(d*m)),y=u-l,S=mi(Math.sqrt(d/m)),R=Math.abs(y)<5;r||(r=R?nn.restSpeed.granular:nn.restSpeed.default),o||(o=R?nn.restDelta.granular:nn.restDelta.default);let b,P,F,L,B,T;if(w<1)F=Kd(S,w),L=(M+w*S*y)/F,b=k=>{const O=Math.exp(-w*S*k);return u-O*(L*Math.sin(F*k)+y*Math.cos(F*k))},B=w*S*L+y*F,T=w*S*y-L*F,P=k=>Math.exp(-w*S*k)*(B*Math.sin(F*k)+T*Math.cos(F*k));else if(w===1){b=O=>u-Math.exp(-S*O)*(y+(M+S*y)*O);const k=M+S*y;P=O=>Math.exp(-S*O)*(S*k*O-M)}else{const k=S*Math.sqrt(w*w-1);b=ce=>{const H=Math.exp(-w*S*ce),Z=Math.min(k*ce,300);return u-H*((M+w*S*y)*Math.sinh(Z)+k*y*Math.cosh(Z))/k};const O=(M+w*S*y)/k,q=w*S*O-y*k,le=w*S*y-O*k;P=ce=>{const H=Math.exp(-w*S*ce),Z=Math.min(k*ce,300);return H*(q*Math.sinh(Z)+le*Math.cosh(Z))}}const N={calculatedDuration:x&&v||null,velocity:k=>ii(P(k)),next:k=>{if(!x&&w<1){const q=Math.exp(-w*S*k),le=Math.sin(F*k),ce=Math.cos(F*k),H=u-q*(L*le+y*ce),Z=ii(q*(B*le+T*ce));return f.done=Math.abs(Z)<=r&&Math.abs(u-H)<=o,f.value=f.done?u:H,f}const O=b(k);if(x)f.done=k>=v;else{const q=ii(P(k));f.done=Math.abs(q)<=r&&Math.abs(u-O)<=o}return f.value=f.done?u:O,f},toString:()=>{const k=Math.min(xp(N),Yu),O=ux(q=>N.next(k*q).value,k,30);return k+"ms "+O},toTransition:()=>{}};return N}qu.applyToOptions=n=>{const e=NE(n,100,qu);return n.ease=e.ease,n.duration=ii(e.duration),n.type="keyframes",n};const VE=5;function cx(n,e,t){const r=Math.max(e-VE,0);return G_(t-n(r),e-r)}function $d({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:f,max:d,restDelta:h=.5,restSpeed:m}){const v=n[0],g={done:!1,value:v},x=T=>f!==void 0&&T<f||d!==void 0&&T>d,M=T=>f===void 0?d:d===void 0||Math.abs(f-T)<Math.abs(d-T)?f:d;let w=t*e;const y=v+w,S=u===void 0?y:u(y);S!==y&&(w=S-v);const R=T=>-w*Math.exp(-T/r),b=T=>S+R(T),P=T=>{const N=R(T),k=b(T);g.done=Math.abs(N)<=h,g.value=g.done?S:k};let F,L;const B=T=>{x(g.value)&&(F=T,L=qu({keyframes:[g.value,M(g.value)],velocity:cx(b,T,g.value),damping:o,stiffness:l,restDelta:h,restSpeed:m}))};return B(0),{calculatedDuration:null,next:T=>{let N=!1;return!L&&F===void 0&&(N=!0,P(T),B(T)),F!==void 0&&T>=F?L.next(T-F):(!N&&P(T),g)}}}function zE(n,e,t){const r=[],o=t||ts.mix||lx,l=n.length-1;for(let u=0;u<l;u++){let f=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||gi:e;f=qa(d,f)}r.push(f)}return r}function HE(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const l=n.length;if(fp(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const f=zE(e,r,o),d=f.length,h=m=>{if(u&&m<n[0])return e[0];let v=0;if(d>1)for(;v<n.length-2&&!(m<n[v+1]);v++);const g=Ha(n[v],n[v+1],m);return f[v](g)};return t?m=>h(Qi(n[0],n[l-1],m)):h}function GE(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Ha(0,e,r);n.push(qt(t,1,o))}}function WE(n){const e=[0];return GE(e,n.length-1),e}function XE(n,e){return n.map(t=>t*e)}function jE(n,e){return n.map(()=>e||Q_).splice(0,n.length-1)}function ka({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=eE(r)?r.map(w0):w0(r),l={done:!1,value:e[0]},u=XE(t&&t.length===e.length?t:WE(e),n),f=HE(u,e,{ease:Array.isArray(o)?o:jE(e,o)});return{calculatedDuration:n,next:d=>(l.value=f(d),l.done=d>=n,l)}}const YE=n=>n!==null;function ac(n,{repeat:e,repeatType:t="loop"},r,o=1){const l=n.filter(YE),f=o<0||e&&t!=="loop"&&e%2===1?0:l.length-1;return!f||r===void 0?l[f]:r}const qE={decay:$d,inertia:$d,tween:ka,keyframes:ka,spring:qu};function fx(n){typeof n.type=="string"&&(n.type=qE[n.type])}class yp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const KE=n=>n/100;class Ku extends yp{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,o;const{motionValue:t}=this.options;t&&t.updatedAt!==Bn.now()&&this.tick(Bn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(r=this.options).onStop)==null||o.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;fx(e);const{type:t=ka,repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=e;let{keyframes:f}=e;const d=t||ka;d!==ka&&typeof f[0]!="number"&&(this.mixKeyframes=qa(KE,lx(f[0],f[1])),f=[0,100]);const h=d({...e,keyframes:f});l==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...f].reverse(),velocity:-u})),h.calculatedDuration===null&&(h.calculatedDuration=xp(h));const{calculatedDuration:m}=h;this.calculatedDuration=m,this.resolvedDuration=m+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:r,totalDuration:o,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:f,calculatedDuration:d}=this;if(this.startTime===null)return r.next(0);const{delay:h=0,keyframes:m,repeat:v,repeatType:g,repeatDelay:x,type:M,onUpdate:w,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const S=this.currentTime-h*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?S<0:S>o;this.currentTime=Math.max(S,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let b=this.currentTime,P=r;if(v){const T=Math.min(this.currentTime,o)/f;let N=Math.floor(T),k=T%1;!k&&T>=1&&(k=1),k===1&&N--,N=Math.min(N,v+1),!!(N%2)&&(g==="reverse"?(k=1-k,x&&(k-=x/f)):g==="mirror"&&(P=u)),b=Qi(0,1,k)*f}let F;R?(this.delayState.value=m[0],F=this.delayState):F=P.next(b),l&&!R&&(F.value=l(F.value));let{done:L}=F;!R&&d!==null&&(L=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const B=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&L);return B&&M!==$d&&(F.value=ac(m,this.options,y,this.speed)),w&&w(F.value),B&&this.finish(),F}then(e,t){return this.finished.then(e,t)}get duration(){return mi(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+mi(e)}get time(){return mi(this.currentTime)}set time(e){e=ii(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const t=this.generator.next(e).value;return cx(r=>this.generator.next(r).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Bn.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=mi(this.currentTime))}play(){var o,l;if(this.isStopped)return;const{driver:e=LE,startTime:t}=this.options;this.driver||(this.driver=e(u=>this.tick(u))),(l=(o=this.options).onPlay)==null||l.call(o);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=t??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Bn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}}function $E(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Ps=n=>n*180/Math.PI,Zd=n=>{const e=Ps(Math.atan2(n[1],n[0]));return Qd(e)},ZE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Zd,rotateZ:Zd,skewX:n=>Ps(Math.atan(n[1])),skewY:n=>Ps(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Qd=n=>(n=n%360,n<0&&(n+=360),n),N0=Zd,I0=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),U0=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),QE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:I0,scaleY:U0,scale:n=>(I0(n)+U0(n))/2,rotateX:n=>Qd(Ps(Math.atan2(n[6],n[5]))),rotateY:n=>Qd(Ps(Math.atan2(-n[2],n[0]))),rotateZ:N0,rotate:N0,skewX:n=>Ps(Math.atan(n[4])),skewY:n=>Ps(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Jd(n){return n.includes("scale")?1:0}function eh(n,e){if(!n||n==="none")return Jd(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(t)r=QE,o=t;else{const f=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=ZE,o=f}if(!o)return Jd(e);const l=r[e],u=o[1].split(",").map(eT);return typeof l=="function"?l(u):u[l]}const JE=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return eh(t,e)};function eT(n){return parseFloat(n.trim())}const Bo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ko=new Set(Bo),F0=n=>n===Oo||n===Xe,tT=new Set(["x","y","z"]),nT=Bo.filter(n=>!tT.has(n));function iT(n){const e=[];return nT.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Jr={width:({x:n},{paddingLeft:e="0",paddingRight:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},height:({y:n},{paddingTop:e="0",paddingBottom:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>eh(e,"x"),y:(n,{transform:e})=>eh(e,"y")};Jr.translateX=Jr.x;Jr.translateY=Jr.y;const Ns=new Set;let th=!1,nh=!1,ih=!1;function dx(){if(nh){const n=Array.from(Ns).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=iT(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([l,u])=>{var f;(f=r.getValue(l))==null||f.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}nh=!1,th=!1,Ns.forEach(n=>n.complete(ih)),Ns.clear()}function hx(){Ns.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(nh=!0)})}function rT(){ih=!0,hx(),dx(),ih=!1}class Sp{constructor(e,t,r,o,l,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(Ns.add(this),th||(th=!0,Bt.read(hx),Bt.resolveKeyframes(dx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;if(e[0]===null){const l=o==null?void 0:o.get(),u=e[e.length-1];if(l!==void 0)e[0]=l;else if(r&&t){const f=r.readValue(t,u);f!=null&&(e[0]=f)}e[0]===void 0&&(e[0]=u),o&&l===void 0&&o.set(e[0])}$E(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Ns.delete(this)}cancel(){this.state==="scheduled"&&(Ns.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const sT=n=>n.startsWith("--");function px(n,e,t){sT(e)?n.style.setProperty(e,t):n.style[e]=t}const oT={};function mx(n,e){const t=H_(n);return()=>oT[e]??t()}const aT=mx(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),gx=mx(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ua=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,O0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ua([0,.65,.55,1]),circOut:Ua([.55,0,1,.45]),backIn:Ua([.31,.01,.66,-.59]),backOut:Ua([.33,1.53,.69,.99])};function vx(n,e){if(n)return typeof n=="function"?gx()?ux(n,e):"ease-out":J_(n)?Ua(n):Array.isArray(n)?n.map(t=>vx(t,e)||O0.easeOut):O0[n]}function lT(n,e,t,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:f="easeOut",times:d}={},h=void 0){const m={[e]:t};d&&(m.offset=d);const v=vx(f,o);Array.isArray(v)&&(m.easing=v);const g={delay:r,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return h&&(g.pseudoElement=h),n.animate(m,g)}function _x(n){return typeof n=="function"&&"applyToOptions"in n}function uT({type:n,...e}){return _x(n)&&gx()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class xx extends yp{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:r,keyframes:o,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:f,onComplete:d}=e;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=e,fp(typeof e.type!="string");const h=uT(e);this.animation=lT(t,r,o,h,l),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const m=ac(o,this.options,f,this.speed);this.updateMotionValue&&this.updateMotionValue(m),px(t,r,m),this.animation.cancel()}d==null||d(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t;(t=(e=this.animation).finish)==null||t.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,r,o;const e=(t=this.options)==null?void 0:t.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((o=(r=this.animation).commitStyles)==null||o.call(r))}get duration(){var t,r;const e=((r=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:r.call(t).duration)||0;return mi(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+mi(e)}get time(){return mi(Number(this.animation.currentTime)||0)}set time(e){const t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ii(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:r,observe:o}){var l;return this.allowFlatten&&((l=this.animation.effect)==null||l.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&aT()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),r&&(this.animation.rangeEnd=r),gi):o(this)}}const yx={anticipate:K_,backInOut:q_,circInOut:Z_};function cT(n){return n in yx}function fT(n){typeof n.ease=="string"&&cT(n.ease)&&(n.ease=yx[n.ease])}const id=10;class dT extends xx{constructor(e){fT(e),fx(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:r,onComplete:o,element:l,...u}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const f=new Ku({...u,autoplay:!1}),d=Math.max(id,Bn.now()-this.startTime),h=Qi(0,id,d-id),m=f.sample(d).value,{name:v}=this.options;l&&v&&px(l,v,m),t.setWithVelocity(f.sample(Math.max(0,d-h)).value,m,h),f.stop()}}const B0=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Ni.test(n)||n==="0")&&!n.startsWith("url("));function hT(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function pT(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],u=B0(o,e),f=B0(l,e);return!u||!f?!1:hT(n)||(t==="spring"||_x(t))&&r}function rh(n){n.duration=0,n.type="keyframes"}const Sx=new Set(["opacity","clipPath","filter","transform"]),mT=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function gT(n){for(let e=0;e<n.length;e++)if(typeof n[e]=="string"&&mT.test(n[e]))return!0;return!1}const vT=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),_T=H_(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function xT(n){var v;const{motionValue:e,name:t,repeatDelay:r,repeatType:o,damping:l,type:u,keyframes:f}=n;if(!(((v=e==null?void 0:e.owner)==null?void 0:v.current)instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:m}=e.owner.getProps();return _T()&&t&&(Sx.has(t)||vT.has(t)&&gT(f))&&(t!=="transform"||!m)&&!h&&!r&&o!=="mirror"&&l!==0&&u!=="inertia"}const yT=40;class ST extends yp{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",keyframes:f,name:d,motionValue:h,element:m,...v}){var M;super(),this.stop=()=>{var w,y;this._animation&&(this._animation.stop(),(w=this.stopTimeline)==null||w.call(this)),(y=this.keyframeResolver)==null||y.cancel()},this.createdAt=Bn.now();const g={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:l,repeatType:u,name:d,motionValue:h,element:m,...v},x=(m==null?void 0:m.KeyframeResolver)||Sp;this.keyframeResolver=new x(f,(w,y,S)=>this.onKeyframesResolved(w,y,g,!S),d,h,m),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(e,t,r,o){var S,R;this.keyframeResolver=void 0;const{name:l,type:u,velocity:f,delay:d,isHandoff:h,onUpdate:m}=r;this.resolvedAt=Bn.now();let v=!0;pT(e,l,u,f)||(v=!1,(ts.instantAnimations||!d)&&(m==null||m(ac(e,r,t))),e[0]=e[e.length-1],rh(r),r.repeat=0);const x={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>yT?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...r,keyframes:e},M=v&&!h&&xT(x),w=(R=(S=x.motionValue)==null?void 0:S.owner)==null?void 0:R.current;let y;if(M)try{y=new dT({...x,element:w})}catch{y=new Ku(x)}else y=new Ku(x);y.finished.then(()=>{this.notifyFinished()}).catch(gi),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),rT()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function Mx(n,e,t,r=0,o=1){const l=Array.from(n).sort((h,m)=>h.sortNodePosition(m)).indexOf(e),u=n.size,f=(u-1)*r;return typeof t=="function"?t(l,u):o===1?l*r:f-l*r}const MT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function ET(n){const e=MT.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function Ex(n,e,t=1){const[r,o]=ET(n);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return k_(u)?parseFloat(u):u}return mp(o)?Ex(o,e,t+1):o}const TT={type:"spring",stiffness:500,damping:25,restSpeed:10},AT=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),wT={type:"keyframes",duration:.8},CT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},RT=(n,{keyframes:e})=>e.length>2?wT:ko.has(n)?n.startsWith("scale")?AT(e[1]):TT:CT;function Tx(n,e){if(n!=null&&n.inherit&&e){const{inherit:t,...r}=n;return{...e,...r}}return n}function Mp(n,e){const t=(n==null?void 0:n[e])??(n==null?void 0:n.default)??n;return t!==n?Tx(t,n):t}const bT=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function PT(n){for(const e in n)if(!bT.has(e))return!0;return!1}const Ep=(n,e,t,r={},o,l)=>u=>{const f=Mp(r,n)||{},d=f.delay||r.delay||0;let{elapsed:h=0}=r;h=h-ii(d);const m={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...f,delay:-h,onUpdate:g=>{e.set(g),f.onUpdate&&f.onUpdate(g)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:n,motionValue:e,element:l?void 0:o};PT(f)||Object.assign(m,RT(n,m)),m.duration&&(m.duration=ii(m.duration)),m.repeatDelay&&(m.repeatDelay=ii(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let v=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(rh(m),m.delay===0&&(v=!0)),(ts.instantAnimations||ts.skipAnimations||o!=null&&o.shouldSkipAnimations||f.skipAnimations)&&(v=!0,rh(m),m.delay=0),m.allowFlatten=!f.type&&!f.ease,v&&!l&&e.get()!==void 0){const g=ac(m.keyframes,f);if(g!==void 0){Bt.update(()=>{m.onUpdate(g),m.onComplete()});return}}return f.isSync?new Ku(m):new ST(m)};function k0(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function Tp(n,e,t,r){if(typeof e=="function"){const[o,l]=k0(r);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=k0(r);e=e(t!==void 0?t:n.custom,o,l)}return e}function Is(n,e,t){const r=n.getProps();return Tp(r,e,t!==void 0?t:r.custom,n)}const Ax=new Set(["width","height","top","left","right","bottom",...Bo]),V0=30,DT=n=>!isNaN(parseFloat(n));class LT{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var l;const o=Bn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((l=this.events.change)==null||l.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Bn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=DT(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new dp);const r=this.events[e].add(t);return e==="change"?()=>{r(),Bt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Bn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>V0)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,V0);return G_(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Lo(n,e){return new LT(n,e)}const sh=n=>Array.isArray(n);function NT(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Lo(t))}function IT(n){return sh(n)?n[n.length-1]||0:n}function UT(n,e){const t=Is(n,e);let{transitionEnd:r={},transition:o={},...l}=t||{};l={...l,...r};for(const u in l){const f=IT(l[u]);NT(n,u,f)}}const An=n=>!!(n&&n.getVelocity);function FT(n){return!!(An(n)&&n.add)}function oh(n,e){const t=n.getValue("willChange");if(FT(t))return t.add(e);if(!t&&ts.WillChange){const r=new ts.WillChange("auto");n.addValue("willChange",r),r.add(e)}}function Ap(n){return n.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const OT="framerAppearId",wx="data-"+Ap(OT);function Cx(n){return n.props[wx]}function BT({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function Rx(n,e,{delay:t=0,transitionOverride:r,type:o}={}){let{transition:l,transitionEnd:u,...f}=e;const d=n.getDefaultTransition();l=l?Tx(l,d):d;const h=l==null?void 0:l.reduceMotion,m=l==null?void 0:l.skipAnimations;r&&(l=r);const v=[],g=o&&n.animationState&&n.animationState.getState()[o];for(const x in f){const M=n.getValue(x,n.latestValues[x]??null),w=f[x];if(w===void 0||g&&BT(g,x))continue;const y={delay:t,...Mp(l||{},x)};m&&(y.skipAnimations=!0);const S=M.get();if(S!==void 0&&!M.isAnimating()&&!Array.isArray(w)&&w===S&&!y.velocity){Bt.update(()=>M.set(w));continue}let R=!1;if(window.MotionHandoffAnimation){const F=Cx(n);if(F){const L=window.MotionHandoffAnimation(F,x,Bt);L!==null&&(y.startTime=L,R=!0)}}oh(n,x);const b=h??n.shouldReduceMotion;M.start(Ep(x,M,w,b&&Ax.has(x)?{type:!1}:y,n,R));const P=M.animation;P&&v.push(P)}if(u){const x=()=>Bt.update(()=>{u&&UT(n,u)});v.length?Promise.all(v).then(x):x()}return v}function ah(n,e,t={}){var d;const r=Is(n,e,t.type==="exit"?(d=n.presenceContext)==null?void 0:d.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(o=t.transitionOverride);const l=r?()=>Promise.all(Rx(n,r,t)):()=>Promise.resolve(),u=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:v,staggerDirection:g}=o;return kT(n,e,h,m,v,g,t)}:()=>Promise.resolve(),{when:f}=o;if(f){const[h,m]=f==="beforeChildren"?[l,u]:[u,l];return h().then(()=>m())}else return Promise.all([l(),u(t.delay)])}function kT(n,e,t=0,r=0,o=0,l=1,u){const f=[];for(const d of n.variantChildren)d.notify("AnimationStart",e),f.push(ah(d,e,{...u,delay:t+(typeof r=="function"?0:r)+Mx(n.variantChildren,d,r,o,l)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(f)}function VT(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>ah(n,l,t));r=Promise.all(o)}else if(typeof e=="string")r=ah(n,e,t);else{const o=typeof e=="function"?Is(n,e,t.custom):e;r=Promise.all(Rx(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const zT={test:n=>n==="auto",parse:n=>n},bx=n=>e=>e.test(n),Px=[Oo,Xe,qi,$r,hE,dE,zT],z0=n=>Px.find(bx(n));function HT(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||z_(n):!0}const GT=new Set(["brightness","contrast","saturate","opacity"]);function WT(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(gp)||[];if(!r)return n;const o=t.replace(r,"");let l=GT.has(e)?1:0;return r!==t&&(l*=100),e+"("+l+o+")"}const XT=/\b([a-z-]*)\(.*?\)/gu,lh={...Ni,getAnimatableNone:n=>{const e=n.match(XT);return e?e.map(WT).join(" "):n}},uh={...Ni,getAnimatableNone:n=>{const e=Ni.parse(n);return Ni.createTransformer(n)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},H0={...Oo,transform:Math.round},jT={rotate:$r,rotateX:$r,rotateY:$r,rotateZ:$r,scale:ou,scaleX:ou,scaleY:ou,scaleZ:ou,skew:$r,skewX:$r,skewY:$r,distance:Xe,translateX:Xe,translateY:Xe,translateZ:Xe,x:Xe,y:Xe,z:Xe,perspective:Xe,transformPerspective:Xe,opacity:Ga,originX:R0,originY:R0,originZ:Xe},wp={borderWidth:Xe,borderTopWidth:Xe,borderRightWidth:Xe,borderBottomWidth:Xe,borderLeftWidth:Xe,borderRadius:Xe,borderTopLeftRadius:Xe,borderTopRightRadius:Xe,borderBottomRightRadius:Xe,borderBottomLeftRadius:Xe,width:Xe,maxWidth:Xe,height:Xe,maxHeight:Xe,top:Xe,right:Xe,bottom:Xe,left:Xe,inset:Xe,insetBlock:Xe,insetBlockStart:Xe,insetBlockEnd:Xe,insetInline:Xe,insetInlineStart:Xe,insetInlineEnd:Xe,padding:Xe,paddingTop:Xe,paddingRight:Xe,paddingBottom:Xe,paddingLeft:Xe,paddingBlock:Xe,paddingBlockStart:Xe,paddingBlockEnd:Xe,paddingInline:Xe,paddingInlineStart:Xe,paddingInlineEnd:Xe,margin:Xe,marginTop:Xe,marginRight:Xe,marginBottom:Xe,marginLeft:Xe,marginBlock:Xe,marginBlockStart:Xe,marginBlockEnd:Xe,marginInline:Xe,marginInlineStart:Xe,marginInlineEnd:Xe,fontSize:Xe,backgroundPositionX:Xe,backgroundPositionY:Xe,...jT,zIndex:H0,fillOpacity:Ga,strokeOpacity:Ga,numOctaves:H0},YT={...wp,color:un,backgroundColor:un,outlineColor:un,fill:un,stroke:un,borderColor:un,borderTopColor:un,borderRightColor:un,borderBottomColor:un,borderLeftColor:un,filter:lh,WebkitFilter:lh,mask:uh,WebkitMask:uh},Dx=n=>YT[n],qT=new Set([lh,uh]);function Lx(n,e){let t=Dx(n);return qT.has(t)||(t=Ni),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const KT=new Set(["auto","none","0"]);function $T(n,e,t){let r=0,o;for(;r<n.length&&!o;){const l=n[r];typeof l=="string"&&!KT.has(l)&&Do(l).values.length&&(o=n[r]),r++}if(o&&t)for(const l of e)n[l]=Lx(t,o)}class ZT extends Sp{constructor(e,t,r,o,l){super(e,t,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let m=0;m<e.length;m++){let v=e[m];if(typeof v=="string"&&(v=v.trim(),mp(v))){const g=Ex(v,t.current);g!==void 0&&(e[m]=g),m===e.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!Ax.has(r)||e.length!==2)return;const[o,l]=e,u=z0(o),f=z0(l),d=C0(o),h=C0(l);if(d!==h&&Jr[r]){this.needsMeasurement=!0;return}if(u!==f)if(F0(u)&&F0(f))for(let m=0;m<e.length;m++){const v=e[m];typeof v=="string"&&(e[m]=parseFloat(v))}else Jr[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||HT(e[o]))&&r.push(o);r.length&&$T(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Jr[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var f;const{element:e,name:t,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const l=r.length-1,u=r[l];r[l]=Jr[t](e.measureViewportBox(),window.getComputedStyle(e.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(f=this.removedTransforms)!=null&&f.length&&this.removedTransforms.forEach(([d,h])=>{e.getValue(d).set(h)}),this.resolveNoneKeyframes()}}function Cp(n,e,t){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){const o=document.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n).filter(r=>r!=null)}const Nx=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function QT(n){return V_(n)&&"offsetHeight"in n&&!("ownerSVGElement"in n)}const{schedule:Rp}=ex(queueMicrotask,!1),bi={x:!1,y:!1};function Ix(){return bi.x||bi.y}function JT(n){return n==="x"||n==="y"?bi[n]?null:(bi[n]=!0,()=>{bi[n]=!1}):bi.x||bi.y?null:(bi.x=bi.y=!0,()=>{bi.x=bi.y=!1})}function Ux(n,e){const t=Cp(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function e1(n){return!(n.pointerType==="touch"||Ix())}function t1(n,e,t={}){const[r,o,l]=Ux(n,t);return r.forEach(u=>{let f=!1,d=!1,h;const m=()=>{u.removeEventListener("pointerleave",M)},v=y=>{h&&(h(y),h=void 0),m()},g=y=>{f=!1,window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",g),d&&(d=!1,v(y))},x=()=>{f=!0,window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",g,o)},M=y=>{if(y.pointerType!=="touch"){if(f){d=!0;return}v(y)}},w=y=>{if(!e1(y))return;d=!1;const S=e(u,y);typeof S=="function"&&(h=S,u.addEventListener("pointerleave",M,o))};u.addEventListener("pointerenter",w,o),u.addEventListener("pointerdown",x,o)}),l}const Fx=(n,e)=>e?n===e?!0:Fx(n,e.parentElement):!1,bp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,n1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function i1(n){return n1.has(n.tagName)||n.isContentEditable===!0}const r1=new Set(["INPUT","SELECT","TEXTAREA"]);function s1(n){return r1.has(n.tagName)||n.isContentEditable===!0}const Nu=new WeakSet;function G0(n){return e=>{e.key==="Enter"&&n(e)}}function rd(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const o1=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=G0(()=>{if(Nu.has(t))return;rd(t,"down");const o=G0(()=>{rd(t,"up")}),l=()=>rd(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function W0(n){return bp(n)&&!Ix()}const X0=new WeakSet;function a1(n,e,t={}){const[r,o,l]=Ux(n,t),u=f=>{const d=f.currentTarget;if(!W0(f)||X0.has(f))return;Nu.add(d),t.stopPropagation&&X0.add(f);const h=e(d,f),m=(x,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",g),Nu.has(d)&&Nu.delete(d),W0(x)&&typeof h=="function"&&h(x,{success:M})},v=x=>{m(x,d===window||d===document||t.useGlobalTarget||Fx(d,x.target))},g=x=>{m(x,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",g,o)};return r.forEach(f=>{(t.useGlobalTarget?window:f).addEventListener("pointerdown",u,o),QT(f)&&(f.addEventListener("focus",h=>o1(h,o)),!i1(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),l}function Pp(n){return V_(n)&&"ownerSVGElement"in n}const Iu=new WeakMap;let Zr;const Ox=(n,e,t)=>(r,o)=>o&&o[0]?o[0][n+"Size"]:Pp(r)&&"getBBox"in r?r.getBBox()[e]:r[t],l1=Ox("inline","width","offsetWidth"),u1=Ox("block","height","offsetHeight");function c1({target:n,borderBoxSize:e}){var t;(t=Iu.get(n))==null||t.forEach(r=>{r(n,{get width(){return l1(n,e)},get height(){return u1(n,e)}})})}function f1(n){n.forEach(c1)}function d1(){typeof ResizeObserver>"u"||(Zr=new ResizeObserver(f1))}function h1(n,e){Zr||d1();const t=Cp(n);return t.forEach(r=>{let o=Iu.get(r);o||(o=new Set,Iu.set(r,o)),o.add(e),Zr==null||Zr.observe(r)}),()=>{t.forEach(r=>{const o=Iu.get(r);o==null||o.delete(e),o!=null&&o.size||Zr==null||Zr.unobserve(r)})}}const Uu=new Set;let Co;function p1(){Co=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};Uu.forEach(e=>e(n))},window.addEventListener("resize",Co)}function m1(n){return Uu.add(n),Co||p1(),()=>{Uu.delete(n),!Uu.size&&typeof Co=="function"&&(window.removeEventListener("resize",Co),Co=void 0)}}function j0(n,e){return typeof n=="function"?m1(n):h1(n,e)}function g1(n){return Pp(n)&&n.tagName==="svg"}const v1=[...Px,un,Ni],_1=n=>v1.find(bx(n)),Y0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ro=()=>({x:Y0(),y:Y0()}),q0=()=>({min:0,max:0}),dn=()=>({x:q0(),y:q0()}),x1=new WeakMap;function lc(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Wa(n){return typeof n=="string"||Array.isArray(n)}const Dp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Lp=["initial",...Dp];function uc(n){return lc(n.animate)||Lp.some(e=>Wa(n[e]))}function Bx(n){return!!(uc(n)||n.variants)}function y1(n,e,t){for(const r in e){const o=e[r],l=t[r];if(An(o))n.addValue(r,o);else if(An(l))n.addValue(r,Lo(o,{owner:n}));else if(l!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,Lo(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const ch={current:null},kx={current:!1},S1=typeof window<"u";function M1(){if(kx.current=!0,!!S1)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>ch.current=n.matches;n.addEventListener("change",e),e()}else ch.current=!1}const K0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let $u={};function Vx(n){$u=n}function E1(){return $u}class T1{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,skipAnimations:l,blockInitialAnimation:u,visualState:f},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Sp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=Bn.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,Bt.render(this.render,!1,!0))};const{latestValues:h,renderState:m}=f;this.latestValues=h,this.baseTarget={...h},this.initialValues=t.initial?{...h}:{},this.renderState=m,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=l,this.options=d,this.blockInitialAnimation=!!u,this.isControllingVariants=uc(t),this.isVariantNode=Bx(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...g}=this.scrapeMotionValuesFromProps(t,{},this);for(const x in g){const M=g[x];h[x]!==void 0&&An(M)&&M.set(h[x])}}mount(e){var t,r;if(this.hasBeenMounted)for(const o in this.initialValues)(t=this.values.get(o))==null||t.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=e,x1.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,l)=>this.bindToMotionValue(l,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(kx.current||M1(),this.shouldReduceMotion=ch.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),ns(this.notifyUpdate),ns(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const r=this.features[t];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Sx.has(e)&&this.current instanceof HTMLElement){const{factory:u,keyframes:f,times:d,ease:h,duration:m}=t.accelerate,v=new xx({element:this.current,name:e,keyframes:f,times:d,ease:h,duration:ii(m)}),g=u(v);this.valueSubscriptions.set(e,()=>{g(),v.cancel()});return}const r=ko.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&Bt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;typeof window<"u"&&window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l&&l()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in $u){const t=$u[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):dn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<K0.length;r++){const o=K0[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=y1(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Lo(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(k_(r)||z_(r))?r=parseFloat(r):!_1(r)&&Ni.test(t)&&(r=Lx(e,t)),this.setBaseTarget(e,An(r)?r.get():r)),An(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var l;const{initial:t}=this.props;let r;if(typeof t=="string"||typeof t=="object"){const u=Tp(this.props,t,(l=this.presenceContext)==null?void 0:l.custom);u&&(r=u[e])}if(t&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!An(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new dp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Rp.render(this.render)}}class zx extends T1{constructor(){super(...arguments),this.KeyframeResolver=ZT}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const r=e.style;return r?r[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;An(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class rs{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Hx({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function A1({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function w1(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function sd(n){return n===void 0||n===1}function fh({scale:n,scaleX:e,scaleY:t}){return!sd(n)||!sd(e)||!sd(t)}function As(n){return fh(n)||Gx(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Gx(n){return $0(n.x)||$0(n.y)}function $0(n){return n&&n!=="0%"}function Zu(n,e,t){const r=n-t,o=e*r;return t+o}function Z0(n,e,t,r,o){return o!==void 0&&(n=Zu(n,o,r)),Zu(n,t,r)+e}function dh(n,e=0,t=1,r,o){n.min=Z0(n.min,e,t,r,o),n.max=Z0(n.max,e,t,r,o)}function Wx(n,{x:e,y:t}){dh(n.x,e.translate,e.scale,e.originPoint),dh(n.y,t.translate,t.scale,t.originPoint)}const Q0=.999999999999,J0=1.0000000000001;function C1(n,e,t,r=!1){var f;const o=t.length;if(!o)return;e.x=e.y=1;let l,u;for(let d=0;d<o;d++){l=t[d],u=l.projectionDelta;const{visualElement:h}=l.options;h&&h.props.style&&h.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&(Wi(n.x,-l.scroll.offset.x),Wi(n.y,-l.scroll.offset.y)),u&&(e.x*=u.x.scale,e.y*=u.y.scale,Wx(n,u)),r&&As(l.latestValues)&&Fu(n,l.latestValues,(f=l.layout)==null?void 0:f.layoutBox))}e.x<J0&&e.x>Q0&&(e.x=1),e.y<J0&&e.y>Q0&&(e.y=1)}function Wi(n,e){n.min+=e,n.max+=e}function ev(n,e,t,r,o=.5){const l=qt(n.min,n.max,o);dh(n,e,t,l,r)}function tv(n,e){return typeof n=="string"?parseFloat(n)/100*(e.max-e.min):n}function Fu(n,e,t){const r=t??n;ev(n.x,tv(e.x,r.x),e.scaleX,e.scale,e.originX),ev(n.y,tv(e.y,r.y),e.scaleY,e.scale,e.originY)}function Xx(n,e){return Hx(w1(n.getBoundingClientRect(),e))}function R1(n,e,t){const r=Xx(n,t),{scroll:o}=e;return o&&(Wi(r.x,o.offset.x),Wi(r.y,o.offset.y)),r}const b1={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},P1=Bo.length;function D1(n,e,t){let r="",o=!0;for(let l=0;l<P1;l++){const u=Bo[l],f=n[u];if(f===void 0)continue;let d=!0;if(typeof f=="number")d=f===(u.startsWith("scale")?1:0);else{const h=parseFloat(f);d=u.startsWith("scale")?h===1:h===0}if(!d||t){const h=Nx(f,wp[u]);if(!d){o=!1;const m=b1[u]||u;r+=`${m}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function Np(n,e,t){const{style:r,vars:o,transformOrigin:l}=n;let u=!1,f=!1;for(const d in e){const h=e[d];if(ko.has(d)){u=!0;continue}else if(nx(d)){o[d]=h;continue}else{const m=Nx(h,wp[d]);d.startsWith("origin")?(f=!0,l[d]=m):r[d]=m}}if(e.transform||(u||t?r.transform=D1(e,n.transform,t):r.transform&&(r.transform="none")),f){const{originX:d="50%",originY:h="50%",originZ:m=0}=l;r.transformOrigin=`${d} ${h} ${m}`}}function jx(n,{style:e,vars:t},r,o){const l=n.style;let u;for(u in e)l[u]=e[u];o==null||o.applyProjectionStyles(l,r);for(u in t)l.setProperty(u,t[u])}function nv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Aa={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(Xe.test(n))n=parseFloat(n);else return n;const t=nv(n,e.target.x),r=nv(n,e.target.y);return`${t}% ${r}%`}},L1={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Ni.parse(n);if(o.length>5)return r;const l=Ni.createTransformer(n),u=typeof o[0]!="number"?1:0,f=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=f,o[1+u]/=d;const h=qt(f,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}},hh={borderRadius:{...Aa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Aa,borderTopRightRadius:Aa,borderBottomLeftRadius:Aa,borderBottomRightRadius:Aa,boxShadow:L1};function Yx(n,{layout:e,layoutId:t}){return ko.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!hh[n]||n==="opacity")}function Ip(n,e,t){var u;const r=n.style,o=e==null?void 0:e.style,l={};if(!r)return l;for(const f in r)(An(r[f])||o&&An(o[f])||Yx(f,n)||((u=t==null?void 0:t.getValue(f))==null?void 0:u.liveStyle)!==void 0)&&(l[f]=r[f]);return l}function N1(n){return window.getComputedStyle(n)}class I1 extends zx{constructor(){super(...arguments),this.type="html",this.renderInstance=jx}readValueFromInstance(e,t){var r;if(ko.has(t))return(r=this.projection)!=null&&r.isProjecting?Jd(t):JE(e,t);{const o=N1(e),l=(nx(t)?o.getPropertyValue(t):o[t])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Xx(e,t)}build(e,t,r){Np(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return Ip(e,t,r)}}const U1={offset:"stroke-dashoffset",array:"stroke-dasharray"},F1={offset:"strokeDashoffset",array:"strokeDasharray"};function O1(n,e,t=1,r=0,o=!0){n.pathLength=1;const l=o?U1:F1;n[l.offset]=`${-r}`,n[l.array]=`${e} ${t}`}const B1=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function qx(n,{attrX:e,attrY:t,attrScale:r,pathLength:o,pathSpacing:l=1,pathOffset:u=0,...f},d,h,m){if(Np(n,f,h),d){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:g}=n;v.transform&&(g.transform=v.transform,delete v.transform),(g.transform||v.transformOrigin)&&(g.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),g.transform&&(g.transformBox=(m==null?void 0:m.transformBox)??"fill-box",delete v.transformBox);for(const x of B1)v[x]!==void 0&&(g[x]=v[x],delete v[x]);e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),o!==void 0&&O1(v,o,l,u,!1)}const Kx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),$x=n=>typeof n=="string"&&n.toLowerCase()==="svg";function k1(n,e,t,r){jx(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(Kx.has(o)?o:Ap(o),e.attrs[o])}function Zx(n,e,t){const r=Ip(n,e,t);for(const o in n)if(An(n[o])||An(e[o])){const l=Bo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=n[o]}return r}class V1 extends zx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=dn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(ko.has(t)){const r=Dx(t);return r&&r.default||0}return t=Kx.has(t)?t:Ap(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return Zx(e,t,r)}build(e,t,r){qx(e,t,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,t,r,o){k1(e,t,r,o)}mount(e){this.isSVGTag=$x(e.tagName),super.mount(e)}}const z1=Lp.length;function Qx(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?Qx(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<z1;t++){const r=Lp[t],o=n.props[r];(Wa(o)||o===!1)&&(e[r]=o)}return e}function Jx(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}const H1=[...Dp].reverse(),G1=Dp.length;function W1(n){return e=>Promise.all(e.map(({animation:t,options:r})=>VT(n,t,r)))}function X1(n){let e=W1(n),t=iv(),r=!0,o=!1;const l=h=>(m,v)=>{var x;const g=Is(n,v,h==="exit"?(x=n.presenceContext)==null?void 0:x.custom:void 0);if(g){const{transition:M,transitionEnd:w,...y}=g;m={...m,...y,...w}}return m};function u(h){e=h(n)}function f(h){const{props:m}=n,v=Qx(n.parent)||{},g=[],x=new Set;let M={},w=1/0;for(let S=0;S<G1;S++){const R=H1[S],b=t[R],P=m[R]!==void 0?m[R]:v[R],F=Wa(P),L=R===h?b.isActive:null;L===!1&&(w=S);let B=P===v[R]&&P!==m[R]&&F;if(B&&(r||o)&&n.manuallyAnimateOnMount&&(B=!1),b.protectedKeys={...M},!b.isActive&&L===null||!P&&!b.prevProp||lc(P)||typeof P=="boolean")continue;if(R==="exit"&&b.isActive&&L!==!0){b.prevResolvedValues&&(M={...M,...b.prevResolvedValues});continue}const T=j1(b.prevProp,P);let N=T||R===h&&b.isActive&&!B&&F||S>w&&F,k=!1;const O=Array.isArray(P)?P:[P];let q=O.reduce(l(R),{});L===!1&&(q={});const{prevResolvedValues:le={}}=b,ce={...le,...q},H=X=>{N=!0,x.has(X)&&(k=!0,x.delete(X)),b.needsAnimating[X]=!0;const ne=n.getValue(X);ne&&(ne.liveStyle=!1)};for(const X in ce){const ne=q[X],re=le[X];if(M.hasOwnProperty(X))continue;let U=!1;sh(ne)&&sh(re)?U=!Jx(ne,re)||T:U=ne!==re,U?ne!=null?H(X):x.add(X):ne!==void 0&&x.has(X)?H(X):b.protectedKeys[X]=!0}b.prevProp=P,b.prevResolvedValues=q,b.isActive&&(M={...M,...q}),(r||o)&&n.blockInitialAnimation&&(N=!1);const Z=B&&T;N&&(!Z||k)&&g.push(...O.map(X=>{const ne={type:R};if(typeof X=="string"&&(r||o)&&!Z&&n.manuallyAnimateOnMount&&n.parent){const{parent:re}=n,U=Is(re,X);if(re.enteringChildren&&U){const{delayChildren:Q}=U.transition||{};ne.delay=Mx(re.enteringChildren,n,Q)}}return{animation:X,options:ne}}))}if(x.size){const S={};if(typeof m.initial!="boolean"){const R=Is(n,Array.isArray(m.initial)?m.initial[0]:m.initial);R&&R.transition&&(S.transition=R.transition)}x.forEach(R=>{const b=n.getBaseTarget(R),P=n.getValue(R);P&&(P.liveStyle=!0),S[R]=b??null}),g.push({animation:S})}let y=!!g.length;return r&&(m.initial===!1||m.initial===m.animate)&&!n.manuallyAnimateOnMount&&(y=!1),r=!1,o=!1,y?e(g):Promise.resolve()}function d(h,m){var g;if(t[h].isActive===m)return Promise.resolve();(g=n.variantChildren)==null||g.forEach(x=>{var M;return(M=x.animationState)==null?void 0:M.setActive(h,m)}),t[h].isActive=m;const v=f(h);for(const x in t)t[x].protectedKeys={};return v}return{animateChanges:f,setActive:d,setAnimateFunction:u,getState:()=>t,reset:()=>{t=iv(),o=!0}}}function j1(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Jx(e,n):!1}function ys(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function iv(){return{animate:ys(!0),whileInView:ys(),whileHover:ys(),whileTap:ys(),whileDrag:ys(),whileFocus:ys(),exit:ys()}}function ph(n,e){n.min=e.min,n.max=e.max}function Ai(n,e){ph(n.x,e.x),ph(n.y,e.y)}function rv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}const ey=1e-4,Y1=1-ey,q1=1+ey,ty=.01,K1=0-ty,$1=0+ty;function kn(n){return n.max-n.min}function Z1(n,e,t){return Math.abs(n-e)<=t}function sv(n,e,t,r=.5){n.origin=r,n.originPoint=qt(e.min,e.max,n.origin),n.scale=kn(t)/kn(e),n.translate=qt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=Y1&&n.scale<=q1||isNaN(n.scale))&&(n.scale=1),(n.translate>=K1&&n.translate<=$1||isNaN(n.translate))&&(n.translate=0)}function Va(n,e,t,r){sv(n.x,e.x,t.x,r?r.originX:void 0),sv(n.y,e.y,t.y,r?r.originY:void 0)}function ov(n,e,t,r=0){const o=r?qt(t.min,t.max,r):t.min;n.min=o+e.min,n.max=n.min+kn(e)}function Q1(n,e,t,r){ov(n.x,e.x,t.x,r==null?void 0:r.x),ov(n.y,e.y,t.y,r==null?void 0:r.y)}function av(n,e,t,r=0){const o=r?qt(t.min,t.max,r):t.min;n.min=e.min-o,n.max=n.min+kn(e)}function Qu(n,e,t,r){av(n.x,e.x,t.x,r==null?void 0:r.x),av(n.y,e.y,t.y,r==null?void 0:r.y)}function lv(n,e,t,r,o){return n-=e,n=Zu(n,1/t,r),o!==void 0&&(n=Zu(n,1/o,r)),n}function J1(n,e=0,t=1,r=.5,o,l=n,u=n){if(qi.test(e)&&(e=parseFloat(e),e=qt(u.min,u.max,e/100)-u.min),typeof e!="number")return;let f=qt(l.min,l.max,r);n===l&&(f-=e),n.min=lv(n.min,e,t,f,o),n.max=lv(n.max,e,t,f,o)}function uv(n,e,[t,r,o],l,u){J1(n,e[t],e[r],e[o],e.scale,l,u)}const eA=["x","scaleX","originX"],tA=["y","scaleY","originY"];function cv(n,e,t,r){uv(n.x,e,eA,t?t.x:void 0,r?r.x:void 0),uv(n.y,e,tA,t?t.y:void 0,r?r.y:void 0)}function fv(n){return n.translate===0&&n.scale===1}function ny(n){return fv(n.x)&&fv(n.y)}function dv(n,e){return n.min===e.min&&n.max===e.max}function nA(n,e){return dv(n.x,e.x)&&dv(n.y,e.y)}function hv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function iy(n,e){return hv(n.x,e.x)&&hv(n.y,e.y)}function pv(n){return kn(n.x)/kn(n.y)}function mv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}function Gi(n){return[n("x"),n("y")]}function iA(n,e,t){let r="";const o=n.x.translate/e.x,l=n.y.translate/e.y,u=(t==null?void 0:t.z)||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:m,rotateX:v,rotateY:g,skewX:x,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),m&&(r+=`rotate(${m}deg) `),v&&(r+=`rotateX(${v}deg) `),g&&(r+=`rotateY(${g}deg) `),x&&(r+=`skewX(${x}deg) `),M&&(r+=`skewY(${M}deg) `)}const f=n.x.scale*e.x,d=n.y.scale*e.y;return(f!==1||d!==1)&&(r+=`scale(${f}, ${d})`),r||"none"}const ry=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],rA=ry.length,gv=n=>typeof n=="string"?parseFloat(n):n,vv=n=>typeof n=="number"||Xe.test(n);function sA(n,e,t,r,o,l){o?(n.opacity=qt(0,t.opacity??1,oA(r)),n.opacityExit=qt(e.opacity??1,0,aA(r))):l&&(n.opacity=qt(e.opacity??1,t.opacity??1,r));for(let u=0;u<rA;u++){const f=ry[u];let d=_v(e,f),h=_v(t,f);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||vv(d)===vv(h)?(n[f]=Math.max(qt(gv(d),gv(h),r),0),(qi.test(h)||qi.test(d))&&(n[f]+="%")):n[f]=h}(e.rotate||t.rotate)&&(n.rotate=qt(e.rotate||0,t.rotate||0,r))}function _v(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const oA=sy(0,.5,$_),aA=sy(.5,.95,gi);function sy(n,e,t){return r=>r<n?0:r>e?1:t(Ha(n,e,r))}function lA(n,e,t){const r=An(n)?n:Lo(n);return r.start(Ep("",r,e,t)),r.animation}function Xa(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}const uA=(n,e)=>n.depth-e.depth;class cA{constructor(){this.children=[],this.isDirty=!1}add(e){cp(this.children,e),this.isDirty=!0}remove(e){Xu(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(uA),this.isDirty=!1,this.children.forEach(e)}}function fA(n,e){const t=Bn.now(),r=({timestamp:o})=>{const l=o-t;l>=e&&(ns(r),n(l-e))};return Bt.setup(r,!0),()=>ns(r)}function Ou(n){return An(n)?n.get():n}class dA{constructor(){this.members=[]}add(e){cp(this.members,e);for(let t=this.members.length-1;t>=0;t--){const r=this.members[t];if(r===e||r===this.lead||r===this.prevLead)continue;const o=r.instance;(!o||o.isConnected===!1)&&!r.snapshot&&(Xu(this.members,r),r.unmount())}e.scheduleRender()}remove(e){if(Xu(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){var t;for(let r=this.members.indexOf(e)-1;r>=0;r--){const o=this.members[r];if(o.isPresent!==!1&&((t=o.instance)==null?void 0:t.isConnected)!==!1)return this.promote(o),!0}return!1}promote(e,t){var o;const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.updateSnapshot(),e.scheduleRender();const{layoutDependency:l}=r.options,{layoutDependency:u}=e.options;(l===void 0||l!==u)&&(e.resumeFrom=r,t&&(r.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),(o=e.root)!=null&&o.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var t,r,o,l,u;(r=(t=e.options).onExitComplete)==null||r.call(t),(u=(o=e.resumingFrom)==null?void 0:(l=o.options).onExitComplete)==null||u.call(l)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Bu={hasAnimatedSinceResize:!0,hasEverUpdated:!1},od=["","X","Y","Z"],hA=1e3;let pA=0;function ad(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function oy(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=Cx(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Bt,!(o||l))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&oy(r)}function ay({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},f=e==null?void 0:e()){this.id=pA++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(vA),this.nodes.forEach(EA),this.nodes.forEach(TA),this.nodes.forEach(_A)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new cA)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new dp),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const d=this.eventHandlers.get(u);d&&d.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=Pp(u)&&!g1(u),this.instance=u;const{layoutId:f,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||f)&&(this.isLayoutDirty=!0),n){let m,v=0;const g=()=>this.root.updateBlockedByResize=!1;Bt.read(()=>{v=window.innerWidth}),n(u,()=>{const x=window.innerWidth;x!==v&&(v=x,this.root.updateBlockedByResize=!0,m&&m(),m=fA(g,250),Bu.hasAnimatedSinceResize&&(Bu.hasAnimatedSinceResize=!1,this.nodes.forEach(Sv)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&h&&(f||d)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:v,hasRelativeLayoutChanged:g,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||h.getDefaultTransition()||bA,{onLayoutAnimationStart:w,onLayoutAnimationComplete:y}=h.getProps(),S=!this.targetLayout||!iy(this.targetLayout,x),R=!v&&g;if(this.options.layoutRoot||this.resumeFrom||R||v&&(S||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const b={...Mp(M,"layout"),onPlay:w,onComplete:y};(h.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b),this.setAnimationOrigin(m,R)}else v||Sv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ns(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(AA),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&oy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const v=this.path[m];v.shouldResetTransform=!0,(typeof v.latestValues.x=="string"||typeof v.latestValues.y=="string")&&(v.isLayoutDirty=!0),v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:f,layout:d}=this.options;if(f===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const d=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),d&&this.nodes.forEach(yA),this.nodes.forEach(xv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(yv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(SA),this.nodes.forEach(MA),this.nodes.forEach(mA),this.nodes.forEach(gA)):this.nodes.forEach(yv),this.clearAllSnapshots();const f=Bn.now();Tn.delta=Qi(0,1e3/60,f-Tn.timestamp),Tn.timestamp=f,Tn.isProcessing=!0,Qf.update.process(Tn),Qf.preRender.process(Tn),Qf.render.process(Tn),Tn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Rp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(xA),this.sharedNodes.forEach(wA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Bt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Bt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!kn(this.snapshot.measuredBox.x)&&!kn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=dn()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f&&this.instance){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!ny(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;u&&this.instance&&(f||As(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let d=this.removeElementScroll(f);return u&&(d=this.removeTransform(d)),PA(d),{animationId:this.root.animationId,measuredBox:f,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:u}=this.options;if(!u)return dn();const f=u.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(DA))){const{scroll:m}=this.root;m&&(Wi(f.x,m.offset.x),Wi(f.y,m.offset.y))}return f}removeElementScroll(u){var d;const f=dn();if(Ai(f,u),(d=this.scroll)!=null&&d.wasRoot)return f;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:v,options:g}=m;m!==this.root&&v&&g.layoutScroll&&(v.wasRoot&&Ai(f,u),Wi(f.x,v.offset.x),Wi(f.y,v.offset.y))}return f}applyTransform(u,f=!1,d){var m,v;const h=d||dn();Ai(h,u);for(let g=0;g<this.path.length;g++){const x=this.path[g];!f&&x.options.layoutScroll&&x.scroll&&x!==x.root&&(Wi(h.x,-x.scroll.offset.x),Wi(h.y,-x.scroll.offset.y)),As(x.latestValues)&&Fu(h,x.latestValues,(m=x.layout)==null?void 0:m.layoutBox)}return As(this.latestValues)&&Fu(h,this.latestValues,(v=this.layout)==null?void 0:v.layoutBox),h}removeTransform(u){var d;const f=dn();Ai(f,u);for(let h=0;h<this.path.length;h++){const m=this.path[h];if(!As(m.latestValues))continue;let v;m.instance&&(fh(m.latestValues)&&m.updateSnapshot(),v=dn(),Ai(v,m.measurePageBox())),cv(f,m.latestValues,(d=m.snapshot)==null?void 0:d.layoutBox,v)}return As(this.latestValues)&&cv(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Tn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var x;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==f;if(!(u||d&&this.isSharedProjectionDirty||this.isProjectionDirty||(x=this.parent)!=null&&x.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:v}=this.options;if(!this.layout||!(m||v))return;this.resolvedRelativeTargetAt=Tn.timestamp;const g=this.getClosestProjectingParent();g&&this.linkedParentVersion!==g.layoutVersion&&!g.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&g&&g.layout?this.createRelativeTarget(g,this.layout.layoutBox,g.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=dn(),this.targetWithTransforms=dn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Q1(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ai(this.target,this.layout.layoutBox),Wx(this.target,this.targetDelta)):Ai(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?this.createRelativeTarget(g,this.target,g.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||fh(this.parent.latestValues)||Gx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(u,f,d){this.relativeParent=u,this.linkedParentVersion=u.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=dn(),this.relativeTargetOrigin=dn(),Qu(this.relativeTargetOrigin,f,d,this.options.layoutAnchor||void 0),Ai(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var M;const u=this.getLead(),f=!!this.resumingFrom||this!==u;let d=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(d=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===Tn.timestamp&&(d=!1),d)return;const{layout:h,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||m))return;Ai(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,g=this.treeScale.y;C1(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=dn());const{target:x}=u;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(rv(this.prevProjectionDelta.x,this.projectionDelta.x),rv(this.prevProjectionDelta.y,this.projectionDelta.y)),Va(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==g||!mv(this.projectionDelta.x,this.prevProjectionDelta.x)||!mv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var f;if((f=this.options.visualElement)==null||f.scheduleRender(),u){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ro(),this.projectionDelta=Ro(),this.projectionDeltaWithTransform=Ro()}setAnimationOrigin(u,f=!1){const d=this.snapshot,h=d?d.latestValues:{},m={...this.latestValues},v=Ro();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const g=dn(),x=d?d.source:void 0,M=this.layout?this.layout.source:void 0,w=x!==M,y=this.getStack(),S=!y||y.members.length<=1,R=!!(w&&!S&&this.options.crossfade===!0&&!this.path.some(RA));this.animationProgress=0;let b;this.mixTargetDelta=P=>{const F=P/1e3;Mv(v.x,u.x,F),Mv(v.y,u.y,F),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Qu(g,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),CA(this.relativeTarget,this.relativeTargetOrigin,g,F),b&&nA(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=dn()),Ai(b,this.relativeTarget)),w&&(this.animationValues=m,sA(m,h,this.latestValues,F,R,S)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=F},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){var f,d,h;this.notifyListeners("animationStart"),(f=this.currentAnimation)==null||f.stop(),(h=(d=this.resumingFrom)==null?void 0:d.currentAnimation)==null||h.stop(),this.pendingAnimation&&(ns(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Bt.update(()=>{Bu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Lo(0)),this.motionValue.jump(0,!1),this.currentAnimation=lA(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),u.onUpdate&&u.onUpdate(m)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(hA),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:d,layout:h,latestValues:m}=u;if(!(!f||!d||!h)){if(this!==u&&this.layout&&h&&ly(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||dn();const v=kn(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+v;const g=kn(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+g}Ai(f,d),Fu(f,m),Va(this.projectionDeltaWithTransform,this.layoutCorrected,f,m)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new dA),this.sharedNodes.get(u).add(f);const h=f.options.initialPromotionConfig;f.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var f;const{layoutId:u}=this.options;return u?((f=this.getStack())==null?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:u}=this.options;return u?(f=this.getStack())==null?void 0:f.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(f=!0),!f)return;const h={};d.z&&ad("z",u,h,this.animationValues);for(let m=0;m<od.length;m++)ad(`rotate${od[m]}`,u,h,this.animationValues),ad(`skew${od[m]}`,u,h,this.animationValues);u.render();for(const m in h)u.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);u.scheduleRender()}applyProjectionStyles(u,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=Ou(f==null?void 0:f.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=Ou(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!As(this.latestValues)&&(u.transform=d?d({},""):"none",this.hasProjected=!1);return}u.visibility="";const m=h.animationValues||h.latestValues;this.applyTransformsToTarget();let v=iA(this.projectionDeltaWithTransform,this.treeScale,m);d&&(v=d(m,v)),u.transform=v;const{x:g,y:x}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${x.origin*100}% 0`,h.animationValues?u.opacity=h===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:u.opacity=h===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const M in hh){if(m[M]===void 0)continue;const{correct:w,applyTo:y,isCSSVariable:S}=hh[M],R=v==="none"?m[M]:w(m[M],h);if(y){const b=y.length;for(let P=0;P<b;P++)u[y[P]]=R}else S?this.options.visualElement.renderState.vars[M]=R:u[M]=R}this.options.layoutId&&(u.pointerEvents=h===this?Ou(f==null?void 0:f.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var f;return(f=u.currentAnimation)==null?void 0:f.stop()}),this.root.nodes.forEach(xv),this.root.sharedNodes.clear()}}}function mA(n){n.updateLayout()}function gA(n){var t;const e=((t=n.resumeFrom)==null?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:l}=n.options,u=e.source!==n.layout.source;if(l==="size")Gi(v=>{const g=u?e.measuredBox[v]:e.layoutBox[v],x=kn(g);g.min=r[v].min,g.max=g.min+x});else if(l==="x"||l==="y"){const v=l==="x"?"y":"x";ph(u?e.measuredBox[v]:e.layoutBox[v],r[v])}else ly(l,e.layoutBox,r)&&Gi(v=>{const g=u?e.measuredBox[v]:e.layoutBox[v],x=kn(r[v]);g.max=g.min+x,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+x)});const f=Ro();Va(f,r,e.layoutBox);const d=Ro();u?Va(d,n.applyTransform(o,!0),e.measuredBox):Va(d,r,e.layoutBox);const h=!ny(f);let m=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:g,layout:x}=v;if(g&&x){const M=n.options.layoutAnchor||void 0,w=dn();Qu(w,e.layoutBox,g.layoutBox,M);const y=dn();Qu(y,r,x.layoutBox,M),iy(w,y)||(m=!0),v.options.layoutRoot&&(n.relativeTarget=y,n.relativeTargetOrigin=w,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:d,layoutDelta:f,hasLayoutChanged:h,hasRelativeLayoutChanged:m})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function vA(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function _A(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function xA(n){n.clearSnapshot()}function xv(n){n.clearMeasurements()}function yA(n){n.isLayoutDirty=!0,n.updateLayout()}function yv(n){n.isLayoutDirty=!1}function SA(n){n.isAnimationBlocked&&n.layout&&!n.isLayoutDirty&&(n.snapshot=n.layout,n.isLayoutDirty=!0)}function MA(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Sv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function EA(n){n.resolveTargetDelta()}function TA(n){n.calcProjection()}function AA(n){n.resetSkewAndRotation()}function wA(n){n.removeLeadSnapshot()}function Mv(n,e,t){n.translate=qt(e.translate,0,t),n.scale=qt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Ev(n,e,t,r){n.min=qt(e.min,t.min,r),n.max=qt(e.max,t.max,r)}function CA(n,e,t,r){Ev(n.x,e.x,t.x,r),Ev(n.y,e.y,t.y,r)}function RA(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const bA={duration:.45,ease:[.4,0,.1,1]},Tv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Av=Tv("applewebkit/")&&!Tv("chrome/")?Math.round:gi;function wv(n){n.min=Av(n.min),n.max=Av(n.max)}function PA(n){wv(n.x),wv(n.y)}function ly(n,e,t){return n==="position"||n==="preserve-aspect"&&!Z1(pv(e),pv(t),.2)}function DA(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const LA=ay({attachResizeListener:(n,e)=>Xa(n,"resize",e),measureScroll:()=>{var n,e;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),ld={current:void 0},uy=ay({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!ld.current){const n=new LA({});n.mount(window),n.setOptions({layoutScroll:!0}),ld.current=n}return ld.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),cy=Je.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function NA(n=!0){const e=Je.useContext(up);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,l=Je.useId();Je.useEffect(()=>{if(n)return o(l)},[n]);const u=Je.useCallback(()=>n&&r&&r(l),[l,r,n]);return!t&&r?[!1,u]:[!0]}const fy=Je.createContext({strict:!1}),Cv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Rv=!1;function IA(){if(Rv)return;const n={};for(const e in Cv)n[e]={isEnabled:t=>Cv[e].some(r=>!!t[r])};Vx(n),Rv=!0}function dy(){return IA(),E1()}function UA(n){const e=dy();for(const t in n)e[t]={...e[t],...n[t]};Vx(e)}const FA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ju(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||FA.has(n)}let hy=n=>!Ju(n);function OA(n){typeof n=="function"&&(hy=e=>e.startsWith("on")?!Ju(e):n(e))}try{OA(require("@emotion/is-prop-valid").default)}catch{}function BA(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||An(n[o])||(hy(o)||t===!0&&Ju(o)||!e&&!Ju(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}const cc=Je.createContext({});function kA(n,e){if(uc(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Wa(t)?t:void 0,animate:Wa(r)?r:void 0}}return n.inherit!==!1?e:{}}function VA(n){const{initial:e,animate:t}=kA(n,Je.useContext(cc));return Je.useMemo(()=>({initial:e,animate:t}),[bv(e),bv(t)])}function bv(n){return Array.isArray(n)?n.join(" "):n}const Up=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function py(n,e,t){for(const r in e)!An(e[r])&&!Yx(r,t)&&(n[r]=e[r])}function zA({transformTemplate:n},e){return Je.useMemo(()=>{const t=Up();return Np(t,e,n),Object.assign({},t.vars,t.style)},[e])}function HA(n,e){const t=n.style||{},r={};return py(r,t,n),Object.assign(r,zA(n,e)),r}function GA(n,e){const t={},r=HA(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}const my=()=>({...Up(),attrs:{}});function WA(n,e,t,r){const o=Je.useMemo(()=>{const l=my();return qx(l,e,$x(r),n.transformTemplate,n.style),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};py(l,n.style,n),o.style={...l,...o.style}}return o}const XA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fp(n){return typeof n!="string"||n.includes("-")?!1:!!(XA.indexOf(n)>-1||/[A-Z]/u.test(n))}function jA(n,e,t,{latestValues:r},o,l=!1,u){const d=(u??Fp(n)?WA:GA)(e,r,o,n),h=BA(e,typeof n=="string",l),m=n!==Je.Fragment?{...h,...d,ref:t}:{},{children:v}=e,g=Je.useMemo(()=>An(v)?v.get():v,[v]);return Je.createElement(n,{...m,children:g})}function YA({scrapeMotionValuesFromProps:n,createRenderState:e},t,r,o){return{latestValues:qA(t,r,o,n),renderState:e()}}function qA(n,e,t,r){const o={},l=r(n,{});for(const g in l)o[g]=Ou(l[g]);let{initial:u,animate:f}=n;const d=uc(n),h=Bx(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),f===void 0&&(f=e.animate));let m=t?t.initial===!1:!1;m=m||u===!1;const v=m?f:u;if(v&&typeof v!="boolean"&&!lc(v)){const g=Array.isArray(v)?v:[v];for(let x=0;x<g.length;x++){const M=Tp(n,g[x]);if(M){const{transitionEnd:w,transition:y,...S}=M;for(const R in S){let b=S[R];if(Array.isArray(b)){const P=m?b.length-1:0;b=b[P]}b!==null&&(o[R]=b)}for(const R in w)o[R]=w[R]}}}return o}const gy=n=>(e,t)=>{const r=Je.useContext(cc),o=Je.useContext(up),l=()=>YA(n,e,r,o);return t?l():jM(l)},KA=gy({scrapeMotionValuesFromProps:Ip,createRenderState:Up}),$A=gy({scrapeMotionValuesFromProps:Zx,createRenderState:my}),ZA=Symbol.for("motionComponentSymbol");function QA(n,e,t){const r=Je.useRef(t);Je.useInsertionEffect(()=>{r.current=t});const o=Je.useRef(null);return Je.useCallback(l=>{var f;l&&((f=n.onMount)==null||f.call(n,l)),e&&(l?e.mount(l):e.unmount());const u=r.current;if(typeof u=="function")if(l){const d=u(l);typeof d=="function"&&(o.current=d)}else o.current?(o.current(),o.current=null):u(l);else u&&(u.current=l)},[e])}const vy=Je.createContext({});function Ao(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function JA(n,e,t,r,o,l){var b,P;const{visualElement:u}=Je.useContext(cc),f=Je.useContext(fy),d=Je.useContext(up),h=Je.useContext(cy),m=h.reducedMotion,v=h.skipAnimations,g=Je.useRef(null),x=Je.useRef(!1);r=r||f.renderer,!g.current&&r&&(g.current=r(n,{visualState:e,parent:u,props:t,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:m,skipAnimations:v,isSVG:l}),x.current&&g.current&&(g.current.manuallyAnimateOnMount=!0));const M=g.current,w=Je.useContext(vy);M&&!M.projection&&o&&(M.type==="html"||M.type==="svg")&&ew(g.current,t,o,w);const y=Je.useRef(!1);Je.useInsertionEffect(()=>{M&&y.current&&M.update(t,d)});const S=t[wx],R=Je.useRef(!!S&&typeof window<"u"&&!((b=window.MotionHandoffIsComplete)!=null&&b.call(window,S))&&((P=window.MotionHasOptimisedAnimation)==null?void 0:P.call(window,S)));return qM(()=>{x.current=!0,M&&(y.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),R.current&&M.animationState&&M.animationState.animateChanges())}),Je.useEffect(()=>{M&&(!R.current&&M.animationState&&M.animationState.animateChanges(),R.current&&(queueMicrotask(()=>{var F;(F=window.MotionHandoffMarkAsComplete)==null||F.call(window,S)}),R.current=!1),M.enteringChildren=void 0)}),M}function ew(n,e,t,r){const{layoutId:o,layout:l,drag:u,dragConstraints:f,layoutScroll:d,layoutRoot:h,layoutAnchor:m,layoutCrossfade:v}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:_y(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||f&&Ao(f),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,crossfade:v,layoutScroll:d,layoutRoot:h,layoutAnchor:m})}function _y(n){if(n)return n.options.allowProjection!==!1?n.projection:_y(n.parent)}function ud(n,{forwardMotionProps:e=!1,type:t}={},r,o){r&&UA(r);const l=t?t==="svg":Fp(n),u=l?$A:KA;function f(h,m){let v;const g={...Je.useContext(cy),...h,layoutId:tw(h)},{isStatic:x}=g,M=VA(h),w=u(h,x);if(!x&&typeof window<"u"){nw();const y=iw(g);v=y.MeasureLayout,M.visualElement=JA(n,w,g,o,y.ProjectionNode,l)}return ue.jsxs(cc.Provider,{value:M,children:[v&&M.visualElement?ue.jsx(v,{visualElement:M.visualElement,...g}):null,jA(n,h,QA(w,M.visualElement,m),w,x,e,l)]})}f.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const d=Je.forwardRef(f);return d[ZA]=n,d}function tw({layoutId:n}){const e=Je.useContext(B_).id;return e&&n!==void 0?e+"-"+n:n}function nw(n,e){Je.useContext(fy).strict}function iw(n){const e=dy(),{drag:t,layout:r}=e;if(!t&&!r)return{};const o={...t,...r};return{MeasureLayout:t!=null&&t.isEnabled(n)||r!=null&&r.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function rw(n,e){if(typeof Proxy>"u")return ud;const t=new Map,r=(l,u)=>ud(l,u,n,e),o=(l,u)=>r(l,u);return new Proxy(o,{get:(l,u)=>u==="create"?r:(t.has(u)||t.set(u,ud(u,void 0,n,e)),t.get(u))})}const sw=(n,e)=>e.isSVG??Fp(n)?new V1(e):new I1(e,{allowProjection:n!==Je.Fragment});class ow extends rs{constructor(e){super(e),e.animationState||(e.animationState=X1(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();lc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let aw=0;class lw extends rs{constructor(){super(...arguments),this.id=aw++,this.isExitComplete=!1}update(){var l;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;if(e&&r===!1){if(this.isExitComplete){const{initial:u,custom:f}=this.node.getProps();if(typeof u=="string"||typeof u=="object"&&u!==null&&!Array.isArray(u)){const d=Is(this.node,u,f);if(d){const{transition:h,transitionEnd:m,...v}=d;for(const g in v)(l=this.node.getValue(g))==null||l.jump(v[g])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const uw={animation:{Feature:ow},exit:{Feature:lw}};function Za(n){return{point:{x:n.pageX,y:n.pageY}}}const cw=n=>e=>bp(e)&&n(e,Za(e));function za(n,e,t,r){return Xa(n,e,cw(t),r)}const xy=({current:n})=>n?n.ownerDocument.defaultView:null,Pv=(n,e)=>Math.abs(n-e);function fw(n,e){const t=Pv(n.x,e.x),r=Pv(n.y,e.y);return Math.sqrt(t**2+r**2)}const Dv=new Set(["auto","scroll"]);class yy{constructor(e,t,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:u=3,element:f}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=x=>{this.handleScroll(x.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=au(this.lastRawMoveEventInfo,this.transformPagePoint));const x=cd(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,w=fw(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!w)return;const{point:y}=x,{timestamp:S}=Tn;this.history.push({...y,timestamp:S});const{onStart:R,onMove:b}=this.handlers;M||(R&&R(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),b&&b(this.lastMoveEvent,x)},this.handlePointerMove=(x,M)=>{this.lastMoveEvent=x,this.lastRawMoveEventInfo=M,this.lastMoveEventInfo=au(M,this.transformPagePoint),Bt.update(this.updatePoint,!0)},this.handlePointerUp=(x,M)=>{this.end();const{onEnd:w,onSessionEnd:y,resumeAnimation:S}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const R=cd(x.type==="pointercancel"?this.lastMoveEventInfo:au(M,this.transformPagePoint),this.history);this.startEvent&&w&&w(x,R),y&&y(x,R)},!bp(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=r,this.distanceThreshold=u,this.contextWindow=o||window;const d=Za(e),h=au(d,this.transformPagePoint),{point:m}=h,{timestamp:v}=Tn;this.history=[{...m,timestamp:v}];const{onSessionStart:g}=t;g&&g(e,cd(h,this.history)),this.removeListeners=qa(za(this.contextWindow,"pointermove",this.handlePointerMove),za(this.contextWindow,"pointerup",this.handlePointerUp),za(this.contextWindow,"pointercancel",this.handlePointerUp)),f&&this.startScrollTracking(f)}startScrollTracking(e){let t=e.parentElement;for(;t;){const r=getComputedStyle(t);(Dv.has(r.overflowX)||Dv.has(r.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const r=e===window,o=r?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},l={x:o.x-t.x,y:o.y-t.y};l.x===0&&l.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=l.x,this.lastMoveEventInfo.point.y+=l.y):this.history.length>0&&(this.history[0].x-=l.x,this.history[0].y-=l.y),this.scrollPositions.set(e,o),Bt.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ns(this.updatePoint)}}function au(n,e){return e?{point:e(n.point)}:n}function Lv(n,e){return{x:n.x-e.x,y:n.y-e.y}}function cd({point:n},e){return{point:n,delta:Lv(n,Sy(e)),offset:Lv(n,dw(e)),velocity:hw(e,.1)}}function dw(n){return n[0]}function Sy(n){return n[n.length-1]}function hw(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=Sy(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>ii(e)));)t--;if(!r)return{x:0,y:0};r===n[0]&&n.length>2&&o.timestamp-r.timestamp>ii(e)*2&&(r=n[1]);const l=mi(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function pw(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?qt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?qt(t,n,r.max):Math.min(n,t)),n}function Nv(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function mw(n,{top:e,left:t,bottom:r,right:o}){return{x:Nv(n.x,t,o),y:Nv(n.y,e,r)}}function Iv(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function gw(n,e){return{x:Iv(n.x,e.x),y:Iv(n.y,e.y)}}function vw(n,e){let t=.5;const r=kn(n),o=kn(e);return o>r?t=Ha(e.min,e.max-r,n.min):r>o&&(t=Ha(n.min,n.max-o,e.min)),Qi(0,1,t)}function _w(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const mh=.35;function xw(n=mh){return n===!1?n=0:n===!0&&(n=mh),{x:Uv(n,"left","right"),y:Uv(n,"top","bottom")}}function Uv(n,e,t){return{min:Fv(n,e),max:Fv(n,t)}}function Fv(n,e){return typeof n=="number"?n:n[e]||0}const yw=new WeakMap;class Sw{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=dn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=v=>{t&&this.snapToCursor(Za(v).point),this.stopAnimation()},u=(v,g)=>{const{drag:x,dragPropagation:M,onDragStart:w}=this.getProps();if(x&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=JT(x),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=g,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Gi(S=>{let R=this.getAxisMotionValue(S).get()||0;if(qi.test(R)){const{projection:b}=this.visualElement;if(b&&b.layout){const P=b.layout.layoutBox[S];P&&(R=kn(P)*(parseFloat(R)/100))}}this.originPoint[S]=R}),w&&Bt.update(()=>w(v,g),!1,!0),oh(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},f=(v,g)=>{this.latestPointerEvent=v,this.latestPanInfo=g;const{dragPropagation:x,dragDirectionLock:M,onDirectionLock:w,onDrag:y}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:S}=g;if(M&&this.currentDirection===null){this.currentDirection=Ew(S),this.currentDirection!==null&&w&&w(this.currentDirection);return}this.updateAxis("x",g.point,S),this.updateAxis("y",g.point,S),this.visualElement.render(),y&&Bt.update(()=>y(v,g),!1,!0)},d=(v,g)=>{this.latestPointerEvent=v,this.latestPanInfo=g,this.stop(v,g),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:m}=this.getProps();this.panSession=new yy(e,{onSessionStart:l,onStart:u,onMove:f,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:r,contextWindow:xy(this.visualElement),element:this.visualElement.current})}stop(e,t){const r=e||this.latestPointerEvent,o=t||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!r)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&Bt.postRender(()=>f(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!lu(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=pw(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){var l;const{dragConstraints:e,dragElastic:t}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(l=this.visualElement.projection)==null?void 0:l.layout,o=this.constraints;e&&Ao(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=mw(r.layoutBox,e):this.constraints=!1,this.elastic=xw(t),o!==this.constraints&&!Ao(e)&&r&&this.constraints&&!this.hasMutatedConstraints&&Gi(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=_w(r.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Ao(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;o.root&&(o.root.scroll=void 0,o.root.updateScroll());const l=R1(r,o.root,this.visualElement.getTransformPagePoint());let u=gw(o.layout.layoutBox,l);if(t){const f=t(A1(u));this.hasMutatedConstraints=!!f,f&&(u=Hx(f))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),d=this.constraints||{},h=Gi(m=>{if(!lu(m,t,this.currentDirection))return;let v=d&&d[m]||{};(u===!0||u===m)&&(v={min:0,max:0});const g=o?200:1e6,x=o?40:1e7,M={type:"inertia",velocity:r?e[m]:0,bounceStiffness:g,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...l,...v};return this.startAxisValueAnimation(m,M)});return Promise.all(h).then(f)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return oh(this.visualElement,e),r.start(Ep(e,r,0,t,this.visualElement,!1))}stopAnimation(){Gi(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,o=this.visualElement.getProps()[t];return o||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){Gi(t=>{const{drag:r}=this.getProps();if(!lu(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:f}=o.layout.layoutBox[t],d=l.get()||0;l.set(e[t]-qt(u,f,.5)+d)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!Ao(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Gi(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const d=f.get();o[u]=vw({min:d,max:d},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),Gi(u=>{if(!lu(u,e,null))return;const f=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];f.set(qt(d,h,o[u]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;yw.set(this.visualElement,this);const e=this.visualElement.current,t=za(e,"pointerdown",h=>{const{drag:m,dragListener:v=!0}=this.getProps(),g=h.target,x=g!==e&&s1(g);m&&v&&!x&&this.start(h)});let r;const o=()=>{const{dragConstraints:h}=this.getProps();Ao(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),r||(r=Mw(e,h.current,()=>this.scalePositionWithinConstraints())))},{projection:l}=this.visualElement,u=l.addEventListener("measure",o);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),Bt.read(o);const f=Xa(window,"resize",()=>this.scalePositionWithinConstraints()),d=l.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:m})=>{this.isDragging&&m&&(Gi(v=>{const g=this.getAxisMotionValue(v);g&&(this.originPoint[v]+=h[v].translate,g.set(g.get()+h[v].translate))}),this.visualElement.render())}));return()=>{f(),t(),u(),d&&d(),r&&r()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=mh,dragMomentum:f=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:f}}}function Ov(n){let e=!0;return()=>{if(e){e=!1;return}n()}}function Mw(n,e,t){const r=j0(n,Ov(t)),o=j0(e,Ov(t));return()=>{r(),o()}}function lu(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function Ew(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class Tw extends rs{constructor(e){super(e),this.removeGroupControls=gi,this.removeListeners=gi,this.controls=new Sw(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||gi}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const fd=n=>(e,t)=>{n&&Bt.update(()=>n(e,t),!1,!0)};class Aw extends rs{constructor(){super(...arguments),this.removePointerDownListener=gi}onPointerDown(e){this.session=new yy(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:xy(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:fd(e),onStart:fd(t),onMove:fd(r),onEnd:(l,u)=>{delete this.session,o&&Bt.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=za(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let dd=!1;class ww extends Je.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;l&&(t.group&&t.group.add(l),r&&r.register&&o&&r.register(l),dd&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Bu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:l}=this.props,{projection:u}=r;return u&&(u.isPresent=l,e.layoutDependency!==t&&u.setOptions({...u.options,layoutDependency:t}),dd=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==l?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||Bt.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:t}=this.props,{projection:r}=e;r&&(r.options.layoutAnchor=t,r.root.didUpdate(),Rp.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;dd=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function My(n){const[e,t]=NA(),r=Je.useContext(B_);return ue.jsx(ww,{...n,layoutGroup:r,switchLayoutGroup:Je.useContext(vy),isPresent:e,safeToRemove:t})}const Cw={pan:{Feature:Aw},drag:{Feature:Tw,ProjectionNode:uy,MeasureLayout:My}};function Bv(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=r[o];l&&Bt.postRender(()=>l(e,Za(e)))}class Rw extends rs{mount(){const{current:e}=this.node;e&&(this.unmount=t1(e,(t,r)=>(Bv(this.node,r,"Start"),o=>Bv(this.node,o,"End"))))}unmount(){}}class bw extends rs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=qa(Xa(this.node.current,"focus",()=>this.onFocus()),Xa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function kv(n,e,t){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=r[o];l&&Bt.postRender(()=>l(e,Za(e)))}class Pw extends rs{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:r}=this.node.props;this.unmount=a1(e,(o,l)=>(kv(this.node,l,"Start"),(u,{success:f})=>kv(this.node,u,f?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const gh=new WeakMap,hd=new WeakMap,Dw=n=>{const e=gh.get(n.target);e&&e(n)},Lw=n=>{n.forEach(Dw)};function Nw({root:n,...e}){const t=n||document;hd.has(t)||hd.set(t,{});const r=hd.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(Lw,{root:n,...e})),r[o]}function Iw(n,e,t){const r=Nw(e);return gh.set(n,t),r.observe(n),()=>{gh.delete(n),r.unobserve(n)}}const Uw={some:0,all:1};class Fw extends rs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var d;(d=this.stopObserver)==null||d.call(this);const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:l}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:Uw[o]},f=h=>{const{isIntersecting:m}=h;if(this.isInView===m||(this.isInView=m,l&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:v,onViewportLeave:g}=this.node.getProps(),x=m?v:g;x&&x(h)};this.stopObserver=Iw(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(Ow(e,t))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Ow({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const Bw={inView:{Feature:Fw},tap:{Feature:Pw},focus:{Feature:bw},hover:{Feature:Rw}},kw={layout:{ProjectionNode:uy,MeasureLayout:My}},Vw={...uw,...Bw,...Cw,...kw},Dt=rw(Vw,sw),zw={some:0,all:1};function Hw(n,e,{root:t,margin:r,amount:o="some"}={}){const l=Cp(n),u=new WeakMap,f=h=>{h.forEach(m=>{const v=u.get(m.target);if(m.isIntersecting!==!!v)if(m.isIntersecting){const g=e(m.target,m);typeof g=="function"?u.set(m.target,g):d.unobserve(m.target)}else typeof v=="function"&&(v(m),u.delete(m.target))})},d=new IntersectionObserver(f,{root:t,rootMargin:r,threshold:typeof o=="number"?o:zw[o]});return l.forEach(h=>d.observe(h)),()=>d.disconnect()}function wa(n,{root:e,margin:t,amount:r,once:o=!1,initial:l=!1}={}){const[u,f]=Je.useState(l);return Je.useEffect(()=>{if(!n.current||o&&u)return;const d=()=>(f(!0),o?void 0:()=>f(!1)),h={root:e&&e.current||void 0,margin:t,amount:r};return Hw(n.current,d,h)},[e,n,t,o,r]),u}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Op="184",Gw=0,Vv=1,Ww=2,ku=1,Xw=2,Fa=3,is=0,$n=1,vr=2,xr=0,bo=1,zv=2,Hv=3,Gv=4,jw=5,Cs=100,Yw=101,qw=102,Kw=103,$w=104,Zw=200,Qw=201,Jw=202,eC=203,vh=204,_h=205,tC=206,nC=207,iC=208,rC=209,sC=210,oC=211,aC=212,lC=213,uC=214,xh=0,yh=1,Sh=2,No=3,Mh=4,Eh=5,Th=6,Ah=7,Ey=0,cC=1,fC=2,Ki=0,Ty=1,Ay=2,wy=3,Cy=4,Ry=5,by=6,Py=7,Dy=300,Us=301,Io=302,pd=303,md=304,fc=306,wh=1e3,_r=1001,Ch=1002,wn=1003,dC=1004,uu=1005,Nn=1006,gd=1007,Ds=1008,pi=1009,Ly=1010,Ny=1011,ja=1012,Bp=1013,Ji=1014,ji=1015,Mr=1016,kp=1017,Vp=1018,Ya=1020,Iy=35902,Uy=35899,Fy=1021,Oy=1022,Li=1023,Er=1026,Ls=1027,By=1028,zp=1029,Fs=1030,Hp=1031,Gp=1033,Vu=33776,zu=33777,Hu=33778,Gu=33779,Rh=35840,bh=35841,Ph=35842,Dh=35843,Lh=36196,Nh=37492,Ih=37496,Uh=37488,Fh=37489,ec=37490,Oh=37491,Bh=37808,kh=37809,Vh=37810,zh=37811,Hh=37812,Gh=37813,Wh=37814,Xh=37815,jh=37816,Yh=37817,qh=37818,Kh=37819,$h=37820,Zh=37821,Qh=36492,Jh=36494,ep=36495,tp=36283,np=36284,tc=36285,ip=36286,hC=3200,Wv=0,pC=1,Qr="",hi="srgb",nc="srgb-linear",ic="linear",Lt="srgb",co=7680,Xv=519,mC=512,gC=513,vC=514,Wp=515,_C=516,xC=517,Xp=518,yC=519,jv=35044,Yv="300 es",Yi=2e3,rc=2001;function SC(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function sc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function MC(){const n=sc("canvas");return n.style.display="block",n}const qv={};function Kv(...n){const e="THREE."+n.shift();console.log(e,...n)}function ky(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function st(...n){n=ky(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Et(...n){n=ky(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function rp(...n){const e=n.join(" ");e in qv||(qv[e]=!0,st(...n))}function EC(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const TC={[xh]:yh,[Sh]:Th,[Mh]:Ah,[No]:Eh,[yh]:xh,[Th]:Sh,[Ah]:Mh,[Eh]:No};class Bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vd=Math.PI/180,sp=180/Math.PI;function Qa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function AC(n,e){return(n%e+e)%e}function _d(n,e,t){return(1-t)*n+t*e}function Ca(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Kp=class Kp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Kp.prototype.isVector2=!0;let Nt=Kp;class Vo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let d=r[o+0],h=r[o+1],m=r[o+2],v=r[o+3],g=l[u+0],x=l[u+1],M=l[u+2],w=l[u+3];if(v!==w||d!==g||h!==x||m!==M){let y=d*g+h*x+m*M+v*w;y<0&&(g=-g,x=-x,M=-M,w=-w,y=-y);let S=1-f;if(y<.9995){const R=Math.acos(y),b=Math.sin(R);S=Math.sin(S*R)/b,f=Math.sin(f*R)/b,d=d*S+g*f,h=h*S+x*f,m=m*S+M*f,v=v*S+w*f}else{d=d*S+g*f,h=h*S+x*f,m=m*S+M*f,v=v*S+w*f;const R=1/Math.sqrt(d*d+h*h+m*m+v*v);d*=R,h*=R,m*=R,v*=R}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],d=r[o+1],h=r[o+2],m=r[o+3],v=l[u],g=l[u+1],x=l[u+2],M=l[u+3];return e[t]=f*M+m*v+d*x-h*g,e[t+1]=d*M+m*g+h*v-f*x,e[t+2]=h*M+m*x+f*g-d*v,e[t+3]=m*M-f*v-d*g-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,d=Math.sin,h=f(r/2),m=f(o/2),v=f(l/2),g=d(r/2),x=d(o/2),M=d(l/2);switch(u){case"XYZ":this._x=g*m*v+h*x*M,this._y=h*x*v-g*m*M,this._z=h*m*M+g*x*v,this._w=h*m*v-g*x*M;break;case"YXZ":this._x=g*m*v+h*x*M,this._y=h*x*v-g*m*M,this._z=h*m*M-g*x*v,this._w=h*m*v+g*x*M;break;case"ZXY":this._x=g*m*v-h*x*M,this._y=h*x*v+g*m*M,this._z=h*m*M+g*x*v,this._w=h*m*v-g*x*M;break;case"ZYX":this._x=g*m*v-h*x*M,this._y=h*x*v+g*m*M,this._z=h*m*M-g*x*v,this._w=h*m*v+g*x*M;break;case"YZX":this._x=g*m*v+h*x*M,this._y=h*x*v+g*m*M,this._z=h*m*M-g*x*v,this._w=h*m*v-g*x*M;break;case"XZY":this._x=g*m*v-h*x*M,this._y=h*x*v-g*m*M,this._z=h*m*M+g*x*v,this._w=h*m*v+g*x*M;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],d=t[9],h=t[2],m=t[6],v=t[10],g=r+f+v;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(m-d)*x,this._y=(l-h)*x,this._z=(u-o)*x}else if(r>f&&r>v){const x=2*Math.sqrt(1+r-f-v);this._w=(m-d)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(l+h)/x}else if(f>v){const x=2*Math.sqrt(1+f-r-v);this._w=(l-h)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+v-r-f);this._w=(u-o)/x,this._x=(l+h)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+u*f+o*h-l*d,this._y=o*m+u*d+l*f-r*h,this._z=l*m+u*h+r*d-o*f,this._w=u*m-r*f-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),m=Math.sin(h);d=Math.sin(d*h)/m,t=Math.sin(t*h)/m,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const $p=class $p{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($v.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($v.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,d=e.w,h=2*(u*o-f*r),m=2*(f*t-l*o),v=2*(l*r-u*t);return this.x=t+d*h+u*v-f*m,this.y=r+d*m+f*h-l*v,this.z=o+d*v+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*u-r*d,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return xd.copy(this).projectOnVector(e),this.sub(xd)}reflect(e){return this.sub(xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$p.prototype.isVector3=!0;let ie=$p;const xd=new ie,$v=new Vo,Zp=class Zp{constructor(e,t,r,o,l,u,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,d,h)}set(e,t,r,o,l,u,f,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=r,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],d=r[6],h=r[1],m=r[4],v=r[7],g=r[2],x=r[5],M=r[8],w=o[0],y=o[3],S=o[6],R=o[1],b=o[4],P=o[7],F=o[2],L=o[5],B=o[8];return l[0]=u*w+f*R+d*F,l[3]=u*y+f*b+d*L,l[6]=u*S+f*P+d*B,l[1]=h*w+m*R+v*F,l[4]=h*y+m*b+v*L,l[7]=h*S+m*P+v*B,l[2]=g*w+x*R+M*F,l[5]=g*y+x*b+M*L,l[8]=g*S+x*P+M*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*f*h-r*l*m+r*f*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],v=m*u-f*h,g=f*d-m*l,x=h*l-u*d,M=t*v+r*g+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=v*w,e[1]=(o*h-m*r)*w,e[2]=(f*r-o*u)*w,e[3]=g*w,e[4]=(m*t-o*d)*w,e[5]=(o*l-f*t)*w,e[6]=x*w,e[7]=(r*d-h*t)*w,e[8]=(u*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*u+h*f)+u+e,-o*h,o*d,-o*(-h*u+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(yd.makeScale(e,t)),this}rotate(e){return this.premultiply(yd.makeRotation(-e)),this}translate(e,t){return this.premultiply(yd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zp.prototype.isMatrix3=!0;let ct=Zp;const yd=new ct,Zv=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qv=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wC(){const n={enabled:!0,workingColorSpace:nc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Lt&&(o.r=yr(o.r),o.g=yr(o.g),o.b=yr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Lt&&(o.r=Po(o.r),o.g=Po(o.g),o.b=Po(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Qr?ic:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return rp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return rp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[nc]:{primaries:e,whitePoint:r,transfer:ic,toXYZ:Zv,fromXYZ:Qv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:Zv,fromXYZ:Qv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),n}const xt=wC();function yr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Po(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fo;class CC{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{fo===void 0&&(fo=sc("canvas")),fo.width=e.width,fo.height=e.height;const o=fo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=fo}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=yr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(yr(t[r]/255)*255):t[r]=yr(t[r]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RC=0;class jp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RC++}),this.uuid=Qa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Sd(o[u].image)):l.push(Sd(o[u]))}else l=Sd(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Sd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?CC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let bC=0;const Md=new ie;class Vn extends Bs{constructor(e=Vn.DEFAULT_IMAGE,t=Vn.DEFAULT_MAPPING,r=_r,o=_r,l=Nn,u=Ds,f=Li,d=pi,h=Vn.DEFAULT_ANISOTROPY,m=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bC++}),this.uuid=Qa(),this.name="",this.source=new jp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Md).x}get height(){return this.source.getSize(Md).y}get depth(){return this.source.getSize(Md).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wh:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case Ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wh:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case Ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Dy;Vn.DEFAULT_ANISOTROPY=1;const Qp=class Qp{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],m=d[4],v=d[8],g=d[1],x=d[5],M=d[9],w=d[2],y=d[6],S=d[10];if(Math.abs(m-g)<.01&&Math.abs(v-w)<.01&&Math.abs(M-y)<.01){if(Math.abs(m+g)<.1&&Math.abs(v+w)<.1&&Math.abs(M+y)<.1&&Math.abs(h+x+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,P=(x+1)/2,F=(S+1)/2,L=(m+g)/4,B=(v+w)/4,T=(M+y)/4;return b>P&&b>F?b<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(b),o=L/r,l=B/r):P>F?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=L/o,l=T/o):F<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(F),r=B/l,o=T/l),this.set(r,o,l,t),this}let R=Math.sqrt((y-M)*(y-M)+(v-w)*(v-w)+(g-m)*(g-m));return Math.abs(R)<.001&&(R=1),this.x=(y-M)/R,this.y=(v-w)/R,this.z=(g-m)/R,this.w=Math.acos((h+x+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qp.prototype.isVector4=!0;let sn=Qp;class PC extends Bs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Vn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new jp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends PC{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Vy extends Vn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class DC extends Vn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const oc=class oc{constructor(e,t,r,o,l,u,f,d,h,m,v,g,x,M,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,d,h,m,v,g,x,M,w,y)}set(e,t,r,o,l,u,f,d,h,m,v,g,x,M,w,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=l,S[5]=u,S[9]=f,S[13]=d,S[2]=h,S[6]=m,S[10]=v,S[14]=g,S[3]=x,S[7]=M,S[11]=w,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ho.setFromMatrixColumn(e,0).length(),l=1/ho.setFromMatrixColumn(e,1).length(),u=1/ho.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const g=u*m,x=u*v,M=f*m,w=f*v;t[0]=d*m,t[4]=-d*v,t[8]=h,t[1]=x+M*h,t[5]=g-w*h,t[9]=-f*d,t[2]=w-g*h,t[6]=M+x*h,t[10]=u*d}else if(e.order==="YXZ"){const g=d*m,x=d*v,M=h*m,w=h*v;t[0]=g+w*f,t[4]=M*f-x,t[8]=u*h,t[1]=u*v,t[5]=u*m,t[9]=-f,t[2]=x*f-M,t[6]=w+g*f,t[10]=u*d}else if(e.order==="ZXY"){const g=d*m,x=d*v,M=h*m,w=h*v;t[0]=g-w*f,t[4]=-u*v,t[8]=M+x*f,t[1]=x+M*f,t[5]=u*m,t[9]=w-g*f,t[2]=-u*h,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const g=u*m,x=u*v,M=f*m,w=f*v;t[0]=d*m,t[4]=M*h-x,t[8]=g*h+w,t[1]=d*v,t[5]=w*h+g,t[9]=x*h-M,t[2]=-h,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const g=u*d,x=u*h,M=f*d,w=f*h;t[0]=d*m,t[4]=w-g*v,t[8]=M*v+x,t[1]=v,t[5]=u*m,t[9]=-f*m,t[2]=-h*m,t[6]=x*v+M,t[10]=g-w*v}else if(e.order==="XZY"){const g=u*d,x=u*h,M=f*d,w=f*h;t[0]=d*m,t[4]=-v,t[8]=h*m,t[1]=g*v+w,t[5]=u*m,t[9]=x*v-M,t[2]=M*v-x,t[6]=f*m,t[10]=w*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LC,e,NC)}lookAt(e,t,r){const o=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Wr.crossVectors(r,ti),Wr.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Wr.crossVectors(r,ti)),Wr.normalize(),cu.crossVectors(ti,Wr),o[0]=Wr.x,o[4]=cu.x,o[8]=ti.x,o[1]=Wr.y,o[5]=cu.y,o[9]=ti.y,o[2]=Wr.z,o[6]=cu.z,o[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],d=r[8],h=r[12],m=r[1],v=r[5],g=r[9],x=r[13],M=r[2],w=r[6],y=r[10],S=r[14],R=r[3],b=r[7],P=r[11],F=r[15],L=o[0],B=o[4],T=o[8],N=o[12],k=o[1],O=o[5],q=o[9],le=o[13],ce=o[2],H=o[6],Z=o[10],Y=o[14],X=o[3],ne=o[7],re=o[11],U=o[15];return l[0]=u*L+f*k+d*ce+h*X,l[4]=u*B+f*O+d*H+h*ne,l[8]=u*T+f*q+d*Z+h*re,l[12]=u*N+f*le+d*Y+h*U,l[1]=m*L+v*k+g*ce+x*X,l[5]=m*B+v*O+g*H+x*ne,l[9]=m*T+v*q+g*Z+x*re,l[13]=m*N+v*le+g*Y+x*U,l[2]=M*L+w*k+y*ce+S*X,l[6]=M*B+w*O+y*H+S*ne,l[10]=M*T+w*q+y*Z+S*re,l[14]=M*N+w*le+y*Y+S*U,l[3]=R*L+b*k+P*ce+F*X,l[7]=R*B+b*O+P*H+F*ne,l[11]=R*T+b*q+P*Z+F*re,l[15]=R*N+b*le+P*Y+F*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],d=e[9],h=e[13],m=e[2],v=e[6],g=e[10],x=e[14],M=e[3],w=e[7],y=e[11],S=e[15],R=d*x-h*g,b=f*x-h*v,P=f*g-d*v,F=u*x-h*m,L=u*g-d*m,B=u*v-f*m;return t*(w*R-y*b+S*P)-r*(M*R-y*F+S*L)+o*(M*b-w*F+S*B)-l*(M*P-w*L+y*B)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],v=e[9],g=e[10],x=e[11],M=e[12],w=e[13],y=e[14],S=e[15],R=t*f-r*u,b=t*d-o*u,P=t*h-l*u,F=r*d-o*f,L=r*h-l*f,B=o*h-l*d,T=m*w-v*M,N=m*y-g*M,k=m*S-x*M,O=v*y-g*w,q=v*S-x*w,le=g*S-x*y,ce=R*le-b*q+P*O+F*k-L*N+B*T;if(ce===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/ce;return e[0]=(f*le-d*q+h*O)*H,e[1]=(o*q-r*le-l*O)*H,e[2]=(w*B-y*L+S*F)*H,e[3]=(g*L-v*B-x*F)*H,e[4]=(d*k-u*le-h*N)*H,e[5]=(t*le-o*k+l*N)*H,e[6]=(y*P-M*B-S*b)*H,e[7]=(m*B-g*P+x*b)*H,e[8]=(u*q-f*k+h*T)*H,e[9]=(r*k-t*q-l*T)*H,e[10]=(M*L-w*P+S*R)*H,e[11]=(v*P-m*L-x*R)*H,e[12]=(f*N-u*O-d*T)*H,e[13]=(t*O-r*N+o*T)*H,e[14]=(w*b-M*F-y*R)*H,e[15]=(m*F-v*b+g*R)*H,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,d=e.z,h=l*u,m=l*f;return this.set(h*u+r,h*f-o*d,h*d+o*f,0,h*f+o*d,m*f+r,m*d-o*u,0,h*d-o*f,m*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,d=t._w,h=l+l,m=u+u,v=f+f,g=l*h,x=l*m,M=l*v,w=u*m,y=u*v,S=f*v,R=d*h,b=d*m,P=d*v,F=r.x,L=r.y,B=r.z;return o[0]=(1-(w+S))*F,o[1]=(x+P)*F,o[2]=(M-b)*F,o[3]=0,o[4]=(x-P)*L,o[5]=(1-(g+S))*L,o[6]=(y+R)*L,o[7]=0,o[8]=(M+b)*B,o[9]=(y-R)*B,o[10]=(1-(g+w))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=ho.set(o[0],o[1],o[2]).length();const f=ho.set(o[4],o[5],o[6]).length(),d=ho.set(o[8],o[9],o[10]).length();l<0&&(u=-u),wi.copy(this);const h=1/u,m=1/f,v=1/d;return wi.elements[0]*=h,wi.elements[1]*=h,wi.elements[2]*=h,wi.elements[4]*=m,wi.elements[5]*=m,wi.elements[6]*=m,wi.elements[8]*=v,wi.elements[9]*=v,wi.elements[10]*=v,t.setFromRotationMatrix(wi),r.x=u,r.y=f,r.z=d,this}makePerspective(e,t,r,o,l,u,f=Yi,d=!1){const h=this.elements,m=2*l/(t-e),v=2*l/(r-o),g=(t+e)/(t-e),x=(r+o)/(r-o);let M,w;if(d)M=l/(u-l),w=u*l/(u-l);else if(f===Yi)M=-(u+l)/(u-l),w=-2*u*l/(u-l);else if(f===rc)M=-u/(u-l),w=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Yi,d=!1){const h=this.elements,m=2/(t-e),v=2/(r-o),g=-(t+e)/(t-e),x=-(r+o)/(r-o);let M,w;if(d)M=1/(u-l),w=u/(u-l);else if(f===Yi)M=-2/(u-l),w=-(u+l)/(u-l);else if(f===rc)M=-1/(u-l),w=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=M,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};oc.prototype.isMatrix4=!0;let hn=oc;const ho=new ie,wi=new hn,LC=new ie(0,0,0),NC=new ie(1,1,1),Wr=new ie,cu=new ie,ti=new ie,Jv=new hn,e_=new Vo;class Os{constructor(e=0,t=0,r=0,o=Os.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],d=o[1],h=o[5],m=o[9],v=o[2],g=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Jv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jv,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return e_.setFromEuler(this),this.setFromQuaternion(e_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Os.DEFAULT_ORDER="XYZ";class zy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IC=0;const t_=new ie,po=new Vo,dr=new hn,fu=new ie,Ra=new ie,UC=new ie,FC=new Vo,n_=new ie(1,0,0),i_=new ie(0,1,0),r_=new ie(0,0,1),s_={type:"added"},OC={type:"removed"},mo={type:"childadded",child:null},Ed={type:"childremoved",child:null};class ri extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IC++}),this.uuid=Qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ri.DEFAULT_UP.clone();const e=new ie,t=new Os,r=new Vo,o=new ie(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new hn},normalMatrix:{value:new ct}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=ri.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return po.setFromAxisAngle(e,t),this.quaternion.multiply(po),this}rotateOnWorldAxis(e,t){return po.setFromAxisAngle(e,t),this.quaternion.premultiply(po),this}rotateX(e){return this.rotateOnAxis(n_,e)}rotateY(e){return this.rotateOnAxis(i_,e)}rotateZ(e){return this.rotateOnAxis(r_,e)}translateOnAxis(e,t){return t_.copy(e).applyQuaternion(this.quaternion),this.position.add(t_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(n_,e)}translateY(e){return this.translateOnAxis(i_,e)}translateZ(e){return this.translateOnAxis(r_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?fu.copy(e):fu.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(Ra,fu,this.up):dr.lookAt(fu,Ra,this.up),this.quaternion.setFromRotationMatrix(dr),o&&(dr.extractRotation(o.matrixWorld),po.setFromRotationMatrix(dr),this.quaternion.premultiply(po.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(s_),mo.child=e,this.dispatchEvent(mo),mo.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(OC),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(s_),mo.child=e,this.dispatchEvent(mo),mo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,UC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,FC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const v=d[h];l(e.shapes,v)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),v=u(e.shapes),g=u(e.skeletons),x=u(e.animations),M=u(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),x.length>0&&(r.animations=x),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}ri.DEFAULT_UP=new ie(0,1,0);ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class du extends ri{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BC={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new du,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new du,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new du,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,r),S=this._getHandJoint(h,w);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const m=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=m.position.distanceTo(v.position),x=.02,M=.005;h.inputState.pinching&&g>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(BC)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new du;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Hy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xr={h:0,s:0,l:0},hu={h:0,s:0,l:0};function Ad(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ft{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=xt.workingColorSpace){return this.r=e,this.g=t,this.b=r,xt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=xt.workingColorSpace){if(e=AC(e,1),t=yt(t,0,1),r=yt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Ad(u,l,e+1/3),this.g=Ad(u,l,e),this.b=Ad(u,l,e-1/3)}return xt.colorSpaceToWorking(this,o),this}setStyle(e,t=hi){function r(l){l!==void 0&&parseFloat(l)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){const r=Hy[e.toLowerCase()];return r!==void 0?this.setHex(r,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=Po(e.r),this.g=Po(e.g),this.b=Po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return xt.workingToColorSpace(Ln.copy(this),e),Math.round(yt(Ln.r*255,0,255))*65536+Math.round(yt(Ln.g*255,0,255))*256+Math.round(yt(Ln.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(Ln.copy(this),t);const r=Ln.r,o=Ln.g,l=Ln.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let d,h;const m=(f+u)/2;if(f===u)d=0,h=0;else{const v=u-f;switch(h=m<=.5?v/(u+f):v/(2-u-f),u){case r:d=(o-l)/v+(o<l?6:0);break;case o:d=(l-r)/v+2;break;case l:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=hi){xt.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,r=Ln.g,o=Ln.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Xr),this.setHSL(Xr.h+e,Xr.s+t,Xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Xr),e.getHSL(hu);const r=_d(Xr.h,hu.h,t),o=_d(Xr.s,hu.s,t),l=_d(Xr.l,hu.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Ft;Ft.NAMES=Hy;class kC extends ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Os,this.environmentIntensity=1,this.environmentRotation=new Os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ci=new ie,hr=new ie,wd=new ie,pr=new ie,go=new ie,vo=new ie,o_=new ie,Cd=new ie,Rd=new ie,bd=new ie,Pd=new sn,Dd=new sn,Ld=new sn;class Di{constructor(e=new ie,t=new ie,r=new ie){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ci.subVectors(e,t),o.cross(Ci);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ci.subVectors(o,t),hr.subVectors(r,t),wd.subVectors(e,t);const u=Ci.dot(Ci),f=Ci.dot(hr),d=Ci.dot(wd),h=hr.dot(hr),m=hr.dot(wd),v=u*h-f*f;if(v===0)return l.set(0,0,0),null;const g=1/v,x=(h*d-f*m)*g,M=(u*m-f*d)*g;return l.set(1-x-M,M,x)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,r,o,l,u,f,d){return this.getBarycoord(e,t,r,o,pr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,pr.x),d.addScaledVector(u,pr.y),d.addScaledVector(f,pr.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return Pd.setScalar(0),Dd.setScalar(0),Ld.setScalar(0),Pd.fromBufferAttribute(e,t),Dd.fromBufferAttribute(e,r),Ld.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Pd,l.x),u.addScaledVector(Dd,l.y),u.addScaledVector(Ld,l.z),u}static isFrontFacing(e,t,r,o){return Ci.subVectors(r,t),hr.subVectors(e,t),Ci.cross(hr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),Ci.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Di.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;go.subVectors(o,r),vo.subVectors(l,r),Cd.subVectors(e,r);const d=go.dot(Cd),h=vo.dot(Cd);if(d<=0&&h<=0)return t.copy(r);Rd.subVectors(e,o);const m=go.dot(Rd),v=vo.dot(Rd);if(m>=0&&v<=m)return t.copy(o);const g=d*v-m*h;if(g<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(r).addScaledVector(go,u);bd.subVectors(e,l);const x=go.dot(bd),M=vo.dot(bd);if(M>=0&&x<=M)return t.copy(l);const w=x*h-d*M;if(w<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(r).addScaledVector(vo,f);const y=m*M-x*v;if(y<=0&&v-m>=0&&x-M>=0)return o_.subVectors(l,o),f=(v-m)/(v-m+(x-M)),t.copy(o).addScaledVector(o_,f);const S=1/(y+w+g);return u=w*S,f=g*S,t.copy(r).addScaledVector(go,u).addScaledVector(vo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ja{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ri):Ri.fromBufferAttribute(l,u),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pu.copy(r.boundingBox)),pu.applyMatrix4(e.matrixWorld),this.union(pu)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),mu.subVectors(this.max,ba),_o.subVectors(e.a,ba),xo.subVectors(e.b,ba),yo.subVectors(e.c,ba),jr.subVectors(xo,_o),Yr.subVectors(yo,xo),Ss.subVectors(_o,yo);let t=[0,-jr.z,jr.y,0,-Yr.z,Yr.y,0,-Ss.z,Ss.y,jr.z,0,-jr.x,Yr.z,0,-Yr.x,Ss.z,0,-Ss.x,-jr.y,jr.x,0,-Yr.y,Yr.x,0,-Ss.y,Ss.x,0];return!Nd(t,_o,xo,yo,mu)||(t=[1,0,0,0,1,0,0,0,1],!Nd(t,_o,xo,yo,mu))?!1:(gu.crossVectors(jr,Yr),t=[gu.x,gu.y,gu.z],Nd(t,_o,xo,yo,mu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mr=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Ri=new ie,pu=new Ja,_o=new ie,xo=new ie,yo=new ie,jr=new ie,Yr=new ie,Ss=new ie,ba=new ie,mu=new ie,gu=new ie,Ms=new ie;function Nd(n,e,t,r,o){for(let l=0,u=n.length-3;l<=u;l+=3){Ms.fromArray(n,l);const f=o.x*Math.abs(Ms.x)+o.y*Math.abs(Ms.y)+o.z*Math.abs(Ms.z),d=e.dot(Ms),h=t.dot(Ms),m=r.dot(Ms);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const ln=new ie,vu=new Nt;let VC=0;class Zi extends Bs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:VC++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=jv,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)vu.fromBufferAttribute(this,t),vu.applyMatrix3(e),this.setXY(t,vu.x,vu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ca(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Kn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ca(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ca(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ca(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ca(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),r=Kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),r=Kn(r,this.array),o=Kn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),r=Kn(r,this.array),o=Kn(o,this.array),l=Kn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Gy extends Zi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Wy extends Zi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Sr extends Zi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const zC=new Ja,Pa=new ie,Id=new ie;class Yp{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):zC.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const t=Pa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Pa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(Id)),this.expandByPoint(Pa.copy(e.center).sub(Id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let HC=0;const di=new hn,Ud=new ri,So=new ie,ni=new Ja,Da=new Ja,xn=new ie;class Tr extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HC++}),this.uuid=Qa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(SC(e)?Wy:Gy)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ct().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,r){return di.makeTranslation(e,t,r),this.applyMatrix4(di),this}scale(e,t,r){return di.makeScale(e,t,r),this.applyMatrix4(di),this}lookAt(e){return Ud.lookAt(e),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(So).negate(),this.translate(So.x,So.y,So.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Sr(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ja);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ni.setFromBufferAttribute(l),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Da.setFromBufferAttribute(f),this.morphTargetsRelative?(xn.addVectors(ni.min,Da.min),ni.expandByPoint(xn),xn.addVectors(ni.max,Da.max),ni.expandByPoint(xn)):(ni.expandByPoint(Da.min),ni.expandByPoint(Da.max))}ni.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)xn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(xn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)xn.fromBufferAttribute(f,h),d&&(So.fromBufferAttribute(e,h),xn.add(So)),o=Math.max(o,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let T=0;T<r.count;T++)f[T]=new ie,d[T]=new ie;const h=new ie,m=new ie,v=new ie,g=new Nt,x=new Nt,M=new Nt,w=new ie,y=new ie;function S(T,N,k){h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,N),v.fromBufferAttribute(r,k),g.fromBufferAttribute(l,T),x.fromBufferAttribute(l,N),M.fromBufferAttribute(l,k),m.sub(h),v.sub(h),x.sub(g),M.sub(g);const O=1/(x.x*M.y-M.x*x.y);isFinite(O)&&(w.copy(m).multiplyScalar(M.y).addScaledVector(v,-x.y).multiplyScalar(O),y.copy(v).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(O),f[T].add(w),f[N].add(w),f[k].add(w),d[T].add(y),d[N].add(y),d[k].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let T=0,N=R.length;T<N;++T){const k=R[T],O=k.start,q=k.count;for(let le=O,ce=O+q;le<ce;le+=3)S(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const b=new ie,P=new ie,F=new ie,L=new ie;function B(T){F.fromBufferAttribute(o,T),L.copy(F);const N=f[T];b.copy(N),b.sub(F.multiplyScalar(F.dot(N))).normalize(),P.crossVectors(L,N);const O=P.dot(d[T])<0?-1:1;u.setXYZW(T,b.x,b.y,b.z,O)}for(let T=0,N=R.length;T<N;++T){const k=R[T],O=k.start,q=k.count;for(let le=O,ce=O+q;le<ce;le+=3)B(e.getX(le+0)),B(e.getX(le+1)),B(e.getX(le+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Zi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,x=r.count;g<x;g++)r.setXYZ(g,0,0,0);const o=new ie,l=new ie,u=new ie,f=new ie,d=new ie,h=new ie,m=new ie,v=new ie;if(e)for(let g=0,x=e.count;g<x;g+=3){const M=e.getX(g+0),w=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,w),u.fromBufferAttribute(t,y),m.subVectors(u,l),v.subVectors(o,l),m.cross(v),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,w),h.fromBufferAttribute(r,y),f.add(m),d.add(m),h.add(m),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,x=t.count;g<x;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),m.subVectors(u,l),v.subVectors(o,l),m.cross(v),r.setXYZ(g+0,m.x,m.y,m.z),r.setXYZ(g+1,m.x,m.y,m.z),r.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,v=f.normalized,g=new h.constructor(d.length*m);let x=0,M=0;for(let w=0,y=d.length;w<y;w++){f.isInterleavedBufferAttribute?x=d[w]*f.data.stride+f.offset:x=d[w]*m;for(let S=0;S<m;S++)g[M++]=h[x++]}return new Zi(g,m,v)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tr,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,v=h.length;m<v;m++){const g=h[m],x=e(g,r);d.push(x)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let v=0,g=h.length;v<g;v++){const x=h[v];m.push(x.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],v=l[h];for(let g=0,x=v.length;g<x;g++)m.push(v[g].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let GC=0;class dc extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GC++}),this.uuid=Qa(),this.name="",this.type="Material",this.blending=bo,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=_h,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=No,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==bo&&(r.blending=this.blending),this.side!==is&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==vh&&(r.blendSrc=this.blendSrc),this.blendDst!==_h&&(r.blendDst=this.blendDst),this.blendEquation!==Cs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==No&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==co&&(r.stencilFail=this.stencilFail),this.stencilZFail!==co&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==co&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gr=new ie,Fd=new ie,_u=new ie,qr=new ie,Od=new ie,xu=new ie,Bd=new ie;class WC{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gr.copy(this.origin).addScaledVector(this.direction,t),gr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Fd.copy(e).add(t).multiplyScalar(.5),_u.copy(t).sub(e).normalize(),qr.copy(this.origin).sub(Fd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(_u),f=qr.dot(this.direction),d=-qr.dot(_u),h=qr.lengthSq(),m=Math.abs(1-u*u);let v,g,x,M;if(m>0)if(v=u*d-f,g=u*f-d,M=l*m,v>=0)if(g>=-M)if(g<=M){const w=1/m;v*=w,g*=w,x=v*(v+u*g+2*f)+g*(u*v+g+2*d)+h}else g=l,v=Math.max(0,-(u*g+f)),x=-v*v+g*(g+2*d)+h;else g=-l,v=Math.max(0,-(u*g+f)),x=-v*v+g*(g+2*d)+h;else g<=-M?(v=Math.max(0,-(-u*l+f)),g=v>0?-l:Math.min(Math.max(-l,-d),l),x=-v*v+g*(g+2*d)+h):g<=M?(v=0,g=Math.min(Math.max(-l,-d),l),x=g*(g+2*d)+h):(v=Math.max(0,-(u*l+f)),g=v>0?l:Math.min(Math.max(-l,-d),l),x=-v*v+g*(g+2*d)+h);else g=u>0?-l:l,v=Math.max(0,-(u*g+f)),x=-v*v+g*(g+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Fd).addScaledVector(_u,g),x}intersectSphere(e,t){gr.subVectors(e.center,this.origin);const r=gr.dot(this.direction),o=gr.dot(gr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,d=r+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,d;const h=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),m>=0?(l=(e.min.y-g.y)*m,u=(e.max.y-g.y)*m):(l=(e.max.y-g.y)*m,u=(e.min.y-g.y)*m),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(f=(e.min.z-g.z)*v,d=(e.max.z-g.z)*v):(f=(e.max.z-g.z)*v,d=(e.min.z-g.z)*v),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,gr)!==null}intersectTriangle(e,t,r,o,l){Od.subVectors(t,e),xu.subVectors(r,e),Bd.crossVectors(Od,xu);let u=this.direction.dot(Bd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;qr.subVectors(this.origin,e);const d=f*this.direction.dot(xu.crossVectors(qr,xu));if(d<0)return null;const h=f*this.direction.dot(Od.cross(qr));if(h<0||d+h>u)return null;const m=-f*qr.dot(Bd);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xy extends dc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Os,this.combine=Ey,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const a_=new hn,Es=new WC,yu=new Yp,l_=new ie,Su=new ie,Mu=new ie,Eu=new ie,kd=new ie,Tu=new ie,u_=new ie,Au=new ie;class er extends ri{constructor(e=new Tr,t=new Xy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Tu.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],v=l[d];m!==0&&(kd.fromBufferAttribute(v,e),u?Tu.addScaledVector(kd,m):Tu.addScaledVector(kd.sub(t),m))}t.add(Tu)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yu.copy(r.boundingSphere),yu.applyMatrix4(l),Es.copy(e.ray).recast(e.near),!(yu.containsPoint(Es.origin)===!1&&(Es.intersectSphere(yu,l_)===null||Es.origin.distanceToSquared(l_)>(e.far-e.near)**2))&&(a_.copy(l).invert(),Es.copy(e.ray).applyMatrix4(a_),!(r.boundingBox!==null&&Es.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,g=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,w=g.length;M<w;M++){const y=g[M],S=u[y.materialIndex],R=Math.max(y.start,x.start),b=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let P=R,F=b;P<F;P+=3){const L=f.getX(P),B=f.getX(P+1),T=f.getX(P+2);o=wu(this,S,e,r,h,m,v,L,B,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),w=Math.min(f.count,x.start+x.count);for(let y=M,S=w;y<S;y+=3){const R=f.getX(y),b=f.getX(y+1),P=f.getX(y+2);o=wu(this,u,e,r,h,m,v,R,b,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,w=g.length;M<w;M++){const y=g[M],S=u[y.materialIndex],R=Math.max(y.start,x.start),b=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let P=R,F=b;P<F;P+=3){const L=P,B=P+1,T=P+2;o=wu(this,S,e,r,h,m,v,L,B,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),w=Math.min(d.count,x.start+x.count);for(let y=M,S=w;y<S;y+=3){const R=y,b=y+1,P=y+2;o=wu(this,u,e,r,h,m,v,R,b,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function XC(n,e,t,r,o,l,u,f){let d;if(e.side===$n?d=r.intersectTriangle(u,l,o,!0,f):d=r.intersectTriangle(o,l,u,e.side===is,f),d===null)return null;Au.copy(f),Au.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Au);return h<t.near||h>t.far?null:{distance:h,point:Au.clone(),object:n}}function wu(n,e,t,r,o,l,u,f,d,h){n.getVertexPosition(f,Su),n.getVertexPosition(d,Mu),n.getVertexPosition(h,Eu);const m=XC(n,e,t,r,Su,Mu,Eu,u_);if(m){const v=new ie;Di.getBarycoord(u_,Su,Mu,Eu,v),o&&(m.uv=Di.getInterpolatedAttribute(o,f,d,h,v,new Nt)),l&&(m.uv1=Di.getInterpolatedAttribute(l,f,d,h,v,new Nt)),u&&(m.normal=Di.getInterpolatedAttribute(u,f,d,h,v,new ie),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const g={a:f,b:d,c:h,normal:new ie,materialIndex:0};Di.getNormal(Su,Mu,Eu,g.normal),m.face=g,m.barycoord=v}return m}class jC extends Vn{constructor(e=null,t=1,r=1,o,l,u,f,d,h=wn,m=wn,v,g){super(null,u,f,d,h,m,o,l,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vd=new ie,YC=new ie,qC=new ct;class ws{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Vd.subVectors(r,t).cross(YC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Vd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||qC.getNormalMatrix(e),o=this.coplanarPoint(Vd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new Yp,KC=new Nt(.5,.5),Cu=new ie;class jy{constructor(e=new ws,t=new ws,r=new ws,o=new ws,l=new ws,u=new ws){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Yi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],d=l[2],h=l[3],m=l[4],v=l[5],g=l[6],x=l[7],M=l[8],w=l[9],y=l[10],S=l[11],R=l[12],b=l[13],P=l[14],F=l[15];if(o[0].setComponents(h-u,x-m,S-M,F-R).normalize(),o[1].setComponents(h+u,x+m,S+M,F+R).normalize(),o[2].setComponents(h+f,x+v,S+w,F+b).normalize(),o[3].setComponents(h-f,x-v,S-w,F-b).normalize(),r)o[4].setComponents(d,g,y,P).normalize(),o[5].setComponents(h-d,x-g,S-y,F-P).normalize();else if(o[4].setComponents(h-d,x-g,S-y,F-P).normalize(),t===Yi)o[5].setComponents(h+d,x+g,S+y,F+P).normalize();else if(t===rc)o[5].setComponents(d,g,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);const t=KC.distanceTo(e.center);return Ts.radius=.7071067811865476+t,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Cu.x=o.normal.x>0?e.max.x:e.min.x,Cu.y=o.normal.y>0?e.max.y:e.min.y,Cu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Cu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yy extends Vn{constructor(e=[],t=Us,r,o,l,u,f,d,h,m){super(e,t,r,o,l,u,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uo extends Vn{constructor(e,t,r=Ji,o,l,u,f=wn,d=wn,h,m=Er,v=1){if(m!==Er&&m!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,o,l,u,f,d,m,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $C extends Uo{constructor(e,t=Ji,r=Us,o,l,u=wn,f=wn,d,h=Er){const m={width:e,height:e,depth:1},v=[m,m,m,m,m,m];super(e,e,t,r,o,l,u,f,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qy extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class el extends Tr{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],v=[];let g=0,x=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Sr(h,3)),this.setAttribute("normal",new Sr(m,3)),this.setAttribute("uv",new Sr(v,2));function M(w,y,S,R,b,P,F,L,B,T,N){const k=P/B,O=F/T,q=P/2,le=F/2,ce=L/2,H=B+1,Z=T+1;let Y=0,X=0;const ne=new ie;for(let re=0;re<Z;re++){const U=re*O-le;for(let Q=0;Q<H;Q++){const Fe=Q*k-q;ne[w]=Fe*R,ne[y]=U*b,ne[S]=ce,h.push(ne.x,ne.y,ne.z),ne[w]=0,ne[y]=0,ne[S]=L>0?1:-1,m.push(ne.x,ne.y,ne.z),v.push(Q/B),v.push(1-re/T),Y+=1}}for(let re=0;re<T;re++)for(let U=0;U<B;U++){const Q=g+U+H*re,Fe=g+U+H*(re+1),He=g+(U+1)+H*(re+1),Ne=g+(U+1)+H*re;d.push(Q,Fe,Ne),d.push(Fe,He,Ne),X+=6}f.addGroup(x,X,N),x+=X,g+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class tl extends Tr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,m=d+1,v=e/f,g=t/d,x=[],M=[],w=[],y=[];for(let S=0;S<m;S++){const R=S*g-u;for(let b=0;b<h;b++){const P=b*v-l;M.push(P,-R,0),w.push(0,0,1),y.push(b/f),y.push(1-S/d)}}for(let S=0;S<d;S++)for(let R=0;R<f;R++){const b=R+h*S,P=R+h*(S+1),F=R+1+h*(S+1),L=R+1+h*S;x.push(b,P,L),x.push(P,F,L)}this.setIndex(x),this.setAttribute("position",new Sr(M,3)),this.setAttribute("normal",new Sr(w,3)),this.setAttribute("uv",new Sr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.widthSegments,e.heightSegments)}}function Fo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];if(c_(o))o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(c_(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function On(n){const e={};for(let t=0;t<n.length;t++){const r=Fo(n[t]);for(const o in r)e[o]=r[o]}return e}function c_(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ZC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ky(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const QC={clone:Fo,merge:On};var JC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends dc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JC,this.fragmentShader=eR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=ZC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class tR extends Ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nR extends dc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iR extends dc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ru=new ie,bu=new Vo,zi=new ie;class qp extends ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ru,bu,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ru,bu,zi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ru,bu,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ru,bu,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Kr=new ie,f_=new Nt,d_=new Nt;class Pi extends qp{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sp*2*Math.atan(Math.tan(vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z),Kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z)}getViewSize(e,t){return this.getViewBounds(e,f_,d_),t.subVectors(d_,f_)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vd*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class $y extends qp{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mo=-90,Eo=1;class rR extends ri{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Pi(Mo,Eo,e,t);o.layers=this.layers,this.add(o);const l=new Pi(Mo,Eo,e,t);l.layers=this.layers,this.add(l);const u=new Pi(Mo,Eo,e,t);u.layers=this.layers,this.add(u);const f=new Pi(Mo,Eo,e,t);f.layers=this.layers,this.add(f);const d=new Pi(Mo,Eo,e,t);d.layers=this.layers,this.add(d);const h=new Pi(Mo,Eo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,d]=t;for(const h of t)this.remove(h);if(e===Yi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===rc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,h,m]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(v,g,x),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class sR extends Pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Jp=class Jp{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Jp.prototype.isMatrix2=!0;let h_=Jp;function p_(n,e,t,r){const o=oR(r);switch(t){case Fy:return n*e;case By:return n*e/o.components*o.byteLength;case zp:return n*e/o.components*o.byteLength;case Fs:return n*e*2/o.components*o.byteLength;case Hp:return n*e*2/o.components*o.byteLength;case Oy:return n*e*3/o.components*o.byteLength;case Li:return n*e*4/o.components*o.byteLength;case Gp:return n*e*4/o.components*o.byteLength;case Vu:case zu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hu:case Gu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bh:case Dh:return Math.max(n,16)*Math.max(e,8)/4;case Rh:case Ph:return Math.max(n,8)*Math.max(e,8)/2;case Lh:case Nh:case Uh:case Fh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ih:case ec:case Oh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case zh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case jh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $h:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Qh:case Jh:case ep:return Math.ceil(n/4)*Math.ceil(e/4)*16;case tp:case np:return Math.ceil(n/4)*Math.ceil(e/4)*8;case tc:case ip:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function oR(n){switch(n){case pi:case Ly:return{byteLength:1,components:1};case ja:case Ny:case Mr:return{byteLength:2,components:1};case kp:case Vp:return{byteLength:2,components:4};case Ji:case Bp:case ji:return{byteLength:4,components:1};case Iy:case Uy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Op}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Op);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zy(){let n=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function aR(n){const e=new WeakMap;function t(f,d){const h=f.array,m=f.usage,v=h.byteLength,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,h,m),f.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=n.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,d,h){const m=d.array,v=d.updateRanges;if(n.bindBuffer(h,f),v.length===0)n.bufferSubData(h,0,m);else{v.sort((x,M)=>x.start-M.start);let g=0;for(let x=1;x<v.length;x++){const M=v[g],w=v[x];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++g,v[g]=w)}v.length=g+1;for(let x=0,M=v.length;x<M;x++){const w=v[x];n.bufferSubData(h,w.start*m.BYTES_PER_ELEMENT,m,w.start,w.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(n.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:l,update:u}}var lR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,vR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_R=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,SR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,MR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ER=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,TR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,RR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,PR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,DR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,LR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,IR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BR="gl_FragColor = linearToOutputTexel( gl_FragColor );",kR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,HR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,XR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$R=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,eb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ib=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ob=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ab=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ub=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,db=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_b=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ab=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Db=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ib=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ub=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ob=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Bb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_P=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,EP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,CP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,PP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,NP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:lR,alphahash_pars_fragment:uR,alphamap_fragment:cR,alphamap_pars_fragment:fR,alphatest_fragment:dR,alphatest_pars_fragment:hR,aomap_fragment:pR,aomap_pars_fragment:mR,batching_pars_vertex:gR,batching_vertex:vR,begin_vertex:_R,beginnormal_vertex:xR,bsdfs:yR,iridescence_fragment:SR,bumpmap_pars_fragment:MR,clipping_planes_fragment:ER,clipping_planes_pars_fragment:TR,clipping_planes_pars_vertex:AR,clipping_planes_vertex:wR,color_fragment:CR,color_pars_fragment:RR,color_pars_vertex:bR,color_vertex:PR,common:DR,cube_uv_reflection_fragment:LR,defaultnormal_vertex:NR,displacementmap_pars_vertex:IR,displacementmap_vertex:UR,emissivemap_fragment:FR,emissivemap_pars_fragment:OR,colorspace_fragment:BR,colorspace_pars_fragment:kR,envmap_fragment:VR,envmap_common_pars_fragment:zR,envmap_pars_fragment:HR,envmap_pars_vertex:GR,envmap_physical_pars_fragment:eb,envmap_vertex:WR,fog_vertex:XR,fog_pars_vertex:jR,fog_fragment:YR,fog_pars_fragment:qR,gradientmap_pars_fragment:KR,lightmap_pars_fragment:$R,lights_lambert_fragment:ZR,lights_lambert_pars_fragment:QR,lights_pars_begin:JR,lights_toon_fragment:tb,lights_toon_pars_fragment:nb,lights_phong_fragment:ib,lights_phong_pars_fragment:rb,lights_physical_fragment:sb,lights_physical_pars_fragment:ob,lights_fragment_begin:ab,lights_fragment_maps:lb,lights_fragment_end:ub,lightprobes_pars_fragment:cb,logdepthbuf_fragment:fb,logdepthbuf_pars_fragment:db,logdepthbuf_pars_vertex:hb,logdepthbuf_vertex:pb,map_fragment:mb,map_pars_fragment:gb,map_particle_fragment:vb,map_particle_pars_fragment:_b,metalnessmap_fragment:xb,metalnessmap_pars_fragment:yb,morphinstance_vertex:Sb,morphcolor_vertex:Mb,morphnormal_vertex:Eb,morphtarget_pars_vertex:Tb,morphtarget_vertex:Ab,normal_fragment_begin:wb,normal_fragment_maps:Cb,normal_pars_fragment:Rb,normal_pars_vertex:bb,normal_vertex:Pb,normalmap_pars_fragment:Db,clearcoat_normal_fragment_begin:Lb,clearcoat_normal_fragment_maps:Nb,clearcoat_pars_fragment:Ib,iridescence_pars_fragment:Ub,opaque_fragment:Fb,packing:Ob,premultiplied_alpha_fragment:Bb,project_vertex:kb,dithering_fragment:Vb,dithering_pars_fragment:zb,roughnessmap_fragment:Hb,roughnessmap_pars_fragment:Gb,shadowmap_pars_fragment:Wb,shadowmap_pars_vertex:Xb,shadowmap_vertex:jb,shadowmask_pars_fragment:Yb,skinbase_vertex:qb,skinning_pars_vertex:Kb,skinning_vertex:$b,skinnormal_vertex:Zb,specularmap_fragment:Qb,specularmap_pars_fragment:Jb,tonemapping_fragment:eP,tonemapping_pars_fragment:tP,transmission_fragment:nP,transmission_pars_fragment:iP,uv_pars_fragment:rP,uv_pars_vertex:sP,uv_vertex:oP,worldpos_vertex:aP,background_vert:lP,background_frag:uP,backgroundCube_vert:cP,backgroundCube_frag:fP,cube_vert:dP,cube_frag:hP,depth_vert:pP,depth_frag:mP,distance_vert:gP,distance_frag:vP,equirect_vert:_P,equirect_frag:xP,linedashed_vert:yP,linedashed_frag:SP,meshbasic_vert:MP,meshbasic_frag:EP,meshlambert_vert:TP,meshlambert_frag:AP,meshmatcap_vert:wP,meshmatcap_frag:CP,meshnormal_vert:RP,meshnormal_frag:bP,meshphong_vert:PP,meshphong_frag:DP,meshphysical_vert:LP,meshphysical_frag:NP,meshtoon_vert:IP,meshtoon_frag:UP,points_vert:FP,points_frag:OP,shadow_vert:BP,shadow_frag:kP,sprite_vert:VP,sprite_frag:zP},Le={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Xi={basic:{uniforms:On([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:On([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:On([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:On([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:On([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ft(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:On([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:On([Le.points,Le.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:On([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:On([Le.common,Le.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:On([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:On([Le.sprite,Le.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:On([Le.common,Le.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:On([Le.lights,Le.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Xi.physical={uniforms:On([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Pu={r:0,b:0,g:0},HP=new hn,Qy=new ct;Qy.set(-1,0,0,0,1,0,0,0,1);function GP(n,e,t,r,o,l){const u=new Ft(0);let f=o===!0?0:1,d,h,m=null,v=0,g=null;function x(R){let b=R.isScene===!0?R.background:null;if(b&&b.isTexture){const P=R.backgroundBlurriness>0;b=e.get(b,P)}return b}function M(R){let b=!1;const P=x(R);P===null?y(u,f):P&&P.isColor&&(y(P,1),b=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?t.buffers.color.setClear(0,0,0,1,l):F==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function w(R,b){const P=x(b);P&&(P.isCubeTexture||P.mapping===fc)?(h===void 0&&(h=new er(new el(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Fo(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=P,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(HP.makeRotationFromEuler(b.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Qy),h.material.toneMapped=xt.getTransfer(P.colorSpace)!==Lt,(m!==P||v!==P.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,m=P,v=P.version,g=n.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new er(new tl(2,2),new Ii({name:"BackgroundMaterial",uniforms:Fo(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.toneMapped=xt.getTransfer(P.colorSpace)!==Lt,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(m!==P||v!==P.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,m=P,v=P.version,g=n.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function y(R,b){R.getRGB(Pu,Ky(n)),t.buffers.color.setClear(Pu.r,Pu.g,Pu.b,b,l)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,b=1){u.set(R),f=b,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,y(u,f)},render:M,addToRenderList:w,dispose:S}}function WP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function f(O,q,le,ce,H){let Z=!1;const Y=v(O,ce,le,q);l!==Y&&(l=Y,h(l.object)),Z=x(O,ce,le,H),Z&&M(O,ce,le,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,P(O,q,le,ce),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function d(){return n.createVertexArray()}function h(O){return n.bindVertexArray(O)}function m(O){return n.deleteVertexArray(O)}function v(O,q,le,ce){const H=ce.wireframe===!0;let Z=r[q.id];Z===void 0&&(Z={},r[q.id]=Z);const Y=O.isInstancedMesh===!0?O.id:0;let X=Z[Y];X===void 0&&(X={},Z[Y]=X);let ne=X[le.id];ne===void 0&&(ne={},X[le.id]=ne);let re=ne[H];return re===void 0&&(re=g(d()),ne[H]=re),re}function g(O){const q=[],le=[],ce=[];for(let H=0;H<t;H++)q[H]=0,le[H]=0,ce[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:le,attributeDivisors:ce,object:O,attributes:{},index:null}}function x(O,q,le,ce){const H=l.attributes,Z=q.attributes;let Y=0;const X=le.getAttributes();for(const ne in X)if(X[ne].location>=0){const U=H[ne];let Q=Z[ne];if(Q===void 0&&(ne==="instanceMatrix"&&O.instanceMatrix&&(Q=O.instanceMatrix),ne==="instanceColor"&&O.instanceColor&&(Q=O.instanceColor)),U===void 0||U.attribute!==Q||Q&&U.data!==Q.data)return!0;Y++}return l.attributesNum!==Y||l.index!==ce}function M(O,q,le,ce){const H={},Z=q.attributes;let Y=0;const X=le.getAttributes();for(const ne in X)if(X[ne].location>=0){let U=Z[ne];U===void 0&&(ne==="instanceMatrix"&&O.instanceMatrix&&(U=O.instanceMatrix),ne==="instanceColor"&&O.instanceColor&&(U=O.instanceColor));const Q={};Q.attribute=U,U&&U.data&&(Q.data=U.data),H[ne]=Q,Y++}l.attributes=H,l.attributesNum=Y,l.index=ce}function w(){const O=l.newAttributes;for(let q=0,le=O.length;q<le;q++)O[q]=0}function y(O){S(O,0)}function S(O,q){const le=l.newAttributes,ce=l.enabledAttributes,H=l.attributeDivisors;le[O]=1,ce[O]===0&&(n.enableVertexAttribArray(O),ce[O]=1),H[O]!==q&&(n.vertexAttribDivisor(O,q),H[O]=q)}function R(){const O=l.newAttributes,q=l.enabledAttributes;for(let le=0,ce=q.length;le<ce;le++)q[le]!==O[le]&&(n.disableVertexAttribArray(le),q[le]=0)}function b(O,q,le,ce,H,Z,Y){Y===!0?n.vertexAttribIPointer(O,q,le,H,Z):n.vertexAttribPointer(O,q,le,ce,H,Z)}function P(O,q,le,ce){w();const H=ce.attributes,Z=le.getAttributes(),Y=q.defaultAttributeValues;for(const X in Z){const ne=Z[X];if(ne.location>=0){let re=H[X];if(re===void 0&&(X==="instanceMatrix"&&O.instanceMatrix&&(re=O.instanceMatrix),X==="instanceColor"&&O.instanceColor&&(re=O.instanceColor)),re!==void 0){const U=re.normalized,Q=re.itemSize,Fe=e.get(re);if(Fe===void 0)continue;const He=Fe.buffer,Ne=Fe.type,ae=Fe.bytesPerElement,ye=Ne===n.INT||Ne===n.UNSIGNED_INT||re.gpuType===Bp;if(re.isInterleavedBufferAttribute){const me=re.data,Ie=me.stride,Qe=re.offset;if(me.isInstancedInterleavedBuffer){for(let et=0;et<ne.locationSize;et++)S(ne.location+et,me.meshPerAttribute);O.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let et=0;et<ne.locationSize;et++)y(ne.location+et);n.bindBuffer(n.ARRAY_BUFFER,He);for(let et=0;et<ne.locationSize;et++)b(ne.location+et,Q/ne.locationSize,Ne,U,Ie*ae,(Qe+Q/ne.locationSize*et)*ae,ye)}else{if(re.isInstancedBufferAttribute){for(let me=0;me<ne.locationSize;me++)S(ne.location+me,re.meshPerAttribute);O.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let me=0;me<ne.locationSize;me++)y(ne.location+me);n.bindBuffer(n.ARRAY_BUFFER,He);for(let me=0;me<ne.locationSize;me++)b(ne.location+me,Q/ne.locationSize,Ne,U,Q*ae,Q/ne.locationSize*me*ae,ye)}}else if(Y!==void 0){const U=Y[X];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(ne.location,U);break;case 3:n.vertexAttrib3fv(ne.location,U);break;case 4:n.vertexAttrib4fv(ne.location,U);break;default:n.vertexAttrib1fv(ne.location,U)}}}}R()}function F(){N();for(const O in r){const q=r[O];for(const le in q){const ce=q[le];for(const H in ce){const Z=ce[H];for(const Y in Z)m(Z[Y].object),delete Z[Y];delete ce[H]}}delete r[O]}}function L(O){if(r[O.id]===void 0)return;const q=r[O.id];for(const le in q){const ce=q[le];for(const H in ce){const Z=ce[H];for(const Y in Z)m(Z[Y].object),delete Z[Y];delete ce[H]}}delete r[O.id]}function B(O){for(const q in r){const le=r[q];for(const ce in le){const H=le[ce];if(H[O.id]===void 0)continue;const Z=H[O.id];for(const Y in Z)m(Z[Y].object),delete Z[Y];delete H[O.id]}}}function T(O){for(const q in r){const le=r[q],ce=O.isInstancedMesh===!0?O.id:0,H=le[ce];if(H!==void 0){for(const Z in H){const Y=H[Z];for(const X in Y)m(Y[X].object),delete Y[X];delete H[Z]}delete le[ce],Object.keys(le).length===0&&delete r[q]}}}function N(){k(),u=!0,l!==o&&(l=o,h(l.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:N,resetDefaultState:k,dispose:F,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:y,disableUnusedAttributes:R}}function XP(n,e,t){let r;function o(d){r=d}function l(d,h){n.drawArrays(r,d,h),t.update(h,r,1)}function u(d,h,m){m!==0&&(n.drawArraysInstanced(r,d,h,m),t.update(h,r,m))}function f(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,m);let g=0;for(let x=0;x<m;x++)g+=h[x];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function jP(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==Li&&r.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(B){const T=B===Mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==pi&&r.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ji&&!T)}function d(B){if(B==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(st("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),P=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=n.getParameter(n.MAX_SAMPLES),L=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:R,maxVaryings:b,maxFragmentUniforms:P,maxSamples:F,samples:L}}function YP(n){const e=this;let t=null,r=0,o=!1,l=!1;const u=new ws,f=new ct,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const x=v.length!==0||g||r!==0||o;return o=g,r=v.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,g){t=m(v,g,0)},this.setState=function(v,g,x){const M=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,S=n.get(v);if(!o||M===null||M.length===0||l&&!y)l?m(null):h();else{const R=l?0:r,b=R*4;let P=S.clippingState||null;d.value=P,P=m(M,g,b,x);for(let F=0;F!==b;++F)P[F]=t[F];S.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=R}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(v,g,x,M){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=d.value,M!==!0||y===null){const S=x+w*4,R=g.matrixWorldInverse;f.getNormalMatrix(R),(y===null||y.length<S)&&(y=new Float32Array(S));for(let b=0,P=x;b!==w;++b,P+=4)u.copy(v[b]).applyMatrix4(R,f),u.normal.toArray(y,P),y[P+3]=u.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const es=4,m_=[.125,.215,.35,.446,.526,.582],Rs=20,qP=256,La=new $y,g_=new Ft;let zd=null,Hd=0,Gd=0,Wd=!1;const KP=new ie;class v_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=KP}=l;zd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zd,Hd,Gd),this._renderer.xr.enabled=Wd,e.scissorTest=!1,To(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Mr,format:Li,colorSpace:nc,depthBuffer:!1},o=__(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=__(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$P(l)),this._blurMaterial=QP(l,e,t),this._ggxMaterial=ZP(l,e,t)}return o}_compileMaterial(e){const t=new er(new Tr,e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,r,o,l){const d=new Pi(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,x=v.toneMapping;v.getClearColor(g_),v.toneMapping=Ki,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new er(new el,new Xy({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let S=!1;const R=e.background;R?R.isColor&&(y.color.copy(R),e.background=null,S=!0):(y.color.copy(g_),S=!0);for(let b=0;b<6;b++){const P=b%3;P===0?(d.up.set(0,h[b],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[b],l.y,l.z)):P===1?(d.up.set(0,0,h[b]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[b],l.z)):(d.up.set(0,h[b],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[b]));const F=this._cubeSize;To(o,P*F,b>2?F:0,F,F),v.setRenderTarget(o),S&&v.render(w,d),v.render(e,d)}v.toneMapping=x,v.autoClear=g,e.background=R}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Us||e.mapping===Io;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=y_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=x_());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;To(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,La)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const d=u.uniforms,h=r/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-m*m),g=0+h*1.25,x=v*g,{_lodMax:M}=this,w=this._sizeLods[r],y=3*w*(r>M-es?r-M+es:0),S=4*(this._cubeSize-w);d.envMap.value=e.texture,d.roughness.value=x,d.mipInt.value=M-t,To(l,y,S,3*w,2*w),o.setRenderTarget(l),o.render(f,La),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=M-r,To(e,y,S,3*w,2*w),o.setRenderTarget(e),o.render(f,La)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const m=3,v=this._lodMeshes[o];v.material=h;const g=h.uniforms,x=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*Rs-1),w=l/M,y=isFinite(l)?1+Math.floor(m*w):Rs;y>Rs&&st(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Rs}`);const S=[];let R=0;for(let B=0;B<Rs;++B){const T=B/w,N=Math.exp(-T*T/2);S.push(N),B===0?R+=N:B<y&&(R+=2*N)}for(let B=0;B<S.length;B++)S[B]=S[B]/R;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:b}=this;g.dTheta.value=M,g.mipInt.value=b-r;const P=this._sizeLods[o],F=3*P*(o>b-es?o-b+es:0),L=4*(this._cubeSize-P);To(t,F,L,3*P,2*P),d.setRenderTarget(t),d.render(v,La)}}function $P(n){const e=[],t=[],r=[];let o=n;const l=n-es+1+m_.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let d=1/f;u>n-es?d=m_[u-n+es-1]:u===0&&(d=0),t.push(d);const h=1/(f-2),m=-h,v=1+h,g=[m,m,v,m,v,v,m,m,v,v,m,v],x=6,M=6,w=3,y=2,S=1,R=new Float32Array(w*M*x),b=new Float32Array(y*M*x),P=new Float32Array(S*M*x);for(let L=0;L<x;L++){const B=L%3*2/3-1,T=L>2?0:-1,N=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];R.set(N,w*M*L),b.set(g,y*M*L);const k=[L,L,L,L,L,L];P.set(k,S*M*L)}const F=new Tr;F.setAttribute("position",new Zi(R,w)),F.setAttribute("uv",new Zi(b,y)),F.setAttribute("faceIndex",new Zi(P,S)),r.push(new er(F,null)),o>es&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function __(n,e,t){const r=new $i(n,e,t);return r.texture.mapping=fc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function To(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function ZP(n,e,t){return new Ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qP,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function QP(n,e,t){const r=new Float32Array(Rs),o=new ie(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function x_(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function y_(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Jy extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Yy(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new el(5,5,5),l=new Ii({name:"CubemapFromEquirect",uniforms:Fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:$n,blending:xr});l.uniforms.tEquirect.value=t;const u=new er(o,l),f=t.minFilter;return t.minFilter===Ds&&(t.minFilter=Nn),new rR(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function JP(n){let e=new WeakMap,t=new WeakMap,r=null;function o(g,x=!1){return g==null?null:x?u(g):l(g)}function l(g){if(g&&g.isTexture){const x=g.mapping;if(x===pd||x===md)if(e.has(g)){const M=e.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const w=new Jy(M.height);return w.fromEquirectangularTexture(n,g),e.set(g,w),g.addEventListener("dispose",h),f(w.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const x=g.mapping,M=x===pd||x===md,w=x===Us||x===Io;if(M||w){let y=t.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return r===null&&(r=new v_(n)),y=M?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const R=g.image;return M&&R&&R.height>0||w&&R&&d(R)?(r===null&&(r=new v_(n)),y=M?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",m),y.texture):null}}}return g}function f(g,x){return x===pd?g.mapping=Us:x===md&&(g.mapping=Io),g}function d(g){let x=0;const M=6;for(let w=0;w<M;w++)g[w]!==void 0&&x++;return x===M}function h(g){const x=g.target;x.removeEventListener("dispose",h);const M=e.get(x);M!==void 0&&(e.delete(x),M.dispose())}function m(g){const x=g.target;x.removeEventListener("dispose",m);const M=t.get(x);M!==void 0&&(t.delete(x),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function e2(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&rp("WebGLRenderer: "+r+" extension not supported."),o}}}function t2(n,e,t,r){const o={},l=new WeakMap;function u(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",u),delete o[g.id];const x=l.get(g);x&&(e.remove(x),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(v,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function d(v){const g=v.attributes;for(const x in g)e.update(g[x],n.ARRAY_BUFFER)}function h(v){const g=[],x=v.index,M=v.attributes.position;let w=0;if(M===void 0)return;if(x!==null){const R=x.array;w=x.version;for(let b=0,P=R.length;b<P;b+=3){const F=R[b+0],L=R[b+1],B=R[b+2];g.push(F,L,L,B,B,F)}}else{const R=M.array;w=M.version;for(let b=0,P=R.length/3-1;b<P;b+=3){const F=b+0,L=b+1,B=b+2;g.push(F,L,L,B,B,F)}}const y=new(M.count>=65535?Wy:Gy)(g,1);y.version=w;const S=l.get(v);S&&e.remove(S),l.set(v,y)}function m(v){const g=l.get(v);if(g){const x=v.index;x!==null&&g.version<x.version&&h(v)}else h(v);return l.get(v)}return{get:f,update:d,getWireframeAttribute:m}}function n2(n,e,t){let r;function o(v){r=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function d(v,g){n.drawElements(r,g,l,v*u),t.update(g,r,1)}function h(v,g,x){x!==0&&(n.drawElementsInstanced(r,g,l,v*u,x),t.update(g,r,x))}function m(v,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,v,0,x);let w=0;for(let y=0;y<x;y++)w+=g[y];t.update(w,r,1)}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m}function i2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=f*(l/3);break;case n.LINES:t.lines+=f*(l/2);break;case n.LINE_STRIP:t.lines+=f*(l-1);break;case n.LINE_LOOP:t.lines+=f*l;break;case n.POINTS:t.points+=f*l;break;default:Et("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function r2(n,e,t){const r=new WeakMap,o=new sn;function l(u,f,d){const h=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let g=r.get(f);if(g===void 0||g.count!==v){let k=function(){T.dispose(),r.delete(f),f.removeEventListener("dispose",k)};var x=k;g!==void 0&&g.texture.dispose();const M=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let P=0;M===!0&&(P=1),w===!0&&(P=2),y===!0&&(P=3);let F=f.attributes.position.count*P,L=1;F>e.maxTextureSize&&(L=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const B=new Float32Array(F*L*4*v),T=new Vy(B,F,L,v);T.type=ji,T.needsUpdate=!0;const N=P*4;for(let O=0;O<v;O++){const q=S[O],le=R[O],ce=b[O],H=F*L*4*O;for(let Z=0;Z<q.count;Z++){const Y=Z*N;M===!0&&(o.fromBufferAttribute(q,Z),B[H+Y+0]=o.x,B[H+Y+1]=o.y,B[H+Y+2]=o.z,B[H+Y+3]=0),w===!0&&(o.fromBufferAttribute(le,Z),B[H+Y+4]=o.x,B[H+Y+5]=o.y,B[H+Y+6]=o.z,B[H+Y+7]=0),y===!0&&(o.fromBufferAttribute(ce,Z),B[H+Y+8]=o.x,B[H+Y+9]=o.y,B[H+Y+10]=o.z,B[H+Y+11]=ce.itemSize===4?o.w:1)}}g={count:v,texture:T,size:new Nt(F,L)},r.set(f,g),f.addEventListener("dispose",k)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let M=0;for(let y=0;y<h.length;y++)M+=h[y];const w=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",w),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:l}}function s2(n,e,t,r,o){let l=new WeakMap;function u(h){const m=o.render.frame,v=h.geometry,g=e.get(h,v);if(l.get(g)!==m&&(e.update(g),l.set(g,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==m&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),l.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return g}function f(){l=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),r.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:u,dispose:f}}const o2={[Ty]:"LINEAR_TONE_MAPPING",[Ay]:"REINHARD_TONE_MAPPING",[wy]:"CINEON_TONE_MAPPING",[Cy]:"ACES_FILMIC_TONE_MAPPING",[by]:"AGX_TONE_MAPPING",[Py]:"NEUTRAL_TONE_MAPPING",[Ry]:"CUSTOM_TONE_MAPPING"};function a2(n,e,t,r,o){const l=new $i(e,t,{type:n,depthBuffer:r,stencilBuffer:o,depthTexture:r?new Uo(e,t):void 0}),u=new $i(e,t,{type:Mr,depthBuffer:!1,stencilBuffer:!1}),f=new Tr;f.setAttribute("position",new Sr([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Sr([0,2,0,0,2,0],2));const d=new tR({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new er(f,d),m=new $y(-1,1,1,-1,0,1);let v=null,g=null,x=!1,M,w=null,y=[],S=!1;this.setSize=function(R,b){l.setSize(R,b),u.setSize(R,b);for(let P=0;P<y.length;P++){const F=y[P];F.setSize&&F.setSize(R,b)}},this.setEffects=function(R){y=R,S=y.length>0&&y[0].isRenderPass===!0;const b=l.width,P=l.height;for(let F=0;F<y.length;F++){const L=y[F];L.setSize&&L.setSize(b,P)}},this.begin=function(R,b){if(x||R.toneMapping===Ki&&y.length===0)return!1;if(w=b,b!==null){const P=b.width,F=b.height;(l.width!==P||l.height!==F)&&this.setSize(P,F)}return S===!1&&R.setRenderTarget(l),M=R.toneMapping,R.toneMapping=Ki,!0},this.hasRenderPass=function(){return S},this.end=function(R,b){R.toneMapping=M,x=!0;let P=l,F=u;for(let L=0;L<y.length;L++){const B=y[L];if(B.enabled!==!1&&(B.render(R,F,P,b),B.needsSwap!==!1)){const T=P;P=F,F=T}}if(v!==R.outputColorSpace||g!==R.toneMapping){v=R.outputColorSpace,g=R.toneMapping,d.defines={},xt.getTransfer(v)===Lt&&(d.defines.SRGB_TRANSFER="");const L=o2[g];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=P.texture,R.setRenderTarget(w),R.render(h,m),w=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),d.dispose()}}const eS=new Vn,op=new Uo(1,1),tS=new Vy,nS=new DC,iS=new Yy,S_=[],M_=[],E_=new Float32Array(16),T_=new Float32Array(9),A_=new Float32Array(4);function zo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=S_[o];if(l===void 0&&(l=new Float32Array(o),S_[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,n[u].toArray(l,f)}return l}function pn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function mn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function pc(n,e){let t=M_[e];t===void 0&&(t=new Int32Array(e),M_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function l2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function u2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2fv(this.addr,e),mn(t,e)}}function c2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;n.uniform3fv(this.addr,e),mn(t,e)}}function f2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4fv(this.addr,e),mn(t,e)}}function d2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;A_.set(r),n.uniformMatrix2fv(this.addr,!1,A_),mn(t,r)}}function h2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;T_.set(r),n.uniformMatrix3fv(this.addr,!1,T_),mn(t,r)}}function p2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;E_.set(r),n.uniformMatrix4fv(this.addr,!1,E_),mn(t,r)}}function m2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function g2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2iv(this.addr,e),mn(t,e)}}function v2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3iv(this.addr,e),mn(t,e)}}function _2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4iv(this.addr,e),mn(t,e)}}function x2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function y2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2uiv(this.addr,e),mn(t,e)}}function S2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3uiv(this.addr,e),mn(t,e)}}function M2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4uiv(this.addr,e),mn(t,e)}}function E2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(op.compareFunction=t.isReversedDepthBuffer()?Xp:Wp,l=op):l=eS,t.setTexture2D(e||l,o)}function T2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||nS,o)}function A2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||iS,o)}function w2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||tS,o)}function C2(n){switch(n){case 5126:return l2;case 35664:return u2;case 35665:return c2;case 35666:return f2;case 35674:return d2;case 35675:return h2;case 35676:return p2;case 5124:case 35670:return m2;case 35667:case 35671:return g2;case 35668:case 35672:return v2;case 35669:case 35673:return _2;case 5125:return x2;case 36294:return y2;case 36295:return S2;case 36296:return M2;case 35678:case 36198:case 36298:case 36306:case 35682:return E2;case 35679:case 36299:case 36307:return T2;case 35680:case 36300:case 36308:case 36293:return A2;case 36289:case 36303:case 36311:case 36292:return w2}}function R2(n,e){n.uniform1fv(this.addr,e)}function b2(n,e){const t=zo(e,this.size,2);n.uniform2fv(this.addr,t)}function P2(n,e){const t=zo(e,this.size,3);n.uniform3fv(this.addr,t)}function D2(n,e){const t=zo(e,this.size,4);n.uniform4fv(this.addr,t)}function L2(n,e){const t=zo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function N2(n,e){const t=zo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function I2(n,e){const t=zo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function U2(n,e){n.uniform1iv(this.addr,e)}function F2(n,e){n.uniform2iv(this.addr,e)}function O2(n,e){n.uniform3iv(this.addr,e)}function B2(n,e){n.uniform4iv(this.addr,e)}function k2(n,e){n.uniform1uiv(this.addr,e)}function V2(n,e){n.uniform2uiv(this.addr,e)}function z2(n,e){n.uniform3uiv(this.addr,e)}function H2(n,e){n.uniform4uiv(this.addr,e)}function G2(n,e,t){const r=this.cache,o=e.length,l=pc(t,o);pn(r,l)||(n.uniform1iv(this.addr,l),mn(r,l));let u;this.type===n.SAMPLER_2D_SHADOW?u=op:u=eS;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function W2(n,e,t){const r=this.cache,o=e.length,l=pc(t,o);pn(r,l)||(n.uniform1iv(this.addr,l),mn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||nS,l[u])}function X2(n,e,t){const r=this.cache,o=e.length,l=pc(t,o);pn(r,l)||(n.uniform1iv(this.addr,l),mn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||iS,l[u])}function j2(n,e,t){const r=this.cache,o=e.length,l=pc(t,o);pn(r,l)||(n.uniform1iv(this.addr,l),mn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||tS,l[u])}function Y2(n){switch(n){case 5126:return R2;case 35664:return b2;case 35665:return P2;case 35666:return D2;case 35674:return L2;case 35675:return N2;case 35676:return I2;case 5124:case 35670:return U2;case 35667:case 35671:return F2;case 35668:case 35672:return O2;case 35669:case 35673:return B2;case 5125:return k2;case 36294:return V2;case 36295:return z2;case 36296:return H2;case 35678:case 36198:case 36298:case 36306:case 35682:return G2;case 35679:case 36299:case 36307:return W2;case 35680:case 36300:case 36308:case 36293:return X2;case 36289:case 36303:case 36311:case 36292:return j2}}class q2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=C2(t.type)}}class K2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y2(t.type)}}class $2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Xd=/(\w+)(\])?(\[|\.)?/g;function w_(n,e){n.seq.push(e),n.map[e.id]=e}function Z2(n,e,t){const r=n.name,o=r.length;for(Xd.lastIndex=0;;){const l=Xd.exec(r),u=Xd.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===o){w_(t,h===void 0?new q2(f,n,e):new K2(f,n,e));break}else{let v=t.map[f];v===void 0&&(v=new $2(f),w_(t,v)),t=v}}}class Wu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),d=e.getUniformLocation(t,f.name);Z2(f,d,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function C_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const Q2=37297;let J2=0;function e3(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const R_=new ct;function t3(n){xt._getMatrix(R_,xt.workingColorSpace,n);const e=`mat3( ${R_.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case ic:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function b_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),l=(n.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+e3(n.getShaderSource(e),f)}else return l}function n3(n,e){const t=t3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const i3={[Ty]:"Linear",[Ay]:"Reinhard",[wy]:"Cineon",[Cy]:"ACESFilmic",[by]:"AgX",[Py]:"Neutral",[Ry]:"Custom"};function r3(n,e){const t=i3[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Du=new ie;function s3(){xt.getLuminanceCoefficients(Du);const n=Du.x.toFixed(4),e=Du.y.toFixed(4),t=Du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function a3(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function l3(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),u=l.name;let f=1;l.type===n.FLOAT_MAT2&&(f=2),l.type===n.FLOAT_MAT3&&(f=3),l.type===n.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:f}}return t}function Oa(n){return n!==""}function P_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function D_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const u3=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(n){return n.replace(u3,f3)}const c3=new Map;function f3(n,e){let t=pt[e];if(t===void 0){const r=c3.get(e);if(r!==void 0)t=pt[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ap(t)}const d3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L_(n){return n.replace(d3,h3)}function h3(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function N_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const p3={[ku]:"SHADOWMAP_TYPE_PCF",[Fa]:"SHADOWMAP_TYPE_VSM"};function m3(n){return p3[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const g3={[Us]:"ENVMAP_TYPE_CUBE",[Io]:"ENVMAP_TYPE_CUBE",[fc]:"ENVMAP_TYPE_CUBE_UV"};function v3(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":g3[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const _3={[Io]:"ENVMAP_MODE_REFRACTION"};function x3(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":_3[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const y3={[Ey]:"ENVMAP_BLENDING_MULTIPLY",[cC]:"ENVMAP_BLENDING_MIX",[fC]:"ENVMAP_BLENDING_ADD"};function S3(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":y3[n.combine]||"ENVMAP_BLENDING_NONE"}function M3(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function E3(n,e,t,r){const o=n.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=m3(t),h=v3(t),m=x3(t),v=S3(t),g=M3(t),x=o3(t),M=a3(l),w=o.createProgram();let y,S,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Oa).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Oa).join(`
`),S.length>0&&(S+=`
`)):(y=[N_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),S=[N_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?pt.tonemapping_pars_fragment:"",t.toneMapping!==Ki?r3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,n3("linearToOutputTexel",t.outputColorSpace),s3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oa).join(`
`)),u=ap(u),u=P_(u,t),u=D_(u,t),f=ap(f),f=P_(f,t),f=D_(f,t),u=L_(u),f=L_(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===Yv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const b=R+y+u,P=R+S+f,F=C_(o,o.VERTEX_SHADER,b),L=C_(o,o.FRAGMENT_SHADER,P);o.attachShader(w,F),o.attachShader(w,L),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function B(O){if(n.debug.checkShaderErrors){const q=o.getProgramInfoLog(w)||"",le=o.getShaderInfoLog(F)||"",ce=o.getShaderInfoLog(L)||"",H=q.trim(),Z=le.trim(),Y=ce.trim();let X=!0,ne=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,w,F,L);else{const re=b_(o,F,"vertex"),U=b_(o,L,"fragment");Et("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+H+`
`+re+`
`+U)}else H!==""?st("WebGLProgram: Program Info Log:",H):(Z===""||Y==="")&&(ne=!1);ne&&(O.diagnostics={runnable:X,programLog:H,vertexShader:{log:Z,prefix:y},fragmentShader:{log:Y,prefix:S}})}o.deleteShader(F),o.deleteShader(L),T=new Wu(o,w),N=l3(o,w)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let N;this.getAttributes=function(){return N===void 0&&B(this),N};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(w,Q2)),k},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J2++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=L,this}let T3=0;class A3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new w3(e),t.set(e,r)),r}}class w3{constructor(e){this.id=T3++,this.code=e,this.usedTimes=0}}function C3(n){return n===Fs||n===ec||n===tc}function R3(n,e,t,r,o,l){const u=new zy,f=new A3,d=new Set,h=[],m=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return d.add(T),T===0?"uv":`uv${T}`}function w(T,N,k,O,q,le){const ce=O.fog,H=q.geometry,Z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,Y=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,X=e.get(T.envMap||Z,Y),ne=X&&X.mapping===fc?X.image.height:null,re=x[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&st("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const U=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Q=U!==void 0?U.length:0;let Fe=0;H.morphAttributes.position!==void 0&&(Fe=1),H.morphAttributes.normal!==void 0&&(Fe=2),H.morphAttributes.color!==void 0&&(Fe=3);let He,Ne,ae,ye;if(re){const at=Xi[re];He=at.vertexShader,Ne=at.fragmentShader}else He=T.vertexShader,Ne=T.fragmentShader,f.update(T),ae=f.getVertexShaderID(T),ye=f.getFragmentShaderID(T);const me=n.getRenderTarget(),Ie=n.state.buffers.depth.getReversed(),Qe=q.isInstancedMesh===!0,et=q.isBatchedMesh===!0,kt=!!T.map,ft=!!T.matcap,Tt=!!X,It=!!T.aoMap,dt=!!T.lightMap,Zt=!!T.bumpMap,Vt=!!T.normalMap,yn=!!T.displacementMap,G=!!T.emissiveMap,zt=!!T.metalnessMap,ht=!!T.roughnessMap,Rt=T.anisotropy>0,De=T.clearcoat>0,Wt=T.dispersion>0,D=T.iridescence>0,E=T.sheen>0,K=T.transmission>0,he=Rt&&!!T.anisotropyMap,ge=De&&!!T.clearcoatMap,Me=De&&!!T.clearcoatNormalMap,Pe=De&&!!T.clearcoatRoughnessMap,fe=D&&!!T.iridescenceMap,pe=D&&!!T.iridescenceThicknessMap,Ue=E&&!!T.sheenColorMap,Be=E&&!!T.sheenRoughnessMap,we=!!T.specularMap,Ee=!!T.specularColorMap,it=!!T.specularIntensityMap,ot=K&&!!T.transmissionMap,mt=K&&!!T.thicknessMap,z=!!T.gradientMap,Ae=!!T.alphaMap,de=T.alphaTest>0,Oe=!!T.alphaHash,Re=!!T.extensions;let ve=Ki;T.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ve=n.toneMapping);const je={shaderID:re,shaderType:T.type,shaderName:T.name,vertexShader:He,fragmentShader:Ne,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:et,batchingColor:et&&q._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&q.instanceColor!==null,instancingMorph:Qe&&q.morphTexture!==null,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:kt,matcap:ft,envMap:Tt,envMapMode:Tt&&X.mapping,envMapCubeUVHeight:ne,aoMap:It,lightMap:dt,bumpMap:Zt,normalMap:Vt,displacementMap:yn,emissiveMap:G,normalMapObjectSpace:Vt&&T.normalMapType===pC,normalMapTangentSpace:Vt&&T.normalMapType===Wv,packedNormalMap:Vt&&T.normalMapType===Wv&&C3(T.normalMap.format),metalnessMap:zt,roughnessMap:ht,anisotropy:Rt,anisotropyMap:he,clearcoat:De,clearcoatMap:ge,clearcoatNormalMap:Me,clearcoatRoughnessMap:Pe,dispersion:Wt,iridescence:D,iridescenceMap:fe,iridescenceThicknessMap:pe,sheen:E,sheenColorMap:Ue,sheenRoughnessMap:Be,specularMap:we,specularColorMap:Ee,specularIntensityMap:it,transmission:K,transmissionMap:ot,thicknessMap:mt,gradientMap:z,opaque:T.transparent===!1&&T.blending===bo&&T.alphaToCoverage===!1,alphaMap:Ae,alphaTest:de,alphaHash:Oe,combine:T.combine,mapUv:kt&&M(T.map.channel),aoMapUv:It&&M(T.aoMap.channel),lightMapUv:dt&&M(T.lightMap.channel),bumpMapUv:Zt&&M(T.bumpMap.channel),normalMapUv:Vt&&M(T.normalMap.channel),displacementMapUv:yn&&M(T.displacementMap.channel),emissiveMapUv:G&&M(T.emissiveMap.channel),metalnessMapUv:zt&&M(T.metalnessMap.channel),roughnessMapUv:ht&&M(T.roughnessMap.channel),anisotropyMapUv:he&&M(T.anisotropyMap.channel),clearcoatMapUv:ge&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Me&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&M(T.sheenRoughnessMap.channel),specularMapUv:we&&M(T.specularMap.channel),specularColorMapUv:Ee&&M(T.specularColorMap.channel),specularIntensityMapUv:it&&M(T.specularIntensityMap.channel),transmissionMapUv:ot&&M(T.transmissionMap.channel),thicknessMapUv:mt&&M(T.thicknessMap.channel),alphaMapUv:Ae&&M(T.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Vt||Rt),vertexNormals:!!H.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!H.attributes.uv&&(kt||Ae),fog:!!ce,useFog:T.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||H.attributes.normal===void 0&&Vt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ie,skinning:q.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Fe,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:le.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:ve,decodeVideoTexture:kt&&T.map.isVideoTexture===!0&&xt.getTransfer(T.map.colorSpace)===Lt,decodeVideoTextureEmissive:G&&T.emissiveMap.isVideoTexture===!0&&xt.getTransfer(T.emissiveMap.colorSpace)===Lt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===vr,flipSided:T.side===$n,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Re&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&T.extensions.multiDraw===!0||et)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return je.vertexUv1s=d.has(1),je.vertexUv2s=d.has(2),je.vertexUv3s=d.has(3),d.clear(),je}function y(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)N.push(k),N.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(S(N,T),R(N,T),N.push(n.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function S(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function R(T,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),T.push(u.mask)}function b(T){const N=x[T.type];let k;if(N){const O=Xi[N];k=QC.clone(O.uniforms)}else k=T.uniforms;return k}function P(T,N){let k=m.get(N);return k!==void 0?++k.usedTimes:(k=new E3(n,N,T,o),h.push(k),m.set(N,k)),k}function F(T){if(--T.usedTimes===0){const N=h.indexOf(T);h[N]=h[h.length-1],h.pop(),m.delete(T.cacheKey),T.destroy()}}function L(T){f.remove(T)}function B(){f.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:b,acquireProgram:P,releaseProgram:F,releaseShaderCache:L,programs:h,dispose:B}}function b3(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let f=n.get(u);return f===void 0&&(f={},n.set(u,f)),f}function r(u){n.delete(u)}function o(u,f,d){n.get(u)[f]=d}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function P3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function I_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function U_(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function f(g,x,M,w,y,S){let R=n[e];return R===void 0?(R={id:g.id,object:g,geometry:x,material:M,materialVariant:u(g),groupOrder:w,renderOrder:g.renderOrder,z:y,group:S},n[e]=R):(R.id=g.id,R.object=g,R.geometry=x,R.material=M,R.materialVariant=u(g),R.groupOrder=w,R.renderOrder=g.renderOrder,R.z=y,R.group=S),e++,R}function d(g,x,M,w,y,S){const R=f(g,x,M,w,y,S);M.transmission>0?r.push(R):M.transparent===!0?o.push(R):t.push(R)}function h(g,x,M,w,y,S){const R=f(g,x,M,w,y,S);M.transmission>0?r.unshift(R):M.transparent===!0?o.unshift(R):t.unshift(R)}function m(g,x){t.length>1&&t.sort(g||P3),r.length>1&&r.sort(x||I_),o.length>1&&o.sort(x||I_)}function v(){for(let g=e,x=n.length;g<x;g++){const M=n[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:h,finish:v,sort:m}}function D3(){let n=new WeakMap;function e(r,o){const l=n.get(r);let u;return l===void 0?(u=new U_,n.set(r,[u])):o>=l.length?(u=new U_,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function L3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new Ft};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":t={color:new Ft,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return n[e.id]=t,t}}}function N3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let I3=0;function U3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function F3(n){const e=new L3,t=N3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ie);const o=new ie,l=new hn,u=new hn;function f(h){let m=0,v=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let x=0,M=0,w=0,y=0,S=0,R=0,b=0,P=0,F=0,L=0,B=0;h.sort(U3);for(let N=0,k=h.length;N<k;N++){const O=h[N],q=O.color,le=O.intensity,ce=O.distance;let H=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Fs?H=O.shadow.map.texture:H=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)m+=q.r*le,v+=q.g*le,g+=q.b*le;else if(O.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(O.sh.coefficients[Z],le);B++}else if(O.isDirectionalLight){const Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const Y=O.shadow,X=t.get(O);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,r.directionalShadow[x]=X,r.directionalShadowMap[x]=H,r.directionalShadowMatrix[x]=O.shadow.matrix,R++}r.directional[x]=Z,x++}else if(O.isSpotLight){const Z=e.get(O);Z.position.setFromMatrixPosition(O.matrixWorld),Z.color.copy(q).multiplyScalar(le),Z.distance=ce,Z.coneCos=Math.cos(O.angle),Z.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Z.decay=O.decay,r.spot[w]=Z;const Y=O.shadow;if(O.map&&(r.spotLightMap[F]=O.map,F++,Y.updateMatrices(O),O.castShadow&&L++),r.spotLightMatrix[w]=Y.matrix,O.castShadow){const X=t.get(O);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,r.spotShadow[w]=X,r.spotShadowMap[w]=H,P++}w++}else if(O.isRectAreaLight){const Z=e.get(O);Z.color.copy(q).multiplyScalar(le),Z.halfWidth.set(O.width*.5,0,0),Z.halfHeight.set(0,O.height*.5,0),r.rectArea[y]=Z,y++}else if(O.isPointLight){const Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),Z.distance=O.distance,Z.decay=O.decay,O.castShadow){const Y=O.shadow,X=t.get(O);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,r.pointShadow[M]=X,r.pointShadowMap[M]=H,r.pointShadowMatrix[M]=O.shadow.matrix,b++}r.point[M]=Z,M++}else if(O.isHemisphereLight){const Z=e.get(O);Z.skyColor.copy(O.color).multiplyScalar(le),Z.groundColor.copy(O.groundColor).multiplyScalar(le),r.hemi[S]=Z,S++}}y>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=v,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==x||T.pointLength!==M||T.spotLength!==w||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==R||T.numPointShadows!==b||T.numSpotShadows!==P||T.numSpotMaps!==F||T.numLightProbes!==B)&&(r.directional.length=x,r.spot.length=w,r.rectArea.length=y,r.point.length=M,r.hemi.length=S,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=P+F-L,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=B,T.directionalLength=x,T.pointLength=M,T.spotLength=w,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=R,T.numPointShadows=b,T.numSpotShadows=P,T.numSpotMaps=F,T.numLightProbes=B,r.version=I3++)}function d(h,m){let v=0,g=0,x=0,M=0,w=0;const y=m.matrixWorldInverse;for(let S=0,R=h.length;S<R;S++){const b=h[S];if(b.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),v++}else if(b.isSpotLight){const P=r.spot[x];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),x++}else if(b.isRectAreaLight){const P=r.rectArea[M];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(y),u.identity(),l.copy(b.matrixWorld),l.premultiply(y),u.extractRotation(l),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),M++}else if(b.isPointLight){const P=r.point[g];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(y),g++}else if(b.isHemisphereLight){const P=r.hemi[w];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(y),w++}}}return{setup:f,setupView:d,state:r}}function F_(n){const e=new F3(n),t=[],r=[],o=[];function l(g){v.camera=g,t.length=0,r.length=0,o.length=0}function u(g){t.push(g)}function f(g){r.push(g)}function d(g){o.push(g)}function h(){e.setup(t)}function m(g){e.setupView(t,g)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:f,pushLightProbeGrid:d}}function O3(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new F_(n),e.set(o,[f])):l>=u.length?(f=new F_(n),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const B3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,V3=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],z3=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],O_=new hn,Na=new ie,jd=new ie;function H3(n,e,t){let r=new jy;const o=new Nt,l=new Nt,u=new sn,f=new nR,d=new iR,h={},m=t.maxTextureSize,v={[is]:$n,[$n]:is,[vr]:vr},g=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:B3,fragmentShader:k3}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const M=new Tr;M.setAttribute("position",new Zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new er(M,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let S=this.type;this.render=function(L,B,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===Xw&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ku);const N=n.getRenderTarget(),k=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),q=n.state;q.setBlending(xr),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const le=S!==this.type;le&&B.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(H=>H.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,H=L.length;ce<H;ce++){const Z=L[ce],Y=Z.shadow;if(Y===void 0){st("WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const X=Y.getFrameExtents();o.multiply(X),l.copy(Y.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/X.x),o.x=l.x*X.x,Y.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/X.y),o.y=l.y*X.y,Y.mapSize.y=l.y));const ne=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=ne,Y.map===null||le===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Fa){if(Z.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new $i(o.x,o.y,{format:Fs,type:Mr,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),Y.map.texture.name=Z.name+".shadowMap",Y.map.depthTexture=new Uo(o.x,o.y,ji),Y.map.depthTexture.name=Z.name+".shadowMapDepth",Y.map.depthTexture.format=Er,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=wn,Y.map.depthTexture.magFilter=wn}else Z.isPointLight?(Y.map=new Jy(o.x),Y.map.depthTexture=new $C(o.x,Ji)):(Y.map=new $i(o.x,o.y),Y.map.depthTexture=new Uo(o.x,o.y,Ji)),Y.map.depthTexture.name=Z.name+".shadowMap",Y.map.depthTexture.format=Er,this.type===ku?(Y.map.depthTexture.compareFunction=ne?Xp:Wp,Y.map.depthTexture.minFilter=Nn,Y.map.depthTexture.magFilter=Nn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=wn,Y.map.depthTexture.magFilter=wn);Y.camera.updateProjectionMatrix()}const re=Y.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<re;U++){if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,U),n.clear();else{U===0&&(n.setRenderTarget(Y.map),n.clear());const Q=Y.getViewport(U);u.set(l.x*Q.x,l.y*Q.y,l.x*Q.z,l.y*Q.w),q.viewport(u)}if(Z.isPointLight){const Q=Y.camera,Fe=Y.matrix,He=Z.distance||Q.far;He!==Q.far&&(Q.far=He,Q.updateProjectionMatrix()),Na.setFromMatrixPosition(Z.matrixWorld),Q.position.copy(Na),jd.copy(Q.position),jd.add(V3[U]),Q.up.copy(z3[U]),Q.lookAt(jd),Q.updateMatrixWorld(),Fe.makeTranslation(-Na.x,-Na.y,-Na.z),O_.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(O_,Q.coordinateSystem,Q.reversedDepth)}else Y.updateMatrices(Z);r=Y.getFrustum(),P(B,T,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===Fa&&R(Y,T),Y.needsUpdate=!1}S=this.type,y.needsUpdate=!1,n.setRenderTarget(N,k,O)};function R(L,B){const T=e.update(w);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,x.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new $i(o.x,o.y,{format:Fs,type:Mr})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(B,null,T,g,w,null),x.uniforms.shadow_pass.value=L.mapPass.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(B,null,T,x,w,null)}function b(L,B,T,N){let k=null;const O=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(O!==void 0)k=O;else if(k=T.isPointLight===!0?d:f,n.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const q=k.uuid,le=B.uuid;let ce=h[q];ce===void 0&&(ce={},h[q]=ce);let H=ce[le];H===void 0&&(H=k.clone(),ce[le]=H,B.addEventListener("dispose",F)),k=H}if(k.visible=B.visible,k.wireframe=B.wireframe,N===Fa?k.side=B.shadowSide!==null?B.shadowSide:B.side:k.side=B.shadowSide!==null?B.shadowSide:v[B.side],k.alphaMap=B.alphaMap,k.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,k.map=B.map,k.clipShadows=B.clipShadows,k.clippingPlanes=B.clippingPlanes,k.clipIntersection=B.clipIntersection,k.displacementMap=B.displacementMap,k.displacementScale=B.displacementScale,k.displacementBias=B.displacementBias,k.wireframeLinewidth=B.wireframeLinewidth,k.linewidth=B.linewidth,T.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const q=n.properties.get(k);q.light=T}return k}function P(L,B,T,N,k){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&k===Fa)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const le=e.update(L),ce=L.material;if(Array.isArray(ce)){const H=le.groups;for(let Z=0,Y=H.length;Z<Y;Z++){const X=H[Z],ne=ce[X.materialIndex];if(ne&&ne.visible){const re=b(L,ne,N,k);L.onBeforeShadow(n,L,B,T,le,re,X),n.renderBufferDirect(T,null,le,re,L,X),L.onAfterShadow(n,L,B,T,le,re,X)}}}else if(ce.visible){const H=b(L,ce,N,k);L.onBeforeShadow(n,L,B,T,le,H,null),n.renderBufferDirect(T,null,le,H,L,null),L.onAfterShadow(n,L,B,T,le,H,null)}}const q=L.children;for(let le=0,ce=q.length;le<ce;le++)P(q[le],B,T,N,k)}function F(L){L.target.removeEventListener("dispose",F);for(const T in h){const N=h[T],k=L.target.uuid;k in N&&(N[k].dispose(),delete N[k])}}}function G3(n,e){function t(){let z=!1;const Ae=new sn;let de=null;const Oe=new sn(0,0,0,0);return{setMask:function(Re){de!==Re&&!z&&(n.colorMask(Re,Re,Re,Re),de=Re)},setLocked:function(Re){z=Re},setClear:function(Re,ve,je,at,Ot){Ot===!0&&(Re*=at,ve*=at,je*=at),Ae.set(Re,ve,je,at),Oe.equals(Ae)===!1&&(n.clearColor(Re,ve,je,at),Oe.copy(Ae))},reset:function(){z=!1,de=null,Oe.set(-1,0,0,0)}}}function r(){let z=!1,Ae=!1,de=null,Oe=null,Re=null;return{setReversed:function(ve){if(Ae!==ve){const je=e.get("EXT_clip_control");ve?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Ae=ve;const at=Re;Re=null,this.setClear(at)}},getReversed:function(){return Ae},setTest:function(ve){ve?me(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(ve){de!==ve&&!z&&(n.depthMask(ve),de=ve)},setFunc:function(ve){if(Ae&&(ve=TC[ve]),Oe!==ve){switch(ve){case xh:n.depthFunc(n.NEVER);break;case yh:n.depthFunc(n.ALWAYS);break;case Sh:n.depthFunc(n.LESS);break;case No:n.depthFunc(n.LEQUAL);break;case Mh:n.depthFunc(n.EQUAL);break;case Eh:n.depthFunc(n.GEQUAL);break;case Th:n.depthFunc(n.GREATER);break;case Ah:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Oe=ve}},setLocked:function(ve){z=ve},setClear:function(ve){Re!==ve&&(Re=ve,Ae&&(ve=1-ve),n.clearDepth(ve))},reset:function(){z=!1,de=null,Oe=null,Re=null,Ae=!1}}}function o(){let z=!1,Ae=null,de=null,Oe=null,Re=null,ve=null,je=null,at=null,Ot=null;return{setTest:function(At){z||(At?me(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(At){Ae!==At&&!z&&(n.stencilMask(At),Ae=At)},setFunc:function(At,In,si){(de!==At||Oe!==In||Re!==si)&&(n.stencilFunc(At,In,si),de=At,Oe=In,Re=si)},setOp:function(At,In,si){(ve!==At||je!==In||at!==si)&&(n.stencilOp(At,In,si),ve=At,je=In,at=si)},setLocked:function(At){z=At},setClear:function(At){Ot!==At&&(n.clearStencil(At),Ot=At)},reset:function(){z=!1,Ae=null,de=null,Oe=null,Re=null,ve=null,je=null,at=null,Ot=null}}}const l=new t,u=new r,f=new o,d=new WeakMap,h=new WeakMap;let m={},v={},g={},x=new WeakMap,M=[],w=null,y=!1,S=null,R=null,b=null,P=null,F=null,L=null,B=null,T=new Ft(0,0,0),N=0,k=!1,O=null,q=null,le=null,ce=null,H=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,X=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(ne)[1]),Y=X>=1):ne.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),Y=X>=2);let re=null,U={};const Q=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),He=new sn().fromArray(Q),Ne=new sn().fromArray(Fe);function ae(z,Ae,de,Oe){const Re=new Uint8Array(4),ve=n.createTexture();n.bindTexture(z,ve),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<de;je++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(Ae+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return ve}const ye={};ye[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),me(n.DEPTH_TEST),u.setFunc(No),Zt(!1),Vt(Vv),me(n.CULL_FACE),It(xr);function me(z){m[z]!==!0&&(n.enable(z),m[z]=!0)}function Ie(z){m[z]!==!1&&(n.disable(z),m[z]=!1)}function Qe(z,Ae){return g[z]!==Ae?(n.bindFramebuffer(z,Ae),g[z]=Ae,z===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Ae),z===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function et(z,Ae){let de=M,Oe=!1;if(z){de=x.get(Ae),de===void 0&&(de=[],x.set(Ae,de));const Re=z.textures;if(de.length!==Re.length||de[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,je=Re.length;ve<je;ve++)de[ve]=n.COLOR_ATTACHMENT0+ve;de.length=Re.length,Oe=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,Oe=!0);Oe&&n.drawBuffers(de)}function kt(z){return w!==z?(n.useProgram(z),w=z,!0):!1}const ft={[Cs]:n.FUNC_ADD,[Yw]:n.FUNC_SUBTRACT,[qw]:n.FUNC_REVERSE_SUBTRACT};ft[Kw]=n.MIN,ft[$w]=n.MAX;const Tt={[Zw]:n.ZERO,[Qw]:n.ONE,[Jw]:n.SRC_COLOR,[vh]:n.SRC_ALPHA,[sC]:n.SRC_ALPHA_SATURATE,[iC]:n.DST_COLOR,[tC]:n.DST_ALPHA,[eC]:n.ONE_MINUS_SRC_COLOR,[_h]:n.ONE_MINUS_SRC_ALPHA,[rC]:n.ONE_MINUS_DST_COLOR,[nC]:n.ONE_MINUS_DST_ALPHA,[oC]:n.CONSTANT_COLOR,[aC]:n.ONE_MINUS_CONSTANT_COLOR,[lC]:n.CONSTANT_ALPHA,[uC]:n.ONE_MINUS_CONSTANT_ALPHA};function It(z,Ae,de,Oe,Re,ve,je,at,Ot,At){if(z===xr){y===!0&&(Ie(n.BLEND),y=!1);return}if(y===!1&&(me(n.BLEND),y=!0),z!==jw){if(z!==S||At!==k){if((R!==Cs||F!==Cs)&&(n.blendEquation(n.FUNC_ADD),R=Cs,F=Cs),At)switch(z){case bo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zv:n.blendFunc(n.ONE,n.ONE);break;case Hv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gv:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Et("WebGLState: Invalid blending: ",z);break}else switch(z){case bo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zv:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hv:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gv:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",z);break}b=null,P=null,L=null,B=null,T.set(0,0,0),N=0,S=z,k=At}return}Re=Re||Ae,ve=ve||de,je=je||Oe,(Ae!==R||Re!==F)&&(n.blendEquationSeparate(ft[Ae],ft[Re]),R=Ae,F=Re),(de!==b||Oe!==P||ve!==L||je!==B)&&(n.blendFuncSeparate(Tt[de],Tt[Oe],Tt[ve],Tt[je]),b=de,P=Oe,L=ve,B=je),(at.equals(T)===!1||Ot!==N)&&(n.blendColor(at.r,at.g,at.b,Ot),T.copy(at),N=Ot),S=z,k=!1}function dt(z,Ae){z.side===vr?Ie(n.CULL_FACE):me(n.CULL_FACE);let de=z.side===$n;Ae&&(de=!de),Zt(de),z.blending===bo&&z.transparent===!1?It(xr):It(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),l.setMask(z.colorWrite);const Oe=z.stencilWrite;f.setTest(Oe),Oe&&(f.setMask(z.stencilWriteMask),f.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),f.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),G(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(z){O!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),O=z)}function Vt(z){z!==Gw?(me(n.CULL_FACE),z!==q&&(z===Vv?n.cullFace(n.BACK):z===Ww?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),q=z}function yn(z){z!==le&&(Y&&n.lineWidth(z),le=z)}function G(z,Ae,de){z?(me(n.POLYGON_OFFSET_FILL),(ce!==Ae||H!==de)&&(ce=Ae,H=de,u.getReversed()&&(Ae=-Ae),n.polygonOffset(Ae,de))):Ie(n.POLYGON_OFFSET_FILL)}function zt(z){z?me(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function ht(z){z===void 0&&(z=n.TEXTURE0+Z-1),re!==z&&(n.activeTexture(z),re=z)}function Rt(z,Ae,de){de===void 0&&(re===null?de=n.TEXTURE0+Z-1:de=re);let Oe=U[de];Oe===void 0&&(Oe={type:void 0,texture:void 0},U[de]=Oe),(Oe.type!==z||Oe.texture!==Ae)&&(re!==de&&(n.activeTexture(de),re=de),n.bindTexture(z,Ae||ye[z]),Oe.type=z,Oe.texture=Ae)}function De(){const z=U[re];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Wt(){try{n.compressedTexImage2D(...arguments)}catch(z){Et("WebGLState:",z)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(z){Et("WebGLState:",z)}}function E(){try{n.texSubImage2D(...arguments)}catch(z){Et("WebGLState:",z)}}function K(){try{n.texSubImage3D(...arguments)}catch(z){Et("WebGLState:",z)}}function he(){try{n.compressedTexSubImage2D(...arguments)}catch(z){Et("WebGLState:",z)}}function ge(){try{n.compressedTexSubImage3D(...arguments)}catch(z){Et("WebGLState:",z)}}function Me(){try{n.texStorage2D(...arguments)}catch(z){Et("WebGLState:",z)}}function Pe(){try{n.texStorage3D(...arguments)}catch(z){Et("WebGLState:",z)}}function fe(){try{n.texImage2D(...arguments)}catch(z){Et("WebGLState:",z)}}function pe(){try{n.texImage3D(...arguments)}catch(z){Et("WebGLState:",z)}}function Ue(z){return v[z]!==void 0?v[z]:n.getParameter(z)}function Be(z,Ae){v[z]!==Ae&&(n.pixelStorei(z,Ae),v[z]=Ae)}function we(z){He.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),He.copy(z))}function Ee(z){Ne.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Ne.copy(z))}function it(z,Ae){let de=h.get(Ae);de===void 0&&(de=new WeakMap,h.set(Ae,de));let Oe=de.get(z);Oe===void 0&&(Oe=n.getUniformBlockIndex(Ae,z.name),de.set(z,Oe))}function ot(z,Ae){const Oe=h.get(Ae).get(z);d.get(Ae)!==Oe&&(n.uniformBlockBinding(Ae,Oe,z.__bindingPointIndex),d.set(Ae,Oe))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),m={},v={},re=null,U={},g={},x=new WeakMap,M=[],w=null,y=!1,S=null,R=null,b=null,P=null,F=null,L=null,B=null,T=new Ft(0,0,0),N=0,k=!1,O=null,q=null,le=null,ce=null,H=null,He.set(0,0,n.canvas.width,n.canvas.height),Ne.set(0,0,n.canvas.width,n.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:me,disable:Ie,bindFramebuffer:Qe,drawBuffers:et,useProgram:kt,setBlending:It,setMaterial:dt,setFlipSided:Zt,setCullFace:Vt,setLineWidth:yn,setPolygonOffset:G,setScissorTest:zt,activeTexture:ht,bindTexture:Rt,unbindTexture:De,compressedTexImage2D:Wt,compressedTexImage3D:D,texImage2D:fe,texImage3D:pe,pixelStorei:Be,getParameter:Ue,updateUBOMapping:it,uniformBlockBinding:ot,texStorage2D:Me,texStorage3D:Pe,texSubImage2D:E,texSubImage3D:K,compressedTexSubImage2D:he,compressedTexSubImage3D:ge,scissor:we,viewport:Ee,reset:mt}}function W3(n,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Nt,m=new WeakMap,v=new Set;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,E){return M?new OffscreenCanvas(D,E):sc("canvas")}function y(D,E,K){let he=1;const ge=Wt(D);if((ge.width>K||ge.height>K)&&(he=K/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Me=Math.floor(he*ge.width),Pe=Math.floor(he*ge.height);g===void 0&&(g=w(Me,Pe));const fe=E?w(Me,Pe):g;return fe.width=Me,fe.height=Pe,fe.getContext("2d").drawImage(D,0,0,Me,Pe),st("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Me+"x"+Pe+")."),fe}else return"data"in D&&st("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),D;return D}function S(D){return D.generateMipmaps}function R(D){n.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function P(D,E,K,he,ge,Me=!1){if(D!==null){if(n[D]!==void 0)return n[D];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Pe;he&&(Pe=e.get("EXT_texture_norm16"),Pe||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=E;if(E===n.RED&&(K===n.FLOAT&&(fe=n.R32F),K===n.HALF_FLOAT&&(fe=n.R16F),K===n.UNSIGNED_BYTE&&(fe=n.R8),K===n.UNSIGNED_SHORT&&Pe&&(fe=Pe.R16_EXT),K===n.SHORT&&Pe&&(fe=Pe.R16_SNORM_EXT)),E===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(fe=n.R8UI),K===n.UNSIGNED_SHORT&&(fe=n.R16UI),K===n.UNSIGNED_INT&&(fe=n.R32UI),K===n.BYTE&&(fe=n.R8I),K===n.SHORT&&(fe=n.R16I),K===n.INT&&(fe=n.R32I)),E===n.RG&&(K===n.FLOAT&&(fe=n.RG32F),K===n.HALF_FLOAT&&(fe=n.RG16F),K===n.UNSIGNED_BYTE&&(fe=n.RG8),K===n.UNSIGNED_SHORT&&Pe&&(fe=Pe.RG16_EXT),K===n.SHORT&&Pe&&(fe=Pe.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(fe=n.RG8UI),K===n.UNSIGNED_SHORT&&(fe=n.RG16UI),K===n.UNSIGNED_INT&&(fe=n.RG32UI),K===n.BYTE&&(fe=n.RG8I),K===n.SHORT&&(fe=n.RG16I),K===n.INT&&(fe=n.RG32I)),E===n.RGB_INTEGER&&(K===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),K===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),K===n.UNSIGNED_INT&&(fe=n.RGB32UI),K===n.BYTE&&(fe=n.RGB8I),K===n.SHORT&&(fe=n.RGB16I),K===n.INT&&(fe=n.RGB32I)),E===n.RGBA_INTEGER&&(K===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),K===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),K===n.UNSIGNED_INT&&(fe=n.RGBA32UI),K===n.BYTE&&(fe=n.RGBA8I),K===n.SHORT&&(fe=n.RGBA16I),K===n.INT&&(fe=n.RGBA32I)),E===n.RGB&&(K===n.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGB16_EXT),K===n.SHORT&&Pe&&(fe=Pe.RGB16_SNORM_EXT),K===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),K===n.UNSIGNED_INT_10F_11F_11F_REV&&(fe=n.R11F_G11F_B10F)),E===n.RGBA){const pe=Me?ic:xt.getTransfer(ge);K===n.FLOAT&&(fe=n.RGBA32F),K===n.HALF_FLOAT&&(fe=n.RGBA16F),K===n.UNSIGNED_BYTE&&(fe=pe===Lt?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGBA16_EXT),K===n.SHORT&&Pe&&(fe=Pe.RGBA16_SNORM_EXT),K===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function F(D,E){let K;return D?E===null||E===Ji||E===Ya?K=n.DEPTH24_STENCIL8:E===ji?K=n.DEPTH32F_STENCIL8:E===ja&&(K=n.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ji||E===Ya?K=n.DEPTH_COMPONENT24:E===ji?K=n.DEPTH_COMPONENT32F:E===ja&&(K=n.DEPTH_COMPONENT16),K}function L(D,E){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==wn&&D.minFilter!==Nn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function B(D){const E=D.target;E.removeEventListener("dispose",B),N(E),E.isVideoTexture&&m.delete(E),E.isHTMLTexture&&v.delete(E)}function T(D){const E=D.target;E.removeEventListener("dispose",T),O(E)}function N(D){const E=r.get(D);if(E.__webglInit===void 0)return;const K=D.source,he=x.get(K);if(he){const ge=he[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&k(D),Object.keys(he).length===0&&x.delete(K)}r.remove(D)}function k(D){const E=r.get(D);n.deleteTexture(E.__webglTexture);const K=D.source,he=x.get(K);delete he[E.__cacheKey],u.memory.textures--}function O(D){const E=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let ge=0;ge<E.__webglFramebuffer[he].length;ge++)n.deleteFramebuffer(E.__webglFramebuffer[he][ge]);else n.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)n.deleteFramebuffer(E.__webglFramebuffer[he]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=D.textures;for(let he=0,ge=K.length;he<ge;he++){const Me=r.get(K[he]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),u.memory.textures--),r.remove(K[he])}r.remove(D)}let q=0;function le(){q=0}function ce(){return q}function H(D){q=D}function Z(){const D=q;return D>=o.maxTextures&&st("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),q+=1,D}function Y(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function X(D,E){const K=r.get(D);if(D.isVideoTexture&&Rt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&K.__version!==D.version){const he=D.image;if(he===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(K,D,E);return}}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+E)}function ne(D,E){const K=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){Ie(K,D,E);return}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+E)}function re(D,E){const K=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){Ie(K,D,E);return}t.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+E)}function U(D,E){const K=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&K.__version!==D.version){Qe(K,D,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+E)}const Q={[wh]:n.REPEAT,[_r]:n.CLAMP_TO_EDGE,[Ch]:n.MIRRORED_REPEAT},Fe={[wn]:n.NEAREST,[dC]:n.NEAREST_MIPMAP_NEAREST,[uu]:n.NEAREST_MIPMAP_LINEAR,[Nn]:n.LINEAR,[gd]:n.LINEAR_MIPMAP_NEAREST,[Ds]:n.LINEAR_MIPMAP_LINEAR},He={[mC]:n.NEVER,[yC]:n.ALWAYS,[gC]:n.LESS,[Wp]:n.LEQUAL,[vC]:n.EQUAL,[Xp]:n.GEQUAL,[_C]:n.GREATER,[xC]:n.NOTEQUAL};function Ne(D,E){if(E.type===ji&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Nn||E.magFilter===gd||E.magFilter===uu||E.magFilter===Ds||E.minFilter===Nn||E.minFilter===gd||E.minFilter===uu||E.minFilter===Ds)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,Q[E.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,Q[E.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,Q[E.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,Fe[E.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,Fe[E.minFilter]),E.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,He[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==uu&&E.minFilter!==Ds||E.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ae(D,E){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",B));const he=E.source;let ge=x.get(he);ge===void 0&&(ge={},x.set(he,ge));const Me=Y(E);if(Me!==D.__cacheKey){ge[Me]===void 0&&(ge[Me]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,K=!0),ge[Me].usedTimes++;const Pe=ge[D.__cacheKey];Pe!==void 0&&(ge[D.__cacheKey].usedTimes--,Pe.usedTimes===0&&k(E)),D.__cacheKey=Me,D.__webglTexture=ge[Me].texture}return K}function ye(D,E,K){return Math.floor(Math.floor(D/K)/E)}function me(D,E,K,he){const Me=D.updateRanges;if(Me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,K,he,E.data);else{Me.sort((Be,we)=>Be.start-we.start);let Pe=0;for(let Be=1;Be<Me.length;Be++){const we=Me[Pe],Ee=Me[Be],it=we.start+we.count,ot=ye(Ee.start,E.width,4),mt=ye(we.start,E.width,4);Ee.start<=it+1&&ot===mt&&ye(Ee.start+Ee.count-1,E.width,4)===ot?we.count=Math.max(we.count,Ee.start+Ee.count-we.start):(++Pe,Me[Pe]=Ee)}Me.length=Pe+1;const fe=t.getParameter(n.UNPACK_ROW_LENGTH),pe=t.getParameter(n.UNPACK_SKIP_PIXELS),Ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let Be=0,we=Me.length;Be<we;Be++){const Ee=Me[Be],it=Math.floor(Ee.start/4),ot=Math.ceil(Ee.count/4),mt=it%E.width,z=Math.floor(it/E.width),Ae=ot,de=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,mt),t.pixelStorei(n.UNPACK_SKIP_ROWS,z),t.texSubImage2D(n.TEXTURE_2D,0,mt,z,Ae,de,K,he,E.data)}D.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,fe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ue)}}function Ie(D,E,K){let he=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=n.TEXTURE_3D);const ge=ae(D,E),Me=E.source;t.bindTexture(he,D.__webglTexture,n.TEXTURE0+K);const Pe=r.get(Me);if(Me.version!==Pe.__version||ge===!0){if(t.activeTexture(n.TEXTURE0+K),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const de=xt.getPrimaries(xt.workingColorSpace),Oe=E.colorSpace===Qr?null:xt.getPrimaries(E.colorSpace),Re=E.colorSpace===Qr||de===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let pe=y(E.image,!1,o.maxTextureSize);pe=De(E,pe);const Ue=l.convert(E.format,E.colorSpace),Be=l.convert(E.type);let we=P(E.internalFormat,Ue,Be,E.normalized,E.colorSpace,E.isVideoTexture);Ne(he,E);let Ee;const it=E.mipmaps,ot=E.isVideoTexture!==!0,mt=Pe.__version===void 0||ge===!0,z=Me.dataReady,Ae=L(E,pe);if(E.isDepthTexture)we=F(E.format===Ls,E.type),mt&&(ot?t.texStorage2D(n.TEXTURE_2D,1,we,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,we,pe.width,pe.height,0,Ue,Be,null));else if(E.isDataTexture)if(it.length>0){ot&&mt&&t.texStorage2D(n.TEXTURE_2D,Ae,we,it[0].width,it[0].height);for(let de=0,Oe=it.length;de<Oe;de++)Ee=it[de],ot?z&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Ue,Be,Ee.data):t.texImage2D(n.TEXTURE_2D,de,we,Ee.width,Ee.height,0,Ue,Be,Ee.data);E.generateMipmaps=!1}else ot?(mt&&t.texStorage2D(n.TEXTURE_2D,Ae,we,pe.width,pe.height),z&&me(E,pe,Ue,Be)):t.texImage2D(n.TEXTURE_2D,0,we,pe.width,pe.height,0,Ue,Be,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ot&&mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,we,it[0].width,it[0].height,pe.depth);for(let de=0,Oe=it.length;de<Oe;de++)if(Ee=it[de],E.format!==Li)if(Ue!==null)if(ot){if(z)if(E.layerUpdates.size>0){const Re=p_(Ee.width,Ee.height,E.format,E.type);for(const ve of E.layerUpdates){const je=Ee.data.subarray(ve*Re/Ee.data.BYTES_PER_ELEMENT,(ve+1)*Re/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,ve,Ee.width,Ee.height,1,Ue,je)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,pe.depth,Ue,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,we,Ee.width,Ee.height,pe.depth,0,Ee.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,pe.depth,Ue,Be,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,we,Ee.width,Ee.height,pe.depth,0,Ue,Be,Ee.data)}else{ot&&mt&&t.texStorage2D(n.TEXTURE_2D,Ae,we,it[0].width,it[0].height);for(let de=0,Oe=it.length;de<Oe;de++)Ee=it[de],E.format!==Li?Ue!==null?ot?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Ue,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,de,we,Ee.width,Ee.height,0,Ee.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?z&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Ue,Be,Ee.data):t.texImage2D(n.TEXTURE_2D,de,we,Ee.width,Ee.height,0,Ue,Be,Ee.data)}else if(E.isDataArrayTexture)if(ot){if(mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,we,pe.width,pe.height,pe.depth),z)if(E.layerUpdates.size>0){const de=p_(pe.width,pe.height,E.format,E.type);for(const Oe of E.layerUpdates){const Re=pe.data.subarray(Oe*de/pe.data.BYTES_PER_ELEMENT,(Oe+1)*de/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Oe,pe.width,pe.height,1,Ue,Be,Re)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ue,Be,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,pe.width,pe.height,pe.depth,0,Ue,Be,pe.data);else if(E.isData3DTexture)ot?(mt&&t.texStorage3D(n.TEXTURE_3D,Ae,we,pe.width,pe.height,pe.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ue,Be,pe.data)):t.texImage3D(n.TEXTURE_3D,0,we,pe.width,pe.height,pe.depth,0,Ue,Be,pe.data);else if(E.isFramebufferTexture){if(mt)if(ot)t.texStorage2D(n.TEXTURE_2D,Ae,we,pe.width,pe.height);else{let de=pe.width,Oe=pe.height;for(let Re=0;Re<Ae;Re++)t.texImage2D(n.TEXTURE_2D,Re,we,de,Oe,0,Ue,Be,null),de>>=1,Oe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const de=n.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),pe.parentNode!==de){de.appendChild(pe),v.add(E),de.onpaint=at=>{const Ot=at.changedElements;for(const At of v)Ot.includes(At.image)&&(At.needsUpdate=!0)},de.requestPaint();return}const Oe=0,Re=n.RGBA,ve=n.RGBA,je=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Oe,Re,ve,je,pe),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(it.length>0){if(ot&&mt){const de=Wt(it[0]);t.texStorage2D(n.TEXTURE_2D,Ae,we,de.width,de.height)}for(let de=0,Oe=it.length;de<Oe;de++)Ee=it[de],ot?z&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Ue,Be,Ee):t.texImage2D(n.TEXTURE_2D,de,we,Ue,Be,Ee);E.generateMipmaps=!1}else if(ot){if(mt){const de=Wt(pe);t.texStorage2D(n.TEXTURE_2D,Ae,we,de.width,de.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,Be,pe)}else t.texImage2D(n.TEXTURE_2D,0,we,Ue,Be,pe);S(E)&&R(he),Pe.__version=Me.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Qe(D,E,K){if(E.image.length!==6)return;const he=ae(D,E),ge=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+K);const Me=r.get(ge);if(ge.version!==Me.__version||he===!0){t.activeTexture(n.TEXTURE0+K);const Pe=xt.getPrimaries(xt.workingColorSpace),fe=E.colorSpace===Qr?null:xt.getPrimaries(E.colorSpace),pe=E.colorSpace===Qr||Pe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ue=E.isCompressedTexture||E.image[0].isCompressedTexture,Be=E.image[0]&&E.image[0].isDataTexture,we=[];for(let ve=0;ve<6;ve++)!Ue&&!Be?we[ve]=y(E.image[ve],!0,o.maxCubemapSize):we[ve]=Be?E.image[ve].image:E.image[ve],we[ve]=De(E,we[ve]);const Ee=we[0],it=l.convert(E.format,E.colorSpace),ot=l.convert(E.type),mt=P(E.internalFormat,it,ot,E.normalized,E.colorSpace),z=E.isVideoTexture!==!0,Ae=Me.__version===void 0||he===!0,de=ge.dataReady;let Oe=L(E,Ee);Ne(n.TEXTURE_CUBE_MAP,E);let Re;if(Ue){z&&Ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,mt,Ee.width,Ee.height);for(let ve=0;ve<6;ve++){Re=we[ve].mipmaps;for(let je=0;je<Re.length;je++){const at=Re[je];E.format!==Li?it!==null?z?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,0,0,at.width,at.height,it,at.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,mt,at.width,at.height,0,at.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,0,0,at.width,at.height,it,ot,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,mt,at.width,at.height,0,it,ot,at.data)}}}else{if(Re=E.mipmaps,z&&Ae){Re.length>0&&Oe++;const ve=Wt(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,mt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Be){z?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,we[ve].width,we[ve].height,it,ot,we[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,mt,we[ve].width,we[ve].height,0,it,ot,we[ve].data);for(let je=0;je<Re.length;je++){const Ot=Re[je].image[ve].image;z?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,0,0,Ot.width,Ot.height,it,ot,Ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,mt,Ot.width,Ot.height,0,it,ot,Ot.data)}}else{z?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,it,ot,we[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,mt,it,ot,we[ve]);for(let je=0;je<Re.length;je++){const at=Re[je];z?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,0,0,it,ot,at.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,mt,it,ot,at.image[ve])}}}S(E)&&R(n.TEXTURE_CUBE_MAP),Me.__version=ge.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function et(D,E,K,he,ge,Me){const Pe=l.convert(K.format,K.colorSpace),fe=l.convert(K.type),pe=P(K.internalFormat,Pe,fe,K.normalized,K.colorSpace),Ue=r.get(E),Be=r.get(K);if(Be.__renderTarget=E,!Ue.__hasExternalTextures){const we=Math.max(1,E.width>>Me),Ee=Math.max(1,E.height>>Me);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,Me,pe,we,Ee,E.depth,0,Pe,fe,null):t.texImage2D(ge,Me,pe,we,Ee,0,Pe,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),ht(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,ge,Be.__webglTexture,0,zt(E)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,he,ge,Be.__webglTexture,Me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(D,E,K){if(n.bindRenderbuffer(n.RENDERBUFFER,D),E.depthBuffer){const he=E.depthTexture,ge=he&&he.isDepthTexture?he.type:null,Me=F(E.stencilBuffer,ge),Pe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ht(E)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt(E),Me,E.width,E.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt(E),Me,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Me,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,D)}else{const he=E.textures;for(let ge=0;ge<he.length;ge++){const Me=he[ge],Pe=l.convert(Me.format,Me.colorSpace),fe=l.convert(Me.type),pe=P(Me.internalFormat,Pe,fe,Me.normalized,Me.colorSpace);ht(E)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt(E),pe,E.width,E.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt(E),pe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,pe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(D,E,K){const he=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(E.depthTexture);if(ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),ge.__webglTexture===void 0){ge.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,E.depthTexture);const Ue=l.convert(E.depthTexture.format),Be=l.convert(E.depthTexture.type);let we;E.depthTexture.format===Er?we=n.DEPTH_COMPONENT24:E.depthTexture.format===Ls&&(we=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,we,E.width,E.height,0,Ue,Be,null)}}else X(E.depthTexture,0);const Me=ge.__webglTexture,Pe=zt(E),fe=he?n.TEXTURE_CUBE_MAP_POSITIVE_X+K:n.TEXTURE_2D,pe=E.depthTexture.format===Ls?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===Er)ht(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,fe,Me,0,Pe):n.framebufferTexture2D(n.FRAMEBUFFER,pe,fe,Me,0);else if(E.depthTexture.format===Ls)ht(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,fe,Me,0,Pe):n.framebufferTexture2D(n.FRAMEBUFFER,pe,fe,Me,0);else throw new Error("Unknown depthTexture format")}function Tt(D){const E=r.get(D),K=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=he}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(K)for(let he=0;he<6;he++)ft(E.__webglFramebuffer[he],D,he);else{const he=D.texture.mipmaps;he&&he.length>0?ft(E.__webglFramebuffer[0],D,0):ft(E.__webglFramebuffer,D,0)}else if(K){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=n.createRenderbuffer(),kt(E.__webglDepthbuffer[he],D,!1);else{const ge=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=E.__webglDepthbuffer[he];n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,Me)}}else{const he=D.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),kt(E.__webglDepthbuffer,D,!1);else{const ge=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,Me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function It(D,E,K){const he=r.get(D);E!==void 0&&et(he.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&Tt(D)}function dt(D){const E=D.texture,K=r.get(D),he=r.get(E);D.addEventListener("dispose",T);const ge=D.textures,Me=D.isWebGLCubeRenderTarget===!0,Pe=ge.length>1;if(Pe||(he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture()),he.__version=E.version,u.memory.textures++),Me){K.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[fe]=[];for(let pe=0;pe<E.mipmaps.length;pe++)K.__webglFramebuffer[fe][pe]=n.createFramebuffer()}else K.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)K.__webglFramebuffer[fe]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let fe=0,pe=ge.length;fe<pe;fe++){const Ue=r.get(ge[fe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),u.memory.textures++)}if(D.samples>0&&ht(D)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let fe=0;fe<ge.length;fe++){const pe=ge[fe];K.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[fe]);const Ue=l.convert(pe.format,pe.colorSpace),Be=l.convert(pe.type),we=P(pe.internalFormat,Ue,Be,pe.normalized,pe.colorSpace,D.isXRRenderTarget===!0),Ee=zt(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,we,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,K.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),kt(K.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Me){t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)et(K.__webglFramebuffer[fe][pe],D,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,pe);else et(K.__webglFramebuffer[fe],D,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);S(E)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let fe=0,pe=ge.length;fe<pe;fe++){const Ue=ge[fe],Be=r.get(Ue);let we=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(we=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,Be.__webglTexture),Ne(we,Ue),et(K.__webglFramebuffer,D,Ue,n.COLOR_ATTACHMENT0+fe,we,0),S(Ue)&&R(we)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(fe=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,he.__webglTexture),Ne(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)et(K.__webglFramebuffer[pe],D,E,n.COLOR_ATTACHMENT0,fe,pe);else et(K.__webglFramebuffer,D,E,n.COLOR_ATTACHMENT0,fe,0);S(E)&&R(fe),t.unbindTexture()}D.depthBuffer&&Tt(D)}function Zt(D){const E=D.textures;for(let K=0,he=E.length;K<he;K++){const ge=E[K];if(S(ge)){const Me=b(D),Pe=r.get(ge).__webglTexture;t.bindTexture(Me,Pe),R(Me),t.unbindTexture()}}}const Vt=[],yn=[];function G(D){if(D.samples>0){if(ht(D)===!1){const E=D.textures,K=D.width,he=D.height;let ge=n.COLOR_BUFFER_BIT;const Me=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=r.get(D),fe=E.length>1;if(fe)for(let Ue=0;Ue<E.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const pe=D.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ue=0;Ue<E.length;Ue++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ue]);const Be=r.get(E[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Be,0)}n.blitFramebuffer(0,0,K,he,0,0,K,he,ge,n.NEAREST),d===!0&&(Vt.length=0,yn.length=0,Vt.push(n.COLOR_ATTACHMENT0+Ue),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Vt.push(Me),yn.push(Me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,yn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Vt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Ue=0;Ue<E.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ue]);const Be=r.get(E[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const E=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function zt(D){return Math.min(o.maxSamples,D.samples)}function ht(D){const E=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Rt(D){const E=u.render.frame;m.get(D)!==E&&(m.set(D,E),D.update())}function De(D,E){const K=D.colorSpace,he=D.format,ge=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==nc&&K!==Qr&&(xt.getTransfer(K)===Lt?(he!==Li||ge!==pi)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",K)),E}function Wt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=le,this.getTextureUnits=ce,this.setTextureUnits=H,this.setTexture2D=X,this.setTexture2DArray=ne,this.setTexture3D=re,this.setTextureCube=U,this.rebindTextures=It,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function X3(n,e){function t(r,o=Qr){let l;const u=xt.getTransfer(o);if(r===pi)return n.UNSIGNED_BYTE;if(r===kp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Vp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Iy)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Uy)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ly)return n.BYTE;if(r===Ny)return n.SHORT;if(r===ja)return n.UNSIGNED_SHORT;if(r===Bp)return n.INT;if(r===Ji)return n.UNSIGNED_INT;if(r===ji)return n.FLOAT;if(r===Mr)return n.HALF_FLOAT;if(r===Fy)return n.ALPHA;if(r===Oy)return n.RGB;if(r===Li)return n.RGBA;if(r===Er)return n.DEPTH_COMPONENT;if(r===Ls)return n.DEPTH_STENCIL;if(r===By)return n.RED;if(r===zp)return n.RED_INTEGER;if(r===Fs)return n.RG;if(r===Hp)return n.RG_INTEGER;if(r===Gp)return n.RGBA_INTEGER;if(r===Vu||r===zu||r===Hu||r===Gu)if(u===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Vu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Hu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Vu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Hu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rh||r===bh||r===Ph||r===Dh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Rh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ph)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lh||r===Nh||r===Ih||r===Uh||r===Fh||r===ec||r===Oh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Lh||r===Nh)return u===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ih)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Uh)return l.COMPRESSED_R11_EAC;if(r===Fh)return l.COMPRESSED_SIGNED_R11_EAC;if(r===ec)return l.COMPRESSED_RG11_EAC;if(r===Oh)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Bh||r===kh||r===Vh||r===zh||r===Hh||r===Gh||r===Wh||r===Xh||r===jh||r===Yh||r===qh||r===Kh||r===$h||r===Zh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Bh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$h)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qh||r===Jh||r===ep)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Qh)return u===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ep)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===tp||r===np||r===tc||r===ip)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===tp)return l.COMPRESSED_RED_RGTC1_EXT;if(r===np)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ip)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ya?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const j3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class q3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new qy(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ii({vertexShader:j3,fragmentShader:Y3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new er(new tl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K3 extends Bs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",d=1,h=null,m=null,v=null,g=null,x=null,M=null;const w=typeof XRWebGLBinding<"u",y=new q3,S={},R=t.getContextAttributes();let b=null,P=null;const F=[],L=[],B=new Nt;let T=null;const N=new Pi;N.viewport=new sn;const k=new Pi;k.viewport=new sn;const O=[N,k],q=new sR;let le=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ye=F[ae];return ye===void 0&&(ye=new Td,F[ae]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ae){let ye=F[ae];return ye===void 0&&(ye=new Td,F[ae]=ye),ye.getGripSpace()},this.getHand=function(ae){let ye=F[ae];return ye===void 0&&(ye=new Td,F[ae]=ye),ye.getHandSpace()};function H(ae){const ye=L.indexOf(ae.inputSource);if(ye===-1)return;const me=F[ye];me!==void 0&&(me.update(ae.inputSource,ae.frame,h||u),me.dispatchEvent({type:ae.type,data:ae.inputSource}))}function Z(){o.removeEventListener("select",H),o.removeEventListener("selectstart",H),o.removeEventListener("selectend",H),o.removeEventListener("squeeze",H),o.removeEventListener("squeezestart",H),o.removeEventListener("squeezeend",H),o.removeEventListener("end",Z),o.removeEventListener("inputsourceschange",Y);for(let ae=0;ae<F.length;ae++){const ye=L[ae];ye!==null&&(L[ae]=null,F[ae].disconnect(ye))}le=null,ce=null,y.reset();for(const ae in S)delete S[ae];e.setRenderTarget(b),x=null,g=null,v=null,o=null,P=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){l=ae,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){f=ae,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(b=e.getRenderTarget(),o.addEventListener("select",H),o.addEventListener("selectstart",H),o.addEventListener("selectend",H),o.addEventListener("squeeze",H),o.addEventListener("squeezestart",H),o.addEventListener("squeezeend",H),o.addEventListener("end",Z),o.addEventListener("inputsourceschange",Y),R.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ie=null,Qe=null;R.depth&&(Qe=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=R.stencil?Ls:Er,Ie=R.stencil?Ya:Ji);const et={colorFormat:t.RGBA8,depthFormat:Qe,scaleFactor:l};v=this.getBinding(),g=v.createProjectionLayer(et),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new $i(g.textureWidth,g.textureHeight,{format:Li,type:pi,depthTexture:new Uo(g.textureWidth,g.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),P=new $i(x.framebufferWidth,x.framebufferHeight,{format:Li,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(f),Ne.setContext(o),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(ae){for(let ye=0;ye<ae.removed.length;ye++){const me=ae.removed[ye],Ie=L.indexOf(me);Ie>=0&&(L[Ie]=null,F[Ie].disconnect(me))}for(let ye=0;ye<ae.added.length;ye++){const me=ae.added[ye];let Ie=L.indexOf(me);if(Ie===-1){for(let et=0;et<F.length;et++)if(et>=L.length){L.push(me),Ie=et;break}else if(L[et]===null){L[et]=me,Ie=et;break}if(Ie===-1)break}const Qe=F[Ie];Qe&&Qe.connect(me)}}const X=new ie,ne=new ie;function re(ae,ye,me){X.setFromMatrixPosition(ye.matrixWorld),ne.setFromMatrixPosition(me.matrixWorld);const Ie=X.distanceTo(ne),Qe=ye.projectionMatrix.elements,et=me.projectionMatrix.elements,kt=Qe[14]/(Qe[10]-1),ft=Qe[14]/(Qe[10]+1),Tt=(Qe[9]+1)/Qe[5],It=(Qe[9]-1)/Qe[5],dt=(Qe[8]-1)/Qe[0],Zt=(et[8]+1)/et[0],Vt=kt*dt,yn=kt*Zt,G=Ie/(-dt+Zt),zt=G*-dt;if(ye.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(zt),ae.translateZ(G),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Qe[10]===-1)ae.projectionMatrix.copy(ye.projectionMatrix),ae.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const ht=kt+G,Rt=ft+G,De=Vt-zt,Wt=yn+(Ie-zt),D=Tt*ft/Rt*ht,E=It*ft/Rt*ht;ae.projectionMatrix.makePerspective(De,Wt,D,E,ht,Rt),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function U(ae,ye){ye===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ye.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let ye=ae.near,me=ae.far;y.texture!==null&&(y.depthNear>0&&(ye=y.depthNear),y.depthFar>0&&(me=y.depthFar)),q.near=k.near=N.near=ye,q.far=k.far=N.far=me,(le!==q.near||ce!==q.far)&&(o.updateRenderState({depthNear:q.near,depthFar:q.far}),le=q.near,ce=q.far),q.layers.mask=ae.layers.mask|6,N.layers.mask=q.layers.mask&-5,k.layers.mask=q.layers.mask&-3;const Ie=ae.parent,Qe=q.cameras;U(q,Ie);for(let et=0;et<Qe.length;et++)U(Qe[et],Ie);Qe.length===2?re(q,N,k):q.projectionMatrix.copy(N.projectionMatrix),Q(ae,q,Ie)};function Q(ae,ye,me){me===null?ae.matrix.copy(ye.matrixWorld):(ae.matrix.copy(me.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ye.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ye.projectionMatrix),ae.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=sp*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&x===null))return d},this.setFoveation=function(ae){d=ae,g!==null&&(g.fixedFoveation=ae),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ae)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(q)},this.getCameraTexture=function(ae){return S[ae]};let Fe=null;function He(ae,ye){if(m=ye.getViewerPose(h||u),M=ye,m!==null){const me=m.views;x!==null&&(e.setRenderTargetFramebuffer(P,x.framebuffer),e.setRenderTarget(P));let Ie=!1;me.length!==q.cameras.length&&(q.cameras.length=0,Ie=!0);for(let ft=0;ft<me.length;ft++){const Tt=me[ft];let It=null;if(x!==null)It=x.getViewport(Tt);else{const Zt=v.getViewSubImage(g,Tt);It=Zt.viewport,ft===0&&(e.setRenderTargetTextures(P,Zt.colorTexture,Zt.depthStencilTexture),e.setRenderTarget(P))}let dt=O[ft];dt===void 0&&(dt=new Pi,dt.layers.enable(ft),dt.viewport=new sn,O[ft]=dt),dt.matrix.fromArray(Tt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Tt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(It.x,It.y,It.width,It.height),ft===0&&(q.matrix.copy(dt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ie===!0&&q.cameras.push(dt)}const Qe=o.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){v=r.getBinding();const ft=v.getDepthInformation(me[0]);ft&&ft.isValid&&ft.texture&&y.init(ft,o.renderState)}if(Qe&&Qe.includes("camera-access")&&w){e.state.unbindTexture(),v=r.getBinding();for(let ft=0;ft<me.length;ft++){const Tt=me[ft].camera;if(Tt){let It=S[Tt];It||(It=new qy,S[Tt]=It);const dt=v.getCameraImage(Tt);It.sourceTexture=dt}}}}for(let me=0;me<F.length;me++){const Ie=L[me],Qe=F[me];Ie!==null&&Qe!==void 0&&Qe.update(Ie,ye,h||u)}Fe&&Fe(ae,ye),ye.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ye}),M=null}const Ne=new Zy;Ne.setAnimationLoop(He),this.setAnimationLoop=function(ae){Fe=ae},this.dispose=function(){}}}const $3=new hn,rS=new ct;rS.set(-1,0,0,0,1,0,0,0,1);function Z3(n,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,Ky(n)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,R,b,P){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),v(y,S)):S.isMeshPhongMaterial?(l(y,S),m(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),g(y,S),S.isMeshPhysicalMaterial&&x(y,S,P)):S.isMeshMatcapMaterial?(l(y,S),M(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),w(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?d(y,S,R,b):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===$n&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===$n&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const R=e.get(S),b=R.envMap,P=R.envMapRotation;b&&(y.envMap.value=b,y.envMapRotation.value.setFromMatrix4($3.makeRotationFromEuler(P)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(rS),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function d(y,S,R,b){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*R,y.scale.value=b*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function m(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,R){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===$n&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function w(y,S){const R=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Q3(n,e,t,r){let o={},l={},u=[];const f=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,b){const P=b.program;r.uniformBlockBinding(R,P)}function h(R,b){let P=o[R.id];P===void 0&&(M(R),P=m(R),o[R.id]=P,R.addEventListener("dispose",y));const F=b.program;r.updateUBOMapping(R,F);const L=e.render.frame;l[R.id]!==L&&(g(R),l[R.id]=L)}function m(R){const b=v();R.__bindingPointIndex=b;const P=n.createBuffer(),F=R.__size,L=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,F,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,P),P}function v(){for(let R=0;R<f;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const b=o[R.id],P=R.uniforms,F=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let L=0,B=P.length;L<B;L++){const T=Array.isArray(P[L])?P[L]:[P[L]];for(let N=0,k=T.length;N<k;N++){const O=T[N];if(x(O,L,N,F)===!0){const q=O.__offset,le=Array.isArray(O.value)?O.value:[O.value];let ce=0;for(let H=0;H<le.length;H++){const Z=le[H],Y=w(Z);typeof Z=="number"||typeof Z=="boolean"?(O.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,q+ce,O.__data)):Z.isMatrix3?(O.__data[0]=Z.elements[0],O.__data[1]=Z.elements[1],O.__data[2]=Z.elements[2],O.__data[3]=0,O.__data[4]=Z.elements[3],O.__data[5]=Z.elements[4],O.__data[6]=Z.elements[5],O.__data[7]=0,O.__data[8]=Z.elements[6],O.__data[9]=Z.elements[7],O.__data[10]=Z.elements[8],O.__data[11]=0):ArrayBuffer.isView(Z)?O.__data.set(new Z.constructor(Z.buffer,Z.byteOffset,O.__data.length)):(Z.toArray(O.__data,ce),ce+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(R,b,P,F){const L=R.value,B=b+"_"+P;if(F[B]===void 0)return typeof L=="number"||typeof L=="boolean"?F[B]=L:ArrayBuffer.isView(L)?F[B]=L.slice():F[B]=L.clone(),!0;{const T=F[B];if(typeof L=="number"||typeof L=="boolean"){if(T!==L)return F[B]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(T.equals(L)===!1)return T.copy(L),!0}}return!1}function M(R){const b=R.uniforms;let P=0;const F=16;for(let B=0,T=b.length;B<T;B++){const N=Array.isArray(b[B])?b[B]:[b[B]];for(let k=0,O=N.length;k<O;k++){const q=N[k],le=Array.isArray(q.value)?q.value:[q.value];for(let ce=0,H=le.length;ce<H;ce++){const Z=le[ce],Y=w(Z),X=P%F,ne=X%Y.boundary,re=X+ne;P+=ne,re!==0&&F-re<Y.storage&&(P+=F-re),q.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=P,P+=Y.storage}}}const L=P%F;return L>0&&(P+=F-L),R.__size=P,R.__cache={},this}function w(R){const b={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(b.boundary=4,b.storage=4):R.isVector2?(b.boundary=8,b.storage=8):R.isVector3||R.isColor?(b.boundary=16,b.storage=12):R.isVector4?(b.boundary=16,b.storage=16):R.isMatrix3?(b.boundary=48,b.storage=48):R.isMatrix4?(b.boundary=64,b.storage=64):R.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(b.boundary=16,b.storage=R.byteLength):st("WebGLRenderer: Unsupported uniform value type.",R),b}function y(R){const b=R.target;b.removeEventListener("dispose",y);const P=u.indexOf(b.__bindingPointIndex);u.splice(P,1),n.deleteBuffer(o[b.id]),delete o[b.id],delete l[b.id]}function S(){for(const R in o)n.deleteBuffer(o[R]);u=[],o={},l={}}return{bind:d,update:h,dispose:S}}const J3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function eD(){return Hi===null&&(Hi=new jC(J3,16,16,Fs,Mr),Hi.name="DFG_LUT",Hi.minFilter=Nn,Hi.magFilter=Nn,Hi.wrapS=_r,Hi.wrapT=_r,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class tD{constructor(e={}){const{canvas:t=MC(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:x=pi}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const w=x,y=new Set([Gp,Hp,zp]),S=new Set([pi,Ji,ja,Ya,kp,Vp]),R=new Uint32Array(4),b=new Int32Array(4),P=new ie;let F=null,L=null;const B=[],T=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let O=!1,q=null;this._outputColorSpace=hi;let le=0,ce=0,H=null,Z=-1,Y=null;const X=new sn,ne=new sn;let re=null;const U=new Ft(0);let Q=0,Fe=t.width,He=t.height,Ne=1,ae=null,ye=null;const me=new sn(0,0,Fe,He),Ie=new sn(0,0,Fe,He);let Qe=!1;const et=new jy;let kt=!1,ft=!1;const Tt=new hn,It=new ie,dt=new sn,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function yn(){return H===null?Ne:1}let G=r;function zt(C,j){return t.getContext(C,j)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Op}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",at,!1),G===null){const j="webgl2";if(G=zt(j,C),G===null)throw zt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Et("WebGLRenderer: "+C.message),C}let ht,Rt,De,Wt,D,E,K,he,ge,Me,Pe,fe,pe,Ue,Be,we,Ee,it,ot,mt,z,Ae,de;function Oe(){ht=new e2(G),ht.init(),z=new X3(G,ht),Rt=new jP(G,ht,e,z),De=new G3(G,ht),Rt.reversedDepthBuffer&&g&&De.buffers.depth.setReversed(!0),Wt=new i2(G),D=new b3,E=new W3(G,ht,De,D,Rt,z,Wt),K=new JP(k),he=new aR(G),Ae=new WP(G,he),ge=new t2(G,he,Wt,Ae),Me=new s2(G,ge,he,Ae,Wt),it=new r2(G,Rt,E),Be=new YP(D),Pe=new R3(k,K,ht,Rt,Ae,Be),fe=new Z3(k,D),pe=new D3,Ue=new O3(ht),Ee=new GP(k,K,De,Me,M,d),we=new H3(k,Me,Rt),de=new Q3(G,Wt,Rt,De),ot=new XP(G,ht,Wt),mt=new n2(G,ht,Wt),Wt.programs=Pe.programs,k.capabilities=Rt,k.extensions=ht,k.properties=D,k.renderLists=pe,k.shadowMap=we,k.state=De,k.info=Wt}Oe(),w!==pi&&(N=new a2(w,t.width,t.height,o,l));const Re=new K3(k,G);this.xr=Re,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=ht.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ht.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(C){C!==void 0&&(Ne=C,this.setSize(Fe,He,!1))},this.getSize=function(C){return C.set(Fe,He)},this.setSize=function(C,j,se=!0){if(Re.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=C,He=j,t.width=Math.floor(C*Ne),t.height=Math.floor(j*Ne),se===!0&&(t.style.width=C+"px",t.style.height=j+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(Fe*Ne,He*Ne).floor()},this.setDrawingBufferSize=function(C,j,se){Fe=C,He=j,Ne=se,t.width=Math.floor(C*se),t.height=Math.floor(j*se),this.setViewport(0,0,C,j)},this.setEffects=function(C){if(w===pi){Et("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let j=0;j<C.length;j++)if(C[j].isOutputPass===!0){st("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(X)},this.getViewport=function(C){return C.copy(me)},this.setViewport=function(C,j,se,ee){C.isVector4?me.set(C.x,C.y,C.z,C.w):me.set(C,j,se,ee),De.viewport(X.copy(me).multiplyScalar(Ne).round())},this.getScissor=function(C){return C.copy(Ie)},this.setScissor=function(C,j,se,ee){C.isVector4?Ie.set(C.x,C.y,C.z,C.w):Ie.set(C,j,se,ee),De.scissor(ne.copy(Ie).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(C){De.setScissorTest(Qe=C)},this.setOpaqueSort=function(C){ae=C},this.setTransparentSort=function(C){ye=C},this.getClearColor=function(C){return C.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,se=!0){let ee=0;if(C){let J=!1;if(H!==null){const be=H.texture.format;J=y.has(be)}if(J){const be=H.texture.type,ze=S.has(be),Ce=Ee.getClearColor(),Ye=Ee.getClearAlpha(),Ze=Ce.r,lt=Ce.g,ut=Ce.b;ze?(R[0]=Ze,R[1]=lt,R[2]=ut,R[3]=Ye,G.clearBufferuiv(G.COLOR,0,R)):(b[0]=Ze,b[1]=lt,b[2]=ut,b[3]=Ye,G.clearBufferiv(G.COLOR,0,b))}else ee|=G.COLOR_BUFFER_BIT}j&&(ee|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ee|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&G.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),q=C},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",at,!1),Ee.dispose(),pe.dispose(),Ue.dispose(),D.dispose(),K.dispose(),Me.dispose(),Ae.dispose(),de.dispose(),Pe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",ss),Re.removeEventListener("sessionend",Vs),nr.stop()};function ve(C){C.preventDefault(),Kv("WebGLRenderer: Context Lost."),O=!0}function je(){Kv("WebGLRenderer: Context Restored."),O=!1;const C=Wt.autoReset,j=we.enabled,se=we.autoUpdate,ee=we.needsUpdate,J=we.type;Oe(),Wt.autoReset=C,we.enabled=j,we.autoUpdate=se,we.needsUpdate=ee,we.type=J}function at(C){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ot(C){const j=C.target;j.removeEventListener("dispose",Ot),At(j)}function At(C){In(C),D.remove(C)}function In(C){const j=D.get(C).programs;j!==void 0&&(j.forEach(function(se){Pe.releaseProgram(se)}),C.isShaderMaterial&&Pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,se,ee,J,be){j===null&&(j=Zt);const ze=J.isMesh&&J.matrixWorld.determinant()<0,Ce=rl(C,j,se,ee,J);De.setMaterial(ee,ze);let Ye=se.index,Ze=1;if(ee.wireframe===!0){if(Ye=ge.getWireframeAttribute(se),Ye===void 0)return;Ze=2}const lt=se.drawRange,ut=se.attributes.position;let Ke=lt.start*Ze,St=(lt.start+lt.count)*Ze;be!==null&&(Ke=Math.max(Ke,be.start*Ze),St=Math.min(St,(be.start+be.count)*Ze)),Ye!==null?(Ke=Math.max(Ke,0),St=Math.min(St,Ye.count)):ut!=null&&(Ke=Math.max(Ke,0),St=Math.min(St,ut.count));const Ht=St-Ke;if(Ht<0||Ht===1/0)return;Ae.setup(J,ee,Ce,se,Ye);let Kt,bt=ot;if(Ye!==null&&(Kt=he.get(Ye),bt=mt,bt.setIndex(Kt)),J.isMesh)ee.wireframe===!0?(De.setLineWidth(ee.wireframeLinewidth*yn()),bt.setMode(G.LINES)):bt.setMode(G.TRIANGLES);else if(J.isLine){let on=ee.linewidth;on===void 0&&(on=1),De.setLineWidth(on*yn()),J.isLineSegments?bt.setMode(G.LINES):J.isLineLoop?bt.setMode(G.LINE_LOOP):bt.setMode(G.LINE_STRIP)}else J.isPoints?bt.setMode(G.POINTS):J.isSprite&&bt.setMode(G.TRIANGLES);if(J.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))bt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const on=J._multiDrawStarts,ke=J._multiDrawCounts,Sn=J._multiDrawCount,gt=Ye?he.get(Ye).bytesPerElement:1,zn=D.get(ee).currentProgram.getUniforms();for(let Hn=0;Hn<Sn;Hn++)zn.setValue(G,"_gl_DrawID",Hn),bt.render(on[Hn]/gt,ke[Hn])}else if(J.isInstancedMesh)bt.renderInstances(Ke,Ht,J.count);else if(se.isInstancedBufferGeometry){const on=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,ke=Math.min(se.instanceCount,on);bt.renderInstances(Ke,Ht,ke)}else bt.render(Ke,Ht)};function si(C,j,se){C.transparent===!0&&C.side===vr&&C.forceSinglePass===!1?(C.side=$n,C.needsUpdate=!0,zs(C,j,se),C.side=is,C.needsUpdate=!0,zs(C,j,se),C.side=vr):zs(C,j,se)}this.compile=function(C,j,se=null){se===null&&(se=C),L=Ue.get(se),L.init(j),T.push(L),se.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(L.pushLight(J),J.castShadow&&L.pushShadow(J))}),C!==se&&C.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(L.pushLight(J),J.castShadow&&L.pushShadow(J))}),L.setupLights();const ee=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const be=J.material;if(be)if(Array.isArray(be))for(let ze=0;ze<be.length;ze++){const Ce=be[ze];si(Ce,se,J),ee.add(Ce)}else si(be,se,J),ee.add(be)}),L=T.pop(),ee},this.compileAsync=function(C,j,se=null){const ee=this.compile(C,j,se);return new Promise(J=>{function be(){if(ee.forEach(function(ze){D.get(ze).currentProgram.isReady()&&ee.delete(ze)}),ee.size===0){J(C);return}setTimeout(be,10)}ht.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let tr=null;function ks(C){tr&&tr(C)}function ss(){nr.stop()}function Vs(){nr.start()}const nr=new Zy;nr.setAnimationLoop(ks),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(C){tr=C,Re.setAnimationLoop(C),C===null?nr.stop():nr.start()},Re.addEventListener("sessionstart",ss),Re.addEventListener("sessionend",Vs),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;q!==null&&q.renderStart(C,j);const se=Re.enabled===!0&&Re.isPresenting===!0,ee=N!==null&&(H===null||se)&&N.begin(k,H);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(j),j=Re.getCamera()),C.isScene===!0&&C.onBeforeRender(k,C,j,H),L=Ue.get(C,T.length),L.init(j),L.state.textureUnits=E.getTextureUnits(),T.push(L),Tt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),et.setFromProjectionMatrix(Tt,Yi,j.reversedDepth),ft=this.localClippingEnabled,kt=Be.init(this.clippingPlanes,ft),F=pe.get(C,B.length),F.init(),B.push(F),Re.enabled===!0&&Re.isPresenting===!0){const ze=k.xr.getDepthSensingMesh();ze!==null&&Ho(ze,j,-1/0,k.sortObjects)}Ho(C,j,0,k.sortObjects),F.finish(),k.sortObjects===!0&&F.sort(ae,ye),Vt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Vt&&Ee.addToRenderList(F,C),this.info.render.frame++,kt===!0&&Be.beginShadows();const J=L.state.shadowsArray;if(we.render(J,C,j),kt===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&N.hasRenderPass())===!1){const ze=F.opaque,Ce=F.transmissive;if(L.setupLights(),j.isArrayCamera){const Ye=j.cameras;if(Ce.length>0)for(let Ze=0,lt=Ye.length;Ze<lt;Ze++){const ut=Ye[Ze];Ui(ze,Ce,C,ut)}Vt&&Ee.render(C);for(let Ze=0,lt=Ye.length;Ze<lt;Ze++){const ut=Ye[Ze];nl(F,C,ut,ut.viewport)}}else Ce.length>0&&Ui(ze,Ce,C,j),Vt&&Ee.render(C),nl(F,C,j)}H!==null&&ce===0&&(E.updateMultisampleRenderTarget(H),E.updateRenderTargetMipmap(H)),ee&&N.end(k),C.isScene===!0&&C.onAfterRender(k,C,j),Ae.resetDefaultState(),Z=-1,Y=null,T.pop(),T.length>0?(L=T[T.length-1],E.setTextureUnits(L.state.textureUnits),kt===!0&&Be.setGlobalState(k.clippingPlanes,L.state.camera)):L=null,B.pop(),B.length>0?F=B[B.length-1]:F=null,q!==null&&q.renderEnd()};function Ho(C,j,se,ee){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLightProbeGrid)L.pushLightProbeGrid(C);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||et.intersectsSprite(C)){ee&&dt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Tt);const ze=Me.update(C),Ce=C.material;Ce.visible&&F.push(C,ze,Ce,se,dt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||et.intersectsObject(C))){const ze=Me.update(C),Ce=C.material;if(ee&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),dt.copy(C.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),dt.copy(ze.boundingSphere.center)),dt.applyMatrix4(C.matrixWorld).applyMatrix4(Tt)),Array.isArray(Ce)){const Ye=ze.groups;for(let Ze=0,lt=Ye.length;Ze<lt;Ze++){const ut=Ye[Ze],Ke=Ce[ut.materialIndex];Ke&&Ke.visible&&F.push(C,ze,Ke,se,dt.z,ut)}}else Ce.visible&&F.push(C,ze,Ce,se,dt.z,null)}}const be=C.children;for(let ze=0,Ce=be.length;ze<Ce;ze++)Ho(be[ze],j,se,ee)}function nl(C,j,se,ee){const{opaque:J,transmissive:be,transparent:ze}=C;L.setupLightsView(se),kt===!0&&Be.setGlobalState(k.clippingPlanes,se),ee&&De.viewport(X.copy(ee)),J.length>0&&os(J,j,se),be.length>0&&os(be,j,se),ze.length>0&&os(ze,j,se),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Ui(C,j,se,ee){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ee.id]===void 0){const Ke=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ee.id]=new $i(1,1,{generateMipmaps:!0,type:Ke?Mr:pi,minFilter:Ds,samples:Math.max(4,Rt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const be=L.state.transmissionRenderTarget[ee.id],ze=ee.viewport||X;be.setSize(ze.z*k.transmissionResolutionScale,ze.w*k.transmissionResolutionScale);const Ce=k.getRenderTarget(),Ye=k.getActiveCubeFace(),Ze=k.getActiveMipmapLevel();k.setRenderTarget(be),k.getClearColor(U),Q=k.getClearAlpha(),Q<1&&k.setClearColor(16777215,.5),k.clear(),Vt&&Ee.render(se);const lt=k.toneMapping;k.toneMapping=Ki;const ut=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),L.setupLightsView(ee),kt===!0&&Be.setGlobalState(k.clippingPlanes,ee),os(C,se,ee),E.updateMultisampleRenderTarget(be),E.updateRenderTargetMipmap(be),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let St=0,Ht=j.length;St<Ht;St++){const Kt=j[St],{object:bt,geometry:on,material:ke,group:Sn}=Kt;if(ke.side===vr&&bt.layers.test(ee.layers)){const gt=ke.side;ke.side=$n,ke.needsUpdate=!0,Go(bt,se,ee,on,ke,Sn),ke.side=gt,ke.needsUpdate=!0,Ke=!0}}Ke===!0&&(E.updateMultisampleRenderTarget(be),E.updateRenderTargetMipmap(be))}k.setRenderTarget(Ce,Ye,Ze),k.setClearColor(U,Q),ut!==void 0&&(ee.viewport=ut),k.toneMapping=lt}function os(C,j,se){const ee=j.isScene===!0?j.overrideMaterial:null;for(let J=0,be=C.length;J<be;J++){const ze=C[J],{object:Ce,geometry:Ye,group:Ze}=ze;let lt=ze.material;lt.allowOverride===!0&&ee!==null&&(lt=ee),Ce.layers.test(se.layers)&&Go(Ce,j,se,Ye,lt,Ze)}}function Go(C,j,se,ee,J,be){C.onBeforeRender(k,j,se,ee,J,be),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(k,j,se,ee,C,be),J.transparent===!0&&J.side===vr&&J.forceSinglePass===!1?(J.side=$n,J.needsUpdate=!0,k.renderBufferDirect(se,j,ee,J,C,be),J.side=is,J.needsUpdate=!0,k.renderBufferDirect(se,j,ee,J,C,be),J.side=vr):k.renderBufferDirect(se,j,ee,J,C,be),C.onAfterRender(k,j,se,ee,J,be)}function zs(C,j,se){j.isScene!==!0&&(j=Zt);const ee=D.get(C),J=L.state.lights,be=L.state.shadowsArray,ze=J.state.version,Ce=Pe.getParameters(C,J.state,be,j,se,L.state.lightProbeGridArray),Ye=Pe.getProgramCacheKey(Ce);let Ze=ee.programs;ee.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?j.environment:null,ee.fog=j.fog;const lt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ee.envMap=K.get(C.envMap||ee.environment,lt),ee.envMapRotation=ee.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,Ze===void 0&&(C.addEventListener("dispose",Ot),Ze=new Map,ee.programs=Ze);let ut=Ze.get(Ye);if(ut!==void 0){if(ee.currentProgram===ut&&ee.lightsStateVersion===ze)return Xo(C,Ce),ut}else Ce.uniforms=Pe.getUniforms(C),q!==null&&C.isNodeMaterial&&q.build(C,se,Ce),C.onBeforeCompile(Ce,k),ut=Pe.acquireProgram(Ce,Ye),Ze.set(Ye,ut),ee.uniforms=Ce.uniforms;const Ke=ee.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ke.clippingPlanes=Be.uniform),Xo(C,Ce),ee.needsLights=gc(C),ee.lightsStateVersion=ze,ee.needsLights&&(Ke.ambientLightColor.value=J.state.ambient,Ke.lightProbe.value=J.state.probe,Ke.directionalLights.value=J.state.directional,Ke.directionalLightShadows.value=J.state.directionalShadow,Ke.spotLights.value=J.state.spot,Ke.spotLightShadows.value=J.state.spotShadow,Ke.rectAreaLights.value=J.state.rectArea,Ke.ltc_1.value=J.state.rectAreaLTC1,Ke.ltc_2.value=J.state.rectAreaLTC2,Ke.pointLights.value=J.state.point,Ke.pointLightShadows.value=J.state.pointShadow,Ke.hemisphereLights.value=J.state.hemi,Ke.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ke.spotLightMatrix.value=J.state.spotLightMatrix,Ke.spotLightMap.value=J.state.spotLightMap,Ke.pointShadowMatrix.value=J.state.pointShadowMatrix),ee.lightProbeGrid=L.state.lightProbeGridArray.length>0,ee.currentProgram=ut,ee.uniformsList=null,ut}function Wo(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=Wu.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Xo(C,j){const se=D.get(C);se.outputColorSpace=j.outputColorSpace,se.batching=j.batching,se.batchingColor=j.batchingColor,se.instancing=j.instancing,se.instancingColor=j.instancingColor,se.instancingMorph=j.instancingMorph,se.skinning=j.skinning,se.morphTargets=j.morphTargets,se.morphNormals=j.morphNormals,se.morphColors=j.morphColors,se.morphTargetsCount=j.morphTargetsCount,se.numClippingPlanes=j.numClippingPlanes,se.numIntersection=j.numClipIntersection,se.vertexAlphas=j.vertexAlphas,se.vertexTangents=j.vertexTangents,se.toneMapping=j.toneMapping}function il(C,j){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;P.setFromMatrixPosition(j.matrixWorld);for(let se=0,ee=C.length;se<ee;se++){const J=C[se];if(J.texture!==null&&J.boundingBox.containsPoint(P))return J}return null}function rl(C,j,se,ee,J){j.isScene!==!0&&(j=Zt),E.resetTextureUnits();const be=j.fog,ze=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?j.environment:null,Ce=H===null?k.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:xt.workingColorSpace,Ye=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Ze=K.get(ee.envMap||ze,Ye),lt=ee.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ut=!!se.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ke=!!se.morphAttributes.position,St=!!se.morphAttributes.normal,Ht=!!se.morphAttributes.color;let Kt=Ki;ee.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Kt=k.toneMapping);const bt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,on=bt!==void 0?bt.length:0,ke=D.get(ee),Sn=L.state.lights;if(kt===!0&&(ft===!0||C!==Y)){const Pt=C===Y&&ee.id===Z;Be.setState(ee,C,Pt)}let gt=!1;ee.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Sn.state.version||ke.outputColorSpace!==Ce||J.isBatchedMesh&&ke.batching===!1||!J.isBatchedMesh&&ke.batching===!0||J.isBatchedMesh&&ke.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&ke.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&ke.instancing===!1||!J.isInstancedMesh&&ke.instancing===!0||J.isSkinnedMesh&&ke.skinning===!1||!J.isSkinnedMesh&&ke.skinning===!0||J.isInstancedMesh&&ke.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ke.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&ke.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&ke.instancingMorph===!1&&J.morphTexture!==null||ke.envMap!==Ze||ee.fog===!0&&ke.fog!==be||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Be.numPlanes||ke.numIntersection!==Be.numIntersection)||ke.vertexAlphas!==lt||ke.vertexTangents!==ut||ke.morphTargets!==Ke||ke.morphNormals!==St||ke.morphColors!==Ht||ke.toneMapping!==Kt||ke.morphTargetsCount!==on||!!ke.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,ke.__version=ee.version);let zn=ke.currentProgram;gt===!0&&(zn=zs(ee,j,J),q&&ee.isNodeMaterial&&q.onUpdateProgram(ee,zn,ke));let Hn=!1,vt=!1,ir=!1;const Ct=zn.getUniforms(),Xt=ke.uniforms;if(De.useProgram(zn.program)&&(Hn=!0,vt=!0,ir=!0),ee.id!==Z&&(Z=ee.id,vt=!0),ke.needsLights){const Pt=il(L.state.lightProbeGridArray,J);ke.lightProbeGrid!==Pt&&(ke.lightProbeGrid=Pt,vt=!0)}if(Hn||Y!==C){De.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ct.setValue(G,"projectionMatrix",C.projectionMatrix),Ct.setValue(G,"viewMatrix",C.matrixWorldInverse);const _i=Ct.map.cameraPosition;_i!==void 0&&_i.setValue(G,It.setFromMatrixPosition(C.matrixWorld)),Rt.logarithmicDepthBuffer&&Ct.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Ct.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),Y!==C&&(Y=C,vt=!0,ir=!0)}if(ke.needsLights&&(Sn.state.directionalShadowMap.length>0&&Ct.setValue(G,"directionalShadowMap",Sn.state.directionalShadowMap,E),Sn.state.spotShadowMap.length>0&&Ct.setValue(G,"spotShadowMap",Sn.state.spotShadowMap,E),Sn.state.pointShadowMap.length>0&&Ct.setValue(G,"pointShadowMap",Sn.state.pointShadowMap,E)),J.isSkinnedMesh){Ct.setOptional(G,J,"bindMatrix"),Ct.setOptional(G,J,"bindMatrixInverse");const Pt=J.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),Ct.setValue(G,"boneTexture",Pt.boneTexture,E))}J.isBatchedMesh&&(Ct.setOptional(G,J,"batchingTexture"),Ct.setValue(G,"batchingTexture",J._matricesTexture,E),Ct.setOptional(G,J,"batchingIdTexture"),Ct.setValue(G,"batchingIdTexture",J._indirectTexture,E),Ct.setOptional(G,J,"batchingColorTexture"),J._colorsTexture!==null&&Ct.setValue(G,"batchingColorTexture",J._colorsTexture,E));const vi=se.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&it.update(J,se,zn),(vt||ke.receiveShadow!==J.receiveShadow)&&(ke.receiveShadow=J.receiveShadow,Ct.setValue(G,"receiveShadow",J.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&j.environment!==null&&(Xt.envMapIntensity.value=j.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=eD()),vt){if(Ct.setValue(G,"toneMappingExposure",k.toneMappingExposure),ke.needsLights&&mc(Xt,ir),be&&ee.fog===!0&&fe.refreshFogUniforms(Xt,be),fe.refreshMaterialUniforms(Xt,ee,Ne,He,L.state.transmissionRenderTarget[C.id]),ke.needsLights&&ke.lightProbeGrid){const Pt=ke.lightProbeGrid;Xt.probesSH.value=Pt.texture,Xt.probesMin.value.copy(Pt.boundingBox.min),Xt.probesMax.value.copy(Pt.boundingBox.max),Xt.probesResolution.value.copy(Pt.resolution)}Wu.upload(G,Wo(ke),Xt,E)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Wu.upload(G,Wo(ke),Xt,E),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Ct.setValue(G,"center",J.center),Ct.setValue(G,"modelViewMatrix",J.modelViewMatrix),Ct.setValue(G,"normalMatrix",J.normalMatrix),Ct.setValue(G,"modelMatrix",J.matrixWorld),ee.uniformsGroups!==void 0){const Pt=ee.uniformsGroups;for(let _i=0,Fi=Pt.length;_i<Fi;_i++){const as=Pt[_i];de.update(as,zn),de.bind(as,zn)}}return zn}function mc(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function gc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(C,j,se){const ee=D.get(C);ee.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),D.get(C.texture).__webglTexture=j,D.get(C.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:se,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const se=D.get(C);se.__webglFramebuffer=j,se.__useDefaultFramebuffer=j===void 0};const Qt=G.createFramebuffer();this.setRenderTarget=function(C,j=0,se=0){H=C,le=j,ce=se;let ee=null,J=!1,be=!1;if(C){const Ce=D.get(C);if(Ce.__useDefaultFramebuffer!==void 0){De.bindFramebuffer(G.FRAMEBUFFER,Ce.__webglFramebuffer),X.copy(C.viewport),ne.copy(C.scissor),re=C.scissorTest,De.viewport(X),De.scissor(ne),De.setScissorTest(re),Z=-1;return}else if(Ce.__webglFramebuffer===void 0)E.setupRenderTarget(C);else if(Ce.__hasExternalTextures)E.rebindTextures(C,D.get(C.texture).__webglTexture,D.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const lt=C.depthTexture;if(Ce.__boundDepthTexture!==lt){if(lt!==null&&D.has(lt)&&(C.width!==lt.image.width||C.height!==lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(C)}}const Ye=C.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(be=!0);const Ze=D.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ze[j])?ee=Ze[j][se]:ee=Ze[j],J=!0):C.samples>0&&E.useMultisampledRTT(C)===!1?ee=D.get(C).__webglMultisampledFramebuffer:Array.isArray(Ze)?ee=Ze[se]:ee=Ze,X.copy(C.viewport),ne.copy(C.scissor),re=C.scissorTest}else X.copy(me).multiplyScalar(Ne).floor(),ne.copy(Ie).multiplyScalar(Ne).floor(),re=Qe;if(se!==0&&(ee=Qt),De.bindFramebuffer(G.FRAMEBUFFER,ee)&&De.drawBuffers(C,ee),De.viewport(X),De.scissor(ne),De.setScissorTest(re),J){const Ce=D.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ce.__webglTexture,se)}else if(be){const Ce=j;for(let Ye=0;Ye<C.textures.length;Ye++){const Ze=D.get(C.textures[Ye]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ye,Ze.__webglTexture,se,Ce)}}else if(C!==null&&se!==0){const Ce=D.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ce.__webglTexture,se)}Z=-1},this.readRenderTargetPixels=function(C,j,se,ee,J,be,ze,Ce=0){if(!(C&&C.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=D.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(Ye=Ye[ze]),Ye){De.bindFramebuffer(G.FRAMEBUFFER,Ye);try{const Ze=C.textures[Ce],lt=Ze.format,ut=Ze.type;if(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ce),!Rt.textureFormatReadable(lt)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(ut)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-ee&&se>=0&&se<=C.height-J&&G.readPixels(j,se,ee,J,z.convert(lt),z.convert(ut),be)}finally{const Ze=H!==null?D.get(H).__webglFramebuffer:null;De.bindFramebuffer(G.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(C,j,se,ee,J,be,ze,Ce=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=D.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(Ye=Ye[ze]),Ye)if(j>=0&&j<=C.width-ee&&se>=0&&se<=C.height-J){De.bindFramebuffer(G.FRAMEBUFFER,Ye);const Ze=C.textures[Ce],lt=Ze.format,ut=Ze.type;if(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ce),!Rt.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ke),G.bufferData(G.PIXEL_PACK_BUFFER,be.byteLength,G.STREAM_READ),G.readPixels(j,se,ee,J,z.convert(lt),z.convert(ut),0);const St=H!==null?D.get(H).__webglFramebuffer:null;De.bindFramebuffer(G.FRAMEBUFFER,St);const Ht=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await EC(G,Ht,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ke),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,be),G.deleteBuffer(Ke),G.deleteSync(Ht),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,se=0){const ee=Math.pow(2,-se),J=Math.floor(C.image.width*ee),be=Math.floor(C.image.height*ee),ze=j!==null?j.x:0,Ce=j!==null?j.y:0;E.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,se,0,0,ze,Ce,J,be),De.unbindTexture()};const vc=G.createFramebuffer(),jo=G.createFramebuffer();this.copyTextureToTexture=function(C,j,se=null,ee=null,J=0,be=0){let ze,Ce,Ye,Ze,lt,ut,Ke,St,Ht;const Kt=C.isCompressedTexture?C.mipmaps[be]:C.image;if(se!==null)ze=se.max.x-se.min.x,Ce=se.max.y-se.min.y,Ye=se.isBox3?se.max.z-se.min.z:1,Ze=se.min.x,lt=se.min.y,ut=se.isBox3?se.min.z:0;else{const Xt=Math.pow(2,-J);ze=Math.floor(Kt.width*Xt),Ce=Math.floor(Kt.height*Xt),C.isDataArrayTexture?Ye=Kt.depth:C.isData3DTexture?Ye=Math.floor(Kt.depth*Xt):Ye=1,Ze=0,lt=0,ut=0}ee!==null?(Ke=ee.x,St=ee.y,Ht=ee.z):(Ke=0,St=0,Ht=0);const bt=z.convert(j.format),on=z.convert(j.type);let ke;j.isData3DTexture?(E.setTexture3D(j,0),ke=G.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(E.setTexture2DArray(j,0),ke=G.TEXTURE_2D_ARRAY):(E.setTexture2D(j,0),ke=G.TEXTURE_2D),De.activeTexture(G.TEXTURE0),De.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),De.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),De.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment);const Sn=De.getParameter(G.UNPACK_ROW_LENGTH),gt=De.getParameter(G.UNPACK_IMAGE_HEIGHT),zn=De.getParameter(G.UNPACK_SKIP_PIXELS),Hn=De.getParameter(G.UNPACK_SKIP_ROWS),vt=De.getParameter(G.UNPACK_SKIP_IMAGES);De.pixelStorei(G.UNPACK_ROW_LENGTH,Kt.width),De.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Kt.height),De.pixelStorei(G.UNPACK_SKIP_PIXELS,Ze),De.pixelStorei(G.UNPACK_SKIP_ROWS,lt),De.pixelStorei(G.UNPACK_SKIP_IMAGES,ut);const ir=C.isDataArrayTexture||C.isData3DTexture,Ct=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const Xt=D.get(C),vi=D.get(j),Pt=D.get(Xt.__renderTarget),_i=D.get(vi.__renderTarget);De.bindFramebuffer(G.READ_FRAMEBUFFER,Pt.__webglFramebuffer),De.bindFramebuffer(G.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Fi=0;Fi<Ye;Fi++)ir&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,D.get(C).__webglTexture,J,ut+Fi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,D.get(j).__webglTexture,be,Ht+Fi)),G.blitFramebuffer(Ze,lt,ze,Ce,Ke,St,ze,Ce,G.DEPTH_BUFFER_BIT,G.NEAREST);De.bindFramebuffer(G.READ_FRAMEBUFFER,null),De.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||D.has(C)){const Xt=D.get(C),vi=D.get(j);De.bindFramebuffer(G.READ_FRAMEBUFFER,vc),De.bindFramebuffer(G.DRAW_FRAMEBUFFER,jo);for(let Pt=0;Pt<Ye;Pt++)ir?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xt.__webglTexture,J,ut+Pt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Xt.__webglTexture,J),Ct?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,vi.__webglTexture,be,Ht+Pt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,vi.__webglTexture,be),J!==0?G.blitFramebuffer(Ze,lt,ze,Ce,Ke,St,ze,Ce,G.COLOR_BUFFER_BIT,G.NEAREST):Ct?G.copyTexSubImage3D(ke,be,Ke,St,Ht+Pt,Ze,lt,ze,Ce):G.copyTexSubImage2D(ke,be,Ke,St,Ze,lt,ze,Ce);De.bindFramebuffer(G.READ_FRAMEBUFFER,null),De.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ct?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(ke,be,Ke,St,Ht,ze,Ce,Ye,bt,on,Kt.data):j.isCompressedArrayTexture?G.compressedTexSubImage3D(ke,be,Ke,St,Ht,ze,Ce,Ye,bt,Kt.data):G.texSubImage3D(ke,be,Ke,St,Ht,ze,Ce,Ye,bt,on,Kt):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,be,Ke,St,ze,Ce,bt,on,Kt.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,be,Ke,St,Kt.width,Kt.height,bt,Kt.data):G.texSubImage2D(G.TEXTURE_2D,be,Ke,St,ze,Ce,bt,on,Kt);De.pixelStorei(G.UNPACK_ROW_LENGTH,Sn),De.pixelStorei(G.UNPACK_IMAGE_HEIGHT,gt),De.pixelStorei(G.UNPACK_SKIP_PIXELS,zn),De.pixelStorei(G.UNPACK_SKIP_ROWS,Hn),De.pixelStorei(G.UNPACK_SKIP_IMAGES,vt),be===0&&j.generateMipmaps&&G.generateMipmap(ke),De.unbindTexture()},this.initRenderTarget=function(C){D.get(C).__webglFramebuffer===void 0&&E.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?E.setTextureCube(C,0):C.isData3DTexture?E.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?E.setTexture2DArray(C,0):E.setTexture2D(C,0),De.unbindTexture()},this.resetState=function(){le=0,ce=0,H=null,De.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}function nD(){const n=Je.useRef(null);return Je.useEffect(()=>{if(!n.current)return;const e=n.current,t=`
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,r=`
      #define TWO_PI 6.2831853072
      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time * 0.03;
        float lineWidth = 0.0015;

        vec3 baseColor = vec3(0.172, 0.290, 0.243);
        vec3 goldColor = vec3(0.788, 0.573, 0.165);
        vec3 greenLight = vec3(0.243, 0.420, 0.353);
        vec3 parchment = vec3(0.961, 0.937, 0.878);

        vec3 color = baseColor;

        float gold = 0.0;
        for(int i = 0; i < 5; i++){
          gold += lineWidth * float(i * i) / abs(
            fract(t + float(i) * 0.015) * 4.5
            - length(uv)
            + mod(uv.x + uv.y, 0.25)
          );
        }
        color += goldColor * gold * 1.2;

        float greenL = 0.0;
        for(int i = 0; i < 4; i++){
          greenL += lineWidth * float(i) / abs(
            fract(t * 0.8 - 0.02 * float(i)) * 5.0
            - length(uv * 1.1)
            + mod(uv.x - uv.y, 0.3)
          );
        }
        color += greenLight * greenL * 0.6;

        float cream = 0.0;
        for(int i = 0; i < 3; i++){
          cream += (lineWidth * 0.5) * float(i) / abs(
            fract(t * 1.2 + float(i) * 0.03) * 6.0
            - length(uv * 0.9)
            + mod(uv.y, 0.18)
          );
        }
        color += parchment * cream * 0.3;

        float vignette = 1.0 - smoothstep(0.6, 1.4, length(uv));
        color *= vignette;

        gl_FragColor = vec4(color, 1.0);
      }
    `,o=new qp;o.position.z=1;const l=new kC,u=new tl(2,2),f={time:{value:1},resolution:{value:new Nt}},d=new Ii({uniforms:f,vertexShader:t,fragmentShader:r});l.add(new er(u,d));const h=new tD({antialias:!0});h.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(h.domElement);const m=()=>{const x=e.clientWidth,M=e.clientHeight;h.setSize(x,M),f.resolution.value.set(h.domElement.width,h.domElement.height)};m(),window.addEventListener("resize",m);let v;const g=()=>{v=requestAnimationFrame(g),f.time.value+=.04,h.render(l,o)};return g(),()=>{window.removeEventListener("resize",m),cancelAnimationFrame(v),e.contains(h.domElement)&&e.removeChild(h.domElement),h.dispose(),u.dispose(),d.dispose()}},[]),ue.jsx("div",{ref:n,style:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"hidden",zIndex:0}})}const Ut=[.25,.1,.25,1],Ia={once:!0,margin:"-80px"},iD=["atlasi — from the persian atlas.","a fabric so smooth, it was worn only by those who knew the worth of softness.","a flower that blooms in every color, in every garden.","a sky that holds everything above it, quietly.","atlasi café was made for the in-between moments — warm like silk, colorful like the flower, open like the ninth sky.","somewhere you can arrive exactly as you are."],rD=[{nameEn:"TIRAMISU LATTE",nameFa:"لاته تیرامیسو",description:"layers of warmth in every sip",price:"$—"},{nameEn:"RASPBERRY & ROSE MATCHA",nameFa:"ماچای رز و تمشک",description:"bloomed with intention",price:"$—"},{nameEn:"SAFFRON & ROSE MATCHA",nameFa:"ماچای زعفران و گل",description:"a persian afternoon, iced",price:"$—"}];function sD(){const[n,e]=Je.useState(!1),t=Je.useRef(null),r=wa(t,Ia),o=Je.useRef(null),l=wa(o,Ia),u=Je.useRef(null),f=wa(u,Ia),d=Je.useRef(null),h=wa(d,Ia),m=Je.useRef(null),v=wa(m,Ia);Je.useEffect(()=>{const M=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",M),()=>window.removeEventListener("scroll",M)},[]);const g=M=>{const w=document.getElementById(M);w&&w.scrollIntoView({behavior:"smooth"})},x="born from a question.".split(" ");return ue.jsxs("div",{className:"min-h-screen",style:{fontFamily:"Inter, sans-serif"},children:[ue.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-12 transition-all duration-300 ${n?"bg-[rgba(44,74,62,0.85)] backdrop-blur-[20px] border-b border-[rgba(201,146,42,0.3)]":"bg-transparent"}`,children:[ue.jsx("div",{className:"text-xl text-[#F5EFE0] cursor-pointer",style:{fontFamily:"Playfair Display, serif",fontStyle:"italic"},onClick:()=>g("hero"),children:"ATLASI"}),ue.jsx("div",{className:"flex gap-10",children:[{label:"HOME",id:"hero"},{label:"MENU",id:"menu"},{label:"ABOUT",id:"about"}].map(M=>ue.jsx("button",{onClick:()=>g(M.id),className:"text-xs text-[#F5EFE0] uppercase tracking-[0.2em] transition-colors duration-300 hover:text-[#C9922A]",children:M.label},M.id))})]}),ue.jsxs("section",{id:"hero",className:"relative h-screen flex flex-col items-center justify-center overflow-hidden",style:{position:"relative",overflow:"hidden",backgroundColor:"#2C4A3E"},children:[ue.jsx(nD,{}),ue.jsx("div",{className:"absolute inset-0 opacity-[0.07] z-[5]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L45 15 L30 30 L15 15 Z M0 30 L15 45 L30 30 L15 15 Z M30 30 L45 45 L60 30 L45 15 Z M30 30 L45 45 L30 60 L15 45 Z' fill='%23C9922A' fill-rule='evenodd'/%3E%3C/svg%3E")`}}),ue.jsxs("div",{className:"relative z-10 text-center",style:{position:"relative",zIndex:10},children:[ue.jsx("div",{className:"text-[#C9922A] text-2xl mb-8",children:"✦"}),ue.jsxs("div",{className:"relative border border-[#C9922A] px-16 py-12",children:[ue.jsx("div",{className:"absolute -top-1 -left-1 text-[#C9922A]",children:"✦"}),ue.jsx("div",{className:"absolute -top-1 -right-1 text-[#C9922A]",children:"✦"}),ue.jsx("div",{className:"absolute -bottom-1 -left-1 text-[#C9922A]",children:"✦"}),ue.jsx("div",{className:"absolute -bottom-1 -right-1 text-[#C9922A]",children:"✦"}),ue.jsx("h1",{className:"text-5xl text-[#F5EFE0] mb-3",style:{fontFamily:"Playfair Display, serif",fontStyle:"italic"},children:"ATLASI CAFÉ"}),ue.jsx("div",{className:"w-24 h-[1px] bg-[#C9922A] mx-auto my-3"}),ue.jsx("div",{className:"text-2xl text-[#C9922A]",style:{fontFamily:"Vazirmatn, sans-serif",fontWeight:700},children:"کافه اطلسی"}),ue.jsx("p",{className:"text-sm text-[#F5EFE0] opacity-70 mt-4 italic",children:"soft like silk. open like the sky."}),ue.jsx("p",{className:"text-sm text-[#C9922A] opacity-80",style:{fontFamily:"Vazirmatn, sans-serif"},children:"«نرم چون اطلس، باز چون آسمان»"})]}),ue.jsx("div",{className:"text-[#C9922A] text-2xl mt-8",children:"✦"})]}),ue.jsx(Dt.div,{className:"absolute bottom-12 z-10",style:{position:"absolute",zIndex:10},animate:{y:[0,12,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},children:ue.jsx("div",{className:"w-1 h-12 bg-[#C9922A] opacity-60"})})]}),ue.jsx("section",{className:"bg-[#F5EFE0] border-t border-[#C9922A]",children:ue.jsxs("div",{className:"grid lg:grid-cols-[3fr_2fr] gap-0",children:[ue.jsxs("div",{ref:t,className:"py-24 px-12",children:[ue.jsx("div",{className:"text-xs uppercase tracking-[0.2em] text-[#8B6F47] mb-6",children:"OUR STORY — داستان ما"}),ue.jsx(Dt.h2,{className:"text-4xl text-[#1A1A1A] leading-tight",style:{fontFamily:"Playfair Display, serif",fontStyle:"italic"},initial:{opacity:0,y:30},animate:r?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.9,ease:Ut},children:"soft like silk. open like the sky."}),ue.jsx("div",{className:"text-base text-[#8B6F47] leading-[1.9] mt-6",style:{fontWeight:300},children:iD.map((M,w)=>ue.jsx(Dt.p,{className:w>0?"mt-3":void 0,initial:{clipPath:"inset(0 100% 0 0)"},animate:r?{clipPath:"inset(0 0% 0 0)"}:{clipPath:"inset(0 100% 0 0)"},transition:{duration:.8,delay:w*.15,ease:Ut},children:M},w))}),ue.jsxs("div",{className:"flex items-center gap-2 text-[#C9922A] mt-8",children:[ue.jsx(Dt.div,{className:"h-[1px] bg-[#C9922A] w-12 origin-left",initial:{scaleX:0},animate:r?{scaleX:1}:{scaleX:0},transition:{duration:1,delay:.5,ease:Ut}}),ue.jsx("span",{children:"✦"}),ue.jsx(Dt.div,{className:"h-[1px] bg-[#C9922A] w-12 origin-right",initial:{scaleX:0},animate:r?{scaleX:1}:{scaleX:0},transition:{duration:1,delay:.5,ease:Ut}})]}),ue.jsx("div",{className:"text-2xl text-[#C9922A] mt-4",style:{fontFamily:"Vazirmatn, sans-serif"},children:"نوش جان"})]}),ue.jsxs("div",{className:"bg-[#EDE5D0] flex flex-col items-center justify-center p-12",children:[ue.jsx("div",{className:"w-[280px] h-[280px] bg-[#2C4A3E] border border-[#C9922A] flex items-center justify-center",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9922A' fill-opacity='0.15'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3Cpath d='M0 40h40v40H0V40zM40 0h40v40H40V0z' transform='rotate(45 40 40)'/%3E%3C/g%3E%3C/svg%3E")`},children:ue.jsx("div",{className:"text-[#C9922A] text-6xl",children:"✦"})}),ue.jsx("div",{className:"text-xs uppercase tracking-[0.2em] text-[#8B6F47] mt-4",children:"@atlasicafe"})]})]})}),ue.jsxs("section",{ref:o,className:"bg-[#2C4A3E] py-24 px-6",children:[ue.jsxs("div",{className:"text-center mb-16",children:[ue.jsx("div",{className:"w-32 h-[1px] bg-[#C9922A] mx-auto"}),ue.jsx(Dt.h2,{className:"text-4xl text-[#F5EFE0] my-4",style:{fontFamily:"Playfair Display, serif",fontStyle:"italic"},initial:{opacity:0,y:24},animate:l?{opacity:1,y:0}:{opacity:0,y:24},transition:{duration:.8,ease:Ut},children:"OUR FAVORITES"}),ue.jsx("div",{className:"text-base text-[#C9922A]",style:{fontFamily:"Vazirmatn, sans-serif"},children:"علاقه‌مندی‌ها"}),ue.jsx("div",{className:"w-32 h-[1px] bg-[#C9922A] mx-auto mt-4"})]}),ue.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto",children:rD.map((M,w)=>{const y=[{initial:{x:-20,y:40,opacity:0},delay:0},{initial:{y:50,opacity:0},delay:.15},{initial:{x:20,y:40,opacity:0},delay:.3}][w];return ue.jsxs(Dt.div,{className:"bg-[#1E3530] border border-[#C9922A]",initial:y.initial,animate:l?{x:0,y:0,opacity:1}:y.initial,transition:{duration:.7,delay:y.delay,ease:Ut},children:[ue.jsx("div",{className:"aspect-[4/5] bg-[#2C4A3E] relative p-1",children:ue.jsx("div",{className:"w-full h-full border-[3px] border-[#C9922A] flex items-center justify-center",children:ue.jsx("div",{className:"text-[#C9922A] text-5xl opacity-30",children:"✦"})})}),ue.jsxs("div",{className:"p-5",children:[ue.jsx("div",{className:"text-lg text-[#F5EFE0]",style:{fontFamily:"Playfair Display, serif",fontStyle:"italic"},children:M.nameEn}),ue.jsx("div",{className:"text-sm text-[#C9922A] mt-1",style:{fontFamily:"Vazirmatn, sans-serif"},children:M.nameFa}),ue.jsx("div",{className:"text-xs text-[#F5EFE0] opacity-50 mt-2",style:{fontWeight:300},children:M.description}),ue.jsx("div",{className:"text-sm text-[#C9922A] tracking-wider mt-3",children:M.price})]})]},w)})})]}),ue.jsx("section",{id:"menu",className:"bg-[#F5EFE0] py-24 px-6",children:ue.jsxs("div",{ref:u,className:"max-w-3xl mx-auto",children:[ue.jsx("div",{className:"text-center mb-16",children:ue.jsxs(Dt.div,{initial:{opacity:0,y:24},animate:f?{opacity:1,y:0}:{opacity:0,y:24},transition:{duration:.8,ease:Ut},children:[ue.jsx("div",{className:"w-32 h-[1px] bg-[#C9922A] mx-auto"}),ue.jsx("h2",{className:"text-4xl text-[#1A1A1A]",style:{fontFamily:"Playfair Display, serif",fontStyle:"italic"},children:"THE MENU"}),ue.jsx("div",{className:"text-base text-[#C9922A] mt-1",style:{fontFamily:"Vazirmatn, sans-serif"},children:"منو"}),ue.jsxs("div",{className:"flex items-center justify-center gap-2 text-[#C9922A] mt-4",children:[ue.jsx("div",{className:"h-[1px] w-12 bg-[#C9922A]"}),ue.jsx("span",{children:"✦"}),ue.jsx("div",{className:"h-[1px] w-12 bg-[#C9922A]"})]})]})}),ue.jsxs("div",{className:"mb-12",children:[ue.jsx(Dt.div,{className:"text-xs uppercase tracking-[0.2em] text-[#2C4A3E] border-b-2 border-[#C9922A] pb-2 mb-6",initial:{opacity:0,y:12},animate:f?{opacity:1,y:0}:{opacity:0,y:12},transition:{duration:.6,delay:0,ease:Ut},children:"MATCHA — ماچا"}),ue.jsxs(Dt.div,{className:"border-b border-[#EDE5D0] py-4",initial:{x:-30,opacity:0},animate:f?{x:0,opacity:1}:{x:-30,opacity:0},transition:{duration:.6,delay:.08,ease:Ut},children:[ue.jsxs("div",{className:"flex items-baseline",children:[ue.jsx("div",{className:"text-xl text-[#1A1A1A]",style:{fontFamily:"Playfair Display, serif"},children:"Pistachio Cream Matcha Latte"}),ue.jsx("div",{className:"flex-1 border-b border-dotted border-[#8B6F47] opacity-30 mx-4 mb-1"}),ue.jsx("div",{className:"text-sm text-[#C9922A] tracking-wider",children:"$8"})]}),ue.jsx("div",{className:"text-xs text-[#8B6F47] mt-1",style:{fontWeight:300},children:"matcha + agave, pistachio butter, pistachio cream top"})]}),ue.jsx(Dt.div,{className:"border-b border-[#EDE5D0] py-4",initial:{x:-30,opacity:0},animate:f?{x:0,opacity:1}:{x:-30,opacity:0},transition:{duration:.6,delay:.16,ease:Ut},children:ue.jsxs("div",{className:"flex items-baseline",children:[ue.jsx("div",{className:"text-xl text-[#1A1A1A]",style:{fontFamily:"Playfair Display, serif"},children:"Raspberry & Rose Matcha"}),ue.jsx("div",{className:"flex-1 border-b border-dotted border-[#8B6F47] opacity-30 mx-4 mb-1"}),ue.jsx("div",{className:"text-sm text-[#C9922A] tracking-wider",children:"$—"})]})}),ue.jsx(Dt.div,{className:"border-b border-[#EDE5D0] py-4",initial:{x:-30,opacity:0},animate:f?{x:0,opacity:1}:{x:-30,opacity:0},transition:{duration:.6,delay:.24,ease:Ut},children:ue.jsxs("div",{className:"flex items-baseline",children:[ue.jsx("div",{className:"text-xl text-[#1A1A1A]",style:{fontFamily:"Playfair Display, serif"},children:"Saffron & Rose Matcha"}),ue.jsx("div",{className:"flex-1 border-b border-dotted border-[#8B6F47] opacity-30 mx-4 mb-1"}),ue.jsx("div",{className:"text-sm text-[#C9922A] tracking-wider",children:"$—"})]})})]}),ue.jsx(Dt.div,{className:"text-center text-[#C9922A] my-8",initial:{x:-30,opacity:0},animate:f?{x:0,opacity:1}:{x:-30,opacity:0},transition:{duration:.6,delay:.32,ease:Ut},children:"✦"}),ue.jsxs("div",{className:"mb-12",children:[ue.jsx(Dt.div,{className:"text-xs uppercase tracking-[0.2em] text-[#2C4A3E] border-b-2 border-[#C9922A] pb-2 mb-6",initial:{opacity:0,y:12},animate:f?{opacity:1,y:0}:{opacity:0,y:12},transition:{duration:.6,delay:.38,ease:Ut},children:"LATTES — لاته"}),ue.jsx(Dt.div,{className:"border-b border-[#EDE5D0] py-4",initial:{x:-30,opacity:0},animate:f?{x:0,opacity:1}:{x:-30,opacity:0},transition:{duration:.6,delay:.46,ease:Ut},children:ue.jsxs("div",{className:"flex items-baseline",children:[ue.jsx("div",{className:"text-xl text-[#1A1A1A]",style:{fontFamily:"Playfair Display, serif"},children:"Tiramisu Latte"}),ue.jsx("div",{className:"flex-1 border-b border-dotted border-[#8B6F47] opacity-30 mx-4 mb-1"}),ue.jsx("div",{className:"text-sm text-[#C9922A] tracking-wider",children:"$—"})]})})]}),ue.jsx(Dt.div,{className:"text-center text-[#C9922A] my-8",initial:{x:-30,opacity:0},animate:f?{x:0,opacity:1}:{x:-30,opacity:0},transition:{duration:.6,delay:.54,ease:Ut},children:"✦"}),ue.jsxs("div",{children:[ue.jsx(Dt.div,{className:"text-xs uppercase tracking-[0.2em] text-[#2C4A3E] border-b-2 border-[#C9922A] pb-2 mb-6",initial:{opacity:0,y:12},animate:f?{opacity:1,y:0}:{opacity:0,y:12},transition:{duration:.6,delay:.62,ease:Ut},children:"SPECIALS — ویژه"}),ue.jsx(Dt.div,{className:"border-b border-[#EDE5D0] py-4",initial:{x:-30,opacity:0},animate:f?{x:0,opacity:1}:{x:-30,opacity:0},transition:{duration:.6,delay:.7,ease:Ut},children:ue.jsxs("div",{className:"flex items-baseline",children:[ue.jsx("div",{className:"text-xl text-[#1A1A1A]",style:{fontFamily:"Playfair Display, serif"},children:"Seasonal Special"}),ue.jsx("div",{className:"flex-1 border-b border-dotted border-[#8B6F47] opacity-30 mx-4 mb-1"}),ue.jsx("div",{className:"text-sm text-[#C9922A] tracking-wider italic",children:"ask us!"})]})})]})]})}),ue.jsxs("section",{ref:d,id:"about",className:"grid lg:grid-cols-2 min-h-[70vh]",children:[ue.jsxs("div",{className:"bg-[#2C4A3E] p-12 flex flex-col items-center justify-center",children:[ue.jsx(Dt.div,{className:"w-full max-w-md aspect-square border-[6px] border-[#C9922A] flex items-center justify-center",style:{borderStyle:"double"},initial:{x:-60,opacity:0},animate:h?{x:0,opacity:1}:{x:-60,opacity:0},transition:{duration:.9,ease:Ut},children:ue.jsx("div",{className:"text-[#C9922A] text-8xl",children:"✦"})}),ue.jsx("p",{className:"text-xs text-[#C9922A] text-center mt-3 italic",style:{fontWeight:300},children:"the hands behind your cup"})]}),ue.jsxs("div",{className:"bg-[#EDE5D0] flex flex-col justify-center p-16",children:[ue.jsx(Dt.div,{className:"text-center text-[#C9922A] mb-6",initial:{opacity:0,y:16},animate:h?{opacity:1,y:0}:{opacity:0,y:16},transition:{duration:.6,ease:Ut},children:"◆◆◆"}),ue.jsx("h2",{className:"text-4xl text-[#1A1A1A]",style:{fontFamily:"Playfair Display, serif",fontStyle:"italic"},children:x.map((M,w)=>ue.jsx(Dt.span,{className:"inline-block",style:{marginRight:w<x.length-1?"0.25em":0},initial:{opacity:0,y:12},animate:h?{opacity:1,y:0}:{opacity:0,y:12},transition:{duration:.5,delay:w*.07,ease:Ut},children:M},`${M}-${w}`))}),ue.jsx(Dt.p,{className:"text-base text-[#8B6F47] leading-relaxed mt-4",style:{fontWeight:300},initial:{opacity:0,y:20},animate:h?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.8,delay:.3,ease:Ut},children:"Atlasi Café began as a search for softness in a fast world. Like the atlas flower that blooms in every color, we welcome every person, every mood, every moment. Come as you are. Stay as long as you need."}),ue.jsx(Dt.p,{className:"text-sm text-[#8B6F47] mt-4",dir:"rtl",style:{fontFamily:"Vazirmatn, sans-serif"},initial:{scale:.85,opacity:0},animate:h?{scale:1,opacity:1}:{scale:.85,opacity:0},transition:{duration:1.4,ease:Ut},children:"کافه اطلسی برای لحظه‌های میان‌راهی ساخته شد."}),ue.jsxs("div",{className:"flex items-center gap-2 text-[#C9922A] mt-8",children:[ue.jsx("div",{className:"h-[1px] w-12 bg-[#C9922A]"}),ue.jsx("span",{children:"✦"}),ue.jsx("div",{className:"h-[1px] w-12 bg-[#C9922A]"})]}),ue.jsx("div",{className:"text-xs uppercase tracking-[0.2em] text-[#2C4A3E] mt-6",children:"@atlasicafe"})]})]}),ue.jsxs("footer",{ref:m,className:"bg-[#1E3530] border-t border-[#C9922A] py-20 text-center",children:[ue.jsxs(Dt.div,{initial:{opacity:0,y:20},animate:v?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.8,ease:Ut},children:[ue.jsx("div",{className:"text-[#C9922A] text-4xl mb-6",children:"✦"}),ue.jsx("h3",{className:"text-3xl text-[#F5EFE0]",style:{fontFamily:"Playfair Display, serif",fontStyle:"italic"},children:"ATLASI CAFÉ"}),ue.jsx("div",{className:"text-base text-[#C9922A] mt-1",style:{fontFamily:"Vazirmatn, sans-serif"},children:"کافه اطلسی"})]}),ue.jsxs(Dt.div,{className:"flex items-center justify-center gap-2 text-[#C9922A] mt-6",initial:{opacity:0,y:12},animate:v?{opacity:1,y:0}:{opacity:0,y:12},transition:{duration:.6,delay:.12,ease:Ut},children:[ue.jsx("div",{className:"h-[1px] w-12 bg-[#C9922A]"}),ue.jsx("span",{children:"✦"}),ue.jsx("div",{className:"h-[1px] w-12 bg-[#C9922A]"})]}),ue.jsx(Dt.p,{className:"text-sm text-[#F5EFE0] opacity-60 mt-4 italic",style:{fontFamily:"Playfair Display, serif"},initial:{opacity:0,y:12},animate:v?{opacity:1,y:0}:{opacity:0,y:12},transition:{duration:.6,delay:.24,ease:Ut},children:"soft like silk. open like the sky."}),ue.jsx(Dt.div,{className:"text-xs uppercase tracking-[0.2em] text-[#C9922A] mt-6",initial:{opacity:0,y:12},animate:v?{opacity:1,y:0}:{opacity:0,y:12},transition:{duration:.6,delay:.36,ease:Ut},children:"@atlasicafe"}),ue.jsx(Dt.div,{className:"text-2xl text-[#C9922A] mt-4",style:{fontFamily:"Vazirmatn, sans-serif"},animate:{scale:[1,1.04,1]},transition:{delay:4,duration:.6,ease:Ut,times:[0,.5,1]},children:"نوش جان"}),ue.jsx(Dt.div,{className:"text-xs text-[#F5EFE0] opacity-30 mt-8",initial:{opacity:0,y:12},animate:v?{opacity:1,y:0}:{opacity:0,y:12},transition:{duration:.6,delay:.48,ease:Ut},children:"© 2025 Atlasi Café"})]})]})}XM.createRoot(document.getElementById("root")).render(ue.jsx(sD,{}));
