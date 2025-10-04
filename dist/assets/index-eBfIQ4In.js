(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Cd(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ye={},ei=[],xn=()=>{},y0=()=>!1,Fl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Rd=t=>t.startsWith("onUpdate:"),Et=Object.assign,Dd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},v0=Object.prototype.hasOwnProperty,ze=(t,e)=>v0.call(t,e),_e=Array.isArray,ti=t=>Ho(t)==="[object Map]",wi=t=>Ho(t)==="[object Set]",Kf=t=>Ho(t)==="[object Date]",De=t=>typeof t=="function",ft=t=>typeof t=="string",Fn=t=>typeof t=="symbol",Je=t=>t!==null&&typeof t=="object",ry=t=>(Je(t)||De(t))&&De(t.then)&&De(t.catch),sy=Object.prototype.toString,Ho=t=>sy.call(t),_0=t=>Ho(t).slice(8,-1),iy=t=>Ho(t)==="[object Object]",kd=t=>ft(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,so=Cd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ul=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},b0=/-(\w)/g,Hr=Ul(t=>t.replace(b0,(e,n)=>n?n.toUpperCase():"")),w0=/\B([A-Z])/g,Ns=Ul(t=>t.replace(w0,"-$1").toLowerCase()),oy=Ul(t=>t.charAt(0).toUpperCase()+t.slice(1)),jc=Ul(t=>t?`on${oy(t)}`:""),Lr=(t,e)=>!Object.is(t,e),qa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},wu=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},il=t=>{const e=parseFloat(t);return isNaN(e)?t:e},E0=t=>{const e=ft(t)?Number(t):NaN;return isNaN(e)?t:e};let Yf;const Bl=()=>Yf||(Yf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jl(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ft(r)?A0(r):jl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ft(t)||Je(t))return t}const T0=/;(?![^(]*\))/g,I0=/:([^]+)/,S0=/\/\*[^]*?\*\//g;function A0(t){const e={};return t.replace(S0,"").split(T0).forEach(n=>{if(n){const r=n.split(I0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function zr(t){let e="";if(ft(t))e=t;else if(_e(t))for(let n=0;n<t.length;n++){const r=zr(t[n]);r&&(e+=r+" ")}else if(Je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const P0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",C0=Cd(P0);function ay(t){return!!t||t===""}function R0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=zo(t[r],e[r]);return n}function zo(t,e){if(t===e)return!0;let n=Kf(t),r=Kf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Fn(t),r=Fn(e),n||r)return t===e;if(n=_e(t),r=_e(e),n||r)return n&&r?R0(t,e):!1;if(n=Je(t),r=Je(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!zo(t[o],e[o]))return!1}}return String(t)===String(e)}function Od(t,e){return t.findIndex(n=>zo(n,e))}const ly=t=>!!(t&&t.__v_isRef===!0),_=t=>ft(t)?t:t==null?"":_e(t)||Je(t)&&(t.toString===sy||!De(t.toString))?ly(t)?_(t.value):JSON.stringify(t,cy,2):String(t),cy=(t,e)=>ly(e)?cy(t,e.value):ti(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[qc(r,i)+" =>"]=s,n),{})}:wi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>qc(n))}:Fn(e)?qc(e):Je(e)&&!_e(e)&&!iy(e)?String(e):e,qc=(t,e="")=>{var n;return Fn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lt;class uy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Lt,!e&&Lt&&(this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Lt;try{return Lt=this,e()}finally{Lt=n}}}on(){++this._on===1&&(this.prevScope=Lt,Lt=this)}off(){this._on>0&&--this._on===0&&(Lt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function dy(t){return new uy(t)}function hy(){return Lt}function D0(t,e=!1){Lt&&Lt.cleanups.push(t)}let Ze;const Hc=new WeakSet;class fy{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Lt&&Lt.active&&Lt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hc.has(this)&&(Hc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||my(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xf(this),gy(this);const e=Ze,n=_n;Ze=this,_n=!0;try{return this.fn()}finally{yy(this),Ze=e,_n=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vd(e);this.deps=this.depsTail=void 0,Xf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Eu(this)&&this.run()}get dirty(){return Eu(this)}}let py=0,io,oo;function my(t,e=!1){if(t.flags|=8,e){t.next=oo,oo=t;return}t.next=io,io=t}function xd(){py++}function Nd(){if(--py>0)return;if(oo){let e=oo;for(oo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;io;){let e=io;for(io=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function gy(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function yy(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Vd(r),k0(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Eu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(vy(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function vy(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===To)||(t.globalVersion=To,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Eu(t))))return;t.flags|=2;const e=t.dep,n=Ze,r=_n;Ze=t,_n=!0;try{gy(t);const s=t.fn(t._value);(e.version===0||Lr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ze=n,_n=r,yy(t),t.flags&=-3}}function Vd(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Vd(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function k0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let _n=!0;const _y=[];function ir(){_y.push(_n),_n=!1}function or(){const t=_y.pop();_n=t===void 0?!0:t}function Xf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ze;Ze=void 0;try{e()}finally{Ze=n}}}let To=0;class O0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Md{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ze||!_n||Ze===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ze)n=this.activeLink=new O0(Ze,this),Ze.deps?(n.prevDep=Ze.depsTail,Ze.depsTail.nextDep=n,Ze.depsTail=n):Ze.deps=Ze.depsTail=n,by(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ze.depsTail,n.nextDep=void 0,Ze.depsTail.nextDep=n,Ze.depsTail=n,Ze.deps===n&&(Ze.deps=r)}return n}trigger(e){this.version++,To++,this.notify(e)}notify(e){xd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Nd()}}}function by(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)by(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ol=new WeakMap,Ts=Symbol(""),Tu=Symbol(""),Io=Symbol("");function Ft(t,e,n){if(_n&&Ze){let r=ol.get(t);r||ol.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Md),s.map=r,s.key=n),s.track()}}function Yn(t,e,n,r,s,i){const o=ol.get(t);if(!o){To++;return}const c=l=>{l&&l.trigger()};if(xd(),e==="clear")o.forEach(c);else{const l=_e(t),u=l&&kd(n);if(l&&n==="length"){const h=Number(r);o.forEach((m,p)=>{(p==="length"||p===Io||!Fn(p)&&p>=h)&&c(m)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Io)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Ts)),ti(t)&&c(o.get(Tu)));break;case"delete":l||(c(o.get(Ts)),ti(t)&&c(o.get(Tu)));break;case"set":ti(t)&&c(o.get(Ts));break}}Nd()}function x0(t,e){const n=ol.get(t);return n&&n.get(e)}function js(t){const e=je(t);return e===t?e:(Ft(e,"iterate",Io),fn(t)?e:e.map(Ct))}function ql(t){return Ft(t=je(t),"iterate",Io),t}const N0={__proto__:null,[Symbol.iterator](){return zc(this,Symbol.iterator,Ct)},concat(...t){return js(this).concat(...t.map(e=>_e(e)?js(e):e))},entries(){return zc(this,"entries",t=>(t[1]=Ct(t[1]),t))},every(t,e){return zn(this,"every",t,e,void 0,arguments)},filter(t,e){return zn(this,"filter",t,e,n=>n.map(Ct),arguments)},find(t,e){return zn(this,"find",t,e,Ct,arguments)},findIndex(t,e){return zn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return zn(this,"findLast",t,e,Ct,arguments)},findLastIndex(t,e){return zn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return zn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Wc(this,"includes",t)},indexOf(...t){return Wc(this,"indexOf",t)},join(t){return js(this).join(t)},lastIndexOf(...t){return Wc(this,"lastIndexOf",t)},map(t,e){return zn(this,"map",t,e,void 0,arguments)},pop(){return zi(this,"pop")},push(...t){return zi(this,"push",t)},reduce(t,...e){return Qf(this,"reduce",t,e)},reduceRight(t,...e){return Qf(this,"reduceRight",t,e)},shift(){return zi(this,"shift")},some(t,e){return zn(this,"some",t,e,void 0,arguments)},splice(...t){return zi(this,"splice",t)},toReversed(){return js(this).toReversed()},toSorted(t){return js(this).toSorted(t)},toSpliced(...t){return js(this).toSpliced(...t)},unshift(...t){return zi(this,"unshift",t)},values(){return zc(this,"values",Ct)}};function zc(t,e,n){const r=ql(t),s=r[e]();return r!==t&&!fn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const V0=Array.prototype;function zn(t,e,n,r,s,i){const o=ql(t),c=o!==t&&!fn(t),l=o[e];if(l!==V0[e]){const m=l.apply(t,i);return c?Ct(m):m}let u=n;o!==t&&(c?u=function(m,p){return n.call(this,Ct(m),p,t)}:n.length>2&&(u=function(m,p){return n.call(this,m,p,t)}));const h=l.call(o,u,r);return c&&s?s(h):h}function Qf(t,e,n,r){const s=ql(t);let i=n;return s!==t&&(fn(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,Ct(c),l,t)}),s[e](i,...r)}function Wc(t,e,n){const r=je(t);Ft(r,"iterate",Io);const s=r[e](...n);return(s===-1||s===!1)&&Fd(n[0])?(n[0]=je(n[0]),r[e](...n)):s}function zi(t,e,n=[]){ir(),xd();const r=je(t)[e].apply(t,n);return Nd(),or(),r}const M0=Cd("__proto__,__v_isRef,__isVue"),wy=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fn));function L0(t){Fn(t)||(t=String(t));const e=je(this);return Ft(e,"has",t),e.hasOwnProperty(t)}class Ey{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?G0:Ay:i?Sy:Iy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=_e(e);if(!s){let l;if(o&&(l=N0[n]))return l;if(n==="hasOwnProperty")return L0}const c=Reflect.get(e,n,ht(e)?e:r);return(Fn(n)?wy.has(n):M0(n))||(s||Ft(e,"get",n),i)?c:ht(c)?o&&kd(n)?c:c.value:Je(c)?s?Cy(c):Bn(c):c}}class Ty extends Ey{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Wr(i);if(!fn(r)&&!Wr(r)&&(i=je(i),r=je(r)),!_e(e)&&ht(i)&&!ht(r))return l?!1:(i.value=r,!0)}const o=_e(e)&&kd(n)?Number(n)<e.length:ze(e,n),c=Reflect.set(e,n,r,ht(e)?e:s);return e===je(s)&&(o?Lr(r,i)&&Yn(e,"set",n,r):Yn(e,"add",n,r)),c}deleteProperty(e,n){const r=ze(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Yn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Fn(n)||!wy.has(n))&&Ft(e,"has",n),r}ownKeys(e){return Ft(e,"iterate",_e(e)?"length":Ts),Reflect.ownKeys(e)}}class $0 extends Ey{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const F0=new Ty,U0=new $0,B0=new Ty(!0);const Iu=t=>t,Ca=t=>Reflect.getPrototypeOf(t);function j0(t,e,n){return function(...r){const s=this.__v_raw,i=je(s),o=ti(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?Iu:e?al:Ct;return!e&&Ft(i,"iterate",l?Tu:Ts),{next(){const{value:m,done:p}=u.next();return p?{value:m,done:p}:{value:c?[h(m[0]),h(m[1])]:h(m),done:p}},[Symbol.iterator](){return this}}}}function Ra(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function q0(t,e){const n={get(s){const i=this.__v_raw,o=je(i),c=je(s);t||(Lr(s,c)&&Ft(o,"get",s),Ft(o,"get",c));const{has:l}=Ca(o),u=e?Iu:t?al:Ct;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Ft(je(s),"iterate",Ts),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=je(i),c=je(s);return t||(Lr(s,c)&&Ft(o,"has",s),Ft(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=je(c),u=e?Iu:t?al:Ct;return!t&&Ft(l,"iterate",Ts),c.forEach((h,m)=>s.call(i,u(h),u(m),o))}};return Et(n,t?{add:Ra("add"),set:Ra("set"),delete:Ra("delete"),clear:Ra("clear")}:{add(s){!e&&!fn(s)&&!Wr(s)&&(s=je(s));const i=je(this);return Ca(i).has.call(i,s)||(i.add(s),Yn(i,"add",s,s)),this},set(s,i){!e&&!fn(i)&&!Wr(i)&&(i=je(i));const o=je(this),{has:c,get:l}=Ca(o);let u=c.call(o,s);u||(s=je(s),u=c.call(o,s));const h=l.call(o,s);return o.set(s,i),u?Lr(i,h)&&Yn(o,"set",s,i):Yn(o,"add",s,i),this},delete(s){const i=je(this),{has:o,get:c}=Ca(i);let l=o.call(i,s);l||(s=je(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Yn(i,"delete",s,void 0),u},clear(){const s=je(this),i=s.size!==0,o=s.clear();return i&&Yn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=j0(s,t,e)}),n}function Ld(t,e){const n=q0(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ze(n,s)&&s in r?n:r,s,i)}const H0={get:Ld(!1,!1)},z0={get:Ld(!1,!0)},W0={get:Ld(!0,!1)};const Iy=new WeakMap,Sy=new WeakMap,Ay=new WeakMap,G0=new WeakMap;function K0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Y0(t){return t.__v_skip||!Object.isExtensible(t)?0:K0(_0(t))}function Bn(t){return Wr(t)?t:$d(t,!1,F0,H0,Iy)}function Py(t){return $d(t,!1,B0,z0,Sy)}function Cy(t){return $d(t,!0,U0,W0,Ay)}function $d(t,e,n,r,s){if(!Je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Y0(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function $r(t){return Wr(t)?$r(t.__v_raw):!!(t&&t.__v_isReactive)}function Wr(t){return!!(t&&t.__v_isReadonly)}function fn(t){return!!(t&&t.__v_isShallow)}function Fd(t){return t?!!t.__v_raw:!1}function je(t){const e=t&&t.__v_raw;return e?je(e):t}function Ud(t){return!ze(t,"__v_skip")&&Object.isExtensible(t)&&wu(t,"__v_skip",!0),t}const Ct=t=>Je(t)?Bn(t):t,al=t=>Je(t)?Cy(t):t;function ht(t){return t?t.__v_isRef===!0:!1}function Ee(t){return Ry(t,!1)}function X0(t){return Ry(t,!0)}function Ry(t,e){return ht(t)?t:new Q0(t,e)}class Q0{constructor(e,n){this.dep=new Md,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:je(e),this._value=n?e:Ct(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||fn(e)||Wr(e);e=r?e:je(e),Lr(e,n)&&(this._rawValue=e,this._value=r?e:Ct(e),this.dep.trigger())}}function y(t){return ht(t)?t.value:t}const J0={get:(t,e,n)=>e==="__v_raw"?t:y(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ht(s)&&!ht(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Dy(t){return $r(t)?t:new Proxy(t,J0)}function Z0(t){const e=_e(t)?new Array(t.length):{};for(const n in t)e[n]=tw(t,n);return e}class ew{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return x0(je(this._object),this._key)}}function tw(t,e,n){const r=t[e];return ht(r)?r:new ew(t,e,n)}class nw{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Md(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=To-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ze!==this)return my(this,!0),!0}get value(){const e=this.dep.track();return vy(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rw(t,e,n=!1){let r,s;return De(t)?r=t:(r=t.get,s=t.set),new nw(r,s,n)}const Da={},ll=new WeakMap;let ys;function sw(t,e=!1,n=ys){if(n){let r=ll.get(n);r||ll.set(n,r=[]),r.push(t)}}function iw(t,e,n=Ye){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=V=>s?V:fn(V)||s===!1||s===0?Xn(V,1):Xn(V);let h,m,p,v,R=!1,I=!1;if(ht(t)?(m=()=>t.value,R=fn(t)):$r(t)?(m=()=>u(t),R=!0):_e(t)?(I=!0,R=t.some(V=>$r(V)||fn(V)),m=()=>t.map(V=>{if(ht(V))return V.value;if($r(V))return u(V);if(De(V))return l?l(V,2):V()})):De(t)?e?m=l?()=>l(t,2):t:m=()=>{if(p){ir();try{p()}finally{or()}}const V=ys;ys=h;try{return l?l(t,3,[v]):t(v)}finally{ys=V}}:m=xn,e&&s){const V=m,F=s===!0?1/0:s;m=()=>Xn(V(),F)}const E=hy(),k=()=>{h.stop(),E&&E.active&&Dd(E.effects,h)};if(i&&e){const V=e;e=(...F)=>{V(...F),k()}}let N=I?new Array(t.length).fill(Da):Da;const $=V=>{if(!(!(h.flags&1)||!h.dirty&&!V))if(e){const F=h.run();if(s||R||(I?F.some((X,P)=>Lr(X,N[P])):Lr(F,N))){p&&p();const X=ys;ys=h;try{const P=[F,N===Da?void 0:I&&N[0]===Da?[]:N,v];N=F,l?l(e,3,P):e(...P)}finally{ys=X}}}else h.run()};return c&&c($),h=new fy(m),h.scheduler=o?()=>o($,!1):$,v=V=>sw(V,!1,h),p=h.onStop=()=>{const V=ll.get(h);if(V){if(l)l(V,4);else for(const F of V)F();ll.delete(h)}},e?r?$(!0):N=h.run():o?o($.bind(null,!0),!0):h.run(),k.pause=h.pause.bind(h),k.resume=h.resume.bind(h),k.stop=k,k}function Xn(t,e=1/0,n){if(e<=0||!Je(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ht(t))Xn(t.value,e,n);else if(_e(t))for(let r=0;r<t.length;r++)Xn(t[r],e,n);else if(wi(t)||ti(t))t.forEach(r=>{Xn(r,e,n)});else if(iy(t)){for(const r in t)Xn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Xn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wo(t,e,n,r){try{return r?t(...r):t()}catch(s){Hl(s,e,n)}}function wn(t,e,n,r){if(De(t)){const s=Wo(t,e,n,r);return s&&ry(s)&&s.catch(i=>{Hl(i,e,n)}),s}if(_e(t)){const s=[];for(let i=0;i<t.length;i++)s.push(wn(t[i],e,n,r));return s}}function Hl(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ye;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const h=c.ec;if(h){for(let m=0;m<h.length;m++)if(h[m](t,l,u)===!1)return}c=c.parent}if(i){ir(),Wo(i,null,10,[t,l,u]),or();return}}ow(t,n,s,r,o)}function ow(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const zt=[];let Cn=-1;const ni=[];let Cr=null,Ws=0;const ky=Promise.resolve();let cl=null;function zl(t){const e=cl||ky;return t?e.then(this?t.bind(this):t):e}function aw(t){let e=Cn+1,n=zt.length;for(;e<n;){const r=e+n>>>1,s=zt[r],i=So(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Bd(t){if(!(t.flags&1)){const e=So(t),n=zt[zt.length-1];!n||!(t.flags&2)&&e>=So(n)?zt.push(t):zt.splice(aw(e),0,t),t.flags|=1,Oy()}}function Oy(){cl||(cl=ky.then(Ny))}function lw(t){_e(t)?ni.push(...t):Cr&&t.id===-1?Cr.splice(Ws+1,0,t):t.flags&1||(ni.push(t),t.flags|=1),Oy()}function Jf(t,e,n=Cn+1){for(;n<zt.length;n++){const r=zt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;zt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function xy(t){if(ni.length){const e=[...new Set(ni)].sort((n,r)=>So(n)-So(r));if(ni.length=0,Cr){Cr.push(...e);return}for(Cr=e,Ws=0;Ws<Cr.length;Ws++){const n=Cr[Ws];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Cr=null,Ws=0}}const So=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ny(t){try{for(Cn=0;Cn<zt.length;Cn++){const e=zt[Cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Wo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Cn<zt.length;Cn++){const e=zt[Cn];e&&(e.flags&=-2)}Cn=-1,zt.length=0,xy(),cl=null,(zt.length||ni.length)&&Ny()}}let Qt=null,Vy=null;function ul(t){const e=Qt;return Qt=t,Vy=t&&t.type.__scopeId||null,e}function fr(t,e=Qt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&lp(-1);const i=ul(e);let o;try{o=t(...s)}finally{ul(i),r._d&&lp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ee(t,e){if(Qt===null)return t;const n=Xl(Qt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ye]=e[s];i&&(De(i)&&(i={mounted:i,updated:i}),i.deep&&Xn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function fs(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(ir(),wn(l,n,8,[t.el,c,t,e]),or())}}const cw=Symbol("_vte"),My=t=>t.__isTeleport,Rr=Symbol("_leaveCb"),ka=Symbol("_enterCb");function uw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qd(()=>{t.isMounted=!0}),Hy(()=>{t.isUnmounting=!0}),t}const un=[Function,Array],Ly={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:un,onEnter:un,onAfterEnter:un,onEnterCancelled:un,onBeforeLeave:un,onLeave:un,onAfterLeave:un,onLeaveCancelled:un,onBeforeAppear:un,onAppear:un,onAfterAppear:un,onAppearCancelled:un},$y=t=>{const e=t.subTree;return e.component?$y(e.component):e},dw={name:"BaseTransition",props:Ly,setup(t,{slots:e}){const n=oE(),r=uw();return()=>{const s=e.default&&By(e.default(),!0);if(!s||!s.length)return;const i=Fy(s),o=je(t),{mode:c}=o;if(r.isLeaving)return Gc(i);const l=Zf(i);if(!l)return Gc(i);let u=Su(l,o,r,n,m=>u=m);l.type!==Wt&&Ao(l,u);let h=n.subTree&&Zf(n.subTree);if(h&&h.type!==Wt&&!_s(l,h)&&$y(n).type!==Wt){let m=Su(h,o,r,n);if(Ao(h,m),c==="out-in"&&l.type!==Wt)return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete m.afterLeave,h=void 0},Gc(i);c==="in-out"&&l.type!==Wt?m.delayLeave=(p,v,R)=>{const I=Uy(r,h);I[String(h.key)]=h,p[Rr]=()=>{v(),p[Rr]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{R(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function Fy(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Wt){e=n;break}}return e}const hw=dw;function Uy(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Su(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:m,onBeforeLeave:p,onLeave:v,onAfterLeave:R,onLeaveCancelled:I,onBeforeAppear:E,onAppear:k,onAfterAppear:N,onAppearCancelled:$}=e,V=String(t.key),F=Uy(n,t),X=(T,C)=>{T&&wn(T,r,9,C)},P=(T,C)=>{const x=C[1];X(T,C),_e(T)?T.every(D=>D.length<=1)&&x():T.length<=1&&x()},w={mode:o,persisted:c,beforeEnter(T){let C=l;if(!n.isMounted)if(i)C=E||l;else return;T[Rr]&&T[Rr](!0);const x=F[V];x&&_s(t,x)&&x.el[Rr]&&x.el[Rr](),X(C,[T])},enter(T){let C=u,x=h,D=m;if(!n.isMounted)if(i)C=k||u,x=N||h,D=$||m;else return;let S=!1;const xe=T[ka]=de=>{S||(S=!0,de?X(D,[T]):X(x,[T]),w.delayedLeave&&w.delayedLeave(),T[ka]=void 0)};C?P(C,[T,xe]):xe()},leave(T,C){const x=String(t.key);if(T[ka]&&T[ka](!0),n.isUnmounting)return C();X(p,[T]);let D=!1;const S=T[Rr]=xe=>{D||(D=!0,C(),xe?X(I,[T]):X(R,[T]),T[Rr]=void 0,F[x]===t&&delete F[x])};F[x]=t,v?P(v,[T,S]):S()},clone(T){const C=Su(T,e,n,r,s);return s&&s(C),C}};return w}function Gc(t){if(Wl(t))return t=Gr(t),t.children=null,t}function Zf(t){if(!Wl(t))return My(t.type)&&t.children?Fy(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&De(n.default))return n.default()}}function Ao(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ao(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function By(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Xe?(o.patchFlag&128&&s++,r=r.concat(By(o.children,e,c))):(e||o.type!==Wt)&&r.push(c!=null?Gr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function jd(t,e){return De(t)?Et({name:t.name},e,{setup:t}):t}function jy(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ao(t,e,n,r,s=!1){if(_e(t)){t.forEach((R,I)=>ao(R,e&&(_e(e)?e[I]:e),n,r,s));return}if(lo(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ao(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Xl(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,h=c.refs===Ye?c.refs={}:c.refs,m=c.setupState,p=je(m),v=m===Ye?()=>!1:R=>ze(p,R);if(u!=null&&u!==l&&(ft(u)?(h[u]=null,v(u)&&(m[u]=null)):ht(u)&&(u.value=null)),De(l))Wo(l,c,12,[o,h]);else{const R=ft(l),I=ht(l);if(R||I){const E=()=>{if(t.f){const k=R?v(l)?m[l]:h[l]:l.value;s?_e(k)&&Dd(k,i):_e(k)?k.includes(i)||k.push(i):R?(h[l]=[i],v(l)&&(m[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else R?(h[l]=o,v(l)&&(m[l]=o)):I&&(l.value=o,t.k&&(h[t.k]=o))};o?(E.id=-1,en(E,n)):E()}}}Bl().requestIdleCallback;Bl().cancelIdleCallback;const lo=t=>!!t.type.__asyncLoader,Wl=t=>t.type.__isKeepAlive;function fw(t,e){qy(t,"a",e)}function pw(t,e){qy(t,"da",e)}function qy(t,e,n=Rt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Gl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Wl(s.parent.vnode)&&mw(r,e,n,s),s=s.parent}}function mw(t,e,n,r){const s=Gl(e,t,r,!0);zy(()=>{Dd(r[e],s)},n)}function Gl(t,e,n=Rt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ir();const c=Go(n),l=wn(e,n,t,o);return c(),or(),l});return r?s.unshift(i):s.push(i),i}}const pr=t=>(e,n=Rt)=>{(!Co||t==="sp")&&Gl(t,(...r)=>e(...r),n)},gw=pr("bm"),qd=pr("m"),yw=pr("bu"),vw=pr("u"),Hy=pr("bum"),zy=pr("um"),_w=pr("sp"),bw=pr("rtg"),ww=pr("rtc");function Ew(t,e=Rt){Gl("ec",t,e)}const Tw=Symbol.for("v-ndc");function Jt(t,e,n,r){let s;const i=n,o=_e(t);if(o||ft(t)){const c=o&&$r(t);let l=!1,u=!1;c&&(l=!fn(t),u=Wr(t),t=ql(t)),s=new Array(t.length);for(let h=0,m=t.length;h<m;h++)s[h]=e(l?u?al(Ct(t[h])):Ct(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Je(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const h=c[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}const Au=t=>t?hv(t)?Xl(t):Au(t.parent):null,co=Et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Au(t.parent),$root:t=>Au(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Gy(t),$forceUpdate:t=>t.f||(t.f=()=>{Bd(t.update)}),$nextTick:t=>t.n||(t.n=zl.bind(t.proxy)),$watch:t=>zw.bind(t)}),Kc=(t,e)=>t!==Ye&&!t.__isScriptSetup&&ze(t,e),Iw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Kc(r,e))return o[e]=1,r[e];if(s!==Ye&&ze(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ze(u,e))return o[e]=3,i[e];if(n!==Ye&&ze(n,e))return o[e]=4,n[e];Pu&&(o[e]=0)}}const h=co[e];let m,p;if(h)return e==="$attrs"&&Ft(t.attrs,"get",""),h(t);if((m=c.__cssModules)&&(m=m[e]))return m;if(n!==Ye&&ze(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,ze(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Kc(s,e)?(s[e]=n,!0):r!==Ye&&ze(r,e)?(r[e]=n,!0):ze(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Ye&&ze(t,o)||Kc(e,o)||(c=i[0])&&ze(c,o)||ze(r,o)||ze(co,o)||ze(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ze(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ep(t){return _e(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Pu=!0;function Sw(t){const e=Gy(t),n=t.proxy,r=t.ctx;Pu=!1,e.beforeCreate&&tp(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:h,beforeMount:m,mounted:p,beforeUpdate:v,updated:R,activated:I,deactivated:E,beforeDestroy:k,beforeUnmount:N,destroyed:$,unmounted:V,render:F,renderTracked:X,renderTriggered:P,errorCaptured:w,serverPrefetch:T,expose:C,inheritAttrs:x,components:D,directives:S,filters:xe}=e;if(u&&Aw(u,r,null),o)for(const Q in o){const Y=o[Q];De(Y)&&(r[Q]=Y.bind(n))}if(s){const Q=s.call(n,n);Je(Q)&&(t.data=Bn(Q))}if(Pu=!0,i)for(const Q in i){const Y=i[Q],he=De(Y)?Y.bind(n,n):De(Y.get)?Y.get.bind(n,n):xn,it=!De(Y)&&De(Y.set)?Y.set.bind(n):xn,pt=Te({get:he,set:it});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>pt.value,set:Ge=>pt.value=Ge})}if(c)for(const Q in c)Wy(c[Q],r,n,Q);if(l){const Q=De(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(Y=>{Qn(Y,Q[Y])})}h&&tp(h,t,"c");function ce(Q,Y){_e(Y)?Y.forEach(he=>Q(he.bind(n))):Y&&Q(Y.bind(n))}if(ce(gw,m),ce(qd,p),ce(yw,v),ce(vw,R),ce(fw,I),ce(pw,E),ce(Ew,w),ce(ww,X),ce(bw,P),ce(Hy,N),ce(zy,V),ce(_w,T),_e(C))if(C.length){const Q=t.exposed||(t.exposed={});C.forEach(Y=>{Object.defineProperty(Q,Y,{get:()=>n[Y],set:he=>n[Y]=he})})}else t.exposed||(t.exposed={});F&&t.render===xn&&(t.render=F),x!=null&&(t.inheritAttrs=x),D&&(t.components=D),S&&(t.directives=S),T&&jy(t)}function Aw(t,e,n=xn){_e(t)&&(t=Cu(t));for(const r in t){const s=t[r];let i;Je(s)?"default"in s?i=Ve(s.from||r,s.default,!0):i=Ve(s.from||r):i=Ve(s),ht(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function tp(t,e,n){wn(_e(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Wy(t,e,n,r){let s=r.includes(".")?ov(n,r):()=>n[r];if(ft(t)){const i=e[t];De(i)&&Qe(s,i)}else if(De(t))Qe(s,t.bind(n));else if(Je(t))if(_e(t))t.forEach(i=>Wy(i,e,n,r));else{const i=De(t.handler)?t.handler.bind(n):e[t.handler];De(i)&&Qe(s,i,t)}}function Gy(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>dl(l,u,o,!0)),dl(l,e,o)),Je(e)&&i.set(e,l),l}function dl(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&dl(t,i,n,!0),s&&s.forEach(o=>dl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Pw[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Pw={data:np,props:rp,emits:rp,methods:Yi,computed:Yi,beforeCreate:Ht,created:Ht,beforeMount:Ht,mounted:Ht,beforeUpdate:Ht,updated:Ht,beforeDestroy:Ht,beforeUnmount:Ht,destroyed:Ht,unmounted:Ht,activated:Ht,deactivated:Ht,errorCaptured:Ht,serverPrefetch:Ht,components:Yi,directives:Yi,watch:Rw,provide:np,inject:Cw};function np(t,e){return e?t?function(){return Et(De(t)?t.call(this,this):t,De(e)?e.call(this,this):e)}:e:t}function Cw(t,e){return Yi(Cu(t),Cu(e))}function Cu(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ht(t,e){return t?[...new Set([].concat(t,e))]:e}function Yi(t,e){return t?Et(Object.create(null),t,e):e}function rp(t,e){return t?_e(t)&&_e(e)?[...new Set([...t,...e])]:Et(Object.create(null),ep(t),ep(e??{})):e}function Rw(t,e){if(!t)return e;if(!e)return t;const n=Et(Object.create(null),t);for(const r in e)n[r]=Ht(t[r],e[r]);return n}function Ky(){return{app:null,config:{isNativeTag:y0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dw=0;function kw(t,e){return function(r,s=null){De(r)||(r=Et({},r)),s!=null&&!Je(s)&&(s=null);const i=Ky(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:Dw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:hE,get config(){return i.config},set config(h){},use(h,...m){return o.has(h)||(h&&De(h.install)?(o.add(h),h.install(u,...m)):De(h)&&(o.add(h),h(u,...m))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,m){return m?(i.components[h]=m,u):i.components[h]},directive(h,m){return m?(i.directives[h]=m,u):i.directives[h]},mount(h,m,p){if(!l){const v=u._ceVNode||Ce(r,s);return v.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(v,h,p),l=!0,u._container=h,h.__vue_app__=u,Xl(v.component)}},onUnmount(h){c.push(h)},unmount(){l&&(wn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,m){return i.provides[h]=m,u},runWithContext(h){const m=Is;Is=u;try{return h()}finally{Is=m}}};return u}}let Is=null;function Qn(t,e){if(Rt){let n=Rt.provides;const r=Rt.parent&&Rt.parent.provides;r===n&&(n=Rt.provides=Object.create(r)),n[t]=e}}function Ve(t,e,n=!1){const r=Rt||Qt;if(r||Is){let s=Is?Is._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&De(e)?e.call(r&&r.proxy):e}}function Ow(){return!!(Rt||Qt||Is)}const Yy={},Xy=()=>Object.create(Yy),Qy=t=>Object.getPrototypeOf(t)===Yy;function xw(t,e,n,r=!1){const s={},i=Xy();t.propsDefaults=Object.create(null),Jy(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Py(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Nw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=je(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let m=0;m<h.length;m++){let p=h[m];if(Kl(t.emitsOptions,p))continue;const v=e[p];if(l)if(ze(i,p))v!==i[p]&&(i[p]=v,u=!0);else{const R=Hr(p);s[R]=Ru(l,c,R,v,t,!1)}else v!==i[p]&&(i[p]=v,u=!0)}}}else{Jy(t,e,s,i)&&(u=!0);let h;for(const m in c)(!e||!ze(e,m)&&((h=Ns(m))===m||!ze(e,h)))&&(l?n&&(n[m]!==void 0||n[h]!==void 0)&&(s[m]=Ru(l,c,m,void 0,t,!0)):delete s[m]);if(i!==c)for(const m in i)(!e||!ze(e,m))&&(delete i[m],u=!0)}u&&Yn(t.attrs,"set","")}function Jy(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(so(l))continue;const u=e[l];let h;s&&ze(s,h=Hr(l))?!i||!i.includes(h)?n[h]=u:(c||(c={}))[h]=u:Kl(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=je(n),u=c||Ye;for(let h=0;h<i.length;h++){const m=i[h];n[m]=Ru(s,l,m,u[m],t,!ze(u,m))}}return o}function Ru(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=ze(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&De(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=Go(s);r=u[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Ns(n))&&(r=!0))}return r}const Vw=new WeakMap;function Zy(t,e,n=!1){const r=n?Vw:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!De(t)){const h=m=>{l=!0;const[p,v]=Zy(m,e,!0);Et(o,p),v&&c.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Je(t)&&r.set(t,ei),ei;if(_e(i))for(let h=0;h<i.length;h++){const m=Hr(i[h]);sp(m)&&(o[m]=Ye)}else if(i)for(const h in i){const m=Hr(h);if(sp(m)){const p=i[h],v=o[m]=_e(p)||De(p)?{type:p}:Et({},p),R=v.type;let I=!1,E=!0;if(_e(R))for(let k=0;k<R.length;++k){const N=R[k],$=De(N)&&N.name;if($==="Boolean"){I=!0;break}else $==="String"&&(E=!1)}else I=De(R)&&R.name==="Boolean";v[0]=I,v[1]=E,(I||ze(v,"default"))&&c.push(m)}}const u=[o,c];return Je(t)&&r.set(t,u),u}function sp(t){return t[0]!=="$"&&!so(t)}const Hd=t=>t[0]==="_"||t==="$stable",zd=t=>_e(t)?t.map(Dn):[Dn(t)],Mw=(t,e,n)=>{if(e._n)return e;const r=fr((...s)=>zd(e(...s)),n);return r._c=!1,r},ev=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Hd(s))continue;const i=t[s];if(De(i))e[s]=Mw(s,i,r);else if(i!=null){const o=zd(i);e[s]=()=>o}}},tv=(t,e)=>{const n=zd(e);t.slots.default=()=>n},nv=(t,e,n)=>{for(const r in e)(n||!Hd(r))&&(t[r]=e[r])},Lw=(t,e,n)=>{const r=t.slots=Xy();if(t.vnode.shapeFlag&32){const s=e.__;s&&wu(r,"__",s,!0);const i=e._;i?(nv(r,e,n),n&&wu(r,"_",i,!0)):ev(e,r)}else e&&tv(t,e)},$w=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ye;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:nv(s,e,n):(i=!e.$stable,ev(e,s)),o=e}else e&&(tv(t,e),o={default:1});if(i)for(const c in s)!Hd(c)&&o[c]==null&&delete s[c]},en=Jw;function Fw(t){return Uw(t)}function Uw(t,e){const n=Bl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:h,parentNode:m,nextSibling:p,setScopeId:v=xn,insertStaticContent:R}=t,I=(A,O,M,z=null,K=null,W=null,oe=void 0,ne=null,te=!!O.dynamicChildren)=>{if(A===O)return;A&&!_s(A,O)&&(z=H(A),Ge(A,K,W,!0),A=null),O.patchFlag===-2&&(te=!1,O.dynamicChildren=null);const{type:J,ref:ve,shapeFlag:se}=O;switch(J){case Yl:E(A,O,M,z);break;case Wt:k(A,O,M,z);break;case Ha:A==null&&N(O,M,z,oe);break;case Xe:D(A,O,M,z,K,W,oe,ne,te);break;default:se&1?F(A,O,M,z,K,W,oe,ne,te):se&6?S(A,O,M,z,K,W,oe,ne,te):(se&64||se&128)&&J.process(A,O,M,z,K,W,oe,ne,te,fe)}ve!=null&&K?ao(ve,A&&A.ref,W,O||A,!O):ve==null&&A&&A.ref!=null&&ao(A.ref,null,W,A,!0)},E=(A,O,M,z)=>{if(A==null)r(O.el=c(O.children),M,z);else{const K=O.el=A.el;O.children!==A.children&&u(K,O.children)}},k=(A,O,M,z)=>{A==null?r(O.el=l(O.children||""),M,z):O.el=A.el},N=(A,O,M,z)=>{[A.el,A.anchor]=R(A.children,O,M,z,A.el,A.anchor)},$=({el:A,anchor:O},M,z)=>{let K;for(;A&&A!==O;)K=p(A),r(A,M,z),A=K;r(O,M,z)},V=({el:A,anchor:O})=>{let M;for(;A&&A!==O;)M=p(A),s(A),A=M;s(O)},F=(A,O,M,z,K,W,oe,ne,te)=>{O.type==="svg"?oe="svg":O.type==="math"&&(oe="mathml"),A==null?X(O,M,z,K,W,oe,ne,te):T(A,O,K,W,oe,ne,te)},X=(A,O,M,z,K,W,oe,ne)=>{let te,J;const{props:ve,shapeFlag:se,transition:ge,dirs:Ae}=A;if(te=A.el=o(A.type,W,ve&&ve.is,ve),se&8?h(te,A.children):se&16&&w(A.children,te,null,z,K,Yc(A,W),oe,ne),Ae&&fs(A,null,z,"created"),P(te,A,A.scopeId,oe,z),ve){for(const ke in ve)ke!=="value"&&!so(ke)&&i(te,ke,null,ve[ke],W,z);"value"in ve&&i(te,"value",null,ve.value,W),(J=ve.onVnodeBeforeMount)&&An(J,z,A)}Ae&&fs(A,null,z,"beforeMount");const we=Bw(K,ge);we&&ge.beforeEnter(te),r(te,O,M),((J=ve&&ve.onVnodeMounted)||we||Ae)&&en(()=>{J&&An(J,z,A),we&&ge.enter(te),Ae&&fs(A,null,z,"mounted")},K)},P=(A,O,M,z,K)=>{if(M&&v(A,M),z)for(let W=0;W<z.length;W++)v(A,z[W]);if(K){let W=K.subTree;if(O===W||lv(W.type)&&(W.ssContent===O||W.ssFallback===O)){const oe=K.vnode;P(A,oe,oe.scopeId,oe.slotScopeIds,K.parent)}}},w=(A,O,M,z,K,W,oe,ne,te=0)=>{for(let J=te;J<A.length;J++){const ve=A[J]=ne?Dr(A[J]):Dn(A[J]);I(null,ve,O,M,z,K,W,oe,ne)}},T=(A,O,M,z,K,W,oe)=>{const ne=O.el=A.el;let{patchFlag:te,dynamicChildren:J,dirs:ve}=O;te|=A.patchFlag&16;const se=A.props||Ye,ge=O.props||Ye;let Ae;if(M&&ps(M,!1),(Ae=ge.onVnodeBeforeUpdate)&&An(Ae,M,O,A),ve&&fs(O,A,M,"beforeUpdate"),M&&ps(M,!0),(se.innerHTML&&ge.innerHTML==null||se.textContent&&ge.textContent==null)&&h(ne,""),J?C(A.dynamicChildren,J,ne,M,z,Yc(O,K),W):oe||Y(A,O,ne,null,M,z,Yc(O,K),W,!1),te>0){if(te&16)x(ne,se,ge,M,K);else if(te&2&&se.class!==ge.class&&i(ne,"class",null,ge.class,K),te&4&&i(ne,"style",se.style,ge.style,K),te&8){const we=O.dynamicProps;for(let ke=0;ke<we.length;ke++){const Ue=we[ke],Tt=se[Ue],It=ge[Ue];(It!==Tt||Ue==="value")&&i(ne,Ue,Tt,It,K,M)}}te&1&&A.children!==O.children&&h(ne,O.children)}else!oe&&J==null&&x(ne,se,ge,M,K);((Ae=ge.onVnodeUpdated)||ve)&&en(()=>{Ae&&An(Ae,M,O,A),ve&&fs(O,A,M,"updated")},z)},C=(A,O,M,z,K,W,oe)=>{for(let ne=0;ne<O.length;ne++){const te=A[ne],J=O[ne],ve=te.el&&(te.type===Xe||!_s(te,J)||te.shapeFlag&198)?m(te.el):M;I(te,J,ve,null,z,K,W,oe,!0)}},x=(A,O,M,z,K)=>{if(O!==M){if(O!==Ye)for(const W in O)!so(W)&&!(W in M)&&i(A,W,O[W],null,K,z);for(const W in M){if(so(W))continue;const oe=M[W],ne=O[W];oe!==ne&&W!=="value"&&i(A,W,ne,oe,K,z)}"value"in M&&i(A,"value",O.value,M.value,K)}},D=(A,O,M,z,K,W,oe,ne,te)=>{const J=O.el=A?A.el:c(""),ve=O.anchor=A?A.anchor:c("");let{patchFlag:se,dynamicChildren:ge,slotScopeIds:Ae}=O;Ae&&(ne=ne?ne.concat(Ae):Ae),A==null?(r(J,M,z),r(ve,M,z),w(O.children||[],M,ve,K,W,oe,ne,te)):se>0&&se&64&&ge&&A.dynamicChildren?(C(A.dynamicChildren,ge,M,K,W,oe,ne),(O.key!=null||K&&O===K.subTree)&&rv(A,O,!0)):Y(A,O,M,ve,K,W,oe,ne,te)},S=(A,O,M,z,K,W,oe,ne,te)=>{O.slotScopeIds=ne,A==null?O.shapeFlag&512?K.ctx.activate(O,M,z,oe,te):xe(O,M,z,K,W,oe,te):de(A,O,te)},xe=(A,O,M,z,K,W,oe)=>{const ne=A.component=iE(A,z,K);if(Wl(A)&&(ne.ctx.renderer=fe),aE(ne,!1,oe),ne.asyncDep){if(K&&K.registerDep(ne,ce,oe),!A.el){const te=ne.subTree=Ce(Wt);k(null,te,O,M)}}else ce(ne,A,O,M,K,W,oe)},de=(A,O,M)=>{const z=O.component=A.component;if(Xw(A,O,M))if(z.asyncDep&&!z.asyncResolved){Q(z,O,M);return}else z.next=O,z.update();else O.el=A.el,z.vnode=O},ce=(A,O,M,z,K,W,oe)=>{const ne=()=>{if(A.isMounted){let{next:se,bu:ge,u:Ae,parent:we,vnode:ke}=A;{const xt=sv(A);if(xt){se&&(se.el=ke.el,Q(A,se,oe)),xt.asyncDep.then(()=>{A.isUnmounted||ne()});return}}let Ue=se,Tt;ps(A,!1),se?(se.el=ke.el,Q(A,se,oe)):se=ke,ge&&qa(ge),(Tt=se.props&&se.props.onVnodeBeforeUpdate)&&An(Tt,we,se,ke),ps(A,!0);const It=op(A),ln=A.subTree;A.subTree=It,I(ln,It,m(ln.el),H(ln),A,K,W),se.el=It.el,Ue===null&&Qw(A,It.el),Ae&&en(Ae,K),(Tt=se.props&&se.props.onVnodeUpdated)&&en(()=>An(Tt,we,se,ke),K)}else{let se;const{el:ge,props:Ae}=O,{bm:we,m:ke,parent:Ue,root:Tt,type:It}=A,ln=lo(O);ps(A,!1),we&&qa(we),!ln&&(se=Ae&&Ae.onVnodeBeforeMount)&&An(se,Ue,O),ps(A,!0);{Tt.ce&&Tt.ce._def.shadowRoot!==!1&&Tt.ce._injectChildStyle(It);const xt=A.subTree=op(A);I(null,xt,M,z,A,K,W),O.el=xt.el}if(ke&&en(ke,K),!ln&&(se=Ae&&Ae.onVnodeMounted)){const xt=O;en(()=>An(se,Ue,xt),K)}(O.shapeFlag&256||Ue&&lo(Ue.vnode)&&Ue.vnode.shapeFlag&256)&&A.a&&en(A.a,K),A.isMounted=!0,O=M=z=null}};A.scope.on();const te=A.effect=new fy(ne);A.scope.off();const J=A.update=te.run.bind(te),ve=A.job=te.runIfDirty.bind(te);ve.i=A,ve.id=A.uid,te.scheduler=()=>Bd(ve),ps(A,!0),J()},Q=(A,O,M)=>{O.component=A;const z=A.vnode.props;A.vnode=O,A.next=null,Nw(A,O.props,z,M),$w(A,O.children,M),ir(),Jf(A),or()},Y=(A,O,M,z,K,W,oe,ne,te=!1)=>{const J=A&&A.children,ve=A?A.shapeFlag:0,se=O.children,{patchFlag:ge,shapeFlag:Ae}=O;if(ge>0){if(ge&128){it(J,se,M,z,K,W,oe,ne,te);return}else if(ge&256){he(J,se,M,z,K,W,oe,ne,te);return}}Ae&8?(ve&16&&Ot(J,K,W),se!==J&&h(M,se)):ve&16?Ae&16?it(J,se,M,z,K,W,oe,ne,te):Ot(J,K,W,!0):(ve&8&&h(M,""),Ae&16&&w(se,M,z,K,W,oe,ne,te))},he=(A,O,M,z,K,W,oe,ne,te)=>{A=A||ei,O=O||ei;const J=A.length,ve=O.length,se=Math.min(J,ve);let ge;for(ge=0;ge<se;ge++){const Ae=O[ge]=te?Dr(O[ge]):Dn(O[ge]);I(A[ge],Ae,M,null,K,W,oe,ne,te)}J>ve?Ot(A,K,W,!0,!1,se):w(O,M,z,K,W,oe,ne,te,se)},it=(A,O,M,z,K,W,oe,ne,te)=>{let J=0;const ve=O.length;let se=A.length-1,ge=ve-1;for(;J<=se&&J<=ge;){const Ae=A[J],we=O[J]=te?Dr(O[J]):Dn(O[J]);if(_s(Ae,we))I(Ae,we,M,null,K,W,oe,ne,te);else break;J++}for(;J<=se&&J<=ge;){const Ae=A[se],we=O[ge]=te?Dr(O[ge]):Dn(O[ge]);if(_s(Ae,we))I(Ae,we,M,null,K,W,oe,ne,te);else break;se--,ge--}if(J>se){if(J<=ge){const Ae=ge+1,we=Ae<ve?O[Ae].el:z;for(;J<=ge;)I(null,O[J]=te?Dr(O[J]):Dn(O[J]),M,we,K,W,oe,ne,te),J++}}else if(J>ge)for(;J<=se;)Ge(A[J],K,W,!0),J++;else{const Ae=J,we=J,ke=new Map;for(J=we;J<=ge;J++){const St=O[J]=te?Dr(O[J]):Dn(O[J]);St.key!=null&&ke.set(St.key,J)}let Ue,Tt=0;const It=ge-we+1;let ln=!1,xt=0;const _r=new Array(It);for(J=0;J<It;J++)_r[J]=0;for(J=Ae;J<=se;J++){const St=A[J];if(Tt>=It){Ge(St,K,W,!0);continue}let cn;if(St.key!=null)cn=ke.get(St.key);else for(Ue=we;Ue<=ge;Ue++)if(_r[Ue-we]===0&&_s(St,O[Ue])){cn=Ue;break}cn===void 0?Ge(St,K,W,!0):(_r[cn-we]=J+1,cn>=xt?xt=cn:ln=!0,I(St,O[cn],M,null,K,W,oe,ne,te),Tt++)}const Oi=ln?jw(_r):ei;for(Ue=Oi.length-1,J=It-1;J>=0;J--){const St=we+J,cn=O[St],ha=St+1<ve?O[St+1].el:z;_r[J]===0?I(null,cn,M,ha,K,W,oe,ne,te):ln&&(Ue<0||J!==Oi[Ue]?pt(cn,M,ha,2):Ue--)}}},pt=(A,O,M,z,K=null)=>{const{el:W,type:oe,transition:ne,children:te,shapeFlag:J}=A;if(J&6){pt(A.component.subTree,O,M,z);return}if(J&128){A.suspense.move(O,M,z);return}if(J&64){oe.move(A,O,M,fe);return}if(oe===Xe){r(W,O,M);for(let se=0;se<te.length;se++)pt(te[se],O,M,z);r(A.anchor,O,M);return}if(oe===Ha){$(A,O,M);return}if(z!==2&&J&1&&ne)if(z===0)ne.beforeEnter(W),r(W,O,M),en(()=>ne.enter(W),K);else{const{leave:se,delayLeave:ge,afterLeave:Ae}=ne,we=()=>{A.ctx.isUnmounted?s(W):r(W,O,M)},ke=()=>{se(W,()=>{we(),Ae&&Ae()})};ge?ge(W,we,ke):ke()}else r(W,O,M)},Ge=(A,O,M,z=!1,K=!1)=>{const{type:W,props:oe,ref:ne,children:te,dynamicChildren:J,shapeFlag:ve,patchFlag:se,dirs:ge,cacheIndex:Ae}=A;if(se===-2&&(K=!1),ne!=null&&(ir(),ao(ne,null,M,A,!0),or()),Ae!=null&&(O.renderCache[Ae]=void 0),ve&256){O.ctx.deactivate(A);return}const we=ve&1&&ge,ke=!lo(A);let Ue;if(ke&&(Ue=oe&&oe.onVnodeBeforeUnmount)&&An(Ue,O,A),ve&6)an(A.component,M,z);else{if(ve&128){A.suspense.unmount(M,z);return}we&&fs(A,null,O,"beforeUnmount"),ve&64?A.type.remove(A,O,M,fe,z):J&&!J.hasOnce&&(W!==Xe||se>0&&se&64)?Ot(J,O,M,!1,!0):(W===Xe&&se&384||!K&&ve&16)&&Ot(te,O,M),z&&Me(A)}(ke&&(Ue=oe&&oe.onVnodeUnmounted)||we)&&en(()=>{Ue&&An(Ue,O,A),we&&fs(A,null,O,"unmounted")},M)},Me=A=>{const{type:O,el:M,anchor:z,transition:K}=A;if(O===Xe){on(M,z);return}if(O===Ha){V(A);return}const W=()=>{s(M),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(A.shapeFlag&1&&K&&!K.persisted){const{leave:oe,delayLeave:ne}=K,te=()=>oe(M,W);ne?ne(A.el,W,te):te()}else W()},on=(A,O)=>{let M;for(;A!==O;)M=p(A),s(A),A=M;s(O)},an=(A,O,M)=>{const{bum:z,scope:K,job:W,subTree:oe,um:ne,m:te,a:J,parent:ve,slots:{__:se}}=A;ip(te),ip(J),z&&qa(z),ve&&_e(se)&&se.forEach(ge=>{ve.renderCache[ge]=void 0}),K.stop(),W&&(W.flags|=8,Ge(oe,A,O,M)),ne&&en(ne,O),en(()=>{A.isUnmounted=!0},O),O&&O.pendingBranch&&!O.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===O.pendingId&&(O.deps--,O.deps===0&&O.resolve())},Ot=(A,O,M,z=!1,K=!1,W=0)=>{for(let oe=W;oe<A.length;oe++)Ge(A[oe],O,M,z,K)},H=A=>{if(A.shapeFlag&6)return H(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const O=p(A.anchor||A.el),M=O&&O[cw];return M?p(M):O};let le=!1;const ie=(A,O,M)=>{A==null?O._vnode&&Ge(O._vnode,null,null,!0):I(O._vnode||null,A,O,null,null,null,M),O._vnode=A,le||(le=!0,Jf(),xy(),le=!1)},fe={p:I,um:Ge,m:pt,r:Me,mt:xe,mc:w,pc:Y,pbc:C,n:H,o:t};return{render:ie,hydrate:void 0,createApp:kw(ie)}}function Yc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ps({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Bw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function rv(t,e,n=!1){const r=t.children,s=e.children;if(_e(r)&&_e(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Dr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&rv(o,c)),c.type===Yl&&(c.el=o.el),c.type===Wt&&!c.el&&(c.el=o.el)}}function jw(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function sv(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:sv(e)}function ip(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const qw=Symbol.for("v-scx"),Hw=()=>Ve(qw);function Qe(t,e,n){return iv(t,e,n)}function iv(t,e,n=Ye){const{immediate:r,deep:s,flush:i,once:o}=n,c=Et({},n),l=e&&r||!e&&i!=="post";let u;if(Co){if(i==="sync"){const v=Hw();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!l){const v=()=>{};return v.stop=xn,v.resume=xn,v.pause=xn,v}}const h=Rt;c.call=(v,R,I)=>wn(v,h,R,I);let m=!1;i==="post"?c.scheduler=v=>{en(v,h&&h.suspense)}:i!=="sync"&&(m=!0,c.scheduler=(v,R)=>{R?v():Bd(v)}),c.augmentJob=v=>{e&&(v.flags|=4),m&&(v.flags|=2,h&&(v.id=h.uid,v.i=h))};const p=iw(t,e,c);return Co&&(u?u.push(p):l&&p()),p}function zw(t,e,n){const r=this.proxy,s=ft(t)?t.includes(".")?ov(r,t):()=>r[t]:t.bind(r,r);let i;De(e)?i=e:(i=e.handler,n=e);const o=Go(this),c=iv(s,i.bind(r),n);return o(),c}function ov(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ww=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Hr(e)}Modifiers`]||t[`${Ns(e)}Modifiers`];function Gw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ye;let s=n;const i=e.startsWith("update:"),o=i&&Ww(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>ft(h)?h.trim():h)),o.number&&(s=n.map(il)));let c,l=r[c=jc(e)]||r[c=jc(Hr(e))];!l&&i&&(l=r[c=jc(Ns(e))]),l&&wn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,wn(u,t,6,s)}}function av(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!De(t)){const l=u=>{const h=av(u,e,!0);h&&(c=!0,Et(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Je(t)&&r.set(t,null),null):(_e(i)?i.forEach(l=>o[l]=null):Et(o,i),Je(t)&&r.set(t,o),o)}function Kl(t,e){return!t||!Fl(e)?!1:(e=e.slice(2).replace(/Once$/,""),ze(t,e[0].toLowerCase()+e.slice(1))||ze(t,Ns(e))||ze(t,e))}function op(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:h,props:m,data:p,setupState:v,ctx:R,inheritAttrs:I}=t,E=ul(t);let k,N;try{if(n.shapeFlag&4){const V=s||r,F=V;k=Dn(u.call(F,V,h,m,v,p,R)),N=c}else{const V=e;k=Dn(V.length>1?V(m,{attrs:c,slots:o,emit:l}):V(m,null)),N=e.props?c:Kw(c)}}catch(V){uo.length=0,Hl(V,t,1),k=Ce(Wt)}let $=k;if(N&&I!==!1){const V=Object.keys(N),{shapeFlag:F}=$;V.length&&F&7&&(i&&V.some(Rd)&&(N=Yw(N,i)),$=Gr($,N,!1,!0))}return n.dirs&&($=Gr($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&Ao($,n.transition),k=$,ul(E),k}const Kw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fl(n))&&((e||(e={}))[n]=t[n]);return e},Yw=(t,e)=>{const n={};for(const r in t)(!Rd(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Xw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ap(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let m=0;m<h.length;m++){const p=h[m];if(o[p]!==r[p]&&!Kl(u,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?ap(r,o,u):!0:!!o;return!1}function ap(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Kl(n,i))return!0}return!1}function Qw({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const lv=t=>t.__isSuspense;function Jw(t,e){e&&e.pendingBranch?_e(t)?e.effects.push(...t):e.effects.push(t):lw(t)}const Xe=Symbol.for("v-fgt"),Yl=Symbol.for("v-txt"),Wt=Symbol.for("v-cmt"),Ha=Symbol.for("v-stc"),uo=[];let nn=null;function U(t=!1){uo.push(nn=t?null:[])}function Zw(){uo.pop(),nn=uo[uo.length-1]||null}let Po=1;function lp(t,e=!1){Po+=t,t<0&&nn&&e&&(nn.hasOnce=!0)}function cv(t){return t.dynamicChildren=Po>0?nn||ei:null,Zw(),Po>0&&nn&&nn.push(t),t}function j(t,e,n,r,s,i){return cv(d(t,e,n,r,s,i,!0))}function In(t,e,n,r,s){return cv(Ce(t,e,n,r,s,!0))}function hl(t){return t?t.__v_isVNode===!0:!1}function _s(t,e){return t.type===e.type&&t.key===e.key}const uv=({key:t})=>t??null,za=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ft(t)||ht(t)||De(t)?{i:Qt,r:t,k:e,f:!!n}:t:null);function d(t,e=null,n=null,r=0,s=null,i=t===Xe?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&uv(e),ref:e&&za(e),scopeId:Vy,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Qt};return c?(Wd(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ft(n)?8:16),Po>0&&!o&&nn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&nn.push(l),l}const Ce=eE;function eE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Tw)&&(t=Wt),hl(t)){const c=Gr(t,e,!0);return n&&Wd(c,n),Po>0&&!i&&nn&&(c.shapeFlag&6?nn[nn.indexOf(t)]=c:nn.push(c)),c.patchFlag=-2,c}if(dE(t)&&(t=t.__vccOpts),e){e=tE(e);let{class:c,style:l}=e;c&&!ft(c)&&(e.class=zr(c)),Je(l)&&(Fd(l)&&!_e(l)&&(l=Et({},l)),e.style=jl(l))}const o=ft(t)?1:lv(t)?128:My(t)?64:Je(t)?4:De(t)?2:0;return d(t,e,n,r,s,o,i,!0)}function tE(t){return t?Fd(t)||Qy(t)?Et({},t):t:null}function Gr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?nE(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&uv(u),ref:e&&e.ref?n&&i?_e(i)?i.concat(za(e)):[i,za(e)]:za(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gr(t.ssContent),ssFallback:t.ssFallback&&Gr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Ao(h,l.clone(h)),h}function at(t=" ",e=0){return Ce(Yl,null,t,e)}function dv(t,e){const n=Ce(Ha,null,t);return n.staticCount=e,n}function pe(t="",e=!1){return e?(U(),In(Wt,null,t)):Ce(Wt,null,t)}function Dn(t){return t==null||typeof t=="boolean"?Ce(Wt):_e(t)?Ce(Xe,null,t.slice()):hl(t)?Dr(t):Ce(Yl,null,String(t))}function Dr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gr(t)}function Wd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(_e(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Wd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Qy(e)?e._ctx=Qt:s===3&&Qt&&(Qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else De(e)?(e={default:e,_ctx:Qt},n=32):(e=String(e),r&64?(n=16,e=[at(e)]):n=8);t.children=e,t.shapeFlag|=n}function nE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=zr([e.class,r.class]));else if(s==="style")e.style=jl([e.style,r.style]);else if(Fl(s)){const i=e[s],o=r[s];o&&i!==o&&!(_e(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function An(t,e,n,r=null){wn(t,e,7,[n,r])}const rE=Ky();let sE=0;function iE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||rE,i={uid:sE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new uy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zy(r,s),emitsOptions:av(r,s),emit:null,emitted:null,propsDefaults:Ye,inheritAttrs:r.inheritAttrs,ctx:Ye,data:Ye,props:Ye,attrs:Ye,slots:Ye,refs:Ye,setupState:Ye,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Gw.bind(null,i),t.ce&&t.ce(i),i}let Rt=null;const oE=()=>Rt||Qt;let fl,Du;{const t=Bl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};fl=e("__VUE_INSTANCE_SETTERS__",n=>Rt=n),Du=e("__VUE_SSR_SETTERS__",n=>Co=n)}const Go=t=>{const e=Rt;return fl(t),t.scope.on(),()=>{t.scope.off(),fl(e)}},cp=()=>{Rt&&Rt.scope.off(),fl(null)};function hv(t){return t.vnode.shapeFlag&4}let Co=!1;function aE(t,e=!1,n=!1){e&&Du(e);const{props:r,children:s}=t.vnode,i=hv(t);xw(t,r,i,e),Lw(t,s,n||e);const o=i?lE(t,e):void 0;return e&&Du(!1),o}function lE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Iw);const{setup:r}=n;if(r){ir();const s=t.setupContext=r.length>1?uE(t):null,i=Go(t),o=Wo(r,t,0,[t.props,s]),c=ry(o);if(or(),i(),(c||t.sp)&&!lo(t)&&jy(t),c){if(o.then(cp,cp),e)return o.then(l=>{up(t,l)}).catch(l=>{Hl(l,t,0)});t.asyncDep=o}else up(t,o)}else fv(t)}function up(t,e,n){De(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Je(e)&&(t.setupState=Dy(e)),fv(t)}function fv(t,e,n){const r=t.type;t.render||(t.render=r.render||xn);{const s=Go(t);ir();try{Sw(t)}finally{or(),s()}}}const cE={get(t,e){return Ft(t,"get",""),t[e]}};function uE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,cE),slots:t.slots,emit:t.emit,expose:e}}function Xl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Dy(Ud(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in co)return co[n](t)},has(e,n){return n in e||n in co}})):t.proxy}function dE(t){return De(t)&&"__vccOpts"in t}const Te=(t,e)=>rw(t,e,Co);function ci(t,e,n){const r=arguments.length;return r===2?Je(e)&&!_e(e)?hl(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&hl(n)&&(n=[n]),Ce(t,e,n))}const hE="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ku;const dp=typeof window<"u"&&window.trustedTypes;if(dp)try{ku=dp.createPolicy("vue",{createHTML:t=>t})}catch{}const pv=ku?t=>ku.createHTML(t):t=>t,fE="http://www.w3.org/2000/svg",pE="http://www.w3.org/1998/Math/MathML",Kn=typeof document<"u"?document:null,hp=Kn&&Kn.createElement("template"),mE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Kn.createElementNS(fE,t):e==="mathml"?Kn.createElementNS(pE,t):n?Kn.createElement(t,{is:n}):Kn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Kn.createTextNode(t),createComment:t=>Kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{hp.innerHTML=pv(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=hp.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Tr="transition",Wi="animation",Ro=Symbol("_vtc"),mv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},gE=Et({},Ly,mv),yE=t=>(t.displayName="Transition",t.props=gE,t),ss=yE((t,{slots:e})=>ci(hw,vE(t),e)),ms=(t,e=[])=>{_e(t)?t.forEach(n=>n(...e)):t&&t(...e)},fp=t=>t?_e(t)?t.some(e=>e.length>1):t.length>1:!1;function vE(t){const e={};for(const D in t)D in mv||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=c,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,R=_E(s),I=R&&R[0],E=R&&R[1],{onBeforeEnter:k,onEnter:N,onEnterCancelled:$,onLeave:V,onLeaveCancelled:F,onBeforeAppear:X=k,onAppear:P=N,onAppearCancelled:w=$}=e,T=(D,S,xe,de)=>{D._enterCancelled=de,gs(D,S?h:c),gs(D,S?u:o),xe&&xe()},C=(D,S)=>{D._isLeaving=!1,gs(D,m),gs(D,v),gs(D,p),S&&S()},x=D=>(S,xe)=>{const de=D?P:N,ce=()=>T(S,D,xe);ms(de,[S,ce]),pp(()=>{gs(S,D?l:i),Wn(S,D?h:c),fp(de)||mp(S,r,I,ce)})};return Et(e,{onBeforeEnter(D){ms(k,[D]),Wn(D,i),Wn(D,o)},onBeforeAppear(D){ms(X,[D]),Wn(D,l),Wn(D,u)},onEnter:x(!1),onAppear:x(!0),onLeave(D,S){D._isLeaving=!0;const xe=()=>C(D,S);Wn(D,m),D._enterCancelled?(Wn(D,p),vp()):(vp(),Wn(D,p)),pp(()=>{D._isLeaving&&(gs(D,m),Wn(D,v),fp(V)||mp(D,r,E,xe))}),ms(V,[D,xe])},onEnterCancelled(D){T(D,!1,void 0,!0),ms($,[D])},onAppearCancelled(D){T(D,!0,void 0,!0),ms(w,[D])},onLeaveCancelled(D){C(D),ms(F,[D])}})}function _E(t){if(t==null)return null;if(Je(t))return[Xc(t.enter),Xc(t.leave)];{const e=Xc(t);return[e,e]}}function Xc(t){return E0(t)}function Wn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ro]||(t[Ro]=new Set)).add(e)}function gs(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ro];n&&(n.delete(e),n.size||(t[Ro]=void 0))}function pp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let bE=0;function mp(t,e,n,r){const s=t._endId=++bE,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=wE(t,e);if(!o)return r();const u=o+"end";let h=0;const m=()=>{t.removeEventListener(u,p),i()},p=v=>{v.target===t&&++h>=l&&m()};setTimeout(()=>{h<l&&m()},c+1),t.addEventListener(u,p)}function wE(t,e){const n=window.getComputedStyle(t),r=R=>(n[R]||"").split(", "),s=r(`${Tr}Delay`),i=r(`${Tr}Duration`),o=gp(s,i),c=r(`${Wi}Delay`),l=r(`${Wi}Duration`),u=gp(c,l);let h=null,m=0,p=0;e===Tr?o>0&&(h=Tr,m=o,p=i.length):e===Wi?u>0&&(h=Wi,m=u,p=l.length):(m=Math.max(o,u),h=m>0?o>u?Tr:Wi:null,p=h?h===Tr?i.length:l.length:0);const v=h===Tr&&/\b(transform|all)(,|$)/.test(r(`${Tr}Property`).toString());return{type:h,timeout:m,propCount:p,hasTransform:v}}function gp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>yp(n)+yp(t[r])))}function yp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function vp(){return document.body.offsetHeight}function EE(t,e,n){const r=t[Ro];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const _p=Symbol("_vod"),TE=Symbol("_vsh"),IE=Symbol(""),SE=/(^|;)\s*display\s*:/;function AE(t,e,n){const r=t.style,s=ft(n);let i=!1;if(n&&!s){if(e)if(ft(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Wa(r,c,"")}else for(const o in e)n[o]==null&&Wa(r,o,"");for(const o in n)o==="display"&&(i=!0),Wa(r,o,n[o])}else if(s){if(e!==n){const o=r[IE];o&&(n+=";"+o),r.cssText=n,i=SE.test(n)}}else e&&t.removeAttribute("style");_p in t&&(t[_p]=i?r.display:"",t[TE]&&(r.display="none"))}const bp=/\s*!important$/;function Wa(t,e,n){if(_e(n))n.forEach(r=>Wa(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=PE(t,e);bp.test(n)?t.setProperty(Ns(r),n.replace(bp,""),"important"):t[r]=n}}const wp=["Webkit","Moz","ms"],Qc={};function PE(t,e){const n=Qc[e];if(n)return n;let r=Hr(e);if(r!=="filter"&&r in t)return Qc[e]=r;r=oy(r);for(let s=0;s<wp.length;s++){const i=wp[s]+r;if(i in t)return Qc[e]=i}return e}const Ep="http://www.w3.org/1999/xlink";function Tp(t,e,n,r,s,i=C0(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ep,e.slice(6,e.length)):t.setAttributeNS(Ep,e,n):n==null||i&&!ay(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Fn(n)?String(n):n)}function Ip(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?pv(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ay(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Or(t,e,n,r){t.addEventListener(e,n,r)}function CE(t,e,n,r){t.removeEventListener(e,n,r)}const Sp=Symbol("_vei");function RE(t,e,n,r,s=null){const i=t[Sp]||(t[Sp]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=DE(e);if(r){const u=i[e]=xE(r,s);Or(t,c,u,l)}else o&&(CE(t,c,o,l),i[e]=void 0)}}const Ap=/(?:Once|Passive|Capture)$/;function DE(t){let e;if(Ap.test(t)){e={};let r;for(;r=t.match(Ap);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ns(t.slice(2)),e]}let Jc=0;const kE=Promise.resolve(),OE=()=>Jc||(kE.then(()=>Jc=0),Jc=Date.now());function xE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;wn(NE(r,n.value),e,5,[r])};return n.value=t,n.attached=OE(),n}function NE(t,e){if(_e(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Pp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,VE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?EE(t,r,o):e==="style"?AE(t,n,r):Fl(e)?Rd(e)||RE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ME(t,e,r,o))?(Ip(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Tp(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ft(r))?Ip(t,Hr(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Tp(t,e,r,o))};function ME(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Pp(e)&&De(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Pp(e)&&ft(n)?!1:e in t}const ui=t=>{const e=t.props["onUpdate:modelValue"]||!1;return _e(e)?n=>qa(e,n):e};function LE(t){t.target.composing=!0}function Cp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nr=Symbol("_assign"),me={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[nr]=ui(s);const i=r||s.props&&s.props.type==="number";Or(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=il(c)),t[nr](c)}),n&&Or(t,"change",()=>{t.value=t.value.trim()}),e||(Or(t,"compositionstart",LE),Or(t,"compositionend",Cp),Or(t,"change",Cp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[nr]=ui(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?il(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Ko={deep:!0,created(t,e,n){t[nr]=ui(n),Or(t,"change",()=>{const r=t._modelValue,s=Do(t),i=t.checked,o=t[nr];if(_e(r)){const c=Od(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(wi(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(gv(t,i))})},mounted:Rp,beforeUpdate(t,e,n){t[nr]=ui(n),Rp(t,e,n)}};function Rp(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(_e(e))s=Od(e,r.props.value)>-1;else if(wi(e))s=e.has(r.props.value);else{if(e===n)return;s=zo(e,gv(t,!0))}t.checked!==s&&(t.checked=s)}const lt={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=wi(e);Or(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?il(Do(o)):Do(o));t[nr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,zl(()=>{t._assigning=!1})}),t[nr]=ui(r)},mounted(t,{value:e}){Dp(t,e)},beforeUpdate(t,e,n){t[nr]=ui(n)},updated(t,{value:e}){t._assigning||Dp(t,e)}};function Dp(t,e){const n=t.multiple,r=_e(e);if(!(n&&!r&&!wi(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Do(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=Od(e,c)>-1}else o.selected=e.has(c);else if(zo(Do(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Do(t){return"_value"in t?t._value:t.value}function gv(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const $E=["ctrl","shift","alt","meta"],FE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>$E.some(n=>t[`${n}Key`]&&!e.includes(n))},tt=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=FE[e[o]];if(c&&c(s,e))return}return t(s,...i)})},UE=Et({patchProp:VE},mE);let kp;function BE(){return kp||(kp=Fw(UE))}const jE=(...t)=>{const e=BE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=HE(r);if(!s)return;const i=e._component;!De(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,qE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function qE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function HE(t){return ft(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Gs=typeof document<"u";function yv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&yv(t.default)}const He=Object.assign;function Zc(t,e){const n={};for(const r in e){const s=e[r];n[r]=En(s)?s.map(t):t(s)}return n}const ho=()=>{},En=Array.isArray,vv=/#/g,WE=/&/g,GE=/\//g,KE=/=/g,YE=/\?/g,_v=/\+/g,XE=/%5B/g,QE=/%5D/g,bv=/%5E/g,JE=/%60/g,wv=/%7B/g,ZE=/%7C/g,Ev=/%7D/g,eT=/%20/g;function Gd(t){return encodeURI(""+t).replace(ZE,"|").replace(XE,"[").replace(QE,"]")}function tT(t){return Gd(t).replace(wv,"{").replace(Ev,"}").replace(bv,"^")}function Ou(t){return Gd(t).replace(_v,"%2B").replace(eT,"+").replace(vv,"%23").replace(WE,"%26").replace(JE,"`").replace(wv,"{").replace(Ev,"}").replace(bv,"^")}function nT(t){return Ou(t).replace(KE,"%3D")}function rT(t){return Gd(t).replace(vv,"%23").replace(YE,"%3F")}function sT(t){return t==null?"":rT(t).replace(GE,"%2F")}function ko(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const iT=/\/$/,oT=t=>t.replace(iT,"");function eu(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=uT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ko(o)}}function aT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Op(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function lT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&di(e.matched[r],n.matched[s])&&Tv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function di(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Tv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!cT(t[n],e[n]))return!1;return!0}function cT(t,e){return En(t)?xp(t,e):En(e)?xp(e,t):t===e}function xp(t,e){return En(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function uT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Ir={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Oo;(function(t){t.pop="pop",t.push="push"})(Oo||(Oo={}));var fo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(fo||(fo={}));function dT(t){if(!t)if(Gs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),oT(t)}const hT=/^[^#]+#/;function fT(t,e){return t.replace(hT,"#")+e}function pT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ql=()=>({left:window.scrollX,top:window.scrollY});function mT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=pT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Np(t,e){return(history.state?history.state.position-e:-1)+t}const xu=new Map;function gT(t,e){xu.set(t,e)}function yT(t){const e=xu.get(t);return xu.delete(t),e}let vT=()=>location.protocol+"//"+location.host;function Iv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Op(l,"")}return Op(n,t)+r+s}function _T(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const v=Iv(t,location),R=n.value,I=e.value;let E=0;if(p){if(n.value=v,e.value=p,o&&o===R){o=null;return}E=I?p.position-I.position:0}else r(v);s.forEach(k=>{k(n.value,R,{delta:E,type:Oo.pop,direction:E?E>0?fo.forward:fo.back:fo.unknown})})};function l(){o=n.value}function u(p){s.push(p);const v=()=>{const R=s.indexOf(p);R>-1&&s.splice(R,1)};return i.push(v),v}function h(){const{history:p}=window;p.state&&p.replaceState(He({},p.state,{scroll:Ql()}),"")}function m(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:m}}function Vp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ql():null}}function bT(t){const{history:e,location:n}=window,r={value:Iv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const m=t.indexOf("#"),p=m>-1?(n.host&&document.querySelector("base")?t:t.slice(m))+l:vT()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(v){console.error(v),n[h?"replace":"assign"](p)}}function o(l,u){const h=He({},e.state,Vp(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function c(l,u){const h=He({},s.value,e.state,{forward:l,scroll:Ql()});i(h.current,h,!0);const m=He({},Vp(r.value,l,null),{position:h.position+1},u);i(l,m,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function wT(t){t=dT(t);const e=bT(t),n=_T(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=He({location:"",base:t,go:r,createHref:fT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ET(t){return typeof t=="string"||t&&typeof t=="object"}function Sv(t){return typeof t=="string"||typeof t=="symbol"}const Av=Symbol("");var Mp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Mp||(Mp={}));function hi(t,e){return He(new Error,{type:t,[Av]:!0},e)}function Gn(t,e){return t instanceof Error&&Av in t&&(e==null||!!(t.type&e))}const Lp="[^/]+?",TT={sensitive:!1,strict:!1,start:!0,end:!0},IT=/[.+*?^${}()[\]/\\]/g;function ST(t,e){const n=He({},TT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let m=0;m<u.length;m++){const p=u[m];let v=40+(n.sensitive?.25:0);if(p.type===0)m||(s+="/"),s+=p.value.replace(IT,"\\$&"),v+=40;else if(p.type===1){const{value:R,repeatable:I,optional:E,regexp:k}=p;i.push({name:R,repeatable:I,optional:E});const N=k||Lp;if(N!==Lp){v+=10;try{new RegExp(`(${N})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${R}" (${N}): `+V.message)}}let $=I?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;m||($=E&&u.length<2?`(?:/${$})`:"/"+$),E&&($+="?"),s+=$,v+=20,E&&(v+=-8),I&&(v+=-20),N===".*"&&(v+=-50)}h.push(v)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const h=u.match(o),m={};if(!h)return null;for(let p=1;p<h.length;p++){const v=h[p]||"",R=i[p-1];m[R.name]=v&&R.repeatable?v.split("/"):v}return m}function l(u){let h="",m=!1;for(const p of t){(!m||!h.endsWith("/"))&&(h+="/"),m=!1;for(const v of p)if(v.type===0)h+=v.value;else if(v.type===1){const{value:R,repeatable:I,optional:E}=v,k=R in u?u[R]:"";if(En(k)&&!I)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const N=En(k)?k.join("/"):k;if(!N)if(E)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):m=!0);else throw new Error(`Missing required param "${R}"`);h+=N}}return h||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function AT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Pv(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=AT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if($p(r))return 1;if($p(s))return-1}return s.length-r.length}function $p(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const PT={type:0,value:""},CT=/[a-zA-Z0-9_]/;function RT(t){if(!t)return[[]];if(t==="/")return[[PT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",h="";function m(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&m(),o()):l===":"?(m(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:CT.test(l)?p():(m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),m(),o(),s}function DT(t,e,n){const r=ST(RT(t.path),n),s=He(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function kT(t,e){const n=[],r=new Map;e=jp({strict:!1,end:!0,sensitive:!1},e);function s(m){return r.get(m)}function i(m,p,v){const R=!v,I=Up(m);I.aliasOf=v&&v.record;const E=jp(e,m),k=[I];if("alias"in m){const V=typeof m.alias=="string"?[m.alias]:m.alias;for(const F of V)k.push(Up(He({},I,{components:v?v.record.components:I.components,path:F,aliasOf:v?v.record:I})))}let N,$;for(const V of k){const{path:F}=V;if(p&&F[0]!=="/"){const X=p.record.path,P=X[X.length-1]==="/"?"":"/";V.path=p.record.path+(F&&P+F)}if(N=DT(V,p,E),v?v.alias.push(N):($=$||N,$!==N&&$.alias.push(N),R&&m.name&&!Bp(N)&&o(m.name)),Cv(N)&&l(N),I.children){const X=I.children;for(let P=0;P<X.length;P++)i(X[P],N,v&&v.children[P])}v=v||N}return $?()=>{o($)}:ho}function o(m){if(Sv(m)){const p=r.get(m);p&&(r.delete(m),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(m);p>-1&&(n.splice(p,1),m.record.name&&r.delete(m.record.name),m.children.forEach(o),m.alias.forEach(o))}}function c(){return n}function l(m){const p=NT(m,n);n.splice(p,0,m),m.record.name&&!Bp(m)&&r.set(m.record.name,m)}function u(m,p){let v,R={},I,E;if("name"in m&&m.name){if(v=r.get(m.name),!v)throw hi(1,{location:m});E=v.record.name,R=He(Fp(p.params,v.keys.filter($=>!$.optional).concat(v.parent?v.parent.keys.filter($=>$.optional):[]).map($=>$.name)),m.params&&Fp(m.params,v.keys.map($=>$.name))),I=v.stringify(R)}else if(m.path!=null)I=m.path,v=n.find($=>$.re.test(I)),v&&(R=v.parse(I),E=v.record.name);else{if(v=p.name?r.get(p.name):n.find($=>$.re.test(p.path)),!v)throw hi(1,{location:m,currentLocation:p});E=v.record.name,R=He({},p.params,m.params),I=v.stringify(R)}const k=[];let N=v;for(;N;)k.unshift(N.record),N=N.parent;return{name:E,path:I,params:R,matched:k,meta:xT(k)}}t.forEach(m=>i(m));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:c,getRecordMatcher:s}}function Fp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Up(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:OT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function OT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Bp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function xT(t){return t.reduce((e,n)=>He(e,n.meta),{})}function jp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function NT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Pv(t,e[i])<0?r=i:n=i+1}const s=VT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function VT(t){let e=t;for(;e=e.parent;)if(Cv(e)&&Pv(t,e)===0)return e}function Cv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function MT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(_v," "),o=i.indexOf("="),c=ko(o<0?i:i.slice(0,o)),l=o<0?null:ko(i.slice(o+1));if(c in e){let u=e[c];En(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function qp(t){let e="";for(let n in t){const r=t[n];if(n=nT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(En(r)?r.map(i=>i&&Ou(i)):[r&&Ou(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function LT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=En(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const $T=Symbol(""),Hp=Symbol(""),Jl=Symbol(""),Kd=Symbol(""),Nu=Symbol("");function Gi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function kr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=p=>{p===!1?l(hi(4,{from:n,to:e})):p instanceof Error?l(p):ET(p)?l(hi(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),c())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let m=Promise.resolve(h);t.length<3&&(m=m.then(u)),m.catch(p=>l(p))})}function tu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(yv(l)){const h=(l.__vccOpts||l)[e];h&&i.push(kr(h,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const m=zE(h)?h.default:h;o.mods[c]=h,o.components[c]=m;const v=(m.__vccOpts||m)[e];return v&&kr(v,n,r,o,c,s)()}))}}return i}function zp(t){const e=Ve(Jl),n=Ve(Kd),r=Te(()=>{const l=y(t.to);return e.resolve(l)}),s=Te(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],m=n.matched;if(!h||!m.length)return-1;const p=m.findIndex(di.bind(null,h));if(p>-1)return p;const v=Wp(l[u-2]);return u>1&&Wp(h)===v&&m[m.length-1].path!==v?m.findIndex(di.bind(null,l[u-2])):p}),i=Te(()=>s.value>-1&&qT(n.params,r.value.params)),o=Te(()=>s.value>-1&&s.value===n.matched.length-1&&Tv(n.params,r.value.params));function c(l={}){if(jT(l)){const u=e[y(t.replace)?"replace":"push"](y(t.to)).catch(ho);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Te(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function FT(t){return t.length===1?t[0]:t}const UT=jd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:zp,setup(t,{slots:e}){const n=Bn(zp(t)),{options:r}=Ve(Jl),s=Te(()=>({[Gp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&FT(e.default(n));return t.custom?i:ci("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),BT=UT;function jT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!En(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Wp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gp=(t,e,n)=>t??e??n,HT=jd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ve(Nu),s=Te(()=>t.route||r.value),i=Ve(Hp,0),o=Te(()=>{let u=y(i);const{matched:h}=s.value;let m;for(;(m=h[u])&&!m.components;)u++;return u}),c=Te(()=>s.value.matched[o.value]);Qn(Hp,Te(()=>o.value+1)),Qn($T,c),Qn(Nu,s);const l=Ee();return Qe(()=>[l.value,c.value,t.name],([u,h,m],[p,v,R])=>{h&&(h.instances[m]=u,v&&v!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=v.leaveGuards),h.updateGuards.size||(h.updateGuards=v.updateGuards))),u&&h&&(!v||!di(h,v)||!p)&&(h.enterCallbacks[m]||[]).forEach(I=>I(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,m=c.value,p=m&&m.components[h];if(!p)return Kp(n.default,{Component:p,route:u});const v=m.props[h],R=v?v===!0?u.params:typeof v=="function"?v(u):v:null,E=ci(p,He({},R,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(m.instances[h]=null)},ref:l}));return Kp(n.default,{Component:E,route:u})||E}}});function Kp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Rv=HT;function zT(t){const e=kT(t.routes,t),n=t.parseQuery||MT,r=t.stringifyQuery||qp,s=t.history,i=Gi(),o=Gi(),c=Gi(),l=X0(Ir);let u=Ir;Gs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Zc.bind(null,H=>""+H),m=Zc.bind(null,sT),p=Zc.bind(null,ko);function v(H,le){let ie,fe;return Sv(H)?(ie=e.getRecordMatcher(H),fe=le):fe=H,e.addRoute(fe,ie)}function R(H){const le=e.getRecordMatcher(H);le&&e.removeRoute(le)}function I(){return e.getRoutes().map(H=>H.record)}function E(H){return!!e.getRecordMatcher(H)}function k(H,le){if(le=He({},le||l.value),typeof H=="string"){const M=eu(n,H,le.path),z=e.resolve({path:M.path},le),K=s.createHref(M.fullPath);return He(M,z,{params:p(z.params),hash:ko(M.hash),redirectedFrom:void 0,href:K})}let ie;if(H.path!=null)ie=He({},H,{path:eu(n,H.path,le.path).path});else{const M=He({},H.params);for(const z in M)M[z]==null&&delete M[z];ie=He({},H,{params:m(M)}),le.params=m(le.params)}const fe=e.resolve(ie,le),Le=H.hash||"";fe.params=h(p(fe.params));const A=aT(r,He({},H,{hash:tT(Le),path:fe.path})),O=s.createHref(A);return He({fullPath:A,hash:Le,query:r===qp?LT(H.query):H.query||{}},fe,{redirectedFrom:void 0,href:O})}function N(H){return typeof H=="string"?eu(n,H,l.value.path):He({},H)}function $(H,le){if(u!==H)return hi(8,{from:le,to:H})}function V(H){return P(H)}function F(H){return V(He(N(H),{replace:!0}))}function X(H){const le=H.matched[H.matched.length-1];if(le&&le.redirect){const{redirect:ie}=le;let fe=typeof ie=="function"?ie(H):ie;return typeof fe=="string"&&(fe=fe.includes("?")||fe.includes("#")?fe=N(fe):{path:fe},fe.params={}),He({query:H.query,hash:H.hash,params:fe.path!=null?{}:H.params},fe)}}function P(H,le){const ie=u=k(H),fe=l.value,Le=H.state,A=H.force,O=H.replace===!0,M=X(ie);if(M)return P(He(N(M),{state:typeof M=="object"?He({},Le,M.state):Le,force:A,replace:O}),le||ie);const z=ie;z.redirectedFrom=le;let K;return!A&&lT(r,fe,ie)&&(K=hi(16,{to:z,from:fe}),pt(fe,fe,!0,!1)),(K?Promise.resolve(K):C(z,fe)).catch(W=>Gn(W)?Gn(W,2)?W:it(W):Y(W,z,fe)).then(W=>{if(W){if(Gn(W,2))return P(He({replace:O},N(W.to),{state:typeof W.to=="object"?He({},Le,W.to.state):Le,force:A}),le||z)}else W=D(z,fe,!0,O,Le);return x(z,fe,W),W})}function w(H,le){const ie=$(H,le);return ie?Promise.reject(ie):Promise.resolve()}function T(H){const le=on.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(H):H()}function C(H,le){let ie;const[fe,Le,A]=WT(H,le);ie=tu(fe.reverse(),"beforeRouteLeave",H,le);for(const M of fe)M.leaveGuards.forEach(z=>{ie.push(kr(z,H,le))});const O=w.bind(null,H,le);return ie.push(O),Ot(ie).then(()=>{ie=[];for(const M of i.list())ie.push(kr(M,H,le));return ie.push(O),Ot(ie)}).then(()=>{ie=tu(Le,"beforeRouteUpdate",H,le);for(const M of Le)M.updateGuards.forEach(z=>{ie.push(kr(z,H,le))});return ie.push(O),Ot(ie)}).then(()=>{ie=[];for(const M of A)if(M.beforeEnter)if(En(M.beforeEnter))for(const z of M.beforeEnter)ie.push(kr(z,H,le));else ie.push(kr(M.beforeEnter,H,le));return ie.push(O),Ot(ie)}).then(()=>(H.matched.forEach(M=>M.enterCallbacks={}),ie=tu(A,"beforeRouteEnter",H,le,T),ie.push(O),Ot(ie))).then(()=>{ie=[];for(const M of o.list())ie.push(kr(M,H,le));return ie.push(O),Ot(ie)}).catch(M=>Gn(M,8)?M:Promise.reject(M))}function x(H,le,ie){c.list().forEach(fe=>T(()=>fe(H,le,ie)))}function D(H,le,ie,fe,Le){const A=$(H,le);if(A)return A;const O=le===Ir,M=Gs?history.state:{};ie&&(fe||O?s.replace(H.fullPath,He({scroll:O&&M&&M.scroll},Le)):s.push(H.fullPath,Le)),l.value=H,pt(H,le,ie,O),it()}let S;function xe(){S||(S=s.listen((H,le,ie)=>{if(!an.listening)return;const fe=k(H),Le=X(fe);if(Le){P(He(Le,{replace:!0,force:!0}),fe).catch(ho);return}u=fe;const A=l.value;Gs&&gT(Np(A.fullPath,ie.delta),Ql()),C(fe,A).catch(O=>Gn(O,12)?O:Gn(O,2)?(P(He(N(O.to),{force:!0}),fe).then(M=>{Gn(M,20)&&!ie.delta&&ie.type===Oo.pop&&s.go(-1,!1)}).catch(ho),Promise.reject()):(ie.delta&&s.go(-ie.delta,!1),Y(O,fe,A))).then(O=>{O=O||D(fe,A,!1),O&&(ie.delta&&!Gn(O,8)?s.go(-ie.delta,!1):ie.type===Oo.pop&&Gn(O,20)&&s.go(-1,!1)),x(fe,A,O)}).catch(ho)}))}let de=Gi(),ce=Gi(),Q;function Y(H,le,ie){it(H);const fe=ce.list();return fe.length?fe.forEach(Le=>Le(H,le,ie)):console.error(H),Promise.reject(H)}function he(){return Q&&l.value!==Ir?Promise.resolve():new Promise((H,le)=>{de.add([H,le])})}function it(H){return Q||(Q=!H,xe(),de.list().forEach(([le,ie])=>H?ie(H):le()),de.reset()),H}function pt(H,le,ie,fe){const{scrollBehavior:Le}=t;if(!Gs||!Le)return Promise.resolve();const A=!ie&&yT(Np(H.fullPath,0))||(fe||!ie)&&history.state&&history.state.scroll||null;return zl().then(()=>Le(H,le,A)).then(O=>O&&mT(O)).catch(O=>Y(O,H,le))}const Ge=H=>s.go(H);let Me;const on=new Set,an={currentRoute:l,listening:!0,addRoute:v,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:E,getRoutes:I,resolve:k,options:t,push:V,replace:F,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ce.add,isReady:he,install(H){const le=this;H.component("RouterLink",BT),H.component("RouterView",Rv),H.config.globalProperties.$router=le,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>y(l)}),Gs&&!Me&&l.value===Ir&&(Me=!0,V(s.location).catch(Le=>{}));const ie={};for(const Le in Ir)Object.defineProperty(ie,Le,{get:()=>l.value[Le],enumerable:!0});H.provide(Jl,le),H.provide(Kd,Py(ie)),H.provide(Nu,l);const fe=H.unmount;on.add(H),H.unmount=function(){on.delete(H),on.size<1&&(u=Ir,S&&S(),S=null,l.value=Ir,Me=!1,Q=!1),fe()}}};function Ot(H){return H.reduce((le,ie)=>le.then(()=>T(ie)),Promise.resolve())}return an}function WT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>di(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>di(u,l))||s.push(l))}return[n,r,s]}function is(){return Ve(Jl)}function Dv(t){return Ve(Kd)}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let kv;const Zl=t=>kv=t,Ov=Symbol();function Vu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var po;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(po||(po={}));function GT(){const t=dy(!0),e=t.run(()=>Ee({}));let n=[],r=[];const s=Ud({install(i){Zl(s),s._a=i,i.provide(Ov,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const xv=()=>{};function Yp(t,e,n,r=xv){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&hy()&&D0(s),s}function qs(t,...e){t.slice().forEach(n=>{n(...e)})}const KT=t=>t(),Xp=Symbol(),nu=Symbol();function Mu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Vu(s)&&Vu(r)&&t.hasOwnProperty(n)&&!ht(r)&&!$r(r)?t[n]=Mu(s,r):t[n]=r}return t}const YT=Symbol();function XT(t){return!Vu(t)||!Object.prototype.hasOwnProperty.call(t,YT)}const{assign:Pr}=Object;function QT(t){return!!(ht(t)&&t.effect)}function JT(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const h=Z0(n.state.value[t]);return Pr(h,i,Object.keys(o||{}).reduce((m,p)=>(m[p]=Ud(Te(()=>{Zl(n);const v=n._s.get(t);return o[p].call(v,v)})),m),{}))}return l=Nv(t,u,e,n,r,!0),l}function Nv(t,e,n={},r,s,i){let o;const c=Pr({actions:{}},n),l={deep:!0};let u,h,m=[],p=[],v;const R=r.state.value[t];!i&&!R&&(r.state.value[t]={}),Ee({});let I;function E(w){let T;u=h=!1,typeof w=="function"?(w(r.state.value[t]),T={type:po.patchFunction,storeId:t,events:v}):(Mu(r.state.value[t],w),T={type:po.patchObject,payload:w,storeId:t,events:v});const C=I=Symbol();zl().then(()=>{I===C&&(u=!0)}),h=!0,qs(m,T,r.state.value[t])}const k=i?function(){const{state:T}=n,C=T?T():{};this.$patch(x=>{Pr(x,C)})}:xv;function N(){o.stop(),m=[],p=[],r._s.delete(t)}const $=(w,T="")=>{if(Xp in w)return w[nu]=T,w;const C=function(){Zl(r);const x=Array.from(arguments),D=[],S=[];function xe(Q){D.push(Q)}function de(Q){S.push(Q)}qs(p,{args:x,name:C[nu],store:F,after:xe,onError:de});let ce;try{ce=w.apply(this&&this.$id===t?this:F,x)}catch(Q){throw qs(S,Q),Q}return ce instanceof Promise?ce.then(Q=>(qs(D,Q),Q)).catch(Q=>(qs(S,Q),Promise.reject(Q))):(qs(D,ce),ce)};return C[Xp]=!0,C[nu]=T,C},V={_p:r,$id:t,$onAction:Yp.bind(null,p),$patch:E,$reset:k,$subscribe(w,T={}){const C=Yp(m,w,T.detached,()=>x()),x=o.run(()=>Qe(()=>r.state.value[t],D=>{(T.flush==="sync"?h:u)&&w({storeId:t,type:po.direct,events:v},D)},Pr({},l,T)));return C},$dispose:N},F=Bn(V);r._s.set(t,F);const P=(r._a&&r._a.runWithContext||KT)(()=>r._e.run(()=>(o=dy()).run(()=>e({action:$}))));for(const w in P){const T=P[w];if(ht(T)&&!QT(T)||$r(T))i||(R&&XT(T)&&(ht(T)?T.value=R[w]:Mu(T,R[w])),r.state.value[t][w]=T);else if(typeof T=="function"){const C=$(T,w);P[w]=C,c.actions[w]=T}}return Pr(F,P),Pr(je(F),P),Object.defineProperty(F,"$state",{get:()=>r.state.value[t],set:w=>{E(T=>{Pr(T,w)})}}),r._p.forEach(w=>{Pr(F,o.run(()=>w({store:F,app:r._a,pinia:r,options:c})))}),R&&i&&n.hydrate&&n.hydrate(F.$state,R),u=!0,h=!0,F}/*! #__NO_SIDE_EFFECTS__ */function Vv(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const l=Ow();return o=o||(l?Ve(Ov,null):null),o&&Zl(o),o=kv,o._s.has(t)||(s?Nv(t,e,r,o):JT(t,r,o)),o._s.get(t)}return i.$id=t,i}const ZT=()=>{};var Qp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},eI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Lv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,m=(i&3)<<4|c>>4;let p=(c&15)<<2|u>>6,v=u&63;l||(v=64,o||(p=64)),r.push(n[h],n[m],n[p],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||m==null)throw new tI;const p=i<<2|c>>4;if(r.push(p),u!==64){const v=c<<4&240|u>>2;if(r.push(v),m!==64){const R=u<<6&192|m;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nI=function(t){const e=Mv(t);return Lv.encodeByteArray(e,!0)},pl=function(t){return nI(t).replace(/\./g,"")},$v=function(t){try{return Lv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const sI=()=>rI().__FIREBASE_DEFAULTS__,iI=()=>{if(typeof process>"u"||typeof Qp>"u")return;const t=Qp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$v(t[1]);return e&&JSON.parse(e)},ec=()=>{try{return ZT()||sI()||iI()||oI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fv=t=>{var e,n;return(n=(e=ec())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},aI=t=>{const e=Fv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Uv=()=>{var t;return(t=ec())===null||t===void 0?void 0:t.config},Bv=t=>{var e;return(e=ec())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Ei(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jv(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function cI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[pl(JSON.stringify(n)),pl(JSON.stringify(o)),""].join(".")}const mo={};function uI(){const t={prod:[],emulator:[]};for(const e of Object.keys(mo))mo[e]?t.emulator.push(e):t.prod.push(e);return t}function dI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Jp=!1;function qv(t,e){if(typeof window>"u"||typeof document>"u"||!Ei(window.location.host)||mo[t]===e||mo[t]||Jp)return;mo[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=uI().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function c(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,v){p.setAttribute("width","24"),p.setAttribute("id",v),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Jp=!0,o()},p}function h(p,v){p.setAttribute("id",v),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function m(){const p=dI(r),v=n("text"),R=document.getElementById(v)||document.createElement("span"),I=n("learnmore"),E=document.getElementById(I)||document.createElement("a"),k=n("preprendIcon"),N=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const $=p.element;c($),h(E,I);const V=u();l(N,k),$.append(N,R,E,V),document.body.appendChild($)}i?(R.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(N.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function fI(){var t;const e=(t=ec())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yI(){const t=Bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vI(){return!fI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _I(){try{return typeof indexedDB=="object"}catch{return!1}}function bI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI="FirebaseError";class mr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wI,Object.setPrototypeOf(this,mr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yo.prototype.create)}}class Yo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?EI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new mr(s,c,r)}}function EI(t,e){return t.replace(TI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const TI=/\{\$([^}]+)}/g;function II(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function As(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Zp(i)&&Zp(o)){if(!As(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Zp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Qi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function SI(t,e){const n=new AI(t,e);return n.subscribe.bind(n)}class AI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");PI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ru),s.error===void 0&&(s.error=ru),s.complete===void 0&&(s.complete=ru);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ru(){}/**
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
 */function ct(t){return t&&t._delegate?t._delegate:t}class Ps{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vs="[DEFAULT]";/**
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
 */class CI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DI(e))try{this.getOrInitializeService({instanceIdentifier:vs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=vs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vs){return this.instances.has(e)}getOptions(e=vs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vs){return this.component?this.component.multipleInstances?e:vs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RI(t){return t===vs?void 0:t}function DI(t){return t.instantiationMode==="EAGER"}/**
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
 */var $e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($e||($e={}));const OI={debug:$e.DEBUG,verbose:$e.VERBOSE,info:$e.INFO,warn:$e.WARN,error:$e.ERROR,silent:$e.SILENT},xI=$e.INFO,NI={[$e.DEBUG]:"log",[$e.VERBOSE]:"log",[$e.INFO]:"info",[$e.WARN]:"warn",[$e.ERROR]:"error"},VI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=NI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yd{constructor(e){this.name=e,this._logLevel=xI,this._logHandler=VI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$e.DEBUG,...e),this._logHandler(this,$e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$e.VERBOSE,...e),this._logHandler(this,$e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$e.INFO,...e),this._logHandler(this,$e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$e.WARN,...e),this._logHandler(this,$e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$e.ERROR,...e),this._logHandler(this,$e.ERROR,...e)}}const MI=(t,e)=>e.some(n=>t instanceof n);let em,tm;function LI(){return em||(em=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $I(){return tm||(tm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hv=new WeakMap,Lu=new WeakMap,zv=new WeakMap,su=new WeakMap,Xd=new WeakMap;function FI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Fr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hv.set(n,t)}).catch(()=>{}),Xd.set(e,t),e}function UI(t){if(Lu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Lu.set(t,e)}let $u={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BI(t){$u=t($u)}function jI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(iu(this),e,...n);return zv.set(r,e.sort?e.sort():[e]),Fr(r)}:$I().includes(t)?function(...e){return t.apply(iu(this),e),Fr(Hv.get(this))}:function(...e){return Fr(t.apply(iu(this),e))}}function qI(t){return typeof t=="function"?jI(t):(t instanceof IDBTransaction&&UI(t),MI(t,LI())?new Proxy(t,$u):t)}function Fr(t){if(t instanceof IDBRequest)return FI(t);if(su.has(t))return su.get(t);const e=qI(t);return e!==t&&(su.set(t,e),Xd.set(e,t)),e}const iu=t=>Xd.get(t);function HI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Fr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Fr(o.result),l.oldVersion,l.newVersion,Fr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const zI=["get","getKey","getAll","getAllKeys","count"],WI=["put","add","delete","clear"],ou=new Map;function nm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ou.get(e))return ou.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=WI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||zI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return ou.set(e,i),i}BI(t=>({...t,get:(e,n,r)=>nm(e,n)||t.get(e,n,r),has:(e,n)=>!!nm(e,n)||t.has(e,n)}));/**
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
 */class GI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KI(t){const e=t.getComponent();return e?.type==="VERSION"}const Fu="@firebase/app",rm="0.13.2";/**
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
 */const ar=new Yd("@firebase/app"),YI="@firebase/app-compat",XI="@firebase/analytics-compat",QI="@firebase/analytics",JI="@firebase/app-check-compat",ZI="@firebase/app-check",eS="@firebase/auth",tS="@firebase/auth-compat",nS="@firebase/database",rS="@firebase/data-connect",sS="@firebase/database-compat",iS="@firebase/functions",oS="@firebase/functions-compat",aS="@firebase/installations",lS="@firebase/installations-compat",cS="@firebase/messaging",uS="@firebase/messaging-compat",dS="@firebase/performance",hS="@firebase/performance-compat",fS="@firebase/remote-config",pS="@firebase/remote-config-compat",mS="@firebase/storage",gS="@firebase/storage-compat",yS="@firebase/firestore",vS="@firebase/ai",_S="@firebase/firestore-compat",bS="firebase",wS="11.10.0";/**
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
 */const Uu="[DEFAULT]",ES={[Fu]:"fire-core",[YI]:"fire-core-compat",[QI]:"fire-analytics",[XI]:"fire-analytics-compat",[ZI]:"fire-app-check",[JI]:"fire-app-check-compat",[eS]:"fire-auth",[tS]:"fire-auth-compat",[nS]:"fire-rtdb",[rS]:"fire-data-connect",[sS]:"fire-rtdb-compat",[iS]:"fire-fn",[oS]:"fire-fn-compat",[aS]:"fire-iid",[lS]:"fire-iid-compat",[cS]:"fire-fcm",[uS]:"fire-fcm-compat",[dS]:"fire-perf",[hS]:"fire-perf-compat",[fS]:"fire-rc",[pS]:"fire-rc-compat",[mS]:"fire-gcs",[gS]:"fire-gcs-compat",[yS]:"fire-fst",[_S]:"fire-fst-compat",[vS]:"fire-vertex","fire-js":"fire-js",[bS]:"fire-js-all"};/**
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
 */const ml=new Map,TS=new Map,Bu=new Map;function sm(t,e){try{t.container.addComponent(e)}catch(n){ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fi(t){const e=t.name;if(Bu.has(e))return ar.debug(`There were multiple attempts to register component ${e}.`),!1;Bu.set(e,t);for(const n of ml.values())sm(n,t);for(const n of TS.values())sm(n,t);return!0}function Qd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const IS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ur=new Yo("app","Firebase",IS);/**
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
 */class SS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ps("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ur.create("app-deleted",{appName:this._name})}}/**
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
 */const Ti=wS;function Wv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Uu,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Ur.create("bad-app-name",{appName:String(s)});if(n||(n=Uv()),!n)throw Ur.create("no-options");const i=ml.get(s);if(i){if(As(n,i.options)&&As(r,i.config))return i;throw Ur.create("duplicate-app",{appName:s})}const o=new kI(s);for(const l of Bu.values())o.addComponent(l);const c=new SS(n,r,o);return ml.set(s,c),c}function Gv(t=Uu){const e=ml.get(t);if(!e&&t===Uu&&Uv())return Wv();if(!e)throw Ur.create("no-app",{appName:t});return e}function Br(t,e,n){var r;let s=(r=ES[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ar.warn(c.join(" "));return}fi(new Ps(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const AS="firebase-heartbeat-database",PS=1,xo="firebase-heartbeat-store";let au=null;function Kv(){return au||(au=HI(AS,PS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ur.create("idb-open",{originalErrorMessage:t.message})})),au}async function CS(t){try{const n=(await Kv()).transaction(xo),r=await n.objectStore(xo).get(Yv(t));return await n.done,r}catch(e){if(e instanceof mr)ar.warn(e.message);else{const n=Ur.create("idb-get",{originalErrorMessage:e?.message});ar.warn(n.message)}}}async function im(t,e){try{const r=(await Kv()).transaction(xo,"readwrite");await r.objectStore(xo).put(e,Yv(t)),await r.done}catch(n){if(n instanceof mr)ar.warn(n.message);else{const r=Ur.create("idb-set",{originalErrorMessage:n?.message});ar.warn(r.message)}}}function Yv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RS=1024,DS=30;class kS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=om();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>DS){const o=NS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ar.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=om(),{heartbeatsToSend:r,unsentEntries:s}=OS(this._heartbeatsCache.heartbeats),i=pl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ar.warn(n),""}}}function om(){return new Date().toISOString().substring(0,10)}function OS(t,e=RS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),am(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),am(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _I()?bI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CS(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return im(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return im(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function am(t){return pl(JSON.stringify({version:2,heartbeats:t})).length}function NS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function VS(t){fi(new Ps("platform-logger",e=>new GI(e),"PRIVATE")),fi(new Ps("heartbeat",e=>new kS(e),"PRIVATE")),Br(Fu,rm,t),Br(Fu,rm,"esm2017"),Br("fire-js","")}VS("");function Jd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Xv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MS=Xv,Qv=new Yo("auth","Firebase",Xv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=new Yd("@firebase/auth");function LS(t,...e){gl.logLevel<=$e.WARN&&gl.warn(`Auth (${Ti}): ${t}`,...e)}function Ga(t,...e){gl.logLevel<=$e.ERROR&&gl.error(`Auth (${Ti}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,...e){throw eh(t,...e)}function bn(t,...e){return eh(t,...e)}function Zd(t,e,n){const r=Object.assign(Object.assign({},MS()),{[e]:n});return new Yo("auth","Firebase",r).create(e,{appName:t.name})}function rr(t){return Zd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $S(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&pn(t,"argument-error"),Zd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function eh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qv.create(t,...e)}function Ie(t,e,...n){if(!t)throw eh(e,...n)}function er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ga(e),new Error(e)}function lr(t,e){t||er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function FS(){return lm()==="http:"||lm()==="https:"}function lm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FS()||mI()||"connection"in navigator)?navigator.onLine:!0}function BS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,lr(n>e,"Short delay should be less than long delay!"),this.isMobile=hI()||gI()}get(){return US()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(t,e){lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const qS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],HS=new Qo(3e4,6e4);function jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sn(t,e,n,r,s={}){return Zv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Xo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return pI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ei(t.emulatorConfig.host)&&(u.credentials="include"),Jv.fetch()(await e_(t,t.config.apiHost,n,c),u)})}async function Zv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jS),e);try{const s=new WS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Oa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Oa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Oa(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Zd(t,h,u);pn(t,h)}}catch(s){if(s instanceof mr)throw s;pn(t,"network-request-failed",{message:String(s)})}}async function Jo(t,e,n,r,s={}){const i=await Sn(t,e,n,r,s);return"mfaPendingCredential"in i&&pn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function e_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?th(t.config,s):`${t.config.apiScheme}://${s}`;return qS.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function zS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class WS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),HS.get())})}}function Oa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=bn(t,e,r);return s.customData._tokenResponse=n,s}function cm(t){return t!==void 0&&t.enterprise!==void 0}class GS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function KS(t,e){return Sn(t,"GET","/v2/recaptchaConfig",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(t,e){return Sn(t,"POST","/v1/accounts:delete",e)}async function yl(t,e){return Sn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XS(t,e=!1){const n=ct(t),r=await n.getIdToken(e),s=nh(r);Ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:go(lu(s.auth_time)),issuedAtTime:go(lu(s.iat)),expirationTime:go(lu(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function lu(t){return Number(t)*1e3}function nh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ga("JWT malformed, contained fewer than 3 sections"),null;try{const s=$v(n);return s?JSON.parse(s):(Ga("Failed to decode base64 JWT payload"),null)}catch(s){return Ga("Caught error parsing JWT payload as JSON",s?.toString()),null}}function um(t){const e=nh(t);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mr&&QS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function QS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function vl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await pi(t,yl(n,{idToken:r}));Ie(s?.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?t_(i.providerUserInfo):[],c=eA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!c?.length,h=l?u:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new qu(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,m)}async function ZS(t){const e=ct(t);await vl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function t_(t){return t.map(e=>{var{providerId:n}=e,r=Jd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(t,e){const n=await Zv(t,{},async()=>{const r=Xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await e_(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Ei(t.emulatorConfig.host)&&(l.credentials="include"),Jv.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nA(t,e){return Sn(t,"POST","/v2/accounts:revokeToken",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):um(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const n=um(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await tA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ri;return r&&(Ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ri,this.toJSON())}_performRefresh(){return er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t,e){Ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Jd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await pi(this,this.stsTokenManager.getToken(this.auth,e));return Ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return XS(this,e)}reload(){return ZS(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(rr(this.auth));const e=await this.getIdToken();return await pi(this,YS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,h;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(c=n.tenantId)!==null&&c!==void 0?c:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,k=(u=n.createdAt)!==null&&u!==void 0?u:void 0,N=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:$,emailVerified:V,isAnonymous:F,providerData:X,stsTokenManager:P}=n;Ie($&&P,e,"internal-error");const w=ri.fromJSON(this.name,P);Ie(typeof $=="string",e,"internal-error"),Sr(m,e.name),Sr(p,e.name),Ie(typeof V=="boolean",e,"internal-error"),Ie(typeof F=="boolean",e,"internal-error"),Sr(v,e.name),Sr(R,e.name),Sr(I,e.name),Sr(E,e.name),Sr(k,e.name),Sr(N,e.name);const T=new vn({uid:$,auth:e,email:p,emailVerified:V,displayName:m,isAnonymous:F,photoURL:R,phoneNumber:v,tenantId:I,stsTokenManager:w,createdAt:k,lastLoginAt:N});return X&&Array.isArray(X)&&(T.providerData=X.map(C=>Object.assign({},C))),E&&(T._redirectEventId=E),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new ri;s.updateFromServerResponse(n);const i=new vn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await vl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?t_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new ri;c.updateFromIdToken(r);const l=new vn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new qu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm=new Map;function tr(t){lr(t instanceof Function,"Expected a class definition");let e=dm.get(t);return e?(lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dm.set(t,e),e)}/**
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
 */class n_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}n_.type="NONE";const hm=n_;/**
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
 */function Ka(t,e,n){return`firebase:${t}:${e}:${n}`}class si{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ka(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ka("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await yl(this.auth,{idToken:e}).catch(()=>{});return n?vn._fromGetAccountInfoResponse(this.auth,n,e):null}return vn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new si(tr(hm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||tr(hm);const o=Ka(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const h=await u._get(o);if(h){let m;if(typeof h=="string"){const p=await yl(e,{idToken:h}).catch(()=>{});if(!p)break;m=await vn._fromGetAccountInfoResponse(e,p,h)}else m=vn._fromJSON(e,h);u!==i&&(c=m),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new si(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new si(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(o_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(r_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(l_(e))return"Blackberry";if(c_(e))return"Webos";if(s_(e))return"Safari";if((e.includes("chrome/")||i_(e))&&!e.includes("edge/"))return"Chrome";if(a_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function r_(t=Bt()){return/firefox\//i.test(t)}function s_(t=Bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function i_(t=Bt()){return/crios\//i.test(t)}function o_(t=Bt()){return/iemobile/i.test(t)}function a_(t=Bt()){return/android/i.test(t)}function l_(t=Bt()){return/blackberry/i.test(t)}function c_(t=Bt()){return/webos/i.test(t)}function rh(t=Bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rA(t=Bt()){var e;return rh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sA(){return yI()&&document.documentMode===10}function u_(t=Bt()){return rh(t)||a_(t)||c_(t)||l_(t)||/windows phone/i.test(t)||o_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t,e=[]){let n;switch(t){case"Browser":n=fm(Bt());break;case"Worker":n=`${fm(Bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ti}/${r}`}/**
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
 */async function oA(t,e={}){return Sn(t,"GET","/v2/passwordPolicy",jn(t,e))}/**
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
 */class cA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pm(this),this.idTokenSubscription=new pm(this),this.beforeStateQueue=new iA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await si.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yl(this,{idToken:e}),r=await vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vl(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(rr(this));const n=e?ct(e):null;return n&&Ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oA(this),n=new lA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Yo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tr(e)||this._popupRedirectResolver;Ie(n,this,"argument-error"),this.redirectPersistenceManager=await si.create(this,[tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=d_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&LS(`Error while retrieving App Check token: ${n.error}`),n?.token}}function gr(t){return ct(t)}class pm{constructor(e){this.auth=e,this.observer=null,this.addObserver=SI(n=>this.observer=n)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uA(t){tc=t}function h_(t){return tc.loadJS(t)}function dA(){return tc.recaptchaEnterpriseScript}function hA(){return tc.gapiScript}function fA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class pA{constructor(){this.enterprise=new mA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class mA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const gA="recaptcha-enterprise",f_="NO_RECAPTCHA";class yA{constructor(e){this.type=gA,this.auth=gr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{KS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new GS(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;cm(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(f_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new pA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&cm(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=dA();l.length!==0&&(l+=c),h_(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function mm(t,e,n,r=!1,s=!1){const i=new yA(t);let o;if(s)o=f_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function _l(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await mm(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await mm(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(t,e){const n=Qd(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(As(i,e??{}))return s;pn(s,"already-initialized")}return n.initialize({options:e})}function _A(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(tr);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function bA(t,e,n){const r=gr(t);Ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=p_(e),{host:o,port:c}=wA(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ie(As(u,r.config.emulator)&&As(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Ei(o)?(jv(`${i}//${o}${l}`),qv("Auth",!0)):EA()}function p_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wA(t){const e=p_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:gm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:gm(o)}}}function gm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function EA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return er("not implemented")}_getIdTokenResponse(e){return er("not implemented")}_linkToIdToken(e,n){return er("not implemented")}_getReauthenticationResolver(e){return er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(t,e){return Sn(t,"POST","/v1/accounts:resetPassword",jn(t,e))}async function IA(t,e){return Sn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(t,e){return Jo(t,"POST","/v1/accounts:signInWithPassword",jn(t,e))}async function AA(t,e){return Sn(t,"POST","/v1/accounts:sendOobCode",jn(t,e))}async function PA(t,e){return AA(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CA(t,e){return Jo(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}async function RA(t,e){return Jo(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends sh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new No(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new No(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _l(e,n,"signInWithPassword",SA);case"emailLink":return CA(e,{email:this._email,oobCode:this._password});default:pn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _l(e,r,"signUpPassword",IA);case"emailLink":return RA(e,{idToken:n,email:this._email,oobCode:this._password});default:pn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t,e){return Jo(t,"POST","/v1/accounts:signInWithIdp",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA="http://localhost";class Cs extends sh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Jd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Cs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ii(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ii(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ii(e,n)}buildRequest(){const e={requestUri:DA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OA(t){const e=Xi(Qi(t)).link,n=e?Xi(Qi(e)).deep_link_id:null,r=Xi(Qi(t)).deep_link_id;return(r?Xi(Qi(r)).link:null)||r||n||e||t}class ih{constructor(e){var n,r,s,i,o,c;const l=Xi(Qi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,m=kA((s=l.mode)!==null&&s!==void 0?s:null);Ie(u&&h&&m,"argument-error"),this.apiKey=u,this.operation=m,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=OA(e);try{return new ih(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.providerId=Ii.PROVIDER_ID}static credential(e,n){return No._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ih.parseLink(n);return Ie(r,"argument-error"),No._fromEmailAndCode(e,r.code,r.tenantId)}}Ii.PROVIDER_ID="password";Ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zo extends oh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Zo{constructor(){super("facebook.com")}static credential(e){return Cs._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";xr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cs._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends Zo{constructor(){super("github.com")}static credential(e){return Cs._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Zo{constructor(){super("twitter.com")}static credential(e,n){return Cs._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vr.credential(n,r)}catch{return null}}}Vr.TWITTER_SIGN_IN_METHOD="twitter.com";Vr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xA(t,e){return Jo(t,"POST","/v1/accounts:signUp",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await vn._fromIdTokenResponse(e,r,s),o=ym(r);return new Rs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ym(r);return new Rs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ym(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends mr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,bl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new bl(e,n,r,s)}}function m_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bl._fromErrorAndOperation(t,i,e,r):i})}async function NA(t,e,n=!1){const r=await pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rs._forOperation(t,"link",r)}/**
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
 */async function VA(t,e,n=!1){const{auth:r}=t;if(tn(r.app))return Promise.reject(rr(r));const s="reauthenticate";try{const i=await pi(t,m_(r,s,e,t),n);Ie(i.idToken,r,"internal-error");const o=nh(i.idToken);Ie(o,r,"internal-error");const{sub:c}=o;return Ie(t.uid===c,r,"user-mismatch"),Rs._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&pn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g_(t,e,n=!1){if(tn(t.app))return Promise.reject(rr(t));const r="signIn",s=await m_(t,r,e),i=await Rs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function MA(t,e){return g_(gr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ah(t){const e=gr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function LA(t,e,n){const r=gr(t);await _l(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",PA)}async function $A(t,e,n){await TA(ct(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ah(t),r})}async function FA(t,e,n){if(tn(t.app))return Promise.reject(rr(t));const r=gr(t),o=await _l(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ah(t),l}),c=await Rs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function UA(t,e,n){return tn(t.app)?Promise.reject(rr(t)):MA(ct(t),Ii.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ah(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(t,e){return Sn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ct(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await pi(r,BA(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function qA(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function HA(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function y_(t,e,n,r){return ct(t).onAuthStateChanged(e,n,r)}function zA(t){return ct(t).signOut()}const wl="__sak";/**
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
 */class v_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wl,"1"),this.storage.removeItem(wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=1e3,GA=10;class __ extends v_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=u_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);sA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,GA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},WA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}__.type="LOCAL";const KA=__;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_ extends v_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}b_.type="SESSION";const w_=b_;/**
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
 */function lh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class XA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=lh("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const p=m;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return window}function QA(t){Nn().location.href=t}/**
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
 */function E_(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function JA(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZA(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eP(){return E_()?self:null}/**
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
 */const T_="firebaseLocalStorageDb",tP=1,El="firebaseLocalStorage",I_="fbase_key";class ea{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rc(t,e){return t.transaction([El],e?"readwrite":"readonly").objectStore(El)}function nP(){const t=indexedDB.deleteDatabase(T_);return new ea(t).toPromise()}function Hu(){const t=indexedDB.open(T_,tP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(El,{keyPath:I_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(El)?e(r):(r.close(),await nP(),e(await Hu()))})})}async function vm(t,e,n){const r=rc(t,!0).put({[I_]:e,value:n});return new ea(r).toPromise()}async function rP(t,e){const n=rc(t,!1).get(e),r=await new ea(n).toPromise();return r===void 0?null:r.value}function _m(t,e){const n=rc(t,!0).delete(e);return new ea(n).toPromise()}const sP=800,iP=3;class S_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return E_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nc._getInstance(eP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await JA(),!this.activeServiceWorker)return;this.sender=new XA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hu();return await vm(e,wl,"1"),await _m(e,wl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_m(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=rc(s,!1).getAll();return new ea(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}S_.type="LOCAL";const oP=S_;new Qo(3e4,6e4);/**
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
 */function A_(t,e){return e?tr(e):(Ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ch extends sh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aP(t){return g_(t.auth,new ch(t),t.bypassAuthState)}function lP(t){const{auth:e,user:n}=t;return Ie(n,e,"internal-error"),VA(n,new ch(t),t.bypassAuthState)}async function cP(t){const{auth:e,user:n}=t;return Ie(n,e,"internal-error"),NA(n,new ch(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aP;case"linkViaPopup":case"linkViaRedirect":return cP;case"reauthViaPopup":case"reauthViaRedirect":return lP;default:pn(this.auth,"internal-error")}}resolve(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=new Qo(2e3,1e4);async function dP(t,e,n){if(tn(t.app))return Promise.reject(bn(t,"operation-not-supported-in-this-environment"));const r=gr(t);$S(t,e,oh);const s=A_(r,n);return new bs(r,"signInViaPopup",e,s).executeNotNull()}class bs extends P_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,bs.currentPopupAction&&bs.currentPopupAction.cancel(),bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const e=lh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uP.get())};e()}}bs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP="pendingRedirect",Ya=new Map;class fP extends P_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ya.get(this.auth._key());if(!e){try{const r=await pP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ya.set(this.auth._key(),e)}return this.bypassAuthState||Ya.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pP(t,e){const n=yP(e),r=gP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function mP(t,e){Ya.set(t._key(),e)}function gP(t){return tr(t._redirectPersistence)}function yP(t){return Ka(hP,t.config.apiKey,t.name)}async function vP(t,e,n=!1){if(tn(t.app))return Promise.reject(rr(t));const r=gr(t),s=A_(r,e),o=await new fP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P=10*60*1e3;class bP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!C_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_P&&this.cachedEventUids.clear(),this.cachedEventUids.has(bm(e))}saveEventToCache(e){this.cachedEventUids.add(bm(e)),this.lastProcessedEventTime=Date.now()}}function bm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function C_({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function wP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return C_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EP(t,e={}){return Sn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IP=/^https?/;async function SP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EP(t);for(const n of e)try{if(AP(n))return}catch{}pn(t,"unauthorized-domain")}function AP(t){const e=ju(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IP.test(n))return!1;if(TP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const PP=new Qo(3e4,6e4);function wm(){const t=Nn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function CP(t){return new Promise((e,n)=>{var r,s,i;function o(){wm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wm(),n(bn(t,"network-request-failed"))},timeout:PP.get()})}if(!((s=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Nn().gapi)===null||i===void 0)&&i.load)o();else{const c=fA("iframefcb");return Nn()[c]=()=>{gapi.load?o():n(bn(t,"network-request-failed"))},h_(`${hA()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Xa=null,e})}let Xa=null;function RP(t){return Xa=Xa||CP(t),Xa}/**
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
 */const DP=new Qo(5e3,15e3),kP="__/auth/iframe",OP="emulator/auth/iframe",xP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VP(t){const e=t.config;Ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?th(e,OP):`https://${t.config.authDomain}/${kP}`,r={apiKey:e.apiKey,appName:t.name,v:Ti},s=NP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Xo(r).slice(1)}`}async function MP(t){const e=await RP(t),n=Nn().gapi;return Ie(n,t,"internal-error"),e.open({where:document.body,url:VP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),c=Nn().setTimeout(()=>{i(o)},DP.get());function l(){Nn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const LP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$P=500,FP=600,UP="_blank",BP="http://localhost";class Em{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jP(t,e,n,r=$P,s=FP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},LP),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Bt().toLowerCase();n&&(c=i_(u)?UP:n),r_(u)&&(e=e||BP,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[v,R])=>`${p}${v}=${R},`,"");if(rA(u)&&c!=="_self")return qP(e||"",c),new Em(null);const m=window.open(e||"",c,h);Ie(m,t,"popup-blocked");try{m.focus()}catch{}return new Em(m)}function qP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const HP="__/auth/handler",zP="emulator/auth/handler",WP=encodeURIComponent("fac");async function Tm(t,e,n,r,s,i){Ie(t.config.authDomain,t,"auth-domain-config-required"),Ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ti,eventId:s};if(e instanceof oh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",II(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries({}))o[h]=m}if(e instanceof Zo){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await t._getAppCheckToken(),u=l?`#${WP}=${encodeURIComponent(l)}`:"";return`${GP(t)}?${Xo(c).slice(1)}${u}`}function GP({config:t}){return t.emulator?th(t,zP):`https://${t.authDomain}/${HP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="webStorageSupport";class KP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=w_,this._completeRedirectFn=vP,this._overrideRedirectResult=mP}async _openPopup(e,n,r,s){var i;lr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Tm(e,n,r,ju(),s);return jP(e,o,lh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Tm(e,n,r,ju(),s);return QA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(lr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await MP(e),r=new bP(e);return n.register("authEvent",s=>(Ie(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cu,{type:cu},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[cu];o!==void 0&&n(!!o),pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return u_()||s_()||rh()}}const YP=KP;var Im="@firebase/auth",Sm="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JP(t){fi(new Ps("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;Ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:d_(t)},u=new cA(r,s,i,l);return _A(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fi(new Ps("auth-internal",e=>{const n=gr(e.getProvider("auth").getImmediate());return(r=>new XP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Br(Im,Sm,QP(t)),Br(Im,Sm,"esm2017")}/**
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
 */const ZP=5*60,eC=Bv("authIdTokenMaxAge")||ZP;let Am=null;const tC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eC)return;const s=n?.token;Am!==s&&(Am=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function nC(t=Gv()){const e=Qd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vA(t,{popupRedirectResolver:YP,persistence:[oP,KA,w_]}),r=Bv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=tC(i.toString());HA(n,o,()=>o(n.currentUser)),qA(n,c=>o(c))}}const s=Fv("auth");return s&&bA(n,`http://${s}`),n}function rC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}uA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=bn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",rC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JP("Browser");var Pm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jr,R_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,w){function T(){}T.prototype=w.prototype,P.D=w.prototype,P.prototype=new T,P.prototype.constructor=P,P.C=function(C,x,D){for(var S=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)S[xe-2]=arguments[xe];return w.prototype[x].apply(C,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(P,w,T){T||(T=0);var C=Array(16);if(typeof w=="string")for(var x=0;16>x;++x)C[x]=w.charCodeAt(T++)|w.charCodeAt(T++)<<8|w.charCodeAt(T++)<<16|w.charCodeAt(T++)<<24;else for(x=0;16>x;++x)C[x]=w[T++]|w[T++]<<8|w[T++]<<16|w[T++]<<24;w=P.g[0],T=P.g[1],x=P.g[2];var D=P.g[3],S=w+(D^T&(x^D))+C[0]+3614090360&4294967295;w=T+(S<<7&4294967295|S>>>25),S=D+(x^w&(T^x))+C[1]+3905402710&4294967295,D=w+(S<<12&4294967295|S>>>20),S=x+(T^D&(w^T))+C[2]+606105819&4294967295,x=D+(S<<17&4294967295|S>>>15),S=T+(w^x&(D^w))+C[3]+3250441966&4294967295,T=x+(S<<22&4294967295|S>>>10),S=w+(D^T&(x^D))+C[4]+4118548399&4294967295,w=T+(S<<7&4294967295|S>>>25),S=D+(x^w&(T^x))+C[5]+1200080426&4294967295,D=w+(S<<12&4294967295|S>>>20),S=x+(T^D&(w^T))+C[6]+2821735955&4294967295,x=D+(S<<17&4294967295|S>>>15),S=T+(w^x&(D^w))+C[7]+4249261313&4294967295,T=x+(S<<22&4294967295|S>>>10),S=w+(D^T&(x^D))+C[8]+1770035416&4294967295,w=T+(S<<7&4294967295|S>>>25),S=D+(x^w&(T^x))+C[9]+2336552879&4294967295,D=w+(S<<12&4294967295|S>>>20),S=x+(T^D&(w^T))+C[10]+4294925233&4294967295,x=D+(S<<17&4294967295|S>>>15),S=T+(w^x&(D^w))+C[11]+2304563134&4294967295,T=x+(S<<22&4294967295|S>>>10),S=w+(D^T&(x^D))+C[12]+1804603682&4294967295,w=T+(S<<7&4294967295|S>>>25),S=D+(x^w&(T^x))+C[13]+4254626195&4294967295,D=w+(S<<12&4294967295|S>>>20),S=x+(T^D&(w^T))+C[14]+2792965006&4294967295,x=D+(S<<17&4294967295|S>>>15),S=T+(w^x&(D^w))+C[15]+1236535329&4294967295,T=x+(S<<22&4294967295|S>>>10),S=w+(x^D&(T^x))+C[1]+4129170786&4294967295,w=T+(S<<5&4294967295|S>>>27),S=D+(T^x&(w^T))+C[6]+3225465664&4294967295,D=w+(S<<9&4294967295|S>>>23),S=x+(w^T&(D^w))+C[11]+643717713&4294967295,x=D+(S<<14&4294967295|S>>>18),S=T+(D^w&(x^D))+C[0]+3921069994&4294967295,T=x+(S<<20&4294967295|S>>>12),S=w+(x^D&(T^x))+C[5]+3593408605&4294967295,w=T+(S<<5&4294967295|S>>>27),S=D+(T^x&(w^T))+C[10]+38016083&4294967295,D=w+(S<<9&4294967295|S>>>23),S=x+(w^T&(D^w))+C[15]+3634488961&4294967295,x=D+(S<<14&4294967295|S>>>18),S=T+(D^w&(x^D))+C[4]+3889429448&4294967295,T=x+(S<<20&4294967295|S>>>12),S=w+(x^D&(T^x))+C[9]+568446438&4294967295,w=T+(S<<5&4294967295|S>>>27),S=D+(T^x&(w^T))+C[14]+3275163606&4294967295,D=w+(S<<9&4294967295|S>>>23),S=x+(w^T&(D^w))+C[3]+4107603335&4294967295,x=D+(S<<14&4294967295|S>>>18),S=T+(D^w&(x^D))+C[8]+1163531501&4294967295,T=x+(S<<20&4294967295|S>>>12),S=w+(x^D&(T^x))+C[13]+2850285829&4294967295,w=T+(S<<5&4294967295|S>>>27),S=D+(T^x&(w^T))+C[2]+4243563512&4294967295,D=w+(S<<9&4294967295|S>>>23),S=x+(w^T&(D^w))+C[7]+1735328473&4294967295,x=D+(S<<14&4294967295|S>>>18),S=T+(D^w&(x^D))+C[12]+2368359562&4294967295,T=x+(S<<20&4294967295|S>>>12),S=w+(T^x^D)+C[5]+4294588738&4294967295,w=T+(S<<4&4294967295|S>>>28),S=D+(w^T^x)+C[8]+2272392833&4294967295,D=w+(S<<11&4294967295|S>>>21),S=x+(D^w^T)+C[11]+1839030562&4294967295,x=D+(S<<16&4294967295|S>>>16),S=T+(x^D^w)+C[14]+4259657740&4294967295,T=x+(S<<23&4294967295|S>>>9),S=w+(T^x^D)+C[1]+2763975236&4294967295,w=T+(S<<4&4294967295|S>>>28),S=D+(w^T^x)+C[4]+1272893353&4294967295,D=w+(S<<11&4294967295|S>>>21),S=x+(D^w^T)+C[7]+4139469664&4294967295,x=D+(S<<16&4294967295|S>>>16),S=T+(x^D^w)+C[10]+3200236656&4294967295,T=x+(S<<23&4294967295|S>>>9),S=w+(T^x^D)+C[13]+681279174&4294967295,w=T+(S<<4&4294967295|S>>>28),S=D+(w^T^x)+C[0]+3936430074&4294967295,D=w+(S<<11&4294967295|S>>>21),S=x+(D^w^T)+C[3]+3572445317&4294967295,x=D+(S<<16&4294967295|S>>>16),S=T+(x^D^w)+C[6]+76029189&4294967295,T=x+(S<<23&4294967295|S>>>9),S=w+(T^x^D)+C[9]+3654602809&4294967295,w=T+(S<<4&4294967295|S>>>28),S=D+(w^T^x)+C[12]+3873151461&4294967295,D=w+(S<<11&4294967295|S>>>21),S=x+(D^w^T)+C[15]+530742520&4294967295,x=D+(S<<16&4294967295|S>>>16),S=T+(x^D^w)+C[2]+3299628645&4294967295,T=x+(S<<23&4294967295|S>>>9),S=w+(x^(T|~D))+C[0]+4096336452&4294967295,w=T+(S<<6&4294967295|S>>>26),S=D+(T^(w|~x))+C[7]+1126891415&4294967295,D=w+(S<<10&4294967295|S>>>22),S=x+(w^(D|~T))+C[14]+2878612391&4294967295,x=D+(S<<15&4294967295|S>>>17),S=T+(D^(x|~w))+C[5]+4237533241&4294967295,T=x+(S<<21&4294967295|S>>>11),S=w+(x^(T|~D))+C[12]+1700485571&4294967295,w=T+(S<<6&4294967295|S>>>26),S=D+(T^(w|~x))+C[3]+2399980690&4294967295,D=w+(S<<10&4294967295|S>>>22),S=x+(w^(D|~T))+C[10]+4293915773&4294967295,x=D+(S<<15&4294967295|S>>>17),S=T+(D^(x|~w))+C[1]+2240044497&4294967295,T=x+(S<<21&4294967295|S>>>11),S=w+(x^(T|~D))+C[8]+1873313359&4294967295,w=T+(S<<6&4294967295|S>>>26),S=D+(T^(w|~x))+C[15]+4264355552&4294967295,D=w+(S<<10&4294967295|S>>>22),S=x+(w^(D|~T))+C[6]+2734768916&4294967295,x=D+(S<<15&4294967295|S>>>17),S=T+(D^(x|~w))+C[13]+1309151649&4294967295,T=x+(S<<21&4294967295|S>>>11),S=w+(x^(T|~D))+C[4]+4149444226&4294967295,w=T+(S<<6&4294967295|S>>>26),S=D+(T^(w|~x))+C[11]+3174756917&4294967295,D=w+(S<<10&4294967295|S>>>22),S=x+(w^(D|~T))+C[2]+718787259&4294967295,x=D+(S<<15&4294967295|S>>>17),S=T+(D^(x|~w))+C[9]+3951481745&4294967295,P.g[0]=P.g[0]+w&4294967295,P.g[1]=P.g[1]+(x+(S<<21&4294967295|S>>>11))&4294967295,P.g[2]=P.g[2]+x&4294967295,P.g[3]=P.g[3]+D&4294967295}r.prototype.u=function(P,w){w===void 0&&(w=P.length);for(var T=w-this.blockSize,C=this.B,x=this.h,D=0;D<w;){if(x==0)for(;D<=T;)s(this,P,D),D+=this.blockSize;if(typeof P=="string"){for(;D<w;)if(C[x++]=P.charCodeAt(D++),x==this.blockSize){s(this,C),x=0;break}}else for(;D<w;)if(C[x++]=P[D++],x==this.blockSize){s(this,C),x=0;break}}this.h=x,this.o+=w},r.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var w=1;w<P.length-8;++w)P[w]=0;var T=8*this.o;for(w=P.length-8;w<P.length;++w)P[w]=T&255,T/=256;for(this.u(P),P=Array(16),w=T=0;4>w;++w)for(var C=0;32>C;C+=8)P[T++]=this.g[w]>>>C&255;return P};function i(P,w){var T=c;return Object.prototype.hasOwnProperty.call(T,P)?T[P]:T[P]=w(P)}function o(P,w){this.h=w;for(var T=[],C=!0,x=P.length-1;0<=x;x--){var D=P[x]|0;C&&D==w||(T[x]=D,C=!1)}this.g=T}var c={};function l(P){return-128<=P&&128>P?i(P,function(w){return new o([w|0],0>w?-1:0)}):new o([P|0],0>P?-1:0)}function u(P){if(isNaN(P)||!isFinite(P))return m;if(0>P)return E(u(-P));for(var w=[],T=1,C=0;P>=T;C++)w[C]=P/T|0,T*=4294967296;return new o(w,0)}function h(P,w){if(P.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(P.charAt(0)=="-")return E(h(P.substring(1),w));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=u(Math.pow(w,8)),C=m,x=0;x<P.length;x+=8){var D=Math.min(8,P.length-x),S=parseInt(P.substring(x,x+D),w);8>D?(D=u(Math.pow(w,D)),C=C.j(D).add(u(S))):(C=C.j(T),C=C.add(u(S)))}return C}var m=l(0),p=l(1),v=l(16777216);t=o.prototype,t.m=function(){if(I(this))return-E(this).m();for(var P=0,w=1,T=0;T<this.g.length;T++){var C=this.i(T);P+=(0<=C?C:4294967296+C)*w,w*=4294967296}return P},t.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(R(this))return"0";if(I(this))return"-"+E(this).toString(P);for(var w=u(Math.pow(P,6)),T=this,C="";;){var x=V(T,w).g;T=k(T,x.j(w));var D=((0<T.g.length?T.g[0]:T.h)>>>0).toString(P);if(T=x,R(T))return D+C;for(;6>D.length;)D="0"+D;C=D+C}},t.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function R(P){if(P.h!=0)return!1;for(var w=0;w<P.g.length;w++)if(P.g[w]!=0)return!1;return!0}function I(P){return P.h==-1}t.l=function(P){return P=k(this,P),I(P)?-1:R(P)?0:1};function E(P){for(var w=P.g.length,T=[],C=0;C<w;C++)T[C]=~P.g[C];return new o(T,~P.h).add(p)}t.abs=function(){return I(this)?E(this):this},t.add=function(P){for(var w=Math.max(this.g.length,P.g.length),T=[],C=0,x=0;x<=w;x++){var D=C+(this.i(x)&65535)+(P.i(x)&65535),S=(D>>>16)+(this.i(x)>>>16)+(P.i(x)>>>16);C=S>>>16,D&=65535,S&=65535,T[x]=S<<16|D}return new o(T,T[T.length-1]&-2147483648?-1:0)};function k(P,w){return P.add(E(w))}t.j=function(P){if(R(this)||R(P))return m;if(I(this))return I(P)?E(this).j(E(P)):E(E(this).j(P));if(I(P))return E(this.j(E(P)));if(0>this.l(v)&&0>P.l(v))return u(this.m()*P.m());for(var w=this.g.length+P.g.length,T=[],C=0;C<2*w;C++)T[C]=0;for(C=0;C<this.g.length;C++)for(var x=0;x<P.g.length;x++){var D=this.i(C)>>>16,S=this.i(C)&65535,xe=P.i(x)>>>16,de=P.i(x)&65535;T[2*C+2*x]+=S*de,N(T,2*C+2*x),T[2*C+2*x+1]+=D*de,N(T,2*C+2*x+1),T[2*C+2*x+1]+=S*xe,N(T,2*C+2*x+1),T[2*C+2*x+2]+=D*xe,N(T,2*C+2*x+2)}for(C=0;C<w;C++)T[C]=T[2*C+1]<<16|T[2*C];for(C=w;C<2*w;C++)T[C]=0;return new o(T,0)};function N(P,w){for(;(P[w]&65535)!=P[w];)P[w+1]+=P[w]>>>16,P[w]&=65535,w++}function $(P,w){this.g=P,this.h=w}function V(P,w){if(R(w))throw Error("division by zero");if(R(P))return new $(m,m);if(I(P))return w=V(E(P),w),new $(E(w.g),E(w.h));if(I(w))return w=V(P,E(w)),new $(E(w.g),w.h);if(30<P.g.length){if(I(P)||I(w))throw Error("slowDivide_ only works with positive integers.");for(var T=p,C=w;0>=C.l(P);)T=F(T),C=F(C);var x=X(T,1),D=X(C,1);for(C=X(C,2),T=X(T,2);!R(C);){var S=D.add(C);0>=S.l(P)&&(x=x.add(T),D=S),C=X(C,1),T=X(T,1)}return w=k(P,x.j(w)),new $(x,w)}for(x=m;0<=P.l(w);){for(T=Math.max(1,Math.floor(P.m()/w.m())),C=Math.ceil(Math.log(T)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),D=u(T),S=D.j(w);I(S)||0<S.l(P);)T-=C,D=u(T),S=D.j(w);R(D)&&(D=p),x=x.add(D),P=k(P,S)}return new $(x,P)}t.A=function(P){return V(this,P).h},t.and=function(P){for(var w=Math.max(this.g.length,P.g.length),T=[],C=0;C<w;C++)T[C]=this.i(C)&P.i(C);return new o(T,this.h&P.h)},t.or=function(P){for(var w=Math.max(this.g.length,P.g.length),T=[],C=0;C<w;C++)T[C]=this.i(C)|P.i(C);return new o(T,this.h|P.h)},t.xor=function(P){for(var w=Math.max(this.g.length,P.g.length),T=[],C=0;C<w;C++)T[C]=this.i(C)^P.i(C);return new o(T,this.h^P.h)};function F(P){for(var w=P.g.length+1,T=[],C=0;C<w;C++)T[C]=P.i(C)<<1|P.i(C-1)>>>31;return new o(T,P.h)}function X(P,w){var T=w>>5;w%=32;for(var C=P.g.length-T,x=[],D=0;D<C;D++)x[D]=0<w?P.i(D+T)>>>w|P.i(D+T+1)<<32-w:P.i(D+T);return new o(x,P.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,R_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,jr=o}).apply(typeof Pm<"u"?Pm:typeof self<"u"?self:typeof window<"u"?window:{});var xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var D_,Ji,k_,Qa,zu,O_,x_,N_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,g){return a==Array.prototype||a==Object.prototype||(a[f]=g.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof xa=="object"&&xa];for(var f=0;f<a.length;++f){var g=a[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(a,f){if(f)e:{var g=r;a=a.split(".");for(var b=0;b<a.length-1;b++){var L=a[b];if(!(L in g))break e;g=g[L]}a=a[a.length-1],b=g[a],f=f(b),f!=b&&f!=null&&e(g,a,{configurable:!0,writable:!0,value:f})}}function i(a,f){a instanceof String&&(a+="");var g=0,b=!1,L={next:function(){if(!b&&g<a.length){var B=g++;return{value:f(B,a[B]),done:!1}}return b=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(a){return a||function(){return i(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function u(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function h(a,f,g){return a.call.apply(a.bind,arguments)}function m(a,f,g){if(!a)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,b),a.apply(f,L)}}return function(){return a.apply(f,arguments)}}function p(a,f,g){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:m,p.apply(null,arguments)}function v(a,f){var g=Array.prototype.slice.call(arguments,1);return function(){var b=g.slice();return b.push.apply(b,arguments),a.apply(this,b)}}function R(a,f){function g(){}g.prototype=f.prototype,a.aa=f.prototype,a.prototype=new g,a.prototype.constructor=a,a.Qb=function(b,L,B){for(var re=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)re[Ke-2]=arguments[Ke];return f.prototype[L].apply(b,re)}}function I(a){const f=a.length;if(0<f){const g=Array(f);for(let b=0;b<f;b++)g[b]=a[b];return g}return[]}function E(a,f){for(let g=1;g<arguments.length;g++){const b=arguments[g];if(l(b)){const L=a.length||0,B=b.length||0;a.length=L+B;for(let re=0;re<B;re++)a[L+re]=b[re]}else a.push(b)}}class k{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function N(a){return/^[\s\xa0]*$/.test(a)}function $(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var F=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function X(a,f,g){for(const b in a)f.call(g,a[b],b,a)}function P(a,f){for(const g in a)f.call(void 0,a[g],g,a)}function w(a){const f={};for(const g in a)f[g]=a[g];return f}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(a,f){let g,b;for(let L=1;L<arguments.length;L++){b=arguments[L];for(g in b)a[g]=b[g];for(let B=0;B<T.length;B++)g=T[B],Object.prototype.hasOwnProperty.call(b,g)&&(a[g]=b[g])}}function x(a){var f=1;a=a.split(":");const g=[];for(;0<f&&a.length;)g.push(a.shift()),f--;return a.length&&g.push(a.join(":")),g}function D(a){c.setTimeout(()=>{throw a},0)}function S(){var a=he;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class xe{constructor(){this.h=this.g=null}add(f,g){const b=de.get();b.set(f,g),this.h?this.h.next=b:this.g=b,this.h=b}}var de=new k(()=>new ce,a=>a.reset());class ce{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,Y=!1,he=new xe,it=()=>{const a=c.Promise.resolve(void 0);Q=()=>{a.then(pt)}};var pt=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(g){D(g)}var f=de;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}Y=!1};function Ge(){this.s=this.s,this.C=this.C}Ge.prototype.s=!1,Ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var on=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const g=()=>{};c.addEventListener("test",g,f),c.removeEventListener("test",g,f)}catch{}return a}();function an(a,f){if(Me.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var g=this.type=a.type,b=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(F){e:{try{V(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else g=="mouseover"?f=a.fromElement:g=="mouseout"&&(f=a.toElement);this.relatedTarget=f,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ot[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&an.aa.h.call(this)}}R(an,Me);var Ot={2:"touch",3:"pen",4:"mouse"};an.prototype.h=function(){an.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var H="closure_listenable_"+(1e6*Math.random()|0),le=0;function ie(a,f,g,b,L){this.listener=a,this.proxy=null,this.src=f,this.type=g,this.capture=!!b,this.ha=L,this.key=++le,this.da=this.fa=!1}function fe(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Le(a){this.src=a,this.g={},this.h=0}Le.prototype.add=function(a,f,g,b,L){var B=a.toString();a=this.g[B],a||(a=this.g[B]=[],this.h++);var re=O(a,f,b,L);return-1<re?(f=a[re],g||(f.fa=!1)):(f=new ie(f,this.src,B,!!b,L),f.fa=g,a.push(f)),f};function A(a,f){var g=f.type;if(g in a.g){var b=a.g[g],L=Array.prototype.indexOf.call(b,f,void 0),B;(B=0<=L)&&Array.prototype.splice.call(b,L,1),B&&(fe(f),a.g[g].length==0&&(delete a.g[g],a.h--))}}function O(a,f,g,b){for(var L=0;L<a.length;++L){var B=a[L];if(!B.da&&B.listener==f&&B.capture==!!g&&B.ha==b)return L}return-1}var M="closure_lm_"+(1e6*Math.random()|0),z={};function K(a,f,g,b,L){if(Array.isArray(f)){for(var B=0;B<f.length;B++)K(a,f[B],g,b,L);return null}return g=Ae(g),a&&a[H]?a.K(f,g,u(b)?!!b.capture:!1,L):W(a,f,g,!1,b,L)}function W(a,f,g,b,L,B){if(!f)throw Error("Invalid event type");var re=u(L)?!!L.capture:!!L,Ke=se(a);if(Ke||(a[M]=Ke=new Le(a)),g=Ke.add(f,g,b,re,B),g.proxy)return g;if(b=oe(),g.proxy=b,b.src=a,b.listener=g,a.addEventListener)on||(L=re),L===void 0&&(L=!1),a.addEventListener(f.toString(),b,L);else if(a.attachEvent)a.attachEvent(J(f.toString()),b);else if(a.addListener&&a.removeListener)a.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return g}function oe(){function a(g){return f.call(a.src,a.listener,g)}const f=ve;return a}function ne(a,f,g,b,L){if(Array.isArray(f))for(var B=0;B<f.length;B++)ne(a,f[B],g,b,L);else b=u(b)?!!b.capture:!!b,g=Ae(g),a&&a[H]?(a=a.i,f=String(f).toString(),f in a.g&&(B=a.g[f],g=O(B,g,b,L),-1<g&&(fe(B[g]),Array.prototype.splice.call(B,g,1),B.length==0&&(delete a.g[f],a.h--)))):a&&(a=se(a))&&(f=a.g[f.toString()],a=-1,f&&(a=O(f,g,b,L)),(g=-1<a?f[a]:null)&&te(g))}function te(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[H])A(f.i,a);else{var g=a.type,b=a.proxy;f.removeEventListener?f.removeEventListener(g,b,a.capture):f.detachEvent?f.detachEvent(J(g),b):f.addListener&&f.removeListener&&f.removeListener(b),(g=se(f))?(A(g,a),g.h==0&&(g.src=null,f[M]=null)):fe(a)}}}function J(a){return a in z?z[a]:z[a]="on"+a}function ve(a,f){if(a.da)a=!0;else{f=new an(f,this);var g=a.listener,b=a.ha||a.src;a.fa&&te(a),a=g.call(b,f)}return a}function se(a){return a=a[M],a instanceof Le?a:null}var ge="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ae(a){return typeof a=="function"?a:(a[ge]||(a[ge]=function(f){return a.handleEvent(f)}),a[ge])}function we(){Ge.call(this),this.i=new Le(this),this.M=this,this.F=null}R(we,Ge),we.prototype[H]=!0,we.prototype.removeEventListener=function(a,f,g,b){ne(this,a,f,g,b)};function ke(a,f){var g,b=a.F;if(b)for(g=[];b;b=b.F)g.push(b);if(a=a.M,b=f.type||f,typeof f=="string")f=new Me(f,a);else if(f instanceof Me)f.target=f.target||a;else{var L=f;f=new Me(b,a),C(f,L)}if(L=!0,g)for(var B=g.length-1;0<=B;B--){var re=f.g=g[B];L=Ue(re,b,!0,f)&&L}if(re=f.g=a,L=Ue(re,b,!0,f)&&L,L=Ue(re,b,!1,f)&&L,g)for(B=0;B<g.length;B++)re=f.g=g[B],L=Ue(re,b,!1,f)&&L}we.prototype.N=function(){if(we.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var g=a.g[f],b=0;b<g.length;b++)fe(g[b]);delete a.g[f],a.h--}}this.F=null},we.prototype.K=function(a,f,g,b){return this.i.add(String(a),f,!1,g,b)},we.prototype.L=function(a,f,g,b){return this.i.add(String(a),f,!0,g,b)};function Ue(a,f,g,b){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,B=0;B<f.length;++B){var re=f[B];if(re&&!re.da&&re.capture==g){var Ke=re.listener,At=re.ha||re.src;re.fa&&A(a.i,re),L=Ke.call(At,b)!==!1&&L}}return L&&!b.defaultPrevented}function Tt(a,f,g){if(typeof a=="function")g&&(a=p(a,g));else if(a&&typeof a.handleEvent=="function")a=p(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:c.setTimeout(a,f||0)}function It(a){a.g=Tt(()=>{a.g=null,a.i&&(a.i=!1,It(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class ln extends Ge{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:It(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xt(a){Ge.call(this),this.h=a,this.g={}}R(xt,Ge);var _r=[];function Oi(a){X(a.g,function(f,g){this.g.hasOwnProperty(g)&&te(f)},a),a.g={}}xt.prototype.N=function(){xt.aa.N.call(this),Oi(this)},xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var St=c.JSON.stringify,cn=c.JSON.parse,ha=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Pc(){}Pc.prototype.h=null;function nf(a){return a.h||(a.h=a.i())}function rf(){}var xi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Cc(){Me.call(this,"d")}R(Cc,Me);function Rc(){Me.call(this,"c")}R(Rc,Me);var cs={},sf=null;function fa(){return sf=sf||new we}cs.La="serverreachability";function of(a){Me.call(this,cs.La,a)}R(of,Me);function Ni(a){const f=fa();ke(f,new of(f))}cs.STAT_EVENT="statevent";function af(a,f){Me.call(this,cs.STAT_EVENT,a),this.stat=f}R(af,Me);function qt(a){const f=fa();ke(f,new af(f,a))}cs.Ma="timingevent";function lf(a,f){Me.call(this,cs.Ma,a),this.size=f}R(lf,Me);function Vi(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},f)}function Mi(){this.g=!0}Mi.prototype.xa=function(){this.g=!1};function Kb(a,f,g,b,L,B){a.info(function(){if(a.g)if(B)for(var re="",Ke=B.split("&"),At=0;At<Ke.length;At++){var qe=Ke[At].split("=");if(1<qe.length){var Nt=qe[0];qe=qe[1];var Vt=Nt.split("_");re=2<=Vt.length&&Vt[1]=="type"?re+(Nt+"="+qe+"&"):re+(Nt+"=redacted&")}}else re=null;else re=B;return"XMLHTTP REQ ("+b+") [attempt "+L+"]: "+f+`
`+g+`
`+re})}function Yb(a,f,g,b,L,B,re){a.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+L+"]: "+f+`
`+g+`
`+B+" "+re})}function $s(a,f,g,b){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Qb(a,g)+(b?" "+b:"")})}function Xb(a,f){a.info(function(){return"TIMEOUT: "+f})}Mi.prototype.info=function(){};function Qb(a,f){if(!a.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(a=0;a<g.length;a++)if(Array.isArray(g[a])){var b=g[a];if(!(2>b.length)){var L=b[1];if(Array.isArray(L)&&!(1>L.length)){var B=L[0];if(B!="noop"&&B!="stop"&&B!="close")for(var re=1;re<L.length;re++)L[re]=""}}}}return St(g)}catch{return f}}var pa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dc;function ma(){}R(ma,Pc),ma.prototype.g=function(){return new XMLHttpRequest},ma.prototype.i=function(){return{}},Dc=new ma;function br(a,f,g,b){this.j=a,this.i=f,this.l=g,this.R=b||1,this.U=new xt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new uf}function uf(){this.i=null,this.g="",this.h=!1}var df={},kc={};function Oc(a,f,g){a.L=1,a.v=_a(qn(f)),a.m=g,a.P=!0,hf(a,null)}function hf(a,f){a.F=Date.now(),ga(a),a.A=qn(a.v);var g=a.A,b=a.R;Array.isArray(b)||(b=[String(b)]),Af(g.i,"t",b),a.C=0,g=a.j.J,a.h=new uf,a.g=Hf(a.j,g?f:null,!a.m),0<a.O&&(a.M=new ln(p(a.Y,a,a.g),a.O)),f=a.U,g=a.g,b=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(_r[0]=L.toString()),L=_r);for(var B=0;B<L.length;B++){var re=K(g,L[B],b||f.handleEvent,!1,f.h||f);if(!re)break;f.g[re.key]=re}f=a.H?w(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),Ni(),Kb(a.i,a.u,a.A,a.l,a.R,a.m)}br.prototype.ca=function(a){a=a.target;const f=this.M;f&&Hn(a)==3?f.j():this.Y(a)},br.prototype.Y=function(a){try{if(a==this.g)e:{const Vt=Hn(this.g);var f=this.g.Ba();const Bs=this.g.Z();if(!(3>Vt)&&(Vt!=3||this.g&&(this.h.h||this.g.oa()||xf(this.g)))){this.J||Vt!=4||f==7||(f==8||0>=Bs?Ni(3):Ni(2)),xc(this);var g=this.g.Z();this.X=g;t:if(ff(this)){var b=xf(this.g);a="";var L=b.length,B=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){us(this),Li(this);var re="";break t}this.h.i=new c.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,a+=this.h.i.decode(b[f],{stream:!(B&&f==L-1)});b.length=0,this.h.g+=a,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=g==200,Yb(this.i,this.u,this.A,this.l,this.R,Vt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ke,At=this.g;if((Ke=At.g?At.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(Ke)){var qe=Ke;break t}}qe=null}if(g=qe)$s(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nc(this,g);else{this.o=!1,this.s=3,qt(12),us(this),Li(this);break e}}if(this.P){g=!0;let yn;for(;!this.J&&this.C<re.length;)if(yn=Jb(this,re),yn==kc){Vt==4&&(this.s=4,qt(14),g=!1),$s(this.i,this.l,null,"[Incomplete Response]");break}else if(yn==df){this.s=4,qt(15),$s(this.i,this.l,re,"[Invalid Chunk]"),g=!1;break}else $s(this.i,this.l,yn,null),Nc(this,yn);if(ff(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Vt!=4||re.length!=0||this.h.h||(this.s=1,qt(16),g=!1),this.o=this.o&&g,!g)$s(this.i,this.l,re,"[Invalid Chunked Response]"),us(this),Li(this);else if(0<re.length&&!this.W){this.W=!0;var Nt=this.j;Nt.g==this&&Nt.ba&&!Nt.M&&(Nt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),Uc(Nt),Nt.M=!0,qt(11))}}else $s(this.i,this.l,re,null),Nc(this,re);Vt==4&&us(this),this.o&&!this.J&&(Vt==4?Uf(this.j,this):(this.o=!1,ga(this)))}else m0(this.g),g==400&&0<re.indexOf("Unknown SID")?(this.s=3,qt(12)):(this.s=0,qt(13)),us(this),Li(this)}}}catch{}finally{}};function ff(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Jb(a,f){var g=a.C,b=f.indexOf(`
`,g);return b==-1?kc:(g=Number(f.substring(g,b)),isNaN(g)?df:(b+=1,b+g>f.length?kc:(f=f.slice(b,b+g),a.C=b+g,f)))}br.prototype.cancel=function(){this.J=!0,us(this)};function ga(a){a.S=Date.now()+a.I,pf(a,a.I)}function pf(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Vi(p(a.ba,a),f)}function xc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}br.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Xb(this.i,this.A),this.L!=2&&(Ni(),qt(17)),us(this),this.s=2,Li(this)):pf(this,this.S-a)};function Li(a){a.j.G==0||a.J||Uf(a.j,a)}function us(a){xc(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,Oi(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function Nc(a,f){try{var g=a.j;if(g.G!=0&&(g.g==a||Vc(g.h,a))){if(!a.K&&Vc(g.h,a)&&g.G==3){try{var b=g.Da.g.parse(f)}catch{b=null}if(Array.isArray(b)&&b.length==3){var L=b;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<a.F)Sa(g),Ta(g);else break e;Fc(g),qt(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=Vi(p(g.Za,g),6e3));if(1>=yf(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else hs(g,11)}else if((a.K||g.g==a)&&Sa(g),!N(f))for(L=g.Da.g.parse(f),f=0;f<L.length;f++){let qe=L[f];if(g.T=qe[0],qe=qe[1],g.G==2)if(qe[0]=="c"){g.K=qe[1],g.ia=qe[2];const Nt=qe[3];Nt!=null&&(g.la=Nt,g.j.info("VER="+g.la));const Vt=qe[4];Vt!=null&&(g.Aa=Vt,g.j.info("SVER="+g.Aa));const Bs=qe[5];Bs!=null&&typeof Bs=="number"&&0<Bs&&(b=1.5*Bs,g.L=b,g.j.info("backChannelRequestTimeoutMs_="+b)),b=g;const yn=a.g;if(yn){const Pa=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pa){var B=b.h;B.g||Pa.indexOf("spdy")==-1&&Pa.indexOf("quic")==-1&&Pa.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Mc(B,B.h),B.h=null))}if(b.D){const Bc=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;Bc&&(b.ya=Bc,nt(b.I,b.D,Bc))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-a.F,g.j.info("Handshake RTT: "+g.R+"ms")),b=g;var re=a;if(b.qa=qf(b,b.J?b.ia:null,b.W),re.K){vf(b.h,re);var Ke=re,At=b.L;At&&(Ke.I=At),Ke.B&&(xc(Ke),ga(Ke)),b.g=re}else $f(b);0<g.i.length&&Ia(g)}else qe[0]!="stop"&&qe[0]!="close"||hs(g,7);else g.G==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?hs(g,7):$c(g):qe[0]!="noop"&&g.l&&g.l.ta(qe),g.v=0)}}Ni(4)}catch{}}var Zb=class{constructor(a,f){this.g=a,this.map=f}};function mf(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function gf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function yf(a){return a.h?1:a.g?a.g.size:0}function Vc(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Mc(a,f){a.g?a.g.add(f):a.h=f}function vf(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}mf.prototype.cancel=function(){if(this.i=_f(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function _f(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const g of a.g.values())f=f.concat(g.D);return f}return I(a.i)}function e0(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var f=[],g=a.length,b=0;b<g;b++)f.push(a[b]);return f}f=[],g=0;for(b in a)f[g++]=a[b];return f}function t0(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var f=[];a=a.length;for(var g=0;g<a;g++)f.push(g);return f}f=[],g=0;for(const b in a)f[g++]=b;return f}}}function bf(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var g=t0(a),b=e0(a),L=b.length,B=0;B<L;B++)f.call(void 0,b[B],g&&g[B],a)}var wf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function n0(a,f){if(a){a=a.split("&");for(var g=0;g<a.length;g++){var b=a[g].indexOf("="),L=null;if(0<=b){var B=a[g].substring(0,b);L=a[g].substring(b+1)}else B=a[g];f(B,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ds(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ds){this.h=a.h,ya(this,a.j),this.o=a.o,this.g=a.g,va(this,a.s),this.l=a.l;var f=a.i,g=new Ui;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Ef(this,g),this.m=a.m}else a&&(f=String(a).match(wf))?(this.h=!1,ya(this,f[1]||"",!0),this.o=$i(f[2]||""),this.g=$i(f[3]||"",!0),va(this,f[4]),this.l=$i(f[5]||"",!0),Ef(this,f[6]||"",!0),this.m=$i(f[7]||"")):(this.h=!1,this.i=new Ui(null,this.h))}ds.prototype.toString=function(){var a=[],f=this.j;f&&a.push(Fi(f,Tf,!0),":");var g=this.g;return(g||f=="file")&&(a.push("//"),(f=this.o)&&a.push(Fi(f,Tf,!0),"@"),a.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&a.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&a.push("/"),a.push(Fi(g,g.charAt(0)=="/"?i0:s0,!0))),(g=this.i.toString())&&a.push("?",g),(g=this.m)&&a.push("#",Fi(g,a0)),a.join("")};function qn(a){return new ds(a)}function ya(a,f,g){a.j=g?$i(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function va(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function Ef(a,f,g){f instanceof Ui?(a.i=f,l0(a.i,a.h)):(g||(f=Fi(f,o0)),a.i=new Ui(f,a.h))}function nt(a,f,g){a.i.set(f,g)}function _a(a){return nt(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function $i(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Fi(a,f,g){return typeof a=="string"?(a=encodeURI(a).replace(f,r0),g&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function r0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Tf=/[#\/\?@]/g,s0=/[#\?:]/g,i0=/[#\?]/g,o0=/[#\?@]/g,a0=/#/g;function Ui(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function wr(a){a.g||(a.g=new Map,a.h=0,a.i&&n0(a.i,function(f,g){a.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}t=Ui.prototype,t.add=function(a,f){wr(this),this.i=null,a=Fs(this,a);var g=this.g.get(a);return g||this.g.set(a,g=[]),g.push(f),this.h+=1,this};function If(a,f){wr(a),f=Fs(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Sf(a,f){return wr(a),f=Fs(a,f),a.g.has(f)}t.forEach=function(a,f){wr(this),this.g.forEach(function(g,b){g.forEach(function(L){a.call(f,L,b,this)},this)},this)},t.na=function(){wr(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let b=0;b<f.length;b++){const L=a[b];for(let B=0;B<L.length;B++)g.push(f[b])}return g},t.V=function(a){wr(this);let f=[];if(typeof a=="string")Sf(this,a)&&(f=f.concat(this.g.get(Fs(this,a))));else{a=Array.from(this.g.values());for(let g=0;g<a.length;g++)f=f.concat(a[g])}return f},t.set=function(a,f){return wr(this),this.i=null,a=Fs(this,a),Sf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function Af(a,f,g){If(a,f),0<g.length&&(a.i=null,a.g.set(Fs(a,f),I(g)),a.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var b=f[g];const B=encodeURIComponent(String(b)),re=this.V(b);for(b=0;b<re.length;b++){var L=B;re[b]!==""&&(L+="="+encodeURIComponent(String(re[b]))),a.push(L)}}return this.i=a.join("&")};function Fs(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function l0(a,f){f&&!a.j&&(wr(a),a.i=null,a.g.forEach(function(g,b){var L=b.toLowerCase();b!=L&&(If(this,b),Af(this,L,g))},a)),a.j=f}function c0(a,f){const g=new Mi;if(c.Image){const b=new Image;b.onload=v(Er,g,"TestLoadImage: loaded",!0,f,b),b.onerror=v(Er,g,"TestLoadImage: error",!1,f,b),b.onabort=v(Er,g,"TestLoadImage: abort",!1,f,b),b.ontimeout=v(Er,g,"TestLoadImage: timeout",!1,f,b),c.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=a}else f(!1)}function u0(a,f){const g=new Mi,b=new AbortController,L=setTimeout(()=>{b.abort(),Er(g,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:b.signal}).then(B=>{clearTimeout(L),B.ok?Er(g,"TestPingServer: ok",!0,f):Er(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Er(g,"TestPingServer: error",!1,f)})}function Er(a,f,g,b,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),b(g)}catch{}}function d0(){this.g=new ha}function h0(a,f,g){const b=g||"";try{bf(a,function(L,B){let re=L;u(L)&&(re=St(L)),f.push(b+B+"="+encodeURIComponent(re))})}catch(L){throw f.push(b+"type="+encodeURIComponent("_badmap")),L}}function ba(a){this.l=a.Ub||null,this.j=a.eb||!1}R(ba,Pc),ba.prototype.g=function(){return new wa(this.l,this.j)},ba.prototype.i=function(a){return function(){return a}}({});function wa(a,f){we.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(wa,we),t=wa.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,ji(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||c).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ji(this)),this.g&&(this.readyState=3,ji(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?Bi(this):ji(this),this.readyState==3&&Pf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Bi(this))},t.Qa=function(a){this.g&&(this.response=a,Bi(this))},t.ga=function(){this.g&&Bi(this)};function Bi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ji(a)}t.setRequestHeader=function(a,f){this.u.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,a.push(g[0]+": "+g[1]),g=f.next();return a.join(`\r
`)};function ji(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(wa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Cf(a){let f="";return X(a,function(g,b){f+=b,f+=":",f+=g,f+=`\r
`}),f}function Lc(a,f,g){e:{for(b in g){var b=!1;break e}b=!0}b||(g=Cf(g),typeof a=="string"?g!=null&&encodeURIComponent(String(g)):nt(a,f,g))}function ot(a){we.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(ot,we);var f0=/^https?$/i,p0=["POST","PUT"];t=ot.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,f,g,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dc.g(),this.v=this.o?nf(this.o):nf(Dc),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(B){Rf(this,B);return}if(a=g||"",g=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var L in b)g.set(L,b[L]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const B of b.keys())g.set(B,b.get(B));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(g.keys()).find(B=>B.toLowerCase()=="content-type"),L=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(p0,f,void 0))||b||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,re]of g)this.g.setRequestHeader(B,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Of(this),this.u=!0,this.g.send(a),this.u=!1}catch(B){Rf(this,B)}};function Rf(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,Df(a),Ea(a)}function Df(a){a.A||(a.A=!0,ke(a,"complete"),ke(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ke(this,"complete"),ke(this,"abort"),Ea(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ea(this,!0)),ot.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?kf(this):this.bb())},t.bb=function(){kf(this)};function kf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Hn(a)!=4||a.Z()!=2)){if(a.u&&Hn(a)==4)Tt(a.Ea,0,a);else if(ke(a,"readystatechange"),Hn(a)==4){a.h=!1;try{const re=a.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var b;if(b=re===0){var L=String(a.D).match(wf)[1]||null;!L&&c.self&&c.self.location&&(L=c.self.location.protocol.slice(0,-1)),b=!f0.test(L?L.toLowerCase():"")}g=b}if(g)ke(a,"complete"),ke(a,"success");else{a.m=6;try{var B=2<Hn(a)?a.g.statusText:""}catch{B=""}a.l=B+" ["+a.Z()+"]",Df(a)}}finally{Ea(a)}}}}function Ea(a,f){if(a.g){Of(a);const g=a.g,b=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||ke(a,"ready");try{g.onreadystatechange=b}catch{}}}function Of(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Hn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),cn(f)}};function xf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function m0(a){const f={};a=(a.g&&2<=Hn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<a.length;b++){if(N(a[b]))continue;var g=x(a[b]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const B=f[L]||[];f[L]=B,B.push(g)}P(f,function(b){return b.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qi(a,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[a]||f}function Nf(a){this.Aa=0,this.i=[],this.j=new Mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qi("baseRetryDelayMs",5e3,a),this.cb=qi("retryDelaySeedMs",1e4,a),this.Wa=qi("forwardChannelMaxRetries",2,a),this.wa=qi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new mf(a&&a.concurrentRequestLimit),this.Da=new d0,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Nf.prototype,t.la=8,t.G=1,t.connect=function(a,f,g,b){qt(0),this.W=a,this.H=f||{},g&&b!==void 0&&(this.H.OSID=g,this.H.OAID=b),this.F=this.X,this.I=qf(this,null,this.W),Ia(this)};function $c(a){if(Vf(a),a.G==3){var f=a.U++,g=qn(a.I);if(nt(g,"SID",a.K),nt(g,"RID",f),nt(g,"TYPE","terminate"),Hi(a,g),f=new br(a,a.j,f),f.L=2,f.v=_a(qn(g)),g=!1,c.navigator&&c.navigator.sendBeacon)try{g=c.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&c.Image&&(new Image().src=f.v,g=!0),g||(f.g=Hf(f.j,null),f.g.ea(f.v)),f.F=Date.now(),ga(f)}jf(a)}function Ta(a){a.g&&(Uc(a),a.g.cancel(),a.g=null)}function Vf(a){Ta(a),a.u&&(c.clearTimeout(a.u),a.u=null),Sa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ia(a){if(!gf(a.h)&&!a.s){a.s=!0;var f=a.Ga;Q||it(),Y||(Q(),Y=!0),he.add(f,a),a.B=0}}function g0(a,f){return yf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Vi(p(a.Ga,a,f),Bf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new br(this,this.j,a);let B=this.o;if(this.S&&(B?(B=w(B),C(B,this.S)):B=this.S),this.m!==null||this.O||(L.H=B,B=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var b=this.i[g];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(f+=b,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Lf(this,L,f),g=qn(this.I),nt(g,"RID",a),nt(g,"CVER",22),this.D&&nt(g,"X-HTTP-Session-Id",this.D),Hi(this,g),B&&(this.O?f="headers="+encodeURIComponent(String(Cf(B)))+"&"+f:this.m&&Lc(g,this.m,B)),Mc(this.h,L),this.Ua&&nt(g,"TYPE","init"),this.P?(nt(g,"$req",f),nt(g,"SID","null"),L.T=!0,Oc(L,g,null)):Oc(L,g,f),this.G=2}}else this.G==3&&(a?Mf(this,a):this.i.length==0||gf(this.h)||Mf(this))};function Mf(a,f){var g;f?g=f.l:g=a.U++;const b=qn(a.I);nt(b,"SID",a.K),nt(b,"RID",g),nt(b,"AID",a.T),Hi(a,b),a.m&&a.o&&Lc(b,a.m,a.o),g=new br(a,a.j,g,a.B+1),a.m===null&&(g.H=a.o),f&&(a.i=f.D.concat(a.i)),f=Lf(a,g,1e3),g.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Mc(a.h,g),Oc(g,b,f)}function Hi(a,f){a.H&&X(a.H,function(g,b){nt(f,b,g)}),a.l&&bf({},function(g,b){nt(f,b,g)})}function Lf(a,f,g){g=Math.min(a.i.length,g);var b=a.l?p(a.l.Na,a.l,a):null;e:{var L=a.i;let B=-1;for(;;){const re=["count="+g];B==-1?0<g?(B=L[0].g,re.push("ofs="+B)):B=0:re.push("ofs="+B);let Ke=!0;for(let At=0;At<g;At++){let qe=L[At].g;const Nt=L[At].map;if(qe-=B,0>qe)B=Math.max(0,L[At].g-100),Ke=!1;else try{h0(Nt,re,"req"+qe+"_")}catch{b&&b(Nt)}}if(Ke){b=re.join("&");break e}}}return a=a.i.splice(0,g),f.D=a,b}function $f(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;Q||it(),Y||(Q(),Y=!0),he.add(f,a),a.v=0}}function Fc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Vi(p(a.Fa,a),Bf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ff(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Vi(p(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qt(10),Ta(this),Ff(this))};function Uc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Ff(a){a.g=new br(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=qn(a.qa);nt(f,"RID","rpc"),nt(f,"SID",a.K),nt(f,"AID",a.T),nt(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&nt(f,"TO",a.ja),nt(f,"TYPE","xmlhttp"),Hi(a,f),a.m&&a.o&&Lc(f,a.m,a.o),a.L&&(a.g.I=a.L);var g=a.g;a=a.ia,g.L=1,g.v=_a(qn(f)),g.m=null,g.P=!0,hf(g,a)}t.Za=function(){this.C!=null&&(this.C=null,Ta(this),Fc(this),qt(19))};function Sa(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Uf(a,f){var g=null;if(a.g==f){Sa(a),Uc(a),a.g=null;var b=2}else if(Vc(a.h,f))g=f.D,vf(a.h,f),b=1;else return;if(a.G!=0){if(f.o)if(b==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var L=a.B;b=fa(),ke(b,new lf(b,g)),Ia(a)}else $f(a);else if(L=f.s,L==3||L==0&&0<f.X||!(b==1&&g0(a,f)||b==2&&Fc(a)))switch(g&&0<g.length&&(f=a.h,f.i=f.i.concat(g)),L){case 1:hs(a,5);break;case 4:hs(a,10);break;case 3:hs(a,6);break;default:hs(a,2)}}}function Bf(a,f){let g=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(g*=2),g*f}function hs(a,f){if(a.j.info("Error code "+f),f==2){var g=p(a.fb,a),b=a.Xa;const L=!b;b=new ds(b||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ya(b,"https"),_a(b),L?c0(b.toString(),g):u0(b.toString(),g)}else qt(2);a.G=0,a.l&&a.l.sa(f),jf(a),Vf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),qt(2)):(this.j.info("Failed to ping google.com"),qt(1))};function jf(a){if(a.G=0,a.ka=[],a.l){const f=_f(a.h);(f.length!=0||a.i.length!=0)&&(E(a.ka,f),E(a.ka,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.ra()}}function qf(a,f,g){var b=g instanceof ds?qn(g):new ds(g);if(b.g!="")f&&(b.g=f+"."+b.g),va(b,b.s);else{var L=c.location;b=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var B=new ds(null);b&&ya(B,b),f&&(B.g=f),L&&va(B,L),g&&(B.l=g),b=B}return g=a.D,f=a.ya,g&&f&&nt(b,g,f),nt(b,"VER",a.la),Hi(a,b),b}function Hf(a,f,g){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new ot(new ba({eb:g})):new ot(a.pa),f.Ha(a.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function zf(){}t=zf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Aa(){}Aa.prototype.g=function(a,f){return new Zt(a,f)};function Zt(a,f){we.call(this),this.g=new Nf(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!N(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!N(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new Us(this)}R(Zt,we),Zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Zt.prototype.close=function(){$c(this.g)},Zt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var g={};g.__data__=a,a=g}else this.u&&(g={},g.__data__=St(a),a=g);f.i.push(new Zb(f.Ya++,a)),f.G==3&&Ia(f)},Zt.prototype.N=function(){this.g.l=null,delete this.j,$c(this.g),delete this.g,Zt.aa.N.call(this)};function Wf(a){Cc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const g in f){a=g;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}R(Wf,Cc);function Gf(){Rc.call(this),this.status=1}R(Gf,Rc);function Us(a){this.g=a}R(Us,zf),Us.prototype.ua=function(){ke(this.g,"a")},Us.prototype.ta=function(a){ke(this.g,new Wf(a))},Us.prototype.sa=function(a){ke(this.g,new Gf)},Us.prototype.ra=function(){ke(this.g,"b")},Aa.prototype.createWebChannel=Aa.prototype.g,Zt.prototype.send=Zt.prototype.o,Zt.prototype.open=Zt.prototype.m,Zt.prototype.close=Zt.prototype.close,N_=function(){return new Aa},x_=function(){return fa()},O_=cs,zu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pa.NO_ERROR=0,pa.TIMEOUT=8,pa.HTTP_ERROR=6,Qa=pa,cf.COMPLETE="complete",k_=cf,rf.EventType=xi,xi.OPEN="a",xi.CLOSE="b",xi.ERROR="c",xi.MESSAGE="d",we.prototype.listen=we.prototype.K,Ji=rf,ot.prototype.listenOnce=ot.prototype.L,ot.prototype.getLastError=ot.prototype.Ka,ot.prototype.getLastErrorCode=ot.prototype.Ba,ot.prototype.getStatus=ot.prototype.Z,ot.prototype.getResponseJson=ot.prototype.Oa,ot.prototype.getResponseText=ot.prototype.oa,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Ha,D_=ot}).apply(typeof xa<"u"?xa:typeof self<"u"?self:typeof window<"u"?window:{});const Cm="@firebase/firestore",Rm="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ds=new Yd("@firebase/firestore");function Ks(){return Ds.logLevel}function ue(t,...e){if(Ds.logLevel<=$e.DEBUG){const n=e.map(uh);Ds.debug(`Firestore (${Si}): ${t}`,...n)}}function cr(t,...e){if(Ds.logLevel<=$e.ERROR){const n=e.map(uh);Ds.error(`Firestore (${Si}): ${t}`,...n)}}function Kr(t,...e){if(Ds.logLevel<=$e.WARN){const n=e.map(uh);Ds.warn(`Firestore (${Si}): ${t}`,...n)}}function uh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Se(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,V_(t,r,n)}function V_(t,e,n){let r=`FIRESTORE (${Si}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw cr(r),new Error(r)}function We(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||V_(e,s,r)}function Re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends mr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($t.UNAUTHENTICATED))}shutdown(){}}class iC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class oC{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){We(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new sr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(We(typeof r.accessToken=="string",31837,{l:r}),new M_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return We(e===null||typeof e=="string",2055,{h:e}),new $t(e)}}class aC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class lC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new aC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,tn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){We(this.o===void 0,3512);const r=i=>{i.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ue("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Dm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(We(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Dm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function L_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=uC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ne(t,e){return t<e?-1:t>e?1:0}function Wu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Ne(r,s);{const i=L_(),o=dC(i.encode(km(t,n)),i.encode(km(e,n)));return o!==0?o:Ne(r,s)}}n+=r>65535?2:1}return Ne(t.length,e.length)}function km(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function dC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Ne(t[n],e[n]);return Ne(t.length,e.length)}function mi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="__name__";class Rn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Se(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Se(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Rn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ne(e.length,n.length)}static compareSegments(e,n){const r=Rn.isNumericId(e),s=Rn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Rn.extractNumericId(e).compare(Rn.extractNumericId(n)):Wu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return jr.fromString(e.substring(4,e.length-2))}}class et extends Rn{construct(e,n,r){return new et(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ae(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new et(n)}static emptyPath(){return new et([])}}const hC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends Rn{construct(e,n,r){return new Dt(e,n,r)}static isValidIdentifier(e){return hC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Om}static keyField(){return new Dt([Om])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ae(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ae(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ae(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ae(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(n)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.path=e}static fromPath(e){return new be(et.fromString(e))}static fromName(e){return new be(et.fromString(e).popFirst(5))}static empty(){return new be(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&et.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return et.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new be(new et(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(t,e,n){if(!n)throw new ae(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fC(t,e,n,r){if(e===!0&&r===!0)throw new ae(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xm(t){if(!be.isDocumentKey(t))throw new ae(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Nm(t){if(be.isDocumentKey(t))throw new ae(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function F_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function sc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Se(12329,{type:typeof t})}function mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ae(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sc(t);throw new ae(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function yt(t,e){const n={typeString:t};return e&&(n.value=e),n}function ta(t,e){if(!F_(t))throw new ae(q.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ae(q.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=-62135596800,Mm=1e6;class Oe{static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Mm);return new Oe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ae(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ae(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Vm)throw new ae(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Mm}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ta(e,Oe._jsonSchema))return new Oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Vm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Oe._jsonSchemaVersion="firestore/timestamp/1.0",Oe._jsonSchema={type:yt("string",Oe._jsonSchemaVersion),seconds:yt("number"),nanoseconds:yt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{static fromTimestamp(e){return new Pe(e)}static min(){return new Pe(new Oe(0,0))}static max(){return new Pe(new Oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Vo=-1;function pC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Pe.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new Yr(s,be.empty(),e)}function mC(t){return new Yr(t.readTime,t.key,Vo)}class Yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yr(Pe.min(),be.empty(),Vo)}static max(){return new Yr(Pe.max(),be.empty(),Vo)}}function gC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=be.comparator(t.documentKey,e.documentKey),n!==0?n:Ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new G((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof G?n:G.resolve(n)}catch(n){return G.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):G.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):G.reject(n)}static resolve(e){return new G((n,r)=>{n(e)})}static reject(e){return new G((n,r)=>{r(e)})}static waitFor(e){return new G((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=G.resolve(!1);for(const r of e)n=n.next(s=>s?G.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new G((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++c,c===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new G((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function _C(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Pi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const hh=-1;function oc(t){return t==null}function Tl(t){return t===0&&1/t==-1/0}function bC(t){return typeof t=="number"&&Number.isInteger(t)&&!Tl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="";function wC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Lm(e)),e=EC(t.get(n),e);return Lm(e)}function EC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case U_:n+="";break;default:n+=i}}return n}function Lm(t){return t+U_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function os(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function B_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){this.comparator=e,this.root=n||Pt.EMPTY}insert(e,n){return new st(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Na(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Na(this.root,e,this.comparator,!1)}getReverseIterator(){return new Na(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Na(this.root,e,this.comparator,!0)}}class Na{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Pt.RED,this.left=s??Pt.EMPTY,this.right=i??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Pt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Se(27949);return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw Se(57766)}get value(){throw Se(16141)}get color(){throw Se(16727)}get left(){throw Se(29726)}get right(){throw Se(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fm(this.data.getIterator())}getIteratorFrom(e){return new Fm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _t(this.comparator);return n.data=e,n}}class Fm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new rn([])}unionWith(e){let n=new _t(Dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class j_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new j_("Invalid base64 string: "+i):i}}(e);return new kt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const TC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xr(t){if(We(!!t,39018),typeof t=="string"){let e=0;const n=TC.exec(t);if(We(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ut(t.seconds),nanos:ut(t.nanos)}}function ut(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qr(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_="server_timestamp",H_="__type__",z_="__previous_value__",W_="__local_write_time__";function fh(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[H_])===null||n===void 0?void 0:n.stringValue)===q_}function ac(t){const e=t.mapValue.fields[z_];return fh(e)?ac(e):e}function Mo(t){const e=Xr(t.mapValue.fields[W_].timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n,r,s,i,o,c,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h}}const Il="(default)";class Lo{constructor(e,n){this.projectId=e,this.database=n||Il}static empty(){return new Lo("","")}get isDefaultDatabase(){return this.database===Il}isEqual(e){return e instanceof Lo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_="__type__",SC="__max__",Va={mapValue:{}},K_="__vector__",Sl="value";function Jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fh(t)?4:PC(t)?9007199254740991:AC(t)?10:11:Se(28295,{value:t})}function Un(t,e){if(t===e)return!0;const n=Jr(t);if(n!==Jr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mo(t).isEqual(Mo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Xr(s.timestampValue),c=Xr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Qr(s.bytesValue).isEqual(Qr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ut(s.geoPointValue.latitude)===ut(i.geoPointValue.latitude)&&ut(s.geoPointValue.longitude)===ut(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ut(s.integerValue)===ut(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ut(s.doubleValue),c=ut(i.doubleValue);return o===c?Tl(o)===Tl(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return mi(t.arrayValue.values||[],e.arrayValue.values||[],Un);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if($m(o)!==$m(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Un(o[l],c[l])))return!1;return!0}(t,e);default:return Se(52216,{left:t})}}function $o(t,e){return(t.values||[]).find(n=>Un(n,e))!==void 0}function gi(t,e){if(t===e)return 0;const n=Jr(t),r=Jr(e);if(n!==r)return Ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ne(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=ut(i.integerValue||i.doubleValue),l=ut(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Um(t.timestampValue,e.timestampValue);case 4:return Um(Mo(t),Mo(e));case 5:return Wu(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Qr(i),l=Qr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const h=Ne(c[u],l[u]);if(h!==0)return h}return Ne(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Ne(ut(i.latitude),ut(o.latitude));return c!==0?c:Ne(ut(i.longitude),ut(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Bm(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,h;const m=i.fields||{},p=o.fields||{},v=(c=m[Sl])===null||c===void 0?void 0:c.arrayValue,R=(l=p[Sl])===null||l===void 0?void 0:l.arrayValue,I=Ne(((u=v?.values)===null||u===void 0?void 0:u.length)||0,((h=R?.values)===null||h===void 0?void 0:h.length)||0);return I!==0?I:Bm(v,R)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Va.mapValue&&o===Va.mapValue)return 0;if(i===Va.mapValue)return 1;if(o===Va.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let m=0;m<l.length&&m<h.length;++m){const p=Wu(l[m],h[m]);if(p!==0)return p;const v=gi(c[l[m]],u[h[m]]);if(v!==0)return v}return Ne(l.length,h.length)}(t.mapValue,e.mapValue);default:throw Se(23264,{le:n})}}function Um(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ne(t,e);const n=Xr(t),r=Xr(e),s=Ne(n.seconds,r.seconds);return s!==0?s:Ne(n.nanos,r.nanos)}function Bm(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=gi(n[s],r[s]);if(i)return i}return Ne(n.length,r.length)}function yi(t){return Gu(t)}function Gu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Xr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return be.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Gu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Gu(n.fields[o])}`;return s+"}"}(t.mapValue):Se(61005,{value:t})}function Ja(t){switch(Jr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ac(t);return e?16+Ja(e):16;case 5:return 2*t.stringValue.length;case 6:return Qr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ja(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return os(r.fields,(i,o)=>{s+=i.length+Ja(o)}),s}(t.mapValue);default:throw Se(13486,{value:t})}}function jm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ku(t){return!!t&&"integerValue"in t}function ph(t){return!!t&&"arrayValue"in t}function qm(t){return!!t&&"nullValue"in t}function Hm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Za(t){return!!t&&"mapValue"in t}function AC(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[G_])===null||n===void 0?void 0:n.stringValue)===K_}function yo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return os(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function PC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===SC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.value=e}static empty(){return new Xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Za(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yo(n)}setAll(e){let n=Dt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=yo(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Za(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Za(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){os(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Xt(yo(this.value))}}function Y_(t){const e=[];return os(t.fields,(n,r)=>{const s=new Dt([n]);if(Za(r)){const i=Y_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new rn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Ut(e,0,Pe.min(),Pe.min(),Pe.min(),Xt.empty(),0)}static newFoundDocument(e,n,r,s){return new Ut(e,1,n,Pe.min(),r,s,0)}static newNoDocument(e,n){return new Ut(e,2,n,Pe.min(),Pe.min(),Xt.empty(),0)}static newUnknownDocument(e,n){return new Ut(e,3,n,Pe.min(),Pe.min(),Xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Al{constructor(e,n){this.position=e,this.inclusive=n}}function zm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=be.comparator(be.fromName(o.referenceValue),n.key):r=gi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Un(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Fo{constructor(e,n="asc"){this.field=e,this.dir=n}}function CC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class X_{}class gt extends X_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new DC(e,n,r):n==="array-contains"?new xC(e,r):n==="in"?new NC(e,r):n==="not-in"?new VC(e,r):n==="array-contains-any"?new MC(e,r):new gt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new kC(e,r):new OC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(gi(n,this.value)):n!==null&&Jr(this.value)===Jr(n)&&this.matchesComparison(gi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tn extends X_{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Tn(e,n)}matches(e){return Q_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Q_(t){return t.op==="and"}function J_(t){return RC(t)&&Q_(t)}function RC(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function Yu(t){if(t instanceof gt)return t.field.canonicalString()+t.op.toString()+yi(t.value);if(J_(t))return t.filters.map(e=>Yu(e)).join(",");{const e=t.filters.map(n=>Yu(n)).join(",");return`${t.op}(${e})`}}function Z_(t,e){return t instanceof gt?function(r,s){return s instanceof gt&&r.op===s.op&&r.field.isEqual(s.field)&&Un(r.value,s.value)}(t,e):t instanceof Tn?function(r,s){return s instanceof Tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Z_(o,s.filters[c]),!0):!1}(t,e):void Se(19439)}function e1(t){return t instanceof gt?function(n){return`${n.field.canonicalString()} ${n.op} ${yi(n.value)}`}(t):t instanceof Tn?function(n){return n.op.toString()+" {"+n.getFilters().map(e1).join(" ,")+"}"}(t):"Filter"}class DC extends gt{constructor(e,n,r){super(e,n,r),this.key=be.fromName(r.referenceValue)}matches(e){const n=be.comparator(e.key,this.key);return this.matchesComparison(n)}}class kC extends gt{constructor(e,n){super(e,"in",n),this.keys=t1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class OC extends gt{constructor(e,n){super(e,"not-in",n),this.keys=t1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function t1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>be.fromName(r.referenceValue))}class xC extends gt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ph(n)&&$o(n.arrayValue,this.value)}}class NC extends gt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$o(this.value.arrayValue,n)}}class VC extends gt{constructor(e,n){super(e,"not-in",n)}matches(e){if($o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!$o(this.value.arrayValue,n)}}class MC extends gt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ph(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$o(this.value.arrayValue,r))}}/**
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
 */class LC{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Pe=null}}function Gm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new LC(t,e,n,r,s,i,o)}function mh(t){const e=Re(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),oc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yi(r)).join(",")),e.Pe=n}return e.Pe}function gh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Z_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wm(t.startAt,e.startAt)&&Wm(t.endAt,e.endAt)}function Xu(t){return be.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function $C(t,e,n,r,s,i,o,c){return new Ci(t,e,n,r,s,i,o,c)}function yh(t){return new Ci(t)}function Km(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function n1(t){return t.collectionGroup!==null}function vo(t){const e=Re(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new _t(Dt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Fo(i,r))}),n.has(Dt.keyField().canonicalString())||e.Te.push(new Fo(Dt.keyField(),r))}return e.Te}function Vn(t){const e=Re(t);return e.Ie||(e.Ie=FC(e,vo(t))),e.Ie}function FC(t,e){if(t.limitType==="F")return Gm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Fo(s.field,i)});const n=t.endAt?new Al(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Al(t.startAt.position,t.startAt.inclusive):null;return Gm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qu(t,e){const n=t.filters.concat([e]);return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ju(t,e,n){return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lc(t,e){return gh(Vn(t),Vn(e))&&t.limitType===e.limitType}function r1(t){return`${mh(Vn(t))}|lt:${t.limitType}`}function Ys(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>e1(s)).join(", ")}]`),oc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>yi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>yi(s)).join(",")),`Target(${r})`}(Vn(t))}; limitType=${t.limitType})`}function cc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):be.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of vo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=zm(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,vo(r),s)||r.endAt&&!function(o,c,l){const u=zm(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,vo(r),s))}(t,e)}function UC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function s1(t){return(e,n)=>{let r=!1;for(const s of vo(t)){const i=BC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function BC(t,e,n){const r=t.field.isKeyField()?be.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?gi(l,u):Se(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Se(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){os(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return B_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=new st(be.comparator);function ur(){return jC}const i1=new st(be.comparator);function Zi(...t){let e=i1;for(const n of t)e=e.insert(n.key,n);return e}function o1(t){let e=i1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ws(){return _o()}function a1(){return _o()}function _o(){return new Vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const qC=new st(be.comparator),HC=new _t(be.comparator);function Fe(...t){let e=HC;for(const n of t)e=e.add(n);return e}const zC=new _t(Ne);function WC(){return zC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tl(e)?"-0":e}}function l1(t){return{integerValue:""+t}}function GC(t,e){return bC(e)?l1(e):vh(t,e)}/**
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
 */class uc{constructor(){this._=void 0}}function KC(t,e,n){return t instanceof Pl?function(s,i){const o={fields:{[H_]:{stringValue:q_},[W_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&fh(i)&&(i=ac(i)),i&&(o.fields[z_]=i),{mapValue:o}}(n,e):t instanceof Uo?u1(t,e):t instanceof Bo?d1(t,e):function(s,i){const o=c1(s,i),c=Ym(o)+Ym(s.Ee);return Ku(o)&&Ku(s.Ee)?l1(c):vh(s.serializer,c)}(t,e)}function YC(t,e,n){return t instanceof Uo?u1(t,e):t instanceof Bo?d1(t,e):n}function c1(t,e){return t instanceof Cl?function(r){return Ku(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Pl extends uc{}class Uo extends uc{constructor(e){super(),this.elements=e}}function u1(t,e){const n=h1(e);for(const r of t.elements)n.some(s=>Un(s,r))||n.push(r);return{arrayValue:{values:n}}}class Bo extends uc{constructor(e){super(),this.elements=e}}function d1(t,e){let n=h1(e);for(const r of t.elements)n=n.filter(s=>!Un(s,r));return{arrayValue:{values:n}}}class Cl extends uc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Ym(t){return ut(t.integerValue||t.doubleValue)}function h1(t){return ph(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function XC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Uo&&s instanceof Uo||r instanceof Bo&&s instanceof Bo?mi(r.elements,s.elements,Un):r instanceof Cl&&s instanceof Cl?Un(r.Ee,s.Ee):r instanceof Pl&&s instanceof Pl}(t.transform,e.transform)}class QC{constructor(e,n){this.version=e,this.transformResults=n}}class Gt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gt}static exists(e){return new Gt(void 0,e)}static updateTime(e){return new Gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function el(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class dc{}function f1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hc(t.key,Gt.none()):new na(t.key,t.data,Gt.none());{const n=t.data,r=Xt.empty();let s=new _t(Dt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new as(t.key,r,new rn(s.toArray()),Gt.none())}}function JC(t,e,n){t instanceof na?function(s,i,o){const c=s.value.clone(),l=Qm(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof as?function(s,i,o){if(!el(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Qm(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(p1(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function bo(t,e,n,r){return t instanceof na?function(i,o,c,l){if(!el(i.precondition,o))return c;const u=i.value.clone(),h=Jm(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof as?function(i,o,c,l){if(!el(i.precondition,o))return c;const u=Jm(i.fieldTransforms,l,o),h=o.data;return h.setAll(p1(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,c){return el(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function ZC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=c1(r.transform,s||null);i!=null&&(n===null&&(n=Xt.empty()),n.set(r.field,i))}return n||null}function Xm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&mi(r,s,(i,o)=>XC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class na extends dc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class as extends dc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function p1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Qm(t,e,n){const r=new Map;We(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,YC(o,c,n[s]))}return r}function Jm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,KC(i,o,e))}return r}class hc extends dc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eR extends dc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&JC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=a1();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=f1(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Fe())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,(n,r)=>Xm(n,r))&&mi(this.baseMutations,e.baseMutations,(n,r)=>Xm(n,r))}}class _h{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){We(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return qC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new _h(e,n,r,s)}}/**
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
 */var mt,Be;function sR(t){switch(t){case q.OK:return Se(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return Se(15467,{code:t})}}function m1(t){if(t===void 0)return cr("GRPC error has no .code"),q.UNKNOWN;switch(t){case mt.OK:return q.OK;case mt.CANCELLED:return q.CANCELLED;case mt.UNKNOWN:return q.UNKNOWN;case mt.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case mt.INTERNAL:return q.INTERNAL;case mt.UNAVAILABLE:return q.UNAVAILABLE;case mt.UNAUTHENTICATED:return q.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case mt.NOT_FOUND:return q.NOT_FOUND;case mt.ALREADY_EXISTS:return q.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return q.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case mt.ABORTED:return q.ABORTED;case mt.OUT_OF_RANGE:return q.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return q.UNIMPLEMENTED;case mt.DATA_LOSS:return q.DATA_LOSS;default:return Se(39323,{code:t})}}(Be=mt||(mt={}))[Be.OK=0]="OK",Be[Be.CANCELLED=1]="CANCELLED",Be[Be.UNKNOWN=2]="UNKNOWN",Be[Be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Be[Be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Be[Be.NOT_FOUND=5]="NOT_FOUND",Be[Be.ALREADY_EXISTS=6]="ALREADY_EXISTS",Be[Be.PERMISSION_DENIED=7]="PERMISSION_DENIED",Be[Be.UNAUTHENTICATED=16]="UNAUTHENTICATED",Be[Be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Be[Be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Be[Be.ABORTED=10]="ABORTED",Be[Be.OUT_OF_RANGE=11]="OUT_OF_RANGE",Be[Be.UNIMPLEMENTED=12]="UNIMPLEMENTED",Be[Be.INTERNAL=13]="INTERNAL",Be[Be.UNAVAILABLE=14]="UNAVAILABLE",Be[Be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const iR=new jr([4294967295,4294967295],0);function Zm(t){const e=L_().encode(t),n=new R_;return n.update(e),new Uint8Array(n.digest())}function eg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new jr([n,r],0),new jr([s,i],0)]}class bh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new eo(`Invalid padding: ${n}`);if(r<0)throw new eo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new eo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new eo(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=jr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(jr.fromNumber(r)));return s.compare(iR)===1&&(s=new jr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Zm(e),[r,s]=eg(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new bh(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.fe===0)return;const n=Zm(e),[r,s]=eg(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class eo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ra.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fc(Pe.min(),s,new st(Ne),ur(),Fe())}}class ra{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ra(r,n,Fe(),Fe(),Fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class g1{constructor(e,n){this.targetId=e,this.De=n}}class y1{constructor(e,n,r=kt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class tg{constructor(){this.ve=0,this.Ce=ng(),this.Fe=kt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Fe(),n=Fe(),r=Fe();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Se(38017,{changeType:i})}}),new ra(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=ng()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,We(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class oR{constructor(e){this.We=e,this.Ge=new Map,this.ze=ur(),this.je=Ma(),this.Je=Ma(),this.He=new st(Ne)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:Se(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,s)=>{this.nt(s)&&n(s)})}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Xu(i))if(r===0){const o=new be(i.path);this.Xe(n,o,Ut.newNoDocument(o,Pe.min()))}else We(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const c=this._t(e),l=c?this.ut(c,e,o):1;if(l!==0){this.rt(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Qr(r).toUint8Array()}catch(l){if(l instanceof j_)return Kr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new bh(o,s,i)}catch(l){return Kr(l instanceof eo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(n,i,null),s++)}),s}Pt(e){const n=new Map;this.Ge.forEach((i,o)=>{const c=this.st(o);if(c){if(i.current&&Xu(c.target)){const l=new be(c.target.path);this.Tt(l).has(o)||this.It(o,l)||this.Xe(o,l,Ut.newNoDocument(l,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}});let r=Fe();this.Je.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.st(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ze.forEach((i,o)=>o.setReadTime(e));const s=new fc(e,n,this.He,this.ze,r);return this.ze=ur(),this.je=Ma(),this.Je=Ma(),this.He=new st(Ne),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new tg,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new _t(Ne),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new _t(Ne),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||ue("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new tg),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Ma(){return new st(be.comparator)}function ng(){return new st(be.comparator)}const aR={asc:"ASCENDING",desc:"DESCENDING"},lR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cR={and:"AND",or:"OR"};class uR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zu(t,e){return t.useProto3Json||oc(e)?e:{value:e}}function Rl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function v1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dR(t,e){return Rl(t,e.toTimestamp())}function Mn(t){return We(!!t,49232),Pe.fromTimestamp(function(n){const r=Xr(n);return new Oe(r.seconds,r.nanos)}(t))}function wh(t,e){return ed(t,e).canonicalString()}function ed(t,e){const n=function(s){return new et(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function _1(t){const e=et.fromString(t);return We(I1(e),10190,{key:e.toString()}),e}function td(t,e){return wh(t.databaseId,e.path)}function uu(t,e){const n=_1(e);if(n.get(1)!==t.databaseId.projectId)throw new ae(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ae(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new be(w1(n))}function b1(t,e){return wh(t.databaseId,e)}function hR(t){const e=_1(t);return e.length===4?et.emptyPath():w1(e)}function nd(t){return new et(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function w1(t){return We(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function rg(t,e,n){return{name:td(t,e),fields:n.value.mapValue.fields}}function fR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Se(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(We(h===void 0||typeof h=="string",58123),kt.fromBase64String(h||"")):(We(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),kt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const h=u.code===void 0?q.UNKNOWN:m1(u.code);return new ae(h,u.message||"")}(o);n=new y1(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=uu(t,r.document.name),i=Mn(r.document.updateTime),o=r.document.createTime?Mn(r.document.createTime):Pe.min(),c=new Xt({mapValue:{fields:r.document.fields}}),l=Ut.newFoundDocument(s,i,o,c),u=r.targetIds||[],h=r.removedTargetIds||[];n=new tl(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=uu(t,r.document),i=r.readTime?Mn(r.readTime):Pe.min(),o=Ut.newNoDocument(s,i),c=r.removedTargetIds||[];n=new tl([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=uu(t,r.document),i=r.removedTargetIds||[];n=new tl([],i,s,null)}else{if(!("filter"in e))return Se(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new rR(s,i),c=r.targetId;n=new g1(c,o)}}return n}function pR(t,e){let n;if(e instanceof na)n={update:rg(t,e.key,e.value)};else if(e instanceof hc)n={delete:td(t,e.key)};else if(e instanceof as)n={update:rg(t,e.key,e.data),updateMask:TR(e.fieldMask)};else{if(!(e instanceof eR))return Se(16599,{Rt:e.type});n={verify:td(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Pl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Uo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Bo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Cl)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw Se(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:dR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Se(27497)}(t,e.precondition)),n}function mR(t,e){return t&&t.length>0?(We(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Mn(s.updateTime):Mn(i);return o.isEqual(Pe.min())&&(o=Mn(i)),new QC(o,s.transformResults||[])}(n,e))):[]}function gR(t,e){return{documents:[b1(t,e.path)]}}function yR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=b1(t,s);const i=function(u){if(u.length!==0)return T1(Tn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Xs(p.field),direction:bR(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Zu(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{Vt:n,parent:s}}function vR(t){let e=hR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){We(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(m){const p=E1(m);return p instanceof Tn&&J_(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(p=>function(R){return new Fo(Qs(R.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(p))}(n.orderBy));let c=null;n.limit&&(c=function(m){let p;return p=typeof m=="object"?m.value:m,oc(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(m){const p=!!m.before,v=m.values||[];return new Al(v,p)}(n.startAt));let u=null;return n.endAt&&(u=function(m){const p=!m.before,v=m.values||[];return new Al(v,p)}(n.endAt)),$C(e,s,o,i,c,"F",l,u)}function _R(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function E1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qs(n.unaryFilter.field);return gt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Qs(n.unaryFilter.field);return gt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qs(n.unaryFilter.field);return gt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qs(n.unaryFilter.field);return gt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Se(61313);default:return Se(60726)}}(t):t.fieldFilter!==void 0?function(n){return gt.create(Qs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Se(58110);default:return Se(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Tn.create(n.compositeFilter.filters.map(r=>E1(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Se(1026)}}(n.compositeFilter.op))}(t):Se(30097,{filter:t})}function bR(t){return aR[t]}function wR(t){return lR[t]}function ER(t){return cR[t]}function Xs(t){return{fieldPath:t.canonicalString()}}function Qs(t){return Dt.fromServerFormat(t.fieldPath)}function T1(t){return t instanceof gt?function(n){if(n.op==="=="){if(Hm(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NAN"}};if(qm(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hm(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NOT_NAN"}};if(qm(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xs(n.field),op:wR(n.op),value:n.value}}}(t):t instanceof Tn?function(n){const r=n.getFilters().map(s=>T1(s));return r.length===1?r[0]:{compositeFilter:{op:ER(n.op),filters:r}}}(t):Se(54877,{filter:t})}function TR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function I1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,r,s,i=Pe.min(),o=Pe.min(),c=kt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.gt=e}}function SR(t){const e=vR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ju(e,e.limit,"L"):e}/**
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
 */class AR{constructor(){this.Dn=new PR}addToCollectionParentIndex(e,n){return this.Dn.add(n),G.resolve()}getCollectionParents(e,n){return G.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return G.resolve()}deleteFieldIndex(e,n){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,n){return G.resolve()}getDocumentsMatchingTarget(e,n){return G.resolve(null)}getIndexType(e,n){return G.resolve(0)}getFieldIndexes(e,n){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,n){return G.resolve(Yr.min())}getMinOffsetFromCollectionGroup(e,n){return G.resolve(Yr.min())}updateCollectionGroup(e,n,r){return G.resolve()}updateIndexEntries(e,n){return G.resolve()}}class PR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new _t(et.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new _t(et.comparator)).toArray()}}/**
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
 */const sg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},S1=41943040;class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(S1,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new vi(0)}static ur(){return new vi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="LruGarbageCollector",CR=1048576;function og([t,e],[n,r]){const s=Ne(t,n);return s===0?Ne(e,r):s}class RR{constructor(e){this.Tr=e,this.buffer=new _t(og),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();og(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class DR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ue(ig,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Pi(n)?ue(ig,"Ignoring IndexedDB error during garbage collection: ",n):await Ai(n)}await this.Rr(3e5)})}}class kR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return G.resolve(ic.ue);const r=new RR(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(sg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sg):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,c,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(u=Date.now(),Ks()<=$e.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
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
 */class xR{constructor(){this.changes=new Vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?G.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class NR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&bo(r.mutation,s,rn.empty(),Oe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Fe()){const s=ws();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Zi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ws();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Fe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=ur();const o=_o(),c=function(){return _o()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof as)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),bo(h.mutation,u,h.mutation.getFieldMask(),Oe.now())):o.set(u.key,rn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var m;return c.set(u,new NR(h,(m=o.get(u))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,n){const r=_o();let s=new st((o,c)=>o-c),i=Fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||rn.empty();h=c.applyToLocalView(u,h),r.set(l,h);const m=(s.get(c.batchId)||Fe()).add(l);s=s.insert(c.batchId,m)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,h=l.value,m=a1();h.forEach(p=>{if(!i.has(p)){const v=f1(n.get(p),r.get(p));v!==null&&m.set(p,v),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,m))}return G.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return be.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):n1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):G.resolve(ws());let c=Vo,l=i;return o.next(u=>G.forEach(u,(h,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(h)?G.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Fe())).next(h=>({batchId:c,changes:o1(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new be(n)).next(r=>{let s=Zi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Zi();return this.indexManager.getCollectionParents(e,i).next(c=>G.forEach(c,l=>{const u=function(m,p){return new Ci(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((m,p)=>{o=o.insert(m,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Ut.newInvalidDocument(h)))});let c=Zi();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&bo(h.mutation,u,rn.empty(),Oe.now()),cc(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return G.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Mn(s.createTime)}}(n)),G.resolve()}getNamedQuery(e,n){return G.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(s){return{name:s.name,query:SR(s.bundledQuery),readTime:Mn(s.readTime)}}(n)),G.resolve()}}/**
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
 */class LR{constructor(){this.overlays=new st(be.comparator),this.kr=new Map}getOverlay(e,n){return G.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ws();return G.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.wt(e,n,i)}),G.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),G.resolve()}getOverlaysForCollection(e,n,r){const s=ws(),i=n.length+1,o=new be(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return G.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new st((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=ws(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const c=ws(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>c.set(u,h)),!(c.size()>=s)););return G.resolve(c)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new nR(n,r));let i=this.kr.get(n);i===void 0&&(i=Fe(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class $R{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(){this.qr=new _t(bt.Qr),this.$r=new _t(bt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new bt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new bt(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new be(new et([])),r=new bt(n,e),s=new bt(n,e+1),i=[];return this.$r.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new be(new et([])),r=new bt(n,e),s=new bt(n,e+1);let i=Fe();return this.$r.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new bt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class bt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return be.comparator(e.key,n.key)||Ne(e.Hr,n.Hr)}static Ur(e,n){return Ne(e.Hr,n.Hr)||be.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new _t(bt.Qr)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Yr=this.Yr.add(new bt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return G.resolve(o)}lookupMutationBatch(e,n){return G.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return G.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?hh:this.er-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new bt(n,0),s=new bt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],o=>{const c=this.Zr(o.Hr);i.push(c)}),G.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _t(Ne);return n.forEach(s=>{const i=new bt(s,0),o=new bt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],c=>{r=r.add(c.Hr)})}),G.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;be.isDocumentKey(i)||(i=i.child(""));const o=new bt(new be(i),0);let c=new _t(Ne);return this.Yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Hr)),!0)},o),G.resolve(this.ei(c))}ei(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){We(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return G.forEach(n.mutations,s=>{const i=new bt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new bt(n,0),s=this.Yr.firstAfterOrEqual(r);return G.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.ni=e,this.docs=function(){return new st(be.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return G.resolve(r?r.document.mutableCopy():Ut.newInvalidDocument(n))}getEntries(e,n){let r=ur();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ut.newInvalidDocument(s))}),G.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ur();const o=n.path,c=new be(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||gC(mC(h),r)<=0||(s.has(h.key)||cc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return G.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Se(9500)}ri(e,n){return G.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new BR(this)}getSize(e){return G.resolve(this.size)}}class BR extends xR{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),G.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.persistence=e,this.ii=new Vs(n=>mh(n),gh),this.lastRemoteSnapshotVersion=Pe.min(),this.highestTargetId=0,this.si=0,this.oi=new Eh,this.targetCount=0,this._i=vi.ar()}forEachTarget(e,n){return this.ii.forEach((r,s)=>n(s)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),G.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new vi(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,G.resolve()}updateTargetData(e,n){return this.hr(n),G.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),G.waitFor(i).next(()=>s)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return G.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),G.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),G.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),G.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return G.resolve(r)}containsKey(e,n){return G.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,n){this.ai={},this.overlays={},this.ui=new ic(0),this.ci=!1,this.ci=!0,this.li=new $R,this.referenceDelegate=e(this),this.hi=new jR(this),this.indexManager=new AR,this.remoteDocumentCache=function(s){return new UR(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new IR(n),this.Ti=new MR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new LR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new FR(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){ue("MemoryPersistence","Starting transaction:",e);const s=new qR(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return G.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class qR extends vC{constructor(e){super(),this.currentSequenceNumber=e}}class Th{constructor(e){this.persistence=e,this.Ai=new Eh,this.Ri=null}static Vi(e){return new Th(e)}get mi(){if(this.Ri)return this.Ri;throw Se(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),G.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),G.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),G.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.mi,r=>{const s=be.fromPath(r);return this.fi(e,s).next(i=>{i||n.removeEntry(s,Pe.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return G.or([()=>G.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Dl{constructor(e,n){this.persistence=e,this.gi=new Vs(r=>wC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=OR(this,n)}static Vi(e,n){return new Dl(e,n)}Ii(){}di(e){return G.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return G.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?G.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,o=>this.Sr(e,o,n).next(c=>{c||(r++,i.removeEntry(o,Pe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),G.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),G.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),G.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ja(e.data.value)),n}Sr(e,n,r){return G.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return G.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=Fe(),s=Fe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ih(e,n.fromCache,r,s)}}/**
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
 */class zR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return vI()?8:_C(Bt())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ys(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new HR;return this.ws(e,n,o).next(c=>{if(i.result=c,this.Rs)return this.Ss(e,n,o,c.size)})}).next(()=>i.result)}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(Ks()<=$e.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",Ys(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),G.resolve()):(Ks()<=$e.DEBUG&&ue("QueryEngine","Query:",Ys(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ks()<=$e.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",Ys(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vn(n))):G.resolve())}ps(e,n){if(Km(n))return G.resolve(null);let r=Vn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ju(n,null,"F"),r=Vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Fe(...i);return this.gs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.bs(n,c);return this.Ds(n,u,o,l.readTime)?this.ps(e,Ju(n,null,"F")):this.vs(e,u,n,l)}))})))}ys(e,n,r,s){return Km(n)||s.isEqual(Pe.min())?G.resolve(null):this.gs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?G.resolve(null):(Ks()<=$e.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ys(n)),this.vs(e,o,n,pC(s,Vo)).next(c=>c))})}bs(e,n){let r=new _t(s1(e));return n.forEach((s,i)=>{cc(e,i)&&(r=r.add(i))}),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return Ks()<=$e.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",Ys(n)),this.gs.getDocumentsMatchingQuery(e,n,Yr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="LocalStore",WR=3e8;class GR{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new st(Ne),this.Ms=new Vs(i=>mh(i),gh),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function KR(t,e,n,r){return new GR(t,e,n,r)}async function P1(t,e){const n=Re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Fe();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){c.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Bs:u,removedBatchIds:o,addedBatchIds:c}))})})}function YR(t,e){const n=Re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return function(c,l,u,h){const m=u.batch,p=m.keys();let v=G.resolve();return p.forEach(R=>{v=v.next(()=>h.getEntry(l,R)).next(I=>{const E=u.docVersions.get(R);We(E!==null,48541),I.version.compareTo(E)<0&&(m.applyToRemoteDocument(I,u),I.isValidDocument()&&(I.setReadTime(u.commitVersion),h.addEntry(I)))})}),v.next(()=>c.mutationQueue.removeMutationBatch(l,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Fe();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function C1(t){const e=Re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function XR(t,e){const n=Re(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const c=[];e.targetChanges.forEach((h,m)=>{const p=s.get(m);if(!p)return;c.push(n.hi.removeMatchingKeys(i,h.removedDocuments,m).next(()=>n.hi.addMatchingKeys(i,h.addedDocuments,m)));let v=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?v=v.withResumeToken(kt.EMPTY_BYTE_STRING,Pe.min()).withLastLimboFreeSnapshotVersion(Pe.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,r)),s=s.insert(m,v),function(I,E,k){return I.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=WR?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(p,v,h)&&c.push(n.hi.updateTargetData(i,v))});let l=ur(),u=Fe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),c.push(QR(i,o,e.documentUpdates).next(h=>{l=h.Ls,u=h.ks})),!r.isEqual(Pe.min())){const h=n.hi.getLastRemoteSnapshotVersion(i).next(m=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(h)}return G.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Fs=s,i))}function QR(t,e,n){let r=Fe(),s=Fe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=ur();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Pe.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ue(Sh,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Ls:o,ks:s}})}function JR(t,e){const n=Re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=hh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ZR(t,e){const n=Re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.hi.getTargetData(r,e).next(i=>i?(s=i,G.resolve(s)):n.hi.allocateTargetId(r).next(o=>(s=new Mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function rd(t,e,n){const r=Re(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Pi(o))throw o;ue(Sh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function ag(t,e,n){const r=Re(t);let s=Pe.min(),i=Fe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const m=Re(l),p=m.Ms.get(h);return p!==void 0?G.resolve(m.Fs.get(p)):m.hi.getTargetData(u,h)}(r,o,Vn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:Pe.min(),n?i:Fe())).next(c=>(eD(r,UC(e),c),{documents:c,qs:i})))}function eD(t,e,n){let r=t.xs.get(e)||Pe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.xs.set(e,r)}class lg{constructor(){this.activeTargetIds=WC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tD{constructor(){this.Fo=new lg,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new lg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */let La=null;function sd(){return La===null?La=function(){return 268435456+Math.round(2147483648*Math.random())}():La++,"0x"+La.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="RestConnection",rD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sD{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Il?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=sd(),c=this.Go(e,n.toUriEncodedString());ue(du,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:u}=new URL(c),h=Ei(u);return this.jo(e,c,l,r,h).then(m=>(ue(du,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Kr(du,`RPC '${e}' ${o} failed with error: `,m,"url: ",c,"request:",r),m})}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Si}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,n){const r=rD[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Mt="WebChannelConnection";class oD extends sD{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=sd();return new Promise((c,l)=>{const u=new D_;u.setWithCredentials(!0),u.listenOnce(k_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Qa.NO_ERROR:const m=u.getResponseJson();ue(Mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),c(m);break;case Qa.TIMEOUT:ue(Mt,`RPC '${e}' ${o} timed out`),l(new ae(q.DEADLINE_EXCEEDED,"Request time out"));break;case Qa.HTTP_ERROR:const p=u.getStatus();if(ue(Mt,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const R=v?.error;if(R&&R.status&&R.message){const I=function(k){const N=k.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(N)>=0?N:q.UNKNOWN}(R.status);l(new ae(I,R.message))}else l(new ae(q.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new ae(q.UNAVAILABLE,"Connection failed."));break;default:Se(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{ue(Mt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);ue(Mt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)})}P_(e,n,r){const s=sd(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=N_(),c=x_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");ue(Mt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const m=o.createWebChannel(h,l);this.T_(m);let p=!1,v=!1;const R=new iD({Ho:E=>{v?ue(Mt,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(p||(ue(Mt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),p=!0),ue(Mt,`RPC '${e}' stream ${s} sending:`,E),m.send(E))},Yo:()=>m.close()}),I=(E,k,N)=>{E.listen(k,$=>{try{N($)}catch(V){setTimeout(()=>{throw V},0)}})};return I(m,Ji.EventType.OPEN,()=>{v||(ue(Mt,`RPC '${e}' stream ${s} transport opened.`),R.s_())}),I(m,Ji.EventType.CLOSE,()=>{v||(v=!0,ue(Mt,`RPC '${e}' stream ${s} transport closed`),R.__(),this.I_(m))}),I(m,Ji.EventType.ERROR,E=>{v||(v=!0,Kr(Mt,`RPC '${e}' stream ${s} transport errored. Name:`,E.name,"Message:",E.message),R.__(new ae(q.UNAVAILABLE,"The operation could not be completed")))}),I(m,Ji.EventType.MESSAGE,E=>{var k;if(!v){const N=E.data[0];We(!!N,16349);const $=N,V=$?.error||((k=$[0])===null||k===void 0?void 0:k.error);if(V){ue(Mt,`RPC '${e}' stream ${s} received error:`,V);const F=V.status;let X=function(T){const C=mt[T];if(C!==void 0)return m1(C)}(F),P=V.message;X===void 0&&(X=q.INTERNAL,P="Unknown error status: "+F+" with message "+V.message),v=!0,R.__(new ae(X,P)),m.close()}else ue(Mt,`RPC '${e}' stream ${s} received:`,N),R.a_(N)}}),I(c,O_.STAT_EVENT,E=>{E.stat===zu.PROXY?ue(Mt,`RPC '${e}' stream ${s} detected buffering proxy`):E.stat===zu.NOPROXY&&ue(Mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.o_()},0),R}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function hu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class R1{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&ue("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="PersistentStream";class D1{constructor(e,n,r,s,i,o,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new R1(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(cr(n.toString()),cr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===n&&this.W_(r,s)},r=>{e(()=>{const s=new ae(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return ue(dg,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(ue(dg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aD extends D1{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=fR(this.serializer,e),r=function(i){if(!("targetChange"in i))return Pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Pe.min():o.readTime?Mn(o.readTime):Pe.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=nd(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Xu(l)?{documents:gR(i,l)}:{query:yR(i,l).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=v1(i,o.resumeToken);const u=Zu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(Pe.min())>0){c.readTime=Rl(i,o.snapshotVersion.toTimestamp());const u=Zu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=_R(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=nd(this.serializer),n.removeTarget=e,this.k_(n)}}class lD extends D1{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return We(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,We(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){We(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=mR(e.writeResults,e.commitTime),r=Mn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=nd(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pR(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{}class uD extends cD{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new ae(q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,ed(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ae(q.UNKNOWN,i.toString())})}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Jo(e,ed(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ae(q.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class dD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(cr(n),this._a=!1):ue("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="RemoteStore";class hD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{Ms(this)&&(ue(ks,"Restarting streams for network reachability change."),await async function(l){const u=Re(l);u.Ia.add(4),await sa(u),u.Aa.set("Unknown"),u.Ia.delete(4),await mc(u)}(this))})}),this.Aa=new dD(r,s)}}async function mc(t){if(Ms(t))for(const e of t.da)await e(!0)}async function sa(t){for(const e of t.da)await e(!1)}function k1(t,e){const n=Re(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Rh(n)?Ch(n):Ri(n).x_()&&Ph(n,e))}function Ah(t,e){const n=Re(t),r=Ri(n);n.Ta.delete(e),r.x_()&&O1(n,e),n.Ta.size===0&&(r.x_()?r.B_():Ms(n)&&n.Aa.set("Unknown"))}function Ph(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ri(t).H_(e)}function O1(t,e){t.Ra.$e(e),Ri(t).Y_(e)}function Ch(t){t.Ra=new oR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Ri(t).start(),t.Aa.aa()}function Rh(t){return Ms(t)&&!Ri(t).M_()&&t.Ta.size>0}function Ms(t){return Re(t).Ia.size===0}function x1(t){t.Ra=void 0}async function fD(t){t.Aa.set("Online")}async function pD(t){t.Ta.forEach((e,n)=>{Ph(t,e)})}async function mD(t,e){x1(t),Rh(t)?(t.Aa.la(e),Ch(t)):t.Aa.set("Unknown")}async function gD(t,e,n){if(t.Aa.set("Online"),e instanceof y1&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ta.delete(c),s.Ra.removeTarget(c))}(t,e)}catch(r){ue(ks,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await kl(t,r)}else if(e instanceof tl?t.Ra.Ye(e):e instanceof g1?t.Ra.it(e):t.Ra.et(e),!n.isEqual(Pe.min()))try{const r=await C1(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Ra.Pt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.Ta.get(u);h&&i.Ta.set(u,h.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const h=i.Ta.get(l);if(!h)return;i.Ta.set(l,h.withResumeToken(kt.EMPTY_BYTE_STRING,h.snapshotVersion)),O1(i,l);const m=new Mr(h.target,l,u,h.sequenceNumber);Ph(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ue(ks,"Failed to raise snapshot:",r),await kl(t,r)}}async function kl(t,e,n){if(!Pi(e))throw e;t.Ia.add(1),await sa(t),t.Aa.set("Offline"),n||(n=()=>C1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ue(ks,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await mc(t)})}function N1(t,e){return e().catch(n=>kl(t,n,e))}async function gc(t){const e=Re(t),n=Zr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:hh;for(;yD(e);)try{const s=await JR(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,vD(e,s)}catch(s){await kl(e,s)}V1(e)&&M1(e)}function yD(t){return Ms(t)&&t.Pa.length<10}function vD(t,e){t.Pa.push(e);const n=Zr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function V1(t){return Ms(t)&&!Zr(t).M_()&&t.Pa.length>0}function M1(t){Zr(t).start()}async function _D(t){Zr(t).na()}async function bD(t){const e=Zr(t);for(const n of t.Pa)e.X_(n.mutations)}async function wD(t,e,n){const r=t.Pa.shift(),s=_h.from(r,e,n);await N1(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await gc(t)}async function ED(t,e){e&&Zr(t).Z_&&await async function(r,s){if(function(o){return sR(o)&&o!==q.ABORTED}(s.code)){const i=r.Pa.shift();Zr(r).N_(),await N1(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await gc(r)}}(t,e),V1(t)&&M1(t)}async function hg(t,e){const n=Re(t);n.asyncQueue.verifyOperationInProgress(),ue(ks,"RemoteStore received new credentials");const r=Ms(n);n.Ia.add(3),await sa(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await mc(n)}async function TD(t,e){const n=Re(t);e?(n.Ia.delete(2),await mc(n)):e||(n.Ia.add(2),await sa(n),n.Aa.set("Unknown"))}function Ri(t){return t.Va||(t.Va=function(n,r,s){const i=Re(n);return i.ia(),new aD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:fD.bind(null,t),e_:pD.bind(null,t),n_:mD.bind(null,t),J_:gD.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),Rh(t)?Ch(t):t.Aa.set("Unknown")):(await t.Va.stop(),x1(t))})),t.Va}function Zr(t){return t.ma||(t.ma=function(n,r,s){const i=Re(n);return i.ia(),new lD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:_D.bind(null,t),n_:ED.bind(null,t),ea:bD.bind(null,t),ta:wD.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await gc(t)):(await t.ma.stop(),t.Pa.length>0&&(ue(ks,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Dh(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kh(t,e){if(cr("AsyncQueue",`${e}: ${t}`),Pi(t))return new ae(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{static emptySet(e){return new oi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||be.comparator(n.key,r.key):(n,r)=>be.comparator(n.key,r.key),this.keyedMap=Zi(),this.sortedSet=new st(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class fg{constructor(){this.fa=new st(be.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):Se(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class _i{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new _i(e,n,oi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class SD{constructor(){this.queries=pg(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=Re(n),i=s.queries;s.queries=pg(),i.forEach((o,c)=>{for(const l of c.wa)l.onError(r)})})(this,new ae(q.ABORTED,"Firestore shutting down"))}}function pg(){return new Vs(t=>r1(t),lc)}async function L1(t,e){const n=Re(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new ID,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=kh(o,`Initialization of query '${Ys(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&Oh(n)}async function $1(t,e){const n=Re(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function AD(t,e){const n=Re(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.wa)c.Ca(s)&&(r=!0);o.ya=s}}r&&Oh(n)}function PD(t,e,n){const r=Re(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function Oh(t){t.Da.forEach(e=>{e.next()})}var id,mg;(mg=id||(id={})).Fa="default",mg.Cache="cache";class F1{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new _i(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=_i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==id.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e){this.key=e}}class B1{constructor(e){this.key=e}}class CD{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Fe(),this.mutatedKeys=Fe(),this.Xa=s1(e),this.eu=new oi(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new fg,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,m)=>{const p=s.get(h),v=cc(this.query,m)?m:null,R=!!p&&this.mutatedKeys.has(p.key),I=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let E=!1;p&&v?p.data.isEqual(v.data)?R!==I&&(r.track({type:3,doc:v}),E=!0):this.iu(p,v)||(r.track({type:2,doc:v}),E=!0,(l&&this.Xa(v,l)>0||u&&this.Xa(v,u)<0)&&(c=!0)):!p&&v?(r.track({type:0,doc:v}),E=!0):p&&!v&&(r.track({type:1,doc:p}),E=!0,(l||u)&&(c=!0)),E&&(v?(o=o.add(v),i=I?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{eu:o,ru:r,Ds:c,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((h,m)=>function(v,R){const I=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se(20277,{At:E})}};return I(v)-I(R)}(h.type,m.type)||this.Xa(h.doc,m.doc)),this.su(r),s=s!=null&&s;const c=n&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,u=l!==this.Ya;return this.Ya=l,o.length!==0||u?{snapshot:new _i(this.query,e.eu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new fg,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Fe(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new B1(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new U1(r))}),n}uu(e){this.Ha=e.qs,this.Za=Fe();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return _i.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const xh="SyncEngine";class RD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class DD{constructor(e){this.key=e,this.lu=!1}}class kD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Vs(c=>r1(c),lc),this.Tu=new Map,this.Iu=new Set,this.du=new st(be.comparator),this.Eu=new Map,this.Au=new Eh,this.Ru={},this.Vu=new Map,this.mu=vi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function OD(t,e,n=!0){const r=G1(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await j1(r,e,n,!0),s}async function xD(t,e){const n=G1(t);await j1(n,e,!0,!1)}async function j1(t,e,n,r){const s=await ZR(t.localStore,Vn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await ND(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&k1(t.remoteStore,s),c}async function ND(t,e,n,r,s){t.gu=(m,p,v)=>async function(I,E,k,N){let $=E.view.nu(k);$.Ds&&($=await ag(I.localStore,E.query,!1).then(({documents:P})=>E.view.nu(P,$)));const V=N&&N.targetChanges.get(E.targetId),F=N&&N.targetMismatches.get(E.targetId)!=null,X=E.view.applyChanges($,I.isPrimaryClient,V,F);return yg(I,E.targetId,X._u),X.snapshot}(t,m,p,v);const i=await ag(t.localStore,e,!0),o=new CD(e,i.qs),c=o.nu(i.documents),l=ra.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);yg(t,n,u._u);const h=new RD(e,n,o);return t.Pu.set(e,h),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function VD(t,e,n){const r=Re(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(o=>!lc(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await rd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ah(r.remoteStore,s.targetId),od(r,s.targetId)}).catch(Ai)):(od(r,s.targetId),await rd(r.localStore,s.targetId,!0))}async function MD(t,e){const n=Re(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ah(n.remoteStore,r.targetId))}async function LD(t,e,n){const r=HD(t);try{const s=await function(o,c){const l=Re(o),u=Oe.now(),h=c.reduce((v,R)=>v.add(R.key),Fe());let m,p;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let R=ur(),I=Fe();return l.Os.getEntries(v,h).next(E=>{R=E,R.forEach((k,N)=>{N.isValidDocument()||(I=I.add(k))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,R)).next(E=>{m=E;const k=[];for(const N of c){const $=ZC(N,m.get(N.key).overlayedDocument);$!=null&&k.push(new as(N.key,$,Y_($.value.mapValue),Gt.exists(!0)))}return l.mutationQueue.addMutationBatch(v,u,k,c)}).next(E=>{p=E;const k=E.applyToLocalDocumentSet(m,I);return l.documentOverlayCache.saveOverlays(v,E.batchId,k)})}).then(()=>({batchId:p.batchId,changes:o1(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Ru[o.currentUser.toKey()];u||(u=new st(Ne)),u=u.insert(c,l),o.Ru[o.currentUser.toKey()]=u}(r,s.batchId,n),await ia(r,s.changes),await gc(r.remoteStore)}catch(s){const i=kh(s,"Failed to persist write");n.reject(i)}}async function q1(t,e){const n=Re(t);try{const r=await XR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(We(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?We(o.lu,14607):s.removedDocuments.size>0&&(We(o.lu,42227),o.lu=!1))}),await ia(n,r,e)}catch(r){await Ai(r)}}function gg(t,e,n){const r=Re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=Re(o);l.onlineState=c;let u=!1;l.queries.forEach((h,m)=>{for(const p of m.wa)p.va(c)&&(u=!0)}),u&&Oh(l)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $D(t,e,n){const r=Re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new st(be.comparator);o=o.insert(i,Ut.newNoDocument(i,Pe.min()));const c=Fe().add(i),l=new fc(Pe.min(),new Map,new st(Ne),o,c);await q1(r,l),r.du=r.du.remove(i),r.Eu.delete(e),Nh(r)}else await rd(r.localStore,e,!1).then(()=>od(r,e,n)).catch(Ai)}async function FD(t,e){const n=Re(t),r=e.batch.batchId;try{const s=await YR(n.localStore,e);z1(n,r,null),H1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ia(n,s)}catch(s){await Ai(s)}}async function UD(t,e,n){const r=Re(t);try{const s=await function(o,c){const l=Re(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,c).next(m=>(We(m!==null,37113),h=m.keys(),l.mutationQueue.removeMutationBatch(u,m))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);z1(r,e,n),H1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ia(r,s)}catch(s){await Ai(s)}}function H1(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function z1(t,e,n){const r=Re(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function od(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||W1(t,r)})}function W1(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Ah(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Nh(t))}function yg(t,e,n){for(const r of n)r instanceof U1?(t.Au.addReference(r.key,e),BD(t,r)):r instanceof B1?(ue(xh,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||W1(t,r.key)):Se(19791,{yu:r})}function BD(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(ue(xh,"New document in limbo: "+n),t.Iu.add(r),Nh(t))}function Nh(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new be(et.fromString(e)),r=t.mu.next();t.Eu.set(r,new DD(n)),t.du=t.du.insert(n,r),k1(t.remoteStore,new Mr(Vn(yh(n.path)),r,"TargetPurposeLimboResolution",ic.ue))}}async function ia(t,e,n){const r=Re(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((c,l)=>{o.push(r.gu(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const m=u?!u.fromCache:(h=n?.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(u){s.push(u);const m=Ih.Es(l.targetId,u);i.push(m)}}))}),await Promise.all(o),r.hu.J_(s),await async function(l,u){const h=Re(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>G.forEach(u,p=>G.forEach(p.Is,v=>h.persistence.referenceDelegate.addReference(m,p.targetId,v)).next(()=>G.forEach(p.ds,v=>h.persistence.referenceDelegate.removeReference(m,p.targetId,v)))))}catch(m){if(!Pi(m))throw m;ue(Sh,"Failed to update sequence numbers: "+m)}for(const m of u){const p=m.targetId;if(!m.fromCache){const v=h.Fs.get(p),R=v.snapshotVersion,I=v.withLastLimboFreeSnapshotVersion(R);h.Fs=h.Fs.insert(p,I)}}}(r.localStore,i))}async function jD(t,e){const n=Re(t);if(!n.currentUser.isEqual(e)){ue(xh,"User change. New user:",e.toKey());const r=await P1(n.localStore,e);n.currentUser=e,function(i,o){i.Vu.forEach(c=>{c.forEach(l=>{l.reject(new ae(q.CANCELLED,o))})}),i.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ia(n,r.Bs)}}function qD(t,e){const n=Re(t),r=n.Eu.get(e);if(r&&r.lu)return Fe().add(r.key);{let s=Fe();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const c=n.Pu.get(o);s=s.unionWith(c.view.tu)}return s}}function G1(t){const e=Re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=q1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$D.bind(null,e),e.hu.J_=AD.bind(null,e.eventManager),e.hu.pu=PD.bind(null,e.eventManager),e}function HD(t){const e=Re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UD.bind(null,e),e}class Ol{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return KR(this.persistence,new zR,e.initialUser,this.serializer)}Du(e){return new A1(Th.Vi,this.serializer)}bu(e){return new tD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ol.provider={build:()=>new Ol};class zD extends Ol{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){We(this.persistence.referenceDelegate instanceof Dl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new DR(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new A1(r=>Dl.Vi(r,n),this.serializer)}}class ad{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jD.bind(null,this.syncEngine),await TD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new SD}()}createDatastore(e){const n=pc(e.databaseInfo.databaseId),r=function(i){return new oD(i)}(e.databaseInfo);return function(i,o,c,l){return new uD(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new hD(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>gg(this.syncEngine,n,0),function(){return ug.C()?new ug:new nD}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,h){const m=new kD(s,i,o,c,l,u);return h&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Re(s);ue(ks,"RemoteStore shutting down."),i.Ia.add(5),await sa(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ad.provider={build:()=>new ad};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class K1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):cr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="FirestoreClient";class WD{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=$t.UNAUTHENTICATED,this.clientId=dh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ue(es,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ue(es,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=kh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fu(t,e){t.asyncQueue.verifyOperationInProgress(),ue(es,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await P1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{Kr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{ue("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{Kr("Terminating Firestore due to IndexedDb database deletion failed",s)})}),t._offlineComponents=e}async function vg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await GD(t);ue(es,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>hg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>hg(e.remoteStore,s)),t._onlineComponents=e}async function GD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ue(es,"Using user provided OfflineComponentProvider");try{await fu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===q.FAILED_PRECONDITION||s.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Kr("Error using user provided cache. Falling back to memory cache: "+n),await fu(t,new Ol)}}else ue(es,"Using default OfflineComponentProvider"),await fu(t,new zD(void 0));return t._offlineComponents}async function Y1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ue(es,"Using user provided OnlineComponentProvider"),await vg(t,t._uninitializedComponentsProvider._online)):(ue(es,"Using default OnlineComponentProvider"),await vg(t,new ad))),t._onlineComponents}function KD(t){return Y1(t).then(e=>e.syncEngine)}async function X1(t){const e=await Y1(t),n=e.eventManager;return n.onListen=OD.bind(null,e.syncEngine),n.onUnlisten=VD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=xD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=MD.bind(null,e.syncEngine),n}function YD(t,e,n={}){const r=new sr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new K1({next:p=>{h.Ou(),o.enqueueAndForget(()=>$1(i,m));const v=p.docs.has(c);!v&&p.fromCache?u.reject(new ae(q.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&p.fromCache&&l&&l.source==="server"?u.reject(new ae(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),m=new F1(yh(c.path),h,{includeMetadataChanges:!0,ka:!0});return L1(i,m)}(await X1(t),t.asyncQueue,e,n,r)),r.promise}function XD(t,e,n={}){const r=new sr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new K1({next:p=>{h.Ou(),o.enqueueAndForget(()=>$1(i,m)),p.fromCache&&l.source==="server"?u.reject(new ae(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),m=new F1(c,h,{includeMetadataChanges:!0,ka:!0});return L1(i,m)}(await X1(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const _g=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1="firestore.googleapis.com",bg=!0;class wg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=J1,this.ssl=bg}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:bg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=S1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<CR)throw new ae(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Q1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ae(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ae(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ae(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sC;switch(r.type){case"firstParty":return new lC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ae(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=_g.get(n);r&&(ue("ComponentProvider","Removing Datastore"),_g.delete(n),r.terminate())}(this),Promise.resolve()}}function QD(t,e,n,r={}){var s;t=mn(t,yc);const i=Ei(e),o=t._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i&&(jv(`https://${l}`),qv("Firestore",!0)),o.host!==J1&&o.host!==l&&Kr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:l,ssl:i,emulatorOptions:r});if(!As(u,c)&&(t._setSettings(u),r.mockUserToken)){let h,m;if(typeof r.mockUserToken=="string")h=r.mockUserToken,m=$t.MOCK_USER;else{h=cI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ae(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new $t(p)}t._authCredentials=new iC(new M_(h,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ls(this.firestore,e,this._query)}}class dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}toJSON(){return{type:dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ta(n,dt._jsonSchema))return new dt(e,r||null,new be(et.fromString(n.referencePath)))}}dt._jsonSchemaVersion="firestore/documentReference/1.0",dt._jsonSchema={type:yt("string",dt._jsonSchemaVersion),referencePath:yt("string")};class qr extends Ls{constructor(e,n,r){super(e,n,yh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new be(e))}withConverter(e){return new qr(this.firestore,e,this._path)}}function Pn(t,e,...n){if(t=ct(t),$_("collection","path",e),t instanceof yc){const r=et.fromString(e,...n);return Nm(r),new qr(t,null,r)}{if(!(t instanceof dt||t instanceof qr))throw new ae(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(et.fromString(e,...n));return Nm(r),new qr(t.firestore,null,r)}}function dn(t,e,...n){if(t=ct(t),arguments.length===1&&(e=dh.newId()),$_("doc","path",e),t instanceof yc){const r=et.fromString(e,...n);return xm(r),new dt(t,null,new be(r))}{if(!(t instanceof dt||t instanceof qr))throw new ae(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(et.fromString(e,...n));return xm(r),new dt(t.firestore,t instanceof qr?t.converter:null,new be(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="AsyncQueue";class Tg{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new R1(this,"async_queue_retry"),this.oc=()=>{const r=hu();r&&ue(Eg,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=hu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=hu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new sr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Pi(e))throw e;ue(Eg,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,cr("INTERNAL UNHANDLED ERROR: ",Ig(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=Dh.createAndSchedule(this,e,n,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&Se(47125,{hc:Ig(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Ig(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ls extends yc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Tg,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tg(e),this._firestoreClient=void 0,await e}}}function Js(t,e){const n=typeof t=="object"?t:Gv(),r=typeof t=="string"?t:Il,s=Qd(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=aI("firestore");i&&QD(s,...i)}return s}function vc(t){if(t._terminated)throw new ae(q.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||JD(t),t._firestoreClient}function JD(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,h){return new IC(c,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Q1(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new WD(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hn(kt.fromBase64String(e))}catch(n){throw new ae(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hn(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:hn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ta(e,hn._jsonSchema))return hn.fromBase64String(e.bytes)}}hn._jsonSchemaVersion="firestore/bytes/1.0",hn._jsonSchema={type:yt("string",hn._jsonSchemaVersion),bytes:yt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ae(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ae(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ae(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ln._jsonSchemaVersion}}static fromJSON(e){if(ta(e,Ln._jsonSchema))return new Ln(e.latitude,e.longitude)}}Ln._jsonSchemaVersion="firestore/geoPoint/1.0",Ln._jsonSchema={type:yt("string",Ln._jsonSchemaVersion),latitude:yt("number"),longitude:yt("number")};/**
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
 */class $n{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:$n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ta(e,$n._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new $n(e.vectorValues);throw new ae(q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$n._jsonSchemaVersion="firestore/vectorValue/1.0",$n._jsonSchema={type:yt("string",$n._jsonSchemaVersion),vectorValues:yt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=/^__.*__$/;class e2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new as(e,this.data,this.fieldMask,n,this.fieldTransforms):new na(e,this.data,n,this.fieldTransforms)}}class Z1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new as(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function eb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se(40011,{Ec:t})}}class Mh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Mh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return xl(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(eb(this.Ec)&&ZD.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class t2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||pc(e)}Dc(e,n,r,s=!1){return new Mh({Ec:e,methodName:n,bc:r,path:Dt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aa(t){const e=t._freezeSettings(),n=pc(t._databaseId);return new t2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Lh(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);$h("Data must be an object, but it was:",o,r);const c=rb(r,o);let l,u;if(i.merge)l=new rn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const m of i.mergeFields){const p=ld(e,m,n);if(!o.contains(p))throw new ae(q.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);ib(h,p)||h.push(p)}l=new rn(h),u=o.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,u=o.fieldTransforms;return new e2(new Xt(c),l,u)}class _c extends Vh{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _c}}function tb(t,e,n,r){const s=t.Dc(1,e,n);$h("Data must be an object, but it was:",s,r);const i=[],o=Xt.empty();os(r,(l,u)=>{const h=Fh(e,l,n);u=ct(u);const m=s.gc(h);if(u instanceof _c)i.push(h);else{const p=la(u,m);p!=null&&(i.push(h),o.set(h,p))}});const c=new rn(i);return new Z1(o,c,s.fieldTransforms)}function nb(t,e,n,r,s,i){const o=t.Dc(1,e,n),c=[ld(e,r,n)],l=[s];if(i.length%2!=0)throw new ae(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)c.push(ld(e,i[p])),l.push(i[p+1]);const u=[],h=Xt.empty();for(let p=c.length-1;p>=0;--p)if(!ib(u,c[p])){const v=c[p];let R=l[p];R=ct(R);const I=o.gc(v);if(R instanceof _c)u.push(v);else{const E=la(R,I);E!=null&&(u.push(v),h.set(v,E))}}const m=new rn(u);return new Z1(h,m,o.fieldTransforms)}function n2(t,e,n,r=!1){return la(n,t.Dc(r?4:3,e))}function la(t,e){if(sb(t=ct(t)))return $h("Unsupported field value:",e,t),rb(t,e);if(t instanceof Vh)return function(r,s){if(!eb(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=la(c,s.yc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return GC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Oe.fromDate(r);return{timestampValue:Rl(s.serializer,i)}}if(r instanceof Oe){const i=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Rl(s.serializer,i)}}if(r instanceof Ln)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hn)return{bytesValue:v1(s.serializer,r._byteString)};if(r instanceof dt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof $n)return function(o,c){return{mapValue:{fields:{[G_]:{stringValue:K_},[Sl]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.wc("VectorValues must only contain numeric values.");return vh(c.serializer,u)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${sc(r)}`)}(t,e)}function rb(t,e){const n={};return B_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):os(t,(r,s)=>{const i=la(s,e.Vc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function sb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof Ln||t instanceof hn||t instanceof dt||t instanceof Vh||t instanceof $n)}function $h(t,e,n){if(!sb(n)||!F_(n)){const r=sc(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function ld(t,e,n){if((e=ct(e))instanceof oa)return e._internalPath;if(typeof e=="string")return Fh(t,e);throw xl("Field path arguments must be of type string or ",t,!1,void 0,n)}const r2=new RegExp("[~\\*/\\[\\]]");function Fh(t,e,n){if(e.search(r2)>=0)throw xl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new oa(...e.split("."))._internalPath}catch{throw xl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ae(q.INVALID_ARGUMENT,c+t+l)}function ib(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new s2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class s2 extends ob{data(){return super.data()}}function bc(t,e){return typeof e=="string"?Fh(t,e):e instanceof oa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ae(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uh{}class ab extends Uh{}function Hs(t,e,...n){let r=[];e instanceof Uh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Bh).length,c=i.filter(l=>l instanceof wc).length;if(o>1||o>0&&c>0)throw new ae(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class wc extends ab{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new wc(e,n,r)}_apply(e){const n=this._parse(e);return lb(e._query,n),new Ls(e.firestore,e.converter,Qu(e._query,n))}_parse(e){const n=aa(e.firestore);return function(i,o,c,l,u,h,m){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new ae(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Ag(m,h);const R=[];for(const I of m)R.push(Sg(l,i,I));p={arrayValue:{values:R}}}else p=Sg(l,i,m)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Ag(m,h),p=n2(c,o,m,h==="in"||h==="not-in");return gt.create(u,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ki(t,e,n){const r=e,s=bc("where",t);return wc._create(s,r,n)}class Bh extends Uh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Bh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)lb(o,l),o=Qu(o,l)}(e._query,n),new Ls(e.firestore,e.converter,Qu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jh extends ab{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new jh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new ae(q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ae(q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Fo(i,o)}(e._query,this._field,this._direction);return new Ls(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ci(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function $a(t,e="asc"){const n=e,r=bc("orderBy",t);return jh._create(r,n)}function Sg(t,e,n){if(typeof(n=ct(n))=="string"){if(n==="")throw new ae(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!n1(e)&&n.indexOf("/")!==-1)throw new ae(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(et.fromString(n));if(!be.isDocumentKey(r))throw new ae(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return jm(t,new be(r))}if(n instanceof dt)return jm(t,n._key);throw new ae(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sc(n)}.`)}function Ag(t,e){if(!Array.isArray(t)||t.length===0)throw new ae(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lb(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ae(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ae(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class o2{convertValue(e,n="none"){switch(Jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return os(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Sl].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>ut(o.doubleValue));return new $n(i)}convertGeoPoint(e){return new Ln(ut(e.latitude),ut(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ac(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Mo(e));default:return null}}convertTimestamp(e){const n=Xr(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=et.fromString(e);We(I1(r),9688,{name:e});const s=new Lo(r.get(1),r.get(3)),i=new be(r.popFirst(5));return s.isEqual(n)||cr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class to{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ss extends ob{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new nl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ss._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ss._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ss._jsonSchema={type:yt("string",Ss._jsonSchemaVersion),bundleSource:yt("string","DocumentSnapshot"),bundleName:yt("string"),bundle:yt("string")};class nl extends Ss{data(e={}){return super.data(e)}}class ai{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new to(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new nl(this._firestore,this._userDataWriter,r.key,r,new to(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ae(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new nl(s._firestore,s._userDataWriter,c.doc.key,c.doc,new to(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new nl(s._firestore,s._userDataWriter,c.doc.key,c.doc,new to(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:a2(c.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ai._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=dh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function a2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(t){t=mn(t,dt);const e=mn(t.firestore,ls);return YD(vc(e),t._key).then(n=>c2(e,t,n))}ai._jsonSchemaVersion="firestore/querySnapshot/1.0",ai._jsonSchema={type:yt("string",ai._jsonSchemaVersion),bundleSource:yt("string","QuerySnapshot"),bundleName:yt("string"),bundle:yt("string")};class cb extends o2{constructor(e){super(),this.firestore=e}convertBytes(e){return new hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function zs(t){t=mn(t,Ls);const e=mn(t.firestore,ls),n=vc(e),r=new cb(e);return i2(t._query),XD(n,t._query).then(s=>new ai(e,r,t,s))}function l2(t,e,n){t=mn(t,dt);const r=mn(t.firestore,ls),s=qh(t.converter,e,n);return ca(r,[Lh(aa(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Gt.none())])}function Fa(t,e,n,...r){t=mn(t,dt);const s=mn(t.firestore,ls),i=aa(s);let o;return o=typeof(e=ct(e))=="string"||e instanceof oa?nb(i,"updateDoc",t._key,e,n,r):tb(i,"updateDoc",t._key,e),ca(s,[o.toMutation(t._key,Gt.exists(!0))])}function Pg(t){return ca(mn(t.firestore,ls),[new hc(t._key,Gt.none())])}function Ua(t,e){const n=mn(t.firestore,ls),r=dn(t),s=qh(t.converter,e);return ca(n,[Lh(aa(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Gt.exists(!1))]).then(()=>r)}function ca(t,e){return function(r,s){const i=new sr;return r.asyncQueue.enqueueAndForget(async()=>LD(await KD(r),s,i)),i.promise}(vc(t),e)}function c2(t,e,n){const r=n.docs.get(e._key),s=new cb(t);return new Ss(t,s,e._key,r,new to(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=aa(e)}set(e,n,r){this._verifyNotCommitted();const s=pu(e,this._firestore),i=qh(s.converter,n,r),o=Lh(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Gt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=pu(e,this._firestore);let o;return o=typeof(n=ct(n))=="string"||n instanceof oa?nb(this._dataReader,"WriteBatch.update",i._key,n,r,s):tb(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Gt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=pu(e,this._firestore);return this._mutations=this._mutations.concat(new hc(n._key,Gt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ae(q.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function pu(t,e){if((t=ct(t)).firestore!==e)throw new ae(q.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d2(t){return vc(t=mn(t,ls)),new u2(t,e=>ca(t,e))}(function(e,n=!0){(function(s){Si=s})(Ti),fi(new Ps("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new ls(new oC(r.getProvider("auth-internal")),new cC(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ae(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Br(Cm,Rm,e),Br(Cm,Rm,"esm2017")})();const gn=Vv("auth",{state:()=>({user:null,userProfile:null,isAuthReady:!1,authInstance:null,loading:!1,error:null,successMessage:null,isProfileLoading:!1}),getters:{isProfileComplete:t=>!!t.userProfile?.role&&!!t.userProfile?.birthDate,role:t=>t.userProfile?.role},actions:{initAuth(t){t&&(this.authInstance=t,y_(this.authInstance,async e=>{if(e){this.user=e,this.isProfileLoading=!0;try{const n=Js(),s=dn(n,"artifacts","1:27717321225:web:19367fffd750339ea3aed8","users",e.uid),i=await cd(s);i.exists()?this.userProfile=i.data():this.userProfile=null}catch(n){console.error("Failed to fetch user profile:",n),this.userProfile=null}finally{this.isProfileLoading=!1}}else this.user=null,this.userProfile=null;this.isAuthReady=!0}))},setUserProfile(t){this.userProfile=t},async logout(){await zA(this.authInstance)},async signupWithEmail(t,e,n){this.loading=!0,this.error=null,this.successMessage=null;try{const r=await FA(this.authInstance,e,n);return await jA(r.user,{displayName:t}),this.user=r.user,this.successMessage="Account created successfully!",!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async signInWithEmail(t,e){this.loading=!0,this.error=null,this.successMessage=null;try{const n=await UA(this.authInstance,t,e);return this.user=n.user,!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async signInWithGoogle(){this.loading=!0,this.error=null,this.successMessage=null;try{const t=new Jn,e=await dP(this.authInstance,t);return this.user=e.user,!0}catch(t){return this.error=t.message,!1}finally{this.loading=!1}},async sendPasswordReset(t){this.loading=!0,this.error=null,this.successMessage=null;try{return await LA(this.authInstance,t),this.successMessage="Password reset link sent to your email!",!0}catch(e){return this.error=e.message,!1}finally{this.loading=!1}},async confirmPasswordReset(t,e){this.loading=!0,this.error=null,this.successMessage=null;try{return await $A(this.authInstance,t,e),this.successMessage="Your password has been reset successfully! You can now sign in with your new password.",!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}}}}),Di=Vv("database",{state:()=>({loading:!1,error:null}),actions:{_getDBEssentials(){const t=gn();if(!t.user?.uid)return this.error="User not authenticated. Operation cancelled.",null;const e=Js(),n="1:27717321225:web:19367fffd750339ea3aed8",r=t.user.uid;return{db:e,appId:n,userId:r}},async setUserProfile(t,e){console.log(`[DB_STORE] setUserProfile: Updating profile for user ID: ${t}`),this.loading=!0,this.error=null;try{const n=Js(),s=dn(n,"artifacts","1:27717321225:web:19367fffd750339ea3aed8","users",t);return await l2(s,e,{merge:!0}),console.log(`[DB_STORE] setUserProfile: Successfully updated profile for ${t}.`),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async fetchUserProfile(t){this.loading=!0,this.error=null;try{const e=this._getDBEssentials();if(!e)return null;const{db:n,appId:r}=e,s=dn(n,"artifacts",r,"users",t),i=await cd(s);return i.exists()?{id:i.id,...i.data()}:null}catch(e){return this.error=e.message,null}finally{this.loading=!1}},async addNewPatient(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=Pn(n,"artifacts",r,"patients"),o={...t,creatorId:s,createdAt:Oe.now(),updatedAt:Oe.now()};return(await Ua(i,o)).id}catch(n){return this.error=n.message,null}finally{this.loading=!1}},async updatePatientProfile(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s}=n,i=dn(r,"artifacts",s,"patients",t);return await Fa(i,{...e,updatedAt:Oe.now()}),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async fetchPatientsForDoctor(){this.loading=!0,this.error=null;const t=this._getDBEssentials();if(!t)return[];try{const{db:e,appId:n,userId:r}=t,s=Pn(e,"artifacts",n,"patients"),i=Hs(s,Ki("creatorId","==",r),$a("createdAt","desc"));return(await zs(i)).docs.map(c=>({id:c.id,...c.data()}))}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async deletePatientProfile(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return!1;try{const{db:n,appId:r}=e,s=d2(n),i=dn(n,"artifacts",r,"patients",t);s.delete(i);const o=Pn(n,"artifacts",r,"scans"),c=Hs(o,Ki("patientId","==",t));return(await zs(c)).forEach(u=>s.delete(u.ref)),await s.commit(),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async createScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=Pn(n,"artifacts",r,"scans"),o={...t};delete o.id;let c;const l=o.scanDate;if(l instanceof Oe)c=l;else if(l instanceof Date&&!isNaN(l.getTime()))c=Oe.fromDate(l);else if(typeof l=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(l)){const m=l.split("-"),p=new Date(Date.UTC(m[0],parseInt(m[1],10)-1,m[2],12,0,0));if(isNaN(p.getTime()))throw new RangeError("Provided scanDate string resulted in an invalid Date.");c=Oe.fromDate(p)}else throw console.error("Invalid scanDate received by createScan:",l),new RangeError('Invalid or unsupported type for scanDate. Must be a Timestamp, Date, or "YYYY-MM-DD" string.');const u={...o,scanDate:c,creatorId:s,isPersonalScan:o.patientId===s,createdAt:Oe.now()};if(!u.patientId)throw new Error("Cannot create a scan without a patientId.");return(await Ua(i,u)).id}catch(n){return console.error("[DB_STORE] Error details during scan creation:",n),this.error=n.message,null}finally{this.loading=!1}},async updateScan(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s}=n,i=dn(r,"artifacts",s,"scans",t),o={...e,updatedAt:Oe.now()};return await Fa(i,o),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async deleteScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return!1;try{const{db:n,appId:r}=e,s=dn(n,"artifacts",r,"scans",t);return await Pg(s),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async fetchScansForPatient(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return[];try{const{db:n,appId:r}=e,s=Pn(n,"artifacts",r,"scans"),i=Hs(s,Ki("patientId","==",t),$a("scanDate","desc"));return(await zs(i)).docs.map(c=>({id:c.id,...c.data()}))}catch(n){return console.error("Error in fetchScansForPatient. Is the Firestore index for 'scans' (patientId asc, scanDate desc) created?",n),this.error=n.message,[]}finally{this.loading=!1}},async fetchDoctorCreatedScans(){this.loading=!0,this.error=null;const t=this._getDBEssentials();if(!t)return[];try{const{db:e,appId:n,userId:r}=t,s=Pn(e,"artifacts",n,"scans"),i=Hs(s,Ki("creatorId","==",r),$a("scanDate","desc"));return(await zs(i)).docs.map(c=>({id:c.id,...c.data()}))}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async addPregnancyDeclaration(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=Pn(n,"artifacts",r,"users",s,"pregnancies"),o={...t,status:"active",endDate:null,createdAt:Oe.now()};return(await Ua(i,o)).id}catch(n){return this.error=n.message,null}finally{this.loading=!1}},async fetchPregnancyHistory(){this.loading=!0,this.error=null;const t=this._getDBEssentials();if(!t)return[];try{const{db:e,appId:n,userId:r}=t,s=Pn(e,"artifacts",n,"users",r,"pregnancies"),i=Hs(s,$a("declarationDate","desc"));return(await zs(i)).docs.map(c=>({id:c.id,...c.data()}))}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async updatePregnancyRecord(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s,userId:i}=n,o=dn(r,"artifacts",s,"users",i,"pregnancies",t);return await Fa(o,{...e,updatedAt:Oe.now()}),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async fetchSinglePatient(t){this.loading=!0,this.error=null;try{const e=Js(),r=dn(e,"artifacts","1:27717321225:web:19367fffd750339ea3aed8","patients",t),s=await cd(r);return s.exists()?{id:s.id,...s.data()}:(this.error=`No patient found with ID: ${t}`,console.warn(`[DB_STORE] No patient found with ID: ${t}`),null)}catch(e){return this.error=e.message,null}finally{this.loading=!1}},async createOtherScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=Pn(n,"artifacts",r,"other_scans"),{id:o,...c}=t,l={...c,userId:s,createdAt:Oe.now()};return console.log("[DB_STORE] Attempting to createOtherScan with cleaned payload:",l),(await Ua(i,l)).id}catch(n){return this.error=n.message,console.error("[DB_STORE] Error creating other scan:",n),null}finally{this.loading=!1}},async updateOtherScan(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s}=n,i=dn(r,"artifacts",s,"other_scans",t);return await Fa(i,{...e,updatedAt:Oe.now()}),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async deleteOtherScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return!1;try{const{db:n,appId:r}=e,s=dn(n,"artifacts",r,"other_scans",t);return await Pg(s),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async fetchOtherScansForUser(t){this.loading=!0,this.error=null;try{const e=Js(),r=Hs(Pn(e,"artifacts","1:27717321225:web:19367fffd750339ea3aed8","other_scans"),Ki("userId","==",t)),i=(await zs(r)).docs.map(o=>({id:o.id,...o.data()}));return i.sort((o,c)=>c.date.toDate()-o.date.toDate()),i}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async fetchAllDosesForUser(t,e){this.loading=!0,this.error=null,console.log(`[DB_STORE] Starting fetchAllDosesForUser for userId: ${t}, role: ${e}`);try{const n=[],r=await this.fetchOtherScansForUser(t);console.log("[DB_STORE] other scans:",JSON.parse(JSON.stringify(r))),r.forEach(i=>{i.dosage>0&&n.push({date:i.date,dose:i.dosage})});const s=await this.fetchScansForPatient(t);if(console.log("[DB_STORE] personal scans:",JSON.parse(JSON.stringify(s))),s.forEach(i=>{i.patientDose>0&&n.push({date:i.scanDate,dose:i.patientDose})}),e==="doctor"){const i=await this.fetchDoctorCreatedScans();console.log("[DB_STORE] created scans (for occupational dose):",JSON.parse(JSON.stringify(i))),i.forEach(o=>{o.doctorDose>0&&n.push({date:o.scanDate,dose:o.doctorDose})})}return n}catch(n){return this.error=`Failed to fetch all doses: ${n.message}`,console.error(`[DB_STORE] Error: ${n.message}`),[]}finally{this.loading=!1}}}}),vt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},h2=["dir"],f2={key:0,class:"loading-state"},p2={class:"counter-label"},m2={class:"progress-details"},g2={class:"counter-bar-container"},y2={class:"counter-value"},v2={__name:"MsvCounter",props:{currentMsv:{type:Number,default:0},yearlyLimit:{type:Number,default:1},currentLanguage:String,isLoading:{type:Boolean,default:!0}},setup(t){const e=t,n=Te(()=>e.currentMsv>=e.yearlyLimit?"status-danger":e.yearlyLimit>0?e.currentMsv/e.yearlyLimit*100<50?"status-safe":"status-warning":"status-safe");return(r,s)=>(U(),j("div",{class:zr(["msv-counter",n.value]),dir:t.currentLanguage==="en"?"ltr":"rtl"},[t.isLoading?(U(),j("div",f2,_(t.currentLanguage==="en"?"Calculating...":"جاري الحساب..."),1)):(U(),j(Xe,{key:1},[d("span",p2,_(t.currentLanguage==="en"?"Annual Dose:":"الجرعة السنوية:"),1),d("div",m2,[d("div",g2,[d("div",{class:"counter-bar",style:jl({width:t.yearlyLimit>0?Math.min(t.currentMsv/t.yearlyLimit*100,100)+"%":"100%"})},null,4)]),d("span",y2,_(t.currentMsv.toFixed(2))+" mSv ",1)])],64))],10,h2))}},_2=vt(v2,[["__scopeId","data-v-401d1770"]]),b2={class:"app-header"},w2={class:"app-header-center"},E2={class:"project-title"},T2={__name:"TheHeader",props:{currentLanguage:String,user:Object,msvData:Object},emits:["toggle-language","toggle-info-modal"],setup(t){return(e,n)=>(U(),j("header",b2,[d("button",{onClick:n[0]||(n[0]=r=>e.$emit("toggle-language")),class:"language-toggle-button"},_(t.currentLanguage==="en"?"العربية":"English"),1),d("div",w2,[d("h1",E2,_(t.currentLanguage==="en"?"mSv Exposure Calculator":"حاسبة التعرض للأشعة"),1),t.user?(U(),In(_2,{key:0,"current-msv":t.msvData.current,"yearly-limit":t.msvData.limit,"is-loading":t.msvData.isLoading,"current-language":t.currentLanguage},null,8,["current-msv","yearly-limit","is-loading","current-language"])):pe("",!0)]),d("button",{onClick:n[1]||(n[1]=r=>e.$emit("toggle-info-modal")),class:"info-button-global"},_(t.currentLanguage==="en"?"Information":"معلومات"),1)]))}},I2=vt(T2,[["__scopeId","data-v-d06322cd"]]),S2=["dir"],A2={class:"modal-title"},P2={key:0,class:"info-text-content"},C2={key:1,class:"info-text-content"},R2=`
<p>التعرض الإشعاعي هو كمية الإشعاع التي يتلقاها الجسم عند مروره في بيئة تحتوي على إشعاع مؤين، مثل الأشعة السينية (X-rays) أو الأشعة المقطعية (CT). وتُقاس الجرعة الإشعاعية بوحدة "الميلي سيفرت" (mSv)، وهي وحدة تعكس التأثير البيولوجي للإشعاع على أنسجة الجسم.</p>
<p>تكمن الخطورة في أن الإشعاع المؤين يمكن أن يسبب تلفًا في الخلايا، مما يزيد من خطر الإصابة بالأمراض المزمنة مثل السرطان، خاصةً مع التعرض المتكرر أو الطويل. لذلك:</p>
<ul>
  <li><strong>المرضى</strong> يجب ألا يتعرضوا إلا عند الضرورة، ويجب تسجيل كل فحص وتقييم فائدته مقابل ضرره.</li>
  <li><strong>العاملون في المجال الطبي</strong> مثل أطباء الأشعة وفنيي الأشعة، يتعرضون بشكل مزمن، مما يستدعي مراقبة دورية واتباع إجراءات السلامة.</li>
  <li><strong>النساء الحوامل</strong> هن فئة خاصة يجب أخذ الحيطة الشديدة عند تعرّضهن للإشعاع لتجنّب التأثير على الجنين.</li>
</ul>
<p><strong>الحد السنوي المسموح به للتعرض الإشعاعي</strong><br>
وفقًا لتوصيات اللجنة الدولية للحماية من الإشعاع (ICRP)، هذه هي الحدود الموصى بها:</p>
`,D2=`
<p>Radiation exposure is the amount of radiation received by the body when passing through an environment containing ionizing radiation, such as X-rays or CT scans. The radiation dose is measured in "millisieverts" (mSv), a unit that reflects the biological effect of radiation on body tissues.</p>
<p>The danger lies in the fact that ionizing radiation can cause cell damage, increasing the risk of chronic diseases like cancer, especially with repeated or prolonged exposure. Therefore:</p>
<ul>
  <li><strong>Patients</strong> should only be exposed when necessary, and every examination should be recorded and its benefit evaluated against its harm.</li>
  <li><strong>Medical professionals</strong>, such as radiologists and radiology technicians, are chronically exposed, requiring periodic monitoring and adherence to safety procedures.</li>
  <li><strong>Pregnant women</strong> are a special category who should exercise extreme caution when exposed to radiation to avoid affecting the fetus.</li>
</ul>
<p><strong>Annual Permissible Radiation Exposure Limit</strong><br>
According to the recommendations of the International Commission on Radiological Protection (ICRP), these are the recommended limits:</p>
`,k2={__name:"InfoModal",props:{show:Boolean},emits:["close"],setup(t){const e=Ve("currentLanguage");return(n,r)=>(U(),In(ss,{name:"modal-fade"},{default:fr(()=>[t.show?(U(),j("div",{key:0,class:"modal-overlay",onClick:r[1]||(r[1]=tt(s=>n.$emit("close"),["self"]))},[d("div",{class:"modal-content",dir:y(e)==="ar"?"rtl":"ltr"},[d("button",{class:"close-modal-button",onClick:r[0]||(r[0]=s=>n.$emit("close"))},"×"),d("h2",A2,_(y(e)==="en"?"Radiation Exposure Awareness":"التوعية بالتعرض الإشعاعي"),1),y(e)==="en"?(U(),j("div",P2,[d("div",{innerHTML:D2}),r[2]||(r[2]=d("div",{class:"overflow-x-auto mt-4"},[d("table",{class:"info-table"},[d("thead",null,[d("tr",null,[d("th",null,"Category"),d("th",null,"Annual Permissible Limit"),d("th",null,"Notes")])]),d("tbody",null,[d("tr",null,[d("td",null,"Medical Professionals"),d("td",null,"20 mSv"),d("td",null,"Averaged over 5 years, not exceeding 50 mSv in any single year.")]),d("tr",null,[d("td",null,"Patients"),d("td",null,"No strict limit"),d("td",null,"Exposure should be as low as reasonably achievable (ALARA principle).")]),d("tr",null,[d("td",null,"Pregnant Workers"),d("td",null,"1 mSv to the fetus"),d("td",null,"From the date of knowledge of pregnancy until birth.")]),d("tr",null,[d("td",null,"General Public"),d("td",null,"1 mSv"),d("td",null,"Under normal conditions without medical procedures.")])])])],-1))])):(U(),j("div",C2,[d("div",{innerHTML:R2}),r[3]||(r[3]=d("div",{class:"overflow-x-auto mt-4"},[d("table",{class:"info-table"},[d("thead",null,[d("tr",null,[d("th",null,"الفئة"),d("th",null,"الحد السنوي المسموح به"),d("th",null,"ملاحظات")])]),d("tbody",null,[d("tr",null,[d("td",null,"العاملون في المجال الطبي"),d("td",null,"20 ميلي سيفرت (mSv)"),d("td",null,"كمتوسط على مدى 5 سنوات، بشرط ألا يتجاوز 50 mSv في سنة واحدة.")]),d("tr",null,[d("td",null,"المرضى"),d("td",null,"لا يوجد حد صارم"),d("td",null,"يجب تقليل التعرض بقدر الإمكان وفق مبدأ ALARA.")]),d("tr",null,[d("td",null,"النساء الحوامل العاملات"),d("td",null,"1 ميلي سيفرت للجنين خلال الحمل"),d("td",null,"يجب ألا تتجاوز الجرعة 1 mSv من تاريخ العلم بالحمل وحتى الولادة.")]),d("tr",null,[d("td",null,"العامة (غير العاملين بالمجال)"),d("td",null,"1 ميلي سيفرت"),d("td",null,"في الظروف الطبيعية بدون إجراءات طبية.")])])])],-1))]))],8,S2)])):pe("",!0)]),_:1}))}},O2=vt(k2,[["__scopeId","data-v-5954aac6"]]),x2={id:"app-container"},N2={class:"main-content"},V2={key:1,class:"loading-fullpage"},M2={__name:"App",setup(t){const e=gn(),n=Di(),r=Ee(localStorage.getItem("language")||"en"),s=Ee(0),i=Ee(20),o=Ee(!1),c=m=>{r.value=m,localStorage.setItem("language",m),document.documentElement.lang=m,document.documentElement.dir=m==="ar"?"rtl":"ltr"},l=()=>{c(r.value==="en"?"ar":"en")},u=()=>{console.log("Before showInfoModal:",o.value),o.value=!0,console.log("After showInfoModal:",o.value)},h=async()=>{if(console.log("Calculating the msv..."),!e.user?.uid||!e.role){s.value=0;return}const m=await n.fetchAllDosesForUser(e.user.uid,e.role);if(console.log("All doses:",JSON.parse(JSON.stringify(m))),m){const p=new Date(new Date().getFullYear(),0,1),v=I=>I?I.toDate?I.toDate():new Date(I):null,R=m.filter(I=>{const E=v(I.date);return E&&E>=p}).reduce((I,E)=>I+(E.dose||0),0);s.value=parseFloat(R.toFixed(3))}console.log("Finished Calculation")};return Qn("currentLanguage",r),Qn("currentMsv",s),Qn("doseLimit",i),Qn("triggerMsvRecalculation",h),Qn("showInfoModal",o),Qe(()=>e.userProfile,m=>{e.user&&m?h():e.user||(s.value=0)},{deep:!0,immediate:!0}),c(r.value),(m,p)=>(U(),j("div",x2,[Ce(I2,{"current-language":r.value,user:y(e).user,"msv-data":{current:s.value,limit:i.value,isLoading:y(n).loading},onToggleLanguage:l,onToggleInfoModal:u},null,8,["current-language","user","msv-data"]),Ce(O2,{show:o.value,onClose:p[0]||(p[0]=v=>o.value=!1)},null,8,["show"]),d("main",N2,[y(e).isAuthReady?(U(),In(y(Rv),{key:0})):(U(),j("div",V2,p[1]||(p[1]=[d("span",null,"Loading Application...",-1)])))])]))}},L2={class:"signup-page"},$2={class:"signup-main-content"},F2={class:"signup-card"},U2=["dir"],B2=["dir"],j2={class:"form-group"},q2=["dir"],H2=["placeholder","dir"],z2={class:"form-group"},W2=["dir"],G2=["placeholder","dir"],K2={class:"form-group"},Y2=["dir"],X2=["placeholder","dir"],Q2=["disabled"],J2={key:0},Z2={key:1},ek=["dir"],tk=["dir"],nk=["disabled"],rk=["dir"],sk=["dir"],ik={__name:"SignupView",setup(t){const e=is(),n=gn(),r=Ve("currentLanguage"),s=Ee(""),i=Ee(""),o=Ee(""),c=async()=>{if(i.value!==o.value){n.error=r.value==="en"?"Passwords do not match.":"كلمتا المرور غير متطابقتين.";return}await n.signupWithEmail("",s.value,i.value)},l=async()=>{await n.signInWithGoogle()},u=()=>{e.push("/signin")},h=()=>{e.push("/recommend/guest")};return(m,p)=>(U(),j("div",L2,[d("main",$2,[d("section",F2,[d("h2",{dir:y(r)==="ar"?"rtl":"ltr"},_(y(r)==="en"?"Welcome! Please Sign Up":"أهلاً بك! يرجى التسجيل"),9,U2),d("p",{dir:y(r)==="ar"?"rtl":"ltr"},_(y(r)==="en"?"Create your account to get started.":"أنشئ حسابك للبدء."),9,B2),d("form",{onSubmit:tt(c,["prevent"]),class:"signup-form"},[d("div",j2,[d("label",{for:"email",dir:y(r)==="ar"?"rtl":"ltr"},_(y(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,q2),ee(d("input",{type:"email",id:"email","onUpdate:modelValue":p[0]||(p[0]=v=>s.value=v),placeholder:y(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:y(r)==="ar"?"rtl":"ltr",required:""},null,8,H2),[[me,s.value]])]),d("div",z2,[d("label",{for:"password",dir:y(r)==="ar"?"rtl":"ltr"},_(y(r)==="en"?"Password":"كلمة المرور"),9,W2),ee(d("input",{type:"password",id:"password","onUpdate:modelValue":p[1]||(p[1]=v=>i.value=v),placeholder:y(r)==="en"?"Enter your password":"أدخل كلمة المرور",dir:y(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,G2),[[me,i.value]])]),d("div",K2,[d("label",{for:"confirmPassword",dir:y(r)==="ar"?"rtl":"ltr"},_(y(r)==="en"?"Confirm Password":"تأكيد كلمة المرور"),9,Y2),ee(d("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":p[2]||(p[2]=v=>o.value=v),placeholder:y(r)==="en"?"Confirm your password":"أكد كلمة المرور",dir:y(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,X2),[[me,o.value]])]),d("button",{class:"action-button primary",type:"submit",disabled:y(n).loading},[y(n).loading?(U(),j("span",J2,_(y(r)==="en"?"Signing Up...":"جاري التسجيل..."),1)):(U(),j("span",Z2,_(y(r)==="en"?"Create Account":"إنشاء حساب"),1))],8,Q2)],32),y(n).error?(U(),j("div",{key:0,class:"message error-message",dir:y(r)==="ar"?"rtl":"ltr"},_(y(n).error),9,ek)):pe("",!0),d("div",{class:"divider",dir:y(r)==="ar"?"rtl":"ltr"},[d("span",null,_(y(r)==="en"?"OR":"أو"),1)],8,tk),d("button",{onClick:l,class:"action-button google-button",disabled:y(n).loading},[p[3]||(p[3]=dv('<svg class="google-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-68fe96a2><path d="M44.5 20H24V28.5H35.5C34.75 31.85 32.5 34.5 29.5 36.5L24 41.5L24 48H32.5C39.5 48 44.5 43.5 44.5 36.5C44.5 35.5 44.3 34.5 44.1 33.5L44.5 20Z" fill="#4285F4" data-v-68fe96a2></path><path d="M24 44.5C29.5 44.5 34.25 42.5 37.75 39.25L29.5 36.5C27.25 37.75 24 38.5 24 38.5C18.5 38.5 13.75 34.25 11.75 28.5L6.25 33.5C8.75 38.75 15.5 44.5 24 44.5Z" fill="#34A853" data-v-68fe96a2></path><path d="M11.75 28.5C11.25 27.25 11 25.75 11 24C11 22.25 11.25 20.75 11.75 19.5L17.25 14.5C16 17.25 15.25 20.5 15.25 24C15.25 27.5 16 30.75 17.25 33.5L11.75 28.5Z" fill="#FBBC05" data-v-68fe96a2></path><path d="M24 9.5C26.75 9.5 29.25 10.5 31.25 12.25L36.5 7C32.5 3 27.25 0 24 0C15.5 0 8.75 5.75 6.25 11L11.75 16C13.75 10.25 18.5 6 24 6C24 6 24 9.5 24 9.5Z" fill="#EA4335" data-v-68fe96a2></path></svg>',1)),d("span",null,_(y(r)==="en"?"Sign Up with Google":"التسجيل باستخدام جوجل"),1)],8,nk),d("button",{class:"action-button guest-button",onClick:h,dir:y(r)==="ar"?"rtl":"ltr"},_(y(r)==="en"?"Get Recommendation as Guest":"الحصول على نصيحة كضيف"),9,rk),d("p",{class:"switch-link-container",dir:y(r)==="ar"?"rtl":"ltr"},[at(_(y(r)==="en"?"Already have an account?":"هل لديك حساب بالفعل؟")+" ",1),d("a",{href:"#",onClick:tt(u,["prevent"])},_(y(r)==="en"?"Sign In":"تسجيل الدخول"),1)],8,sk)])])]))}},ok=vt(ik,[["__scopeId","data-v-68fe96a2"]]),ak={class:"login-page"},lk={class:"login-main-content"},ck={class:"login-card"},uk=["dir"],dk=["dir"],hk={class:"form-group"},fk=["dir"],pk=["placeholder","dir"],mk={class:"form-group"},gk=["dir"],yk=["placeholder","dir"],vk=["dir"],_k=["disabled"],bk={key:0},wk={key:1},Ek=["dir"],Tk=["dir"],Ik=["dir"],Sk=["disabled"],Ak=["dir"],Pk=["dir"],Ck={__name:"SigninView",setup(t){const e=is(),n=gn(),r=Ve("currentLanguage"),s=Ee(""),i=Ee(""),o=async()=>{await n.signInWithEmail(s.value,i.value)},c=async()=>{await n.signInWithGoogle()},l=()=>{e.push("/")},u=()=>{e.push("/resetpassword")},h=()=>{e.push("/recommend/guest")};return(m,p)=>(U(),j("div",ak,[d("main",lk,[d("section",ck,[d("h2",{dir:y(r)==="ar"?"rtl":"ltr"},_(y(r)==="en"?"Welcome Back! Please Sign In":"أهلاً بعودتك! يرجى تسجيل الدخول"),9,uk),d("p",{dir:y(r)==="ar"?"rtl":"ltr"},_(y(r)==="en"?"Sign in to access your dashboard.":"سجّل الدخول للوصول إلى لوحة التحكم الخاصة بك."),9,dk),d("form",{onSubmit:tt(o,["prevent"]),class:"login-form"},[d("div",hk,[d("label",{for:"email",dir:y(r)==="ar"?"rtl":"ltr"},_(y(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,fk),ee(d("input",{type:"email",id:"email","onUpdate:modelValue":p[0]||(p[0]=v=>s.value=v),placeholder:y(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:y(r)==="ar"?"rtl":"ltr",required:""},null,8,pk),[[me,s.value]])]),d("div",mk,[d("label",{for:"password",dir:y(r)==="ar"?"rtl":"ltr"},_(y(r)==="en"?"Password":"كلمة المرور"),9,gk),ee(d("input",{type:"password",id:"password","onUpdate:modelValue":p[1]||(p[1]=v=>i.value=v),placeholder:y(r)==="en"?"Enter your password":"أدخل كلمة المرور",dir:y(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,yk),[[me,i.value]]),d("p",{class:"forgot-password-link",dir:y(r)==="ar"?"rtl":"ltr"},[d("a",{href:"#",onClick:tt(u,["prevent"])},_(y(r)==="en"?"Forgot your password?":"هل نسيت كلمة المرور؟"),1)],8,vk)]),d("button",{class:"action-button primary",type:"submit",disabled:y(n).loading},[y(n).loading?(U(),j("span",bk,_(y(r)==="en"?"Signing In...":"جاري تسجيل الدخول..."),1)):(U(),j("span",wk,_(y(r)==="en"?"Sign in":"تسجيل الدخول"),1))],8,_k)],32),y(n).error?(U(),j("div",{key:0,class:"message error-message",dir:y(r)==="ar"?"rtl":"ltr"},_(y(n).error),9,Ek)):pe("",!0),y(n).successMessage?(U(),j("div",{key:1,class:"message success-message",dir:y(r)==="ar"?"rtl":"ltr"},_(y(n).successMessage),9,Tk)):pe("",!0),d("div",{class:"divider",dir:y(r)==="ar"?"rtl":"ltr"},[d("span",null,_(y(r)==="en"?"OR":"أو"),1)],8,Ik),d("button",{onClick:c,class:"action-button google-button",disabled:y(n).loading},[p[2]||(p[2]=dv('<svg class="google-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a273c7d9><path d="M44.5 20H24V28.5H35.5C34.75 31.85 32.5 34.5 29.5 36.5L24 41.5L24 48H32.5C39.5 48 44.5 43.5 44.5 36.5C44.5 35.5 44.3 34.5 44.1 33.5L44.5 20Z" fill="#4285F4" data-v-a273c7d9></path><path d="M24 44.5C29.5 44.5 34.25 42.5 37.75 39.25L29.5 36.5C27.25 37.75 24 38.5 24 38.5C18.5 38.5 13.75 34.25 11.75 28.5L6.25 33.5C8.75 38.75 15.5 44.5 24 44.5Z" fill="#34A853" data-v-a273c7d9></path><path d="M11.75 28.5C11.25 27.25 11 25.75 11 24C11 22.25 11.25 20.75 11.75 19.5L17.25 14.5C16 17.25 15.25 20.5 15.25 24C15.25 27.5 16 30.75 17.25 33.5L11.75 28.5Z" fill="#FBBC05" data-v-a273c7d9></path><path d="M24 9.5C26.75 9.5 29.25 10.5 31.25 12.25L36.5 7C32.5 3 27.25 0 24 0C15.5 0 8.75 5.75 6.25 11L11.75 16C13.75 10.25 18.5 6 24 6C24 6 24 9.5 24 9.5Z" fill="#EA4335" data-v-a273c7d9></path></svg>',1)),d("span",null,_(y(r)==="en"?"Sign in with Google":"تسجيل الدخول باستخدام جوجل"),1)],8,Sk),d("button",{class:"action-button guest-button",onClick:h,dir:y(r)==="ar"?"rtl":"ltr"},_(y(r)==="en"?"Get Recommendation as Guest":"الحصول على نصيحة كضيف"),9,Ak),d("p",{class:"switch-link-container",dir:y(r)==="ar"?"rtl":"ltr"},[at(_(y(r)==="en"?"Don't have an account?":"ليس لديك حساب؟")+" ",1),d("a",{href:"#",onClick:tt(l,["prevent"])},_(y(r)==="en"?"Sign Up":"التسجيل"),1)],8,Pk)])])]))}},Rk=vt(Ck,[["__scopeId","data-v-a273c7d9"]]),Dk=["dir"],kk={class:"recommend-main-content"},Ok={class:"recommend-card"},xk={class:"mode-switcher"},Nk={key:0,class:"loading-overlay"},Vk={key:1,class:"patient-info-display"},Mk={class:"form-group"},Lk=["disabled"],$k={class:"form-group"},Fk=["disabled"],Uk={class:"form-group"},Bk=["disabled"],jk={value:"male"},qk={value:"female"},Hk={key:0,class:"pregnancy-section"},zk={class:"form-group checkbox-group"},Wk=["disabled"],Gk={key:0,class:"form-group"},Kk=["disabled"],Yk={class:"form-group"},Xk=["disabled"],Qk={class:"form-group"},Jk={key:1,class:"doctor-exposure-section"},Zk={class:"section-title"},eO={class:"form-group"},tO={class:"section-title"},nO={class:"form-group"},rO={key:0,class:"required-indicator"},sO=["required"],iO={disabled:"",value:""},oO=["value"],aO={key:2,class:"form-group"},lO={key:0,class:"required-indicator"},cO=["required"],uO={class:"form-row"},dO={class:"form-group"},hO={key:0,class:"required-indicator"},fO=["required"],pO={value:"CT"},mO={value:"X-ray"},gO={class:"form-group"},yO={key:0,class:"required-indicator"},vO=["required"],_O={disabled:"",value:""},bO=["value"],wO={key:3,class:"form-group"},EO={key:0,class:"required-indicator"},TO=["required"],IO=["disabled"],SO={key:2,class:"message error-message"},AO={key:3,class:"prediction-result-wrapper"},PO={key:0,class:"message warning-message"},CO={style:{"white-space":"pre-wrap"}},RO={class:"prediction-result"},DO={key:0,class:"msv-details-container"},kO={class:"msv-details"},OO={key:0,class:"msv-details doctor-dose"},xO={class:"result-text"},NO={style:{"white-space":"pre-wrap"}},VO={key:1,class:"save-recommendation-section"},MO=["disabled"],LO={class:"save-note"},$O={class:"switch-link-container"},FO={__name:"RecommendView",setup(t){const e=is(),n=Dv(),r=gn(),s=Di(),i=Ve("currentLanguage"),o=Ve("currentMsv");Ve("doseLimit");const c=Ve("triggerMsvRecalculation"),l={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},u=[{value:"head",en:"Head",ar:"الرأس"},{value:"neck",en:"Neck",ar:"الرقبة"},{value:"chest",en:"Chest",ar:"الصدر"},{value:"abdomen",en:"Abdomen",ar:"البطن"},{value:"pelvis",en:"Pelvis",ar:"الحوض"},{value:"spine",en:"Spine",ar:"العمود الفقري"},{value:"upper_extremity",en:"Upper Extremity",ar:"الطرف العلوي"},{value:"lower_extremity",en:"Lower Extremity",ar:"الطرف السفلي"},{value:"other",en:"Other",ar:"أخرى"}],h={patient:{CT:{"Abdomen & Pelvis":14,"Brain with contrast":2,"Angiography CTA":12,Urography:8,Enterography:8,default:6},"X-ray":{"Barium Enema":7,"IV Urogram (IVP)":2.5,HSG:1.5,VCUG:1,default:.5}},doctor:{CT:{default:1e-5},"X-ray":{"Barium Enema":1e-4,"IV Urogram (IVP)":5e-5,HSG:2e-4,VCUG:15e-5,default:5e-5}}},m=Ee("personal"),p=Ee({patientId:null,patientName:"",birthDate:"",gender:"male",weight:null,patientCumulativeDose:0,medicalHistory:"",currentSymptoms:"",allergies:"",isPregnant:!1,estimatedDueDate:"",scanType:"CT",scanPlace:"",otherScanPlaceDescription:"",subScanType:"",otherScanDescription:"",numberOfScans:1,doctorAdditionalContext:""}),v=Ee(!1),R=Ee(!1),I=Ee(!1),E=Ee(null),k=Ee(""),N=Te(()=>r.role),$=Te(()=>N.value==="doctor"&&m.value==="personal"),V=Te(()=>N.value==="doctor"&&m.value==="general"),F=Te(()=>l[p.value.scanType]||[]),X=Te(()=>p.value.subScanType==="Other"),P=Te(()=>p.value.scanPlace==="other"),w=Te(()=>m.value==="personal"?i.value==="en"?"Your Estimated Dose":"جرعتك المقدرة":i.value==="en"?"Patient Dose":"جرعة المريض"),T=Te(()=>i.value==="en"?"Occupational Dose":"الجرعة المهنية"),C=Te(()=>!E.value||E.value.doctorOccupationalMsv===null?!1:V.value),x=()=>{p.value={patientId:null,patientName:"",birthDate:"",gender:"male",weight:null,patientCumulativeDose:0,medicalHistory:"",currentSymptoms:"",allergies:"",isPregnant:!1,estimatedDueDate:"",scanType:"CT",scanPlace:"",otherScanPlaceDescription:"",subScanType:"",otherScanDescription:"",numberOfScans:1,doctorAdditionalContext:""}},D=Q=>Q?(typeof Q.toDate=="function"?Q.toDate():new Date(Q)).toISOString().split("T")[0]:"",S=async Q=>{if(Q){I.value=!0,x();try{let Y=Q===r.user?.uid?r.userProfile:await s.fetchSinglePatient(Q);if(Y){p.value.patientId=Q,p.value.patientName=Y.displayName||Y.name||"",p.value.birthDate=D(Y.birthDate),p.value.weight=Y.weight||null,p.value.gender=Y.gender||"male",p.value.isPregnant=Y.isPregnant||!1,p.value.estimatedDueDate=D(Y.estimatedDueDate),p.value.medicalHistory=Array.isArray(Y.medicalHistory)?Y.medicalHistory.join(", "):"",p.value.allergies=Array.isArray(Y.allergies)?Y.allergies.join(", "):"";const he=await s.fetchScansForPatient(Q);if(he){const it=new Date(new Date().getFullYear(),0,1),pt=Me=>Me?Me.toDate?Me.toDate():new Date(Me):null,Ge=he.filter(Me=>pt(Me.scanDate)>=it);p.value.patientCumulativeDose=parseFloat(Ge.reduce((Me,on)=>Me+(on.patientDose||0),0).toFixed(3))}}}catch(Y){console.error("Error fetching patient details:",Y),k.value=i.value==="en"?"Failed to load patient data.":"فشل في تحميل بيانات المريض."}finally{I.value=!1}}};Qe(m,Q=>{E.value=null,Q==="personal"&&r.user?S(r.user.uid):n.query.patientId||x()}),Qe(()=>n.query.patientId,Q=>{Q?(m.value="general",S(Q)):r.user&&(m.value="personal",S(r.user.uid))},{immediate:!0}),Qe(()=>p.value.isPregnant,Q=>{Q||(p.value.estimatedDueDate="")}),Qe(()=>p.value.scanType,()=>{p.value.subScanType="",p.value.otherScanDescription="",p.value.numberOfScans=1});const xe=Q=>{try{const Y=p.value.subScanType==="Other"?"default":p.value.subScanType,it=h[Q][p.value.scanType];if(!it)return null;let pt=it[Y]??it.default;return pt===void 0?null:p.value.scanType==="X-ray"?pt*p.value.numberOfScans:pt}catch(Y){return console.error("Error retrieving fallback dose:",Y),null}},de=async()=>{if(v.value=!0,k.value="",E.value=null,!p.value.birthDate){k.value=i.value==="en"?"Date of Birth is a required field.":"تاريخ الميلاد حقل مطلوب.",v.value=!1;return}const Q=p.value.scanPlace&&p.value.scanType&&p.value.subScanType;if(V.value&&!Q){k.value=i.value==="en"?"Please complete all required scan details.":"يرجى إكمال جميع تفاصيل الفحص المطلوبة.",v.value=!1;return}let Y=null,he=null;if(Q&&(Y=xe("patient"),V.value&&(he=xe("doctor")),Y===null)){k.value=i.value==="en"?"Could not determine a dose for the selected scan.":"تعذر تحديد جرعة للفحص المختار.",v.value=!1;return}const it=i.value,pt="You are a highly specialized and board-certified medical radiation advisor. You are tasked with evaluating a patient's medical imaging exposure or providing general advice based on symptoms. Follow these guidelines: 1. *Risk Evaluation*: If scan details are given, estimate if the dose is low, moderate, or high. 2. *High Exposure Warning*: If dose is high, warn the patient. 3. *Alternative Recommendation*: If applicable, suggest safer alternatives like ultrasound or MRI. 4. *General Advice*: If no scan details are given, provide safe, general advice based on symptoms and history, and strongly recommend seeing a doctor. 5. *Doctor Referral*: Always emphasize that the final decision should be with their physician. 6. *Tone*: Be concise, non-alarming, professional, and empathetic.",Ge="You are a highly experienced, board-certified radiologist and medical physicist. Your goal is to provide clear, safety-conscious advice for healthcare providers based on the provided clinical scenario. The recommendation should focus on justification and potential alternatives (like MRI or Ultrasound) if applicable. The warning should highlight any significant risks (e.g., pregnancy, high cumulative doses for patient or doctor). Use professional medical language.";let Me;N.value==="patient"||$.value?Me=pt:Me=Ge;const on=Q?X.value?p.value.otherScanDescription:p.value.subScanType:"N/A",an=Q?P.value?p.value.otherScanPlaceDescription:p.value.scanPlace:"N/A",Ot=`
    ${Me}
    Task: Provide a concise recommendation and a separate warning based on the following clinical scenario. Respond in ${it==="en"?"English":"Arabic"}.
    ${Q?"":"Note: The user has NOT specified a scan and is seeking general advice based on their symptoms and history."}

    Clinical Scenario:
    - Patient Age: ${new Date().getFullYear()-new Date(p.value.birthDate).getFullYear()}
    - Patient Gender: ${p.value.gender}
    - Patient is Pregnant: ${p.value.isPregnant?`Yes, due around ${p.value.estimatedDueDate}`:"No"}
    - Patient Cumulative Dose (This Year): ${p.value.patientCumulativeDose.toFixed(3)} mSv
    - Doctor Cumulative Dose (This Year): ${o.value.toFixed(3)} mSv
    - Reason / Symptoms: ${p.value.currentSymptoms||"Not provided"}
    - Doctor's Additional Context: ${p.value.doctorAdditionalContext||"None"}
    ${Q?`- Proposed Scan: ${p.value.scanType} of the ${an}, protocol: "${on}"`:""}
    ${Q?`- ESTIMATED Patient Dose (from this scan): ${Y.toFixed(3)} mSv`:""}
    ${Q&&he!==null?`- ESTIMATED Doctor Occupational Dose (from this scan): ${he.toFixed(5)} mSv`:""}

    Your Instructions:
    1.  **recommendationText:** Write a brief, professional justification or point of consideration.
    2.  **Warning:** Write a clear, actionable warning if any high-risk factors are present. If none, state that clearly.
  `,H={type:"OBJECT",properties:{recommendationText:{type:"STRING"},Warning:{type:"STRING"}},required:["recommendationText","Warning"]};try{const Le=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC8npsehZb6bm1r7lOc4oofjwkrldVINvY",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:Ot}]}],generationConfig:{responseMimeType:"application/json",responseSchema:H}})});if(!Le.ok)throw new Error(`API Error: ${Le.statusText}`);const A=await Le.json(),O=JSON.parse(A.candidates[0].content.parts[0].text);E.value={...O,patientCalculatedMsv:Y,doctorOccupationalMsv:$.value?0:he}}catch(le){console.error("AI advice generation failed. Using fallback.",le),E.value={recommendationText:it==="en"?"AI service failed. Please use clinical judgment.":"فشلت خدمة الذكاء الاصطناعي. يرجى استخدام الحكم السريري.",Warning:it==="en"?"Review inputs carefully.":"راجع المدخلات بعناية.",patientCalculatedMsv:Y,doctorOccupationalMsv:$.value?0:he}}finally{v.value=!1}},ce=async()=>{if(!E.value||!p.value.patientId){alert("No recommendation data to save or patient ID is missing.");return}if(E.value.patientCalculatedMsv===null){alert(i.value==="en"?"Cannot save a record without specific scan details.":"لا يمكن حفظ سجل بدون تفاصيل فحص محددة.");return}R.value=!0;try{const Q=p.value.scanPlace==="other"?p.value.otherScanPlaceDescription:p.value.scanPlace,Y=p.value.subScanType==="Other"?p.value.otherScanDescription:p.value.subScanType,he={patientId:p.value.patientId,scanType:p.value.scanType,scanPlace:Q,scanDetail:Y,numberOfScans:p.value.numberOfScans,scanDate:Oe.now(),patientDose:Number(E.value.patientCalculatedMsv)||0,doctorDose:Number(E.value.doctorOccupationalMsv)||0,reason:p.value.currentSymptoms||"As per AI recommendation",notes:E.value.recommendationText,isPersonalScan:m.value==="personal"};if(await s.createScan(he))alert(i.value==="en"?"Scan record saved successfully!":"!تم حفظ سجل الفحص بنجاح"),c&&c(),E.value=null;else throw new Error(s.error)}catch(Q){console.error("Error saving scan from recommendation:",Q),alert(i.value==="en"?`Failed to save scan: ${Q.message}`:`فشل حفظ الفحص: ${Q.message}`)}finally{R.value=!1}};return(Q,Y)=>(U(),j("div",{class:"recommend-page",dir:y(i)==="ar"?"rtl":"ltr"},[d("main",kk,[d("section",Ok,[d("h2",null,_(y(i)==="en"?"Medical Scan Advisor":"مستشار الفحص الطبي"),1),d("p",null,_(y(i)==="en"?"Fill in the details to get AI-powered advice. Scan details are optional for patients.":"املأ التفاصيل للحصول على نصيحة مدعومة بالذكاء الاصطناعي. تفاصيل الفحص اختيارية للمرضى."),1),d("div",xk,[d("button",{class:zr({active:m.value==="personal"}),onClick:Y[0]||(Y[0]=he=>m.value="personal")},_(y(i)==="en"?"For Myself":"لنفسي"),3),N.value==="doctor"?(U(),j("button",{key:0,class:zr({active:m.value==="general"}),onClick:Y[1]||(Y[1]=he=>m.value="general")},_(y(i)==="en"?"For Another Patient":"لمريض آخر"),3)):pe("",!0)]),I.value?(U(),j("div",Nk,[d("span",null,_(y(i)==="en"?"Loading Patient Data...":"جاري تحميل بيانات المريض..."),1)])):pe("",!0),p.value.patientId&&p.value.patientName?(U(),j("div",Vk,[at(_(y(i)==="en"?"Getting recommendation for:":"الحصول على توصية لـ:")+" ",1),d("strong",null,_(p.value.patientName),1),at(" ("+_(p.value.weight?`${p.value.weight} kg`:"Weight N/A")+") ",1)])):pe("",!0),d("form",{onSubmit:tt(de,["prevent"]),class:"recommend-form"},[d("div",Mk,[d("label",null,_(y(i)==="en"?"Weight (kg)":"الوزن (كجم)"),1),ee(d("input",{type:"number",step:"0.1","onUpdate:modelValue":Y[2]||(Y[2]=he=>p.value.weight=he),disabled:m.value==="personal",placeholder:"e.g. 70.5"},null,8,Lk),[[me,p.value.weight]])]),d("div",$k,[d("label",null,[at(_(y(i)==="en"?"Date of Birth":"تاريخ الميلاد")+" ",1),Y[16]||(Y[16]=d("span",{class:"required-indicator"},"*",-1))]),ee(d("input",{type:"date","onUpdate:modelValue":Y[3]||(Y[3]=he=>p.value.birthDate=he),disabled:m.value==="personal",required:""},null,8,Fk),[[me,p.value.birthDate]])]),d("div",Uk,[d("label",null,[at(_(y(i)==="en"?"Gender":"الجنس")+" ",1),Y[17]||(Y[17]=d("span",{class:"required-indicator"},"*",-1))]),ee(d("select",{"onUpdate:modelValue":Y[4]||(Y[4]=he=>p.value.gender=he),disabled:m.value==="personal",required:""},[d("option",jk,_(y(i)==="en"?"Male":"ذكر"),1),d("option",qk,_(y(i)==="en"?"Female":"أنثى"),1)],8,Bk),[[lt,p.value.gender]])]),p.value.gender==="female"?(U(),j("div",Hk,[d("div",zk,[d("label",null,[ee(d("input",{type:"checkbox","onUpdate:modelValue":Y[5]||(Y[5]=he=>p.value.isPregnant=he),disabled:m.value==="personal"},null,8,Wk),[[Ko,p.value.isPregnant]]),d("span",null,_(y(i)==="en"?"Is Pregnant?":"هل هي حامل؟"),1)])]),p.value.isPregnant?(U(),j("div",Gk,[d("label",null,[at(_(y(i)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع")+" ",1),Y[18]||(Y[18]=d("span",{class:"required-indicator"},"*",-1))]),ee(d("input",{type:"date","onUpdate:modelValue":Y[6]||(Y[6]=he=>p.value.estimatedDueDate=he),disabled:m.value==="personal",required:""},null,8,Kk),[[me,p.value.estimatedDueDate]])])):pe("",!0)])):pe("",!0),d("div",Yk,[d("label",null,_(y(i)==="en"?"Relevant Medical History":"التاريخ الطبي ذو الصلة"),1),ee(d("textarea",{"onUpdate:modelValue":Y[7]||(Y[7]=he=>p.value.medicalHistory=he),rows:"3",disabled:m.value==="personal"},null,8,Xk),[[me,p.value.medicalHistory]])]),d("div",Qk,[d("label",null,_(y(i)==="en"?"Current Symptoms":"الأعراض الحالية"),1),ee(d("textarea",{"onUpdate:modelValue":Y[8]||(Y[8]=he=>p.value.currentSymptoms=he),rows:"3"},null,512),[[me,p.value.currentSymptoms]])]),N.value==="doctor"&&m.value==="general"?(U(),j("div",Jk,[d("h3",Zk,_(y(i)==="en"?"Occupational Exposure Context":"سياق التعرض المهني"),1),d("div",eO,[d("label",null,_(y(i)==="en"?"Your positioning, shielding, etc. (Optional)":"موقعك، التدريع المستخدم، إلخ (اختياري)"),1),ee(d("textarea",{"onUpdate:modelValue":Y[9]||(Y[9]=he=>p.value.doctorAdditionalContext=he),rows:"3"},null,512),[[me,p.value.doctorAdditionalContext]])])])):pe("",!0),d("h3",tO,_(y(i)==="en"?"Scan to Consider (Optional for Patients)":"الفحص المقترح (اختياري للمرضى)"),1),d("div",nO,[d("label",null,[at(_(y(i)==="en"?"Place of Scan":"مكان الفحص")+" ",1),V.value?(U(),j("span",rO,"*")):pe("",!0)]),ee(d("select",{"onUpdate:modelValue":Y[10]||(Y[10]=he=>p.value.scanPlace=he),required:V.value},[d("option",iO,_(y(i)==="en"?"Select...":"اختر..."),1),(U(),j(Xe,null,Jt(u,he=>d("option",{key:he.value,value:he.value},_(y(i)==="en"?he.en:he.ar),9,oO)),64))],8,sO),[[lt,p.value.scanPlace]])]),P.value?(U(),j("div",aO,[d("label",null,[at(_(y(i)==="en"?"Please specify other place":"يرجى تحديد المكان الآخر")+" ",1),V.value?(U(),j("span",lO,"*")):pe("",!0)]),ee(d("input",{type:"text","onUpdate:modelValue":Y[11]||(Y[11]=he=>p.value.otherScanPlaceDescription=he),required:V.value},null,8,cO),[[me,p.value.otherScanPlaceDescription]])])):pe("",!0),d("div",uO,[d("div",dO,[d("label",null,[at(_(y(i)==="en"?"Scan Category":"فئة الفحص")+" ",1),V.value?(U(),j("span",hO,"*")):pe("",!0)]),ee(d("select",{"onUpdate:modelValue":Y[12]||(Y[12]=he=>p.value.scanType=he),required:V.value},[d("option",pO,_(y(i)==="en"?"CT Scan":"الأشعة المقطعية"),1),d("option",mO,_(y(i)==="en"?"X-ray":"الأشعة السينية"),1)],8,fO),[[lt,p.value.scanType]])]),d("div",gO,[d("label",null,[at(_(y(i)==="en"?"Scan Protocol":"بروتوكول الفحص")+" ",1),V.value?(U(),j("span",yO,"*")):pe("",!0)]),ee(d("select",{"onUpdate:modelValue":Y[13]||(Y[13]=he=>p.value.subScanType=he),required:V.value},[d("option",_O,_(y(i)==="en"?"Select...":"اختر..."),1),(U(!0),j(Xe,null,Jt(F.value,he=>(U(),j("option",{key:he.value,value:he.value},_(y(i)==="en"?he.en:he.ar),9,bO))),128))],8,vO),[[lt,p.value.subScanType]])])]),X.value?(U(),j("div",wO,[d("label",null,[at(_(y(i)==="en"?"Please specify scan protocol":"يرجى تحديد بروتوكول الفحص")+" ",1),V.value?(U(),j("span",EO,"*")):pe("",!0)]),ee(d("input",{type:"text","onUpdate:modelValue":Y[14]||(Y[14]=he=>p.value.otherScanDescription=he),required:V.value},null,8,TO),[[me,p.value.otherScanDescription]])])):pe("",!0),d("button",{type:"submit",disabled:v.value,class:"action-button"},_(v.value?y(i)==="en"?"Getting Advice...":"جاري الحصول على النصيحة...":y(i)==="en"?"Get Advice":"الحصول على نصيحة"),9,IO)],32),k.value?(U(),j("div",SO,_(k.value),1)):pe("",!0),E.value?(U(),j("div",AO,[E.value.Warning?(U(),j("div",PO,[d("h4",null,_(y(i)==="en"?"Important Note":"ملاحظة هامة"),1),d("p",CO,_(E.value.Warning),1)])):pe("",!0),d("div",RO,[E.value.patientCalculatedMsv!==null?(U(),j("div",DO,[d("div",kO,[d("h4",null,_(w.value),1),d("p",null,[d("strong",null,_(E.value.patientCalculatedMsv)+" mSv",1)])]),C.value?(U(),j("div",OO,[d("h4",null,_(T.value),1),d("p",null,[d("strong",null,_(E.value.doctorOccupationalMsv.toFixed(5))+" mSv",1)])])):pe("",!0)])):pe("",!0),d("div",xO,[d("h4",null,_(y(i)==="en"?"AI-Powered Advice":"نصيحة مدعومة بالذكاء الاصطناعي"),1),d("p",NO,_(E.value.recommendationText),1)])]),E.value.patientCalculatedMsv!==null?(U(),j("div",VO,[d("button",{onClick:ce,disabled:R.value,class:"action-button save-button"},_(R.value?y(i)==="en"?"Saving...":"...جاري الحفظ":y(i)==="en"?"Save as Scan Record":"حفظ كسجل فحص"),9,MO),d("p",LO,_(y(i)==="en"?"This will create a new scan record with the estimated doses.":"سيؤدي هذا إلى إنشاء سجل فحص جديد بالجرعات المقدرة."),1)])):pe("",!0)])):pe("",!0),d("p",$O,[d("a",{href:"#",onClick:Y[15]||(Y[15]=tt(he=>y(e).push("/dashboard"),["prevent"]))},_(y(i)==="en"?"Back to Dashboard":"العودة إلى لوحة التحكم"),1)])])])],8,Dk))}},UO=vt(FO,[["__scopeId","data-v-334bfd18"]]);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function BO(t,e,n){return(e=qO(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Cg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Cg(Object(n),!0).forEach(function(r){BO(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Cg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function jO(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function qO(t){var e=jO(t,"string");return typeof e=="symbol"?e:e+""}const Rg=()=>{};let Hh={},ub={},db=null,hb={mark:Rg,measure:Rg};try{typeof window<"u"&&(Hh=window),typeof document<"u"&&(ub=document),typeof MutationObserver<"u"&&(db=MutationObserver),typeof performance<"u"&&(hb=performance)}catch{}const{userAgent:Dg=""}=Hh.navigator||{},ts=Hh,rt=ub,kg=db,Ba=hb;ts.document;const yr=!!rt.documentElement&&!!rt.head&&typeof rt.addEventListener=="function"&&typeof rt.createElement=="function",fb=~Dg.indexOf("MSIE")||~Dg.indexOf("Trident/");var HO=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,zO=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,pb={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},WO={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},mb=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],jt="classic",Ec="duotone",GO="sharp",KO="sharp-duotone",gb=[jt,Ec,GO,KO],YO={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},XO={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},QO=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),JO={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},ZO=["fak","fa-kit","fakd","fa-kit-duotone"],Og={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ex=["kit"],tx={kit:{"fa-kit":"fak"}},nx=["fak","fakd"],rx={kit:{fak:"fa-kit"}},xg={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ja={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},sx=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ix=["fak","fa-kit","fakd","fa-kit-duotone"],ox={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ax={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},lx={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ud={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},cx=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],dd=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...sx,...cx],ux=["solid","regular","light","thin","duotone","brands"],yb=[1,2,3,4,5,6,7,8,9,10],dx=yb.concat([11,12,13,14,15,16,17,18,19,20]),hx=[...Object.keys(lx),...ux,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ja.GROUP,ja.SWAP_OPACITY,ja.PRIMARY,ja.SECONDARY].concat(yb.map(t=>"".concat(t,"x"))).concat(dx.map(t=>"w-".concat(t))),fx={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const dr="___FONT_AWESOME___",hd=16,vb="fa",_b="svg-inline--fa",Os="data-fa-i2svg",fd="data-fa-pseudo-element",px="data-fa-pseudo-element-pending",zh="data-prefix",Wh="data-icon",Ng="fontawesome-i2svg",mx="async",gx=["HTML","HEAD","STYLE","SCRIPT"],bb=(()=>{try{return!0}catch{return!1}})();function ua(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[jt]}})}const wb=Z({},pb);wb[jt]=Z(Z(Z(Z({},{"fa-duotone":"duotone"}),pb[jt]),Og.kit),Og["kit-duotone"]);const yx=ua(wb),pd=Z({},JO);pd[jt]=Z(Z(Z(Z({},{duotone:"fad"}),pd[jt]),xg.kit),xg["kit-duotone"]);const Vg=ua(pd),md=Z({},ud);md[jt]=Z(Z({},md[jt]),rx.kit);const Gh=ua(md),gd=Z({},ax);gd[jt]=Z(Z({},gd[jt]),tx.kit);ua(gd);const vx=HO,Eb="fa-layers-text",_x=zO,bx=Z({},YO);ua(bx);const wx=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mu=WO,Ex=[...ex,...hx],wo=ts.FontAwesomeConfig||{};function Tx(t){var e=rt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ix(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}rt&&typeof rt.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=Ix(Tx(n));s!=null&&(wo[r]=s)});const Tb={styleDefault:"solid",familyDefault:jt,cssPrefix:vb,replacementClass:_b,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};wo.familyPrefix&&(wo.cssPrefix=wo.familyPrefix);const bi=Z(Z({},Tb),wo);bi.autoReplaceSvg||(bi.observeMutations=!1);const ye={};Object.keys(Tb).forEach(t=>{Object.defineProperty(ye,t,{enumerable:!0,set:function(e){bi[t]=e,Eo.forEach(n=>n(ye))},get:function(){return bi[t]}})});Object.defineProperty(ye,"familyPrefix",{enumerable:!0,set:function(t){bi.cssPrefix=t,Eo.forEach(e=>e(ye))},get:function(){return bi.cssPrefix}});ts.FontAwesomeConfig=ye;const Eo=[];function Sx(t){return Eo.push(t),()=>{Eo.splice(Eo.indexOf(t),1)}}const Ar=hd,kn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ax(t){if(!t||!yr)return;const e=rt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=rt.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return rt.head.insertBefore(e,r),t}const Px="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function jo(){let t=12,e="";for(;t-- >0;)e+=Px[Math.random()*62|0];return e}function ki(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Kh(t){return t.classList?ki(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ib(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Cx(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ib(t[n]),'" '),"").trim()}function Tc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Yh(t){return t.size!==kn.size||t.x!==kn.x||t.y!==kn.y||t.rotate!==kn.rotate||t.flipX||t.flipY}function Rx(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(c)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:u}}function Dx(t){let{transform:e,width:n=hd,height:r=hd,startCentered:s=!1}=t,i="";return s&&fb?i+="translate(".concat(e.x/Ar-n/2,"em, ").concat(e.y/Ar-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/Ar,"em), calc(-50% + ").concat(e.y/Ar,"em)) "):i+="translate(".concat(e.x/Ar,"em, ").concat(e.y/Ar,"em) "),i+="scale(".concat(e.size/Ar*(e.flipX?-1:1),", ").concat(e.size/Ar*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var kx=`:root, :host {
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
}`;function Sb(){const t=vb,e=_b,n=ye.cssPrefix,r=ye.replacementClass;let s=kx;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(c,".".concat(r))}return s}let Mg=!1;function gu(){ye.autoAddCss&&!Mg&&(Ax(Sb()),Mg=!0)}var Ox={mixout(){return{dom:{css:Sb,insertCss:gu}}},hooks(){return{beforeDOMElementCreation(){gu()},beforeI2svg(){gu()}}}};const hr=ts||{};hr[dr]||(hr[dr]={});hr[dr].styles||(hr[dr].styles={});hr[dr].hooks||(hr[dr].hooks={});hr[dr].shims||(hr[dr].shims=[]);var On=hr[dr];const Ab=[],Pb=function(){rt.removeEventListener("DOMContentLoaded",Pb),Nl=1,Ab.map(t=>t())};let Nl=!1;yr&&(Nl=(rt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(rt.readyState),Nl||rt.addEventListener("DOMContentLoaded",Pb));function xx(t){yr&&(Nl?setTimeout(t,0):Ab.push(t))}function da(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Ib(t):"<".concat(e," ").concat(Cx(n),">").concat(r.map(da).join(""),"</").concat(e,">")}function Lg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var yu=function(e,n,r,s){var i=Object.keys(e),o=i.length,c=n,l,u,h;for(r===void 0?(l=1,h=e[i[0]]):(l=0,h=r);l<o;l++)u=i[l],h=c(h,e[u],u,e);return h};function Nx(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function yd(t){const e=Nx(t);return e.length===1?e[0].toString(16):null}function Vx(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function $g(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function vd(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=$g(e);typeof On.hooks.addPack=="function"&&!r?On.hooks.addPack(t,$g(e)):On.styles[t]=Z(Z({},On.styles[t]||{}),s),t==="fas"&&vd("fa",e)}const{styles:qo,shims:Mx}=On,Cb=Object.keys(Gh),Lx=Cb.reduce((t,e)=>(t[e]=Object.keys(Gh[e]),t),{});let Xh=null,Rb={},Db={},kb={},Ob={},xb={};function $x(t){return~Ex.indexOf(t)}function Fx(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!$x(s)?s:null}const Nb=()=>{const t=r=>yu(qo,(s,i,o)=>(s[o]=yu(i,r,{}),s),{});Rb=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(c=>typeof c=="number").forEach(c=>{r[c.toString(16)]=i}),r)),Db=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(c=>typeof c=="string").forEach(c=>{r[c]=i}),r)),xb=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(c=>{r[c]=i}),r});const e="far"in qo||ye.autoFetchSvg,n=yu(Mx,(r,s)=>{const i=s[0];let o=s[1];const c=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:c}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:c}),r},{names:{},unicodes:{}});kb=n.names,Ob=n.unicodes,Xh=Ic(ye.styleDefault,{family:ye.familyDefault})};Sx(t=>{Xh=Ic(t.styleDefault,{family:ye.familyDefault})});Nb();function Qh(t,e){return(Rb[t]||{})[e]}function Ux(t,e){return(Db[t]||{})[e]}function Es(t,e){return(xb[t]||{})[e]}function Vb(t){return kb[t]||{prefix:null,iconName:null}}function Bx(t){const e=Ob[t],n=Qh("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ns(){return Xh}const Mb=()=>({prefix:null,iconName:null,rest:[]});function jx(t){let e=jt;const n=Cb.reduce((r,s)=>(r[s]="".concat(ye.cssPrefix,"-").concat(s),r),{});return gb.forEach(r=>{(t.includes(n[r])||t.some(s=>Lx[r].includes(s)))&&(e=r)}),e}function Ic(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=jt}=e,r=yx[n][t];if(n===Ec&&!t)return"fad";const s=Vg[n][t]||Vg[n][r],i=t in On.styles?t:null;return s||i||null}function qx(t){let e=[],n=null;return t.forEach(r=>{const s=Fx(ye.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function Fg(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Sc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=dd.concat(ix),i=Fg(t.filter(m=>s.includes(m))),o=Fg(t.filter(m=>!dd.includes(m))),c=i.filter(m=>(r=m,!mb.includes(m))),[l=null]=c,u=jx(i),h=Z(Z({},qx(o)),{},{prefix:Ic(l,{family:u})});return Z(Z(Z({},h),Gx({values:t,family:u,styles:qo,config:ye,canonical:h,givenPrefix:r})),Hx(n,r,h))}function Hx(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?Vb(s):{},o=Es(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!qo.far&&qo.fas&&!ye.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const zx=gb.filter(t=>t!==jt||t!==Ec),Wx=Object.keys(ud).filter(t=>t!==jt).map(t=>Object.keys(ud[t])).flat();function Gx(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,c=n===Ec,l=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!c&&(l||u||h)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&zx.includes(n)&&(Object.keys(i).find(p=>Wx.includes(p))||o.autoFetchSvg)){const p=QO.get(n).defaultShortPrefixId;r.prefix=p,r.iconName=Es(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=ns()||"fas"),r}class Kx{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=Z(Z({},this.definitions[i]||{}),s[i]),vd(i,s[i]);const o=Gh[jt][i];o&&vd(o,s[i]),Nb()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:c}=r[s],l=c[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=c)}),e[i][o]=c}),e}}let Ug=[],Zs={};const li={},Yx=Object.keys(li);function Xx(t,e){let{mixoutsTo:n}=e;return Ug=t,Zs={},Object.keys(li).forEach(r=>{Yx.indexOf(r)===-1&&delete li[r]}),Ug.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Zs[o]||(Zs[o]=[]),Zs[o].push(i[o])})}r.provides&&r.provides(li)}),n}function _d(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(Zs[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function xs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Zs[t]||[]).forEach(i=>{i.apply(null,n)})}function rs(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return li[t]?li[t].apply(null,e):void 0}function bd(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||ns();if(e)return e=Es(n,e)||e,Lg(Lb.definitions,n,e)||Lg(On.styles,n,e)}const Lb=new Kx,Qx=()=>{ye.autoReplaceSvg=!1,ye.observeMutations=!1,xs("noAuto")},Jx={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return yr?(xs("beforeI2svg",t),rs("pseudoElements2svg",t),rs("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;ye.autoReplaceSvg===!1&&(ye.autoReplaceSvg=!0),ye.observeMutations=!0,xx(()=>{eN({autoReplaceSvgRoot:e}),xs("watch",t)})}},Zx={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Es(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Ic(t[0]);return{prefix:n,iconName:Es(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(ye.cssPrefix,"-"))>-1||t.match(vx))){const e=Sc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||ns(),iconName:Es(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=ns();return{prefix:e,iconName:Es(e,t)||t}}}},sn={noAuto:Qx,config:ye,dom:Jx,parse:Zx,library:Lb,findIconDefinition:bd,toHtml:da},eN=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=rt}=t;(Object.keys(On.styles).length>0||ye.autoFetchSvg)&&yr&&ye.autoReplaceSvg&&sn.dom.i2svg({node:e})};function Ac(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>da(n))}}),Object.defineProperty(t,"node",{get:function(){if(!yr)return;const n=rt.createElement("div");return n.innerHTML=t.html,n.children}}),t}function tN(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(Yh(o)&&n.found&&!r.found){const{width:c,height:l}=n,u={x:c/l/2,y:.5};s.style=Tc(Z(Z({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function nN(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(ye.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Z(Z({},s),{},{id:o}),children:r}]}]}function Jh(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:c,maskId:l,titleId:u,extra:h,watchable:m=!1}=t,{width:p,height:v}=n.found?n:e,R=nx.includes(r),I=[ye.replacementClass,s?"".concat(ye.cssPrefix,"-").concat(s):""].filter(F=>h.classes.indexOf(F)===-1).filter(F=>F!==""||!!F).concat(h.classes).join(" ");let E={children:[],attributes:Z(Z({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:I,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(v)})};const k=R&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/v*16*.0625,"em")}:{};m&&(E.attributes[Os]=""),c&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(u||jo())},children:[c]}),delete E.attributes.title);const N=Z(Z({},E),{},{prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:Z(Z({},k),h.styles)}),{children:$,attributes:V}=n.found&&e.found?rs("generateAbstractMask",N)||{children:[],attributes:{}}:rs("generateAbstractIcon",N)||{children:[],attributes:{}};return N.children=$,N.attributes=V,o?nN(N):tN(N)}function Bg(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:c=!1}=t,l=Z(Z(Z({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(l[Os]="");const u=Z({},o.styles);Yh(s)&&(u.transform=Dx({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=Tc(u);h.length>0&&(l.style=h);const m=[];return m.push({tag:"span",attributes:l,children:[e]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function rN(t){const{content:e,title:n,extra:r}=t,s=Z(Z(Z({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Tc(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:vu}=On;function wd(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(ye.cssPrefix,"-").concat(mu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ye.cssPrefix,"-").concat(mu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(ye.cssPrefix,"-").concat(mu.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const sN={found:!1,width:512,height:512};function iN(t,e){!bb&&!ye.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ed(t,e){let n=e;return e==="fa"&&ye.styleDefault!==null&&(e=ns()),new Promise((r,s)=>{if(n==="fa"){const i=Vb(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&vu[e]&&vu[e][t]){const i=vu[e][t];return r(wd(i))}iN(t,e),r(Z(Z({},sN),{},{icon:ye.showMissingIcons&&t?rs("missingIconAbstract")||{}:{}}))})}const jg=()=>{},Td=ye.measurePerformance&&Ba&&Ba.mark&&Ba.measure?Ba:{mark:jg,measure:jg},no='FA "6.7.2"',oN=t=>(Td.mark("".concat(no," ").concat(t," begins")),()=>$b(t)),$b=t=>{Td.mark("".concat(no," ").concat(t," ends")),Td.measure("".concat(no," ").concat(t),"".concat(no," ").concat(t," begins"),"".concat(no," ").concat(t," ends"))};var Zh={begin:oN,end:$b};const rl=()=>{};function qg(t){return typeof(t.getAttribute?t.getAttribute(Os):null)=="string"}function aN(t){const e=t.getAttribute?t.getAttribute(zh):null,n=t.getAttribute?t.getAttribute(Wh):null;return e&&n}function lN(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ye.replacementClass)}function cN(){return ye.autoReplaceSvg===!0?sl.replace:sl[ye.autoReplaceSvg]||sl.replace}function uN(t){return rt.createElementNS("http://www.w3.org/2000/svg",t)}function dN(t){return rt.createElement(t)}function Fb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?uN:dN}=e;if(typeof t=="string")return rt.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(Fb(i,{ceFn:n}))}),r}function hN(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const sl={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Fb(n),e)}),e.getAttribute(Os)===null&&ye.keepOriginalSource){let n=rt.createComment(hN(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Kh(e).indexOf(ye.replacementClass))return sl.replace(t);const r=new RegExp("".concat(ye.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,c)=>(c===ye.replacementClass||c.match(r)?o.toSvg.push(c):o.toNode.push(c),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>da(i)).join(`
`);e.setAttribute(Os,""),e.innerHTML=s}};function Hg(t){t()}function Ub(t,e){const n=typeof e=="function"?e:rl;if(t.length===0)n();else{let r=Hg;ye.mutateApproach===mx&&(r=ts.requestAnimationFrame||Hg),r(()=>{const s=cN(),i=Zh.begin("mutate");t.map(s),i(),n()})}}let ef=!1;function Bb(){ef=!0}function Id(){ef=!1}let Vl=null;function zg(t){if(!kg||!ye.observeMutations)return;const{treeCallback:e=rl,nodeCallback:n=rl,pseudoElementsCallback:r=rl,observeMutationsRoot:s=rt}=t;Vl=new kg(i=>{if(ef)return;const o=ns();ki(i).forEach(c=>{if(c.type==="childList"&&c.addedNodes.length>0&&!qg(c.addedNodes[0])&&(ye.searchPseudoElements&&r(c.target),e(c.target)),c.type==="attributes"&&c.target.parentNode&&ye.searchPseudoElements&&r(c.target.parentNode),c.type==="attributes"&&qg(c.target)&&~wx.indexOf(c.attributeName))if(c.attributeName==="class"&&aN(c.target)){const{prefix:l,iconName:u}=Sc(Kh(c.target));c.target.setAttribute(zh,l||o),u&&c.target.setAttribute(Wh,u)}else lN(c.target)&&n(c.target)})}),yr&&Vl.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function fN(){Vl&&Vl.disconnect()}function pN(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],c=i.slice(1);return o&&c.length>0&&(r[o]=c.join(":").trim()),r},{})),n}function mN(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=Sc(Kh(t));return s.prefix||(s.prefix=ns()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=Ux(s.prefix,t.innerText)||Qh(s.prefix,yd(t.innerText))),!s.iconName&&ye.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function gN(t){const e=ki(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ye.autoA11y&&(n?e["aria-labelledby"]="".concat(ye.replacementClass,"-title-").concat(r||jo()):(e["aria-hidden"]="true",e.focusable="false")),e}function yN(){return{iconName:null,title:null,titleId:null,prefix:null,transform:kn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=mN(t),i=gN(t),o=_d("parseNodeAttributes",{},t);let c=e.styleParser?pN(t):[];return Z({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:kn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:i}},o)}const{styles:vN}=On;function jb(t){const e=ye.autoReplaceSvg==="nest"?Wg(t,{styleParser:!1}):Wg(t);return~e.extra.classes.indexOf(Eb)?rs("generateLayersText",t,e):rs("generateSvgReplacementMutation",t,e)}function _N(){return[...ZO,...dd]}function Gg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!yr)return Promise.resolve();const n=rt.documentElement.classList,r=h=>n.add("".concat(Ng,"-").concat(h)),s=h=>n.remove("".concat(Ng,"-").concat(h)),i=ye.autoFetchSvg?_N():mb.concat(Object.keys(vN));i.includes("fa")||i.push("fa");const o=[".".concat(Eb,":not([").concat(Os,"])")].concat(i.map(h=>".".concat(h,":not([").concat(Os,"])"))).join(", ");if(o.length===0)return Promise.resolve();let c=[];try{c=ki(t.querySelectorAll(o))}catch{}if(c.length>0)r("pending"),s("complete");else return Promise.resolve();const l=Zh.begin("onTree"),u=c.reduce((h,m)=>{try{const p=jb(m);p&&h.push(p)}catch(p){bb||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise((h,m)=>{Promise.all(u).then(p=>{Ub(p,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),h()})}).catch(p=>{l(),m(p)})})}function bN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jb(t).then(n=>{n&&Ub([n],e)})}function wN(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:bd(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:bd(s||{})),t(r,Z(Z({},n),{},{mask:s}))}}const EN=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=kn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:c=null,classes:l=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:m,iconName:p,icon:v}=t;return Ac(Z({type:"icon"},t),()=>(xs("beforeDOMElementCreation",{iconDefinition:t,params:e}),ye.autoA11y&&(o?u["aria-labelledby"]="".concat(ye.replacementClass,"-title-").concat(c||jo()):(u["aria-hidden"]="true",u.focusable="false")),Jh({icons:{main:wd(v),mask:s?wd(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:p,transform:Z(Z({},kn),n),symbol:r,title:o,maskId:i,titleId:c,extra:{attributes:u,styles:h,classes:l}})))};var TN={mixout(){return{icon:wN(EN)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Gg,t.nodeCallback=bN,t}}},provides(t){t.i2svg=function(e){const{node:n=rt,callback:r=()=>{}}=e;return Gg(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:c,symbol:l,mask:u,maskId:h,extra:m}=n;return new Promise((p,v)=>{Promise.all([Ed(r,o),u.iconName?Ed(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(R=>{let[I,E]=R;p([e,Jh({icons:{main:I,mask:E},prefix:o,iconName:r,transform:c,symbol:l,maskId:h,title:s,titleId:i,extra:m,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const c=Tc(o);c.length>0&&(r.style=c);let l;return Yh(i)&&(l=rs("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},IN={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Ac({type:"layer"},()=>{xs("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ye.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},SN={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return Ac({type:"counter",content:t},()=>(xs("beforeDOMElementCreation",{content:t,params:e}),rN({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(ye.cssPrefix,"-layers-counter"),...r]}})))}}}},AN={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=kn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return Ac({type:"text",content:t},()=>(xs("beforeDOMElementCreation",{content:t,params:e}),Bg({content:t,transform:Z(Z({},kn),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(ye.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,c=null;if(fb){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,c=u.height/l}return ye.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Bg({content:e.innerHTML,width:o,height:c,transform:s,title:r,extra:i,watchable:!0})])}}};const PN=new RegExp('"',"ug"),Kg=[1105920,1112319],Yg=Z(Z(Z(Z({},{FontAwesome:{normal:"fas",400:"fas"}}),XO),fx),ox),Sd=Object.keys(Yg).reduce((t,e)=>(t[e.toLowerCase()]=Yg[e],t),{}),CN=Object.keys(Sd).reduce((t,e)=>{const n=Sd[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function RN(t){const e=t.replace(PN,""),n=Vx(e,0),r=n>=Kg[0]&&n<=Kg[1],s=e.length===2?e[0]===e[1]:!1;return{value:yd(s?e[0]:e),isSecondary:r||s}}function DN(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Sd[n]||{})[s]||CN[n]}function Xg(t,e){const n="".concat(px).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=ki(t.children).filter(p=>p.getAttribute(fd)===e)[0],c=ts.getComputedStyle(t,e),l=c.getPropertyValue("font-family"),u=l.match(_x),h=c.getPropertyValue("font-weight"),m=c.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&m!=="none"&&m!==""){const p=c.getPropertyValue("content");let v=DN(l,h);const{value:R,isSecondary:I}=RN(p),E=u[0].startsWith("FontAwesome");let k=Qh(v,R),N=k;if(E){const $=Bx(R);$.iconName&&$.prefix&&(k=$.iconName,v=$.prefix)}if(k&&!I&&(!o||o.getAttribute(zh)!==v||o.getAttribute(Wh)!==N)){t.setAttribute(n,N),o&&t.removeChild(o);const $=yN(),{extra:V}=$;V.attributes[fd]=e,Ed(k,v).then(F=>{const X=Jh(Z(Z({},$),{},{icons:{main:F,mask:Mb()},prefix:v,iconName:N,extra:V,watchable:!0})),P=rt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(P,t.firstChild):t.appendChild(P),P.outerHTML=X.map(w=>da(w)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function kN(t){return Promise.all([Xg(t,"::before"),Xg(t,"::after")])}function ON(t){return t.parentNode!==document.head&&!~gx.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(fd)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Qg(t){if(yr)return new Promise((e,n)=>{const r=ki(t.querySelectorAll("*")).filter(ON).map(kN),s=Zh.begin("searchPseudoElements");Bb(),Promise.all(r).then(()=>{s(),Id(),e()}).catch(()=>{s(),Id(),n()})})}var xN={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Qg,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=rt}=e;ye.searchPseudoElements&&Qg(n)}}};let Jg=!1;var NN={mixout(){return{dom:{unwatch(){Bb(),Jg=!0}}}},hooks(){return{bootstrap(){zg(_d("mutationObserverCallbacks",{}))},noAuto(){fN()},watch(t){const{observeMutationsRoot:e}=t;Jg?Id():zg(_d("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Zg=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var VN={mixout(){return{parse:{transform:t=>Zg(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Zg(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(c," ").concat(l," ").concat(u)},m={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:h,path:m};return{tag:"g",attributes:Z({},p.outer),children:[{tag:"g",attributes:Z({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:Z(Z({},n.icon.attributes),p.path)}]}]}}}};const _u={x:0,y:0,width:"100%",height:"100%"};function ey(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function MN(t){return t.tag==="g"?t.children:[t]}var LN={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Sc(n.split(" ").map(s=>s.trim())):Mb();return r.prefix||(r.prefix=ns()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:c}=e;const{width:l,icon:u}=s,{width:h,icon:m}=i,p=Rx({transform:c,containerWidth:h,iconWidth:l}),v={tag:"rect",attributes:Z(Z({},_u),{},{fill:"white"})},R=u.children?{children:u.children.map(ey)}:{},I={tag:"g",attributes:Z({},p.inner),children:[ey(Z({tag:u.tag,attributes:Z(Z({},u.attributes),p.path)},R))]},E={tag:"g",attributes:Z({},p.outer),children:[I]},k="mask-".concat(o||jo()),N="clip-".concat(o||jo()),$={tag:"mask",attributes:Z(Z({},_u),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,E]},V={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:MN(m)},$]};return n.push(V,{tag:"rect",attributes:Z({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(k,")")},_u)}),{children:n,attributes:r}}}},$N={provides(t){let e=!1;ts.matchMedia&&(e=ts.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:Z(Z({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=Z(Z({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:Z(Z({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:Z(Z({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Z(Z({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:Z(Z({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:Z(Z({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:Z(Z({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Z(Z({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},FN={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},UN=[Ox,TN,IN,SN,AN,xN,NN,VN,LN,$N,FN];Xx(UN,{mixoutsTo:sn});sn.noAuto;sn.config;const BN=sn.library;sn.dom;const Ad=sn.parse;sn.findIconDefinition;sn.toHtml;const jN=sn.icon;sn.layer;sn.text;sn.counter;function ty(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Zn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ty(Object(n),!0).forEach(function(r){Kt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ty(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function qN(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function HN(t){var e=qN(t,"string");return typeof e=="symbol"?e:e+""}function Ml(t){"@babel/helpers - typeof";return Ml=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ml(t)}function Kt(t,e,n){return e=HN(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function zN(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function WN(t,e){if(t==null)return{};var n=zN(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var GN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},qb={exports:{}};(function(t){(function(e){var n=function(k,N,$){if(!u(N)||m(N)||p(N)||v(N)||l(N))return N;var V,F=0,X=0;if(h(N))for(V=[],X=N.length;F<X;F++)V.push(n(k,N[F],$));else{V={};for(var P in N)Object.prototype.hasOwnProperty.call(N,P)&&(V[k(P,$)]=n(k,N[P],$))}return V},r=function(k,N){N=N||{};var $=N.separator||"_",V=N.split||/(?=[A-Z])/;return k.split(V).join($)},s=function(k){return R(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(N,$){return $?$.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var N=s(k);return N.substr(0,1).toUpperCase()+N.substr(1)},o=function(k,N){return r(k,N).toLowerCase()},c=Object.prototype.toString,l=function(k){return typeof k=="function"},u=function(k){return k===Object(k)},h=function(k){return c.call(k)=="[object Array]"},m=function(k){return c.call(k)=="[object Date]"},p=function(k){return c.call(k)=="[object RegExp]"},v=function(k){return c.call(k)=="[object Boolean]"},R=function(k){return k=k-0,k===k},I=function(k,N){var $=N&&"process"in N?N.process:N;return typeof $!="function"?k:function(V,F){return $(V,k,F)}},E={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,N){return n(I(s,N),k)},decamelizeKeys:function(k,N){return n(I(o,N),k,N)},pascalizeKeys:function(k,N){return n(I(i,N),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=E:e.humps=E})(GN)})(qb);var KN=qb.exports,YN=["class","style"];function XN(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=KN.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function QN(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Hb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Hb(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,u){var h=t.attributes[u];switch(u){case"class":l.class=QN(h);break;case"style":l.style=XN(h);break;default:l.attrs[u]=h}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,c=WN(n,YN);return ci(t.tag,Zn(Zn(Zn({},e),{},{class:s.class,style:Zn(Zn({},s.style),o)},s.attrs),c),r)}var zb=!1;try{zb=!0}catch{}function JN(){if(!zb&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function bu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Kt({},t,e):{}}function ZN(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Kt(Kt(Kt(Kt(Kt(Kt(Kt(Kt(Kt(Kt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Kt(Kt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ny(t){if(t&&Ml(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ad.icon)return Ad.icon(t);if(t===null)return null;if(Ml(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var wt=jd({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Te(function(){return ny(e.icon)}),i=Te(function(){return bu("classes",ZN(e))}),o=Te(function(){return bu("transform",typeof e.transform=="string"?Ad.transform(e.transform):e.transform)}),c=Te(function(){return bu("mask",ny(e.mask))}),l=Te(function(){return jN(s.value,Zn(Zn(Zn(Zn({},i.value),o.value),c.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Qe(l,function(h){if(!h)return JN("Could not find one or more icon(s)",s.value,c.value)},{immediate:!0});var u=Te(function(){return l.value?Hb(l.value.abstract[0],{},r):null});return function(){return u.value}}});const eV=["dir"],tV={class:"modal-title"},nV={class:"form-group"},rV={class:"form-group"},sV={class:"form-group"},iV={class:"form-group"},oV={value:"male"},aV={value:"female"},lV={key:0,class:"pregnancy-section"},cV={class:"form-group checkbox-group"},uV={key:0,class:"form-group"},dV={class:"form-group"},hV={class:"form-group"},fV={class:"modal-actions"},pV=["disabled"],mV={__name:"PatientFormModal",props:{show:Boolean,patient:Object,isSaving:Boolean},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=Ve("currentLanguage"),i=Bn({id:null,name:"",birthDate:"",gender:"male",weight:null,isPregnant:!1,estimatedDueDate:"",medicalHistory:"",allergies:""});Qe(()=>n.show,c=>{c&&(n.patient?(i.id=n.patient.id,i.name=n.patient.name,i.gender=n.patient.gender,i.weight=n.patient.weight||null,i.isPregnant=n.patient.isPregnant||!1,i.birthDate=n.patient.birthDate?.toDate?n.patient.birthDate.toDate().toISOString().split("T")[0]:"",i.estimatedDueDate=n.patient.estimatedDueDate?.toDate?n.patient.estimatedDueDate.toDate().toISOString().split("T")[0]:"",i.medicalHistory=Array.isArray(n.patient.medicalHistory)?n.patient.medicalHistory.join(", "):"",i.allergies=Array.isArray(n.patient.allergies)?n.patient.allergies.join(", "):""):Object.assign(i,{id:null,name:"",birthDate:"",gender:"male",weight:null,isPregnant:!1,estimatedDueDate:"",medicalHistory:"",allergies:""}))},{immediate:!0}),Qe(()=>i.isPregnant,c=>{c||(i.estimatedDueDate="")});const o=()=>{if(!i.name||!i.birthDate){alert("Name and Date of Birth are required.");return}if(i.isPregnant&&!i.estimatedDueDate){alert("Please provide the estimated due date for the pregnancy.");return}(i.gender==="male"||!i.isPregnant)&&(i.isPregnant=!1,i.estimatedDueDate=null);const c={...i,weight:Number(i.weight)||null,birthDate:new Date(i.birthDate),estimatedDueDate:i.estimatedDueDate?new Date(i.estimatedDueDate):null,medicalHistory:i.medicalHistory.split(",").map(l=>l.trim()).filter(Boolean),allergies:i.allergies.split(",").map(l=>l.trim()).filter(Boolean)};r("save",c)};return(c,l)=>(U(),In(ss,{name:"modal-fade"},{default:fr(()=>[t.show?(U(),j("div",{key:0,class:"modal-overlay",onClick:l[10]||(l[10]=tt(u=>c.$emit("close"),["self"]))},[d("div",{class:"modal-content",dir:y(s)==="ar"?"rtl":"ltr"},[d("button",{onClick:l[0]||(l[0]=u=>c.$emit("close")),class:"close-button"},"×"),d("h3",tV,_(t.patient?"Edit Patient":"Add New Patient"),1),d("form",{onSubmit:tt(o,["prevent"]),class:"patient-form"},[d("div",nV,[d("label",null,_(y(s)==="en"?"Name":"الاسم"),1),ee(d("input",{type:"text","onUpdate:modelValue":l[1]||(l[1]=u=>i.name=u),required:""},null,512),[[me,i.name]])]),d("div",rV,[d("label",null,_(y(s)==="en"?"Weight (kg)":"الوزن (كجم)"),1),ee(d("input",{type:"number",step:"0.1","onUpdate:modelValue":l[2]||(l[2]=u=>i.weight=u),placeholder:"e.g., 70.5"},null,512),[[me,i.weight]])]),d("div",sV,[d("label",null,_(y(s)==="en"?"Date of Birth":"تاريخ الميلاد"),1),ee(d("input",{type:"date","onUpdate:modelValue":l[3]||(l[3]=u=>i.birthDate=u),required:""},null,512),[[me,i.birthDate]])]),d("div",iV,[d("label",null,_(y(s)==="en"?"Gender":"الجنس"),1),ee(d("select",{"onUpdate:modelValue":l[4]||(l[4]=u=>i.gender=u)},[d("option",oV,_(y(s)==="en"?"Male":"ذكر"),1),d("option",aV,_(y(s)==="en"?"Female":"أنثى"),1)],512),[[lt,i.gender]])]),i.gender==="female"?(U(),j("div",lV,[d("div",cV,[d("label",null,[ee(d("input",{type:"checkbox","onUpdate:modelValue":l[5]||(l[5]=u=>i.isPregnant=u)},null,512),[[Ko,i.isPregnant]]),d("span",null,_(y(s)==="en"?"Currently Pregnant?":"هل هي حامل حاليًا؟"),1)])]),i.isPregnant?(U(),j("div",uV,[d("label",null,_(y(s)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع"),1),ee(d("input",{type:"date","onUpdate:modelValue":l[6]||(l[6]=u=>i.estimatedDueDate=u),required:""},null,512),[[me,i.estimatedDueDate]])])):pe("",!0)])):pe("",!0),d("div",dV,[d("label",null,_(y(s)==="en"?"Medical History (comma-separated)":"التاريخ الطبي"),1),ee(d("textarea",{"onUpdate:modelValue":l[7]||(l[7]=u=>i.medicalHistory=u),rows:"3"},null,512),[[me,i.medicalHistory]])]),d("div",hV,[d("label",null,_(y(s)==="en"?"Allergies (comma-separated)":"الحساسية"),1),ee(d("textarea",{"onUpdate:modelValue":l[8]||(l[8]=u=>i.allergies=u),rows:"3"},null,512),[[me,i.allergies]])]),d("div",fV,[d("button",{type:"submit",class:"action-button",disabled:t.isSaving},_(t.isSaving?"Saving...":"Save"),9,pV),d("button",{type:"button",onClick:l[9]||(l[9]=u=>c.$emit("close")),class:"action-button secondary"}," Cancel ")])],32)],8,eV)])):pe("",!0)]),_:1}))}},gV=vt(mV,[["__scopeId","data-v-8459b92e"]]),yV=["dir"],vV={key:0,class:"patient-context-display"},_V={key:0,class:"form-row pregnancy-section"},bV={class:"form-group checkbox-group"},wV={key:0,class:"form-group"},EV={class:"form-group"},TV={disabled:"",value:""},IV=["value"],SV={key:1,class:"form-group"},AV={class:"form-row"},PV={class:"form-group"},CV={value:"X-ray"},RV={value:"CT"},DV={class:"form-group"},kV={disabled:"",value:""},OV=["value"],xV={key:2,class:"form-group"},NV=["placeholder"],VV={key:3,class:"form-group"},MV={class:"form-group"},LV={class:"form-row"},$V={class:"form-group"},FV=["placeholder"],UV={class:"form-group"},BV=["placeholder"],jV={class:"form-group"},qV={class:"form-group"},HV={class:"form-group"},zV={class:"modal-actions"},WV=["disabled"],GV={__name:"ScanFormModal",props:{show:Boolean,scan:Object,isSaving:Boolean,patient:{type:Object,default:null}},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=Ve("currentLanguage"),i={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},o=[{value:"head",en:"Head",ar:"الرأس"},{value:"neck",en:"Neck",ar:"الرقبة"},{value:"chest",en:"Chest",ar:"الصدر"},{value:"abdomen",en:"Abdomen",ar:"البطن"},{value:"pelvis",en:"Pelvis",ar:"الحوض"},{value:"spine",en:"Spine",ar:"العمود الفقري"},{value:"upper_extremity",en:"Upper Extremity",ar:"الطرف العلوي"},{value:"lower_extremity",en:"Lower Extremity",ar:"الطرف السفلي"},{value:"other",en:"Other",ar:"أخرى"}],c={patient:{CT:{"Abdomen & Pelvis":14,"Brain with contrast":2,"Angiography CTA":12,Urography:8,Enterography:8,default:6},"X-ray":{"Barium Enema":7,"IV Urogram (IVP)":2.5,HSG:1.5,VCUG:1,default:.5}},doctor:{CT:{default:1e-5},"X-ray":{"Barium Enema":1e-4,"IV Urogram (IVP)":5e-5,HSG:2e-4,VCUG:15e-5,default:5e-5}}},l=()=>new Date().toISOString().split("T")[0],u=Bn({id:null,isPregnant:!1,pregnancyMonth:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanPlace:"",otherScanPlaceDescription:"",numberOfScans:1,scanDate:l(),patientDose:null,doctorDose:null,reason:"",notes:"",doctorAdditionalContext:""}),h=Te(()=>i[u.scanType]||[]),m=Te(()=>u.subScanType==="Other"),p=Te(()=>u.scanPlace==="other");Qe(()=>n.show,I=>{if(I&&(Object.assign(u,{id:null,isPregnant:!1,pregnancyMonth:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanPlace:"",otherScanPlaceDescription:"",numberOfScans:1,scanDate:l(),patientDose:null,doctorDose:null,reason:"",notes:"",doctorAdditionalContext:""}),n.scan)){u.id=n.scan.id,u.isPregnant=n.scan.isPregnant||!1,u.pregnancyMonth=n.scan.pregnancyMonth||null,u.scanType=n.scan.scanType;const E=n.scan.scanDate?.toDate?n.scan.scanDate.toDate():new Date(n.scan.scanDate);u.scanDate=isNaN(E)?l():E.toISOString().split("T")[0],u.patientDose=n.scan.patientDose,u.doctorDose=n.scan.doctorDose,u.reason=n.scan.reason,u.notes=n.scan.notes,u.doctorAdditionalContext=n.scan.doctorAdditionalContext,u.numberOfScans=n.scan.numberOfScans||1;const k=n.scan.scanDetail;(h.value||[]).some(F=>F.value===k)?u.subScanType=k:k&&(u.subScanType="Other",u.otherScanDescription=k);const $=n.scan.scanPlace;o.some(F=>F.value===$)?u.scanPlace=$:$&&(u.scanPlace="other",u.otherScanPlaceDescription=$)}}),Qe(()=>u.scanType,(I,E)=>{I!==E&&(u.subScanType="",u.otherScanDescription="")});const v=I=>{try{const E=u.subScanType==="Other"?"default":u.subScanType,N=c[I][u.scanType];if(!N)return null;let $=N[E]??N.default;return $===void 0?null:u.scanType==="X-ray"?$*u.numberOfScans:$}catch(E){return console.error("Error retrieving dose from table:",E),null}},R=()=>{if(!u.scanDate||!u.scanPlace||p.value&&!u.otherScanPlaceDescription||!u.subScanType||m.value&&!u.otherScanDescription){alert("Please fill all required scan details.");return}if(u.scanType==="X-ray"&&(u.numberOfScans===null||u.numberOfScans<1)){alert(s.value==="en"?"Number of scans must be at least 1 for X-ray.":"عدد الفحوصات لأشعة إكس يجب أن يكون 1 على الأقل.");return}if((u.patientDose===null||u.patientDose==="")&&(u.patientDose=v("patient")),(u.doctorDose===null||u.doctorDose==="")&&(u.doctorDose=v("doctor")),u.patientDose===null||u.doctorDose===null){alert(s.value==="en"?"Could not find a typical dose value for the selected scan. Please enter the dose manually.":"تعذر العثور على قيمة جرعة نموذجية للفحص المحدد. يرجى إدخال الجرعة يدويًا.");return}const I=u.scanDate.split("-"),E=new Date(Date.UTC(I[0],parseInt(I[1],10)-1,parseInt(I[2],10),12,0,0));if(isNaN(E.getTime())){alert("Invalid date format. Please select a valid date.");return}const k={id:u.id,isPregnant:u.isPregnant,pregnancyMonth:u.pregnancyMonth,scanType:u.scanType,scanDetail:u.subScanType==="Other"?u.otherScanDescription:u.subScanType,scanPlace:u.scanPlace==="other"?u.otherScanPlaceDescription:u.scanPlace,numberOfScans:u.scanType==="X-ray"?Number(u.numberOfScans):1,scanDate:Oe.fromDate(E),patientDose:Number(u.patientDose),doctorDose:Number(u.doctorDose),reason:u.reason,notes:u.notes,doctorAdditionalContext:u.doctorAdditionalContext};r("save",k)};return(I,E)=>(U(),In(ss,{name:"modal-fade"},{default:fr(()=>[t.show?(U(),j("div",{key:0,class:"modal-overlay",onClick:E[16]||(E[16]=tt(k=>I.$emit("close"),["self"]))},[d("div",{class:"modal-content",dir:y(s)==="ar"?"rtl":"ltr"},[d("button",{class:"close-modal-button",onClick:E[0]||(E[0]=k=>I.$emit("close"))},"×"),d("h3",null,_(t.scan?y(s)==="en"?"Edit Scan Record":"تعديل سجل الفحص":y(s)==="en"?"Add New Scan Record":"إضافة سجل فحص جديد"),1),t.patient?(U(),j("div",vV,[at(_(y(s)==="en"?"For Patient":"للمريض")+": ",1),d("strong",null,_(t.patient.name)+" ("+_(t.patient.weight?`${t.patient.weight} kg`:"Weight N/A")+")",1)])):pe("",!0),d("form",{onSubmit:tt(R,["prevent"]),class:"scan-form"},[t.patient?.gender==="female"?(U(),j("div",_V,[d("div",bV,[d("label",null,[ee(d("input",{type:"checkbox","onUpdate:modelValue":E[1]||(E[1]=k=>u.isPregnant=k)},null,512),[[Ko,u.isPregnant]]),d("span",null,_(y(s)==="en"?"Is Pregnant?":"هل المريضة حامل؟"),1)])]),u.isPregnant?(U(),j("div",wV,[d("label",null,_(y(s)==="en"?"Month of Pregnancy":"شهر الحمل"),1),ee(d("input",{type:"number","onUpdate:modelValue":E[2]||(E[2]=k=>u.pregnancyMonth=k),min:"1",max:"9",placeholder:"1-9"},null,512),[[me,u.pregnancyMonth,void 0,{number:!0}]])])):pe("",!0)])):pe("",!0),d("div",EV,[d("label",null,_(y(s)==="en"?"Place of Scan":"مكان الفحص"),1),ee(d("select",{"onUpdate:modelValue":E[3]||(E[3]=k=>u.scanPlace=k),required:""},[d("option",TV,_(y(s)==="en"?"Select...":"اختر..."),1),(U(),j(Xe,null,Jt(o,k=>d("option",{key:k.value,value:k.value},_(y(s)==="en"?k.en:k.ar),9,IV)),64))],512),[[lt,u.scanPlace]])]),p.value?(U(),j("div",SV,[d("label",null,_(y(s)==="en"?"Please specify other place":"يرجى تحديد المكان الآخر"),1),ee(d("input",{type:"text","onUpdate:modelValue":E[4]||(E[4]=k=>u.otherScanPlaceDescription=k),required:""},null,512),[[me,u.otherScanPlaceDescription]])])):pe("",!0),d("div",AV,[d("div",PV,[d("label",null,_(y(s)==="en"?"Scan Category":"فئة الفحص"),1),ee(d("select",{"onUpdate:modelValue":E[5]||(E[5]=k=>u.scanType=k),required:""},[d("option",CV,_(y(s)==="en"?"X-ray":"أشعة سينية"),1),d("option",RV,_(y(s)==="en"?"CT":"أشعة مقطعية"),1)],512),[[lt,u.scanType]])]),d("div",DV,[d("label",null,_(y(s)==="en"?"Scan Protocol":"بروتوكول الفحص"),1),ee(d("select",{"onUpdate:modelValue":E[6]||(E[6]=k=>u.subScanType=k),required:""},[d("option",kV,_(y(s)==="en"?"Select...":"اختر..."),1),(U(!0),j(Xe,null,Jt(h.value,k=>(U(),j("option",{key:k.value,value:k.value},_(y(s)==="en"?k.en:k.ar),9,OV))),128))],512),[[lt,u.subScanType]])])]),m.value?(U(),j("div",xV,[d("label",null,_(y(s)==="en"?"Please specify scan protocol":"يرجى تحديد بروتوكول الفحص"),1),ee(d("input",{type:"text","onUpdate:modelValue":E[7]||(E[7]=k=>u.otherScanDescription=k),placeholder:y(s)==="en"?"e.g., Chest X-ray":"مثال: أشعة سينية للصدر",required:""},null,8,NV),[[me,u.otherScanDescription]])])):pe("",!0),u.scanType==="X-ray"?(U(),j("div",VV,[d("label",null,_(y(s)==="en"?"Number of Scans":"عدد الفحوصات"),1),ee(d("input",{type:"number","onUpdate:modelValue":E[8]||(E[8]=k=>u.numberOfScans=k),min:"1",required:""},null,512),[[me,u.numberOfScans,void 0,{number:!0}]])])):pe("",!0),d("div",MV,[d("label",null,_(y(s)==="en"?"Scan Date":"تاريخ الفحص"),1),ee(d("input",{type:"date","onUpdate:modelValue":E[9]||(E[9]=k=>u.scanDate=k),required:""},null,512),[[me,u.scanDate]])]),d("div",LV,[d("div",$V,[d("label",null,_(y(s)==="en"?"Patient's Dose (mSv)":"جرعة المريض (mSv)"),1),ee(d("input",{type:"number",step:"0.0001","onUpdate:modelValue":E[10]||(E[10]=k=>u.patientDose=k),placeholder:y(s)==="en"?"Leave blank for typical value":"اتركه فارغًا لتقدير للقيمة القياسسية"},null,8,FV),[[me,u.patientDose,void 0,{number:!0}]])]),d("div",UV,[d("label",null,_(y(s)==="en"?"Doctor's Dose (mSv)":"جرعة الطبيب (mSv)"),1),ee(d("input",{type:"number","onUpdate:modelValue":E[11]||(E[11]=k=>u.doctorDose=k),placeholder:y(s)==="en"?"Leave blank for AI estimate":"اتركه فارغًا لتقدير الذكاء الاصطناعي"},null,8,BV),[[me,u.doctorDose,void 0,{number:!0}]])])]),d("div",jV,[d("label",null,_(y(s)==="en"?"Reason for Scan":"أسباب الفحص"),1),ee(d("textarea",{"onUpdate:modelValue":E[12]||(E[12]=k=>u.reason=k),rows:"2"},null,512),[[me,u.reason]])]),d("div",qV,[d("label",null,_(y(s)==="en"?"Additional Notes":"ملاحظات إضافية"),1),ee(d("textarea",{"onUpdate:modelValue":E[13]||(E[13]=k=>u.notes=k),rows:"3"},null,512),[[me,u.notes]])]),d("div",HV,[d("label",null,_(y(s)==="en"?"Details affecting your exposure (optional)":"تفاصيل إضافية على تعرضك (اختياري)"),1),ee(d("textarea",{"onUpdate:modelValue":E[14]||(E[14]=k=>u.doctorAdditionalContext=k),rows:"2"},null,512),[[me,u.doctorAdditionalContext]])]),d("div",zV,[d("button",{type:"submit",class:"action-button",disabled:t.isSaving},_(t.isSaving?y(s)==="en"?"Saving...":"جار الحفظ...":y(s)==="en"?"Save":"حفظ"),9,WV),d("button",{type:"button",onClick:E[15]||(E[15]=k=>I.$emit("close")),class:"action-button secondary"},_(y(s)==="en"?"Cancel":"إلغاء"),1)])],32)],8,yV)])):pe("",!0)]),_:1}))}},KV=vt(GV,[["__scopeId","data-v-48552722"]]),YV={class:"modal-content delete-confirm-modal"},XV={class:"modal-title"},QV={class:"warning-text"},JV={class:"modal-actions"},ZV={__name:"ConfirmDeleteModal",props:{show:Boolean,title:String,message:String},emits:["close","confirm"],setup(t){const e=Ve("triggerMsvRecalculation"),n=Ve("currentLanguage");return(r,s)=>(U(),In(ss,{name:"modal-fade"},{default:fr(()=>[t.show?(U(),j("div",{key:0,class:"modal-overlay",onClick:s[2]||(s[2]=tt(i=>r.$emit("close"),["self"]))},[d("div",YV,[d("h3",XV,_(t.title),1),d("p",null,_(t.message),1),d("p",QV,_(y(n)==="en"?"This action cannot be undone.":"لا يمكن التراجع عن هذا الإجراء."),1),d("div",JV,[d("button",{onClick:s[0]||(s[0]=i=>r.$emit("close")),class:"action-button secondary"},_(y(n)==="en"?"Cancel":"إلغاء"),1),d("button",{onClick:s[1]||(s[1]=i=>{r.$emit("confirm"),y(e)()}),class:"action-button delete-button-confirm"},_(y(n)==="en"?"Delete":"حذف"),1)])])])):pe("",!0)]),_:1}))}},Ll=vt(ZV,[["__scopeId","data-v-8046b31b"]]),e4=["dir"],t4={key:0},n4={class:"patient-details-grid"},r4={class:"detail-item"},s4={class:"detail-label"},i4={class:"detail-value"},o4={class:"detail-item"},a4={class:"detail-label"},l4={class:"detail-value"},c4={class:"scans-list-container"},u4={key:0,class:"loading-message"},d4={key:1,class:"no-scans-message"},h4={key:2,class:"scans-list"},f4={class:"scan-info"},p4={class:"scan-type-place"},m4={class:"scan-type"},g4={class:"scan-place"},y4={class:"scan-date"},v4={class:"scan-dose"},_4={class:"scan-actions"},b4=["onClick"],w4=["onClick"],E4={__name:"PatientDetailsModal",props:{show:Boolean,patient:Object},emits:["close","scan-saved"],setup(t,{emit:e}){const n=t,r=e,s=Di(),i=Ve("currentLanguage"),o=Ve("triggerMsvRecalculation"),c=Ee([]),l=Ee(null),u=Ee(null),h=Ee(!1),m=Ee(!1),p=Te(()=>n.patient?.id),v=async()=>{if(!p.value){c.value=[];return}const V=await s.fetchScansForPatient(p.value);c.value=V||[]};Qe(()=>n.show,V=>{V&&p.value&&v()});const R=async V=>{if(!n.patient?.id){alert("Error: No patient selected to save this scan for.");return}const F={...V,patientId:n.patient.id};(F.id?await s.updateScan(F.id,F):await s.createScan(F))?(h.value=!1,await v(),r("scan-saved"),o&&o()):alert(`Error saving patient scan: ${s.error}`)},I=async()=>{if(!u.value?.id)return;await s.deleteScan(u.value.id)?(m.value=!1,await v(),r("scan-saved"),o&&o()):alert(`Failed to delete scan: ${s.error}`)};function E(){l.value=null,h.value=!0}function k(V){l.value=V,h.value=!0}function N(V){u.value=V,m.value=!0}const $=V=>!V||!V.toDate?"N/A":V.toDate().toLocaleDateString(i.value==="ar"?"ar-EG":"en-US");return(V,F)=>(U(),j(Xe,null,[Ce(ss,{name:"modal-fade"},{default:fr(()=>[t.show?(U(),j("div",{key:0,class:"modal-overlay",onClick:F[1]||(F[1]=tt(X=>V.$emit("close"),["self"]))},[d("div",{class:"modal-content-details",dir:y(i)==="ar"?"rtl":"ltr"},[d("button",{class:"close-modal-button",onClick:F[0]||(F[0]=X=>V.$emit("close"))},"×"),t.patient?(U(),j("div",t4,[d("h3",null,[at(_(y(i)==="en"?"Scan History for":"سجل الفحوصات لـ")+" ",1),d("strong",null,_(t.patient.name),1)]),d("p",null,_(y(i)==="en"?"Review past scans or add a new record.":"مراجعة الفحوصات السابقة أو إضافة سجل جديد."),1),d("div",n4,[d("div",r4,[d("span",s4,_(y(i)==="en"?"Gender":"الجنس"),1),d("span",i4,_(t.patient.gender||"N/A"),1)]),d("div",o4,[d("span",a4,_(y(i)==="en"?"Weight":"الوزن"),1),d("span",l4,_(t.patient.weight?`${t.patient.weight} kg`:"N/A"),1)])]),d("button",{onClick:E,class:"add-scan-button"},[Ce(y(wt),{icon:"plus"}),at(" "+_(y(i)==="en"?"Add New Scan":"إضافة فحص جديد"),1)]),d("div",c4,[y(s).loading?(U(),j("div",u4,[Ce(y(wt),{icon:"spinner",spin:""}),at(" "+_(y(i)==="en"?"Loading scans...":"جاري تحميل الفحوصات..."),1)])):c.value.length===0?(U(),j("div",d4,_(y(i)==="en"?"No scans recorded for this patient yet.":"لا توجد فحوصات مسجلة لهذا المريض بعد."),1)):(U(),j("ul",h4,[(U(!0),j(Xe,null,Jt(c.value,X=>(U(),j("li",{key:X.id,class:"scan-item"},[d("div",f4,[d("span",p4,[d("span",m4,_(X.scanType),1),d("span",g4,"of the "+_(X.scanPlace||"N/A"),1)]),d("span",y4,_($(X.scanDate)),1),d("span",v4,_(y(i)==="en"?"Dose:":"الجرعة:")+" "+_(X.patientDose)+" mSv",1)]),d("div",_4,[d("button",{onClick:P=>k(X),class:"action-button-icon edit-button"},[Ce(y(wt),{icon:"edit"})],8,b4),d("button",{onClick:P=>N(X),class:"action-button-icon delete-button"},[Ce(y(wt),{icon:"trash-alt"})],8,w4)])]))),128))]))])])):pe("",!0)],8,e4)])):pe("",!0)]),_:1}),Ce(KV,{show:h.value,patient:t.patient,scan:l.value,"is-saving":y(s).loading,onClose:F[2]||(F[2]=X=>h.value=!1),onSave:R},null,8,["show","patient","scan","is-saving"]),Ce(Ll,{show:m.value,title:y(i)==="en"?"Delete Scan":"حذف الفحص",message:`${y(i)==="en"?"Are you sure you want to delete this scan from":"هل أنت متأكد من حذف هذا الفحص بتاريخ"} ${$(u.value?.scanDate)}?`,onClose:F[3]||(F[3]=X=>m.value=!1),onConfirm:I},null,8,["show","title","message"])],64))}},T4=vt(E4,[["__scopeId","data-v-e5fe2d03"]]),I4={class:"patient-list-page"},S4={class:"patient-list-main-content"},A4={class:"patient-list-card"},P4=["dir"],C4={key:0,class:"loading-message"},R4={key:1,class:"no-patients-message"},D4={key:2,class:"patient-table-container"},k4={class:"patient-table"},O4={class:"details-column"},x4={class:"details-column"},N4={class:"details-column"},V4={class:"details-column"},M4={class:"action-buttons-wrapper"},L4=["onClick","title"],$4=["onClick","title"],F4=["onClick","title"],U4=["onClick","title"],B4={class:"switch-link-container"},j4={__name:"PatientsView",setup(t){const e=gn(),n=Di(),r=is(),s=Ve("currentLanguage"),i=Ee([]),o=Ee(null),c=Ee(null),l=Ee(null),u=Ee(!1),h=Ee(!1),m=Ee(!1),p=Te(()=>e.user?.uid),v=async()=>{const X=await n.fetchPatientsForDoctor();X&&(i.value=X)},R=X=>{if(!X?.toDate)return"N/A";const P=X.toDate(),w=new Date;let T=w.getFullYear()-P.getFullYear(),C=w.getMonth()-P.getMonth();if(w.getDate()<P.getDate()&&C--,C<0&&(T--,C+=12),T>=2)return`${T} ${s.value==="ar"?"سنوات":"years"}`;{const x=s.value==="ar"?"سنة":"year",D=s.value==="ar"?"أشهر":"months",S=s.value==="ar"?"شهر":"month";return T>0?`${T} ${x}, ${C} ${C===1?S:D}`:C>0?`${C} ${C===1?S:D}`:s.value==="ar"?"أقل من شهر":"Less than a month"}},I=async X=>{const{id:P,...w}=X;let T=!1;P?T=await n.updatePatientProfile(P,w):T=!!await n.addNewPatient(w),T?(u.value=!1,await v()):alert(`Failed to save patient. Error: ${n.error}`)},E=async()=>{if(!o.value?.id)return;await n.deletePatientProfile(o.value.id)?(m.value=!1,await v()):alert(`Failed to delete patient. Error: ${n.error}`)};function k(){l.value=null,u.value=!0}function N(X){l.value=X,u.value=!0}function $(X){c.value=X,h.value=!0}function V(X){o.value=X,m.value=!0}function F(X){X&&r.push({name:"recommend",query:{patientId:X}})}return Qe(p,X=>{X&&v()},{immediate:!0}),(X,P)=>(U(),j("div",I4,[d("div",S4,[d("div",A4,[d("h2",null,_(y(s)==="en"?"Manage Patients":"إدارة المرضى"),1),d("p",null,_(y(s)==="en"?"Add new patients or view existing records":"أضف مرضى جدد أو اطلع على السجلات الحالية."),1),d("button",{onClick:k,class:"add-new-patient-button"},_(y(s)==="en"?"Add New Patient":"إضافة مريض جديد"),1),d("div",{class:"patient-list-section",dir:y(s)==="ar"?"rtl":"ltr"},[d("h3",null,_(y(s)==="en"?"Existing Patients":"المرضى الحاليون"),1),y(n).loading?(U(),j("div",C4,[Ce(y(wt),{icon:"spinner",spin:""}),at(" "+_(y(s)==="en"?"Loading patients...":"جاري تحميل المرضى..."),1)])):!i.value||i.value.length===0?(U(),j("div",R4,_(y(s)==="en"?"No patients added yet.":"لم يتم إضافة أي مرضى بعد."),1)):(U(),j("div",D4,[d("table",k4,[d("thead",null,[d("tr",null,[d("th",null,_(y(s)==="en"?"Name":"الاسم"),1),d("th",null,_(y(s)==="en"?"Age":"العمر"),1),d("th",null,_(y(s)==="en"?"Weight":"الوزن"),1),d("th",null,_(y(s)==="en"?"Gender":"الجنس"),1),d("th",O4,_(y(s)==="en"?"Medical History":"التاريخ الطبي"),1),d("th",x4,_(y(s)==="en"?"Allergies":"الحساسية"),1),d("th",null,_(y(s)==="en"?"Actions":"الإجراءات"),1)])]),d("tbody",null,[(U(!0),j(Xe,null,Jt(i.value,w=>(U(),j("tr",{key:w.id},[d("td",null,_(w.name??"N/A"),1),d("td",null,_(R(w.birthDate)),1),d("td",null,_(w.weight?`${w.weight} kg`:"N/A"),1),d("td",null,_(y(s)==="en"?(w.gender?.charAt(0).toUpperCase()??"")+(w.gender?.slice(1)??"N/A"):w.gender==="male"?"ذكر":"أنثى"),1),d("td",N4,_(w.medicalHistory?.join(", ")||(y(s)==="en"?"None":"لا يوجد")),1),d("td",V4,_(w.allergies?.join(", ")||(y(s)==="en"?"None":"لا يوجد")),1),d("td",null,[d("div",M4,[d("button",{onClick:T=>$(w),class:"action-button-sm view-button",title:y(s)==="en"?"View Scan History":"عرض سجل الفحوصات"},[Ce(y(wt),{icon:"eye"})],8,L4),d("button",{onClick:T=>N(w),class:"action-button-sm edit-button",title:y(s)==="en"?"Edit Patient Details":"تعديل تفاصيل المريض"},[Ce(y(wt),{icon:"edit"})],8,$4),d("button",{onClick:T=>V(w),class:"action-button-sm delete-button",title:y(s)==="en"?"Delete Patient":"حذف المريض"},[Ce(y(wt),{icon:"trash-alt"})],8,F4),d("button",{onClick:T=>F(w.id),class:"action-button-sm recommend-button",title:y(s)==="en"?"Get Recommendation":"الحصول على توصية"},[Ce(y(wt),{icon:"file-medical"})],8,U4)])])]))),128))])])]))],8,P4),d("div",B4,[d("a",{href:"#",onClick:P[0]||(P[0]=tt(w=>y(r).push("/dashboard"),["prevent"]))},_(y(s)==="en"?"Back to dashboard":"العودة إلى لوحة التحكم"),1)])])]),Ce(gV,{show:u.value,patient:l.value,"is-saving":y(n).loading,onClose:P[1]||(P[1]=w=>u.value=!1),onSave:I},null,8,["show","patient","is-saving"]),Ce(T4,{show:h.value,patient:c.value,onClose:P[2]||(P[2]=w=>h.value=!1),onScanSaved:v},null,8,["show","patient"]),Ce(Ll,{show:m.value,title:y(s)==="en"?"Delete Patient":"حذف المريض",message:`${y(s)==="en"?"Are you sure you want to delete":"هل أنت متأكد من الحذف"} ${o.value?.name??"this patient"}?`,onClose:P[3]||(P[3]=w=>m.value=!1),onConfirm:E},null,8,["show","title","message"])]))}},q4=vt(j4,[["__scopeId","data-v-63db406d"]]),H4={key:0,class:"loading-container"},z4={key:0,class:"role-modal-backdrop"},W4={class:"role-modal"},G4={class:"form-group"},K4={value:"",disabled:""},Y4={value:"doctor"},X4={value:"patient"},Q4={class:"form-group"},J4={class:"form-group"},Z4={value:"",disabled:""},eM={value:"male"},tM={value:"female"},nM={class:"form-group"},rM=["placeholder"],sM={class:"form-group"},iM=["placeholder"],oM=["disabled"],aM={key:1},lM={class:"dashboard-main-content"},cM={class:"dashboard-card"},uM=["dir"],dM=["dir"],hM={class:"dashboard-features"},fM=["dir"],pM=["dir"],mM=["dir"],gM=["dir"],yM=["dir"],vM=["dir"],_M={__name:"DashboardView",setup(t){const e=gn(),n=Di(),r=is(),s=Ee({role:null,birthDate:"",gender:"",allergies:"",medicalHistory:""}),i=Te(()=>!e.isAuthReady||e.isProfileLoading),o=Te(()=>e.user?!e.isProfileComplete:!1),c=Te(()=>e.role),l=Ve("currentLanguage"),u=async()=>{const{uid:m,email:p,displayName:v}=e.user,{role:R,birthDate:I,gender:E,allergies:k,medicalHistory:N}=s.value;if(!R||!I||!E){alert("Please fill out all required fields: Role, Birth Date, and Gender.");return}const $={email:p,displayName:v,role:R,birthDate:Oe.fromDate(new Date(I)),gender:E,allergies:k.split(",").map(F=>F.trim()).filter(Boolean),medicalHistory:N.split(",").map(F=>F.trim()).filter(Boolean)};await n.setUserProfile(m,$)?e.setUserProfile($):alert(`Failed to save profile. Error: ${n.error}`)},h=async()=>{await e.logout(),r.push("/signin")};return(m,p)=>(U(),j("div",null,[i.value?(U(),j("div",H4,[d("p",null,_(y(l)==="en"?"Verifying session...":"جار التحقق من الجلسة..."),1),Ce(y(wt),{icon:"spinner",spin:"",size:"2x"})])):(U(),j(Xe,{key:1},[o.value?(U(),j("div",z4,[d("div",W4,[d("h2",null,_(y(l)==="en"?"Complete Your Profile":"أكمل ملفك الشخصي"),1),d("div",G4,[d("label",null,_(y(l)==="en"?"I am a:":"أنا:"),1),ee(d("select",{"onUpdate:modelValue":p[0]||(p[0]=v=>s.value.role=v)},[d("option",K4,_(y(l)==="en"?"-- Select Role --":"-- اختر دورك --"),1),d("option",Y4,_(y(l)==="en"?"Doctor":"طبيب"),1),d("option",X4,_(y(l)==="en"?"Patient":"مريض"),1)],512),[[lt,s.value.role]])]),d("div",Q4,[d("label",null,_(y(l)==="en"?"Birth Date":"تاريخ الميلاد"),1),ee(d("input",{type:"date","onUpdate:modelValue":p[1]||(p[1]=v=>s.value.birthDate=v)},null,512),[[me,s.value.birthDate]])]),d("div",J4,[d("label",null,_(y(l)==="en"?"Gender":"الجنس"),1),ee(d("select",{"onUpdate:modelValue":p[2]||(p[2]=v=>s.value.gender=v)},[d("option",Z4,_(y(l)==="en"?"-- Select Gender --":"-- اختر الجنس --"),1),d("option",eM,_(y(l)==="en"?"Male":"ذكر"),1),d("option",tM,_(y(l)==="en"?"Female":"أنثى"),1)],512),[[lt,s.value.gender]])]),d("div",nM,[d("label",null,_(y(l)==="en"?"Allergies (comma-separated)":"الحساسية (مفصولة بفاصلة)"),1),ee(d("textarea",{"onUpdate:modelValue":p[3]||(p[3]=v=>s.value.allergies=v),rows:"2",placeholder:y(l)==="en"?"e.g., Iodine-Based Dyes":"مثال: صبغات اليود"},null,8,rM),[[me,s.value.allergies]])]),d("div",sM,[d("label",null,_(y(l)==="en"?"Medical History (comma-separated)":"التاريخ الطبي (مفصول بفاصلة)"),1),ee(d("textarea",{"onUpdate:modelValue":p[4]||(p[4]=v=>s.value.medicalHistory=v),rows:"2",placeholder:y(l)==="en"?"e.g., Diabetes, Asthma":"مثال: مرض السكري, الربو"},null,8,iM),[[me,s.value.medicalHistory]])]),d("button",{class:"action-button",onClick:u,disabled:y(n).loading},[y(n).loading?(U(),In(y(wt),{key:0,icon:"spinner",spin:""})):(U(),j("span",aM,_(y(l)==="en"?"Save & Continue":"حفظ ومتابعة"),1))],8,oM)])])):pe("",!0),d("div",{class:zr(["dashboard-page dashboard-blur-area",{"is-blurred":o.value}])},[d("main",lM,[d("section",cM,[d("h2",{dir:y(l)==="ar"?"rtl":"ltr"},_(y(l)==="en"?"Welcome to mSv Dose Tracker":"مرحبًا بك في متتبع جرعات الأشعة السينية"),9,uM),d("p",{dir:y(l)==="ar"?"rtl":"ltr"},_(y(l)==="en"?"Your comprehensive tool for managing radiation exposure.":"أداتك الشاملة لإدارة التعرض للإشعاع."),9,dM),d("div",hM,[d("div",{class:"feature-item",onClick:p[5]||(p[5]=v=>y(r).push("/recommend"))},[p[8]||(p[8]=d("i",{class:"fas fa-file-medical"},null,-1)),d("h3",{dir:y(l)==="ar"?"rtl":"ltr"},_(y(l)==="en"?"Get Scan Recommendation":"الحصول على توصية"),9,fM),d("p",{dir:y(l)==="ar"?"rtl":"ltr"},_(y(l)==="en"?"Use AI to get recommendations on the necessity of radiological scans.":"استخدم الذكاء الاصطناعي للحصول على توصيات حول ضرورة الفحوصات الإشعاعية."),9,pM)]),c.value==="doctor"?(U(),j("div",{key:0,class:"feature-item",onClick:p[6]||(p[6]=v=>y(r).push("/patients"))},[p[9]||(p[9]=d("i",{class:"fas fa-users"},null,-1)),d("h3",{dir:y(l)==="ar"?"rtl":"ltr"},_(y(l)==="en"?"Manage Patients":"إدارة المرضى"),9,mM),d("p",{dir:y(l)==="ar"?"rtl":"ltr"},_(y(l)==="en"?"View, add, and manage your patient records and their scan histories.":"عرض وإضافة وإدارة سجلات مرضاك وتاريخ فحوصاتهم."),9,gM)])):pe("",!0),d("div",{class:"feature-item",onClick:p[7]||(p[7]=v=>y(r).push("/profile"))},[p[10]||(p[10]=d("i",{class:"fas fa-user"},null,-1)),d("h3",{dir:y(l)==="ar"?"rtl":"ltr"},_(y(l)==="en"?"View Profile":"عرض الملف الشخصي"),9,yM),d("p",{dir:y(l)==="ar"?"rtl":"ltr"},_(y(l)==="en"?"Review your personal details and dose history.":"راجع معلوماتك الشخصية وسجل جرعاتك."),9,vM)])]),d("button",{onClick:h,class:"action-button secondary logout-button"},_(y(l)==="en"?"Logout":"تسجيل الخروج"),1)])])],2)],64))]))}},bM=vt(_M,[["__scopeId","data-v-2c9adee3"]]),wM={class:"reset-password-page"},EM={class:"reset-password-main-content"},TM={class:"reset-password-card"},IM=["dir"],SM=["dir"],AM={class:"form-group"},PM=["dir"],CM=["placeholder","dir"],RM=["disabled"],DM={key:0},kM={key:1},OM=["dir"],xM=["dir"],NM=["dir"],VM={__name:"ResetPasswordView",setup(t){const e=is(),n=gn(),r=Ve("currentLanguage"),s=Ee(""),i=async()=>{await n.sendPasswordReset(s.value)},o=()=>{e.push("/signin")};return(c,l)=>(U(),j("div",wM,[d("main",EM,[d("section",TM,[d("h2",{dir:y(r)==="ar"?"rtl":"ltr"},_(y(r)==="en"?"Reset Your Password":"إعادة تعيين كلمة المرور"),9,IM),d("p",{dir:y(r)==="ar"?"rtl":"ltr"},_(y(r)==="en"?"Enter your email address to receive a password reset link.":"أدخل عنوان بريدك الإلكتروني لتلقي رابط إعادة تعيين كلمة المرور."),9,SM),d("form",{onSubmit:tt(i,["prevent"]),class:"reset-password-form"},[d("div",AM,[d("label",{for:"email",dir:y(r)==="ar"?"rtl":"ltr"},_(y(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,PM),ee(d("input",{type:"email",id:"email","onUpdate:modelValue":l[0]||(l[0]=u=>s.value=u),placeholder:y(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:y(r)==="ar"?"rtl":"ltr",required:""},null,8,CM),[[me,s.value]])]),d("button",{class:"action-button primary",type:"submit",disabled:y(n).loading},[y(n).loading?(U(),j("span",DM,_(y(r)==="en"?"Sending Link...":"جاري إرسال الرابط..."),1)):(U(),j("span",kM,_(y(r)==="en"?"Send Reset Link":"إرسال رابط إعادة التعيين"),1))],8,RM)],32),y(n).error?(U(),j("div",{key:0,class:"message error-message",dir:y(r)==="ar"?"rtl":"ltr"},_(y(n).error),9,OM)):pe("",!0),y(n).successMessage?(U(),j("div",{key:1,class:"message success-message",dir:y(r)==="ar"?"rtl":"ltr"},_(y(n).successMessage),9,xM)):pe("",!0),d("p",{class:"switch-link-container",dir:y(r)==="ar"?"rtl":"ltr"},[at(_(y(r)==="en"?"Remembered your password?":"هل تذكرت كلمة المرور؟")+" ",1),d("a",{href:"#",onClick:tt(o,["prevent"])},_(y(r)==="en"?"Sign In":"تسجيل الدخول"),1)],8,NM)])])]))}},MM=vt(VM,[["__scopeId","data-v-73a48bd7"]]),LM=["dir"],$M={class:"modal-title"},FM={class:"form-group"},UM={value:"doctor"},BM={value:"patient"},jM={class:"form-group"},qM={class:"form-group"},HM={class:"form-group"},zM={value:"male"},WM={value:"female"},GM={key:0,class:"pregnancy-section"},KM={class:"form-group checkbox-group"},YM={key:0,class:"form-group"},XM={class:"form-group"},QM={class:"form-group"},JM={class:"modal-actions"},ZM={type:"submit",class:"action-button"},eL={__name:"ProfileFormModal",props:{show:Boolean,profileData:{type:Object,default:()=>null}},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=Ve("currentLanguage"),i=Bn({role:"",birthDate:"",gender:"male",weight:null,isPregnant:!1,estimatedDueDate:"",allergies:"",medicalHistory:""});Qe(()=>n.show,c=>{c&&n.profileData&&(i.role=n.profileData.role||"patient",i.birthDate=n.profileData.birthDate||"",i.gender=n.profileData.gender||"male",i.weight=n.profileData.weight||null,i.isPregnant=n.profileData.isPregnant||!1,i.estimatedDueDate=n.profileData.estimatedDueDate||"",i.allergies=Array.isArray(n.profileData.allergies)?n.profileData.allergies.join(", "):"",i.medicalHistory=Array.isArray(n.profileData.medicalHistory)?n.profileData.medicalHistory.join(", "):"")},{immediate:!0}),Qe(()=>i.gender,c=>{c==="male"&&(i.isPregnant=!1,i.estimatedDueDate="")}),Qe(()=>i.isPregnant,c=>{c||(i.estimatedDueDate="")});const o=()=>{if(!i.role||!i.birthDate||!i.gender){alert("Role, Birth Date, and Gender are required.");return}if(i.isPregnant&&!i.estimatedDueDate){alert("Estimated due date is required for pregnant patients.");return}r("save",i)};return(c,l)=>(U(),In(ss,{name:"modal-fade"},{default:fr(()=>[t.show?(U(),j("div",{key:0,class:"modal-overlay",onClick:l[10]||(l[10]=tt(u=>r("close"),["self"]))},[d("div",{class:"modal-content",dir:y(s)==="ar"?"rtl":"ltr"},[d("button",{class:"close-button",onClick:l[0]||(l[0]=u=>r("close"))},"×"),d("h3",$M,_(y(s)==="en"?"Edit Profile":"تعديل الملف الشخصي"),1),d("form",{onSubmit:tt(o,["prevent"]),class:"profile-form"},[d("div",FM,[d("label",null,_(y(s)==="en"?"Role":"الدور"),1),ee(d("select",{"onUpdate:modelValue":l[1]||(l[1]=u=>i.role=u),required:""},[d("option",UM,_(y(s)==="en"?"Doctor":"طبيب"),1),d("option",BM,_(y(s)==="en"?"Patient":"مريض"),1)],512),[[lt,i.role]])]),d("div",jM,[d("label",null,_(y(s)==="en"?"Weight (kg)":"الوزن (كجم)"),1),ee(d("input",{type:"number",step:"0.1","onUpdate:modelValue":l[2]||(l[2]=u=>i.weight=u),placeholder:"e.g., 70.5"},null,512),[[me,i.weight]])]),d("div",qM,[d("label",null,_(y(s)==="en"?"Birth Date":"تاريخ الميلاد"),1),ee(d("input",{type:"date","onUpdate:modelValue":l[3]||(l[3]=u=>i.birthDate=u),required:""},null,512),[[me,i.birthDate]])]),d("div",HM,[d("label",null,_(y(s)==="en"?"Gender":"الجنس"),1),ee(d("select",{"onUpdate:modelValue":l[4]||(l[4]=u=>i.gender=u),required:""},[d("option",zM,_(y(s)==="en"?"Male":"ذكر"),1),d("option",WM,_(y(s)==="en"?"Female":"أنثى"),1)],512),[[lt,i.gender]])]),i.gender==="female"?(U(),j("div",GM,[d("div",KM,[d("label",null,[ee(d("input",{type:"checkbox","onUpdate:modelValue":l[5]||(l[5]=u=>i.isPregnant=u)},null,512),[[Ko,i.isPregnant]]),d("span",null,_(y(s)==="en"?"Currently Pregnant?":"هل أنت حامل حاليًا؟"),1)])]),i.isPregnant?(U(),j("div",YM,[d("label",null,_(y(s)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع"),1),ee(d("input",{type:"date","onUpdate:modelValue":l[6]||(l[6]=u=>i.estimatedDueDate=u),required:""},null,512),[[me,i.estimatedDueDate]])])):pe("",!0)])):pe("",!0),d("div",XM,[d("label",null,_(y(s)==="en"?"Allergies (comma-separated)":"الحساسية (مفصولة بفاصلة)"),1),ee(d("textarea",{"onUpdate:modelValue":l[7]||(l[7]=u=>i.allergies=u),rows:"2"},null,512),[[me,i.allergies]])]),d("div",QM,[d("label",null,_(y(s)==="en"?"Medical History (comma-separated)":"التاريخ الطبي (مفصول بفاصلة)"),1),ee(d("textarea",{"onUpdate:modelValue":l[8]||(l[8]=u=>i.medicalHistory=u),rows:"2"},null,512),[[me,i.medicalHistory]])]),d("div",JM,[d("button",{type:"button",onClick:l[9]||(l[9]=u=>r("close")),class:"action-button secondary"},_(y(s)==="en"?"Cancel":"إلغاء"),1),d("button",ZM,_(y(s)==="en"?"Save Changes":"حفظ التغييرات"),1)])],32)],8,LM)])):pe("",!0)]),_:1}))}},tL=vt(eL,[["__scopeId","data-v-efada37a"]]),nL=["dir"],rL={class:"form-row"},sL={class:"form-group"},iL={disabled:"",value:""},oL=["value"],aL={key:0,class:"form-group"},lL={class:"form-row"},cL={class:"form-group"},uL={value:"X-ray"},dL={value:"CT"},hL={class:"form-group"},fL={disabled:"",value:""},pL=["value"],mL={key:0,class:"form-group"},gL=["placeholder"],yL={key:1,class:"form-group"},vL={class:"form-group"},_L={class:"form-group"},bL=["placeholder"],wL={class:"form-group"},EL={class:"form-group"},TL={class:"modal-actions"},IL=["disabled"],SL={__name:"PersonalScanFormModal",props:{show:Boolean,scan:Object,isSaving:Boolean},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=Ve("currentLanguage"),i={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},o=[{value:"head",en:"Head",ar:"الرأس"},{value:"neck",en:"Neck",ar:"الرقبة"},{value:"chest",en:"Chest",ar:"الصدر"},{value:"abdomen",en:"Abdomen",ar:"البطن"},{value:"pelvis",en:"Pelvis",ar:"الحوض"},{value:"spine",en:"Spine",ar:"العمود الفقري"},{value:"upper_extremity",en:"Upper Extremity",ar:"الطرف العلوي"},{value:"lower_extremity",en:"Lower Extremity",ar:"الطرف السفلي"},{value:"other",en:"Other",ar:"أخرى"}],c={patient:{CT:{"Abdomen & Pelvis":14,"Brain with contrast":2,"Angiography CTA":12,Urography:8,Enterography:8,default:6},"X-ray":{"Barium Enema":7,"IV Urogram (IVP)":2.5,HSG:1.5,VCUG:1,default:.5}},doctor:{CT:{default:1e-5},"X-ray":{"Barium Enema":1e-4,"IV Urogram (IVP)":5e-5,HSG:2e-4,VCUG:15e-5,default:5e-5}}},l=Bn({id:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanPlace:"",otherScanPlaceDescription:"",numberOfScans:1,scanDate:new Date().toISOString().split("T")[0],patientDose:null,reason:"",notes:""}),u=Te(()=>i[l.scanType]||[]),h=Te(()=>l.subScanType==="Other"),m=Te(()=>l.scanPlace==="other");Qe(()=>n.show,R=>{if(R&&(Object.assign(l,{id:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanPlace:"",otherScanPlaceDescription:"",numberOfScans:1,scanDate:new Date().toISOString().split("T")[0],patientDose:null,reason:"",notes:""}),n.scan)){l.id=n.scan.id,l.scanType=n.scan.scanType,l.scanDate=n.scan.scanDate?.toDate()?.toISOString().split("T")[0]||"",l.patientDose=n.scan.patientDose,l.reason=n.scan.reason,l.notes=n.scan.notes,l.numberOfScans=n.scan.numberOfScans||1;const I=n.scan.scanDetail;u.value.some($=>$.value===I)?l.subScanType=I:I&&(l.subScanType="Other",l.otherScanDescription=I);const k=n.scan.scanPlace;o.some($=>$.value===k)?l.scanPlace=k:k&&(l.scanPlace="other",l.otherScanPlaceDescription=k)}}),Qe(()=>l.scanType,()=>{l.subScanType="",l.otherScanDescription=""});const p=()=>{try{const R=l.subScanType==="Other"?"default":l.subScanType,E=c.patient[l.scanType];if(!E)return null;let k=E[R]??E.default;return k===void 0?null:l.scanType==="X-ray"?k*l.numberOfScans:k}catch(R){return console.error("Error retrieving fallback dose:",R),null}},v=()=>{if(!l.scanDate||!l.scanPlace||m.value&&!l.otherScanPlaceDescription||!l.subScanType||h.value&&!l.otherScanDescription){alert(s.value==="en"?"Please fill all required scan details.":"يرجى ملء جميع تفاصيل الفحص المطلوبة.");return}if(l.scanType==="X-ray"&&(l.numberOfScans===null||l.numberOfScans<1)){alert(s.value==="en"?"Number of scans must be at least 1 for X-ray.":"عدد الفحوصات لأشعة إكس يجب أن يكون 1 على الأقل.");return}if((l.patientDose===null||l.patientDose==="")&&(l.patientDose=p()),l.patientDose===null){alert(s.value==="en"?"Could not find a typical dose value for the selected scan. Please enter the dose manually.":"تعذر العثور على قيمة جرعة نموذجية للفحص المحدد. يرجى إدخال الجرعة يدويًا.");return}const R=l.scanDate.split("-"),I=new Date(Date.UTC(R[0],parseInt(R[1],10)-1,R[2]));if(isNaN(I.getTime())){alert("Invalid date. Please select a valid date.");return}const E={id:l.id,scanType:l.scanType,scanDetail:h.value?l.otherScanDescription:l.subScanType,scanPlace:m.value?l.otherScanPlaceDescription:l.scanPlace,numberOfScans:l.scanType==="X-ray"?Number(l.numberOfScans):1,scanDate:Oe.fromDate(I),patientDose:Number(l.patientDose),reason:l.reason,notes:l.notes,isPersonalScan:!0};r("save",E)};return(R,I)=>(U(),In(ss,{name:"modal-fade"},{default:fr(()=>[t.show?(U(),j("div",{key:0,class:"modal-overlay",onClick:I[12]||(I[12]=tt(E=>R.$emit("close"),["self"]))},[d("div",{class:"modal-content",dir:y(s)==="ar"?"rtl":"ltr"},[d("button",{class:"close-modal-button",onClick:I[0]||(I[0]=E=>R.$emit("close"))},"×"),d("h3",null,_(t.scan?y(s)==="en"?"Edit Personal Scan":"تعديل الفحص الشخصي":y(s)==="en"?"Add Personal Scan":"إضافة فحص شخصي"),1),d("form",{onSubmit:tt(v,["prevent"]),class:"scan-form"},[d("div",rL,[d("div",sL,[d("label",null,_(y(s)==="en"?"Place of Scan":"مكان الفحص"),1),ee(d("select",{"onUpdate:modelValue":I[1]||(I[1]=E=>l.scanPlace=E),required:""},[d("option",iL,_(y(s)==="en"?"Select...":"اختر..."),1),(U(),j(Xe,null,Jt(o,E=>d("option",{key:E.value,value:E.value},_(y(s)==="en"?E.en:E.ar),9,oL)),64))],512),[[lt,l.scanPlace]])]),m.value?(U(),j("div",aL,[d("label",null,_(y(s)==="en"?"Please specify other place":"يرجى تحديد المكان الآخر"),1),ee(d("input",{type:"text","onUpdate:modelValue":I[2]||(I[2]=E=>l.otherScanPlaceDescription=E),required:""},null,512),[[me,l.otherScanPlaceDescription]])])):pe("",!0)]),d("div",lL,[d("div",cL,[d("label",null,_(y(s)==="en"?"Scan Category":"فئة الفحص"),1),ee(d("select",{"onUpdate:modelValue":I[3]||(I[3]=E=>l.scanType=E),required:""},[d("option",uL,_(y(s)==="en"?"X-ray":"أشعة سينية"),1),d("option",dL,_(y(s)==="en"?"CT":"أشعة مقطعية"),1)],512),[[lt,l.scanType]])]),d("div",hL,[d("label",null,_(y(s)==="en"?"Scan Protocol":"بروتوكول الفحص"),1),ee(d("select",{"onUpdate:modelValue":I[4]||(I[4]=E=>l.subScanType=E),required:""},[d("option",fL,_(y(s)==="en"?"Select...":"اختر..."),1),(U(!0),j(Xe,null,Jt(u.value,E=>(U(),j("option",{key:E.value,value:E.value},_(y(s)==="en"?E.en:E.ar),9,pL))),128))],512),[[lt,l.subScanType]])])]),h.value?(U(),j("div",mL,[d("label",null,_(y(s)==="en"?"Please specify scan protocol":"يرجى تحديد بروتوكول الفحص"),1),ee(d("input",{type:"text","onUpdate:modelValue":I[5]||(I[5]=E=>l.otherScanDescription=E),placeholder:y(s)==="en"?"e.g., Left Hand X-ray":"مثال: أشعة سينية لليد اليسرى",required:""},null,8,gL),[[me,l.otherScanDescription]])])):pe("",!0),l.scanType==="X-ray"?(U(),j("div",yL,[d("label",null,_(y(s)==="en"?"Number of Scans":"عدد الفحوصات"),1),ee(d("input",{type:"number","onUpdate:modelValue":I[6]||(I[6]=E=>l.numberOfScans=E),min:"1",required:""},null,512),[[me,l.numberOfScans,void 0,{number:!0}]])])):pe("",!0),d("div",vL,[d("label",null,_(y(s)==="en"?"Scan Date":"تاريخ الفحص"),1),ee(d("input",{type:"date","onUpdate:modelValue":I[7]||(I[7]=E=>l.scanDate=E),required:""},null,512),[[me,l.scanDate]])]),d("div",_L,[d("label",null,_(y(s)==="en"?"Your Dose (mSv)":"جرعتك (mSv)"),1),ee(d("input",{type:"number",step:"0.00005","onUpdate:modelValue":I[8]||(I[8]=E=>l.patientDose=E),placeholder:y(s)==="en"?"Leave blank for typical value":"اتركه فارغًا لتقدير للقيمة القياسسية"},null,8,bL),[[me,l.patientDose,void 0,{number:!0}]])]),d("div",wL,[d("label",null,_(y(s)==="en"?"Reason for Scan":"أسباب الفحص"),1),ee(d("textarea",{"onUpdate:modelValue":I[9]||(I[9]=E=>l.reason=E),rows:"2"},null,512),[[me,l.reason]])]),d("div",EL,[d("label",null,_(y(s)==="en"?"Additional Notes":"ملاحظات إضافية"),1),ee(d("textarea",{"onUpdate:modelValue":I[10]||(I[10]=E=>l.notes=E),rows:"3"},null,512),[[me,l.notes]])]),d("div",TL,[d("button",{type:"button",onClick:I[11]||(I[11]=E=>R.$emit("close")),class:"action-button secondary"},_(y(s)==="en"?"Cancel":"إلغاء"),1),d("button",{type:"submit",class:"action-button",disabled:t.isSaving},_(t.isSaving?y(s)==="en"?"Saving...":"جار الحفظ...":y(s)==="en"?"Save":"حفظ"),9,IL)])],32)],8,nL)])):pe("",!0)]),_:1}))}},AL=vt(SL,[["__scopeId","data-v-dd048426"]]),PL=["dir"],CL={key:0,class:"loading-state"},RL={key:1,class:"empty-state"},DL={key:2,class:"table-container"},kL={class:"history-table"},OL={class:"details-column"},xL={class:"details-column"},NL={class:"details-column"},VL={class:"details-column"},ML={class:"details-column"},LL={class:"details-column"},$L={class:"details-column"},FL={class:"details-column"},UL={class:"action-buttons"},BL=["onClick","title"],jL=["onClick","title"],qL={__name:"HistoryTable",props:{scans:{type:Array,required:!0},isLoading:{type:Boolean,default:!1},isPersonalView:{type:Boolean,default:!1}},emits:["edit","delete"],setup(t,{emit:e}){const n=Ve("currentLanguage"),r=s=>!s||!s.toDate?"N/A":s.toDate().toLocaleDateString();return(s,i)=>(U(),j("div",{class:"history-table-wrapper",dir:y(n)==="ar"?"rtl":"ltr"},[t.isLoading?(U(),j("div",CL,[Ce(y(wt),{icon:"spinner",spin:""}),d("span",null,_(y(n)==="en"?"Loading history...":"جاري تحميل السجل..."),1)])):!t.scans||t.scans.length===0?(U(),j("div",RL,[d("p",null,_(y(n)==="en"?"No scan records found.":"لم يتم العثور على سجلات فحوصات."),1)])):(U(),j("div",DL,[d("table",kL,[d("thead",null,[d("tr",null,[d("th",null,_(y(n)==="en"?"Scan Type":"نوع الفحص"),1),d("th",OL,_(y(n)==="en"?"Place of Scan":"مكان الفحص"),1),d("th",xL,_(y(n)==="en"?"Scan Protocol":"بروتوكول الفحص"),1),d("th",null,_(y(n)==="en"?"Date":"التاريخ"),1),d("th",null,_(y(n)==="en"?"Dose":"الجرعة")+" (mSv)",1),d("th",NL,_(y(n)==="en"?"Reason for Scan":"سبب الفحص"),1),d("th",VL,_(y(n)==="en"?"Additional Notes":"ملاحظات إضافية"),1),d("th",null,_(y(n)==="en"?"Actions":"الإجراءات"),1)])]),d("tbody",null,[(U(!0),j(Xe,null,Jt(t.scans,o=>(U(),j("tr",{key:o.id},[d("td",null,_(o.scanType||"N/A"),1),d("td",ML,_(o.scanPlace||"N/A"),1),d("td",LL,_(o.scanDetail||"N/A"),1),d("td",null,_(r(o.scanDate)),1),d("td",null,_(o.patientDose??"N/A"),1),d("td",$L,_(o.reason||"N/A"),1),d("td",FL,_(o.notes||"N/A"),1),d("td",null,[d("div",UL,[d("button",{onClick:c=>s.$emit("edit",o),class:"action-button-icon edit-button",title:y(n)==="en"?"Edit":"تعديل"},[Ce(y(wt),{icon:"edit"})],8,BL),d("button",{onClick:c=>s.$emit("delete",o),class:"action-button-icon delete-button",title:y(n)==="en"?"Delete":"حذف"},[Ce(y(wt),{icon:"trash-alt"})],8,jL)])])]))),128))])])]))],8,PL))}},HL=vt(qL,[["__scopeId","data-v-757f7f6d"]]),zL=["dir"],WL={class:"form-group"},GL=["value"],KL={key:0,class:"form-group"},YL={class:"form-group"},XL={class:"form-group"},QL=["disabled"],JL=["value"],ZL={key:1,class:"form-group"},e5={key:2,class:"form-group"},t5={class:"form-group"},n5={class:"form-group"},r5=["placeholder"],s5={class:"form-group"},i5=["placeholder"],o5={class:"modal-actions"},a5=["disabled"],l5={__name:"OtherScanFormModal",props:{show:Boolean,scan:Object,isSaving:Boolean},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=Ve("currentLanguage"),i={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},o=[{value:"head",en:"Head",ar:"الرأس"},{value:"neck",en:"Neck",ar:"الرقبة"},{value:"chest",en:"Chest",ar:"الصدر"},{value:"abdomen",en:"Abdomen",ar:"البطن"},{value:"pelvis",en:"Pelvis",ar:"الحوض"},{value:"spine",en:"Spine",ar:"العمود الفقري"},{value:"upper_extremity",en:"Upper Extremity",ar:"الطرف العلوي"},{value:"lower_extremity",en:"Lower Extremity",ar:"الطرف السفلي"},{value:"other",en:"Other",ar:"أخرى"}],c={doctor:{CT:{default:1e-5},"X-ray":{"Barium Enema":1e-4,"IV Urogram (IVP)":5e-5,HSG:2e-4,VCUG:15e-5,default:5e-5}}},l=Bn({id:null,scanPlace:"",otherScanPlaceDescription:"",scanType:"X-ray",scanDetail:"",otherScanDetailDescription:"",numberOfScans:1,date:new Date().toISOString().split("T")[0],dosage:null,doctorAdditionalContext:""}),u=Te(()=>i[l.scanType]||[]),h=Te(()=>l.scanPlace==="other"),m=Te(()=>l.scanDetail==="Other");Qe(()=>n.show,R=>{R&&(Object.assign(l,{id:null,scanPlace:"",otherScanPlaceDescription:"",scanType:"X-ray",scanDetail:"",otherScanDetailDescription:"",numberOfScans:1,date:new Date().toISOString().split("T")[0],dosage:null,doctorAdditionalContext:""}),n.scan&&(l.id=n.scan.id,l.scanPlace=n.scan.scanPlace||"",l.scanType=n.scan.scanType||"X-ray",l.scanDetail=n.scan.scanDetail||"",l.numberOfScans=n.scan.numberOfScans||1,l.dosage=n.scan.dosage,l.date=n.scan.date?.toDate?n.scan.date.toDate().toISOString().split("T")[0]:"",l.doctorAdditionalContext=n.scan.doctorAdditionalContext||""))}),Qe(()=>l.scanType,()=>{l.scanDetail="",l.otherScanDetailDescription=""});const p=()=>{try{const R=l.scanDetail==="Other"?"default":l.scanDetail,E=c.doctor[l.scanType];if(!E)return null;let k=E[R]??E.default;return k===void 0?null:l.scanType==="X-ray"?k*l.numberOfScans:k}catch(R){return console.error("Error retrieving fallback dose:",R),null}},v=()=>{if(!l.scanPlace||!l.scanType||!l.date){alert("Please fill all required fields.");return}if((l.dosage===null||l.dosage==="")&&(l.dosage=p()),l.dosage===null){alert(s.value==="en"?"Could not find a typical dose value for the selected scan. Please enter the dose manually.":"تعذر العثور على قيمة جرعة نموذجية للفحص المحدد. يرجى إدخال الجرعة يدويًا.");return}const R=l.date.split("-"),I=new Date(Date.UTC(R[0],parseInt(R[1],10)-1,parseInt(R[2],10)));if(isNaN(I.getTime())){alert("Invalid date format. Please use YYYY-MM-DD.");return}const E={id:l.id,scanPlace:h.value?l.otherScanPlaceDescription:l.scanPlace,scanType:l.scanType,scanDetail:m.value?l.otherScanDetailDescription:l.scanDetail,numberOfScans:l.scanType==="X-ray"?Number(l.numberOfScans):1,date:Oe.fromDate(I),dosage:Number(l.dosage),doctorAdditionalContext:l.doctorAdditionalContext};r("save",E)};return(R,I)=>(U(),In(ss,{name:"modal-fade"},{default:fr(()=>[t.show?(U(),j("div",{key:0,class:"modal-overlay",onClick:I[11]||(I[11]=tt(E=>R.$emit("close"),["self"]))},[d("div",{class:"modal-content",dir:y(s)==="ar"?"rtl":"ltr"},[d("button",{class:"close-modal-button",onClick:I[0]||(I[0]=E=>R.$emit("close"))},"×"),d("h3",null,_(t.scan?"Edit Other Source":"Add Other Source"),1),I[22]||(I[22]=d("p",{class:"subtitle"},"For miscellaneous radiation sources like background radiation or occupational exposure.",-1)),d("form",{onSubmit:tt(v,["prevent"]),class:"scan-form"},[d("div",WL,[I[13]||(I[13]=d("label",null,"Place of Scan",-1)),ee(d("select",{"onUpdate:modelValue":I[1]||(I[1]=E=>l.scanPlace=E),required:""},[I[12]||(I[12]=d("option",{disabled:"",value:""},"Select...",-1)),(U(),j(Xe,null,Jt(o,E=>d("option",{key:E.value,value:E.value},_(y(s)==="en"?E.en:E.ar),9,GL)),64))],512),[[lt,l.scanPlace]])]),h.value?(U(),j("div",KL,[I[14]||(I[14]=d("label",null,"Please specify place",-1)),ee(d("input",{type:"text","onUpdate:modelValue":I[2]||(I[2]=E=>l.otherScanPlaceDescription=E),required:""},null,512),[[me,l.otherScanPlaceDescription]])])):pe("",!0),d("div",YL,[I[16]||(I[16]=d("label",null,"Scan Type",-1)),ee(d("select",{"onUpdate:modelValue":I[3]||(I[3]=E=>l.scanType=E),required:""},I[15]||(I[15]=[d("option",{value:"X-ray"},"X-ray",-1),d("option",{value:"CT"},"CT",-1)]),512),[[lt,l.scanType]])]),d("div",XL,[I[18]||(I[18]=d("label",null,"Scan Detail / Protocol",-1)),ee(d("select",{"onUpdate:modelValue":I[4]||(I[4]=E=>l.scanDetail=E),disabled:!u.value.length},[I[17]||(I[17]=d("option",{disabled:"",value:""},"Select...",-1)),(U(!0),j(Xe,null,Jt(u.value,E=>(U(),j("option",{key:E.value,value:E.value},_(y(s)==="en"?E.en:E.ar),9,JL))),128))],8,QL),[[lt,l.scanDetail]])]),m.value?(U(),j("div",ZL,[I[19]||(I[19]=d("label",null,"Please specify detail",-1)),ee(d("input",{type:"text","onUpdate:modelValue":I[5]||(I[5]=E=>l.otherScanDetailDescription=E),required:""},null,512),[[me,l.otherScanDetailDescription]])])):pe("",!0),l.scanType==="X-ray"?(U(),j("div",e5,[I[20]||(I[20]=d("label",null,"Number of Scans",-1)),ee(d("input",{type:"number","onUpdate:modelValue":I[6]||(I[6]=E=>l.numberOfScans=E),min:"1",required:""},null,512),[[me,l.numberOfScans,void 0,{number:!0}]])])):pe("",!0),d("div",t5,[I[21]||(I[21]=d("label",null,"History (Date)",-1)),ee(d("input",{type:"date","onUpdate:modelValue":I[7]||(I[7]=E=>l.date=E),required:""},null,512),[[me,l.date]])]),d("div",n5,[d("label",null,_(y(s)==="en"?"Your Exposure Context (Optional)":"سياق تعرضك (اختياري)"),1),ee(d("textarea",{"onUpdate:modelValue":I[8]||(I[8]=E=>l.doctorAdditionalContext=E),rows:"2",placeholder:y(s)==="en"?"e.g., shielding used, distance from source...":"مثال: التدريع المستخدم، المسافة من المصدر..."},"          ",8,r5),[[me,l.doctorAdditionalContext]])]),d("div",s5,[d("label",null,_(y(s)==="en"?"Occupational Dose (mSv)":"الجرعة المهنية (mSv)"),1),ee(d("input",{type:"number",step:"0.00005","onUpdate:modelValue":I[9]||(I[9]=E=>l.dosage=E),placeholder:y(s)==="en"?"Leave blank for typical value":"اتركه فارغًا لتقدير للقيمة القياسسية"},null,8,i5),[[me,l.dosage,void 0,{number:!0}]])]),d("div",o5,[d("button",{type:"submit",class:"action-button",disabled:t.isSaving},_(t.isSaving?y(s)==="en"?"Saving...":"جاري الحفظ...":y(s)==="en"?"Save":"حفظ"),9,a5),d("button",{type:"button",onClick:I[10]||(I[10]=E=>R.$emit("close")),class:"action-button secondary"},_(y(s)==="en"?"Cancel":"إلغاء"),1)])],32)],8,zL)])):pe("",!0)]),_:1}))}},c5=vt(l5,[["__scopeId","data-v-72feaf34"]]),u5=["dir"],d5={key:0,class:"loading-state"},h5={key:1,class:"empty-state"},f5={key:2,class:"table-container"},p5={class:"history-table"},m5=["title"],g5={class:"action-buttons"},y5=["onClick","title"],v5=["onClick","title"],_5={__name:"OtherScansTable",props:{scans:{type:Array,required:!0},isLoading:{type:Boolean,default:!1}},emits:["edit","delete"],setup(t,{emit:e}){const n=Ve("currentLanguage"),r=s=>!s||!s.toDate?"N/A":s.toDate().toLocaleDateString(n.value==="ar"?"ar-EG":"en-US");return(s,i)=>(U(),j("div",{class:"history-table-wrapper",dir:y(n)==="ar"?"rtl":"ltr"},[t.isLoading?(U(),j("div",d5,[Ce(y(wt),{icon:"spinner",spin:""}),d("span",null,_(y(n)==="en"?"Loading other sources...":"جاري تحميل المصادر الأخرى..."),1)])):!t.scans||t.scans.length===0?(U(),j("div",h5,[d("p",null,_(y(n)==="en"?"No other scan records found.":"لم يتم العثور على سجلات فحوصات أخرى."),1)])):(U(),j("div",f5,[d("table",p5,[d("thead",null,[d("tr",null,[d("th",null,_(y(n)==="en"?"Place":"المكان"),1),d("th",null,_(y(n)==="en"?"Type":"النوع"),1),d("th",null,_(y(n)==="en"?"Detail":"التفاصيل"),1),d("th",null,_(y(n)==="en"?"Context":"السياق"),1),d("th",null,_(y(n)==="en"?"Date":"التاريخ"),1),d("th",null,_(y(n)==="en"?"Dosage":"الجرعة")+" (mSv)",1),d("th",null,_(y(n)==="en"?"Actions":"الإجراءات"),1)])]),d("tbody",null,[(U(!0),j(Xe,null,Jt(t.scans,o=>(U(),j("tr",{key:o.id},[d("td",null,_(o.scanPlace||"N/A"),1),d("td",null,_(o.scanType||"N/A"),1),d("td",null,_(o.scanDetail||"N/A"),1),d("td",{class:"context-cell",title:o.doctorAdditionalContext},_(o.doctorAdditionalContext||"N/A"),9,m5),d("td",null,_(r(o.date)),1),d("td",null,_(o.dosage??"N/A"),1),d("td",null,[d("div",g5,[d("button",{onClick:c=>s.$emit("edit",o),class:"action-button-icon edit-button",title:y(n)==="en"?"Edit":"تعديل"},[Ce(y(wt),{icon:"edit"})],8,y5),d("button",{onClick:c=>s.$emit("delete",o),class:"action-button-icon delete-button",title:y(n)==="en"?"Delete":"حذف"},[Ce(y(wt),{icon:"trash-alt"})],8,v5)])])]))),128))])])]))],8,u5))}},b5=vt(_5,[["__scopeId","data-v-46c6e165"]]),w5=["dir"],E5={class:"profile-section card"},T5={class:"card-header"},I5={key:0,class:"loading-state"},S5={key:1,class:"profile-details"},A5={key:0,class:"role-tag"},P5={key:1,class:"role-tag"},C5={key:0},R5={key:1},D5={key:2},k5={key:0},O5={key:0},x5={key:1},N5={class:"history-section card"},V5={class:"card-header"},M5={class:"history-section card"},L5={class:"card-header"},$5={class:"switch-link-container"},F5={__name:"ProfileView",setup(t){const e=gn(),n=Di(),r=is(),s=Ve("currentLanguage"),i=Ve("triggerMsvRecalculation"),o=Ee([]),c=Ee([]),l=Ee(!1),u=Ee(!1),h=Ee(!1),m=Ee(null),p=Ee(null),v=Ee(!1),R=Ee(null),I=Ee(null),E=Ee(!1),k=Te(()=>e.user?.uid),N=Te(()=>{if(!e.userProfile)return{displayName:e.user?.displayName||"",email:e.user?.email||""};const de=ce=>{if(!ce)return"";const Q=ce.toDate?ce.toDate():new Date(ce);return isNaN(Q)?"":Q.toISOString().split("T")[0]};return{...e.userProfile,displayName:e.user?.displayName,email:e.user?.email,birthDate:de(e.userProfile.birthDate),estimatedDueDate:de(e.userProfile.estimatedDueDate)}}),$=async()=>{k.value&&(o.value=await n.fetchScansForPatient(k.value),c.value=await n.fetchOtherScansForUser(k.value))},V=async de=>{if(!k.value)return;const ce={};de.name!==void 0&&de.name!==null&&de.name!==""&&(ce.name=de.name.trim()),de.email!==void 0&&de.email!==null&&de.email!==""&&(ce.email=de.email.trim()),de.role&&(ce.role=de.role),de.weight&&(ce.weight=de.weight),de.birthDate&&(ce.birthDate=de.birthDate),de.gender&&(ce.gender=de.gender),ce.updatedAt=new Date().toISOString(),await n.setUserProfile(k.value,ce)?(e.setUserProfile(ce),l.value=!1,i&&i()):alert(`Failed to save profile. Error: ${n.error}`)},F=async de=>{if(!k.value)return;const ce={...de,patientId:k.value};(ce.id?await n.updateScan(ce.id,ce):await n.createScan(ce))?(u.value=!1,await $(),i&&i()):alert(`Failed to save scan: ${n.error}`)},X=async()=>{if(!p.value?.id)return;await n.deleteScan(p.value.id)?(h.value=!1,await $(),i&&i()):alert(`Failed to delete scan: ${n.error}`)},P=async de=>{(de.id?await n.updateOtherScan(de.id,de):await n.createOtherScan(de))?(v.value=!1,console.log("[ProfileView] Save successful. Waiting 1 second before refetching data..."),setTimeout(async()=>{console.log("[ProfileView] Refetching data now..."),await $(),i&&i()},1e3)):alert(`Failed to save other scan: ${n.error}`)},w=async()=>{if(!I.value?.id)return;await n.deleteOtherScan(I.value.id)?(E.value=!1,await $(),i&&i()):alert(`Failed to delete other scan: ${n.error}`)},T=()=>{m.value=null,u.value=!0},C=de=>{m.value=de,u.value=!0},x=de=>{p.value=de,h.value=!0},D=()=>{R.value=null,v.value=!0},S=de=>{R.value=de,v.value=!0},xe=de=>{I.value=de,E.value=!0};return qd(()=>{Qe(()=>e.isAuthReady,de=>{de&&k.value&&$()},{immediate:!0})}),(de,ce)=>(U(),j("div",{class:"profile-page",dir:y(s)==="ar"?"rtl":"ltr"},[d("div",E5,[d("div",T5,[d("h2",null,_(y(s)==="en"?"My Profile":"ملفي الشخصي"),1),d("button",{onClick:ce[0]||(ce[0]=Q=>l.value=!0),class:"action-button"},_(y(s)==="en"?"Edit Profile":"تعديل الملف الشخصي"),1)]),y(e).isProfileLoading?(U(),j("div",I5,"Loading profile...")):N.value?(U(),j("div",S5,[d("p",null,[d("strong",null,_(y(s)==="en"?"Name:":"اﻹسم:"),1),d("span",null,_(N.value.displayName),1)]),d("p",null,[d("strong",null,_(y(s)==="en"?"Email:":"البريد اﻹلكتروني:"),1),d("span",null,_(N.value.email),1)]),d("p",null,[d("strong",null,_(y(s)==="en"?"Role":"الدور")+":",1),N.value.role==="doctor"?(U(),j("span",A5,_(y(s)==="en"?"Doctor":"طبيب"),1)):(U(),j("span",P5,_(y(s)==="en"?"Patient":"مريض"),1))]),d("p",null,[d("strong",null,_(y(s)==="en"?"Birth Date:":"تاريخ الميلاد:"),1),d("span",null,_(N.value.birthDate||"Not set"),1)]),d("p",null,[d("strong",null,_(y(s)==="en"?"Weight:":"الوزن:"),1),d("span",null,_(N.value.weight?`${N.value.weight} kg`:"Not set"),1)]),d("p",null,[d("strong",null,_(y(s)==="en"?"Gender: ":"الجنس: "),1),N.value.gender==="male"?(U(),j("span",C5,_(y(s)==="en"?"Male":"ذكر"),1)):N.value.gender==="female"?(U(),j("span",R5,_(y(s)==="en"?"Female":"أنثى"),1)):(U(),j("span",D5,"Not set"))]),N.value.gender==="female"?(U(),j("p",k5,[d("strong",null,_(y(s)==="en"?"Pregnant: ":"حامل: "),1),N.value.isPregnant?(U(),j("span",O5,_(y(s)==="en"?"Yes":"نعم")+" ("+_(y(s)==="en"?"Due:":"المتوقع:")+" "+_(N.value.estimatedDueDate)+")",1)):(U(),j("span",x5,_(y(s)==="en"?"No":"لا"),1))])):pe("",!0),d("p",null,[d("strong",null,_(y(s)==="en"?"Allergies:":"الحساسية:"),1),d("span",null,_(N.value.allergies?.join(", ")||"None"),1)]),d("p",null,[d("strong",null,_(y(s)==="en"?"Medical History:":"التاريخ الطبي:"),1),d("span",null,_(N.value.medicalHistory?.join(", ")||"None"),1)])])):pe("",!0)]),d("div",N5,[d("div",V5,[d("h2",null,_(y(s)==="en"?"Personal Scan History":"تاريخ الفحوصات الشخصية"),1),d("button",{onClick:T,class:"action-button"},_(y(s)==="en"?"Add Personal Scan":"إضافة فحص شخصي"),1)]),Ce(HL,{scans:o.value,"is-loading":y(n).loading,"is-personal-view":!0,onEdit:C,onDelete:x},null,8,["scans","is-loading"])]),d("div",M5,[d("div",L5,[d("h2",null,_(y(e).role==="doctor"?y(s)==="en"?"Occupational Exposure":"التعرض المهني":y(s)==="en"?"Other Sources":"مصادر أخرى"),1),d("button",{onClick:D,class:"action-button"},_(y(s)==="en"?"Add Other Source":"إضافة مصدر آخر"),1)]),Ce(b5,{scans:c.value,"is-loading":y(n).loading,onEdit:S,onDelete:xe},null,8,["scans","is-loading"])]),Ce(tL,{show:l.value,"profile-data":N.value,onClose:ce[1]||(ce[1]=Q=>l.value=!1),onSave:V},null,8,["show","profile-data"]),Ce(AL,{show:u.value,scan:m.value,"is-saving":y(n).loading,onClose:ce[2]||(ce[2]=Q=>u.value=!1),onSave:F},null,8,["show","scan","is-saving"]),Ce(Ll,{show:h.value,title:"Delete Scan",message:"Are you sure you want to delete this scan record?",onClose:ce[3]||(ce[3]=Q=>h.value=!1),onConfirm:X},null,8,["show"]),Ce(c5,{show:v.value,scan:R.value,"is-saving":y(n).loading,onClose:ce[4]||(ce[4]=Q=>v.value=!1),onSave:P},null,8,["show","scan","is-saving"]),Ce(Ll,{show:E.value,title:"Delete Other Scan",message:"Are you sure you want to delete this record?",onClose:ce[5]||(ce[5]=Q=>E.value=!1),onConfirm:w},null,8,["show"]),d("div",$5,[d("a",{href:"#",onClick:ce[6]||(ce[6]=tt(Q=>y(r).push("/dashboard"),["prevent"]))},_(y(s)==="en"?"Back to dashboard":"العودة إلى لوحة التحكم"),1)])],8,w5))}},U5=vt(F5,[["__scopeId","data-v-31146a8e"]]),B5=["dir"],j5={class:"recommend-main-content"},q5={class:"recommend-card"},H5={class:"form-group"},z5=["dir"],W5={class:"form-group"},G5=["dir"],K5={class:"form-group"},Y5=["dir"],X5={value:"male"},Q5={value:"female"},J5={key:0,class:"pregnancy-section"},Z5={class:"form-group checkbox-group"},e6={key:0,class:"form-group"},t6=["dir"],n6={class:"form-group"},r6={class:"form-group"},s6=["dir"],i6={class:"form-group"},o6={class:"section-title"},a6={class:"form-group"},l6=["dir"],c6={value:"",disabled:"",selected:""},u6=["value"],d6={key:1,class:"form-group"},h6=["dir"],f6={class:"form-row"},p6={class:"form-group"},m6=["dir"],g6={value:"CT"},y6={value:"X-ray"},v6={class:"form-group"},_6=["dir"],b6={value:"",disabled:"",selected:""},w6=["value"],E6={key:2,class:"form-group"},T6=["dir"],I6=["disabled"],S6={key:0,class:"message error-message"},A6={key:1,class:"prediction-result-wrapper"},P6={key:0,class:"message warning-message"},C6={style:{"white-space":"pre-wrap"}},R6={class:"prediction-result"},D6={key:0,class:"msv-details-container"},k6={class:"msv-details"},O6={class:"result-text"},x6={style:{"white-space":"pre-wrap"}},N6={class:"switch-link-container"},V6={__name:"RecommendGuestView",setup(t){const e=is();Dv();const n=gn(),r=Ve("currentLanguage"),s=Ve("doseLimit");Te(()=>!n.user);const i=Ee({weight:null,birthDate:"",gender:"male",medicalHistory:"",previousYearDose:0,isPregnant:!1,estimatedDueDate:"",scanType:"CT",scanPlace:"",otherScanPlaceDescription:"",subScanType:"",otherScanDescription:"",numberOfScans:1,currentSymptoms:""}),o={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},c=[{value:"head",en:"Head",ar:"الرأس"},{value:"neck",en:"Neck",ar:"الرقبة"},{value:"chest",en:"Chest",ar:"الصدر"},{value:"abdomen",en:"Abdomen",ar:"البطن"},{value:"pelvis",en:"Pelvis",ar:"الحوض"},{value:"spine",en:"Spine",ar:"العمود الفقري"},{value:"upper_extremity",en:"Upper Extremity",ar:"الطرف العلوي"},{value:"lower_extremity",en:"Lower Extremity",ar:"الطرف السفلي"},{value:"other",en:"Other",ar:"أخرى"}],l={patient:{CT:{"Abdomen & Pelvis":14,"Brain with contrast":2,"Angiography CTA":12,Urography:8,Enterography:8,default:6},"X-ray":{"Barium Enema":7,"IV Urogram (IVP)":2.5,HSG:1.5,VCUG:1,default:.5}}},u=Te(()=>o[i.value.scanType]||[]),h=Te(()=>i.value.subScanType==="Other"),m=Te(()=>i.value.scanPlace==="other"),p=Ee(!1),v=Ee(""),R=Ee(null),I=Te(()=>{const $=k("patient");return $===null?null:(parseFloat(i.value.previousYearDose)||0)+$}),E=Te(()=>I.value===null?!1:I.value>s.value);function k($){try{const V=i.value.subScanType==="Other"?"default":i.value.subScanType,F=l[$];if(!F)return null;const X=F[i.value.scanType];if(!X)return null;let P=X[V]??X.default;return P===void 0?null:(i.value.scanType==="X-ray"&&(P=P*(i.value.numberOfScans||1)),P)}catch{return null}}Qe(()=>i.value.gender,$=>{$!=="female"&&(i.value.isPregnant=!1,i.value.estimatedDueDate="")}),Qe(()=>i.value.scanType,()=>{i.value.subScanType="",i.value.otherScanDescription="",i.value.numberOfScans=1});async function N(){if(p.value=!0,v.value="",R.value=null,!i.value.birthDate){v.value=r.value==="en"?"Date of Birth is required.":"تاريخ الميلاد مطلوب.",p.value=!1;return}const $=i.value.scanPlace&&i.value.scanType&&i.value.subScanType;let V=null;if($&&(V=k("patient"),V===null)){v.value=r.value==="en"?"Unable to estimate dose for the selected scan.":"تعذر تقدير الجرعة للفحص المحدد.",p.value=!1;return}const F=r.value,X=new Date().getFullYear()-new Date(i.value.birthDate).getFullYear();I.value!==null&&I.value.toFixed(3);const P=E.value?F==="en"?"The total estimated radiation dose you have received this year is above the recommended safety limit.":"الجرعة الكلية المقدرة التي تلقيتها هذا العام تفوق الحد الأقصى الموصى به.":F==="en"?"Your estimated radiation exposure is within safe limits.":"تعرضك المقدر للإشعاع ضمن الحدود الآمنة.",w=$?`${i.value.scanType} scan of the ${m.value?i.value.otherScanPlaceDescription:i.value.scanPlace}, protocol: ${h.value?i.value.otherScanDescription:i.value.subScanType}`:"No specific scan information provided.",T=`
You are a friendly medical radiation advisor helping laypersons understand their radiation exposure from medical scans.

Please provide a clear, simple summary of the radiation dose based on this information:
- Patient Age: ${X}
- Gender: ${i.value.gender==="male"?F==="en"?"Male":"ذكر":F==="en"?"Female":"أنثى"}
- Pregnant: ${i.value.isPregnant?F==="en"?"Yes, due around "+i.value.estimatedDueDate:"نعم، متوقعه حول "+i.value.estimatedDueDate:F==="en"?"No":"لا"}
- Weight: ${i.value.weight||"Not provided"} kg
- Relevant Medical History: ${i.value.medicalHistory||"None"}
- Estimated Previous Year Radiation Dose: ${i.value.previousYearDose||0} mSv
- Proposed Scan: ${w}
- Current Symptoms: ${i.value.currentSymptoms||"None"}
- Estimated Dose from Scan: ${$?V.toFixed(3)+" mSv":"N/A"}

Please clearly tell the user their total estimated radiation dose this year, whether this is safe or high (use the info below), and give simple advice on what they can do next, avoiding medical jargon or complex terms.

Advice:
${P}

Note: Always consult your healthcare provider for personalized medical decisions.
  `,C={type:"OBJECT",properties:{recommendationText:{type:"STRING"},Warning:{type:"STRING"}},required:["recommendationText","Warning"]};try{const xe=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC8npsehZb6bm1r7lOc4oofjwkrldVINvY",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:T}]}],generationConfig:{responseMimeType:"application/json",responseSchema:C}})});if(!xe.ok)throw new Error(`API error: ${xe.statusText}`);const de=await xe.json(),ce=JSON.parse(de.candidates[0].content.parts[0].text);R.value={...ce,patientCalculatedMsv:I.value}}catch(x){console.error("AI generation failed:",x),R.value={recommendationText:F==="en"?"Unable to get AI advice at the moment. Please consult your doctor.":"غير قادر على الحصول على نصيحة الذكاء الاصطناعي الآن. يرجى استشارة طبيبك.",Warning:F==="en"?"Review your inputs carefully.":"يرجى مراجعة مدخلاتك بعناية.",patientCalculatedMsv:I.value}}finally{p.value=!1}}return($,V)=>(U(),j("div",{class:"recommend-page",dir:y(r)==="ar"?"rtl":"ltr"},[d("main",j5,[d("section",q5,[d("h2",null,_(y(r)==="en"?"Medical Scan Advisor for Guests":"مستشار الفحص الطبي للضيوف"),1),d("p",null,_(y(r)==="en"?"Fill in your details to get simple AI-powered advice. Scan details are optional.":"املأ تفاصيلك للحصول على نصيحة بسيطة مدعومة بالذكاء الاصطناعي. تفاصيل الفحص اختيارية."),1),d("form",{onSubmit:tt(N,["prevent"]),class:"recommend-form",novalidate:""},[d("div",H5,[d("label",null,_(y(r)==="en"?"Weight (kg)":"الوزن (كجم)"),1),ee(d("input",{type:"number",step:"0.1","onUpdate:modelValue":V[0]||(V[0]=F=>i.value.weight=F),placeholder:"e.g. 70.5",dir:y(r)==="ar"?"rtl":"ltr",min:"1"},null,8,z5),[[me,i.value.weight]])]),d("div",W5,[d("label",null,[at(_(y(r)==="en"?"Date of Birth":"تاريخ الميلاد")+" ",1),V[14]||(V[14]=d("span",{class:"required-indicator"},"*",-1))]),ee(d("input",{type:"date","onUpdate:modelValue":V[1]||(V[1]=F=>i.value.birthDate=F),required:"",dir:y(r)==="ar"?"rtl":"ltr"},null,8,G5),[[me,i.value.birthDate]])]),d("div",K5,[d("label",null,[at(_(y(r)==="en"?"Gender":"الجنس")+" ",1),V[15]||(V[15]=d("span",{class:"required-indicator"},"*",-1))]),ee(d("select",{"onUpdate:modelValue":V[2]||(V[2]=F=>i.value.gender=F),required:"",dir:y(r)==="ar"?"rtl":"ltr"},[d("option",X5,_(y(r)==="en"?"Male":"ذكر"),1),d("option",Q5,_(y(r)==="en"?"Female":"أنثى"),1)],8,Y5),[[lt,i.value.gender]])]),i.value.gender==="female"?(U(),j("div",J5,[d("div",Z5,[d("label",null,[ee(d("input",{type:"checkbox","onUpdate:modelValue":V[3]||(V[3]=F=>i.value.isPregnant=F)},null,512),[[Ko,i.value.isPregnant]]),d("span",null,_(y(r)==="en"?"Is Pregnant?":"هل هي حامل؟"),1)])]),i.value.isPregnant?(U(),j("div",e6,[d("label",null,[at(_(y(r)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع")+" ",1),V[16]||(V[16]=d("span",{class:"required-indicator"},"*",-1))]),ee(d("input",{type:"date","onUpdate:modelValue":V[4]||(V[4]=F=>i.value.estimatedDueDate=F),required:"",dir:y(r)==="ar"?"rtl":"ltr"},null,8,t6),[[me,i.value.estimatedDueDate]])])):pe("",!0)])):pe("",!0),d("div",n6,[d("label",null,_(y(r)==="en"?"Relevant Medical History (optional)":"التاريخ الطبي ذو الصلة (اختياري)"),1),ee(d("textarea",{"onUpdate:modelValue":V[5]||(V[5]=F=>i.value.medicalHistory=F),rows:"3"},null,512),[[me,i.value.medicalHistory]])]),d("div",r6,[d("label",null,_(y(r)==="en"?"Estimated Radiation Exposure in Past Year (mSv) - optional":"الجرعة المقدرة للإشعاع في السنة الماضية (mSv) - اختياري"),1),ee(d("input",{type:"number",step:"0.001",min:"0","onUpdate:modelValue":V[6]||(V[6]=F=>i.value.previousYearDose=F),placeholder:"e.g. 2.5",dir:y(r)==="ar"?"rtl":"ltr"},null,8,s6),[[me,i.value.previousYearDose,void 0,{number:!0}]])]),d("div",i6,[d("label",null,_(y(r)==="en"?"Current Symptoms (optional)":"الأعراض الحالية (اختياري)"),1),ee(d("textarea",{"onUpdate:modelValue":V[7]||(V[7]=F=>i.value.currentSymptoms=F),rows:"3"},null,512),[[me,i.value.currentSymptoms]])]),d("h3",o6,_(y(r)==="en"?"Scan to Consider (optional)":"الفحص المقترح (اختياري)"),1),d("div",a6,[d("label",null,_(y(r)==="en"?"Place of Scan":"مكان الفحص"),1),ee(d("select",{"onUpdate:modelValue":V[8]||(V[8]=F=>i.value.scanPlace=F),dir:y(r)==="ar"?"rtl":"ltr"},[d("option",c6,_(y(r)==="en"?"Select...":"اختر..."),1),(U(),j(Xe,null,Jt(c,F=>d("option",{key:F.value,value:F.value},_(y(r)==="en"?F.en:F.ar),9,u6)),64))],8,l6),[[lt,i.value.scanPlace]])]),m.value?(U(),j("div",d6,[d("label",null,_(y(r)==="en"?"Please specify other place":"يرجى تحديد المكان الآخر"),1),ee(d("input",{type:"text","onUpdate:modelValue":V[9]||(V[9]=F=>i.value.otherScanPlaceDescription=F),dir:y(r)==="ar"?"rtl":"ltr"},null,8,h6),[[me,i.value.otherScanPlaceDescription]])])):pe("",!0),d("div",f6,[d("div",p6,[d("label",null,_(y(r)==="en"?"Scan Category":"فئة الفحص"),1),ee(d("select",{"onUpdate:modelValue":V[10]||(V[10]=F=>i.value.scanType=F),dir:y(r)==="ar"?"rtl":"ltr"},[d("option",g6,_(y(r)==="en"?"CT Scan":"الأشعة المقطعية"),1),d("option",y6,_(y(r)==="en"?"X-ray":"الأشعة السينية"),1)],8,m6),[[lt,i.value.scanType]])]),d("div",v6,[d("label",null,_(y(r)==="en"?"Scan Protocol":"بروتوكول الفحص"),1),ee(d("select",{"onUpdate:modelValue":V[11]||(V[11]=F=>i.value.subScanType=F),dir:y(r)==="ar"?"rtl":"ltr"},[d("option",b6,_(y(r)==="en"?"Select...":"اختر..."),1),(U(!0),j(Xe,null,Jt(u.value,F=>(U(),j("option",{key:F.value,value:F.value},_(y(r)==="en"?F.en:F.ar),9,w6))),128))],8,_6),[[lt,i.value.subScanType]])])]),h.value?(U(),j("div",E6,[d("label",null,_(y(r)==="en"?"Please specify scan protocol":"يرجى تحديد بروتوكول الفحص"),1),ee(d("input",{type:"text","onUpdate:modelValue":V[12]||(V[12]=F=>i.value.otherScanDescription=F),dir:y(r)==="ar"?"rtl":"ltr"},null,8,T6),[[me,i.value.otherScanDescription]])])):pe("",!0),d("button",{type:"submit",class:"action-button",disabled:p.value},_(p.value?y(r)==="en"?"Getting Advice...":"جاري الحصول على النصيحة...":y(r)==="en"?"Get Advice":"الحصول على نصيحة"),9,I6)],32),v.value?(U(),j("div",S6,_(v.value),1)):pe("",!0),R.value?(U(),j("div",A6,[R.value.Warning?(U(),j("div",P6,[d("h4",null,_(y(r)==="en"?"Important Note":"ملاحظة هامة"),1),d("p",C6,_(R.value.Warning),1)])):pe("",!0),d("div",R6,[R.value.patientCalculatedMsv!==null?(U(),j("div",D6,[d("div",k6,[d("h4",null,_(y(r)==="en"?"Total Estimated Dose This Year":"الجرعة المقدرة الكلية لهذا العام"),1),d("p",null,[d("strong",null,_(R.value.patientCalculatedMsv.toFixed(3))+" mSv",1)])]),d("div",{class:zr(["msv-details overdose-status",{overdosed:E.value}])},[d("h4",null,_(y(r)==="en"?"Dose Safety Status":"حالة أمان الجرعة"),1),d("p",null,_(E.value?y(r)==="en"?"Above recommended safety limit! Proceed with caution.":"فوق الحد الآمن الموصى به! يرجى توخي الحذر.":y(r)==="en"?"Within safe limits.":"ضمن الحدود الآمنة."),1)],2)])):pe("",!0),d("div",O6,[d("h4",null,_(y(r)==="en"?"AI-Powered Advice":"نصيحة مدعومة بالذكاء الاصطناعي"),1),d("p",x6,_(R.value.recommendationText),1)])])])):pe("",!0),d("p",N6,[d("a",{href:"#",onClick:V[13]||(V[13]=tt(F=>y(e).push("/signin"),["prevent"]))},_(y(r)==="en"?"Back to Sign In":"العودة لتسجيل الدخول"),1)])])])],8,B5))}},M6=vt(V6,[["__scopeId","data-v-5f31265c"]]),$l=zT({history:wT("/X-ray/"),routes:[{path:"/",name:"signup",component:ok},{path:"/signin",name:"signin",component:Rk},{path:"/dashboard",name:"dashboard",component:bM,meta:{requiresAuth:!0}},{path:"/recommend/:patientId?",name:"recommend",component:UO,meta:{requiresAuth:!0}},{path:"/recommend/guest",name:"recommendGuest",component:M6,meta:{requiresAuth:!1}},{path:"/patients",name:"patients",component:q4,meta:{requiresAuth:!0}},{path:"/profile",name:"profile",component:U5,meta:{requiresAuth:!0}},{path:"/resetpassword",name:"resetpassword",component:MM},{path:"/__/auth/handler",name:"firebaseAuthHandler",component:{render(){return ci("div")}},beforeEnter:(t,e,n)=>{n()}},{path:"/:catchAll(.*)",redirect:"/dashboard"},{path:"/__/auth/iframe",name:"firebaseAuthIframeHandler",component:{render(){return ci("div")}},beforeEnter:(t,e,n)=>{n()}}]});$l.beforeEach(async(t,e,n)=>{const r=gn();r.isAuthReady||await new Promise(c=>{const l=r.$subscribe((u,h)=>{h.isAuthReady&&(l(),c())})});const s=!!r.user;if(t.path.startsWith("/__/auth/handler")||t.path.startsWith("/__/auth/iframe")){n();return}console.log(`Navigating to: ${t.path} (name: ${t.name})`),console.log(`isAuthenticated: ${s}`);const o=["signup","signin","resetpassword","newpassword","recommendGuest"].includes(t.name);s?o?(console.log(`Redirecting authenticated user from ${t.name} to /dashboard.`),n("/dashboard")):(console.log(`Allowing authenticated access to ${t.path}.`),n()):o?(console.log(`Allowing unauthenticated access to ${t.name}.`),n()):(console.log(`Redirecting unauthenticated user from ${t.path} (requires auth) to /signin.`),n("/signin"))});var L6="firebase",$6="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Br(L6,$6,"app");/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const F6={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]},U6=F6,B6={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},j6=B6,q6={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},H6=q6,z6={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},W6={prefix:"fas",iconName:"file-medical",icon:[384,512,[],"f477","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM160 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z"]},G6={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},K6={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};BN.add(z6,j6,U6,W6,G6,K6,H6);const Y6={apiKey:"AIzaSyDA9buCeJRQzFDnbvwjYX1zyddEUpFw1k8",authDomain:"x-ray-calculator.firebaseapp.com",projectId:"x-ray-calculator",storageBucket:"x-ray-calculator.firebasestorage.app",messagingSenderId:"27717321225",appId:"1:27717321225:web:19367fffd750339ea3aed8",measurementId:"G-DV1QF183J8"},Wb=Wv(Y6),tf=nC(Wb),X6=Js(Wb),vr=jE(M2),Q6=GT();vr.use(Q6);vr.use($l);vr.component("font-awesome-icon",wt);const Pd=Ee(null),Gb=Ee(!1),ro=gn();ro.initAuth(tf);y_(tf,t=>{if(Pd.value=t?t.uid:null,ro.user=t,ro.isAuthenticated=!!t,Gb.value=!0,t){const e=$l.currentRoute.value.name;["signup","signin","resetpassword","newpassword"].includes(e)&&$l.push("/dashboard")}else Pd.value=null,ro.user=null,ro.isAuthenticated=!1});vr.provide("db",X6);vr.provide("auth",tf);vr.provide("currentUserId",Pd);vr.provide("isAuthReady",Gb);vr.provide("appId",typeof __app_id<"u"?__app_id:"default-app-id");vr.mount("#app");
