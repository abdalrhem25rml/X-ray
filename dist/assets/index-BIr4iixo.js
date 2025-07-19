(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function mh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const qe={},qs=[],Sn=()=>{},r1=()=>!1,Sl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),gh=t=>t.startsWith("onUpdate:"),pt=Object.assign,_h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},s1=Object.prototype.hasOwnProperty,$e=(t,e)=>s1.call(t,e),de=Array.isArray,Ws=t=>Mo(t)==="[object Map]",pi=t=>Mo(t)==="[object Set]",Md=t=>Mo(t)==="[object Date]",be=t=>typeof t=="function",rt=t=>typeof t=="string",Dn=t=>typeof t=="symbol",We=t=>t!==null&&typeof t=="object",Bg=t=>(We(t)||be(t))&&be(t.then)&&be(t.catch),Hg=Object.prototype.toString,Mo=t=>Hg.call(t),i1=t=>Mo(t).slice(8,-1),zg=t=>Mo(t)==="[object Object]",yh=t=>rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Yi=mh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},o1=/-(\w)/g,ln=Cl(t=>t.replace(o1,(e,n)=>n?n.toUpperCase():"")),a1=/\B([A-Z])/g,Ss=Cl(t=>t.replace(a1,"-$1").toLowerCase()),Rl=Cl(t=>t.charAt(0).toUpperCase()+t.slice(1)),kc=Cl(t=>t?`on${Rl(t)}`:""),Or=(t,e)=>!Object.is(t,e),ka=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},lu=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Wa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},l1=t=>{const e=rt(t)?Number(t):NaN;return isNaN(e)?t:e};let Ld;const Pl=()=>Ld||(Ld=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function kl(t){if(de(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=rt(r)?f1(r):kl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(rt(t)||We(t))return t}const c1=/;(?![^(]*\))/g,u1=/:([^]+)/,h1=/\/\*[^]*?\*\//g;function f1(t){const e={};return t.replace(h1,"").split(c1).forEach(n=>{if(n){const r=n.split(u1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function mi(t){let e="";if(rt(t))e=t;else if(de(t))for(let n=0;n<t.length;n++){const r=mi(t[n]);r&&(e+=r+" ")}else if(We(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const d1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",p1=mh(d1);function qg(t){return!!t||t===""}function m1(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Lo(t[r],e[r]);return n}function Lo(t,e){if(t===e)return!0;let n=Md(t),r=Md(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Dn(t),r=Dn(e),n||r)return t===e;if(n=de(t),r=de(e),n||r)return n&&r?m1(t,e):!1;if(n=We(t),r=We(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Lo(t[o],e[o]))return!1}}return String(t)===String(e)}function vh(t,e){return t.findIndex(n=>Lo(n,e))}const Wg=t=>!!(t&&t.__v_isRef===!0),k=t=>rt(t)?t:t==null?"":de(t)||We(t)&&(t.toString===Hg||!be(t.toString))?Wg(t)?k(t.value):JSON.stringify(t,Gg,2):String(t),Gg=(t,e)=>Wg(e)?Gg(t,e.value):Ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[xc(r,i)+" =>"]=s,n),{})}:pi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>xc(n))}:Dn(e)?xc(e):We(e)&&!de(e)&&!zg(e)?String(e):e,xc=(t,e="")=>{var n;return Dn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rt;class Kg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Rt,!e&&Rt&&(this.index=(Rt.scopes||(Rt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Rt;try{return Rt=this,e()}finally{Rt=n}}}on(){++this._on===1&&(this.prevScope=Rt,Rt=this)}off(){this._on>0&&--this._on===0&&(Rt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Qg(t){return new Kg(t)}function Yg(){return Rt}function g1(t,e=!1){Rt&&Rt.cleanups.push(t)}let Ge;const Oc=new WeakSet;class Xg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Rt&&Rt.active&&Rt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oc.has(this)&&(Oc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fd(this),e_(this);const e=Ge,n=fn;Ge=this,fn=!0;try{return this.fn()}finally{t_(this),Ge=e,fn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)bh(e);this.deps=this.depsTail=void 0,Fd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){cu(this)&&this.run()}get dirty(){return cu(this)}}let Jg=0,Xi,Ji;function Zg(t,e=!1){if(t.flags|=8,e){t.next=Ji,Ji=t;return}t.next=Xi,Xi=t}function Eh(){Jg++}function wh(){if(--Jg>0)return;if(Ji){let e=Ji;for(Ji=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Xi;){let e=Xi;for(Xi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function e_(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function t_(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),bh(r),_1(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function cu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(n_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function n_(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===mo)||(t.globalVersion=mo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!cu(t))))return;t.flags|=2;const e=t.dep,n=Ge,r=fn;Ge=t,fn=!0;try{e_(t);const s=t.fn(t._value);(e.version===0||Or(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ge=n,fn=r,t_(t),t.flags&=-3}}function bh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)bh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function _1(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let fn=!0;const r_=[];function er(){r_.push(fn),fn=!1}function tr(){const t=r_.pop();fn=t===void 0?!0:t}function Fd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ge;Ge=void 0;try{e()}finally{Ge=n}}}let mo=0;class y1{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Th{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ge||!fn||Ge===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ge)n=this.activeLink=new y1(Ge,this),Ge.deps?(n.prevDep=Ge.depsTail,Ge.depsTail.nextDep=n,Ge.depsTail=n):Ge.deps=Ge.depsTail=n,s_(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ge.depsTail,n.nextDep=void 0,Ge.depsTail.nextDep=n,Ge.depsTail=n,Ge.deps===n&&(Ge.deps=r)}return n}trigger(e){this.version++,mo++,this.notify(e)}notify(e){Eh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{wh()}}}function s_(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)s_(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ga=new WeakMap,gs=Symbol(""),uu=Symbol(""),go=Symbol("");function kt(t,e,n){if(fn&&Ge){let r=Ga.get(t);r||Ga.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Th),s.map=r,s.key=n),s.track()}}function zn(t,e,n,r,s,i){const o=Ga.get(t);if(!o){mo++;return}const l=c=>{c&&c.trigger()};if(Eh(),e==="clear")o.forEach(l);else{const c=de(t),u=c&&yh(n);if(c&&n==="length"){const h=Number(r);o.forEach((d,m)=>{(m==="length"||m===go||!Dn(m)&&m>=h)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(go)),e){case"add":c?u&&l(o.get("length")):(l(o.get(gs)),Ws(t)&&l(o.get(uu)));break;case"delete":c||(l(o.get(gs)),Ws(t)&&l(o.get(uu)));break;case"set":Ws(t)&&l(o.get(gs));break}}wh()}function v1(t,e){const n=Ga.get(t);return n&&n.get(e)}function Ms(t){const e=De(t);return e===t?e:(kt(e,"iterate",go),on(t)?e:e.map(Et))}function xl(t){return kt(t=De(t),"iterate",go),t}const E1={__proto__:null,[Symbol.iterator](){return Dc(this,Symbol.iterator,Et)},concat(...t){return Ms(this).concat(...t.map(e=>de(e)?Ms(e):e))},entries(){return Dc(this,"entries",t=>(t[1]=Et(t[1]),t))},every(t,e){return $n(this,"every",t,e,void 0,arguments)},filter(t,e){return $n(this,"filter",t,e,n=>n.map(Et),arguments)},find(t,e){return $n(this,"find",t,e,Et,arguments)},findIndex(t,e){return $n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return $n(this,"findLast",t,e,Et,arguments)},findLastIndex(t,e){return $n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return $n(this,"forEach",t,e,void 0,arguments)},includes(...t){return Nc(this,"includes",t)},indexOf(...t){return Nc(this,"indexOf",t)},join(t){return Ms(this).join(t)},lastIndexOf(...t){return Nc(this,"lastIndexOf",t)},map(t,e){return $n(this,"map",t,e,void 0,arguments)},pop(){return Fi(this,"pop")},push(...t){return Fi(this,"push",t)},reduce(t,...e){return Ud(this,"reduce",t,e)},reduceRight(t,...e){return Ud(this,"reduceRight",t,e)},shift(){return Fi(this,"shift")},some(t,e){return $n(this,"some",t,e,void 0,arguments)},splice(...t){return Fi(this,"splice",t)},toReversed(){return Ms(this).toReversed()},toSorted(t){return Ms(this).toSorted(t)},toSpliced(...t){return Ms(this).toSpliced(...t)},unshift(...t){return Fi(this,"unshift",t)},values(){return Dc(this,"values",Et)}};function Dc(t,e,n){const r=xl(t),s=r[e]();return r!==t&&!on(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const w1=Array.prototype;function $n(t,e,n,r,s,i){const o=xl(t),l=o!==t&&!on(t),c=o[e];if(c!==w1[e]){const d=c.apply(t,i);return l?Et(d):d}let u=n;o!==t&&(l?u=function(d,m){return n.call(this,Et(d),m,t)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,t)}));const h=c.call(o,u,r);return l&&s?s(h):h}function Ud(t,e,n,r){const s=xl(t);let i=n;return s!==t&&(on(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,Et(l),c,t)}),s[e](i,...r)}function Nc(t,e,n){const r=De(t);kt(r,"iterate",go);const s=r[e](...n);return(s===-1||s===!1)&&Sh(n[0])?(n[0]=De(n[0]),r[e](...n)):s}function Fi(t,e,n=[]){er(),Eh();const r=De(t)[e].apply(t,n);return wh(),tr(),r}const b1=mh("__proto__,__v_isRef,__isVue"),i_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dn));function T1(t){Dn(t)||(t=String(t));const e=De(this);return kt(e,"has",t),e.hasOwnProperty(t)}class o_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?D1:u_:i?c_:l_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=de(e);if(!s){let c;if(o&&(c=E1[n]))return c;if(n==="hasOwnProperty")return T1}const l=Reflect.get(e,n,it(e)?e:r);return(Dn(n)?i_.has(n):b1(n))||(s||kt(e,"get",n),i)?l:it(l)?o&&yh(n)?l:l.value:We(l)?s?f_(l):Cs(l):l}}class a_ extends o_{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Ur(i);if(!on(r)&&!Ur(r)&&(i=De(i),r=De(r)),!de(e)&&it(i)&&!it(r))return c?!1:(i.value=r,!0)}const o=de(e)&&yh(n)?Number(n)<e.length:$e(e,n),l=Reflect.set(e,n,r,it(e)?e:s);return e===De(s)&&(o?Or(r,i)&&zn(e,"set",n,r):zn(e,"add",n,r)),l}deleteProperty(e,n){const r=$e(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&zn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Dn(n)||!i_.has(n))&&kt(e,"has",n),r}ownKeys(e){return kt(e,"iterate",de(e)?"length":gs),Reflect.ownKeys(e)}}class I1 extends o_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const A1=new a_,S1=new I1,C1=new a_(!0);const hu=t=>t,ya=t=>Reflect.getPrototypeOf(t);function R1(t,e,n){return function(...r){const s=this.__v_raw,i=De(s),o=Ws(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),h=n?hu:e?Ka:Et;return!e&&kt(i,"iterate",c?uu:gs),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:l?[h(d[0]),h(d[1])]:h(d),done:m}},[Symbol.iterator](){return this}}}}function va(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function P1(t,e){const n={get(s){const i=this.__v_raw,o=De(i),l=De(s);t||(Or(s,l)&&kt(o,"get",s),kt(o,"get",l));const{has:c}=ya(o),u=e?hu:t?Ka:Et;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&kt(De(s),"iterate",gs),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=De(i),l=De(s);return t||(Or(s,l)&&kt(o,"has",s),kt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=De(l),u=e?hu:t?Ka:Et;return!t&&kt(c,"iterate",gs),l.forEach((h,d)=>s.call(i,u(h),u(d),o))}};return pt(n,t?{add:va("add"),set:va("set"),delete:va("delete"),clear:va("clear")}:{add(s){!e&&!on(s)&&!Ur(s)&&(s=De(s));const i=De(this);return ya(i).has.call(i,s)||(i.add(s),zn(i,"add",s,s)),this},set(s,i){!e&&!on(i)&&!Ur(i)&&(i=De(i));const o=De(this),{has:l,get:c}=ya(o);let u=l.call(o,s);u||(s=De(s),u=l.call(o,s));const h=c.call(o,s);return o.set(s,i),u?Or(i,h)&&zn(o,"set",s,i):zn(o,"add",s,i),this},delete(s){const i=De(this),{has:o,get:l}=ya(i);let c=o.call(i,s);c||(s=De(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&zn(i,"delete",s,void 0),u},clear(){const s=De(this),i=s.size!==0,o=s.clear();return i&&zn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=R1(s,t,e)}),n}function Ih(t,e){const n=P1(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get($e(n,s)&&s in r?n:r,s,i)}const k1={get:Ih(!1,!1)},x1={get:Ih(!1,!0)},O1={get:Ih(!0,!1)};const l_=new WeakMap,c_=new WeakMap,u_=new WeakMap,D1=new WeakMap;function N1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function V1(t){return t.__v_skip||!Object.isExtensible(t)?0:N1(i1(t))}function Cs(t){return Ur(t)?t:Ah(t,!1,A1,k1,l_)}function h_(t){return Ah(t,!1,C1,x1,c_)}function f_(t){return Ah(t,!0,S1,O1,u_)}function Ah(t,e,n,r,s){if(!We(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=V1(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Dr(t){return Ur(t)?Dr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ur(t){return!!(t&&t.__v_isReadonly)}function on(t){return!!(t&&t.__v_isShallow)}function Sh(t){return t?!!t.__v_raw:!1}function De(t){const e=t&&t.__v_raw;return e?De(e):t}function Ch(t){return!$e(t,"__v_skip")&&Object.isExtensible(t)&&lu(t,"__v_skip",!0),t}const Et=t=>We(t)?Cs(t):t,Ka=t=>We(t)?f_(t):t;function it(t){return t?t.__v_isRef===!0:!1}function pe(t){return d_(t,!1)}function M1(t){return d_(t,!0)}function d_(t,e){return it(t)?t:new L1(t,e)}class L1{constructor(e,n){this.dep=new Th,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:De(e),this._value=n?e:Et(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||on(e)||Ur(e);e=r?e:De(e),Or(e,n)&&(this._rawValue=e,this._value=r?e:Et(e),this.dep.trigger())}}function A(t){return it(t)?t.value:t}const F1={get:(t,e,n)=>e==="__v_raw"?t:A(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return it(s)&&!it(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function p_(t){return Dr(t)?t:new Proxy(t,F1)}function U1(t){const e=de(t)?new Array(t.length):{};for(const n in t)e[n]=j1(t,n);return e}class $1{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return v1(De(this._object),this._key)}}function j1(t,e,n){const r=t[e];return it(r)?r:new $1(t,e,n)}class B1{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Th(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=mo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ge!==this)return Zg(this,!0),!0}get value(){const e=this.dep.track();return n_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function H1(t,e,n=!1){let r,s;return be(t)?r=t:(r=t.get,s=t.set),new B1(r,s,n)}const Ea={},Qa=new WeakMap;let us;function z1(t,e=!1,n=us){if(n){let r=Qa.get(n);r||Qa.set(n,r=[]),r.push(t)}}function q1(t,e,n=qe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=U=>s?U:on(U)||s===!1||s===0?qn(U,1):qn(U);let h,d,m,_,P=!1,x=!1;if(it(t)?(d=()=>t.value,P=on(t)):Dr(t)?(d=()=>u(t),P=!0):de(t)?(x=!0,P=t.some(U=>Dr(U)||on(U)),d=()=>t.map(U=>{if(it(U))return U.value;if(Dr(U))return u(U);if(be(U))return c?c(U,2):U()})):be(t)?e?d=c?()=>c(t,2):t:d=()=>{if(m){er();try{m()}finally{tr()}}const U=us;us=h;try{return c?c(t,3,[_]):t(_)}finally{us=U}}:d=Sn,e&&s){const U=d,G=s===!0?1/0:s;d=()=>qn(U(),G)}const M=Yg(),N=()=>{h.stop(),M&&M.active&&_h(M.effects,h)};if(i&&e){const U=e;e=(...G)=>{U(...G),N()}}let O=x?new Array(t.length).fill(Ea):Ea;const L=U=>{if(!(!(h.flags&1)||!h.dirty&&!U))if(e){const G=h.run();if(s||P||(x?G.some((J,R)=>Or(J,O[R])):Or(G,O))){m&&m();const J=us;us=h;try{const R=[G,O===Ea?void 0:x&&O[0]===Ea?[]:O,_];O=G,c?c(e,3,R):e(...R)}finally{us=J}}}else h.run()};return l&&l(L),h=new Xg(d),h.scheduler=o?()=>o(L,!1):L,_=U=>z1(U,!1,h),m=h.onStop=()=>{const U=Qa.get(h);if(U){if(c)c(U,4);else for(const G of U)G();Qa.delete(h)}},e?r?L(!0):O=h.run():o?o(L.bind(null,!0),!0):h.run(),N.pause=h.pause.bind(h),N.resume=h.resume.bind(h),N.stop=N,N}function qn(t,e=1/0,n){if(e<=0||!We(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,it(t))qn(t.value,e,n);else if(de(t))for(let r=0;r<t.length;r++)qn(t[r],e,n);else if(pi(t)||Ws(t))t.forEach(r=>{qn(r,e,n)});else if(zg(t)){for(const r in t)qn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&qn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fo(t,e,n,r){try{return r?t(...r):t()}catch(s){Ol(s,e,n)}}function pn(t,e,n,r){if(be(t)){const s=Fo(t,e,n,r);return s&&Bg(s)&&s.catch(i=>{Ol(i,e,n)}),s}if(de(t)){const s=[];for(let i=0;i<t.length;i++)s.push(pn(t[i],e,n,r));return s}}function Ol(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||qe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const h=l.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,c,u)===!1)return}l=l.parent}if(i){er(),Fo(i,null,10,[t,c,u]),tr();return}}W1(t,n,s,r,o)}function W1(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ft=[];let En=-1;const Gs=[];let Tr=null,Fs=0;const m_=Promise.resolve();let Ya=null;function Dl(t){const e=Ya||m_;return t?e.then(this?t.bind(this):t):e}function G1(t){let e=En+1,n=Ft.length;for(;e<n;){const r=e+n>>>1,s=Ft[r],i=_o(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Rh(t){if(!(t.flags&1)){const e=_o(t),n=Ft[Ft.length-1];!n||!(t.flags&2)&&e>=_o(n)?Ft.push(t):Ft.splice(G1(e),0,t),t.flags|=1,g_()}}function g_(){Ya||(Ya=m_.then(y_))}function K1(t){de(t)?Gs.push(...t):Tr&&t.id===-1?Tr.splice(Fs+1,0,t):t.flags&1||(Gs.push(t),t.flags|=1),g_()}function $d(t,e,n=En+1){for(;n<Ft.length;n++){const r=Ft[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ft.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function __(t){if(Gs.length){const e=[...new Set(Gs)].sort((n,r)=>_o(n)-_o(r));if(Gs.length=0,Tr){Tr.push(...e);return}for(Tr=e,Fs=0;Fs<Tr.length;Fs++){const n=Tr[Fs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Tr=null,Fs=0}}const _o=t=>t.id==null?t.flags&2?-1:1/0:t.id;function y_(t){try{for(En=0;En<Ft.length;En++){const e=Ft[En];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Fo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;En<Ft.length;En++){const e=Ft[En];e&&(e.flags&=-2)}En=-1,Ft.length=0,__(),Ya=null,(Ft.length||Gs.length)&&y_()}}let $t=null,v_=null;function Xa(t){const e=$t;return $t=t,v_=t&&t.type.__scopeId||null,e}function $r(t,e=$t,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Xd(-1);const i=Xa(e);let o;try{o=t(...s)}finally{Xa(i),r._d&&Xd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Fe(t,e){if($t===null)return t;const n=Fl($t),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=qe]=e[s];i&&(be(i)&&(i={mounted:i,updated:i}),i.deep&&qn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function os(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(er(),pn(c,n,8,[t.el,l,t,e]),tr())}}const Q1=Symbol("_vte"),E_=t=>t.__isTeleport,Ir=Symbol("_leaveCb"),wa=Symbol("_enterCb");function Y1(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return R_(()=>{t.isMounted=!0}),P_(()=>{t.isUnmounting=!0}),t}const rn=[Function,Array],w_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rn,onEnter:rn,onAfterEnter:rn,onEnterCancelled:rn,onBeforeLeave:rn,onLeave:rn,onAfterLeave:rn,onLeaveCancelled:rn,onBeforeAppear:rn,onAppear:rn,onAfterAppear:rn,onAppearCancelled:rn},b_=t=>{const e=t.subTree;return e.component?b_(e.component):e},X1={name:"BaseTransition",props:w_,setup(t,{slots:e}){const n=Kw(),r=Y1();return()=>{const s=e.default&&A_(e.default(),!0);if(!s||!s.length)return;const i=T_(s),o=De(t),{mode:l}=o;if(r.isLeaving)return Vc(i);const c=jd(i);if(!c)return Vc(i);let u=fu(c,o,r,n,d=>u=d);c.type!==Ut&&yo(c,u);let h=n.subTree&&jd(n.subTree);if(h&&h.type!==Ut&&!fs(c,h)&&b_(n).type!==Ut){let d=fu(h,o,r,n);if(yo(h,d),l==="out-in"&&c.type!==Ut)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},Vc(i);l==="in-out"&&c.type!==Ut?d.delayLeave=(m,_,P)=>{const x=I_(r,h);x[String(h.key)]=h,m[Ir]=()=>{_(),m[Ir]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{P(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function T_(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Ut){e=n;break}}return e}const J1=X1;function I_(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function fu(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:m,onLeave:_,onAfterLeave:P,onLeaveCancelled:x,onBeforeAppear:M,onAppear:N,onAfterAppear:O,onAppearCancelled:L}=e,U=String(t.key),G=I_(n,t),J=(v,S)=>{v&&pn(v,r,9,S)},R=(v,S)=>{const I=S[1];J(v,S),de(v)?v.every(b=>b.length<=1)&&I():v.length<=1&&I()},E={mode:o,persisted:l,beforeEnter(v){let S=c;if(!n.isMounted)if(i)S=M||c;else return;v[Ir]&&v[Ir](!0);const I=G[U];I&&fs(t,I)&&I.el[Ir]&&I.el[Ir](),J(S,[v])},enter(v){let S=u,I=h,b=d;if(!n.isMounted)if(i)S=N||u,I=O||h,b=L||d;else return;let w=!1;const Ae=v[wa]=Se=>{w||(w=!0,Se?J(b,[v]):J(I,[v]),E.delayedLeave&&E.delayedLeave(),v[wa]=void 0)};S?R(S,[v,Ae]):Ae()},leave(v,S){const I=String(t.key);if(v[wa]&&v[wa](!0),n.isUnmounting)return S();J(m,[v]);let b=!1;const w=v[Ir]=Ae=>{b||(b=!0,S(),Ae?J(x,[v]):J(P,[v]),v[Ir]=void 0,G[I]===t&&delete G[I])};G[I]=t,_?R(_,[v,w]):w()},clone(v){const S=fu(v,e,n,r,s);return s&&s(S),S}};return E}function Vc(t){if(Nl(t))return t=jr(t),t.children=null,t}function jd(t){if(!Nl(t))return E_(t.type)&&t.children?T_(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&be(n.default))return n.default()}}function yo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,yo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function A_(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Gt?(o.patchFlag&128&&s++,r=r.concat(A_(o.children,e,l))):(e||o.type!==Ut)&&r.push(l!=null?jr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Ph(t,e){return be(t)?pt({name:t.name},e,{setup:t}):t}function S_(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Zi(t,e,n,r,s=!1){if(de(t)){t.forEach((P,x)=>Zi(P,e&&(de(e)?e[x]:e),n,r,s));return}if(eo(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Zi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Fl(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,h=l.refs===qe?l.refs={}:l.refs,d=l.setupState,m=De(d),_=d===qe?()=>!1:P=>$e(m,P);if(u!=null&&u!==c&&(rt(u)?(h[u]=null,_(u)&&(d[u]=null)):it(u)&&(u.value=null)),be(c))Fo(c,l,12,[o,h]);else{const P=rt(c),x=it(c);if(P||x){const M=()=>{if(t.f){const N=P?_(c)?d[c]:h[c]:c.value;s?de(N)&&_h(N,i):de(N)?N.includes(i)||N.push(i):P?(h[c]=[i],_(c)&&(d[c]=h[c])):(c.value=[i],t.k&&(h[t.k]=c.value))}else P?(h[c]=o,_(c)&&(d[c]=o)):x&&(c.value=o,t.k&&(h[t.k]=o))};o?(M.id=-1,Yt(M,n)):M()}}}Pl().requestIdleCallback;Pl().cancelIdleCallback;const eo=t=>!!t.type.__asyncLoader,Nl=t=>t.type.__isKeepAlive;function Z1(t,e){C_(t,"a",e)}function ew(t,e){C_(t,"da",e)}function C_(t,e,n=dt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Vl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Nl(s.parent.vnode)&&tw(r,e,n,s),s=s.parent}}function tw(t,e,n,r){const s=Vl(e,t,r,!0);k_(()=>{_h(r[e],s)},n)}function Vl(t,e,n=dt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{er();const l=Uo(n),c=pn(e,n,t,o);return l(),tr(),c});return r?s.unshift(i):s.push(i),i}}const lr=t=>(e,n=dt)=>{(!Eo||t==="sp")&&Vl(t,(...r)=>e(...r),n)},nw=lr("bm"),R_=lr("m"),rw=lr("bu"),sw=lr("u"),P_=lr("bum"),k_=lr("um"),iw=lr("sp"),ow=lr("rtg"),aw=lr("rtc");function lw(t,e=dt){Vl("ec",t,e)}const cw="components",x_=Symbol.for("v-ndc");function uw(t){return rt(t)?hw(cw,t,!1)||t:t||x_}function hw(t,e,n=!0,r=!1){const s=$t||dt;if(s){const i=s.type;{const l=Zw(i,!1);if(l&&(l===e||l===ln(e)||l===Rl(ln(e))))return i}const o=Bd(s[t]||i[t],e)||Bd(s.appContext[t],e);return!o&&r?i:o}}function Bd(t,e){return t&&(t[e]||t[ln(e)]||t[Rl(ln(e))])}function kh(t,e,n,r){let s;const i=n,o=de(t);if(o||rt(t)){const l=o&&Dr(t);let c=!1,u=!1;l&&(c=!on(t),u=Ur(t),t=xl(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(c?u?Ka(Et(t[h])):Et(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(We(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const h=l[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}const du=t=>t?J_(t)?Fl(t):du(t.parent):null,to=pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>du(t.parent),$root:t=>du(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>D_(t),$forceUpdate:t=>t.f||(t.f=()=>{Rh(t.update)}),$nextTick:t=>t.n||(t.n=Dl.bind(t.proxy)),$watch:t=>Dw.bind(t)}),Mc=(t,e)=>t!==qe&&!t.__isScriptSetup&&$e(t,e),fw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Mc(r,e))return o[e]=1,r[e];if(s!==qe&&$e(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&$e(u,e))return o[e]=3,i[e];if(n!==qe&&$e(n,e))return o[e]=4,n[e];pu&&(o[e]=0)}}const h=to[e];let d,m;if(h)return e==="$attrs"&&kt(t.attrs,"get",""),h(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==qe&&$e(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,$e(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Mc(s,e)?(s[e]=n,!0):r!==qe&&$e(r,e)?(r[e]=n,!0):$e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==qe&&$e(t,o)||Mc(e,o)||(l=i[0])&&$e(l,o)||$e(r,o)||$e(to,o)||$e(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:$e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Hd(t){return de(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let pu=!0;function dw(t){const e=D_(t),n=t.proxy,r=t.ctx;pu=!1,e.beforeCreate&&zd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:h,beforeMount:d,mounted:m,beforeUpdate:_,updated:P,activated:x,deactivated:M,beforeDestroy:N,beforeUnmount:O,destroyed:L,unmounted:U,render:G,renderTracked:J,renderTriggered:R,errorCaptured:E,serverPrefetch:v,expose:S,inheritAttrs:I,components:b,directives:w,filters:Ae}=e;if(u&&pw(u,r,null),o)for(const re in o){const we=o[re];be(we)&&(r[re]=we.bind(n))}if(s){const re=s.call(n,n);We(re)&&(t.data=Cs(re))}if(pu=!0,i)for(const re in i){const we=i[re],Bt=be(we)?we.bind(n,n):be(we.get)?we.get.bind(n,n):Sn,Vt=!be(we)&&be(we.set)?we.set.bind(n):Sn,Ht=Ke({get:Bt,set:Vt});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>Ht.value,set:Ne=>Ht.value=Ne})}if(l)for(const re in l)O_(l[re],r,n,re);if(c){const re=be(c)?c.call(n):c;Reflect.ownKeys(re).forEach(we=>{bn(we,re[we])})}h&&zd(h,t,"c");function oe(re,we){de(we)?we.forEach(Bt=>re(Bt.bind(n))):we&&re(we.bind(n))}if(oe(nw,d),oe(R_,m),oe(rw,_),oe(sw,P),oe(Z1,x),oe(ew,M),oe(lw,E),oe(aw,J),oe(ow,R),oe(P_,O),oe(k_,U),oe(iw,v),de(S))if(S.length){const re=t.exposed||(t.exposed={});S.forEach(we=>{Object.defineProperty(re,we,{get:()=>n[we],set:Bt=>n[we]=Bt})})}else t.exposed||(t.exposed={});G&&t.render===Sn&&(t.render=G),I!=null&&(t.inheritAttrs=I),b&&(t.components=b),w&&(t.directives=w),v&&S_(t)}function pw(t,e,n=Sn){de(t)&&(t=mu(t));for(const r in t){const s=t[r];let i;We(s)?"default"in s?i=Le(s.from||r,s.default,!0):i=Le(s.from||r):i=Le(s),it(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function zd(t,e,n){pn(de(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function O_(t,e,n,r){let s=r.includes(".")?W_(n,r):()=>n[r];if(rt(t)){const i=e[t];be(i)&&jt(s,i)}else if(be(t))jt(s,t.bind(n));else if(We(t))if(de(t))t.forEach(i=>O_(i,e,n,r));else{const i=be(t.handler)?t.handler.bind(n):e[t.handler];be(i)&&jt(s,i,t)}}function D_(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Ja(c,u,o,!0)),Ja(c,e,o)),We(e)&&i.set(e,c),c}function Ja(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ja(t,i,n,!0),s&&s.forEach(o=>Ja(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=mw[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const mw={data:qd,props:Wd,emits:Wd,methods:ji,computed:ji,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:ji,directives:ji,watch:_w,provide:qd,inject:gw};function qd(t,e){return e?t?function(){return pt(be(t)?t.call(this,this):t,be(e)?e.call(this,this):e)}:e:t}function gw(t,e){return ji(mu(t),mu(e))}function mu(t){if(de(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Lt(t,e){return t?[...new Set([].concat(t,e))]:e}function ji(t,e){return t?pt(Object.create(null),t,e):e}function Wd(t,e){return t?de(t)&&de(e)?[...new Set([...t,...e])]:pt(Object.create(null),Hd(t),Hd(e??{})):e}function _w(t,e){if(!t)return e;if(!e)return t;const n=pt(Object.create(null),t);for(const r in e)n[r]=Lt(t[r],e[r]);return n}function N_(){return{app:null,config:{isNativeTag:r1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yw=0;function vw(t,e){return function(r,s=null){be(r)||(r=pt({},r)),s!=null&&!We(s)&&(s=null);const i=N_(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:yw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:tb,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&be(h.install)?(o.add(h),h.install(u,...d)):be(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,m){if(!c){const _=u._ceVNode||Oe(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,h,m),c=!0,u._container=h,h.__vue_app__=u,Fl(_.component)}},onUnmount(h){l.push(h)},unmount(){c&&(pn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=_s;_s=u;try{return h()}finally{_s=d}}};return u}}let _s=null;function bn(t,e){if(dt){let n=dt.provides;const r=dt.parent&&dt.parent.provides;r===n&&(n=dt.provides=Object.create(r)),n[t]=e}}function Le(t,e,n=!1){const r=dt||$t;if(r||_s){let s=_s?_s._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&be(e)?e.call(r&&r.proxy):e}}function Ew(){return!!(dt||$t||_s)}const V_={},M_=()=>Object.create(V_),L_=t=>Object.getPrototypeOf(t)===V_;function ww(t,e,n,r=!1){const s={},i=M_();t.propsDefaults=Object.create(null),F_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:h_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function bw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=De(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let m=h[d];if(Ml(t.emitsOptions,m))continue;const _=e[m];if(c)if($e(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const P=ln(m);s[P]=gu(c,l,P,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{F_(t,e,s,i)&&(u=!0);let h;for(const d in l)(!e||!$e(e,d)&&((h=Ss(d))===d||!$e(e,h)))&&(c?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=gu(c,l,d,void 0,t,!0)):delete s[d]);if(i!==l)for(const d in i)(!e||!$e(e,d))&&(delete i[d],u=!0)}u&&zn(t.attrs,"set","")}function F_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Yi(c))continue;const u=e[c];let h;s&&$e(s,h=ln(c))?!i||!i.includes(h)?n[h]=u:(l||(l={}))[h]=u:Ml(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=De(n),u=l||qe;for(let h=0;h<i.length;h++){const d=i[h];n[d]=gu(s,c,d,u[d],t,!$e(u,d))}}return o}function gu(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=$e(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&be(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=Uo(s);r=u[n]=c.call(null,e),h()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Ss(n))&&(r=!0))}return r}const Tw=new WeakMap;function U_(t,e,n=!1){const r=n?Tw:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!be(t)){const h=d=>{c=!0;const[m,_]=U_(d,e,!0);pt(o,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return We(t)&&r.set(t,qs),qs;if(de(i))for(let h=0;h<i.length;h++){const d=ln(i[h]);Gd(d)&&(o[d]=qe)}else if(i)for(const h in i){const d=ln(h);if(Gd(d)){const m=i[h],_=o[d]=de(m)||be(m)?{type:m}:pt({},m),P=_.type;let x=!1,M=!0;if(de(P))for(let N=0;N<P.length;++N){const O=P[N],L=be(O)&&O.name;if(L==="Boolean"){x=!0;break}else L==="String"&&(M=!1)}else x=be(P)&&P.name==="Boolean";_[0]=x,_[1]=M,(x||$e(_,"default"))&&l.push(d)}}const u=[o,l];return We(t)&&r.set(t,u),u}function Gd(t){return t[0]!=="$"&&!Yi(t)}const xh=t=>t[0]==="_"||t==="$stable",Oh=t=>de(t)?t.map(Tn):[Tn(t)],Iw=(t,e,n)=>{if(e._n)return e;const r=$r((...s)=>Oh(e(...s)),n);return r._c=!1,r},$_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(xh(s))continue;const i=t[s];if(be(i))e[s]=Iw(s,i,r);else if(i!=null){const o=Oh(i);e[s]=()=>o}}},j_=(t,e)=>{const n=Oh(e);t.slots.default=()=>n},B_=(t,e,n)=>{for(const r in e)(n||!xh(r))&&(t[r]=e[r])},Aw=(t,e,n)=>{const r=t.slots=M_();if(t.vnode.shapeFlag&32){const s=e.__;s&&lu(r,"__",s,!0);const i=e._;i?(B_(r,e,n),n&&lu(r,"_",i,!0)):$_(e,r)}else e&&j_(t,e)},Sw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=qe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:B_(s,e,n):(i=!e.$stable,$_(e,s)),o=e}else e&&(j_(t,e),o={default:1});if(i)for(const l in s)!xh(l)&&o[l]==null&&delete s[l]},Yt=$w;function Cw(t){return Rw(t)}function Rw(t,e){const n=Pl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:h,parentNode:d,nextSibling:m,setScopeId:_=Sn,insertStaticContent:P}=t,x=(T,C,D,j=null,z=null,B=null,ee=void 0,Y=null,Q=!!C.dynamicChildren)=>{if(T===C)return;T&&!fs(T,C)&&(j=$(T),Ne(T,z,B,!0),T=null),C.patchFlag===-2&&(Q=!1,C.dynamicChildren=null);const{type:W,ref:fe,shapeFlag:Z}=C;switch(W){case Ll:M(T,C,D,j);break;case Ut:N(T,C,D,j);break;case xa:T==null&&O(C,D,j,ee);break;case Gt:b(T,C,D,j,z,B,ee,Y,Q);break;default:Z&1?G(T,C,D,j,z,B,ee,Y,Q):Z&6?w(T,C,D,j,z,B,ee,Y,Q):(Z&64||Z&128)&&W.process(T,C,D,j,z,B,ee,Y,Q,le)}fe!=null&&z?Zi(fe,T&&T.ref,B,C||T,!C):fe==null&&T&&T.ref!=null&&Zi(T.ref,null,B,T,!0)},M=(T,C,D,j)=>{if(T==null)r(C.el=l(C.children),D,j);else{const z=C.el=T.el;C.children!==T.children&&u(z,C.children)}},N=(T,C,D,j)=>{T==null?r(C.el=c(C.children||""),D,j):C.el=T.el},O=(T,C,D,j)=>{[T.el,T.anchor]=P(T.children,C,D,j,T.el,T.anchor)},L=({el:T,anchor:C},D,j)=>{let z;for(;T&&T!==C;)z=m(T),r(T,D,j),T=z;r(C,D,j)},U=({el:T,anchor:C})=>{let D;for(;T&&T!==C;)D=m(T),s(T),T=D;s(C)},G=(T,C,D,j,z,B,ee,Y,Q)=>{C.type==="svg"?ee="svg":C.type==="math"&&(ee="mathml"),T==null?J(C,D,j,z,B,ee,Y,Q):v(T,C,z,B,ee,Y,Q)},J=(T,C,D,j,z,B,ee,Y)=>{let Q,W;const{props:fe,shapeFlag:Z,transition:ue,dirs:ve}=T;if(Q=T.el=o(T.type,B,fe&&fe.is,fe),Z&8?h(Q,T.children):Z&16&&E(T.children,Q,null,j,z,Lc(T,B),ee,Y),ve&&os(T,null,j,"created"),R(Q,T,T.scopeId,ee,j),fe){for(const Ie in fe)Ie!=="value"&&!Yi(Ie)&&i(Q,Ie,null,fe[Ie],B,j);"value"in fe&&i(Q,"value",null,fe.value,B),(W=fe.onVnodeBeforeMount)&&vn(W,j,T)}ve&&os(T,null,j,"beforeMount");const ge=Pw(z,ue);ge&&ue.beforeEnter(Q),r(Q,C,D),((W=fe&&fe.onVnodeMounted)||ge||ve)&&Yt(()=>{W&&vn(W,j,T),ge&&ue.enter(Q),ve&&os(T,null,j,"mounted")},z)},R=(T,C,D,j,z)=>{if(D&&_(T,D),j)for(let B=0;B<j.length;B++)_(T,j[B]);if(z){let B=z.subTree;if(C===B||K_(B.type)&&(B.ssContent===C||B.ssFallback===C)){const ee=z.vnode;R(T,ee,ee.scopeId,ee.slotScopeIds,z.parent)}}},E=(T,C,D,j,z,B,ee,Y,Q=0)=>{for(let W=Q;W<T.length;W++){const fe=T[W]=Y?Ar(T[W]):Tn(T[W]);x(null,fe,C,D,j,z,B,ee,Y)}},v=(T,C,D,j,z,B,ee)=>{const Y=C.el=T.el;let{patchFlag:Q,dynamicChildren:W,dirs:fe}=C;Q|=T.patchFlag&16;const Z=T.props||qe,ue=C.props||qe;let ve;if(D&&as(D,!1),(ve=ue.onVnodeBeforeUpdate)&&vn(ve,D,C,T),fe&&os(C,T,D,"beforeUpdate"),D&&as(D,!0),(Z.innerHTML&&ue.innerHTML==null||Z.textContent&&ue.textContent==null)&&h(Y,""),W?S(T.dynamicChildren,W,Y,D,j,Lc(C,z),B):ee||we(T,C,Y,null,D,j,Lc(C,z),B,!1),Q>0){if(Q&16)I(Y,Z,ue,D,z);else if(Q&2&&Z.class!==ue.class&&i(Y,"class",null,ue.class,z),Q&4&&i(Y,"style",Z.style,ue.style,z),Q&8){const ge=C.dynamicProps;for(let Ie=0;Ie<ge.length;Ie++){const ke=ge[Ie],mt=Z[ke],gt=ue[ke];(gt!==mt||ke==="value")&&i(Y,ke,mt,gt,z,D)}}Q&1&&T.children!==C.children&&h(Y,C.children)}else!ee&&W==null&&I(Y,Z,ue,D,z);((ve=ue.onVnodeUpdated)||fe)&&Yt(()=>{ve&&vn(ve,D,C,T),fe&&os(C,T,D,"updated")},j)},S=(T,C,D,j,z,B,ee)=>{for(let Y=0;Y<C.length;Y++){const Q=T[Y],W=C[Y],fe=Q.el&&(Q.type===Gt||!fs(Q,W)||Q.shapeFlag&198)?d(Q.el):D;x(Q,W,fe,null,j,z,B,ee,!0)}},I=(T,C,D,j,z)=>{if(C!==D){if(C!==qe)for(const B in C)!Yi(B)&&!(B in D)&&i(T,B,C[B],null,z,j);for(const B in D){if(Yi(B))continue;const ee=D[B],Y=C[B];ee!==Y&&B!=="value"&&i(T,B,Y,ee,z,j)}"value"in D&&i(T,"value",C.value,D.value,z)}},b=(T,C,D,j,z,B,ee,Y,Q)=>{const W=C.el=T?T.el:l(""),fe=C.anchor=T?T.anchor:l("");let{patchFlag:Z,dynamicChildren:ue,slotScopeIds:ve}=C;ve&&(Y=Y?Y.concat(ve):ve),T==null?(r(W,D,j),r(fe,D,j),E(C.children||[],D,fe,z,B,ee,Y,Q)):Z>0&&Z&64&&ue&&T.dynamicChildren?(S(T.dynamicChildren,ue,D,z,B,ee,Y),(C.key!=null||z&&C===z.subTree)&&H_(T,C,!0)):we(T,C,D,fe,z,B,ee,Y,Q)},w=(T,C,D,j,z,B,ee,Y,Q)=>{C.slotScopeIds=Y,T==null?C.shapeFlag&512?z.ctx.activate(C,D,j,ee,Q):Ae(C,D,j,z,B,ee,Q):Se(T,C,Q)},Ae=(T,C,D,j,z,B,ee)=>{const Y=T.component=Gw(T,j,z);if(Nl(T)&&(Y.ctx.renderer=le),Qw(Y,!1,ee),Y.asyncDep){if(z&&z.registerDep(Y,oe,ee),!T.el){const Q=Y.subTree=Oe(Ut);N(null,Q,C,D)}}else oe(Y,T,C,D,z,B,ee)},Se=(T,C,D)=>{const j=C.component=T.component;if(Fw(T,C,D))if(j.asyncDep&&!j.asyncResolved){re(j,C,D);return}else j.next=C,j.update();else C.el=T.el,j.vnode=C},oe=(T,C,D,j,z,B,ee)=>{const Y=()=>{if(T.isMounted){let{next:Z,bu:ue,u:ve,parent:ge,vnode:Ie}=T;{const It=z_(T);if(It){Z&&(Z.el=Ie.el,re(T,Z,ee)),It.asyncDep.then(()=>{T.isUnmounted||Y()});return}}let ke=Z,mt;as(T,!1),Z?(Z.el=Ie.el,re(T,Z,ee)):Z=Ie,ue&&ka(ue),(mt=Z.props&&Z.props.onVnodeBeforeUpdate)&&vn(mt,ge,Z,Ie),as(T,!0);const gt=Qd(T),tn=T.subTree;T.subTree=gt,x(tn,gt,d(tn.el),$(tn),T,z,B),Z.el=gt.el,ke===null&&Uw(T,gt.el),ve&&Yt(ve,z),(mt=Z.props&&Z.props.onVnodeUpdated)&&Yt(()=>vn(mt,ge,Z,Ie),z)}else{let Z;const{el:ue,props:ve}=C,{bm:ge,m:Ie,parent:ke,root:mt,type:gt}=T,tn=eo(C);as(T,!1),ge&&ka(ge),!tn&&(Z=ve&&ve.onVnodeBeforeMount)&&vn(Z,ke,C),as(T,!0);{mt.ce&&mt.ce._def.shadowRoot!==!1&&mt.ce._injectChildStyle(gt);const It=T.subTree=Qd(T);x(null,It,D,j,T,z,B),C.el=It.el}if(Ie&&Yt(Ie,z),!tn&&(Z=ve&&ve.onVnodeMounted)){const It=C;Yt(()=>vn(Z,ke,It),z)}(C.shapeFlag&256||ke&&eo(ke.vnode)&&ke.vnode.shapeFlag&256)&&T.a&&Yt(T.a,z),T.isMounted=!0,C=D=j=null}};T.scope.on();const Q=T.effect=new Xg(Y);T.scope.off();const W=T.update=Q.run.bind(Q),fe=T.job=Q.runIfDirty.bind(Q);fe.i=T,fe.id=T.uid,Q.scheduler=()=>Rh(fe),as(T,!0),W()},re=(T,C,D)=>{C.component=T;const j=T.vnode.props;T.vnode=C,T.next=null,bw(T,C.props,j,D),Sw(T,C.children,D),er(),$d(T),tr()},we=(T,C,D,j,z,B,ee,Y,Q=!1)=>{const W=T&&T.children,fe=T?T.shapeFlag:0,Z=C.children,{patchFlag:ue,shapeFlag:ve}=C;if(ue>0){if(ue&128){Vt(W,Z,D,j,z,B,ee,Y,Q);return}else if(ue&256){Bt(W,Z,D,j,z,B,ee,Y,Q);return}}ve&8?(fe&16&&zt(W,z,B),Z!==W&&h(D,Z)):fe&16?ve&16?Vt(W,Z,D,j,z,B,ee,Y,Q):zt(W,z,B,!0):(fe&8&&h(D,""),ve&16&&E(Z,D,j,z,B,ee,Y,Q))},Bt=(T,C,D,j,z,B,ee,Y,Q)=>{T=T||qs,C=C||qs;const W=T.length,fe=C.length,Z=Math.min(W,fe);let ue;for(ue=0;ue<Z;ue++){const ve=C[ue]=Q?Ar(C[ue]):Tn(C[ue]);x(T[ue],ve,D,null,z,B,ee,Y,Q)}W>fe?zt(T,z,B,!0,!1,Z):E(C,D,j,z,B,ee,Y,Q,Z)},Vt=(T,C,D,j,z,B,ee,Y,Q)=>{let W=0;const fe=C.length;let Z=T.length-1,ue=fe-1;for(;W<=Z&&W<=ue;){const ve=T[W],ge=C[W]=Q?Ar(C[W]):Tn(C[W]);if(fs(ve,ge))x(ve,ge,D,null,z,B,ee,Y,Q);else break;W++}for(;W<=Z&&W<=ue;){const ve=T[Z],ge=C[ue]=Q?Ar(C[ue]):Tn(C[ue]);if(fs(ve,ge))x(ve,ge,D,null,z,B,ee,Y,Q);else break;Z--,ue--}if(W>Z){if(W<=ue){const ve=ue+1,ge=ve<fe?C[ve].el:j;for(;W<=ue;)x(null,C[W]=Q?Ar(C[W]):Tn(C[W]),D,ge,z,B,ee,Y,Q),W++}}else if(W>ue)for(;W<=Z;)Ne(T[W],z,B,!0),W++;else{const ve=W,ge=W,Ie=new Map;for(W=ge;W<=ue;W++){const _t=C[W]=Q?Ar(C[W]):Tn(C[W]);_t.key!=null&&Ie.set(_t.key,W)}let ke,mt=0;const gt=ue-ge+1;let tn=!1,It=0;const pr=new Array(gt);for(W=0;W<gt;W++)pr[W]=0;for(W=ve;W<=Z;W++){const _t=T[W];if(mt>=gt){Ne(_t,z,B,!0);continue}let nn;if(_t.key!=null)nn=Ie.get(_t.key);else for(ke=ge;ke<=ue;ke++)if(pr[ke-ge]===0&&fs(_t,C[ke])){nn=ke;break}nn===void 0?Ne(_t,z,B,!0):(pr[nn-ge]=W+1,nn>=It?It=nn:tn=!0,x(_t,C[nn],D,null,z,B,ee,Y,Q),mt++)}const Ai=tn?kw(pr):qs;for(ke=Ai.length-1,W=gt-1;W>=0;W--){const _t=ge+W,nn=C[_t],na=_t+1<fe?C[_t+1].el:j;pr[W]===0?x(null,nn,D,na,z,B,ee,Y,Q):tn&&(ke<0||W!==Ai[ke]?Ht(nn,D,na,2):ke--)}}},Ht=(T,C,D,j,z=null)=>{const{el:B,type:ee,transition:Y,children:Q,shapeFlag:W}=T;if(W&6){Ht(T.component.subTree,C,D,j);return}if(W&128){T.suspense.move(C,D,j);return}if(W&64){ee.move(T,C,D,le);return}if(ee===Gt){r(B,C,D);for(let Z=0;Z<Q.length;Z++)Ht(Q[Z],C,D,j);r(T.anchor,C,D);return}if(ee===xa){L(T,C,D);return}if(j!==2&&W&1&&Y)if(j===0)Y.beforeEnter(B),r(B,C,D),Yt(()=>Y.enter(B),z);else{const{leave:Z,delayLeave:ue,afterLeave:ve}=Y,ge=()=>{T.ctx.isUnmounted?s(B):r(B,C,D)},Ie=()=>{Z(B,()=>{ge(),ve&&ve()})};ue?ue(B,ge,Ie):Ie()}else r(B,C,D)},Ne=(T,C,D,j=!1,z=!1)=>{const{type:B,props:ee,ref:Y,children:Q,dynamicChildren:W,shapeFlag:fe,patchFlag:Z,dirs:ue,cacheIndex:ve}=T;if(Z===-2&&(z=!1),Y!=null&&(er(),Zi(Y,null,D,T,!0),tr()),ve!=null&&(C.renderCache[ve]=void 0),fe&256){C.ctx.deactivate(T);return}const ge=fe&1&&ue,Ie=!eo(T);let ke;if(Ie&&(ke=ee&&ee.onVnodeBeforeUnmount)&&vn(ke,C,T),fe&6)yn(T.component,D,j);else{if(fe&128){T.suspense.unmount(D,j);return}ge&&os(T,null,C,"beforeUnmount"),fe&64?T.type.remove(T,C,D,le,j):W&&!W.hasOnce&&(B!==Gt||Z>0&&Z&64)?zt(W,C,D,!1,!0):(B===Gt&&Z&384||!z&&fe&16)&&zt(Q,C,D),j&&et(T)}(Ie&&(ke=ee&&ee.onVnodeUnmounted)||ge)&&Yt(()=>{ke&&vn(ke,C,T),ge&&os(T,null,C,"unmounted")},D)},et=T=>{const{type:C,el:D,anchor:j,transition:z}=T;if(C===Gt){dr(D,j);return}if(C===xa){U(T);return}const B=()=>{s(D),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(T.shapeFlag&1&&z&&!z.persisted){const{leave:ee,delayLeave:Y}=z,Q=()=>ee(D,B);Y?Y(T.el,B,Q):Q()}else B()},dr=(T,C)=>{let D;for(;T!==C;)D=m(T),s(T),T=D;s(C)},yn=(T,C,D)=>{const{bum:j,scope:z,job:B,subTree:ee,um:Y,m:Q,a:W,parent:fe,slots:{__:Z}}=T;Kd(Q),Kd(W),j&&ka(j),fe&&de(Z)&&Z.forEach(ue=>{fe.renderCache[ue]=void 0}),z.stop(),B&&(B.flags|=8,Ne(ee,T,C,D)),Y&&Yt(Y,C),Yt(()=>{T.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},zt=(T,C,D,j=!1,z=!1,B=0)=>{for(let ee=B;ee<T.length;ee++)Ne(T[ee],C,D,j,z)},$=T=>{if(T.shapeFlag&6)return $(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const C=m(T.anchor||T.el),D=C&&C[Q1];return D?m(D):C};let ie=!1;const te=(T,C,D)=>{T==null?C._vnode&&Ne(C._vnode,null,null,!0):x(C._vnode||null,T,C,null,null,null,D),C._vnode=T,ie||(ie=!0,$d(),__(),ie=!1)},le={p:x,um:Ne,m:Ht,r:et,mt:Ae,mc:E,pc:we,pbc:S,n:$,o:t};return{render:te,hydrate:void 0,createApp:vw(te)}}function Lc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function as({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Pw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function H_(t,e,n=!1){const r=t.children,s=e.children;if(de(r)&&de(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Ar(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&H_(o,l)),l.type===Ll&&(l.el=o.el),l.type===Ut&&!l.el&&(l.el=o.el)}}function kw(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function z_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:z_(e)}function Kd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const xw=Symbol.for("v-scx"),Ow=()=>Le(xw);function jt(t,e,n){return q_(t,e,n)}function q_(t,e,n=qe){const{immediate:r,deep:s,flush:i,once:o}=n,l=pt({},n),c=e&&r||!e&&i!=="post";let u;if(Eo){if(i==="sync"){const _=Ow();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Sn,_.resume=Sn,_.pause=Sn,_}}const h=dt;l.call=(_,P,x)=>pn(_,h,P,x);let d=!1;i==="post"?l.scheduler=_=>{Yt(_,h&&h.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(_,P)=>{P?_():Rh(_)}),l.augmentJob=_=>{e&&(_.flags|=4),d&&(_.flags|=2,h&&(_.id=h.uid,_.i=h))};const m=q1(t,e,l);return Eo&&(u?u.push(m):c&&m()),m}function Dw(t,e,n){const r=this.proxy,s=rt(t)?t.includes(".")?W_(r,t):()=>r[t]:t.bind(r,r);let i;be(e)?i=e:(i=e.handler,n=e);const o=Uo(this),l=q_(s,i.bind(r),n);return o(),l}function W_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Nw=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ln(e)}Modifiers`]||t[`${Ss(e)}Modifiers`];function Vw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||qe;let s=n;const i=e.startsWith("update:"),o=i&&Nw(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>rt(h)?h.trim():h)),o.number&&(s=n.map(Wa)));let l,c=r[l=kc(e)]||r[l=kc(ln(e))];!c&&i&&(c=r[l=kc(Ss(e))]),c&&pn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,pn(u,t,6,s)}}function G_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!be(t)){const c=u=>{const h=G_(u,e,!0);h&&(l=!0,pt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(We(t)&&r.set(t,null),null):(de(i)?i.forEach(c=>o[c]=null):pt(o,i),We(t)&&r.set(t,o),o)}function Ml(t,e){return!t||!Sl(e)?!1:(e=e.slice(2).replace(/Once$/,""),$e(t,e[0].toLowerCase()+e.slice(1))||$e(t,Ss(e))||$e(t,e))}function Qd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:h,props:d,data:m,setupState:_,ctx:P,inheritAttrs:x}=t,M=Xa(t);let N,O;try{if(n.shapeFlag&4){const U=s||r,G=U;N=Tn(u.call(G,U,h,d,_,m,P)),O=l}else{const U=e;N=Tn(U.length>1?U(d,{attrs:l,slots:o,emit:c}):U(d,null)),O=e.props?l:Mw(l)}}catch(U){no.length=0,Ol(U,t,1),N=Oe(Ut)}let L=N;if(O&&x!==!1){const U=Object.keys(O),{shapeFlag:G}=L;U.length&&G&7&&(i&&U.some(gh)&&(O=Lw(O,i)),L=jr(L,O,!1,!0))}return n.dirs&&(L=jr(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&yo(L,n.transition),N=L,Xa(M),N}const Mw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Sl(n))&&((e||(e={}))[n]=t[n]);return e},Lw=(t,e)=>{const n={};for(const r in t)(!gh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Fw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Yd(r,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const m=h[d];if(o[m]!==r[m]&&!Ml(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Yd(r,o,u):!0:!!o;return!1}function Yd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ml(n,i))return!0}return!1}function Uw({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const K_=t=>t.__isSuspense;function $w(t,e){e&&e.pendingBranch?de(t)?e.effects.push(...t):e.effects.push(t):K1(t)}const Gt=Symbol.for("v-fgt"),Ll=Symbol.for("v-txt"),Ut=Symbol.for("v-cmt"),xa=Symbol.for("v-stc"),no=[];let Jt=null;function ne(t=!1){no.push(Jt=t?null:[])}function jw(){no.pop(),Jt=no[no.length-1]||null}let vo=1;function Xd(t,e=!1){vo+=t,t<0&&Jt&&e&&(Jt.hasOnce=!0)}function Q_(t){return t.dynamicChildren=vo>0?Jt||qs:null,jw(),vo>0&&Jt&&Jt.push(t),t}function ae(t,e,n,r,s,i){return Q_(g(t,e,n,r,s,i,!0))}function Zr(t,e,n,r,s){return Q_(Oe(t,e,n,r,s,!0))}function Za(t){return t?t.__v_isVNode===!0:!1}function fs(t,e){return t.type===e.type&&t.key===e.key}const Y_=({key:t})=>t??null,Oa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?rt(t)||it(t)||be(t)?{i:$t,r:t,k:e,f:!!n}:t:null);function g(t,e=null,n=null,r=0,s=null,i=t===Gt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Y_(e),ref:e&&Oa(e),scopeId:v_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$t};return l?(Dh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=rt(n)?8:16),vo>0&&!o&&Jt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Jt.push(c),c}const Oe=Bw;function Bw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===x_)&&(t=Ut),Za(t)){const l=jr(t,e,!0);return n&&Dh(l,n),vo>0&&!i&&Jt&&(l.shapeFlag&6?Jt[Jt.indexOf(t)]=l:Jt.push(l)),l.patchFlag=-2,l}if(eb(t)&&(t=t.__vccOpts),e){e=Hw(e);let{class:l,style:c}=e;l&&!rt(l)&&(e.class=mi(l)),We(c)&&(Sh(c)&&!de(c)&&(c=pt({},c)),e.style=kl(c))}const o=rt(t)?1:K_(t)?128:E_(t)?64:We(t)?4:be(t)?2:0;return g(t,e,n,r,s,o,i,!0)}function Hw(t){return t?Sh(t)||L_(t)?pt({},t):t:null}function jr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?zw(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Y_(u),ref:e&&e.ref?n&&i?de(i)?i.concat(Oa(e)):[i,Oa(e)]:Oa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Gt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&jr(t.ssContent),ssFallback:t.ssFallback&&jr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&yo(h,c.clone(h)),h}function je(t=" ",e=0){return Oe(Ll,null,t,e)}function X_(t,e){const n=Oe(xa,null,t);return n.staticCount=e,n}function He(t="",e=!1){return e?(ne(),Zr(Ut,null,t)):Oe(Ut,null,t)}function Tn(t){return t==null||typeof t=="boolean"?Oe(Ut):de(t)?Oe(Gt,null,t.slice()):Za(t)?Ar(t):Oe(Ll,null,String(t))}function Ar(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:jr(t)}function Dh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(de(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Dh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!L_(e)?e._ctx=$t:s===3&&$t&&($t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else be(e)?(e={default:e,_ctx:$t},n=32):(e=String(e),r&64?(n=16,e=[je(e)]):n=8);t.children=e,t.shapeFlag|=n}function zw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=mi([e.class,r.class]));else if(s==="style")e.style=kl([e.style,r.style]);else if(Sl(s)){const i=e[s],o=r[s];o&&i!==o&&!(de(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function vn(t,e,n,r=null){pn(t,e,7,[n,r])}const qw=N_();let Ww=0;function Gw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||qw,i={uid:Ww++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Kg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:U_(r,s),emitsOptions:G_(r,s),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:r.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Vw.bind(null,i),t.ce&&t.ce(i),i}let dt=null;const Kw=()=>dt||$t;let el,_u;{const t=Pl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};el=e("__VUE_INSTANCE_SETTERS__",n=>dt=n),_u=e("__VUE_SSR_SETTERS__",n=>Eo=n)}const Uo=t=>{const e=dt;return el(t),t.scope.on(),()=>{t.scope.off(),el(e)}},Jd=()=>{dt&&dt.scope.off(),el(null)};function J_(t){return t.vnode.shapeFlag&4}let Eo=!1;function Qw(t,e=!1,n=!1){e&&_u(e);const{props:r,children:s}=t.vnode,i=J_(t);ww(t,r,i,e),Aw(t,s,n||e);const o=i?Yw(t,e):void 0;return e&&_u(!1),o}function Yw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,fw);const{setup:r}=n;if(r){er();const s=t.setupContext=r.length>1?Jw(t):null,i=Uo(t),o=Fo(r,t,0,[t.props,s]),l=Bg(o);if(tr(),i(),(l||t.sp)&&!eo(t)&&S_(t),l){if(o.then(Jd,Jd),e)return o.then(c=>{Zd(t,c)}).catch(c=>{Ol(c,t,0)});t.asyncDep=o}else Zd(t,o)}else Z_(t)}function Zd(t,e,n){be(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:We(e)&&(t.setupState=p_(e)),Z_(t)}function Z_(t,e,n){const r=t.type;t.render||(t.render=r.render||Sn);{const s=Uo(t);er();try{dw(t)}finally{tr(),s()}}}const Xw={get(t,e){return kt(t,"get",""),t[e]}};function Jw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Xw),slots:t.slots,emit:t.emit,expose:e}}function Fl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(p_(Ch(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in to)return to[n](t)},has(e,n){return n in e||n in to}})):t.proxy}function Zw(t,e=!0){return be(t)?t.displayName||t.name:t.name||e&&t.__name}function eb(t){return be(t)&&"__vccOpts"in t}const Ke=(t,e)=>H1(t,e,Eo);function ti(t,e,n){const r=arguments.length;return r===2?We(e)&&!de(e)?Za(e)?Oe(t,null,[e]):Oe(t,e):Oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Za(n)&&(n=[n]),Oe(t,e,n))}const tb="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yu;const ep=typeof window<"u"&&window.trustedTypes;if(ep)try{yu=ep.createPolicy("vue",{createHTML:t=>t})}catch{}const ey=yu?t=>yu.createHTML(t):t=>t,nb="http://www.w3.org/2000/svg",rb="http://www.w3.org/1998/Math/MathML",Hn=typeof document<"u"?document:null,tp=Hn&&Hn.createElement("template"),sb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Hn.createElementNS(nb,t):e==="mathml"?Hn.createElementNS(rb,t):n?Hn.createElement(t,{is:n}):Hn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Hn.createTextNode(t),createComment:t=>Hn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Hn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{tp.innerHTML=ey(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=tp.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},yr="transition",Ui="animation",wo=Symbol("_vtc"),ty={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ib=pt({},w_,ty),ob=t=>(t.displayName="Transition",t.props=ib,t),gi=ob((t,{slots:e})=>ti(J1,ab(t),e)),ls=(t,e=[])=>{de(t)?t.forEach(n=>n(...e)):t&&t(...e)},np=t=>t?de(t)?t.some(e=>e.length>1):t.length>1:!1;function ab(t){const e={};for(const b in t)b in ty||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,P=lb(s),x=P&&P[0],M=P&&P[1],{onBeforeEnter:N,onEnter:O,onEnterCancelled:L,onLeave:U,onLeaveCancelled:G,onBeforeAppear:J=N,onAppear:R=O,onAppearCancelled:E=L}=e,v=(b,w,Ae,Se)=>{b._enterCancelled=Se,cs(b,w?h:l),cs(b,w?u:o),Ae&&Ae()},S=(b,w)=>{b._isLeaving=!1,cs(b,d),cs(b,_),cs(b,m),w&&w()},I=b=>(w,Ae)=>{const Se=b?R:O,oe=()=>v(w,b,Ae);ls(Se,[w,oe]),rp(()=>{cs(w,b?c:i),jn(w,b?h:l),np(Se)||sp(w,r,x,oe)})};return pt(e,{onBeforeEnter(b){ls(N,[b]),jn(b,i),jn(b,o)},onBeforeAppear(b){ls(J,[b]),jn(b,c),jn(b,u)},onEnter:I(!1),onAppear:I(!0),onLeave(b,w){b._isLeaving=!0;const Ae=()=>S(b,w);jn(b,d),b._enterCancelled?(jn(b,m),ap()):(ap(),jn(b,m)),rp(()=>{b._isLeaving&&(cs(b,d),jn(b,_),np(U)||sp(b,r,M,Ae))}),ls(U,[b,Ae])},onEnterCancelled(b){v(b,!1,void 0,!0),ls(L,[b])},onAppearCancelled(b){v(b,!0,void 0,!0),ls(E,[b])},onLeaveCancelled(b){S(b),ls(G,[b])}})}function lb(t){if(t==null)return null;if(We(t))return[Fc(t.enter),Fc(t.leave)];{const e=Fc(t);return[e,e]}}function Fc(t){return l1(t)}function jn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[wo]||(t[wo]=new Set)).add(e)}function cs(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[wo];n&&(n.delete(e),n.size||(t[wo]=void 0))}function rp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let cb=0;function sp(t,e,n,r){const s=t._endId=++cb,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=ub(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,m),i()},m=_=>{_.target===t&&++h>=c&&d()};setTimeout(()=>{h<c&&d()},l+1),t.addEventListener(u,m)}function ub(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${yr}Delay`),i=r(`${yr}Duration`),o=ip(s,i),l=r(`${Ui}Delay`),c=r(`${Ui}Duration`),u=ip(l,c);let h=null,d=0,m=0;e===yr?o>0&&(h=yr,d=o,m=i.length):e===Ui?u>0&&(h=Ui,d=u,m=c.length):(d=Math.max(o,u),h=d>0?o>u?yr:Ui:null,m=h?h===yr?i.length:c.length:0);const _=h===yr&&/\b(transform|all)(,|$)/.test(r(`${yr}Property`).toString());return{type:h,timeout:d,propCount:m,hasTransform:_}}function ip(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>op(n)+op(t[r])))}function op(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function ap(){return document.body.offsetHeight}function hb(t,e,n){const r=t[wo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const lp=Symbol("_vod"),fb=Symbol("_vsh"),db=Symbol(""),pb=/(^|;)\s*display\s*:/;function mb(t,e,n){const r=t.style,s=rt(n);let i=!1;if(n&&!s){if(e)if(rt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Da(r,l,"")}else for(const o in e)n[o]==null&&Da(r,o,"");for(const o in n)o==="display"&&(i=!0),Da(r,o,n[o])}else if(s){if(e!==n){const o=r[db];o&&(n+=";"+o),r.cssText=n,i=pb.test(n)}}else e&&t.removeAttribute("style");lp in t&&(t[lp]=i?r.display:"",t[fb]&&(r.display="none"))}const cp=/\s*!important$/;function Da(t,e,n){if(de(n))n.forEach(r=>Da(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=gb(t,e);cp.test(n)?t.setProperty(Ss(r),n.replace(cp,""),"important"):t[r]=n}}const up=["Webkit","Moz","ms"],Uc={};function gb(t,e){const n=Uc[e];if(n)return n;let r=ln(e);if(r!=="filter"&&r in t)return Uc[e]=r;r=Rl(r);for(let s=0;s<up.length;s++){const i=up[s]+r;if(i in t)return Uc[e]=i}return e}const hp="http://www.w3.org/1999/xlink";function fp(t,e,n,r,s,i=p1(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(hp,e.slice(6,e.length)):t.setAttributeNS(hp,e,n):n==null||i&&!qg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Dn(n)?String(n):n)}function dp(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ey(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=qg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Cr(t,e,n,r){t.addEventListener(e,n,r)}function _b(t,e,n,r){t.removeEventListener(e,n,r)}const pp=Symbol("_vei");function yb(t,e,n,r,s=null){const i=t[pp]||(t[pp]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=vb(e);if(r){const u=i[e]=bb(r,s);Cr(t,l,u,c)}else o&&(_b(t,l,o,c),i[e]=void 0)}}const mp=/(?:Once|Passive|Capture)$/;function vb(t){let e;if(mp.test(t)){e={};let r;for(;r=t.match(mp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ss(t.slice(2)),e]}let $c=0;const Eb=Promise.resolve(),wb=()=>$c||(Eb.then(()=>$c=0),$c=Date.now());function bb(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;pn(Tb(r,n.value),e,5,[r])};return n.value=t,n.attached=wb(),n}function Tb(t,e){if(de(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const gp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ib=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?hb(t,r,o):e==="style"?mb(t,n,r):Sl(e)?gh(e)||yb(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ab(t,e,r,o))?(dp(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&fp(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!rt(r))?dp(t,ln(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),fp(t,e,r,o))};function Ab(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&gp(e)&&be(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return gp(e)&&rt(n)?!1:e in t}const ni=t=>{const e=t.props["onUpdate:modelValue"]||!1;return de(e)?n=>ka(e,n):e};function Sb(t){t.target.composing=!0}function _p(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Xn=Symbol("_assign"),Ze={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Xn]=ni(s);const i=r||s.props&&s.props.type==="number";Cr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Wa(l)),t[Xn](l)}),n&&Cr(t,"change",()=>{t.value=t.value.trim()}),e||(Cr(t,"compositionstart",Sb),Cr(t,"compositionend",_p),Cr(t,"change",_p))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Xn]=ni(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Wa(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},ny={deep:!0,created(t,e,n){t[Xn]=ni(n),Cr(t,"change",()=>{const r=t._modelValue,s=To(t),i=t.checked,o=t[Xn];if(de(r)){const l=vh(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(pi(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(ry(t,i))})},mounted:yp,beforeUpdate(t,e,n){t[Xn]=ni(n),yp(t,e,n)}};function yp(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(de(e))s=vh(e,r.props.value)>-1;else if(pi(e))s=e.has(r.props.value);else{if(e===n)return;s=Lo(e,ry(t,!0))}t.checked!==s&&(t.checked=s)}const bo={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=pi(e);Cr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Wa(To(o)):To(o));t[Xn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Dl(()=>{t._assigning=!1})}),t[Xn]=ni(r)},mounted(t,{value:e}){vp(t,e)},beforeUpdate(t,e,n){t[Xn]=ni(n)},updated(t,{value:e}){t._assigning||vp(t,e)}};function vp(t,e){const n=t.multiple,r=de(e);if(!(n&&!r&&!pi(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=To(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=vh(e,l)>-1}else o.selected=e.has(l);else if(Lo(To(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function To(t){return"_value"in t?t._value:t.value}function ry(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Cb=["ctrl","shift","alt","meta"],Rb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Cb.some(n=>t[`${n}Key`]&&!e.includes(n))},bt=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=Rb[e[o]];if(l&&l(s,e))return}return t(s,...i)})},Pb=pt({patchProp:Ib},sb);let Ep;function kb(){return Ep||(Ep=Cw(Pb))}const xb=(...t)=>{const e=kb().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Db(r);if(!s)return;const i=e._component;!be(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Ob(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ob(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Db(t){return rt(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Us=typeof document<"u";function sy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Nb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&sy(t.default)}const Ue=Object.assign;function jc(t,e){const n={};for(const r in e){const s=e[r];n[r]=mn(s)?s.map(t):t(s)}return n}const ro=()=>{},mn=Array.isArray,iy=/#/g,Vb=/&/g,Mb=/\//g,Lb=/=/g,Fb=/\?/g,oy=/\+/g,Ub=/%5B/g,$b=/%5D/g,ay=/%5E/g,jb=/%60/g,ly=/%7B/g,Bb=/%7C/g,cy=/%7D/g,Hb=/%20/g;function Nh(t){return encodeURI(""+t).replace(Bb,"|").replace(Ub,"[").replace($b,"]")}function zb(t){return Nh(t).replace(ly,"{").replace(cy,"}").replace(ay,"^")}function vu(t){return Nh(t).replace(oy,"%2B").replace(Hb,"+").replace(iy,"%23").replace(Vb,"%26").replace(jb,"`").replace(ly,"{").replace(cy,"}").replace(ay,"^")}function qb(t){return vu(t).replace(Lb,"%3D")}function Wb(t){return Nh(t).replace(iy,"%23").replace(Fb,"%3F")}function Gb(t){return t==null?"":Wb(t).replace(Mb,"%2F")}function Io(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Kb=/\/$/,Qb=t=>t.replace(Kb,"");function Bc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=Zb(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Io(o)}}function Yb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function wp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Xb(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ri(e.matched[r],n.matched[s])&&uy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ri(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function uy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Jb(t[n],e[n]))return!1;return!0}function Jb(t,e){return mn(t)?bp(t,e):mn(e)?bp(e,t):t===e}function bp(t,e){return mn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Zb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const vr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ao;(function(t){t.pop="pop",t.push="push"})(Ao||(Ao={}));var so;(function(t){t.back="back",t.forward="forward",t.unknown=""})(so||(so={}));function eT(t){if(!t)if(Us){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Qb(t)}const tT=/^[^#]+#/;function nT(t,e){return t.replace(tT,"#")+e}function rT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ul=()=>({left:window.scrollX,top:window.scrollY});function sT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=rT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Tp(t,e){return(history.state?history.state.position-e:-1)+t}const Eu=new Map;function iT(t,e){Eu.set(t,e)}function oT(t){const e=Eu.get(t);return Eu.delete(t),e}let aT=()=>location.protocol+"//"+location.host;function hy(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),wp(c,"")}return wp(n,t)+r+s}function lT(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const _=hy(t,location),P=n.value,x=e.value;let M=0;if(m){if(n.value=_,e.value=m,o&&o===P){o=null;return}M=x?m.position-x.position:0}else r(_);s.forEach(N=>{N(n.value,P,{delta:M,type:Ao.pop,direction:M?M>0?so.forward:so.back:so.unknown})})};function c(){o=n.value}function u(m){s.push(m);const _=()=>{const P=s.indexOf(m);P>-1&&s.splice(P,1)};return i.push(_),_}function h(){const{history:m}=window;m.state&&m.replaceState(Ue({},m.state,{scroll:Ul()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function Ip(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ul():null}}function cT(t){const{history:e,location:n}=window,r={value:hy(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:aT()+t+c;try{e[h?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[h?"replace":"assign"](m)}}function o(c,u){const h=Ue({},e.state,Ip(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,h,!0),r.value=c}function l(c,u){const h=Ue({},s.value,e.state,{forward:c,scroll:Ul()});i(h.current,h,!0);const d=Ue({},Ip(r.value,c,null),{position:h.position+1},u);i(c,d,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function uT(t){t=eT(t);const e=cT(t),n=lT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ue({location:"",base:t,go:r,createHref:nT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function hT(t){return typeof t=="string"||t&&typeof t=="object"}function fy(t){return typeof t=="string"||typeof t=="symbol"}const dy=Symbol("");var Ap;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ap||(Ap={}));function si(t,e){return Ue(new Error,{type:t,[dy]:!0},e)}function Bn(t,e){return t instanceof Error&&dy in t&&(e==null||!!(t.type&e))}const Sp="[^/]+?",fT={sensitive:!1,strict:!1,start:!0,end:!0},dT=/[.+*?^${}()[\]/\\]/g;function pT(t,e){const n=Ue({},fT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const m=u[d];let _=40+(n.sensitive?.25:0);if(m.type===0)d||(s+="/"),s+=m.value.replace(dT,"\\$&"),_+=40;else if(m.type===1){const{value:P,repeatable:x,optional:M,regexp:N}=m;i.push({name:P,repeatable:x,optional:M});const O=N||Sp;if(O!==Sp){_+=10;try{new RegExp(`(${O})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${P}" (${O}): `+U.message)}}let L=x?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;d||(L=M&&u.length<2?`(?:/${L})`:"/"+L),M&&(L+="?"),s+=L,_+=20,M&&(_+=-8),x&&(_+=-20),O===".*"&&(_+=-50)}h.push(_)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const h=u.match(o),d={};if(!h)return null;for(let m=1;m<h.length;m++){const _=h[m]||"",P=i[m-1];d[P.name]=_&&P.repeatable?_.split("/"):_}return d}function c(u){let h="",d=!1;for(const m of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const _ of m)if(_.type===0)h+=_.value;else if(_.type===1){const{value:P,repeatable:x,optional:M}=_,N=P in u?u[P]:"";if(mn(N)&&!x)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const O=mn(N)?N.join("/"):N;if(!O)if(M)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${P}"`);h+=O}}return h||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function mT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function py(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=mT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Cp(r))return 1;if(Cp(s))return-1}return s.length-r.length}function Cp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const gT={type:0,value:""},_T=/[a-zA-Z0-9_]/;function yT(t){if(!t)return[[]];if(t==="/")return[[gT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:_T.test(c)?m():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function vT(t,e,n){const r=pT(yT(t.path),n),s=Ue(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function ET(t,e){const n=[],r=new Map;e=xp({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,m,_){const P=!_,x=Pp(d);x.aliasOf=_&&_.record;const M=xp(e,d),N=[x];if("alias"in d){const U=typeof d.alias=="string"?[d.alias]:d.alias;for(const G of U)N.push(Pp(Ue({},x,{components:_?_.record.components:x.components,path:G,aliasOf:_?_.record:x})))}let O,L;for(const U of N){const{path:G}=U;if(m&&G[0]!=="/"){const J=m.record.path,R=J[J.length-1]==="/"?"":"/";U.path=m.record.path+(G&&R+G)}if(O=vT(U,m,M),_?_.alias.push(O):(L=L||O,L!==O&&L.alias.push(O),P&&d.name&&!kp(O)&&o(d.name)),my(O)&&c(O),x.children){const J=x.children;for(let R=0;R<J.length;R++)i(J[R],O,_&&_.children[R])}_=_||O}return L?()=>{o(L)}:ro}function o(d){if(fy(d)){const m=r.get(d);m&&(r.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function c(d){const m=TT(d,n);n.splice(m,0,d),d.record.name&&!kp(d)&&r.set(d.record.name,d)}function u(d,m){let _,P={},x,M;if("name"in d&&d.name){if(_=r.get(d.name),!_)throw si(1,{location:d});M=_.record.name,P=Ue(Rp(m.params,_.keys.filter(L=>!L.optional).concat(_.parent?_.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),d.params&&Rp(d.params,_.keys.map(L=>L.name))),x=_.stringify(P)}else if(d.path!=null)x=d.path,_=n.find(L=>L.re.test(x)),_&&(P=_.parse(x),M=_.record.name);else{if(_=m.name?r.get(m.name):n.find(L=>L.re.test(m.path)),!_)throw si(1,{location:d,currentLocation:m});M=_.record.name,P=Ue({},m.params,d.params),x=_.stringify(P)}const N=[];let O=_;for(;O;)N.unshift(O.record),O=O.parent;return{name:M,path:x,params:P,matched:N,meta:bT(N)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:l,getRecordMatcher:s}}function Rp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Pp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:wT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function wT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function kp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function bT(t){return t.reduce((e,n)=>Ue(e,n.meta),{})}function xp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function TT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;py(t,e[i])<0?r=i:n=i+1}const s=IT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function IT(t){let e=t;for(;e=e.parent;)if(my(e)&&py(t,e)===0)return e}function my({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function AT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(oy," "),o=i.indexOf("="),l=Io(o<0?i:i.slice(0,o)),c=o<0?null:Io(i.slice(o+1));if(l in e){let u=e[l];mn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Op(t){let e="";for(let n in t){const r=t[n];if(n=qb(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(mn(r)?r.map(i=>i&&vu(i)):[r&&vu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function ST(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=mn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const CT=Symbol(""),Dp=Symbol(""),$l=Symbol(""),Vh=Symbol(""),wu=Symbol("");function $i(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Sr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(si(4,{from:n,to:e})):m instanceof Error?c(m):hT(m)?c(si(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(m=>c(m))})}function Hc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(sy(c)){const h=(c.__vccOpts||c)[e];h&&i.push(Sr(h,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=Nb(h)?h.default:h;o.mods[l]=h,o.components[l]=d;const _=(d.__vccOpts||d)[e];return _&&Sr(_,n,r,o,l,s)()}))}}return i}function Np(t){const e=Le($l),n=Le(Vh),r=Ke(()=>{const c=A(t.to);return e.resolve(c)}),s=Ke(()=>{const{matched:c}=r.value,{length:u}=c,h=c[u-1],d=n.matched;if(!h||!d.length)return-1;const m=d.findIndex(ri.bind(null,h));if(m>-1)return m;const _=Vp(c[u-2]);return u>1&&Vp(h)===_&&d[d.length-1].path!==_?d.findIndex(ri.bind(null,c[u-2])):m}),i=Ke(()=>s.value>-1&&OT(n.params,r.value.params)),o=Ke(()=>s.value>-1&&s.value===n.matched.length-1&&uy(n.params,r.value.params));function l(c={}){if(xT(c)){const u=e[A(t.replace)?"replace":"push"](A(t.to)).catch(ro);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function RT(t){return t.length===1?t[0]:t}const PT=Ph({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Np,setup(t,{slots:e}){const n=Cs(Np(t)),{options:r}=Le($l),s=Ke(()=>({[Mp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Mp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&RT(e.default(n));return t.custom?i:ti("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),kT=PT;function xT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function OT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!mn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Vp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Mp=(t,e,n)=>t??e??n,DT=Ph({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Le(wu),s=Ke(()=>t.route||r.value),i=Le(Dp,0),o=Ke(()=>{let u=A(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),l=Ke(()=>s.value.matched[o.value]);bn(Dp,Ke(()=>o.value+1)),bn(CT,l),bn(wu,s);const c=pe();return jt(()=>[c.value,l.value,t.name],([u,h,d],[m,_,P])=>{h&&(h.instances[d]=u,_&&_!==h&&u&&u===m&&(h.leaveGuards.size||(h.leaveGuards=_.leaveGuards),h.updateGuards.size||(h.updateGuards=_.updateGuards))),u&&h&&(!_||!ri(h,_)||!m)&&(h.enterCallbacks[d]||[]).forEach(x=>x(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=l.value,m=d&&d.components[h];if(!m)return Lp(n.default,{Component:m,route:u});const _=d.props[h],P=_?_===!0?u.params:typeof _=="function"?_(u):_:null,M=ti(m,Ue({},P,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(d.instances[h]=null)},ref:c}));return Lp(n.default,{Component:M,route:u})||M}}});function Lp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const gy=DT;function NT(t){const e=ET(t.routes,t),n=t.parseQuery||AT,r=t.stringifyQuery||Op,s=t.history,i=$i(),o=$i(),l=$i(),c=M1(vr);let u=vr;Us&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=jc.bind(null,$=>""+$),d=jc.bind(null,Gb),m=jc.bind(null,Io);function _($,ie){let te,le;return fy($)?(te=e.getRecordMatcher($),le=ie):le=$,e.addRoute(le,te)}function P($){const ie=e.getRecordMatcher($);ie&&e.removeRoute(ie)}function x(){return e.getRoutes().map($=>$.record)}function M($){return!!e.getRecordMatcher($)}function N($,ie){if(ie=Ue({},ie||c.value),typeof $=="string"){const D=Bc(n,$,ie.path),j=e.resolve({path:D.path},ie),z=s.createHref(D.fullPath);return Ue(D,j,{params:m(j.params),hash:Io(D.hash),redirectedFrom:void 0,href:z})}let te;if($.path!=null)te=Ue({},$,{path:Bc(n,$.path,ie.path).path});else{const D=Ue({},$.params);for(const j in D)D[j]==null&&delete D[j];te=Ue({},$,{params:d(D)}),ie.params=d(ie.params)}const le=e.resolve(te,ie),Ve=$.hash||"";le.params=h(m(le.params));const T=Yb(r,Ue({},$,{hash:zb(Ve),path:le.path})),C=s.createHref(T);return Ue({fullPath:T,hash:Ve,query:r===Op?ST($.query):$.query||{}},le,{redirectedFrom:void 0,href:C})}function O($){return typeof $=="string"?Bc(n,$,c.value.path):Ue({},$)}function L($,ie){if(u!==$)return si(8,{from:ie,to:$})}function U($){return R($)}function G($){return U(Ue(O($),{replace:!0}))}function J($){const ie=$.matched[$.matched.length-1];if(ie&&ie.redirect){const{redirect:te}=ie;let le=typeof te=="function"?te($):te;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=O(le):{path:le},le.params={}),Ue({query:$.query,hash:$.hash,params:le.path!=null?{}:$.params},le)}}function R($,ie){const te=u=N($),le=c.value,Ve=$.state,T=$.force,C=$.replace===!0,D=J(te);if(D)return R(Ue(O(D),{state:typeof D=="object"?Ue({},Ve,D.state):Ve,force:T,replace:C}),ie||te);const j=te;j.redirectedFrom=ie;let z;return!T&&Xb(r,le,te)&&(z=si(16,{to:j,from:le}),Ht(le,le,!0,!1)),(z?Promise.resolve(z):S(j,le)).catch(B=>Bn(B)?Bn(B,2)?B:Vt(B):we(B,j,le)).then(B=>{if(B){if(Bn(B,2))return R(Ue({replace:C},O(B.to),{state:typeof B.to=="object"?Ue({},Ve,B.to.state):Ve,force:T}),ie||j)}else B=b(j,le,!0,C,Ve);return I(j,le,B),B})}function E($,ie){const te=L($,ie);return te?Promise.reject(te):Promise.resolve()}function v($){const ie=dr.values().next().value;return ie&&typeof ie.runWithContext=="function"?ie.runWithContext($):$()}function S($,ie){let te;const[le,Ve,T]=VT($,ie);te=Hc(le.reverse(),"beforeRouteLeave",$,ie);for(const D of le)D.leaveGuards.forEach(j=>{te.push(Sr(j,$,ie))});const C=E.bind(null,$,ie);return te.push(C),zt(te).then(()=>{te=[];for(const D of i.list())te.push(Sr(D,$,ie));return te.push(C),zt(te)}).then(()=>{te=Hc(Ve,"beforeRouteUpdate",$,ie);for(const D of Ve)D.updateGuards.forEach(j=>{te.push(Sr(j,$,ie))});return te.push(C),zt(te)}).then(()=>{te=[];for(const D of T)if(D.beforeEnter)if(mn(D.beforeEnter))for(const j of D.beforeEnter)te.push(Sr(j,$,ie));else te.push(Sr(D.beforeEnter,$,ie));return te.push(C),zt(te)}).then(()=>($.matched.forEach(D=>D.enterCallbacks={}),te=Hc(T,"beforeRouteEnter",$,ie,v),te.push(C),zt(te))).then(()=>{te=[];for(const D of o.list())te.push(Sr(D,$,ie));return te.push(C),zt(te)}).catch(D=>Bn(D,8)?D:Promise.reject(D))}function I($,ie,te){l.list().forEach(le=>v(()=>le($,ie,te)))}function b($,ie,te,le,Ve){const T=L($,ie);if(T)return T;const C=ie===vr,D=Us?history.state:{};te&&(le||C?s.replace($.fullPath,Ue({scroll:C&&D&&D.scroll},Ve)):s.push($.fullPath,Ve)),c.value=$,Ht($,ie,te,C),Vt()}let w;function Ae(){w||(w=s.listen(($,ie,te)=>{if(!yn.listening)return;const le=N($),Ve=J(le);if(Ve){R(Ue(Ve,{replace:!0,force:!0}),le).catch(ro);return}u=le;const T=c.value;Us&&iT(Tp(T.fullPath,te.delta),Ul()),S(le,T).catch(C=>Bn(C,12)?C:Bn(C,2)?(R(Ue(O(C.to),{force:!0}),le).then(D=>{Bn(D,20)&&!te.delta&&te.type===Ao.pop&&s.go(-1,!1)}).catch(ro),Promise.reject()):(te.delta&&s.go(-te.delta,!1),we(C,le,T))).then(C=>{C=C||b(le,T,!1),C&&(te.delta&&!Bn(C,8)?s.go(-te.delta,!1):te.type===Ao.pop&&Bn(C,20)&&s.go(-1,!1)),I(le,T,C)}).catch(ro)}))}let Se=$i(),oe=$i(),re;function we($,ie,te){Vt($);const le=oe.list();return le.length?le.forEach(Ve=>Ve($,ie,te)):console.error($),Promise.reject($)}function Bt(){return re&&c.value!==vr?Promise.resolve():new Promise(($,ie)=>{Se.add([$,ie])})}function Vt($){return re||(re=!$,Ae(),Se.list().forEach(([ie,te])=>$?te($):ie()),Se.reset()),$}function Ht($,ie,te,le){const{scrollBehavior:Ve}=t;if(!Us||!Ve)return Promise.resolve();const T=!te&&oT(Tp($.fullPath,0))||(le||!te)&&history.state&&history.state.scroll||null;return Dl().then(()=>Ve($,ie,T)).then(C=>C&&sT(C)).catch(C=>we(C,$,ie))}const Ne=$=>s.go($);let et;const dr=new Set,yn={currentRoute:c,listening:!0,addRoute:_,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:M,getRoutes:x,resolve:N,options:t,push:U,replace:G,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:oe.add,isReady:Bt,install($){const ie=this;$.component("RouterLink",kT),$.component("RouterView",gy),$.config.globalProperties.$router=ie,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>A(c)}),Us&&!et&&c.value===vr&&(et=!0,U(s.location).catch(Ve=>{}));const te={};for(const Ve in vr)Object.defineProperty(te,Ve,{get:()=>c.value[Ve],enumerable:!0});$.provide($l,ie),$.provide(Vh,h_(te)),$.provide(wu,c);const le=$.unmount;dr.add($),$.unmount=function(){dr.delete($),dr.size<1&&(u=vr,w&&w(),w=null,c.value=vr,et=!1,re=!1),le()}}};function zt($){return $.reduce((ie,te)=>ie.then(()=>v(te)),Promise.resolve())}return yn}function VT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>ri(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>ri(u,c))||s.push(c))}return[n,r,s]}function Rs(){return Le($l)}function MT(t){return Le(Vh)}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let _y;const jl=t=>_y=t,yy=Symbol();function bu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var io;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(io||(io={}));function LT(){const t=Qg(!0),e=t.run(()=>pe({}));let n=[],r=[];const s=Ch({install(i){jl(s),s._a=i,i.provide(yy,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const vy=()=>{};function Fp(t,e,n,r=vy){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Yg()&&g1(s),s}function Ls(t,...e){t.slice().forEach(n=>{n(...e)})}const FT=t=>t(),Up=Symbol(),zc=Symbol();function Tu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];bu(s)&&bu(r)&&t.hasOwnProperty(n)&&!it(r)&&!Dr(r)?t[n]=Tu(s,r):t[n]=r}return t}const UT=Symbol();function $T(t){return!bu(t)||!Object.prototype.hasOwnProperty.call(t,UT)}const{assign:br}=Object;function jT(t){return!!(it(t)&&t.effect)}function BT(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const h=U1(n.state.value[t]);return br(h,i,Object.keys(o||{}).reduce((d,m)=>(d[m]=Ch(Ke(()=>{jl(n);const _=n._s.get(t);return o[m].call(_,_)})),d),{}))}return c=Ey(t,u,e,n,r,!0),c}function Ey(t,e,n={},r,s,i){let o;const l=br({actions:{}},n),c={deep:!0};let u,h,d=[],m=[],_;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={}),pe({});let x;function M(E){let v;u=h=!1,typeof E=="function"?(E(r.state.value[t]),v={type:io.patchFunction,storeId:t,events:_}):(Tu(r.state.value[t],E),v={type:io.patchObject,payload:E,storeId:t,events:_});const S=x=Symbol();Dl().then(()=>{x===S&&(u=!0)}),h=!0,Ls(d,v,r.state.value[t])}const N=i?function(){const{state:v}=n,S=v?v():{};this.$patch(I=>{br(I,S)})}:vy;function O(){o.stop(),d=[],m=[],r._s.delete(t)}const L=(E,v="")=>{if(Up in E)return E[zc]=v,E;const S=function(){jl(r);const I=Array.from(arguments),b=[],w=[];function Ae(re){b.push(re)}function Se(re){w.push(re)}Ls(m,{args:I,name:S[zc],store:G,after:Ae,onError:Se});let oe;try{oe=E.apply(this&&this.$id===t?this:G,I)}catch(re){throw Ls(w,re),re}return oe instanceof Promise?oe.then(re=>(Ls(b,re),re)).catch(re=>(Ls(w,re),Promise.reject(re))):(Ls(b,oe),oe)};return S[Up]=!0,S[zc]=v,S},U={_p:r,$id:t,$onAction:Fp.bind(null,m),$patch:M,$reset:N,$subscribe(E,v={}){const S=Fp(d,E,v.detached,()=>I()),I=o.run(()=>jt(()=>r.state.value[t],b=>{(v.flush==="sync"?h:u)&&E({storeId:t,type:io.direct,events:_},b)},br({},c,v)));return S},$dispose:O},G=Cs(U);r._s.set(t,G);const R=(r._a&&r._a.runWithContext||FT)(()=>r._e.run(()=>(o=Qg()).run(()=>e({action:L}))));for(const E in R){const v=R[E];if(it(v)&&!jT(v)||Dr(v))i||(P&&$T(v)&&(it(v)?v.value=P[E]:Tu(v,P[E])),r.state.value[t][E]=v);else if(typeof v=="function"){const S=L(v,E);R[E]=S,l.actions[E]=v}}return br(G,R),br(De(G),R),Object.defineProperty(G,"$state",{get:()=>r.state.value[t],set:E=>{M(v=>{br(v,E)})}}),r._p.forEach(E=>{br(G,o.run(()=>E({store:G,app:r._a,pinia:r,options:l})))}),P&&i&&n.hydrate&&n.hydrate(G.$state,P),u=!0,h=!0,G}/*! #__NO_SIDE_EFFECTS__ */function HT(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const c=Ew();return o=o||(c?Le(yy,null):null),o&&jl(o),o=_y,o._s.has(t)||(s?Ey(t,e,r,o):BT(t,r,o)),o._s.get(t)}return i.$id=t,i}const zT=()=>{};var $p={};/**
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
 */const wy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},qT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},by={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,h=i>>2,d=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),r.push(n[h],n[d],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||d==null)throw new WT;const m=i<<2|l>>4;if(r.push(m),u!==64){const _=l<<4&240|u>>2;if(r.push(_),d!==64){const P=u<<6&192|d;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class WT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const GT=function(t){const e=wy(t);return by.encodeByteArray(e,!0)},tl=function(t){return GT(t).replace(/\./g,"")},Ty=function(t){try{return by.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function KT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const QT=()=>KT().__FIREBASE_DEFAULTS__,YT=()=>{if(typeof process>"u"||typeof $p>"u")return;const t=$p.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},XT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ty(t[1]);return e&&JSON.parse(e)},Bl=()=>{try{return zT()||QT()||YT()||XT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Iy=t=>{var e,n;return(n=(e=Bl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},JT=t=>{const e=Iy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ay=()=>{var t;return(t=Bl())===null||t===void 0?void 0:t.config},Sy=t=>{var e;return(e=Bl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ZT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _i(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Cy(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function eI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[tl(JSON.stringify(n)),tl(JSON.stringify(o)),""].join(".")}const oo={};function tI(){const t={prod:[],emulator:[]};for(const e of Object.keys(oo))oo[e]?t.emulator.push(e):t.prod.push(e);return t}function nI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let jp=!1;function Ry(t,e){if(typeof window>"u"||typeof document>"u"||!_i(window.location.host)||oo[t]===e||oo[t]||jp)return;oo[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=tI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{jp=!0,o()},m}function h(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function d(){const m=nI(r),_=n("text"),P=document.getElementById(_)||document.createElement("span"),x=n("learnmore"),M=document.getElementById(x)||document.createElement("a"),N=n("preprendIcon"),O=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const L=m.element;l(L),h(M,x);const U=u();c(O,N),L.append(O,P,M,U),document.body.appendChild(L)}i?(P.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(O.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function Ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ot())}function sI(){var t;const e=(t=Bl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function iI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function oI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lI(){const t=Ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cI(){return!sI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function uI(){try{return typeof indexedDB=="object"}catch{return!1}}function hI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const fI="FirebaseError";class cr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fI,Object.setPrototypeOf(this,cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$o.prototype.create)}}class $o{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?dI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new cr(s,l,r)}}function dI(t,e){return t.replace(pI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const pI=/\{\$([^}]+)}/g;function mI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Br(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Bp(i)&&Bp(o)){if(!Br(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Bp(t){return t!==null&&typeof t=="object"}/**
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
 */function jo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Hi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gI(t,e){const n=new _I(t,e);return n.subscribe.bind(n)}class _I{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=qc),s.error===void 0&&(s.error=qc),s.complete===void 0&&(s.complete=qc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qc(){}/**
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
 */function ht(t){return t&&t._delegate?t._delegate:t}class vs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hs="[DEFAULT]";/**
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
 */class vI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ZT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wI(e))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hs){return this.instances.has(e)}getOptions(e=hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:EI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hs){return this.component?this.component.multipleInstances?e:hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function EI(t){return t===hs?void 0:t}function wI(t){return t.instantiationMode==="EAGER"}/**
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
 */class bI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const TI={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},II=Re.INFO,AI={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},SI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=AI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mh{constructor(e){this.name=e,this._logLevel=II,this._logHandler=SI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const CI=(t,e)=>e.some(n=>t instanceof n);let Hp,zp;function RI(){return Hp||(Hp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PI(){return zp||(zp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Py=new WeakMap,Iu=new WeakMap,ky=new WeakMap,Wc=new WeakMap,Lh=new WeakMap;function kI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Nr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Py.set(n,t)}).catch(()=>{}),Lh.set(e,t),e}function xI(t){if(Iu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Iu.set(t,e)}let Au={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Iu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ky.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OI(t){Au=t(Au)}function DI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gc(this),e,...n);return ky.set(r,e.sort?e.sort():[e]),Nr(r)}:PI().includes(t)?function(...e){return t.apply(Gc(this),e),Nr(Py.get(this))}:function(...e){return Nr(t.apply(Gc(this),e))}}function NI(t){return typeof t=="function"?DI(t):(t instanceof IDBTransaction&&xI(t),CI(t,RI())?new Proxy(t,Au):t)}function Nr(t){if(t instanceof IDBRequest)return kI(t);if(Wc.has(t))return Wc.get(t);const e=NI(t);return e!==t&&(Wc.set(t,e),Lh.set(e,t)),e}const Gc=t=>Lh.get(t);function VI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Nr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Nr(o.result),c.oldVersion,c.newVersion,Nr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const MI=["get","getKey","getAll","getAllKeys","count"],LI=["put","add","delete","clear"],Kc=new Map;function qp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kc.get(e))return Kc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=LI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||MI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Kc.set(e,i),i}OI(t=>({...t,get:(e,n,r)=>qp(e,n)||t.get(e,n,r),has:(e,n)=>!!qp(e,n)||t.has(e,n)}));/**
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
 */class FI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(UI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function UI(t){const e=t.getComponent();return e?.type==="VERSION"}const Su="@firebase/app",Wp="0.13.2";/**
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
 */const nr=new Mh("@firebase/app"),$I="@firebase/app-compat",jI="@firebase/analytics-compat",BI="@firebase/analytics",HI="@firebase/app-check-compat",zI="@firebase/app-check",qI="@firebase/auth",WI="@firebase/auth-compat",GI="@firebase/database",KI="@firebase/data-connect",QI="@firebase/database-compat",YI="@firebase/functions",XI="@firebase/functions-compat",JI="@firebase/installations",ZI="@firebase/installations-compat",eA="@firebase/messaging",tA="@firebase/messaging-compat",nA="@firebase/performance",rA="@firebase/performance-compat",sA="@firebase/remote-config",iA="@firebase/remote-config-compat",oA="@firebase/storage",aA="@firebase/storage-compat",lA="@firebase/firestore",cA="@firebase/ai",uA="@firebase/firestore-compat",hA="firebase",fA="11.10.0";/**
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
 */const Cu="[DEFAULT]",dA={[Su]:"fire-core",[$I]:"fire-core-compat",[BI]:"fire-analytics",[jI]:"fire-analytics-compat",[zI]:"fire-app-check",[HI]:"fire-app-check-compat",[qI]:"fire-auth",[WI]:"fire-auth-compat",[GI]:"fire-rtdb",[KI]:"fire-data-connect",[QI]:"fire-rtdb-compat",[YI]:"fire-fn",[XI]:"fire-fn-compat",[JI]:"fire-iid",[ZI]:"fire-iid-compat",[eA]:"fire-fcm",[tA]:"fire-fcm-compat",[nA]:"fire-perf",[rA]:"fire-perf-compat",[sA]:"fire-rc",[iA]:"fire-rc-compat",[oA]:"fire-gcs",[aA]:"fire-gcs-compat",[lA]:"fire-fst",[uA]:"fire-fst-compat",[cA]:"fire-vertex","fire-js":"fire-js",[hA]:"fire-js-all"};/**
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
 */const nl=new Map,pA=new Map,Ru=new Map;function Gp(t,e){try{t.container.addComponent(e)}catch(n){nr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ii(t){const e=t.name;if(Ru.has(e))return nr.debug(`There were multiple attempts to register component ${e}.`),!1;Ru.set(e,t);for(const n of nl.values())Gp(n,t);for(const n of pA.values())Gp(n,t);return!0}function Fh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const mA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vr=new $o("app","Firebase",mA);/**
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
 */class gA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vr.create("app-deleted",{appName:this._name})}}/**
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
 */const yi=fA;function xy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cu,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Vr.create("bad-app-name",{appName:String(s)});if(n||(n=Ay()),!n)throw Vr.create("no-options");const i=nl.get(s);if(i){if(Br(n,i.options)&&Br(r,i.config))return i;throw Vr.create("duplicate-app",{appName:s})}const o=new bI(s);for(const c of Ru.values())o.addComponent(c);const l=new gA(n,r,o);return nl.set(s,l),l}function Oy(t=Cu){const e=nl.get(t);if(!e&&t===Cu&&Ay())return xy();if(!e)throw Vr.create("no-app",{appName:t});return e}function Mr(t,e,n){var r;let s=(r=dA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nr.warn(l.join(" "));return}ii(new vs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const _A="firebase-heartbeat-database",yA=1,So="firebase-heartbeat-store";let Qc=null;function Dy(){return Qc||(Qc=VI(_A,yA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(So)}catch(n){console.warn(n)}}}}).catch(t=>{throw Vr.create("idb-open",{originalErrorMessage:t.message})})),Qc}async function vA(t){try{const n=(await Dy()).transaction(So),r=await n.objectStore(So).get(Ny(t));return await n.done,r}catch(e){if(e instanceof cr)nr.warn(e.message);else{const n=Vr.create("idb-get",{originalErrorMessage:e?.message});nr.warn(n.message)}}}async function Kp(t,e){try{const r=(await Dy()).transaction(So,"readwrite");await r.objectStore(So).put(e,Ny(t)),await r.done}catch(n){if(n instanceof cr)nr.warn(n.message);else{const r=Vr.create("idb-set",{originalErrorMessage:n?.message});nr.warn(r.message)}}}function Ny(t){return`${t.name}!${t.options.appId}`}/**
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
 */const EA=1024,wA=30;class bA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new IA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Qp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>wA){const o=AA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){nr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qp(),{heartbeatsToSend:r,unsentEntries:s}=TA(this._heartbeatsCache.heartbeats),i=tl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return nr.warn(n),""}}}function Qp(){return new Date().toISOString().substring(0,10)}function TA(t,e=EA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Yp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Yp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class IA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uI()?hI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vA(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Yp(t){return tl(JSON.stringify({version:2,heartbeats:t})).length}function AA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function SA(t){ii(new vs("platform-logger",e=>new FI(e),"PRIVATE")),ii(new vs("heartbeat",e=>new bA(e),"PRIVATE")),Mr(Su,Wp,t),Mr(Su,Wp,"esm2017"),Mr("fire-js","")}SA("");function Uh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Vy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CA=Vy,My=new $o("auth","Firebase",Vy());/**
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
 */const rl=new Mh("@firebase/auth");function RA(t,...e){rl.logLevel<=Re.WARN&&rl.warn(`Auth (${yi}): ${t}`,...e)}function Na(t,...e){rl.logLevel<=Re.ERROR&&rl.error(`Auth (${yi}): ${t}`,...e)}/**
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
 */function cn(t,...e){throw jh(t,...e)}function dn(t,...e){return jh(t,...e)}function $h(t,e,n){const r=Object.assign(Object.assign({},CA()),{[e]:n});return new $o("auth","Firebase",r).create(e,{appName:t.name})}function Jn(t){return $h(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function PA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&cn(t,"argument-error"),$h(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return My.create(t,...e)}function _e(t,e,...n){if(!t)throw jh(e,...n)}function Qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Na(e),new Error(e)}function rr(t,e){t||Qn(e)}/**
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
 */function Pu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kA(){return Xp()==="http:"||Xp()==="https:"}function Xp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function xA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kA()||oI()||"connection"in navigator)?navigator.onLine:!0}function OA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,rr(n>e,"Short delay should be less than long delay!"),this.isMobile=rI()||aI()}get(){return xA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bh(t,e){rr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ly{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const DA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const NA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],VA=new Bo(3e4,6e4);function Mn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _n(t,e,n,r,s={}){return Fy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=jo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return iI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&_i(t.emulatorConfig.host)&&(u.credentials="include"),Ly.fetch()(await Uy(t,t.config.apiHost,n,l),u)})}async function Fy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},DA),e);try{const s=new LA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ba(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ba(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ba(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ba(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $h(t,h,u);cn(t,h)}}catch(s){if(s instanceof cr)throw s;cn(t,"network-request-failed",{message:String(s)})}}async function Ho(t,e,n,r,s={}){const i=await _n(t,e,n,r,s);return"mfaPendingCredential"in i&&cn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Uy(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Bh(t.config,s):`${t.config.apiScheme}://${s}`;return NA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function MA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class LA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),VA.get())})}}function ba(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=dn(t,e,r);return s.customData._tokenResponse=n,s}function Jp(t){return t!==void 0&&t.enterprise!==void 0}class FA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return MA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function UA(t,e){return _n(t,"GET","/v2/recaptchaConfig",Mn(t,e))}/**
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
 */async function $A(t,e){return _n(t,"POST","/v1/accounts:delete",e)}async function sl(t,e){return _n(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ao(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jA(t,e=!1){const n=ht(t),r=await n.getIdToken(e),s=Hh(r);_e(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:ao(Yc(s.auth_time)),issuedAtTime:ao(Yc(s.iat)),expirationTime:ao(Yc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Yc(t){return Number(t)*1e3}function Hh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Na("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ty(n);return s?JSON.parse(s):(Na("Failed to decode base64 JWT payload"),null)}catch(s){return Na("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Zp(t){const e=Hh(t);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function oi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cr&&BA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function BA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class HA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ku{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ao(this.lastLoginAt),this.creationTime=ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function il(t){var e;const n=t.auth,r=await t.getIdToken(),s=await oi(t,sl(n,{idToken:r}));_e(s?.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?$y(i.providerUserInfo):[],l=qA(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!l?.length,h=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new ku(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function zA(t){const e=ht(t);await il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $y(t){return t.map(e=>{var{providerId:n}=e,r=Uh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function WA(t,e){const n=await Fy(t,{},async()=>{const r=jo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Uy(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&_i(t.emulatorConfig.host)&&(c.credentials="include"),Ly.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GA(t,e){return _n(t,"POST","/v2/accounts:revokeToken",Mn(t,e))}/**
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
 */class Ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const n=Zp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await WA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ks;return r&&(_e(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(_e(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(_e(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ks,this.toJSON())}_performRefresh(){return Qn("not implemented")}}/**
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
 */function Er(t,e){_e(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Uh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ku(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await oi(this,this.stsTokenManager.getToken(this.auth,e));return _e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jA(this,e)}reload(){return zA(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await il(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(Jn(this.auth));const e=await this.getIdToken();return await oi(this,$A(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,N=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:L,emailVerified:U,isAnonymous:G,providerData:J,stsTokenManager:R}=n;_e(L&&R,e,"internal-error");const E=Ks.fromJSON(this.name,R);_e(typeof L=="string",e,"internal-error"),Er(d,e.name),Er(m,e.name),_e(typeof U=="boolean",e,"internal-error"),_e(typeof G=="boolean",e,"internal-error"),Er(_,e.name),Er(P,e.name),Er(x,e.name),Er(M,e.name),Er(N,e.name),Er(O,e.name);const v=new hn({uid:L,auth:e,email:m,emailVerified:U,displayName:d,isAnonymous:G,photoURL:P,phoneNumber:_,tenantId:x,stsTokenManager:E,createdAt:N,lastLoginAt:O});return J&&Array.isArray(J)&&(v.providerData=J.map(S=>Object.assign({},S))),M&&(v._redirectEventId=M),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ks;s.updateFromServerResponse(n);const i=new hn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await il(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];_e(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?$y(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,l=new Ks;l.updateFromIdToken(r);const c=new hn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ku(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
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
 */const em=new Map;function Yn(t){rr(t instanceof Function,"Expected a class definition");let e=em.get(t);return e?(rr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,em.set(t,e),e)}/**
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
 */class jy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jy.type="NONE";const tm=jy;/**
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
 */function Va(t,e,n){return`firebase:${t}:${e}:${n}`}class Qs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Va(this.userKey,s.apiKey,i),this.fullPersistenceKey=Va("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await sl(this.auth,{idToken:e}).catch(()=>{});return n?hn._fromGetAccountInfoResponse(this.auth,n,e):null}return hn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qs(Yn(tm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Yn(tm);const o=Va(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const m=await sl(e,{idToken:h}).catch(()=>{});if(!m)break;d=await hn._fromGetAccountInfoResponse(e,m,h)}else d=hn._fromJSON(e,h);u!==i&&(l=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Qs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Qs(i,e,r))}}/**
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
 */function nm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(By(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gy(e))return"Blackberry";if(Ky(e))return"Webos";if(Hy(e))return"Safari";if((e.includes("chrome/")||zy(e))&&!e.includes("edge/"))return"Chrome";if(Wy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function By(t=Ot()){return/firefox\//i.test(t)}function Hy(t=Ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zy(t=Ot()){return/crios\//i.test(t)}function qy(t=Ot()){return/iemobile/i.test(t)}function Wy(t=Ot()){return/android/i.test(t)}function Gy(t=Ot()){return/blackberry/i.test(t)}function Ky(t=Ot()){return/webos/i.test(t)}function zh(t=Ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KA(t=Ot()){var e;return zh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QA(){return lI()&&document.documentMode===10}function Qy(t=Ot()){return zh(t)||Wy(t)||Ky(t)||Gy(t)||/windows phone/i.test(t)||qy(t)}/**
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
 */function Yy(t,e=[]){let n;switch(t){case"Browser":n=nm(Ot());break;case"Worker":n=`${nm(Ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${r}`}/**
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
 */class YA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function XA(t,e={}){return _n(t,"GET","/v2/passwordPolicy",Mn(t,e))}/**
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
 */const JA=6;class ZA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:JA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class eS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rm(this),this.idTokenSubscription=new rm(this),this.beforeStateQueue=new YA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=My,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Qs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await sl(this,{idToken:e}),r=await hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&c?.user&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await il(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xt(this.app))return Promise.reject(Jn(this));const n=e?ht(e):null;return n&&_e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(Jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xt(this.app)?Promise.reject(Jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await XA(this),n=new ZA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $o("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await GA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yn(e)||this._popupRedirectResolver;_e(n,this,"argument-error"),this.redirectPersistenceManager=await Qs.create(this,[Yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&RA(`Error while retrieving App Check token: ${n.error}`),n?.token}}function ur(t){return ht(t)}class rm{constructor(e){this.auth=e,this.observer=null,this.addObserver=gI(n=>this.observer=n)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Hl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tS(t){Hl=t}function Xy(t){return Hl.loadJS(t)}function nS(){return Hl.recaptchaEnterpriseScript}function rS(){return Hl.gapiScript}function sS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class iS{constructor(){this.enterprise=new oS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class oS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const aS="recaptcha-enterprise",Jy="NO_RECAPTCHA";class lS{constructor(e){this.type=aS,this.auth=ur(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{UA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new FA(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Jp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Jy)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new iS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Jp(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=nS();c.length!==0&&(c+=l),Xy(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function sm(t,e,n,r=!1,s=!1){const i=new lS(t);let o;if(s)o=Jy;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ol(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await sm(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await sm(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function cS(t,e){const n=Fh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Br(i,e??{}))return s;cn(s,"already-initialized")}return n.initialize({options:e})}function uS(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Yn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function hS(t,e,n){const r=ur(t);_e(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Zy(e),{host:o,port:l}=fS(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){_e(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),_e(Br(u,r.config.emulator)&&Br(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,_i(o)?(Cy(`${i}//${o}${c}`),Ry("Auth",!0)):dS()}function Zy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fS(t){const e=Zy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:im(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:im(o)}}}function im(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class qh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qn("not implemented")}_getIdTokenResponse(e){return Qn("not implemented")}_linkToIdToken(e,n){return Qn("not implemented")}_getReauthenticationResolver(e){return Qn("not implemented")}}/**
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
 */async function pS(t,e){return _n(t,"POST","/v1/accounts:resetPassword",Mn(t,e))}async function mS(t,e){return _n(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function gS(t,e){return Ho(t,"POST","/v1/accounts:signInWithPassword",Mn(t,e))}async function _S(t,e){return _n(t,"POST","/v1/accounts:sendOobCode",Mn(t,e))}async function yS(t,e){return _S(t,e)}/**
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
 */async function vS(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",Mn(t,e))}async function ES(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",Mn(t,e))}/**
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
 */class Co extends qh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Co(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Co(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ol(e,n,"signInWithPassword",gS);case"emailLink":return vS(e,{email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ol(e,r,"signUpPassword",mS);case"emailLink":return ES(e,{idToken:n,email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ys(t,e){return Ho(t,"POST","/v1/accounts:signInWithIdp",Mn(t,e))}/**
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
 */const wS="http://localhost";class Es extends qh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Uh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Es(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ys(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ys(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ys(e,n)}buildRequest(){const e={requestUri:wS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jo(n)}return e}}/**
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
 */function bS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TS(t){const e=Bi(Hi(t)).link,n=e?Bi(Hi(e)).deep_link_id:null,r=Bi(Hi(t)).deep_link_id;return(r?Bi(Hi(r)).link:null)||r||n||e||t}class Wh{constructor(e){var n,r,s,i,o,l;const c=Bi(Hi(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,d=bS((s=c.mode)!==null&&s!==void 0?s:null);_e(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=TS(e);try{return new Wh(n)}catch{return null}}}/**
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
 */class vi{constructor(){this.providerId=vi.PROVIDER_ID}static credential(e,n){return Co._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wh.parseLink(n);return _e(r,"argument-error"),Co._fromEmailAndCode(e,r.code,r.tenantId)}}vi.PROVIDER_ID="password";vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zo extends Gh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Rr extends zo{constructor(){super("facebook.com")}static credential(e){return Es._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rr.PROVIDER_ID="facebook.com";/**
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
 */class Wn extends zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Es._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.GOOGLE_SIGN_IN_METHOD="google.com";Wn.PROVIDER_ID="google.com";/**
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
 */class Pr extends zo{constructor(){super("github.com")}static credential(e){return Es._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.GITHUB_SIGN_IN_METHOD="github.com";Pr.PROVIDER_ID="github.com";/**
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
 */class kr extends zo{constructor(){super("twitter.com")}static credential(e,n){return Es._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kr.credential(n,r)}catch{return null}}}kr.TWITTER_SIGN_IN_METHOD="twitter.com";kr.PROVIDER_ID="twitter.com";/**
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
 */async function IS(t,e){return Ho(t,"POST","/v1/accounts:signUp",Mn(t,e))}/**
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
 */class ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await hn._fromIdTokenResponse(e,r,s),o=om(r);return new ws({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=om(r);return new ws({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function om(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class al extends cr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,al.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new al(e,n,r,s)}}function ev(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?al._fromErrorAndOperation(t,i,e,r):i})}async function AS(t,e,n=!1){const r=await oi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ws._forOperation(t,"link",r)}/**
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
 */async function SS(t,e,n=!1){const{auth:r}=t;if(Xt(r.app))return Promise.reject(Jn(r));const s="reauthenticate";try{const i=await oi(t,ev(r,s,e,t),n);_e(i.idToken,r,"internal-error");const o=Hh(i.idToken);_e(o,r,"internal-error");const{sub:l}=o;return _e(t.uid===l,r,"user-mismatch"),ws._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&cn(r,"user-mismatch"),i}}/**
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
 */async function tv(t,e,n=!1){if(Xt(t.app))return Promise.reject(Jn(t));const r="signIn",s=await ev(t,r,e),i=await ws._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function CS(t,e){return tv(ur(t),e)}/**
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
 */async function Kh(t){const e=ur(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function RS(t,e,n){const r=ur(t);await ol(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",yS)}async function PS(t,e,n){await pS(ht(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Kh(t),r})}async function kS(t,e,n){if(Xt(t.app))return Promise.reject(Jn(t));const r=ur(t),o=await ol(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",IS).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Kh(t),c}),l=await ws._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function xS(t,e,n){return Xt(t.app)?Promise.reject(Jn(t)):CS(ht(t),vi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Kh(t),r})}/**
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
 */async function OS(t,e){return _n(t,"POST","/v1/accounts:update",e)}/**
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
 */async function DS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ht(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await oi(r,OS(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function NS(t,e,n,r){return ht(t).onIdTokenChanged(e,n,r)}function VS(t,e,n){return ht(t).beforeAuthStateChanged(e,n)}function nv(t,e,n,r){return ht(t).onAuthStateChanged(e,n,r)}function MS(t){return ht(t).signOut()}const ll="__sak";/**
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
 */class rv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ll,"1"),this.storage.removeItem(ll),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const LS=1e3,FS=10;class sv extends rv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);QA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,FS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},LS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sv.type="LOCAL";const US=sv;/**
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
 */class iv extends rv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iv.type="SESSION";const ov=iv;/**
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
 */function $S(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new zl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await $S(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zl.receivers=[];/**
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
 */function Qh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class jS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Qh("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Cn(){return window}function BS(t){Cn().location.href=t}/**
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
 */function av(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function HS(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zS(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qS(){return av()?self:null}/**
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
 */const lv="firebaseLocalStorageDb",WS=1,cl="firebaseLocalStorage",cv="fbase_key";class qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ql(t,e){return t.transaction([cl],e?"readwrite":"readonly").objectStore(cl)}function GS(){const t=indexedDB.deleteDatabase(lv);return new qo(t).toPromise()}function xu(){const t=indexedDB.open(lv,WS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(cl,{keyPath:cv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(cl)?e(r):(r.close(),await GS(),e(await xu()))})})}async function am(t,e,n){const r=ql(t,!0).put({[cv]:e,value:n});return new qo(r).toPromise()}async function KS(t,e){const n=ql(t,!1).get(e),r=await new qo(n).toPromise();return r===void 0?null:r.value}function lm(t,e){const n=ql(t,!0).delete(e);return new qo(n).toPromise()}const QS=800,YS=3;class uv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>YS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return av()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zl._getInstance(qS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HS(),!this.activeServiceWorker)return;this.sender=new jS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xu();return await am(e,ll,"1"),await lm(e,ll),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>am(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ql(s,!1).getAll();return new qo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),QS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uv.type="LOCAL";const XS=uv;new Bo(3e4,6e4);/**
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
 */function hv(t,e){return e?Yn(e):(_e(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yh extends qh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JS(t){return tv(t.auth,new Yh(t),t.bypassAuthState)}function ZS(t){const{auth:e,user:n}=t;return _e(n,e,"internal-error"),SS(n,new Yh(t),t.bypassAuthState)}async function eC(t){const{auth:e,user:n}=t;return _e(n,e,"internal-error"),AS(n,new Yh(t),t.bypassAuthState)}/**
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
 */class fv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JS;case"linkViaPopup":case"linkViaRedirect":return eC;case"reauthViaPopup":case"reauthViaRedirect":return ZS;default:cn(this.auth,"internal-error")}}resolve(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tC=new Bo(2e3,1e4);async function nC(t,e,n){if(Xt(t.app))return Promise.reject(dn(t,"operation-not-supported-in-this-environment"));const r=ur(t);PA(t,e,Gh);const s=hv(r,n);return new ds(r,"signInViaPopup",e,s).executeNotNull()}class ds extends fv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ds.currentPopupAction&&ds.currentPopupAction.cancel(),ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){rr(this.filter.length===1,"Popup operations only handle one event");const e=Qh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tC.get())};e()}}ds.currentPopupAction=null;/**
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
 */const rC="pendingRedirect",Ma=new Map;class sC extends fv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ma.get(this.auth._key());if(!e){try{const r=await iC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ma.set(this.auth._key(),e)}return this.bypassAuthState||Ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iC(t,e){const n=lC(e),r=aC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function oC(t,e){Ma.set(t._key(),e)}function aC(t){return Yn(t._redirectPersistence)}function lC(t){return Va(rC,t.config.apiKey,t.name)}async function cC(t,e,n=!1){if(Xt(t.app))return Promise.reject(Jn(t));const r=ur(t),s=hv(r,e),o=await new sC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const uC=10*60*1e3;class hC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uC&&this.cachedEventUids.clear(),this.cachedEventUids.has(cm(e))}saveEventToCache(e){this.cachedEventUids.add(cm(e)),this.lastProcessedEventTime=Date.now()}}function cm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dv({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function fC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dv(t);default:return!1}}/**
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
 */async function dC(t,e={}){return _n(t,"GET","/v1/projects",e)}/**
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
 */const pC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mC=/^https?/;async function gC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dC(t);for(const n of e)try{if(_C(n))return}catch{}cn(t,"unauthorized-domain")}function _C(t){const e=Pu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!mC.test(n))return!1;if(pC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const yC=new Bo(3e4,6e4);function um(){const t=Cn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vC(t){return new Promise((e,n)=>{var r,s,i;function o(){um(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{um(),n(dn(t,"network-request-failed"))},timeout:yC.get()})}if(!((s=(r=Cn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Cn().gapi)===null||i===void 0)&&i.load)o();else{const l=sS("iframefcb");return Cn()[l]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},Xy(`${rS()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw La=null,e})}let La=null;function EC(t){return La=La||vC(t),La}/**
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
 */const wC=new Bo(5e3,15e3),bC="__/auth/iframe",TC="emulator/auth/iframe",IC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SC(t){const e=t.config;_e(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bh(e,TC):`https://${t.config.authDomain}/${bC}`,r={apiKey:e.apiKey,appName:t.name,v:yi},s=AC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${jo(r).slice(1)}`}async function CC(t){const e=await EC(t),n=Cn().gapi;return _e(n,t,"internal-error"),e.open({where:document.body,url:SC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),l=Cn().setTimeout(()=>{i(o)},wC.get());function c(){Cn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const RC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PC=500,kC=600,xC="_blank",OC="http://localhost";class hm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DC(t,e,n,r=PC,s=kC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},RC),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ot().toLowerCase();n&&(l=zy(u)?xC:n),By(u)&&(e=e||OC,c.scrollbars="yes");const h=Object.entries(c).reduce((m,[_,P])=>`${m}${_}=${P},`,"");if(KA(u)&&l!=="_self")return NC(e||"",l),new hm(null);const d=window.open(e||"",l,h);_e(d,t,"popup-blocked");try{d.focus()}catch{}return new hm(d)}function NC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const VC="__/auth/handler",MC="emulator/auth/handler",LC=encodeURIComponent("fac");async function fm(t,e,n,r,s,i){_e(t.config.authDomain,t,"auth-domain-config-required"),_e(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yi,eventId:s};if(e instanceof Gh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof zo){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await t._getAppCheckToken(),u=c?`#${LC}=${encodeURIComponent(c)}`:"";return`${FC(t)}?${jo(l).slice(1)}${u}`}function FC({config:t}){return t.emulator?Bh(t,MC):`https://${t.authDomain}/${VC}`}/**
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
 */const Xc="webStorageSupport";class UC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ov,this._completeRedirectFn=cC,this._overrideRedirectResult=oC}async _openPopup(e,n,r,s){var i;rr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await fm(e,n,r,Pu(),s);return DC(e,o,Qh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await fm(e,n,r,Pu(),s);return BS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(rr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await CC(e),r=new hC(e);return n.register("authEvent",s=>(_e(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xc,{type:Xc},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[Xc];o!==void 0&&n(!!o),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qy()||Hy()||zh()}}const $C=UC;var dm="@firebase/auth",pm="1.10.8";/**
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
 */class jC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function BC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HC(t){ii(new vs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;_e(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yy(t)},u=new eS(r,s,i,c);return uS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ii(new vs("auth-internal",e=>{const n=ur(e.getProvider("auth").getImmediate());return(r=>new jC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mr(dm,pm,BC(t)),Mr(dm,pm,"esm2017")}/**
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
 */const zC=5*60,qC=Sy("authIdTokenMaxAge")||zC;let mm=null;const WC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qC)return;const s=n?.token;mm!==s&&(mm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function GC(t=Oy()){const e=Fh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cS(t,{popupRedirectResolver:$C,persistence:[XS,US,ov]}),r=Sy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=WC(i.toString());VS(n,o,()=>o(n.currentUser)),NS(n,l=>o(l))}}const s=Iy("auth");return s&&hS(n,`http://${s}`),n}function KC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}tS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=dn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",KC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HC("Browser");var gm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lr,pv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,E){function v(){}v.prototype=E.prototype,R.D=E.prototype,R.prototype=new v,R.prototype.constructor=R,R.C=function(S,I,b){for(var w=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)w[Ae-2]=arguments[Ae];return E.prototype[I].apply(S,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,E,v){v||(v=0);var S=Array(16);if(typeof E=="string")for(var I=0;16>I;++I)S[I]=E.charCodeAt(v++)|E.charCodeAt(v++)<<8|E.charCodeAt(v++)<<16|E.charCodeAt(v++)<<24;else for(I=0;16>I;++I)S[I]=E[v++]|E[v++]<<8|E[v++]<<16|E[v++]<<24;E=R.g[0],v=R.g[1],I=R.g[2];var b=R.g[3],w=E+(b^v&(I^b))+S[0]+3614090360&4294967295;E=v+(w<<7&4294967295|w>>>25),w=b+(I^E&(v^I))+S[1]+3905402710&4294967295,b=E+(w<<12&4294967295|w>>>20),w=I+(v^b&(E^v))+S[2]+606105819&4294967295,I=b+(w<<17&4294967295|w>>>15),w=v+(E^I&(b^E))+S[3]+3250441966&4294967295,v=I+(w<<22&4294967295|w>>>10),w=E+(b^v&(I^b))+S[4]+4118548399&4294967295,E=v+(w<<7&4294967295|w>>>25),w=b+(I^E&(v^I))+S[5]+1200080426&4294967295,b=E+(w<<12&4294967295|w>>>20),w=I+(v^b&(E^v))+S[6]+2821735955&4294967295,I=b+(w<<17&4294967295|w>>>15),w=v+(E^I&(b^E))+S[7]+4249261313&4294967295,v=I+(w<<22&4294967295|w>>>10),w=E+(b^v&(I^b))+S[8]+1770035416&4294967295,E=v+(w<<7&4294967295|w>>>25),w=b+(I^E&(v^I))+S[9]+2336552879&4294967295,b=E+(w<<12&4294967295|w>>>20),w=I+(v^b&(E^v))+S[10]+4294925233&4294967295,I=b+(w<<17&4294967295|w>>>15),w=v+(E^I&(b^E))+S[11]+2304563134&4294967295,v=I+(w<<22&4294967295|w>>>10),w=E+(b^v&(I^b))+S[12]+1804603682&4294967295,E=v+(w<<7&4294967295|w>>>25),w=b+(I^E&(v^I))+S[13]+4254626195&4294967295,b=E+(w<<12&4294967295|w>>>20),w=I+(v^b&(E^v))+S[14]+2792965006&4294967295,I=b+(w<<17&4294967295|w>>>15),w=v+(E^I&(b^E))+S[15]+1236535329&4294967295,v=I+(w<<22&4294967295|w>>>10),w=E+(I^b&(v^I))+S[1]+4129170786&4294967295,E=v+(w<<5&4294967295|w>>>27),w=b+(v^I&(E^v))+S[6]+3225465664&4294967295,b=E+(w<<9&4294967295|w>>>23),w=I+(E^v&(b^E))+S[11]+643717713&4294967295,I=b+(w<<14&4294967295|w>>>18),w=v+(b^E&(I^b))+S[0]+3921069994&4294967295,v=I+(w<<20&4294967295|w>>>12),w=E+(I^b&(v^I))+S[5]+3593408605&4294967295,E=v+(w<<5&4294967295|w>>>27),w=b+(v^I&(E^v))+S[10]+38016083&4294967295,b=E+(w<<9&4294967295|w>>>23),w=I+(E^v&(b^E))+S[15]+3634488961&4294967295,I=b+(w<<14&4294967295|w>>>18),w=v+(b^E&(I^b))+S[4]+3889429448&4294967295,v=I+(w<<20&4294967295|w>>>12),w=E+(I^b&(v^I))+S[9]+568446438&4294967295,E=v+(w<<5&4294967295|w>>>27),w=b+(v^I&(E^v))+S[14]+3275163606&4294967295,b=E+(w<<9&4294967295|w>>>23),w=I+(E^v&(b^E))+S[3]+4107603335&4294967295,I=b+(w<<14&4294967295|w>>>18),w=v+(b^E&(I^b))+S[8]+1163531501&4294967295,v=I+(w<<20&4294967295|w>>>12),w=E+(I^b&(v^I))+S[13]+2850285829&4294967295,E=v+(w<<5&4294967295|w>>>27),w=b+(v^I&(E^v))+S[2]+4243563512&4294967295,b=E+(w<<9&4294967295|w>>>23),w=I+(E^v&(b^E))+S[7]+1735328473&4294967295,I=b+(w<<14&4294967295|w>>>18),w=v+(b^E&(I^b))+S[12]+2368359562&4294967295,v=I+(w<<20&4294967295|w>>>12),w=E+(v^I^b)+S[5]+4294588738&4294967295,E=v+(w<<4&4294967295|w>>>28),w=b+(E^v^I)+S[8]+2272392833&4294967295,b=E+(w<<11&4294967295|w>>>21),w=I+(b^E^v)+S[11]+1839030562&4294967295,I=b+(w<<16&4294967295|w>>>16),w=v+(I^b^E)+S[14]+4259657740&4294967295,v=I+(w<<23&4294967295|w>>>9),w=E+(v^I^b)+S[1]+2763975236&4294967295,E=v+(w<<4&4294967295|w>>>28),w=b+(E^v^I)+S[4]+1272893353&4294967295,b=E+(w<<11&4294967295|w>>>21),w=I+(b^E^v)+S[7]+4139469664&4294967295,I=b+(w<<16&4294967295|w>>>16),w=v+(I^b^E)+S[10]+3200236656&4294967295,v=I+(w<<23&4294967295|w>>>9),w=E+(v^I^b)+S[13]+681279174&4294967295,E=v+(w<<4&4294967295|w>>>28),w=b+(E^v^I)+S[0]+3936430074&4294967295,b=E+(w<<11&4294967295|w>>>21),w=I+(b^E^v)+S[3]+3572445317&4294967295,I=b+(w<<16&4294967295|w>>>16),w=v+(I^b^E)+S[6]+76029189&4294967295,v=I+(w<<23&4294967295|w>>>9),w=E+(v^I^b)+S[9]+3654602809&4294967295,E=v+(w<<4&4294967295|w>>>28),w=b+(E^v^I)+S[12]+3873151461&4294967295,b=E+(w<<11&4294967295|w>>>21),w=I+(b^E^v)+S[15]+530742520&4294967295,I=b+(w<<16&4294967295|w>>>16),w=v+(I^b^E)+S[2]+3299628645&4294967295,v=I+(w<<23&4294967295|w>>>9),w=E+(I^(v|~b))+S[0]+4096336452&4294967295,E=v+(w<<6&4294967295|w>>>26),w=b+(v^(E|~I))+S[7]+1126891415&4294967295,b=E+(w<<10&4294967295|w>>>22),w=I+(E^(b|~v))+S[14]+2878612391&4294967295,I=b+(w<<15&4294967295|w>>>17),w=v+(b^(I|~E))+S[5]+4237533241&4294967295,v=I+(w<<21&4294967295|w>>>11),w=E+(I^(v|~b))+S[12]+1700485571&4294967295,E=v+(w<<6&4294967295|w>>>26),w=b+(v^(E|~I))+S[3]+2399980690&4294967295,b=E+(w<<10&4294967295|w>>>22),w=I+(E^(b|~v))+S[10]+4293915773&4294967295,I=b+(w<<15&4294967295|w>>>17),w=v+(b^(I|~E))+S[1]+2240044497&4294967295,v=I+(w<<21&4294967295|w>>>11),w=E+(I^(v|~b))+S[8]+1873313359&4294967295,E=v+(w<<6&4294967295|w>>>26),w=b+(v^(E|~I))+S[15]+4264355552&4294967295,b=E+(w<<10&4294967295|w>>>22),w=I+(E^(b|~v))+S[6]+2734768916&4294967295,I=b+(w<<15&4294967295|w>>>17),w=v+(b^(I|~E))+S[13]+1309151649&4294967295,v=I+(w<<21&4294967295|w>>>11),w=E+(I^(v|~b))+S[4]+4149444226&4294967295,E=v+(w<<6&4294967295|w>>>26),w=b+(v^(E|~I))+S[11]+3174756917&4294967295,b=E+(w<<10&4294967295|w>>>22),w=I+(E^(b|~v))+S[2]+718787259&4294967295,I=b+(w<<15&4294967295|w>>>17),w=v+(b^(I|~E))+S[9]+3951481745&4294967295,R.g[0]=R.g[0]+E&4294967295,R.g[1]=R.g[1]+(I+(w<<21&4294967295|w>>>11))&4294967295,R.g[2]=R.g[2]+I&4294967295,R.g[3]=R.g[3]+b&4294967295}r.prototype.u=function(R,E){E===void 0&&(E=R.length);for(var v=E-this.blockSize,S=this.B,I=this.h,b=0;b<E;){if(I==0)for(;b<=v;)s(this,R,b),b+=this.blockSize;if(typeof R=="string"){for(;b<E;)if(S[I++]=R.charCodeAt(b++),I==this.blockSize){s(this,S),I=0;break}}else for(;b<E;)if(S[I++]=R[b++],I==this.blockSize){s(this,S),I=0;break}}this.h=I,this.o+=E},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var E=1;E<R.length-8;++E)R[E]=0;var v=8*this.o;for(E=R.length-8;E<R.length;++E)R[E]=v&255,v/=256;for(this.u(R),R=Array(16),E=v=0;4>E;++E)for(var S=0;32>S;S+=8)R[v++]=this.g[E]>>>S&255;return R};function i(R,E){var v=l;return Object.prototype.hasOwnProperty.call(v,R)?v[R]:v[R]=E(R)}function o(R,E){this.h=E;for(var v=[],S=!0,I=R.length-1;0<=I;I--){var b=R[I]|0;S&&b==E||(v[I]=b,S=!1)}this.g=v}var l={};function c(R){return-128<=R&&128>R?i(R,function(E){return new o([E|0],0>E?-1:0)}):new o([R|0],0>R?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return d;if(0>R)return M(u(-R));for(var E=[],v=1,S=0;R>=v;S++)E[S]=R/v|0,v*=4294967296;return new o(E,0)}function h(R,E){if(R.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R.charAt(0)=="-")return M(h(R.substring(1),E));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(E,8)),S=d,I=0;I<R.length;I+=8){var b=Math.min(8,R.length-I),w=parseInt(R.substring(I,I+b),E);8>b?(b=u(Math.pow(E,b)),S=S.j(b).add(u(w))):(S=S.j(v),S=S.add(u(w)))}return S}var d=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(x(this))return-M(this).m();for(var R=0,E=1,v=0;v<this.g.length;v++){var S=this.i(v);R+=(0<=S?S:4294967296+S)*E,E*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(P(this))return"0";if(x(this))return"-"+M(this).toString(R);for(var E=u(Math.pow(R,6)),v=this,S="";;){var I=U(v,E).g;v=N(v,I.j(E));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(R);if(v=I,P(v))return b+S;for(;6>b.length;)b="0"+b;S=b+S}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function P(R){if(R.h!=0)return!1;for(var E=0;E<R.g.length;E++)if(R.g[E]!=0)return!1;return!0}function x(R){return R.h==-1}t.l=function(R){return R=N(this,R),x(R)?-1:P(R)?0:1};function M(R){for(var E=R.g.length,v=[],S=0;S<E;S++)v[S]=~R.g[S];return new o(v,~R.h).add(m)}t.abs=function(){return x(this)?M(this):this},t.add=function(R){for(var E=Math.max(this.g.length,R.g.length),v=[],S=0,I=0;I<=E;I++){var b=S+(this.i(I)&65535)+(R.i(I)&65535),w=(b>>>16)+(this.i(I)>>>16)+(R.i(I)>>>16);S=w>>>16,b&=65535,w&=65535,v[I]=w<<16|b}return new o(v,v[v.length-1]&-2147483648?-1:0)};function N(R,E){return R.add(M(E))}t.j=function(R){if(P(this)||P(R))return d;if(x(this))return x(R)?M(this).j(M(R)):M(M(this).j(R));if(x(R))return M(this.j(M(R)));if(0>this.l(_)&&0>R.l(_))return u(this.m()*R.m());for(var E=this.g.length+R.g.length,v=[],S=0;S<2*E;S++)v[S]=0;for(S=0;S<this.g.length;S++)for(var I=0;I<R.g.length;I++){var b=this.i(S)>>>16,w=this.i(S)&65535,Ae=R.i(I)>>>16,Se=R.i(I)&65535;v[2*S+2*I]+=w*Se,O(v,2*S+2*I),v[2*S+2*I+1]+=b*Se,O(v,2*S+2*I+1),v[2*S+2*I+1]+=w*Ae,O(v,2*S+2*I+1),v[2*S+2*I+2]+=b*Ae,O(v,2*S+2*I+2)}for(S=0;S<E;S++)v[S]=v[2*S+1]<<16|v[2*S];for(S=E;S<2*E;S++)v[S]=0;return new o(v,0)};function O(R,E){for(;(R[E]&65535)!=R[E];)R[E+1]+=R[E]>>>16,R[E]&=65535,E++}function L(R,E){this.g=R,this.h=E}function U(R,E){if(P(E))throw Error("division by zero");if(P(R))return new L(d,d);if(x(R))return E=U(M(R),E),new L(M(E.g),M(E.h));if(x(E))return E=U(R,M(E)),new L(M(E.g),E.h);if(30<R.g.length){if(x(R)||x(E))throw Error("slowDivide_ only works with positive integers.");for(var v=m,S=E;0>=S.l(R);)v=G(v),S=G(S);var I=J(v,1),b=J(S,1);for(S=J(S,2),v=J(v,2);!P(S);){var w=b.add(S);0>=w.l(R)&&(I=I.add(v),b=w),S=J(S,1),v=J(v,1)}return E=N(R,I.j(E)),new L(I,E)}for(I=d;0<=R.l(E);){for(v=Math.max(1,Math.floor(R.m()/E.m())),S=Math.ceil(Math.log(v)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),b=u(v),w=b.j(E);x(w)||0<w.l(R);)v-=S,b=u(v),w=b.j(E);P(b)&&(b=m),I=I.add(b),R=N(R,w)}return new L(I,R)}t.A=function(R){return U(this,R).h},t.and=function(R){for(var E=Math.max(this.g.length,R.g.length),v=[],S=0;S<E;S++)v[S]=this.i(S)&R.i(S);return new o(v,this.h&R.h)},t.or=function(R){for(var E=Math.max(this.g.length,R.g.length),v=[],S=0;S<E;S++)v[S]=this.i(S)|R.i(S);return new o(v,this.h|R.h)},t.xor=function(R){for(var E=Math.max(this.g.length,R.g.length),v=[],S=0;S<E;S++)v[S]=this.i(S)^R.i(S);return new o(v,this.h^R.h)};function G(R){for(var E=R.g.length+1,v=[],S=0;S<E;S++)v[S]=R.i(S)<<1|R.i(S-1)>>>31;return new o(v,R.h)}function J(R,E){var v=E>>5;E%=32;for(var S=R.g.length-v,I=[],b=0;b<S;b++)I[b]=0<E?R.i(b+v)>>>E|R.i(b+v+1)<<32-E:R.i(b+v);return new o(I,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,pv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Lr=o}).apply(typeof gm<"u"?gm:typeof self<"u"?self:typeof window<"u"?window:{});var Ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mv,zi,gv,Fa,Ou,_v,yv,vv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,p){return a==Array.prototype||a==Object.prototype||(a[f]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ta=="object"&&Ta];for(var f=0;f<a.length;++f){var p=a[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,f){if(f)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var V=a[y];if(!(V in p))break e;p=p[V]}a=a[a.length-1],y=p[a],f=f(y),f!=y&&f!=null&&e(p,a,{configurable:!0,writable:!0,value:f})}}function i(a,f){a instanceof String&&(a+="");var p=0,y=!1,V={next:function(){if(!y&&p<a.length){var F=p++;return{value:f(F,a[F]),done:!1}}return y=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}s("Array.prototype.values",function(a){return a||function(){return i(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function u(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function h(a,f,p){return a.call.apply(a.bind,arguments)}function d(a,f,p){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,y),a.apply(f,V)}}return function(){return a.apply(f,arguments)}}function m(a,f,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,m.apply(null,arguments)}function _(a,f){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function P(a,f){function p(){}p.prototype=f.prototype,a.aa=f.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(y,V,F){for(var X=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)X[ze-2]=arguments[ze];return f.prototype[V].apply(y,X)}}function x(a){const f=a.length;if(0<f){const p=Array(f);for(let y=0;y<f;y++)p[y]=a[y];return p}return[]}function M(a,f){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(c(y)){const V=a.length||0,F=y.length||0;a.length=V+F;for(let X=0;X<F;X++)a[V+X]=y[X]}else a.push(y)}}class N{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function O(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function U(a){return U[" "](a),a}U[" "]=function(){};var G=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function J(a,f,p){for(const y in a)f.call(p,a[y],y,a)}function R(a,f){for(const p in a)f.call(void 0,a[p],p,a)}function E(a){const f={};for(const p in a)f[p]=a[p];return f}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,f){let p,y;for(let V=1;V<arguments.length;V++){y=arguments[V];for(p in y)a[p]=y[p];for(let F=0;F<v.length;F++)p=v[F],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function I(a){var f=1;a=a.split(":");const p=[];for(;0<f&&a.length;)p.push(a.shift()),f--;return a.length&&p.push(a.join(":")),p}function b(a){l.setTimeout(()=>{throw a},0)}function w(){var a=Bt;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class Ae{constructor(){this.h=this.g=null}add(f,p){const y=Se.get();y.set(f,p),this.h?this.h.next=y:this.g=y,this.h=y}}var Se=new N(()=>new oe,a=>a.reset());class oe{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let re,we=!1,Bt=new Ae,Vt=()=>{const a=l.Promise.resolve(void 0);re=()=>{a.then(Ht)}};var Ht=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(p){b(p)}var f=Se;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}we=!1};function Ne(){this.s=this.s,this.C=this.C}Ne.prototype.s=!1,Ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function et(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var dr=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,f),l.removeEventListener("test",p,f)}catch{}return a}();function yn(a,f){if(et.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(G){e:{try{U(f.nodeName);var V=!0;break e}catch{}V=!1}V||(f=null)}}else p=="mouseover"?f=a.fromElement:p=="mouseout"&&(f=a.toElement);this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:zt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&yn.aa.h.call(this)}}P(yn,et);var zt={2:"touch",3:"pen",4:"mouse"};yn.prototype.h=function(){yn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $="closure_listenable_"+(1e6*Math.random()|0),ie=0;function te(a,f,p,y,V){this.listener=a,this.proxy=null,this.src=f,this.type=p,this.capture=!!y,this.ha=V,this.key=++ie,this.da=this.fa=!1}function le(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ve(a){this.src=a,this.g={},this.h=0}Ve.prototype.add=function(a,f,p,y,V){var F=a.toString();a=this.g[F],a||(a=this.g[F]=[],this.h++);var X=C(a,f,y,V);return-1<X?(f=a[X],p||(f.fa=!1)):(f=new te(f,this.src,F,!!y,V),f.fa=p,a.push(f)),f};function T(a,f){var p=f.type;if(p in a.g){var y=a.g[p],V=Array.prototype.indexOf.call(y,f,void 0),F;(F=0<=V)&&Array.prototype.splice.call(y,V,1),F&&(le(f),a.g[p].length==0&&(delete a.g[p],a.h--))}}function C(a,f,p,y){for(var V=0;V<a.length;++V){var F=a[V];if(!F.da&&F.listener==f&&F.capture==!!p&&F.ha==y)return V}return-1}var D="closure_lm_"+(1e6*Math.random()|0),j={};function z(a,f,p,y,V){if(Array.isArray(f)){for(var F=0;F<f.length;F++)z(a,f[F],p,y,V);return null}return p=ve(p),a&&a[$]?a.K(f,p,u(y)?!!y.capture:!1,V):B(a,f,p,!1,y,V)}function B(a,f,p,y,V,F){if(!f)throw Error("Invalid event type");var X=u(V)?!!V.capture:!!V,ze=Z(a);if(ze||(a[D]=ze=new Ve(a)),p=ze.add(f,p,y,X,F),p.proxy)return p;if(y=ee(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)dr||(V=X),V===void 0&&(V=!1),a.addEventListener(f.toString(),y,V);else if(a.attachEvent)a.attachEvent(W(f.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function ee(){function a(p){return f.call(a.src,a.listener,p)}const f=fe;return a}function Y(a,f,p,y,V){if(Array.isArray(f))for(var F=0;F<f.length;F++)Y(a,f[F],p,y,V);else y=u(y)?!!y.capture:!!y,p=ve(p),a&&a[$]?(a=a.i,f=String(f).toString(),f in a.g&&(F=a.g[f],p=C(F,p,y,V),-1<p&&(le(F[p]),Array.prototype.splice.call(F,p,1),F.length==0&&(delete a.g[f],a.h--)))):a&&(a=Z(a))&&(f=a.g[f.toString()],a=-1,f&&(a=C(f,p,y,V)),(p=-1<a?f[a]:null)&&Q(p))}function Q(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[$])T(f.i,a);else{var p=a.type,y=a.proxy;f.removeEventListener?f.removeEventListener(p,y,a.capture):f.detachEvent?f.detachEvent(W(p),y):f.addListener&&f.removeListener&&f.removeListener(y),(p=Z(f))?(T(p,a),p.h==0&&(p.src=null,f[D]=null)):le(a)}}}function W(a){return a in j?j[a]:j[a]="on"+a}function fe(a,f){if(a.da)a=!0;else{f=new yn(f,this);var p=a.listener,y=a.ha||a.src;a.fa&&Q(a),a=p.call(y,f)}return a}function Z(a){return a=a[D],a instanceof Ve?a:null}var ue="__closure_events_fn_"+(1e9*Math.random()>>>0);function ve(a){return typeof a=="function"?a:(a[ue]||(a[ue]=function(f){return a.handleEvent(f)}),a[ue])}function ge(){Ne.call(this),this.i=new Ve(this),this.M=this,this.F=null}P(ge,Ne),ge.prototype[$]=!0,ge.prototype.removeEventListener=function(a,f,p,y){Y(this,a,f,p,y)};function Ie(a,f){var p,y=a.F;if(y)for(p=[];y;y=y.F)p.push(y);if(a=a.M,y=f.type||f,typeof f=="string")f=new et(f,a);else if(f instanceof et)f.target=f.target||a;else{var V=f;f=new et(y,a),S(f,V)}if(V=!0,p)for(var F=p.length-1;0<=F;F--){var X=f.g=p[F];V=ke(X,y,!0,f)&&V}if(X=f.g=a,V=ke(X,y,!0,f)&&V,V=ke(X,y,!1,f)&&V,p)for(F=0;F<p.length;F++)X=f.g=p[F],V=ke(X,y,!1,f)&&V}ge.prototype.N=function(){if(ge.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var p=a.g[f],y=0;y<p.length;y++)le(p[y]);delete a.g[f],a.h--}}this.F=null},ge.prototype.K=function(a,f,p,y){return this.i.add(String(a),f,!1,p,y)},ge.prototype.L=function(a,f,p,y){return this.i.add(String(a),f,!0,p,y)};function ke(a,f,p,y){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var V=!0,F=0;F<f.length;++F){var X=f[F];if(X&&!X.da&&X.capture==p){var ze=X.listener,yt=X.ha||X.src;X.fa&&T(a.i,X),V=ze.call(yt,y)!==!1&&V}}return V&&!y.defaultPrevented}function mt(a,f,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:l.setTimeout(a,f||0)}function gt(a){a.g=mt(()=>{a.g=null,a.i&&(a.i=!1,gt(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class tn extends Ne{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:gt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function It(a){Ne.call(this),this.h=a,this.g={}}P(It,Ne);var pr=[];function Ai(a){J(a.g,function(f,p){this.g.hasOwnProperty(p)&&Q(f)},a),a.g={}}It.prototype.N=function(){It.aa.N.call(this),Ai(this)},It.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _t=l.JSON.stringify,nn=l.JSON.parse,na=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function mc(){}mc.prototype.h=null;function qf(a){return a.h||(a.h=a.i())}function Wf(){}var Si={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gc(){et.call(this,"d")}P(gc,et);function _c(){et.call(this,"c")}P(_c,et);var ns={},Gf=null;function ra(){return Gf=Gf||new ge}ns.La="serverreachability";function Kf(a){et.call(this,ns.La,a)}P(Kf,et);function Ci(a){const f=ra();Ie(f,new Kf(f))}ns.STAT_EVENT="statevent";function Qf(a,f){et.call(this,ns.STAT_EVENT,a),this.stat=f}P(Qf,et);function Mt(a){const f=ra();Ie(f,new Qf(f,a))}ns.Ma="timingevent";function Yf(a,f){et.call(this,ns.Ma,a),this.size=f}P(Yf,et);function Ri(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},f)}function Pi(){this.g=!0}Pi.prototype.xa=function(){this.g=!1};function N0(a,f,p,y,V,F){a.info(function(){if(a.g)if(F)for(var X="",ze=F.split("&"),yt=0;yt<ze.length;yt++){var Me=ze[yt].split("=");if(1<Me.length){var At=Me[0];Me=Me[1];var St=At.split("_");X=2<=St.length&&St[1]=="type"?X+(At+"="+Me+"&"):X+(At+"=redacted&")}}else X=null;else X=F;return"XMLHTTP REQ ("+y+") [attempt "+V+"]: "+f+`
`+p+`
`+X})}function V0(a,f,p,y,V,F,X){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+V+"]: "+f+`
`+p+`
`+F+" "+X})}function Os(a,f,p,y){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+L0(a,p)+(y?" "+y:"")})}function M0(a,f){a.info(function(){return"TIMEOUT: "+f})}Pi.prototype.info=function(){};function L0(a,f){if(!a.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var y=p[a];if(!(2>y.length)){var V=y[1];if(Array.isArray(V)&&!(1>V.length)){var F=V[0];if(F!="noop"&&F!="stop"&&F!="close")for(var X=1;X<V.length;X++)V[X]=""}}}}return _t(p)}catch{return f}}var sa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yc;function ia(){}P(ia,mc),ia.prototype.g=function(){return new XMLHttpRequest},ia.prototype.i=function(){return{}},yc=new ia;function mr(a,f,p,y){this.j=a,this.i=f,this.l=p,this.R=y||1,this.U=new It(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Jf}function Jf(){this.i=null,this.g="",this.h=!1}var Zf={},vc={};function Ec(a,f,p){a.L=1,a.v=ca(Fn(f)),a.m=p,a.P=!0,ed(a,null)}function ed(a,f){a.F=Date.now(),oa(a),a.A=Fn(a.v);var p=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),pd(p.i,"t",y),a.C=0,p=a.j.J,a.h=new Jf,a.g=Od(a.j,p?f:null,!a.m),0<a.O&&(a.M=new tn(m(a.Y,a,a.g),a.O)),f=a.U,p=a.g,y=a.ca;var V="readystatechange";Array.isArray(V)||(V&&(pr[0]=V.toString()),V=pr);for(var F=0;F<V.length;F++){var X=z(p,V[F],y||f.handleEvent,!1,f.h||f);if(!X)break;f.g[X.key]=X}f=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),Ci(),N0(a.i,a.u,a.A,a.l,a.R,a.m)}mr.prototype.ca=function(a){a=a.target;const f=this.M;f&&Un(a)==3?f.j():this.Y(a)},mr.prototype.Y=function(a){try{if(a==this.g)e:{const St=Un(this.g);var f=this.g.Ba();const Vs=this.g.Z();if(!(3>St)&&(St!=3||this.g&&(this.h.h||this.g.oa()||wd(this.g)))){this.J||St!=4||f==7||(f==8||0>=Vs?Ci(3):Ci(2)),wc(this);var p=this.g.Z();this.X=p;t:if(td(this)){var y=wd(this.g);a="";var V=y.length,F=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rs(this),ki(this);var X="";break t}this.h.i=new l.TextDecoder}for(f=0;f<V;f++)this.h.h=!0,a+=this.h.i.decode(y[f],{stream:!(F&&f==V-1)});y.length=0,this.h.g+=a,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=p==200,V0(this.i,this.u,this.A,this.l,this.R,St,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,yt=this.g;if((ze=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(ze)){var Me=ze;break t}}Me=null}if(p=Me)Os(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bc(this,p);else{this.o=!1,this.s=3,Mt(12),rs(this),ki(this);break e}}if(this.P){p=!0;let un;for(;!this.J&&this.C<X.length;)if(un=F0(this,X),un==vc){St==4&&(this.s=4,Mt(14),p=!1),Os(this.i,this.l,null,"[Incomplete Response]");break}else if(un==Zf){this.s=4,Mt(15),Os(this.i,this.l,X,"[Invalid Chunk]"),p=!1;break}else Os(this.i,this.l,un,null),bc(this,un);if(td(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),St!=4||X.length!=0||this.h.h||(this.s=1,Mt(16),p=!1),this.o=this.o&&p,!p)Os(this.i,this.l,X,"[Invalid Chunked Response]"),rs(this),ki(this);else if(0<X.length&&!this.W){this.W=!0;var At=this.j;At.g==this&&At.ba&&!At.M&&(At.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),Rc(At),At.M=!0,Mt(11))}}else Os(this.i,this.l,X,null),bc(this,X);St==4&&rs(this),this.o&&!this.J&&(St==4?Rd(this.j,this):(this.o=!1,oa(this)))}else t1(this.g),p==400&&0<X.indexOf("Unknown SID")?(this.s=3,Mt(12)):(this.s=0,Mt(13)),rs(this),ki(this)}}}catch{}finally{}};function td(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function F0(a,f){var p=a.C,y=f.indexOf(`
`,p);return y==-1?vc:(p=Number(f.substring(p,y)),isNaN(p)?Zf:(y+=1,y+p>f.length?vc:(f=f.slice(y,y+p),a.C=y+p,f)))}mr.prototype.cancel=function(){this.J=!0,rs(this)};function oa(a){a.S=Date.now()+a.I,nd(a,a.I)}function nd(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ri(m(a.ba,a),f)}function wc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}mr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(M0(this.i,this.A),this.L!=2&&(Ci(),Mt(17)),rs(this),this.s=2,ki(this)):nd(this,this.S-a)};function ki(a){a.j.G==0||a.J||Rd(a.j,a)}function rs(a){wc(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,Ai(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function bc(a,f){try{var p=a.j;if(p.G!=0&&(p.g==a||Tc(p.h,a))){if(!a.K&&Tc(p.h,a)&&p.G==3){try{var y=p.Da.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var V=y;if(V[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)ma(p),da(p);else break e;Cc(p),Mt(18)}}else p.za=V[1],0<p.za-p.T&&37500>V[2]&&p.F&&p.v==0&&!p.C&&(p.C=Ri(m(p.Za,p),6e3));if(1>=id(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else is(p,11)}else if((a.K||p.g==a)&&ma(p),!O(f))for(V=p.Da.g.parse(f),f=0;f<V.length;f++){let Me=V[f];if(p.T=Me[0],Me=Me[1],p.G==2)if(Me[0]=="c"){p.K=Me[1],p.ia=Me[2];const At=Me[3];At!=null&&(p.la=At,p.j.info("VER="+p.la));const St=Me[4];St!=null&&(p.Aa=St,p.j.info("SVER="+p.Aa));const Vs=Me[5];Vs!=null&&typeof Vs=="number"&&0<Vs&&(y=1.5*Vs,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const un=a.g;if(un){const _a=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_a){var F=y.h;F.g||_a.indexOf("spdy")==-1&&_a.indexOf("quic")==-1&&_a.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Ic(F,F.h),F.h=null))}if(y.D){const Pc=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;Pc&&(y.ya=Pc,Qe(y.I,y.D,Pc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var X=a;if(y.qa=xd(y,y.J?y.ia:null,y.W),X.K){od(y.h,X);var ze=X,yt=y.L;yt&&(ze.I=yt),ze.B&&(wc(ze),oa(ze)),y.g=X}else Sd(y);0<p.i.length&&pa(p)}else Me[0]!="stop"&&Me[0]!="close"||is(p,7);else p.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?is(p,7):Sc(p):Me[0]!="noop"&&p.l&&p.l.ta(Me),p.v=0)}}Ci(4)}catch{}}var U0=class{constructor(a,f){this.g=a,this.map=f}};function rd(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function id(a){return a.h?1:a.g?a.g.size:0}function Tc(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Ic(a,f){a.g?a.g.add(f):a.h=f}function od(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}rd.prototype.cancel=function(){if(this.i=ad(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ad(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const p of a.g.values())f=f.concat(p.D);return f}return x(a.i)}function $0(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var f=[],p=a.length,y=0;y<p;y++)f.push(a[y]);return f}f=[],p=0;for(y in a)f[p++]=a[y];return f}function j0(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var f=[];a=a.length;for(var p=0;p<a;p++)f.push(p);return f}f=[],p=0;for(const y in a)f[p++]=y;return f}}}function ld(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var p=j0(a),y=$0(a),V=y.length,F=0;F<V;F++)f.call(void 0,y[F],p&&p[F],a)}var cd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function B0(a,f){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var y=a[p].indexOf("="),V=null;if(0<=y){var F=a[p].substring(0,y);V=a[p].substring(y+1)}else F=a[p];f(F,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function ss(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ss){this.h=a.h,aa(this,a.j),this.o=a.o,this.g=a.g,la(this,a.s),this.l=a.l;var f=a.i,p=new Di;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),ud(this,p),this.m=a.m}else a&&(f=String(a).match(cd))?(this.h=!1,aa(this,f[1]||"",!0),this.o=xi(f[2]||""),this.g=xi(f[3]||"",!0),la(this,f[4]),this.l=xi(f[5]||"",!0),ud(this,f[6]||"",!0),this.m=xi(f[7]||"")):(this.h=!1,this.i=new Di(null,this.h))}ss.prototype.toString=function(){var a=[],f=this.j;f&&a.push(Oi(f,hd,!0),":");var p=this.g;return(p||f=="file")&&(a.push("//"),(f=this.o)&&a.push(Oi(f,hd,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Oi(p,p.charAt(0)=="/"?q0:z0,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Oi(p,G0)),a.join("")};function Fn(a){return new ss(a)}function aa(a,f,p){a.j=p?xi(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function la(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function ud(a,f,p){f instanceof Di?(a.i=f,K0(a.i,a.h)):(p||(f=Oi(f,W0)),a.i=new Di(f,a.h))}function Qe(a,f,p){a.i.set(f,p)}function ca(a){return Qe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function xi(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Oi(a,f,p){return typeof a=="string"?(a=encodeURI(a).replace(f,H0),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function H0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var hd=/[#\/\?@]/g,z0=/[#\?:]/g,q0=/[#\?]/g,W0=/[#\?@]/g,G0=/#/g;function Di(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function gr(a){a.g||(a.g=new Map,a.h=0,a.i&&B0(a.i,function(f,p){a.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=Di.prototype,t.add=function(a,f){gr(this),this.i=null,a=Ds(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(f),this.h+=1,this};function fd(a,f){gr(a),f=Ds(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function dd(a,f){return gr(a),f=Ds(a,f),a.g.has(f)}t.forEach=function(a,f){gr(this),this.g.forEach(function(p,y){p.forEach(function(V){a.call(f,V,y,this)},this)},this)},t.na=function(){gr(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let y=0;y<f.length;y++){const V=a[y];for(let F=0;F<V.length;F++)p.push(f[y])}return p},t.V=function(a){gr(this);let f=[];if(typeof a=="string")dd(this,a)&&(f=f.concat(this.g.get(Ds(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)f=f.concat(a[p])}return f},t.set=function(a,f){return gr(this),this.i=null,a=Ds(this,a),dd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function pd(a,f,p){fd(a,f),0<p.length&&(a.i=null,a.g.set(Ds(a,f),x(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var y=f[p];const F=encodeURIComponent(String(y)),X=this.V(y);for(y=0;y<X.length;y++){var V=F;X[y]!==""&&(V+="="+encodeURIComponent(String(X[y]))),a.push(V)}}return this.i=a.join("&")};function Ds(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function K0(a,f){f&&!a.j&&(gr(a),a.i=null,a.g.forEach(function(p,y){var V=y.toLowerCase();y!=V&&(fd(this,y),pd(this,V,p))},a)),a.j=f}function Q0(a,f){const p=new Pi;if(l.Image){const y=new Image;y.onload=_(_r,p,"TestLoadImage: loaded",!0,f,y),y.onerror=_(_r,p,"TestLoadImage: error",!1,f,y),y.onabort=_(_r,p,"TestLoadImage: abort",!1,f,y),y.ontimeout=_(_r,p,"TestLoadImage: timeout",!1,f,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else f(!1)}function Y0(a,f){const p=new Pi,y=new AbortController,V=setTimeout(()=>{y.abort(),_r(p,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:y.signal}).then(F=>{clearTimeout(V),F.ok?_r(p,"TestPingServer: ok",!0,f):_r(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(V),_r(p,"TestPingServer: error",!1,f)})}function _r(a,f,p,y,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),y(p)}catch{}}function X0(){this.g=new na}function J0(a,f,p){const y=p||"";try{ld(a,function(V,F){let X=V;u(V)&&(X=_t(V)),f.push(y+F+"="+encodeURIComponent(X))})}catch(V){throw f.push(y+"type="+encodeURIComponent("_badmap")),V}}function ua(a){this.l=a.Ub||null,this.j=a.eb||!1}P(ua,mc),ua.prototype.g=function(){return new ha(this.l,this.j)},ua.prototype.i=function(a){return function(){return a}}({});function ha(a,f){ge.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ha,ge),t=ha.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,Vi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||l).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ni(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Vi(this)),this.g&&(this.readyState=3,Vi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;md(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function md(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?Ni(this):Vi(this),this.readyState==3&&md(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ni(this))},t.Qa=function(a){this.g&&(this.response=a,Ni(this))},t.ga=function(){this.g&&Ni(this)};function Ni(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Vi(a)}t.setRequestHeader=function(a,f){this.u.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=f.next();return a.join(`\r
`)};function Vi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ha.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function gd(a){let f="";return J(a,function(p,y){f+=y,f+=":",f+=p,f+=`\r
`}),f}function Ac(a,f,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=gd(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Qe(a,f,p))}function nt(a){ge.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(nt,ge);var Z0=/^https?$/i,e1=["POST","PUT"];t=nt.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,f,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yc.g(),this.v=this.o?qf(this.o):qf(yc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(F){_d(this,F);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var V in y)p.set(V,y[V]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const F of y.keys())p.set(F,y.get(F));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(F=>F.toLowerCase()=="content-type"),V=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(e1,f,void 0))||y||V||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,X]of p)this.g.setRequestHeader(F,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ed(this),this.u=!0,this.g.send(a),this.u=!1}catch(F){_d(this,F)}};function _d(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,yd(a),fa(a)}function yd(a){a.A||(a.A=!0,Ie(a,"complete"),Ie(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ie(this,"complete"),Ie(this,"abort"),fa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fa(this,!0)),nt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?vd(this):this.bb())},t.bb=function(){vd(this)};function vd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Un(a)!=4||a.Z()!=2)){if(a.u&&Un(a)==4)mt(a.Ea,0,a);else if(Ie(a,"readystatechange"),Un(a)==4){a.h=!1;try{const X=a.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var y;if(y=X===0){var V=String(a.D).match(cd)[1]||null;!V&&l.self&&l.self.location&&(V=l.self.location.protocol.slice(0,-1)),y=!Z0.test(V?V.toLowerCase():"")}p=y}if(p)Ie(a,"complete"),Ie(a,"success");else{a.m=6;try{var F=2<Un(a)?a.g.statusText:""}catch{F=""}a.l=F+" ["+a.Z()+"]",yd(a)}}finally{fa(a)}}}}function fa(a,f){if(a.g){Ed(a);const p=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||Ie(a,"ready");try{p.onreadystatechange=y}catch{}}}function Ed(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Un(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),nn(f)}};function wd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function t1(a){const f={};a=(a.g&&2<=Un(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(O(a[y]))continue;var p=I(a[y]);const V=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const F=f[V]||[];f[V]=F,F.push(p)}R(f,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mi(a,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||f}function bd(a){this.Aa=0,this.i=[],this.j=new Pi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Mi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Mi("baseRetryDelayMs",5e3,a),this.cb=Mi("retryDelaySeedMs",1e4,a),this.Wa=Mi("forwardChannelMaxRetries",2,a),this.wa=Mi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new rd(a&&a.concurrentRequestLimit),this.Da=new X0,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=bd.prototype,t.la=8,t.G=1,t.connect=function(a,f,p,y){Mt(0),this.W=a,this.H=f||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=xd(this,null,this.W),pa(this)};function Sc(a){if(Td(a),a.G==3){var f=a.U++,p=Fn(a.I);if(Qe(p,"SID",a.K),Qe(p,"RID",f),Qe(p,"TYPE","terminate"),Li(a,p),f=new mr(a,a.j,f),f.L=2,f.v=ca(Fn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=f.v,p=!0),p||(f.g=Od(f.j,null),f.g.ea(f.v)),f.F=Date.now(),oa(f)}kd(a)}function da(a){a.g&&(Rc(a),a.g.cancel(),a.g=null)}function Td(a){da(a),a.u&&(l.clearTimeout(a.u),a.u=null),ma(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function pa(a){if(!sd(a.h)&&!a.s){a.s=!0;var f=a.Ga;re||Vt(),we||(re(),we=!0),Bt.add(f,a),a.B=0}}function n1(a,f){return id(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ri(m(a.Ga,a,f),Pd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const V=new mr(this,this.j,a);let F=this.o;if(this.S&&(F?(F=E(F),S(F,this.S)):F=this.S),this.m!==null||this.O||(V.H=F,F=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=Ad(this,V,f),p=Fn(this.I),Qe(p,"RID",a),Qe(p,"CVER",22),this.D&&Qe(p,"X-HTTP-Session-Id",this.D),Li(this,p),F&&(this.O?f="headers="+encodeURIComponent(String(gd(F)))+"&"+f:this.m&&Ac(p,this.m,F)),Ic(this.h,V),this.Ua&&Qe(p,"TYPE","init"),this.P?(Qe(p,"$req",f),Qe(p,"SID","null"),V.T=!0,Ec(V,p,null)):Ec(V,p,f),this.G=2}}else this.G==3&&(a?Id(this,a):this.i.length==0||sd(this.h)||Id(this))};function Id(a,f){var p;f?p=f.l:p=a.U++;const y=Fn(a.I);Qe(y,"SID",a.K),Qe(y,"RID",p),Qe(y,"AID",a.T),Li(a,y),a.m&&a.o&&Ac(y,a.m,a.o),p=new mr(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),f&&(a.i=f.D.concat(a.i)),f=Ad(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ic(a.h,p),Ec(p,y,f)}function Li(a,f){a.H&&J(a.H,function(p,y){Qe(f,y,p)}),a.l&&ld({},function(p,y){Qe(f,y,p)})}function Ad(a,f,p){p=Math.min(a.i.length,p);var y=a.l?m(a.l.Na,a.l,a):null;e:{var V=a.i;let F=-1;for(;;){const X=["count="+p];F==-1?0<p?(F=V[0].g,X.push("ofs="+F)):F=0:X.push("ofs="+F);let ze=!0;for(let yt=0;yt<p;yt++){let Me=V[yt].g;const At=V[yt].map;if(Me-=F,0>Me)F=Math.max(0,V[yt].g-100),ze=!1;else try{J0(At,X,"req"+Me+"_")}catch{y&&y(At)}}if(ze){y=X.join("&");break e}}}return a=a.i.splice(0,p),f.D=a,y}function Sd(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;re||Vt(),we||(re(),we=!0),Bt.add(f,a),a.v=0}}function Cc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ri(m(a.Fa,a),Pd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Cd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ri(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Mt(10),da(this),Cd(this))};function Rc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Cd(a){a.g=new mr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=Fn(a.qa);Qe(f,"RID","rpc"),Qe(f,"SID",a.K),Qe(f,"AID",a.T),Qe(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&Qe(f,"TO",a.ja),Qe(f,"TYPE","xmlhttp"),Li(a,f),a.m&&a.o&&Ac(f,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=ca(Fn(f)),p.m=null,p.P=!0,ed(p,a)}t.Za=function(){this.C!=null&&(this.C=null,da(this),Cc(this),Mt(19))};function ma(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Rd(a,f){var p=null;if(a.g==f){ma(a),Rc(a),a.g=null;var y=2}else if(Tc(a.h,f))p=f.D,od(a.h,f),y=1;else return;if(a.G!=0){if(f.o)if(y==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var V=a.B;y=ra(),Ie(y,new Yf(y,p)),pa(a)}else Sd(a);else if(V=f.s,V==3||V==0&&0<f.X||!(y==1&&n1(a,f)||y==2&&Cc(a)))switch(p&&0<p.length&&(f=a.h,f.i=f.i.concat(p)),V){case 1:is(a,5);break;case 4:is(a,10);break;case 3:is(a,6);break;default:is(a,2)}}}function Pd(a,f){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*f}function is(a,f){if(a.j.info("Error code "+f),f==2){var p=m(a.fb,a),y=a.Xa;const V=!y;y=new ss(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||aa(y,"https"),ca(y),V?Q0(y.toString(),p):Y0(y.toString(),p)}else Mt(2);a.G=0,a.l&&a.l.sa(f),kd(a),Td(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function kd(a){if(a.G=0,a.ka=[],a.l){const f=ad(a.h);(f.length!=0||a.i.length!=0)&&(M(a.ka,f),M(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function xd(a,f,p){var y=p instanceof ss?Fn(p):new ss(p);if(y.g!="")f&&(y.g=f+"."+y.g),la(y,y.s);else{var V=l.location;y=V.protocol,f=f?f+"."+V.hostname:V.hostname,V=+V.port;var F=new ss(null);y&&aa(F,y),f&&(F.g=f),V&&la(F,V),p&&(F.l=p),y=F}return p=a.D,f=a.ya,p&&f&&Qe(y,p,f),Qe(y,"VER",a.la),Li(a,y),y}function Od(a,f,p){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new nt(new ua({eb:p})):new nt(a.pa),f.Ha(a.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Dd(){}t=Dd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ga(){}ga.prototype.g=function(a,f){return new Qt(a,f)};function Qt(a,f){ge.call(this),this.g=new bd(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!O(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!O(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new Ns(this)}P(Qt,ge),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){Sc(this.g)},Qt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=_t(a),a=p);f.i.push(new U0(f.Ya++,a)),f.G==3&&pa(f)},Qt.prototype.N=function(){this.g.l=null,delete this.j,Sc(this.g),delete this.g,Qt.aa.N.call(this)};function Nd(a){gc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const p in f){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}P(Nd,gc);function Vd(){_c.call(this),this.status=1}P(Vd,_c);function Ns(a){this.g=a}P(Ns,Dd),Ns.prototype.ua=function(){Ie(this.g,"a")},Ns.prototype.ta=function(a){Ie(this.g,new Nd(a))},Ns.prototype.sa=function(a){Ie(this.g,new Vd)},Ns.prototype.ra=function(){Ie(this.g,"b")},ga.prototype.createWebChannel=ga.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,vv=function(){return new ga},yv=function(){return ra()},_v=ns,Ou={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},sa.NO_ERROR=0,sa.TIMEOUT=8,sa.HTTP_ERROR=6,Fa=sa,Xf.COMPLETE="complete",gv=Xf,Wf.EventType=Si,Si.OPEN="a",Si.CLOSE="b",Si.ERROR="c",Si.MESSAGE="d",ge.prototype.listen=ge.prototype.K,zi=Wf,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,mv=nt}).apply(typeof Ta<"u"?Ta:typeof self<"u"?self:typeof window<"u"?window:{});const _m="@firebase/firestore",ym="4.8.0";/**
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
 */class Pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
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
 */let Ei="11.10.0";/**
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
 */const bs=new Mh("@firebase/firestore");function $s(){return bs.logLevel}function se(t,...e){if(bs.logLevel<=Re.DEBUG){const n=e.map(Xh);bs.debug(`Firestore (${Ei}): ${t}`,...n)}}function sr(t,...e){if(bs.logLevel<=Re.ERROR){const n=e.map(Xh);bs.error(`Firestore (${Ei}): ${t}`,...n)}}function Hr(t,...e){if(bs.logLevel<=Re.WARN){const n=e.map(Xh);bs.warn(`Firestore (${Ei}): ${t}`,...n)}}function Xh(t){if(typeof t=="string")return t;try{/**
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
 */function ye(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Ev(t,r,n)}function Ev(t,e,n){let r=`FIRESTORE (${Ei}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw sr(r),new Error(r)}function Be(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Ev(e,s,r)}function Te(t,e){return t}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends cr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class wv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pt.UNAUTHENTICATED))}shutdown(){}}class YC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XC{constructor(e){this.t=e,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Be(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Be(typeof r.accessToken=="string",31837,{l:r}),new wv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string",2055,{h:e}),new Pt(e)}}class JC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ZC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new JC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Be(this.o===void 0,3512);const r=i=>{i.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,se("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new vm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Be(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new vm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function tR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function bv(){return new TextEncoder}/**
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
 */class Jh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=tR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ce(t,e){return t<e?-1:t>e?1:0}function Du(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Ce(r,s);{const i=bv(),o=nR(i.encode(Em(t,n)),i.encode(Em(e,n)));return o!==0?o:Ce(r,s)}}n+=r>65535?2:1}return Ce(t.length,e.length)}function Em(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function nR(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Ce(t[n],e[n]);return Ce(t.length,e.length)}function ai(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const wm="__name__";class wn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ye(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ye(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=wn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ce(e.length,n.length)}static compareSegments(e,n){const r=wn.isNumericId(e),s=wn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?wn.extractNumericId(e).compare(wn.extractNumericId(n)):Du(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Lr.fromString(e.substring(4,e.length-2))}}class Ye extends wn{construct(e,n,r){return new Ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ye(n)}static emptyPath(){return new Ye([])}}const rR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends wn{construct(e,n,r){return new wt(e,n,r)}static isValidIdentifier(e){return rR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wm}static keyField(){return new wt([wm])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ce(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ce(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ce(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ce(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(n)}static emptyPath(){return new wt([])}}/**
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
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(Ye.fromString(e))}static fromName(e){return new me(Ye.fromString(e).popFirst(5))}static empty(){return new me(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new Ye(e.slice()))}}/**
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
 */function Tv(t,e,n){if(!n)throw new ce(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sR(t,e,n,r){if(e===!0&&r===!0)throw new ce(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function bm(t){if(!me.isDocumentKey(t))throw new ce(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Tm(t){if(me.isDocumentKey(t))throw new ce(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Iv(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Zh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ye(12329,{type:typeof t})}function gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zh(t);throw new ce(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function at(t,e){const n={typeString:t};return e&&(n.value=e),n}function Wo(t,e){if(!Iv(t))throw new ce(q.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ce(q.INVALID_ARGUMENT,n);return!0}/**
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
 */const Im=-62135596800,Am=1e6;class Xe{static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Am);return new Xe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Im)throw new ce(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Am}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Wo(e,Xe._jsonSchema))return new Xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Im;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Xe._jsonSchemaVersion="firestore/timestamp/1.0",Xe._jsonSchema={type:at("string",Xe._jsonSchemaVersion),seconds:at("number"),nanoseconds:at("number")};/**
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
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new Xe(0,0))}static max(){return new Ee(new Xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ro=-1;function iR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Ee.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new zr(s,me.empty(),e)}function oR(t){return new zr(t.readTime,t.key,Ro)}class zr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new zr(Ee.min(),me.empty(),Ro)}static max(){return new zr(Ee.max(),me.empty(),Ro)}}function aR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=me.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const lR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function wi(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==lR)throw t;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(s=>s?H.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new H((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++l,l===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new H((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function uR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Wl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Wl.ue=-1;/**
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
 */const ef=-1;function Gl(t){return t==null}function ul(t){return t===0&&1/t==-1/0}function hR(t){return typeof t=="number"&&Number.isInteger(t)&&!ul(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Av="";function fR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Sm(e)),e=dR(t.get(n),e);return Sm(e)}function dR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Av:n+="";break;default:n+=i}}return n}function Sm(t){return t+Av+""}/**
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
 */function Cm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Sv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class tt{constructor(e,n){this.comparator=e,this.root=n||vt.EMPTY}insert(e,n){return new tt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ia(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ia(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ia(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ia(this.root,e,this.comparator,!0)}}class Ia{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class vt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??vt.RED,this.left=s??vt.EMPTY,this.right=i??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new vt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return vt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new vt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Rm(this.data.getIterator())}getIteratorFrom(e){return new Rm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class Rm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Zt{constructor(e){this.fields=e,e.sort(wt.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new ut(wt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ai(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Cv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Cv("Invalid base64 string: "+i):i}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const pR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qr(t){if(Be(!!t,39018),typeof t=="string"){let e=0;const n=pR.exec(t);if(Be(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wr(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
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
 */const Rv="server_timestamp",Pv="__type__",kv="__previous_value__",xv="__local_write_time__";function tf(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Pv])===null||n===void 0?void 0:n.stringValue)===Rv}function Kl(t){const e=t.mapValue.fields[kv];return tf(e)?Kl(e):e}function Po(t){const e=qr(t.mapValue.fields[xv].timestampValue);return new Xe(e.seconds,e.nanos)}/**
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
 */class mR{constructor(e,n,r,s,i,o,l,c,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h}}const hl="(default)";class ko{constructor(e,n){this.projectId=e,this.database=n||hl}static empty(){return new ko("","")}get isDefaultDatabase(){return this.database===hl}isEqual(e){return e instanceof ko&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ov="__type__",gR="__max__",Aa={mapValue:{}},Dv="__vector__",fl="value";function Gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tf(t)?4:yR(t)?9007199254740991:_R(t)?10:11:ye(28295,{value:t})}function Nn(t,e){if(t===e)return!0;const n=Gr(t);if(n!==Gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Po(t).isEqual(Po(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=qr(s.timestampValue),l=qr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Wr(s.bytesValue).isEqual(Wr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return st(s.geoPointValue.latitude)===st(i.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return st(s.integerValue)===st(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=st(s.doubleValue),l=st(i.doubleValue);return o===l?ul(o)===ul(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ai(t.arrayValue.values||[],e.arrayValue.values||[],Nn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Cm(o)!==Cm(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Nn(o[c],l[c])))return!1;return!0}(t,e);default:return ye(52216,{left:t})}}function xo(t,e){return(t.values||[]).find(n=>Nn(n,e))!==void 0}function li(t,e){if(t===e)return 0;const n=Gr(t),r=Gr(e);if(n!==r)return Ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=st(i.integerValue||i.doubleValue),c=st(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Pm(t.timestampValue,e.timestampValue);case 4:return Pm(Po(t),Po(e));case 5:return Du(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Wr(i),c=Wr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=Ce(l[u],c[u]);if(h!==0)return h}return Ce(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ce(st(i.latitude),st(o.latitude));return l!==0?l:Ce(st(i.longitude),st(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return km(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,h;const d=i.fields||{},m=o.fields||{},_=(l=d[fl])===null||l===void 0?void 0:l.arrayValue,P=(c=m[fl])===null||c===void 0?void 0:c.arrayValue,x=Ce(((u=_?.values)===null||u===void 0?void 0:u.length)||0,((h=P?.values)===null||h===void 0?void 0:h.length)||0);return x!==0?x:km(_,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Aa.mapValue&&o===Aa.mapValue)return 0;if(i===Aa.mapValue)return 1;if(o===Aa.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const m=Du(c[d],h[d]);if(m!==0)return m;const _=li(l[c[d]],u[h[d]]);if(_!==0)return _}return Ce(c.length,h.length)}(t.mapValue,e.mapValue);default:throw ye(23264,{le:n})}}function Pm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=qr(t),r=qr(e),s=Ce(n.seconds,r.seconds);return s!==0?s:Ce(n.nanos,r.nanos)}function km(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=li(n[s],r[s]);if(i)return i}return Ce(n.length,r.length)}function ci(t){return Nu(t)}function Nu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=qr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Wr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return me.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Nu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Nu(n.fields[o])}`;return s+"}"}(t.mapValue):ye(61005,{value:t})}function Ua(t){switch(Gr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Kl(t);return e?16+Ua(e):16;case 5:return 2*t.stringValue.length;case 6:return Wr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ua(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return es(r.fields,(i,o)=>{s+=i.length+Ua(o)}),s}(t.mapValue);default:throw ye(13486,{value:t})}}function Vu(t){return!!t&&"integerValue"in t}function nf(t){return!!t&&"arrayValue"in t}function xm(t){return!!t&&"nullValue"in t}function Om(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $a(t){return!!t&&"mapValue"in t}function _R(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ov])===null||n===void 0?void 0:n.stringValue)===Dv}function lo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=lo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=lo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function yR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===gR}/**
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
 */class Kt{constructor(e){this.value=e}static empty(){return new Kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$a(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=lo(n)}setAll(e){let n=wt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=lo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());$a(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];$a(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){es(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Kt(lo(this.value))}}function Nv(t){const e=[];return es(t.fields,(n,r)=>{const s=new wt([n]);if($a(r)){const i=Nv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Zt(e)}/**
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
 */class xt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new xt(e,0,Ee.min(),Ee.min(),Ee.min(),Kt.empty(),0)}static newFoundDocument(e,n,r,s){return new xt(e,1,n,Ee.min(),r,s,0)}static newNoDocument(e,n){return new xt(e,2,n,Ee.min(),Ee.min(),Kt.empty(),0)}static newUnknownDocument(e,n){return new xt(e,3,n,Ee.min(),Ee.min(),Kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class dl{constructor(e,n){this.position=e,this.inclusive=n}}function Dm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=me.comparator(me.fromName(o.referenceValue),n.key):r=li(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Nm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class pl{constructor(e,n="asc"){this.field=e,this.dir=n}}function vR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Vv{}class ct extends Vv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new wR(e,n,r):n==="array-contains"?new IR(e,r):n==="in"?new AR(e,r):n==="not-in"?new SR(e,r):n==="array-contains-any"?new CR(e,r):new ct(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bR(e,r):new TR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(li(n,this.value)):n!==null&&Gr(this.value)===Gr(n)&&this.matchesComparison(li(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends Vv{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Vn(e,n)}matches(e){return Mv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Mv(t){return t.op==="and"}function Lv(t){return ER(t)&&Mv(t)}function ER(t){for(const e of t.filters)if(e instanceof Vn)return!1;return!0}function Mu(t){if(t instanceof ct)return t.field.canonicalString()+t.op.toString()+ci(t.value);if(Lv(t))return t.filters.map(e=>Mu(e)).join(",");{const e=t.filters.map(n=>Mu(n)).join(",");return`${t.op}(${e})`}}function Fv(t,e){return t instanceof ct?function(r,s){return s instanceof ct&&r.op===s.op&&r.field.isEqual(s.field)&&Nn(r.value,s.value)}(t,e):t instanceof Vn?function(r,s){return s instanceof Vn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Fv(o,s.filters[l]),!0):!1}(t,e):void ye(19439)}function Uv(t){return t instanceof ct?function(n){return`${n.field.canonicalString()} ${n.op} ${ci(n.value)}`}(t):t instanceof Vn?function(n){return n.op.toString()+" {"+n.getFilters().map(Uv).join(" ,")+"}"}(t):"Filter"}class wR extends ct{constructor(e,n,r){super(e,n,r),this.key=me.fromName(r.referenceValue)}matches(e){const n=me.comparator(e.key,this.key);return this.matchesComparison(n)}}class bR extends ct{constructor(e,n){super(e,"in",n),this.keys=$v("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class TR extends ct{constructor(e,n){super(e,"not-in",n),this.keys=$v("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $v(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>me.fromName(r.referenceValue))}class IR extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return nf(n)&&xo(n.arrayValue,this.value)}}class AR extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xo(this.value.arrayValue,n)}}class SR extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(xo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!xo(this.value.arrayValue,n)}}class CR extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!nf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xo(this.value.arrayValue,r))}}/**
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
 */class RR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function Vm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new RR(t,e,n,r,s,i,o)}function rf(t){const e=Te(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Mu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Gl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ci(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ci(r)).join(",")),e.Pe=n}return e.Pe}function sf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!vR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Fv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Nm(t.startAt,e.startAt)&&Nm(t.endAt,e.endAt)}function Lu(t){return me.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ql{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function PR(t,e,n,r,s,i,o,l){return new Ql(t,e,n,r,s,i,o,l)}function of(t){return new Ql(t)}function Mm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kR(t){return t.collectionGroup!==null}function co(t){const e=Te(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ut(wt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new pl(i,r))}),n.has(wt.keyField().canonicalString())||e.Te.push(new pl(wt.keyField(),r))}return e.Te}function Rn(t){const e=Te(t);return e.Ie||(e.Ie=xR(e,co(t))),e.Ie}function xR(t,e){if(t.limitType==="F")return Vm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new pl(s.field,i)});const n=t.endAt?new dl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new dl(t.startAt.position,t.startAt.inclusive):null;return Vm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Fu(t,e,n){return new Ql(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yl(t,e){return sf(Rn(t),Rn(e))&&t.limitType===e.limitType}function jv(t){return`${rf(Rn(t))}|lt:${t.limitType}`}function js(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Uv(s)).join(", ")}]`),Gl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ci(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ci(s)).join(",")),`Target(${r})`}(Rn(t))}; limitType=${t.limitType})`}function Xl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):me.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of co(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=Dm(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,co(r),s)||r.endAt&&!function(o,l,c){const u=Dm(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,co(r),s))}(t,e)}function OR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Bv(t){return(e,n)=>{let r=!1;for(const s of co(t)){const i=DR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function DR(t,e,n){const r=t.field.isKeyField()?me.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?li(c,u):ye(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ye(19790,{direction:t.dir})}}/**
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
 */class Ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){es(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Sv(this.inner)}size(){return this.innerSize}}/**
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
 */const NR=new tt(me.comparator);function ir(){return NR}const Hv=new tt(me.comparator);function qi(...t){let e=Hv;for(const n of t)e=e.insert(n.key,n);return e}function zv(t){let e=Hv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ps(){return uo()}function qv(){return uo()}function uo(){return new Ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const VR=new tt(me.comparator),MR=new ut(me.comparator);function Pe(...t){let e=MR;for(const n of t)e=e.add(n);return e}const LR=new ut(Ce);function FR(){return LR}/**
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
 */function af(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ul(e)?"-0":e}}function Wv(t){return{integerValue:""+t}}function UR(t,e){return hR(e)?Wv(e):af(t,e)}/**
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
 */class Jl{constructor(){this._=void 0}}function $R(t,e,n){return t instanceof Oo?function(s,i){const o={fields:{[Pv]:{stringValue:Rv},[xv]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&tf(i)&&(i=Kl(i)),i&&(o.fields[kv]=i),{mapValue:o}}(n,e):t instanceof Do?Kv(t,e):t instanceof ui?Qv(t,e):function(s,i){const o=Gv(s,i),l=Lm(o)+Lm(s.Ee);return Vu(o)&&Vu(s.Ee)?Wv(l):af(s.serializer,l)}(t,e)}function jR(t,e,n){return t instanceof Do?Kv(t,e):t instanceof ui?Qv(t,e):n}function Gv(t,e){return t instanceof ml?function(r){return Vu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Oo extends Jl{}class Do extends Jl{constructor(e){super(),this.elements=e}}function Kv(t,e){const n=Yv(e);for(const r of t.elements)n.some(s=>Nn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ui extends Jl{constructor(e){super(),this.elements=e}}function Qv(t,e){let n=Yv(e);for(const r of t.elements)n=n.filter(s=>!Nn(s,r));return{arrayValue:{values:n}}}class ml extends Jl{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Lm(t){return st(t.integerValue||t.doubleValue)}function Yv(t){return nf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Xv{constructor(e,n){this.field=e,this.transform=n}}function BR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Do&&s instanceof Do||r instanceof ui&&s instanceof ui?ai(r.elements,s.elements,Nn):r instanceof ml&&s instanceof ml?Nn(r.Ee,s.Ee):r instanceof Oo&&s instanceof Oo}(t.transform,e.transform)}class HR{constructor(e,n){this.version=e,this.transformResults=n}}class an{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ja(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Zl{}function Jv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new lf(t.key,an.none()):new Go(t.key,t.data,an.none());{const n=t.data,r=Kt.empty();let s=new ut(wt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ts(t.key,r,new Zt(s.toArray()),an.none())}}function zR(t,e,n){t instanceof Go?function(s,i,o){const l=s.value.clone(),c=Um(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ts?function(s,i,o){if(!ja(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Um(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Zv(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ho(t,e,n,r){return t instanceof Go?function(i,o,l,c){if(!ja(i.precondition,o))return l;const u=i.value.clone(),h=$m(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ts?function(i,o,l,c){if(!ja(i.precondition,o))return l;const u=$m(i.fieldTransforms,c,o),h=o.data;return h.setAll(Zv(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,l){return ja(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function qR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Gv(r.transform,s||null);i!=null&&(n===null&&(n=Kt.empty()),n.set(r.field,i))}return n||null}function Fm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ai(r,s,(i,o)=>BR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Go extends Zl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ts extends Zl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Zv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Um(t,e,n){const r=new Map;Be(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,jR(o,l,n[s]))}return r}function $m(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,$R(i,o,e))}return r}class lf extends Zl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class WR extends Zl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class GR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&zR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ho(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ho(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=qv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Jv(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Pe())}isEqual(e){return this.batchId===e.batchId&&ai(this.mutations,e.mutations,(n,r)=>Fm(n,r))&&ai(this.baseMutations,e.baseMutations,(n,r)=>Fm(n,r))}}class cf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Be(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return VR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new cf(e,n,r,s)}}/**
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
 */class KR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class QR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ot,xe;function YR(t){switch(t){case q.OK:return ye(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return ye(15467,{code:t})}}function eE(t){if(t===void 0)return sr("GRPC error has no .code"),q.UNKNOWN;switch(t){case ot.OK:return q.OK;case ot.CANCELLED:return q.CANCELLED;case ot.UNKNOWN:return q.UNKNOWN;case ot.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case ot.INTERNAL:return q.INTERNAL;case ot.UNAVAILABLE:return q.UNAVAILABLE;case ot.UNAUTHENTICATED:return q.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case ot.NOT_FOUND:return q.NOT_FOUND;case ot.ALREADY_EXISTS:return q.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return q.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case ot.ABORTED:return q.ABORTED;case ot.OUT_OF_RANGE:return q.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return q.UNIMPLEMENTED;case ot.DATA_LOSS:return q.DATA_LOSS;default:return ye(39323,{code:t})}}(xe=ot||(ot={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const XR=new Lr([4294967295,4294967295],0);function jm(t){const e=bv().encode(t),n=new pv;return n.update(e),new Uint8Array(n.digest())}function Bm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Lr([n,r],0),new Lr([s,i],0)]}class uf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Wi(`Invalid padding: ${n}`);if(r<0)throw new Wi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Wi(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Lr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(Lr.fromNumber(r)));return s.compare(XR)===1&&(s=new Lr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=jm(e),[r,s]=Bm(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new uf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=jm(e),[r,s]=Bm(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Wi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ec{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ko.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ec(Ee.min(),s,new tt(Ce),ir(),Pe())}}class Ko{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ko(r,n,Pe(),Pe(),Pe())}}/**
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
 */class Ba{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class tE{constructor(e,n){this.targetId=e,this.De=n}}class nE{constructor(e,n,r=Tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Hm{constructor(){this.ve=0,this.Ce=zm(),this.Fe=Tt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Pe(),n=Pe(),r=Pe();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ye(38017,{changeType:i})}}),new Ko(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=zm()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Be(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class JR{constructor(e){this.We=e,this.Ge=new Map,this.ze=ir(),this.je=Sa(),this.Je=Sa(),this.He=new tt(Ce)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:ye(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,s)=>{this.nt(s)&&n(s)})}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Lu(i))if(r===0){const o=new me(i.path);this.Xe(n,o,xt.newNoDocument(o,Ee.min()))}else Be(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),c=l?this.ut(l,e,o):1;if(c!==0){this.rt(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Wr(r).toUint8Array()}catch(c){if(c instanceof Cv)return Hr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new uf(o,s,i)}catch(c){return Hr(c instanceof Wi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)}),s}Pt(e){const n=new Map;this.Ge.forEach((i,o)=>{const l=this.st(o);if(l){if(i.current&&Lu(l.target)){const c=new me(l.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,xt.newNoDocument(c,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}});let r=Pe();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.st(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ze.forEach((i,o)=>o.setReadTime(e));const s=new ec(e,n,this.He,this.ze,r);return this.ze=ir(),this.je=Sa(),this.Je=Sa(),this.He=new tt(Ce),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Hm,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new ut(Ce),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new ut(Ce),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||se("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Hm),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Sa(){return new tt(me.comparator)}function zm(){return new tt(me.comparator)}const ZR={asc:"ASCENDING",desc:"DESCENDING"},eP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tP={and:"AND",or:"OR"};class nP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Uu(t,e){return t.useProto3Json||Gl(e)?e:{value:e}}function gl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function rP(t,e){return gl(t,e.toTimestamp())}function Pn(t){return Be(!!t,49232),Ee.fromTimestamp(function(n){const r=qr(n);return new Xe(r.seconds,r.nanos)}(t))}function hf(t,e){return $u(t,e).canonicalString()}function $u(t,e){const n=function(s){return new Ye(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function sE(t){const e=Ye.fromString(t);return Be(cE(e),10190,{key:e.toString()}),e}function ju(t,e){return hf(t.databaseId,e.path)}function Jc(t,e){const n=sE(e);if(n.get(1)!==t.databaseId.projectId)throw new ce(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new me(oE(n))}function iE(t,e){return hf(t.databaseId,e)}function sP(t){const e=sE(t);return e.length===4?Ye.emptyPath():oE(e)}function Bu(t){return new Ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oE(t){return Be(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function qm(t,e,n){return{name:ju(t,e),fields:n.value.mapValue.fields}}function iP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ye(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Be(h===void 0||typeof h=="string",58123),Tt.fromBase64String(h||"")):(Be(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Tt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const h=u.code===void 0?q.UNKNOWN:eE(u.code);return new ce(h,u.message||"")}(o);n=new nE(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Jc(t,r.document.name),i=Pn(r.document.updateTime),o=r.document.createTime?Pn(r.document.createTime):Ee.min(),l=new Kt({mapValue:{fields:r.document.fields}}),c=xt.newFoundDocument(s,i,o,l),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Ba(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Jc(t,r.document),i=r.readTime?Pn(r.readTime):Ee.min(),o=xt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ba([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Jc(t,r.document),i=r.removedTargetIds||[];n=new Ba([],i,s,null)}else{if(!("filter"in e))return ye(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new QR(s,i),l=r.targetId;n=new tE(l,o)}}return n}function oP(t,e){let n;if(e instanceof Go)n={update:qm(t,e.key,e.value)};else if(e instanceof lf)n={delete:ju(t,e.key)};else if(e instanceof ts)n={update:qm(t,e.key,e.data),updateMask:mP(e.fieldMask)};else{if(!(e instanceof WR))return ye(16599,{Rt:e.type});n={verify:ju(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Oo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Do)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ui)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ml)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw ye(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:rP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ye(27497)}(t,e.precondition)),n}function aP(t,e){return t&&t.length>0?(Be(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Pn(s.updateTime):Pn(i);return o.isEqual(Ee.min())&&(o=Pn(i)),new HR(o,s.transformResults||[])}(n,e))):[]}function lP(t,e){return{documents:[iE(t,e.path)]}}function cP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=iE(t,s);const i=function(u){if(u.length!==0)return lE(Vn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:Bs(m.field),direction:fP(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Uu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{Vt:n,parent:s}}function uP(t){let e=sP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Be(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const m=aE(d);return m instanceof Vn&&Lv(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(P){return new pl(Hs(P.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(d){let m;return m=typeof d=="object"?d.value:d,Gl(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(d){const m=!!d.before,_=d.values||[];return new dl(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const m=!d.before,_=d.values||[];return new dl(_,m)}(n.endAt)),PR(e,s,o,i,l,"F",c,u)}function hP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function aE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Hs(n.unaryFilter.field);return ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Hs(n.unaryFilter.field);return ct.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Hs(n.unaryFilter.field);return ct.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Hs(n.unaryFilter.field);return ct.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}}(t):t.fieldFilter!==void 0?function(n){return ct.create(Hs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Vn.create(n.compositeFilter.filters.map(r=>aE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ye(1026)}}(n.compositeFilter.op))}(t):ye(30097,{filter:t})}function fP(t){return ZR[t]}function dP(t){return eP[t]}function pP(t){return tP[t]}function Bs(t){return{fieldPath:t.canonicalString()}}function Hs(t){return wt.fromServerFormat(t.fieldPath)}function lE(t){return t instanceof ct?function(n){if(n.op==="=="){if(Om(n.value))return{unaryFilter:{field:Bs(n.field),op:"IS_NAN"}};if(xm(n.value))return{unaryFilter:{field:Bs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Om(n.value))return{unaryFilter:{field:Bs(n.field),op:"IS_NOT_NAN"}};if(xm(n.value))return{unaryFilter:{field:Bs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bs(n.field),op:dP(n.op),value:n.value}}}(t):t instanceof Vn?function(n){const r=n.getFilters().map(s=>lE(s));return r.length===1?r[0]:{compositeFilter:{op:pP(n.op),filters:r}}}(t):ye(54877,{filter:t})}function mP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class xr{constructor(e,n,r,s,i=Ee.min(),o=Ee.min(),l=Tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class gP{constructor(e){this.gt=e}}function _P(t){const e=uP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fu(e,e.limit,"L"):e}/**
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
 */class yP{constructor(){this.Dn=new vP}addToCollectionParentIndex(e,n){return this.Dn.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(zr.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(zr.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class vP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(Ye.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(Ye.comparator)).toArray()}}/**
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
 */const Wm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},uE=41943040;class Wt{static withCacheSize(e){return new Wt(e,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Wt.DEFAULT_COLLECTION_PERCENTILE=10,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wt.DEFAULT=new Wt(uE,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wt.DISABLED=new Wt(-1,0,0);/**
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
 */class hi{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new hi(0)}static ur(){return new hi(-1)}}/**
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
 */const Gm="LruGarbageCollector",EP=1048576;function Km([t,e],[n,r]){const s=Ce(t,n);return s===0?Ce(e,r):s}class wP{constructor(e){this.Tr=e,this.buffer=new ut(Km),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Km(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class bP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){se(Gm,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){bi(n)?se(Gm,"Ignoring IndexedDB error during garbage collection: ",n):await wi(n)}await this.Rr(3e5)})}}class TP{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return H.resolve(Wl.ue);const r=new wP(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(Wm)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wm):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,l=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),$s()<=Re.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function IP(t,e){return new TP(t,e)}/**
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
 */class AP{constructor(){this.changes=new Ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class SP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class CP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ho(r.mutation,s,Zt.empty(),Xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Pe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Pe()){const s=ps();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=qi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ps();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Pe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=ir();const o=uo(),l=function(){return uo()}();return n.forEach((c,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof ts)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ho(h.mutation,u,h.mutation.getFieldMask(),Xe.now())):o.set(u.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return l.set(u,new SP(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),l))}recalculateAndSaveOverlays(e,n){const r=uo();let s=new tt((o,l)=>o-l),i=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=r.get(c)||Zt.empty();h=l.applyToLocalView(u,h),r.set(c,h);const d=(s.get(l.batchId)||Pe()).add(c);s=s.insert(l.batchId,d)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,d=qv();h.forEach(m=>{if(!i.has(m)){const _=Jv(n.get(m),r.get(m));_!==null&&d.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return me.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):H.resolve(ps());let l=Ro,c=i;return o.next(u=>H.forEach(u,(h,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),i.get(h)?H.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{c=c.insert(h,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Pe())).next(h=>({batchId:l,changes:zv(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new me(n)).next(r=>{let s=qi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=qi();return this.indexManager.getCollectionParents(e,i).next(l=>H.forEach(l,c=>{const u=function(d,m){return new Ql(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,xt.newInvalidDocument(h)))});let l=qi();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&ho(h.mutation,u,Zt.empty(),Xe.now()),Xl(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class RP{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return H.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Pn(s.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(s){return{name:s.name,query:_P(s.bundledQuery),readTime:Pn(s.readTime)}}(n)),H.resolve()}}/**
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
 */class PP{constructor(){this.overlays=new tt(me.comparator),this.kr=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ps();return H.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.wt(e,n,i)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const s=ps(),i=n.length+1,o=new me(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return H.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new tt((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=ps(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=ps(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>l.set(u,h)),!(l.size()>=s)););return H.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new KR(n,r));let i=this.kr.get(n);i===void 0&&(i=Pe(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class kP{constructor(){this.sessionToken=Tt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
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
 */class ff{constructor(){this.qr=new ut(ft.Qr),this.$r=new ut(ft.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new ft(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new ft(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new me(new Ye([])),r=new ft(n,e),s=new ft(n,e+1),i=[];return this.$r.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new me(new Ye([])),r=new ft(n,e),s=new ft(n,e+1);let i=Pe();return this.$r.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ft(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ft{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return me.comparator(e.key,n.key)||Ce(e.Hr,n.Hr)}static Ur(e,n){return Ce(e.Hr,n.Hr)||me.comparator(e.key,n.key)}}/**
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
 */class xP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new ut(ft.Qr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new GR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new ft(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?ef:this.er-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ft(n,0),s=new ft(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(Ce);return n.forEach(s=>{const i=new ft(s,0),o=new ft(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),H.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;me.isDocumentKey(i)||(i=i.child(""));const o=new ft(new me(i),0);let l=new ut(Ce);return this.Yr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)},o),H.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Be(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return H.forEach(n.mutations,s=>{const i=new ft(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new ft(n,0),s=this.Yr.firstAfterOrEqual(r);return H.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class OP{constructor(e){this.ni=e,this.docs=function(){return new tt(me.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():xt.newInvalidDocument(n))}getEntries(e,n){let r=ir();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():xt.newInvalidDocument(s))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ir();const o=n.path,l=new me(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||aR(oR(h),r)<=0||(s.has(h.key)||Xl(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ye(9500)}ri(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new DP(this)}getSize(e){return H.resolve(this.size)}}class DP extends AP{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class NP{constructor(e){this.persistence=e,this.ii=new Ps(n=>rf(n),sf),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.si=0,this.oi=new ff,this.targetCount=0,this._i=hi.ar()}forEachTarget(e,n){return this.ii.forEach((r,s)=>n(s)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),H.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new hi(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.hr(n),H.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),H.waitFor(i).next(()=>s)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.oi.containsKey(n))}}/**
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
 */class hE{constructor(e,n){this.ai={},this.overlays={},this.ui=new Wl(0),this.ci=!1,this.ci=!0,this.li=new kP,this.referenceDelegate=e(this),this.hi=new NP(this),this.indexManager=new yP,this.remoteDocumentCache=function(s){return new OP(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new gP(n),this.Ti=new RP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new xP(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){se("MemoryPersistence","Starting transaction:",e);const s=new VP(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return H.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class VP extends cR{constructor(e){super(),this.currentSequenceNumber=e}}class df{constructor(e){this.persistence=e,this.Ai=new ff,this.Ri=null}static Vi(e){return new df(e)}get mi(){if(this.Ri)return this.Ri;throw ye(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),H.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.mi,r=>{const s=me.fromPath(r);return this.fi(e,s).next(i=>{i||n.removeEntry(s,Ee.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return H.or([()=>H.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class _l{constructor(e,n){this.persistence=e,this.gi=new Ps(r=>fR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=IP(this,n)}static Vi(e,n){return new _l(e,n)}Ii(){}di(e){return H.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return H.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?H.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,Ee.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),H.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),H.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),H.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ua(e.data.value)),n}Sr(e,n,r){return H.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return H.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class pf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=Pe(),s=Pe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new pf(e,n.fromCache,r,s)}}/**
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
 */class MP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class LP{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return cI()?8:uR(Ot())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ys(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new MP;return this.ws(e,n,o).next(l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>i.result)}Ss(e,n,r,s){return r.documentReadCount<this.Vs?($s()<=Re.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",js(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),H.resolve()):($s()<=Re.DEBUG&&se("QueryEngine","Query:",js(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?($s()<=Re.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",js(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rn(n))):H.resolve())}ps(e,n){if(Mm(n))return H.resolve(null);let r=Rn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Fu(n,null,"F"),r=Rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Pe(...i);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.bs(n,l);return this.Ds(n,u,o,c.readTime)?this.ps(e,Fu(n,null,"F")):this.vs(e,u,n,c)}))})))}ys(e,n,r,s){return Mm(n)||s.isEqual(Ee.min())?H.resolve(null):this.gs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?H.resolve(null):($s()<=Re.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),js(n)),this.vs(e,o,n,iR(s,Ro)).next(l=>l))})}bs(e,n){let r=new ut(Bv(e));return n.forEach((s,i)=>{Xl(e,i)&&(r=r.add(i))}),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return $s()<=Re.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",js(n)),this.gs.getDocumentsMatchingQuery(e,n,zr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const mf="LocalStore",FP=3e8;class UP{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new tt(Ce),this.Ms=new Ps(i=>rf(i),sf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new CP(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function $P(t,e,n,r){return new UP(t,e,n,r)}async function fE(t,e){const n=Te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Pe();for(const u of s){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Bs:u,removedBatchIds:o,addedBatchIds:l}))})})}function jP(t,e){const n=Te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,c,u,h){const d=u.batch,m=d.keys();let _=H.resolve();return m.forEach(P=>{_=_.next(()=>h.getEntry(c,P)).next(x=>{const M=u.docVersions.get(P);Be(M!==null,48541),x.version.compareTo(M)<0&&(d.applyToRemoteDocument(x,u),x.isValidDocument()&&(x.setReadTime(u.commitVersion),h.addEntry(x)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Pe();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function dE(t){const e=Te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function BP(t,e){const n=Te(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach((h,d)=>{const m=s.get(d);if(!m)return;l.push(n.hi.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.hi.addMatchingKeys(i,h.addedDocuments,d)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?_=_.withResumeToken(Tt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),s=s.insert(d,_),function(x,M,N){return x.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=FP?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(m,_,h)&&l.push(n.hi.updateTargetData(i,_))});let c=ir(),u=Pe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),l.push(HP(i,o,e.documentUpdates).next(h=>{c=h.Ls,u=h.ks})),!r.isEqual(Ee.min())){const h=n.hi.getLastRemoteSnapshotVersion(i).next(d=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(h)}return H.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Fs=s,i))}function HP(t,e,n){let r=Pe(),s=Pe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=ir();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(Ee.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):se(mf,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ls:o,ks:s}})}function zP(t,e){const n=Te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ef),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qP(t,e){const n=Te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.hi.getTargetData(r,e).next(i=>i?(s=i,H.resolve(s)):n.hi.allocateTargetId(r).next(o=>(s=new xr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function Hu(t,e,n){const r=Te(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!bi(o))throw o;se(mf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Qm(t,e,n){const r=Te(t);let s=Ee.min(),i=Pe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const d=Te(c),m=d.Ms.get(h);return m!==void 0?H.resolve(d.Fs.get(m)):d.hi.getTargetData(u,h)}(r,o,Rn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:Ee.min(),n?i:Pe())).next(l=>(WP(r,OR(e),l),{documents:l,qs:i})))}function WP(t,e,n){let r=t.xs.get(e)||Ee.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.xs.set(e,r)}class Ym{constructor(){this.activeTargetIds=FR()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GP{constructor(){this.Fo=new Ym,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Ym,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class KP{xo(e){}shutdown(){}}/**
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
 */const Xm="ConnectivityMonitor";class Jm{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){se(Xm,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){se(Xm,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ca=null;function zu(){return Ca===null?Ca=function(){return 268435456+Math.round(2147483648*Math.random())}():Ca++,"0x"+Ca.toString(16)}/**
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
 */const Zc="RestConnection",QP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class YP{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===hl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=zu(),l=this.Go(e,n.toUriEncodedString());se(Zc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:u}=new URL(l),h=_i(u);return this.jo(e,l,c,r,h).then(d=>(se(Zc,`Received RPC '${e}' ${o}: `,d),d),d=>{throw Hr(Zc,`RPC '${e}' ${o} failed with error: `,d,"url: ",l,"request:",r),d})}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ei}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,n){const r=QP[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class XP{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Ct="WebChannelConnection";class JP extends YP{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=zu();return new Promise((l,c)=>{const u=new mv;u.setWithCredentials(!0),u.listenOnce(gv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Fa.NO_ERROR:const d=u.getResponseJson();se(Ct,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),l(d);break;case Fa.TIMEOUT:se(Ct,`RPC '${e}' ${o} timed out`),c(new ce(q.DEADLINE_EXCEEDED,"Request time out"));break;case Fa.HTTP_ERROR:const m=u.getStatus();if(se(Ct,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const P=_?.error;if(P&&P.status&&P.message){const x=function(N){const O=N.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(O)>=0?O:q.UNKNOWN}(P.status);c(new ce(x,P.message))}else c(new ce(q.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ce(q.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{se(Ct,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);se(Ct,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)})}P_(e,n,r){const s=zu(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vv(),l=yv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const h=i.join("");se(Ct,`Creating RPC '${e}' stream ${s}: ${h}`,c);const d=o.createWebChannel(h,c);this.T_(d);let m=!1,_=!1;const P=new XP({Ho:M=>{_?se(Ct,`Not sending because RPC '${e}' stream ${s} is closed:`,M):(m||(se(Ct,`Opening RPC '${e}' stream ${s} transport.`),d.open(),m=!0),se(Ct,`RPC '${e}' stream ${s} sending:`,M),d.send(M))},Yo:()=>d.close()}),x=(M,N,O)=>{M.listen(N,L=>{try{O(L)}catch(U){setTimeout(()=>{throw U},0)}})};return x(d,zi.EventType.OPEN,()=>{_||(se(Ct,`RPC '${e}' stream ${s} transport opened.`),P.s_())}),x(d,zi.EventType.CLOSE,()=>{_||(_=!0,se(Ct,`RPC '${e}' stream ${s} transport closed`),P.__(),this.I_(d))}),x(d,zi.EventType.ERROR,M=>{_||(_=!0,Hr(Ct,`RPC '${e}' stream ${s} transport errored. Name:`,M.name,"Message:",M.message),P.__(new ce(q.UNAVAILABLE,"The operation could not be completed")))}),x(d,zi.EventType.MESSAGE,M=>{var N;if(!_){const O=M.data[0];Be(!!O,16349);const L=O,U=L?.error||((N=L[0])===null||N===void 0?void 0:N.error);if(U){se(Ct,`RPC '${e}' stream ${s} received error:`,U);const G=U.status;let J=function(v){const S=ot[v];if(S!==void 0)return eE(S)}(G),R=U.message;J===void 0&&(J=q.INTERNAL,R="Unknown error status: "+G+" with message "+U.message),_=!0,P.__(new ce(J,R)),d.close()}else se(Ct,`RPC '${e}' stream ${s} received:`,O),P.a_(O)}}),x(l,_v.STAT_EVENT,M=>{M.stat===Ou.PROXY?se(Ct,`RPC '${e}' stream ${s} detected buffering proxy`):M.stat===Ou.NOPROXY&&se(Ct,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.o_()},0),P}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function eu(){return typeof document<"u"?document:null}/**
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
 */function tc(t){return new nP(t,!0)}/**
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
 */class pE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&se("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Zm="PersistentStream";class mE{constructor(e,n,r,s,i,o,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new pE(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(sr(n.toString()),sr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===n&&this.W_(r,s)},r=>{e(()=>{const s=new ce(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return se(Zm,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(se(Zm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZP extends mE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=iP(this.serializer,e),r=function(i){if(!("targetChange"in i))return Ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Ee.min():o.readTime?Pn(o.readTime):Ee.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Bu(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Lu(c)?{documents:lP(i,c)}:{query:cP(i,c).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=rE(i,o.resumeToken);const u=Uu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(Ee.min())>0){l.readTime=gl(i,o.snapshotVersion.toTimestamp());const u=Uu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=hP(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Bu(this.serializer),n.removeTarget=e,this.k_(n)}}class e2 extends mE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=aP(e.writeResults,e.commitTime),r=Pn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Bu(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>oP(this.serializer,r))};this.k_(n)}}/**
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
 */class t2{}class n2 extends t2{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new ce(q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,$u(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ce(q.UNKNOWN,i.toString())})}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,$u(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ce(q.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class r2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(sr(n),this._a=!1):se("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Ts="RemoteStore";class s2{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{ks(this)&&(se(Ts,"Restarting streams for network reachability change."),await async function(c){const u=Te(c);u.Ia.add(4),await Qo(u),u.Aa.set("Unknown"),u.Ia.delete(4),await nc(u)}(this))})}),this.Aa=new r2(r,s)}}async function nc(t){if(ks(t))for(const e of t.da)await e(!0)}async function Qo(t){for(const e of t.da)await e(!1)}function gE(t,e){const n=Te(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),vf(n)?yf(n):Ti(n).x_()&&_f(n,e))}function gf(t,e){const n=Te(t),r=Ti(n);n.Ta.delete(e),r.x_()&&_E(n,e),n.Ta.size===0&&(r.x_()?r.B_():ks(n)&&n.Aa.set("Unknown"))}function _f(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ti(t).H_(e)}function _E(t,e){t.Ra.$e(e),Ti(t).Y_(e)}function yf(t){t.Ra=new JR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Ti(t).start(),t.Aa.aa()}function vf(t){return ks(t)&&!Ti(t).M_()&&t.Ta.size>0}function ks(t){return Te(t).Ia.size===0}function yE(t){t.Ra=void 0}async function i2(t){t.Aa.set("Online")}async function o2(t){t.Ta.forEach((e,n)=>{_f(t,e)})}async function a2(t,e){yE(t),vf(t)?(t.Aa.la(e),yf(t)):t.Aa.set("Unknown")}async function l2(t,e,n){if(t.Aa.set("Online"),e instanceof nE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))}(t,e)}catch(r){se(Ts,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yl(t,r)}else if(e instanceof Ba?t.Ra.Ye(e):e instanceof tE?t.Ra.it(e):t.Ra.et(e),!n.isEqual(Ee.min()))try{const r=await dE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.Ta.get(u);h&&i.Ta.set(u,h.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const h=i.Ta.get(c);if(!h)return;i.Ta.set(c,h.withResumeToken(Tt.EMPTY_BYTE_STRING,h.snapshotVersion)),_E(i,c);const d=new xr(h.target,c,u,h.sequenceNumber);_f(i,d)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){se(Ts,"Failed to raise snapshot:",r),await yl(t,r)}}async function yl(t,e,n){if(!bi(e))throw e;t.Ia.add(1),await Qo(t),t.Aa.set("Offline"),n||(n=()=>dE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{se(Ts,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await nc(t)})}function vE(t,e){return e().catch(n=>yl(t,n,e))}async function rc(t){const e=Te(t),n=Kr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:ef;for(;c2(e);)try{const s=await zP(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,u2(e,s)}catch(s){await yl(e,s)}EE(e)&&wE(e)}function c2(t){return ks(t)&&t.Pa.length<10}function u2(t,e){t.Pa.push(e);const n=Kr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function EE(t){return ks(t)&&!Kr(t).M_()&&t.Pa.length>0}function wE(t){Kr(t).start()}async function h2(t){Kr(t).na()}async function f2(t){const e=Kr(t);for(const n of t.Pa)e.X_(n.mutations)}async function d2(t,e,n){const r=t.Pa.shift(),s=cf.from(r,e,n);await vE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await rc(t)}async function p2(t,e){e&&Kr(t).Z_&&await async function(r,s){if(function(o){return YR(o)&&o!==q.ABORTED}(s.code)){const i=r.Pa.shift();Kr(r).N_(),await vE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await rc(r)}}(t,e),EE(t)&&wE(t)}async function eg(t,e){const n=Te(t);n.asyncQueue.verifyOperationInProgress(),se(Ts,"RemoteStore received new credentials");const r=ks(n);n.Ia.add(3),await Qo(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await nc(n)}async function m2(t,e){const n=Te(t);e?(n.Ia.delete(2),await nc(n)):e||(n.Ia.add(2),await Qo(n),n.Aa.set("Unknown"))}function Ti(t){return t.Va||(t.Va=function(n,r,s){const i=Te(n);return i.ia(),new ZP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:i2.bind(null,t),e_:o2.bind(null,t),n_:a2.bind(null,t),J_:l2.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),vf(t)?yf(t):t.Aa.set("Unknown")):(await t.Va.stop(),yE(t))})),t.Va}function Kr(t){return t.ma||(t.ma=function(n,r,s){const i=Te(n);return i.ia(),new e2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:h2.bind(null,t),n_:p2.bind(null,t),ea:f2.bind(null,t),ta:d2.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await rc(t)):(await t.ma.stop(),t.Pa.length>0&&(se(Ts,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
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
 */class Ef{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Ef(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wf(t,e){if(sr("AsyncQueue",`${e}: ${t}`),bi(t))return new ce(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Xs{static emptySet(e){return new Xs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||me.comparator(n.key,r.key):(n,r)=>me.comparator(n.key,r.key),this.keyedMap=qi(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class tg{constructor(){this.fa=new tt(me.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ye(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class fi{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new fi(e,n,Xs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class g2{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class _2{constructor(){this.queries=ng(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=Te(n),i=s.queries;s.queries=ng(),i.forEach((o,l)=>{for(const c of l.wa)c.onError(r)})})(this,new ce(q.ABORTED,"Firestore shutting down"))}}function ng(){return new Ps(t=>jv(t),Yl)}async function bE(t,e){const n=Te(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new g2,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=wf(o,`Initialization of query '${js(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&bf(n)}async function TE(t,e){const n=Te(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function y2(t,e){const n=Te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&bf(n)}function v2(t,e,n){const r=Te(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function bf(t){t.Da.forEach(e=>{e.next()})}var qu,rg;(rg=qu||(qu={})).Fa="default",rg.Cache="cache";class IE{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new fi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=fi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==qu.Cache}}/**
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
 */class AE{constructor(e){this.key=e}}class SE{constructor(e){this.key=e}}class E2{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Pe(),this.mutatedKeys=Pe(),this.Xa=Bv(e),this.eu=new Xs(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new tg,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const m=s.get(h),_=Xl(this.query,d)?d:null,P=!!m&&this.mutatedKeys.has(m.key),x=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let M=!1;m&&_?m.data.isEqual(_.data)?P!==x&&(r.track({type:3,doc:_}),M=!0):this.iu(m,_)||(r.track({type:2,doc:_}),M=!0,(c&&this.Xa(_,c)>0||u&&this.Xa(_,u)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),M=!0):m&&!_&&(r.track({type:1,doc:m}),M=!0,(c||u)&&(l=!0)),M&&(_?(o=o.add(_),i=x?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((h,d)=>function(_,P){const x=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{At:M})}};return x(_)-x(P)}(h.type,d.type)||this.Xa(h.doc,d.doc)),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,u=c!==this.Ya;return this.Ya=c,o.length!==0||u?{snapshot:new fi(this.query,e.eu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new tg,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Pe(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new SE(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new AE(r))}),n}uu(e){this.Ha=e.qs,this.Za=Pe();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return fi.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Tf="SyncEngine";class w2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class b2{constructor(e){this.key=e,this.lu=!1}}class T2{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Ps(l=>jv(l),Yl),this.Tu=new Map,this.Iu=new Set,this.du=new tt(me.comparator),this.Eu=new Map,this.Au=new ff,this.Ru={},this.Vu=new Map,this.mu=hi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function I2(t,e,n=!0){const r=OE(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await CE(r,e,n,!0),s}async function A2(t,e){const n=OE(t);await CE(n,e,!0,!1)}async function CE(t,e,n,r){const s=await qP(t.localStore,Rn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await S2(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&gE(t.remoteStore,s),l}async function S2(t,e,n,r,s){t.gu=(d,m,_)=>async function(x,M,N,O){let L=M.view.nu(N);L.Ds&&(L=await Qm(x.localStore,M.query,!1).then(({documents:R})=>M.view.nu(R,L)));const U=O&&O.targetChanges.get(M.targetId),G=O&&O.targetMismatches.get(M.targetId)!=null,J=M.view.applyChanges(L,x.isPrimaryClient,U,G);return ig(x,M.targetId,J._u),J.snapshot}(t,d,m,_);const i=await Qm(t.localStore,e,!0),o=new E2(e,i.qs),l=o.nu(i.documents),c=Ko.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);ig(t,n,u._u);const h=new w2(e,n,o);return t.Pu.set(e,h),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function C2(t,e,n){const r=Te(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(o=>!Yl(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Hu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&gf(r.remoteStore,s.targetId),Wu(r,s.targetId)}).catch(wi)):(Wu(r,s.targetId),await Hu(r.localStore,s.targetId,!0))}async function R2(t,e){const n=Te(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),gf(n.remoteStore,r.targetId))}async function P2(t,e,n){const r=M2(t);try{const s=await function(o,l){const c=Te(o),u=Xe.now(),h=l.reduce((_,P)=>_.add(P.key),Pe());let d,m;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let P=ir(),x=Pe();return c.Os.getEntries(_,h).next(M=>{P=M,P.forEach((N,O)=>{O.isValidDocument()||(x=x.add(N))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,P)).next(M=>{d=M;const N=[];for(const O of l){const L=qR(O,d.get(O.key).overlayedDocument);L!=null&&N.push(new ts(O.key,L,Nv(L.value.mapValue),an.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,N,l)}).next(M=>{m=M;const N=M.applyToLocalDocumentSet(d,x);return c.documentOverlayCache.saveOverlays(_,M.batchId,N)})}).then(()=>({batchId:m.batchId,changes:zv(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Ru[o.currentUser.toKey()];u||(u=new tt(Ce)),u=u.insert(l,c),o.Ru[o.currentUser.toKey()]=u}(r,s.batchId,n),await Yo(r,s.changes),await rc(r.remoteStore)}catch(s){const i=wf(s,"Failed to persist write");n.reject(i)}}async function RE(t,e){const n=Te(t);try{const r=await BP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(Be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?Be(o.lu,14607):s.removedDocuments.size>0&&(Be(o.lu,42227),o.lu=!1))}),await Yo(n,r,e)}catch(r){await wi(r)}}function sg(t,e,n){const r=Te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=Te(o);c.onlineState=l;let u=!1;c.queries.forEach((h,d)=>{for(const m of d.wa)m.va(l)&&(u=!0)}),u&&bf(c)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function k2(t,e,n){const r=Te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new tt(me.comparator);o=o.insert(i,xt.newNoDocument(i,Ee.min()));const l=Pe().add(i),c=new ec(Ee.min(),new Map,new tt(Ce),o,l);await RE(r,c),r.du=r.du.remove(i),r.Eu.delete(e),If(r)}else await Hu(r.localStore,e,!1).then(()=>Wu(r,e,n)).catch(wi)}async function x2(t,e){const n=Te(t),r=e.batch.batchId;try{const s=await jP(n.localStore,e);kE(n,r,null),PE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yo(n,s)}catch(s){await wi(s)}}async function O2(t,e,n){const r=Te(t);try{const s=await function(o,l){const c=Te(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,l).next(d=>(Be(d!==null,37113),h=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(r.localStore,e);kE(r,e,n),PE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yo(r,s)}catch(s){await wi(s)}}function PE(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function kE(t,e,n){const r=Te(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Wu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||xE(t,r)})}function xE(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(gf(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),If(t))}function ig(t,e,n){for(const r of n)r instanceof AE?(t.Au.addReference(r.key,e),D2(t,r)):r instanceof SE?(se(Tf,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||xE(t,r.key)):ye(19791,{yu:r})}function D2(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(se(Tf,"New document in limbo: "+n),t.Iu.add(r),If(t))}function If(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new me(Ye.fromString(e)),r=t.mu.next();t.Eu.set(r,new b2(n)),t.du=t.du.insert(n,r),gE(t.remoteStore,new xr(Rn(of(n.path)),r,"TargetPurposeLimboResolution",Wl.ue))}}async function Yo(t,e,n){const r=Te(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,c)=>{o.push(r.gu(c,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n?.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){s.push(u);const d=pf.Es(c.targetId,u);i.push(d)}}))}),await Promise.all(o),r.hu.J_(s),await async function(c,u){const h=Te(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>H.forEach(u,m=>H.forEach(m.Is,_=>h.persistence.referenceDelegate.addReference(d,m.targetId,_)).next(()=>H.forEach(m.ds,_=>h.persistence.referenceDelegate.removeReference(d,m.targetId,_)))))}catch(d){if(!bi(d))throw d;se(mf,"Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const _=h.Fs.get(m),P=_.snapshotVersion,x=_.withLastLimboFreeSnapshotVersion(P);h.Fs=h.Fs.insert(m,x)}}}(r.localStore,i))}async function N2(t,e){const n=Te(t);if(!n.currentUser.isEqual(e)){se(Tf,"User change. New user:",e.toKey());const r=await fE(n.localStore,e);n.currentUser=e,function(i,o){i.Vu.forEach(l=>{l.forEach(c=>{c.reject(new ce(q.CANCELLED,o))})}),i.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yo(n,r.Bs)}}function V2(t,e){const n=Te(t),r=n.Eu.get(e);if(r&&r.lu)return Pe().add(r.key);{let s=Pe();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function OE(t){const e=Te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=RE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=V2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=k2.bind(null,e),e.hu.J_=y2.bind(null,e.eventManager),e.hu.pu=v2.bind(null,e.eventManager),e}function M2(t){const e=Te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=x2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=O2.bind(null,e),e}class vl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=tc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return $P(this.persistence,new LP,e.initialUser,this.serializer)}Du(e){return new hE(df.Vi,this.serializer)}bu(e){return new GP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vl.provider={build:()=>new vl};class L2 extends vl{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Be(this.persistence.referenceDelegate instanceof _l,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new bP(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Wt.withCacheSize(this.cacheSizeBytes):Wt.DEFAULT;return new hE(r=>_l.Vi(r,n),this.serializer)}}class Gu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=N2.bind(null,this.syncEngine),await m2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _2}()}createDatastore(e){const n=tc(e.databaseInfo.databaseId),r=function(i){return new JP(i)}(e.databaseInfo);return function(i,o,l,c){return new n2(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new s2(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>sg(this.syncEngine,n,0),function(){return Jm.C()?new Jm:new KP}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,h){const d=new T2(s,i,o,l,c,u);return h&&(d.fu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Te(s);se(Ts,"RemoteStore shutting down."),i.Ia.add(5),await Qo(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Gu.provider={build:()=>new Gu};/**
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
 */class DE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):sr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Qr="FirestoreClient";class F2{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Pt.UNAUTHENTICATED,this.clientId=Jh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{se(Qr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(se(Qr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tu(t,e){t.asyncQueue.verifyOperationInProgress(),se(Qr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await fE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{Hr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{se("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{Hr("Terminating Firestore due to IndexedDb database deletion failed",s)})}),t._offlineComponents=e}async function og(t,e){t.asyncQueue.verifyOperationInProgress();const n=await U2(t);se(Qr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>eg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>eg(e.remoteStore,s)),t._onlineComponents=e}async function U2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){se(Qr,"Using user provided OfflineComponentProvider");try{await tu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===q.FAILED_PRECONDITION||s.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Hr("Error using user provided cache. Falling back to memory cache: "+n),await tu(t,new vl)}}else se(Qr,"Using default OfflineComponentProvider"),await tu(t,new L2(void 0));return t._offlineComponents}async function NE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(se(Qr,"Using user provided OnlineComponentProvider"),await og(t,t._uninitializedComponentsProvider._online)):(se(Qr,"Using default OnlineComponentProvider"),await og(t,new Gu))),t._onlineComponents}function $2(t){return NE(t).then(e=>e.syncEngine)}async function VE(t){const e=await NE(t),n=e.eventManager;return n.onListen=I2.bind(null,e.syncEngine),n.onUnlisten=C2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=A2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=R2.bind(null,e.syncEngine),n}function j2(t,e,n={}){const r=new Zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const h=new DE({next:m=>{h.Ou(),o.enqueueAndForget(()=>TE(i,d));const _=m.docs.has(l);!_&&m.fromCache?u.reject(new ce(q.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new ce(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new IE(of(l.path),h,{includeMetadataChanges:!0,ka:!0});return bE(i,d)}(await VE(t),t.asyncQueue,e,n,r)),r.promise}function B2(t,e,n={}){const r=new Zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const h=new DE({next:m=>{h.Ou(),o.enqueueAndForget(()=>TE(i,d)),m.fromCache&&c.source==="server"?u.reject(new ce(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new IE(l,h,{includeMetadataChanges:!0,ka:!0});return bE(i,d)}(await VE(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function ME(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const LE="firestore.googleapis.com",lg=!0;class cg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=LE,this.ssl=lg}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:lg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=uE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<EP)throw new ce(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ME((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ce(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ce(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ce(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new QC;switch(r.type){case"firstParty":return new ZC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ag.get(n);r&&(se("ComponentProvider","Removing Datastore"),ag.delete(n),r.terminate())}(this),Promise.resolve()}}function H2(t,e,n,r={}){var s;t=gn(t,sc);const i=_i(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(Cy(`https://${c}`),Ry("Firestore",!0)),o.host!==LE&&o.host!==c&&Hr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!Br(u,l)&&(t._setSettings(u),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=Pt.MOCK_USER;else{h=eI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new ce(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Pt(m)}t._authCredentials=new YC(new wv(h,d))}}/**
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
 */class ic{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ic(this.firestore,e,this._query)}}class lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}toJSON(){return{type:lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Wo(n,lt._jsonSchema))return new lt(e,r||null,new me(Ye.fromString(n.referencePath)))}}lt._jsonSchemaVersion="firestore/documentReference/1.0",lt._jsonSchema={type:at("string",lt._jsonSchemaVersion),referencePath:at("string")};class Fr extends ic{constructor(e,n,r){super(e,n,of(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new me(e))}withConverter(e){return new Fr(this.firestore,e,this._path)}}function Js(t,e,...n){if(t=ht(t),Tv("collection","path",e),t instanceof sc){const r=Ye.fromString(e,...n);return Tm(r),new Fr(t,null,r)}{if(!(t instanceof lt||t instanceof Fr))throw new ce(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ye.fromString(e,...n));return Tm(r),new Fr(t.firestore,null,r)}}function kn(t,e,...n){if(t=ht(t),arguments.length===1&&(e=Jh.newId()),Tv("doc","path",e),t instanceof sc){const r=Ye.fromString(e,...n);return bm(r),new lt(t,null,new me(r))}{if(!(t instanceof lt||t instanceof Fr))throw new ce(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ye.fromString(e,...n));return bm(r),new lt(t.firestore,t instanceof Fr?t.converter:null,new me(r))}}/**
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
 */const ug="AsyncQueue";class hg{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new pE(this,"async_queue_retry"),this.oc=()=>{const r=eu();r&&se(ug,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=eu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=eu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Zn;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!bi(e))throw e;se(ug,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,sr("INTERNAL UNHANDLED ERROR: ",fg(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=Ef.createAndSchedule(this,e,n,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&ye(47125,{hc:fg(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function fg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class xs extends sc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new hg,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hg(e),this._firestoreClient=void 0,await e}}}function Xo(t,e){const n=typeof t=="object"?t:Oy(),r=typeof t=="string"?t:hl,s=Fh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=JT("firestore");i&&H2(s,...i)}return s}function Af(t){if(t._terminated)throw new ce(q.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||z2(t),t._firestoreClient}function z2(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,h){return new mR(l,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,ME(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new F2(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sn(Tt.fromBase64String(e))}catch(n){throw new ce(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new sn(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:sn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Wo(e,sn._jsonSchema))return sn.fromBase64String(e.bytes)}}sn._jsonSchemaVersion="firestore/bytes/1.0",sn._jsonSchema={type:at("string",sn._jsonSchemaVersion),bytes:at("string")};/**
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
 */class oc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Jo{constructor(e){this._methodName=e}}/**
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
 */class xn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xn._jsonSchemaVersion}}static fromJSON(e){if(Wo(e,xn._jsonSchema))return new xn(e.latitude,e.longitude)}}xn._jsonSchemaVersion="firestore/geoPoint/1.0",xn._jsonSchema={type:at("string",xn._jsonSchemaVersion),latitude:at("number"),longitude:at("number")};/**
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
 */class On{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:On._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Wo(e,On._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new On(e.vectorValues);throw new ce(q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}On._jsonSchemaVersion="firestore/vectorValue/1.0",On._jsonSchema={type:at("string",On._jsonSchemaVersion),vectorValues:at("object")};/**
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
 */const q2=/^__.*__$/;class W2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ts(e,this.data,this.fieldMask,n,this.fieldTransforms):new Go(e,this.data,n,this.fieldTransforms)}}class FE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ts(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function UE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{Ec:t})}}class ac{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new ac(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return El(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(UE(this.Ec)&&q2.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class G2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||tc(e)}Dc(e,n,r,s=!1){return new ac({Ec:e,methodName:n,bc:r,path:wt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sf(t){const e=t._freezeSettings(),n=tc(t._databaseId);return new G2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $E(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);Pf("Data must be an object, but it was:",o,r);const l=jE(r,o);let c,u;if(i.merge)c=new Zt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const m=Ku(e,d,n);if(!o.contains(m))throw new ce(q.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);HE(h,m)||h.push(m)}c=new Zt(h),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new W2(new Kt(l),c,u)}class lc extends Jo{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lc}}function K2(t,e,n){return new ac({Ec:3,bc:e.settings.bc,methodName:t._methodName,mc:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Cf extends Jo{_toFieldTransform(e){return new Xv(e.path,new Oo)}isEqual(e){return e instanceof Cf}}class Rf extends Jo{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=K2(this,e,!0),r=this.vc.map(i=>Zo(i,n)),s=new ui(r);return new Xv(e.path,s)}isEqual(e){return e instanceof Rf&&Br(this.vc,e.vc)}}function Q2(t,e,n,r){const s=t.Dc(1,e,n);Pf("Data must be an object, but it was:",s,r);const i=[],o=Kt.empty();es(r,(c,u)=>{const h=kf(e,c,n);u=ht(u);const d=s.gc(h);if(u instanceof lc)i.push(h);else{const m=Zo(u,d);m!=null&&(i.push(h),o.set(h,m))}});const l=new Zt(i);return new FE(o,l,s.fieldTransforms)}function Y2(t,e,n,r,s,i){const o=t.Dc(1,e,n),l=[Ku(e,r,n)],c=[s];if(i.length%2!=0)throw new ce(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Ku(e,i[m])),c.push(i[m+1]);const u=[],h=Kt.empty();for(let m=l.length-1;m>=0;--m)if(!HE(u,l[m])){const _=l[m];let P=c[m];P=ht(P);const x=o.gc(_);if(P instanceof lc)u.push(_);else{const M=Zo(P,x);M!=null&&(u.push(_),h.set(_,M))}}const d=new Zt(u);return new FE(h,d,o.fieldTransforms)}function Zo(t,e){if(BE(t=ht(t)))return Pf("Unsupported field value:",e,t),jE(t,e);if(t instanceof Jo)return function(r,s){if(!UE(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Zo(l,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return UR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Xe.fromDate(r);return{timestampValue:gl(s.serializer,i)}}if(r instanceof Xe){const i=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gl(s.serializer,i)}}if(r instanceof xn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof sn)return{bytesValue:rE(s.serializer,r._byteString)};if(r instanceof lt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:hf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof On)return function(o,l){return{mapValue:{fields:{[Ov]:{stringValue:Dv},[fl]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.wc("VectorValues must only contain numeric values.");return af(l.serializer,u)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${Zh(r)}`)}(t,e)}function jE(t,e){const n={};return Sv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):es(t,(r,s)=>{const i=Zo(s,e.Vc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function BE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof xn||t instanceof sn||t instanceof lt||t instanceof Jo||t instanceof On)}function Pf(t,e,n){if(!BE(n)||!Iv(n)){const r=Zh(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function Ku(t,e,n){if((e=ht(e))instanceof oc)return e._internalPath;if(typeof e=="string")return kf(t,e);throw El("Field path arguments must be of type string or ",t,!1,void 0,n)}const X2=new RegExp("[~\\*/\\[\\]]");function kf(t,e,n){if(e.search(X2)>=0)throw El(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new oc(...e.split("."))._internalPath}catch{throw El(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function El(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ce(q.INVALID_ARGUMENT,l+t+c)}function HE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class zE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new J2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class J2 extends zE{data(){return super.data()}}function qE(t,e){return typeof e=="string"?kf(t,e):e instanceof oc?e._internalPath:e._delegate._internalPath}/**
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
 */function Z2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ce(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ek{convertValue(e,n="none"){switch(Gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return es(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[fl].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>st(o.doubleValue));return new On(i)}convertGeoPoint(e){return new xn(st(e.latitude),st(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Kl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Po(e));default:return null}}convertTimestamp(e){const n=qr(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ye.fromString(e);Be(cE(r),9688,{name:e});const s=new ko(r.get(1),r.get(3)),i=new me(r.popFirst(5));return s.isEqual(n)||sr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function WE(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Gi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ys extends zE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ha(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(qE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ys._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ys._jsonSchemaVersion="firestore/documentSnapshot/1.0",ys._jsonSchema={type:at("string",ys._jsonSchemaVersion),bundleSource:at("string","DocumentSnapshot"),bundleName:at("string"),bundle:at("string")};class Ha extends ys{data(e={}){return super.data(e)}}class Zs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Gi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ha(this._firestore,this._userDataWriter,r.key,r,new Gi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ce(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Ha(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Gi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ha(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Gi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:tk(l.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Zs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Jh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function tk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:t})}}/**
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
 */function xf(t){t=gn(t,lt);const e=gn(t.firestore,xs);return j2(Af(e),t._key).then(n=>rk(e,t,n))}Zs._jsonSchemaVersion="firestore/querySnapshot/1.0",Zs._jsonSchema={type:at("string",Zs._jsonSchemaVersion),bundleSource:at("string","QuerySnapshot"),bundleName:at("string"),bundle:at("string")};class GE extends ek{constructor(e){super(),this.firestore=e}convertBytes(e){return new sn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function Of(t){t=gn(t,ic);const e=gn(t.firestore,xs),n=Af(e),r=new GE(e);return Z2(t._query),B2(n,t._query).then(s=>new Zs(e,r,t,s))}function nk(t,e,n){t=gn(t,lt);const r=gn(t.firestore,xs),s=WE(t.converter,e);return cc(r,[$E(Sf(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,an.none())])}function wl(t,e,n,...r){t=gn(t,lt);const s=gn(t.firestore,xs),i=Sf(s);let o;return o=typeof(e=ht(e))=="string"||e instanceof oc?Y2(i,"updateDoc",t._key,e,n,r):Q2(i,"updateDoc",t._key,e),cc(s,[o.toMutation(t._key,an.exists(!0))])}function KE(t){return cc(gn(t.firestore,xs),[new lf(t._key,an.none())])}function QE(t,e){const n=gn(t.firestore,xs),r=kn(t),s=WE(t.converter,e);return cc(n,[$E(Sf(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,an.exists(!1))]).then(()=>r)}function cc(t,e){return function(r,s){const i=new Zn;return r.asyncQueue.enqueueAndForget(async()=>P2(await $2(r),s,i)),i.promise}(Af(t),e)}function rk(t,e,n){const r=n.docs.get(e._key),s=new GE(t);return new ys(t,s,e._key,r,new Gi(n.hasPendingWrites,n.fromCache),e.converter)}function Qu(){return new Cf("serverTimestamp")}function sk(...t){return new Rf("arrayRemove",t)}(function(e,n=!0){(function(s){Ei=s})(yi),ii(new vs("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new xs(new XC(r.getProvider("auth-internal")),new eR(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ce(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ko(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Mr(_m,ym,e),Mr(_m,ym,"esm2017")})();const Ln=HT("auth",{state:()=>({user:null,isAuthReady:!1,authInstance:null,loading:!1,error:null,successMessage:null}),actions:{initAuth(t){t&&(this.authInstance=t,nv(this.authInstance,async e=>{if(e){this.user=e;const n=Xo(),s=kn(n,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","users",e.uid),i=await xf(s);i.exists()?this.role=i.data().role:this.role=null}else this.user=null,this.role=null;this.isAuthReady=!0}))},async logout(){this.loading=!0,this.error=null,this.successMessage=null;try{this.authInstance?(await MS(this.authInstance),this.user=null):(console.warn("Auth instance not available for logout."),this.error="Authentication service not available.")}catch(t){console.error("Error logging out:",t),this.error=t.message}finally{this.loading=!1}},async signupWithEmail(t,e,n){this.loading=!0,this.error=null,this.successMessage=null;try{const r=await kS(this.authInstance,e,n);return await DS(r.user,{displayName:t}),this.user=r.user,this.successMessage="Account created successfully!",!0}catch(r){return console.error("Error signing up with email:",r),this.error=r.message,!1}finally{this.loading=!1}},async signInWithEmail(t,e){this.loading=!0,this.error=null,this.successMessage=null;try{const n=await xS(this.authInstance,t,e);return this.user=n.user,!0}catch(n){return console.error("Error signing in with email:",n),this.error=n.message,!1}finally{this.loading=!1}},async signInWithGoogle(){this.loading=!0,this.error=null,this.successMessage=null;try{const t=new Wn,e=await nC(this.authInstance,t);return this.user=e.user,!0}catch(t){return console.error("Error signing in with Google:",t),this.error=t.message,!1}finally{this.loading=!1}},async sendPasswordReset(t){this.loading=!0,this.error=null,this.successMessage=null;try{return await RS(this.authInstance,t),this.successMessage="Password reset link sent to your email!",!0}catch(e){return console.error("Error sending password reset email:",e),this.error=e.message,!1}finally{this.loading=!1}},async confirmPasswordReset(t,e){this.loading=!0,this.error=null,this.successMessage=null;try{return await PS(this.authInstance,t,e),this.successMessage="Your password has been reset successfully! You can now sign in with your new password.",!0}catch(n){return console.error("Error confirming password reset:",n),this.error=n.message,!1}finally{this.loading=!1}}}}),Nt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},ik={class:"counter-label"},ok={class:"progress-details"},ak={class:"counter-bar-container"},lk={class:"counter-value"},ck={__name:"MsvCounter",props:{currentMsv:{type:Number,default:0},yearlyLimit:{type:Number,default:1},currentLanguage:String},setup(t){const e=t,n=Ke(()=>{const r=e.yearlyLimit>0?e.currentMsv/e.yearlyLimit*100:0;return r<50?"status-safe":r<100?"status-warning":"status-danger"});return(r,s)=>(ne(),ae("div",{class:mi(["msv-counter",n.value])},[g("span",ik,k(t.currentLanguage==="en"?"Annual Dose:":"الجرعة السنوية:"),1),g("div",ok,[g("div",ak,[g("div",{class:"counter-bar",style:kl({width:Math.min(t.currentMsv/t.yearlyLimit*100,100)+"%"})},null,4)]),g("span",lk,k(t.currentMsv.toFixed(2))+" mSv ",1)])],2))}},uk=Nt(ck,[["__scopeId","data-v-462fdfbc"]]),hk={class:"app-header"},fk={class:"app-header-center"},dk={class:"project-title"},pk={__name:"TheHeader",props:{currentLanguage:String,user:Object,msvData:Object},emits:["toggle-language","toggle-info-modal"],setup(t){return(e,n)=>(ne(),ae("header",hk,[g("button",{onClick:n[0]||(n[0]=r=>e.$emit("toggle-language")),class:"language-toggle-button"},k(t.currentLanguage==="en"?"العربية":"English"),1),g("div",fk,[g("h1",dk,k(t.currentLanguage==="en"?"mSv Exposure Calculator":"حاسبة التعرض للأشعة"),1),t.user?(ne(),Zr(uk,{key:0,"current-msv":t.msvData.current,"yearly-limit":t.msvData.limit,"current-language":t.currentLanguage},null,8,["current-msv","yearly-limit","current-language"])):He("",!0)]),g("button",{onClick:n[1]||(n[1]=r=>e.$emit("toggle-info-modal")),class:"info-button-global"},k(t.currentLanguage==="en"?"Information":"معلومات"),1)]))}},mk=Nt(pk,[["__scopeId","data-v-a551bd49"]]),gk=["dir"],_k={class:"modal-title"},yk={key:0,class:"info-text-content"},vk={key:1,class:"info-text-content"},Ek=`
<p>التعرض الإشعاعي هو كمية الإشعاع التي يتلقاها الجسم عند مروره في بيئة تحتوي على إشعاع مؤين، مثل الأشعة السينية (X-rays) أو الأشعة المقطعية (CT). وتُقاس الجرعة الإشعاعية بوحدة "الميلي سيفرت" (mSv)، وهي وحدة تعكس التأثير البيولوجي للإشعاع على أنسجة الجسم.</p>
<p>تكمن الخطورة في أن الإشعاع المؤين يمكن أن يسبب تلفًا في الخلايا، مما يزيد من خطر الإصابة بالأمراض المزمنة مثل السرطان، خاصةً مع التعرض المتكرر أو الطويل. لذلك:</p>
<ul>
  <li><strong>المرضى</strong> يجب ألا يتعرضوا إلا عند الضرورة، ويجب تسجيل كل فحص وتقييم فائدته مقابل ضرره.</li>
  <li><strong>العاملون في المجال الطبي</strong> مثل أطباء الأشعة وفنيي الأشعة، يتعرضون بشكل مزمن، مما يستدعي مراقبة دورية واتباع إجراءات السلامة.</li>
  <li><strong>النساء الحوامل</strong> هن فئة خاصة يجب أخذ الحيطة الشديدة عند تعرّضهن للإشعاع لتجنّب التأثير على الجنين.</li>
</ul>
<p><strong>الحد السنوي المسموح به للتعرض الإشعاعي</strong><br>
وفقًا لتوصيات اللجنة الدولية للحماية من الإشعاع (ICRP)، هذه هي الحدود الموصى بها:</p>
`,wk=`
<p>Radiation exposure is the amount of radiation received by the body when passing through an environment containing ionizing radiation, such as X-rays or CT scans. The radiation dose is measured in "millisieverts" (mSv), a unit that reflects the biological effect of radiation on body tissues.</p>
<p>The danger lies in the fact that ionizing radiation can cause cell damage, increasing the risk of chronic diseases like cancer, especially with repeated or prolonged exposure. Therefore:</p>
<ul>
  <li><strong>Patients</strong> should only be exposed when necessary, and every examination should be recorded and its benefit evaluated against its harm.</li>
  <li><strong>Medical professionals</strong>, such as radiologists and radiology technicians, are chronically exposed, requiring periodic monitoring and adherence to safety procedures.</li>
  <li><strong>Pregnant women</strong> are a special category who should exercise extreme caution when exposed to radiation to avoid affecting the fetus.</li>
</ul>
<p><strong>Annual Permissible Radiation Exposure Limit</strong><br>
According to the recommendations of the International Commission on Radiological Protection (ICRP), these are the recommended limits:</p>
`,bk={__name:"InfoModal",props:{show:Boolean,currentLanguage:String},emits:["close"],setup(t){return(e,n)=>(ne(),Zr(gi,{name:"modal-fade"},{default:$r(()=>[t.show?(ne(),ae("div",{key:0,class:"modal-overlay",onClick:n[1]||(n[1]=bt(r=>e.$emit("close"),["self"]))},[g("div",{class:"modal-content",dir:t.currentLanguage==="ar"?"rtl":"ltr"},[g("button",{class:"close-modal-button",onClick:n[0]||(n[0]=r=>e.$emit("close"))},"×"),g("h2",_k,k(t.currentLanguage==="en"?"Radiation Exposure Awareness":"التوعية بالتعرض الإشعاعي"),1),t.currentLanguage==="en"?(ne(),ae("div",yk,[g("div",{innerHTML:wk}),n[2]||(n[2]=g("div",{class:"overflow-x-auto mt-4"},[g("table",{class:"info-table"},[g("thead",null,[g("tr",null,[g("th",null,"Category"),g("th",null,"Annual Permissible Limit"),g("th",null,"Notes")])]),g("tbody",null,[g("tr",null,[g("td",null,"Medical Professionals"),g("td",null,"20 mSv"),g("td",null,"Averaged over 5 years, not exceeding 50 mSv in any single year.")]),g("tr",null,[g("td",null,"Patients"),g("td",null,"No strict limit"),g("td",null,"Exposure should be as low as reasonably achievable (ALARA principle).")]),g("tr",null,[g("td",null,"Pregnant Workers"),g("td",null,"1 mSv to the fetus"),g("td",null,"From the date of knowledge of pregnancy until birth.")]),g("tr",null,[g("td",null,"General Public"),g("td",null,"1 mSv"),g("td",null,"Under normal conditions without medical procedures.")])])])],-1))])):(ne(),ae("div",vk,[g("div",{innerHTML:Ek}),n[3]||(n[3]=g("div",{class:"overflow-x-auto mt-4"},[g("table",{class:"info-table"},[g("thead",null,[g("tr",null,[g("th",null,"الفئة"),g("th",null,"الحد السنوي المسموح به"),g("th",null,"ملاحظات")])]),g("tbody",null,[g("tr",null,[g("td",null,"العاملون في المجال الطبي"),g("td",null,"20 ميلي سيفرت (mSv)"),g("td",null,"كمتوسط على مدى 5 سنوات، بشرط ألا يتجاوز 50 mSv في سنة واحدة.")]),g("tr",null,[g("td",null,"المرضى"),g("td",null,"لا يوجد حد صارم"),g("td",null,"يجب تقليل التعرض بقدر الإمكان وفق مبدأ ALARA.")]),g("tr",null,[g("td",null,"النساء الحوامل العاملات"),g("td",null,"1 ميلي سيفرت للجنين خلال الحمل"),g("td",null,"يجب ألا تتجاوز الجرعة 1 mSv من تاريخ العلم بالحمل وحتى الولادة.")]),g("tr",null,[g("td",null,"العامة (غير العاملين بالمجال)"),g("td",null,"1 ميلي سيفرت"),g("td",null,"في الظروف الطبيعية بدون إجراءات طبية.")])])])],-1))]))],8,gk)])):He("",!0)]),_:1}))}},Tk=Nt(bk,[["__scopeId","data-v-13ace159"]]),Ik={id:"app",class:"min-h-screen bg-gray-100 flex flex-col font-inter"},Ak={__name:"App",setup(t){const e=Le("db"),n=Ln(),r="1:382664693760:web:7582abe58d70b3260f20e5",s=pe("en"),i=pe(!1),o=()=>{s.value=s.value==="en"?"ar":"en"},l=()=>{i.value=!i.value};bn("currentLanguage",s),bn("toggleLanguage",o),bn("toggleInfoModal",l);const c=pe(0),u=Ke(()=>n.role),h=Ke(()=>u.value==="doctor"?20:1),d=async()=>{const m=n.user;if(!m||!u.value){c.value=0;return}try{const _=new Date,P=new Date(_.getFullYear(),0,1),x=Js(e,"artifacts",r,"users",m.uid,"scans"),M=await Of(x);let N=0;M.forEach(O=>{const L=O.data(),U=L.scanDate?.toDate?L.scanDate.toDate():new Date(L.scanDate);U instanceof Date&&!isNaN(U)&&U>=P&&(u.value==="doctor"?typeof L.doctorDose=="number"&&(N+=L.doctorDose):typeof L.dose=="number"&&(N+=L.dose))}),c.value=N}catch(_){console.error("[App.vue] Failed to fetch current mSv:",_)}};return bn("triggerMsvRecalculation",d),bn("currentMsv",c),bn("yearlyLimit",h),jt(()=>n.user,m=>{m?d():c.value=0},{immediate:!0}),(m,_)=>(ne(),ae("div",Ik,[Oe(mk,{"current-language":s.value,user:A(n).user,"msv-data":{current:c.value,limit:h.value},onToggleLanguage:o,onToggleInfoModal:l},null,8,["current-language","user","msv-data"]),Oe(A(gy),null,{default:$r(({Component:P,route:x})=>[Oe(gi,{name:"page-fade",mode:"out-in"},{default:$r(()=>[(ne(),Zr(uw(P),{key:x.path}))]),_:2},1024)]),_:1}),Oe(Tk,{show:i.value,"current-language":s.value,onClose:l},null,8,["show","current-language"])]))}},Sk={class:"signup-page"},Ck={class:"signup-main-content"},Rk={class:"signup-card"},Pk=["dir"],kk=["dir"],xk={class:"form-group"},Ok=["dir"],Dk=["placeholder","dir"],Nk={class:"form-group"},Vk=["dir"],Mk=["placeholder","dir"],Lk={class:"form-group"},Fk=["dir"],Uk=["placeholder","dir"],$k=["disabled"],jk={key:0},Bk={key:1},Hk=["dir"],zk=["dir"],qk=["disabled"],Wk=["dir"],Gk={__name:"SignupView",setup(t){const e=Rs(),n=Ln(),r=Le("currentLanguage"),s=pe(""),i=pe(""),o=pe(""),l=async()=>{if(i.value!==o.value){n.error=r.value==="en"?"Passwords do not match.":"كلمتا المرور غير متطابقتين.";return}await n.signupWithEmail("",s.value,i.value)},c=async()=>{await n.signInWithGoogle()?console.log("Successfully signed in with Google! Redirecting..."):console.error("Google sign-in failed:",n.error)},u=()=>{e.push("/signin")};return(h,d)=>(ne(),ae("div",Sk,[g("main",Ck,[g("section",Rk,[g("h2",{dir:A(r)==="ar"?"rtl":"ltr"},k(A(r)==="en"?"Welcome! Please Sign Up":"أهلاً بك! يرجى التسجيل"),9,Pk),g("p",{dir:A(r)==="ar"?"rtl":"ltr"},k(A(r)==="en"?"Create your account to get started.":"أنشئ حسابك للبدء."),9,kk),g("form",{onSubmit:bt(l,["prevent"]),class:"signup-form"},[g("div",xk,[g("label",{for:"email",dir:A(r)==="ar"?"rtl":"ltr"},k(A(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,Ok),Fe(g("input",{type:"email",id:"email","onUpdate:modelValue":d[0]||(d[0]=m=>s.value=m),placeholder:A(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:A(r)==="ar"?"rtl":"ltr",required:""},null,8,Dk),[[Ze,s.value]])]),g("div",Nk,[g("label",{for:"password",dir:A(r)==="ar"?"rtl":"ltr"},k(A(r)==="en"?"Password":"كلمة المرور"),9,Vk),Fe(g("input",{type:"password",id:"password","onUpdate:modelValue":d[1]||(d[1]=m=>i.value=m),placeholder:A(r)==="en"?"Enter your password":"أدخل كلمة المرور",dir:A(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,Mk),[[Ze,i.value]])]),g("div",Lk,[g("label",{for:"confirmPassword",dir:A(r)==="ar"?"rtl":"ltr"},k(A(r)==="en"?"Confirm Password":"تأكيد كلمة المرور"),9,Fk),Fe(g("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":d[2]||(d[2]=m=>o.value=m),placeholder:A(r)==="en"?"Confirm your password":"أكد كلمة المرور",dir:A(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,Uk),[[Ze,o.value]])]),g("button",{class:"action-button primary",type:"submit",disabled:A(n).loading},[A(n).loading?(ne(),ae("span",jk,k(A(r)==="en"?"Signing Up...":"جاري التسجيل..."),1)):(ne(),ae("span",Bk,k(A(r)==="en"?"Create Account":"إنشاء حساب"),1))],8,$k)],32),A(n).error?(ne(),ae("div",{key:0,class:"message error-message",dir:A(r)==="ar"?"rtl":"ltr"},k(A(n).error),9,Hk)):He("",!0),g("div",{class:"divider",dir:A(r)==="ar"?"rtl":"ltr"},[g("span",null,k(A(r)==="en"?"OR":"أو"),1)],8,zk),g("button",{onClick:c,class:"action-button google-button",disabled:A(n).loading},[d[3]||(d[3]=X_('<svg class="google-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a6c83a63><path d="M44.5 20H24V28.5H35.5C34.75 31.85 32.5 34.5 29.5 36.5L24 41.5L24 48H32.5C39.5 48 44.5 43.5 44.5 36.5C44.5 35.5 44.3 34.5 44.1 33.5L44.5 20Z" fill="#4285F4" data-v-a6c83a63></path><path d="M24 44.5C29.5 44.5 34.25 42.5 37.75 39.25L29.5 36.5C27.25 37.75 24 38.5 24 38.5C18.5 38.5 13.75 34.25 11.75 28.5L6.25 33.5C8.75 38.75 15.5 44.5 24 44.5Z" fill="#34A853" data-v-a6c83a63></path><path d="M11.75 28.5C11.25 27.25 11 25.75 11 24C11 22.25 11.25 20.75 11.75 19.5L17.25 14.5C16 17.25 15.25 20.5 15.25 24C15.25 27.5 16 30.75 17.25 33.5L11.75 28.5Z" fill="#FBBC05" data-v-a6c83a63></path><path d="M24 9.5C26.75 9.5 29.25 10.5 31.25 12.25L36.5 7C32.5 3 27.25 0 24 0C15.5 0 8.75 5.75 6.25 11L11.75 16C13.75 10.25 18.5 6 24 6C24 6 24 9.5 24 9.5Z" fill="#EA4335" data-v-a6c83a63></path></svg>',1)),g("span",null,k(A(r)==="en"?"Sign Up with Google":"التسجيل باستخدام جوجل"),1)],8,qk),g("p",{class:"switch-link-container",dir:A(r)==="ar"?"rtl":"ltr"},[je(k(A(r)==="en"?"Already have an account?":"هل لديك حساب بالفعل؟")+" ",1),g("a",{href:"#",onClick:bt(u,["prevent"])},k(A(r)==="en"?"Sign In":"تسجيل الدخول"),1)],8,Wk)])])]))}},Kk=Nt(Gk,[["__scopeId","data-v-a6c83a63"]]),Qk={class:"login-page"},Yk={class:"login-main-content"},Xk={class:"login-card"},Jk=["dir"],Zk=["dir"],ex={class:"form-group"},tx=["dir"],nx=["placeholder","dir"],rx={class:"form-group"},sx=["dir"],ix=["placeholder","dir"],ox=["dir"],ax=["disabled"],lx={key:0},cx={key:1},ux=["dir"],hx=["dir"],fx=["dir"],dx=["disabled"],px=["dir"],mx={__name:"SigninView",setup(t){const e=Rs(),n=Ln(),r=Le("currentLanguage"),s=pe(""),i=pe(""),o=async()=>{await n.signInWithEmail(s.value,i.value)},l=async()=>{await n.signInWithGoogle()},c=()=>{e.push("/")},u=()=>{e.push("/resetpassword")};return(h,d)=>(ne(),ae("div",Qk,[g("main",Yk,[g("section",Xk,[g("h2",{dir:A(r)==="ar"?"rtl":"ltr"},k(A(r)==="en"?"Welcome Back! Please Sign In":"أهلاً بعودتك! يرجى تسجيل الدخول"),9,Jk),g("p",{dir:A(r)==="ar"?"rtl":"ltr"},k(A(r)==="en"?"Sign in to access your dashboard.":"سجّل الدخول للوصول إلى لوحة التحكم الخاصة بك."),9,Zk),g("form",{onSubmit:bt(o,["prevent"]),class:"login-form"},[g("div",ex,[g("label",{for:"email",dir:A(r)==="ar"?"rtl":"ltr"},k(A(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,tx),Fe(g("input",{type:"email",id:"email","onUpdate:modelValue":d[0]||(d[0]=m=>s.value=m),placeholder:A(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:A(r)==="ar"?"rtl":"ltr",required:""},null,8,nx),[[Ze,s.value]])]),g("div",rx,[g("label",{for:"password",dir:A(r)==="ar"?"rtl":"ltr"},k(A(r)==="en"?"Password":"كلمة المرور"),9,sx),Fe(g("input",{type:"password",id:"password","onUpdate:modelValue":d[1]||(d[1]=m=>i.value=m),placeholder:A(r)==="en"?"Enter your password":"أدخل كلمة المرور",dir:A(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,ix),[[Ze,i.value]]),g("p",{class:"forgot-password-link",dir:A(r)==="ar"?"rtl":"ltr"},[g("a",{href:"#",onClick:bt(u,["prevent"])},k(A(r)==="en"?"Forgot your password?":"هل نسيت كلمة المرور؟"),1)],8,ox)]),g("button",{class:"action-button primary",type:"submit",disabled:A(n).loading},[A(n).loading?(ne(),ae("span",lx,k(A(r)==="en"?"Signing In...":"جاري تسجيل الدخول..."),1)):(ne(),ae("span",cx,k(A(r)==="en"?"Sign in":"تسجيل الدخول"),1))],8,ax)],32),A(n).error?(ne(),ae("div",{key:0,class:"message error-message",dir:A(r)==="ar"?"rtl":"ltr"},k(A(n).error),9,ux)):He("",!0),A(n).successMessage?(ne(),ae("div",{key:1,class:"message success-message",dir:A(r)==="ar"?"rtl":"ltr"},k(A(n).successMessage),9,hx)):He("",!0),g("div",{class:"divider",dir:A(r)==="ar"?"rtl":"ltr"},[g("span",null,k(A(r)==="en"?"OR":"أو"),1)],8,fx),g("button",{onClick:l,class:"action-button google-button",disabled:A(n).loading},[d[2]||(d[2]=X_('<svg class="google-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3884b703><path d="M44.5 20H24V28.5H35.5C34.75 31.85 32.5 34.5 29.5 36.5L24 41.5L24 48H32.5C39.5 48 44.5 43.5 44.5 36.5C44.5 35.5 44.3 34.5 44.1 33.5L44.5 20Z" fill="#4285F4" data-v-3884b703></path><path d="M24 44.5C29.5 44.5 34.25 42.5 37.75 39.25L29.5 36.5C27.25 37.75 24 38.5 24 38.5C18.5 38.5 13.75 34.25 11.75 28.5L6.25 33.5C8.75 38.75 15.5 44.5 24 44.5Z" fill="#34A853" data-v-3884b703></path><path d="M11.75 28.5C11.25 27.25 11 25.75 11 24C11 22.25 11.25 20.75 11.75 19.5L17.25 14.5C16 17.25 15.25 20.5 15.25 24C15.25 27.5 16 30.75 17.25 33.5L11.75 28.5Z" fill="#FBBC05" data-v-3884b703></path><path d="M24 9.5C26.75 9.5 29.25 10.5 31.25 12.25L36.5 7C32.5 3 27.25 0 24 0C15.5 0 8.75 5.75 6.25 11L11.75 16C13.75 10.25 18.5 6 24 6C24 6 24 9.5 24 9.5Z" fill="#EA4335" data-v-3884b703></path></svg>',1)),g("span",null,k(A(r)==="en"?"Sign in with Google":"تسجيل الدخول باستخدام جوجل"),1)],8,dx),g("p",{class:"switch-link-container",dir:A(r)==="ar"?"rtl":"ltr"},[je(k(A(r)==="en"?"Don't have an account?":"ليس لديك حساب؟")+" ",1),g("a",{href:"#",onClick:bt(c,["prevent"])},k(A(r)==="en"?"Sign Up":"التسجيل"),1)],8,px)])])]))}},gx=Nt(mx,[["__scopeId","data-v-3884b703"]]),_x=["dir"],yx={class:"recommend-main-content"},vx={class:"recommend-card"},Ex={key:0,class:"patient-info-display"},wx={class:"form-group"},bx={class:"form-group"},Tx={value:"male"},Ix={value:"female"},Ax={key:0,class:"form-group"},Sx={class:"checkbox-label"},Cx={class:"form-group"},Rx={class:"form-group"},Px={class:"form-group"},kx={key:1,class:"doctor-exposure-section"},xx={class:"section-title"},Ox={class:"form-group"},Dx=["placeholder"],Nx={class:"form-group"},Vx={value:"",disabled:""},Mx={value:"X-ray"},Lx={value:"CT"},Fx=["disabled"],Ux={key:1,class:"message error-message"},$x={key:2,class:"message warning-message"},jx={key:3,class:"prediction-result"},Bx={key:0,class:"msv-details"},Hx={key:1,class:"msv-details doctor-dose"},zx={key:2,class:"factor-details"},qx={class:"result-text"},Wx=["innerHTML"],Gx={class:"switch-link-container"},Kx={__name:"RecommendView",setup(t){const e=Rs(),n=MT(),r=Ln(),s=Le("currentLanguage"),i=Le("db"),o="1:382664693760:web:7582abe58d70b3260f20e5",l=Le("currentMsv"),c=Le("yearlyLimit"),u=pe(n.query.patientId||null),h=pe(""),d=pe(null),m=pe(""),_=pe(""),P=pe(""),x=pe(""),M=pe(!1),N=pe(""),O=pe(""),L=pe(""),U=pe(""),G=pe(null),J=pe(null),R=pe(null),E=pe(!1),v=pe(""),S=pe(""),I=Ke(()=>r.role),b=async Se=>{if(!(!Se||!i||!r.user)){E.value=!0;try{const oe=kn(i,`artifacts/${o}/users/${r.user.uid}/patients`,Se),re=await xf(oe);if(re.exists()){const we=re.data();h.value=we.name,d.value=we.age,m.value=we.gender.toLowerCase(),_.value=we.medicalHistory?.join(", ")||"",x.value=we.allergies?.join(", ")||"",N.value=we.previousRadiationExposure?.join(", ")||""}}catch(oe){console.error("Error fetching patient details:",oe)}finally{E.value=!1}}};jt(()=>n.query.patientId,Se=>{u.value=Se,Se&&b(Se)},{immediate:!0});const w=async()=>{if(E.value=!0,v.value="",U.value="",J.value=null,R.value=null,G.value=null,S.value="",!d.value||!O.value){v.value=s.value==="en"?"Age and Scan Type are required.":"العمر ونوع الفحص حقول مطلوبة.",E.value=!1;return}let Se="",oe={};I.value==="doctor"?(Se=`A doctor is requesting a recommendation for a patient scan.
      User's Current State: The doctor's current total annual occupational dose is ${l.value.toFixed(2)} mSv. The recommended yearly limit for a doctor is ${c.value} mSv.
      Patient Details: Age: ${d.value}, Gender: ${m.value}, Medical History: ${_.value||"None"}, Symptoms: ${P.value||"None"}, Pregnant: ${M.value?"Yes":"No"}, Previous Radiation: ${N.value||"None"}, Scan Type to consider: ${O.value}.
      Doctor's Additional Context for Occupational Exposure: ${L.value||"No additional context provided."}
      Tasks: 1. Provide a concise professional recommendation for the patient. 2. Estimate the scan factors (tubeVoltageKv, tubeCurrentMa, exposureTimeMs). 3. Estimate the patient's effective dose (patientCalculatedMsv). 4. Estimate the doctor's occupational dose (doctorOccupationalMsv) from this single procedure. 5. Based on the doctor's current dose and the estimated occupational dose from this scan, add a specific, clear "Warning" field in your response if their new total will exceed the ${c.value} mSv limit. This field MUST contain a warning message. If it does not exceed the limit, this field should be an empty string.
      The entire response MUST be in ${s.value==="en"?"English":"Arabic"}.`,oe={type:"OBJECT",properties:{recommendationText:{type:"STRING"},factorDetails:{type:"OBJECT",properties:{tubeVoltageKv:{type:"NUMBER"},tubeCurrentMa:{type:"NUMBER"},exposureTimeMs:{type:"NUMBER"}}},patientCalculatedMsv:{type:"NUMBER"},doctorOccupationalMsv:{type:"NUMBER"},Warning:{type:"STRING"}},required:["recommendationText","factorDetails","patientCalculatedMsv","doctorOccupationalMsv","Warning"]}):(Se=`A patient is requesting information about a potential scan.
      User's Current State: The patient's current total annual dose is ${l.value.toFixed(2)} mSv. The recommended yearly limit is ${c.value} mSv.
      Patient Details: Age: ${d.value}, Gender: ${m.value}, Medical History: ${_.value||"None"}, Symptoms: ${P.value||"None"}, Pregnant: ${M.value?"Yes":"No"}, Previous Radiation: ${N.value||"None"}, Scan Type to consider: ${O.value}.
      Tasks: 1. Provide a simple, easy-to-understand recommendation. 2. Give general advice regarding radiation exposure. 3. Estimate the patient's effective dose (patientCalculatedMsv) from this single procedure. 4. Based on the patient's current dose and the estimated dose from this scan, add a specific, clear "Warning" field in your response if their new total will exceed the ${c.value} mSv limit. This field MUST contain a warning message. If it does not exceed the limit, this field should be an empty string.
      The entire response MUST be in ${s.value==="en"?"English":"Arabic"}.`,oe={type:"OBJECT",properties:{recommendationText:{type:"STRING"},patientCalculatedMsv:{type:"NUMBER"},Warning:{type:"STRING"}},required:["recommendationText","patientCalculatedMsv","Warning"]});try{const Vt=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB9KAR0P6sxAj7fP2I-MyVSVOJJaW0J91M",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:Se}]}],generationConfig:{responseMimeType:"application/json",responseSchema:oe}})});if(!Vt.ok)throw new Error(`API Error: ${Vt.statusText}`);const Ht=await Vt.json(),Ne=JSON.parse(Ht.candidates[0].content.parts[0].text);U.value=Ne.recommendationText,J.value=Ne.patientCalculatedMsv,Ne.doctorOccupationalMsv!==void 0&&(R.value=Ne.doctorOccupationalMsv),Ne.factorDetails&&(G.value=Ne.factorDetails),Ne.Warning&&(S.value=Ne.Warning)}catch(re){console.error("Error getting recommendation:",re),v.value=`An error occurred: ${re.message}`}finally{E.value=!1}},Ae=()=>e.push("/dashboard");return(Se,oe)=>(ne(),ae("div",{class:"recommend-page",dir:A(s)==="ar"?"rtl":"ltr"},[g("main",yx,[g("section",vx,[g("h2",null,k(A(s)==="en"?"Medical Scan Recommendation":"توصية الفحص الطبي"),1),g("p",null,k(I.value==="doctor"?A(s)==="en"?"Enter patient and your exposure details for a recommendation.":"أدخل تفاصيل المريض وتفاصيل تعرضك للحصول على توصية.":A(s)==="en"?"Enter your details to receive information about a potential scan.":"أدخل تفاصيلك لتلقي معلومات حول فحص محتمل."),1),u.value&&h.value?(ne(),ae("div",Ex,[je(k(A(s)==="en"?"For Patient:":"للمريض:")+" ",1),g("strong",null,k(h.value),1)])):He("",!0),g("form",{onSubmit:bt(w,["prevent"]),class:"recommend-form"},[g("div",wx,[g("label",null,[je(k(A(s)==="en"?"Age (Years)":"العمر (سنوات)")+" ",1),oe[8]||(oe[8]=g("span",{class:"required-indicator"},"*",-1))]),Fe(g("input",{type:"number","onUpdate:modelValue":oe[0]||(oe[0]=re=>d.value=re),required:""},null,512),[[Ze,d.value]])]),g("div",bx,[g("label",null,[je(k(A(s)==="en"?"Gender":"الجنس")+" ",1),oe[9]||(oe[9]=g("span",{class:"required-indicator"},"*",-1))]),Fe(g("select",{"onUpdate:modelValue":oe[1]||(oe[1]=re=>m.value=re),required:""},[g("option",Tx,k(A(s)==="en"?"Male":"ذكر"),1),g("option",Ix,k(A(s)==="en"?"Female":"أنثى"),1)],512),[[bo,m.value]])]),m.value==="female"?(ne(),ae("div",Ax,[g("label",Sx,[Fe(g("input",{type:"checkbox","onUpdate:modelValue":oe[2]||(oe[2]=re=>M.value=re)},null,512),[[ny,M.value]]),g("span",null,k(A(s)==="en"?"Is Pregnant?":"هل هي حامل؟"),1)])])):He("",!0),g("div",Cx,[g("label",null,k(A(s)==="en"?"Medical History":"التاريخ الطبي"),1),Fe(g("textarea",{"onUpdate:modelValue":oe[3]||(oe[3]=re=>_.value=re),rows:"3"},null,512),[[Ze,_.value]])]),g("div",Rx,[g("label",null,k(A(s)==="en"?"Current Symptoms":"الأعراض الحالية"),1),Fe(g("textarea",{"onUpdate:modelValue":oe[4]||(oe[4]=re=>P.value=re),rows:"3"},null,512),[[Ze,P.value]])]),g("div",Px,[g("label",null,k(A(s)==="en"?"Previous Radiation Exposure":"التعرض السابق للإشعاع"),1),Fe(g("input",{type:"text","onUpdate:modelValue":oe[5]||(oe[5]=re=>N.value=re)},null,512),[[Ze,N.value]])]),I.value==="doctor"?(ne(),ae("div",kx,[g("h3",xx,k(A(s)==="en"?"Doctor Occupational Exposure Details":"تفاصيل التعرض المهني للطبيب"),1),g("div",Ox,[g("label",null,k(A(s)==="en"?"Additional details affecting your exposure (optional)":"تفاصيل إضافية تؤثر على تعرضك (اختياري)"),1),Fe(g("textarea",{"onUpdate:modelValue":oe[6]||(oe[6]=re=>L.value=re),rows:"3",placeholder:A(s)==="en"?"e.g., Stood 2 meters from the machine, used a lead apron and thyroid shield...etc":"مثال: وقفت على  بعد 2 متر من الجهاز، استخدمت مريول رصاص وواقي للغدة الدرقية...إلخ"},"              ",8,Dx),[[Ze,L.value]])])])):He("",!0),g("div",Nx,[g("label",null,[je(k(A(s)==="en"?"Type of Scan to Consider":"نوع الفحص")+" ",1),oe[10]||(oe[10]=g("span",{class:"required-indicator"},"*",-1))]),Fe(g("select",{"onUpdate:modelValue":oe[7]||(oe[7]=re=>O.value=re),required:""},[g("option",Vx,k(A(s)==="en"?"Select Scan Type":"اختر نوع الفحص"),1),g("option",Mx,k(A(s)==="en"?"X-ray":"الأشعة السينية"),1),g("option",Lx,k(A(s)==="en"?"CT Scan":"الأشعة المقطعية"),1)],512),[[bo,O.value]])]),g("button",{type:"submit",disabled:E.value,class:"action-button"},k(E.value?A(s)==="en"?"Getting Recommendations...":"جاري الحصول على التوصيات...":A(s)==="en"?"Get Recommendation":"الحصول على توصية"),9,Fx)],32),v.value?(ne(),ae("div",Ux,k(v.value),1)):He("",!0),S.value?(ne(),ae("div",$x,[g("h4",null,k(A(s)==="en"?"Important Warning":"تحذير هام"),1),g("p",null,k(S.value),1)])):He("",!0),U.value?(ne(),ae("div",jx,[g("h3",null,k(A(s)==="en"?"AI Powered Recommendation":"التوصية المدعومة بالذكاء الاصطناعي"),1),J.value!==null?(ne(),ae("div",Bx,[g("h4",null,k(A(s)==="en"?"Patient Effective Dose":"الجرعة الفعالة للمريض"),1),g("p",null,[g("strong",null,k(J.value)+" mSv",1)])])):He("",!0),R.value!==null?(ne(),ae("div",Hx,[g("h4",null,k(A(s)==="en"?"Doctor Occupational Dose":"الجرعة المهنية للطبيب"),1),g("p",null,[g("strong",null,k(R.value)+" mSv",1)])])):He("",!0),G.value?(ne(),ae("div",zx,[g("h4",null,k(A(s)==="en"?"Estimated Scan Factors":"عوامل الفحص المقدرة"),1),g("p",null,[oe[11]||(oe[11]=g("strong",null,"Voltage:",-1)),je(" "+k(G.value.tubeVoltageKv)+" kV | ",1),oe[12]||(oe[12]=g("strong",null,"Current:",-1)),je(" "+k(G.value.tubeCurrentMa)+" mA | ",1),oe[13]||(oe[13]=g("strong",null,"Time:",-1)),je(" "+k(G.value.exposureTimeMs)+" ms ",1)])])):He("",!0),g("div",qx,[g("h4",null,k(A(s)==="en"?"Recommendation":"التوصية"),1),g("div",{innerHTML:U.value},null,8,Wx)])])):He("",!0),g("p",Gx,[g("a",{href:"#",onClick:bt(Ae,["prevent"])},k(A(s)==="en"?"Back to Dashboard":"العودة إلى لوحة التحكم"),1)])])])],8,_x))}},Qx=Nt(Kx,[["__scopeId","data-v-7e696ca5"]]);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Yx(t,e,n){return(e=Jx(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function dg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function K(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?dg(Object(n),!0).forEach(function(r){Yx(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Xx(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Jx(t){var e=Xx(t,"string");return typeof e=="symbol"?e:e+""}const pg=()=>{};let Df={},YE={},XE=null,JE={mark:pg,measure:pg};try{typeof window<"u"&&(Df=window),typeof document<"u"&&(YE=document),typeof MutationObserver<"u"&&(XE=MutationObserver),typeof performance<"u"&&(JE=performance)}catch{}const{userAgent:mg=""}=Df.navigator||{},Yr=Df,Je=YE,gg=XE,Ra=JE;Yr.document;const hr=!!Je.documentElement&&!!Je.head&&typeof Je.addEventListener=="function"&&typeof Je.createElement=="function",ZE=~mg.indexOf("MSIE")||~mg.indexOf("Trident/");var Zx=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,eO=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,e0={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},tO={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},t0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Dt="classic",uc="duotone",nO="sharp",rO="sharp-duotone",n0=[Dt,uc,nO,rO],sO={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},iO={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},oO=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),aO={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},lO=["fak","fa-kit","fakd","fa-kit-duotone"],_g={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},cO=["kit"],uO={kit:{"fa-kit":"fak"}},hO=["fak","fakd"],fO={kit:{fak:"fa-kit"}},yg={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Pa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},dO=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],pO=["fak","fa-kit","fakd","fa-kit-duotone"],mO={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},gO={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},_O={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Yu={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},yO=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Xu=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...dO,...yO],vO=["solid","regular","light","thin","duotone","brands"],r0=[1,2,3,4,5,6,7,8,9,10],EO=r0.concat([11,12,13,14,15,16,17,18,19,20]),wO=[...Object.keys(_O),...vO,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Pa.GROUP,Pa.SWAP_OPACITY,Pa.PRIMARY,Pa.SECONDARY].concat(r0.map(t=>"".concat(t,"x"))).concat(EO.map(t=>"w-".concat(t))),bO={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const or="___FONT_AWESOME___",Ju=16,s0="fa",i0="svg-inline--fa",Is="data-fa-i2svg",Zu="data-fa-pseudo-element",TO="data-fa-pseudo-element-pending",Nf="data-prefix",Vf="data-icon",vg="fontawesome-i2svg",IO="async",AO=["HTML","HEAD","STYLE","SCRIPT"],o0=(()=>{try{return!0}catch{return!1}})();function ea(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Dt]}})}const a0=K({},e0);a0[Dt]=K(K(K(K({},{"fa-duotone":"duotone"}),e0[Dt]),_g.kit),_g["kit-duotone"]);const SO=ea(a0),eh=K({},aO);eh[Dt]=K(K(K(K({},{duotone:"fad"}),eh[Dt]),yg.kit),yg["kit-duotone"]);const Eg=ea(eh),th=K({},Yu);th[Dt]=K(K({},th[Dt]),fO.kit);const Mf=ea(th),nh=K({},gO);nh[Dt]=K(K({},nh[Dt]),uO.kit);ea(nh);const CO=Zx,l0="fa-layers-text",RO=eO,PO=K({},sO);ea(PO);const kO=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],nu=tO,xO=[...cO,...wO],fo=Yr.FontAwesomeConfig||{};function OO(t){var e=Je.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function DO(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Je&&typeof Je.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=DO(OO(n));s!=null&&(fo[r]=s)});const c0={styleDefault:"solid",familyDefault:Dt,cssPrefix:s0,replacementClass:i0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};fo.familyPrefix&&(fo.cssPrefix=fo.familyPrefix);const di=K(K({},c0),fo);di.autoReplaceSvg||(di.observeMutations=!1);const he={};Object.keys(c0).forEach(t=>{Object.defineProperty(he,t,{enumerable:!0,set:function(e){di[t]=e,po.forEach(n=>n(he))},get:function(){return di[t]}})});Object.defineProperty(he,"familyPrefix",{enumerable:!0,set:function(t){di.cssPrefix=t,po.forEach(e=>e(he))},get:function(){return di.cssPrefix}});Yr.FontAwesomeConfig=he;const po=[];function NO(t){return po.push(t),()=>{po.splice(po.indexOf(t),1)}}const wr=Ju,In={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function VO(t){if(!t||!hr)return;const e=Je.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Je.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Je.head.insertBefore(e,r),t}const MO="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function No(){let t=12,e="";for(;t-- >0;)e+=MO[Math.random()*62|0];return e}function Ii(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Lf(t){return t.classList?Ii(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function u0(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function LO(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(u0(t[n]),'" '),"").trim()}function hc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Ff(t){return t.size!==In.size||t.x!==In.x||t.y!==In.y||t.rotate!==In.rotate||t.flipX||t.flipY}function FO(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:u}}function UO(t){let{transform:e,width:n=Ju,height:r=Ju,startCentered:s=!1}=t,i="";return s&&ZE?i+="translate(".concat(e.x/wr-n/2,"em, ").concat(e.y/wr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/wr,"em), calc(-50% + ").concat(e.y/wr,"em)) "):i+="translate(".concat(e.x/wr,"em, ").concat(e.y/wr,"em) "),i+="scale(".concat(e.size/wr*(e.flipX?-1:1),", ").concat(e.size/wr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var $O=`:root, :host {
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
}`;function h0(){const t=s0,e=i0,n=he.cssPrefix,r=he.replacementClass;let s=$O;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return s}let wg=!1;function ru(){he.autoAddCss&&!wg&&(VO(h0()),wg=!0)}var jO={mixout(){return{dom:{css:h0,insertCss:ru}}},hooks(){return{beforeDOMElementCreation(){ru()},beforeI2svg(){ru()}}}};const ar=Yr||{};ar[or]||(ar[or]={});ar[or].styles||(ar[or].styles={});ar[or].hooks||(ar[or].hooks={});ar[or].shims||(ar[or].shims=[]);var An=ar[or];const f0=[],d0=function(){Je.removeEventListener("DOMContentLoaded",d0),bl=1,f0.map(t=>t())};let bl=!1;hr&&(bl=(Je.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Je.readyState),bl||Je.addEventListener("DOMContentLoaded",d0));function BO(t){hr&&(bl?setTimeout(t,0):f0.push(t))}function ta(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?u0(t):"<".concat(e," ").concat(LO(n),">").concat(r.map(ta).join(""),"</").concat(e,">")}function bg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var su=function(e,n,r,s){var i=Object.keys(e),o=i.length,l=n,c,u,h;for(r===void 0?(c=1,h=e[i[0]]):(c=0,h=r);c<o;c++)u=i[c],h=l(h,e[u],u,e);return h};function HO(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function rh(t){const e=HO(t);return e.length===1?e[0].toString(16):null}function zO(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Tg(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function sh(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=Tg(e);typeof An.hooks.addPack=="function"&&!r?An.hooks.addPack(t,Tg(e)):An.styles[t]=K(K({},An.styles[t]||{}),s),t==="fas"&&sh("fa",e)}const{styles:Vo,shims:qO}=An,p0=Object.keys(Mf),WO=p0.reduce((t,e)=>(t[e]=Object.keys(Mf[e]),t),{});let Uf=null,m0={},g0={},_0={},y0={},v0={};function GO(t){return~xO.indexOf(t)}function KO(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!GO(s)?s:null}const E0=()=>{const t=r=>su(Vo,(s,i,o)=>(s[o]=su(i,r,{}),s),{});m0=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=i}),r)),g0=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=i}),r)),v0=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(l=>{r[l]=i}),r});const e="far"in Vo||he.autoFetchSvg,n=su(qO,(r,s)=>{const i=s[0];let o=s[1];const l=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});_0=n.names,y0=n.unicodes,Uf=fc(he.styleDefault,{family:he.familyDefault})};NO(t=>{Uf=fc(t.styleDefault,{family:he.familyDefault})});E0();function $f(t,e){return(m0[t]||{})[e]}function QO(t,e){return(g0[t]||{})[e]}function ms(t,e){return(v0[t]||{})[e]}function w0(t){return _0[t]||{prefix:null,iconName:null}}function YO(t){const e=y0[t],n=$f("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Xr(){return Uf}const b0=()=>({prefix:null,iconName:null,rest:[]});function XO(t){let e=Dt;const n=p0.reduce((r,s)=>(r[s]="".concat(he.cssPrefix,"-").concat(s),r),{});return n0.forEach(r=>{(t.includes(n[r])||t.some(s=>WO[r].includes(s)))&&(e=r)}),e}function fc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Dt}=e,r=SO[n][t];if(n===uc&&!t)return"fad";const s=Eg[n][t]||Eg[n][r],i=t in An.styles?t:null;return s||i||null}function JO(t){let e=[],n=null;return t.forEach(r=>{const s=KO(he.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function Ig(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function dc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=Xu.concat(pO),i=Ig(t.filter(d=>s.includes(d))),o=Ig(t.filter(d=>!Xu.includes(d))),l=i.filter(d=>(r=d,!t0.includes(d))),[c=null]=l,u=XO(i),h=K(K({},JO(o)),{},{prefix:fc(c,{family:u})});return K(K(K({},h),nD({values:t,family:u,styles:Vo,config:he,canonical:h,givenPrefix:r})),ZO(n,r,h))}function ZO(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?w0(s):{},o=ms(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!Vo.far&&Vo.fas&&!he.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const eD=n0.filter(t=>t!==Dt||t!==uc),tD=Object.keys(Yu).filter(t=>t!==Dt).map(t=>Object.keys(Yu[t])).flat();function nD(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,l=n===uc,c=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!l&&(c||u||h)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&eD.includes(n)&&(Object.keys(i).find(m=>tD.includes(m))||o.autoFetchSvg)){const m=oO.get(n).defaultShortPrefixId;r.prefix=m,r.iconName=ms(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=Xr()||"fas"),r}class rD{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=K(K({},this.definitions[i]||{}),s[i]),sh(i,s[i]);const o=Mf[Dt][i];o&&sh(o,s[i]),E0()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:l}=r[s],c=l[2];e[i]||(e[i]={}),c.length>0&&c.forEach(u=>{typeof u=="string"&&(e[i][u]=l)}),e[i][o]=l}),e}}let Ag=[],zs={};const ei={},sD=Object.keys(ei);function iD(t,e){let{mixoutsTo:n}=e;return Ag=t,zs={},Object.keys(ei).forEach(r=>{sD.indexOf(r)===-1&&delete ei[r]}),Ag.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{zs[o]||(zs[o]=[]),zs[o].push(i[o])})}r.provides&&r.provides(ei)}),n}function ih(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(zs[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function As(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(zs[t]||[]).forEach(i=>{i.apply(null,n)})}function Jr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ei[t]?ei[t].apply(null,e):void 0}function oh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Xr();if(e)return e=ms(n,e)||e,bg(T0.definitions,n,e)||bg(An.styles,n,e)}const T0=new rD,oD=()=>{he.autoReplaceSvg=!1,he.observeMutations=!1,As("noAuto")},aD={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return hr?(As("beforeI2svg",t),Jr("pseudoElements2svg",t),Jr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;he.autoReplaceSvg===!1&&(he.autoReplaceSvg=!0),he.observeMutations=!0,BO(()=>{cD({autoReplaceSvgRoot:e}),As("watch",t)})}},lD={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ms(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=fc(t[0]);return{prefix:n,iconName:ms(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(he.cssPrefix,"-"))>-1||t.match(CO))){const e=dc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Xr(),iconName:ms(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Xr();return{prefix:e,iconName:ms(e,t)||t}}}},en={noAuto:oD,config:he,dom:aD,parse:lD,library:T0,findIconDefinition:oh,toHtml:ta},cD=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Je}=t;(Object.keys(An.styles).length>0||he.autoFetchSvg)&&hr&&he.autoReplaceSvg&&en.dom.i2svg({node:e})};function pc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ta(n))}}),Object.defineProperty(t,"node",{get:function(){if(!hr)return;const n=Je.createElement("div");return n.innerHTML=t.html,n.children}}),t}function uD(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(Ff(o)&&n.found&&!r.found){const{width:l,height:c}=n,u={x:l/c/2,y:.5};s.style=hc(K(K({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function hD(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(he.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:K(K({},s),{},{id:o}),children:r}]}]}function jf(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:l,maskId:c,titleId:u,extra:h,watchable:d=!1}=t,{width:m,height:_}=n.found?n:e,P=hO.includes(r),x=[he.replacementClass,s?"".concat(he.cssPrefix,"-").concat(s):""].filter(G=>h.classes.indexOf(G)===-1).filter(G=>G!==""||!!G).concat(h.classes).join(" ");let M={children:[],attributes:K(K({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:x,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(_)})};const N=P&&!~h.classes.indexOf("fa-fw")?{width:"".concat(m/_*16*.0625,"em")}:{};d&&(M.attributes[Is]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(u||No())},children:[l]}),delete M.attributes.title);const O=K(K({},M),{},{prefix:r,iconName:s,main:e,mask:n,maskId:c,transform:i,symbol:o,styles:K(K({},N),h.styles)}),{children:L,attributes:U}=n.found&&e.found?Jr("generateAbstractMask",O)||{children:[],attributes:{}}:Jr("generateAbstractIcon",O)||{children:[],attributes:{}};return O.children=L,O.attributes=U,o?hD(O):uD(O)}function Sg(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:l=!1}=t,c=K(K(K({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Is]="");const u=K({},o.styles);Ff(s)&&(u.transform=UO({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=hc(u);h.length>0&&(c.style=h);const d=[];return d.push({tag:"span",attributes:c,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function fD(t){const{content:e,title:n,extra:r}=t,s=K(K(K({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=hc(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:iu}=An;function ah(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(he.cssPrefix,"-").concat(nu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(he.cssPrefix,"-").concat(nu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(he.cssPrefix,"-").concat(nu.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const dD={found:!1,width:512,height:512};function pD(t,e){!o0&&!he.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function lh(t,e){let n=e;return e==="fa"&&he.styleDefault!==null&&(e=Xr()),new Promise((r,s)=>{if(n==="fa"){const i=w0(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&iu[e]&&iu[e][t]){const i=iu[e][t];return r(ah(i))}pD(t,e),r(K(K({},dD),{},{icon:he.showMissingIcons&&t?Jr("missingIconAbstract")||{}:{}}))})}const Cg=()=>{},ch=he.measurePerformance&&Ra&&Ra.mark&&Ra.measure?Ra:{mark:Cg,measure:Cg},Ki='FA "6.7.2"',mD=t=>(ch.mark("".concat(Ki," ").concat(t," begins")),()=>I0(t)),I0=t=>{ch.mark("".concat(Ki," ").concat(t," ends")),ch.measure("".concat(Ki," ").concat(t),"".concat(Ki," ").concat(t," begins"),"".concat(Ki," ").concat(t," ends"))};var Bf={begin:mD,end:I0};const za=()=>{};function Rg(t){return typeof(t.getAttribute?t.getAttribute(Is):null)=="string"}function gD(t){const e=t.getAttribute?t.getAttribute(Nf):null,n=t.getAttribute?t.getAttribute(Vf):null;return e&&n}function _D(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(he.replacementClass)}function yD(){return he.autoReplaceSvg===!0?qa.replace:qa[he.autoReplaceSvg]||qa.replace}function vD(t){return Je.createElementNS("http://www.w3.org/2000/svg",t)}function ED(t){return Je.createElement(t)}function A0(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?vD:ED}=e;if(typeof t=="string")return Je.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(A0(i,{ceFn:n}))}),r}function wD(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const qa={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(A0(n),e)}),e.getAttribute(Is)===null&&he.keepOriginalSource){let n=Je.createComment(wD(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Lf(e).indexOf(he.replacementClass))return qa.replace(t);const r=new RegExp("".concat(he.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,l)=>(l===he.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>ta(i)).join(`
`);e.setAttribute(Is,""),e.innerHTML=s}};function Pg(t){t()}function S0(t,e){const n=typeof e=="function"?e:za;if(t.length===0)n();else{let r=Pg;he.mutateApproach===IO&&(r=Yr.requestAnimationFrame||Pg),r(()=>{const s=yD(),i=Bf.begin("mutate");t.map(s),i(),n()})}}let Hf=!1;function C0(){Hf=!0}function uh(){Hf=!1}let Tl=null;function kg(t){if(!gg||!he.observeMutations)return;const{treeCallback:e=za,nodeCallback:n=za,pseudoElementsCallback:r=za,observeMutationsRoot:s=Je}=t;Tl=new gg(i=>{if(Hf)return;const o=Xr();Ii(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Rg(l.addedNodes[0])&&(he.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&he.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&Rg(l.target)&&~kO.indexOf(l.attributeName))if(l.attributeName==="class"&&gD(l.target)){const{prefix:c,iconName:u}=dc(Lf(l.target));l.target.setAttribute(Nf,c||o),u&&l.target.setAttribute(Vf,u)}else _D(l.target)&&n(l.target)})}),hr&&Tl.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function bD(){Tl&&Tl.disconnect()}function TD(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function ID(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=dc(Lf(t));return s.prefix||(s.prefix=Xr()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=QO(s.prefix,t.innerText)||$f(s.prefix,rh(t.innerText))),!s.iconName&&he.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function AD(t){const e=Ii(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return he.autoA11y&&(n?e["aria-labelledby"]="".concat(he.replacementClass,"-title-").concat(r||No()):(e["aria-hidden"]="true",e.focusable="false")),e}function SD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:In,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=ID(t),i=AD(t),o=ih("parseNodeAttributes",{},t);let l=e.styleParser?TD(t):[];return K({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:In,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:i}},o)}const{styles:CD}=An;function R0(t){const e=he.autoReplaceSvg==="nest"?xg(t,{styleParser:!1}):xg(t);return~e.extra.classes.indexOf(l0)?Jr("generateLayersText",t,e):Jr("generateSvgReplacementMutation",t,e)}function RD(){return[...lO,...Xu]}function Og(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!hr)return Promise.resolve();const n=Je.documentElement.classList,r=h=>n.add("".concat(vg,"-").concat(h)),s=h=>n.remove("".concat(vg,"-").concat(h)),i=he.autoFetchSvg?RD():t0.concat(Object.keys(CD));i.includes("fa")||i.push("fa");const o=[".".concat(l0,":not([").concat(Is,"])")].concat(i.map(h=>".".concat(h,":not([").concat(Is,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=Ii(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),s("complete");else return Promise.resolve();const c=Bf.begin("onTree"),u=l.reduce((h,d)=>{try{const m=R0(d);m&&h.push(m)}catch(m){o0||m.name==="MissingIcon"&&console.error(m)}return h},[]);return new Promise((h,d)=>{Promise.all(u).then(m=>{S0(m,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),h()})}).catch(m=>{c(),d(m)})})}function PD(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;R0(t).then(n=>{n&&S0([n],e)})}function kD(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:oh(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:oh(s||{})),t(r,K(K({},n),{},{mask:s}))}}const xD=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=In,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:l=null,classes:c=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:d,iconName:m,icon:_}=t;return pc(K({type:"icon"},t),()=>(As("beforeDOMElementCreation",{iconDefinition:t,params:e}),he.autoA11y&&(o?u["aria-labelledby"]="".concat(he.replacementClass,"-title-").concat(l||No()):(u["aria-hidden"]="true",u.focusable="false")),jf({icons:{main:ah(_),mask:s?ah(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:m,transform:K(K({},In),n),symbol:r,title:o,maskId:i,titleId:l,extra:{attributes:u,styles:h,classes:c}})))};var OD={mixout(){return{icon:kD(xD)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Og,t.nodeCallback=PD,t}}},provides(t){t.i2svg=function(e){const{node:n=Je,callback:r=()=>{}}=e;return Og(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:l,symbol:c,mask:u,maskId:h,extra:d}=n;return new Promise((m,_)=>{Promise.all([lh(r,o),u.iconName?lh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(P=>{let[x,M]=P;m([e,jf({icons:{main:x,mask:M},prefix:o,iconName:r,transform:l,symbol:c,maskId:h,title:s,titleId:i,extra:d,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const l=hc(o);l.length>0&&(r.style=l);let c;return Ff(i)&&(c=Jr("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(c||s.icon),{children:n,attributes:r}}}},DD={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return pc({type:"layer"},()=>{As("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(he.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},ND={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return pc({type:"counter",content:t},()=>(As("beforeDOMElementCreation",{content:t,params:e}),fD({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(he.cssPrefix,"-layers-counter"),...r]}})))}}}},VD={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=In,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return pc({type:"text",content:t},()=>(As("beforeDOMElementCreation",{content:t,params:e}),Sg({content:t,transform:K(K({},In),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(he.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,l=null;if(ZE){const c=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/c,l=u.height/c}return he.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Sg({content:e.innerHTML,width:o,height:l,transform:s,title:r,extra:i,watchable:!0})])}}};const MD=new RegExp('"',"ug"),Dg=[1105920,1112319],Ng=K(K(K(K({},{FontAwesome:{normal:"fas",400:"fas"}}),iO),bO),mO),hh=Object.keys(Ng).reduce((t,e)=>(t[e.toLowerCase()]=Ng[e],t),{}),LD=Object.keys(hh).reduce((t,e)=>{const n=hh[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function FD(t){const e=t.replace(MD,""),n=zO(e,0),r=n>=Dg[0]&&n<=Dg[1],s=e.length===2?e[0]===e[1]:!1;return{value:rh(s?e[0]:e),isSecondary:r||s}}function UD(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(hh[n]||{})[s]||LD[n]}function Vg(t,e){const n="".concat(TO).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=Ii(t.children).filter(m=>m.getAttribute(Zu)===e)[0],l=Yr.getComputedStyle(t,e),c=l.getPropertyValue("font-family"),u=c.match(RO),h=l.getPropertyValue("font-weight"),d=l.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){const m=l.getPropertyValue("content");let _=UD(c,h);const{value:P,isSecondary:x}=FD(m),M=u[0].startsWith("FontAwesome");let N=$f(_,P),O=N;if(M){const L=YO(P);L.iconName&&L.prefix&&(N=L.iconName,_=L.prefix)}if(N&&!x&&(!o||o.getAttribute(Nf)!==_||o.getAttribute(Vf)!==O)){t.setAttribute(n,O),o&&t.removeChild(o);const L=SD(),{extra:U}=L;U.attributes[Zu]=e,lh(N,_).then(G=>{const J=jf(K(K({},L),{},{icons:{main:G,mask:b0()},prefix:_,iconName:O,extra:U,watchable:!0})),R=Je.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(R,t.firstChild):t.appendChild(R),R.outerHTML=J.map(E=>ta(E)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function $D(t){return Promise.all([Vg(t,"::before"),Vg(t,"::after")])}function jD(t){return t.parentNode!==document.head&&!~AO.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Zu)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Mg(t){if(hr)return new Promise((e,n)=>{const r=Ii(t.querySelectorAll("*")).filter(jD).map($D),s=Bf.begin("searchPseudoElements");C0(),Promise.all(r).then(()=>{s(),uh(),e()}).catch(()=>{s(),uh(),n()})})}var BD={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Mg,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Je}=e;he.searchPseudoElements&&Mg(n)}}};let Lg=!1;var HD={mixout(){return{dom:{unwatch(){C0(),Lg=!0}}}},hooks(){return{bootstrap(){kg(ih("mutationObserverCallbacks",{}))},noAuto(){bD()},watch(t){const{observeMutationsRoot:e}=t;Lg?uh():kg(ih("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Fg=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var zD={mixout(){return{parse:{transform:t=>Fg(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Fg(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")},m={outer:o,inner:h,path:d};return{tag:"g",attributes:K({},m.outer),children:[{tag:"g",attributes:K({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:K(K({},n.icon.attributes),m.path)}]}]}}}};const ou={x:0,y:0,width:"100%",height:"100%"};function Ug(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function qD(t){return t.tag==="g"?t.children:[t]}var WD={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?dc(n.split(" ").map(s=>s.trim())):b0();return r.prefix||(r.prefix=Xr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:l}=e;const{width:c,icon:u}=s,{width:h,icon:d}=i,m=FO({transform:l,containerWidth:h,iconWidth:c}),_={tag:"rect",attributes:K(K({},ou),{},{fill:"white"})},P=u.children?{children:u.children.map(Ug)}:{},x={tag:"g",attributes:K({},m.inner),children:[Ug(K({tag:u.tag,attributes:K(K({},u.attributes),m.path)},P))]},M={tag:"g",attributes:K({},m.outer),children:[x]},N="mask-".concat(o||No()),O="clip-".concat(o||No()),L={tag:"mask",attributes:K(K({},ou),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,M]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:qD(d)},L]};return n.push(U,{tag:"rect",attributes:K({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(N,")")},ou)}),{children:n,attributes:r}}}},GD={provides(t){let e=!1;Yr.matchMedia&&(e=Yr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:K(K({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=K(K({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:K(K({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:K(K({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:K(K({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:K(K({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:K(K({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:K(K({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:K(K({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},KD={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},QD=[jO,OD,DD,ND,VD,BD,HD,zD,WD,GD,KD];iD(QD,{mixoutsTo:en});en.noAuto;en.config;const YD=en.library;en.dom;const fh=en.parse;en.findIconDefinition;en.toHtml;const XD=en.icon;en.layer;en.text;en.counter;function $g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Gn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$g(Object(n),!0).forEach(function(r){qt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$g(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function JD(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ZD(t){var e=JD(t,"string");return typeof e=="symbol"?e:e+""}function Il(t){"@babel/helpers - typeof";return Il=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Il(t)}function qt(t,e,n){return e=ZD(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function eN(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function tN(t,e){if(t==null)return{};var n=eN(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var nN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P0={exports:{}};(function(t){(function(e){var n=function(N,O,L){if(!u(O)||d(O)||m(O)||_(O)||c(O))return O;var U,G=0,J=0;if(h(O))for(U=[],J=O.length;G<J;G++)U.push(n(N,O[G],L));else{U={};for(var R in O)Object.prototype.hasOwnProperty.call(O,R)&&(U[N(R,L)]=n(N,O[R],L))}return U},r=function(N,O){O=O||{};var L=O.separator||"_",U=O.split||/(?=[A-Z])/;return N.split(U).join(L)},s=function(N){return P(N)?N:(N=N.replace(/[\-_\s]+(.)?/g,function(O,L){return L?L.toUpperCase():""}),N.substr(0,1).toLowerCase()+N.substr(1))},i=function(N){var O=s(N);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(N,O){return r(N,O).toLowerCase()},l=Object.prototype.toString,c=function(N){return typeof N=="function"},u=function(N){return N===Object(N)},h=function(N){return l.call(N)=="[object Array]"},d=function(N){return l.call(N)=="[object Date]"},m=function(N){return l.call(N)=="[object RegExp]"},_=function(N){return l.call(N)=="[object Boolean]"},P=function(N){return N=N-0,N===N},x=function(N,O){var L=O&&"process"in O?O.process:O;return typeof L!="function"?N:function(U,G){return L(U,N,G)}},M={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(N,O){return n(x(s,O),N)},decamelizeKeys:function(N,O){return n(x(o,O),N,O)},pascalizeKeys:function(N,O){return n(x(i,O),N)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=M:e.humps=M})(nN)})(P0);var rN=P0.exports,sN=["class","style"];function iN(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=rN.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function oN(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function k0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return k0(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,u){var h=t.attributes[u];switch(u){case"class":c.class=oN(h);break;case"style":c.style=iN(h);break;default:c.attrs[u]=h}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,l=tN(n,sN);return ti(t.tag,Gn(Gn(Gn({},e),{},{class:s.class,style:Gn(Gn({},s.style),o)},s.attrs),l),r)}var x0=!1;try{x0=!0}catch{}function aN(){if(!x0&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function au(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?qt({},t,e):{}}function lN(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},qt(qt(qt(qt(qt(qt(qt(qt(qt(qt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),qt(qt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function jg(t){if(t&&Il(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(fh.icon)return fh.icon(t);if(t===null)return null;if(Il(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Kn=Ph({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Ke(function(){return jg(e.icon)}),i=Ke(function(){return au("classes",lN(e))}),o=Ke(function(){return au("transform",typeof e.transform=="string"?fh.transform(e.transform):e.transform)}),l=Ke(function(){return au("mask",jg(e.mask))}),c=Ke(function(){return XD(s.value,Gn(Gn(Gn(Gn({},i.value),o.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});jt(c,function(h){if(!h)return aN("Could not find one or more icon(s)",s.value,l.value)},{immediate:!0});var u=Ke(function(){return c.value?k0(c.value.abstract[0],{},r):null});return function(){return u.value}}});const cN=["dir"],uN={key:0,class:"loading-message"},hN={key:1,class:"no-patients-message"},fN={key:2,class:"patient-table-container"},dN={class:"patient-table"},pN=["onClick"],mN=["onClick"],gN=["onClick"],_N=["onClick"],yN={__name:"PatientTable",props:{patients:Array,isLoading:Boolean},emits:["view","edit","delete","recommend"],setup(t,{emit:e}){const n=Le("currentLanguage");return(r,s)=>(ne(),ae("div",{class:"patient-list-section mt-8",dir:A(n)==="ar"?"rtl":"ltr"},[g("h3",null,k(A(n)==="en"?"Existing Patients":"المرضى الحاليون"),1),t.isLoading?(ne(),ae("div",uN,[Oe(A(Kn),{icon:"spinner",spin:""}),je(" "+k(A(n)==="en"?"Loading patients...":"جاري تحميل المرضى..."),1)])):t.patients.length===0?(ne(),ae("div",hN,k(A(n)==="en"?"No patients added yet.":"لم يتم إضافة أي مرضى بعد."),1)):(ne(),ae("div",fN,[g("table",dN,[g("thead",null,[g("tr",null,[g("th",null,k(A(n)==="en"?"Name":"الاسم"),1),g("th",null,k(A(n)==="en"?"Age":"العمر"),1),g("th",null,k(A(n)==="en"?"Gender":"الجنس"),1),g("th",null,k(A(n)==="en"?"Actions":"الإجراءات"),1)])]),g("tbody",null,[(ne(!0),ae(Gt,null,kh(t.patients,i=>(ne(),ae("tr",{key:i.id},[g("td",null,k(i.name),1),g("td",null,k(i.age),1),g("td",null,k(A(n)==="en"?i.gender.charAt(0).toUpperCase()+i.gender.slice(1):i.gender==="male"?"ذكر":"أنثى"),1),g("td",null,[g("button",{onClick:o=>r.$emit("view",i),class:"action-button-sm view-button"},[Oe(A(Kn),{icon:"eye"})],8,pN),g("button",{onClick:o=>r.$emit("edit",i),class:"action-button-sm edit-button"},[Oe(A(Kn),{icon:"edit"})],8,mN),g("button",{onClick:o=>r.$emit("delete",i),class:"action-button-sm delete-button"},[Oe(A(Kn),{icon:"trash-alt"})],8,gN),g("button",{onClick:o=>r.$emit("recommend",i.id),class:"action-button-sm recommend-button"},[Oe(A(Kn),{icon:"file-medical"})],8,_N)])]))),128))])])]))],8,cN))}},vN=Nt(yN,[["__scopeId","data-v-c72b4ed7"]]),EN=["dir"],wN={class:"modal-title"},bN={class:"form-group"},TN={class:"form-group"},IN={class:"form-group"},AN={value:"",disabled:""},SN={value:"male"},CN={value:"female"},RN={value:"other"},PN={class:"form-group"},kN={class:"form-group"},xN={class:"form-group"},ON=["disabled"],DN={key:0},NN={key:1},VN={__name:"PatientFormModal",props:{show:Boolean,patient:Object,isSaving:Boolean},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=Le("currentLanguage"),i=Cs({id:null,name:"",age:null,gender:"",medicalHistory:"",allergies:"",previousRadiationExposure:""});jt(()=>n.patient,u=>{u?(i.id=u.id,i.name=u.name,i.age=u.age,i.gender=u.gender,i.medicalHistory=u.medicalHistory?.join(", ")||"",i.allergies=u.allergies?.join(", ")||"",i.previousRadiationExposure=u.previousRadiationExposure?.join(", ")||""):(i.id=null,i.name="",i.age=null,i.gender="",i.medicalHistory="",i.allergies="",i.previousRadiationExposure="")});const o=Ke(()=>!!n.patient),l=Ke(()=>{const u=o.value?"Edit Patient":"Add New Patient";return s.value==="en"?u:{"Edit Patient":"تعديل بيانات المريض","Add New Patient":"إضافة مريض جديد"}[u]});function c(){const u={...i,medicalHistory:i.medicalHistory.split(",").map(h=>h.trim()).filter(Boolean),allergies:i.allergies.split(",").map(h=>h.trim()).filter(Boolean),previousRadiationExposure:i.previousRadiationExposure.split(",").map(h=>h.trim()).filter(Boolean)};r("save",u)}return(u,h)=>(ne(),Zr(gi,{name:"modal-fade"},{default:$r(()=>[t.show?(ne(),ae("div",{key:0,class:"modal-overlay",onClick:h[8]||(h[8]=bt(d=>u.$emit("close"),["self"]))},[g("div",{class:"modal-content",dir:A(s)==="ar"?"rtl":"ltr"},[g("button",{class:"close-modal-button",onClick:h[0]||(h[0]=d=>u.$emit("close"))},"×"),g("h3",wN,k(l.value),1),g("form",{onSubmit:bt(c,["prevent"]),class:"patient-form"},[g("div",bN,[g("label",null,[je(k(A(s)==="en"?"Name":"الاسم")+" ",1),h[9]||(h[9]=g("span",{class:"text-red-600"},"*",-1))]),Fe(g("input",{type:"text","onUpdate:modelValue":h[1]||(h[1]=d=>i.name=d),required:""},null,512),[[Ze,i.name]])]),g("div",TN,[g("label",null,[je(k(A(s)==="en"?"Age":"العمر")+" ",1),h[10]||(h[10]=g("span",{class:"text-red-600"},"*",-1))]),Fe(g("input",{type:"number","onUpdate:modelValue":h[2]||(h[2]=d=>i.age=d),required:"",min:"0"},null,512),[[Ze,i.age]])]),g("div",IN,[g("label",null,[je(k(A(s)==="en"?"Gender":"الجنس")+" ",1),h[11]||(h[11]=g("span",{class:"text-red-600"},"*",-1))]),Fe(g("select",{"onUpdate:modelValue":h[3]||(h[3]=d=>i.gender=d),required:""},[g("option",AN,k(A(s)==="en"?"Select Gender":"اختر الجنس"),1),g("option",SN,k(A(s)==="en"?"Male":"ذكر"),1),g("option",CN,k(A(s)==="en"?"Female":"أنثى"),1),g("option",RN,k(A(s)==="en"?"Other":"آخر"),1)],512),[[bo,i.gender]])]),g("div",PN,[g("label",null,k(A(s)==="en"?"Medical History (comma-separated)":"التاريخ الطبي (مفصولة بفاصلة)"),1),Fe(g("textarea",{"onUpdate:modelValue":h[4]||(h[4]=d=>i.medicalHistory=d),rows:"2"},null,512),[[Ze,i.medicalHistory]])]),g("div",kN,[g("label",null,k(A(s)==="en"?"Allergies (comma-separated)":"الحساسية (مفصولة بفاصلة)"),1),Fe(g("textarea",{"onUpdate:modelValue":h[5]||(h[5]=d=>i.allergies=d),rows:"2"},null,512),[[Ze,i.allergies]])]),g("div",xN,[g("label",null,k(A(s)==="en"?"Previous Radiation Exposure (comma-separated)":"التعرض السابق للإشعاع (مفصولة بفاصلة)"),1),Fe(g("textarea",{"onUpdate:modelValue":h[6]||(h[6]=d=>i.previousRadiationExposure=d),rows:"2"},null,512),[[Ze,i.previousRadiationExposure]])]),g("button",{type:"submit",class:"action-button",disabled:t.isSaving},[t.isSaving?(ne(),ae("span",DN,[Oe(A(Kn),{icon:"spinner",spin:""}),je(" "+k(A(s)==="en"?"Saving...":"جاري الحفظ..."),1)])):(ne(),ae("span",NN,k(A(s)==="en"?"Save Patient":"حفظ المريض"),1))],8,ON),g("button",{type:"button",onClick:h[7]||(h[7]=d=>u.$emit("close")),class:"action-button secondary mt-2"},k(A(s)==="en"?"Cancel":"إلغاء"),1)],32)],8,EN)])):He("",!0)]),_:1}))}},MN=Nt(VN,[["__scopeId","data-v-a87c009c"]]),LN={key:0,class:"modal-content patient-details-modal"},FN={class:"modal-title"},UN={class:"patient-details-grid"},$N={class:"full-width"},jN={class:"full-width"},BN={class:"recommendation-history-section"},HN={class:"history-title"},zN={key:0,class:"no-history-message"},qN={key:1,class:"recommendation-list"},WN={class:"recommendation-date"},GN={class:"recommendation-actions"},KN=["onClick"],QN=["onClick"],YN={__name:"PatientDetailsModal",props:{show:Boolean,patient:Object},emits:["close","generateNewRecommendation","viewRecommendation","deleteRecommendation"],setup(t,{emit:e}){const n=Le("currentLanguage"),r=s=>!s||!s.toDate?"N/A":new Date(s.toDate()).toLocaleDateString("en-UK");return(s,i)=>(ne(),Zr(gi,{name:"modal-fade"},{default:$r(()=>[t.show?(ne(),ae("div",{key:0,class:"modal-overlay",onClick:i[2]||(i[2]=bt(o=>s.$emit("close"),["self"]))},[t.patient?(ne(),ae("div",LN,[g("button",{class:"close-modal-button",onClick:i[0]||(i[0]=o=>s.$emit("close"))},"×"),g("h3",FN,k(A(n)==="en"?"Patient Details":"تفاصيل المريض"),1),g("div",UN,[g("p",null,[g("strong",null,k(A(n)==="en"?"Name:":"الاسم:"),1),je(" "+k(t.patient.name),1)]),g("p",null,[g("strong",null,k(A(n)==="en"?"Age:":"العمر:"),1),je(" "+k(t.patient.age),1)]),g("p",null,[g("strong",null,k(A(n)==="en"?"Gender:":"الجنس:"),1),je(" "+k(t.patient.gender),1)]),g("p",$N,[g("strong",null,k(A(n)==="en"?"Medical History:":"التاريخ الطبي:"),1),je(" "+k(t.patient.medicalHistory?.join(", ")||"N/A"),1)]),g("p",jN,[g("strong",null,k(A(n)==="en"?"Allergies:":"الحساسية:"),1),je(" "+k(t.patient.allergies?.join(", ")||"N/A"),1)])]),g("div",BN,[g("h4",HN,k(A(n)==="en"?"Scan History":"سجل الفحوصات"),1),g("button",{onClick:i[1]||(i[1]=o=>s.$emit("generateNewRecommendation",t.patient.id)),class:"action-button generate-new-recommendation-button"},k(A(n)==="en"?"Get New Recommendation":"الحصول على توصية جديدة"),1),!t.patient.recommendations||t.patient.recommendations.length===0?(ne(),ae("div",zN,k(A(n)==="en"?"No scan history found.":"لا يوجد سجل فحوصات."),1)):(ne(),ae("div",qN,[(ne(!0),ae(Gt,null,kh(t.patient.recommendations,o=>(ne(),ae("div",{key:o.id,class:"recommendation-item"},[g("p",WN,[g("strong",null,k(A(n)==="en"?"Date:":"التاريخ:"),1),je(" "+k(r(o.timestamp)),1)]),g("p",null,[g("strong",null,k(A(n)==="en"?"Scan Type:":"نوع الفحص:"),1),je(" "+k(o.scanType),1)]),g("p",null,[g("strong",null,k(A(n)==="en"?"Calculated Dose:":"الجرعة:"),1),je(" "+k(o.calculatedMsv)+" mSv ",1)]),g("div",GN,[g("button",{onClick:l=>s.$emit("viewRecommendation",o),class:"action-button-sm view-button"},[Oe(A(Kn),{icon:"eye"}),je(" "+k(A(n)==="en"?"View":"عرض"),1)],8,KN),g("button",{onClick:l=>s.$emit("deleteRecommendation",{patientId:t.patient.id,recId:o.id}),class:"action-button-sm delete-button"},[Oe(A(Kn),{icon:"trash-alt"}),je(" "+k(A(n)==="en"?"Delete":"حذف"),1)],8,QN)])]))),128))]))])])):He("",!0)])):He("",!0)]),_:1}))}},XN=Nt(YN,[["__scopeId","data-v-85234dfb"]]),JN={class:"modal-content delete-confirm-modal"},ZN={class:"modal-title"},e4={class:"warning-text"},t4={class:"modal-actions"},n4={__name:"ConfirmDeleteModal",props:{show:Boolean,title:String,message:String},emits:["close","confirm"],setup(t){const e=Le("currentLanguage");return(n,r)=>(ne(),Zr(gi,{name:"modal-fade"},{default:$r(()=>[t.show?(ne(),ae("div",{key:0,class:"modal-overlay",onClick:r[2]||(r[2]=bt(s=>n.$emit("close"),["self"]))},[g("div",JN,[g("h3",ZN,k(t.title),1),g("p",null,k(t.message),1),g("p",e4,k(A(e)==="en"?"This action cannot be undone.":"لا يمكن التراجع عن هذا الإجراء."),1),g("div",t4,[g("button",{onClick:r[0]||(r[0]=s=>n.$emit("close")),class:"action-button secondary"},k(A(e)==="en"?"Cancel":"إلغاء"),1),g("button",{onClick:r[1]||(r[1]=s=>n.$emit("confirm")),class:"action-button delete-button-confirm"},k(A(e)==="en"?"Delete":"حذف"),1)])])])):He("",!0)]),_:1}))}},dh=Nt(n4,[["__scopeId","data-v-d4f21fbe"]]),r4={class:"patient-list-page"},s4={class:"patient-list-main-content"},i4={class:"patient-list-card"},o4={class:"switch-link-container"},a4={__name:"PatientListView",setup(t){const e="1:382664693760:web:7582abe58d70b3260f20e5",n=Le("auth"),r=Le("currentLanguage"),s=Rs(),i=Xo(),o=pe([]),l=pe(!0),c=pe(!1),u=pe(!1),h=pe(!1),d=pe(!1),m=pe(!1),_=pe(null),P=pe(null),x=pe(null),M=pe(null),N=async()=>{l.value=!0;try{const I=Js(i,"artifacts",e,"users",n.currentUser.uid,"patients"),b=await Of(I);o.value=b.docs.map(w=>({id:w.id,...w.data()})).sort((w,Ae)=>(Ae.timestamp?.toMillis()||0)-(w.timestamp?.toMillis()||0))}catch(I){console.error("Error fetching patients:",I)}finally{l.value=!1}},O=async I=>{c.value=!0;try{const b=Js(i,"artifacts",e,"users",n.currentUser.uid,"patients");if(I.id){const w=kn(b,I.id);await wl(w,{...I,timestamp:Qu()})}else{const{id:w,...Ae}=I;await QE(b,{...Ae,timestamp:Qu()})}u.value=!1,await N()}catch(b){console.error("Error saving patient:",b)}finally{c.value=!1}},L=async()=>{if(x.value)try{const I=kn(i,"artifacts",e,"users",n.currentUser.uid,"patients",x.value.id);await KE(I),d.value=!1,await N()}catch(I){console.error("Error deleting patient:",I)}},U=async()=>{if(M.value)try{const{patientId:I,recId:b}=M.value,Ae=o.value.find(Se=>Se.id===I)?.recommendations.find(Se=>Se.id===b);if(I&&Ae){const Se=kn(i,"artifacts",e,"users",n.currentUser.uid,"patients",I);await wl(Se,{recommendations:sk(Ae)}),m.value=!1,await N()}}catch(I){console.error("Error deleting recommendation:",I)}};function G(){_.value=null,u.value=!0}function J(I){_.value=I,u.value=!0}function R(I){P.value=I,h.value=!0}function E(I){x.value=I,d.value=!0}function v(I){M.value=I,m.value=!0}function S(I){s.push(`/recommend?patientId=${I}`)}return jt(()=>n.currentUser,I=>{I?N():o.value=[]},{immediate:!0}),(I,b)=>(ne(),ae("div",r4,[g("div",s4,[g("div",i4,[g("h2",null,k(A(r)==="en"?"Manage Patients":"إدارة المرضى"),1),g("p",null,k(A(r)==="en"?"Add new patients or view existing records":"أضف مرضى جدد أو اطلع على السجلات الحالية."),1),g("button",{onClick:G,class:"add-new-patient-button"},k(A(r)==="en"?"Add New Patient":"إضافة مريض جديد"),1),Oe(vN,{patients:o.value,"is-loading":l.value,onView:R,onEdit:J,onDelete:E,onRecommend:S},null,8,["patients","is-loading"]),g("div",o4,[g("a",{href:"#",onClick:b[0]||(b[0]=w=>A(s).push("/dashboard"))},k(A(r)==="en"?"Back to dashboard":"العودة إلى لوحة التحكم"),1)])])]),Oe(MN,{show:u.value,patient:_.value,"is-saving":c.value,onClose:b[1]||(b[1]=w=>u.value=!1),onSave:O},null,8,["show","patient","is-saving"]),Oe(XN,{show:h.value,patient:P.value,onClose:b[2]||(b[2]=w=>h.value=!1),onGenerateNewRecommendation:S,onDeleteRecommendation:v},null,8,["show","patient"]),Oe(dh,{show:d.value,title:A(r)==="en"?"Delete Patient":"حذف المريض",message:`${A(r)==="en"?"Are you sure you want to delete":"هل أنت متأكد من الحذف"} ${x.value?.name}?`,onClose:b[3]||(b[3]=w=>d.value=!1),onConfirm:L},null,8,["show","title","message"]),Oe(dh,{show:m.value,title:A(r)==="en"?"Delete Recommendation":"حذف التوصية",message:A(r)==="en"?"Are you sure you want to delete this scan record?":"هل أنت متأكد من حذف سجل الفحص هذا؟",onClose:b[4]||(b[4]=w=>m.value=!1),onConfirm:U},null,8,["show","title","message"])]))}},l4=Nt(a4,[["__scopeId","data-v-7547a62b"]]),c4={key:0,class:"loading-container"},u4={key:0,class:"role-modal-backdrop"},h4={class:"role-modal"},f4={class:"role-buttons"},d4={class:"dashboard-main-content"},p4={class:"dashboard-card"},m4=["dir"],g4=["dir"],_4={class:"dashboard-features"},y4=["dir"],v4=["dir"],E4=["dir"],w4=["dir"],b4=["dir"],T4=["dir"],I4={__name:"DashboardView",setup(t){const e="1:382664693760:web:7582abe58d70b3260f20e5",n=Le("auth"),r=Le("currentLanguage"),s=Rs(),i=Xo(),o=pe(!1),l=pe(null),c=pe(!0),u=pe(null),h=async _=>{if(!_){c.value=!1;return}try{const P=kn(i,"artifacts",e,"users",_.uid),x=await xf(P);if(!x.exists())await nk(P,{email:_.email,createdAt:new Date}),o.value=!0;else{const M=x.data();M.role?l.value=M.role:o.value=!0}}catch(P){console.error("Error during role check:",P)}finally{c.value=!1}},d=async()=>{if(!u.value||!n.currentUser)return;const _=kn(i,"artifacts",e,"users",n.currentUser.uid);await wl(_,{role:u.value}),l.value=u.value,o.value=!1},m=async()=>{try{await n.signOut(),s.push("/signin")}catch(_){console.error("Error logging out:",_)}};return jt(()=>n.currentUser,_=>{c.value=!0,h(_)},{immediate:!0}),(_,P)=>(ne(),ae("div",null,[c.value?(ne(),ae("div",c4,[g("p",null,k(A(r)==="en"?"Verifying session...":"جار التحقق من الجلسة..."),1)])):(ne(),ae(Gt,{key:1},[o.value?(ne(),ae("div",u4,[g("div",h4,[g("h2",null,k(A(r)==="en"?"Select Your Role":"اختر دورك"),1),g("p",null,k(A(r)==="en"?"Please choose your role:":"يرجى اختيار دورك:"),1),g("div",f4,[g("button",{class:"role-button",onClick:P[0]||(P[0]=x=>{u.value="doctor",d()})},k(A(r)==="en"?"Doctor":"طبيب"),1),g("button",{class:"role-button",onClick:P[1]||(P[1]=x=>{u.value="patient",d()})},k(A(r)==="en"?"Patient":"مريض"),1)])])])):He("",!0),g("div",{class:mi(["dashboard-page dashboard-blur-area",{"is-blurred":o.value}])},[g("main",d4,[g("section",p4,[g("h2",{dir:A(r)==="ar"?"rtl":"ltr"},k(A(r)==="en"?"Welcome to mSv Dose Tracker":"مرحبًا بك في متتبع جرعات الأشعة السينية"),9,m4),g("p",{dir:A(r)==="ar"?"rtl":"ltr"},k(A(r)==="en"?"Your comprehensive tool for managing patient radiation exposure and recommendations.":"أداتك الشاملة لإدارة تعرض المرضى للإشعاع وتقديم التوصيات."),9,g4),g("div",_4,[g("div",{class:"feature-item",onClick:P[2]||(P[2]=x=>A(s).push("/recommend"))},[P[5]||(P[5]=g("i",{class:"fas fa-file-medical"},null,-1)),g("h3",{dir:A(r)==="ar"?"rtl":"ltr"},k(A(r)==="en"?"Get Scan Recommendation":"الحصول على توصية"),9,y4),g("p",{dir:A(r)==="ar"?"rtl":"ltr"},k(A(r)==="en"?"Receive AI-powered recommendations for X-ray or CT scans.":"احصل على توصيات مدعومة بالذكاء الاصطناعي لفحوصات الأشعة."),9,v4)]),l.value==="doctor"?(ne(),ae("div",{key:0,class:"feature-item",onClick:P[3]||(P[3]=x=>A(s).push("/patients"))},[P[6]||(P[6]=g("i",{class:"fas fa-users"},null,-1)),g("h3",{dir:A(r)==="ar"?"rtl":"ltr"},k(A(r)==="en"?"Manage Patients":"إدارة المرضى"),9,E4),g("p",{dir:A(r)==="ar"?"rtl":"ltr"},k(A(r)==="en"?"View, add, and manage patient records securely.":"عرض وإضافة وإدارة سجلات المرضى بأمان."),9,w4)])):He("",!0),g("div",{class:"feature-item",onClick:P[4]||(P[4]=x=>A(s).push("/history"))},[P[7]||(P[7]=g("i",{class:"fas fa-history"},null,-1)),g("h3",{dir:A(r)==="ar"?"rtl":"ltr"},k(A(r)==="en"?"View Scan History":"عرض سجل الفحوصات"),9,b4),g("p",{dir:A(r)==="ar"?"rtl":"ltr"},k(A(r)==="en"?"Review past X-ray and CT scan records.":"مراجعة سجلات فحوصات الأشعة السينية والمقطعية السابقة."),9,T4)])]),g("button",{onClick:m,class:"action-button secondary logout-button"},k(A(r)==="en"?"Logout":"تسجيل الخروج"),1)])])],2)],64))]))}},A4=Nt(I4,[["__scopeId","data-v-1921dbd8"]]),S4={class:"reset-password-page"},C4={class:"reset-password-main-content"},R4={class:"reset-password-card"},P4=["dir"],k4=["dir"],x4={class:"form-group"},O4=["dir"],D4=["placeholder","dir"],N4=["disabled"],V4={key:0},M4={key:1},L4=["dir"],F4=["dir"],U4=["dir"],$4={__name:"ResetPasswordView",setup(t){const e=Rs(),n=Ln(),r=Le("currentLanguage"),s=pe(""),i=async()=>{await n.sendPasswordReset(s.value)},o=()=>{e.push("/signin")};return(l,c)=>(ne(),ae("div",S4,[g("main",C4,[g("section",R4,[g("h2",{dir:A(r)==="ar"?"rtl":"ltr"},k(A(r)==="en"?"Reset Your Password":"إعادة تعيين كلمة المرور"),9,P4),g("p",{dir:A(r)==="ar"?"rtl":"ltr"},k(A(r)==="en"?"Enter your email address to receive a password reset link.":"أدخل عنوان بريدك الإلكتروني لتلقي رابط إعادة تعيين كلمة المرور."),9,k4),g("form",{onSubmit:bt(i,["prevent"]),class:"reset-password-form"},[g("div",x4,[g("label",{for:"email",dir:A(r)==="ar"?"rtl":"ltr"},k(A(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,O4),Fe(g("input",{type:"email",id:"email","onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),placeholder:A(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:A(r)==="ar"?"rtl":"ltr",required:""},null,8,D4),[[Ze,s.value]])]),g("button",{class:"action-button primary",type:"submit",disabled:A(n).loading},[A(n).loading?(ne(),ae("span",V4,k(A(r)==="en"?"Sending Link...":"جاري إرسال الرابط..."),1)):(ne(),ae("span",M4,k(A(r)==="en"?"Send Reset Link":"إرسال رابط إعادة التعيين"),1))],8,N4)],32),A(n).error?(ne(),ae("div",{key:0,class:"message error-message",dir:A(r)==="ar"?"rtl":"ltr"},k(A(n).error),9,L4)):He("",!0),A(n).successMessage?(ne(),ae("div",{key:1,class:"message success-message",dir:A(r)==="ar"?"rtl":"ltr"},k(A(n).successMessage),9,F4)):He("",!0),g("p",{class:"switch-link-container",dir:A(r)==="ar"?"rtl":"ltr"},[je(k(A(r)==="en"?"Remembered your password?":"هل تذكرت كلمة المرور؟")+" ",1),g("a",{href:"#",onClick:bt(o,["prevent"])},k(A(r)==="en"?"Sign In":"تسجيل الدخول"),1)],8,U4)])])]))}},j4=Nt($4,[["__scopeId","data-v-73a48bd7"]]),B4={class:"history-table-container"},H4={key:0,class:"loading-message"},z4={key:1,class:"no-items-message"},q4={key:2,class:"history-table"},W4={key:0},G4={class:"actions-column"},K4={key:0},Q4={class:"action-buttons-wrapper"},Y4=["onClick"],X4=["onClick"],J4={__name:"HistoryTable",props:{scans:Array,isLoading:Boolean},emits:["edit","delete"],setup(t,{emit:e}){const n=Ln(),r=Le("currentLanguage"),s=Ke(()=>n.role),i=l=>{if(!l)return"N/A";const c=l.toDate?l.toDate():new Date(l);return isNaN(c)?"Invalid Date":new Date(c).toLocaleDateString("en-UK")},o=l=>typeof l=="number"?l.toFixed(2):"N/A";return(l,c)=>(ne(),ae("div",B4,[t.isLoading?(ne(),ae("div",H4,"...")):t.scans.length===0?(ne(),ae("div",z4,k(A(r)==="en"?"No scan history found.":"لم يتم العثور على سجل فحوصات."),1)):(ne(),ae("table",q4,[g("thead",null,[g("tr",null,[g("th",null,k(A(r)==="en"?"Patient Name":"اسم المريض"),1),g("th",null,k(A(r)==="en"?"Scan Type":"نوع الفحص"),1),g("th",null,k(A(r)==="en"?"Scan Date":"تاريخ الفحص"),1),g("th",null,k(A(r)==="en"?"Patient's Dose":"جرعة المريض"),1),s.value==="doctor"?(ne(),ae("th",W4,k(A(r)==="en"?"Doctor's Dose":"جرعة الطبيب"),1)):He("",!0),g("th",G4,k(A(r)==="en"?"Actions":"الإجراءات"),1)])]),g("tbody",null,[(ne(!0),ae(Gt,null,kh(t.scans,u=>(ne(),ae("tr",{key:u.id},[g("td",null,k(u.patientName),1),g("td",null,k(u.scanType),1),g("td",null,k(i(u.scanDate)),1),g("td",null,k(o(u.dose)),1),s.value==="doctor"?(ne(),ae("td",K4,k(o(u.doctorDose)),1)):He("",!0),g("td",null,[g("div",Q4,[g("button",{onClick:h=>l.$emit("edit",u),class:"action-button-sm edit-button"},k(A(r)==="en"?"Edit":"تعديل"),9,Y4),g("button",{onClick:h=>l.$emit("delete",u),class:"action-button-sm delete-button"},k(A(r)==="en"?"Delete":"حذف"),9,X4)])])]))),128))])]))]))}},Z4=Nt(J4,[["__scopeId","data-v-8046c3f8"]]),eV=["dir"],tV={class:"modal-title"},nV={class:"form-row"},rV={class:"form-group"},sV={class:"form-group"},iV={value:"male"},oV={value:"female"},aV={key:0,class:"form-row pregnancy-section"},lV={class:"form-group checkbox-group"},cV={class:"form-group"},uV={class:"form-row"},hV={class:"form-group"},fV={value:"X-ray"},dV={value:"CT"},pV={value:"X-ray and CT"},mV={class:"form-group"},gV={class:"form-row"},_V={class:"form-group"},yV={key:0,class:"form-group"},vV={class:"form-group"},EV={class:"form-group"},wV={key:1,class:"form-group"},bV=["placeholder"],TV=["disabled"],IV={__name:"ScanFormModal",props:{show:Boolean,scan:Object,isSaving:Boolean},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=Ln(),i=Le("currentLanguage"),o=Ke(()=>s.role),l=Cs({id:null,patientName:"",sex:"male",isPregnant:!1,pregnancyMonth:null,scanType:"X-ray",scanDate:"",dose:null,doctorDose:null,reason:"",notes:"",doctorAdditionalContext:""});jt(()=>n.scan,h=>{h?(l.id=h.id,l.patientName=h.patientName,l.sex=h.sex||"male",l.isPregnant=h.isPregnant||!1,l.pregnancyMonth=h.pregnancyMonth||null,l.scanType=h.scanType,l.scanDate=h.scanDate?typeof h.scanDate=="string"?h.scanDate:h.scanDate.toDate?h.scanDate.toDate().toISOString().split("T")[0]:"":"",l.dose=h.dose,l.doctorDose=h.doctorDose||null,l.reason=h.reason,l.notes=h.notes,l.doctorAdditionalContext=h.doctorAdditionalContext||""):Object.assign(l,{id:null,patientName:"",sex:"male",isPregnant:!1,pregnancyMonth:null,scanType:"X-ray",scanDate:"",dose:null,doctorDose:null,reason:"",notes:"",doctorAdditionalContext:""})}),jt(()=>l.sex,h=>{h!=="female"&&(l.isPregnant=!1)}),jt(()=>l.isPregnant,h=>{h||(l.pregnancyMonth=null)});const c=async h=>{let d="";h==="patient"?d=i.value==="en"?`Estimate the effective dose (in mSv) for a patient undergoing a ${l.scanType} scan.
Reason: ${l.reason||"No reason provided"}
Symptoms: ${l.notes||"No additional notes"}

Respond only with a number.`:`قدر الجرعة الفعالة (mSv) لمريض يخضع لفحص ${l.scanType}.
السبب: ${l.reason||"لا يوجد سبب"}
ملاحظات إضافية: ${l.notes||"لا يوجد"}

الرجاء الرد فقط بالرقم.`:h==="doctor"&&(d=i.value==="en"?`Estimate the effective occupational dose (in mSv) for a doctor during a patient's ${l.scanType} scan.
Doctor's context: ${l.doctorAdditionalContext||"No additional context from doctor."}

The typical occupational dose is a fraction of the patient dose. Respond only with a number.`:`قدر الجرعة المهنية الفعالة (mSv) لطبيب أثناء فحص ${l.scanType} لمريض.
سياق الطبيب: ${l.doctorAdditionalContext||"لا يوجد سياق إضافي من الطبيب."}

الجرعة المهنية عادة ما تكون جزءًا صغيرًا من جرعة المريض. الرجاء الرد فقط بالرقم.`);try{const x=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB9KAR0P6sxAj7fP2I-MyVSVOJJaW0J91M",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:d}]}],generationConfig:{responseMimeType:"text/plain"}})});if(!x.ok)throw new Error(`Failed to estimate dose for ${h}.`);const N=(await x.json()).candidates?.[0]?.content?.parts?.[0]?.text||"",O=parseFloat(N.match(/[\d.]+/));return isNaN(O)?(alert(i.value==="en"?`Could not estimate the ${h} dose. Please provide it manually.`:`لم نتمكن من تقدير جرعة ${h==="patient"?"المريض":"الطبيب"}. يرجى إدخالها يدوياً.`),!1):(h==="patient"?l.dose=O:h==="doctor"&&(l.doctorDose=O),!0)}catch(m){return console.error("Dose estimate failed:",m),alert(i.value==="en"?`An error occurred while estimating the ${h} dose.`:`حدث خطأ أثناء تقدير جرعة ${h==="patient"?"المريض":"الطبيب"}.`),!1}},u=async()=>{if(!l.patientName||!l.scanDate){alert(i.value==="en"?"Please provide patient name and scan date.":"يرجى إدخال اسم المريض وتاريخ الفحص.");return}(l.dose==null||l.dose==="")&&!await c("patient")||o.value==="doctor"&&(l.doctorDose==null||l.doctorDose==="")&&!await c("doctor")||r("save",{...l})};return(h,d)=>(ne(),Zr(gi,{name:"modal-fade"},{default:$r(()=>[t.show?(ne(),ae("div",{key:0,class:"modal-overlay",onClick:d[13]||(d[13]=bt(m=>h.$emit("close"),["self"]))},[g("div",{class:"modal-content",dir:A(i)==="ar"?"rtl":"ltr"},[g("button",{class:"close-modal-button",onClick:d[0]||(d[0]=m=>h.$emit("close"))},"×"),g("h3",tV,k(A(i)==="en"?n.scan?"Edit Scan Record":"Add New Scan Record":n.scan?"تعديل سجل الفحص":"إضافة سجل فحص جديد"),1),g("form",{onSubmit:bt(u,["prevent"]),class:"scan-form"},[g("div",nV,[g("div",rV,[g("label",null,[je(k(A(i)==="en"?"Patient Name":"اسم المريض")+" ",1),d[14]||(d[14]=g("span",{class:"required-asterisk"},"*",-1))]),Fe(g("input",{type:"text","onUpdate:modelValue":d[1]||(d[1]=m=>l.patientName=m),required:""},null,512),[[Ze,l.patientName]])]),g("div",sV,[g("label",null,[je(k(A(i)==="en"?"Sex":"الجنس")+" ",1),d[15]||(d[15]=g("span",{class:"required-asterisk"},"*",-1))]),Fe(g("select",{"onUpdate:modelValue":d[2]||(d[2]=m=>l.sex=m),required:""},[g("option",iV,k(A(i)==="en"?"Male":"ذكر"),1),g("option",oV,k(A(i)==="en"?"Female":"أنثى"),1)],512),[[bo,l.sex]])])]),l.sex==="female"?(ne(),ae("div",aV,[g("div",lV,[g("label",null,[Fe(g("input",{type:"checkbox","onUpdate:modelValue":d[3]||(d[3]=m=>l.isPregnant=m)},null,512),[[ny,l.isPregnant]]),g("span",null,k(A(i)==="en"?"Is Pregnant?":"هل المريضة حامل؟"),1)])]),g("div",cV,[g("div",{class:mi(["visibility-container",{"is-visible":l.isPregnant}])},[g("label",null,k(A(i)==="en"?"Month of Pregnancy":"شهر الحمل"),1),Fe(g("input",{type:"number","onUpdate:modelValue":d[4]||(d[4]=m=>l.pregnancyMonth=m),min:"1",max:"9",placeholder:"1-9"},null,512),[[Ze,l.pregnancyMonth]])],2)])])):He("",!0),g("div",uV,[g("div",hV,[g("label",null,[je(k(A(i)==="en"?"Scan Type":"نوع الفحص")+" ",1),d[16]||(d[16]=g("span",{class:"required-asterisk"},"*",-1))]),Fe(g("select",{"onUpdate:modelValue":d[5]||(d[5]=m=>l.scanType=m),required:""},[g("option",fV,k(A(i)==="en"?"X-ray":"أشعة سينية"),1),g("option",dV,k(A(i)==="en"?"CT":"أشعة مقطعية"),1),g("option",pV,k(A(i)==="en"?"X-ray and CT":"أشعة سينية ومقطعية"),1)],512),[[bo,l.scanType]])]),g("div",mV,[g("label",null,[je(k(A(i)==="en"?"Scan Date":"تاريخ الفحص")+" ",1),d[17]||(d[17]=g("span",{class:"required-asterisk"},"*",-1))]),Fe(g("input",{type:"date","onUpdate:modelValue":d[6]||(d[6]=m=>l.scanDate=m),required:""},null,512),[[Ze,l.scanDate]])])]),g("div",gV,[g("div",_V,[g("label",null,k(A(i)==="en"?"Patient's Dose (mSv)":"جرعة المريض (mSv)"),1),Fe(g("input",{type:"number",step:"0.01","onUpdate:modelValue":d[7]||(d[7]=m=>l.dose=m)},null,512),[[Ze,l.dose]])]),o.value==="doctor"?(ne(),ae("div",yV,[g("label",null,k(A(i)==="en"?"Doctor's Dose (mSv)":"جرعة الطبيب (mSv)"),1),Fe(g("input",{type:"number",step:"0.01","onUpdate:modelValue":d[8]||(d[8]=m=>l.doctorDose=m)},null,512),[[Ze,l.doctorDose]])])):He("",!0)]),g("div",vV,[g("label",null,k(A(i)==="en"?"Reason for Scan":"أسباب الفحص"),1),Fe(g("textarea",{"onUpdate:modelValue":d[9]||(d[9]=m=>l.reason=m),rows:"2"},null,512),[[Ze,l.reason]])]),g("div",EV,[g("label",null,k(A(i)==="en"?"Additional Notes":"ملاحظات إضافية"),1),Fe(g("textarea",{"onUpdate:modelValue":d[10]||(d[10]=m=>l.notes=m),rows:"3"},null,512),[[Ze,l.notes]])]),o.value==="doctor"?(ne(),ae("div",wV,[g("label",null,k(A(i)==="en"?"Additional details affecting your exposure (optional)":"تفاصيل إضافية على تعرضك (اختياري)"),1),Fe(g("textarea",{"onUpdate:modelValue":d[11]||(d[11]=m=>l.doctorAdditionalContext=m),rows:"2",placeholder:A(i)==="en"?"e.g., Stood 2 meters from the machine, used a lead apron and thyroid shield...etc":"مثال: وقفت على بعد 2 متر من الجهاز، استخدمت مريول رصاص وواقي للغدة الدرقية...إلخ"},null,8,bV),[[Ze,l.doctorAdditionalContext]])])):He("",!0),g("button",{type:"submit",class:"action-button",disabled:t.isSaving},k(t.isSaving?A(i)==="en"?"Saving...":"جار الحفظ...":A(i)==="en"?"Save":"حفظ"),9,TV),g("button",{type:"button",onClick:d[12]||(d[12]=m=>h.$emit("close")),class:"action-button secondary"},k(A(i)==="en"?"Cancel":"إلغاء"),1)],32)],8,eV)])):He("",!0)]),_:1}))}},AV=Nt(IV,[["__scopeId","data-v-7ddb2a7a"]]),SV={class:"history-page"},CV={class:"history-main-content"},RV={class:"history-card"},PV={class:"switch-link-container"},kV={__name:"HistoryView",setup(t){const e="1:382664693760:web:7582abe58d70b3260f20e5",n=Ln(),r=Le("currentLanguage"),s=Xo(),i=Rs(),o=Le("triggerMsvRecalculation"),l=pe([]),c=pe(!0),u=pe(!1),h=pe(!1),d=pe(!1),m=pe(null),_=pe(null),P=async()=>{c.value=!0;try{const U=Js(s,"artifacts",e,"users",n.user.uid,"scans"),G=await Of(U);l.value=G.docs.map(J=>({id:J.id,...J.data()})).sort((J,R)=>(R.scanDate?.toMillis?.()||new Date(R.scanDate).getTime()||0)-(J.scanDate?.toMillis?.()||new Date(J.scanDate).getTime()||0))}catch(U){console.error("Error fetching scans:",U)}finally{c.value=!1}},x=async U=>{u.value=!0;try{const G=Js(s,"artifacts",e,"users",n.user.uid,"scans"),J={...U,scanDate:new Date(U.scanDate),timestamp:Qu()};if(J.id)await wl(kn(G,J.id),J);else{const{id:R,...E}=J;await QE(G,E)}h.value=!1,await P(),await o()}catch(G){console.error("Error saving scan:",G)}finally{u.value=!1}},M=async()=>{if(_.value)try{const U=Js(s,"artifacts",e,"users",n.user.uid,"scans");await KE(kn(U,_.value.id)),d.value=!1,await P(),await o()}catch(U){console.error("Error deleting scan:",U)}},N=()=>{m.value=null,h.value=!0},O=U=>{m.value=U,h.value=!0},L=U=>{_.value=U,d.value=!0};return jt(()=>n.user,U=>{U?P():l.value=[]},{immediate:!0}),(U,G)=>(ne(),ae("div",SV,[g("div",CV,[g("div",RV,[g("h2",null,k(A(r)==="en"?"Scan History":"سجل الفحوصات"),1),g("p",null,k(A(r)==="en"?"Review, add, and manage all past scans.":"مراجعة وإضافة وإدارة جميع الفحوصات السابقة."),1),g("button",{onClick:N,class:"action-button"},k(A(r)==="en"?"Add New Scan":"إضافة فحص جديد"),1),Oe(Z4,{scans:l.value,"is-loading":c.value,onEdit:O,onDelete:L},null,8,["scans","is-loading"]),g("div",PV,[g("a",{href:"#",onClick:G[0]||(G[0]=bt(J=>A(i).push("/dashboard"),["prevent"]))},k(A(r)==="en"?"Back to dashboard":"العودة إلى لوحة التحكم"),1)])])]),Oe(AV,{show:h.value,scan:m.value,"is-saving":u.value,onClose:G[1]||(G[1]=J=>h.value=!1),onSave:x},null,8,["show","scan","is-saving"]),Oe(dh,{show:d.value,title:A(r)==="en"?"Delete Scan":"حذف الفحص",message:`${A(r)==="en"?"Are you sure you want to delete the scan for":"هل أنت متأكد من حذف فحص المريض"} ${_.value?.patientName}?`,onClose:G[2]||(G[2]=J=>d.value=!1),onConfirm:M},null,8,["show","title","message"])]))}},xV=Nt(kV,[["__scopeId","data-v-b0fdccbb"]]),Al=NT({history:uT("/X-ray"),routes:[{path:"/",name:"signup",component:Kk},{path:"/signin",name:"signin",component:gx},{path:"/dashboard",name:"dashboard",component:A4,meta:{requiresAuth:!0}},{path:"/recommend/:patientId?",name:"recommend",component:Qx,meta:{requiresAuth:!0}},{path:"/patients",name:"patients",component:l4,meta:{requiresAuth:!0}},{path:"/history",name:"history",component:xV,meta:{requiresAuth:!0}},{path:"/resetpassword",name:"resetpassword",component:j4},{path:"/__/auth/handler",name:"firebaseAuthHandler",component:{render(){return ti("div")}},beforeEnter:(t,e,n)=>{n()}},{path:"/:catchAll(.*)",redirect:"/dashboard"},{path:"/__/auth/iframe",name:"firebaseAuthIframeHandler",component:{render(){return ti("div")}},beforeEnter:(t,e,n)=>{n()}}]});Al.beforeEach(async(t,e,n)=>{const r=Ln();r.isAuthReady||await new Promise(l=>{const c=r.$subscribe((u,h)=>{h.isAuthReady&&(c(),l())})});const s=!!r.user;if(t.path.startsWith("/__/auth/handler")||t.path.startsWith("/__/auth/iframe")){n();return}console.log(`Navigating to: ${t.path} (name: ${t.name})`),console.log(`isAuthenticated: ${s}`);const o=["signup","signin","resetpassword","newpassword"].includes(t.name);s?o?(console.log(`Redirecting authenticated user from ${t.name} to /dashboard.`),n("/dashboard")):(console.log(`Allowing authenticated access to ${t.path}.`),n()):o?(console.log(`Allowing unauthenticated access to ${t.name}.`),n()):(console.log(`Redirecting unauthenticated user from ${t.path} (requires auth) to /signin.`),n("/signin"))});var OV="firebase",DV="11.10.0";/**
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
 */Mr(OV,DV,"app");/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const NV={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]},VV=NV,MV={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},LV=MV,FV={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},UV={prefix:"fas",iconName:"file-medical",icon:[384,512,[],"f477","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM160 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z"]},$V={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},jV={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};YD.add(FV,LV,VV,UV,$V,jV);const BV={apiKey:"AIzaSyBKiw2ibjMQB-i_sMorpK5nXyHb87_6uZA",authDomain:"x-ray-b0cb8.firebaseapp.com",projectId:"x-ray-b0cb8",storageBucket:"x-ray-b0cb8.firebasestorage.app",messagingSenderId:"382664693760",appId:"1:382664693760:web:7582abe58d70b3260f20e5",measurementId:"G-5MKNMY9VGY"},O0=xy(BV),zf=GC(O0),HV=Xo(O0),fr=xb(Ak),zV=LT();fr.use(zV);fr.use(Al);fr.component("font-awesome-icon",Kn);const ph=pe(null),D0=pe(!1),Qi=Ln();Qi.initAuth(zf);nv(zf,t=>{if(ph.value=t?t.uid:null,Qi.user=t,Qi.isAuthenticated=!!t,D0.value=!0,t){const e=Al.currentRoute.value.name;["signup","signin","resetpassword","newpassword"].includes(e)&&Al.push("/dashboard")}else ph.value=null,Qi.user=null,Qi.isAuthenticated=!1});fr.provide("db",HV);fr.provide("auth",zf);fr.provide("currentUserId",ph);fr.provide("isAuthReady",D0);fr.provide("appId",typeof __app_id<"u"?__app_id:"default-app-id");fr.mount("#app");
