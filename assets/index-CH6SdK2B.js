(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function hh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const He={},Bs=[],Sn=()=>{},cw=()=>!1,Tl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),fh=t=>t.startsWith("onUpdate:"),yt=Object.assign,dh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},uw=Object.prototype.hasOwnProperty,Fe=(t,e)=>uw.call(t,e),me=Array.isArray,Hs=t=>Oo(t)==="[object Map]",ci=t=>Oo(t)==="[object Set]",Dd=t=>Oo(t)==="[object Date]",be=t=>typeof t=="function",rt=t=>typeof t=="string",Nn=t=>typeof t=="symbol",qe=t=>t!==null&&typeof t=="object",Yg=t=>(qe(t)||be(t))&&be(t.then)&&be(t.catch),Xg=Object.prototype.toString,Oo=t=>Xg.call(t),hw=t=>Oo(t).slice(8,-1),Jg=t=>Oo(t)==="[object Object]",ph=t=>rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Wi=hh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Il=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fw=/-(\w)/g,an=Il(t=>t.replace(fw,(e,n)=>n?n.toUpperCase():"")),dw=/\B([A-Z])/g,Is=Il(t=>t.replace(dw,"-$1").toLowerCase()),Al=Il(t=>t.charAt(0).toUpperCase()+t.slice(1)),Sc=Il(t=>t?`on${Al(t)}`:""),Cr=(t,e)=>!Object.is(t,e),Sa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},su=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ha=t=>{const e=parseFloat(t);return isNaN(e)?t:e},pw=t=>{const e=rt(t)?Number(t):NaN;return isNaN(e)?t:e};let Vd;const Sl=()=>Vd||(Vd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mh(t){if(me(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=rt(r)?yw(r):mh(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(rt(t)||qe(t))return t}const mw=/;(?![^(]*\))/g,gw=/:([^]+)/,_w=/\/\*[^]*?\*\//g;function yw(t){const e={};return t.replace(_w,"").split(mw).forEach(n=>{if(n){const r=n.split(gw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function $e(t){let e="";if(rt(t))e=t;else if(me(t))for(let n=0;n<t.length;n++){const r=$e(t[n]);r&&(e+=r+" ")}else if(qe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const vw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ew=hh(vw);function Zg(t){return!!t||t===""}function ww(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=No(t[r],e[r]);return n}function No(t,e){if(t===e)return!0;let n=Dd(t),r=Dd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Nn(t),r=Nn(e),n||r)return t===e;if(n=me(t),r=me(e),n||r)return n&&r?ww(t,e):!1;if(n=qe(t),r=qe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!No(t[o],e[o]))return!1}}return String(t)===String(e)}function gh(t,e){return t.findIndex(n=>No(n,e))}const e_=t=>!!(t&&t.__v_isRef===!0),x=t=>rt(t)?t:t==null?"":me(t)||qe(t)&&(t.toString===Xg||!be(t.toString))?e_(t)?x(t.value):JSON.stringify(t,t_,2):String(t),t_=(t,e)=>e_(e)?t_(t,e.value):Hs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Rc(r,i)+" =>"]=s,n),{})}:ci(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Rc(n))}:Nn(e)?Rc(e):qe(e)&&!me(e)&&!Jg(e)?String(e):e,Rc=(t,e="")=>{var n;return Nn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nt;class n_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){++this._on===1&&(this.prevScope=Nt,Nt=this)}off(){this._on>0&&--this._on===0&&(Nt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function r_(t){return new n_(t)}function s_(){return Nt}function bw(t,e=!1){Nt&&Nt.cleanups.push(t)}let We;const Pc=new WeakSet;class i_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Nt&&Nt.active&&Nt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pc.has(this)&&(Pc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||a_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Md(this),l_(this);const e=We,n=fn;We=this,fn=!0;try{return this.fn()}finally{c_(this),We=e,fn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)vh(e);this.deps=this.depsTail=void 0,Md(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){iu(this)&&this.run()}get dirty(){return iu(this)}}let o_=0,Gi,Ki;function a_(t,e=!1){if(t.flags|=8,e){t.next=Ki,Ki=t;return}t.next=Gi,Gi=t}function _h(){o_++}function yh(){if(--o_>0)return;if(Ki){let e=Ki;for(Ki=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Gi;){let e=Gi;for(Gi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function l_(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function c_(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),vh(r),Tw(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function iu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(u_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function u_(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===uo)||(t.globalVersion=uo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!iu(t))))return;t.flags|=2;const e=t.dep,n=We,r=fn;We=t,fn=!0;try{l_(t);const s=t.fn(t._value);(e.version===0||Cr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{We=n,fn=r,c_(t),t.flags&=-3}}function vh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)vh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Tw(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let fn=!0;const h_=[];function Jn(){h_.push(fn),fn=!1}function Zn(){const t=h_.pop();fn=t===void 0?!0:t}function Md(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=We;We=void 0;try{e()}finally{We=n}}}let uo=0;class Iw{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Eh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!We||!fn||We===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==We)n=this.activeLink=new Iw(We,this),We.deps?(n.prevDep=We.depsTail,We.depsTail.nextDep=n,We.depsTail=n):We.deps=We.depsTail=n,f_(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=We.depsTail,n.nextDep=void 0,We.depsTail.nextDep=n,We.depsTail=n,We.deps===n&&(We.deps=r)}return n}trigger(e){this.version++,uo++,this.notify(e)}notify(e){_h();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{yh()}}}function f_(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)f_(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const qa=new WeakMap,hs=Symbol(""),ou=Symbol(""),ho=Symbol("");function Vt(t,e,n){if(fn&&We){let r=qa.get(t);r||qa.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Eh),s.map=r,s.key=n),s.track()}}function Hn(t,e,n,r,s,i){const o=qa.get(t);if(!o){uo++;return}const l=c=>{c&&c.trigger()};if(_h(),e==="clear")o.forEach(l);else{const c=me(t),u=c&&ph(n);if(c&&n==="length"){const f=Number(r);o.forEach((d,m)=>{(m==="length"||m===ho||!Nn(m)&&m>=f)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(ho)),e){case"add":c?u&&l(o.get("length")):(l(o.get(hs)),Hs(t)&&l(o.get(ou)));break;case"delete":c||(l(o.get(hs)),Hs(t)&&l(o.get(ou)));break;case"set":Hs(t)&&l(o.get(hs));break}}yh()}function Aw(t,e){const n=qa.get(t);return n&&n.get(e)}function Os(t){const e=Ve(t);return e===t?e:(Vt(e,"iterate",ho),on(t)?e:e.map(At))}function Rl(t){return Vt(t=Ve(t),"iterate",ho),t}const Sw={__proto__:null,[Symbol.iterator](){return Cc(this,Symbol.iterator,At)},concat(...t){return Os(this).concat(...t.map(e=>me(e)?Os(e):e))},entries(){return Cc(this,"entries",t=>(t[1]=At(t[1]),t))},every(t,e){return Fn(this,"every",t,e,void 0,arguments)},filter(t,e){return Fn(this,"filter",t,e,n=>n.map(At),arguments)},find(t,e){return Fn(this,"find",t,e,At,arguments)},findIndex(t,e){return Fn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Fn(this,"findLast",t,e,At,arguments)},findLastIndex(t,e){return Fn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Fn(this,"forEach",t,e,void 0,arguments)},includes(...t){return xc(this,"includes",t)},indexOf(...t){return xc(this,"indexOf",t)},join(t){return Os(this).join(t)},lastIndexOf(...t){return xc(this,"lastIndexOf",t)},map(t,e){return Fn(this,"map",t,e,void 0,arguments)},pop(){return Di(this,"pop")},push(...t){return Di(this,"push",t)},reduce(t,...e){return Ld(this,"reduce",t,e)},reduceRight(t,...e){return Ld(this,"reduceRight",t,e)},shift(){return Di(this,"shift")},some(t,e){return Fn(this,"some",t,e,void 0,arguments)},splice(...t){return Di(this,"splice",t)},toReversed(){return Os(this).toReversed()},toSorted(t){return Os(this).toSorted(t)},toSpliced(...t){return Os(this).toSpliced(...t)},unshift(...t){return Di(this,"unshift",t)},values(){return Cc(this,"values",At)}};function Cc(t,e,n){const r=Rl(t),s=r[e]();return r!==t&&!on(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Rw=Array.prototype;function Fn(t,e,n,r,s,i){const o=Rl(t),l=o!==t&&!on(t),c=o[e];if(c!==Rw[e]){const d=c.apply(t,i);return l?At(d):d}let u=n;o!==t&&(l?u=function(d,m){return n.call(this,At(d),m,t)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function Ld(t,e,n,r){const s=Rl(t);let i=n;return s!==t&&(on(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,At(l),c,t)}),s[e](i,...r)}function xc(t,e,n){const r=Ve(t);Vt(r,"iterate",ho);const s=r[e](...n);return(s===-1||s===!1)&&Th(n[0])?(n[0]=Ve(n[0]),r[e](...n)):s}function Di(t,e,n=[]){Jn(),_h();const r=Ve(t)[e].apply(t,n);return yh(),Zn(),r}const Pw=hh("__proto__,__v_isRef,__isVue"),d_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Nn));function Cw(t){Nn(t)||(t=String(t));const e=Ve(this);return Vt(e,"has",t),e.hasOwnProperty(t)}class p_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Uw:y_:i?__:g_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=me(e);if(!s){let c;if(o&&(c=Sw[n]))return c;if(n==="hasOwnProperty")return Cw}const l=Reflect.get(e,n,at(e)?e:r);return(Nn(n)?d_.has(n):Pw(n))||(s||Vt(e,"get",n),i)?l:at(l)?o&&ph(n)?l:l.value:qe(l)?s?E_(l):Do(l):l}}class m_ extends p_{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Lr(i);if(!on(r)&&!Lr(r)&&(i=Ve(i),r=Ve(r)),!me(e)&&at(i)&&!at(r))return c?!1:(i.value=r,!0)}const o=me(e)&&ph(n)?Number(n)<e.length:Fe(e,n),l=Reflect.set(e,n,r,at(e)?e:s);return e===Ve(s)&&(o?Cr(r,i)&&Hn(e,"set",n,r):Hn(e,"add",n,r)),l}deleteProperty(e,n){const r=Fe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Hn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Nn(n)||!d_.has(n))&&Vt(e,"has",n),r}ownKeys(e){return Vt(e,"iterate",me(e)?"length":hs),Reflect.ownKeys(e)}}class xw extends p_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const kw=new m_,Ow=new xw,Nw=new m_(!0);const au=t=>t,pa=t=>Reflect.getPrototypeOf(t);function Dw(t,e,n){return function(...r){const s=this.__v_raw,i=Ve(s),o=Hs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?au:e?za:At;return!e&&Vt(i,"iterate",c?ou:hs),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:l?[f(d[0]),f(d[1])]:f(d),done:m}},[Symbol.iterator](){return this}}}}function ma(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Vw(t,e){const n={get(s){const i=this.__v_raw,o=Ve(i),l=Ve(s);t||(Cr(s,l)&&Vt(o,"get",s),Vt(o,"get",l));const{has:c}=pa(o),u=e?au:t?za:At;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Vt(Ve(s),"iterate",hs),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ve(i),l=Ve(s);return t||(Cr(s,l)&&Vt(o,"has",s),Vt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ve(l),u=e?au:t?za:At;return!t&&Vt(c,"iterate",hs),l.forEach((f,d)=>s.call(i,u(f),u(d),o))}};return yt(n,t?{add:ma("add"),set:ma("set"),delete:ma("delete"),clear:ma("clear")}:{add(s){!e&&!on(s)&&!Lr(s)&&(s=Ve(s));const i=Ve(this);return pa(i).has.call(i,s)||(i.add(s),Hn(i,"add",s,s)),this},set(s,i){!e&&!on(i)&&!Lr(i)&&(i=Ve(i));const o=Ve(this),{has:l,get:c}=pa(o);let u=l.call(o,s);u||(s=Ve(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?Cr(i,f)&&Hn(o,"set",s,i):Hn(o,"add",s,i),this},delete(s){const i=Ve(this),{has:o,get:l}=pa(i);let c=o.call(i,s);c||(s=Ve(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Hn(i,"delete",s,void 0),u},clear(){const s=Ve(this),i=s.size!==0,o=s.clear();return i&&Hn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Dw(s,t,e)}),n}function wh(t,e){const n=Vw(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Fe(n,s)&&s in r?n:r,s,i)}const Mw={get:wh(!1,!1)},Lw={get:wh(!1,!0)},Fw={get:wh(!0,!1)};const g_=new WeakMap,__=new WeakMap,y_=new WeakMap,Uw=new WeakMap;function $w(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jw(t){return t.__v_skip||!Object.isExtensible(t)?0:$w(hw(t))}function Do(t){return Lr(t)?t:bh(t,!1,kw,Mw,g_)}function v_(t){return bh(t,!1,Nw,Lw,__)}function E_(t){return bh(t,!0,Ow,Fw,y_)}function bh(t,e,n,r,s){if(!qe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=jw(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function xr(t){return Lr(t)?xr(t.__v_raw):!!(t&&t.__v_isReactive)}function Lr(t){return!!(t&&t.__v_isReadonly)}function on(t){return!!(t&&t.__v_isShallow)}function Th(t){return t?!!t.__v_raw:!1}function Ve(t){const e=t&&t.__v_raw;return e?Ve(e):t}function Ih(t){return!Fe(t,"__v_skip")&&Object.isExtensible(t)&&su(t,"__v_skip",!0),t}const At=t=>qe(t)?Do(t):t,za=t=>qe(t)?E_(t):t;function at(t){return t?t.__v_isRef===!0:!1}function pe(t){return w_(t,!1)}function Bw(t){return w_(t,!0)}function w_(t,e){return at(t)?t:new Hw(t,e)}class Hw{constructor(e,n){this.dep=new Eh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ve(e),this._value=n?e:At(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||on(e)||Lr(e);e=r?e:Ve(e),Cr(e,n)&&(this._rawValue=e,this._value=r?e:At(e),this.dep.trigger())}}function v(t){return at(t)?t.value:t}const qw={get:(t,e,n)=>e==="__v_raw"?t:v(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return at(s)&&!at(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function b_(t){return xr(t)?t:new Proxy(t,qw)}function zw(t){const e=me(t)?new Array(t.length):{};for(const n in t)e[n]=Gw(t,n);return e}class Ww{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Aw(Ve(this._object),this._key)}}function Gw(t,e,n){const r=t[e];return at(r)?r:new Ww(t,e,n)}class Kw{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Eh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=uo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&We!==this)return a_(this,!0),!0}get value(){const e=this.dep.track();return u_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Qw(t,e,n=!1){let r,s;return be(t)?r=t:(r=t.get,s=t.set),new Kw(r,s,n)}const ga={},Wa=new WeakMap;let is;function Yw(t,e=!1,n=is){if(n){let r=Wa.get(n);r||Wa.set(n,r=[]),r.push(t)}}function Xw(t,e,n=He){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=$=>s?$:on($)||s===!1||s===0?qn($,1):qn($);let f,d,m,E,C=!1,M=!1;if(at(t)?(d=()=>t.value,C=on(t)):xr(t)?(d=()=>u(t),C=!0):me(t)?(M=!0,C=t.some($=>xr($)||on($)),d=()=>t.map($=>{if(at($))return $.value;if(xr($))return u($);if(be($))return c?c($,2):$()})):be(t)?e?d=c?()=>c(t,2):t:d=()=>{if(m){Jn();try{m()}finally{Zn()}}const $=is;is=f;try{return c?c(t,3,[E]):t(E)}finally{is=$}}:d=Sn,e&&s){const $=d,Z=s===!0?1/0:s;d=()=>qn($(),Z)}const U=s_(),L=()=>{f.stop(),U&&U.active&&dh(U.effects,f)};if(i&&e){const $=e;e=(...Z)=>{$(...Z),L()}}let D=M?new Array(t.length).fill(ga):ga;const B=$=>{if(!(!(f.flags&1)||!f.dirty&&!$))if(e){const Z=f.run();if(s||C||(M?Z.some((re,P)=>Cr(re,D[P])):Cr(Z,D))){m&&m();const re=is;is=f;try{const P=[Z,D===ga?void 0:M&&D[0]===ga?[]:D,E];D=Z,c?c(e,3,P):e(...P)}finally{is=re}}}else f.run()};return l&&l(B),f=new i_(d),f.scheduler=o?()=>o(B,!1):B,E=$=>Yw($,!1,f),m=f.onStop=()=>{const $=Wa.get(f);if($){if(c)c($,4);else for(const Z of $)Z();Wa.delete(f)}},e?r?B(!0):D=f.run():o?o(B.bind(null,!0),!0):f.run(),L.pause=f.pause.bind(f),L.resume=f.resume.bind(f),L.stop=L,L}function qn(t,e=1/0,n){if(e<=0||!qe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,at(t))qn(t.value,e,n);else if(me(t))for(let r=0;r<t.length;r++)qn(t[r],e,n);else if(ci(t)||Hs(t))t.forEach(r=>{qn(r,e,n)});else if(Jg(t)){for(const r in t)qn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&qn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vo(t,e,n,r){try{return r?t(...r):t()}catch(s){Pl(s,e,n)}}function mn(t,e,n,r){if(be(t)){const s=Vo(t,e,n,r);return s&&Yg(s)&&s.catch(i=>{Pl(i,e,n)}),s}if(me(t)){const s=[];for(let i=0;i<t.length;i++)s.push(mn(t[i],e,n,r));return s}}function Pl(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||He;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,c,u)===!1)return}l=l.parent}if(i){Jn(),Vo(i,null,10,[t,c,u]),Zn();return}}Jw(t,n,s,r,o)}function Jw(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const jt=[];let wn=-1;const qs=[];let Er=null,Ds=0;const T_=Promise.resolve();let Ga=null;function Cl(t){const e=Ga||T_;return t?e.then(this?t.bind(this):t):e}function Zw(t){let e=wn+1,n=jt.length;for(;e<n;){const r=e+n>>>1,s=jt[r],i=fo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ah(t){if(!(t.flags&1)){const e=fo(t),n=jt[jt.length-1];!n||!(t.flags&2)&&e>=fo(n)?jt.push(t):jt.splice(Zw(e),0,t),t.flags|=1,I_()}}function I_(){Ga||(Ga=T_.then(S_))}function eb(t){me(t)?qs.push(...t):Er&&t.id===-1?Er.splice(Ds+1,0,t):t.flags&1||(qs.push(t),t.flags|=1),I_()}function Fd(t,e,n=wn+1){for(;n<jt.length;n++){const r=jt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;jt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function A_(t){if(qs.length){const e=[...new Set(qs)].sort((n,r)=>fo(n)-fo(r));if(qs.length=0,Er){Er.push(...e);return}for(Er=e,Ds=0;Ds<Er.length;Ds++){const n=Er[Ds];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Er=null,Ds=0}}const fo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function S_(t){try{for(wn=0;wn<jt.length;wn++){const e=jt[wn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;wn<jt.length;wn++){const e=jt[wn];e&&(e.flags&=-2)}wn=-1,jt.length=0,A_(),Ga=null,(jt.length||qs.length)&&S_()}}let Ht=null,R_=null;function Ka(t){const e=Ht;return Ht=t,R_=t&&t.type.__scopeId||null,e}function un(t,e=Ht,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Yd(-1);const i=Ka(e);let o;try{o=t(...s)}finally{Ka(i),r._d&&Yd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function je(t,e){if(Ht===null)return t;const n=Dl(Ht),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=He]=e[s];i&&(be(i)&&(i={mounted:i,updated:i}),i.deep&&qn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function ts(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Jn(),mn(c,n,8,[t.el,l,t,e]),Zn())}}const tb=Symbol("_vte"),P_=t=>t.__isTeleport,wr=Symbol("_leaveCb"),_a=Symbol("_enterCb");function nb(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Rh(()=>{t.isMounted=!0}),M_(()=>{t.isUnmounting=!0}),t}const nn=[Function,Array],C_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn},x_=t=>{const e=t.subTree;return e.component?x_(e.component):e},rb={name:"BaseTransition",props:C_,setup(t,{slots:e}){const n=Zb(),r=nb();return()=>{const s=e.default&&N_(e.default(),!0);if(!s||!s.length)return;const i=k_(s),o=Ve(t),{mode:l}=o;if(r.isLeaving)return kc(i);const c=Ud(i);if(!c)return kc(i);let u=lu(c,o,r,n,d=>u=d);c.type!==Bt&&po(c,u);let f=n.subTree&&Ud(n.subTree);if(f&&f.type!==Bt&&!as(c,f)&&x_(n).type!==Bt){let d=lu(f,o,r,n);if(po(f,d),l==="out-in"&&c.type!==Bt)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,f=void 0},kc(i);l==="in-out"&&c.type!==Bt?d.delayLeave=(m,E,C)=>{const M=O_(r,f);M[String(f.key)]=f,m[wr]=()=>{E(),m[wr]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{C(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function k_(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Bt){e=n;break}}return e}const sb=rb;function O_(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function lu(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:m,onLeave:E,onAfterLeave:C,onLeaveCancelled:M,onBeforeAppear:U,onAppear:L,onAfterAppear:D,onAppearCancelled:B}=e,$=String(t.key),Z=O_(n,t),re=(w,I)=>{w&&mn(w,r,9,I)},P=(w,I)=>{const A=I[1];re(w,I),me(w)?w.every(S=>S.length<=1)&&A():w.length<=1&&A()},y={mode:o,persisted:l,beforeEnter(w){let I=c;if(!n.isMounted)if(i)I=U||c;else return;w[wr]&&w[wr](!0);const A=Z[$];A&&as(t,A)&&A.el[wr]&&A.el[wr](),re(I,[w])},enter(w){let I=u,A=f,S=d;if(!n.isMounted)if(i)I=L||u,A=D||f,S=B||d;else return;let b=!1;const le=w[_a]=ce=>{b||(b=!0,ce?re(S,[w]):re(A,[w]),y.delayedLeave&&y.delayedLeave(),w[_a]=void 0)};I?P(I,[w,le]):le()},leave(w,I){const A=String(t.key);if(w[_a]&&w[_a](!0),n.isUnmounting)return I();re(m,[w]);let S=!1;const b=w[wr]=le=>{S||(S=!0,I(),le?re(M,[w]):re(C,[w]),w[wr]=void 0,Z[A]===t&&delete Z[A])};Z[A]=t,E?P(E,[w,b]):b()},clone(w){const I=lu(w,e,n,r,s);return s&&s(I),I}};return y}function kc(t){if(xl(t))return t=Fr(t),t.children=null,t}function Ud(t){if(!xl(t))return P_(t.type)&&t.children?k_(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&be(n.default))return n.default()}}function po(t,e){t.shapeFlag&6&&t.component?(t.transition=e,po(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function N_(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===rn?(o.patchFlag&128&&s++,r=r.concat(N_(o.children,e,l))):(e||o.type!==Bt)&&r.push(l!=null?Fr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Sh(t,e){return be(t)?yt({name:t.name},e,{setup:t}):t}function D_(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Qi(t,e,n,r,s=!1){if(me(t)){t.forEach((C,M)=>Qi(C,e&&(me(e)?e[M]:e),n,r,s));return}if(Yi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Qi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Dl(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===He?l.refs={}:l.refs,d=l.setupState,m=Ve(d),E=d===He?()=>!1:C=>Fe(m,C);if(u!=null&&u!==c&&(rt(u)?(f[u]=null,E(u)&&(d[u]=null)):at(u)&&(u.value=null)),be(c))Vo(c,l,12,[o,f]);else{const C=rt(c),M=at(c);if(C||M){const U=()=>{if(t.f){const L=C?E(c)?d[c]:f[c]:c.value;s?me(L)&&dh(L,i):me(L)?L.includes(i)||L.push(i):C?(f[c]=[i],E(c)&&(d[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else C?(f[c]=o,E(c)&&(d[c]=o)):M&&(c.value=o,t.k&&(f[t.k]=o))};o?(U.id=-1,Kt(U,n)):U()}}}Sl().requestIdleCallback;Sl().cancelIdleCallback;const Yi=t=>!!t.type.__asyncLoader,xl=t=>t.type.__isKeepAlive;function ib(t,e){V_(t,"a",e)}function ob(t,e){V_(t,"da",e)}function V_(t,e,n=_t){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(kl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)xl(s.parent.vnode)&&ab(r,e,n,s),s=s.parent}}function ab(t,e,n,r){const s=kl(e,t,r,!0);Ph(()=>{dh(r[e],s)},n)}function kl(t,e,n=_t,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Jn();const l=Mo(n),c=mn(e,n,t,o);return l(),Zn(),c});return r?s.unshift(i):s.push(i),i}}const or=t=>(e,n=_t)=>{(!go||t==="sp")&&kl(t,(...r)=>e(...r),n)},lb=or("bm"),Rh=or("m"),cb=or("bu"),ub=or("u"),M_=or("bum"),Ph=or("um"),hb=or("sp"),fb=or("rtg"),db=or("rtc");function pb(t,e=_t){kl("ec",t,e)}const L_="components";function mb(t,e){return U_(L_,t,!0,e)||t}const F_=Symbol.for("v-ndc");function gb(t){return rt(t)?U_(L_,t,!1)||t:t||F_}function U_(t,e,n=!0,r=!1){const s=Ht||_t;if(s){const i=s.type;{const l=s1(i,!1);if(l&&(l===e||l===an(e)||l===Al(an(e))))return i}const o=$d(s[t]||i[t],e)||$d(s.appContext[t],e);return!o&&r?i:o}}function $d(t,e){return t&&(t[e]||t[an(e)]||t[Al(an(e))])}function jd(t,e,n,r){let s;const i=n,o=me(t);if(o||rt(t)){const l=o&&xr(t);let c=!1,u=!1;l&&(c=!on(t),u=Lr(t),t=Rl(t)),s=new Array(t.length);for(let f=0,d=t.length;f<d;f++)s[f]=e(c?u?za(At(t[f])):At(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(qe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const cu=t=>t?ay(t)?Dl(t):cu(t.parent):null,Xi=yt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>cu(t.parent),$root:t=>cu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>j_(t),$forceUpdate:t=>t.f||(t.f=()=>{Ah(t.update)}),$nextTick:t=>t.n||(t.n=Cl.bind(t.proxy)),$watch:t=>Fb.bind(t)}),Oc=(t,e)=>t!==He&&!t.__isScriptSetup&&Fe(t,e),_b={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const E=o[e];if(E!==void 0)switch(E){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Oc(r,e))return o[e]=1,r[e];if(s!==He&&Fe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Fe(u,e))return o[e]=3,i[e];if(n!==He&&Fe(n,e))return o[e]=4,n[e];uu&&(o[e]=0)}}const f=Xi[e];let d,m;if(f)return e==="$attrs"&&Vt(t.attrs,"get",""),f(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==He&&Fe(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Fe(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Oc(s,e)?(s[e]=n,!0):r!==He&&Fe(r,e)?(r[e]=n,!0):Fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==He&&Fe(t,o)||Oc(e,o)||(l=i[0])&&Fe(l,o)||Fe(r,o)||Fe(Xi,o)||Fe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Bd(t){return me(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let uu=!0;function yb(t){const e=j_(t),n=t.proxy,r=t.ctx;uu=!1,e.beforeCreate&&Hd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:d,mounted:m,beforeUpdate:E,updated:C,activated:M,deactivated:U,beforeDestroy:L,beforeUnmount:D,destroyed:B,unmounted:$,render:Z,renderTracked:re,renderTriggered:P,errorCaptured:y,serverPrefetch:w,expose:I,inheritAttrs:A,components:S,directives:b,filters:le}=e;if(u&&vb(u,r,null),o)for(const X in o){const Ie=o[X];be(Ie)&&(r[X]=Ie.bind(n))}if(s){const X=s.call(n,n);qe(X)&&(t.data=Do(X))}if(uu=!0,i)for(const X in i){const Ie=i[X],ft=be(Ie)?Ie.bind(n,n):be(Ie.get)?Ie.get.bind(n,n):Sn,vt=!be(Ie)&&be(Ie.set)?Ie.set.bind(n):Sn,pt=gt({get:ft,set:vt});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>pt.value,set:ze=>pt.value=ze})}if(l)for(const X in l)$_(l[X],r,n,X);if(c){const X=be(c)?c.call(n):c;Reflect.ownKeys(X).forEach(Ie=>{ds(Ie,X[Ie])})}f&&Hd(f,t,"c");function Re(X,Ie){me(Ie)?Ie.forEach(ft=>X(ft.bind(n))):Ie&&X(Ie.bind(n))}if(Re(lb,d),Re(Rh,m),Re(cb,E),Re(ub,C),Re(ib,M),Re(ob,U),Re(pb,y),Re(db,re),Re(fb,P),Re(M_,D),Re(Ph,$),Re(hb,w),me(I))if(I.length){const X=t.exposed||(t.exposed={});I.forEach(Ie=>{Object.defineProperty(X,Ie,{get:()=>n[Ie],set:ft=>n[Ie]=ft})})}else t.exposed||(t.exposed={});Z&&t.render===Sn&&(t.render=Z),A!=null&&(t.inheritAttrs=A),S&&(t.components=S),b&&(t.directives=b),w&&D_(t)}function vb(t,e,n=Sn){me(t)&&(t=hu(t));for(const r in t){const s=t[r];let i;qe(s)?"default"in s?i=Xe(s.from||r,s.default,!0):i=Xe(s.from||r):i=Xe(s),at(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Hd(t,e,n){mn(me(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function $_(t,e,n,r){let s=r.includes(".")?ey(n,r):()=>n[r];if(rt(t)){const i=e[t];be(i)&&Qn(s,i)}else if(be(t))Qn(s,t.bind(n));else if(qe(t))if(me(t))t.forEach(i=>$_(i,e,n,r));else{const i=be(t.handler)?t.handler.bind(n):e[t.handler];be(i)&&Qn(s,i,t)}}function j_(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Qa(c,u,o,!0)),Qa(c,e,o)),qe(e)&&i.set(e,c),c}function Qa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Qa(t,i,n,!0),s&&s.forEach(o=>Qa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=Eb[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Eb={data:qd,props:zd,emits:zd,methods:Li,computed:Li,beforeCreate:$t,created:$t,beforeMount:$t,mounted:$t,beforeUpdate:$t,updated:$t,beforeDestroy:$t,beforeUnmount:$t,destroyed:$t,unmounted:$t,activated:$t,deactivated:$t,errorCaptured:$t,serverPrefetch:$t,components:Li,directives:Li,watch:bb,provide:qd,inject:wb};function qd(t,e){return e?t?function(){return yt(be(t)?t.call(this,this):t,be(e)?e.call(this,this):e)}:e:t}function wb(t,e){return Li(hu(t),hu(e))}function hu(t){if(me(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function $t(t,e){return t?[...new Set([].concat(t,e))]:e}function Li(t,e){return t?yt(Object.create(null),t,e):e}function zd(t,e){return t?me(t)&&me(e)?[...new Set([...t,...e])]:yt(Object.create(null),Bd(t),Bd(e??{})):e}function bb(t,e){if(!t)return e;if(!e)return t;const n=yt(Object.create(null),t);for(const r in e)n[r]=$t(t[r],e[r]);return n}function B_(){return{app:null,config:{isNativeTag:cw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tb=0;function Ib(t,e){return function(r,s=null){be(r)||(r=yt({},r)),s!=null&&!qe(s)&&(s=null);const i=B_(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:Tb++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:o1,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&be(f.install)?(o.add(f),f.install(u,...d)):be(f)&&(o.add(f),f(u,...d))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,d){return d?(i.components[f]=d,u):i.components[f]},directive(f,d){return d?(i.directives[f]=d,u):i.directives[f]},mount(f,d,m){if(!c){const E=u._ceVNode||Ce(r,s);return E.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(E,f,m),c=!0,u._container=f,f.__vue_app__=u,Dl(E.component)}},onUnmount(f){l.push(f)},unmount(){c&&(mn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,d){return i.provides[f]=d,u},runWithContext(f){const d=fs;fs=u;try{return f()}finally{fs=d}}};return u}}let fs=null;function ds(t,e){if(_t){let n=_t.provides;const r=_t.parent&&_t.parent.provides;r===n&&(n=_t.provides=Object.create(r)),n[t]=e}}function Xe(t,e,n=!1){const r=_t||Ht;if(r||fs){let s=fs?fs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&be(e)?e.call(r&&r.proxy):e}}function Ab(){return!!(_t||Ht||fs)}const H_={},q_=()=>Object.create(H_),z_=t=>Object.getPrototypeOf(t)===H_;function Sb(t,e,n,r=!1){const s={},i=q_();t.propsDefaults=Object.create(null),W_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:v_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Rb(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ve(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let m=f[d];if(Ol(t.emitsOptions,m))continue;const E=e[m];if(c)if(Fe(i,m))E!==i[m]&&(i[m]=E,u=!0);else{const C=an(m);s[C]=fu(c,l,C,E,t,!1)}else E!==i[m]&&(i[m]=E,u=!0)}}}else{W_(t,e,s,i)&&(u=!0);let f;for(const d in l)(!e||!Fe(e,d)&&((f=Is(d))===d||!Fe(e,f)))&&(c?n&&(n[d]!==void 0||n[f]!==void 0)&&(s[d]=fu(c,l,d,void 0,t,!0)):delete s[d]);if(i!==l)for(const d in i)(!e||!Fe(e,d))&&(delete i[d],u=!0)}u&&Hn(t.attrs,"set","")}function W_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Wi(c))continue;const u=e[c];let f;s&&Fe(s,f=an(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:Ol(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ve(n),u=l||He;for(let f=0;f<i.length;f++){const d=i[f];n[d]=fu(s,c,d,u[d],t,!Fe(u,d))}}return o}function fu(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Fe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&be(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Mo(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Is(n))&&(r=!0))}return r}const Pb=new WeakMap;function G_(t,e,n=!1){const r=n?Pb:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!be(t)){const f=d=>{c=!0;const[m,E]=G_(d,e,!0);yt(o,m),E&&l.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return qe(t)&&r.set(t,Bs),Bs;if(me(i))for(let f=0;f<i.length;f++){const d=an(i[f]);Wd(d)&&(o[d]=He)}else if(i)for(const f in i){const d=an(f);if(Wd(d)){const m=i[f],E=o[d]=me(m)||be(m)?{type:m}:yt({},m),C=E.type;let M=!1,U=!0;if(me(C))for(let L=0;L<C.length;++L){const D=C[L],B=be(D)&&D.name;if(B==="Boolean"){M=!0;break}else B==="String"&&(U=!1)}else M=be(C)&&C.name==="Boolean";E[0]=M,E[1]=U,(M||Fe(E,"default"))&&l.push(d)}}const u=[o,l];return qe(t)&&r.set(t,u),u}function Wd(t){return t[0]!=="$"&&!Wi(t)}const Ch=t=>t[0]==="_"||t==="$stable",xh=t=>me(t)?t.map(Tn):[Tn(t)],Cb=(t,e,n)=>{if(e._n)return e;const r=un((...s)=>xh(e(...s)),n);return r._c=!1,r},K_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ch(s))continue;const i=t[s];if(be(i))e[s]=Cb(s,i,r);else if(i!=null){const o=xh(i);e[s]=()=>o}}},Q_=(t,e)=>{const n=xh(e);t.slots.default=()=>n},Y_=(t,e,n)=>{for(const r in e)(n||!Ch(r))&&(t[r]=e[r])},xb=(t,e,n)=>{const r=t.slots=q_();if(t.vnode.shapeFlag&32){const s=e.__;s&&su(r,"__",s,!0);const i=e._;i?(Y_(r,e,n),n&&su(r,"_",i,!0)):K_(e,r)}else e&&Q_(t,e)},kb=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=He;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Y_(s,e,n):(i=!e.$stable,K_(e,s)),o=e}else e&&(Q_(t,e),o={default:1});if(i)for(const l in s)!Ch(l)&&o[l]==null&&delete s[l]},Kt=zb;function Ob(t){return Nb(t)}function Nb(t,e){const n=Sl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:d,nextSibling:m,setScopeId:E=Sn,insertStaticContent:C}=t,M=(T,R,k,H=null,K=null,O=null,N=void 0,W=null,F=!!R.dynamicChildren)=>{if(T===R)return;T&&!as(T,R)&&(H=q(T),ze(T,K,O,!0),T=null),R.patchFlag===-2&&(F=!1,R.dynamicChildren=null);const{type:Q,ref:de,shapeFlag:te}=R;switch(Q){case Nl:U(T,R,k,H);break;case Bt:L(T,R,k,H);break;case Ra:T==null&&D(R,k,H,N);break;case rn:S(T,R,k,H,K,O,N,W,F);break;default:te&1?Z(T,R,k,H,K,O,N,W,F):te&6?b(T,R,k,H,K,O,N,W,F):(te&64||te&128)&&Q.process(T,R,k,H,K,O,N,W,F,oe)}de!=null&&K?Qi(de,T&&T.ref,O,R||T,!R):de==null&&T&&T.ref!=null&&Qi(T.ref,null,O,T,!0)},U=(T,R,k,H)=>{if(T==null)r(R.el=l(R.children),k,H);else{const K=R.el=T.el;R.children!==T.children&&u(K,R.children)}},L=(T,R,k,H)=>{T==null?r(R.el=c(R.children||""),k,H):R.el=T.el},D=(T,R,k,H)=>{[T.el,T.anchor]=C(T.children,R,k,H,T.el,T.anchor)},B=({el:T,anchor:R},k,H)=>{let K;for(;T&&T!==R;)K=m(T),r(T,k,H),T=K;r(R,k,H)},$=({el:T,anchor:R})=>{let k;for(;T&&T!==R;)k=m(T),s(T),T=k;s(R)},Z=(T,R,k,H,K,O,N,W,F)=>{R.type==="svg"?N="svg":R.type==="math"&&(N="mathml"),T==null?re(R,k,H,K,O,N,W,F):w(T,R,K,O,N,W,F)},re=(T,R,k,H,K,O,N,W)=>{let F,Q;const{props:de,shapeFlag:te,transition:he,dirs:Ee}=T;if(F=T.el=o(T.type,O,de&&de.is,de),te&8?f(F,T.children):te&16&&y(T.children,F,null,H,K,Nc(T,O),N,W),Ee&&ts(T,null,H,"created"),P(F,T,T.scopeId,N,H),de){for(const Ae in de)Ae!=="value"&&!Wi(Ae)&&i(F,Ae,null,de[Ae],O,H);"value"in de&&i(F,"value",null,de.value,O),(Q=de.onVnodeBeforeMount)&&En(Q,H,T)}Ee&&ts(T,null,H,"beforeMount");const _e=Db(K,he);_e&&he.beforeEnter(F),r(F,R,k),((Q=de&&de.onVnodeMounted)||_e||Ee)&&Kt(()=>{Q&&En(Q,H,T),_e&&he.enter(F),Ee&&ts(T,null,H,"mounted")},K)},P=(T,R,k,H,K)=>{if(k&&E(T,k),H)for(let O=0;O<H.length;O++)E(T,H[O]);if(K){let O=K.subTree;if(R===O||ny(O.type)&&(O.ssContent===R||O.ssFallback===R)){const N=K.vnode;P(T,N,N.scopeId,N.slotScopeIds,K.parent)}}},y=(T,R,k,H,K,O,N,W,F=0)=>{for(let Q=F;Q<T.length;Q++){const de=T[Q]=W?br(T[Q]):Tn(T[Q]);M(null,de,R,k,H,K,O,N,W)}},w=(T,R,k,H,K,O,N)=>{const W=R.el=T.el;let{patchFlag:F,dynamicChildren:Q,dirs:de}=R;F|=T.patchFlag&16;const te=T.props||He,he=R.props||He;let Ee;if(k&&ns(k,!1),(Ee=he.onVnodeBeforeUpdate)&&En(Ee,k,R,T),de&&ts(R,T,k,"beforeUpdate"),k&&ns(k,!0),(te.innerHTML&&he.innerHTML==null||te.textContent&&he.textContent==null)&&f(W,""),Q?I(T.dynamicChildren,Q,W,k,H,Nc(R,K),O):N||Ie(T,R,W,null,k,H,Nc(R,K),O,!1),F>0){if(F&16)A(W,te,he,k,K);else if(F&2&&te.class!==he.class&&i(W,"class",null,he.class,K),F&4&&i(W,"style",te.style,he.style,K),F&8){const _e=R.dynamicProps;for(let Ae=0;Ae<_e.length;Ae++){const Ne=_e[Ae],Et=te[Ne],wt=he[Ne];(wt!==Et||Ne==="value")&&i(W,Ne,Et,wt,K,k)}}F&1&&T.children!==R.children&&f(W,R.children)}else!N&&Q==null&&A(W,te,he,k,K);((Ee=he.onVnodeUpdated)||de)&&Kt(()=>{Ee&&En(Ee,k,R,T),de&&ts(R,T,k,"updated")},H)},I=(T,R,k,H,K,O,N)=>{for(let W=0;W<R.length;W++){const F=T[W],Q=R[W],de=F.el&&(F.type===rn||!as(F,Q)||F.shapeFlag&198)?d(F.el):k;M(F,Q,de,null,H,K,O,N,!0)}},A=(T,R,k,H,K)=>{if(R!==k){if(R!==He)for(const O in R)!Wi(O)&&!(O in k)&&i(T,O,R[O],null,K,H);for(const O in k){if(Wi(O))continue;const N=k[O],W=R[O];N!==W&&O!=="value"&&i(T,O,W,N,K,H)}"value"in k&&i(T,"value",R.value,k.value,K)}},S=(T,R,k,H,K,O,N,W,F)=>{const Q=R.el=T?T.el:l(""),de=R.anchor=T?T.anchor:l("");let{patchFlag:te,dynamicChildren:he,slotScopeIds:Ee}=R;Ee&&(W=W?W.concat(Ee):Ee),T==null?(r(Q,k,H),r(de,k,H),y(R.children||[],k,de,K,O,N,W,F)):te>0&&te&64&&he&&T.dynamicChildren?(I(T.dynamicChildren,he,k,K,O,N,W),(R.key!=null||K&&R===K.subTree)&&X_(T,R,!0)):Ie(T,R,k,de,K,O,N,W,F)},b=(T,R,k,H,K,O,N,W,F)=>{R.slotScopeIds=W,T==null?R.shapeFlag&512?K.ctx.activate(R,k,H,N,F):le(R,k,H,K,O,N,F):ce(T,R,F)},le=(T,R,k,H,K,O,N)=>{const W=T.component=Jb(T,H,K);if(xl(T)&&(W.ctx.renderer=oe),e1(W,!1,N),W.asyncDep){if(K&&K.registerDep(W,Re,N),!T.el){const F=W.subTree=Ce(Bt);L(null,F,R,k)}}else Re(W,T,R,k,K,O,N)},ce=(T,R,k)=>{const H=R.component=T.component;if(Hb(T,R,k))if(H.asyncDep&&!H.asyncResolved){X(H,R,k);return}else H.next=R,H.update();else R.el=T.el,H.vnode=R},Re=(T,R,k,H,K,O,N)=>{const W=()=>{if(T.isMounted){let{next:te,bu:he,u:Ee,parent:_e,vnode:Ae}=T;{const Ct=J_(T);if(Ct){te&&(te.el=Ae.el,X(T,te,N)),Ct.asyncDep.then(()=>{T.isUnmounted||W()});return}}let Ne=te,Et;ns(T,!1),te?(te.el=Ae.el,X(T,te,N)):te=Ae,he&&Sa(he),(Et=te.props&&te.props.onVnodeBeforeUpdate)&&En(Et,_e,te,Ae),ns(T,!0);const wt=Kd(T),en=T.subTree;T.subTree=wt,M(en,wt,d(en.el),q(en),T,K,O),te.el=wt.el,Ne===null&&qb(T,wt.el),Ee&&Kt(Ee,K),(Et=te.props&&te.props.onVnodeUpdated)&&Kt(()=>En(Et,_e,te,Ae),K)}else{let te;const{el:he,props:Ee}=R,{bm:_e,m:Ae,parent:Ne,root:Et,type:wt}=T,en=Yi(R);ns(T,!1),_e&&Sa(_e),!en&&(te=Ee&&Ee.onVnodeBeforeMount)&&En(te,Ne,R),ns(T,!0);{Et.ce&&Et.ce._def.shadowRoot!==!1&&Et.ce._injectChildStyle(wt);const Ct=T.subTree=Kd(T);M(null,Ct,k,H,T,K,O),R.el=Ct.el}if(Ae&&Kt(Ae,K),!en&&(te=Ee&&Ee.onVnodeMounted)){const Ct=R;Kt(()=>En(te,Ne,Ct),K)}(R.shapeFlag&256||Ne&&Yi(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&T.a&&Kt(T.a,K),T.isMounted=!0,R=k=H=null}};T.scope.on();const F=T.effect=new i_(W);T.scope.off();const Q=T.update=F.run.bind(F),de=T.job=F.runIfDirty.bind(F);de.i=T,de.id=T.uid,F.scheduler=()=>Ah(de),ns(T,!0),Q()},X=(T,R,k)=>{R.component=T;const H=T.vnode.props;T.vnode=R,T.next=null,Rb(T,R.props,H,k),kb(T,R.children,k),Jn(),Fd(T),Zn()},Ie=(T,R,k,H,K,O,N,W,F=!1)=>{const Q=T&&T.children,de=T?T.shapeFlag:0,te=R.children,{patchFlag:he,shapeFlag:Ee}=R;if(he>0){if(he&128){vt(Q,te,k,H,K,O,N,W,F);return}else if(he&256){ft(Q,te,k,H,K,O,N,W,F);return}}Ee&8?(de&16&&Pt(Q,K,O),te!==Q&&f(k,te)):de&16?Ee&16?vt(Q,te,k,H,K,O,N,W,F):Pt(Q,K,O,!0):(de&8&&f(k,""),Ee&16&&y(te,k,H,K,O,N,W,F))},ft=(T,R,k,H,K,O,N,W,F)=>{T=T||Bs,R=R||Bs;const Q=T.length,de=R.length,te=Math.min(Q,de);let he;for(he=0;he<te;he++){const Ee=R[he]=F?br(R[he]):Tn(R[he]);M(T[he],Ee,k,null,K,O,N,W,F)}Q>de?Pt(T,K,O,!0,!1,te):y(R,k,H,K,O,N,W,F,te)},vt=(T,R,k,H,K,O,N,W,F)=>{let Q=0;const de=R.length;let te=T.length-1,he=de-1;for(;Q<=te&&Q<=he;){const Ee=T[Q],_e=R[Q]=F?br(R[Q]):Tn(R[Q]);if(as(Ee,_e))M(Ee,_e,k,null,K,O,N,W,F);else break;Q++}for(;Q<=te&&Q<=he;){const Ee=T[te],_e=R[he]=F?br(R[he]):Tn(R[he]);if(as(Ee,_e))M(Ee,_e,k,null,K,O,N,W,F);else break;te--,he--}if(Q>te){if(Q<=he){const Ee=he+1,_e=Ee<de?R[Ee].el:H;for(;Q<=he;)M(null,R[Q]=F?br(R[Q]):Tn(R[Q]),k,_e,K,O,N,W,F),Q++}}else if(Q>he)for(;Q<=te;)ze(T[Q],K,O,!0),Q++;else{const Ee=Q,_e=Q,Ae=new Map;for(Q=_e;Q<=he;Q++){const bt=R[Q]=F?br(R[Q]):Tn(R[Q]);bt.key!=null&&Ae.set(bt.key,Q)}let Ne,Et=0;const wt=he-_e+1;let en=!1,Ct=0;const hr=new Array(wt);for(Q=0;Q<wt;Q++)hr[Q]=0;for(Q=Ee;Q<=te;Q++){const bt=T[Q];if(Et>=wt){ze(bt,K,O,!0);continue}let tn;if(bt.key!=null)tn=Ae.get(bt.key);else for(Ne=_e;Ne<=he;Ne++)if(hr[Ne-_e]===0&&as(bt,R[Ne])){tn=Ne;break}tn===void 0?ze(bt,K,O,!0):(hr[tn-_e]=Q+1,tn>=Ct?Ct=tn:en=!0,M(bt,R[tn],k,null,K,O,N,W,F),Et++)}const wi=en?Vb(hr):Bs;for(Ne=wi.length-1,Q=wt-1;Q>=0;Q--){const bt=_e+Q,tn=R[bt],Jo=bt+1<de?R[bt+1].el:H;hr[Q]===0?M(null,tn,k,Jo,K,O,N,W,F):en&&(Ne<0||Q!==wi[Ne]?pt(tn,k,Jo,2):Ne--)}}},pt=(T,R,k,H,K=null)=>{const{el:O,type:N,transition:W,children:F,shapeFlag:Q}=T;if(Q&6){pt(T.component.subTree,R,k,H);return}if(Q&128){T.suspense.move(R,k,H);return}if(Q&64){N.move(T,R,k,oe);return}if(N===rn){r(O,R,k);for(let te=0;te<F.length;te++)pt(F[te],R,k,H);r(T.anchor,R,k);return}if(N===Ra){B(T,R,k);return}if(H!==2&&Q&1&&W)if(H===0)W.beforeEnter(O),r(O,R,k),Kt(()=>W.enter(O),K);else{const{leave:te,delayLeave:he,afterLeave:Ee}=W,_e=()=>{T.ctx.isUnmounted?s(O):r(O,R,k)},Ae=()=>{te(O,()=>{_e(),Ee&&Ee()})};he?he(O,_e,Ae):Ae()}else r(O,R,k)},ze=(T,R,k,H=!1,K=!1)=>{const{type:O,props:N,ref:W,children:F,dynamicChildren:Q,shapeFlag:de,patchFlag:te,dirs:he,cacheIndex:Ee}=T;if(te===-2&&(K=!1),W!=null&&(Jn(),Qi(W,null,k,T,!0),Zn()),Ee!=null&&(R.renderCache[Ee]=void 0),de&256){R.ctx.deactivate(T);return}const _e=de&1&&he,Ae=!Yi(T);let Ne;if(Ae&&(Ne=N&&N.onVnodeBeforeUnmount)&&En(Ne,R,T),de&6)Zt(T.component,k,H);else{if(de&128){T.suspense.unmount(k,H);return}_e&&ts(T,null,R,"beforeUnmount"),de&64?T.type.remove(T,R,k,oe,H):Q&&!Q.hasOnce&&(O!==rn||te>0&&te&64)?Pt(Q,R,k,!1,!0):(O===rn&&te&384||!K&&de&16)&&Pt(F,R,k),H&&Ke(T)}(Ae&&(Ne=N&&N.onVnodeUnmounted)||_e)&&Kt(()=>{Ne&&En(Ne,R,T),_e&&ts(T,null,R,"unmounted")},k)},Ke=T=>{const{type:R,el:k,anchor:H,transition:K}=T;if(R===rn){vn(k,H);return}if(R===Ra){$(T);return}const O=()=>{s(k),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(T.shapeFlag&1&&K&&!K.persisted){const{leave:N,delayLeave:W}=K,F=()=>N(k,O);W?W(T.el,O,F):F()}else O()},vn=(T,R)=>{let k;for(;T!==R;)k=m(T),s(T),T=k;s(R)},Zt=(T,R,k)=>{const{bum:H,scope:K,job:O,subTree:N,um:W,m:F,a:Q,parent:de,slots:{__:te}}=T;Gd(F),Gd(Q),H&&Sa(H),de&&me(te)&&te.forEach(he=>{de.renderCache[he]=void 0}),K.stop(),O&&(O.flags|=8,ze(N,T,R,k)),W&&Kt(W,R),Kt(()=>{T.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},Pt=(T,R,k,H=!1,K=!1,O=0)=>{for(let N=O;N<T.length;N++)ze(T[N],R,k,H,K)},q=T=>{if(T.shapeFlag&6)return q(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const R=m(T.anchor||T.el),k=R&&R[tb];return k?m(k):R};let se=!1;const ee=(T,R,k)=>{T==null?R._vnode&&ze(R._vnode,null,null,!0):M(R._vnode||null,T,R,null,null,null,k),R._vnode=T,se||(se=!0,Fd(),A_(),se=!1)},oe={p:M,um:ze,m:pt,r:Ke,mt:le,mc:y,pc:Ie,pbc:I,n:q,o:t};return{render:ee,hydrate:void 0,createApp:Ib(ee)}}function Nc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ns({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Db(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function X_(t,e,n=!1){const r=t.children,s=e.children;if(me(r)&&me(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=br(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&X_(o,l)),l.type===Nl&&(l.el=o.el),l.type===Bt&&!l.el&&(l.el=o.el)}}function Vb(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function J_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:J_(e)}function Gd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Mb=Symbol.for("v-scx"),Lb=()=>Xe(Mb);function Qn(t,e,n){return Z_(t,e,n)}function Z_(t,e,n=He){const{immediate:r,deep:s,flush:i,once:o}=n,l=yt({},n),c=e&&r||!e&&i!=="post";let u;if(go){if(i==="sync"){const E=Lb();u=E.__watcherHandles||(E.__watcherHandles=[])}else if(!c){const E=()=>{};return E.stop=Sn,E.resume=Sn,E.pause=Sn,E}}const f=_t;l.call=(E,C,M)=>mn(E,f,C,M);let d=!1;i==="post"?l.scheduler=E=>{Kt(E,f&&f.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(E,C)=>{C?E():Ah(E)}),l.augmentJob=E=>{e&&(E.flags|=4),d&&(E.flags|=2,f&&(E.id=f.uid,E.i=f))};const m=Xw(t,e,l);return go&&(u?u.push(m):c&&m()),m}function Fb(t,e,n){const r=this.proxy,s=rt(t)?t.includes(".")?ey(r,t):()=>r[t]:t.bind(r,r);let i;be(e)?i=e:(i=e.handler,n=e);const o=Mo(this),l=Z_(s,i.bind(r),n);return o(),l}function ey(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ub=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${an(e)}Modifiers`]||t[`${Is(e)}Modifiers`];function $b(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||He;let s=n;const i=e.startsWith("update:"),o=i&&Ub(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>rt(f)?f.trim():f)),o.number&&(s=n.map(Ha)));let l,c=r[l=Sc(e)]||r[l=Sc(an(e))];!c&&i&&(c=r[l=Sc(Is(e))]),c&&mn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,mn(u,t,6,s)}}function ty(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!be(t)){const c=u=>{const f=ty(u,e,!0);f&&(l=!0,yt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(qe(t)&&r.set(t,null),null):(me(i)?i.forEach(c=>o[c]=null):yt(o,i),qe(t)&&r.set(t,o),o)}function Ol(t,e){return!t||!Tl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Fe(t,e[0].toLowerCase()+e.slice(1))||Fe(t,Is(e))||Fe(t,e))}function Kd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:d,data:m,setupState:E,ctx:C,inheritAttrs:M}=t,U=Ka(t);let L,D;try{if(n.shapeFlag&4){const $=s||r,Z=$;L=Tn(u.call(Z,$,f,d,E,m,C)),D=l}else{const $=e;L=Tn($.length>1?$(d,{attrs:l,slots:o,emit:c}):$(d,null)),D=e.props?l:jb(l)}}catch($){Ji.length=0,Pl($,t,1),L=Ce(Bt)}let B=L;if(D&&M!==!1){const $=Object.keys(D),{shapeFlag:Z}=B;$.length&&Z&7&&(i&&$.some(fh)&&(D=Bb(D,i)),B=Fr(B,D,!1,!0))}return n.dirs&&(B=Fr(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&po(B,n.transition),L=B,Ka(U),L}const jb=t=>{let e;for(const n in t)(n==="class"||n==="style"||Tl(n))&&((e||(e={}))[n]=t[n]);return e},Bb=(t,e)=>{const n={};for(const r in t)(!fh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Hb(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Qd(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const m=f[d];if(o[m]!==r[m]&&!Ol(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Qd(r,o,u):!0:!!o;return!1}function Qd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ol(n,i))return!0}return!1}function qb({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ny=t=>t.__isSuspense;function zb(t,e){e&&e.pendingBranch?me(t)?e.effects.push(...t):e.effects.push(t):eb(t)}const rn=Symbol.for("v-fgt"),Nl=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),Ra=Symbol.for("v-stc"),Ji=[];let Yt=null;function ae(t=!1){Ji.push(Yt=t?null:[])}function Wb(){Ji.pop(),Yt=Ji[Ji.length-1]||null}let mo=1;function Yd(t,e=!1){mo+=t,t<0&&Yt&&e&&(Yt.hasOnce=!0)}function ry(t){return t.dynamicChildren=mo>0?Yt||Bs:null,Wb(),mo>0&&Yt&&Yt.push(t),t}function ue(t,e,n,r,s,i){return ry(g(t,e,n,r,s,i,!0))}function sy(t,e,n,r,s){return ry(Ce(t,e,n,r,s,!0))}function Ya(t){return t?t.__v_isVNode===!0:!1}function as(t,e){return t.type===e.type&&t.key===e.key}const iy=({key:t})=>t??null,Pa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?rt(t)||at(t)||be(t)?{i:Ht,r:t,k:e,f:!!n}:t:null);function g(t,e=null,n=null,r=0,s=null,i=t===rn?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&iy(e),ref:e&&Pa(e),scopeId:R_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ht};return l?(kh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=rt(n)?8:16),mo>0&&!o&&Yt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Yt.push(c),c}const Ce=Gb;function Gb(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===F_)&&(t=Bt),Ya(t)){const l=Fr(t,e,!0);return n&&kh(l,n),mo>0&&!i&&Yt&&(l.shapeFlag&6?Yt[Yt.indexOf(t)]=l:Yt.push(l)),l.patchFlag=-2,l}if(i1(t)&&(t=t.__vccOpts),e){e=Kb(e);let{class:l,style:c}=e;l&&!rt(l)&&(e.class=$e(l)),qe(c)&&(Th(c)&&!me(c)&&(c=yt({},c)),e.style=mh(c))}const o=rt(t)?1:ny(t)?128:P_(t)?64:qe(t)?4:be(t)?2:0;return g(t,e,n,r,s,o,i,!0)}function Kb(t){return t?Th(t)||z_(t)?yt({},t):t:null}function Fr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?Qb(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&iy(u),ref:e&&e.ref?n&&i?me(i)?i.concat(Pa(e)):[i,Pa(e)]:Pa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==rn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Fr(t.ssContent),ssFallback:t.ssFallback&&Fr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&po(f,c.clone(f)),f}function Se(t=" ",e=0){return Ce(Nl,null,t,e)}function oy(t,e){const n=Ce(Ra,null,t);return n.staticCount=e,n}function et(t="",e=!1){return e?(ae(),sy(Bt,null,t)):Ce(Bt,null,t)}function Tn(t){return t==null||typeof t=="boolean"?Ce(Bt):me(t)?Ce(rn,null,t.slice()):Ya(t)?br(t):Ce(Nl,null,String(t))}function br(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Fr(t)}function kh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(me(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),kh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!z_(e)?e._ctx=Ht:s===3&&Ht&&(Ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else be(e)?(e={default:e,_ctx:Ht},n=32):(e=String(e),r&64?(n=16,e=[Se(e)]):n=8);t.children=e,t.shapeFlag|=n}function Qb(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=$e([e.class,r.class]));else if(s==="style")e.style=mh([e.style,r.style]);else if(Tl(s)){const i=e[s],o=r[s];o&&i!==o&&!(me(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function En(t,e,n,r=null){mn(t,e,7,[n,r])}const Yb=B_();let Xb=0;function Jb(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Yb,i={uid:Xb++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new n_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:G_(r,s),emitsOptions:ty(r,s),emit:null,emitted:null,propsDefaults:He,inheritAttrs:r.inheritAttrs,ctx:He,data:He,props:He,attrs:He,slots:He,refs:He,setupState:He,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=$b.bind(null,i),t.ce&&t.ce(i),i}let _t=null;const Zb=()=>_t||Ht;let Xa,du;{const t=Sl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Xa=e("__VUE_INSTANCE_SETTERS__",n=>_t=n),du=e("__VUE_SSR_SETTERS__",n=>go=n)}const Mo=t=>{const e=_t;return Xa(t),t.scope.on(),()=>{t.scope.off(),Xa(e)}},Xd=()=>{_t&&_t.scope.off(),Xa(null)};function ay(t){return t.vnode.shapeFlag&4}let go=!1;function e1(t,e=!1,n=!1){e&&du(e);const{props:r,children:s}=t.vnode,i=ay(t);Sb(t,r,i,e),xb(t,s,n||e);const o=i?t1(t,e):void 0;return e&&du(!1),o}function t1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,_b);const{setup:r}=n;if(r){Jn();const s=t.setupContext=r.length>1?r1(t):null,i=Mo(t),o=Vo(r,t,0,[t.props,s]),l=Yg(o);if(Zn(),i(),(l||t.sp)&&!Yi(t)&&D_(t),l){if(o.then(Xd,Xd),e)return o.then(c=>{Jd(t,c)}).catch(c=>{Pl(c,t,0)});t.asyncDep=o}else Jd(t,o)}else ly(t)}function Jd(t,e,n){be(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:qe(e)&&(t.setupState=b_(e)),ly(t)}function ly(t,e,n){const r=t.type;t.render||(t.render=r.render||Sn);{const s=Mo(t);Jn();try{yb(t)}finally{Zn(),s()}}}const n1={get(t,e){return Vt(t,"get",""),t[e]}};function r1(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,n1),slots:t.slots,emit:t.emit,expose:e}}function Dl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(b_(Ih(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xi)return Xi[n](t)},has(e,n){return n in e||n in Xi}})):t.proxy}function s1(t,e=!0){return be(t)?t.displayName||t.name:t.name||e&&t.__name}function i1(t){return be(t)&&"__vccOpts"in t}const gt=(t,e)=>Qw(t,e,go);function Xs(t,e,n){const r=arguments.length;return r===2?qe(e)&&!me(e)?Ya(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ya(n)&&(n=[n]),Ce(t,e,n))}const o1="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pu;const Zd=typeof window<"u"&&window.trustedTypes;if(Zd)try{pu=Zd.createPolicy("vue",{createHTML:t=>t})}catch{}const cy=pu?t=>pu.createHTML(t):t=>t,a1="http://www.w3.org/2000/svg",l1="http://www.w3.org/1998/Math/MathML",jn=typeof document<"u"?document:null,ep=jn&&jn.createElement("template"),c1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?jn.createElementNS(a1,t):e==="mathml"?jn.createElementNS(l1,t):n?jn.createElement(t,{is:n}):jn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>jn.createTextNode(t),createComment:t=>jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ep.innerHTML=cy(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=ep.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},mr="transition",Vi="animation",_o=Symbol("_vtc"),uy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},u1=yt({},C_,uy),h1=t=>(t.displayName="Transition",t.props=u1,t),Bn=h1((t,{slots:e})=>Xs(sb,f1(t),e)),rs=(t,e=[])=>{me(t)?t.forEach(n=>n(...e)):t&&t(...e)},tp=t=>t?me(t)?t.some(e=>e.length>1):t.length>1:!1;function f1(t){const e={};for(const S in t)S in uy||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:f=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:E=`${n}-leave-to`}=t,C=d1(s),M=C&&C[0],U=C&&C[1],{onBeforeEnter:L,onEnter:D,onEnterCancelled:B,onLeave:$,onLeaveCancelled:Z,onBeforeAppear:re=L,onAppear:P=D,onAppearCancelled:y=B}=e,w=(S,b,le,ce)=>{S._enterCancelled=ce,ss(S,b?f:l),ss(S,b?u:o),le&&le()},I=(S,b)=>{S._isLeaving=!1,ss(S,d),ss(S,E),ss(S,m),b&&b()},A=S=>(b,le)=>{const ce=S?P:D,Re=()=>w(b,S,le);rs(ce,[b,Re]),np(()=>{ss(b,S?c:i),Un(b,S?f:l),tp(ce)||rp(b,r,M,Re)})};return yt(e,{onBeforeEnter(S){rs(L,[S]),Un(S,i),Un(S,o)},onBeforeAppear(S){rs(re,[S]),Un(S,c),Un(S,u)},onEnter:A(!1),onAppear:A(!0),onLeave(S,b){S._isLeaving=!0;const le=()=>I(S,b);Un(S,d),S._enterCancelled?(Un(S,m),op()):(op(),Un(S,m)),np(()=>{S._isLeaving&&(ss(S,d),Un(S,E),tp($)||rp(S,r,U,le))}),rs($,[S,le])},onEnterCancelled(S){w(S,!1,void 0,!0),rs(B,[S])},onAppearCancelled(S){w(S,!0,void 0,!0),rs(y,[S])},onLeaveCancelled(S){I(S),rs(Z,[S])}})}function d1(t){if(t==null)return null;if(qe(t))return[Dc(t.enter),Dc(t.leave)];{const e=Dc(t);return[e,e]}}function Dc(t){return pw(t)}function Un(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[_o]||(t[_o]=new Set)).add(e)}function ss(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[_o];n&&(n.delete(e),n.size||(t[_o]=void 0))}function np(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let p1=0;function rp(t,e,n,r){const s=t._endId=++p1,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=m1(t,e);if(!o)return r();const u=o+"end";let f=0;const d=()=>{t.removeEventListener(u,m),i()},m=E=>{E.target===t&&++f>=c&&d()};setTimeout(()=>{f<c&&d()},l+1),t.addEventListener(u,m)}function m1(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${mr}Delay`),i=r(`${mr}Duration`),o=sp(s,i),l=r(`${Vi}Delay`),c=r(`${Vi}Duration`),u=sp(l,c);let f=null,d=0,m=0;e===mr?o>0&&(f=mr,d=o,m=i.length):e===Vi?u>0&&(f=Vi,d=u,m=c.length):(d=Math.max(o,u),f=d>0?o>u?mr:Vi:null,m=f?f===mr?i.length:c.length:0);const E=f===mr&&/\b(transform|all)(,|$)/.test(r(`${mr}Property`).toString());return{type:f,timeout:d,propCount:m,hasTransform:E}}function sp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>ip(n)+ip(t[r])))}function ip(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function op(){return document.body.offsetHeight}function g1(t,e,n){const r=t[_o];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ap=Symbol("_vod"),_1=Symbol("_vsh"),y1=Symbol(""),v1=/(^|;)\s*display\s*:/;function E1(t,e,n){const r=t.style,s=rt(n);let i=!1;if(n&&!s){if(e)if(rt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ca(r,l,"")}else for(const o in e)n[o]==null&&Ca(r,o,"");for(const o in n)o==="display"&&(i=!0),Ca(r,o,n[o])}else if(s){if(e!==n){const o=r[y1];o&&(n+=";"+o),r.cssText=n,i=v1.test(n)}}else e&&t.removeAttribute("style");ap in t&&(t[ap]=i?r.display:"",t[_1]&&(r.display="none"))}const lp=/\s*!important$/;function Ca(t,e,n){if(me(n))n.forEach(r=>Ca(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=w1(t,e);lp.test(n)?t.setProperty(Is(r),n.replace(lp,""),"important"):t[r]=n}}const cp=["Webkit","Moz","ms"],Vc={};function w1(t,e){const n=Vc[e];if(n)return n;let r=an(e);if(r!=="filter"&&r in t)return Vc[e]=r;r=Al(r);for(let s=0;s<cp.length;s++){const i=cp[s]+r;if(i in t)return Vc[e]=i}return e}const up="http://www.w3.org/1999/xlink";function hp(t,e,n,r,s,i=Ew(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(up,e.slice(6,e.length)):t.setAttributeNS(up,e,n):n==null||i&&!Zg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Nn(n)?String(n):n)}function fp(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?cy(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Zg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Ir(t,e,n,r){t.addEventListener(e,n,r)}function b1(t,e,n,r){t.removeEventListener(e,n,r)}const dp=Symbol("_vei");function T1(t,e,n,r,s=null){const i=t[dp]||(t[dp]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=I1(e);if(r){const u=i[e]=R1(r,s);Ir(t,l,u,c)}else o&&(b1(t,l,o,c),i[e]=void 0)}}const pp=/(?:Once|Passive|Capture)$/;function I1(t){let e;if(pp.test(t)){e={};let r;for(;r=t.match(pp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Is(t.slice(2)),e]}let Mc=0;const A1=Promise.resolve(),S1=()=>Mc||(A1.then(()=>Mc=0),Mc=Date.now());function R1(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;mn(P1(r,n.value),e,5,[r])};return n.value=t,n.attached=S1(),n}function P1(t,e){if(me(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const mp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,C1=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?g1(t,r,o):e==="style"?E1(t,n,r):Tl(e)?fh(e)||T1(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):x1(t,e,r,o))?(fp(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&hp(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!rt(r))?fp(t,an(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),hp(t,e,r,o))};function x1(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&mp(e)&&be(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return mp(e)&&rt(n)?!1:e in t}const Js=t=>{const e=t.props["onUpdate:modelValue"]||!1;return me(e)?n=>Sa(e,n):e};function k1(t){t.target.composing=!0}function gp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Yn=Symbol("_assign"),Ze={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Yn]=Js(s);const i=r||s.props&&s.props.type==="number";Ir(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Ha(l)),t[Yn](l)}),n&&Ir(t,"change",()=>{t.value=t.value.trim()}),e||(Ir(t,"compositionstart",k1),Ir(t,"compositionend",gp),Ir(t,"change",gp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Yn]=Js(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ha(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},O1={deep:!0,created(t,e,n){t[Yn]=Js(n),Ir(t,"change",()=>{const r=t._modelValue,s=yo(t),i=t.checked,o=t[Yn];if(me(r)){const l=gh(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(ci(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(hy(t,i))})},mounted:_p,beforeUpdate(t,e,n){t[Yn]=Js(n),_p(t,e,n)}};function _p(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(me(e))s=gh(e,r.props.value)>-1;else if(ci(e))s=e.has(r.props.value);else{if(e===n)return;s=No(e,hy(t,!0))}t.checked!==s&&(t.checked=s)}const Ja={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ci(e);Ir(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ha(yo(o)):yo(o));t[Yn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Cl(()=>{t._assigning=!1})}),t[Yn]=Js(r)},mounted(t,{value:e}){yp(t,e)},beforeUpdate(t,e,n){t[Yn]=Js(n)},updated(t,{value:e}){t._assigning||yp(t,e)}};function yp(t,e){const n=t.multiple,r=me(e);if(!(n&&!r&&!ci(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=yo(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=gh(e,l)>-1}else o.selected=e.has(l);else if(No(yo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function yo(t){return"_value"in t?t._value:t.value}function hy(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const N1=["ctrl","shift","alt","meta"],D1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>N1.some(n=>t[`${n}Key`]&&!e.includes(n))},st=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=D1[e[o]];if(l&&l(s,e))return}return t(s,...i)})},V1=yt({patchProp:C1},c1);let vp;function M1(){return vp||(vp=Ob(V1))}const L1=(...t)=>{const e=M1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=U1(r);if(!s)return;const i=e._component;!be(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,F1(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function F1(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function U1(t){return rt(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Vs=typeof document<"u";function fy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&fy(t.default)}const Le=Object.assign;function Lc(t,e){const n={};for(const r in e){const s=e[r];n[r]=gn(s)?s.map(t):t(s)}return n}const Zi=()=>{},gn=Array.isArray,dy=/#/g,j1=/&/g,B1=/\//g,H1=/=/g,q1=/\?/g,py=/\+/g,z1=/%5B/g,W1=/%5D/g,my=/%5E/g,G1=/%60/g,gy=/%7B/g,K1=/%7C/g,_y=/%7D/g,Q1=/%20/g;function Oh(t){return encodeURI(""+t).replace(K1,"|").replace(z1,"[").replace(W1,"]")}function Y1(t){return Oh(t).replace(gy,"{").replace(_y,"}").replace(my,"^")}function mu(t){return Oh(t).replace(py,"%2B").replace(Q1,"+").replace(dy,"%23").replace(j1,"%26").replace(G1,"`").replace(gy,"{").replace(_y,"}").replace(my,"^")}function X1(t){return mu(t).replace(H1,"%3D")}function J1(t){return Oh(t).replace(dy,"%23").replace(q1,"%3F")}function Z1(t){return t==null?"":J1(t).replace(B1,"%2F")}function vo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const eT=/\/$/,tT=t=>t.replace(eT,"");function Fc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=iT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:vo(o)}}function nT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ep(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function rT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Zs(e.matched[r],n.matched[s])&&yy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function yy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!sT(t[n],e[n]))return!1;return!0}function sT(t,e){return gn(t)?wp(t,e):gn(e)?wp(e,t):t===e}function wp(t,e){return gn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function iT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const gr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Eo;(function(t){t.pop="pop",t.push="push"})(Eo||(Eo={}));var eo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(eo||(eo={}));function oT(t){if(!t)if(Vs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),tT(t)}const aT=/^[^#]+#/;function lT(t,e){return t.replace(aT,"#")+e}function cT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Vl=()=>({left:window.scrollX,top:window.scrollY});function uT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=cT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function bp(t,e){return(history.state?history.state.position-e:-1)+t}const gu=new Map;function hT(t,e){gu.set(t,e)}function fT(t){const e=gu.get(t);return gu.delete(t),e}let dT=()=>location.protocol+"//"+location.host;function vy(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Ep(c,"")}return Ep(n,t)+r+s}function pT(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const E=vy(t,location),C=n.value,M=e.value;let U=0;if(m){if(n.value=E,e.value=m,o&&o===C){o=null;return}U=M?m.position-M.position:0}else r(E);s.forEach(L=>{L(n.value,C,{delta:U,type:Eo.pop,direction:U?U>0?eo.forward:eo.back:eo.unknown})})};function c(){o=n.value}function u(m){s.push(m);const E=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(E),E}function f(){const{history:m}=window;m.state&&m.replaceState(Le({},m.state,{scroll:Vl()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function Tp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Vl():null}}function mT(t){const{history:e,location:n}=window,r={value:vy(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:dT()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(E){console.error(E),n[f?"replace":"assign"](m)}}function o(c,u){const f=Le({},e.state,Tp(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,f,!0),r.value=c}function l(c,u){const f=Le({},s.value,e.state,{forward:c,scroll:Vl()});i(f.current,f,!0);const d=Le({},Tp(r.value,c,null),{position:f.position+1},u);i(c,d,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function gT(t){t=oT(t);const e=mT(t),n=pT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Le({location:"",base:t,go:r,createHref:lT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function _T(t){return typeof t=="string"||t&&typeof t=="object"}function Ey(t){return typeof t=="string"||typeof t=="symbol"}const wy=Symbol("");var Ip;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ip||(Ip={}));function ei(t,e){return Le(new Error,{type:t,[wy]:!0},e)}function $n(t,e){return t instanceof Error&&wy in t&&(e==null||!!(t.type&e))}const Ap="[^/]+?",yT={sensitive:!1,strict:!1,start:!0,end:!0},vT=/[.+*?^${}()[\]/\\]/g;function ET(t,e){const n=Le({},yT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const m=u[d];let E=40+(n.sensitive?.25:0);if(m.type===0)d||(s+="/"),s+=m.value.replace(vT,"\\$&"),E+=40;else if(m.type===1){const{value:C,repeatable:M,optional:U,regexp:L}=m;i.push({name:C,repeatable:M,optional:U});const D=L||Ap;if(D!==Ap){E+=10;try{new RegExp(`(${D})`)}catch($){throw new Error(`Invalid custom RegExp for param "${C}" (${D}): `+$.message)}}let B=M?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;d||(B=U&&u.length<2?`(?:/${B})`:"/"+B),U&&(B+="?"),s+=B,E+=20,U&&(E+=-8),M&&(E+=-20),D===".*"&&(E+=-50)}f.push(E)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),d={};if(!f)return null;for(let m=1;m<f.length;m++){const E=f[m]||"",C=i[m-1];d[C.name]=E&&C.repeatable?E.split("/"):E}return d}function c(u){let f="",d=!1;for(const m of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const E of m)if(E.type===0)f+=E.value;else if(E.type===1){const{value:C,repeatable:M,optional:U}=E,L=C in u?u[C]:"";if(gn(L)&&!M)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const D=gn(L)?L.join("/"):L;if(!D)if(U)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${C}"`);f+=D}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function wT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function by(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=wT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Sp(r))return 1;if(Sp(s))return-1}return s.length-r.length}function Sp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const bT={type:0,value:""},TT=/[a-zA-Z0-9_]/;function IT(t){if(!t)return[[]];if(t==="/")return[[bT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(E){throw new Error(`ERR (${n})/"${u}": ${E}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:TT.test(c)?m():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function AT(t,e,n){const r=ET(IT(t.path),n),s=Le(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function ST(t,e){const n=[],r=new Map;e=xp({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,m,E){const C=!E,M=Pp(d);M.aliasOf=E&&E.record;const U=xp(e,d),L=[M];if("alias"in d){const $=typeof d.alias=="string"?[d.alias]:d.alias;for(const Z of $)L.push(Pp(Le({},M,{components:E?E.record.components:M.components,path:Z,aliasOf:E?E.record:M})))}let D,B;for(const $ of L){const{path:Z}=$;if(m&&Z[0]!=="/"){const re=m.record.path,P=re[re.length-1]==="/"?"":"/";$.path=m.record.path+(Z&&P+Z)}if(D=AT($,m,U),E?E.alias.push(D):(B=B||D,B!==D&&B.alias.push(D),C&&d.name&&!Cp(D)&&o(d.name)),Ty(D)&&c(D),M.children){const re=M.children;for(let P=0;P<re.length;P++)i(re[P],D,E&&E.children[P])}E=E||D}return B?()=>{o(B)}:Zi}function o(d){if(Ey(d)){const m=r.get(d);m&&(r.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function c(d){const m=CT(d,n);n.splice(m,0,d),d.record.name&&!Cp(d)&&r.set(d.record.name,d)}function u(d,m){let E,C={},M,U;if("name"in d&&d.name){if(E=r.get(d.name),!E)throw ei(1,{location:d});U=E.record.name,C=Le(Rp(m.params,E.keys.filter(B=>!B.optional).concat(E.parent?E.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),d.params&&Rp(d.params,E.keys.map(B=>B.name))),M=E.stringify(C)}else if(d.path!=null)M=d.path,E=n.find(B=>B.re.test(M)),E&&(C=E.parse(M),U=E.record.name);else{if(E=m.name?r.get(m.name):n.find(B=>B.re.test(m.path)),!E)throw ei(1,{location:d,currentLocation:m});U=E.record.name,C=Le({},m.params,d.params),M=E.stringify(C)}const L=[];let D=E;for(;D;)L.unshift(D.record),D=D.parent;return{name:U,path:M,params:C,matched:L,meta:PT(L)}}t.forEach(d=>i(d));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Rp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Pp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:RT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function RT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Cp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function PT(t){return t.reduce((e,n)=>Le(e,n.meta),{})}function xp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function CT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;by(t,e[i])<0?r=i:n=i+1}const s=xT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function xT(t){let e=t;for(;e=e.parent;)if(Ty(e)&&by(t,e)===0)return e}function Ty({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function kT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(py," "),o=i.indexOf("="),l=vo(o<0?i:i.slice(0,o)),c=o<0?null:vo(i.slice(o+1));if(l in e){let u=e[l];gn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function kp(t){let e="";for(let n in t){const r=t[n];if(n=X1(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(gn(r)?r.map(i=>i&&mu(i)):[r&&mu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function OT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=gn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const NT=Symbol(""),Op=Symbol(""),Ml=Symbol(""),Nh=Symbol(""),_u=Symbol("");function Mi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Tr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(ei(4,{from:n,to:e})):m instanceof Error?c(m):_T(m)?c(ei(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(f);t.length<3&&(d=d.then(u)),d.catch(m=>c(m))})}function Uc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(fy(c)){const f=(c.__vccOpts||c)[e];f&&i.push(Tr(f,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=$1(f)?f.default:f;o.mods[l]=f,o.components[l]=d;const E=(d.__vccOpts||d)[e];return E&&Tr(E,n,r,o,l,s)()}))}}return i}function Np(t){const e=Xe(Ml),n=Xe(Nh),r=gt(()=>{const c=v(t.to);return e.resolve(c)}),s=gt(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],d=n.matched;if(!f||!d.length)return-1;const m=d.findIndex(Zs.bind(null,f));if(m>-1)return m;const E=Dp(c[u-2]);return u>1&&Dp(f)===E&&d[d.length-1].path!==E?d.findIndex(Zs.bind(null,c[u-2])):m}),i=gt(()=>s.value>-1&&FT(n.params,r.value.params)),o=gt(()=>s.value>-1&&s.value===n.matched.length-1&&yy(n.params,r.value.params));function l(c={}){if(LT(c)){const u=e[v(t.replace)?"replace":"push"](v(t.to)).catch(Zi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:gt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function DT(t){return t.length===1?t[0]:t}const VT=Sh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Np,setup(t,{slots:e}){const n=Do(Np(t)),{options:r}=Xe(Ml),s=gt(()=>({[Vp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Vp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&DT(e.default(n));return t.custom?i:Xs("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),MT=VT;function LT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function FT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!gn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Dp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Vp=(t,e,n)=>t??e??n,UT=Sh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Xe(_u),s=gt(()=>t.route||r.value),i=Xe(Op,0),o=gt(()=>{let u=v(i);const{matched:f}=s.value;let d;for(;(d=f[u])&&!d.components;)u++;return u}),l=gt(()=>s.value.matched[o.value]);ds(Op,gt(()=>o.value+1)),ds(NT,l),ds(_u,s);const c=pe();return Qn(()=>[c.value,l.value,t.name],([u,f,d],[m,E,C])=>{f&&(f.instances[d]=u,E&&E!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=E.leaveGuards),f.updateGuards.size||(f.updateGuards=E.updateGuards))),u&&f&&(!E||!Zs(f,E)||!m)&&(f.enterCallbacks[d]||[]).forEach(M=>M(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,d=l.value,m=d&&d.components[f];if(!m)return Mp(n.default,{Component:m,route:u});const E=d.props[f],C=E?E===!0?u.params:typeof E=="function"?E(u):E:null,U=Xs(m,Le({},C,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(d.instances[f]=null)},ref:c}));return Mp(n.default,{Component:U,route:u})||U}}});function Mp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Iy=UT;function $T(t){const e=ST(t.routes,t),n=t.parseQuery||kT,r=t.stringifyQuery||kp,s=t.history,i=Mi(),o=Mi(),l=Mi(),c=Bw(gr);let u=gr;Vs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Lc.bind(null,q=>""+q),d=Lc.bind(null,Z1),m=Lc.bind(null,vo);function E(q,se){let ee,oe;return Ey(q)?(ee=e.getRecordMatcher(q),oe=se):oe=q,e.addRoute(oe,ee)}function C(q){const se=e.getRecordMatcher(q);se&&e.removeRoute(se)}function M(){return e.getRoutes().map(q=>q.record)}function U(q){return!!e.getRecordMatcher(q)}function L(q,se){if(se=Le({},se||c.value),typeof q=="string"){const k=Fc(n,q,se.path),H=e.resolve({path:k.path},se),K=s.createHref(k.fullPath);return Le(k,H,{params:m(H.params),hash:vo(k.hash),redirectedFrom:void 0,href:K})}let ee;if(q.path!=null)ee=Le({},q,{path:Fc(n,q.path,se.path).path});else{const k=Le({},q.params);for(const H in k)k[H]==null&&delete k[H];ee=Le({},q,{params:d(k)}),se.params=d(se.params)}const oe=e.resolve(ee,se),Oe=q.hash||"";oe.params=f(m(oe.params));const T=nT(r,Le({},q,{hash:Y1(Oe),path:oe.path})),R=s.createHref(T);return Le({fullPath:T,hash:Oe,query:r===kp?OT(q.query):q.query||{}},oe,{redirectedFrom:void 0,href:R})}function D(q){return typeof q=="string"?Fc(n,q,c.value.path):Le({},q)}function B(q,se){if(u!==q)return ei(8,{from:se,to:q})}function $(q){return P(q)}function Z(q){return $(Le(D(q),{replace:!0}))}function re(q){const se=q.matched[q.matched.length-1];if(se&&se.redirect){const{redirect:ee}=se;let oe=typeof ee=="function"?ee(q):ee;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=D(oe):{path:oe},oe.params={}),Le({query:q.query,hash:q.hash,params:oe.path!=null?{}:q.params},oe)}}function P(q,se){const ee=u=L(q),oe=c.value,Oe=q.state,T=q.force,R=q.replace===!0,k=re(ee);if(k)return P(Le(D(k),{state:typeof k=="object"?Le({},Oe,k.state):Oe,force:T,replace:R}),se||ee);const H=ee;H.redirectedFrom=se;let K;return!T&&rT(r,oe,ee)&&(K=ei(16,{to:H,from:oe}),pt(oe,oe,!0,!1)),(K?Promise.resolve(K):I(H,oe)).catch(O=>$n(O)?$n(O,2)?O:vt(O):Ie(O,H,oe)).then(O=>{if(O){if($n(O,2))return P(Le({replace:R},D(O.to),{state:typeof O.to=="object"?Le({},Oe,O.to.state):Oe,force:T}),se||H)}else O=S(H,oe,!0,R,Oe);return A(H,oe,O),O})}function y(q,se){const ee=B(q,se);return ee?Promise.reject(ee):Promise.resolve()}function w(q){const se=vn.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(q):q()}function I(q,se){let ee;const[oe,Oe,T]=jT(q,se);ee=Uc(oe.reverse(),"beforeRouteLeave",q,se);for(const k of oe)k.leaveGuards.forEach(H=>{ee.push(Tr(H,q,se))});const R=y.bind(null,q,se);return ee.push(R),Pt(ee).then(()=>{ee=[];for(const k of i.list())ee.push(Tr(k,q,se));return ee.push(R),Pt(ee)}).then(()=>{ee=Uc(Oe,"beforeRouteUpdate",q,se);for(const k of Oe)k.updateGuards.forEach(H=>{ee.push(Tr(H,q,se))});return ee.push(R),Pt(ee)}).then(()=>{ee=[];for(const k of T)if(k.beforeEnter)if(gn(k.beforeEnter))for(const H of k.beforeEnter)ee.push(Tr(H,q,se));else ee.push(Tr(k.beforeEnter,q,se));return ee.push(R),Pt(ee)}).then(()=>(q.matched.forEach(k=>k.enterCallbacks={}),ee=Uc(T,"beforeRouteEnter",q,se,w),ee.push(R),Pt(ee))).then(()=>{ee=[];for(const k of o.list())ee.push(Tr(k,q,se));return ee.push(R),Pt(ee)}).catch(k=>$n(k,8)?k:Promise.reject(k))}function A(q,se,ee){l.list().forEach(oe=>w(()=>oe(q,se,ee)))}function S(q,se,ee,oe,Oe){const T=B(q,se);if(T)return T;const R=se===gr,k=Vs?history.state:{};ee&&(oe||R?s.replace(q.fullPath,Le({scroll:R&&k&&k.scroll},Oe)):s.push(q.fullPath,Oe)),c.value=q,pt(q,se,ee,R),vt()}let b;function le(){b||(b=s.listen((q,se,ee)=>{if(!Zt.listening)return;const oe=L(q),Oe=re(oe);if(Oe){P(Le(Oe,{replace:!0,force:!0}),oe).catch(Zi);return}u=oe;const T=c.value;Vs&&hT(bp(T.fullPath,ee.delta),Vl()),I(oe,T).catch(R=>$n(R,12)?R:$n(R,2)?(P(Le(D(R.to),{force:!0}),oe).then(k=>{$n(k,20)&&!ee.delta&&ee.type===Eo.pop&&s.go(-1,!1)}).catch(Zi),Promise.reject()):(ee.delta&&s.go(-ee.delta,!1),Ie(R,oe,T))).then(R=>{R=R||S(oe,T,!1),R&&(ee.delta&&!$n(R,8)?s.go(-ee.delta,!1):ee.type===Eo.pop&&$n(R,20)&&s.go(-1,!1)),A(oe,T,R)}).catch(Zi)}))}let ce=Mi(),Re=Mi(),X;function Ie(q,se,ee){vt(q);const oe=Re.list();return oe.length?oe.forEach(Oe=>Oe(q,se,ee)):console.error(q),Promise.reject(q)}function ft(){return X&&c.value!==gr?Promise.resolve():new Promise((q,se)=>{ce.add([q,se])})}function vt(q){return X||(X=!q,le(),ce.list().forEach(([se,ee])=>q?ee(q):se()),ce.reset()),q}function pt(q,se,ee,oe){const{scrollBehavior:Oe}=t;if(!Vs||!Oe)return Promise.resolve();const T=!ee&&fT(bp(q.fullPath,0))||(oe||!ee)&&history.state&&history.state.scroll||null;return Cl().then(()=>Oe(q,se,T)).then(R=>R&&uT(R)).catch(R=>Ie(R,q,se))}const ze=q=>s.go(q);let Ke;const vn=new Set,Zt={currentRoute:c,listening:!0,addRoute:E,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:U,getRoutes:M,resolve:L,options:t,push:$,replace:Z,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Re.add,isReady:ft,install(q){const se=this;q.component("RouterLink",MT),q.component("RouterView",Iy),q.config.globalProperties.$router=se,Object.defineProperty(q.config.globalProperties,"$route",{enumerable:!0,get:()=>v(c)}),Vs&&!Ke&&c.value===gr&&(Ke=!0,$(s.location).catch(Oe=>{}));const ee={};for(const Oe in gr)Object.defineProperty(ee,Oe,{get:()=>c.value[Oe],enumerable:!0});q.provide(Ml,se),q.provide(Nh,v_(ee)),q.provide(_u,c);const oe=q.unmount;vn.add(q),q.unmount=function(){vn.delete(q),vn.size<1&&(u=gr,b&&b(),b=null,c.value=gr,Ke=!1,X=!1),oe()}}};function Pt(q){return q.reduce((se,ee)=>se.then(()=>w(ee)),Promise.resolve())}return Zt}function jT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Zs(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Zs(u,c))||s.push(c))}return[n,r,s]}function ui(){return Xe(Ml)}function BT(t){return Xe(Nh)}const HT={id:"app",class:"min-h-screen bg-gray-100 flex flex-col font-inter"},qT={class:"app-header"},zT={class:"project-title"},WT={class:"modal-content"},GT={class:"modal-title"},KT={key:0,class:"info-section"},QT={key:1,class:"info-section"},YT=`
<p>التعرض الإشعاعي هو كمية الإشعاع التي يتلقاها الجسم عند مروره في بيئة تحتوي على إشعاع مؤين، مثل الأشعة السينية (X-rays) أو الأشعة المقطعية (CT). وتُقاس الجرعة الإشعاعية بوحدة "الميلي سيفرت" (mSv)، وهي وحدة تعكس التأثير البيولوجي للإشعاع على أنسجة الجسم.</p>

<p>تكمن الخطورة في أن الإشعاع المؤين يمكن أن يسبب تلفًا في الخلايا، مما يزيد من خطر الإصابة بالأمراض المزمنة مثل السرطان، خاصةً مع التعرض المتكرر أو الطويل. لذلك:</p>
<ul>
  <li><strong>المرضى</strong> يجب ألا يتعرضوا إلا عند الضرورة، ويجب تسجيل كل فحص وتقييم فائدته مقابل ضرره.</li>
  <li><strong>العاملون في المجال الطبي</strong> مثل أطباء الأشعة وفنيي الأشعة، يتعرضون بشكل مزمن، مما يستدعي مراقبة دورية واتباع إجراءات السلامة.</li>
  <li><strong>النساء الحوامل</strong> هن فئة خاصة يجب أخذ الحيطة الشديدة عند تعرّضهن للإشعاع لتجنّب التأثير على الجنين.</li>
</ul>

<p><strong>الحد السنوي المسموح به للتعرض الإشعاعي</strong><br>
وفقًا لتوصيات اللجنة الدولية للحماية من الإشعاع (ICRP):</p>
<strong>الفئة:</strong> العاملون في المجال الطبي<br>
<strong>الحد السنوي المسموح به:</strong> 20 ميلي سيفرت (mSv)<br>
<strong>ملاحظات:</strong> كمتوسط على مدى 5 سنوات، بشرط ألا يتجاوز 50 mSv في سنة واحدة.

<p><strong>الفئة:</strong> المرضى<br>
<strong>الحد السنوي المسموح به:</strong> لا يوجد حد صارم<br>
<strong>ملاحظات:</strong> يجب تقليل التعرض بقدر الإمكان وفق مبدأ ALARA (As Low As Reasonably Achievable).</p>

<p><strong>الفئة:</strong> النساء الحوامل العاملات<br>
<strong>الحد السنوي المسموح به:</strong> 1 ميلي سيفرت للجنين خلال الحمل<br>
<strong>ملاحظات:</strong> يجب ألا تتجاوز الجرعة 1 mSv من تاريخ العلم بالحمل وحتى الولادة.</p>

<p><strong>الفئة:</strong> العامة (غير العاملين بالمجال)<br>
<strong>الحد السنوي المسموح به:</strong> 1 ميلي سيفرت<br>
<strong>ملاحظات:</strong> في الظروف الطبيعية بدون إجراءات طبية.</p>

<p><strong>كيف تتم مراقبة الجرعات؟</strong></p>
<ul>
  <li><strong>أجهزة قياس الجرعة الشخصية</strong> (TLD أو Dosimeter) تُلبس على الجسم لتسجيل الجرعة اليومية أو الشهرية.</li>
  <li><strong>أنظمة إلكترونية ذكية</strong> تُستخدم في بعض المستشفيات لمتابعة الجرعة تلقائيًا وحفظ السجلات.</li>
  <li><strong>تحقيقات دورية</strong> من أقسام الوقاية الإشعاعية لمراجعة مستويات التعرض والتحقق من تطبيق إجراءات السلامة.</li>
</ul>

<p><strong>خطوات الوقاية</strong></p>
<ul>
  <li>استخدام <strong>الواقيات الرصاصية</strong> (مثل السترات والدروع).</li>
  <li>تقليل <strong>وقت التعرض</strong> قدر الإمكان.</li>
  <li>زيادة <strong>المسافة</strong> بين الشخص ومصدر الإشعاع.</li>
  <li>استخدام <strong>تقنيات تصوير بديلة</strong> مثل الموجات فوق الصوتية أو الرنين المغناطيسي عند الإمكان.</li>
  <li>اعتماد <strong>أنظمة ذكية</strong> لحساب الجرعات تلقائيًا وتنبيه الطبيب في حال تجاوز الحد الآمن.</li>
</ul>

<p>التعرض الإشعاعي ضرورة طبية لا يمكن الاستغناء عنها، ولكن لا ينبغي أبدًا الاستهانة بمخاطره. فالمعرفة والوقاية والتقنيات الحديثة تمثل عناصر أساسية لحماية كل من المرضى والعاملين. التوعية المستمرة والتدريب والرقابة تضمن تحقيق الفائدة من الإشعاع بأقل الأضرار، وتحافظ على بيئة صحية وآمنة للجميع.</p>
`,XT=`
<p>Radiation exposure is the amount of radiation received by the body when passing through an environment containing ionizing radiation, such as X-rays or CT scans. The radiation dose is measured in "millisieverts" (mSv), a unit that reflects the biological effect of radiation on body tissues.</p>

<p>The danger lies in the fact that ionizing radiation can cause cell damage, increasing the risk of chronic diseases like cancer, especially with repeated or prolonged exposure. Therefore:</p>
<ul>
  <li><strong>Patients</strong> should only be exposed when necessary, and every examination should be recorded and its benefit evaluated against its harm.</li>
  <li><strong>Medical professionals</strong>, such as radiologists and radiology technicians, are chronically exposed, requiring periodic monitoring and adherence to safety procedures.</li>
  <li><strong>Pregnant women</strong> are a special category who should exercise extreme caution when exposed to radiation to avoid affecting the fetus.</li>
</ul>

<p><strong>Annual Permissible Radiation Exposure Limit</strong><br>
According to the recommendations of the International Commission on Radiological Protection (ICRP):</p>
<strong>Category:</strong> Medical Professionals<br>
<strong>Annual Permissible Limit:</strong> 20 millisieverts (mSv)<br>
<strong>Notes:</strong> As an average over 5 years, provided it does not exceed 50 mSv in a single year.

<p><strong>Category:</strong> Patients<br>
<strong>Annual Permissible Limit:</strong> No strict limit<br>
<strong>Notes:</strong> Exposure should be reduced as much as possible according to the ALARA principle (As Low As Reasonably Achievable).</p>

<p><strong>Category:</strong> Pregnant Workers<br>
<strong>Annual Permissible Limit:</strong> 1 millisievert for the fetus during pregnancy<br>
<strong>Notes:</strong> The dose should not exceed 1 mSv from the date of knowledge of pregnancy until birth.</p>

<p><strong>Category:</strong> General Public (non-medical workers)<br>
<strong>Annual Permissible Limit:</strong> 1 millisievert<br>
<strong>Notes:</strong> Under normal circumstances without medical procedures.</p>

<p><strong>How are doses monitored?</strong></p>
<ul>
  <li><strong>Personal dose measuring devices</strong> (TLD or Dosimeter) are worn on the body to record daily or monthly doses.</li>
  <li><strong>Smart electronic systems</strong> are used in some hospitals to automatically track doses and maintain records.</li>
  <li><strong>Periodic investigations</strong> by radiation protection departments to review exposure levels and verify the implementation of safety procedures.</li>
</ul>

<p><strong>Prevention Steps</strong></p>
<ul>
  <li>Use <strong>lead shields</strong> (e.g., aprons and barriers).</li>
  <li>Reduce <strong>exposure time</strong> as much as possible.</li>
  <li>Increase the <strong>distance</strong> between the person and the radiation source.</li>
  <li>Use <strong>alternative imaging techniques</strong> such as ultrasound or MRI when possible.</li>
  <li>Adopt <strong>smart systems</strong> to automatically calculate doses and alert the doctor if the safe limit is exceeded.</li>
</ul>

<p>Radiation exposure is a medical necessity that cannot be dispensed with, but its risks should never be underestimated. Knowledge, prevention, and modern technologies are essential elements to protect both patients and workers. Continuous awareness, training, and monitoring ensure that the benefits of radiation are achieved with minimal harm, maintaining a healthy and safe environment for everyone.</p>
`,JT={__name:"App",setup(t){const e=pe("en"),n=pe(!1),r=()=>{e.value=e.value==="en"?"ar":"en",document.documentElement.dir=e.value==="ar"?"rtl":"ltr"},s=()=>{n.value=!n.value};return ds("currentLanguage",e),ds("toggleLanguage",r),ds("toggleInfoModal",s),Qn(e,i=>{document.documentElement.dir=i==="ar"?"rtl":"ltr"},{immediate:!0}),(i,o)=>(ae(),ue("div",HT,[g("header",qT,[g("button",{onClick:r,class:"language-toggle-button","aria-label":"Toggle language between Arabic and English"},x(e.value==="en"?"العربية":"English"),1),g("h1",zT,x(e.value==="en"?"mSv Exposure Calculator":"حاسبة التعرض للأشعة"),1),g("button",{onClick:s,class:"info-button-global"},x(e.value==="en"?"Information":"معلومات"),1)]),Ce(v(Iy),null,{default:un(({Component:l})=>[Ce(Bn,{name:"page-fade",mode:"out-in"},{default:un(()=>[(ae(),sy(gb(l)))]),_:2},1024)]),_:1}),Ce(Bn,{name:"modal-fade"},{default:un(()=>[n.value?(ae(),ue("div",{key:0,class:"modal-overlay",onClick:st(s,["self"])},[g("div",WT,[g("button",{class:"close-modal-button",onClick:s},"×"),g("h2",GT,x(e.value==="en"?"Radiation Exposure Awareness":"التوعية بالتعرض الإشعاعي"),1),e.value==="ar"?(ae(),ue("div",KT,[o[0]||(o[0]=g("h3",{class:"lang-heading",dir:"rtl"},"العربية (Arabic)",-1)),g("div",{class:"lang-text arabic-text",innerHTML:YT}),o[1]||(o[1]=g("div",{class:"overflow-x-auto mt-4 rounded-lg border border-gray-300"},[g("table",{class:"info-table",dir:"rtl"},[g("thead",{class:"bg-gray-50"},[g("tr",null,[g("th",{scope:"col",class:"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"}," الفئة "),g("th",{scope:"col",class:"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"}," الحد السنوي المسموح به "),g("th",{scope:"col",class:"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"}," ملاحظات ")])]),g("tbody",{class:"bg-white divide-y divide-gray-200"},[g("tr",null,[g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"}," العاملون في المجال الطبي "),g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"}," 20 ميلي سيفرت (mSv) "),g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"}," كمتوسط على مدى 5 سنوات، بشرط ألا يتجاوز 50 mSv في سنة واحدة. ")]),g("tr",null,[g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"},"المرضى"),g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"}," لا يوجد حد صارم "),g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"}," يجب تقليل التعرض بقدر الإمكان وفق مبدأ ALARA (As Low As Reasonably Achievable). ")]),g("tr",null,[g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"}," النساء الحوامل العاملات "),g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"}," 1 ميلي سيفرت للجنين خلال الحمل "),g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"}," يجب ألا تتجاوز الجرعة 1 mSv من تاريخ العلم بالحمل وحتى الولادة. ")]),g("tr",null,[g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"}," العامة (غير العاملين بالمجال) "),g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"},"1 ميلي سيفرت"),g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"}," في الظروف الطبيعية بدون إجراءات طبية. ")])])])],-1)),o[2]||(o[2]=g("p",{class:"mt-4 lang-text arabic-text"}," التعرض الإشعاعي ضرورة طبية لا يمكن الاستغناء عنها، ولكن لا ينبغي أبدًا الاستهانة بمخاطره. فالمعرفة والوقاية والتقنيات الحديثة تمثل عناصر أساسية لحماية كل من المرضى والعاملين. التوعية المستمرة والتدريب والرقابة تضمن تحقيق الفائدة من الإشعاع بأقل الأضرار، وتحافظ على بيئة صحية وآمنة للجميع. ",-1))])):(ae(),ue("div",QT,[o[3]||(o[3]=g("h3",{class:"lang-heading",dir:"ltr"},"English",-1)),g("div",{class:"lang-text english-text",innerHTML:XT}),o[4]||(o[4]=g("div",{class:"overflow-x-auto mt-4 rounded-lg border border-gray-300"},[g("table",{class:"info-table",dir:"ltr"},[g("thead",{class:"bg-gray-50"},[g("tr",null,[g("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Category "),g("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Annual Permissible Limit "),g("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Notes ")])]),g("tbody",{class:"bg-white divide-y divide-gray-200"},[g("tr",null,[g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"}," Medical Professionals "),g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"},"20 mSv"),g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"}," Averaged over 5 years, not exceeding 50 mSv in any single year. ")]),g("tr",null,[g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"},"Patients"),g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"}," No strict limit "),g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"}," Exposure should be as low as reasonably achievable (ALARA principle). ")]),g("tr",null,[g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"}," Pregnant Workers "),g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"}," 1 mSv to the fetus during pregnancy "),g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"}," Dose should not exceed 1 mSv from the date of knowledge of pregnancy until birth. ")]),g("tr",null,[g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"}," General Public (Non-Occupational) "),g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"},"1 mSv"),g("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"}," Under normal conditions without medical procedures. ")])])])],-1)),o[5]||(o[5]=g("p",{class:"mt-4 lang-text english-text"}," Radiation exposure is a medical necessity that cannot be dispensed with, but its risks should never be underestimated. Knowledge, prevention, and modern technologies are essential elements to protect both patients and workers. Continuous awareness, training, and monitoring ensure that the benefits of radiation are achieved with minimal harm, maintaining a healthy and safe environment for everyone. ",-1))]))])])):et("",!0)]),_:1})]))}};/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Ay;const Ll=t=>Ay=t,Sy=Symbol();function yu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var to;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(to||(to={}));function ZT(){const t=r_(!0),e=t.run(()=>pe({}));let n=[],r=[];const s=Ih({install(i){Ll(s),s._a=i,i.provide(Sy,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ry=()=>{};function Lp(t,e,n,r=Ry){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&s_()&&bw(s),s}function Ns(t,...e){t.slice().forEach(n=>{n(...e)})}const eI=t=>t(),Fp=Symbol(),$c=Symbol();function vu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];yu(s)&&yu(r)&&t.hasOwnProperty(n)&&!at(r)&&!xr(r)?t[n]=vu(s,r):t[n]=r}return t}const tI=Symbol();function nI(t){return!yu(t)||!Object.prototype.hasOwnProperty.call(t,tI)}const{assign:vr}=Object;function rI(t){return!!(at(t)&&t.effect)}function sI(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const f=zw(n.state.value[t]);return vr(f,i,Object.keys(o||{}).reduce((d,m)=>(d[m]=Ih(gt(()=>{Ll(n);const E=n._s.get(t);return o[m].call(E,E)})),d),{}))}return c=Py(t,u,e,n,r,!0),c}function Py(t,e,n={},r,s,i){let o;const l=vr({actions:{}},n),c={deep:!0};let u,f,d=[],m=[],E;const C=r.state.value[t];!i&&!C&&(r.state.value[t]={}),pe({});let M;function U(y){let w;u=f=!1,typeof y=="function"?(y(r.state.value[t]),w={type:to.patchFunction,storeId:t,events:E}):(vu(r.state.value[t],y),w={type:to.patchObject,payload:y,storeId:t,events:E});const I=M=Symbol();Cl().then(()=>{M===I&&(u=!0)}),f=!0,Ns(d,w,r.state.value[t])}const L=i?function(){const{state:w}=n,I=w?w():{};this.$patch(A=>{vr(A,I)})}:Ry;function D(){o.stop(),d=[],m=[],r._s.delete(t)}const B=(y,w="")=>{if(Fp in y)return y[$c]=w,y;const I=function(){Ll(r);const A=Array.from(arguments),S=[],b=[];function le(X){S.push(X)}function ce(X){b.push(X)}Ns(m,{args:A,name:I[$c],store:Z,after:le,onError:ce});let Re;try{Re=y.apply(this&&this.$id===t?this:Z,A)}catch(X){throw Ns(b,X),X}return Re instanceof Promise?Re.then(X=>(Ns(S,X),X)).catch(X=>(Ns(b,X),Promise.reject(X))):(Ns(S,Re),Re)};return I[Fp]=!0,I[$c]=w,I},$={_p:r,$id:t,$onAction:Lp.bind(null,m),$patch:U,$reset:L,$subscribe(y,w={}){const I=Lp(d,y,w.detached,()=>A()),A=o.run(()=>Qn(()=>r.state.value[t],S=>{(w.flush==="sync"?f:u)&&y({storeId:t,type:to.direct,events:E},S)},vr({},c,w)));return I},$dispose:D},Z=Do($);r._s.set(t,Z);const P=(r._a&&r._a.runWithContext||eI)(()=>r._e.run(()=>(o=r_()).run(()=>e({action:B}))));for(const y in P){const w=P[y];if(at(w)&&!rI(w)||xr(w))i||(C&&nI(w)&&(at(w)?w.value=C[y]:vu(w,C[y])),r.state.value[t][y]=w);else if(typeof w=="function"){const I=B(w,y);P[y]=I,l.actions[y]=w}}return vr(Z,P),vr(Ve(Z),P),Object.defineProperty(Z,"$state",{get:()=>r.state.value[t],set:y=>{U(w=>{vr(w,y)})}}),r._p.forEach(y=>{vr(Z,o.run(()=>y({store:Z,app:r._a,pinia:r,options:l})))}),C&&i&&n.hydrate&&n.hydrate(Z.$state,C),u=!0,f=!0,Z}/*! #__NO_SIDE_EFFECTS__ */function iI(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const c=Ab();return o=o||(c?Xe(Sy,null):null),o&&Ll(o),o=Ay,o._s.has(t)||(s?Py(t,e,r,o):sI(t,r,o)),o._s.get(t)}return i.$id=t,i}const oI=()=>{};var Up={};/**
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
 */const Cy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},aI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},xy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,d=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,E=u&63;c||(E=64,o||(m=64)),r.push(n[f],n[d],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||d==null)throw new lI;const m=i<<2|l>>4;if(r.push(m),u!==64){const E=l<<4&240|u>>2;if(r.push(E),d!==64){const C=u<<6&192|d;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cI=function(t){const e=Cy(t);return xy.encodeByteArray(e,!0)},Za=function(t){return cI(t).replace(/\./g,"")},ky=function(t){try{return xy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function uI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hI=()=>uI().__FIREBASE_DEFAULTS__,fI=()=>{if(typeof process>"u"||typeof Up>"u")return;const t=Up.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ky(t[1]);return e&&JSON.parse(e)},Fl=()=>{try{return oI()||hI()||fI()||dI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Oy=t=>{var e,n;return(n=(e=Fl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pI=t=>{const e=Oy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ny=()=>{var t;return(t=Fl())===null||t===void 0?void 0:t.config},Dy=t=>{var e;return(e=Fl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class mI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function hi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vy(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function gI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Za(JSON.stringify(n)),Za(JSON.stringify(o)),""].join(".")}const no={};function _I(){const t={prod:[],emulator:[]};for(const e of Object.keys(no))no[e]?t.emulator.push(e):t.prod.push(e);return t}function yI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let $p=!1;function My(t,e){if(typeof window>"u"||typeof document>"u"||!hi(window.location.host)||no[t]===e||no[t]||$p)return;no[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=_I().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,E){m.setAttribute("width","24"),m.setAttribute("id",E),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{$p=!0,o()},m}function f(m,E){m.setAttribute("id",E),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function d(){const m=yI(r),E=n("text"),C=document.getElementById(E)||document.createElement("span"),M=n("learnmore"),U=document.getElementById(M)||document.createElement("a"),L=n("preprendIcon"),D=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const B=m.element;l(B),f(U,M);const $=u();c(D,L),B.append(D,C,U,$),document.body.appendChild(B)}i?(C.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(D.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function Lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lt())}function EI(){var t;const e=(t=Fl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function TI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function II(){const t=Lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function AI(){return!EI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function SI(){try{return typeof indexedDB=="object"}catch{return!1}}function RI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const PI="FirebaseError";class ar extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=PI,Object.setPrototypeOf(this,ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lo.prototype.create)}}class Lo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?CI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new ar(s,l,r)}}function CI(t,e){return t.replace(xI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const xI=/\{\$([^}]+)}/g;function kI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ms(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(jp(i)&&jp(o)){if(!ms(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function jp(t){return t!==null&&typeof t=="object"}/**
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
 */function Fo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ui(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function OI(t,e){const n=new NI(t,e);return n.subscribe.bind(n)}class NI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");DI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=jc),s.error===void 0&&(s.error=jc),s.complete===void 0&&(s.complete=jc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jc(){}/**
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
 */function lt(t){return t&&t._delegate?t._delegate:t}class gs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const os="[DEFAULT]";/**
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
 */class VI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LI(e))try{this.getOrInitializeService({instanceIdentifier:os})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=os){return this.instances.has(e)}getOptions(e=os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:MI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=os){return this.component?this.component.multipleInstances?e:os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MI(t){return t===os?void 0:t}function LI(t){return t.instantiationMode==="EAGER"}/**
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
 */class FI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new VI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(xe||(xe={}));const UI={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},$I=xe.INFO,jI={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},BI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=jI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dh{constructor(e){this.name=e,this._logLevel=$I,this._logHandler=BI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const HI=(t,e)=>e.some(n=>t instanceof n);let Bp,Hp;function qI(){return Bp||(Bp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zI(){return Hp||(Hp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ly=new WeakMap,Eu=new WeakMap,Fy=new WeakMap,Bc=new WeakMap,Vh=new WeakMap;function WI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(kr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ly.set(n,t)}).catch(()=>{}),Vh.set(e,t),e}function GI(t){if(Eu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Eu.set(t,e)}let wu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Eu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function KI(t){wu=t(wu)}function QI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hc(this),e,...n);return Fy.set(r,e.sort?e.sort():[e]),kr(r)}:zI().includes(t)?function(...e){return t.apply(Hc(this),e),kr(Ly.get(this))}:function(...e){return kr(t.apply(Hc(this),e))}}function YI(t){return typeof t=="function"?QI(t):(t instanceof IDBTransaction&&GI(t),HI(t,qI())?new Proxy(t,wu):t)}function kr(t){if(t instanceof IDBRequest)return WI(t);if(Bc.has(t))return Bc.get(t);const e=YI(t);return e!==t&&(Bc.set(t,e),Vh.set(e,t)),e}const Hc=t=>Vh.get(t);function XI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=kr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(kr(o.result),c.oldVersion,c.newVersion,kr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const JI=["get","getKey","getAll","getAllKeys","count"],ZI=["put","add","delete","clear"],qc=new Map;function qp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qc.get(e))return qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ZI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||JI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return qc.set(e,i),i}KI(t=>({...t,get:(e,n,r)=>qp(e,n)||t.get(e,n,r),has:(e,n)=>!!qp(e,n)||t.has(e,n)}));/**
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
 */class eA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tA(t){const e=t.getComponent();return e?.type==="VERSION"}const bu="@firebase/app",zp="0.13.2";/**
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
 */const er=new Dh("@firebase/app"),nA="@firebase/app-compat",rA="@firebase/analytics-compat",sA="@firebase/analytics",iA="@firebase/app-check-compat",oA="@firebase/app-check",aA="@firebase/auth",lA="@firebase/auth-compat",cA="@firebase/database",uA="@firebase/data-connect",hA="@firebase/database-compat",fA="@firebase/functions",dA="@firebase/functions-compat",pA="@firebase/installations",mA="@firebase/installations-compat",gA="@firebase/messaging",_A="@firebase/messaging-compat",yA="@firebase/performance",vA="@firebase/performance-compat",EA="@firebase/remote-config",wA="@firebase/remote-config-compat",bA="@firebase/storage",TA="@firebase/storage-compat",IA="@firebase/firestore",AA="@firebase/ai",SA="@firebase/firestore-compat",RA="firebase",PA="11.10.0";/**
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
 */const Tu="[DEFAULT]",CA={[bu]:"fire-core",[nA]:"fire-core-compat",[sA]:"fire-analytics",[rA]:"fire-analytics-compat",[oA]:"fire-app-check",[iA]:"fire-app-check-compat",[aA]:"fire-auth",[lA]:"fire-auth-compat",[cA]:"fire-rtdb",[uA]:"fire-data-connect",[hA]:"fire-rtdb-compat",[fA]:"fire-fn",[dA]:"fire-fn-compat",[pA]:"fire-iid",[mA]:"fire-iid-compat",[gA]:"fire-fcm",[_A]:"fire-fcm-compat",[yA]:"fire-perf",[vA]:"fire-perf-compat",[EA]:"fire-rc",[wA]:"fire-rc-compat",[bA]:"fire-gcs",[TA]:"fire-gcs-compat",[IA]:"fire-fst",[SA]:"fire-fst-compat",[AA]:"fire-vertex","fire-js":"fire-js",[RA]:"fire-js-all"};/**
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
 */const el=new Map,xA=new Map,Iu=new Map;function Wp(t,e){try{t.container.addComponent(e)}catch(n){er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ti(t){const e=t.name;if(Iu.has(e))return er.debug(`There were multiple attempts to register component ${e}.`),!1;Iu.set(e,t);for(const n of el.values())Wp(n,t);for(const n of xA.values())Wp(n,t);return!0}function Mh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const kA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Or=new Lo("app","Firebase",kA);/**
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
 */class OA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Or.create("app-deleted",{appName:this._name})}}/**
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
 */const fi=PA;function Uy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Tu,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Or.create("bad-app-name",{appName:String(s)});if(n||(n=Ny()),!n)throw Or.create("no-options");const i=el.get(s);if(i){if(ms(n,i.options)&&ms(r,i.config))return i;throw Or.create("duplicate-app",{appName:s})}const o=new FI(s);for(const c of Iu.values())o.addComponent(c);const l=new OA(n,r,o);return el.set(s,l),l}function $y(t=Tu){const e=el.get(t);if(!e&&t===Tu&&Ny())return Uy();if(!e)throw Or.create("no-app",{appName:t});return e}function Nr(t,e,n){var r;let s=(r=CA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),er.warn(l.join(" "));return}ti(new gs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const NA="firebase-heartbeat-database",DA=1,wo="firebase-heartbeat-store";let zc=null;function jy(){return zc||(zc=XI(NA,DA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Or.create("idb-open",{originalErrorMessage:t.message})})),zc}async function VA(t){try{const n=(await jy()).transaction(wo),r=await n.objectStore(wo).get(By(t));return await n.done,r}catch(e){if(e instanceof ar)er.warn(e.message);else{const n=Or.create("idb-get",{originalErrorMessage:e?.message});er.warn(n.message)}}}async function Gp(t,e){try{const r=(await jy()).transaction(wo,"readwrite");await r.objectStore(wo).put(e,By(t)),await r.done}catch(n){if(n instanceof ar)er.warn(n.message);else{const r=Or.create("idb-set",{originalErrorMessage:n?.message});er.warn(r.message)}}}function By(t){return`${t.name}!${t.options.appId}`}/**
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
 */const MA=1024,LA=30;class FA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $A(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Kp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>LA){const o=jA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){er.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Kp(),{heartbeatsToSend:r,unsentEntries:s}=UA(this._heartbeatsCache.heartbeats),i=Za(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return er.warn(n),""}}}function Kp(){return new Date().toISOString().substring(0,10)}function UA(t,e=MA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Qp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $A{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return SI()?RI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await VA(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qp(t){return Za(JSON.stringify({version:2,heartbeats:t})).length}function jA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function BA(t){ti(new gs("platform-logger",e=>new eA(e),"PRIVATE")),ti(new gs("heartbeat",e=>new FA(e),"PRIVATE")),Nr(bu,zp,t),Nr(bu,zp,"esm2017"),Nr("fire-js","")}BA("");function Lh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Hy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HA=Hy,qy=new Lo("auth","Firebase",Hy());/**
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
 */const tl=new Dh("@firebase/auth");function qA(t,...e){tl.logLevel<=xe.WARN&&tl.warn(`Auth (${fi}): ${t}`,...e)}function xa(t,...e){tl.logLevel<=xe.ERROR&&tl.error(`Auth (${fi}): ${t}`,...e)}/**
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
 */function ln(t,...e){throw Uh(t,...e)}function dn(t,...e){return Uh(t,...e)}function Fh(t,e,n){const r=Object.assign(Object.assign({},HA()),{[e]:n});return new Lo("auth","Firebase",r).create(e,{appName:t.name})}function Xn(t){return Fh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ln(t,"argument-error"),Fh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Uh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qy.create(t,...e)}function ye(t,e,...n){if(!t)throw Uh(e,...n)}function Gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xa(e),new Error(e)}function tr(t,e){t||Gn(e)}/**
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
 */function Au(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WA(){return Yp()==="http:"||Yp()==="https:"}function Yp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function GA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WA()||bI()||"connection"in navigator)?navigator.onLine:!0}function KA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Uo{constructor(e,n){this.shortDelay=e,this.longDelay=n,tr(n>e,"Short delay should be less than long delay!"),this.isMobile=vI()||TI()}get(){return GA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $h(t,e){tr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class zy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const QA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const YA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],XA=new Uo(3e4,6e4);function Vn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yn(t,e,n,r,s={}){return Wy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Fo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return wI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&hi(t.emulatorConfig.host)&&(u.credentials="include"),zy.fetch()(await Gy(t,t.config.apiHost,n,l),u)})}async function Wy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},QA),e);try{const s=new ZA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ya(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ya(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ya(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ya(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Fh(t,f,u);ln(t,f)}}catch(s){if(s instanceof ar)throw s;ln(t,"network-request-failed",{message:String(s)})}}async function $o(t,e,n,r,s={}){const i=await yn(t,e,n,r,s);return"mfaPendingCredential"in i&&ln(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Gy(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?$h(t.config,s):`${t.config.apiScheme}://${s}`;return YA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function JA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ZA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),XA.get())})}}function ya(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=dn(t,e,r);return s.customData._tokenResponse=n,s}function Xp(t){return t!==void 0&&t.enterprise!==void 0}class eS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return JA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function tS(t,e){return yn(t,"GET","/v2/recaptchaConfig",Vn(t,e))}/**
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
 */async function nS(t,e){return yn(t,"POST","/v1/accounts:delete",e)}async function nl(t,e){return yn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ro(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rS(t,e=!1){const n=lt(t),r=await n.getIdToken(e),s=jh(r);ye(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:ro(Wc(s.auth_time)),issuedAtTime:ro(Wc(s.iat)),expirationTime:ro(Wc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Wc(t){return Number(t)*1e3}function jh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xa("JWT malformed, contained fewer than 3 sections"),null;try{const s=ky(n);return s?JSON.parse(s):(xa("Failed to decode base64 JWT payload"),null)}catch(s){return xa("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Jp(t){const e=jh(t);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ni(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ar&&sS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class iS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Su{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ro(this.lastLoginAt),this.creationTime=ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function rl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ni(t,nl(n,{idToken:r}));ye(s?.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ky(i.providerUserInfo):[],l=aS(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!l?.length,f=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Su(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function oS(t){const e=lt(t);await rl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ky(t){return t.map(e=>{var{providerId:n}=e,r=Lh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function lS(t,e){const n=await Wy(t,{},async()=>{const r=Fo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Gy(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&hi(t.emulatorConfig.host)&&(c.credentials="include"),zy.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cS(t,e){return yn(t,"POST","/v2/accounts:revokeToken",Vn(t,e))}/**
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
 */class zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const n=Jp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await lS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new zs;return r&&(ye(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ye(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ye(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zs,this.toJSON())}_performRefresh(){return Gn("not implemented")}}/**
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
 */function _r(t,e){ye(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Lh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Su(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ni(this,this.stsTokenManager.getToken(this.auth,e));return ye(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rS(this,e)}reload(){return oS(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await rl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(Xn(this.auth));const e=await this.getIdToken();return await ni(this,nS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,f;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,E=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,M=(l=n.tenantId)!==null&&l!==void 0?l:void 0,U=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,L=(u=n.createdAt)!==null&&u!==void 0?u:void 0,D=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:B,emailVerified:$,isAnonymous:Z,providerData:re,stsTokenManager:P}=n;ye(B&&P,e,"internal-error");const y=zs.fromJSON(this.name,P);ye(typeof B=="string",e,"internal-error"),_r(d,e.name),_r(m,e.name),ye(typeof $=="boolean",e,"internal-error"),ye(typeof Z=="boolean",e,"internal-error"),_r(E,e.name),_r(C,e.name),_r(M,e.name),_r(U,e.name),_r(L,e.name),_r(D,e.name);const w=new hn({uid:B,auth:e,email:m,emailVerified:$,displayName:d,isAnonymous:Z,photoURL:C,phoneNumber:E,tenantId:M,stsTokenManager:y,createdAt:L,lastLoginAt:D});return re&&Array.isArray(re)&&(w.providerData=re.map(I=>Object.assign({},I))),U&&(w._redirectEventId=U),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new zs;s.updateFromServerResponse(n);const i=new hn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await rl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ye(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ky(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,l=new zs;l.updateFromIdToken(r);const c=new hn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Su(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
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
 */const Zp=new Map;function Kn(t){tr(t instanceof Function,"Expected a class definition");let e=Zp.get(t);return e?(tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zp.set(t,e),e)}/**
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
 */class Qy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qy.type="NONE";const em=Qy;/**
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
 */function ka(t,e,n){return`firebase:${t}:${e}:${n}`}class Ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ka(this.userKey,s.apiKey,i),this.fullPersistenceKey=ka("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await nl(this.auth,{idToken:e}).catch(()=>{});return n?hn._fromGetAccountInfoResponse(this.auth,n,e):null}return hn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ws(Kn(em),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Kn(em);const o=ka(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let d;if(typeof f=="string"){const m=await nl(e,{idToken:f}).catch(()=>{});if(!m)break;d=await hn._fromGetAccountInfoResponse(e,m,f)}else d=hn._fromJSON(e,f);u!==i&&(l=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ws(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ws(i,e,r))}}/**
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
 */function tm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tv(e))return"Blackberry";if(nv(e))return"Webos";if(Xy(e))return"Safari";if((e.includes("chrome/")||Jy(e))&&!e.includes("edge/"))return"Chrome";if(ev(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Yy(t=Lt()){return/firefox\//i.test(t)}function Xy(t=Lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jy(t=Lt()){return/crios\//i.test(t)}function Zy(t=Lt()){return/iemobile/i.test(t)}function ev(t=Lt()){return/android/i.test(t)}function tv(t=Lt()){return/blackberry/i.test(t)}function nv(t=Lt()){return/webos/i.test(t)}function Bh(t=Lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uS(t=Lt()){var e;return Bh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hS(){return II()&&document.documentMode===10}function rv(t=Lt()){return Bh(t)||ev(t)||nv(t)||tv(t)||/windows phone/i.test(t)||Zy(t)}/**
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
 */function sv(t,e=[]){let n;switch(t){case"Browser":n=tm(Lt());break;case"Worker":n=`${tm(Lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fi}/${r}`}/**
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
 */class fS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function dS(t,e={}){return yn(t,"GET","/v2/passwordPolicy",Vn(t,e))}/**
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
 */const pS=6;class mS{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:pS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class gS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nm(this),this.idTokenSubscription=new nm(this),this.beforeStateQueue=new fS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ws.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await nl(this,{idToken:e}),r=await hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&c?.user&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await rl(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(Xn(this));const n=e?lt(e):null;return n&&ye(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(Xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(Xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dS(this),n=new mS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Lo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await cS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kn(e)||this._popupRedirectResolver;ye(n,this,"argument-error"),this.redirectPersistenceManager=await Ws.create(this,[Kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&qA(`Error while retrieving App Check token: ${n.error}`),n?.token}}function lr(t){return lt(t)}class nm{constructor(e){this.auth=e,this.observer=null,this.addObserver=OI(n=>this.observer=n)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ul={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _S(t){Ul=t}function iv(t){return Ul.loadJS(t)}function yS(){return Ul.recaptchaEnterpriseScript}function vS(){return Ul.gapiScript}function ES(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class wS{constructor(){this.enterprise=new bS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class bS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const TS="recaptcha-enterprise",ov="NO_RECAPTCHA";class IS{constructor(e){this.type=TS,this.auth=lr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{tS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new eS(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Xp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(ov)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Xp(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=yS();c.length!==0&&(c+=l),iv(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function rm(t,e,n,r=!1,s=!1){const i=new IS(t);let o;if(s)o=ov;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function sl(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await rm(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await rm(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function AS(t,e){const n=Mh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ms(i,e??{}))return s;ln(s,"already-initialized")}return n.initialize({options:e})}function SS(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Kn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function RS(t,e,n){const r=lr(t);ye(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=av(e),{host:o,port:l}=PS(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ye(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ye(ms(u,r.config.emulator)&&ms(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,hi(o)?(Vy(`${i}//${o}${c}`),My("Auth",!0)):CS()}function av(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function PS(t){const e=av(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:sm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:sm(o)}}}function sm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function CS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Hh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gn("not implemented")}_getIdTokenResponse(e){return Gn("not implemented")}_linkToIdToken(e,n){return Gn("not implemented")}_getReauthenticationResolver(e){return Gn("not implemented")}}/**
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
 */async function xS(t,e){return yn(t,"POST","/v1/accounts:resetPassword",Vn(t,e))}async function kS(t,e){return yn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function OS(t,e){return $o(t,"POST","/v1/accounts:signInWithPassword",Vn(t,e))}async function NS(t,e){return yn(t,"POST","/v1/accounts:sendOobCode",Vn(t,e))}async function DS(t,e){return NS(t,e)}/**
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
 */async function VS(t,e){return $o(t,"POST","/v1/accounts:signInWithEmailLink",Vn(t,e))}async function MS(t,e){return $o(t,"POST","/v1/accounts:signInWithEmailLink",Vn(t,e))}/**
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
 */class bo extends Hh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new bo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new bo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sl(e,n,"signInWithPassword",OS);case"emailLink":return VS(e,{email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sl(e,r,"signUpPassword",kS);case"emailLink":return MS(e,{idToken:n,email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Gs(t,e){return $o(t,"POST","/v1/accounts:signInWithIdp",Vn(t,e))}/**
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
 */const LS="http://localhost";class _s extends Hh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Lh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new _s(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gs(e,n)}buildRequest(){const e={requestUri:LS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fo(n)}return e}}/**
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
 */function FS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function US(t){const e=Fi(Ui(t)).link,n=e?Fi(Ui(e)).deep_link_id:null,r=Fi(Ui(t)).deep_link_id;return(r?Fi(Ui(r)).link:null)||r||n||e||t}class qh{constructor(e){var n,r,s,i,o,l;const c=Fi(Ui(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,d=FS((s=c.mode)!==null&&s!==void 0?s:null);ye(u&&f&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=US(e);try{return new qh(n)}catch{return null}}}/**
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
 */class di{constructor(){this.providerId=di.PROVIDER_ID}static credential(e,n){return bo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qh.parseLink(n);return ye(r,"argument-error"),bo._fromEmailAndCode(e,r.code,r.tenantId)}}di.PROVIDER_ID="password";di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class zh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jo extends zh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ar extends jo{constructor(){super("facebook.com")}static credential(e){return _s._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ar.PROVIDER_ID="facebook.com";/**
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
 */class zn extends jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _s._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
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
 */class Sr extends jo{constructor(){super("github.com")}static credential(e){return _s._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.GITHUB_SIGN_IN_METHOD="github.com";Sr.PROVIDER_ID="github.com";/**
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
 */class Rr extends jo{constructor(){super("twitter.com")}static credential(e,n){return _s._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rr.credential(n,r)}catch{return null}}}Rr.TWITTER_SIGN_IN_METHOD="twitter.com";Rr.PROVIDER_ID="twitter.com";/**
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
 */async function $S(t,e){return $o(t,"POST","/v1/accounts:signUp",Vn(t,e))}/**
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
 */class ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await hn._fromIdTokenResponse(e,r,s),o=im(r);return new ys({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=im(r);return new ys({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function im(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class il extends ar{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,il.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new il(e,n,r,s)}}function lv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?il._fromErrorAndOperation(t,i,e,r):i})}async function jS(t,e,n=!1){const r=await ni(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ys._forOperation(t,"link",r)}/**
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
 */async function BS(t,e,n=!1){const{auth:r}=t;if(Qt(r.app))return Promise.reject(Xn(r));const s="reauthenticate";try{const i=await ni(t,lv(r,s,e,t),n);ye(i.idToken,r,"internal-error");const o=jh(i.idToken);ye(o,r,"internal-error");const{sub:l}=o;return ye(t.uid===l,r,"user-mismatch"),ys._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&ln(r,"user-mismatch"),i}}/**
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
 */async function cv(t,e,n=!1){if(Qt(t.app))return Promise.reject(Xn(t));const r="signIn",s=await lv(t,r,e),i=await ys._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function HS(t,e){return cv(lr(t),e)}/**
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
 */async function Wh(t){const e=lr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qS(t,e,n){const r=lr(t);await sl(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",DS)}async function zS(t,e,n){await xS(lt(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Wh(t),r})}async function WS(t,e,n){if(Qt(t.app))return Promise.reject(Xn(t));const r=lr(t),o=await sl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$S).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Wh(t),c}),l=await ys._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function GS(t,e,n){return Qt(t.app)?Promise.reject(Xn(t)):HS(lt(t),di.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Wh(t),r})}/**
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
 */async function KS(t,e){return yn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function QS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=lt(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ni(r,KS(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function YS(t,e,n,r){return lt(t).onIdTokenChanged(e,n,r)}function XS(t,e,n){return lt(t).beforeAuthStateChanged(e,n)}function uv(t,e,n,r){return lt(t).onAuthStateChanged(e,n,r)}function JS(t){return lt(t).signOut()}const ol="__sak";/**
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
 */class hv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ol,"1"),this.storage.removeItem(ol),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ZS=1e3,eR=10;class fv extends hv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);hS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,eR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ZS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fv.type="LOCAL";const tR=fv;/**
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
 */class dv extends hv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}dv.type="SESSION";const pv=dv;/**
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
 */function nR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $l{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new $l(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await nR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$l.receivers=[];/**
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
 */function Gh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class rR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Gh("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Rn(){return window}function sR(t){Rn().location.href=t}/**
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
 */function mv(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function iR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oR(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function aR(){return mv()?self:null}/**
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
 */const gv="firebaseLocalStorageDb",lR=1,al="firebaseLocalStorage",_v="fbase_key";class Bo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jl(t,e){return t.transaction([al],e?"readwrite":"readonly").objectStore(al)}function cR(){const t=indexedDB.deleteDatabase(gv);return new Bo(t).toPromise()}function Ru(){const t=indexedDB.open(gv,lR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(al,{keyPath:_v})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(al)?e(r):(r.close(),await cR(),e(await Ru()))})})}async function om(t,e,n){const r=jl(t,!0).put({[_v]:e,value:n});return new Bo(r).toPromise()}async function uR(t,e){const n=jl(t,!1).get(e),r=await new Bo(n).toPromise();return r===void 0?null:r.value}function am(t,e){const n=jl(t,!0).delete(e);return new Bo(n).toPromise()}const hR=800,fR=3;class yv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ru(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$l._getInstance(aR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await iR(),!this.activeServiceWorker)return;this.sender=new rR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ru();return await om(e,ol,"1"),await am(e,ol),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>om(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>uR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>am(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=jl(s,!1).getAll();return new Bo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yv.type="LOCAL";const dR=yv;new Uo(3e4,6e4);/**
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
 */function vv(t,e){return e?Kn(e):(ye(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Kh extends Hh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pR(t){return cv(t.auth,new Kh(t),t.bypassAuthState)}function mR(t){const{auth:e,user:n}=t;return ye(n,e,"internal-error"),BS(n,new Kh(t),t.bypassAuthState)}async function gR(t){const{auth:e,user:n}=t;return ye(n,e,"internal-error"),jS(n,new Kh(t),t.bypassAuthState)}/**
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
 */class Ev{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pR;case"linkViaPopup":case"linkViaRedirect":return gR;case"reauthViaPopup":case"reauthViaRedirect":return mR;default:ln(this.auth,"internal-error")}}resolve(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _R=new Uo(2e3,1e4);async function yR(t,e,n){if(Qt(t.app))return Promise.reject(dn(t,"operation-not-supported-in-this-environment"));const r=lr(t);zA(t,e,zh);const s=vv(r,n);return new ls(r,"signInViaPopup",e,s).executeNotNull()}class ls extends Ev{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ls.currentPopupAction&&ls.currentPopupAction.cancel(),ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){tr(this.filter.length===1,"Popup operations only handle one event");const e=Gh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_R.get())};e()}}ls.currentPopupAction=null;/**
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
 */const vR="pendingRedirect",Oa=new Map;class ER extends Ev{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oa.get(this.auth._key());if(!e){try{const r=await wR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oa.set(this.auth._key(),e)}return this.bypassAuthState||Oa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wR(t,e){const n=IR(e),r=TR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function bR(t,e){Oa.set(t._key(),e)}function TR(t){return Kn(t._redirectPersistence)}function IR(t){return ka(vR,t.config.apiKey,t.name)}async function AR(t,e,n=!1){if(Qt(t.app))return Promise.reject(Xn(t));const r=lr(t),s=vv(r,e),o=await new ER(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const SR=10*60*1e3;class RR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!wv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SR&&this.cachedEventUids.clear(),this.cachedEventUids.has(lm(e))}saveEventToCache(e){this.cachedEventUids.add(lm(e)),this.lastProcessedEventTime=Date.now()}}function lm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wv({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function PR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wv(t);default:return!1}}/**
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
 */async function CR(t,e={}){return yn(t,"GET","/v1/projects",e)}/**
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
 */const xR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kR=/^https?/;async function OR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CR(t);for(const n of e)try{if(NR(n))return}catch{}ln(t,"unauthorized-domain")}function NR(t){const e=Au(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kR.test(n))return!1;if(xR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const DR=new Uo(3e4,6e4);function cm(){const t=Rn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function VR(t){return new Promise((e,n)=>{var r,s,i;function o(){cm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cm(),n(dn(t,"network-request-failed"))},timeout:DR.get()})}if(!((s=(r=Rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Rn().gapi)===null||i===void 0)&&i.load)o();else{const l=ES("iframefcb");return Rn()[l]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},iv(`${vS()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Na=null,e})}let Na=null;function MR(t){return Na=Na||VR(t),Na}/**
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
 */const LR=new Uo(5e3,15e3),FR="__/auth/iframe",UR="emulator/auth/iframe",$R={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BR(t){const e=t.config;ye(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$h(e,UR):`https://${t.config.authDomain}/${FR}`,r={apiKey:e.apiKey,appName:t.name,v:fi},s=jR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Fo(r).slice(1)}`}async function HR(t){const e=await MR(t),n=Rn().gapi;return ye(n,t,"internal-error"),e.open({where:document.body,url:BR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$R,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),l=Rn().setTimeout(()=>{i(o)},LR.get());function c(){Rn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const qR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zR=500,WR=600,GR="_blank",KR="http://localhost";class um{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QR(t,e,n,r=zR,s=WR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},qR),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Lt().toLowerCase();n&&(l=Jy(u)?GR:n),Yy(u)&&(e=e||KR,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[E,C])=>`${m}${E}=${C},`,"");if(uS(u)&&l!=="_self")return YR(e||"",l),new um(null);const d=window.open(e||"",l,f);ye(d,t,"popup-blocked");try{d.focus()}catch{}return new um(d)}function YR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const XR="__/auth/handler",JR="emulator/auth/handler",ZR=encodeURIComponent("fac");async function hm(t,e,n,r,s,i){ye(t.config.authDomain,t,"auth-domain-config-required"),ye(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fi,eventId:s};if(e instanceof zh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof jo){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${ZR}=${encodeURIComponent(c)}`:"";return`${eP(t)}?${Fo(l).slice(1)}${u}`}function eP({config:t}){return t.emulator?$h(t,JR):`https://${t.authDomain}/${XR}`}/**
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
 */const Gc="webStorageSupport";class tP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pv,this._completeRedirectFn=AR,this._overrideRedirectResult=bR}async _openPopup(e,n,r,s){var i;tr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await hm(e,n,r,Au(),s);return QR(e,o,Gh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await hm(e,n,r,Au(),s);return sR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(tr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HR(e),r=new RR(e);return n.register("authEvent",s=>(ye(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gc,{type:Gc},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[Gc];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rv()||Xy()||Bh()}}const nP=tP;var fm="@firebase/auth",dm="1.10.8";/**
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
 */class rP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function sP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iP(t){ti(new gs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ye(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sv(t)},u=new gS(r,s,i,c);return SS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ti(new gs("auth-internal",e=>{const n=lr(e.getProvider("auth").getImmediate());return(r=>new rP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nr(fm,dm,sP(t)),Nr(fm,dm,"esm2017")}/**
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
 */const oP=5*60,aP=Dy("authIdTokenMaxAge")||oP;let pm=null;const lP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>aP)return;const s=n?.token;pm!==s&&(pm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function cP(t=$y()){const e=Mh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AS(t,{popupRedirectResolver:nP,persistence:[dR,tR,pv]}),r=Dy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=lP(i.toString());XS(n,o,()=>o(n.currentUser)),YS(n,l=>o(l))}}const s=Oy("auth");return s&&RS(n,`http://${s}`),n}function uP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}_S({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=dn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",uP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iP("Browser");const Ho=iI("auth",{state:()=>({user:null,isAuthReady:!1,authInstance:null,loading:!1,error:null,successMessage:null}),actions:{initAuth(t){t&&(this.authInstance=t,uv(this.authInstance,e=>{this.user=e,this.isAuthReady=!0}))},async logout(){this.loading=!0,this.error=null,this.successMessage=null;try{this.authInstance?(await JS(this.authInstance),this.user=null):(console.warn("Auth instance not available for logout."),this.error="Authentication service not available.")}catch(t){console.error("Error logging out:",t),this.error=t.message}finally{this.loading=!1}},async signupWithEmail(t,e,n){this.loading=!0,this.error=null,this.successMessage=null;try{const r=await WS(this.authInstance,e,n);return await QS(r.user,{displayName:t}),this.user=r.user,this.successMessage="Account created successfully!",!0}catch(r){return console.error("Error signing up with email:",r),this.error=r.message,!1}finally{this.loading=!1}},async signInWithEmail(t,e){this.loading=!0,this.error=null,this.successMessage=null;try{const n=await GS(this.authInstance,t,e);return this.user=n.user,!0}catch(n){return console.error("Error signing in with email:",n),this.error=n.message,!1}finally{this.loading=!1}},async signInWithGoogle(){this.loading=!0,this.error=null,this.successMessage=null;try{const t=new zn,e=await yR(this.authInstance,t);return this.user=e.user,!0}catch(t){return console.error("Error signing in with Google:",t),this.error=t.message,!1}finally{this.loading=!1}},async sendPasswordReset(t){this.loading=!0,this.error=null,this.successMessage=null;try{return await qS(this.authInstance,t),this.successMessage="Password reset link sent to your email!",!0}catch(e){return console.error("Error sending password reset email:",e),this.error=e.message,!1}finally{this.loading=!1}},async confirmPasswordReset(t,e){this.loading=!0,this.error=null,this.successMessage=null;try{return await zS(this.authInstance,t,e),this.successMessage="Your password has been reset successfully! You can now sign in with your new password.",!0}catch(n){return console.error("Error confirming password reset:",n),this.error=n.message,!1}finally{this.loading=!1}}}}),pi=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},hP={class:"signup-page"},fP={class:"signup-main-content"},dP={class:"signup-card"},pP=["dir"],mP=["dir"],gP={class:"form-group"},_P=["dir"],yP=["placeholder","dir"],vP={class:"form-group"},EP=["dir"],wP=["placeholder","dir"],bP={class:"form-group"},TP=["dir"],IP=["placeholder","dir"],AP=["disabled"],SP={key:0},RP={key:1},PP=["dir"],CP=["dir"],xP=["disabled"],kP=["dir"],OP={__name:"SignupView",setup(t){const e=ui(),n=Ho(),r=Xe("currentLanguage"),s=pe(""),i=pe(""),o=pe(""),l=async()=>{if(i.value!==o.value){n.error=r.value==="en"?"Passwords do not match.":"كلمتا المرور غير متطابقتين.";return}await n.signupWithEmail("",s.value,i.value)},c=async()=>{await n.signupWithGoogle()},u=()=>{e.push("/signin")};return(f,d)=>(ae(),ue("div",hP,[g("main",fP,[g("section",dP,[g("h2",{dir:v(r)==="ar"?"rtl":"ltr"},x(v(r)==="en"?"Welcome! Please Sign Up":"أهلاً بك! يرجى التسجيل"),9,pP),g("p",{dir:v(r)==="ar"?"rtl":"ltr"},x(v(r)==="en"?"Create your account to get started.":"أنشئ حسابك للبدء."),9,mP),g("form",{onSubmit:st(l,["prevent"]),class:"signup-form"},[g("div",gP,[g("label",{for:"email",dir:v(r)==="ar"?"rtl":"ltr"},x(v(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,_P),je(g("input",{type:"email",id:"email","onUpdate:modelValue":d[0]||(d[0]=m=>s.value=m),placeholder:v(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:v(r)==="ar"?"rtl":"ltr",required:""},null,8,yP),[[Ze,s.value]])]),g("div",vP,[g("label",{for:"password",dir:v(r)==="ar"?"rtl":"ltr"},x(v(r)==="en"?"Password":"كلمة المرور"),9,EP),je(g("input",{type:"password",id:"password","onUpdate:modelValue":d[1]||(d[1]=m=>i.value=m),placeholder:v(r)==="en"?"Enter your password":"أدخل كلمة المرور",dir:v(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,wP),[[Ze,i.value]])]),g("div",bP,[g("label",{for:"confirmPassword",dir:v(r)==="ar"?"rtl":"ltr"},x(v(r)==="en"?"Confirm Password":"تأكيد كلمة المرور"),9,TP),je(g("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":d[2]||(d[2]=m=>o.value=m),placeholder:v(r)==="en"?"Confirm your password":"أكد كلمة المرور",dir:v(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,IP),[[Ze,o.value]])]),g("button",{class:"action-button primary",type:"submit",disabled:v(n).loading},[v(n).loading?(ae(),ue("span",SP,x(v(r)==="en"?"Signing Up...":"جاري التسجيل..."),1)):(ae(),ue("span",RP,x(v(r)==="en"?"Create Account":"إنشاء حساب"),1))],8,AP)],32),v(n).error?(ae(),ue("div",{key:0,class:"message error-message",dir:v(r)==="ar"?"rtl":"ltr"},x(v(n).error),9,PP)):et("",!0),g("div",{class:"divider",dir:v(r)==="ar"?"rtl":"ltr"},[g("span",null,x(v(r)==="en"?"OR":"أو"),1)],8,CP),g("button",{onClick:c,class:"action-button google-button",disabled:v(n).loading},[d[3]||(d[3]=oy('<svg class="google-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-bef8900a><path d="M44.5 20H24V28.5H35.5C34.75 31.85 32.5 34.5 29.5 36.5L24 41.5L24 48H32.5C39.5 48 44.5 43.5 44.5 36.5C44.5 35.5 44.3 34.5 44.1 33.5L44.5 20Z" fill="#4285F4" data-v-bef8900a></path><path d="M24 44.5C29.5 44.5 34.25 42.5 37.75 39.25L29.5 36.5C27.25 37.75 24 38.5 24 38.5C18.5 38.5 13.75 34.25 11.75 28.5L6.25 33.5C8.75 38.75 15.5 44.5 24 44.5Z" fill="#34A853" data-v-bef8900a></path><path d="M11.75 28.5C11.25 27.25 11 25.75 11 24C11 22.25 11.25 20.75 11.75 19.5L17.25 14.5C16 17.25 15.25 20.5 15.25 24C15.25 27.5 16 30.75 17.25 33.5L11.75 28.5Z" fill="#FBBC05" data-v-bef8900a></path><path d="M24 9.5C26.75 9.5 29.25 10.5 31.25 12.25L36.5 7C32.5 3 27.25 0 24 0C15.5 0 8.75 5.75 6.25 11L11.75 16C13.75 10.25 18.5 6 24 6C24 6 24 9.5 24 9.5Z" fill="#EA4335" data-v-bef8900a></path></svg>',1)),g("span",null,x(v(r)==="en"?"Sign Up with Google":"التسجيل باستخدام جوجل"),1)],8,xP),g("p",{class:"switch-link-container",dir:v(r)==="ar"?"rtl":"ltr"},[Se(x(v(r)==="en"?"Already have an account?":"هل لديك حساب بالفعل؟")+" ",1),g("a",{href:"#",onClick:st(u,["prevent"])},x(v(r)==="en"?"Sign In":"تسجيل الدخول"),1)],8,kP)])])]))}},NP=pi(OP,[["__scopeId","data-v-bef8900a"]]),DP={class:"login-page"},VP={class:"login-main-content"},MP={class:"login-card"},LP=["dir"],FP=["dir"],UP={class:"form-group"},$P=["dir"],jP=["placeholder","dir"],BP={class:"form-group"},HP=["dir"],qP=["placeholder","dir"],zP=["dir"],WP=["disabled"],GP={key:0},KP={key:1},QP=["dir"],YP=["dir"],XP=["dir"],JP=["disabled"],ZP=["dir"],eC={__name:"SigninView",setup(t){const e=ui(),n=Ho(),r=Xe("currentLanguage"),s=pe(""),i=pe(""),o=async()=>{await n.signInWithEmail(s.value,i.value)},l=async()=>{await n.signInWithGoogle()},c=()=>{e.push("/")},u=()=>{e.push("/resetpassword")};return(f,d)=>(ae(),ue("div",DP,[g("main",VP,[g("section",MP,[g("h2",{dir:v(r)==="ar"?"rtl":"ltr"},x(v(r)==="en"?"Welcome Back! Please Sign In":"أهلاً بعودتك! يرجى تسجيل الدخول"),9,LP),g("p",{dir:v(r)==="ar"?"rtl":"ltr"},x(v(r)==="en"?"Sign in to access your dashboard.":"سجّل الدخول للوصول إلى لوحة التحكم الخاصة بك."),9,FP),g("form",{onSubmit:st(o,["prevent"]),class:"login-form"},[g("div",UP,[g("label",{for:"email",dir:v(r)==="ar"?"rtl":"ltr"},x(v(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,$P),je(g("input",{type:"email",id:"email","onUpdate:modelValue":d[0]||(d[0]=m=>s.value=m),placeholder:v(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:v(r)==="ar"?"rtl":"ltr",required:""},null,8,jP),[[Ze,s.value]])]),g("div",BP,[g("label",{for:"password",dir:v(r)==="ar"?"rtl":"ltr"},x(v(r)==="en"?"Password":"كلمة المرور"),9,HP),je(g("input",{type:"password",id:"password","onUpdate:modelValue":d[1]||(d[1]=m=>i.value=m),placeholder:v(r)==="en"?"Enter your password":"أدخل كلمة المرور",dir:v(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,qP),[[Ze,i.value]]),g("p",{class:"forgot-password-link",dir:v(r)==="ar"?"rtl":"ltr"},[g("a",{href:"#",onClick:st(u,["prevent"])},x(v(r)==="en"?"Forgot your password?":"هل نسيت كلمة المرور؟"),1)],8,zP)]),g("button",{class:"action-button primary",type:"submit",disabled:v(n).loading},[v(n).loading?(ae(),ue("span",GP,x(v(r)==="en"?"Signing In...":"جاري تسجيل الدخول..."),1)):(ae(),ue("span",KP,x(v(r)==="en"?"Sign in":"تسجيل الدخول"),1))],8,WP)],32),v(n).error?(ae(),ue("div",{key:0,class:"message error-message",dir:v(r)==="ar"?"rtl":"ltr"},x(v(n).error),9,QP)):et("",!0),v(n).successMessage?(ae(),ue("div",{key:1,class:"message success-message",dir:v(r)==="ar"?"rtl":"ltr"},x(v(n).successMessage),9,YP)):et("",!0),g("div",{class:"divider",dir:v(r)==="ar"?"rtl":"ltr"},[g("span",null,x(v(r)==="en"?"OR":"أو"),1)],8,XP),g("button",{onClick:l,class:"action-button google-button",disabled:v(n).loading},[d[2]||(d[2]=oy('<svg class="google-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3884b703><path d="M44.5 20H24V28.5H35.5C34.75 31.85 32.5 34.5 29.5 36.5L24 41.5L24 48H32.5C39.5 48 44.5 43.5 44.5 36.5C44.5 35.5 44.3 34.5 44.1 33.5L44.5 20Z" fill="#4285F4" data-v-3884b703></path><path d="M24 44.5C29.5 44.5 34.25 42.5 37.75 39.25L29.5 36.5C27.25 37.75 24 38.5 24 38.5C18.5 38.5 13.75 34.25 11.75 28.5L6.25 33.5C8.75 38.75 15.5 44.5 24 44.5Z" fill="#34A853" data-v-3884b703></path><path d="M11.75 28.5C11.25 27.25 11 25.75 11 24C11 22.25 11.25 20.75 11.75 19.5L17.25 14.5C16 17.25 15.25 20.5 15.25 24C15.25 27.5 16 30.75 17.25 33.5L11.75 28.5Z" fill="#FBBC05" data-v-3884b703></path><path d="M24 9.5C26.75 9.5 29.25 10.5 31.25 12.25L36.5 7C32.5 3 27.25 0 24 0C15.5 0 8.75 5.75 6.25 11L11.75 16C13.75 10.25 18.5 6 24 6C24 6 24 9.5 24 9.5Z" fill="#EA4335" data-v-3884b703></path></svg>',1)),g("span",null,x(v(r)==="en"?"Sign in with Google":"تسجيل الدخول باستخدام جوجل"),1)],8,JP),g("p",{class:"switch-link-container",dir:v(r)==="ar"?"rtl":"ltr"},[Se(x(v(r)==="en"?"Don't have an account?":"ليس لديك حساب؟")+" ",1),g("a",{href:"#",onClick:st(c,["prevent"])},x(v(r)==="en"?"Sign Up":"التسجيل"),1)],8,ZP)])])]))}},tC=pi(eC,[["__scopeId","data-v-3884b703"]]);var mm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,bv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,y){function w(){}w.prototype=y.prototype,P.D=y.prototype,P.prototype=new w,P.prototype.constructor=P,P.C=function(I,A,S){for(var b=Array(arguments.length-2),le=2;le<arguments.length;le++)b[le-2]=arguments[le];return y.prototype[A].apply(I,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(P,y,w){w||(w=0);var I=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)I[A]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(A=0;16>A;++A)I[A]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=P.g[0],w=P.g[1],A=P.g[2];var S=P.g[3],b=y+(S^w&(A^S))+I[0]+3614090360&4294967295;y=w+(b<<7&4294967295|b>>>25),b=S+(A^y&(w^A))+I[1]+3905402710&4294967295,S=y+(b<<12&4294967295|b>>>20),b=A+(w^S&(y^w))+I[2]+606105819&4294967295,A=S+(b<<17&4294967295|b>>>15),b=w+(y^A&(S^y))+I[3]+3250441966&4294967295,w=A+(b<<22&4294967295|b>>>10),b=y+(S^w&(A^S))+I[4]+4118548399&4294967295,y=w+(b<<7&4294967295|b>>>25),b=S+(A^y&(w^A))+I[5]+1200080426&4294967295,S=y+(b<<12&4294967295|b>>>20),b=A+(w^S&(y^w))+I[6]+2821735955&4294967295,A=S+(b<<17&4294967295|b>>>15),b=w+(y^A&(S^y))+I[7]+4249261313&4294967295,w=A+(b<<22&4294967295|b>>>10),b=y+(S^w&(A^S))+I[8]+1770035416&4294967295,y=w+(b<<7&4294967295|b>>>25),b=S+(A^y&(w^A))+I[9]+2336552879&4294967295,S=y+(b<<12&4294967295|b>>>20),b=A+(w^S&(y^w))+I[10]+4294925233&4294967295,A=S+(b<<17&4294967295|b>>>15),b=w+(y^A&(S^y))+I[11]+2304563134&4294967295,w=A+(b<<22&4294967295|b>>>10),b=y+(S^w&(A^S))+I[12]+1804603682&4294967295,y=w+(b<<7&4294967295|b>>>25),b=S+(A^y&(w^A))+I[13]+4254626195&4294967295,S=y+(b<<12&4294967295|b>>>20),b=A+(w^S&(y^w))+I[14]+2792965006&4294967295,A=S+(b<<17&4294967295|b>>>15),b=w+(y^A&(S^y))+I[15]+1236535329&4294967295,w=A+(b<<22&4294967295|b>>>10),b=y+(A^S&(w^A))+I[1]+4129170786&4294967295,y=w+(b<<5&4294967295|b>>>27),b=S+(w^A&(y^w))+I[6]+3225465664&4294967295,S=y+(b<<9&4294967295|b>>>23),b=A+(y^w&(S^y))+I[11]+643717713&4294967295,A=S+(b<<14&4294967295|b>>>18),b=w+(S^y&(A^S))+I[0]+3921069994&4294967295,w=A+(b<<20&4294967295|b>>>12),b=y+(A^S&(w^A))+I[5]+3593408605&4294967295,y=w+(b<<5&4294967295|b>>>27),b=S+(w^A&(y^w))+I[10]+38016083&4294967295,S=y+(b<<9&4294967295|b>>>23),b=A+(y^w&(S^y))+I[15]+3634488961&4294967295,A=S+(b<<14&4294967295|b>>>18),b=w+(S^y&(A^S))+I[4]+3889429448&4294967295,w=A+(b<<20&4294967295|b>>>12),b=y+(A^S&(w^A))+I[9]+568446438&4294967295,y=w+(b<<5&4294967295|b>>>27),b=S+(w^A&(y^w))+I[14]+3275163606&4294967295,S=y+(b<<9&4294967295|b>>>23),b=A+(y^w&(S^y))+I[3]+4107603335&4294967295,A=S+(b<<14&4294967295|b>>>18),b=w+(S^y&(A^S))+I[8]+1163531501&4294967295,w=A+(b<<20&4294967295|b>>>12),b=y+(A^S&(w^A))+I[13]+2850285829&4294967295,y=w+(b<<5&4294967295|b>>>27),b=S+(w^A&(y^w))+I[2]+4243563512&4294967295,S=y+(b<<9&4294967295|b>>>23),b=A+(y^w&(S^y))+I[7]+1735328473&4294967295,A=S+(b<<14&4294967295|b>>>18),b=w+(S^y&(A^S))+I[12]+2368359562&4294967295,w=A+(b<<20&4294967295|b>>>12),b=y+(w^A^S)+I[5]+4294588738&4294967295,y=w+(b<<4&4294967295|b>>>28),b=S+(y^w^A)+I[8]+2272392833&4294967295,S=y+(b<<11&4294967295|b>>>21),b=A+(S^y^w)+I[11]+1839030562&4294967295,A=S+(b<<16&4294967295|b>>>16),b=w+(A^S^y)+I[14]+4259657740&4294967295,w=A+(b<<23&4294967295|b>>>9),b=y+(w^A^S)+I[1]+2763975236&4294967295,y=w+(b<<4&4294967295|b>>>28),b=S+(y^w^A)+I[4]+1272893353&4294967295,S=y+(b<<11&4294967295|b>>>21),b=A+(S^y^w)+I[7]+4139469664&4294967295,A=S+(b<<16&4294967295|b>>>16),b=w+(A^S^y)+I[10]+3200236656&4294967295,w=A+(b<<23&4294967295|b>>>9),b=y+(w^A^S)+I[13]+681279174&4294967295,y=w+(b<<4&4294967295|b>>>28),b=S+(y^w^A)+I[0]+3936430074&4294967295,S=y+(b<<11&4294967295|b>>>21),b=A+(S^y^w)+I[3]+3572445317&4294967295,A=S+(b<<16&4294967295|b>>>16),b=w+(A^S^y)+I[6]+76029189&4294967295,w=A+(b<<23&4294967295|b>>>9),b=y+(w^A^S)+I[9]+3654602809&4294967295,y=w+(b<<4&4294967295|b>>>28),b=S+(y^w^A)+I[12]+3873151461&4294967295,S=y+(b<<11&4294967295|b>>>21),b=A+(S^y^w)+I[15]+530742520&4294967295,A=S+(b<<16&4294967295|b>>>16),b=w+(A^S^y)+I[2]+3299628645&4294967295,w=A+(b<<23&4294967295|b>>>9),b=y+(A^(w|~S))+I[0]+4096336452&4294967295,y=w+(b<<6&4294967295|b>>>26),b=S+(w^(y|~A))+I[7]+1126891415&4294967295,S=y+(b<<10&4294967295|b>>>22),b=A+(y^(S|~w))+I[14]+2878612391&4294967295,A=S+(b<<15&4294967295|b>>>17),b=w+(S^(A|~y))+I[5]+4237533241&4294967295,w=A+(b<<21&4294967295|b>>>11),b=y+(A^(w|~S))+I[12]+1700485571&4294967295,y=w+(b<<6&4294967295|b>>>26),b=S+(w^(y|~A))+I[3]+2399980690&4294967295,S=y+(b<<10&4294967295|b>>>22),b=A+(y^(S|~w))+I[10]+4293915773&4294967295,A=S+(b<<15&4294967295|b>>>17),b=w+(S^(A|~y))+I[1]+2240044497&4294967295,w=A+(b<<21&4294967295|b>>>11),b=y+(A^(w|~S))+I[8]+1873313359&4294967295,y=w+(b<<6&4294967295|b>>>26),b=S+(w^(y|~A))+I[15]+4264355552&4294967295,S=y+(b<<10&4294967295|b>>>22),b=A+(y^(S|~w))+I[6]+2734768916&4294967295,A=S+(b<<15&4294967295|b>>>17),b=w+(S^(A|~y))+I[13]+1309151649&4294967295,w=A+(b<<21&4294967295|b>>>11),b=y+(A^(w|~S))+I[4]+4149444226&4294967295,y=w+(b<<6&4294967295|b>>>26),b=S+(w^(y|~A))+I[11]+3174756917&4294967295,S=y+(b<<10&4294967295|b>>>22),b=A+(y^(S|~w))+I[2]+718787259&4294967295,A=S+(b<<15&4294967295|b>>>17),b=w+(S^(A|~y))+I[9]+3951481745&4294967295,P.g[0]=P.g[0]+y&4294967295,P.g[1]=P.g[1]+(A+(b<<21&4294967295|b>>>11))&4294967295,P.g[2]=P.g[2]+A&4294967295,P.g[3]=P.g[3]+S&4294967295}r.prototype.u=function(P,y){y===void 0&&(y=P.length);for(var w=y-this.blockSize,I=this.B,A=this.h,S=0;S<y;){if(A==0)for(;S<=w;)s(this,P,S),S+=this.blockSize;if(typeof P=="string"){for(;S<y;)if(I[A++]=P.charCodeAt(S++),A==this.blockSize){s(this,I),A=0;break}}else for(;S<y;)if(I[A++]=P[S++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var y=1;y<P.length-8;++y)P[y]=0;var w=8*this.o;for(y=P.length-8;y<P.length;++y)P[y]=w&255,w/=256;for(this.u(P),P=Array(16),y=w=0;4>y;++y)for(var I=0;32>I;I+=8)P[w++]=this.g[y]>>>I&255;return P};function i(P,y){var w=l;return Object.prototype.hasOwnProperty.call(w,P)?w[P]:w[P]=y(P)}function o(P,y){this.h=y;for(var w=[],I=!0,A=P.length-1;0<=A;A--){var S=P[A]|0;I&&S==y||(w[A]=S,I=!1)}this.g=w}var l={};function c(P){return-128<=P&&128>P?i(P,function(y){return new o([y|0],0>y?-1:0)}):new o([P|0],0>P?-1:0)}function u(P){if(isNaN(P)||!isFinite(P))return d;if(0>P)return U(u(-P));for(var y=[],w=1,I=0;P>=w;I++)y[I]=P/w|0,w*=4294967296;return new o(y,0)}function f(P,y){if(P.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(P.charAt(0)=="-")return U(f(P.substring(1),y));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(y,8)),I=d,A=0;A<P.length;A+=8){var S=Math.min(8,P.length-A),b=parseInt(P.substring(A,A+S),y);8>S?(S=u(Math.pow(y,S)),I=I.j(S).add(u(b))):(I=I.j(w),I=I.add(u(b)))}return I}var d=c(0),m=c(1),E=c(16777216);t=o.prototype,t.m=function(){if(M(this))return-U(this).m();for(var P=0,y=1,w=0;w<this.g.length;w++){var I=this.i(w);P+=(0<=I?I:4294967296+I)*y,y*=4294967296}return P},t.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(C(this))return"0";if(M(this))return"-"+U(this).toString(P);for(var y=u(Math.pow(P,6)),w=this,I="";;){var A=$(w,y).g;w=L(w,A.j(y));var S=((0<w.g.length?w.g[0]:w.h)>>>0).toString(P);if(w=A,C(w))return S+I;for(;6>S.length;)S="0"+S;I=S+I}},t.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function C(P){if(P.h!=0)return!1;for(var y=0;y<P.g.length;y++)if(P.g[y]!=0)return!1;return!0}function M(P){return P.h==-1}t.l=function(P){return P=L(this,P),M(P)?-1:C(P)?0:1};function U(P){for(var y=P.g.length,w=[],I=0;I<y;I++)w[I]=~P.g[I];return new o(w,~P.h).add(m)}t.abs=function(){return M(this)?U(this):this},t.add=function(P){for(var y=Math.max(this.g.length,P.g.length),w=[],I=0,A=0;A<=y;A++){var S=I+(this.i(A)&65535)+(P.i(A)&65535),b=(S>>>16)+(this.i(A)>>>16)+(P.i(A)>>>16);I=b>>>16,S&=65535,b&=65535,w[A]=b<<16|S}return new o(w,w[w.length-1]&-2147483648?-1:0)};function L(P,y){return P.add(U(y))}t.j=function(P){if(C(this)||C(P))return d;if(M(this))return M(P)?U(this).j(U(P)):U(U(this).j(P));if(M(P))return U(this.j(U(P)));if(0>this.l(E)&&0>P.l(E))return u(this.m()*P.m());for(var y=this.g.length+P.g.length,w=[],I=0;I<2*y;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<P.g.length;A++){var S=this.i(I)>>>16,b=this.i(I)&65535,le=P.i(A)>>>16,ce=P.i(A)&65535;w[2*I+2*A]+=b*ce,D(w,2*I+2*A),w[2*I+2*A+1]+=S*ce,D(w,2*I+2*A+1),w[2*I+2*A+1]+=b*le,D(w,2*I+2*A+1),w[2*I+2*A+2]+=S*le,D(w,2*I+2*A+2)}for(I=0;I<y;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=y;I<2*y;I++)w[I]=0;return new o(w,0)};function D(P,y){for(;(P[y]&65535)!=P[y];)P[y+1]+=P[y]>>>16,P[y]&=65535,y++}function B(P,y){this.g=P,this.h=y}function $(P,y){if(C(y))throw Error("division by zero");if(C(P))return new B(d,d);if(M(P))return y=$(U(P),y),new B(U(y.g),U(y.h));if(M(y))return y=$(P,U(y)),new B(U(y.g),y.h);if(30<P.g.length){if(M(P)||M(y))throw Error("slowDivide_ only works with positive integers.");for(var w=m,I=y;0>=I.l(P);)w=Z(w),I=Z(I);var A=re(w,1),S=re(I,1);for(I=re(I,2),w=re(w,2);!C(I);){var b=S.add(I);0>=b.l(P)&&(A=A.add(w),S=b),I=re(I,1),w=re(w,1)}return y=L(P,A.j(y)),new B(A,y)}for(A=d;0<=P.l(y);){for(w=Math.max(1,Math.floor(P.m()/y.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),S=u(w),b=S.j(y);M(b)||0<b.l(P);)w-=I,S=u(w),b=S.j(y);C(S)&&(S=m),A=A.add(S),P=L(P,b)}return new B(A,P)}t.A=function(P){return $(this,P).h},t.and=function(P){for(var y=Math.max(this.g.length,P.g.length),w=[],I=0;I<y;I++)w[I]=this.i(I)&P.i(I);return new o(w,this.h&P.h)},t.or=function(P){for(var y=Math.max(this.g.length,P.g.length),w=[],I=0;I<y;I++)w[I]=this.i(I)|P.i(I);return new o(w,this.h|P.h)},t.xor=function(P){for(var y=Math.max(this.g.length,P.g.length),w=[],I=0;I<y;I++)w[I]=this.i(I)^P.i(I);return new o(w,this.h^P.h)};function Z(P){for(var y=P.g.length+1,w=[],I=0;I<y;I++)w[I]=P.i(I)<<1|P.i(I-1)>>>31;return new o(w,P.h)}function re(P,y){var w=y>>5;y%=32;for(var I=P.g.length-w,A=[],S=0;S<I;S++)A[S]=0<y?P.i(S+w)>>>y|P.i(S+w+1)<<32-y:P.i(S+w);return new o(A,P.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,bv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Dr=o}).apply(typeof mm<"u"?mm:typeof self<"u"?self:typeof window<"u"?window:{});var va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tv,$i,Iv,Da,Pu,Av,Sv,Rv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof va=="object"&&va];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var V=a[_];if(!(V in p))break e;p=p[V]}a=a[a.length-1],_=p[a],h=h(_),h!=_&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var p=0,_=!1,V={next:function(){if(!_&&p<a.length){var j=p++;return{value:h(j,a[j]),done:!1}}return _=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,p){return a.call.apply(a.bind,arguments)}function d(a,h,p){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,_),a.apply(h,V)}}return function(){return a.apply(h,arguments)}}function m(a,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:d,m.apply(null,arguments)}function E(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function C(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(_,V,j){for(var J=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)J[Be-2]=arguments[Be];return h.prototype[V].apply(_,J)}}function M(a){const h=a.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=a[_];return p}return[]}function U(a,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const V=a.length||0,j=_.length||0;a.length=V+j;for(let J=0;J<j;J++)a[V+J]=_[J]}else a.push(_)}}class L{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(a){return/^[\s\xa0]*$/.test(a)}function B(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var Z=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function re(a,h,p){for(const _ in a)h.call(p,a[_],_,a)}function P(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function y(a){const h={};for(const p in a)h[p]=a[p];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let p,_;for(let V=1;V<arguments.length;V++){_=arguments[V];for(p in _)a[p]=_[p];for(let j=0;j<w.length;j++)p=w[j],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function A(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function S(a){l.setTimeout(()=>{throw a},0)}function b(){var a=ft;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class le{constructor(){this.h=this.g=null}add(h,p){const _=ce.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var ce=new L(()=>new Re,a=>a.reset());class Re{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let X,Ie=!1,ft=new le,vt=()=>{const a=l.Promise.resolve(void 0);X=()=>{a.then(pt)}};var pt=()=>{for(var a;a=b();){try{a.h.call(a.g)}catch(p){S(p)}var h=ce;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ie=!1};function ze(){this.s=this.s,this.C=this.C}ze.prototype.s=!1,ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ke(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var vn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function Zt(a,h){if(Ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Z){e:{try{$(h.nodeName);var V=!0;break e}catch{}V=!1}V||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Pt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Zt.aa.h.call(this)}}C(Zt,Ke);var Pt={2:"touch",3:"pen",4:"mouse"};Zt.prototype.h=function(){Zt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var q="closure_listenable_"+(1e6*Math.random()|0),se=0;function ee(a,h,p,_,V){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=V,this.key=++se,this.da=this.fa=!1}function oe(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Oe(a){this.src=a,this.g={},this.h=0}Oe.prototype.add=function(a,h,p,_,V){var j=a.toString();a=this.g[j],a||(a=this.g[j]=[],this.h++);var J=R(a,h,_,V);return-1<J?(h=a[J],p||(h.fa=!1)):(h=new ee(h,this.src,j,!!_,V),h.fa=p,a.push(h)),h};function T(a,h){var p=h.type;if(p in a.g){var _=a.g[p],V=Array.prototype.indexOf.call(_,h,void 0),j;(j=0<=V)&&Array.prototype.splice.call(_,V,1),j&&(oe(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function R(a,h,p,_){for(var V=0;V<a.length;++V){var j=a[V];if(!j.da&&j.listener==h&&j.capture==!!p&&j.ha==_)return V}return-1}var k="closure_lm_"+(1e6*Math.random()|0),H={};function K(a,h,p,_,V){if(Array.isArray(h)){for(var j=0;j<h.length;j++)K(a,h[j],p,_,V);return null}return p=Ee(p),a&&a[q]?a.K(h,p,u(_)?!!_.capture:!1,V):O(a,h,p,!1,_,V)}function O(a,h,p,_,V,j){if(!h)throw Error("Invalid event type");var J=u(V)?!!V.capture:!!V,Be=te(a);if(Be||(a[k]=Be=new Oe(a)),p=Be.add(h,p,_,J,j),p.proxy)return p;if(_=N(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)vn||(V=J),V===void 0&&(V=!1),a.addEventListener(h.toString(),_,V);else if(a.attachEvent)a.attachEvent(Q(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function N(){function a(p){return h.call(a.src,a.listener,p)}const h=de;return a}function W(a,h,p,_,V){if(Array.isArray(h))for(var j=0;j<h.length;j++)W(a,h[j],p,_,V);else _=u(_)?!!_.capture:!!_,p=Ee(p),a&&a[q]?(a=a.i,h=String(h).toString(),h in a.g&&(j=a.g[h],p=R(j,p,_,V),-1<p&&(oe(j[p]),Array.prototype.splice.call(j,p,1),j.length==0&&(delete a.g[h],a.h--)))):a&&(a=te(a))&&(h=a.g[h.toString()],a=-1,h&&(a=R(h,p,_,V)),(p=-1<a?h[a]:null)&&F(p))}function F(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[q])T(h.i,a);else{var p=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(p,_,a.capture):h.detachEvent?h.detachEvent(Q(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=te(h))?(T(p,a),p.h==0&&(p.src=null,h[k]=null)):oe(a)}}}function Q(a){return a in H?H[a]:H[a]="on"+a}function de(a,h){if(a.da)a=!0;else{h=new Zt(h,this);var p=a.listener,_=a.ha||a.src;a.fa&&F(a),a=p.call(_,h)}return a}function te(a){return a=a[k],a instanceof Oe?a:null}var he="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ee(a){return typeof a=="function"?a:(a[he]||(a[he]=function(h){return a.handleEvent(h)}),a[he])}function _e(){ze.call(this),this.i=new Oe(this),this.M=this,this.F=null}C(_e,ze),_e.prototype[q]=!0,_e.prototype.removeEventListener=function(a,h,p,_){W(this,a,h,p,_)};function Ae(a,h){var p,_=a.F;if(_)for(p=[];_;_=_.F)p.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new Ke(h,a);else if(h instanceof Ke)h.target=h.target||a;else{var V=h;h=new Ke(_,a),I(h,V)}if(V=!0,p)for(var j=p.length-1;0<=j;j--){var J=h.g=p[j];V=Ne(J,_,!0,h)&&V}if(J=h.g=a,V=Ne(J,_,!0,h)&&V,V=Ne(J,_,!1,h)&&V,p)for(j=0;j<p.length;j++)J=h.g=p[j],V=Ne(J,_,!1,h)&&V}_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],_=0;_<p.length;_++)oe(p[_]);delete a.g[h],a.h--}}this.F=null},_e.prototype.K=function(a,h,p,_){return this.i.add(String(a),h,!1,p,_)},_e.prototype.L=function(a,h,p,_){return this.i.add(String(a),h,!0,p,_)};function Ne(a,h,p,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var V=!0,j=0;j<h.length;++j){var J=h[j];if(J&&!J.da&&J.capture==p){var Be=J.listener,Tt=J.ha||J.src;J.fa&&T(a.i,J),V=Be.call(Tt,_)!==!1&&V}}return V&&!_.defaultPrevented}function Et(a,h,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function wt(a){a.g=Et(()=>{a.g=null,a.i&&(a.i=!1,wt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class en extends ze{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:wt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ct(a){ze.call(this),this.h=a,this.g={}}C(Ct,ze);var hr=[];function wi(a){re(a.g,function(h,p){this.g.hasOwnProperty(p)&&F(h)},a),a.g={}}Ct.prototype.N=function(){Ct.aa.N.call(this),wi(this)},Ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bt=l.JSON.stringify,tn=l.JSON.parse,Jo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function hc(){}hc.prototype.h=null;function Hf(a){return a.h||(a.h=a.i())}function qf(){}var bi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fc(){Ke.call(this,"d")}C(fc,Ke);function dc(){Ke.call(this,"c")}C(dc,Ke);var Xr={},zf=null;function Zo(){return zf=zf||new _e}Xr.La="serverreachability";function Wf(a){Ke.call(this,Xr.La,a)}C(Wf,Ke);function Ti(a){const h=Zo();Ae(h,new Wf(h))}Xr.STAT_EVENT="statevent";function Gf(a,h){Ke.call(this,Xr.STAT_EVENT,a),this.stat=h}C(Gf,Ke);function Ut(a){const h=Zo();Ae(h,new Gf(h,a))}Xr.Ma="timingevent";function Kf(a,h){Ke.call(this,Xr.Ma,a),this.size=h}C(Kf,Ke);function Ii(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ai(){this.g=!0}Ai.prototype.xa=function(){this.g=!1};function $0(a,h,p,_,V,j){a.info(function(){if(a.g)if(j)for(var J="",Be=j.split("&"),Tt=0;Tt<Be.length;Tt++){var Me=Be[Tt].split("=");if(1<Me.length){var xt=Me[0];Me=Me[1];var kt=xt.split("_");J=2<=kt.length&&kt[1]=="type"?J+(xt+"="+Me+"&"):J+(xt+"=redacted&")}}else J=null;else J=j;return"XMLHTTP REQ ("+_+") [attempt "+V+"]: "+h+`
`+p+`
`+J})}function j0(a,h,p,_,V,j,J){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+V+"]: "+h+`
`+p+`
`+j+" "+J})}function Ps(a,h,p,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+H0(a,p)+(_?" "+_:"")})}function B0(a,h){a.info(function(){return"TIMEOUT: "+h})}Ai.prototype.info=function(){};function H0(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var _=p[a];if(!(2>_.length)){var V=_[1];if(Array.isArray(V)&&!(1>V.length)){var j=V[0];if(j!="noop"&&j!="stop"&&j!="close")for(var J=1;J<V.length;J++)V[J]=""}}}}return bt(p)}catch{return h}}var ea={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Qf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pc;function ta(){}C(ta,hc),ta.prototype.g=function(){return new XMLHttpRequest},ta.prototype.i=function(){return{}},pc=new ta;function fr(a,h,p,_){this.j=a,this.i=h,this.l=p,this.R=_||1,this.U=new Ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Yf}function Yf(){this.i=null,this.g="",this.h=!1}var Xf={},mc={};function gc(a,h,p){a.L=1,a.v=ia(Mn(h)),a.m=p,a.P=!0,Jf(a,null)}function Jf(a,h){a.F=Date.now(),na(a),a.A=Mn(a.v);var p=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),fd(p.i,"t",_),a.C=0,p=a.j.J,a.h=new Yf,a.g=xd(a.j,p?h:null,!a.m),0<a.O&&(a.M=new en(m(a.Y,a,a.g),a.O)),h=a.U,p=a.g,_=a.ca;var V="readystatechange";Array.isArray(V)||(V&&(hr[0]=V.toString()),V=hr);for(var j=0;j<V.length;j++){var J=K(p,V[j],_||h.handleEvent,!1,h.h||h);if(!J)break;h.g[J.key]=J}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ti(),$0(a.i,a.u,a.A,a.l,a.R,a.m)}fr.prototype.ca=function(a){a=a.target;const h=this.M;h&&Ln(a)==3?h.j():this.Y(a)},fr.prototype.Y=function(a){try{if(a==this.g)e:{const kt=Ln(this.g);var h=this.g.Ba();const ks=this.g.Z();if(!(3>kt)&&(kt!=3||this.g&&(this.h.h||this.g.oa()||vd(this.g)))){this.J||kt!=4||h==7||(h==8||0>=ks?Ti(3):Ti(2)),_c(this);var p=this.g.Z();this.X=p;t:if(Zf(this)){var _=vd(this.g);a="";var V=_.length,j=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jr(this),Si(this);var J="";break t}this.h.i=new l.TextDecoder}for(h=0;h<V;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(j&&h==V-1)});_.length=0,this.h.g+=a,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=p==200,j0(this.i,this.u,this.A,this.l,this.R,kt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,Tt=this.g;if((Be=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(Be)){var Me=Be;break t}}Me=null}if(p=Me)Ps(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yc(this,p);else{this.o=!1,this.s=3,Ut(12),Jr(this),Si(this);break e}}if(this.P){p=!0;let cn;for(;!this.J&&this.C<J.length;)if(cn=q0(this,J),cn==mc){kt==4&&(this.s=4,Ut(14),p=!1),Ps(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==Xf){this.s=4,Ut(15),Ps(this.i,this.l,J,"[Invalid Chunk]"),p=!1;break}else Ps(this.i,this.l,cn,null),yc(this,cn);if(Zf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),kt!=4||J.length!=0||this.h.h||(this.s=1,Ut(16),p=!1),this.o=this.o&&p,!p)Ps(this.i,this.l,J,"[Invalid Chunked Response]"),Jr(this),Si(this);else if(0<J.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),Ic(xt),xt.M=!0,Ut(11))}}else Ps(this.i,this.l,J,null),yc(this,J);kt==4&&Jr(this),this.o&&!this.J&&(kt==4?Sd(this.j,this):(this.o=!1,na(this)))}else aw(this.g),p==400&&0<J.indexOf("Unknown SID")?(this.s=3,Ut(12)):(this.s=0,Ut(13)),Jr(this),Si(this)}}}catch{}finally{}};function Zf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function q0(a,h){var p=a.C,_=h.indexOf(`
`,p);return _==-1?mc:(p=Number(h.substring(p,_)),isNaN(p)?Xf:(_+=1,_+p>h.length?mc:(h=h.slice(_,_+p),a.C=_+p,h)))}fr.prototype.cancel=function(){this.J=!0,Jr(this)};function na(a){a.S=Date.now()+a.I,ed(a,a.I)}function ed(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ii(m(a.ba,a),h)}function _c(a){a.B&&(l.clearTimeout(a.B),a.B=null)}fr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(B0(this.i,this.A),this.L!=2&&(Ti(),Ut(17)),Jr(this),this.s=2,Si(this)):ed(this,this.S-a)};function Si(a){a.j.G==0||a.J||Sd(a.j,a)}function Jr(a){_c(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,wi(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function yc(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||vc(p.h,a))){if(!a.K&&vc(p.h,a)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var V=_;if(V[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)ha(p),ca(p);else break e;Tc(p),Ut(18)}}else p.za=V[1],0<p.za-p.T&&37500>V[2]&&p.F&&p.v==0&&!p.C&&(p.C=Ii(m(p.Za,p),6e3));if(1>=rd(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else es(p,11)}else if((a.K||p.g==a)&&ha(p),!D(h))for(V=p.Da.g.parse(h),h=0;h<V.length;h++){let Me=V[h];if(p.T=Me[0],Me=Me[1],p.G==2)if(Me[0]=="c"){p.K=Me[1],p.ia=Me[2];const xt=Me[3];xt!=null&&(p.la=xt,p.j.info("VER="+p.la));const kt=Me[4];kt!=null&&(p.Aa=kt,p.j.info("SVER="+p.Aa));const ks=Me[5];ks!=null&&typeof ks=="number"&&0<ks&&(_=1.5*ks,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const cn=a.g;if(cn){const da=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(da){var j=_.h;j.g||da.indexOf("spdy")==-1&&da.indexOf("quic")==-1&&da.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Ec(j,j.h),j.h=null))}if(_.D){const Ac=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ac&&(_.ya=Ac,Qe(_.I,_.D,Ac))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var J=a;if(_.qa=Cd(_,_.J?_.ia:null,_.W),J.K){sd(_.h,J);var Be=J,Tt=_.L;Tt&&(Be.I=Tt),Be.B&&(_c(Be),na(Be)),_.g=J}else Id(_);0<p.i.length&&ua(p)}else Me[0]!="stop"&&Me[0]!="close"||es(p,7);else p.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?es(p,7):bc(p):Me[0]!="noop"&&p.l&&p.l.ta(Me),p.v=0)}}Ti(4)}catch{}}var z0=class{constructor(a,h){this.g=a,this.map=h}};function td(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function rd(a){return a.h?1:a.g?a.g.size:0}function vc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ec(a,h){a.g?a.g.add(h):a.h=h}function sd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}td.prototype.cancel=function(){if(this.i=id(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function id(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return M(a.i)}function W0(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],p=a.length,_=0;_<p;_++)h.push(a[_]);return h}h=[],p=0;for(_ in a)h[p++]=a[_];return h}function G0(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const _ in a)h[p++]=_;return h}}}function od(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=G0(a),_=W0(a),V=_.length,j=0;j<V;j++)h.call(void 0,_[j],p&&p[j],a)}var ad=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function K0(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var _=a[p].indexOf("="),V=null;if(0<=_){var j=a[p].substring(0,_);V=a[p].substring(_+1)}else j=a[p];h(j,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Zr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Zr){this.h=a.h,ra(this,a.j),this.o=a.o,this.g=a.g,sa(this,a.s),this.l=a.l;var h=a.i,p=new Ci;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),ld(this,p),this.m=a.m}else a&&(h=String(a).match(ad))?(this.h=!1,ra(this,h[1]||"",!0),this.o=Ri(h[2]||""),this.g=Ri(h[3]||"",!0),sa(this,h[4]),this.l=Ri(h[5]||"",!0),ld(this,h[6]||"",!0),this.m=Ri(h[7]||"")):(this.h=!1,this.i=new Ci(null,this.h))}Zr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Pi(h,cd,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Pi(h,cd,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Pi(p,p.charAt(0)=="/"?X0:Y0,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Pi(p,Z0)),a.join("")};function Mn(a){return new Zr(a)}function ra(a,h,p){a.j=p?Ri(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function sa(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function ld(a,h,p){h instanceof Ci?(a.i=h,ew(a.i,a.h)):(p||(h=Pi(h,J0)),a.i=new Ci(h,a.h))}function Qe(a,h,p){a.i.set(h,p)}function ia(a){return Qe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ri(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Pi(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,Q0),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Q0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var cd=/[#\/\?@]/g,Y0=/[#\?:]/g,X0=/[#\?]/g,J0=/[#\?@]/g,Z0=/#/g;function Ci(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function dr(a){a.g||(a.g=new Map,a.h=0,a.i&&K0(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Ci.prototype,t.add=function(a,h){dr(this),this.i=null,a=Cs(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function ud(a,h){dr(a),h=Cs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function hd(a,h){return dr(a),h=Cs(a,h),a.g.has(h)}t.forEach=function(a,h){dr(this),this.g.forEach(function(p,_){p.forEach(function(V){a.call(h,V,_,this)},this)},this)},t.na=function(){dr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const V=a[_];for(let j=0;j<V.length;j++)p.push(h[_])}return p},t.V=function(a){dr(this);let h=[];if(typeof a=="string")hd(this,a)&&(h=h.concat(this.g.get(Cs(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return dr(this),this.i=null,a=Cs(this,a),hd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function fd(a,h,p){ud(a,h),0<p.length&&(a.i=null,a.g.set(Cs(a,h),M(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const j=encodeURIComponent(String(_)),J=this.V(_);for(_=0;_<J.length;_++){var V=j;J[_]!==""&&(V+="="+encodeURIComponent(String(J[_]))),a.push(V)}}return this.i=a.join("&")};function Cs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function ew(a,h){h&&!a.j&&(dr(a),a.i=null,a.g.forEach(function(p,_){var V=_.toLowerCase();_!=V&&(ud(this,_),fd(this,V,p))},a)),a.j=h}function tw(a,h){const p=new Ai;if(l.Image){const _=new Image;_.onload=E(pr,p,"TestLoadImage: loaded",!0,h,_),_.onerror=E(pr,p,"TestLoadImage: error",!1,h,_),_.onabort=E(pr,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=E(pr,p,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function nw(a,h){const p=new Ai,_=new AbortController,V=setTimeout(()=>{_.abort(),pr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(j=>{clearTimeout(V),j.ok?pr(p,"TestPingServer: ok",!0,h):pr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(V),pr(p,"TestPingServer: error",!1,h)})}function pr(a,h,p,_,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),_(p)}catch{}}function rw(){this.g=new Jo}function sw(a,h,p){const _=p||"";try{od(a,function(V,j){let J=V;u(V)&&(J=bt(V)),h.push(_+j+"="+encodeURIComponent(J))})}catch(V){throw h.push(_+"type="+encodeURIComponent("_badmap")),V}}function oa(a){this.l=a.Ub||null,this.j=a.eb||!1}C(oa,hc),oa.prototype.g=function(){return new aa(this.l,this.j)},oa.prototype.i=function(a){return function(){return a}}({});function aa(a,h){_e.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(aa,_e),t=aa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ki(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ki(this)),this.g&&(this.readyState=3,ki(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function dd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?xi(this):ki(this),this.readyState==3&&dd(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,xi(this))},t.Qa=function(a){this.g&&(this.response=a,xi(this))},t.ga=function(){this.g&&xi(this)};function xi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ki(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function ki(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(aa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function pd(a){let h="";return re(a,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function wc(a,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=pd(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Qe(a,h,p))}function nt(a){_e.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(nt,_e);var iw=/^https?$/i,ow=["POST","PUT"];t=nt.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pc.g(),this.v=this.o?Hf(this.o):Hf(pc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(j){md(this,j);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var V in _)p.set(V,_[V]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const j of _.keys())p.set(j,_.get(j));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(j=>j.toLowerCase()=="content-type"),V=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ow,h,void 0))||_||V||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,J]of p)this.g.setRequestHeader(j,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yd(this),this.u=!0,this.g.send(a),this.u=!1}catch(j){md(this,j)}};function md(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,gd(a),la(a)}function gd(a){a.A||(a.A=!0,Ae(a,"complete"),Ae(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ae(this,"complete"),Ae(this,"abort"),la(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),la(this,!0)),nt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?_d(this):this.bb())},t.bb=function(){_d(this)};function _d(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Ln(a)!=4||a.Z()!=2)){if(a.u&&Ln(a)==4)Et(a.Ea,0,a);else if(Ae(a,"readystatechange"),Ln(a)==4){a.h=!1;try{const J=a.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=J===0){var V=String(a.D).match(ad)[1]||null;!V&&l.self&&l.self.location&&(V=l.self.location.protocol.slice(0,-1)),_=!iw.test(V?V.toLowerCase():"")}p=_}if(p)Ae(a,"complete"),Ae(a,"success");else{a.m=6;try{var j=2<Ln(a)?a.g.statusText:""}catch{j=""}a.l=j+" ["+a.Z()+"]",gd(a)}}finally{la(a)}}}}function la(a,h){if(a.g){yd(a);const p=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Ae(a,"ready");try{p.onreadystatechange=_}catch{}}}function yd(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Ln(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),tn(h)}};function vd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function aw(a){const h={};a=(a.g&&2<=Ln(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(D(a[_]))continue;var p=A(a[_]);const V=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const j=h[V]||[];h[V]=j,j.push(p)}P(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oi(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Ed(a){this.Aa=0,this.i=[],this.j=new Ai,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Oi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Oi("baseRetryDelayMs",5e3,a),this.cb=Oi("retryDelaySeedMs",1e4,a),this.Wa=Oi("forwardChannelMaxRetries",2,a),this.wa=Oi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new td(a&&a.concurrentRequestLimit),this.Da=new rw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ed.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,_){Ut(0),this.W=a,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=Cd(this,null,this.W),ua(this)};function bc(a){if(wd(a),a.G==3){var h=a.U++,p=Mn(a.I);if(Qe(p,"SID",a.K),Qe(p,"RID",h),Qe(p,"TYPE","terminate"),Ni(a,p),h=new fr(a,a.j,h),h.L=2,h.v=ia(Mn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=xd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),na(h)}Pd(a)}function ca(a){a.g&&(Ic(a),a.g.cancel(),a.g=null)}function wd(a){ca(a),a.u&&(l.clearTimeout(a.u),a.u=null),ha(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ua(a){if(!nd(a.h)&&!a.s){a.s=!0;var h=a.Ga;X||vt(),Ie||(X(),Ie=!0),ft.add(h,a),a.B=0}}function lw(a,h){return rd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ii(m(a.Ga,a,h),Rd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const V=new fr(this,this.j,a);let j=this.o;if(this.S&&(j?(j=y(j),I(j,this.S)):j=this.S),this.m!==null||this.O||(V.H=j,j=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Td(this,V,h),p=Mn(this.I),Qe(p,"RID",a),Qe(p,"CVER",22),this.D&&Qe(p,"X-HTTP-Session-Id",this.D),Ni(this,p),j&&(this.O?h="headers="+encodeURIComponent(String(pd(j)))+"&"+h:this.m&&wc(p,this.m,j)),Ec(this.h,V),this.Ua&&Qe(p,"TYPE","init"),this.P?(Qe(p,"$req",h),Qe(p,"SID","null"),V.T=!0,gc(V,p,null)):gc(V,p,h),this.G=2}}else this.G==3&&(a?bd(this,a):this.i.length==0||nd(this.h)||bd(this))};function bd(a,h){var p;h?p=h.l:p=a.U++;const _=Mn(a.I);Qe(_,"SID",a.K),Qe(_,"RID",p),Qe(_,"AID",a.T),Ni(a,_),a.m&&a.o&&wc(_,a.m,a.o),p=new fr(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Td(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ec(a.h,p),gc(p,_,h)}function Ni(a,h){a.H&&re(a.H,function(p,_){Qe(h,_,p)}),a.l&&od({},function(p,_){Qe(h,_,p)})}function Td(a,h,p){p=Math.min(a.i.length,p);var _=a.l?m(a.l.Na,a.l,a):null;e:{var V=a.i;let j=-1;for(;;){const J=["count="+p];j==-1?0<p?(j=V[0].g,J.push("ofs="+j)):j=0:J.push("ofs="+j);let Be=!0;for(let Tt=0;Tt<p;Tt++){let Me=V[Tt].g;const xt=V[Tt].map;if(Me-=j,0>Me)j=Math.max(0,V[Tt].g-100),Be=!1;else try{sw(xt,J,"req"+Me+"_")}catch{_&&_(xt)}}if(Be){_=J.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,_}function Id(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;X||vt(),Ie||(X(),Ie=!0),ft.add(h,a),a.v=0}}function Tc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ii(m(a.Fa,a),Rd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ad(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ii(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ut(10),ca(this),Ad(this))};function Ic(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ad(a){a.g=new fr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Mn(a.qa);Qe(h,"RID","rpc"),Qe(h,"SID",a.K),Qe(h,"AID",a.T),Qe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Qe(h,"TO",a.ja),Qe(h,"TYPE","xmlhttp"),Ni(a,h),a.m&&a.o&&wc(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=ia(Mn(h)),p.m=null,p.P=!0,Jf(p,a)}t.Za=function(){this.C!=null&&(this.C=null,ca(this),Tc(this),Ut(19))};function ha(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Sd(a,h){var p=null;if(a.g==h){ha(a),Ic(a),a.g=null;var _=2}else if(vc(a.h,h))p=h.D,sd(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var V=a.B;_=Zo(),Ae(_,new Kf(_,p)),ua(a)}else Id(a);else if(V=h.s,V==3||V==0&&0<h.X||!(_==1&&lw(a,h)||_==2&&Tc(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),V){case 1:es(a,5);break;case 4:es(a,10);break;case 3:es(a,6);break;default:es(a,2)}}}function Rd(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function es(a,h){if(a.j.info("Error code "+h),h==2){var p=m(a.fb,a),_=a.Xa;const V=!_;_=new Zr(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ra(_,"https"),ia(_),V?tw(_.toString(),p):nw(_.toString(),p)}else Ut(2);a.G=0,a.l&&a.l.sa(h),Pd(a),wd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))};function Pd(a){if(a.G=0,a.ka=[],a.l){const h=id(a.h);(h.length!=0||a.i.length!=0)&&(U(a.ka,h),U(a.ka,a.i),a.h.i.length=0,M(a.i),a.i.length=0),a.l.ra()}}function Cd(a,h,p){var _=p instanceof Zr?Mn(p):new Zr(p);if(_.g!="")h&&(_.g=h+"."+_.g),sa(_,_.s);else{var V=l.location;_=V.protocol,h=h?h+"."+V.hostname:V.hostname,V=+V.port;var j=new Zr(null);_&&ra(j,_),h&&(j.g=h),V&&sa(j,V),p&&(j.l=p),_=j}return p=a.D,h=a.ya,p&&h&&Qe(_,p,h),Qe(_,"VER",a.la),Ni(a,_),_}function xd(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new nt(new oa({eb:p})):new nt(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function kd(){}t=kd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function fa(){}fa.prototype.g=function(a,h){return new Gt(a,h)};function Gt(a,h){_e.call(this),this.g=new Ed(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!D(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!D(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new xs(this)}C(Gt,_e),Gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gt.prototype.close=function(){bc(this.g)},Gt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=bt(a),a=p);h.i.push(new z0(h.Ya++,a)),h.G==3&&ua(h)},Gt.prototype.N=function(){this.g.l=null,delete this.j,bc(this.g),delete this.g,Gt.aa.N.call(this)};function Od(a){fc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(Od,fc);function Nd(){dc.call(this),this.status=1}C(Nd,dc);function xs(a){this.g=a}C(xs,kd),xs.prototype.ua=function(){Ae(this.g,"a")},xs.prototype.ta=function(a){Ae(this.g,new Od(a))},xs.prototype.sa=function(a){Ae(this.g,new Nd)},xs.prototype.ra=function(){Ae(this.g,"b")},fa.prototype.createWebChannel=fa.prototype.g,Gt.prototype.send=Gt.prototype.o,Gt.prototype.open=Gt.prototype.m,Gt.prototype.close=Gt.prototype.close,Rv=function(){return new fa},Sv=function(){return Zo()},Av=Xr,Pu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ea.NO_ERROR=0,ea.TIMEOUT=8,ea.HTTP_ERROR=6,Da=ea,Qf.COMPLETE="complete",Iv=Qf,qf.EventType=bi,bi.OPEN="a",bi.CLOSE="b",bi.ERROR="c",bi.MESSAGE="d",_e.prototype.listen=_e.prototype.K,$i=qf,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,Tv=nt}).apply(typeof va<"u"?va:typeof self<"u"?self:typeof window<"u"?window:{});const gm="@firebase/firestore",_m="4.8.0";/**
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
 */let mi="11.10.0";/**
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
 */const vs=new Dh("@firebase/firestore");function Ms(){return vs.logLevel}function ie(t,...e){if(vs.logLevel<=xe.DEBUG){const n=e.map(Qh);vs.debug(`Firestore (${mi}): ${t}`,...n)}}function nr(t,...e){if(vs.logLevel<=xe.ERROR){const n=e.map(Qh);vs.error(`Firestore (${mi}): ${t}`,...n)}}function Ur(t,...e){if(vs.logLevel<=xe.WARN){const n=e.map(Qh);vs.warn(`Firestore (${mi}): ${t}`,...n)}}function Qh(t){if(typeof t=="string")return t;try{/**
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
 */function ve(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Pv(t,r,n)}function Pv(t,e,n){let r=`FIRESTORE (${mi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw nr(r),new Error(r)}function Ue(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Pv(e,s,r)}function Te(t,e){return t}/**
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
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends ar{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Cv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Dt.UNAUTHENTICATED))}shutdown(){}}class rC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sC{constructor(e){this.t=e,this.currentUser=Dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ue(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Vr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ue(typeof r.accessToken=="string",31837,{l:r}),new Cv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new Dt(e)}}class iC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class oC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new iC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ym{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Qt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ue(this.o===void 0,3512);const r=i=>{i.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ie("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ym(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ue(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ym(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function lC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function xv(){return new TextEncoder}/**
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
 */class Yh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=lC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Pe(t,e){return t<e?-1:t>e?1:0}function Cu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Pe(r,s);{const i=xv(),o=cC(i.encode(vm(t,n)),i.encode(vm(e,n)));return o!==0?o:Pe(r,s)}}n+=r>65535?2:1}return Pe(t.length,e.length)}function vm(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function cC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Pe(t[n],e[n]);return Pe(t.length,e.length)}function ri(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Em="__name__";class bn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ve(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ve(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return bn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=bn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Pe(e.length,n.length)}static compareSegments(e,n){const r=bn.isNumericId(e),s=bn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?bn.extractNumericId(e).compare(bn.extractNumericId(n)):Cu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dr.fromString(e.substring(4,e.length-2))}}class Ge extends bn{construct(e,n,r){return new Ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ge(n)}static emptyPath(){return new Ge([])}}const uC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class St extends bn{construct(e,n,r){return new St(e,n,r)}static isValidIdentifier(e){return uC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),St.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Em}static keyField(){return new St([Em])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ne(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ne(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ne(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new St(n)}static emptyPath(){return new St([])}}/**
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
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(Ge.fromString(e))}static fromName(e){return new ge(Ge.fromString(e).popFirst(5))}static empty(){return new ge(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new Ge(e.slice()))}}/**
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
 */function kv(t,e,n){if(!n)throw new ne(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hC(t,e,n,r){if(e===!0&&r===!0)throw new ne(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wm(t){if(!ge.isDocumentKey(t))throw new ne(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bm(t){if(ge.isDocumentKey(t))throw new ne(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ov(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Bl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ve(12329,{type:typeof t})}function Pn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bl(t);throw new ne(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function ht(t,e){const n={typeString:t};return e&&(n.value=e),n}function qo(t,e){if(!Ov(t))throw new ne(z.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ne(z.INVALID_ARGUMENT,n);return!0}/**
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
 */const Tm=-62135596800,Im=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Im);return new Ye(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Tm)throw new ne(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Im}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(qo(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Tm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:ht("string",Ye._jsonSchemaVersion),seconds:ht("number"),nanoseconds:ht("number")};/**
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
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new Ye(0,0))}static max(){return new we(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const To=-1;function fC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=we.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new $r(s,ge.empty(),e)}function dC(t){return new $r(t.readTime,t.key,To)}class $r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new $r(we.min(),ge.empty(),To)}static max(){return new $r(we.max(),ge.empty(),To)}}function pC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ge.comparator(t.documentKey,e.documentKey),n!==0?n:Pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const mC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function gi(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==mC)throw t;ie("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new G((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof G?n:G.resolve(n)}catch(n){return G.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):G.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):G.reject(n)}static resolve(e){return new G((n,r)=>{n(e)})}static reject(e){return new G((n,r)=>{r(e)})}static waitFor(e){return new G((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=G.resolve(!1);for(const r of e)n=n.next(s=>s?G.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new G((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new G((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function _C(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _i(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Hl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Hl.ue=-1;/**
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
 */const Xh=-1;function ql(t){return t==null}function ll(t){return t===0&&1/t==-1/0}function yC(t){return typeof t=="number"&&Number.isInteger(t)&&!ll(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Nv="";function vC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Am(e)),e=EC(t.get(n),e);return Am(e)}function EC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Nv:n+="";break;default:n+=i}}return n}function Am(t){return t+Nv+""}/**
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
 */function Sm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Dv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class tt{constructor(e,n){this.comparator=e,this.root=n||It.EMPTY}insert(e,n){return new tt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,It.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,It.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ea(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ea(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ea(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ea(this.root,e,this.comparator,!0)}}class Ea{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class It{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??It.RED,this.left=s??It.EMPTY,this.right=i??It.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new It(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return It.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return It.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,It.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,It.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}It.EMPTY=null,It.RED=!0,It.BLACK=!1;It.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new It(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class dt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Rm(this.data.getIterator())}getIteratorFrom(e){return new Rm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class Rm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xt{constructor(e){this.fields=e,e.sort(St.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new dt(St.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ri(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Vv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Vv("Invalid base64 string: "+i):i}}(e);return new Rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const wC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jr(t){if(Ue(!!t,39018),typeof t=="string"){let e=0;const n=wC.exec(t);if(Ue(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:it(t.seconds),nanos:it(t.nanos)}}function it(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Br(t){return typeof t=="string"?Rt.fromBase64String(t):Rt.fromUint8Array(t)}/**
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
 */const Mv="server_timestamp",Lv="__type__",Fv="__previous_value__",Uv="__local_write_time__";function Jh(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Lv])===null||n===void 0?void 0:n.stringValue)===Mv}function zl(t){const e=t.mapValue.fields[Fv];return Jh(e)?zl(e):e}function Io(t){const e=jr(t.mapValue.fields[Uv].timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class bC{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const cl="(default)";class Ao{constructor(e,n){this.projectId=e,this.database=n||cl}static empty(){return new Ao("","")}get isDefaultDatabase(){return this.database===cl}isEqual(e){return e instanceof Ao&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const $v="__type__",TC="__max__",wa={mapValue:{}},jv="__vector__",ul="value";function Hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jh(t)?4:AC(t)?9007199254740991:IC(t)?10:11:ve(28295,{value:t})}function Dn(t,e){if(t===e)return!0;const n=Hr(t);if(n!==Hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Io(t).isEqual(Io(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=jr(s.timestampValue),l=jr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Br(s.bytesValue).isEqual(Br(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return it(s.geoPointValue.latitude)===it(i.geoPointValue.latitude)&&it(s.geoPointValue.longitude)===it(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return it(s.integerValue)===it(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=it(s.doubleValue),l=it(i.doubleValue);return o===l?ll(o)===ll(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ri(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Sm(o)!==Sm(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Dn(o[c],l[c])))return!1;return!0}(t,e);default:return ve(52216,{left:t})}}function So(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function si(t,e){if(t===e)return 0;const n=Hr(t),r=Hr(e);if(n!==r)return Pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=it(i.integerValue||i.doubleValue),c=it(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Pm(t.timestampValue,e.timestampValue);case 4:return Pm(Io(t),Io(e));case 5:return Cu(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Br(i),c=Br(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=Pe(l[u],c[u]);if(f!==0)return f}return Pe(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Pe(it(i.latitude),it(o.latitude));return l!==0?l:Pe(it(i.longitude),it(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Cm(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,f;const d=i.fields||{},m=o.fields||{},E=(l=d[ul])===null||l===void 0?void 0:l.arrayValue,C=(c=m[ul])===null||c===void 0?void 0:c.arrayValue,M=Pe(((u=E?.values)===null||u===void 0?void 0:u.length)||0,((f=C?.values)===null||f===void 0?void 0:f.length)||0);return M!==0?M:Cm(E,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===wa.mapValue&&o===wa.mapValue)return 0;if(i===wa.mapValue)return 1;if(o===wa.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let d=0;d<c.length&&d<f.length;++d){const m=Cu(c[d],f[d]);if(m!==0)return m;const E=si(l[c[d]],u[f[d]]);if(E!==0)return E}return Pe(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ve(23264,{le:n})}}function Pm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);const n=jr(t),r=jr(e),s=Pe(n.seconds,r.seconds);return s!==0?s:Pe(n.nanos,r.nanos)}function Cm(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=si(n[s],r[s]);if(i)return i}return Pe(n.length,r.length)}function ii(t){return xu(t)}function xu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=jr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Br(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ge.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=xu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${xu(n.fields[o])}`;return s+"}"}(t.mapValue):ve(61005,{value:t})}function Va(t){switch(Hr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zl(t);return e?16+Va(e):16;case 5:return 2*t.stringValue.length;case 6:return Br(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Va(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Qr(r.fields,(i,o)=>{s+=i.length+Va(o)}),s}(t.mapValue);default:throw ve(13486,{value:t})}}function xm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ku(t){return!!t&&"integerValue"in t}function Zh(t){return!!t&&"arrayValue"in t}function km(t){return!!t&&"nullValue"in t}function Om(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ma(t){return!!t&&"mapValue"in t}function IC(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[$v])===null||n===void 0?void 0:n.stringValue)===jv}function so(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=so(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=so(t.arrayValue.values[n]);return e}return Object.assign({},t)}function AC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===TC}/**
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
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ma(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=so(n)}setAll(e){let n=St.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=so(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ma(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ma(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Qr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Wt(so(this.value))}}function Bv(t){const e=[];return Qr(t.fields,(n,r)=>{const s=new St([n]);if(Ma(r)){const i=Bv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Xt(e)}/**
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
 */class Mt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Mt(e,0,we.min(),we.min(),we.min(),Wt.empty(),0)}static newFoundDocument(e,n,r,s){return new Mt(e,1,n,we.min(),r,s,0)}static newNoDocument(e,n){return new Mt(e,2,n,we.min(),we.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new Mt(e,3,n,we.min(),we.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hl{constructor(e,n){this.position=e,this.inclusive=n}}function Nm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ge.comparator(ge.fromName(o.referenceValue),n.key):r=si(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ro{constructor(e,n="asc"){this.field=e,this.dir=n}}function SC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Hv{}class ut extends Hv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new PC(e,n,r):n==="array-contains"?new kC(e,r):n==="in"?new OC(e,r):n==="not-in"?new NC(e,r):n==="array-contains-any"?new DC(e,r):new ut(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new CC(e,r):new xC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(si(n,this.value)):n!==null&&Hr(this.value)===Hr(n)&&this.matchesComparison(si(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _n extends Hv{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new _n(e,n)}matches(e){return qv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function qv(t){return t.op==="and"}function zv(t){return RC(t)&&qv(t)}function RC(t){for(const e of t.filters)if(e instanceof _n)return!1;return!0}function Ou(t){if(t instanceof ut)return t.field.canonicalString()+t.op.toString()+ii(t.value);if(zv(t))return t.filters.map(e=>Ou(e)).join(",");{const e=t.filters.map(n=>Ou(n)).join(",");return`${t.op}(${e})`}}function Wv(t,e){return t instanceof ut?function(r,s){return s instanceof ut&&r.op===s.op&&r.field.isEqual(s.field)&&Dn(r.value,s.value)}(t,e):t instanceof _n?function(r,s){return s instanceof _n&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Wv(o,s.filters[l]),!0):!1}(t,e):void ve(19439)}function Gv(t){return t instanceof ut?function(n){return`${n.field.canonicalString()} ${n.op} ${ii(n.value)}`}(t):t instanceof _n?function(n){return n.op.toString()+" {"+n.getFilters().map(Gv).join(" ,")+"}"}(t):"Filter"}class PC extends ut{constructor(e,n,r){super(e,n,r),this.key=ge.fromName(r.referenceValue)}matches(e){const n=ge.comparator(e.key,this.key);return this.matchesComparison(n)}}class CC extends ut{constructor(e,n){super(e,"in",n),this.keys=Kv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xC extends ut{constructor(e,n){super(e,"not-in",n),this.keys=Kv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Kv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ge.fromName(r.referenceValue))}class kC extends ut{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zh(n)&&So(n.arrayValue,this.value)}}class OC extends ut{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&So(this.value.arrayValue,n)}}class NC extends ut{constructor(e,n){super(e,"not-in",n)}matches(e){if(So(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!So(this.value.arrayValue,n)}}class DC extends ut{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>So(this.value.arrayValue,r))}}/**
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
 */class VC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function Vm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new VC(t,e,n,r,s,i,o)}function ef(t){const e=Te(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ou(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ql(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ii(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ii(r)).join(",")),e.Pe=n}return e.Pe}function tf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!SC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Wv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dm(t.startAt,e.startAt)&&Dm(t.endAt,e.endAt)}function Nu(t){return ge.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class yi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function MC(t,e,n,r,s,i,o,l){return new yi(t,e,n,r,s,i,o,l)}function Wl(t){return new yi(t)}function Mm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Qv(t){return t.collectionGroup!==null}function io(t){const e=Te(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new dt(St.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Ro(i,r))}),n.has(St.keyField().canonicalString())||e.Te.push(new Ro(St.keyField(),r))}return e.Te}function Cn(t){const e=Te(t);return e.Ie||(e.Ie=LC(e,io(t))),e.Ie}function LC(t,e){if(t.limitType==="F")return Vm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ro(s.field,i)});const n=t.endAt?new hl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new hl(t.startAt.position,t.startAt.inclusive):null;return Vm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Du(t,e){const n=t.filters.concat([e]);return new yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Vu(t,e,n){return new yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gl(t,e){return tf(Cn(t),Cn(e))&&t.limitType===e.limitType}function Yv(t){return`${ef(Cn(t))}|lt:${t.limitType}`}function Ls(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Gv(s)).join(", ")}]`),ql(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ii(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ii(s)).join(",")),`Target(${r})`}(Cn(t))}; limitType=${t.limitType})`}function Kl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ge.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of io(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=Nm(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,io(r),s)||r.endAt&&!function(o,l,c){const u=Nm(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,io(r),s))}(t,e)}function FC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xv(t){return(e,n)=>{let r=!1;for(const s of io(t)){const i=UC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function UC(t,e,n){const r=t.field.isKeyField()?ge.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?si(c,u):ve(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ve(19790,{direction:t.dir})}}/**
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
 */class As{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Qr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Dv(this.inner)}size(){return this.innerSize}}/**
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
 */const $C=new tt(ge.comparator);function rr(){return $C}const Jv=new tt(ge.comparator);function ji(...t){let e=Jv;for(const n of t)e=e.insert(n.key,n);return e}function Zv(t){let e=Jv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function cs(){return oo()}function eE(){return oo()}function oo(){return new As(t=>t.toString(),(t,e)=>t.isEqual(e))}const jC=new tt(ge.comparator),BC=new dt(ge.comparator);function ke(...t){let e=BC;for(const n of t)e=e.add(n);return e}const HC=new dt(Pe);function qC(){return HC}/**
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
 */function nf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ll(e)?"-0":e}}function tE(t){return{integerValue:""+t}}function zC(t,e){return yC(e)?tE(e):nf(t,e)}/**
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
 */class Ql{constructor(){this._=void 0}}function WC(t,e,n){return t instanceof fl?function(s,i){const o={fields:{[Lv]:{stringValue:Mv},[Uv]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Jh(i)&&(i=zl(i)),i&&(o.fields[Fv]=i),{mapValue:o}}(n,e):t instanceof Po?rE(t,e):t instanceof Co?sE(t,e):function(s,i){const o=nE(s,i),l=Lm(o)+Lm(s.Ee);return ku(o)&&ku(s.Ee)?tE(l):nf(s.serializer,l)}(t,e)}function GC(t,e,n){return t instanceof Po?rE(t,e):t instanceof Co?sE(t,e):n}function nE(t,e){return t instanceof dl?function(r){return ku(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class fl extends Ql{}class Po extends Ql{constructor(e){super(),this.elements=e}}function rE(t,e){const n=iE(e);for(const r of t.elements)n.some(s=>Dn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Co extends Ql{constructor(e){super(),this.elements=e}}function sE(t,e){let n=iE(e);for(const r of t.elements)n=n.filter(s=>!Dn(s,r));return{arrayValue:{values:n}}}class dl extends Ql{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Lm(t){return it(t.integerValue||t.doubleValue)}function iE(t){return Zh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function KC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Po&&s instanceof Po||r instanceof Co&&s instanceof Co?ri(r.elements,s.elements,Dn):r instanceof dl&&s instanceof dl?Dn(r.Ee,s.Ee):r instanceof fl&&s instanceof fl}(t.transform,e.transform)}class QC{constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function La(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yl{}function oE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rf(t.key,pn.none()):new zo(t.key,t.data,pn.none());{const n=t.data,r=Wt.empty();let s=new dt(St.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Yr(t.key,r,new Xt(s.toArray()),pn.none())}}function YC(t,e,n){t instanceof zo?function(s,i,o){const l=s.value.clone(),c=Um(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Yr?function(s,i,o){if(!La(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Um(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(aE(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ao(t,e,n,r){return t instanceof zo?function(i,o,l,c){if(!La(i.precondition,o))return l;const u=i.value.clone(),f=$m(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Yr?function(i,o,l,c){if(!La(i.precondition,o))return l;const u=$m(i.fieldTransforms,c,o),f=o.data;return f.setAll(aE(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,l){return La(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function XC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=nE(r.transform,s||null);i!=null&&(n===null&&(n=Wt.empty()),n.set(r.field,i))}return n||null}function Fm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ri(r,s,(i,o)=>KC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zo extends Yl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Yr extends Yl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function aE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Um(t,e,n){const r=new Map;Ue(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,GC(o,l,n[s]))}return r}function $m(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,WC(i,o,e))}return r}class rf extends Yl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JC extends Yl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ZC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&YC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ao(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ao(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=eE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=oE(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(we.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ke())}isEqual(e){return this.batchId===e.batchId&&ri(this.mutations,e.mutations,(n,r)=>Fm(n,r))&&ri(this.baseMutations,e.baseMutations,(n,r)=>Fm(n,r))}}class sf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ue(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return jC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new sf(e,n,r,s)}}/**
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
 */class e2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class t2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ct,De;function n2(t){switch(t){case z.OK:return ve(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return ve(15467,{code:t})}}function lE(t){if(t===void 0)return nr("GRPC error has no .code"),z.UNKNOWN;switch(t){case ct.OK:return z.OK;case ct.CANCELLED:return z.CANCELLED;case ct.UNKNOWN:return z.UNKNOWN;case ct.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case ct.INTERNAL:return z.INTERNAL;case ct.UNAVAILABLE:return z.UNAVAILABLE;case ct.UNAUTHENTICATED:return z.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case ct.NOT_FOUND:return z.NOT_FOUND;case ct.ALREADY_EXISTS:return z.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return z.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case ct.ABORTED:return z.ABORTED;case ct.OUT_OF_RANGE:return z.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return z.UNIMPLEMENTED;case ct.DATA_LOSS:return z.DATA_LOSS;default:return ve(39323,{code:t})}}(De=ct||(ct={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const r2=new Dr([4294967295,4294967295],0);function jm(t){const e=xv().encode(t),n=new bv;return n.update(e),new Uint8Array(n.digest())}function Bm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dr([n,r],0),new Dr([s,i],0)]}class of{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Bi(`Invalid padding: ${n}`);if(r<0)throw new Bi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Bi(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Dr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(Dr.fromNumber(r)));return s.compare(r2)===1&&(s=new Dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=jm(e),[r,s]=Bm(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new of(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=jm(e),[r,s]=Bm(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Bi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Wo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Xl(we.min(),s,new tt(Pe),rr(),ke())}}class Wo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Wo(r,n,ke(),ke(),ke())}}/**
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
 */class Fa{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class cE{constructor(e,n){this.targetId=e,this.De=n}}class uE{constructor(e,n,r=Rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Hm{constructor(){this.ve=0,this.Ce=qm(),this.Fe=Rt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ke(),n=ke(),r=ke();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ve(38017,{changeType:i})}}),new Wo(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=qm()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class s2{constructor(e){this.We=e,this.Ge=new Map,this.ze=rr(),this.je=ba(),this.Je=ba(),this.He=new tt(Pe)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:ve(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,s)=>{this.nt(s)&&n(s)})}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Nu(i))if(r===0){const o=new ge(i.path);this.Xe(n,o,Mt.newNoDocument(o,we.min()))}else Ue(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),c=l?this.ut(l,e,o):1;if(c!==0){this.rt(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Br(r).toUint8Array()}catch(c){if(c instanceof Vv)return Ur("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new of(o,s,i)}catch(c){return Ur(c instanceof Bi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)}),s}Pt(e){const n=new Map;this.Ge.forEach((i,o)=>{const l=this.st(o);if(l){if(i.current&&Nu(l.target)){const c=new ge(l.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,Mt.newNoDocument(c,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}});let r=ke();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.st(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ze.forEach((i,o)=>o.setReadTime(e));const s=new Xl(e,n,this.He,this.ze,r);return this.ze=rr(),this.je=ba(),this.Je=ba(),this.He=new tt(Pe),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Hm,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new dt(Pe),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new dt(Pe),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||ie("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Hm),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function ba(){return new tt(ge.comparator)}function qm(){return new tt(ge.comparator)}const i2={asc:"ASCENDING",desc:"DESCENDING"},o2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},a2={and:"AND",or:"OR"};class l2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mu(t,e){return t.useProto3Json||ql(e)?e:{value:e}}function pl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function c2(t,e){return pl(t,e.toTimestamp())}function xn(t){return Ue(!!t,49232),we.fromTimestamp(function(n){const r=jr(n);return new Ye(r.seconds,r.nanos)}(t))}function af(t,e){return Lu(t,e).canonicalString()}function Lu(t,e){const n=function(s){return new Ge(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function fE(t){const e=Ge.fromString(t);return Ue(_E(e),10190,{key:e.toString()}),e}function Fu(t,e){return af(t.databaseId,e.path)}function Kc(t,e){const n=fE(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ge(pE(n))}function dE(t,e){return af(t.databaseId,e)}function u2(t){const e=fE(t);return e.length===4?Ge.emptyPath():pE(e)}function Uu(t){return new Ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pE(t){return Ue(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function zm(t,e,n){return{name:Fu(t,e),fields:n.value.mapValue.fields}}function h2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ve(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Ue(f===void 0||typeof f=="string",58123),Rt.fromBase64String(f||"")):(Ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?z.UNKNOWN:lE(u.code);return new ne(f,u.message||"")}(o);n=new uE(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Kc(t,r.document.name),i=xn(r.document.updateTime),o=r.document.createTime?xn(r.document.createTime):we.min(),l=new Wt({mapValue:{fields:r.document.fields}}),c=Mt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Fa(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Kc(t,r.document),i=r.readTime?xn(r.readTime):we.min(),o=Mt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Fa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Kc(t,r.document),i=r.removedTargetIds||[];n=new Fa([],i,s,null)}else{if(!("filter"in e))return ve(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new t2(s,i),l=r.targetId;n=new cE(l,o)}}return n}function f2(t,e){let n;if(e instanceof zo)n={update:zm(t,e.key,e.value)};else if(e instanceof rf)n={delete:Fu(t,e.key)};else if(e instanceof Yr)n={update:zm(t,e.key,e.data),updateMask:w2(e.fieldMask)};else{if(!(e instanceof JC))return ve(16599,{Rt:e.type});n={verify:Fu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof fl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Po)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Co)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof dl)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw ve(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:c2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ve(27497)}(t,e.precondition)),n}function d2(t,e){return t&&t.length>0?(Ue(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?xn(s.updateTime):xn(i);return o.isEqual(we.min())&&(o=xn(i)),new QC(o,s.transformResults||[])}(n,e))):[]}function p2(t,e){return{documents:[dE(t,e.path)]}}function m2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=dE(t,s);const i=function(u){if(u.length!==0)return gE(_n.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:Fs(m.field),direction:y2(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Mu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{Vt:n,parent:s}}function g2(t){let e=u2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ue(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(d){const m=mE(d);return m instanceof _n&&zv(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(C){return new Ro(Us(C.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(d){let m;return m=typeof d=="object"?d.value:d,ql(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(d){const m=!!d.before,E=d.values||[];return new hl(E,m)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const m=!d.before,E=d.values||[];return new hl(E,m)}(n.endAt)),MC(e,s,o,i,l,"F",c,u)}function _2(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Us(n.unaryFilter.field);return ut.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Us(n.unaryFilter.field);return ut.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Us(n.unaryFilter.field);return ut.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Us(n.unaryFilter.field);return ut.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}}(t):t.fieldFilter!==void 0?function(n){return ut.create(Us(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return _n.create(n.compositeFilter.filters.map(r=>mE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ve(1026)}}(n.compositeFilter.op))}(t):ve(30097,{filter:t})}function y2(t){return i2[t]}function v2(t){return o2[t]}function E2(t){return a2[t]}function Fs(t){return{fieldPath:t.canonicalString()}}function Us(t){return St.fromServerFormat(t.fieldPath)}function gE(t){return t instanceof ut?function(n){if(n.op==="=="){if(Om(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NAN"}};if(km(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Om(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NOT_NAN"}};if(km(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fs(n.field),op:v2(n.op),value:n.value}}}(t):t instanceof _n?function(n){const r=n.getFilters().map(s=>gE(s));return r.length===1?r[0]:{compositeFilter:{op:E2(n.op),filters:r}}}(t):ve(54877,{filter:t})}function w2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _E(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Pr{constructor(e,n,r,s,i=we.min(),o=we.min(),l=Rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class b2{constructor(e){this.gt=e}}function T2(t){const e=g2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vu(e,e.limit,"L"):e}/**
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
 */class I2{constructor(){this.Dn=new A2}addToCollectionParentIndex(e,n){return this.Dn.add(n),G.resolve()}getCollectionParents(e,n){return G.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return G.resolve()}deleteFieldIndex(e,n){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,n){return G.resolve()}getDocumentsMatchingTarget(e,n){return G.resolve(null)}getIndexType(e,n){return G.resolve(0)}getFieldIndexes(e,n){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,n){return G.resolve($r.min())}getMinOffsetFromCollectionGroup(e,n){return G.resolve($r.min())}updateCollectionGroup(e,n,r){return G.resolve()}updateIndexEntries(e,n){return G.resolve()}}class A2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new dt(Ge.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new dt(Ge.comparator)).toArray()}}/**
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
 */const Wm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},yE=41943040;class zt{static withCacheSize(e){return new zt(e,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */zt.DEFAULT_COLLECTION_PERCENTILE=10,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,zt.DEFAULT=new zt(yE,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),zt.DISABLED=new zt(-1,0,0);/**
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
 */class oi{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new oi(0)}static ur(){return new oi(-1)}}/**
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
 */const Gm="LruGarbageCollector",S2=1048576;function Km([t,e],[n,r]){const s=Pe(t,n);return s===0?Pe(e,r):s}class R2{constructor(e){this.Tr=e,this.buffer=new dt(Km),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Km(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class P2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ie(Gm,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){_i(n)?ie(Gm,"Ignoring IndexedDB error during garbage collection: ",n):await gi(n)}await this.Rr(3e5)})}}class C2{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return G.resolve(Hl.ue);const r=new R2(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(Wm)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wm):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,l=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Ms()<=xe.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function x2(t,e){return new C2(t,e)}/**
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
 */class k2{constructor(){this.changes=new As(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?G.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class O2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class N2{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ao(r.mutation,s,Xt.empty(),Ye.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ke()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ke()){const s=cs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ji();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=cs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ke()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=rr();const o=oo(),l=function(){return oo()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Yr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),ao(f.mutation,u,f.mutation.getFieldMask(),Ye.now())):o.set(u.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var d;return l.set(u,new O2(f,(d=o.get(u))!==null&&d!==void 0?d:null))}),l))}recalculateAndSaveOverlays(e,n){const r=oo();let s=new tt((o,l)=>o-l),i=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||Xt.empty();f=l.applyToLocalView(u,f),r.set(c,f);const d=(s.get(l.batchId)||ke()).add(c);s=s.insert(l.batchId,d)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,d=eE();f.forEach(m=>{if(!i.has(m)){const E=oE(n.get(m),r.get(m));E!==null&&d.set(m,E),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return G.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ge.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Qv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):G.resolve(cs());let l=To,c=i;return o.next(u=>G.forEach(u,(f,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),i.get(f)?G.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ke())).next(f=>({batchId:l,changes:Zv(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ge(n)).next(r=>{let s=ji();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ji();return this.indexManager.getCollectionParents(e,i).next(l=>G.forEach(l,c=>{const u=function(d,m){return new yi(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Mt.newInvalidDocument(f)))});let l=ji();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&ao(f.mutation,u,Xt.empty(),Ye.now()),Kl(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class D2{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return G.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(s){return{id:s.id,version:s.version,createTime:xn(s.createTime)}}(n)),G.resolve()}getNamedQuery(e,n){return G.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(s){return{name:s.name,query:T2(s.bundledQuery),readTime:xn(s.readTime)}}(n)),G.resolve()}}/**
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
 */class V2{constructor(){this.overlays=new tt(ge.comparator),this.kr=new Map}getOverlay(e,n){return G.resolve(this.overlays.get(n))}getOverlays(e,n){const r=cs();return G.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.wt(e,n,i)}),G.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),G.resolve()}getOverlaysForCollection(e,n,r){const s=cs(),i=n.length+1,o=new ge(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return G.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new tt((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=cs(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=cs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return G.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new e2(n,r));let i=this.kr.get(n);i===void 0&&(i=ke(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class M2{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,G.resolve()}}/**
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
 */class lf{constructor(){this.qr=new dt(mt.Qr),this.$r=new dt(mt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new mt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new mt(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new ge(new Ge([])),r=new mt(n,e),s=new mt(n,e+1),i=[];return this.$r.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new ge(new Ge([])),r=new mt(n,e),s=new mt(n,e+1);let i=ke();return this.$r.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new mt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class mt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return ge.comparator(e.key,n.key)||Pe(e.Hr,n.Hr)}static Ur(e,n){return Pe(e.Hr,n.Hr)||ge.comparator(e.key,n.key)}}/**
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
 */class L2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new dt(mt.Qr)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ZC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new mt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return G.resolve(o)}lookupMutationBatch(e,n){return G.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return G.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?Xh:this.er-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new mt(n,0),s=new mt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),G.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new dt(Pe);return n.forEach(s=>{const i=new mt(s,0),o=new mt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),G.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ge.isDocumentKey(i)||(i=i.child(""));const o=new mt(new ge(i),0);let l=new dt(Pe);return this.Yr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)},o),G.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ue(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return G.forEach(n.mutations,s=>{const i=new mt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new mt(n,0),s=this.Yr.firstAfterOrEqual(r);return G.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class F2{constructor(e){this.ni=e,this.docs=function(){return new tt(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return G.resolve(r?r.document.mutableCopy():Mt.newInvalidDocument(n))}getEntries(e,n){let r=rr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Mt.newInvalidDocument(s))}),G.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=rr();const o=n.path,l=new ge(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||pC(dC(f),r)<=0||(s.has(f.key)||Kl(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return G.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ve(9500)}ri(e,n){return G.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new U2(this)}getSize(e){return G.resolve(this.size)}}class U2 extends k2{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),G.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class $2{constructor(e){this.persistence=e,this.ii=new As(n=>ef(n),tf),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.si=0,this.oi=new lf,this.targetCount=0,this._i=oi.ar()}forEachTarget(e,n){return this.ii.forEach((r,s)=>n(s)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),G.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new oi(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,G.resolve()}updateTargetData(e,n){return this.hr(n),G.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),G.waitFor(i).next(()=>s)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return G.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),G.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),G.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),G.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return G.resolve(r)}containsKey(e,n){return G.resolve(this.oi.containsKey(n))}}/**
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
 */class vE{constructor(e,n){this.ai={},this.overlays={},this.ui=new Hl(0),this.ci=!1,this.ci=!0,this.li=new M2,this.referenceDelegate=e(this),this.hi=new $2(this),this.indexManager=new I2,this.remoteDocumentCache=function(s){return new F2(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new b2(n),this.Ti=new D2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new V2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new L2(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){ie("MemoryPersistence","Starting transaction:",e);const s=new j2(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return G.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class j2 extends gC{constructor(e){super(),this.currentSequenceNumber=e}}class cf{constructor(e){this.persistence=e,this.Ai=new lf,this.Ri=null}static Vi(e){return new cf(e)}get mi(){if(this.Ri)return this.Ri;throw ve(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),G.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),G.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),G.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.mi,r=>{const s=ge.fromPath(r);return this.fi(e,s).next(i=>{i||n.removeEntry(s,we.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return G.or([()=>G.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class ml{constructor(e,n){this.persistence=e,this.gi=new As(r=>vC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=x2(this,n)}static Vi(e,n){return new ml(e,n)}Ii(){}di(e){return G.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return G.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?G.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,we.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),G.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),G.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),G.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Va(e.data.value)),n}Sr(e,n,r){return G.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return G.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class uf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=ke(),s=ke();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new uf(e,n.fromCache,r,s)}}/**
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
 */class B2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class H2{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return AI()?8:_C(Lt())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ys(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new B2;return this.ws(e,n,o).next(l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>i.result)}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(Ms()<=xe.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Ls(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),G.resolve()):(Ms()<=xe.DEBUG&&ie("QueryEngine","Query:",Ls(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ms()<=xe.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Ls(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Cn(n))):G.resolve())}ps(e,n){if(Mm(n))return G.resolve(null);let r=Cn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Vu(n,null,"F"),r=Cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ke(...i);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.bs(n,l);return this.Ds(n,u,o,c.readTime)?this.ps(e,Vu(n,null,"F")):this.vs(e,u,n,c)}))})))}ys(e,n,r,s){return Mm(n)||s.isEqual(we.min())?G.resolve(null):this.gs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?G.resolve(null):(Ms()<=xe.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ls(n)),this.vs(e,o,n,fC(s,To)).next(l=>l))})}bs(e,n){let r=new dt(Xv(e));return n.forEach((s,i)=>{Kl(e,i)&&(r=r.add(i))}),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return Ms()<=xe.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Ls(n)),this.gs.getDocumentsMatchingQuery(e,n,$r.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const hf="LocalStore",q2=3e8;class z2{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new tt(Pe),this.Ms=new As(i=>ef(i),tf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new N2(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function W2(t,e,n,r){return new z2(t,e,n,r)}async function EE(t,e){const n=Te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ke();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Bs:u,removedBatchIds:o,addedBatchIds:l}))})})}function G2(t,e){const n=Te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const d=u.batch,m=d.keys();let E=G.resolve();return m.forEach(C=>{E=E.next(()=>f.getEntry(c,C)).next(M=>{const U=u.docVersions.get(C);Ue(U!==null,48541),M.version.compareTo(U)<0&&(d.applyToRemoteDocument(M,u),M.isValidDocument()&&(M.setReadTime(u.commitVersion),f.addEntry(M)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(c,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ke();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function wE(t){const e=Te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function K2(t,e){const n=Te(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach((f,d)=>{const m=s.get(d);if(!m)return;l.push(n.hi.removeMatchingKeys(i,f.removedDocuments,d).next(()=>n.hi.addMatchingKeys(i,f.addedDocuments,d)));let E=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?E=E.withResumeToken(Rt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),s=s.insert(d,E),function(M,U,L){return M.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=q2?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(m,E,f)&&l.push(n.hi.updateTargetData(i,E))});let c=rr(),u=ke();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(Q2(i,o,e.documentUpdates).next(f=>{c=f.Ls,u=f.ks})),!r.isEqual(we.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next(d=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return G.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Fs=s,i))}function Q2(t,e,n){let r=ke(),s=ke();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=rr();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(we.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ie(hf,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ls:o,ks:s}})}function Y2(t,e){const n=Te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Xh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function X2(t,e){const n=Te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.hi.getTargetData(r,e).next(i=>i?(s=i,G.resolve(s)):n.hi.allocateTargetId(r).next(o=>(s=new Pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function $u(t,e,n){const r=Te(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!_i(o))throw o;ie(hf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Qm(t,e,n){const r=Te(t);let s=we.min(),i=ke();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const d=Te(c),m=d.Ms.get(f);return m!==void 0?G.resolve(d.Fs.get(m)):d.hi.getTargetData(u,f)}(r,o,Cn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:we.min(),n?i:ke())).next(l=>(J2(r,FC(e),l),{documents:l,qs:i})))}function J2(t,e,n){let r=t.xs.get(e)||we.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.xs.set(e,r)}class Ym{constructor(){this.activeTargetIds=qC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Z2{constructor(){this.Fo=new Ym,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Ym,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ex{xo(e){}shutdown(){}}/**
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
 */const Xm="ConnectivityMonitor";class Jm{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ie(Xm,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ie(Xm,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ta=null;function ju(){return Ta===null?Ta=function(){return 268435456+Math.round(2147483648*Math.random())}():Ta++,"0x"+Ta.toString(16)}/**
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
 */const Qc="RestConnection",tx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class nx{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===cl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=ju(),l=this.Go(e,n.toUriEncodedString());ie(Qc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:u}=new URL(l),f=hi(u);return this.jo(e,l,c,r,f).then(d=>(ie(Qc,`Received RPC '${e}' ${o}: `,d),d),d=>{throw Ur(Qc,`RPC '${e}' ${o} failed with error: `,d,"url: ",l,"request:",r),d})}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,n){const r=tx[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class rx{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Ot="WebChannelConnection";class sx extends nx{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=ju();return new Promise((l,c)=>{const u=new Tv;u.setWithCredentials(!0),u.listenOnce(Iv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Da.NO_ERROR:const d=u.getResponseJson();ie(Ot,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),l(d);break;case Da.TIMEOUT:ie(Ot,`RPC '${e}' ${o} timed out`),c(new ne(z.DEADLINE_EXCEEDED,"Request time out"));break;case Da.HTTP_ERROR:const m=u.getStatus();if(ie(Ot,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let E=u.getResponseJson();Array.isArray(E)&&(E=E[0]);const C=E?.error;if(C&&C.status&&C.message){const M=function(L){const D=L.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(D)>=0?D:z.UNKNOWN}(C.status);c(new ne(M,C.message))}else c(new ne(z.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ne(z.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{ie(Ot,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);ie(Ot,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}P_(e,n,r){const s=ju(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Rv(),l=Sv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");ie(Ot,`Creating RPC '${e}' stream ${s}: ${f}`,c);const d=o.createWebChannel(f,c);this.T_(d);let m=!1,E=!1;const C=new rx({Ho:U=>{E?ie(Ot,`Not sending because RPC '${e}' stream ${s} is closed:`,U):(m||(ie(Ot,`Opening RPC '${e}' stream ${s} transport.`),d.open(),m=!0),ie(Ot,`RPC '${e}' stream ${s} sending:`,U),d.send(U))},Yo:()=>d.close()}),M=(U,L,D)=>{U.listen(L,B=>{try{D(B)}catch($){setTimeout(()=>{throw $},0)}})};return M(d,$i.EventType.OPEN,()=>{E||(ie(Ot,`RPC '${e}' stream ${s} transport opened.`),C.s_())}),M(d,$i.EventType.CLOSE,()=>{E||(E=!0,ie(Ot,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(d))}),M(d,$i.EventType.ERROR,U=>{E||(E=!0,Ur(Ot,`RPC '${e}' stream ${s} transport errored. Name:`,U.name,"Message:",U.message),C.__(new ne(z.UNAVAILABLE,"The operation could not be completed")))}),M(d,$i.EventType.MESSAGE,U=>{var L;if(!E){const D=U.data[0];Ue(!!D,16349);const B=D,$=B?.error||((L=B[0])===null||L===void 0?void 0:L.error);if($){ie(Ot,`RPC '${e}' stream ${s} received error:`,$);const Z=$.status;let re=function(w){const I=ct[w];if(I!==void 0)return lE(I)}(Z),P=$.message;re===void 0&&(re=z.INTERNAL,P="Unknown error status: "+Z+" with message "+$.message),E=!0,C.__(new ne(re,P)),d.close()}else ie(Ot,`RPC '${e}' stream ${s} received:`,D),C.a_(D)}}),M(l,Av.STAT_EVENT,U=>{U.stat===Pu.PROXY?ie(Ot,`RPC '${e}' stream ${s} detected buffering proxy`):U.stat===Pu.NOPROXY&&ie(Ot,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.o_()},0),C}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function Yc(){return typeof document<"u"?document:null}/**
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
 */function Jl(t){return new l2(t,!0)}/**
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
 */class bE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&ie("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Zm="PersistentStream";class TE{constructor(e,n,r,s,i,o,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new bE(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(nr(n.toString()),nr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===n&&this.W_(r,s)},r=>{e(()=>{const s=new ne(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return ie(Zm,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(ie(Zm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ix extends TE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=h2(this.serializer,e),r=function(i){if(!("targetChange"in i))return we.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?we.min():o.readTime?xn(o.readTime):we.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Uu(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Nu(c)?{documents:p2(i,c)}:{query:m2(i,c).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=hE(i,o.resumeToken);const u=Mu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(we.min())>0){l.readTime=pl(i,o.snapshotVersion.toTimestamp());const u=Mu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=_2(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Uu(this.serializer),n.removeTarget=e,this.k_(n)}}class ox extends TE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=d2(e.writeResults,e.commitTime),r=xn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Uu(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>f2(this.serializer,r))};this.k_(n)}}/**
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
 */class ax{}class lx extends ax{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new ne(z.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Lu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(z.UNKNOWN,i.toString())})}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,Lu(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(z.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class cx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(nr(n),this._a=!1):ie("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Es="RemoteStore";class ux{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{Ss(this)&&(ie(Es,"Restarting streams for network reachability change."),await async function(c){const u=Te(c);u.Ia.add(4),await Go(u),u.Aa.set("Unknown"),u.Ia.delete(4),await Zl(u)}(this))})}),this.Aa=new cx(r,s)}}async function Zl(t){if(Ss(t))for(const e of t.da)await e(!0)}async function Go(t){for(const e of t.da)await e(!1)}function IE(t,e){const n=Te(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),mf(n)?pf(n):vi(n).x_()&&df(n,e))}function ff(t,e){const n=Te(t),r=vi(n);n.Ta.delete(e),r.x_()&&AE(n,e),n.Ta.size===0&&(r.x_()?r.B_():Ss(n)&&n.Aa.set("Unknown"))}function df(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vi(t).H_(e)}function AE(t,e){t.Ra.$e(e),vi(t).Y_(e)}function pf(t){t.Ra=new s2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),vi(t).start(),t.Aa.aa()}function mf(t){return Ss(t)&&!vi(t).M_()&&t.Ta.size>0}function Ss(t){return Te(t).Ia.size===0}function SE(t){t.Ra=void 0}async function hx(t){t.Aa.set("Online")}async function fx(t){t.Ta.forEach((e,n)=>{df(t,e)})}async function dx(t,e){SE(t),mf(t)?(t.Aa.la(e),pf(t)):t.Aa.set("Unknown")}async function px(t,e,n){if(t.Aa.set("Online"),e instanceof uE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))}(t,e)}catch(r){ie(Es,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gl(t,r)}else if(e instanceof Fa?t.Ra.Ye(e):e instanceof cE?t.Ra.it(e):t.Ra.et(e),!n.isEqual(we.min()))try{const r=await wE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ta.get(u);f&&i.Ta.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=i.Ta.get(c);if(!f)return;i.Ta.set(c,f.withResumeToken(Rt.EMPTY_BYTE_STRING,f.snapshotVersion)),AE(i,c);const d=new Pr(f.target,c,u,f.sequenceNumber);df(i,d)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ie(Es,"Failed to raise snapshot:",r),await gl(t,r)}}async function gl(t,e,n){if(!_i(e))throw e;t.Ia.add(1),await Go(t),t.Aa.set("Offline"),n||(n=()=>wE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ie(Es,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Zl(t)})}function RE(t,e){return e().catch(n=>gl(t,n,e))}async function ec(t){const e=Te(t),n=qr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Xh;for(;mx(e);)try{const s=await Y2(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,gx(e,s)}catch(s){await gl(e,s)}PE(e)&&CE(e)}function mx(t){return Ss(t)&&t.Pa.length<10}function gx(t,e){t.Pa.push(e);const n=qr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function PE(t){return Ss(t)&&!qr(t).M_()&&t.Pa.length>0}function CE(t){qr(t).start()}async function _x(t){qr(t).na()}async function yx(t){const e=qr(t);for(const n of t.Pa)e.X_(n.mutations)}async function vx(t,e,n){const r=t.Pa.shift(),s=sf.from(r,e,n);await RE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ec(t)}async function Ex(t,e){e&&qr(t).Z_&&await async function(r,s){if(function(o){return n2(o)&&o!==z.ABORTED}(s.code)){const i=r.Pa.shift();qr(r).N_(),await RE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ec(r)}}(t,e),PE(t)&&CE(t)}async function eg(t,e){const n=Te(t);n.asyncQueue.verifyOperationInProgress(),ie(Es,"RemoteStore received new credentials");const r=Ss(n);n.Ia.add(3),await Go(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Zl(n)}async function wx(t,e){const n=Te(t);e?(n.Ia.delete(2),await Zl(n)):e||(n.Ia.add(2),await Go(n),n.Aa.set("Unknown"))}function vi(t){return t.Va||(t.Va=function(n,r,s){const i=Te(n);return i.ia(),new ix(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:hx.bind(null,t),e_:fx.bind(null,t),n_:dx.bind(null,t),J_:px.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),mf(t)?pf(t):t.Aa.set("Unknown")):(await t.Va.stop(),SE(t))})),t.Va}function qr(t){return t.ma||(t.ma=function(n,r,s){const i=Te(n);return i.ia(),new ox(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:_x.bind(null,t),n_:Ex.bind(null,t),ea:yx.bind(null,t),ta:vx.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await ec(t)):(await t.ma.stop(),t.Pa.length>0&&(ie(Es,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
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
 */class gf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new gf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _f(t,e){if(nr("AsyncQueue",`${e}: ${t}`),_i(t))return new ne(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ks{static emptySet(e){return new Ks(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ge.comparator(n.key,r.key):(n,r)=>ge.comparator(n.key,r.key),this.keyedMap=ji(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ks)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ks;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class tg{constructor(){this.fa=new tt(ge.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ve(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class ai{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ai(e,n,Ks.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class bx{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class Tx{constructor(){this.queries=ng(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=Te(n),i=s.queries;s.queries=ng(),i.forEach((o,l)=>{for(const c of l.wa)c.onError(r)})})(this,new ne(z.ABORTED,"Firestore shutting down"))}}function ng(){return new As(t=>Yv(t),Gl)}async function xE(t,e){const n=Te(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new bx,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=_f(o,`Initialization of query '${Ls(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&yf(n)}async function kE(t,e){const n=Te(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ix(t,e){const n=Te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&yf(n)}function Ax(t,e,n){const r=Te(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function yf(t){t.Da.forEach(e=>{e.next()})}var Bu,rg;(rg=Bu||(Bu={})).Fa="default",rg.Cache="cache";class OE{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ai(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=ai.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Bu.Cache}}/**
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
 */class NE{constructor(e){this.key=e}}class DE{constructor(e){this.key=e}}class Sx{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ke(),this.mutatedKeys=ke(),this.Xa=Xv(e),this.eu=new Ks(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new tg,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,d)=>{const m=s.get(f),E=Kl(this.query,d)?d:null,C=!!m&&this.mutatedKeys.has(m.key),M=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let U=!1;m&&E?m.data.isEqual(E.data)?C!==M&&(r.track({type:3,doc:E}),U=!0):this.iu(m,E)||(r.track({type:2,doc:E}),U=!0,(c&&this.Xa(E,c)>0||u&&this.Xa(E,u)<0)&&(l=!0)):!m&&E?(r.track({type:0,doc:E}),U=!0):m&&!E&&(r.track({type:1,doc:m}),U=!0,(c||u)&&(l=!0)),U&&(E?(o=o.add(E),i=M?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((f,d)=>function(E,C){const M=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{At:U})}};return M(E)-M(C)}(f.type,d.type)||this.Xa(f.doc,d.doc)),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,u=c!==this.Ya;return this.Ya=c,o.length!==0||u?{snapshot:new ai(this.query,e.eu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new tg,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ke(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new DE(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new NE(r))}),n}uu(e){this.Ha=e.qs,this.Za=ke();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return ai.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const vf="SyncEngine";class Rx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Px{constructor(e){this.key=e,this.lu=!1}}class Cx{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new As(l=>Yv(l),Gl),this.Tu=new Map,this.Iu=new Set,this.du=new tt(ge.comparator),this.Eu=new Map,this.Au=new lf,this.Ru={},this.Vu=new Map,this.mu=oi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function xx(t,e,n=!0){const r=$E(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await VE(r,e,n,!0),s}async function kx(t,e){const n=$E(t);await VE(n,e,!0,!1)}async function VE(t,e,n,r){const s=await X2(t.localStore,Cn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Ox(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&IE(t.remoteStore,s),l}async function Ox(t,e,n,r,s){t.gu=(d,m,E)=>async function(M,U,L,D){let B=U.view.nu(L);B.Ds&&(B=await Qm(M.localStore,U.query,!1).then(({documents:P})=>U.view.nu(P,B)));const $=D&&D.targetChanges.get(U.targetId),Z=D&&D.targetMismatches.get(U.targetId)!=null,re=U.view.applyChanges(B,M.isPrimaryClient,$,Z);return ig(M,U.targetId,re._u),re.snapshot}(t,d,m,E);const i=await Qm(t.localStore,e,!0),o=new Sx(e,i.qs),l=o.nu(i.documents),c=Wo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);ig(t,n,u._u);const f=new Rx(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function Nx(t,e,n){const r=Te(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(o=>!Gl(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await $u(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ff(r.remoteStore,s.targetId),Hu(r,s.targetId)}).catch(gi)):(Hu(r,s.targetId),await $u(r.localStore,s.targetId,!0))}async function Dx(t,e){const n=Te(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ff(n.remoteStore,r.targetId))}async function Vx(t,e,n){const r=Bx(t);try{const s=await function(o,l){const c=Te(o),u=Ye.now(),f=l.reduce((E,C)=>E.add(C.key),ke());let d,m;return c.persistence.runTransaction("Locally write mutations","readwrite",E=>{let C=rr(),M=ke();return c.Os.getEntries(E,f).next(U=>{C=U,C.forEach((L,D)=>{D.isValidDocument()||(M=M.add(L))})}).next(()=>c.localDocuments.getOverlayedDocuments(E,C)).next(U=>{d=U;const L=[];for(const D of l){const B=XC(D,d.get(D.key).overlayedDocument);B!=null&&L.push(new Yr(D.key,B,Bv(B.value.mapValue),pn.exists(!0)))}return c.mutationQueue.addMutationBatch(E,u,L,l)}).next(U=>{m=U;const L=U.applyToLocalDocumentSet(d,M);return c.documentOverlayCache.saveOverlays(E,U.batchId,L)})}).then(()=>({batchId:m.batchId,changes:Zv(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Ru[o.currentUser.toKey()];u||(u=new tt(Pe)),u=u.insert(l,c),o.Ru[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ko(r,s.changes),await ec(r.remoteStore)}catch(s){const i=_f(s,"Failed to persist write");n.reject(i)}}async function ME(t,e){const n=Te(t);try{const r=await K2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(Ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?Ue(o.lu,14607):s.removedDocuments.size>0&&(Ue(o.lu,42227),o.lu=!1))}),await Ko(n,r,e)}catch(r){await gi(r)}}function sg(t,e,n){const r=Te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=Te(o);c.onlineState=l;let u=!1;c.queries.forEach((f,d)=>{for(const m of d.wa)m.va(l)&&(u=!0)}),u&&yf(c)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Mx(t,e,n){const r=Te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new tt(ge.comparator);o=o.insert(i,Mt.newNoDocument(i,we.min()));const l=ke().add(i),c=new Xl(we.min(),new Map,new tt(Pe),o,l);await ME(r,c),r.du=r.du.remove(i),r.Eu.delete(e),Ef(r)}else await $u(r.localStore,e,!1).then(()=>Hu(r,e,n)).catch(gi)}async function Lx(t,e){const n=Te(t),r=e.batch.batchId;try{const s=await G2(n.localStore,e);FE(n,r,null),LE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ko(n,s)}catch(s){await gi(s)}}async function Fx(t,e,n){const r=Te(t);try{const s=await function(o,l){const c=Te(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(d=>(Ue(d!==null,37113),f=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);FE(r,e,n),LE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ko(r,s)}catch(s){await gi(s)}}function LE(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function FE(t,e,n){const r=Te(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Hu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||UE(t,r)})}function UE(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(ff(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Ef(t))}function ig(t,e,n){for(const r of n)r instanceof NE?(t.Au.addReference(r.key,e),Ux(t,r)):r instanceof DE?(ie(vf,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||UE(t,r.key)):ve(19791,{yu:r})}function Ux(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(ie(vf,"New document in limbo: "+n),t.Iu.add(r),Ef(t))}function Ef(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new ge(Ge.fromString(e)),r=t.mu.next();t.Eu.set(r,new Px(n)),t.du=t.du.insert(n,r),IE(t.remoteStore,new Pr(Cn(Wl(n.path)),r,"TargetPurposeLimboResolution",Hl.ue))}}async function Ko(t,e,n){const r=Te(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,c)=>{o.push(r.gu(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(f=n?.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){s.push(u);const d=uf.Es(c.targetId,u);i.push(d)}}))}),await Promise.all(o),r.hu.J_(s),await async function(c,u){const f=Te(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>G.forEach(u,m=>G.forEach(m.Is,E=>f.persistence.referenceDelegate.addReference(d,m.targetId,E)).next(()=>G.forEach(m.ds,E=>f.persistence.referenceDelegate.removeReference(d,m.targetId,E)))))}catch(d){if(!_i(d))throw d;ie(hf,"Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const E=f.Fs.get(m),C=E.snapshotVersion,M=E.withLastLimboFreeSnapshotVersion(C);f.Fs=f.Fs.insert(m,M)}}}(r.localStore,i))}async function $x(t,e){const n=Te(t);if(!n.currentUser.isEqual(e)){ie(vf,"User change. New user:",e.toKey());const r=await EE(n.localStore,e);n.currentUser=e,function(i,o){i.Vu.forEach(l=>{l.forEach(c=>{c.reject(new ne(z.CANCELLED,o))})}),i.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ko(n,r.Bs)}}function jx(t,e){const n=Te(t),r=n.Eu.get(e);if(r&&r.lu)return ke().add(r.key);{let s=ke();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function $E(t){const e=Te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ME.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Mx.bind(null,e),e.hu.J_=Ix.bind(null,e.eventManager),e.hu.pu=Ax.bind(null,e.eventManager),e}function Bx(t){const e=Te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Lx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Fx.bind(null,e),e}class _l{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Jl(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return W2(this.persistence,new H2,e.initialUser,this.serializer)}Du(e){return new vE(cf.Vi,this.serializer)}bu(e){return new Z2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_l.provider={build:()=>new _l};class Hx extends _l{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Ue(this.persistence.referenceDelegate instanceof ml,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new P2(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?zt.withCacheSize(this.cacheSizeBytes):zt.DEFAULT;return new vE(r=>ml.Vi(r,n),this.serializer)}}class qu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$x.bind(null,this.syncEngine),await wx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Tx}()}createDatastore(e){const n=Jl(e.databaseInfo.databaseId),r=function(i){return new sx(i)}(e.databaseInfo);return function(i,o,l,c){return new lx(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new ux(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>sg(this.syncEngine,n,0),function(){return Jm.C()?new Jm:new ex}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,f){const d=new Cx(s,i,o,l,c,u);return f&&(d.fu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Te(s);ie(Es,"RemoteStore shutting down."),i.Ia.add(5),await Go(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}qu.provider={build:()=>new qu};/**
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
 */class jE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):nr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const zr="FirestoreClient";class qx{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Dt.UNAUTHENTICATED,this.clientId=Yh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ie(zr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ie(zr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=_f(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xc(t,e){t.asyncQueue.verifyOperationInProgress(),ie(zr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await EE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{Ur("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{ie("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{Ur("Terminating Firestore due to IndexedDb database deletion failed",s)})}),t._offlineComponents=e}async function og(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zx(t);ie(zr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>eg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>eg(e.remoteStore,s)),t._onlineComponents=e}async function zx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ie(zr,"Using user provided OfflineComponentProvider");try{await Xc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===z.FAILED_PRECONDITION||s.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ur("Error using user provided cache. Falling back to memory cache: "+n),await Xc(t,new _l)}}else ie(zr,"Using default OfflineComponentProvider"),await Xc(t,new Hx(void 0));return t._offlineComponents}async function BE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ie(zr,"Using user provided OnlineComponentProvider"),await og(t,t._uninitializedComponentsProvider._online)):(ie(zr,"Using default OnlineComponentProvider"),await og(t,new qu))),t._onlineComponents}function Wx(t){return BE(t).then(e=>e.syncEngine)}async function zu(t){const e=await BE(t),n=e.eventManager;return n.onListen=xx.bind(null,e.syncEngine),n.onUnlisten=Nx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=kx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Dx.bind(null,e.syncEngine),n}function Gx(t,e,n={}){const r=new Vr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new jE({next:m=>{f.Ou(),o.enqueueAndForget(()=>kE(i,d));const E=m.docs.has(l);!E&&m.fromCache?u.reject(new ne(z.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&c&&c.source==="server"?u.reject(new ne(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new OE(Wl(l.path),f,{includeMetadataChanges:!0,ka:!0});return xE(i,d)}(await zu(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function HE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const ag=new Map;/**
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
 */const qE="firestore.googleapis.com",lg=!0;class cg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qE,this.ssl=lg}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:lg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=yE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<S2)throw new ne(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=HE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class tc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nC;switch(r.type){case"firstParty":return new oC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ag.get(n);r&&(ie("ComponentProvider","Removing Datastore"),ag.delete(n),r.terminate())}(this),Promise.resolve()}}function Kx(t,e,n,r={}){var s;t=Pn(t,tc);const i=hi(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(Vy(`https://${c}`),My("Firestore",!0)),o.host!==qE&&o.host!==c&&Ur("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!ms(u,l)&&(t._setSettings(u),r.mockUserToken)){let f,d;if(typeof r.mockUserToken=="string")f=r.mockUserToken,d=Dt.MOCK_USER;else{f=gI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new ne(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Dt(m)}t._authCredentials=new rC(new Cv(f,d))}}/**
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
 */class Rs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rs(this.firestore,e,this._query)}}class ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(qo(n,ot._jsonSchema))return new ot(e,r||null,new ge(Ge.fromString(n.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:ht("string",ot._jsonSchemaVersion),referencePath:ht("string")};class Mr extends Rs{constructor(e,n,r){super(e,n,Wl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new ge(e))}withConverter(e){return new Mr(this.firestore,e,this._path)}}function Ua(t,e,...n){if(t=lt(t),kv("collection","path",e),t instanceof tc){const r=Ge.fromString(e,...n);return bm(r),new Mr(t,null,r)}{if(!(t instanceof ot||t instanceof Mr))throw new ne(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return bm(r),new Mr(t.firestore,null,r)}}function $s(t,e,...n){if(t=lt(t),arguments.length===1&&(e=Yh.newId()),kv("doc","path",e),t instanceof tc){const r=Ge.fromString(e,...n);return wm(r),new ot(t,null,new ge(r))}{if(!(t instanceof ot||t instanceof Mr))throw new ne(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return wm(r),new ot(t.firestore,t instanceof Mr?t.converter:null,new ge(r))}}/**
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
 */const ug="AsyncQueue";class hg{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new bE(this,"async_queue_retry"),this.oc=()=>{const r=Yc();r&&ie(ug,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Yc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Yc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Vr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!_i(e))throw e;ie(ug,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,nr("INTERNAL UNHANDLED ERROR: ",fg(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=gf.createAndSchedule(this,e,n,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&ve(47125,{hc:fg(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function fg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
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
 */function dg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ws extends tc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new hg,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hg(e),this._firestoreClient=void 0,await e}}}function Qx(t,e){const n=typeof t=="object"?t:$y(),r=typeof t=="string"?t:cl,s=Mh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=pI("firestore");i&&Kx(s,...i)}return s}function wf(t){if(t._terminated)throw new ne(z.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Yx(t),t._firestoreClient}function Yx(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,f){return new bC(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,HE(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new qx(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sn(Rt.fromBase64String(e))}catch(n){throw new ne(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new sn(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:sn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(qo(e,sn._jsonSchema))return sn.fromBase64String(e.bytes)}}sn._jsonSchemaVersion="firestore/bytes/1.0",sn._jsonSchema={type:ht("string",sn._jsonSchemaVersion),bytes:ht("string")};/**
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
 */class nc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new St(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class bf{constructor(e){this._methodName=e}}/**
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
 */class kn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:kn._jsonSchemaVersion}}static fromJSON(e){if(qo(e,kn._jsonSchema))return new kn(e.latitude,e.longitude)}}kn._jsonSchemaVersion="firestore/geoPoint/1.0",kn._jsonSchema={type:ht("string",kn._jsonSchemaVersion),latitude:ht("number"),longitude:ht("number")};/**
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
 */class On{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:On._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(qo(e,On._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new On(e.vectorValues);throw new ne(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}On._jsonSchemaVersion="firestore/vectorValue/1.0",On._jsonSchema={type:ht("string",On._jsonSchemaVersion),vectorValues:ht("object")};/**
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
 */const Xx=/^__.*__$/;class Jx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Yr(e,this.data,this.fieldMask,n,this.fieldTransforms):new zo(e,this.data,n,this.fieldTransforms)}}class zE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Yr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function WE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ec:t})}}class Tf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Tf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return yl(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(WE(this.Ec)&&Xx.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Zx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Jl(e)}Dc(e,n,r,s=!1){return new Tf({Ec:e,methodName:n,bc:r,path:St.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function If(t){const e=t._freezeSettings(),n=Jl(t._databaseId);return new Zx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ek(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);Af("Data must be an object, but it was:",o,r);const l=GE(r,o);let c,u;if(i.merge)c=new Xt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const d of i.mergeFields){const m=Wu(e,d,n);if(!o.contains(m))throw new ne(z.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);QE(f,m)||f.push(m)}c=new Xt(f),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new Jx(new Wt(l),c,u)}class rc extends bf{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof rc}}function tk(t,e,n,r){const s=t.Dc(1,e,n);Af("Data must be an object, but it was:",s,r);const i=[],o=Wt.empty();Qr(r,(c,u)=>{const f=Sf(e,c,n);u=lt(u);const d=s.gc(f);if(u instanceof rc)i.push(f);else{const m=Qo(u,d);m!=null&&(i.push(f),o.set(f,m))}});const l=new Xt(i);return new zE(o,l,s.fieldTransforms)}function nk(t,e,n,r,s,i){const o=t.Dc(1,e,n),l=[Wu(e,r,n)],c=[s];if(i.length%2!=0)throw new ne(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Wu(e,i[m])),c.push(i[m+1]);const u=[],f=Wt.empty();for(let m=l.length-1;m>=0;--m)if(!QE(u,l[m])){const E=l[m];let C=c[m];C=lt(C);const M=o.gc(E);if(C instanceof rc)u.push(E);else{const U=Qo(C,M);U!=null&&(u.push(E),f.set(E,U))}}const d=new Xt(u);return new zE(f,d,o.fieldTransforms)}function rk(t,e,n,r=!1){return Qo(n,t.Dc(r?4:3,e))}function Qo(t,e){if(KE(t=lt(t)))return Af("Unsupported field value:",e,t),GE(t,e);if(t instanceof bf)return function(r,s){if(!WE(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Qo(l,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=lt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ye.fromDate(r);return{timestampValue:pl(s.serializer,i)}}if(r instanceof Ye){const i=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pl(s.serializer,i)}}if(r instanceof kn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof sn)return{bytesValue:hE(s.serializer,r._byteString)};if(r instanceof ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:af(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof On)return function(o,l){return{mapValue:{fields:{[$v]:{stringValue:jv},[ul]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.wc("VectorValues must only contain numeric values.");return nf(l.serializer,u)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${Bl(r)}`)}(t,e)}function GE(t,e){const n={};return Dv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qr(t,(r,s)=>{const i=Qo(s,e.Vc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function KE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof kn||t instanceof sn||t instanceof ot||t instanceof bf||t instanceof On)}function Af(t,e,n){if(!KE(n)||!Ov(n)){const r=Bl(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function Wu(t,e,n){if((e=lt(e))instanceof nc)return e._internalPath;if(typeof e=="string")return Sf(t,e);throw yl("Field path arguments must be of type string or ",t,!1,void 0,n)}const sk=new RegExp("[~\\*/\\[\\]]");function Sf(t,e,n){if(e.search(sk)>=0)throw yl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nc(...e.split("."))._internalPath}catch{throw yl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ne(z.INVALID_ARGUMENT,l+t+c)}function QE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class YE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ik(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ik extends YE{data(){return super.data()}}function sc(t,e){return typeof e=="string"?Sf(t,e):e instanceof nc?e._internalPath:e._delegate._internalPath}/**
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
 */function ok(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rf{}class XE extends Rf{}function pg(t,e,...n){let r=[];e instanceof Rf&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Pf).length,l=i.filter(c=>c instanceof ic).length;if(o>1||o>0&&l>0)throw new ne(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ic extends XE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ic(e,n,r)}_apply(e){const n=this._parse(e);return JE(e._query,n),new Rs(e.firestore,e.converter,Du(e._query,n))}_parse(e){const n=If(e.firestore);return function(i,o,l,c,u,f,d){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new ne(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){_g(d,f);const C=[];for(const M of d)C.push(gg(c,i,M));m={arrayValue:{values:C}}}else m=gg(c,i,d)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||_g(d,f),m=rk(l,o,d,f==="in"||f==="not-in");return ut.create(u,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ak(t,e,n){const r=e,s=sc("where",t);return ic._create(s,r,n)}class Pf extends Rf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Pf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:_n.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)JE(o,c),o=Du(o,c)}(e._query,n),new Rs(e.firestore,e.converter,Du(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cf extends XE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Cf(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new ne(z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ne(z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ro(i,o)}(e._query,this._field,this._direction);return new Rs(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new yi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function mg(t,e="asc"){const n=e,r=sc("orderBy",t);return Cf._create(r,n)}function gg(t,e,n){if(typeof(n=lt(n))=="string"){if(n==="")throw new ne(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qv(e)&&n.indexOf("/")!==-1)throw new ne(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ge.fromString(n));if(!ge.isDocumentKey(r))throw new ne(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xm(t,new ge(r))}if(n instanceof ot)return xm(t,n._key);throw new ne(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bl(n)}.`)}function _g(t,e){if(!Array.isArray(t)||t.length===0)throw new ne(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function JE(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ne(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class lk{convertValue(e,n="none"){switch(Hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Qr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[ul].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>it(o.doubleValue));return new On(i)}convertGeoPoint(e){return new kn(it(e.latitude),it(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Io(e));default:return null}}convertTimestamp(e){const n=jr(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ge.fromString(e);Ue(_E(r),9688,{name:e});const s=new Ao(r.get(1),r.get(3)),i=new ge(r.popFirst(5));return s.isEqual(n)||nr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function ck(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Hi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ps extends YE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $a(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(sc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ps._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ps._jsonSchemaVersion="firestore/documentSnapshot/1.0",ps._jsonSchema={type:ht("string",ps._jsonSchemaVersion),bundleSource:ht("string","DocumentSnapshot"),bundleName:ht("string"),bundle:ht("string")};class $a extends ps{data(e={}){return super.data(e)}}class Qs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Hi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new $a(this._firestore,this._userDataWriter,r.key,r,new Hi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new $a(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Hi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new $a(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Hi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:uk(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Qs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function uk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:t})}}/**
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
 */function hk(t){t=Pn(t,ot);const e=Pn(t.firestore,ws);return Gx(wf(e),t._key).then(n=>t0(e,t,n))}Qs._jsonSchemaVersion="firestore/querySnapshot/1.0",Qs._jsonSchema={type:ht("string",Qs._jsonSchemaVersion),bundleSource:ht("string","QuerySnapshot"),bundleName:ht("string"),bundle:ht("string")};class ZE extends lk{constructor(e){super(),this.firestore=e}convertBytes(e){return new sn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function yg(t,e,n,...r){t=Pn(t,ot);const s=Pn(t.firestore,ws),i=If(s);let o;return o=typeof(e=lt(e))=="string"||e instanceof nc?nk(i,"updateDoc",t._key,e,n,r):tk(i,"updateDoc",t._key,e),xf(s,[o.toMutation(t._key,pn.exists(!0))])}function vg(t){return xf(Pn(t.firestore,ws),[new rf(t._key,pn.none())])}function e0(t,e){const n=Pn(t.firestore,ws),r=$s(t),s=ck(t.converter,e);return xf(n,[ek(If(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,pn.exists(!1))]).then(()=>r)}function Eg(t,...e){var n,r,s;t=lt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||dg(e[o])||(i=e[o++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(dg(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(s=d.complete)===null||s===void 0?void 0:s.bind(d)}let c,u,f;if(t instanceof ot)u=Pn(t.firestore,ws),f=Wl(t._key.path),c={next:d=>{e[o]&&e[o](t0(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Pn(t,Rs);u=Pn(d.firestore,ws),f=d._query;const m=new ZE(u);c={next:E=>{e[o]&&e[o](new Qs(u,m,d,E))},error:e[o+1],complete:e[o+2]},ok(t._query)}return function(m,E,C,M){const U=new jE(M),L=new OE(E,U,C);return m.asyncQueue.enqueueAndForget(async()=>xE(await zu(m),L)),()=>{U.Ou(),m.asyncQueue.enqueueAndForget(async()=>kE(await zu(m),L))}}(wf(u),f,l,c)}function xf(t,e){return function(r,s){const i=new Vr;return r.asyncQueue.enqueueAndForget(async()=>Vx(await Wx(r),s,i)),i.promise}(wf(t),e)}function t0(t,e,n){const r=n.docs.get(e._key),s=new ZE(t);return new ps(t,s,e._key,r,new Hi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){mi=s})(fi),ti(new gs("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ws(new sC(r.getProvider("auth-internal")),new aC(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ne(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ao(u.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Nr(gm,_m,e),Nr(gm,_m,"esm2017")})();const fk={class:"recommend-page"},dk={class:"recommend-main-content"},pk={class:"recommend-card"},mk=["dir"],gk=["dir"],_k=["dir"],yk=["dir"],vk=["dir"],Ek={class:"form-group"},wk=["dir"],bk={class:"required-indicator"},Tk=["placeholder","dir"],Ik={class:"form-group"},Ak=["dir"],Sk={class:"required-indicator"},Rk={class:"required-indicator"},Pk=["dir"],Ck={value:""},xk={value:"male"},kk={value:"female"},Ok={value:"other"},Nk={class:"form-group"},Dk=["dir"],Vk=["placeholder","dir"],Mk={class:"form-group"},Lk=["dir"],Fk=["placeholder","dir"],Uk={class:"form-group"},$k=["dir"],jk=["placeholder","dir"],Bk={key:0,class:"form-group"},Hk={class:"form-group"},qk=["dir"],zk=["placeholder","dir"],Wk={class:"form-group"},Gk=["dir"],Kk={class:"required-indicator"},Qk=["dir"],Yk={value:"",disabled:""},Xk={value:"X-ray"},Jk={value:"CT"},Zk={value:"Both"},eO=["disabled"],tO={key:0},nO={key:1},rO=["dir"],sO=["dir"],iO={key:0,class:"factor-details mt-4"},oO={key:1,class:"msv-details mt-4"},aO=["innerHTML"],lO=["dir"],cO={__name:"RecommendView",setup(t){const e=ui(),n=BT(),r=Xe("currentLanguage"),s=Xe("db"),i=Xe("currentUserId"),o=Xe("isAuthReady"),l="1:382664693760:web:7582abe58d70b3260f20e5",c=pe(null),u=pe(""),f=pe(""),d=pe(""),m=pe(""),E=pe(!1),C=pe(""),M=pe(""),U=pe(""),L=pe(null),D=pe(null),B=pe(!1),$=pe(""),Z=pe(null),re=pe(""),P=pe(null),y=pe(""),w=()=>{U.value="",L.value=null,D.value=null,$.value="",d.value="",E.value=!1,M.value=""},I=async b=>{if(!b||!s||!i.value)return;B.value=!0;const le=i.value,ce=$s(s,`artifacts/${l}/users/${le}/patients`,b);try{const Re=await hk(ce);if(Re.exists()){const X=Re.data();re.value=X.name,P.value=X.age,y.value=X.gender,c.value=X.age,u.value=X.gender.toLowerCase(),f.value=X.medicalHistory?.join(", ")||"",m.value=X.allergies?.join(", ")||"",C.value=X.previousRadiationExposure?.join(", ")||""}else console.warn("Patient not found for ID:",b)}catch(Re){console.error("Error fetching patient details:",Re)}finally{B.value=!1}};Qn([o,()=>n.params.patientId],([b,le])=>{w(),le!==Z.value&&(re.value="",P.value=null,y.value="",c.value=null,u.value="",f.value="",m.value="",C.value="",Z.value=le),b&&le&&!re.value&&I(le)},{immediate:!0,deep:!0});const A=async()=>{if(B.value=!0,$.value="",U.value="",L.value=null,D.value=null,!c.value||!M.value){$.value=r.value==="en"?"Please fill in the required fields (Age, Type of Scan).":"الرجاء تعبئة الحقول المطلوبة (العمر، نوع الفحص).",B.value=!1;return}const b=re.value||(r.value==="en"?"Unspecified Patient":"مريض غير محدد"),le=r.value==="en"?`Based on the following patient details, provide a medical recommendation for an X-ray or CT scan.
Also, estimate the typical Tube Voltage (kV), Tube Current (mA), Exposure Time (ms) for the recommended scan, and the approximate Effective Dose (mSv).
Patient Name: ${b}
Age: ${c.value}
Gender: ${u.value||"Not specified"}
Medical History: ${f.value||"Not provided"}
Current Symptoms: ${d.value||"Not provided"}
Allergies: ${m.value||"None specified"}
Is Pregnant: ${E.value?"Yes":"No"}
Previous Radiation Exposure: ${C.value||"None known"}
Type of Scan to Consider: ${M.value}

The recommendation should be concise and professional. You must provide a numerical estimate for all scan factors.
Provide the response in a JSON format with keys: "recommendationText", "factorDetails" (with "tubeVoltageKv", "tubeCurrentMa", "exposureTimeMs"), and "calculatedMsv".
CRITICAL: The entire "recommendationText" field in the JSON response MUST be in English.`:`بناءً على تفاصيل المريض التالية، قدم توصية طبية لفحص الأشعة السينية أو المقطعية.
أيضًا، قم بتقدير جهد الأنبوب (kV)، تيار الأنبوب (mA)، ووقت التعرض (ms) النموذجي للفحص الموصى به، والجرعة الفعالة التقريبية (mSv).
اسم المريض: ${b}
العمر: ${c.value}
الجنس: ${u.value||"غير محدد"}
التاريخ الطبي: ${f.value||"لم يتم تقديمه"}
الأعراض الحالية: ${d.value||"لم يتم تقديمها"}
الحساسية: ${m.value||"غير محدد"}
هل هي حامل: ${E.value?"نعم":"لا"}
التعرض السابق للإشعاع: ${C.value||"لا يوجد"}
نوع الفحص المطلوب: ${M.value}

يجب أن تكون التوصية موجزة واحترافية. يجب أن تقدم تقديرًا رقميًا لجميع عوامل الفحص.
قدم الاستجابة بتنسيق JSON بالمفاتيح التالية: "recommendationText", "factorDetails" (مع "tubeVoltageKv", "tubeCurrentMa", "exposureTimeMs"), و "calculatedMsv".
مهم جدًا: حقل "recommendationText" في استجابة JSON يجب أن يكون بالكامل باللغة العربية.`;try{const ft=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB9KAR0P6sxAj7fP2I-MyVSVOJJaW0J91M",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:le}]}],generationConfig:{responseMimeType:"application/json",responseSchema:{type:"OBJECT",properties:{recommendationText:{type:"STRING"},factorDetails:{type:"OBJECT",properties:{tubeVoltageKv:{type:"NUMBER"},tubeCurrentMa:{type:"NUMBER"},exposureTimeMs:{type:"NUMBER"}},required:["tubeVoltageKv","tubeCurrentMa","exposureTimeMs"]},calculatedMsv:{type:"NUMBER"}},required:["recommendationText","factorDetails","calculatedMsv"]}}})});if(!ft.ok)throw new Error(`API request failed with status ${ft.status}`);const vt=await ft.json();if(vt.candidates&&vt.candidates[0]?.content?.parts?.[0]){const pt=JSON.parse(vt.candidates[0].content.parts[0].text);U.value=pt.recommendationText,L.value=pt.factorDetails,D.value=pt.calculatedMsv,s&&i.value&&await e0(Ua(s,`artifacts/${l}/users/${i.value}/recommendationHistory`),{patientId:Z.value||null,patientName:re.value||null,age:c.value,gender:u.value||null,medicalHistory:f.value||null,currentSymptoms:d.value||null,allergies:m.value||null,isPregnant:E.value,previousRadiationExposure:C.value||null,scanType:M.value,recommendation:U.value,factorDetails:L.value,calculatedMsv:D.value,timestamp:new Date,language:r.value})}else $.value=r.value==="en"?"Could not get a valid recommendation.":"تعذر الحصول على توصية صالحة."}catch(ce){console.error("Error generating recommendation:",ce),$.value=`An error occurred: ${ce.message}`}finally{B.value=!1}},S=()=>e.push("/dashboard");return(b,le)=>(ae(),ue("div",fk,[g("main",dk,[g("section",pk,[g("h2",{dir:v(r)==="ar"?"rtl":"ltr"},x(v(r)==="en"?"Medical Scan Recommendation":"توصية الفحص الطبي"),9,mk),g("p",{dir:v(r)==="ar"?"rtl":"ltr"},x(v(r)==="en"?"Enter patient details to receive recommendations for X-ray or CT scans.":"أدخل تفاصيل المريض لتلقي توصيات بشأن فحوصات الأشعة السينية أو الأشعة المقطعية."),9,gk),Z.value&&re.value?(ae(),ue("div",{key:0,class:"patient-info-display",dir:v(r)==="ar"?"rtl":"ltr"},[Se(x(v(r)==="en"?"For Patient:":"للمريض:")+" ",1),g("strong",null,x(re.value),1)],8,_k)):(ae(),ue("div",{key:1,class:"patient-info-display general-info",dir:v(r)==="ar"?"rtl":"ltr"},[g("p",null,x(v(r)==="en"?"No patient selected. A general recommendation will be generated.":"لم يتم اختيار مريض. سيتم إنشاء توصية عامة."),1)],8,yk)),g("p",{class:"text-sm font-semibold text-red-600 text-center mb-6",dir:v(r)==="ar"?"rtl":"ltr"},x(v(r)==="en"?"Disclaimer: For informational purposes only. Not for clinical use.":"إخلاء مسؤولية: لأغراض إعلامية فقط. ليس للاستخدام السريري."),9,vk),g("form",{onSubmit:st(A,["prevent"]),class:"recommend-form"},[g("div",Ek,[g("label",{for:"age",dir:v(r)==="ar"?"rtl":"ltr",class:$e({"text-right w-full":v(r)==="ar"})},[Se(x(v(r)==="en"?"Age (Years)":"العمر (سنوات)")+" ",1),g("span",bk,x(v(r)==="en"?"(Required)":"(مطلوب)"),1)],10,wk),je(g("input",{type:"number",id:"age","onUpdate:modelValue":le[0]||(le[0]=ce=>c.value=ce),placeholder:v(r)==="en"?"e.g., 35":"مثال: 35",dir:v(r)==="ar"?"rtl":"ltr",required:"",min:"0"},null,8,Tk),[[Ze,c.value]])]),g("div",Ik,[g("label",{for:"gender",dir:v(r)==="ar"?"rtl":"ltr",class:$e({"text-right w-full":v(r)==="ar"}),required:""},[Se(x(v(r)==="en"?"Gender":"الجنس")+" ",1),g("span",Sk,x(v(r)==="en"?b.Required:b.مطلوب),1),g("span",Rk,x(v(r)==="en"?"(Required)":"(مطلوب)"),1)],10,Ak),je(g("select",{id:"gender","onUpdate:modelValue":le[1]||(le[1]=ce=>u.value=ce),dir:v(r)==="ar"?"rtl":"ltr"},[g("option",Ck,x(v(r)==="en"?"Select Gender (Optional)":"اختر الجنس (اختياري)"),1),g("option",xk,x(v(r)==="en"?"Male":"ذكر"),1),g("option",kk,x(v(r)==="en"?"Female":"أنثى"),1),g("option",Ok,x(v(r)==="en"?"Other":"آخر"),1)],8,Pk),[[Ja,u.value]])]),g("div",Nk,[g("label",{for:"medicalHistory",dir:v(r)==="ar"?"rtl":"ltr",class:$e({"text-right w-full":v(r)==="ar"})},x(v(r)==="en"?"Medical History":"التاريخ الطبي"),11,Dk),je(g("textarea",{id:"medicalHistory","onUpdate:modelValue":le[2]||(le[2]=ce=>f.value=ce),rows:"3",placeholder:v(r)==="en"?"Optional: e.g., Diabetes":"اختياري: مثال: السكري",dir:v(r)==="ar"?"rtl":"ltr"},null,8,Vk),[[Ze,f.value]])]),g("div",Mk,[g("label",{for:"currentSymptoms",dir:v(r)==="ar"?"rtl":"ltr",class:$e({"text-right w-full":v(r)==="ar"})},x(v(r)==="en"?"Current Symptoms":"الأعراض الحالية"),11,Lk),je(g("textarea",{id:"currentSymptoms","onUpdate:modelValue":le[3]||(le[3]=ce=>d.value=ce),rows:"3",placeholder:v(r)==="en"?"Optional: e.g., Persistent cough":"اختياري: مثال: سعال مستمر",dir:v(r)==="ar"?"rtl":"ltr"},null,8,Fk),[[Ze,d.value]])]),g("div",Uk,[g("label",{for:"allergies",dir:v(r)==="ar"?"rtl":"ltr",class:$e({"text-right w-full":v(r)==="ar"})},x(v(r)==="en"?"Allergies":"الحساسية"),11,$k),je(g("textarea",{id:"allergies","onUpdate:modelValue":le[4]||(le[4]=ce=>m.value=ce),rows:"2",placeholder:v(r)==="en"?"Optional: e.g., Iodine":"اختياري: مثال: اليود",dir:v(r)==="ar"?"rtl":"ltr"},null,8,jk),[[Ze,m.value]])]),u.value==="female"?(ae(),ue("div",Bk,[g("div",{class:$e(["flex items-center w-full",[v(r)==="ar"?"flex-row-reverse justify-end text-right":"flex-row justify-start text-left"]])},[v(r)==="en"?(ae(),ue("label",{key:0,class:$e(v(r)==="ar"?"ml-1 text-gray-700":"mr-1 text-gray-700"),for:"isPregnant"}," Is the patient pregnant? ",2)):et("",!0),je(g("input",{type:"checkbox",id:"isPregnant","onUpdate:modelValue":le[5]||(le[5]=ce=>E.value=ce),class:"h-4 w-4 flex-none text-blue-600 border-gray-300 rounded focus:ring-blue-500"},null,512),[[O1,E.value]]),v(r)==="ar"?(ae(),ue("label",{key:1,class:$e(v(r)==="ar"?"ml-1 text-gray-700":"mr-1 text-gray-700"),for:"isPregnant"}," هل المريضة حامل؟ ",2)):et("",!0)],2)])):et("",!0),g("div",Hk,[g("label",{for:"previousRadiationExposure",dir:v(r)==="ar"?"rtl":"ltr",class:$e({"text-right w-full":v(r)==="ar"})},x(v(r)==="en"?"Previous Radiation Exposure":"التعرض السابق للإشعاع"),11,qk),je(g("input",{type:"text",id:"previousRadiationExposure","onUpdate:modelValue":le[6]||(le[6]=ce=>C.value=ce),placeholder:v(r)==="en"?"Optional: e.g., Chest X-ray 6 months ago":"اختياري: مثال: أشعة للصدر قبل 6 أشهر",dir:v(r)==="ar"?"rtl":"ltr"},null,8,zk),[[Ze,C.value]])]),g("div",Wk,[g("label",{for:"scanType",dir:v(r)==="ar"?"rtl":"ltr",class:$e({"text-right w-full":v(r)==="ar"})},[Se(x(v(r)==="en"?"Type of Scan to Consider":"نوع الفحص")+" ",1),g("span",Kk,x(v(r)==="en"?"(Required)":"(مطلوب)"),1)],10,Gk),je(g("select",{id:"scanType","onUpdate:modelValue":le[7]||(le[7]=ce=>M.value=ce),dir:v(r)==="ar"?"rtl":"ltr",required:""},[g("option",Yk,x(v(r)==="en"?"Select Scan Type":"اختر نوع الفحص"),1),g("option",Xk,x(v(r)==="en"?"X-ray":"الأشعة السينية"),1),g("option",Jk,x(v(r)==="en"?"CT Scan":"الأشعة المقطعية"),1),g("option",Zk,x(v(r)==="en"?"Both (X-ray and CT)":"كلاهما"),1)],8,Qk),[[Ja,M.value]])]),g("button",{type:"submit",class:"action-button primary recommend-button",disabled:B.value},[B.value?(ae(),ue("span",tO,x(v(r)==="en"?"Getting Recommendations...":"جاري الحصول على التوصيات..."),1)):(ae(),ue("span",nO,x(v(r)==="en"?"Get Recommendations":"الحصول على التوصيات"),1))],8,eO)],32),$.value?(ae(),ue("div",{key:2,class:"message error-message",dir:v(r)==="ar"?"rtl":"ltr"},x($.value),9,rO)):et("",!0),U.value?(ae(),ue("div",{key:3,class:"prediction-result",dir:v(r)==="ar"?"rtl":"ltr"},[g("h3",null,x(v(r)==="en"?"Recommendations:":"التوصيات:"),1),L.value?(ae(),ue("div",iO,[g("h4",null,x(v(r)==="en"?"Predicted Scan Factors:":"عوامل الفحص المتوقعة:"),1),g("p",null,[g("strong",null,x(v(r)==="en"?"Voltage:":"الجهد:"),1),Se(" "+x(L.value.tubeVoltageKv)+" kV",1)]),g("p",null,[g("strong",null,x(v(r)==="en"?"Current:":"التيار:"),1),Se(" "+x(L.value.tubeCurrentMa)+" mA",1)]),g("p",null,[g("strong",null,x(v(r)==="en"?"Time:":"الوقت:"),1),Se(" "+x(L.value.exposureTimeMs)+" ms",1)])])):et("",!0),D.value!==null?(ae(),ue("div",oO,[g("h4",null,x(v(r)==="en"?"Effective Dose:":"الجرعة الفعالة:"),1),g("p",null,[g("strong",null,x(D.value)+" mSv",1)])])):et("",!0),g("div",{class:"result-text",innerHTML:U.value},null,8,aO)],8,sO)):et("",!0),g("p",{class:"switch-link-container mt-8",dir:v(r)==="ar"?"rtl":"ltr"},[g("a",{href:"#",onClick:st(S,["prevent"])},x(v(r)==="en"?"Back to Dashboard":"العودة إلى لوحة التحكم"),1)],8,lO)])])]))}},uO=pi(cO,[["__scopeId","data-v-1e1d6721"]]),hO={class:"patient-list-page"},fO={class:"patient-list-main-content"},dO={class:"patient-list-card"},pO=["dir"],mO=["dir"],gO=["dir"],_O=["dir"],yO={class:"patient-list-section mt-8"},vO=["dir"],EO=["dir"],wO=["dir"],bO={key:2,class:"patient-table-container"},TO={class:"patient-table"},IO=["dir"],AO=["dir"],SO=["dir"],RO=["dir"],PO=["dir"],CO=["dir"],xO=["dir"],kO=["onClick"],OO=["onClick"],NO=["onClick"],DO=["onClick"],VO=["dir"],MO=["dir"],LO={class:"modal-title"},FO={class:"form-group"},UO={class:"form-group"},$O={class:"form-group"},jO={value:"",disabled:""},BO={value:"male"},HO={value:"female"},qO={value:"other"},zO={class:"form-group"},WO={class:"form-group"},GO={class:"form-group"},KO=["disabled"],QO={key:0},YO={key:1},XO=["dir"],JO={class:"modal-title"},ZO={class:"patient-details-grid"},eN={class:"full-width"},tN={class:"full-width"},nN={class:"full-width"},rN={class:"recommendation-history-section"},sN={class:"history-title"},iN={key:0,class:"no-history-message"},oN={key:1,class:"recommendation-list"},aN={class:"recommendation-date"},lN={class:"recommendation-actions"},cN=["onClick"],uN=["onClick"],hN=["onClick"],fN=["dir"],dN={class:"modal-title"},pN={class:"form-group"},mN={class:"form-group"},gN={class:"form-group"},_N={value:"male"},yN={value:"female"},vN={value:"other"},EN={class:"form-group"},wN={class:"form-group"},bN={class:"form-group"},TN=["disabled"],IN={key:0},AN={key:1},SN=["dir"],RN={class:"modal-title"},PN={class:"modal-actions"},CN=["disabled"],xN={key:0},kN={key:1},ON=["dir"],NN={class:"modal-title"},DN={class:"details-grid"},VN={key:0,class:"factor-details full-width"},MN={key:1,class:"msv-details full-width"},LN={class:"recommendation-text-output full-width"},FN=["innerHTML"],UN=["dir"],$N={class:"modal-title"},jN={class:"form-group"},BN={class:"form-group"},HN={class:"form-group"},qN=["disabled"],zN={key:0},WN={key:1},GN=["dir"],KN={class:"modal-title"},QN={class:"modal-actions"},YN=["disabled"],XN={key:0},JN={key:1},ZN={__name:"PatientListView",setup(t){const e=ui(),n=Xe("currentLanguage"),r=Xe("db"),s=Xe("isAuthReady"),i=Xe("currentUserId"),o="1:382664693760:web:7582abe58d70b3260f20e5",l=pe([]),c=pe(!1),u=pe(!1),f=pe(""),d=pe(""),m=pe(!1),E=pe(""),C=pe(""),M=pe(""),U=pe(""),L=pe(""),D=pe(""),B=pe(!1),$=pe(null),Z=pe(!1),re=pe(!1),P=pe(!1),y=pe(null),w=pe([]);let I=null;const A=pe(null),S=pe(!1),b=pe(!1),le=pe(!1),ce=pe(null),Re=pe(null),X=(O,N)=>{f.value=O,d.value=N,u.value=!0,setTimeout(()=>{u.value=!1},5e3)},Ie=()=>{E.value="",C.value="",M.value="",U.value="",L.value="",D.value=""},ft=()=>{if(!r||!i.value){console.warn("Firestore or User ID not ready for fetching patients."),c.value=!1;return}c.value=!0;const O=Ua(r,`artifacts/${o}/users/${i.value}/patients`),N=pg(O,mg("timestamp","desc"));Eg(N,W=>{const F=[];W.forEach(Q=>{F.push({id:Q.id,...Q.data()})}),l.value=F,c.value=!1},W=>{console.error("Error fetching patients:",W),X("error",n.value==="en"?"Failed to load patients.":"فشل تحميل قائمة المرضى."),c.value=!1})},vt=async()=>{if(X("",""),!E.value||!C.value||!M.value){X("error",n.value==="en"?"Please fill in the required fields: Name, Age, and Gender.":"الرجاء ملء الحقول المطلوبة: الاسم، والعمر، والجنس.");return}if(!s.value||!i.value){X("error",n.value==="en"?"Authentication not ready. Please wait and try again.":"المصادقة غير جاهزة. يرجى الانتظار والمحاولة مرة أخرى."),console.error("Firestore operation attempted before authentication was ready.");return}B.value=!0;try{const O={name:E.value,age:parseInt(C.value),gender:M.value,medicalHistory:U.value.split(",").map(W=>W.trim()).filter(W=>W),allergies:L.value.split(",").map(W=>W.trim()).filter(W=>W),previousRadiationExposure:D.value.split(",").map(W=>W.trim()).filter(W=>W),timestamp:new Date},N=Ua(r,`artifacts/${o}/users/${i.value}/patients`);await e0(N,O),X("success",n.value==="en"?"Patient added successfully!":"تمت إضافة المريض بنجاح!"),m.value=!1,Ie()}catch(O){console.error("Error adding patient: ",O),X("error",n.value==="en"?"Failed to add patient.":"فشل إضافة المريض.")}finally{B.value=!1}},pt=O=>{$.value=O,Z.value=!0,q(O.id)},ze=()=>{Z.value=!1,$.value=null,I&&I()},Ke=O=>{$.value=O,y.value={...O,medicalHistory:O.medicalHistory?O.medicalHistory.join(", "):"",allergies:O.allergies?O.allergies.join(", "):"",previousRadiationExposure:O.previousRadiationExposure?O.previousRadiationExposure.join(", "):""},re.value=!0},vn=async()=>{if(X("",""),!y.value.name||!y.value.age||!y.value.gender){X("error",n.value==="en"?"Please fill in all required fields.":"الرجاء ملء جميع الحقول المطلوبة.");return}if(!s.value||!i.value||!y.value.id){X("error",n.value==="en"?"Authentication or patient ID not ready.":"المصادقة أو معرف المريض غير جاهز.");return}c.value=!0;try{const O=$s(r,`artifacts/${o}/users/${i.value}/patients`,y.value.id);await yg(O,{name:y.value.name,age:parseInt(y.value.age),gender:y.value.gender,medicalHistory:y.value.medicalHistory.split(",").map(N=>N.trim()).filter(N=>N),allergies:y.value.allergies.split(",").map(N=>N.trim()).filter(N=>N),previousRadiationExposure:y.value.previousRadiationExposure.split(",").map(N=>N.trim()).filter(N=>N)}),X("success",n.value==="en"?"Patient updated successfully!":"تم تحديث بيانات المريض بنجاح!"),re.value=!1,$.value=null}catch(O){console.error("Error updating patient: ",O),X("error",n.value==="en"?"Failed to update patient.":"فشل تحديث بيانات المريض.")}finally{c.value=!1}},Zt=O=>{$.value=O,P.value=!0},Pt=async()=>{if(X("",""),!s.value||!i.value||!$.value?.id){X("error",n.value==="en"?"Authentication or patient ID not ready for deletion.":"المصادقة أو معرف المريض غير جاهز للحذف.");return}c.value=!0;try{const O=$s(r,`artifacts/${o}/users/${i.value}/patients`,$.value.id);await vg(O),X("success",n.value==="en"?"Patient deleted successfully!":"تم حذف المريض بنجاح!"),P.value=!1,$.value=null}catch(O){console.error("Error deleting patient: ",O),X("error",n.value==="en"?"Failed to delete patient.":"فشل حذف المريض.")}finally{c.value=!1}},q=O=>{if(I&&I(),!r||!i.value||!O){w.value=[];return}const N=Ua(r,`artifacts/${o}/users/${i.value}/recommendationHistory`),W=pg(N,ak("patientId","==",O),mg("timestamp","desc"));I=Eg(W,F=>{w.value=F.docs.map(Q=>({id:Q.id,...Q.data()}))},F=>{console.error("Error fetching recommendation history:",F),X("error",n.value==="en"?"Failed to load recommendation history.":"فشل تحميل سجل التوصيات."),w.value=[]})},se=O=>{A.value=O,S.value=!0},ee=()=>{S.value=!1,A.value=null},oe=O=>{A.value=O,ce.value={...O},b.value=!0},Oe=async()=>{if(X("",""),!ce.value.recommendation||!ce.value.scanType){X("error",n.value==="en"?"Recommendation text and scan type cannot be empty.":"لا يمكن أن يكون نص التوصية ونوع الفحص فارغين.");return}if(!s.value||!i.value||!ce.value.id){X("error",n.value==="en"?"Authentication or recommendation ID not ready.":"المصادقة أو معرف التوصية غير جاهز.");return}c.value=!0;try{const O=$s(r,`artifacts/${o}/users/${i.value}/recommendationHistory`,ce.value.id);await yg(O,{recommendation:ce.value.recommendation,scanType:ce.value.scanType,doseValue:ce.value.doseValue,reason:ce.value.reason,factorDetails:ce.value.factorDetails,calculatedMsv:ce.value.calculatedMsv}),X("success",n.value==="en"?"Recommendation updated successfully!":"تم تحديث التوصية بنجاح!"),b.value=!1,A.value=null}catch(O){console.error("Error updating recommendation: ",O),X("error",n.value==="en"?"Failed to update recommendation.":"فشل تحديث التوصية.")}finally{c.value=!1}},T=O=>{A.value=O,le.value=!0},R=async()=>{if(X("",""),!s.value||!i.value||!A.value?.id){X("error",n.value==="en"?"Authentication or recommendation ID not ready for deletion.":"المصادقة أو معرف التوصية غير جاهز للحذف.");return}c.value=!0;try{const O=$s(r,`artifacts/${o}/users/${i.value}/recommendationHistory`,A.value.id);await vg(O),X("success",n.value==="en"?"Recommendation deleted successfully!":"تم حذف التوصية بنجاح!"),le.value=!1,A.value=null}catch(O){console.error("Error deleting recommendation: ",O),X("error",n.value==="en"?"Failed to delete recommendation.":"فشل حذف التوصية.")}finally{c.value=!1}},k=O=>O?O.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/\n/g,"<br>"):"",H=O=>{e.push({name:"recommend",params:{patientId:O}})},K=()=>{e.push("/dashboard")};return Rh(()=>{Re.value=Qn(s,O=>{O&&i.value&&ft()},{immediate:!0})}),Ph(()=>{Re.value&&Re.value(),I&&I()}),(O,N)=>{const W=mb("font-awesome-icon");return ae(),ue("div",hO,[g("main",fO,[g("section",dO,[g("h2",{dir:v(n)==="ar"?"rtl":"ltr"},x(v(n)==="en"?"Patient Management":"إدارة المرضى"),9,pO),g("p",{dir:v(n)==="ar"?"rtl":"ltr"},x(v(n)==="en"?"Add new patients or view existing records.":"أضف مرضى جدد أو اطلع على السجلات الحالية."),9,mO),g("button",{onClick:N[0]||(N[0]=F=>{m.value=!0,Ie()}),class:"action-button primary add-new-patient-button",dir:v(n)==="ar"?"rtl":"ltr"},x(v(n)==="en"?"Add New Patient":"إضافة مريض جديد"),9,gO),u.value?(ae(),ue("div",{key:0,class:$e(["message",f.value+"-message"]),dir:v(n)==="ar"?"rtl":"ltr"},x(d.value),11,_O)):et("",!0),g("div",yO,[g("h3",{dir:v(n)==="ar"?"rtl":"ltr"},x(v(n)==="en"?"Existing Patients":"المرضى الحاليون"),9,vO),c.value?(ae(),ue("div",{key:0,class:"loading-message",dir:v(n)==="ar"?"rtl":"ltr"},[Ce(W,{icon:"spinner",spin:""}),Se(" "+x(v(n)==="en"?"Loading patients...":"جاري تحميل المرضى..."),1)],8,EO)):l.value.length===0?(ae(),ue("div",{key:1,class:"no-patients-message",dir:v(n)==="ar"?"rtl":"ltr"},x(v(n)==="en"?"No patients added yet.":"لم يتم إضافة أي مرضى بعد."),9,wO)):(ae(),ue("div",bO,[g("table",TO,[g("thead",null,[g("tr",null,[g("th",{dir:v(n)==="ar"?"rtl":"ltr"},x(v(n)==="en"?"Name":"الاسم"),9,IO),g("th",{dir:v(n)==="ar"?"rtl":"ltr"},x(v(n)==="en"?"Age":"العمر"),9,AO),g("th",{dir:v(n)==="ar"?"rtl":"ltr"},x(v(n)==="en"?"Gender":"الجنس"),9,SO),g("th",{dir:v(n)==="ar"?"rtl":"ltr"},x(v(n)==="en"?"Actions":"الإجراءات"),9,RO)])]),g("tbody",null,[(ae(!0),ue(rn,null,jd(l.value,F=>(ae(),ue("tr",{key:F.id},[g("td",{dir:v(n)==="ar"?"rtl":"ltr"},x(F.name),9,PO),g("td",{dir:v(n)==="ar"?"rtl":"ltr"},x(F.age),9,CO),g("td",{dir:v(n)==="ar"?"rtl":"ltr"},x(v(n)==="en"?F.gender:F.gender==="male"?"ذكر":F.gender==="female"?"أنثى":"آخر"),9,xO),g("td",null,[g("button",{onClick:Q=>pt(F),class:"action-button-sm view-button","aria-label":"View patient details"},[Ce(W,{icon:"eye"})],8,kO),g("button",{onClick:Q=>Ke(F),class:"action-button-sm edit-button","aria-label":"Edit patient"},[Ce(W,{icon:"edit"})],8,OO),g("button",{onClick:Q=>Zt(F),class:"action-button-sm delete-button","aria-label":"Delete patient"},[Ce(W,{icon:"trash-alt"})],8,NO),g("button",{onClick:Q=>H(F.id),class:"action-button-sm recommend-button","aria-label":"Generate new recommendation"},[Ce(W,{icon:"file-medical"})],8,DO)])]))),128))])])]))]),g("p",{class:"switch-link-container mt-8",dir:v(n)==="ar"?"rtl":"ltr"},[g("a",{href:"#",onClick:st(K,["prevent"])},x(v(n)==="en"?"Back to Dashboard":"العودة إلى لوحة التحكم"),1)],8,VO)])]),Ce(Bn,{name:"modal-fade"},{default:un(()=>[m.value?(ae(),ue("div",{key:0,class:"modal-overlay",onClick:N[9]||(N[9]=st(F=>{m.value=!1,Ie()},["self"]))},[g("div",{class:"modal-content",dir:v(n)==="ar"?"rtl":"ltr"},[g("button",{class:"close-modal-button",onClick:N[1]||(N[1]=F=>{m.value=!1,Ie()})}," × "),g("h3",LO,x(v(n)==="en"?"Add New Patient":"إضافة مريض جديد"),1),g("form",{onSubmit:st(vt,["prevent"]),class:"patient-form"},[g("div",FO,[g("label",{for:"modalNewPatientName",class:$e({"text-right w-full":v(n)==="ar"})},[Se(x(v(n)==="en"?"Name":"الاسم")+" ",1),N[30]||(N[30]=g("span",{class:"text-red-600"},"*",-1))],2),je(g("input",{type:"text",id:"modalNewPatientName","onUpdate:modelValue":N[2]||(N[2]=F=>E.value=F),required:""},null,512),[[Ze,E.value]])]),g("div",UO,[g("label",{for:"modalNewPatientAge",class:$e({"text-right w-full":v(n)==="ar"})},[Se(x(v(n)==="en"?"Age":"العمر")+" ",1),N[31]||(N[31]=g("span",{class:"text-red-600"},"*",-1))],2),je(g("input",{type:"number",id:"modalNewPatientAge","onUpdate:modelValue":N[3]||(N[3]=F=>C.value=F),required:"",min:"0"},null,512),[[Ze,C.value]])]),g("div",$O,[g("label",{for:"modalNewPatientGender",class:$e({"text-right w-full":v(n)==="ar"})},[Se(x(v(n)==="en"?"Gender":"الجنس")+" ",1),N[32]||(N[32]=g("span",{class:"text-red-600"},"*",-1))],2),je(g("select",{id:"modalNewPatientGender","onUpdate:modelValue":N[4]||(N[4]=F=>M.value=F),required:""},[g("option",jO,x(v(n)==="en"?"Select Gender":"اختر الجنس"),1),g("option",BO,x(v(n)==="en"?"Male":"ذكر"),1),g("option",HO,x(v(n)==="en"?"Female":"أنثى"),1),g("option",qO,x(v(n)==="en"?"Other":"آخر"),1)],512),[[Ja,M.value]])]),g("div",zO,[g("label",{for:"modalNewPatientMedicalHistory",class:$e({"text-right w-full":v(n)==="ar"})},x(v(n)==="en"?"Medical History (comma-separated)":"التاريخ الطبي (مفصولة بفاصلة)"),3),je(g("textarea",{id:"modalNewPatientMedicalHistory","onUpdate:modelValue":N[5]||(N[5]=F=>U.value=F),rows:"2"},null,512),[[Ze,U.value]])]),g("div",WO,[g("label",{for:"modalNewPatientAllergies",class:$e({"text-right w-full":v(n)==="ar"})},x(v(n)==="en"?"Allergies (comma-separated)":"الحساسية (مفصولة بفاصلة)"),3),je(g("textarea",{id:"modalNewPatientAllergies","onUpdate:modelValue":N[6]||(N[6]=F=>L.value=F),rows:"2"},null,512),[[Ze,L.value]])]),g("div",GO,[g("label",{for:"modalNewPatientPreviousRadiationExposure",class:$e({"text-right w-full":v(n)==="ar"})},x(v(n)==="en"?"Previous Radiation Exposure (comma-separated)":"التعرض السابق للإشعاع (مفصولة بفاصلة)"),3),je(g("textarea",{id:"modalNewPatientPreviousRadiationExposure","onUpdate:modelValue":N[7]||(N[7]=F=>D.value=F),rows:"2"},null,512),[[Ze,D.value]])]),g("button",{type:"submit",class:"action-button primary",disabled:B.value},[B.value?(ae(),ue("span",QO,[Ce(W,{icon:"spinner",spin:""}),Se(" "+x(v(n)==="en"?"Adding Patient...":"جاري إضافة المريض..."),1)])):(ae(),ue("span",YO,x(v(n)==="en"?"Add Patient":"إضافة مريض"),1))],8,KO),g("button",{type:"button",onClick:N[8]||(N[8]=F=>{m.value=!1,Ie()}),class:"action-button secondary mt-2"},x(v(n)==="en"?"Cancel":"إلغاء"),1)],32)],8,MO)])):et("",!0)]),_:1}),Ce(Bn,{name:"modal-fade"},{default:un(()=>[Z.value&&$.value?(ae(),ue("div",{key:0,class:"modal-overlay",onClick:st(ze,["self"])},[g("div",{class:"modal-content patient-details-modal",dir:v(n)==="ar"?"rtl":"ltr"},[g("button",{class:"close-modal-button",onClick:ze},"×"),g("h3",JO,x(v(n)==="en"?"Patient Details:":"تفاصيل المريض:")+" "+x($.value.name),1),g("div",ZO,[g("p",null,[g("strong",null,x(v(n)==="en"?"Name:":"الاسم:"),1),Se(" "+x($.value.name),1)]),g("p",null,[g("strong",null,x(v(n)==="en"?"Age:":"العمر:"),1),Se(" "+x($.value.age),1)]),g("p",null,[g("strong",null,x(v(n)==="en"?"Gender:":"الجنس:"),1),Se(" "+x(v(n)==="en"?$.value.gender:$.value.gender==="male"?"ذكر":$.value.gender==="female"?"أنثى":"آخر"),1)]),g("p",null,[g("strong",null,x(v(n)==="en"?"Added On:":"تاريخ الإضافة:"),1),Se(" "+x($.value.timestamp?.toDate().toLocaleDateString(v(n)==="en"?"en-US":"ar-SA")||"N/A"),1)]),g("p",eN,[g("strong",null,x(v(n)==="en"?"Medical History:":"التاريخ الطبي:"),1),Se(" "+x($.value.medicalHistory?.join(", ")||(v(n)==="en"?"N/A":"غير متوفر")),1)]),g("p",tN,[g("strong",null,x(v(n)==="en"?"Allergies:":"الحساسية:"),1),Se(" "+x($.value.allergies?.join(", ")||(v(n)==="en"?"N/A":"غير متوفر")),1)]),g("p",nN,[g("strong",null,x(v(n)==="en"?"Previous Radiation Exposure:":"التعرض السابق للإشعاع:"),1),Se(" "+x($.value.previousRadiationExposure?.join(", ")||(v(n)==="en"?"N/A":"غير متوفر")),1)])]),g("div",rN,[g("h4",sN,x(v(n)==="en"?"Recommendation History":"سجل التوصيات"),1),g("button",{onClick:N[10]||(N[10]=F=>H($.value.id)),class:"action-button primary generate-new-recommendation-button"},[Ce(W,{icon:"plus"}),Se(" "+x(v(n)==="en"?"Generate New Recommendation":"إنشاء توصية جديدة"),1)]),w.value.length===0?(ae(),ue("div",iN,x(v(n)==="en"?"No recommendations found for this patient yet.":"لم يتم العثور على توصيات لهذا المريض بعد."),1)):(ae(),ue("div",oN,[(ae(!0),ue(rn,null,jd(w.value,F=>(ae(),ue("div",{key:F.id,class:"recommendation-item"},[g("p",aN,[g("strong",null,x(v(n)==="en"?"Date:":"التاريخ:"),1),Se(" "+x(F.timestamp?.toDate().toLocaleString(v(n)==="en"?"en-US":"ar-SA")||"N/A"),1)]),g("p",null,[g("strong",null,x(v(n)==="en"?"Scan Type:":"نوع الفحص:"),1),Se(" "+x(F.scanType||"N/A"),1)]),g("p",null,[g("strong",null,x(v(n)==="en"?"Calculated Dose:":"الجرعة المحسوبة:"),1),Se(" "+x(F.calculatedMsv!==void 0?F.calculatedMsv+" mSv":"N/A"),1)]),g("div",lN,[g("button",{onClick:Q=>se(F),class:"action-button-sm view-button"},[Ce(W,{icon:"eye"})],8,cN),g("button",{onClick:Q=>oe(F),class:"action-button-sm edit-button"},[Ce(W,{icon:"edit"})],8,uN),g("button",{onClick:Q=>T(F),class:"action-button-sm delete-button"},[Ce(W,{icon:"trash-alt"})],8,hN)])]))),128))]))])],8,XO)])):et("",!0)]),_:1}),Ce(Bn,{name:"modal-fade"},{default:un(()=>[re.value&&y.value?(ae(),ue("div",{key:0,class:"modal-overlay",onClick:N[19]||(N[19]=st(F=>re.value=!1,["self"]))},[g("div",{class:"modal-content",dir:v(n)==="ar"?"rtl":"ltr"},[g("button",{class:"close-modal-button",onClick:N[11]||(N[11]=F=>re.value=!1)},"×"),g("h3",dN,x(v(n)==="en"?"Edit Patient":"تعديل بيانات المريض"),1),g("form",{onSubmit:st(vn,["prevent"]),class:"patient-form"},[g("div",pN,[g("label",{for:"editPatientName",class:$e({"text-right w-full":v(n)==="ar"})},x(v(n)==="en"?"Name":"الاسم"),3),je(g("input",{type:"text",id:"editPatientName","onUpdate:modelValue":N[12]||(N[12]=F=>y.value.name=F),required:""},null,512),[[Ze,y.value.name]])]),g("div",mN,[g("label",{for:"editPatientAge",class:$e({"text-right w-full":v(n)==="ar"})},x(v(n)==="en"?"Age":"العمر"),3),je(g("input",{type:"number",id:"editPatientAge","onUpdate:modelValue":N[13]||(N[13]=F=>y.value.age=F),required:"",min:"0"},null,512),[[Ze,y.value.age]])]),g("div",gN,[g("label",{for:"editPatientGender",class:$e({"text-right w-full":v(n)==="ar"})},x(v(n)==="en"?"Gender":"الجنس"),3),je(g("select",{id:"editPatientGender","onUpdate:modelValue":N[14]||(N[14]=F=>y.value.gender=F),required:""},[g("option",_N,x(v(n)==="en"?"Male":"ذكر"),1),g("option",yN,x(v(n)==="en"?"Female":"أنثى"),1),g("option",vN,x(v(n)==="en"?"Other":"آخر"),1)],512),[[Ja,y.value.gender]])]),g("div",EN,[g("label",{for:"editPatientMedicalHistory",class:$e({"text-right w-full":v(n)==="ar"})},x(v(n)==="en"?"Medical History (comma-separated)":"التاريخ الطبي (مفصولة بفاصلة)"),3),je(g("textarea",{id:"editPatientMedicalHistory","onUpdate:modelValue":N[15]||(N[15]=F=>y.value.medicalHistory=F),rows:"2"},null,512),[[Ze,y.value.medicalHistory]])]),g("div",wN,[g("label",{for:"editPatientAllergies",class:$e({"text-right w-full":v(n)==="ar"})},x(v(n)==="en"?"Allergies (comma-separated)":"الحساسية (مفصولة بفاصلة)"),3),je(g("textarea",{id:"editPatientAllergies","onUpdate:modelValue":N[16]||(N[16]=F=>y.value.allergies=F),rows:"2"},null,512),[[Ze,y.value.allergies]])]),g("div",bN,[g("label",{for:"editPatientPreviousRadiationExposure",class:$e({"text-right w-full":v(n)==="ar"})},x(v(n)==="en"?"Previous Radiation Exposure (comma-separated)":"التعرض السابق للإشعاع (مفصولة بفاصلة)"),3),je(g("textarea",{id:"editPatientPreviousRadiationExposure","onUpdate:modelValue":N[17]||(N[17]=F=>y.value.previousRadiationExposure=F),rows:"2"},null,512),[[Ze,y.value.previousRadiationExposure]])]),g("button",{type:"submit",class:"action-button primary",disabled:c.value},[c.value?(ae(),ue("span",IN,[Ce(W,{icon:"spinner",spin:""}),Se(" "+x(v(n)==="en"?"Updating...":"جاري التحديث..."),1)])):(ae(),ue("span",AN,x(v(n)==="en"?"Update Patient":"تحديث المريض"),1))],8,TN),g("button",{type:"button",onClick:N[18]||(N[18]=F=>re.value=!1),class:"action-button secondary mt-2"},x(v(n)==="en"?"Cancel":"إلغاء"),1)],32)],8,fN)])):et("",!0)]),_:1}),Ce(Bn,{name:"modal-fade"},{default:un(()=>[P.value&&$.value?(ae(),ue("div",{key:0,class:"modal-overlay",onClick:N[21]||(N[21]=st(F=>P.value=!1,["self"]))},[g("div",{class:"modal-content delete-confirm-modal",dir:v(n)==="ar"?"rtl":"ltr"},[g("h3",RN,x(v(n)==="en"?"Confirm Delete Patient":"تأكيد حذف المريض"),1),g("p",null,[Se(x(v(n)==="en"?"Are you sure you want to delete patient":"هل أنت متأكد أنك تريد حذف المريض")+" ",1),g("strong",null,x($.value.name),1),Se("? "+x(v(n)==="en"?"This action cannot be undone.":"لا يمكن التراجع عن هذا الإجراء."),1)]),g("div",PN,[g("button",{onClick:Pt,class:"action-button delete-button-confirm",disabled:c.value},[c.value?(ae(),ue("span",xN,[Ce(W,{icon:"spinner",spin:""}),Se(" "+x(v(n)==="en"?"Deleting...":"جاري الحذف..."),1)])):(ae(),ue("span",kN,x(v(n)==="en"?"Delete":"حذف"),1))],8,CN),g("button",{type:"button",onClick:N[20]||(N[20]=F=>P.value=!1),class:"action-button secondary"},x(v(n)==="en"?"Cancel":"إلغاء"),1)])],8,SN)])):et("",!0)]),_:1}),Ce(Bn,{name:"modal-fade"},{default:un(()=>[S.value&&A.value?(ae(),ue("div",{key:0,class:"modal-overlay",onClick:st(ee,["self"])},[g("div",{class:"modal-content recommendation-details-modal",dir:v(n)==="ar"?"rtl":"ltr"},[g("button",{class:"close-modal-button",onClick:ee},"×"),g("h3",NN,x(v(n)==="en"?"Recommendation Details":"تفاصيل التوصية"),1),g("div",DN,[g("p",null,[g("strong",null,x(v(n)==="en"?"Patient Name:":"اسم المريض:"),1),Se(" "+x(A.value.patientName||"N/A"),1)]),g("p",null,[g("strong",null,x(v(n)==="en"?"Scan Type:":"نوع الفحص:"),1),Se(" "+x(A.value.scanType||"N/A"),1)]),g("p",null,[g("strong",null,x(v(n)==="en"?"Date:":"التاريخ:"),1),Se(" "+x(A.value.timestamp?.toDate().toLocaleString(v(n)==="en"?"en-US":"ar-SA")||"N/A"),1)]),A.value.factorDetails?(ae(),ue("div",VN,[g("h4",null,x(v(n)==="en"?"Predicted Scan Factors:":"عوامل الفحص المتوقعة:"),1),g("p",null,[g("strong",null,x(v(n)==="en"?"Tube Voltage:":"جهد الأنبوب:"),1),Se(" "+x(A.value.factorDetails.tubeVoltageKv||"N/A")+" kV",1),N[33]||(N[33]=g("br",null,null,-1)),g("strong",null,x(v(n)==="en"?"Tube Current:":"تيار الأنبوب:"),1),Se(" "+x(A.value.factorDetails.tubeCurrentMa||"N/A")+" mA",1),N[34]||(N[34]=g("br",null,null,-1)),g("strong",null,x(v(n)==="en"?"Exposure Time:":"وقت التعرض:"),1),Se(" "+x(A.value.factorDetails.exposureTimeMs||"N/A")+" ms ",1)])])):et("",!0),A.value.calculatedMsv!==null?(ae(),ue("div",MN,[g("h4",null,x(v(n)==="en"?"Calculated Effective Dose:":"الجرعة الفعالة المحسوبة:"),1),g("p",null,[Se(x(v(n)==="en"?"Approximate Effective Dose:":"الجرعة الفعالة التقريبية:")+" ",1),g("strong",null,x(A.value.calculatedMsv)+" mSv",1)])])):et("",!0),g("div",LN,[g("p",null,[g("strong",null,x(v(n)==="en"?"Recommendation:":"التوصية:"),1)]),g("div",{innerHTML:k(A.value.recommendation)},null,8,FN)])]),g("button",{type:"button",onClick:ee,class:"action-button primary mt-4"},x(v(n)==="en"?"Close":"إغلاق"),1)],8,ON)])):et("",!0)]),_:1}),Ce(Bn,{name:"modal-fade"},{default:un(()=>[b.value&&ce.value?(ae(),ue("div",{key:0,class:"modal-overlay",onClick:N[27]||(N[27]=st(F=>b.value=!1,["self"]))},[g("div",{class:"modal-content",dir:v(n)==="ar"?"rtl":"ltr"},[g("button",{class:"close-modal-button",onClick:N[22]||(N[22]=F=>b.value=!1)}," × "),g("h3",$N,x(v(n)==="en"?"Edit Recommendation":"تعديل التوصية"),1),g("form",{onSubmit:st(Oe,["prevent"]),class:"patient-form"},[g("div",jN,[g("label",{for:"editRecScanType",class:$e({"text-right w-full":v(n)==="ar"})},x(v(n)==="en"?"Scan Type:":"نوع الفحص:"),3),je(g("input",{type:"text",id:"editRecScanType","onUpdate:modelValue":N[23]||(N[23]=F=>ce.value.scanType=F),required:""},null,512),[[Ze,ce.value.scanType]])]),g("div",BN,[g("label",{for:"editRecCalculatedMsv",class:$e({"text-right w-full":v(n)==="ar"})},x(v(n)==="en"?"Calculated Dose (mSv):":"الجرعة المحسوبة (ملي سيفرت):"),3),je(g("input",{type:"number",id:"editRecCalculatedMsv","onUpdate:modelValue":N[24]||(N[24]=F=>ce.value.calculatedMsv=F),step:"0.001"},null,512),[[Ze,ce.value.calculatedMsv,void 0,{number:!0}]])]),g("div",HN,[g("label",{for:"editRecText",class:$e({"text-right w-full":v(n)==="ar"})},x(v(n)==="en"?"Recommendation Text:":"نص التوصية:"),3),je(g("textarea",{id:"editRecText","onUpdate:modelValue":N[25]||(N[25]=F=>ce.value.recommendation=F),rows:"5",required:""},null,512),[[Ze,ce.value.recommendation]])]),g("button",{type:"submit",class:"action-button primary",disabled:c.value},[c.value?(ae(),ue("span",zN,[Ce(W,{icon:"spinner",spin:""}),Se(" "+x(v(n)==="en"?"Updating...":"جاري التحديث..."),1)])):(ae(),ue("span",WN,x(v(n)==="en"?"Update Recommendation":"تحديث التوصية"),1))],8,qN),g("button",{type:"button",onClick:N[26]||(N[26]=F=>b.value=!1),class:"action-button secondary mt-2"},x(v(n)==="en"?"Cancel":"إلغاء"),1)],32)],8,UN)])):et("",!0)]),_:1}),Ce(Bn,{name:"modal-fade"},{default:un(()=>[le.value&&A.value?(ae(),ue("div",{key:0,class:"modal-overlay",onClick:N[29]||(N[29]=st(F=>le.value=!1,["self"]))},[g("div",{class:"modal-content delete-confirm-modal",dir:v(n)==="ar"?"rtl":"ltr"},[g("h3",KN,x(v(n)==="en"?"Confirm Delete Recommendation":"تأكيد حذف التوصية"),1),g("p",null,[Se(x(v(n)==="en"?"Are you sure you want to delete this recommendation for patient":"هل أنت متأكد أنك تريد حذف هذه التوصية للمريض")+" ",1),g("strong",null,x(A.value.patientName),1),Se("? "+x(v(n)==="en"?"This action cannot be undone.":"لا يمكن التراجع عن هذا الإجراء."),1)]),g("div",QN,[g("button",{onClick:R,class:"action-button delete-button-confirm",disabled:c.value},[c.value?(ae(),ue("span",XN,[Ce(W,{icon:"spinner",spin:""}),Se(" "+x(v(n)==="en"?"Deleting...":"جاري الحذف..."),1)])):(ae(),ue("span",JN,x(v(n)==="en"?"Delete":"حذف"),1))],8,YN),g("button",{type:"button",onClick:N[28]||(N[28]=F=>le.value=!1),class:"action-button secondary"},x(v(n)==="en"?"Cancel":"إلغاء"),1)])],8,GN)])):et("",!0)]),_:1})])}}},eD=pi(ZN,[["__scopeId","data-v-27a454f8"]]),tD={class:"dashboard-page"},nD={class:"dashboard-main-content"},rD={class:"dashboard-card"},sD=["dir"],iD=["dir"],oD={class:"dashboard-features"},aD=["dir"],lD=["dir"],cD=["dir"],uD=["dir"],hD={__name:"DashboardView",setup(t){const e=ui(),n=Xe("currentLanguage"),r=Xe("auth"),s=async()=>{try{await r.signOut(),e.push("/signin")}catch(i){console.error("Error logging out:",i)}};return(i,o)=>(ae(),ue("div",tD,[g("main",nD,[g("section",rD,[g("h2",{dir:v(n)==="ar"?"rtl":"ltr"},x(v(n)==="en"?"Welcome to mSv Dose Tracker":"مرحبًا بك في متتبع جرعات الأشعة السينية"),9,sD),g("p",{dir:v(n)==="ar"?"rtl":"ltr"},x(v(n)==="en"?"Your comprehensive tool for managing patient radiation exposure and recommendations.":"أداتك الشاملة لإدارة تعرض المرضى للإشعاع وتقديم التوصيات."),9,iD),g("div",oD,[g("div",{class:"feature-item",onClick:o[0]||(o[0]=l=>v(e).push("/recommend"))},[o[2]||(o[2]=g("i",{class:"fas fa-file-medical"},null,-1)),g("h3",{dir:v(n)==="ar"?"rtl":"ltr"},x(v(n)==="en"?"Get Scan Recommendation":"الحصول على توصية"),9,aD),g("p",{dir:v(n)==="ar"?"rtl":"ltr"},x(v(n)==="en"?"Receive AI-powered recommendations for X-ray or CT scans based on patient data.":"احصل على توصيات مدعومة بالذكاء الاصطناعي لفحوصات الأشعة السينية أو الأشعة المقطعية بناءً على بيانات المريض."),9,lD)]),g("div",{class:"feature-item",onClick:o[1]||(o[1]=l=>v(e).push("/patients"))},[o[3]||(o[3]=g("i",{class:"fas fa-users"},null,-1)),g("h3",{dir:v(n)==="ar"?"rtl":"ltr"},x(v(n)==="en"?"Manage Patients":"إدارة المرضى"),9,cD),g("p",{dir:v(n)==="ar"?"rtl":"ltr"},x(v(n)==="en"?"View, add, and manage patient records securely.":"عرض وإضافة وإدارة سجلات المرضى بأمان."),9,uD)])]),g("button",{onClick:s,class:"action-button secondary logout-button"},x(v(n)==="en"?"Logout":"تسجيل الخروج"),1)])])]))}},fD=pi(hD,[["__scopeId","data-v-d35ecde7"]]),dD={class:"reset-password-page"},pD={class:"reset-password-main-content"},mD={class:"reset-password-card"},gD=["dir"],_D=["dir"],yD={class:"form-group"},vD=["dir"],ED=["placeholder","dir"],wD=["disabled"],bD={key:0},TD={key:1},ID=["dir"],AD=["dir"],SD=["dir"],RD={__name:"ResetPasswordView",setup(t){const e=ui(),n=Ho(),r=Xe("currentLanguage"),s=pe(""),i=async()=>{await n.sendPasswordReset(s.value)},o=()=>{e.push("/signin")};return(l,c)=>(ae(),ue("div",dD,[g("main",pD,[g("section",mD,[g("h2",{dir:v(r)==="ar"?"rtl":"ltr"},x(v(r)==="en"?"Reset Your Password":"إعادة تعيين كلمة المرور"),9,gD),g("p",{dir:v(r)==="ar"?"rtl":"ltr"},x(v(r)==="en"?"Enter your email address to receive a password reset link.":"أدخل عنوان بريدك الإلكتروني لتلقي رابط إعادة تعيين كلمة المرور."),9,_D),g("form",{onSubmit:st(i,["prevent"]),class:"reset-password-form"},[g("div",yD,[g("label",{for:"email",dir:v(r)==="ar"?"rtl":"ltr"},x(v(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,vD),je(g("input",{type:"email",id:"email","onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),placeholder:v(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:v(r)==="ar"?"rtl":"ltr",required:""},null,8,ED),[[Ze,s.value]])]),g("button",{class:"action-button primary",type:"submit",disabled:v(n).loading},[v(n).loading?(ae(),ue("span",bD,x(v(r)==="en"?"Sending Link...":"جاري إرسال الرابط..."),1)):(ae(),ue("span",TD,x(v(r)==="en"?"Send Reset Link":"إرسال رابط إعادة التعيين"),1))],8,wD)],32),v(n).error?(ae(),ue("div",{key:0,class:"message error-message",dir:v(r)==="ar"?"rtl":"ltr"},x(v(n).error),9,ID)):et("",!0),v(n).successMessage?(ae(),ue("div",{key:1,class:"message success-message",dir:v(r)==="ar"?"rtl":"ltr"},x(v(n).successMessage),9,AD)):et("",!0),g("p",{class:"switch-link-container",dir:v(r)==="ar"?"rtl":"ltr"},[Se(x(v(r)==="en"?"Remembered your password?":"هل تذكرت كلمة المرور؟")+" ",1),g("a",{href:"#",onClick:st(o,["prevent"])},x(v(r)==="en"?"Sign In":"تسجيل الدخول"),1)],8,SD)])])]))}},PD=pi(RD,[["__scopeId","data-v-73a48bd7"]]),vl=$T({history:gT("/mSv"),routes:[{path:"/",name:"signup",component:NP},{path:"/signin",name:"signin",component:tC},{path:"/dashboard",name:"dashboard",component:fD,meta:{requiresAuth:!0}},{path:"/recommend/:patientId?",name:"recommend",component:uO},{path:"/patients",name:"patients",component:eD},{path:"/resetpassword",name:"resetpassword",component:PD},{path:"/__/auth/handler",name:"firebaseAuthHandler",component:{render(){return Xs("div")}},beforeEnter:(t,e,n)=>{n()}},{path:"/:catchAll(.*)",redirect:"/dashboard"},{path:"/__/auth/iframe",name:"firebaseAuthIframeHandler",component:{render(){return Xs("div")}},beforeEnter:(t,e,n)=>{n()}}]});vl.beforeEach(async(t,e,n)=>{const r=Ho();r.isAuthReady||await new Promise(l=>{const c=r.$subscribe((u,f)=>{f.isAuthReady&&(c(),l())})});const s=!!r.user;if(t.path.startsWith("/__/auth/handler")||t.path.startsWith("/__/auth/iframe")){n();return}console.log(`Navigating to: ${t.path} (name: ${t.name})`),console.log(`isAuthenticated: ${s}`);const o=["signup","signin","resetpassword","newpassword"].includes(t.name);s?o?(console.log(`Redirecting authenticated user from ${t.name} to /dashboard.`),n("/dashboard")):(console.log(`Allowing authenticated access to ${t.path}.`),n()):o?(console.log(`Allowing unauthenticated access to ${t.name}.`),n()):(console.log(`Redirecting unauthenticated user from ${t.path} (requires auth) to /signin.`),n("/signin"))});var CD="firebase",xD="11.10.0";/**
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
 */Nr(CD,xD,"app");/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function kD(t,e,n){return(e=ND(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Y(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?wg(Object(n),!0).forEach(function(r){kD(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):wg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function OD(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ND(t){var e=OD(t,"string");return typeof e=="symbol"?e:e+""}const bg=()=>{};let kf={},n0={},r0=null,s0={mark:bg,measure:bg};try{typeof window<"u"&&(kf=window),typeof document<"u"&&(n0=document),typeof MutationObserver<"u"&&(r0=MutationObserver),typeof performance<"u"&&(s0=performance)}catch{}const{userAgent:Tg=""}=kf.navigator||{},Wr=kf,Je=n0,Ig=r0,Ia=s0;Wr.document;const cr=!!Je.documentElement&&!!Je.head&&typeof Je.addEventListener=="function"&&typeof Je.createElement=="function",i0=~Tg.indexOf("MSIE")||~Tg.indexOf("Trident/");var DD=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,VD=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,o0={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},MD={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},a0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ft="classic",oc="duotone",LD="sharp",FD="sharp-duotone",l0=[Ft,oc,LD,FD],UD={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},$D={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},jD=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),BD={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},HD=["fak","fa-kit","fakd","fa-kit-duotone"],Ag={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},qD=["kit"],zD={kit:{"fa-kit":"fak"}},WD=["fak","fakd"],GD={kit:{fak:"fa-kit"}},Sg={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Aa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},KD=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],QD=["fak","fa-kit","fakd","fa-kit-duotone"],YD={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},XD={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},JD={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Gu={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},ZD=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ku=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...KD,...ZD],e4=["solid","regular","light","thin","duotone","brands"],c0=[1,2,3,4,5,6,7,8,9,10],t4=c0.concat([11,12,13,14,15,16,17,18,19,20]),n4=[...Object.keys(JD),...e4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Aa.GROUP,Aa.SWAP_OPACITY,Aa.PRIMARY,Aa.SECONDARY].concat(c0.map(t=>"".concat(t,"x"))).concat(t4.map(t=>"w-".concat(t))),r4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const sr="___FONT_AWESOME___",Qu=16,u0="fa",h0="svg-inline--fa",bs="data-fa-i2svg",Yu="data-fa-pseudo-element",s4="data-fa-pseudo-element-pending",Of="data-prefix",Nf="data-icon",Rg="fontawesome-i2svg",i4="async",o4=["HTML","HEAD","STYLE","SCRIPT"],f0=(()=>{try{return!0}catch{return!1}})();function Yo(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Ft]}})}const d0=Y({},o0);d0[Ft]=Y(Y(Y(Y({},{"fa-duotone":"duotone"}),o0[Ft]),Ag.kit),Ag["kit-duotone"]);const a4=Yo(d0),Xu=Y({},BD);Xu[Ft]=Y(Y(Y(Y({},{duotone:"fad"}),Xu[Ft]),Sg.kit),Sg["kit-duotone"]);const Pg=Yo(Xu),Ju=Y({},Gu);Ju[Ft]=Y(Y({},Ju[Ft]),GD.kit);const Df=Yo(Ju),Zu=Y({},XD);Zu[Ft]=Y(Y({},Zu[Ft]),zD.kit);Yo(Zu);const l4=DD,p0="fa-layers-text",c4=VD,u4=Y({},UD);Yo(u4);const h4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Jc=MD,f4=[...qD,...n4],lo=Wr.FontAwesomeConfig||{};function d4(t){var e=Je.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function p4(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Je&&typeof Je.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=p4(d4(n));s!=null&&(lo[r]=s)});const m0={styleDefault:"solid",familyDefault:Ft,cssPrefix:u0,replacementClass:h0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};lo.familyPrefix&&(lo.cssPrefix=lo.familyPrefix);const li=Y(Y({},m0),lo);li.autoReplaceSvg||(li.observeMutations=!1);const fe={};Object.keys(m0).forEach(t=>{Object.defineProperty(fe,t,{enumerable:!0,set:function(e){li[t]=e,co.forEach(n=>n(fe))},get:function(){return li[t]}})});Object.defineProperty(fe,"familyPrefix",{enumerable:!0,set:function(t){li.cssPrefix=t,co.forEach(e=>e(fe))},get:function(){return li.cssPrefix}});Wr.FontAwesomeConfig=fe;const co=[];function m4(t){return co.push(t),()=>{co.splice(co.indexOf(t),1)}}const yr=Qu,In={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function g4(t){if(!t||!cr)return;const e=Je.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Je.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Je.head.insertBefore(e,r),t}const _4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xo(){let t=12,e="";for(;t-- >0;)e+=_4[Math.random()*62|0];return e}function Ei(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Vf(t){return t.classList?Ei(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function g0(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function y4(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(g0(t[n]),'" '),"").trim()}function ac(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Mf(t){return t.size!==In.size||t.x!==In.x||t.y!==In.y||t.rotate!==In.rotate||t.flipX||t.flipY}function v4(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:u}}function E4(t){let{transform:e,width:n=Qu,height:r=Qu,startCentered:s=!1}=t,i="";return s&&i0?i+="translate(".concat(e.x/yr-n/2,"em, ").concat(e.y/yr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/yr,"em), calc(-50% + ").concat(e.y/yr,"em)) "):i+="translate(".concat(e.x/yr,"em, ").concat(e.y/yr,"em) "),i+="scale(".concat(e.size/yr*(e.flipX?-1:1),", ").concat(e.size/yr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var w4=`:root, :host {
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
}`;function _0(){const t=u0,e=h0,n=fe.cssPrefix,r=fe.replacementClass;let s=w4;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return s}let Cg=!1;function Zc(){fe.autoAddCss&&!Cg&&(g4(_0()),Cg=!0)}var b4={mixout(){return{dom:{css:_0,insertCss:Zc}}},hooks(){return{beforeDOMElementCreation(){Zc()},beforeI2svg(){Zc()}}}};const ir=Wr||{};ir[sr]||(ir[sr]={});ir[sr].styles||(ir[sr].styles={});ir[sr].hooks||(ir[sr].hooks={});ir[sr].shims||(ir[sr].shims=[]);var An=ir[sr];const y0=[],v0=function(){Je.removeEventListener("DOMContentLoaded",v0),El=1,y0.map(t=>t())};let El=!1;cr&&(El=(Je.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Je.readyState),El||Je.addEventListener("DOMContentLoaded",v0));function T4(t){cr&&(El?setTimeout(t,0):y0.push(t))}function Xo(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?g0(t):"<".concat(e," ").concat(y4(n),">").concat(r.map(Xo).join(""),"</").concat(e,">")}function xg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var eu=function(e,n,r,s){var i=Object.keys(e),o=i.length,l=n,c,u,f;for(r===void 0?(c=1,f=e[i[0]]):(c=0,f=r);c<o;c++)u=i[c],f=l(f,e[u],u,e);return f};function I4(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function eh(t){const e=I4(t);return e.length===1?e[0].toString(16):null}function A4(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function kg(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function th(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=kg(e);typeof An.hooks.addPack=="function"&&!r?An.hooks.addPack(t,kg(e)):An.styles[t]=Y(Y({},An.styles[t]||{}),s),t==="fas"&&th("fa",e)}const{styles:ko,shims:S4}=An,E0=Object.keys(Df),R4=E0.reduce((t,e)=>(t[e]=Object.keys(Df[e]),t),{});let Lf=null,w0={},b0={},T0={},I0={},A0={};function P4(t){return~f4.indexOf(t)}function C4(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!P4(s)?s:null}const S0=()=>{const t=r=>eu(ko,(s,i,o)=>(s[o]=eu(i,r,{}),s),{});w0=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=i}),r)),b0=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=i}),r)),A0=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(l=>{r[l]=i}),r});const e="far"in ko||fe.autoFetchSvg,n=eu(S4,(r,s)=>{const i=s[0];let o=s[1];const l=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});T0=n.names,I0=n.unicodes,Lf=lc(fe.styleDefault,{family:fe.familyDefault})};m4(t=>{Lf=lc(t.styleDefault,{family:fe.familyDefault})});S0();function Ff(t,e){return(w0[t]||{})[e]}function x4(t,e){return(b0[t]||{})[e]}function us(t,e){return(A0[t]||{})[e]}function R0(t){return T0[t]||{prefix:null,iconName:null}}function k4(t){const e=I0[t],n=Ff("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Gr(){return Lf}const P0=()=>({prefix:null,iconName:null,rest:[]});function O4(t){let e=Ft;const n=E0.reduce((r,s)=>(r[s]="".concat(fe.cssPrefix,"-").concat(s),r),{});return l0.forEach(r=>{(t.includes(n[r])||t.some(s=>R4[r].includes(s)))&&(e=r)}),e}function lc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Ft}=e,r=a4[n][t];if(n===oc&&!t)return"fad";const s=Pg[n][t]||Pg[n][r],i=t in An.styles?t:null;return s||i||null}function N4(t){let e=[],n=null;return t.forEach(r=>{const s=C4(fe.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function Og(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function cc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=Ku.concat(QD),i=Og(t.filter(d=>s.includes(d))),o=Og(t.filter(d=>!Ku.includes(d))),l=i.filter(d=>(r=d,!a0.includes(d))),[c=null]=l,u=O4(i),f=Y(Y({},N4(o)),{},{prefix:lc(c,{family:u})});return Y(Y(Y({},f),L4({values:t,family:u,styles:ko,config:fe,canonical:f,givenPrefix:r})),D4(n,r,f))}function D4(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?R0(s):{},o=us(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!ko.far&&ko.fas&&!fe.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const V4=l0.filter(t=>t!==Ft||t!==oc),M4=Object.keys(Gu).filter(t=>t!==Ft).map(t=>Object.keys(Gu[t])).flat();function L4(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,l=n===oc,c=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",f=r.prefix==="fad"||r.prefix==="fa-duotone";if(!l&&(c||u||f)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&V4.includes(n)&&(Object.keys(i).find(m=>M4.includes(m))||o.autoFetchSvg)){const m=jD.get(n).defaultShortPrefixId;r.prefix=m,r.iconName=us(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=Gr()||"fas"),r}class F4{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=Y(Y({},this.definitions[i]||{}),s[i]),th(i,s[i]);const o=Df[Ft][i];o&&th(o,s[i]),S0()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:l}=r[s],c=l[2];e[i]||(e[i]={}),c.length>0&&c.forEach(u=>{typeof u=="string"&&(e[i][u]=l)}),e[i][o]=l}),e}}let Ng=[],js={};const Ys={},U4=Object.keys(Ys);function $4(t,e){let{mixoutsTo:n}=e;return Ng=t,js={},Object.keys(Ys).forEach(r=>{U4.indexOf(r)===-1&&delete Ys[r]}),Ng.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{js[o]||(js[o]=[]),js[o].push(i[o])})}r.provides&&r.provides(Ys)}),n}function nh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(js[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Ts(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(js[t]||[]).forEach(i=>{i.apply(null,n)})}function Kr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ys[t]?Ys[t].apply(null,e):void 0}function rh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Gr();if(e)return e=us(n,e)||e,xg(C0.definitions,n,e)||xg(An.styles,n,e)}const C0=new F4,j4=()=>{fe.autoReplaceSvg=!1,fe.observeMutations=!1,Ts("noAuto")},B4={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return cr?(Ts("beforeI2svg",t),Kr("pseudoElements2svg",t),Kr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;fe.autoReplaceSvg===!1&&(fe.autoReplaceSvg=!0),fe.observeMutations=!0,T4(()=>{q4({autoReplaceSvgRoot:e}),Ts("watch",t)})}},H4={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:us(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=lc(t[0]);return{prefix:n,iconName:us(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(fe.cssPrefix,"-"))>-1||t.match(l4))){const e=cc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Gr(),iconName:us(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Gr();return{prefix:e,iconName:us(e,t)||t}}}},Jt={noAuto:j4,config:fe,dom:B4,parse:H4,library:C0,findIconDefinition:rh,toHtml:Xo},q4=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Je}=t;(Object.keys(An.styles).length>0||fe.autoFetchSvg)&&cr&&fe.autoReplaceSvg&&Jt.dom.i2svg({node:e})};function uc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Xo(n))}}),Object.defineProperty(t,"node",{get:function(){if(!cr)return;const n=Je.createElement("div");return n.innerHTML=t.html,n.children}}),t}function z4(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(Mf(o)&&n.found&&!r.found){const{width:l,height:c}=n,u={x:l/c/2,y:.5};s.style=ac(Y(Y({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function W4(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(fe.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Y(Y({},s),{},{id:o}),children:r}]}]}function Uf(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:l,maskId:c,titleId:u,extra:f,watchable:d=!1}=t,{width:m,height:E}=n.found?n:e,C=WD.includes(r),M=[fe.replacementClass,s?"".concat(fe.cssPrefix,"-").concat(s):""].filter(Z=>f.classes.indexOf(Z)===-1).filter(Z=>Z!==""||!!Z).concat(f.classes).join(" ");let U={children:[],attributes:Y(Y({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:M,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(E)})};const L=C&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/E*16*.0625,"em")}:{};d&&(U.attributes[bs]=""),l&&(U.children.push({tag:"title",attributes:{id:U.attributes["aria-labelledby"]||"title-".concat(u||xo())},children:[l]}),delete U.attributes.title);const D=Y(Y({},U),{},{prefix:r,iconName:s,main:e,mask:n,maskId:c,transform:i,symbol:o,styles:Y(Y({},L),f.styles)}),{children:B,attributes:$}=n.found&&e.found?Kr("generateAbstractMask",D)||{children:[],attributes:{}}:Kr("generateAbstractIcon",D)||{children:[],attributes:{}};return D.children=B,D.attributes=$,o?W4(D):z4(D)}function Dg(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:l=!1}=t,c=Y(Y(Y({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[bs]="");const u=Y({},o.styles);Mf(s)&&(u.transform=E4({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const f=ac(u);f.length>0&&(c.style=f);const d=[];return d.push({tag:"span",attributes:c,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function G4(t){const{content:e,title:n,extra:r}=t,s=Y(Y(Y({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=ac(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:tu}=An;function sh(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(fe.cssPrefix,"-").concat(Jc.GROUP)},children:[{tag:"path",attributes:{class:"".concat(fe.cssPrefix,"-").concat(Jc.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(fe.cssPrefix,"-").concat(Jc.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const K4={found:!1,width:512,height:512};function Q4(t,e){!f0&&!fe.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ih(t,e){let n=e;return e==="fa"&&fe.styleDefault!==null&&(e=Gr()),new Promise((r,s)=>{if(n==="fa"){const i=R0(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&tu[e]&&tu[e][t]){const i=tu[e][t];return r(sh(i))}Q4(t,e),r(Y(Y({},K4),{},{icon:fe.showMissingIcons&&t?Kr("missingIconAbstract")||{}:{}}))})}const Vg=()=>{},oh=fe.measurePerformance&&Ia&&Ia.mark&&Ia.measure?Ia:{mark:Vg,measure:Vg},qi='FA "6.7.2"',Y4=t=>(oh.mark("".concat(qi," ").concat(t," begins")),()=>x0(t)),x0=t=>{oh.mark("".concat(qi," ").concat(t," ends")),oh.measure("".concat(qi," ").concat(t),"".concat(qi," ").concat(t," begins"),"".concat(qi," ").concat(t," ends"))};var $f={begin:Y4,end:x0};const ja=()=>{};function Mg(t){return typeof(t.getAttribute?t.getAttribute(bs):null)=="string"}function X4(t){const e=t.getAttribute?t.getAttribute(Of):null,n=t.getAttribute?t.getAttribute(Nf):null;return e&&n}function J4(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(fe.replacementClass)}function Z4(){return fe.autoReplaceSvg===!0?Ba.replace:Ba[fe.autoReplaceSvg]||Ba.replace}function eV(t){return Je.createElementNS("http://www.w3.org/2000/svg",t)}function tV(t){return Je.createElement(t)}function k0(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?eV:tV}=e;if(typeof t=="string")return Je.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(k0(i,{ceFn:n}))}),r}function nV(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ba={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(k0(n),e)}),e.getAttribute(bs)===null&&fe.keepOriginalSource){let n=Je.createComment(nV(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Vf(e).indexOf(fe.replacementClass))return Ba.replace(t);const r=new RegExp("".concat(fe.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,l)=>(l===fe.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>Xo(i)).join(`
`);e.setAttribute(bs,""),e.innerHTML=s}};function Lg(t){t()}function O0(t,e){const n=typeof e=="function"?e:ja;if(t.length===0)n();else{let r=Lg;fe.mutateApproach===i4&&(r=Wr.requestAnimationFrame||Lg),r(()=>{const s=Z4(),i=$f.begin("mutate");t.map(s),i(),n()})}}let jf=!1;function N0(){jf=!0}function ah(){jf=!1}let wl=null;function Fg(t){if(!Ig||!fe.observeMutations)return;const{treeCallback:e=ja,nodeCallback:n=ja,pseudoElementsCallback:r=ja,observeMutationsRoot:s=Je}=t;wl=new Ig(i=>{if(jf)return;const o=Gr();Ei(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Mg(l.addedNodes[0])&&(fe.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&fe.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&Mg(l.target)&&~h4.indexOf(l.attributeName))if(l.attributeName==="class"&&X4(l.target)){const{prefix:c,iconName:u}=cc(Vf(l.target));l.target.setAttribute(Of,c||o),u&&l.target.setAttribute(Nf,u)}else J4(l.target)&&n(l.target)})}),cr&&wl.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function rV(){wl&&wl.disconnect()}function sV(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function iV(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=cc(Vf(t));return s.prefix||(s.prefix=Gr()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=x4(s.prefix,t.innerText)||Ff(s.prefix,eh(t.innerText))),!s.iconName&&fe.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function oV(t){const e=Ei(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return fe.autoA11y&&(n?e["aria-labelledby"]="".concat(fe.replacementClass,"-title-").concat(r||xo()):(e["aria-hidden"]="true",e.focusable="false")),e}function aV(){return{iconName:null,title:null,titleId:null,prefix:null,transform:In,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ug(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=iV(t),i=oV(t),o=nh("parseNodeAttributes",{},t);let l=e.styleParser?sV(t):[];return Y({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:In,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:i}},o)}const{styles:lV}=An;function D0(t){const e=fe.autoReplaceSvg==="nest"?Ug(t,{styleParser:!1}):Ug(t);return~e.extra.classes.indexOf(p0)?Kr("generateLayersText",t,e):Kr("generateSvgReplacementMutation",t,e)}function cV(){return[...HD,...Ku]}function $g(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!cr)return Promise.resolve();const n=Je.documentElement.classList,r=f=>n.add("".concat(Rg,"-").concat(f)),s=f=>n.remove("".concat(Rg,"-").concat(f)),i=fe.autoFetchSvg?cV():a0.concat(Object.keys(lV));i.includes("fa")||i.push("fa");const o=[".".concat(p0,":not([").concat(bs,"])")].concat(i.map(f=>".".concat(f,":not([").concat(bs,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=Ei(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),s("complete");else return Promise.resolve();const c=$f.begin("onTree"),u=l.reduce((f,d)=>{try{const m=D0(d);m&&f.push(m)}catch(m){f0||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise((f,d)=>{Promise.all(u).then(m=>{O0(m,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),f()})}).catch(m=>{c(),d(m)})})}function uV(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;D0(t).then(n=>{n&&O0([n],e)})}function hV(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:rh(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:rh(s||{})),t(r,Y(Y({},n),{},{mask:s}))}}const fV=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=In,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:l=null,classes:c=[],attributes:u={},styles:f={}}=e;if(!t)return;const{prefix:d,iconName:m,icon:E}=t;return uc(Y({type:"icon"},t),()=>(Ts("beforeDOMElementCreation",{iconDefinition:t,params:e}),fe.autoA11y&&(o?u["aria-labelledby"]="".concat(fe.replacementClass,"-title-").concat(l||xo()):(u["aria-hidden"]="true",u.focusable="false")),Uf({icons:{main:sh(E),mask:s?sh(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:m,transform:Y(Y({},In),n),symbol:r,title:o,maskId:i,titleId:l,extra:{attributes:u,styles:f,classes:c}})))};var dV={mixout(){return{icon:hV(fV)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=$g,t.nodeCallback=uV,t}}},provides(t){t.i2svg=function(e){const{node:n=Je,callback:r=()=>{}}=e;return $g(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:l,symbol:c,mask:u,maskId:f,extra:d}=n;return new Promise((m,E)=>{Promise.all([ih(r,o),u.iconName?ih(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(C=>{let[M,U]=C;m([e,Uf({icons:{main:M,mask:U},prefix:o,iconName:r,transform:l,symbol:c,maskId:f,title:s,titleId:i,extra:d,watchable:!0})])}).catch(E)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const l=ac(o);l.length>0&&(r.style=l);let c;return Mf(i)&&(c=Kr("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(c||s.icon),{children:n,attributes:r}}}},pV={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return uc({type:"layer"},()=>{Ts("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(fe.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},mV={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return uc({type:"counter",content:t},()=>(Ts("beforeDOMElementCreation",{content:t,params:e}),G4({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(fe.cssPrefix,"-layers-counter"),...r]}})))}}}},gV={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=In,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return uc({type:"text",content:t},()=>(Ts("beforeDOMElementCreation",{content:t,params:e}),Dg({content:t,transform:Y(Y({},In),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(fe.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,l=null;if(i0){const c=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/c,l=u.height/c}return fe.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Dg({content:e.innerHTML,width:o,height:l,transform:s,title:r,extra:i,watchable:!0})])}}};const _V=new RegExp('"',"ug"),jg=[1105920,1112319],Bg=Y(Y(Y(Y({},{FontAwesome:{normal:"fas",400:"fas"}}),$D),r4),YD),lh=Object.keys(Bg).reduce((t,e)=>(t[e.toLowerCase()]=Bg[e],t),{}),yV=Object.keys(lh).reduce((t,e)=>{const n=lh[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function vV(t){const e=t.replace(_V,""),n=A4(e,0),r=n>=jg[0]&&n<=jg[1],s=e.length===2?e[0]===e[1]:!1;return{value:eh(s?e[0]:e),isSecondary:r||s}}function EV(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(lh[n]||{})[s]||yV[n]}function Hg(t,e){const n="".concat(s4).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=Ei(t.children).filter(m=>m.getAttribute(Yu)===e)[0],l=Wr.getComputedStyle(t,e),c=l.getPropertyValue("font-family"),u=c.match(c4),f=l.getPropertyValue("font-weight"),d=l.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){const m=l.getPropertyValue("content");let E=EV(c,f);const{value:C,isSecondary:M}=vV(m),U=u[0].startsWith("FontAwesome");let L=Ff(E,C),D=L;if(U){const B=k4(C);B.iconName&&B.prefix&&(L=B.iconName,E=B.prefix)}if(L&&!M&&(!o||o.getAttribute(Of)!==E||o.getAttribute(Nf)!==D)){t.setAttribute(n,D),o&&t.removeChild(o);const B=aV(),{extra:$}=B;$.attributes[Yu]=e,ih(L,E).then(Z=>{const re=Uf(Y(Y({},B),{},{icons:{main:Z,mask:P0()},prefix:E,iconName:D,extra:$,watchable:!0})),P=Je.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(P,t.firstChild):t.appendChild(P),P.outerHTML=re.map(y=>Xo(y)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function wV(t){return Promise.all([Hg(t,"::before"),Hg(t,"::after")])}function bV(t){return t.parentNode!==document.head&&!~o4.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Yu)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function qg(t){if(cr)return new Promise((e,n)=>{const r=Ei(t.querySelectorAll("*")).filter(bV).map(wV),s=$f.begin("searchPseudoElements");N0(),Promise.all(r).then(()=>{s(),ah(),e()}).catch(()=>{s(),ah(),n()})})}var TV={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=qg,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Je}=e;fe.searchPseudoElements&&qg(n)}}};let zg=!1;var IV={mixout(){return{dom:{unwatch(){N0(),zg=!0}}}},hooks(){return{bootstrap(){Fg(nh("mutationObserverCallbacks",{}))},noAuto(){rV()},watch(t){const{observeMutationsRoot:e}=t;zg?ah():Fg(nh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Wg=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var AV={mixout(){return{parse:{transform:t=>Wg(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Wg(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")},m={outer:o,inner:f,path:d};return{tag:"g",attributes:Y({},m.outer),children:[{tag:"g",attributes:Y({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:Y(Y({},n.icon.attributes),m.path)}]}]}}}};const nu={x:0,y:0,width:"100%",height:"100%"};function Gg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function SV(t){return t.tag==="g"?t.children:[t]}var RV={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?cc(n.split(" ").map(s=>s.trim())):P0();return r.prefix||(r.prefix=Gr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:l}=e;const{width:c,icon:u}=s,{width:f,icon:d}=i,m=v4({transform:l,containerWidth:f,iconWidth:c}),E={tag:"rect",attributes:Y(Y({},nu),{},{fill:"white"})},C=u.children?{children:u.children.map(Gg)}:{},M={tag:"g",attributes:Y({},m.inner),children:[Gg(Y({tag:u.tag,attributes:Y(Y({},u.attributes),m.path)},C))]},U={tag:"g",attributes:Y({},m.outer),children:[M]},L="mask-".concat(o||xo()),D="clip-".concat(o||xo()),B={tag:"mask",attributes:Y(Y({},nu),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,U]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:D},children:SV(d)},B]};return n.push($,{tag:"rect",attributes:Y({fill:"currentColor","clip-path":"url(#".concat(D,")"),mask:"url(#".concat(L,")")},nu)}),{children:n,attributes:r}}}},PV={provides(t){let e=!1;Wr.matchMedia&&(e=Wr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:Y(Y({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=Y(Y({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:Y(Y({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:Y(Y({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Y(Y({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:Y(Y({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:Y(Y({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:Y(Y({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Y(Y({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},CV={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},xV=[b4,dV,pV,mV,gV,TV,IV,AV,RV,PV,CV];$4(xV,{mixoutsTo:Jt});Jt.noAuto;Jt.config;const kV=Jt.library;Jt.dom;const ch=Jt.parse;Jt.findIconDefinition;Jt.toHtml;const OV=Jt.icon;Jt.layer;Jt.text;Jt.counter;function Kg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Wn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Kg(Object(n),!0).forEach(function(r){qt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Kg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function NV(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function DV(t){var e=NV(t,"string");return typeof e=="symbol"?e:e+""}function bl(t){"@babel/helpers - typeof";return bl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bl(t)}function qt(t,e,n){return e=DV(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function VV(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function MV(t,e){if(t==null)return{};var n=VV(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var LV=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V0={exports:{}};(function(t){(function(e){var n=function(L,D,B){if(!u(D)||d(D)||m(D)||E(D)||c(D))return D;var $,Z=0,re=0;if(f(D))for($=[],re=D.length;Z<re;Z++)$.push(n(L,D[Z],B));else{$={};for(var P in D)Object.prototype.hasOwnProperty.call(D,P)&&($[L(P,B)]=n(L,D[P],B))}return $},r=function(L,D){D=D||{};var B=D.separator||"_",$=D.split||/(?=[A-Z])/;return L.split($).join(B)},s=function(L){return C(L)?L:(L=L.replace(/[\-_\s]+(.)?/g,function(D,B){return B?B.toUpperCase():""}),L.substr(0,1).toLowerCase()+L.substr(1))},i=function(L){var D=s(L);return D.substr(0,1).toUpperCase()+D.substr(1)},o=function(L,D){return r(L,D).toLowerCase()},l=Object.prototype.toString,c=function(L){return typeof L=="function"},u=function(L){return L===Object(L)},f=function(L){return l.call(L)=="[object Array]"},d=function(L){return l.call(L)=="[object Date]"},m=function(L){return l.call(L)=="[object RegExp]"},E=function(L){return l.call(L)=="[object Boolean]"},C=function(L){return L=L-0,L===L},M=function(L,D){var B=D&&"process"in D?D.process:D;return typeof B!="function"?L:function($,Z){return B($,L,Z)}},U={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(L,D){return n(M(s,D),L)},decamelizeKeys:function(L,D){return n(M(o,D),L,D)},pascalizeKeys:function(L,D){return n(M(i,D),L)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=U:e.humps=U})(LV)})(V0);var FV=V0.exports,UV=["class","style"];function $V(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=FV.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function jV(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function M0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return M0(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,u){var f=t.attributes[u];switch(u){case"class":c.class=jV(f);break;case"style":c.style=$V(f);break;default:c.attrs[u]=f}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,l=MV(n,UV);return Xs(t.tag,Wn(Wn(Wn({},e),{},{class:s.class,style:Wn(Wn({},s.style),o)},s.attrs),l),r)}var L0=!1;try{L0=!0}catch{}function BV(){if(!L0&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ru(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?qt({},t,e):{}}function HV(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},qt(qt(qt(qt(qt(qt(qt(qt(qt(qt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),qt(qt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Qg(t){if(t&&bl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ch.icon)return ch.icon(t);if(t===null)return null;if(bl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var qV=Sh({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=gt(function(){return Qg(e.icon)}),i=gt(function(){return ru("classes",HV(e))}),o=gt(function(){return ru("transform",typeof e.transform=="string"?ch.transform(e.transform):e.transform)}),l=gt(function(){return ru("mask",Qg(e.mask))}),c=gt(function(){return OV(s.value,Wn(Wn(Wn(Wn({},i.value),o.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Qn(c,function(f){if(!f)return BV("Could not find one or more icon(s)",s.value,l.value)},{immediate:!0});var u=gt(function(){return c.value?M0(c.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const zV={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]},WV=zV,GV={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},KV=GV,QV={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},YV={prefix:"fas",iconName:"file-medical",icon:[384,512,[],"f477","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM160 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z"]},XV={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},JV={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};kV.add(QV,KV,WV,YV,XV,JV);const ZV={apiKey:"AIzaSyBKiw2ibjMQB-i_sMorpK5nXyHb87_6uZA",authDomain:"x-ray-b0cb8.firebaseapp.com",projectId:"x-ray-b0cb8",storageBucket:"x-ray-b0cb8.firebasestorage.app",messagingSenderId:"382664693760",appId:"1:382664693760:web:7582abe58d70b3260f20e5",measurementId:"G-5MKNMY9VGY"},F0=Uy(ZV),Bf=cP(F0),eM=Qx(F0),ur=L1(JT),tM=ZT();ur.use(tM);ur.use(vl);ur.component("font-awesome-icon",qV);const uh=pe(null),U0=pe(!1),zi=Ho();zi.initAuth(Bf);uv(Bf,t=>{if(uh.value=t?t.uid:null,zi.user=t,zi.isAuthenticated=!!t,U0.value=!0,t){const e=vl.currentRoute.value.name;["signup","signin","resetpassword","newpassword"].includes(e)&&vl.push("/dashboard")}else uh.value=null,zi.user=null,zi.isAuthenticated=!1});ur.provide("db",eM);ur.provide("auth",Bf);ur.provide("currentUserId",uh);ur.provide("isAuthReady",U0);ur.provide("appId",typeof __app_id<"u"?__app_id:"default-app-id");ur.mount("#app");
