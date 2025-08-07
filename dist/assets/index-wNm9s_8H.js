(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ch(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ke={},ei=[],On=()=>{},g0=()=>!1,Fl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Rh=t=>t.startsWith("onUpdate:"),bt=Object.assign,Dh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},y0=Object.prototype.hasOwnProperty,He=(t,e)=>y0.call(t,e),me=Array.isArray,ti=t=>Ho(t)==="[object Map]",Ei=t=>Ho(t)==="[object Set]",Kf=t=>Ho(t)==="[object Date]",Re=t=>typeof t=="function",ut=t=>typeof t=="string",Fn=t=>typeof t=="symbol",Ye=t=>t!==null&&typeof t=="object",ry=t=>(Ye(t)||Re(t))&&Re(t.then)&&Re(t.catch),sy=Object.prototype.toString,Ho=t=>sy.call(t),_0=t=>Ho(t).slice(8,-1),iy=t=>Ho(t)==="[object Object]",kh=t=>ut(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,so=Ch(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$l=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},v0=/-(\w)/g,qr=$l(t=>t.replace(v0,(e,n)=>n?n.toUpperCase():"")),b0=/\B([A-Z])/g,Os=$l(t=>t.replace(b0,"-$1").toLowerCase()),oy=$l(t=>t.charAt(0).toUpperCase()+t.slice(1)),jc=$l(t=>t?`on${oy(t)}`:""),Mr=(t,e)=>!Object.is(t,e),ja=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Eu=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},sl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},E0=t=>{const e=ut(t)?Number(t):NaN;return isNaN(e)?t:e};let Yf;const Ul=()=>Yf||(Yf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bl(t){if(me(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ut(r)?S0(r):Bl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ut(t)||Ye(t))return t}const w0=/;(?![^(]*\))/g,T0=/:([^]+)/,I0=/\/\*[^]*?\*\//g;function S0(t){const e={};return t.replace(I0,"").split(w0).forEach(n=>{if(n){const r=n.split(T0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ts(t){let e="";if(ut(t))e=t;else if(me(t))for(let n=0;n<t.length;n++){const r=Ts(t[n]);r&&(e+=r+" ")}else if(Ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const A0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",P0=Ch(A0);function ay(t){return!!t||t===""}function C0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=zo(t[r],e[r]);return n}function zo(t,e){if(t===e)return!0;let n=Kf(t),r=Kf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Fn(t),r=Fn(e),n||r)return t===e;if(n=me(t),r=me(e),n||r)return n&&r?C0(t,e):!1;if(n=Ye(t),r=Ye(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!zo(t[o],e[o]))return!1}}return String(t)===String(e)}function Oh(t,e){return t.findIndex(n=>zo(n,e))}const ly=t=>!!(t&&t.__v_isRef===!0),T=t=>ut(t)?t:t==null?"":me(t)||Ye(t)&&(t.toString===sy||!Re(t.toString))?ly(t)?T(t.value):JSON.stringify(t,cy,2):String(t),cy=(t,e)=>ly(e)?cy(t,e.value):ti(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[qc(r,i)+" =>"]=s,n),{})}:Ei(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>qc(n))}:Fn(e)?qc(e):Ye(e)&&!me(e)&&!iy(e)?String(e):e,qc=(t,e="")=>{var n;return Fn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mt;class uy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Mt,!e&&Mt&&(this.index=(Mt.scopes||(Mt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Mt;try{return Mt=this,e()}finally{Mt=n}}}on(){++this._on===1&&(this.prevScope=Mt,Mt=this)}off(){this._on>0&&--this._on===0&&(Mt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function hy(t){return new uy(t)}function dy(){return Mt}function R0(t,e=!1){Mt&&Mt.cleanups.push(t)}let Qe;const Hc=new WeakSet;class fy{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Mt&&Mt.active&&Mt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hc.has(this)&&(Hc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||my(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qf(this),gy(this);const e=Qe,n=_n;Qe=this,_n=!0;try{return this.fn()}finally{yy(this),Qe=e,_n=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vh(e);this.deps=this.depsTail=void 0,Qf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wu(this)&&this.run()}get dirty(){return wu(this)}}let py=0,io,oo;function my(t,e=!1){if(t.flags|=8,e){t.next=oo,oo=t;return}t.next=io,io=t}function Nh(){py++}function xh(){if(--py>0)return;if(oo){let e=oo;for(oo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;io;){let e=io;for(io=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function gy(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function yy(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Vh(r),D0(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function wu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(_y(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function _y(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===To)||(t.globalVersion=To,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!wu(t))))return;t.flags|=2;const e=t.dep,n=Qe,r=_n;Qe=t,_n=!0;try{gy(t);const s=t.fn(t._value);(e.version===0||Mr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Qe=n,_n=r,yy(t),t.flags&=-3}}function Vh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Vh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function D0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let _n=!0;const vy=[];function sr(){vy.push(_n),_n=!1}function ir(){const t=vy.pop();_n=t===void 0?!0:t}function Qf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Qe;Qe=void 0;try{e()}finally{Qe=n}}}let To=0;class k0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Mh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Qe||!_n||Qe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Qe)n=this.activeLink=new k0(Qe,this),Qe.deps?(n.prevDep=Qe.depsTail,Qe.depsTail.nextDep=n,Qe.depsTail=n):Qe.deps=Qe.depsTail=n,by(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Qe.depsTail,n.nextDep=void 0,Qe.depsTail.nextDep=n,Qe.depsTail=n,Qe.deps===n&&(Qe.deps=r)}return n}trigger(e){this.version++,To++,this.notify(e)}notify(e){Nh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{xh()}}}function by(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)by(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const il=new WeakMap,bs=Symbol(""),Tu=Symbol(""),Io=Symbol("");function Ft(t,e,n){if(_n&&Qe){let r=il.get(t);r||il.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Mh),s.map=r,s.key=n),s.track()}}function Yn(t,e,n,r,s,i){const o=il.get(t);if(!o){To++;return}const c=l=>{l&&l.trigger()};if(Nh(),e==="clear")o.forEach(c);else{const l=me(t),u=l&&kh(n);if(l&&n==="length"){const h=Number(r);o.forEach((m,p)=>{(p==="length"||p===Io||!Fn(p)&&p>=h)&&c(m)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Io)),e){case"add":l?u&&c(o.get("length")):(c(o.get(bs)),ti(t)&&c(o.get(Tu)));break;case"delete":l||(c(o.get(bs)),ti(t)&&c(o.get(Tu)));break;case"set":ti(t)&&c(o.get(bs));break}}xh()}function O0(t,e){const n=il.get(t);return n&&n.get(e)}function js(t){const e=Ue(t);return e===t?e:(Ft(e,"iterate",Io),un(t)?e:e.map(Pt))}function jl(t){return Ft(t=Ue(t),"iterate",Io),t}const N0={__proto__:null,[Symbol.iterator](){return zc(this,Symbol.iterator,Pt)},concat(...t){return js(this).concat(...t.map(e=>me(e)?js(e):e))},entries(){return zc(this,"entries",t=>(t[1]=Pt(t[1]),t))},every(t,e){return zn(this,"every",t,e,void 0,arguments)},filter(t,e){return zn(this,"filter",t,e,n=>n.map(Pt),arguments)},find(t,e){return zn(this,"find",t,e,Pt,arguments)},findIndex(t,e){return zn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return zn(this,"findLast",t,e,Pt,arguments)},findLastIndex(t,e){return zn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return zn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Wc(this,"includes",t)},indexOf(...t){return Wc(this,"indexOf",t)},join(t){return js(this).join(t)},lastIndexOf(...t){return Wc(this,"lastIndexOf",t)},map(t,e){return zn(this,"map",t,e,void 0,arguments)},pop(){return zi(this,"pop")},push(...t){return zi(this,"push",t)},reduce(t,...e){return Xf(this,"reduce",t,e)},reduceRight(t,...e){return Xf(this,"reduceRight",t,e)},shift(){return zi(this,"shift")},some(t,e){return zn(this,"some",t,e,void 0,arguments)},splice(...t){return zi(this,"splice",t)},toReversed(){return js(this).toReversed()},toSorted(t){return js(this).toSorted(t)},toSpliced(...t){return js(this).toSpliced(...t)},unshift(...t){return zi(this,"unshift",t)},values(){return zc(this,"values",Pt)}};function zc(t,e,n){const r=jl(t),s=r[e]();return r!==t&&!un(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const x0=Array.prototype;function zn(t,e,n,r,s,i){const o=jl(t),c=o!==t&&!un(t),l=o[e];if(l!==x0[e]){const m=l.apply(t,i);return c?Pt(m):m}let u=n;o!==t&&(c?u=function(m,p){return n.call(this,Pt(m),p,t)}:n.length>2&&(u=function(m,p){return n.call(this,m,p,t)}));const h=l.call(o,u,r);return c&&s?s(h):h}function Xf(t,e,n,r){const s=jl(t);let i=n;return s!==t&&(un(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,Pt(c),l,t)}),s[e](i,...r)}function Wc(t,e,n){const r=Ue(t);Ft(r,"iterate",Io);const s=r[e](...n);return(s===-1||s===!1)&&$h(n[0])?(n[0]=Ue(n[0]),r[e](...n)):s}function zi(t,e,n=[]){sr(),Nh();const r=Ue(t)[e].apply(t,n);return xh(),ir(),r}const V0=Ch("__proto__,__v_isRef,__isVue"),Ey=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fn));function M0(t){Fn(t)||(t=String(t));const e=Ue(this);return Ft(e,"has",t),e.hasOwnProperty(t)}class wy{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?W0:Ay:i?Sy:Iy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=me(e);if(!s){let l;if(o&&(l=N0[n]))return l;if(n==="hasOwnProperty")return M0}const c=Reflect.get(e,n,ct(e)?e:r);return(Fn(n)?Ey.has(n):V0(n))||(s||Ft(e,"get",n),i)?c:ct(c)?o&&kh(n)?c:c.value:Ye(c)?s?Cy(c):Un(c):c}}class Ty extends wy{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Hr(i);if(!un(r)&&!Hr(r)&&(i=Ue(i),r=Ue(r)),!me(e)&&ct(i)&&!ct(r))return l?!1:(i.value=r,!0)}const o=me(e)&&kh(n)?Number(n)<e.length:He(e,n),c=Reflect.set(e,n,r,ct(e)?e:s);return e===Ue(s)&&(o?Mr(r,i)&&Yn(e,"set",n,r):Yn(e,"add",n,r)),c}deleteProperty(e,n){const r=He(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Yn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Fn(n)||!Ey.has(n))&&Ft(e,"has",n),r}ownKeys(e){return Ft(e,"iterate",me(e)?"length":bs),Reflect.ownKeys(e)}}class L0 extends wy{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const F0=new Ty,$0=new L0,U0=new Ty(!0);const Iu=t=>t,Pa=t=>Reflect.getPrototypeOf(t);function B0(t,e,n){return function(...r){const s=this.__v_raw,i=Ue(s),o=ti(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?Iu:e?ol:Pt;return!e&&Ft(i,"iterate",l?Tu:bs),{next(){const{value:m,done:p}=u.next();return p?{value:m,done:p}:{value:c?[h(m[0]),h(m[1])]:h(m),done:p}},[Symbol.iterator](){return this}}}}function Ca(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function j0(t,e){const n={get(s){const i=this.__v_raw,o=Ue(i),c=Ue(s);t||(Mr(s,c)&&Ft(o,"get",s),Ft(o,"get",c));const{has:l}=Pa(o),u=e?Iu:t?ol:Pt;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Ft(Ue(s),"iterate",bs),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ue(i),c=Ue(s);return t||(Mr(s,c)&&Ft(o,"has",s),Ft(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ue(c),u=e?Iu:t?ol:Pt;return!t&&Ft(l,"iterate",bs),c.forEach((h,m)=>s.call(i,u(h),u(m),o))}};return bt(n,t?{add:Ca("add"),set:Ca("set"),delete:Ca("delete"),clear:Ca("clear")}:{add(s){!e&&!un(s)&&!Hr(s)&&(s=Ue(s));const i=Ue(this);return Pa(i).has.call(i,s)||(i.add(s),Yn(i,"add",s,s)),this},set(s,i){!e&&!un(i)&&!Hr(i)&&(i=Ue(i));const o=Ue(this),{has:c,get:l}=Pa(o);let u=c.call(o,s);u||(s=Ue(s),u=c.call(o,s));const h=l.call(o,s);return o.set(s,i),u?Mr(i,h)&&Yn(o,"set",s,i):Yn(o,"add",s,i),this},delete(s){const i=Ue(this),{has:o,get:c}=Pa(i);let l=o.call(i,s);l||(s=Ue(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Yn(i,"delete",s,void 0),u},clear(){const s=Ue(this),i=s.size!==0,o=s.clear();return i&&Yn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=B0(s,t,e)}),n}function Lh(t,e){const n=j0(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(He(n,s)&&s in r?n:r,s,i)}const q0={get:Lh(!1,!1)},H0={get:Lh(!1,!0)},z0={get:Lh(!0,!1)};const Iy=new WeakMap,Sy=new WeakMap,Ay=new WeakMap,W0=new WeakMap;function G0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function K0(t){return t.__v_skip||!Object.isExtensible(t)?0:G0(_0(t))}function Un(t){return Hr(t)?t:Fh(t,!1,F0,q0,Iy)}function Py(t){return Fh(t,!1,U0,H0,Sy)}function Cy(t){return Fh(t,!0,$0,z0,Ay)}function Fh(t,e,n,r,s){if(!Ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=K0(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Lr(t){return Hr(t)?Lr(t.__v_raw):!!(t&&t.__v_isReactive)}function Hr(t){return!!(t&&t.__v_isReadonly)}function un(t){return!!(t&&t.__v_isShallow)}function $h(t){return t?!!t.__v_raw:!1}function Ue(t){const e=t&&t.__v_raw;return e?Ue(e):t}function Uh(t){return!He(t,"__v_skip")&&Object.isExtensible(t)&&Eu(t,"__v_skip",!0),t}const Pt=t=>Ye(t)?Un(t):t,ol=t=>Ye(t)?Cy(t):t;function ct(t){return t?t.__v_isRef===!0:!1}function Ie(t){return Ry(t,!1)}function Y0(t){return Ry(t,!0)}function Ry(t,e){return ct(t)?t:new Q0(t,e)}class Q0{constructor(e,n){this.dep=new Mh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ue(e),this._value=n?e:Pt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||un(e)||Hr(e);e=r?e:Ue(e),Mr(e,n)&&(this._rawValue=e,this._value=r?e:Pt(e),this.dep.trigger())}}function y(t){return ct(t)?t.value:t}const X0={get:(t,e,n)=>e==="__v_raw"?t:y(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ct(s)&&!ct(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Dy(t){return Lr(t)?t:new Proxy(t,X0)}function J0(t){const e=me(t)?new Array(t.length):{};for(const n in t)e[n]=eE(t,n);return e}class Z0{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return O0(Ue(this._object),this._key)}}function eE(t,e,n){const r=t[e];return ct(r)?r:new Z0(t,e,n)}class tE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Mh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=To-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Qe!==this)return my(this,!0),!0}get value(){const e=this.dep.track();return _y(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function nE(t,e,n=!1){let r,s;return Re(t)?r=t:(r=t.get,s=t.set),new tE(r,s,n)}const Ra={},al=new WeakMap;let ps;function rE(t,e=!1,n=ps){if(n){let r=al.get(n);r||al.set(n,r=[]),r.push(t)}}function sE(t,e,n=Ke){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=U=>s?U:un(U)||s===!1||s===0?Qn(U,1):Qn(U);let h,m,p,_,D=!1,I=!1;if(ct(t)?(m=()=>t.value,D=un(t)):Lr(t)?(m=()=>u(t),D=!0):me(t)?(I=!0,D=t.some(U=>Lr(U)||un(U)),m=()=>t.map(U=>{if(ct(U))return U.value;if(Lr(U))return u(U);if(Re(U))return l?l(U,2):U()})):Re(t)?e?m=l?()=>l(t,2):t:m=()=>{if(p){sr();try{p()}finally{ir()}}const U=ps;ps=h;try{return l?l(t,3,[_]):t(_)}finally{ps=U}}:m=On,e&&s){const U=m,Y=s===!0?1/0:s;m=()=>Qn(U(),Y)}const w=dy(),k=()=>{h.stop(),w&&w.active&&Dh(w.effects,h)};if(i&&e){const U=e;e=(...Y)=>{U(...Y),k()}}let x=I?new Array(t.length).fill(Ra):Ra;const L=U=>{if(!(!(h.flags&1)||!h.dirty&&!U))if(e){const Y=h.run();if(s||D||(I?Y.some((X,C)=>Mr(X,x[C])):Mr(Y,x))){p&&p();const X=ps;ps=h;try{const C=[Y,x===Ra?void 0:I&&x[0]===Ra?[]:x,_];x=Y,l?l(e,3,C):e(...C)}finally{ps=X}}}else h.run()};return c&&c(L),h=new fy(m),h.scheduler=o?()=>o(L,!1):L,_=U=>rE(U,!1,h),p=h.onStop=()=>{const U=al.get(h);if(U){if(l)l(U,4);else for(const Y of U)Y();al.delete(h)}},e?r?L(!0):x=h.run():o?o(L.bind(null,!0),!0):h.run(),k.pause=h.pause.bind(h),k.resume=h.resume.bind(h),k.stop=k,k}function Qn(t,e=1/0,n){if(e<=0||!Ye(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ct(t))Qn(t.value,e,n);else if(me(t))for(let r=0;r<t.length;r++)Qn(t[r],e,n);else if(Ei(t)||ti(t))t.forEach(r=>{Qn(r,e,n)});else if(iy(t)){for(const r in t)Qn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Qn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wo(t,e,n,r){try{return r?t(...r):t()}catch(s){ql(s,e,n)}}function bn(t,e,n,r){if(Re(t)){const s=Wo(t,e,n,r);return s&&ry(s)&&s.catch(i=>{ql(i,e,n)}),s}if(me(t)){const s=[];for(let i=0;i<t.length;i++)s.push(bn(t[i],e,n,r));return s}}function ql(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ke;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const h=c.ec;if(h){for(let m=0;m<h.length;m++)if(h[m](t,l,u)===!1)return}c=c.parent}if(i){sr(),Wo(i,null,10,[t,l,u]),ir();return}}iE(t,n,s,r,o)}function iE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const zt=[];let Pn=-1;const ni=[];let Ar=null,Ws=0;const ky=Promise.resolve();let ll=null;function Hl(t){const e=ll||ky;return t?e.then(this?t.bind(this):t):e}function oE(t){let e=Pn+1,n=zt.length;for(;e<n;){const r=e+n>>>1,s=zt[r],i=So(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Bh(t){if(!(t.flags&1)){const e=So(t),n=zt[zt.length-1];!n||!(t.flags&2)&&e>=So(n)?zt.push(t):zt.splice(oE(e),0,t),t.flags|=1,Oy()}}function Oy(){ll||(ll=ky.then(xy))}function aE(t){me(t)?ni.push(...t):Ar&&t.id===-1?Ar.splice(Ws+1,0,t):t.flags&1||(ni.push(t),t.flags|=1),Oy()}function Jf(t,e,n=Pn+1){for(;n<zt.length;n++){const r=zt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;zt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ny(t){if(ni.length){const e=[...new Set(ni)].sort((n,r)=>So(n)-So(r));if(ni.length=0,Ar){Ar.push(...e);return}for(Ar=e,Ws=0;Ws<Ar.length;Ws++){const n=Ar[Ws];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ar=null,Ws=0}}const So=t=>t.id==null?t.flags&2?-1:1/0:t.id;function xy(t){try{for(Pn=0;Pn<zt.length;Pn++){const e=zt[Pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Wo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Pn<zt.length;Pn++){const e=zt[Pn];e&&(e.flags&=-2)}Pn=-1,zt.length=0,Ny(),ll=null,(zt.length||ni.length)&&xy()}}let Xt=null,Vy=null;function cl(t){const e=Xt;return Xt=t,Vy=t&&t.type.__scopeId||null,e}function ns(t,e=Xt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&lp(-1);const i=cl(e);let o;try{o=t(...s)}finally{cl(i),r._d&&lp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function le(t,e){if(Xt===null)return t;const n=Yl(Xt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ke]=e[s];i&&(Re(i)&&(i={mounted:i,updated:i}),i.deep&&Qn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function us(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(sr(),bn(l,n,8,[t.el,c,t,e]),ir())}}const lE=Symbol("_vte"),My=t=>t.__isTeleport,Pr=Symbol("_leaveCb"),Da=Symbol("_enterCb");function cE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qh(()=>{t.isMounted=!0}),Hy(()=>{t.isUnmounting=!0}),t}const an=[Function,Array],Ly={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:an,onEnter:an,onAfterEnter:an,onEnterCancelled:an,onBeforeLeave:an,onLeave:an,onAfterLeave:an,onLeaveCancelled:an,onBeforeAppear:an,onAppear:an,onAfterAppear:an,onAppearCancelled:an},Fy=t=>{const e=t.subTree;return e.component?Fy(e.component):e},uE={name:"BaseTransition",props:Ly,setup(t,{slots:e}){const n=iw(),r=cE();return()=>{const s=e.default&&By(e.default(),!0);if(!s||!s.length)return;const i=$y(s),o=Ue(t),{mode:c}=o;if(r.isLeaving)return Gc(i);const l=Zf(i);if(!l)return Gc(i);let u=Su(l,o,r,n,m=>u=m);l.type!==Wt&&Ao(l,u);let h=n.subTree&&Zf(n.subTree);if(h&&h.type!==Wt&&!gs(l,h)&&Fy(n).type!==Wt){let m=Su(h,o,r,n);if(Ao(h,m),c==="out-in"&&l.type!==Wt)return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete m.afterLeave,h=void 0},Gc(i);c==="in-out"&&l.type!==Wt?m.delayLeave=(p,_,D)=>{const I=Uy(r,h);I[String(h.key)]=h,p[Pr]=()=>{_(),p[Pr]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{D(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function $y(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Wt){e=n;break}}return e}const hE=uE;function Uy(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Su(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:m,onBeforeLeave:p,onLeave:_,onAfterLeave:D,onLeaveCancelled:I,onBeforeAppear:w,onAppear:k,onAfterAppear:x,onAppearCancelled:L}=e,U=String(t.key),Y=Uy(n,t),X=(E,P)=>{E&&bn(E,r,9,P)},C=(E,P)=>{const N=P[1];X(E,P),me(E)?E.every(R=>R.length<=1)&&N():E.length<=1&&N()},b={mode:o,persisted:c,beforeEnter(E){let P=l;if(!n.isMounted)if(i)P=w||l;else return;E[Pr]&&E[Pr](!0);const N=Y[U];N&&gs(t,N)&&N.el[Pr]&&N.el[Pr](),X(P,[E])},enter(E){let P=u,N=h,R=m;if(!n.isMounted)if(i)P=k||u,N=x||h,R=L||m;else return;let S=!1;const Ne=E[Da]=we=>{S||(S=!0,we?X(R,[E]):X(N,[E]),b.delayedLeave&&b.delayedLeave(),E[Da]=void 0)};P?C(P,[E,Ne]):Ne()},leave(E,P){const N=String(t.key);if(E[Da]&&E[Da](!0),n.isUnmounting)return P();X(p,[E]);let R=!1;const S=E[Pr]=Ne=>{R||(R=!0,P(),Ne?X(I,[E]):X(D,[E]),E[Pr]=void 0,Y[N]===t&&delete Y[N])};Y[N]=t,_?C(_,[E,S]):S()},clone(E){const P=Su(E,e,n,r,s);return s&&s(P),P}};return b}function Gc(t){if(zl(t))return t=zr(t),t.children=null,t}function Zf(t){if(!zl(t))return My(t.type)&&t.children?$y(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Re(n.default))return n.default()}}function Ao(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ao(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function By(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ze?(o.patchFlag&128&&s++,r=r.concat(By(o.children,e,c))):(e||o.type!==Wt)&&r.push(c!=null?zr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function jh(t,e){return Re(t)?bt({name:t.name},e,{setup:t}):t}function jy(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ao(t,e,n,r,s=!1){if(me(t)){t.forEach((D,I)=>ao(D,e&&(me(e)?e[I]:e),n,r,s));return}if(lo(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ao(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Yl(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,h=c.refs===Ke?c.refs={}:c.refs,m=c.setupState,p=Ue(m),_=m===Ke?()=>!1:D=>He(p,D);if(u!=null&&u!==l&&(ut(u)?(h[u]=null,_(u)&&(m[u]=null)):ct(u)&&(u.value=null)),Re(l))Wo(l,c,12,[o,h]);else{const D=ut(l),I=ct(l);if(D||I){const w=()=>{if(t.f){const k=D?_(l)?m[l]:h[l]:l.value;s?me(k)&&Dh(k,i):me(k)?k.includes(i)||k.push(i):D?(h[l]=[i],_(l)&&(m[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else D?(h[l]=o,_(l)&&(m[l]=o)):I&&(l.value=o,t.k&&(h[t.k]=o))};o?(w.id=-1,Zt(w,n)):w()}}}Ul().requestIdleCallback;Ul().cancelIdleCallback;const lo=t=>!!t.type.__asyncLoader,zl=t=>t.type.__isKeepAlive;function dE(t,e){qy(t,"a",e)}function fE(t,e){qy(t,"da",e)}function qy(t,e,n=Ct){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Wl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)zl(s.parent.vnode)&&pE(r,e,n,s),s=s.parent}}function pE(t,e,n,r){const s=Wl(e,t,r,!0);zy(()=>{Dh(r[e],s)},n)}function Wl(t,e,n=Ct,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{sr();const c=Go(n),l=bn(e,n,t,o);return c(),ir(),l});return r?s.unshift(i):s.push(i),i}}const dr=t=>(e,n=Ct)=>{(!Co||t==="sp")&&Wl(t,(...r)=>e(...r),n)},mE=dr("bm"),qh=dr("m"),gE=dr("bu"),yE=dr("u"),Hy=dr("bum"),zy=dr("um"),_E=dr("sp"),vE=dr("rtg"),bE=dr("rtc");function EE(t,e=Ct){Wl("ec",t,e)}const wE=Symbol.for("v-ndc");function hn(t,e,n,r){let s;const i=n,o=me(t);if(o||ut(t)){const c=o&&Lr(t);let l=!1,u=!1;c&&(l=!un(t),u=Hr(t),t=jl(t)),s=new Array(t.length);for(let h=0,m=t.length;h<m;h++)s[h]=e(l?u?ol(Pt(t[h])):Pt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ye(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const h=c[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}const Au=t=>t?d_(t)?Yl(t):Au(t.parent):null,co=bt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Au(t.parent),$root:t=>Au(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Gy(t),$forceUpdate:t=>t.f||(t.f=()=>{Bh(t.update)}),$nextTick:t=>t.n||(t.n=Hl.bind(t.proxy)),$watch:t=>HE.bind(t)}),Kc=(t,e)=>t!==Ke&&!t.__isScriptSetup&&He(t,e),TE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Kc(r,e))return o[e]=1,r[e];if(s!==Ke&&He(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&He(u,e))return o[e]=3,i[e];if(n!==Ke&&He(n,e))return o[e]=4,n[e];Pu&&(o[e]=0)}}const h=co[e];let m,p;if(h)return e==="$attrs"&&Ft(t.attrs,"get",""),h(t);if((m=c.__cssModules)&&(m=m[e]))return m;if(n!==Ke&&He(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,He(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Kc(s,e)?(s[e]=n,!0):r!==Ke&&He(r,e)?(r[e]=n,!0):He(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Ke&&He(t,o)||Kc(e,o)||(c=i[0])&&He(c,o)||He(r,o)||He(co,o)||He(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:He(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ep(t){return me(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Pu=!0;function IE(t){const e=Gy(t),n=t.proxy,r=t.ctx;Pu=!1,e.beforeCreate&&tp(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:h,beforeMount:m,mounted:p,beforeUpdate:_,updated:D,activated:I,deactivated:w,beforeDestroy:k,beforeUnmount:x,destroyed:L,unmounted:U,render:Y,renderTracked:X,renderTriggered:C,errorCaptured:b,serverPrefetch:E,expose:P,inheritAttrs:N,components:R,directives:S,filters:Ne}=e;if(u&&SE(u,r,null),o)for(const F in o){const ee=o[F];Re(ee)&&(r[F]=ee.bind(n))}if(s){const F=s.call(n,n);Ye(F)&&(t.data=Un(F))}if(Pu=!0,i)for(const F in i){const ee=i[F],st=Re(ee)?ee.bind(n,n):Re(ee.get)?ee.get.bind(n,n):On,pt=!Re(ee)&&Re(ee.set)?ee.set.bind(n):On,kt=Ce({get:st,set:pt});Object.defineProperty(r,F,{enumerable:!0,configurable:!0,get:()=>kt.value,set:Me=>kt.value=Me})}if(c)for(const F in c)Wy(c[F],r,n,F);if(l){const F=Re(l)?l.call(n):l;Reflect.ownKeys(F).forEach(ee=>{xr(ee,F[ee])})}h&&tp(h,t,"c");function Z(F,ee){me(ee)?ee.forEach(st=>F(st.bind(n))):ee&&F(ee.bind(n))}if(Z(mE,m),Z(qh,p),Z(gE,_),Z(yE,D),Z(dE,I),Z(fE,w),Z(EE,b),Z(bE,X),Z(vE,C),Z(Hy,x),Z(zy,U),Z(_E,E),me(P))if(P.length){const F=t.exposed||(t.exposed={});P.forEach(ee=>{Object.defineProperty(F,ee,{get:()=>n[ee],set:st=>n[ee]=st})})}else t.exposed||(t.exposed={});Y&&t.render===On&&(t.render=Y),N!=null&&(t.inheritAttrs=N),R&&(t.components=R),S&&(t.directives=S),E&&jy(t)}function SE(t,e,n=On){me(t)&&(t=Cu(t));for(const r in t){const s=t[r];let i;Ye(s)?"default"in s?i=$e(s.from||r,s.default,!0):i=$e(s.from||r):i=$e(s),ct(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function tp(t,e,n){bn(me(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Wy(t,e,n,r){let s=r.includes(".")?o_(n,r):()=>n[r];if(ut(t)){const i=e[t];Re(i)&&et(s,i)}else if(Re(t))et(s,t.bind(n));else if(Ye(t))if(me(t))t.forEach(i=>Wy(i,e,n,r));else{const i=Re(t.handler)?t.handler.bind(n):e[t.handler];Re(i)&&et(s,i,t)}}function Gy(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>ul(l,u,o,!0)),ul(l,e,o)),Ye(e)&&i.set(e,l),l}function ul(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ul(t,i,n,!0),s&&s.forEach(o=>ul(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=AE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const AE={data:np,props:rp,emits:rp,methods:Yi,computed:Yi,beforeCreate:Ht,created:Ht,beforeMount:Ht,mounted:Ht,beforeUpdate:Ht,updated:Ht,beforeDestroy:Ht,beforeUnmount:Ht,destroyed:Ht,unmounted:Ht,activated:Ht,deactivated:Ht,errorCaptured:Ht,serverPrefetch:Ht,components:Yi,directives:Yi,watch:CE,provide:np,inject:PE};function np(t,e){return e?t?function(){return bt(Re(t)?t.call(this,this):t,Re(e)?e.call(this,this):e)}:e:t}function PE(t,e){return Yi(Cu(t),Cu(e))}function Cu(t){if(me(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ht(t,e){return t?[...new Set([].concat(t,e))]:e}function Yi(t,e){return t?bt(Object.create(null),t,e):e}function rp(t,e){return t?me(t)&&me(e)?[...new Set([...t,...e])]:bt(Object.create(null),ep(t),ep(e??{})):e}function CE(t,e){if(!t)return e;if(!e)return t;const n=bt(Object.create(null),t);for(const r in e)n[r]=Ht(t[r],e[r]);return n}function Ky(){return{app:null,config:{isNativeTag:g0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let RE=0;function DE(t,e){return function(r,s=null){Re(r)||(r=bt({},r)),s!=null&&!Ye(s)&&(s=null);const i=Ky(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:RE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:hw,get config(){return i.config},set config(h){},use(h,...m){return o.has(h)||(h&&Re(h.install)?(o.add(h),h.install(u,...m)):Re(h)&&(o.add(h),h(u,...m))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,m){return m?(i.components[h]=m,u):i.components[h]},directive(h,m){return m?(i.directives[h]=m,u):i.directives[h]},mount(h,m,p){if(!l){const _=u._ceVNode||Ae(r,s);return _.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(_,h,p),l=!0,u._container=h,h.__vue_app__=u,Yl(_.component)}},onUnmount(h){c.push(h)},unmount(){l&&(bn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,m){return i.provides[h]=m,u},runWithContext(h){const m=Es;Es=u;try{return h()}finally{Es=m}}};return u}}let Es=null;function xr(t,e){if(Ct){let n=Ct.provides;const r=Ct.parent&&Ct.parent.provides;r===n&&(n=Ct.provides=Object.create(r)),n[t]=e}}function $e(t,e,n=!1){const r=Ct||Xt;if(r||Es){let s=Es?Es._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Re(e)?e.call(r&&r.proxy):e}}function kE(){return!!(Ct||Xt||Es)}const Yy={},Qy=()=>Object.create(Yy),Xy=t=>Object.getPrototypeOf(t)===Yy;function OE(t,e,n,r=!1){const s={},i=Qy();t.propsDefaults=Object.create(null),Jy(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Py(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function NE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ue(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let m=0;m<h.length;m++){let p=h[m];if(Gl(t.emitsOptions,p))continue;const _=e[p];if(l)if(He(i,p))_!==i[p]&&(i[p]=_,u=!0);else{const D=qr(p);s[D]=Ru(l,c,D,_,t,!1)}else _!==i[p]&&(i[p]=_,u=!0)}}}else{Jy(t,e,s,i)&&(u=!0);let h;for(const m in c)(!e||!He(e,m)&&((h=Os(m))===m||!He(e,h)))&&(l?n&&(n[m]!==void 0||n[h]!==void 0)&&(s[m]=Ru(l,c,m,void 0,t,!0)):delete s[m]);if(i!==c)for(const m in i)(!e||!He(e,m))&&(delete i[m],u=!0)}u&&Yn(t.attrs,"set","")}function Jy(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(so(l))continue;const u=e[l];let h;s&&He(s,h=qr(l))?!i||!i.includes(h)?n[h]=u:(c||(c={}))[h]=u:Gl(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ue(n),u=c||Ke;for(let h=0;h<i.length;h++){const m=i[h];n[m]=Ru(s,l,m,u[m],t,!He(u,m))}}return o}function Ru(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=He(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Re(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=Go(s);r=u[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Os(n))&&(r=!0))}return r}const xE=new WeakMap;function Zy(t,e,n=!1){const r=n?xE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!Re(t)){const h=m=>{l=!0;const[p,_]=Zy(m,e,!0);bt(o,p),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Ye(t)&&r.set(t,ei),ei;if(me(i))for(let h=0;h<i.length;h++){const m=qr(i[h]);sp(m)&&(o[m]=Ke)}else if(i)for(const h in i){const m=qr(h);if(sp(m)){const p=i[h],_=o[m]=me(p)||Re(p)?{type:p}:bt({},p),D=_.type;let I=!1,w=!0;if(me(D))for(let k=0;k<D.length;++k){const x=D[k],L=Re(x)&&x.name;if(L==="Boolean"){I=!0;break}else L==="String"&&(w=!1)}else I=Re(D)&&D.name==="Boolean";_[0]=I,_[1]=w,(I||He(_,"default"))&&c.push(m)}}const u=[o,c];return Ye(t)&&r.set(t,u),u}function sp(t){return t[0]!=="$"&&!so(t)}const Hh=t=>t[0]==="_"||t==="$stable",zh=t=>me(t)?t.map(Rn):[Rn(t)],VE=(t,e,n)=>{if(e._n)return e;const r=ns((...s)=>zh(e(...s)),n);return r._c=!1,r},e_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Hh(s))continue;const i=t[s];if(Re(i))e[s]=VE(s,i,r);else if(i!=null){const o=zh(i);e[s]=()=>o}}},t_=(t,e)=>{const n=zh(e);t.slots.default=()=>n},n_=(t,e,n)=>{for(const r in e)(n||!Hh(r))&&(t[r]=e[r])},ME=(t,e,n)=>{const r=t.slots=Qy();if(t.vnode.shapeFlag&32){const s=e.__;s&&Eu(r,"__",s,!0);const i=e._;i?(n_(r,e,n),n&&Eu(r,"_",i,!0)):e_(e,r)}else e&&t_(t,e)},LE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ke;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:n_(s,e,n):(i=!e.$stable,e_(e,s)),o=e}else e&&(t_(t,e),o={default:1});if(i)for(const c in s)!Hh(c)&&o[c]==null&&delete s[c]},Zt=XE;function FE(t){return $E(t)}function $E(t,e){const n=Ul();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:h,parentNode:m,nextSibling:p,setScopeId:_=On,insertStaticContent:D}=t,I=(A,O,V,H=null,K=null,z=null,oe=void 0,ne=null,te=!!O.dynamicChildren)=>{if(A===O)return;A&&!gs(A,O)&&(H=j(A),Me(A,K,z,!0),A=null),O.patchFlag===-2&&(te=!1,O.dynamicChildren=null);const{type:Q,ref:pe,shapeFlag:ie}=O;switch(Q){case Kl:w(A,O,V,H);break;case Wt:k(A,O,V,H);break;case qa:A==null&&x(O,V,H,oe);break;case Ze:R(A,O,V,H,K,z,oe,ne,te);break;default:ie&1?Y(A,O,V,H,K,z,oe,ne,te):ie&6?S(A,O,V,H,K,z,oe,ne,te):(ie&64||ie&128)&&Q.process(A,O,V,H,K,z,oe,ne,te,he)}pe!=null&&K?ao(pe,A&&A.ref,z,O||A,!O):pe==null&&A&&A.ref!=null&&ao(A.ref,null,z,A,!0)},w=(A,O,V,H)=>{if(A==null)r(O.el=c(O.children),V,H);else{const K=O.el=A.el;O.children!==A.children&&u(K,O.children)}},k=(A,O,V,H)=>{A==null?r(O.el=l(O.children||""),V,H):O.el=A.el},x=(A,O,V,H)=>{[A.el,A.anchor]=D(A.children,O,V,H,A.el,A.anchor)},L=({el:A,anchor:O},V,H)=>{let K;for(;A&&A!==O;)K=p(A),r(A,V,H),A=K;r(O,V,H)},U=({el:A,anchor:O})=>{let V;for(;A&&A!==O;)V=p(A),s(A),A=V;s(O)},Y=(A,O,V,H,K,z,oe,ne,te)=>{O.type==="svg"?oe="svg":O.type==="math"&&(oe="mathml"),A==null?X(O,V,H,K,z,oe,ne,te):E(A,O,K,z,oe,ne,te)},X=(A,O,V,H,K,z,oe,ne)=>{let te,Q;const{props:pe,shapeFlag:ie,transition:de,dirs:Ee}=A;if(te=A.el=o(A.type,z,pe&&pe.is,pe),ie&8?h(te,A.children):ie&16&&b(A.children,te,null,H,K,Yc(A,z),oe,ne),Ee&&us(A,null,H,"created"),C(te,A,A.scopeId,oe,H),pe){for(const De in pe)De!=="value"&&!so(De)&&i(te,De,null,pe[De],z,H);"value"in pe&&i(te,"value",null,pe.value,z),(Q=pe.onVnodeBeforeMount)&&Sn(Q,H,A)}Ee&&us(A,null,H,"beforeMount");const ye=UE(K,de);ye&&de.beforeEnter(te),r(te,O,V),((Q=pe&&pe.onVnodeMounted)||ye||Ee)&&Zt(()=>{Q&&Sn(Q,H,A),ye&&de.enter(te),Ee&&us(A,null,H,"mounted")},K)},C=(A,O,V,H,K)=>{if(V&&_(A,V),H)for(let z=0;z<H.length;z++)_(A,H[z]);if(K){let z=K.subTree;if(O===z||l_(z.type)&&(z.ssContent===O||z.ssFallback===O)){const oe=K.vnode;C(A,oe,oe.scopeId,oe.slotScopeIds,K.parent)}}},b=(A,O,V,H,K,z,oe,ne,te=0)=>{for(let Q=te;Q<A.length;Q++){const pe=A[Q]=ne?Cr(A[Q]):Rn(A[Q]);I(null,pe,O,V,H,K,z,oe,ne)}},E=(A,O,V,H,K,z,oe)=>{const ne=O.el=A.el;let{patchFlag:te,dynamicChildren:Q,dirs:pe}=O;te|=A.patchFlag&16;const ie=A.props||Ke,de=O.props||Ke;let Ee;if(V&&hs(V,!1),(Ee=de.onVnodeBeforeUpdate)&&Sn(Ee,V,O,A),pe&&us(O,A,V,"beforeUpdate"),V&&hs(V,!0),(ie.innerHTML&&de.innerHTML==null||ie.textContent&&de.textContent==null)&&h(ne,""),Q?P(A.dynamicChildren,Q,ne,V,H,Yc(O,K),z):oe||ee(A,O,ne,null,V,H,Yc(O,K),z,!1),te>0){if(te&16)N(ne,ie,de,V,K);else if(te&2&&ie.class!==de.class&&i(ne,"class",null,de.class,K),te&4&&i(ne,"style",ie.style,de.style,K),te&8){const ye=O.dynamicProps;for(let De=0;De<ye.length;De++){const Le=ye[De],wt=ie[Le],Tt=de[Le];(Tt!==wt||Le==="value")&&i(ne,Le,wt,Tt,K,V)}}te&1&&A.children!==O.children&&h(ne,O.children)}else!oe&&Q==null&&N(ne,ie,de,V,K);((Ee=de.onVnodeUpdated)||pe)&&Zt(()=>{Ee&&Sn(Ee,V,O,A),pe&&us(O,A,V,"updated")},H)},P=(A,O,V,H,K,z,oe)=>{for(let ne=0;ne<O.length;ne++){const te=A[ne],Q=O[ne],pe=te.el&&(te.type===Ze||!gs(te,Q)||te.shapeFlag&198)?m(te.el):V;I(te,Q,pe,null,H,K,z,oe,!0)}},N=(A,O,V,H,K)=>{if(O!==V){if(O!==Ke)for(const z in O)!so(z)&&!(z in V)&&i(A,z,O[z],null,K,H);for(const z in V){if(so(z))continue;const oe=V[z],ne=O[z];oe!==ne&&z!=="value"&&i(A,z,ne,oe,K,H)}"value"in V&&i(A,"value",O.value,V.value,K)}},R=(A,O,V,H,K,z,oe,ne,te)=>{const Q=O.el=A?A.el:c(""),pe=O.anchor=A?A.anchor:c("");let{patchFlag:ie,dynamicChildren:de,slotScopeIds:Ee}=O;Ee&&(ne=ne?ne.concat(Ee):Ee),A==null?(r(Q,V,H),r(pe,V,H),b(O.children||[],V,pe,K,z,oe,ne,te)):ie>0&&ie&64&&de&&A.dynamicChildren?(P(A.dynamicChildren,de,V,K,z,oe,ne),(O.key!=null||K&&O===K.subTree)&&r_(A,O,!0)):ee(A,O,V,pe,K,z,oe,ne,te)},S=(A,O,V,H,K,z,oe,ne,te)=>{O.slotScopeIds=ne,A==null?O.shapeFlag&512?K.ctx.activate(O,V,H,oe,te):Ne(O,V,H,K,z,oe,te):we(A,O,te)},Ne=(A,O,V,H,K,z,oe)=>{const ne=A.component=sw(A,H,K);if(zl(A)&&(ne.ctx.renderer=he),ow(ne,!1,oe),ne.asyncDep){if(K&&K.registerDep(ne,Z,oe),!A.el){const te=ne.subTree=Ae(Wt);k(null,te,O,V)}}else Z(ne,A,O,V,K,z,oe)},we=(A,O,V)=>{const H=O.component=A.component;if(YE(A,O,V))if(H.asyncDep&&!H.asyncResolved){F(H,O,V);return}else H.next=O,H.update();else O.el=A.el,H.vnode=O},Z=(A,O,V,H,K,z,oe)=>{const ne=()=>{if(A.isMounted){let{next:ie,bu:de,u:Ee,parent:ye,vnode:De}=A;{const Ot=s_(A);if(Ot){ie&&(ie.el=De.el,F(A,ie,oe)),Ot.asyncDep.then(()=>{A.isUnmounted||ne()});return}}let Le=ie,wt;hs(A,!1),ie?(ie.el=De.el,F(A,ie,oe)):ie=De,de&&ja(de),(wt=ie.props&&ie.props.onVnodeBeforeUpdate)&&Sn(wt,ye,ie,De),hs(A,!0);const Tt=op(A),sn=A.subTree;A.subTree=Tt,I(sn,Tt,m(sn.el),j(sn),A,K,z),ie.el=Tt.el,Le===null&&QE(A,Tt.el),Ee&&Zt(Ee,K),(wt=ie.props&&ie.props.onVnodeUpdated)&&Zt(()=>Sn(wt,ye,ie,De),K)}else{let ie;const{el:de,props:Ee}=O,{bm:ye,m:De,parent:Le,root:wt,type:Tt}=A,sn=lo(O);hs(A,!1),ye&&ja(ye),!sn&&(ie=Ee&&Ee.onVnodeBeforeMount)&&Sn(ie,Le,O),hs(A,!0);{wt.ce&&wt.ce._def.shadowRoot!==!1&&wt.ce._injectChildStyle(Tt);const Ot=A.subTree=op(A);I(null,Ot,V,H,A,K,z),O.el=Ot.el}if(De&&Zt(De,K),!sn&&(ie=Ee&&Ee.onVnodeMounted)){const Ot=O;Zt(()=>Sn(ie,Le,Ot),K)}(O.shapeFlag&256||Le&&lo(Le.vnode)&&Le.vnode.shapeFlag&256)&&A.a&&Zt(A.a,K),A.isMounted=!0,O=V=H=null}};A.scope.on();const te=A.effect=new fy(ne);A.scope.off();const Q=A.update=te.run.bind(te),pe=A.job=te.runIfDirty.bind(te);pe.i=A,pe.id=A.uid,te.scheduler=()=>Bh(pe),hs(A,!0),Q()},F=(A,O,V)=>{O.component=A;const H=A.vnode.props;A.vnode=O,A.next=null,NE(A,O.props,H,V),LE(A,O.children,V),sr(),Jf(A),ir()},ee=(A,O,V,H,K,z,oe,ne,te=!1)=>{const Q=A&&A.children,pe=A?A.shapeFlag:0,ie=O.children,{patchFlag:de,shapeFlag:Ee}=O;if(de>0){if(de&128){pt(Q,ie,V,H,K,z,oe,ne,te);return}else if(de&256){st(Q,ie,V,H,K,z,oe,ne,te);return}}Ee&8?(pe&16&&jt(Q,K,z),ie!==Q&&h(V,ie)):pe&16?Ee&16?pt(Q,ie,V,H,K,z,oe,ne,te):jt(Q,K,z,!0):(pe&8&&h(V,""),Ee&16&&b(ie,V,H,K,z,oe,ne,te))},st=(A,O,V,H,K,z,oe,ne,te)=>{A=A||ei,O=O||ei;const Q=A.length,pe=O.length,ie=Math.min(Q,pe);let de;for(de=0;de<ie;de++){const Ee=O[de]=te?Cr(O[de]):Rn(O[de]);I(A[de],Ee,V,null,K,z,oe,ne,te)}Q>pe?jt(A,K,z,!0,!1,ie):b(O,V,H,K,z,oe,ne,te,ie)},pt=(A,O,V,H,K,z,oe,ne,te)=>{let Q=0;const pe=O.length;let ie=A.length-1,de=pe-1;for(;Q<=ie&&Q<=de;){const Ee=A[Q],ye=O[Q]=te?Cr(O[Q]):Rn(O[Q]);if(gs(Ee,ye))I(Ee,ye,V,null,K,z,oe,ne,te);else break;Q++}for(;Q<=ie&&Q<=de;){const Ee=A[ie],ye=O[de]=te?Cr(O[de]):Rn(O[de]);if(gs(Ee,ye))I(Ee,ye,V,null,K,z,oe,ne,te);else break;ie--,de--}if(Q>ie){if(Q<=de){const Ee=de+1,ye=Ee<pe?O[Ee].el:H;for(;Q<=de;)I(null,O[Q]=te?Cr(O[Q]):Rn(O[Q]),V,ye,K,z,oe,ne,te),Q++}}else if(Q>de)for(;Q<=ie;)Me(A[Q],K,z,!0),Q++;else{const Ee=Q,ye=Q,De=new Map;for(Q=ye;Q<=de;Q++){const It=O[Q]=te?Cr(O[Q]):Rn(O[Q]);It.key!=null&&De.set(It.key,Q)}let Le,wt=0;const Tt=de-ye+1;let sn=!1,Ot=0;const yr=new Array(Tt);for(Q=0;Q<Tt;Q++)yr[Q]=0;for(Q=Ee;Q<=ie;Q++){const It=A[Q];if(wt>=Tt){Me(It,K,z,!0);continue}let on;if(It.key!=null)on=De.get(It.key);else for(Le=ye;Le<=de;Le++)if(yr[Le-ye]===0&&gs(It,O[Le])){on=Le;break}on===void 0?Me(It,K,z,!0):(yr[on-ye]=Q+1,on>=Ot?Ot=on:sn=!0,I(It,O[on],V,null,K,z,oe,ne,te),wt++)}const Oi=sn?BE(yr):ei;for(Le=Oi.length-1,Q=Tt-1;Q>=0;Q--){const It=ye+Q,on=O[It],ha=It+1<pe?O[It+1].el:H;yr[Q]===0?I(null,on,V,ha,K,z,oe,ne,te):sn&&(Le<0||Q!==Oi[Le]?kt(on,V,ha,2):Le--)}}},kt=(A,O,V,H,K=null)=>{const{el:z,type:oe,transition:ne,children:te,shapeFlag:Q}=A;if(Q&6){kt(A.component.subTree,O,V,H);return}if(Q&128){A.suspense.move(O,V,H);return}if(Q&64){oe.move(A,O,V,he);return}if(oe===Ze){r(z,O,V);for(let ie=0;ie<te.length;ie++)kt(te[ie],O,V,H);r(A.anchor,O,V);return}if(oe===qa){L(A,O,V);return}if(H!==2&&Q&1&&ne)if(H===0)ne.beforeEnter(z),r(z,O,V),Zt(()=>ne.enter(z),K);else{const{leave:ie,delayLeave:de,afterLeave:Ee}=ne,ye=()=>{A.ctx.isUnmounted?s(z):r(z,O,V)},De=()=>{ie(z,()=>{ye(),Ee&&Ee()})};de?de(z,ye,De):De()}else r(z,O,V)},Me=(A,O,V,H=!1,K=!1)=>{const{type:z,props:oe,ref:ne,children:te,dynamicChildren:Q,shapeFlag:pe,patchFlag:ie,dirs:de,cacheIndex:Ee}=A;if(ie===-2&&(K=!1),ne!=null&&(sr(),ao(ne,null,V,A,!0),ir()),Ee!=null&&(O.renderCache[Ee]=void 0),pe&256){O.ctx.deactivate(A);return}const ye=pe&1&&de,De=!lo(A);let Le;if(De&&(Le=oe&&oe.onVnodeBeforeUnmount)&&Sn(Le,O,A),pe&6)mn(A.component,V,H);else{if(pe&128){A.suspense.unmount(V,H);return}ye&&us(A,null,O,"beforeUnmount"),pe&64?A.type.remove(A,O,V,he,H):Q&&!Q.hasOnce&&(z!==Ze||ie>0&&ie&64)?jt(Q,O,V,!1,!0):(z===Ze&&ie&384||!K&&pe&16)&&jt(te,O,V),H&&We(A)}(De&&(Le=oe&&oe.onVnodeUnmounted)||ye)&&Zt(()=>{Le&&Sn(Le,O,A),ye&&us(A,null,O,"unmounted")},V)},We=A=>{const{type:O,el:V,anchor:H,transition:K}=A;if(O===Ze){pn(V,H);return}if(O===qa){U(A);return}const z=()=>{s(V),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(A.shapeFlag&1&&K&&!K.persisted){const{leave:oe,delayLeave:ne}=K,te=()=>oe(V,z);ne?ne(A.el,z,te):te()}else z()},pn=(A,O)=>{let V;for(;A!==O;)V=p(A),s(A),A=V;s(O)},mn=(A,O,V)=>{const{bum:H,scope:K,job:z,subTree:oe,um:ne,m:te,a:Q,parent:pe,slots:{__:ie}}=A;ip(te),ip(Q),H&&ja(H),pe&&me(ie)&&ie.forEach(de=>{pe.renderCache[de]=void 0}),K.stop(),z&&(z.flags|=8,Me(oe,A,O,V)),ne&&Zt(ne,O),Zt(()=>{A.isUnmounted=!0},O),O&&O.pendingBranch&&!O.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===O.pendingId&&(O.deps--,O.deps===0&&O.resolve())},jt=(A,O,V,H=!1,K=!1,z=0)=>{for(let oe=z;oe<A.length;oe++)Me(A[oe],O,V,H,K)},j=A=>{if(A.shapeFlag&6)return j(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const O=p(A.anchor||A.el),V=O&&O[lE];return V?p(V):O};let ce=!1;const se=(A,O,V)=>{A==null?O._vnode&&Me(O._vnode,null,null,!0):I(O._vnode||null,A,O,null,null,null,V),O._vnode=A,ce||(ce=!0,Jf(),Ny(),ce=!1)},he={p:I,um:Me,m:kt,r:We,mt:Ne,mc:b,pc:ee,pbc:P,n:j,o:t};return{render:se,hydrate:void 0,createApp:DE(se)}}function Yc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function hs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function UE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function r_(t,e,n=!1){const r=t.children,s=e.children;if(me(r)&&me(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Cr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&r_(o,c)),c.type===Kl&&(c.el=o.el),c.type===Wt&&!c.el&&(c.el=o.el)}}function BE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function s_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:s_(e)}function ip(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const jE=Symbol.for("v-scx"),qE=()=>$e(jE);function et(t,e,n){return i_(t,e,n)}function i_(t,e,n=Ke){const{immediate:r,deep:s,flush:i,once:o}=n,c=bt({},n),l=e&&r||!e&&i!=="post";let u;if(Co){if(i==="sync"){const _=qE();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=On,_.resume=On,_.pause=On,_}}const h=Ct;c.call=(_,D,I)=>bn(_,h,D,I);let m=!1;i==="post"?c.scheduler=_=>{Zt(_,h&&h.suspense)}:i!=="sync"&&(m=!0,c.scheduler=(_,D)=>{D?_():Bh(_)}),c.augmentJob=_=>{e&&(_.flags|=4),m&&(_.flags|=2,h&&(_.id=h.uid,_.i=h))};const p=sE(t,e,c);return Co&&(u?u.push(p):l&&p()),p}function HE(t,e,n){const r=this.proxy,s=ut(t)?t.includes(".")?o_(r,t):()=>r[t]:t.bind(r,r);let i;Re(e)?i=e:(i=e.handler,n=e);const o=Go(this),c=i_(s,i.bind(r),n);return o(),c}function o_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const zE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${qr(e)}Modifiers`]||t[`${Os(e)}Modifiers`];function WE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ke;let s=n;const i=e.startsWith("update:"),o=i&&zE(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>ut(h)?h.trim():h)),o.number&&(s=n.map(sl)));let c,l=r[c=jc(e)]||r[c=jc(qr(e))];!l&&i&&(l=r[c=jc(Os(e))]),l&&bn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,bn(u,t,6,s)}}function a_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!Re(t)){const l=u=>{const h=a_(u,e,!0);h&&(c=!0,bt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ye(t)&&r.set(t,null),null):(me(i)?i.forEach(l=>o[l]=null):bt(o,i),Ye(t)&&r.set(t,o),o)}function Gl(t,e){return!t||!Fl(e)?!1:(e=e.slice(2).replace(/Once$/,""),He(t,e[0].toLowerCase()+e.slice(1))||He(t,Os(e))||He(t,e))}function op(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:h,props:m,data:p,setupState:_,ctx:D,inheritAttrs:I}=t,w=cl(t);let k,x;try{if(n.shapeFlag&4){const U=s||r,Y=U;k=Rn(u.call(Y,U,h,m,_,p,D)),x=c}else{const U=e;k=Rn(U.length>1?U(m,{attrs:c,slots:o,emit:l}):U(m,null)),x=e.props?c:GE(c)}}catch(U){uo.length=0,ql(U,t,1),k=Ae(Wt)}let L=k;if(x&&I!==!1){const U=Object.keys(x),{shapeFlag:Y}=L;U.length&&Y&7&&(i&&U.some(Rh)&&(x=KE(x,i)),L=zr(L,x,!1,!0))}return n.dirs&&(L=zr(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&Ao(L,n.transition),k=L,cl(w),k}const GE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fl(n))&&((e||(e={}))[n]=t[n]);return e},KE=(t,e)=>{const n={};for(const r in t)(!Rh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function YE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ap(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let m=0;m<h.length;m++){const p=h[m];if(o[p]!==r[p]&&!Gl(u,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?ap(r,o,u):!0:!!o;return!1}function ap(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Gl(n,i))return!0}return!1}function QE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const l_=t=>t.__isSuspense;function XE(t,e){e&&e.pendingBranch?me(t)?e.effects.push(...t):e.effects.push(t):aE(t)}const Ze=Symbol.for("v-fgt"),Kl=Symbol.for("v-txt"),Wt=Symbol.for("v-cmt"),qa=Symbol.for("v-stc"),uo=[];let tn=null;function B(t=!1){uo.push(tn=t?null:[])}function JE(){uo.pop(),tn=uo[uo.length-1]||null}let Po=1;function lp(t,e=!1){Po+=t,t<0&&tn&&e&&(tn.hasOnce=!0)}function c_(t){return t.dynamicChildren=Po>0?tn||ei:null,JE(),Po>0&&tn&&tn.push(t),t}function W(t,e,n,r,s,i){return c_(f(t,e,n,r,s,i,!0))}function Bn(t,e,n,r,s){return c_(Ae(t,e,n,r,s,!0))}function hl(t){return t?t.__v_isVNode===!0:!1}function gs(t,e){return t.type===e.type&&t.key===e.key}const u_=({key:t})=>t??null,Ha=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ut(t)||ct(t)||Re(t)?{i:Xt,r:t,k:e,f:!!n}:t:null);function f(t,e=null,n=null,r=0,s=null,i=t===Ze?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&u_(e),ref:e&&Ha(e),scopeId:Vy,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Xt};return c?(Wh(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ut(n)?8:16),Po>0&&!o&&tn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&tn.push(l),l}const Ae=ZE;function ZE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===wE)&&(t=Wt),hl(t)){const c=zr(t,e,!0);return n&&Wh(c,n),Po>0&&!i&&tn&&(c.shapeFlag&6?tn[tn.indexOf(t)]=c:tn.push(c)),c.patchFlag=-2,c}if(uw(t)&&(t=t.__vccOpts),e){e=ew(e);let{class:c,style:l}=e;c&&!ut(c)&&(e.class=Ts(c)),Ye(l)&&($h(l)&&!me(l)&&(l=bt({},l)),e.style=Bl(l))}const o=ut(t)?1:l_(t)?128:My(t)?64:Ye(t)?4:Re(t)?2:0;return f(t,e,n,r,s,o,i,!0)}function ew(t){return t?$h(t)||Xy(t)?bt({},t):t:null}function zr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?tw(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&u_(u),ref:e&&e.ref?n&&i?me(i)?i.concat(Ha(e)):[i,Ha(e)]:Ha(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ze?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zr(t.ssContent),ssFallback:t.ssFallback&&zr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Ao(h,l.clone(h)),h}function mt(t=" ",e=0){return Ae(Kl,null,t,e)}function h_(t,e){const n=Ae(qa,null,t);return n.staticCount=e,n}function Te(t="",e=!1){return e?(B(),Bn(Wt,null,t)):Ae(Wt,null,t)}function Rn(t){return t==null||typeof t=="boolean"?Ae(Wt):me(t)?Ae(Ze,null,t.slice()):hl(t)?Cr(t):Ae(Kl,null,String(t))}function Cr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zr(t)}function Wh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(me(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Wh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Xy(e)?e._ctx=Xt:s===3&&Xt&&(Xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Re(e)?(e={default:e,_ctx:Xt},n=32):(e=String(e),r&64?(n=16,e=[mt(e)]):n=8);t.children=e,t.shapeFlag|=n}function tw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ts([e.class,r.class]));else if(s==="style")e.style=Bl([e.style,r.style]);else if(Fl(s)){const i=e[s],o=r[s];o&&i!==o&&!(me(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Sn(t,e,n,r=null){bn(t,e,7,[n,r])}const nw=Ky();let rw=0;function sw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||nw,i={uid:rw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new uy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zy(r,s),emitsOptions:a_(r,s),emit:null,emitted:null,propsDefaults:Ke,inheritAttrs:r.inheritAttrs,ctx:Ke,data:Ke,props:Ke,attrs:Ke,slots:Ke,refs:Ke,setupState:Ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=WE.bind(null,i),t.ce&&t.ce(i),i}let Ct=null;const iw=()=>Ct||Xt;let dl,Du;{const t=Ul(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};dl=e("__VUE_INSTANCE_SETTERS__",n=>Ct=n),Du=e("__VUE_SSR_SETTERS__",n=>Co=n)}const Go=t=>{const e=Ct;return dl(t),t.scope.on(),()=>{t.scope.off(),dl(e)}},cp=()=>{Ct&&Ct.scope.off(),dl(null)};function d_(t){return t.vnode.shapeFlag&4}let Co=!1;function ow(t,e=!1,n=!1){e&&Du(e);const{props:r,children:s}=t.vnode,i=d_(t);OE(t,r,i,e),ME(t,s,n||e);const o=i?aw(t,e):void 0;return e&&Du(!1),o}function aw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,TE);const{setup:r}=n;if(r){sr();const s=t.setupContext=r.length>1?cw(t):null,i=Go(t),o=Wo(r,t,0,[t.props,s]),c=ry(o);if(ir(),i(),(c||t.sp)&&!lo(t)&&jy(t),c){if(o.then(cp,cp),e)return o.then(l=>{up(t,l)}).catch(l=>{ql(l,t,0)});t.asyncDep=o}else up(t,o)}else f_(t)}function up(t,e,n){Re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ye(e)&&(t.setupState=Dy(e)),f_(t)}function f_(t,e,n){const r=t.type;t.render||(t.render=r.render||On);{const s=Go(t);sr();try{IE(t)}finally{ir(),s()}}}const lw={get(t,e){return Ft(t,"get",""),t[e]}};function cw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,lw),slots:t.slots,emit:t.emit,expose:e}}function Yl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Dy(Uh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in co)return co[n](t)},has(e,n){return n in e||n in co}})):t.proxy}function uw(t){return Re(t)&&"__vccOpts"in t}const Ce=(t,e)=>nE(t,e,Co);function ci(t,e,n){const r=arguments.length;return r===2?Ye(e)&&!me(e)?hl(e)?Ae(t,null,[e]):Ae(t,e):Ae(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&hl(n)&&(n=[n]),Ae(t,e,n))}const hw="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ku;const hp=typeof window<"u"&&window.trustedTypes;if(hp)try{ku=hp.createPolicy("vue",{createHTML:t=>t})}catch{}const p_=ku?t=>ku.createHTML(t):t=>t,dw="http://www.w3.org/2000/svg",fw="http://www.w3.org/1998/Math/MathML",Kn=typeof document<"u"?document:null,dp=Kn&&Kn.createElement("template"),pw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Kn.createElementNS(dw,t):e==="mathml"?Kn.createElementNS(fw,t):n?Kn.createElement(t,{is:n}):Kn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Kn.createTextNode(t),createComment:t=>Kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{dp.innerHTML=p_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=dp.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Er="transition",Wi="animation",Ro=Symbol("_vtc"),m_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},mw=bt({},Ly,m_),gw=t=>(t.displayName="Transition",t.props=mw,t),Ns=gw((t,{slots:e})=>ci(hE,yw(t),e)),ds=(t,e=[])=>{me(t)?t.forEach(n=>n(...e)):t&&t(...e)},fp=t=>t?me(t)?t.some(e=>e.length>1):t.length>1:!1;function yw(t){const e={};for(const R in t)R in m_||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=c,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,D=_w(s),I=D&&D[0],w=D&&D[1],{onBeforeEnter:k,onEnter:x,onEnterCancelled:L,onLeave:U,onLeaveCancelled:Y,onBeforeAppear:X=k,onAppear:C=x,onAppearCancelled:b=L}=e,E=(R,S,Ne,we)=>{R._enterCancelled=we,fs(R,S?h:c),fs(R,S?u:o),Ne&&Ne()},P=(R,S)=>{R._isLeaving=!1,fs(R,m),fs(R,_),fs(R,p),S&&S()},N=R=>(S,Ne)=>{const we=R?C:x,Z=()=>E(S,R,Ne);ds(we,[S,Z]),pp(()=>{fs(S,R?l:i),Wn(S,R?h:c),fp(we)||mp(S,r,I,Z)})};return bt(e,{onBeforeEnter(R){ds(k,[R]),Wn(R,i),Wn(R,o)},onBeforeAppear(R){ds(X,[R]),Wn(R,l),Wn(R,u)},onEnter:N(!1),onAppear:N(!0),onLeave(R,S){R._isLeaving=!0;const Ne=()=>P(R,S);Wn(R,m),R._enterCancelled?(Wn(R,p),_p()):(_p(),Wn(R,p)),pp(()=>{R._isLeaving&&(fs(R,m),Wn(R,_),fp(U)||mp(R,r,w,Ne))}),ds(U,[R,Ne])},onEnterCancelled(R){E(R,!1,void 0,!0),ds(L,[R])},onAppearCancelled(R){E(R,!0,void 0,!0),ds(b,[R])},onLeaveCancelled(R){P(R),ds(Y,[R])}})}function _w(t){if(t==null)return null;if(Ye(t))return[Qc(t.enter),Qc(t.leave)];{const e=Qc(t);return[e,e]}}function Qc(t){return E0(t)}function Wn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ro]||(t[Ro]=new Set)).add(e)}function fs(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ro];n&&(n.delete(e),n.size||(t[Ro]=void 0))}function pp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let vw=0;function mp(t,e,n,r){const s=t._endId=++vw,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=bw(t,e);if(!o)return r();const u=o+"end";let h=0;const m=()=>{t.removeEventListener(u,p),i()},p=_=>{_.target===t&&++h>=l&&m()};setTimeout(()=>{h<l&&m()},c+1),t.addEventListener(u,p)}function bw(t,e){const n=window.getComputedStyle(t),r=D=>(n[D]||"").split(", "),s=r(`${Er}Delay`),i=r(`${Er}Duration`),o=gp(s,i),c=r(`${Wi}Delay`),l=r(`${Wi}Duration`),u=gp(c,l);let h=null,m=0,p=0;e===Er?o>0&&(h=Er,m=o,p=i.length):e===Wi?u>0&&(h=Wi,m=u,p=l.length):(m=Math.max(o,u),h=m>0?o>u?Er:Wi:null,p=h?h===Er?i.length:l.length:0);const _=h===Er&&/\b(transform|all)(,|$)/.test(r(`${Er}Property`).toString());return{type:h,timeout:m,propCount:p,hasTransform:_}}function gp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>yp(n)+yp(t[r])))}function yp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function _p(){return document.body.offsetHeight}function Ew(t,e,n){const r=t[Ro];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const vp=Symbol("_vod"),ww=Symbol("_vsh"),Tw=Symbol(""),Iw=/(^|;)\s*display\s*:/;function Sw(t,e,n){const r=t.style,s=ut(n);let i=!1;if(n&&!s){if(e)if(ut(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&za(r,c,"")}else for(const o in e)n[o]==null&&za(r,o,"");for(const o in n)o==="display"&&(i=!0),za(r,o,n[o])}else if(s){if(e!==n){const o=r[Tw];o&&(n+=";"+o),r.cssText=n,i=Iw.test(n)}}else e&&t.removeAttribute("style");vp in t&&(t[vp]=i?r.display:"",t[ww]&&(r.display="none"))}const bp=/\s*!important$/;function za(t,e,n){if(me(n))n.forEach(r=>za(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Aw(t,e);bp.test(n)?t.setProperty(Os(r),n.replace(bp,""),"important"):t[r]=n}}const Ep=["Webkit","Moz","ms"],Xc={};function Aw(t,e){const n=Xc[e];if(n)return n;let r=qr(e);if(r!=="filter"&&r in t)return Xc[e]=r;r=oy(r);for(let s=0;s<Ep.length;s++){const i=Ep[s]+r;if(i in t)return Xc[e]=i}return e}const wp="http://www.w3.org/1999/xlink";function Tp(t,e,n,r,s,i=P0(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(wp,e.slice(6,e.length)):t.setAttributeNS(wp,e,n):n==null||i&&!ay(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Fn(n)?String(n):n)}function Ip(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?p_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ay(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Dr(t,e,n,r){t.addEventListener(e,n,r)}function Pw(t,e,n,r){t.removeEventListener(e,n,r)}const Sp=Symbol("_vei");function Cw(t,e,n,r,s=null){const i=t[Sp]||(t[Sp]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=Rw(e);if(r){const u=i[e]=Ow(r,s);Dr(t,c,u,l)}else o&&(Pw(t,c,o,l),i[e]=void 0)}}const Ap=/(?:Once|Passive|Capture)$/;function Rw(t){let e;if(Ap.test(t)){e={};let r;for(;r=t.match(Ap);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Os(t.slice(2)),e]}let Jc=0;const Dw=Promise.resolve(),kw=()=>Jc||(Dw.then(()=>Jc=0),Jc=Date.now());function Ow(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;bn(Nw(r,n.value),e,5,[r])};return n.value=t,n.attached=kw(),n}function Nw(t,e){if(me(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Pp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,xw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Ew(t,r,o):e==="style"?Sw(t,n,r):Fl(e)?Rh(e)||Cw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vw(t,e,r,o))?(Ip(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Tp(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ut(r))?Ip(t,qr(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Tp(t,e,r,o))};function Vw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Pp(e)&&Re(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Pp(e)&&ut(n)?!1:e in t}const ui=t=>{const e=t.props["onUpdate:modelValue"]||!1;return me(e)?n=>ja(e,n):e};function Mw(t){t.target.composing=!0}function Cp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const tr=Symbol("_assign"),_e={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[tr]=ui(s);const i=r||s.props&&s.props.type==="number";Dr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=sl(c)),t[tr](c)}),n&&Dr(t,"change",()=>{t.value=t.value.trim()}),e||(Dr(t,"compositionstart",Mw),Dr(t,"compositionend",Cp),Dr(t,"change",Cp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[tr]=ui(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?sl(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Ql={deep:!0,created(t,e,n){t[tr]=ui(n),Dr(t,"change",()=>{const r=t._modelValue,s=Do(t),i=t.checked,o=t[tr];if(me(r)){const c=Oh(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(Ei(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(g_(t,i))})},mounted:Rp,beforeUpdate(t,e,n){t[tr]=ui(n),Rp(t,e,n)}};function Rp(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(me(e))s=Oh(e,r.props.value)>-1;else if(Ei(e))s=e.has(r.props.value);else{if(e===n)return;s=zo(e,g_(t,!0))}t.checked!==s&&(t.checked=s)}const vt={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ei(e);Dr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?sl(Do(o)):Do(o));t[tr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Hl(()=>{t._assigning=!1})}),t[tr]=ui(r)},mounted(t,{value:e}){Dp(t,e)},beforeUpdate(t,e,n){t[tr]=ui(n)},updated(t,{value:e}){t._assigning||Dp(t,e)}};function Dp(t,e){const n=t.multiple,r=me(e);if(!(n&&!r&&!Ei(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Do(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=Oh(e,c)>-1}else o.selected=e.has(c);else if(zo(Do(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Do(t){return"_value"in t?t._value:t.value}function g_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Lw=["ctrl","shift","alt","meta"],Fw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Lw.some(n=>t[`${n}Key`]&&!e.includes(n))},nt=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=Fw[e[o]];if(c&&c(s,e))return}return t(s,...i)})},$w=bt({patchProp:xw},pw);let kp;function Uw(){return kp||(kp=FE($w))}const Bw=(...t)=>{const e=Uw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=qw(r);if(!s)return;const i=e._component;!Re(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,jw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function jw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function qw(t){return ut(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Gs=typeof document<"u";function y_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Hw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&y_(t.default)}const qe=Object.assign;function Zc(t,e){const n={};for(const r in e){const s=e[r];n[r]=En(s)?s.map(t):t(s)}return n}const ho=()=>{},En=Array.isArray,__=/#/g,zw=/&/g,Ww=/\//g,Gw=/=/g,Kw=/\?/g,v_=/\+/g,Yw=/%5B/g,Qw=/%5D/g,b_=/%5E/g,Xw=/%60/g,E_=/%7B/g,Jw=/%7C/g,w_=/%7D/g,Zw=/%20/g;function Gh(t){return encodeURI(""+t).replace(Jw,"|").replace(Yw,"[").replace(Qw,"]")}function eT(t){return Gh(t).replace(E_,"{").replace(w_,"}").replace(b_,"^")}function Ou(t){return Gh(t).replace(v_,"%2B").replace(Zw,"+").replace(__,"%23").replace(zw,"%26").replace(Xw,"`").replace(E_,"{").replace(w_,"}").replace(b_,"^")}function tT(t){return Ou(t).replace(Gw,"%3D")}function nT(t){return Gh(t).replace(__,"%23").replace(Kw,"%3F")}function rT(t){return t==null?"":nT(t).replace(Ww,"%2F")}function ko(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const sT=/\/$/,iT=t=>t.replace(sT,"");function eu(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=cT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ko(o)}}function oT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Op(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function aT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&hi(e.matched[r],n.matched[s])&&T_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function T_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!lT(t[n],e[n]))return!1;return!0}function lT(t,e){return En(t)?Np(t,e):En(e)?Np(e,t):t===e}function Np(t,e){return En(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function cT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const wr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Oo;(function(t){t.pop="pop",t.push="push"})(Oo||(Oo={}));var fo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(fo||(fo={}));function uT(t){if(!t)if(Gs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),iT(t)}const hT=/^[^#]+#/;function dT(t,e){return t.replace(hT,"#")+e}function fT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Xl=()=>({left:window.scrollX,top:window.scrollY});function pT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=fT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function xp(t,e){return(history.state?history.state.position-e:-1)+t}const Nu=new Map;function mT(t,e){Nu.set(t,e)}function gT(t){const e=Nu.get(t);return Nu.delete(t),e}let yT=()=>location.protocol+"//"+location.host;function I_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Op(l,"")}return Op(n,t)+r+s}function _T(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const _=I_(t,location),D=n.value,I=e.value;let w=0;if(p){if(n.value=_,e.value=p,o&&o===D){o=null;return}w=I?p.position-I.position:0}else r(_);s.forEach(k=>{k(n.value,D,{delta:w,type:Oo.pop,direction:w?w>0?fo.forward:fo.back:fo.unknown})})};function l(){o=n.value}function u(p){s.push(p);const _=()=>{const D=s.indexOf(p);D>-1&&s.splice(D,1)};return i.push(_),_}function h(){const{history:p}=window;p.state&&p.replaceState(qe({},p.state,{scroll:Xl()}),"")}function m(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:m}}function Vp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Xl():null}}function vT(t){const{history:e,location:n}=window,r={value:I_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const m=t.indexOf("#"),p=m>-1?(n.host&&document.querySelector("base")?t:t.slice(m))+l:yT()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(_){console.error(_),n[h?"replace":"assign"](p)}}function o(l,u){const h=qe({},e.state,Vp(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function c(l,u){const h=qe({},s.value,e.state,{forward:l,scroll:Xl()});i(h.current,h,!0);const m=qe({},Vp(r.value,l,null),{position:h.position+1},u);i(l,m,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function bT(t){t=uT(t);const e=vT(t),n=_T(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=qe({location:"",base:t,go:r,createHref:dT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ET(t){return typeof t=="string"||t&&typeof t=="object"}function S_(t){return typeof t=="string"||typeof t=="symbol"}const A_=Symbol("");var Mp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Mp||(Mp={}));function di(t,e){return qe(new Error,{type:t,[A_]:!0},e)}function Gn(t,e){return t instanceof Error&&A_ in t&&(e==null||!!(t.type&e))}const Lp="[^/]+?",wT={sensitive:!1,strict:!1,start:!0,end:!0},TT=/[.+*?^${}()[\]/\\]/g;function IT(t,e){const n=qe({},wT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let m=0;m<u.length;m++){const p=u[m];let _=40+(n.sensitive?.25:0);if(p.type===0)m||(s+="/"),s+=p.value.replace(TT,"\\$&"),_+=40;else if(p.type===1){const{value:D,repeatable:I,optional:w,regexp:k}=p;i.push({name:D,repeatable:I,optional:w});const x=k||Lp;if(x!==Lp){_+=10;try{new RegExp(`(${x})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${D}" (${x}): `+U.message)}}let L=I?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;m||(L=w&&u.length<2?`(?:/${L})`:"/"+L),w&&(L+="?"),s+=L,_+=20,w&&(_+=-8),I&&(_+=-20),x===".*"&&(_+=-50)}h.push(_)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const h=u.match(o),m={};if(!h)return null;for(let p=1;p<h.length;p++){const _=h[p]||"",D=i[p-1];m[D.name]=_&&D.repeatable?_.split("/"):_}return m}function l(u){let h="",m=!1;for(const p of t){(!m||!h.endsWith("/"))&&(h+="/"),m=!1;for(const _ of p)if(_.type===0)h+=_.value;else if(_.type===1){const{value:D,repeatable:I,optional:w}=_,k=D in u?u[D]:"";if(En(k)&&!I)throw new Error(`Provided param "${D}" is an array but it is not repeatable (* or + modifiers)`);const x=En(k)?k.join("/"):k;if(!x)if(w)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):m=!0);else throw new Error(`Missing required param "${D}"`);h+=x}}return h||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function ST(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function P_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ST(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Fp(r))return 1;if(Fp(s))return-1}return s.length-r.length}function Fp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const AT={type:0,value:""},PT=/[a-zA-Z0-9_]/;function CT(t){if(!t)return[[]];if(t==="/")return[[AT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",h="";function m(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&m(),o()):l===":"?(m(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:PT.test(l)?p():(m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),m(),o(),s}function RT(t,e,n){const r=IT(CT(t.path),n),s=qe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function DT(t,e){const n=[],r=new Map;e=jp({strict:!1,end:!0,sensitive:!1},e);function s(m){return r.get(m)}function i(m,p,_){const D=!_,I=Up(m);I.aliasOf=_&&_.record;const w=jp(e,m),k=[I];if("alias"in m){const U=typeof m.alias=="string"?[m.alias]:m.alias;for(const Y of U)k.push(Up(qe({},I,{components:_?_.record.components:I.components,path:Y,aliasOf:_?_.record:I})))}let x,L;for(const U of k){const{path:Y}=U;if(p&&Y[0]!=="/"){const X=p.record.path,C=X[X.length-1]==="/"?"":"/";U.path=p.record.path+(Y&&C+Y)}if(x=RT(U,p,w),_?_.alias.push(x):(L=L||x,L!==x&&L.alias.push(x),D&&m.name&&!Bp(x)&&o(m.name)),C_(x)&&l(x),I.children){const X=I.children;for(let C=0;C<X.length;C++)i(X[C],x,_&&_.children[C])}_=_||x}return L?()=>{o(L)}:ho}function o(m){if(S_(m)){const p=r.get(m);p&&(r.delete(m),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(m);p>-1&&(n.splice(p,1),m.record.name&&r.delete(m.record.name),m.children.forEach(o),m.alias.forEach(o))}}function c(){return n}function l(m){const p=NT(m,n);n.splice(p,0,m),m.record.name&&!Bp(m)&&r.set(m.record.name,m)}function u(m,p){let _,D={},I,w;if("name"in m&&m.name){if(_=r.get(m.name),!_)throw di(1,{location:m});w=_.record.name,D=qe($p(p.params,_.keys.filter(L=>!L.optional).concat(_.parent?_.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),m.params&&$p(m.params,_.keys.map(L=>L.name))),I=_.stringify(D)}else if(m.path!=null)I=m.path,_=n.find(L=>L.re.test(I)),_&&(D=_.parse(I),w=_.record.name);else{if(_=p.name?r.get(p.name):n.find(L=>L.re.test(p.path)),!_)throw di(1,{location:m,currentLocation:p});w=_.record.name,D=qe({},p.params,m.params),I=_.stringify(D)}const k=[];let x=_;for(;x;)k.unshift(x.record),x=x.parent;return{name:w,path:I,params:D,matched:k,meta:OT(k)}}t.forEach(m=>i(m));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:c,getRecordMatcher:s}}function $p(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Up(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:kT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function kT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Bp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function OT(t){return t.reduce((e,n)=>qe(e,n.meta),{})}function jp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function NT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;P_(t,e[i])<0?r=i:n=i+1}const s=xT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function xT(t){let e=t;for(;e=e.parent;)if(C_(e)&&P_(t,e)===0)return e}function C_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function VT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(v_," "),o=i.indexOf("="),c=ko(o<0?i:i.slice(0,o)),l=o<0?null:ko(i.slice(o+1));if(c in e){let u=e[c];En(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function qp(t){let e="";for(let n in t){const r=t[n];if(n=tT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(En(r)?r.map(i=>i&&Ou(i)):[r&&Ou(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function MT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=En(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const LT=Symbol(""),Hp=Symbol(""),Jl=Symbol(""),Kh=Symbol(""),xu=Symbol("");function Gi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Rr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=p=>{p===!1?l(di(4,{from:n,to:e})):p instanceof Error?l(p):ET(p)?l(di(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),c())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let m=Promise.resolve(h);t.length<3&&(m=m.then(u)),m.catch(p=>l(p))})}function tu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(y_(l)){const h=(l.__vccOpts||l)[e];h&&i.push(Rr(h,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const m=Hw(h)?h.default:h;o.mods[c]=h,o.components[c]=m;const _=(m.__vccOpts||m)[e];return _&&Rr(_,n,r,o,c,s)()}))}}return i}function zp(t){const e=$e(Jl),n=$e(Kh),r=Ce(()=>{const l=y(t.to);return e.resolve(l)}),s=Ce(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],m=n.matched;if(!h||!m.length)return-1;const p=m.findIndex(hi.bind(null,h));if(p>-1)return p;const _=Wp(l[u-2]);return u>1&&Wp(h)===_&&m[m.length-1].path!==_?m.findIndex(hi.bind(null,l[u-2])):p}),i=Ce(()=>s.value>-1&&jT(n.params,r.value.params)),o=Ce(()=>s.value>-1&&s.value===n.matched.length-1&&T_(n.params,r.value.params));function c(l={}){if(BT(l)){const u=e[y(t.replace)?"replace":"push"](y(t.to)).catch(ho);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ce(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function FT(t){return t.length===1?t[0]:t}const $T=jh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:zp,setup(t,{slots:e}){const n=Un(zp(t)),{options:r}=$e(Jl),s=Ce(()=>({[Gp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&FT(e.default(n));return t.custom?i:ci("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),UT=$T;function BT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function jT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!En(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Wp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gp=(t,e,n)=>t??e??n,qT=jh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=$e(xu),s=Ce(()=>t.route||r.value),i=$e(Hp,0),o=Ce(()=>{let u=y(i);const{matched:h}=s.value;let m;for(;(m=h[u])&&!m.components;)u++;return u}),c=Ce(()=>s.value.matched[o.value]);xr(Hp,Ce(()=>o.value+1)),xr(LT,c),xr(xu,s);const l=Ie();return et(()=>[l.value,c.value,t.name],([u,h,m],[p,_,D])=>{h&&(h.instances[m]=u,_&&_!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=_.leaveGuards),h.updateGuards.size||(h.updateGuards=_.updateGuards))),u&&h&&(!_||!hi(h,_)||!p)&&(h.enterCallbacks[m]||[]).forEach(I=>I(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,m=c.value,p=m&&m.components[h];if(!p)return Kp(n.default,{Component:p,route:u});const _=m.props[h],D=_?_===!0?u.params:typeof _=="function"?_(u):_:null,w=ci(p,qe({},D,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(m.instances[h]=null)},ref:l}));return Kp(n.default,{Component:w,route:u})||w}}});function Kp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const R_=qT;function HT(t){const e=DT(t.routes,t),n=t.parseQuery||VT,r=t.stringifyQuery||qp,s=t.history,i=Gi(),o=Gi(),c=Gi(),l=Y0(wr);let u=wr;Gs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Zc.bind(null,j=>""+j),m=Zc.bind(null,rT),p=Zc.bind(null,ko);function _(j,ce){let se,he;return S_(j)?(se=e.getRecordMatcher(j),he=ce):he=j,e.addRoute(he,se)}function D(j){const ce=e.getRecordMatcher(j);ce&&e.removeRoute(ce)}function I(){return e.getRoutes().map(j=>j.record)}function w(j){return!!e.getRecordMatcher(j)}function k(j,ce){if(ce=qe({},ce||l.value),typeof j=="string"){const V=eu(n,j,ce.path),H=e.resolve({path:V.path},ce),K=s.createHref(V.fullPath);return qe(V,H,{params:p(H.params),hash:ko(V.hash),redirectedFrom:void 0,href:K})}let se;if(j.path!=null)se=qe({},j,{path:eu(n,j.path,ce.path).path});else{const V=qe({},j.params);for(const H in V)V[H]==null&&delete V[H];se=qe({},j,{params:m(V)}),ce.params=m(ce.params)}const he=e.resolve(se,ce),Be=j.hash||"";he.params=h(p(he.params));const A=oT(r,qe({},j,{hash:eT(Be),path:he.path})),O=s.createHref(A);return qe({fullPath:A,hash:Be,query:r===qp?MT(j.query):j.query||{}},he,{redirectedFrom:void 0,href:O})}function x(j){return typeof j=="string"?eu(n,j,l.value.path):qe({},j)}function L(j,ce){if(u!==j)return di(8,{from:ce,to:j})}function U(j){return C(j)}function Y(j){return U(qe(x(j),{replace:!0}))}function X(j){const ce=j.matched[j.matched.length-1];if(ce&&ce.redirect){const{redirect:se}=ce;let he=typeof se=="function"?se(j):se;return typeof he=="string"&&(he=he.includes("?")||he.includes("#")?he=x(he):{path:he},he.params={}),qe({query:j.query,hash:j.hash,params:he.path!=null?{}:j.params},he)}}function C(j,ce){const se=u=k(j),he=l.value,Be=j.state,A=j.force,O=j.replace===!0,V=X(se);if(V)return C(qe(x(V),{state:typeof V=="object"?qe({},Be,V.state):Be,force:A,replace:O}),ce||se);const H=se;H.redirectedFrom=ce;let K;return!A&&aT(r,he,se)&&(K=di(16,{to:H,from:he}),kt(he,he,!0,!1)),(K?Promise.resolve(K):P(H,he)).catch(z=>Gn(z)?Gn(z,2)?z:pt(z):ee(z,H,he)).then(z=>{if(z){if(Gn(z,2))return C(qe({replace:O},x(z.to),{state:typeof z.to=="object"?qe({},Be,z.to.state):Be,force:A}),ce||H)}else z=R(H,he,!0,O,Be);return N(H,he,z),z})}function b(j,ce){const se=L(j,ce);return se?Promise.reject(se):Promise.resolve()}function E(j){const ce=pn.values().next().value;return ce&&typeof ce.runWithContext=="function"?ce.runWithContext(j):j()}function P(j,ce){let se;const[he,Be,A]=zT(j,ce);se=tu(he.reverse(),"beforeRouteLeave",j,ce);for(const V of he)V.leaveGuards.forEach(H=>{se.push(Rr(H,j,ce))});const O=b.bind(null,j,ce);return se.push(O),jt(se).then(()=>{se=[];for(const V of i.list())se.push(Rr(V,j,ce));return se.push(O),jt(se)}).then(()=>{se=tu(Be,"beforeRouteUpdate",j,ce);for(const V of Be)V.updateGuards.forEach(H=>{se.push(Rr(H,j,ce))});return se.push(O),jt(se)}).then(()=>{se=[];for(const V of A)if(V.beforeEnter)if(En(V.beforeEnter))for(const H of V.beforeEnter)se.push(Rr(H,j,ce));else se.push(Rr(V.beforeEnter,j,ce));return se.push(O),jt(se)}).then(()=>(j.matched.forEach(V=>V.enterCallbacks={}),se=tu(A,"beforeRouteEnter",j,ce,E),se.push(O),jt(se))).then(()=>{se=[];for(const V of o.list())se.push(Rr(V,j,ce));return se.push(O),jt(se)}).catch(V=>Gn(V,8)?V:Promise.reject(V))}function N(j,ce,se){c.list().forEach(he=>E(()=>he(j,ce,se)))}function R(j,ce,se,he,Be){const A=L(j,ce);if(A)return A;const O=ce===wr,V=Gs?history.state:{};se&&(he||O?s.replace(j.fullPath,qe({scroll:O&&V&&V.scroll},Be)):s.push(j.fullPath,Be)),l.value=j,kt(j,ce,se,O),pt()}let S;function Ne(){S||(S=s.listen((j,ce,se)=>{if(!mn.listening)return;const he=k(j),Be=X(he);if(Be){C(qe(Be,{replace:!0,force:!0}),he).catch(ho);return}u=he;const A=l.value;Gs&&mT(xp(A.fullPath,se.delta),Xl()),P(he,A).catch(O=>Gn(O,12)?O:Gn(O,2)?(C(qe(x(O.to),{force:!0}),he).then(V=>{Gn(V,20)&&!se.delta&&se.type===Oo.pop&&s.go(-1,!1)}).catch(ho),Promise.reject()):(se.delta&&s.go(-se.delta,!1),ee(O,he,A))).then(O=>{O=O||R(he,A,!1),O&&(se.delta&&!Gn(O,8)?s.go(-se.delta,!1):se.type===Oo.pop&&Gn(O,20)&&s.go(-1,!1)),N(he,A,O)}).catch(ho)}))}let we=Gi(),Z=Gi(),F;function ee(j,ce,se){pt(j);const he=Z.list();return he.length?he.forEach(Be=>Be(j,ce,se)):console.error(j),Promise.reject(j)}function st(){return F&&l.value!==wr?Promise.resolve():new Promise((j,ce)=>{we.add([j,ce])})}function pt(j){return F||(F=!j,Ne(),we.list().forEach(([ce,se])=>j?se(j):ce()),we.reset()),j}function kt(j,ce,se,he){const{scrollBehavior:Be}=t;if(!Gs||!Be)return Promise.resolve();const A=!se&&gT(xp(j.fullPath,0))||(he||!se)&&history.state&&history.state.scroll||null;return Hl().then(()=>Be(j,ce,A)).then(O=>O&&pT(O)).catch(O=>ee(O,j,ce))}const Me=j=>s.go(j);let We;const pn=new Set,mn={currentRoute:l,listening:!0,addRoute:_,removeRoute:D,clearRoutes:e.clearRoutes,hasRoute:w,getRoutes:I,resolve:k,options:t,push:U,replace:Y,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Z.add,isReady:st,install(j){const ce=this;j.component("RouterLink",UT),j.component("RouterView",R_),j.config.globalProperties.$router=ce,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>y(l)}),Gs&&!We&&l.value===wr&&(We=!0,U(s.location).catch(Be=>{}));const se={};for(const Be in wr)Object.defineProperty(se,Be,{get:()=>l.value[Be],enumerable:!0});j.provide(Jl,ce),j.provide(Kh,Py(se)),j.provide(xu,l);const he=j.unmount;pn.add(j),j.unmount=function(){pn.delete(j),pn.size<1&&(u=wr,S&&S(),S=null,l.value=wr,We=!1,F=!1),he()}}};function jt(j){return j.reduce((ce,se)=>ce.then(()=>E(se)),Promise.resolve())}return mn}function zT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>hi(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>hi(u,l))||s.push(l))}return[n,r,s]}function xs(){return $e(Jl)}function WT(t){return $e(Kh)}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let D_;const Zl=t=>D_=t,k_=Symbol();function Vu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var po;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(po||(po={}));function GT(){const t=hy(!0),e=t.run(()=>Ie({}));let n=[],r=[];const s=Uh({install(i){Zl(s),s._a=i,i.provide(k_,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const O_=()=>{};function Yp(t,e,n,r=O_){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&dy()&&R0(s),s}function qs(t,...e){t.slice().forEach(n=>{n(...e)})}const KT=t=>t(),Qp=Symbol(),nu=Symbol();function Mu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Vu(s)&&Vu(r)&&t.hasOwnProperty(n)&&!ct(r)&&!Lr(r)?t[n]=Mu(s,r):t[n]=r}return t}const YT=Symbol();function QT(t){return!Vu(t)||!Object.prototype.hasOwnProperty.call(t,YT)}const{assign:Sr}=Object;function XT(t){return!!(ct(t)&&t.effect)}function JT(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const h=J0(n.state.value[t]);return Sr(h,i,Object.keys(o||{}).reduce((m,p)=>(m[p]=Uh(Ce(()=>{Zl(n);const _=n._s.get(t);return o[p].call(_,_)})),m),{}))}return l=N_(t,u,e,n,r,!0),l}function N_(t,e,n={},r,s,i){let o;const c=Sr({actions:{}},n),l={deep:!0};let u,h,m=[],p=[],_;const D=r.state.value[t];!i&&!D&&(r.state.value[t]={}),Ie({});let I;function w(b){let E;u=h=!1,typeof b=="function"?(b(r.state.value[t]),E={type:po.patchFunction,storeId:t,events:_}):(Mu(r.state.value[t],b),E={type:po.patchObject,payload:b,storeId:t,events:_});const P=I=Symbol();Hl().then(()=>{I===P&&(u=!0)}),h=!0,qs(m,E,r.state.value[t])}const k=i?function(){const{state:E}=n,P=E?E():{};this.$patch(N=>{Sr(N,P)})}:O_;function x(){o.stop(),m=[],p=[],r._s.delete(t)}const L=(b,E="")=>{if(Qp in b)return b[nu]=E,b;const P=function(){Zl(r);const N=Array.from(arguments),R=[],S=[];function Ne(F){R.push(F)}function we(F){S.push(F)}qs(p,{args:N,name:P[nu],store:Y,after:Ne,onError:we});let Z;try{Z=b.apply(this&&this.$id===t?this:Y,N)}catch(F){throw qs(S,F),F}return Z instanceof Promise?Z.then(F=>(qs(R,F),F)).catch(F=>(qs(S,F),Promise.reject(F))):(qs(R,Z),Z)};return P[Qp]=!0,P[nu]=E,P},U={_p:r,$id:t,$onAction:Yp.bind(null,p),$patch:w,$reset:k,$subscribe(b,E={}){const P=Yp(m,b,E.detached,()=>N()),N=o.run(()=>et(()=>r.state.value[t],R=>{(E.flush==="sync"?h:u)&&b({storeId:t,type:po.direct,events:_},R)},Sr({},l,E)));return P},$dispose:x},Y=Un(U);r._s.set(t,Y);const C=(r._a&&r._a.runWithContext||KT)(()=>r._e.run(()=>(o=hy()).run(()=>e({action:L}))));for(const b in C){const E=C[b];if(ct(E)&&!XT(E)||Lr(E))i||(D&&QT(E)&&(ct(E)?E.value=D[b]:Mu(E,D[b])),r.state.value[t][b]=E);else if(typeof E=="function"){const P=L(E,b);C[b]=P,c.actions[b]=E}}return Sr(Y,C),Sr(Ue(Y),C),Object.defineProperty(Y,"$state",{get:()=>r.state.value[t],set:b=>{w(E=>{Sr(E,b)})}}),r._p.forEach(b=>{Sr(Y,o.run(()=>b({store:Y,app:r._a,pinia:r,options:c})))}),D&&i&&n.hydrate&&n.hydrate(Y.$state,D),u=!0,h=!0,Y}/*! #__NO_SIDE_EFFECTS__ */function x_(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const l=kE();return o=o||(l?$e(k_,null):null),o&&Zl(o),o=D_,o._s.has(t)||(s?N_(t,e,r,o):JT(t,r,o)),o._s.get(t)}return i.$id=t,i}const ZT=()=>{};var Xp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},eI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},M_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,m=(i&3)<<4|c>>4;let p=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(p=64)),r.push(n[h],n[m],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(V_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||m==null)throw new tI;const p=i<<2|c>>4;if(r.push(p),u!==64){const _=c<<4&240|u>>2;if(r.push(_),m!==64){const D=u<<6&192|m;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nI=function(t){const e=V_(t);return M_.encodeByteArray(e,!0)},fl=function(t){return nI(t).replace(/\./g,"")},L_=function(t){try{return M_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sI=()=>rI().__FIREBASE_DEFAULTS__,iI=()=>{if(typeof process>"u"||typeof Xp>"u")return;const t=Xp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&L_(t[1]);return e&&JSON.parse(e)},ec=()=>{try{return ZT()||sI()||iI()||oI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},F_=t=>{var e,n;return(n=(e=ec())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},aI=t=>{const e=F_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},$_=()=>{var t;return(t=ec())===null||t===void 0?void 0:t.config},U_=t=>{var e;return(e=ec())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function wi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function B_(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function cI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fl(JSON.stringify(n)),fl(JSON.stringify(o)),""].join(".")}const mo={};function uI(){const t={prod:[],emulator:[]};for(const e of Object.keys(mo))mo[e]?t.emulator.push(e):t.prod.push(e);return t}function hI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Jp=!1;function j_(t,e){if(typeof window>"u"||typeof document>"u"||!wi(window.location.host)||mo[t]===e||mo[t]||Jp)return;mo[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=uI().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function c(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,_){p.setAttribute("width","24"),p.setAttribute("id",_),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Jp=!0,o()},p}function h(p,_){p.setAttribute("id",_),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function m(){const p=hI(r),_=n("text"),D=document.getElementById(_)||document.createElement("span"),I=n("learnmore"),w=document.getElementById(I)||document.createElement("a"),k=n("preprendIcon"),x=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const L=p.element;c(L),h(w,I);const U=u();l(x,k),L.append(x,D,w,U),document.body.appendChild(L)}i?(D.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function fI(){var t;const e=(t=ec())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yI(){const t=Ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _I(){return!fI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vI(){try{return typeof indexedDB=="object"}catch{return!1}}function bI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI="FirebaseError";class fr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=EI,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ko.prototype.create)}}class Ko{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?wI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new fr(s,c,r)}}function wI(t,e){return t.replace(TI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const TI=/\{\$([^}]+)}/g;function II(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Is(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Zp(i)&&Zp(o)){if(!Is(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Zp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Xi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function SI(t,e){const n=new AI(t,e);return n.subscribe.bind(n)}class AI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");PI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ru),s.error===void 0&&(s.error=ru),s.complete===void 0&&(s.complete=ru);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ru(){}/**
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
 */function ot(t){return t&&t._delegate?t._delegate:t}class Ss{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class CI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DI(e))try{this.getOrInitializeService({instanceIdentifier:ms})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ms){return this.instances.has(e)}getOptions(e=ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ms){return this.component?this.component.multipleInstances?e:ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RI(t){return t===ms?void 0:t}function DI(t){return t.instantiationMode==="EAGER"}/**
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
 */class kI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(xe||(xe={}));const OI={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},NI=xe.INFO,xI={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},VI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=xI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yh{constructor(e){this.name=e,this._logLevel=NI,this._logHandler=VI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const MI=(t,e)=>e.some(n=>t instanceof n);let em,tm;function LI(){return em||(em=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FI(){return tm||(tm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const q_=new WeakMap,Lu=new WeakMap,H_=new WeakMap,su=new WeakMap,Qh=new WeakMap;function $I(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Fr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&q_.set(n,t)}).catch(()=>{}),Qh.set(e,t),e}function UI(t){if(Lu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Lu.set(t,e)}let Fu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||H_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BI(t){Fu=t(Fu)}function jI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(iu(this),e,...n);return H_.set(r,e.sort?e.sort():[e]),Fr(r)}:FI().includes(t)?function(...e){return t.apply(iu(this),e),Fr(q_.get(this))}:function(...e){return Fr(t.apply(iu(this),e))}}function qI(t){return typeof t=="function"?jI(t):(t instanceof IDBTransaction&&UI(t),MI(t,LI())?new Proxy(t,Fu):t)}function Fr(t){if(t instanceof IDBRequest)return $I(t);if(su.has(t))return su.get(t);const e=qI(t);return e!==t&&(su.set(t,e),Qh.set(e,t)),e}const iu=t=>Qh.get(t);function HI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Fr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Fr(o.result),l.oldVersion,l.newVersion,Fr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const zI=["get","getKey","getAll","getAllKeys","count"],WI=["put","add","delete","clear"],ou=new Map;function nm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ou.get(e))return ou.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=WI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||zI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return ou.set(e,i),i}BI(t=>({...t,get:(e,n,r)=>nm(e,n)||t.get(e,n,r),has:(e,n)=>!!nm(e,n)||t.has(e,n)}));/**
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
 */class GI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KI(t){const e=t.getComponent();return e?.type==="VERSION"}const $u="@firebase/app",rm="0.13.2";/**
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
 */const or=new Yh("@firebase/app"),YI="@firebase/app-compat",QI="@firebase/analytics-compat",XI="@firebase/analytics",JI="@firebase/app-check-compat",ZI="@firebase/app-check",eS="@firebase/auth",tS="@firebase/auth-compat",nS="@firebase/database",rS="@firebase/data-connect",sS="@firebase/database-compat",iS="@firebase/functions",oS="@firebase/functions-compat",aS="@firebase/installations",lS="@firebase/installations-compat",cS="@firebase/messaging",uS="@firebase/messaging-compat",hS="@firebase/performance",dS="@firebase/performance-compat",fS="@firebase/remote-config",pS="@firebase/remote-config-compat",mS="@firebase/storage",gS="@firebase/storage-compat",yS="@firebase/firestore",_S="@firebase/ai",vS="@firebase/firestore-compat",bS="firebase",ES="11.10.0";/**
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
 */const Uu="[DEFAULT]",wS={[$u]:"fire-core",[YI]:"fire-core-compat",[XI]:"fire-analytics",[QI]:"fire-analytics-compat",[ZI]:"fire-app-check",[JI]:"fire-app-check-compat",[eS]:"fire-auth",[tS]:"fire-auth-compat",[nS]:"fire-rtdb",[rS]:"fire-data-connect",[sS]:"fire-rtdb-compat",[iS]:"fire-fn",[oS]:"fire-fn-compat",[aS]:"fire-iid",[lS]:"fire-iid-compat",[cS]:"fire-fcm",[uS]:"fire-fcm-compat",[hS]:"fire-perf",[dS]:"fire-perf-compat",[fS]:"fire-rc",[pS]:"fire-rc-compat",[mS]:"fire-gcs",[gS]:"fire-gcs-compat",[yS]:"fire-fst",[vS]:"fire-fst-compat",[_S]:"fire-vertex","fire-js":"fire-js",[bS]:"fire-js-all"};/**
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
 */const pl=new Map,TS=new Map,Bu=new Map;function sm(t,e){try{t.container.addComponent(e)}catch(n){or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fi(t){const e=t.name;if(Bu.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;Bu.set(e,t);for(const n of pl.values())sm(n,t);for(const n of TS.values())sm(n,t);return!0}function Xh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function en(t){return t==null?!1:t.settings!==void 0}/**
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
 */const IS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$r=new Ko("app","Firebase",IS);/**
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
 */class SS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $r.create("app-deleted",{appName:this._name})}}/**
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
 */const Ti=ES;function z_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Uu,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw $r.create("bad-app-name",{appName:String(s)});if(n||(n=$_()),!n)throw $r.create("no-options");const i=pl.get(s);if(i){if(Is(n,i.options)&&Is(r,i.config))return i;throw $r.create("duplicate-app",{appName:s})}const o=new kI(s);for(const l of Bu.values())o.addComponent(l);const c=new SS(n,r,o);return pl.set(s,c),c}function W_(t=Uu){const e=pl.get(t);if(!e&&t===Uu&&$_())return z_();if(!e)throw $r.create("no-app",{appName:t});return e}function Ur(t,e,n){var r;let s=(r=wS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(c.join(" "));return}fi(new Ss(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const AS="firebase-heartbeat-database",PS=1,No="firebase-heartbeat-store";let au=null;function G_(){return au||(au=HI(AS,PS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(No)}catch(n){console.warn(n)}}}}).catch(t=>{throw $r.create("idb-open",{originalErrorMessage:t.message})})),au}async function CS(t){try{const n=(await G_()).transaction(No),r=await n.objectStore(No).get(K_(t));return await n.done,r}catch(e){if(e instanceof fr)or.warn(e.message);else{const n=$r.create("idb-get",{originalErrorMessage:e?.message});or.warn(n.message)}}}async function im(t,e){try{const r=(await G_()).transaction(No,"readwrite");await r.objectStore(No).put(e,K_(t)),await r.done}catch(n){if(n instanceof fr)or.warn(n.message);else{const r=$r.create("idb-set",{originalErrorMessage:n?.message});or.warn(r.message)}}}function K_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RS=1024,DS=30;class kS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=om();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>DS){const o=xS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){or.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=om(),{heartbeatsToSend:r,unsentEntries:s}=OS(this._heartbeatsCache.heartbeats),i=fl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return or.warn(n),""}}}function om(){return new Date().toISOString().substring(0,10)}function OS(t,e=RS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),am(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),am(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vI()?bI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CS(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return im(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return im(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function am(t){return fl(JSON.stringify({version:2,heartbeats:t})).length}function xS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function VS(t){fi(new Ss("platform-logger",e=>new GI(e),"PRIVATE")),fi(new Ss("heartbeat",e=>new kS(e),"PRIVATE")),Ur($u,rm,t),Ur($u,rm,"esm2017"),Ur("fire-js","")}VS("");function Jh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Y_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MS=Y_,Q_=new Ko("auth","Firebase",Y_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=new Yh("@firebase/auth");function LS(t,...e){ml.logLevel<=xe.WARN&&ml.warn(`Auth (${Ti}): ${t}`,...e)}function Wa(t,...e){ml.logLevel<=xe.ERROR&&ml.error(`Auth (${Ti}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,...e){throw ed(t,...e)}function vn(t,...e){return ed(t,...e)}function Zh(t,e,n){const r=Object.assign(Object.assign({},MS()),{[e]:n});return new Ko("auth","Firebase",r).create(e,{appName:t.name})}function nr(t){return Zh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function FS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&dn(t,"argument-error"),Zh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ed(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Q_.create(t,...e)}function ve(t,e,...n){if(!t)throw ed(e,...n)}function Zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wa(e),new Error(e)}function ar(t,e){t||Zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $S(){return lm()==="http:"||lm()==="https:"}function lm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($S()||mI()||"connection"in navigator)?navigator.onLine:!0}function BS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,ar(n>e,"Short delay should be less than long delay!"),this.isMobile=dI()||gI()}get(){return US()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t,e){ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],HS=new Qo(3e4,6e4);function jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Tn(t,e,n,r,s={}){return J_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Yo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return pI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&wi(t.emulatorConfig.host)&&(u.credentials="include"),X_.fetch()(await Z_(t,t.config.apiHost,n,c),u)})}async function J_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jS),e);try{const s=new WS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ka(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ka(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ka(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ka(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Zh(t,h,u);dn(t,h)}}catch(s){if(s instanceof fr)throw s;dn(t,"network-request-failed",{message:String(s)})}}async function Xo(t,e,n,r,s={}){const i=await Tn(t,e,n,r,s);return"mfaPendingCredential"in i&&dn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Z_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?td(t.config,s):`${t.config.apiScheme}://${s}`;return qS.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function zS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class WS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),HS.get())})}}function ka(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=vn(t,e,r);return s.customData._tokenResponse=n,s}function cm(t){return t!==void 0&&t.enterprise!==void 0}class GS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function KS(t,e){return Tn(t,"GET","/v2/recaptchaConfig",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(t,e){return Tn(t,"POST","/v1/accounts:delete",e)}async function gl(t,e){return Tn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QS(t,e=!1){const n=ot(t),r=await n.getIdToken(e),s=nd(r);ve(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:go(lu(s.auth_time)),issuedAtTime:go(lu(s.iat)),expirationTime:go(lu(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function lu(t){return Number(t)*1e3}function nd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wa("JWT malformed, contained fewer than 3 sections"),null;try{const s=L_(n);return s?JSON.parse(s):(Wa("Failed to decode base64 JWT payload"),null)}catch(s){return Wa("Caught error parsing JWT payload as JSON",s?.toString()),null}}function um(t){const e=nd(t);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof fr&&XS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function XS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=go(this.lastLoginAt),this.creationTime=go(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function yl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await pi(t,gl(n,{idToken:r}));ve(s?.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ev(i.providerUserInfo):[],c=eA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!c?.length,h=l?u:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new qu(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,m)}async function ZS(t){const e=ot(t);await yl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ev(t){return t.map(e=>{var{providerId:n}=e,r=Jh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(t,e){const n=await J_(t,{},async()=>{const r=Yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Z_(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&wi(t.emulatorConfig.host)&&(l.credentials="include"),X_.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nA(t,e){return Tn(t,"POST","/v2/accounts:revokeToken",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):um(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const n=um(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await tA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ri;return r&&(ve(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ve(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ve(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ri,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t,e){ve(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Jh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await pi(this,this.stsTokenManager.getToken(this.auth,e));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QS(this,e)}reload(){return ZS(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(en(this.auth.app))return Promise.reject(nr(this.auth));const e=await this.getIdToken();return await pi(this,YS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,h;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,D=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(c=n.tenantId)!==null&&c!==void 0?c:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,k=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:L,emailVerified:U,isAnonymous:Y,providerData:X,stsTokenManager:C}=n;ve(L&&C,e,"internal-error");const b=ri.fromJSON(this.name,C);ve(typeof L=="string",e,"internal-error"),Tr(m,e.name),Tr(p,e.name),ve(typeof U=="boolean",e,"internal-error"),ve(typeof Y=="boolean",e,"internal-error"),Tr(_,e.name),Tr(D,e.name),Tr(I,e.name),Tr(w,e.name),Tr(k,e.name),Tr(x,e.name);const E=new yn({uid:L,auth:e,email:p,emailVerified:U,displayName:m,isAnonymous:Y,photoURL:D,phoneNumber:_,tenantId:I,stsTokenManager:b,createdAt:k,lastLoginAt:x});return X&&Array.isArray(X)&&(E.providerData=X.map(P=>Object.assign({},P))),w&&(E._redirectEventId=w),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new ri;s.updateFromServerResponse(n);const i=new yn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await yl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ve(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ev(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new ri;c.updateFromIdToken(r);const l=new yn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new qu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=new Map;function er(t){ar(t instanceof Function,"Expected a class definition");let e=hm.get(t);return e?(ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hm.set(t,e),e)}/**
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
 */class tv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tv.type="NONE";const dm=tv;/**
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
 */function Ga(t,e,n){return`firebase:${t}:${e}:${n}`}class si{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ga(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ga("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await gl(this.auth,{idToken:e}).catch(()=>{});return n?yn._fromGetAccountInfoResponse(this.auth,n,e):null}return yn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new si(er(dm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||er(dm);const o=Ga(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const h=await u._get(o);if(h){let m;if(typeof h=="string"){const p=await gl(e,{idToken:h}).catch(()=>{});if(!p)break;m=await yn._fromGetAccountInfoResponse(e,p,h)}else m=yn._fromJSON(e,h);u!==i&&(c=m),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new si(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new si(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(av(e))return"Blackberry";if(lv(e))return"Webos";if(rv(e))return"Safari";if((e.includes("chrome/")||sv(e))&&!e.includes("edge/"))return"Chrome";if(ov(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function nv(t=Ut()){return/firefox\//i.test(t)}function rv(t=Ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sv(t=Ut()){return/crios\//i.test(t)}function iv(t=Ut()){return/iemobile/i.test(t)}function ov(t=Ut()){return/android/i.test(t)}function av(t=Ut()){return/blackberry/i.test(t)}function lv(t=Ut()){return/webos/i.test(t)}function rd(t=Ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rA(t=Ut()){var e;return rd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sA(){return yI()&&document.documentMode===10}function cv(t=Ut()){return rd(t)||ov(t)||lv(t)||av(t)||/windows phone/i.test(t)||iv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(t,e=[]){let n;switch(t){case"Browser":n=fm(Ut());break;case"Worker":n=`${fm(Ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ti}/${r}`}/**
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
 */class iA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function oA(t,e={}){return Tn(t,"GET","/v2/passwordPolicy",jn(t,e))}/**
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
 */const aA=6;class lA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:aA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pm(this),this.idTokenSubscription=new pm(this),this.beforeStateQueue=new iA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Q_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=er(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await si.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await gl(this,{idToken:e}),r=await yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(en(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yl(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(en(this.app))return Promise.reject(nr(this));const n=e?ot(e):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return en(this.app)?Promise.reject(nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return en(this.app)?Promise.reject(nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oA(this),n=new lA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ko("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&er(e)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await si.create(this,[er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(en(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&LS(`Error while retrieving App Check token: ${n.error}`),n?.token}}function pr(t){return ot(t)}class pm{constructor(e){this.auth=e,this.observer=null,this.addObserver=SI(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uA(t){tc=t}function hv(t){return tc.loadJS(t)}function hA(){return tc.recaptchaEnterpriseScript}function dA(){return tc.gapiScript}function fA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class pA{constructor(){this.enterprise=new mA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class mA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const gA="recaptcha-enterprise",dv="NO_RECAPTCHA";class yA{constructor(e){this.type=gA,this.auth=pr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{KS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new GS(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;cm(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(dv)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new pA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&cm(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=hA();l.length!==0&&(l+=c),hv(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function mm(t,e,n,r=!1,s=!1){const i=new yA(t);let o;if(s)o=dv;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function _l(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await mm(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await mm(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t,e){const n=Xh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Is(i,e??{}))return s;dn(s,"already-initialized")}return n.initialize({options:e})}function vA(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(er);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function bA(t,e,n){const r=pr(t);ve(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=fv(e),{host:o,port:c}=EA(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ve(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ve(Is(u,r.config.emulator)&&Is(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,wi(o)?(B_(`${i}//${o}${l}`),j_("Auth",!0)):wA()}function fv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function EA(t){const e=fv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:gm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:gm(o)}}}function gm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,n){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(t,e){return Tn(t,"POST","/v1/accounts:resetPassword",jn(t,e))}async function IA(t,e){return Tn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(t,e){return Xo(t,"POST","/v1/accounts:signInWithPassword",jn(t,e))}async function AA(t,e){return Tn(t,"POST","/v1/accounts:sendOobCode",jn(t,e))}async function PA(t,e){return AA(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CA(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}async function RA(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends sd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new xo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _l(e,n,"signInWithPassword",SA);case"emailLink":return CA(e,{email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _l(e,r,"signUpPassword",IA);case"emailLink":return RA(e,{idToken:n,email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t,e){return Xo(t,"POST","/v1/accounts:signInWithIdp",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA="http://localhost";class As extends sd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new As(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Jh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new As(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ii(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ii(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ii(e,n)}buildRequest(){const e={requestUri:DA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OA(t){const e=Qi(Xi(t)).link,n=e?Qi(Xi(e)).deep_link_id:null,r=Qi(Xi(t)).deep_link_id;return(r?Qi(Xi(r)).link:null)||r||n||e||t}class id{constructor(e){var n,r,s,i,o,c;const l=Qi(Xi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,m=kA((s=l.mode)!==null&&s!==void 0?s:null);ve(u&&h&&m,"argument-error"),this.apiKey=u,this.operation=m,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=OA(e);try{return new id(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.providerId=Ii.PROVIDER_ID}static credential(e,n){return xo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=id.parseLink(n);return ve(r,"argument-error"),xo._fromEmailAndCode(e,r.code,r.tenantId)}}Ii.PROVIDER_ID="password";Ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Jo extends od{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends Jo{constructor(){super("facebook.com")}static credential(e){return As._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";kr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return As._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends Jo{constructor(){super("github.com")}static credential(e){return As._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.GITHUB_SIGN_IN_METHOD="github.com";Or.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends Jo{constructor(){super("twitter.com")}static credential(e,n){return As._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nr.credential(n,r)}catch{return null}}}Nr.TWITTER_SIGN_IN_METHOD="twitter.com";Nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NA(t,e){return Xo(t,"POST","/v1/accounts:signUp",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await yn._fromIdTokenResponse(e,r,s),o=ym(r);return new Ps({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ym(r);return new Ps({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ym(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends fr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,vl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new vl(e,n,r,s)}}function pv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?vl._fromErrorAndOperation(t,i,e,r):i})}async function xA(t,e,n=!1){const r=await pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ps._forOperation(t,"link",r)}/**
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
 */async function VA(t,e,n=!1){const{auth:r}=t;if(en(r.app))return Promise.reject(nr(r));const s="reauthenticate";try{const i=await pi(t,pv(r,s,e,t),n);ve(i.idToken,r,"internal-error");const o=nd(i.idToken);ve(o,r,"internal-error");const{sub:c}=o;return ve(t.uid===c,r,"user-mismatch"),Ps._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&dn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mv(t,e,n=!1){if(en(t.app))return Promise.reject(nr(t));const r="signIn",s=await pv(t,r,e),i=await Ps._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function MA(t,e){return mv(pr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ad(t){const e=pr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function LA(t,e,n){const r=pr(t);await _l(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",PA)}async function FA(t,e,n){await TA(ot(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ad(t),r})}async function $A(t,e,n){if(en(t.app))return Promise.reject(nr(t));const r=pr(t),o=await _l(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",NA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ad(t),l}),c=await Ps._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function UA(t,e,n){return en(t.app)?Promise.reject(nr(t)):MA(ot(t),Ii.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ad(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(t,e){return Tn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ot(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await pi(r,BA(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function qA(t,e,n,r){return ot(t).onIdTokenChanged(e,n,r)}function HA(t,e,n){return ot(t).beforeAuthStateChanged(e,n)}function gv(t,e,n,r){return ot(t).onAuthStateChanged(e,n,r)}function zA(t){return ot(t).signOut()}const bl="__sak";/**
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
 */class yv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bl,"1"),this.storage.removeItem(bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=1e3,GA=10;class _v extends yv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);sA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,GA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},WA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_v.type="LOCAL";const KA=_v;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv extends yv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vv.type="SESSION";const bv=vv;/**
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
 */function YA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new nc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await YA(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class QA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=ld("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const p=m;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return window}function XA(t){Nn().location.href=t}/**
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
 */function Ev(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function JA(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZA(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eP(){return Ev()?self:null}/**
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
 */const wv="firebaseLocalStorageDb",tP=1,El="firebaseLocalStorage",Tv="fbase_key";class Zo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rc(t,e){return t.transaction([El],e?"readwrite":"readonly").objectStore(El)}function nP(){const t=indexedDB.deleteDatabase(wv);return new Zo(t).toPromise()}function Hu(){const t=indexedDB.open(wv,tP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(El,{keyPath:Tv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(El)?e(r):(r.close(),await nP(),e(await Hu()))})})}async function _m(t,e,n){const r=rc(t,!0).put({[Tv]:e,value:n});return new Zo(r).toPromise()}async function rP(t,e){const n=rc(t,!1).get(e),r=await new Zo(n).toPromise();return r===void 0?null:r.value}function vm(t,e){const n=rc(t,!0).delete(e);return new Zo(n).toPromise()}const sP=800,iP=3;class Iv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ev()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nc._getInstance(eP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await JA(),!this.activeServiceWorker)return;this.sender=new QA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hu();return await _m(e,bl,"1"),await vm(e,bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_m(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=rc(s,!1).getAll();return new Zo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Iv.type="LOCAL";const oP=Iv;new Qo(3e4,6e4);/**
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
 */function Sv(t,e){return e?er(e):(ve(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class cd extends sd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aP(t){return mv(t.auth,new cd(t),t.bypassAuthState)}function lP(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),VA(n,new cd(t),t.bypassAuthState)}async function cP(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),xA(n,new cd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aP;case"linkViaPopup":case"linkViaRedirect":return cP;case"reauthViaPopup":case"reauthViaRedirect":return lP;default:dn(this.auth,"internal-error")}}resolve(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=new Qo(2e3,1e4);async function hP(t,e,n){if(en(t.app))return Promise.reject(vn(t,"operation-not-supported-in-this-environment"));const r=pr(t);FS(t,e,od);const s=Sv(r,n);return new ys(r,"signInViaPopup",e,s).executeNotNull()}class ys extends Av{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ys.currentPopupAction&&ys.currentPopupAction.cancel(),ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){ar(this.filter.length===1,"Popup operations only handle one event");const e=ld();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uP.get())};e()}}ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP="pendingRedirect",Ka=new Map;class fP extends Av{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ka.get(this.auth._key());if(!e){try{const r=await pP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ka.set(this.auth._key(),e)}return this.bypassAuthState||Ka.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pP(t,e){const n=yP(e),r=gP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function mP(t,e){Ka.set(t._key(),e)}function gP(t){return er(t._redirectPersistence)}function yP(t){return Ga(dP,t.config.apiKey,t.name)}async function _P(t,e,n=!1){if(en(t.app))return Promise.reject(nr(t));const r=pr(t),s=Sv(r,e),o=await new fP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=10*60*1e3;class bP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Pv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vP&&this.cachedEventUids.clear(),this.cachedEventUids.has(bm(e))}saveEventToCache(e){this.cachedEventUids.add(bm(e)),this.lastProcessedEventTime=Date.now()}}function bm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pv({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function EP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wP(t,e={}){return Tn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IP=/^https?/;async function SP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wP(t);for(const n of e)try{if(AP(n))return}catch{}dn(t,"unauthorized-domain")}function AP(t){const e=ju(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IP.test(n))return!1;if(TP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const PP=new Qo(3e4,6e4);function Em(){const t=Nn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function CP(t){return new Promise((e,n)=>{var r,s,i;function o(){Em(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Em(),n(vn(t,"network-request-failed"))},timeout:PP.get()})}if(!((s=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Nn().gapi)===null||i===void 0)&&i.load)o();else{const c=fA("iframefcb");return Nn()[c]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},hv(`${dA()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Ya=null,e})}let Ya=null;function RP(t){return Ya=Ya||CP(t),Ya}/**
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
 */const DP=new Qo(5e3,15e3),kP="__/auth/iframe",OP="emulator/auth/iframe",NP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VP(t){const e=t.config;ve(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?td(e,OP):`https://${t.config.authDomain}/${kP}`,r={apiKey:e.apiKey,appName:t.name,v:Ti},s=xP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Yo(r).slice(1)}`}async function MP(t){const e=await RP(t),n=Nn().gapi;return ve(n,t,"internal-error"),e.open({where:document.body,url:VP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),c=Nn().setTimeout(()=>{i(o)},DP.get());function l(){Nn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const LP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FP=500,$P=600,UP="_blank",BP="http://localhost";class wm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jP(t,e,n,r=FP,s=$P){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},LP),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ut().toLowerCase();n&&(c=sv(u)?UP:n),nv(u)&&(e=e||BP,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[_,D])=>`${p}${_}=${D},`,"");if(rA(u)&&c!=="_self")return qP(e||"",c),new wm(null);const m=window.open(e||"",c,h);ve(m,t,"popup-blocked");try{m.focus()}catch{}return new wm(m)}function qP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const HP="__/auth/handler",zP="emulator/auth/handler",WP=encodeURIComponent("fac");async function Tm(t,e,n,r,s,i){ve(t.config.authDomain,t,"auth-domain-config-required"),ve(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ti,eventId:s};if(e instanceof od){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",II(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries({}))o[h]=m}if(e instanceof Jo){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await t._getAppCheckToken(),u=l?`#${WP}=${encodeURIComponent(l)}`:"";return`${GP(t)}?${Yo(c).slice(1)}${u}`}function GP({config:t}){return t.emulator?td(t,zP):`https://${t.authDomain}/${HP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="webStorageSupport";class KP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bv,this._completeRedirectFn=_P,this._overrideRedirectResult=mP}async _openPopup(e,n,r,s){var i;ar((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Tm(e,n,r,ju(),s);return jP(e,o,ld())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Tm(e,n,r,ju(),s);return XA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ar(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await MP(e),r=new bP(e);return n.register("authEvent",s=>(ve(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cu,{type:cu},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[cu];o!==void 0&&n(!!o),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cv()||rv()||rd()}}const YP=KP;var Im="@firebase/auth",Sm="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JP(t){fi(new Ss("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ve(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uv(t)},u=new cA(r,s,i,l);return vA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fi(new Ss("auth-internal",e=>{const n=pr(e.getProvider("auth").getImmediate());return(r=>new QP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ur(Im,Sm,XP(t)),Ur(Im,Sm,"esm2017")}/**
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
 */const ZP=5*60,eC=U_("authIdTokenMaxAge")||ZP;let Am=null;const tC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eC)return;const s=n?.token;Am!==s&&(Am=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function nC(t=W_()){const e=Xh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_A(t,{popupRedirectResolver:YP,persistence:[oP,KA,bv]}),r=U_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=tC(i.toString());HA(n,o,()=>o(n.currentUser)),qA(n,c=>o(c))}}const s=F_("auth");return s&&bA(n,`http://${s}`),n}function rC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}uA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=vn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",rC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JP("Browser");var Pm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Br,Cv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,b){function E(){}E.prototype=b.prototype,C.D=b.prototype,C.prototype=new E,C.prototype.constructor=C,C.C=function(P,N,R){for(var S=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)S[Ne-2]=arguments[Ne];return b.prototype[N].apply(P,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(C,b,E){E||(E=0);var P=Array(16);if(typeof b=="string")for(var N=0;16>N;++N)P[N]=b.charCodeAt(E++)|b.charCodeAt(E++)<<8|b.charCodeAt(E++)<<16|b.charCodeAt(E++)<<24;else for(N=0;16>N;++N)P[N]=b[E++]|b[E++]<<8|b[E++]<<16|b[E++]<<24;b=C.g[0],E=C.g[1],N=C.g[2];var R=C.g[3],S=b+(R^E&(N^R))+P[0]+3614090360&4294967295;b=E+(S<<7&4294967295|S>>>25),S=R+(N^b&(E^N))+P[1]+3905402710&4294967295,R=b+(S<<12&4294967295|S>>>20),S=N+(E^R&(b^E))+P[2]+606105819&4294967295,N=R+(S<<17&4294967295|S>>>15),S=E+(b^N&(R^b))+P[3]+3250441966&4294967295,E=N+(S<<22&4294967295|S>>>10),S=b+(R^E&(N^R))+P[4]+4118548399&4294967295,b=E+(S<<7&4294967295|S>>>25),S=R+(N^b&(E^N))+P[5]+1200080426&4294967295,R=b+(S<<12&4294967295|S>>>20),S=N+(E^R&(b^E))+P[6]+2821735955&4294967295,N=R+(S<<17&4294967295|S>>>15),S=E+(b^N&(R^b))+P[7]+4249261313&4294967295,E=N+(S<<22&4294967295|S>>>10),S=b+(R^E&(N^R))+P[8]+1770035416&4294967295,b=E+(S<<7&4294967295|S>>>25),S=R+(N^b&(E^N))+P[9]+2336552879&4294967295,R=b+(S<<12&4294967295|S>>>20),S=N+(E^R&(b^E))+P[10]+4294925233&4294967295,N=R+(S<<17&4294967295|S>>>15),S=E+(b^N&(R^b))+P[11]+2304563134&4294967295,E=N+(S<<22&4294967295|S>>>10),S=b+(R^E&(N^R))+P[12]+1804603682&4294967295,b=E+(S<<7&4294967295|S>>>25),S=R+(N^b&(E^N))+P[13]+4254626195&4294967295,R=b+(S<<12&4294967295|S>>>20),S=N+(E^R&(b^E))+P[14]+2792965006&4294967295,N=R+(S<<17&4294967295|S>>>15),S=E+(b^N&(R^b))+P[15]+1236535329&4294967295,E=N+(S<<22&4294967295|S>>>10),S=b+(N^R&(E^N))+P[1]+4129170786&4294967295,b=E+(S<<5&4294967295|S>>>27),S=R+(E^N&(b^E))+P[6]+3225465664&4294967295,R=b+(S<<9&4294967295|S>>>23),S=N+(b^E&(R^b))+P[11]+643717713&4294967295,N=R+(S<<14&4294967295|S>>>18),S=E+(R^b&(N^R))+P[0]+3921069994&4294967295,E=N+(S<<20&4294967295|S>>>12),S=b+(N^R&(E^N))+P[5]+3593408605&4294967295,b=E+(S<<5&4294967295|S>>>27),S=R+(E^N&(b^E))+P[10]+38016083&4294967295,R=b+(S<<9&4294967295|S>>>23),S=N+(b^E&(R^b))+P[15]+3634488961&4294967295,N=R+(S<<14&4294967295|S>>>18),S=E+(R^b&(N^R))+P[4]+3889429448&4294967295,E=N+(S<<20&4294967295|S>>>12),S=b+(N^R&(E^N))+P[9]+568446438&4294967295,b=E+(S<<5&4294967295|S>>>27),S=R+(E^N&(b^E))+P[14]+3275163606&4294967295,R=b+(S<<9&4294967295|S>>>23),S=N+(b^E&(R^b))+P[3]+4107603335&4294967295,N=R+(S<<14&4294967295|S>>>18),S=E+(R^b&(N^R))+P[8]+1163531501&4294967295,E=N+(S<<20&4294967295|S>>>12),S=b+(N^R&(E^N))+P[13]+2850285829&4294967295,b=E+(S<<5&4294967295|S>>>27),S=R+(E^N&(b^E))+P[2]+4243563512&4294967295,R=b+(S<<9&4294967295|S>>>23),S=N+(b^E&(R^b))+P[7]+1735328473&4294967295,N=R+(S<<14&4294967295|S>>>18),S=E+(R^b&(N^R))+P[12]+2368359562&4294967295,E=N+(S<<20&4294967295|S>>>12),S=b+(E^N^R)+P[5]+4294588738&4294967295,b=E+(S<<4&4294967295|S>>>28),S=R+(b^E^N)+P[8]+2272392833&4294967295,R=b+(S<<11&4294967295|S>>>21),S=N+(R^b^E)+P[11]+1839030562&4294967295,N=R+(S<<16&4294967295|S>>>16),S=E+(N^R^b)+P[14]+4259657740&4294967295,E=N+(S<<23&4294967295|S>>>9),S=b+(E^N^R)+P[1]+2763975236&4294967295,b=E+(S<<4&4294967295|S>>>28),S=R+(b^E^N)+P[4]+1272893353&4294967295,R=b+(S<<11&4294967295|S>>>21),S=N+(R^b^E)+P[7]+4139469664&4294967295,N=R+(S<<16&4294967295|S>>>16),S=E+(N^R^b)+P[10]+3200236656&4294967295,E=N+(S<<23&4294967295|S>>>9),S=b+(E^N^R)+P[13]+681279174&4294967295,b=E+(S<<4&4294967295|S>>>28),S=R+(b^E^N)+P[0]+3936430074&4294967295,R=b+(S<<11&4294967295|S>>>21),S=N+(R^b^E)+P[3]+3572445317&4294967295,N=R+(S<<16&4294967295|S>>>16),S=E+(N^R^b)+P[6]+76029189&4294967295,E=N+(S<<23&4294967295|S>>>9),S=b+(E^N^R)+P[9]+3654602809&4294967295,b=E+(S<<4&4294967295|S>>>28),S=R+(b^E^N)+P[12]+3873151461&4294967295,R=b+(S<<11&4294967295|S>>>21),S=N+(R^b^E)+P[15]+530742520&4294967295,N=R+(S<<16&4294967295|S>>>16),S=E+(N^R^b)+P[2]+3299628645&4294967295,E=N+(S<<23&4294967295|S>>>9),S=b+(N^(E|~R))+P[0]+4096336452&4294967295,b=E+(S<<6&4294967295|S>>>26),S=R+(E^(b|~N))+P[7]+1126891415&4294967295,R=b+(S<<10&4294967295|S>>>22),S=N+(b^(R|~E))+P[14]+2878612391&4294967295,N=R+(S<<15&4294967295|S>>>17),S=E+(R^(N|~b))+P[5]+4237533241&4294967295,E=N+(S<<21&4294967295|S>>>11),S=b+(N^(E|~R))+P[12]+1700485571&4294967295,b=E+(S<<6&4294967295|S>>>26),S=R+(E^(b|~N))+P[3]+2399980690&4294967295,R=b+(S<<10&4294967295|S>>>22),S=N+(b^(R|~E))+P[10]+4293915773&4294967295,N=R+(S<<15&4294967295|S>>>17),S=E+(R^(N|~b))+P[1]+2240044497&4294967295,E=N+(S<<21&4294967295|S>>>11),S=b+(N^(E|~R))+P[8]+1873313359&4294967295,b=E+(S<<6&4294967295|S>>>26),S=R+(E^(b|~N))+P[15]+4264355552&4294967295,R=b+(S<<10&4294967295|S>>>22),S=N+(b^(R|~E))+P[6]+2734768916&4294967295,N=R+(S<<15&4294967295|S>>>17),S=E+(R^(N|~b))+P[13]+1309151649&4294967295,E=N+(S<<21&4294967295|S>>>11),S=b+(N^(E|~R))+P[4]+4149444226&4294967295,b=E+(S<<6&4294967295|S>>>26),S=R+(E^(b|~N))+P[11]+3174756917&4294967295,R=b+(S<<10&4294967295|S>>>22),S=N+(b^(R|~E))+P[2]+718787259&4294967295,N=R+(S<<15&4294967295|S>>>17),S=E+(R^(N|~b))+P[9]+3951481745&4294967295,C.g[0]=C.g[0]+b&4294967295,C.g[1]=C.g[1]+(N+(S<<21&4294967295|S>>>11))&4294967295,C.g[2]=C.g[2]+N&4294967295,C.g[3]=C.g[3]+R&4294967295}r.prototype.u=function(C,b){b===void 0&&(b=C.length);for(var E=b-this.blockSize,P=this.B,N=this.h,R=0;R<b;){if(N==0)for(;R<=E;)s(this,C,R),R+=this.blockSize;if(typeof C=="string"){for(;R<b;)if(P[N++]=C.charCodeAt(R++),N==this.blockSize){s(this,P),N=0;break}}else for(;R<b;)if(P[N++]=C[R++],N==this.blockSize){s(this,P),N=0;break}}this.h=N,this.o+=b},r.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var b=1;b<C.length-8;++b)C[b]=0;var E=8*this.o;for(b=C.length-8;b<C.length;++b)C[b]=E&255,E/=256;for(this.u(C),C=Array(16),b=E=0;4>b;++b)for(var P=0;32>P;P+=8)C[E++]=this.g[b]>>>P&255;return C};function i(C,b){var E=c;return Object.prototype.hasOwnProperty.call(E,C)?E[C]:E[C]=b(C)}function o(C,b){this.h=b;for(var E=[],P=!0,N=C.length-1;0<=N;N--){var R=C[N]|0;P&&R==b||(E[N]=R,P=!1)}this.g=E}var c={};function l(C){return-128<=C&&128>C?i(C,function(b){return new o([b|0],0>b?-1:0)}):new o([C|0],0>C?-1:0)}function u(C){if(isNaN(C)||!isFinite(C))return m;if(0>C)return w(u(-C));for(var b=[],E=1,P=0;C>=E;P++)b[P]=C/E|0,E*=4294967296;return new o(b,0)}function h(C,b){if(C.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(C.charAt(0)=="-")return w(h(C.substring(1),b));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(b,8)),P=m,N=0;N<C.length;N+=8){var R=Math.min(8,C.length-N),S=parseInt(C.substring(N,N+R),b);8>R?(R=u(Math.pow(b,R)),P=P.j(R).add(u(S))):(P=P.j(E),P=P.add(u(S)))}return P}var m=l(0),p=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(I(this))return-w(this).m();for(var C=0,b=1,E=0;E<this.g.length;E++){var P=this.i(E);C+=(0<=P?P:4294967296+P)*b,b*=4294967296}return C},t.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(D(this))return"0";if(I(this))return"-"+w(this).toString(C);for(var b=u(Math.pow(C,6)),E=this,P="";;){var N=U(E,b).g;E=k(E,N.j(b));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(C);if(E=N,D(E))return R+P;for(;6>R.length;)R="0"+R;P=R+P}},t.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function D(C){if(C.h!=0)return!1;for(var b=0;b<C.g.length;b++)if(C.g[b]!=0)return!1;return!0}function I(C){return C.h==-1}t.l=function(C){return C=k(this,C),I(C)?-1:D(C)?0:1};function w(C){for(var b=C.g.length,E=[],P=0;P<b;P++)E[P]=~C.g[P];return new o(E,~C.h).add(p)}t.abs=function(){return I(this)?w(this):this},t.add=function(C){for(var b=Math.max(this.g.length,C.g.length),E=[],P=0,N=0;N<=b;N++){var R=P+(this.i(N)&65535)+(C.i(N)&65535),S=(R>>>16)+(this.i(N)>>>16)+(C.i(N)>>>16);P=S>>>16,R&=65535,S&=65535,E[N]=S<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function k(C,b){return C.add(w(b))}t.j=function(C){if(D(this)||D(C))return m;if(I(this))return I(C)?w(this).j(w(C)):w(w(this).j(C));if(I(C))return w(this.j(w(C)));if(0>this.l(_)&&0>C.l(_))return u(this.m()*C.m());for(var b=this.g.length+C.g.length,E=[],P=0;P<2*b;P++)E[P]=0;for(P=0;P<this.g.length;P++)for(var N=0;N<C.g.length;N++){var R=this.i(P)>>>16,S=this.i(P)&65535,Ne=C.i(N)>>>16,we=C.i(N)&65535;E[2*P+2*N]+=S*we,x(E,2*P+2*N),E[2*P+2*N+1]+=R*we,x(E,2*P+2*N+1),E[2*P+2*N+1]+=S*Ne,x(E,2*P+2*N+1),E[2*P+2*N+2]+=R*Ne,x(E,2*P+2*N+2)}for(P=0;P<b;P++)E[P]=E[2*P+1]<<16|E[2*P];for(P=b;P<2*b;P++)E[P]=0;return new o(E,0)};function x(C,b){for(;(C[b]&65535)!=C[b];)C[b+1]+=C[b]>>>16,C[b]&=65535,b++}function L(C,b){this.g=C,this.h=b}function U(C,b){if(D(b))throw Error("division by zero");if(D(C))return new L(m,m);if(I(C))return b=U(w(C),b),new L(w(b.g),w(b.h));if(I(b))return b=U(C,w(b)),new L(w(b.g),b.h);if(30<C.g.length){if(I(C)||I(b))throw Error("slowDivide_ only works with positive integers.");for(var E=p,P=b;0>=P.l(C);)E=Y(E),P=Y(P);var N=X(E,1),R=X(P,1);for(P=X(P,2),E=X(E,2);!D(P);){var S=R.add(P);0>=S.l(C)&&(N=N.add(E),R=S),P=X(P,1),E=X(E,1)}return b=k(C,N.j(b)),new L(N,b)}for(N=m;0<=C.l(b);){for(E=Math.max(1,Math.floor(C.m()/b.m())),P=Math.ceil(Math.log(E)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),R=u(E),S=R.j(b);I(S)||0<S.l(C);)E-=P,R=u(E),S=R.j(b);D(R)&&(R=p),N=N.add(R),C=k(C,S)}return new L(N,C)}t.A=function(C){return U(this,C).h},t.and=function(C){for(var b=Math.max(this.g.length,C.g.length),E=[],P=0;P<b;P++)E[P]=this.i(P)&C.i(P);return new o(E,this.h&C.h)},t.or=function(C){for(var b=Math.max(this.g.length,C.g.length),E=[],P=0;P<b;P++)E[P]=this.i(P)|C.i(P);return new o(E,this.h|C.h)},t.xor=function(C){for(var b=Math.max(this.g.length,C.g.length),E=[],P=0;P<b;P++)E[P]=this.i(P)^C.i(P);return new o(E,this.h^C.h)};function Y(C){for(var b=C.g.length+1,E=[],P=0;P<b;P++)E[P]=C.i(P)<<1|C.i(P-1)>>>31;return new o(E,C.h)}function X(C,b){var E=b>>5;b%=32;for(var P=C.g.length-E,N=[],R=0;R<P;R++)N[R]=0<b?C.i(R+E)>>>b|C.i(R+E+1)<<32-b:C.i(R+E);return new o(N,C.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Cv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Br=o}).apply(typeof Pm<"u"?Pm:typeof self<"u"?self:typeof window<"u"?window:{});var Oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rv,Ji,Dv,Qa,zu,kv,Ov,Nv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,g){return a==Array.prototype||a==Object.prototype||(a[d]=g.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Oa=="object"&&Oa];for(var d=0;d<a.length;++d){var g=a[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var g=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var M=a[v];if(!(M in g))break e;g=g[M]}a=a[a.length-1],v=g[a],d=d(v),d!=v&&d!=null&&e(g,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var g=0,v=!1,M={next:function(){if(!v&&g<a.length){var $=g++;return{value:d($,a[$]),done:!1}}return v=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,g){return a.call.apply(a.bind,arguments)}function m(a,d,g){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,v),a.apply(d,M)}}return function(){return a.apply(d,arguments)}}function p(a,d,g){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:m,p.apply(null,arguments)}function _(a,d){var g=Array.prototype.slice.call(arguments,1);return function(){var v=g.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function D(a,d){function g(){}g.prototype=d.prototype,a.aa=d.prototype,a.prototype=new g,a.prototype.constructor=a,a.Qb=function(v,M,$){for(var re=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)re[Ge-2]=arguments[Ge];return d.prototype[M].apply(v,re)}}function I(a){const d=a.length;if(0<d){const g=Array(d);for(let v=0;v<d;v++)g[v]=a[v];return g}return[]}function w(a,d){for(let g=1;g<arguments.length;g++){const v=arguments[g];if(l(v)){const M=a.length||0,$=v.length||0;a.length=M+$;for(let re=0;re<$;re++)a[M+re]=v[re]}else a.push(v)}}class k{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function x(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function U(a){return U[" "](a),a}U[" "]=function(){};var Y=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function X(a,d,g){for(const v in a)d.call(g,a[v],v,a)}function C(a,d){for(const g in a)d.call(void 0,a[g],g,a)}function b(a){const d={};for(const g in a)d[g]=a[g];return d}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(a,d){let g,v;for(let M=1;M<arguments.length;M++){v=arguments[M];for(g in v)a[g]=v[g];for(let $=0;$<E.length;$++)g=E[$],Object.prototype.hasOwnProperty.call(v,g)&&(a[g]=v[g])}}function N(a){var d=1;a=a.split(":");const g=[];for(;0<d&&a.length;)g.push(a.shift()),d--;return a.length&&g.push(a.join(":")),g}function R(a){c.setTimeout(()=>{throw a},0)}function S(){var a=st;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Ne{constructor(){this.h=this.g=null}add(d,g){const v=we.get();v.set(d,g),this.h?this.h.next=v:this.g=v,this.h=v}}var we=new k(()=>new Z,a=>a.reset());class Z{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let F,ee=!1,st=new Ne,pt=()=>{const a=c.Promise.resolve(void 0);F=()=>{a.then(kt)}};var kt=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(g){R(g)}var d=we;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}ee=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var pn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const g=()=>{};c.addEventListener("test",g,d),c.removeEventListener("test",g,d)}catch{}return a}();function mn(a,d){if(We.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var g=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(Y){e:{try{U(d.nodeName);var M=!0;break e}catch{}M=!1}M||(d=null)}}else g=="mouseover"?d=a.fromElement:g=="mouseout"&&(d=a.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:jt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&mn.aa.h.call(this)}}D(mn,We);var jt={2:"touch",3:"pen",4:"mouse"};mn.prototype.h=function(){mn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),ce=0;function se(a,d,g,v,M){this.listener=a,this.proxy=null,this.src=d,this.type=g,this.capture=!!v,this.ha=M,this.key=++ce,this.da=this.fa=!1}function he(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Be(a){this.src=a,this.g={},this.h=0}Be.prototype.add=function(a,d,g,v,M){var $=a.toString();a=this.g[$],a||(a=this.g[$]=[],this.h++);var re=O(a,d,v,M);return-1<re?(d=a[re],g||(d.fa=!1)):(d=new se(d,this.src,$,!!v,M),d.fa=g,a.push(d)),d};function A(a,d){var g=d.type;if(g in a.g){var v=a.g[g],M=Array.prototype.indexOf.call(v,d,void 0),$;($=0<=M)&&Array.prototype.splice.call(v,M,1),$&&(he(d),a.g[g].length==0&&(delete a.g[g],a.h--))}}function O(a,d,g,v){for(var M=0;M<a.length;++M){var $=a[M];if(!$.da&&$.listener==d&&$.capture==!!g&&$.ha==v)return M}return-1}var V="closure_lm_"+(1e6*Math.random()|0),H={};function K(a,d,g,v,M){if(Array.isArray(d)){for(var $=0;$<d.length;$++)K(a,d[$],g,v,M);return null}return g=Ee(g),a&&a[j]?a.K(d,g,u(v)?!!v.capture:!1,M):z(a,d,g,!1,v,M)}function z(a,d,g,v,M,$){if(!d)throw Error("Invalid event type");var re=u(M)?!!M.capture:!!M,Ge=ie(a);if(Ge||(a[V]=Ge=new Be(a)),g=Ge.add(d,g,v,re,$),g.proxy)return g;if(v=oe(),g.proxy=v,v.src=a,v.listener=g,a.addEventListener)pn||(M=re),M===void 0&&(M=!1),a.addEventListener(d.toString(),v,M);else if(a.attachEvent)a.attachEvent(Q(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return g}function oe(){function a(g){return d.call(a.src,a.listener,g)}const d=pe;return a}function ne(a,d,g,v,M){if(Array.isArray(d))for(var $=0;$<d.length;$++)ne(a,d[$],g,v,M);else v=u(v)?!!v.capture:!!v,g=Ee(g),a&&a[j]?(a=a.i,d=String(d).toString(),d in a.g&&($=a.g[d],g=O($,g,v,M),-1<g&&(he($[g]),Array.prototype.splice.call($,g,1),$.length==0&&(delete a.g[d],a.h--)))):a&&(a=ie(a))&&(d=a.g[d.toString()],a=-1,d&&(a=O(d,g,v,M)),(g=-1<a?d[a]:null)&&te(g))}function te(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[j])A(d.i,a);else{var g=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(g,v,a.capture):d.detachEvent?d.detachEvent(Q(g),v):d.addListener&&d.removeListener&&d.removeListener(v),(g=ie(d))?(A(g,a),g.h==0&&(g.src=null,d[V]=null)):he(a)}}}function Q(a){return a in H?H[a]:H[a]="on"+a}function pe(a,d){if(a.da)a=!0;else{d=new mn(d,this);var g=a.listener,v=a.ha||a.src;a.fa&&te(a),a=g.call(v,d)}return a}function ie(a){return a=a[V],a instanceof Be?a:null}var de="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ee(a){return typeof a=="function"?a:(a[de]||(a[de]=function(d){return a.handleEvent(d)}),a[de])}function ye(){Me.call(this),this.i=new Be(this),this.M=this,this.F=null}D(ye,Me),ye.prototype[j]=!0,ye.prototype.removeEventListener=function(a,d,g,v){ne(this,a,d,g,v)};function De(a,d){var g,v=a.F;if(v)for(g=[];v;v=v.F)g.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new We(d,a);else if(d instanceof We)d.target=d.target||a;else{var M=d;d=new We(v,a),P(d,M)}if(M=!0,g)for(var $=g.length-1;0<=$;$--){var re=d.g=g[$];M=Le(re,v,!0,d)&&M}if(re=d.g=a,M=Le(re,v,!0,d)&&M,M=Le(re,v,!1,d)&&M,g)for($=0;$<g.length;$++)re=d.g=g[$],M=Le(re,v,!1,d)&&M}ye.prototype.N=function(){if(ye.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var g=a.g[d],v=0;v<g.length;v++)he(g[v]);delete a.g[d],a.h--}}this.F=null},ye.prototype.K=function(a,d,g,v){return this.i.add(String(a),d,!1,g,v)},ye.prototype.L=function(a,d,g,v){return this.i.add(String(a),d,!0,g,v)};function Le(a,d,g,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var M=!0,$=0;$<d.length;++$){var re=d[$];if(re&&!re.da&&re.capture==g){var Ge=re.listener,St=re.ha||re.src;re.fa&&A(a.i,re),M=Ge.call(St,v)!==!1&&M}}return M&&!v.defaultPrevented}function wt(a,d,g){if(typeof a=="function")g&&(a=p(a,g));else if(a&&typeof a.handleEvent=="function")a=p(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function Tt(a){a.g=wt(()=>{a.g=null,a.i&&(a.i=!1,Tt(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class sn extends Me{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Tt(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ot(a){Me.call(this),this.h=a,this.g={}}D(Ot,Me);var yr=[];function Oi(a){X(a.g,function(d,g){this.g.hasOwnProperty(g)&&te(d)},a),a.g={}}Ot.prototype.N=function(){Ot.aa.N.call(this),Oi(this)},Ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var It=c.JSON.stringify,on=c.JSON.parse,ha=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Pc(){}Pc.prototype.h=null;function nf(a){return a.h||(a.h=a.i())}function rf(){}var Ni={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Cc(){We.call(this,"d")}D(Cc,We);function Rc(){We.call(this,"c")}D(Rc,We);var os={},sf=null;function da(){return sf=sf||new ye}os.La="serverreachability";function of(a){We.call(this,os.La,a)}D(of,We);function xi(a){const d=da();De(d,new of(d))}os.STAT_EVENT="statevent";function af(a,d){We.call(this,os.STAT_EVENT,a),this.stat=d}D(af,We);function qt(a){const d=da();De(d,new af(d,a))}os.Ma="timingevent";function lf(a,d){We.call(this,os.Ma,a),this.size=d}D(lf,We);function Vi(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function Mi(){this.g=!0}Mi.prototype.xa=function(){this.g=!1};function Gb(a,d,g,v,M,$){a.info(function(){if(a.g)if($)for(var re="",Ge=$.split("&"),St=0;St<Ge.length;St++){var je=Ge[St].split("=");if(1<je.length){var Nt=je[0];je=je[1];var xt=Nt.split("_");re=2<=xt.length&&xt[1]=="type"?re+(Nt+"="+je+"&"):re+(Nt+"=redacted&")}}else re=null;else re=$;return"XMLHTTP REQ ("+v+") [attempt "+M+"]: "+d+`
`+g+`
`+re})}function Kb(a,d,g,v,M,$,re){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+M+"]: "+d+`
`+g+`
`+$+" "+re})}function Fs(a,d,g,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Qb(a,g)+(v?" "+v:"")})}function Yb(a,d){a.info(function(){return"TIMEOUT: "+d})}Mi.prototype.info=function(){};function Qb(a,d){if(!a.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(a=0;a<g.length;a++)if(Array.isArray(g[a])){var v=g[a];if(!(2>v.length)){var M=v[1];if(Array.isArray(M)&&!(1>M.length)){var $=M[0];if($!="noop"&&$!="stop"&&$!="close")for(var re=1;re<M.length;re++)M[re]=""}}}}return It(g)}catch{return d}}var fa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dc;function pa(){}D(pa,Pc),pa.prototype.g=function(){return new XMLHttpRequest},pa.prototype.i=function(){return{}},Dc=new pa;function _r(a,d,g,v){this.j=a,this.i=d,this.l=g,this.R=v||1,this.U=new Ot(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new uf}function uf(){this.i=null,this.g="",this.h=!1}var hf={},kc={};function Oc(a,d,g){a.L=1,a.v=_a(qn(d)),a.m=g,a.P=!0,df(a,null)}function df(a,d){a.F=Date.now(),ma(a),a.A=qn(a.v);var g=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),Af(g.i,"t",v),a.C=0,g=a.j.J,a.h=new uf,a.g=Hf(a.j,g?d:null,!a.m),0<a.O&&(a.M=new sn(p(a.Y,a,a.g),a.O)),d=a.U,g=a.g,v=a.ca;var M="readystatechange";Array.isArray(M)||(M&&(yr[0]=M.toString()),M=yr);for(var $=0;$<M.length;$++){var re=K(g,M[$],v||d.handleEvent,!1,d.h||d);if(!re)break;d.g[re.key]=re}d=a.H?b(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),xi(),Gb(a.i,a.u,a.A,a.l,a.R,a.m)}_r.prototype.ca=function(a){a=a.target;const d=this.M;d&&Hn(a)==3?d.j():this.Y(a)},_r.prototype.Y=function(a){try{if(a==this.g)e:{const xt=Hn(this.g);var d=this.g.Ba();const Bs=this.g.Z();if(!(3>xt)&&(xt!=3||this.g&&(this.h.h||this.g.oa()||Nf(this.g)))){this.J||xt!=4||d==7||(d==8||0>=Bs?xi(3):xi(2)),Nc(this);var g=this.g.Z();this.X=g;t:if(ff(this)){var v=Nf(this.g);a="";var M=v.length,$=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){as(this),Li(this);var re="";break t}this.h.i=new c.TextDecoder}for(d=0;d<M;d++)this.h.h=!0,a+=this.h.i.decode(v[d],{stream:!($&&d==M-1)});v.length=0,this.h.g+=a,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=g==200,Kb(this.i,this.u,this.A,this.l,this.R,xt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ge,St=this.g;if((Ge=St.g?St.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(Ge)){var je=Ge;break t}}je=null}if(g=je)Fs(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xc(this,g);else{this.o=!1,this.s=3,qt(12),as(this),Li(this);break e}}if(this.P){g=!0;let gn;for(;!this.J&&this.C<re.length;)if(gn=Xb(this,re),gn==kc){xt==4&&(this.s=4,qt(14),g=!1),Fs(this.i,this.l,null,"[Incomplete Response]");break}else if(gn==hf){this.s=4,qt(15),Fs(this.i,this.l,re,"[Invalid Chunk]"),g=!1;break}else Fs(this.i,this.l,gn,null),xc(this,gn);if(ff(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xt!=4||re.length!=0||this.h.h||(this.s=1,qt(16),g=!1),this.o=this.o&&g,!g)Fs(this.i,this.l,re,"[Invalid Chunked Response]"),as(this),Li(this);else if(0<re.length&&!this.W){this.W=!0;var Nt=this.j;Nt.g==this&&Nt.ba&&!Nt.M&&(Nt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),Uc(Nt),Nt.M=!0,qt(11))}}else Fs(this.i,this.l,re,null),xc(this,re);xt==4&&as(this),this.o&&!this.J&&(xt==4?Uf(this.j,this):(this.o=!1,ma(this)))}else p0(this.g),g==400&&0<re.indexOf("Unknown SID")?(this.s=3,qt(12)):(this.s=0,qt(13)),as(this),Li(this)}}}catch{}finally{}};function ff(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Xb(a,d){var g=a.C,v=d.indexOf(`
`,g);return v==-1?kc:(g=Number(d.substring(g,v)),isNaN(g)?hf:(v+=1,v+g>d.length?kc:(d=d.slice(v,v+g),a.C=v+g,d)))}_r.prototype.cancel=function(){this.J=!0,as(this)};function ma(a){a.S=Date.now()+a.I,pf(a,a.I)}function pf(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Vi(p(a.ba,a),d)}function Nc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}_r.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Yb(this.i,this.A),this.L!=2&&(xi(),qt(17)),as(this),this.s=2,Li(this)):pf(this,this.S-a)};function Li(a){a.j.G==0||a.J||Uf(a.j,a)}function as(a){Nc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Oi(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function xc(a,d){try{var g=a.j;if(g.G!=0&&(g.g==a||Vc(g.h,a))){if(!a.K&&Vc(g.h,a)&&g.G==3){try{var v=g.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var M=v;if(M[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<a.F)Ia(g),wa(g);else break e;$c(g),qt(18)}}else g.za=M[1],0<g.za-g.T&&37500>M[2]&&g.F&&g.v==0&&!g.C&&(g.C=Vi(p(g.Za,g),6e3));if(1>=yf(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else cs(g,11)}else if((a.K||g.g==a)&&Ia(g),!x(d))for(M=g.Da.g.parse(d),d=0;d<M.length;d++){let je=M[d];if(g.T=je[0],je=je[1],g.G==2)if(je[0]=="c"){g.K=je[1],g.ia=je[2];const Nt=je[3];Nt!=null&&(g.la=Nt,g.j.info("VER="+g.la));const xt=je[4];xt!=null&&(g.Aa=xt,g.j.info("SVER="+g.Aa));const Bs=je[5];Bs!=null&&typeof Bs=="number"&&0<Bs&&(v=1.5*Bs,g.L=v,g.j.info("backChannelRequestTimeoutMs_="+v)),v=g;const gn=a.g;if(gn){const Aa=gn.g?gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Aa){var $=v.h;$.g||Aa.indexOf("spdy")==-1&&Aa.indexOf("quic")==-1&&Aa.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Mc($,$.h),$.h=null))}if(v.D){const Bc=gn.g?gn.g.getResponseHeader("X-HTTP-Session-Id"):null;Bc&&(v.ya=Bc,Je(v.I,v.D,Bc))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-a.F,g.j.info("Handshake RTT: "+g.R+"ms")),v=g;var re=a;if(v.qa=qf(v,v.J?v.ia:null,v.W),re.K){_f(v.h,re);var Ge=re,St=v.L;St&&(Ge.I=St),Ge.B&&(Nc(Ge),ma(Ge)),v.g=re}else Ff(v);0<g.i.length&&Ta(g)}else je[0]!="stop"&&je[0]!="close"||cs(g,7);else g.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?cs(g,7):Fc(g):je[0]!="noop"&&g.l&&g.l.ta(je),g.v=0)}}xi(4)}catch{}}var Jb=class{constructor(a,d){this.g=a,this.map=d}};function mf(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function gf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function yf(a){return a.h?1:a.g?a.g.size:0}function Vc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Mc(a,d){a.g?a.g.add(d):a.h=d}function _f(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}mf.prototype.cancel=function(){if(this.i=vf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function vf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const g of a.g.values())d=d.concat(g.D);return d}return I(a.i)}function Zb(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var d=[],g=a.length,v=0;v<g;v++)d.push(a[v]);return d}d=[],g=0;for(v in a)d[g++]=a[v];return d}function e0(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var d=[];a=a.length;for(var g=0;g<a;g++)d.push(g);return d}d=[],g=0;for(const v in a)d[g++]=v;return d}}}function bf(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var g=e0(a),v=Zb(a),M=v.length,$=0;$<M;$++)d.call(void 0,v[$],g&&g[$],a)}var Ef=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function t0(a,d){if(a){a=a.split("&");for(var g=0;g<a.length;g++){var v=a[g].indexOf("="),M=null;if(0<=v){var $=a[g].substring(0,v);M=a[g].substring(v+1)}else $=a[g];d($,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function ls(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ls){this.h=a.h,ga(this,a.j),this.o=a.o,this.g=a.g,ya(this,a.s),this.l=a.l;var d=a.i,g=new Ui;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),wf(this,g),this.m=a.m}else a&&(d=String(a).match(Ef))?(this.h=!1,ga(this,d[1]||"",!0),this.o=Fi(d[2]||""),this.g=Fi(d[3]||"",!0),ya(this,d[4]),this.l=Fi(d[5]||"",!0),wf(this,d[6]||"",!0),this.m=Fi(d[7]||"")):(this.h=!1,this.i=new Ui(null,this.h))}ls.prototype.toString=function(){var a=[],d=this.j;d&&a.push($i(d,Tf,!0),":");var g=this.g;return(g||d=="file")&&(a.push("//"),(d=this.o)&&a.push($i(d,Tf,!0),"@"),a.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&a.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&a.push("/"),a.push($i(g,g.charAt(0)=="/"?s0:r0,!0))),(g=this.i.toString())&&a.push("?",g),(g=this.m)&&a.push("#",$i(g,o0)),a.join("")};function qn(a){return new ls(a)}function ga(a,d,g){a.j=g?Fi(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function ya(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function wf(a,d,g){d instanceof Ui?(a.i=d,a0(a.i,a.h)):(g||(d=$i(d,i0)),a.i=new Ui(d,a.h))}function Je(a,d,g){a.i.set(d,g)}function _a(a){return Je(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Fi(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function $i(a,d,g){return typeof a=="string"?(a=encodeURI(a).replace(d,n0),g&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function n0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Tf=/[#\/\?@]/g,r0=/[#\?:]/g,s0=/[#\?]/g,i0=/[#\?@]/g,o0=/#/g;function Ui(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function vr(a){a.g||(a.g=new Map,a.h=0,a.i&&t0(a.i,function(d,g){a.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=Ui.prototype,t.add=function(a,d){vr(this),this.i=null,a=$s(this,a);var g=this.g.get(a);return g||this.g.set(a,g=[]),g.push(d),this.h+=1,this};function If(a,d){vr(a),d=$s(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Sf(a,d){return vr(a),d=$s(a,d),a.g.has(d)}t.forEach=function(a,d){vr(this),this.g.forEach(function(g,v){g.forEach(function(M){a.call(d,M,v,this)},this)},this)},t.na=function(){vr(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let v=0;v<d.length;v++){const M=a[v];for(let $=0;$<M.length;$++)g.push(d[v])}return g},t.V=function(a){vr(this);let d=[];if(typeof a=="string")Sf(this,a)&&(d=d.concat(this.g.get($s(this,a))));else{a=Array.from(this.g.values());for(let g=0;g<a.length;g++)d=d.concat(a[g])}return d},t.set=function(a,d){return vr(this),this.i=null,a=$s(this,a),Sf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Af(a,d,g){If(a,d),0<g.length&&(a.i=null,a.g.set($s(a,d),I(g)),a.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var v=d[g];const $=encodeURIComponent(String(v)),re=this.V(v);for(v=0;v<re.length;v++){var M=$;re[v]!==""&&(M+="="+encodeURIComponent(String(re[v]))),a.push(M)}}return this.i=a.join("&")};function $s(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function a0(a,d){d&&!a.j&&(vr(a),a.i=null,a.g.forEach(function(g,v){var M=v.toLowerCase();v!=M&&(If(this,v),Af(this,M,g))},a)),a.j=d}function l0(a,d){const g=new Mi;if(c.Image){const v=new Image;v.onload=_(br,g,"TestLoadImage: loaded",!0,d,v),v.onerror=_(br,g,"TestLoadImage: error",!1,d,v),v.onabort=_(br,g,"TestLoadImage: abort",!1,d,v),v.ontimeout=_(br,g,"TestLoadImage: timeout",!1,d,v),c.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function c0(a,d){const g=new Mi,v=new AbortController,M=setTimeout(()=>{v.abort(),br(g,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then($=>{clearTimeout(M),$.ok?br(g,"TestPingServer: ok",!0,d):br(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(M),br(g,"TestPingServer: error",!1,d)})}function br(a,d,g,v,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),v(g)}catch{}}function u0(){this.g=new ha}function h0(a,d,g){const v=g||"";try{bf(a,function(M,$){let re=M;u(M)&&(re=It(M)),d.push(v+$+"="+encodeURIComponent(re))})}catch(M){throw d.push(v+"type="+encodeURIComponent("_badmap")),M}}function va(a){this.l=a.Ub||null,this.j=a.eb||!1}D(va,Pc),va.prototype.g=function(){return new ba(this.l,this.j)},va.prototype.i=function(a){return function(){return a}}({});function ba(a,d){ye.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(ba,ye),t=ba.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,ji(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ji(this)),this.g&&(this.readyState=3,ji(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Bi(this):ji(this),this.readyState==3&&Pf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Bi(this))},t.Qa=function(a){this.g&&(this.response=a,Bi(this))},t.ga=function(){this.g&&Bi(this)};function Bi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ji(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,a.push(g[0]+": "+g[1]),g=d.next();return a.join(`\r
`)};function ji(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Cf(a){let d="";return X(a,function(g,v){d+=v,d+=":",d+=g,d+=`\r
`}),d}function Lc(a,d,g){e:{for(v in g){var v=!1;break e}v=!0}v||(g=Cf(g),typeof a=="string"?g!=null&&encodeURIComponent(String(g)):Je(a,d,g))}function it(a){ye.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(it,ye);var d0=/^https?$/i,f0=["POST","PUT"];t=it.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,g,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dc.g(),this.v=this.o?nf(this.o):nf(Dc),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch($){Rf(this,$);return}if(a=g||"",g=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var M in v)g.set(M,v[M]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const $ of v.keys())g.set($,v.get($));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(g.keys()).find($=>$.toLowerCase()=="content-type"),M=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(f0,d,void 0))||v||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,re]of g)this.g.setRequestHeader($,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Of(this),this.u=!0,this.g.send(a),this.u=!1}catch($){Rf(this,$)}};function Rf(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Df(a),Ea(a)}function Df(a){a.A||(a.A=!0,De(a,"complete"),De(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,De(this,"complete"),De(this,"abort"),Ea(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ea(this,!0)),it.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?kf(this):this.bb())},t.bb=function(){kf(this)};function kf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Hn(a)!=4||a.Z()!=2)){if(a.u&&Hn(a)==4)wt(a.Ea,0,a);else if(De(a,"readystatechange"),Hn(a)==4){a.h=!1;try{const re=a.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var v;if(v=re===0){var M=String(a.D).match(Ef)[1]||null;!M&&c.self&&c.self.location&&(M=c.self.location.protocol.slice(0,-1)),v=!d0.test(M?M.toLowerCase():"")}g=v}if(g)De(a,"complete"),De(a,"success");else{a.m=6;try{var $=2<Hn(a)?a.g.statusText:""}catch{$=""}a.l=$+" ["+a.Z()+"]",Df(a)}}finally{Ea(a)}}}}function Ea(a,d){if(a.g){Of(a);const g=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||De(a,"ready");try{g.onreadystatechange=v}catch{}}}function Of(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Hn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),on(d)}};function Nf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function p0(a){const d={};a=(a.g&&2<=Hn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(x(a[v]))continue;var g=N(a[v]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const $=d[M]||[];d[M]=$,$.push(g)}C(d,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qi(a,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[a]||d}function xf(a){this.Aa=0,this.i=[],this.j=new Mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qi("baseRetryDelayMs",5e3,a),this.cb=qi("retryDelaySeedMs",1e4,a),this.Wa=qi("forwardChannelMaxRetries",2,a),this.wa=qi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new mf(a&&a.concurrentRequestLimit),this.Da=new u0,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=xf.prototype,t.la=8,t.G=1,t.connect=function(a,d,g,v){qt(0),this.W=a,this.H=d||{},g&&v!==void 0&&(this.H.OSID=g,this.H.OAID=v),this.F=this.X,this.I=qf(this,null,this.W),Ta(this)};function Fc(a){if(Vf(a),a.G==3){var d=a.U++,g=qn(a.I);if(Je(g,"SID",a.K),Je(g,"RID",d),Je(g,"TYPE","terminate"),Hi(a,g),d=new _r(a,a.j,d),d.L=2,d.v=_a(qn(g)),g=!1,c.navigator&&c.navigator.sendBeacon)try{g=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&c.Image&&(new Image().src=d.v,g=!0),g||(d.g=Hf(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ma(d)}jf(a)}function wa(a){a.g&&(Uc(a),a.g.cancel(),a.g=null)}function Vf(a){wa(a),a.u&&(c.clearTimeout(a.u),a.u=null),Ia(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ta(a){if(!gf(a.h)&&!a.s){a.s=!0;var d=a.Ga;F||pt(),ee||(F(),ee=!0),st.add(d,a),a.B=0}}function m0(a,d){return yf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Vi(p(a.Ga,a,d),Bf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const M=new _r(this,this.j,a);let $=this.o;if(this.S&&($?($=b($),P($,this.S)):$=this.S),this.m!==null||this.O||(M.H=$,$=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var v=this.i[g];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=Lf(this,M,d),g=qn(this.I),Je(g,"RID",a),Je(g,"CVER",22),this.D&&Je(g,"X-HTTP-Session-Id",this.D),Hi(this,g),$&&(this.O?d="headers="+encodeURIComponent(String(Cf($)))+"&"+d:this.m&&Lc(g,this.m,$)),Mc(this.h,M),this.Ua&&Je(g,"TYPE","init"),this.P?(Je(g,"$req",d),Je(g,"SID","null"),M.T=!0,Oc(M,g,null)):Oc(M,g,d),this.G=2}}else this.G==3&&(a?Mf(this,a):this.i.length==0||gf(this.h)||Mf(this))};function Mf(a,d){var g;d?g=d.l:g=a.U++;const v=qn(a.I);Je(v,"SID",a.K),Je(v,"RID",g),Je(v,"AID",a.T),Hi(a,v),a.m&&a.o&&Lc(v,a.m,a.o),g=new _r(a,a.j,g,a.B+1),a.m===null&&(g.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Lf(a,g,1e3),g.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Mc(a.h,g),Oc(g,v,d)}function Hi(a,d){a.H&&X(a.H,function(g,v){Je(d,v,g)}),a.l&&bf({},function(g,v){Je(d,v,g)})}function Lf(a,d,g){g=Math.min(a.i.length,g);var v=a.l?p(a.l.Na,a.l,a):null;e:{var M=a.i;let $=-1;for(;;){const re=["count="+g];$==-1?0<g?($=M[0].g,re.push("ofs="+$)):$=0:re.push("ofs="+$);let Ge=!0;for(let St=0;St<g;St++){let je=M[St].g;const Nt=M[St].map;if(je-=$,0>je)$=Math.max(0,M[St].g-100),Ge=!1;else try{h0(Nt,re,"req"+je+"_")}catch{v&&v(Nt)}}if(Ge){v=re.join("&");break e}}}return a=a.i.splice(0,g),d.D=a,v}function Ff(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;F||pt(),ee||(F(),ee=!0),st.add(d,a),a.v=0}}function $c(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Vi(p(a.Fa,a),Bf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,$f(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Vi(p(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qt(10),wa(this),$f(this))};function Uc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function $f(a){a.g=new _r(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=qn(a.qa);Je(d,"RID","rpc"),Je(d,"SID",a.K),Je(d,"AID",a.T),Je(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Je(d,"TO",a.ja),Je(d,"TYPE","xmlhttp"),Hi(a,d),a.m&&a.o&&Lc(d,a.m,a.o),a.L&&(a.g.I=a.L);var g=a.g;a=a.ia,g.L=1,g.v=_a(qn(d)),g.m=null,g.P=!0,df(g,a)}t.Za=function(){this.C!=null&&(this.C=null,wa(this),$c(this),qt(19))};function Ia(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Uf(a,d){var g=null;if(a.g==d){Ia(a),Uc(a),a.g=null;var v=2}else if(Vc(a.h,d))g=d.D,_f(a.h,d),v=1;else return;if(a.G!=0){if(d.o)if(v==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var M=a.B;v=da(),De(v,new lf(v,g)),Ta(a)}else Ff(a);else if(M=d.s,M==3||M==0&&0<d.X||!(v==1&&m0(a,d)||v==2&&$c(a)))switch(g&&0<g.length&&(d=a.h,d.i=d.i.concat(g)),M){case 1:cs(a,5);break;case 4:cs(a,10);break;case 3:cs(a,6);break;default:cs(a,2)}}}function Bf(a,d){let g=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(g*=2),g*d}function cs(a,d){if(a.j.info("Error code "+d),d==2){var g=p(a.fb,a),v=a.Xa;const M=!v;v=new ls(v||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ga(v,"https"),_a(v),M?l0(v.toString(),g):c0(v.toString(),g)}else qt(2);a.G=0,a.l&&a.l.sa(d),jf(a),Vf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),qt(2)):(this.j.info("Failed to ping google.com"),qt(1))};function jf(a){if(a.G=0,a.ka=[],a.l){const d=vf(a.h);(d.length!=0||a.i.length!=0)&&(w(a.ka,d),w(a.ka,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.ra()}}function qf(a,d,g){var v=g instanceof ls?qn(g):new ls(g);if(v.g!="")d&&(v.g=d+"."+v.g),ya(v,v.s);else{var M=c.location;v=M.protocol,d=d?d+"."+M.hostname:M.hostname,M=+M.port;var $=new ls(null);v&&ga($,v),d&&($.g=d),M&&ya($,M),g&&($.l=g),v=$}return g=a.D,d=a.ya,g&&d&&Je(v,g,d),Je(v,"VER",a.la),Hi(a,v),v}function Hf(a,d,g){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new it(new va({eb:g})):new it(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function zf(){}t=zf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Sa(){}Sa.prototype.g=function(a,d){return new Jt(a,d)};function Jt(a,d){ye.call(this),this.g=new xf(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!x(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!x(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Us(this)}D(Jt,ye),Jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){Fc(this.g)},Jt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var g={};g.__data__=a,a=g}else this.u&&(g={},g.__data__=It(a),a=g);d.i.push(new Jb(d.Ya++,a)),d.G==3&&Ta(d)},Jt.prototype.N=function(){this.g.l=null,delete this.j,Fc(this.g),delete this.g,Jt.aa.N.call(this)};function Wf(a){Cc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const g in d){a=g;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}D(Wf,Cc);function Gf(){Rc.call(this),this.status=1}D(Gf,Rc);function Us(a){this.g=a}D(Us,zf),Us.prototype.ua=function(){De(this.g,"a")},Us.prototype.ta=function(a){De(this.g,new Wf(a))},Us.prototype.sa=function(a){De(this.g,new Gf)},Us.prototype.ra=function(){De(this.g,"b")},Sa.prototype.createWebChannel=Sa.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,Nv=function(){return new Sa},Ov=function(){return da()},kv=os,zu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fa.NO_ERROR=0,fa.TIMEOUT=8,fa.HTTP_ERROR=6,Qa=fa,cf.COMPLETE="complete",Dv=cf,rf.EventType=Ni,Ni.OPEN="a",Ni.CLOSE="b",Ni.ERROR="c",Ni.MESSAGE="d",ye.prototype.listen=ye.prototype.K,Ji=rf,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,Rv=it}).apply(typeof Oa<"u"?Oa:typeof self<"u"?self:typeof window<"u"?window:{});const Cm="@firebase/firestore",Rm="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Si="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new Yh("@firebase/firestore");function Ks(){return Cs.logLevel}function ue(t,...e){if(Cs.logLevel<=xe.DEBUG){const n=e.map(ud);Cs.debug(`Firestore (${Si}): ${t}`,...n)}}function lr(t,...e){if(Cs.logLevel<=xe.ERROR){const n=e.map(ud);Cs.error(`Firestore (${Si}): ${t}`,...n)}}function Wr(t,...e){if(Cs.logLevel<=xe.WARN){const n=e.map(ud);Cs.warn(`Firestore (${Si}): ${t}`,...n)}}function ud(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function be(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,xv(t,r,n)}function xv(t,e,n){let r=`FIRESTORE (${Si}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw lr(r),new Error(r)}function ze(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||xv(e,s,r)}function Pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends fr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Lt.UNAUTHENTICATED))}shutdown(){}}class iC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class oC{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ze(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new rr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ze(typeof r.accessToken=="string",31837,{l:r}),new Vv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new Lt(e)}}class aC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class lC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new aC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,en(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ze(this.o===void 0,3512);const r=i=>{i.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ue("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Dm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ze(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Dm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function Mv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=uC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Oe(t,e){return t<e?-1:t>e?1:0}function Wu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Oe(r,s);{const i=Mv(),o=hC(i.encode(km(t,n)),i.encode(km(e,n)));return o!==0?o:Oe(r,s)}}n+=r>65535?2:1}return Oe(t.length,e.length)}function km(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function hC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Oe(t[n],e[n]);return Oe(t.length,e.length)}function mi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="__name__";class Cn{constructor(e,n,r){n===void 0?n=0:n>e.length&&be(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&be(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Cn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Cn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Oe(e.length,n.length)}static compareSegments(e,n){const r=Cn.isNumericId(e),s=Cn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Cn.extractNumericId(e).compare(Cn.extractNumericId(n)):Wu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Br.fromString(e.substring(4,e.length-2))}}class Xe extends Cn{construct(e,n,r){return new Xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ae(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Xe(n)}static emptyPath(){return new Xe([])}}const dC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Cn{construct(e,n,r){return new Rt(e,n,r)}static isValidIdentifier(e){return dC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Om}static keyField(){return new Rt([Om])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ae(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ae(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ae(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ae(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(n)}static emptyPath(){return new Rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(Xe.fromString(e))}static fromName(e){return new ge(Xe.fromString(e).popFirst(5))}static empty(){return new ge(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new Xe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t,e,n){if(!n)throw new ae(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fC(t,e,n,r){if(e===!0&&r===!0)throw new ae(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Nm(t){if(!ge.isDocumentKey(t))throw new ae(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xm(t){if(ge.isDocumentKey(t))throw new ae(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fv(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function sc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":be(12329,{type:typeof t})}function fn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ae(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sc(t);throw new ae(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function ft(t,e){const n={typeString:t};return e&&(n.value=e),n}function ea(t,e){if(!Fv(t))throw new ae(q.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ae(q.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=-62135596800,Mm=1e6;class ke{static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Mm);return new ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ae(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ae(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Vm)throw new ae(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Mm}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ea(e,ke._jsonSchema))return new ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Vm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ke._jsonSchemaVersion="firestore/timestamp/1.0",ke._jsonSchema={type:ft("string",ke._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static fromTimestamp(e){return new Se(e)}static min(){return new Se(new ke(0,0))}static max(){return new Se(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Vo=-1;function pC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Se.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new Gr(s,ge.empty(),e)}function mC(t){return new Gr(t.readTime,t.key,Vo)}class Gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gr(Se.min(),ge.empty(),Vo)}static max(){return new Gr(Se.max(),ge.empty(),Vo)}}function gC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ge.comparator(t.documentKey,e.documentKey),n!==0?n:Oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _C{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==yC)throw t;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&be(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new G((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof G?n:G.resolve(n)}catch(n){return G.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):G.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):G.reject(n)}static resolve(e){return new G((n,r)=>{n(e)})}static reject(e){return new G((n,r)=>{r(e)})}static waitFor(e){return new G((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=G.resolve(!1);for(const r of e)n=n.next(s=>s?G.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new G((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++c,c===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new G((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function vC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Pi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ic{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}ic.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=-1;function oc(t){return t==null}function wl(t){return t===0&&1/t==-1/0}function bC(t){return typeof t=="number"&&Number.isInteger(t)&&!wl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v="";function EC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Lm(e)),e=wC(t.get(n),e);return Lm(e)}function wC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case $v:n+="";break;default:n+=i}}return n}function Lm(t){return t+$v+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Uv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){this.comparator=e,this.root=n||At.EMPTY}insert(e,n){return new rt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Na(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Na(this.root,e,this.comparator,!1)}getReverseIterator(){return new Na(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Na(this.root,e,this.comparator,!0)}}class Na{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??At.RED,this.left=s??At.EMPTY,this.right=i??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new At(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return At.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw be(43730,{key:this.key,value:this.value});if(this.right.isRed())throw be(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw be(27949);return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw be(57766)}get value(){throw be(16141)}get color(){throw be(16727)}get left(){throw be(29726)}get right(){throw be(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new At(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $m(this.data.getIterator())}getIteratorFrom(e){return new $m(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class $m{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new nn([])}unionWith(e){let n=new gt(Rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Bv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Bv("Invalid base64 string: "+i):i}}(e);return new Dt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const TC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kr(t){if(ze(!!t,39018),typeof t=="string"){let e=0;const n=TC.exec(t);if(ze(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:at(t.seconds),nanos:at(t.nanos)}}function at(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yr(t){return typeof t=="string"?Dt.fromBase64String(t):Dt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="server_timestamp",qv="__type__",Hv="__previous_value__",zv="__local_write_time__";function fd(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[qv])===null||n===void 0?void 0:n.stringValue)===jv}function ac(t){const e=t.mapValue.fields[Hv];return fd(e)?ac(e):e}function Mo(t){const e=Kr(t.mapValue.fields[zv].timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n,r,s,i,o,c,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h}}const Tl="(default)";class Lo{constructor(e,n){this.projectId=e,this.database=n||Tl}static empty(){return new Lo("","")}get isDefaultDatabase(){return this.database===Tl}isEqual(e){return e instanceof Lo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="__type__",SC="__max__",xa={mapValue:{}},Gv="__vector__",Il="value";function Qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fd(t)?4:PC(t)?9007199254740991:AC(t)?10:11:be(28295,{value:t})}function $n(t,e){if(t===e)return!0;const n=Qr(t);if(n!==Qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mo(t).isEqual(Mo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Kr(s.timestampValue),c=Kr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Yr(s.bytesValue).isEqual(Yr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return at(s.geoPointValue.latitude)===at(i.geoPointValue.latitude)&&at(s.geoPointValue.longitude)===at(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return at(s.integerValue)===at(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=at(s.doubleValue),c=at(i.doubleValue);return o===c?wl(o)===wl(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return mi(t.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Fm(o)!==Fm(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!$n(o[l],c[l])))return!1;return!0}(t,e);default:return be(52216,{left:t})}}function Fo(t,e){return(t.values||[]).find(n=>$n(n,e))!==void 0}function gi(t,e){if(t===e)return 0;const n=Qr(t),r=Qr(e);if(n!==r)return Oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Oe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=at(i.integerValue||i.doubleValue),l=at(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Um(t.timestampValue,e.timestampValue);case 4:return Um(Mo(t),Mo(e));case 5:return Wu(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Yr(i),l=Yr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const h=Oe(c[u],l[u]);if(h!==0)return h}return Oe(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Oe(at(i.latitude),at(o.latitude));return c!==0?c:Oe(at(i.longitude),at(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Bm(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,h;const m=i.fields||{},p=o.fields||{},_=(c=m[Il])===null||c===void 0?void 0:c.arrayValue,D=(l=p[Il])===null||l===void 0?void 0:l.arrayValue,I=Oe(((u=_?.values)===null||u===void 0?void 0:u.length)||0,((h=D?.values)===null||h===void 0?void 0:h.length)||0);return I!==0?I:Bm(_,D)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===xa.mapValue&&o===xa.mapValue)return 0;if(i===xa.mapValue)return 1;if(o===xa.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let m=0;m<l.length&&m<h.length;++m){const p=Wu(l[m],h[m]);if(p!==0)return p;const _=gi(c[l[m]],u[h[m]]);if(_!==0)return _}return Oe(l.length,h.length)}(t.mapValue,e.mapValue);default:throw be(23264,{le:n})}}function Um(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Oe(t,e);const n=Kr(t),r=Kr(e),s=Oe(n.seconds,r.seconds);return s!==0?s:Oe(n.nanos,r.nanos)}function Bm(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=gi(n[s],r[s]);if(i)return i}return Oe(n.length,r.length)}function yi(t){return Gu(t)}function Gu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ge.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Gu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Gu(n.fields[o])}`;return s+"}"}(t.mapValue):be(61005,{value:t})}function Xa(t){switch(Qr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ac(t);return e?16+Xa(e):16;case 5:return 2*t.stringValue.length;case 6:return Yr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Xa(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return rs(r.fields,(i,o)=>{s+=i.length+Xa(o)}),s}(t.mapValue);default:throw be(13486,{value:t})}}function jm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ku(t){return!!t&&"integerValue"in t}function pd(t){return!!t&&"arrayValue"in t}function qm(t){return!!t&&"nullValue"in t}function Hm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ja(t){return!!t&&"mapValue"in t}function AC(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Wv])===null||n===void 0?void 0:n.stringValue)===Gv}function yo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return rs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function PC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===SC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.value=e}static empty(){return new Qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ja(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yo(n)}setAll(e){let n=Rt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=yo(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ja(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ja(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){rs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Qt(yo(this.value))}}function Kv(t){const e=[];return rs(t.fields,(n,r)=>{const s=new Rt([n]);if(Ja(r)){const i=Kv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new $t(e,0,Se.min(),Se.min(),Se.min(),Qt.empty(),0)}static newFoundDocument(e,n,r,s){return new $t(e,1,n,Se.min(),r,s,0)}static newNoDocument(e,n){return new $t(e,2,n,Se.min(),Se.min(),Qt.empty(),0)}static newUnknownDocument(e,n){return new $t(e,3,n,Se.min(),Se.min(),Qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Sl{constructor(e,n){this.position=e,this.inclusive=n}}function zm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ge.comparator(ge.fromName(o.referenceValue),n.key):r=gi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class $o{constructor(e,n="asc"){this.field=e,this.dir=n}}function CC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Yv{}class dt extends Yv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new DC(e,n,r):n==="array-contains"?new NC(e,r):n==="in"?new xC(e,r):n==="not-in"?new VC(e,r):n==="array-contains-any"?new MC(e,r):new dt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new kC(e,r):new OC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(gi(n,this.value)):n!==null&&Qr(this.value)===Qr(n)&&this.matchesComparison(gi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return be(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class wn extends Yv{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new wn(e,n)}matches(e){return Qv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Qv(t){return t.op==="and"}function Xv(t){return RC(t)&&Qv(t)}function RC(t){for(const e of t.filters)if(e instanceof wn)return!1;return!0}function Yu(t){if(t instanceof dt)return t.field.canonicalString()+t.op.toString()+yi(t.value);if(Xv(t))return t.filters.map(e=>Yu(e)).join(",");{const e=t.filters.map(n=>Yu(n)).join(",");return`${t.op}(${e})`}}function Jv(t,e){return t instanceof dt?function(r,s){return s instanceof dt&&r.op===s.op&&r.field.isEqual(s.field)&&$n(r.value,s.value)}(t,e):t instanceof wn?function(r,s){return s instanceof wn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Jv(o,s.filters[c]),!0):!1}(t,e):void be(19439)}function Zv(t){return t instanceof dt?function(n){return`${n.field.canonicalString()} ${n.op} ${yi(n.value)}`}(t):t instanceof wn?function(n){return n.op.toString()+" {"+n.getFilters().map(Zv).join(" ,")+"}"}(t):"Filter"}class DC extends dt{constructor(e,n,r){super(e,n,r),this.key=ge.fromName(r.referenceValue)}matches(e){const n=ge.comparator(e.key,this.key);return this.matchesComparison(n)}}class kC extends dt{constructor(e,n){super(e,"in",n),this.keys=e1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class OC extends dt{constructor(e,n){super(e,"not-in",n),this.keys=e1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function e1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ge.fromName(r.referenceValue))}class NC extends dt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pd(n)&&Fo(n.arrayValue,this.value)}}class xC extends dt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fo(this.value.arrayValue,n)}}class VC extends dt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Fo(this.value.arrayValue,n)}}class MC extends dt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fo(this.value.arrayValue,r))}}/**
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
 */class LC{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Pe=null}}function Gm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new LC(t,e,n,r,s,i,o)}function md(t){const e=Pe(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),oc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yi(r)).join(",")),e.Pe=n}return e.Pe}function gd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Jv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wm(t.startAt,e.startAt)&&Wm(t.endAt,e.endAt)}function Qu(t){return ge.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function FC(t,e,n,r,s,i,o,c){return new Ci(t,e,n,r,s,i,o,c)}function yd(t){return new Ci(t)}function Km(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function t1(t){return t.collectionGroup!==null}function _o(t){const e=Pe(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new gt(Rt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new $o(i,r))}),n.has(Rt.keyField().canonicalString())||e.Te.push(new $o(Rt.keyField(),r))}return e.Te}function xn(t){const e=Pe(t);return e.Ie||(e.Ie=$C(e,_o(t))),e.Ie}function $C(t,e){if(t.limitType==="F")return Gm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new $o(s.field,i)});const n=t.endAt?new Sl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Sl(t.startAt.position,t.startAt.inclusive):null;return Gm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Xu(t,e){const n=t.filters.concat([e]);return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ju(t,e,n){return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lc(t,e){return gd(xn(t),xn(e))&&t.limitType===e.limitType}function n1(t){return`${md(xn(t))}|lt:${t.limitType}`}function Ys(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Zv(s)).join(", ")}]`),oc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>yi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>yi(s)).join(",")),`Target(${r})`}(xn(t))}; limitType=${t.limitType})`}function cc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ge.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of _o(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=zm(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,_o(r),s)||r.endAt&&!function(o,c,l){const u=zm(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,_o(r),s))}(t,e)}function UC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function r1(t){return(e,n)=>{let r=!1;for(const s of _o(t)){const i=BC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function BC(t,e,n){const r=t.field.isKeyField()?ge.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?gi(l,u):be(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return be(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){rs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Uv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=new rt(ge.comparator);function cr(){return jC}const s1=new rt(ge.comparator);function Zi(...t){let e=s1;for(const n of t)e=e.insert(n.key,n);return e}function i1(t){let e=s1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _s(){return vo()}function o1(){return vo()}function vo(){return new Vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const qC=new rt(ge.comparator),HC=new gt(ge.comparator);function Ve(...t){let e=HC;for(const n of t)e=e.add(n);return e}const zC=new gt(Oe);function WC(){return zC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wl(e)?"-0":e}}function a1(t){return{integerValue:""+t}}function GC(t,e){return bC(e)?a1(e):_d(t,e)}/**
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
 */class uc{constructor(){this._=void 0}}function KC(t,e,n){return t instanceof Al?function(s,i){const o={fields:{[qv]:{stringValue:jv},[zv]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&fd(i)&&(i=ac(i)),i&&(o.fields[Hv]=i),{mapValue:o}}(n,e):t instanceof Uo?c1(t,e):t instanceof Bo?u1(t,e):function(s,i){const o=l1(s,i),c=Ym(o)+Ym(s.Ee);return Ku(o)&&Ku(s.Ee)?a1(c):_d(s.serializer,c)}(t,e)}function YC(t,e,n){return t instanceof Uo?c1(t,e):t instanceof Bo?u1(t,e):n}function l1(t,e){return t instanceof Pl?function(r){return Ku(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Al extends uc{}class Uo extends uc{constructor(e){super(),this.elements=e}}function c1(t,e){const n=h1(e);for(const r of t.elements)n.some(s=>$n(s,r))||n.push(r);return{arrayValue:{values:n}}}class Bo extends uc{constructor(e){super(),this.elements=e}}function u1(t,e){let n=h1(e);for(const r of t.elements)n=n.filter(s=>!$n(s,r));return{arrayValue:{values:n}}}class Pl extends uc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Ym(t){return at(t.integerValue||t.doubleValue)}function h1(t){return pd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function QC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Uo&&s instanceof Uo||r instanceof Bo&&s instanceof Bo?mi(r.elements,s.elements,$n):r instanceof Pl&&s instanceof Pl?$n(r.Ee,s.Ee):r instanceof Al&&s instanceof Al}(t.transform,e.transform)}class XC{constructor(e,n){this.version=e,this.transformResults=n}}class Gt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gt}static exists(e){return new Gt(void 0,e)}static updateTime(e){return new Gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Za(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hc{}function d1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new dc(t.key,Gt.none()):new ta(t.key,t.data,Gt.none());{const n=t.data,r=Qt.empty();let s=new gt(Rt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ss(t.key,r,new nn(s.toArray()),Gt.none())}}function JC(t,e,n){t instanceof ta?function(s,i,o){const c=s.value.clone(),l=Xm(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof ss?function(s,i,o){if(!Za(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Xm(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(f1(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function bo(t,e,n,r){return t instanceof ta?function(i,o,c,l){if(!Za(i.precondition,o))return c;const u=i.value.clone(),h=Jm(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ss?function(i,o,c,l){if(!Za(i.precondition,o))return c;const u=Jm(i.fieldTransforms,l,o),h=o.data;return h.setAll(f1(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,c){return Za(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function ZC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=l1(r.transform,s||null);i!=null&&(n===null&&(n=Qt.empty()),n.set(r.field,i))}return n||null}function Qm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&mi(r,s,(i,o)=>QC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ta extends hc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ss extends hc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function f1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Xm(t,e,n){const r=new Map;ze(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,YC(o,c,n[s]))}return r}function Jm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,KC(i,o,e))}return r}class dc extends hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eR extends hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&JC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=o1();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=d1(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ve())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,(n,r)=>Qm(n,r))&&mi(this.baseMutations,e.baseMutations,(n,r)=>Qm(n,r))}}class vd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ze(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return qC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new vd(e,n,r,s)}}/**
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
 */class nR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class rR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,Fe;function sR(t){switch(t){case q.OK:return be(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return be(15467,{code:t})}}function p1(t){if(t===void 0)return lr("GRPC error has no .code"),q.UNKNOWN;switch(t){case ht.OK:return q.OK;case ht.CANCELLED:return q.CANCELLED;case ht.UNKNOWN:return q.UNKNOWN;case ht.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case ht.INTERNAL:return q.INTERNAL;case ht.UNAVAILABLE:return q.UNAVAILABLE;case ht.UNAUTHENTICATED:return q.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case ht.NOT_FOUND:return q.NOT_FOUND;case ht.ALREADY_EXISTS:return q.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return q.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case ht.ABORTED:return q.ABORTED;case ht.OUT_OF_RANGE:return q.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return q.UNIMPLEMENTED;case ht.DATA_LOSS:return q.DATA_LOSS;default:return be(39323,{code:t})}}(Fe=ht||(ht={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const iR=new Br([4294967295,4294967295],0);function Zm(t){const e=Mv().encode(t),n=new Cv;return n.update(e),new Uint8Array(n.digest())}function eg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Br([n,r],0),new Br([s,i],0)]}class bd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new eo(`Invalid padding: ${n}`);if(r<0)throw new eo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new eo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new eo(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Br.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(Br.fromNumber(r)));return s.compare(iR)===1&&(s=new Br([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Zm(e),[r,s]=eg(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new bd(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.fe===0)return;const n=Zm(e),[r,s]=eg(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class eo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,na.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fc(Se.min(),s,new rt(Oe),cr(),Ve())}}class na{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new na(r,n,Ve(),Ve(),Ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class m1{constructor(e,n){this.targetId=e,this.De=n}}class g1{constructor(e,n,r=Dt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class tg{constructor(){this.ve=0,this.Ce=ng(),this.Fe=Dt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ve(),n=Ve(),r=Ve();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:be(38017,{changeType:i})}}),new na(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=ng()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class oR{constructor(e){this.We=e,this.Ge=new Map,this.ze=cr(),this.je=Va(),this.Je=Va(),this.He=new rt(Oe)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:be(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,s)=>{this.nt(s)&&n(s)})}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Qu(i))if(r===0){const o=new ge(i.path);this.Xe(n,o,$t.newNoDocument(o,Se.min()))}else ze(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const c=this._t(e),l=c?this.ut(c,e,o):1;if(l!==0){this.rt(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Yr(r).toUint8Array()}catch(l){if(l instanceof Bv)return Wr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new bd(o,s,i)}catch(l){return Wr(l instanceof eo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(n,i,null),s++)}),s}Pt(e){const n=new Map;this.Ge.forEach((i,o)=>{const c=this.st(o);if(c){if(i.current&&Qu(c.target)){const l=new ge(c.target.path);this.Tt(l).has(o)||this.It(o,l)||this.Xe(o,l,$t.newNoDocument(l,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}});let r=Ve();this.Je.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.st(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ze.forEach((i,o)=>o.setReadTime(e));const s=new fc(e,n,this.He,this.ze,r);return this.ze=cr(),this.je=Va(),this.Je=Va(),this.He=new rt(Oe),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new tg,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new gt(Oe),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new gt(Oe),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||ue("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new tg),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Va(){return new rt(ge.comparator)}function ng(){return new rt(ge.comparator)}const aR={asc:"ASCENDING",desc:"DESCENDING"},lR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cR={and:"AND",or:"OR"};class uR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zu(t,e){return t.useProto3Json||oc(e)?e:{value:e}}function Cl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function y1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hR(t,e){return Cl(t,e.toTimestamp())}function Vn(t){return ze(!!t,49232),Se.fromTimestamp(function(n){const r=Kr(n);return new ke(r.seconds,r.nanos)}(t))}function Ed(t,e){return eh(t,e).canonicalString()}function eh(t,e){const n=function(s){return new Xe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function _1(t){const e=Xe.fromString(t);return ze(T1(e),10190,{key:e.toString()}),e}function th(t,e){return Ed(t.databaseId,e.path)}function uu(t,e){const n=_1(e);if(n.get(1)!==t.databaseId.projectId)throw new ae(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ae(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ge(b1(n))}function v1(t,e){return Ed(t.databaseId,e)}function dR(t){const e=_1(t);return e.length===4?Xe.emptyPath():b1(e)}function nh(t){return new Xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function b1(t){return ze(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function rg(t,e,n){return{name:th(t,e),fields:n.value.mapValue.fields}}function fR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:be(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(ze(h===void 0||typeof h=="string",58123),Dt.fromBase64String(h||"")):(ze(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Dt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const h=u.code===void 0?q.UNKNOWN:p1(u.code);return new ae(h,u.message||"")}(o);n=new g1(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=uu(t,r.document.name),i=Vn(r.document.updateTime),o=r.document.createTime?Vn(r.document.createTime):Se.min(),c=new Qt({mapValue:{fields:r.document.fields}}),l=$t.newFoundDocument(s,i,o,c),u=r.targetIds||[],h=r.removedTargetIds||[];n=new el(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=uu(t,r.document),i=r.readTime?Vn(r.readTime):Se.min(),o=$t.newNoDocument(s,i),c=r.removedTargetIds||[];n=new el([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=uu(t,r.document),i=r.removedTargetIds||[];n=new el([],i,s,null)}else{if(!("filter"in e))return be(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new rR(s,i),c=r.targetId;n=new m1(c,o)}}return n}function pR(t,e){let n;if(e instanceof ta)n={update:rg(t,e.key,e.value)};else if(e instanceof dc)n={delete:th(t,e.key)};else if(e instanceof ss)n={update:rg(t,e.key,e.data),updateMask:TR(e.fieldMask)};else{if(!(e instanceof eR))return be(16599,{Rt:e.type});n={verify:th(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Al)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Uo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Bo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Pl)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw be(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:hR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:be(27497)}(t,e.precondition)),n}function mR(t,e){return t&&t.length>0?(ze(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Vn(s.updateTime):Vn(i);return o.isEqual(Se.min())&&(o=Vn(i)),new XC(o,s.transformResults||[])}(n,e))):[]}function gR(t,e){return{documents:[v1(t,e.path)]}}function yR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=v1(t,s);const i=function(u){if(u.length!==0)return w1(wn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Qs(p.field),direction:bR(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Zu(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{Vt:n,parent:s}}function _R(t){let e=dR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ze(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(m){const p=E1(m);return p instanceof wn&&Xv(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(p=>function(D){return new $o(Xs(D.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(p))}(n.orderBy));let c=null;n.limit&&(c=function(m){let p;return p=typeof m=="object"?m.value:m,oc(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(m){const p=!!m.before,_=m.values||[];return new Sl(_,p)}(n.startAt));let u=null;return n.endAt&&(u=function(m){const p=!m.before,_=m.values||[];return new Sl(_,p)}(n.endAt)),FC(e,s,o,i,c,"F",l,u)}function vR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return be(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function E1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xs(n.unaryFilter.field);return dt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xs(n.unaryFilter.field);return dt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xs(n.unaryFilter.field);return dt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xs(n.unaryFilter.field);return dt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return be(61313);default:return be(60726)}}(t):t.fieldFilter!==void 0?function(n){return dt.create(Xs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return be(58110);default:return be(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return wn.create(n.compositeFilter.filters.map(r=>E1(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return be(1026)}}(n.compositeFilter.op))}(t):be(30097,{filter:t})}function bR(t){return aR[t]}function ER(t){return lR[t]}function wR(t){return cR[t]}function Qs(t){return{fieldPath:t.canonicalString()}}function Xs(t){return Rt.fromServerFormat(t.fieldPath)}function w1(t){return t instanceof dt?function(n){if(n.op==="=="){if(Hm(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NAN"}};if(qm(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hm(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NOT_NAN"}};if(qm(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qs(n.field),op:ER(n.op),value:n.value}}}(t):t instanceof wn?function(n){const r=n.getFilters().map(s=>w1(s));return r.length===1?r[0]:{compositeFilter:{op:wR(n.op),filters:r}}}(t):be(54877,{filter:t})}function TR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function T1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,r,s,i=Se.min(),o=Se.min(),c=Dt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.gt=e}}function SR(t){const e=_R({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ju(e,e.limit,"L"):e}/**
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
 */class AR{constructor(){this.Dn=new PR}addToCollectionParentIndex(e,n){return this.Dn.add(n),G.resolve()}getCollectionParents(e,n){return G.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return G.resolve()}deleteFieldIndex(e,n){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,n){return G.resolve()}getDocumentsMatchingTarget(e,n){return G.resolve(null)}getIndexType(e,n){return G.resolve(0)}getFieldIndexes(e,n){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,n){return G.resolve(Gr.min())}getMinOffsetFromCollectionGroup(e,n){return G.resolve(Gr.min())}updateCollectionGroup(e,n,r){return G.resolve()}updateIndexEntries(e,n){return G.resolve()}}class PR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new gt(Xe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new gt(Xe.comparator)).toArray()}}/**
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
 */const sg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},I1=41943040;class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(I1,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new _i(0)}static ur(){return new _i(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="LruGarbageCollector",CR=1048576;function og([t,e],[n,r]){const s=Oe(t,n);return s===0?Oe(e,r):s}class RR{constructor(e){this.Tr=e,this.buffer=new gt(og),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();og(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class DR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ue(ig,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Pi(n)?ue(ig,"Ignoring IndexedDB error during garbage collection: ",n):await Ai(n)}await this.Rr(3e5)})}}class kR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return G.resolve(ic.ue);const r=new RR(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(sg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sg):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,c,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(u=Date.now(),Ks()<=xe.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${m} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function OR(t,e){return new kR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(){this.changes=new Vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?G.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&bo(r.mutation,s,nn.empty(),ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ve()){const s=_s();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Zi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=_s();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=cr();const o=vo(),c=function(){return vo()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof ss)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),bo(h.mutation,u,h.mutation.getFieldMask(),ke.now())):o.set(u.key,nn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var m;return c.set(u,new xR(h,(m=o.get(u))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,n){const r=vo();let s=new rt((o,c)=>o-c),i=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||nn.empty();h=c.applyToLocalView(u,h),r.set(l,h);const m=(s.get(c.batchId)||Ve()).add(l);s=s.insert(c.batchId,m)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,h=l.value,m=o1();h.forEach(p=>{if(!i.has(p)){const _=d1(n.get(p),r.get(p));_!==null&&m.set(p,_),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,m))}return G.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ge.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):t1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):G.resolve(_s());let c=Vo,l=i;return o.next(u=>G.forEach(u,(h,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(h)?G.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Ve())).next(h=>({batchId:c,changes:i1(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ge(n)).next(r=>{let s=Zi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Zi();return this.indexManager.getCollectionParents(e,i).next(c=>G.forEach(c,l=>{const u=function(m,p){return new Ci(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((m,p)=>{o=o.insert(m,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,$t.newInvalidDocument(h)))});let c=Zi();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&bo(h.mutation,u,nn.empty(),ke.now()),cc(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return G.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Vn(s.createTime)}}(n)),G.resolve()}getNamedQuery(e,n){return G.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(s){return{name:s.name,query:SR(s.bundledQuery),readTime:Vn(s.readTime)}}(n)),G.resolve()}}/**
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
 */class LR{constructor(){this.overlays=new rt(ge.comparator),this.kr=new Map}getOverlay(e,n){return G.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_s();return G.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.wt(e,n,i)}),G.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),G.resolve()}getOverlaysForCollection(e,n,r){const s=_s(),i=n.length+1,o=new ge(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return G.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new rt((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=_s(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const c=_s(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>c.set(u,h)),!(c.size()>=s)););return G.resolve(c)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new nR(n,r));let i=this.kr.get(n);i===void 0&&(i=Ve(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class FR{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(){this.qr=new gt(yt.Qr),this.$r=new gt(yt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new yt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new yt(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new ge(new Xe([])),r=new yt(n,e),s=new yt(n,e+1),i=[];return this.$r.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new ge(new Xe([])),r=new yt(n,e),s=new yt(n,e+1);let i=Ve();return this.$r.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new yt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class yt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return ge.comparator(e.key,n.key)||Oe(e.Hr,n.Hr)}static Ur(e,n){return Oe(e.Hr,n.Hr)||ge.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new gt(yt.Qr)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Yr=this.Yr.add(new yt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return G.resolve(o)}lookupMutationBatch(e,n){return G.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return G.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?dd:this.er-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new yt(n,0),s=new yt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],o=>{const c=this.Zr(o.Hr);i.push(c)}),G.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(Oe);return n.forEach(s=>{const i=new yt(s,0),o=new yt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],c=>{r=r.add(c.Hr)})}),G.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ge.isDocumentKey(i)||(i=i.child(""));const o=new yt(new ge(i),0);let c=new gt(Oe);return this.Yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Hr)),!0)},o),G.resolve(this.ei(c))}ei(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ze(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return G.forEach(n.mutations,s=>{const i=new yt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new yt(n,0),s=this.Yr.firstAfterOrEqual(r);return G.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.ni=e,this.docs=function(){return new rt(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return G.resolve(r?r.document.mutableCopy():$t.newInvalidDocument(n))}getEntries(e,n){let r=cr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():$t.newInvalidDocument(s))}),G.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=cr();const o=n.path,c=new ge(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||gC(mC(h),r)<=0||(s.has(h.key)||cc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return G.resolve(i)}getAllFromCollectionGroup(e,n,r,s){be(9500)}ri(e,n){return G.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new BR(this)}getSize(e){return G.resolve(this.size)}}class BR extends NR{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),G.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.persistence=e,this.ii=new Vs(n=>md(n),gd),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.si=0,this.oi=new wd,this.targetCount=0,this._i=_i.ar()}forEachTarget(e,n){return this.ii.forEach((r,s)=>n(s)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),G.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new _i(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,G.resolve()}updateTargetData(e,n){return this.hr(n),G.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),G.waitFor(i).next(()=>s)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return G.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),G.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),G.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),G.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return G.resolve(r)}containsKey(e,n){return G.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n){this.ai={},this.overlays={},this.ui=new ic(0),this.ci=!1,this.ci=!0,this.li=new FR,this.referenceDelegate=e(this),this.hi=new jR(this),this.indexManager=new AR,this.remoteDocumentCache=function(s){return new UR(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new IR(n),this.Ti=new MR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new LR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new $R(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){ue("MemoryPersistence","Starting transaction:",e);const s=new qR(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return G.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class qR extends _C{constructor(e){super(),this.currentSequenceNumber=e}}class Td{constructor(e){this.persistence=e,this.Ai=new wd,this.Ri=null}static Vi(e){return new Td(e)}get mi(){if(this.Ri)return this.Ri;throw be(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),G.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),G.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),G.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.mi,r=>{const s=ge.fromPath(r);return this.fi(e,s).next(i=>{i||n.removeEntry(s,Se.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return G.or([()=>G.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Rl{constructor(e,n){this.persistence=e,this.gi=new Vs(r=>EC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=OR(this,n)}static Vi(e,n){return new Rl(e,n)}Ii(){}di(e){return G.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return G.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?G.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,o=>this.Sr(e,o,n).next(c=>{c||(r++,i.removeEntry(o,Se.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),G.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),G.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),G.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Xa(e.data.value)),n}Sr(e,n,r){return G.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return G.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=Ve(),s=Ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Id(e,n.fromCache,r,s)}}/**
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
 */class HR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class zR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return _I()?8:vC(Ut())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ys(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new HR;return this.ws(e,n,o).next(c=>{if(i.result=c,this.Rs)return this.Ss(e,n,o,c.size)})}).next(()=>i.result)}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(Ks()<=xe.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",Ys(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),G.resolve()):(Ks()<=xe.DEBUG&&ue("QueryEngine","Query:",Ys(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ks()<=xe.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",Ys(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xn(n))):G.resolve())}ps(e,n){if(Km(n))return G.resolve(null);let r=xn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ju(n,null,"F"),r=xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ve(...i);return this.gs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.bs(n,c);return this.Ds(n,u,o,l.readTime)?this.ps(e,Ju(n,null,"F")):this.vs(e,u,n,l)}))})))}ys(e,n,r,s){return Km(n)||s.isEqual(Se.min())?G.resolve(null):this.gs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?G.resolve(null):(Ks()<=xe.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ys(n)),this.vs(e,o,n,pC(s,Vo)).next(c=>c))})}bs(e,n){let r=new gt(r1(e));return n.forEach((s,i)=>{cc(e,i)&&(r=r.add(i))}),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return Ks()<=xe.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",Ys(n)),this.gs.getDocumentsMatchingQuery(e,n,Gr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="LocalStore",WR=3e8;class GR{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new rt(Oe),this.Ms=new Vs(i=>md(i),gd),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function KR(t,e,n,r){return new GR(t,e,n,r)}async function A1(t,e){const n=Pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Ve();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){c.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Bs:u,removedBatchIds:o,addedBatchIds:c}))})})}function YR(t,e){const n=Pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return function(c,l,u,h){const m=u.batch,p=m.keys();let _=G.resolve();return p.forEach(D=>{_=_.next(()=>h.getEntry(l,D)).next(I=>{const w=u.docVersions.get(D);ze(w!==null,48541),I.version.compareTo(w)<0&&(m.applyToRemoteDocument(I,u),I.isValidDocument()&&(I.setReadTime(u.commitVersion),h.addEntry(I)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Ve();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function P1(t){const e=Pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function QR(t,e){const n=Pe(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const c=[];e.targetChanges.forEach((h,m)=>{const p=s.get(m);if(!p)return;c.push(n.hi.removeMatchingKeys(i,h.removedDocuments,m).next(()=>n.hi.addMatchingKeys(i,h.addedDocuments,m)));let _=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?_=_.withResumeToken(Dt.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),s=s.insert(m,_),function(I,w,k){return I.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=WR?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(p,_,h)&&c.push(n.hi.updateTargetData(i,_))});let l=cr(),u=Ve();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),c.push(XR(i,o,e.documentUpdates).next(h=>{l=h.Ls,u=h.ks})),!r.isEqual(Se.min())){const h=n.hi.getLastRemoteSnapshotVersion(i).next(m=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(h)}return G.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Fs=s,i))}function XR(t,e,n){let r=Ve(),s=Ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=cr();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Se.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ue(Sd,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Ls:o,ks:s}})}function JR(t,e){const n=Pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=dd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ZR(t,e){const n=Pe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.hi.getTargetData(r,e).next(i=>i?(s=i,G.resolve(s)):n.hi.allocateTargetId(r).next(o=>(s=new Vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function rh(t,e,n){const r=Pe(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Pi(o))throw o;ue(Sd,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function ag(t,e,n){const r=Pe(t);let s=Se.min(),i=Ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const m=Pe(l),p=m.Ms.get(h);return p!==void 0?G.resolve(m.Fs.get(p)):m.hi.getTargetData(u,h)}(r,o,xn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:Se.min(),n?i:Ve())).next(c=>(eD(r,UC(e),c),{documents:c,qs:i})))}function eD(t,e,n){let r=t.xs.get(e)||Se.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.xs.set(e,r)}class lg{constructor(){this.activeTargetIds=WC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tD{constructor(){this.Fo=new lg,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new lg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nD{xo(e){}shutdown(){}}/**
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
 */const cg="ConnectivityMonitor";class ug{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ue(cg,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ue(cg,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ma=null;function sh(){return Ma===null?Ma=function(){return 268435456+Math.round(2147483648*Math.random())}():Ma++,"0x"+Ma.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="RestConnection",rD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sD{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Tl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=sh(),c=this.Go(e,n.toUriEncodedString());ue(hu,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:u}=new URL(c),h=wi(u);return this.jo(e,c,l,r,h).then(m=>(ue(hu,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Wr(hu,`RPC '${e}' ${o} failed with error: `,m,"url: ",c,"request:",r),m})}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Si}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,n){const r=rD[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="WebChannelConnection";class oD extends sD{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=sh();return new Promise((c,l)=>{const u=new Rv;u.setWithCredentials(!0),u.listenOnce(Dv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Qa.NO_ERROR:const m=u.getResponseJson();ue(Vt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),c(m);break;case Qa.TIMEOUT:ue(Vt,`RPC '${e}' ${o} timed out`),l(new ae(q.DEADLINE_EXCEEDED,"Request time out"));break;case Qa.HTTP_ERROR:const p=u.getStatus();if(ue(Vt,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const D=_?.error;if(D&&D.status&&D.message){const I=function(k){const x=k.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(x)>=0?x:q.UNKNOWN}(D.status);l(new ae(I,D.message))}else l(new ae(q.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new ae(q.UNAVAILABLE,"Connection failed."));break;default:be(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{ue(Vt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);ue(Vt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)})}P_(e,n,r){const s=sh(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Nv(),c=Ov(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");ue(Vt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const m=o.createWebChannel(h,l);this.T_(m);let p=!1,_=!1;const D=new iD({Ho:w=>{_?ue(Vt,`Not sending because RPC '${e}' stream ${s} is closed:`,w):(p||(ue(Vt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),p=!0),ue(Vt,`RPC '${e}' stream ${s} sending:`,w),m.send(w))},Yo:()=>m.close()}),I=(w,k,x)=>{w.listen(k,L=>{try{x(L)}catch(U){setTimeout(()=>{throw U},0)}})};return I(m,Ji.EventType.OPEN,()=>{_||(ue(Vt,`RPC '${e}' stream ${s} transport opened.`),D.s_())}),I(m,Ji.EventType.CLOSE,()=>{_||(_=!0,ue(Vt,`RPC '${e}' stream ${s} transport closed`),D.__(),this.I_(m))}),I(m,Ji.EventType.ERROR,w=>{_||(_=!0,Wr(Vt,`RPC '${e}' stream ${s} transport errored. Name:`,w.name,"Message:",w.message),D.__(new ae(q.UNAVAILABLE,"The operation could not be completed")))}),I(m,Ji.EventType.MESSAGE,w=>{var k;if(!_){const x=w.data[0];ze(!!x,16349);const L=x,U=L?.error||((k=L[0])===null||k===void 0?void 0:k.error);if(U){ue(Vt,`RPC '${e}' stream ${s} received error:`,U);const Y=U.status;let X=function(E){const P=ht[E];if(P!==void 0)return p1(P)}(Y),C=U.message;X===void 0&&(X=q.INTERNAL,C="Unknown error status: "+Y+" with message "+U.message),_=!0,D.__(new ae(X,C)),m.close()}else ue(Vt,`RPC '${e}' stream ${s} received:`,x),D.a_(x)}}),I(c,kv.STAT_EVENT,w=>{w.stat===zu.PROXY?ue(Vt,`RPC '${e}' stream ${s} detected buffering proxy`):w.stat===zu.NOPROXY&&ue(Vt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.o_()},0),D}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function du(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(t){return new uR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&ue("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="PersistentStream";class R1{constructor(e,n,r,s,i,o,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new C1(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(lr(n.toString()),lr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===n&&this.W_(r,s)},r=>{e(()=>{const s=new ae(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return ue(hg,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(ue(hg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aD extends R1{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=fR(this.serializer,e),r=function(i){if(!("targetChange"in i))return Se.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Se.min():o.readTime?Vn(o.readTime):Se.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=nh(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Qu(l)?{documents:gR(i,l)}:{query:yR(i,l).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=y1(i,o.resumeToken);const u=Zu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(Se.min())>0){c.readTime=Cl(i,o.snapshotVersion.toTimestamp());const u=Zu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=vR(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=nh(this.serializer),n.removeTarget=e,this.k_(n)}}class lD extends R1{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=mR(e.writeResults,e.commitTime),r=Vn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=nh(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pR(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{}class uD extends cD{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new ae(q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,eh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ae(q.UNKNOWN,i.toString())})}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Jo(e,eh(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ae(q.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class hD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(lr(n),this._a=!1):ue("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="RemoteStore";class dD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{Ms(this)&&(ue(Rs,"Restarting streams for network reachability change."),await async function(l){const u=Pe(l);u.Ia.add(4),await ra(u),u.Aa.set("Unknown"),u.Ia.delete(4),await mc(u)}(this))})}),this.Aa=new hD(r,s)}}async function mc(t){if(Ms(t))for(const e of t.da)await e(!0)}async function ra(t){for(const e of t.da)await e(!1)}function D1(t,e){const n=Pe(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Rd(n)?Cd(n):Ri(n).x_()&&Pd(n,e))}function Ad(t,e){const n=Pe(t),r=Ri(n);n.Ta.delete(e),r.x_()&&k1(n,e),n.Ta.size===0&&(r.x_()?r.B_():Ms(n)&&n.Aa.set("Unknown"))}function Pd(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ri(t).H_(e)}function k1(t,e){t.Ra.$e(e),Ri(t).Y_(e)}function Cd(t){t.Ra=new oR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Ri(t).start(),t.Aa.aa()}function Rd(t){return Ms(t)&&!Ri(t).M_()&&t.Ta.size>0}function Ms(t){return Pe(t).Ia.size===0}function O1(t){t.Ra=void 0}async function fD(t){t.Aa.set("Online")}async function pD(t){t.Ta.forEach((e,n)=>{Pd(t,e)})}async function mD(t,e){O1(t),Rd(t)?(t.Aa.la(e),Cd(t)):t.Aa.set("Unknown")}async function gD(t,e,n){if(t.Aa.set("Online"),e instanceof g1&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ta.delete(c),s.Ra.removeTarget(c))}(t,e)}catch(r){ue(Rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Dl(t,r)}else if(e instanceof el?t.Ra.Ye(e):e instanceof m1?t.Ra.it(e):t.Ra.et(e),!n.isEqual(Se.min()))try{const r=await P1(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Ra.Pt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.Ta.get(u);h&&i.Ta.set(u,h.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const h=i.Ta.get(l);if(!h)return;i.Ta.set(l,h.withResumeToken(Dt.EMPTY_BYTE_STRING,h.snapshotVersion)),k1(i,l);const m=new Vr(h.target,l,u,h.sequenceNumber);Pd(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ue(Rs,"Failed to raise snapshot:",r),await Dl(t,r)}}async function Dl(t,e,n){if(!Pi(e))throw e;t.Ia.add(1),await ra(t),t.Aa.set("Offline"),n||(n=()=>P1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ue(Rs,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await mc(t)})}function N1(t,e){return e().catch(n=>Dl(t,n,e))}async function gc(t){const e=Pe(t),n=Xr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:dd;for(;yD(e);)try{const s=await JR(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,_D(e,s)}catch(s){await Dl(e,s)}x1(e)&&V1(e)}function yD(t){return Ms(t)&&t.Pa.length<10}function _D(t,e){t.Pa.push(e);const n=Xr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function x1(t){return Ms(t)&&!Xr(t).M_()&&t.Pa.length>0}function V1(t){Xr(t).start()}async function vD(t){Xr(t).na()}async function bD(t){const e=Xr(t);for(const n of t.Pa)e.X_(n.mutations)}async function ED(t,e,n){const r=t.Pa.shift(),s=vd.from(r,e,n);await N1(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await gc(t)}async function wD(t,e){e&&Xr(t).Z_&&await async function(r,s){if(function(o){return sR(o)&&o!==q.ABORTED}(s.code)){const i=r.Pa.shift();Xr(r).N_(),await N1(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await gc(r)}}(t,e),x1(t)&&V1(t)}async function dg(t,e){const n=Pe(t);n.asyncQueue.verifyOperationInProgress(),ue(Rs,"RemoteStore received new credentials");const r=Ms(n);n.Ia.add(3),await ra(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await mc(n)}async function TD(t,e){const n=Pe(t);e?(n.Ia.delete(2),await mc(n)):e||(n.Ia.add(2),await ra(n),n.Aa.set("Unknown"))}function Ri(t){return t.Va||(t.Va=function(n,r,s){const i=Pe(n);return i.ia(),new aD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:fD.bind(null,t),e_:pD.bind(null,t),n_:mD.bind(null,t),J_:gD.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),Rd(t)?Cd(t):t.Aa.set("Unknown")):(await t.Va.stop(),O1(t))})),t.Va}function Xr(t){return t.ma||(t.ma=function(n,r,s){const i=Pe(n);return i.ia(),new lD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:vD.bind(null,t),n_:wD.bind(null,t),ea:bD.bind(null,t),ta:ED.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await gc(t)):(await t.ma.stop(),t.Pa.length>0&&(ue(Rs,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Dd(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kd(t,e){if(lr("AsyncQueue",`${e}: ${t}`),Pi(t))return new ae(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{static emptySet(e){return new oi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ge.comparator(n.key,r.key):(n,r)=>ge.comparator(n.key,r.key),this.keyedMap=Zi(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new oi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(){this.fa=new rt(ge.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):be(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class vi{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new vi(e,n,oi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class SD{constructor(){this.queries=pg(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=Pe(n),i=s.queries;s.queries=pg(),i.forEach((o,c)=>{for(const l of c.wa)l.onError(r)})})(this,new ae(q.ABORTED,"Firestore shutting down"))}}function pg(){return new Vs(t=>n1(t),lc)}async function M1(t,e){const n=Pe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new ID,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=kd(o,`Initialization of query '${Ys(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&Od(n)}async function L1(t,e){const n=Pe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function AD(t,e){const n=Pe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.wa)c.Ca(s)&&(r=!0);o.ya=s}}r&&Od(n)}function PD(t,e,n){const r=Pe(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function Od(t){t.Da.forEach(e=>{e.next()})}var ih,mg;(mg=ih||(ih={})).Fa="default",mg.Cache="cache";class F1{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new vi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=vi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ih.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e){this.key=e}}class U1{constructor(e){this.key=e}}class CD{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ve(),this.mutatedKeys=Ve(),this.Xa=r1(e),this.eu=new oi(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new fg,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,m)=>{const p=s.get(h),_=cc(this.query,m)?m:null,D=!!p&&this.mutatedKeys.has(p.key),I=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let w=!1;p&&_?p.data.isEqual(_.data)?D!==I&&(r.track({type:3,doc:_}),w=!0):this.iu(p,_)||(r.track({type:2,doc:_}),w=!0,(l&&this.Xa(_,l)>0||u&&this.Xa(_,u)<0)&&(c=!0)):!p&&_?(r.track({type:0,doc:_}),w=!0):p&&!_&&(r.track({type:1,doc:p}),w=!0,(l||u)&&(c=!0)),w&&(_?(o=o.add(_),i=I?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{eu:o,ru:r,Ds:c,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((h,m)=>function(_,D){const I=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return be(20277,{At:w})}};return I(_)-I(D)}(h.type,m.type)||this.Xa(h.doc,m.doc)),this.su(r),s=s!=null&&s;const c=n&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,u=l!==this.Ya;return this.Ya=l,o.length!==0||u?{snapshot:new vi(this.query,e.eu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new fg,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ve(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new U1(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new $1(r))}),n}uu(e){this.Ha=e.qs,this.Za=Ve();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return vi.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Nd="SyncEngine";class RD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class DD{constructor(e){this.key=e,this.lu=!1}}class kD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Vs(c=>n1(c),lc),this.Tu=new Map,this.Iu=new Set,this.du=new rt(ge.comparator),this.Eu=new Map,this.Au=new wd,this.Ru={},this.Vu=new Map,this.mu=_i.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function OD(t,e,n=!0){const r=W1(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await B1(r,e,n,!0),s}async function ND(t,e){const n=W1(t);await B1(n,e,!0,!1)}async function B1(t,e,n,r){const s=await ZR(t.localStore,xn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await xD(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&D1(t.remoteStore,s),c}async function xD(t,e,n,r,s){t.gu=(m,p,_)=>async function(I,w,k,x){let L=w.view.nu(k);L.Ds&&(L=await ag(I.localStore,w.query,!1).then(({documents:C})=>w.view.nu(C,L)));const U=x&&x.targetChanges.get(w.targetId),Y=x&&x.targetMismatches.get(w.targetId)!=null,X=w.view.applyChanges(L,I.isPrimaryClient,U,Y);return yg(I,w.targetId,X._u),X.snapshot}(t,m,p,_);const i=await ag(t.localStore,e,!0),o=new CD(e,i.qs),c=o.nu(i.documents),l=na.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);yg(t,n,u._u);const h=new RD(e,n,o);return t.Pu.set(e,h),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function VD(t,e,n){const r=Pe(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(o=>!lc(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await rh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ad(r.remoteStore,s.targetId),oh(r,s.targetId)}).catch(Ai)):(oh(r,s.targetId),await rh(r.localStore,s.targetId,!0))}async function MD(t,e){const n=Pe(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ad(n.remoteStore,r.targetId))}async function LD(t,e,n){const r=HD(t);try{const s=await function(o,c){const l=Pe(o),u=ke.now(),h=c.reduce((_,D)=>_.add(D.key),Ve());let m,p;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let D=cr(),I=Ve();return l.Os.getEntries(_,h).next(w=>{D=w,D.forEach((k,x)=>{x.isValidDocument()||(I=I.add(k))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,D)).next(w=>{m=w;const k=[];for(const x of c){const L=ZC(x,m.get(x.key).overlayedDocument);L!=null&&k.push(new ss(x.key,L,Kv(L.value.mapValue),Gt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,k,c)}).next(w=>{p=w;const k=w.applyToLocalDocumentSet(m,I);return l.documentOverlayCache.saveOverlays(_,w.batchId,k)})}).then(()=>({batchId:p.batchId,changes:i1(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Ru[o.currentUser.toKey()];u||(u=new rt(Oe)),u=u.insert(c,l),o.Ru[o.currentUser.toKey()]=u}(r,s.batchId,n),await sa(r,s.changes),await gc(r.remoteStore)}catch(s){const i=kd(s,"Failed to persist write");n.reject(i)}}async function j1(t,e){const n=Pe(t);try{const r=await QR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(ze(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?ze(o.lu,14607):s.removedDocuments.size>0&&(ze(o.lu,42227),o.lu=!1))}),await sa(n,r,e)}catch(r){await Ai(r)}}function gg(t,e,n){const r=Pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=Pe(o);l.onlineState=c;let u=!1;l.queries.forEach((h,m)=>{for(const p of m.wa)p.va(c)&&(u=!0)}),u&&Od(l)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function FD(t,e,n){const r=Pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new rt(ge.comparator);o=o.insert(i,$t.newNoDocument(i,Se.min()));const c=Ve().add(i),l=new fc(Se.min(),new Map,new rt(Oe),o,c);await j1(r,l),r.du=r.du.remove(i),r.Eu.delete(e),xd(r)}else await rh(r.localStore,e,!1).then(()=>oh(r,e,n)).catch(Ai)}async function $D(t,e){const n=Pe(t),r=e.batch.batchId;try{const s=await YR(n.localStore,e);H1(n,r,null),q1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await sa(n,s)}catch(s){await Ai(s)}}async function UD(t,e,n){const r=Pe(t);try{const s=await function(o,c){const l=Pe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,c).next(m=>(ze(m!==null,37113),h=m.keys(),l.mutationQueue.removeMutationBatch(u,m))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);H1(r,e,n),q1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await sa(r,s)}catch(s){await Ai(s)}}function q1(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function H1(t,e,n){const r=Pe(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function oh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||z1(t,r)})}function z1(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Ad(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),xd(t))}function yg(t,e,n){for(const r of n)r instanceof $1?(t.Au.addReference(r.key,e),BD(t,r)):r instanceof U1?(ue(Nd,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||z1(t,r.key)):be(19791,{yu:r})}function BD(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(ue(Nd,"New document in limbo: "+n),t.Iu.add(r),xd(t))}function xd(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new ge(Xe.fromString(e)),r=t.mu.next();t.Eu.set(r,new DD(n)),t.du=t.du.insert(n,r),D1(t.remoteStore,new Vr(xn(yd(n.path)),r,"TargetPurposeLimboResolution",ic.ue))}}async function sa(t,e,n){const r=Pe(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((c,l)=>{o.push(r.gu(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const m=u?!u.fromCache:(h=n?.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(u){s.push(u);const m=Id.Es(l.targetId,u);i.push(m)}}))}),await Promise.all(o),r.hu.J_(s),await async function(l,u){const h=Pe(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>G.forEach(u,p=>G.forEach(p.Is,_=>h.persistence.referenceDelegate.addReference(m,p.targetId,_)).next(()=>G.forEach(p.ds,_=>h.persistence.referenceDelegate.removeReference(m,p.targetId,_)))))}catch(m){if(!Pi(m))throw m;ue(Sd,"Failed to update sequence numbers: "+m)}for(const m of u){const p=m.targetId;if(!m.fromCache){const _=h.Fs.get(p),D=_.snapshotVersion,I=_.withLastLimboFreeSnapshotVersion(D);h.Fs=h.Fs.insert(p,I)}}}(r.localStore,i))}async function jD(t,e){const n=Pe(t);if(!n.currentUser.isEqual(e)){ue(Nd,"User change. New user:",e.toKey());const r=await A1(n.localStore,e);n.currentUser=e,function(i,o){i.Vu.forEach(c=>{c.forEach(l=>{l.reject(new ae(q.CANCELLED,o))})}),i.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await sa(n,r.Bs)}}function qD(t,e){const n=Pe(t),r=n.Eu.get(e);if(r&&r.lu)return Ve().add(r.key);{let s=Ve();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const c=n.Pu.get(o);s=s.unionWith(c.view.tu)}return s}}function W1(t){const e=Pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=j1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FD.bind(null,e),e.hu.J_=AD.bind(null,e.eventManager),e.hu.pu=PD.bind(null,e.eventManager),e}function HD(t){const e=Pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$D.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UD.bind(null,e),e}class kl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return KR(this.persistence,new zR,e.initialUser,this.serializer)}Du(e){return new S1(Td.Vi,this.serializer)}bu(e){return new tD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kl.provider={build:()=>new kl};class zD extends kl{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){ze(this.persistence.referenceDelegate instanceof Rl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new DR(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new S1(r=>Rl.Vi(r,n),this.serializer)}}class ah{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jD.bind(null,this.syncEngine),await TD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new SD}()}createDatastore(e){const n=pc(e.databaseInfo.databaseId),r=function(i){return new oD(i)}(e.databaseInfo);return function(i,o,c,l){return new uD(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new dD(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>gg(this.syncEngine,n,0),function(){return ug.C()?new ug:new nD}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,h){const m=new kD(s,i,o,c,l,u);return h&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Pe(s);ue(Rs,"RemoteStore shutting down."),i.Ia.add(5),await ra(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ah.provider={build:()=>new ah};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class G1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):lr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="FirestoreClient";class WD{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Lt.UNAUTHENTICATED,this.clientId=hd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ue(Jr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ue(Jr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=kd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fu(t,e){t.asyncQueue.verifyOperationInProgress(),ue(Jr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await A1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{Wr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{ue("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{Wr("Terminating Firestore due to IndexedDb database deletion failed",s)})}),t._offlineComponents=e}async function _g(t,e){t.asyncQueue.verifyOperationInProgress();const n=await GD(t);ue(Jr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>dg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>dg(e.remoteStore,s)),t._onlineComponents=e}async function GD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ue(Jr,"Using user provided OfflineComponentProvider");try{await fu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===q.FAILED_PRECONDITION||s.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Wr("Error using user provided cache. Falling back to memory cache: "+n),await fu(t,new kl)}}else ue(Jr,"Using default OfflineComponentProvider"),await fu(t,new zD(void 0));return t._offlineComponents}async function K1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ue(Jr,"Using user provided OnlineComponentProvider"),await _g(t,t._uninitializedComponentsProvider._online)):(ue(Jr,"Using default OnlineComponentProvider"),await _g(t,new ah))),t._onlineComponents}function KD(t){return K1(t).then(e=>e.syncEngine)}async function Y1(t){const e=await K1(t),n=e.eventManager;return n.onListen=OD.bind(null,e.syncEngine),n.onUnlisten=VD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ND.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=MD.bind(null,e.syncEngine),n}function YD(t,e,n={}){const r=new rr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new G1({next:p=>{h.Ou(),o.enqueueAndForget(()=>L1(i,m));const _=p.docs.has(c);!_&&p.fromCache?u.reject(new ae(q.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&l&&l.source==="server"?u.reject(new ae(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),m=new F1(yd(c.path),h,{includeMetadataChanges:!0,ka:!0});return M1(i,m)}(await Y1(t),t.asyncQueue,e,n,r)),r.promise}function QD(t,e,n={}){const r=new rr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new G1({next:p=>{h.Ou(),o.enqueueAndForget(()=>L1(i,m)),p.fromCache&&l.source==="server"?u.reject(new ae(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),m=new F1(c,h,{includeMetadataChanges:!0,ka:!0});return M1(i,m)}(await Y1(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Q1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="firestore.googleapis.com",bg=!0;class Eg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=X1,this.ssl=bg}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:bg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=I1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<CR)throw new ae(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Q1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ae(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ae(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ae(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Eg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Eg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sC;switch(r.type){case"firstParty":return new lC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ae(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vg.get(n);r&&(ue("ComponentProvider","Removing Datastore"),vg.delete(n),r.terminate())}(this),Promise.resolve()}}function XD(t,e,n,r={}){var s;t=fn(t,yc);const i=wi(e),o=t._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i&&(B_(`https://${l}`),j_("Firestore",!0)),o.host!==X1&&o.host!==l&&Wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:l,ssl:i,emulatorOptions:r});if(!Is(u,c)&&(t._setSettings(u),r.mockUserToken)){let h,m;if(typeof r.mockUserToken=="string")h=r.mockUserToken,m=Lt.MOCK_USER;else{h=cI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ae(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Lt(p)}t._authCredentials=new iC(new Vv(h,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ls(this.firestore,e,this._query)}}class lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}toJSON(){return{type:lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ea(n,lt._jsonSchema))return new lt(e,r||null,new ge(Xe.fromString(n.referencePath)))}}lt._jsonSchemaVersion="firestore/documentReference/1.0",lt._jsonSchema={type:ft("string",lt._jsonSchemaVersion),referencePath:ft("string")};class jr extends Ls{constructor(e,n,r){super(e,n,yd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new ge(e))}withConverter(e){return new jr(this.firestore,e,this._path)}}function An(t,e,...n){if(t=ot(t),Lv("collection","path",e),t instanceof yc){const r=Xe.fromString(e,...n);return xm(r),new jr(t,null,r)}{if(!(t instanceof lt||t instanceof jr))throw new ae(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Xe.fromString(e,...n));return xm(r),new jr(t.firestore,null,r)}}function ln(t,e,...n){if(t=ot(t),arguments.length===1&&(e=hd.newId()),Lv("doc","path",e),t instanceof yc){const r=Xe.fromString(e,...n);return Nm(r),new lt(t,null,new ge(r))}{if(!(t instanceof lt||t instanceof jr))throw new ae(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Xe.fromString(e,...n));return Nm(r),new lt(t.firestore,t instanceof jr?t.converter:null,new ge(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="AsyncQueue";class Tg{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new C1(this,"async_queue_retry"),this.oc=()=>{const r=du();r&&ue(wg,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=du();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=du();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new rr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Pi(e))throw e;ue(wg,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,lr("INTERNAL UNHANDLED ERROR: ",Ig(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=Dd.createAndSchedule(this,e,n,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&be(47125,{hc:Ig(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Ig(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class is extends yc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Tg,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tg(e),this._firestoreClient=void 0,await e}}}function Js(t,e){const n=typeof t=="object"?t:W_(),r=typeof t=="string"?t:Tl,s=Xh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=aI("firestore");i&&XD(s,...i)}return s}function _c(t){if(t._terminated)throw new ae(q.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||JD(t),t._firestoreClient}function JD(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,h){return new IC(c,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Q1(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new WD(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cn(Dt.fromBase64String(e))}catch(n){throw new ae(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cn(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:cn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ea(e,cn._jsonSchema))return cn.fromBase64String(e.bytes)}}cn._jsonSchemaVersion="firestore/bytes/1.0",cn._jsonSchema={type:ft("string",cn._jsonSchemaVersion),bytes:ft("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ae(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ae(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ae(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mn._jsonSchemaVersion}}static fromJSON(e){if(ea(e,Mn._jsonSchema))return new Mn(e.latitude,e.longitude)}}Mn._jsonSchemaVersion="firestore/geoPoint/1.0",Mn._jsonSchema={type:ft("string",Mn._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
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
 */class Ln{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ln._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ea(e,Ln._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ln(e.vectorValues);throw new ae(q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ln._jsonSchemaVersion="firestore/vectorValue/1.0",Ln._jsonSchema={type:ft("string",Ln._jsonSchemaVersion),vectorValues:ft("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=/^__.*__$/;class e2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new ta(e,this.data,n,this.fieldTransforms)}}class J1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Z1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw be(40011,{Ec:t})}}class Md{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Md(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ol(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Z1(this.Ec)&&ZD.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class t2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||pc(e)}Dc(e,n,r,s=!1){return new Md({Ec:e,methodName:n,bc:r,path:Rt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oa(t){const e=t._freezeSettings(),n=pc(t._databaseId);return new t2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ld(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);Fd("Data must be an object, but it was:",o,r);const c=nb(r,o);let l,u;if(i.merge)l=new nn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const m of i.mergeFields){const p=lh(e,m,n);if(!o.contains(p))throw new ae(q.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);sb(h,p)||h.push(p)}l=new nn(h),u=o.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,u=o.fieldTransforms;return new e2(new Qt(c),l,u)}class vc extends Vd{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vc}}function eb(t,e,n,r){const s=t.Dc(1,e,n);Fd("Data must be an object, but it was:",s,r);const i=[],o=Qt.empty();rs(r,(l,u)=>{const h=$d(e,l,n);u=ot(u);const m=s.gc(h);if(u instanceof vc)i.push(h);else{const p=aa(u,m);p!=null&&(i.push(h),o.set(h,p))}});const c=new nn(i);return new J1(o,c,s.fieldTransforms)}function tb(t,e,n,r,s,i){const o=t.Dc(1,e,n),c=[lh(e,r,n)],l=[s];if(i.length%2!=0)throw new ae(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)c.push(lh(e,i[p])),l.push(i[p+1]);const u=[],h=Qt.empty();for(let p=c.length-1;p>=0;--p)if(!sb(u,c[p])){const _=c[p];let D=l[p];D=ot(D);const I=o.gc(_);if(D instanceof vc)u.push(_);else{const w=aa(D,I);w!=null&&(u.push(_),h.set(_,w))}}const m=new nn(u);return new J1(h,m,o.fieldTransforms)}function n2(t,e,n,r=!1){return aa(n,t.Dc(r?4:3,e))}function aa(t,e){if(rb(t=ot(t)))return Fd("Unsupported field value:",e,t),nb(t,e);if(t instanceof Vd)return function(r,s){if(!Z1(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=aa(c,s.yc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return GC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ke.fromDate(r);return{timestampValue:Cl(s.serializer,i)}}if(r instanceof ke){const i=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cl(s.serializer,i)}}if(r instanceof Mn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cn)return{bytesValue:y1(s.serializer,r._byteString)};if(r instanceof lt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ed(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ln)return function(o,c){return{mapValue:{fields:{[Wv]:{stringValue:Gv},[Il]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.wc("VectorValues must only contain numeric values.");return _d(c.serializer,u)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${sc(r)}`)}(t,e)}function nb(t,e){const n={};return Uv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rs(t,(r,s)=>{const i=aa(s,e.Vc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function rb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof Mn||t instanceof cn||t instanceof lt||t instanceof Vd||t instanceof Ln)}function Fd(t,e,n){if(!rb(n)||!Fv(n)){const r=sc(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function lh(t,e,n){if((e=ot(e))instanceof ia)return e._internalPath;if(typeof e=="string")return $d(t,e);throw Ol("Field path arguments must be of type string or ",t,!1,void 0,n)}const r2=new RegExp("[~\\*/\\[\\]]");function $d(t,e,n){if(e.search(r2)>=0)throw Ol(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ia(...e.split("."))._internalPath}catch{throw Ol(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ol(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ae(q.INVALID_ARGUMENT,c+t+l)}function sb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new s2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class s2 extends ib{data(){return super.data()}}function bc(t,e){return typeof e=="string"?$d(t,e):e instanceof ia?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ae(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ud{}class ob extends Ud{}function Hs(t,e,...n){let r=[];e instanceof Ud&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Bd).length,c=i.filter(l=>l instanceof Ec).length;if(o>1||o>0&&c>0)throw new ae(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ec extends ob{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ec(e,n,r)}_apply(e){const n=this._parse(e);return ab(e._query,n),new Ls(e.firestore,e.converter,Xu(e._query,n))}_parse(e){const n=oa(e.firestore);return function(i,o,c,l,u,h,m){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new ae(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Ag(m,h);const D=[];for(const I of m)D.push(Sg(l,i,I));p={arrayValue:{values:D}}}else p=Sg(l,i,m)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Ag(m,h),p=n2(c,o,m,h==="in"||h==="not-in");return dt.create(u,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ki(t,e,n){const r=e,s=bc("where",t);return Ec._create(s,r,n)}class Bd extends Ud{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Bd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:wn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)ab(o,l),o=Xu(o,l)}(e._query,n),new Ls(e.firestore,e.converter,Xu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jd extends ob{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new jd(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new ae(q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ae(q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new $o(i,o)}(e._query,this._field,this._direction);return new Ls(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ci(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function La(t,e="asc"){const n=e,r=bc("orderBy",t);return jd._create(r,n)}function Sg(t,e,n){if(typeof(n=ot(n))=="string"){if(n==="")throw new ae(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!t1(e)&&n.indexOf("/")!==-1)throw new ae(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Xe.fromString(n));if(!ge.isDocumentKey(r))throw new ae(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return jm(t,new ge(r))}if(n instanceof lt)return jm(t,n._key);throw new ae(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sc(n)}.`)}function Ag(t,e){if(!Array.isArray(t)||t.length===0)throw new ae(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ab(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ae(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ae(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class o2{convertValue(e,n="none"){switch(Qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw be(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return rs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Il].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>at(o.doubleValue));return new Ln(i)}convertGeoPoint(e){return new Mn(at(e.latitude),at(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ac(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Mo(e));default:return null}}convertTimestamp(e){const n=Kr(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Xe.fromString(e);ze(T1(r),9688,{name:e});const s=new Lo(r.get(1),r.get(3)),i=new ge(r.popFirst(5));return s.isEqual(n)||lr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class to{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ws extends ib{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new tl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ws._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ws._jsonSchemaVersion="firestore/documentSnapshot/1.0",ws._jsonSchema={type:ft("string",ws._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class tl extends ws{data(e={}){return super.data(e)}}class ai{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new to(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new tl(this._firestore,this._userDataWriter,r.key,r,new to(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ae(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new tl(s._firestore,s._userDataWriter,c.doc.key,c.doc,new to(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new tl(s._firestore,s._userDataWriter,c.doc.key,c.doc,new to(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:a2(c.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ai._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=hd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function a2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return be(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t){t=fn(t,lt);const e=fn(t.firestore,is);return YD(_c(e),t._key).then(n=>c2(e,t,n))}ai._jsonSchemaVersion="firestore/querySnapshot/1.0",ai._jsonSchema={type:ft("string",ai._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};class lb extends o2{constructor(e){super(),this.firestore=e}convertBytes(e){return new cn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function zs(t){t=fn(t,Ls);const e=fn(t.firestore,is),n=_c(e),r=new lb(e);return i2(t._query),QD(n,t._query).then(s=>new ai(e,r,t,s))}function l2(t,e,n){t=fn(t,lt);const r=fn(t.firestore,is),s=qd(t.converter,e,n);return la(r,[Ld(oa(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Gt.none())])}function Fa(t,e,n,...r){t=fn(t,lt);const s=fn(t.firestore,is),i=oa(s);let o;return o=typeof(e=ot(e))=="string"||e instanceof ia?tb(i,"updateDoc",t._key,e,n,r):eb(i,"updateDoc",t._key,e),la(s,[o.toMutation(t._key,Gt.exists(!0))])}function Pg(t){return la(fn(t.firestore,is),[new dc(t._key,Gt.none())])}function $a(t,e){const n=fn(t.firestore,is),r=ln(t),s=qd(t.converter,e);return la(n,[Ld(oa(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Gt.exists(!1))]).then(()=>r)}function la(t,e){return function(r,s){const i=new rr;return r.asyncQueue.enqueueAndForget(async()=>LD(await KD(r),s,i)),i.promise}(_c(t),e)}function c2(t,e,n){const r=n.docs.get(e._key),s=new lb(t);return new ws(t,s,e._key,r,new to(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=oa(e)}set(e,n,r){this._verifyNotCommitted();const s=pu(e,this._firestore),i=qd(s.converter,n,r),o=Ld(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Gt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=pu(e,this._firestore);let o;return o=typeof(n=ot(n))=="string"||n instanceof ia?tb(this._dataReader,"WriteBatch.update",i._key,n,r,s):eb(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Gt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=pu(e,this._firestore);return this._mutations=this._mutations.concat(new dc(n._key,Gt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ae(q.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function pu(t,e){if((t=ot(t)).firestore!==e)throw new ae(q.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(t){return _c(t=fn(t,is)),new u2(t,e=>la(t,e))}(function(e,n=!0){(function(s){Si=s})(Ti),fi(new Ss("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new is(new oC(r.getProvider("auth-internal")),new cC(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ae(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ur(Cm,Rm,e),Ur(Cm,Rm,"esm2017")})();const In=x_("auth",{state:()=>({user:null,userProfile:null,isAuthReady:!1,authInstance:null,loading:!1,error:null,successMessage:null,isProfileLoading:!1}),getters:{isProfileComplete:t=>!!t.userProfile?.role&&!!t.userProfile?.birthDate,role:t=>t.userProfile?.role},actions:{initAuth(t){t&&(this.authInstance=t,gv(this.authInstance,async e=>{if(e){this.user=e,this.isProfileLoading=!0;try{const n=Js(),s=ln(n,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","users",e.uid),i=await ch(s);i.exists()?this.userProfile=i.data():this.userProfile=null}catch(n){console.error("Failed to fetch user profile:",n),this.userProfile=null}finally{this.isProfileLoading=!1}}else this.user=null,this.userProfile=null;this.isAuthReady=!0}))},setUserProfile(t){this.userProfile=t},async logout(){await zA(this.authInstance)},async signupWithEmail(t,e,n){this.loading=!0,this.error=null,this.successMessage=null;try{const r=await $A(this.authInstance,e,n);return await jA(r.user,{displayName:t}),this.user=r.user,this.successMessage="Account created successfully!",!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async signInWithEmail(t,e){this.loading=!0,this.error=null,this.successMessage=null;try{const n=await UA(this.authInstance,t,e);return this.user=n.user,!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async signInWithGoogle(){this.loading=!0,this.error=null,this.successMessage=null;try{const t=new Xn,e=await hP(this.authInstance,t);return this.user=e.user,!0}catch(t){return this.error=t.message,!1}finally{this.loading=!1}},async sendPasswordReset(t){this.loading=!0,this.error=null,this.successMessage=null;try{return await LA(this.authInstance,t),this.successMessage="Password reset link sent to your email!",!0}catch(e){return this.error=e.message,!1}finally{this.loading=!1}},async confirmPasswordReset(t,e){this.loading=!0,this.error=null,this.successMessage=null;try{return await FA(this.authInstance,t,e),this.successMessage="Your password has been reset successfully! You can now sign in with your new password.",!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}}}}),Di=x_("database",{state:()=>({loading:!1,error:null}),actions:{_getDBEssentials(){const t=In();if(!t.user?.uid)return this.error="User not authenticated. Operation cancelled.",null;const e=Js(),n="1:382664693760:web:7582abe58d70b3260f20e5",r=t.user.uid;return{db:e,appId:n,userId:r}},async setUserProfile(t,e){console.log(`[DB_STORE] setUserProfile: Updating profile for user ID: ${t}`),this.loading=!0,this.error=null;try{const n=Js(),s=ln(n,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","users",t);return await l2(s,e,{merge:!0}),console.log(`[DB_STORE] setUserProfile: Successfully updated profile for ${t}.`),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async fetchUserProfile(t){this.loading=!0,this.error=null;try{const e=this._getDBEssentials();if(!e)return null;const{db:n,appId:r}=e,s=ln(n,"artifacts",r,"users",t),i=await ch(s);return i.exists()?{id:i.id,...i.data()}:null}catch(e){return this.error=e.message,null}finally{this.loading=!1}},async addNewPatient(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=An(n,"artifacts",r,"patients"),o={...t,creatorId:s,createdAt:ke.now(),updatedAt:ke.now()};return(await $a(i,o)).id}catch(n){return this.error=n.message,null}finally{this.loading=!1}},async updatePatientProfile(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s}=n,i=ln(r,"artifacts",s,"patients",t);return await Fa(i,{...e,updatedAt:ke.now()}),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async fetchPatientsForDoctor(){this.loading=!0,this.error=null;const t=this._getDBEssentials();if(!t)return[];try{const{db:e,appId:n,userId:r}=t,s=An(e,"artifacts",n,"patients"),i=Hs(s,Ki("creatorId","==",r),La("createdAt","desc"));return(await zs(i)).docs.map(c=>({id:c.id,...c.data()}))}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async deletePatientProfile(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return!1;try{const{db:n,appId:r}=e,s=h2(n),i=ln(n,"artifacts",r,"patients",t);s.delete(i);const o=An(n,"artifacts",r,"scans"),c=Hs(o,Ki("patientId","==",t));return(await zs(c)).forEach(u=>s.delete(u.ref)),await s.commit(),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async createScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=An(n,"artifacts",r,"scans"),o={...t};delete o.id;let c;const l=o.scanDate;if(l instanceof ke)c=l;else if(l instanceof Date&&!isNaN(l.getTime()))c=ke.fromDate(l);else if(typeof l=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(l)){const m=l.split("-"),p=new Date(Date.UTC(m[0],parseInt(m[1],10)-1,m[2],12,0,0));if(isNaN(p.getTime()))throw new RangeError("Provided scanDate string resulted in an invalid Date.");c=ke.fromDate(p)}else throw console.error("Invalid scanDate received by createScan:",l),new RangeError('Invalid or unsupported type for scanDate. Must be a Timestamp, Date, or "YYYY-MM-DD" string.');const u={...o,scanDate:c,creatorId:s,isPersonalScan:o.patientId===s,createdAt:ke.now()};if(!u.patientId)throw new Error("Cannot create a scan without a patientId.");return(await $a(i,u)).id}catch(n){return console.error("[DB_STORE] Error details during scan creation:",n),this.error=n.message,null}finally{this.loading=!1}},async updateScan(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s}=n,i=ln(r,"artifacts",s,"scans",t),o={...e,updatedAt:ke.now()};return await Fa(i,o),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async deleteScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return!1;try{const{db:n,appId:r}=e,s=ln(n,"artifacts",r,"scans",t);return await Pg(s),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async fetchScansForPatient(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return[];try{const{db:n,appId:r}=e,s=An(n,"artifacts",r,"scans"),i=Hs(s,Ki("patientId","==",t),La("scanDate","desc"));return(await zs(i)).docs.map(c=>({id:c.id,...c.data()}))}catch(n){return console.error("Error in fetchScansForPatient. Is the Firestore index for 'scans' (patientId asc, scanDate desc) created?",n),this.error=n.message,[]}finally{this.loading=!1}},async fetchDoctorCreatedScans(){this.loading=!0,this.error=null;const t=this._getDBEssentials();if(!t)return[];try{const{db:e,appId:n,userId:r}=t,s=An(e,"artifacts",n,"scans"),i=Hs(s,Ki("creatorId","==",r),La("scanDate","desc"));return(await zs(i)).docs.map(c=>({id:c.id,...c.data()}))}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async addPregnancyDeclaration(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=An(n,"artifacts",r,"users",s,"pregnancies"),o={...t,status:"active",endDate:null,createdAt:ke.now()};return(await $a(i,o)).id}catch(n){return this.error=n.message,null}finally{this.loading=!1}},async fetchPregnancyHistory(){this.loading=!0,this.error=null;const t=this._getDBEssentials();if(!t)return[];try{const{db:e,appId:n,userId:r}=t,s=An(e,"artifacts",n,"users",r,"pregnancies"),i=Hs(s,La("declarationDate","desc"));return(await zs(i)).docs.map(c=>({id:c.id,...c.data()}))}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async updatePregnancyRecord(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s,userId:i}=n,o=ln(r,"artifacts",s,"users",i,"pregnancies",t);return await Fa(o,{...e,updatedAt:ke.now()}),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async fetchSinglePatient(t){this.loading=!0,this.error=null;try{const e=Js(),r=ln(e,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","patients",t),s=await ch(r);return s.exists()?{id:s.id,...s.data()}:(this.error=`No patient found with ID: ${t}`,console.warn(`[DB_STORE] No patient found with ID: ${t}`),null)}catch(e){return this.error=e.message,null}finally{this.loading=!1}},async createOtherScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=An(n,"artifacts",r,"other_scans"),{id:o,...c}=t,l={...c,userId:s,createdAt:ke.now()};return console.log("[DB_STORE] Attempting to createOtherScan with cleaned payload:",l),(await $a(i,l)).id}catch(n){return this.error=n.message,console.error("[DB_STORE] Error creating other scan:",n),null}finally{this.loading=!1}},async updateOtherScan(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s}=n,i=ln(r,"artifacts",s,"other_scans",t);return await Fa(i,{...e,updatedAt:ke.now()}),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async deleteOtherScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return!1;try{const{db:n,appId:r}=e,s=ln(n,"artifacts",r,"other_scans",t);return await Pg(s),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async fetchOtherScansForUser(t){this.loading=!0,this.error=null;try{const e=Js(),r=Hs(An(e,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","other_scans"),Ki("userId","==",t)),i=(await zs(r)).docs.map(o=>({id:o.id,...o.data()}));return i.sort((o,c)=>c.date.toDate()-o.date.toDate()),i}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async fetchAllDosesForUser(t,e){this.loading=!0,this.error=null,console.log(`[DB_STORE] Starting fetchAllDosesForUser for userId: ${t}, role: ${e}`);try{const n=[],r=await this.fetchOtherScansForUser(t);console.log("[DB_STORE] other scans:",JSON.parse(JSON.stringify(r))),r.forEach(i=>{i.dosage>0&&n.push({date:i.date,dose:i.dosage})});const s=await this.fetchScansForPatient(t);if(console.log("[DB_STORE] personal scans:",JSON.parse(JSON.stringify(s))),s.forEach(i=>{i.patientDose>0&&n.push({date:i.scanDate,dose:i.patientDose})}),e==="doctor"){const i=await this.fetchDoctorCreatedScans();console.log("[DB_STORE] created scans (for occupational dose):",JSON.parse(JSON.stringify(i))),i.forEach(o=>{o.doctorDose>0&&n.push({date:o.scanDate,dose:o.doctorDose})})}return n}catch(n){return this.error=`Failed to fetch all doses: ${n.message}`,console.error(`[DB_STORE] Error: ${n.message}`),[]}finally{this.loading=!1}}}}),Et=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},d2=["dir"],f2={key:0,class:"loading-state"},p2={class:"counter-label"},m2={class:"progress-details"},g2={class:"counter-bar-container"},y2={class:"counter-value"},_2={__name:"MsvCounter",props:{currentMsv:{type:Number,default:0},yearlyLimit:{type:Number,default:1},currentLanguage:String,isLoading:{type:Boolean,default:!0}},setup(t){const e=t,n=Ce(()=>e.currentMsv>=e.yearlyLimit?"status-danger":e.yearlyLimit>0?e.currentMsv/e.yearlyLimit*100<50?"status-safe":"status-warning":"status-safe");return(r,s)=>(B(),W("div",{class:Ts(["msv-counter",n.value]),dir:t.currentLanguage==="en"?"ltr":"rtl"},[t.isLoading?(B(),W("div",f2,T(t.currentLanguage==="en"?"Calculating...":"جاري الحساب..."),1)):(B(),W(Ze,{key:1},[f("span",p2,T(t.currentLanguage==="en"?"Annual Dose:":"الجرعة السنوية:"),1),f("div",m2,[f("div",g2,[f("div",{class:"counter-bar",style:Bl({width:t.yearlyLimit>0?Math.min(t.currentMsv/t.yearlyLimit*100,100)+"%":"100%"})},null,4)]),f("span",y2,T(t.currentMsv.toFixed(2))+" mSv ",1)])],64))],10,d2))}},v2=Et(_2,[["__scopeId","data-v-401d1770"]]),b2={class:"app-header"},E2={class:"app-header-center"},w2={class:"project-title"},T2={__name:"TheHeader",props:{currentLanguage:String,user:Object,msvData:Object},emits:["toggle-language","toggle-info-modal"],setup(t){return(e,n)=>(B(),W("header",b2,[f("button",{onClick:n[0]||(n[0]=r=>e.$emit("toggle-language")),class:"language-toggle-button"},T(t.currentLanguage==="en"?"العربية":"English"),1),f("div",E2,[f("h1",w2,T(t.currentLanguage==="en"?"mSv Exposure Calculator":"حاسبة التعرض للأشعة"),1),t.user?(B(),Bn(v2,{key:0,"current-msv":t.msvData.current,"yearly-limit":t.msvData.limit,"is-loading":t.msvData.isLoading,"current-language":t.currentLanguage},null,8,["current-msv","yearly-limit","is-loading","current-language"])):Te("",!0)]),f("button",{onClick:n[1]||(n[1]=r=>e.$emit("toggle-info-modal")),class:"info-button-global"},T(t.currentLanguage==="en"?"Information":"معلومات"),1)]))}},I2=Et(T2,[["__scopeId","data-v-d06322cd"]]),S2={id:"app-container"},A2={class:"main-content"},P2={key:1,class:"loading-fullpage"},C2={__name:"App",setup(t){const e=In(),n=Di(),r=Ie(localStorage.getItem("language")||"en"),s=Ie(0),i=Ie(20),o=Ie(!1),c=h=>{r.value=h,localStorage.setItem("language",h),document.documentElement.lang=h,document.documentElement.dir=h==="ar"?"rtl":"ltr"},l=()=>{c(r.value==="en"?"ar":"en")},u=async()=>{if(console.log("Calculating the msv..."),!e.user?.uid||!e.role){s.value=0;return}const h=await n.fetchAllDosesForUser(e.user.uid,e.role);if(console.log("All doses:",JSON.parse(JSON.stringify(h))),h){const m=new Date(new Date().getFullYear(),0,1),p=D=>D?D.toDate?D.toDate():new Date(D):null,_=h.filter(D=>{const I=p(D.date);return I&&I>=m}).reduce((D,I)=>D+(I.dose||0),0);s.value=parseFloat(_.toFixed(3))}console.log("Finished Calculation")};return xr("currentLanguage",r),xr("currentMsv",s),xr("doseLimit",i),xr("triggerMsvRecalculation",u),et(()=>e.userProfile,h=>{e.user&&h?u():e.user||(s.value=0)},{deep:!0,immediate:!0}),c(r.value),(h,m)=>(B(),W("div",S2,[Ae(I2,{"current-language":r.value,user:y(e).user,"msv-data":{current:s.value,limit:i.value,isLoading:y(n).loading},onToggleLanguage:l,onToggleInfoModal:m[0]||(m[0]=p=>o.value=!0)},null,8,["current-language","user","msv-data"]),f("main",A2,[y(e).isAuthReady?(B(),Bn(y(R_),{key:0})):(B(),W("div",P2,m[1]||(m[1]=[f("span",null,"Loading Application...",-1)])))])]))}},R2={class:"signup-page"},D2={class:"signup-main-content"},k2={class:"signup-card"},O2=["dir"],N2=["dir"],x2={class:"form-group"},V2=["dir"],M2=["placeholder","dir"],L2={class:"form-group"},F2=["dir"],$2=["placeholder","dir"],U2={class:"form-group"},B2=["dir"],j2=["placeholder","dir"],q2=["disabled"],H2={key:0},z2={key:1},W2=["dir"],G2=["dir"],K2=["disabled"],Y2=["dir"],Q2={__name:"SignupView",setup(t){const e=xs(),n=In(),r=$e("currentLanguage"),s=Ie(""),i=Ie(""),o=Ie(""),c=async()=>{if(i.value!==o.value){n.error=r.value==="en"?"Passwords do not match.":"كلمتا المرور غير متطابقتين.";return}await n.signupWithEmail("",s.value,i.value)},l=async()=>{await n.signInWithGoogle()?console.log("Successfully signed in with Google! Redirecting..."):console.error("Google sign-in failed:",n.error)},u=()=>{e.push("/signin")};return(h,m)=>(B(),W("div",R2,[f("main",D2,[f("section",k2,[f("h2",{dir:y(r)==="ar"?"rtl":"ltr"},T(y(r)==="en"?"Welcome! Please Sign Up":"أهلاً بك! يرجى التسجيل"),9,O2),f("p",{dir:y(r)==="ar"?"rtl":"ltr"},T(y(r)==="en"?"Create your account to get started.":"أنشئ حسابك للبدء."),9,N2),f("form",{onSubmit:nt(c,["prevent"]),class:"signup-form"},[f("div",x2,[f("label",{for:"email",dir:y(r)==="ar"?"rtl":"ltr"},T(y(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,V2),le(f("input",{type:"email",id:"email","onUpdate:modelValue":m[0]||(m[0]=p=>s.value=p),placeholder:y(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:y(r)==="ar"?"rtl":"ltr",required:""},null,8,M2),[[_e,s.value]])]),f("div",L2,[f("label",{for:"password",dir:y(r)==="ar"?"rtl":"ltr"},T(y(r)==="en"?"Password":"كلمة المرور"),9,F2),le(f("input",{type:"password",id:"password","onUpdate:modelValue":m[1]||(m[1]=p=>i.value=p),placeholder:y(r)==="en"?"Enter your password":"أدخل كلمة المرور",dir:y(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,$2),[[_e,i.value]])]),f("div",U2,[f("label",{for:"confirmPassword",dir:y(r)==="ar"?"rtl":"ltr"},T(y(r)==="en"?"Confirm Password":"تأكيد كلمة المرور"),9,B2),le(f("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":m[2]||(m[2]=p=>o.value=p),placeholder:y(r)==="en"?"Confirm your password":"أكد كلمة المرور",dir:y(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,j2),[[_e,o.value]])]),f("button",{class:"action-button primary",type:"submit",disabled:y(n).loading},[y(n).loading?(B(),W("span",H2,T(y(r)==="en"?"Signing Up...":"جاري التسجيل..."),1)):(B(),W("span",z2,T(y(r)==="en"?"Create Account":"إنشاء حساب"),1))],8,q2)],32),y(n).error?(B(),W("div",{key:0,class:"message error-message",dir:y(r)==="ar"?"rtl":"ltr"},T(y(n).error),9,W2)):Te("",!0),f("div",{class:"divider",dir:y(r)==="ar"?"rtl":"ltr"},[f("span",null,T(y(r)==="en"?"OR":"أو"),1)],8,G2),f("button",{onClick:l,class:"action-button google-button",disabled:y(n).loading},[m[3]||(m[3]=h_('<svg class="google-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a6c83a63><path d="M44.5 20H24V28.5H35.5C34.75 31.85 32.5 34.5 29.5 36.5L24 41.5L24 48H32.5C39.5 48 44.5 43.5 44.5 36.5C44.5 35.5 44.3 34.5 44.1 33.5L44.5 20Z" fill="#4285F4" data-v-a6c83a63></path><path d="M24 44.5C29.5 44.5 34.25 42.5 37.75 39.25L29.5 36.5C27.25 37.75 24 38.5 24 38.5C18.5 38.5 13.75 34.25 11.75 28.5L6.25 33.5C8.75 38.75 15.5 44.5 24 44.5Z" fill="#34A853" data-v-a6c83a63></path><path d="M11.75 28.5C11.25 27.25 11 25.75 11 24C11 22.25 11.25 20.75 11.75 19.5L17.25 14.5C16 17.25 15.25 20.5 15.25 24C15.25 27.5 16 30.75 17.25 33.5L11.75 28.5Z" fill="#FBBC05" data-v-a6c83a63></path><path d="M24 9.5C26.75 9.5 29.25 10.5 31.25 12.25L36.5 7C32.5 3 27.25 0 24 0C15.5 0 8.75 5.75 6.25 11L11.75 16C13.75 10.25 18.5 6 24 6C24 6 24 9.5 24 9.5Z" fill="#EA4335" data-v-a6c83a63></path></svg>',1)),f("span",null,T(y(r)==="en"?"Sign Up with Google":"التسجيل باستخدام جوجل"),1)],8,K2),f("p",{class:"switch-link-container",dir:y(r)==="ar"?"rtl":"ltr"},[mt(T(y(r)==="en"?"Already have an account?":"هل لديك حساب بالفعل؟")+" ",1),f("a",{href:"#",onClick:nt(u,["prevent"])},T(y(r)==="en"?"Sign In":"تسجيل الدخول"),1)],8,Y2)])])]))}},X2=Et(Q2,[["__scopeId","data-v-a6c83a63"]]),J2={class:"login-page"},Z2={class:"login-main-content"},ek={class:"login-card"},tk=["dir"],nk=["dir"],rk={class:"form-group"},sk=["dir"],ik=["placeholder","dir"],ok={class:"form-group"},ak=["dir"],lk=["placeholder","dir"],ck=["dir"],uk=["disabled"],hk={key:0},dk={key:1},fk=["dir"],pk=["dir"],mk=["dir"],gk=["disabled"],yk=["dir"],_k={__name:"SigninView",setup(t){const e=xs(),n=In(),r=$e("currentLanguage"),s=Ie(""),i=Ie(""),o=async()=>{await n.signInWithEmail(s.value,i.value)},c=async()=>{await n.signInWithGoogle()},l=()=>{e.push("/")},u=()=>{e.push("/resetpassword")};return(h,m)=>(B(),W("div",J2,[f("main",Z2,[f("section",ek,[f("h2",{dir:y(r)==="ar"?"rtl":"ltr"},T(y(r)==="en"?"Welcome Back! Please Sign In":"أهلاً بعودتك! يرجى تسجيل الدخول"),9,tk),f("p",{dir:y(r)==="ar"?"rtl":"ltr"},T(y(r)==="en"?"Sign in to access your dashboard.":"سجّل الدخول للوصول إلى لوحة التحكم الخاصة بك."),9,nk),f("form",{onSubmit:nt(o,["prevent"]),class:"login-form"},[f("div",rk,[f("label",{for:"email",dir:y(r)==="ar"?"rtl":"ltr"},T(y(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,sk),le(f("input",{type:"email",id:"email","onUpdate:modelValue":m[0]||(m[0]=p=>s.value=p),placeholder:y(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:y(r)==="ar"?"rtl":"ltr",required:""},null,8,ik),[[_e,s.value]])]),f("div",ok,[f("label",{for:"password",dir:y(r)==="ar"?"rtl":"ltr"},T(y(r)==="en"?"Password":"كلمة المرور"),9,ak),le(f("input",{type:"password",id:"password","onUpdate:modelValue":m[1]||(m[1]=p=>i.value=p),placeholder:y(r)==="en"?"Enter your password":"أدخل كلمة المرور",dir:y(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,lk),[[_e,i.value]]),f("p",{class:"forgot-password-link",dir:y(r)==="ar"?"rtl":"ltr"},[f("a",{href:"#",onClick:nt(u,["prevent"])},T(y(r)==="en"?"Forgot your password?":"هل نسيت كلمة المرور؟"),1)],8,ck)]),f("button",{class:"action-button primary",type:"submit",disabled:y(n).loading},[y(n).loading?(B(),W("span",hk,T(y(r)==="en"?"Signing In...":"جاري تسجيل الدخول..."),1)):(B(),W("span",dk,T(y(r)==="en"?"Sign in":"تسجيل الدخول"),1))],8,uk)],32),y(n).error?(B(),W("div",{key:0,class:"message error-message",dir:y(r)==="ar"?"rtl":"ltr"},T(y(n).error),9,fk)):Te("",!0),y(n).successMessage?(B(),W("div",{key:1,class:"message success-message",dir:y(r)==="ar"?"rtl":"ltr"},T(y(n).successMessage),9,pk)):Te("",!0),f("div",{class:"divider",dir:y(r)==="ar"?"rtl":"ltr"},[f("span",null,T(y(r)==="en"?"OR":"أو"),1)],8,mk),f("button",{onClick:c,class:"action-button google-button",disabled:y(n).loading},[m[2]||(m[2]=h_('<svg class="google-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3884b703><path d="M44.5 20H24V28.5H35.5C34.75 31.85 32.5 34.5 29.5 36.5L24 41.5L24 48H32.5C39.5 48 44.5 43.5 44.5 36.5C44.5 35.5 44.3 34.5 44.1 33.5L44.5 20Z" fill="#4285F4" data-v-3884b703></path><path d="M24 44.5C29.5 44.5 34.25 42.5 37.75 39.25L29.5 36.5C27.25 37.75 24 38.5 24 38.5C18.5 38.5 13.75 34.25 11.75 28.5L6.25 33.5C8.75 38.75 15.5 44.5 24 44.5Z" fill="#34A853" data-v-3884b703></path><path d="M11.75 28.5C11.25 27.25 11 25.75 11 24C11 22.25 11.25 20.75 11.75 19.5L17.25 14.5C16 17.25 15.25 20.5 15.25 24C15.25 27.5 16 30.75 17.25 33.5L11.75 28.5Z" fill="#FBBC05" data-v-3884b703></path><path d="M24 9.5C26.75 9.5 29.25 10.5 31.25 12.25L36.5 7C32.5 3 27.25 0 24 0C15.5 0 8.75 5.75 6.25 11L11.75 16C13.75 10.25 18.5 6 24 6C24 6 24 9.5 24 9.5Z" fill="#EA4335" data-v-3884b703></path></svg>',1)),f("span",null,T(y(r)==="en"?"Sign in with Google":"تسجيل الدخول باستخدام جوجل"),1)],8,gk),f("p",{class:"switch-link-container",dir:y(r)==="ar"?"rtl":"ltr"},[mt(T(y(r)==="en"?"Don't have an account?":"ليس لديك حساب؟")+" ",1),f("a",{href:"#",onClick:nt(l,["prevent"])},T(y(r)==="en"?"Sign Up":"التسجيل"),1)],8,yk)])])]))}},vk=Et(_k,[["__scopeId","data-v-3884b703"]]),bk=["dir"],Ek={class:"recommend-main-content"},wk={class:"recommend-card"},Tk={class:"mode-switcher"},Ik={key:0,class:"loading-overlay"},Sk={key:1,class:"patient-info-display"},Ak={class:"form-group"},Pk=["disabled"],Ck={class:"form-group"},Rk=["disabled"],Dk={class:"form-group"},kk=["disabled"],Ok={value:"male"},Nk={value:"female"},xk={key:0,class:"pregnancy-section"},Vk={class:"form-group checkbox-group"},Mk=["disabled"],Lk={key:0,class:"form-group"},Fk=["disabled"],$k={class:"form-group"},Uk=["disabled"],Bk={class:"form-group"},jk={key:1,class:"doctor-exposure-section"},qk={class:"section-title"},Hk={class:"form-group"},zk={class:"section-title"},Wk={class:"form-group"},Gk={disabled:"",value:""},Kk=["value"],Yk={key:2,class:"form-group"},Qk={class:"form-row"},Xk={class:"form-group"},Jk={value:"CT"},Zk={value:"X-ray"},eO={class:"form-group"},tO={disabled:"",value:""},nO=["value"],rO={key:3,class:"form-group"},sO=["placeholder"],iO=["disabled"],oO={key:2,class:"message error-message"},aO={key:3,class:"prediction-result-wrapper"},lO={key:0,class:"message warning-message"},cO={class:"prediction-result"},uO={class:"msv-details-container"},hO={key:0,class:"msv-details"},dO={key:1,class:"msv-details doctor-dose"},fO={class:"result-text"},pO={class:"save-recommendation-section"},mO=["disabled"],gO={class:"save-note"},yO={class:"switch-link-container"},_O={__name:"RecommendView",setup(t){const e=xs(),n=WT(),r=In(),s=Di(),i=$e("currentLanguage"),o=$e("currentMsv");$e("doseLimit");const c=$e("triggerMsvRecalculation"),l={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},u=[{value:"head",en:"Head",ar:"الرأس"},{value:"neck",en:"Neck",ar:"الرقبة"},{value:"chest",en:"Chest",ar:"الصدر"},{value:"abdomen",en:"Abdomen",ar:"البطن"},{value:"pelvis",en:"Pelvis",ar:"الحوض"},{value:"spine",en:"Spine",ar:"العمود الفقري"},{value:"upper_extremity",en:"Upper Extremity",ar:"الطرف العلوي"},{value:"lower_extremity",en:"Lower Extremity",ar:"الطرف السفلي"},{value:"other",en:"Other",ar:"أخرى"}],h={patient:{CT:{"Abdomen & Pelvis":14,"Brain with contrast":2,"Angiography CTA":12,Urography:8,Enterography:8,default:6},"X-ray":{"Barium Enema":7,"IV Urogram (IVP)":2.5,HSG:1.5,VCUG:1,default:.5}},doctor:{CT:{default:1e-5},"X-ray":{"Barium Enema":1e-4,"IV Urogram (IVP)":5e-5,HSG:2e-4,VCUG:15e-5,default:5e-5}}},m=Ie("personal"),p=Ie({patientId:null,patientName:"",birthDate:"",gender:"male",weight:null,patientCumulativeDose:0,medicalHistory:"",currentSymptoms:"",allergies:"",isPregnant:!1,estimatedDueDate:"",scanType:"CT",scanPlace:"",otherScanPlaceDescription:"",subScanType:"",otherScanDescription:"",numberOfScans:1,doctorAdditionalContext:""}),_=Ie(!1),D=Ie(!1),I=Ie(!1),w=Ie(null),k=Ie(""),x=Ce(()=>r.role),L=Ce(()=>x.value==="doctor"&&m.value==="personal"),U=Ce(()=>l[p.value.scanType]||[]),Y=Ce(()=>p.value.subScanType==="Other"),X=Ce(()=>p.value.scanPlace==="other"),C=Ce(()=>m.value==="personal"?i.value==="en"?"Your Estimated Dose":"جرعتك المقدرة":i.value==="en"?"Patient Dose":"جرعة المريض"),b=Ce(()=>i.value==="en"?"Occupational Dose":"الجرعة المهنية"),E=Ce(()=>!w.value||w.value.doctorOccupationalMsv==null?!1:!(x.value==="doctor"&&m.value==="personal")),P=()=>{p.value={patientId:null,patientName:"",birthDate:"",gender:"male",weight:null,patientCumulativeDose:0,medicalHistory:"",currentSymptoms:"",allergies:"",isPregnant:!1,estimatedDueDate:"",scanType:"CT",scanPlace:"",otherScanPlaceDescription:"",subScanType:"",otherScanDescription:"",numberOfScans:1,doctorAdditionalContext:""}},N=Z=>Z?(typeof Z.toDate=="function"?Z.toDate():new Date(Z)).toISOString().split("T")[0]:"",R=async Z=>{if(Z){I.value=!0,P();try{let F=Z===r.user?.uid?r.userProfile:await s.fetchSinglePatient(Z);if(F){p.value.patientId=Z,p.value.patientName=F.displayName||F.name||"",p.value.birthDate=N(F.birthDate),p.value.weight=F.weight||null,p.value.gender=F.gender||"male",p.value.isPregnant=F.isPregnant||!1,p.value.estimatedDueDate=N(F.estimatedDueDate),p.value.medicalHistory=Array.isArray(F.medicalHistory)?F.medicalHistory.join(", "):"",p.value.allergies=Array.isArray(F.allergies)?F.allergies.join(", "):"";const ee=await s.fetchScansForPatient(Z);if(ee){const st=new Date(new Date().getFullYear(),0,1),pt=Me=>Me?Me.toDate?Me.toDate():new Date(Me):null,kt=ee.filter(Me=>pt(Me.scanDate)>=st);p.value.patientCumulativeDose=parseFloat(kt.reduce((Me,We)=>Me+(We.patientDose||0),0).toFixed(3))}}}catch(F){console.error("Error fetching patient details:",F),k.value=i.value==="en"?"Failed to load patient data.":"فشل في تحميل بيانات المريض."}finally{I.value=!1}}};et(m,Z=>{w.value=null,Z==="personal"&&r.user?R(r.user.uid):n.query.patientId||P()}),et(()=>n.query.patientId,Z=>{Z?(m.value="general",R(Z)):r.user&&(m.value="personal",R(r.user.uid))},{immediate:!0}),et(()=>p.value.isPregnant,Z=>{Z||(p.value.estimatedDueDate="")}),et(()=>p.value.scanType,()=>{p.value.subScanType="",p.value.otherScanDescription="",p.value.numberOfScans=1});const S=Z=>{try{const F=p.value.subScanType==="Other"?"default":p.value.subScanType,st=h[Z][p.value.scanType];if(!st)return null;let pt=st[F]??st.default;return pt===void 0?null:p.value.scanType==="X-ray"?pt*p.value.numberOfScans:pt}catch(F){return console.error("Error retrieving fallback dose:",F),null}},Ne=async()=>{if(_.value=!0,k.value="",w.value=null,!p.value.birthDate||!p.value.scanPlace||!p.value.subScanType){k.value=i.value==="en"?"Please complete all required fields.":"يرجى إكمال جميع الحقول المطلوبة.",_.value=!1;return}const Z=S("patient");let F=0;if(x.value==="doctor"&&!L.value&&(F=S("doctor")),Z===null||F===null){k.value=i.value==="en"?"Could not determine a dose for the selected scan.":"تعذر تحديد جرعة للفحص المختار.",_.value=!1;return}const ee=i.value,st="You are a highly experienced, board-certified radiologist and medical physicist with over 20 years of clinical expertise. You specialize in radiation protection and strictly follow the ALARA (As Low As Reasonably Achievable) principle. Your goal is to provide clear, safety-conscious advice for healthcare providers and patients.",pt=Y.value?p.value.otherScanDescription:p.value.subScanType,kt=X.value?p.value.otherScanPlaceDescription:p.value.scanPlace,Me=`
    ${st}

    Task: Provide a concise recommendation and a separate warning based on the following clinical scenario. Respond in ${ee==="en"?"English":"Arabic"}.

    Scenario Details:
    - Patient Age: ${new Date().getFullYear()-new Date(p.value.birthDate).getFullYear()}
    - Patient Gender: ${p.value.gender}
    - Patient is Pregnant: ${p.value.isPregnant?`Yes, due around ${p.value.estimatedDueDate}`:"No"}
    - Patient Cumulative Dose (This Year): ${p.value.patientCumulativeDose.toFixed(5)} mSv
    - Doctor Cumulative Dose (This Year): ${o.value.toFixed(5)} mSv
    - Proposed Scan: ${p.value.scanType} of the ${kt}, protocol: "${pt}"
    - Reason / Symptoms: ${p.value.currentSymptoms||"Not provided"}
    - ESTIMATED Patient Dose (from this scan): ${Z.toFixed(5)} mSv
    - ESTIMATED Doctor Occupational Dose (from this scan): ${F.toFixed(5)} mSv

    Instructions:
    1.  **recommendationText:** Write a brief, professional justification or point of consideration for this scan, keeping the ALARA principle in mind.
    2.  **Warning:** Based on all the data, write a clear, actionable warning if any high-risk factors are present (e.g., pregnancy, high cumulative dose, doctor exceeding limit). If no high risks are present, state that clearly.
  `,We={type:"OBJECT",properties:{recommendationText:{type:"STRING"},Warning:{type:"STRING"}},required:["recommendationText","Warning"]};try{const j=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB9KAR0P6sxAj7fP2I-MyVSVOJJaW0J91M",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:Me}]}],generationConfig:{responseMimeType:"application/json",responseSchema:We}})});if(!j.ok)throw new Error(`API Error: ${j.statusText}`);const ce=await j.json(),se=JSON.parse(ce.candidates[0].content.parts[0].text);w.value={...se,patientCalculatedMsv:Z,doctorOccupationalMsv:L.value?0:F}}catch(pn){console.error("AI advice generation failed. Using fallback.",pn),w.value={recommendationText:ee==="en"?"AI service failed. Please use clinical judgment based on the estimated doses.":"فشلت خدمة الذكاء الاصطناعي. يرجى استخدام الحكم السريري بناءً على الجرعات المقدرة.",Warning:ee==="en"?"Review dose values carefully.":"راجع قيم الجرعات بعناية.",patientCalculatedMsv:Z,doctorOccupationalMsv:L.value?0:F}}finally{_.value=!1}},we=async()=>{if(!w.value||!p.value.patientId){alert("No recommendation data to save or patient ID is missing.");return}D.value=!0;try{const Z=p.value.scanPlace==="other"?p.value.otherScanPlaceDescription:p.value.scanPlace,F=p.value.subScanType==="Other"?p.value.otherScanDescription:p.value.subScanType,ee={patientId:p.value.patientId,scanType:p.value.scanType,scanPlace:Z,scanDetail:F,numberOfScans:p.value.numberOfScans,scanDate:ke.now(),patientDose:Number(w.value.patientCalculatedMsv)||0,doctorDose:Number(w.value.doctorOccupationalMsv)||0,reason:p.value.currentSymptoms||"As per AI recommendation",notes:w.value.recommendationText,isPersonalScan:m.value==="personal"};if(await s.createScan(ee))alert(i.value==="en"?"Scan record saved successfully!":"!تم حفظ سجل الفحص بنجاح"),c&&c(),w.value=null;else throw new Error(s.error)}catch(Z){console.error("Error saving scan from recommendation:",Z),alert(i.value==="en"?`Failed to save scan: ${Z.message}`:`فشل حفظ الفحص: ${Z.message}`)}finally{D.value=!1}};return(Z,F)=>(B(),W("div",{class:"recommend-page",dir:y(i)==="ar"?"rtl":"ltr"},[f("main",Ek,[f("section",wk,[f("h2",null,T(y(i)==="en"?"Medical Scan Recommendation":"توصية الفحص الطبي"),1),f("p",null,T(y(i)==="en"?"Fill in the patient and scan details to estimate radiation doses and review important safety warnings.":"املأ تفاصيل المريض والفحص لتقدير جرعات الإشعاع ومراجعة تحذيرات السلامة الهامة."),1),f("div",Tk,[f("button",{class:Ts({active:m.value==="personal"}),onClick:F[0]||(F[0]=ee=>m.value="personal")},T(y(i)==="en"?"For Myself":"لنفسي"),3),x.value==="doctor"?(B(),W("button",{key:0,class:Ts({active:m.value==="general"}),onClick:F[1]||(F[1]=ee=>m.value="general")},T(y(i)==="en"?"For Another Patient":"لمريض آخر"),3)):Te("",!0)]),I.value?(B(),W("div",Ik,[f("span",null,T(y(i)==="en"?"Loading Patient Data...":"جاري تحميل بيانات المريض..."),1)])):Te("",!0),p.value.patientId&&p.value.patientName?(B(),W("div",Sk,[mt(T(y(i)==="en"?"Getting recommendation for:":"الحصول على توصية لـ:")+" ",1),f("strong",null,T(p.value.patientName),1),mt(" ("+T(p.value.weight?`${p.value.weight} kg`:"Weight N/A")+") ",1)])):Te("",!0),f("form",{onSubmit:nt(Ne,["prevent"]),class:"recommend-form"},[f("div",Ak,[f("label",null,T(y(i)==="en"?"Weight (kg)":"الوزن (كجم)"),1),le(f("input",{type:"number",step:"0.1","onUpdate:modelValue":F[2]||(F[2]=ee=>p.value.weight=ee),disabled:m.value==="personal",placeholder:"e.g. 70.5"},null,8,Pk),[[_e,p.value.weight]])]),f("div",Ck,[f("label",null,[mt(T(y(i)==="en"?"Date of Birth":"تاريخ الميلاد")+" ",1),F[16]||(F[16]=f("span",{class:"required-indicator"},"*",-1))]),le(f("input",{type:"date","onUpdate:modelValue":F[3]||(F[3]=ee=>p.value.birthDate=ee),disabled:m.value==="personal",required:""},null,8,Rk),[[_e,p.value.birthDate]])]),f("div",Dk,[f("label",null,[mt(T(y(i)==="en"?"Gender":"الجنس")+" ",1),F[17]||(F[17]=f("span",{class:"required-indicator"},"*",-1))]),le(f("select",{"onUpdate:modelValue":F[4]||(F[4]=ee=>p.value.gender=ee),disabled:m.value==="personal",required:""},[f("option",Ok,T(y(i)==="en"?"Male":"ذكر"),1),f("option",Nk,T(y(i)==="en"?"Female":"أنثى"),1)],8,kk),[[vt,p.value.gender]])]),p.value.gender==="female"?(B(),W("div",xk,[f("div",Vk,[f("label",null,[le(f("input",{type:"checkbox","onUpdate:modelValue":F[5]||(F[5]=ee=>p.value.isPregnant=ee),disabled:m.value==="personal"},null,8,Mk),[[Ql,p.value.isPregnant]]),f("span",null,T(y(i)==="en"?"Is Pregnant?":"هل هي حامل؟"),1)])]),p.value.isPregnant?(B(),W("div",Lk,[f("label",null,[mt(T(y(i)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع")+" ",1),F[18]||(F[18]=f("span",{class:"required-indicator"},"*",-1))]),le(f("input",{type:"date","onUpdate:modelValue":F[6]||(F[6]=ee=>p.value.estimatedDueDate=ee),disabled:m.value==="personal",required:""},null,8,Fk),[[_e,p.value.estimatedDueDate]])])):Te("",!0)])):Te("",!0),f("div",$k,[f("label",null,T(y(i)==="en"?"Relevant Medical History":"التاريخ الطبي ذو الصلة"),1),le(f("textarea",{"onUpdate:modelValue":F[7]||(F[7]=ee=>p.value.medicalHistory=ee),rows:"3",disabled:m.value==="personal"},null,8,Uk),[[_e,p.value.medicalHistory]])]),f("div",Bk,[f("label",null,T(y(i)==="en"?"Current Symptoms":"الأعراض الحالية"),1),le(f("textarea",{"onUpdate:modelValue":F[8]||(F[8]=ee=>p.value.currentSymptoms=ee),rows:"3"},null,512),[[_e,p.value.currentSymptoms]])]),x.value==="doctor"&&m.value==="general"?(B(),W("div",jk,[f("h3",qk,T(y(i)==="en"?"Occupational Exposure Context":"سياق التعرض المهني"),1),f("div",Hk,[f("label",null,T(y(i)==="en"?"Your positioning, shielding, etc. (Optional)":"موقعك، التدريع المستخدم، إلخ (اختياري)"),1),le(f("textarea",{"onUpdate:modelValue":F[9]||(F[9]=ee=>p.value.doctorAdditionalContext=ee),rows:"3"},null,512),[[_e,p.value.doctorAdditionalContext]])])])):Te("",!0),f("h3",zk,T(y(i)==="en"?"Scan to Consider":"الفحص المقترح"),1),f("div",Wk,[f("label",null,[mt(T(y(i)==="en"?"Place of Scan":"مكان الفحص")+" ",1),F[19]||(F[19]=f("span",{class:"required-indicator"},"*",-1))]),le(f("select",{"onUpdate:modelValue":F[10]||(F[10]=ee=>p.value.scanPlace=ee),required:""},[f("option",Gk,T(y(i)==="en"?"Select...":"اختر..."),1),(B(),W(Ze,null,hn(u,ee=>f("option",{key:ee.value,value:ee.value},T(y(i)==="en"?ee.en:ee.ar),9,Kk)),64))],512),[[vt,p.value.scanPlace]])]),X.value?(B(),W("div",Yk,[f("label",null,[mt(T(y(i)==="en"?"Please specify other place":"يرجى تحديد المكان الآخر")+" ",1),F[20]||(F[20]=f("span",{class:"required-indicator"},"*",-1))]),le(f("input",{type:"text","onUpdate:modelValue":F[11]||(F[11]=ee=>p.value.otherScanPlaceDescription=ee),required:""},null,512),[[_e,p.value.otherScanPlaceDescription]])])):Te("",!0),f("div",Qk,[f("div",Xk,[f("label",null,[mt(T(y(i)==="en"?"Scan Category":"فئة الفحص")+" ",1),F[21]||(F[21]=f("span",{class:"required-indicator"},"*",-1))]),le(f("select",{"onUpdate:modelValue":F[12]||(F[12]=ee=>p.value.scanType=ee),required:""},[f("option",Jk,T(y(i)==="en"?"CT Scan":"الأشعة المقطعية"),1),f("option",Zk,T(y(i)==="en"?"X-ray":"الأشعة السينية"),1)],512),[[vt,p.value.scanType]])]),f("div",eO,[f("label",null,[mt(T(y(i)==="en"?"Scan Protocol":"بروتوكول الفحص")+" ",1),F[22]||(F[22]=f("span",{class:"required-indicator"},"*",-1))]),le(f("select",{"onUpdate:modelValue":F[13]||(F[13]=ee=>p.value.subScanType=ee),required:""},[f("option",tO,T(y(i)==="en"?"Select...":"اختر..."),1),(B(!0),W(Ze,null,hn(U.value,ee=>(B(),W("option",{key:ee.value,value:ee.value},T(y(i)==="en"?ee.en:ee.ar),9,nO))),128))],512),[[vt,p.value.subScanType]])])]),Y.value?(B(),W("div",rO,[f("label",null,[mt(T(y(i)==="en"?"Please specify scan protocol":"يرجى تحديد بروتوكول الفحص")+" ",1),F[23]||(F[23]=f("span",{class:"required-indicator"},"*",-1))]),le(f("input",{type:"text","onUpdate:modelValue":F[14]||(F[14]=ee=>p.value.otherScanDescription=ee),placeholder:y(i)==="en"?"e.g., Chest X-ray":"مثال: أشعة سينية للصدر",required:""},null,8,sO),[[_e,p.value.otherScanDescription]])])):Te("",!0),f("button",{type:"submit",disabled:_.value,class:"action-button"},T(_.value?y(i)==="en"?"Getting Recommendations...":"جاري الحصول على التوصيات...":y(i)==="en"?"Get Recommendation":"الحصول على توصية"),9,iO)],32),k.value?(B(),W("div",oO,T(k.value),1)):Te("",!0),w.value?(B(),W("div",aO,[w.value.Warning?(B(),W("div",lO,[f("h4",null,T(y(i)==="en"?"Important Warning":"تحذير هام"),1),f("p",null,T(w.value.Warning),1)])):Te("",!0),f("div",cO,[f("h3",null,T(y(i)==="en"?"Typical Value":"القيمة القياسية"),1),f("div",uO,[w.value.patientCalculatedMsv!==null?(B(),W("div",hO,[f("h4",null,T(C.value),1),f("p",null,[f("strong",null,T(w.value.patientCalculatedMsv)+" mSv",1)])])):Te("",!0),E.value?(B(),W("div",dO,[f("h4",null,T(b.value),1),f("p",null,[f("strong",null,T(w.value.doctorOccupationalMsv)+" mSv",1)])])):Te("",!0)]),f("div",fO,[f("h4",null,T(y(i)==="en"?"Recommendation":"التوصية"),1),f("p",null,T(w.value.recommendationText),1)])]),f("div",pO,[f("button",{onClick:we,disabled:D.value,class:"action-button save-button"},T(D.value?y(i)==="en"?"Saving...":"...جاري الحفظ":y(i)==="en"?"Save Recommendation as Scan":"حفظ التوصية كفحص"),9,mO),f("p",gO,T(y(i)==="en"?"This will create a new scan record with today's date using the estimated doses.":"سيؤدي هذا إلى إنشاء سجل فحص جديد بتاريخ اليوم باستخدام الجرعات المقدرة."),1)])])):Te("",!0),f("p",yO,[f("a",{href:"#",onClick:F[15]||(F[15]=nt(ee=>y(e).push("/dashboard"),["prevent"]))},T(y(i)==="en"?"Back to Dashboard":"العودة إلى لوحة التحكم"),1)])])])],8,bk))}},vO=Et(_O,[["__scopeId","data-v-04b8c50b"]]);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function bO(t,e,n){return(e=wO(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Cg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Cg(Object(n),!0).forEach(function(r){bO(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Cg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function EO(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function wO(t){var e=EO(t,"string");return typeof e=="symbol"?e:e+""}const Rg=()=>{};let Hd={},cb={},ub=null,hb={mark:Rg,measure:Rg};try{typeof window<"u"&&(Hd=window),typeof document<"u"&&(cb=document),typeof MutationObserver<"u"&&(ub=MutationObserver),typeof performance<"u"&&(hb=performance)}catch{}const{userAgent:Dg=""}=Hd.navigator||{},Zr=Hd,tt=cb,kg=ub,Ua=hb;Zr.document;const mr=!!tt.documentElement&&!!tt.head&&typeof tt.addEventListener=="function"&&typeof tt.createElement=="function",db=~Dg.indexOf("MSIE")||~Dg.indexOf("Trident/");var TO=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,IO=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,fb={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},SO={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},pb=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Bt="classic",wc="duotone",AO="sharp",PO="sharp-duotone",mb=[Bt,wc,AO,PO],CO={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},RO={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},DO=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),kO={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},OO=["fak","fa-kit","fakd","fa-kit-duotone"],Og={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},NO=["kit"],xO={kit:{"fa-kit":"fak"}},VO=["fak","fakd"],MO={kit:{fak:"fa-kit"}},Ng={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ba={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},LO=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],FO=["fak","fa-kit","fakd","fa-kit-duotone"],$O={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},UO={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},BO={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},uh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},jO=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],hh=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...LO,...jO],qO=["solid","regular","light","thin","duotone","brands"],gb=[1,2,3,4,5,6,7,8,9,10],HO=gb.concat([11,12,13,14,15,16,17,18,19,20]),zO=[...Object.keys(BO),...qO,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ba.GROUP,Ba.SWAP_OPACITY,Ba.PRIMARY,Ba.SECONDARY].concat(gb.map(t=>"".concat(t,"x"))).concat(HO.map(t=>"w-".concat(t))),WO={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const ur="___FONT_AWESOME___",dh=16,yb="fa",_b="svg-inline--fa",Ds="data-fa-i2svg",fh="data-fa-pseudo-element",GO="data-fa-pseudo-element-pending",zd="data-prefix",Wd="data-icon",xg="fontawesome-i2svg",KO="async",YO=["HTML","HEAD","STYLE","SCRIPT"],vb=(()=>{try{return!0}catch{return!1}})();function ca(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Bt]}})}const bb=J({},fb);bb[Bt]=J(J(J(J({},{"fa-duotone":"duotone"}),fb[Bt]),Og.kit),Og["kit-duotone"]);const QO=ca(bb),ph=J({},kO);ph[Bt]=J(J(J(J({},{duotone:"fad"}),ph[Bt]),Ng.kit),Ng["kit-duotone"]);const Vg=ca(ph),mh=J({},uh);mh[Bt]=J(J({},mh[Bt]),MO.kit);const Gd=ca(mh),gh=J({},UO);gh[Bt]=J(J({},gh[Bt]),xO.kit);ca(gh);const XO=TO,Eb="fa-layers-text",JO=IO,ZO=J({},CO);ca(ZO);const eN=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mu=SO,tN=[...NO,...zO],Eo=Zr.FontAwesomeConfig||{};function nN(t){var e=tt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function rN(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}tt&&typeof tt.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=rN(nN(n));s!=null&&(Eo[r]=s)});const wb={styleDefault:"solid",familyDefault:Bt,cssPrefix:yb,replacementClass:_b,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Eo.familyPrefix&&(Eo.cssPrefix=Eo.familyPrefix);const bi=J(J({},wb),Eo);bi.autoReplaceSvg||(bi.observeMutations=!1);const fe={};Object.keys(wb).forEach(t=>{Object.defineProperty(fe,t,{enumerable:!0,set:function(e){bi[t]=e,wo.forEach(n=>n(fe))},get:function(){return bi[t]}})});Object.defineProperty(fe,"familyPrefix",{enumerable:!0,set:function(t){bi.cssPrefix=t,wo.forEach(e=>e(fe))},get:function(){return bi.cssPrefix}});Zr.FontAwesomeConfig=fe;const wo=[];function sN(t){return wo.push(t),()=>{wo.splice(wo.indexOf(t),1)}}const Ir=dh,Dn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function iN(t){if(!t||!mr)return;const e=tt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=tt.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return tt.head.insertBefore(e,r),t}const oN="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function jo(){let t=12,e="";for(;t-- >0;)e+=oN[Math.random()*62|0];return e}function ki(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Kd(t){return t.classList?ki(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Tb(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function aN(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Tb(t[n]),'" '),"").trim()}function Tc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Yd(t){return t.size!==Dn.size||t.x!==Dn.x||t.y!==Dn.y||t.rotate!==Dn.rotate||t.flipX||t.flipY}function lN(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(c)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:u}}function cN(t){let{transform:e,width:n=dh,height:r=dh,startCentered:s=!1}=t,i="";return s&&db?i+="translate(".concat(e.x/Ir-n/2,"em, ").concat(e.y/Ir-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/Ir,"em), calc(-50% + ").concat(e.y/Ir,"em)) "):i+="translate(".concat(e.x/Ir,"em, ").concat(e.y/Ir,"em) "),i+="scale(".concat(e.size/Ir*(e.flipX?-1:1),", ").concat(e.size/Ir*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var uN=`:root, :host {
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
}`;function Ib(){const t=yb,e=_b,n=fe.cssPrefix,r=fe.replacementClass;let s=uN;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(c,".".concat(r))}return s}let Mg=!1;function gu(){fe.autoAddCss&&!Mg&&(iN(Ib()),Mg=!0)}var hN={mixout(){return{dom:{css:Ib,insertCss:gu}}},hooks(){return{beforeDOMElementCreation(){gu()},beforeI2svg(){gu()}}}};const hr=Zr||{};hr[ur]||(hr[ur]={});hr[ur].styles||(hr[ur].styles={});hr[ur].hooks||(hr[ur].hooks={});hr[ur].shims||(hr[ur].shims=[]);var kn=hr[ur];const Sb=[],Ab=function(){tt.removeEventListener("DOMContentLoaded",Ab),Nl=1,Sb.map(t=>t())};let Nl=!1;mr&&(Nl=(tt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(tt.readyState),Nl||tt.addEventListener("DOMContentLoaded",Ab));function dN(t){mr&&(Nl?setTimeout(t,0):Sb.push(t))}function ua(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Tb(t):"<".concat(e," ").concat(aN(n),">").concat(r.map(ua).join(""),"</").concat(e,">")}function Lg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var yu=function(e,n,r,s){var i=Object.keys(e),o=i.length,c=n,l,u,h;for(r===void 0?(l=1,h=e[i[0]]):(l=0,h=r);l<o;l++)u=i[l],h=c(h,e[u],u,e);return h};function fN(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function yh(t){const e=fN(t);return e.length===1?e[0].toString(16):null}function pN(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Fg(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function _h(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=Fg(e);typeof kn.hooks.addPack=="function"&&!r?kn.hooks.addPack(t,Fg(e)):kn.styles[t]=J(J({},kn.styles[t]||{}),s),t==="fas"&&_h("fa",e)}const{styles:qo,shims:mN}=kn,Pb=Object.keys(Gd),gN=Pb.reduce((t,e)=>(t[e]=Object.keys(Gd[e]),t),{});let Qd=null,Cb={},Rb={},Db={},kb={},Ob={};function yN(t){return~tN.indexOf(t)}function _N(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!yN(s)?s:null}const Nb=()=>{const t=r=>yu(qo,(s,i,o)=>(s[o]=yu(i,r,{}),s),{});Cb=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(c=>typeof c=="number").forEach(c=>{r[c.toString(16)]=i}),r)),Rb=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(c=>typeof c=="string").forEach(c=>{r[c]=i}),r)),Ob=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(c=>{r[c]=i}),r});const e="far"in qo||fe.autoFetchSvg,n=yu(mN,(r,s)=>{const i=s[0];let o=s[1];const c=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:c}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:c}),r},{names:{},unicodes:{}});Db=n.names,kb=n.unicodes,Qd=Ic(fe.styleDefault,{family:fe.familyDefault})};sN(t=>{Qd=Ic(t.styleDefault,{family:fe.familyDefault})});Nb();function Xd(t,e){return(Cb[t]||{})[e]}function vN(t,e){return(Rb[t]||{})[e]}function vs(t,e){return(Ob[t]||{})[e]}function xb(t){return Db[t]||{prefix:null,iconName:null}}function bN(t){const e=kb[t],n=Xd("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function es(){return Qd}const Vb=()=>({prefix:null,iconName:null,rest:[]});function EN(t){let e=Bt;const n=Pb.reduce((r,s)=>(r[s]="".concat(fe.cssPrefix,"-").concat(s),r),{});return mb.forEach(r=>{(t.includes(n[r])||t.some(s=>gN[r].includes(s)))&&(e=r)}),e}function Ic(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Bt}=e,r=QO[n][t];if(n===wc&&!t)return"fad";const s=Vg[n][t]||Vg[n][r],i=t in kn.styles?t:null;return s||i||null}function wN(t){let e=[],n=null;return t.forEach(r=>{const s=_N(fe.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function $g(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Sc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=hh.concat(FO),i=$g(t.filter(m=>s.includes(m))),o=$g(t.filter(m=>!hh.includes(m))),c=i.filter(m=>(r=m,!pb.includes(m))),[l=null]=c,u=EN(i),h=J(J({},wN(o)),{},{prefix:Ic(l,{family:u})});return J(J(J({},h),AN({values:t,family:u,styles:qo,config:fe,canonical:h,givenPrefix:r})),TN(n,r,h))}function TN(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?xb(s):{},o=vs(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!qo.far&&qo.fas&&!fe.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const IN=mb.filter(t=>t!==Bt||t!==wc),SN=Object.keys(uh).filter(t=>t!==Bt).map(t=>Object.keys(uh[t])).flat();function AN(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,c=n===wc,l=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!c&&(l||u||h)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&IN.includes(n)&&(Object.keys(i).find(p=>SN.includes(p))||o.autoFetchSvg)){const p=DO.get(n).defaultShortPrefixId;r.prefix=p,r.iconName=vs(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=es()||"fas"),r}class PN{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=J(J({},this.definitions[i]||{}),s[i]),_h(i,s[i]);const o=Gd[Bt][i];o&&_h(o,s[i]),Nb()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:c}=r[s],l=c[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=c)}),e[i][o]=c}),e}}let Ug=[],Zs={};const li={},CN=Object.keys(li);function RN(t,e){let{mixoutsTo:n}=e;return Ug=t,Zs={},Object.keys(li).forEach(r=>{CN.indexOf(r)===-1&&delete li[r]}),Ug.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Zs[o]||(Zs[o]=[]),Zs[o].push(i[o])})}r.provides&&r.provides(li)}),n}function vh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(Zs[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function ks(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Zs[t]||[]).forEach(i=>{i.apply(null,n)})}function ts(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return li[t]?li[t].apply(null,e):void 0}function bh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||es();if(e)return e=vs(n,e)||e,Lg(Mb.definitions,n,e)||Lg(kn.styles,n,e)}const Mb=new PN,DN=()=>{fe.autoReplaceSvg=!1,fe.observeMutations=!1,ks("noAuto")},kN={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mr?(ks("beforeI2svg",t),ts("pseudoElements2svg",t),ts("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;fe.autoReplaceSvg===!1&&(fe.autoReplaceSvg=!0),fe.observeMutations=!0,dN(()=>{NN({autoReplaceSvgRoot:e}),ks("watch",t)})}},ON={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:vs(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Ic(t[0]);return{prefix:n,iconName:vs(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(fe.cssPrefix,"-"))>-1||t.match(XO))){const e=Sc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||es(),iconName:vs(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=es();return{prefix:e,iconName:vs(e,t)||t}}}},rn={noAuto:DN,config:fe,dom:kN,parse:ON,library:Mb,findIconDefinition:bh,toHtml:ua},NN=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=tt}=t;(Object.keys(kn.styles).length>0||fe.autoFetchSvg)&&mr&&fe.autoReplaceSvg&&rn.dom.i2svg({node:e})};function Ac(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ua(n))}}),Object.defineProperty(t,"node",{get:function(){if(!mr)return;const n=tt.createElement("div");return n.innerHTML=t.html,n.children}}),t}function xN(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(Yd(o)&&n.found&&!r.found){const{width:c,height:l}=n,u={x:c/l/2,y:.5};s.style=Tc(J(J({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function VN(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(fe.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:J(J({},s),{},{id:o}),children:r}]}]}function Jd(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:c,maskId:l,titleId:u,extra:h,watchable:m=!1}=t,{width:p,height:_}=n.found?n:e,D=VO.includes(r),I=[fe.replacementClass,s?"".concat(fe.cssPrefix,"-").concat(s):""].filter(Y=>h.classes.indexOf(Y)===-1).filter(Y=>Y!==""||!!Y).concat(h.classes).join(" ");let w={children:[],attributes:J(J({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:I,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(_)})};const k=D&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/_*16*.0625,"em")}:{};m&&(w.attributes[Ds]=""),c&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(u||jo())},children:[c]}),delete w.attributes.title);const x=J(J({},w),{},{prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:J(J({},k),h.styles)}),{children:L,attributes:U}=n.found&&e.found?ts("generateAbstractMask",x)||{children:[],attributes:{}}:ts("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=L,x.attributes=U,o?VN(x):xN(x)}function Bg(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:c=!1}=t,l=J(J(J({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(l[Ds]="");const u=J({},o.styles);Yd(s)&&(u.transform=cN({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=Tc(u);h.length>0&&(l.style=h);const m=[];return m.push({tag:"span",attributes:l,children:[e]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function MN(t){const{content:e,title:n,extra:r}=t,s=J(J(J({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Tc(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:_u}=kn;function Eh(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(fe.cssPrefix,"-").concat(mu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(fe.cssPrefix,"-").concat(mu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(fe.cssPrefix,"-").concat(mu.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const LN={found:!1,width:512,height:512};function FN(t,e){!vb&&!fe.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function wh(t,e){let n=e;return e==="fa"&&fe.styleDefault!==null&&(e=es()),new Promise((r,s)=>{if(n==="fa"){const i=xb(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&_u[e]&&_u[e][t]){const i=_u[e][t];return r(Eh(i))}FN(t,e),r(J(J({},LN),{},{icon:fe.showMissingIcons&&t?ts("missingIconAbstract")||{}:{}}))})}const jg=()=>{},Th=fe.measurePerformance&&Ua&&Ua.mark&&Ua.measure?Ua:{mark:jg,measure:jg},no='FA "6.7.2"',$N=t=>(Th.mark("".concat(no," ").concat(t," begins")),()=>Lb(t)),Lb=t=>{Th.mark("".concat(no," ").concat(t," ends")),Th.measure("".concat(no," ").concat(t),"".concat(no," ").concat(t," begins"),"".concat(no," ").concat(t," ends"))};var Zd={begin:$N,end:Lb};const nl=()=>{};function qg(t){return typeof(t.getAttribute?t.getAttribute(Ds):null)=="string"}function UN(t){const e=t.getAttribute?t.getAttribute(zd):null,n=t.getAttribute?t.getAttribute(Wd):null;return e&&n}function BN(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(fe.replacementClass)}function jN(){return fe.autoReplaceSvg===!0?rl.replace:rl[fe.autoReplaceSvg]||rl.replace}function qN(t){return tt.createElementNS("http://www.w3.org/2000/svg",t)}function HN(t){return tt.createElement(t)}function Fb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?qN:HN}=e;if(typeof t=="string")return tt.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(Fb(i,{ceFn:n}))}),r}function zN(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const rl={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Fb(n),e)}),e.getAttribute(Ds)===null&&fe.keepOriginalSource){let n=tt.createComment(zN(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Kd(e).indexOf(fe.replacementClass))return rl.replace(t);const r=new RegExp("".concat(fe.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,c)=>(c===fe.replacementClass||c.match(r)?o.toSvg.push(c):o.toNode.push(c),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>ua(i)).join(`
`);e.setAttribute(Ds,""),e.innerHTML=s}};function Hg(t){t()}function $b(t,e){const n=typeof e=="function"?e:nl;if(t.length===0)n();else{let r=Hg;fe.mutateApproach===KO&&(r=Zr.requestAnimationFrame||Hg),r(()=>{const s=jN(),i=Zd.begin("mutate");t.map(s),i(),n()})}}let ef=!1;function Ub(){ef=!0}function Ih(){ef=!1}let xl=null;function zg(t){if(!kg||!fe.observeMutations)return;const{treeCallback:e=nl,nodeCallback:n=nl,pseudoElementsCallback:r=nl,observeMutationsRoot:s=tt}=t;xl=new kg(i=>{if(ef)return;const o=es();ki(i).forEach(c=>{if(c.type==="childList"&&c.addedNodes.length>0&&!qg(c.addedNodes[0])&&(fe.searchPseudoElements&&r(c.target),e(c.target)),c.type==="attributes"&&c.target.parentNode&&fe.searchPseudoElements&&r(c.target.parentNode),c.type==="attributes"&&qg(c.target)&&~eN.indexOf(c.attributeName))if(c.attributeName==="class"&&UN(c.target)){const{prefix:l,iconName:u}=Sc(Kd(c.target));c.target.setAttribute(zd,l||o),u&&c.target.setAttribute(Wd,u)}else BN(c.target)&&n(c.target)})}),mr&&xl.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function WN(){xl&&xl.disconnect()}function GN(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],c=i.slice(1);return o&&c.length>0&&(r[o]=c.join(":").trim()),r},{})),n}function KN(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=Sc(Kd(t));return s.prefix||(s.prefix=es()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=vN(s.prefix,t.innerText)||Xd(s.prefix,yh(t.innerText))),!s.iconName&&fe.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function YN(t){const e=ki(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return fe.autoA11y&&(n?e["aria-labelledby"]="".concat(fe.replacementClass,"-title-").concat(r||jo()):(e["aria-hidden"]="true",e.focusable="false")),e}function QN(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Dn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=KN(t),i=YN(t),o=vh("parseNodeAttributes",{},t);let c=e.styleParser?GN(t):[];return J({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Dn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:i}},o)}const{styles:XN}=kn;function Bb(t){const e=fe.autoReplaceSvg==="nest"?Wg(t,{styleParser:!1}):Wg(t);return~e.extra.classes.indexOf(Eb)?ts("generateLayersText",t,e):ts("generateSvgReplacementMutation",t,e)}function JN(){return[...OO,...hh]}function Gg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!mr)return Promise.resolve();const n=tt.documentElement.classList,r=h=>n.add("".concat(xg,"-").concat(h)),s=h=>n.remove("".concat(xg,"-").concat(h)),i=fe.autoFetchSvg?JN():pb.concat(Object.keys(XN));i.includes("fa")||i.push("fa");const o=[".".concat(Eb,":not([").concat(Ds,"])")].concat(i.map(h=>".".concat(h,":not([").concat(Ds,"])"))).join(", ");if(o.length===0)return Promise.resolve();let c=[];try{c=ki(t.querySelectorAll(o))}catch{}if(c.length>0)r("pending"),s("complete");else return Promise.resolve();const l=Zd.begin("onTree"),u=c.reduce((h,m)=>{try{const p=Bb(m);p&&h.push(p)}catch(p){vb||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise((h,m)=>{Promise.all(u).then(p=>{$b(p,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),h()})}).catch(p=>{l(),m(p)})})}function ZN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Bb(t).then(n=>{n&&$b([n],e)})}function ex(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:bh(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:bh(s||{})),t(r,J(J({},n),{},{mask:s}))}}const tx=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Dn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:c=null,classes:l=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:m,iconName:p,icon:_}=t;return Ac(J({type:"icon"},t),()=>(ks("beforeDOMElementCreation",{iconDefinition:t,params:e}),fe.autoA11y&&(o?u["aria-labelledby"]="".concat(fe.replacementClass,"-title-").concat(c||jo()):(u["aria-hidden"]="true",u.focusable="false")),Jd({icons:{main:Eh(_),mask:s?Eh(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:p,transform:J(J({},Dn),n),symbol:r,title:o,maskId:i,titleId:c,extra:{attributes:u,styles:h,classes:l}})))};var nx={mixout(){return{icon:ex(tx)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Gg,t.nodeCallback=ZN,t}}},provides(t){t.i2svg=function(e){const{node:n=tt,callback:r=()=>{}}=e;return Gg(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:c,symbol:l,mask:u,maskId:h,extra:m}=n;return new Promise((p,_)=>{Promise.all([wh(r,o),u.iconName?wh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(D=>{let[I,w]=D;p([e,Jd({icons:{main:I,mask:w},prefix:o,iconName:r,transform:c,symbol:l,maskId:h,title:s,titleId:i,extra:m,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const c=Tc(o);c.length>0&&(r.style=c);let l;return Yd(i)&&(l=ts("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},rx={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Ac({type:"layer"},()=>{ks("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(fe.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},sx={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return Ac({type:"counter",content:t},()=>(ks("beforeDOMElementCreation",{content:t,params:e}),MN({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(fe.cssPrefix,"-layers-counter"),...r]}})))}}}},ix={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Dn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return Ac({type:"text",content:t},()=>(ks("beforeDOMElementCreation",{content:t,params:e}),Bg({content:t,transform:J(J({},Dn),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(fe.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,c=null;if(db){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,c=u.height/l}return fe.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Bg({content:e.innerHTML,width:o,height:c,transform:s,title:r,extra:i,watchable:!0})])}}};const ox=new RegExp('"',"ug"),Kg=[1105920,1112319],Yg=J(J(J(J({},{FontAwesome:{normal:"fas",400:"fas"}}),RO),WO),$O),Sh=Object.keys(Yg).reduce((t,e)=>(t[e.toLowerCase()]=Yg[e],t),{}),ax=Object.keys(Sh).reduce((t,e)=>{const n=Sh[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function lx(t){const e=t.replace(ox,""),n=pN(e,0),r=n>=Kg[0]&&n<=Kg[1],s=e.length===2?e[0]===e[1]:!1;return{value:yh(s?e[0]:e),isSecondary:r||s}}function cx(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Sh[n]||{})[s]||ax[n]}function Qg(t,e){const n="".concat(GO).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=ki(t.children).filter(p=>p.getAttribute(fh)===e)[0],c=Zr.getComputedStyle(t,e),l=c.getPropertyValue("font-family"),u=l.match(JO),h=c.getPropertyValue("font-weight"),m=c.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&m!=="none"&&m!==""){const p=c.getPropertyValue("content");let _=cx(l,h);const{value:D,isSecondary:I}=lx(p),w=u[0].startsWith("FontAwesome");let k=Xd(_,D),x=k;if(w){const L=bN(D);L.iconName&&L.prefix&&(k=L.iconName,_=L.prefix)}if(k&&!I&&(!o||o.getAttribute(zd)!==_||o.getAttribute(Wd)!==x)){t.setAttribute(n,x),o&&t.removeChild(o);const L=QN(),{extra:U}=L;U.attributes[fh]=e,wh(k,_).then(Y=>{const X=Jd(J(J({},L),{},{icons:{main:Y,mask:Vb()},prefix:_,iconName:x,extra:U,watchable:!0})),C=tt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(C,t.firstChild):t.appendChild(C),C.outerHTML=X.map(b=>ua(b)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function ux(t){return Promise.all([Qg(t,"::before"),Qg(t,"::after")])}function hx(t){return t.parentNode!==document.head&&!~YO.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(fh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Xg(t){if(mr)return new Promise((e,n)=>{const r=ki(t.querySelectorAll("*")).filter(hx).map(ux),s=Zd.begin("searchPseudoElements");Ub(),Promise.all(r).then(()=>{s(),Ih(),e()}).catch(()=>{s(),Ih(),n()})})}var dx={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Xg,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=tt}=e;fe.searchPseudoElements&&Xg(n)}}};let Jg=!1;var fx={mixout(){return{dom:{unwatch(){Ub(),Jg=!0}}}},hooks(){return{bootstrap(){zg(vh("mutationObserverCallbacks",{}))},noAuto(){WN()},watch(t){const{observeMutationsRoot:e}=t;Jg?Ih():zg(vh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Zg=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var px={mixout(){return{parse:{transform:t=>Zg(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Zg(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(c," ").concat(l," ").concat(u)},m={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:h,path:m};return{tag:"g",attributes:J({},p.outer),children:[{tag:"g",attributes:J({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:J(J({},n.icon.attributes),p.path)}]}]}}}};const vu={x:0,y:0,width:"100%",height:"100%"};function ey(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function mx(t){return t.tag==="g"?t.children:[t]}var gx={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Sc(n.split(" ").map(s=>s.trim())):Vb();return r.prefix||(r.prefix=es()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:c}=e;const{width:l,icon:u}=s,{width:h,icon:m}=i,p=lN({transform:c,containerWidth:h,iconWidth:l}),_={tag:"rect",attributes:J(J({},vu),{},{fill:"white"})},D=u.children?{children:u.children.map(ey)}:{},I={tag:"g",attributes:J({},p.inner),children:[ey(J({tag:u.tag,attributes:J(J({},u.attributes),p.path)},D))]},w={tag:"g",attributes:J({},p.outer),children:[I]},k="mask-".concat(o||jo()),x="clip-".concat(o||jo()),L={tag:"mask",attributes:J(J({},vu),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,w]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:mx(m)},L]};return n.push(U,{tag:"rect",attributes:J({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(k,")")},vu)}),{children:n,attributes:r}}}},yx={provides(t){let e=!1;Zr.matchMedia&&(e=Zr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:J(J({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=J(J({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:J(J({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:J(J({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:J(J({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:J(J({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:J(J({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:J(J({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:J(J({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},_x={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},vx=[hN,nx,rx,sx,ix,dx,fx,px,gx,yx,_x];RN(vx,{mixoutsTo:rn});rn.noAuto;rn.config;const bx=rn.library;rn.dom;const Ah=rn.parse;rn.findIconDefinition;rn.toHtml;const Ex=rn.icon;rn.layer;rn.text;rn.counter;function ty(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Jn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ty(Object(n),!0).forEach(function(r){Kt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ty(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function wx(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Tx(t){var e=wx(t,"string");return typeof e=="symbol"?e:e+""}function Vl(t){"@babel/helpers - typeof";return Vl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vl(t)}function Kt(t,e,n){return e=Tx(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ix(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Sx(t,e){if(t==null)return{};var n=Ix(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var Ax=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},jb={exports:{}};(function(t){(function(e){var n=function(k,x,L){if(!u(x)||m(x)||p(x)||_(x)||l(x))return x;var U,Y=0,X=0;if(h(x))for(U=[],X=x.length;Y<X;Y++)U.push(n(k,x[Y],L));else{U={};for(var C in x)Object.prototype.hasOwnProperty.call(x,C)&&(U[k(C,L)]=n(k,x[C],L))}return U},r=function(k,x){x=x||{};var L=x.separator||"_",U=x.split||/(?=[A-Z])/;return k.split(U).join(L)},s=function(k){return D(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(x,L){return L?L.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var x=s(k);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(k,x){return r(k,x).toLowerCase()},c=Object.prototype.toString,l=function(k){return typeof k=="function"},u=function(k){return k===Object(k)},h=function(k){return c.call(k)=="[object Array]"},m=function(k){return c.call(k)=="[object Date]"},p=function(k){return c.call(k)=="[object RegExp]"},_=function(k){return c.call(k)=="[object Boolean]"},D=function(k){return k=k-0,k===k},I=function(k,x){var L=x&&"process"in x?x.process:x;return typeof L!="function"?k:function(U,Y){return L(U,k,Y)}},w={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,x){return n(I(s,x),k)},decamelizeKeys:function(k,x){return n(I(o,x),k,x)},pascalizeKeys:function(k,x){return n(I(i,x),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=w:e.humps=w})(Ax)})(jb);var Px=jb.exports,Cx=["class","style"];function Rx(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=Px.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function Dx(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function qb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return qb(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,u){var h=t.attributes[u];switch(u){case"class":l.class=Dx(h);break;case"style":l.style=Rx(h);break;default:l.attrs[u]=h}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,c=Sx(n,Cx);return ci(t.tag,Jn(Jn(Jn({},e),{},{class:s.class,style:Jn(Jn({},s.style),o)},s.attrs),c),r)}var Hb=!1;try{Hb=!0}catch{}function kx(){if(!Hb&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function bu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Kt({},t,e):{}}function Ox(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Kt(Kt(Kt(Kt(Kt(Kt(Kt(Kt(Kt(Kt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Kt(Kt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ny(t){if(t&&Vl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ah.icon)return Ah.icon(t);if(t===null)return null;if(Vl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var _t=jh({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Ce(function(){return ny(e.icon)}),i=Ce(function(){return bu("classes",Ox(e))}),o=Ce(function(){return bu("transform",typeof e.transform=="string"?Ah.transform(e.transform):e.transform)}),c=Ce(function(){return bu("mask",ny(e.mask))}),l=Ce(function(){return Ex(s.value,Jn(Jn(Jn(Jn({},i.value),o.value),c.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});et(l,function(h){if(!h)return kx("Could not find one or more icon(s)",s.value,c.value)},{immediate:!0});var u=Ce(function(){return l.value?qb(l.value.abstract[0],{},r):null});return function(){return u.value}}});const Nx=["dir"],xx={class:"modal-title"},Vx={class:"form-group"},Mx={class:"form-group"},Lx={class:"form-group"},Fx={class:"form-group"},$x={value:"male"},Ux={value:"female"},Bx={key:0,class:"pregnancy-section"},jx={class:"form-group checkbox-group"},qx={key:0,class:"form-group"},Hx={class:"form-group"},zx={class:"form-group"},Wx={class:"modal-actions"},Gx=["disabled"],Kx={__name:"PatientFormModal",props:{show:Boolean,patient:Object,isSaving:Boolean},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=$e("currentLanguage"),i=Un({id:null,name:"",birthDate:"",gender:"male",weight:null,isPregnant:!1,estimatedDueDate:"",medicalHistory:"",allergies:""});et(()=>n.show,c=>{c&&(n.patient?(i.id=n.patient.id,i.name=n.patient.name,i.gender=n.patient.gender,i.weight=n.patient.weight||null,i.isPregnant=n.patient.isPregnant||!1,i.birthDate=n.patient.birthDate?.toDate?n.patient.birthDate.toDate().toISOString().split("T")[0]:"",i.estimatedDueDate=n.patient.estimatedDueDate?.toDate?n.patient.estimatedDueDate.toDate().toISOString().split("T")[0]:"",i.medicalHistory=Array.isArray(n.patient.medicalHistory)?n.patient.medicalHistory.join(", "):"",i.allergies=Array.isArray(n.patient.allergies)?n.patient.allergies.join(", "):""):Object.assign(i,{id:null,name:"",birthDate:"",gender:"male",weight:null,isPregnant:!1,estimatedDueDate:"",medicalHistory:"",allergies:""}))},{immediate:!0}),et(()=>i.isPregnant,c=>{c||(i.estimatedDueDate="")});const o=()=>{if(!i.name||!i.birthDate){alert("Name and Date of Birth are required.");return}if(i.isPregnant&&!i.estimatedDueDate){alert("Please provide the estimated due date for the pregnancy.");return}(i.gender==="male"||!i.isPregnant)&&(i.isPregnant=!1,i.estimatedDueDate=null);const c={...i,weight:Number(i.weight)||null,birthDate:new Date(i.birthDate),estimatedDueDate:i.estimatedDueDate?new Date(i.estimatedDueDate):null,medicalHistory:i.medicalHistory.split(",").map(l=>l.trim()).filter(Boolean),allergies:i.allergies.split(",").map(l=>l.trim()).filter(Boolean)};r("save",c)};return(c,l)=>(B(),Bn(Ns,{name:"modal-fade"},{default:ns(()=>[t.show?(B(),W("div",{key:0,class:"modal-overlay",onClick:l[10]||(l[10]=nt(u=>c.$emit("close"),["self"]))},[f("div",{class:"modal-content",dir:y(s)==="ar"?"rtl":"ltr"},[f("button",{onClick:l[0]||(l[0]=u=>c.$emit("close")),class:"close-button"},"×"),f("h3",xx,T(t.patient?"Edit Patient":"Add New Patient"),1),f("form",{onSubmit:nt(o,["prevent"]),class:"patient-form"},[f("div",Vx,[f("label",null,T(y(s)==="en"?"Name":"الاسم"),1),le(f("input",{type:"text","onUpdate:modelValue":l[1]||(l[1]=u=>i.name=u),required:""},null,512),[[_e,i.name]])]),f("div",Mx,[f("label",null,T(y(s)==="en"?"Weight (kg)":"الوزن (كجم)"),1),le(f("input",{type:"number",step:"0.1","onUpdate:modelValue":l[2]||(l[2]=u=>i.weight=u),placeholder:"e.g., 70.5"},null,512),[[_e,i.weight]])]),f("div",Lx,[f("label",null,T(y(s)==="en"?"Date of Birth":"تاريخ الميلاد"),1),le(f("input",{type:"date","onUpdate:modelValue":l[3]||(l[3]=u=>i.birthDate=u),required:""},null,512),[[_e,i.birthDate]])]),f("div",Fx,[f("label",null,T(y(s)==="en"?"Gender":"الجنس"),1),le(f("select",{"onUpdate:modelValue":l[4]||(l[4]=u=>i.gender=u)},[f("option",$x,T(y(s)==="en"?"Male":"ذكر"),1),f("option",Ux,T(y(s)==="en"?"Female":"أنثى"),1)],512),[[vt,i.gender]])]),i.gender==="female"?(B(),W("div",Bx,[f("div",jx,[f("label",null,[le(f("input",{type:"checkbox","onUpdate:modelValue":l[5]||(l[5]=u=>i.isPregnant=u)},null,512),[[Ql,i.isPregnant]]),f("span",null,T(y(s)==="en"?"Currently Pregnant?":"هل هي حامل حاليًا؟"),1)])]),i.isPregnant?(B(),W("div",qx,[f("label",null,T(y(s)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع"),1),le(f("input",{type:"date","onUpdate:modelValue":l[6]||(l[6]=u=>i.estimatedDueDate=u),required:""},null,512),[[_e,i.estimatedDueDate]])])):Te("",!0)])):Te("",!0),f("div",Hx,[f("label",null,T(y(s)==="en"?"Medical History (comma-separated)":"التاريخ الطبي"),1),le(f("textarea",{"onUpdate:modelValue":l[7]||(l[7]=u=>i.medicalHistory=u),rows:"3"},null,512),[[_e,i.medicalHistory]])]),f("div",zx,[f("label",null,T(y(s)==="en"?"Allergies (comma-separated)":"الحساسية"),1),le(f("textarea",{"onUpdate:modelValue":l[8]||(l[8]=u=>i.allergies=u),rows:"3"},null,512),[[_e,i.allergies]])]),f("div",Wx,[f("button",{type:"submit",class:"action-button",disabled:t.isSaving},T(t.isSaving?"Saving...":"Save"),9,Gx),f("button",{type:"button",onClick:l[9]||(l[9]=u=>c.$emit("close")),class:"action-button secondary"}," Cancel ")])],32)],8,Nx)])):Te("",!0)]),_:1}))}},Yx=Et(Kx,[["__scopeId","data-v-8459b92e"]]),Qx=["dir"],Xx={key:0,class:"patient-context-display"},Jx={key:0,class:"form-row pregnancy-section"},Zx={class:"form-group checkbox-group"},eV={key:0,class:"form-group"},tV={class:"form-group"},nV={disabled:"",value:""},rV=["value"],sV={key:1,class:"form-group"},iV={class:"form-row"},oV={class:"form-group"},aV={value:"X-ray"},lV={value:"CT"},cV={class:"form-group"},uV={disabled:"",value:""},hV=["value"],dV={key:2,class:"form-group"},fV=["placeholder"],pV={key:3,class:"form-group"},mV={class:"form-group"},gV={class:"form-row"},yV={class:"form-group"},_V=["placeholder"],vV={class:"form-group"},bV=["placeholder"],EV={class:"form-group"},wV={class:"form-group"},TV={class:"form-group"},IV={class:"modal-actions"},SV=["disabled"],AV={__name:"ScanFormModal",props:{show:Boolean,scan:Object,isSaving:Boolean,patient:{type:Object,default:null}},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=$e("currentLanguage"),i={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},o=[{value:"head",en:"Head",ar:"الرأس"},{value:"neck",en:"Neck",ar:"الرقبة"},{value:"chest",en:"Chest",ar:"الصدر"},{value:"abdomen",en:"Abdomen",ar:"البطن"},{value:"pelvis",en:"Pelvis",ar:"الحوض"},{value:"spine",en:"Spine",ar:"العمود الفقري"},{value:"upper_extremity",en:"Upper Extremity",ar:"الطرف العلوي"},{value:"lower_extremity",en:"Lower Extremity",ar:"الطرف السفلي"},{value:"other",en:"Other",ar:"أخرى"}],c={patient:{CT:{"Abdomen & Pelvis":14,"Brain with contrast":2,"Angiography CTA":12,Urography:8,Enterography:8,default:6},"X-ray":{"Barium Enema":7,"IV Urogram (IVP)":2.5,HSG:1.5,VCUG:1,default:.5}},doctor:{CT:{default:1e-5},"X-ray":{"Barium Enema":1e-4,"IV Urogram (IVP)":5e-5,HSG:2e-4,VCUG:15e-5,default:5e-5}}},l=()=>new Date().toISOString().split("T")[0],u=Un({id:null,isPregnant:!1,pregnancyMonth:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanPlace:"",otherScanPlaceDescription:"",numberOfScans:1,scanDate:l(),patientDose:null,doctorDose:null,reason:"",notes:"",doctorAdditionalContext:""}),h=Ce(()=>i[u.scanType]||[]),m=Ce(()=>u.subScanType==="Other"),p=Ce(()=>u.scanPlace==="other");et(()=>n.show,I=>{if(I&&(Object.assign(u,{id:null,isPregnant:!1,pregnancyMonth:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanPlace:"",otherScanPlaceDescription:"",numberOfScans:1,scanDate:l(),patientDose:null,doctorDose:null,reason:"",notes:"",doctorAdditionalContext:""}),n.scan)){u.id=n.scan.id,u.isPregnant=n.scan.isPregnant||!1,u.pregnancyMonth=n.scan.pregnancyMonth||null,u.scanType=n.scan.scanType;const w=n.scan.scanDate?.toDate?n.scan.scanDate.toDate():new Date(n.scan.scanDate);u.scanDate=isNaN(w)?l():w.toISOString().split("T")[0],u.patientDose=n.scan.patientDose,u.doctorDose=n.scan.doctorDose,u.reason=n.scan.reason,u.notes=n.scan.notes,u.doctorAdditionalContext=n.scan.doctorAdditionalContext,u.numberOfScans=n.scan.numberOfScans||1;const k=n.scan.scanDetail;(h.value||[]).some(Y=>Y.value===k)?u.subScanType=k:k&&(u.subScanType="Other",u.otherScanDescription=k);const L=n.scan.scanPlace;o.some(Y=>Y.value===L)?u.scanPlace=L:L&&(u.scanPlace="other",u.otherScanPlaceDescription=L)}}),et(()=>u.scanType,(I,w)=>{I!==w&&(u.subScanType="",u.otherScanDescription="")});const _=I=>{try{const w=u.subScanType==="Other"?"default":u.subScanType,x=c[I][u.scanType];if(!x)return null;let L=x[w]??x.default;return L===void 0?null:u.scanType==="X-ray"?L*u.numberOfScans:L}catch(w){return console.error("Error retrieving dose from table:",w),null}},D=()=>{if(!u.scanDate||!u.scanPlace||p.value&&!u.otherScanPlaceDescription||!u.subScanType||m.value&&!u.otherScanDescription){alert("Please fill all required scan details.");return}if(u.scanType==="X-ray"&&(u.numberOfScans===null||u.numberOfScans<1)){alert(s.value==="en"?"Number of scans must be at least 1 for X-ray.":"عدد الفحوصات لأشعة إكس يجب أن يكون 1 على الأقل.");return}if((u.patientDose===null||u.patientDose==="")&&(u.patientDose=_("patient")),(u.doctorDose===null||u.doctorDose==="")&&(u.doctorDose=_("doctor")),u.patientDose===null||u.doctorDose===null){alert(s.value==="en"?"Could not find a typical dose value for the selected scan. Please enter the dose manually.":"تعذر العثور على قيمة جرعة نموذجية للفحص المحدد. يرجى إدخال الجرعة يدويًا.");return}const I=u.scanDate.split("-"),w=new Date(Date.UTC(I[0],parseInt(I[1],10)-1,parseInt(I[2],10),12,0,0));if(isNaN(w.getTime())){alert("Invalid date format. Please select a valid date.");return}const k={id:u.id,isPregnant:u.isPregnant,pregnancyMonth:u.pregnancyMonth,scanType:u.scanType,scanDetail:u.subScanType==="Other"?u.otherScanDescription:u.subScanType,scanPlace:u.scanPlace==="other"?u.otherScanPlaceDescription:u.scanPlace,numberOfScans:u.scanType==="X-ray"?Number(u.numberOfScans):1,scanDate:ke.fromDate(w),patientDose:Number(u.patientDose),doctorDose:Number(u.doctorDose),reason:u.reason,notes:u.notes,doctorAdditionalContext:u.doctorAdditionalContext};r("save",k)};return(I,w)=>(B(),Bn(Ns,{name:"modal-fade"},{default:ns(()=>[t.show?(B(),W("div",{key:0,class:"modal-overlay",onClick:w[16]||(w[16]=nt(k=>I.$emit("close"),["self"]))},[f("div",{class:"modal-content",dir:y(s)==="ar"?"rtl":"ltr"},[f("button",{class:"close-modal-button",onClick:w[0]||(w[0]=k=>I.$emit("close"))},"×"),f("h3",null,T(t.scan?y(s)==="en"?"Edit Scan Record":"تعديل سجل الفحص":y(s)==="en"?"Add New Scan Record":"إضافة سجل فحص جديد"),1),t.patient?(B(),W("div",Xx,[mt(T(y(s)==="en"?"For Patient":"للمريض")+": ",1),f("strong",null,T(t.patient.name)+" ("+T(t.patient.weight?`${t.patient.weight} kg`:"Weight N/A")+")",1)])):Te("",!0),f("form",{onSubmit:nt(D,["prevent"]),class:"scan-form"},[t.patient?.gender==="female"?(B(),W("div",Jx,[f("div",Zx,[f("label",null,[le(f("input",{type:"checkbox","onUpdate:modelValue":w[1]||(w[1]=k=>u.isPregnant=k)},null,512),[[Ql,u.isPregnant]]),f("span",null,T(y(s)==="en"?"Is Pregnant?":"هل المريضة حامل؟"),1)])]),u.isPregnant?(B(),W("div",eV,[f("label",null,T(y(s)==="en"?"Month of Pregnancy":"شهر الحمل"),1),le(f("input",{type:"number","onUpdate:modelValue":w[2]||(w[2]=k=>u.pregnancyMonth=k),min:"1",max:"9",placeholder:"1-9"},null,512),[[_e,u.pregnancyMonth,void 0,{number:!0}]])])):Te("",!0)])):Te("",!0),f("div",tV,[f("label",null,T(y(s)==="en"?"Place of Scan":"مكان الفحص"),1),le(f("select",{"onUpdate:modelValue":w[3]||(w[3]=k=>u.scanPlace=k),required:""},[f("option",nV,T(y(s)==="en"?"Select...":"اختر..."),1),(B(),W(Ze,null,hn(o,k=>f("option",{key:k.value,value:k.value},T(y(s)==="en"?k.en:k.ar),9,rV)),64))],512),[[vt,u.scanPlace]])]),p.value?(B(),W("div",sV,[f("label",null,T(y(s)==="en"?"Please specify other place":"يرجى تحديد المكان الآخر"),1),le(f("input",{type:"text","onUpdate:modelValue":w[4]||(w[4]=k=>u.otherScanPlaceDescription=k),required:""},null,512),[[_e,u.otherScanPlaceDescription]])])):Te("",!0),f("div",iV,[f("div",oV,[f("label",null,T(y(s)==="en"?"Scan Category":"فئة الفحص"),1),le(f("select",{"onUpdate:modelValue":w[5]||(w[5]=k=>u.scanType=k),required:""},[f("option",aV,T(y(s)==="en"?"X-ray":"أشعة سينية"),1),f("option",lV,T(y(s)==="en"?"CT":"أشعة مقطعية"),1)],512),[[vt,u.scanType]])]),f("div",cV,[f("label",null,T(y(s)==="en"?"Scan Protocol":"بروتوكول الفحص"),1),le(f("select",{"onUpdate:modelValue":w[6]||(w[6]=k=>u.subScanType=k),required:""},[f("option",uV,T(y(s)==="en"?"Select...":"اختر..."),1),(B(!0),W(Ze,null,hn(h.value,k=>(B(),W("option",{key:k.value,value:k.value},T(y(s)==="en"?k.en:k.ar),9,hV))),128))],512),[[vt,u.subScanType]])])]),m.value?(B(),W("div",dV,[f("label",null,T(y(s)==="en"?"Please specify scan protocol":"يرجى تحديد بروتوكول الفحص"),1),le(f("input",{type:"text","onUpdate:modelValue":w[7]||(w[7]=k=>u.otherScanDescription=k),placeholder:y(s)==="en"?"e.g., Chest X-ray":"مثال: أشعة سينية للصدر",required:""},null,8,fV),[[_e,u.otherScanDescription]])])):Te("",!0),u.scanType==="X-ray"?(B(),W("div",pV,[f("label",null,T(y(s)==="en"?"Number of Scans":"عدد الفحوصات"),1),le(f("input",{type:"number","onUpdate:modelValue":w[8]||(w[8]=k=>u.numberOfScans=k),min:"1",required:""},null,512),[[_e,u.numberOfScans,void 0,{number:!0}]])])):Te("",!0),f("div",mV,[f("label",null,T(y(s)==="en"?"Scan Date":"تاريخ الفحص"),1),le(f("input",{type:"date","onUpdate:modelValue":w[9]||(w[9]=k=>u.scanDate=k),required:""},null,512),[[_e,u.scanDate]])]),f("div",gV,[f("div",yV,[f("label",null,T(y(s)==="en"?"Patient's Dose (mSv)":"جرعة المريض (mSv)"),1),le(f("input",{type:"number",step:"0.0001","onUpdate:modelValue":w[10]||(w[10]=k=>u.patientDose=k),placeholder:y(s)==="en"?"Leave blank for typical value":"اتركه فارغًا لتقدير للقيمة القياسسية"},null,8,_V),[[_e,u.patientDose,void 0,{number:!0}]])]),f("div",vV,[f("label",null,T(y(s)==="en"?"Doctor's Dose (mSv)":"جرعة الطبيب (mSv)"),1),le(f("input",{type:"number","onUpdate:modelValue":w[11]||(w[11]=k=>u.doctorDose=k),placeholder:y(s)==="en"?"Leave blank for AI estimate":"اتركه فارغًا لتقدير الذكاء الاصطناعي"},null,8,bV),[[_e,u.doctorDose,void 0,{number:!0}]])])]),f("div",EV,[f("label",null,T(y(s)==="en"?"Reason for Scan":"أسباب الفحص"),1),le(f("textarea",{"onUpdate:modelValue":w[12]||(w[12]=k=>u.reason=k),rows:"2"},null,512),[[_e,u.reason]])]),f("div",wV,[f("label",null,T(y(s)==="en"?"Additional Notes":"ملاحظات إضافية"),1),le(f("textarea",{"onUpdate:modelValue":w[13]||(w[13]=k=>u.notes=k),rows:"3"},null,512),[[_e,u.notes]])]),f("div",TV,[f("label",null,T(y(s)==="en"?"Details affecting your exposure (optional)":"تفاصيل إضافية على تعرضك (اختياري)"),1),le(f("textarea",{"onUpdate:modelValue":w[14]||(w[14]=k=>u.doctorAdditionalContext=k),rows:"2"},null,512),[[_e,u.doctorAdditionalContext]])]),f("div",IV,[f("button",{type:"submit",class:"action-button",disabled:t.isSaving},T(t.isSaving?y(s)==="en"?"Saving...":"جار الحفظ...":y(s)==="en"?"Save":"حفظ"),9,SV),f("button",{type:"button",onClick:w[15]||(w[15]=k=>I.$emit("close")),class:"action-button secondary"},T(y(s)==="en"?"Cancel":"إلغاء"),1)])],32)],8,Qx)])):Te("",!0)]),_:1}))}},PV=Et(AV,[["__scopeId","data-v-48552722"]]),CV={class:"modal-content delete-confirm-modal"},RV={class:"modal-title"},DV={class:"warning-text"},kV={class:"modal-actions"},OV={__name:"ConfirmDeleteModal",props:{show:Boolean,title:String,message:String},emits:["close","confirm"],setup(t){const e=$e("triggerMsvRecalculation"),n=$e("currentLanguage");return(r,s)=>(B(),Bn(Ns,{name:"modal-fade"},{default:ns(()=>[t.show?(B(),W("div",{key:0,class:"modal-overlay",onClick:s[2]||(s[2]=nt(i=>r.$emit("close"),["self"]))},[f("div",CV,[f("h3",RV,T(t.title),1),f("p",null,T(t.message),1),f("p",DV,T(y(n)==="en"?"This action cannot be undone.":"لا يمكن التراجع عن هذا الإجراء."),1),f("div",kV,[f("button",{onClick:s[0]||(s[0]=i=>r.$emit("close")),class:"action-button secondary"},T(y(n)==="en"?"Cancel":"إلغاء"),1),f("button",{onClick:s[1]||(s[1]=i=>{r.$emit("confirm"),y(e)()}),class:"action-button delete-button-confirm"},T(y(n)==="en"?"Delete":"حذف"),1)])])])):Te("",!0)]),_:1}))}},Ml=Et(OV,[["__scopeId","data-v-8046b31b"]]),NV=["dir"],xV={key:0},VV={class:"patient-details-grid"},MV={class:"detail-item"},LV={class:"detail-label"},FV={class:"detail-value"},$V={class:"detail-item"},UV={class:"detail-label"},BV={class:"detail-value"},jV={class:"scans-list-container"},qV={key:0,class:"loading-message"},HV={key:1,class:"no-scans-message"},zV={key:2,class:"scans-list"},WV={class:"scan-info"},GV={class:"scan-type-place"},KV={class:"scan-type"},YV={class:"scan-place"},QV={class:"scan-date"},XV={class:"scan-dose"},JV={class:"scan-actions"},ZV=["onClick"],e4=["onClick"],t4={__name:"PatientDetailsModal",props:{show:Boolean,patient:Object},emits:["close","scan-saved"],setup(t,{emit:e}){const n=t,r=e,s=Di(),i=$e("currentLanguage"),o=$e("triggerMsvRecalculation"),c=Ie([]),l=Ie(null),u=Ie(null),h=Ie(!1),m=Ie(!1),p=Ce(()=>n.patient?.id),_=async()=>{if(!p.value){c.value=[];return}const U=await s.fetchScansForPatient(p.value);c.value=U||[]};et(()=>n.show,U=>{U&&p.value&&_()});const D=async U=>{if(!n.patient?.id){alert("Error: No patient selected to save this scan for.");return}const Y={...U,patientId:n.patient.id};(Y.id?await s.updateScan(Y.id,Y):await s.createScan(Y))?(h.value=!1,await _(),r("scan-saved"),o&&o()):alert(`Error saving patient scan: ${s.error}`)},I=async()=>{if(!u.value?.id)return;await s.deleteScan(u.value.id)?(m.value=!1,await _(),r("scan-saved"),o&&o()):alert(`Failed to delete scan: ${s.error}`)};function w(){l.value=null,h.value=!0}function k(U){l.value=U,h.value=!0}function x(U){u.value=U,m.value=!0}const L=U=>!U||!U.toDate?"N/A":U.toDate().toLocaleDateString(i.value==="ar"?"ar-EG":"en-US");return(U,Y)=>(B(),W(Ze,null,[Ae(Ns,{name:"modal-fade"},{default:ns(()=>[t.show?(B(),W("div",{key:0,class:"modal-overlay",onClick:Y[1]||(Y[1]=nt(X=>U.$emit("close"),["self"]))},[f("div",{class:"modal-content-details",dir:y(i)==="ar"?"rtl":"ltr"},[f("button",{class:"close-modal-button",onClick:Y[0]||(Y[0]=X=>U.$emit("close"))},"×"),t.patient?(B(),W("div",xV,[f("h3",null,[mt(T(y(i)==="en"?"Scan History for":"سجل الفحوصات لـ")+" ",1),f("strong",null,T(t.patient.name),1)]),f("p",null,T(y(i)==="en"?"Review past scans or add a new record.":"مراجعة الفحوصات السابقة أو إضافة سجل جديد."),1),f("div",VV,[f("div",MV,[f("span",LV,T(y(i)==="en"?"Gender":"الجنس"),1),f("span",FV,T(t.patient.gender||"N/A"),1)]),f("div",$V,[f("span",UV,T(y(i)==="en"?"Weight":"الوزن"),1),f("span",BV,T(t.patient.weight?`${t.patient.weight} kg`:"N/A"),1)])]),f("button",{onClick:w,class:"add-scan-button"},[Ae(y(_t),{icon:"plus"}),mt(" "+T(y(i)==="en"?"Add New Scan":"إضافة فحص جديد"),1)]),f("div",jV,[y(s).loading?(B(),W("div",qV,[Ae(y(_t),{icon:"spinner",spin:""}),mt(" "+T(y(i)==="en"?"Loading scans...":"جاري تحميل الفحوصات..."),1)])):c.value.length===0?(B(),W("div",HV,T(y(i)==="en"?"No scans recorded for this patient yet.":"لا توجد فحوصات مسجلة لهذا المريض بعد."),1)):(B(),W("ul",zV,[(B(!0),W(Ze,null,hn(c.value,X=>(B(),W("li",{key:X.id,class:"scan-item"},[f("div",WV,[f("span",GV,[f("span",KV,T(X.scanType),1),f("span",YV,"of the "+T(X.scanPlace||"N/A"),1)]),f("span",QV,T(L(X.scanDate)),1),f("span",XV,T(y(i)==="en"?"Dose:":"الجرعة:")+" "+T(X.patientDose)+" mSv",1)]),f("div",JV,[f("button",{onClick:C=>k(X),class:"action-button-icon edit-button"},[Ae(y(_t),{icon:"edit"})],8,ZV),f("button",{onClick:C=>x(X),class:"action-button-icon delete-button"},[Ae(y(_t),{icon:"trash-alt"})],8,e4)])]))),128))]))])])):Te("",!0)],8,NV)])):Te("",!0)]),_:1}),Ae(PV,{show:h.value,patient:t.patient,scan:l.value,"is-saving":y(s).loading,onClose:Y[2]||(Y[2]=X=>h.value=!1),onSave:D},null,8,["show","patient","scan","is-saving"]),Ae(Ml,{show:m.value,title:y(i)==="en"?"Delete Scan":"حذف الفحص",message:`${y(i)==="en"?"Are you sure you want to delete this scan from":"هل أنت متأكد من حذف هذا الفحص بتاريخ"} ${L(u.value?.scanDate)}?`,onClose:Y[3]||(Y[3]=X=>m.value=!1),onConfirm:I},null,8,["show","title","message"])],64))}},n4=Et(t4,[["__scopeId","data-v-e5fe2d03"]]),r4={class:"patient-list-page"},s4={class:"patient-list-main-content"},i4={class:"patient-list-card"},o4=["dir"],a4={key:0,class:"loading-message"},l4={key:1,class:"no-patients-message"},c4={key:2,class:"patient-table-container"},u4={class:"patient-table"},h4={class:"details-column"},d4={class:"details-column"},f4={class:"details-column"},p4={class:"details-column"},m4={class:"action-buttons-wrapper"},g4=["onClick","title"],y4=["onClick","title"],_4=["onClick","title"],v4=["onClick","title"],b4={class:"switch-link-container"},E4={__name:"PatientsView",setup(t){const e=In(),n=Di(),r=xs(),s=$e("currentLanguage"),i=Ie([]),o=Ie(null),c=Ie(null),l=Ie(null),u=Ie(!1),h=Ie(!1),m=Ie(!1),p=Ce(()=>e.user?.uid),_=async()=>{const X=await n.fetchPatientsForDoctor();X&&(i.value=X)},D=X=>{if(!X?.toDate)return"N/A";const C=X.toDate(),b=new Date;let E=b.getFullYear()-C.getFullYear(),P=b.getMonth()-C.getMonth();if(b.getDate()<C.getDate()&&P--,P<0&&(E--,P+=12),E>=2)return`${E} ${s.value==="ar"?"سنوات":"years"}`;{const N=s.value==="ar"?"سنة":"year",R=s.value==="ar"?"أشهر":"months",S=s.value==="ar"?"شهر":"month";return E>0?`${E} ${N}, ${P} ${P===1?S:R}`:P>0?`${P} ${P===1?S:R}`:s.value==="ar"?"أقل من شهر":"Less than a month"}},I=async X=>{const{id:C,...b}=X;let E=!1;C?E=await n.updatePatientProfile(C,b):E=!!await n.addNewPatient(b),E?(u.value=!1,await _()):alert(`Failed to save patient. Error: ${n.error}`)},w=async()=>{if(!o.value?.id)return;await n.deletePatientProfile(o.value.id)?(m.value=!1,await _()):alert(`Failed to delete patient. Error: ${n.error}`)};function k(){l.value=null,u.value=!0}function x(X){l.value=X,u.value=!0}function L(X){c.value=X,h.value=!0}function U(X){o.value=X,m.value=!0}function Y(X){X&&r.push({name:"recommend",query:{patientId:X}})}return et(p,X=>{X&&_()},{immediate:!0}),(X,C)=>(B(),W("div",r4,[f("div",s4,[f("div",i4,[f("h2",null,T(y(s)==="en"?"Manage Patients":"إدارة المرضى"),1),f("p",null,T(y(s)==="en"?"Add new patients or view existing records":"أضف مرضى جدد أو اطلع على السجلات الحالية."),1),f("button",{onClick:k,class:"add-new-patient-button"},T(y(s)==="en"?"Add New Patient":"إضافة مريض جديد"),1),f("div",{class:"patient-list-section",dir:y(s)==="ar"?"rtl":"ltr"},[f("h3",null,T(y(s)==="en"?"Existing Patients":"المرضى الحاليون"),1),y(n).loading?(B(),W("div",a4,[Ae(y(_t),{icon:"spinner",spin:""}),mt(" "+T(y(s)==="en"?"Loading patients...":"جاري تحميل المرضى..."),1)])):!i.value||i.value.length===0?(B(),W("div",l4,T(y(s)==="en"?"No patients added yet.":"لم يتم إضافة أي مرضى بعد."),1)):(B(),W("div",c4,[f("table",u4,[f("thead",null,[f("tr",null,[f("th",null,T(y(s)==="en"?"Name":"الاسم"),1),f("th",null,T(y(s)==="en"?"Age":"العمر"),1),f("th",null,T(y(s)==="en"?"Weight":"الوزن"),1),f("th",null,T(y(s)==="en"?"Gender":"الجنس"),1),f("th",h4,T(y(s)==="en"?"Medical History":"التاريخ الطبي"),1),f("th",d4,T(y(s)==="en"?"Allergies":"الحساسية"),1),f("th",null,T(y(s)==="en"?"Actions":"الإجراءات"),1)])]),f("tbody",null,[(B(!0),W(Ze,null,hn(i.value,b=>(B(),W("tr",{key:b.id},[f("td",null,T(b.name??"N/A"),1),f("td",null,T(D(b.birthDate)),1),f("td",null,T(b.weight?`${b.weight} kg`:"N/A"),1),f("td",null,T(y(s)==="en"?(b.gender?.charAt(0).toUpperCase()??"")+(b.gender?.slice(1)??"N/A"):b.gender==="male"?"ذكر":"أنثى"),1),f("td",f4,T(b.medicalHistory?.join(", ")||(y(s)==="en"?"None":"لا يوجد")),1),f("td",p4,T(b.allergies?.join(", ")||(y(s)==="en"?"None":"لا يوجد")),1),f("td",null,[f("div",m4,[f("button",{onClick:E=>L(b),class:"action-button-sm view-button",title:y(s)==="en"?"View Scan History":"عرض سجل الفحوصات"},[Ae(y(_t),{icon:"eye"})],8,g4),f("button",{onClick:E=>x(b),class:"action-button-sm edit-button",title:y(s)==="en"?"Edit Patient Details":"تعديل تفاصيل المريض"},[Ae(y(_t),{icon:"edit"})],8,y4),f("button",{onClick:E=>U(b),class:"action-button-sm delete-button",title:y(s)==="en"?"Delete Patient":"حذف المريض"},[Ae(y(_t),{icon:"trash-alt"})],8,_4),f("button",{onClick:E=>Y(b.id),class:"action-button-sm recommend-button",title:y(s)==="en"?"Get Recommendation":"الحصول على توصية"},[Ae(y(_t),{icon:"file-medical"})],8,v4)])])]))),128))])])]))],8,o4),f("div",b4,[f("a",{href:"#",onClick:C[0]||(C[0]=nt(b=>y(r).push("/dashboard"),["prevent"]))},T(y(s)==="en"?"Back to dashboard":"العودة إلى لوحة التحكم"),1)])])]),Ae(Yx,{show:u.value,patient:l.value,"is-saving":y(n).loading,onClose:C[1]||(C[1]=b=>u.value=!1),onSave:I},null,8,["show","patient","is-saving"]),Ae(n4,{show:h.value,patient:c.value,onClose:C[2]||(C[2]=b=>h.value=!1),onScanSaved:_},null,8,["show","patient"]),Ae(Ml,{show:m.value,title:y(s)==="en"?"Delete Patient":"حذف المريض",message:`${y(s)==="en"?"Are you sure you want to delete":"هل أنت متأكد من الحذف"} ${o.value?.name??"this patient"}?`,onClose:C[3]||(C[3]=b=>m.value=!1),onConfirm:w},null,8,["show","title","message"])]))}},w4=Et(E4,[["__scopeId","data-v-63db406d"]]),T4={key:0,class:"loading-container"},I4={key:0,class:"role-modal-backdrop"},S4={class:"role-modal"},A4={class:"form-group"},P4={value:"",disabled:""},C4={value:"doctor"},R4={value:"patient"},D4={class:"form-group"},k4={class:"form-group"},O4={value:"",disabled:""},N4={value:"male"},x4={value:"female"},V4={class:"form-group"},M4=["placeholder"],L4={class:"form-group"},F4=["placeholder"],$4=["disabled"],U4={key:1},B4={class:"dashboard-main-content"},j4={class:"dashboard-card"},q4=["dir"],H4=["dir"],z4={class:"dashboard-features"},W4=["dir"],G4=["dir"],K4=["dir"],Y4=["dir"],Q4=["dir"],X4=["dir"],J4={__name:"DashboardView",setup(t){const e=In(),n=Di(),r=xs(),s=Ie({role:null,birthDate:"",gender:"",allergies:"",medicalHistory:""}),i=Ce(()=>!e.isAuthReady||e.isProfileLoading),o=Ce(()=>e.user?!e.isProfileComplete:!1),c=Ce(()=>e.role),l=$e("currentLanguage"),u=async()=>{const{uid:m,email:p,displayName:_}=e.user,{role:D,birthDate:I,gender:w,allergies:k,medicalHistory:x}=s.value;if(!D||!I||!w){alert("Please fill out all required fields: Role, Birth Date, and Gender.");return}const L={email:p,displayName:_,role:D,birthDate:ke.fromDate(new Date(I)),gender:w,allergies:k.split(",").map(Y=>Y.trim()).filter(Boolean),medicalHistory:x.split(",").map(Y=>Y.trim()).filter(Boolean)};await n.setUserProfile(m,L)?e.setUserProfile(L):alert(`Failed to save profile. Error: ${n.error}`)},h=async()=>{await e.logout(),r.push("/signin")};return(m,p)=>(B(),W("div",null,[i.value?(B(),W("div",T4,[f("p",null,T(y(l)==="en"?"Verifying session...":"جار التحقق من الجلسة..."),1),Ae(y(_t),{icon:"spinner",spin:"",size:"2x"})])):(B(),W(Ze,{key:1},[o.value?(B(),W("div",I4,[f("div",S4,[f("h2",null,T(y(l)==="en"?"Complete Your Profile":"أكمل ملفك الشخصي"),1),f("div",A4,[f("label",null,T(y(l)==="en"?"I am a:":"أنا:"),1),le(f("select",{"onUpdate:modelValue":p[0]||(p[0]=_=>s.value.role=_)},[f("option",P4,T(y(l)==="en"?"-- Select Role --":"-- اختر دورك --"),1),f("option",C4,T(y(l)==="en"?"Doctor":"طبيب"),1),f("option",R4,T(y(l)==="en"?"Patient":"مريض"),1)],512),[[vt,s.value.role]])]),f("div",D4,[f("label",null,T(y(l)==="en"?"Birth Date":"تاريخ الميلاد"),1),le(f("input",{type:"date","onUpdate:modelValue":p[1]||(p[1]=_=>s.value.birthDate=_)},null,512),[[_e,s.value.birthDate]])]),f("div",k4,[f("label",null,T(y(l)==="en"?"Gender":"الجنس"),1),le(f("select",{"onUpdate:modelValue":p[2]||(p[2]=_=>s.value.gender=_)},[f("option",O4,T(y(l)==="en"?"-- Select Gender --":"-- اختر الجنس --"),1),f("option",N4,T(y(l)==="en"?"Male":"ذكر"),1),f("option",x4,T(y(l)==="en"?"Female":"أنثى"),1)],512),[[vt,s.value.gender]])]),f("div",V4,[f("label",null,T(y(l)==="en"?"Allergies (comma-separated)":"الحساسية (مفصولة بفاصلة)"),1),le(f("textarea",{"onUpdate:modelValue":p[3]||(p[3]=_=>s.value.allergies=_),rows:"2",placeholder:y(l)==="en"?"e.g., Iodine-Based Dyes":"مثال: صبغات اليود"},null,8,M4),[[_e,s.value.allergies]])]),f("div",L4,[f("label",null,T(y(l)==="en"?"Medical History (comma-separated)":"التاريخ الطبي (مفصول بفاصلة)"),1),le(f("textarea",{"onUpdate:modelValue":p[4]||(p[4]=_=>s.value.medicalHistory=_),rows:"2",placeholder:y(l)==="en"?"e.g., Diabetes, Asthma":"مثال: مرض السكري, الربو"},null,8,F4),[[_e,s.value.medicalHistory]])]),f("button",{class:"action-button",onClick:u,disabled:y(n).loading},[y(n).loading?(B(),Bn(y(_t),{key:0,icon:"spinner",spin:""})):(B(),W("span",U4,T(y(l)==="en"?"Save & Continue":"حفظ ومتابعة"),1))],8,$4)])])):Te("",!0),f("div",{class:Ts(["dashboard-page dashboard-blur-area",{"is-blurred":o.value}])},[f("main",B4,[f("section",j4,[f("h2",{dir:y(l)==="ar"?"rtl":"ltr"},T(y(l)==="en"?"Welcome to mSv Dose Tracker":"مرحبًا بك في متتبع جرعات الأشعة السينية"),9,q4),f("p",{dir:y(l)==="ar"?"rtl":"ltr"},T(y(l)==="en"?"Your comprehensive tool for managing radiation exposure.":"أداتك الشاملة لإدارة التعرض للإشعاع."),9,H4),f("div",z4,[f("div",{class:"feature-item",onClick:p[5]||(p[5]=_=>y(r).push("/recommend"))},[p[8]||(p[8]=f("i",{class:"fas fa-file-medical"},null,-1)),f("h3",{dir:y(l)==="ar"?"rtl":"ltr"},T(y(l)==="en"?"Get Scan Recommendation":"الحصول على توصية"),9,W4),f("p",{dir:y(l)==="ar"?"rtl":"ltr"},T(y(l)==="en"?"Use AI to get recommendations on the necessity of radiological scans.":"استخدم الذكاء الاصطناعي للحصول على توصيات حول ضرورة الفحوصات الإشعاعية."),9,G4)]),c.value==="doctor"?(B(),W("div",{key:0,class:"feature-item",onClick:p[6]||(p[6]=_=>y(r).push("/patients"))},[p[9]||(p[9]=f("i",{class:"fas fa-users"},null,-1)),f("h3",{dir:y(l)==="ar"?"rtl":"ltr"},T(y(l)==="en"?"Manage Patients":"إدارة المرضى"),9,K4),f("p",{dir:y(l)==="ar"?"rtl":"ltr"},T(y(l)==="en"?"View, add, and manage your patient records and their scan histories.":"عرض وإضافة وإدارة سجلات مرضاك وتاريخ فحوصاتهم."),9,Y4)])):Te("",!0),f("div",{class:"feature-item",onClick:p[7]||(p[7]=_=>y(r).push("/profile"))},[p[10]||(p[10]=f("i",{class:"fas fa-user"},null,-1)),f("h3",{dir:y(l)==="ar"?"rtl":"ltr"},T(y(l)==="en"?"View Profile":"عرض الملف الشخصي"),9,Q4),f("p",{dir:y(l)==="ar"?"rtl":"ltr"},T(y(l)==="en"?"Review your personal details and dose history.":"راجع معلوماتك الشخصية وسجل جرعاتك."),9,X4)])]),f("button",{onClick:h,class:"action-button secondary logout-button"},T(y(l)==="en"?"Logout":"تسجيل الخروج"),1)])])],2)],64))]))}},Z4=Et(J4,[["__scopeId","data-v-2c9adee3"]]),eM={class:"reset-password-page"},tM={class:"reset-password-main-content"},nM={class:"reset-password-card"},rM=["dir"],sM=["dir"],iM={class:"form-group"},oM=["dir"],aM=["placeholder","dir"],lM=["disabled"],cM={key:0},uM={key:1},hM=["dir"],dM=["dir"],fM=["dir"],pM={__name:"ResetPasswordView",setup(t){const e=xs(),n=In(),r=$e("currentLanguage"),s=Ie(""),i=async()=>{await n.sendPasswordReset(s.value)},o=()=>{e.push("/signin")};return(c,l)=>(B(),W("div",eM,[f("main",tM,[f("section",nM,[f("h2",{dir:y(r)==="ar"?"rtl":"ltr"},T(y(r)==="en"?"Reset Your Password":"إعادة تعيين كلمة المرور"),9,rM),f("p",{dir:y(r)==="ar"?"rtl":"ltr"},T(y(r)==="en"?"Enter your email address to receive a password reset link.":"أدخل عنوان بريدك الإلكتروني لتلقي رابط إعادة تعيين كلمة المرور."),9,sM),f("form",{onSubmit:nt(i,["prevent"]),class:"reset-password-form"},[f("div",iM,[f("label",{for:"email",dir:y(r)==="ar"?"rtl":"ltr"},T(y(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,oM),le(f("input",{type:"email",id:"email","onUpdate:modelValue":l[0]||(l[0]=u=>s.value=u),placeholder:y(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:y(r)==="ar"?"rtl":"ltr",required:""},null,8,aM),[[_e,s.value]])]),f("button",{class:"action-button primary",type:"submit",disabled:y(n).loading},[y(n).loading?(B(),W("span",cM,T(y(r)==="en"?"Sending Link...":"جاري إرسال الرابط..."),1)):(B(),W("span",uM,T(y(r)==="en"?"Send Reset Link":"إرسال رابط إعادة التعيين"),1))],8,lM)],32),y(n).error?(B(),W("div",{key:0,class:"message error-message",dir:y(r)==="ar"?"rtl":"ltr"},T(y(n).error),9,hM)):Te("",!0),y(n).successMessage?(B(),W("div",{key:1,class:"message success-message",dir:y(r)==="ar"?"rtl":"ltr"},T(y(n).successMessage),9,dM)):Te("",!0),f("p",{class:"switch-link-container",dir:y(r)==="ar"?"rtl":"ltr"},[mt(T(y(r)==="en"?"Remembered your password?":"هل تذكرت كلمة المرور؟")+" ",1),f("a",{href:"#",onClick:nt(o,["prevent"])},T(y(r)==="en"?"Sign In":"تسجيل الدخول"),1)],8,fM)])])]))}},mM=Et(pM,[["__scopeId","data-v-73a48bd7"]]),gM=["dir"],yM={class:"modal-title"},_M={class:"form-group"},vM={value:"doctor"},bM={value:"patient"},EM={class:"form-group"},wM={class:"form-group"},TM={class:"form-group"},IM={value:"male"},SM={value:"female"},AM={key:0,class:"pregnancy-section"},PM={class:"form-group checkbox-group"},CM={key:0,class:"form-group"},RM={class:"form-group"},DM={class:"form-group"},kM={class:"modal-actions"},OM={type:"submit",class:"action-button"},NM={__name:"ProfileFormModal",props:{show:Boolean,profileData:{type:Object,default:()=>null}},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=$e("currentLanguage"),i=Un({role:"",birthDate:"",gender:"male",weight:null,isPregnant:!1,estimatedDueDate:"",allergies:"",medicalHistory:""});et(()=>n.show,c=>{c&&n.profileData&&(i.role=n.profileData.role||"patient",i.birthDate=n.profileData.birthDate||"",i.gender=n.profileData.gender||"male",i.weight=n.profileData.weight||null,i.isPregnant=n.profileData.isPregnant||!1,i.estimatedDueDate=n.profileData.estimatedDueDate||"",i.allergies=Array.isArray(n.profileData.allergies)?n.profileData.allergies.join(", "):"",i.medicalHistory=Array.isArray(n.profileData.medicalHistory)?n.profileData.medicalHistory.join(", "):"")},{immediate:!0}),et(()=>i.gender,c=>{c==="male"&&(i.isPregnant=!1,i.estimatedDueDate="")}),et(()=>i.isPregnant,c=>{c||(i.estimatedDueDate="")});const o=()=>{if(!i.role||!i.birthDate||!i.gender){alert("Role, Birth Date, and Gender are required.");return}if(i.isPregnant&&!i.estimatedDueDate){alert("Estimated due date is required for pregnant patients.");return}r("save",i)};return(c,l)=>(B(),Bn(Ns,{name:"modal-fade"},{default:ns(()=>[t.show?(B(),W("div",{key:0,class:"modal-overlay",onClick:l[10]||(l[10]=nt(u=>r("close"),["self"]))},[f("div",{class:"modal-content",dir:y(s)==="ar"?"rtl":"ltr"},[f("button",{class:"close-button",onClick:l[0]||(l[0]=u=>r("close"))},"×"),f("h3",yM,T(y(s)==="en"?"Edit Profile":"تعديل الملف الشخصي"),1),f("form",{onSubmit:nt(o,["prevent"]),class:"profile-form"},[f("div",_M,[f("label",null,T(y(s)==="en"?"Role":"الدور"),1),le(f("select",{"onUpdate:modelValue":l[1]||(l[1]=u=>i.role=u),required:""},[f("option",vM,T(y(s)==="en"?"Doctor":"طبيب"),1),f("option",bM,T(y(s)==="en"?"Patient":"مريض"),1)],512),[[vt,i.role]])]),f("div",EM,[f("label",null,T(y(s)==="en"?"Weight (kg)":"الوزن (كجم)"),1),le(f("input",{type:"number",step:"0.1","onUpdate:modelValue":l[2]||(l[2]=u=>i.weight=u),placeholder:"e.g., 70.5"},null,512),[[_e,i.weight]])]),f("div",wM,[f("label",null,T(y(s)==="en"?"Birth Date":"تاريخ الميلاد"),1),le(f("input",{type:"date","onUpdate:modelValue":l[3]||(l[3]=u=>i.birthDate=u),required:""},null,512),[[_e,i.birthDate]])]),f("div",TM,[f("label",null,T(y(s)==="en"?"Gender":"الجنس"),1),le(f("select",{"onUpdate:modelValue":l[4]||(l[4]=u=>i.gender=u),required:""},[f("option",IM,T(y(s)==="en"?"Male":"ذكر"),1),f("option",SM,T(y(s)==="en"?"Female":"أنثى"),1)],512),[[vt,i.gender]])]),i.gender==="female"?(B(),W("div",AM,[f("div",PM,[f("label",null,[le(f("input",{type:"checkbox","onUpdate:modelValue":l[5]||(l[5]=u=>i.isPregnant=u)},null,512),[[Ql,i.isPregnant]]),f("span",null,T(y(s)==="en"?"Currently Pregnant?":"هل أنت حامل حاليًا؟"),1)])]),i.isPregnant?(B(),W("div",CM,[f("label",null,T(y(s)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع"),1),le(f("input",{type:"date","onUpdate:modelValue":l[6]||(l[6]=u=>i.estimatedDueDate=u),required:""},null,512),[[_e,i.estimatedDueDate]])])):Te("",!0)])):Te("",!0),f("div",RM,[f("label",null,T(y(s)==="en"?"Allergies (comma-separated)":"الحساسية (مفصولة بفاصلة)"),1),le(f("textarea",{"onUpdate:modelValue":l[7]||(l[7]=u=>i.allergies=u),rows:"2"},null,512),[[_e,i.allergies]])]),f("div",DM,[f("label",null,T(y(s)==="en"?"Medical History (comma-separated)":"التاريخ الطبي (مفصول بفاصلة)"),1),le(f("textarea",{"onUpdate:modelValue":l[8]||(l[8]=u=>i.medicalHistory=u),rows:"2"},null,512),[[_e,i.medicalHistory]])]),f("div",kM,[f("button",{type:"button",onClick:l[9]||(l[9]=u=>r("close")),class:"action-button secondary"},T(y(s)==="en"?"Cancel":"إلغاء"),1),f("button",OM,T(y(s)==="en"?"Save Changes":"حفظ التغييرات"),1)])],32)],8,gM)])):Te("",!0)]),_:1}))}},xM=Et(NM,[["__scopeId","data-v-efada37a"]]),VM=["dir"],MM={class:"form-row"},LM={class:"form-group"},FM={disabled:"",value:""},$M=["value"],UM={key:0,class:"form-group"},BM={class:"form-row"},jM={class:"form-group"},qM={value:"X-ray"},HM={value:"CT"},zM={class:"form-group"},WM={disabled:"",value:""},GM=["value"],KM={key:0,class:"form-group"},YM=["placeholder"],QM={key:1,class:"form-group"},XM={class:"form-group"},JM={class:"form-group"},ZM=["placeholder"],eL={class:"form-group"},tL={class:"form-group"},nL={class:"modal-actions"},rL=["disabled"],sL={__name:"PersonalScanFormModal",props:{show:Boolean,scan:Object,isSaving:Boolean},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=$e("currentLanguage"),i={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},o=[{value:"head",en:"Head",ar:"الرأس"},{value:"neck",en:"Neck",ar:"الرقبة"},{value:"chest",en:"Chest",ar:"الصدر"},{value:"abdomen",en:"Abdomen",ar:"البطن"},{value:"pelvis",en:"Pelvis",ar:"الحوض"},{value:"spine",en:"Spine",ar:"العمود الفقري"},{value:"upper_extremity",en:"Upper Extremity",ar:"الطرف العلوي"},{value:"lower_extremity",en:"Lower Extremity",ar:"الطرف السفلي"},{value:"other",en:"Other",ar:"أخرى"}],c={patient:{CT:{"Abdomen & Pelvis":14,"Brain with contrast":2,"Angiography CTA":12,Urography:8,Enterography:8,default:6},"X-ray":{"Barium Enema":7,"IV Urogram (IVP)":2.5,HSG:1.5,VCUG:1,default:.5}},doctor:{CT:{default:1e-5},"X-ray":{"Barium Enema":1e-4,"IV Urogram (IVP)":5e-5,HSG:2e-4,VCUG:15e-5,default:5e-5}}},l=Un({id:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanPlace:"",otherScanPlaceDescription:"",numberOfScans:1,scanDate:new Date().toISOString().split("T")[0],patientDose:null,reason:"",notes:""}),u=Ce(()=>i[l.scanType]||[]),h=Ce(()=>l.subScanType==="Other"),m=Ce(()=>l.scanPlace==="other");et(()=>n.show,D=>{if(D&&(Object.assign(l,{id:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanPlace:"",otherScanPlaceDescription:"",numberOfScans:1,scanDate:new Date().toISOString().split("T")[0],patientDose:null,reason:"",notes:""}),n.scan)){l.id=n.scan.id,l.scanType=n.scan.scanType,l.scanDate=n.scan.scanDate?.toDate()?.toISOString().split("T")[0]||"",l.patientDose=n.scan.patientDose,l.reason=n.scan.reason,l.notes=n.scan.notes,l.numberOfScans=n.scan.numberOfScans||1;const I=n.scan.scanDetail;u.value.some(L=>L.value===I)?l.subScanType=I:I&&(l.subScanType="Other",l.otherScanDescription=I);const k=n.scan.scanPlace;o.some(L=>L.value===k)?l.scanPlace=k:k&&(l.scanPlace="other",l.otherScanPlaceDescription=k)}}),et(()=>l.scanType,()=>{l.subScanType="",l.otherScanDescription=""});const p=()=>{try{const D=l.subScanType==="Other"?"default":l.subScanType,w=c.patient[l.scanType];if(!w)return null;let k=w[D]??w.default;return k===void 0?null:l.scanType==="X-ray"?k*l.numberOfScans:k}catch(D){return console.error("Error retrieving fallback dose:",D),null}},_=()=>{if(!l.scanDate||!l.scanPlace||m.value&&!l.otherScanPlaceDescription||!l.subScanType||h.value&&!l.otherScanDescription){alert(s.value==="en"?"Please fill all required scan details.":"يرجى ملء جميع تفاصيل الفحص المطلوبة.");return}if(l.scanType==="X-ray"&&(l.numberOfScans===null||l.numberOfScans<1)){alert(s.value==="en"?"Number of scans must be at least 1 for X-ray.":"عدد الفحوصات لأشعة إكس يجب أن يكون 1 على الأقل.");return}if((l.patientDose===null||l.patientDose==="")&&(l.patientDose=p()),l.patientDose===null){alert(s.value==="en"?"Could not find a typical dose value for the selected scan. Please enter the dose manually.":"تعذر العثور على قيمة جرعة نموذجية للفحص المحدد. يرجى إدخال الجرعة يدويًا.");return}const D=l.scanDate.split("-"),I=new Date(Date.UTC(D[0],parseInt(D[1],10)-1,D[2]));if(isNaN(I.getTime())){alert("Invalid date. Please select a valid date.");return}const w={id:l.id,scanType:l.scanType,scanDetail:h.value?l.otherScanDescription:l.subScanType,scanPlace:m.value?l.otherScanPlaceDescription:l.scanPlace,numberOfScans:l.scanType==="X-ray"?Number(l.numberOfScans):1,scanDate:ke.fromDate(I),patientDose:Number(l.patientDose),reason:l.reason,notes:l.notes,isPersonalScan:!0};r("save",w)};return(D,I)=>(B(),Bn(Ns,{name:"modal-fade"},{default:ns(()=>[t.show?(B(),W("div",{key:0,class:"modal-overlay",onClick:I[12]||(I[12]=nt(w=>D.$emit("close"),["self"]))},[f("div",{class:"modal-content",dir:y(s)==="ar"?"rtl":"ltr"},[f("button",{class:"close-modal-button",onClick:I[0]||(I[0]=w=>D.$emit("close"))},"×"),f("h3",null,T(t.scan?y(s)==="en"?"Edit Personal Scan":"تعديل الفحص الشخصي":y(s)==="en"?"Add Personal Scan":"إضافة فحص شخصي"),1),f("form",{onSubmit:nt(_,["prevent"]),class:"scan-form"},[f("div",MM,[f("div",LM,[f("label",null,T(y(s)==="en"?"Place of Scan":"مكان الفحص"),1),le(f("select",{"onUpdate:modelValue":I[1]||(I[1]=w=>l.scanPlace=w),required:""},[f("option",FM,T(y(s)==="en"?"Select...":"اختر..."),1),(B(),W(Ze,null,hn(o,w=>f("option",{key:w.value,value:w.value},T(y(s)==="en"?w.en:w.ar),9,$M)),64))],512),[[vt,l.scanPlace]])]),m.value?(B(),W("div",UM,[f("label",null,T(y(s)==="en"?"Please specify other place":"يرجى تحديد المكان الآخر"),1),le(f("input",{type:"text","onUpdate:modelValue":I[2]||(I[2]=w=>l.otherScanPlaceDescription=w),required:""},null,512),[[_e,l.otherScanPlaceDescription]])])):Te("",!0)]),f("div",BM,[f("div",jM,[f("label",null,T(y(s)==="en"?"Scan Category":"فئة الفحص"),1),le(f("select",{"onUpdate:modelValue":I[3]||(I[3]=w=>l.scanType=w),required:""},[f("option",qM,T(y(s)==="en"?"X-ray":"أشعة سينية"),1),f("option",HM,T(y(s)==="en"?"CT":"أشعة مقطعية"),1)],512),[[vt,l.scanType]])]),f("div",zM,[f("label",null,T(y(s)==="en"?"Scan Protocol":"بروتوكول الفحص"),1),le(f("select",{"onUpdate:modelValue":I[4]||(I[4]=w=>l.subScanType=w),required:""},[f("option",WM,T(y(s)==="en"?"Select...":"اختر..."),1),(B(!0),W(Ze,null,hn(u.value,w=>(B(),W("option",{key:w.value,value:w.value},T(y(s)==="en"?w.en:w.ar),9,GM))),128))],512),[[vt,l.subScanType]])])]),h.value?(B(),W("div",KM,[f("label",null,T(y(s)==="en"?"Please specify scan protocol":"يرجى تحديد بروتوكول الفحص"),1),le(f("input",{type:"text","onUpdate:modelValue":I[5]||(I[5]=w=>l.otherScanDescription=w),placeholder:y(s)==="en"?"e.g., Left Hand X-ray":"مثال: أشعة سينية لليد اليسرى",required:""},null,8,YM),[[_e,l.otherScanDescription]])])):Te("",!0),l.scanType==="X-ray"?(B(),W("div",QM,[f("label",null,T(y(s)==="en"?"Number of Scans":"عدد الفحوصات"),1),le(f("input",{type:"number","onUpdate:modelValue":I[6]||(I[6]=w=>l.numberOfScans=w),min:"1",required:""},null,512),[[_e,l.numberOfScans,void 0,{number:!0}]])])):Te("",!0),f("div",XM,[f("label",null,T(y(s)==="en"?"Scan Date":"تاريخ الفحص"),1),le(f("input",{type:"date","onUpdate:modelValue":I[7]||(I[7]=w=>l.scanDate=w),required:""},null,512),[[_e,l.scanDate]])]),f("div",JM,[f("label",null,T(y(s)==="en"?"Your Dose (mSv)":"جرعتك (mSv)"),1),le(f("input",{type:"number",step:"0.00005","onUpdate:modelValue":I[8]||(I[8]=w=>l.patientDose=w),placeholder:y(s)==="en"?"Leave blank for typical value":"اتركه فارغًا لتقدير للقيمة القياسسية"},null,8,ZM),[[_e,l.patientDose,void 0,{number:!0}]])]),f("div",eL,[f("label",null,T(y(s)==="en"?"Reason for Scan":"أسباب الفحص"),1),le(f("textarea",{"onUpdate:modelValue":I[9]||(I[9]=w=>l.reason=w),rows:"2"},null,512),[[_e,l.reason]])]),f("div",tL,[f("label",null,T(y(s)==="en"?"Additional Notes":"ملاحظات إضافية"),1),le(f("textarea",{"onUpdate:modelValue":I[10]||(I[10]=w=>l.notes=w),rows:"3"},null,512),[[_e,l.notes]])]),f("div",nL,[f("button",{type:"button",onClick:I[11]||(I[11]=w=>D.$emit("close")),class:"action-button secondary"},T(y(s)==="en"?"Cancel":"إلغاء"),1),f("button",{type:"submit",class:"action-button",disabled:t.isSaving},T(t.isSaving?y(s)==="en"?"Saving...":"جار الحفظ...":y(s)==="en"?"Save":"حفظ"),9,rL)])],32)],8,VM)])):Te("",!0)]),_:1}))}},iL=Et(sL,[["__scopeId","data-v-dd048426"]]),oL=["dir"],aL={key:0,class:"loading-state"},lL={key:1,class:"empty-state"},cL={key:2,class:"table-container"},uL={class:"history-table"},hL={class:"details-column"},dL={class:"details-column"},fL={class:"details-column"},pL={class:"details-column"},mL={class:"details-column"},gL={class:"details-column"},yL={class:"details-column"},_L={class:"details-column"},vL={class:"action-buttons"},bL=["onClick","title"],EL=["onClick","title"],wL={__name:"HistoryTable",props:{scans:{type:Array,required:!0},isLoading:{type:Boolean,default:!1},isPersonalView:{type:Boolean,default:!1}},emits:["edit","delete"],setup(t,{emit:e}){const n=$e("currentLanguage"),r=s=>!s||!s.toDate?"N/A":s.toDate().toLocaleDateString();return(s,i)=>(B(),W("div",{class:"history-table-wrapper",dir:y(n)==="ar"?"rtl":"ltr"},[t.isLoading?(B(),W("div",aL,[Ae(y(_t),{icon:"spinner",spin:""}),f("span",null,T(y(n)==="en"?"Loading history...":"جاري تحميل السجل..."),1)])):!t.scans||t.scans.length===0?(B(),W("div",lL,[f("p",null,T(y(n)==="en"?"No scan records found.":"لم يتم العثور على سجلات فحوصات."),1)])):(B(),W("div",cL,[f("table",uL,[f("thead",null,[f("tr",null,[f("th",null,T(y(n)==="en"?"Scan Type":"نوع الفحص"),1),f("th",hL,T(y(n)==="en"?"Place of Scan":"مكان الفحص"),1),f("th",dL,T(y(n)==="en"?"Scan Protocol":"بروتوكول الفحص"),1),f("th",null,T(y(n)==="en"?"Date":"التاريخ"),1),f("th",null,T(y(n)==="en"?"Dose":"الجرعة")+" (mSv)",1),f("th",fL,T(y(n)==="en"?"Reason for Scan":"سبب الفحص"),1),f("th",pL,T(y(n)==="en"?"Additional Notes":"ملاحظات إضافية"),1),f("th",null,T(y(n)==="en"?"Actions":"الإجراءات"),1)])]),f("tbody",null,[(B(!0),W(Ze,null,hn(t.scans,o=>(B(),W("tr",{key:o.id},[f("td",null,T(o.scanType||"N/A"),1),f("td",mL,T(o.scanPlace||"N/A"),1),f("td",gL,T(o.scanDetail||"N/A"),1),f("td",null,T(r(o.scanDate)),1),f("td",null,T(o.patientDose??"N/A"),1),f("td",yL,T(o.reason||"N/A"),1),f("td",_L,T(o.notes||"N/A"),1),f("td",null,[f("div",vL,[f("button",{onClick:c=>s.$emit("edit",o),class:"action-button-icon edit-button",title:y(n)==="en"?"Edit":"تعديل"},[Ae(y(_t),{icon:"edit"})],8,bL),f("button",{onClick:c=>s.$emit("delete",o),class:"action-button-icon delete-button",title:y(n)==="en"?"Delete":"حذف"},[Ae(y(_t),{icon:"trash-alt"})],8,EL)])])]))),128))])])]))],8,oL))}},TL=Et(wL,[["__scopeId","data-v-757f7f6d"]]),IL=["dir"],SL={class:"form-group"},AL=["value"],PL={key:0,class:"form-group"},CL={class:"form-group"},RL={class:"form-group"},DL=["disabled"],kL=["value"],OL={key:1,class:"form-group"},NL={key:2,class:"form-group"},xL={class:"form-group"},VL={class:"form-group"},ML=["placeholder"],LL={class:"form-group"},FL=["placeholder"],$L={class:"modal-actions"},UL=["disabled"],BL={__name:"OtherScanFormModal",props:{show:Boolean,scan:Object,isSaving:Boolean},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=$e("currentLanguage"),i={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},o=[{value:"head",en:"Head",ar:"الرأس"},{value:"neck",en:"Neck",ar:"الرقبة"},{value:"chest",en:"Chest",ar:"الصدر"},{value:"abdomen",en:"Abdomen",ar:"البطن"},{value:"pelvis",en:"Pelvis",ar:"الحوض"},{value:"spine",en:"Spine",ar:"العمود الفقري"},{value:"upper_extremity",en:"Upper Extremity",ar:"الطرف العلوي"},{value:"lower_extremity",en:"Lower Extremity",ar:"الطرف السفلي"},{value:"other",en:"Other",ar:"أخرى"}],c={doctor:{CT:{default:1e-5},"X-ray":{"Barium Enema":1e-4,"IV Urogram (IVP)":5e-5,HSG:2e-4,VCUG:15e-5,default:5e-5}}},l=Un({id:null,scanPlace:"",otherScanPlaceDescription:"",scanType:"X-ray",scanDetail:"",otherScanDetailDescription:"",numberOfScans:1,date:new Date().toISOString().split("T")[0],dosage:null,doctorAdditionalContext:""}),u=Ce(()=>i[l.scanType]||[]),h=Ce(()=>l.scanPlace==="other"),m=Ce(()=>l.scanDetail==="Other");et(()=>n.show,D=>{D&&(Object.assign(l,{id:null,scanPlace:"",otherScanPlaceDescription:"",scanType:"X-ray",scanDetail:"",otherScanDetailDescription:"",numberOfScans:1,date:new Date().toISOString().split("T")[0],dosage:null,doctorAdditionalContext:""}),n.scan&&(l.id=n.scan.id,l.scanPlace=n.scan.scanPlace||"",l.scanType=n.scan.scanType||"X-ray",l.scanDetail=n.scan.scanDetail||"",l.numberOfScans=n.scan.numberOfScans||1,l.dosage=n.scan.dosage,l.date=n.scan.date?.toDate?n.scan.date.toDate().toISOString().split("T")[0]:"",l.doctorAdditionalContext=n.scan.doctorAdditionalContext||""))}),et(()=>l.scanType,()=>{l.scanDetail="",l.otherScanDetailDescription=""});const p=()=>{try{const D=l.scanDetail==="Other"?"default":l.scanDetail,w=c.doctor[l.scanType];if(!w)return null;let k=w[D]??w.default;return k===void 0?null:l.scanType==="X-ray"?k*l.numberOfScans:k}catch(D){return console.error("Error retrieving fallback dose:",D),null}},_=()=>{if(!l.scanPlace||!l.scanType||!l.date){alert("Please fill all required fields.");return}if((l.dosage===null||l.dosage==="")&&(l.dosage=p()),l.dosage===null){alert(s.value==="en"?"Could not find a typical dose value for the selected scan. Please enter the dose manually.":"تعذر العثور على قيمة جرعة نموذجية للفحص المحدد. يرجى إدخال الجرعة يدويًا.");return}const D=l.date.split("-"),I=new Date(Date.UTC(D[0],parseInt(D[1],10)-1,parseInt(D[2],10)));if(isNaN(I.getTime())){alert("Invalid date format. Please use YYYY-MM-DD.");return}const w={id:l.id,scanPlace:h.value?l.otherScanPlaceDescription:l.scanPlace,scanType:l.scanType,scanDetail:m.value?l.otherScanDetailDescription:l.scanDetail,numberOfScans:l.scanType==="X-ray"?Number(l.numberOfScans):1,date:ke.fromDate(I),dosage:Number(l.dosage),doctorAdditionalContext:l.doctorAdditionalContext};r("save",w)};return(D,I)=>(B(),Bn(Ns,{name:"modal-fade"},{default:ns(()=>[t.show?(B(),W("div",{key:0,class:"modal-overlay",onClick:I[11]||(I[11]=nt(w=>D.$emit("close"),["self"]))},[f("div",{class:"modal-content",dir:y(s)==="ar"?"rtl":"ltr"},[f("button",{class:"close-modal-button",onClick:I[0]||(I[0]=w=>D.$emit("close"))},"×"),f("h3",null,T(t.scan?"Edit Other Source":"Add Other Source"),1),I[22]||(I[22]=f("p",{class:"subtitle"},"For miscellaneous radiation sources like background radiation or occupational exposure.",-1)),f("form",{onSubmit:nt(_,["prevent"]),class:"scan-form"},[f("div",SL,[I[13]||(I[13]=f("label",null,"Place of Scan",-1)),le(f("select",{"onUpdate:modelValue":I[1]||(I[1]=w=>l.scanPlace=w),required:""},[I[12]||(I[12]=f("option",{disabled:"",value:""},"Select...",-1)),(B(),W(Ze,null,hn(o,w=>f("option",{key:w.value,value:w.value},T(y(s)==="en"?w.en:w.ar),9,AL)),64))],512),[[vt,l.scanPlace]])]),h.value?(B(),W("div",PL,[I[14]||(I[14]=f("label",null,"Please specify place",-1)),le(f("input",{type:"text","onUpdate:modelValue":I[2]||(I[2]=w=>l.otherScanPlaceDescription=w),required:""},null,512),[[_e,l.otherScanPlaceDescription]])])):Te("",!0),f("div",CL,[I[16]||(I[16]=f("label",null,"Scan Type",-1)),le(f("select",{"onUpdate:modelValue":I[3]||(I[3]=w=>l.scanType=w),required:""},I[15]||(I[15]=[f("option",{value:"X-ray"},"X-ray",-1),f("option",{value:"CT"},"CT",-1)]),512),[[vt,l.scanType]])]),f("div",RL,[I[18]||(I[18]=f("label",null,"Scan Detail / Protocol",-1)),le(f("select",{"onUpdate:modelValue":I[4]||(I[4]=w=>l.scanDetail=w),disabled:!u.value.length},[I[17]||(I[17]=f("option",{disabled:"",value:""},"Select...",-1)),(B(!0),W(Ze,null,hn(u.value,w=>(B(),W("option",{key:w.value,value:w.value},T(y(s)==="en"?w.en:w.ar),9,kL))),128))],8,DL),[[vt,l.scanDetail]])]),m.value?(B(),W("div",OL,[I[19]||(I[19]=f("label",null,"Please specify detail",-1)),le(f("input",{type:"text","onUpdate:modelValue":I[5]||(I[5]=w=>l.otherScanDetailDescription=w),required:""},null,512),[[_e,l.otherScanDetailDescription]])])):Te("",!0),l.scanType==="X-ray"?(B(),W("div",NL,[I[20]||(I[20]=f("label",null,"Number of Scans",-1)),le(f("input",{type:"number","onUpdate:modelValue":I[6]||(I[6]=w=>l.numberOfScans=w),min:"1",required:""},null,512),[[_e,l.numberOfScans,void 0,{number:!0}]])])):Te("",!0),f("div",xL,[I[21]||(I[21]=f("label",null,"History (Date)",-1)),le(f("input",{type:"date","onUpdate:modelValue":I[7]||(I[7]=w=>l.date=w),required:""},null,512),[[_e,l.date]])]),f("div",VL,[f("label",null,T(y(s)==="en"?"Your Exposure Context (Optional)":"سياق تعرضك (اختياري)"),1),le(f("textarea",{"onUpdate:modelValue":I[8]||(I[8]=w=>l.doctorAdditionalContext=w),rows:"2",placeholder:y(s)==="en"?"e.g., shielding used, distance from source...":"مثال: التدريع المستخدم، المسافة من المصدر..."},"          ",8,ML),[[_e,l.doctorAdditionalContext]])]),f("div",LL,[f("label",null,T(y(s)==="en"?"Occupational Dose (mSv)":"الجرعة المهنية (mSv)"),1),le(f("input",{type:"number",step:"0.00005","onUpdate:modelValue":I[9]||(I[9]=w=>l.dosage=w),placeholder:y(s)==="en"?"Leave blank for typical value":"اتركه فارغًا لتقدير للقيمة القياسسية"},null,8,FL),[[_e,l.dosage,void 0,{number:!0}]])]),f("div",$L,[f("button",{type:"submit",class:"action-button",disabled:t.isSaving},T(t.isSaving?y(s)==="en"?"Saving...":"جاري الحفظ...":y(s)==="en"?"Save":"حفظ"),9,UL),f("button",{type:"button",onClick:I[10]||(I[10]=w=>D.$emit("close")),class:"action-button secondary"},T(y(s)==="en"?"Cancel":"إلغاء"),1)])],32)],8,IL)])):Te("",!0)]),_:1}))}},jL=Et(BL,[["__scopeId","data-v-72feaf34"]]),qL=["dir"],HL={key:0,class:"loading-state"},zL={key:1,class:"empty-state"},WL={key:2,class:"table-container"},GL={class:"history-table"},KL=["title"],YL={class:"action-buttons"},QL=["onClick","title"],XL=["onClick","title"],JL={__name:"OtherScansTable",props:{scans:{type:Array,required:!0},isLoading:{type:Boolean,default:!1}},emits:["edit","delete"],setup(t,{emit:e}){const n=$e("currentLanguage"),r=s=>!s||!s.toDate?"N/A":s.toDate().toLocaleDateString(n.value==="ar"?"ar-EG":"en-US");return(s,i)=>(B(),W("div",{class:"history-table-wrapper",dir:y(n)==="ar"?"rtl":"ltr"},[t.isLoading?(B(),W("div",HL,[Ae(y(_t),{icon:"spinner",spin:""}),f("span",null,T(y(n)==="en"?"Loading other sources...":"جاري تحميل المصادر الأخرى..."),1)])):!t.scans||t.scans.length===0?(B(),W("div",zL,[f("p",null,T(y(n)==="en"?"No other scan records found.":"لم يتم العثور على سجلات فحوصات أخرى."),1)])):(B(),W("div",WL,[f("table",GL,[f("thead",null,[f("tr",null,[f("th",null,T(y(n)==="en"?"Place":"المكان"),1),f("th",null,T(y(n)==="en"?"Type":"النوع"),1),f("th",null,T(y(n)==="en"?"Detail":"التفاصيل"),1),f("th",null,T(y(n)==="en"?"Context":"السياق"),1),f("th",null,T(y(n)==="en"?"Date":"التاريخ"),1),f("th",null,T(y(n)==="en"?"Dosage":"الجرعة")+" (mSv)",1),f("th",null,T(y(n)==="en"?"Actions":"الإجراءات"),1)])]),f("tbody",null,[(B(!0),W(Ze,null,hn(t.scans,o=>(B(),W("tr",{key:o.id},[f("td",null,T(o.scanPlace||"N/A"),1),f("td",null,T(o.scanType||"N/A"),1),f("td",null,T(o.scanDetail||"N/A"),1),f("td",{class:"context-cell",title:o.doctorAdditionalContext},T(o.doctorAdditionalContext||"N/A"),9,KL),f("td",null,T(r(o.date)),1),f("td",null,T(o.dosage??"N/A"),1),f("td",null,[f("div",YL,[f("button",{onClick:c=>s.$emit("edit",o),class:"action-button-icon edit-button",title:y(n)==="en"?"Edit":"تعديل"},[Ae(y(_t),{icon:"edit"})],8,QL),f("button",{onClick:c=>s.$emit("delete",o),class:"action-button-icon delete-button",title:y(n)==="en"?"Delete":"حذف"},[Ae(y(_t),{icon:"trash-alt"})],8,XL)])])]))),128))])])]))],8,qL))}},ZL=Et(JL,[["__scopeId","data-v-46c6e165"]]),e6=["dir"],t6={class:"profile-section card"},n6={class:"card-header"},r6={key:0,class:"loading-state"},s6={key:1,class:"profile-details"},i6={key:0,class:"role-tag"},o6={key:1,class:"role-tag"},a6={key:0},l6={key:1},c6={key:2},u6={key:0},h6={key:0},d6={key:1},f6={class:"history-section card"},p6={class:"card-header"},m6={class:"history-section card"},g6={class:"card-header"},y6={class:"switch-link-container"},_6={__name:"ProfileView",setup(t){const e=In(),n=Di(),r=xs(),s=$e("currentLanguage"),i=$e("triggerMsvRecalculation"),o=Ie([]),c=Ie([]),l=Ie(!1),u=Ie(!1),h=Ie(!1),m=Ie(null),p=Ie(null),_=Ie(!1),D=Ie(null),I=Ie(null),w=Ie(!1),k=Ce(()=>e.user?.uid),x=Ce(()=>{if(!e.userProfile)return{displayName:e.user?.displayName||"",email:e.user?.email||""};const we=Z=>{if(!Z)return"";const F=Z.toDate?Z.toDate():new Date(Z);return isNaN(F)?"":F.toISOString().split("T")[0]};return{...e.userProfile,displayName:e.user?.displayName,email:e.user?.email,birthDate:we(e.userProfile.birthDate),estimatedDueDate:we(e.userProfile.estimatedDueDate)}}),L=async()=>{k.value&&(o.value=await n.fetchScansForPatient(k.value),c.value=await n.fetchOtherScansForUser(k.value))},U=async we=>{if(!k.value)return;const Z={};await n.setUserProfile(k.value,Z)?(e.setUserProfile(Z),l.value=!1,i&&i()):alert(`Failed to save profile. Error: ${n.error}`)},Y=async we=>{if(!k.value)return;const Z={...we,patientId:k.value};(Z.id?await n.updateScan(Z.id,Z):await n.createScan(Z))?(u.value=!1,await L(),i&&i()):alert(`Failed to save scan: ${n.error}`)},X=async()=>{if(!p.value?.id)return;await n.deleteScan(p.value.id)?(h.value=!1,await L(),i&&i()):alert(`Failed to delete scan: ${n.error}`)},C=async we=>{(we.id?await n.updateOtherScan(we.id,we):await n.createOtherScan(we))?(_.value=!1,console.log("[ProfileView] Save successful. Waiting 1 second before refetching data..."),setTimeout(async()=>{console.log("[ProfileView] Refetching data now..."),await L(),i&&i()},1e3)):alert(`Failed to save other scan: ${n.error}`)},b=async()=>{if(!I.value?.id)return;await n.deleteOtherScan(I.value.id)?(w.value=!1,await L(),i&&i()):alert(`Failed to delete other scan: ${n.error}`)},E=()=>{m.value=null,u.value=!0},P=we=>{m.value=we,u.value=!0},N=we=>{p.value=we,h.value=!0},R=()=>{D.value=null,_.value=!0},S=we=>{D.value=we,_.value=!0},Ne=we=>{I.value=we,w.value=!0};return qh(()=>{et(()=>e.isAuthReady,we=>{we&&k.value&&L()},{immediate:!0})}),(we,Z)=>(B(),W("div",{class:"profile-page",dir:y(s)==="ar"?"rtl":"ltr"},[f("div",t6,[f("div",n6,[f("h2",null,T(y(s)==="en"?"My Profile":"ملفي الشخصي"),1),f("button",{onClick:Z[0]||(Z[0]=F=>l.value=!0),class:"action-button"},T(y(s)==="en"?"Edit Profile":"تعديل الملف الشخصي"),1)]),y(e).isProfileLoading?(B(),W("div",r6,"Loading profile...")):x.value?(B(),W("div",s6,[f("p",null,[f("strong",null,T(y(s)==="en"?"Name:":"اﻹسم:"),1),f("span",null,T(x.value.displayName),1)]),f("p",null,[f("strong",null,T(y(s)==="en"?"Email:":"البريد اﻹلكتروني:"),1),f("span",null,T(x.value.email),1)]),f("p",null,[f("strong",null,T(y(s)==="en"?"Role":"الدور")+":",1),x.value.role==="doctor"?(B(),W("span",i6,T(y(s)==="en"?"Doctor":"طبيب"),1)):(B(),W("span",o6,T(y(s)==="en"?"Patient":"مريض"),1))]),f("p",null,[f("strong",null,T(y(s)==="en"?"Birth Date:":"تاريخ الميلاد:"),1),f("span",null,T(x.value.birthDate||"Not set"),1)]),f("p",null,[f("strong",null,T(y(s)==="en"?"Weight:":"الوزن:"),1),f("span",null,T(x.value.weight?`${x.value.weight} kg`:"Not set"),1)]),f("p",null,[f("strong",null,T(y(s)==="en"?"Gender: ":"الجنس: "),1),x.value.gender==="male"?(B(),W("span",a6,T(y(s)==="en"?"Male":"ذكر"),1)):x.value.gender==="female"?(B(),W("span",l6,T(y(s)==="en"?"Female":"أنثى"),1)):(B(),W("span",c6,"Not set"))]),x.value.gender==="female"?(B(),W("p",u6,[f("strong",null,T(y(s)==="en"?"Pregnant: ":"حامل: "),1),x.value.isPregnant?(B(),W("span",h6,T(y(s)==="en"?"Yes":"نعم")+" ("+T(y(s)==="en"?"Due:":"المتوقع:")+" "+T(x.value.estimatedDueDate)+")",1)):(B(),W("span",d6,T(y(s)==="en"?"No":"لا"),1))])):Te("",!0),f("p",null,[f("strong",null,T(y(s)==="en"?"Allergies:":"الحساسية:"),1),f("span",null,T(x.value.allergies?.join(", ")||"None"),1)]),f("p",null,[f("strong",null,T(y(s)==="en"?"Medical History:":"التاريخ الطبي:"),1),f("span",null,T(x.value.medicalHistory?.join(", ")||"None"),1)])])):Te("",!0)]),f("div",f6,[f("div",p6,[f("h2",null,T(y(s)==="en"?"Personal Scan History":"تاريخ الفحوصات الشخصية"),1),f("button",{onClick:E,class:"action-button"},T(y(s)==="en"?"Add Personal Scan":"إضافة فحص شخصي"),1)]),Ae(TL,{scans:o.value,"is-loading":y(n).loading,"is-personal-view":!0,onEdit:P,onDelete:N},null,8,["scans","is-loading"])]),f("div",m6,[f("div",g6,[f("h2",null,T(y(s)==="en"?"Other Scans / Sources":"الفحوصات / المصادر الأخرى"),1),f("button",{onClick:R,class:"action-button"},T(y(s)==="en"?"Add Other Source":"إضافة مصدر آخر"),1)]),Ae(ZL,{scans:c.value,"is-loading":y(n).loading,onEdit:S,onDelete:Ne},null,8,["scans","is-loading"])]),Ae(xM,{show:l.value,"profile-data":x.value,onClose:Z[1]||(Z[1]=F=>l.value=!1),onSave:U},null,8,["show","profile-data"]),Ae(iL,{show:u.value,scan:m.value,"is-saving":y(n).loading,onClose:Z[2]||(Z[2]=F=>u.value=!1),onSave:Y},null,8,["show","scan","is-saving"]),Ae(Ml,{show:h.value,title:"Delete Scan",message:"Are you sure you want to delete this scan record?",onClose:Z[3]||(Z[3]=F=>h.value=!1),onConfirm:X},null,8,["show"]),Ae(jL,{show:_.value,scan:D.value,"is-saving":y(n).loading,onClose:Z[4]||(Z[4]=F=>_.value=!1),onSave:C},null,8,["show","scan","is-saving"]),Ae(Ml,{show:w.value,title:"Delete Other Scan",message:"Are you sure you want to delete this record?",onClose:Z[5]||(Z[5]=F=>w.value=!1),onConfirm:b},null,8,["show"]),f("div",y6,[f("a",{href:"#",onClick:Z[6]||(Z[6]=nt(F=>y(r).push("/dashboard"),["prevent"]))},T(y(s)==="en"?"Back to dashboard":"العودة إلى لوحة التحكم"),1)])],8,e6))}},v6=Et(_6,[["__scopeId","data-v-69e1071a"]]),Ll=HT({history:bT("/X-ray"),routes:[{path:"/",name:"signup",component:X2},{path:"/signin",name:"signin",component:vk},{path:"/dashboard",name:"dashboard",component:Z4,meta:{requiresAuth:!0}},{path:"/recommend/:patientId?",name:"recommend",component:vO,meta:{requiresAuth:!0}},{path:"/patients",name:"patients",component:w4,meta:{requiresAuth:!0}},{path:"/profile",name:"profile",component:v6,meta:{requiresAuth:!0}},{path:"/resetpassword",name:"resetpassword",component:mM},{path:"/__/auth/handler",name:"firebaseAuthHandler",component:{render(){return ci("div")}},beforeEnter:(t,e,n)=>{n()}},{path:"/:catchAll(.*)",redirect:"/dashboard"},{path:"/__/auth/iframe",name:"firebaseAuthIframeHandler",component:{render(){return ci("div")}},beforeEnter:(t,e,n)=>{n()}}]});Ll.beforeEach(async(t,e,n)=>{const r=In();r.isAuthReady||await new Promise(c=>{const l=r.$subscribe((u,h)=>{h.isAuthReady&&(l(),c())})});const s=!!r.user;if(t.path.startsWith("/__/auth/handler")||t.path.startsWith("/__/auth/iframe")){n();return}console.log(`Navigating to: ${t.path} (name: ${t.name})`),console.log(`isAuthenticated: ${s}`);const o=["signup","signin","resetpassword","newpassword"].includes(t.name);s?o?(console.log(`Redirecting authenticated user from ${t.name} to /dashboard.`),n("/dashboard")):(console.log(`Allowing authenticated access to ${t.path}.`),n()):o?(console.log(`Allowing unauthenticated access to ${t.name}.`),n()):(console.log(`Redirecting unauthenticated user from ${t.path} (requires auth) to /signin.`),n("/signin"))});var b6="firebase",E6="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ur(b6,E6,"app");/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const w6={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]},T6=w6,I6={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},S6=I6,A6={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},P6=A6,C6={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},R6={prefix:"fas",iconName:"file-medical",icon:[384,512,[],"f477","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM160 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z"]},D6={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},k6={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};bx.add(C6,S6,T6,R6,D6,k6,P6);const O6={apiKey:"AIzaSyBKiw2ibjMQB-i_sMorpK5nXyHb87_6uZA",authDomain:"x-ray-b0cb8.firebaseapp.com",projectId:"x-ray-b0cb8",storageBucket:"x-ray-b0cb8.firebasestorage.app",messagingSenderId:"382664693760",appId:"1:382664693760:web:7582abe58d70b3260f20e5",measurementId:"G-5MKNMY9VGY"},zb=z_(O6),tf=nC(zb),N6=Js(zb),gr=Bw(C2),x6=GT();gr.use(x6);gr.use(Ll);gr.component("font-awesome-icon",_t);const Ph=Ie(null),Wb=Ie(!1),ro=In();ro.initAuth(tf);gv(tf,t=>{if(Ph.value=t?t.uid:null,ro.user=t,ro.isAuthenticated=!!t,Wb.value=!0,t){const e=Ll.currentRoute.value.name;["signup","signin","resetpassword","newpassword"].includes(e)&&Ll.push("/dashboard")}else Ph.value=null,ro.user=null,ro.isAuthenticated=!1});gr.provide("db",N6);gr.provide("auth",tf);gr.provide("currentUserId",Ph);gr.provide("isAuthReady",Wb);gr.provide("appId",typeof __app_id<"u"?__app_id:"default-app-id");gr.mount("#app");
