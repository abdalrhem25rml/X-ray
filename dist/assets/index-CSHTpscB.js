(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ch(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const We={},Xs=[],kn=()=>{},yb=()=>!1,Vl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Rh=t=>t.startsWith("onUpdate:"),gt=Object.assign,Dh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},_b=Object.prototype.hasOwnProperty,He=(t,e)=>_b.call(t,e),he=Array.isArray,Js=t=>Ho(t)==="[object Map]",_i=t=>Ho(t)==="[object Set]",Qf=t=>Ho(t)==="[object Date]",Ee=t=>typeof t=="function",st=t=>typeof t=="string",Ln=t=>typeof t=="symbol",Ge=t=>t!==null&&typeof t=="object",iy=t=>(Ge(t)||Ee(t))&&Ee(t.then)&&Ee(t.catch),oy=Object.prototype.toString,Ho=t=>oy.call(t),vb=t=>Ho(t).slice(8,-1),ay=t=>Ho(t)==="[object Object]",kh=t=>st(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,no=Ch(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ml=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Eb=/-(\w)/g,un=Ml(t=>t.replace(Eb,(e,n)=>n?n.toUpperCase():"")),wb=/\B([A-Z])/g,Os=Ml(t=>t.replace(wb,"-$1").toLowerCase()),Ll=Ml(t=>t.charAt(0).toUpperCase()+t.slice(1)),Uc=Ml(t=>t?`on${Ll(t)}`:""),Lr=(t,e)=>!Object.is(t,e),Ua=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},wu=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},nl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},bb=t=>{const e=st(t)?Number(t):NaN;return isNaN(e)?t:e};let Xf;const Fl=()=>Xf||(Xf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $l(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=st(r)?Sb(r):$l(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(st(t)||Ge(t))return t}const Tb=/;(?![^(]*\))/g,Ib=/:([^]+)/,Ab=/\/\*[^]*?\*\//g;function Sb(t){const e={};return t.replace(Ab,"").split(Tb).forEach(n=>{if(n){const r=n.split(Ib);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ts(t){let e="";if(st(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const r=Ts(t[n]);r&&(e+=r+" ")}else if(Ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Pb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cb=Ch(Pb);function ly(t){return!!t||t===""}function Rb(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=qo(t[r],e[r]);return n}function qo(t,e){if(t===e)return!0;let n=Qf(t),r=Qf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ln(t),r=Ln(e),n||r)return t===e;if(n=he(t),r=he(e),n||r)return n&&r?Rb(t,e):!1;if(n=Ge(t),r=Ge(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!qo(t[o],e[o]))return!1}}return String(t)===String(e)}function Oh(t,e){return t.findIndex(n=>qo(n,e))}const cy=t=>!!(t&&t.__v_isRef===!0),R=t=>st(t)?t:t==null?"":he(t)||Ge(t)&&(t.toString===oy||!Ee(t.toString))?cy(t)?R(t.value):JSON.stringify(t,uy,2):String(t),uy=(t,e)=>cy(e)?uy(t,e.value):Js(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Bc(r,i)+" =>"]=s,n),{})}:_i(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Bc(n))}:Ln(e)?Bc(e):Ge(e)&&!he(e)&&!ay(e)?String(e):e,Bc=(t,e="")=>{var n;return Ln(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dt;class hy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Dt,!e&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}}on(){++this._on===1&&(this.prevScope=Dt,Dt=this)}off(){this._on>0&&--this._on===0&&(Dt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function dy(t){return new hy(t)}function fy(){return Dt}function Db(t,e=!1){Dt&&Dt.cleanups.push(t)}let Ke;const jc=new WeakSet;class py{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Dt&&Dt.active&&Dt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,jc.has(this)&&(jc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||gy(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Jf(this),yy(this);const e=Ke,n=gn;Ke=this,gn=!0;try{return this.fn()}finally{_y(this),Ke=e,gn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vh(e);this.deps=this.depsTail=void 0,Jf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?jc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bu(this)&&this.run()}get dirty(){return bu(this)}}let my=0,ro,so;function gy(t,e=!1){if(t.flags|=8,e){t.next=so,so=t;return}t.next=ro,ro=t}function xh(){my++}function Nh(){if(--my>0)return;if(so){let e=so;for(so=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ro;){let e=ro;for(ro=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function yy(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function _y(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Vh(r),kb(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function bu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(vy(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function vy(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===bo)||(t.globalVersion=bo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!bu(t))))return;t.flags|=2;const e=t.dep,n=Ke,r=gn;Ke=t,gn=!0;try{yy(t);const s=t.fn(t._value);(e.version===0||Lr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ke=n,gn=r,_y(t),t.flags&=-3}}function Vh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Vh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function kb(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let gn=!0;const Ey=[];function rr(){Ey.push(gn),gn=!1}function sr(){const t=Ey.pop();gn=t===void 0?!0:t}function Jf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ke;Ke=void 0;try{e()}finally{Ke=n}}}let bo=0;class Ob{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Mh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ke||!gn||Ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ke)n=this.activeLink=new Ob(Ke,this),Ke.deps?(n.prevDep=Ke.depsTail,Ke.depsTail.nextDep=n,Ke.depsTail=n):Ke.deps=Ke.depsTail=n,wy(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ke.depsTail,n.nextDep=void 0,Ke.depsTail.nextDep=n,Ke.depsTail=n,Ke.deps===n&&(Ke.deps=r)}return n}trigger(e){this.version++,bo++,this.notify(e)}notify(e){xh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Nh()}}}function wy(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)wy(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const rl=new WeakMap,Es=Symbol(""),Tu=Symbol(""),To=Symbol("");function xt(t,e,n){if(gn&&Ke){let r=rl.get(t);r||rl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Mh),s.map=r,s.key=n),s.track()}}function Kn(t,e,n,r,s,i){const o=rl.get(t);if(!o){bo++;return}const l=c=>{c&&c.trigger()};if(xh(),e==="clear")o.forEach(l);else{const c=he(t),u=c&&kh(n);if(c&&n==="length"){const h=Number(r);o.forEach((f,p)=>{(p==="length"||p===To||!Ln(p)&&p>=h)&&l(f)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(To)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Es)),Js(t)&&l(o.get(Tu)));break;case"delete":c||(l(o.get(Es)),Js(t)&&l(o.get(Tu)));break;case"set":Js(t)&&l(o.get(Es));break}}Nh()}function xb(t,e){const n=rl.get(t);return n&&n.get(e)}function js(t){const e=Le(t);return e===t?e:(xt(e,"iterate",To),ln(t)?e:e.map(bt))}function Ul(t){return xt(t=Le(t),"iterate",To),t}const Nb={__proto__:null,[Symbol.iterator](){return Hc(this,Symbol.iterator,bt)},concat(...t){return js(this).concat(...t.map(e=>he(e)?js(e):e))},entries(){return Hc(this,"entries",t=>(t[1]=bt(t[1]),t))},every(t,e){return qn(this,"every",t,e,void 0,arguments)},filter(t,e){return qn(this,"filter",t,e,n=>n.map(bt),arguments)},find(t,e){return qn(this,"find",t,e,bt,arguments)},findIndex(t,e){return qn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return qn(this,"findLast",t,e,bt,arguments)},findLastIndex(t,e){return qn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return qn(this,"forEach",t,e,void 0,arguments)},includes(...t){return qc(this,"includes",t)},indexOf(...t){return qc(this,"indexOf",t)},join(t){return js(this).join(t)},lastIndexOf(...t){return qc(this,"lastIndexOf",t)},map(t,e){return qn(this,"map",t,e,void 0,arguments)},pop(){return ji(this,"pop")},push(...t){return ji(this,"push",t)},reduce(t,...e){return Zf(this,"reduce",t,e)},reduceRight(t,...e){return Zf(this,"reduceRight",t,e)},shift(){return ji(this,"shift")},some(t,e){return qn(this,"some",t,e,void 0,arguments)},splice(...t){return ji(this,"splice",t)},toReversed(){return js(this).toReversed()},toSorted(t){return js(this).toSorted(t)},toSpliced(...t){return js(this).toSpliced(...t)},unshift(...t){return ji(this,"unshift",t)},values(){return Hc(this,"values",bt)}};function Hc(t,e,n){const r=Ul(t),s=r[e]();return r!==t&&!ln(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Vb=Array.prototype;function qn(t,e,n,r,s,i){const o=Ul(t),l=o!==t&&!ln(t),c=o[e];if(c!==Vb[e]){const f=c.apply(t,i);return l?bt(f):f}let u=n;o!==t&&(l?u=function(f,p){return n.call(this,bt(f),p,t)}:n.length>2&&(u=function(f,p){return n.call(this,f,p,t)}));const h=c.call(o,u,r);return l&&s?s(h):h}function Zf(t,e,n,r){const s=Ul(t);let i=n;return s!==t&&(ln(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,bt(l),c,t)}),s[e](i,...r)}function qc(t,e,n){const r=Le(t);xt(r,"iterate",To);const s=r[e](...n);return(s===-1||s===!1)&&$h(n[0])?(n[0]=Le(n[0]),r[e](...n)):s}function ji(t,e,n=[]){rr(),xh();const r=Le(t)[e].apply(t,n);return Nh(),sr(),r}const Mb=Ch("__proto__,__v_isRef,__isVue"),by=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ln));function Lb(t){Ln(t)||(t=String(t));const e=Le(this);return xt(e,"has",t),e.hasOwnProperty(t)}class Ty{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Gb:Py:i?Sy:Ay).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=he(e);if(!s){let c;if(o&&(c=Nb[n]))return c;if(n==="hasOwnProperty")return Lb}const l=Reflect.get(e,n,lt(e)?e:r);return(Ln(n)?by.has(n):Mb(n))||(s||xt(e,"get",n),i)?l:lt(l)?o&&kh(n)?l:l.value:Ge(l)?s?Ry(l):hr(l):l}}class Iy extends Ty{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=qr(i);if(!ln(r)&&!qr(r)&&(i=Le(i),r=Le(r)),!he(e)&&lt(i)&&!lt(r))return c?!1:(i.value=r,!0)}const o=he(e)&&kh(n)?Number(n)<e.length:He(e,n),l=Reflect.set(e,n,r,lt(e)?e:s);return e===Le(s)&&(o?Lr(r,i)&&Kn(e,"set",n,r):Kn(e,"add",n,r)),l}deleteProperty(e,n){const r=He(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Kn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Ln(n)||!by.has(n))&&xt(e,"has",n),r}ownKeys(e){return xt(e,"iterate",he(e)?"length":Es),Reflect.ownKeys(e)}}class Fb extends Ty{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const $b=new Iy,Ub=new Fb,Bb=new Iy(!0);const Iu=t=>t,Sa=t=>Reflect.getPrototypeOf(t);function jb(t,e,n){return function(...r){const s=this.__v_raw,i=Le(s),o=Js(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),h=n?Iu:e?sl:bt;return!e&&xt(i,"iterate",c?Tu:Es),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:l?[h(f[0]),h(f[1])]:h(f),done:p}},[Symbol.iterator](){return this}}}}function Pa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Hb(t,e){const n={get(s){const i=this.__v_raw,o=Le(i),l=Le(s);t||(Lr(s,l)&&xt(o,"get",s),xt(o,"get",l));const{has:c}=Sa(o),u=e?Iu:t?sl:bt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&xt(Le(s),"iterate",Es),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Le(i),l=Le(s);return t||(Lr(s,l)&&xt(o,"has",s),xt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Le(l),u=e?Iu:t?sl:bt;return!t&&xt(c,"iterate",Es),l.forEach((h,f)=>s.call(i,u(h),u(f),o))}};return gt(n,t?{add:Pa("add"),set:Pa("set"),delete:Pa("delete"),clear:Pa("clear")}:{add(s){!e&&!ln(s)&&!qr(s)&&(s=Le(s));const i=Le(this);return Sa(i).has.call(i,s)||(i.add(s),Kn(i,"add",s,s)),this},set(s,i){!e&&!ln(i)&&!qr(i)&&(i=Le(i));const o=Le(this),{has:l,get:c}=Sa(o);let u=l.call(o,s);u||(s=Le(s),u=l.call(o,s));const h=c.call(o,s);return o.set(s,i),u?Lr(i,h)&&Kn(o,"set",s,i):Kn(o,"add",s,i),this},delete(s){const i=Le(this),{has:o,get:l}=Sa(i);let c=o.call(i,s);c||(s=Le(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Kn(i,"delete",s,void 0),u},clear(){const s=Le(this),i=s.size!==0,o=s.clear();return i&&Kn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=jb(s,t,e)}),n}function Lh(t,e){const n=Hb(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(He(n,s)&&s in r?n:r,s,i)}const qb={get:Lh(!1,!1)},zb={get:Lh(!1,!0)},Wb={get:Lh(!0,!1)};const Ay=new WeakMap,Sy=new WeakMap,Py=new WeakMap,Gb=new WeakMap;function Kb(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yb(t){return t.__v_skip||!Object.isExtensible(t)?0:Kb(vb(t))}function hr(t){return qr(t)?t:Fh(t,!1,$b,qb,Ay)}function Cy(t){return Fh(t,!1,Bb,zb,Sy)}function Ry(t){return Fh(t,!0,Ub,Wb,Py)}function Fh(t,e,n,r,s){if(!Ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Yb(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Fr(t){return qr(t)?Fr(t.__v_raw):!!(t&&t.__v_isReactive)}function qr(t){return!!(t&&t.__v_isReadonly)}function ln(t){return!!(t&&t.__v_isShallow)}function $h(t){return t?!!t.__v_raw:!1}function Le(t){const e=t&&t.__v_raw;return e?Le(e):t}function Uh(t){return!He(t,"__v_skip")&&Object.isExtensible(t)&&wu(t,"__v_skip",!0),t}const bt=t=>Ge(t)?hr(t):t,sl=t=>Ge(t)?Ry(t):t;function lt(t){return t?t.__v_isRef===!0:!1}function Ae(t){return Dy(t,!1)}function Qb(t){return Dy(t,!0)}function Dy(t,e){return lt(t)?t:new Xb(t,e)}class Xb{constructor(e,n){this.dep=new Mh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Le(e),this._value=n?e:bt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||ln(e)||qr(e);e=r?e:Le(e),Lr(e,n)&&(this._rawValue=e,this._value=r?e:bt(e),this.dep.trigger())}}function _(t){return lt(t)?t.value:t}const Jb={get:(t,e,n)=>e==="__v_raw"?t:_(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return lt(s)&&!lt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ky(t){return Fr(t)?t:new Proxy(t,Jb)}function Zb(t){const e=he(t)?new Array(t.length):{};for(const n in t)e[n]=t1(t,n);return e}class e1{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return xb(Le(this._object),this._key)}}function t1(t,e,n){const r=t[e];return lt(r)?r:new e1(t,e,n)}class n1{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Mh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=bo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ke!==this)return gy(this,!0),!0}get value(){const e=this.dep.track();return vy(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function r1(t,e,n=!1){let r,s;return Ee(t)?r=t:(r=t.get,s=t.set),new n1(r,s,n)}const Ca={},il=new WeakMap;let ps;function s1(t,e=!1,n=ps){if(n){let r=il.get(n);r||il.set(n,r=[]),r.push(t)}}function i1(t,e,n=We){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=U=>s?U:ln(U)||s===!1||s===0?Yn(U,1):Yn(U);let h,f,p,y,C=!1,O=!1;if(lt(t)?(f=()=>t.value,C=ln(t)):Fr(t)?(f=()=>u(t),C=!0):he(t)?(O=!0,C=t.some(U=>Fr(U)||ln(U)),f=()=>t.map(U=>{if(lt(U))return U.value;if(Fr(U))return u(U);if(Ee(U))return c?c(U,2):U()})):Ee(t)?e?f=c?()=>c(t,2):t:f=()=>{if(p){rr();try{p()}finally{sr()}}const U=ps;ps=h;try{return c?c(t,3,[y]):t(y)}finally{ps=U}}:f=kn,e&&s){const U=f,F=s===!0?1/0:s;f=()=>Yn(U(),F)}const M=fy(),x=()=>{h.stop(),M&&M.active&&Dh(M.effects,h)};if(i&&e){const U=e;e=(...F)=>{U(...F),x()}}let k=O?new Array(t.length).fill(Ca):Ca;const L=U=>{if(!(!(h.flags&1)||!h.dirty&&!U))if(e){const F=h.run();if(s||C||(O?F.some((W,A)=>Lr(W,k[A])):Lr(F,k))){p&&p();const W=ps;ps=h;try{const A=[F,k===Ca?void 0:O&&k[0]===Ca?[]:k,y];k=F,c?c(e,3,A):e(...A)}finally{ps=W}}}else h.run()};return l&&l(L),h=new py(f),h.scheduler=o?()=>o(L,!1):L,y=U=>s1(U,!1,h),p=h.onStop=()=>{const U=il.get(h);if(U){if(c)c(U,4);else for(const F of U)F();il.delete(h)}},e?r?L(!0):k=h.run():o?o(L.bind(null,!0),!0):h.run(),x.pause=h.pause.bind(h),x.resume=h.resume.bind(h),x.stop=x,x}function Yn(t,e=1/0,n){if(e<=0||!Ge(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,lt(t))Yn(t.value,e,n);else if(he(t))for(let r=0;r<t.length;r++)Yn(t[r],e,n);else if(_i(t)||Js(t))t.forEach(r=>{Yn(r,e,n)});else if(ay(t)){for(const r in t)Yn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Yn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zo(t,e,n,r){try{return r?t(...r):t()}catch(s){Bl(s,e,n)}}function _n(t,e,n,r){if(Ee(t)){const s=zo(t,e,n,r);return s&&iy(s)&&s.catch(i=>{Bl(i,e,n)}),s}if(he(t)){const s=[];for(let i=0;i<t.length;i++)s.push(_n(t[i],e,n,r));return s}}function Bl(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||We;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const h=l.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,c,u)===!1)return}l=l.parent}if(i){rr(),zo(i,null,10,[t,c,u]),sr();return}}o1(t,n,s,r,o)}function o1(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ut=[];let In=-1;const Zs=[];let Cr=null,qs=0;const Oy=Promise.resolve();let ol=null;function jl(t){const e=ol||Oy;return t?e.then(this?t.bind(this):t):e}function a1(t){let e=In+1,n=Ut.length;for(;e<n;){const r=e+n>>>1,s=Ut[r],i=Io(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Bh(t){if(!(t.flags&1)){const e=Io(t),n=Ut[Ut.length-1];!n||!(t.flags&2)&&e>=Io(n)?Ut.push(t):Ut.splice(a1(e),0,t),t.flags|=1,xy()}}function xy(){ol||(ol=Oy.then(Vy))}function l1(t){he(t)?Zs.push(...t):Cr&&t.id===-1?Cr.splice(qs+1,0,t):t.flags&1||(Zs.push(t),t.flags|=1),xy()}function ep(t,e,n=In+1){for(;n<Ut.length;n++){const r=Ut[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ut.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ny(t){if(Zs.length){const e=[...new Set(Zs)].sort((n,r)=>Io(n)-Io(r));if(Zs.length=0,Cr){Cr.push(...e);return}for(Cr=e,qs=0;qs<Cr.length;qs++){const n=Cr[qs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Cr=null,qs=0}}const Io=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Vy(t){try{for(In=0;In<Ut.length;In++){const e=Ut[In];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),zo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;In<Ut.length;In++){const e=Ut[In];e&&(e.flags&=-2)}In=-1,Ut.length=0,Ny(),ol=null,(Ut.length||Zs.length)&&Vy()}}let jt=null,My=null;function al(t){const e=jt;return jt=t,My=t&&t.type.__scopeId||null,e}function Fn(t,e=jt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&hp(-1);const i=al(e);let o;try{o=t(...s)}finally{al(i),r._d&&hp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function fe(t,e){if(jt===null)return t;const n=Gl(jt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=We]=e[s];i&&(Ee(i)&&(i={mounted:i,updated:i}),i.deep&&Yn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function us(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(rr(),_n(c,n,8,[t.el,l,t,e]),sr())}}const c1=Symbol("_vte"),Ly=t=>t.__isTeleport,Rr=Symbol("_leaveCb"),Ra=Symbol("_enterCb");function u1(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Hh(()=>{t.isMounted=!0}),zy(()=>{t.isUnmounting=!0}),t}const sn=[Function,Array],Fy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},$y=t=>{const e=t.subTree;return e.component?$y(e.component):e},h1={name:"BaseTransition",props:Fy,setup(t,{slots:e}){const n=c0(),r=u1();return()=>{const s=e.default&&jy(e.default(),!0);if(!s||!s.length)return;const i=Uy(s),o=Le(t),{mode:l}=o;if(r.isLeaving)return zc(i);const c=tp(i);if(!c)return zc(i);let u=Au(c,o,r,n,f=>u=f);c.type!==Bt&&Ao(c,u);let h=n.subTree&&tp(n.subTree);if(h&&h.type!==Bt&&!gs(c,h)&&$y(n).type!==Bt){let f=Au(h,o,r,n);if(Ao(h,f),l==="out-in"&&c.type!==Bt)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,h=void 0},zc(i);l==="in-out"&&c.type!==Bt?f.delayLeave=(p,y,C)=>{const O=By(r,h);O[String(h.key)]=h,p[Rr]=()=>{y(),p[Rr]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{C(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function Uy(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Bt){e=n;break}}return e}const d1=h1;function By(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Au(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:p,onLeave:y,onAfterLeave:C,onLeaveCancelled:O,onBeforeAppear:M,onAppear:x,onAfterAppear:k,onAppearCancelled:L}=e,U=String(t.key),F=By(n,t),W=(w,S)=>{w&&_n(w,r,9,S)},A=(w,S)=>{const b=S[1];W(w,S),he(w)?w.every(T=>T.length<=1)&&b():w.length<=1&&b()},E={mode:o,persisted:l,beforeEnter(w){let S=c;if(!n.isMounted)if(i)S=M||c;else return;w[Rr]&&w[Rr](!0);const b=F[U];b&&gs(t,b)&&b.el[Rr]&&b.el[Rr](),W(S,[w])},enter(w){let S=u,b=h,T=f;if(!n.isMounted)if(i)S=x||u,b=k||h,T=L||f;else return;let I=!1;const Ce=w[Ra]=Ue=>{I||(I=!0,Ue?W(T,[w]):W(b,[w]),E.delayedLeave&&E.delayedLeave(),w[Ra]=void 0)};S?A(S,[w,Ce]):Ce()},leave(w,S){const b=String(t.key);if(w[Ra]&&w[Ra](!0),n.isUnmounting)return S();W(p,[w]);let T=!1;const I=w[Rr]=Ce=>{T||(T=!0,S(),Ce?W(O,[w]):W(C,[w]),w[Rr]=void 0,F[b]===t&&delete F[b])};F[b]=t,y?A(y,[w,I]):I()},clone(w){const S=Au(w,e,n,r,s);return s&&s(S),S}};return E}function zc(t){if(Hl(t))return t=zr(t),t.children=null,t}function tp(t){if(!Hl(t))return Ly(t.type)&&t.children?Uy(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ee(n.default))return n.default()}}function Ao(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ao(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function jy(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===dt?(o.patchFlag&128&&s++,r=r.concat(jy(o.children,e,l))):(e||o.type!==Bt)&&r.push(l!=null?zr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function jh(t,e){return Ee(t)?gt({name:t.name},e,{setup:t}):t}function Hy(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function io(t,e,n,r,s=!1){if(he(t)){t.forEach((C,O)=>io(C,e&&(he(e)?e[O]:e),n,r,s));return}if(oo(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&io(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Gl(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,h=l.refs===We?l.refs={}:l.refs,f=l.setupState,p=Le(f),y=f===We?()=>!1:C=>He(p,C);if(u!=null&&u!==c&&(st(u)?(h[u]=null,y(u)&&(f[u]=null)):lt(u)&&(u.value=null)),Ee(c))zo(c,l,12,[o,h]);else{const C=st(c),O=lt(c);if(C||O){const M=()=>{if(t.f){const x=C?y(c)?f[c]:h[c]:c.value;s?he(x)&&Dh(x,i):he(x)?x.includes(i)||x.push(i):C?(h[c]=[i],y(c)&&(f[c]=h[c])):(c.value=[i],t.k&&(h[t.k]=c.value))}else C?(h[c]=o,y(c)&&(f[c]=o)):O&&(c.value=o,t.k&&(h[t.k]=o))};o?(M.id=-1,Yt(M,n)):M()}}}Fl().requestIdleCallback;Fl().cancelIdleCallback;const oo=t=>!!t.type.__asyncLoader,Hl=t=>t.type.__isKeepAlive;function f1(t,e){qy(t,"a",e)}function p1(t,e){qy(t,"da",e)}function qy(t,e,n=mt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ql(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Hl(s.parent.vnode)&&m1(r,e,n,s),s=s.parent}}function m1(t,e,n,r){const s=ql(e,t,r,!0);Wy(()=>{Dh(r[e],s)},n)}function ql(t,e,n=mt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{rr();const l=Wo(n),c=_n(e,n,t,o);return l(),sr(),c});return r?s.unshift(i):s.push(i),i}}const dr=t=>(e,n=mt)=>{(!Po||t==="sp")&&ql(t,(...r)=>e(...r),n)},g1=dr("bm"),Hh=dr("m"),y1=dr("bu"),_1=dr("u"),zy=dr("bum"),Wy=dr("um"),v1=dr("sp"),E1=dr("rtg"),w1=dr("rtc");function b1(t,e=mt){ql("ec",t,e)}const T1="components",Gy=Symbol.for("v-ndc");function I1(t){return st(t)?A1(T1,t,!1)||t:t||Gy}function A1(t,e,n=!0,r=!1){const s=jt||mt;if(s){const i=s.type;{const l=p0(i,!1);if(l&&(l===e||l===un(e)||l===Ll(un(e))))return i}const o=np(s[t]||i[t],e)||np(s.appContext[t],e);return!o&&r?i:o}}function np(t,e){return t&&(t[e]||t[un(e)]||t[Ll(un(e))])}function vi(t,e,n,r){let s;const i=n,o=he(t);if(o||st(t)){const l=o&&Fr(t);let c=!1,u=!1;l&&(c=!ln(t),u=qr(t),t=Ul(t)),s=new Array(t.length);for(let h=0,f=t.length;h<f;h++)s[h]=e(c?u?sl(bt(t[h])):bt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ge(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const h=l[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}const Su=t=>t?f_(t)?Gl(t):Su(t.parent):null,ao=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Su(t.parent),$root:t=>Su(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Yy(t),$forceUpdate:t=>t.f||(t.f=()=>{Bh(t.update)}),$nextTick:t=>t.n||(t.n=jl.bind(t.proxy)),$watch:t=>K1.bind(t)}),Wc=(t,e)=>t!==We&&!t.__isScriptSetup&&He(t,e),S1={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Wc(r,e))return o[e]=1,r[e];if(s!==We&&He(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&He(u,e))return o[e]=3,i[e];if(n!==We&&He(n,e))return o[e]=4,n[e];Pu&&(o[e]=0)}}const h=ao[e];let f,p;if(h)return e==="$attrs"&&xt(t.attrs,"get",""),h(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==We&&He(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,He(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Wc(s,e)?(s[e]=n,!0):r!==We&&He(r,e)?(r[e]=n,!0):He(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==We&&He(t,o)||Wc(e,o)||(l=i[0])&&He(l,o)||He(r,o)||He(ao,o)||He(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:He(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rp(t){return he(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Pu=!0;function P1(t){const e=Yy(t),n=t.proxy,r=t.ctx;Pu=!1,e.beforeCreate&&sp(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:h,beforeMount:f,mounted:p,beforeUpdate:y,updated:C,activated:O,deactivated:M,beforeDestroy:x,beforeUnmount:k,destroyed:L,unmounted:U,render:F,renderTracked:W,renderTriggered:A,errorCaptured:E,serverPrefetch:w,expose:S,inheritAttrs:b,components:T,directives:I,filters:Ce}=e;if(u&&C1(u,r,null),o)for(const me in o){const Se=o[me];Ee(Se)&&(r[me]=Se.bind(n))}if(s){const me=s.call(n,n);Ge(me)&&(t.data=hr(me))}if(Pu=!0,i)for(const me in i){const Se=i[me],Lt=Ee(Se)?Se.bind(n,n):Ee(Se.get)?Se.get.bind(n,n):kn,fn=!Ee(Se)&&Ee(Se.set)?Se.set.bind(n):kn,tn=ke({get:Lt,set:fn});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>tn.value,set:Je=>tn.value=Je})}if(l)for(const me in l)Ky(l[me],r,n,me);if(c){const me=Ee(c)?c.call(n):c;Reflect.ownKeys(me).forEach(Se=>{Pn(Se,me[Se])})}h&&sp(h,t,"c");function be(me,Se){he(Se)?Se.forEach(Lt=>me(Lt.bind(n))):Se&&me(Se.bind(n))}if(be(g1,f),be(Hh,p),be(y1,y),be(_1,C),be(f1,O),be(p1,M),be(b1,E),be(w1,W),be(E1,A),be(zy,k),be(Wy,U),be(v1,w),he(S))if(S.length){const me=t.exposed||(t.exposed={});S.forEach(Se=>{Object.defineProperty(me,Se,{get:()=>n[Se],set:Lt=>n[Se]=Lt})})}else t.exposed||(t.exposed={});F&&t.render===kn&&(t.render=F),b!=null&&(t.inheritAttrs=b),T&&(t.components=T),I&&(t.directives=I),w&&Hy(t)}function C1(t,e,n=kn){he(t)&&(t=Cu(t));for(const r in t){const s=t[r];let i;Ge(s)?"default"in s?i=Be(s.from||r,s.default,!0):i=Be(s.from||r):i=Be(s),lt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function sp(t,e,n){_n(he(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ky(t,e,n,r){let s=r.includes(".")?a_(n,r):()=>n[r];if(st(t)){const i=e[t];Ee(i)&&et(s,i)}else if(Ee(t))et(s,t.bind(n));else if(Ge(t))if(he(t))t.forEach(i=>Ky(i,e,n,r));else{const i=Ee(t.handler)?t.handler.bind(n):e[t.handler];Ee(i)&&et(s,i,t)}}function Yy(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ll(c,u,o,!0)),ll(c,e,o)),Ge(e)&&i.set(e,c),c}function ll(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ll(t,i,n,!0),s&&s.forEach(o=>ll(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=R1[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const R1={data:ip,props:op,emits:op,methods:Gi,computed:Gi,beforeCreate:$t,created:$t,beforeMount:$t,mounted:$t,beforeUpdate:$t,updated:$t,beforeDestroy:$t,beforeUnmount:$t,destroyed:$t,unmounted:$t,activated:$t,deactivated:$t,errorCaptured:$t,serverPrefetch:$t,components:Gi,directives:Gi,watch:k1,provide:ip,inject:D1};function ip(t,e){return e?t?function(){return gt(Ee(t)?t.call(this,this):t,Ee(e)?e.call(this,this):e)}:e:t}function D1(t,e){return Gi(Cu(t),Cu(e))}function Cu(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function $t(t,e){return t?[...new Set([].concat(t,e))]:e}function Gi(t,e){return t?gt(Object.create(null),t,e):e}function op(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:gt(Object.create(null),rp(t),rp(e??{})):e}function k1(t,e){if(!t)return e;if(!e)return t;const n=gt(Object.create(null),t);for(const r in e)n[r]=$t(t[r],e[r]);return n}function Qy(){return{app:null,config:{isNativeTag:yb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let O1=0;function x1(t,e){return function(r,s=null){Ee(r)||(r=gt({},r)),s!=null&&!Ge(s)&&(s=null);const i=Qy(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:O1++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:g0,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&Ee(h.install)?(o.add(h),h.install(u,...f)):Ee(h)&&(o.add(h),h(u,...f))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,f){return f?(i.components[h]=f,u):i.components[h]},directive(h,f){return f?(i.directives[h]=f,u):i.directives[h]},mount(h,f,p){if(!c){const y=u._ceVNode||De(r,s);return y.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(y,h,p),c=!0,u._container=h,h.__vue_app__=u,Gl(y.component)}},onUnmount(h){l.push(h)},unmount(){c&&(_n(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return i.provides[h]=f,u},runWithContext(h){const f=ws;ws=u;try{return h()}finally{ws=f}}};return u}}let ws=null;function Pn(t,e){if(mt){let n=mt.provides;const r=mt.parent&&mt.parent.provides;r===n&&(n=mt.provides=Object.create(r)),n[t]=e}}function Be(t,e,n=!1){const r=mt||jt;if(r||ws){let s=ws?ws._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ee(e)?e.call(r&&r.proxy):e}}function N1(){return!!(mt||jt||ws)}const Xy={},Jy=()=>Object.create(Xy),Zy=t=>Object.getPrototypeOf(t)===Xy;function V1(t,e,n,r=!1){const s={},i=Jy();t.propsDefaults=Object.create(null),e_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Cy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function M1(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Le(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let p=h[f];if(zl(t.emitsOptions,p))continue;const y=e[p];if(c)if(He(i,p))y!==i[p]&&(i[p]=y,u=!0);else{const C=un(p);s[C]=Ru(c,l,C,y,t,!1)}else y!==i[p]&&(i[p]=y,u=!0)}}}else{e_(t,e,s,i)&&(u=!0);let h;for(const f in l)(!e||!He(e,f)&&((h=Os(f))===f||!He(e,h)))&&(c?n&&(n[f]!==void 0||n[h]!==void 0)&&(s[f]=Ru(c,l,f,void 0,t,!0)):delete s[f]);if(i!==l)for(const f in i)(!e||!He(e,f))&&(delete i[f],u=!0)}u&&Kn(t.attrs,"set","")}function e_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(no(c))continue;const u=e[c];let h;s&&He(s,h=un(c))?!i||!i.includes(h)?n[h]=u:(l||(l={}))[h]=u:zl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Le(n),u=l||We;for(let h=0;h<i.length;h++){const f=i[h];n[f]=Ru(s,c,f,u[f],t,!He(u,f))}}return o}function Ru(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=He(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Ee(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=Wo(s);r=u[n]=c.call(null,e),h()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Os(n))&&(r=!0))}return r}const L1=new WeakMap;function t_(t,e,n=!1){const r=n?L1:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!Ee(t)){const h=f=>{c=!0;const[p,y]=t_(f,e,!0);gt(o,p),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return Ge(t)&&r.set(t,Xs),Xs;if(he(i))for(let h=0;h<i.length;h++){const f=un(i[h]);ap(f)&&(o[f]=We)}else if(i)for(const h in i){const f=un(h);if(ap(f)){const p=i[h],y=o[f]=he(p)||Ee(p)?{type:p}:gt({},p),C=y.type;let O=!1,M=!0;if(he(C))for(let x=0;x<C.length;++x){const k=C[x],L=Ee(k)&&k.name;if(L==="Boolean"){O=!0;break}else L==="String"&&(M=!1)}else O=Ee(C)&&C.name==="Boolean";y[0]=O,y[1]=M,(O||He(y,"default"))&&l.push(f)}}const u=[o,l];return Ge(t)&&r.set(t,u),u}function ap(t){return t[0]!=="$"&&!no(t)}const qh=t=>t[0]==="_"||t==="$stable",zh=t=>he(t)?t.map(Cn):[Cn(t)],F1=(t,e,n)=>{if(e._n)return e;const r=Fn((...s)=>zh(e(...s)),n);return r._c=!1,r},n_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(qh(s))continue;const i=t[s];if(Ee(i))e[s]=F1(s,i,r);else if(i!=null){const o=zh(i);e[s]=()=>o}}},r_=(t,e)=>{const n=zh(e);t.slots.default=()=>n},s_=(t,e,n)=>{for(const r in e)(n||!qh(r))&&(t[r]=e[r])},$1=(t,e,n)=>{const r=t.slots=Jy();if(t.vnode.shapeFlag&32){const s=e.__;s&&wu(r,"__",s,!0);const i=e._;i?(s_(r,e,n),n&&wu(r,"_",i,!0)):n_(e,r)}else e&&r_(t,e)},U1=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=We;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:s_(s,e,n):(i=!e.$stable,n_(e,s)),o=e}else e&&(r_(t,e),o={default:1});if(i)for(const l in s)!qh(l)&&o[l]==null&&delete s[l]},Yt=t0;function B1(t){return j1(t)}function j1(t,e){const n=Fl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:p,setScopeId:y=kn,insertStaticContent:C}=t,O=(P,D,N,H=null,G=null,q=null,ne=void 0,Z=null,J=!!D.dynamicChildren)=>{if(P===D)return;P&&!gs(P,D)&&(H=j(P),Je(P,G,q,!0),P=null),D.patchFlag===-2&&(J=!1,D.dynamicChildren=null);const{type:Q,ref:ue,shapeFlag:te}=D;switch(Q){case Wl:M(P,D,N,H);break;case Bt:x(P,D,N,H);break;case Ba:P==null&&k(D,N,H,ne);break;case dt:T(P,D,N,H,G,q,ne,Z,J);break;default:te&1?F(P,D,N,H,G,q,ne,Z,J):te&6?I(P,D,N,H,G,q,ne,Z,J):(te&64||te&128)&&Q.process(P,D,N,H,G,q,ne,Z,J,ae)}ue!=null&&G?io(ue,P&&P.ref,q,D||P,!D):ue==null&&P&&P.ref!=null&&io(P.ref,null,q,P,!0)},M=(P,D,N,H)=>{if(P==null)r(D.el=l(D.children),N,H);else{const G=D.el=P.el;D.children!==P.children&&u(G,D.children)}},x=(P,D,N,H)=>{P==null?r(D.el=c(D.children||""),N,H):D.el=P.el},k=(P,D,N,H)=>{[P.el,P.anchor]=C(P.children,D,N,H,P.el,P.anchor)},L=({el:P,anchor:D},N,H)=>{let G;for(;P&&P!==D;)G=p(P),r(P,N,H),P=G;r(D,N,H)},U=({el:P,anchor:D})=>{let N;for(;P&&P!==D;)N=p(P),s(P),P=N;s(D)},F=(P,D,N,H,G,q,ne,Z,J)=>{D.type==="svg"?ne="svg":D.type==="math"&&(ne="mathml"),P==null?W(D,N,H,G,q,ne,Z,J):w(P,D,G,q,ne,Z,J)},W=(P,D,N,H,G,q,ne,Z)=>{let J,Q;const{props:ue,shapeFlag:te,transition:le,dirs:_e}=P;if(J=P.el=o(P.type,q,ue&&ue.is,ue),te&8?h(J,P.children):te&16&&E(P.children,J,null,H,G,Gc(P,q),ne,Z),_e&&us(P,null,H,"created"),A(J,P,P.scopeId,ne,H),ue){for(const Ie in ue)Ie!=="value"&&!no(Ie)&&i(J,Ie,null,ue[Ie],q,H);"value"in ue&&i(J,"value",null,ue.value,q),(Q=ue.onVnodeBeforeMount)&&Tn(Q,H,P)}_e&&us(P,null,H,"beforeMount");const pe=H1(G,le);pe&&le.beforeEnter(J),r(J,D,N),((Q=ue&&ue.onVnodeMounted)||pe||_e)&&Yt(()=>{Q&&Tn(Q,H,P),pe&&le.enter(J),_e&&us(P,null,H,"mounted")},G)},A=(P,D,N,H,G)=>{if(N&&y(P,N),H)for(let q=0;q<H.length;q++)y(P,H[q]);if(G){let q=G.subTree;if(D===q||c_(q.type)&&(q.ssContent===D||q.ssFallback===D)){const ne=G.vnode;A(P,ne,ne.scopeId,ne.slotScopeIds,G.parent)}}},E=(P,D,N,H,G,q,ne,Z,J=0)=>{for(let Q=J;Q<P.length;Q++){const ue=P[Q]=Z?Dr(P[Q]):Cn(P[Q]);O(null,ue,D,N,H,G,q,ne,Z)}},w=(P,D,N,H,G,q,ne)=>{const Z=D.el=P.el;let{patchFlag:J,dynamicChildren:Q,dirs:ue}=D;J|=P.patchFlag&16;const te=P.props||We,le=D.props||We;let _e;if(N&&hs(N,!1),(_e=le.onVnodeBeforeUpdate)&&Tn(_e,N,D,P),ue&&us(D,P,N,"beforeUpdate"),N&&hs(N,!0),(te.innerHTML&&le.innerHTML==null||te.textContent&&le.textContent==null)&&h(Z,""),Q?S(P.dynamicChildren,Q,Z,N,H,Gc(D,G),q):ne||Se(P,D,Z,null,N,H,Gc(D,G),q,!1),J>0){if(J&16)b(Z,te,le,N,G);else if(J&2&&te.class!==le.class&&i(Z,"class",null,le.class,G),J&4&&i(Z,"style",te.style,le.style,G),J&8){const pe=D.dynamicProps;for(let Ie=0;Ie<pe.length;Ie++){const Ve=pe[Ie],yt=te[Ve],_t=le[Ve];(_t!==yt||Ve==="value")&&i(Z,Ve,yt,_t,G,N)}}J&1&&P.children!==D.children&&h(Z,D.children)}else!ne&&Q==null&&b(Z,te,le,N,G);((_e=le.onVnodeUpdated)||ue)&&Yt(()=>{_e&&Tn(_e,N,D,P),ue&&us(D,P,N,"updated")},H)},S=(P,D,N,H,G,q,ne)=>{for(let Z=0;Z<D.length;Z++){const J=P[Z],Q=D[Z],ue=J.el&&(J.type===dt||!gs(J,Q)||J.shapeFlag&198)?f(J.el):N;O(J,Q,ue,null,H,G,q,ne,!0)}},b=(P,D,N,H,G)=>{if(D!==N){if(D!==We)for(const q in D)!no(q)&&!(q in N)&&i(P,q,D[q],null,G,H);for(const q in N){if(no(q))continue;const ne=N[q],Z=D[q];ne!==Z&&q!=="value"&&i(P,q,Z,ne,G,H)}"value"in N&&i(P,"value",D.value,N.value,G)}},T=(P,D,N,H,G,q,ne,Z,J)=>{const Q=D.el=P?P.el:l(""),ue=D.anchor=P?P.anchor:l("");let{patchFlag:te,dynamicChildren:le,slotScopeIds:_e}=D;_e&&(Z=Z?Z.concat(_e):_e),P==null?(r(Q,N,H),r(ue,N,H),E(D.children||[],N,ue,G,q,ne,Z,J)):te>0&&te&64&&le&&P.dynamicChildren?(S(P.dynamicChildren,le,N,G,q,ne,Z),(D.key!=null||G&&D===G.subTree)&&i_(P,D,!0)):Se(P,D,N,ue,G,q,ne,Z,J)},I=(P,D,N,H,G,q,ne,Z,J)=>{D.slotScopeIds=Z,P==null?D.shapeFlag&512?G.ctx.activate(D,N,H,ne,J):Ce(D,N,H,G,q,ne,J):Ue(P,D,J)},Ce=(P,D,N,H,G,q,ne)=>{const Z=P.component=l0(P,H,G);if(Hl(P)&&(Z.ctx.renderer=ae),u0(Z,!1,ne),Z.asyncDep){if(G&&G.registerDep(Z,be,ne),!P.el){const J=Z.subTree=De(Bt);x(null,J,D,N)}}else be(Z,P,D,N,G,q,ne)},Ue=(P,D,N)=>{const H=D.component=P.component;if(Z1(P,D,N))if(H.asyncDep&&!H.asyncResolved){me(H,D,N);return}else H.next=D,H.update();else D.el=P.el,H.vnode=D},be=(P,D,N,H,G,q,ne)=>{const Z=()=>{if(P.isMounted){let{next:te,bu:le,u:_e,parent:pe,vnode:Ie}=P;{const St=o_(P);if(St){te&&(te.el=Ie.el,me(P,te,ne)),St.asyncDep.then(()=>{P.isUnmounted||Z()});return}}let Ve=te,yt;hs(P,!1),te?(te.el=Ie.el,me(P,te,ne)):te=Ie,le&&Ua(le),(yt=te.props&&te.props.onVnodeBeforeUpdate)&&Tn(yt,pe,te,Ie),hs(P,!0);const _t=cp(P),nn=P.subTree;P.subTree=_t,O(nn,_t,f(nn.el),j(nn),P,G,q),te.el=_t.el,Ve===null&&e0(P,_t.el),_e&&Yt(_e,G),(yt=te.props&&te.props.onVnodeUpdated)&&Yt(()=>Tn(yt,pe,te,Ie),G)}else{let te;const{el:le,props:_e}=D,{bm:pe,m:Ie,parent:Ve,root:yt,type:_t}=P,nn=oo(D);hs(P,!1),pe&&Ua(pe),!nn&&(te=_e&&_e.onVnodeBeforeMount)&&Tn(te,Ve,D),hs(P,!0);{yt.ce&&yt.ce._def.shadowRoot!==!1&&yt.ce._injectChildStyle(_t);const St=P.subTree=cp(P);O(null,St,N,H,P,G,q),D.el=St.el}if(Ie&&Yt(Ie,G),!nn&&(te=_e&&_e.onVnodeMounted)){const St=D;Yt(()=>Tn(te,Ve,St),G)}(D.shapeFlag&256||Ve&&oo(Ve.vnode)&&Ve.vnode.shapeFlag&256)&&P.a&&Yt(P.a,G),P.isMounted=!0,D=N=H=null}};P.scope.on();const J=P.effect=new py(Z);P.scope.off();const Q=P.update=J.run.bind(J),ue=P.job=J.runIfDirty.bind(J);ue.i=P,ue.id=P.uid,J.scheduler=()=>Bh(ue),hs(P,!0),Q()},me=(P,D,N)=>{D.component=P;const H=P.vnode.props;P.vnode=D,P.next=null,M1(P,D.props,H,N),U1(P,D.children,N),rr(),ep(P),sr()},Se=(P,D,N,H,G,q,ne,Z,J=!1)=>{const Q=P&&P.children,ue=P?P.shapeFlag:0,te=D.children,{patchFlag:le,shapeFlag:_e}=D;if(le>0){if(le&128){fn(Q,te,N,H,G,q,ne,Z,J);return}else if(le&256){Lt(Q,te,N,H,G,q,ne,Z,J);return}}_e&8?(ue&16&&qt(Q,G,q),te!==Q&&h(N,te)):ue&16?_e&16?fn(Q,te,N,H,G,q,ne,Z,J):qt(Q,G,q,!0):(ue&8&&h(N,""),_e&16&&E(te,N,H,G,q,ne,Z,J))},Lt=(P,D,N,H,G,q,ne,Z,J)=>{P=P||Xs,D=D||Xs;const Q=P.length,ue=D.length,te=Math.min(Q,ue);let le;for(le=0;le<te;le++){const _e=D[le]=J?Dr(D[le]):Cn(D[le]);O(P[le],_e,N,null,G,q,ne,Z,J)}Q>ue?qt(P,G,q,!0,!1,te):E(D,N,H,G,q,ne,Z,J,te)},fn=(P,D,N,H,G,q,ne,Z,J)=>{let Q=0;const ue=D.length;let te=P.length-1,le=ue-1;for(;Q<=te&&Q<=le;){const _e=P[Q],pe=D[Q]=J?Dr(D[Q]):Cn(D[Q]);if(gs(_e,pe))O(_e,pe,N,null,G,q,ne,Z,J);else break;Q++}for(;Q<=te&&Q<=le;){const _e=P[te],pe=D[le]=J?Dr(D[le]):Cn(D[le]);if(gs(_e,pe))O(_e,pe,N,null,G,q,ne,Z,J);else break;te--,le--}if(Q>te){if(Q<=le){const _e=le+1,pe=_e<ue?D[_e].el:H;for(;Q<=le;)O(null,D[Q]=J?Dr(D[Q]):Cn(D[Q]),N,pe,G,q,ne,Z,J),Q++}}else if(Q>le)for(;Q<=te;)Je(P[Q],G,q,!0),Q++;else{const _e=Q,pe=Q,Ie=new Map;for(Q=pe;Q<=le;Q++){const vt=D[Q]=J?Dr(D[Q]):Cn(D[Q]);vt.key!=null&&Ie.set(vt.key,Q)}let Ve,yt=0;const _t=le-pe+1;let nn=!1,St=0;const _r=new Array(_t);for(Q=0;Q<_t;Q++)_r[Q]=0;for(Q=_e;Q<=te;Q++){const vt=P[Q];if(yt>=_t){Je(vt,G,q,!0);continue}let rn;if(vt.key!=null)rn=Ie.get(vt.key);else for(Ve=pe;Ve<=le;Ve++)if(_r[Ve-pe]===0&&gs(vt,D[Ve])){rn=Ve;break}rn===void 0?Je(vt,G,q,!0):(_r[rn-pe]=Q+1,rn>=St?St=rn:nn=!0,O(vt,D[rn],N,null,G,q,ne,Z,J),yt++)}const Ri=nn?q1(_r):Xs;for(Ve=Ri.length-1,Q=_t-1;Q>=0;Q--){const vt=pe+Q,rn=D[vt],ua=vt+1<ue?D[vt+1].el:H;_r[Q]===0?O(null,rn,N,ua,G,q,ne,Z,J):nn&&(Ve<0||Q!==Ri[Ve]?tn(rn,N,ua,2):Ve--)}}},tn=(P,D,N,H,G=null)=>{const{el:q,type:ne,transition:Z,children:J,shapeFlag:Q}=P;if(Q&6){tn(P.component.subTree,D,N,H);return}if(Q&128){P.suspense.move(D,N,H);return}if(Q&64){ne.move(P,D,N,ae);return}if(ne===dt){r(q,D,N);for(let te=0;te<J.length;te++)tn(J[te],D,N,H);r(P.anchor,D,N);return}if(ne===Ba){L(P,D,N);return}if(H!==2&&Q&1&&Z)if(H===0)Z.beforeEnter(q),r(q,D,N),Yt(()=>Z.enter(q),G);else{const{leave:te,delayLeave:le,afterLeave:_e}=Z,pe=()=>{P.ctx.isUnmounted?s(q):r(q,D,N)},Ie=()=>{te(q,()=>{pe(),_e&&_e()})};le?le(q,pe,Ie):Ie()}else r(q,D,N)},Je=(P,D,N,H=!1,G=!1)=>{const{type:q,props:ne,ref:Z,children:J,dynamicChildren:Q,shapeFlag:ue,patchFlag:te,dirs:le,cacheIndex:_e}=P;if(te===-2&&(G=!1),Z!=null&&(rr(),io(Z,null,N,P,!0),sr()),_e!=null&&(D.renderCache[_e]=void 0),ue&256){D.ctx.deactivate(P);return}const pe=ue&1&&le,Ie=!oo(P);let Ve;if(Ie&&(Ve=ne&&ne.onVnodeBeforeUnmount)&&Tn(Ve,D,P),ue&6)bn(P.component,N,H);else{if(ue&128){P.suspense.unmount(N,H);return}pe&&us(P,null,D,"beforeUnmount"),ue&64?P.type.remove(P,D,N,ae,H):Q&&!Q.hasOnce&&(q!==dt||te>0&&te&64)?qt(Q,D,N,!1,!0):(q===dt&&te&384||!G&&ue&16)&&qt(J,D,N),H&&Ze(P)}(Ie&&(Ve=ne&&ne.onVnodeUnmounted)||pe)&&Yt(()=>{Ve&&Tn(Ve,D,P),pe&&us(P,null,D,"unmounted")},N)},Ze=P=>{const{type:D,el:N,anchor:H,transition:G}=P;if(D===dt){yr(N,H);return}if(D===Ba){U(P);return}const q=()=>{s(N),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(P.shapeFlag&1&&G&&!G.persisted){const{leave:ne,delayLeave:Z}=G,J=()=>ne(N,q);Z?Z(P.el,q,J):J()}else q()},yr=(P,D)=>{let N;for(;P!==D;)N=p(P),s(P),P=N;s(D)},bn=(P,D,N)=>{const{bum:H,scope:G,job:q,subTree:ne,um:Z,m:J,a:Q,parent:ue,slots:{__:te}}=P;lp(J),lp(Q),H&&Ua(H),ue&&he(te)&&te.forEach(le=>{ue.renderCache[le]=void 0}),G.stop(),q&&(q.flags|=8,Je(ne,P,D,N)),Z&&Yt(Z,D),Yt(()=>{P.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},qt=(P,D,N,H=!1,G=!1,q=0)=>{for(let ne=q;ne<P.length;ne++)Je(P[ne],D,N,H,G)},j=P=>{if(P.shapeFlag&6)return j(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const D=p(P.anchor||P.el),N=D&&D[c1];return N?p(N):D};let oe=!1;const se=(P,D,N)=>{P==null?D._vnode&&Je(D._vnode,null,null,!0):O(D._vnode||null,P,D,null,null,null,N),D._vnode=P,oe||(oe=!0,ep(),Ny(),oe=!1)},ae={p:O,um:Je,m:tn,r:Ze,mt:Ce,mc:E,pc:Se,pbc:S,n:j,o:t};return{render:se,hydrate:void 0,createApp:x1(se)}}function Gc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function hs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function H1(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function i_(t,e,n=!1){const r=t.children,s=e.children;if(he(r)&&he(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Dr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&i_(o,l)),l.type===Wl&&(l.el=o.el),l.type===Bt&&!l.el&&(l.el=o.el)}}function q1(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function o_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:o_(e)}function lp(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const z1=Symbol.for("v-scx"),W1=()=>Be(z1);function G1(t,e){return Wh(t,null,e)}function et(t,e,n){return Wh(t,e,n)}function Wh(t,e,n=We){const{immediate:r,deep:s,flush:i,once:o}=n,l=gt({},n),c=e&&r||!e&&i!=="post";let u;if(Po){if(i==="sync"){const y=W1();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=kn,y.resume=kn,y.pause=kn,y}}const h=mt;l.call=(y,C,O)=>_n(y,h,C,O);let f=!1;i==="post"?l.scheduler=y=>{Yt(y,h&&h.suspense)}:i!=="sync"&&(f=!0,l.scheduler=(y,C)=>{C?y():Bh(y)}),l.augmentJob=y=>{e&&(y.flags|=4),f&&(y.flags|=2,h&&(y.id=h.uid,y.i=h))};const p=i1(t,e,l);return Po&&(u?u.push(p):c&&p()),p}function K1(t,e,n){const r=this.proxy,s=st(t)?t.includes(".")?a_(r,t):()=>r[t]:t.bind(r,r);let i;Ee(e)?i=e:(i=e.handler,n=e);const o=Wo(this),l=Wh(s,i.bind(r),n);return o(),l}function a_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Y1=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${un(e)}Modifiers`]||t[`${Os(e)}Modifiers`];function Q1(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||We;let s=n;const i=e.startsWith("update:"),o=i&&Y1(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>st(h)?h.trim():h)),o.number&&(s=n.map(nl)));let l,c=r[l=Uc(e)]||r[l=Uc(un(e))];!c&&i&&(c=r[l=Uc(Os(e))]),c&&_n(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,_n(u,t,6,s)}}function l_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!Ee(t)){const c=u=>{const h=l_(u,e,!0);h&&(l=!0,gt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ge(t)&&r.set(t,null),null):(he(i)?i.forEach(c=>o[c]=null):gt(o,i),Ge(t)&&r.set(t,o),o)}function zl(t,e){return!t||!Vl(e)?!1:(e=e.slice(2).replace(/Once$/,""),He(t,e[0].toLowerCase()+e.slice(1))||He(t,Os(e))||He(t,e))}function cp(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:h,props:f,data:p,setupState:y,ctx:C,inheritAttrs:O}=t,M=al(t);let x,k;try{if(n.shapeFlag&4){const U=s||r,F=U;x=Cn(u.call(F,U,h,f,y,p,C)),k=l}else{const U=e;x=Cn(U.length>1?U(f,{attrs:l,slots:o,emit:c}):U(f,null)),k=e.props?l:X1(l)}}catch(U){lo.length=0,Bl(U,t,1),x=De(Bt)}let L=x;if(k&&O!==!1){const U=Object.keys(k),{shapeFlag:F}=L;U.length&&F&7&&(i&&U.some(Rh)&&(k=J1(k,i)),L=zr(L,k,!1,!0))}return n.dirs&&(L=zr(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&Ao(L,n.transition),x=L,al(M),x}const X1=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vl(n))&&((e||(e={}))[n]=t[n]);return e},J1=(t,e)=>{const n={};for(const r in t)(!Rh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Z1(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?up(r,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const p=h[f];if(o[p]!==r[p]&&!zl(u,p))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?up(r,o,u):!0:!!o;return!1}function up(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!zl(n,i))return!0}return!1}function e0({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const c_=t=>t.__isSuspense;function t0(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):l1(t)}const dt=Symbol.for("v-fgt"),Wl=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),Ba=Symbol.for("v-stc"),lo=[];let Xt=null;function K(t=!1){lo.push(Xt=t?null:[])}function n0(){lo.pop(),Xt=lo[lo.length-1]||null}let So=1;function hp(t,e=!1){So+=t,t<0&&Xt&&e&&(Xt.hasOnce=!0)}function u_(t){return t.dynamicChildren=So>0?Xt||Xs:null,n0(),So>0&&Xt&&Xt.push(t),t}function Y(t,e,n,r,s,i){return u_(g(t,e,n,r,s,i,!0))}function Un(t,e,n,r,s){return u_(De(t,e,n,r,s,!0))}function cl(t){return t?t.__v_isVNode===!0:!1}function gs(t,e){return t.type===e.type&&t.key===e.key}const h_=({key:t})=>t??null,ja=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?st(t)||lt(t)||Ee(t)?{i:jt,r:t,k:e,f:!!n}:t:null);function g(t,e=null,n=null,r=0,s=null,i=t===dt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&h_(e),ref:e&&ja(e),scopeId:My,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:jt};return l?(Gh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=st(n)?8:16),So>0&&!o&&Xt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Xt.push(c),c}const De=r0;function r0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Gy)&&(t=Bt),cl(t)){const l=zr(t,e,!0);return n&&Gh(l,n),So>0&&!i&&Xt&&(l.shapeFlag&6?Xt[Xt.indexOf(t)]=l:Xt.push(l)),l.patchFlag=-2,l}if(m0(t)&&(t=t.__vccOpts),e){e=s0(e);let{class:l,style:c}=e;l&&!st(l)&&(e.class=Ts(l)),Ge(c)&&($h(c)&&!he(c)&&(c=gt({},c)),e.style=$l(c))}const o=st(t)?1:c_(t)?128:Ly(t)?64:Ge(t)?4:Ee(t)?2:0;return g(t,e,n,r,s,o,i,!0)}function s0(t){return t?$h(t)||Zy(t)?gt({},t):t:null}function zr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?i0(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&h_(u),ref:e&&e.ref?n&&i?he(i)?i.concat(ja(e)):[i,ja(e)]:ja(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==dt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zr(t.ssContent),ssFallback:t.ssFallback&&zr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Ao(h,c.clone(h)),h}function Ot(t=" ",e=0){return De(Wl,null,t,e)}function d_(t,e){const n=De(Ba,null,t);return n.staticCount=e,n}function Te(t="",e=!1){return e?(K(),Un(Bt,null,t)):De(Bt,null,t)}function Cn(t){return t==null||typeof t=="boolean"?De(Bt):he(t)?De(dt,null,t.slice()):cl(t)?Dr(t):De(Wl,null,String(t))}function Dr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zr(t)}function Gh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Gh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Zy(e)?e._ctx=jt:s===3&&jt&&(jt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ee(e)?(e={default:e,_ctx:jt},n=32):(e=String(e),r&64?(n=16,e=[Ot(e)]):n=8);t.children=e,t.shapeFlag|=n}function i0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ts([e.class,r.class]));else if(s==="style")e.style=$l([e.style,r.style]);else if(Vl(s)){const i=e[s],o=r[s];o&&i!==o&&!(he(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Tn(t,e,n,r=null){_n(t,e,7,[n,r])}const o0=Qy();let a0=0;function l0(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||o0,i={uid:a0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new hy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:t_(r,s),emitsOptions:l_(r,s),emit:null,emitted:null,propsDefaults:We,inheritAttrs:r.inheritAttrs,ctx:We,data:We,props:We,attrs:We,slots:We,refs:We,setupState:We,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Q1.bind(null,i),t.ce&&t.ce(i),i}let mt=null;const c0=()=>mt||jt;let ul,Du;{const t=Fl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ul=e("__VUE_INSTANCE_SETTERS__",n=>mt=n),Du=e("__VUE_SSR_SETTERS__",n=>Po=n)}const Wo=t=>{const e=mt;return ul(t),t.scope.on(),()=>{t.scope.off(),ul(e)}},dp=()=>{mt&&mt.scope.off(),ul(null)};function f_(t){return t.vnode.shapeFlag&4}let Po=!1;function u0(t,e=!1,n=!1){e&&Du(e);const{props:r,children:s}=t.vnode,i=f_(t);V1(t,r,i,e),$1(t,s,n||e);const o=i?h0(t,e):void 0;return e&&Du(!1),o}function h0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,S1);const{setup:r}=n;if(r){rr();const s=t.setupContext=r.length>1?f0(t):null,i=Wo(t),o=zo(r,t,0,[t.props,s]),l=iy(o);if(sr(),i(),(l||t.sp)&&!oo(t)&&Hy(t),l){if(o.then(dp,dp),e)return o.then(c=>{fp(t,c)}).catch(c=>{Bl(c,t,0)});t.asyncDep=o}else fp(t,o)}else p_(t)}function fp(t,e,n){Ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ge(e)&&(t.setupState=ky(e)),p_(t)}function p_(t,e,n){const r=t.type;t.render||(t.render=r.render||kn);{const s=Wo(t);rr();try{P1(t)}finally{sr(),s()}}}const d0={get(t,e){return xt(t,"get",""),t[e]}};function f0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,d0),slots:t.slots,emit:t.emit,expose:e}}function Gl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ky(Uh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ao)return ao[n](t)},has(e,n){return n in e||n in ao}})):t.proxy}function p0(t,e=!0){return Ee(t)?t.displayName||t.name:t.name||e&&t.__name}function m0(t){return Ee(t)&&"__vccOpts"in t}const ke=(t,e)=>r1(t,e,Po);function oi(t,e,n){const r=arguments.length;return r===2?Ge(e)&&!he(e)?cl(e)?De(t,null,[e]):De(t,e):De(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&cl(n)&&(n=[n]),De(t,e,n))}const g0="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ku;const pp=typeof window<"u"&&window.trustedTypes;if(pp)try{ku=pp.createPolicy("vue",{createHTML:t=>t})}catch{}const m_=ku?t=>ku.createHTML(t):t=>t,y0="http://www.w3.org/2000/svg",_0="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,mp=Gn&&Gn.createElement("template"),v0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Gn.createElementNS(y0,t):e==="mathml"?Gn.createElementNS(_0,t):n?Gn.createElement(t,{is:n}):Gn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Gn.createTextNode(t),createComment:t=>Gn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{mp.innerHTML=m_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=mp.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},br="transition",Hi="animation",Co=Symbol("_vtc"),g_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},E0=gt({},Fy,g_),w0=t=>(t.displayName="Transition",t.props=E0,t),ns=w0((t,{slots:e})=>oi(d1,b0(t),e)),ds=(t,e=[])=>{he(t)?t.forEach(n=>n(...e)):t&&t(...e)},gp=t=>t?he(t)?t.some(e=>e.length>1):t.length>1:!1;function b0(t){const e={};for(const T in t)T in g_||(e[T]=t[T]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=l,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=t,C=T0(s),O=C&&C[0],M=C&&C[1],{onBeforeEnter:x,onEnter:k,onEnterCancelled:L,onLeave:U,onLeaveCancelled:F,onBeforeAppear:W=x,onAppear:A=k,onAppearCancelled:E=L}=e,w=(T,I,Ce,Ue)=>{T._enterCancelled=Ue,fs(T,I?h:l),fs(T,I?u:o),Ce&&Ce()},S=(T,I)=>{T._isLeaving=!1,fs(T,f),fs(T,y),fs(T,p),I&&I()},b=T=>(I,Ce)=>{const Ue=T?A:k,be=()=>w(I,T,Ce);ds(Ue,[I,be]),yp(()=>{fs(I,T?c:i),zn(I,T?h:l),gp(Ue)||_p(I,r,O,be)})};return gt(e,{onBeforeEnter(T){ds(x,[T]),zn(T,i),zn(T,o)},onBeforeAppear(T){ds(W,[T]),zn(T,c),zn(T,u)},onEnter:b(!1),onAppear:b(!0),onLeave(T,I){T._isLeaving=!0;const Ce=()=>S(T,I);zn(T,f),T._enterCancelled?(zn(T,p),wp()):(wp(),zn(T,p)),yp(()=>{T._isLeaving&&(fs(T,f),zn(T,y),gp(U)||_p(T,r,M,Ce))}),ds(U,[T,Ce])},onEnterCancelled(T){w(T,!1,void 0,!0),ds(L,[T])},onAppearCancelled(T){w(T,!0,void 0,!0),ds(E,[T])},onLeaveCancelled(T){S(T),ds(F,[T])}})}function T0(t){if(t==null)return null;if(Ge(t))return[Kc(t.enter),Kc(t.leave)];{const e=Kc(t);return[e,e]}}function Kc(t){return bb(t)}function zn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Co]||(t[Co]=new Set)).add(e)}function fs(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Co];n&&(n.delete(e),n.size||(t[Co]=void 0))}function yp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let I0=0;function _p(t,e,n,r){const s=t._endId=++I0,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=A0(t,e);if(!o)return r();const u=o+"end";let h=0;const f=()=>{t.removeEventListener(u,p),i()},p=y=>{y.target===t&&++h>=c&&f()};setTimeout(()=>{h<c&&f()},l+1),t.addEventListener(u,p)}function A0(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${br}Delay`),i=r(`${br}Duration`),o=vp(s,i),l=r(`${Hi}Delay`),c=r(`${Hi}Duration`),u=vp(l,c);let h=null,f=0,p=0;e===br?o>0&&(h=br,f=o,p=i.length):e===Hi?u>0&&(h=Hi,f=u,p=c.length):(f=Math.max(o,u),h=f>0?o>u?br:Hi:null,p=h?h===br?i.length:c.length:0);const y=h===br&&/\b(transform|all)(,|$)/.test(r(`${br}Property`).toString());return{type:h,timeout:f,propCount:p,hasTransform:y}}function vp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Ep(n)+Ep(t[r])))}function Ep(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function wp(){return document.body.offsetHeight}function S0(t,e,n){const r=t[Co];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const bp=Symbol("_vod"),P0=Symbol("_vsh"),C0=Symbol(""),R0=/(^|;)\s*display\s*:/;function D0(t,e,n){const r=t.style,s=st(n);let i=!1;if(n&&!s){if(e)if(st(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ha(r,l,"")}else for(const o in e)n[o]==null&&Ha(r,o,"");for(const o in n)o==="display"&&(i=!0),Ha(r,o,n[o])}else if(s){if(e!==n){const o=r[C0];o&&(n+=";"+o),r.cssText=n,i=R0.test(n)}}else e&&t.removeAttribute("style");bp in t&&(t[bp]=i?r.display:"",t[P0]&&(r.display="none"))}const Tp=/\s*!important$/;function Ha(t,e,n){if(he(n))n.forEach(r=>Ha(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=k0(t,e);Tp.test(n)?t.setProperty(Os(r),n.replace(Tp,""),"important"):t[r]=n}}const Ip=["Webkit","Moz","ms"],Yc={};function k0(t,e){const n=Yc[e];if(n)return n;let r=un(e);if(r!=="filter"&&r in t)return Yc[e]=r;r=Ll(r);for(let s=0;s<Ip.length;s++){const i=Ip[s]+r;if(i in t)return Yc[e]=i}return e}const Ap="http://www.w3.org/1999/xlink";function Sp(t,e,n,r,s,i=Cb(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ap,e.slice(6,e.length)):t.setAttributeNS(Ap,e,n):n==null||i&&!ly(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ln(n)?String(n):n)}function Pp(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?m_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ly(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Or(t,e,n,r){t.addEventListener(e,n,r)}function O0(t,e,n,r){t.removeEventListener(e,n,r)}const Cp=Symbol("_vei");function x0(t,e,n,r,s=null){const i=t[Cp]||(t[Cp]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=N0(e);if(r){const u=i[e]=L0(r,s);Or(t,l,u,c)}else o&&(O0(t,l,o,c),i[e]=void 0)}}const Rp=/(?:Once|Passive|Capture)$/;function N0(t){let e;if(Rp.test(t)){e={};let r;for(;r=t.match(Rp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Os(t.slice(2)),e]}let Qc=0;const V0=Promise.resolve(),M0=()=>Qc||(V0.then(()=>Qc=0),Qc=Date.now());function L0(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;_n(F0(r,n.value),e,5,[r])};return n.value=t,n.attached=M0(),n}function F0(t,e){if(he(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Dp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$0=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?S0(t,r,o):e==="style"?D0(t,n,r):Vl(e)?Rh(e)||x0(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):U0(t,e,r,o))?(Pp(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Sp(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!st(r))?Pp(t,un(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Sp(t,e,r,o))};function U0(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Dp(e)&&Ee(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Dp(e)&&st(n)?!1:e in t}const ai=t=>{const e=t.props["onUpdate:modelValue"]||!1;return he(e)?n=>Ua(e,n):e};function B0(t){t.target.composing=!0}function kp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const er=Symbol("_assign"),Oe={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[er]=ai(s);const i=r||s.props&&s.props.type==="number";Or(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=nl(l)),t[er](l)}),n&&Or(t,"change",()=>{t.value=t.value.trim()}),e||(Or(t,"compositionstart",B0),Or(t,"compositionend",kp),Or(t,"change",kp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[er]=ai(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?nl(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Kl={deep:!0,created(t,e,n){t[er]=ai(n),Or(t,"change",()=>{const r=t._modelValue,s=Ro(t),i=t.checked,o=t[er];if(he(r)){const l=Oh(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(_i(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(y_(t,i))})},mounted:Op,beforeUpdate(t,e,n){t[er]=ai(n),Op(t,e,n)}};function Op(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(he(e))s=Oh(e,r.props.value)>-1;else if(_i(e))s=e.has(r.props.value);else{if(e===n)return;s=qo(e,y_(t,!0))}t.checked!==s&&(t.checked=s)}const cn={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=_i(e);Or(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?nl(Ro(o)):Ro(o));t[er](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,jl(()=>{t._assigning=!1})}),t[er]=ai(r)},mounted(t,{value:e}){xp(t,e)},beforeUpdate(t,e,n){t[er]=ai(n)},updated(t,{value:e}){t._assigning||xp(t,e)}};function xp(t,e){const n=t.multiple,r=he(e);if(!(n&&!r&&!_i(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Ro(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Oh(e,l)>-1}else o.selected=e.has(l);else if(qo(Ro(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ro(t){return"_value"in t?t._value:t.value}function y_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const j0=["ctrl","shift","alt","meta"],H0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>j0.some(n=>t[`${n}Key`]&&!e.includes(n))},rt=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=H0[e[o]];if(l&&l(s,e))return}return t(s,...i)})},q0=gt({patchProp:$0},v0);let Np;function z0(){return Np||(Np=B1(q0))}const W0=(...t)=>{const e=z0().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=K0(r);if(!s)return;const i=e._component;!Ee(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,G0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function G0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function K0(t){return st(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const zs=typeof document<"u";function __(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Y0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&__(t.default)}const je=Object.assign;function Xc(t,e){const n={};for(const r in e){const s=e[r];n[r]=vn(s)?s.map(t):t(s)}return n}const co=()=>{},vn=Array.isArray,v_=/#/g,Q0=/&/g,X0=/\//g,J0=/=/g,Z0=/\?/g,E_=/\+/g,eT=/%5B/g,tT=/%5D/g,w_=/%5E/g,nT=/%60/g,b_=/%7B/g,rT=/%7C/g,T_=/%7D/g,sT=/%20/g;function Kh(t){return encodeURI(""+t).replace(rT,"|").replace(eT,"[").replace(tT,"]")}function iT(t){return Kh(t).replace(b_,"{").replace(T_,"}").replace(w_,"^")}function Ou(t){return Kh(t).replace(E_,"%2B").replace(sT,"+").replace(v_,"%23").replace(Q0,"%26").replace(nT,"`").replace(b_,"{").replace(T_,"}").replace(w_,"^")}function oT(t){return Ou(t).replace(J0,"%3D")}function aT(t){return Kh(t).replace(v_,"%23").replace(Z0,"%3F")}function lT(t){return t==null?"":aT(t).replace(X0,"%2F")}function Do(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const cT=/\/$/,uT=t=>t.replace(cT,"");function Jc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=pT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Do(o)}}function hT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Vp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function dT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&li(e.matched[r],n.matched[s])&&I_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function li(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function I_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!fT(t[n],e[n]))return!1;return!0}function fT(t,e){return vn(t)?Mp(t,e):vn(e)?Mp(e,t):t===e}function Mp(t,e){return vn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function pT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Tr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ko;(function(t){t.pop="pop",t.push="push"})(ko||(ko={}));var uo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(uo||(uo={}));function mT(t){if(!t)if(zs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),uT(t)}const gT=/^[^#]+#/;function yT(t,e){return t.replace(gT,"#")+e}function _T(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Yl=()=>({left:window.scrollX,top:window.scrollY});function vT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=_T(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Lp(t,e){return(history.state?history.state.position-e:-1)+t}const xu=new Map;function ET(t,e){xu.set(t,e)}function wT(t){const e=xu.get(t);return xu.delete(t),e}let bT=()=>location.protocol+"//"+location.host;function A_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Vp(c,"")}return Vp(n,t)+r+s}function TT(t,e,n,r){let s=[],i=[],o=null;const l=({state:p})=>{const y=A_(t,location),C=n.value,O=e.value;let M=0;if(p){if(n.value=y,e.value=p,o&&o===C){o=null;return}M=O?p.position-O.position:0}else r(y);s.forEach(x=>{x(n.value,C,{delta:M,type:ko.pop,direction:M?M>0?uo.forward:uo.back:uo.unknown})})};function c(){o=n.value}function u(p){s.push(p);const y=()=>{const C=s.indexOf(p);C>-1&&s.splice(C,1)};return i.push(y),y}function h(){const{history:p}=window;p.state&&p.replaceState(je({},p.state,{scroll:Yl()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function Fp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Yl():null}}function IT(t){const{history:e,location:n}=window,r={value:A_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:bT()+t+c;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(y){console.error(y),n[h?"replace":"assign"](p)}}function o(c,u){const h=je({},e.state,Fp(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,h,!0),r.value=c}function l(c,u){const h=je({},s.value,e.state,{forward:c,scroll:Yl()});i(h.current,h,!0);const f=je({},Fp(r.value,c,null),{position:h.position+1},u);i(c,f,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function AT(t){t=mT(t);const e=IT(t),n=TT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=je({location:"",base:t,go:r,createHref:yT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ST(t){return typeof t=="string"||t&&typeof t=="object"}function S_(t){return typeof t=="string"||typeof t=="symbol"}const P_=Symbol("");var $p;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($p||($p={}));function ci(t,e){return je(new Error,{type:t,[P_]:!0},e)}function Wn(t,e){return t instanceof Error&&P_ in t&&(e==null||!!(t.type&e))}const Up="[^/]+?",PT={sensitive:!1,strict:!1,start:!0,end:!0},CT=/[.+*?^${}()[\]/\\]/g;function RT(t,e){const n=je({},PT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const p=u[f];let y=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(CT,"\\$&"),y+=40;else if(p.type===1){const{value:C,repeatable:O,optional:M,regexp:x}=p;i.push({name:C,repeatable:O,optional:M});const k=x||Up;if(k!==Up){y+=10;try{new RegExp(`(${k})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${C}" (${k}): `+U.message)}}let L=O?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;f||(L=M&&u.length<2?`(?:/${L})`:"/"+L),M&&(L+="?"),s+=L,y+=20,M&&(y+=-8),O&&(y+=-20),k===".*"&&(y+=-50)}h.push(y)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const h=u.match(o),f={};if(!h)return null;for(let p=1;p<h.length;p++){const y=h[p]||"",C=i[p-1];f[C.name]=y&&C.repeatable?y.split("/"):y}return f}function c(u){let h="",f=!1;for(const p of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const y of p)if(y.type===0)h+=y.value;else if(y.type===1){const{value:C,repeatable:O,optional:M}=y,x=C in u?u[C]:"";if(vn(x)&&!O)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const k=vn(x)?x.join("/"):x;if(!k)if(M)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${C}"`);h+=k}}return h||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function DT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function C_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=DT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Bp(r))return 1;if(Bp(s))return-1}return s.length-r.length}function Bp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const kT={type:0,value:""},OT=/[a-zA-Z0-9_]/;function xT(t){if(!t)return[[]];if(t==="/")return[[kT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",h="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:OT.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function NT(t,e,n){const r=RT(xT(t.path),n),s=je(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function VT(t,e){const n=[],r=new Map;e=zp({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,p,y){const C=!y,O=Hp(f);O.aliasOf=y&&y.record;const M=zp(e,f),x=[O];if("alias"in f){const U=typeof f.alias=="string"?[f.alias]:f.alias;for(const F of U)x.push(Hp(je({},O,{components:y?y.record.components:O.components,path:F,aliasOf:y?y.record:O})))}let k,L;for(const U of x){const{path:F}=U;if(p&&F[0]!=="/"){const W=p.record.path,A=W[W.length-1]==="/"?"":"/";U.path=p.record.path+(F&&A+F)}if(k=NT(U,p,M),y?y.alias.push(k):(L=L||k,L!==k&&L.alias.push(k),C&&f.name&&!qp(k)&&o(f.name)),R_(k)&&c(k),O.children){const W=O.children;for(let A=0;A<W.length;A++)i(W[A],k,y&&y.children[A])}y=y||k}return L?()=>{o(L)}:co}function o(f){if(S_(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function l(){return n}function c(f){const p=FT(f,n);n.splice(p,0,f),f.record.name&&!qp(f)&&r.set(f.record.name,f)}function u(f,p){let y,C={},O,M;if("name"in f&&f.name){if(y=r.get(f.name),!y)throw ci(1,{location:f});M=y.record.name,C=je(jp(p.params,y.keys.filter(L=>!L.optional).concat(y.parent?y.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),f.params&&jp(f.params,y.keys.map(L=>L.name))),O=y.stringify(C)}else if(f.path!=null)O=f.path,y=n.find(L=>L.re.test(O)),y&&(C=y.parse(O),M=y.record.name);else{if(y=p.name?r.get(p.name):n.find(L=>L.re.test(p.path)),!y)throw ci(1,{location:f,currentLocation:p});M=y.record.name,C=je({},p.params,f.params),O=y.stringify(C)}const x=[];let k=y;for(;k;)x.unshift(k.record),k=k.parent;return{name:M,path:O,params:C,matched:x,meta:LT(x)}}t.forEach(f=>i(f));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:l,getRecordMatcher:s}}function jp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Hp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:MT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function MT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function qp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function LT(t){return t.reduce((e,n)=>je(e,n.meta),{})}function zp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function FT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;C_(t,e[i])<0?r=i:n=i+1}const s=$T(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function $T(t){let e=t;for(;e=e.parent;)if(R_(e)&&C_(t,e)===0)return e}function R_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function UT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(E_," "),o=i.indexOf("="),l=Do(o<0?i:i.slice(0,o)),c=o<0?null:Do(i.slice(o+1));if(l in e){let u=e[l];vn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Wp(t){let e="";for(let n in t){const r=t[n];if(n=oT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(vn(r)?r.map(i=>i&&Ou(i)):[r&&Ou(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function BT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=vn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const jT=Symbol(""),Gp=Symbol(""),Ql=Symbol(""),Yh=Symbol(""),Nu=Symbol("");function qi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function kr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=p=>{p===!1?c(ci(4,{from:n,to:e})):p instanceof Error?c(p):ST(p)?c(ci(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),l())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(p=>c(p))})}function Zc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(__(c)){const h=(c.__vccOpts||c)[e];h&&i.push(kr(h,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const f=Y0(h)?h.default:h;o.mods[l]=h,o.components[l]=f;const y=(f.__vccOpts||f)[e];return y&&kr(y,n,r,o,l,s)()}))}}return i}function Kp(t){const e=Be(Ql),n=Be(Yh),r=ke(()=>{const c=_(t.to);return e.resolve(c)}),s=ke(()=>{const{matched:c}=r.value,{length:u}=c,h=c[u-1],f=n.matched;if(!h||!f.length)return-1;const p=f.findIndex(li.bind(null,h));if(p>-1)return p;const y=Yp(c[u-2]);return u>1&&Yp(h)===y&&f[f.length-1].path!==y?f.findIndex(li.bind(null,c[u-2])):p}),i=ke(()=>s.value>-1&&GT(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&I_(n.params,r.value.params));function l(c={}){if(WT(c)){const u=e[_(t.replace)?"replace":"push"](_(t.to)).catch(co);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function HT(t){return t.length===1?t[0]:t}const qT=jh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Kp,setup(t,{slots:e}){const n=hr(Kp(t)),{options:r}=Be(Ql),s=ke(()=>({[Qp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&HT(e.default(n));return t.custom?i:oi("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),zT=qT;function WT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function GT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!vn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Yp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qp=(t,e,n)=>t??e??n,KT=jh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Be(Nu),s=ke(()=>t.route||r.value),i=Be(Gp,0),o=ke(()=>{let u=_(i);const{matched:h}=s.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),l=ke(()=>s.value.matched[o.value]);Pn(Gp,ke(()=>o.value+1)),Pn(jT,l),Pn(Nu,s);const c=Ae();return et(()=>[c.value,l.value,t.name],([u,h,f],[p,y,C])=>{h&&(h.instances[f]=u,y&&y!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=y.leaveGuards),h.updateGuards.size||(h.updateGuards=y.updateGuards))),u&&h&&(!y||!li(h,y)||!p)&&(h.enterCallbacks[f]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,f=l.value,p=f&&f.components[h];if(!p)return Xp(n.default,{Component:p,route:u});const y=f.props[h],C=y?y===!0?u.params:typeof y=="function"?y(u):y:null,M=oi(p,je({},C,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return Xp(n.default,{Component:M,route:u})||M}}});function Xp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const D_=KT;function YT(t){const e=VT(t.routes,t),n=t.parseQuery||UT,r=t.stringifyQuery||Wp,s=t.history,i=qi(),o=qi(),l=qi(),c=Qb(Tr);let u=Tr;zs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Xc.bind(null,j=>""+j),f=Xc.bind(null,lT),p=Xc.bind(null,Do);function y(j,oe){let se,ae;return S_(j)?(se=e.getRecordMatcher(j),ae=oe):ae=j,e.addRoute(ae,se)}function C(j){const oe=e.getRecordMatcher(j);oe&&e.removeRoute(oe)}function O(){return e.getRoutes().map(j=>j.record)}function M(j){return!!e.getRecordMatcher(j)}function x(j,oe){if(oe=je({},oe||c.value),typeof j=="string"){const N=Jc(n,j,oe.path),H=e.resolve({path:N.path},oe),G=s.createHref(N.fullPath);return je(N,H,{params:p(H.params),hash:Do(N.hash),redirectedFrom:void 0,href:G})}let se;if(j.path!=null)se=je({},j,{path:Jc(n,j.path,oe.path).path});else{const N=je({},j.params);for(const H in N)N[H]==null&&delete N[H];se=je({},j,{params:f(N)}),oe.params=f(oe.params)}const ae=e.resolve(se,oe),Fe=j.hash||"";ae.params=h(p(ae.params));const P=hT(r,je({},j,{hash:iT(Fe),path:ae.path})),D=s.createHref(P);return je({fullPath:P,hash:Fe,query:r===Wp?BT(j.query):j.query||{}},ae,{redirectedFrom:void 0,href:D})}function k(j){return typeof j=="string"?Jc(n,j,c.value.path):je({},j)}function L(j,oe){if(u!==j)return ci(8,{from:oe,to:j})}function U(j){return A(j)}function F(j){return U(je(k(j),{replace:!0}))}function W(j){const oe=j.matched[j.matched.length-1];if(oe&&oe.redirect){const{redirect:se}=oe;let ae=typeof se=="function"?se(j):se;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=k(ae):{path:ae},ae.params={}),je({query:j.query,hash:j.hash,params:ae.path!=null?{}:j.params},ae)}}function A(j,oe){const se=u=x(j),ae=c.value,Fe=j.state,P=j.force,D=j.replace===!0,N=W(se);if(N)return A(je(k(N),{state:typeof N=="object"?je({},Fe,N.state):Fe,force:P,replace:D}),oe||se);const H=se;H.redirectedFrom=oe;let G;return!P&&dT(r,ae,se)&&(G=ci(16,{to:H,from:ae}),tn(ae,ae,!0,!1)),(G?Promise.resolve(G):S(H,ae)).catch(q=>Wn(q)?Wn(q,2)?q:fn(q):Se(q,H,ae)).then(q=>{if(q){if(Wn(q,2))return A(je({replace:D},k(q.to),{state:typeof q.to=="object"?je({},Fe,q.to.state):Fe,force:P}),oe||H)}else q=T(H,ae,!0,D,Fe);return b(H,ae,q),q})}function E(j,oe){const se=L(j,oe);return se?Promise.reject(se):Promise.resolve()}function w(j){const oe=yr.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(j):j()}function S(j,oe){let se;const[ae,Fe,P]=QT(j,oe);se=Zc(ae.reverse(),"beforeRouteLeave",j,oe);for(const N of ae)N.leaveGuards.forEach(H=>{se.push(kr(H,j,oe))});const D=E.bind(null,j,oe);return se.push(D),qt(se).then(()=>{se=[];for(const N of i.list())se.push(kr(N,j,oe));return se.push(D),qt(se)}).then(()=>{se=Zc(Fe,"beforeRouteUpdate",j,oe);for(const N of Fe)N.updateGuards.forEach(H=>{se.push(kr(H,j,oe))});return se.push(D),qt(se)}).then(()=>{se=[];for(const N of P)if(N.beforeEnter)if(vn(N.beforeEnter))for(const H of N.beforeEnter)se.push(kr(H,j,oe));else se.push(kr(N.beforeEnter,j,oe));return se.push(D),qt(se)}).then(()=>(j.matched.forEach(N=>N.enterCallbacks={}),se=Zc(P,"beforeRouteEnter",j,oe,w),se.push(D),qt(se))).then(()=>{se=[];for(const N of o.list())se.push(kr(N,j,oe));return se.push(D),qt(se)}).catch(N=>Wn(N,8)?N:Promise.reject(N))}function b(j,oe,se){l.list().forEach(ae=>w(()=>ae(j,oe,se)))}function T(j,oe,se,ae,Fe){const P=L(j,oe);if(P)return P;const D=oe===Tr,N=zs?history.state:{};se&&(ae||D?s.replace(j.fullPath,je({scroll:D&&N&&N.scroll},Fe)):s.push(j.fullPath,Fe)),c.value=j,tn(j,oe,se,D),fn()}let I;function Ce(){I||(I=s.listen((j,oe,se)=>{if(!bn.listening)return;const ae=x(j),Fe=W(ae);if(Fe){A(je(Fe,{replace:!0,force:!0}),ae).catch(co);return}u=ae;const P=c.value;zs&&ET(Lp(P.fullPath,se.delta),Yl()),S(ae,P).catch(D=>Wn(D,12)?D:Wn(D,2)?(A(je(k(D.to),{force:!0}),ae).then(N=>{Wn(N,20)&&!se.delta&&se.type===ko.pop&&s.go(-1,!1)}).catch(co),Promise.reject()):(se.delta&&s.go(-se.delta,!1),Se(D,ae,P))).then(D=>{D=D||T(ae,P,!1),D&&(se.delta&&!Wn(D,8)?s.go(-se.delta,!1):se.type===ko.pop&&Wn(D,20)&&s.go(-1,!1)),b(ae,P,D)}).catch(co)}))}let Ue=qi(),be=qi(),me;function Se(j,oe,se){fn(j);const ae=be.list();return ae.length?ae.forEach(Fe=>Fe(j,oe,se)):console.error(j),Promise.reject(j)}function Lt(){return me&&c.value!==Tr?Promise.resolve():new Promise((j,oe)=>{Ue.add([j,oe])})}function fn(j){return me||(me=!j,Ce(),Ue.list().forEach(([oe,se])=>j?se(j):oe()),Ue.reset()),j}function tn(j,oe,se,ae){const{scrollBehavior:Fe}=t;if(!zs||!Fe)return Promise.resolve();const P=!se&&wT(Lp(j.fullPath,0))||(ae||!se)&&history.state&&history.state.scroll||null;return jl().then(()=>Fe(j,oe,P)).then(D=>D&&vT(D)).catch(D=>Se(D,j,oe))}const Je=j=>s.go(j);let Ze;const yr=new Set,bn={currentRoute:c,listening:!0,addRoute:y,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:M,getRoutes:O,resolve:x,options:t,push:U,replace:F,go:Je,back:()=>Je(-1),forward:()=>Je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:be.add,isReady:Lt,install(j){const oe=this;j.component("RouterLink",zT),j.component("RouterView",D_),j.config.globalProperties.$router=oe,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>_(c)}),zs&&!Ze&&c.value===Tr&&(Ze=!0,U(s.location).catch(Fe=>{}));const se={};for(const Fe in Tr)Object.defineProperty(se,Fe,{get:()=>c.value[Fe],enumerable:!0});j.provide(Ql,oe),j.provide(Yh,Cy(se)),j.provide(Nu,c);const ae=j.unmount;yr.add(j),j.unmount=function(){yr.delete(j),yr.size<1&&(u=Tr,I&&I(),I=null,c.value=Tr,Ze=!1,me=!1),ae()}}};function qt(j){return j.reduce((oe,se)=>oe.then(()=>w(se)),Promise.resolve())}return bn}function QT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>li(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>li(u,c))||s.push(c))}return[n,r,s]}function xs(){return Be(Ql)}function XT(t){return Be(Yh)}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let k_;const Xl=t=>k_=t,O_=Symbol();function Vu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ho;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ho||(ho={}));function JT(){const t=dy(!0),e=t.run(()=>Ae({}));let n=[],r=[];const s=Uh({install(i){Xl(s),s._a=i,i.provide(O_,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const x_=()=>{};function Jp(t,e,n,r=x_){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&fy()&&Db(s),s}function Hs(t,...e){t.slice().forEach(n=>{n(...e)})}const ZT=t=>t(),Zp=Symbol(),eu=Symbol();function Mu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Vu(s)&&Vu(r)&&t.hasOwnProperty(n)&&!lt(r)&&!Fr(r)?t[n]=Mu(s,r):t[n]=r}return t}const eI=Symbol();function tI(t){return!Vu(t)||!Object.prototype.hasOwnProperty.call(t,eI)}const{assign:Pr}=Object;function nI(t){return!!(lt(t)&&t.effect)}function rI(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const h=Zb(n.state.value[t]);return Pr(h,i,Object.keys(o||{}).reduce((f,p)=>(f[p]=Uh(ke(()=>{Xl(n);const y=n._s.get(t);return o[p].call(y,y)})),f),{}))}return c=N_(t,u,e,n,r,!0),c}function N_(t,e,n={},r,s,i){let o;const l=Pr({actions:{}},n),c={deep:!0};let u,h,f=[],p=[],y;const C=r.state.value[t];!i&&!C&&(r.state.value[t]={}),Ae({});let O;function M(E){let w;u=h=!1,typeof E=="function"?(E(r.state.value[t]),w={type:ho.patchFunction,storeId:t,events:y}):(Mu(r.state.value[t],E),w={type:ho.patchObject,payload:E,storeId:t,events:y});const S=O=Symbol();jl().then(()=>{O===S&&(u=!0)}),h=!0,Hs(f,w,r.state.value[t])}const x=i?function(){const{state:w}=n,S=w?w():{};this.$patch(b=>{Pr(b,S)})}:x_;function k(){o.stop(),f=[],p=[],r._s.delete(t)}const L=(E,w="")=>{if(Zp in E)return E[eu]=w,E;const S=function(){Xl(r);const b=Array.from(arguments),T=[],I=[];function Ce(me){T.push(me)}function Ue(me){I.push(me)}Hs(p,{args:b,name:S[eu],store:F,after:Ce,onError:Ue});let be;try{be=E.apply(this&&this.$id===t?this:F,b)}catch(me){throw Hs(I,me),me}return be instanceof Promise?be.then(me=>(Hs(T,me),me)).catch(me=>(Hs(I,me),Promise.reject(me))):(Hs(T,be),be)};return S[Zp]=!0,S[eu]=w,S},U={_p:r,$id:t,$onAction:Jp.bind(null,p),$patch:M,$reset:x,$subscribe(E,w={}){const S=Jp(f,E,w.detached,()=>b()),b=o.run(()=>et(()=>r.state.value[t],T=>{(w.flush==="sync"?h:u)&&E({storeId:t,type:ho.direct,events:y},T)},Pr({},c,w)));return S},$dispose:k},F=hr(U);r._s.set(t,F);const A=(r._a&&r._a.runWithContext||ZT)(()=>r._e.run(()=>(o=dy()).run(()=>e({action:L}))));for(const E in A){const w=A[E];if(lt(w)&&!nI(w)||Fr(w))i||(C&&tI(w)&&(lt(w)?w.value=C[E]:Mu(w,C[E])),r.state.value[t][E]=w);else if(typeof w=="function"){const S=L(w,E);A[E]=S,l.actions[E]=w}}return Pr(F,A),Pr(Le(F),A),Object.defineProperty(F,"$state",{get:()=>r.state.value[t],set:E=>{M(w=>{Pr(w,E)})}}),r._p.forEach(E=>{Pr(F,o.run(()=>E({store:F,app:r._a,pinia:r,options:l})))}),C&&i&&n.hydrate&&n.hydrate(F.$state,C),u=!0,h=!0,F}/*! #__NO_SIDE_EFFECTS__ */function V_(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const c=N1();return o=o||(c?Be(O_,null):null),o&&Xl(o),o=k_,o._s.has(t)||(s?N_(t,e,r,o):rI(t,r,o)),o._s.get(t)}return i.$id=t,i}const sI=()=>{};var em={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},iI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},L_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,h=i>>2,f=(i&3)<<4|l>>4;let p=(l&15)<<2|u>>6,y=u&63;c||(y=64,o||(p=64)),r.push(n[h],n[f],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(M_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||f==null)throw new oI;const p=i<<2|l>>4;if(r.push(p),u!==64){const y=l<<4&240|u>>2;if(r.push(y),f!==64){const C=u<<6&192|f;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class oI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aI=function(t){const e=M_(t);return L_.encodeByteArray(e,!0)},hl=function(t){return aI(t).replace(/\./g,"")},F_=function(t){try{return L_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const cI=()=>lI().__FIREBASE_DEFAULTS__,uI=()=>{if(typeof process>"u"||typeof em>"u")return;const t=em.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&F_(t[1]);return e&&JSON.parse(e)},Jl=()=>{try{return sI()||cI()||uI()||hI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$_=t=>{var e,n;return(n=(e=Jl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dI=t=>{const e=$_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},U_=()=>{var t;return(t=Jl())===null||t===void 0?void 0:t.config},B_=t=>{var e;return(e=Jl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Ei(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function j_(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function pI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[hl(JSON.stringify(n)),hl(JSON.stringify(o)),""].join(".")}const fo={};function mI(){const t={prod:[],emulator:[]};for(const e of Object.keys(fo))fo[e]?t.emulator.push(e):t.prod.push(e);return t}function gI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let tm=!1;function H_(t,e){if(typeof window>"u"||typeof document>"u"||!Ei(window.location.host)||fo[t]===e||fo[t]||tm)return;fo[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=mI().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function l(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,y){p.setAttribute("width","24"),p.setAttribute("id",y),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{tm=!0,o()},p}function h(p,y){p.setAttribute("id",y),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function f(){const p=gI(r),y=n("text"),C=document.getElementById(y)||document.createElement("span"),O=n("learnmore"),M=document.getElementById(O)||document.createElement("a"),x=n("preprendIcon"),k=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const L=p.element;l(L),h(M,O);const U=u();c(k,x),L.append(k,C,M,U),document.body.appendChild(L)}i?(C.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(k.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function _I(){var t;const e=(t=Jl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function EI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bI(){const t=Vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function TI(){return!_I()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function II(){try{return typeof indexedDB=="object"}catch{return!1}}function AI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="FirebaseError";class fr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SI,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Go.prototype.create)}}class Go{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?PI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new fr(s,l,r)}}function PI(t,e){return t.replace(CI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const CI=/\{\$([^}]+)}/g;function RI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Is(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(nm(i)&&nm(o)){if(!Is(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function nm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ki(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Yi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function DI(t,e){const n=new kI(t,e);return n.subscribe.bind(n)}class kI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");OI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=tu),s.error===void 0&&(s.error=tu),s.complete===void 0&&(s.complete=tu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tu(){}/**
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
 */function it(t){return t&&t._delegate?t._delegate:t}class As{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class xI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VI(e))try{this.getOrInitializeService({instanceIdentifier:ms})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ms){return this.instances.has(e)}getOptions(e=ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ms){return this.component?this.component.multipleInstances?e:ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NI(t){return t===ms?void 0:t}function VI(t){return t.instantiationMode==="EAGER"}/**
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
 */class MI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(xe||(xe={}));const LI={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},FI=xe.INFO,$I={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},UI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=$I[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qh{constructor(e){this.name=e,this._logLevel=FI,this._logHandler=UI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const BI=(t,e)=>e.some(n=>t instanceof n);let rm,sm;function jI(){return rm||(rm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HI(){return sm||(sm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const q_=new WeakMap,Lu=new WeakMap,z_=new WeakMap,nu=new WeakMap,Xh=new WeakMap;function qI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n($r(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&q_.set(n,t)}).catch(()=>{}),Xh.set(e,t),e}function zI(t){if(Lu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Lu.set(t,e)}let Fu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||z_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WI(t){Fu=t(Fu)}function GI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ru(this),e,...n);return z_.set(r,e.sort?e.sort():[e]),$r(r)}:HI().includes(t)?function(...e){return t.apply(ru(this),e),$r(q_.get(this))}:function(...e){return $r(t.apply(ru(this),e))}}function KI(t){return typeof t=="function"?GI(t):(t instanceof IDBTransaction&&zI(t),BI(t,jI())?new Proxy(t,Fu):t)}function $r(t){if(t instanceof IDBRequest)return qI(t);if(nu.has(t))return nu.get(t);const e=KI(t);return e!==t&&(nu.set(t,e),Xh.set(e,t)),e}const ru=t=>Xh.get(t);function YI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=$r(o);return r&&o.addEventListener("upgradeneeded",c=>{r($r(o.result),c.oldVersion,c.newVersion,$r(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const QI=["get","getKey","getAll","getAllKeys","count"],XI=["put","add","delete","clear"],su=new Map;function im(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(su.get(e))return su.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=XI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||QI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return su.set(e,i),i}WI(t=>({...t,get:(e,n,r)=>im(e,n)||t.get(e,n,r),has:(e,n)=>!!im(e,n)||t.has(e,n)}));/**
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
 */class JI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZI(t){const e=t.getComponent();return e?.type==="VERSION"}const $u="@firebase/app",om="0.13.2";/**
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
 */const ir=new Qh("@firebase/app"),eA="@firebase/app-compat",tA="@firebase/analytics-compat",nA="@firebase/analytics",rA="@firebase/app-check-compat",sA="@firebase/app-check",iA="@firebase/auth",oA="@firebase/auth-compat",aA="@firebase/database",lA="@firebase/data-connect",cA="@firebase/database-compat",uA="@firebase/functions",hA="@firebase/functions-compat",dA="@firebase/installations",fA="@firebase/installations-compat",pA="@firebase/messaging",mA="@firebase/messaging-compat",gA="@firebase/performance",yA="@firebase/performance-compat",_A="@firebase/remote-config",vA="@firebase/remote-config-compat",EA="@firebase/storage",wA="@firebase/storage-compat",bA="@firebase/firestore",TA="@firebase/ai",IA="@firebase/firestore-compat",AA="firebase",SA="11.10.0";/**
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
 */const Uu="[DEFAULT]",PA={[$u]:"fire-core",[eA]:"fire-core-compat",[nA]:"fire-analytics",[tA]:"fire-analytics-compat",[sA]:"fire-app-check",[rA]:"fire-app-check-compat",[iA]:"fire-auth",[oA]:"fire-auth-compat",[aA]:"fire-rtdb",[lA]:"fire-data-connect",[cA]:"fire-rtdb-compat",[uA]:"fire-fn",[hA]:"fire-fn-compat",[dA]:"fire-iid",[fA]:"fire-iid-compat",[pA]:"fire-fcm",[mA]:"fire-fcm-compat",[gA]:"fire-perf",[yA]:"fire-perf-compat",[_A]:"fire-rc",[vA]:"fire-rc-compat",[EA]:"fire-gcs",[wA]:"fire-gcs-compat",[bA]:"fire-fst",[IA]:"fire-fst-compat",[TA]:"fire-vertex","fire-js":"fire-js",[AA]:"fire-js-all"};/**
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
 */const dl=new Map,CA=new Map,Bu=new Map;function am(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ui(t){const e=t.name;if(Bu.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;Bu.set(e,t);for(const n of dl.values())am(n,t);for(const n of CA.values())am(n,t);return!0}function Jh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const RA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ur=new Go("app","Firebase",RA);/**
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
 */const wi=SA;function W_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Uu,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Ur.create("bad-app-name",{appName:String(s)});if(n||(n=U_()),!n)throw Ur.create("no-options");const i=dl.get(s);if(i){if(Is(n,i.options)&&Is(r,i.config))return i;throw Ur.create("duplicate-app",{appName:s})}const o=new MI(s);for(const c of Bu.values())o.addComponent(c);const l=new DA(n,r,o);return dl.set(s,l),l}function G_(t=Uu){const e=dl.get(t);if(!e&&t===Uu&&U_())return W_();if(!e)throw Ur.create("no-app",{appName:t});return e}function Br(t,e,n){var r;let s=(r=PA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(l.join(" "));return}ui(new As(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const kA="firebase-heartbeat-database",OA=1,Oo="firebase-heartbeat-store";let iu=null;function K_(){return iu||(iu=YI(kA,OA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Oo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ur.create("idb-open",{originalErrorMessage:t.message})})),iu}async function xA(t){try{const n=(await K_()).transaction(Oo),r=await n.objectStore(Oo).get(Y_(t));return await n.done,r}catch(e){if(e instanceof fr)ir.warn(e.message);else{const n=Ur.create("idb-get",{originalErrorMessage:e?.message});ir.warn(n.message)}}}async function lm(t,e){try{const r=(await K_()).transaction(Oo,"readwrite");await r.objectStore(Oo).put(e,Y_(t)),await r.done}catch(n){if(n instanceof fr)ir.warn(n.message);else{const r=Ur.create("idb-set",{originalErrorMessage:n?.message});ir.warn(r.message)}}}function Y_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const NA=1024,VA=30;class MA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=cm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>VA){const o=$A(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cm(),{heartbeatsToSend:r,unsentEntries:s}=LA(this._heartbeatsCache.heartbeats),i=hl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ir.warn(n),""}}}function cm(){return new Date().toISOString().substring(0,10)}function LA(t,e=NA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),um(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),um(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return II()?AI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xA(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function um(t){return hl(JSON.stringify({version:2,heartbeats:t})).length}function $A(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function UA(t){ui(new As("platform-logger",e=>new JI(e),"PRIVATE")),ui(new As("heartbeat",e=>new MA(e),"PRIVATE")),Br($u,om,t),Br($u,om,"esm2017"),Br("fire-js","")}UA("");function Zh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Q_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BA=Q_,X_=new Go("auth","Firebase",Q_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new Qh("@firebase/auth");function jA(t,...e){fl.logLevel<=xe.WARN&&fl.warn(`Auth (${wi}): ${t}`,...e)}function qa(t,...e){fl.logLevel<=xe.ERROR&&fl.error(`Auth (${wi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,...e){throw td(t,...e)}function yn(t,...e){return td(t,...e)}function ed(t,e,n){const r=Object.assign(Object.assign({},BA()),{[e]:n});return new Go("auth","Firebase",r).create(e,{appName:t.name})}function tr(t){return ed(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function HA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&hn(t,"argument-error"),ed(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function td(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return X_.create(t,...e)}function ge(t,e,...n){if(!t)throw td(e,...n)}function Jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qa(e),new Error(e)}function or(t,e){t||Jn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qA(){return hm()==="http:"||hm()==="https:"}function hm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,or(n>e,"Short delay should be less than long delay!"),this.isMobile=yI()||wI()}get(){return zA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class J_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const KA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],YA=new Yo(3e4,6e4);function Bn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wn(t,e,n,r,s={}){return Z_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ko(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return vI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ei(t.emulatorConfig.host)&&(u.credentials="include"),J_.fetch()(await ev(t,t.config.apiHost,n,l),u)})}async function Z_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},GA),e);try{const s=new XA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Da(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Da(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Da(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Da(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ed(t,h,u);hn(t,h)}}catch(s){if(s instanceof fr)throw s;hn(t,"network-request-failed",{message:String(s)})}}async function Qo(t,e,n,r,s={}){const i=await wn(t,e,n,r,s);return"mfaPendingCredential"in i&&hn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function ev(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?nd(t.config,s):`${t.config.apiScheme}://${s}`;return KA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function QA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yn(this.auth,"network-request-failed")),YA.get())})}}function Da(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=yn(t,e,r);return s.customData._tokenResponse=n,s}function dm(t){return t!==void 0&&t.enterprise!==void 0}class JA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return QA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ZA(t,e){return wn(t,"GET","/v2/recaptchaConfig",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eS(t,e){return wn(t,"POST","/v1/accounts:delete",e)}async function pl(t,e){return wn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tS(t,e=!1){const n=it(t),r=await n.getIdToken(e),s=rd(r);ge(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:po(ou(s.auth_time)),issuedAtTime:po(ou(s.iat)),expirationTime:po(ou(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function ou(t){return Number(t)*1e3}function rd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qa("JWT malformed, contained fewer than 3 sections"),null;try{const s=F_(n);return s?JSON.parse(s):(qa("Failed to decode base64 JWT payload"),null)}catch(s){return qa("Caught error parsing JWT payload as JSON",s?.toString()),null}}function fm(t){const e=rd(t);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Hu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=po(this.lastLoginAt),this.creationTime=po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ml(t){var e;const n=t.auth,r=await t.getIdToken(),s=await hi(t,pl(n,{idToken:r}));ge(s?.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?tv(i.providerUserInfo):[],l=iS(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!l?.length,h=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Hu(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function sS(t){const e=it(t);await ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function tv(t){return t.map(e=>{var{providerId:n}=e,r=Zh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oS(t,e){const n=await Z_(t,{},async()=>{const r=Ko({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await ev(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ei(t.emulatorConfig.host)&&(c.credentials="include"),J_.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function aS(t,e){return wn(t,"POST","/v2/accounts:revokeToken",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const n=fm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await oS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ei;return r&&(ge(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ge(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ge(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ei,this.toJSON())}_performRefresh(){return Jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t,e){ge(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Zh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Hu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await hi(this,this.stsTokenManager.getToken(this.auth,e));return ge(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tS(this,e)}reload(){return sS(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ml(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(tr(this.auth));const e=await this.getIdToken();return await hi(this,eS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,k=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:L,emailVerified:U,isAnonymous:F,providerData:W,stsTokenManager:A}=n;ge(L&&A,e,"internal-error");const E=ei.fromJSON(this.name,A);ge(typeof L=="string",e,"internal-error"),Ir(f,e.name),Ir(p,e.name),ge(typeof U=="boolean",e,"internal-error"),ge(typeof F=="boolean",e,"internal-error"),Ir(y,e.name),Ir(C,e.name),Ir(O,e.name),Ir(M,e.name),Ir(x,e.name),Ir(k,e.name);const w=new mn({uid:L,auth:e,email:p,emailVerified:U,displayName:f,isAnonymous:F,photoURL:C,phoneNumber:y,tenantId:O,stsTokenManager:E,createdAt:x,lastLoginAt:k});return W&&Array.isArray(W)&&(w.providerData=W.map(S=>Object.assign({},S))),M&&(w._redirectEventId=M),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new ei;s.updateFromServerResponse(n);const i=new mn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ml(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ge(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?tv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,l=new ei;l.updateFromIdToken(r);const c=new mn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Hu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=new Map;function Zn(t){or(t instanceof Function,"Expected a class definition");let e=pm.get(t);return e?(or(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pm.set(t,e),e)}/**
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
 */function za(t,e,n){return`firebase:${t}:${e}:${n}`}class ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=za(this.userKey,s.apiKey,i),this.fullPersistenceKey=za("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await pl(this.auth,{idToken:e}).catch(()=>{});return n?mn._fromGetAccountInfoResponse(this.auth,n,e):null}return mn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ti(Zn(mm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Zn(mm);const o=za(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){let f;if(typeof h=="string"){const p=await pl(e,{idToken:h}).catch(()=>{});if(!p)break;f=await mn._fromGetAccountInfoResponse(e,p,h)}else f=mn._fromJSON(e,h);u!==i&&(l=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ti(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ti(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ov(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lv(e))return"Blackberry";if(cv(e))return"Webos";if(sv(e))return"Safari";if((e.includes("chrome/")||iv(e))&&!e.includes("edge/"))return"Chrome";if(av(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function rv(t=Vt()){return/firefox\//i.test(t)}function sv(t=Vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iv(t=Vt()){return/crios\//i.test(t)}function ov(t=Vt()){return/iemobile/i.test(t)}function av(t=Vt()){return/android/i.test(t)}function lv(t=Vt()){return/blackberry/i.test(t)}function cv(t=Vt()){return/webos/i.test(t)}function sd(t=Vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lS(t=Vt()){var e;return sd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cS(){return bI()&&document.documentMode===10}function uv(t=Vt()){return sd(t)||av(t)||cv(t)||lv(t)||/windows phone/i.test(t)||ov(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t,e=[]){let n;switch(t){case"Browser":n=gm(Vt());break;case"Worker":n=`${gm(Vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wi}/${r}`}/**
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
 */async function hS(t,e={}){return wn(t,"GET","/v2/passwordPolicy",Bn(t,e))}/**
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
 */class pS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ym(this),this.idTokenSubscription=new ym(this),this.beforeStateQueue=new uS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=X_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ti.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pl(this,{idToken:e}),r=await mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&c?.user&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ml(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(tr(this));const n=e?it(e):null;return n&&ge(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hS(this),n=new fS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Go("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await aS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zn(e)||this._popupRedirectResolver;ge(n,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[Zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&jA(`Error while retrieving App Check token: ${n.error}`),n?.token}}function pr(t){return it(t)}class ym{constructor(e){this.auth=e,this.observer=null,this.addObserver=DI(n=>this.observer=n)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mS(t){Zl=t}function dv(t){return Zl.loadJS(t)}function gS(){return Zl.recaptchaEnterpriseScript}function yS(){return Zl.gapiScript}function _S(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class vS{constructor(){this.enterprise=new ES}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ES{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const wS="recaptcha-enterprise",fv="NO_RECAPTCHA";class bS{constructor(e){this.type=wS,this.auth=pr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{ZA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new JA(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;dm(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(fv)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&dm(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=gS();c.length!==0&&(c+=l),dv(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function _m(t,e,n,r=!1,s=!1){const i=new bS(t);let o;if(s)o=fv;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function gl(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await _m(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await _m(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(t,e){const n=Jh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Is(i,e??{}))return s;hn(s,"already-initialized")}return n.initialize({options:e})}function IS(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Zn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function AS(t,e,n){const r=pr(t);ge(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=pv(e),{host:o,port:l}=SS(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ge(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ge(Is(u,r.config.emulator)&&Is(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Ei(o)?(j_(`${i}//${o}${c}`),H_("Auth",!0)):PS()}function pv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function SS(t){const e=pv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:vm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:vm(o)}}}function vm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jn("not implemented")}_getIdTokenResponse(e){return Jn("not implemented")}_linkToIdToken(e,n){return Jn("not implemented")}_getReauthenticationResolver(e){return Jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(t,e){return wn(t,"POST","/v1/accounts:resetPassword",Bn(t,e))}async function RS(t,e){return wn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DS(t,e){return Qo(t,"POST","/v1/accounts:signInWithPassword",Bn(t,e))}async function kS(t,e){return wn(t,"POST","/v1/accounts:sendOobCode",Bn(t,e))}async function OS(t,e){return kS(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(t,e){return Qo(t,"POST","/v1/accounts:signInWithEmailLink",Bn(t,e))}async function NS(t,e){return Qo(t,"POST","/v1/accounts:signInWithEmailLink",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends id{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new xo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gl(e,n,"signInWithPassword",DS);case"emailLink":return xS(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gl(e,r,"signUpPassword",RS);case"emailLink":return NS(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t,e){return Qo(t,"POST","/v1/accounts:signInWithIdp",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS="http://localhost";class Ss extends id{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Zh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ss(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ni(e,n)}buildRequest(){const e={requestUri:VS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ko(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LS(t){const e=Ki(Yi(t)).link,n=e?Ki(Yi(e)).deep_link_id:null,r=Ki(Yi(t)).deep_link_id;return(r?Ki(Yi(r)).link:null)||r||n||e||t}class od{constructor(e){var n,r,s,i,o,l;const c=Ki(Yi(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,f=MS((s=c.mode)!==null&&s!==void 0?s:null);ge(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=LS(e);try{return new od(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.providerId=bi.PROVIDER_ID}static credential(e,n){return xo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=od.parseLink(n);return ge(r,"argument-error"),xo._fromEmailAndCode(e,r.code,r.tenantId)}}bi.PROVIDER_ID="password";bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xo extends ad{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Xo{constructor(){super("facebook.com")}static credential(e){return Ss._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";xr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ss._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends Xo{constructor(){super("github.com")}static credential(e){return Ss._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Xo{constructor(){super("twitter.com")}static credential(e,n){return Ss._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vr.credential(n,r)}catch{return null}}}Vr.TWITTER_SIGN_IN_METHOD="twitter.com";Vr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FS(t,e){return Qo(t,"POST","/v1/accounts:signUp",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await mn._fromIdTokenResponse(e,r,s),o=Em(r);return new Ps({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Em(r);return new Ps({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Em(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends fr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,yl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new yl(e,n,r,s)}}function mv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?yl._fromErrorAndOperation(t,i,e,r):i})}async function $S(t,e,n=!1){const r=await hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ps._forOperation(t,"link",r)}/**
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
 */async function US(t,e,n=!1){const{auth:r}=t;if(Qt(r.app))return Promise.reject(tr(r));const s="reauthenticate";try{const i=await hi(t,mv(r,s,e,t),n);ge(i.idToken,r,"internal-error");const o=rd(i.idToken);ge(o,r,"internal-error");const{sub:l}=o;return ge(t.uid===l,r,"user-mismatch"),Ps._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&hn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gv(t,e,n=!1){if(Qt(t.app))return Promise.reject(tr(t));const r="signIn",s=await mv(t,r,e),i=await Ps._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function BS(t,e){return gv(pr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ld(t){const e=pr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jS(t,e,n){const r=pr(t);await gl(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",OS)}async function HS(t,e,n){await CS(it(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ld(t),r})}async function qS(t,e,n){if(Qt(t.app))return Promise.reject(tr(t));const r=pr(t),o=await gl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",FS).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&ld(t),c}),l=await Ps._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function zS(t,e,n){return Qt(t.app)?Promise.reject(tr(t)):BS(it(t),bi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ld(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WS(t,e){return wn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=it(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await hi(r,WS(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function KS(t,e,n,r){return it(t).onIdTokenChanged(e,n,r)}function YS(t,e,n){return it(t).beforeAuthStateChanged(e,n)}function yv(t,e,n,r){return it(t).onAuthStateChanged(e,n,r)}function QS(t){return it(t).signOut()}const _l="__sak";/**
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
 */class _v{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_l,"1"),this.storage.removeItem(_l),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS=1e3,JS=10;class vv extends _v{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=uv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);cS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,JS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vv.type="LOCAL";const ZS=vv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev extends _v{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ev.type="SESSION";const wv=Ev;/**
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
 */class ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ec(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await eP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ec.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function On(){return window}function nP(t){On().location.href=t}/**
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
 */function bv(){return typeof On().WorkerGlobalScope<"u"&&typeof On().importScripts=="function"}async function rP(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sP(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iP(){return bv()?self:null}/**
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
 */const Tv="firebaseLocalStorageDb",oP=1,vl="firebaseLocalStorage",Iv="fbase_key";class Jo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tc(t,e){return t.transaction([vl],e?"readwrite":"readonly").objectStore(vl)}function aP(){const t=indexedDB.deleteDatabase(Tv);return new Jo(t).toPromise()}function qu(){const t=indexedDB.open(Tv,oP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vl,{keyPath:Iv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vl)?e(r):(r.close(),await aP(),e(await qu()))})})}async function wm(t,e,n){const r=tc(t,!0).put({[Iv]:e,value:n});return new Jo(r).toPromise()}async function lP(t,e){const n=tc(t,!1).get(e),r=await new Jo(n).toPromise();return r===void 0?null:r.value}function bm(t,e){const n=tc(t,!0).delete(e);return new Jo(n).toPromise()}const cP=800,uP=3;class Av{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ec._getInstance(iP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rP(),!this.activeServiceWorker)return;this.sender=new tP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qu();return await wm(e,_l,"1"),await bm(e,_l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=tc(s,!1).getAll();return new Jo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Av.type="LOCAL";const hP=Av;new Yo(3e4,6e4);/**
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
 */function Sv(t,e){return e?Zn(e):(ge(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ud extends id{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dP(t){return gv(t.auth,new ud(t),t.bypassAuthState)}function fP(t){const{auth:e,user:n}=t;return ge(n,e,"internal-error"),US(n,new ud(t),t.bypassAuthState)}async function pP(t){const{auth:e,user:n}=t;return ge(n,e,"internal-error"),$S(n,new ud(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dP;case"linkViaPopup":case"linkViaRedirect":return pP;case"reauthViaPopup":case"reauthViaRedirect":return fP;default:hn(this.auth,"internal-error")}}resolve(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=new Yo(2e3,1e4);async function gP(t,e,n){if(Qt(t.app))return Promise.reject(yn(t,"operation-not-supported-in-this-environment"));const r=pr(t);HA(t,e,ad);const s=Sv(r,n);return new ys(r,"signInViaPopup",e,s).executeNotNull()}class ys extends Pv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ys.currentPopupAction&&ys.currentPopupAction.cancel(),ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){or(this.filter.length===1,"Popup operations only handle one event");const e=cd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mP.get())};e()}}ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP="pendingRedirect",Wa=new Map;class _P extends Pv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wa.get(this.auth._key());if(!e){try{const r=await vP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wa.set(this.auth._key(),e)}return this.bypassAuthState||Wa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vP(t,e){const n=bP(e),r=wP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function EP(t,e){Wa.set(t._key(),e)}function wP(t){return Zn(t._redirectPersistence)}function bP(t){return za(yP,t.config.apiKey,t.name)}async function TP(t,e,n=!1){if(Qt(t.app))return Promise.reject(tr(t));const r=pr(t),s=Sv(r,e),o=await new _P(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=10*60*1e3;class AP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Cv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tm(e))}saveEventToCache(e){this.cachedEventUids.add(Tm(e)),this.lastProcessedEventTime=Date.now()}}function Tm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Cv({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function SP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PP(t,e={}){return wn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RP=/^https?/;async function DP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PP(t);for(const n of e)try{if(kP(n))return}catch{}hn(t,"unauthorized-domain")}function kP(t){const e=ju(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!RP.test(n))return!1;if(CP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const OP=new Yo(3e4,6e4);function Im(){const t=On().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xP(t){return new Promise((e,n)=>{var r,s,i;function o(){Im(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Im(),n(yn(t,"network-request-failed"))},timeout:OP.get()})}if(!((s=(r=On().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=On().gapi)===null||i===void 0)&&i.load)o();else{const l=_S("iframefcb");return On()[l]=()=>{gapi.load?o():n(yn(t,"network-request-failed"))},dv(`${yS()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Ga=null,e})}let Ga=null;function NP(t){return Ga=Ga||xP(t),Ga}/**
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
 */const VP=new Yo(5e3,15e3),MP="__/auth/iframe",LP="emulator/auth/iframe",FP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$P=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UP(t){const e=t.config;ge(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nd(e,LP):`https://${t.config.authDomain}/${MP}`,r={apiKey:e.apiKey,appName:t.name,v:wi},s=$P.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ko(r).slice(1)}`}async function BP(t){const e=await NP(t),n=On().gapi;return ge(n,t,"internal-error"),e.open({where:document.body,url:UP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),l=On().setTimeout(()=>{i(o)},VP.get());function c(){On().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const jP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HP=500,qP=600,zP="_blank",WP="http://localhost";class Am{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GP(t,e,n,r=HP,s=qP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},jP),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Vt().toLowerCase();n&&(l=iv(u)?zP:n),rv(u)&&(e=e||WP,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[y,C])=>`${p}${y}=${C},`,"");if(lS(u)&&l!=="_self")return KP(e||"",l),new Am(null);const f=window.open(e||"",l,h);ge(f,t,"popup-blocked");try{f.focus()}catch{}return new Am(f)}function KP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const YP="__/auth/handler",QP="emulator/auth/handler",XP=encodeURIComponent("fac");async function Sm(t,e,n,r,s,i){ge(t.config.authDomain,t,"auth-domain-config-required"),ge(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wi,eventId:s};if(e instanceof ad){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",RI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Xo){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await t._getAppCheckToken(),u=c?`#${XP}=${encodeURIComponent(c)}`:"";return`${JP(t)}?${Ko(l).slice(1)}${u}`}function JP({config:t}){return t.emulator?nd(t,QP):`https://${t.authDomain}/${YP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="webStorageSupport";class ZP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wv,this._completeRedirectFn=TP,this._overrideRedirectResult=EP}async _openPopup(e,n,r,s){var i;or((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Sm(e,n,r,ju(),s);return GP(e,o,cd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Sm(e,n,r,ju(),s);return nP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(or(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BP(e),r=new AP(e);return n.register("authEvent",s=>(ge(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(au,{type:au},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[au];o!==void 0&&n(!!o),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uv()||sv()||sd()}}const eC=ZP;var Pm="@firebase/auth",Cm="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rC(t){ui(new As("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ge(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hv(t)},u=new pS(r,s,i,c);return IS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ui(new As("auth-internal",e=>{const n=pr(e.getProvider("auth").getImmediate());return(r=>new tC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Br(Pm,Cm,nC(t)),Br(Pm,Cm,"esm2017")}/**
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
 */const sC=5*60,iC=B_("authIdTokenMaxAge")||sC;let Rm=null;const oC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iC)return;const s=n?.token;Rm!==s&&(Rm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function aC(t=G_()){const e=Jh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TS(t,{popupRedirectResolver:eC,persistence:[hP,ZS,wv]}),r=B_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=oC(i.toString());YS(n,o,()=>o(n.currentUser)),KS(n,l=>o(l))}}const s=$_("auth");return s&&AS(n,`http://${s}`),n}function lC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=yn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",lC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rC("Browser");var Dm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jr,Rv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,E){function w(){}w.prototype=E.prototype,A.D=E.prototype,A.prototype=new w,A.prototype.constructor=A,A.C=function(S,b,T){for(var I=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)I[Ce-2]=arguments[Ce];return E.prototype[b].apply(S,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,E,w){w||(w=0);var S=Array(16);if(typeof E=="string")for(var b=0;16>b;++b)S[b]=E.charCodeAt(w++)|E.charCodeAt(w++)<<8|E.charCodeAt(w++)<<16|E.charCodeAt(w++)<<24;else for(b=0;16>b;++b)S[b]=E[w++]|E[w++]<<8|E[w++]<<16|E[w++]<<24;E=A.g[0],w=A.g[1],b=A.g[2];var T=A.g[3],I=E+(T^w&(b^T))+S[0]+3614090360&4294967295;E=w+(I<<7&4294967295|I>>>25),I=T+(b^E&(w^b))+S[1]+3905402710&4294967295,T=E+(I<<12&4294967295|I>>>20),I=b+(w^T&(E^w))+S[2]+606105819&4294967295,b=T+(I<<17&4294967295|I>>>15),I=w+(E^b&(T^E))+S[3]+3250441966&4294967295,w=b+(I<<22&4294967295|I>>>10),I=E+(T^w&(b^T))+S[4]+4118548399&4294967295,E=w+(I<<7&4294967295|I>>>25),I=T+(b^E&(w^b))+S[5]+1200080426&4294967295,T=E+(I<<12&4294967295|I>>>20),I=b+(w^T&(E^w))+S[6]+2821735955&4294967295,b=T+(I<<17&4294967295|I>>>15),I=w+(E^b&(T^E))+S[7]+4249261313&4294967295,w=b+(I<<22&4294967295|I>>>10),I=E+(T^w&(b^T))+S[8]+1770035416&4294967295,E=w+(I<<7&4294967295|I>>>25),I=T+(b^E&(w^b))+S[9]+2336552879&4294967295,T=E+(I<<12&4294967295|I>>>20),I=b+(w^T&(E^w))+S[10]+4294925233&4294967295,b=T+(I<<17&4294967295|I>>>15),I=w+(E^b&(T^E))+S[11]+2304563134&4294967295,w=b+(I<<22&4294967295|I>>>10),I=E+(T^w&(b^T))+S[12]+1804603682&4294967295,E=w+(I<<7&4294967295|I>>>25),I=T+(b^E&(w^b))+S[13]+4254626195&4294967295,T=E+(I<<12&4294967295|I>>>20),I=b+(w^T&(E^w))+S[14]+2792965006&4294967295,b=T+(I<<17&4294967295|I>>>15),I=w+(E^b&(T^E))+S[15]+1236535329&4294967295,w=b+(I<<22&4294967295|I>>>10),I=E+(b^T&(w^b))+S[1]+4129170786&4294967295,E=w+(I<<5&4294967295|I>>>27),I=T+(w^b&(E^w))+S[6]+3225465664&4294967295,T=E+(I<<9&4294967295|I>>>23),I=b+(E^w&(T^E))+S[11]+643717713&4294967295,b=T+(I<<14&4294967295|I>>>18),I=w+(T^E&(b^T))+S[0]+3921069994&4294967295,w=b+(I<<20&4294967295|I>>>12),I=E+(b^T&(w^b))+S[5]+3593408605&4294967295,E=w+(I<<5&4294967295|I>>>27),I=T+(w^b&(E^w))+S[10]+38016083&4294967295,T=E+(I<<9&4294967295|I>>>23),I=b+(E^w&(T^E))+S[15]+3634488961&4294967295,b=T+(I<<14&4294967295|I>>>18),I=w+(T^E&(b^T))+S[4]+3889429448&4294967295,w=b+(I<<20&4294967295|I>>>12),I=E+(b^T&(w^b))+S[9]+568446438&4294967295,E=w+(I<<5&4294967295|I>>>27),I=T+(w^b&(E^w))+S[14]+3275163606&4294967295,T=E+(I<<9&4294967295|I>>>23),I=b+(E^w&(T^E))+S[3]+4107603335&4294967295,b=T+(I<<14&4294967295|I>>>18),I=w+(T^E&(b^T))+S[8]+1163531501&4294967295,w=b+(I<<20&4294967295|I>>>12),I=E+(b^T&(w^b))+S[13]+2850285829&4294967295,E=w+(I<<5&4294967295|I>>>27),I=T+(w^b&(E^w))+S[2]+4243563512&4294967295,T=E+(I<<9&4294967295|I>>>23),I=b+(E^w&(T^E))+S[7]+1735328473&4294967295,b=T+(I<<14&4294967295|I>>>18),I=w+(T^E&(b^T))+S[12]+2368359562&4294967295,w=b+(I<<20&4294967295|I>>>12),I=E+(w^b^T)+S[5]+4294588738&4294967295,E=w+(I<<4&4294967295|I>>>28),I=T+(E^w^b)+S[8]+2272392833&4294967295,T=E+(I<<11&4294967295|I>>>21),I=b+(T^E^w)+S[11]+1839030562&4294967295,b=T+(I<<16&4294967295|I>>>16),I=w+(b^T^E)+S[14]+4259657740&4294967295,w=b+(I<<23&4294967295|I>>>9),I=E+(w^b^T)+S[1]+2763975236&4294967295,E=w+(I<<4&4294967295|I>>>28),I=T+(E^w^b)+S[4]+1272893353&4294967295,T=E+(I<<11&4294967295|I>>>21),I=b+(T^E^w)+S[7]+4139469664&4294967295,b=T+(I<<16&4294967295|I>>>16),I=w+(b^T^E)+S[10]+3200236656&4294967295,w=b+(I<<23&4294967295|I>>>9),I=E+(w^b^T)+S[13]+681279174&4294967295,E=w+(I<<4&4294967295|I>>>28),I=T+(E^w^b)+S[0]+3936430074&4294967295,T=E+(I<<11&4294967295|I>>>21),I=b+(T^E^w)+S[3]+3572445317&4294967295,b=T+(I<<16&4294967295|I>>>16),I=w+(b^T^E)+S[6]+76029189&4294967295,w=b+(I<<23&4294967295|I>>>9),I=E+(w^b^T)+S[9]+3654602809&4294967295,E=w+(I<<4&4294967295|I>>>28),I=T+(E^w^b)+S[12]+3873151461&4294967295,T=E+(I<<11&4294967295|I>>>21),I=b+(T^E^w)+S[15]+530742520&4294967295,b=T+(I<<16&4294967295|I>>>16),I=w+(b^T^E)+S[2]+3299628645&4294967295,w=b+(I<<23&4294967295|I>>>9),I=E+(b^(w|~T))+S[0]+4096336452&4294967295,E=w+(I<<6&4294967295|I>>>26),I=T+(w^(E|~b))+S[7]+1126891415&4294967295,T=E+(I<<10&4294967295|I>>>22),I=b+(E^(T|~w))+S[14]+2878612391&4294967295,b=T+(I<<15&4294967295|I>>>17),I=w+(T^(b|~E))+S[5]+4237533241&4294967295,w=b+(I<<21&4294967295|I>>>11),I=E+(b^(w|~T))+S[12]+1700485571&4294967295,E=w+(I<<6&4294967295|I>>>26),I=T+(w^(E|~b))+S[3]+2399980690&4294967295,T=E+(I<<10&4294967295|I>>>22),I=b+(E^(T|~w))+S[10]+4293915773&4294967295,b=T+(I<<15&4294967295|I>>>17),I=w+(T^(b|~E))+S[1]+2240044497&4294967295,w=b+(I<<21&4294967295|I>>>11),I=E+(b^(w|~T))+S[8]+1873313359&4294967295,E=w+(I<<6&4294967295|I>>>26),I=T+(w^(E|~b))+S[15]+4264355552&4294967295,T=E+(I<<10&4294967295|I>>>22),I=b+(E^(T|~w))+S[6]+2734768916&4294967295,b=T+(I<<15&4294967295|I>>>17),I=w+(T^(b|~E))+S[13]+1309151649&4294967295,w=b+(I<<21&4294967295|I>>>11),I=E+(b^(w|~T))+S[4]+4149444226&4294967295,E=w+(I<<6&4294967295|I>>>26),I=T+(w^(E|~b))+S[11]+3174756917&4294967295,T=E+(I<<10&4294967295|I>>>22),I=b+(E^(T|~w))+S[2]+718787259&4294967295,b=T+(I<<15&4294967295|I>>>17),I=w+(T^(b|~E))+S[9]+3951481745&4294967295,A.g[0]=A.g[0]+E&4294967295,A.g[1]=A.g[1]+(b+(I<<21&4294967295|I>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+T&4294967295}r.prototype.u=function(A,E){E===void 0&&(E=A.length);for(var w=E-this.blockSize,S=this.B,b=this.h,T=0;T<E;){if(b==0)for(;T<=w;)s(this,A,T),T+=this.blockSize;if(typeof A=="string"){for(;T<E;)if(S[b++]=A.charCodeAt(T++),b==this.blockSize){s(this,S),b=0;break}}else for(;T<E;)if(S[b++]=A[T++],b==this.blockSize){s(this,S),b=0;break}}this.h=b,this.o+=E},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var E=1;E<A.length-8;++E)A[E]=0;var w=8*this.o;for(E=A.length-8;E<A.length;++E)A[E]=w&255,w/=256;for(this.u(A),A=Array(16),E=w=0;4>E;++E)for(var S=0;32>S;S+=8)A[w++]=this.g[E]>>>S&255;return A};function i(A,E){var w=l;return Object.prototype.hasOwnProperty.call(w,A)?w[A]:w[A]=E(A)}function o(A,E){this.h=E;for(var w=[],S=!0,b=A.length-1;0<=b;b--){var T=A[b]|0;S&&T==E||(w[b]=T,S=!1)}this.g=w}var l={};function c(A){return-128<=A&&128>A?i(A,function(E){return new o([E|0],0>E?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return f;if(0>A)return M(u(-A));for(var E=[],w=1,S=0;A>=w;S++)E[S]=A/w|0,w*=4294967296;return new o(E,0)}function h(A,E){if(A.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(A.charAt(0)=="-")return M(h(A.substring(1),E));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(E,8)),S=f,b=0;b<A.length;b+=8){var T=Math.min(8,A.length-b),I=parseInt(A.substring(b,b+T),E);8>T?(T=u(Math.pow(E,T)),S=S.j(T).add(u(I))):(S=S.j(w),S=S.add(u(I)))}return S}var f=c(0),p=c(1),y=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-M(this).m();for(var A=0,E=1,w=0;w<this.g.length;w++){var S=this.i(w);A+=(0<=S?S:4294967296+S)*E,E*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(C(this))return"0";if(O(this))return"-"+M(this).toString(A);for(var E=u(Math.pow(A,6)),w=this,S="";;){var b=U(w,E).g;w=x(w,b.j(E));var T=((0<w.g.length?w.g[0]:w.h)>>>0).toString(A);if(w=b,C(w))return T+S;for(;6>T.length;)T="0"+T;S=T+S}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function C(A){if(A.h!=0)return!1;for(var E=0;E<A.g.length;E++)if(A.g[E]!=0)return!1;return!0}function O(A){return A.h==-1}t.l=function(A){return A=x(this,A),O(A)?-1:C(A)?0:1};function M(A){for(var E=A.g.length,w=[],S=0;S<E;S++)w[S]=~A.g[S];return new o(w,~A.h).add(p)}t.abs=function(){return O(this)?M(this):this},t.add=function(A){for(var E=Math.max(this.g.length,A.g.length),w=[],S=0,b=0;b<=E;b++){var T=S+(this.i(b)&65535)+(A.i(b)&65535),I=(T>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);S=I>>>16,T&=65535,I&=65535,w[b]=I<<16|T}return new o(w,w[w.length-1]&-2147483648?-1:0)};function x(A,E){return A.add(M(E))}t.j=function(A){if(C(this)||C(A))return f;if(O(this))return O(A)?M(this).j(M(A)):M(M(this).j(A));if(O(A))return M(this.j(M(A)));if(0>this.l(y)&&0>A.l(y))return u(this.m()*A.m());for(var E=this.g.length+A.g.length,w=[],S=0;S<2*E;S++)w[S]=0;for(S=0;S<this.g.length;S++)for(var b=0;b<A.g.length;b++){var T=this.i(S)>>>16,I=this.i(S)&65535,Ce=A.i(b)>>>16,Ue=A.i(b)&65535;w[2*S+2*b]+=I*Ue,k(w,2*S+2*b),w[2*S+2*b+1]+=T*Ue,k(w,2*S+2*b+1),w[2*S+2*b+1]+=I*Ce,k(w,2*S+2*b+1),w[2*S+2*b+2]+=T*Ce,k(w,2*S+2*b+2)}for(S=0;S<E;S++)w[S]=w[2*S+1]<<16|w[2*S];for(S=E;S<2*E;S++)w[S]=0;return new o(w,0)};function k(A,E){for(;(A[E]&65535)!=A[E];)A[E+1]+=A[E]>>>16,A[E]&=65535,E++}function L(A,E){this.g=A,this.h=E}function U(A,E){if(C(E))throw Error("division by zero");if(C(A))return new L(f,f);if(O(A))return E=U(M(A),E),new L(M(E.g),M(E.h));if(O(E))return E=U(A,M(E)),new L(M(E.g),E.h);if(30<A.g.length){if(O(A)||O(E))throw Error("slowDivide_ only works with positive integers.");for(var w=p,S=E;0>=S.l(A);)w=F(w),S=F(S);var b=W(w,1),T=W(S,1);for(S=W(S,2),w=W(w,2);!C(S);){var I=T.add(S);0>=I.l(A)&&(b=b.add(w),T=I),S=W(S,1),w=W(w,1)}return E=x(A,b.j(E)),new L(b,E)}for(b=f;0<=A.l(E);){for(w=Math.max(1,Math.floor(A.m()/E.m())),S=Math.ceil(Math.log(w)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),T=u(w),I=T.j(E);O(I)||0<I.l(A);)w-=S,T=u(w),I=T.j(E);C(T)&&(T=p),b=b.add(T),A=x(A,I)}return new L(b,A)}t.A=function(A){return U(this,A).h},t.and=function(A){for(var E=Math.max(this.g.length,A.g.length),w=[],S=0;S<E;S++)w[S]=this.i(S)&A.i(S);return new o(w,this.h&A.h)},t.or=function(A){for(var E=Math.max(this.g.length,A.g.length),w=[],S=0;S<E;S++)w[S]=this.i(S)|A.i(S);return new o(w,this.h|A.h)},t.xor=function(A){for(var E=Math.max(this.g.length,A.g.length),w=[],S=0;S<E;S++)w[S]=this.i(S)^A.i(S);return new o(w,this.h^A.h)};function F(A){for(var E=A.g.length+1,w=[],S=0;S<E;S++)w[S]=A.i(S)<<1|A.i(S-1)>>>31;return new o(w,A.h)}function W(A,E){var w=E>>5;E%=32;for(var S=A.g.length-w,b=[],T=0;T<S;T++)b[T]=0<E?A.i(T+w)>>>E|A.i(T+w+1)<<32-E:A.i(T+w);return new o(b,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Rv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,jr=o}).apply(typeof Dm<"u"?Dm:typeof self<"u"?self:typeof window<"u"?window:{});var ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dv,Qi,kv,Ka,zu,Ov,xv,Nv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,m){return a==Array.prototype||a==Object.prototype||(a[d]=m.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ka=="object"&&ka];for(var d=0;d<a.length;++d){var m=a[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var m=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var V=a[v];if(!(V in m))break e;m=m[V]}a=a[a.length-1],v=m[a],d=d(v),d!=v&&d!=null&&e(m,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var m=0,v=!1,V={next:function(){if(!v&&m<a.length){var $=m++;return{value:d($,a[$]),done:!1}}return v=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,m){return a.call.apply(a.bind,arguments)}function f(a,d,m){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,v),a.apply(d,V)}}return function(){return a.apply(d,arguments)}}function p(a,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function y(a,d){var m=Array.prototype.slice.call(arguments,1);return function(){var v=m.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function C(a,d){function m(){}m.prototype=d.prototype,a.aa=d.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(v,V,$){for(var ee=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)ee[ze-2]=arguments[ze];return d.prototype[V].apply(v,ee)}}function O(a){const d=a.length;if(0<d){const m=Array(d);for(let v=0;v<d;v++)m[v]=a[v];return m}return[]}function M(a,d){for(let m=1;m<arguments.length;m++){const v=arguments[m];if(c(v)){const V=a.length||0,$=v.length||0;a.length=V+$;for(let ee=0;ee<$;ee++)a[V+ee]=v[ee]}else a.push(v)}}class x{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function k(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function U(a){return U[" "](a),a}U[" "]=function(){};var F=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function W(a,d,m){for(const v in a)d.call(m,a[v],v,a)}function A(a,d){for(const m in a)d.call(void 0,a[m],m,a)}function E(a){const d={};for(const m in a)d[m]=a[m];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,d){let m,v;for(let V=1;V<arguments.length;V++){v=arguments[V];for(m in v)a[m]=v[m];for(let $=0;$<w.length;$++)m=w[$],Object.prototype.hasOwnProperty.call(v,m)&&(a[m]=v[m])}}function b(a){var d=1;a=a.split(":");const m=[];for(;0<d&&a.length;)m.push(a.shift()),d--;return a.length&&m.push(a.join(":")),m}function T(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Lt;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Ce{constructor(){this.h=this.g=null}add(d,m){const v=Ue.get();v.set(d,m),this.h?this.h.next=v:this.g=v,this.h=v}}var Ue=new x(()=>new be,a=>a.reset());class be{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let me,Se=!1,Lt=new Ce,fn=()=>{const a=l.Promise.resolve(void 0);me=()=>{a.then(tn)}};var tn=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(m){T(m)}var d=Ue;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}Se=!1};function Je(){this.s=this.s,this.C=this.C}Je.prototype.s=!1,Je.prototype.ma=function(){this.s||(this.s=!0,this.N())},Je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ze(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};var yr=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};l.addEventListener("test",m,d),l.removeEventListener("test",m,d)}catch{}return a}();function bn(a,d){if(Ze.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(F){e:{try{U(d.nodeName);var V=!0;break e}catch{}V=!1}V||(d=null)}}else m=="mouseover"?d=a.fromElement:m=="mouseout"&&(d=a.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:qt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&bn.aa.h.call(this)}}C(bn,Ze);var qt={2:"touch",3:"pen",4:"mouse"};bn.prototype.h=function(){bn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),oe=0;function se(a,d,m,v,V){this.listener=a,this.proxy=null,this.src=d,this.type=m,this.capture=!!v,this.ha=V,this.key=++oe,this.da=this.fa=!1}function ae(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Fe(a){this.src=a,this.g={},this.h=0}Fe.prototype.add=function(a,d,m,v,V){var $=a.toString();a=this.g[$],a||(a=this.g[$]=[],this.h++);var ee=D(a,d,v,V);return-1<ee?(d=a[ee],m||(d.fa=!1)):(d=new se(d,this.src,$,!!v,V),d.fa=m,a.push(d)),d};function P(a,d){var m=d.type;if(m in a.g){var v=a.g[m],V=Array.prototype.indexOf.call(v,d,void 0),$;($=0<=V)&&Array.prototype.splice.call(v,V,1),$&&(ae(d),a.g[m].length==0&&(delete a.g[m],a.h--))}}function D(a,d,m,v){for(var V=0;V<a.length;++V){var $=a[V];if(!$.da&&$.listener==d&&$.capture==!!m&&$.ha==v)return V}return-1}var N="closure_lm_"+(1e6*Math.random()|0),H={};function G(a,d,m,v,V){if(Array.isArray(d)){for(var $=0;$<d.length;$++)G(a,d[$],m,v,V);return null}return m=_e(m),a&&a[j]?a.K(d,m,u(v)?!!v.capture:!1,V):q(a,d,m,!1,v,V)}function q(a,d,m,v,V,$){if(!d)throw Error("Invalid event type");var ee=u(V)?!!V.capture:!!V,ze=te(a);if(ze||(a[N]=ze=new Fe(a)),m=ze.add(d,m,v,ee,$),m.proxy)return m;if(v=ne(),m.proxy=v,v.src=a,v.listener=m,a.addEventListener)yr||(V=ee),V===void 0&&(V=!1),a.addEventListener(d.toString(),v,V);else if(a.attachEvent)a.attachEvent(Q(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return m}function ne(){function a(m){return d.call(a.src,a.listener,m)}const d=ue;return a}function Z(a,d,m,v,V){if(Array.isArray(d))for(var $=0;$<d.length;$++)Z(a,d[$],m,v,V);else v=u(v)?!!v.capture:!!v,m=_e(m),a&&a[j]?(a=a.i,d=String(d).toString(),d in a.g&&($=a.g[d],m=D($,m,v,V),-1<m&&(ae($[m]),Array.prototype.splice.call($,m,1),$.length==0&&(delete a.g[d],a.h--)))):a&&(a=te(a))&&(d=a.g[d.toString()],a=-1,d&&(a=D(d,m,v,V)),(m=-1<a?d[a]:null)&&J(m))}function J(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[j])P(d.i,a);else{var m=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(m,v,a.capture):d.detachEvent?d.detachEvent(Q(m),v):d.addListener&&d.removeListener&&d.removeListener(v),(m=te(d))?(P(m,a),m.h==0&&(m.src=null,d[N]=null)):ae(a)}}}function Q(a){return a in H?H[a]:H[a]="on"+a}function ue(a,d){if(a.da)a=!0;else{d=new bn(d,this);var m=a.listener,v=a.ha||a.src;a.fa&&J(a),a=m.call(v,d)}return a}function te(a){return a=a[N],a instanceof Fe?a:null}var le="__closure_events_fn_"+(1e9*Math.random()>>>0);function _e(a){return typeof a=="function"?a:(a[le]||(a[le]=function(d){return a.handleEvent(d)}),a[le])}function pe(){Je.call(this),this.i=new Fe(this),this.M=this,this.F=null}C(pe,Je),pe.prototype[j]=!0,pe.prototype.removeEventListener=function(a,d,m,v){Z(this,a,d,m,v)};function Ie(a,d){var m,v=a.F;if(v)for(m=[];v;v=v.F)m.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new Ze(d,a);else if(d instanceof Ze)d.target=d.target||a;else{var V=d;d=new Ze(v,a),S(d,V)}if(V=!0,m)for(var $=m.length-1;0<=$;$--){var ee=d.g=m[$];V=Ve(ee,v,!0,d)&&V}if(ee=d.g=a,V=Ve(ee,v,!0,d)&&V,V=Ve(ee,v,!1,d)&&V,m)for($=0;$<m.length;$++)ee=d.g=m[$],V=Ve(ee,v,!1,d)&&V}pe.prototype.N=function(){if(pe.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var m=a.g[d],v=0;v<m.length;v++)ae(m[v]);delete a.g[d],a.h--}}this.F=null},pe.prototype.K=function(a,d,m,v){return this.i.add(String(a),d,!1,m,v)},pe.prototype.L=function(a,d,m,v){return this.i.add(String(a),d,!0,m,v)};function Ve(a,d,m,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var V=!0,$=0;$<d.length;++$){var ee=d[$];if(ee&&!ee.da&&ee.capture==m){var ze=ee.listener,Et=ee.ha||ee.src;ee.fa&&P(a.i,ee),V=ze.call(Et,v)!==!1&&V}}return V&&!v.defaultPrevented}function yt(a,d,m){if(typeof a=="function")m&&(a=p(a,m));else if(a&&typeof a.handleEvent=="function")a=p(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function _t(a){a.g=yt(()=>{a.g=null,a.i&&(a.i=!1,_t(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class nn extends Je{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:_t(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function St(a){Je.call(this),this.h=a,this.g={}}C(St,Je);var _r=[];function Ri(a){W(a.g,function(d,m){this.g.hasOwnProperty(m)&&J(d)},a),a.g={}}St.prototype.N=function(){St.aa.N.call(this),Ri(this)},St.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vt=l.JSON.stringify,rn=l.JSON.parse,ua=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ac(){}Ac.prototype.h=null;function sf(a){return a.h||(a.h=a.i())}function of(){}var Di={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sc(){Ze.call(this,"d")}C(Sc,Ze);function Pc(){Ze.call(this,"c")}C(Pc,Ze);var os={},af=null;function ha(){return af=af||new pe}os.La="serverreachability";function lf(a){Ze.call(this,os.La,a)}C(lf,Ze);function ki(a){const d=ha();Ie(d,new lf(d))}os.STAT_EVENT="statevent";function cf(a,d){Ze.call(this,os.STAT_EVENT,a),this.stat=d}C(cf,Ze);function Ft(a){const d=ha();Ie(d,new cf(d,a))}os.Ma="timingevent";function uf(a,d){Ze.call(this,os.Ma,a),this.size=d}C(uf,Ze);function Oi(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function xi(){this.g=!0}xi.prototype.xa=function(){this.g=!1};function Kw(a,d,m,v,V,$){a.info(function(){if(a.g)if($)for(var ee="",ze=$.split("&"),Et=0;Et<ze.length;Et++){var $e=ze[Et].split("=");if(1<$e.length){var Pt=$e[0];$e=$e[1];var Ct=Pt.split("_");ee=2<=Ct.length&&Ct[1]=="type"?ee+(Pt+"="+$e+"&"):ee+(Pt+"=redacted&")}}else ee=null;else ee=$;return"XMLHTTP REQ ("+v+") [attempt "+V+"]: "+d+`
`+m+`
`+ee})}function Yw(a,d,m,v,V,$,ee){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+V+"]: "+d+`
`+m+`
`+$+" "+ee})}function Fs(a,d,m,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Xw(a,m)+(v?" "+v:"")})}function Qw(a,d){a.info(function(){return"TIMEOUT: "+d})}xi.prototype.info=function(){};function Xw(a,d){if(!a.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var v=m[a];if(!(2>v.length)){var V=v[1];if(Array.isArray(V)&&!(1>V.length)){var $=V[0];if($!="noop"&&$!="stop"&&$!="close")for(var ee=1;ee<V.length;ee++)V[ee]=""}}}}return vt(m)}catch{return d}}var da={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},hf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cc;function fa(){}C(fa,Ac),fa.prototype.g=function(){return new XMLHttpRequest},fa.prototype.i=function(){return{}},Cc=new fa;function vr(a,d,m,v){this.j=a,this.i=d,this.l=m,this.R=v||1,this.U=new St(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new df}function df(){this.i=null,this.g="",this.h=!1}var ff={},Rc={};function Dc(a,d,m){a.L=1,a.v=ya(jn(d)),a.m=m,a.P=!0,pf(a,null)}function pf(a,d){a.F=Date.now(),pa(a),a.A=jn(a.v);var m=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),Cf(m.i,"t",v),a.C=0,m=a.j.J,a.h=new df,a.g=Wf(a.j,m?d:null,!a.m),0<a.O&&(a.M=new nn(p(a.Y,a,a.g),a.O)),d=a.U,m=a.g,v=a.ca;var V="readystatechange";Array.isArray(V)||(V&&(_r[0]=V.toString()),V=_r);for(var $=0;$<V.length;$++){var ee=G(m,V[$],v||d.handleEvent,!1,d.h||d);if(!ee)break;d.g[ee.key]=ee}d=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),ki(),Kw(a.i,a.u,a.A,a.l,a.R,a.m)}vr.prototype.ca=function(a){a=a.target;const d=this.M;d&&Hn(a)==3?d.j():this.Y(a)},vr.prototype.Y=function(a){try{if(a==this.g)e:{const Ct=Hn(this.g);var d=this.g.Ba();const Bs=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||Vf(this.g)))){this.J||Ct!=4||d==7||(d==8||0>=Bs?ki(3):ki(2)),kc(this);var m=this.g.Z();this.X=m;t:if(mf(this)){var v=Vf(this.g);a="";var V=v.length,$=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){as(this),Ni(this);var ee="";break t}this.h.i=new l.TextDecoder}for(d=0;d<V;d++)this.h.h=!0,a+=this.h.i.decode(v[d],{stream:!($&&d==V-1)});v.length=0,this.h.g+=a,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=m==200,Yw(this.i,this.u,this.A,this.l,this.R,Ct,m),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,Et=this.g;if((ze=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(ze)){var $e=ze;break t}}$e=null}if(m=$e)Fs(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oc(this,m);else{this.o=!1,this.s=3,Ft(12),as(this),Ni(this);break e}}if(this.P){m=!0;let pn;for(;!this.J&&this.C<ee.length;)if(pn=Jw(this,ee),pn==Rc){Ct==4&&(this.s=4,Ft(14),m=!1),Fs(this.i,this.l,null,"[Incomplete Response]");break}else if(pn==ff){this.s=4,Ft(15),Fs(this.i,this.l,ee,"[Invalid Chunk]"),m=!1;break}else Fs(this.i,this.l,pn,null),Oc(this,pn);if(mf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||ee.length!=0||this.h.h||(this.s=1,Ft(16),m=!1),this.o=this.o&&m,!m)Fs(this.i,this.l,ee,"[Invalid Chunked Response]"),as(this),Ni(this);else if(0<ee.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),Fc(Pt),Pt.M=!0,Ft(11))}}else Fs(this.i,this.l,ee,null),Oc(this,ee);Ct==4&&as(this),this.o&&!this.J&&(Ct==4?jf(this.j,this):(this.o=!1,pa(this)))}else mb(this.g),m==400&&0<ee.indexOf("Unknown SID")?(this.s=3,Ft(12)):(this.s=0,Ft(13)),as(this),Ni(this)}}}catch{}finally{}};function mf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Jw(a,d){var m=a.C,v=d.indexOf(`
`,m);return v==-1?Rc:(m=Number(d.substring(m,v)),isNaN(m)?ff:(v+=1,v+m>d.length?Rc:(d=d.slice(v,v+m),a.C=v+m,d)))}vr.prototype.cancel=function(){this.J=!0,as(this)};function pa(a){a.S=Date.now()+a.I,gf(a,a.I)}function gf(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Oi(p(a.ba,a),d)}function kc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}vr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Qw(this.i,this.A),this.L!=2&&(ki(),Ft(17)),as(this),this.s=2,Ni(this)):gf(this,this.S-a)};function Ni(a){a.j.G==0||a.J||jf(a.j,a)}function as(a){kc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Ri(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Oc(a,d){try{var m=a.j;if(m.G!=0&&(m.g==a||xc(m.h,a))){if(!a.K&&xc(m.h,a)&&m.G==3){try{var v=m.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var V=v;if(V[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)Ta(m),wa(m);else break e;Lc(m),Ft(18)}}else m.za=V[1],0<m.za-m.T&&37500>V[2]&&m.F&&m.v==0&&!m.C&&(m.C=Oi(p(m.Za,m),6e3));if(1>=vf(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else cs(m,11)}else if((a.K||m.g==a)&&Ta(m),!k(d))for(V=m.Da.g.parse(d),d=0;d<V.length;d++){let $e=V[d];if(m.T=$e[0],$e=$e[1],m.G==2)if($e[0]=="c"){m.K=$e[1],m.ia=$e[2];const Pt=$e[3];Pt!=null&&(m.la=Pt,m.j.info("VER="+m.la));const Ct=$e[4];Ct!=null&&(m.Aa=Ct,m.j.info("SVER="+m.Aa));const Bs=$e[5];Bs!=null&&typeof Bs=="number"&&0<Bs&&(v=1.5*Bs,m.L=v,m.j.info("backChannelRequestTimeoutMs_="+v)),v=m;const pn=a.g;if(pn){const Aa=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Aa){var $=v.h;$.g||Aa.indexOf("spdy")==-1&&Aa.indexOf("quic")==-1&&Aa.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Nc($,$.h),$.h=null))}if(v.D){const $c=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;$c&&(v.ya=$c,Qe(v.I,v.D,$c))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),v=m;var ee=a;if(v.qa=zf(v,v.J?v.ia:null,v.W),ee.K){Ef(v.h,ee);var ze=ee,Et=v.L;Et&&(ze.I=Et),ze.B&&(kc(ze),pa(ze)),v.g=ee}else Uf(v);0<m.i.length&&ba(m)}else $e[0]!="stop"&&$e[0]!="close"||cs(m,7);else m.G==3&&($e[0]=="stop"||$e[0]=="close"?$e[0]=="stop"?cs(m,7):Mc(m):$e[0]!="noop"&&m.l&&m.l.ta($e),m.v=0)}}ki(4)}catch{}}var Zw=class{constructor(a,d){this.g=a,this.map=d}};function yf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _f(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function vf(a){return a.h?1:a.g?a.g.size:0}function xc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Nc(a,d){a.g?a.g.add(d):a.h=d}function Ef(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}yf.prototype.cancel=function(){if(this.i=wf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function wf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const m of a.g.values())d=d.concat(m.D);return d}return O(a.i)}function eb(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var d=[],m=a.length,v=0;v<m;v++)d.push(a[v]);return d}d=[],m=0;for(v in a)d[m++]=a[v];return d}function tb(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var d=[];a=a.length;for(var m=0;m<a;m++)d.push(m);return d}d=[],m=0;for(const v in a)d[m++]=v;return d}}}function bf(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var m=tb(a),v=eb(a),V=v.length,$=0;$<V;$++)d.call(void 0,v[$],m&&m[$],a)}var Tf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nb(a,d){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var v=a[m].indexOf("="),V=null;if(0<=v){var $=a[m].substring(0,v);V=a[m].substring(v+1)}else $=a[m];d($,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function ls(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ls){this.h=a.h,ma(this,a.j),this.o=a.o,this.g=a.g,ga(this,a.s),this.l=a.l;var d=a.i,m=new Li;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),If(this,m),this.m=a.m}else a&&(d=String(a).match(Tf))?(this.h=!1,ma(this,d[1]||"",!0),this.o=Vi(d[2]||""),this.g=Vi(d[3]||"",!0),ga(this,d[4]),this.l=Vi(d[5]||"",!0),If(this,d[6]||"",!0),this.m=Vi(d[7]||"")):(this.h=!1,this.i=new Li(null,this.h))}ls.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Mi(d,Af,!0),":");var m=this.g;return(m||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Mi(d,Af,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(Mi(m,m.charAt(0)=="/"?ib:sb,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",Mi(m,ab)),a.join("")};function jn(a){return new ls(a)}function ma(a,d,m){a.j=m?Vi(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function ga(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function If(a,d,m){d instanceof Li?(a.i=d,lb(a.i,a.h)):(m||(d=Mi(d,ob)),a.i=new Li(d,a.h))}function Qe(a,d,m){a.i.set(d,m)}function ya(a){return Qe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Vi(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Mi(a,d,m){return typeof a=="string"?(a=encodeURI(a).replace(d,rb),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function rb(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Af=/[#\/\?@]/g,sb=/[#\?:]/g,ib=/[#\?]/g,ob=/[#\?@]/g,ab=/#/g;function Li(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Er(a){a.g||(a.g=new Map,a.h=0,a.i&&nb(a.i,function(d,m){a.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=Li.prototype,t.add=function(a,d){Er(this),this.i=null,a=$s(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(d),this.h+=1,this};function Sf(a,d){Er(a),d=$s(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Pf(a,d){return Er(a),d=$s(a,d),a.g.has(d)}t.forEach=function(a,d){Er(this),this.g.forEach(function(m,v){m.forEach(function(V){a.call(d,V,v,this)},this)},this)},t.na=function(){Er(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let v=0;v<d.length;v++){const V=a[v];for(let $=0;$<V.length;$++)m.push(d[v])}return m},t.V=function(a){Er(this);let d=[];if(typeof a=="string")Pf(this,a)&&(d=d.concat(this.g.get($s(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)d=d.concat(a[m])}return d},t.set=function(a,d){return Er(this),this.i=null,a=$s(this,a),Pf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Cf(a,d,m){Sf(a,d),0<m.length&&(a.i=null,a.g.set($s(a,d),O(m)),a.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var v=d[m];const $=encodeURIComponent(String(v)),ee=this.V(v);for(v=0;v<ee.length;v++){var V=$;ee[v]!==""&&(V+="="+encodeURIComponent(String(ee[v]))),a.push(V)}}return this.i=a.join("&")};function $s(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function lb(a,d){d&&!a.j&&(Er(a),a.i=null,a.g.forEach(function(m,v){var V=v.toLowerCase();v!=V&&(Sf(this,v),Cf(this,V,m))},a)),a.j=d}function cb(a,d){const m=new xi;if(l.Image){const v=new Image;v.onload=y(wr,m,"TestLoadImage: loaded",!0,d,v),v.onerror=y(wr,m,"TestLoadImage: error",!1,d,v),v.onabort=y(wr,m,"TestLoadImage: abort",!1,d,v),v.ontimeout=y(wr,m,"TestLoadImage: timeout",!1,d,v),l.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function ub(a,d){const m=new xi,v=new AbortController,V=setTimeout(()=>{v.abort(),wr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then($=>{clearTimeout(V),$.ok?wr(m,"TestPingServer: ok",!0,d):wr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(V),wr(m,"TestPingServer: error",!1,d)})}function wr(a,d,m,v,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),v(m)}catch{}}function hb(){this.g=new ua}function db(a,d,m){const v=m||"";try{bf(a,function(V,$){let ee=V;u(V)&&(ee=vt(V)),d.push(v+$+"="+encodeURIComponent(ee))})}catch(V){throw d.push(v+"type="+encodeURIComponent("_badmap")),V}}function _a(a){this.l=a.Ub||null,this.j=a.eb||!1}C(_a,Ac),_a.prototype.g=function(){return new va(this.l,this.j)},_a.prototype.i=function(a){return function(){return a}}({});function va(a,d){pe.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(va,pe),t=va.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,$i(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,$i(this)),this.g&&(this.readyState=3,$i(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Fi(this):$i(this),this.readyState==3&&Rf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Fi(this))},t.Qa=function(a){this.g&&(this.response=a,Fi(this))},t.ga=function(){this.g&&Fi(this)};function Fi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,$i(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=d.next();return a.join(`\r
`)};function $i(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(va.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Df(a){let d="";return W(a,function(m,v){d+=v,d+=":",d+=m,d+=`\r
`}),d}function Vc(a,d,m){e:{for(v in m){var v=!1;break e}v=!0}v||(m=Df(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):Qe(a,d,m))}function nt(a){pe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(nt,pe);var fb=/^https?$/i,pb=["POST","PUT"];t=nt.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,m,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cc.g(),this.v=this.o?sf(this.o):sf(Cc),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch($){kf(this,$);return}if(a=m||"",m=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var V in v)m.set(V,v[V]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const $ of v.keys())m.set($,v.get($));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(m.keys()).find($=>$.toLowerCase()=="content-type"),V=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(pb,d,void 0))||v||V||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ee]of m)this.g.setRequestHeader($,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Nf(this),this.u=!0,this.g.send(a),this.u=!1}catch($){kf(this,$)}};function kf(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Of(a),Ea(a)}function Of(a){a.A||(a.A=!0,Ie(a,"complete"),Ie(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ie(this,"complete"),Ie(this,"abort"),Ea(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ea(this,!0)),nt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?xf(this):this.bb())},t.bb=function(){xf(this)};function xf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Hn(a)!=4||a.Z()!=2)){if(a.u&&Hn(a)==4)yt(a.Ea,0,a);else if(Ie(a,"readystatechange"),Hn(a)==4){a.h=!1;try{const ee=a.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var v;if(v=ee===0){var V=String(a.D).match(Tf)[1]||null;!V&&l.self&&l.self.location&&(V=l.self.location.protocol.slice(0,-1)),v=!fb.test(V?V.toLowerCase():"")}m=v}if(m)Ie(a,"complete"),Ie(a,"success");else{a.m=6;try{var $=2<Hn(a)?a.g.statusText:""}catch{$=""}a.l=$+" ["+a.Z()+"]",Of(a)}}finally{Ea(a)}}}}function Ea(a,d){if(a.g){Nf(a);const m=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Ie(a,"ready");try{m.onreadystatechange=v}catch{}}}function Nf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Hn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),rn(d)}};function Vf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function mb(a){const d={};a=(a.g&&2<=Hn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(k(a[v]))continue;var m=b(a[v]);const V=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const $=d[V]||[];d[V]=$,$.push(m)}A(d,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ui(a,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||d}function Mf(a){this.Aa=0,this.i=[],this.j=new xi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ui("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ui("baseRetryDelayMs",5e3,a),this.cb=Ui("retryDelaySeedMs",1e4,a),this.Wa=Ui("forwardChannelMaxRetries",2,a),this.wa=Ui("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new yf(a&&a.concurrentRequestLimit),this.Da=new hb,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Mf.prototype,t.la=8,t.G=1,t.connect=function(a,d,m,v){Ft(0),this.W=a,this.H=d||{},m&&v!==void 0&&(this.H.OSID=m,this.H.OAID=v),this.F=this.X,this.I=zf(this,null,this.W),ba(this)};function Mc(a){if(Lf(a),a.G==3){var d=a.U++,m=jn(a.I);if(Qe(m,"SID",a.K),Qe(m,"RID",d),Qe(m,"TYPE","terminate"),Bi(a,m),d=new vr(a,a.j,d),d.L=2,d.v=ya(jn(m)),m=!1,l.navigator&&l.navigator.sendBeacon)try{m=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&l.Image&&(new Image().src=d.v,m=!0),m||(d.g=Wf(d.j,null),d.g.ea(d.v)),d.F=Date.now(),pa(d)}qf(a)}function wa(a){a.g&&(Fc(a),a.g.cancel(),a.g=null)}function Lf(a){wa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ta(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ba(a){if(!_f(a.h)&&!a.s){a.s=!0;var d=a.Ga;me||fn(),Se||(me(),Se=!0),Lt.add(d,a),a.B=0}}function gb(a,d){return vf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Oi(p(a.Ga,a,d),Hf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const V=new vr(this,this.j,a);let $=this.o;if(this.S&&($?($=E($),S($,this.S)):$=this.S),this.m!==null||this.O||(V.H=$,$=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var v=this.i[m];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=$f(this,V,d),m=jn(this.I),Qe(m,"RID",a),Qe(m,"CVER",22),this.D&&Qe(m,"X-HTTP-Session-Id",this.D),Bi(this,m),$&&(this.O?d="headers="+encodeURIComponent(String(Df($)))+"&"+d:this.m&&Vc(m,this.m,$)),Nc(this.h,V),this.Ua&&Qe(m,"TYPE","init"),this.P?(Qe(m,"$req",d),Qe(m,"SID","null"),V.T=!0,Dc(V,m,null)):Dc(V,m,d),this.G=2}}else this.G==3&&(a?Ff(this,a):this.i.length==0||_f(this.h)||Ff(this))};function Ff(a,d){var m;d?m=d.l:m=a.U++;const v=jn(a.I);Qe(v,"SID",a.K),Qe(v,"RID",m),Qe(v,"AID",a.T),Bi(a,v),a.m&&a.o&&Vc(v,a.m,a.o),m=new vr(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),d&&(a.i=d.D.concat(a.i)),d=$f(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Nc(a.h,m),Dc(m,v,d)}function Bi(a,d){a.H&&W(a.H,function(m,v){Qe(d,v,m)}),a.l&&bf({},function(m,v){Qe(d,v,m)})}function $f(a,d,m){m=Math.min(a.i.length,m);var v=a.l?p(a.l.Na,a.l,a):null;e:{var V=a.i;let $=-1;for(;;){const ee=["count="+m];$==-1?0<m?($=V[0].g,ee.push("ofs="+$)):$=0:ee.push("ofs="+$);let ze=!0;for(let Et=0;Et<m;Et++){let $e=V[Et].g;const Pt=V[Et].map;if($e-=$,0>$e)$=Math.max(0,V[Et].g-100),ze=!1;else try{db(Pt,ee,"req"+$e+"_")}catch{v&&v(Pt)}}if(ze){v=ee.join("&");break e}}}return a=a.i.splice(0,m),d.D=a,v}function Uf(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;me||fn(),Se||(me(),Se=!0),Lt.add(d,a),a.v=0}}function Lc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Oi(p(a.Fa,a),Hf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Bf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Oi(p(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ft(10),wa(this),Bf(this))};function Fc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Bf(a){a.g=new vr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=jn(a.qa);Qe(d,"RID","rpc"),Qe(d,"SID",a.K),Qe(d,"AID",a.T),Qe(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Qe(d,"TO",a.ja),Qe(d,"TYPE","xmlhttp"),Bi(a,d),a.m&&a.o&&Vc(d,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=ya(jn(d)),m.m=null,m.P=!0,pf(m,a)}t.Za=function(){this.C!=null&&(this.C=null,wa(this),Lc(this),Ft(19))};function Ta(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function jf(a,d){var m=null;if(a.g==d){Ta(a),Fc(a),a.g=null;var v=2}else if(xc(a.h,d))m=d.D,Ef(a.h,d),v=1;else return;if(a.G!=0){if(d.o)if(v==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var V=a.B;v=ha(),Ie(v,new uf(v,m)),ba(a)}else Uf(a);else if(V=d.s,V==3||V==0&&0<d.X||!(v==1&&gb(a,d)||v==2&&Lc(a)))switch(m&&0<m.length&&(d=a.h,d.i=d.i.concat(m)),V){case 1:cs(a,5);break;case 4:cs(a,10);break;case 3:cs(a,6);break;default:cs(a,2)}}}function Hf(a,d){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*d}function cs(a,d){if(a.j.info("Error code "+d),d==2){var m=p(a.fb,a),v=a.Xa;const V=!v;v=new ls(v||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ma(v,"https"),ya(v),V?cb(v.toString(),m):ub(v.toString(),m)}else Ft(2);a.G=0,a.l&&a.l.sa(d),qf(a),Lf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ft(2)):(this.j.info("Failed to ping google.com"),Ft(1))};function qf(a){if(a.G=0,a.ka=[],a.l){const d=wf(a.h);(d.length!=0||a.i.length!=0)&&(M(a.ka,d),M(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function zf(a,d,m){var v=m instanceof ls?jn(m):new ls(m);if(v.g!="")d&&(v.g=d+"."+v.g),ga(v,v.s);else{var V=l.location;v=V.protocol,d=d?d+"."+V.hostname:V.hostname,V=+V.port;var $=new ls(null);v&&ma($,v),d&&($.g=d),V&&ga($,V),m&&($.l=m),v=$}return m=a.D,d=a.ya,m&&d&&Qe(v,m,d),Qe(v,"VER",a.la),Bi(a,v),v}function Wf(a,d,m){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new nt(new _a({eb:m})):new nt(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gf(){}t=Gf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ia(){}Ia.prototype.g=function(a,d){return new Kt(a,d)};function Kt(a,d){pe.call(this),this.g=new Mf(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!k(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!k(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Us(this)}C(Kt,pe),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){Mc(this.g)},Kt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=vt(a),a=m);d.i.push(new Zw(d.Ya++,a)),d.G==3&&ba(d)},Kt.prototype.N=function(){this.g.l=null,delete this.j,Mc(this.g),delete this.g,Kt.aa.N.call(this)};function Kf(a){Sc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const m in d){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}C(Kf,Sc);function Yf(){Pc.call(this),this.status=1}C(Yf,Pc);function Us(a){this.g=a}C(Us,Gf),Us.prototype.ua=function(){Ie(this.g,"a")},Us.prototype.ta=function(a){Ie(this.g,new Kf(a))},Us.prototype.sa=function(a){Ie(this.g,new Yf)},Us.prototype.ra=function(){Ie(this.g,"b")},Ia.prototype.createWebChannel=Ia.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,Nv=function(){return new Ia},xv=function(){return ha()},Ov=os,zu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},da.NO_ERROR=0,da.TIMEOUT=8,da.HTTP_ERROR=6,Ka=da,hf.COMPLETE="complete",kv=hf,of.EventType=Di,Di.OPEN="a",Di.CLOSE="b",Di.ERROR="c",Di.MESSAGE="d",pe.prototype.listen=pe.prototype.K,Qi=of,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,Dv=nt}).apply(typeof ka<"u"?ka:typeof self<"u"?self:typeof window<"u"?window:{});const km="@firebase/firestore",Om="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}kt.UNAUTHENTICATED=new kt(null),kt.GOOGLE_CREDENTIALS=new kt("google-credentials-uid"),kt.FIRST_PARTY=new kt("first-party-uid"),kt.MOCK_USER=new kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new Qh("@firebase/firestore");function Ws(){return Cs.logLevel}function ie(t,...e){if(Cs.logLevel<=xe.DEBUG){const n=e.map(hd);Cs.debug(`Firestore (${Ti}): ${t}`,...n)}}function ar(t,...e){if(Cs.logLevel<=xe.ERROR){const n=e.map(hd);Cs.error(`Firestore (${Ti}): ${t}`,...n)}}function Wr(t,...e){if(Cs.logLevel<=xe.WARN){const n=e.map(hd);Cs.warn(`Firestore (${Ti}): ${t}`,...n)}}function hd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ye(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Vv(t,r,n)}function Vv(t,e,n){let r=`FIRESTORE (${Ti}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw ar(r),new Error(r)}function qe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Vv(e,s,r)}function we(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(kt.UNAUTHENTICATED))}shutdown(){}}class uC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hC{constructor(e){this.t=e,this.currentUser=kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){qe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new nr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(qe(typeof r.accessToken=="string",31837,{l:r}),new Mv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string",2055,{h:e}),new kt(e)}}class dC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=kt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class fC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new dC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Qt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){qe(this.o===void 0,3512);const r=i=>{i.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ie("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new xm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(qe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new xm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class dd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=mC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Pe(t,e){return t<e?-1:t>e?1:0}function Wu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Pe(r,s);{const i=Lv(),o=gC(i.encode(Nm(t,n)),i.encode(Nm(e,n)));return o!==0?o:Pe(r,s)}}n+=r>65535?2:1}return Pe(t.length,e.length)}function Nm(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function gC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Pe(t[n],e[n]);return Pe(t.length,e.length)}function di(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="__name__";class Sn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ye(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ye(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Sn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Sn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Sn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Pe(e.length,n.length)}static compareSegments(e,n){const r=Sn.isNumericId(e),s=Sn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Sn.extractNumericId(e).compare(Sn.extractNumericId(n)):Wu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return jr.fromString(e.substring(4,e.length-2))}}class Ye extends Sn{construct(e,n,r){return new Ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ye(n)}static emptyPath(){return new Ye([])}}const yC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends Sn{construct(e,n,r){return new Tt(e,n,r)}static isValidIdentifier(e){return yC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vm}static keyField(){return new Tt([Vm])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new re(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new re(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new re(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new re(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Ye.fromString(e))}static fromName(e){return new de(Ye.fromString(e).popFirst(5))}static empty(){return new de(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Ye(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(t,e,n){if(!n)throw new re(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _C(t,e,n,r){if(e===!0&&r===!0)throw new re(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mm(t){if(!de.isDocumentKey(t))throw new re(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lm(t){if(de.isDocumentKey(t))throw new re(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $v(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function nc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ye(12329,{type:typeof t})}function dn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nc(t);throw new re(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function ht(t,e){const n={typeString:t};return e&&(n.value=e),n}function Zo(t,e){if(!$v(t))throw new re(B.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new re(B.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=-62135596800,$m=1e6;class Re{static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*$m);return new Re(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Fm)throw new re(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$m}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Re._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Zo(e,Re._jsonSchema))return new Re(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Fm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Re._jsonSchemaVersion="firestore/timestamp/1.0",Re._jsonSchema={type:ht("string",Re._jsonSchemaVersion),seconds:ht("number"),nanoseconds:ht("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Re(0,0))}static max(){return new ve(new Re(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const No=-1;function vC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ve.fromTimestamp(r===1e9?new Re(n+1,0):new Re(n,r));return new Gr(s,de.empty(),e)}function EC(t){return new Gr(t.readTime,t.key,No)}class Gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gr(ve.min(),de.empty(),No)}static max(){return new Gr(ve.max(),de.empty(),No)}}function wC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=de.comparator(t.documentKey,e.documentKey),n!==0?n:Pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Ii(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==bC)throw t;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,r)=>{n(e)})}static reject(e){return new z((n,r)=>{r(e)})}static waitFor(e){return new z((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=z.resolve(!1);for(const r of e)n=n.next(s=>s?z.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new z((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++l,l===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new z((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function IC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ai(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class rc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}rc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=-1;function sc(t){return t==null}function El(t){return t===0&&1/t==-1/0}function AC(t){return typeof t=="number"&&Number.isInteger(t)&&!El(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class tt{constructor(e,n){this.comparator=e,this.root=n||wt.EMPTY}insert(e,n){return new tt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,wt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,wt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oa(this.root,e,this.comparator,!0)}}class Oa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class wt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??wt.RED,this.left=s??wt.EMPTY,this.right=i??wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new wt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return wt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}wt.EMPTY=null,wt.RED=!0,wt.BLACK=!1;wt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new wt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jm(this.data.getIterator())}getIteratorFrom(e){return new jm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class jm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new ft(Tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return di(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new jv("Invalid base64 string: "+i):i}}(e);return new It(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const CC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kr(t){if(qe(!!t,39018),typeof t=="string"){let e=0;const n=CC.exec(t);if(qe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ot(t.seconds),nanos:ot(t.nanos)}}function ot(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yr(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="server_timestamp",qv="__type__",zv="__previous_value__",Wv="__local_write_time__";function pd(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[qv])===null||n===void 0?void 0:n.stringValue)===Hv}function ic(t){const e=t.mapValue.fields[zv];return pd(e)?ic(e):e}function Vo(t){const e=Kr(t.mapValue.fields[Wv].timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n,r,s,i,o,l,c,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h}}const wl="(default)";class Mo{constructor(e,n){this.projectId=e,this.database=n||wl}static empty(){return new Mo("","")}get isDefaultDatabase(){return this.database===wl}isEqual(e){return e instanceof Mo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="__type__",DC="__max__",xa={mapValue:{}},Kv="__vector__",bl="value";function Qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pd(t)?4:OC(t)?9007199254740991:kC(t)?10:11:ye(28295,{value:t})}function $n(t,e){if(t===e)return!0;const n=Qr(t);if(n!==Qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vo(t).isEqual(Vo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Kr(s.timestampValue),l=Kr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Yr(s.bytesValue).isEqual(Yr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ot(s.geoPointValue.latitude)===ot(i.geoPointValue.latitude)&&ot(s.geoPointValue.longitude)===ot(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ot(s.integerValue)===ot(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ot(s.doubleValue),l=ot(i.doubleValue);return o===l?El(o)===El(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return di(t.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Bm(o)!==Bm(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!$n(o[c],l[c])))return!1;return!0}(t,e);default:return ye(52216,{left:t})}}function Lo(t,e){return(t.values||[]).find(n=>$n(n,e))!==void 0}function fi(t,e){if(t===e)return 0;const n=Qr(t),r=Qr(e);if(n!==r)return Pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ot(i.integerValue||i.doubleValue),c=ot(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Hm(t.timestampValue,e.timestampValue);case 4:return Hm(Vo(t),Vo(e));case 5:return Wu(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Yr(i),c=Yr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=Pe(l[u],c[u]);if(h!==0)return h}return Pe(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Pe(ot(i.latitude),ot(o.latitude));return l!==0?l:Pe(ot(i.longitude),ot(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return qm(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,h;const f=i.fields||{},p=o.fields||{},y=(l=f[bl])===null||l===void 0?void 0:l.arrayValue,C=(c=p[bl])===null||c===void 0?void 0:c.arrayValue,O=Pe(((u=y?.values)===null||u===void 0?void 0:u.length)||0,((h=C?.values)===null||h===void 0?void 0:h.length)||0);return O!==0?O:qm(y,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===xa.mapValue&&o===xa.mapValue)return 0;if(i===xa.mapValue)return 1;if(o===xa.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const p=Wu(c[f],h[f]);if(p!==0)return p;const y=fi(l[c[f]],u[h[f]]);if(y!==0)return y}return Pe(c.length,h.length)}(t.mapValue,e.mapValue);default:throw ye(23264,{le:n})}}function Hm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);const n=Kr(t),r=Kr(e),s=Pe(n.seconds,r.seconds);return s!==0?s:Pe(n.nanos,r.nanos)}function qm(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=fi(n[s],r[s]);if(i)return i}return Pe(n.length,r.length)}function pi(t){return Gu(t)}function Gu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return de.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Gu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Gu(n.fields[o])}`;return s+"}"}(t.mapValue):ye(61005,{value:t})}function Ya(t){switch(Qr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ic(t);return e?16+Ya(e):16;case 5:return 2*t.stringValue.length;case 6:return Yr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ya(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return rs(r.fields,(i,o)=>{s+=i.length+Ya(o)}),s}(t.mapValue);default:throw ye(13486,{value:t})}}function zm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ku(t){return!!t&&"integerValue"in t}function md(t){return!!t&&"arrayValue"in t}function Wm(t){return!!t&&"nullValue"in t}function Gm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qa(t){return!!t&&"mapValue"in t}function kC(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Gv])===null||n===void 0?void 0:n.stringValue)===Kv}function mo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return rs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=mo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function OC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===DC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mo(n)}setAll(e){let n=Tt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=mo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Qa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){rs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Gt(mo(this.value))}}function Yv(t){const e=[];return rs(t.fields,(n,r)=>{const s=new Tt([n]);if(Qa(r)){const i=Yv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Nt(e,0,ve.min(),ve.min(),ve.min(),Gt.empty(),0)}static newFoundDocument(e,n,r,s){return new Nt(e,1,n,ve.min(),r,s,0)}static newNoDocument(e,n){return new Nt(e,2,n,ve.min(),ve.min(),Gt.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,ve.min(),ve.min(),Gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tl{constructor(e,n){this.position=e,this.inclusive=n}}function Km(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=de.comparator(de.fromName(o.referenceValue),n.key):r=fi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ym(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Fo{constructor(e,n="asc"){this.field=e,this.dir=n}}function xC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Qv{}class ut extends Qv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new VC(e,n,r):n==="array-contains"?new FC(e,r):n==="in"?new $C(e,r):n==="not-in"?new UC(e,r):n==="array-contains-any"?new BC(e,r):new ut(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new MC(e,r):new LC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(fi(n,this.value)):n!==null&&Qr(this.value)===Qr(n)&&this.matchesComparison(fi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class En extends Qv{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new En(e,n)}matches(e){return Xv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Xv(t){return t.op==="and"}function Jv(t){return NC(t)&&Xv(t)}function NC(t){for(const e of t.filters)if(e instanceof En)return!1;return!0}function Yu(t){if(t instanceof ut)return t.field.canonicalString()+t.op.toString()+pi(t.value);if(Jv(t))return t.filters.map(e=>Yu(e)).join(",");{const e=t.filters.map(n=>Yu(n)).join(",");return`${t.op}(${e})`}}function Zv(t,e){return t instanceof ut?function(r,s){return s instanceof ut&&r.op===s.op&&r.field.isEqual(s.field)&&$n(r.value,s.value)}(t,e):t instanceof En?function(r,s){return s instanceof En&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Zv(o,s.filters[l]),!0):!1}(t,e):void ye(19439)}function eE(t){return t instanceof ut?function(n){return`${n.field.canonicalString()} ${n.op} ${pi(n.value)}`}(t):t instanceof En?function(n){return n.op.toString()+" {"+n.getFilters().map(eE).join(" ,")+"}"}(t):"Filter"}class VC extends ut{constructor(e,n,r){super(e,n,r),this.key=de.fromName(r.referenceValue)}matches(e){const n=de.comparator(e.key,this.key);return this.matchesComparison(n)}}class MC extends ut{constructor(e,n){super(e,"in",n),this.keys=tE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class LC extends ut{constructor(e,n){super(e,"not-in",n),this.keys=tE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>de.fromName(r.referenceValue))}class FC extends ut{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return md(n)&&Lo(n.arrayValue,this.value)}}class $C extends ut{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lo(this.value.arrayValue,n)}}class UC extends ut{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Lo(this.value.arrayValue,n)}}class BC extends ut{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!md(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Lo(this.value.arrayValue,r))}}/**
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
 */class jC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function Qm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new jC(t,e,n,r,s,i,o)}function gd(t){const e=we(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>pi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>pi(r)).join(",")),e.Pe=n}return e.Pe}function yd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Zv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ym(t.startAt,e.startAt)&&Ym(t.endAt,e.endAt)}function Qu(t){return de.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function HC(t,e,n,r,s,i,o,l){return new Si(t,e,n,r,s,i,o,l)}function _d(t){return new Si(t)}function Xm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function nE(t){return t.collectionGroup!==null}function go(t){const e=we(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ft(Tt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Fo(i,r))}),n.has(Tt.keyField().canonicalString())||e.Te.push(new Fo(Tt.keyField(),r))}return e.Te}function xn(t){const e=we(t);return e.Ie||(e.Ie=qC(e,go(t))),e.Ie}function qC(t,e){if(t.limitType==="F")return Qm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Fo(s.field,i)});const n=t.endAt?new Tl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Tl(t.startAt.position,t.startAt.inclusive):null;return Qm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Xu(t,e){const n=t.filters.concat([e]);return new Si(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ju(t,e,n){return new Si(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function oc(t,e){return yd(xn(t),xn(e))&&t.limitType===e.limitType}function rE(t){return`${gd(xn(t))}|lt:${t.limitType}`}function Gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>eE(s)).join(", ")}]`),sc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>pi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>pi(s)).join(",")),`Target(${r})`}(xn(t))}; limitType=${t.limitType})`}function ac(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):de.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of go(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=Km(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,go(r),s)||r.endAt&&!function(o,l,c){const u=Km(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,go(r),s))}(t,e)}function zC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sE(t){return(e,n)=>{let r=!1;for(const s of go(t)){const i=WC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function WC(t,e,n){const r=t.field.isKeyField()?de.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?fi(c,u):ye(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ye(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const GC=new tt(de.comparator);function lr(){return GC}const iE=new tt(de.comparator);function Xi(...t){let e=iE;for(const n of t)e=e.insert(n.key,n);return e}function oE(t){let e=iE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _s(){return yo()}function aE(){return yo()}function yo(){return new Ns(t=>t.toString(),(t,e)=>t.isEqual(e))}const KC=new tt(de.comparator),YC=new ft(de.comparator);function Ne(...t){let e=YC;for(const n of t)e=e.add(n);return e}const QC=new ft(Pe);function XC(){return QC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:El(e)?"-0":e}}function lE(t){return{integerValue:""+t}}function JC(t,e){return AC(e)?lE(e):vd(t,e)}/**
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
 */class lc{constructor(){this._=void 0}}function ZC(t,e,n){return t instanceof Il?function(s,i){const o={fields:{[qv]:{stringValue:Hv},[Wv]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&pd(i)&&(i=ic(i)),i&&(o.fields[zv]=i),{mapValue:o}}(n,e):t instanceof $o?uE(t,e):t instanceof Uo?hE(t,e):function(s,i){const o=cE(s,i),l=Jm(o)+Jm(s.Ee);return Ku(o)&&Ku(s.Ee)?lE(l):vd(s.serializer,l)}(t,e)}function eR(t,e,n){return t instanceof $o?uE(t,e):t instanceof Uo?hE(t,e):n}function cE(t,e){return t instanceof Al?function(r){return Ku(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Il extends lc{}class $o extends lc{constructor(e){super(),this.elements=e}}function uE(t,e){const n=dE(e);for(const r of t.elements)n.some(s=>$n(s,r))||n.push(r);return{arrayValue:{values:n}}}class Uo extends lc{constructor(e){super(),this.elements=e}}function hE(t,e){let n=dE(e);for(const r of t.elements)n=n.filter(s=>!$n(s,r));return{arrayValue:{values:n}}}class Al extends lc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Jm(t){return ot(t.integerValue||t.doubleValue)}function dE(t){return md(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function tR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof $o&&s instanceof $o||r instanceof Uo&&s instanceof Uo?di(r.elements,s.elements,$n):r instanceof Al&&s instanceof Al?$n(r.Ee,s.Ee):r instanceof Il&&s instanceof Il}(t.transform,e.transform)}class nR{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cc{}function fE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new uc(t.key,Ht.none()):new ea(t.key,t.data,Ht.none());{const n=t.data,r=Gt.empty();let s=new ft(Tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ss(t.key,r,new Jt(s.toArray()),Ht.none())}}function rR(t,e,n){t instanceof ea?function(s,i,o){const l=s.value.clone(),c=eg(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ss?function(s,i,o){if(!Xa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=eg(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(pE(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _o(t,e,n,r){return t instanceof ea?function(i,o,l,c){if(!Xa(i.precondition,o))return l;const u=i.value.clone(),h=tg(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ss?function(i,o,l,c){if(!Xa(i.precondition,o))return l;const u=tg(i.fieldTransforms,c,o),h=o.data;return h.setAll(pE(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,l){return Xa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function sR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=cE(r.transform,s||null);i!=null&&(n===null&&(n=Gt.empty()),n.set(r.field,i))}return n||null}function Zm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&di(r,s,(i,o)=>tR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ea extends cc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ss extends cc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function eg(t,e,n){const r=new Map;qe(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,eR(o,l,n[s]))}return r}function tg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ZC(i,o,e))}return r}class uc extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iR extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&rR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=fE(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ve.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ne())}isEqual(e){return this.batchId===e.batchId&&di(this.mutations,e.mutations,(n,r)=>Zm(n,r))&&di(this.baseMutations,e.baseMutations,(n,r)=>Zm(n,r))}}class Ed{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){qe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return KC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ed(e,n,r,s)}}/**
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
 */var ct,Me;function cR(t){switch(t){case B.OK:return ye(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return ye(15467,{code:t})}}function mE(t){if(t===void 0)return ar("GRPC error has no .code"),B.UNKNOWN;switch(t){case ct.OK:return B.OK;case ct.CANCELLED:return B.CANCELLED;case ct.UNKNOWN:return B.UNKNOWN;case ct.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case ct.INTERNAL:return B.INTERNAL;case ct.UNAVAILABLE:return B.UNAVAILABLE;case ct.UNAUTHENTICATED:return B.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case ct.NOT_FOUND:return B.NOT_FOUND;case ct.ALREADY_EXISTS:return B.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return B.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case ct.ABORTED:return B.ABORTED;case ct.OUT_OF_RANGE:return B.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return B.UNIMPLEMENTED;case ct.DATA_LOSS:return B.DATA_LOSS;default:return ye(39323,{code:t})}}(Me=ct||(ct={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const uR=new jr([4294967295,4294967295],0);function ng(t){const e=Lv().encode(t),n=new Rv;return n.update(e),new Uint8Array(n.digest())}function rg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new jr([n,r],0),new jr([s,i],0)]}class wd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ji(`Invalid padding: ${n}`);if(r<0)throw new Ji(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ji(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ji(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=jr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(jr.fromNumber(r)));return s.compare(uR)===1&&(s=new jr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=ng(e),[r,s]=rg(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new wd(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=ng(e),[r,s]=rg(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ji extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ta.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hc(ve.min(),s,new tt(Pe),lr(),Ne())}}class ta{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ta(r,n,Ne(),Ne(),Ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class gE{constructor(e,n){this.targetId=e,this.De=n}}class yE{constructor(e,n,r=It.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class sg{constructor(){this.ve=0,this.Ce=ig(),this.Fe=It.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ne(),n=Ne(),r=Ne();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ye(38017,{changeType:i})}}),new ta(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=ig()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,qe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class hR{constructor(e){this.We=e,this.Ge=new Map,this.ze=lr(),this.je=Na(),this.Je=Na(),this.He=new tt(Pe)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:ye(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,s)=>{this.nt(s)&&n(s)})}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Qu(i))if(r===0){const o=new de(i.path);this.Xe(n,o,Nt.newNoDocument(o,ve.min()))}else qe(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),c=l?this.ut(l,e,o):1;if(c!==0){this.rt(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Yr(r).toUint8Array()}catch(c){if(c instanceof jv)return Wr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new wd(o,s,i)}catch(c){return Wr(c instanceof Ji?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)}),s}Pt(e){const n=new Map;this.Ge.forEach((i,o)=>{const l=this.st(o);if(l){if(i.current&&Qu(l.target)){const c=new de(l.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,Nt.newNoDocument(c,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}});let r=Ne();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.st(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ze.forEach((i,o)=>o.setReadTime(e));const s=new hc(e,n,this.He,this.ze,r);return this.ze=lr(),this.je=Na(),this.Je=Na(),this.He=new tt(Pe),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new sg,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new ft(Pe),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new ft(Pe),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||ie("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new sg),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Na(){return new tt(de.comparator)}function ig(){return new tt(de.comparator)}const dR={asc:"ASCENDING",desc:"DESCENDING"},fR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pR={and:"AND",or:"OR"};class mR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zu(t,e){return t.useProto3Json||sc(e)?e:{value:e}}function Sl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _E(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gR(t,e){return Sl(t,e.toTimestamp())}function Nn(t){return qe(!!t,49232),ve.fromTimestamp(function(n){const r=Kr(n);return new Re(r.seconds,r.nanos)}(t))}function bd(t,e){return eh(t,e).canonicalString()}function eh(t,e){const n=function(s){return new Ye(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function vE(t){const e=Ye.fromString(t);return qe(IE(e),10190,{key:e.toString()}),e}function th(t,e){return bd(t.databaseId,e.path)}function lu(t,e){const n=vE(e);if(n.get(1)!==t.databaseId.projectId)throw new re(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new de(wE(n))}function EE(t,e){return bd(t.databaseId,e)}function yR(t){const e=vE(t);return e.length===4?Ye.emptyPath():wE(e)}function nh(t){return new Ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wE(t){return qe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function og(t,e,n){return{name:th(t,e),fields:n.value.mapValue.fields}}function _R(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ye(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(qe(h===void 0||typeof h=="string",58123),It.fromBase64String(h||"")):(qe(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),It.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const h=u.code===void 0?B.UNKNOWN:mE(u.code);return new re(h,u.message||"")}(o);n=new yE(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=lu(t,r.document.name),i=Nn(r.document.updateTime),o=r.document.createTime?Nn(r.document.createTime):ve.min(),l=new Gt({mapValue:{fields:r.document.fields}}),c=Nt.newFoundDocument(s,i,o,l),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Ja(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=lu(t,r.document),i=r.readTime?Nn(r.readTime):ve.min(),o=Nt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ja([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=lu(t,r.document),i=r.removedTargetIds||[];n=new Ja([],i,s,null)}else{if(!("filter"in e))return ye(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new lR(s,i),l=r.targetId;n=new gE(l,o)}}return n}function vR(t,e){let n;if(e instanceof ea)n={update:og(t,e.key,e.value)};else if(e instanceof uc)n={delete:th(t,e.key)};else if(e instanceof ss)n={update:og(t,e.key,e.data),updateMask:CR(e.fieldMask)};else{if(!(e instanceof iR))return ye(16599,{Rt:e.type});n={verify:th(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Il)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof $o)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Uo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Al)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw ye(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:gR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ye(27497)}(t,e.precondition)),n}function ER(t,e){return t&&t.length>0?(qe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Nn(s.updateTime):Nn(i);return o.isEqual(ve.min())&&(o=Nn(i)),new nR(o,s.transformResults||[])}(n,e))):[]}function wR(t,e){return{documents:[EE(t,e.path)]}}function bR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=EE(t,s);const i=function(u){if(u.length!==0)return TE(En.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Ks(p.field),direction:AR(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Zu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{Vt:n,parent:s}}function TR(t){let e=yR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){qe(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const p=bE(f);return p instanceof En&&Jv(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(C){return new Fo(Ys(C.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(p))}(n.orderBy));let l=null;n.limit&&(l=function(f){let p;return p=typeof f=="object"?f.value:f,sc(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(f){const p=!!f.before,y=f.values||[];return new Tl(y,p)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const p=!f.before,y=f.values||[];return new Tl(y,p)}(n.endAt)),HC(e,s,o,i,l,"F",c,u)}function IR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ys(n.unaryFilter.field);return ut.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ys(n.unaryFilter.field);return ut.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ys(n.unaryFilter.field);return ut.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ys(n.unaryFilter.field);return ut.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}}(t):t.fieldFilter!==void 0?function(n){return ut.create(Ys(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return En.create(n.compositeFilter.filters.map(r=>bE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ye(1026)}}(n.compositeFilter.op))}(t):ye(30097,{filter:t})}function AR(t){return dR[t]}function SR(t){return fR[t]}function PR(t){return pR[t]}function Ks(t){return{fieldPath:t.canonicalString()}}function Ys(t){return Tt.fromServerFormat(t.fieldPath)}function TE(t){return t instanceof ut?function(n){if(n.op==="=="){if(Gm(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NAN"}};if(Wm(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Gm(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NOT_NAN"}};if(Wm(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ks(n.field),op:SR(n.op),value:n.value}}}(t):t instanceof En?function(n){const r=n.getFilters().map(s=>TE(s));return r.length===1?r[0]:{compositeFilter:{op:PR(n.op),filters:r}}}(t):ye(54877,{filter:t})}function CR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function IE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,r,s,i=ve.min(),o=ve.min(),l=It.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.gt=e}}function DR(t){const e=TR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ju(e,e.limit,"L"):e}/**
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
 */class kR{constructor(){this.Dn=new OR}addToCollectionParentIndex(e,n){return this.Dn.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(Gr.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(Gr.min())}updateCollectionGroup(e,n,r){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class OR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ft(Ye.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ft(Ye.comparator)).toArray()}}/**
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
 */const ag={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},AE=41943040;class Wt{static withCacheSize(e){return new Wt(e,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt.DEFAULT_COLLECTION_PERCENTILE=10,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wt.DEFAULT=new Wt(AE,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wt.DISABLED=new Wt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const lg="LruGarbageCollector",xR=1048576;function cg([t,e],[n,r]){const s=Pe(t,n);return s===0?Pe(e,r):s}class NR{constructor(e){this.Tr=e,this.buffer=new ft(cg),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();cg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class VR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ie(lg,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ai(n)?ie(lg,"Ignoring IndexedDB error during garbage collection: ",n):await Ii(n)}await this.Rr(3e5)})}}class MR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return z.resolve(rc.ue);const r=new NR(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(ag)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ag):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,l=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),Ws()<=xe.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
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
 */class FR{constructor(){this.changes=new Ns(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class UR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&_o(r.mutation,s,Jt.empty(),Re.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ne()){const s=_s();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Xi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=_s();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ne()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=lr();const o=yo(),l=function(){return yo()}();return n.forEach((c,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof ss)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),_o(h.mutation,u,h.mutation.getFieldMask(),Re.now())):o.set(u.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return l.set(u,new $R(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),l))}recalculateAndSaveOverlays(e,n){const r=yo();let s=new tt((o,l)=>o-l),i=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=r.get(c)||Jt.empty();h=l.applyToLocalView(u,h),r.set(c,h);const f=(s.get(l.batchId)||Ne()).add(c);s=s.insert(l.batchId,f)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,f=aE();h.forEach(p=>{if(!i.has(p)){const y=fE(n.get(p),r.get(p));y!==null&&f.set(p,y),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return z.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return de.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):z.resolve(_s());let l=No,c=i;return o.next(u=>z.forEach(u,(h,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),i.get(h)?z.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Ne())).next(h=>({batchId:l,changes:oE(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new de(n)).next(r=>{let s=Xi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Xi();return this.indexManager.getCollectionParents(e,i).next(l=>z.forEach(l,c=>{const u=function(f,p){return new Si(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Nt.newInvalidDocument(h)))});let l=Xi();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&_o(h.mutation,u,Jt.empty(),Re.now()),ac(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return z.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Nn(s.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(s){return{name:s.name,query:DR(s.bundledQuery),readTime:Nn(s.readTime)}}(n)),z.resolve()}}/**
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
 */class jR{constructor(){this.overlays=new tt(de.comparator),this.kr=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_s();return z.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.wt(e,n,i)}),z.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),z.resolve()}getOverlaysForCollection(e,n,r){const s=_s(),i=n.length+1,o=new de(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return z.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new tt((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=_s(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=_s(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>l.set(u,h)),!(l.size()>=s)););return z.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new aR(n,r));let i=this.kr.get(n);i===void 0&&(i=Ne(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class HR{constructor(){this.sessionToken=It.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.qr=new ft(pt.Qr),this.$r=new ft(pt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new pt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new pt(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new de(new Ye([])),r=new pt(n,e),s=new pt(n,e+1),i=[];return this.$r.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new de(new Ye([])),r=new pt(n,e),s=new pt(n,e+1);let i=Ne();return this.$r.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new pt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class pt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return de.comparator(e.key,n.key)||Pe(e.Hr,n.Hr)}static Ur(e,n){return Pe(e.Hr,n.Hr)||de.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new ft(pt.Qr)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new pt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return z.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?fd:this.er-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new pt(n,0),s=new pt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),z.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ft(Pe);return n.forEach(s=>{const i=new pt(s,0),o=new pt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),z.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;de.isDocumentKey(i)||(i=i.child(""));const o=new pt(new de(i),0);let l=new ft(Pe);return this.Yr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)},o),z.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){qe(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return z.forEach(n.mutations,s=>{const i=new pt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new pt(n,0),s=this.Yr.firstAfterOrEqual(r);return z.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e){this.ni=e,this.docs=function(){return new tt(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return z.resolve(r?r.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let r=lr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Nt.newInvalidDocument(s))}),z.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=lr();const o=n.path,l=new de(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||wC(EC(h),r)<=0||(s.has(h.key)||ac(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return z.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ye(9500)}ri(e,n){return z.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new WR(this)}getSize(e){return z.resolve(this.size)}}class WR extends FR{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),z.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.persistence=e,this.ii=new Ns(n=>gd(n),yd),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.si=0,this.oi=new Td,this.targetCount=0,this._i=mi.ar()}forEachTarget(e,n){return this.ii.forEach((r,s)=>n(s)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),z.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new mi(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.hr(n),z.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),z.waitFor(i).next(()=>s)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return z.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),z.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),z.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return z.resolve(r)}containsKey(e,n){return z.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,n){this.ai={},this.overlays={},this.ui=new rc(0),this.ci=!1,this.ci=!0,this.li=new HR,this.referenceDelegate=e(this),this.hi=new GR(this),this.indexManager=new kR,this.remoteDocumentCache=function(s){return new zR(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new RR(n),this.Ti=new BR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new qR(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){ie("MemoryPersistence","Starting transaction:",e);const s=new KR(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return z.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class KR extends TC{constructor(e){super(),this.currentSequenceNumber=e}}class Id{constructor(e){this.persistence=e,this.Ai=new Td,this.Ri=null}static Vi(e){return new Id(e)}get mi(){if(this.Ri)return this.Ri;throw ye(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),z.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),z.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.mi,r=>{const s=de.fromPath(r);return this.fi(e,s).next(i=>{i||n.removeEntry(s,ve.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return z.or([()=>z.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Pl{constructor(e,n){this.persistence=e,this.gi=new Ns(r=>SC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=LR(this,n)}static Vi(e,n){return new Pl(e,n)}Ii(){}di(e){return z.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return z.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?z.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ve.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),z.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),z.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),z.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ya(e.data.value)),n}Sr(e,n,r){return z.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return z.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=Ne(),s=Ne();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ad(e,n.fromCache,r,s)}}/**
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
 */class QR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return TI()?8:IC(Vt())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ys(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new YR;return this.ws(e,n,o).next(l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>i.result)}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(Ws()<=xe.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),z.resolve()):(Ws()<=xe.DEBUG&&ie("QueryEngine","Query:",Gs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ws()<=xe.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xn(n))):z.resolve())}ps(e,n){if(Xm(n))return z.resolve(null);let r=xn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ju(n,null,"F"),r=xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ne(...i);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.bs(n,l);return this.Ds(n,u,o,c.readTime)?this.ps(e,Ju(n,null,"F")):this.vs(e,u,n,c)}))})))}ys(e,n,r,s){return Xm(n)||s.isEqual(ve.min())?z.resolve(null):this.gs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?z.resolve(null):(Ws()<=xe.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Gs(n)),this.vs(e,o,n,vC(s,No)).next(l=>l))})}bs(e,n){let r=new ft(sE(e));return n.forEach((s,i)=>{ac(e,i)&&(r=r.add(i))}),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return Ws()<=xe.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Gs(n)),this.gs.getDocumentsMatchingQuery(e,n,Gr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="LocalStore",XR=3e8;class JR{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new tt(Pe),this.Ms=new Ns(i=>gd(i),yd),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function ZR(t,e,n,r){return new JR(t,e,n,r)}async function PE(t,e){const n=we(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Ne();for(const u of s){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Bs:u,removedBatchIds:o,addedBatchIds:l}))})})}function eD(t,e){const n=we(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,c,u,h){const f=u.batch,p=f.keys();let y=z.resolve();return p.forEach(C=>{y=y.next(()=>h.getEntry(c,C)).next(O=>{const M=u.docVersions.get(C);qe(M!==null,48541),O.version.compareTo(M)<0&&(f.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),h.addEntry(O)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ne();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function CE(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function tD(t,e){const n=we(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach((h,f)=>{const p=s.get(f);if(!p)return;l.push(n.hi.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.hi.addMatchingKeys(i,h.addedDocuments,f)));let y=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(It.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),s=s.insert(f,y),function(O,M,x){return O.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=XR?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(p,y,h)&&l.push(n.hi.updateTargetData(i,y))});let c=lr(),u=Ne();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),l.push(nD(i,o,e.documentUpdates).next(h=>{c=h.Ls,u=h.ks})),!r.isEqual(ve.min())){const h=n.hi.getLastRemoteSnapshotVersion(i).next(f=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(h)}return z.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Fs=s,i))}function nD(t,e,n){let r=Ne(),s=Ne();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=lr();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ve.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ie(Sd,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ls:o,ks:s}})}function rD(t,e){const n=we(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=fd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sD(t,e){const n=we(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.hi.getTargetData(r,e).next(i=>i?(s=i,z.resolve(s)):n.hi.allocateTargetId(r).next(o=>(s=new Mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function rh(t,e,n){const r=we(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ai(o))throw o;ie(Sd,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function ug(t,e,n){const r=we(t);let s=ve.min(),i=Ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=we(c),p=f.Ms.get(h);return p!==void 0?z.resolve(f.Fs.get(p)):f.hi.getTargetData(u,h)}(r,o,xn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ve.min(),n?i:Ne())).next(l=>(iD(r,zC(e),l),{documents:l,qs:i})))}function iD(t,e,n){let r=t.xs.get(e)||ve.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.xs.set(e,r)}class hg{constructor(){this.activeTargetIds=XC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oD{constructor(){this.Fo=new hg,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new hg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class aD{xo(e){}shutdown(){}}/**
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
 */let Va=null;function sh(){return Va===null?Va=function(){return 268435456+Math.round(2147483648*Math.random())}():Va++,"0x"+Va.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="RestConnection",lD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class cD{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===wl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=sh(),l=this.Go(e,n.toUriEncodedString());ie(cu,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:u}=new URL(l),h=Ei(u);return this.jo(e,l,c,r,h).then(f=>(ie(cu,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Wr(cu,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f})}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ti}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,n){const r=lD[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="WebChannelConnection";class hD extends cD{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=sh();return new Promise((l,c)=>{const u=new Dv;u.setWithCredentials(!0),u.listenOnce(kv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ka.NO_ERROR:const f=u.getResponseJson();ie(Rt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case Ka.TIMEOUT:ie(Rt,`RPC '${e}' ${o} timed out`),c(new re(B.DEADLINE_EXCEEDED,"Request time out"));break;case Ka.HTTP_ERROR:const p=u.getStatus();if(ie(Rt,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const C=y?.error;if(C&&C.status&&C.message){const O=function(x){const k=x.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(k)>=0?k:B.UNKNOWN}(C.status);c(new re(O,C.message))}else c(new re(B.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new re(B.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{ie(Rt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);ie(Rt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)})}P_(e,n,r){const s=sh(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Nv(),l=xv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const h=i.join("");ie(Rt,`Creating RPC '${e}' stream ${s}: ${h}`,c);const f=o.createWebChannel(h,c);this.T_(f);let p=!1,y=!1;const C=new uD({Ho:M=>{y?ie(Rt,`Not sending because RPC '${e}' stream ${s} is closed:`,M):(p||(ie(Rt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),ie(Rt,`RPC '${e}' stream ${s} sending:`,M),f.send(M))},Yo:()=>f.close()}),O=(M,x,k)=>{M.listen(x,L=>{try{k(L)}catch(U){setTimeout(()=>{throw U},0)}})};return O(f,Qi.EventType.OPEN,()=>{y||(ie(Rt,`RPC '${e}' stream ${s} transport opened.`),C.s_())}),O(f,Qi.EventType.CLOSE,()=>{y||(y=!0,ie(Rt,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(f))}),O(f,Qi.EventType.ERROR,M=>{y||(y=!0,Wr(Rt,`RPC '${e}' stream ${s} transport errored. Name:`,M.name,"Message:",M.message),C.__(new re(B.UNAVAILABLE,"The operation could not be completed")))}),O(f,Qi.EventType.MESSAGE,M=>{var x;if(!y){const k=M.data[0];qe(!!k,16349);const L=k,U=L?.error||((x=L[0])===null||x===void 0?void 0:x.error);if(U){ie(Rt,`RPC '${e}' stream ${s} received error:`,U);const F=U.status;let W=function(w){const S=ct[w];if(S!==void 0)return mE(S)}(F),A=U.message;W===void 0&&(W=B.INTERNAL,A="Unknown error status: "+F+" with message "+U.message),y=!0,C.__(new re(W,A)),f.close()}else ie(Rt,`RPC '${e}' stream ${s} received:`,k),C.a_(k)}}),O(l,Ov.STAT_EVENT,M=>{M.stat===zu.PROXY?ie(Rt,`RPC '${e}' stream ${s} detected buffering proxy`):M.stat===zu.NOPROXY&&ie(Rt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.o_()},0),C}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function uu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(t){return new mR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const pg="PersistentStream";class DE{constructor(e,n,r,s,i,o,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new RE(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(ar(n.toString()),ar("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===n&&this.W_(r,s)},r=>{e(()=>{const s=new re(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return ie(pg,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(ie(pg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dD extends DE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=_R(this.serializer,e),r=function(i){if(!("targetChange"in i))return ve.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ve.min():o.readTime?Nn(o.readTime):ve.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=nh(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Qu(c)?{documents:wR(i,c)}:{query:bR(i,c).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=_E(i,o.resumeToken);const u=Zu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ve.min())>0){l.readTime=Sl(i,o.snapshotVersion.toTimestamp());const u=Zu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=IR(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=nh(this.serializer),n.removeTarget=e,this.k_(n)}}class fD extends DE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=ER(e.writeResults,e.commitTime),r=Nn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=nh(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>vR(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{}class mD extends pD{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new re(B.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,eh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(B.UNKNOWN,i.toString())})}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,eh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(B.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class gD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const Rs="RemoteStore";class yD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{Vs(this)&&(ie(Rs,"Restarting streams for network reachability change."),await async function(c){const u=we(c);u.Ia.add(4),await na(u),u.Aa.set("Unknown"),u.Ia.delete(4),await fc(u)}(this))})}),this.Aa=new gD(r,s)}}async function fc(t){if(Vs(t))for(const e of t.da)await e(!0)}async function na(t){for(const e of t.da)await e(!1)}function kE(t,e){const n=we(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Dd(n)?Rd(n):Pi(n).x_()&&Cd(n,e))}function Pd(t,e){const n=we(t),r=Pi(n);n.Ta.delete(e),r.x_()&&OE(n,e),n.Ta.size===0&&(r.x_()?r.B_():Vs(n)&&n.Aa.set("Unknown"))}function Cd(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Pi(t).H_(e)}function OE(t,e){t.Ra.$e(e),Pi(t).Y_(e)}function Rd(t){t.Ra=new hR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Pi(t).start(),t.Aa.aa()}function Dd(t){return Vs(t)&&!Pi(t).M_()&&t.Ta.size>0}function Vs(t){return we(t).Ia.size===0}function xE(t){t.Ra=void 0}async function _D(t){t.Aa.set("Online")}async function vD(t){t.Ta.forEach((e,n)=>{Cd(t,e)})}async function ED(t,e){xE(t),Dd(t)?(t.Aa.la(e),Rd(t)):t.Aa.set("Unknown")}async function wD(t,e,n){if(t.Aa.set("Online"),e instanceof yE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))}(t,e)}catch(r){ie(Rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cl(t,r)}else if(e instanceof Ja?t.Ra.Ye(e):e instanceof gE?t.Ra.it(e):t.Ra.et(e),!n.isEqual(ve.min()))try{const r=await CE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.Ta.get(u);h&&i.Ta.set(u,h.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const h=i.Ta.get(c);if(!h)return;i.Ta.set(c,h.withResumeToken(It.EMPTY_BYTE_STRING,h.snapshotVersion)),OE(i,c);const f=new Mr(h.target,c,u,h.sequenceNumber);Cd(i,f)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ie(Rs,"Failed to raise snapshot:",r),await Cl(t,r)}}async function Cl(t,e,n){if(!Ai(e))throw e;t.Ia.add(1),await na(t),t.Aa.set("Offline"),n||(n=()=>CE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ie(Rs,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await fc(t)})}function NE(t,e){return e().catch(n=>Cl(t,n,e))}async function pc(t){const e=we(t),n=Xr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:fd;for(;bD(e);)try{const s=await rD(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,TD(e,s)}catch(s){await Cl(e,s)}VE(e)&&ME(e)}function bD(t){return Vs(t)&&t.Pa.length<10}function TD(t,e){t.Pa.push(e);const n=Xr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function VE(t){return Vs(t)&&!Xr(t).M_()&&t.Pa.length>0}function ME(t){Xr(t).start()}async function ID(t){Xr(t).na()}async function AD(t){const e=Xr(t);for(const n of t.Pa)e.X_(n.mutations)}async function SD(t,e,n){const r=t.Pa.shift(),s=Ed.from(r,e,n);await NE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await pc(t)}async function PD(t,e){e&&Xr(t).Z_&&await async function(r,s){if(function(o){return cR(o)&&o!==B.ABORTED}(s.code)){const i=r.Pa.shift();Xr(r).N_(),await NE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await pc(r)}}(t,e),VE(t)&&ME(t)}async function mg(t,e){const n=we(t);n.asyncQueue.verifyOperationInProgress(),ie(Rs,"RemoteStore received new credentials");const r=Vs(n);n.Ia.add(3),await na(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await fc(n)}async function CD(t,e){const n=we(t);e?(n.Ia.delete(2),await fc(n)):e||(n.Ia.add(2),await na(n),n.Aa.set("Unknown"))}function Pi(t){return t.Va||(t.Va=function(n,r,s){const i=we(n);return i.ia(),new dD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:_D.bind(null,t),e_:vD.bind(null,t),n_:ED.bind(null,t),J_:wD.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),Dd(t)?Rd(t):t.Aa.set("Unknown")):(await t.Va.stop(),xE(t))})),t.Va}function Xr(t){return t.ma||(t.ma=function(n,r,s){const i=we(n);return i.ia(),new fD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:ID.bind(null,t),n_:PD.bind(null,t),ea:AD.bind(null,t),ta:SD.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await pc(t)):(await t.ma.stop(),t.Pa.length>0&&(ie(Rs,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new kd(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Od(t,e){if(ar("AsyncQueue",`${e}: ${t}`),Ai(t))return new re(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{static emptySet(e){return new ri(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||de.comparator(n.key,r.key):(n,r)=>de.comparator(n.key,r.key),this.keyedMap=Xi(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ri)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class gg{constructor(){this.fa=new tt(de.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ye(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class gi{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new gi(e,n,ri.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class DD{constructor(){this.queries=yg(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=we(n),i=s.queries;s.queries=yg(),i.forEach((o,l)=>{for(const c of l.wa)c.onError(r)})})(this,new re(B.ABORTED,"Firestore shutting down"))}}function yg(){return new Ns(t=>rE(t),oc)}async function LE(t,e){const n=we(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new RD,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Od(o,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&xd(n)}async function FE(t,e){const n=we(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function kD(t,e){const n=we(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&xd(n)}function OD(t,e,n){const r=we(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function xd(t){t.Da.forEach(e=>{e.next()})}var ih,_g;(_g=ih||(ih={})).Fa="default",_g.Cache="cache";class $E{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new gi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ih.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e){this.key=e}}class BE{constructor(e){this.key=e}}class xD{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ne(),this.mutatedKeys=Ne(),this.Xa=sE(e),this.eu=new ri(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new gg,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,f)=>{const p=s.get(h),y=ac(this.query,f)?f:null,C=!!p&&this.mutatedKeys.has(p.key),O=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let M=!1;p&&y?p.data.isEqual(y.data)?C!==O&&(r.track({type:3,doc:y}),M=!0):this.iu(p,y)||(r.track({type:2,doc:y}),M=!0,(c&&this.Xa(y,c)>0||u&&this.Xa(y,u)<0)&&(l=!0)):!p&&y?(r.track({type:0,doc:y}),M=!0):p&&!y&&(r.track({type:1,doc:p}),M=!0,(c||u)&&(l=!0)),M&&(y?(o=o.add(y),i=O?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((h,f)=>function(y,C){const O=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{At:M})}};return O(y)-O(C)}(h.type,f.type)||this.Xa(h.doc,f.doc)),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,u=c!==this.Ya;return this.Ya=c,o.length!==0||u?{snapshot:new gi(this.query,e.eu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new gg,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ne(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new BE(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new UE(r))}),n}uu(e){this.Ha=e.qs,this.Za=Ne();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return gi.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Nd="SyncEngine";class ND{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class VD{constructor(e){this.key=e,this.lu=!1}}class MD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Ns(l=>rE(l),oc),this.Tu=new Map,this.Iu=new Set,this.du=new tt(de.comparator),this.Eu=new Map,this.Au=new Td,this.Ru={},this.Vu=new Map,this.mu=mi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function LD(t,e,n=!0){const r=GE(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await jE(r,e,n,!0),s}async function FD(t,e){const n=GE(t);await jE(n,e,!0,!1)}async function jE(t,e,n,r){const s=await sD(t.localStore,xn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await $D(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&kE(t.remoteStore,s),l}async function $D(t,e,n,r,s){t.gu=(f,p,y)=>async function(O,M,x,k){let L=M.view.nu(x);L.Ds&&(L=await ug(O.localStore,M.query,!1).then(({documents:A})=>M.view.nu(A,L)));const U=k&&k.targetChanges.get(M.targetId),F=k&&k.targetMismatches.get(M.targetId)!=null,W=M.view.applyChanges(L,O.isPrimaryClient,U,F);return Eg(O,M.targetId,W._u),W.snapshot}(t,f,p,y);const i=await ug(t.localStore,e,!0),o=new xD(e,i.qs),l=o.nu(i.documents),c=ta.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Eg(t,n,u._u);const h=new ND(e,n,o);return t.Pu.set(e,h),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function UD(t,e,n){const r=we(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(o=>!oc(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await rh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Pd(r.remoteStore,s.targetId),oh(r,s.targetId)}).catch(Ii)):(oh(r,s.targetId),await rh(r.localStore,s.targetId,!0))}async function BD(t,e){const n=we(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Pd(n.remoteStore,r.targetId))}async function jD(t,e,n){const r=YD(t);try{const s=await function(o,l){const c=we(o),u=Re.now(),h=l.reduce((y,C)=>y.add(C.key),Ne());let f,p;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let C=lr(),O=Ne();return c.Os.getEntries(y,h).next(M=>{C=M,C.forEach((x,k)=>{k.isValidDocument()||(O=O.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,C)).next(M=>{f=M;const x=[];for(const k of l){const L=sR(k,f.get(k.key).overlayedDocument);L!=null&&x.push(new ss(k.key,L,Yv(L.value.mapValue),Ht.exists(!0)))}return c.mutationQueue.addMutationBatch(y,u,x,l)}).next(M=>{p=M;const x=M.applyToLocalDocumentSet(f,O);return c.documentOverlayCache.saveOverlays(y,M.batchId,x)})}).then(()=>({batchId:p.batchId,changes:oE(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Ru[o.currentUser.toKey()];u||(u=new tt(Pe)),u=u.insert(l,c),o.Ru[o.currentUser.toKey()]=u}(r,s.batchId,n),await ra(r,s.changes),await pc(r.remoteStore)}catch(s){const i=Od(s,"Failed to persist write");n.reject(i)}}async function HE(t,e){const n=we(t);try{const r=await tD(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(qe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?qe(o.lu,14607):s.removedDocuments.size>0&&(qe(o.lu,42227),o.lu=!1))}),await ra(n,r,e)}catch(r){await Ii(r)}}function vg(t,e,n){const r=we(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=we(o);c.onlineState=l;let u=!1;c.queries.forEach((h,f)=>{for(const p of f.wa)p.va(l)&&(u=!0)}),u&&xd(c)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HD(t,e,n){const r=we(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new tt(de.comparator);o=o.insert(i,Nt.newNoDocument(i,ve.min()));const l=Ne().add(i),c=new hc(ve.min(),new Map,new tt(Pe),o,l);await HE(r,c),r.du=r.du.remove(i),r.Eu.delete(e),Vd(r)}else await rh(r.localStore,e,!1).then(()=>oh(r,e,n)).catch(Ii)}async function qD(t,e){const n=we(t),r=e.batch.batchId;try{const s=await eD(n.localStore,e);zE(n,r,null),qE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ra(n,s)}catch(s){await Ii(s)}}async function zD(t,e,n){const r=we(t);try{const s=await function(o,l){const c=we(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,l).next(f=>(qe(f!==null,37113),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(r.localStore,e);zE(r,e,n),qE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ra(r,s)}catch(s){await Ii(s)}}function qE(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function zE(t,e,n){const r=we(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function oh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||WE(t,r)})}function WE(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Pd(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Vd(t))}function Eg(t,e,n){for(const r of n)r instanceof UE?(t.Au.addReference(r.key,e),WD(t,r)):r instanceof BE?(ie(Nd,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||WE(t,r.key)):ye(19791,{yu:r})}function WD(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(ie(Nd,"New document in limbo: "+n),t.Iu.add(r),Vd(t))}function Vd(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new de(Ye.fromString(e)),r=t.mu.next();t.Eu.set(r,new VD(n)),t.du=t.du.insert(n,r),kE(t.remoteStore,new Mr(xn(_d(n.path)),r,"TargetPurposeLimboResolution",rc.ue))}}async function ra(t,e,n){const r=we(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,c)=>{o.push(r.gu(c,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n?.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Ad.Es(c.targetId,u);i.push(f)}}))}),await Promise.all(o),r.hu.J_(s),await async function(c,u){const h=we(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>z.forEach(u,p=>z.forEach(p.Is,y=>h.persistence.referenceDelegate.addReference(f,p.targetId,y)).next(()=>z.forEach(p.ds,y=>h.persistence.referenceDelegate.removeReference(f,p.targetId,y)))))}catch(f){if(!Ai(f))throw f;ie(Sd,"Failed to update sequence numbers: "+f)}for(const f of u){const p=f.targetId;if(!f.fromCache){const y=h.Fs.get(p),C=y.snapshotVersion,O=y.withLastLimboFreeSnapshotVersion(C);h.Fs=h.Fs.insert(p,O)}}}(r.localStore,i))}async function GD(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){ie(Nd,"User change. New user:",e.toKey());const r=await PE(n.localStore,e);n.currentUser=e,function(i,o){i.Vu.forEach(l=>{l.forEach(c=>{c.reject(new re(B.CANCELLED,o))})}),i.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ra(n,r.Bs)}}function KD(t,e){const n=we(t),r=n.Eu.get(e);if(r&&r.lu)return Ne().add(r.key);{let s=Ne();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function GE(t){const e=we(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=HE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HD.bind(null,e),e.hu.J_=kD.bind(null,e.eventManager),e.hu.pu=OD.bind(null,e.eventManager),e}function YD(t){const e=we(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zD.bind(null,e),e}class Rl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return ZR(this.persistence,new QR,e.initialUser,this.serializer)}Du(e){return new SE(Id.Vi,this.serializer)}bu(e){return new oD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rl.provider={build:()=>new Rl};class QD extends Rl{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){qe(this.persistence.referenceDelegate instanceof Pl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new VR(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Wt.withCacheSize(this.cacheSizeBytes):Wt.DEFAULT;return new SE(r=>Pl.Vi(r,n),this.serializer)}}class ah{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GD.bind(null,this.syncEngine),await CD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DD}()}createDatastore(e){const n=dc(e.databaseInfo.databaseId),r=function(i){return new hD(i)}(e.databaseInfo);return function(i,o,l,c){return new mD(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new yD(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>vg(this.syncEngine,n,0),function(){return fg.C()?new fg:new aD}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,h){const f=new MD(s,i,o,l,c,u);return h&&(f.fu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=we(s);ie(Rs,"RemoteStore shutting down."),i.Ia.add(5),await na(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ah.provider={build:()=>new ah};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Jr="FirestoreClient";class XD{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=kt.UNAUTHENTICATED,this.clientId=dd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ie(Jr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ie(Jr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Od(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hu(t,e){t.asyncQueue.verifyOperationInProgress(),ie(Jr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await PE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{Wr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{ie("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{Wr("Terminating Firestore due to IndexedDb database deletion failed",s)})}),t._offlineComponents=e}async function wg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await JD(t);ie(Jr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>mg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>mg(e.remoteStore,s)),t._onlineComponents=e}async function JD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ie(Jr,"Using user provided OfflineComponentProvider");try{await hu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Wr("Error using user provided cache. Falling back to memory cache: "+n),await hu(t,new Rl)}}else ie(Jr,"Using default OfflineComponentProvider"),await hu(t,new QD(void 0));return t._offlineComponents}async function YE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ie(Jr,"Using user provided OnlineComponentProvider"),await wg(t,t._uninitializedComponentsProvider._online)):(ie(Jr,"Using default OnlineComponentProvider"),await wg(t,new ah))),t._onlineComponents}function ZD(t){return YE(t).then(e=>e.syncEngine)}async function QE(t){const e=await YE(t),n=e.eventManager;return n.onListen=LD.bind(null,e.syncEngine),n.onUnlisten=UD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=FD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=BD.bind(null,e.syncEngine),n}function e2(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const h=new KE({next:p=>{h.Ou(),o.enqueueAndForget(()=>FE(i,f));const y=p.docs.has(l);!y&&p.fromCache?u.reject(new re(B.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&p.fromCache&&c&&c.source==="server"?u.reject(new re(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new $E(_d(l.path),h,{includeMetadataChanges:!0,ka:!0});return LE(i,f)}(await QE(t),t.asyncQueue,e,n,r)),r.promise}function t2(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const h=new KE({next:p=>{h.Ou(),o.enqueueAndForget(()=>FE(i,f)),p.fromCache&&c.source==="server"?u.reject(new re(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new $E(l,h,{includeMetadataChanges:!0,ka:!0});return LE(i,f)}(await QE(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const JE="firestore.googleapis.com",Tg=!0;class Ig{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=JE,this.ssl=Tg}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Tg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=AE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xR)throw new re(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_C("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=XE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ig({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ig(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cC;switch(r.type){case"firstParty":return new fC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=bg.get(n);r&&(ie("ComponentProvider","Removing Datastore"),bg.delete(n),r.terminate())}(this),Promise.resolve()}}function n2(t,e,n,r={}){var s;t=dn(t,mc);const i=Ei(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(j_(`https://${c}`),H_("Firestore",!0)),o.host!==JE&&o.host!==c&&Wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!Is(u,l)&&(t._setSettings(u),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=kt.MOCK_USER;else{h=pI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new re(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new kt(p)}t._authCredentials=new uC(new Mv(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ms(this.firestore,e,this._query)}}class at{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}toJSON(){return{type:at._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Zo(n,at._jsonSchema))return new at(e,r||null,new de(Ye.fromString(n.referencePath)))}}at._jsonSchemaVersion="firestore/documentReference/1.0",at._jsonSchema={type:ht("string",at._jsonSchemaVersion),referencePath:ht("string")};class Hr extends Ms{constructor(e,n,r){super(e,n,_d(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new de(e))}withConverter(e){return new Hr(this.firestore,e,this._path)}}function Ar(t,e,...n){if(t=it(t),Fv("collection","path",e),t instanceof mc){const r=Ye.fromString(e,...n);return Lm(r),new Hr(t,null,r)}{if(!(t instanceof at||t instanceof Hr))throw new re(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ye.fromString(e,...n));return Lm(r),new Hr(t.firestore,null,r)}}function An(t,e,...n){if(t=it(t),arguments.length===1&&(e=dd.newId()),Fv("doc","path",e),t instanceof mc){const r=Ye.fromString(e,...n);return Mm(r),new at(t,null,new de(r))}{if(!(t instanceof at||t instanceof Hr))throw new re(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ye.fromString(e,...n));return Mm(r),new at(t.firestore,t instanceof Hr?t.converter:null,new de(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="AsyncQueue";class Sg{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new RE(this,"async_queue_retry"),this.oc=()=>{const r=uu();r&&ie(Ag,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=uu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=uu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new nr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ai(e))throw e;ie(Ag,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,ar("INTERNAL UNHANDLED ERROR: ",Pg(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=kd.createAndSchedule(this,e,n,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&ye(47125,{hc:Pg(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Pg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class is extends mc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Sg,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sg(e),this._firestoreClient=void 0,await e}}}function vo(t,e){const n=typeof t=="object"?t:G_(),r=typeof t=="string"?t:wl,s=Jh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=dI("firestore");i&&n2(s,...i)}return s}function gc(t){if(t._terminated)throw new re(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||r2(t),t._firestoreClient}function r2(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,h){return new RC(l,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,XE(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new XD(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this._byteString=e}static fromBase64String(e){try{return new on(It.fromBase64String(e))}catch(n){throw new re(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new on(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:on._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Zo(e,on._jsonSchema))return on.fromBase64String(e.bytes)}}on._jsonSchemaVersion="firestore/bytes/1.0",on._jsonSchema={type:ht("string",on._jsonSchemaVersion),bytes:ht("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Vn._jsonSchemaVersion}}static fromJSON(e){if(Zo(e,Vn._jsonSchema))return new Vn(e.latitude,e.longitude)}}Vn._jsonSchemaVersion="firestore/geoPoint/1.0",Vn._jsonSchema={type:ht("string",Vn._jsonSchemaVersion),latitude:ht("number"),longitude:ht("number")};/**
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
 */class Mn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Mn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Zo(e,Mn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Mn(e.vectorValues);throw new re(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Mn._jsonSchemaVersion="firestore/vectorValue/1.0",Mn._jsonSchema={type:ht("string",Mn._jsonSchemaVersion),vectorValues:ht("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2=/^__.*__$/;class i2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new ea(e,this.data,n,this.fieldTransforms)}}class ZE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ew(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{Ec:t})}}class Ld{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Ld(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Dl(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(ew(this.Ec)&&s2.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class o2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||dc(e)}Dc(e,n,r,s=!1){return new Ld({Ec:e,methodName:n,bc:r,path:Tt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ia(t){const e=t._freezeSettings(),n=dc(t._databaseId);return new o2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Fd(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);$d("Data must be an object, but it was:",o,r);const l=rw(r,o);let c,u;if(i.merge)c=new Jt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const p=lh(e,f,n);if(!o.contains(p))throw new re(B.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);iw(h,p)||h.push(p)}c=new Jt(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new i2(new Gt(l),c,u)}class yc extends Md{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yc}}function tw(t,e,n,r){const s=t.Dc(1,e,n);$d("Data must be an object, but it was:",s,r);const i=[],o=Gt.empty();rs(r,(c,u)=>{const h=Ud(e,c,n);u=it(u);const f=s.gc(h);if(u instanceof yc)i.push(h);else{const p=oa(u,f);p!=null&&(i.push(h),o.set(h,p))}});const l=new Jt(i);return new ZE(o,l,s.fieldTransforms)}function nw(t,e,n,r,s,i){const o=t.Dc(1,e,n),l=[lh(e,r,n)],c=[s];if(i.length%2!=0)throw new re(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)l.push(lh(e,i[p])),c.push(i[p+1]);const u=[],h=Gt.empty();for(let p=l.length-1;p>=0;--p)if(!iw(u,l[p])){const y=l[p];let C=c[p];C=it(C);const O=o.gc(y);if(C instanceof yc)u.push(y);else{const M=oa(C,O);M!=null&&(u.push(y),h.set(y,M))}}const f=new Jt(u);return new ZE(h,f,o.fieldTransforms)}function a2(t,e,n,r=!1){return oa(n,t.Dc(r?4:3,e))}function oa(t,e){if(sw(t=it(t)))return $d("Unsupported field value:",e,t),rw(t,e);if(t instanceof Md)return function(r,s){if(!ew(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=oa(l,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=it(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return JC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Re.fromDate(r);return{timestampValue:Sl(s.serializer,i)}}if(r instanceof Re){const i=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Sl(s.serializer,i)}}if(r instanceof Vn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof on)return{bytesValue:_E(s.serializer,r._byteString)};if(r instanceof at){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Mn)return function(o,l){return{mapValue:{fields:{[Gv]:{stringValue:Kv},[bl]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.wc("VectorValues must only contain numeric values.");return vd(l.serializer,u)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${nc(r)}`)}(t,e)}function rw(t,e){const n={};return Bv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rs(t,(r,s)=>{const i=oa(s,e.Vc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function sw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof Vn||t instanceof on||t instanceof at||t instanceof Md||t instanceof Mn)}function $d(t,e,n){if(!sw(n)||!$v(n)){const r=nc(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function lh(t,e,n){if((e=it(e))instanceof sa)return e._internalPath;if(typeof e=="string")return Ud(t,e);throw Dl("Field path arguments must be of type string or ",t,!1,void 0,n)}const l2=new RegExp("[~\\*/\\[\\]]");function Ud(t,e,n){if(e.search(l2)>=0)throw Dl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sa(...e.split("."))._internalPath}catch{throw Dl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new re(B.INVALID_ARGUMENT,l+t+c)}function iw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new c2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_c("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class c2 extends ow{data(){return super.data()}}function _c(t,e){return typeof e=="string"?Ud(t,e):e instanceof sa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bd{}class aw extends Bd{}function zi(t,e,...n){let r=[];e instanceof Bd&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof jd).length,l=i.filter(c=>c instanceof vc).length;if(o>1||o>0&&l>0)throw new re(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class vc extends aw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new vc(e,n,r)}_apply(e){const n=this._parse(e);return lw(e._query,n),new Ms(e.firestore,e.converter,Xu(e._query,n))}_parse(e){const n=ia(e.firestore);return function(i,o,l,c,u,h,f){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new re(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Rg(f,h);const C=[];for(const O of f)C.push(Cg(c,i,O));p={arrayValue:{values:C}}}else p=Cg(c,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Rg(f,h),p=a2(l,o,f,h==="in"||h==="not-in");return ut.create(u,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ma(t,e,n){const r=e,s=_c("where",t);return vc._create(s,r,n)}class jd extends Bd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new jd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:En.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)lw(o,c),o=Xu(o,c)}(e._query,n),new Ms(e.firestore,e.converter,Xu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hd extends aw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Hd(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new re(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new re(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Fo(i,o)}(e._query,this._field,this._direction);return new Ms(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Si(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function La(t,e="asc"){const n=e,r=_c("orderBy",t);return Hd._create(r,n)}function Cg(t,e,n){if(typeof(n=it(n))=="string"){if(n==="")throw new re(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nE(e)&&n.indexOf("/")!==-1)throw new re(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ye.fromString(n));if(!de.isDocumentKey(r))throw new re(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zm(t,new de(r))}if(n instanceof at)return zm(t,n._key);throw new re(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nc(n)}.`)}function Rg(t,e){if(!Array.isArray(t)||t.length===0)throw new re(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lw(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new re(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class h2{convertValue(e,n="none"){switch(Qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return rs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[bl].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>ot(o.doubleValue));return new Mn(i)}convertGeoPoint(e){return new Vn(ot(e.latitude),ot(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ic(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vo(e));default:return null}}convertTimestamp(e){const n=Kr(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ye.fromString(e);qe(IE(r),9688,{name:e});const s=new Mo(r.get(1),r.get(3)),i=new de(r.popFirst(5));return s.isEqual(n)||ar(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Zi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bs extends ow{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Za(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_c("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=bs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}bs._jsonSchemaVersion="firestore/documentSnapshot/1.0",bs._jsonSchema={type:ht("string",bs._jsonSchemaVersion),bundleSource:ht("string","DocumentSnapshot"),bundleName:ht("string"),bundle:ht("string")};class Za extends bs{data(e={}){return super.data(e)}}class si{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Zi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Za(this._firestore,this._userDataWriter,r.key,r,new Zi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Za(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Za(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:d2(l.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=si._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=dd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function d2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t){t=dn(t,at);const e=dn(t.firestore,is);return e2(gc(e),t._key).then(n=>m2(e,t,n))}si._jsonSchemaVersion="firestore/querySnapshot/1.0",si._jsonSchema={type:ht("string",si._jsonSchemaVersion),bundleSource:ht("string","QuerySnapshot"),bundleName:ht("string"),bundle:ht("string")};class cw extends h2{constructor(e){super(),this.firestore=e}convertBytes(e){return new on(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,n)}}function Wi(t){t=dn(t,Ms);const e=dn(t.firestore,is),n=gc(e),r=new cw(e);return u2(t._query),t2(n,t._query).then(s=>new si(e,r,t,s))}function f2(t,e,n){t=dn(t,at);const r=dn(t.firestore,is),s=qd(t.converter,e,n);return aa(r,[Fd(ia(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ht.none())])}function du(t,e,n,...r){t=dn(t,at);const s=dn(t.firestore,is),i=ia(s);let o;return o=typeof(e=it(e))=="string"||e instanceof sa?nw(i,"updateDoc",t._key,e,n,r):tw(i,"updateDoc",t._key,e),aa(s,[o.toMutation(t._key,Ht.exists(!0))])}function p2(t){return aa(dn(t.firestore,is),[new uc(t._key,Ht.none())])}function fu(t,e){const n=dn(t.firestore,is),r=An(t),s=qd(t.converter,e);return aa(n,[Fd(ia(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ht.exists(!1))]).then(()=>r)}function aa(t,e){return function(r,s){const i=new nr;return r.asyncQueue.enqueueAndForget(async()=>jD(await ZD(r),s,i)),i.promise}(gc(t),e)}function m2(t,e,n){const r=n.docs.get(e._key),s=new cw(t);return new bs(t,s,e._key,r,new Zi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ia(e)}set(e,n,r){this._verifyNotCommitted();const s=pu(e,this._firestore),i=qd(s.converter,n,r),o=Fd(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Ht.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=pu(e,this._firestore);let o;return o=typeof(n=it(n))=="string"||n instanceof sa?nw(this._dataReader,"WriteBatch.update",i._key,n,r,s):tw(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Ht.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=pu(e,this._firestore);return this._mutations=this._mutations.concat(new uc(n._key,Ht.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new re(B.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function pu(t,e){if((t=it(t)).firestore!==e)throw new re(B.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y2(t){return gc(t=dn(t,is)),new g2(t,e=>aa(t,e))}(function(e,n=!0){(function(s){Ti=s})(wi),ui(new As("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new is(new hC(r.getProvider("auth-internal")),new pC(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new re(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Br(km,Om,e),Br(km,Om,"esm2017")})();const Zt=V_("auth",{state:()=>({user:null,userProfile:null,isAuthReady:!1,authInstance:null,loading:!1,error:null,successMessage:null,isProfileLoading:!1}),getters:{isProfileComplete:t=>!!t.userProfile?.role&&!!t.userProfile?.birthDate,role:t=>t.userProfile?.role},actions:{initAuth(t){t&&(this.authInstance=t,yv(this.authInstance,async e=>{if(e){this.user=e,this.isProfileLoading=!0;try{const n=vo(),s=An(n,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","users",e.uid),i=await ch(s);i.exists()?this.userProfile=i.data():this.userProfile=null}catch(n){console.error("Failed to fetch user profile:",n),this.userProfile=null}finally{this.isProfileLoading=!1}}else this.user=null,this.userProfile=null;this.isAuthReady=!0}))},setUserProfile(t){this.userProfile=t},async logout(){await QS(this.authInstance)},async signupWithEmail(t,e,n){this.loading=!0,this.error=null,this.successMessage=null;try{const r=await qS(this.authInstance,e,n);return await GS(r.user,{displayName:t}),this.user=r.user,this.successMessage="Account created successfully!",!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async signInWithEmail(t,e){this.loading=!0,this.error=null,this.successMessage=null;try{const n=await zS(this.authInstance,t,e);return this.user=n.user,!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async signInWithGoogle(){this.loading=!0,this.error=null,this.successMessage=null;try{const t=new Qn,e=await gP(this.authInstance,t);return this.user=e.user,!0}catch(t){return this.error=t.message,!1}finally{this.loading=!1}},async sendPasswordReset(t){this.loading=!0,this.error=null,this.successMessage=null;try{return await jS(this.authInstance,t),this.successMessage="Password reset link sent to your email!",!0}catch(e){return this.error=e.message,!1}finally{this.loading=!1}},async confirmPasswordReset(t,e){this.loading=!0,this.error=null,this.successMessage=null;try{return await HS(this.authInstance,t,e),this.successMessage="Your password has been reset successfully! You can now sign in with your new password.",!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}}}}),Ls=V_("database",{state:()=>({loading:!1,error:null}),actions:{_getDBEssentials(){const t=Zt();if(!t.user?.uid)return this.error="User not authenticated. Operation cancelled.",null;const e=vo(),n="1:382664693760:web:7582abe58d70b3260f20e5",r=t.user.uid;return{db:e,appId:n,userId:r}},async setUserProfile(t,e){console.log(`[DB_STORE] setUserProfile: Updating profile for user ID: ${t}`),this.loading=!0,this.error=null;try{const n=vo(),s=An(n,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","users",t);return await f2(s,e,{merge:!0}),console.log(`[DB_STORE] setUserProfile: Successfully updated profile for ${t}.`),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async fetchUserProfile(t){this.loading=!0,this.error=null;try{const e=this._getDBEssentials();if(!e)return null;const{db:n,appId:r}=e,s=An(n,"artifacts",r,"users",t),i=await ch(s);return i.exists()?{id:i.id,...i.data()}:null}catch(e){return this.error=e.message,null}finally{this.loading=!1}},async addNewPatient(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=Ar(n,"artifacts",r,"patients"),o={...t,creatorId:s,createdAt:Re.now(),updatedAt:Re.now()};return(await fu(i,o)).id}catch(n){return this.error=n.message,null}finally{this.loading=!1}},async updatePatientProfile(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s}=n,i=An(r,"artifacts",s,"patients",t);return await du(i,{...e,updatedAt:Re.now()}),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async fetchPatientsForDoctor(){this.loading=!0,this.error=null;const t=this._getDBEssentials();if(!t)return[];try{const{db:e,appId:n,userId:r}=t,s=Ar(e,"artifacts",n,"patients"),i=zi(s,Ma("creatorId","==",r),La("createdAt","desc"));return(await Wi(i)).docs.map(l=>({id:l.id,...l.data()}))}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async deletePatientProfile(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return!1;try{const{db:n,appId:r}=e,s=y2(n),i=An(n,"artifacts",r,"patients",t);s.delete(i);const o=Ar(n,"artifacts",r,"scans"),l=zi(o,Ma("patientId","==",t));return(await Wi(l)).forEach(u=>s.delete(u.ref)),await s.commit(),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async createScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=Ar(n,"artifacts",r,"scans"),o={...t,scanDate:Re.fromDate(new Date(t.scanDate)),creatorId:s,isPersonalScan:t.patientId===s,createdAt:Re.now()};return(await fu(i,o)).id}catch(n){return this.error=n.message,null}finally{this.loading=!1}},async updateScan(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s}=n,i=An(r,"artifacts",s,"scans",t),o={...e,scanDate:Re.fromDate(new Date(e.scanDate)),updatedAt:Re.now()};return await du(i,o),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async deleteScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return!1;try{const{db:n,appId:r}=e,s=An(n,"artifacts",r,"scans",t);return await p2(s),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async fetchScansForPatient(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return[];try{const{db:n,appId:r}=e,s=Ar(n,"artifacts",r,"scans"),i=zi(s,Ma("patientId","==",t),La("scanDate","desc"));return(await Wi(i)).docs.map(l=>({id:l.id,...l.data()}))}catch(n){return this.error=n.message,[]}finally{this.loading=!1}},async fetchDoctorCreatedScans(){this.loading=!0,this.error=null;const t=this._getDBEssentials();if(!t)return[];try{const{db:e,appId:n,userId:r}=t,s=Ar(e,"artifacts",n,"scans"),i=zi(s,Ma("creatorId","==",r),La("scanDate","desc"));return(await Wi(i)).docs.map(l=>({id:l.id,...l.data()}))}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async addPregnancyDeclaration(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=Ar(n,"artifacts",r,"users",s,"pregnancies"),o={...t,status:"active",endDate:null,createdAt:Re.now()};return(await fu(i,o)).id}catch(n){return this.error=n.message,null}finally{this.loading=!1}},async fetchPregnancyHistory(){this.loading=!0,this.error=null;const t=this._getDBEssentials();if(!t)return[];try{const{db:e,appId:n,userId:r}=t,s=Ar(e,"artifacts",n,"users",r,"pregnancies"),i=zi(s,La("declarationDate","desc"));return(await Wi(i)).docs.map(l=>({id:l.id,...l.data()}))}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async updatePregnancyRecord(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s,userId:i}=n,o=An(r,"artifacts",s,"users",i,"pregnancies",t);return await du(o,{...e,updatedAt:Re.now()}),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async fetchSinglePatient(t){this.loading=!0,this.error=null;try{const e=vo(),r=An(e,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","patients",t),s=await ch(r);return s.exists()?{id:s.id,...s.data()}:(this.error=`No patient found with ID: ${t}`,console.warn(`[DB_STORE] No patient found with ID: ${t}`),null)}catch(e){return this.error=e.message,null}finally{this.loading=!1}}}}),At=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},_2=["dir"],v2={key:0,class:"loading-state"},E2={class:"counter-label"},w2={class:"progress-details"},b2={class:"counter-bar-container"},T2={class:"counter-value"},I2={__name:"MsvCounter",props:{currentMsv:{type:Number,default:0},yearlyLimit:{type:Number,default:1},currentLanguage:String,isLoading:{type:Boolean,default:!0}},setup(t){const e=t,n=ke(()=>e.currentMsv>=e.yearlyLimit?"status-danger":e.yearlyLimit>0?e.currentMsv/e.yearlyLimit*100<50?"status-safe":"status-warning":"status-safe");return(r,s)=>(K(),Y("div",{class:Ts(["msv-counter",n.value]),dir:t.currentLanguage==="en"?"ltr":"rtl"},[t.isLoading?(K(),Y("div",v2,R(t.currentLanguage==="en"?"Calculating...":"جاري الحساب..."),1)):(K(),Y(dt,{key:1},[g("span",E2,R(t.currentLanguage==="en"?"Annual Dose:":"الجرعة السنوية:"),1),g("div",w2,[g("div",b2,[g("div",{class:"counter-bar",style:$l({width:t.yearlyLimit>0?Math.min(t.currentMsv/t.yearlyLimit*100,100)+"%":"100%"})},null,4)]),g("span",T2,R(t.currentMsv.toFixed(2))+" mSv ",1)])],64))],10,_2))}},A2=At(I2,[["__scopeId","data-v-1d6333b5"]]),S2={class:"app-header"},P2={class:"app-header-center"},C2={class:"project-title"},R2={__name:"TheHeader",props:{currentLanguage:String,user:Object,msvData:Object},emits:["toggle-language","toggle-info-modal"],setup(t){return(e,n)=>(K(),Y("header",S2,[g("button",{onClick:n[0]||(n[0]=r=>e.$emit("toggle-language")),class:"language-toggle-button"},R(t.currentLanguage==="en"?"العربية":"English"),1),g("div",P2,[g("h1",C2,R(t.currentLanguage==="en"?"mSv Exposure Calculator":"حاسبة التعرض للأشعة"),1),t.user?(K(),Un(A2,{key:0,"current-msv":t.msvData.current,"yearly-limit":t.msvData.limit,"is-loading":t.msvData.isLoading,"current-language":t.currentLanguage},null,8,["current-msv","yearly-limit","is-loading","current-language"])):Te("",!0)]),g("button",{onClick:n[1]||(n[1]=r=>e.$emit("toggle-info-modal")),class:"info-button-global"},R(t.currentLanguage==="en"?"Information":"معلومات"),1)]))}},D2=At(R2,[["__scopeId","data-v-d06322cd"]]),k2=["dir"],O2={class:"modal-title"},x2={key:0,class:"info-text-content"},N2={key:1,class:"info-text-content"},V2=`
<p>التعرض الإشعاعي هو كمية الإشعاع التي يتلقاها الجسم عند مروره في بيئة تحتوي على إشعاع مؤين، مثل الأشعة السينية (X-rays) أو الأشعة المقطعية (CT). وتُقاس الجرعة الإشعاعية بوحدة "الميلي سيفرت" (mSv)، وهي وحدة تعكس التأثير البيولوجي للإشعاع على أنسجة الجسم.</p>
<p>تكمن الخطورة في أن الإشعاع المؤين يمكن أن يسبب تلفًا في الخلايا، مما يزيد من خطر الإصابة بالأمراض المزمنة مثل السرطان، خاصةً مع التعرض المتكرر أو الطويل. لذلك:</p>
<ul>
  <li><strong>المرضى</strong> يجب ألا يتعرضوا إلا عند الضرورة، ويجب تسجيل كل فحص وتقييم فائدته مقابل ضرره.</li>
  <li><strong>العاملون في المجال الطبي</strong> مثل أطباء الأشعة وفنيي الأشعة، يتعرضون بشكل مزمن، مما يستدعي مراقبة دورية واتباع إجراءات السلامة.</li>
  <li><strong>النساء الحوامل</strong> هن فئة خاصة يجب أخذ الحيطة الشديدة عند تعرّضهن للإشعاع لتجنّب التأثير على الجنين.</li>
</ul>
<p><strong>الحد السنوي المسموح به للتعرض الإشعاعي</strong><br>
وفقًا لتوصيات اللجنة الدولية للحماية من الإشعاع (ICRP)، هذه هي الحدود الموصى بها:</p>
`,M2=`
<p>Radiation exposure is the amount of radiation received by the body when passing through an environment containing ionizing radiation, such as X-rays or CT scans. The radiation dose is measured in "millisieverts" (mSv), a unit that reflects the biological effect of radiation on body tissues.</p>
<p>The danger lies in the fact that ionizing radiation can cause cell damage, increasing the risk of chronic diseases like cancer, especially with repeated or prolonged exposure. Therefore:</p>
<ul>
  <li><strong>Patients</strong> should only be exposed when necessary, and every examination should be recorded and its benefit evaluated against its harm.</li>
  <li><strong>Medical professionals</strong>, such as radiologists and radiology technicians, are chronically exposed, requiring periodic monitoring and adherence to safety procedures.</li>
  <li><strong>Pregnant women</strong> are a special category who should exercise extreme caution when exposed to radiation to avoid affecting the fetus.</li>
</ul>
<p><strong>Annual Permissible Radiation Exposure Limit</strong><br>
According to the recommendations of the International Commission on Radiological Protection (ICRP), these are the recommended limits:</p>
`,L2={__name:"InfoModal",props:{show:Boolean,currentLanguage:String},emits:["close"],setup(t){return(e,n)=>(K(),Un(ns,{name:"modal-fade"},{default:Fn(()=>[t.show?(K(),Y("div",{key:0,class:"modal-overlay",onClick:n[1]||(n[1]=rt(r=>e.$emit("close"),["self"]))},[g("div",{class:"modal-content",dir:t.currentLanguage==="ar"?"rtl":"ltr"},[g("button",{class:"close-modal-button",onClick:n[0]||(n[0]=r=>e.$emit("close"))},"×"),g("h2",O2,R(t.currentLanguage==="en"?"Radiation Exposure Awareness":"التوعية بالتعرض الإشعاعي"),1),t.currentLanguage==="en"?(K(),Y("div",x2,[g("div",{innerHTML:M2}),n[2]||(n[2]=g("div",{class:"overflow-x-auto mt-4"},[g("table",{class:"info-table"},[g("thead",null,[g("tr",null,[g("th",null,"Category"),g("th",null,"Annual Permissible Limit"),g("th",null,"Notes")])]),g("tbody",null,[g("tr",null,[g("td",null,"Medical Professionals"),g("td",null,"20 mSv"),g("td",null,"Averaged over 5 years, not exceeding 50 mSv in any single year.")]),g("tr",null,[g("td",null,"Patients"),g("td",null,"No strict limit"),g("td",null,"Exposure should be as low as reasonably achievable (ALARA principle).")]),g("tr",null,[g("td",null,"Pregnant Workers"),g("td",null,"1 mSv to the fetus"),g("td",null,"From the date of knowledge of pregnancy until birth.")]),g("tr",null,[g("td",null,"General Public"),g("td",null,"1 mSv"),g("td",null,"Under normal conditions without medical procedures.")])])])],-1))])):(K(),Y("div",N2,[g("div",{innerHTML:V2}),n[3]||(n[3]=g("div",{class:"overflow-x-auto mt-4"},[g("table",{class:"info-table"},[g("thead",null,[g("tr",null,[g("th",null,"الفئة"),g("th",null,"الحد السنوي المسموح به"),g("th",null,"ملاحظات")])]),g("tbody",null,[g("tr",null,[g("td",null,"العاملون في المجال الطبي"),g("td",null,"20 ميلي سيفرت (mSv)"),g("td",null,"كمتوسط على مدى 5 سنوات، بشرط ألا يتجاوز 50 mSv في سنة واحدة.")]),g("tr",null,[g("td",null,"المرضى"),g("td",null,"لا يوجد حد صارم"),g("td",null,"يجب تقليل التعرض بقدر الإمكان وفق مبدأ ALARA.")]),g("tr",null,[g("td",null,"النساء الحوامل العاملات"),g("td",null,"1 ميلي سيفرت للجنين خلال الحمل"),g("td",null,"يجب ألا تتجاوز الجرعة 1 mSv من تاريخ العلم بالحمل وحتى الولادة.")]),g("tr",null,[g("td",null,"العامة (غير العاملين بالمجال)"),g("td",null,"1 ميلي سيفرت"),g("td",null,"في الظروف الطبيعية بدون إجراءات طبية.")])])])],-1))]))],8,k2)])):Te("",!0)]),_:1}))}},F2=At(L2,[["__scopeId","data-v-13ace159"]]),$2={id:"app",class:"min-h-screen bg-gray-100 flex flex-col font-inter"},U2={__name:"App",setup(t){const e=Zt(),n=Ls(),r=Ae("en"),s=Ae(!1),i=Ae(0),o=Ae(20),l=Ae(!0),c=()=>{r.value=r.value==="en"?"ar":"en"},u=()=>{s.value=!s.value},h=p=>{if(!p)return null;if(typeof p.toDate=="function")return p.toDate();const y=new Date(p);return isNaN(y.getTime())?null:y},f=async()=>{if(console.log("%c[DOSE_CALC] Starting dose calculation...","color: blue; font-weight: bold;"),!e.user||!e.role){console.log("[DOSE_CALC] User or role not found. Aborting."),i.value=0,o.value=1,l.value=!1;return}l.value=!0;const p=e.user.uid,y=e.role;console.log(`[DOSE_CALC] User ID: ${p}, Role: ${y}`);try{const C=y==="doctor"?await n.fetchDoctorCreatedScans():await n.fetchScansForPatient(p);if(console.log(`[DOSE_CALC] Fetched ${C?.length||0} total scans.`),!C){l.value=!1;return}const O=new Date(new Date().getFullYear(),0,1),M=C.filter(x=>{const k=h(x.scanDate);return k&&k>=O});if(console.log(`[DOSE_CALC] Found ${M.length} scans this year.`),y==="doctor"){const x=M.reduce((F,W)=>W.isPersonalScan?F+(W.patientDose||0):F+(W.doctorDose||0),0);i.value=parseFloat(x.toFixed(3)),console.log(`[DOSE_CALC] Calculated total annual dose: ${x.toFixed(3)} mSv`),console.log("%c[DOSE_CALC] Checking pregnancy status...","color: #f5a623; font-weight: bold;");const k=e.userProfile,L=new Date;L.setHours(0,0,0,0);const U=k?h(k.estimatedDueDate):null;if(console.log("[DOSE_CALC] Profile data for check:",k),console.log("[DOSE_CALC] Profile 'isPregnant' flag:",k?.isPregnant),console.log("[DOSE_CALC] Parsed Due Date:",U),console.log("[DOSE_CALC] Today's Date:",L),U&&console.log("[DOSE_CALC] Is today before due date?",L<U),k?.isPregnant&&U&&L<U){console.log("%c[DOSE_CALC] --- ACTIVE PREGNANCY LOGIC ACTIVATED ---","color: purple; font-weight: bold;");const F=20-x,W=.5-x;console.log(`[DOSE_CALC] Remaining Annual Limit: ${F.toFixed(3)} mSv`),console.log(`[DOSE_CALC] Remaining Pregnancy Limit (stricter interpretation): ${W.toFixed(3)} mSv`),o.value=Math.max(0,Math.min(F,W)),console.log(`[DOSE_CALC] Final limit set to (strictest of the two): ${o.value.toFixed(3)} mSv`)}else console.log("%c[DOSE_CALC] --- STANDARD DOCTOR LOGIC ACTIVATED ---","color: green; font-weight: bold;"),o.value=20}else{console.log("%c[DOSE_CALC] --- PATIENT LOGIC ---","color: orange; font-weight: bold;"),o.value=1;const x=M.reduce((k,L)=>k+(L.patientDose||0),0);i.value=parseFloat(x.toFixed(3))}}catch(C){console.error("[DOSE_CALC_ERROR] Failed to update dose calculation:",C),i.value=0}finally{l.value=!1,console.log(`[DOSE_CALC] FINAL STATE -> currentMsv: ${i.value}, doseLimit: ${o.value}`),console.log("%c[DOSE_CALC] Dose calculation finished.","color: blue; font-weight: bold;")}};return G1(()=>{e.isAuthReady&&!e.isProfileLoading&&f()}),Pn("currentLanguage",r),Pn("toggleLanguage",c),Pn("toggleInfoModal",u),Pn("triggerMsvRecalculation",f),Pn("currentMsv",i),Pn("doseLimit",o),(p,y)=>(K(),Y("div",$2,[De(D2,{"current-language":r.value,user:_(e).user,"msv-data":{current:i.value,limit:o.value,isLoading:l.value},onToggleLanguage:c,onToggleInfoModal:u},null,8,["current-language","user","msv-data"]),De(_(D_),null,{default:Fn(({Component:C,route:O})=>[De(ns,{name:"page-fade",mode:"out-in"},{default:Fn(()=>[(K(),Un(I1(C),{key:O.path}))]),_:2},1024)]),_:1}),De(F2,{show:s.value,"current-language":r.value,onClose:u},null,8,["show","current-language"])]))}},B2={class:"signup-page"},j2={class:"signup-main-content"},H2={class:"signup-card"},q2=["dir"],z2=["dir"],W2={class:"form-group"},G2=["dir"],K2=["placeholder","dir"],Y2={class:"form-group"},Q2=["dir"],X2=["placeholder","dir"],J2={class:"form-group"},Z2=["dir"],ek=["placeholder","dir"],tk=["disabled"],nk={key:0},rk={key:1},sk=["dir"],ik=["dir"],ok=["disabled"],ak=["dir"],lk={__name:"SignupView",setup(t){const e=xs(),n=Zt(),r=Be("currentLanguage"),s=Ae(""),i=Ae(""),o=Ae(""),l=async()=>{if(i.value!==o.value){n.error=r.value==="en"?"Passwords do not match.":"كلمتا المرور غير متطابقتين.";return}await n.signupWithEmail("",s.value,i.value)},c=async()=>{await n.signInWithGoogle()?console.log("Successfully signed in with Google! Redirecting..."):console.error("Google sign-in failed:",n.error)},u=()=>{e.push("/signin")};return(h,f)=>(K(),Y("div",B2,[g("main",j2,[g("section",H2,[g("h2",{dir:_(r)==="ar"?"rtl":"ltr"},R(_(r)==="en"?"Welcome! Please Sign Up":"أهلاً بك! يرجى التسجيل"),9,q2),g("p",{dir:_(r)==="ar"?"rtl":"ltr"},R(_(r)==="en"?"Create your account to get started.":"أنشئ حسابك للبدء."),9,z2),g("form",{onSubmit:rt(l,["prevent"]),class:"signup-form"},[g("div",W2,[g("label",{for:"email",dir:_(r)==="ar"?"rtl":"ltr"},R(_(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,G2),fe(g("input",{type:"email",id:"email","onUpdate:modelValue":f[0]||(f[0]=p=>s.value=p),placeholder:_(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:_(r)==="ar"?"rtl":"ltr",required:""},null,8,K2),[[Oe,s.value]])]),g("div",Y2,[g("label",{for:"password",dir:_(r)==="ar"?"rtl":"ltr"},R(_(r)==="en"?"Password":"كلمة المرور"),9,Q2),fe(g("input",{type:"password",id:"password","onUpdate:modelValue":f[1]||(f[1]=p=>i.value=p),placeholder:_(r)==="en"?"Enter your password":"أدخل كلمة المرور",dir:_(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,X2),[[Oe,i.value]])]),g("div",J2,[g("label",{for:"confirmPassword",dir:_(r)==="ar"?"rtl":"ltr"},R(_(r)==="en"?"Confirm Password":"تأكيد كلمة المرور"),9,Z2),fe(g("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":f[2]||(f[2]=p=>o.value=p),placeholder:_(r)==="en"?"Confirm your password":"أكد كلمة المرور",dir:_(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,ek),[[Oe,o.value]])]),g("button",{class:"action-button primary",type:"submit",disabled:_(n).loading},[_(n).loading?(K(),Y("span",nk,R(_(r)==="en"?"Signing Up...":"جاري التسجيل..."),1)):(K(),Y("span",rk,R(_(r)==="en"?"Create Account":"إنشاء حساب"),1))],8,tk)],32),_(n).error?(K(),Y("div",{key:0,class:"message error-message",dir:_(r)==="ar"?"rtl":"ltr"},R(_(n).error),9,sk)):Te("",!0),g("div",{class:"divider",dir:_(r)==="ar"?"rtl":"ltr"},[g("span",null,R(_(r)==="en"?"OR":"أو"),1)],8,ik),g("button",{onClick:c,class:"action-button google-button",disabled:_(n).loading},[f[3]||(f[3]=d_('<svg class="google-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a6c83a63><path d="M44.5 20H24V28.5H35.5C34.75 31.85 32.5 34.5 29.5 36.5L24 41.5L24 48H32.5C39.5 48 44.5 43.5 44.5 36.5C44.5 35.5 44.3 34.5 44.1 33.5L44.5 20Z" fill="#4285F4" data-v-a6c83a63></path><path d="M24 44.5C29.5 44.5 34.25 42.5 37.75 39.25L29.5 36.5C27.25 37.75 24 38.5 24 38.5C18.5 38.5 13.75 34.25 11.75 28.5L6.25 33.5C8.75 38.75 15.5 44.5 24 44.5Z" fill="#34A853" data-v-a6c83a63></path><path d="M11.75 28.5C11.25 27.25 11 25.75 11 24C11 22.25 11.25 20.75 11.75 19.5L17.25 14.5C16 17.25 15.25 20.5 15.25 24C15.25 27.5 16 30.75 17.25 33.5L11.75 28.5Z" fill="#FBBC05" data-v-a6c83a63></path><path d="M24 9.5C26.75 9.5 29.25 10.5 31.25 12.25L36.5 7C32.5 3 27.25 0 24 0C15.5 0 8.75 5.75 6.25 11L11.75 16C13.75 10.25 18.5 6 24 6C24 6 24 9.5 24 9.5Z" fill="#EA4335" data-v-a6c83a63></path></svg>',1)),g("span",null,R(_(r)==="en"?"Sign Up with Google":"التسجيل باستخدام جوجل"),1)],8,ok),g("p",{class:"switch-link-container",dir:_(r)==="ar"?"rtl":"ltr"},[Ot(R(_(r)==="en"?"Already have an account?":"هل لديك حساب بالفعل؟")+" ",1),g("a",{href:"#",onClick:rt(u,["prevent"])},R(_(r)==="en"?"Sign In":"تسجيل الدخول"),1)],8,ak)])])]))}},ck=At(lk,[["__scopeId","data-v-a6c83a63"]]),uk={class:"login-page"},hk={class:"login-main-content"},dk={class:"login-card"},fk=["dir"],pk=["dir"],mk={class:"form-group"},gk=["dir"],yk=["placeholder","dir"],_k={class:"form-group"},vk=["dir"],Ek=["placeholder","dir"],wk=["dir"],bk=["disabled"],Tk={key:0},Ik={key:1},Ak=["dir"],Sk=["dir"],Pk=["dir"],Ck=["disabled"],Rk=["dir"],Dk={__name:"SigninView",setup(t){const e=xs(),n=Zt(),r=Be("currentLanguage"),s=Ae(""),i=Ae(""),o=async()=>{await n.signInWithEmail(s.value,i.value)},l=async()=>{await n.signInWithGoogle()},c=()=>{e.push("/")},u=()=>{e.push("/resetpassword")};return(h,f)=>(K(),Y("div",uk,[g("main",hk,[g("section",dk,[g("h2",{dir:_(r)==="ar"?"rtl":"ltr"},R(_(r)==="en"?"Welcome Back! Please Sign In":"أهلاً بعودتك! يرجى تسجيل الدخول"),9,fk),g("p",{dir:_(r)==="ar"?"rtl":"ltr"},R(_(r)==="en"?"Sign in to access your dashboard.":"سجّل الدخول للوصول إلى لوحة التحكم الخاصة بك."),9,pk),g("form",{onSubmit:rt(o,["prevent"]),class:"login-form"},[g("div",mk,[g("label",{for:"email",dir:_(r)==="ar"?"rtl":"ltr"},R(_(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,gk),fe(g("input",{type:"email",id:"email","onUpdate:modelValue":f[0]||(f[0]=p=>s.value=p),placeholder:_(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:_(r)==="ar"?"rtl":"ltr",required:""},null,8,yk),[[Oe,s.value]])]),g("div",_k,[g("label",{for:"password",dir:_(r)==="ar"?"rtl":"ltr"},R(_(r)==="en"?"Password":"كلمة المرور"),9,vk),fe(g("input",{type:"password",id:"password","onUpdate:modelValue":f[1]||(f[1]=p=>i.value=p),placeholder:_(r)==="en"?"Enter your password":"أدخل كلمة المرور",dir:_(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,Ek),[[Oe,i.value]]),g("p",{class:"forgot-password-link",dir:_(r)==="ar"?"rtl":"ltr"},[g("a",{href:"#",onClick:rt(u,["prevent"])},R(_(r)==="en"?"Forgot your password?":"هل نسيت كلمة المرور؟"),1)],8,wk)]),g("button",{class:"action-button primary",type:"submit",disabled:_(n).loading},[_(n).loading?(K(),Y("span",Tk,R(_(r)==="en"?"Signing In...":"جاري تسجيل الدخول..."),1)):(K(),Y("span",Ik,R(_(r)==="en"?"Sign in":"تسجيل الدخول"),1))],8,bk)],32),_(n).error?(K(),Y("div",{key:0,class:"message error-message",dir:_(r)==="ar"?"rtl":"ltr"},R(_(n).error),9,Ak)):Te("",!0),_(n).successMessage?(K(),Y("div",{key:1,class:"message success-message",dir:_(r)==="ar"?"rtl":"ltr"},R(_(n).successMessage),9,Sk)):Te("",!0),g("div",{class:"divider",dir:_(r)==="ar"?"rtl":"ltr"},[g("span",null,R(_(r)==="en"?"OR":"أو"),1)],8,Pk),g("button",{onClick:l,class:"action-button google-button",disabled:_(n).loading},[f[2]||(f[2]=d_('<svg class="google-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3884b703><path d="M44.5 20H24V28.5H35.5C34.75 31.85 32.5 34.5 29.5 36.5L24 41.5L24 48H32.5C39.5 48 44.5 43.5 44.5 36.5C44.5 35.5 44.3 34.5 44.1 33.5L44.5 20Z" fill="#4285F4" data-v-3884b703></path><path d="M24 44.5C29.5 44.5 34.25 42.5 37.75 39.25L29.5 36.5C27.25 37.75 24 38.5 24 38.5C18.5 38.5 13.75 34.25 11.75 28.5L6.25 33.5C8.75 38.75 15.5 44.5 24 44.5Z" fill="#34A853" data-v-3884b703></path><path d="M11.75 28.5C11.25 27.25 11 25.75 11 24C11 22.25 11.25 20.75 11.75 19.5L17.25 14.5C16 17.25 15.25 20.5 15.25 24C15.25 27.5 16 30.75 17.25 33.5L11.75 28.5Z" fill="#FBBC05" data-v-3884b703></path><path d="M24 9.5C26.75 9.5 29.25 10.5 31.25 12.25L36.5 7C32.5 3 27.25 0 24 0C15.5 0 8.75 5.75 6.25 11L11.75 16C13.75 10.25 18.5 6 24 6C24 6 24 9.5 24 9.5Z" fill="#EA4335" data-v-3884b703></path></svg>',1)),g("span",null,R(_(r)==="en"?"Sign in with Google":"تسجيل الدخول باستخدام جوجل"),1)],8,Ck),g("p",{class:"switch-link-container",dir:_(r)==="ar"?"rtl":"ltr"},[Ot(R(_(r)==="en"?"Don't have an account?":"ليس لديك حساب؟")+" ",1),g("a",{href:"#",onClick:rt(c,["prevent"])},R(_(r)==="en"?"Sign Up":"التسجيل"),1)],8,Rk)])])]))}},kk=At(Dk,[["__scopeId","data-v-3884b703"]]),Ok=["dir"],xk={class:"recommend-main-content"},Nk={class:"recommend-card"},Vk={class:"mode-switcher"},Mk={key:0,class:"loading-overlay"},Lk={key:1,class:"patient-info-display"},Fk={class:"form-group"},$k=["disabled"],Uk={class:"form-group"},Bk=["disabled"],jk={value:"male"},Hk={value:"female"},qk={key:0,class:"pregnancy-section"},zk={class:"form-group checkbox-group"},Wk=["disabled"],Gk={key:0,class:"form-group"},Kk=["disabled"],Yk={class:"form-group"},Qk=["disabled"],Xk={class:"form-group"},Jk={key:1,class:"doctor-exposure-section"},Zk={class:"section-title"},eO={class:"form-group"},tO={class:"section-title"},nO={class:"form-row"},rO={class:"form-group"},sO={value:"CT"},iO={value:"X-ray"},oO={class:"form-group"},aO={disabled:"",value:""},lO=["value"],cO={key:2,class:"form-group"},uO=["placeholder"],hO=["disabled"],dO={key:2,class:"message error-message"},fO={key:3,class:"prediction-result-wrapper"},pO={key:0,class:"message warning-message"},mO={class:"prediction-result"},gO={class:"msv-details-container"},yO={key:0,class:"msv-details"},_O={key:1,class:"msv-details doctor-dose"},vO={class:"result-text"},EO={class:"switch-link-container"},wO={__name:"RecommendView",setup(t){const e=xs(),n=XT(),r=Zt(),s=Ls(),i=Be("currentLanguage"),o=Be("currentMsv"),l=Be("doseLimit"),c={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Swallow",en:"Barium Swallow",ar:"بلع الباريوم"},{value:"Barium Meal",en:"Barium Meal",ar:"وجبة الباريوم"},{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},u=Ae("personal"),h=Ae({patientId:null,patientName:"",birthDate:"",gender:"male",patientCumulativeDose:0,medicalHistory:"",currentSymptoms:"",allergies:"",isPregnant:!1,estimatedDueDate:"",scanType:"CT",subScanType:"",otherScanDescription:"",doctorAdditionalContext:""}),f=Ae(!1),p=Ae(!1),y=Ae(null),C=Ae(""),O=ke(()=>r.role),M=ke(()=>O.value==="doctor"&&u.value==="personal"),x=ke(()=>c[h.value.scanType]||[]),k=ke(()=>h.value.subScanType==="Other"),L=ke(()=>u.value==="personal"?i.value==="en"?"Your Estimated Dose":"جرعتك المقدرة":i.value==="en"?"Patient Dose":"جرعة المريض"),U=ke(()=>i.value==="en"?"Occupational Dose":"الجرعة المهنية"),F=ke(()=>!y.value||y.value.doctorOccupationalMsv==null?!1:!(O.value==="doctor"&&u.value==="personal")),W=()=>{h.value={patientId:null,patientName:"",birthDate:"",gender:"male",patientCumulativeDose:0,medicalHistory:"",currentSymptoms:"",allergies:"",isPregnant:!1,estimatedDueDate:"",scanType:"CT",subScanType:"",otherScanDescription:"",doctorAdditionalContext:""}},A=S=>S?(typeof S.toDate=="function"?S.toDate():new Date(S)).toISOString().split("T")[0]:"",E=async S=>{if(S){p.value=!0,W();try{let b=S===r.user?.uid?r.userProfile:await s.fetchSinglePatient(S);if(b){h.value.patientId=S,h.value.patientName=b.displayName||b.name||"",h.value.birthDate=A(b.birthDate),h.value.gender=b.gender||"male",h.value.isPregnant=b.isPregnant||!1,h.value.estimatedDueDate=A(b.estimatedDueDate),h.value.medicalHistory=Array.isArray(b.medicalHistory)?b.medicalHistory.join(", "):"",h.value.allergies=Array.isArray(b.allergies)?b.allergies.join(", "):"";const T=await s.fetchScansForPatient(S);if(T){const I=new Date(new Date().getFullYear(),0,1),Ce=be=>be?be.toDate?be.toDate():new Date(be):null,Ue=T.filter(be=>Ce(be.scanDate)>=I);h.value.patientCumulativeDose=parseFloat(Ue.reduce((be,me)=>be+(me.patientDose||0),0).toFixed(3))}}}catch(b){console.error("Error fetching patient details:",b),C.value=i.value==="en"?"Failed to load patient data.":"فشل في تحميل بيانات المريض."}finally{p.value=!1}}};et(u,S=>{y.value=null,S==="personal"&&r.user?E(r.user.uid):n.query.patientId||W()}),et(()=>n.query.patientId,S=>{S?(u.value="general",E(S)):r.user&&(u.value="personal",E(r.user.uid))},{immediate:!0}),et(()=>h.value.isPregnant,S=>{S||(h.value.estimatedDueDate="")}),et(()=>h.value.scanType,()=>{h.value.subScanType="",h.value.otherScanDescription=""});const w=async()=>{if(f.value=!0,C.value="",y.value=null,!h.value.birthDate||!h.value.subScanType||k.value&&!h.value.otherScanDescription){C.value=i.value==="en"?"Please complete all required fields.":"يرجى إكمال جميع الحقول المطلوبة.",f.value=!1;return}if(h.value.isPregnant&&!h.value.estimatedDueDate){C.value=i.value==="en"?"Estimated Due Date is required for pregnant patients.":"تاريخ الولادة المتوقع مطلوب للحامل.",f.value=!1;return}const S=new Date().getFullYear()-new Date(h.value.birthDate).getFullYear();let b="Not pregnant.";h.value.isPregnant&&h.value.estimatedDueDate&&(b=`Pregnant with an estimated due date of ${h.value.estimatedDueDate}. The AI must carefully weigh risks, especially during the first trimester.`);const T=k.value?h.value.otherScanDescription:h.value.subScanType;let I="",Ce={};O.value==="doctor"?(I=`As a medical radiation safety advisor, provide a recommendation for a patient scan, adhering strictly to the ALARA principle.
- Scenario Context: A doctor is considering a scan. ${M.value?"The doctor IS THE PATIENT.":"The doctor is the PRACTITIONER."}
- Doctor's State: Annual occupational dose is ${o.value.toFixed(2)} mSv. The annual limit is ${l.value} mSv.
- Patient Details:
  - Age: ${S}, Gender: ${h.value.gender}.
  - Pregnancy Status: ${b}
  - Patient's cumulative dose this year: ${h.value.patientCumulativeDose} mSv.
- Scan being considered:
  - Category: ${h.value.scanType}
  - Protocol: "${T}"
- Doctor's Exposure Context: ${h.value.doctorAdditionalContext||"No additional context provided."}

Tasks:
1. **Recommendation (recommendationText):** Justify if the scan is appropriate, considering the specific protocol, existing dose, and pregnancy status.
2. **Patient Dose (patientCalculatedMsv):** Estimate the patient's effective dose in mSv from THIS SCAN.
3. **Occupational Dose (doctorOccupationalMsv):** If practitioner, estimate occupational dose. If patient, this MUST be 0.
4. **Warning (Warning):** Warn if the patient's new total dose will exceed the 1 mSv public limit, or if the doctor's new occupational dose exceeds their limit.

Respond ONLY with valid JSON in ${i.value==="en"?"English":"Arabic"}.`,Ce={type:"OBJECT",properties:{recommendationText:{type:"STRING"},patientCalculatedMsv:{type:"NUMBER"},doctorOccupationalMsv:{type:"NUMBER"},Warning:{type:"STRING"}},required:["recommendationText","patientCalculatedMsv","doctorOccupationalMsv","Warning"]}):(I=`As a patient advocate, explain a medical scan.
- My estimated radiation dose this year: ${h.value.patientCumulativeDose} mSv.
- My Details: Born on ${h.value.birthDate}, Gender: ${h.value.gender}, Pregnancy: ${b}.
- Scan being considered:
  - Category: ${h.value.scanType}
  - Protocol: "${T}"
Tasks:
1. **Information (recommendationText):** Explain the purpose of this scan in simple terms.
2. **Dose Estimation (patientCalculatedMsv):** Estimate my dose in mSv from THIS SCAN.
3. **Warning (Warning):** If my new total dose exceeds 1 mSv, provide a clear warning.

Respond ONLY with valid JSON in ${i.value==="en"?"English":"Arabic"}.`,Ce={type:"OBJECT",properties:{recommendationText:{type:"STRING"},patientCalculatedMsv:{type:"NUMBER"},Warning:{type:"STRING"}},required:["recommendationText","patientCalculatedMsv","Warning"]});try{const Se=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB9KAR0P6sxAj7fP2I-MyVSVOJJaW0J91M",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:I}]}],generationConfig:{responseMimeType:"application/json",responseSchema:Ce}})});if(!Se.ok)throw new Error(`API Error: ${Se.statusText}`);const Lt=await Se.json();y.value=JSON.parse(Lt.candidates[0].content.parts[0].text)}catch(Ue){console.error("Error getting recommendation:",Ue),C.value=i.value==="en"?`An error occurred: ${Ue.message}`:`حدث خطأ: ${Ue.message}`}finally{f.value=!1}};return(S,b)=>(K(),Y("div",{class:"recommend-page",dir:_(i)==="ar"?"rtl":"ltr"},[g("main",xk,[g("section",Nk,[g("h2",null,R(_(i)==="en"?"Medical Scan Recommendation":"توصية الفحص الطبي"),1),g("p",null,R(_(i)==="en"?"Get an AI-powered recommendation based on patient details and radiation safety principles.":"احصل على توصية مدعومة بالذكاء الاصطناعي بناءً على تفاصيل المريض ومبادئ السلامة من الإشعاع."),1),g("div",Vk,[g("button",{class:Ts({active:u.value==="personal"}),onClick:b[0]||(b[0]=T=>u.value="personal")},R(_(i)==="en"?"For Myself":"لنفسي"),3),O.value==="doctor"?(K(),Y("button",{key:0,class:Ts({active:u.value==="general"}),onClick:b[1]||(b[1]=T=>u.value="general")},R(_(i)==="en"?"For Another Patient":"لمريض آخر"),3)):Te("",!0)]),p.value?(K(),Y("div",Mk,[g("span",null,R(_(i)==="en"?"Loading Patient Data...":"جاري تحميل بيانات المريض..."),1)])):Te("",!0),h.value.patientId&&h.value.patientName?(K(),Y("div",Lk,[Ot(R(_(i)==="en"?"Getting recommendation for:":"الحصول على توصية لـ:")+" ",1),g("strong",null,R(h.value.patientName),1)])):Te("",!0),g("form",{onSubmit:rt(w,["prevent"]),class:"recommend-form"},[g("div",Fk,[g("label",null,[Ot(R(_(i)==="en"?"Date of Birth":"تاريخ الميلاد")+" ",1),b[13]||(b[13]=g("span",{class:"required-indicator"},"*",-1))]),fe(g("input",{type:"date","onUpdate:modelValue":b[2]||(b[2]=T=>h.value.birthDate=T),disabled:u.value==="personal",required:""},null,8,$k),[[Oe,h.value.birthDate]])]),g("div",Uk,[g("label",null,[Ot(R(_(i)==="en"?"Gender":"الجنس")+" ",1),b[14]||(b[14]=g("span",{class:"required-indicator"},"*",-1))]),fe(g("select",{"onUpdate:modelValue":b[3]||(b[3]=T=>h.value.gender=T),disabled:u.value==="personal",required:""},[g("option",jk,R(_(i)==="en"?"Male":"ذكر"),1),g("option",Hk,R(_(i)==="en"?"Female":"أنثى"),1)],8,Bk),[[cn,h.value.gender]])]),h.value.gender==="female"?(K(),Y("div",qk,[g("div",zk,[g("label",null,[fe(g("input",{type:"checkbox","onUpdate:modelValue":b[4]||(b[4]=T=>h.value.isPregnant=T),disabled:u.value==="personal"},null,8,Wk),[[Kl,h.value.isPregnant]]),g("span",null,R(_(i)==="en"?"Is Pregnant?":"هل هي حامل؟"),1)])]),h.value.isPregnant?(K(),Y("div",Gk,[g("label",null,[Ot(R(_(i)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع")+" ",1),b[15]||(b[15]=g("span",{class:"required-indicator"},"*",-1))]),fe(g("input",{type:"date","onUpdate:modelValue":b[5]||(b[5]=T=>h.value.estimatedDueDate=T),disabled:u.value==="personal",required:""},null,8,Kk),[[Oe,h.value.estimatedDueDate]])])):Te("",!0)])):Te("",!0),g("div",Yk,[g("label",null,R(_(i)==="en"?"Relevant Medical History":"التاريخ الطبي ذو الصلة"),1),fe(g("textarea",{"onUpdate:modelValue":b[6]||(b[6]=T=>h.value.medicalHistory=T),rows:"3",disabled:u.value==="personal"},null,8,Qk),[[Oe,h.value.medicalHistory]])]),g("div",Xk,[g("label",null,R(_(i)==="en"?"Current Symptoms":"الأعراض الحالية"),1),fe(g("textarea",{"onUpdate:modelValue":b[7]||(b[7]=T=>h.value.currentSymptoms=T),rows:"3"},null,512),[[Oe,h.value.currentSymptoms]])]),O.value==="doctor"&&u.value==="general"?(K(),Y("div",Jk,[g("h3",Zk,R(_(i)==="en"?"Occupational Exposure Context":"سياق التعرض المهني"),1),g("div",eO,[g("label",null,R(_(i)==="en"?"Your positioning, shielding, etc. (Optional)":"موقعك، التدريع المستخدم، إلخ (اختياري)"),1),fe(g("textarea",{"onUpdate:modelValue":b[8]||(b[8]=T=>h.value.doctorAdditionalContext=T),rows:"3"},null,512),[[Oe,h.value.doctorAdditionalContext]])])])):Te("",!0),g("h3",tO,R(_(i)==="en"?"Scan to Consider":"الفحص المقترح"),1),g("div",nO,[g("div",rO,[g("label",null,[Ot(R(_(i)==="en"?"Scan Category":"فئة الفحص")+" ",1),b[16]||(b[16]=g("span",{class:"required-indicator"},"*",-1))]),fe(g("select",{"onUpdate:modelValue":b[9]||(b[9]=T=>h.value.scanType=T),required:""},[g("option",sO,R(_(i)==="en"?"CT Scan":"الأشعة المقطعية"),1),g("option",iO,R(_(i)==="en"?"X-ray":"الأشعة السينية"),1)],512),[[cn,h.value.scanType]])]),g("div",oO,[g("label",null,[Ot(R(_(i)==="en"?"Scan Protocol":"بروتوكول الفحص")+" ",1),b[17]||(b[17]=g("span",{class:"required-indicator"},"*",-1))]),fe(g("select",{"onUpdate:modelValue":b[10]||(b[10]=T=>h.value.subScanType=T),required:""},[g("option",aO,R(_(i)==="en"?"Select...":"اختر..."),1),(K(!0),Y(dt,null,vi(x.value,T=>(K(),Y("option",{key:T.value,value:T.value},R(_(i)==="en"?T.en:T.ar),9,lO))),128))],512),[[cn,h.value.subScanType]])])]),k.value?(K(),Y("div",cO,[g("label",null,[Ot(R(_(i)==="en"?"Please specify scan protocol":"يرجى تحديد بروتوكول الفحص")+" ",1),b[18]||(b[18]=g("span",{class:"required-indicator"},"*",-1))]),fe(g("input",{type:"text","onUpdate:modelValue":b[11]||(b[11]=T=>h.value.otherScanDescription=T),placeholder:_(i)==="en"?"e.g., Chest X-ray":"مثال: أشعة سينية للصدر",required:""},null,8,uO),[[Oe,h.value.otherScanDescription]])])):Te("",!0),g("button",{type:"submit",disabled:f.value,class:"action-button"},R(f.value?_(i)==="en"?"Getting Recommendations...":"جاري الحصول على التوصيات...":_(i)==="en"?"Get Recommendation":"الحصول على توصية"),9,hO)],32),C.value?(K(),Y("div",dO,R(C.value),1)):Te("",!0),y.value?(K(),Y("div",fO,[y.value.Warning?(K(),Y("div",pO,[g("h4",null,R(_(i)==="en"?"Important Warning":"تحذير هام"),1),g("p",null,R(y.value.Warning),1)])):Te("",!0),g("div",mO,[g("h3",null,R(_(i)==="en"?"AI Powered Recommendation":"التوصية المدعومة بالذكاء الاصطناعي"),1),g("div",gO,[y.value.patientCalculatedMsv!==null?(K(),Y("div",yO,[g("h4",null,R(L.value),1),g("p",null,[g("strong",null,R(y.value.patientCalculatedMsv)+" mSv",1)])])):Te("",!0),F.value?(K(),Y("div",_O,[g("h4",null,R(U.value),1),g("p",null,[g("strong",null,R(y.value.doctorOccupationalMsv)+" mSv",1)])])):Te("",!0)]),g("div",vO,[g("h4",null,R(_(i)==="en"?"Recommendation":"التوصية"),1),g("p",null,R(y.value.recommendationText),1)])])])):Te("",!0),g("p",EO,[g("a",{href:"#",onClick:b[12]||(b[12]=rt(T=>_(e).push("/dashboard"),["prevent"]))},R(_(i)==="en"?"Back to Dashboard":"العودة إلى لوحة التحكم"),1)])])])],8,Ok))}},bO=At(wO,[["__scopeId","data-v-d3d48df9"]]);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function TO(t,e,n){return(e=AO(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Dg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function X(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Dg(Object(n),!0).forEach(function(r){TO(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Dg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function IO(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function AO(t){var e=IO(t,"string");return typeof e=="symbol"?e:e+""}const kg=()=>{};let zd={},uw={},hw=null,dw={mark:kg,measure:kg};try{typeof window<"u"&&(zd=window),typeof document<"u"&&(uw=document),typeof MutationObserver<"u"&&(hw=MutationObserver),typeof performance<"u"&&(dw=performance)}catch{}const{userAgent:Og=""}=zd.navigator||{},Zr=zd,Xe=uw,xg=hw,Fa=dw;Zr.document;const mr=!!Xe.documentElement&&!!Xe.head&&typeof Xe.addEventListener=="function"&&typeof Xe.createElement=="function",fw=~Og.indexOf("MSIE")||~Og.indexOf("Trident/");var SO=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,PO=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,pw={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},CO={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},mw=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Mt="classic",Ec="duotone",RO="sharp",DO="sharp-duotone",gw=[Mt,Ec,RO,DO],kO={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},OO={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},xO=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),NO={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},VO=["fak","fa-kit","fakd","fa-kit-duotone"],Ng={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},MO=["kit"],LO={kit:{"fa-kit":"fak"}},FO=["fak","fakd"],$O={kit:{fak:"fa-kit"}},Vg={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},$a={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},UO=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],BO=["fak","fa-kit","fakd","fa-kit-duotone"],jO={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},HO={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},qO={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},uh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},zO=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],hh=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...UO,...zO],WO=["solid","regular","light","thin","duotone","brands"],yw=[1,2,3,4,5,6,7,8,9,10],GO=yw.concat([11,12,13,14,15,16,17,18,19,20]),KO=[...Object.keys(qO),...WO,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$a.GROUP,$a.SWAP_OPACITY,$a.PRIMARY,$a.SECONDARY].concat(yw.map(t=>"".concat(t,"x"))).concat(GO.map(t=>"w-".concat(t))),YO={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const cr="___FONT_AWESOME___",dh=16,_w="fa",vw="svg-inline--fa",Ds="data-fa-i2svg",fh="data-fa-pseudo-element",QO="data-fa-pseudo-element-pending",Wd="data-prefix",Gd="data-icon",Mg="fontawesome-i2svg",XO="async",JO=["HTML","HEAD","STYLE","SCRIPT"],Ew=(()=>{try{return!0}catch{return!1}})();function la(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Mt]}})}const ww=X({},pw);ww[Mt]=X(X(X(X({},{"fa-duotone":"duotone"}),pw[Mt]),Ng.kit),Ng["kit-duotone"]);const ZO=la(ww),ph=X({},NO);ph[Mt]=X(X(X(X({},{duotone:"fad"}),ph[Mt]),Vg.kit),Vg["kit-duotone"]);const Lg=la(ph),mh=X({},uh);mh[Mt]=X(X({},mh[Mt]),$O.kit);const Kd=la(mh),gh=X({},HO);gh[Mt]=X(X({},gh[Mt]),LO.kit);la(gh);const ex=SO,bw="fa-layers-text",tx=PO,nx=X({},kO);la(nx);const rx=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mu=CO,sx=[...MO,...KO],Eo=Zr.FontAwesomeConfig||{};function ix(t){var e=Xe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ox(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Xe&&typeof Xe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=ox(ix(n));s!=null&&(Eo[r]=s)});const Tw={styleDefault:"solid",familyDefault:Mt,cssPrefix:_w,replacementClass:vw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Eo.familyPrefix&&(Eo.cssPrefix=Eo.familyPrefix);const yi=X(X({},Tw),Eo);yi.autoReplaceSvg||(yi.observeMutations=!1);const ce={};Object.keys(Tw).forEach(t=>{Object.defineProperty(ce,t,{enumerable:!0,set:function(e){yi[t]=e,wo.forEach(n=>n(ce))},get:function(){return yi[t]}})});Object.defineProperty(ce,"familyPrefix",{enumerable:!0,set:function(t){yi.cssPrefix=t,wo.forEach(e=>e(ce))},get:function(){return yi.cssPrefix}});Zr.FontAwesomeConfig=ce;const wo=[];function ax(t){return wo.push(t),()=>{wo.splice(wo.indexOf(t),1)}}const Sr=dh,Rn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function lx(t){if(!t||!mr)return;const e=Xe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Xe.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Xe.head.insertBefore(e,r),t}const cx="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Bo(){let t=12,e="";for(;t-- >0;)e+=cx[Math.random()*62|0];return e}function Ci(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Yd(t){return t.classList?Ci(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Iw(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ux(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Iw(t[n]),'" '),"").trim()}function wc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Qd(t){return t.size!==Rn.size||t.x!==Rn.x||t.y!==Rn.y||t.rotate!==Rn.rotate||t.flipX||t.flipY}function hx(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:u}}function dx(t){let{transform:e,width:n=dh,height:r=dh,startCentered:s=!1}=t,i="";return s&&fw?i+="translate(".concat(e.x/Sr-n/2,"em, ").concat(e.y/Sr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/Sr,"em), calc(-50% + ").concat(e.y/Sr,"em)) "):i+="translate(".concat(e.x/Sr,"em, ").concat(e.y/Sr,"em) "),i+="scale(".concat(e.size/Sr*(e.flipX?-1:1),", ").concat(e.size/Sr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var fx=`:root, :host {
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
}`;function Aw(){const t=_w,e=vw,n=ce.cssPrefix,r=ce.replacementClass;let s=fx;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return s}let Fg=!1;function gu(){ce.autoAddCss&&!Fg&&(lx(Aw()),Fg=!0)}var px={mixout(){return{dom:{css:Aw,insertCss:gu}}},hooks(){return{beforeDOMElementCreation(){gu()},beforeI2svg(){gu()}}}};const ur=Zr||{};ur[cr]||(ur[cr]={});ur[cr].styles||(ur[cr].styles={});ur[cr].hooks||(ur[cr].hooks={});ur[cr].shims||(ur[cr].shims=[]);var Dn=ur[cr];const Sw=[],Pw=function(){Xe.removeEventListener("DOMContentLoaded",Pw),kl=1,Sw.map(t=>t())};let kl=!1;mr&&(kl=(Xe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Xe.readyState),kl||Xe.addEventListener("DOMContentLoaded",Pw));function mx(t){mr&&(kl?setTimeout(t,0):Sw.push(t))}function ca(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Iw(t):"<".concat(e," ").concat(ux(n),">").concat(r.map(ca).join(""),"</").concat(e,">")}function $g(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var yu=function(e,n,r,s){var i=Object.keys(e),o=i.length,l=n,c,u,h;for(r===void 0?(c=1,h=e[i[0]]):(c=0,h=r);c<o;c++)u=i[c],h=l(h,e[u],u,e);return h};function gx(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function yh(t){const e=gx(t);return e.length===1?e[0].toString(16):null}function yx(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Ug(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function _h(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=Ug(e);typeof Dn.hooks.addPack=="function"&&!r?Dn.hooks.addPack(t,Ug(e)):Dn.styles[t]=X(X({},Dn.styles[t]||{}),s),t==="fas"&&_h("fa",e)}const{styles:jo,shims:_x}=Dn,Cw=Object.keys(Kd),vx=Cw.reduce((t,e)=>(t[e]=Object.keys(Kd[e]),t),{});let Xd=null,Rw={},Dw={},kw={},Ow={},xw={};function Ex(t){return~sx.indexOf(t)}function wx(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!Ex(s)?s:null}const Nw=()=>{const t=r=>yu(jo,(s,i,o)=>(s[o]=yu(i,r,{}),s),{});Rw=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=i}),r)),Dw=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=i}),r)),xw=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(l=>{r[l]=i}),r});const e="far"in jo||ce.autoFetchSvg,n=yu(_x,(r,s)=>{const i=s[0];let o=s[1];const l=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});kw=n.names,Ow=n.unicodes,Xd=bc(ce.styleDefault,{family:ce.familyDefault})};ax(t=>{Xd=bc(t.styleDefault,{family:ce.familyDefault})});Nw();function Jd(t,e){return(Rw[t]||{})[e]}function bx(t,e){return(Dw[t]||{})[e]}function vs(t,e){return(xw[t]||{})[e]}function Vw(t){return kw[t]||{prefix:null,iconName:null}}function Tx(t){const e=Ow[t],n=Jd("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function es(){return Xd}const Mw=()=>({prefix:null,iconName:null,rest:[]});function Ix(t){let e=Mt;const n=Cw.reduce((r,s)=>(r[s]="".concat(ce.cssPrefix,"-").concat(s),r),{});return gw.forEach(r=>{(t.includes(n[r])||t.some(s=>vx[r].includes(s)))&&(e=r)}),e}function bc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Mt}=e,r=ZO[n][t];if(n===Ec&&!t)return"fad";const s=Lg[n][t]||Lg[n][r],i=t in Dn.styles?t:null;return s||i||null}function Ax(t){let e=[],n=null;return t.forEach(r=>{const s=wx(ce.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function Bg(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Tc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=hh.concat(BO),i=Bg(t.filter(f=>s.includes(f))),o=Bg(t.filter(f=>!hh.includes(f))),l=i.filter(f=>(r=f,!mw.includes(f))),[c=null]=l,u=Ix(i),h=X(X({},Ax(o)),{},{prefix:bc(c,{family:u})});return X(X(X({},h),Rx({values:t,family:u,styles:jo,config:ce,canonical:h,givenPrefix:r})),Sx(n,r,h))}function Sx(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?Vw(s):{},o=vs(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!jo.far&&jo.fas&&!ce.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const Px=gw.filter(t=>t!==Mt||t!==Ec),Cx=Object.keys(uh).filter(t=>t!==Mt).map(t=>Object.keys(uh[t])).flat();function Rx(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,l=n===Ec,c=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!l&&(c||u||h)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Px.includes(n)&&(Object.keys(i).find(p=>Cx.includes(p))||o.autoFetchSvg)){const p=xO.get(n).defaultShortPrefixId;r.prefix=p,r.iconName=vs(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=es()||"fas"),r}class Dx{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=X(X({},this.definitions[i]||{}),s[i]),_h(i,s[i]);const o=Kd[Mt][i];o&&_h(o,s[i]),Nw()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:l}=r[s],c=l[2];e[i]||(e[i]={}),c.length>0&&c.forEach(u=>{typeof u=="string"&&(e[i][u]=l)}),e[i][o]=l}),e}}let jg=[],Qs={};const ii={},kx=Object.keys(ii);function Ox(t,e){let{mixoutsTo:n}=e;return jg=t,Qs={},Object.keys(ii).forEach(r=>{kx.indexOf(r)===-1&&delete ii[r]}),jg.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Qs[o]||(Qs[o]=[]),Qs[o].push(i[o])})}r.provides&&r.provides(ii)}),n}function vh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(Qs[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function ks(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Qs[t]||[]).forEach(i=>{i.apply(null,n)})}function ts(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ii[t]?ii[t].apply(null,e):void 0}function Eh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||es();if(e)return e=vs(n,e)||e,$g(Lw.definitions,n,e)||$g(Dn.styles,n,e)}const Lw=new Dx,xx=()=>{ce.autoReplaceSvg=!1,ce.observeMutations=!1,ks("noAuto")},Nx={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mr?(ks("beforeI2svg",t),ts("pseudoElements2svg",t),ts("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;ce.autoReplaceSvg===!1&&(ce.autoReplaceSvg=!0),ce.observeMutations=!0,mx(()=>{Mx({autoReplaceSvgRoot:e}),ks("watch",t)})}},Vx={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:vs(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=bc(t[0]);return{prefix:n,iconName:vs(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(ce.cssPrefix,"-"))>-1||t.match(ex))){const e=Tc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||es(),iconName:vs(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=es();return{prefix:e,iconName:vs(e,t)||t}}}},en={noAuto:xx,config:ce,dom:Nx,parse:Vx,library:Lw,findIconDefinition:Eh,toHtml:ca},Mx=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Xe}=t;(Object.keys(Dn.styles).length>0||ce.autoFetchSvg)&&mr&&ce.autoReplaceSvg&&en.dom.i2svg({node:e})};function Ic(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ca(n))}}),Object.defineProperty(t,"node",{get:function(){if(!mr)return;const n=Xe.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Lx(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(Qd(o)&&n.found&&!r.found){const{width:l,height:c}=n,u={x:l/c/2,y:.5};s.style=wc(X(X({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function Fx(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(ce.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:X(X({},s),{},{id:o}),children:r}]}]}function Zd(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:l,maskId:c,titleId:u,extra:h,watchable:f=!1}=t,{width:p,height:y}=n.found?n:e,C=FO.includes(r),O=[ce.replacementClass,s?"".concat(ce.cssPrefix,"-").concat(s):""].filter(F=>h.classes.indexOf(F)===-1).filter(F=>F!==""||!!F).concat(h.classes).join(" ");let M={children:[],attributes:X(X({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:O,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(y)})};const x=C&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/y*16*.0625,"em")}:{};f&&(M.attributes[Ds]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(u||Bo())},children:[l]}),delete M.attributes.title);const k=X(X({},M),{},{prefix:r,iconName:s,main:e,mask:n,maskId:c,transform:i,symbol:o,styles:X(X({},x),h.styles)}),{children:L,attributes:U}=n.found&&e.found?ts("generateAbstractMask",k)||{children:[],attributes:{}}:ts("generateAbstractIcon",k)||{children:[],attributes:{}};return k.children=L,k.attributes=U,o?Fx(k):Lx(k)}function Hg(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:l=!1}=t,c=X(X(X({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Ds]="");const u=X({},o.styles);Qd(s)&&(u.transform=dx({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=wc(u);h.length>0&&(c.style=h);const f=[];return f.push({tag:"span",attributes:c,children:[e]}),i&&f.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),f}function $x(t){const{content:e,title:n,extra:r}=t,s=X(X(X({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=wc(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:_u}=Dn;function wh(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(ce.cssPrefix,"-").concat(mu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ce.cssPrefix,"-").concat(mu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(ce.cssPrefix,"-").concat(mu.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const Ux={found:!1,width:512,height:512};function Bx(t,e){!Ew&&!ce.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function bh(t,e){let n=e;return e==="fa"&&ce.styleDefault!==null&&(e=es()),new Promise((r,s)=>{if(n==="fa"){const i=Vw(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&_u[e]&&_u[e][t]){const i=_u[e][t];return r(wh(i))}Bx(t,e),r(X(X({},Ux),{},{icon:ce.showMissingIcons&&t?ts("missingIconAbstract")||{}:{}}))})}const qg=()=>{},Th=ce.measurePerformance&&Fa&&Fa.mark&&Fa.measure?Fa:{mark:qg,measure:qg},eo='FA "6.7.2"',jx=t=>(Th.mark("".concat(eo," ").concat(t," begins")),()=>Fw(t)),Fw=t=>{Th.mark("".concat(eo," ").concat(t," ends")),Th.measure("".concat(eo," ").concat(t),"".concat(eo," ").concat(t," begins"),"".concat(eo," ").concat(t," ends"))};var ef={begin:jx,end:Fw};const el=()=>{};function zg(t){return typeof(t.getAttribute?t.getAttribute(Ds):null)=="string"}function Hx(t){const e=t.getAttribute?t.getAttribute(Wd):null,n=t.getAttribute?t.getAttribute(Gd):null;return e&&n}function qx(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ce.replacementClass)}function zx(){return ce.autoReplaceSvg===!0?tl.replace:tl[ce.autoReplaceSvg]||tl.replace}function Wx(t){return Xe.createElementNS("http://www.w3.org/2000/svg",t)}function Gx(t){return Xe.createElement(t)}function $w(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Wx:Gx}=e;if(typeof t=="string")return Xe.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild($w(i,{ceFn:n}))}),r}function Kx(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const tl={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore($w(n),e)}),e.getAttribute(Ds)===null&&ce.keepOriginalSource){let n=Xe.createComment(Kx(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Yd(e).indexOf(ce.replacementClass))return tl.replace(t);const r=new RegExp("".concat(ce.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,l)=>(l===ce.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>ca(i)).join(`
`);e.setAttribute(Ds,""),e.innerHTML=s}};function Wg(t){t()}function Uw(t,e){const n=typeof e=="function"?e:el;if(t.length===0)n();else{let r=Wg;ce.mutateApproach===XO&&(r=Zr.requestAnimationFrame||Wg),r(()=>{const s=zx(),i=ef.begin("mutate");t.map(s),i(),n()})}}let tf=!1;function Bw(){tf=!0}function Ih(){tf=!1}let Ol=null;function Gg(t){if(!xg||!ce.observeMutations)return;const{treeCallback:e=el,nodeCallback:n=el,pseudoElementsCallback:r=el,observeMutationsRoot:s=Xe}=t;Ol=new xg(i=>{if(tf)return;const o=es();Ci(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!zg(l.addedNodes[0])&&(ce.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&ce.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&zg(l.target)&&~rx.indexOf(l.attributeName))if(l.attributeName==="class"&&Hx(l.target)){const{prefix:c,iconName:u}=Tc(Yd(l.target));l.target.setAttribute(Wd,c||o),u&&l.target.setAttribute(Gd,u)}else qx(l.target)&&n(l.target)})}),mr&&Ol.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Yx(){Ol&&Ol.disconnect()}function Qx(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function Xx(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=Tc(Yd(t));return s.prefix||(s.prefix=es()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=bx(s.prefix,t.innerText)||Jd(s.prefix,yh(t.innerText))),!s.iconName&&ce.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function Jx(t){const e=Ci(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ce.autoA11y&&(n?e["aria-labelledby"]="".concat(ce.replacementClass,"-title-").concat(r||Bo()):(e["aria-hidden"]="true",e.focusable="false")),e}function Zx(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Rn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Kg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=Xx(t),i=Jx(t),o=vh("parseNodeAttributes",{},t);let l=e.styleParser?Qx(t):[];return X({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Rn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:i}},o)}const{styles:eN}=Dn;function jw(t){const e=ce.autoReplaceSvg==="nest"?Kg(t,{styleParser:!1}):Kg(t);return~e.extra.classes.indexOf(bw)?ts("generateLayersText",t,e):ts("generateSvgReplacementMutation",t,e)}function tN(){return[...VO,...hh]}function Yg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!mr)return Promise.resolve();const n=Xe.documentElement.classList,r=h=>n.add("".concat(Mg,"-").concat(h)),s=h=>n.remove("".concat(Mg,"-").concat(h)),i=ce.autoFetchSvg?tN():mw.concat(Object.keys(eN));i.includes("fa")||i.push("fa");const o=[".".concat(bw,":not([").concat(Ds,"])")].concat(i.map(h=>".".concat(h,":not([").concat(Ds,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=Ci(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),s("complete");else return Promise.resolve();const c=ef.begin("onTree"),u=l.reduce((h,f)=>{try{const p=jw(f);p&&h.push(p)}catch(p){Ew||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise((h,f)=>{Promise.all(u).then(p=>{Uw(p,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),h()})}).catch(p=>{c(),f(p)})})}function nN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jw(t).then(n=>{n&&Uw([n],e)})}function rN(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Eh(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:Eh(s||{})),t(r,X(X({},n),{},{mask:s}))}}const sN=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Rn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:l=null,classes:c=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:f,iconName:p,icon:y}=t;return Ic(X({type:"icon"},t),()=>(ks("beforeDOMElementCreation",{iconDefinition:t,params:e}),ce.autoA11y&&(o?u["aria-labelledby"]="".concat(ce.replacementClass,"-title-").concat(l||Bo()):(u["aria-hidden"]="true",u.focusable="false")),Zd({icons:{main:wh(y),mask:s?wh(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:p,transform:X(X({},Rn),n),symbol:r,title:o,maskId:i,titleId:l,extra:{attributes:u,styles:h,classes:c}})))};var iN={mixout(){return{icon:rN(sN)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Yg,t.nodeCallback=nN,t}}},provides(t){t.i2svg=function(e){const{node:n=Xe,callback:r=()=>{}}=e;return Yg(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:l,symbol:c,mask:u,maskId:h,extra:f}=n;return new Promise((p,y)=>{Promise.all([bh(r,o),u.iconName?bh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(C=>{let[O,M]=C;p([e,Zd({icons:{main:O,mask:M},prefix:o,iconName:r,transform:l,symbol:c,maskId:h,title:s,titleId:i,extra:f,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const l=wc(o);l.length>0&&(r.style=l);let c;return Qd(i)&&(c=ts("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(c||s.icon),{children:n,attributes:r}}}},oN={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Ic({type:"layer"},()=>{ks("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ce.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},aN={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return Ic({type:"counter",content:t},()=>(ks("beforeDOMElementCreation",{content:t,params:e}),$x({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(ce.cssPrefix,"-layers-counter"),...r]}})))}}}},lN={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Rn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return Ic({type:"text",content:t},()=>(ks("beforeDOMElementCreation",{content:t,params:e}),Hg({content:t,transform:X(X({},Rn),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(ce.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,l=null;if(fw){const c=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/c,l=u.height/c}return ce.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Hg({content:e.innerHTML,width:o,height:l,transform:s,title:r,extra:i,watchable:!0})])}}};const cN=new RegExp('"',"ug"),Qg=[1105920,1112319],Xg=X(X(X(X({},{FontAwesome:{normal:"fas",400:"fas"}}),OO),YO),jO),Ah=Object.keys(Xg).reduce((t,e)=>(t[e.toLowerCase()]=Xg[e],t),{}),uN=Object.keys(Ah).reduce((t,e)=>{const n=Ah[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function hN(t){const e=t.replace(cN,""),n=yx(e,0),r=n>=Qg[0]&&n<=Qg[1],s=e.length===2?e[0]===e[1]:!1;return{value:yh(s?e[0]:e),isSecondary:r||s}}function dN(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Ah[n]||{})[s]||uN[n]}function Jg(t,e){const n="".concat(QO).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=Ci(t.children).filter(p=>p.getAttribute(fh)===e)[0],l=Zr.getComputedStyle(t,e),c=l.getPropertyValue("font-family"),u=c.match(tx),h=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&f!=="none"&&f!==""){const p=l.getPropertyValue("content");let y=dN(c,h);const{value:C,isSecondary:O}=hN(p),M=u[0].startsWith("FontAwesome");let x=Jd(y,C),k=x;if(M){const L=Tx(C);L.iconName&&L.prefix&&(x=L.iconName,y=L.prefix)}if(x&&!O&&(!o||o.getAttribute(Wd)!==y||o.getAttribute(Gd)!==k)){t.setAttribute(n,k),o&&t.removeChild(o);const L=Zx(),{extra:U}=L;U.attributes[fh]=e,bh(x,y).then(F=>{const W=Zd(X(X({},L),{},{icons:{main:F,mask:Mw()},prefix:y,iconName:k,extra:U,watchable:!0})),A=Xe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(A,t.firstChild):t.appendChild(A),A.outerHTML=W.map(E=>ca(E)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function fN(t){return Promise.all([Jg(t,"::before"),Jg(t,"::after")])}function pN(t){return t.parentNode!==document.head&&!~JO.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(fh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Zg(t){if(mr)return new Promise((e,n)=>{const r=Ci(t.querySelectorAll("*")).filter(pN).map(fN),s=ef.begin("searchPseudoElements");Bw(),Promise.all(r).then(()=>{s(),Ih(),e()}).catch(()=>{s(),Ih(),n()})})}var mN={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Zg,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Xe}=e;ce.searchPseudoElements&&Zg(n)}}};let ey=!1;var gN={mixout(){return{dom:{unwatch(){Bw(),ey=!0}}}},hooks(){return{bootstrap(){Gg(vh("mutationObserverCallbacks",{}))},noAuto(){Yx()},watch(t){const{observeMutationsRoot:e}=t;ey?Ih():Gg(vh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const ty=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var yN={mixout(){return{parse:{transform:t=>ty(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=ty(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:h,path:f};return{tag:"g",attributes:X({},p.outer),children:[{tag:"g",attributes:X({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:X(X({},n.icon.attributes),p.path)}]}]}}}};const vu={x:0,y:0,width:"100%",height:"100%"};function ny(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function _N(t){return t.tag==="g"?t.children:[t]}var vN={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Tc(n.split(" ").map(s=>s.trim())):Mw();return r.prefix||(r.prefix=es()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:l}=e;const{width:c,icon:u}=s,{width:h,icon:f}=i,p=hx({transform:l,containerWidth:h,iconWidth:c}),y={tag:"rect",attributes:X(X({},vu),{},{fill:"white"})},C=u.children?{children:u.children.map(ny)}:{},O={tag:"g",attributes:X({},p.inner),children:[ny(X({tag:u.tag,attributes:X(X({},u.attributes),p.path)},C))]},M={tag:"g",attributes:X({},p.outer),children:[O]},x="mask-".concat(o||Bo()),k="clip-".concat(o||Bo()),L={tag:"mask",attributes:X(X({},vu),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,M]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:_N(f)},L]};return n.push(U,{tag:"rect",attributes:X({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(x,")")},vu)}),{children:n,attributes:r}}}},EN={provides(t){let e=!1;Zr.matchMedia&&(e=Zr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:X(X({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=X(X({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:X(X({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:X(X({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:X(X({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:X(X({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:X(X({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:X(X({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:X(X({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},wN={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},bN=[px,iN,oN,aN,lN,mN,gN,yN,vN,EN,wN];Ox(bN,{mixoutsTo:en});en.noAuto;en.config;const TN=en.library;en.dom;const Sh=en.parse;en.findIconDefinition;en.toHtml;const IN=en.icon;en.layer;en.text;en.counter;function ry(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Xn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ry(Object(n),!0).forEach(function(r){zt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ry(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function AN(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function SN(t){var e=AN(t,"string");return typeof e=="symbol"?e:e+""}function xl(t){"@babel/helpers - typeof";return xl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xl(t)}function zt(t,e,n){return e=SN(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function PN(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function CN(t,e){if(t==null)return{};var n=PN(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var RN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Hw={exports:{}};(function(t){(function(e){var n=function(x,k,L){if(!u(k)||f(k)||p(k)||y(k)||c(k))return k;var U,F=0,W=0;if(h(k))for(U=[],W=k.length;F<W;F++)U.push(n(x,k[F],L));else{U={};for(var A in k)Object.prototype.hasOwnProperty.call(k,A)&&(U[x(A,L)]=n(x,k[A],L))}return U},r=function(x,k){k=k||{};var L=k.separator||"_",U=k.split||/(?=[A-Z])/;return x.split(U).join(L)},s=function(x){return C(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(k,L){return L?L.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var k=s(x);return k.substr(0,1).toUpperCase()+k.substr(1)},o=function(x,k){return r(x,k).toLowerCase()},l=Object.prototype.toString,c=function(x){return typeof x=="function"},u=function(x){return x===Object(x)},h=function(x){return l.call(x)=="[object Array]"},f=function(x){return l.call(x)=="[object Date]"},p=function(x){return l.call(x)=="[object RegExp]"},y=function(x){return l.call(x)=="[object Boolean]"},C=function(x){return x=x-0,x===x},O=function(x,k){var L=k&&"process"in k?k.process:k;return typeof L!="function"?x:function(U,F){return L(U,x,F)}},M={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,k){return n(O(s,k),x)},decamelizeKeys:function(x,k){return n(O(o,k),x,k)},pascalizeKeys:function(x,k){return n(O(i,k),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=M:e.humps=M})(RN)})(Hw);var DN=Hw.exports,kN=["class","style"];function ON(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=DN.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function xN(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function qw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return qw(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,u){var h=t.attributes[u];switch(u){case"class":c.class=xN(h);break;case"style":c.style=ON(h);break;default:c.attrs[u]=h}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,l=CN(n,kN);return oi(t.tag,Xn(Xn(Xn({},e),{},{class:s.class,style:Xn(Xn({},s.style),o)},s.attrs),l),r)}var zw=!1;try{zw=!0}catch{}function NN(){if(!zw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Eu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?zt({},t,e):{}}function VN(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},zt(zt(zt(zt(zt(zt(zt(zt(zt(zt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),zt(zt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function sy(t){if(t&&xl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Sh.icon)return Sh.icon(t);if(t===null)return null;if(xl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var an=jh({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=ke(function(){return sy(e.icon)}),i=ke(function(){return Eu("classes",VN(e))}),o=ke(function(){return Eu("transform",typeof e.transform=="string"?Sh.transform(e.transform):e.transform)}),l=ke(function(){return Eu("mask",sy(e.mask))}),c=ke(function(){return IN(s.value,Xn(Xn(Xn(Xn({},i.value),o.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});et(c,function(h){if(!h)return NN("Could not find one or more icon(s)",s.value,l.value)},{immediate:!0});var u=ke(function(){return c.value?qw(c.value.abstract[0],{},r):null});return function(){return u.value}}});const MN=["dir"],LN={class:"modal-title"},FN={class:"form-group"},$N={class:"form-group"},UN={class:"form-group"},BN={value:"male"},jN={value:"female"},HN={key:0,class:"pregnancy-section"},qN={class:"form-group checkbox-group"},zN={key:0,class:"form-group"},WN={class:"form-group"},GN={class:"form-group"},KN={class:"modal-actions"},YN=["disabled"],QN={__name:"PatientFormModal",props:{show:Boolean,patient:Object,isSaving:Boolean},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=Be("currentLanguage"),i=hr({id:null,name:"",birthDate:"",gender:"male",isPregnant:!1,estimatedDueDate:"",medicalHistory:"",allergies:""});et(()=>n.show,l=>{l&&(n.patient?(i.id=n.patient.id,i.name=n.patient.name,i.gender=n.patient.gender,i.isPregnant=n.patient.isPregnant||!1,i.birthDate=n.patient.birthDate?.toDate?n.patient.birthDate.toDate().toISOString().split("T")[0]:"",i.estimatedDueDate=n.patient.estimatedDueDate?.toDate?n.patient.estimatedDueDate.toDate().toISOString().split("T")[0]:"",i.medicalHistory=Array.isArray(n.patient.medicalHistory)?n.patient.medicalHistory.join(", "):"",i.allergies=Array.isArray(n.patient.allergies)?n.patient.allergies.join(", "):""):Object.assign(i,{id:null,name:"",birthDate:"",gender:"male",isPregnant:!1,estimatedDueDate:"",medicalHistory:"",allergies:""}))},{immediate:!0}),et(()=>i.isPregnant,l=>{l||(i.estimatedDueDate="")});const o=()=>{if(!i.name||!i.birthDate){alert("Name and Date of Birth are required.");return}if(i.isPregnant&&!i.estimatedDueDate){alert("Please provide the estimated due date for the pregnancy.");return}(i.gender==="male"||!i.isPregnant)&&(i.isPregnant=!1,i.estimatedDueDate=null);const l={...i,birthDate:new Date(i.birthDate),estimatedDueDate:i.estimatedDueDate?new Date(i.estimatedDueDate):null,medicalHistory:i.medicalHistory.split(",").map(c=>c.trim()).filter(Boolean),allergies:i.allergies.split(",").map(c=>c.trim()).filter(Boolean)};r("save",l)};return(l,c)=>(K(),Un(ns,{name:"modal-fade"},{default:Fn(()=>[t.show?(K(),Y("div",{key:0,class:"modal-overlay",onClick:c[9]||(c[9]=rt(u=>l.$emit("close"),["self"]))},[g("div",{class:"modal-content",dir:_(s)==="ar"?"rtl":"ltr"},[g("button",{onClick:c[0]||(c[0]=u=>l.$emit("close")),class:"close-button"},"×"),g("h3",LN,R(t.patient?"Edit Patient":"Add New Patient"),1),g("form",{onSubmit:rt(o,["prevent"]),class:"patient-form"},[g("div",FN,[g("label",null,R(_(s)==="en"?"Name":"الاسم"),1),fe(g("input",{type:"text","onUpdate:modelValue":c[1]||(c[1]=u=>i.name=u),required:""},null,512),[[Oe,i.name]])]),g("div",$N,[g("label",null,R(_(s)==="en"?"Date of Birth":"تاريخ الميلاد"),1),fe(g("input",{type:"date","onUpdate:modelValue":c[2]||(c[2]=u=>i.birthDate=u),required:""},null,512),[[Oe,i.birthDate]])]),g("div",UN,[g("label",null,R(_(s)==="en"?"Gender":"الجنس"),1),fe(g("select",{"onUpdate:modelValue":c[3]||(c[3]=u=>i.gender=u)},[g("option",BN,R(_(s)==="en"?"Male":"ذكر"),1),g("option",jN,R(_(s)==="en"?"Female":"أنثى"),1)],512),[[cn,i.gender]])]),i.gender==="female"?(K(),Y("div",HN,[g("div",qN,[g("label",null,[fe(g("input",{type:"checkbox","onUpdate:modelValue":c[4]||(c[4]=u=>i.isPregnant=u)},null,512),[[Kl,i.isPregnant]]),g("span",null,R(_(s)==="en"?"Currently Pregnant?":"هل هي حامل حاليًا؟"),1)])]),i.isPregnant?(K(),Y("div",zN,[g("label",null,R(_(s)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع"),1),fe(g("input",{type:"date","onUpdate:modelValue":c[5]||(c[5]=u=>i.estimatedDueDate=u),required:""},null,512),[[Oe,i.estimatedDueDate]])])):Te("",!0)])):Te("",!0),g("div",WN,[g("label",null,R(_(s)==="en"?"Medical History (comma-separated)":"التاريخ الطبي"),1),fe(g("textarea",{"onUpdate:modelValue":c[6]||(c[6]=u=>i.medicalHistory=u),rows:"3"},null,512),[[Oe,i.medicalHistory]])]),g("div",GN,[g("label",null,R(_(s)==="en"?"Allergies (comma-separated)":"الحساسية"),1),fe(g("textarea",{"onUpdate:modelValue":c[7]||(c[7]=u=>i.allergies=u),rows:"3"},null,512),[[Oe,i.allergies]])]),g("div",KN,[g("button",{type:"submit",class:"action-button",disabled:t.isSaving},R(t.isSaving?"Saving...":"Save"),9,YN),g("button",{type:"button",onClick:c[8]||(c[8]=u=>l.$emit("close")),class:"action-button secondary"}," Cancel ")])],32)],8,MN)])):Te("",!0)]),_:1}))}},XN=At(QN,[["__scopeId","data-v-6c2953db"]]),JN=["dir"],ZN={key:0,class:"patient-context-display"},eV={key:0,class:"form-row pregnancy-section"},tV={class:"form-group checkbox-group"},nV={key:0,class:"form-group"},rV={class:"form-row"},sV={class:"form-group"},iV={value:"X-ray"},oV={value:"CT"},aV={class:"form-group"},lV={disabled:"",value:""},cV=["value"],uV={key:1,class:"form-group"},hV=["placeholder"],dV={class:"form-group"},fV={class:"form-row"},pV={class:"form-group"},mV={class:"form-group"},gV={class:"form-group"},yV={class:"form-group"},_V={class:"form-group"},vV={class:"modal-actions"},EV=["disabled"],wV={__name:"ScanFormModal",props:{show:Boolean,scan:Object,isSaving:Boolean,patient:{type:Object,default:null}},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=Be("currentLanguage"),i={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Swallow",en:"Barium Swallow",ar:"بلع الباريوم"},{value:"Barium Meal",en:"Barium Meal",ar:"وجبة الباريوم"},{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},o=hr({id:null,isPregnant:!1,pregnancyMonth:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanDate:"",dose:null,doctorDose:null,reason:"",notes:"",doctorAdditionalContext:""}),l=ke(()=>i[o.scanType]||[]),c=ke(()=>o.subScanType==="Other");et(()=>n.show,f=>{if(f&&(Object.assign(o,{id:null,isPregnant:!1,pregnancyMonth:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanDate:"",dose:null,doctorDose:null,reason:"",notes:"",doctorAdditionalContext:""}),n.scan)){o.id=n.scan.id,o.isPregnant=n.scan.isPregnant||!1,o.pregnancyMonth=n.scan.pregnancyMonth||null,o.scanType=n.scan.scanType;const p=n.scan.scanDate?.toDate?n.scan.scanDate.toDate():new Date(n.scan.scanDate);o.scanDate=p.toISOString().split("T")[0]||"",o.dose=n.scan.patientDose,o.doctorDose=n.scan.doctorDose,o.reason=n.scan.reason,o.notes=n.scan.notes,o.doctorAdditionalContext=n.scan.doctorAdditionalContext;const y=n.scan.scanDetail;l.value.some(O=>O.value===y)?o.subScanType=y:y&&(o.subScanType="Other",o.otherScanDescription=y)}}),et(()=>o.scanType,()=>{o.subScanType="",o.otherScanDescription=""}),et(()=>o.isPregnant,f=>{f||(o.pregnancyMonth=null)});const u=async f=>{const p=l.value.find(M=>M.value===o.subScanType);let y="";c.value?y=o.otherScanDescription:p&&(y=s.value==="en"?p.en:p.ar);let C="";f==="patient"?C=`Estimate the typical effective dose (in mSv) for a patient undergoing a ${o.scanType} scan with the specific protocol: "${y}". Patient Age: ${n.patient?.age||"N/A"}. Reason for scan: "${o.reason||"Not provided"}". Respond ONLY with a single number.`:C=`Estimate the typical occupational dose (in mSv) for a doctor during a patient's ${o.scanType} scan with protocol "${y}". Doctor's additional context: "${o.doctorAdditionalContext||"None"}". Respond ONLY with a single number.`;let O={};f==="patient"?O=o.scanType==="CT"?{min:.5,max:40}:{min:.001,max:10}:O={min:0,max:2};try{const L=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB9KAR0P6sxAj7fP2I-MyVSVOJJaW0J91M",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:C}]}],generationConfig:{responseMimeType:"text/plain"}})});if(!L.ok)throw new Error(`API Error: ${L.statusText}`);const F=(await L.json()).candidates?.[0]?.content?.parts?.[0]?.text||"",W=parseFloat(F.match(/[\d.]+/));if(isNaN(W)||W<O.min||W>O.max)throw new Error("AI returned an invalid or out-of-range value.");return f==="patient"?o.dose=W:o.doctorDose=W,!0}catch(M){return console.error(`Dose estimation failed for ${f}:`,M),alert(s.value==="en"?`AI estimation for the ${f} failed. Please enter it manually.`:`فشل تقدير الذكاء الاصطناعي لـ ${f==="patient"?"المريض":"الطبيب"}. يرجى إدخاله يدويًا.`),!1}},h=async()=>{if(!o.scanDate||!o.subScanType||o.subScanType==="Other"&&!o.otherScanDescription){alert(s.value==="en"?"Please fill all required scan details.":"يرجى ملء جميع تفاصيل الفحص المطلوبة.");return}if(n.patient&&(o.dose===null||o.dose==="")&&!await u("patient")||(o.doctorDose===null||o.doctorDose==="")&&!await u("doctor"))return;const f=c.value?o.otherScanDescription:o.subScanType,p={id:o.id,isPregnant:o.isPregnant,pregnancyMonth:o.pregnancyMonth,scanType:o.scanType,scanDetail:f,scanDate:o.scanDate,patientDose:o.dose,doctorDose:o.doctorDose,reason:o.reason,notes:o.notes,doctorAdditionalContext:o.doctorAdditionalContext,patientId:n.patient?.id};r("save",p)};return(f,p)=>(K(),Un(ns,{name:"modal-fade"},{default:Fn(()=>[t.show?(K(),Y("div",{key:0,class:"modal-overlay",onClick:p[13]||(p[13]=rt(y=>f.$emit("close"),["self"]))},[g("div",{class:"modal-content",dir:_(s)==="ar"?"rtl":"ltr"},[g("button",{class:"close-modal-button",onClick:p[0]||(p[0]=y=>f.$emit("close"))},"×"),g("h3",null,R(t.scan?_(s)==="en"?"Edit Scan Record":"تعديل سجل الفحص":_(s)==="en"?"Add New Scan Record":"إضافة سجل فحص جديد"),1),t.patient?(K(),Y("div",ZN,[Ot(R(_(s)==="en"?"For Patient":"للمريض")+": ",1),g("strong",null,R(t.patient.name),1)])):Te("",!0),g("form",{onSubmit:rt(h,["prevent"]),class:"scan-form"},[t.patient?.gender==="female"?(K(),Y("div",eV,[g("div",tV,[g("label",null,[fe(g("input",{type:"checkbox","onUpdate:modelValue":p[1]||(p[1]=y=>o.isPregnant=y)},null,512),[[Kl,o.isPregnant]]),g("span",null,R(_(s)==="en"?"Is Pregnant?":"هل المريضة حامل؟"),1)])]),o.isPregnant?(K(),Y("div",nV,[g("label",null,R(_(s)==="en"?"Month of Pregnancy":"شهر الحمل"),1),fe(g("input",{type:"number","onUpdate:modelValue":p[2]||(p[2]=y=>o.pregnancyMonth=y),min:"1",max:"9",placeholder:"1-9"},null,512),[[Oe,o.pregnancyMonth]])])):Te("",!0)])):Te("",!0),g("div",rV,[g("div",sV,[g("label",null,R(_(s)==="en"?"Scan Category":"فئة الفحص"),1),fe(g("select",{"onUpdate:modelValue":p[3]||(p[3]=y=>o.scanType=y),required:""},[g("option",iV,R(_(s)==="en"?"X-ray":"أشعة سينية"),1),g("option",oV,R(_(s)==="en"?"CT":"أشعة مقطعية"),1)],512),[[cn,o.scanType]])]),g("div",aV,[g("label",null,R(_(s)==="en"?"Scan Protocol":"بروتوكول الفحص"),1),fe(g("select",{"onUpdate:modelValue":p[4]||(p[4]=y=>o.subScanType=y),required:""},[g("option",lV,R(_(s)==="en"?"Select...":"اختر..."),1),(K(!0),Y(dt,null,vi(l.value,y=>(K(),Y("option",{key:y.value,value:y.value},R(_(s)==="en"?y.en:y.ar),9,cV))),128))],512),[[cn,o.subScanType]])])]),c.value?(K(),Y("div",uV,[g("label",null,R(_(s)==="en"?"Please specify scan protocol":"يرجى تحديد بروتوكول الفحص"),1),fe(g("input",{type:"text","onUpdate:modelValue":p[5]||(p[5]=y=>o.otherScanDescription=y),placeholder:_(s)==="en"?"e.g., Chest X-ray":"مثال: أشعة سينية للصدر",required:""},null,8,hV),[[Oe,o.otherScanDescription]])])):Te("",!0),g("div",dV,[g("label",null,R(_(s)==="en"?"Scan Date":"تاريخ الفحص"),1),fe(g("input",{type:"date","onUpdate:modelValue":p[6]||(p[6]=y=>o.scanDate=y),required:""},null,512),[[Oe,o.scanDate]])]),g("div",fV,[g("div",pV,[g("label",null,R(_(s)==="en"?"Patient's Dose (mSv)":"جرعة المريض (mSv)"),1),fe(g("input",{type:"number",step:"0.01","onUpdate:modelValue":p[7]||(p[7]=y=>o.dose=y)},null,512),[[Oe,o.dose]])]),g("div",mV,[g("label",null,R(_(s)==="en"?"Doctor's Dose (mSv)":"جرعة الطبيب (mSv)"),1),fe(g("input",{type:"number",step:"0.01","onUpdate:modelValue":p[8]||(p[8]=y=>o.doctorDose=y)},null,512),[[Oe,o.doctorDose]])])]),g("div",gV,[g("label",null,R(_(s)==="en"?"Reason for Scan":"أسباب الفحص"),1),fe(g("textarea",{"onUpdate:modelValue":p[9]||(p[9]=y=>o.reason=y),rows:"2"},null,512),[[Oe,o.reason]])]),g("div",yV,[g("label",null,R(_(s)==="en"?"Additional Notes":"ملاحظات إضافية"),1),fe(g("textarea",{"onUpdate:modelValue":p[10]||(p[10]=y=>o.notes=y),rows:"3"},null,512),[[Oe,o.notes]])]),g("div",_V,[g("label",null,R(_(s)==="en"?"Details affecting your exposure (optional)":"تفاصيل إضافية على تعرضك (اختياري)"),1),fe(g("textarea",{"onUpdate:modelValue":p[11]||(p[11]=y=>o.doctorAdditionalContext=y),rows:"2"},null,512),[[Oe,o.doctorAdditionalContext]])]),g("div",vV,[g("button",{type:"submit",class:"action-button",disabled:t.isSaving},R(t.isSaving?_(s)==="en"?"Saving...":"جار الحفظ...":_(s)==="en"?"Save":"حفظ"),9,EV),g("button",{type:"button",onClick:p[12]||(p[12]=y=>f.$emit("close")),class:"action-button secondary"},R(_(s)==="en"?"Cancel":"إلغاء"),1)])],32)],8,JN)])):Te("",!0)]),_:1}))}},bV=At(wV,[["__scopeId","data-v-136a2ae9"]]),TV={class:"modal-content delete-confirm-modal"},IV={class:"modal-title"},AV={class:"warning-text"},SV={class:"modal-actions"},PV={__name:"ConfirmDeleteModal",props:{show:Boolean,title:String,message:String},emits:["close","confirm"],setup(t){const e=Be("triggerMsvRecalculation"),n=Be("currentLanguage");return(r,s)=>(K(),Un(ns,{name:"modal-fade"},{default:Fn(()=>[t.show?(K(),Y("div",{key:0,class:"modal-overlay",onClick:s[2]||(s[2]=rt(i=>r.$emit("close"),["self"]))},[g("div",TV,[g("h3",IV,R(t.title),1),g("p",null,R(t.message),1),g("p",AV,R(_(n)==="en"?"This action cannot be undone.":"لا يمكن التراجع عن هذا الإجراء."),1),g("div",SV,[g("button",{onClick:s[0]||(s[0]=i=>r.$emit("close")),class:"action-button secondary"},R(_(n)==="en"?"Cancel":"إلغاء"),1),g("button",{onClick:s[1]||(s[1]=i=>{r.$emit("confirm"),_(e)()}),class:"action-button delete-button-confirm"},R(_(n)==="en"?"Delete":"حذف"),1)])])])):Te("",!0)]),_:1}))}},nf=At(PV,[["__scopeId","data-v-acf7426f"]]),CV=["dir"],RV={key:0},DV={class:"scans-list-container"},kV={key:0,class:"loading-message"},OV={key:1,class:"no-scans-message"},xV={key:2,class:"scans-list"},NV={class:"scan-info"},VV={class:"scan-type"},MV={class:"scan-date"},LV={class:"scan-dose"},FV={class:"scan-actions"},$V=["onClick"],UV=["onClick"],BV={__name:"PatientDetailsModal",props:{show:Boolean,patient:Object},emits:["close"],setup(t,{emit:e}){const n=t,r=Ls(),s=Be("currentLanguage"),i=Be("triggerMsvRecalculation"),o=Ae([]),l=Ae(null),c=Ae(null),u=Ae(!1),h=Ae(!1),f=ke(()=>n.patient?.id),p=async()=>{if(!f.value){o.value=[];return}const L=await r.fetchScansForPatient(f.value);L&&(o.value=L)};et(()=>n.show,L=>{L&&f.value&&p()});const y=async L=>{const{id:U,patientId:F,isPregnant:W,pregnancyMonth:A,scanType:E,scanDate:w,dose:S,doctorDose:b,reason:T,notes:I,doctorAdditionalContext:Ce}=L,Ue={patientId:F,isPregnant:W,pregnancyMonth:A,scanType:E,scanDate:w,patientDose:S,doctorDose:b,reason:T,notes:I,doctorAdditionalContext:Ce};let be=!1;U?be=await r.updateScan(U,Ue):be=await r.createScan(Ue),be?(u.value=!1,await p(),i&&i()):alert(`${s.value==="en"?"Error saving patient scan:":"خطأ في حفظ فحص المريض:"} ${r.error}`)},C=async()=>{if(!c.value?.id)return;await r.deleteScan(c.value.id)?(h.value=!1,await p(),i&&i()):alert(`${s.value==="en"?"Error deleting scan:":"خطأ في حذف الفحص:"} ${r.error}`)};function O(){l.value=null,u.value=!0}function M(L){const U={...L,dose:L.patientDose};l.value=U,u.value=!0}function x(L){c.value=L,h.value=!0}const k=L=>!L||!L.toDate?"N/A":L.toDate().toLocaleDateString();return(L,U)=>(K(),Y(dt,null,[De(ns,{name:"modal-fade"},{default:Fn(()=>[t.show?(K(),Y("div",{key:0,class:"modal-overlay",onClick:U[1]||(U[1]=rt(F=>L.$emit("close"),["self"]))},[g("div",{class:"modal-content-details",dir:_(s)==="ar"?"rtl":"ltr"},[g("button",{class:"close-modal-button",onClick:U[0]||(U[0]=F=>L.$emit("close"))},"×"),t.patient?(K(),Y("div",RV,[g("h3",null,[Ot(R(_(s)==="en"?"Scan History for":"سجل الفحوصات لـ")+" ",1),g("strong",null,R(t.patient.name),1)]),g("p",null,R(_(s)==="en"?"Review past scans or add a new record.":"مراجعة الفحوصات السابقة أو إضافة سجل جديد."),1),g("button",{onClick:O,class:"add-scan-button"},[De(_(an),{icon:"plus"}),Ot(" "+R(_(s)==="en"?"Add New Scan":"إضافة فحص جديد"),1)]),g("div",DV,[_(r).loading?(K(),Y("div",kV,[De(_(an),{icon:"spinner",spin:""}),Ot(" "+R(_(s)==="en"?"Loading scans...":"جاري تحميل الفحوصات..."),1)])):o.value.length===0?(K(),Y("div",OV,R(_(s)==="en"?"No scans recorded for this patient yet.":"لا توجد فحوصات مسجلة لهذا المريض بعد."),1)):(K(),Y("ul",xV,[(K(!0),Y(dt,null,vi(o.value,F=>(K(),Y("li",{key:F.id,class:"scan-item"},[g("div",NV,[g("span",VV,R(F.scanType),1),g("span",MV,R(k(F.scanDate)),1),g("span",LV,R(_(s)==="en"?"Dose:":"الجرعة:")+" "+R(F.patientDose)+" mSv ",1)]),g("div",FV,[g("button",{onClick:W=>M(F),class:"action-button-icon edit-button"},[De(_(an),{icon:"edit"})],8,$V),g("button",{onClick:W=>x(F),class:"action-button-icon delete-button"},[De(_(an),{icon:"trash-alt"})],8,UV)])]))),128))]))])])):Te("",!0)],8,CV)])):Te("",!0)]),_:1}),De(bV,{show:u.value,patient:t.patient,scan:l.value,"is-saving":_(r).loading,onClose:U[2]||(U[2]=F=>u.value=!1),onSave:y},null,8,["show","patient","scan","is-saving"]),De(nf,{show:h.value,title:_(s)==="en"?"Delete Scan":"حذف الفحص",message:`${_(s)==="en"?"Are you sure you want to delete this scan from":"هل أنت متأكد من حذف هذا الفحص بتاريخ"} ${k(c.value?.scanDate)}?`,onClose:U[3]||(U[3]=F=>h.value=!1),onConfirm:C},null,8,["show","title","message"])],64))}},jV=At(BV,[["__scopeId","data-v-25dce0e9"]]),HV={class:"patient-list-page"},qV={class:"patient-list-main-content"},zV={class:"patient-list-card"},WV=["dir"],GV={key:0,class:"loading-message"},KV={key:1,class:"no-patients-message"},YV={key:2,class:"patient-table-container"},QV={class:"patient-table"},XV={class:"details-column"},JV={class:"details-column"},ZV={class:"details-column"},e4={class:"details-column"},t4={class:"action-buttons-wrapper"},n4=["onClick","title"],r4=["onClick","title"],s4=["onClick","title"],i4=["onClick","title"],o4={class:"switch-link-container"},a4={__name:"PatientsView",setup(t){const e=Zt(),n=Ls(),r=xs(),s=Be("currentLanguage"),i=Ae([]),o=Ae(null),l=Ae(null),c=Ae(null),u=Ae(!1),h=Ae(!1),f=Ae(!1),p=ke(()=>e.user?.uid),y=async()=>{const F=await n.fetchPatientsForDoctor();F&&(i.value=F)},C=async F=>{const{id:W,...A}=F;let E=!1;W?E=await n.updatePatientProfile(W,A):E=!!await n.addNewPatient(A),E?(u.value=!1,await y()):alert(`Failed to save patient. Error: ${n.error}`)},O=async()=>{if(!o.value?.id)return;await n.deletePatientProfile(o.value.id)?(f.value=!1,await y()):alert(`Failed to delete patient. Error: ${n.error}`)};function M(){c.value=null,u.value=!0}function x(F){c.value=F,u.value=!0}function k(F){l.value=F,h.value=!0}function L(F){o.value=F,f.value=!0}function U(F){F&&r.push({name:"recommend",query:{patientId:F}})}return et(p,F=>{F&&y()},{immediate:!0}),(F,W)=>(K(),Y("div",HV,[g("div",qV,[g("div",zV,[g("h2",null,R(_(s)==="en"?"Manage Patients":"إدارة المرضى"),1),g("p",null,R(_(s)==="en"?"Add new patients or view existing records":"أضف مرضى جدد أو اطلع على السجلات الحالية."),1),g("button",{onClick:M,class:"add-new-patient-button"},R(_(s)==="en"?"Add New Patient":"إضافة مريض جديد"),1),g("div",{class:"patient-list-section",dir:_(s)==="ar"?"rtl":"ltr"},[g("h3",null,R(_(s)==="en"?"Existing Patients":"المرضى الحاليون"),1),_(n).loading?(K(),Y("div",GV,[De(_(an),{icon:"spinner",spin:""}),Ot(" "+R(_(s)==="en"?"Loading patients...":"جاري تحميل المرضى..."),1)])):!i.value||i.value.length===0?(K(),Y("div",KV,R(_(s)==="en"?"No patients added yet.":"لم يتم إضافة أي مرضى بعد."),1)):(K(),Y("div",YV,[g("table",QV,[g("thead",null,[g("tr",null,[g("th",null,R(_(s)==="en"?"Name":"الاسم"),1),g("th",null,R(_(s)==="en"?"Age":"العمر"),1),g("th",null,R(_(s)==="en"?"Gender":"الجنس"),1),g("th",XV,R(_(s)==="en"?"Medical History":"التاريخ الطبي"),1),g("th",JV,R(_(s)==="en"?"Allergies":"الحساسية"),1),g("th",null,R(_(s)==="en"?"Actions":"الإجراءات"),1)])]),g("tbody",null,[(K(!0),Y(dt,null,vi(i.value,A=>(K(),Y("tr",{key:A.id},[g("td",null,R(A.name??"N/A"),1),g("td",null,R(A.age??"N/A"),1),g("td",null,R(_(s)==="en"?(A.gender?.charAt(0).toUpperCase()??"")+(A.gender?.slice(1)??"N/A"):A.gender==="male"?"ذكر":"أنثى"),1),g("td",ZV,R(A.medicalHistory?.join(", ")||(_(s)==="en"?"None":"لا يوجد")),1),g("td",e4,R(A.allergies?.join(", ")||(_(s)==="en"?"None":"لا يوجد")),1),g("td",null,[g("div",t4,[g("button",{onClick:E=>k(A),class:"action-button-sm view-button",title:_(s)==="en"?"View Scan History":"عرض سجل الفحوصات"},[De(_(an),{icon:"eye"})],8,n4),g("button",{onClick:E=>x(A),class:"action-button-sm edit-button",title:_(s)==="en"?"Edit Patient Details":"تعديل تفاصيل المريض"},[De(_(an),{icon:"edit"})],8,r4),g("button",{onClick:E=>L(A),class:"action-button-sm delete-button",title:_(s)==="en"?"Delete Patient":"حذف المريض"},[De(_(an),{icon:"trash-alt"})],8,s4),g("button",{onClick:E=>U(A.id),class:"action-button-sm recommend-button",title:_(s)==="en"?"Get Recommendation":"الحصول على توصية"},[De(_(an),{icon:"file-medical"})],8,i4)])])]))),128))])])]))],8,WV),g("div",o4,[g("a",{href:"#",onClick:W[0]||(W[0]=rt(A=>_(r).push("/dashboard"),["prevent"]))},R(_(s)==="en"?"Back to dashboard":"العودة إلى لوحة التحكم"),1)])])]),De(XN,{show:u.value,patient:c.value,"is-saving":_(n).loading,onClose:W[1]||(W[1]=A=>u.value=!1),onSave:C},null,8,["show","patient","is-saving"]),De(jV,{show:h.value,patient:l.value,onClose:W[2]||(W[2]=A=>h.value=!1)},null,8,["show","patient"]),De(nf,{show:f.value,title:_(s)==="en"?"Delete Patient":"حذف المريض",message:`${_(s)==="en"?"Are you sure you want to delete":"هل أنت متأكد من الحذف"} ${o.value?.name??"this patient"}?`,onClose:W[3]||(W[3]=A=>f.value=!1),onConfirm:O},null,8,["show","title","message"])]))}},l4=At(a4,[["__scopeId","data-v-7cb61bc8"]]),c4={key:0,class:"loading-container"},u4={key:0,class:"role-modal-backdrop"},h4={class:"role-modal"},d4={class:"form-group"},f4={value:"",disabled:""},p4={value:"doctor"},m4={value:"patient"},g4={class:"form-group"},y4={class:"form-group"},_4={value:"",disabled:""},v4={value:"male"},E4={value:"female"},w4={class:"form-group"},b4=["placeholder"],T4={class:"form-group"},I4=["placeholder"],A4=["disabled"],S4={key:1},P4={class:"dashboard-main-content"},C4={class:"dashboard-card"},R4=["dir"],D4=["dir"],k4={class:"dashboard-features"},O4=["dir"],x4=["dir"],N4=["dir"],V4=["dir"],M4=["dir"],L4=["dir"],F4={__name:"DashboardView",setup(t){const e=Zt(),n=Ls(),r=xs(),s=Ae({role:null,birthDate:"",gender:"",allergies:"",medicalHistory:""}),i=ke(()=>!e.isAuthReady||e.isProfileLoading),o=ke(()=>e.user?!e.isProfileComplete:!1),l=ke(()=>e.role),c=Be("currentLanguage"),u=async()=>{const{uid:f,email:p,displayName:y}=e.user,{role:C,birthDate:O,gender:M,allergies:x,medicalHistory:k}=s.value;if(!C||!O||!M){alert("Please fill out all required fields: Role, Birth Date, and Gender.");return}const L={email:p,displayName:y,role:C,birthDate:Re.fromDate(new Date(O)),gender:M,allergies:x.split(",").map(F=>F.trim()).filter(Boolean),medicalHistory:k.split(",").map(F=>F.trim()).filter(Boolean)};await n.setUserProfile(f,L)?e.setUserProfile(L):alert(`Failed to save profile. Error: ${n.error}`)},h=async()=>{await e.logout(),r.push("/signin")};return(f,p)=>(K(),Y("div",null,[i.value?(K(),Y("div",c4,[g("p",null,R(_(c)==="en"?"Verifying session...":"جار التحقق من الجلسة..."),1),De(_(an),{icon:"spinner",spin:"",size:"2x"})])):(K(),Y(dt,{key:1},[o.value?(K(),Y("div",u4,[g("div",h4,[g("h2",null,R(_(c)==="en"?"Complete Your Profile":"أكمل ملفك الشخصي"),1),g("div",d4,[g("label",null,R(_(c)==="en"?"I am a:":"أنا:"),1),fe(g("select",{"onUpdate:modelValue":p[0]||(p[0]=y=>s.value.role=y)},[g("option",f4,R(_(c)==="en"?"-- Select Role --":"-- اختر دورك --"),1),g("option",p4,R(_(c)==="en"?"Doctor":"طبيب"),1),g("option",m4,R(_(c)==="en"?"Patient":"مريض"),1)],512),[[cn,s.value.role]])]),g("div",g4,[g("label",null,R(_(c)==="en"?"Birth Date":"تاريخ الميلاد"),1),fe(g("input",{type:"date","onUpdate:modelValue":p[1]||(p[1]=y=>s.value.birthDate=y)},null,512),[[Oe,s.value.birthDate]])]),g("div",y4,[g("label",null,R(_(c)==="en"?"Gender":"الجنس"),1),fe(g("select",{"onUpdate:modelValue":p[2]||(p[2]=y=>s.value.gender=y)},[g("option",_4,R(_(c)==="en"?"-- Select Gender --":"-- اختر الجنس --"),1),g("option",v4,R(_(c)==="en"?"Male":"ذكر"),1),g("option",E4,R(_(c)==="en"?"Female":"أنثى"),1)],512),[[cn,s.value.gender]])]),g("div",w4,[g("label",null,R(_(c)==="en"?"Allergies (comma-separated)":"الحساسية (مفصولة بفاصلة)"),1),fe(g("textarea",{"onUpdate:modelValue":p[3]||(p[3]=y=>s.value.allergies=y),rows:"2",placeholder:_(c)==="en"?"e.g., Iodine-Based Dyes":"مثال: صبغات اليود"},null,8,b4),[[Oe,s.value.allergies]])]),g("div",T4,[g("label",null,R(_(c)==="en"?"Medical History (comma-separated)":"التاريخ الطبي (مفصول بفاصلة)"),1),fe(g("textarea",{"onUpdate:modelValue":p[4]||(p[4]=y=>s.value.medicalHistory=y),rows:"2",placeholder:_(c)==="en"?"e.g., Diabetes, Asthma":"مثال: مرض السكري, الربو"},null,8,I4),[[Oe,s.value.medicalHistory]])]),g("button",{class:"action-button",onClick:u,disabled:_(n).loading},[_(n).loading?(K(),Un(_(an),{key:0,icon:"spinner",spin:""})):(K(),Y("span",S4,R(_(c)==="en"?"Save & Continue":"حفظ ومتابعة"),1))],8,A4)])])):Te("",!0),g("div",{class:Ts(["dashboard-page dashboard-blur-area",{"is-blurred":o.value}])},[g("main",P4,[g("section",C4,[g("h2",{dir:_(c)==="ar"?"rtl":"ltr"},R(_(c)==="en"?"Welcome to mSv Dose Tracker":"مرحبًا بك في متتبع جرعات الأشعة السينية"),9,R4),g("p",{dir:_(c)==="ar"?"rtl":"ltr"},R(_(c)==="en"?"Your comprehensive tool for managing radiation exposure.":"أداتك الشاملة لإدارة التعرض للإشعاع."),9,D4),g("div",k4,[g("div",{class:"feature-item",onClick:p[5]||(p[5]=y=>_(r).push("/recommend"))},[p[8]||(p[8]=g("i",{class:"fas fa-file-medical"},null,-1)),g("h3",{dir:_(c)==="ar"?"rtl":"ltr"},R(_(c)==="en"?"Get Scan Recommendation":"الحصول على توصية"),9,O4),g("p",{dir:_(c)==="ar"?"rtl":"ltr"},R(_(c)==="en"?"Use AI to get recommendations on the necessity of radiological scans.":"استخدم الذكاء الاصطناعي للحصول على توصيات حول ضرورة الفحوصات الإشعاعية."),9,x4)]),l.value==="doctor"?(K(),Y("div",{key:0,class:"feature-item",onClick:p[6]||(p[6]=y=>_(r).push("/patients"))},[p[9]||(p[9]=g("i",{class:"fas fa-users"},null,-1)),g("h3",{dir:_(c)==="ar"?"rtl":"ltr"},R(_(c)==="en"?"Manage Patients":"إدارة المرضى"),9,N4),g("p",{dir:_(c)==="ar"?"rtl":"ltr"},R(_(c)==="en"?"View, add, and manage your patient records and their scan histories.":"عرض وإضافة وإدارة سجلات مرضاك وتاريخ فحوصاتهم."),9,V4)])):Te("",!0),g("div",{class:"feature-item",onClick:p[7]||(p[7]=y=>_(r).push("/profile"))},[p[10]||(p[10]=g("i",{class:"fas fa-user"},null,-1)),g("h3",{dir:_(c)==="ar"?"rtl":"ltr"},R(_(c)==="en"?"View Profile":"عرض الملف الشخصي"),9,M4),g("p",{dir:_(c)==="ar"?"rtl":"ltr"},R(_(c)==="en"?"Review your personal details and dose history.":"راجع معلوماتك الشخصية وسجل جرعاتك."),9,L4)])]),g("button",{onClick:h,class:"action-button secondary logout-button"},R(_(c)==="en"?"Logout":"تسجيل الخروج"),1)])])],2)],64))]))}},$4=At(F4,[["__scopeId","data-v-f652aedd"]]),U4={class:"reset-password-page"},B4={class:"reset-password-main-content"},j4={class:"reset-password-card"},H4=["dir"],q4=["dir"],z4={class:"form-group"},W4=["dir"],G4=["placeholder","dir"],K4=["disabled"],Y4={key:0},Q4={key:1},X4=["dir"],J4=["dir"],Z4=["dir"],eM={__name:"ResetPasswordView",setup(t){const e=xs(),n=Zt(),r=Be("currentLanguage"),s=Ae(""),i=async()=>{await n.sendPasswordReset(s.value)},o=()=>{e.push("/signin")};return(l,c)=>(K(),Y("div",U4,[g("main",B4,[g("section",j4,[g("h2",{dir:_(r)==="ar"?"rtl":"ltr"},R(_(r)==="en"?"Reset Your Password":"إعادة تعيين كلمة المرور"),9,H4),g("p",{dir:_(r)==="ar"?"rtl":"ltr"},R(_(r)==="en"?"Enter your email address to receive a password reset link.":"أدخل عنوان بريدك الإلكتروني لتلقي رابط إعادة تعيين كلمة المرور."),9,q4),g("form",{onSubmit:rt(i,["prevent"]),class:"reset-password-form"},[g("div",z4,[g("label",{for:"email",dir:_(r)==="ar"?"rtl":"ltr"},R(_(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,W4),fe(g("input",{type:"email",id:"email","onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),placeholder:_(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:_(r)==="ar"?"rtl":"ltr",required:""},null,8,G4),[[Oe,s.value]])]),g("button",{class:"action-button primary",type:"submit",disabled:_(n).loading},[_(n).loading?(K(),Y("span",Y4,R(_(r)==="en"?"Sending Link...":"جاري إرسال الرابط..."),1)):(K(),Y("span",Q4,R(_(r)==="en"?"Send Reset Link":"إرسال رابط إعادة التعيين"),1))],8,K4)],32),_(n).error?(K(),Y("div",{key:0,class:"message error-message",dir:_(r)==="ar"?"rtl":"ltr"},R(_(n).error),9,X4)):Te("",!0),_(n).successMessage?(K(),Y("div",{key:1,class:"message success-message",dir:_(r)==="ar"?"rtl":"ltr"},R(_(n).successMessage),9,J4)):Te("",!0),g("p",{class:"switch-link-container",dir:_(r)==="ar"?"rtl":"ltr"},[Ot(R(_(r)==="en"?"Remembered your password?":"هل تذكرت كلمة المرور؟")+" ",1),g("a",{href:"#",onClick:rt(o,["prevent"])},R(_(r)==="en"?"Sign In":"تسجيل الدخول"),1)],8,Z4)])])]))}},tM=At(eM,[["__scopeId","data-v-73a48bd7"]]),nM=["dir"],rM={class:"modal-title"},sM={class:"form-group"},iM={value:"doctor"},oM={value:"patient"},aM={class:"form-group"},lM={class:"form-group"},cM={value:"male"},uM={value:"female"},hM={key:0,class:"pregnancy-section"},dM={class:"form-group checkbox-group"},fM={key:0,class:"form-group"},pM={class:"form-group"},mM={class:"form-group"},gM={class:"modal-actions"},yM={type:"submit",class:"action-button"},_M={__name:"ProfileFormModal",props:{show:Boolean,profileData:{type:Object,default:()=>null}},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=Be("currentLanguage"),i=hr({role:"",birthDate:"",gender:"male",isPregnant:!1,estimatedDueDate:"",allergies:"",medicalHistory:""});et(()=>n.show,l=>{l&&n.profileData&&(console.log("ProfileFormModal: Modal is shown, populating form with data:",n.profileData),i.role=n.profileData.role||"patient",i.birthDate=n.profileData.birthDate||"",i.gender=n.profileData.gender||"male",i.isPregnant=n.profileData.isPregnant||!1,i.estimatedDueDate=n.profileData.estimatedDueDate||"",i.allergies=Array.isArray(n.profileData.allergies)?n.profileData.allergies.join(", "):"",i.medicalHistory=Array.isArray(n.profileData.medicalHistory)?n.profileData.medicalHistory.join(", "):"")},{immediate:!0}),et(()=>i.gender,l=>{l==="male"&&(i.isPregnant=!1,i.estimatedDueDate="")}),et(()=>i.isPregnant,l=>{l||(i.estimatedDueDate="")});const o=()=>{if(!i.role||!i.birthDate||!i.gender){alert("Role, Birth Date, and Gender are required.");return}if(i.isPregnant&&!i.estimatedDueDate){alert("Estimated due date is required for pregnant patients.");return}r("save",i)};return(l,c)=>(K(),Un(ns,{name:"modal-fade"},{default:Fn(()=>[t.show?(K(),Y("div",{key:0,class:"modal-overlay",onClick:c[9]||(c[9]=rt(u=>r("close"),["self"]))},[g("div",{class:"modal-content",dir:_(s)==="ar"?"rtl":"ltr"},[g("button",{class:"close-button",onClick:c[0]||(c[0]=u=>r("close"))},"×"),g("h3",rM,R(_(s)==="en"?"Edit Profile":"تعديل الملف الشخصي"),1),g("form",{onSubmit:rt(o,["prevent"]),class:"profile-form"},[g("div",sM,[g("label",null,R(_(s)==="en"?"Role":"الدور"),1),fe(g("select",{"onUpdate:modelValue":c[1]||(c[1]=u=>i.role=u),required:""},[g("option",iM,R(_(s)==="en"?"Doctor":"طبيب"),1),g("option",oM,R(_(s)==="en"?"Patient":"مريض"),1)],512),[[cn,i.role]])]),g("div",aM,[g("label",null,R(_(s)==="en"?"Birth Date":"تاريخ الميلاد"),1),fe(g("input",{type:"date","onUpdate:modelValue":c[2]||(c[2]=u=>i.birthDate=u),required:""},null,512),[[Oe,i.birthDate]])]),g("div",lM,[g("label",null,R(_(s)==="en"?"Gender":"الجنس"),1),fe(g("select",{"onUpdate:modelValue":c[3]||(c[3]=u=>i.gender=u),required:""},[g("option",cM,R(_(s)==="en"?"Male":"ذكر"),1),g("option",uM,R(_(s)==="en"?"Female":"أنثى"),1)],512),[[cn,i.gender]])]),i.gender==="female"?(K(),Y("div",hM,[g("div",dM,[g("label",null,[fe(g("input",{type:"checkbox","onUpdate:modelValue":c[4]||(c[4]=u=>i.isPregnant=u)},null,512),[[Kl,i.isPregnant]]),g("span",null,R(_(s)==="en"?"Currently Pregnant?":"هل أنت حامل حاليًا؟"),1)])]),i.isPregnant?(K(),Y("div",fM,[g("label",null,R(_(s)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع"),1),fe(g("input",{type:"date","onUpdate:modelValue":c[5]||(c[5]=u=>i.estimatedDueDate=u),required:""},null,512),[[Oe,i.estimatedDueDate]])])):Te("",!0)])):Te("",!0),g("div",pM,[g("label",null,R(_(s)==="en"?"Allergies (comma-separated)":"الحساسية (مفصولة بفاصلة)"),1),fe(g("textarea",{"onUpdate:modelValue":c[6]||(c[6]=u=>i.allergies=u),rows:"2"},null,512),[[Oe,i.allergies]])]),g("div",mM,[g("label",null,R(_(s)==="en"?"Medical History (comma-separated)":"التاريخ الطبي (مفصول بفاصلة)"),1),fe(g("textarea",{"onUpdate:modelValue":c[7]||(c[7]=u=>i.medicalHistory=u),rows:"2"},null,512),[[Oe,i.medicalHistory]])]),g("div",gM,[g("button",{type:"button",onClick:c[8]||(c[8]=u=>r("close")),class:"action-button secondary"},R(_(s)==="en"?"Cancel":"إلغاء"),1),g("button",yM,R(_(s)==="en"?"Save Changes":"حفظ التغييرات"),1)])],32)],8,nM)])):Te("",!0)]),_:1}))}},vM=At(_M,[["__scopeId","data-v-2d4615c7"]]),EM=["dir"],wM={class:"form-row"},bM={class:"form-group"},TM={value:"X-ray"},IM={value:"CT"},AM={class:"form-group"},SM={disabled:"",value:""},PM=["value"],CM={key:0,class:"form-group"},RM=["placeholder"],DM={class:"form-group"},kM={class:"form-group"},OM=["placeholder"],xM={class:"form-group"},NM={class:"form-group"},VM={class:"modal-actions"},MM=["disabled"],LM={__name:"PersonalScanFormModal",props:{show:Boolean,scan:Object,isSaving:Boolean},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=Zt();Ls();const i=Be("currentLanguage"),o={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Swallow",en:"Barium Swallow",ar:"بلع الباريوم"},{value:"Barium Meal",en:"Barium Meal",ar:"وجبة الباريوم"},{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},l=hr({id:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanDate:"",patientDose:null,reason:"",notes:""}),c=ke(()=>o[l.scanType]||[]),u=ke(()=>l.subScanType==="Other");et(()=>n.show,p=>{if(p&&(Object.assign(l,{id:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanDate:new Date().toISOString().split("T")[0],patientDose:null,reason:"",notes:""}),n.scan)){l.id=n.scan.id,l.scanType=n.scan.scanType,l.scanDate=n.scan.scanDate?.toDate()?.toISOString().split("T")[0]||"",l.patientDose=n.scan.patientDose,l.reason=n.scan.reason,l.notes=n.scan.notes;const y=n.scan.scanDetail;c.value.some(O=>O.value===y)?l.subScanType=y:y&&(l.subScanType="Other",l.otherScanDescription=y)}}),et(()=>l.scanType,()=>{l.subScanType="",l.otherScanDescription=""});const h=async()=>{const p=s.userProfile,y=p?.birthDate?new Date().getFullYear()-p.birthDate.toDate().getFullYear():"N/A",C=c.value.find(k=>k.value===l.subScanType);let O="";u.value?O=l.otherScanDescription:C&&(O=i.value==="en"?C.en:C.ar);const M=`Estimate the typical effective dose (in mSv) for a patient undergoing a ${l.scanType} scan with the specific protocol: "${O}". Patient Age: ${y}. Reason for scan: "${l.reason||"Not provided"}". Respond ONLY with a single number. Do not add any other text or units.`,x=l.scanType==="CT"?{min:.5,max:40}:{min:.001,max:10};try{const F=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB9KAR0P6sxAj7fP2I-MyVSVOJJaW0J91M",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:M}]}],generationConfig:{responseMimeType:"text/plain"}})});if(!F.ok)throw new Error(`API Error: ${F.statusText}`);const A=(await F.json()).candidates?.[0]?.content?.parts?.[0]?.text||"",E=parseFloat(A.match(/[\d.]+/));if(isNaN(E)||E<x.min||E>x.max)throw new Error("AI returned an invalid or out-of-range value.");return l.patientDose=E,!0}catch(k){return console.error("Dose estimation failed:",k),alert(i.value==="en"?"AI estimation failed. Please enter the dose manually.":"فشل تقدير الذكاء الاصطناعي. يرجى إدخال الجرعة يدويًا."),!1}},f=async()=>{if(!l.scanDate||!l.subScanType||l.subScanType==="Other"&&!l.otherScanDescription){alert(i.value==="en"?"Please fill all required scan details.":"يرجى ملء جميع تفاصيل الفحص المطلوبة.");return}if(!l.patientDose&&l.patientDose!==0&&!await h())return;const p=u.value?l.otherScanDescription:l.subScanType,y={id:l.id,scanType:l.scanType,scanDetail:p,scanDate:l.scanDate,patientDose:l.patientDose,reason:l.reason,notes:l.notes,isPersonalScan:!0};r("save",y)};return(p,y)=>(K(),Un(ns,{name:"modal-fade"},{default:Fn(()=>[t.show?(K(),Y("div",{key:0,class:"modal-overlay",onClick:y[9]||(y[9]=rt(C=>p.$emit("close"),["self"]))},[g("div",{class:"modal-content",dir:_(i)==="ar"?"rtl":"ltr"},[g("button",{class:"close-modal-button",onClick:y[0]||(y[0]=C=>p.$emit("close"))},"×"),g("h3",null,R(t.scan?_(i)==="en"?"Edit Personal Scan":"تعديل الفحص الشخصي":_(i)==="en"?"Add Personal Scan":"إضافة فحص شخصي"),1),g("form",{onSubmit:rt(f,["prevent"]),class:"scan-form"},[g("div",wM,[g("div",bM,[g("label",null,R(_(i)==="en"?"Scan Category":"فئة الفحص"),1),fe(g("select",{"onUpdate:modelValue":y[1]||(y[1]=C=>l.scanType=C),required:""},[g("option",TM,R(_(i)==="en"?"X-ray":"أشعة سينية"),1),g("option",IM,R(_(i)==="en"?"CT":"أشعة مقطعية"),1)],512),[[cn,l.scanType]])]),g("div",AM,[g("label",null,R(_(i)==="en"?"Scan Protocol":"بروتوكول الفحص"),1),fe(g("select",{"onUpdate:modelValue":y[2]||(y[2]=C=>l.subScanType=C),required:""},[g("option",SM,R(_(i)==="en"?"Select...":"اختر..."),1),(K(!0),Y(dt,null,vi(c.value,C=>(K(),Y("option",{key:C.value,value:C.value},R(_(i)==="en"?C.en:C.ar),9,PM))),128))],512),[[cn,l.subScanType]])])]),u.value?(K(),Y("div",CM,[g("label",null,R(_(i)==="en"?"Please specify scan protocol":"يرجى تحديد بروتوكول الفحص"),1),fe(g("input",{type:"text","onUpdate:modelValue":y[3]||(y[3]=C=>l.otherScanDescription=C),placeholder:_(i)==="en"?"e.g., Left Hand X-ray":"مثال: أشعة سينية لليد اليسرى",required:""},null,8,RM),[[Oe,l.otherScanDescription]])])):Te("",!0),g("div",DM,[g("label",null,R(_(i)==="en"?"Scan Date":"تاريخ الفحص"),1),fe(g("input",{type:"date","onUpdate:modelValue":y[4]||(y[4]=C=>l.scanDate=C),required:""},null,512),[[Oe,l.scanDate]])]),g("div",kM,[g("label",null,R(_(i)==="en"?"Your Dose (mSv)":"جرعتك (mSv)"),1),fe(g("input",{type:"number",step:"0.01","onUpdate:modelValue":y[5]||(y[5]=C=>l.patientDose=C),placeholder:_(i)==="en"?"Leave blank for AI estimate":"اتركه فارغًا لتقدير الذكاء الاصطناعي"},null,8,OM),[[Oe,l.patientDose]])]),g("div",xM,[g("label",null,R(_(i)==="en"?"Reason for Scan":"أسباب الفحص"),1),fe(g("textarea",{"onUpdate:modelValue":y[6]||(y[6]=C=>l.reason=C),rows:"2"},null,512),[[Oe,l.reason]])]),g("div",NM,[g("label",null,R(_(i)==="en"?"Additional Notes":"ملاحظات إضافية"),1),fe(g("textarea",{"onUpdate:modelValue":y[7]||(y[7]=C=>l.notes=C),rows:"3"},null,512),[[Oe,l.notes]])]),g("div",VM,[g("button",{type:"button",onClick:y[8]||(y[8]=C=>p.$emit("close")),class:"action-button secondary"},R(_(i)==="en"?"Cancel":"إلغاء"),1),g("button",{type:"submit",class:"action-button",disabled:t.isSaving},R(t.isSaving?_(i)==="en"?"Saving...":"جار الحفظ...":_(i)==="en"?"Save":"حفظ"),9,MM)])],32)],8,EM)])):Te("",!0)]),_:1}))}},FM=At(LM,[["__scopeId","data-v-213e1796"]]),$M={class:"history-table-container"},UM={key:0,class:"loading-message"},BM={key:1,class:"no-items-message"},jM={key:2,class:"history-table"},HM={key:0},qM={class:"reason-column"},zM={key:1},WM={class:"actions-column"},GM={key:0},KM={class:"reason-column"},YM={key:1},QM={class:"action-buttons-wrapper"},XM=["onClick"],JM=["onClick"],ZM={__name:"HistoryTable",props:{scans:Array,isLoading:Boolean,isPersonalView:{type:Boolean,default:!1}},emits:["edit","delete"],setup(t,{emit:e}){const n=Zt(),r=Be("currentLanguage");ke(()=>n.role);const s=o=>{if(!o)return"N/A";const l=o.toDate?o.toDate():new Date(o);return isNaN(l)?"Invalid Date":new Date(l).toLocaleDateString("en-GB")},i=o=>typeof o=="number"?o.toFixed(3):"N/A";return(o,l)=>(K(),Y("div",$M,[t.isLoading?(K(),Y("div",UM,"...")):t.scans.length===0?(K(),Y("div",BM,R(_(r)==="en"?"No scan history found.":"لم يتم العثور على سجل فحوصات."),1)):(K(),Y("table",jM,[g("thead",null,[g("tr",null,[t.isPersonalView?Te("",!0):(K(),Y("th",HM,R(_(r)==="en"?"Patient Name":"اسم المريض"),1)),g("th",null,R(_(r)==="en"?"Scan Type":"نوع الفحص"),1),g("th",null,R(_(r)==="en"?"Scan Date":"تاريخ الفحص"),1),g("th",qM,R(_(r)==="en"?"Reason":"السبب"),1),g("th",null,R(_(r)==="en"?"Patient's Dose":"جرعة المريض"),1),t.isPersonalView?Te("",!0):(K(),Y("th",zM,R(_(r)==="en"?"Doctor's Dose":"جرعة الطبيب"),1)),g("th",WM,R(_(r)==="en"?"Actions":"الإجراءات"),1)])]),g("tbody",null,[(K(!0),Y(dt,null,vi(t.scans,c=>(K(),Y("tr",{key:c.id},[t.isPersonalView?Te("",!0):(K(),Y("td",GM,R(c.patientName),1)),g("td",null,R(c.scanType),1),g("td",null,R(s(c.scanDate)),1),g("td",KM,R(c.reason||"N/A"),1),g("td",null,R(i(c.patientDose)),1),t.isPersonalView?Te("",!0):(K(),Y("td",YM,R(i(c.doctorDose)),1)),g("td",null,[g("div",QM,[g("button",{onClick:u=>o.$emit("edit",c),class:"action-button-sm edit-button"},R(_(r)==="en"?"Edit":"تعديل"),9,XM),g("button",{onClick:u=>o.$emit("delete",c),class:"action-button-sm delete-button"},R(_(r)==="en"?"Delete":"حذف"),9,JM)])])]))),128))])]))]))}},eL=At(ZM,[["__scopeId","data-v-6b648eda"]]),tL=["dir"],nL={class:"profile-section card"},rL={class:"card-header"},sL={key:0,class:"loading-state"},iL={key:1,class:"profile-details"},oL={key:0,class:"role-tag"},aL={key:1,class:"role-tag"},lL={key:0},cL={key:1},uL={key:2},hL={key:0},dL={key:0},fL={key:1},pL={class:"history-section card"},mL={class:"card-header"},gL={class:"switch-link-container"},yL={__name:"ProfileView",setup(t){const e=Zt(),n=Ls(),r=xs(),s=Be("currentLanguage"),i=Be("triggerMsvRecalculation"),o=Ae([]),l=Ae(!1),c=Ae(!1),u=Ae(!1),h=Ae(null),f=Ae(null),p=ke(()=>e.user?.uid),y=ke(()=>{if(!e.userProfile)return{displayName:e.user?.displayName||"",email:e.user?.email||""};const F=W=>{if(!W)return"";const A=W.toDate?W.toDate():new Date(W);return isNaN(A)?"":A.toISOString().split("T")[0]};return{...e.userProfile,displayName:e.user?.displayName,email:e.user?.email,birthDate:F(e.userProfile.birthDate),estimatedDueDate:F(e.userProfile.estimatedDueDate)}}),C=async()=>{if(!p.value)return;const F=await n.fetchScansForPatient(p.value);F&&(o.value=F)},O=async F=>{if(!p.value)return;const W={...e.userProfile,displayName:e.user.displayName,email:e.user.email,role:F.role,birthDate:Re.fromDate(new Date(F.birthDate)),gender:F.gender,isPregnant:F.isPregnant,estimatedDueDate:F.isPregnant&&F.estimatedDueDate?Re.fromDate(new Date(F.estimatedDueDate)):null,allergies:Array.isArray(F.allergies)?F.allergies:F.allergies.split(",").map(E=>E.trim()).filter(Boolean),medicalHistory:Array.isArray(F.medicalHistory)?F.medicalHistory:F.medicalHistory.split(",").map(E=>E.trim()).filter(Boolean)};await n.setUserProfile(p.value,W)?(e.setUserProfile(W),l.value=!1,i&&i()):alert(`Failed to save profile. Error: ${n.error}`)},M=async F=>{if(!p.value)return;const W={patientId:p.value,scanType:F.scanType,scanDate:Re.fromDate(new Date(F.scanDate)),patientDose:Number(F.patientDose),doctorDose:0,reason:F.reason,notes:F.notes};(F.id?await n.updateScan(F.id,W):await n.createScan(W))?(c.value=!1,await C(),i&&i()):alert(`Failed to save scan: ${n.error}`)},x=async()=>{if(!f.value?.id)return;await n.deleteScan(f.value.id)?(u.value=!1,await C(),i&&i()):alert(`Failed to delete scan: ${n.error}`)},k=()=>{h.value=null,c.value=!0},L=F=>{h.value=F,c.value=!0},U=F=>{f.value=F,u.value=!0};return Hh(()=>{et(()=>e.isAuthReady,F=>{F&&p.value&&C()},{immediate:!0})}),(F,W)=>(K(),Y("div",{class:"profile-page",dir:_(s)==="ar"?"rtl":"ltr"},[g("div",nL,[g("div",rL,[g("h2",null,R(_(s)==="en"?"My Profile":"ملفي الشخصي"),1),g("button",{onClick:W[0]||(W[0]=A=>l.value=!0),class:"action-button"},R(_(s)==="en"?"Edit Profile":"تعديل الملف الشخصي"),1)]),_(e).isProfileLoading?(K(),Y("div",sL,"Loading profile...")):y.value?(K(),Y("div",iL,[g("p",null,[g("strong",null,R(_(s)==="en"?"Name:":"اﻹسم:"),1),g("span",null,R(y.value.displayName),1)]),g("p",null,[g("strong",null,R(_(s)==="en"?"Email:":"البريد اﻹلكتروني:"),1),g("span",null,R(y.value.email),1)]),g("p",null,[g("strong",null,R(_(s)==="en"?"Role":"الدور")+":",1),y.value.role==="doctor"?(K(),Y("span",oL,R(_(s)==="en"?"Doctor":"طبيب"),1)):(K(),Y("span",aL,R(_(s)==="en"?"Patient":"مريض"),1))]),g("p",null,[g("strong",null,R(_(s)==="en"?"Birth Date:":"تاريخ الميلاد:"),1),g("span",null,R(y.value.birthDate||"Not set"),1)]),g("p",null,[g("strong",null,R(_(s)==="en"?"Gender: ":"الجنس: "),1),y.value.gender==="male"?(K(),Y("span",lL,R(_(s)==="en"?"Male":"ذكر"),1)):y.value.gender==="female"?(K(),Y("span",cL,R(_(s)==="en"?"Female":"أنثى"),1)):(K(),Y("span",uL,"Not set"))]),y.value.gender==="female"?(K(),Y("p",hL,[g("strong",null,R(_(s)==="en"?"Pregnant: ":"حامل: "),1),y.value.isPregnant?(K(),Y("span",dL,R(_(s)==="en"?"Yes":"نعم")+" ("+R(_(s)==="en"?"Due:":"المتوقع:")+" "+R(y.value.estimatedDueDate)+")",1)):(K(),Y("span",fL,R(_(s)==="en"?"No":"لا"),1))])):Te("",!0),g("p",null,[g("strong",null,R(_(s)==="en"?"Allergies:":"الحساسية:"),1),g("span",null,R(y.value.allergies?.join(", ")||"None"),1)]),g("p",null,[g("strong",null,R(_(s)==="en"?"Medical History:":"التاريخ الطبي:"),1),g("span",null,R(y.value.medicalHistory?.join(", ")||"None"),1)])])):Te("",!0)]),g("div",pL,[g("div",mL,[g("h2",null,R(_(s)==="en"?"Personal Scan History":"تاريخ الفحوصات الشخصية"),1),g("button",{onClick:k,class:"action-button"},R(_(s)==="en"?"Add Personal Scan":"إضافة فحص شخصي"),1)]),De(eL,{scans:o.value,"is-loading":_(n).loading,"is-personal-view":!0,onEdit:L,onDelete:U},null,8,["scans","is-loading"])]),De(vM,{show:l.value,"profile-data":y.value,onClose:W[1]||(W[1]=A=>l.value=!1),onSave:O},null,8,["show","profile-data"]),De(FM,{show:c.value,scan:h.value,"is-saving":_(n).loading,onClose:W[2]||(W[2]=A=>c.value=!1),onSave:M},null,8,["show","scan","is-saving"]),De(nf,{show:u.value,title:"Delete Scan",message:"Are you sure you want to delete this scan?",onClose:W[3]||(W[3]=A=>u.value=!1),onConfirm:x},null,8,["show"]),g("div",gL,[g("a",{href:"#",onClick:W[4]||(W[4]=rt(A=>_(r).push("/dashboard"),["prevent"]))},R(_(s)==="en"?"Back to dashboard":"العودة إلى لوحة التحكم"),1)])],8,tL))}},_L=At(yL,[["__scopeId","data-v-2ff55410"]]),Nl=YT({history:AT("/X-ray"),routes:[{path:"/",name:"signup",component:ck},{path:"/signin",name:"signin",component:kk},{path:"/dashboard",name:"dashboard",component:$4,meta:{requiresAuth:!0}},{path:"/recommend/:patientId?",name:"recommend",component:bO,meta:{requiresAuth:!0}},{path:"/patients",name:"patients",component:l4,meta:{requiresAuth:!0}},{path:"/profile",name:"profile",component:_L,meta:{requiresAuth:!0}},{path:"/resetpassword",name:"resetpassword",component:tM},{path:"/__/auth/handler",name:"firebaseAuthHandler",component:{render(){return oi("div")}},beforeEnter:(t,e,n)=>{n()}},{path:"/:catchAll(.*)",redirect:"/dashboard"},{path:"/__/auth/iframe",name:"firebaseAuthIframeHandler",component:{render(){return oi("div")}},beforeEnter:(t,e,n)=>{n()}}]});Nl.beforeEach(async(t,e,n)=>{const r=Zt();r.isAuthReady||await new Promise(l=>{const c=r.$subscribe((u,h)=>{h.isAuthReady&&(c(),l())})});const s=!!r.user;if(t.path.startsWith("/__/auth/handler")||t.path.startsWith("/__/auth/iframe")){n();return}console.log(`Navigating to: ${t.path} (name: ${t.name})`),console.log(`isAuthenticated: ${s}`);const o=["signup","signin","resetpassword","newpassword"].includes(t.name);s?o?(console.log(`Redirecting authenticated user from ${t.name} to /dashboard.`),n("/dashboard")):(console.log(`Allowing authenticated access to ${t.path}.`),n()):o?(console.log(`Allowing unauthenticated access to ${t.name}.`),n()):(console.log(`Redirecting unauthenticated user from ${t.path} (requires auth) to /signin.`),n("/signin"))});var vL="firebase",EL="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Br(vL,EL,"app");/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const wL={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]},bL=wL,TL={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},IL=TL,AL={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},SL={prefix:"fas",iconName:"file-medical",icon:[384,512,[],"f477","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM160 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z"]},PL={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},CL={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};TN.add(AL,IL,bL,SL,PL,CL);const RL={apiKey:"AIzaSyBKiw2ibjMQB-i_sMorpK5nXyHb87_6uZA",authDomain:"x-ray-b0cb8.firebaseapp.com",projectId:"x-ray-b0cb8",storageBucket:"x-ray-b0cb8.firebasestorage.app",messagingSenderId:"382664693760",appId:"1:382664693760:web:7582abe58d70b3260f20e5",measurementId:"G-5MKNMY9VGY"},Ww=W_(RL),rf=aC(Ww),DL=vo(Ww),gr=W0(U2),kL=JT();gr.use(kL);gr.use(Nl);gr.component("font-awesome-icon",an);const Ph=Ae(null),Gw=Ae(!1),to=Zt();to.initAuth(rf);yv(rf,t=>{if(Ph.value=t?t.uid:null,to.user=t,to.isAuthenticated=!!t,Gw.value=!0,t){const e=Nl.currentRoute.value.name;["signup","signin","resetpassword","newpassword"].includes(e)&&Nl.push("/dashboard")}else Ph.value=null,to.user=null,to.isAuthenticated=!1});gr.provide("db",DL);gr.provide("auth",rf);gr.provide("currentUserId",Ph);gr.provide("isAuthReady",Gw);gr.provide("appId",typeof __app_id<"u"?__app_id:"default-app-id");gr.mount("#app");
