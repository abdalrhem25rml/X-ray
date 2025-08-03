(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ph(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ze={},Xs=[],Dn=()=>{},_1=()=>!1,Nl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ch=t=>t.startsWith("onUpdate:"),mt=Object.assign,Rh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},y1=Object.prototype.hasOwnProperty,Ue=(t,e)=>y1.call(t,e),he=Array.isArray,Js=t=>jo(t)==="[object Map]",yi=t=>jo(t)==="[object Set]",Qf=t=>jo(t)==="[object Date]",Ee=t=>typeof t=="function",rt=t=>typeof t=="string",Mn=t=>typeof t=="symbol",We=t=>t!==null&&typeof t=="object",i_=t=>(We(t)||Ee(t))&&Ee(t.then)&&Ee(t.catch),o_=Object.prototype.toString,jo=t=>o_.call(t),v1=t=>jo(t).slice(8,-1),a_=t=>jo(t)==="[object Object]",Dh=t=>rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,to=Ph(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},E1=/-(\w)/g,cn=Vl(t=>t.replace(E1,(e,n)=>n?n.toUpperCase():"")),w1=/\B([A-Z])/g,xs=Vl(t=>t.replace(w1,"-$1").toLowerCase()),Ml=Vl(t=>t.charAt(0).toUpperCase()+t.slice(1)),$c=Vl(t=>t?`on${Ml(t)}`:""),Lr=(t,e)=>!Object.is(t,e),$a=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Eu=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},tl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},b1=t=>{const e=rt(t)?Number(t):NaN;return isNaN(e)?t:e};let Xf;const Ll=()=>Xf||(Xf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fl(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=rt(r)?S1(r):Fl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(rt(t)||We(t))return t}const T1=/;(?![^(]*\))/g,I1=/:([^]+)/,A1=/\/\*[^]*?\*\//g;function S1(t){const e={};return t.replace(A1,"").split(T1).forEach(n=>{if(n){const r=n.split(I1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ts(t){let e="";if(rt(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const r=Ts(t[n]);r&&(e+=r+" ")}else if(We(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const P1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",C1=Ph(P1);function l_(t){return!!t||t===""}function R1(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ho(t[r],e[r]);return n}function Ho(t,e){if(t===e)return!0;let n=Qf(t),r=Qf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Mn(t),r=Mn(e),n||r)return t===e;if(n=he(t),r=he(e),n||r)return n&&r?R1(t,e):!1;if(n=We(t),r=We(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Ho(t[o],e[o]))return!1}}return String(t)===String(e)}function kh(t,e){return t.findIndex(n=>Ho(n,e))}const c_=t=>!!(t&&t.__v_isRef===!0),C=t=>rt(t)?t:t==null?"":he(t)||We(t)&&(t.toString===o_||!Ee(t.toString))?c_(t)?C(t.value):JSON.stringify(t,u_,2):String(t),u_=(t,e)=>c_(e)?u_(t,e.value):Js(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Uc(r,i)+" =>"]=s,n),{})}:yi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Uc(n))}:Mn(e)?Uc(e):We(e)&&!he(e)&&!a_(e)?String(e):e,Uc=(t,e="")=>{var n;return Mn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rt;class h_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Rt,!e&&Rt&&(this.index=(Rt.scopes||(Rt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Rt;try{return Rt=this,e()}finally{Rt=n}}}on(){++this._on===1&&(this.prevScope=Rt,Rt=this)}off(){this._on>0&&--this._on===0&&(Rt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function d_(t){return new h_(t)}function f_(){return Rt}function D1(t,e=!1){Rt&&Rt.cleanups.push(t)}let Ge;const Bc=new WeakSet;class p_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Rt&&Rt.active&&Rt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Bc.has(this)&&(Bc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||g_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Jf(this),__(this);const e=Ge,n=mn;Ge=this,mn=!0;try{return this.fn()}finally{y_(this),Ge=e,mn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Nh(e);this.deps=this.depsTail=void 0,Jf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Bc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wu(this)&&this.run()}get dirty(){return wu(this)}}let m_=0,no,ro;function g_(t,e=!1){if(t.flags|=8,e){t.next=ro,ro=t;return}t.next=no,no=t}function xh(){m_++}function Oh(){if(--m_>0)return;if(ro){let e=ro;for(ro=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;no;){let e=no;for(no=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function __(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function y_(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Nh(r),k1(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function wu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(v_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function v_(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===wo)||(t.globalVersion=wo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!wu(t))))return;t.flags|=2;const e=t.dep,n=Ge,r=mn;Ge=t,mn=!0;try{__(t);const s=t.fn(t._value);(e.version===0||Lr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ge=n,mn=r,y_(t),t.flags&=-3}}function Nh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Nh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function k1(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let mn=!0;const E_=[];function nr(){E_.push(mn),mn=!1}function rr(){const t=E_.pop();mn=t===void 0?!0:t}function Jf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ge;Ge=void 0;try{e()}finally{Ge=n}}}let wo=0;class x1{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ge||!mn||Ge===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ge)n=this.activeLink=new x1(Ge,this),Ge.deps?(n.prevDep=Ge.depsTail,Ge.depsTail.nextDep=n,Ge.depsTail=n):Ge.deps=Ge.depsTail=n,w_(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ge.depsTail,n.nextDep=void 0,Ge.depsTail.nextDep=n,Ge.depsTail=n,Ge.deps===n&&(Ge.deps=r)}return n}trigger(e){this.version++,wo++,this.notify(e)}notify(e){xh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Oh()}}}function w_(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)w_(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const nl=new WeakMap,Es=Symbol(""),bu=Symbol(""),bo=Symbol("");function kt(t,e,n){if(mn&&Ge){let r=nl.get(t);r||nl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Vh),s.map=r,s.key=n),s.track()}}function Gn(t,e,n,r,s,i){const o=nl.get(t);if(!o){wo++;return}const l=c=>{c&&c.trigger()};if(xh(),e==="clear")o.forEach(l);else{const c=he(t),u=c&&Dh(n);if(c&&n==="length"){const h=Number(r);o.forEach((f,p)=>{(p==="length"||p===bo||!Mn(p)&&p>=h)&&l(f)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(bo)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Es)),Js(t)&&l(o.get(bu)));break;case"delete":c||(l(o.get(Es)),Js(t)&&l(o.get(bu)));break;case"set":Js(t)&&l(o.get(Es));break}}Oh()}function O1(t,e){const n=nl.get(t);return n&&n.get(e)}function js(t){const e=Ve(t);return e===t?e:(kt(e,"iterate",bo),ln(t)?e:e.map(wt))}function $l(t){return kt(t=Ve(t),"iterate",bo),t}const N1={__proto__:null,[Symbol.iterator](){return jc(this,Symbol.iterator,wt)},concat(...t){return js(this).concat(...t.map(e=>he(e)?js(e):e))},entries(){return jc(this,"entries",t=>(t[1]=wt(t[1]),t))},every(t,e){return Hn(this,"every",t,e,void 0,arguments)},filter(t,e){return Hn(this,"filter",t,e,n=>n.map(wt),arguments)},find(t,e){return Hn(this,"find",t,e,wt,arguments)},findIndex(t,e){return Hn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Hn(this,"findLast",t,e,wt,arguments)},findLastIndex(t,e){return Hn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Hn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Hc(this,"includes",t)},indexOf(...t){return Hc(this,"indexOf",t)},join(t){return js(this).join(t)},lastIndexOf(...t){return Hc(this,"lastIndexOf",t)},map(t,e){return Hn(this,"map",t,e,void 0,arguments)},pop(){return Bi(this,"pop")},push(...t){return Bi(this,"push",t)},reduce(t,...e){return Zf(this,"reduce",t,e)},reduceRight(t,...e){return Zf(this,"reduceRight",t,e)},shift(){return Bi(this,"shift")},some(t,e){return Hn(this,"some",t,e,void 0,arguments)},splice(...t){return Bi(this,"splice",t)},toReversed(){return js(this).toReversed()},toSorted(t){return js(this).toSorted(t)},toSpliced(...t){return js(this).toSpliced(...t)},unshift(...t){return Bi(this,"unshift",t)},values(){return jc(this,"values",wt)}};function jc(t,e,n){const r=$l(t),s=r[e]();return r!==t&&!ln(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const V1=Array.prototype;function Hn(t,e,n,r,s,i){const o=$l(t),l=o!==t&&!ln(t),c=o[e];if(c!==V1[e]){const f=c.apply(t,i);return l?wt(f):f}let u=n;o!==t&&(l?u=function(f,p){return n.call(this,wt(f),p,t)}:n.length>2&&(u=function(f,p){return n.call(this,f,p,t)}));const h=c.call(o,u,r);return l&&s?s(h):h}function Zf(t,e,n,r){const s=$l(t);let i=n;return s!==t&&(ln(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,wt(l),c,t)}),s[e](i,...r)}function Hc(t,e,n){const r=Ve(t);kt(r,"iterate",bo);const s=r[e](...n);return(s===-1||s===!1)&&Fh(n[0])?(n[0]=Ve(n[0]),r[e](...n)):s}function Bi(t,e,n=[]){nr(),xh();const r=Ve(t)[e].apply(t,n);return Oh(),rr(),r}const M1=Ph("__proto__,__v_isRef,__isVue"),b_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mn));function L1(t){Mn(t)||(t=String(t));const e=Ve(this);return kt(e,"has",t),e.hasOwnProperty(t)}class T_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?G1:P_:i?S_:A_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=he(e);if(!s){let c;if(o&&(c=N1[n]))return c;if(n==="hasOwnProperty")return L1}const l=Reflect.get(e,n,at(e)?e:r);return(Mn(n)?b_.has(n):M1(n))||(s||kt(e,"get",n),i)?l:at(l)?o&&Dh(n)?l:l.value:We(l)?s?R_(l):hr(l):l}}class I_ extends T_{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=qr(i);if(!ln(r)&&!qr(r)&&(i=Ve(i),r=Ve(r)),!he(e)&&at(i)&&!at(r))return c?!1:(i.value=r,!0)}const o=he(e)&&Dh(n)?Number(n)<e.length:Ue(e,n),l=Reflect.set(e,n,r,at(e)?e:s);return e===Ve(s)&&(o?Lr(r,i)&&Gn(e,"set",n,r):Gn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ue(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Gn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Mn(n)||!b_.has(n))&&kt(e,"has",n),r}ownKeys(e){return kt(e,"iterate",he(e)?"length":Es),Reflect.ownKeys(e)}}class F1 extends T_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const $1=new I_,U1=new F1,B1=new I_(!0);const Tu=t=>t,Aa=t=>Reflect.getPrototypeOf(t);function j1(t,e,n){return function(...r){const s=this.__v_raw,i=Ve(s),o=Js(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),h=n?Tu:e?rl:wt;return!e&&kt(i,"iterate",c?bu:Es),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:l?[h(f[0]),h(f[1])]:h(f),done:p}},[Symbol.iterator](){return this}}}}function Sa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function H1(t,e){const n={get(s){const i=this.__v_raw,o=Ve(i),l=Ve(s);t||(Lr(s,l)&&kt(o,"get",s),kt(o,"get",l));const{has:c}=Aa(o),u=e?Tu:t?rl:wt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&kt(Ve(s),"iterate",Es),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ve(i),l=Ve(s);return t||(Lr(s,l)&&kt(o,"has",s),kt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ve(l),u=e?Tu:t?rl:wt;return!t&&kt(c,"iterate",Es),l.forEach((h,f)=>s.call(i,u(h),u(f),o))}};return mt(n,t?{add:Sa("add"),set:Sa("set"),delete:Sa("delete"),clear:Sa("clear")}:{add(s){!e&&!ln(s)&&!qr(s)&&(s=Ve(s));const i=Ve(this);return Aa(i).has.call(i,s)||(i.add(s),Gn(i,"add",s,s)),this},set(s,i){!e&&!ln(i)&&!qr(i)&&(i=Ve(i));const o=Ve(this),{has:l,get:c}=Aa(o);let u=l.call(o,s);u||(s=Ve(s),u=l.call(o,s));const h=c.call(o,s);return o.set(s,i),u?Lr(i,h)&&Gn(o,"set",s,i):Gn(o,"add",s,i),this},delete(s){const i=Ve(this),{has:o,get:l}=Aa(i);let c=o.call(i,s);c||(s=Ve(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Gn(i,"delete",s,void 0),u},clear(){const s=Ve(this),i=s.size!==0,o=s.clear();return i&&Gn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=j1(s,t,e)}),n}function Mh(t,e){const n=H1(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ue(n,s)&&s in r?n:r,s,i)}const q1={get:Mh(!1,!1)},z1={get:Mh(!1,!0)},W1={get:Mh(!0,!1)};const A_=new WeakMap,S_=new WeakMap,P_=new WeakMap,G1=new WeakMap;function K1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Y1(t){return t.__v_skip||!Object.isExtensible(t)?0:K1(v1(t))}function hr(t){return qr(t)?t:Lh(t,!1,$1,q1,A_)}function C_(t){return Lh(t,!1,B1,z1,S_)}function R_(t){return Lh(t,!0,U1,W1,P_)}function Lh(t,e,n,r,s){if(!We(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Y1(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Fr(t){return qr(t)?Fr(t.__v_raw):!!(t&&t.__v_isReactive)}function qr(t){return!!(t&&t.__v_isReadonly)}function ln(t){return!!(t&&t.__v_isShallow)}function Fh(t){return t?!!t.__v_raw:!1}function Ve(t){const e=t&&t.__v_raw;return e?Ve(e):t}function $h(t){return!Ue(t,"__v_skip")&&Object.isExtensible(t)&&Eu(t,"__v_skip",!0),t}const wt=t=>We(t)?hr(t):t,rl=t=>We(t)?R_(t):t;function at(t){return t?t.__v_isRef===!0:!1}function Te(t){return D_(t,!1)}function Q1(t){return D_(t,!0)}function D_(t,e){return at(t)?t:new X1(t,e)}class X1{constructor(e,n){this.dep=new Vh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ve(e),this._value=n?e:wt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||ln(e)||qr(e);e=r?e:Ve(e),Lr(e,n)&&(this._rawValue=e,this._value=r?e:wt(e),this.dep.trigger())}}function v(t){return at(t)?t.value:t}const J1={get:(t,e,n)=>e==="__v_raw"?t:v(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return at(s)&&!at(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function k_(t){return Fr(t)?t:new Proxy(t,J1)}function Z1(t){const e=he(t)?new Array(t.length):{};for(const n in t)e[n]=tb(t,n);return e}class eb{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return O1(Ve(this._object),this._key)}}function tb(t,e,n){const r=t[e];return at(r)?r:new eb(t,e,n)}class nb{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Vh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ge!==this)return g_(this,!0),!0}get value(){const e=this.dep.track();return v_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rb(t,e,n=!1){let r,s;return Ee(t)?r=t:(r=t.get,s=t.set),new nb(r,s,n)}const Pa={},sl=new WeakMap;let ps;function sb(t,e=!1,n=ps){if(n){let r=sl.get(n);r||sl.set(n,r=[]),r.push(t)}}function ib(t,e,n=ze){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=F=>s?F:ln(F)||s===!1||s===0?Kn(F,1):Kn(F);let h,f,p,_,D=!1,N=!1;if(at(t)?(f=()=>t.value,D=ln(t)):Fr(t)?(f=()=>u(t),D=!0):he(t)?(N=!0,D=t.some(F=>Fr(F)||ln(F)),f=()=>t.map(F=>{if(at(F))return F.value;if(Fr(F))return u(F);if(Ee(F))return c?c(F,2):F()})):Ee(t)?e?f=c?()=>c(t,2):t:f=()=>{if(p){nr();try{p()}finally{rr()}}const F=ps;ps=h;try{return c?c(t,3,[_]):t(_)}finally{ps=F}}:f=Dn,e&&s){const F=f,$=s===!0?1/0:s;f=()=>Kn(F(),$)}const L=f_(),O=()=>{h.stop(),L&&L.active&&Rh(L.effects,h)};if(i&&e){const F=e;e=(...$)=>{F(...$),O()}}let x=N?new Array(t.length).fill(Pa):Pa;const k=F=>{if(!(!(h.flags&1)||!h.dirty&&!F))if(e){const $=h.run();if(s||D||(N?$.some((G,b)=>Lr(G,x[b])):Lr($,x))){p&&p();const G=ps;ps=h;try{const b=[$,x===Pa?void 0:N&&x[0]===Pa?[]:x,_];x=$,c?c(e,3,b):e(...b)}finally{ps=G}}}else h.run()};return l&&l(k),h=new p_(f),h.scheduler=o?()=>o(k,!1):k,_=F=>sb(F,!1,h),p=h.onStop=()=>{const F=sl.get(h);if(F){if(c)c(F,4);else for(const $ of F)$();sl.delete(h)}},e?r?k(!0):x=h.run():o?o(k.bind(null,!0),!0):h.run(),O.pause=h.pause.bind(h),O.resume=h.resume.bind(h),O.stop=O,O}function Kn(t,e=1/0,n){if(e<=0||!We(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,at(t))Kn(t.value,e,n);else if(he(t))for(let r=0;r<t.length;r++)Kn(t[r],e,n);else if(yi(t)||Js(t))t.forEach(r=>{Kn(r,e,n)});else if(a_(t)){for(const r in t)Kn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Kn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qo(t,e,n,r){try{return r?t(...r):t()}catch(s){Ul(s,e,n)}}function _n(t,e,n,r){if(Ee(t)){const s=qo(t,e,n,r);return s&&i_(s)&&s.catch(i=>{Ul(i,e,n)}),s}if(he(t)){const s=[];for(let i=0;i<t.length;i++)s.push(_n(t[i],e,n,r));return s}}function Ul(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ze;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const h=l.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,c,u)===!1)return}l=l.parent}if(i){nr(),qo(i,null,10,[t,c,u]),rr();return}}ob(t,n,s,r,o)}function ob(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ft=[];let Tn=-1;const Zs=[];let Cr=null,qs=0;const x_=Promise.resolve();let il=null;function Bl(t){const e=il||x_;return t?e.then(this?t.bind(this):t):e}function ab(t){let e=Tn+1,n=Ft.length;for(;e<n;){const r=e+n>>>1,s=Ft[r],i=To(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Uh(t){if(!(t.flags&1)){const e=To(t),n=Ft[Ft.length-1];!n||!(t.flags&2)&&e>=To(n)?Ft.push(t):Ft.splice(ab(e),0,t),t.flags|=1,O_()}}function O_(){il||(il=x_.then(V_))}function lb(t){he(t)?Zs.push(...t):Cr&&t.id===-1?Cr.splice(qs+1,0,t):t.flags&1||(Zs.push(t),t.flags|=1),O_()}function ep(t,e,n=Tn+1){for(;n<Ft.length;n++){const r=Ft[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ft.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function N_(t){if(Zs.length){const e=[...new Set(Zs)].sort((n,r)=>To(n)-To(r));if(Zs.length=0,Cr){Cr.push(...e);return}for(Cr=e,qs=0;qs<Cr.length;qs++){const n=Cr[qs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Cr=null,qs=0}}const To=t=>t.id==null?t.flags&2?-1:1/0:t.id;function V_(t){try{for(Tn=0;Tn<Ft.length;Tn++){const e=Ft[Tn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),qo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Tn<Ft.length;Tn++){const e=Ft[Tn];e&&(e.flags&=-2)}Tn=-1,Ft.length=0,N_(),il=null,(Ft.length||Zs.length)&&V_()}}let Ut=null,M_=null;function ol(t){const e=Ut;return Ut=t,M_=t&&t.type.__scopeId||null,e}function Ln(t,e=Ut,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&hp(-1);const i=ol(e);let o;try{o=t(...s)}finally{ol(i),r._d&&hp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ye(t,e){if(Ut===null)return t;const n=Wl(Ut),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=ze]=e[s];i&&(Ee(i)&&(i={mounted:i,updated:i}),i.deep&&Kn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function us(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(nr(),_n(c,n,8,[t.el,l,t,e]),rr())}}const cb=Symbol("_vte"),L_=t=>t.__isTeleport,Rr=Symbol("_leaveCb"),Ca=Symbol("_enterCb");function ub(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return jh(()=>{t.isMounted=!0}),z_(()=>{t.isUnmounting=!0}),t}const sn=[Function,Array],F_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},$_=t=>{const e=t.subTree;return e.component?$_(e.component):e},hb={name:"BaseTransition",props:F_,setup(t,{slots:e}){const n=c0(),r=ub();return()=>{const s=e.default&&j_(e.default(),!0);if(!s||!s.length)return;const i=U_(s),o=Ve(t),{mode:l}=o;if(r.isLeaving)return qc(i);const c=tp(i);if(!c)return qc(i);let u=Iu(c,o,r,n,f=>u=f);c.type!==$t&&Io(c,u);let h=n.subTree&&tp(n.subTree);if(h&&h.type!==$t&&!gs(c,h)&&$_(n).type!==$t){let f=Iu(h,o,r,n);if(Io(h,f),l==="out-in"&&c.type!==$t)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,h=void 0},qc(i);l==="in-out"&&c.type!==$t?f.delayLeave=(p,_,D)=>{const N=B_(r,h);N[String(h.key)]=h,p[Rr]=()=>{_(),p[Rr]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{D(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function U_(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==$t){e=n;break}}return e}const db=hb;function B_(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Iu(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:p,onLeave:_,onAfterLeave:D,onLeaveCancelled:N,onBeforeAppear:L,onAppear:O,onAfterAppear:x,onAppearCancelled:k}=e,F=String(t.key),$=B_(n,t),G=(E,A)=>{E&&_n(E,r,9,A)},b=(E,A)=>{const R=A[1];G(E,A),he(E)?E.every(P=>P.length<=1)&&R():E.length<=1&&R()},w={mode:o,persisted:l,beforeEnter(E){let A=c;if(!n.isMounted)if(i)A=L||c;else return;E[Rr]&&E[Rr](!0);const R=$[F];R&&gs(t,R)&&R.el[Rr]&&R.el[Rr](),G(A,[E])},enter(E){let A=u,R=h,P=f;if(!n.isMounted)if(i)A=O||u,R=x||h,P=k||f;else return;let T=!1;const Me=E[Ca]=Xe=>{T||(T=!0,Xe?G(P,[E]):G(R,[E]),w.delayedLeave&&w.delayedLeave(),E[Ca]=void 0)};A?b(A,[E,Me]):Me()},leave(E,A){const R=String(t.key);if(E[Ca]&&E[Ca](!0),n.isUnmounting)return A();G(p,[E]);let P=!1;const T=E[Rr]=Me=>{P||(P=!0,A(),Me?G(N,[E]):G(D,[E]),E[Rr]=void 0,$[R]===t&&delete $[R])};$[R]=t,_?b(_,[E,T]):T()},clone(E){const A=Iu(E,e,n,r,s);return s&&s(A),A}};return w}function qc(t){if(jl(t))return t=zr(t),t.children=null,t}function tp(t){if(!jl(t))return L_(t.type)&&t.children?U_(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ee(n.default))return n.default()}}function Io(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Io(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function j_(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===xt?(o.patchFlag&128&&s++,r=r.concat(j_(o.children,e,l))):(e||o.type!==$t)&&r.push(l!=null?zr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Bh(t,e){return Ee(t)?mt({name:t.name},e,{setup:t}):t}function H_(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function so(t,e,n,r,s=!1){if(he(t)){t.forEach((D,N)=>so(D,e&&(he(e)?e[N]:e),n,r,s));return}if(io(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&so(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Wl(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,h=l.refs===ze?l.refs={}:l.refs,f=l.setupState,p=Ve(f),_=f===ze?()=>!1:D=>Ue(p,D);if(u!=null&&u!==c&&(rt(u)?(h[u]=null,_(u)&&(f[u]=null)):at(u)&&(u.value=null)),Ee(c))qo(c,l,12,[o,h]);else{const D=rt(c),N=at(c);if(D||N){const L=()=>{if(t.f){const O=D?_(c)?f[c]:h[c]:c.value;s?he(O)&&Rh(O,i):he(O)?O.includes(i)||O.push(i):D?(h[c]=[i],_(c)&&(f[c]=h[c])):(c.value=[i],t.k&&(h[t.k]=c.value))}else D?(h[c]=o,_(c)&&(f[c]=o)):N&&(c.value=o,t.k&&(h[t.k]=o))};o?(L.id=-1,Yt(L,n)):L()}}}Ll().requestIdleCallback;Ll().cancelIdleCallback;const io=t=>!!t.type.__asyncLoader,jl=t=>t.type.__isKeepAlive;function fb(t,e){q_(t,"a",e)}function pb(t,e){q_(t,"da",e)}function q_(t,e,n=pt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Hl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)jl(s.parent.vnode)&&mb(r,e,n,s),s=s.parent}}function mb(t,e,n,r){const s=Hl(e,t,r,!0);W_(()=>{Rh(r[e],s)},n)}function Hl(t,e,n=pt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{nr();const l=zo(n),c=_n(e,n,t,o);return l(),rr(),c});return r?s.unshift(i):s.push(i),i}}const dr=t=>(e,n=pt)=>{(!So||t==="sp")&&Hl(t,(...r)=>e(...r),n)},gb=dr("bm"),jh=dr("m"),_b=dr("bu"),yb=dr("u"),z_=dr("bum"),W_=dr("um"),vb=dr("sp"),Eb=dr("rtg"),wb=dr("rtc");function bb(t,e=pt){Hl("ec",t,e)}const Tb="components",G_=Symbol.for("v-ndc");function Ib(t){return rt(t)?Ab(Tb,t,!1)||t:t||G_}function Ab(t,e,n=!0,r=!1){const s=Ut||pt;if(s){const i=s.type;{const l=p0(i,!1);if(l&&(l===e||l===cn(e)||l===Ml(cn(e))))return i}const o=np(s[t]||i[t],e)||np(s.appContext[t],e);return!o&&r?i:o}}function np(t,e){return t&&(t[e]||t[cn(e)]||t[Ml(cn(e))])}function Hh(t,e,n,r){let s;const i=n,o=he(t);if(o||rt(t)){const l=o&&Fr(t);let c=!1,u=!1;l&&(c=!ln(t),u=qr(t),t=$l(t)),s=new Array(t.length);for(let h=0,f=t.length;h<f;h++)s[h]=e(c?u?rl(wt(t[h])):wt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(We(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const h=l[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}const Au=t=>t?fy(t)?Wl(t):Au(t.parent):null,oo=mt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Au(t.parent),$root:t=>Au(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Y_(t),$forceUpdate:t=>t.f||(t.f=()=>{Uh(t.update)}),$nextTick:t=>t.n||(t.n=Bl.bind(t.proxy)),$watch:t=>Kb.bind(t)}),zc=(t,e)=>t!==ze&&!t.__isScriptSetup&&Ue(t,e),Sb={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(zc(r,e))return o[e]=1,r[e];if(s!==ze&&Ue(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ue(u,e))return o[e]=3,i[e];if(n!==ze&&Ue(n,e))return o[e]=4,n[e];Su&&(o[e]=0)}}const h=oo[e];let f,p;if(h)return e==="$attrs"&&kt(t.attrs,"get",""),h(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==ze&&Ue(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Ue(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return zc(s,e)?(s[e]=n,!0):r!==ze&&Ue(r,e)?(r[e]=n,!0):Ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==ze&&Ue(t,o)||zc(e,o)||(l=i[0])&&Ue(l,o)||Ue(r,o)||Ue(oo,o)||Ue(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rp(t){return he(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Su=!0;function Pb(t){const e=Y_(t),n=t.proxy,r=t.ctx;Su=!1,e.beforeCreate&&sp(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:h,beforeMount:f,mounted:p,beforeUpdate:_,updated:D,activated:N,deactivated:L,beforeDestroy:O,beforeUnmount:x,destroyed:k,unmounted:F,render:$,renderTracked:G,renderTriggered:b,errorCaptured:w,serverPrefetch:E,expose:A,inheritAttrs:R,components:P,directives:T,filters:Me}=e;if(u&&Cb(u,r,null),o)for(const _e in o){const Ce=o[_e];Ee(Ce)&&(r[_e]=Ce.bind(n))}if(s){const _e=s.call(n,n);We(_e)&&(t.data=hr(_e))}if(Su=!0,i)for(const _e in i){const Ce=i[_e],Gt=Ee(Ce)?Ce.bind(n,n):Ee(Ce.get)?Ce.get.bind(n,n):Dn,dn=!Ee(Ce)&&Ee(Ce.set)?Ce.set.bind(n):Dn,tn=He({get:Gt,set:dn});Object.defineProperty(r,_e,{enumerable:!0,configurable:!0,get:()=>tn.value,set:Je=>tn.value=Je})}if(l)for(const _e in l)K_(l[_e],r,n,_e);if(c){const _e=Ee(c)?c.call(n):c;Reflect.ownKeys(_e).forEach(Ce=>{Sn(Ce,_e[Ce])})}h&&sp(h,t,"c");function Ne(_e,Ce){he(Ce)?Ce.forEach(Gt=>_e(Gt.bind(n))):Ce&&_e(Ce.bind(n))}if(Ne(gb,f),Ne(jh,p),Ne(_b,_),Ne(yb,D),Ne(fb,N),Ne(pb,L),Ne(bb,w),Ne(wb,G),Ne(Eb,b),Ne(z_,x),Ne(W_,F),Ne(vb,E),he(A))if(A.length){const _e=t.exposed||(t.exposed={});A.forEach(Ce=>{Object.defineProperty(_e,Ce,{get:()=>n[Ce],set:Gt=>n[Ce]=Gt})})}else t.exposed||(t.exposed={});$&&t.render===Dn&&(t.render=$),R!=null&&(t.inheritAttrs=R),P&&(t.components=P),T&&(t.directives=T),E&&H_(t)}function Cb(t,e,n=Dn){he(t)&&(t=Pu(t));for(const r in t){const s=t[r];let i;We(s)?"default"in s?i=Be(s.from||r,s.default,!0):i=Be(s.from||r):i=Be(s),at(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function sp(t,e,n){_n(he(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function K_(t,e,n,r){let s=r.includes(".")?ay(n,r):()=>n[r];if(rt(t)){const i=e[t];Ee(i)&&ht(s,i)}else if(Ee(t))ht(s,t.bind(n));else if(We(t))if(he(t))t.forEach(i=>K_(i,e,n,r));else{const i=Ee(t.handler)?t.handler.bind(n):e[t.handler];Ee(i)&&ht(s,i,t)}}function Y_(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>al(c,u,o,!0)),al(c,e,o)),We(e)&&i.set(e,c),c}function al(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&al(t,i,n,!0),s&&s.forEach(o=>al(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=Rb[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Rb={data:ip,props:op,emits:op,methods:Wi,computed:Wi,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:Wi,directives:Wi,watch:kb,provide:ip,inject:Db};function ip(t,e){return e?t?function(){return mt(Ee(t)?t.call(this,this):t,Ee(e)?e.call(this,this):e)}:e:t}function Db(t,e){return Wi(Pu(t),Pu(e))}function Pu(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Lt(t,e){return t?[...new Set([].concat(t,e))]:e}function Wi(t,e){return t?mt(Object.create(null),t,e):e}function op(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:mt(Object.create(null),rp(t),rp(e??{})):e}function kb(t,e){if(!t)return e;if(!e)return t;const n=mt(Object.create(null),t);for(const r in e)n[r]=Lt(t[r],e[r]);return n}function Q_(){return{app:null,config:{isNativeTag:_1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xb=0;function Ob(t,e){return function(r,s=null){Ee(r)||(r=mt({},r)),s!=null&&!We(s)&&(s=null);const i=Q_(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:xb++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:g0,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&Ee(h.install)?(o.add(h),h.install(u,...f)):Ee(h)&&(o.add(h),h(u,...f))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,f){return f?(i.components[h]=f,u):i.components[h]},directive(h,f){return f?(i.directives[h]=f,u):i.directives[h]},mount(h,f,p){if(!c){const _=u._ceVNode||Pe(r,s);return _.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(_,h,p),c=!0,u._container=h,h.__vue_app__=u,Wl(_.component)}},onUnmount(h){l.push(h)},unmount(){c&&(_n(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return i.provides[h]=f,u},runWithContext(h){const f=ws;ws=u;try{return h()}finally{ws=f}}};return u}}let ws=null;function Sn(t,e){if(pt){let n=pt.provides;const r=pt.parent&&pt.parent.provides;r===n&&(n=pt.provides=Object.create(r)),n[t]=e}}function Be(t,e,n=!1){const r=pt||Ut;if(r||ws){let s=ws?ws._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ee(e)?e.call(r&&r.proxy):e}}function Nb(){return!!(pt||Ut||ws)}const X_={},J_=()=>Object.create(X_),Z_=t=>Object.getPrototypeOf(t)===X_;function Vb(t,e,n,r=!1){const s={},i=J_();t.propsDefaults=Object.create(null),ey(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:C_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Mb(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ve(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let p=h[f];if(ql(t.emitsOptions,p))continue;const _=e[p];if(c)if(Ue(i,p))_!==i[p]&&(i[p]=_,u=!0);else{const D=cn(p);s[D]=Cu(c,l,D,_,t,!1)}else _!==i[p]&&(i[p]=_,u=!0)}}}else{ey(t,e,s,i)&&(u=!0);let h;for(const f in l)(!e||!Ue(e,f)&&((h=xs(f))===f||!Ue(e,h)))&&(c?n&&(n[f]!==void 0||n[h]!==void 0)&&(s[f]=Cu(c,l,f,void 0,t,!0)):delete s[f]);if(i!==l)for(const f in i)(!e||!Ue(e,f))&&(delete i[f],u=!0)}u&&Gn(t.attrs,"set","")}function ey(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(to(c))continue;const u=e[c];let h;s&&Ue(s,h=cn(c))?!i||!i.includes(h)?n[h]=u:(l||(l={}))[h]=u:ql(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ve(n),u=l||ze;for(let h=0;h<i.length;h++){const f=i[h];n[f]=Cu(s,c,f,u[f],t,!Ue(u,f))}}return o}function Cu(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Ue(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Ee(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=zo(s);r=u[n]=c.call(null,e),h()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===xs(n))&&(r=!0))}return r}const Lb=new WeakMap;function ty(t,e,n=!1){const r=n?Lb:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!Ee(t)){const h=f=>{c=!0;const[p,_]=ty(f,e,!0);mt(o,p),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return We(t)&&r.set(t,Xs),Xs;if(he(i))for(let h=0;h<i.length;h++){const f=cn(i[h]);ap(f)&&(o[f]=ze)}else if(i)for(const h in i){const f=cn(h);if(ap(f)){const p=i[h],_=o[f]=he(p)||Ee(p)?{type:p}:mt({},p),D=_.type;let N=!1,L=!0;if(he(D))for(let O=0;O<D.length;++O){const x=D[O],k=Ee(x)&&x.name;if(k==="Boolean"){N=!0;break}else k==="String"&&(L=!1)}else N=Ee(D)&&D.name==="Boolean";_[0]=N,_[1]=L,(N||Ue(_,"default"))&&l.push(f)}}const u=[o,l];return We(t)&&r.set(t,u),u}function ap(t){return t[0]!=="$"&&!to(t)}const qh=t=>t[0]==="_"||t==="$stable",zh=t=>he(t)?t.map(Pn):[Pn(t)],Fb=(t,e,n)=>{if(e._n)return e;const r=Ln((...s)=>zh(e(...s)),n);return r._c=!1,r},ny=(t,e,n)=>{const r=t._ctx;for(const s in t){if(qh(s))continue;const i=t[s];if(Ee(i))e[s]=Fb(s,i,r);else if(i!=null){const o=zh(i);e[s]=()=>o}}},ry=(t,e)=>{const n=zh(e);t.slots.default=()=>n},sy=(t,e,n)=>{for(const r in e)(n||!qh(r))&&(t[r]=e[r])},$b=(t,e,n)=>{const r=t.slots=J_();if(t.vnode.shapeFlag&32){const s=e.__;s&&Eu(r,"__",s,!0);const i=e._;i?(sy(r,e,n),n&&Eu(r,"_",i,!0)):ny(e,r)}else e&&ry(t,e)},Ub=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ze;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:sy(s,e,n):(i=!e.$stable,ny(e,s)),o=e}else e&&(ry(t,e),o={default:1});if(i)for(const l in s)!qh(l)&&o[l]==null&&delete s[l]},Yt=t0;function Bb(t){return jb(t)}function jb(t,e){const n=Ll();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:p,setScopeId:_=Dn,insertStaticContent:D}=t,N=(I,S,V,H=null,W=null,q=null,ne=void 0,Z=null,J=!!S.dynamicChildren)=>{if(I===S)return;I&&!gs(I,S)&&(H=j(I),Je(I,W,q,!0),I=null),S.patchFlag===-2&&(J=!1,S.dynamicChildren=null);const{type:Y,ref:ue,shapeFlag:te}=S;switch(Y){case zl:L(I,S,V,H);break;case $t:O(I,S,V,H);break;case Ua:I==null&&x(S,V,H,ne);break;case xt:P(I,S,V,H,W,q,ne,Z,J);break;default:te&1?$(I,S,V,H,W,q,ne,Z,J):te&6?T(I,S,V,H,W,q,ne,Z,J):(te&64||te&128)&&Y.process(I,S,V,H,W,q,ne,Z,J,ae)}ue!=null&&W?so(ue,I&&I.ref,q,S||I,!S):ue==null&&I&&I.ref!=null&&so(I.ref,null,q,I,!0)},L=(I,S,V,H)=>{if(I==null)r(S.el=l(S.children),V,H);else{const W=S.el=I.el;S.children!==I.children&&u(W,S.children)}},O=(I,S,V,H)=>{I==null?r(S.el=c(S.children||""),V,H):S.el=I.el},x=(I,S,V,H)=>{[I.el,I.anchor]=D(I.children,S,V,H,I.el,I.anchor)},k=({el:I,anchor:S},V,H)=>{let W;for(;I&&I!==S;)W=p(I),r(I,V,H),I=W;r(S,V,H)},F=({el:I,anchor:S})=>{let V;for(;I&&I!==S;)V=p(I),s(I),I=V;s(S)},$=(I,S,V,H,W,q,ne,Z,J)=>{S.type==="svg"?ne="svg":S.type==="math"&&(ne="mathml"),I==null?G(S,V,H,W,q,ne,Z,J):E(I,S,W,q,ne,Z,J)},G=(I,S,V,H,W,q,ne,Z)=>{let J,Y;const{props:ue,shapeFlag:te,transition:le,dirs:ge}=I;if(J=I.el=o(I.type,q,ue&&ue.is,ue),te&8?h(J,I.children):te&16&&w(I.children,J,null,H,W,Wc(I,q),ne,Z),ge&&us(I,null,H,"created"),b(J,I,I.scopeId,ne,H),ue){for(const be in ue)be!=="value"&&!to(be)&&i(J,be,null,ue[be],q,H);"value"in ue&&i(J,"value",null,ue.value,q),(Y=ue.onVnodeBeforeMount)&&bn(Y,H,I)}ge&&us(I,null,H,"beforeMount");const fe=Hb(W,le);fe&&le.beforeEnter(J),r(J,S,V),((Y=ue&&ue.onVnodeMounted)||fe||ge)&&Yt(()=>{Y&&bn(Y,H,I),fe&&le.enter(J),ge&&us(I,null,H,"mounted")},W)},b=(I,S,V,H,W)=>{if(V&&_(I,V),H)for(let q=0;q<H.length;q++)_(I,H[q]);if(W){let q=W.subTree;if(S===q||cy(q.type)&&(q.ssContent===S||q.ssFallback===S)){const ne=W.vnode;b(I,ne,ne.scopeId,ne.slotScopeIds,W.parent)}}},w=(I,S,V,H,W,q,ne,Z,J=0)=>{for(let Y=J;Y<I.length;Y++){const ue=I[Y]=Z?Dr(I[Y]):Pn(I[Y]);N(null,ue,S,V,H,W,q,ne,Z)}},E=(I,S,V,H,W,q,ne)=>{const Z=S.el=I.el;let{patchFlag:J,dynamicChildren:Y,dirs:ue}=S;J|=I.patchFlag&16;const te=I.props||ze,le=S.props||ze;let ge;if(V&&hs(V,!1),(ge=le.onVnodeBeforeUpdate)&&bn(ge,V,S,I),ue&&us(S,I,V,"beforeUpdate"),V&&hs(V,!0),(te.innerHTML&&le.innerHTML==null||te.textContent&&le.textContent==null)&&h(Z,""),Y?A(I.dynamicChildren,Y,Z,V,H,Wc(S,W),q):ne||Ce(I,S,Z,null,V,H,Wc(S,W),q,!1),J>0){if(J&16)R(Z,te,le,V,W);else if(J&2&&te.class!==le.class&&i(Z,"class",null,le.class,W),J&4&&i(Z,"style",te.style,le.style,W),J&8){const fe=S.dynamicProps;for(let be=0;be<fe.length;be++){const ke=fe[be],gt=te[ke],_t=le[ke];(_t!==gt||ke==="value")&&i(Z,ke,gt,_t,W,V)}}J&1&&I.children!==S.children&&h(Z,S.children)}else!ne&&Y==null&&R(Z,te,le,V,W);((ge=le.onVnodeUpdated)||ue)&&Yt(()=>{ge&&bn(ge,V,S,I),ue&&us(S,I,V,"updated")},H)},A=(I,S,V,H,W,q,ne)=>{for(let Z=0;Z<S.length;Z++){const J=I[Z],Y=S[Z],ue=J.el&&(J.type===xt||!gs(J,Y)||J.shapeFlag&198)?f(J.el):V;N(J,Y,ue,null,H,W,q,ne,!0)}},R=(I,S,V,H,W)=>{if(S!==V){if(S!==ze)for(const q in S)!to(q)&&!(q in V)&&i(I,q,S[q],null,W,H);for(const q in V){if(to(q))continue;const ne=V[q],Z=S[q];ne!==Z&&q!=="value"&&i(I,q,Z,ne,W,H)}"value"in V&&i(I,"value",S.value,V.value,W)}},P=(I,S,V,H,W,q,ne,Z,J)=>{const Y=S.el=I?I.el:l(""),ue=S.anchor=I?I.anchor:l("");let{patchFlag:te,dynamicChildren:le,slotScopeIds:ge}=S;ge&&(Z=Z?Z.concat(ge):ge),I==null?(r(Y,V,H),r(ue,V,H),w(S.children||[],V,ue,W,q,ne,Z,J)):te>0&&te&64&&le&&I.dynamicChildren?(A(I.dynamicChildren,le,V,W,q,ne,Z),(S.key!=null||W&&S===W.subTree)&&iy(I,S,!0)):Ce(I,S,V,ue,W,q,ne,Z,J)},T=(I,S,V,H,W,q,ne,Z,J)=>{S.slotScopeIds=Z,I==null?S.shapeFlag&512?W.ctx.activate(S,V,H,ne,J):Me(S,V,H,W,q,ne,J):Xe(I,S,J)},Me=(I,S,V,H,W,q,ne)=>{const Z=I.component=l0(I,H,W);if(jl(I)&&(Z.ctx.renderer=ae),u0(Z,!1,ne),Z.asyncDep){if(W&&W.registerDep(Z,Ne,ne),!I.el){const J=Z.subTree=Pe($t);O(null,J,S,V)}}else Ne(Z,I,S,V,W,q,ne)},Xe=(I,S,V)=>{const H=S.component=I.component;if(Zb(I,S,V))if(H.asyncDep&&!H.asyncResolved){_e(H,S,V);return}else H.next=S,H.update();else S.el=I.el,H.vnode=S},Ne=(I,S,V,H,W,q,ne)=>{const Z=()=>{if(I.isMounted){let{next:te,bu:le,u:ge,parent:fe,vnode:be}=I;{const At=oy(I);if(At){te&&(te.el=be.el,_e(I,te,ne)),At.asyncDep.then(()=>{I.isUnmounted||Z()});return}}let ke=te,gt;hs(I,!1),te?(te.el=be.el,_e(I,te,ne)):te=be,le&&$a(le),(gt=te.props&&te.props.onVnodeBeforeUpdate)&&bn(gt,fe,te,be),hs(I,!0);const _t=cp(I),nn=I.subTree;I.subTree=_t,N(nn,_t,f(nn.el),j(nn),I,W,q),te.el=_t.el,ke===null&&e0(I,_t.el),ge&&Yt(ge,W),(gt=te.props&&te.props.onVnodeUpdated)&&Yt(()=>bn(gt,fe,te,be),W)}else{let te;const{el:le,props:ge}=S,{bm:fe,m:be,parent:ke,root:gt,type:_t}=I,nn=io(S);hs(I,!1),fe&&$a(fe),!nn&&(te=ge&&ge.onVnodeBeforeMount)&&bn(te,ke,S),hs(I,!0);{gt.ce&&gt.ce._def.shadowRoot!==!1&&gt.ce._injectChildStyle(_t);const At=I.subTree=cp(I);N(null,At,V,H,I,W,q),S.el=At.el}if(be&&Yt(be,W),!nn&&(te=ge&&ge.onVnodeMounted)){const At=S;Yt(()=>bn(te,ke,At),W)}(S.shapeFlag&256||ke&&io(ke.vnode)&&ke.vnode.shapeFlag&256)&&I.a&&Yt(I.a,W),I.isMounted=!0,S=V=H=null}};I.scope.on();const J=I.effect=new p_(Z);I.scope.off();const Y=I.update=J.run.bind(J),ue=I.job=J.runIfDirty.bind(J);ue.i=I,ue.id=I.uid,J.scheduler=()=>Uh(ue),hs(I,!0),Y()},_e=(I,S,V)=>{S.component=I;const H=I.vnode.props;I.vnode=S,I.next=null,Mb(I,S.props,H,V),Ub(I,S.children,V),nr(),ep(I),rr()},Ce=(I,S,V,H,W,q,ne,Z,J=!1)=>{const Y=I&&I.children,ue=I?I.shapeFlag:0,te=S.children,{patchFlag:le,shapeFlag:ge}=S;if(le>0){if(le&128){dn(Y,te,V,H,W,q,ne,Z,J);return}else if(le&256){Gt(Y,te,V,H,W,q,ne,Z,J);return}}ge&8?(ue&16&&jt(Y,W,q),te!==Y&&h(V,te)):ue&16?ge&16?dn(Y,te,V,H,W,q,ne,Z,J):jt(Y,W,q,!0):(ue&8&&h(V,""),ge&16&&w(te,V,H,W,q,ne,Z,J))},Gt=(I,S,V,H,W,q,ne,Z,J)=>{I=I||Xs,S=S||Xs;const Y=I.length,ue=S.length,te=Math.min(Y,ue);let le;for(le=0;le<te;le++){const ge=S[le]=J?Dr(S[le]):Pn(S[le]);N(I[le],ge,V,null,W,q,ne,Z,J)}Y>ue?jt(I,W,q,!0,!1,te):w(S,V,H,W,q,ne,Z,J,te)},dn=(I,S,V,H,W,q,ne,Z,J)=>{let Y=0;const ue=S.length;let te=I.length-1,le=ue-1;for(;Y<=te&&Y<=le;){const ge=I[Y],fe=S[Y]=J?Dr(S[Y]):Pn(S[Y]);if(gs(ge,fe))N(ge,fe,V,null,W,q,ne,Z,J);else break;Y++}for(;Y<=te&&Y<=le;){const ge=I[te],fe=S[le]=J?Dr(S[le]):Pn(S[le]);if(gs(ge,fe))N(ge,fe,V,null,W,q,ne,Z,J);else break;te--,le--}if(Y>te){if(Y<=le){const ge=le+1,fe=ge<ue?S[ge].el:H;for(;Y<=le;)N(null,S[Y]=J?Dr(S[Y]):Pn(S[Y]),V,fe,W,q,ne,Z,J),Y++}}else if(Y>le)for(;Y<=te;)Je(I[Y],W,q,!0),Y++;else{const ge=Y,fe=Y,be=new Map;for(Y=fe;Y<=le;Y++){const yt=S[Y]=J?Dr(S[Y]):Pn(S[Y]);yt.key!=null&&be.set(yt.key,Y)}let ke,gt=0;const _t=le-fe+1;let nn=!1,At=0;const yr=new Array(_t);for(Y=0;Y<_t;Y++)yr[Y]=0;for(Y=ge;Y<=te;Y++){const yt=I[Y];if(gt>=_t){Je(yt,W,q,!0);continue}let rn;if(yt.key!=null)rn=be.get(yt.key);else for(ke=fe;ke<=le;ke++)if(yr[ke-fe]===0&&gs(yt,S[ke])){rn=ke;break}rn===void 0?Je(yt,W,q,!0):(yr[rn-fe]=Y+1,rn>=At?At=rn:nn=!0,N(yt,S[rn],V,null,W,q,ne,Z,J),gt++)}const Ci=nn?qb(yr):Xs;for(ke=Ci.length-1,Y=_t-1;Y>=0;Y--){const yt=fe+Y,rn=S[yt],ca=yt+1<ue?S[yt+1].el:H;yr[Y]===0?N(null,rn,V,ca,W,q,ne,Z,J):nn&&(ke<0||Y!==Ci[ke]?tn(rn,V,ca,2):ke--)}}},tn=(I,S,V,H,W=null)=>{const{el:q,type:ne,transition:Z,children:J,shapeFlag:Y}=I;if(Y&6){tn(I.component.subTree,S,V,H);return}if(Y&128){I.suspense.move(S,V,H);return}if(Y&64){ne.move(I,S,V,ae);return}if(ne===xt){r(q,S,V);for(let te=0;te<J.length;te++)tn(J[te],S,V,H);r(I.anchor,S,V);return}if(ne===Ua){k(I,S,V);return}if(H!==2&&Y&1&&Z)if(H===0)Z.beforeEnter(q),r(q,S,V),Yt(()=>Z.enter(q),W);else{const{leave:te,delayLeave:le,afterLeave:ge}=Z,fe=()=>{I.ctx.isUnmounted?s(q):r(q,S,V)},be=()=>{te(q,()=>{fe(),ge&&ge()})};le?le(q,fe,be):be()}else r(q,S,V)},Je=(I,S,V,H=!1,W=!1)=>{const{type:q,props:ne,ref:Z,children:J,dynamicChildren:Y,shapeFlag:ue,patchFlag:te,dirs:le,cacheIndex:ge}=I;if(te===-2&&(W=!1),Z!=null&&(nr(),so(Z,null,V,I,!0),rr()),ge!=null&&(S.renderCache[ge]=void 0),ue&256){S.ctx.deactivate(I);return}const fe=ue&1&&le,be=!io(I);let ke;if(be&&(ke=ne&&ne.onVnodeBeforeUnmount)&&bn(ke,S,I),ue&6)wn(I.component,V,H);else{if(ue&128){I.suspense.unmount(V,H);return}fe&&us(I,null,S,"beforeUnmount"),ue&64?I.type.remove(I,S,V,ae,H):Y&&!Y.hasOnce&&(q!==xt||te>0&&te&64)?jt(Y,S,V,!1,!0):(q===xt&&te&384||!W&&ue&16)&&jt(J,S,V),H&&Ze(I)}(be&&(ke=ne&&ne.onVnodeUnmounted)||fe)&&Yt(()=>{ke&&bn(ke,S,I),fe&&us(I,null,S,"unmounted")},V)},Ze=I=>{const{type:S,el:V,anchor:H,transition:W}=I;if(S===xt){_r(V,H);return}if(S===Ua){F(I);return}const q=()=>{s(V),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(I.shapeFlag&1&&W&&!W.persisted){const{leave:ne,delayLeave:Z}=W,J=()=>ne(V,q);Z?Z(I.el,q,J):J()}else q()},_r=(I,S)=>{let V;for(;I!==S;)V=p(I),s(I),I=V;s(S)},wn=(I,S,V)=>{const{bum:H,scope:W,job:q,subTree:ne,um:Z,m:J,a:Y,parent:ue,slots:{__:te}}=I;lp(J),lp(Y),H&&$a(H),ue&&he(te)&&te.forEach(le=>{ue.renderCache[le]=void 0}),W.stop(),q&&(q.flags|=8,Je(ne,I,S,V)),Z&&Yt(Z,S),Yt(()=>{I.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},jt=(I,S,V,H=!1,W=!1,q=0)=>{for(let ne=q;ne<I.length;ne++)Je(I[ne],S,V,H,W)},j=I=>{if(I.shapeFlag&6)return j(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const S=p(I.anchor||I.el),V=S&&S[cb];return V?p(V):S};let oe=!1;const se=(I,S,V)=>{I==null?S._vnode&&Je(S._vnode,null,null,!0):N(S._vnode||null,I,S,null,null,null,V),S._vnode=I,oe||(oe=!0,ep(),N_(),oe=!1)},ae={p:N,um:Je,m:tn,r:Ze,mt:Me,mc:w,pc:Ce,pbc:A,n:j,o:t};return{render:se,hydrate:void 0,createApp:Ob(se)}}function Wc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function hs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Hb(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function iy(t,e,n=!1){const r=t.children,s=e.children;if(he(r)&&he(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Dr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&iy(o,l)),l.type===zl&&(l.el=o.el),l.type===$t&&!l.el&&(l.el=o.el)}}function qb(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function oy(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:oy(e)}function lp(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const zb=Symbol.for("v-scx"),Wb=()=>Be(zb);function Gb(t,e){return Wh(t,null,e)}function ht(t,e,n){return Wh(t,e,n)}function Wh(t,e,n=ze){const{immediate:r,deep:s,flush:i,once:o}=n,l=mt({},n),c=e&&r||!e&&i!=="post";let u;if(So){if(i==="sync"){const _=Wb();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Dn,_.resume=Dn,_.pause=Dn,_}}const h=pt;l.call=(_,D,N)=>_n(_,h,D,N);let f=!1;i==="post"?l.scheduler=_=>{Yt(_,h&&h.suspense)}:i!=="sync"&&(f=!0,l.scheduler=(_,D)=>{D?_():Uh(_)}),l.augmentJob=_=>{e&&(_.flags|=4),f&&(_.flags|=2,h&&(_.id=h.uid,_.i=h))};const p=ib(t,e,l);return So&&(u?u.push(p):c&&p()),p}function Kb(t,e,n){const r=this.proxy,s=rt(t)?t.includes(".")?ay(r,t):()=>r[t]:t.bind(r,r);let i;Ee(e)?i=e:(i=e.handler,n=e);const o=zo(this),l=Wh(s,i.bind(r),n);return o(),l}function ay(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Yb=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${cn(e)}Modifiers`]||t[`${xs(e)}Modifiers`];function Qb(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ze;let s=n;const i=e.startsWith("update:"),o=i&&Yb(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>rt(h)?h.trim():h)),o.number&&(s=n.map(tl)));let l,c=r[l=$c(e)]||r[l=$c(cn(e))];!c&&i&&(c=r[l=$c(xs(e))]),c&&_n(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,_n(u,t,6,s)}}function ly(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!Ee(t)){const c=u=>{const h=ly(u,e,!0);h&&(l=!0,mt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(We(t)&&r.set(t,null),null):(he(i)?i.forEach(c=>o[c]=null):mt(o,i),We(t)&&r.set(t,o),o)}function ql(t,e){return!t||!Nl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ue(t,e[0].toLowerCase()+e.slice(1))||Ue(t,xs(e))||Ue(t,e))}function cp(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:h,props:f,data:p,setupState:_,ctx:D,inheritAttrs:N}=t,L=ol(t);let O,x;try{if(n.shapeFlag&4){const F=s||r,$=F;O=Pn(u.call($,F,h,f,_,p,D)),x=l}else{const F=e;O=Pn(F.length>1?F(f,{attrs:l,slots:o,emit:c}):F(f,null)),x=e.props?l:Xb(l)}}catch(F){ao.length=0,Ul(F,t,1),O=Pe($t)}let k=O;if(x&&N!==!1){const F=Object.keys(x),{shapeFlag:$}=k;F.length&&$&7&&(i&&F.some(Ch)&&(x=Jb(x,i)),k=zr(k,x,!1,!0))}return n.dirs&&(k=zr(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&Io(k,n.transition),O=k,ol(L),O}const Xb=t=>{let e;for(const n in t)(n==="class"||n==="style"||Nl(n))&&((e||(e={}))[n]=t[n]);return e},Jb=(t,e)=>{const n={};for(const r in t)(!Ch(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Zb(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?up(r,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const p=h[f];if(o[p]!==r[p]&&!ql(u,p))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?up(r,o,u):!0:!!o;return!1}function up(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ql(n,i))return!0}return!1}function e0({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const cy=t=>t.__isSuspense;function t0(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):lb(t)}const xt=Symbol.for("v-fgt"),zl=Symbol.for("v-txt"),$t=Symbol.for("v-cmt"),Ua=Symbol.for("v-stc"),ao=[];let Xt=null;function K(t=!1){ao.push(Xt=t?null:[])}function n0(){ao.pop(),Xt=ao[ao.length-1]||null}let Ao=1;function hp(t,e=!1){Ao+=t,t<0&&Xt&&e&&(Xt.hasOnce=!0)}function uy(t){return t.dynamicChildren=Ao>0?Xt||Xs:null,n0(),Ao>0&&Xt&&Xt.push(t),t}function X(t,e,n,r,s,i){return uy(g(t,e,n,r,s,i,!0))}function $n(t,e,n,r,s){return uy(Pe(t,e,n,r,s,!0))}function ll(t){return t?t.__v_isVNode===!0:!1}function gs(t,e){return t.type===e.type&&t.key===e.key}const hy=({key:t})=>t??null,Ba=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?rt(t)||at(t)||Ee(t)?{i:Ut,r:t,k:e,f:!!n}:t:null);function g(t,e=null,n=null,r=0,s=null,i=t===xt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hy(e),ref:e&&Ba(e),scopeId:M_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ut};return l?(Gh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=rt(n)?8:16),Ao>0&&!o&&Xt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Xt.push(c),c}const Pe=r0;function r0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===G_)&&(t=$t),ll(t)){const l=zr(t,e,!0);return n&&Gh(l,n),Ao>0&&!i&&Xt&&(l.shapeFlag&6?Xt[Xt.indexOf(t)]=l:Xt.push(l)),l.patchFlag=-2,l}if(m0(t)&&(t=t.__vccOpts),e){e=s0(e);let{class:l,style:c}=e;l&&!rt(l)&&(e.class=Ts(l)),We(c)&&(Fh(c)&&!he(c)&&(c=mt({},c)),e.style=Fl(c))}const o=rt(t)?1:cy(t)?128:L_(t)?64:We(t)?4:Ee(t)?2:0;return g(t,e,n,r,s,o,i,!0)}function s0(t){return t?Fh(t)||Z_(t)?mt({},t):t:null}function zr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?i0(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&hy(u),ref:e&&e.ref?n&&i?he(i)?i.concat(Ba(e)):[i,Ba(e)]:Ba(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zr(t.ssContent),ssFallback:t.ssFallback&&zr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Io(h,c.clone(h)),h}function zt(t=" ",e=0){return Pe(zl,null,t,e)}function dy(t,e){const n=Pe(Ua,null,t);return n.staticCount=e,n}function Ie(t="",e=!1){return e?(K(),$n($t,null,t)):Pe($t,null,t)}function Pn(t){return t==null||typeof t=="boolean"?Pe($t):he(t)?Pe(xt,null,t.slice()):ll(t)?Dr(t):Pe(zl,null,String(t))}function Dr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zr(t)}function Gh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Gh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Z_(e)?e._ctx=Ut:s===3&&Ut&&(Ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ee(e)?(e={default:e,_ctx:Ut},n=32):(e=String(e),r&64?(n=16,e=[zt(e)]):n=8);t.children=e,t.shapeFlag|=n}function i0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ts([e.class,r.class]));else if(s==="style")e.style=Fl([e.style,r.style]);else if(Nl(s)){const i=e[s],o=r[s];o&&i!==o&&!(he(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function bn(t,e,n,r=null){_n(t,e,7,[n,r])}const o0=Q_();let a0=0;function l0(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||o0,i={uid:a0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new h_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ty(r,s),emitsOptions:ly(r,s),emit:null,emitted:null,propsDefaults:ze,inheritAttrs:r.inheritAttrs,ctx:ze,data:ze,props:ze,attrs:ze,slots:ze,refs:ze,setupState:ze,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Qb.bind(null,i),t.ce&&t.ce(i),i}let pt=null;const c0=()=>pt||Ut;let cl,Ru;{const t=Ll(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};cl=e("__VUE_INSTANCE_SETTERS__",n=>pt=n),Ru=e("__VUE_SSR_SETTERS__",n=>So=n)}const zo=t=>{const e=pt;return cl(t),t.scope.on(),()=>{t.scope.off(),cl(e)}},dp=()=>{pt&&pt.scope.off(),cl(null)};function fy(t){return t.vnode.shapeFlag&4}let So=!1;function u0(t,e=!1,n=!1){e&&Ru(e);const{props:r,children:s}=t.vnode,i=fy(t);Vb(t,r,i,e),$b(t,s,n||e);const o=i?h0(t,e):void 0;return e&&Ru(!1),o}function h0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Sb);const{setup:r}=n;if(r){nr();const s=t.setupContext=r.length>1?f0(t):null,i=zo(t),o=qo(r,t,0,[t.props,s]),l=i_(o);if(rr(),i(),(l||t.sp)&&!io(t)&&H_(t),l){if(o.then(dp,dp),e)return o.then(c=>{fp(t,c)}).catch(c=>{Ul(c,t,0)});t.asyncDep=o}else fp(t,o)}else py(t)}function fp(t,e,n){Ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:We(e)&&(t.setupState=k_(e)),py(t)}function py(t,e,n){const r=t.type;t.render||(t.render=r.render||Dn);{const s=zo(t);nr();try{Pb(t)}finally{rr(),s()}}}const d0={get(t,e){return kt(t,"get",""),t[e]}};function f0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,d0),slots:t.slots,emit:t.emit,expose:e}}function Wl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(k_($h(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in oo)return oo[n](t)},has(e,n){return n in e||n in oo}})):t.proxy}function p0(t,e=!0){return Ee(t)?t.displayName||t.name:t.name||e&&t.__name}function m0(t){return Ee(t)&&"__vccOpts"in t}const He=(t,e)=>rb(t,e,So);function oi(t,e,n){const r=arguments.length;return r===2?We(e)&&!he(e)?ll(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ll(n)&&(n=[n]),Pe(t,e,n))}const g0="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Du;const pp=typeof window<"u"&&window.trustedTypes;if(pp)try{Du=pp.createPolicy("vue",{createHTML:t=>t})}catch{}const my=Du?t=>Du.createHTML(t):t=>t,_0="http://www.w3.org/2000/svg",y0="http://www.w3.org/1998/Math/MathML",Wn=typeof document<"u"?document:null,mp=Wn&&Wn.createElement("template"),v0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Wn.createElementNS(_0,t):e==="mathml"?Wn.createElementNS(y0,t):n?Wn.createElement(t,{is:n}):Wn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Wn.createTextNode(t),createComment:t=>Wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{mp.innerHTML=my(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=mp.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},br="transition",ji="animation",Po=Symbol("_vtc"),gy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},E0=mt({},F_,gy),w0=t=>(t.displayName="Transition",t.props=E0,t),ns=w0((t,{slots:e})=>oi(db,b0(t),e)),ds=(t,e=[])=>{he(t)?t.forEach(n=>n(...e)):t&&t(...e)},gp=t=>t?he(t)?t.some(e=>e.length>1):t.length>1:!1;function b0(t){const e={};for(const P in t)P in gy||(e[P]=t[P]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=l,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,D=T0(s),N=D&&D[0],L=D&&D[1],{onBeforeEnter:O,onEnter:x,onEnterCancelled:k,onLeave:F,onLeaveCancelled:$,onBeforeAppear:G=O,onAppear:b=x,onAppearCancelled:w=k}=e,E=(P,T,Me,Xe)=>{P._enterCancelled=Xe,fs(P,T?h:l),fs(P,T?u:o),Me&&Me()},A=(P,T)=>{P._isLeaving=!1,fs(P,f),fs(P,_),fs(P,p),T&&T()},R=P=>(T,Me)=>{const Xe=P?b:x,Ne=()=>E(T,P,Me);ds(Xe,[T,Ne]),_p(()=>{fs(T,P?c:i),qn(T,P?h:l),gp(Xe)||yp(T,r,N,Ne)})};return mt(e,{onBeforeEnter(P){ds(O,[P]),qn(P,i),qn(P,o)},onBeforeAppear(P){ds(G,[P]),qn(P,c),qn(P,u)},onEnter:R(!1),onAppear:R(!0),onLeave(P,T){P._isLeaving=!0;const Me=()=>A(P,T);qn(P,f),P._enterCancelled?(qn(P,p),wp()):(wp(),qn(P,p)),_p(()=>{P._isLeaving&&(fs(P,f),qn(P,_),gp(F)||yp(P,r,L,Me))}),ds(F,[P,Me])},onEnterCancelled(P){E(P,!1,void 0,!0),ds(k,[P])},onAppearCancelled(P){E(P,!0,void 0,!0),ds(w,[P])},onLeaveCancelled(P){A(P),ds($,[P])}})}function T0(t){if(t==null)return null;if(We(t))return[Gc(t.enter),Gc(t.leave)];{const e=Gc(t);return[e,e]}}function Gc(t){return b1(t)}function qn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Po]||(t[Po]=new Set)).add(e)}function fs(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Po];n&&(n.delete(e),n.size||(t[Po]=void 0))}function _p(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let I0=0;function yp(t,e,n,r){const s=t._endId=++I0,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=A0(t,e);if(!o)return r();const u=o+"end";let h=0;const f=()=>{t.removeEventListener(u,p),i()},p=_=>{_.target===t&&++h>=c&&f()};setTimeout(()=>{h<c&&f()},l+1),t.addEventListener(u,p)}function A0(t,e){const n=window.getComputedStyle(t),r=D=>(n[D]||"").split(", "),s=r(`${br}Delay`),i=r(`${br}Duration`),o=vp(s,i),l=r(`${ji}Delay`),c=r(`${ji}Duration`),u=vp(l,c);let h=null,f=0,p=0;e===br?o>0&&(h=br,f=o,p=i.length):e===ji?u>0&&(h=ji,f=u,p=c.length):(f=Math.max(o,u),h=f>0?o>u?br:ji:null,p=h?h===br?i.length:c.length:0);const _=h===br&&/\b(transform|all)(,|$)/.test(r(`${br}Property`).toString());return{type:h,timeout:f,propCount:p,hasTransform:_}}function vp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Ep(n)+Ep(t[r])))}function Ep(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function wp(){return document.body.offsetHeight}function S0(t,e,n){const r=t[Po];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const bp=Symbol("_vod"),P0=Symbol("_vsh"),C0=Symbol(""),R0=/(^|;)\s*display\s*:/;function D0(t,e,n){const r=t.style,s=rt(n);let i=!1;if(n&&!s){if(e)if(rt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ja(r,l,"")}else for(const o in e)n[o]==null&&ja(r,o,"");for(const o in n)o==="display"&&(i=!0),ja(r,o,n[o])}else if(s){if(e!==n){const o=r[C0];o&&(n+=";"+o),r.cssText=n,i=R0.test(n)}}else e&&t.removeAttribute("style");bp in t&&(t[bp]=i?r.display:"",t[P0]&&(r.display="none"))}const Tp=/\s*!important$/;function ja(t,e,n){if(he(n))n.forEach(r=>ja(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=k0(t,e);Tp.test(n)?t.setProperty(xs(r),n.replace(Tp,""),"important"):t[r]=n}}const Ip=["Webkit","Moz","ms"],Kc={};function k0(t,e){const n=Kc[e];if(n)return n;let r=cn(e);if(r!=="filter"&&r in t)return Kc[e]=r;r=Ml(r);for(let s=0;s<Ip.length;s++){const i=Ip[s]+r;if(i in t)return Kc[e]=i}return e}const Ap="http://www.w3.org/1999/xlink";function Sp(t,e,n,r,s,i=C1(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ap,e.slice(6,e.length)):t.setAttributeNS(Ap,e,n):n==null||i&&!l_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Mn(n)?String(n):n)}function Pp(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?my(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=l_(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function xr(t,e,n,r){t.addEventListener(e,n,r)}function x0(t,e,n,r){t.removeEventListener(e,n,r)}const Cp=Symbol("_vei");function O0(t,e,n,r,s=null){const i=t[Cp]||(t[Cp]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=N0(e);if(r){const u=i[e]=L0(r,s);xr(t,l,u,c)}else o&&(x0(t,l,o,c),i[e]=void 0)}}const Rp=/(?:Once|Passive|Capture)$/;function N0(t){let e;if(Rp.test(t)){e={};let r;for(;r=t.match(Rp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xs(t.slice(2)),e]}let Yc=0;const V0=Promise.resolve(),M0=()=>Yc||(V0.then(()=>Yc=0),Yc=Date.now());function L0(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;_n(F0(r,n.value),e,5,[r])};return n.value=t,n.attached=M0(),n}function F0(t,e){if(he(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Dp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$0=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?S0(t,r,o):e==="style"?D0(t,n,r):Nl(e)?Ch(e)||O0(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):U0(t,e,r,o))?(Pp(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Sp(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!rt(r))?Pp(t,cn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Sp(t,e,r,o))};function U0(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Dp(e)&&Ee(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Dp(e)&&rt(n)?!1:e in t}const ai=t=>{const e=t.props["onUpdate:modelValue"]||!1;return he(e)?n=>$a(e,n):e};function B0(t){t.target.composing=!0}function kp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zn=Symbol("_assign"),Oe={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Zn]=ai(s);const i=r||s.props&&s.props.type==="number";xr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=tl(l)),t[Zn](l)}),n&&xr(t,"change",()=>{t.value=t.value.trim()}),e||(xr(t,"compositionstart",B0),xr(t,"compositionend",kp),xr(t,"change",kp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Zn]=ai(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?tl(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Gl={deep:!0,created(t,e,n){t[Zn]=ai(n),xr(t,"change",()=>{const r=t._modelValue,s=Co(t),i=t.checked,o=t[Zn];if(he(r)){const l=kh(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(yi(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(_y(t,i))})},mounted:xp,beforeUpdate(t,e,n){t[Zn]=ai(n),xp(t,e,n)}};function xp(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(he(e))s=kh(e,r.props.value)>-1;else if(yi(e))s=e.has(r.props.value);else{if(e===n)return;s=Ho(e,_y(t,!0))}t.checked!==s&&(t.checked=s)}const sr={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=yi(e);xr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?tl(Co(o)):Co(o));t[Zn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Bl(()=>{t._assigning=!1})}),t[Zn]=ai(r)},mounted(t,{value:e}){Op(t,e)},beforeUpdate(t,e,n){t[Zn]=ai(n)},updated(t,{value:e}){t._assigning||Op(t,e)}};function Op(t,e){const n=t.multiple,r=he(e);if(!(n&&!r&&!yi(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Co(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=kh(e,l)>-1}else o.selected=e.has(l);else if(Ho(Co(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Co(t){return"_value"in t?t._value:t.value}function _y(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const j0=["ctrl","shift","alt","meta"],H0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>j0.some(n=>t[`${n}Key`]&&!e.includes(n))},nt=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=H0[e[o]];if(l&&l(s,e))return}return t(s,...i)})},q0=mt({patchProp:$0},v0);let Np;function z0(){return Np||(Np=Bb(q0))}const W0=(...t)=>{const e=z0().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=K0(r);if(!s)return;const i=e._component;!Ee(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,G0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function G0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function K0(t){return rt(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const zs=typeof document<"u";function yy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Y0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&yy(t.default)}const $e=Object.assign;function Qc(t,e){const n={};for(const r in e){const s=e[r];n[r]=yn(s)?s.map(t):t(s)}return n}const lo=()=>{},yn=Array.isArray,vy=/#/g,Q0=/&/g,X0=/\//g,J0=/=/g,Z0=/\?/g,Ey=/\+/g,eT=/%5B/g,tT=/%5D/g,wy=/%5E/g,nT=/%60/g,by=/%7B/g,rT=/%7C/g,Ty=/%7D/g,sT=/%20/g;function Kh(t){return encodeURI(""+t).replace(rT,"|").replace(eT,"[").replace(tT,"]")}function iT(t){return Kh(t).replace(by,"{").replace(Ty,"}").replace(wy,"^")}function ku(t){return Kh(t).replace(Ey,"%2B").replace(sT,"+").replace(vy,"%23").replace(Q0,"%26").replace(nT,"`").replace(by,"{").replace(Ty,"}").replace(wy,"^")}function oT(t){return ku(t).replace(J0,"%3D")}function aT(t){return Kh(t).replace(vy,"%23").replace(Z0,"%3F")}function lT(t){return t==null?"":aT(t).replace(X0,"%2F")}function Ro(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const cT=/\/$/,uT=t=>t.replace(cT,"");function Xc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=pT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ro(o)}}function hT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Vp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function dT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&li(e.matched[r],n.matched[s])&&Iy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function li(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Iy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!fT(t[n],e[n]))return!1;return!0}function fT(t,e){return yn(t)?Mp(t,e):yn(e)?Mp(e,t):t===e}function Mp(t,e){return yn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function pT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Tr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Do;(function(t){t.pop="pop",t.push="push"})(Do||(Do={}));var co;(function(t){t.back="back",t.forward="forward",t.unknown=""})(co||(co={}));function mT(t){if(!t)if(zs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),uT(t)}const gT=/^[^#]+#/;function _T(t,e){return t.replace(gT,"#")+e}function yT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Kl=()=>({left:window.scrollX,top:window.scrollY});function vT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=yT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Lp(t,e){return(history.state?history.state.position-e:-1)+t}const xu=new Map;function ET(t,e){xu.set(t,e)}function wT(t){const e=xu.get(t);return xu.delete(t),e}let bT=()=>location.protocol+"//"+location.host;function Ay(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Vp(c,"")}return Vp(n,t)+r+s}function TT(t,e,n,r){let s=[],i=[],o=null;const l=({state:p})=>{const _=Ay(t,location),D=n.value,N=e.value;let L=0;if(p){if(n.value=_,e.value=p,o&&o===D){o=null;return}L=N?p.position-N.position:0}else r(_);s.forEach(O=>{O(n.value,D,{delta:L,type:Do.pop,direction:L?L>0?co.forward:co.back:co.unknown})})};function c(){o=n.value}function u(p){s.push(p);const _=()=>{const D=s.indexOf(p);D>-1&&s.splice(D,1)};return i.push(_),_}function h(){const{history:p}=window;p.state&&p.replaceState($e({},p.state,{scroll:Kl()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function Fp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Kl():null}}function IT(t){const{history:e,location:n}=window,r={value:Ay(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:bT()+t+c;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(_){console.error(_),n[h?"replace":"assign"](p)}}function o(c,u){const h=$e({},e.state,Fp(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,h,!0),r.value=c}function l(c,u){const h=$e({},s.value,e.state,{forward:c,scroll:Kl()});i(h.current,h,!0);const f=$e({},Fp(r.value,c,null),{position:h.position+1},u);i(c,f,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function AT(t){t=mT(t);const e=IT(t),n=TT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=$e({location:"",base:t,go:r,createHref:_T.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ST(t){return typeof t=="string"||t&&typeof t=="object"}function Sy(t){return typeof t=="string"||typeof t=="symbol"}const Py=Symbol("");var $p;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($p||($p={}));function ci(t,e){return $e(new Error,{type:t,[Py]:!0},e)}function zn(t,e){return t instanceof Error&&Py in t&&(e==null||!!(t.type&e))}const Up="[^/]+?",PT={sensitive:!1,strict:!1,start:!0,end:!0},CT=/[.+*?^${}()[\]/\\]/g;function RT(t,e){const n=$e({},PT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const p=u[f];let _=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(CT,"\\$&"),_+=40;else if(p.type===1){const{value:D,repeatable:N,optional:L,regexp:O}=p;i.push({name:D,repeatable:N,optional:L});const x=O||Up;if(x!==Up){_+=10;try{new RegExp(`(${x})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${D}" (${x}): `+F.message)}}let k=N?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(k=L&&u.length<2?`(?:/${k})`:"/"+k),L&&(k+="?"),s+=k,_+=20,L&&(_+=-8),N&&(_+=-20),x===".*"&&(_+=-50)}h.push(_)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const h=u.match(o),f={};if(!h)return null;for(let p=1;p<h.length;p++){const _=h[p]||"",D=i[p-1];f[D.name]=_&&D.repeatable?_.split("/"):_}return f}function c(u){let h="",f=!1;for(const p of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const _ of p)if(_.type===0)h+=_.value;else if(_.type===1){const{value:D,repeatable:N,optional:L}=_,O=D in u?u[D]:"";if(yn(O)&&!N)throw new Error(`Provided param "${D}" is an array but it is not repeatable (* or + modifiers)`);const x=yn(O)?O.join("/"):O;if(!x)if(L)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${D}"`);h+=x}}return h||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function DT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Cy(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=DT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Bp(r))return 1;if(Bp(s))return-1}return s.length-r.length}function Bp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const kT={type:0,value:""},xT=/[a-zA-Z0-9_]/;function OT(t){if(!t)return[[]];if(t==="/")return[[kT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",h="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:xT.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function NT(t,e,n){const r=RT(OT(t.path),n),s=$e(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function VT(t,e){const n=[],r=new Map;e=zp({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,p,_){const D=!_,N=Hp(f);N.aliasOf=_&&_.record;const L=zp(e,f),O=[N];if("alias"in f){const F=typeof f.alias=="string"?[f.alias]:f.alias;for(const $ of F)O.push(Hp($e({},N,{components:_?_.record.components:N.components,path:$,aliasOf:_?_.record:N})))}let x,k;for(const F of O){const{path:$}=F;if(p&&$[0]!=="/"){const G=p.record.path,b=G[G.length-1]==="/"?"":"/";F.path=p.record.path+($&&b+$)}if(x=NT(F,p,L),_?_.alias.push(x):(k=k||x,k!==x&&k.alias.push(x),D&&f.name&&!qp(x)&&o(f.name)),Ry(x)&&c(x),N.children){const G=N.children;for(let b=0;b<G.length;b++)i(G[b],x,_&&_.children[b])}_=_||x}return k?()=>{o(k)}:lo}function o(f){if(Sy(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function l(){return n}function c(f){const p=FT(f,n);n.splice(p,0,f),f.record.name&&!qp(f)&&r.set(f.record.name,f)}function u(f,p){let _,D={},N,L;if("name"in f&&f.name){if(_=r.get(f.name),!_)throw ci(1,{location:f});L=_.record.name,D=$e(jp(p.params,_.keys.filter(k=>!k.optional).concat(_.parent?_.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),f.params&&jp(f.params,_.keys.map(k=>k.name))),N=_.stringify(D)}else if(f.path!=null)N=f.path,_=n.find(k=>k.re.test(N)),_&&(D=_.parse(N),L=_.record.name);else{if(_=p.name?r.get(p.name):n.find(k=>k.re.test(p.path)),!_)throw ci(1,{location:f,currentLocation:p});L=_.record.name,D=$e({},p.params,f.params),N=_.stringify(D)}const O=[];let x=_;for(;x;)O.unshift(x.record),x=x.parent;return{name:L,path:N,params:D,matched:O,meta:LT(O)}}t.forEach(f=>i(f));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:l,getRecordMatcher:s}}function jp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Hp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:MT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function MT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function qp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function LT(t){return t.reduce((e,n)=>$e(e,n.meta),{})}function zp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function FT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Cy(t,e[i])<0?r=i:n=i+1}const s=$T(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function $T(t){let e=t;for(;e=e.parent;)if(Ry(e)&&Cy(t,e)===0)return e}function Ry({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function UT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ey," "),o=i.indexOf("="),l=Ro(o<0?i:i.slice(0,o)),c=o<0?null:Ro(i.slice(o+1));if(l in e){let u=e[l];yn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Wp(t){let e="";for(let n in t){const r=t[n];if(n=oT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(yn(r)?r.map(i=>i&&ku(i)):[r&&ku(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function BT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=yn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const jT=Symbol(""),Gp=Symbol(""),Yl=Symbol(""),Yh=Symbol(""),Ou=Symbol("");function Hi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function kr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=p=>{p===!1?c(ci(4,{from:n,to:e})):p instanceof Error?c(p):ST(p)?c(ci(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),l())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(p=>c(p))})}function Jc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(yy(c)){const h=(c.__vccOpts||c)[e];h&&i.push(kr(h,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const f=Y0(h)?h.default:h;o.mods[l]=h,o.components[l]=f;const _=(f.__vccOpts||f)[e];return _&&kr(_,n,r,o,l,s)()}))}}return i}function Kp(t){const e=Be(Yl),n=Be(Yh),r=He(()=>{const c=v(t.to);return e.resolve(c)}),s=He(()=>{const{matched:c}=r.value,{length:u}=c,h=c[u-1],f=n.matched;if(!h||!f.length)return-1;const p=f.findIndex(li.bind(null,h));if(p>-1)return p;const _=Yp(c[u-2]);return u>1&&Yp(h)===_&&f[f.length-1].path!==_?f.findIndex(li.bind(null,c[u-2])):p}),i=He(()=>s.value>-1&&GT(n.params,r.value.params)),o=He(()=>s.value>-1&&s.value===n.matched.length-1&&Iy(n.params,r.value.params));function l(c={}){if(WT(c)){const u=e[v(t.replace)?"replace":"push"](v(t.to)).catch(lo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:He(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function HT(t){return t.length===1?t[0]:t}const qT=Bh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Kp,setup(t,{slots:e}){const n=hr(Kp(t)),{options:r}=Be(Yl),s=He(()=>({[Qp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&HT(e.default(n));return t.custom?i:oi("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),zT=qT;function WT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function GT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!yn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Yp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qp=(t,e,n)=>t??e??n,KT=Bh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Be(Ou),s=He(()=>t.route||r.value),i=Be(Gp,0),o=He(()=>{let u=v(i);const{matched:h}=s.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),l=He(()=>s.value.matched[o.value]);Sn(Gp,He(()=>o.value+1)),Sn(jT,l),Sn(Ou,s);const c=Te();return ht(()=>[c.value,l.value,t.name],([u,h,f],[p,_,D])=>{h&&(h.instances[f]=u,_&&_!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=_.leaveGuards),h.updateGuards.size||(h.updateGuards=_.updateGuards))),u&&h&&(!_||!li(h,_)||!p)&&(h.enterCallbacks[f]||[]).forEach(N=>N(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,f=l.value,p=f&&f.components[h];if(!p)return Xp(n.default,{Component:p,route:u});const _=f.props[h],D=_?_===!0?u.params:typeof _=="function"?_(u):_:null,L=oi(p,$e({},D,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return Xp(n.default,{Component:L,route:u})||L}}});function Xp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Dy=KT;function YT(t){const e=VT(t.routes,t),n=t.parseQuery||UT,r=t.stringifyQuery||Wp,s=t.history,i=Hi(),o=Hi(),l=Hi(),c=Q1(Tr);let u=Tr;zs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Qc.bind(null,j=>""+j),f=Qc.bind(null,lT),p=Qc.bind(null,Ro);function _(j,oe){let se,ae;return Sy(j)?(se=e.getRecordMatcher(j),ae=oe):ae=j,e.addRoute(ae,se)}function D(j){const oe=e.getRecordMatcher(j);oe&&e.removeRoute(oe)}function N(){return e.getRoutes().map(j=>j.record)}function L(j){return!!e.getRecordMatcher(j)}function O(j,oe){if(oe=$e({},oe||c.value),typeof j=="string"){const V=Xc(n,j,oe.path),H=e.resolve({path:V.path},oe),W=s.createHref(V.fullPath);return $e(V,H,{params:p(H.params),hash:Ro(V.hash),redirectedFrom:void 0,href:W})}let se;if(j.path!=null)se=$e({},j,{path:Xc(n,j.path,oe.path).path});else{const V=$e({},j.params);for(const H in V)V[H]==null&&delete V[H];se=$e({},j,{params:f(V)}),oe.params=f(oe.params)}const ae=e.resolve(se,oe),Le=j.hash||"";ae.params=h(p(ae.params));const I=hT(r,$e({},j,{hash:iT(Le),path:ae.path})),S=s.createHref(I);return $e({fullPath:I,hash:Le,query:r===Wp?BT(j.query):j.query||{}},ae,{redirectedFrom:void 0,href:S})}function x(j){return typeof j=="string"?Xc(n,j,c.value.path):$e({},j)}function k(j,oe){if(u!==j)return ci(8,{from:oe,to:j})}function F(j){return b(j)}function $(j){return F($e(x(j),{replace:!0}))}function G(j){const oe=j.matched[j.matched.length-1];if(oe&&oe.redirect){const{redirect:se}=oe;let ae=typeof se=="function"?se(j):se;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=x(ae):{path:ae},ae.params={}),$e({query:j.query,hash:j.hash,params:ae.path!=null?{}:j.params},ae)}}function b(j,oe){const se=u=O(j),ae=c.value,Le=j.state,I=j.force,S=j.replace===!0,V=G(se);if(V)return b($e(x(V),{state:typeof V=="object"?$e({},Le,V.state):Le,force:I,replace:S}),oe||se);const H=se;H.redirectedFrom=oe;let W;return!I&&dT(r,ae,se)&&(W=ci(16,{to:H,from:ae}),tn(ae,ae,!0,!1)),(W?Promise.resolve(W):A(H,ae)).catch(q=>zn(q)?zn(q,2)?q:dn(q):Ce(q,H,ae)).then(q=>{if(q){if(zn(q,2))return b($e({replace:S},x(q.to),{state:typeof q.to=="object"?$e({},Le,q.to.state):Le,force:I}),oe||H)}else q=P(H,ae,!0,S,Le);return R(H,ae,q),q})}function w(j,oe){const se=k(j,oe);return se?Promise.reject(se):Promise.resolve()}function E(j){const oe=_r.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(j):j()}function A(j,oe){let se;const[ae,Le,I]=QT(j,oe);se=Jc(ae.reverse(),"beforeRouteLeave",j,oe);for(const V of ae)V.leaveGuards.forEach(H=>{se.push(kr(H,j,oe))});const S=w.bind(null,j,oe);return se.push(S),jt(se).then(()=>{se=[];for(const V of i.list())se.push(kr(V,j,oe));return se.push(S),jt(se)}).then(()=>{se=Jc(Le,"beforeRouteUpdate",j,oe);for(const V of Le)V.updateGuards.forEach(H=>{se.push(kr(H,j,oe))});return se.push(S),jt(se)}).then(()=>{se=[];for(const V of I)if(V.beforeEnter)if(yn(V.beforeEnter))for(const H of V.beforeEnter)se.push(kr(H,j,oe));else se.push(kr(V.beforeEnter,j,oe));return se.push(S),jt(se)}).then(()=>(j.matched.forEach(V=>V.enterCallbacks={}),se=Jc(I,"beforeRouteEnter",j,oe,E),se.push(S),jt(se))).then(()=>{se=[];for(const V of o.list())se.push(kr(V,j,oe));return se.push(S),jt(se)}).catch(V=>zn(V,8)?V:Promise.reject(V))}function R(j,oe,se){l.list().forEach(ae=>E(()=>ae(j,oe,se)))}function P(j,oe,se,ae,Le){const I=k(j,oe);if(I)return I;const S=oe===Tr,V=zs?history.state:{};se&&(ae||S?s.replace(j.fullPath,$e({scroll:S&&V&&V.scroll},Le)):s.push(j.fullPath,Le)),c.value=j,tn(j,oe,se,S),dn()}let T;function Me(){T||(T=s.listen((j,oe,se)=>{if(!wn.listening)return;const ae=O(j),Le=G(ae);if(Le){b($e(Le,{replace:!0,force:!0}),ae).catch(lo);return}u=ae;const I=c.value;zs&&ET(Lp(I.fullPath,se.delta),Kl()),A(ae,I).catch(S=>zn(S,12)?S:zn(S,2)?(b($e(x(S.to),{force:!0}),ae).then(V=>{zn(V,20)&&!se.delta&&se.type===Do.pop&&s.go(-1,!1)}).catch(lo),Promise.reject()):(se.delta&&s.go(-se.delta,!1),Ce(S,ae,I))).then(S=>{S=S||P(ae,I,!1),S&&(se.delta&&!zn(S,8)?s.go(-se.delta,!1):se.type===Do.pop&&zn(S,20)&&s.go(-1,!1)),R(ae,I,S)}).catch(lo)}))}let Xe=Hi(),Ne=Hi(),_e;function Ce(j,oe,se){dn(j);const ae=Ne.list();return ae.length?ae.forEach(Le=>Le(j,oe,se)):console.error(j),Promise.reject(j)}function Gt(){return _e&&c.value!==Tr?Promise.resolve():new Promise((j,oe)=>{Xe.add([j,oe])})}function dn(j){return _e||(_e=!j,Me(),Xe.list().forEach(([oe,se])=>j?se(j):oe()),Xe.reset()),j}function tn(j,oe,se,ae){const{scrollBehavior:Le}=t;if(!zs||!Le)return Promise.resolve();const I=!se&&wT(Lp(j.fullPath,0))||(ae||!se)&&history.state&&history.state.scroll||null;return Bl().then(()=>Le(j,oe,I)).then(S=>S&&vT(S)).catch(S=>Ce(S,j,oe))}const Je=j=>s.go(j);let Ze;const _r=new Set,wn={currentRoute:c,listening:!0,addRoute:_,removeRoute:D,clearRoutes:e.clearRoutes,hasRoute:L,getRoutes:N,resolve:O,options:t,push:F,replace:$,go:Je,back:()=>Je(-1),forward:()=>Je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ne.add,isReady:Gt,install(j){const oe=this;j.component("RouterLink",zT),j.component("RouterView",Dy),j.config.globalProperties.$router=oe,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>v(c)}),zs&&!Ze&&c.value===Tr&&(Ze=!0,F(s.location).catch(Le=>{}));const se={};for(const Le in Tr)Object.defineProperty(se,Le,{get:()=>c.value[Le],enumerable:!0});j.provide(Yl,oe),j.provide(Yh,C_(se)),j.provide(Ou,c);const ae=j.unmount;_r.add(j),j.unmount=function(){_r.delete(j),_r.size<1&&(u=Tr,T&&T(),T=null,c.value=Tr,Ze=!1,_e=!1),ae()}}};function jt(j){return j.reduce((oe,se)=>oe.then(()=>E(se)),Promise.resolve())}return wn}function QT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>li(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>li(u,c))||s.push(c))}return[n,r,s]}function Os(){return Be(Yl)}function XT(t){return Be(Yh)}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ky;const Ql=t=>ky=t,xy=Symbol();function Nu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var uo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(uo||(uo={}));function JT(){const t=d_(!0),e=t.run(()=>Te({}));let n=[],r=[];const s=$h({install(i){Ql(s),s._a=i,i.provide(xy,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Oy=()=>{};function Jp(t,e,n,r=Oy){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&f_()&&D1(s),s}function Hs(t,...e){t.slice().forEach(n=>{n(...e)})}const ZT=t=>t(),Zp=Symbol(),Zc=Symbol();function Vu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Nu(s)&&Nu(r)&&t.hasOwnProperty(n)&&!at(r)&&!Fr(r)?t[n]=Vu(s,r):t[n]=r}return t}const eI=Symbol();function tI(t){return!Nu(t)||!Object.prototype.hasOwnProperty.call(t,eI)}const{assign:Pr}=Object;function nI(t){return!!(at(t)&&t.effect)}function rI(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const h=Z1(n.state.value[t]);return Pr(h,i,Object.keys(o||{}).reduce((f,p)=>(f[p]=$h(He(()=>{Ql(n);const _=n._s.get(t);return o[p].call(_,_)})),f),{}))}return c=Ny(t,u,e,n,r,!0),c}function Ny(t,e,n={},r,s,i){let o;const l=Pr({actions:{}},n),c={deep:!0};let u,h,f=[],p=[],_;const D=r.state.value[t];!i&&!D&&(r.state.value[t]={}),Te({});let N;function L(w){let E;u=h=!1,typeof w=="function"?(w(r.state.value[t]),E={type:uo.patchFunction,storeId:t,events:_}):(Vu(r.state.value[t],w),E={type:uo.patchObject,payload:w,storeId:t,events:_});const A=N=Symbol();Bl().then(()=>{N===A&&(u=!0)}),h=!0,Hs(f,E,r.state.value[t])}const O=i?function(){const{state:E}=n,A=E?E():{};this.$patch(R=>{Pr(R,A)})}:Oy;function x(){o.stop(),f=[],p=[],r._s.delete(t)}const k=(w,E="")=>{if(Zp in w)return w[Zc]=E,w;const A=function(){Ql(r);const R=Array.from(arguments),P=[],T=[];function Me(_e){P.push(_e)}function Xe(_e){T.push(_e)}Hs(p,{args:R,name:A[Zc],store:$,after:Me,onError:Xe});let Ne;try{Ne=w.apply(this&&this.$id===t?this:$,R)}catch(_e){throw Hs(T,_e),_e}return Ne instanceof Promise?Ne.then(_e=>(Hs(P,_e),_e)).catch(_e=>(Hs(T,_e),Promise.reject(_e))):(Hs(P,Ne),Ne)};return A[Zp]=!0,A[Zc]=E,A},F={_p:r,$id:t,$onAction:Jp.bind(null,p),$patch:L,$reset:O,$subscribe(w,E={}){const A=Jp(f,w,E.detached,()=>R()),R=o.run(()=>ht(()=>r.state.value[t],P=>{(E.flush==="sync"?h:u)&&w({storeId:t,type:uo.direct,events:_},P)},Pr({},c,E)));return A},$dispose:x},$=hr(F);r._s.set(t,$);const b=(r._a&&r._a.runWithContext||ZT)(()=>r._e.run(()=>(o=d_()).run(()=>e({action:k}))));for(const w in b){const E=b[w];if(at(E)&&!nI(E)||Fr(E))i||(D&&tI(E)&&(at(E)?E.value=D[w]:Vu(E,D[w])),r.state.value[t][w]=E);else if(typeof E=="function"){const A=k(E,w);b[w]=A,l.actions[w]=E}}return Pr($,b),Pr(Ve($),b),Object.defineProperty($,"$state",{get:()=>r.state.value[t],set:w=>{L(E=>{Pr(E,w)})}}),r._p.forEach(w=>{Pr($,o.run(()=>w({store:$,app:r._a,pinia:r,options:l})))}),D&&i&&n.hydrate&&n.hydrate($.$state,D),u=!0,h=!0,$}/*! #__NO_SIDE_EFFECTS__ */function Vy(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const c=Nb();return o=o||(c?Be(xy,null):null),o&&Ql(o),o=ky,o._s.has(t)||(s?Ny(t,e,r,o):rI(t,r,o)),o._s.get(t)}return i.$id=t,i}const sI=()=>{};var em={};/**
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
 */const My=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},iI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ly={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,h=i>>2,f=(i&3)<<4|l>>4;let p=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(p=64)),r.push(n[h],n[f],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(My(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||f==null)throw new oI;const p=i<<2|l>>4;if(r.push(p),u!==64){const _=l<<4&240|u>>2;if(r.push(_),f!==64){const D=u<<6&192|f;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class oI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aI=function(t){const e=My(t);return Ly.encodeByteArray(e,!0)},ul=function(t){return aI(t).replace(/\./g,"")},Fy=function(t){try{return Ly.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cI=()=>lI().__FIREBASE_DEFAULTS__,uI=()=>{if(typeof process>"u"||typeof em>"u")return;const t=em.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fy(t[1]);return e&&JSON.parse(e)},Xl=()=>{try{return sI()||cI()||uI()||hI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$y=t=>{var e,n;return(n=(e=Xl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dI=t=>{const e=$y(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Uy=()=>{var t;return(t=Xl())===null||t===void 0?void 0:t.config},By=t=>{var e;return(e=Xl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class fI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function vi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jy(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function pI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ul(JSON.stringify(n)),ul(JSON.stringify(o)),""].join(".")}const ho={};function mI(){const t={prod:[],emulator:[]};for(const e of Object.keys(ho))ho[e]?t.emulator.push(e):t.prod.push(e);return t}function gI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let tm=!1;function Hy(t,e){if(typeof window>"u"||typeof document>"u"||!vi(window.location.host)||ho[t]===e||ho[t]||tm)return;ho[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=mI().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function l(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,_){p.setAttribute("width","24"),p.setAttribute("id",_),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{tm=!0,o()},p}function h(p,_){p.setAttribute("id",_),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function f(){const p=gI(r),_=n("text"),D=document.getElementById(_)||document.createElement("span"),N=n("learnmore"),L=document.getElementById(N)||document.createElement("a"),O=n("preprendIcon"),x=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const k=p.element;l(k),h(L,N);const F=u();c(x,O),k.append(x,D,L,F),document.body.appendChild(k)}i?(D.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _I(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function yI(){var t;const e=(t=Xl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function EI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bI(){const t=Nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function TI(){return!yI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function II(){try{return typeof indexedDB=="object"}catch{return!1}}function AI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const SI="FirebaseError";class fr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SI,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wo.prototype.create)}}class Wo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?PI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new fr(s,l,r)}}function PI(t,e){return t.replace(CI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const CI=/\{\$([^}]+)}/g;function RI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Is(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(nm(i)&&nm(o)){if(!Is(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function nm(t){return t!==null&&typeof t=="object"}/**
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
 */function Go(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ki(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function DI(t,e){const n=new kI(t,e);return n.subscribe.bind(n)}class kI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=eu),s.error===void 0&&(s.error=eu),s.complete===void 0&&(s.complete=eu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function eu(){}/**
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
 */function st(t){return t&&t._delegate?t._delegate:t}class As{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ms="[DEFAULT]";/**
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
 */class OI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VI(e))try{this.getOrInitializeService({instanceIdentifier:ms})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ms){return this.instances.has(e)}getOptions(e=ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ms){return this.component?this.component.multipleInstances?e:ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NI(t){return t===ms?void 0:t}function VI(t){return t.instantiationMode==="EAGER"}/**
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
 */class MI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new OI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const LI={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},FI=Re.INFO,$I={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},UI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=$I[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qh{constructor(e){this.name=e,this._logLevel=FI,this._logHandler=UI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const BI=(t,e)=>e.some(n=>t instanceof n);let rm,sm;function jI(){return rm||(rm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HI(){return sm||(sm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qy=new WeakMap,Mu=new WeakMap,zy=new WeakMap,tu=new WeakMap,Xh=new WeakMap;function qI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n($r(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qy.set(n,t)}).catch(()=>{}),Xh.set(e,t),e}function zI(t){if(Mu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Mu.set(t,e)}let Lu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WI(t){Lu=t(Lu)}function GI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nu(this),e,...n);return zy.set(r,e.sort?e.sort():[e]),$r(r)}:HI().includes(t)?function(...e){return t.apply(nu(this),e),$r(qy.get(this))}:function(...e){return $r(t.apply(nu(this),e))}}function KI(t){return typeof t=="function"?GI(t):(t instanceof IDBTransaction&&zI(t),BI(t,jI())?new Proxy(t,Lu):t)}function $r(t){if(t instanceof IDBRequest)return qI(t);if(tu.has(t))return tu.get(t);const e=KI(t);return e!==t&&(tu.set(t,e),Xh.set(e,t)),e}const nu=t=>Xh.get(t);function YI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=$r(o);return r&&o.addEventListener("upgradeneeded",c=>{r($r(o.result),c.oldVersion,c.newVersion,$r(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const QI=["get","getKey","getAll","getAllKeys","count"],XI=["put","add","delete","clear"],ru=new Map;function im(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ru.get(e))return ru.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=XI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||QI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return ru.set(e,i),i}WI(t=>({...t,get:(e,n,r)=>im(e,n)||t.get(e,n,r),has:(e,n)=>!!im(e,n)||t.has(e,n)}));/**
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
 */class JI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZI(t){const e=t.getComponent();return e?.type==="VERSION"}const Fu="@firebase/app",om="0.13.2";/**
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
 */const ir=new Qh("@firebase/app"),eA="@firebase/app-compat",tA="@firebase/analytics-compat",nA="@firebase/analytics",rA="@firebase/app-check-compat",sA="@firebase/app-check",iA="@firebase/auth",oA="@firebase/auth-compat",aA="@firebase/database",lA="@firebase/data-connect",cA="@firebase/database-compat",uA="@firebase/functions",hA="@firebase/functions-compat",dA="@firebase/installations",fA="@firebase/installations-compat",pA="@firebase/messaging",mA="@firebase/messaging-compat",gA="@firebase/performance",_A="@firebase/performance-compat",yA="@firebase/remote-config",vA="@firebase/remote-config-compat",EA="@firebase/storage",wA="@firebase/storage-compat",bA="@firebase/firestore",TA="@firebase/ai",IA="@firebase/firestore-compat",AA="firebase",SA="11.10.0";/**
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
 */const $u="[DEFAULT]",PA={[Fu]:"fire-core",[eA]:"fire-core-compat",[nA]:"fire-analytics",[tA]:"fire-analytics-compat",[sA]:"fire-app-check",[rA]:"fire-app-check-compat",[iA]:"fire-auth",[oA]:"fire-auth-compat",[aA]:"fire-rtdb",[lA]:"fire-data-connect",[cA]:"fire-rtdb-compat",[uA]:"fire-fn",[hA]:"fire-fn-compat",[dA]:"fire-iid",[fA]:"fire-iid-compat",[pA]:"fire-fcm",[mA]:"fire-fcm-compat",[gA]:"fire-perf",[_A]:"fire-perf-compat",[yA]:"fire-rc",[vA]:"fire-rc-compat",[EA]:"fire-gcs",[wA]:"fire-gcs-compat",[bA]:"fire-fst",[IA]:"fire-fst-compat",[TA]:"fire-vertex","fire-js":"fire-js",[AA]:"fire-js-all"};/**
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
 */const hl=new Map,CA=new Map,Uu=new Map;function am(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ui(t){const e=t.name;if(Uu.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;Uu.set(e,t);for(const n of hl.values())am(n,t);for(const n of CA.values())am(n,t);return!0}function Jh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const RA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ur=new Wo("app","Firebase",RA);/**
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
 */class DA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new As("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ur.create("app-deleted",{appName:this._name})}}/**
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
 */const Ei=SA;function Wy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$u,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Ur.create("bad-app-name",{appName:String(s)});if(n||(n=Uy()),!n)throw Ur.create("no-options");const i=hl.get(s);if(i){if(Is(n,i.options)&&Is(r,i.config))return i;throw Ur.create("duplicate-app",{appName:s})}const o=new MI(s);for(const c of Uu.values())o.addComponent(c);const l=new DA(n,r,o);return hl.set(s,l),l}function Gy(t=$u){const e=hl.get(t);if(!e&&t===$u&&Uy())return Wy();if(!e)throw Ur.create("no-app",{appName:t});return e}function Br(t,e,n){var r;let s=(r=PA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(l.join(" "));return}ui(new As(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const kA="firebase-heartbeat-database",xA=1,ko="firebase-heartbeat-store";let su=null;function Ky(){return su||(su=YI(kA,xA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ko)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ur.create("idb-open",{originalErrorMessage:t.message})})),su}async function OA(t){try{const n=(await Ky()).transaction(ko),r=await n.objectStore(ko).get(Yy(t));return await n.done,r}catch(e){if(e instanceof fr)ir.warn(e.message);else{const n=Ur.create("idb-get",{originalErrorMessage:e?.message});ir.warn(n.message)}}}async function lm(t,e){try{const r=(await Ky()).transaction(ko,"readwrite");await r.objectStore(ko).put(e,Yy(t)),await r.done}catch(n){if(n instanceof fr)ir.warn(n.message);else{const r=Ur.create("idb-set",{originalErrorMessage:n?.message});ir.warn(r.message)}}}function Yy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const NA=1024,VA=30;class MA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=cm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>VA){const o=$A(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cm(),{heartbeatsToSend:r,unsentEntries:s}=LA(this._heartbeatsCache.heartbeats),i=ul(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ir.warn(n),""}}}function cm(){return new Date().toISOString().substring(0,10)}function LA(t,e=NA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),um(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),um(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return II()?AI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await OA(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function um(t){return ul(JSON.stringify({version:2,heartbeats:t})).length}function $A(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function UA(t){ui(new As("platform-logger",e=>new JI(e),"PRIVATE")),ui(new As("heartbeat",e=>new MA(e),"PRIVATE")),Br(Fu,om,t),Br(Fu,om,"esm2017"),Br("fire-js","")}UA("");function Zh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Qy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BA=Qy,Xy=new Wo("auth","Firebase",Qy());/**
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
 */const dl=new Qh("@firebase/auth");function jA(t,...e){dl.logLevel<=Re.WARN&&dl.warn(`Auth (${Ei}): ${t}`,...e)}function Ha(t,...e){dl.logLevel<=Re.ERROR&&dl.error(`Auth (${Ei}): ${t}`,...e)}/**
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
 */function un(t,...e){throw td(t,...e)}function gn(t,...e){return td(t,...e)}function ed(t,e,n){const r=Object.assign(Object.assign({},BA()),{[e]:n});return new Wo("auth","Firebase",r).create(e,{appName:t.name})}function er(t){return ed(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function HA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&un(t,"argument-error"),ed(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function td(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xy.create(t,...e)}function pe(t,e,...n){if(!t)throw td(e,...n)}function Xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ha(e),new Error(e)}function or(t,e){t||Xn(e)}/**
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
 */function Bu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qA(){return hm()==="http:"||hm()==="https:"}function hm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function zA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qA()||EI()||"connection"in navigator)?navigator.onLine:!0}function WA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ko{constructor(e,n){this.shortDelay=e,this.longDelay=n,or(n>e,"Short delay should be less than long delay!"),this.isMobile=_I()||wI()}get(){return zA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function nd(t,e){or(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Jy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const GA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const KA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],YA=new Ko(3e4,6e4);function Un(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function En(t,e,n,r,s={}){return Zy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Go(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return vI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&vi(t.emulatorConfig.host)&&(u.credentials="include"),Jy.fetch()(await ev(t,t.config.apiHost,n,l),u)})}async function Zy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},GA),e);try{const s=new XA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ra(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ra(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ra(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ra(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ed(t,h,u);un(t,h)}}catch(s){if(s instanceof fr)throw s;un(t,"network-request-failed",{message:String(s)})}}async function Yo(t,e,n,r,s={}){const i=await En(t,e,n,r,s);return"mfaPendingCredential"in i&&un(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function ev(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?nd(t.config,s):`${t.config.apiScheme}://${s}`;return KA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function QA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gn(this.auth,"network-request-failed")),YA.get())})}}function Ra(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=gn(t,e,r);return s.customData._tokenResponse=n,s}function dm(t){return t!==void 0&&t.enterprise!==void 0}class JA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return QA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ZA(t,e){return En(t,"GET","/v2/recaptchaConfig",Un(t,e))}/**
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
 */async function eS(t,e){return En(t,"POST","/v1/accounts:delete",e)}async function fl(t,e){return En(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function fo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tS(t,e=!1){const n=st(t),r=await n.getIdToken(e),s=rd(r);pe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:fo(iu(s.auth_time)),issuedAtTime:fo(iu(s.iat)),expirationTime:fo(iu(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function iu(t){return Number(t)*1e3}function rd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ha("JWT malformed, contained fewer than 3 sections"),null;try{const s=Fy(n);return s?JSON.parse(s):(Ha("Failed to decode base64 JWT payload"),null)}catch(s){return Ha("Caught error parsing JWT payload as JSON",s?.toString()),null}}function fm(t){const e=rd(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function hi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof fr&&nS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class rS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ju{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fo(this.lastLoginAt),this.creationTime=fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await hi(t,fl(n,{idToken:r}));pe(s?.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?tv(i.providerUserInfo):[],l=iS(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!l?.length,h=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new ju(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function sS(t){const e=st(t);await pl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function tv(t){return t.map(e=>{var{providerId:n}=e,r=Zh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function oS(t,e){const n=await Zy(t,{},async()=>{const r=Go({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await ev(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&vi(t.emulatorConfig.host)&&(c.credentials="include"),Jy.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function aS(t,e){return En(t,"POST","/v2/accounts:revokeToken",Un(t,e))}/**
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
 */class ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=fm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await oS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ei;return r&&(pe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(pe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(pe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ei,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
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
 */function Ir(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Zh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ju(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await hi(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tS(this,e)}reload(){return sS(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await hi(this,eS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,D=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:k,emailVerified:F,isAnonymous:$,providerData:G,stsTokenManager:b}=n;pe(k&&b,e,"internal-error");const w=ei.fromJSON(this.name,b);pe(typeof k=="string",e,"internal-error"),Ir(f,e.name),Ir(p,e.name),pe(typeof F=="boolean",e,"internal-error"),pe(typeof $=="boolean",e,"internal-error"),Ir(_,e.name),Ir(D,e.name),Ir(N,e.name),Ir(L,e.name),Ir(O,e.name),Ir(x,e.name);const E=new pn({uid:k,auth:e,email:p,emailVerified:F,displayName:f,isAnonymous:$,photoURL:D,phoneNumber:_,tenantId:N,stsTokenManager:w,createdAt:O,lastLoginAt:x});return G&&Array.isArray(G)&&(E.providerData=G.map(A=>Object.assign({},A))),L&&(E._redirectEventId=L),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new ei;s.updateFromServerResponse(n);const i=new pn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await pl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];pe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?tv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,l=new ei;l.updateFromIdToken(r);const c=new pn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ju(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
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
 */const pm=new Map;function Jn(t){or(t instanceof Function,"Expected a class definition");let e=pm.get(t);return e?(or(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pm.set(t,e),e)}/**
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
 */class nv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nv.type="NONE";const mm=nv;/**
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
 */function qa(t,e,n){return`firebase:${t}:${e}:${n}`}class ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=qa(this.userKey,s.apiKey,i),this.fullPersistenceKey=qa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await fl(this.auth,{idToken:e}).catch(()=>{});return n?pn._fromGetAccountInfoResponse(this.auth,n,e):null}return pn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ti(Jn(mm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Jn(mm);const o=qa(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){let f;if(typeof h=="string"){const p=await fl(e,{idToken:h}).catch(()=>{});if(!p)break;f=await pn._fromGetAccountInfoResponse(e,p,h)}else f=pn._fromJSON(e,h);u!==i&&(l=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ti(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ti(i,e,r))}}/**
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
 */function gm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ov(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lv(e))return"Blackberry";if(cv(e))return"Webos";if(sv(e))return"Safari";if((e.includes("chrome/")||iv(e))&&!e.includes("edge/"))return"Chrome";if(av(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function rv(t=Nt()){return/firefox\//i.test(t)}function sv(t=Nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iv(t=Nt()){return/crios\//i.test(t)}function ov(t=Nt()){return/iemobile/i.test(t)}function av(t=Nt()){return/android/i.test(t)}function lv(t=Nt()){return/blackberry/i.test(t)}function cv(t=Nt()){return/webos/i.test(t)}function sd(t=Nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lS(t=Nt()){var e;return sd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cS(){return bI()&&document.documentMode===10}function uv(t=Nt()){return sd(t)||av(t)||cv(t)||lv(t)||/windows phone/i.test(t)||ov(t)}/**
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
 */function hv(t,e=[]){let n;switch(t){case"Browser":n=gm(Nt());break;case"Worker":n=`${gm(Nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ei}/${r}`}/**
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
 */class uS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function hS(t,e={}){return En(t,"GET","/v2/passwordPolicy",Un(t,e))}/**
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
 */const dS=6;class fS{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:dS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class pS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _m(this),this.idTokenSubscription=new _m(this),this.beforeStateQueue=new uS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ti.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await fl(this,{idToken:e}),r=await pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&c?.user&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pl(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(er(this));const n=e?st(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hS(this),n=new fS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Wo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await aS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jn(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&jA(`Error while retrieving App Check token: ${n.error}`),n?.token}}function pr(t){return st(t)}class _m{constructor(e){this.auth=e,this.observer=null,this.addObserver=DI(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Jl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mS(t){Jl=t}function dv(t){return Jl.loadJS(t)}function gS(){return Jl.recaptchaEnterpriseScript}function _S(){return Jl.gapiScript}function yS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class vS{constructor(){this.enterprise=new ES}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ES{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const wS="recaptcha-enterprise",fv="NO_RECAPTCHA";class bS{constructor(e){this.type=wS,this.auth=pr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{ZA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new JA(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;dm(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(fv)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&dm(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=gS();c.length!==0&&(c+=l),dv(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function ym(t,e,n,r=!1,s=!1){const i=new bS(t);let o;if(s)o=fv;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ml(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ym(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await ym(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function TS(t,e){const n=Jh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Is(i,e??{}))return s;un(s,"already-initialized")}return n.initialize({options:e})}function IS(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Jn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function AS(t,e,n){const r=pr(t);pe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=pv(e),{host:o,port:l}=SS(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){pe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),pe(Is(u,r.config.emulator)&&Is(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,vi(o)?(jy(`${i}//${o}${c}`),Hy("Auth",!0)):PS()}function pv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function SS(t){const e=pv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:vm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:vm(o)}}}function vm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class id{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xn("not implemented")}_getIdTokenResponse(e){return Xn("not implemented")}_linkToIdToken(e,n){return Xn("not implemented")}_getReauthenticationResolver(e){return Xn("not implemented")}}/**
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
 */async function CS(t,e){return En(t,"POST","/v1/accounts:resetPassword",Un(t,e))}async function RS(t,e){return En(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function DS(t,e){return Yo(t,"POST","/v1/accounts:signInWithPassword",Un(t,e))}async function kS(t,e){return En(t,"POST","/v1/accounts:sendOobCode",Un(t,e))}async function xS(t,e){return kS(t,e)}/**
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
 */async function OS(t,e){return Yo(t,"POST","/v1/accounts:signInWithEmailLink",Un(t,e))}async function NS(t,e){return Yo(t,"POST","/v1/accounts:signInWithEmailLink",Un(t,e))}/**
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
 */class xo extends id{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new xo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ml(e,n,"signInWithPassword",DS);case"emailLink":return OS(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ml(e,r,"signUpPassword",RS);case"emailLink":return NS(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ni(t,e){return Yo(t,"POST","/v1/accounts:signInWithIdp",Un(t,e))}/**
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
 */const VS="http://localhost";class Ss extends id{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Zh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ss(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ni(e,n)}buildRequest(){const e={requestUri:VS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Go(n)}return e}}/**
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
 */function MS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LS(t){const e=Gi(Ki(t)).link,n=e?Gi(Ki(e)).deep_link_id:null,r=Gi(Ki(t)).deep_link_id;return(r?Gi(Ki(r)).link:null)||r||n||e||t}class od{constructor(e){var n,r,s,i,o,l;const c=Gi(Ki(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,f=MS((s=c.mode)!==null&&s!==void 0?s:null);pe(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=LS(e);try{return new od(n)}catch{return null}}}/**
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
 */class wi{constructor(){this.providerId=wi.PROVIDER_ID}static credential(e,n){return xo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=od.parseLink(n);return pe(r,"argument-error"),xo._fromEmailAndCode(e,r.code,r.tenantId)}}wi.PROVIDER_ID="password";wi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ad{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qo extends ad{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Or extends Qo{constructor(){super("facebook.com")}static credential(e){return Ss._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.FACEBOOK_SIGN_IN_METHOD="facebook.com";Or.PROVIDER_ID="facebook.com";/**
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
 */class Yn extends Qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ss._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
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
 */class Nr extends Qo{constructor(){super("github.com")}static credential(e){return Ss._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";/**
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
 */class Vr extends Qo{constructor(){super("twitter.com")}static credential(e,n){return Ss._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vr.credential(n,r)}catch{return null}}}Vr.TWITTER_SIGN_IN_METHOD="twitter.com";Vr.PROVIDER_ID="twitter.com";/**
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
 */async function FS(t,e){return Yo(t,"POST","/v1/accounts:signUp",Un(t,e))}/**
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
 */class Ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await pn._fromIdTokenResponse(e,r,s),o=Em(r);return new Ps({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Em(r);return new Ps({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Em(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class gl extends fr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,gl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new gl(e,n,r,s)}}function mv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?gl._fromErrorAndOperation(t,i,e,r):i})}async function $S(t,e,n=!1){const r=await hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ps._forOperation(t,"link",r)}/**
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
 */async function US(t,e,n=!1){const{auth:r}=t;if(Qt(r.app))return Promise.reject(er(r));const s="reauthenticate";try{const i=await hi(t,mv(r,s,e,t),n);pe(i.idToken,r,"internal-error");const o=rd(i.idToken);pe(o,r,"internal-error");const{sub:l}=o;return pe(t.uid===l,r,"user-mismatch"),Ps._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&un(r,"user-mismatch"),i}}/**
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
 */async function gv(t,e,n=!1){if(Qt(t.app))return Promise.reject(er(t));const r="signIn",s=await mv(t,r,e),i=await Ps._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function BS(t,e){return gv(pr(t),e)}/**
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
 */async function ld(t){const e=pr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jS(t,e,n){const r=pr(t);await ml(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",xS)}async function HS(t,e,n){await CS(st(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ld(t),r})}async function qS(t,e,n){if(Qt(t.app))return Promise.reject(er(t));const r=pr(t),o=await ml(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",FS).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&ld(t),c}),l=await Ps._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function zS(t,e,n){return Qt(t.app)?Promise.reject(er(t)):BS(st(t),wi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ld(t),r})}/**
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
 */async function WS(t,e){return En(t,"POST","/v1/accounts:update",e)}/**
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
 */async function GS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=st(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await hi(r,WS(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function KS(t,e,n,r){return st(t).onIdTokenChanged(e,n,r)}function YS(t,e,n){return st(t).beforeAuthStateChanged(e,n)}function _v(t,e,n,r){return st(t).onAuthStateChanged(e,n,r)}function QS(t){return st(t).signOut()}const _l="__sak";/**
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
 */class yv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_l,"1"),this.storage.removeItem(_l),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const XS=1e3,JS=10;class vv extends yv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=uv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);cS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,JS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vv.type="LOCAL";const ZS=vv;/**
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
 */class Ev extends yv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ev.type="SESSION";const wv=Ev;/**
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
 */function eP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Zl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Zl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await eP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zl.receivers=[];/**
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
 */function cd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=cd("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(p.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function kn(){return window}function nP(t){kn().location.href=t}/**
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
 */function bv(){return typeof kn().WorkerGlobalScope<"u"&&typeof kn().importScripts=="function"}async function rP(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sP(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iP(){return bv()?self:null}/**
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
 */const Tv="firebaseLocalStorageDb",oP=1,yl="firebaseLocalStorage",Iv="fbase_key";class Xo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ec(t,e){return t.transaction([yl],e?"readwrite":"readonly").objectStore(yl)}function aP(){const t=indexedDB.deleteDatabase(Tv);return new Xo(t).toPromise()}function Hu(){const t=indexedDB.open(Tv,oP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yl,{keyPath:Iv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yl)?e(r):(r.close(),await aP(),e(await Hu()))})})}async function wm(t,e,n){const r=ec(t,!0).put({[Iv]:e,value:n});return new Xo(r).toPromise()}async function lP(t,e){const n=ec(t,!1).get(e),r=await new Xo(n).toPromise();return r===void 0?null:r.value}function bm(t,e){const n=ec(t,!0).delete(e);return new Xo(n).toPromise()}const cP=800,uP=3;class Av{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zl._getInstance(iP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rP(),!this.activeServiceWorker)return;this.sender=new tP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hu();return await wm(e,_l,"1"),await bm(e,_l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ec(s,!1).getAll();return new Xo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Av.type="LOCAL";const hP=Av;new Ko(3e4,6e4);/**
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
 */function Sv(t,e){return e?Jn(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ud extends id{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dP(t){return gv(t.auth,new ud(t),t.bypassAuthState)}function fP(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),US(n,new ud(t),t.bypassAuthState)}async function pP(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),$S(n,new ud(t),t.bypassAuthState)}/**
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
 */class Pv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dP;case"linkViaPopup":case"linkViaRedirect":return pP;case"reauthViaPopup":case"reauthViaRedirect":return fP;default:un(this.auth,"internal-error")}}resolve(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mP=new Ko(2e3,1e4);async function gP(t,e,n){if(Qt(t.app))return Promise.reject(gn(t,"operation-not-supported-in-this-environment"));const r=pr(t);HA(t,e,ad);const s=Sv(r,n);return new _s(r,"signInViaPopup",e,s).executeNotNull()}class _s extends Pv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,_s.currentPopupAction&&_s.currentPopupAction.cancel(),_s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){or(this.filter.length===1,"Popup operations only handle one event");const e=cd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_s.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mP.get())};e()}}_s.currentPopupAction=null;/**
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
 */const _P="pendingRedirect",za=new Map;class yP extends Pv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=za.get(this.auth._key());if(!e){try{const r=await vP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}za.set(this.auth._key(),e)}return this.bypassAuthState||za.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vP(t,e){const n=bP(e),r=wP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function EP(t,e){za.set(t._key(),e)}function wP(t){return Jn(t._redirectPersistence)}function bP(t){return qa(_P,t.config.apiKey,t.name)}async function TP(t,e,n=!1){if(Qt(t.app))return Promise.reject(er(t));const r=pr(t),s=Sv(r,e),o=await new yP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const IP=10*60*1e3;class AP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Cv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tm(e))}saveEventToCache(e){this.cachedEventUids.add(Tm(e)),this.lastProcessedEventTime=Date.now()}}function Tm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Cv({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function SP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cv(t);default:return!1}}/**
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
 */async function PP(t,e={}){return En(t,"GET","/v1/projects",e)}/**
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
 */const CP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RP=/^https?/;async function DP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PP(t);for(const n of e)try{if(kP(n))return}catch{}un(t,"unauthorized-domain")}function kP(t){const e=Bu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!RP.test(n))return!1;if(CP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const xP=new Ko(3e4,6e4);function Im(){const t=kn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OP(t){return new Promise((e,n)=>{var r,s,i;function o(){Im(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Im(),n(gn(t,"network-request-failed"))},timeout:xP.get()})}if(!((s=(r=kn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=kn().gapi)===null||i===void 0)&&i.load)o();else{const l=yS("iframefcb");return kn()[l]=()=>{gapi.load?o():n(gn(t,"network-request-failed"))},dv(`${_S()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Wa=null,e})}let Wa=null;function NP(t){return Wa=Wa||OP(t),Wa}/**
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
 */const VP=new Ko(5e3,15e3),MP="__/auth/iframe",LP="emulator/auth/iframe",FP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$P=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UP(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nd(e,LP):`https://${t.config.authDomain}/${MP}`,r={apiKey:e.apiKey,appName:t.name,v:Ei},s=$P.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Go(r).slice(1)}`}async function BP(t){const e=await NP(t),n=kn().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:UP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=gn(t,"network-request-failed"),l=kn().setTimeout(()=>{i(o)},VP.get());function c(){kn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const jP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HP=500,qP=600,zP="_blank",WP="http://localhost";class Am{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GP(t,e,n,r=HP,s=qP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},jP),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Nt().toLowerCase();n&&(l=iv(u)?zP:n),rv(u)&&(e=e||WP,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[_,D])=>`${p}${_}=${D},`,"");if(lS(u)&&l!=="_self")return KP(e||"",l),new Am(null);const f=window.open(e||"",l,h);pe(f,t,"popup-blocked");try{f.focus()}catch{}return new Am(f)}function KP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const YP="__/auth/handler",QP="emulator/auth/handler",XP=encodeURIComponent("fac");async function Sm(t,e,n,r,s,i){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ei,eventId:s};if(e instanceof ad){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",RI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Qo){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await t._getAppCheckToken(),u=c?`#${XP}=${encodeURIComponent(c)}`:"";return`${JP(t)}?${Go(l).slice(1)}${u}`}function JP({config:t}){return t.emulator?nd(t,QP):`https://${t.authDomain}/${YP}`}/**
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
 */const ou="webStorageSupport";class ZP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wv,this._completeRedirectFn=TP,this._overrideRedirectResult=EP}async _openPopup(e,n,r,s){var i;or((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Sm(e,n,r,Bu(),s);return GP(e,o,cd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Sm(e,n,r,Bu(),s);return nP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(or(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BP(e),r=new AP(e);return n.register("authEvent",s=>(pe(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ou,{type:ou},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[ou];o!==void 0&&n(!!o),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uv()||sv()||sd()}}const eC=ZP;var Pm="@firebase/auth",Cm="1.10.8";/**
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
 */class tC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rC(t){ui(new As("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hv(t)},u=new pS(r,s,i,c);return IS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ui(new As("auth-internal",e=>{const n=pr(e.getProvider("auth").getImmediate());return(r=>new tC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Br(Pm,Cm,nC(t)),Br(Pm,Cm,"esm2017")}/**
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
 */const sC=5*60,iC=By("authIdTokenMaxAge")||sC;let Rm=null;const oC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iC)return;const s=n?.token;Rm!==s&&(Rm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function aC(t=Gy()){const e=Jh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TS(t,{popupRedirectResolver:eC,persistence:[hP,ZS,wv]}),r=By("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=oC(i.toString());YS(n,o,()=>o(n.currentUser)),KS(n,l=>o(l))}}const s=$y("auth");return s&&AS(n,`http://${s}`),n}function lC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=gn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",lC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rC("Browser");var Dm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jr,Rv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,w){function E(){}E.prototype=w.prototype,b.D=w.prototype,b.prototype=new E,b.prototype.constructor=b,b.C=function(A,R,P){for(var T=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)T[Me-2]=arguments[Me];return w.prototype[R].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,w,E){E||(E=0);var A=Array(16);if(typeof w=="string")for(var R=0;16>R;++R)A[R]=w.charCodeAt(E++)|w.charCodeAt(E++)<<8|w.charCodeAt(E++)<<16|w.charCodeAt(E++)<<24;else for(R=0;16>R;++R)A[R]=w[E++]|w[E++]<<8|w[E++]<<16|w[E++]<<24;w=b.g[0],E=b.g[1],R=b.g[2];var P=b.g[3],T=w+(P^E&(R^P))+A[0]+3614090360&4294967295;w=E+(T<<7&4294967295|T>>>25),T=P+(R^w&(E^R))+A[1]+3905402710&4294967295,P=w+(T<<12&4294967295|T>>>20),T=R+(E^P&(w^E))+A[2]+606105819&4294967295,R=P+(T<<17&4294967295|T>>>15),T=E+(w^R&(P^w))+A[3]+3250441966&4294967295,E=R+(T<<22&4294967295|T>>>10),T=w+(P^E&(R^P))+A[4]+4118548399&4294967295,w=E+(T<<7&4294967295|T>>>25),T=P+(R^w&(E^R))+A[5]+1200080426&4294967295,P=w+(T<<12&4294967295|T>>>20),T=R+(E^P&(w^E))+A[6]+2821735955&4294967295,R=P+(T<<17&4294967295|T>>>15),T=E+(w^R&(P^w))+A[7]+4249261313&4294967295,E=R+(T<<22&4294967295|T>>>10),T=w+(P^E&(R^P))+A[8]+1770035416&4294967295,w=E+(T<<7&4294967295|T>>>25),T=P+(R^w&(E^R))+A[9]+2336552879&4294967295,P=w+(T<<12&4294967295|T>>>20),T=R+(E^P&(w^E))+A[10]+4294925233&4294967295,R=P+(T<<17&4294967295|T>>>15),T=E+(w^R&(P^w))+A[11]+2304563134&4294967295,E=R+(T<<22&4294967295|T>>>10),T=w+(P^E&(R^P))+A[12]+1804603682&4294967295,w=E+(T<<7&4294967295|T>>>25),T=P+(R^w&(E^R))+A[13]+4254626195&4294967295,P=w+(T<<12&4294967295|T>>>20),T=R+(E^P&(w^E))+A[14]+2792965006&4294967295,R=P+(T<<17&4294967295|T>>>15),T=E+(w^R&(P^w))+A[15]+1236535329&4294967295,E=R+(T<<22&4294967295|T>>>10),T=w+(R^P&(E^R))+A[1]+4129170786&4294967295,w=E+(T<<5&4294967295|T>>>27),T=P+(E^R&(w^E))+A[6]+3225465664&4294967295,P=w+(T<<9&4294967295|T>>>23),T=R+(w^E&(P^w))+A[11]+643717713&4294967295,R=P+(T<<14&4294967295|T>>>18),T=E+(P^w&(R^P))+A[0]+3921069994&4294967295,E=R+(T<<20&4294967295|T>>>12),T=w+(R^P&(E^R))+A[5]+3593408605&4294967295,w=E+(T<<5&4294967295|T>>>27),T=P+(E^R&(w^E))+A[10]+38016083&4294967295,P=w+(T<<9&4294967295|T>>>23),T=R+(w^E&(P^w))+A[15]+3634488961&4294967295,R=P+(T<<14&4294967295|T>>>18),T=E+(P^w&(R^P))+A[4]+3889429448&4294967295,E=R+(T<<20&4294967295|T>>>12),T=w+(R^P&(E^R))+A[9]+568446438&4294967295,w=E+(T<<5&4294967295|T>>>27),T=P+(E^R&(w^E))+A[14]+3275163606&4294967295,P=w+(T<<9&4294967295|T>>>23),T=R+(w^E&(P^w))+A[3]+4107603335&4294967295,R=P+(T<<14&4294967295|T>>>18),T=E+(P^w&(R^P))+A[8]+1163531501&4294967295,E=R+(T<<20&4294967295|T>>>12),T=w+(R^P&(E^R))+A[13]+2850285829&4294967295,w=E+(T<<5&4294967295|T>>>27),T=P+(E^R&(w^E))+A[2]+4243563512&4294967295,P=w+(T<<9&4294967295|T>>>23),T=R+(w^E&(P^w))+A[7]+1735328473&4294967295,R=P+(T<<14&4294967295|T>>>18),T=E+(P^w&(R^P))+A[12]+2368359562&4294967295,E=R+(T<<20&4294967295|T>>>12),T=w+(E^R^P)+A[5]+4294588738&4294967295,w=E+(T<<4&4294967295|T>>>28),T=P+(w^E^R)+A[8]+2272392833&4294967295,P=w+(T<<11&4294967295|T>>>21),T=R+(P^w^E)+A[11]+1839030562&4294967295,R=P+(T<<16&4294967295|T>>>16),T=E+(R^P^w)+A[14]+4259657740&4294967295,E=R+(T<<23&4294967295|T>>>9),T=w+(E^R^P)+A[1]+2763975236&4294967295,w=E+(T<<4&4294967295|T>>>28),T=P+(w^E^R)+A[4]+1272893353&4294967295,P=w+(T<<11&4294967295|T>>>21),T=R+(P^w^E)+A[7]+4139469664&4294967295,R=P+(T<<16&4294967295|T>>>16),T=E+(R^P^w)+A[10]+3200236656&4294967295,E=R+(T<<23&4294967295|T>>>9),T=w+(E^R^P)+A[13]+681279174&4294967295,w=E+(T<<4&4294967295|T>>>28),T=P+(w^E^R)+A[0]+3936430074&4294967295,P=w+(T<<11&4294967295|T>>>21),T=R+(P^w^E)+A[3]+3572445317&4294967295,R=P+(T<<16&4294967295|T>>>16),T=E+(R^P^w)+A[6]+76029189&4294967295,E=R+(T<<23&4294967295|T>>>9),T=w+(E^R^P)+A[9]+3654602809&4294967295,w=E+(T<<4&4294967295|T>>>28),T=P+(w^E^R)+A[12]+3873151461&4294967295,P=w+(T<<11&4294967295|T>>>21),T=R+(P^w^E)+A[15]+530742520&4294967295,R=P+(T<<16&4294967295|T>>>16),T=E+(R^P^w)+A[2]+3299628645&4294967295,E=R+(T<<23&4294967295|T>>>9),T=w+(R^(E|~P))+A[0]+4096336452&4294967295,w=E+(T<<6&4294967295|T>>>26),T=P+(E^(w|~R))+A[7]+1126891415&4294967295,P=w+(T<<10&4294967295|T>>>22),T=R+(w^(P|~E))+A[14]+2878612391&4294967295,R=P+(T<<15&4294967295|T>>>17),T=E+(P^(R|~w))+A[5]+4237533241&4294967295,E=R+(T<<21&4294967295|T>>>11),T=w+(R^(E|~P))+A[12]+1700485571&4294967295,w=E+(T<<6&4294967295|T>>>26),T=P+(E^(w|~R))+A[3]+2399980690&4294967295,P=w+(T<<10&4294967295|T>>>22),T=R+(w^(P|~E))+A[10]+4293915773&4294967295,R=P+(T<<15&4294967295|T>>>17),T=E+(P^(R|~w))+A[1]+2240044497&4294967295,E=R+(T<<21&4294967295|T>>>11),T=w+(R^(E|~P))+A[8]+1873313359&4294967295,w=E+(T<<6&4294967295|T>>>26),T=P+(E^(w|~R))+A[15]+4264355552&4294967295,P=w+(T<<10&4294967295|T>>>22),T=R+(w^(P|~E))+A[6]+2734768916&4294967295,R=P+(T<<15&4294967295|T>>>17),T=E+(P^(R|~w))+A[13]+1309151649&4294967295,E=R+(T<<21&4294967295|T>>>11),T=w+(R^(E|~P))+A[4]+4149444226&4294967295,w=E+(T<<6&4294967295|T>>>26),T=P+(E^(w|~R))+A[11]+3174756917&4294967295,P=w+(T<<10&4294967295|T>>>22),T=R+(w^(P|~E))+A[2]+718787259&4294967295,R=P+(T<<15&4294967295|T>>>17),T=E+(P^(R|~w))+A[9]+3951481745&4294967295,b.g[0]=b.g[0]+w&4294967295,b.g[1]=b.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+R&4294967295,b.g[3]=b.g[3]+P&4294967295}r.prototype.u=function(b,w){w===void 0&&(w=b.length);for(var E=w-this.blockSize,A=this.B,R=this.h,P=0;P<w;){if(R==0)for(;P<=E;)s(this,b,P),P+=this.blockSize;if(typeof b=="string"){for(;P<w;)if(A[R++]=b.charCodeAt(P++),R==this.blockSize){s(this,A),R=0;break}}else for(;P<w;)if(A[R++]=b[P++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=w},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var w=1;w<b.length-8;++w)b[w]=0;var E=8*this.o;for(w=b.length-8;w<b.length;++w)b[w]=E&255,E/=256;for(this.u(b),b=Array(16),w=E=0;4>w;++w)for(var A=0;32>A;A+=8)b[E++]=this.g[w]>>>A&255;return b};function i(b,w){var E=l;return Object.prototype.hasOwnProperty.call(E,b)?E[b]:E[b]=w(b)}function o(b,w){this.h=w;for(var E=[],A=!0,R=b.length-1;0<=R;R--){var P=b[R]|0;A&&P==w||(E[R]=P,A=!1)}this.g=E}var l={};function c(b){return-128<=b&&128>b?i(b,function(w){return new o([w|0],0>w?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return f;if(0>b)return L(u(-b));for(var w=[],E=1,A=0;b>=E;A++)w[A]=b/E|0,E*=4294967296;return new o(w,0)}function h(b,w){if(b.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(b.charAt(0)=="-")return L(h(b.substring(1),w));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(w,8)),A=f,R=0;R<b.length;R+=8){var P=Math.min(8,b.length-R),T=parseInt(b.substring(R,R+P),w);8>P?(P=u(Math.pow(w,P)),A=A.j(P).add(u(T))):(A=A.j(E),A=A.add(u(T)))}return A}var f=c(0),p=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(N(this))return-L(this).m();for(var b=0,w=1,E=0;E<this.g.length;E++){var A=this.i(E);b+=(0<=A?A:4294967296+A)*w,w*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(D(this))return"0";if(N(this))return"-"+L(this).toString(b);for(var w=u(Math.pow(b,6)),E=this,A="";;){var R=F(E,w).g;E=O(E,R.j(w));var P=((0<E.g.length?E.g[0]:E.h)>>>0).toString(b);if(E=R,D(E))return P+A;for(;6>P.length;)P="0"+P;A=P+A}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function D(b){if(b.h!=0)return!1;for(var w=0;w<b.g.length;w++)if(b.g[w]!=0)return!1;return!0}function N(b){return b.h==-1}t.l=function(b){return b=O(this,b),N(b)?-1:D(b)?0:1};function L(b){for(var w=b.g.length,E=[],A=0;A<w;A++)E[A]=~b.g[A];return new o(E,~b.h).add(p)}t.abs=function(){return N(this)?L(this):this},t.add=function(b){for(var w=Math.max(this.g.length,b.g.length),E=[],A=0,R=0;R<=w;R++){var P=A+(this.i(R)&65535)+(b.i(R)&65535),T=(P>>>16)+(this.i(R)>>>16)+(b.i(R)>>>16);A=T>>>16,P&=65535,T&=65535,E[R]=T<<16|P}return new o(E,E[E.length-1]&-2147483648?-1:0)};function O(b,w){return b.add(L(w))}t.j=function(b){if(D(this)||D(b))return f;if(N(this))return N(b)?L(this).j(L(b)):L(L(this).j(b));if(N(b))return L(this.j(L(b)));if(0>this.l(_)&&0>b.l(_))return u(this.m()*b.m());for(var w=this.g.length+b.g.length,E=[],A=0;A<2*w;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<b.g.length;R++){var P=this.i(A)>>>16,T=this.i(A)&65535,Me=b.i(R)>>>16,Xe=b.i(R)&65535;E[2*A+2*R]+=T*Xe,x(E,2*A+2*R),E[2*A+2*R+1]+=P*Xe,x(E,2*A+2*R+1),E[2*A+2*R+1]+=T*Me,x(E,2*A+2*R+1),E[2*A+2*R+2]+=P*Me,x(E,2*A+2*R+2)}for(A=0;A<w;A++)E[A]=E[2*A+1]<<16|E[2*A];for(A=w;A<2*w;A++)E[A]=0;return new o(E,0)};function x(b,w){for(;(b[w]&65535)!=b[w];)b[w+1]+=b[w]>>>16,b[w]&=65535,w++}function k(b,w){this.g=b,this.h=w}function F(b,w){if(D(w))throw Error("division by zero");if(D(b))return new k(f,f);if(N(b))return w=F(L(b),w),new k(L(w.g),L(w.h));if(N(w))return w=F(b,L(w)),new k(L(w.g),w.h);if(30<b.g.length){if(N(b)||N(w))throw Error("slowDivide_ only works with positive integers.");for(var E=p,A=w;0>=A.l(b);)E=$(E),A=$(A);var R=G(E,1),P=G(A,1);for(A=G(A,2),E=G(E,2);!D(A);){var T=P.add(A);0>=T.l(b)&&(R=R.add(E),P=T),A=G(A,1),E=G(E,1)}return w=O(b,R.j(w)),new k(R,w)}for(R=f;0<=b.l(w);){for(E=Math.max(1,Math.floor(b.m()/w.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),P=u(E),T=P.j(w);N(T)||0<T.l(b);)E-=A,P=u(E),T=P.j(w);D(P)&&(P=p),R=R.add(P),b=O(b,T)}return new k(R,b)}t.A=function(b){return F(this,b).h},t.and=function(b){for(var w=Math.max(this.g.length,b.g.length),E=[],A=0;A<w;A++)E[A]=this.i(A)&b.i(A);return new o(E,this.h&b.h)},t.or=function(b){for(var w=Math.max(this.g.length,b.g.length),E=[],A=0;A<w;A++)E[A]=this.i(A)|b.i(A);return new o(E,this.h|b.h)},t.xor=function(b){for(var w=Math.max(this.g.length,b.g.length),E=[],A=0;A<w;A++)E[A]=this.i(A)^b.i(A);return new o(E,this.h^b.h)};function $(b){for(var w=b.g.length+1,E=[],A=0;A<w;A++)E[A]=b.i(A)<<1|b.i(A-1)>>>31;return new o(E,b.h)}function G(b,w){var E=w>>5;w%=32;for(var A=b.g.length-E,R=[],P=0;P<A;P++)R[P]=0<w?b.i(P+E)>>>w|b.i(P+E+1)<<32-w:b.i(P+E);return new o(R,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Rv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,jr=o}).apply(typeof Dm<"u"?Dm:typeof self<"u"?self:typeof window<"u"?window:{});var Da=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dv,Yi,kv,Ga,qu,xv,Ov,Nv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,m){return a==Array.prototype||a==Object.prototype||(a[d]=m.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Da=="object"&&Da];for(var d=0;d<a.length;++d){var m=a[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var m=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var M=a[y];if(!(M in m))break e;m=m[M]}a=a[a.length-1],y=m[a],d=d(y),d!=y&&d!=null&&e(m,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var m=0,y=!1,M={next:function(){if(!y&&m<a.length){var U=m++;return{value:d(U,a[U]),done:!1}}return y=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,m){return a.call.apply(a.bind,arguments)}function f(a,d,m){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,y),a.apply(d,M)}}return function(){return a.apply(d,arguments)}}function p(a,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function _(a,d){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function D(a,d){function m(){}m.prototype=d.prototype,a.aa=d.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(y,M,U){for(var ee=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)ee[qe-2]=arguments[qe];return d.prototype[M].apply(y,ee)}}function N(a){const d=a.length;if(0<d){const m=Array(d);for(let y=0;y<d;y++)m[y]=a[y];return m}return[]}function L(a,d){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(c(y)){const M=a.length||0,U=y.length||0;a.length=M+U;for(let ee=0;ee<U;ee++)a[M+ee]=y[ee]}else a.push(y)}}class O{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function x(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function F(a){return F[" "](a),a}F[" "]=function(){};var $=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function G(a,d,m){for(const y in a)d.call(m,a[y],y,a)}function b(a,d){for(const m in a)d.call(void 0,a[m],m,a)}function w(a){const d={};for(const m in a)d[m]=a[m];return d}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,d){let m,y;for(let M=1;M<arguments.length;M++){y=arguments[M];for(m in y)a[m]=y[m];for(let U=0;U<E.length;U++)m=E[U],Object.prototype.hasOwnProperty.call(y,m)&&(a[m]=y[m])}}function R(a){var d=1;a=a.split(":");const m=[];for(;0<d&&a.length;)m.push(a.shift()),d--;return a.length&&m.push(a.join(":")),m}function P(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Gt;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Me{constructor(){this.h=this.g=null}add(d,m){const y=Xe.get();y.set(d,m),this.h?this.h.next=y:this.g=y,this.h=y}}var Xe=new O(()=>new Ne,a=>a.reset());class Ne{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let _e,Ce=!1,Gt=new Me,dn=()=>{const a=l.Promise.resolve(void 0);_e=()=>{a.then(tn)}};var tn=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(m){P(m)}var d=Xe;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}Ce=!1};function Je(){this.s=this.s,this.C=this.C}Je.prototype.s=!1,Je.prototype.ma=function(){this.s||(this.s=!0,this.N())},Je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ze(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};var _r=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};l.addEventListener("test",m,d),l.removeEventListener("test",m,d)}catch{}return a}();function wn(a,d){if(Ze.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if($){e:{try{F(d.nodeName);var M=!0;break e}catch{}M=!1}M||(d=null)}}else m=="mouseover"?d=a.fromElement:m=="mouseout"&&(d=a.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:jt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&wn.aa.h.call(this)}}D(wn,Ze);var jt={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),oe=0;function se(a,d,m,y,M){this.listener=a,this.proxy=null,this.src=d,this.type=m,this.capture=!!y,this.ha=M,this.key=++oe,this.da=this.fa=!1}function ae(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Le(a){this.src=a,this.g={},this.h=0}Le.prototype.add=function(a,d,m,y,M){var U=a.toString();a=this.g[U],a||(a=this.g[U]=[],this.h++);var ee=S(a,d,y,M);return-1<ee?(d=a[ee],m||(d.fa=!1)):(d=new se(d,this.src,U,!!y,M),d.fa=m,a.push(d)),d};function I(a,d){var m=d.type;if(m in a.g){var y=a.g[m],M=Array.prototype.indexOf.call(y,d,void 0),U;(U=0<=M)&&Array.prototype.splice.call(y,M,1),U&&(ae(d),a.g[m].length==0&&(delete a.g[m],a.h--))}}function S(a,d,m,y){for(var M=0;M<a.length;++M){var U=a[M];if(!U.da&&U.listener==d&&U.capture==!!m&&U.ha==y)return M}return-1}var V="closure_lm_"+(1e6*Math.random()|0),H={};function W(a,d,m,y,M){if(Array.isArray(d)){for(var U=0;U<d.length;U++)W(a,d[U],m,y,M);return null}return m=ge(m),a&&a[j]?a.K(d,m,u(y)?!!y.capture:!1,M):q(a,d,m,!1,y,M)}function q(a,d,m,y,M,U){if(!d)throw Error("Invalid event type");var ee=u(M)?!!M.capture:!!M,qe=te(a);if(qe||(a[V]=qe=new Le(a)),m=qe.add(d,m,y,ee,U),m.proxy)return m;if(y=ne(),m.proxy=y,y.src=a,y.listener=m,a.addEventListener)_r||(M=ee),M===void 0&&(M=!1),a.addEventListener(d.toString(),y,M);else if(a.attachEvent)a.attachEvent(Y(d.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function ne(){function a(m){return d.call(a.src,a.listener,m)}const d=ue;return a}function Z(a,d,m,y,M){if(Array.isArray(d))for(var U=0;U<d.length;U++)Z(a,d[U],m,y,M);else y=u(y)?!!y.capture:!!y,m=ge(m),a&&a[j]?(a=a.i,d=String(d).toString(),d in a.g&&(U=a.g[d],m=S(U,m,y,M),-1<m&&(ae(U[m]),Array.prototype.splice.call(U,m,1),U.length==0&&(delete a.g[d],a.h--)))):a&&(a=te(a))&&(d=a.g[d.toString()],a=-1,d&&(a=S(d,m,y,M)),(m=-1<a?d[a]:null)&&J(m))}function J(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[j])I(d.i,a);else{var m=a.type,y=a.proxy;d.removeEventListener?d.removeEventListener(m,y,a.capture):d.detachEvent?d.detachEvent(Y(m),y):d.addListener&&d.removeListener&&d.removeListener(y),(m=te(d))?(I(m,a),m.h==0&&(m.src=null,d[V]=null)):ae(a)}}}function Y(a){return a in H?H[a]:H[a]="on"+a}function ue(a,d){if(a.da)a=!0;else{d=new wn(d,this);var m=a.listener,y=a.ha||a.src;a.fa&&J(a),a=m.call(y,d)}return a}function te(a){return a=a[V],a instanceof Le?a:null}var le="__closure_events_fn_"+(1e9*Math.random()>>>0);function ge(a){return typeof a=="function"?a:(a[le]||(a[le]=function(d){return a.handleEvent(d)}),a[le])}function fe(){Je.call(this),this.i=new Le(this),this.M=this,this.F=null}D(fe,Je),fe.prototype[j]=!0,fe.prototype.removeEventListener=function(a,d,m,y){Z(this,a,d,m,y)};function be(a,d){var m,y=a.F;if(y)for(m=[];y;y=y.F)m.push(y);if(a=a.M,y=d.type||d,typeof d=="string")d=new Ze(d,a);else if(d instanceof Ze)d.target=d.target||a;else{var M=d;d=new Ze(y,a),A(d,M)}if(M=!0,m)for(var U=m.length-1;0<=U;U--){var ee=d.g=m[U];M=ke(ee,y,!0,d)&&M}if(ee=d.g=a,M=ke(ee,y,!0,d)&&M,M=ke(ee,y,!1,d)&&M,m)for(U=0;U<m.length;U++)ee=d.g=m[U],M=ke(ee,y,!1,d)&&M}fe.prototype.N=function(){if(fe.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var m=a.g[d],y=0;y<m.length;y++)ae(m[y]);delete a.g[d],a.h--}}this.F=null},fe.prototype.K=function(a,d,m,y){return this.i.add(String(a),d,!1,m,y)},fe.prototype.L=function(a,d,m,y){return this.i.add(String(a),d,!0,m,y)};function ke(a,d,m,y){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var M=!0,U=0;U<d.length;++U){var ee=d[U];if(ee&&!ee.da&&ee.capture==m){var qe=ee.listener,vt=ee.ha||ee.src;ee.fa&&I(a.i,ee),M=qe.call(vt,y)!==!1&&M}}return M&&!y.defaultPrevented}function gt(a,d,m){if(typeof a=="function")m&&(a=p(a,m));else if(a&&typeof a.handleEvent=="function")a=p(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function _t(a){a.g=gt(()=>{a.g=null,a.i&&(a.i=!1,_t(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class nn extends Je{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:_t(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function At(a){Je.call(this),this.h=a,this.g={}}D(At,Je);var yr=[];function Ci(a){G(a.g,function(d,m){this.g.hasOwnProperty(m)&&J(d)},a),a.g={}}At.prototype.N=function(){At.aa.N.call(this),Ci(this)},At.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yt=l.JSON.stringify,rn=l.JSON.parse,ca=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ic(){}Ic.prototype.h=null;function sf(a){return a.h||(a.h=a.i())}function of(){}var Ri={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ac(){Ze.call(this,"d")}D(Ac,Ze);function Sc(){Ze.call(this,"c")}D(Sc,Ze);var os={},af=null;function ua(){return af=af||new fe}os.La="serverreachability";function lf(a){Ze.call(this,os.La,a)}D(lf,Ze);function Di(a){const d=ua();be(d,new lf(d))}os.STAT_EVENT="statevent";function cf(a,d){Ze.call(this,os.STAT_EVENT,a),this.stat=d}D(cf,Ze);function Mt(a){const d=ua();be(d,new cf(d,a))}os.Ma="timingevent";function uf(a,d){Ze.call(this,os.Ma,a),this.size=d}D(uf,Ze);function ki(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function xi(){this.g=!0}xi.prototype.xa=function(){this.g=!1};function Kw(a,d,m,y,M,U){a.info(function(){if(a.g)if(U)for(var ee="",qe=U.split("&"),vt=0;vt<qe.length;vt++){var Fe=qe[vt].split("=");if(1<Fe.length){var St=Fe[0];Fe=Fe[1];var Pt=St.split("_");ee=2<=Pt.length&&Pt[1]=="type"?ee+(St+"="+Fe+"&"):ee+(St+"=redacted&")}}else ee=null;else ee=U;return"XMLHTTP REQ ("+y+") [attempt "+M+"]: "+d+`
`+m+`
`+ee})}function Yw(a,d,m,y,M,U,ee){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+M+"]: "+d+`
`+m+`
`+U+" "+ee})}function Fs(a,d,m,y){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Xw(a,m)+(y?" "+y:"")})}function Qw(a,d){a.info(function(){return"TIMEOUT: "+d})}xi.prototype.info=function(){};function Xw(a,d){if(!a.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var y=m[a];if(!(2>y.length)){var M=y[1];if(Array.isArray(M)&&!(1>M.length)){var U=M[0];if(U!="noop"&&U!="stop"&&U!="close")for(var ee=1;ee<M.length;ee++)M[ee]=""}}}}return yt(m)}catch{return d}}var ha={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},hf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pc;function da(){}D(da,Ic),da.prototype.g=function(){return new XMLHttpRequest},da.prototype.i=function(){return{}},Pc=new da;function vr(a,d,m,y){this.j=a,this.i=d,this.l=m,this.R=y||1,this.U=new At(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new df}function df(){this.i=null,this.g="",this.h=!1}var ff={},Cc={};function Rc(a,d,m){a.L=1,a.v=ga(Bn(d)),a.m=m,a.P=!0,pf(a,null)}function pf(a,d){a.F=Date.now(),fa(a),a.A=Bn(a.v);var m=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Cf(m.i,"t",y),a.C=0,m=a.j.J,a.h=new df,a.g=Wf(a.j,m?d:null,!a.m),0<a.O&&(a.M=new nn(p(a.Y,a,a.g),a.O)),d=a.U,m=a.g,y=a.ca;var M="readystatechange";Array.isArray(M)||(M&&(yr[0]=M.toString()),M=yr);for(var U=0;U<M.length;U++){var ee=W(m,M[U],y||d.handleEvent,!1,d.h||d);if(!ee)break;d.g[ee.key]=ee}d=a.H?w(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Di(),Kw(a.i,a.u,a.A,a.l,a.R,a.m)}vr.prototype.ca=function(a){a=a.target;const d=this.M;d&&jn(a)==3?d.j():this.Y(a)},vr.prototype.Y=function(a){try{if(a==this.g)e:{const Pt=jn(this.g);var d=this.g.Ba();const Bs=this.g.Z();if(!(3>Pt)&&(Pt!=3||this.g&&(this.h.h||this.g.oa()||Vf(this.g)))){this.J||Pt!=4||d==7||(d==8||0>=Bs?Di(3):Di(2)),Dc(this);var m=this.g.Z();this.X=m;t:if(mf(this)){var y=Vf(this.g);a="";var M=y.length,U=jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){as(this),Oi(this);var ee="";break t}this.h.i=new l.TextDecoder}for(d=0;d<M;d++)this.h.h=!0,a+=this.h.i.decode(y[d],{stream:!(U&&d==M-1)});y.length=0,this.h.g+=a,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=m==200,Yw(this.i,this.u,this.A,this.l,this.R,Pt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,vt=this.g;if((qe=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(qe)){var Fe=qe;break t}}Fe=null}if(m=Fe)Fs(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kc(this,m);else{this.o=!1,this.s=3,Mt(12),as(this),Oi(this);break e}}if(this.P){m=!0;let fn;for(;!this.J&&this.C<ee.length;)if(fn=Jw(this,ee),fn==Cc){Pt==4&&(this.s=4,Mt(14),m=!1),Fs(this.i,this.l,null,"[Incomplete Response]");break}else if(fn==ff){this.s=4,Mt(15),Fs(this.i,this.l,ee,"[Invalid Chunk]"),m=!1;break}else Fs(this.i,this.l,fn,null),kc(this,fn);if(mf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pt!=4||ee.length!=0||this.h.h||(this.s=1,Mt(16),m=!1),this.o=this.o&&m,!m)Fs(this.i,this.l,ee,"[Invalid Chunked Response]"),as(this),Oi(this);else if(0<ee.length&&!this.W){this.W=!0;var St=this.j;St.g==this&&St.ba&&!St.M&&(St.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),Lc(St),St.M=!0,Mt(11))}}else Fs(this.i,this.l,ee,null),kc(this,ee);Pt==4&&as(this),this.o&&!this.J&&(Pt==4?jf(this.j,this):(this.o=!1,fa(this)))}else m1(this.g),m==400&&0<ee.indexOf("Unknown SID")?(this.s=3,Mt(12)):(this.s=0,Mt(13)),as(this),Oi(this)}}}catch{}finally{}};function mf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Jw(a,d){var m=a.C,y=d.indexOf(`
`,m);return y==-1?Cc:(m=Number(d.substring(m,y)),isNaN(m)?ff:(y+=1,y+m>d.length?Cc:(d=d.slice(y,y+m),a.C=y+m,d)))}vr.prototype.cancel=function(){this.J=!0,as(this)};function fa(a){a.S=Date.now()+a.I,gf(a,a.I)}function gf(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ki(p(a.ba,a),d)}function Dc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}vr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Qw(this.i,this.A),this.L!=2&&(Di(),Mt(17)),as(this),this.s=2,Oi(this)):gf(this,this.S-a)};function Oi(a){a.j.G==0||a.J||jf(a.j,a)}function as(a){Dc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Ci(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function kc(a,d){try{var m=a.j;if(m.G!=0&&(m.g==a||xc(m.h,a))){if(!a.K&&xc(m.h,a)&&m.G==3){try{var y=m.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var M=y;if(M[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)ba(m),Ea(m);else break e;Mc(m),Mt(18)}}else m.za=M[1],0<m.za-m.T&&37500>M[2]&&m.F&&m.v==0&&!m.C&&(m.C=ki(p(m.Za,m),6e3));if(1>=vf(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else cs(m,11)}else if((a.K||m.g==a)&&ba(m),!x(d))for(M=m.Da.g.parse(d),d=0;d<M.length;d++){let Fe=M[d];if(m.T=Fe[0],Fe=Fe[1],m.G==2)if(Fe[0]=="c"){m.K=Fe[1],m.ia=Fe[2];const St=Fe[3];St!=null&&(m.la=St,m.j.info("VER="+m.la));const Pt=Fe[4];Pt!=null&&(m.Aa=Pt,m.j.info("SVER="+m.Aa));const Bs=Fe[5];Bs!=null&&typeof Bs=="number"&&0<Bs&&(y=1.5*Bs,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const fn=a.g;if(fn){const Ia=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ia){var U=y.h;U.g||Ia.indexOf("spdy")==-1&&Ia.indexOf("quic")==-1&&Ia.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Oc(U,U.h),U.h=null))}if(y.D){const Fc=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;Fc&&(y.ya=Fc,Ye(y.I,y.D,Fc))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var ee=a;if(y.qa=zf(y,y.J?y.ia:null,y.W),ee.K){Ef(y.h,ee);var qe=ee,vt=y.L;vt&&(qe.I=vt),qe.B&&(Dc(qe),fa(qe)),y.g=ee}else Uf(y);0<m.i.length&&wa(m)}else Fe[0]!="stop"&&Fe[0]!="close"||cs(m,7);else m.G==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?cs(m,7):Vc(m):Fe[0]!="noop"&&m.l&&m.l.ta(Fe),m.v=0)}}Di(4)}catch{}}var Zw=class{constructor(a,d){this.g=a,this.map=d}};function _f(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function vf(a){return a.h?1:a.g?a.g.size:0}function xc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Oc(a,d){a.g?a.g.add(d):a.h=d}function Ef(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}_f.prototype.cancel=function(){if(this.i=wf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function wf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const m of a.g.values())d=d.concat(m.D);return d}return N(a.i)}function e1(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var d=[],m=a.length,y=0;y<m;y++)d.push(a[y]);return d}d=[],m=0;for(y in a)d[m++]=a[y];return d}function t1(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var d=[];a=a.length;for(var m=0;m<a;m++)d.push(m);return d}d=[],m=0;for(const y in a)d[m++]=y;return d}}}function bf(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var m=t1(a),y=e1(a),M=y.length,U=0;U<M;U++)d.call(void 0,y[U],m&&m[U],a)}var Tf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function n1(a,d){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var y=a[m].indexOf("="),M=null;if(0<=y){var U=a[m].substring(0,y);M=a[m].substring(y+1)}else U=a[m];d(U,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function ls(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ls){this.h=a.h,pa(this,a.j),this.o=a.o,this.g=a.g,ma(this,a.s),this.l=a.l;var d=a.i,m=new Mi;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),If(this,m),this.m=a.m}else a&&(d=String(a).match(Tf))?(this.h=!1,pa(this,d[1]||"",!0),this.o=Ni(d[2]||""),this.g=Ni(d[3]||"",!0),ma(this,d[4]),this.l=Ni(d[5]||"",!0),If(this,d[6]||"",!0),this.m=Ni(d[7]||"")):(this.h=!1,this.i=new Mi(null,this.h))}ls.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Vi(d,Af,!0),":");var m=this.g;return(m||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Vi(d,Af,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(Vi(m,m.charAt(0)=="/"?i1:s1,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",Vi(m,a1)),a.join("")};function Bn(a){return new ls(a)}function pa(a,d,m){a.j=m?Ni(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function ma(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function If(a,d,m){d instanceof Mi?(a.i=d,l1(a.i,a.h)):(m||(d=Vi(d,o1)),a.i=new Mi(d,a.h))}function Ye(a,d,m){a.i.set(d,m)}function ga(a){return Ye(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ni(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Vi(a,d,m){return typeof a=="string"?(a=encodeURI(a).replace(d,r1),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function r1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Af=/[#\/\?@]/g,s1=/[#\?:]/g,i1=/[#\?]/g,o1=/[#\?@]/g,a1=/#/g;function Mi(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Er(a){a.g||(a.g=new Map,a.h=0,a.i&&n1(a.i,function(d,m){a.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=Mi.prototype,t.add=function(a,d){Er(this),this.i=null,a=$s(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(d),this.h+=1,this};function Sf(a,d){Er(a),d=$s(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Pf(a,d){return Er(a),d=$s(a,d),a.g.has(d)}t.forEach=function(a,d){Er(this),this.g.forEach(function(m,y){m.forEach(function(M){a.call(d,M,y,this)},this)},this)},t.na=function(){Er(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let y=0;y<d.length;y++){const M=a[y];for(let U=0;U<M.length;U++)m.push(d[y])}return m},t.V=function(a){Er(this);let d=[];if(typeof a=="string")Pf(this,a)&&(d=d.concat(this.g.get($s(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)d=d.concat(a[m])}return d},t.set=function(a,d){return Er(this),this.i=null,a=$s(this,a),Pf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Cf(a,d,m){Sf(a,d),0<m.length&&(a.i=null,a.g.set($s(a,d),N(m)),a.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var y=d[m];const U=encodeURIComponent(String(y)),ee=this.V(y);for(y=0;y<ee.length;y++){var M=U;ee[y]!==""&&(M+="="+encodeURIComponent(String(ee[y]))),a.push(M)}}return this.i=a.join("&")};function $s(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function l1(a,d){d&&!a.j&&(Er(a),a.i=null,a.g.forEach(function(m,y){var M=y.toLowerCase();y!=M&&(Sf(this,y),Cf(this,M,m))},a)),a.j=d}function c1(a,d){const m=new xi;if(l.Image){const y=new Image;y.onload=_(wr,m,"TestLoadImage: loaded",!0,d,y),y.onerror=_(wr,m,"TestLoadImage: error",!1,d,y),y.onabort=_(wr,m,"TestLoadImage: abort",!1,d,y),y.ontimeout=_(wr,m,"TestLoadImage: timeout",!1,d,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else d(!1)}function u1(a,d){const m=new xi,y=new AbortController,M=setTimeout(()=>{y.abort(),wr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:y.signal}).then(U=>{clearTimeout(M),U.ok?wr(m,"TestPingServer: ok",!0,d):wr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(M),wr(m,"TestPingServer: error",!1,d)})}function wr(a,d,m,y,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),y(m)}catch{}}function h1(){this.g=new ca}function d1(a,d,m){const y=m||"";try{bf(a,function(M,U){let ee=M;u(M)&&(ee=yt(M)),d.push(y+U+"="+encodeURIComponent(ee))})}catch(M){throw d.push(y+"type="+encodeURIComponent("_badmap")),M}}function _a(a){this.l=a.Ub||null,this.j=a.eb||!1}D(_a,Ic),_a.prototype.g=function(){return new ya(this.l,this.j)},_a.prototype.i=function(a){return function(){return a}}({});function ya(a,d){fe.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(ya,fe),t=ya.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Fi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Li(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Fi(this)),this.g&&(this.readyState=3,Fi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Li(this):Fi(this),this.readyState==3&&Rf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Li(this))},t.Qa=function(a){this.g&&(this.response=a,Li(this))},t.ga=function(){this.g&&Li(this)};function Li(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Fi(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=d.next();return a.join(`\r
`)};function Fi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Df(a){let d="";return G(a,function(m,y){d+=y,d+=":",d+=m,d+=`\r
`}),d}function Nc(a,d,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=Df(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):Ye(a,d,m))}function tt(a){fe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(tt,fe);var f1=/^https?$/i,p1=["POST","PUT"];t=tt.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pc.g(),this.v=this.o?sf(this.o):sf(Pc),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(U){kf(this,U);return}if(a=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var M in y)m.set(M,y[M]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const U of y.keys())m.set(U,y.get(U));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(U=>U.toLowerCase()=="content-type"),M=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(p1,d,void 0))||y||M||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,ee]of m)this.g.setRequestHeader(U,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Nf(this),this.u=!0,this.g.send(a),this.u=!1}catch(U){kf(this,U)}};function kf(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,xf(a),va(a)}function xf(a){a.A||(a.A=!0,be(a,"complete"),be(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,be(this,"complete"),be(this,"abort"),va(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),va(this,!0)),tt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Of(this):this.bb())},t.bb=function(){Of(this)};function Of(a){if(a.h&&typeof o<"u"&&(!a.v[1]||jn(a)!=4||a.Z()!=2)){if(a.u&&jn(a)==4)gt(a.Ea,0,a);else if(be(a,"readystatechange"),jn(a)==4){a.h=!1;try{const ee=a.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var y;if(y=ee===0){var M=String(a.D).match(Tf)[1]||null;!M&&l.self&&l.self.location&&(M=l.self.location.protocol.slice(0,-1)),y=!f1.test(M?M.toLowerCase():"")}m=y}if(m)be(a,"complete"),be(a,"success");else{a.m=6;try{var U=2<jn(a)?a.g.statusText:""}catch{U=""}a.l=U+" ["+a.Z()+"]",xf(a)}}finally{va(a)}}}}function va(a,d){if(a.g){Nf(a);const m=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||be(a,"ready");try{m.onreadystatechange=y}catch{}}}function Nf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function jn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<jn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),rn(d)}};function Vf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function m1(a){const d={};a=(a.g&&2<=jn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(x(a[y]))continue;var m=R(a[y]);const M=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const U=d[M]||[];d[M]=U,U.push(m)}b(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $i(a,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||d}function Mf(a){this.Aa=0,this.i=[],this.j=new xi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$i("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$i("baseRetryDelayMs",5e3,a),this.cb=$i("retryDelaySeedMs",1e4,a),this.Wa=$i("forwardChannelMaxRetries",2,a),this.wa=$i("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new _f(a&&a.concurrentRequestLimit),this.Da=new h1,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Mf.prototype,t.la=8,t.G=1,t.connect=function(a,d,m,y){Mt(0),this.W=a,this.H=d||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=zf(this,null,this.W),wa(this)};function Vc(a){if(Lf(a),a.G==3){var d=a.U++,m=Bn(a.I);if(Ye(m,"SID",a.K),Ye(m,"RID",d),Ye(m,"TYPE","terminate"),Ui(a,m),d=new vr(a,a.j,d),d.L=2,d.v=ga(Bn(m)),m=!1,l.navigator&&l.navigator.sendBeacon)try{m=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&l.Image&&(new Image().src=d.v,m=!0),m||(d.g=Wf(d.j,null),d.g.ea(d.v)),d.F=Date.now(),fa(d)}qf(a)}function Ea(a){a.g&&(Lc(a),a.g.cancel(),a.g=null)}function Lf(a){Ea(a),a.u&&(l.clearTimeout(a.u),a.u=null),ba(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function wa(a){if(!yf(a.h)&&!a.s){a.s=!0;var d=a.Ga;_e||dn(),Ce||(_e(),Ce=!0),Gt.add(d,a),a.B=0}}function g1(a,d){return vf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ki(p(a.Ga,a,d),Hf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const M=new vr(this,this.j,a);let U=this.o;if(this.S&&(U?(U=w(U),A(U,this.S)):U=this.S),this.m!==null||this.O||(M.H=U,U=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=$f(this,M,d),m=Bn(this.I),Ye(m,"RID",a),Ye(m,"CVER",22),this.D&&Ye(m,"X-HTTP-Session-Id",this.D),Ui(this,m),U&&(this.O?d="headers="+encodeURIComponent(String(Df(U)))+"&"+d:this.m&&Nc(m,this.m,U)),Oc(this.h,M),this.Ua&&Ye(m,"TYPE","init"),this.P?(Ye(m,"$req",d),Ye(m,"SID","null"),M.T=!0,Rc(M,m,null)):Rc(M,m,d),this.G=2}}else this.G==3&&(a?Ff(this,a):this.i.length==0||yf(this.h)||Ff(this))};function Ff(a,d){var m;d?m=d.l:m=a.U++;const y=Bn(a.I);Ye(y,"SID",a.K),Ye(y,"RID",m),Ye(y,"AID",a.T),Ui(a,y),a.m&&a.o&&Nc(y,a.m,a.o),m=new vr(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),d&&(a.i=d.D.concat(a.i)),d=$f(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Oc(a.h,m),Rc(m,y,d)}function Ui(a,d){a.H&&G(a.H,function(m,y){Ye(d,y,m)}),a.l&&bf({},function(m,y){Ye(d,y,m)})}function $f(a,d,m){m=Math.min(a.i.length,m);var y=a.l?p(a.l.Na,a.l,a):null;e:{var M=a.i;let U=-1;for(;;){const ee=["count="+m];U==-1?0<m?(U=M[0].g,ee.push("ofs="+U)):U=0:ee.push("ofs="+U);let qe=!0;for(let vt=0;vt<m;vt++){let Fe=M[vt].g;const St=M[vt].map;if(Fe-=U,0>Fe)U=Math.max(0,M[vt].g-100),qe=!1;else try{d1(St,ee,"req"+Fe+"_")}catch{y&&y(St)}}if(qe){y=ee.join("&");break e}}}return a=a.i.splice(0,m),d.D=a,y}function Uf(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;_e||dn(),Ce||(_e(),Ce=!0),Gt.add(d,a),a.v=0}}function Mc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ki(p(a.Fa,a),Hf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Bf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ki(p(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Mt(10),Ea(this),Bf(this))};function Lc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Bf(a){a.g=new vr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Bn(a.qa);Ye(d,"RID","rpc"),Ye(d,"SID",a.K),Ye(d,"AID",a.T),Ye(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ye(d,"TO",a.ja),Ye(d,"TYPE","xmlhttp"),Ui(a,d),a.m&&a.o&&Nc(d,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=ga(Bn(d)),m.m=null,m.P=!0,pf(m,a)}t.Za=function(){this.C!=null&&(this.C=null,Ea(this),Mc(this),Mt(19))};function ba(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function jf(a,d){var m=null;if(a.g==d){ba(a),Lc(a),a.g=null;var y=2}else if(xc(a.h,d))m=d.D,Ef(a.h,d),y=1;else return;if(a.G!=0){if(d.o)if(y==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var M=a.B;y=ua(),be(y,new uf(y,m)),wa(a)}else Uf(a);else if(M=d.s,M==3||M==0&&0<d.X||!(y==1&&g1(a,d)||y==2&&Mc(a)))switch(m&&0<m.length&&(d=a.h,d.i=d.i.concat(m)),M){case 1:cs(a,5);break;case 4:cs(a,10);break;case 3:cs(a,6);break;default:cs(a,2)}}}function Hf(a,d){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*d}function cs(a,d){if(a.j.info("Error code "+d),d==2){var m=p(a.fb,a),y=a.Xa;const M=!y;y=new ls(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||pa(y,"https"),ga(y),M?c1(y.toString(),m):u1(y.toString(),m)}else Mt(2);a.G=0,a.l&&a.l.sa(d),qf(a),Lf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function qf(a){if(a.G=0,a.ka=[],a.l){const d=wf(a.h);(d.length!=0||a.i.length!=0)&&(L(a.ka,d),L(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function zf(a,d,m){var y=m instanceof ls?Bn(m):new ls(m);if(y.g!="")d&&(y.g=d+"."+y.g),ma(y,y.s);else{var M=l.location;y=M.protocol,d=d?d+"."+M.hostname:M.hostname,M=+M.port;var U=new ls(null);y&&pa(U,y),d&&(U.g=d),M&&ma(U,M),m&&(U.l=m),y=U}return m=a.D,d=a.ya,m&&d&&Ye(y,m,d),Ye(y,"VER",a.la),Ui(a,y),y}function Wf(a,d,m){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new tt(new _a({eb:m})):new tt(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gf(){}t=Gf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ta(){}Ta.prototype.g=function(a,d){return new Kt(a,d)};function Kt(a,d){fe.call(this),this.g=new Mf(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!x(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!x(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Us(this)}D(Kt,fe),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){Vc(this.g)},Kt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=yt(a),a=m);d.i.push(new Zw(d.Ya++,a)),d.G==3&&wa(d)},Kt.prototype.N=function(){this.g.l=null,delete this.j,Vc(this.g),delete this.g,Kt.aa.N.call(this)};function Kf(a){Ac.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const m in d){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}D(Kf,Ac);function Yf(){Sc.call(this),this.status=1}D(Yf,Sc);function Us(a){this.g=a}D(Us,Gf),Us.prototype.ua=function(){be(this.g,"a")},Us.prototype.ta=function(a){be(this.g,new Kf(a))},Us.prototype.sa=function(a){be(this.g,new Yf)},Us.prototype.ra=function(){be(this.g,"b")},Ta.prototype.createWebChannel=Ta.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,Nv=function(){return new Ta},Ov=function(){return ua()},xv=os,qu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ha.NO_ERROR=0,ha.TIMEOUT=8,ha.HTTP_ERROR=6,Ga=ha,hf.COMPLETE="complete",kv=hf,of.EventType=Ri,Ri.OPEN="a",Ri.CLOSE="b",Ri.ERROR="c",Ri.MESSAGE="d",fe.prototype.listen=fe.prototype.K,Yi=of,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,Dv=tt}).apply(typeof Da<"u"?Da:typeof self<"u"?self:typeof window<"u"?window:{});const km="@firebase/firestore",xm="4.8.0";/**
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
 */class Dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Dt.UNAUTHENTICATED=new Dt(null),Dt.GOOGLE_CREDENTIALS=new Dt("google-credentials-uid"),Dt.FIRST_PARTY=new Dt("first-party-uid"),Dt.MOCK_USER=new Dt("mock-user");/**
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
 */let bi="11.10.0";/**
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
 */const Cs=new Qh("@firebase/firestore");function Ws(){return Cs.logLevel}function ie(t,...e){if(Cs.logLevel<=Re.DEBUG){const n=e.map(hd);Cs.debug(`Firestore (${bi}): ${t}`,...n)}}function ar(t,...e){if(Cs.logLevel<=Re.ERROR){const n=e.map(hd);Cs.error(`Firestore (${bi}): ${t}`,...n)}}function Wr(t,...e){if(Cs.logLevel<=Re.WARN){const n=e.map(hd);Cs.warn(`Firestore (${bi}): ${t}`,...n)}}function hd(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function me(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Vv(t,r,n)}function Vv(t,e,n){let r=`FIRESTORE (${bi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw ar(r),new Error(r)}function je(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Vv(e,s,r)}function we(t,e){return t}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends fr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Mv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Dt.UNAUTHENTICATED))}shutdown(){}}class uC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hC{constructor(e){this.t=e,this.currentUser=Dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){je(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new tr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new tr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new tr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(je(typeof r.accessToken=="string",31837,{l:r}),new Mv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string",2055,{h:e}),new Dt(e)}}class dC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class fC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new dC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Om{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Qt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){je(this.o===void 0,3512);const r=i=>{i.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ie("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Om(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(je(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Om(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function mC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function Lv(){return new TextEncoder}/**
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
 */class dd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=mC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function zu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Ae(r,s);{const i=Lv(),o=gC(i.encode(Nm(t,n)),i.encode(Nm(e,n)));return o!==0?o:Ae(r,s)}}n+=r>65535?2:1}return Ae(t.length,e.length)}function Nm(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function gC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Ae(t[n],e[n]);return Ae(t.length,e.length)}function di(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Vm="__name__";class An{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&me(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return An.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof An?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=An.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ae(e.length,n.length)}static compareSegments(e,n){const r=An.isNumericId(e),s=An.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?An.extractNumericId(e).compare(An.extractNumericId(n)):zu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return jr.fromString(e.substring(4,e.length-2))}}class Ke extends An{construct(e,n,r){return new Ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ke(n)}static emptyPath(){return new Ke([])}}const _C=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends An{construct(e,n,r){return new bt(e,n,r)}static isValidIdentifier(e){return _C.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vm}static keyField(){return new bt([Vm])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new re(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new re(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new re(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new re(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(n)}static emptyPath(){return new bt([])}}/**
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
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Ke.fromString(e))}static fromName(e){return new de(Ke.fromString(e).popFirst(5))}static empty(){return new de(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Ke(e.slice()))}}/**
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
 */function Fv(t,e,n){if(!n)throw new re(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yC(t,e,n,r){if(e===!0&&r===!0)throw new re(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mm(t){if(!de.isDocumentKey(t))throw new re(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lm(t){if(de.isDocumentKey(t))throw new re(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $v(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function tc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me(12329,{type:typeof t})}function hn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tc(t);throw new re(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ut(t,e){const n={typeString:t};return e&&(n.value=e),n}function Jo(t,e){if(!$v(t))throw new re(B.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new re(B.INVALID_ARGUMENT,n);return!0}/**
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
 */const Fm=-62135596800,$m=1e6;class Se{static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*$m);return new Se(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Fm)throw new re(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$m}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Jo(e,Se._jsonSchema))return new Se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Fm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Se._jsonSchemaVersion="firestore/timestamp/1.0",Se._jsonSchema={type:ut("string",Se._jsonSchemaVersion),seconds:ut("number"),nanoseconds:ut("number")};/**
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
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Se(0,0))}static max(){return new ve(new Se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Oo=-1;function vC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ve.fromTimestamp(r===1e9?new Se(n+1,0):new Se(n,r));return new Gr(s,de.empty(),e)}function EC(t){return new Gr(t.readTime,t.key,Oo)}class Gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gr(ve.min(),de.empty(),Oo)}static max(){return new Gr(ve.max(),de.empty(),Oo)}}function wC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=de.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const bC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ti(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==bC)throw t;ie("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,r)=>{n(e)})}static reject(e){return new z((n,r)=>{r(e)})}static waitFor(e){return new z((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=z.resolve(!1);for(const r of e)n=n.next(s=>s?z.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new z((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++l,l===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new z((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function IC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ii(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class nc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}nc.ue=-1;/**
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
 */const fd=-1;function rc(t){return t==null}function vl(t){return t===0&&1/t==-1/0}function AC(t){return typeof t=="number"&&Number.isInteger(t)&&!vl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Uv="";function SC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Um(e)),e=PC(t.get(n),e);return Um(e)}function PC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Uv:n+="";break;default:n+=i}}return n}function Um(t){return t+Uv+""}/**
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
 */function Bm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Bv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class et{constructor(e,n){this.comparator=e,this.root=n||Et.EMPTY}insert(e,n){return new et(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ka(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ka(this.root,e,this.comparator,!1)}getReverseIterator(){return new ka(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ka(this.root,e,this.comparator,!0)}}class ka{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Et.RED,this.left=s??Et.EMPTY,this.right=i??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class dt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jm(this.data.getIterator())}getIteratorFrom(e){return new jm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class jm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Jt{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new dt(bt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return di(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class jv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new jv("Invalid base64 string: "+i):i}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const CC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kr(t){if(je(!!t,39018),typeof t=="string"){let e=0;const n=CC.exec(t);if(je(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:it(t.seconds),nanos:it(t.nanos)}}function it(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yr(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
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
 */const Hv="server_timestamp",qv="__type__",zv="__previous_value__",Wv="__local_write_time__";function pd(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[qv])===null||n===void 0?void 0:n.stringValue)===Hv}function sc(t){const e=t.mapValue.fields[zv];return pd(e)?sc(e):e}function No(t){const e=Kr(t.mapValue.fields[Wv].timestampValue);return new Se(e.seconds,e.nanos)}/**
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
 */class RC{constructor(e,n,r,s,i,o,l,c,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h}}const El="(default)";class Vo{constructor(e,n){this.projectId=e,this.database=n||El}static empty(){return new Vo("","")}get isDefaultDatabase(){return this.database===El}isEqual(e){return e instanceof Vo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Gv="__type__",DC="__max__",xa={mapValue:{}},Kv="__vector__",wl="value";function Qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pd(t)?4:xC(t)?9007199254740991:kC(t)?10:11:me(28295,{value:t})}function Fn(t,e){if(t===e)return!0;const n=Qr(t);if(n!==Qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return No(t).isEqual(No(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Kr(s.timestampValue),l=Kr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Yr(s.bytesValue).isEqual(Yr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return it(s.geoPointValue.latitude)===it(i.geoPointValue.latitude)&&it(s.geoPointValue.longitude)===it(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return it(s.integerValue)===it(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=it(s.doubleValue),l=it(i.doubleValue);return o===l?vl(o)===vl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return di(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Bm(o)!==Bm(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Fn(o[c],l[c])))return!1;return!0}(t,e);default:return me(52216,{left:t})}}function Mo(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function fi(t,e){if(t===e)return 0;const n=Qr(t),r=Qr(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=it(i.integerValue||i.doubleValue),c=it(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Hm(t.timestampValue,e.timestampValue);case 4:return Hm(No(t),No(e));case 5:return zu(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Yr(i),c=Yr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=Ae(l[u],c[u]);if(h!==0)return h}return Ae(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ae(it(i.latitude),it(o.latitude));return l!==0?l:Ae(it(i.longitude),it(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return qm(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,h;const f=i.fields||{},p=o.fields||{},_=(l=f[wl])===null||l===void 0?void 0:l.arrayValue,D=(c=p[wl])===null||c===void 0?void 0:c.arrayValue,N=Ae(((u=_?.values)===null||u===void 0?void 0:u.length)||0,((h=D?.values)===null||h===void 0?void 0:h.length)||0);return N!==0?N:qm(_,D)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===xa.mapValue&&o===xa.mapValue)return 0;if(i===xa.mapValue)return 1;if(o===xa.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const p=zu(c[f],h[f]);if(p!==0)return p;const _=fi(l[c[f]],u[h[f]]);if(_!==0)return _}return Ae(c.length,h.length)}(t.mapValue,e.mapValue);default:throw me(23264,{le:n})}}function Hm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=Kr(t),r=Kr(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function qm(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=fi(n[s],r[s]);if(i)return i}return Ae(n.length,r.length)}function pi(t){return Wu(t)}function Wu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return de.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Wu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Wu(n.fields[o])}`;return s+"}"}(t.mapValue):me(61005,{value:t})}function Ka(t){switch(Qr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=sc(t);return e?16+Ka(e):16;case 5:return 2*t.stringValue.length;case 6:return Yr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ka(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return rs(r.fields,(i,o)=>{s+=i.length+Ka(o)}),s}(t.mapValue);default:throw me(13486,{value:t})}}function zm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Gu(t){return!!t&&"integerValue"in t}function md(t){return!!t&&"arrayValue"in t}function Wm(t){return!!t&&"nullValue"in t}function Gm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ya(t){return!!t&&"mapValue"in t}function kC(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Gv])===null||n===void 0?void 0:n.stringValue)===Kv}function po(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return rs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=po(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=po(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===DC}/**
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
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ya(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=po(n)}setAll(e){let n=bt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=po(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ya(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ya(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){rs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Wt(po(this.value))}}function Yv(t){const e=[];return rs(t.fields,(n,r)=>{const s=new bt([n]);if(Ya(r)){const i=Yv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Jt(e)}/**
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
 */class Ot{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ot(e,0,ve.min(),ve.min(),ve.min(),Wt.empty(),0)}static newFoundDocument(e,n,r,s){return new Ot(e,1,n,ve.min(),r,s,0)}static newNoDocument(e,n){return new Ot(e,2,n,ve.min(),ve.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new Ot(e,3,n,ve.min(),ve.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bl{constructor(e,n){this.position=e,this.inclusive=n}}function Km(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=de.comparator(de.fromName(o.referenceValue),n.key):r=fi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ym(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Lo{constructor(e,n="asc"){this.field=e,this.dir=n}}function OC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Qv{}class ct extends Qv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new VC(e,n,r):n==="array-contains"?new FC(e,r):n==="in"?new $C(e,r):n==="not-in"?new UC(e,r):n==="array-contains-any"?new BC(e,r):new ct(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new MC(e,r):new LC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(fi(n,this.value)):n!==null&&Qr(this.value)===Qr(n)&&this.matchesComparison(fi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vn extends Qv{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new vn(e,n)}matches(e){return Xv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Xv(t){return t.op==="and"}function Jv(t){return NC(t)&&Xv(t)}function NC(t){for(const e of t.filters)if(e instanceof vn)return!1;return!0}function Ku(t){if(t instanceof ct)return t.field.canonicalString()+t.op.toString()+pi(t.value);if(Jv(t))return t.filters.map(e=>Ku(e)).join(",");{const e=t.filters.map(n=>Ku(n)).join(",");return`${t.op}(${e})`}}function Zv(t,e){return t instanceof ct?function(r,s){return s instanceof ct&&r.op===s.op&&r.field.isEqual(s.field)&&Fn(r.value,s.value)}(t,e):t instanceof vn?function(r,s){return s instanceof vn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Zv(o,s.filters[l]),!0):!1}(t,e):void me(19439)}function eE(t){return t instanceof ct?function(n){return`${n.field.canonicalString()} ${n.op} ${pi(n.value)}`}(t):t instanceof vn?function(n){return n.op.toString()+" {"+n.getFilters().map(eE).join(" ,")+"}"}(t):"Filter"}class VC extends ct{constructor(e,n,r){super(e,n,r),this.key=de.fromName(r.referenceValue)}matches(e){const n=de.comparator(e.key,this.key);return this.matchesComparison(n)}}class MC extends ct{constructor(e,n){super(e,"in",n),this.keys=tE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class LC extends ct{constructor(e,n){super(e,"not-in",n),this.keys=tE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>de.fromName(r.referenceValue))}class FC extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return md(n)&&Mo(n.arrayValue,this.value)}}class $C extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Mo(this.value.arrayValue,n)}}class UC extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(Mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Mo(this.value.arrayValue,n)}}class BC extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!md(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Mo(this.value.arrayValue,r))}}/**
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
 */class jC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function Qm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new jC(t,e,n,r,s,i,o)}function gd(t){const e=we(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ku(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),rc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>pi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>pi(r)).join(",")),e.Pe=n}return e.Pe}function _d(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!OC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Zv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ym(t.startAt,e.startAt)&&Ym(t.endAt,e.endAt)}function Yu(t){return de.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ai{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function HC(t,e,n,r,s,i,o,l){return new Ai(t,e,n,r,s,i,o,l)}function yd(t){return new Ai(t)}function Xm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function nE(t){return t.collectionGroup!==null}function mo(t){const e=we(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new dt(bt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Lo(i,r))}),n.has(bt.keyField().canonicalString())||e.Te.push(new Lo(bt.keyField(),r))}return e.Te}function xn(t){const e=we(t);return e.Ie||(e.Ie=qC(e,mo(t))),e.Ie}function qC(t,e){if(t.limitType==="F")return Qm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Lo(s.field,i)});const n=t.endAt?new bl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new bl(t.startAt.position,t.startAt.inclusive):null;return Qm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qu(t,e){const n=t.filters.concat([e]);return new Ai(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xu(t,e,n){return new Ai(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ic(t,e){return _d(xn(t),xn(e))&&t.limitType===e.limitType}function rE(t){return`${gd(xn(t))}|lt:${t.limitType}`}function Gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>eE(s)).join(", ")}]`),rc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>pi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>pi(s)).join(",")),`Target(${r})`}(xn(t))}; limitType=${t.limitType})`}function oc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):de.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of mo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=Km(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,mo(r),s)||r.endAt&&!function(o,l,c){const u=Km(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,mo(r),s))}(t,e)}function zC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sE(t){return(e,n)=>{let r=!1;for(const s of mo(t)){const i=WC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function WC(t,e,n){const r=t.field.isKeyField()?de.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?fi(c,u):me(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me(19790,{direction:t.dir})}}/**
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
 */class Ns{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){rs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Bv(this.inner)}size(){return this.innerSize}}/**
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
 */const GC=new et(de.comparator);function lr(){return GC}const iE=new et(de.comparator);function Qi(...t){let e=iE;for(const n of t)e=e.insert(n.key,n);return e}function oE(t){let e=iE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ys(){return go()}function aE(){return go()}function go(){return new Ns(t=>t.toString(),(t,e)=>t.isEqual(e))}const KC=new et(de.comparator),YC=new dt(de.comparator);function De(...t){let e=YC;for(const n of t)e=e.add(n);return e}const QC=new dt(Ae);function XC(){return QC}/**
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
 */function vd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vl(e)?"-0":e}}function lE(t){return{integerValue:""+t}}function JC(t,e){return AC(e)?lE(e):vd(t,e)}/**
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
 */class ac{constructor(){this._=void 0}}function ZC(t,e,n){return t instanceof Tl?function(s,i){const o={fields:{[qv]:{stringValue:Hv},[Wv]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&pd(i)&&(i=sc(i)),i&&(o.fields[zv]=i),{mapValue:o}}(n,e):t instanceof Fo?uE(t,e):t instanceof $o?hE(t,e):function(s,i){const o=cE(s,i),l=Jm(o)+Jm(s.Ee);return Gu(o)&&Gu(s.Ee)?lE(l):vd(s.serializer,l)}(t,e)}function eR(t,e,n){return t instanceof Fo?uE(t,e):t instanceof $o?hE(t,e):n}function cE(t,e){return t instanceof Il?function(r){return Gu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Tl extends ac{}class Fo extends ac{constructor(e){super(),this.elements=e}}function uE(t,e){const n=dE(e);for(const r of t.elements)n.some(s=>Fn(s,r))||n.push(r);return{arrayValue:{values:n}}}class $o extends ac{constructor(e){super(),this.elements=e}}function hE(t,e){let n=dE(e);for(const r of t.elements)n=n.filter(s=>!Fn(s,r));return{arrayValue:{values:n}}}class Il extends ac{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Jm(t){return it(t.integerValue||t.doubleValue)}function dE(t){return md(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function tR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Fo&&s instanceof Fo||r instanceof $o&&s instanceof $o?di(r.elements,s.elements,Fn):r instanceof Il&&s instanceof Il?Fn(r.Ee,s.Ee):r instanceof Tl&&s instanceof Tl}(t.transform,e.transform)}class nR{constructor(e,n){this.version=e,this.transformResults=n}}class Bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bt}static exists(e){return new Bt(void 0,e)}static updateTime(e){return new Bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class lc{}function fE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new cc(t.key,Bt.none()):new Zo(t.key,t.data,Bt.none());{const n=t.data,r=Wt.empty();let s=new dt(bt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ss(t.key,r,new Jt(s.toArray()),Bt.none())}}function rR(t,e,n){t instanceof Zo?function(s,i,o){const l=s.value.clone(),c=eg(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ss?function(s,i,o){if(!Qa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=eg(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(pE(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _o(t,e,n,r){return t instanceof Zo?function(i,o,l,c){if(!Qa(i.precondition,o))return l;const u=i.value.clone(),h=tg(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ss?function(i,o,l,c){if(!Qa(i.precondition,o))return l;const u=tg(i.fieldTransforms,c,o),h=o.data;return h.setAll(pE(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,l){return Qa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function sR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=cE(r.transform,s||null);i!=null&&(n===null&&(n=Wt.empty()),n.set(r.field,i))}return n||null}function Zm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&di(r,s,(i,o)=>tR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zo extends lc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ss extends lc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function eg(t,e,n){const r=new Map;je(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,eR(o,l,n[s]))}return r}function tg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ZC(i,o,e))}return r}class cc extends lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iR extends lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class oR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&rR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=fE(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ve.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),De())}isEqual(e){return this.batchId===e.batchId&&di(this.mutations,e.mutations,(n,r)=>Zm(n,r))&&di(this.baseMutations,e.baseMutations,(n,r)=>Zm(n,r))}}class Ed{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){je(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return KC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ed(e,n,r,s)}}/**
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
 */class aR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class lR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var lt,xe;function cR(t){switch(t){case B.OK:return me(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return me(15467,{code:t})}}function mE(t){if(t===void 0)return ar("GRPC error has no .code"),B.UNKNOWN;switch(t){case lt.OK:return B.OK;case lt.CANCELLED:return B.CANCELLED;case lt.UNKNOWN:return B.UNKNOWN;case lt.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case lt.INTERNAL:return B.INTERNAL;case lt.UNAVAILABLE:return B.UNAVAILABLE;case lt.UNAUTHENTICATED:return B.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case lt.NOT_FOUND:return B.NOT_FOUND;case lt.ALREADY_EXISTS:return B.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return B.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case lt.ABORTED:return B.ABORTED;case lt.OUT_OF_RANGE:return B.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return B.UNIMPLEMENTED;case lt.DATA_LOSS:return B.DATA_LOSS;default:return me(39323,{code:t})}}(xe=lt||(lt={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const uR=new jr([4294967295,4294967295],0);function ng(t){const e=Lv().encode(t),n=new Rv;return n.update(e),new Uint8Array(n.digest())}function rg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new jr([n,r],0),new jr([s,i],0)]}class wd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Xi(`Invalid padding: ${n}`);if(r<0)throw new Xi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Xi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Xi(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=jr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(jr.fromNumber(r)));return s.compare(uR)===1&&(s=new jr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=ng(e),[r,s]=rg(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new wd(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=ng(e),[r,s]=rg(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Xi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class uc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ea.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new uc(ve.min(),s,new et(Ae),lr(),De())}}class ea{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ea(r,n,De(),De(),De())}}/**
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
 */class Xa{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class gE{constructor(e,n){this.targetId=e,this.De=n}}class _E{constructor(e,n,r=Tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class sg{constructor(){this.ve=0,this.Ce=ig(),this.Fe=Tt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=De(),n=De(),r=De();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me(38017,{changeType:i})}}),new ea(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=ig()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,je(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class hR{constructor(e){this.We=e,this.Ge=new Map,this.ze=lr(),this.je=Oa(),this.Je=Oa(),this.He=new et(Ae)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:me(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,s)=>{this.nt(s)&&n(s)})}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Yu(i))if(r===0){const o=new de(i.path);this.Xe(n,o,Ot.newNoDocument(o,ve.min()))}else je(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),c=l?this.ut(l,e,o):1;if(c!==0){this.rt(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Yr(r).toUint8Array()}catch(c){if(c instanceof jv)return Wr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new wd(o,s,i)}catch(c){return Wr(c instanceof Xi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)}),s}Pt(e){const n=new Map;this.Ge.forEach((i,o)=>{const l=this.st(o);if(l){if(i.current&&Yu(l.target)){const c=new de(l.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,Ot.newNoDocument(c,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}});let r=De();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.st(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ze.forEach((i,o)=>o.setReadTime(e));const s=new uc(e,n,this.He,this.ze,r);return this.ze=lr(),this.je=Oa(),this.Je=Oa(),this.He=new et(Ae),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new sg,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new dt(Ae),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new dt(Ae),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||ie("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new sg),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Oa(){return new et(de.comparator)}function ig(){return new et(de.comparator)}const dR={asc:"ASCENDING",desc:"DESCENDING"},fR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pR={and:"AND",or:"OR"};class mR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ju(t,e){return t.useProto3Json||rc(e)?e:{value:e}}function Al(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gR(t,e){return Al(t,e.toTimestamp())}function On(t){return je(!!t,49232),ve.fromTimestamp(function(n){const r=Kr(n);return new Se(r.seconds,r.nanos)}(t))}function bd(t,e){return Zu(t,e).canonicalString()}function Zu(t,e){const n=function(s){return new Ke(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function vE(t){const e=Ke.fromString(t);return je(IE(e),10190,{key:e.toString()}),e}function eh(t,e){return bd(t.databaseId,e.path)}function au(t,e){const n=vE(e);if(n.get(1)!==t.databaseId.projectId)throw new re(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new de(wE(n))}function EE(t,e){return bd(t.databaseId,e)}function _R(t){const e=vE(t);return e.length===4?Ke.emptyPath():wE(e)}function th(t){return new Ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wE(t){return je(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function og(t,e,n){return{name:eh(t,e),fields:n.value.mapValue.fields}}function yR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(je(h===void 0||typeof h=="string",58123),Tt.fromBase64String(h||"")):(je(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Tt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const h=u.code===void 0?B.UNKNOWN:mE(u.code);return new re(h,u.message||"")}(o);n=new _E(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=au(t,r.document.name),i=On(r.document.updateTime),o=r.document.createTime?On(r.document.createTime):ve.min(),l=new Wt({mapValue:{fields:r.document.fields}}),c=Ot.newFoundDocument(s,i,o,l),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Xa(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=au(t,r.document),i=r.readTime?On(r.readTime):ve.min(),o=Ot.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Xa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=au(t,r.document),i=r.removedTargetIds||[];n=new Xa([],i,s,null)}else{if(!("filter"in e))return me(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new lR(s,i),l=r.targetId;n=new gE(l,o)}}return n}function vR(t,e){let n;if(e instanceof Zo)n={update:og(t,e.key,e.value)};else if(e instanceof cc)n={delete:eh(t,e.key)};else if(e instanceof ss)n={update:og(t,e.key,e.data),updateMask:CR(e.fieldMask)};else{if(!(e instanceof iR))return me(16599,{Rt:e.type});n={verify:eh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Tl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof $o)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Il)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw me(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:gR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me(27497)}(t,e.precondition)),n}function ER(t,e){return t&&t.length>0?(je(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?On(s.updateTime):On(i);return o.isEqual(ve.min())&&(o=On(i)),new nR(o,s.transformResults||[])}(n,e))):[]}function wR(t,e){return{documents:[EE(t,e.path)]}}function bR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=EE(t,s);const i=function(u){if(u.length!==0)return TE(vn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Ks(p.field),direction:AR(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ju(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{Vt:n,parent:s}}function TR(t){let e=_R(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){je(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const p=bE(f);return p instanceof vn&&Jv(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(D){return new Lo(Ys(D.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(p))}(n.orderBy));let l=null;n.limit&&(l=function(f){let p;return p=typeof f=="object"?f.value:f,rc(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(f){const p=!!f.before,_=f.values||[];return new bl(_,p)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const p=!f.before,_=f.values||[];return new bl(_,p)}(n.endAt)),HC(e,s,o,i,l,"F",c,u)}function IR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ys(n.unaryFilter.field);return ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ys(n.unaryFilter.field);return ct.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ys(n.unaryFilter.field);return ct.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ys(n.unaryFilter.field);return ct.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}}(t):t.fieldFilter!==void 0?function(n){return ct.create(Ys(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return vn.create(n.compositeFilter.filters.map(r=>bE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me(1026)}}(n.compositeFilter.op))}(t):me(30097,{filter:t})}function AR(t){return dR[t]}function SR(t){return fR[t]}function PR(t){return pR[t]}function Ks(t){return{fieldPath:t.canonicalString()}}function Ys(t){return bt.fromServerFormat(t.fieldPath)}function TE(t){return t instanceof ct?function(n){if(n.op==="=="){if(Gm(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NAN"}};if(Wm(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Gm(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NOT_NAN"}};if(Wm(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ks(n.field),op:SR(n.op),value:n.value}}}(t):t instanceof vn?function(n){const r=n.getFilters().map(s=>TE(s));return r.length===1?r[0]:{compositeFilter:{op:PR(n.op),filters:r}}}(t):me(54877,{filter:t})}function CR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function IE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Mr{constructor(e,n,r,s,i=ve.min(),o=ve.min(),l=Tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class RR{constructor(e){this.gt=e}}function DR(t){const e=TR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xu(e,e.limit,"L"):e}/**
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
 */class kR{constructor(){this.Dn=new xR}addToCollectionParentIndex(e,n){return this.Dn.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(Gr.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(Gr.min())}updateCollectionGroup(e,n,r){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class xR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new dt(Ke.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new dt(Ke.comparator)).toArray()}}/**
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
 */const ag={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},AE=41943040;class qt{static withCacheSize(e){return new qt(e,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */qt.DEFAULT_COLLECTION_PERCENTILE=10,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qt.DEFAULT=new qt(AE,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qt.DISABLED=new qt(-1,0,0);/**
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
 */class mi{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new mi(0)}static ur(){return new mi(-1)}}/**
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
 */const lg="LruGarbageCollector",OR=1048576;function cg([t,e],[n,r]){const s=Ae(t,n);return s===0?Ae(e,r):s}class NR{constructor(e){this.Tr=e,this.buffer=new dt(cg),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();cg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class VR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ie(lg,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ii(n)?ie(lg,"Ignoring IndexedDB error during garbage collection: ",n):await Ti(n)}await this.Rr(3e5)})}}class MR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return z.resolve(nc.ue);const r=new NR(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(ag)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ag):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,l=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),Ws()<=Re.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function LR(t,e){return new MR(t,e)}/**
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
 */class FR{constructor(){this.changes=new Ns(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $R{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class UR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&_o(r.mutation,s,Jt.empty(),Se.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,De()).next(()=>r))}getLocalViewOfDocuments(e,n,r=De()){const s=ys();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Qi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ys();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,De()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=lr();const o=go(),l=function(){return go()}();return n.forEach((c,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof ss)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),_o(h.mutation,u,h.mutation.getFieldMask(),Se.now())):o.set(u.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return l.set(u,new $R(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),l))}recalculateAndSaveOverlays(e,n){const r=go();let s=new et((o,l)=>o-l),i=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=r.get(c)||Jt.empty();h=l.applyToLocalView(u,h),r.set(c,h);const f=(s.get(l.batchId)||De()).add(c);s=s.insert(l.batchId,f)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,f=aE();h.forEach(p=>{if(!i.has(p)){const _=fE(n.get(p),r.get(p));_!==null&&f.set(p,_),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return z.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return de.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):z.resolve(ys());let l=Oo,c=i;return o.next(u=>z.forEach(u,(h,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),i.get(h)?z.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,De())).next(h=>({batchId:l,changes:oE(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new de(n)).next(r=>{let s=Qi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Qi();return this.indexManager.getCollectionParents(e,i).next(l=>z.forEach(l,c=>{const u=function(f,p){return new Ai(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Ot.newInvalidDocument(h)))});let l=Qi();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&_o(h.mutation,u,Jt.empty(),Se.now()),oc(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class BR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return z.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(s){return{id:s.id,version:s.version,createTime:On(s.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(s){return{name:s.name,query:DR(s.bundledQuery),readTime:On(s.readTime)}}(n)),z.resolve()}}/**
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
 */class jR{constructor(){this.overlays=new et(de.comparator),this.kr=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ys();return z.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.wt(e,n,i)}),z.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),z.resolve()}getOverlaysForCollection(e,n,r){const s=ys(),i=n.length+1,o=new de(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return z.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new et((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=ys(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=ys(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>l.set(u,h)),!(l.size()>=s)););return z.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new aR(n,r));let i=this.kr.get(n);i===void 0&&(i=De(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class HR{constructor(){this.sessionToken=Tt.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
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
 */class Td{constructor(){this.qr=new dt(ft.Qr),this.$r=new dt(ft.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new ft(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new ft(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new de(new Ke([])),r=new ft(n,e),s=new ft(n,e+1),i=[];return this.$r.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new de(new Ke([])),r=new ft(n,e),s=new ft(n,e+1);let i=De();return this.$r.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ft(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ft{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return de.comparator(e.key,n.key)||Ae(e.Hr,n.Hr)}static Ur(e,n){return Ae(e.Hr,n.Hr)||de.comparator(e.key,n.key)}}/**
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
 */class qR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new dt(ft.Qr)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new ft(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return z.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?fd:this.er-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ft(n,0),s=new ft(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),z.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new dt(Ae);return n.forEach(s=>{const i=new ft(s,0),o=new ft(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),z.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;de.isDocumentKey(i)||(i=i.child(""));const o=new ft(new de(i),0);let l=new dt(Ae);return this.Yr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)},o),z.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){je(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return z.forEach(n.mutations,s=>{const i=new ft(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new ft(n,0),s=this.Yr.firstAfterOrEqual(r);return z.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class zR{constructor(e){this.ni=e,this.docs=function(){return new et(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return z.resolve(r?r.document.mutableCopy():Ot.newInvalidDocument(n))}getEntries(e,n){let r=lr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ot.newInvalidDocument(s))}),z.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=lr();const o=n.path,l=new de(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||wC(EC(h),r)<=0||(s.has(h.key)||oc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return z.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me(9500)}ri(e,n){return z.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new WR(this)}getSize(e){return z.resolve(this.size)}}class WR extends FR{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),z.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class GR{constructor(e){this.persistence=e,this.ii=new Ns(n=>gd(n),_d),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.si=0,this.oi=new Td,this.targetCount=0,this._i=mi.ar()}forEachTarget(e,n){return this.ii.forEach((r,s)=>n(s)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),z.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new mi(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.hr(n),z.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),z.waitFor(i).next(()=>s)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return z.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),z.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),z.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return z.resolve(r)}containsKey(e,n){return z.resolve(this.oi.containsKey(n))}}/**
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
 */class SE{constructor(e,n){this.ai={},this.overlays={},this.ui=new nc(0),this.ci=!1,this.ci=!0,this.li=new HR,this.referenceDelegate=e(this),this.hi=new GR(this),this.indexManager=new kR,this.remoteDocumentCache=function(s){return new zR(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new RR(n),this.Ti=new BR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new qR(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){ie("MemoryPersistence","Starting transaction:",e);const s=new KR(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return z.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class KR extends TC{constructor(e){super(),this.currentSequenceNumber=e}}class Id{constructor(e){this.persistence=e,this.Ai=new Td,this.Ri=null}static Vi(e){return new Id(e)}get mi(){if(this.Ri)return this.Ri;throw me(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),z.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),z.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.mi,r=>{const s=de.fromPath(r);return this.fi(e,s).next(i=>{i||n.removeEntry(s,ve.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return z.or([()=>z.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Sl{constructor(e,n){this.persistence=e,this.gi=new Ns(r=>SC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=LR(this,n)}static Vi(e,n){return new Sl(e,n)}Ii(){}di(e){return z.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return z.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?z.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ve.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),z.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),z.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),z.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ka(e.data.value)),n}Sr(e,n,r){return z.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return z.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ad{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=De(),s=De();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ad(e,n.fromCache,r,s)}}/**
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
 */class YR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class QR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return TI()?8:IC(Nt())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ys(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new YR;return this.ws(e,n,o).next(l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>i.result)}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(Ws()<=Re.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),z.resolve()):(Ws()<=Re.DEBUG&&ie("QueryEngine","Query:",Gs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ws()<=Re.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xn(n))):z.resolve())}ps(e,n){if(Xm(n))return z.resolve(null);let r=xn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Xu(n,null,"F"),r=xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=De(...i);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.bs(n,l);return this.Ds(n,u,o,c.readTime)?this.ps(e,Xu(n,null,"F")):this.vs(e,u,n,c)}))})))}ys(e,n,r,s){return Xm(n)||s.isEqual(ve.min())?z.resolve(null):this.gs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?z.resolve(null):(Ws()<=Re.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Gs(n)),this.vs(e,o,n,vC(s,Oo)).next(l=>l))})}bs(e,n){let r=new dt(sE(e));return n.forEach((s,i)=>{oc(e,i)&&(r=r.add(i))}),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return Ws()<=Re.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Gs(n)),this.gs.getDocumentsMatchingQuery(e,n,Gr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Sd="LocalStore",XR=3e8;class JR{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new et(Ae),this.Ms=new Ns(i=>gd(i),_d),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function ZR(t,e,n,r){return new JR(t,e,n,r)}async function PE(t,e){const n=we(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=De();for(const u of s){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Bs:u,removedBatchIds:o,addedBatchIds:l}))})})}function e2(t,e){const n=we(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,c,u,h){const f=u.batch,p=f.keys();let _=z.resolve();return p.forEach(D=>{_=_.next(()=>h.getEntry(c,D)).next(N=>{const L=u.docVersions.get(D);je(L!==null,48541),N.version.compareTo(L)<0&&(f.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),h.addEntry(N)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=De();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function CE(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function t2(t,e){const n=we(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach((h,f)=>{const p=s.get(f);if(!p)return;l.push(n.hi.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.hi.addMatchingKeys(i,h.addedDocuments,f)));let _=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(Tt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),s=s.insert(f,_),function(N,L,O){return N.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=XR?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(p,_,h)&&l.push(n.hi.updateTargetData(i,_))});let c=lr(),u=De();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),l.push(n2(i,o,e.documentUpdates).next(h=>{c=h.Ls,u=h.ks})),!r.isEqual(ve.min())){const h=n.hi.getLastRemoteSnapshotVersion(i).next(f=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(h)}return z.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Fs=s,i))}function n2(t,e,n){let r=De(),s=De();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=lr();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ve.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ie(Sd,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ls:o,ks:s}})}function r2(t,e){const n=we(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=fd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function s2(t,e){const n=we(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.hi.getTargetData(r,e).next(i=>i?(s=i,z.resolve(s)):n.hi.allocateTargetId(r).next(o=>(s=new Mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function nh(t,e,n){const r=we(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ii(o))throw o;ie(Sd,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function ug(t,e,n){const r=we(t);let s=ve.min(),i=De();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=we(c),p=f.Ms.get(h);return p!==void 0?z.resolve(f.Fs.get(p)):f.hi.getTargetData(u,h)}(r,o,xn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ve.min(),n?i:De())).next(l=>(i2(r,zC(e),l),{documents:l,qs:i})))}function i2(t,e,n){let r=t.xs.get(e)||ve.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.xs.set(e,r)}class hg{constructor(){this.activeTargetIds=XC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class o2{constructor(){this.Fo=new hg,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new hg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class a2{xo(e){}shutdown(){}}/**
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
 */const dg="ConnectivityMonitor";class fg{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ie(dg,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ie(dg,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Na=null;function rh(){return Na===null?Na=function(){return 268435456+Math.round(2147483648*Math.random())}():Na++,"0x"+Na.toString(16)}/**
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
 */const lu="RestConnection",l2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class c2{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===El?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=rh(),l=this.Go(e,n.toUriEncodedString());ie(lu,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:u}=new URL(l),h=vi(u);return this.jo(e,l,c,r,h).then(f=>(ie(lu,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Wr(lu,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f})}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,n){const r=l2[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class u2{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Ct="WebChannelConnection";class h2 extends c2{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=rh();return new Promise((l,c)=>{const u=new Dv;u.setWithCredentials(!0),u.listenOnce(kv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ga.NO_ERROR:const f=u.getResponseJson();ie(Ct,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case Ga.TIMEOUT:ie(Ct,`RPC '${e}' ${o} timed out`),c(new re(B.DEADLINE_EXCEEDED,"Request time out"));break;case Ga.HTTP_ERROR:const p=u.getStatus();if(ie(Ct,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const D=_?.error;if(D&&D.status&&D.message){const N=function(O){const x=O.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(x)>=0?x:B.UNKNOWN}(D.status);c(new re(N,D.message))}else c(new re(B.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new re(B.UNAVAILABLE,"Connection failed."));break;default:me(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{ie(Ct,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);ie(Ct,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)})}P_(e,n,r){const s=rh(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Nv(),l=Ov(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const h=i.join("");ie(Ct,`Creating RPC '${e}' stream ${s}: ${h}`,c);const f=o.createWebChannel(h,c);this.T_(f);let p=!1,_=!1;const D=new u2({Ho:L=>{_?ie(Ct,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(p||(ie(Ct,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),ie(Ct,`RPC '${e}' stream ${s} sending:`,L),f.send(L))},Yo:()=>f.close()}),N=(L,O,x)=>{L.listen(O,k=>{try{x(k)}catch(F){setTimeout(()=>{throw F},0)}})};return N(f,Yi.EventType.OPEN,()=>{_||(ie(Ct,`RPC '${e}' stream ${s} transport opened.`),D.s_())}),N(f,Yi.EventType.CLOSE,()=>{_||(_=!0,ie(Ct,`RPC '${e}' stream ${s} transport closed`),D.__(),this.I_(f))}),N(f,Yi.EventType.ERROR,L=>{_||(_=!0,Wr(Ct,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),D.__(new re(B.UNAVAILABLE,"The operation could not be completed")))}),N(f,Yi.EventType.MESSAGE,L=>{var O;if(!_){const x=L.data[0];je(!!x,16349);const k=x,F=k?.error||((O=k[0])===null||O===void 0?void 0:O.error);if(F){ie(Ct,`RPC '${e}' stream ${s} received error:`,F);const $=F.status;let G=function(E){const A=lt[E];if(A!==void 0)return mE(A)}($),b=F.message;G===void 0&&(G=B.INTERNAL,b="Unknown error status: "+$+" with message "+F.message),_=!0,D.__(new re(G,b)),f.close()}else ie(Ct,`RPC '${e}' stream ${s} received:`,x),D.a_(x)}}),N(l,xv.STAT_EVENT,L=>{L.stat===qu.PROXY?ie(Ct,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===qu.NOPROXY&&ie(Ct,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.o_()},0),D}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function cu(){return typeof document<"u"?document:null}/**
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
 */function hc(t){return new mR(t,!0)}/**
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
 */class RE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&ie("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const pg="PersistentStream";class DE{constructor(e,n,r,s,i,o,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new RE(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(ar(n.toString()),ar("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===n&&this.W_(r,s)},r=>{e(()=>{const s=new re(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return ie(pg,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(ie(pg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class d2 extends DE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=yR(this.serializer,e),r=function(i){if(!("targetChange"in i))return ve.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ve.min():o.readTime?On(o.readTime):ve.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=th(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Yu(c)?{documents:wR(i,c)}:{query:bR(i,c).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=yE(i,o.resumeToken);const u=Ju(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ve.min())>0){l.readTime=Al(i,o.snapshotVersion.toTimestamp());const u=Ju(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=IR(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=th(this.serializer),n.removeTarget=e,this.k_(n)}}class f2 extends DE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=ER(e.writeResults,e.commitTime),r=On(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=th(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>vR(this.serializer,r))};this.k_(n)}}/**
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
 */class p2{}class m2 extends p2{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new re(B.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Zu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(B.UNKNOWN,i.toString())})}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,Zu(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(B.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class g2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ar(n),this._a=!1):ie("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Rs="RemoteStore";class _2{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{Vs(this)&&(ie(Rs,"Restarting streams for network reachability change."),await async function(c){const u=we(c);u.Ia.add(4),await ta(u),u.Aa.set("Unknown"),u.Ia.delete(4),await dc(u)}(this))})}),this.Aa=new g2(r,s)}}async function dc(t){if(Vs(t))for(const e of t.da)await e(!0)}async function ta(t){for(const e of t.da)await e(!1)}function kE(t,e){const n=we(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Dd(n)?Rd(n):Si(n).x_()&&Cd(n,e))}function Pd(t,e){const n=we(t),r=Si(n);n.Ta.delete(e),r.x_()&&xE(n,e),n.Ta.size===0&&(r.x_()?r.B_():Vs(n)&&n.Aa.set("Unknown"))}function Cd(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Si(t).H_(e)}function xE(t,e){t.Ra.$e(e),Si(t).Y_(e)}function Rd(t){t.Ra=new hR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Si(t).start(),t.Aa.aa()}function Dd(t){return Vs(t)&&!Si(t).M_()&&t.Ta.size>0}function Vs(t){return we(t).Ia.size===0}function OE(t){t.Ra=void 0}async function y2(t){t.Aa.set("Online")}async function v2(t){t.Ta.forEach((e,n)=>{Cd(t,e)})}async function E2(t,e){OE(t),Dd(t)?(t.Aa.la(e),Rd(t)):t.Aa.set("Unknown")}async function w2(t,e,n){if(t.Aa.set("Online"),e instanceof _E&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))}(t,e)}catch(r){ie(Rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Pl(t,r)}else if(e instanceof Xa?t.Ra.Ye(e):e instanceof gE?t.Ra.it(e):t.Ra.et(e),!n.isEqual(ve.min()))try{const r=await CE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.Ta.get(u);h&&i.Ta.set(u,h.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const h=i.Ta.get(c);if(!h)return;i.Ta.set(c,h.withResumeToken(Tt.EMPTY_BYTE_STRING,h.snapshotVersion)),xE(i,c);const f=new Mr(h.target,c,u,h.sequenceNumber);Cd(i,f)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ie(Rs,"Failed to raise snapshot:",r),await Pl(t,r)}}async function Pl(t,e,n){if(!Ii(e))throw e;t.Ia.add(1),await ta(t),t.Aa.set("Offline"),n||(n=()=>CE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ie(Rs,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await dc(t)})}function NE(t,e){return e().catch(n=>Pl(t,n,e))}async function fc(t){const e=we(t),n=Xr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:fd;for(;b2(e);)try{const s=await r2(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,T2(e,s)}catch(s){await Pl(e,s)}VE(e)&&ME(e)}function b2(t){return Vs(t)&&t.Pa.length<10}function T2(t,e){t.Pa.push(e);const n=Xr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function VE(t){return Vs(t)&&!Xr(t).M_()&&t.Pa.length>0}function ME(t){Xr(t).start()}async function I2(t){Xr(t).na()}async function A2(t){const e=Xr(t);for(const n of t.Pa)e.X_(n.mutations)}async function S2(t,e,n){const r=t.Pa.shift(),s=Ed.from(r,e,n);await NE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await fc(t)}async function P2(t,e){e&&Xr(t).Z_&&await async function(r,s){if(function(o){return cR(o)&&o!==B.ABORTED}(s.code)){const i=r.Pa.shift();Xr(r).N_(),await NE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await fc(r)}}(t,e),VE(t)&&ME(t)}async function mg(t,e){const n=we(t);n.asyncQueue.verifyOperationInProgress(),ie(Rs,"RemoteStore received new credentials");const r=Vs(n);n.Ia.add(3),await ta(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await dc(n)}async function C2(t,e){const n=we(t);e?(n.Ia.delete(2),await dc(n)):e||(n.Ia.add(2),await ta(n),n.Aa.set("Unknown"))}function Si(t){return t.Va||(t.Va=function(n,r,s){const i=we(n);return i.ia(),new d2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:y2.bind(null,t),e_:v2.bind(null,t),n_:E2.bind(null,t),J_:w2.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),Dd(t)?Rd(t):t.Aa.set("Unknown")):(await t.Va.stop(),OE(t))})),t.Va}function Xr(t){return t.ma||(t.ma=function(n,r,s){const i=we(n);return i.ia(),new f2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:I2.bind(null,t),n_:P2.bind(null,t),ea:A2.bind(null,t),ta:S2.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await fc(t)):(await t.ma.stop(),t.Pa.length>0&&(ie(Rs,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
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
 */class kd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new kd(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xd(t,e){if(ar("AsyncQueue",`${e}: ${t}`),Ii(t))return new re(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ri{static emptySet(e){return new ri(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||de.comparator(n.key,r.key):(n,r)=>de.comparator(n.key,r.key),this.keyedMap=Qi(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ri)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ri;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class gg{constructor(){this.fa=new et(de.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):me(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class gi{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new gi(e,n,ri.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ic(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class R2{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class D2{constructor(){this.queries=_g(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=we(n),i=s.queries;s.queries=_g(),i.forEach((o,l)=>{for(const c of l.wa)c.onError(r)})})(this,new re(B.ABORTED,"Firestore shutting down"))}}function _g(){return new Ns(t=>rE(t),ic)}async function LE(t,e){const n=we(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new R2,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=xd(o,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&Od(n)}async function FE(t,e){const n=we(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function k2(t,e){const n=we(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&Od(n)}function x2(t,e,n){const r=we(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function Od(t){t.Da.forEach(e=>{e.next()})}var sh,yg;(yg=sh||(sh={})).Fa="default",yg.Cache="cache";class $E{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new gi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==sh.Cache}}/**
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
 */class UE{constructor(e){this.key=e}}class BE{constructor(e){this.key=e}}class O2{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=De(),this.mutatedKeys=De(),this.Xa=sE(e),this.eu=new ri(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new gg,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,f)=>{const p=s.get(h),_=oc(this.query,f)?f:null,D=!!p&&this.mutatedKeys.has(p.key),N=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let L=!1;p&&_?p.data.isEqual(_.data)?D!==N&&(r.track({type:3,doc:_}),L=!0):this.iu(p,_)||(r.track({type:2,doc:_}),L=!0,(c&&this.Xa(_,c)>0||u&&this.Xa(_,u)<0)&&(l=!0)):!p&&_?(r.track({type:0,doc:_}),L=!0):p&&!_&&(r.track({type:1,doc:p}),L=!0,(c||u)&&(l=!0)),L&&(_?(o=o.add(_),i=N?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((h,f)=>function(_,D){const N=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me(20277,{At:L})}};return N(_)-N(D)}(h.type,f.type)||this.Xa(h.doc,f.doc)),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,u=c!==this.Ya;return this.Ya=c,o.length!==0||u?{snapshot:new gi(this.query,e.eu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new gg,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=De(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new BE(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new UE(r))}),n}uu(e){this.Ha=e.qs,this.Za=De();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return gi.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Nd="SyncEngine";class N2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class V2{constructor(e){this.key=e,this.lu=!1}}class M2{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Ns(l=>rE(l),ic),this.Tu=new Map,this.Iu=new Set,this.du=new et(de.comparator),this.Eu=new Map,this.Au=new Td,this.Ru={},this.Vu=new Map,this.mu=mi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function L2(t,e,n=!0){const r=GE(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await jE(r,e,n,!0),s}async function F2(t,e){const n=GE(t);await jE(n,e,!0,!1)}async function jE(t,e,n,r){const s=await s2(t.localStore,xn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await $2(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&kE(t.remoteStore,s),l}async function $2(t,e,n,r,s){t.gu=(f,p,_)=>async function(N,L,O,x){let k=L.view.nu(O);k.Ds&&(k=await ug(N.localStore,L.query,!1).then(({documents:b})=>L.view.nu(b,k)));const F=x&&x.targetChanges.get(L.targetId),$=x&&x.targetMismatches.get(L.targetId)!=null,G=L.view.applyChanges(k,N.isPrimaryClient,F,$);return Eg(N,L.targetId,G._u),G.snapshot}(t,f,p,_);const i=await ug(t.localStore,e,!0),o=new O2(e,i.qs),l=o.nu(i.documents),c=ea.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Eg(t,n,u._u);const h=new N2(e,n,o);return t.Pu.set(e,h),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function U2(t,e,n){const r=we(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(o=>!ic(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await nh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Pd(r.remoteStore,s.targetId),ih(r,s.targetId)}).catch(Ti)):(ih(r,s.targetId),await nh(r.localStore,s.targetId,!0))}async function B2(t,e){const n=we(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Pd(n.remoteStore,r.targetId))}async function j2(t,e,n){const r=Y2(t);try{const s=await function(o,l){const c=we(o),u=Se.now(),h=l.reduce((_,D)=>_.add(D.key),De());let f,p;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let D=lr(),N=De();return c.Os.getEntries(_,h).next(L=>{D=L,D.forEach((O,x)=>{x.isValidDocument()||(N=N.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,D)).next(L=>{f=L;const O=[];for(const x of l){const k=sR(x,f.get(x.key).overlayedDocument);k!=null&&O.push(new ss(x.key,k,Yv(k.value.mapValue),Bt.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,O,l)}).next(L=>{p=L;const O=L.applyToLocalDocumentSet(f,N);return c.documentOverlayCache.saveOverlays(_,L.batchId,O)})}).then(()=>({batchId:p.batchId,changes:oE(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Ru[o.currentUser.toKey()];u||(u=new et(Ae)),u=u.insert(l,c),o.Ru[o.currentUser.toKey()]=u}(r,s.batchId,n),await na(r,s.changes),await fc(r.remoteStore)}catch(s){const i=xd(s,"Failed to persist write");n.reject(i)}}async function HE(t,e){const n=we(t);try{const r=await t2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(je(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?je(o.lu,14607):s.removedDocuments.size>0&&(je(o.lu,42227),o.lu=!1))}),await na(n,r,e)}catch(r){await Ti(r)}}function vg(t,e,n){const r=we(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=we(o);c.onlineState=l;let u=!1;c.queries.forEach((h,f)=>{for(const p of f.wa)p.va(l)&&(u=!0)}),u&&Od(c)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function H2(t,e,n){const r=we(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new et(de.comparator);o=o.insert(i,Ot.newNoDocument(i,ve.min()));const l=De().add(i),c=new uc(ve.min(),new Map,new et(Ae),o,l);await HE(r,c),r.du=r.du.remove(i),r.Eu.delete(e),Vd(r)}else await nh(r.localStore,e,!1).then(()=>ih(r,e,n)).catch(Ti)}async function q2(t,e){const n=we(t),r=e.batch.batchId;try{const s=await e2(n.localStore,e);zE(n,r,null),qE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await na(n,s)}catch(s){await Ti(s)}}async function z2(t,e,n){const r=we(t);try{const s=await function(o,l){const c=we(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,l).next(f=>(je(f!==null,37113),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(r.localStore,e);zE(r,e,n),qE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await na(r,s)}catch(s){await Ti(s)}}function qE(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function zE(t,e,n){const r=we(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function ih(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||WE(t,r)})}function WE(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Pd(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Vd(t))}function Eg(t,e,n){for(const r of n)r instanceof UE?(t.Au.addReference(r.key,e),W2(t,r)):r instanceof BE?(ie(Nd,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||WE(t,r.key)):me(19791,{yu:r})}function W2(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(ie(Nd,"New document in limbo: "+n),t.Iu.add(r),Vd(t))}function Vd(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new de(Ke.fromString(e)),r=t.mu.next();t.Eu.set(r,new V2(n)),t.du=t.du.insert(n,r),kE(t.remoteStore,new Mr(xn(yd(n.path)),r,"TargetPurposeLimboResolution",nc.ue))}}async function na(t,e,n){const r=we(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,c)=>{o.push(r.gu(c,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n?.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Ad.Es(c.targetId,u);i.push(f)}}))}),await Promise.all(o),r.hu.J_(s),await async function(c,u){const h=we(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>z.forEach(u,p=>z.forEach(p.Is,_=>h.persistence.referenceDelegate.addReference(f,p.targetId,_)).next(()=>z.forEach(p.ds,_=>h.persistence.referenceDelegate.removeReference(f,p.targetId,_)))))}catch(f){if(!Ii(f))throw f;ie(Sd,"Failed to update sequence numbers: "+f)}for(const f of u){const p=f.targetId;if(!f.fromCache){const _=h.Fs.get(p),D=_.snapshotVersion,N=_.withLastLimboFreeSnapshotVersion(D);h.Fs=h.Fs.insert(p,N)}}}(r.localStore,i))}async function G2(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){ie(Nd,"User change. New user:",e.toKey());const r=await PE(n.localStore,e);n.currentUser=e,function(i,o){i.Vu.forEach(l=>{l.forEach(c=>{c.reject(new re(B.CANCELLED,o))})}),i.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await na(n,r.Bs)}}function K2(t,e){const n=we(t),r=n.Eu.get(e);if(r&&r.lu)return De().add(r.key);{let s=De();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function GE(t){const e=we(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=HE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=K2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=H2.bind(null,e),e.hu.J_=k2.bind(null,e.eventManager),e.hu.pu=x2.bind(null,e.eventManager),e}function Y2(t){const e=we(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=q2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=z2.bind(null,e),e}class Cl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return ZR(this.persistence,new QR,e.initialUser,this.serializer)}Du(e){return new SE(Id.Vi,this.serializer)}bu(e){return new o2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cl.provider={build:()=>new Cl};class Q2 extends Cl{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){je(this.persistence.referenceDelegate instanceof Sl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new VR(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?qt.withCacheSize(this.cacheSizeBytes):qt.DEFAULT;return new SE(r=>Sl.Vi(r,n),this.serializer)}}class oh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=G2.bind(null,this.syncEngine),await C2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new D2}()}createDatastore(e){const n=hc(e.databaseInfo.databaseId),r=function(i){return new h2(i)}(e.databaseInfo);return function(i,o,l,c){return new m2(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new _2(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>vg(this.syncEngine,n,0),function(){return fg.C()?new fg:new a2}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,h){const f=new M2(s,i,o,l,c,u);return h&&(f.fu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=we(s);ie(Rs,"RemoteStore shutting down."),i.Ia.add(5),await ta(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}oh.provider={build:()=>new oh};/**
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
 */class KE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):ar("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Jr="FirestoreClient";class X2{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Dt.UNAUTHENTICATED,this.clientId=dd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ie(Jr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ie(Jr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=xd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uu(t,e){t.asyncQueue.verifyOperationInProgress(),ie(Jr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await PE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{Wr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{ie("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{Wr("Terminating Firestore due to IndexedDb database deletion failed",s)})}),t._offlineComponents=e}async function wg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await J2(t);ie(Jr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>mg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>mg(e.remoteStore,s)),t._onlineComponents=e}async function J2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ie(Jr,"Using user provided OfflineComponentProvider");try{await uu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Wr("Error using user provided cache. Falling back to memory cache: "+n),await uu(t,new Cl)}}else ie(Jr,"Using default OfflineComponentProvider"),await uu(t,new Q2(void 0));return t._offlineComponents}async function YE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ie(Jr,"Using user provided OnlineComponentProvider"),await wg(t,t._uninitializedComponentsProvider._online)):(ie(Jr,"Using default OnlineComponentProvider"),await wg(t,new oh))),t._onlineComponents}function Z2(t){return YE(t).then(e=>e.syncEngine)}async function QE(t){const e=await YE(t),n=e.eventManager;return n.onListen=L2.bind(null,e.syncEngine),n.onUnlisten=U2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=F2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=B2.bind(null,e.syncEngine),n}function eD(t,e,n={}){const r=new tr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const h=new KE({next:p=>{h.Ou(),o.enqueueAndForget(()=>FE(i,f));const _=p.docs.has(l);!_&&p.fromCache?u.reject(new re(B.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&c&&c.source==="server"?u.reject(new re(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new $E(yd(l.path),h,{includeMetadataChanges:!0,ka:!0});return LE(i,f)}(await QE(t),t.asyncQueue,e,n,r)),r.promise}function tD(t,e,n={}){const r=new tr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const h=new KE({next:p=>{h.Ou(),o.enqueueAndForget(()=>FE(i,f)),p.fromCache&&c.source==="server"?u.reject(new re(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new $E(l,h,{includeMetadataChanges:!0,ka:!0});return LE(i,f)}(await QE(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function XE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const bg=new Map;/**
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
 */const JE="firestore.googleapis.com",Tg=!0;class Ig{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=JE,this.ssl=Tg}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Tg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=AE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<OR)throw new re(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=XE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ig({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ig(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cC;switch(r.type){case"firstParty":return new fC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=bg.get(n);r&&(ie("ComponentProvider","Removing Datastore"),bg.delete(n),r.terminate())}(this),Promise.resolve()}}function nD(t,e,n,r={}){var s;t=hn(t,pc);const i=vi(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(jy(`https://${c}`),Hy("Firestore",!0)),o.host!==JE&&o.host!==c&&Wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!Is(u,l)&&(t._setSettings(u),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Dt.MOCK_USER;else{h=pI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new re(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Dt(p)}t._authCredentials=new uC(new Mv(h,f))}}/**
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
 */class Ms{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ms(this.firestore,e,this._query)}}class ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Jo(n,ot._jsonSchema))return new ot(e,r||null,new de(Ke.fromString(n.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:ut("string",ot._jsonSchemaVersion),referencePath:ut("string")};class Hr extends Ms{constructor(e,n,r){super(e,n,yd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new de(e))}withConverter(e){return new Hr(this.firestore,e,this._path)}}function Ar(t,e,...n){if(t=st(t),Fv("collection","path",e),t instanceof pc){const r=Ke.fromString(e,...n);return Lm(r),new Hr(t,null,r)}{if(!(t instanceof ot||t instanceof Hr))throw new re(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ke.fromString(e,...n));return Lm(r),new Hr(t.firestore,null,r)}}function In(t,e,...n){if(t=st(t),arguments.length===1&&(e=dd.newId()),Fv("doc","path",e),t instanceof pc){const r=Ke.fromString(e,...n);return Mm(r),new ot(t,null,new de(r))}{if(!(t instanceof ot||t instanceof Hr))throw new re(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ke.fromString(e,...n));return Mm(r),new ot(t.firestore,t instanceof Hr?t.converter:null,new de(r))}}/**
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
 */const Ag="AsyncQueue";class Sg{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new RE(this,"async_queue_retry"),this.oc=()=>{const r=cu();r&&ie(Ag,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=cu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=cu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new tr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ii(e))throw e;ie(Ag,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,ar("INTERNAL UNHANDLED ERROR: ",Pg(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=kd.createAndSchedule(this,e,n,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&me(47125,{hc:Pg(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Pg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class is extends pc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Sg,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sg(e),this._firestoreClient=void 0,await e}}}function yo(t,e){const n=typeof t=="object"?t:Gy(),r=typeof t=="string"?t:El,s=Jh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=dI("firestore");i&&nD(s,...i)}return s}function mc(t){if(t._terminated)throw new re(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||rD(t),t._firestoreClient}function rD(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,h){return new RC(l,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,XE(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new X2(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class on{constructor(e){this._byteString=e}static fromBase64String(e){try{return new on(Tt.fromBase64String(e))}catch(n){throw new re(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new on(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:on._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Jo(e,on._jsonSchema))return on.fromBase64String(e.bytes)}}on._jsonSchemaVersion="firestore/bytes/1.0",on._jsonSchema={type:ut("string",on._jsonSchemaVersion),bytes:ut("string")};/**
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
 */class ra{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Md{constructor(e){this._methodName=e}}/**
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
 */class Nn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Nn._jsonSchemaVersion}}static fromJSON(e){if(Jo(e,Nn._jsonSchema))return new Nn(e.latitude,e.longitude)}}Nn._jsonSchemaVersion="firestore/geoPoint/1.0",Nn._jsonSchema={type:ut("string",Nn._jsonSchemaVersion),latitude:ut("number"),longitude:ut("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Vn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Vn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Jo(e,Vn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Vn(e.vectorValues);throw new re(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Vn._jsonSchemaVersion="firestore/vectorValue/1.0",Vn._jsonSchema={type:ut("string",Vn._jsonSchemaVersion),vectorValues:ut("object")};/**
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
 */const sD=/^__.*__$/;class iD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zo(e,this.data,n,this.fieldTransforms)}}class ZE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ew(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{Ec:t})}}class Ld{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Ld(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Rl(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(ew(this.Ec)&&sD.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class oD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||hc(e)}Dc(e,n,r,s=!1){return new Ld({Ec:e,methodName:n,bc:r,path:bt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sa(t){const e=t._freezeSettings(),n=hc(t._databaseId);return new oD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Fd(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);$d("Data must be an object, but it was:",o,r);const l=rw(r,o);let c,u;if(i.merge)c=new Jt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const p=ah(e,f,n);if(!o.contains(p))throw new re(B.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);iw(h,p)||h.push(p)}c=new Jt(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new iD(new Wt(l),c,u)}class gc extends Md{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof gc}}function tw(t,e,n,r){const s=t.Dc(1,e,n);$d("Data must be an object, but it was:",s,r);const i=[],o=Wt.empty();rs(r,(c,u)=>{const h=Ud(e,c,n);u=st(u);const f=s.gc(h);if(u instanceof gc)i.push(h);else{const p=ia(u,f);p!=null&&(i.push(h),o.set(h,p))}});const l=new Jt(i);return new ZE(o,l,s.fieldTransforms)}function nw(t,e,n,r,s,i){const o=t.Dc(1,e,n),l=[ah(e,r,n)],c=[s];if(i.length%2!=0)throw new re(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)l.push(ah(e,i[p])),c.push(i[p+1]);const u=[],h=Wt.empty();for(let p=l.length-1;p>=0;--p)if(!iw(u,l[p])){const _=l[p];let D=c[p];D=st(D);const N=o.gc(_);if(D instanceof gc)u.push(_);else{const L=ia(D,N);L!=null&&(u.push(_),h.set(_,L))}}const f=new Jt(u);return new ZE(h,f,o.fieldTransforms)}function aD(t,e,n,r=!1){return ia(n,t.Dc(r?4:3,e))}function ia(t,e){if(sw(t=st(t)))return $d("Unsupported field value:",e,t),rw(t,e);if(t instanceof Md)return function(r,s){if(!ew(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=ia(l,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=st(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return JC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Se.fromDate(r);return{timestampValue:Al(s.serializer,i)}}if(r instanceof Se){const i=new Se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Al(s.serializer,i)}}if(r instanceof Nn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof on)return{bytesValue:yE(s.serializer,r._byteString)};if(r instanceof ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Vn)return function(o,l){return{mapValue:{fields:{[Gv]:{stringValue:Kv},[wl]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.wc("VectorValues must only contain numeric values.");return vd(l.serializer,u)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${tc(r)}`)}(t,e)}function rw(t,e){const n={};return Bv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rs(t,(r,s)=>{const i=ia(s,e.Vc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function sw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Se||t instanceof Nn||t instanceof on||t instanceof ot||t instanceof Md||t instanceof Vn)}function $d(t,e,n){if(!sw(n)||!$v(n)){const r=tc(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function ah(t,e,n){if((e=st(e))instanceof ra)return e._internalPath;if(typeof e=="string")return Ud(t,e);throw Rl("Field path arguments must be of type string or ",t,!1,void 0,n)}const lD=new RegExp("[~\\*/\\[\\]]");function Ud(t,e,n){if(e.search(lD)>=0)throw Rl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ra(...e.split("."))._internalPath}catch{throw Rl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new re(B.INVALID_ARGUMENT,l+t+c)}function iw(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ow{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_c("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cD extends ow{data(){return super.data()}}function _c(t,e){return typeof e=="string"?Ud(t,e):e instanceof ra?e._internalPath:e._delegate._internalPath}/**
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
 */function uD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bd{}class aw extends Bd{}function qi(t,e,...n){let r=[];e instanceof Bd&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof jd).length,l=i.filter(c=>c instanceof yc).length;if(o>1||o>0&&l>0)throw new re(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class yc extends aw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new yc(e,n,r)}_apply(e){const n=this._parse(e);return lw(e._query,n),new Ms(e.firestore,e.converter,Qu(e._query,n))}_parse(e){const n=sa(e.firestore);return function(i,o,l,c,u,h,f){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new re(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Rg(f,h);const D=[];for(const N of f)D.push(Cg(c,i,N));p={arrayValue:{values:D}}}else p=Cg(c,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Rg(f,h),p=aD(l,o,f,h==="in"||h==="not-in");return ct.create(u,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Va(t,e,n){const r=e,s=_c("where",t);return yc._create(s,r,n)}class jd extends Bd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new jd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:vn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)lw(o,c),o=Qu(o,c)}(e._query,n),new Ms(e.firestore,e.converter,Qu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hd extends aw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Hd(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new re(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new re(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Lo(i,o)}(e._query,this._field,this._direction);return new Ms(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ai(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Ma(t,e="asc"){const n=e,r=_c("orderBy",t);return Hd._create(r,n)}function Cg(t,e,n){if(typeof(n=st(n))=="string"){if(n==="")throw new re(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nE(e)&&n.indexOf("/")!==-1)throw new re(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ke.fromString(n));if(!de.isDocumentKey(r))throw new re(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zm(t,new de(r))}if(n instanceof ot)return zm(t,n._key);throw new re(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${tc(n)}.`)}function Rg(t,e){if(!Array.isArray(t)||t.length===0)throw new re(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lw(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new re(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class hD{convertValue(e,n="none"){switch(Qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return rs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[wl].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>it(o.doubleValue));return new Vn(i)}convertGeoPoint(e){return new Nn(it(e.latitude),it(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=sc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(No(e));default:return null}}convertTimestamp(e){const n=Kr(e);return new Se(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ke.fromString(e);je(IE(r),9688,{name:e});const s=new Vo(r.get(1),r.get(3)),i=new de(r.popFirst(5));return s.isEqual(n)||ar(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function qd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ji{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bs extends ow{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ja(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_c("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=bs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}bs._jsonSchemaVersion="firestore/documentSnapshot/1.0",bs._jsonSchema={type:ut("string",bs._jsonSchemaVersion),bundleSource:ut("string","DocumentSnapshot"),bundleName:ut("string"),bundle:ut("string")};class Ja extends bs{data(e={}){return super.data(e)}}class si{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ji(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ja(this._firestore,this._userDataWriter,r.key,r,new Ji(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Ja(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ji(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ja(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ji(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:dD(l.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=si._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=dd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function dD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me(61501,{type:t})}}/**
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
 */function lh(t){t=hn(t,ot);const e=hn(t.firestore,is);return eD(mc(e),t._key).then(n=>mD(e,t,n))}si._jsonSchemaVersion="firestore/querySnapshot/1.0",si._jsonSchema={type:ut("string",si._jsonSchemaVersion),bundleSource:ut("string","QuerySnapshot"),bundleName:ut("string"),bundle:ut("string")};class cw extends hD{constructor(e){super(),this.firestore=e}convertBytes(e){return new on(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function zi(t){t=hn(t,Ms);const e=hn(t.firestore,is),n=mc(e),r=new cw(e);return uD(t._query),tD(n,t._query).then(s=>new si(e,r,t,s))}function fD(t,e,n){t=hn(t,ot);const r=hn(t.firestore,is),s=qd(t.converter,e,n);return oa(r,[Fd(sa(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Bt.none())])}function hu(t,e,n,...r){t=hn(t,ot);const s=hn(t.firestore,is),i=sa(s);let o;return o=typeof(e=st(e))=="string"||e instanceof ra?nw(i,"updateDoc",t._key,e,n,r):tw(i,"updateDoc",t._key,e),oa(s,[o.toMutation(t._key,Bt.exists(!0))])}function pD(t){return oa(hn(t.firestore,is),[new cc(t._key,Bt.none())])}function du(t,e){const n=hn(t.firestore,is),r=In(t),s=qd(t.converter,e);return oa(n,[Fd(sa(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Bt.exists(!1))]).then(()=>r)}function oa(t,e){return function(r,s){const i=new tr;return r.asyncQueue.enqueueAndForget(async()=>j2(await Z2(r),s,i)),i.promise}(mc(t),e)}function mD(t,e,n){const r=n.docs.get(e._key),s=new cw(t);return new bs(t,s,e._key,r,new Ji(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class gD{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=sa(e)}set(e,n,r){this._verifyNotCommitted();const s=fu(e,this._firestore),i=qd(s.converter,n,r),o=Fd(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Bt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=fu(e,this._firestore);let o;return o=typeof(n=st(n))=="string"||n instanceof ra?nw(this._dataReader,"WriteBatch.update",i._key,n,r,s):tw(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Bt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=fu(e,this._firestore);return this._mutations=this._mutations.concat(new cc(n._key,Bt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new re(B.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function fu(t,e){if((t=st(t)).firestore!==e)throw new re(B.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function _D(t){return mc(t=hn(t,is)),new gD(t,e=>oa(t,e))}(function(e,n=!0){(function(s){bi=s})(Ei),ui(new As("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new is(new hC(r.getProvider("auth-internal")),new pC(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new re(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Br(km,xm,e),Br(km,xm,"esm2017")})();const Zt=Vy("auth",{state:()=>({user:null,userProfile:null,isAuthReady:!1,authInstance:null,loading:!1,error:null,successMessage:null}),getters:{isProfileComplete:t=>!!t.userProfile?.role&&!!t.userProfile?.birthDate,role:t=>t.userProfile?.role},actions:{initAuth(t){t&&(this.authInstance=t,_v(this.authInstance,async e=>{if(e){this.user=e;const n=yo(),s=In(n,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","users",e.uid),i=await lh(s);i.exists()?this.userProfile=i.data():this.userProfile=null}else this.user=null,this.userProfile=null;this.isAuthReady=!0}))},setUserProfile(t){this.userProfile=t},async logout(){await QS(this.authInstance)},async signupWithEmail(t,e,n){this.loading=!0,this.error=null,this.successMessage=null;try{const r=await qS(this.authInstance,e,n);return await GS(r.user,{displayName:t}),this.user=r.user,this.successMessage="Account created successfully!",!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async signInWithEmail(t,e){this.loading=!0,this.error=null,this.successMessage=null;try{const n=await zS(this.authInstance,t,e);return this.user=n.user,!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async signInWithGoogle(){this.loading=!0,this.error=null,this.successMessage=null;try{const t=new Yn,e=await gP(this.authInstance,t);return this.user=e.user,!0}catch(t){return this.error=t.message,!1}finally{this.loading=!1}},async sendPasswordReset(t){this.loading=!0,this.error=null,this.successMessage=null;try{return await jS(this.authInstance,t),this.successMessage="Password reset link sent to your email!",!0}catch(e){return this.error=e.message,!1}finally{this.loading=!1}},async confirmPasswordReset(t,e){this.loading=!0,this.error=null,this.successMessage=null;try{return await HS(this.authInstance,t,e),this.successMessage="Your password has been reset successfully! You can now sign in with your new password.",!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}}}}),Ls=Vy("database",{state:()=>({loading:!1,error:null}),actions:{_getDBEssentials(){const t=Zt();if(!t.user?.uid)return this.error="User not authenticated. Operation cancelled.",null;const e=yo(),n="1:382664693760:web:7582abe58d70b3260f20e5",r=t.user.uid;return{db:e,appId:n,userId:r}},async setUserProfile(t,e){console.log(`[DB_STORE] setUserProfile: Updating profile for user ID: ${t}`),this.loading=!0,this.error=null;try{const n=yo(),s=In(n,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","users",t);return await fD(s,e,{merge:!0}),console.log(`[DB_STORE] setUserProfile: Successfully updated profile for ${t}.`),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async fetchUserProfile(t){this.loading=!0,this.error=null;try{const e=this._getDBEssentials();if(!e)return null;const{db:n,appId:r}=e,s=In(n,"artifacts",r,"users",t),i=await lh(s);return i.exists()?{id:i.id,...i.data()}:null}catch(e){return this.error=e.message,null}finally{this.loading=!1}},async addNewPatient(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=Ar(n,"artifacts",r,"patients"),o={...t,creatorId:s,createdAt:Se.now(),updatedAt:Se.now()};return(await du(i,o)).id}catch(n){return this.error=n.message,null}finally{this.loading=!1}},async updatePatientProfile(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s}=n,i=In(r,"artifacts",s,"patients",t);return await hu(i,{...e,updatedAt:Se.now()}),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async fetchPatientsForDoctor(){this.loading=!0,this.error=null;const t=this._getDBEssentials();if(!t)return[];try{const{db:e,appId:n,userId:r}=t,s=Ar(e,"artifacts",n,"patients"),i=qi(s,Va("creatorId","==",r),Ma("createdAt","desc"));return(await zi(i)).docs.map(l=>({id:l.id,...l.data()}))}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async deletePatientProfile(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return!1;try{const{db:n,appId:r}=e,s=_D(n),i=In(n,"artifacts",r,"patients",t);s.delete(i);const o=Ar(n,"artifacts",r,"scans"),l=qi(o,Va("patientId","==",t));return(await zi(l)).forEach(u=>s.delete(u.ref)),await s.commit(),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async createScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=Ar(n,"artifacts",r,"scans"),o={...t,scanDate:Se.fromDate(new Date(t.scanDate)),creatorId:s,isPersonalScan:t.patientId===s,createdAt:Se.now()};return(await du(i,o)).id}catch(n){return this.error=n.message,null}finally{this.loading=!1}},async updateScan(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s}=n,i=In(r,"artifacts",s,"scans",t),o={...e,scanDate:Se.fromDate(new Date(e.scanDate)),updatedAt:Se.now()};return await hu(i,o),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async deleteScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return!1;try{const{db:n,appId:r}=e,s=In(n,"artifacts",r,"scans",t);return await pD(s),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async fetchScansForPatient(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return[];try{const{db:n,appId:r}=e,s=Ar(n,"artifacts",r,"scans"),i=qi(s,Va("patientId","==",t),Ma("scanDate","desc"));return(await zi(i)).docs.map(l=>({id:l.id,...l.data()}))}catch(n){return this.error=n.message,[]}finally{this.loading=!1}},async fetchDoctorCreatedScans(){this.loading=!0,this.error=null;const t=this._getDBEssentials();if(!t)return[];try{const{db:e,appId:n,userId:r}=t,s=Ar(e,"artifacts",n,"scans"),i=qi(s,Va("creatorId","==",r),Ma("scanDate","desc"));return(await zi(i)).docs.map(l=>({id:l.id,...l.data()}))}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async addPregnancyDeclaration(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=Ar(n,"artifacts",r,"users",s,"pregnancies"),o={...t,status:"active",endDate:null,createdAt:Se.now()};return(await du(i,o)).id}catch(n){return this.error=n.message,null}finally{this.loading=!1}},async fetchPregnancyHistory(){this.loading=!0,this.error=null;const t=this._getDBEssentials();if(!t)return[];try{const{db:e,appId:n,userId:r}=t,s=Ar(e,"artifacts",n,"users",r,"pregnancies"),i=qi(s,Ma("declarationDate","desc"));return(await zi(i)).docs.map(l=>({id:l.id,...l.data()}))}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async updatePregnancyRecord(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s,userId:i}=n,o=In(r,"artifacts",s,"users",i,"pregnancies",t);return await hu(o,{...e,updatedAt:Se.now()}),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async fetchSinglePatient(t){this.loading=!0,this.error=null;try{const e=yo(),r=In(e,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","patients",t),s=await lh(r);return s.exists()?{id:s.id,...s.data()}:(this.error=`No patient found with ID: ${t}`,console.warn(`[DB_STORE] No patient found with ID: ${t}`),null)}catch(e){return this.error=e.message,null}finally{this.loading=!1}}}}),It=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},yD=["dir"],vD={key:0,class:"loading-state"},ED={class:"counter-label"},wD={class:"progress-details"},bD={class:"counter-bar-container"},TD={class:"counter-value"},ID={__name:"MsvCounter",props:{currentMsv:{type:Number,default:0},yearlyLimit:{type:Number,default:1},currentLanguage:String,isLoading:{type:Boolean,default:!0}},setup(t){const e=t,n=He(()=>{const r=e.yearlyLimit>0?e.currentMsv/e.yearlyLimit*100:0;return r<50?"status-safe":r<100?"status-warning":"status-danger"});return(r,s)=>(K(),X("div",{class:Ts(["msv-counter",n.value]),dir:t.currentLanguage==="en"?"ltr":"rtl"},[t.isLoading?(K(),X("div",vD,C(t.currentLanguage==="en"?"Calculating...":"جاري الحساب..."),1)):(K(),X(xt,{key:1},[g("span",ED,C(t.currentLanguage==="en"?"Annual Dose:":"الجرعة السنوية:"),1),g("div",wD,[g("div",bD,[g("div",{class:"counter-bar",style:Fl({width:Math.min(t.currentMsv/t.yearlyLimit*100,100)+"%"})},null,4)]),g("span",TD,C(t.currentMsv.toFixed(2))+" mSv ",1)])],64))],10,yD))}},AD=It(ID,[["__scopeId","data-v-b86bf8cf"]]),SD={class:"app-header"},PD={class:"app-header-center"},CD={class:"project-title"},RD={__name:"TheHeader",props:{currentLanguage:String,user:Object,msvData:Object},emits:["toggle-language","toggle-info-modal"],setup(t){return(e,n)=>(K(),X("header",SD,[g("button",{onClick:n[0]||(n[0]=r=>e.$emit("toggle-language")),class:"language-toggle-button"},C(t.currentLanguage==="en"?"العربية":"English"),1),g("div",PD,[g("h1",CD,C(t.currentLanguage==="en"?"mSv Exposure Calculator":"حاسبة التعرض للأشعة"),1),t.user?(K(),$n(AD,{key:0,"current-msv":t.msvData.current,"yearly-limit":t.msvData.limit,"is-loading":t.msvData.isLoading,"current-language":t.currentLanguage},null,8,["current-msv","yearly-limit","is-loading","current-language"])):Ie("",!0)]),g("button",{onClick:n[1]||(n[1]=r=>e.$emit("toggle-info-modal")),class:"info-button-global"},C(t.currentLanguage==="en"?"Information":"معلومات"),1)]))}},DD=It(RD,[["__scopeId","data-v-d06322cd"]]),kD=["dir"],xD={class:"modal-title"},OD={key:0,class:"info-text-content"},ND={key:1,class:"info-text-content"},VD=`
<p>التعرض الإشعاعي هو كمية الإشعاع التي يتلقاها الجسم عند مروره في بيئة تحتوي على إشعاع مؤين، مثل الأشعة السينية (X-rays) أو الأشعة المقطعية (CT). وتُقاس الجرعة الإشعاعية بوحدة "الميلي سيفرت" (mSv)، وهي وحدة تعكس التأثير البيولوجي للإشعاع على أنسجة الجسم.</p>
<p>تكمن الخطورة في أن الإشعاع المؤين يمكن أن يسبب تلفًا في الخلايا، مما يزيد من خطر الإصابة بالأمراض المزمنة مثل السرطان، خاصةً مع التعرض المتكرر أو الطويل. لذلك:</p>
<ul>
  <li><strong>المرضى</strong> يجب ألا يتعرضوا إلا عند الضرورة، ويجب تسجيل كل فحص وتقييم فائدته مقابل ضرره.</li>
  <li><strong>العاملون في المجال الطبي</strong> مثل أطباء الأشعة وفنيي الأشعة، يتعرضون بشكل مزمن، مما يستدعي مراقبة دورية واتباع إجراءات السلامة.</li>
  <li><strong>النساء الحوامل</strong> هن فئة خاصة يجب أخذ الحيطة الشديدة عند تعرّضهن للإشعاع لتجنّب التأثير على الجنين.</li>
</ul>
<p><strong>الحد السنوي المسموح به للتعرض الإشعاعي</strong><br>
وفقًا لتوصيات اللجنة الدولية للحماية من الإشعاع (ICRP)، هذه هي الحدود الموصى بها:</p>
`,MD=`
<p>Radiation exposure is the amount of radiation received by the body when passing through an environment containing ionizing radiation, such as X-rays or CT scans. The radiation dose is measured in "millisieverts" (mSv), a unit that reflects the biological effect of radiation on body tissues.</p>
<p>The danger lies in the fact that ionizing radiation can cause cell damage, increasing the risk of chronic diseases like cancer, especially with repeated or prolonged exposure. Therefore:</p>
<ul>
  <li><strong>Patients</strong> should only be exposed when necessary, and every examination should be recorded and its benefit evaluated against its harm.</li>
  <li><strong>Medical professionals</strong>, such as radiologists and radiology technicians, are chronically exposed, requiring periodic monitoring and adherence to safety procedures.</li>
  <li><strong>Pregnant women</strong> are a special category who should exercise extreme caution when exposed to radiation to avoid affecting the fetus.</li>
</ul>
<p><strong>Annual Permissible Radiation Exposure Limit</strong><br>
According to the recommendations of the International Commission on Radiological Protection (ICRP), these are the recommended limits:</p>
`,LD={__name:"InfoModal",props:{show:Boolean,currentLanguage:String},emits:["close"],setup(t){return(e,n)=>(K(),$n(ns,{name:"modal-fade"},{default:Ln(()=>[t.show?(K(),X("div",{key:0,class:"modal-overlay",onClick:n[1]||(n[1]=nt(r=>e.$emit("close"),["self"]))},[g("div",{class:"modal-content",dir:t.currentLanguage==="ar"?"rtl":"ltr"},[g("button",{class:"close-modal-button",onClick:n[0]||(n[0]=r=>e.$emit("close"))},"×"),g("h2",xD,C(t.currentLanguage==="en"?"Radiation Exposure Awareness":"التوعية بالتعرض الإشعاعي"),1),t.currentLanguage==="en"?(K(),X("div",OD,[g("div",{innerHTML:MD}),n[2]||(n[2]=g("div",{class:"overflow-x-auto mt-4"},[g("table",{class:"info-table"},[g("thead",null,[g("tr",null,[g("th",null,"Category"),g("th",null,"Annual Permissible Limit"),g("th",null,"Notes")])]),g("tbody",null,[g("tr",null,[g("td",null,"Medical Professionals"),g("td",null,"20 mSv"),g("td",null,"Averaged over 5 years, not exceeding 50 mSv in any single year.")]),g("tr",null,[g("td",null,"Patients"),g("td",null,"No strict limit"),g("td",null,"Exposure should be as low as reasonably achievable (ALARA principle).")]),g("tr",null,[g("td",null,"Pregnant Workers"),g("td",null,"1 mSv to the fetus"),g("td",null,"From the date of knowledge of pregnancy until birth.")]),g("tr",null,[g("td",null,"General Public"),g("td",null,"1 mSv"),g("td",null,"Under normal conditions without medical procedures.")])])])],-1))])):(K(),X("div",ND,[g("div",{innerHTML:VD}),n[3]||(n[3]=g("div",{class:"overflow-x-auto mt-4"},[g("table",{class:"info-table"},[g("thead",null,[g("tr",null,[g("th",null,"الفئة"),g("th",null,"الحد السنوي المسموح به"),g("th",null,"ملاحظات")])]),g("tbody",null,[g("tr",null,[g("td",null,"العاملون في المجال الطبي"),g("td",null,"20 ميلي سيفرت (mSv)"),g("td",null,"كمتوسط على مدى 5 سنوات، بشرط ألا يتجاوز 50 mSv في سنة واحدة.")]),g("tr",null,[g("td",null,"المرضى"),g("td",null,"لا يوجد حد صارم"),g("td",null,"يجب تقليل التعرض بقدر الإمكان وفق مبدأ ALARA.")]),g("tr",null,[g("td",null,"النساء الحوامل العاملات"),g("td",null,"1 ميلي سيفرت للجنين خلال الحمل"),g("td",null,"يجب ألا تتجاوز الجرعة 1 mSv من تاريخ العلم بالحمل وحتى الولادة.")]),g("tr",null,[g("td",null,"العامة (غير العاملين بالمجال)"),g("td",null,"1 ميلي سيفرت"),g("td",null,"في الظروف الطبيعية بدون إجراءات طبية.")])])])],-1))]))],8,kD)])):Ie("",!0)]),_:1}))}},FD=It(LD,[["__scopeId","data-v-13ace159"]]),$D={id:"app",class:"min-h-screen bg-gray-100 flex flex-col font-inter"},UD={__name:"App",setup(t){const e=Zt(),n=Ls(),r=Te("en"),s=Te(!1),i=Te(0),o=Te(20),l=Te(!0),c=()=>{r.value=r.value==="en"?"ar":"en"},u=()=>{s.value=!s.value},h=p=>{if(!p)return null;if(typeof p.toDate=="function")return p.toDate();const _=new Date(p);return isNaN(_.getTime())?null:_},f=async()=>{if(!e.user||!e.role){i.value=0,o.value=1,l.value=!1;return}l.value=!0;const p=e.user.uid,_=e.role;let D=0;try{const N=_==="doctor"?await n.fetchDoctorCreatedScans():await n.fetchScansForPatient(p);if(!N){l.value=!1;return}const L=new Date(new Date().getFullYear(),0,1),O=N.filter(x=>{const k=h(x.scanDate);return k&&k>=L});if(_==="doctor"){const x=O.reduce((G,b)=>b.isPersonalScan?G+(b.patientDose||0):G+(b.doctorDose||0),0),k=20-x,$=(await n.fetchPregnancyHistory())?.find(G=>G.status==="active");if($){const w=.5-N.filter(E=>{const A=h(E.scanDate),R=h($.declarationDate);return A&&R&&A>=R}).reduce((E,A)=>E+(A.doctorDose||0),0);o.value=Math.min(k,w),D=x}else o.value=20,D=x}else o.value=1,D=O.reduce((x,k)=>x+(k.patientDose||0),0);i.value=parseFloat(D.toFixed(3))}catch(N){console.error("[App.vue] Failed to update dose calculation:",N),i.value=0}finally{l.value=!1}};return Gb(()=>{e.isAuthReady&&f()}),Sn("currentLanguage",r),Sn("toggleLanguage",c),Sn("toggleInfoModal",u),Sn("triggerMsvRecalculation",f),Sn("currentMsv",i),Sn("doseLimit",o),(p,_)=>(K(),X("div",$D,[Pe(DD,{"current-language":r.value,user:v(e).user,"msv-data":{current:i.value,limit:o.value,isLoading:l.value},onToggleLanguage:c,onToggleInfoModal:u},null,8,["current-language","user","msv-data"]),Pe(v(Dy),null,{default:Ln(({Component:D,route:N})=>[Pe(ns,{name:"page-fade",mode:"out-in"},{default:Ln(()=>[(K(),$n(Ib(D),{key:N.path}))]),_:2},1024)]),_:1}),Pe(FD,{show:s.value,"current-language":r.value,onClose:u},null,8,["show","current-language"])]))}},BD={class:"signup-page"},jD={class:"signup-main-content"},HD={class:"signup-card"},qD=["dir"],zD=["dir"],WD={class:"form-group"},GD=["dir"],KD=["placeholder","dir"],YD={class:"form-group"},QD=["dir"],XD=["placeholder","dir"],JD={class:"form-group"},ZD=["dir"],ek=["placeholder","dir"],tk=["disabled"],nk={key:0},rk={key:1},sk=["dir"],ik=["dir"],ok=["disabled"],ak=["dir"],lk={__name:"SignupView",setup(t){const e=Os(),n=Zt(),r=Be("currentLanguage"),s=Te(""),i=Te(""),o=Te(""),l=async()=>{if(i.value!==o.value){n.error=r.value==="en"?"Passwords do not match.":"كلمتا المرور غير متطابقتين.";return}await n.signupWithEmail("",s.value,i.value)},c=async()=>{await n.signInWithGoogle()?console.log("Successfully signed in with Google! Redirecting..."):console.error("Google sign-in failed:",n.error)},u=()=>{e.push("/signin")};return(h,f)=>(K(),X("div",BD,[g("main",jD,[g("section",HD,[g("h2",{dir:v(r)==="ar"?"rtl":"ltr"},C(v(r)==="en"?"Welcome! Please Sign Up":"أهلاً بك! يرجى التسجيل"),9,qD),g("p",{dir:v(r)==="ar"?"rtl":"ltr"},C(v(r)==="en"?"Create your account to get started.":"أنشئ حسابك للبدء."),9,zD),g("form",{onSubmit:nt(l,["prevent"]),class:"signup-form"},[g("div",WD,[g("label",{for:"email",dir:v(r)==="ar"?"rtl":"ltr"},C(v(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,GD),ye(g("input",{type:"email",id:"email","onUpdate:modelValue":f[0]||(f[0]=p=>s.value=p),placeholder:v(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:v(r)==="ar"?"rtl":"ltr",required:""},null,8,KD),[[Oe,s.value]])]),g("div",YD,[g("label",{for:"password",dir:v(r)==="ar"?"rtl":"ltr"},C(v(r)==="en"?"Password":"كلمة المرور"),9,QD),ye(g("input",{type:"password",id:"password","onUpdate:modelValue":f[1]||(f[1]=p=>i.value=p),placeholder:v(r)==="en"?"Enter your password":"أدخل كلمة المرور",dir:v(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,XD),[[Oe,i.value]])]),g("div",JD,[g("label",{for:"confirmPassword",dir:v(r)==="ar"?"rtl":"ltr"},C(v(r)==="en"?"Confirm Password":"تأكيد كلمة المرور"),9,ZD),ye(g("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":f[2]||(f[2]=p=>o.value=p),placeholder:v(r)==="en"?"Confirm your password":"أكد كلمة المرور",dir:v(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,ek),[[Oe,o.value]])]),g("button",{class:"action-button primary",type:"submit",disabled:v(n).loading},[v(n).loading?(K(),X("span",nk,C(v(r)==="en"?"Signing Up...":"جاري التسجيل..."),1)):(K(),X("span",rk,C(v(r)==="en"?"Create Account":"إنشاء حساب"),1))],8,tk)],32),v(n).error?(K(),X("div",{key:0,class:"message error-message",dir:v(r)==="ar"?"rtl":"ltr"},C(v(n).error),9,sk)):Ie("",!0),g("div",{class:"divider",dir:v(r)==="ar"?"rtl":"ltr"},[g("span",null,C(v(r)==="en"?"OR":"أو"),1)],8,ik),g("button",{onClick:c,class:"action-button google-button",disabled:v(n).loading},[f[3]||(f[3]=dy('<svg class="google-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a6c83a63><path d="M44.5 20H24V28.5H35.5C34.75 31.85 32.5 34.5 29.5 36.5L24 41.5L24 48H32.5C39.5 48 44.5 43.5 44.5 36.5C44.5 35.5 44.3 34.5 44.1 33.5L44.5 20Z" fill="#4285F4" data-v-a6c83a63></path><path d="M24 44.5C29.5 44.5 34.25 42.5 37.75 39.25L29.5 36.5C27.25 37.75 24 38.5 24 38.5C18.5 38.5 13.75 34.25 11.75 28.5L6.25 33.5C8.75 38.75 15.5 44.5 24 44.5Z" fill="#34A853" data-v-a6c83a63></path><path d="M11.75 28.5C11.25 27.25 11 25.75 11 24C11 22.25 11.25 20.75 11.75 19.5L17.25 14.5C16 17.25 15.25 20.5 15.25 24C15.25 27.5 16 30.75 17.25 33.5L11.75 28.5Z" fill="#FBBC05" data-v-a6c83a63></path><path d="M24 9.5C26.75 9.5 29.25 10.5 31.25 12.25L36.5 7C32.5 3 27.25 0 24 0C15.5 0 8.75 5.75 6.25 11L11.75 16C13.75 10.25 18.5 6 24 6C24 6 24 9.5 24 9.5Z" fill="#EA4335" data-v-a6c83a63></path></svg>',1)),g("span",null,C(v(r)==="en"?"Sign Up with Google":"التسجيل باستخدام جوجل"),1)],8,ok),g("p",{class:"switch-link-container",dir:v(r)==="ar"?"rtl":"ltr"},[zt(C(v(r)==="en"?"Already have an account?":"هل لديك حساب بالفعل؟")+" ",1),g("a",{href:"#",onClick:nt(u,["prevent"])},C(v(r)==="en"?"Sign In":"تسجيل الدخول"),1)],8,ak)])])]))}},ck=It(lk,[["__scopeId","data-v-a6c83a63"]]),uk={class:"login-page"},hk={class:"login-main-content"},dk={class:"login-card"},fk=["dir"],pk=["dir"],mk={class:"form-group"},gk=["dir"],_k=["placeholder","dir"],yk={class:"form-group"},vk=["dir"],Ek=["placeholder","dir"],wk=["dir"],bk=["disabled"],Tk={key:0},Ik={key:1},Ak=["dir"],Sk=["dir"],Pk=["dir"],Ck=["disabled"],Rk=["dir"],Dk={__name:"SigninView",setup(t){const e=Os(),n=Zt(),r=Be("currentLanguage"),s=Te(""),i=Te(""),o=async()=>{await n.signInWithEmail(s.value,i.value)},l=async()=>{await n.signInWithGoogle()},c=()=>{e.push("/")},u=()=>{e.push("/resetpassword")};return(h,f)=>(K(),X("div",uk,[g("main",hk,[g("section",dk,[g("h2",{dir:v(r)==="ar"?"rtl":"ltr"},C(v(r)==="en"?"Welcome Back! Please Sign In":"أهلاً بعودتك! يرجى تسجيل الدخول"),9,fk),g("p",{dir:v(r)==="ar"?"rtl":"ltr"},C(v(r)==="en"?"Sign in to access your dashboard.":"سجّل الدخول للوصول إلى لوحة التحكم الخاصة بك."),9,pk),g("form",{onSubmit:nt(o,["prevent"]),class:"login-form"},[g("div",mk,[g("label",{for:"email",dir:v(r)==="ar"?"rtl":"ltr"},C(v(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,gk),ye(g("input",{type:"email",id:"email","onUpdate:modelValue":f[0]||(f[0]=p=>s.value=p),placeholder:v(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:v(r)==="ar"?"rtl":"ltr",required:""},null,8,_k),[[Oe,s.value]])]),g("div",yk,[g("label",{for:"password",dir:v(r)==="ar"?"rtl":"ltr"},C(v(r)==="en"?"Password":"كلمة المرور"),9,vk),ye(g("input",{type:"password",id:"password","onUpdate:modelValue":f[1]||(f[1]=p=>i.value=p),placeholder:v(r)==="en"?"Enter your password":"أدخل كلمة المرور",dir:v(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,Ek),[[Oe,i.value]]),g("p",{class:"forgot-password-link",dir:v(r)==="ar"?"rtl":"ltr"},[g("a",{href:"#",onClick:nt(u,["prevent"])},C(v(r)==="en"?"Forgot your password?":"هل نسيت كلمة المرور؟"),1)],8,wk)]),g("button",{class:"action-button primary",type:"submit",disabled:v(n).loading},[v(n).loading?(K(),X("span",Tk,C(v(r)==="en"?"Signing In...":"جاري تسجيل الدخول..."),1)):(K(),X("span",Ik,C(v(r)==="en"?"Sign in":"تسجيل الدخول"),1))],8,bk)],32),v(n).error?(K(),X("div",{key:0,class:"message error-message",dir:v(r)==="ar"?"rtl":"ltr"},C(v(n).error),9,Ak)):Ie("",!0),v(n).successMessage?(K(),X("div",{key:1,class:"message success-message",dir:v(r)==="ar"?"rtl":"ltr"},C(v(n).successMessage),9,Sk)):Ie("",!0),g("div",{class:"divider",dir:v(r)==="ar"?"rtl":"ltr"},[g("span",null,C(v(r)==="en"?"OR":"أو"),1)],8,Pk),g("button",{onClick:l,class:"action-button google-button",disabled:v(n).loading},[f[2]||(f[2]=dy('<svg class="google-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3884b703><path d="M44.5 20H24V28.5H35.5C34.75 31.85 32.5 34.5 29.5 36.5L24 41.5L24 48H32.5C39.5 48 44.5 43.5 44.5 36.5C44.5 35.5 44.3 34.5 44.1 33.5L44.5 20Z" fill="#4285F4" data-v-3884b703></path><path d="M24 44.5C29.5 44.5 34.25 42.5 37.75 39.25L29.5 36.5C27.25 37.75 24 38.5 24 38.5C18.5 38.5 13.75 34.25 11.75 28.5L6.25 33.5C8.75 38.75 15.5 44.5 24 44.5Z" fill="#34A853" data-v-3884b703></path><path d="M11.75 28.5C11.25 27.25 11 25.75 11 24C11 22.25 11.25 20.75 11.75 19.5L17.25 14.5C16 17.25 15.25 20.5 15.25 24C15.25 27.5 16 30.75 17.25 33.5L11.75 28.5Z" fill="#FBBC05" data-v-3884b703></path><path d="M24 9.5C26.75 9.5 29.25 10.5 31.25 12.25L36.5 7C32.5 3 27.25 0 24 0C15.5 0 8.75 5.75 6.25 11L11.75 16C13.75 10.25 18.5 6 24 6C24 6 24 9.5 24 9.5Z" fill="#EA4335" data-v-3884b703></path></svg>',1)),g("span",null,C(v(r)==="en"?"Sign in with Google":"تسجيل الدخول باستخدام جوجل"),1)],8,Ck),g("p",{class:"switch-link-container",dir:v(r)==="ar"?"rtl":"ltr"},[zt(C(v(r)==="en"?"Don't have an account?":"ليس لديك حساب؟")+" ",1),g("a",{href:"#",onClick:nt(c,["prevent"])},C(v(r)==="en"?"Sign Up":"التسجيل"),1)],8,Rk)])])]))}},kk=It(Dk,[["__scopeId","data-v-3884b703"]]),xk=["dir"],Ok={class:"recommend-main-content"},Nk={class:"recommend-card"},Vk={class:"mode-switcher"},Mk={key:0,class:"loading-overlay"},Lk={key:1,class:"patient-info-display"},Fk={class:"form-group"},$k=["disabled"],Uk={class:"form-group"},Bk=["disabled"],jk={value:"male"},Hk={value:"female"},qk={key:0,class:"pregnancy-section"},zk={class:"form-group checkbox-group"},Wk=["disabled"],Gk={key:0,class:"form-group"},Kk=["disabled"],Yk={class:"form-group"},Qk=["disabled"],Xk={class:"form-group"},Jk={key:1,class:"doctor-exposure-section"},Zk={class:"section-title"},ex={class:"form-group"},tx={class:"form-group"},nx={value:"",disabled:""},rx={value:"X-ray"},sx={value:"CT"},ix=["disabled"],ox={key:2,class:"message error-message"},ax={key:3},lx={key:0,class:"message warning-message"},cx={class:"prediction-result"},ux={class:"msv-details-container"},hx={key:0,class:"msv-details"},dx={key:1,class:"msv-details doctor-dose"},fx={class:"result-text"},px={class:"switch-link-container"},mx={__name:"RecommendView",setup(t){const e=Os(),n=XT(),r=Zt(),s=Ls(),i=Be("currentLanguage"),o=Be("currentMsv"),l=Be("doseLimit"),c=Te("personal"),u=Te({patientId:null,patientName:"",birthDate:"",gender:"male",medicalHistory:"",currentSymptoms:"",allergies:"",isPregnant:!1,estimatedDueDate:"",previousRadiationExposure:"",scanType:"",doctorAdditionalContext:""}),h=Te(!1),f=Te(!1),p=Te(null),_=Te(""),D=He(()=>r.role),N=()=>{u.value={patientId:null,patientName:"",birthDate:"",gender:"male",medicalHistory:"",currentSymptoms:"",allergies:"",isPregnant:!1,estimatedDueDate:"",previousRadiationExposure:"",scanType:"",doctorAdditionalContext:""}},L=async x=>{if(x){f.value=!0,N();try{let k=null;if(x===r.user?.uid?k=r.userProfile:k=await s.fetchSinglePatient(x),k){const F=$=>$?($.toDate?$.toDate():new Date($)).toISOString().split("T")[0]:"";u.value.patientId=x,u.value.patientName=k.displayName||k.name,u.value.birthDate=F(k.birthDate),u.value.gender=k.gender||"male",u.value.isPregnant=k.isPregnant||!1,u.value.estimatedDueDate=F(k.estimatedDueDate),u.value.medicalHistory=k.medicalHistory?.join(", ")||"",u.value.allergies=k.allergies?.join(", ")||""}}catch(k){console.error("Error fetching patient details:",k),_.value="Failed to load patient data."}finally{f.value=!1}}};ht(c,x=>{p.value=null,x==="personal"&&r.user?L(r.user.uid):n.query.patientId||N()}),ht(()=>n.query.patientId,x=>{x?(c.value="general",L(x)):(c.value="personal",r.user&&L(r.user.uid))},{immediate:!0}),ht(()=>u.value.isPregnant,x=>{x||(u.value.estimatedDueDate="")});const O=async()=>{if(h.value=!0,_.value="",p.value=null,!u.value.birthDate||!u.value.scanType){_.value="Date of Birth and Scan Type are required.",h.value=!1;return}if(u.value.isPregnant&&!u.value.estimatedDueDate){_.value="Estimated Due Date is required for pregnant patients.",h.value=!1;return}const x=new Date().getFullYear()-new Date(u.value.birthDate).getFullYear();let k="Pregnant: No";u.value.isPregnant&&u.value.estimatedDueDate&&(k=`Pregnant: Yes, with an estimated due date of ${u.value.estimatedDueDate}. The AI must heavily weigh the risks of radiation during this gestational period, especially if it's in the first trimester.`);let F="",$={};D.value==="doctor"?(F=`As a medical radiation safety advisor, provide a recommendation for a patient scan, strictly adhering to the ALARA principle.
      - Doctor's Current State: Annual occupational dose is ${o.value.toFixed(2)} mSv. The effective annual limit is ${l.value} mSv.
      - Patient Details: Age: ${x}, Gender: ${u.value.gender}, ${k}, Medical History: ${u.value.medicalHistory||"None"}, Current Symptoms: ${u.value.currentSymptoms||"None"}.
      - Scan being considered: ${u.value.scanType}.
      - Doctor's Context: ${u.value.doctorAdditionalContext||"No additional context provided."}

      Tasks:
      1.  **Recommendation (recommendationText):** Justify if the scan is appropriate. If the patient is pregnant, explicitly state the risks and if an alternative (Ultrasound, MRI) is viable.
      2.  **Dose Estimation (patientCalculatedMsv):** Estimate the patient's effective dose in mSv.
      3.  **Occupational Dose (doctorOccupationalMsv):** Estimate the doctor's occupational dose in mSv.
      4.  **Warning (Warning):** If the doctor's new total occupational dose will exceed their limit, provide a clear warning. Otherwise, an empty string.

      The response MUST be valid JSON and in ${i.value==="en"?"English":"Arabic"}.`,$={type:"OBJECT",properties:{recommendationText:{type:"STRING"},patientCalculatedMsv:{type:"NUMBER"},doctorOccupationalMsv:{type:"NUMBER"},Warning:{type:"STRING"}},required:["recommendationText","patientCalculatedMsv","doctorOccupationalMsv","Warning"]}):(F=`As a patient advocate, provide clear information about a potential medical scan.
      - My Current Status: My estimated radiation dose this year is ${o.value.toFixed(2)} mSv. The recommended annual limit is ${l.value} mSv.
      - My Details: Born on ${u.value.birthDate}, Gender: ${u.value.gender}, ${k}, Symptoms: ${u.value.currentSymptoms||"None"}.

      Tasks:
      1.  **Information (recommendationText):** Explain the purpose of this scan in simple terms. If I am pregnant, explain the importance of discussing the specific timing and risks with my doctor.
      2.  **Dose Estimation (patientCalculatedMsv):** Estimate my effective dose in mSv.
      3.  **Warning (Warning):** If my new total dose for the year will exceed the ${l.value} mSv limit, provide a clear warning. Otherwise, an empty string.

      The response MUST be valid JSON and in ${i.value==="en"?"English":"Arabic"}.`,$={type:"OBJECT",properties:{recommendationText:{type:"STRING"},patientCalculatedMsv:{type:"NUMBER"},Warning:{type:"STRING"}},required:["recommendationText","patientCalculatedMsv","Warning"]});try{const E=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB9KAR0P6sxAj7fP2I-MyVSVOJJaW0J91M",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:F}]}],generationConfig:{responseMimeType:"application/json",responseSchema:$}})});if(!E.ok)throw new Error(`API Error: ${E.statusText}`);const A=await E.json();p.value=JSON.parse(A.candidates[0].content.parts[0].text)}catch(G){console.error("Error getting recommendation:",G),_.value=`An error occurred: ${G.message}`}finally{h.value=!1}};return(x,k)=>(K(),X("div",{class:"recommend-page",dir:v(i)==="ar"?"rtl":"ltr"},[g("main",Ok,[g("section",Nk,[g("h2",null,C(v(i)==="en"?"Medical Scan Recommendation":"توصية الفحص الطبي"),1),g("p",null,C(v(i)==="en"?"Get an AI-powered recommendation based on patient details and radiation safety principles.":"احصل على توصية مدعومة بالذكاء الاصطناعي بناءً على تفاصيل المريض ومبادئ السلامة من الإشعاع."),1),g("div",Vk,[g("button",{class:Ts({active:c.value==="personal"}),onClick:k[0]||(k[0]=F=>c.value="personal")},C(v(i)==="en"?"For Myself":"لنفسي"),3),g("button",{class:Ts({active:c.value==="general"}),onClick:k[1]||(k[1]=F=>c.value="general")},C(v(i)==="en"?"For Another Patient":"لمريض آخر"),3)]),f.value?(K(),X("div",Mk,[g("span",null,C(v(i)==="en"?"Loading Patient Data...":"جاري تحميل بيانات المريض..."),1)])):Ie("",!0),u.value.patientId&&u.value.patientName?(K(),X("div",Lk,[zt(C(v(i)==="en"?"Getting recommendation for:":"الحصول على توصية لـ:")+" ",1),g("strong",null,C(u.value.patientName),1)])):Ie("",!0),g("form",{onSubmit:nt(O,["prevent"]),class:"recommend-form"},[g("div",Fk,[g("label",null,[zt(C(v(i)==="en"?"Date of Birth":"تاريخ الميلاد")+" ",1),k[11]||(k[11]=g("span",{class:"required-indicator"},"*",-1))]),ye(g("input",{type:"date","onUpdate:modelValue":k[2]||(k[2]=F=>u.value.birthDate=F),required:"",disabled:c.value==="personal"},null,8,$k),[[Oe,u.value.birthDate]])]),g("div",Uk,[g("label",null,[zt(C(v(i)==="en"?"Gender":"الجنس")+" ",1),k[12]||(k[12]=g("span",{class:"required-indicator"},"*",-1))]),ye(g("select",{"onUpdate:modelValue":k[3]||(k[3]=F=>u.value.gender=F),required:"",disabled:c.value==="personal"},[g("option",jk,C(v(i)==="en"?"Male":"ذكر"),1),g("option",Hk,C(v(i)==="en"?"Female":"أنثى"),1)],8,Bk),[[sr,u.value.gender]])]),u.value.gender==="female"?(K(),X("div",qk,[g("div",zk,[g("label",null,[ye(g("input",{type:"checkbox","onUpdate:modelValue":k[4]||(k[4]=F=>u.value.isPregnant=F),disabled:c.value==="personal"},null,8,Wk),[[Gl,u.value.isPregnant]]),g("span",null,C(v(i)==="en"?"Is Pregnant?":"هل هي حامل؟"),1)])]),u.value.isPregnant?(K(),X("div",Gk,[g("label",null,[zt(C(v(i)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع")+" ",1),k[13]||(k[13]=g("span",{class:"required-indicator"},"*",-1))]),ye(g("input",{type:"date","onUpdate:modelValue":k[5]||(k[5]=F=>u.value.estimatedDueDate=F),required:"",disabled:c.value==="personal"},null,8,Kk),[[Oe,u.value.estimatedDueDate]])])):Ie("",!0)])):Ie("",!0),g("div",Yk,[g("label",null,C(v(i)==="en"?"Relevant Medical History":"التاريخ الطبي ذو الصلة"),1),ye(g("textarea",{"onUpdate:modelValue":k[6]||(k[6]=F=>u.value.medicalHistory=F),rows:"3",disabled:c.value==="personal"},null,8,Qk),[[Oe,u.value.medicalHistory]])]),g("div",Xk,[g("label",null,C(v(i)==="en"?"Current Symptoms":"الأعراض الحالية"),1),ye(g("textarea",{"onUpdate:modelValue":k[7]||(k[7]=F=>u.value.currentSymptoms=F),rows:"3"},null,512),[[Oe,u.value.currentSymptoms]])]),D.value==="doctor"?(K(),X("div",Jk,[g("h3",Zk,C(v(i)==="en"?"Occupational Exposure Context":"سياق التعرض المهني"),1),g("div",ex,[g("label",null,C(v(i)==="en"?"Your positioning, shielding, etc. (Optional)":"موقعك، التدريع المستخدم، إلخ (اختياري)"),1),ye(g("textarea",{"onUpdate:modelValue":k[8]||(k[8]=F=>u.value.doctorAdditionalContext=F),rows:"3"},null,512),[[Oe,u.value.doctorAdditionalContext]])])])):Ie("",!0),g("div",tx,[g("label",null,[zt(C(v(i)==="en"?"Type of Scan to Consider":"نوع الفحص المقترح")+" ",1),k[14]||(k[14]=g("span",{class:"required-indicator"},"*",-1))]),ye(g("select",{"onUpdate:modelValue":k[9]||(k[9]=F=>u.value.scanType=F),required:""},[g("option",nx,C(v(i)==="en"?"Select Scan Type":"اختر نوع الفحص"),1),g("option",rx,C(v(i)==="en"?"X-ray":"الأشعة السينية"),1),g("option",sx,C(v(i)==="en"?"CT Scan":"الأشعة المقطعية"),1)],512),[[sr,u.value.scanType]])]),g("button",{type:"submit",disabled:h.value,class:"action-button"},C(h.value?v(i)==="en"?"Getting Recommendations...":"جاري الحصول على التوصيات...":v(i)==="en"?"Get Recommendation":"الحصول على توصية"),9,ix)],32),_.value?(K(),X("div",ox,C(_.value),1)):Ie("",!0),p.value?(K(),X("div",ax,[p.value.Warning?(K(),X("div",lx,[g("h4",null,C(v(i)==="en"?"Important Warning":"تحذير هام"),1),g("p",null,C(p.value.Warning),1)])):Ie("",!0),g("div",cx,[g("h3",null,C(v(i)==="en"?"AI Powered Recommendation":"التوصية المدعومة بالذكاء الاصطناعي"),1),g("div",ux,[p.value.patientCalculatedMsv!==null?(K(),X("div",hx,[g("h4",null,C(v(i)==="en"?"Patient Dose":"جرعة المريض"),1),g("p",null,[g("strong",null,C(p.value.patientCalculatedMsv)+" mSv",1)])])):Ie("",!0),p.value.doctorOccupationalMsv!==null?(K(),X("div",dx,[g("h4",null,C(v(i)==="en"?"Doctor Dose":"جرعة الطبيب"),1),g("p",null,[g("strong",null,C(p.value.doctorOccupationalMsv)+" mSv",1)])])):Ie("",!0)]),g("div",fx,[g("h4",null,C(v(i)==="en"?"Recommendation":"التوصية"),1),g("p",null,C(p.value.recommendationText),1)])])])):Ie("",!0),g("p",px,[g("a",{href:"#",onClick:k[10]||(k[10]=nt(F=>v(e).push("/dashboard"),["prevent"]))},C(v(i)==="en"?"Back to Dashboard":"العودة إلى لوحة التحكم"),1)])])])],8,xk))}},gx=It(mx,[["__scopeId","data-v-564b8b32"]]);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function _x(t,e,n){return(e=vx(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Dg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Dg(Object(n),!0).forEach(function(r){_x(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Dg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function yx(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function vx(t){var e=yx(t,"string");return typeof e=="symbol"?e:e+""}const kg=()=>{};let zd={},uw={},hw=null,dw={mark:kg,measure:kg};try{typeof window<"u"&&(zd=window),typeof document<"u"&&(uw=document),typeof MutationObserver<"u"&&(hw=MutationObserver),typeof performance<"u"&&(dw=performance)}catch{}const{userAgent:xg=""}=zd.navigator||{},Zr=zd,Qe=uw,Og=hw,La=dw;Zr.document;const mr=!!Qe.documentElement&&!!Qe.head&&typeof Qe.addEventListener=="function"&&typeof Qe.createElement=="function",fw=~xg.indexOf("MSIE")||~xg.indexOf("Trident/");var Ex=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,wx=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,pw={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},bx={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},mw=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Vt="classic",vc="duotone",Tx="sharp",Ix="sharp-duotone",gw=[Vt,vc,Tx,Ix],Ax={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Sx={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Px=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Cx={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Rx=["fak","fa-kit","fakd","fa-kit-duotone"],Ng={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Dx=["kit"],kx={kit:{"fa-kit":"fak"}},xx=["fak","fakd"],Ox={kit:{fak:"fa-kit"}},Vg={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Fa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Nx=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Vx=["fak","fa-kit","fakd","fa-kit-duotone"],Mx={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Lx={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Fx={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ch={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},$x=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],uh=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Nx,...$x],Ux=["solid","regular","light","thin","duotone","brands"],_w=[1,2,3,4,5,6,7,8,9,10],Bx=_w.concat([11,12,13,14,15,16,17,18,19,20]),jx=[...Object.keys(Fx),...Ux,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Fa.GROUP,Fa.SWAP_OPACITY,Fa.PRIMARY,Fa.SECONDARY].concat(_w.map(t=>"".concat(t,"x"))).concat(Bx.map(t=>"w-".concat(t))),Hx={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const cr="___FONT_AWESOME___",hh=16,yw="fa",vw="svg-inline--fa",Ds="data-fa-i2svg",dh="data-fa-pseudo-element",qx="data-fa-pseudo-element-pending",Wd="data-prefix",Gd="data-icon",Mg="fontawesome-i2svg",zx="async",Wx=["HTML","HEAD","STYLE","SCRIPT"],Ew=(()=>{try{return!0}catch{return!1}})();function aa(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Vt]}})}const ww=Q({},pw);ww[Vt]=Q(Q(Q(Q({},{"fa-duotone":"duotone"}),pw[Vt]),Ng.kit),Ng["kit-duotone"]);const Gx=aa(ww),fh=Q({},Cx);fh[Vt]=Q(Q(Q(Q({},{duotone:"fad"}),fh[Vt]),Vg.kit),Vg["kit-duotone"]);const Lg=aa(fh),ph=Q({},ch);ph[Vt]=Q(Q({},ph[Vt]),Ox.kit);const Kd=aa(ph),mh=Q({},Lx);mh[Vt]=Q(Q({},mh[Vt]),kx.kit);aa(mh);const Kx=Ex,bw="fa-layers-text",Yx=wx,Qx=Q({},Ax);aa(Qx);const Xx=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],pu=bx,Jx=[...Dx,...jx],vo=Zr.FontAwesomeConfig||{};function Zx(t){var e=Qe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function eO(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Qe&&typeof Qe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=eO(Zx(n));s!=null&&(vo[r]=s)});const Tw={styleDefault:"solid",familyDefault:Vt,cssPrefix:yw,replacementClass:vw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vo.familyPrefix&&(vo.cssPrefix=vo.familyPrefix);const _i=Q(Q({},Tw),vo);_i.autoReplaceSvg||(_i.observeMutations=!1);const ce={};Object.keys(Tw).forEach(t=>{Object.defineProperty(ce,t,{enumerable:!0,set:function(e){_i[t]=e,Eo.forEach(n=>n(ce))},get:function(){return _i[t]}})});Object.defineProperty(ce,"familyPrefix",{enumerable:!0,set:function(t){_i.cssPrefix=t,Eo.forEach(e=>e(ce))},get:function(){return _i.cssPrefix}});Zr.FontAwesomeConfig=ce;const Eo=[];function tO(t){return Eo.push(t),()=>{Eo.splice(Eo.indexOf(t),1)}}const Sr=hh,Cn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nO(t){if(!t||!mr)return;const e=Qe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Qe.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Qe.head.insertBefore(e,r),t}const rO="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Uo(){let t=12,e="";for(;t-- >0;)e+=rO[Math.random()*62|0];return e}function Pi(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Yd(t){return t.classList?Pi(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Iw(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function sO(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Iw(t[n]),'" '),"").trim()}function Ec(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Qd(t){return t.size!==Cn.size||t.x!==Cn.x||t.y!==Cn.y||t.rotate!==Cn.rotate||t.flipX||t.flipY}function iO(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:u}}function oO(t){let{transform:e,width:n=hh,height:r=hh,startCentered:s=!1}=t,i="";return s&&fw?i+="translate(".concat(e.x/Sr-n/2,"em, ").concat(e.y/Sr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/Sr,"em), calc(-50% + ").concat(e.y/Sr,"em)) "):i+="translate(".concat(e.x/Sr,"em, ").concat(e.y/Sr,"em) "),i+="scale(".concat(e.size/Sr*(e.flipX?-1:1),", ").concat(e.size/Sr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var aO=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
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
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  left: calc(-1 * var(--fa-li-width, 2em));
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
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
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
}`;function Aw(){const t=yw,e=vw,n=ce.cssPrefix,r=ce.replacementClass;let s=aO;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return s}let Fg=!1;function mu(){ce.autoAddCss&&!Fg&&(nO(Aw()),Fg=!0)}var lO={mixout(){return{dom:{css:Aw,insertCss:mu}}},hooks(){return{beforeDOMElementCreation(){mu()},beforeI2svg(){mu()}}}};const ur=Zr||{};ur[cr]||(ur[cr]={});ur[cr].styles||(ur[cr].styles={});ur[cr].hooks||(ur[cr].hooks={});ur[cr].shims||(ur[cr].shims=[]);var Rn=ur[cr];const Sw=[],Pw=function(){Qe.removeEventListener("DOMContentLoaded",Pw),Dl=1,Sw.map(t=>t())};let Dl=!1;mr&&(Dl=(Qe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Qe.readyState),Dl||Qe.addEventListener("DOMContentLoaded",Pw));function cO(t){mr&&(Dl?setTimeout(t,0):Sw.push(t))}function la(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Iw(t):"<".concat(e," ").concat(sO(n),">").concat(r.map(la).join(""),"</").concat(e,">")}function $g(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var gu=function(e,n,r,s){var i=Object.keys(e),o=i.length,l=n,c,u,h;for(r===void 0?(c=1,h=e[i[0]]):(c=0,h=r);c<o;c++)u=i[c],h=l(h,e[u],u,e);return h};function uO(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function gh(t){const e=uO(t);return e.length===1?e[0].toString(16):null}function hO(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Ug(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function _h(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=Ug(e);typeof Rn.hooks.addPack=="function"&&!r?Rn.hooks.addPack(t,Ug(e)):Rn.styles[t]=Q(Q({},Rn.styles[t]||{}),s),t==="fas"&&_h("fa",e)}const{styles:Bo,shims:dO}=Rn,Cw=Object.keys(Kd),fO=Cw.reduce((t,e)=>(t[e]=Object.keys(Kd[e]),t),{});let Xd=null,Rw={},Dw={},kw={},xw={},Ow={};function pO(t){return~Jx.indexOf(t)}function mO(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!pO(s)?s:null}const Nw=()=>{const t=r=>gu(Bo,(s,i,o)=>(s[o]=gu(i,r,{}),s),{});Rw=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=i}),r)),Dw=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=i}),r)),Ow=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(l=>{r[l]=i}),r});const e="far"in Bo||ce.autoFetchSvg,n=gu(dO,(r,s)=>{const i=s[0];let o=s[1];const l=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});kw=n.names,xw=n.unicodes,Xd=wc(ce.styleDefault,{family:ce.familyDefault})};tO(t=>{Xd=wc(t.styleDefault,{family:ce.familyDefault})});Nw();function Jd(t,e){return(Rw[t]||{})[e]}function gO(t,e){return(Dw[t]||{})[e]}function vs(t,e){return(Ow[t]||{})[e]}function Vw(t){return kw[t]||{prefix:null,iconName:null}}function _O(t){const e=xw[t],n=Jd("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function es(){return Xd}const Mw=()=>({prefix:null,iconName:null,rest:[]});function yO(t){let e=Vt;const n=Cw.reduce((r,s)=>(r[s]="".concat(ce.cssPrefix,"-").concat(s),r),{});return gw.forEach(r=>{(t.includes(n[r])||t.some(s=>fO[r].includes(s)))&&(e=r)}),e}function wc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Vt}=e,r=Gx[n][t];if(n===vc&&!t)return"fad";const s=Lg[n][t]||Lg[n][r],i=t in Rn.styles?t:null;return s||i||null}function vO(t){let e=[],n=null;return t.forEach(r=>{const s=mO(ce.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function Bg(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function bc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=uh.concat(Vx),i=Bg(t.filter(f=>s.includes(f))),o=Bg(t.filter(f=>!uh.includes(f))),l=i.filter(f=>(r=f,!mw.includes(f))),[c=null]=l,u=yO(i),h=Q(Q({},vO(o)),{},{prefix:wc(c,{family:u})});return Q(Q(Q({},h),TO({values:t,family:u,styles:Bo,config:ce,canonical:h,givenPrefix:r})),EO(n,r,h))}function EO(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?Vw(s):{},o=vs(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!Bo.far&&Bo.fas&&!ce.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const wO=gw.filter(t=>t!==Vt||t!==vc),bO=Object.keys(ch).filter(t=>t!==Vt).map(t=>Object.keys(ch[t])).flat();function TO(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,l=n===vc,c=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!l&&(c||u||h)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&wO.includes(n)&&(Object.keys(i).find(p=>bO.includes(p))||o.autoFetchSvg)){const p=Px.get(n).defaultShortPrefixId;r.prefix=p,r.iconName=vs(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=es()||"fas"),r}class IO{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=Q(Q({},this.definitions[i]||{}),s[i]),_h(i,s[i]);const o=Kd[Vt][i];o&&_h(o,s[i]),Nw()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:l}=r[s],c=l[2];e[i]||(e[i]={}),c.length>0&&c.forEach(u=>{typeof u=="string"&&(e[i][u]=l)}),e[i][o]=l}),e}}let jg=[],Qs={};const ii={},AO=Object.keys(ii);function SO(t,e){let{mixoutsTo:n}=e;return jg=t,Qs={},Object.keys(ii).forEach(r=>{AO.indexOf(r)===-1&&delete ii[r]}),jg.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Qs[o]||(Qs[o]=[]),Qs[o].push(i[o])})}r.provides&&r.provides(ii)}),n}function yh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(Qs[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function ks(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Qs[t]||[]).forEach(i=>{i.apply(null,n)})}function ts(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ii[t]?ii[t].apply(null,e):void 0}function vh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||es();if(e)return e=vs(n,e)||e,$g(Lw.definitions,n,e)||$g(Rn.styles,n,e)}const Lw=new IO,PO=()=>{ce.autoReplaceSvg=!1,ce.observeMutations=!1,ks("noAuto")},CO={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mr?(ks("beforeI2svg",t),ts("pseudoElements2svg",t),ts("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;ce.autoReplaceSvg===!1&&(ce.autoReplaceSvg=!0),ce.observeMutations=!0,cO(()=>{DO({autoReplaceSvgRoot:e}),ks("watch",t)})}},RO={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:vs(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=wc(t[0]);return{prefix:n,iconName:vs(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(ce.cssPrefix,"-"))>-1||t.match(Kx))){const e=bc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||es(),iconName:vs(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=es();return{prefix:e,iconName:vs(e,t)||t}}}},en={noAuto:PO,config:ce,dom:CO,parse:RO,library:Lw,findIconDefinition:vh,toHtml:la},DO=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Qe}=t;(Object.keys(Rn.styles).length>0||ce.autoFetchSvg)&&mr&&ce.autoReplaceSvg&&en.dom.i2svg({node:e})};function Tc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>la(n))}}),Object.defineProperty(t,"node",{get:function(){if(!mr)return;const n=Qe.createElement("div");return n.innerHTML=t.html,n.children}}),t}function kO(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(Qd(o)&&n.found&&!r.found){const{width:l,height:c}=n,u={x:l/c/2,y:.5};s.style=Ec(Q(Q({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function xO(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(ce.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Q(Q({},s),{},{id:o}),children:r}]}]}function Zd(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:l,maskId:c,titleId:u,extra:h,watchable:f=!1}=t,{width:p,height:_}=n.found?n:e,D=xx.includes(r),N=[ce.replacementClass,s?"".concat(ce.cssPrefix,"-").concat(s):""].filter($=>h.classes.indexOf($)===-1).filter($=>$!==""||!!$).concat(h.classes).join(" ");let L={children:[],attributes:Q(Q({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:N,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(_)})};const O=D&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/_*16*.0625,"em")}:{};f&&(L.attributes[Ds]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(u||Uo())},children:[l]}),delete L.attributes.title);const x=Q(Q({},L),{},{prefix:r,iconName:s,main:e,mask:n,maskId:c,transform:i,symbol:o,styles:Q(Q({},O),h.styles)}),{children:k,attributes:F}=n.found&&e.found?ts("generateAbstractMask",x)||{children:[],attributes:{}}:ts("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=k,x.attributes=F,o?xO(x):kO(x)}function Hg(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:l=!1}=t,c=Q(Q(Q({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Ds]="");const u=Q({},o.styles);Qd(s)&&(u.transform=oO({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=Ec(u);h.length>0&&(c.style=h);const f=[];return f.push({tag:"span",attributes:c,children:[e]}),i&&f.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),f}function OO(t){const{content:e,title:n,extra:r}=t,s=Q(Q(Q({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ec(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:_u}=Rn;function Eh(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(ce.cssPrefix,"-").concat(pu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ce.cssPrefix,"-").concat(pu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(ce.cssPrefix,"-").concat(pu.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const NO={found:!1,width:512,height:512};function VO(t,e){!Ew&&!ce.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function wh(t,e){let n=e;return e==="fa"&&ce.styleDefault!==null&&(e=es()),new Promise((r,s)=>{if(n==="fa"){const i=Vw(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&_u[e]&&_u[e][t]){const i=_u[e][t];return r(Eh(i))}VO(t,e),r(Q(Q({},NO),{},{icon:ce.showMissingIcons&&t?ts("missingIconAbstract")||{}:{}}))})}const qg=()=>{},bh=ce.measurePerformance&&La&&La.mark&&La.measure?La:{mark:qg,measure:qg},Zi='FA "6.7.2"',MO=t=>(bh.mark("".concat(Zi," ").concat(t," begins")),()=>Fw(t)),Fw=t=>{bh.mark("".concat(Zi," ").concat(t," ends")),bh.measure("".concat(Zi," ").concat(t),"".concat(Zi," ").concat(t," begins"),"".concat(Zi," ").concat(t," ends"))};var ef={begin:MO,end:Fw};const Za=()=>{};function zg(t){return typeof(t.getAttribute?t.getAttribute(Ds):null)=="string"}function LO(t){const e=t.getAttribute?t.getAttribute(Wd):null,n=t.getAttribute?t.getAttribute(Gd):null;return e&&n}function FO(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ce.replacementClass)}function $O(){return ce.autoReplaceSvg===!0?el.replace:el[ce.autoReplaceSvg]||el.replace}function UO(t){return Qe.createElementNS("http://www.w3.org/2000/svg",t)}function BO(t){return Qe.createElement(t)}function $w(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?UO:BO}=e;if(typeof t=="string")return Qe.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild($w(i,{ceFn:n}))}),r}function jO(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const el={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore($w(n),e)}),e.getAttribute(Ds)===null&&ce.keepOriginalSource){let n=Qe.createComment(jO(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Yd(e).indexOf(ce.replacementClass))return el.replace(t);const r=new RegExp("".concat(ce.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,l)=>(l===ce.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>la(i)).join(`
`);e.setAttribute(Ds,""),e.innerHTML=s}};function Wg(t){t()}function Uw(t,e){const n=typeof e=="function"?e:Za;if(t.length===0)n();else{let r=Wg;ce.mutateApproach===zx&&(r=Zr.requestAnimationFrame||Wg),r(()=>{const s=$O(),i=ef.begin("mutate");t.map(s),i(),n()})}}let tf=!1;function Bw(){tf=!0}function Th(){tf=!1}let kl=null;function Gg(t){if(!Og||!ce.observeMutations)return;const{treeCallback:e=Za,nodeCallback:n=Za,pseudoElementsCallback:r=Za,observeMutationsRoot:s=Qe}=t;kl=new Og(i=>{if(tf)return;const o=es();Pi(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!zg(l.addedNodes[0])&&(ce.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&ce.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&zg(l.target)&&~Xx.indexOf(l.attributeName))if(l.attributeName==="class"&&LO(l.target)){const{prefix:c,iconName:u}=bc(Yd(l.target));l.target.setAttribute(Wd,c||o),u&&l.target.setAttribute(Gd,u)}else FO(l.target)&&n(l.target)})}),mr&&kl.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function HO(){kl&&kl.disconnect()}function qO(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function zO(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=bc(Yd(t));return s.prefix||(s.prefix=es()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=gO(s.prefix,t.innerText)||Jd(s.prefix,gh(t.innerText))),!s.iconName&&ce.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function WO(t){const e=Pi(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ce.autoA11y&&(n?e["aria-labelledby"]="".concat(ce.replacementClass,"-title-").concat(r||Uo()):(e["aria-hidden"]="true",e.focusable="false")),e}function GO(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Cn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Kg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=zO(t),i=WO(t),o=yh("parseNodeAttributes",{},t);let l=e.styleParser?qO(t):[];return Q({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Cn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:i}},o)}const{styles:KO}=Rn;function jw(t){const e=ce.autoReplaceSvg==="nest"?Kg(t,{styleParser:!1}):Kg(t);return~e.extra.classes.indexOf(bw)?ts("generateLayersText",t,e):ts("generateSvgReplacementMutation",t,e)}function YO(){return[...Rx,...uh]}function Yg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!mr)return Promise.resolve();const n=Qe.documentElement.classList,r=h=>n.add("".concat(Mg,"-").concat(h)),s=h=>n.remove("".concat(Mg,"-").concat(h)),i=ce.autoFetchSvg?YO():mw.concat(Object.keys(KO));i.includes("fa")||i.push("fa");const o=[".".concat(bw,":not([").concat(Ds,"])")].concat(i.map(h=>".".concat(h,":not([").concat(Ds,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=Pi(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),s("complete");else return Promise.resolve();const c=ef.begin("onTree"),u=l.reduce((h,f)=>{try{const p=jw(f);p&&h.push(p)}catch(p){Ew||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise((h,f)=>{Promise.all(u).then(p=>{Uw(p,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),h()})}).catch(p=>{c(),f(p)})})}function QO(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jw(t).then(n=>{n&&Uw([n],e)})}function XO(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:vh(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:vh(s||{})),t(r,Q(Q({},n),{},{mask:s}))}}const JO=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Cn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:l=null,classes:c=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:f,iconName:p,icon:_}=t;return Tc(Q({type:"icon"},t),()=>(ks("beforeDOMElementCreation",{iconDefinition:t,params:e}),ce.autoA11y&&(o?u["aria-labelledby"]="".concat(ce.replacementClass,"-title-").concat(l||Uo()):(u["aria-hidden"]="true",u.focusable="false")),Zd({icons:{main:Eh(_),mask:s?Eh(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:p,transform:Q(Q({},Cn),n),symbol:r,title:o,maskId:i,titleId:l,extra:{attributes:u,styles:h,classes:c}})))};var ZO={mixout(){return{icon:XO(JO)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Yg,t.nodeCallback=QO,t}}},provides(t){t.i2svg=function(e){const{node:n=Qe,callback:r=()=>{}}=e;return Yg(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:l,symbol:c,mask:u,maskId:h,extra:f}=n;return new Promise((p,_)=>{Promise.all([wh(r,o),u.iconName?wh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(D=>{let[N,L]=D;p([e,Zd({icons:{main:N,mask:L},prefix:o,iconName:r,transform:l,symbol:c,maskId:h,title:s,titleId:i,extra:f,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const l=Ec(o);l.length>0&&(r.style=l);let c;return Qd(i)&&(c=ts("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(c||s.icon),{children:n,attributes:r}}}},eN={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Tc({type:"layer"},()=>{ks("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ce.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},tN={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return Tc({type:"counter",content:t},()=>(ks("beforeDOMElementCreation",{content:t,params:e}),OO({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(ce.cssPrefix,"-layers-counter"),...r]}})))}}}},nN={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Cn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return Tc({type:"text",content:t},()=>(ks("beforeDOMElementCreation",{content:t,params:e}),Hg({content:t,transform:Q(Q({},Cn),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(ce.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,l=null;if(fw){const c=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/c,l=u.height/c}return ce.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Hg({content:e.innerHTML,width:o,height:l,transform:s,title:r,extra:i,watchable:!0})])}}};const rN=new RegExp('"',"ug"),Qg=[1105920,1112319],Xg=Q(Q(Q(Q({},{FontAwesome:{normal:"fas",400:"fas"}}),Sx),Hx),Mx),Ih=Object.keys(Xg).reduce((t,e)=>(t[e.toLowerCase()]=Xg[e],t),{}),sN=Object.keys(Ih).reduce((t,e)=>{const n=Ih[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function iN(t){const e=t.replace(rN,""),n=hO(e,0),r=n>=Qg[0]&&n<=Qg[1],s=e.length===2?e[0]===e[1]:!1;return{value:gh(s?e[0]:e),isSecondary:r||s}}function oN(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Ih[n]||{})[s]||sN[n]}function Jg(t,e){const n="".concat(qx).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=Pi(t.children).filter(p=>p.getAttribute(dh)===e)[0],l=Zr.getComputedStyle(t,e),c=l.getPropertyValue("font-family"),u=c.match(Yx),h=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&f!=="none"&&f!==""){const p=l.getPropertyValue("content");let _=oN(c,h);const{value:D,isSecondary:N}=iN(p),L=u[0].startsWith("FontAwesome");let O=Jd(_,D),x=O;if(L){const k=_O(D);k.iconName&&k.prefix&&(O=k.iconName,_=k.prefix)}if(O&&!N&&(!o||o.getAttribute(Wd)!==_||o.getAttribute(Gd)!==x)){t.setAttribute(n,x),o&&t.removeChild(o);const k=GO(),{extra:F}=k;F.attributes[dh]=e,wh(O,_).then($=>{const G=Zd(Q(Q({},k),{},{icons:{main:$,mask:Mw()},prefix:_,iconName:x,extra:F,watchable:!0})),b=Qe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(b,t.firstChild):t.appendChild(b),b.outerHTML=G.map(w=>la(w)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function aN(t){return Promise.all([Jg(t,"::before"),Jg(t,"::after")])}function lN(t){return t.parentNode!==document.head&&!~Wx.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(dh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Zg(t){if(mr)return new Promise((e,n)=>{const r=Pi(t.querySelectorAll("*")).filter(lN).map(aN),s=ef.begin("searchPseudoElements");Bw(),Promise.all(r).then(()=>{s(),Th(),e()}).catch(()=>{s(),Th(),n()})})}var cN={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Zg,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Qe}=e;ce.searchPseudoElements&&Zg(n)}}};let e_=!1;var uN={mixout(){return{dom:{unwatch(){Bw(),e_=!0}}}},hooks(){return{bootstrap(){Gg(yh("mutationObserverCallbacks",{}))},noAuto(){HO()},watch(t){const{observeMutationsRoot:e}=t;e_?Th():Gg(yh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const t_=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var hN={mixout(){return{parse:{transform:t=>t_(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=t_(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:h,path:f};return{tag:"g",attributes:Q({},p.outer),children:[{tag:"g",attributes:Q({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:Q(Q({},n.icon.attributes),p.path)}]}]}}}};const yu={x:0,y:0,width:"100%",height:"100%"};function n_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function dN(t){return t.tag==="g"?t.children:[t]}var fN={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?bc(n.split(" ").map(s=>s.trim())):Mw();return r.prefix||(r.prefix=es()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:l}=e;const{width:c,icon:u}=s,{width:h,icon:f}=i,p=iO({transform:l,containerWidth:h,iconWidth:c}),_={tag:"rect",attributes:Q(Q({},yu),{},{fill:"white"})},D=u.children?{children:u.children.map(n_)}:{},N={tag:"g",attributes:Q({},p.inner),children:[n_(Q({tag:u.tag,attributes:Q(Q({},u.attributes),p.path)},D))]},L={tag:"g",attributes:Q({},p.outer),children:[N]},O="mask-".concat(o||Uo()),x="clip-".concat(o||Uo()),k={tag:"mask",attributes:Q(Q({},yu),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,L]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:dN(f)},k]};return n.push(F,{tag:"rect",attributes:Q({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(O,")")},yu)}),{children:n,attributes:r}}}},pN={provides(t){let e=!1;Zr.matchMedia&&(e=Zr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:Q(Q({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=Q(Q({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:Q(Q({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:Q(Q({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Q(Q({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:Q(Q({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:Q(Q({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:Q(Q({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Q(Q({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},mN={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},gN=[lO,ZO,eN,tN,nN,cN,uN,hN,fN,pN,mN];SO(gN,{mixoutsTo:en});en.noAuto;en.config;const _N=en.library;en.dom;const Ah=en.parse;en.findIconDefinition;en.toHtml;const yN=en.icon;en.layer;en.text;en.counter;function r_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Qn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?r_(Object(n),!0).forEach(function(r){Ht(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function vN(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function EN(t){var e=vN(t,"string");return typeof e=="symbol"?e:e+""}function xl(t){"@babel/helpers - typeof";return xl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xl(t)}function Ht(t,e,n){return e=EN(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wN(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function bN(t,e){if(t==null)return{};var n=wN(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var TN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Hw={exports:{}};(function(t){(function(e){var n=function(O,x,k){if(!u(x)||f(x)||p(x)||_(x)||c(x))return x;var F,$=0,G=0;if(h(x))for(F=[],G=x.length;$<G;$++)F.push(n(O,x[$],k));else{F={};for(var b in x)Object.prototype.hasOwnProperty.call(x,b)&&(F[O(b,k)]=n(O,x[b],k))}return F},r=function(O,x){x=x||{};var k=x.separator||"_",F=x.split||/(?=[A-Z])/;return O.split(F).join(k)},s=function(O){return D(O)?O:(O=O.replace(/[\-_\s]+(.)?/g,function(x,k){return k?k.toUpperCase():""}),O.substr(0,1).toLowerCase()+O.substr(1))},i=function(O){var x=s(O);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(O,x){return r(O,x).toLowerCase()},l=Object.prototype.toString,c=function(O){return typeof O=="function"},u=function(O){return O===Object(O)},h=function(O){return l.call(O)=="[object Array]"},f=function(O){return l.call(O)=="[object Date]"},p=function(O){return l.call(O)=="[object RegExp]"},_=function(O){return l.call(O)=="[object Boolean]"},D=function(O){return O=O-0,O===O},N=function(O,x){var k=x&&"process"in x?x.process:x;return typeof k!="function"?O:function(F,$){return k(F,O,$)}},L={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(O,x){return n(N(s,x),O)},decamelizeKeys:function(O,x){return n(N(o,x),O,x)},pascalizeKeys:function(O,x){return n(N(i,x),O)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=L:e.humps=L})(TN)})(Hw);var IN=Hw.exports,AN=["class","style"];function SN(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=IN.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function PN(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function qw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return qw(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,u){var h=t.attributes[u];switch(u){case"class":c.class=PN(h);break;case"style":c.style=SN(h);break;default:c.attrs[u]=h}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,l=bN(n,AN);return oi(t.tag,Qn(Qn(Qn({},e),{},{class:s.class,style:Qn(Qn({},s.style),o)},s.attrs),l),r)}var zw=!1;try{zw=!0}catch{}function CN(){if(!zw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function vu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ht({},t,e):{}}function RN(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Ht(Ht(Ht(Ht(Ht(Ht(Ht(Ht(Ht(Ht(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Ht(Ht(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function s_(t){if(t&&xl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ah.icon)return Ah.icon(t);if(t===null)return null;if(xl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var an=Bh({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=He(function(){return s_(e.icon)}),i=He(function(){return vu("classes",RN(e))}),o=He(function(){return vu("transform",typeof e.transform=="string"?Ah.transform(e.transform):e.transform)}),l=He(function(){return vu("mask",s_(e.mask))}),c=He(function(){return yN(s.value,Qn(Qn(Qn(Qn({},i.value),o.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});ht(c,function(h){if(!h)return CN("Could not find one or more icon(s)",s.value,l.value)},{immediate:!0});var u=He(function(){return c.value?qw(c.value.abstract[0],{},r):null});return function(){return u.value}}});const DN=["dir"],kN={class:"modal-title"},xN={class:"form-group"},ON={class:"form-group"},NN={class:"form-group"},VN={value:"male"},MN={value:"female"},LN={key:0,class:"pregnancy-section"},FN={class:"form-group checkbox-group"},$N={key:0,class:"form-group"},UN={class:"form-group"},BN={class:"form-group"},jN={class:"modal-actions"},HN=["disabled"],qN={__name:"PatientFormModal",props:{show:Boolean,patient:Object,isSaving:Boolean},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=Be("currentLanguage"),i=hr({id:null,name:"",birthDate:"",gender:"male",isPregnant:!1,estimatedDueDate:"",medicalHistory:"",allergies:""});ht(()=>n.show,l=>{l&&(n.patient?(i.id=n.patient.id,i.name=n.patient.name,i.gender=n.patient.gender,i.isPregnant=n.patient.isPregnant||!1,i.birthDate=n.patient.birthDate?.toDate?n.patient.birthDate.toDate().toISOString().split("T")[0]:"",i.estimatedDueDate=n.patient.estimatedDueDate?.toDate?n.patient.estimatedDueDate.toDate().toISOString().split("T")[0]:"",i.medicalHistory=Array.isArray(n.patient.medicalHistory)?n.patient.medicalHistory.join(", "):"",i.allergies=Array.isArray(n.patient.allergies)?n.patient.allergies.join(", "):""):Object.assign(i,{id:null,name:"",birthDate:"",gender:"male",isPregnant:!1,estimatedDueDate:"",medicalHistory:"",allergies:""}))},{immediate:!0}),ht(()=>i.isPregnant,l=>{l||(i.estimatedDueDate="")});const o=()=>{if(!i.name||!i.birthDate){alert("Name and Date of Birth are required.");return}if(i.isPregnant&&!i.estimatedDueDate){alert("Please provide the estimated due date for the pregnancy.");return}(i.gender==="male"||!i.isPregnant)&&(i.isPregnant=!1,i.estimatedDueDate=null);const l={...i,birthDate:new Date(i.birthDate),estimatedDueDate:i.estimatedDueDate?new Date(i.estimatedDueDate):null,medicalHistory:i.medicalHistory.split(",").map(c=>c.trim()).filter(Boolean),allergies:i.allergies.split(",").map(c=>c.trim()).filter(Boolean)};r("save",l)};return(l,c)=>(K(),$n(ns,{name:"modal-fade"},{default:Ln(()=>[t.show?(K(),X("div",{key:0,class:"modal-overlay",onClick:c[9]||(c[9]=nt(u=>l.$emit("close"),["self"]))},[g("div",{class:"modal-content",dir:v(s)==="ar"?"rtl":"ltr"},[g("button",{onClick:c[0]||(c[0]=u=>l.$emit("close")),class:"close-button"},"×"),g("h3",kN,C(t.patient?"Edit Patient":"Add New Patient"),1),g("form",{onSubmit:nt(o,["prevent"]),class:"patient-form"},[g("div",xN,[g("label",null,C(v(s)==="en"?"Name":"الاسم"),1),ye(g("input",{type:"text","onUpdate:modelValue":c[1]||(c[1]=u=>i.name=u),required:""},null,512),[[Oe,i.name]])]),g("div",ON,[g("label",null,C(v(s)==="en"?"Date of Birth":"تاريخ الميلاد"),1),ye(g("input",{type:"date","onUpdate:modelValue":c[2]||(c[2]=u=>i.birthDate=u),required:""},null,512),[[Oe,i.birthDate]])]),g("div",NN,[g("label",null,C(v(s)==="en"?"Gender":"الجنس"),1),ye(g("select",{"onUpdate:modelValue":c[3]||(c[3]=u=>i.gender=u)},[g("option",VN,C(v(s)==="en"?"Male":"ذكر"),1),g("option",MN,C(v(s)==="en"?"Female":"أنثى"),1)],512),[[sr,i.gender]])]),i.gender==="female"?(K(),X("div",LN,[g("div",FN,[g("label",null,[ye(g("input",{type:"checkbox","onUpdate:modelValue":c[4]||(c[4]=u=>i.isPregnant=u)},null,512),[[Gl,i.isPregnant]]),g("span",null,C(v(s)==="en"?"Currently Pregnant?":"هل هي حامل حاليًا؟"),1)])]),i.isPregnant?(K(),X("div",$N,[g("label",null,C(v(s)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع"),1),ye(g("input",{type:"date","onUpdate:modelValue":c[5]||(c[5]=u=>i.estimatedDueDate=u),required:""},null,512),[[Oe,i.estimatedDueDate]])])):Ie("",!0)])):Ie("",!0),g("div",UN,[g("label",null,C(v(s)==="en"?"Medical History (comma-separated)":"التاريخ الطبي"),1),ye(g("textarea",{"onUpdate:modelValue":c[6]||(c[6]=u=>i.medicalHistory=u),rows:"3"},null,512),[[Oe,i.medicalHistory]])]),g("div",BN,[g("label",null,C(v(s)==="en"?"Allergies (comma-separated)":"الحساسية"),1),ye(g("textarea",{"onUpdate:modelValue":c[7]||(c[7]=u=>i.allergies=u),rows:"3"},null,512),[[Oe,i.allergies]])]),g("div",jN,[g("button",{type:"submit",class:"action-button",disabled:t.isSaving},C(t.isSaving?"Saving...":"Save"),9,HN),g("button",{type:"button",onClick:c[8]||(c[8]=u=>l.$emit("close")),class:"action-button secondary"}," Cancel ")])],32)],8,DN)])):Ie("",!0)]),_:1}))}},zN=It(qN,[["__scopeId","data-v-6c2953db"]]),WN=["dir"],GN={key:0,class:"patient-context-display"},KN={key:0,class:"form-row pregnancy-section"},YN={class:"form-group checkbox-group"},QN={class:"form-group"},XN={key:0},JN={class:"form-row"},ZN={class:"form-group"},e4={value:"X-ray"},t4={value:"CT"},n4={class:"form-group"},r4={class:"form-row"},s4={class:"form-group"},i4={class:"form-group"},o4={class:"form-group"},a4={class:"form-group"},l4={class:"form-group"},c4={class:"modal-actions"},u4=["disabled"],h4={__name:"ScanFormModal",props:{show:Boolean,scan:Object,isSaving:Boolean,patient:{type:Object,default:null}},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=Be("currentLanguage"),i=hr({id:null,isPregnant:!1,pregnancyMonth:null,scanType:"X-ray",scanDate:"",dose:null,doctorDose:null,reason:"",notes:"",doctorAdditionalContext:""});ht(()=>n.show,c=>{if(c&&(Object.assign(i,{id:null,isPregnant:!1,pregnancyMonth:null,scanType:"X-ray",scanDate:"",dose:null,doctorDose:null,reason:"",notes:"",doctorAdditionalContext:""}),n.scan)){i.id=n.scan.id,i.isPregnant=n.scan.isPregnant||!1,i.pregnancyMonth=n.scan.pregnancyMonth||null,i.scanType=n.scan.scanType;const u=n.scan.scanDate?.toDate?n.scan.scanDate.toDate():new Date(n.scan.scanDate);i.scanDate=u.toISOString().split("T")[0]||"",i.dose=n.scan.dose,i.doctorDose=n.scan.doctorDose,i.reason=n.scan.reason,i.notes=n.scan.notes,i.doctorAdditionalContext=n.scan.doctorAdditionalContext}}),ht(()=>i.isPregnant,c=>{c||(i.pregnancyMonth=null)});const o=async c=>{let u="",h={};c==="patient"?i.scanType==="CT"?(u=`Estimate the typical effective dose (in mSv) for a patient undergoing a single diagnostic CT scan. Context: Age: ${n.patient?.age||"N/A"}, Reason: ${i.reason||"Not provided"}. IMPORTANT: The plausible range for a single diagnostic CT is 1-30 mSv. Respond ONLY with a number in this range.`,h={min:.5,max:40}):(u=`Estimate the typical effective dose (in mSv) for a patient undergoing a single diagnostic X-ray. Context: Age: ${n.patient?.age||"N/A"}, Reason: ${i.reason||"Not provided"}. IMPORTANT: The plausible range for a single diagnostic X-ray is 0.01-5 mSv. Respond ONLY with a number in this range.`,h={min:.001,max:10}):c==="doctor"&&(u=`Estimate the typical occupational dose (in mSv) for a doctor during a patient's ${i.scanType} scan. Context: ${i.doctorAdditionalContext||"No shielding or distance context provided."} IMPORTANT: Occupational dose is a small fraction of the patient dose, typically under 0.5 mSv. Respond ONLY with a number.`,h={min:0,max:2});try{const D=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB9KAR0P6sxAj7fP2I-MyVSVOJJaW0J91M",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:u}]}],generationConfig:{responseMimeType:"text/plain"}})});if(!D.ok)throw new Error(`API Error: ${D.statusText}`);const L=(await D.json()).candidates?.[0]?.content?.parts?.[0]?.text||"",O=parseFloat(L.match(/[\d.]+/));if(isNaN(O))throw new Error("AI did not return a valid number.");if(O<h.min||O>h.max)throw new Error(`AI returned an out-of-range value: ${O}. Expected between ${h.min} and ${h.max}.`);return c==="patient"?i.dose=O:c==="doctor"&&(i.doctorDose=O),!0}catch(f){return console.error(`Dose estimation failed for ${c}:`,f),alert(s.value==="en"?`The AI returned an unlikely value for the ${c} dose. Please review and enter it manually.`:`أعاد الذكاء الاصطناعي قيمة غير محتملة لجرعة ${c==="patient"?"المريض":"الطبيب"}. يرجى مراجعتها وإدخالها يدويًا.`),!1}},l=async()=>{if(!i.scanDate){alert(s.value==="en"?"Please provide the scan date.":"يرجى إدخال تاريخ الفحص.");return}if(n.patient&&(i.dose===null||i.dose==="")&&!await o("patient")||(i.doctorDose===null||i.doctorDose==="")&&!await o("doctor"))return;const c={...i,patientId:n.patient?.id};r("save",c)};return(c,u)=>(K(),$n(ns,{name:"modal-fade"},{default:Ln(()=>[t.show?(K(),X("div",{key:0,class:"modal-overlay",onClick:u[11]||(u[11]=nt(h=>c.$emit("close"),["self"]))},[g("div",{class:"modal-content",dir:v(s)==="ar"?"rtl":"ltr"},[g("button",{class:"close-modal-button",onClick:u[0]||(u[0]=h=>c.$emit("close"))},"×"),g("h3",null,C(t.scan?v(s)==="en"?"Edit Scan Record":"تعديل سجل الفحص":v(s)==="en"?"Add New Scan Record":"إضافة سجل فحص جديد"),1),t.patient?(K(),X("div",GN,[zt(C(v(s)==="en"?"For Patient":"للمريض")+": ",1),g("strong",null,C(t.patient.name),1)])):Ie("",!0),g("form",{onSubmit:nt(l,["prevent"]),class:"scan-form"},[t.patient?.gender==="female"?(K(),X("div",KN,[g("div",YN,[g("label",null,[ye(g("input",{type:"checkbox","onUpdate:modelValue":u[1]||(u[1]=h=>i.isPregnant=h)},null,512),[[Gl,i.isPregnant]]),g("span",null,C(v(s)==="en"?"Is Pregnant?":"هل المريضة حامل؟"),1)])]),g("div",QN,[i.isPregnant?(K(),X("label",XN,C(v(s)==="en"?"Month of Pregnancy":"شهر الحمل"),1)):Ie("",!0),i.isPregnant?ye((K(),X("input",{key:1,type:"number","onUpdate:modelValue":u[2]||(u[2]=h=>i.pregnancyMonth=h),min:"1",max:"9",placeholder:"1-9"},null,512)),[[Oe,i.pregnancyMonth]]):Ie("",!0)])])):Ie("",!0),g("div",JN,[g("div",ZN,[g("label",null,C(v(s)==="en"?"Scan Type":"نوع الفحص"),1),ye(g("select",{"onUpdate:modelValue":u[3]||(u[3]=h=>i.scanType=h),required:""},[g("option",e4,C(v(s)==="en"?"X-ray":"أشعة سينية"),1),g("option",t4,C(v(s)==="en"?"CT":"أشعة مقطعية"),1)],512),[[sr,i.scanType]])]),g("div",n4,[g("label",null,C(v(s)==="en"?"Scan Date":"تاريخ الفحص"),1),ye(g("input",{type:"date","onUpdate:modelValue":u[4]||(u[4]=h=>i.scanDate=h),required:""},null,512),[[Oe,i.scanDate]])])]),g("div",r4,[g("div",s4,[g("label",null,C(v(s)==="en"?"Patient's Dose (mSv)":"جرعة المريض (mSv)"),1),ye(g("input",{type:"number",step:"0.01","onUpdate:modelValue":u[5]||(u[5]=h=>i.dose=h)},null,512),[[Oe,i.dose]])]),g("div",i4,[g("label",null,C(v(s)==="en"?"Doctor's Dose (mSv)":"جرعة الطبيب (mSv)"),1),ye(g("input",{type:"number",step:"0.01","onUpdate:modelValue":u[6]||(u[6]=h=>i.doctorDose=h)},null,512),[[Oe,i.doctorDose]])])]),g("div",o4,[g("label",null,C(v(s)==="en"?"Reason for Scan":"أسباب الفحص"),1),ye(g("textarea",{"onUpdate:modelValue":u[7]||(u[7]=h=>i.reason=h),rows:"2"},null,512),[[Oe,i.reason]])]),g("div",a4,[g("label",null,C(v(s)==="en"?"Additional Notes":"ملاحظات إضافية"),1),ye(g("textarea",{"onUpdate:modelValue":u[8]||(u[8]=h=>i.notes=h),rows:"3"},null,512),[[Oe,i.notes]])]),g("div",l4,[g("label",null,C(v(s)==="en"?"Additional details affecting your exposure (optional)":"تفاصيل إضافية على تعرضك (اختياري)"),1),ye(g("textarea",{"onUpdate:modelValue":u[9]||(u[9]=h=>i.doctorAdditionalContext=h),rows:"2"},null,512),[[Oe,i.doctorAdditionalContext]])]),g("div",c4,[g("button",{type:"submit",class:"action-button",disabled:t.isSaving},C(t.isSaving?v(s)==="en"?"Saving...":"جار الحفظ...":v(s)==="en"?"Save":"حفظ"),9,u4),g("button",{type:"button",onClick:u[10]||(u[10]=h=>c.$emit("close")),class:"action-button secondary"},C(v(s)==="en"?"Cancel":"إلغاء"),1)])],32)],8,WN)])):Ie("",!0)]),_:1}))}},d4=It(h4,[["__scopeId","data-v-311e28f2"]]),f4={class:"modal-content delete-confirm-modal"},p4={class:"modal-title"},m4={class:"warning-text"},g4={class:"modal-actions"},_4={__name:"ConfirmDeleteModal",props:{show:Boolean,title:String,message:String},emits:["close","confirm"],setup(t){const e=Be("currentLanguage");return(n,r)=>(K(),$n(ns,{name:"modal-fade"},{default:Ln(()=>[t.show?(K(),X("div",{key:0,class:"modal-overlay",onClick:r[2]||(r[2]=nt(s=>n.$emit("close"),["self"]))},[g("div",f4,[g("h3",p4,C(t.title),1),g("p",null,C(t.message),1),g("p",m4,C(v(e)==="en"?"This action cannot be undone.":"لا يمكن التراجع عن هذا الإجراء."),1),g("div",g4,[g("button",{onClick:r[0]||(r[0]=s=>n.$emit("close")),class:"action-button secondary"},C(v(e)==="en"?"Cancel":"إلغاء"),1),g("button",{onClick:r[1]||(r[1]=s=>n.$emit("confirm")),class:"action-button delete-button-confirm"},C(v(e)==="en"?"Delete":"حذف"),1)])])])):Ie("",!0)]),_:1}))}},nf=It(_4,[["__scopeId","data-v-d4f21fbe"]]),y4=["dir"],v4={key:0},E4={class:"scans-list-container"},w4={key:0,class:"loading-message"},b4={key:1,class:"no-scans-message"},T4={key:2,class:"scans-list"},I4={class:"scan-info"},A4={class:"scan-type"},S4={class:"scan-date"},P4={class:"scan-dose"},C4={class:"scan-actions"},R4=["onClick"],D4=["onClick"],k4={__name:"PatientDetailsModal",props:{show:Boolean,patient:Object},emits:["close"],setup(t,{emit:e}){const n=t,r=Ls(),s=Be("currentLanguage"),i=Be("triggerMsvRecalculation"),o=Te([]),l=Te(null),c=Te(null),u=Te(!1),h=Te(!1),f=He(()=>n.patient?.id),p=async()=>{if(!f.value){o.value=[];return}const k=await r.fetchScansForPatient(f.value);k&&(o.value=k)};ht(()=>n.show,k=>{k&&f.value&&p()});const _=async k=>{const{id:F,patientId:$,isPregnant:G,pregnancyMonth:b,scanType:w,scanDate:E,dose:A,doctorDose:R,reason:P,notes:T,doctorAdditionalContext:Me}=k,Xe={patientId:$,isPregnant:G,pregnancyMonth:b,scanType:w,scanDate:E,patientDose:A,doctorDose:R,reason:P,notes:T,doctorAdditionalContext:Me};let Ne=!1;F?Ne=await r.updateScan(F,Xe):Ne=await r.createScan(Xe),Ne?(u.value=!1,await p(),i&&i()):alert(`${s.value==="en"?"Error saving patient scan:":"خطأ في حفظ فحص المريض:"} ${r.error}`)},D=async()=>{if(!c.value?.id)return;await r.deleteScan(c.value.id)?(h.value=!1,await p(),i&&i()):alert(`${s.value==="en"?"Error deleting scan:":"خطأ في حذف الفحص:"} ${r.error}`)};function N(){l.value=null,u.value=!0}function L(k){const F={...k,dose:k.patientDose};l.value=F,u.value=!0}function O(k){c.value=k,h.value=!0}const x=k=>!k||!k.toDate?"N/A":k.toDate().toLocaleDateString();return(k,F)=>(K(),X(xt,null,[Pe(ns,{name:"modal-fade"},{default:Ln(()=>[t.show?(K(),X("div",{key:0,class:"modal-overlay",onClick:F[1]||(F[1]=nt($=>k.$emit("close"),["self"]))},[g("div",{class:"modal-content-details",dir:v(s)==="ar"?"rtl":"ltr"},[g("button",{class:"close-modal-button",onClick:F[0]||(F[0]=$=>k.$emit("close"))},"×"),t.patient?(K(),X("div",v4,[g("h3",null,[zt(C(v(s)==="en"?"Scan History for":"سجل الفحوصات لـ")+" ",1),g("strong",null,C(t.patient.name),1)]),g("p",null,C(v(s)==="en"?"Review past scans or add a new record.":"مراجعة الفحوصات السابقة أو إضافة سجل جديد."),1),g("button",{onClick:N,class:"add-scan-button"},[Pe(v(an),{icon:"plus"}),zt(" "+C(v(s)==="en"?"Add New Scan":"إضافة فحص جديد"),1)]),g("div",E4,[v(r).loading?(K(),X("div",w4,[Pe(v(an),{icon:"spinner",spin:""}),zt(" "+C(v(s)==="en"?"Loading scans...":"جاري تحميل الفحوصات..."),1)])):o.value.length===0?(K(),X("div",b4,C(v(s)==="en"?"No scans recorded for this patient yet.":"لا توجد فحوصات مسجلة لهذا المريض بعد."),1)):(K(),X("ul",T4,[(K(!0),X(xt,null,Hh(o.value,$=>(K(),X("li",{key:$.id,class:"scan-item"},[g("div",I4,[g("span",A4,C($.scanType),1),g("span",S4,C(x($.scanDate)),1),g("span",P4,C(v(s)==="en"?"Dose:":"الجرعة:")+" "+C($.patientDose)+" mSv ",1)]),g("div",C4,[g("button",{onClick:G=>L($),class:"action-button-icon edit-button"},[Pe(v(an),{icon:"edit"})],8,R4),g("button",{onClick:G=>O($),class:"action-button-icon delete-button"},[Pe(v(an),{icon:"trash-alt"})],8,D4)])]))),128))]))])])):Ie("",!0)],8,y4)])):Ie("",!0)]),_:1}),Pe(d4,{show:u.value,patient:t.patient,scan:l.value,"is-saving":v(r).loading,onClose:F[2]||(F[2]=$=>u.value=!1),onSave:_},null,8,["show","patient","scan","is-saving"]),Pe(nf,{show:h.value,title:v(s)==="en"?"Delete Scan":"حذف الفحص",message:`${v(s)==="en"?"Are you sure you want to delete this scan from":"هل أنت متأكد من حذف هذا الفحص بتاريخ"} ${x(c.value?.scanDate)}?`,onClose:F[3]||(F[3]=$=>h.value=!1),onConfirm:D},null,8,["show","title","message"])],64))}},x4=It(k4,[["__scopeId","data-v-25dce0e9"]]),O4={class:"patient-list-page"},N4={class:"patient-list-main-content"},V4={class:"patient-list-card"},M4=["dir"],L4={key:0,class:"loading-message"},F4={key:1,class:"no-patients-message"},$4={key:2,class:"patient-table-container"},U4={class:"patient-table"},B4={class:"details-column"},j4={class:"details-column"},H4={class:"details-column"},q4={class:"details-column"},z4={class:"action-buttons-wrapper"},W4=["onClick","title"],G4=["onClick","title"],K4=["onClick","title"],Y4=["onClick","title"],Q4={class:"switch-link-container"},X4={__name:"PatientsView",setup(t){const e=Zt(),n=Ls(),r=Os(),s=Be("currentLanguage"),i=Te([]),o=Te(null),l=Te(null),c=Te(null),u=Te(!1),h=Te(!1),f=Te(!1),p=He(()=>e.user?.uid),_=async()=>{const $=await n.fetchPatientsForDoctor();$&&(i.value=$)},D=async $=>{const{id:G,...b}=$;let w=!1;G?w=await n.updatePatientProfile(G,b):w=!!await n.addNewPatient(b),w?(u.value=!1,await _()):alert(`Failed to save patient. Error: ${n.error}`)},N=async()=>{if(!o.value?.id)return;await n.deletePatientProfile(o.value.id)?(f.value=!1,await _()):alert(`Failed to delete patient. Error: ${n.error}`)};function L(){c.value=null,u.value=!0}function O($){c.value=$,u.value=!0}function x($){l.value=$,h.value=!0}function k($){o.value=$,f.value=!0}function F($){console.log(`Recommendation requested for patient ID: ${$}`),alert("Recommendation feature is not yet implemented.")}return ht(p,$=>{$&&_()},{immediate:!0}),($,G)=>(K(),X("div",O4,[g("div",N4,[g("div",V4,[g("h2",null,C(v(s)==="en"?"Manage Patients":"إدارة المرضى"),1),g("p",null,C(v(s)==="en"?"Add new patients or view existing records":"أضف مرضى جدد أو اطلع على السجلات الحالية."),1),g("button",{onClick:L,class:"add-new-patient-button"},C(v(s)==="en"?"Add New Patient":"إضافة مريض جديد"),1),g("div",{class:"patient-list-section",dir:v(s)==="ar"?"rtl":"ltr"},[g("h3",null,C(v(s)==="en"?"Existing Patients":"المرضى الحاليون"),1),v(n).loading?(K(),X("div",L4,[Pe(v(an),{icon:"spinner",spin:""}),zt(" "+C(v(s)==="en"?"Loading patients...":"جاري تحميل المرضى..."),1)])):!i.value||i.value.length===0?(K(),X("div",F4,C(v(s)==="en"?"No patients added yet.":"لم يتم إضافة أي مرضى بعد."),1)):(K(),X("div",$4,[g("table",U4,[g("thead",null,[g("tr",null,[g("th",null,C(v(s)==="en"?"Name":"الاسم"),1),g("th",null,C(v(s)==="en"?"Age":"العمر"),1),g("th",null,C(v(s)==="en"?"Gender":"الجنس"),1),g("th",B4,C(v(s)==="en"?"Medical History":"التاريخ الطبي"),1),g("th",j4,C(v(s)==="en"?"Allergies":"الحساسية"),1),g("th",null,C(v(s)==="en"?"Actions":"الإجراءات"),1)])]),g("tbody",null,[(K(!0),X(xt,null,Hh(i.value,b=>(K(),X("tr",{key:b.id},[g("td",null,C(b.name??"N/A"),1),g("td",null,C(b.age??"N/A"),1),g("td",null,C(v(s)==="en"?(b.gender?.charAt(0).toUpperCase()??"")+(b.gender?.slice(1)??"N/A"):b.gender==="male"?"ذكر":"أنثى"),1),g("td",H4,C(b.medicalHistory?.join(", ")||(v(s)==="en"?"None":"لا يوجد")),1),g("td",q4,C(b.allergies?.join(", ")||(v(s)==="en"?"None":"لا يوجد")),1),g("td",null,[g("div",z4,[g("button",{onClick:w=>x(b),class:"action-button-sm view-button",title:v(s)==="en"?"View Scan History":"عرض سجل الفحوصات"},[Pe(v(an),{icon:"eye"})],8,W4),g("button",{onClick:w=>O(b),class:"action-button-sm edit-button",title:v(s)==="en"?"Edit Patient Details":"تعديل تفاصيل المريض"},[Pe(v(an),{icon:"edit"})],8,G4),g("button",{onClick:w=>k(b),class:"action-button-sm delete-button",title:v(s)==="en"?"Delete Patient":"حذف المريض"},[Pe(v(an),{icon:"trash-alt"})],8,K4),g("button",{onClick:w=>F(b.id),class:"action-button-sm recommend-button",title:v(s)==="en"?"Get Recommendation":"الحصول على توصية"},[Pe(v(an),{icon:"file-medical"})],8,Y4)])])]))),128))])])]))],8,M4),g("div",Q4,[g("a",{href:"#",onClick:G[0]||(G[0]=nt(b=>v(r).push("/dashboard"),["prevent"]))},C(v(s)==="en"?"Back to dashboard":"العودة إلى لوحة التحكم"),1)])])]),Pe(zN,{show:u.value,patient:c.value,"is-saving":v(n).loading,onClose:G[1]||(G[1]=b=>u.value=!1),onSave:D},null,8,["show","patient","is-saving"]),Pe(x4,{show:h.value,patient:l.value,onClose:G[2]||(G[2]=b=>h.value=!1)},null,8,["show","patient"]),Pe(nf,{show:f.value,title:v(s)==="en"?"Delete Patient":"حذف المريض",message:`${v(s)==="en"?"Are you sure you want to delete":"هل أنت متأكد من الحذف"} ${o.value?.name??"this patient"}?`,onClose:G[3]||(G[3]=b=>f.value=!1),onConfirm:N},null,8,["show","title","message"])]))}},J4=It(X4,[["__scopeId","data-v-b634b8b9"]]),Z4={key:0,class:"loading-container"},eV={key:0,class:"role-modal-backdrop"},tV={class:"role-modal"},nV={class:"form-group"},rV={value:"",disabled:""},sV={value:"doctor"},iV={value:"patient"},oV={class:"form-group"},aV={class:"form-group"},lV={value:"",disabled:""},cV={value:"male"},uV={value:"female"},hV={class:"form-group"},dV=["placeholder"],fV={class:"form-group"},pV=["placeholder"],mV=["disabled"],gV={key:1},_V={class:"dashboard-main-content"},yV={class:"dashboard-card"},vV=["dir"],EV=["dir"],wV={class:"dashboard-features"},bV=["dir"],TV=["dir"],IV=["dir"],AV=["dir"],SV=["dir"],PV=["dir"],CV={__name:"DashboardView",setup(t){const e=Zt(),n=Ls(),r=Os(),s=Te({role:null,birthDate:"",gender:"",allergies:"",medicalHistory:""}),i=He(()=>!e.isAuthReady),o=He(()=>e.isAuthReady?!e.isProfileComplete:!1),l=He(()=>e.role),c=Be("currentLanguage"),u=async()=>{const{uid:f,email:p,displayName:_}=e.user,{role:D,birthDate:N,gender:L,allergies:O,medicalHistory:x}=s.value;if(!D||!N||!L){alert("Please fill out all required fields: Role, Birth Date, and Gender.");return}const k={email:p,displayName:_,role:D,birthDate:Se.fromDate(new Date(N)),gender:L,allergies:O.split(",").map($=>$.trim()).filter(Boolean),medicalHistory:x.split(",").map($=>$.trim()).filter(Boolean)};await n.setUserProfile(f,k)?e.setUserProfile(k):alert(`Failed to save profile. Error: ${n.error}`)},h=async()=>{await e.logout(),r.push("/signin")};return(f,p)=>(K(),X("div",null,[i.value?(K(),X("div",Z4,[g("p",null,C(v(c)==="en"?"Verifying session...":"جار التحقق من الجلسة..."),1),Pe(v(an),{icon:"spinner",spin:"",size:"2x"})])):(K(),X(xt,{key:1},[o.value?(K(),X("div",eV,[g("div",tV,[g("h2",null,C(v(c)==="en"?"Complete Your Profile":"أكمل ملفك الشخصي"),1),g("div",nV,[g("label",null,C(v(c)==="en"?"I am a:":"أنا:"),1),ye(g("select",{"onUpdate:modelValue":p[0]||(p[0]=_=>s.value.role=_)},[g("option",rV,C(v(c)==="en"?"-- Select Role --":"-- اختر دورك --"),1),g("option",sV,C(v(c)==="en"?"Doctor":"طبيب"),1),g("option",iV,C(v(c)==="en"?"Patient":"مريض"),1)],512),[[sr,s.value.role]])]),g("div",oV,[g("label",null,C(v(c)==="en"?"Birth Date":"تاريخ الميلاد"),1),ye(g("input",{type:"date","onUpdate:modelValue":p[1]||(p[1]=_=>s.value.birthDate=_)},null,512),[[Oe,s.value.birthDate]])]),g("div",aV,[g("label",null,C(v(c)==="en"?"Gender":"الجنس"),1),ye(g("select",{"onUpdate:modelValue":p[2]||(p[2]=_=>s.value.gender=_)},[g("option",lV,C(v(c)==="en"?"-- Select Gender --":"-- اختر الجنس --"),1),g("option",cV,C(v(c)==="en"?"Male":"ذكر"),1),g("option",uV,C(v(c)==="en"?"Female":"أنثى"),1)],512),[[sr,s.value.gender]])]),g("div",hV,[g("label",null,C(v(c)==="en"?"Allergies (comma-separated)":"الحساسية (مفصولة بفاصلة)"),1),ye(g("textarea",{"onUpdate:modelValue":p[3]||(p[3]=_=>s.value.allergies=_),rows:"2",placeholder:v(c)==="en"?"e.g., Iodine-Based Dyes":"مثال: صبغات اليود"},null,8,dV),[[Oe,s.value.allergies]])]),g("div",fV,[g("label",null,C(v(c)==="en"?"Medical History (comma-separated)":"التاريخ الطبي (مفصول بفاصلة)"),1),ye(g("textarea",{"onUpdate:modelValue":p[4]||(p[4]=_=>s.value.medicalHistory=_),rows:"2",placeholder:v(c)==="en"?"e.g., Diabetes, Asthma":"مثال: مرض السكري, الربو"},null,8,pV),[[Oe,s.value.medicalHistory]])]),g("button",{class:"action-button",onClick:u,disabled:v(n).loading},[v(n).loading?(K(),$n(v(an),{key:0,icon:"spinner",spin:""})):(K(),X("span",gV,C(v(c)==="en"?"Save & Continue":"حفظ ومتابعة"),1))],8,mV)])])):Ie("",!0),g("div",{class:Ts(["dashboard-page dashboard-blur-area",{"is-blurred":o.value}])},[g("main",_V,[g("section",yV,[g("h2",{dir:v(c)==="ar"?"rtl":"ltr"},C(v(c)==="en"?"Welcome to mSv Dose Tracker":"مرحبًا بك في متتبع جرعات الأشعة السينية"),9,vV),g("p",{dir:v(c)==="ar"?"rtl":"ltr"},C(v(c)==="en"?"Your comprehensive tool for managing radiation exposure.":"أداتك الشاملة لإدارة التعرض للإشعاع."),9,EV),g("div",wV,[g("div",{class:"feature-item",onClick:p[5]||(p[5]=_=>v(r).push("/recommend"))},[p[8]||(p[8]=g("i",{class:"fas fa-file-medical"},null,-1)),g("h3",{dir:v(c)==="ar"?"rtl":"ltr"},C(v(c)==="en"?"Get Scan Recommendation":"الحصول على توصية"),9,bV),g("p",{dir:v(c)==="ar"?"rtl":"ltr"},C(v(c)==="en"?"Use AI to get recommendations on the necessity of radiological scans.":"استخدم الذكاء الاصطناعي للحصول على توصيات حول ضرورة الفحوصات الإشعاعية."),9,TV)]),l.value==="doctor"?(K(),X("div",{key:0,class:"feature-item",onClick:p[6]||(p[6]=_=>v(r).push("/patients"))},[p[9]||(p[9]=g("i",{class:"fas fa-users"},null,-1)),g("h3",{dir:v(c)==="ar"?"rtl":"ltr"},C(v(c)==="en"?"Manage Patients":"إدارة المرضى"),9,IV),g("p",{dir:v(c)==="ar"?"rtl":"ltr"},C(v(c)==="en"?"View, add, and manage your patient records and their scan histories.":"عرض وإضافة وإدارة سجلات مرضاك وتاريخ فحوصاتهم."),9,AV)])):Ie("",!0),g("div",{class:"feature-item",onClick:p[7]||(p[7]=_=>v(r).push("/profile"))},[p[10]||(p[10]=g("i",{class:"fas fa-user"},null,-1)),g("h3",{dir:v(c)==="ar"?"rtl":"ltr"},C(v(c)==="en"?"View Profile":"عرض الملف الشخصي"),9,SV),g("p",{dir:v(c)==="ar"?"rtl":"ltr"},C(v(c)==="en"?"Review your personal details and dose history.":"راجع معلوماتك الشخصية وسجل جرعاتك."),9,PV)])]),g("button",{onClick:h,class:"action-button secondary logout-button"},C(v(c)==="en"?"Logout":"تسجيل الخروج"),1)])])],2)],64))]))}},RV=It(CV,[["__scopeId","data-v-199f9956"]]),DV={class:"reset-password-page"},kV={class:"reset-password-main-content"},xV={class:"reset-password-card"},OV=["dir"],NV=["dir"],VV={class:"form-group"},MV=["dir"],LV=["placeholder","dir"],FV=["disabled"],$V={key:0},UV={key:1},BV=["dir"],jV=["dir"],HV=["dir"],qV={__name:"ResetPasswordView",setup(t){const e=Os(),n=Zt(),r=Be("currentLanguage"),s=Te(""),i=async()=>{await n.sendPasswordReset(s.value)},o=()=>{e.push("/signin")};return(l,c)=>(K(),X("div",DV,[g("main",kV,[g("section",xV,[g("h2",{dir:v(r)==="ar"?"rtl":"ltr"},C(v(r)==="en"?"Reset Your Password":"إعادة تعيين كلمة المرور"),9,OV),g("p",{dir:v(r)==="ar"?"rtl":"ltr"},C(v(r)==="en"?"Enter your email address to receive a password reset link.":"أدخل عنوان بريدك الإلكتروني لتلقي رابط إعادة تعيين كلمة المرور."),9,NV),g("form",{onSubmit:nt(i,["prevent"]),class:"reset-password-form"},[g("div",VV,[g("label",{for:"email",dir:v(r)==="ar"?"rtl":"ltr"},C(v(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,MV),ye(g("input",{type:"email",id:"email","onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),placeholder:v(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:v(r)==="ar"?"rtl":"ltr",required:""},null,8,LV),[[Oe,s.value]])]),g("button",{class:"action-button primary",type:"submit",disabled:v(n).loading},[v(n).loading?(K(),X("span",$V,C(v(r)==="en"?"Sending Link...":"جاري إرسال الرابط..."),1)):(K(),X("span",UV,C(v(r)==="en"?"Send Reset Link":"إرسال رابط إعادة التعيين"),1))],8,FV)],32),v(n).error?(K(),X("div",{key:0,class:"message error-message",dir:v(r)==="ar"?"rtl":"ltr"},C(v(n).error),9,BV)):Ie("",!0),v(n).successMessage?(K(),X("div",{key:1,class:"message success-message",dir:v(r)==="ar"?"rtl":"ltr"},C(v(n).successMessage),9,jV)):Ie("",!0),g("p",{class:"switch-link-container",dir:v(r)==="ar"?"rtl":"ltr"},[zt(C(v(r)==="en"?"Remembered your password?":"هل تذكرت كلمة المرور؟")+" ",1),g("a",{href:"#",onClick:nt(o,["prevent"])},C(v(r)==="en"?"Sign In":"تسجيل الدخول"),1)],8,HV)])])]))}},zV=It(qV,[["__scopeId","data-v-73a48bd7"]]),WV=["dir"],GV={class:"modal-title"},KV={class:"form-group"},YV={value:"doctor"},QV={value:"patient"},XV={class:"form-group"},JV={class:"form-group"},ZV={value:"male"},eM={value:"female"},tM={key:0,class:"pregnancy-section"},nM={class:"form-group checkbox-group"},rM={key:0,class:"form-group"},sM={class:"form-group"},iM={class:"form-group"},oM={class:"modal-actions"},aM={type:"submit",class:"action-button"},lM={__name:"ProfileFormModal",props:{show:Boolean,profileData:{type:Object,default:()=>null}},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=Be("currentLanguage"),i=hr({role:"",birthDate:"",gender:"male",isPregnant:!1,estimatedDueDate:"",allergies:"",medicalHistory:""});ht(()=>n.show,l=>{l&&n.profileData&&(console.log("ProfileFormModal: Modal is shown, populating form with data:",n.profileData),i.role=n.profileData.role||"patient",i.birthDate=n.profileData.birthDate||"",i.gender=n.profileData.gender||"male",i.isPregnant=n.profileData.isPregnant||!1,i.estimatedDueDate=n.profileData.estimatedDueDate||"",i.allergies=Array.isArray(n.profileData.allergies)?n.profileData.allergies.join(", "):"",i.medicalHistory=Array.isArray(n.profileData.medicalHistory)?n.profileData.medicalHistory.join(", "):"")},{immediate:!0}),ht(()=>i.gender,l=>{l==="male"&&(i.isPregnant=!1,i.estimatedDueDate="")}),ht(()=>i.isPregnant,l=>{l||(i.estimatedDueDate="")});const o=()=>{if(!i.role||!i.birthDate||!i.gender){alert("Role, Birth Date, and Gender are required.");return}if(i.isPregnant&&!i.estimatedDueDate){alert("Estimated due date is required for pregnant patients.");return}r("save",i)};return(l,c)=>(K(),$n(ns,{name:"modal-fade"},{default:Ln(()=>[t.show?(K(),X("div",{key:0,class:"modal-overlay",onClick:c[9]||(c[9]=nt(u=>r("close"),["self"]))},[g("div",{class:"modal-content",dir:v(s)==="ar"?"rtl":"ltr"},[g("button",{class:"close-button",onClick:c[0]||(c[0]=u=>r("close"))},"×"),g("h3",GV,C(v(s)==="en"?"Edit Profile":"تعديل الملف الشخصي"),1),g("form",{onSubmit:nt(o,["prevent"]),class:"profile-form"},[g("div",KV,[g("label",null,C(v(s)==="en"?"Role":"الدور"),1),ye(g("select",{"onUpdate:modelValue":c[1]||(c[1]=u=>i.role=u),required:""},[g("option",YV,C(v(s)==="en"?"Doctor":"طبيب"),1),g("option",QV,C(v(s)==="en"?"Patient":"مريض"),1)],512),[[sr,i.role]])]),g("div",XV,[g("label",null,C(v(s)==="en"?"Birth Date":"تاريخ الميلاد"),1),ye(g("input",{type:"date","onUpdate:modelValue":c[2]||(c[2]=u=>i.birthDate=u),required:""},null,512),[[Oe,i.birthDate]])]),g("div",JV,[g("label",null,C(v(s)==="en"?"Gender":"الجنس"),1),ye(g("select",{"onUpdate:modelValue":c[3]||(c[3]=u=>i.gender=u),required:""},[g("option",ZV,C(v(s)==="en"?"Male":"ذكر"),1),g("option",eM,C(v(s)==="en"?"Female":"أنثى"),1)],512),[[sr,i.gender]])]),i.gender==="female"?(K(),X("div",tM,[g("div",nM,[g("label",null,[ye(g("input",{type:"checkbox","onUpdate:modelValue":c[4]||(c[4]=u=>i.isPregnant=u)},null,512),[[Gl,i.isPregnant]]),g("span",null,C(v(s)==="en"?"Currently Pregnant?":"هل أنت حامل حاليًا؟"),1)])]),i.isPregnant?(K(),X("div",rM,[g("label",null,C(v(s)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع"),1),ye(g("input",{type:"date","onUpdate:modelValue":c[5]||(c[5]=u=>i.estimatedDueDate=u),required:""},null,512),[[Oe,i.estimatedDueDate]])])):Ie("",!0)])):Ie("",!0),g("div",sM,[g("label",null,C(v(s)==="en"?"Allergies (comma-separated)":"الحساسية (مفصولة بفاصلة)"),1),ye(g("textarea",{"onUpdate:modelValue":c[6]||(c[6]=u=>i.allergies=u),rows:"2"},null,512),[[Oe,i.allergies]])]),g("div",iM,[g("label",null,C(v(s)==="en"?"Medical History (comma-separated)":"التاريخ الطبي (مفصول بفاصلة)"),1),ye(g("textarea",{"onUpdate:modelValue":c[7]||(c[7]=u=>i.medicalHistory=u),rows:"2"},null,512),[[Oe,i.medicalHistory]])]),g("div",oM,[g("button",{type:"button",onClick:c[8]||(c[8]=u=>r("close")),class:"action-button secondary"},C(v(s)==="en"?"Cancel":"إلغاء"),1),g("button",aM,C(v(s)==="en"?"Save Changes":"حفظ التغييرات"),1)])],32)],8,WV)])):Ie("",!0)]),_:1}))}},cM=It(lM,[["__scopeId","data-v-2d4615c7"]]),uM=["dir"],hM={class:"form-row"},dM={class:"form-group"},fM={value:"X-ray"},pM={value:"CT"},mM={class:"form-group"},gM={class:"form-group"},_M=["placeholder"],yM={class:"form-group"},vM={class:"form-group"},EM={class:"modal-actions"},wM=["disabled"],bM={key:0},TM={key:1},IM={__name:"PersonalScanFormModal",props:{show:Boolean,scan:Object,isSaving:Boolean},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=Zt(),i=Ls(),o=Be("currentLanguage"),l=hr({id:null,scanType:"X-ray",scanDate:"",patientDose:null,reason:"",notes:""});ht(()=>n.show,h=>{h&&(Object.assign(l,{id:null,scanType:"X-ray",scanDate:new Date().toISOString().split("T")[0],patientDose:null,reason:"",notes:""}),n.scan&&(l.id=n.scan.id,l.scanType=n.scan.scanType,l.scanDate=n.scan.scanDate?.toDate()?.toISOString().split("T")[0]||"",l.patientDose=n.scan.patientDose,l.reason=n.scan.reason,l.notes=n.scan.notes))},{immediate:!0});const c=async()=>{const h=await i.fetchPatientProfile(s.user.uid);let f="N/A";if(h?.birthDate){let D=typeof h.birthDate.toDate=="function"?h.birthDate.toDate():new Date(h.birthDate);f=new Date().getFullYear()-D.getFullYear()}let p="",_={};l.scanType==="CT"?(p=`Estimate the typical effective dose (in mSv) for a patient undergoing a single diagnostic CT scan. Context: Age: ${f}, Reason: ${l.reason||"Not provided"}. IMPORTANT: The plausible range for a single diagnostic CT is 1-30 mSv. Respond ONLY with a single number in this range. Do not add any other text or units.`,_={min:.5,max:40}):(p=`Estimate the typical effective dose (in mSv) for a patient undergoing a single diagnostic X-ray. Context: Age: ${f}, Reason: ${l.reason||"Not provided"}. IMPORTANT: The plausible range for a single diagnostic X-ray is 0.01-5 mSv. Respond ONLY with a single number in this range. Do not add any other text or units.`,_={min:.001,max:10});try{const O=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB9KAR0P6sxAj7fP2I-MyVSVOJJaW0J91M",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:p}]}],generationConfig:{responseMimeType:"text/plain"}})});if(!O.ok)throw new Error(`API Error: ${O.status} ${O.statusText}`);const k=(await O.json()).candidates?.[0]?.content?.parts?.[0]?.text?.trim()||"";console.log("AI Response Text:",`"${k}"`);const F=parseFloat(k);if(isNaN(F))throw new Error("AI did not return a valid number. Response was: "+k);if(console.log(`Validating AI value: ${F}, against rules: min=${_.min}, max=${_.max}`),F<_.min||F>_.max)throw new Error(`AI returned an out-of-range value: ${F}.`);return l.patientDose=F,!0}catch(D){return console.error("Dose estimation failed:",D),alert("The AI returned an unlikely value. Please review and enter the dose manually."),!1}},u=async()=>{if(!l.scanDate){alert("Please provide the scan date.");return}!l.patientDose&&l.patientDose!==0&&!await c()||r("save",{...l})};return(h,f)=>(K(),$n(ns,{name:"modal-fade"},{default:Ln(()=>[t.show?(K(),X("div",{key:0,class:"modal-overlay",onClick:f[7]||(f[7]=nt(p=>h.$emit("close"),["self"]))},[g("div",{class:"modal-content",dir:v(o)==="ar"?"rtl":"ltr"},[g("button",{class:"close-modal-button",onClick:f[0]||(f[0]=p=>h.$emit("close"))},"×"),g("h3",null,C(t.scan?v(o)==="en"?"Edit Personal Scan":"تعديل الفحص الشخصي":v(o)==="en"?"Add Personal Scan":"إضافة فحص شخصي"),1),g("form",{onSubmit:nt(u,["prevent"]),class:"scan-form"},[g("div",hM,[g("div",dM,[g("label",null,C(v(o)==="en"?"Scan Type":"نوع الفحص"),1),ye(g("select",{"onUpdate:modelValue":f[1]||(f[1]=p=>l.scanType=p),required:""},[g("option",fM,C(v(o)==="en"?"X-ray":"أشعة سينية"),1),g("option",pM,C(v(o)==="en"?"CT":"أشعة مقطعية"),1)],512),[[sr,l.scanType]])]),g("div",mM,[g("label",null,C(v(o)==="en"?"Scan Date":"تاريخ الفحص"),1),ye(g("input",{type:"date","onUpdate:modelValue":f[2]||(f[2]=p=>l.scanDate=p),required:""},null,512),[[Oe,l.scanDate]])])]),g("div",gM,[g("label",null,C(v(o)==="en"?"Your Dose (mSv)":"جرعتك (mSv)"),1),ye(g("input",{type:"number",step:"0.01","onUpdate:modelValue":f[3]||(f[3]=p=>l.patientDose=p),placeholder:v(o)==="en"?"Leave blank to estimate with AI":"اتركه فارغًا لجعل الذكاء الصناعي يقدر التعرض"},null,8,_M),[[Oe,l.patientDose]])]),g("div",yM,[g("label",null,C(v(o)==="en"?"Reason for Scan":"أسباب الفحص"),1),ye(g("textarea",{"onUpdate:modelValue":f[4]||(f[4]=p=>l.reason=p),rows:"2"},null,512),[[Oe,l.reason]])]),g("div",vM,[g("label",null,C(v(o)==="en"?"Additional Notes":"ملاحظات إضافية"),1),ye(g("textarea",{"onUpdate:modelValue":f[5]||(f[5]=p=>l.notes=p),rows:"3"},null,512),[[Oe,l.notes]])]),g("div",EM,[g("button",{type:"button",onClick:f[6]||(f[6]=p=>h.$emit("close")),class:"action-button secondary"},C(v(o)==="en"?"Cancel":"إلغاء"),1),g("button",{type:"submit",class:"action-button",disabled:t.isSaving},[t.isSaving?(K(),X("span",bM,C(v(o)==="en"?"Saving...":"جار الحفظ..."),1)):(K(),X("span",TM,C(v(o)==="en"?"Save":"حفظ"),1))],8,wM)])],32)],8,uM)])):Ie("",!0)]),_:1}))}},AM=It(IM,[["__scopeId","data-v-3b4b3d97"]]),SM={class:"history-table-container"},PM={key:0,class:"loading-message"},CM={key:1,class:"no-items-message"},RM={key:2,class:"history-table"},DM={key:0},kM={class:"reason-column"},xM={key:1},OM={class:"actions-column"},NM={key:0},VM={class:"reason-column"},MM={key:1},LM={class:"action-buttons-wrapper"},FM=["onClick"],$M=["onClick"],UM={__name:"HistoryTable",props:{scans:Array,isLoading:Boolean,isPersonalView:{type:Boolean,default:!1}},emits:["edit","delete"],setup(t,{emit:e}){const n=Zt(),r=Be("currentLanguage");He(()=>n.role);const s=o=>{if(!o)return"N/A";const l=o.toDate?o.toDate():new Date(o);return isNaN(l)?"Invalid Date":new Date(l).toLocaleDateString("en-GB")},i=o=>typeof o=="number"?o.toFixed(3):"N/A";return(o,l)=>(K(),X("div",SM,[t.isLoading?(K(),X("div",PM,"...")):t.scans.length===0?(K(),X("div",CM,C(v(r)==="en"?"No scan history found.":"لم يتم العثور على سجل فحوصات."),1)):(K(),X("table",RM,[g("thead",null,[g("tr",null,[t.isPersonalView?Ie("",!0):(K(),X("th",DM,C(v(r)==="en"?"Patient Name":"اسم المريض"),1)),g("th",null,C(v(r)==="en"?"Scan Type":"نوع الفحص"),1),g("th",null,C(v(r)==="en"?"Scan Date":"تاريخ الفحص"),1),g("th",kM,C(v(r)==="en"?"Reason":"السبب"),1),g("th",null,C(v(r)==="en"?"Patient's Dose":"جرعة المريض"),1),t.isPersonalView?Ie("",!0):(K(),X("th",xM,C(v(r)==="en"?"Doctor's Dose":"جرعة الطبيب"),1)),g("th",OM,C(v(r)==="en"?"Actions":"الإجراءات"),1)])]),g("tbody",null,[(K(!0),X(xt,null,Hh(t.scans,c=>(K(),X("tr",{key:c.id},[t.isPersonalView?Ie("",!0):(K(),X("td",NM,C(c.patientName),1)),g("td",null,C(c.scanType),1),g("td",null,C(s(c.scanDate)),1),g("td",VM,C(c.reason||"N/A"),1),g("td",null,C(i(c.patientDose)),1),t.isPersonalView?Ie("",!0):(K(),X("td",MM,C(i(c.doctorDose)),1)),g("td",null,[g("div",LM,[g("button",{onClick:u=>o.$emit("edit",c),class:"action-button-sm edit-button"},C(v(r)==="en"?"Edit":"تعديل"),9,FM),g("button",{onClick:u=>o.$emit("delete",c),class:"action-button-sm delete-button"},C(v(r)==="en"?"Delete":"حذف"),9,$M)])])]))),128))])]))]))}},BM=It(UM,[["__scopeId","data-v-6b648eda"]]),jM=["dir"],HM={class:"profile-section card"},qM={class:"card-header"},zM={key:0,class:"loading-state"},WM={key:1,class:"profile-details"},GM={key:0,class:"role-tag"},KM={key:1,class:"role-tag"},YM={key:0},QM={key:1},XM={key:2},JM={key:0},ZM={key:0},eL={key:1},tL={class:"history-section card"},nL={class:"card-header"},rL={class:"switch-link-container"},sL={__name:"ProfileView",setup(t){const e=Zt(),n=Ls(),r=Os(),s=Be("currentLanguage"),i=Be("triggerMsvRecalculation"),o=Te([]),l=Te(!1),c=Te(!1),u=Te(!1),h=Te(null),f=Te(null),p=He(()=>e.user?.uid),_=He(()=>{if(!e.userProfile)return{displayName:e.user?.displayName||"",email:e.user?.email||""};const $=G=>{if(!G)return"";const b=G.toDate?G.toDate():new Date(G);return isNaN(b)?"":b.toISOString().split("T")[0]};return{...e.userProfile,displayName:e.user?.displayName,email:e.user?.email,birthDate:$(e.userProfile.birthDate),estimatedDueDate:$(e.userProfile.estimatedDueDate)}}),D=async()=>{if(!p.value)return;const $=await n.fetchScansForPatient(p.value);$&&(o.value=$)},N=async $=>{if(!p.value)return;const G={...e.userProfile,displayName:e.user.displayName,email:e.user.email,role:$.role,birthDate:Se.fromDate(new Date($.birthDate)),gender:$.gender,isPregnant:$.isPregnant,estimatedDueDate:$.isPregnant&&$.estimatedDueDate?Se.fromDate(new Date($.estimatedDueDate)):null,allergies:Array.isArray($.allergies)?$.allergies:$.allergies.split(",").map(w=>w.trim()).filter(Boolean),medicalHistory:Array.isArray($.medicalHistory)?$.medicalHistory:$.medicalHistory.split(",").map(w=>w.trim()).filter(Boolean)};await n.setUserProfile(p.value,G)?(e.setUserProfile(G),l.value=!1):alert(`Failed to save profile. Error: ${n.error}`)},L=async $=>{if(!p.value)return;const G={patientId:p.value,scanType:$.scanType,scanDate:Se.fromDate(new Date($.scanDate)),patientDose:Number($.patientDose),doctorDose:0,reason:$.reason,notes:$.notes};($.id?await n.updateScan($.id,G):await n.createScan(G))?(c.value=!1,await D(),i&&i()):alert(`Failed to save scan: ${n.error}`)},O=async()=>{if(!f.value?.id)return;await n.deleteScan(f.value.id)?(u.value=!1,await D(),i&&i()):alert(`Failed to delete scan: ${n.error}`)},x=()=>{h.value=null,c.value=!0},k=$=>{h.value=$,c.value=!0},F=$=>{f.value=$,u.value=!0};return jh(()=>{ht(()=>e.isAuthReady,$=>{$&&p.value&&D()},{immediate:!0})}),($,G)=>(K(),X("div",{class:"profile-page",dir:v(s)==="ar"?"rtl":"ltr"},[g("div",HM,[g("div",qM,[g("h2",null,C(v(s)==="en"?"My Profile":"ملفي الشخصي"),1),g("button",{onClick:G[0]||(G[0]=b=>l.value=!0),class:"action-button"},C(v(s)==="en"?"Edit Profile":"تعديل الملف الشخصي"),1)]),v(e).loading?(K(),X("div",zM,"Loading profile...")):_.value?(K(),X("div",WM,[g("p",null,[g("strong",null,C(v(s)==="en"?"Name:":"اﻹسم:"),1),g("span",null,C(_.value.displayName),1)]),g("p",null,[g("strong",null,C(v(s)==="en"?"Email:":"البريد اﻹلكتروني:"),1),g("span",null,C(_.value.email),1)]),g("p",null,[g("strong",null,C(v(s)==="en"?"Role":"الدور")+":",1),_.value.role==="doctor"?(K(),X("span",GM,C(v(s)==="en"?"Doctor":"طبيب"),1)):(K(),X("span",KM,C(v(s)==="en"?"Patient":"مريض"),1))]),g("p",null,[g("strong",null,C(v(s)==="en"?"Birth Date:":"تاريخ الميلاد:"),1),g("span",null,C(_.value.birthDate||"Not set"),1)]),g("p",null,[g("strong",null,C(v(s)==="en"?"Gender: ":"الجنس: "),1),_.value.gender==="male"?(K(),X("span",YM,C(v(s)==="en"?"Male":"ذكر"),1)):_.value.gender==="female"?(K(),X("span",QM,C(v(s)==="en"?"Female":"أنثى"),1)):(K(),X("span",XM,"Not set"))]),_.value.gender==="female"?(K(),X("p",JM,[g("strong",null,C(v(s)==="en"?"Pregnant: ":"حامل: "),1),_.value.isPregnant?(K(),X("span",ZM,C(v(s)==="en"?"Yes":"نعم")+" ("+C(v(s)==="en"?"Due:":"المتوقع:")+" "+C(_.value.estimatedDueDate)+")",1)):(K(),X("span",eL,C(v(s)==="en"?"No":"لا"),1))])):Ie("",!0),g("p",null,[g("strong",null,C(v(s)==="en"?"Allergies:":"الحساسية:"),1),g("span",null,C(_.value.allergies?.join(", ")||"None"),1)]),g("p",null,[g("strong",null,C(v(s)==="en"?"Medical History:":"التاريخ الطبي:"),1),g("span",null,C(_.value.medicalHistory?.join(", ")||"None"),1)])])):Ie("",!0)]),g("div",tL,[g("div",nL,[g("h2",null,C(v(s)==="en"?"Personal Scan History":"تاريخ الفحوصات الشخصية"),1),g("button",{onClick:x,class:"action-button"},C(v(s)==="en"?"Add Personal Scan":"إضافة فحص شخصي"),1)]),Pe(BM,{scans:o.value,"is-loading":v(n).loading,"is-personal-view":!0,onEdit:k,onDelete:F},null,8,["scans","is-loading"])]),Pe(cM,{show:l.value,"profile-data":_.value,onClose:G[1]||(G[1]=b=>l.value=!1),onSave:N},null,8,["show","profile-data"]),Pe(AM,{show:c.value,scan:h.value,"is-saving":v(n).loading,onClose:G[2]||(G[2]=b=>c.value=!1),onSave:L},null,8,["show","scan","is-saving"]),Pe(nf,{show:u.value,title:"Delete Scan",message:"Are you sure you want to delete this scan?",onClose:G[3]||(G[3]=b=>u.value=!1),onConfirm:O},null,8,["show"]),g("div",rL,[g("a",{href:"#",onClick:G[4]||(G[4]=nt(b=>v(r).push("/dashboard"),["prevent"]))},C(v(s)==="en"?"Back to dashboard":"العودة إلى لوحة التحكم"),1)])],8,jM))}},iL=It(sL,[["__scopeId","data-v-4c8a4d7f"]]),Ol=YT({history:AT("/X-ray"),routes:[{path:"/",name:"signup",component:ck},{path:"/signin",name:"signin",component:kk},{path:"/dashboard",name:"dashboard",component:RV,meta:{requiresAuth:!0}},{path:"/recommend/:patientId?",name:"recommend",component:gx,meta:{requiresAuth:!0}},{path:"/patients",name:"patients",component:J4,meta:{requiresAuth:!0}},{path:"/profile",name:"profile",component:iL,meta:{requiresAuth:!0}},{path:"/resetpassword",name:"resetpassword",component:zV},{path:"/__/auth/handler",name:"firebaseAuthHandler",component:{render(){return oi("div")}},beforeEnter:(t,e,n)=>{n()}},{path:"/:catchAll(.*)",redirect:"/dashboard"},{path:"/__/auth/iframe",name:"firebaseAuthIframeHandler",component:{render(){return oi("div")}},beforeEnter:(t,e,n)=>{n()}}]});Ol.beforeEach(async(t,e,n)=>{const r=Zt();r.isAuthReady||await new Promise(l=>{const c=r.$subscribe((u,h)=>{h.isAuthReady&&(c(),l())})});const s=!!r.user;if(t.path.startsWith("/__/auth/handler")||t.path.startsWith("/__/auth/iframe")){n();return}console.log(`Navigating to: ${t.path} (name: ${t.name})`),console.log(`isAuthenticated: ${s}`);const o=["signup","signin","resetpassword","newpassword"].includes(t.name);s?o?(console.log(`Redirecting authenticated user from ${t.name} to /dashboard.`),n("/dashboard")):(console.log(`Allowing authenticated access to ${t.path}.`),n()):o?(console.log(`Allowing unauthenticated access to ${t.name}.`),n()):(console.log(`Redirecting unauthenticated user from ${t.path} (requires auth) to /signin.`),n("/signin"))});var oL="firebase",aL="11.10.0";/**
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
 */Br(oL,aL,"app");/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const lL={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]},cL=lL,uL={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},hL=uL,dL={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},fL={prefix:"fas",iconName:"file-medical",icon:[384,512,[],"f477","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM160 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z"]},pL={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},mL={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};_N.add(dL,hL,cL,fL,pL,mL);const gL={apiKey:"AIzaSyBKiw2ibjMQB-i_sMorpK5nXyHb87_6uZA",authDomain:"x-ray-b0cb8.firebaseapp.com",projectId:"x-ray-b0cb8",storageBucket:"x-ray-b0cb8.firebasestorage.app",messagingSenderId:"382664693760",appId:"1:382664693760:web:7582abe58d70b3260f20e5",measurementId:"G-5MKNMY9VGY"},Ww=Wy(gL),rf=aC(Ww),_L=yo(Ww),gr=W0(UD),yL=JT();gr.use(yL);gr.use(Ol);gr.component("font-awesome-icon",an);const Sh=Te(null),Gw=Te(!1),eo=Zt();eo.initAuth(rf);_v(rf,t=>{if(Sh.value=t?t.uid:null,eo.user=t,eo.isAuthenticated=!!t,Gw.value=!0,t){const e=Ol.currentRoute.value.name;["signup","signin","resetpassword","newpassword"].includes(e)&&Ol.push("/dashboard")}else Sh.value=null,eo.user=null,eo.isAuthenticated=!1});gr.provide("db",_L);gr.provide("auth",rf);gr.provide("currentUserId",Sh);gr.provide("isAuthReady",Gw);gr.provide("appId",typeof __app_id<"u"?__app_id:"default-app-id");gr.mount("#app");
